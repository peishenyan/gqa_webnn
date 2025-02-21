# Build Group Query Attention (GQA) for WebNN

## GQA graph pattern
The GQA pattern of WebNN EP is as follows:
```
 Abbreviatios: B is batch_size, S is sequence_length, W is hidden_size, P is past_sequence_length
               N is number of attention heads, H is head size, and W=N*H, h=Sqrt(H), G is group size.

          query             key       value
            |                |          |
         Reshape          Reshape     Reshape (B,S,H,N)
            |      past_key  /          |
            |         |     /           |
          q_Transpose |    /            |
           (0,2,1,3)  |   /             |                    seqlens_k
             \        |  /              |                     /     |
              \       | /               |                    /      |
present_key<---\----ScatterND <---------|-----(scatter_indices*)    |
               |      |                 |        /                  |
               |  k_Transpose           |       /                   |
               \  (0,1,3,2)             |      /                    |
                \     |                 |     /                     |
                 \  Expand(G)           |    /                      |
                  \   |     past_value  |   /                       |
                qk_MatMul          \    |  /                        |
                      |            ScatterND-----> present_value    |
                  qk_Div              /                             |
                      |              /                              |
                     Add <----------/--------(attention_bias, one/finfo_min mask*)
                      |            /
                    Softmax     Expand(G)
                       \         /
                        \       /
                      qkv_MatMul
                             |
                          Transpose (perm=0,2,1,3)
                             |
                          Reshape---(shape=B,S,W)
                             |
                           output
```

scatter_indices's calculation:
```
                                                                                               if_prefill (0/1 constant)
                                                                                                    |
        scatter_indices_left_constant             scatter_indices_right_constant           0 ---> Where <--- Cast <---seqlens_k
                      |                                          |                                  |
                      |                                         Add <--------------------------- scatter_pos*
                      |                                          |
                      +--------------------+---------------------+
                                           |
                                      scatter_indices
```

attention_bias's caculation
```
                  ones_array (shape=B,N,S,P)                                  range_of_qkv_sequence_length_constant (0,1,2,...) (shape=S)
                      |                                                                          |
                   CumSum (axis=3, exclusive=true, reversed=false)                              Add <--- scatter_pos
                      |                                                                          |
                      |                                                                        Expand (shape=P,S)
                      |                                                                          |
                      +-------------------------------> Lesser <------------------------------Transpose (1,0)
                                                           |
                                                  1 ---> Where <--- finfo_min (minimum value of FP32)
                                                           |
                                                      attention_bias
```

## Implementation
In onnxruntime, we create a pull request: https://github.com/microsoft/onnxruntime/pull/23416. The GQA details for WebNN EP is in `onnxruntime/core/providers/webnn/builders/impl/attention_op_builder.cc`.

## Test Example
Github Pages: https://peishenyan.github.io/gqa_webnn/
1. [`gqa.html`](https://peishenyan.github.io/gqa_webnn/gqa.html) uses WebNN api to compute GQA in a decomposed graph, compared to onnxruntime-web CPU EP execution result of a GQA onnx graph.
2. [`benchmark_GQA_prefill.html`](https://peishenyan.github.io/gqa_webnn/benchmark_GQA_prefill.html) and [`benchmark_GQA_decode.html`](https://peishenyan.github.io/gqa_webnn/benchmark_GQA_decode.html) are two test cases for prefilling and decoding stages of a GQA onnx graph, comparing the results of onnxruntime WebNN EP and CPU EP. 

## Decomposed Graph of GQA
`models/GQA_decomposed_seq_25.onnx` and `models/GQA_decomposed_seq_1.onnx` are the decomposed graphs of the GQA operator in the prefilling and decoding stages, respectively.