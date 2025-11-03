/*!
 * ONNX Runtime Web v1.24.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var VE=Object.create;var Fo=Object.defineProperty;var UE=Object.getOwnPropertyDescriptor;var GE=Object.getOwnPropertyNames;var WE=Object.getPrototypeOf,HE=Object.prototype.hasOwnProperty;var au=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var X=(r,e)=>()=>(r&&(e=r(r=0)),e);var ve=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),Wr=(r,e)=>{for(var t in e)Fo(r,t,{get:e[t],enumerable:!0})},Py=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of GE(e))!HE.call(r,i)&&i!==t&&Fo(r,i,{get:()=>e[i],enumerable:!(n=UE(e,i))||n.enumerable});return r};var Re=(r,e,t)=>(t=r!=null?VE(WE(r)):{},Py(e||!r||!r.__esModule?Fo(t,"default",{value:r,enumerable:!0}):t,r)),bi=r=>Py(Fo({},"__esModule",{value:!0}),r);var Vo,Hr,$r,qE,Ey,su=X(()=>{"use strict";Vo=new Map,Hr=[],$r=(r,e,t)=>{if(e&&typeof e.init=="function"&&typeof e.createInferenceSessionHandler=="function"){let n=Vo.get(r);if(n===void 0)Vo.set(r,{backend:e,priority:t});else{if(n.priority>t)return;if(n.priority===t&&n.backend!==e)throw new Error(`cannot register backend "${r}" using priority ${t}`)}if(t>=0){let i=Hr.indexOf(r);i!==-1&&Hr.splice(i,1);for(let o=0;o<Hr.length;o++)if(Vo.get(Hr[o]).priority<=t){Hr.splice(o,0,r);return}Hr.push(r)}return}throw new TypeError("not a valid backend")},qE=async r=>{let e=Vo.get(r);if(!e)return"backend not found.";if(e.initialized)return e.backend;if(e.aborted)return e.error;{let t=!!e.initPromise;try{return t||(e.initPromise=e.backend.init(r)),await e.initPromise,e.initialized=!0,e.backend}catch(n){return t||(e.error=`${n}`,e.aborted=!0),e.error}finally{delete e.initPromise}}},Ey=async r=>{let e=r.executionProviders||[],t=e.map(l=>typeof l=="string"?l:l.name),n=t.length===0?Hr:t,i,o=[],a=new Set;for(let l of n){let d=await qE(l);typeof d=="string"?o.push({name:l,err:d}):(i||(i=d),i===d&&a.add(l))}if(!i)throw new Error(`no available backend found. ERR: ${o.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of o)t.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let s=e.filter(l=>a.has(typeof l=="string"?l:l.name));return[i,new Proxy(r,{get:(l,d)=>d==="executionProviders"?s:Reflect.get(l,d)})]}});var Dy=X(()=>{"use strict";su()});var ky,jy=X(()=>{"use strict";ky="1.24.0"});var Ly,It,uu=X(()=>{"use strict";jy();Ly="warning",It={wasm:{},webgl:{},webgpu:{},versions:{common:ky},set logLevel(r){if(r!==void 0){if(typeof r!="string"||["verbose","info","warning","error","fatal"].indexOf(r)===-1)throw new Error(`Unsupported logging level: ${r}`);Ly=r}},get logLevel(){return Ly}};Object.defineProperty(It,"logLevel",{enumerable:!0})});var Pe,Ny=X(()=>{"use strict";uu();Pe=It});var Ry,My,zy=X(()=>{"use strict";Ry=(r,e)=>{let t=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);t.width=r.dims[3],t.height=r.dims[2];let n=t.getContext("2d");if(n!=null){let i,o;e?.tensorLayout!==void 0&&e.tensorLayout==="NHWC"?(i=r.dims[2],o=r.dims[3]):(i=r.dims[3],o=r.dims[2]);let a=e?.format!==void 0?e.format:"RGB",s=e?.norm,l,d;s===void 0||s.mean===void 0?l=[255,255,255,255]:typeof s.mean=="number"?l=[s.mean,s.mean,s.mean,s.mean]:(l=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(l[3]=s.mean[3])),s===void 0||s.bias===void 0?d=[0,0,0,0]:typeof s.bias=="number"?d=[s.bias,s.bias,s.bias,s.bias]:(d=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(d[3]=s.bias[3]));let h=o*i,g=0,b=h,w=h*2,T=-1;a==="RGBA"?(g=0,b=h,w=h*2,T=h*3):a==="RGB"?(g=0,b=h,w=h*2):a==="RBG"&&(g=0,w=h,b=h*2);for(let I=0;I<o;I++)for(let O=0;O<i;O++){let S=(r.data[g++]-d[0])*l[0],A=(r.data[b++]-d[1])*l[1],j=(r.data[w++]-d[2])*l[2],k=T===-1?255:(r.data[T++]-d[3])*l[3];n.fillStyle="rgba("+S+","+A+","+j+","+k+")",n.fillRect(O,I,1,1)}if("toDataURL"in t)return t.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},My=(r,e)=>{let t=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),n;if(t!=null){let i,o,a;e?.tensorLayout!==void 0&&e.tensorLayout==="NHWC"?(i=r.dims[2],o=r.dims[1],a=r.dims[3]):(i=r.dims[3],o=r.dims[2],a=r.dims[1]);let s=e!==void 0&&e.format!==void 0?e.format:"RGB",l=e?.norm,d,h;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?h=[0,0,0,0]:typeof l.bias=="number"?h=[l.bias,l.bias,l.bias,l.bias]:(h=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(h[3]=l.bias[3]));let g=o*i;if(e!==void 0&&(e.format!==void 0&&a===4&&e.format!=="RGBA"||a===3&&e.format!=="RGB"&&e.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let b=4,w=0,T=1,I=2,O=3,S=0,A=g,j=g*2,k=-1;s==="RGBA"?(S=0,A=g,j=g*2,k=g*3):s==="RGB"?(S=0,A=g,j=g*2):s==="RBG"&&(S=0,j=g,A=g*2),n=t.createImageData(i,o);for(let V=0;V<o*i;w+=b,T+=b,I+=b,O+=b,V++)n.data[w]=(r.data[S++]-h[0])*d[0],n.data[T]=(r.data[A++]-h[1])*d[1],n.data[I]=(r.data[j++]-h[2])*d[2],n.data[O]=k===-1?255:(r.data[k++]-h[3])*d[3]}else throw new Error("Can not access image data");return n}});var lu,By,Fy,Vy,Uy,Gy,Wy=X(()=>{"use strict";Uo();lu=(r,e)=>{if(r===void 0)throw new Error("Image buffer must be defined");if(e.height===void 0||e.width===void 0)throw new Error("Image height and width must be defined");if(e.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:t,width:n}=e,i=e.norm??{mean:255,bias:0},o,a;typeof i.mean=="number"?o=[i.mean,i.mean,i.mean,i.mean]:o=[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],typeof i.bias=="number"?a=[i.bias,i.bias,i.bias,i.bias]:a=[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=e.format!==void 0?e.format:"RGBA",l=e.tensorFormat!==void 0&&e.tensorFormat!==void 0?e.tensorFormat:"RGB",d=t*n,h=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),g=4,b=0,w=1,T=2,I=3,O=0,S=d,A=d*2,j=-1;s==="RGB"&&(g=3,b=0,w=1,T=2,I=-1),l==="RGBA"?j=d*3:l==="RBG"?(O=0,A=d,S=d*2):l==="BGR"&&(A=0,S=d,O=d*2);for(let V=0;V<d;V++,b+=g,T+=g,w+=g,I+=g)h[O++]=(r[b]+a[0])/o[0],h[S++]=(r[w]+a[1])/o[1],h[A++]=(r[T]+a[2])/o[2],j!==-1&&I!==-1&&(h[j++]=(r[I]+a[3])/o[3]);return l==="RGBA"?new Pt("float32",h,[1,4,t,n]):new Pt("float32",h,[1,3,t,n])},By=async(r,e)=>{let t=typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement,n=typeof ImageData<"u"&&r instanceof ImageData,i=typeof ImageBitmap<"u"&&r instanceof ImageBitmap,o=typeof r=="string",a,s=e??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=h=>typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||h instanceof OffscreenCanvas?h.getContext("2d"):null;if(t){let h=l();h.width=r.width,h.height=r.height;let g=d(h);if(g!=null){let b=r.height,w=r.width;if(e!==void 0&&e.resizedHeight!==void 0&&e.resizedWidth!==void 0&&(b=e.resizedHeight,w=e.resizedWidth),e!==void 0){if(s=e,e.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");s.tensorFormat="RGBA",s.height=b,s.width=w}else s.tensorFormat="RGBA",s.height=b,s.width=w;g.drawImage(r,0,0),a=g.getImageData(0,0,w,b).data}else throw new Error("Can not access image data")}else if(n){let h,g;if(e!==void 0&&e.resizedWidth!==void 0&&e.resizedHeight!==void 0?(h=e.resizedHeight,g=e.resizedWidth):(h=r.height,g=r.width),e!==void 0&&(s=e),s.format="RGBA",s.height=h,s.width=g,e!==void 0){let b=l();b.width=g,b.height=h;let w=d(b);if(w!=null)w.putImageData(r,0,0),a=w.getImageData(0,0,g,h).data;else throw new Error("Can not access image data")}else a=r.data}else if(i){if(e===void 0)throw new Error("Please provide image config with format for Imagebitmap");let h=l();h.width=r.width,h.height=r.height;let g=d(h);if(g!=null){let b=r.height,w=r.width;return g.drawImage(r,0,0,w,b),a=g.getImageData(0,0,w,b).data,s.height=b,s.width=w,lu(a,s)}else throw new Error("Can not access image data")}else{if(o)return new Promise((h,g)=>{let b=l(),w=d(b);if(!r||!w)return g();let T=new Image;T.crossOrigin="Anonymous",T.src=r,T.onload=()=>{b.width=T.width,b.height=T.height,w.drawImage(T,0,0,b.width,b.height);let I=w.getImageData(0,0,b.width,b.height);s.height=b.height,s.width=b.width,h(lu(I.data,s))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return lu(a,s);throw new Error("Input data provided is not supported - aborted tensor creation")},Fy=(r,e)=>{let{width:t,height:n,download:i,dispose:o}=e,a=[1,n,t,4];return new Pt({location:"texture",type:"float32",texture:r,dims:a,download:i,dispose:o})},Vy=(r,e)=>{let{dataType:t,dims:n,download:i,dispose:o}=e;return new Pt({location:"gpu-buffer",type:t??"float32",gpuBuffer:r,dims:n,download:i,dispose:o})},Uy=(r,e)=>{let{dataType:t,dims:n,download:i,dispose:o}=e;return new Pt({location:"ml-tensor",type:t??"float32",mlTensor:r,dims:n,download:i,dispose:o})},Gy=(r,e,t)=>new Pt({location:"cpu-pinned",type:r,data:e,dims:t??[e.length]})});var qr,Ji,Hy,qy,Ky=X(()=>{"use strict";qr=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Ji=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Hy=!1,qy=()=>{if(!Hy){Hy=!0;let r=typeof BigInt64Array<"u"&&BigInt64Array.from,e=typeof BigUint64Array<"u"&&BigUint64Array.from,t=globalThis.Float16Array,n=typeof t<"u"&&t.from;r&&(qr.set("int64",BigInt64Array),Ji.set(BigInt64Array,"int64")),e&&(qr.set("uint64",BigUint64Array),Ji.set(BigUint64Array,"uint64")),n?(qr.set("float16",t),Ji.set(t,"float16")):qr.set("float16",Uint16Array)}}});var Xy,Zy,Jy=X(()=>{"use strict";Uo();Xy=r=>{let e=1;for(let t=0;t<r.length;t++){let n=r[t];if(typeof n!="number"||!Number.isSafeInteger(n))throw new TypeError(`dims[${t}] must be an integer, got: ${n}`);if(n<0)throw new RangeError(`dims[${t}] must be a non-negative integer, got: ${n}`);e*=n}return e},Zy=(r,e)=>{switch(r.location){case"cpu":return new Pt(r.type,r.data,e);case"cpu-pinned":return new Pt({location:"cpu-pinned",data:r.data,type:r.type,dims:e});case"texture":return new Pt({location:"texture",texture:r.texture,type:r.type,dims:e});case"gpu-buffer":return new Pt({location:"gpu-buffer",gpuBuffer:r.gpuBuffer,type:r.type,dims:e});case"ml-tensor":return new Pt({location:"ml-tensor",mlTensor:r.mlTensor,type:r.type,dims:e});default:throw new Error(`tensorReshape: tensor location ${r.location} is not supported`)}}});var Pt,Uo=X(()=>{"use strict";zy();Wy();Ky();Jy();Pt=class{constructor(e,t,n){qy();let i,o;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,o=e.dims,e.location){case"cpu-pinned":{let s=qr.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,l;if(typeof e=="string")if(i=e,l=n,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let d=qr.get(e);if(d===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&d===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${d.name} as data.`);e==="uint64"||e==="int64"?s=d.from(t,BigInt):s=d.from(t)}else if(t instanceof d)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&d!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${d}`)}else if(l=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let d=typeof e[0];if(d==="string")i="string",s=e;else if(d==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${d}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let d=Ji.get(e.constructor);if(d===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=d,s=e}if(l===void 0)l=[s.length];else if(!Array.isArray(l))throw new TypeError("A tensor's dims must be a number array");o=l,this.cpuData=s,this.dataLocation="cpu"}let a=Xy(o);if(this.cpuData&&a!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=o,this.size=a}static async fromImage(e,t){return By(e,t)}static fromTexture(e,t){return Fy(e,t)}static fromGpuBuffer(e,t){return Vy(e,t)}static fromMLTensor(e,t){return Uy(e,t)}static fromPinnedBuffer(e,t,n){return Gy(e,t,n)}toDataURL(e){return Ry(this,e)}toImageData(e){return My(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Zy(this,e)}}});var Ht,cu=X(()=>{"use strict";Uo();Ht=Pt});var Go,Yy,qt,zt,Ar,Cr,du=X(()=>{"use strict";uu();Go=(r,e)=>{(typeof It.trace>"u"?!It.wasm.trace:!It.trace)||console.timeStamp(`${r}::ORT::${e}`)},Yy=(r,e)=>{let t=new Error().stack?.split(/\r\n|\r|\n/g)||[],n=!1;for(let i=0;i<t.length;i++){if(n&&!t[i].includes("TRACE_FUNC")){let o=`FUNC_${r}::${t[i].trim().split(" ")[1]}`;e&&(o+=`::${e}`),Go("CPU",o);return}t[i].includes("TRACE_FUNC")&&(n=!0)}},qt=r=>{(typeof It.trace>"u"?!It.wasm.trace:!It.trace)||Yy("BEGIN",r)},zt=r=>{(typeof It.trace>"u"?!It.wasm.trace:!It.trace)||Yy("END",r)},Ar=r=>{(typeof It.trace>"u"?!It.wasm.trace:!It.trace)||console.time(`ORT::${r}`)},Cr=r=>{(typeof It.trace>"u"?!It.wasm.trace:!It.trace)||console.timeEnd(`ORT::${r}`)}});var Wo,Qy=X(()=>{"use strict";su();cu();du();Wo=class r{constructor(e){this.handler=e}async run(e,t,n){qt(),Ar("InferenceSession.run");let i={},o={};if(typeof e!="object"||e===null||e instanceof Ht||Array.isArray(e))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof t=="object"){if(t===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(t instanceof Ht)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(t)){if(t.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let d of t){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);i[d]=null}if(typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,h=Object.getOwnPropertyNames(t);for(let g of this.outputNames)if(h.indexOf(g)!==-1){let b=t[g];(b===null||b instanceof Ht)&&(d=!0,a=!1,i[g]=b)}if(d){if(typeof n=="object"&&n!==null)o=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else o=t}}else if(typeof t<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof e[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(a)for(let d of this.outputNames)i[d]=null;let s=await this.handler.run(e,i,o),l={};for(let d in s)if(Object.hasOwnProperty.call(s,d)){let h=s[d];h instanceof Ht?l[d]=h:l[d]=new Ht(h.type,h.data,h.dims)}return Cr("InferenceSession.run"),zt(),l}async release(){return this.handler.dispose()}static async create(e,t,n,i){qt(),Ar("InferenceSession.create");let o,a={};if(typeof e=="string"){if(o=e,typeof t=="object"&&t!==null)a=t;else if(typeof t<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof Uint8Array){if(o=e,typeof t=="object"&&t!==null)a=t;else if(typeof t<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer){let h=e,g=0,b=e.byteLength;if(typeof t=="object"&&t!==null)a=t;else if(typeof t=="number"){if(g=t,!Number.isSafeInteger(g))throw new RangeError("'byteOffset' must be an integer.");if(g<0||g>=h.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${h.byteLength}).`);if(b=e.byteLength-g,typeof n=="number"){if(b=n,!Number.isSafeInteger(b))throw new RangeError("'byteLength' must be an integer.");if(b<=0||g+b>h.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${h.byteLength-g}].`);if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(typeof n<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof t<"u")throw new TypeError("'options' must be an object.");o=new Uint8Array(h,g,b)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[s,l]=await Ey(a),d=await s.createInferenceSessionHandler(o,l);return Cr("InferenceSession.create"),zt(),new r(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}});var KE,eb=X(()=>{"use strict";Qy();KE=Wo});var tb=X(()=>{"use strict"});var nb=X(()=>{"use strict"});var rb=X(()=>{"use strict"});var ib=X(()=>{"use strict"});var fu={};Wr(fu,{InferenceSession:()=>KE,TRACE:()=>Go,TRACE_EVENT_BEGIN:()=>Ar,TRACE_EVENT_END:()=>Cr,TRACE_FUNC_BEGIN:()=>qt,TRACE_FUNC_END:()=>zt,Tensor:()=>Ht,env:()=>Pe,registerBackend:()=>$r});var Et=X(()=>{"use strict";Dy();Ny();eb();cu();tb();nb();du();rb();ib()});function Or(r,e,t,n){if(e===void 0)return ZE(r);if(t===void 0)Ho(r,e,1);else if(typeof t=="number"&&n===void 0)Ho(r,e,t);else if(typeof t=="string"&&n===void 0)Ho(r,t,1,e);else if(typeof t=="string"&&typeof n=="number")Ho(r,t,n,e);else throw new TypeError("input is valid")}function ZE(r){return{verbose:Or.verbose.bind(null,r),info:Or.info.bind(null,r),warning:Or.warning.bind(null,r),error:Or.error.bind(null,r),fatal:Or.fatal.bind(null,r)}}function Ho(r,e,t,n){let i=Yi[n||""]||Yi[""];ab[r]<ab[i.minimalSeverity]||(i.logDateTime&&(e=`${new Date().toISOString()}|${e}`),i.logSourceLocation,XE[i.provider].log(r,e,n))}var pu,hu,ab,XE,sb,Yi,rt,Ko,Xo,Zo,qo,Yt=X(()=>{"use strict";pu=class{log(e,t,n){}},hu=class{log(e,t,n){console.log(`${this.color(e)} ${n?"\x1B[35m"+n+"\x1B[0m ":""}${t}`)}color(e){switch(e){case"verbose":return"\x1B[34;40mv\x1B[0m";case"info":return"\x1B[32mi\x1B[0m";case"warning":return"\x1B[30;43mw\x1B[0m";case"error":return"\x1B[31;40me\x1B[0m";case"fatal":return"\x1B[101mf\x1B[0m";default:throw new Error(`unsupported severity: ${e}`)}}},ab={verbose:1e3,info:2e3,warning:4e3,error:5e3,fatal:6e3},XE={none:new pu,console:new hu},sb={provider:"console",minimalSeverity:"warning",logDateTime:!0,logSourceLocation:!1},Yi={"":sb};(l=>{function r(d,h){l("verbose",d,h)}l.verbose=r;function e(d,h){l("info",d,h)}l.info=e;function t(d,h){l("warning",d,h)}l.warning=t;function n(d,h){l("error",d,h)}l.error=n;function i(d,h){l("fatal",d,h)}l.fatal=i;function o(d){Yi={},a("",d||{})}l.reset=o;function a(d,h){if(d==="*")o(h);else{let g=Yi[d]||sb;Yi[d]={provider:h.provider||g.provider,minimalSeverity:h.minimalSeverity||g.minimalSeverity,logDateTime:h.logDateTime===void 0?g.logDateTime:h.logDateTime,logSourceLocation:h.logSourceLocation===void 0?g.logSourceLocation:h.logSourceLocation}}}l.set=a;function s(d){let h={};d.logLevel&&(h.minimalSeverity=d.logLevel),a("",h)}l.setWithEnv=s})(Or||={});rt=Or,Ko=class{constructor(e,t,n,i,o,a){this.category=e;this.name=t;this.startTime=n;this.endCallback=i;this.timer=o;this.ctx=a}async end(){return this.endCallback(this)}async checkTimer(){if(this.ctx===void 0||this.timer===void 0)throw new Error("No webgl timer found");return this.ctx.endTimer(),this.ctx.waitForQueryAndGetTime(this.timer)}},Xo=class{constructor(e,t,n,i){this.category=e;this.name=t;this.startTime=n;this.endTime=i}},Zo=class{constructor(e,t,n){this._started=!1;this._flushPointer=0;this._started=!1,this._maxNumberEvents=e===void 0?1e4:e,this._flushBatchSize=t===void 0?10:t,this._flushIntervalInMilliseconds=n===void 0?5e3:n}static create(e){return e===void 0?new this:new this(e.maxNumberEvents,e.flushBatchSize,e.flushIntervalInMilliseconds)}start(){this._started=!0,this._timingEvents=[],this._flushTime=qo(),this._flushPointer=0}stop(){for(this._started=!1;this._flushPointer<this._timingEvents.length;this._flushPointer++)this.logOneEvent(this._timingEvents[this._flushPointer])}event(e,t,n,i){let o=this._started?this.begin(e,t,i):void 0,a=!1,s=n();if(s&&typeof s.then=="function")return a=!0,new Promise((l,d)=>{s.then(async h=>{o&&await o.end(),l(h)},async h=>{o&&await o.end(),d(h)})});if(!a&&o){let l=o.end();if(l&&typeof l.then=="function")return new Promise((d,h)=>{l.then(()=>{d(s)},g=>{h(g)})})}return s}begin(e,t,n){if(!this._started)throw new Error("profiler is not started yet");if(n===void 0){let i=qo();return this.flush(i),new Ko(e,t,i,o=>this.endSync(o))}else{let i=n.beginTimer();return new Ko(e,t,0,async o=>this.end(o),i,n)}}async end(e){let t=await e.checkTimer();this._timingEvents.length<this._maxNumberEvents&&(this._timingEvents.push(new Xo(e.category,e.name,e.startTime,t)),this.flush(t))}endSync(e){let t=qo();this._timingEvents.length<this._maxNumberEvents&&(this._timingEvents.push(new Xo(e.category,e.name,e.startTime,t)),this.flush(t))}logOneEvent(e){rt.verbose(`Profiler.${e.category}`,`${(e.endTime-e.startTime).toFixed(2)}ms on event '${e.name}' at ${e.endTime.toFixed(2)}`)}flush(e){if(this._timingEvents.length-this._flushPointer>=this._flushBatchSize||e-this._flushTime>=this._flushIntervalInMilliseconds){for(let t=this._flushPointer;this._flushPointer<t+this._flushBatchSize&&this._flushPointer<this._timingEvents.length;this._flushPointer++)this.logOneEvent(this._timingEvents[this._flushPointer]);this._flushTime=qo()}}get started(){return this._started}},qo=typeof performance<"u"&&performance.now?()=>performance.now():Date.now});function ub(r,e,t){for(let n of t){let i=n[0],o=n[1],a=n[2],s=n[3],l=n[4];if(r.opType===i){for(let d of e)if((d.domain===o||d.domain==="ai.onnx"&&o==="")&&JE(d.version,a))return{opImpl:s,opInit:l}}}throw new TypeError(`cannot resolve operator '${r.opType}' with opsets: ${e.map(n=>`${n.domain||"ai.onnx"} v${n.version}`).join(", ")}`)}function JE(r,e){if(e.endsWith("+")){let t=Number.parseInt(e.substring(0,e.length-1),10);return!isNaN(t)&&t<=r}else if(e.split("-").length===2){let t=e.split("-"),n=Number.parseInt(t[0],10),i=Number.parseInt(t[1],10);return!isNaN(n)&&!isNaN(i)&&n<=r&&r<=i}else return Number.parseInt(e,10)===r}var lb=X(()=>{"use strict"});var cb=ve(mu=>{"use strict";mu.__esModule=!0;var YE=function(){function r(e){if(!e)throw new TypeError("Invalid argument; `value` has no value.");this.value=r.EMPTY,e&&r.isGuid(e)&&(this.value=e)}return r.isGuid=function(e){var t=e.toString();return e&&(e instanceof r||r.validator.test(t))},r.create=function(){return new r([r.gen(2),r.gen(1),r.gen(1),r.gen(1),r.gen(3)].join("-"))},r.createEmpty=function(){return new r("emptyguid")},r.parse=function(e){return new r(e)},r.raw=function(){return[r.gen(2),r.gen(1),r.gen(1),r.gen(1),r.gen(3)].join("-")},r.gen=function(e){for(var t="",n=0;n<e;n++)t+=((1+Math.random())*65536|0).toString(16).substring(1);return t},r.prototype.equals=function(e){return r.isGuid(e)&&this.value===e.toString()},r.prototype.isEmpty=function(){return this.value===r.EMPTY},r.prototype.toString=function(){return this.value},r.prototype.toJSON=function(){return{value:this.value}},r.validator=new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$","i"),r.EMPTY="00000000-0000-0000-0000-000000000000",r}();mu.Guid=YE});function st(r,e,t){this.low=r|0,this.high=e|0,this.unsigned=!!t}function jt(r){return(r&&r.__isLong__)===!0}function db(r){var e=Math.clz32(r&-r);return r?31-e:e}function Kr(r,e){var t,n,i;return e?(r>>>=0,(i=0<=r&&r<256)&&(n=pb[r],n)?n:(t=Qe(r,0,!0),i&&(pb[r]=t),t)):(r|=0,(i=-128<=r&&r<128)&&(n=fb[r],n)?n:(t=Qe(r,r<0?-1:0,!1),i&&(fb[r]=t),t))}function en(r,e){if(isNaN(r))return e?_r:dn;if(e){if(r<0)return _r;if(r>=yb)return vb}else{if(r<=-mb)return Bt;if(r+1>=mb)return _b}return r<0?en(-r,e).neg():Qe(r%vi|0,r/vi|0,e)}function Qe(r,e,t){return new st(r,e,t)}function yu(r,e,t){if(r.length===0)throw Error("empty string");if(typeof e=="number"?(t=e,e=!1):e=!!e,r==="NaN"||r==="Infinity"||r==="+Infinity"||r==="-Infinity")return e?_r:dn;if(t=t||10,t<2||36<t)throw RangeError("radix");var n;if((n=r.indexOf("-"))>0)throw Error("interior hyphen");if(n===0)return yu(r.substring(1),e,t).neg();for(var i=en(Jo(t,8)),o=dn,a=0;a<r.length;a+=8){var s=Math.min(8,r.length-a),l=parseInt(r.substring(a,a+s),t);if(s<8){var d=en(Jo(t,s));o=o.mul(d).add(en(l))}else o=o.mul(i),o=o.add(en(l))}return o.unsigned=e,o}function fn(r,e){return typeof r=="number"?en(r,e):typeof r=="string"?yu(r,e):Qe(r.low,r.high,typeof e=="boolean"?e:r.unsigned)}var Qt,fb,pb,Jo,hb,QE,vi,yb,mb,gb,dn,_r,_i,bb,gu,_b,vb,Bt,se,Pr,bu=X(()=>{Qt=null;try{Qt=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}st.prototype.__isLong__;Object.defineProperty(st.prototype,"__isLong__",{value:!0});st.isLong=jt;fb={},pb={};st.fromInt=Kr;st.fromNumber=en;st.fromBits=Qe;Jo=Math.pow;st.fromString=yu;st.fromValue=fn;hb=65536,QE=1<<24,vi=hb*hb,yb=vi*vi,mb=yb/2,gb=Kr(QE),dn=Kr(0);st.ZERO=dn;_r=Kr(0,!0);st.UZERO=_r;_i=Kr(1);st.ONE=_i;bb=Kr(1,!0);st.UONE=bb;gu=Kr(-1);st.NEG_ONE=gu;_b=Qe(-1,2147483647,!1);st.MAX_VALUE=_b;vb=Qe(-1,-1,!0);st.MAX_UNSIGNED_VALUE=vb;Bt=Qe(0,-2147483648,!1);st.MIN_VALUE=Bt;se=st.prototype;se.toInt=function(){return this.unsigned?this.low>>>0:this.low};se.toNumber=function(){return this.unsigned?(this.high>>>0)*vi+(this.low>>>0):this.high*vi+(this.low>>>0)};se.toString=function(e){if(e=e||10,e<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(Bt)){var t=en(e),n=this.div(t),i=n.mul(t).sub(this);return n.toString(e)+i.toInt().toString(e)}else return"-"+this.neg().toString(e);for(var o=en(Jo(e,6),this.unsigned),a=this,s="";;){var l=a.div(o),d=a.sub(l.mul(o)).toInt()>>>0,h=d.toString(e);if(a=l,a.isZero())return h+s;for(;h.length<6;)h="0"+h;s=""+h+s}};se.getHighBits=function(){return this.high};se.getHighBitsUnsigned=function(){return this.high>>>0};se.getLowBits=function(){return this.low};se.getLowBitsUnsigned=function(){return this.low>>>0};se.getNumBitsAbs=function(){if(this.isNegative())return this.eq(Bt)?64:this.neg().getNumBitsAbs();for(var e=this.high!=0?this.high:this.low,t=31;t>0&&(e&1<<t)==0;t--);return this.high!=0?t+33:t+1};se.isZero=function(){return this.high===0&&this.low===0};se.eqz=se.isZero;se.isNegative=function(){return!this.unsigned&&this.high<0};se.isPositive=function(){return this.unsigned||this.high>=0};se.isOdd=function(){return(this.low&1)===1};se.isEven=function(){return(this.low&1)===0};se.equals=function(e){return jt(e)||(e=fn(e)),this.unsigned!==e.unsigned&&this.high>>>31===1&&e.high>>>31===1?!1:this.high===e.high&&this.low===e.low};se.eq=se.equals;se.notEquals=function(e){return!this.eq(e)};se.neq=se.notEquals;se.ne=se.notEquals;se.lessThan=function(e){return this.comp(e)<0};se.lt=se.lessThan;se.lessThanOrEqual=function(e){return this.comp(e)<=0};se.lte=se.lessThanOrEqual;se.le=se.lessThanOrEqual;se.greaterThan=function(e){return this.comp(e)>0};se.gt=se.greaterThan;se.greaterThanOrEqual=function(e){return this.comp(e)>=0};se.gte=se.greaterThanOrEqual;se.ge=se.greaterThanOrEqual;se.compare=function(e){if(jt(e)||(e=fn(e)),this.eq(e))return 0;var t=this.isNegative(),n=e.isNegative();return t&&!n?-1:!t&&n?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1};se.comp=se.compare;se.negate=function(){return!this.unsigned&&this.eq(Bt)?Bt:this.not().add(_i)};se.neg=se.negate;se.add=function(e){jt(e)||(e=fn(e));var t=this.high>>>16,n=this.high&65535,i=this.low>>>16,o=this.low&65535,a=e.high>>>16,s=e.high&65535,l=e.low>>>16,d=e.low&65535,h=0,g=0,b=0,w=0;return w+=o+d,b+=w>>>16,w&=65535,b+=i+l,g+=b>>>16,b&=65535,g+=n+s,h+=g>>>16,g&=65535,h+=t+a,h&=65535,Qe(b<<16|w,h<<16|g,this.unsigned)};se.subtract=function(e){return jt(e)||(e=fn(e)),this.add(e.neg())};se.sub=se.subtract;se.multiply=function(e){if(this.isZero())return this;if(jt(e)||(e=fn(e)),Qt){var t=Qt.mul(this.low,this.high,e.low,e.high);return Qe(t,Qt.get_high(),this.unsigned)}if(e.isZero())return this.unsigned?_r:dn;if(this.eq(Bt))return e.isOdd()?Bt:dn;if(e.eq(Bt))return this.isOdd()?Bt:dn;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(gb)&&e.lt(gb))return en(this.toNumber()*e.toNumber(),this.unsigned);var n=this.high>>>16,i=this.high&65535,o=this.low>>>16,a=this.low&65535,s=e.high>>>16,l=e.high&65535,d=e.low>>>16,h=e.low&65535,g=0,b=0,w=0,T=0;return T+=a*h,w+=T>>>16,T&=65535,w+=o*h,b+=w>>>16,w&=65535,w+=a*d,b+=w>>>16,w&=65535,b+=i*h,g+=b>>>16,b&=65535,b+=o*d,g+=b>>>16,b&=65535,b+=a*l,g+=b>>>16,b&=65535,g+=n*h+i*d+o*l+a*s,g&=65535,Qe(w<<16|T,g<<16|b,this.unsigned)};se.mul=se.multiply;se.divide=function(e){if(jt(e)||(e=fn(e)),e.isZero())throw Error("division by zero");if(Qt){if(!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1)return this;var t=(this.unsigned?Qt.div_u:Qt.div_s)(this.low,this.high,e.low,e.high);return Qe(t,Qt.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?_r:dn;var n,i,o;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return _r;if(e.gt(this.shru(1)))return bb;o=_r}else{if(this.eq(Bt)){if(e.eq(_i)||e.eq(gu))return Bt;if(e.eq(Bt))return _i;var a=this.shr(1);return n=a.div(e).shl(1),n.eq(dn)?e.isNegative()?_i:gu:(i=this.sub(e.mul(n)),o=n.add(i.div(e)),o)}else if(e.eq(Bt))return this.unsigned?_r:dn;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();o=dn}for(i=this;i.gte(e);){n=Math.max(1,Math.floor(i.toNumber()/e.toNumber()));for(var s=Math.ceil(Math.log(n)/Math.LN2),l=s<=48?1:Jo(2,s-48),d=en(n),h=d.mul(e);h.isNegative()||h.gt(i);)n-=l,d=en(n,this.unsigned),h=d.mul(e);d.isZero()&&(d=_i),o=o.add(d),i=i.sub(h)}return o};se.div=se.divide;se.modulo=function(e){if(jt(e)||(e=fn(e)),Qt){var t=(this.unsigned?Qt.rem_u:Qt.rem_s)(this.low,this.high,e.low,e.high);return Qe(t,Qt.get_high(),this.unsigned)}return this.sub(this.div(e).mul(e))};se.mod=se.modulo;se.rem=se.modulo;se.not=function(){return Qe(~this.low,~this.high,this.unsigned)};se.countLeadingZeros=function(){return this.high?Math.clz32(this.high):Math.clz32(this.low)+32};se.clz=se.countLeadingZeros;se.countTrailingZeros=function(){return this.low?db(this.low):db(this.high)+32};se.ctz=se.countTrailingZeros;se.and=function(e){return jt(e)||(e=fn(e)),Qe(this.low&e.low,this.high&e.high,this.unsigned)};se.or=function(e){return jt(e)||(e=fn(e)),Qe(this.low|e.low,this.high|e.high,this.unsigned)};se.xor=function(e){return jt(e)||(e=fn(e)),Qe(this.low^e.low,this.high^e.high,this.unsigned)};se.shiftLeft=function(e){return jt(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?Qe(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):Qe(0,this.low<<e-32,this.unsigned)};se.shl=se.shiftLeft;se.shiftRight=function(e){return jt(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?Qe(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):Qe(this.high>>e-32,this.high>=0?0:-1,this.unsigned)};se.shr=se.shiftRight;se.shiftRightUnsigned=function(e){return jt(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?Qe(this.low>>>e|this.high<<32-e,this.high>>>e,this.unsigned):e===32?Qe(this.high,0,this.unsigned):Qe(this.high>>>e-32,0,this.unsigned)};se.shru=se.shiftRightUnsigned;se.shr_u=se.shiftRightUnsigned;se.rotateLeft=function(e){var t;return jt(e)&&(e=e.toInt()),(e&=63)===0?this:e===32?Qe(this.high,this.low,this.unsigned):e<32?(t=32-e,Qe(this.low<<e|this.high>>>t,this.high<<e|this.low>>>t,this.unsigned)):(e-=32,t=32-e,Qe(this.high<<e|this.low>>>t,this.low<<e|this.high>>>t,this.unsigned))};se.rotl=se.rotateLeft;se.rotateRight=function(e){var t;return jt(e)&&(e=e.toInt()),(e&=63)===0?this:e===32?Qe(this.high,this.low,this.unsigned):e<32?(t=32-e,Qe(this.high<<t|this.low>>>e,this.low<<t|this.high>>>e,this.unsigned)):(e-=32,t=32-e,Qe(this.low<<t|this.high>>>e,this.high<<t|this.low>>>e,this.unsigned))};se.rotr=se.rotateRight;se.toSigned=function(){return this.unsigned?Qe(this.low,this.high,!1):this};se.toUnsigned=function(){return this.unsigned?this:Qe(this.low,this.high,!0)};se.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()};se.toBytesLE=function(){var e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]};se.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,t>>>24,t>>>16&255,t>>>8&255,t&255]};st.fromBytes=function(e,t,n){return n?st.fromBytesLE(e,t):st.fromBytesBE(e,t)};st.fromBytesLE=function(e,t){return new st(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)};st.fromBytesBE=function(e,t){return new st(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)};Pr=st});var _u=ve(Yo=>{"use strict";Object.defineProperty(Yo,"__esModule",{value:!0});Yo.ArgType=void 0;var wb;(function(r){r[r.INPUT=0]="INPUT",r[r.OUTPUT=1]="OUTPUT"})(wb||(Yo.ArgType=wb={}))});var Xr=ve($n=>{"use strict";Object.defineProperty($n,"__esModule",{value:!0});$n.SIZE_PREFIX_LENGTH=$n.FILE_IDENTIFIER_LENGTH=$n.SIZEOF_INT=$n.SIZEOF_SHORT=void 0;$n.SIZEOF_SHORT=2;$n.SIZEOF_INT=4;$n.FILE_IDENTIFIER_LENGTH=4;$n.SIZE_PREFIX_LENGTH=4});var vu=ve(tn=>{"use strict";Object.defineProperty(tn,"__esModule",{value:!0});tn.isLittleEndian=tn.float64=tn.float32=tn.int32=void 0;tn.int32=new Int32Array(2);tn.float32=new Float32Array(tn.int32.buffer);tn.float64=new Float64Array(tn.int32.buffer);tn.isLittleEndian=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1});var wu=ve(Qo=>{"use strict";Object.defineProperty(Qo,"__esModule",{value:!0});Qo.Encoding=void 0;var Tb;(function(r){r[r.UTF8_BYTES=1]="UTF8_BYTES",r[r.UTF16_STRING=2]="UTF16_STRING"})(Tb||(Qo.Encoding=Tb={}))});var xu=ve(ea=>{"use strict";Object.defineProperty(ea,"__esModule",{value:!0});ea.ByteBuffer=void 0;var An=Xr(),Ft=vu(),e3=wu(),Tu=class r{constructor(e){this.bytes_=e,this.position_=0,this.text_decoder_=new TextDecoder}static allocate(e){return new r(new Uint8Array(e))}clear(){this.position_=0}bytes(){return this.bytes_}position(){return this.position_}setPosition(e){this.position_=e}capacity(){return this.bytes_.length}readInt8(e){return this.readUint8(e)<<24>>24}readUint8(e){return this.bytes_[e]}readInt16(e){return this.readUint16(e)<<16>>16}readUint16(e){return this.bytes_[e]|this.bytes_[e+1]<<8}readInt32(e){return this.bytes_[e]|this.bytes_[e+1]<<8|this.bytes_[e+2]<<16|this.bytes_[e+3]<<24}readUint32(e){return this.readInt32(e)>>>0}readInt64(e){return BigInt.asIntN(64,BigInt(this.readUint32(e))+(BigInt(this.readUint32(e+4))<<BigInt(32)))}readUint64(e){return BigInt.asUintN(64,BigInt(this.readUint32(e))+(BigInt(this.readUint32(e+4))<<BigInt(32)))}readFloat32(e){return Ft.int32[0]=this.readInt32(e),Ft.float32[0]}readFloat64(e){return Ft.int32[Ft.isLittleEndian?0:1]=this.readInt32(e),Ft.int32[Ft.isLittleEndian?1:0]=this.readInt32(e+4),Ft.float64[0]}writeInt8(e,t){this.bytes_[e]=t}writeUint8(e,t){this.bytes_[e]=t}writeInt16(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8}writeUint16(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8}writeInt32(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8,this.bytes_[e+2]=t>>16,this.bytes_[e+3]=t>>24}writeUint32(e,t){this.bytes_[e]=t,this.bytes_[e+1]=t>>8,this.bytes_[e+2]=t>>16,this.bytes_[e+3]=t>>24}writeInt64(e,t){this.writeInt32(e,Number(BigInt.asIntN(32,t))),this.writeInt32(e+4,Number(BigInt.asIntN(32,t>>BigInt(32))))}writeUint64(e,t){this.writeUint32(e,Number(BigInt.asUintN(32,t))),this.writeUint32(e+4,Number(BigInt.asUintN(32,t>>BigInt(32))))}writeFloat32(e,t){Ft.float32[0]=t,this.writeInt32(e,Ft.int32[0])}writeFloat64(e,t){Ft.float64[0]=t,this.writeInt32(e,Ft.int32[Ft.isLittleEndian?0:1]),this.writeInt32(e+4,Ft.int32[Ft.isLittleEndian?1:0])}getBufferIdentifier(){if(this.bytes_.length<this.position_+An.SIZEOF_INT+An.FILE_IDENTIFIER_LENGTH)throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");let e="";for(let t=0;t<An.FILE_IDENTIFIER_LENGTH;t++)e+=String.fromCharCode(this.readInt8(this.position_+An.SIZEOF_INT+t));return e}__offset(e,t){let n=e-this.readInt32(e);return t<this.readInt16(n)?this.readInt16(n+t):0}__union(e,t){return e.bb_pos=t+this.readInt32(t),e.bb=this,e}__string(e,t){e+=this.readInt32(e);let n=this.readInt32(e);e+=An.SIZEOF_INT;let i=this.bytes_.subarray(e,e+n);return t===e3.Encoding.UTF8_BYTES?i:this.text_decoder_.decode(i)}__union_with_string(e,t){return typeof e=="string"?this.__string(t):this.__union(e,t)}__indirect(e){return e+this.readInt32(e)}__vector(e){return e+this.readInt32(e)+An.SIZEOF_INT}__vector_len(e){return this.readInt32(e+this.readInt32(e))}__has_identifier(e){if(e.length!=An.FILE_IDENTIFIER_LENGTH)throw new Error("FlatBuffers: file identifier must be length "+An.FILE_IDENTIFIER_LENGTH);for(let t=0;t<An.FILE_IDENTIFIER_LENGTH;t++)if(e.charCodeAt(t)!=this.readInt8(this.position()+An.SIZEOF_INT+t))return!1;return!0}createScalarList(e,t){let n=[];for(let i=0;i<t;++i){let o=e(i);o!==null&&n.push(o)}return n}createObjList(e,t){let n=[];for(let i=0;i<t;++i){let o=e(i);o!==null&&n.push(o.unpack())}return n}};ea.ByteBuffer=Tu});var Ib=ve(ta=>{"use strict";Object.defineProperty(ta,"__esModule",{value:!0});ta.Builder=void 0;var xb=xu(),Kt=Xr(),Iu=class r{constructor(e){this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null,this.text_encoder=new TextEncoder;let t;e?t=e:t=1024,this.bb=xb.ByteBuffer.allocate(t),this.space=t}clear(){this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null}forceDefaults(e){this.force_defaults=e}dataBuffer(){return this.bb}asUint8Array(){return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())}prep(e,t){e>this.minalign&&(this.minalign=e);let n=~(this.bb.capacity()-this.space+t)+1&e-1;for(;this.space<n+e+t;){let i=this.bb.capacity();this.bb=r.growByteBuffer(this.bb),this.space+=this.bb.capacity()-i}this.pad(n)}pad(e){for(let t=0;t<e;t++)this.bb.writeInt8(--this.space,0)}writeInt8(e){this.bb.writeInt8(this.space-=1,e)}writeInt16(e){this.bb.writeInt16(this.space-=2,e)}writeInt32(e){this.bb.writeInt32(this.space-=4,e)}writeInt64(e){this.bb.writeInt64(this.space-=8,e)}writeFloat32(e){this.bb.writeFloat32(this.space-=4,e)}writeFloat64(e){this.bb.writeFloat64(this.space-=8,e)}addInt8(e){this.prep(1,0),this.writeInt8(e)}addInt16(e){this.prep(2,0),this.writeInt16(e)}addInt32(e){this.prep(4,0),this.writeInt32(e)}addInt64(e){this.prep(8,0),this.writeInt64(e)}addFloat32(e){this.prep(4,0),this.writeFloat32(e)}addFloat64(e){this.prep(8,0),this.writeFloat64(e)}addFieldInt8(e,t,n){(this.force_defaults||t!=n)&&(this.addInt8(t),this.slot(e))}addFieldInt16(e,t,n){(this.force_defaults||t!=n)&&(this.addInt16(t),this.slot(e))}addFieldInt32(e,t,n){(this.force_defaults||t!=n)&&(this.addInt32(t),this.slot(e))}addFieldInt64(e,t,n){(this.force_defaults||t!==n)&&(this.addInt64(t),this.slot(e))}addFieldFloat32(e,t,n){(this.force_defaults||t!=n)&&(this.addFloat32(t),this.slot(e))}addFieldFloat64(e,t,n){(this.force_defaults||t!=n)&&(this.addFloat64(t),this.slot(e))}addFieldOffset(e,t,n){(this.force_defaults||t!=n)&&(this.addOffset(t),this.slot(e))}addFieldStruct(e,t,n){t!=n&&(this.nested(t),this.slot(e))}nested(e){if(e!=this.offset())throw new TypeError("FlatBuffers: struct must be serialized inline.")}notNested(){if(this.isNested)throw new TypeError("FlatBuffers: object serialization must not be nested.")}slot(e){this.vtable!==null&&(this.vtable[e]=this.offset())}offset(){return this.bb.capacity()-this.space}static growByteBuffer(e){let t=e.capacity();if(t&3221225472)throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");let n=t<<1,i=xb.ByteBuffer.allocate(n);return i.setPosition(n-t),i.bytes().set(e.bytes(),n-t),i}addOffset(e){this.prep(Kt.SIZEOF_INT,0),this.writeInt32(this.offset()-e+Kt.SIZEOF_INT)}startObject(e){this.notNested(),this.vtable==null&&(this.vtable=[]),this.vtable_in_use=e;for(let t=0;t<e;t++)this.vtable[t]=0;this.isNested=!0,this.object_start=this.offset()}endObject(){if(this.vtable==null||!this.isNested)throw new Error("FlatBuffers: endObject called without startObject");this.addInt32(0);let e=this.offset(),t=this.vtable_in_use-1;for(;t>=0&&this.vtable[t]==0;t--);let n=t+1;for(;t>=0;t--)this.addInt16(this.vtable[t]!=0?e-this.vtable[t]:0);let i=2;this.addInt16(e-this.object_start);let o=(n+i)*Kt.SIZEOF_SHORT;this.addInt16(o);let a=0,s=this.space;e:for(t=0;t<this.vtables.length;t++){let l=this.bb.capacity()-this.vtables[t];if(o==this.bb.readInt16(l)){for(let d=Kt.SIZEOF_SHORT;d<o;d+=Kt.SIZEOF_SHORT)if(this.bb.readInt16(s+d)!=this.bb.readInt16(l+d))continue e;a=this.vtables[t];break}}return a?(this.space=this.bb.capacity()-e,this.bb.writeInt32(this.space,a-e)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-e,this.offset()-e)),this.isNested=!1,e}finish(e,t,n){let i=n?Kt.SIZE_PREFIX_LENGTH:0;if(t){let o=t;if(this.prep(this.minalign,Kt.SIZEOF_INT+Kt.FILE_IDENTIFIER_LENGTH+i),o.length!=Kt.FILE_IDENTIFIER_LENGTH)throw new TypeError("FlatBuffers: file identifier must be length "+Kt.FILE_IDENTIFIER_LENGTH);for(let a=Kt.FILE_IDENTIFIER_LENGTH-1;a>=0;a--)this.writeInt8(o.charCodeAt(a))}this.prep(this.minalign,Kt.SIZEOF_INT+i),this.addOffset(e),i&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)}finishSizePrefixed(e,t){this.finish(e,t,!0)}requiredField(e,t){let n=this.bb.capacity()-e,i=n-this.bb.readInt32(n);if(!(t<this.bb.readInt16(i)&&this.bb.readInt16(i+t)!=0))throw new TypeError("FlatBuffers: field "+t+" must be set")}startVector(e,t,n){this.notNested(),this.vector_num_elems=t,this.prep(Kt.SIZEOF_INT,e*t),this.prep(n,e*t)}endVector(){return this.writeInt32(this.vector_num_elems),this.offset()}createSharedString(e){if(!e)return 0;if(this.string_maps||(this.string_maps=new Map),this.string_maps.has(e))return this.string_maps.get(e);let t=this.createString(e);return this.string_maps.set(e,t),t}createString(e){if(e==null)return 0;let t;return e instanceof Uint8Array?t=e:t=this.text_encoder.encode(e),this.addInt8(0),this.startVector(1,t.length,1),this.bb.setPosition(this.space-=t.length),this.bb.bytes().set(t,this.space),this.endVector()}createByteVector(e){return e==null?0:(this.startVector(1,e.length,1),this.bb.setPosition(this.space-=e.length),this.bb.bytes().set(e,this.space),this.endVector())}createObjectOffset(e){return e===null?0:typeof e=="string"?this.createString(e):e.pack(this)}createObjectOffsetList(e){let t=[];for(let n=0;n<e.length;++n){let i=e[n];if(i!==null)t.push(this.createObjectOffset(i));else throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.")}return t}createStructOffsetList(e,t){return t(this,e.length),this.createObjectOffsetList(e.slice().reverse()),this.endVector()}};ta.Builder=Iu});var et=ve(ft=>{"use strict";Object.defineProperty(ft,"__esModule",{value:!0});ft.ByteBuffer=ft.Builder=ft.Encoding=ft.isLittleEndian=ft.float64=ft.float32=ft.int32=ft.SIZE_PREFIX_LENGTH=ft.FILE_IDENTIFIER_LENGTH=ft.SIZEOF_INT=ft.SIZEOF_SHORT=void 0;var t3=Xr();Object.defineProperty(ft,"SIZEOF_SHORT",{enumerable:!0,get:function(){return t3.SIZEOF_SHORT}});var n3=Xr();Object.defineProperty(ft,"SIZEOF_INT",{enumerable:!0,get:function(){return n3.SIZEOF_INT}});var r3=Xr();Object.defineProperty(ft,"FILE_IDENTIFIER_LENGTH",{enumerable:!0,get:function(){return r3.FILE_IDENTIFIER_LENGTH}});var i3=Xr();Object.defineProperty(ft,"SIZE_PREFIX_LENGTH",{enumerable:!0,get:function(){return i3.SIZE_PREFIX_LENGTH}});var na=vu();Object.defineProperty(ft,"int32",{enumerable:!0,get:function(){return na.int32}});Object.defineProperty(ft,"float32",{enumerable:!0,get:function(){return na.float32}});Object.defineProperty(ft,"float64",{enumerable:!0,get:function(){return na.float64}});Object.defineProperty(ft,"isLittleEndian",{enumerable:!0,get:function(){return na.isLittleEndian}});var o3=wu();Object.defineProperty(ft,"Encoding",{enumerable:!0,get:function(){return o3.Encoding}});var a3=Ib();Object.defineProperty(ft,"Builder",{enumerable:!0,get:function(){return a3.Builder}});var s3=xu();Object.defineProperty(ft,"ByteBuffer",{enumerable:!0,get:function(){return s3.ByteBuffer}})});var $u=ve(Cn=>{"use strict";var u3=Cn&&Cn.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),l3=Cn&&Cn.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),c3=Cn&&Cn.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&u3(e,r,t);return l3(e,r),e};Object.defineProperty(Cn,"__esModule",{value:!0});Cn.ArgTypeAndIndex=void 0;var d3=c3(et()),Sb=_u(),Su=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsArgTypeAndIndex(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsArgTypeAndIndex(e,t){return e.setPosition(e.position()+d3.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}argType(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt8(this.bb_pos+e):Sb.ArgType.INPUT}index(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readUint32(this.bb_pos+e):0}static startArgTypeAndIndex(e){e.startObject(2)}static addArgType(e,t){e.addFieldInt8(0,t,Sb.ArgType.INPUT)}static addIndex(e,t){e.addFieldInt32(1,t,0)}static endArgTypeAndIndex(e){return e.endObject()}static createArgTypeAndIndex(e,t,n){return r.startArgTypeAndIndex(e),r.addArgType(e,t),r.addIndex(e,n),r.endArgTypeAndIndex(e)}};Cn.ArgTypeAndIndex=Su});var Au=ve(ra=>{"use strict";Object.defineProperty(ra,"__esModule",{value:!0});ra.AttributeType=void 0;var $b;(function(r){r[r.UNDEFINED=0]="UNDEFINED",r[r.FLOAT=1]="FLOAT",r[r.INT=2]="INT",r[r.STRING=3]="STRING",r[r.TENSOR=4]="TENSOR",r[r.GRAPH=5]="GRAPH",r[r.FLOATS=6]="FLOATS",r[r.INTS=7]="INTS",r[r.STRINGS=8]="STRINGS",r[r.TENSORS=9]="TENSORS",r[r.GRAPHS=10]="GRAPHS",r[r.SPARSE_TENSOR=11]="SPARSE_TENSOR",r[r.SPARSE_TENSORS=12]="SPARSE_TENSORS"})($b||(ra.AttributeType=$b={}))});var Cu=ve(ia=>{"use strict";Object.defineProperty(ia,"__esModule",{value:!0});ia.NodeType=void 0;var Ab;(function(r){r[r.Primitive=0]="Primitive",r[r.Fused=1]="Fused"})(Ab||(ia.NodeType=Ab={}))});var Pu=ve(On=>{"use strict";var f3=On&&On.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),p3=On&&On.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),h3=On&&On.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&f3(e,r,t);return p3(e,r),e};Object.defineProperty(On,"__esModule",{value:!0});On.Node=void 0;var m3=h3(et()),g3=Eu(),Cb=Cu(),Ou=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsNode(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsNode(e,t){return e.setPosition(e.position()+m3.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}name(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}docString(e){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__string(this.bb_pos+t,e):null}domain(e){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__string(this.bb_pos+t,e):null}sinceVersion(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readInt32(this.bb_pos+e):0}index(){let e=this.bb.__offset(this.bb_pos,12);return e?this.bb.readUint32(this.bb_pos+e):0}opType(e){let t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__string(this.bb_pos+t,e):null}type(){let e=this.bb.__offset(this.bb_pos,16);return e?this.bb.readInt32(this.bb_pos+e):Cb.NodeType.Primitive}executionProviderType(e){let t=this.bb.__offset(this.bb_pos,18);return t?this.bb.__string(this.bb_pos+t,e):null}inputs(e,t){let n=this.bb.__offset(this.bb_pos,20);return n?this.bb.__string(this.bb.__vector(this.bb_pos+n)+e*4,t):null}inputsLength(){let e=this.bb.__offset(this.bb_pos,20);return e?this.bb.__vector_len(this.bb_pos+e):0}outputs(e,t){let n=this.bb.__offset(this.bb_pos,22);return n?this.bb.__string(this.bb.__vector(this.bb_pos+n)+e*4,t):null}outputsLength(){let e=this.bb.__offset(this.bb_pos,22);return e?this.bb.__vector_len(this.bb_pos+e):0}attributes(e,t){let n=this.bb.__offset(this.bb_pos,24);return n?(t||new g3.Attribute).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}attributesLength(){let e=this.bb.__offset(this.bb_pos,24);return e?this.bb.__vector_len(this.bb_pos+e):0}inputArgCounts(e){let t=this.bb.__offset(this.bb_pos,26);return t?this.bb.readInt32(this.bb.__vector(this.bb_pos+t)+e*4):0}inputArgCountsLength(){let e=this.bb.__offset(this.bb_pos,26);return e?this.bb.__vector_len(this.bb_pos+e):0}inputArgCountsArray(){let e=this.bb.__offset(this.bb_pos,26);return e?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}implicitInputs(e,t){let n=this.bb.__offset(this.bb_pos,28);return n?this.bb.__string(this.bb.__vector(this.bb_pos+n)+e*4,t):null}implicitInputsLength(){let e=this.bb.__offset(this.bb_pos,28);return e?this.bb.__vector_len(this.bb_pos+e):0}static startNode(e){e.startObject(13)}static addName(e,t){e.addFieldOffset(0,t,0)}static addDocString(e,t){e.addFieldOffset(1,t,0)}static addDomain(e,t){e.addFieldOffset(2,t,0)}static addSinceVersion(e,t){e.addFieldInt32(3,t,0)}static addIndex(e,t){e.addFieldInt32(4,t,0)}static addOpType(e,t){e.addFieldOffset(5,t,0)}static addType(e,t){e.addFieldInt32(6,t,Cb.NodeType.Primitive)}static addExecutionProviderType(e,t){e.addFieldOffset(7,t,0)}static addInputs(e,t){e.addFieldOffset(8,t,0)}static createInputsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startInputsVector(e,t){e.startVector(4,t,4)}static addOutputs(e,t){e.addFieldOffset(9,t,0)}static createOutputsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startOutputsVector(e,t){e.startVector(4,t,4)}static addAttributes(e,t){e.addFieldOffset(10,t,0)}static createAttributesVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startAttributesVector(e,t){e.startVector(4,t,4)}static addInputArgCounts(e,t){e.addFieldOffset(11,t,0)}static createInputArgCountsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addInt32(t[n]);return e.endVector()}static startInputArgCountsVector(e,t){e.startVector(4,t,4)}static addImplicitInputs(e,t){e.addFieldOffset(12,t,0)}static createImplicitInputsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startImplicitInputsVector(e,t){e.startVector(4,t,4)}static endNode(e){return e.endObject()}static createNode(e,t,n,i,o,a,s,l,d,h,g,b,w,T){return r.startNode(e),r.addName(e,t),r.addDocString(e,n),r.addDomain(e,i),r.addSinceVersion(e,o),r.addIndex(e,a),r.addOpType(e,s),r.addType(e,l),r.addExecutionProviderType(e,d),r.addInputs(e,h),r.addOutputs(e,g),r.addAttributes(e,b),r.addInputArgCounts(e,w),r.addImplicitInputs(e,T),r.endNode(e)}};On.Node=Ou});var ku=ve(oa=>{"use strict";Object.defineProperty(oa,"__esModule",{value:!0});oa.EdgeEnd=void 0;var Du=class{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}nodeIndex(){return this.bb.readUint32(this.bb_pos)}srcArgIndex(){return this.bb.readInt32(this.bb_pos+4)}dstArgIndex(){return this.bb.readInt32(this.bb_pos+8)}static sizeOf(){return 12}static createEdgeEnd(e,t,n,i){return e.prep(4,12),e.writeInt32(i),e.writeInt32(n),e.writeInt32(t),e.offset()}};oa.EdgeEnd=Du});var Lu=ve(Pn=>{"use strict";var y3=Pn&&Pn.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),b3=Pn&&Pn.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),_3=Pn&&Pn.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&y3(e,r,t);return b3(e,r),e};Object.defineProperty(Pn,"__esModule",{value:!0});Pn.NodeEdge=void 0;var v3=_3(et()),Ob=ku(),ju=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsNodeEdge(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsNodeEdge(e,t){return e.setPosition(e.position()+v3.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}nodeIndex(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readUint32(this.bb_pos+e):0}inputEdges(e,t){let n=this.bb.__offset(this.bb_pos,6);return n?(t||new Ob.EdgeEnd).__init(this.bb.__vector(this.bb_pos+n)+e*12,this.bb):null}inputEdgesLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}outputEdges(e,t){let n=this.bb.__offset(this.bb_pos,8);return n?(t||new Ob.EdgeEnd).__init(this.bb.__vector(this.bb_pos+n)+e*12,this.bb):null}outputEdgesLength(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__vector_len(this.bb_pos+e):0}static startNodeEdge(e){e.startObject(3)}static addNodeIndex(e,t){e.addFieldInt32(0,t,0)}static addInputEdges(e,t){e.addFieldOffset(1,t,0)}static startInputEdgesVector(e,t){e.startVector(12,t,4)}static addOutputEdges(e,t){e.addFieldOffset(2,t,0)}static startOutputEdgesVector(e,t){e.startVector(12,t,4)}static endNodeEdge(e){return e.endObject()}static createNodeEdge(e,t,n,i){return r.startNodeEdge(e),r.addNodeIndex(e,t),r.addInputEdges(e,n),r.addOutputEdges(e,i),r.endNodeEdge(e)}};Pn.NodeEdge=ju});var Ru=ve(En=>{"use strict";var w3=En&&En.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),T3=En&&En.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),x3=En&&En.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&w3(e,r,t);return T3(e,r),e};Object.defineProperty(En,"__esModule",{value:!0});En.NodesToOptimizeIndices=void 0;var I3=x3(et()),Nu=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsNodesToOptimizeIndices(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsNodesToOptimizeIndices(e,t){return e.setPosition(e.position()+I3.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}nodeIndices(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readUint32(this.bb.__vector(this.bb_pos+t)+e*4):0}nodeIndicesLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}nodeIndicesArray(){let e=this.bb.__offset(this.bb_pos,4);return e?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}numInputs(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readUint32(this.bb_pos+e):0}numOutputs(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.readUint32(this.bb_pos+e):0}hasVariadicInput(){let e=this.bb.__offset(this.bb_pos,10);return e?!!this.bb.readInt8(this.bb_pos+e):!1}hasVariadicOutput(){let e=this.bb.__offset(this.bb_pos,12);return e?!!this.bb.readInt8(this.bb_pos+e):!1}numVariadicInputs(){let e=this.bb.__offset(this.bb_pos,14);return e?this.bb.readUint32(this.bb_pos+e):0}numVariadicOutputs(){let e=this.bb.__offset(this.bb_pos,16);return e?this.bb.readUint32(this.bb_pos+e):0}static startNodesToOptimizeIndices(e){e.startObject(7)}static addNodeIndices(e,t){e.addFieldOffset(0,t,0)}static createNodeIndicesVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addInt32(t[n]);return e.endVector()}static startNodeIndicesVector(e,t){e.startVector(4,t,4)}static addNumInputs(e,t){e.addFieldInt32(1,t,0)}static addNumOutputs(e,t){e.addFieldInt32(2,t,0)}static addHasVariadicInput(e,t){e.addFieldInt8(3,+t,0)}static addHasVariadicOutput(e,t){e.addFieldInt8(4,+t,0)}static addNumVariadicInputs(e,t){e.addFieldInt32(5,t,0)}static addNumVariadicOutputs(e,t){e.addFieldInt32(6,t,0)}static endNodesToOptimizeIndices(e){return e.endObject()}static createNodesToOptimizeIndices(e,t,n,i,o,a,s,l){return r.startNodesToOptimizeIndices(e),r.addNodeIndices(e,t),r.addNumInputs(e,n),r.addNumOutputs(e,i),r.addHasVariadicInput(e,o),r.addHasVariadicOutput(e,a),r.addNumVariadicInputs(e,s),r.addNumVariadicOutputs(e,l),r.endNodesToOptimizeIndices(e)}};En.NodesToOptimizeIndices=Nu});var zu=ve(Dn=>{"use strict";var S3=Dn&&Dn.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),$3=Dn&&Dn.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),A3=Dn&&Dn.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&S3(e,r,t);return $3(e,r),e};Object.defineProperty(Dn,"__esModule",{value:!0});Dn.RuntimeOptimizationRecord=void 0;var C3=A3(et()),O3=Ru(),Mu=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsRuntimeOptimizationRecord(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsRuntimeOptimizationRecord(e,t){return e.setPosition(e.position()+C3.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}actionId(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}nodesToOptimizeIndices(e){let t=this.bb.__offset(this.bb_pos,6);return t?(e||new O3.NodesToOptimizeIndices).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}producedOpIds(e,t){let n=this.bb.__offset(this.bb_pos,10);return n?this.bb.__string(this.bb.__vector(this.bb_pos+n)+e*4,t):null}producedOpIdsLength(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.__vector_len(this.bb_pos+e):0}static startRuntimeOptimizationRecord(e){e.startObject(4)}static addActionId(e,t){e.addFieldOffset(0,t,0)}static addNodesToOptimizeIndices(e,t){e.addFieldOffset(1,t,0)}static addProducedOpIds(e,t){e.addFieldOffset(3,t,0)}static createProducedOpIdsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startProducedOpIdsVector(e,t){e.startVector(4,t,4)}static endRuntimeOptimizationRecord(e){return e.endObject()}};Dn.RuntimeOptimizationRecord=Mu});var Fu=ve(kn=>{"use strict";var P3=kn&&kn.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),E3=kn&&kn.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),D3=kn&&kn.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&P3(e,r,t);return E3(e,r),e};Object.defineProperty(kn,"__esModule",{value:!0});kn.RuntimeOptimizationRecordContainerEntry=void 0;var k3=D3(et()),j3=zu(),Bu=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsRuntimeOptimizationRecordContainerEntry(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsRuntimeOptimizationRecordContainerEntry(e,t){return e.setPosition(e.position()+k3.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}optimizerName(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}runtimeOptimizationRecords(e,t){let n=this.bb.__offset(this.bb_pos,6);return n?(t||new j3.RuntimeOptimizationRecord).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}runtimeOptimizationRecordsLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}static startRuntimeOptimizationRecordContainerEntry(e){e.startObject(2)}static addOptimizerName(e,t){e.addFieldOffset(0,t,0)}static addRuntimeOptimizationRecords(e,t){e.addFieldOffset(1,t,0)}static createRuntimeOptimizationRecordsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startRuntimeOptimizationRecordsVector(e,t){e.startVector(4,t,4)}static endRuntimeOptimizationRecordContainerEntry(e){let t=e.endObject();return e.requiredField(t,4),t}static createRuntimeOptimizationRecordContainerEntry(e,t,n){return r.startRuntimeOptimizationRecordContainerEntry(e),r.addOptimizerName(e,t),r.addRuntimeOptimizationRecords(e,n),r.endRuntimeOptimizationRecordContainerEntry(e)}};kn.RuntimeOptimizationRecordContainerEntry=Bu});var Uu=ve(jn=>{"use strict";var L3=jn&&jn.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),N3=jn&&jn.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),R3=jn&&jn.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&L3(e,r,t);return N3(e,r),e};Object.defineProperty(jn,"__esModule",{value:!0});jn.RuntimeOptimizations=void 0;var M3=R3(et()),z3=Fu(),Vu=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsRuntimeOptimizations(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsRuntimeOptimizations(e,t){return e.setPosition(e.position()+M3.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}records(e,t){let n=this.bb.__offset(this.bb_pos,4);return n?(t||new z3.RuntimeOptimizationRecordContainerEntry).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}recordsLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}static startRuntimeOptimizations(e){e.startObject(1)}static addRecords(e,t){e.addFieldOffset(0,t,0)}static createRecordsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startRecordsVector(e,t){e.startVector(4,t,4)}static endRuntimeOptimizations(e){return e.endObject()}static createRuntimeOptimizations(e,t){return r.startRuntimeOptimizations(e),r.addRecords(e,t),r.endRuntimeOptimizations(e)}};jn.RuntimeOptimizations=Vu});var Qi=ve(aa=>{"use strict";Object.defineProperty(aa,"__esModule",{value:!0});aa.TensorDataType=void 0;var Pb;(function(r){r[r.UNDEFINED=0]="UNDEFINED",r[r.FLOAT=1]="FLOAT",r[r.UINT8=2]="UINT8",r[r.INT8=3]="INT8",r[r.UINT16=4]="UINT16",r[r.INT16=5]="INT16",r[r.INT32=6]="INT32",r[r.INT64=7]="INT64",r[r.STRING=8]="STRING",r[r.BOOL=9]="BOOL",r[r.FLOAT16=10]="FLOAT16",r[r.DOUBLE=11]="DOUBLE",r[r.UINT32=12]="UINT32",r[r.UINT64=13]="UINT64",r[r.COMPLEX64=14]="COMPLEX64",r[r.COMPLEX128=15]="COMPLEX128",r[r.BFLOAT16=16]="BFLOAT16",r[r.FLOAT8E4M3FN=17]="FLOAT8E4M3FN",r[r.FLOAT8E4M3FNUZ=18]="FLOAT8E4M3FNUZ",r[r.FLOAT8E5M2=19]="FLOAT8E5M2",r[r.FLOAT8E5M2FNUZ=20]="FLOAT8E5M2FNUZ"})(Pb||(aa.TensorDataType=Pb={}))});var eo=ve(Ln=>{"use strict";var B3=Ln&&Ln.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),F3=Ln&&Ln.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),V3=Ln&&Ln.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&B3(e,r,t);return F3(e,r),e};Object.defineProperty(Ln,"__esModule",{value:!0});Ln.Tensor=void 0;var U3=V3(et()),Eb=Qi(),Gu=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsTensor(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsTensor(e,t){return e.setPosition(e.position()+U3.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}name(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}docString(e){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__string(this.bb_pos+t,e):null}dims(e){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readInt64(this.bb.__vector(this.bb_pos+t)+e*8):BigInt(0)}dimsLength(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__vector_len(this.bb_pos+e):0}dataType(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readInt32(this.bb_pos+e):Eb.TensorDataType.UNDEFINED}rawData(e){let t=this.bb.__offset(this.bb_pos,12);return t?this.bb.readUint8(this.bb.__vector(this.bb_pos+t)+e):0}rawDataLength(){let e=this.bb.__offset(this.bb_pos,12);return e?this.bb.__vector_len(this.bb_pos+e):0}rawDataArray(){let e=this.bb.__offset(this.bb_pos,12);return e?new Uint8Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}stringData(e,t){let n=this.bb.__offset(this.bb_pos,14);return n?this.bb.__string(this.bb.__vector(this.bb_pos+n)+e*4,t):null}stringDataLength(){let e=this.bb.__offset(this.bb_pos,14);return e?this.bb.__vector_len(this.bb_pos+e):0}externalDataOffset(){let e=this.bb.__offset(this.bb_pos,16);return e?this.bb.readInt64(this.bb_pos+e):BigInt("-1")}static startTensor(e){e.startObject(7)}static addName(e,t){e.addFieldOffset(0,t,0)}static addDocString(e,t){e.addFieldOffset(1,t,0)}static addDims(e,t){e.addFieldOffset(2,t,0)}static createDimsVector(e,t){e.startVector(8,t.length,8);for(let n=t.length-1;n>=0;n--)e.addInt64(t[n]);return e.endVector()}static startDimsVector(e,t){e.startVector(8,t,8)}static addDataType(e,t){e.addFieldInt32(3,t,Eb.TensorDataType.UNDEFINED)}static addRawData(e,t){e.addFieldOffset(4,t,0)}static createRawDataVector(e,t){e.startVector(1,t.length,1);for(let n=t.length-1;n>=0;n--)e.addInt8(t[n]);return e.endVector()}static startRawDataVector(e,t){e.startVector(1,t,1)}static addStringData(e,t){e.addFieldOffset(5,t,0)}static createStringDataVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startStringDataVector(e,t){e.startVector(4,t,4)}static addExternalDataOffset(e,t){e.addFieldInt64(6,t,BigInt("-1"))}static endTensor(e){return e.endObject()}static createTensor(e,t,n,i,o,a,s,l){return r.startTensor(e),r.addName(e,t),r.addDocString(e,n),r.addDims(e,i),r.addDataType(e,o),r.addRawData(e,a),r.addStringData(e,s),r.addExternalDataOffset(e,l),r.endTensor(e)}};Ln.Tensor=Gu});var Hu=ve(Nn=>{"use strict";var G3=Nn&&Nn.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),W3=Nn&&Nn.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),H3=Nn&&Nn.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&G3(e,r,t);return W3(e,r),e};Object.defineProperty(Nn,"__esModule",{value:!0});Nn.SparseTensor=void 0;var q3=H3(et()),Db=eo(),Wu=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsSparseTensor(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsSparseTensor(e,t){return e.setPosition(e.position()+q3.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}values(e){let t=this.bb.__offset(this.bb_pos,4);return t?(e||new Db.Tensor).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}indices(e){let t=this.bb.__offset(this.bb_pos,6);return t?(e||new Db.Tensor).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}dims(e){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.readInt64(this.bb.__vector(this.bb_pos+t)+e*8):BigInt(0)}dimsLength(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__vector_len(this.bb_pos+e):0}static startSparseTensor(e){e.startObject(3)}static addValues(e,t){e.addFieldOffset(0,t,0)}static addIndices(e,t){e.addFieldOffset(1,t,0)}static addDims(e,t){e.addFieldOffset(2,t,0)}static createDimsVector(e,t){e.startVector(8,t.length,8);for(let n=t.length-1;n>=0;n--)e.addInt64(t[n]);return e.endVector()}static startDimsVector(e,t){e.startVector(8,t,8)}static endSparseTensor(e){return e.endObject()}};Nn.SparseTensor=Wu});var Ku=ve(Rn=>{"use strict";var K3=Rn&&Rn.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),X3=Rn&&Rn.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),Z3=Rn&&Rn.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&K3(e,r,t);return X3(e,r),e};Object.defineProperty(Rn,"__esModule",{value:!0});Rn.MapType=void 0;var J3=Z3(et()),kb=Qi(),Y3=to(),qu=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsMapType(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsMapType(e,t){return e.setPosition(e.position()+J3.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}keyType(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt32(this.bb_pos+e):kb.TensorDataType.UNDEFINED}valueType(e){let t=this.bb.__offset(this.bb_pos,6);return t?(e||new Y3.TypeInfo).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}static startMapType(e){e.startObject(2)}static addKeyType(e,t){e.addFieldInt32(0,t,kb.TensorDataType.UNDEFINED)}static addValueType(e,t){e.addFieldOffset(1,t,0)}static endMapType(e){return e.endObject()}};Rn.MapType=qu});var Zu=ve(Mn=>{"use strict";var Q3=Mn&&Mn.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),eD=Mn&&Mn.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),tD=Mn&&Mn.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&Q3(e,r,t);return eD(e,r),e};Object.defineProperty(Mn,"__esModule",{value:!0});Mn.SequenceType=void 0;var nD=tD(et()),rD=to(),Xu=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsSequenceType(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsSequenceType(e,t){return e.setPosition(e.position()+nD.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}elemType(e){let t=this.bb.__offset(this.bb_pos,4);return t?(e||new rD.TypeInfo).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}static startSequenceType(e){e.startObject(1)}static addElemType(e,t){e.addFieldOffset(0,t,0)}static endSequenceType(e){return e.endObject()}static createSequenceType(e,t){return r.startSequenceType(e),r.addElemType(e,t),r.endSequenceType(e)}};Mn.SequenceType=Xu});var Ju=ve(sa=>{"use strict";Object.defineProperty(sa,"__esModule",{value:!0});sa.DimensionValueType=void 0;var jb;(function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.VALUE=1]="VALUE",r[r.PARAM=2]="PARAM"})(jb||(sa.DimensionValueType=jb={}))});var Qu=ve(zn=>{"use strict";var iD=zn&&zn.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),oD=zn&&zn.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),aD=zn&&zn.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&iD(e,r,t);return oD(e,r),e};Object.defineProperty(zn,"__esModule",{value:!0});zn.DimensionValue=void 0;var sD=aD(et()),Lb=Ju(),Yu=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsDimensionValue(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsDimensionValue(e,t){return e.setPosition(e.position()+sD.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}dimType(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt8(this.bb_pos+e):Lb.DimensionValueType.UNKNOWN}dimValue(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readInt64(this.bb_pos+e):BigInt("0")}dimParam(e){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__string(this.bb_pos+t,e):null}static startDimensionValue(e){e.startObject(3)}static addDimType(e,t){e.addFieldInt8(0,t,Lb.DimensionValueType.UNKNOWN)}static addDimValue(e,t){e.addFieldInt64(1,t,BigInt("0"))}static addDimParam(e,t){e.addFieldOffset(2,t,0)}static endDimensionValue(e){return e.endObject()}static createDimensionValue(e,t,n,i){return r.startDimensionValue(e),r.addDimType(e,t),r.addDimValue(e,n),r.addDimParam(e,i),r.endDimensionValue(e)}};zn.DimensionValue=Yu});var tl=ve(Bn=>{"use strict";var uD=Bn&&Bn.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),lD=Bn&&Bn.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),cD=Bn&&Bn.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&uD(e,r,t);return lD(e,r),e};Object.defineProperty(Bn,"__esModule",{value:!0});Bn.Dimension=void 0;var dD=cD(et()),fD=Qu(),el=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsDimension(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsDimension(e,t){return e.setPosition(e.position()+dD.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}value(e){let t=this.bb.__offset(this.bb_pos,4);return t?(e||new fD.DimensionValue).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}denotation(e){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__string(this.bb_pos+t,e):null}static startDimension(e){e.startObject(2)}static addValue(e,t){e.addFieldOffset(0,t,0)}static addDenotation(e,t){e.addFieldOffset(1,t,0)}static endDimension(e){return e.endObject()}static createDimension(e,t,n){return r.startDimension(e),r.addValue(e,t),r.addDenotation(e,n),r.endDimension(e)}};Bn.Dimension=el});var rl=ve(Fn=>{"use strict";var pD=Fn&&Fn.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),hD=Fn&&Fn.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),mD=Fn&&Fn.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&pD(e,r,t);return hD(e,r),e};Object.defineProperty(Fn,"__esModule",{value:!0});Fn.Shape=void 0;var gD=mD(et()),yD=tl(),nl=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsShape(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsShape(e,t){return e.setPosition(e.position()+gD.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}dim(e,t){let n=this.bb.__offset(this.bb_pos,4);return n?(t||new yD.Dimension).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}dimLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}static startShape(e){e.startObject(1)}static addDim(e,t){e.addFieldOffset(0,t,0)}static createDimVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startDimVector(e,t){e.startVector(4,t,4)}static endShape(e){return e.endObject()}static createShape(e,t){return r.startShape(e),r.addDim(e,t),r.endShape(e)}};Fn.Shape=nl});var ol=ve(Vn=>{"use strict";var bD=Vn&&Vn.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),_D=Vn&&Vn.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),vD=Vn&&Vn.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&bD(e,r,t);return _D(e,r),e};Object.defineProperty(Vn,"__esModule",{value:!0});Vn.TensorTypeAndShape=void 0;var wD=vD(et()),TD=rl(),Nb=Qi(),il=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsTensorTypeAndShape(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsTensorTypeAndShape(e,t){return e.setPosition(e.position()+wD.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}elemType(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt32(this.bb_pos+e):Nb.TensorDataType.UNDEFINED}shape(e){let t=this.bb.__offset(this.bb_pos,6);return t?(e||new TD.Shape).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}static startTensorTypeAndShape(e){e.startObject(2)}static addElemType(e,t){e.addFieldInt32(0,t,Nb.TensorDataType.UNDEFINED)}static addShape(e,t){e.addFieldOffset(1,t,0)}static endTensorTypeAndShape(e){return e.endObject()}};Vn.TensorTypeAndShape=il});var al=ve(Er=>{"use strict";Object.defineProperty(Er,"__esModule",{value:!0});Er.unionListToTypeInfoValue=Er.unionToTypeInfoValue=Er.TypeInfoValue=void 0;var Rb=Ku(),Mb=Zu(),zb=ol(),ua;(function(r){r[r.NONE=0]="NONE",r[r.tensor_type=1]="tensor_type",r[r.sequence_type=2]="sequence_type",r[r.map_type=3]="map_type"})(ua||(Er.TypeInfoValue=ua={}));function xD(r,e){switch(ua[r]){case"NONE":return null;case"tensor_type":return e(new zb.TensorTypeAndShape);case"sequence_type":return e(new Mb.SequenceType);case"map_type":return e(new Rb.MapType);default:return null}}Er.unionToTypeInfoValue=xD;function ID(r,e,t){switch(ua[r]){case"NONE":return null;case"tensor_type":return e(t,new zb.TensorTypeAndShape);case"sequence_type":return e(t,new Mb.SequenceType);case"map_type":return e(t,new Rb.MapType);default:return null}}Er.unionListToTypeInfoValue=ID});var to=ve(Un=>{"use strict";var SD=Un&&Un.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),$D=Un&&Un.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),AD=Un&&Un.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&SD(e,r,t);return $D(e,r),e};Object.defineProperty(Un,"__esModule",{value:!0});Un.TypeInfo=void 0;var CD=AD(et()),Bb=al(),sl=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsTypeInfo(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsTypeInfo(e,t){return e.setPosition(e.position()+CD.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}denotation(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}valueType(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readUint8(this.bb_pos+e):Bb.TypeInfoValue.NONE}value(e){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__union(e,this.bb_pos+t):null}static startTypeInfo(e){e.startObject(3)}static addDenotation(e,t){e.addFieldOffset(0,t,0)}static addValueType(e,t){e.addFieldInt8(1,t,Bb.TypeInfoValue.NONE)}static addValue(e,t){e.addFieldOffset(2,t,0)}static endTypeInfo(e){return e.endObject()}static createTypeInfo(e,t,n,i){return r.startTypeInfo(e),r.addDenotation(e,t),r.addValueType(e,n),r.addValue(e,i),r.endTypeInfo(e)}};Un.TypeInfo=sl});var ll=ve(Gn=>{"use strict";var OD=Gn&&Gn.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),PD=Gn&&Gn.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),ED=Gn&&Gn.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&OD(e,r,t);return PD(e,r),e};Object.defineProperty(Gn,"__esModule",{value:!0});Gn.ValueInfo=void 0;var DD=ED(et()),kD=to(),ul=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsValueInfo(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsValueInfo(e,t){return e.setPosition(e.position()+DD.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}name(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}docString(e){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__string(this.bb_pos+t,e):null}type(e){let t=this.bb.__offset(this.bb_pos,8);return t?(e||new kD.TypeInfo).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}static startValueInfo(e){e.startObject(3)}static addName(e,t){e.addFieldOffset(0,t,0)}static addDocString(e,t){e.addFieldOffset(1,t,0)}static addType(e,t){e.addFieldOffset(2,t,0)}static endValueInfo(e){return e.endObject()}};Gn.ValueInfo=ul});var la=ve(Wn=>{"use strict";var jD=Wn&&Wn.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),LD=Wn&&Wn.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),ND=Wn&&Wn.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&jD(e,r,t);return LD(e,r),e};Object.defineProperty(Wn,"__esModule",{value:!0});Wn.Graph=void 0;var RD=ND(et()),MD=Pu(),zD=Lu(),BD=Uu(),FD=Hu(),VD=eo(),UD=ll(),cl=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsGraph(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsGraph(e,t){return e.setPosition(e.position()+RD.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}initializers(e,t){let n=this.bb.__offset(this.bb_pos,4);return n?(t||new VD.Tensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}initializersLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}nodeArgs(e,t){let n=this.bb.__offset(this.bb_pos,6);return n?(t||new UD.ValueInfo).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}nodeArgsLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}nodes(e,t){let n=this.bb.__offset(this.bb_pos,8);return n?(t||new MD.Node).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}nodesLength(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__vector_len(this.bb_pos+e):0}maxNodeIndex(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readUint32(this.bb_pos+e):0}nodeEdges(e,t){let n=this.bb.__offset(this.bb_pos,12);return n?(t||new zD.NodeEdge).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}nodeEdgesLength(){let e=this.bb.__offset(this.bb_pos,12);return e?this.bb.__vector_len(this.bb_pos+e):0}inputs(e,t){let n=this.bb.__offset(this.bb_pos,14);return n?this.bb.__string(this.bb.__vector(this.bb_pos+n)+e*4,t):null}inputsLength(){let e=this.bb.__offset(this.bb_pos,14);return e?this.bb.__vector_len(this.bb_pos+e):0}outputs(e,t){let n=this.bb.__offset(this.bb_pos,16);return n?this.bb.__string(this.bb.__vector(this.bb_pos+n)+e*4,t):null}outputsLength(){let e=this.bb.__offset(this.bb_pos,16);return e?this.bb.__vector_len(this.bb_pos+e):0}sparseInitializers(e,t){let n=this.bb.__offset(this.bb_pos,18);return n?(t||new FD.SparseTensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}sparseInitializersLength(){let e=this.bb.__offset(this.bb_pos,18);return e?this.bb.__vector_len(this.bb_pos+e):0}runtimeOptimizations(e){let t=this.bb.__offset(this.bb_pos,20);return t?(e||new BD.RuntimeOptimizations).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}static startGraph(e){e.startObject(9)}static addInitializers(e,t){e.addFieldOffset(0,t,0)}static createInitializersVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startInitializersVector(e,t){e.startVector(4,t,4)}static addNodeArgs(e,t){e.addFieldOffset(1,t,0)}static createNodeArgsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startNodeArgsVector(e,t){e.startVector(4,t,4)}static addNodes(e,t){e.addFieldOffset(2,t,0)}static createNodesVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startNodesVector(e,t){e.startVector(4,t,4)}static addMaxNodeIndex(e,t){e.addFieldInt32(3,t,0)}static addNodeEdges(e,t){e.addFieldOffset(4,t,0)}static createNodeEdgesVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startNodeEdgesVector(e,t){e.startVector(4,t,4)}static addInputs(e,t){e.addFieldOffset(5,t,0)}static createInputsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startInputsVector(e,t){e.startVector(4,t,4)}static addOutputs(e,t){e.addFieldOffset(6,t,0)}static createOutputsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startOutputsVector(e,t){e.startVector(4,t,4)}static addSparseInitializers(e,t){e.addFieldOffset(7,t,0)}static createSparseInitializersVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startSparseInitializersVector(e,t){e.startVector(4,t,4)}static addRuntimeOptimizations(e,t){e.addFieldOffset(8,t,0)}static endGraph(e){return e.endObject()}};Wn.Graph=cl});var Eu=ve(Hn=>{"use strict";var GD=Hn&&Hn.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),WD=Hn&&Hn.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),HD=Hn&&Hn.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&GD(e,r,t);return WD(e,r),e};Object.defineProperty(Hn,"__esModule",{value:!0});Hn.Attribute=void 0;var qD=HD(et()),Fb=Au(),Vb=la(),Ub=eo(),dl=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsAttribute(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsAttribute(e,t){return e.setPosition(e.position()+qD.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}name(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}docString(e){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__string(this.bb_pos+t,e):null}type(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.readInt32(this.bb_pos+e):Fb.AttributeType.UNDEFINED}f(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readFloat32(this.bb_pos+e):0}i(){let e=this.bb.__offset(this.bb_pos,12);return e?this.bb.readInt64(this.bb_pos+e):BigInt("0")}s(e){let t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__string(this.bb_pos+t,e):null}t(e){let t=this.bb.__offset(this.bb_pos,16);return t?(e||new Ub.Tensor).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}g(e){let t=this.bb.__offset(this.bb_pos,18);return t?(e||new Vb.Graph).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}floats(e){let t=this.bb.__offset(this.bb_pos,20);return t?this.bb.readFloat32(this.bb.__vector(this.bb_pos+t)+e*4):0}floatsLength(){let e=this.bb.__offset(this.bb_pos,20);return e?this.bb.__vector_len(this.bb_pos+e):0}floatsArray(){let e=this.bb.__offset(this.bb_pos,20);return e?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}ints(e){let t=this.bb.__offset(this.bb_pos,22);return t?this.bb.readInt64(this.bb.__vector(this.bb_pos+t)+e*8):BigInt(0)}intsLength(){let e=this.bb.__offset(this.bb_pos,22);return e?this.bb.__vector_len(this.bb_pos+e):0}strings(e,t){let n=this.bb.__offset(this.bb_pos,24);return n?this.bb.__string(this.bb.__vector(this.bb_pos+n)+e*4,t):null}stringsLength(){let e=this.bb.__offset(this.bb_pos,24);return e?this.bb.__vector_len(this.bb_pos+e):0}tensors(e,t){let n=this.bb.__offset(this.bb_pos,26);return n?(t||new Ub.Tensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}tensorsLength(){let e=this.bb.__offset(this.bb_pos,26);return e?this.bb.__vector_len(this.bb_pos+e):0}graphs(e,t){let n=this.bb.__offset(this.bb_pos,28);return n?(t||new Vb.Graph).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}graphsLength(){let e=this.bb.__offset(this.bb_pos,28);return e?this.bb.__vector_len(this.bb_pos+e):0}static startAttribute(e){e.startObject(13)}static addName(e,t){e.addFieldOffset(0,t,0)}static addDocString(e,t){e.addFieldOffset(1,t,0)}static addType(e,t){e.addFieldInt32(2,t,Fb.AttributeType.UNDEFINED)}static addF(e,t){e.addFieldFloat32(3,t,0)}static addI(e,t){e.addFieldInt64(4,t,BigInt("0"))}static addS(e,t){e.addFieldOffset(5,t,0)}static addT(e,t){e.addFieldOffset(6,t,0)}static addG(e,t){e.addFieldOffset(7,t,0)}static addFloats(e,t){e.addFieldOffset(8,t,0)}static createFloatsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addFloat32(t[n]);return e.endVector()}static startFloatsVector(e,t){e.startVector(4,t,4)}static addInts(e,t){e.addFieldOffset(9,t,0)}static createIntsVector(e,t){e.startVector(8,t.length,8);for(let n=t.length-1;n>=0;n--)e.addInt64(t[n]);return e.endVector()}static startIntsVector(e,t){e.startVector(8,t,8)}static addStrings(e,t){e.addFieldOffset(10,t,0)}static createStringsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startStringsVector(e,t){e.startVector(4,t,4)}static addTensors(e,t){e.addFieldOffset(11,t,0)}static createTensorsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startTensorsVector(e,t){e.startVector(4,t,4)}static addGraphs(e,t){e.addFieldOffset(12,t,0)}static createGraphsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startGraphsVector(e,t){e.startVector(4,t,4)}static endAttribute(e){return e.endObject()}};Hn.Attribute=dl});var pl=ve(qn=>{"use strict";var KD=qn&&qn.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),XD=qn&&qn.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),ZD=qn&&qn.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&KD(e,r,t);return XD(e,r),e};Object.defineProperty(qn,"__esModule",{value:!0});qn.DeprecatedKernelCreateInfos=void 0;var JD=ZD(et()),fl=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsDeprecatedKernelCreateInfos(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsDeprecatedKernelCreateInfos(e,t){return e.setPosition(e.position()+JD.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}nodeIndices(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readUint32(this.bb.__vector(this.bb_pos+t)+e*4):0}nodeIndicesLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}nodeIndicesArray(){let e=this.bb.__offset(this.bb_pos,4);return e?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}kernelDefHashes(e){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.readUint64(this.bb.__vector(this.bb_pos+t)+e*8):BigInt(0)}kernelDefHashesLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}static startDeprecatedKernelCreateInfos(e){e.startObject(2)}static addNodeIndices(e,t){e.addFieldOffset(0,t,0)}static createNodeIndicesVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addInt32(t[n]);return e.endVector()}static startNodeIndicesVector(e,t){e.startVector(4,t,4)}static addKernelDefHashes(e,t){e.addFieldOffset(1,t,0)}static createKernelDefHashesVector(e,t){e.startVector(8,t.length,8);for(let n=t.length-1;n>=0;n--)e.addInt64(t[n]);return e.endVector()}static startKernelDefHashesVector(e,t){e.startVector(8,t,8)}static endDeprecatedKernelCreateInfos(e){return e.endObject()}static createDeprecatedKernelCreateInfos(e,t,n){return r.startDeprecatedKernelCreateInfos(e),r.addNodeIndices(e,t),r.addKernelDefHashes(e,n),r.endDeprecatedKernelCreateInfos(e)}};qn.DeprecatedKernelCreateInfos=fl});var Gb=ve(Kn=>{"use strict";var YD=Kn&&Kn.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),QD=Kn&&Kn.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),ek=Kn&&Kn.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&YD(e,r,t);return QD(e,r),e};Object.defineProperty(Kn,"__esModule",{value:!0});Kn.DeprecatedNodeIndexAndKernelDefHash=void 0;var tk=ek(et()),hl=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsDeprecatedNodeIndexAndKernelDefHash(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsDeprecatedNodeIndexAndKernelDefHash(e,t){return e.setPosition(e.position()+tk.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}nodeIndex(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readUint32(this.bb_pos+e):0}kernelDefHash(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readUint64(this.bb_pos+e):BigInt("0")}static startDeprecatedNodeIndexAndKernelDefHash(e){e.startObject(2)}static addNodeIndex(e,t){e.addFieldInt32(0,t,0)}static addKernelDefHash(e,t){e.addFieldInt64(1,t,BigInt("0"))}static endDeprecatedNodeIndexAndKernelDefHash(e){return e.endObject()}static createDeprecatedNodeIndexAndKernelDefHash(e,t,n){return r.startDeprecatedNodeIndexAndKernelDefHash(e),r.addNodeIndex(e,t),r.addKernelDefHash(e,n),r.endDeprecatedNodeIndexAndKernelDefHash(e)}};Kn.DeprecatedNodeIndexAndKernelDefHash=hl});var gl=ve(Xn=>{"use strict";var nk=Xn&&Xn.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),rk=Xn&&Xn.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),ik=Xn&&Xn.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&nk(e,r,t);return rk(e,r),e};Object.defineProperty(Xn,"__esModule",{value:!0});Xn.DeprecatedSubGraphSessionState=void 0;var ok=ik(et()),ak=yl(),ml=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsDeprecatedSubGraphSessionState(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsDeprecatedSubGraphSessionState(e,t){return e.setPosition(e.position()+ok.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}graphId(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}sessionState(e){let t=this.bb.__offset(this.bb_pos,6);return t?(e||new ak.DeprecatedSessionState).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}static startDeprecatedSubGraphSessionState(e){e.startObject(2)}static addGraphId(e,t){e.addFieldOffset(0,t,0)}static addSessionState(e,t){e.addFieldOffset(1,t,0)}static endDeprecatedSubGraphSessionState(e){let t=e.endObject();return e.requiredField(t,4),t}};Xn.DeprecatedSubGraphSessionState=ml});var yl=ve(Zn=>{"use strict";var sk=Zn&&Zn.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),uk=Zn&&Zn.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),lk=Zn&&Zn.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&sk(e,r,t);return uk(e,r),e};Object.defineProperty(Zn,"__esModule",{value:!0});Zn.DeprecatedSessionState=void 0;var ck=lk(et()),dk=pl(),fk=gl(),bl=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsDeprecatedSessionState(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsDeprecatedSessionState(e,t){return e.setPosition(e.position()+ck.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}kernels(e){let t=this.bb.__offset(this.bb_pos,4);return t?(e||new dk.DeprecatedKernelCreateInfos).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}subGraphSessionStates(e,t){let n=this.bb.__offset(this.bb_pos,6);return n?(t||new fk.DeprecatedSubGraphSessionState).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}subGraphSessionStatesLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}static startDeprecatedSessionState(e){e.startObject(2)}static addKernels(e,t){e.addFieldOffset(0,t,0)}static addSubGraphSessionStates(e,t){e.addFieldOffset(1,t,0)}static createSubGraphSessionStatesVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startSubGraphSessionStatesVector(e,t){e.startVector(4,t,4)}static endDeprecatedSessionState(e){return e.endObject()}static createDeprecatedSessionState(e,t,n){return r.startDeprecatedSessionState(e),r.addKernels(e,t),r.addSubGraphSessionStates(e,n),r.endDeprecatedSessionState(e)}};Zn.DeprecatedSessionState=bl});var vl=ve(Jn=>{"use strict";var pk=Jn&&Jn.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),hk=Jn&&Jn.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),mk=Jn&&Jn.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&pk(e,r,t);return hk(e,r),e};Object.defineProperty(Jn,"__esModule",{value:!0});Jn.KernelTypeStrArgsEntry=void 0;var gk=mk(et()),yk=$u(),_l=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsKernelTypeStrArgsEntry(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsKernelTypeStrArgsEntry(e,t){return e.setPosition(e.position()+gk.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}kernelTypeStr(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}args(e,t){let n=this.bb.__offset(this.bb_pos,6);return n?(t||new yk.ArgTypeAndIndex).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}argsLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}static startKernelTypeStrArgsEntry(e){e.startObject(2)}static addKernelTypeStr(e,t){e.addFieldOffset(0,t,0)}static addArgs(e,t){e.addFieldOffset(1,t,0)}static createArgsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startArgsVector(e,t){e.startVector(4,t,4)}static endKernelTypeStrArgsEntry(e){let t=e.endObject();return e.requiredField(t,4),t}static createKernelTypeStrArgsEntry(e,t,n){return r.startKernelTypeStrArgsEntry(e),r.addKernelTypeStr(e,t),r.addArgs(e,n),r.endKernelTypeStrArgsEntry(e)}};Jn.KernelTypeStrArgsEntry=_l});var Tl=ve(Yn=>{"use strict";var bk=Yn&&Yn.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),_k=Yn&&Yn.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),vk=Yn&&Yn.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&bk(e,r,t);return _k(e,r),e};Object.defineProperty(Yn,"__esModule",{value:!0});Yn.OpIdKernelTypeStrArgsEntry=void 0;var wk=vk(et()),Tk=vl(),wl=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsOpIdKernelTypeStrArgsEntry(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsOpIdKernelTypeStrArgsEntry(e,t){return e.setPosition(e.position()+wk.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}opId(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}kernelTypeStrArgs(e,t){let n=this.bb.__offset(this.bb_pos,6);return n?(t||new Tk.KernelTypeStrArgsEntry).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}kernelTypeStrArgsLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}static startOpIdKernelTypeStrArgsEntry(e){e.startObject(2)}static addOpId(e,t){e.addFieldOffset(0,t,0)}static addKernelTypeStrArgs(e,t){e.addFieldOffset(1,t,0)}static createKernelTypeStrArgsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startKernelTypeStrArgsVector(e,t){e.startVector(4,t,4)}static endOpIdKernelTypeStrArgsEntry(e){let t=e.endObject();return e.requiredField(t,4),t}static createOpIdKernelTypeStrArgsEntry(e,t,n){return r.startOpIdKernelTypeStrArgsEntry(e),r.addOpId(e,t),r.addKernelTypeStrArgs(e,n),r.endOpIdKernelTypeStrArgsEntry(e)}};Yn.OpIdKernelTypeStrArgsEntry=wl});var Il=ve(Qn=>{"use strict";var xk=Qn&&Qn.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),Ik=Qn&&Qn.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),Sk=Qn&&Qn.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&xk(e,r,t);return Ik(e,r),e};Object.defineProperty(Qn,"__esModule",{value:!0});Qn.KernelTypeStrResolver=void 0;var $k=Sk(et()),Ak=Tl(),xl=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsKernelTypeStrResolver(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsKernelTypeStrResolver(e,t){return e.setPosition(e.position()+$k.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}opKernelTypeStrArgs(e,t){let n=this.bb.__offset(this.bb_pos,4);return n?(t||new Ak.OpIdKernelTypeStrArgsEntry).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}opKernelTypeStrArgsLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}static startKernelTypeStrResolver(e){e.startObject(1)}static addOpKernelTypeStrArgs(e,t){e.addFieldOffset(0,t,0)}static createOpKernelTypeStrArgsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startOpKernelTypeStrArgsVector(e,t){e.startVector(4,t,4)}static endKernelTypeStrResolver(e){return e.endObject()}static createKernelTypeStrResolver(e,t){return r.startKernelTypeStrResolver(e),r.addOpKernelTypeStrArgs(e,t),r.endKernelTypeStrResolver(e)}};Qn.KernelTypeStrResolver=xl});var $l=ve(er=>{"use strict";var Ck=er&&er.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),Ok=er&&er.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),Pk=er&&er.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&Ck(e,r,t);return Ok(e,r),e};Object.defineProperty(er,"__esModule",{value:!0});er.OperatorSetId=void 0;var Ek=Pk(et()),Sl=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsOperatorSetId(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsOperatorSetId(e,t){return e.setPosition(e.position()+Ek.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}domain(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}version(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readInt64(this.bb_pos+e):BigInt("0")}static startOperatorSetId(e){e.startObject(2)}static addDomain(e,t){e.addFieldOffset(0,t,0)}static addVersion(e,t){e.addFieldInt64(1,t,BigInt("0"))}static endOperatorSetId(e){return e.endObject()}static createOperatorSetId(e,t,n){return r.startOperatorSetId(e),r.addDomain(e,t),r.addVersion(e,n),r.endOperatorSetId(e)}};er.OperatorSetId=Sl});var Cl=ve(tr=>{"use strict";var Dk=tr&&tr.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),kk=tr&&tr.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),jk=tr&&tr.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&Dk(e,r,t);return kk(e,r),e};Object.defineProperty(tr,"__esModule",{value:!0});tr.StringStringEntry=void 0;var Lk=jk(et()),Al=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsStringStringEntry(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsStringStringEntry(e,t){return e.setPosition(e.position()+Lk.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}key(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}value(e){let t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__string(this.bb_pos+t,e):null}static startStringStringEntry(e){e.startObject(2)}static addKey(e,t){e.addFieldOffset(0,t,0)}static addValue(e,t){e.addFieldOffset(1,t,0)}static endStringStringEntry(e){return e.endObject()}static createStringStringEntry(e,t,n){return r.startStringStringEntry(e),r.addKey(e,t),r.addValue(e,n),r.endStringStringEntry(e)}};tr.StringStringEntry=Al});var Pl=ve(nr=>{"use strict";var Nk=nr&&nr.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),Rk=nr&&nr.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),Mk=nr&&nr.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&Nk(e,r,t);return Rk(e,r),e};Object.defineProperty(nr,"__esModule",{value:!0});nr.Model=void 0;var zk=Mk(et()),Bk=la(),Fk=$l(),Vk=Cl(),Ol=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsModel(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsModel(e,t){return e.setPosition(e.position()+zk.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}irVersion(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt64(this.bb_pos+e):BigInt("0")}opsetImport(e,t){let n=this.bb.__offset(this.bb_pos,6);return n?(t||new Fk.OperatorSetId).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}opsetImportLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}producerName(e){let t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__string(this.bb_pos+t,e):null}producerVersion(e){let t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__string(this.bb_pos+t,e):null}domain(e){let t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__string(this.bb_pos+t,e):null}modelVersion(){let e=this.bb.__offset(this.bb_pos,14);return e?this.bb.readInt64(this.bb_pos+e):BigInt("0")}docString(e){let t=this.bb.__offset(this.bb_pos,16);return t?this.bb.__string(this.bb_pos+t,e):null}graph(e){let t=this.bb.__offset(this.bb_pos,18);return t?(e||new Bk.Graph).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}graphDocString(e){let t=this.bb.__offset(this.bb_pos,20);return t?this.bb.__string(this.bb_pos+t,e):null}metadataProps(e,t){let n=this.bb.__offset(this.bb_pos,22);return n?(t||new Vk.StringStringEntry).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+n)+e*4),this.bb):null}metadataPropsLength(){let e=this.bb.__offset(this.bb_pos,22);return e?this.bb.__vector_len(this.bb_pos+e):0}static startModel(e){e.startObject(10)}static addIrVersion(e,t){e.addFieldInt64(0,t,BigInt("0"))}static addOpsetImport(e,t){e.addFieldOffset(1,t,0)}static createOpsetImportVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startOpsetImportVector(e,t){e.startVector(4,t,4)}static addProducerName(e,t){e.addFieldOffset(2,t,0)}static addProducerVersion(e,t){e.addFieldOffset(3,t,0)}static addDomain(e,t){e.addFieldOffset(4,t,0)}static addModelVersion(e,t){e.addFieldInt64(5,t,BigInt("0"))}static addDocString(e,t){e.addFieldOffset(6,t,0)}static addGraph(e,t){e.addFieldOffset(7,t,0)}static addGraphDocString(e,t){e.addFieldOffset(8,t,0)}static addMetadataProps(e,t){e.addFieldOffset(9,t,0)}static createMetadataPropsVector(e,t){e.startVector(4,t.length,4);for(let n=t.length-1;n>=0;n--)e.addOffset(t[n]);return e.endVector()}static startMetadataPropsVector(e,t){e.startVector(4,t,4)}static endModel(e){return e.endObject()}};nr.Model=Ol});var Wb=ve(rr=>{"use strict";var Uk=rr&&rr.__createBinding||(Object.create?function(r,e,t,n){n===void 0&&(n=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(r,n,i)}:function(r,e,t,n){n===void 0&&(n=t),r[n]=e[t]}),Gk=rr&&rr.__setModuleDefault||(Object.create?function(r,e){Object.defineProperty(r,"default",{enumerable:!0,value:e})}:function(r,e){r.default=e}),Wk=rr&&rr.__importStar||function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var t in r)t!=="default"&&Object.prototype.hasOwnProperty.call(r,t)&&Uk(e,r,t);return Gk(e,r),e};Object.defineProperty(rr,"__esModule",{value:!0});rr.InferenceSession=void 0;var Hk=Wk(et()),qk=Il(),Kk=Pl(),El=class r{constructor(){this.bb=null,this.bb_pos=0}__init(e,t){return this.bb_pos=e,this.bb=t,this}static getRootAsInferenceSession(e,t){return(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsInferenceSession(e,t){return e.setPosition(e.position()+Hk.SIZE_PREFIX_LENGTH),(t||new r).__init(e.readInt32(e.position())+e.position(),e)}static bufferHasIdentifier(e){return e.__has_identifier("ORTM")}ortVersion(e){let t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__string(this.bb_pos+t,e):null}model(e){let t=this.bb.__offset(this.bb_pos,6);return t?(e||new Kk.Model).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}kernelTypeStrResolver(e){let t=this.bb.__offset(this.bb_pos,10);return t?(e||new qk.KernelTypeStrResolver).__init(this.bb.__indirect(this.bb_pos+t),this.bb):null}static startInferenceSession(e){e.startObject(4)}static addOrtVersion(e,t){e.addFieldOffset(0,t,0)}static addModel(e,t){e.addFieldOffset(1,t,0)}static addKernelTypeStrResolver(e,t){e.addFieldOffset(3,t,0)}static endInferenceSession(e){return e.endObject()}static finishInferenceSessionBuffer(e,t){e.finish(t,"ORTM")}static finishSizePrefixedInferenceSessionBuffer(e,t){e.finish(t,"ORTM",!0)}};rr.InferenceSession=El});var Xk,Zk,ca,nn,Jk,Yk,Qk,ej,tj,nj,rj,ij,Dl,kl,oj,aj,sj,uj,jl,lj,cj,dj,fj,pj,hj,mj,gj,yj,bj,_j,vj,wj,no,Ll,Tj,Nl,xj,Hb=X(()=>{"use strict";Xk=Re(_u()),Zk=Re($u()),ca=Re(Eu()),nn=Re(Au()),Jk=Re(pl()),Yk=Re(Gb()),Qk=Re(yl()),ej=Re(gl()),tj=Re(tl()),nj=Re(Qu()),rj=Re(Ju()),ij=Re(ku()),Dl=Re(la()),kl=Re(Wb()),oj=Re(vl()),aj=Re(Il()),sj=Re(Ku()),uj=Re(Pl()),jl=Re(Pu()),lj=Re(Lu()),cj=Re(Cu()),dj=Re(Ru()),fj=Re(Tl()),pj=Re($l()),hj=Re(zu()),mj=Re(Fu()),gj=Re(Uu()),yj=Re(Zu()),bj=Re(rl()),_j=Re(Hu()),vj=Re(Cl()),wj=Re(eo()),no=Re(Qi()),Ll=Re(ol()),Tj=Re(to()),Nl=Re(al()),xj=Re(ll())});var ro=X(()=>{"use strict";Hb()});var Kb=ve((QF,qb)=>{"use strict";qb.exports=Ij;function Ij(r,e){for(var t=new Array(arguments.length-1),n=0,i=2,o=!0;i<arguments.length;)t[n++]=arguments[i++];return new Promise(function(s,l){t[n]=function(h){if(o)if(o=!1,h)l(h);else{for(var g=new Array(arguments.length-1),b=0;b<g.length;)g[b++]=arguments[b];s.apply(null,g)}};try{r.apply(e||null,t)}catch(d){o&&(o=!1,l(d))}})}});var Yb=ve(Jb=>{"use strict";var fa=Jb;fa.length=function(e){var t=e.length;if(!t)return 0;for(var n=0;--t%4>1&&e.charAt(t)==="=";)++n;return Math.ceil(e.length*3)/4-n};var wi=new Array(64),Zb=new Array(123);for(pn=0;pn<64;)Zb[wi[pn]=pn<26?pn+65:pn<52?pn+71:pn<62?pn-4:pn-59|43]=pn++;var pn;fa.encode=function(e,t,n){for(var i=null,o=[],a=0,s=0,l;t<n;){var d=e[t++];switch(s){case 0:o[a++]=wi[d>>2],l=(d&3)<<4,s=1;break;case 1:o[a++]=wi[l|d>>4],l=(d&15)<<2,s=2;break;case 2:o[a++]=wi[l|d>>6],o[a++]=wi[d&63],s=0;break}a>8191&&((i||(i=[])).push(String.fromCharCode.apply(String,o)),a=0)}return s&&(o[a++]=wi[l],o[a++]=61,s===1&&(o[a++]=61)),i?(a&&i.push(String.fromCharCode.apply(String,o.slice(0,a))),i.join("")):String.fromCharCode.apply(String,o.slice(0,a))};var Xb="invalid encoding";fa.decode=function(e,t,n){for(var i=n,o=0,a,s=0;s<e.length;){var l=e.charCodeAt(s++);if(l===61&&o>1)break;if((l=Zb[l])===void 0)throw Error(Xb);switch(o){case 0:a=l,o=1;break;case 1:t[n++]=a<<2|(l&48)>>4,a=l,o=2;break;case 2:t[n++]=(a&15)<<4|(l&60)>>2,a=l,o=3;break;case 3:t[n++]=(a&3)<<6|l,o=0;break}}if(o===1)throw Error(Xb);return n-i};fa.test=function(e){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)}});var e_=ve((tV,Qb)=>{"use strict";Qb.exports=pa;function pa(){this._listeners={}}pa.prototype.on=function(e,t,n){return(this._listeners[e]||(this._listeners[e]=[])).push({fn:t,ctx:n||this}),this};pa.prototype.off=function(e,t){if(e===void 0)this._listeners={};else if(t===void 0)this._listeners[e]=[];else for(var n=this._listeners[e],i=0;i<n.length;)n[i].fn===t?n.splice(i,1):++i;return this};pa.prototype.emit=function(e){var t=this._listeners[e];if(t){for(var n=[],i=1;i<arguments.length;)n.push(arguments[i++]);for(i=0;i<t.length;)t[i].fn.apply(t[i++].ctx,n)}return this}});var s_=ve((nV,a_)=>{"use strict";a_.exports=t_(t_);function t_(r){return typeof Float32Array<"u"?function(){var e=new Float32Array([-0]),t=new Uint8Array(e.buffer),n=t[3]===128;function i(l,d,h){e[0]=l,d[h]=t[0],d[h+1]=t[1],d[h+2]=t[2],d[h+3]=t[3]}function o(l,d,h){e[0]=l,d[h]=t[3],d[h+1]=t[2],d[h+2]=t[1],d[h+3]=t[0]}r.writeFloatLE=n?i:o,r.writeFloatBE=n?o:i;function a(l,d){return t[0]=l[d],t[1]=l[d+1],t[2]=l[d+2],t[3]=l[d+3],e[0]}function s(l,d){return t[3]=l[d],t[2]=l[d+1],t[1]=l[d+2],t[0]=l[d+3],e[0]}r.readFloatLE=n?a:s,r.readFloatBE=n?s:a}():function(){function e(n,i,o,a){var s=i<0?1:0;if(s&&(i=-i),i===0)n(1/i>0?0:2147483648,o,a);else if(isNaN(i))n(2143289344,o,a);else if(i>34028234663852886e22)n((s<<31|2139095040)>>>0,o,a);else if(i<11754943508222875e-54)n((s<<31|Math.round(i/1401298464324817e-60))>>>0,o,a);else{var l=Math.floor(Math.log(i)/Math.LN2),d=Math.round(i*Math.pow(2,-l)*8388608)&8388607;n((s<<31|l+127<<23|d)>>>0,o,a)}}r.writeFloatLE=e.bind(null,n_),r.writeFloatBE=e.bind(null,r_);function t(n,i,o){var a=n(i,o),s=(a>>31)*2+1,l=a>>>23&255,d=a&8388607;return l===255?d?NaN:s*(1/0):l===0?s*1401298464324817e-60*d:s*Math.pow(2,l-150)*(d+8388608)}r.readFloatLE=t.bind(null,i_),r.readFloatBE=t.bind(null,o_)}(),typeof Float64Array<"u"?function(){var e=new Float64Array([-0]),t=new Uint8Array(e.buffer),n=t[7]===128;function i(l,d,h){e[0]=l,d[h]=t[0],d[h+1]=t[1],d[h+2]=t[2],d[h+3]=t[3],d[h+4]=t[4],d[h+5]=t[5],d[h+6]=t[6],d[h+7]=t[7]}function o(l,d,h){e[0]=l,d[h]=t[7],d[h+1]=t[6],d[h+2]=t[5],d[h+3]=t[4],d[h+4]=t[3],d[h+5]=t[2],d[h+6]=t[1],d[h+7]=t[0]}r.writeDoubleLE=n?i:o,r.writeDoubleBE=n?o:i;function a(l,d){return t[0]=l[d],t[1]=l[d+1],t[2]=l[d+2],t[3]=l[d+3],t[4]=l[d+4],t[5]=l[d+5],t[6]=l[d+6],t[7]=l[d+7],e[0]}function s(l,d){return t[7]=l[d],t[6]=l[d+1],t[5]=l[d+2],t[4]=l[d+3],t[3]=l[d+4],t[2]=l[d+5],t[1]=l[d+6],t[0]=l[d+7],e[0]}r.readDoubleLE=n?a:s,r.readDoubleBE=n?s:a}():function(){function e(n,i,o,a,s,l){var d=a<0?1:0;if(d&&(a=-a),a===0)n(0,s,l+i),n(1/a>0?0:2147483648,s,l+o);else if(isNaN(a))n(0,s,l+i),n(2146959360,s,l+o);else if(a>17976931348623157e292)n(0,s,l+i),n((d<<31|2146435072)>>>0,s,l+o);else{var h;if(a<22250738585072014e-324)h=a/5e-324,n(h>>>0,s,l+i),n((d<<31|h/4294967296)>>>0,s,l+o);else{var g=Math.floor(Math.log(a)/Math.LN2);g===1024&&(g=1023),h=a*Math.pow(2,-g),n(h*4503599627370496>>>0,s,l+i),n((d<<31|g+1023<<20|h*1048576&1048575)>>>0,s,l+o)}}}r.writeDoubleLE=e.bind(null,n_,0,4),r.writeDoubleBE=e.bind(null,r_,4,0);function t(n,i,o,a,s){var l=n(a,s+i),d=n(a,s+o),h=(d>>31)*2+1,g=d>>>20&2047,b=4294967296*(d&1048575)+l;return g===2047?b?NaN:h*(1/0):g===0?h*5e-324*b:h*Math.pow(2,g-1075)*(b+4503599627370496)}r.readDoubleLE=t.bind(null,i_,0,4),r.readDoubleBE=t.bind(null,o_,4,0)}(),r}function n_(r,e,t){e[t]=r&255,e[t+1]=r>>>8&255,e[t+2]=r>>>16&255,e[t+3]=r>>>24}function r_(r,e,t){e[t]=r>>>24,e[t+1]=r>>>16&255,e[t+2]=r>>>8&255,e[t+3]=r&255}function i_(r,e){return(r[e]|r[e+1]<<8|r[e+2]<<16|r[e+3]<<24)>>>0}function o_(r,e){return(r[e]<<24|r[e+1]<<16|r[e+2]<<8|r[e+3])>>>0}});var u_=ve((exports,module)=>{"use strict";module.exports=inquire;function inquire(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch(r){}return null}});var c_=ve(l_=>{"use strict";var Rl=l_;Rl.length=function(e){for(var t=0,n=0,i=0;i<e.length;++i)n=e.charCodeAt(i),n<128?t+=1:n<2048?t+=2:(n&64512)===55296&&(e.charCodeAt(i+1)&64512)===56320?(++i,t+=4):t+=3;return t};Rl.read=function(e,t,n){var i=n-t;if(i<1)return"";for(var o=null,a=[],s=0,l;t<n;)l=e[t++],l<128?a[s++]=l:l>191&&l<224?a[s++]=(l&31)<<6|e[t++]&63:l>239&&l<365?(l=((l&7)<<18|(e[t++]&63)<<12|(e[t++]&63)<<6|e[t++]&63)-65536,a[s++]=55296+(l>>10),a[s++]=56320+(l&1023)):a[s++]=(l&15)<<12|(e[t++]&63)<<6|e[t++]&63,s>8191&&((o||(o=[])).push(String.fromCharCode.apply(String,a)),s=0);return o?(s&&o.push(String.fromCharCode.apply(String,a.slice(0,s))),o.join("")):String.fromCharCode.apply(String,a.slice(0,s))};Rl.write=function(e,t,n){for(var i=n,o,a,s=0;s<e.length;++s)o=e.charCodeAt(s),o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&((a=e.charCodeAt(s+1))&64512)===56320?(o=65536+((o&1023)<<10)+(a&1023),++s,t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128);return n-i}});var f_=ve((iV,d_)=>{"use strict";d_.exports=Sj;function Sj(r,e,t){var n=t||8192,i=n>>>1,o=null,a=n;return function(l){if(l<1||l>i)return r(l);a+l>n&&(o=r(n),a=0);var d=e.call(o,a,a+=l);return a&7&&(a=(a|7)+1),d}}});var h_=ve((oV,p_)=>{"use strict";p_.exports=At;var io=kr();function At(r,e){this.lo=r>>>0,this.hi=e>>>0}var Zr=At.zero=new At(0,0);Zr.toNumber=function(){return 0};Zr.zzEncode=Zr.zzDecode=function(){return this};Zr.length=function(){return 1};var $j=At.zeroHash="\0\0\0\0\0\0\0\0";At.fromNumber=function(e){if(e===0)return Zr;var t=e<0;t&&(e=-e);var n=e>>>0,i=(e-n)/4294967296>>>0;return t&&(i=~i>>>0,n=~n>>>0,++n>4294967295&&(n=0,++i>4294967295&&(i=0))),new At(n,i)};At.from=function(e){if(typeof e=="number")return At.fromNumber(e);if(io.isString(e))if(io.Long)e=io.Long.fromString(e);else return At.fromNumber(parseInt(e,10));return e.low||e.high?new At(e.low>>>0,e.high>>>0):Zr};At.prototype.toNumber=function(e){if(!e&&this.hi>>>31){var t=~this.lo+1>>>0,n=~this.hi>>>0;return t||(n=n+1>>>0),-(t+n*4294967296)}return this.lo+this.hi*4294967296};At.prototype.toLong=function(e){return io.Long?new io.Long(this.lo|0,this.hi|0,!!e):{low:this.lo|0,high:this.hi|0,unsigned:!!e}};var Dr=String.prototype.charCodeAt;At.fromHash=function(e){return e===$j?Zr:new At((Dr.call(e,0)|Dr.call(e,1)<<8|Dr.call(e,2)<<16|Dr.call(e,3)<<24)>>>0,(Dr.call(e,4)|Dr.call(e,5)<<8|Dr.call(e,6)<<16|Dr.call(e,7)<<24)>>>0)};At.prototype.toHash=function(){return String.fromCharCode(this.lo&255,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,this.hi&255,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)};At.prototype.zzEncode=function(){var e=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^e)>>>0,this.lo=(this.lo<<1^e)>>>0,this};At.prototype.zzDecode=function(){var e=-(this.lo&1);return this.lo=((this.lo>>>1|this.hi<<31)^e)>>>0,this.hi=(this.hi>>>1^e)>>>0,this};At.prototype.length=function(){var e=this.lo,t=(this.lo>>>28|this.hi<<4)>>>0,n=this.hi>>>24;return n===0?t===0?e<16384?e<128?1:2:e<2097152?3:4:t<16384?t<128?5:6:t<2097152?7:8:n<128?9:10}});var kr=ve(Ml=>{"use strict";var Ie=Ml;Ie.asPromise=Kb();Ie.base64=Yb();Ie.EventEmitter=e_();Ie.float=s_();Ie.inquire=u_();Ie.utf8=c_();Ie.pool=f_();Ie.LongBits=h_();Ie.isNode=!!(typeof global<"u"&&global&&global.process&&global.process.versions&&global.process.versions.node);Ie.global=Ie.isNode&&global||typeof window<"u"&&window||typeof self<"u"&&self||Ml;Ie.emptyArray=Object.freeze?Object.freeze([]):[];Ie.emptyObject=Object.freeze?Object.freeze({}):{};Ie.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};Ie.isString=function(e){return typeof e=="string"||e instanceof String};Ie.isObject=function(e){return e&&typeof e=="object"};Ie.isset=Ie.isSet=function(e,t){var n=e[t];return n!=null&&e.hasOwnProperty(t)?typeof n!="object"||(Array.isArray(n)?n.length:Object.keys(n).length)>0:!1};Ie.Buffer=function(){try{var r=Ie.inquire("buffer").Buffer;return r.prototype.utf8Write?r:null}catch{return null}}();Ie._Buffer_from=null;Ie._Buffer_allocUnsafe=null;Ie.newBuffer=function(e){return typeof e=="number"?Ie.Buffer?Ie._Buffer_allocUnsafe(e):new Ie.Array(e):Ie.Buffer?Ie._Buffer_from(e):typeof Uint8Array>"u"?e:new Uint8Array(e)};Ie.Array=typeof Uint8Array<"u"?Uint8Array:Array;Ie.Long=Ie.global.dcodeIO&&Ie.global.dcodeIO.Long||Ie.global.Long||Ie.inquire("long");Ie.key2Re=/^true|false|0|1$/;Ie.key32Re=/^-?(?:0|[1-9][0-9]*)$/;Ie.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;Ie.longToHash=function(e){return e?Ie.LongBits.from(e).toHash():Ie.LongBits.zeroHash};Ie.longFromHash=function(e,t){var n=Ie.LongBits.fromHash(e);return Ie.Long?Ie.Long.fromBits(n.lo,n.hi,t):n.toNumber(!!t)};function m_(r,e,t){for(var n=Object.keys(e),i=0;i<n.length;++i)(r[n[i]]===void 0||!t)&&(r[n[i]]=e[n[i]]);return r}Ie.merge=m_;Ie.lcFirst=function(e){return e.charAt(0).toLowerCase()+e.substring(1)};function g_(r){function e(t,n){if(!(this instanceof e))return new e(t,n);Object.defineProperty(this,"message",{get:function(){return t}}),Error.captureStackTrace?Error.captureStackTrace(this,e):Object.defineProperty(this,"stack",{value:new Error().stack||""}),n&&m_(this,n)}return e.prototype=Object.create(Error.prototype,{constructor:{value:e,writable:!0,enumerable:!1,configurable:!0},name:{get:function(){return r},set:void 0,enumerable:!1,configurable:!0},toString:{value:function(){return this.name+": "+this.message},writable:!0,enumerable:!1,configurable:!0}}),e}Ie.newError=g_;Ie.ProtocolError=g_("ProtocolError");Ie.oneOfGetter=function(e){for(var t={},n=0;n<e.length;++n)t[e[n]]=1;return function(){for(var i=Object.keys(this),o=i.length-1;o>-1;--o)if(t[i[o]]===1&&this[i[o]]!==void 0&&this[i[o]]!==null)return i[o]}};Ie.oneOfSetter=function(e){return function(t){for(var n=0;n<e.length;++n)e[n]!==t&&delete this[e[n]]}};Ie.toJSONOptions={longs:String,enums:String,bytes:String,json:!0};Ie._configure=function(){var r=Ie.Buffer;if(!r){Ie._Buffer_from=Ie._Buffer_allocUnsafe=null;return}Ie._Buffer_from=r.from!==Uint8Array.from&&r.from||function(t,n){return new r(t,n)},Ie._Buffer_allocUnsafe=r.allocUnsafe||function(t){return new r(t)}}});var Wl=ve((sV,v_)=>{"use strict";v_.exports=Ze;var rn=kr(),zl,ha=rn.LongBits,y_=rn.base64,b_=rn.utf8;function oo(r,e,t){this.fn=r,this.len=e,this.next=void 0,this.val=t}function Fl(){}function Aj(r){this.head=r.head,this.tail=r.tail,this.len=r.len,this.next=r.states}function Ze(){this.len=0,this.head=new oo(Fl,0,0),this.tail=this.head,this.states=null}var __=function(){return rn.Buffer?function(){return(Ze.create=function(){return new zl})()}:function(){return new Ze}};Ze.create=__();Ze.alloc=function(e){return new rn.Array(e)};rn.Array!==Array&&(Ze.alloc=rn.pool(Ze.alloc,rn.Array.prototype.subarray));Ze.prototype._push=function(e,t,n){return this.tail=this.tail.next=new oo(e,t,n),this.len+=t,this};function Vl(r,e,t){e[t]=r&255}function Cj(r,e,t){for(;r>127;)e[t++]=r&127|128,r>>>=7;e[t]=r}function Ul(r,e){this.len=r,this.next=void 0,this.val=e}Ul.prototype=Object.create(oo.prototype);Ul.prototype.fn=Cj;Ze.prototype.uint32=function(e){return this.len+=(this.tail=this.tail.next=new Ul((e=e>>>0)<128?1:e<16384?2:e<2097152?3:e<268435456?4:5,e)).len,this};Ze.prototype.int32=function(e){return e<0?this._push(Gl,10,ha.fromNumber(e)):this.uint32(e)};Ze.prototype.sint32=function(e){return this.uint32((e<<1^e>>31)>>>0)};function Gl(r,e,t){for(;r.hi;)e[t++]=r.lo&127|128,r.lo=(r.lo>>>7|r.hi<<25)>>>0,r.hi>>>=7;for(;r.lo>127;)e[t++]=r.lo&127|128,r.lo=r.lo>>>7;e[t++]=r.lo}Ze.prototype.uint64=function(e){var t=ha.from(e);return this._push(Gl,t.length(),t)};Ze.prototype.int64=Ze.prototype.uint64;Ze.prototype.sint64=function(e){var t=ha.from(e).zzEncode();return this._push(Gl,t.length(),t)};Ze.prototype.bool=function(e){return this._push(Vl,1,e?1:0)};function Bl(r,e,t){e[t]=r&255,e[t+1]=r>>>8&255,e[t+2]=r>>>16&255,e[t+3]=r>>>24}Ze.prototype.fixed32=function(e){return this._push(Bl,4,e>>>0)};Ze.prototype.sfixed32=Ze.prototype.fixed32;Ze.prototype.fixed64=function(e){var t=ha.from(e);return this._push(Bl,4,t.lo)._push(Bl,4,t.hi)};Ze.prototype.sfixed64=Ze.prototype.fixed64;Ze.prototype.float=function(e){return this._push(rn.float.writeFloatLE,4,e)};Ze.prototype.double=function(e){return this._push(rn.float.writeDoubleLE,8,e)};var Oj=rn.Array.prototype.set?function(e,t,n){t.set(e,n)}:function(e,t,n){for(var i=0;i<e.length;++i)t[n+i]=e[i]};Ze.prototype.bytes=function(e){var t=e.length>>>0;if(!t)return this._push(Vl,1,0);if(rn.isString(e)){var n=Ze.alloc(t=y_.length(e));y_.decode(e,n,0),e=n}return this.uint32(t)._push(Oj,t,e)};Ze.prototype.string=function(e){var t=b_.length(e);return t?this.uint32(t)._push(b_.write,t,e):this._push(Vl,1,0)};Ze.prototype.fork=function(){return this.states=new Aj(this),this.head=this.tail=new oo(Fl,0,0),this.len=0,this};Ze.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new oo(Fl,0,0),this.len=0),this};Ze.prototype.ldelim=function(){var e=this.head,t=this.tail,n=this.len;return this.reset().uint32(n),n&&(this.tail.next=e.next,this.tail=t,this.len+=n),this};Ze.prototype.finish=function(){for(var e=this.head.next,t=this.constructor.alloc(this.len),n=0;e;)e.fn(e.val,t,n),n+=e.len,e=e.next;return t};Ze._configure=function(r){zl=r,Ze.create=__(),zl._configure()}});var x_=ve((uV,T_)=>{"use strict";T_.exports=ir;var w_=Wl();(ir.prototype=Object.create(w_.prototype)).constructor=ir;var jr=kr();function ir(){w_.call(this)}ir._configure=function(){ir.alloc=jr._Buffer_allocUnsafe,ir.writeBytesBuffer=jr.Buffer&&jr.Buffer.prototype instanceof Uint8Array&&jr.Buffer.prototype.set.name==="set"?function(e,t,n){t.set(e,n)}:function(e,t,n){if(e.copy)e.copy(t,n,0,e.length);else for(var i=0;i<e.length;)t[n++]=e[i++]}};ir.prototype.bytes=function(e){jr.isString(e)&&(e=jr._Buffer_from(e,"base64"));var t=e.length>>>0;return this.uint32(t),t&&this._push(ir.writeBytesBuffer,t,e),this};function Pj(r,e,t){r.length<40?jr.utf8.write(r,e,t):e.utf8Write?e.utf8Write(r,t):e.write(r,t)}ir.prototype.string=function(e){var t=jr.Buffer.byteLength(e);return this.uint32(t),t&&this._push(Pj,t,e),this};ir._configure()});var Kl=ve((lV,C_)=>{"use strict";C_.exports=bt;var hn=kr(),ql,$_=hn.LongBits,Ej=hn.utf8;function mn(r,e){return RangeError("index out of range: "+r.pos+" + "+(e||1)+" > "+r.len)}function bt(r){this.buf=r,this.pos=0,this.len=r.length}var I_=typeof Uint8Array<"u"?function(e){if(e instanceof Uint8Array||Array.isArray(e))return new bt(e);throw Error("illegal buffer")}:function(e){if(Array.isArray(e))return new bt(e);throw Error("illegal buffer")},A_=function(){return hn.Buffer?function(t){return(bt.create=function(i){return hn.Buffer.isBuffer(i)?new ql(i):I_(i)})(t)}:I_};bt.create=A_();bt.prototype._slice=hn.Array.prototype.subarray||hn.Array.prototype.slice;bt.prototype.uint32=function(){var e=4294967295;return function(){if(e=(this.buf[this.pos]&127)>>>0,this.buf[this.pos++]<128||(e=(e|(this.buf[this.pos]&127)<<7)>>>0,this.buf[this.pos++]<128)||(e=(e|(this.buf[this.pos]&127)<<14)>>>0,this.buf[this.pos++]<128)||(e=(e|(this.buf[this.pos]&127)<<21)>>>0,this.buf[this.pos++]<128)||(e=(e|(this.buf[this.pos]&15)<<28)>>>0,this.buf[this.pos++]<128))return e;if((this.pos+=5)>this.len)throw this.pos=this.len,mn(this,10);return e}}();bt.prototype.int32=function(){return this.uint32()|0};bt.prototype.sint32=function(){var e=this.uint32();return e>>>1^-(e&1)|0};function Hl(){var r=new $_(0,0),e=0;if(this.len-this.pos>4){for(;e<4;++e)if(r.lo=(r.lo|(this.buf[this.pos]&127)<<e*7)>>>0,this.buf[this.pos++]<128)return r;if(r.lo=(r.lo|(this.buf[this.pos]&127)<<28)>>>0,r.hi=(r.hi|(this.buf[this.pos]&127)>>4)>>>0,this.buf[this.pos++]<128)return r;e=0}else{for(;e<3;++e){if(this.pos>=this.len)throw mn(this);if(r.lo=(r.lo|(this.buf[this.pos]&127)<<e*7)>>>0,this.buf[this.pos++]<128)return r}return r.lo=(r.lo|(this.buf[this.pos++]&127)<<e*7)>>>0,r}if(this.len-this.pos>4){for(;e<5;++e)if(r.hi=(r.hi|(this.buf[this.pos]&127)<<e*7+3)>>>0,this.buf[this.pos++]<128)return r}else for(;e<5;++e){if(this.pos>=this.len)throw mn(this);if(r.hi=(r.hi|(this.buf[this.pos]&127)<<e*7+3)>>>0,this.buf[this.pos++]<128)return r}throw Error("invalid varint encoding")}bt.prototype.bool=function(){return this.uint32()!==0};function ma(r,e){return(r[e-4]|r[e-3]<<8|r[e-2]<<16|r[e-1]<<24)>>>0}bt.prototype.fixed32=function(){if(this.pos+4>this.len)throw mn(this,4);return ma(this.buf,this.pos+=4)};bt.prototype.sfixed32=function(){if(this.pos+4>this.len)throw mn(this,4);return ma(this.buf,this.pos+=4)|0};function S_(){if(this.pos+8>this.len)throw mn(this,8);return new $_(ma(this.buf,this.pos+=4),ma(this.buf,this.pos+=4))}bt.prototype.float=function(){if(this.pos+4>this.len)throw mn(this,4);var e=hn.float.readFloatLE(this.buf,this.pos);return this.pos+=4,e};bt.prototype.double=function(){if(this.pos+8>this.len)throw mn(this,4);var e=hn.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,e};bt.prototype.bytes=function(){var e=this.uint32(),t=this.pos,n=this.pos+e;if(n>this.len)throw mn(this,e);if(this.pos+=e,Array.isArray(this.buf))return this.buf.slice(t,n);if(t===n){var i=hn.Buffer;return i?i.alloc(0):new this.buf.constructor(0)}return this._slice.call(this.buf,t,n)};bt.prototype.string=function(){var e=this.bytes();return Ej.read(e,0,e.length)};bt.prototype.skip=function(e){if(typeof e=="number"){if(this.pos+e>this.len)throw mn(this,e);this.pos+=e}else do if(this.pos>=this.len)throw mn(this);while(this.buf[this.pos++]&128);return this};bt.prototype.skipType=function(r){switch(r){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;(r=this.uint32()&7)!==4;)this.skipType(r);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+r+" at offset "+this.pos)}return this};bt._configure=function(r){ql=r,bt.create=A_(),ql._configure();var e=hn.Long?"toLong":"toNumber";hn.merge(bt.prototype,{int64:function(){return Hl.call(this)[e](!1)},uint64:function(){return Hl.call(this)[e](!0)},sint64:function(){return Hl.call(this).zzDecode()[e](!1)},fixed64:function(){return S_.call(this)[e](!0)},sfixed64:function(){return S_.call(this)[e](!1)}})}});var D_=ve((cV,E_)=>{"use strict";E_.exports=Jr;var P_=Kl();(Jr.prototype=Object.create(P_.prototype)).constructor=Jr;var O_=kr();function Jr(r){P_.call(this,r)}Jr._configure=function(){O_.Buffer&&(Jr.prototype._slice=O_.Buffer.prototype.slice)};Jr.prototype.string=function(){var e=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+e,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+e,this.len))};Jr._configure()});var j_=ve((dV,k_)=>{"use strict";k_.exports=ao;var Xl=kr();(ao.prototype=Object.create(Xl.EventEmitter.prototype)).constructor=ao;function ao(r,e,t){if(typeof r!="function")throw TypeError("rpcImpl must be a function");Xl.EventEmitter.call(this),this.rpcImpl=r,this.requestDelimited=!!e,this.responseDelimited=!!t}ao.prototype.rpcCall=function r(e,t,n,i,o){if(!i)throw TypeError("request must be specified");var a=this;if(!o)return Xl.asPromise(r,a,e,t,n,i);if(!a.rpcImpl){setTimeout(function(){o(Error("already ended"))},0);return}try{return a.rpcImpl(e,t[a.requestDelimited?"encodeDelimited":"encode"](i).finish(),function(l,d){if(l)return a.emit("error",l,e),o(l);if(d===null){a.end(!0);return}if(!(d instanceof n))try{d=n[a.responseDelimited?"decodeDelimited":"decode"](d)}catch(h){return a.emit("error",h,e),o(h)}return a.emit("data",d,e),o(null,d)})}catch(s){a.emit("error",s,e),setTimeout(function(){o(s)},0);return}};ao.prototype.end=function(e){return this.rpcImpl&&(e||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this}});var N_=ve(L_=>{"use strict";var Dj=L_;Dj.Service=j_()});var M_=ve((pV,R_)=>{"use strict";R_.exports={}});var F_=ve(B_=>{"use strict";var Vt=B_;Vt.build="minimal";Vt.Writer=Wl();Vt.BufferWriter=x_();Vt.Reader=Kl();Vt.BufferReader=D_();Vt.util=kr();Vt.rpc=N_();Vt.roots=M_();Vt.configure=z_;function z_(){Vt.util._configure(),Vt.Writer._configure(Vt.BufferWriter),Vt.Reader._configure(Vt.BufferReader)}z_()});var U_=ve((mV,V_)=>{"use strict";V_.exports=F_()});var Ti=ve((gV,G_)=>{"use strict";var ut=U_(),de=ut.Reader,_t=ut.Writer,U=ut.util,L=ut.roots.default||(ut.roots.default={});L.onnx=function(){var r={};return r.Version=function(){var e={},t=Object.create(e);return t[e[0]="_START_VERSION"]=0,t[e[1]="IR_VERSION_2017_10_10"]=1,t[e[2]="IR_VERSION_2017_10_30"]=2,t[e[3]="IR_VERSION_2017_11_3"]=3,t[e[4]="IR_VERSION_2019_1_22"]=4,t[e[5]="IR_VERSION_2019_3_18"]=5,t[e[6]="IR_VERSION_2019_9_19"]=6,t[e[7]="IR_VERSION_2020_5_8"]=7,t[e[8]="IR_VERSION_2021_7_30"]=8,t[e[9]="IR_VERSION"]=9,t}(),r.AttributeProto=function(){function e(t){if(this.floats=[],this.ints=[],this.strings=[],this.tensors=[],this.graphs=[],this.sparseTensors=[],this.typeProtos=[],t)for(var n=Object.keys(t),i=0;i<n.length;++i)t[n[i]]!=null&&(this[n[i]]=t[n[i]])}return e.prototype.name="",e.prototype.refAttrName="",e.prototype.docString="",e.prototype.type=0,e.prototype.f=0,e.prototype.i=U.Long?U.Long.fromBits(0,0,!1):0,e.prototype.s=U.newBuffer([]),e.prototype.t=null,e.prototype.g=null,e.prototype.sparseTensor=null,e.prototype.tp=null,e.prototype.floats=U.emptyArray,e.prototype.ints=U.emptyArray,e.prototype.strings=U.emptyArray,e.prototype.tensors=U.emptyArray,e.prototype.graphs=U.emptyArray,e.prototype.sparseTensors=U.emptyArray,e.prototype.typeProtos=U.emptyArray,e.create=function(n){return new e(n)},e.encode=function(n,i){if(i||(i=_t.create()),n.name!=null&&Object.hasOwnProperty.call(n,"name")&&i.uint32(10).string(n.name),n.f!=null&&Object.hasOwnProperty.call(n,"f")&&i.uint32(21).float(n.f),n.i!=null&&Object.hasOwnProperty.call(n,"i")&&i.uint32(24).int64(n.i),n.s!=null&&Object.hasOwnProperty.call(n,"s")&&i.uint32(34).bytes(n.s),n.t!=null&&Object.hasOwnProperty.call(n,"t")&&L.onnx.TensorProto.encode(n.t,i.uint32(42).fork()).ldelim(),n.g!=null&&Object.hasOwnProperty.call(n,"g")&&L.onnx.GraphProto.encode(n.g,i.uint32(50).fork()).ldelim(),n.floats!=null&&n.floats.length){i.uint32(58).fork();for(var o=0;o<n.floats.length;++o)i.float(n.floats[o]);i.ldelim()}if(n.ints!=null&&n.ints.length){i.uint32(66).fork();for(var o=0;o<n.ints.length;++o)i.int64(n.ints[o]);i.ldelim()}if(n.strings!=null&&n.strings.length)for(var o=0;o<n.strings.length;++o)i.uint32(74).bytes(n.strings[o]);if(n.tensors!=null&&n.tensors.length)for(var o=0;o<n.tensors.length;++o)L.onnx.TensorProto.encode(n.tensors[o],i.uint32(82).fork()).ldelim();if(n.graphs!=null&&n.graphs.length)for(var o=0;o<n.graphs.length;++o)L.onnx.GraphProto.encode(n.graphs[o],i.uint32(90).fork()).ldelim();if(n.docString!=null&&Object.hasOwnProperty.call(n,"docString")&&i.uint32(106).string(n.docString),n.tp!=null&&Object.hasOwnProperty.call(n,"tp")&&L.onnx.TypeProto.encode(n.tp,i.uint32(114).fork()).ldelim(),n.typeProtos!=null&&n.typeProtos.length)for(var o=0;o<n.typeProtos.length;++o)L.onnx.TypeProto.encode(n.typeProtos[o],i.uint32(122).fork()).ldelim();if(n.type!=null&&Object.hasOwnProperty.call(n,"type")&&i.uint32(160).int32(n.type),n.refAttrName!=null&&Object.hasOwnProperty.call(n,"refAttrName")&&i.uint32(170).string(n.refAttrName),n.sparseTensor!=null&&Object.hasOwnProperty.call(n,"sparseTensor")&&L.onnx.SparseTensorProto.encode(n.sparseTensor,i.uint32(178).fork()).ldelim(),n.sparseTensors!=null&&n.sparseTensors.length)for(var o=0;o<n.sparseTensors.length;++o)L.onnx.SparseTensorProto.encode(n.sparseTensors[o],i.uint32(186).fork()).ldelim();return i},e.encodeDelimited=function(n,i){return this.encode(n,i).ldelim()},e.decode=function(n,i){n instanceof de||(n=de.create(n));for(var o=i===void 0?n.len:n.pos+i,a=new L.onnx.AttributeProto;n.pos<o;){var s=n.uint32();switch(s>>>3){case 1:{a.name=n.string();break}case 21:{a.refAttrName=n.string();break}case 13:{a.docString=n.string();break}case 20:{a.type=n.int32();break}case 2:{a.f=n.float();break}case 3:{a.i=n.int64();break}case 4:{a.s=n.bytes();break}case 5:{a.t=L.onnx.TensorProto.decode(n,n.uint32());break}case 6:{a.g=L.onnx.GraphProto.decode(n,n.uint32());break}case 22:{a.sparseTensor=L.onnx.SparseTensorProto.decode(n,n.uint32());break}case 14:{a.tp=L.onnx.TypeProto.decode(n,n.uint32());break}case 7:{if(a.floats&&a.floats.length||(a.floats=[]),(s&7)===2)for(var l=n.uint32()+n.pos;n.pos<l;)a.floats.push(n.float());else a.floats.push(n.float());break}case 8:{if(a.ints&&a.ints.length||(a.ints=[]),(s&7)===2)for(var l=n.uint32()+n.pos;n.pos<l;)a.ints.push(n.int64());else a.ints.push(n.int64());break}case 9:{a.strings&&a.strings.length||(a.strings=[]),a.strings.push(n.bytes());break}case 10:{a.tensors&&a.tensors.length||(a.tensors=[]),a.tensors.push(L.onnx.TensorProto.decode(n,n.uint32()));break}case 11:{a.graphs&&a.graphs.length||(a.graphs=[]),a.graphs.push(L.onnx.GraphProto.decode(n,n.uint32()));break}case 23:{a.sparseTensors&&a.sparseTensors.length||(a.sparseTensors=[]),a.sparseTensors.push(L.onnx.SparseTensorProto.decode(n,n.uint32()));break}case 15:{a.typeProtos&&a.typeProtos.length||(a.typeProtos=[]),a.typeProtos.push(L.onnx.TypeProto.decode(n,n.uint32()));break}default:n.skipType(s&7);break}}return a},e.decodeDelimited=function(n){return n instanceof de||(n=new de(n)),this.decode(n,n.uint32())},e.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.name!=null&&n.hasOwnProperty("name")&&!U.isString(n.name))return"name: string expected";if(n.refAttrName!=null&&n.hasOwnProperty("refAttrName")&&!U.isString(n.refAttrName))return"refAttrName: string expected";if(n.docString!=null&&n.hasOwnProperty("docString")&&!U.isString(n.docString))return"docString: string expected";if(n.type!=null&&n.hasOwnProperty("type"))switch(n.type){default:return"type: enum value expected";case 0:case 1:case 2:case 3:case 4:case 5:case 11:case 13:case 6:case 7:case 8:case 9:case 10:case 12:case 14:break}if(n.f!=null&&n.hasOwnProperty("f")&&typeof n.f!="number")return"f: number expected";if(n.i!=null&&n.hasOwnProperty("i")&&!U.isInteger(n.i)&&!(n.i&&U.isInteger(n.i.low)&&U.isInteger(n.i.high)))return"i: integer|Long expected";if(n.s!=null&&n.hasOwnProperty("s")&&!(n.s&&typeof n.s.length=="number"||U.isString(n.s)))return"s: buffer expected";if(n.t!=null&&n.hasOwnProperty("t")){var i=L.onnx.TensorProto.verify(n.t);if(i)return"t."+i}if(n.g!=null&&n.hasOwnProperty("g")){var i=L.onnx.GraphProto.verify(n.g);if(i)return"g."+i}if(n.sparseTensor!=null&&n.hasOwnProperty("sparseTensor")){var i=L.onnx.SparseTensorProto.verify(n.sparseTensor);if(i)return"sparseTensor."+i}if(n.tp!=null&&n.hasOwnProperty("tp")){var i=L.onnx.TypeProto.verify(n.tp);if(i)return"tp."+i}if(n.floats!=null&&n.hasOwnProperty("floats")){if(!Array.isArray(n.floats))return"floats: array expected";for(var o=0;o<n.floats.length;++o)if(typeof n.floats[o]!="number")return"floats: number[] expected"}if(n.ints!=null&&n.hasOwnProperty("ints")){if(!Array.isArray(n.ints))return"ints: array expected";for(var o=0;o<n.ints.length;++o)if(!U.isInteger(n.ints[o])&&!(n.ints[o]&&U.isInteger(n.ints[o].low)&&U.isInteger(n.ints[o].high)))return"ints: integer|Long[] expected"}if(n.strings!=null&&n.hasOwnProperty("strings")){if(!Array.isArray(n.strings))return"strings: array expected";for(var o=0;o<n.strings.length;++o)if(!(n.strings[o]&&typeof n.strings[o].length=="number"||U.isString(n.strings[o])))return"strings: buffer[] expected"}if(n.tensors!=null&&n.hasOwnProperty("tensors")){if(!Array.isArray(n.tensors))return"tensors: array expected";for(var o=0;o<n.tensors.length;++o){var i=L.onnx.TensorProto.verify(n.tensors[o]);if(i)return"tensors."+i}}if(n.graphs!=null&&n.hasOwnProperty("graphs")){if(!Array.isArray(n.graphs))return"graphs: array expected";for(var o=0;o<n.graphs.length;++o){var i=L.onnx.GraphProto.verify(n.graphs[o]);if(i)return"graphs."+i}}if(n.sparseTensors!=null&&n.hasOwnProperty("sparseTensors")){if(!Array.isArray(n.sparseTensors))return"sparseTensors: array expected";for(var o=0;o<n.sparseTensors.length;++o){var i=L.onnx.SparseTensorProto.verify(n.sparseTensors[o]);if(i)return"sparseTensors."+i}}if(n.typeProtos!=null&&n.hasOwnProperty("typeProtos")){if(!Array.isArray(n.typeProtos))return"typeProtos: array expected";for(var o=0;o<n.typeProtos.length;++o){var i=L.onnx.TypeProto.verify(n.typeProtos[o]);if(i)return"typeProtos."+i}}return null},e.fromObject=function(n){if(n instanceof L.onnx.AttributeProto)return n;var i=new L.onnx.AttributeProto;switch(n.name!=null&&(i.name=String(n.name)),n.refAttrName!=null&&(i.refAttrName=String(n.refAttrName)),n.docString!=null&&(i.docString=String(n.docString)),n.type){default:if(typeof n.type=="number"){i.type=n.type;break}break;case"UNDEFINED":case 0:i.type=0;break;case"FLOAT":case 1:i.type=1;break;case"INT":case 2:i.type=2;break;case"STRING":case 3:i.type=3;break;case"TENSOR":case 4:i.type=4;break;case"GRAPH":case 5:i.type=5;break;case"SPARSE_TENSOR":case 11:i.type=11;break;case"TYPE_PROTO":case 13:i.type=13;break;case"FLOATS":case 6:i.type=6;break;case"INTS":case 7:i.type=7;break;case"STRINGS":case 8:i.type=8;break;case"TENSORS":case 9:i.type=9;break;case"GRAPHS":case 10:i.type=10;break;case"SPARSE_TENSORS":case 12:i.type=12;break;case"TYPE_PROTOS":case 14:i.type=14;break}if(n.f!=null&&(i.f=Number(n.f)),n.i!=null&&(U.Long?(i.i=U.Long.fromValue(n.i)).unsigned=!1:typeof n.i=="string"?i.i=parseInt(n.i,10):typeof n.i=="number"?i.i=n.i:typeof n.i=="object"&&(i.i=new U.LongBits(n.i.low>>>0,n.i.high>>>0).toNumber())),n.s!=null&&(typeof n.s=="string"?U.base64.decode(n.s,i.s=U.newBuffer(U.base64.length(n.s)),0):n.s.length>=0&&(i.s=n.s)),n.t!=null){if(typeof n.t!="object")throw TypeError(".onnx.AttributeProto.t: object expected");i.t=L.onnx.TensorProto.fromObject(n.t)}if(n.g!=null){if(typeof n.g!="object")throw TypeError(".onnx.AttributeProto.g: object expected");i.g=L.onnx.GraphProto.fromObject(n.g)}if(n.sparseTensor!=null){if(typeof n.sparseTensor!="object")throw TypeError(".onnx.AttributeProto.sparseTensor: object expected");i.sparseTensor=L.onnx.SparseTensorProto.fromObject(n.sparseTensor)}if(n.tp!=null){if(typeof n.tp!="object")throw TypeError(".onnx.AttributeProto.tp: object expected");i.tp=L.onnx.TypeProto.fromObject(n.tp)}if(n.floats){if(!Array.isArray(n.floats))throw TypeError(".onnx.AttributeProto.floats: array expected");i.floats=[];for(var o=0;o<n.floats.length;++o)i.floats[o]=Number(n.floats[o])}if(n.ints){if(!Array.isArray(n.ints))throw TypeError(".onnx.AttributeProto.ints: array expected");i.ints=[];for(var o=0;o<n.ints.length;++o)U.Long?(i.ints[o]=U.Long.fromValue(n.ints[o])).unsigned=!1:typeof n.ints[o]=="string"?i.ints[o]=parseInt(n.ints[o],10):typeof n.ints[o]=="number"?i.ints[o]=n.ints[o]:typeof n.ints[o]=="object"&&(i.ints[o]=new U.LongBits(n.ints[o].low>>>0,n.ints[o].high>>>0).toNumber())}if(n.strings){if(!Array.isArray(n.strings))throw TypeError(".onnx.AttributeProto.strings: array expected");i.strings=[];for(var o=0;o<n.strings.length;++o)typeof n.strings[o]=="string"?U.base64.decode(n.strings[o],i.strings[o]=U.newBuffer(U.base64.length(n.strings[o])),0):n.strings[o].length>=0&&(i.strings[o]=n.strings[o])}if(n.tensors){if(!Array.isArray(n.tensors))throw TypeError(".onnx.AttributeProto.tensors: array expected");i.tensors=[];for(var o=0;o<n.tensors.length;++o){if(typeof n.tensors[o]!="object")throw TypeError(".onnx.AttributeProto.tensors: object expected");i.tensors[o]=L.onnx.TensorProto.fromObject(n.tensors[o])}}if(n.graphs){if(!Array.isArray(n.graphs))throw TypeError(".onnx.AttributeProto.graphs: array expected");i.graphs=[];for(var o=0;o<n.graphs.length;++o){if(typeof n.graphs[o]!="object")throw TypeError(".onnx.AttributeProto.graphs: object expected");i.graphs[o]=L.onnx.GraphProto.fromObject(n.graphs[o])}}if(n.sparseTensors){if(!Array.isArray(n.sparseTensors))throw TypeError(".onnx.AttributeProto.sparseTensors: array expected");i.sparseTensors=[];for(var o=0;o<n.sparseTensors.length;++o){if(typeof n.sparseTensors[o]!="object")throw TypeError(".onnx.AttributeProto.sparseTensors: object expected");i.sparseTensors[o]=L.onnx.SparseTensorProto.fromObject(n.sparseTensors[o])}}if(n.typeProtos){if(!Array.isArray(n.typeProtos))throw TypeError(".onnx.AttributeProto.typeProtos: array expected");i.typeProtos=[];for(var o=0;o<n.typeProtos.length;++o){if(typeof n.typeProtos[o]!="object")throw TypeError(".onnx.AttributeProto.typeProtos: object expected");i.typeProtos[o]=L.onnx.TypeProto.fromObject(n.typeProtos[o])}}return i},e.toObject=function(n,i){i||(i={});var o={};if((i.arrays||i.defaults)&&(o.floats=[],o.ints=[],o.strings=[],o.tensors=[],o.graphs=[],o.typeProtos=[],o.sparseTensors=[]),i.defaults){if(o.name="",o.f=0,U.Long){var a=new U.Long(0,0,!1);o.i=i.longs===String?a.toString():i.longs===Number?a.toNumber():a}else o.i=i.longs===String?"0":0;i.bytes===String?o.s="":(o.s=[],i.bytes!==Array&&(o.s=U.newBuffer(o.s))),o.t=null,o.g=null,o.docString="",o.tp=null,o.type=i.enums===String?"UNDEFINED":0,o.refAttrName="",o.sparseTensor=null}if(n.name!=null&&n.hasOwnProperty("name")&&(o.name=n.name),n.f!=null&&n.hasOwnProperty("f")&&(o.f=i.json&&!isFinite(n.f)?String(n.f):n.f),n.i!=null&&n.hasOwnProperty("i")&&(typeof n.i=="number"?o.i=i.longs===String?String(n.i):n.i:o.i=i.longs===String?U.Long.prototype.toString.call(n.i):i.longs===Number?new U.LongBits(n.i.low>>>0,n.i.high>>>0).toNumber():n.i),n.s!=null&&n.hasOwnProperty("s")&&(o.s=i.bytes===String?U.base64.encode(n.s,0,n.s.length):i.bytes===Array?Array.prototype.slice.call(n.s):n.s),n.t!=null&&n.hasOwnProperty("t")&&(o.t=L.onnx.TensorProto.toObject(n.t,i)),n.g!=null&&n.hasOwnProperty("g")&&(o.g=L.onnx.GraphProto.toObject(n.g,i)),n.floats&&n.floats.length){o.floats=[];for(var s=0;s<n.floats.length;++s)o.floats[s]=i.json&&!isFinite(n.floats[s])?String(n.floats[s]):n.floats[s]}if(n.ints&&n.ints.length){o.ints=[];for(var s=0;s<n.ints.length;++s)typeof n.ints[s]=="number"?o.ints[s]=i.longs===String?String(n.ints[s]):n.ints[s]:o.ints[s]=i.longs===String?U.Long.prototype.toString.call(n.ints[s]):i.longs===Number?new U.LongBits(n.ints[s].low>>>0,n.ints[s].high>>>0).toNumber():n.ints[s]}if(n.strings&&n.strings.length){o.strings=[];for(var s=0;s<n.strings.length;++s)o.strings[s]=i.bytes===String?U.base64.encode(n.strings[s],0,n.strings[s].length):i.bytes===Array?Array.prototype.slice.call(n.strings[s]):n.strings[s]}if(n.tensors&&n.tensors.length){o.tensors=[];for(var s=0;s<n.tensors.length;++s)o.tensors[s]=L.onnx.TensorProto.toObject(n.tensors[s],i)}if(n.graphs&&n.graphs.length){o.graphs=[];for(var s=0;s<n.graphs.length;++s)o.graphs[s]=L.onnx.GraphProto.toObject(n.graphs[s],i)}if(n.docString!=null&&n.hasOwnProperty("docString")&&(o.docString=n.docString),n.tp!=null&&n.hasOwnProperty("tp")&&(o.tp=L.onnx.TypeProto.toObject(n.tp,i)),n.typeProtos&&n.typeProtos.length){o.typeProtos=[];for(var s=0;s<n.typeProtos.length;++s)o.typeProtos[s]=L.onnx.TypeProto.toObject(n.typeProtos[s],i)}if(n.type!=null&&n.hasOwnProperty("type")&&(o.type=i.enums===String?L.onnx.AttributeProto.AttributeType[n.type]===void 0?n.type:L.onnx.AttributeProto.AttributeType[n.type]:n.type),n.refAttrName!=null&&n.hasOwnProperty("refAttrName")&&(o.refAttrName=n.refAttrName),n.sparseTensor!=null&&n.hasOwnProperty("sparseTensor")&&(o.sparseTensor=L.onnx.SparseTensorProto.toObject(n.sparseTensor,i)),n.sparseTensors&&n.sparseTensors.length){o.sparseTensors=[];for(var s=0;s<n.sparseTensors.length;++s)o.sparseTensors[s]=L.onnx.SparseTensorProto.toObject(n.sparseTensors[s],i)}return o},e.prototype.toJSON=function(){return this.constructor.toObject(this,ut.util.toJSONOptions)},e.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.AttributeProto"},e.AttributeType=function(){var t={},n=Object.create(t);return n[t[0]="UNDEFINED"]=0,n[t[1]="FLOAT"]=1,n[t[2]="INT"]=2,n[t[3]="STRING"]=3,n[t[4]="TENSOR"]=4,n[t[5]="GRAPH"]=5,n[t[11]="SPARSE_TENSOR"]=11,n[t[13]="TYPE_PROTO"]=13,n[t[6]="FLOATS"]=6,n[t[7]="INTS"]=7,n[t[8]="STRINGS"]=8,n[t[9]="TENSORS"]=9,n[t[10]="GRAPHS"]=10,n[t[12]="SPARSE_TENSORS"]=12,n[t[14]="TYPE_PROTOS"]=14,n}(),e}(),r.ValueInfoProto=function(){function e(t){if(t)for(var n=Object.keys(t),i=0;i<n.length;++i)t[n[i]]!=null&&(this[n[i]]=t[n[i]])}return e.prototype.name="",e.prototype.type=null,e.prototype.docString="",e.create=function(n){return new e(n)},e.encode=function(n,i){return i||(i=_t.create()),n.name!=null&&Object.hasOwnProperty.call(n,"name")&&i.uint32(10).string(n.name),n.type!=null&&Object.hasOwnProperty.call(n,"type")&&L.onnx.TypeProto.encode(n.type,i.uint32(18).fork()).ldelim(),n.docString!=null&&Object.hasOwnProperty.call(n,"docString")&&i.uint32(26).string(n.docString),i},e.encodeDelimited=function(n,i){return this.encode(n,i).ldelim()},e.decode=function(n,i){n instanceof de||(n=de.create(n));for(var o=i===void 0?n.len:n.pos+i,a=new L.onnx.ValueInfoProto;n.pos<o;){var s=n.uint32();switch(s>>>3){case 1:{a.name=n.string();break}case 2:{a.type=L.onnx.TypeProto.decode(n,n.uint32());break}case 3:{a.docString=n.string();break}default:n.skipType(s&7);break}}return a},e.decodeDelimited=function(n){return n instanceof de||(n=new de(n)),this.decode(n,n.uint32())},e.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.name!=null&&n.hasOwnProperty("name")&&!U.isString(n.name))return"name: string expected";if(n.type!=null&&n.hasOwnProperty("type")){var i=L.onnx.TypeProto.verify(n.type);if(i)return"type."+i}return n.docString!=null&&n.hasOwnProperty("docString")&&!U.isString(n.docString)?"docString: string expected":null},e.fromObject=function(n){if(n instanceof L.onnx.ValueInfoProto)return n;var i=new L.onnx.ValueInfoProto;if(n.name!=null&&(i.name=String(n.name)),n.type!=null){if(typeof n.type!="object")throw TypeError(".onnx.ValueInfoProto.type: object expected");i.type=L.onnx.TypeProto.fromObject(n.type)}return n.docString!=null&&(i.docString=String(n.docString)),i},e.toObject=function(n,i){i||(i={});var o={};return i.defaults&&(o.name="",o.type=null,o.docString=""),n.name!=null&&n.hasOwnProperty("name")&&(o.name=n.name),n.type!=null&&n.hasOwnProperty("type")&&(o.type=L.onnx.TypeProto.toObject(n.type,i)),n.docString!=null&&n.hasOwnProperty("docString")&&(o.docString=n.docString),o},e.prototype.toJSON=function(){return this.constructor.toObject(this,ut.util.toJSONOptions)},e.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.ValueInfoProto"},e}(),r.NodeProto=function(){function e(t){if(this.input=[],this.output=[],this.attribute=[],t)for(var n=Object.keys(t),i=0;i<n.length;++i)t[n[i]]!=null&&(this[n[i]]=t[n[i]])}return e.prototype.input=U.emptyArray,e.prototype.output=U.emptyArray,e.prototype.name="",e.prototype.opType="",e.prototype.domain="",e.prototype.attribute=U.emptyArray,e.prototype.docString="",e.create=function(n){return new e(n)},e.encode=function(n,i){if(i||(i=_t.create()),n.input!=null&&n.input.length)for(var o=0;o<n.input.length;++o)i.uint32(10).string(n.input[o]);if(n.output!=null&&n.output.length)for(var o=0;o<n.output.length;++o)i.uint32(18).string(n.output[o]);if(n.name!=null&&Object.hasOwnProperty.call(n,"name")&&i.uint32(26).string(n.name),n.opType!=null&&Object.hasOwnProperty.call(n,"opType")&&i.uint32(34).string(n.opType),n.attribute!=null&&n.attribute.length)for(var o=0;o<n.attribute.length;++o)L.onnx.AttributeProto.encode(n.attribute[o],i.uint32(42).fork()).ldelim();return n.docString!=null&&Object.hasOwnProperty.call(n,"docString")&&i.uint32(50).string(n.docString),n.domain!=null&&Object.hasOwnProperty.call(n,"domain")&&i.uint32(58).string(n.domain),i},e.encodeDelimited=function(n,i){return this.encode(n,i).ldelim()},e.decode=function(n,i){n instanceof de||(n=de.create(n));for(var o=i===void 0?n.len:n.pos+i,a=new L.onnx.NodeProto;n.pos<o;){var s=n.uint32();switch(s>>>3){case 1:{a.input&&a.input.length||(a.input=[]),a.input.push(n.string());break}case 2:{a.output&&a.output.length||(a.output=[]),a.output.push(n.string());break}case 3:{a.name=n.string();break}case 4:{a.opType=n.string();break}case 7:{a.domain=n.string();break}case 5:{a.attribute&&a.attribute.length||(a.attribute=[]),a.attribute.push(L.onnx.AttributeProto.decode(n,n.uint32()));break}case 6:{a.docString=n.string();break}default:n.skipType(s&7);break}}return a},e.decodeDelimited=function(n){return n instanceof de||(n=new de(n)),this.decode(n,n.uint32())},e.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.input!=null&&n.hasOwnProperty("input")){if(!Array.isArray(n.input))return"input: array expected";for(var i=0;i<n.input.length;++i)if(!U.isString(n.input[i]))return"input: string[] expected"}if(n.output!=null&&n.hasOwnProperty("output")){if(!Array.isArray(n.output))return"output: array expected";for(var i=0;i<n.output.length;++i)if(!U.isString(n.output[i]))return"output: string[] expected"}if(n.name!=null&&n.hasOwnProperty("name")&&!U.isString(n.name))return"name: string expected";if(n.opType!=null&&n.hasOwnProperty("opType")&&!U.isString(n.opType))return"opType: string expected";if(n.domain!=null&&n.hasOwnProperty("domain")&&!U.isString(n.domain))return"domain: string expected";if(n.attribute!=null&&n.hasOwnProperty("attribute")){if(!Array.isArray(n.attribute))return"attribute: array expected";for(var i=0;i<n.attribute.length;++i){var o=L.onnx.AttributeProto.verify(n.attribute[i]);if(o)return"attribute."+o}}return n.docString!=null&&n.hasOwnProperty("docString")&&!U.isString(n.docString)?"docString: string expected":null},e.fromObject=function(n){if(n instanceof L.onnx.NodeProto)return n;var i=new L.onnx.NodeProto;if(n.input){if(!Array.isArray(n.input))throw TypeError(".onnx.NodeProto.input: array expected");i.input=[];for(var o=0;o<n.input.length;++o)i.input[o]=String(n.input[o])}if(n.output){if(!Array.isArray(n.output))throw TypeError(".onnx.NodeProto.output: array expected");i.output=[];for(var o=0;o<n.output.length;++o)i.output[o]=String(n.output[o])}if(n.name!=null&&(i.name=String(n.name)),n.opType!=null&&(i.opType=String(n.opType)),n.domain!=null&&(i.domain=String(n.domain)),n.attribute){if(!Array.isArray(n.attribute))throw TypeError(".onnx.NodeProto.attribute: array expected");i.attribute=[];for(var o=0;o<n.attribute.length;++o){if(typeof n.attribute[o]!="object")throw TypeError(".onnx.NodeProto.attribute: object expected");i.attribute[o]=L.onnx.AttributeProto.fromObject(n.attribute[o])}}return n.docString!=null&&(i.docString=String(n.docString)),i},e.toObject=function(n,i){i||(i={});var o={};if((i.arrays||i.defaults)&&(o.input=[],o.output=[],o.attribute=[]),i.defaults&&(o.name="",o.opType="",o.docString="",o.domain=""),n.input&&n.input.length){o.input=[];for(var a=0;a<n.input.length;++a)o.input[a]=n.input[a]}if(n.output&&n.output.length){o.output=[];for(var a=0;a<n.output.length;++a)o.output[a]=n.output[a]}if(n.name!=null&&n.hasOwnProperty("name")&&(o.name=n.name),n.opType!=null&&n.hasOwnProperty("opType")&&(o.opType=n.opType),n.attribute&&n.attribute.length){o.attribute=[];for(var a=0;a<n.attribute.length;++a)o.attribute[a]=L.onnx.AttributeProto.toObject(n.attribute[a],i)}return n.docString!=null&&n.hasOwnProperty("docString")&&(o.docString=n.docString),n.domain!=null&&n.hasOwnProperty("domain")&&(o.domain=n.domain),o},e.prototype.toJSON=function(){return this.constructor.toObject(this,ut.util.toJSONOptions)},e.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.NodeProto"},e}(),r.TrainingInfoProto=function(){function e(t){if(this.initializationBinding=[],this.updateBinding=[],t)for(var n=Object.keys(t),i=0;i<n.length;++i)t[n[i]]!=null&&(this[n[i]]=t[n[i]])}return e.prototype.initialization=null,e.prototype.algorithm=null,e.prototype.initializationBinding=U.emptyArray,e.prototype.updateBinding=U.emptyArray,e.create=function(n){return new e(n)},e.encode=function(n,i){if(i||(i=_t.create()),n.initialization!=null&&Object.hasOwnProperty.call(n,"initialization")&&L.onnx.GraphProto.encode(n.initialization,i.uint32(10).fork()).ldelim(),n.algorithm!=null&&Object.hasOwnProperty.call(n,"algorithm")&&L.onnx.GraphProto.encode(n.algorithm,i.uint32(18).fork()).ldelim(),n.initializationBinding!=null&&n.initializationBinding.length)for(var o=0;o<n.initializationBinding.length;++o)L.onnx.StringStringEntryProto.encode(n.initializationBinding[o],i.uint32(26).fork()).ldelim();if(n.updateBinding!=null&&n.updateBinding.length)for(var o=0;o<n.updateBinding.length;++o)L.onnx.StringStringEntryProto.encode(n.updateBinding[o],i.uint32(34).fork()).ldelim();return i},e.encodeDelimited=function(n,i){return this.encode(n,i).ldelim()},e.decode=function(n,i){n instanceof de||(n=de.create(n));for(var o=i===void 0?n.len:n.pos+i,a=new L.onnx.TrainingInfoProto;n.pos<o;){var s=n.uint32();switch(s>>>3){case 1:{a.initialization=L.onnx.GraphProto.decode(n,n.uint32());break}case 2:{a.algorithm=L.onnx.GraphProto.decode(n,n.uint32());break}case 3:{a.initializationBinding&&a.initializationBinding.length||(a.initializationBinding=[]),a.initializationBinding.push(L.onnx.StringStringEntryProto.decode(n,n.uint32()));break}case 4:{a.updateBinding&&a.updateBinding.length||(a.updateBinding=[]),a.updateBinding.push(L.onnx.StringStringEntryProto.decode(n,n.uint32()));break}default:n.skipType(s&7);break}}return a},e.decodeDelimited=function(n){return n instanceof de||(n=new de(n)),this.decode(n,n.uint32())},e.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.initialization!=null&&n.hasOwnProperty("initialization")){var i=L.onnx.GraphProto.verify(n.initialization);if(i)return"initialization."+i}if(n.algorithm!=null&&n.hasOwnProperty("algorithm")){var i=L.onnx.GraphProto.verify(n.algorithm);if(i)return"algorithm."+i}if(n.initializationBinding!=null&&n.hasOwnProperty("initializationBinding")){if(!Array.isArray(n.initializationBinding))return"initializationBinding: array expected";for(var o=0;o<n.initializationBinding.length;++o){var i=L.onnx.StringStringEntryProto.verify(n.initializationBinding[o]);if(i)return"initializationBinding."+i}}if(n.updateBinding!=null&&n.hasOwnProperty("updateBinding")){if(!Array.isArray(n.updateBinding))return"updateBinding: array expected";for(var o=0;o<n.updateBinding.length;++o){var i=L.onnx.StringStringEntryProto.verify(n.updateBinding[o]);if(i)return"updateBinding."+i}}return null},e.fromObject=function(n){if(n instanceof L.onnx.TrainingInfoProto)return n;var i=new L.onnx.TrainingInfoProto;if(n.initialization!=null){if(typeof n.initialization!="object")throw TypeError(".onnx.TrainingInfoProto.initialization: object expected");i.initialization=L.onnx.GraphProto.fromObject(n.initialization)}if(n.algorithm!=null){if(typeof n.algorithm!="object")throw TypeError(".onnx.TrainingInfoProto.algorithm: object expected");i.algorithm=L.onnx.GraphProto.fromObject(n.algorithm)}if(n.initializationBinding){if(!Array.isArray(n.initializationBinding))throw TypeError(".onnx.TrainingInfoProto.initializationBinding: array expected");i.initializationBinding=[];for(var o=0;o<n.initializationBinding.length;++o){if(typeof n.initializationBinding[o]!="object")throw TypeError(".onnx.TrainingInfoProto.initializationBinding: object expected");i.initializationBinding[o]=L.onnx.StringStringEntryProto.fromObject(n.initializationBinding[o])}}if(n.updateBinding){if(!Array.isArray(n.updateBinding))throw TypeError(".onnx.TrainingInfoProto.updateBinding: array expected");i.updateBinding=[];for(var o=0;o<n.updateBinding.length;++o){if(typeof n.updateBinding[o]!="object")throw TypeError(".onnx.TrainingInfoProto.updateBinding: object expected");i.updateBinding[o]=L.onnx.StringStringEntryProto.fromObject(n.updateBinding[o])}}return i},e.toObject=function(n,i){i||(i={});var o={};if((i.arrays||i.defaults)&&(o.initializationBinding=[],o.updateBinding=[]),i.defaults&&(o.initialization=null,o.algorithm=null),n.initialization!=null&&n.hasOwnProperty("initialization")&&(o.initialization=L.onnx.GraphProto.toObject(n.initialization,i)),n.algorithm!=null&&n.hasOwnProperty("algorithm")&&(o.algorithm=L.onnx.GraphProto.toObject(n.algorithm,i)),n.initializationBinding&&n.initializationBinding.length){o.initializationBinding=[];for(var a=0;a<n.initializationBinding.length;++a)o.initializationBinding[a]=L.onnx.StringStringEntryProto.toObject(n.initializationBinding[a],i)}if(n.updateBinding&&n.updateBinding.length){o.updateBinding=[];for(var a=0;a<n.updateBinding.length;++a)o.updateBinding[a]=L.onnx.StringStringEntryProto.toObject(n.updateBinding[a],i)}return o},e.prototype.toJSON=function(){return this.constructor.toObject(this,ut.util.toJSONOptions)},e.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.TrainingInfoProto"},e}(),r.ModelProto=function(){function e(t){if(this.opsetImport=[],this.metadataProps=[],this.trainingInfo=[],this.functions=[],t)for(var n=Object.keys(t),i=0;i<n.length;++i)t[n[i]]!=null&&(this[n[i]]=t[n[i]])}return e.prototype.irVersion=U.Long?U.Long.fromBits(0,0,!1):0,e.prototype.opsetImport=U.emptyArray,e.prototype.producerName="",e.prototype.producerVersion="",e.prototype.domain="",e.prototype.modelVersion=U.Long?U.Long.fromBits(0,0,!1):0,e.prototype.docString="",e.prototype.graph=null,e.prototype.metadataProps=U.emptyArray,e.prototype.trainingInfo=U.emptyArray,e.prototype.functions=U.emptyArray,e.create=function(n){return new e(n)},e.encode=function(n,i){if(i||(i=_t.create()),n.irVersion!=null&&Object.hasOwnProperty.call(n,"irVersion")&&i.uint32(8).int64(n.irVersion),n.producerName!=null&&Object.hasOwnProperty.call(n,"producerName")&&i.uint32(18).string(n.producerName),n.producerVersion!=null&&Object.hasOwnProperty.call(n,"producerVersion")&&i.uint32(26).string(n.producerVersion),n.domain!=null&&Object.hasOwnProperty.call(n,"domain")&&i.uint32(34).string(n.domain),n.modelVersion!=null&&Object.hasOwnProperty.call(n,"modelVersion")&&i.uint32(40).int64(n.modelVersion),n.docString!=null&&Object.hasOwnProperty.call(n,"docString")&&i.uint32(50).string(n.docString),n.graph!=null&&Object.hasOwnProperty.call(n,"graph")&&L.onnx.GraphProto.encode(n.graph,i.uint32(58).fork()).ldelim(),n.opsetImport!=null&&n.opsetImport.length)for(var o=0;o<n.opsetImport.length;++o)L.onnx.OperatorSetIdProto.encode(n.opsetImport[o],i.uint32(66).fork()).ldelim();if(n.metadataProps!=null&&n.metadataProps.length)for(var o=0;o<n.metadataProps.length;++o)L.onnx.StringStringEntryProto.encode(n.metadataProps[o],i.uint32(114).fork()).ldelim();if(n.trainingInfo!=null&&n.trainingInfo.length)for(var o=0;o<n.trainingInfo.length;++o)L.onnx.TrainingInfoProto.encode(n.trainingInfo[o],i.uint32(162).fork()).ldelim();if(n.functions!=null&&n.functions.length)for(var o=0;o<n.functions.length;++o)L.onnx.FunctionProto.encode(n.functions[o],i.uint32(202).fork()).ldelim();return i},e.encodeDelimited=function(n,i){return this.encode(n,i).ldelim()},e.decode=function(n,i){n instanceof de||(n=de.create(n));for(var o=i===void 0?n.len:n.pos+i,a=new L.onnx.ModelProto;n.pos<o;){var s=n.uint32();switch(s>>>3){case 1:{a.irVersion=n.int64();break}case 8:{a.opsetImport&&a.opsetImport.length||(a.opsetImport=[]),a.opsetImport.push(L.onnx.OperatorSetIdProto.decode(n,n.uint32()));break}case 2:{a.producerName=n.string();break}case 3:{a.producerVersion=n.string();break}case 4:{a.domain=n.string();break}case 5:{a.modelVersion=n.int64();break}case 6:{a.docString=n.string();break}case 7:{a.graph=L.onnx.GraphProto.decode(n,n.uint32());break}case 14:{a.metadataProps&&a.metadataProps.length||(a.metadataProps=[]),a.metadataProps.push(L.onnx.StringStringEntryProto.decode(n,n.uint32()));break}case 20:{a.trainingInfo&&a.trainingInfo.length||(a.trainingInfo=[]),a.trainingInfo.push(L.onnx.TrainingInfoProto.decode(n,n.uint32()));break}case 25:{a.functions&&a.functions.length||(a.functions=[]),a.functions.push(L.onnx.FunctionProto.decode(n,n.uint32()));break}default:n.skipType(s&7);break}}return a},e.decodeDelimited=function(n){return n instanceof de||(n=new de(n)),this.decode(n,n.uint32())},e.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.irVersion!=null&&n.hasOwnProperty("irVersion")&&!U.isInteger(n.irVersion)&&!(n.irVersion&&U.isInteger(n.irVersion.low)&&U.isInteger(n.irVersion.high)))return"irVersion: integer|Long expected";if(n.opsetImport!=null&&n.hasOwnProperty("opsetImport")){if(!Array.isArray(n.opsetImport))return"opsetImport: array expected";for(var i=0;i<n.opsetImport.length;++i){var o=L.onnx.OperatorSetIdProto.verify(n.opsetImport[i]);if(o)return"opsetImport."+o}}if(n.producerName!=null&&n.hasOwnProperty("producerName")&&!U.isString(n.producerName))return"producerName: string expected";if(n.producerVersion!=null&&n.hasOwnProperty("producerVersion")&&!U.isString(n.producerVersion))return"producerVersion: string expected";if(n.domain!=null&&n.hasOwnProperty("domain")&&!U.isString(n.domain))return"domain: string expected";if(n.modelVersion!=null&&n.hasOwnProperty("modelVersion")&&!U.isInteger(n.modelVersion)&&!(n.modelVersion&&U.isInteger(n.modelVersion.low)&&U.isInteger(n.modelVersion.high)))return"modelVersion: integer|Long expected";if(n.docString!=null&&n.hasOwnProperty("docString")&&!U.isString(n.docString))return"docString: string expected";if(n.graph!=null&&n.hasOwnProperty("graph")){var o=L.onnx.GraphProto.verify(n.graph);if(o)return"graph."+o}if(n.metadataProps!=null&&n.hasOwnProperty("metadataProps")){if(!Array.isArray(n.metadataProps))return"metadataProps: array expected";for(var i=0;i<n.metadataProps.length;++i){var o=L.onnx.StringStringEntryProto.verify(n.metadataProps[i]);if(o)return"metadataProps."+o}}if(n.trainingInfo!=null&&n.hasOwnProperty("trainingInfo")){if(!Array.isArray(n.trainingInfo))return"trainingInfo: array expected";for(var i=0;i<n.trainingInfo.length;++i){var o=L.onnx.TrainingInfoProto.verify(n.trainingInfo[i]);if(o)return"trainingInfo."+o}}if(n.functions!=null&&n.hasOwnProperty("functions")){if(!Array.isArray(n.functions))return"functions: array expected";for(var i=0;i<n.functions.length;++i){var o=L.onnx.FunctionProto.verify(n.functions[i]);if(o)return"functions."+o}}return null},e.fromObject=function(n){if(n instanceof L.onnx.ModelProto)return n;var i=new L.onnx.ModelProto;if(n.irVersion!=null&&(U.Long?(i.irVersion=U.Long.fromValue(n.irVersion)).unsigned=!1:typeof n.irVersion=="string"?i.irVersion=parseInt(n.irVersion,10):typeof n.irVersion=="number"?i.irVersion=n.irVersion:typeof n.irVersion=="object"&&(i.irVersion=new U.LongBits(n.irVersion.low>>>0,n.irVersion.high>>>0).toNumber())),n.opsetImport){if(!Array.isArray(n.opsetImport))throw TypeError(".onnx.ModelProto.opsetImport: array expected");i.opsetImport=[];for(var o=0;o<n.opsetImport.length;++o){if(typeof n.opsetImport[o]!="object")throw TypeError(".onnx.ModelProto.opsetImport: object expected");i.opsetImport[o]=L.onnx.OperatorSetIdProto.fromObject(n.opsetImport[o])}}if(n.producerName!=null&&(i.producerName=String(n.producerName)),n.producerVersion!=null&&(i.producerVersion=String(n.producerVersion)),n.domain!=null&&(i.domain=String(n.domain)),n.modelVersion!=null&&(U.Long?(i.modelVersion=U.Long.fromValue(n.modelVersion)).unsigned=!1:typeof n.modelVersion=="string"?i.modelVersion=parseInt(n.modelVersion,10):typeof n.modelVersion=="number"?i.modelVersion=n.modelVersion:typeof n.modelVersion=="object"&&(i.modelVersion=new U.LongBits(n.modelVersion.low>>>0,n.modelVersion.high>>>0).toNumber())),n.docString!=null&&(i.docString=String(n.docString)),n.graph!=null){if(typeof n.graph!="object")throw TypeError(".onnx.ModelProto.graph: object expected");i.graph=L.onnx.GraphProto.fromObject(n.graph)}if(n.metadataProps){if(!Array.isArray(n.metadataProps))throw TypeError(".onnx.ModelProto.metadataProps: array expected");i.metadataProps=[];for(var o=0;o<n.metadataProps.length;++o){if(typeof n.metadataProps[o]!="object")throw TypeError(".onnx.ModelProto.metadataProps: object expected");i.metadataProps[o]=L.onnx.StringStringEntryProto.fromObject(n.metadataProps[o])}}if(n.trainingInfo){if(!Array.isArray(n.trainingInfo))throw TypeError(".onnx.ModelProto.trainingInfo: array expected");i.trainingInfo=[];for(var o=0;o<n.trainingInfo.length;++o){if(typeof n.trainingInfo[o]!="object")throw TypeError(".onnx.ModelProto.trainingInfo: object expected");i.trainingInfo[o]=L.onnx.TrainingInfoProto.fromObject(n.trainingInfo[o])}}if(n.functions){if(!Array.isArray(n.functions))throw TypeError(".onnx.ModelProto.functions: array expected");i.functions=[];for(var o=0;o<n.functions.length;++o){if(typeof n.functions[o]!="object")throw TypeError(".onnx.ModelProto.functions: object expected");i.functions[o]=L.onnx.FunctionProto.fromObject(n.functions[o])}}return i},e.toObject=function(n,i){i||(i={});var o={};if((i.arrays||i.defaults)&&(o.opsetImport=[],o.metadataProps=[],o.trainingInfo=[],o.functions=[]),i.defaults){if(U.Long){var a=new U.Long(0,0,!1);o.irVersion=i.longs===String?a.toString():i.longs===Number?a.toNumber():a}else o.irVersion=i.longs===String?"0":0;if(o.producerName="",o.producerVersion="",o.domain="",U.Long){var a=new U.Long(0,0,!1);o.modelVersion=i.longs===String?a.toString():i.longs===Number?a.toNumber():a}else o.modelVersion=i.longs===String?"0":0;o.docString="",o.graph=null}if(n.irVersion!=null&&n.hasOwnProperty("irVersion")&&(typeof n.irVersion=="number"?o.irVersion=i.longs===String?String(n.irVersion):n.irVersion:o.irVersion=i.longs===String?U.Long.prototype.toString.call(n.irVersion):i.longs===Number?new U.LongBits(n.irVersion.low>>>0,n.irVersion.high>>>0).toNumber():n.irVersion),n.producerName!=null&&n.hasOwnProperty("producerName")&&(o.producerName=n.producerName),n.producerVersion!=null&&n.hasOwnProperty("producerVersion")&&(o.producerVersion=n.producerVersion),n.domain!=null&&n.hasOwnProperty("domain")&&(o.domain=n.domain),n.modelVersion!=null&&n.hasOwnProperty("modelVersion")&&(typeof n.modelVersion=="number"?o.modelVersion=i.longs===String?String(n.modelVersion):n.modelVersion:o.modelVersion=i.longs===String?U.Long.prototype.toString.call(n.modelVersion):i.longs===Number?new U.LongBits(n.modelVersion.low>>>0,n.modelVersion.high>>>0).toNumber():n.modelVersion),n.docString!=null&&n.hasOwnProperty("docString")&&(o.docString=n.docString),n.graph!=null&&n.hasOwnProperty("graph")&&(o.graph=L.onnx.GraphProto.toObject(n.graph,i)),n.opsetImport&&n.opsetImport.length){o.opsetImport=[];for(var s=0;s<n.opsetImport.length;++s)o.opsetImport[s]=L.onnx.OperatorSetIdProto.toObject(n.opsetImport[s],i)}if(n.metadataProps&&n.metadataProps.length){o.metadataProps=[];for(var s=0;s<n.metadataProps.length;++s)o.metadataProps[s]=L.onnx.StringStringEntryProto.toObject(n.metadataProps[s],i)}if(n.trainingInfo&&n.trainingInfo.length){o.trainingInfo=[];for(var s=0;s<n.trainingInfo.length;++s)o.trainingInfo[s]=L.onnx.TrainingInfoProto.toObject(n.trainingInfo[s],i)}if(n.functions&&n.functions.length){o.functions=[];for(var s=0;s<n.functions.length;++s)o.functions[s]=L.onnx.FunctionProto.toObject(n.functions[s],i)}return o},e.prototype.toJSON=function(){return this.constructor.toObject(this,ut.util.toJSONOptions)},e.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.ModelProto"},e}(),r.StringStringEntryProto=function(){function e(t){if(t)for(var n=Object.keys(t),i=0;i<n.length;++i)t[n[i]]!=null&&(this[n[i]]=t[n[i]])}return e.prototype.key="",e.prototype.value="",e.create=function(n){return new e(n)},e.encode=function(n,i){return i||(i=_t.create()),n.key!=null&&Object.hasOwnProperty.call(n,"key")&&i.uint32(10).string(n.key),n.value!=null&&Object.hasOwnProperty.call(n,"value")&&i.uint32(18).string(n.value),i},e.encodeDelimited=function(n,i){return this.encode(n,i).ldelim()},e.decode=function(n,i){n instanceof de||(n=de.create(n));for(var o=i===void 0?n.len:n.pos+i,a=new L.onnx.StringStringEntryProto;n.pos<o;){var s=n.uint32();switch(s>>>3){case 1:{a.key=n.string();break}case 2:{a.value=n.string();break}default:n.skipType(s&7);break}}return a},e.decodeDelimited=function(n){return n instanceof de||(n=new de(n)),this.decode(n,n.uint32())},e.verify=function(n){return typeof n!="object"||n===null?"object expected":n.key!=null&&n.hasOwnProperty("key")&&!U.isString(n.key)?"key: string expected":n.value!=null&&n.hasOwnProperty("value")&&!U.isString(n.value)?"value: string expected":null},e.fromObject=function(n){if(n instanceof L.onnx.StringStringEntryProto)return n;var i=new L.onnx.StringStringEntryProto;return n.key!=null&&(i.key=String(n.key)),n.value!=null&&(i.value=String(n.value)),i},e.toObject=function(n,i){i||(i={});var o={};return i.defaults&&(o.key="",o.value=""),n.key!=null&&n.hasOwnProperty("key")&&(o.key=n.key),n.value!=null&&n.hasOwnProperty("value")&&(o.value=n.value),o},e.prototype.toJSON=function(){return this.constructor.toObject(this,ut.util.toJSONOptions)},e.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.StringStringEntryProto"},e}(),r.TensorAnnotation=function(){function e(t){if(this.quantParameterTensorNames=[],t)for(var n=Object.keys(t),i=0;i<n.length;++i)t[n[i]]!=null&&(this[n[i]]=t[n[i]])}return e.prototype.tensorName="",e.prototype.quantParameterTensorNames=U.emptyArray,e.create=function(n){return new e(n)},e.encode=function(n,i){if(i||(i=_t.create()),n.tensorName!=null&&Object.hasOwnProperty.call(n,"tensorName")&&i.uint32(10).string(n.tensorName),n.quantParameterTensorNames!=null&&n.quantParameterTensorNames.length)for(var o=0;o<n.quantParameterTensorNames.length;++o)L.onnx.StringStringEntryProto.encode(n.quantParameterTensorNames[o],i.uint32(18).fork()).ldelim();return i},e.encodeDelimited=function(n,i){return this.encode(n,i).ldelim()},e.decode=function(n,i){n instanceof de||(n=de.create(n));for(var o=i===void 0?n.len:n.pos+i,a=new L.onnx.TensorAnnotation;n.pos<o;){var s=n.uint32();switch(s>>>3){case 1:{a.tensorName=n.string();break}case 2:{a.quantParameterTensorNames&&a.quantParameterTensorNames.length||(a.quantParameterTensorNames=[]),a.quantParameterTensorNames.push(L.onnx.StringStringEntryProto.decode(n,n.uint32()));break}default:n.skipType(s&7);break}}return a},e.decodeDelimited=function(n){return n instanceof de||(n=new de(n)),this.decode(n,n.uint32())},e.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.tensorName!=null&&n.hasOwnProperty("tensorName")&&!U.isString(n.tensorName))return"tensorName: string expected";if(n.quantParameterTensorNames!=null&&n.hasOwnProperty("quantParameterTensorNames")){if(!Array.isArray(n.quantParameterTensorNames))return"quantParameterTensorNames: array expected";for(var i=0;i<n.quantParameterTensorNames.length;++i){var o=L.onnx.StringStringEntryProto.verify(n.quantParameterTensorNames[i]);if(o)return"quantParameterTensorNames."+o}}return null},e.fromObject=function(n){if(n instanceof L.onnx.TensorAnnotation)return n;var i=new L.onnx.TensorAnnotation;if(n.tensorName!=null&&(i.tensorName=String(n.tensorName)),n.quantParameterTensorNames){if(!Array.isArray(n.quantParameterTensorNames))throw TypeError(".onnx.TensorAnnotation.quantParameterTensorNames: array expected");i.quantParameterTensorNames=[];for(var o=0;o<n.quantParameterTensorNames.length;++o){if(typeof n.quantParameterTensorNames[o]!="object")throw TypeError(".onnx.TensorAnnotation.quantParameterTensorNames: object expected");i.quantParameterTensorNames[o]=L.onnx.StringStringEntryProto.fromObject(n.quantParameterTensorNames[o])}}return i},e.toObject=function(n,i){i||(i={});var o={};if((i.arrays||i.defaults)&&(o.quantParameterTensorNames=[]),i.defaults&&(o.tensorName=""),n.tensorName!=null&&n.hasOwnProperty("tensorName")&&(o.tensorName=n.tensorName),n.quantParameterTensorNames&&n.quantParameterTensorNames.length){o.quantParameterTensorNames=[];for(var a=0;a<n.quantParameterTensorNames.length;++a)o.quantParameterTensorNames[a]=L.onnx.StringStringEntryProto.toObject(n.quantParameterTensorNames[a],i)}return o},e.prototype.toJSON=function(){return this.constructor.toObject(this,ut.util.toJSONOptions)},e.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.TensorAnnotation"},e}(),r.GraphProto=function(){function e(t){if(this.node=[],this.initializer=[],this.sparseInitializer=[],this.input=[],this.output=[],this.valueInfo=[],this.quantizationAnnotation=[],t)for(var n=Object.keys(t),i=0;i<n.length;++i)t[n[i]]!=null&&(this[n[i]]=t[n[i]])}return e.prototype.node=U.emptyArray,e.prototype.name="",e.prototype.initializer=U.emptyArray,e.prototype.sparseInitializer=U.emptyArray,e.prototype.docString="",e.prototype.input=U.emptyArray,e.prototype.output=U.emptyArray,e.prototype.valueInfo=U.emptyArray,e.prototype.quantizationAnnotation=U.emptyArray,e.create=function(n){return new e(n)},e.encode=function(n,i){if(i||(i=_t.create()),n.node!=null&&n.node.length)for(var o=0;o<n.node.length;++o)L.onnx.NodeProto.encode(n.node[o],i.uint32(10).fork()).ldelim();if(n.name!=null&&Object.hasOwnProperty.call(n,"name")&&i.uint32(18).string(n.name),n.initializer!=null&&n.initializer.length)for(var o=0;o<n.initializer.length;++o)L.onnx.TensorProto.encode(n.initializer[o],i.uint32(42).fork()).ldelim();if(n.docString!=null&&Object.hasOwnProperty.call(n,"docString")&&i.uint32(82).string(n.docString),n.input!=null&&n.input.length)for(var o=0;o<n.input.length;++o)L.onnx.ValueInfoProto.encode(n.input[o],i.uint32(90).fork()).ldelim();if(n.output!=null&&n.output.length)for(var o=0;o<n.output.length;++o)L.onnx.ValueInfoProto.encode(n.output[o],i.uint32(98).fork()).ldelim();if(n.valueInfo!=null&&n.valueInfo.length)for(var o=0;o<n.valueInfo.length;++o)L.onnx.ValueInfoProto.encode(n.valueInfo[o],i.uint32(106).fork()).ldelim();if(n.quantizationAnnotation!=null&&n.quantizationAnnotation.length)for(var o=0;o<n.quantizationAnnotation.length;++o)L.onnx.TensorAnnotation.encode(n.quantizationAnnotation[o],i.uint32(114).fork()).ldelim();if(n.sparseInitializer!=null&&n.sparseInitializer.length)for(var o=0;o<n.sparseInitializer.length;++o)L.onnx.SparseTensorProto.encode(n.sparseInitializer[o],i.uint32(122).fork()).ldelim();return i},e.encodeDelimited=function(n,i){return this.encode(n,i).ldelim()},e.decode=function(n,i){n instanceof de||(n=de.create(n));for(var o=i===void 0?n.len:n.pos+i,a=new L.onnx.GraphProto;n.pos<o;){var s=n.uint32();switch(s>>>3){case 1:{a.node&&a.node.length||(a.node=[]),a.node.push(L.onnx.NodeProto.decode(n,n.uint32()));break}case 2:{a.name=n.string();break}case 5:{a.initializer&&a.initializer.length||(a.initializer=[]),a.initializer.push(L.onnx.TensorProto.decode(n,n.uint32()));break}case 15:{a.sparseInitializer&&a.sparseInitializer.length||(a.sparseInitializer=[]),a.sparseInitializer.push(L.onnx.SparseTensorProto.decode(n,n.uint32()));break}case 10:{a.docString=n.string();break}case 11:{a.input&&a.input.length||(a.input=[]),a.input.push(L.onnx.ValueInfoProto.decode(n,n.uint32()));break}case 12:{a.output&&a.output.length||(a.output=[]),a.output.push(L.onnx.ValueInfoProto.decode(n,n.uint32()));break}case 13:{a.valueInfo&&a.valueInfo.length||(a.valueInfo=[]),a.valueInfo.push(L.onnx.ValueInfoProto.decode(n,n.uint32()));break}case 14:{a.quantizationAnnotation&&a.quantizationAnnotation.length||(a.quantizationAnnotation=[]),a.quantizationAnnotation.push(L.onnx.TensorAnnotation.decode(n,n.uint32()));break}default:n.skipType(s&7);break}}return a},e.decodeDelimited=function(n){return n instanceof de||(n=new de(n)),this.decode(n,n.uint32())},e.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.node!=null&&n.hasOwnProperty("node")){if(!Array.isArray(n.node))return"node: array expected";for(var i=0;i<n.node.length;++i){var o=L.onnx.NodeProto.verify(n.node[i]);if(o)return"node."+o}}if(n.name!=null&&n.hasOwnProperty("name")&&!U.isString(n.name))return"name: string expected";if(n.initializer!=null&&n.hasOwnProperty("initializer")){if(!Array.isArray(n.initializer))return"initializer: array expected";for(var i=0;i<n.initializer.length;++i){var o=L.onnx.TensorProto.verify(n.initializer[i]);if(o)return"initializer."+o}}if(n.sparseInitializer!=null&&n.hasOwnProperty("sparseInitializer")){if(!Array.isArray(n.sparseInitializer))return"sparseInitializer: array expected";for(var i=0;i<n.sparseInitializer.length;++i){var o=L.onnx.SparseTensorProto.verify(n.sparseInitializer[i]);if(o)return"sparseInitializer."+o}}if(n.docString!=null&&n.hasOwnProperty("docString")&&!U.isString(n.docString))return"docString: string expected";if(n.input!=null&&n.hasOwnProperty("input")){if(!Array.isArray(n.input))return"input: array expected";for(var i=0;i<n.input.length;++i){var o=L.onnx.ValueInfoProto.verify(n.input[i]);if(o)return"input."+o}}if(n.output!=null&&n.hasOwnProperty("output")){if(!Array.isArray(n.output))return"output: array expected";for(var i=0;i<n.output.length;++i){var o=L.onnx.ValueInfoProto.verify(n.output[i]);if(o)return"output."+o}}if(n.valueInfo!=null&&n.hasOwnProperty("valueInfo")){if(!Array.isArray(n.valueInfo))return"valueInfo: array expected";for(var i=0;i<n.valueInfo.length;++i){var o=L.onnx.ValueInfoProto.verify(n.valueInfo[i]);if(o)return"valueInfo."+o}}if(n.quantizationAnnotation!=null&&n.hasOwnProperty("quantizationAnnotation")){if(!Array.isArray(n.quantizationAnnotation))return"quantizationAnnotation: array expected";for(var i=0;i<n.quantizationAnnotation.length;++i){var o=L.onnx.TensorAnnotation.verify(n.quantizationAnnotation[i]);if(o)return"quantizationAnnotation."+o}}return null},e.fromObject=function(n){if(n instanceof L.onnx.GraphProto)return n;var i=new L.onnx.GraphProto;if(n.node){if(!Array.isArray(n.node))throw TypeError(".onnx.GraphProto.node: array expected");i.node=[];for(var o=0;o<n.node.length;++o){if(typeof n.node[o]!="object")throw TypeError(".onnx.GraphProto.node: object expected");i.node[o]=L.onnx.NodeProto.fromObject(n.node[o])}}if(n.name!=null&&(i.name=String(n.name)),n.initializer){if(!Array.isArray(n.initializer))throw TypeError(".onnx.GraphProto.initializer: array expected");i.initializer=[];for(var o=0;o<n.initializer.length;++o){if(typeof n.initializer[o]!="object")throw TypeError(".onnx.GraphProto.initializer: object expected");i.initializer[o]=L.onnx.TensorProto.fromObject(n.initializer[o])}}if(n.sparseInitializer){if(!Array.isArray(n.sparseInitializer))throw TypeError(".onnx.GraphProto.sparseInitializer: array expected");i.sparseInitializer=[];for(var o=0;o<n.sparseInitializer.length;++o){if(typeof n.sparseInitializer[o]!="object")throw TypeError(".onnx.GraphProto.sparseInitializer: object expected");i.sparseInitializer[o]=L.onnx.SparseTensorProto.fromObject(n.sparseInitializer[o])}}if(n.docString!=null&&(i.docString=String(n.docString)),n.input){if(!Array.isArray(n.input))throw TypeError(".onnx.GraphProto.input: array expected");i.input=[];for(var o=0;o<n.input.length;++o){if(typeof n.input[o]!="object")throw TypeError(".onnx.GraphProto.input: object expected");i.input[o]=L.onnx.ValueInfoProto.fromObject(n.input[o])}}if(n.output){if(!Array.isArray(n.output))throw TypeError(".onnx.GraphProto.output: array expected");i.output=[];for(var o=0;o<n.output.length;++o){if(typeof n.output[o]!="object")throw TypeError(".onnx.GraphProto.output: object expected");i.output[o]=L.onnx.ValueInfoProto.fromObject(n.output[o])}}if(n.valueInfo){if(!Array.isArray(n.valueInfo))throw TypeError(".onnx.GraphProto.valueInfo: array expected");i.valueInfo=[];for(var o=0;o<n.valueInfo.length;++o){if(typeof n.valueInfo[o]!="object")throw TypeError(".onnx.GraphProto.valueInfo: object expected");i.valueInfo[o]=L.onnx.ValueInfoProto.fromObject(n.valueInfo[o])}}if(n.quantizationAnnotation){if(!Array.isArray(n.quantizationAnnotation))throw TypeError(".onnx.GraphProto.quantizationAnnotation: array expected");i.quantizationAnnotation=[];for(var o=0;o<n.quantizationAnnotation.length;++o){if(typeof n.quantizationAnnotation[o]!="object")throw TypeError(".onnx.GraphProto.quantizationAnnotation: object expected");i.quantizationAnnotation[o]=L.onnx.TensorAnnotation.fromObject(n.quantizationAnnotation[o])}}return i},e.toObject=function(n,i){i||(i={});var o={};if((i.arrays||i.defaults)&&(o.node=[],o.initializer=[],o.input=[],o.output=[],o.valueInfo=[],o.quantizationAnnotation=[],o.sparseInitializer=[]),i.defaults&&(o.name="",o.docString=""),n.node&&n.node.length){o.node=[];for(var a=0;a<n.node.length;++a)o.node[a]=L.onnx.NodeProto.toObject(n.node[a],i)}if(n.name!=null&&n.hasOwnProperty("name")&&(o.name=n.name),n.initializer&&n.initializer.length){o.initializer=[];for(var a=0;a<n.initializer.length;++a)o.initializer[a]=L.onnx.TensorProto.toObject(n.initializer[a],i)}if(n.docString!=null&&n.hasOwnProperty("docString")&&(o.docString=n.docString),n.input&&n.input.length){o.input=[];for(var a=0;a<n.input.length;++a)o.input[a]=L.onnx.ValueInfoProto.toObject(n.input[a],i)}if(n.output&&n.output.length){o.output=[];for(var a=0;a<n.output.length;++a)o.output[a]=L.onnx.ValueInfoProto.toObject(n.output[a],i)}if(n.valueInfo&&n.valueInfo.length){o.valueInfo=[];for(var a=0;a<n.valueInfo.length;++a)o.valueInfo[a]=L.onnx.ValueInfoProto.toObject(n.valueInfo[a],i)}if(n.quantizationAnnotation&&n.quantizationAnnotation.length){o.quantizationAnnotation=[];for(var a=0;a<n.quantizationAnnotation.length;++a)o.quantizationAnnotation[a]=L.onnx.TensorAnnotation.toObject(n.quantizationAnnotation[a],i)}if(n.sparseInitializer&&n.sparseInitializer.length){o.sparseInitializer=[];for(var a=0;a<n.sparseInitializer.length;++a)o.sparseInitializer[a]=L.onnx.SparseTensorProto.toObject(n.sparseInitializer[a],i)}return o},e.prototype.toJSON=function(){return this.constructor.toObject(this,ut.util.toJSONOptions)},e.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.GraphProto"},e}(),r.TensorProto=function(){function e(t){if(this.dims=[],this.floatData=[],this.int32Data=[],this.stringData=[],this.int64Data=[],this.externalData=[],this.doubleData=[],this.uint64Data=[],t)for(var n=Object.keys(t),i=0;i<n.length;++i)t[n[i]]!=null&&(this[n[i]]=t[n[i]])}return e.prototype.dims=U.emptyArray,e.prototype.dataType=0,e.prototype.segment=null,e.prototype.floatData=U.emptyArray,e.prototype.int32Data=U.emptyArray,e.prototype.stringData=U.emptyArray,e.prototype.int64Data=U.emptyArray,e.prototype.name="",e.prototype.docString="",e.prototype.rawData=U.newBuffer([]),e.prototype.externalData=U.emptyArray,e.prototype.dataLocation=0,e.prototype.doubleData=U.emptyArray,e.prototype.uint64Data=U.emptyArray,e.create=function(n){return new e(n)},e.encode=function(n,i){if(i||(i=_t.create()),n.dims!=null&&n.dims.length){i.uint32(10).fork();for(var o=0;o<n.dims.length;++o)i.int64(n.dims[o]);i.ldelim()}if(n.dataType!=null&&Object.hasOwnProperty.call(n,"dataType")&&i.uint32(16).int32(n.dataType),n.segment!=null&&Object.hasOwnProperty.call(n,"segment")&&L.onnx.TensorProto.Segment.encode(n.segment,i.uint32(26).fork()).ldelim(),n.floatData!=null&&n.floatData.length){i.uint32(34).fork();for(var o=0;o<n.floatData.length;++o)i.float(n.floatData[o]);i.ldelim()}if(n.int32Data!=null&&n.int32Data.length){i.uint32(42).fork();for(var o=0;o<n.int32Data.length;++o)i.int32(n.int32Data[o]);i.ldelim()}if(n.stringData!=null&&n.stringData.length)for(var o=0;o<n.stringData.length;++o)i.uint32(50).bytes(n.stringData[o]);if(n.int64Data!=null&&n.int64Data.length){i.uint32(58).fork();for(var o=0;o<n.int64Data.length;++o)i.int64(n.int64Data[o]);i.ldelim()}if(n.name!=null&&Object.hasOwnProperty.call(n,"name")&&i.uint32(66).string(n.name),n.rawData!=null&&Object.hasOwnProperty.call(n,"rawData")&&i.uint32(74).bytes(n.rawData),n.doubleData!=null&&n.doubleData.length){i.uint32(82).fork();for(var o=0;o<n.doubleData.length;++o)i.double(n.doubleData[o]);i.ldelim()}if(n.uint64Data!=null&&n.uint64Data.length){i.uint32(90).fork();for(var o=0;o<n.uint64Data.length;++o)i.uint64(n.uint64Data[o]);i.ldelim()}if(n.docString!=null&&Object.hasOwnProperty.call(n,"docString")&&i.uint32(98).string(n.docString),n.externalData!=null&&n.externalData.length)for(var o=0;o<n.externalData.length;++o)L.onnx.StringStringEntryProto.encode(n.externalData[o],i.uint32(106).fork()).ldelim();return n.dataLocation!=null&&Object.hasOwnProperty.call(n,"dataLocation")&&i.uint32(112).int32(n.dataLocation),i},e.encodeDelimited=function(n,i){return this.encode(n,i).ldelim()},e.decode=function(n,i){n instanceof de||(n=de.create(n));for(var o=i===void 0?n.len:n.pos+i,a=new L.onnx.TensorProto;n.pos<o;){var s=n.uint32();switch(s>>>3){case 1:{if(a.dims&&a.dims.length||(a.dims=[]),(s&7)===2)for(var l=n.uint32()+n.pos;n.pos<l;)a.dims.push(n.int64());else a.dims.push(n.int64());break}case 2:{a.dataType=n.int32();break}case 3:{a.segment=L.onnx.TensorProto.Segment.decode(n,n.uint32());break}case 4:{if(a.floatData&&a.floatData.length||(a.floatData=[]),(s&7)===2)for(var l=n.uint32()+n.pos;n.pos<l;)a.floatData.push(n.float());else a.floatData.push(n.float());break}case 5:{if(a.int32Data&&a.int32Data.length||(a.int32Data=[]),(s&7)===2)for(var l=n.uint32()+n.pos;n.pos<l;)a.int32Data.push(n.int32());else a.int32Data.push(n.int32());break}case 6:{a.stringData&&a.stringData.length||(a.stringData=[]),a.stringData.push(n.bytes());break}case 7:{if(a.int64Data&&a.int64Data.length||(a.int64Data=[]),(s&7)===2)for(var l=n.uint32()+n.pos;n.pos<l;)a.int64Data.push(n.int64());else a.int64Data.push(n.int64());break}case 8:{a.name=n.string();break}case 12:{a.docString=n.string();break}case 9:{a.rawData=n.bytes();break}case 13:{a.externalData&&a.externalData.length||(a.externalData=[]),a.externalData.push(L.onnx.StringStringEntryProto.decode(n,n.uint32()));break}case 14:{a.dataLocation=n.int32();break}case 10:{if(a.doubleData&&a.doubleData.length||(a.doubleData=[]),(s&7)===2)for(var l=n.uint32()+n.pos;n.pos<l;)a.doubleData.push(n.double());else a.doubleData.push(n.double());break}case 11:{if(a.uint64Data&&a.uint64Data.length||(a.uint64Data=[]),(s&7)===2)for(var l=n.uint32()+n.pos;n.pos<l;)a.uint64Data.push(n.uint64());else a.uint64Data.push(n.uint64());break}default:n.skipType(s&7);break}}return a},e.decodeDelimited=function(n){return n instanceof de||(n=new de(n)),this.decode(n,n.uint32())},e.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.dims!=null&&n.hasOwnProperty("dims")){if(!Array.isArray(n.dims))return"dims: array expected";for(var i=0;i<n.dims.length;++i)if(!U.isInteger(n.dims[i])&&!(n.dims[i]&&U.isInteger(n.dims[i].low)&&U.isInteger(n.dims[i].high)))return"dims: integer|Long[] expected"}if(n.dataType!=null&&n.hasOwnProperty("dataType")&&!U.isInteger(n.dataType))return"dataType: integer expected";if(n.segment!=null&&n.hasOwnProperty("segment")){var o=L.onnx.TensorProto.Segment.verify(n.segment);if(o)return"segment."+o}if(n.floatData!=null&&n.hasOwnProperty("floatData")){if(!Array.isArray(n.floatData))return"floatData: array expected";for(var i=0;i<n.floatData.length;++i)if(typeof n.floatData[i]!="number")return"floatData: number[] expected"}if(n.int32Data!=null&&n.hasOwnProperty("int32Data")){if(!Array.isArray(n.int32Data))return"int32Data: array expected";for(var i=0;i<n.int32Data.length;++i)if(!U.isInteger(n.int32Data[i]))return"int32Data: integer[] expected"}if(n.stringData!=null&&n.hasOwnProperty("stringData")){if(!Array.isArray(n.stringData))return"stringData: array expected";for(var i=0;i<n.stringData.length;++i)if(!(n.stringData[i]&&typeof n.stringData[i].length=="number"||U.isString(n.stringData[i])))return"stringData: buffer[] expected"}if(n.int64Data!=null&&n.hasOwnProperty("int64Data")){if(!Array.isArray(n.int64Data))return"int64Data: array expected";for(var i=0;i<n.int64Data.length;++i)if(!U.isInteger(n.int64Data[i])&&!(n.int64Data[i]&&U.isInteger(n.int64Data[i].low)&&U.isInteger(n.int64Data[i].high)))return"int64Data: integer|Long[] expected"}if(n.name!=null&&n.hasOwnProperty("name")&&!U.isString(n.name))return"name: string expected";if(n.docString!=null&&n.hasOwnProperty("docString")&&!U.isString(n.docString))return"docString: string expected";if(n.rawData!=null&&n.hasOwnProperty("rawData")&&!(n.rawData&&typeof n.rawData.length=="number"||U.isString(n.rawData)))return"rawData: buffer expected";if(n.externalData!=null&&n.hasOwnProperty("externalData")){if(!Array.isArray(n.externalData))return"externalData: array expected";for(var i=0;i<n.externalData.length;++i){var o=L.onnx.StringStringEntryProto.verify(n.externalData[i]);if(o)return"externalData."+o}}if(n.dataLocation!=null&&n.hasOwnProperty("dataLocation"))switch(n.dataLocation){default:return"dataLocation: enum value expected";case 0:case 1:break}if(n.doubleData!=null&&n.hasOwnProperty("doubleData")){if(!Array.isArray(n.doubleData))return"doubleData: array expected";for(var i=0;i<n.doubleData.length;++i)if(typeof n.doubleData[i]!="number")return"doubleData: number[] expected"}if(n.uint64Data!=null&&n.hasOwnProperty("uint64Data")){if(!Array.isArray(n.uint64Data))return"uint64Data: array expected";for(var i=0;i<n.uint64Data.length;++i)if(!U.isInteger(n.uint64Data[i])&&!(n.uint64Data[i]&&U.isInteger(n.uint64Data[i].low)&&U.isInteger(n.uint64Data[i].high)))return"uint64Data: integer|Long[] expected"}return null},e.fromObject=function(n){if(n instanceof L.onnx.TensorProto)return n;var i=new L.onnx.TensorProto;if(n.dims){if(!Array.isArray(n.dims))throw TypeError(".onnx.TensorProto.dims: array expected");i.dims=[];for(var o=0;o<n.dims.length;++o)U.Long?(i.dims[o]=U.Long.fromValue(n.dims[o])).unsigned=!1:typeof n.dims[o]=="string"?i.dims[o]=parseInt(n.dims[o],10):typeof n.dims[o]=="number"?i.dims[o]=n.dims[o]:typeof n.dims[o]=="object"&&(i.dims[o]=new U.LongBits(n.dims[o].low>>>0,n.dims[o].high>>>0).toNumber())}if(n.dataType!=null&&(i.dataType=n.dataType|0),n.segment!=null){if(typeof n.segment!="object")throw TypeError(".onnx.TensorProto.segment: object expected");i.segment=L.onnx.TensorProto.Segment.fromObject(n.segment)}if(n.floatData){if(!Array.isArray(n.floatData))throw TypeError(".onnx.TensorProto.floatData: array expected");i.floatData=[];for(var o=0;o<n.floatData.length;++o)i.floatData[o]=Number(n.floatData[o])}if(n.int32Data){if(!Array.isArray(n.int32Data))throw TypeError(".onnx.TensorProto.int32Data: array expected");i.int32Data=[];for(var o=0;o<n.int32Data.length;++o)i.int32Data[o]=n.int32Data[o]|0}if(n.stringData){if(!Array.isArray(n.stringData))throw TypeError(".onnx.TensorProto.stringData: array expected");i.stringData=[];for(var o=0;o<n.stringData.length;++o)typeof n.stringData[o]=="string"?U.base64.decode(n.stringData[o],i.stringData[o]=U.newBuffer(U.base64.length(n.stringData[o])),0):n.stringData[o].length>=0&&(i.stringData[o]=n.stringData[o])}if(n.int64Data){if(!Array.isArray(n.int64Data))throw TypeError(".onnx.TensorProto.int64Data: array expected");i.int64Data=[];for(var o=0;o<n.int64Data.length;++o)U.Long?(i.int64Data[o]=U.Long.fromValue(n.int64Data[o])).unsigned=!1:typeof n.int64Data[o]=="string"?i.int64Data[o]=parseInt(n.int64Data[o],10):typeof n.int64Data[o]=="number"?i.int64Data[o]=n.int64Data[o]:typeof n.int64Data[o]=="object"&&(i.int64Data[o]=new U.LongBits(n.int64Data[o].low>>>0,n.int64Data[o].high>>>0).toNumber())}if(n.name!=null&&(i.name=String(n.name)),n.docString!=null&&(i.docString=String(n.docString)),n.rawData!=null&&(typeof n.rawData=="string"?U.base64.decode(n.rawData,i.rawData=U.newBuffer(U.base64.length(n.rawData)),0):n.rawData.length>=0&&(i.rawData=n.rawData)),n.externalData){if(!Array.isArray(n.externalData))throw TypeError(".onnx.TensorProto.externalData: array expected");i.externalData=[];for(var o=0;o<n.externalData.length;++o){if(typeof n.externalData[o]!="object")throw TypeError(".onnx.TensorProto.externalData: object expected");i.externalData[o]=L.onnx.StringStringEntryProto.fromObject(n.externalData[o])}}switch(n.dataLocation){default:if(typeof n.dataLocation=="number"){i.dataLocation=n.dataLocation;break}break;case"DEFAULT":case 0:i.dataLocation=0;break;case"EXTERNAL":case 1:i.dataLocation=1;break}if(n.doubleData){if(!Array.isArray(n.doubleData))throw TypeError(".onnx.TensorProto.doubleData: array expected");i.doubleData=[];for(var o=0;o<n.doubleData.length;++o)i.doubleData[o]=Number(n.doubleData[o])}if(n.uint64Data){if(!Array.isArray(n.uint64Data))throw TypeError(".onnx.TensorProto.uint64Data: array expected");i.uint64Data=[];for(var o=0;o<n.uint64Data.length;++o)U.Long?(i.uint64Data[o]=U.Long.fromValue(n.uint64Data[o])).unsigned=!0:typeof n.uint64Data[o]=="string"?i.uint64Data[o]=parseInt(n.uint64Data[o],10):typeof n.uint64Data[o]=="number"?i.uint64Data[o]=n.uint64Data[o]:typeof n.uint64Data[o]=="object"&&(i.uint64Data[o]=new U.LongBits(n.uint64Data[o].low>>>0,n.uint64Data[o].high>>>0).toNumber(!0))}return i},e.toObject=function(n,i){i||(i={});var o={};if((i.arrays||i.defaults)&&(o.dims=[],o.floatData=[],o.int32Data=[],o.stringData=[],o.int64Data=[],o.doubleData=[],o.uint64Data=[],o.externalData=[]),i.defaults&&(o.dataType=0,o.segment=null,o.name="",i.bytes===String?o.rawData="":(o.rawData=[],i.bytes!==Array&&(o.rawData=U.newBuffer(o.rawData))),o.docString="",o.dataLocation=i.enums===String?"DEFAULT":0),n.dims&&n.dims.length){o.dims=[];for(var a=0;a<n.dims.length;++a)typeof n.dims[a]=="number"?o.dims[a]=i.longs===String?String(n.dims[a]):n.dims[a]:o.dims[a]=i.longs===String?U.Long.prototype.toString.call(n.dims[a]):i.longs===Number?new U.LongBits(n.dims[a].low>>>0,n.dims[a].high>>>0).toNumber():n.dims[a]}if(n.dataType!=null&&n.hasOwnProperty("dataType")&&(o.dataType=n.dataType),n.segment!=null&&n.hasOwnProperty("segment")&&(o.segment=L.onnx.TensorProto.Segment.toObject(n.segment,i)),n.floatData&&n.floatData.length){o.floatData=[];for(var a=0;a<n.floatData.length;++a)o.floatData[a]=i.json&&!isFinite(n.floatData[a])?String(n.floatData[a]):n.floatData[a]}if(n.int32Data&&n.int32Data.length){o.int32Data=[];for(var a=0;a<n.int32Data.length;++a)o.int32Data[a]=n.int32Data[a]}if(n.stringData&&n.stringData.length){o.stringData=[];for(var a=0;a<n.stringData.length;++a)o.stringData[a]=i.bytes===String?U.base64.encode(n.stringData[a],0,n.stringData[a].length):i.bytes===Array?Array.prototype.slice.call(n.stringData[a]):n.stringData[a]}if(n.int64Data&&n.int64Data.length){o.int64Data=[];for(var a=0;a<n.int64Data.length;++a)typeof n.int64Data[a]=="number"?o.int64Data[a]=i.longs===String?String(n.int64Data[a]):n.int64Data[a]:o.int64Data[a]=i.longs===String?U.Long.prototype.toString.call(n.int64Data[a]):i.longs===Number?new U.LongBits(n.int64Data[a].low>>>0,n.int64Data[a].high>>>0).toNumber():n.int64Data[a]}if(n.name!=null&&n.hasOwnProperty("name")&&(o.name=n.name),n.rawData!=null&&n.hasOwnProperty("rawData")&&(o.rawData=i.bytes===String?U.base64.encode(n.rawData,0,n.rawData.length):i.bytes===Array?Array.prototype.slice.call(n.rawData):n.rawData),n.doubleData&&n.doubleData.length){o.doubleData=[];for(var a=0;a<n.doubleData.length;++a)o.doubleData[a]=i.json&&!isFinite(n.doubleData[a])?String(n.doubleData[a]):n.doubleData[a]}if(n.uint64Data&&n.uint64Data.length){o.uint64Data=[];for(var a=0;a<n.uint64Data.length;++a)typeof n.uint64Data[a]=="number"?o.uint64Data[a]=i.longs===String?String(n.uint64Data[a]):n.uint64Data[a]:o.uint64Data[a]=i.longs===String?U.Long.prototype.toString.call(n.uint64Data[a]):i.longs===Number?new U.LongBits(n.uint64Data[a].low>>>0,n.uint64Data[a].high>>>0).toNumber(!0):n.uint64Data[a]}if(n.docString!=null&&n.hasOwnProperty("docString")&&(o.docString=n.docString),n.externalData&&n.externalData.length){o.externalData=[];for(var a=0;a<n.externalData.length;++a)o.externalData[a]=L.onnx.StringStringEntryProto.toObject(n.externalData[a],i)}return n.dataLocation!=null&&n.hasOwnProperty("dataLocation")&&(o.dataLocation=i.enums===String?L.onnx.TensorProto.DataLocation[n.dataLocation]===void 0?n.dataLocation:L.onnx.TensorProto.DataLocation[n.dataLocation]:n.dataLocation),o},e.prototype.toJSON=function(){return this.constructor.toObject(this,ut.util.toJSONOptions)},e.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.TensorProto"},e.DataType=function(){var t={},n=Object.create(t);return n[t[0]="UNDEFINED"]=0,n[t[1]="FLOAT"]=1,n[t[2]="UINT8"]=2,n[t[3]="INT8"]=3,n[t[4]="UINT16"]=4,n[t[5]="INT16"]=5,n[t[6]="INT32"]=6,n[t[7]="INT64"]=7,n[t[8]="STRING"]=8,n[t[9]="BOOL"]=9,n[t[10]="FLOAT16"]=10,n[t[11]="DOUBLE"]=11,n[t[12]="UINT32"]=12,n[t[13]="UINT64"]=13,n[t[14]="COMPLEX64"]=14,n[t[15]="COMPLEX128"]=15,n[t[16]="BFLOAT16"]=16,n[t[17]="FLOAT8E4M3FN"]=17,n[t[18]="FLOAT8E4M3FNUZ"]=18,n[t[19]="FLOAT8E5M2"]=19,n[t[20]="FLOAT8E5M2FNUZ"]=20,n}(),e.Segment=function(){function t(n){if(n)for(var i=Object.keys(n),o=0;o<i.length;++o)n[i[o]]!=null&&(this[i[o]]=n[i[o]])}return t.prototype.begin=U.Long?U.Long.fromBits(0,0,!1):0,t.prototype.end=U.Long?U.Long.fromBits(0,0,!1):0,t.create=function(i){return new t(i)},t.encode=function(i,o){return o||(o=_t.create()),i.begin!=null&&Object.hasOwnProperty.call(i,"begin")&&o.uint32(8).int64(i.begin),i.end!=null&&Object.hasOwnProperty.call(i,"end")&&o.uint32(16).int64(i.end),o},t.encodeDelimited=function(i,o){return this.encode(i,o).ldelim()},t.decode=function(i,o){i instanceof de||(i=de.create(i));for(var a=o===void 0?i.len:i.pos+o,s=new L.onnx.TensorProto.Segment;i.pos<a;){var l=i.uint32();switch(l>>>3){case 1:{s.begin=i.int64();break}case 2:{s.end=i.int64();break}default:i.skipType(l&7);break}}return s},t.decodeDelimited=function(i){return i instanceof de||(i=new de(i)),this.decode(i,i.uint32())},t.verify=function(i){return typeof i!="object"||i===null?"object expected":i.begin!=null&&i.hasOwnProperty("begin")&&!U.isInteger(i.begin)&&!(i.begin&&U.isInteger(i.begin.low)&&U.isInteger(i.begin.high))?"begin: integer|Long expected":i.end!=null&&i.hasOwnProperty("end")&&!U.isInteger(i.end)&&!(i.end&&U.isInteger(i.end.low)&&U.isInteger(i.end.high))?"end: integer|Long expected":null},t.fromObject=function(i){if(i instanceof L.onnx.TensorProto.Segment)return i;var o=new L.onnx.TensorProto.Segment;return i.begin!=null&&(U.Long?(o.begin=U.Long.fromValue(i.begin)).unsigned=!1:typeof i.begin=="string"?o.begin=parseInt(i.begin,10):typeof i.begin=="number"?o.begin=i.begin:typeof i.begin=="object"&&(o.begin=new U.LongBits(i.begin.low>>>0,i.begin.high>>>0).toNumber())),i.end!=null&&(U.Long?(o.end=U.Long.fromValue(i.end)).unsigned=!1:typeof i.end=="string"?o.end=parseInt(i.end,10):typeof i.end=="number"?o.end=i.end:typeof i.end=="object"&&(o.end=new U.LongBits(i.end.low>>>0,i.end.high>>>0).toNumber())),o},t.toObject=function(i,o){o||(o={});var a={};if(o.defaults){if(U.Long){var s=new U.Long(0,0,!1);a.begin=o.longs===String?s.toString():o.longs===Number?s.toNumber():s}else a.begin=o.longs===String?"0":0;if(U.Long){var s=new U.Long(0,0,!1);a.end=o.longs===String?s.toString():o.longs===Number?s.toNumber():s}else a.end=o.longs===String?"0":0}return i.begin!=null&&i.hasOwnProperty("begin")&&(typeof i.begin=="number"?a.begin=o.longs===String?String(i.begin):i.begin:a.begin=o.longs===String?U.Long.prototype.toString.call(i.begin):o.longs===Number?new U.LongBits(i.begin.low>>>0,i.begin.high>>>0).toNumber():i.begin),i.end!=null&&i.hasOwnProperty("end")&&(typeof i.end=="number"?a.end=o.longs===String?String(i.end):i.end:a.end=o.longs===String?U.Long.prototype.toString.call(i.end):o.longs===Number?new U.LongBits(i.end.low>>>0,i.end.high>>>0).toNumber():i.end),a},t.prototype.toJSON=function(){return this.constructor.toObject(this,ut.util.toJSONOptions)},t.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.TensorProto.Segment"},t}(),e.DataLocation=function(){var t={},n=Object.create(t);return n[t[0]="DEFAULT"]=0,n[t[1]="EXTERNAL"]=1,n}(),e}(),r.SparseTensorProto=function(){function e(t){if(this.dims=[],t)for(var n=Object.keys(t),i=0;i<n.length;++i)t[n[i]]!=null&&(this[n[i]]=t[n[i]])}return e.prototype.values=null,e.prototype.indices=null,e.prototype.dims=U.emptyArray,e.create=function(n){return new e(n)},e.encode=function(n,i){if(i||(i=_t.create()),n.values!=null&&Object.hasOwnProperty.call(n,"values")&&L.onnx.TensorProto.encode(n.values,i.uint32(10).fork()).ldelim(),n.indices!=null&&Object.hasOwnProperty.call(n,"indices")&&L.onnx.TensorProto.encode(n.indices,i.uint32(18).fork()).ldelim(),n.dims!=null&&n.dims.length){i.uint32(26).fork();for(var o=0;o<n.dims.length;++o)i.int64(n.dims[o]);i.ldelim()}return i},e.encodeDelimited=function(n,i){return this.encode(n,i).ldelim()},e.decode=function(n,i){n instanceof de||(n=de.create(n));for(var o=i===void 0?n.len:n.pos+i,a=new L.onnx.SparseTensorProto;n.pos<o;){var s=n.uint32();switch(s>>>3){case 1:{a.values=L.onnx.TensorProto.decode(n,n.uint32());break}case 2:{a.indices=L.onnx.TensorProto.decode(n,n.uint32());break}case 3:{if(a.dims&&a.dims.length||(a.dims=[]),(s&7)===2)for(var l=n.uint32()+n.pos;n.pos<l;)a.dims.push(n.int64());else a.dims.push(n.int64());break}default:n.skipType(s&7);break}}return a},e.decodeDelimited=function(n){return n instanceof de||(n=new de(n)),this.decode(n,n.uint32())},e.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.values!=null&&n.hasOwnProperty("values")){var i=L.onnx.TensorProto.verify(n.values);if(i)return"values."+i}if(n.indices!=null&&n.hasOwnProperty("indices")){var i=L.onnx.TensorProto.verify(n.indices);if(i)return"indices."+i}if(n.dims!=null&&n.hasOwnProperty("dims")){if(!Array.isArray(n.dims))return"dims: array expected";for(var o=0;o<n.dims.length;++o)if(!U.isInteger(n.dims[o])&&!(n.dims[o]&&U.isInteger(n.dims[o].low)&&U.isInteger(n.dims[o].high)))return"dims: integer|Long[] expected"}return null},e.fromObject=function(n){if(n instanceof L.onnx.SparseTensorProto)return n;var i=new L.onnx.SparseTensorProto;if(n.values!=null){if(typeof n.values!="object")throw TypeError(".onnx.SparseTensorProto.values: object expected");i.values=L.onnx.TensorProto.fromObject(n.values)}if(n.indices!=null){if(typeof n.indices!="object")throw TypeError(".onnx.SparseTensorProto.indices: object expected");i.indices=L.onnx.TensorProto.fromObject(n.indices)}if(n.dims){if(!Array.isArray(n.dims))throw TypeError(".onnx.SparseTensorProto.dims: array expected");i.dims=[];for(var o=0;o<n.dims.length;++o)U.Long?(i.dims[o]=U.Long.fromValue(n.dims[o])).unsigned=!1:typeof n.dims[o]=="string"?i.dims[o]=parseInt(n.dims[o],10):typeof n.dims[o]=="number"?i.dims[o]=n.dims[o]:typeof n.dims[o]=="object"&&(i.dims[o]=new U.LongBits(n.dims[o].low>>>0,n.dims[o].high>>>0).toNumber())}return i},e.toObject=function(n,i){i||(i={});var o={};if((i.arrays||i.defaults)&&(o.dims=[]),i.defaults&&(o.values=null,o.indices=null),n.values!=null&&n.hasOwnProperty("values")&&(o.values=L.onnx.TensorProto.toObject(n.values,i)),n.indices!=null&&n.hasOwnProperty("indices")&&(o.indices=L.onnx.TensorProto.toObject(n.indices,i)),n.dims&&n.dims.length){o.dims=[];for(var a=0;a<n.dims.length;++a)typeof n.dims[a]=="number"?o.dims[a]=i.longs===String?String(n.dims[a]):n.dims[a]:o.dims[a]=i.longs===String?U.Long.prototype.toString.call(n.dims[a]):i.longs===Number?new U.LongBits(n.dims[a].low>>>0,n.dims[a].high>>>0).toNumber():n.dims[a]}return o},e.prototype.toJSON=function(){return this.constructor.toObject(this,ut.util.toJSONOptions)},e.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.SparseTensorProto"},e}(),r.TensorShapeProto=function(){function e(t){if(this.dim=[],t)for(var n=Object.keys(t),i=0;i<n.length;++i)t[n[i]]!=null&&(this[n[i]]=t[n[i]])}return e.prototype.dim=U.emptyArray,e.create=function(n){return new e(n)},e.encode=function(n,i){if(i||(i=_t.create()),n.dim!=null&&n.dim.length)for(var o=0;o<n.dim.length;++o)L.onnx.TensorShapeProto.Dimension.encode(n.dim[o],i.uint32(10).fork()).ldelim();return i},e.encodeDelimited=function(n,i){return this.encode(n,i).ldelim()},e.decode=function(n,i){n instanceof de||(n=de.create(n));for(var o=i===void 0?n.len:n.pos+i,a=new L.onnx.TensorShapeProto;n.pos<o;){var s=n.uint32();switch(s>>>3){case 1:{a.dim&&a.dim.length||(a.dim=[]),a.dim.push(L.onnx.TensorShapeProto.Dimension.decode(n,n.uint32()));break}default:n.skipType(s&7);break}}return a},e.decodeDelimited=function(n){return n instanceof de||(n=new de(n)),this.decode(n,n.uint32())},e.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.dim!=null&&n.hasOwnProperty("dim")){if(!Array.isArray(n.dim))return"dim: array expected";for(var i=0;i<n.dim.length;++i){var o=L.onnx.TensorShapeProto.Dimension.verify(n.dim[i]);if(o)return"dim."+o}}return null},e.fromObject=function(n){if(n instanceof L.onnx.TensorShapeProto)return n;var i=new L.onnx.TensorShapeProto;if(n.dim){if(!Array.isArray(n.dim))throw TypeError(".onnx.TensorShapeProto.dim: array expected");i.dim=[];for(var o=0;o<n.dim.length;++o){if(typeof n.dim[o]!="object")throw TypeError(".onnx.TensorShapeProto.dim: object expected");i.dim[o]=L.onnx.TensorShapeProto.Dimension.fromObject(n.dim[o])}}return i},e.toObject=function(n,i){i||(i={});var o={};if((i.arrays||i.defaults)&&(o.dim=[]),n.dim&&n.dim.length){o.dim=[];for(var a=0;a<n.dim.length;++a)o.dim[a]=L.onnx.TensorShapeProto.Dimension.toObject(n.dim[a],i)}return o},e.prototype.toJSON=function(){return this.constructor.toObject(this,ut.util.toJSONOptions)},e.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.TensorShapeProto"},e.Dimension=function(){function t(i){if(i)for(var o=Object.keys(i),a=0;a<o.length;++a)i[o[a]]!=null&&(this[o[a]]=i[o[a]])}t.prototype.dimValue=null,t.prototype.dimParam=null,t.prototype.denotation="";var n;return Object.defineProperty(t.prototype,"value",{get:U.oneOfGetter(n=["dimValue","dimParam"]),set:U.oneOfSetter(n)}),t.create=function(o){return new t(o)},t.encode=function(o,a){return a||(a=_t.create()),o.dimValue!=null&&Object.hasOwnProperty.call(o,"dimValue")&&a.uint32(8).int64(o.dimValue),o.dimParam!=null&&Object.hasOwnProperty.call(o,"dimParam")&&a.uint32(18).string(o.dimParam),o.denotation!=null&&Object.hasOwnProperty.call(o,"denotation")&&a.uint32(26).string(o.denotation),a},t.encodeDelimited=function(o,a){return this.encode(o,a).ldelim()},t.decode=function(o,a){o instanceof de||(o=de.create(o));for(var s=a===void 0?o.len:o.pos+a,l=new L.onnx.TensorShapeProto.Dimension;o.pos<s;){var d=o.uint32();switch(d>>>3){case 1:{l.dimValue=o.int64();break}case 2:{l.dimParam=o.string();break}case 3:{l.denotation=o.string();break}default:o.skipType(d&7);break}}return l},t.decodeDelimited=function(o){return o instanceof de||(o=new de(o)),this.decode(o,o.uint32())},t.verify=function(o){if(typeof o!="object"||o===null)return"object expected";var a={};if(o.dimValue!=null&&o.hasOwnProperty("dimValue")&&(a.value=1,!U.isInteger(o.dimValue)&&!(o.dimValue&&U.isInteger(o.dimValue.low)&&U.isInteger(o.dimValue.high))))return"dimValue: integer|Long expected";if(o.dimParam!=null&&o.hasOwnProperty("dimParam")){if(a.value===1)return"value: multiple values";if(a.value=1,!U.isString(o.dimParam))return"dimParam: string expected"}return o.denotation!=null&&o.hasOwnProperty("denotation")&&!U.isString(o.denotation)?"denotation: string expected":null},t.fromObject=function(o){if(o instanceof L.onnx.TensorShapeProto.Dimension)return o;var a=new L.onnx.TensorShapeProto.Dimension;return o.dimValue!=null&&(U.Long?(a.dimValue=U.Long.fromValue(o.dimValue)).unsigned=!1:typeof o.dimValue=="string"?a.dimValue=parseInt(o.dimValue,10):typeof o.dimValue=="number"?a.dimValue=o.dimValue:typeof o.dimValue=="object"&&(a.dimValue=new U.LongBits(o.dimValue.low>>>0,o.dimValue.high>>>0).toNumber())),o.dimParam!=null&&(a.dimParam=String(o.dimParam)),o.denotation!=null&&(a.denotation=String(o.denotation)),a},t.toObject=function(o,a){a||(a={});var s={};return a.defaults&&(s.denotation=""),o.dimValue!=null&&o.hasOwnProperty("dimValue")&&(typeof o.dimValue=="number"?s.dimValue=a.longs===String?String(o.dimValue):o.dimValue:s.dimValue=a.longs===String?U.Long.prototype.toString.call(o.dimValue):a.longs===Number?new U.LongBits(o.dimValue.low>>>0,o.dimValue.high>>>0).toNumber():o.dimValue,a.oneofs&&(s.value="dimValue")),o.dimParam!=null&&o.hasOwnProperty("dimParam")&&(s.dimParam=o.dimParam,a.oneofs&&(s.value="dimParam")),o.denotation!=null&&o.hasOwnProperty("denotation")&&(s.denotation=o.denotation),s},t.prototype.toJSON=function(){return this.constructor.toObject(this,ut.util.toJSONOptions)},t.getTypeUrl=function(o){return o===void 0&&(o="type.googleapis.com"),o+"/onnx.TensorShapeProto.Dimension"},t}(),e}(),r.TypeProto=function(){function e(n){if(n)for(var i=Object.keys(n),o=0;o<i.length;++o)n[i[o]]!=null&&(this[i[o]]=n[i[o]])}e.prototype.tensorType=null,e.prototype.sequenceType=null,e.prototype.mapType=null,e.prototype.optionalType=null,e.prototype.sparseTensorType=null,e.prototype.denotation="";var t;return Object.defineProperty(e.prototype,"value",{get:U.oneOfGetter(t=["tensorType","sequenceType","mapType","optionalType","sparseTensorType"]),set:U.oneOfSetter(t)}),e.create=function(i){return new e(i)},e.encode=function(i,o){return o||(o=_t.create()),i.tensorType!=null&&Object.hasOwnProperty.call(i,"tensorType")&&L.onnx.TypeProto.Tensor.encode(i.tensorType,o.uint32(10).fork()).ldelim(),i.sequenceType!=null&&Object.hasOwnProperty.call(i,"sequenceType")&&L.onnx.TypeProto.Sequence.encode(i.sequenceType,o.uint32(34).fork()).ldelim(),i.mapType!=null&&Object.hasOwnProperty.call(i,"mapType")&&L.onnx.TypeProto.Map.encode(i.mapType,o.uint32(42).fork()).ldelim(),i.denotation!=null&&Object.hasOwnProperty.call(i,"denotation")&&o.uint32(50).string(i.denotation),i.sparseTensorType!=null&&Object.hasOwnProperty.call(i,"sparseTensorType")&&L.onnx.TypeProto.SparseTensor.encode(i.sparseTensorType,o.uint32(66).fork()).ldelim(),i.optionalType!=null&&Object.hasOwnProperty.call(i,"optionalType")&&L.onnx.TypeProto.Optional.encode(i.optionalType,o.uint32(74).fork()).ldelim(),o},e.encodeDelimited=function(i,o){return this.encode(i,o).ldelim()},e.decode=function(i,o){i instanceof de||(i=de.create(i));for(var a=o===void 0?i.len:i.pos+o,s=new L.onnx.TypeProto;i.pos<a;){var l=i.uint32();switch(l>>>3){case 1:{s.tensorType=L.onnx.TypeProto.Tensor.decode(i,i.uint32());break}case 4:{s.sequenceType=L.onnx.TypeProto.Sequence.decode(i,i.uint32());break}case 5:{s.mapType=L.onnx.TypeProto.Map.decode(i,i.uint32());break}case 9:{s.optionalType=L.onnx.TypeProto.Optional.decode(i,i.uint32());break}case 8:{s.sparseTensorType=L.onnx.TypeProto.SparseTensor.decode(i,i.uint32());break}case 6:{s.denotation=i.string();break}default:i.skipType(l&7);break}}return s},e.decodeDelimited=function(i){return i instanceof de||(i=new de(i)),this.decode(i,i.uint32())},e.verify=function(i){if(typeof i!="object"||i===null)return"object expected";var o={};if(i.tensorType!=null&&i.hasOwnProperty("tensorType")){o.value=1;{var a=L.onnx.TypeProto.Tensor.verify(i.tensorType);if(a)return"tensorType."+a}}if(i.sequenceType!=null&&i.hasOwnProperty("sequenceType")){if(o.value===1)return"value: multiple values";o.value=1;{var a=L.onnx.TypeProto.Sequence.verify(i.sequenceType);if(a)return"sequenceType."+a}}if(i.mapType!=null&&i.hasOwnProperty("mapType")){if(o.value===1)return"value: multiple values";o.value=1;{var a=L.onnx.TypeProto.Map.verify(i.mapType);if(a)return"mapType."+a}}if(i.optionalType!=null&&i.hasOwnProperty("optionalType")){if(o.value===1)return"value: multiple values";o.value=1;{var a=L.onnx.TypeProto.Optional.verify(i.optionalType);if(a)return"optionalType."+a}}if(i.sparseTensorType!=null&&i.hasOwnProperty("sparseTensorType")){if(o.value===1)return"value: multiple values";o.value=1;{var a=L.onnx.TypeProto.SparseTensor.verify(i.sparseTensorType);if(a)return"sparseTensorType."+a}}return i.denotation!=null&&i.hasOwnProperty("denotation")&&!U.isString(i.denotation)?"denotation: string expected":null},e.fromObject=function(i){if(i instanceof L.onnx.TypeProto)return i;var o=new L.onnx.TypeProto;if(i.tensorType!=null){if(typeof i.tensorType!="object")throw TypeError(".onnx.TypeProto.tensorType: object expected");o.tensorType=L.onnx.TypeProto.Tensor.fromObject(i.tensorType)}if(i.sequenceType!=null){if(typeof i.sequenceType!="object")throw TypeError(".onnx.TypeProto.sequenceType: object expected");o.sequenceType=L.onnx.TypeProto.Sequence.fromObject(i.sequenceType)}if(i.mapType!=null){if(typeof i.mapType!="object")throw TypeError(".onnx.TypeProto.mapType: object expected");o.mapType=L.onnx.TypeProto.Map.fromObject(i.mapType)}if(i.optionalType!=null){if(typeof i.optionalType!="object")throw TypeError(".onnx.TypeProto.optionalType: object expected");o.optionalType=L.onnx.TypeProto.Optional.fromObject(i.optionalType)}if(i.sparseTensorType!=null){if(typeof i.sparseTensorType!="object")throw TypeError(".onnx.TypeProto.sparseTensorType: object expected");o.sparseTensorType=L.onnx.TypeProto.SparseTensor.fromObject(i.sparseTensorType)}return i.denotation!=null&&(o.denotation=String(i.denotation)),o},e.toObject=function(i,o){o||(o={});var a={};return o.defaults&&(a.denotation=""),i.tensorType!=null&&i.hasOwnProperty("tensorType")&&(a.tensorType=L.onnx.TypeProto.Tensor.toObject(i.tensorType,o),o.oneofs&&(a.value="tensorType")),i.sequenceType!=null&&i.hasOwnProperty("sequenceType")&&(a.sequenceType=L.onnx.TypeProto.Sequence.toObject(i.sequenceType,o),o.oneofs&&(a.value="sequenceType")),i.mapType!=null&&i.hasOwnProperty("mapType")&&(a.mapType=L.onnx.TypeProto.Map.toObject(i.mapType,o),o.oneofs&&(a.value="mapType")),i.denotation!=null&&i.hasOwnProperty("denotation")&&(a.denotation=i.denotation),i.sparseTensorType!=null&&i.hasOwnProperty("sparseTensorType")&&(a.sparseTensorType=L.onnx.TypeProto.SparseTensor.toObject(i.sparseTensorType,o),o.oneofs&&(a.value="sparseTensorType")),i.optionalType!=null&&i.hasOwnProperty("optionalType")&&(a.optionalType=L.onnx.TypeProto.Optional.toObject(i.optionalType,o),o.oneofs&&(a.value="optionalType")),a},e.prototype.toJSON=function(){return this.constructor.toObject(this,ut.util.toJSONOptions)},e.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.TypeProto"},e.Tensor=function(){function n(i){if(i)for(var o=Object.keys(i),a=0;a<o.length;++a)i[o[a]]!=null&&(this[o[a]]=i[o[a]])}return n.prototype.elemType=0,n.prototype.shape=null,n.create=function(o){return new n(o)},n.encode=function(o,a){return a||(a=_t.create()),o.elemType!=null&&Object.hasOwnProperty.call(o,"elemType")&&a.uint32(8).int32(o.elemType),o.shape!=null&&Object.hasOwnProperty.call(o,"shape")&&L.onnx.TensorShapeProto.encode(o.shape,a.uint32(18).fork()).ldelim(),a},n.encodeDelimited=function(o,a){return this.encode(o,a).ldelim()},n.decode=function(o,a){o instanceof de||(o=de.create(o));for(var s=a===void 0?o.len:o.pos+a,l=new L.onnx.TypeProto.Tensor;o.pos<s;){var d=o.uint32();switch(d>>>3){case 1:{l.elemType=o.int32();break}case 2:{l.shape=L.onnx.TensorShapeProto.decode(o,o.uint32());break}default:o.skipType(d&7);break}}return l},n.decodeDelimited=function(o){return o instanceof de||(o=new de(o)),this.decode(o,o.uint32())},n.verify=function(o){if(typeof o!="object"||o===null)return"object expected";if(o.elemType!=null&&o.hasOwnProperty("elemType")&&!U.isInteger(o.elemType))return"elemType: integer expected";if(o.shape!=null&&o.hasOwnProperty("shape")){var a=L.onnx.TensorShapeProto.verify(o.shape);if(a)return"shape."+a}return null},n.fromObject=function(o){if(o instanceof L.onnx.TypeProto.Tensor)return o;var a=new L.onnx.TypeProto.Tensor;if(o.elemType!=null&&(a.elemType=o.elemType|0),o.shape!=null){if(typeof o.shape!="object")throw TypeError(".onnx.TypeProto.Tensor.shape: object expected");a.shape=L.onnx.TensorShapeProto.fromObject(o.shape)}return a},n.toObject=function(o,a){a||(a={});var s={};return a.defaults&&(s.elemType=0,s.shape=null),o.elemType!=null&&o.hasOwnProperty("elemType")&&(s.elemType=o.elemType),o.shape!=null&&o.hasOwnProperty("shape")&&(s.shape=L.onnx.TensorShapeProto.toObject(o.shape,a)),s},n.prototype.toJSON=function(){return this.constructor.toObject(this,ut.util.toJSONOptions)},n.getTypeUrl=function(o){return o===void 0&&(o="type.googleapis.com"),o+"/onnx.TypeProto.Tensor"},n}(),e.Sequence=function(){function n(i){if(i)for(var o=Object.keys(i),a=0;a<o.length;++a)i[o[a]]!=null&&(this[o[a]]=i[o[a]])}return n.prototype.elemType=null,n.create=function(o){return new n(o)},n.encode=function(o,a){return a||(a=_t.create()),o.elemType!=null&&Object.hasOwnProperty.call(o,"elemType")&&L.onnx.TypeProto.encode(o.elemType,a.uint32(10).fork()).ldelim(),a},n.encodeDelimited=function(o,a){return this.encode(o,a).ldelim()},n.decode=function(o,a){o instanceof de||(o=de.create(o));for(var s=a===void 0?o.len:o.pos+a,l=new L.onnx.TypeProto.Sequence;o.pos<s;){var d=o.uint32();switch(d>>>3){case 1:{l.elemType=L.onnx.TypeProto.decode(o,o.uint32());break}default:o.skipType(d&7);break}}return l},n.decodeDelimited=function(o){return o instanceof de||(o=new de(o)),this.decode(o,o.uint32())},n.verify=function(o){if(typeof o!="object"||o===null)return"object expected";if(o.elemType!=null&&o.hasOwnProperty("elemType")){var a=L.onnx.TypeProto.verify(o.elemType);if(a)return"elemType."+a}return null},n.fromObject=function(o){if(o instanceof L.onnx.TypeProto.Sequence)return o;var a=new L.onnx.TypeProto.Sequence;if(o.elemType!=null){if(typeof o.elemType!="object")throw TypeError(".onnx.TypeProto.Sequence.elemType: object expected");a.elemType=L.onnx.TypeProto.fromObject(o.elemType)}return a},n.toObject=function(o,a){a||(a={});var s={};return a.defaults&&(s.elemType=null),o.elemType!=null&&o.hasOwnProperty("elemType")&&(s.elemType=L.onnx.TypeProto.toObject(o.elemType,a)),s},n.prototype.toJSON=function(){return this.constructor.toObject(this,ut.util.toJSONOptions)},n.getTypeUrl=function(o){return o===void 0&&(o="type.googleapis.com"),o+"/onnx.TypeProto.Sequence"},n}(),e.Map=function(){function n(i){if(i)for(var o=Object.keys(i),a=0;a<o.length;++a)i[o[a]]!=null&&(this[o[a]]=i[o[a]])}return n.prototype.keyType=0,n.prototype.valueType=null,n.create=function(o){return new n(o)},n.encode=function(o,a){return a||(a=_t.create()),o.keyType!=null&&Object.hasOwnProperty.call(o,"keyType")&&a.uint32(8).int32(o.keyType),o.valueType!=null&&Object.hasOwnProperty.call(o,"valueType")&&L.onnx.TypeProto.encode(o.valueType,a.uint32(18).fork()).ldelim(),a},n.encodeDelimited=function(o,a){return this.encode(o,a).ldelim()},n.decode=function(o,a){o instanceof de||(o=de.create(o));for(var s=a===void 0?o.len:o.pos+a,l=new L.onnx.TypeProto.Map;o.pos<s;){var d=o.uint32();switch(d>>>3){case 1:{l.keyType=o.int32();break}case 2:{l.valueType=L.onnx.TypeProto.decode(o,o.uint32());break}default:o.skipType(d&7);break}}return l},n.decodeDelimited=function(o){return o instanceof de||(o=new de(o)),this.decode(o,o.uint32())},n.verify=function(o){if(typeof o!="object"||o===null)return"object expected";if(o.keyType!=null&&o.hasOwnProperty("keyType")&&!U.isInteger(o.keyType))return"keyType: integer expected";if(o.valueType!=null&&o.hasOwnProperty("valueType")){var a=L.onnx.TypeProto.verify(o.valueType);if(a)return"valueType."+a}return null},n.fromObject=function(o){if(o instanceof L.onnx.TypeProto.Map)return o;var a=new L.onnx.TypeProto.Map;if(o.keyType!=null&&(a.keyType=o.keyType|0),o.valueType!=null){if(typeof o.valueType!="object")throw TypeError(".onnx.TypeProto.Map.valueType: object expected");a.valueType=L.onnx.TypeProto.fromObject(o.valueType)}return a},n.toObject=function(o,a){a||(a={});var s={};return a.defaults&&(s.keyType=0,s.valueType=null),o.keyType!=null&&o.hasOwnProperty("keyType")&&(s.keyType=o.keyType),o.valueType!=null&&o.hasOwnProperty("valueType")&&(s.valueType=L.onnx.TypeProto.toObject(o.valueType,a)),s},n.prototype.toJSON=function(){return this.constructor.toObject(this,ut.util.toJSONOptions)},n.getTypeUrl=function(o){return o===void 0&&(o="type.googleapis.com"),o+"/onnx.TypeProto.Map"},n}(),e.Optional=function(){function n(i){if(i)for(var o=Object.keys(i),a=0;a<o.length;++a)i[o[a]]!=null&&(this[o[a]]=i[o[a]])}return n.prototype.elemType=null,n.create=function(o){return new n(o)},n.encode=function(o,a){return a||(a=_t.create()),o.elemType!=null&&Object.hasOwnProperty.call(o,"elemType")&&L.onnx.TypeProto.encode(o.elemType,a.uint32(10).fork()).ldelim(),a},n.encodeDelimited=function(o,a){return this.encode(o,a).ldelim()},n.decode=function(o,a){o instanceof de||(o=de.create(o));for(var s=a===void 0?o.len:o.pos+a,l=new L.onnx.TypeProto.Optional;o.pos<s;){var d=o.uint32();switch(d>>>3){case 1:{l.elemType=L.onnx.TypeProto.decode(o,o.uint32());break}default:o.skipType(d&7);break}}return l},n.decodeDelimited=function(o){return o instanceof de||(o=new de(o)),this.decode(o,o.uint32())},n.verify=function(o){if(typeof o!="object"||o===null)return"object expected";if(o.elemType!=null&&o.hasOwnProperty("elemType")){var a=L.onnx.TypeProto.verify(o.elemType);if(a)return"elemType."+a}return null},n.fromObject=function(o){if(o instanceof L.onnx.TypeProto.Optional)return o;var a=new L.onnx.TypeProto.Optional;if(o.elemType!=null){if(typeof o.elemType!="object")throw TypeError(".onnx.TypeProto.Optional.elemType: object expected");a.elemType=L.onnx.TypeProto.fromObject(o.elemType)}return a},n.toObject=function(o,a){a||(a={});var s={};return a.defaults&&(s.elemType=null),o.elemType!=null&&o.hasOwnProperty("elemType")&&(s.elemType=L.onnx.TypeProto.toObject(o.elemType,a)),s},n.prototype.toJSON=function(){return this.constructor.toObject(this,ut.util.toJSONOptions)},n.getTypeUrl=function(o){return o===void 0&&(o="type.googleapis.com"),o+"/onnx.TypeProto.Optional"},n}(),e.SparseTensor=function(){function n(i){if(i)for(var o=Object.keys(i),a=0;a<o.length;++a)i[o[a]]!=null&&(this[o[a]]=i[o[a]])}return n.prototype.elemType=0,n.prototype.shape=null,n.create=function(o){return new n(o)},n.encode=function(o,a){return a||(a=_t.create()),o.elemType!=null&&Object.hasOwnProperty.call(o,"elemType")&&a.uint32(8).int32(o.elemType),o.shape!=null&&Object.hasOwnProperty.call(o,"shape")&&L.onnx.TensorShapeProto.encode(o.shape,a.uint32(18).fork()).ldelim(),a},n.encodeDelimited=function(o,a){return this.encode(o,a).ldelim()},n.decode=function(o,a){o instanceof de||(o=de.create(o));for(var s=a===void 0?o.len:o.pos+a,l=new L.onnx.TypeProto.SparseTensor;o.pos<s;){var d=o.uint32();switch(d>>>3){case 1:{l.elemType=o.int32();break}case 2:{l.shape=L.onnx.TensorShapeProto.decode(o,o.uint32());break}default:o.skipType(d&7);break}}return l},n.decodeDelimited=function(o){return o instanceof de||(o=new de(o)),this.decode(o,o.uint32())},n.verify=function(o){if(typeof o!="object"||o===null)return"object expected";if(o.elemType!=null&&o.hasOwnProperty("elemType")&&!U.isInteger(o.elemType))return"elemType: integer expected";if(o.shape!=null&&o.hasOwnProperty("shape")){var a=L.onnx.TensorShapeProto.verify(o.shape);if(a)return"shape."+a}return null},n.fromObject=function(o){if(o instanceof L.onnx.TypeProto.SparseTensor)return o;var a=new L.onnx.TypeProto.SparseTensor;if(o.elemType!=null&&(a.elemType=o.elemType|0),o.shape!=null){if(typeof o.shape!="object")throw TypeError(".onnx.TypeProto.SparseTensor.shape: object expected");a.shape=L.onnx.TensorShapeProto.fromObject(o.shape)}return a},n.toObject=function(o,a){a||(a={});var s={};return a.defaults&&(s.elemType=0,s.shape=null),o.elemType!=null&&o.hasOwnProperty("elemType")&&(s.elemType=o.elemType),o.shape!=null&&o.hasOwnProperty("shape")&&(s.shape=L.onnx.TensorShapeProto.toObject(o.shape,a)),s},n.prototype.toJSON=function(){return this.constructor.toObject(this,ut.util.toJSONOptions)},n.getTypeUrl=function(o){return o===void 0&&(o="type.googleapis.com"),o+"/onnx.TypeProto.SparseTensor"},n}(),e}(),r.OperatorSetIdProto=function(){function e(t){if(t)for(var n=Object.keys(t),i=0;i<n.length;++i)t[n[i]]!=null&&(this[n[i]]=t[n[i]])}return e.prototype.domain="",e.prototype.version=U.Long?U.Long.fromBits(0,0,!1):0,e.create=function(n){return new e(n)},e.encode=function(n,i){return i||(i=_t.create()),n.domain!=null&&Object.hasOwnProperty.call(n,"domain")&&i.uint32(10).string(n.domain),n.version!=null&&Object.hasOwnProperty.call(n,"version")&&i.uint32(16).int64(n.version),i},e.encodeDelimited=function(n,i){return this.encode(n,i).ldelim()},e.decode=function(n,i){n instanceof de||(n=de.create(n));for(var o=i===void 0?n.len:n.pos+i,a=new L.onnx.OperatorSetIdProto;n.pos<o;){var s=n.uint32();switch(s>>>3){case 1:{a.domain=n.string();break}case 2:{a.version=n.int64();break}default:n.skipType(s&7);break}}return a},e.decodeDelimited=function(n){return n instanceof de||(n=new de(n)),this.decode(n,n.uint32())},e.verify=function(n){return typeof n!="object"||n===null?"object expected":n.domain!=null&&n.hasOwnProperty("domain")&&!U.isString(n.domain)?"domain: string expected":n.version!=null&&n.hasOwnProperty("version")&&!U.isInteger(n.version)&&!(n.version&&U.isInteger(n.version.low)&&U.isInteger(n.version.high))?"version: integer|Long expected":null},e.fromObject=function(n){if(n instanceof L.onnx.OperatorSetIdProto)return n;var i=new L.onnx.OperatorSetIdProto;return n.domain!=null&&(i.domain=String(n.domain)),n.version!=null&&(U.Long?(i.version=U.Long.fromValue(n.version)).unsigned=!1:typeof n.version=="string"?i.version=parseInt(n.version,10):typeof n.version=="number"?i.version=n.version:typeof n.version=="object"&&(i.version=new U.LongBits(n.version.low>>>0,n.version.high>>>0).toNumber())),i},e.toObject=function(n,i){i||(i={});var o={};if(i.defaults)if(o.domain="",U.Long){var a=new U.Long(0,0,!1);o.version=i.longs===String?a.toString():i.longs===Number?a.toNumber():a}else o.version=i.longs===String?"0":0;return n.domain!=null&&n.hasOwnProperty("domain")&&(o.domain=n.domain),n.version!=null&&n.hasOwnProperty("version")&&(typeof n.version=="number"?o.version=i.longs===String?String(n.version):n.version:o.version=i.longs===String?U.Long.prototype.toString.call(n.version):i.longs===Number?new U.LongBits(n.version.low>>>0,n.version.high>>>0).toNumber():n.version),o},e.prototype.toJSON=function(){return this.constructor.toObject(this,ut.util.toJSONOptions)},e.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.OperatorSetIdProto"},e}(),r.OperatorStatus=function(){var e={},t=Object.create(e);return t[e[0]="EXPERIMENTAL"]=0,t[e[1]="STABLE"]=1,t}(),r.FunctionProto=function(){function e(t){if(this.input=[],this.output=[],this.attribute=[],this.attributeProto=[],this.node=[],this.opsetImport=[],t)for(var n=Object.keys(t),i=0;i<n.length;++i)t[n[i]]!=null&&(this[n[i]]=t[n[i]])}return e.prototype.name="",e.prototype.input=U.emptyArray,e.prototype.output=U.emptyArray,e.prototype.attribute=U.emptyArray,e.prototype.attributeProto=U.emptyArray,e.prototype.node=U.emptyArray,e.prototype.docString="",e.prototype.opsetImport=U.emptyArray,e.prototype.domain="",e.create=function(n){return new e(n)},e.encode=function(n,i){if(i||(i=_t.create()),n.name!=null&&Object.hasOwnProperty.call(n,"name")&&i.uint32(10).string(n.name),n.input!=null&&n.input.length)for(var o=0;o<n.input.length;++o)i.uint32(34).string(n.input[o]);if(n.output!=null&&n.output.length)for(var o=0;o<n.output.length;++o)i.uint32(42).string(n.output[o]);if(n.attribute!=null&&n.attribute.length)for(var o=0;o<n.attribute.length;++o)i.uint32(50).string(n.attribute[o]);if(n.node!=null&&n.node.length)for(var o=0;o<n.node.length;++o)L.onnx.NodeProto.encode(n.node[o],i.uint32(58).fork()).ldelim();if(n.docString!=null&&Object.hasOwnProperty.call(n,"docString")&&i.uint32(66).string(n.docString),n.opsetImport!=null&&n.opsetImport.length)for(var o=0;o<n.opsetImport.length;++o)L.onnx.OperatorSetIdProto.encode(n.opsetImport[o],i.uint32(74).fork()).ldelim();if(n.domain!=null&&Object.hasOwnProperty.call(n,"domain")&&i.uint32(82).string(n.domain),n.attributeProto!=null&&n.attributeProto.length)for(var o=0;o<n.attributeProto.length;++o)L.onnx.AttributeProto.encode(n.attributeProto[o],i.uint32(90).fork()).ldelim();return i},e.encodeDelimited=function(n,i){return this.encode(n,i).ldelim()},e.decode=function(n,i){n instanceof de||(n=de.create(n));for(var o=i===void 0?n.len:n.pos+i,a=new L.onnx.FunctionProto;n.pos<o;){var s=n.uint32();switch(s>>>3){case 1:{a.name=n.string();break}case 4:{a.input&&a.input.length||(a.input=[]),a.input.push(n.string());break}case 5:{a.output&&a.output.length||(a.output=[]),a.output.push(n.string());break}case 6:{a.attribute&&a.attribute.length||(a.attribute=[]),a.attribute.push(n.string());break}case 11:{a.attributeProto&&a.attributeProto.length||(a.attributeProto=[]),a.attributeProto.push(L.onnx.AttributeProto.decode(n,n.uint32()));break}case 7:{a.node&&a.node.length||(a.node=[]),a.node.push(L.onnx.NodeProto.decode(n,n.uint32()));break}case 8:{a.docString=n.string();break}case 9:{a.opsetImport&&a.opsetImport.length||(a.opsetImport=[]),a.opsetImport.push(L.onnx.OperatorSetIdProto.decode(n,n.uint32()));break}case 10:{a.domain=n.string();break}default:n.skipType(s&7);break}}return a},e.decodeDelimited=function(n){return n instanceof de||(n=new de(n)),this.decode(n,n.uint32())},e.verify=function(n){if(typeof n!="object"||n===null)return"object expected";if(n.name!=null&&n.hasOwnProperty("name")&&!U.isString(n.name))return"name: string expected";if(n.input!=null&&n.hasOwnProperty("input")){if(!Array.isArray(n.input))return"input: array expected";for(var i=0;i<n.input.length;++i)if(!U.isString(n.input[i]))return"input: string[] expected"}if(n.output!=null&&n.hasOwnProperty("output")){if(!Array.isArray(n.output))return"output: array expected";for(var i=0;i<n.output.length;++i)if(!U.isString(n.output[i]))return"output: string[] expected"}if(n.attribute!=null&&n.hasOwnProperty("attribute")){if(!Array.isArray(n.attribute))return"attribute: array expected";for(var i=0;i<n.attribute.length;++i)if(!U.isString(n.attribute[i]))return"attribute: string[] expected"}if(n.attributeProto!=null&&n.hasOwnProperty("attributeProto")){if(!Array.isArray(n.attributeProto))return"attributeProto: array expected";for(var i=0;i<n.attributeProto.length;++i){var o=L.onnx.AttributeProto.verify(n.attributeProto[i]);if(o)return"attributeProto."+o}}if(n.node!=null&&n.hasOwnProperty("node")){if(!Array.isArray(n.node))return"node: array expected";for(var i=0;i<n.node.length;++i){var o=L.onnx.NodeProto.verify(n.node[i]);if(o)return"node."+o}}if(n.docString!=null&&n.hasOwnProperty("docString")&&!U.isString(n.docString))return"docString: string expected";if(n.opsetImport!=null&&n.hasOwnProperty("opsetImport")){if(!Array.isArray(n.opsetImport))return"opsetImport: array expected";for(var i=0;i<n.opsetImport.length;++i){var o=L.onnx.OperatorSetIdProto.verify(n.opsetImport[i]);if(o)return"opsetImport."+o}}return n.domain!=null&&n.hasOwnProperty("domain")&&!U.isString(n.domain)?"domain: string expected":null},e.fromObject=function(n){if(n instanceof L.onnx.FunctionProto)return n;var i=new L.onnx.FunctionProto;if(n.name!=null&&(i.name=String(n.name)),n.input){if(!Array.isArray(n.input))throw TypeError(".onnx.FunctionProto.input: array expected");i.input=[];for(var o=0;o<n.input.length;++o)i.input[o]=String(n.input[o])}if(n.output){if(!Array.isArray(n.output))throw TypeError(".onnx.FunctionProto.output: array expected");i.output=[];for(var o=0;o<n.output.length;++o)i.output[o]=String(n.output[o])}if(n.attribute){if(!Array.isArray(n.attribute))throw TypeError(".onnx.FunctionProto.attribute: array expected");i.attribute=[];for(var o=0;o<n.attribute.length;++o)i.attribute[o]=String(n.attribute[o])}if(n.attributeProto){if(!Array.isArray(n.attributeProto))throw TypeError(".onnx.FunctionProto.attributeProto: array expected");i.attributeProto=[];for(var o=0;o<n.attributeProto.length;++o){if(typeof n.attributeProto[o]!="object")throw TypeError(".onnx.FunctionProto.attributeProto: object expected");i.attributeProto[o]=L.onnx.AttributeProto.fromObject(n.attributeProto[o])}}if(n.node){if(!Array.isArray(n.node))throw TypeError(".onnx.FunctionProto.node: array expected");i.node=[];for(var o=0;o<n.node.length;++o){if(typeof n.node[o]!="object")throw TypeError(".onnx.FunctionProto.node: object expected");i.node[o]=L.onnx.NodeProto.fromObject(n.node[o])}}if(n.docString!=null&&(i.docString=String(n.docString)),n.opsetImport){if(!Array.isArray(n.opsetImport))throw TypeError(".onnx.FunctionProto.opsetImport: array expected");i.opsetImport=[];for(var o=0;o<n.opsetImport.length;++o){if(typeof n.opsetImport[o]!="object")throw TypeError(".onnx.FunctionProto.opsetImport: object expected");i.opsetImport[o]=L.onnx.OperatorSetIdProto.fromObject(n.opsetImport[o])}}return n.domain!=null&&(i.domain=String(n.domain)),i},e.toObject=function(n,i){i||(i={});var o={};if((i.arrays||i.defaults)&&(o.input=[],o.output=[],o.attribute=[],o.node=[],o.opsetImport=[],o.attributeProto=[]),i.defaults&&(o.name="",o.docString="",o.domain=""),n.name!=null&&n.hasOwnProperty("name")&&(o.name=n.name),n.input&&n.input.length){o.input=[];for(var a=0;a<n.input.length;++a)o.input[a]=n.input[a]}if(n.output&&n.output.length){o.output=[];for(var a=0;a<n.output.length;++a)o.output[a]=n.output[a]}if(n.attribute&&n.attribute.length){o.attribute=[];for(var a=0;a<n.attribute.length;++a)o.attribute[a]=n.attribute[a]}if(n.node&&n.node.length){o.node=[];for(var a=0;a<n.node.length;++a)o.node[a]=L.onnx.NodeProto.toObject(n.node[a],i)}if(n.docString!=null&&n.hasOwnProperty("docString")&&(o.docString=n.docString),n.opsetImport&&n.opsetImport.length){o.opsetImport=[];for(var a=0;a<n.opsetImport.length;++a)o.opsetImport[a]=L.onnx.OperatorSetIdProto.toObject(n.opsetImport[a],i)}if(n.domain!=null&&n.hasOwnProperty("domain")&&(o.domain=n.domain),n.attributeProto&&n.attributeProto.length){o.attributeProto=[];for(var a=0;a<n.attributeProto.length;++a)o.attributeProto[a]=L.onnx.AttributeProto.toObject(n.attributeProto[a],i)}return o},e.prototype.toJSON=function(){return this.constructor.toObject(this,ut.util.toJSONOptions)},e.getTypeUrl=function(n){return n===void 0&&(n="type.googleapis.com"),n+"/onnx.FunctionProto"},e}(),r}();G_.exports=L});function xi(r,e){if(!r)throw new Error(typeof e=="string"?e:e())}function uo(r){return new TextDecoder().decode(r)}var lt,Yr,Zl,Lt,ga,Dt,Ut,be,so,Qr,ei,ti,tt=X(()=>{"use strict";bu();lt=Re(Ti());ni();Yr=class{static arraysEqual(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}},Zl=class{static preprocessInputShapes(e,t){let n=e.length===1?[1,e[0]]:e,i=t.length===1?[t[0],1]:t;return[n,i]}static postprocessOutputShape(e,t,n){t===1&&e.splice(e.length-2,1),n===1&&e.pop()}static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Lt=class r{static calcShape(e,t,n=!1){let i=e.length,o=t.length;if(i===0)return t;if(o===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(n){if(i<2||o<2)return;let l=Zl.calcMatMulShape([e[i-2],e[i-1]],[t[o-2],t[o-1]]);if(l===void 0)return;[s[a-2],s[a-1]]=l}for(let l=n?3:1;l<=a;l++){let d=i-l<0?1:e[i-l],h=o-l<0?1:t[o-l];if(d!==h&&d>1&&h>1)return;s[a-l]=Math.max(d,h)}return s}static index(e,t){let n=new Array(t.length);return r.fillIndex(e,t,n),n}static fillIndex(e,t,n){let i=e.length-t.length;for(let o=0;o<t.length;o++)n[o]=e[i+o]%t[o]}static calc(e,t,n,i,o){let a=r.calcShape(e.dims,t.dims);if(a){if(i&&!be.areEqual(a,e.dims))return;let s=be.size(a),l=i?e:new Tt(a,o||e.type);if(a.length===0)l.set([],n(e.get([]),t.get([])));else{let d=new Array(a.length),h=new Array(e.dims.length),g=new Array(t.dims.length),b=0,w=0,T=!1,I=!1;e.dims.length===0&&(b=e.get([]),T=!0),t.dims.length===0&&(w=t.get([]),I=!0);let O;for(let S=0;S<s;S++){O=S;for(let A=a.length-1;A>=0;A--)d[A]=O%a[A],O=Math.floor(O/a[A]);T||(r.fillIndex(d,e.dims,h),b=e.get(h)),I||(r.fillIndex(d,t.dims,g),w=t.get(g)),l.set(d,n(b,w))}}return l}}static isValidBroadcast(e,t){let n=e.length,i=t.length;if(n>i)return!1;for(let o=1;o<=n;o++)if(e[n-o]!==1&&e[n-o]!==t[i-o])return!1;return!0}static getBroadcastDims(e,t){let n=e.length,i=[];for(let o=0;o<n;o++){let a=n-1-o,s=e[a]||1;(t[t.length-1-o]||1)>1&&s===1&&i.unshift(a)}return i}},ga=class{static getShapeOfGemmResult(e,t,n,i,o){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let a,s,l;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let d=-1;if(i?(l=n[0],d=1):(l=n[1],d=0),n[d]!==s)throw new Error("dimension mismatch");if(a<=0||l<=0||s<=0)throw new Error("invalid shape specified");if(o&&!Lt.isValidBroadcast(o,[a,l]))throw new Error("gemm: invalid bias shape for broadcast");return[a,l,s]}},Dt=class r{static tensorDataTypeFromProto(e){switch(e){case lt.onnx.TensorProto.DataType.INT8:return"int8";case lt.onnx.TensorProto.DataType.UINT8:return"uint8";case lt.onnx.TensorProto.DataType.BOOL:return"bool";case lt.onnx.TensorProto.DataType.INT16:return"int16";case lt.onnx.TensorProto.DataType.UINT16:return"uint16";case lt.onnx.TensorProto.DataType.INT32:return"int32";case lt.onnx.TensorProto.DataType.UINT32:return"uint32";case lt.onnx.TensorProto.DataType.FLOAT:return"float32";case lt.onnx.TensorProto.DataType.DOUBLE:return"float64";case lt.onnx.TensorProto.DataType.STRING:return"string";case lt.onnx.TensorProto.DataType.INT64:return"int32";case lt.onnx.TensorProto.DataType.UINT64:return"uint32";default:throw new Error(`unsupported data type: ${lt.onnx.TensorProto.DataType[e]}`)}}static tensorDataTypeStringToEnum(e){switch(e){case"int8":return lt.onnx.TensorProto.DataType.INT8;case"uint8":return lt.onnx.TensorProto.DataType.UINT8;case"bool":return lt.onnx.TensorProto.DataType.BOOL;case"int16":return lt.onnx.TensorProto.DataType.INT16;case"uint16":return lt.onnx.TensorProto.DataType.UINT16;case"int32":return lt.onnx.TensorProto.DataType.INT32;case"uint32":return lt.onnx.TensorProto.DataType.UINT32;case"float32":return lt.onnx.TensorProto.DataType.FLOAT;case"float64":return lt.onnx.TensorProto.DataType.DOUBLE;case"string":return lt.onnx.TensorProto.DataType.STRING;case"int64":return lt.onnx.TensorProto.DataType.INT64;case"uint64":return lt.onnx.TensorProto.DataType.UINT64;default:throw new Error(`unsupported data type: ${e}`)}}static tensorDimsFromProto(e){return e.map(t=>Pr.isLong(t)?t.toNumber():t)}static tensorValueTypeFromProto(e){return{tensorType:r.tensorDataTypeFromProto(e.elemType),shape:{dims:r.tensorDimsFromProto(e.shape.dim.map(t=>t.dimValue))}}}static tensorDimsFromORTFormat(e){let t=[];for(let n=0;n<e.dimsLength();n++)t.push(Ut.longToNumber(e.dims(n)));return t}static tensorAttributesFromORTFormat(e){let t=[];for(let n=0;n<e.attributesLength();n++)t.push(e.attributes(n));return t}},Ut=class{static longToNumber(e){return Pr.isLong(e)?e.toNumber():typeof e=="bigint"?Number(e):e}static isLong(e){return Pr.isLong(e)||typeof e=="bigint"}},be=class r{static size(e){return r.getSizeFromDimensionRange(e,0,e.length)}static sizeFromDimension(e,t){if(t<0||t>e.length)throw new Error(`invalid dimension of ${t} for sizeFromDimension as Tensor has ${e.length} dimensions.`);return r.getSizeFromDimensionRange(e,t,e.length)}static sizeToDimension(e,t){if(t<0||t>e.length)throw new Error(`invalid dimension of ${t} for sizeToDimension as Tensor has ${e.length} dimensions.`);return r.getSizeFromDimensionRange(e,0,t)}static getSizeFromDimensionRange(e,t,n){let i=1;for(let o=t;o<n;o++){if(e[o]<=0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains 0 or negative values in them.");i*=e[o]}return i}static computeStrides(e){let t=e.length;if(t===0)return[];if(t===1)return[1];let n=new Array(t);n[t-1]=1,n[t-2]=e[t-1];for(let i=t-3;i>=0;--i)n[i]=n[i+1]*e[i+1];return n}static transpose(e){return e.slice().reverse()}static indicesToOffset(e,t,n){n===void 0&&(n=e.length);let i=0;for(let o=0;o<n;++o)i+=t[o]*e[o];return i}static offsetToIndices(e,t){let n=t.length;if(n===0)return[];if(n===1)return[e*t[0]];let i=new Array(t.length);for(let o=0;o<i.length-1;++o)i[o]=Math.floor(e/t[o]),e-=i[o]*t[o];return i[i.length-1]=e,i}static normalizeAxis(e,t){if(e<-t&&e>=t)throw new Error("unsupported axis for this operation.");return e<0?e+t:e}static normalizeAxes(e,t){return e.map(n=>this.normalizeAxis(n,t))}static incrementIndex(e,t,n){if(t.length===0||e.length===0)throw new Error("Index incrementing unsupported for scalar Tensor");if(n===void 0)n=t.length;else if(n<=0||n>t.length)throw new Error("Incorrect axis to increment on");for(let i=n-1;i>=0&&(e[i]++,!(e[i]<t[i]));--i)e[i]=0}static calculateReshapedDims(e,t){if(t.length===0){if(e.length===0||r.size(e)===1)return[];throw new Error("cannot reshape to a scalar Tensor")}let n=t.length,i=new Array(n),o=-1,a=1;for(let l=0;l<n;l++){if(t[l]<-1)throw new Error("a dimension in shape hints cannot be less than -1");if(t[l]===-1){if(o!==-1)throw new Error("at most one dimension in shape hints can be -1");o=l}else{if(t[l]===0){if(l>=e.length)throw new Error("the dimension with value zero exceeds the dimension size of the input tensor");i[l]=e[l]}else i[l]=t[l];a*=i[l]}}let s=r.size(e);if(o!==-1){if(s%a!==0)throw new Error(`the input tensor cannot be reshaped to the requested shape. Input shape: [${e}] Output shape: [${t}]`);i[o]=s/a}else if(a!==s)throw new Error("reshapedDims and originalDims don't have matching sizes");return i}static sortBasedOnPerm(e,t){return t?t.map(n=>e[n]):e.slice().reverse()}static padShape(e,t){let n=e.length;return e.map((i,o)=>i+t[o]+t[o+n])}static areEqual(e,t){return e.length!==t.length?!1:e.every((n,i)=>n===t[i])}static validateDimsAndCalcSize(e){if(e.length>6)throw new TypeError("Only rank 0 to 6 is supported for tensor shape.");let t=1;for(let n of e){if(!Number.isInteger(n))throw new TypeError(`Invalid shape: ${n} is not an integer`);if(n<0||n>2147483647)throw new TypeError(`Invalid shape: length ${n} is not allowed`);t*=n}return t}static flattenShape(e,t){t<0&&(t+=e.length);let n=e.reduce((a,s)=>a*s,1),i=e.slice(t).reduce((a,s)=>a*s,1);return[n/i,i]}static squeezeShape(e,t){let n=new Array;t=r.normalizeAxes(t,e.length);for(let i=0;i<e.length;i++){let o=t.indexOf(i)>=0;if(o&&e[i]!==1)throw new Error("squeeze an axis of size different than 1");(t.length===0&&e[i]>1||t.length>0&&!o)&&n.push(e[i])}return n}static unsqueezeShape(e,t){let n=new Array(e.length+t.length);n.fill(0);for(let o=0;o<t.length;o++){let a=r.normalizeAxis(t[o],n.length);if(a>=n.length)throw new Error("'axes' has an out of range axis");if(n[a]!==0)throw new Error("'axes' has a duplicate axis");n[a]=1}let i=0;for(let o=0;o<n.length;o++)n[o]===0&&(n[o]=e[i++]);if(i!==e.length)throw new Error("the unsqueezed dimension could not be established");return n}},so=class r{static splitShape(e,t,n,i){if(n.length===0){if(!i)throw new Error("need to know number of outputs when the 'split' attribute is not specified");r.determineSplit(e[t],i,n)}let o=[],a=[0];for(let s=0;s<n.length;++s){s!==0&&a.push(a[s-1]+n[s-1]);let l=e.slice();l[t]=n[s],o.push(l)}return[o,a]}static determineSplit(e,t,n){if(e%t!==0)throw new Error("cannot split tensor to equal sized parts");for(let i=0;i<t;++i)n.push(e/t)}},Qr=class r{static adjustPoolAttributes(e,t,n,i,o,a){if(!e&&n.length!==t.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(e)for(let s=0;s<t.length-2;s++)s>=n.length?n.push(t[s+2]):n[s]=t[s+2];for(let s=0;s<n.length;s++)if(s<i.length){if(i[s]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let s=0;s<n.length;s++)if(s<o.length){if(o[s]<0)throw new Error("dilations should be greater than or equal to 1")}else o.push(1);for(let s=0;s<n.length*2;s++)if(s<a.length){if(a[s]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let s=0;s<n.length;s++){if(n[s]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[s]>=n[s]||a[s+n.length]>=n[s])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(e,t,n,i,o,a){if(a){if(o.length!==2*(e.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(t.length!==e.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==e.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let s=0;s<e.length-2;s++)r.adjustPadAndReturnShape(e[s+2],t[s],n[s],i[s],o,s,s+e.length-2,a)}}static computePoolOutputShape(e,t,n,i,o,a,s){if(t.length<=0)throw new Error("input shape must be of size greater than 0");let l=[t[0],t[1]];return r.computeShapeHelper(e,t,l,n,i,o,a,s),l}static computeConvOutputShape(e,t,n,i,o,a,s){if(e.length<=0||t.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[e[0],t[0]];return r.computeShapeHelper(!1,e,l,n,i,o,a,s),l}static computeShapeHelper(e,t,n,i,o,a,s,l){if(e)for(let d=0;d<t.length-2;d++)n.push(1);else for(let d=0;d<t.length-2;d++)n.push(r.adjustPadAndReturnShape(t[d+2],i[d],o[d],a[d],s,d,d+t.length-2,l))}static adjustPadAndReturnShape(e,t,n,i,o,a,s,l){let d=n*(i-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return o[a]=0,o[s]=0,Math.floor((e-d)/t+1);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let g=((e+t-1)/t-1)*t+i-e;return o[a]=Math.floor(l==="SAME_LOWER"?(g+1)/2:g/2),o[s]=g-o[a],Math.floor((e+g-i)/t+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((e+o[a]+o[s]-d)/t+1)}},ei=-34028234663852886e22,ti=34028234663852886e22});function kj(r){switch(r){case"bool":case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;case"float64":return 8;default:throw new Error(`cannot calculate sizeof() on type ${r}`)}}function W_(r){switch(r){case ze.onnx.TensorProto.DataType.UINT8:case ze.onnx.TensorProto.DataType.INT8:case ze.onnx.TensorProto.DataType.BOOL:return 1;case ze.onnx.TensorProto.DataType.UINT16:case ze.onnx.TensorProto.DataType.INT16:return 2;case ze.onnx.TensorProto.DataType.FLOAT:case ze.onnx.TensorProto.DataType.INT32:case ze.onnx.TensorProto.DataType.UINT32:return 4;case ze.onnx.TensorProto.DataType.INT64:case ze.onnx.TensorProto.DataType.DOUBLE:case ze.onnx.TensorProto.DataType.UINT64:return 8;default:throw new Error(`cannot calculate sizeof() on type ${ze.onnx.TensorProto.DataType[r]}`)}}function jj(r,e){return new(K_(e))(r)}function K_(r){switch(r){case"bool":case"uint8":return Uint8Array;case"int8":return Int8Array;case"int16":return Int16Array;case"uint16":return Uint16Array;case"int32":return Int32Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"float32":return Float32Array;case"float64":return Float64Array;default:throw new Error("unspecified error")}}function Jl(r,e){if(e===ze.onnx.TensorProto.DataType.INT64||e===no.TensorDataType.INT64){if(r.greaterThanOrEqual(2147483648)||r.lessThan(-2147483648))throw new TypeError("int64 is not supported")}else if(e===ze.onnx.TensorProto.DataType.UINT32||e===no.TensorDataType.UINT32||e===ze.onnx.TensorProto.DataType.UINT64||e===no.TensorDataType.UINT64){if(r.greaterThanOrEqual(4294967296)||r.lessThan(0))throw new TypeError("uint64 is not supported")}else throw new TypeError(`not a LONG type: ${ze.onnx.TensorProto.DataType[e]}`);return r.toNumber()}function H_(r,e,t){switch(e){case ze.onnx.TensorProto.DataType.BOOL:case ze.onnx.TensorProto.DataType.UINT8:return r.getUint8(t);case ze.onnx.TensorProto.DataType.INT8:return r.getInt8(t);case ze.onnx.TensorProto.DataType.UINT16:return r.getUint16(t,!0);case ze.onnx.TensorProto.DataType.INT16:return r.getInt16(t,!0);case ze.onnx.TensorProto.DataType.FLOAT:return r.getFloat32(t,!0);case ze.onnx.TensorProto.DataType.INT32:return r.getInt32(t,!0);case ze.onnx.TensorProto.DataType.UINT32:return r.getUint32(t,!0);case ze.onnx.TensorProto.DataType.INT64:return Jl(Pr.fromBits(r.getUint32(t,!0),r.getUint32(t+4,!0),!1),e);case ze.onnx.TensorProto.DataType.DOUBLE:return r.getFloat64(t,!0);case ze.onnx.TensorProto.DataType.UINT64:return Jl(Pr.fromBits(r.getUint32(t,!0),r.getUint32(t+4,!0),!0),e);default:throw new Error(`cannot read from DataView for type ${ze.onnx.TensorProto.DataType[e]}`)}}var q_,ze,Tt,ni=X(()=>{"use strict";q_=Re(cb());bu();ro();ze=Re(Ti());tt();Tt=class r{constructor(e,t,n,i,o,a=q_.Guid.create()){this.dims=e;this.type=t;this.dataProvider=n;this.asyncDataProvider=i;this.cache=o;this.dataId=a;this.size=be.validateDimsAndCalcSize(e);let s=this.size,l=n===void 0&&i===void 0&&o===void 0;if(o!==void 0&&o.length!==s)throw new RangeError("Input dims doesn't match data length.");if(t==="string"){if(o!==void 0&&(!Array.isArray(o)||!o.every(d=>typeof d=="string")))throw new TypeError("cache should be a string array");l&&(this.cache=new Array(s))}else{if(o!==void 0){let d=K_(t);if(!(o instanceof d))throw new TypeError(`cache should be type ${d.name}`)}if(l){let d=new ArrayBuffer(s*kj(t));this.cache=jj(d,t)}}}get data(){if(this.cache===void 0){let e=this.dataProvider(this.dataId);if(e.length!==this.size)throw new Error("Length of data provided by the Data Provider is inconsistent with the dims of this Tensor.");this.cache=e}return this.cache}get stringData(){if(this.type!=="string")throw new TypeError("data type is not string");return this.data}get integerData(){switch(this.type){case"uint8":case"int8":case"uint16":case"int16":case"int32":case"uint32":case"bool":return this.data;default:throw new TypeError("data type is not integer (uint8, int8, uint16, int16, int32, uint32, bool)")}}get floatData(){switch(this.type){case"float32":case"float64":return this.data;default:throw new TypeError("data type is not float (float32, float64)")}}get numberData(){if(this.type!=="string")return this.data;throw new TypeError("type cannot be non-number (string)")}get(e){return this.data[be.indicesToOffset(e,this.strides)]}set(e,t){this.data[be.indicesToOffset(e,this.strides)]=t}async getData(){return this.cache===void 0&&(this.cache=await this.asyncDataProvider(this.dataId)),this.cache}get strides(){return this._strides||(this._strides=be.computeStrides(this.dims)),this._strides}static fromProto(e){if(!e)throw new Error("cannot construct Value from an empty tensor");let t=Dt.tensorDataTypeFromProto(e.dataType),n=Dt.tensorDimsFromProto(e.dims),i=new r(n,t);if(t==="string")e.stringData.forEach((o,a)=>{i.data[a]=uo(o)});else if(e.rawData&&typeof e.rawData.byteLength=="number"&&e.rawData.byteLength>0){let o=i.data,a=new DataView(e.rawData.buffer,e.rawData.byteOffset,e.rawData.byteLength),s=W_(e.dataType),l=e.rawData.byteLength/s;if(e.rawData.byteLength%s!==0)throw new Error("invalid buffer length");if(o.length!==l)throw new Error("buffer length mismatch");for(let d=0;d<l;d++){let h=H_(a,e.dataType,d*s);o[d]=h}}else{let o;switch(e.dataType){case ze.onnx.TensorProto.DataType.FLOAT:o=e.floatData;break;case ze.onnx.TensorProto.DataType.INT32:case ze.onnx.TensorProto.DataType.INT16:case ze.onnx.TensorProto.DataType.UINT16:case ze.onnx.TensorProto.DataType.INT8:case ze.onnx.TensorProto.DataType.UINT8:case ze.onnx.TensorProto.DataType.BOOL:o=e.int32Data;break;case ze.onnx.TensorProto.DataType.INT64:o=e.int64Data;break;case ze.onnx.TensorProto.DataType.DOUBLE:o=e.doubleData;break;case ze.onnx.TensorProto.DataType.UINT32:case ze.onnx.TensorProto.DataType.UINT64:o=e.uint64Data;break;default:throw new Error("unspecific error")}if(o==null)throw new Error("failed to populate data from a tensorproto value");let a=i.data;if(a.length!==o.length)throw new Error("array length mismatch");for(let s=0;s<o.length;s++){let l=o[s];Pr.isLong(l)?a[s]=Jl(l,e.dataType):a[s]=l}}return i}static fromData(e,t,n){return new r(t,n,void 0,void 0,e)}static fromOrtTensor(e){if(!e)throw new Error("cannot construct Value from an empty tensor");let t=Dt.tensorDimsFromORTFormat(e),n=Dt.tensorDataTypeFromProto(e.dataType()),i=new r(t,n);if(n==="string")for(let o=0;o<e.stringDataLength();o++)i.data[o]=e.stringData(o);else if(e.rawDataArray()&&typeof e.rawDataLength()=="number"&&e.rawDataLength()>0){let o=i.data,a=new DataView(e.rawDataArray().buffer,e.rawDataArray().byteOffset,e.rawDataLength()),s=W_(e.dataType()),l=e.rawDataLength()/s;if(e.rawDataLength()%s!==0)throw new Error("invalid buffer length");if(o.length!==l)throw new Error("buffer length mismatch");for(let d=0;d<l;d++){let h=H_(a,e.dataType(),d*s);o[d]=h}}return i}}});function Se(r){return r===1?Lj:Nj}function X_(r){let e=Se(r);return`${e.version}
      precision highp float;
      ${e.attribute} vec3 position;
      ${e.attribute} vec2 textureCoord;

      ${e.varyingVertex} vec2 TexCoords;

      void main()
      {
          gl_Position = vec4(position, 1.0);
          TexCoords = textureCoord;
      }`}function Z_(r){let e=Se(r);return`${e.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${e.varyingFrag} vec2 TexCoords;
    ${e.outputDeclaration}
    const vec2 halfCR = vec2(0.5, 0.5);

    // Custom vector types to handle higher dimenalities.
    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    `}function J_(r,e){let t=Se(r);return`
  void main() {
    int indices[${e}];
    toVec(TexCoords, indices);
    vec4 result = vec4(process(indices));
    ${t.output} = result;
  }
  `}var Lj,Nj,pt=X(()=>{"use strict";Lj={version:"",attribute:"attribute",varyingVertex:"varying",varyingFrag:"varying",texture2D:"texture2D",output:"gl_FragColor",outputDeclaration:""},Nj={version:"#version 300 es",attribute:"in",varyingVertex:"out",varyingFrag:"in",texture2D:"texture",output:"outputColor",outputDeclaration:"out vec4 outputColor;"}});var We=X(()=>{"use strict"});async function Yl(r,e=n=>0,t){return new Promise((n,i)=>{let o=0,a=()=>{if(r()){n();return}o++;let s=e(o);if(t!=null&&o>=t){i();return}setTimeout(a,s)};a()})}function ya(r){return xi(typeof r<"u"&&r.length!==0,()=>"empty string found for sampler name"),"get"+r.charAt(0).toUpperCase()+r.slice(1)}function Y_(r){return xi(typeof r<"u"&&r.length!==0,()=>"empty string found for sampler name"),"get"+r.charAt(0).toUpperCase()+r.slice(1)+"AtOutCoords"}function Ii(r,e){let t=JSON.parse(JSON.stringify(r));return t=e,t}function Si(r,e){return e.map(t=>r[t]).join(", ")}function Nt(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error(`GPU for rank ${r} is not yet supported`)}function gn(r=6){return["x","y","z","w","u","v"].slice(0,r)}var or=X(()=>{"use strict";tt()});function Rj(r,e){return gn(e).map(t=>`${r}.${t}`)}function $i(r,e){return e===1?[r]:Rj(r,e)}function ar(){return`
    float getChannel(vec4 frag, int dim) {
      int modCoord = imod(dim, 2);
      return modCoord == 0 ? frag.r : frag.g;
    }

    float getChannel(vec4 frag, vec2 innerDims) {
      vec2 modCoord = mod(innerDims, 2.);
      return modCoord.x == 0. ?
        (modCoord.y == 0. ? frag.r : frag.g) :
        (modCoord.y == 0. ? frag.b : frag.a);
    }
  `}var ri=X(()=>{"use strict";or()});function zj(r,e,t){if(r===0)return"false";if(r===1)return`rc > ${e[0]}`;let n="";for(let i=r-2;i<r;i++)n+=`${t[i]} >= ${e[i-r+2]}`,i<r-1&&(n+="||");return n}function Bj(r,e){let t=r.length;if(t===0)return"getA(), 0, 0, 0";if(t===1)return`getA(rc),
            rc + 1 >= ${r[0]} ? 0. : getA(rc + 1),
            0, 0`;let n="r, c",i="r, cp1",o="rp1, c",a="rp1, cp1",s="";if(t>2)for(let l=0;l<t-2;++l)s=s+`${e[l]},`;return`getA(${s}${n}),
          rEdge ? 0. : getA(${s}${o}),
          cEdge ? 0. : getA(${s}${i}),
          rEdge || cEdge ? 0. : getA(${s}${a})`}function Fj(r,e,t,n){return r===0||r===1?"":`
    int r = ${e[r-2]};
    int c = ${e[r-1]};
    int rp1 = ${e[r-2]} + 1;
    int cp1 = ${e[r-1]} + 1;
    bool rEdge = rp1 >= ${n};
    bool cEdge = cp1 >= ${t};
    `}var Q_,Mj,ev,tv=X(()=>{"use strict";pt();We();or();ri();Q_={name:"pack",inputNames:["A"],inputTypes:[1]},Mj=(r,e)=>{let t=Se(r.session.backend.glContext.version),n=e.dims,i=n.length,o=e.dims.length,a=Nt(o),s=$i("rc",o),l=Fj(o,s,n[n.length-2],n[n.length-1]),d;i===0?d=[1,1]:i===1?d=[n[0],1]:d=[n[o-1],n[o-2]];let h=zj(o,d,s),g=Bj(n,s),b=`
        void main() {
          ${a} rc = getOutputCoords();

          if(${h}) {
            ${t.output} = vec4(0);
          } else {
            ${l}

            ${t.output} = vec4(${g});
          }
        }
      `;return{...Q_,hasMain:!0,output:{dims:e.dims,type:e.type,textureType:2},shaderSource:b}},ev=(r,e)=>({...Q_,get:()=>Mj(r,e)})});function Ql(r){if(r.length===0)return[1,1,1];let e=1;for(let t=0;t<r.length-2;++t)e*=r[t];return[e,r.length>1?r[r.length-2]:1,r[r.length-1]]}function rv(r,e){let t=!1;return r.length===0||e.length===0?t=!0:r.length<2||e.length<2?t=r[r.length-1]===e[e.length-1]:t=r[r.length-1]===e[e.length-1]&&r[r.length-2]===e[e.length-2],t}function Gj(r){let e=be.computeStrides(r),t=["b","r","c"],n="index";return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${e.map((o,a)=>{let s=`int ${t[a]} = ${n} / ${o}`,l=a===e.length-1?`int ${t[a+1]} = ${n} - ${t[a]} * ${o}`:`index -= ${t[a]} * ${o}`;return`${s}; ${l};`}).join("")}
      return ivec3(b, r, c);
    }
  `}function Wj(r){let e=be.computeStrides(r);return`
  int getFlattenedIndex(ivec3 coords) {
    // reverse y, z order
    return coords.x * ${e[0]} + coords.z * ${e[1]} + coords.y;
  }
`}var Vj,Uj,nv,iv=X(()=>{"use strict";tt();pt();We();ri();Vj=r=>({name:"Reshape (packed)",inputTypes:[2],inputNames:["A"],cacheHint:`${r}`}),Uj=(r,e,t,n)=>{let i=e.dims,o=n,a="";for(let d=0;d<4;d++){let h="";switch(d){case 0:h="outputCoords = rc;";break;case 1:h="outputCoords = ivec3(rc.x, rc.y+1, rc.z);";break;case 2:h="outputCoords = ivec3(rc.x, rc.y, rc.z+1);";break;case 3:h="outputCoords = ivec3(rc.x, rc.y+1, rc.z+1);";break;default:throw new Error}a+=`
        ${h}
        ${d>0?"if(outputCoords.y < rows && outputCoords.z < cols){":""}
          int flattenedIndex = getFlattenedIndex(outputCoords);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flattenedIndex);
          vec2 innerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${d}] = getChannel(getA(inputRC.x, inputRC.y, inputRC.z), innerDims);

        ${d>0?"}":""}
      `}let s=Se(r.session.backend.glContext.version),l=`
      ${Gj(i)}
      ${Wj(o)}
      ${ar()}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.0);

        ivec3 outputCoords;
        int rows = ${o[2]};
        int cols = ${o[1]};

        ${a}
        ${s.output} = result;
      }
    `;return{...t,output:{dims:o,type:e.type,textureType:2},shaderSource:l,hasMain:!0}},nv=(r,e,t)=>{let n=Vj(t);return{...n,get:()=>Uj(r,e,n,t)}}});var ec,ov=X(()=>{"use strict";pt();We();ec=(r,e)=>{let t=e.shape,n=Se(r.session.backend.glContext.version),i=`
    const float FLOAT_MAX = 1.70141184e38;
    const float FLOAT_MIN = 1.17549435e-38;

    bool isNaN(float val) {
      return (val < 1.0 || 0.0 < val || val == 0.0) ? false : true;
    }

    highp vec4 encodeAsUint8(highp float v) {
      if (isNaN(v)) {
        return vec4(255, 255, 255, 255);
      }

      highp float av = abs(v);

      if(av < FLOAT_MIN) {
        return vec4(0.0, 0.0, 0.0, 0.0);
      } else if(v > FLOAT_MAX) {
        return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
      } else if(v < -FLOAT_MAX) {
        return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
      }

      highp vec4 c = vec4(0,0,0,0);

      highp float e = floor(log2(av));
      highp float m = exp2(fract(log2(av))) - 1.0;

      c[2] = floor(128.0 * m);
      m -= c[2] / 128.0;
      c[1] = floor(32768.0 * m);
      m -= c[1] / 32768.0;
      c[0] = floor(8388608.0 * m);

      highp float ebias = e + 127.0;
      c[3] = floor(ebias / 2.0);
      ebias -= c[3] * 2.0;
      c[2] += floor(ebias) * 128.0;

      c[3] += 128.0 * step(0.0, -v);

      return c / 255.0;
    }

    void main() {
      float value = ${n.texture2D}(X,TexCoords).r;
      ${n.output} = encodeAsUint8(value);
    }`,o={name:"Uint8Encode",inputTypes:[0],inputNames:["X"],output:{dims:t,type:e.tensor.type,textureType:3},shaderSource:i,hasMain:!0};return r.executeProgram(o,[e.tensor])}});function qj(r,e){if(r===1)return"rc";let t="";for(let n=0;n<r;n++)t+=e[n],n<r-1&&(t+=",");return t}var av,Hj,sv,uv=X(()=>{"use strict";pt();We();or();ri();av={name:"unpack",inputNames:["A"],inputTypes:[2]},Hj=(r,e)=>{let t=e.dims.length,n=$i("rc",t),i=n.slice(-2),o=Nt(t),a=ar(),l=e.dims.length===0?"":qj(t,n),d=t<=1?"rc":`vec2(${i.join(",")})`,h=Se(r.session.backend.glContext.version),g=`
    ${a}
    void main() {
      ${o} rc = getOutputCoords();

       // Sample the texture with the coords to get the rgba channel value.
       vec4 packedInput = getA(${l});

       ${h.output} = vec4(getChannel(packedInput, ${d}), 0, 0, 0);
     }
   `;return{...av,hasMain:!0,output:{dims:e.dims,type:e.type,textureType:0},shaderSource:g}},sv=(r,e)=>({...av,get:()=>Hj(r,e)})});var ba,lo,_a,co=X(()=>{"use strict";Yt();ba=class{constructor(e,t=1){if(t===1)this.internalFormat=e.R32F,this.format=e.RED,this.textureType=e.FLOAT,this.channelSize=t;else if(t===4)this.internalFormat=e.RGBA32F,this.format=e.RGBA,this.textureType=e.FLOAT,this.channelSize=t;else throw new Error(`Invalid number of channels: ${t}`)}encode(e,t){let n,i;return e.constructor!==Float32Array&&(rt.warning("Encoder","data was not of type Float32; creating new Float32Array"),i=new Float32Array(e)),t*this.channelSize>e.length?(rt.warning("Encoder","Source data too small. Allocating larger array"),i=e,n=this.allocate(t*this.channelSize),i.forEach((o,a)=>n[a]=o)):(i=e,n=i),n}allocate(e){return new Float32Array(e*4)}decode(e,t){return this.channelSize===1?e.filter((i,o)=>o%4===0).subarray(0,t):e.subarray(0,t)}},lo=class{constructor(e,t=1,n){if(t!==1&&t!==4)throw new Error(`Invalid number of channels: ${t}`);this.internalFormat=e.RGBA,this.format=e.RGBA,this.channelSize=t,this.textureType=n||e.FLOAT}encode(e,t){let n=e;return this.channelSize===1&&(rt.verbose("Encoder","Exploding into a larger array"),n=this.allocate(t),e.forEach((i,o)=>n[o*4]=i)),n}allocate(e){return new Float32Array(e*4)}decode(e,t){return this.channelSize===1?e.filter((i,o)=>o%4===0).subarray(0,t):e.subarray(0,t)}},_a=class{constructor(e,t=1){this.channelSize=4;if(t===1)this.internalFormat=e.ALPHA,this.format=e.ALPHA,this.textureType=e.UNSIGNED_BYTE,this.channelSize=t;else if(t===4)this.internalFormat=e.RGBA,this.format=e.RGBA,this.textureType=e.UNSIGNED_BYTE,this.channelSize=t;else throw new Error(`Invalid number of channels: ${t}`)}encode(e,t){return new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}allocate(e){return new Uint8Array(e*this.channelSize)}decode(e,t){if(e instanceof Uint8Array)return e.subarray(0,t);throw new Error(`Invalid array type: ${e.constructor}`)}}});var fo,lv,tc,cv=X(()=>{"use strict";tt();We();fo=(r,e,t)=>{let n=t===0||t===1?1:4,i=t===2,o=t===1||t===2,a=t===4?e.length-1:void 0,s=t===4?e.map((l,d)=>d===e.length-1?l*4:l):void 0;return tc(r,e,n,s,{isPacked:i,reverseWH:o,breakAxis:a})},lv=(r,e,t)=>{let n=fo(r,e,t);return[n.width,n.height]},tc=(r,e,t=1,n,i)=>{let o=!!(i&&i.isPacked),[a,s]=r.computeTextureWH(o&&n||e,i),l=e.length,d=e.slice(0);if(l===0&&(d=[1]),t===1)n=e;else if(o){if(t!==4)throw new Error("a packed texture must be 4-channel");n=e,l>0&&(d[l-1]=Math.ceil(d[l-1]/2)),l>1&&(d[l-2]=Math.ceil(d[l-2]/2))}else if(!n)throw new Error("Unpacked shape is needed when using channels > 1");return{width:a,height:s,channels:t,isPacked:o,shape:d,strides:be.computeStrides(d),unpackedShape:n,reversedWH:i&&i.reverseWH}}});var Xj,va,fv=X(()=>{"use strict";Yt();ni();tt();tv();iv();ov();uv();co();cv();We();Xj=(r,e)=>{let t=e.map(i=>`${i.unpackedShape.join(",")};${i.width}x${i.height}`).join("_"),n=r.name;return r.cacheHint&&(n+="["+r.cacheHint+"]"),n+=":"+t,n},va=class{constructor(e){this.session=e;this.packedTextureDataCache=new Map,this.unpackedTextureDataCache=new Map}calculateTextureWidthAndHeight(e,t){return lv(this.session.layoutStrategy,e,t)}executeProgram(e,t){if(t.length<e.inputNames.length)throw new Error(`Input size mustn't be less than ${e.inputNames.length}.`);if(e.inputNames.length!==e.inputTypes.length)throw new Error("input names size does not match input types");let n=[];for(let d=0;d<e.inputNames.length;++d)n[d]=this.getOrCreateTextureData(t[d],e.inputTypes[d]);let i=Xj(e,n),o=this.session.programManager.getArtifact(i),a=o?o.programInfo:typeof e.get=="function"?e.get():e,s=fo(this.session.layoutStrategy,a.output.dims,a.output.textureType),l=this.createTextureData(s,a.output.type);return o||(o=this.session.programManager.build(a,n,l),this.session.programManager.setArtifact(i,o)),this.runProgram(o,n,l),l}run(e,t){return this.executeProgram(e,t).tensor}runProgram(e,t,n){for(let i=0;i<t.length;++i)if(!!t[i].isPacked!=(e.programInfo.inputTypes[i]===2))throw new Error(`input[${i}] property packed inconsistent`);if(!!n.isPacked!=(e.programInfo.output.textureType===2))throw new Error("output property packed inconsistent");this.session.programManager.run(e,t,n)}getOrCreateTextureData(e,t){let n=this.getTextureData(e.dataId,t===2);if(!n&&(n=this.getTextureData(e.dataId,t!==2),n))return t===2?this.pack(n):this.unpack(n);if(!n){let i=fo(this.session.layoutStrategy,e.dims,t);if(t===4){let s=e.dims;if(s.length===4){let l=[s[0],Math.ceil(s[1]*s[2]*s[3]/4)],d=fo(this.session.layoutStrategy,l,t),h=e.numberData;if(s[1]*s[2]*s[3]%4!==0){let g=s[0],b=s[1]*s[2]*s[3],w=Math.ceil(b*1/4)*4,T=g*w;h=new Float32Array(T);for(let I=0;I<g;++I){let O=I*b,S=I*w+I%1*b;h.set(e.numberData.subarray(O,O+b),S)}}return this.createTextureData(d,e.type,h,e,1)}}if(t===2){let o=tc(this.session.layoutStrategy,e.dims,1,[],{reverseWH:!0}),a=this.createTextureData(o,e.type,e.numberData,e,1);n=this.pack(a)}else n=this.createTextureData(i,e.type,e.numberData,e,1)}return n}createTextureDataFromLayoutBindTensor(e,t,n,i){return this.createTextureData(e,t,n,i,1)}createTextureData(e,t,n,i,o){rt.verbose("InferenceHandler",`Creating TextureData: layout:[${JSON.stringify(e)}]`);let a=this.session.textureManager.createTextureFromLayout(t,e,n,o);return this.createTextureDataFromTexture(e,t,a,i)}reshapeUnpacked(e,t){let n=this.getOrCreateTextureData(e,0),i={channels:n.channels,height:n.height,width:n.width,shape:t.length!==0?t:[1],strides:be.computeStrides(t),unpackedShape:t};return this.createTextureDataFromTexture(i,e.type,n.texture).tensor}reshapePacked(e,t){let n=this.getOrCreateTextureData(e,2);if(rv(e.dims,t)){let d={channels:n.channels,height:n.height,width:n.width,shape:t.length!==0?t:[1],strides:be.computeStrides(t),unpackedShape:t,isPacked:!0};return this.createTextureDataFromTexture(d,e.type,n.texture).tensor}let i=Ql(e.dims),o=Ql(t),a=this.reshapePacked(e,i),s=this.run(nv(this,a,o),[a]);return this.reshapePacked(s,t)}cast(e,t){let n=this.getOrCreateTextureData(e,0);return this.createTextureDataFromTexture(n,t,n.texture).tensor}createTextureDataFromTexture(e,t,n,i,o){let a={...e,tensor:i||new Tt(e.unpackedShape,t,s=>this.readTexture(a),async s=>this.readTextureAsync(a),void 0,o),texture:n};return this.setTextureData(a.tensor.dataId,a,e.isPacked),a}getTextureData(e,t=!1){return this.session.isInitializer(e)?this.session.getTextureData(e,t):t?this.packedTextureDataCache.get(e):this.unpackedTextureDataCache.get(e)}setTextureData(e,t,n=!1){this.session.isInitializer(e)?this.session.setTextureData(e,t,n):(n?this.packedTextureDataCache:this.unpackedTextureDataCache).set(e,t)}isTextureLayoutCached(e,t=!1){return!!this.getTextureData(e.dataId,t)}dispose(){this.session.textureManager.clearActiveTextures(),this.packedTextureDataCache.forEach(e=>this.session.textureManager.releaseTexture(e)),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache.forEach(e=>this.session.textureManager.releaseTexture(e)),this.unpackedTextureDataCache=new Map}readTexture(e){return e.isPacked?this.readTexture(this.unpack(e)):this.session.backend.glContext.isFloat32DownloadSupported?this.session.textureManager.readTexture(e,e.tensor.type,e.channels):this.session.textureManager.readUint8TextureAsFloat(ec(this,e))}async readTextureAsync(e){return e.isPacked?this.readTextureAsync(this.unpack(e)):this.session.backend.glContext.isFloat32DownloadSupported?this.session.textureManager.readTextureAsync(e,e.tensor.type,e.channels):this.session.textureManager.readUint8TextureAsFloat(ec(this,e))}pack(e){return this.executeProgram(ev(this,e.tensor),[e.tensor])}unpack(e){return this.executeProgram(sv(this,e.tensor),[e.tensor])}}});var nc,Me,Ct=X(()=>{"use strict";nc=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Me=r=>new nc(r)});var pv,hv,mv,Zj,Jj,gv=X(()=>{"use strict";Ct();pt();We();pv={name:"BatchNormalization",inputNames:["A","Scale","B","Mean","Variance"],inputTypes:[0,0,0,0,0]},hv=(r,e,t)=>(Jj(e),[r.run({...pv,cacheHint:t.cacheKey,get:()=>Zj(r,e,t)},e)]),mv=r=>{let e=r.attributes.getFloat("epsilon",1e-5),t=r.attributes.getFloat("momentum",.9),n=r.attributes.getInt("spatial",1);return Me({epsilon:e,momentum:t,spatial:n})},Zj=(r,e,t)=>{let n=Se(r.session.backend.glContext.version),i=e[0].dims.length,[o,a]=r.calculateTextureWidthAndHeight(e[1].dims,0),s=`
  float process(int[${i}] indices) {
    vec2 position = offsetToCoords(indices[1], ${o}, ${a});
    float scale = getColorAsFloat(${n.texture2D}(Scale, position));
    float mean = getColorAsFloat(${n.texture2D}(Mean, position));
    float variance = getColorAsFloat(${n.texture2D}(Variance, position));
    float b = getColorAsFloat(${n.texture2D}(B, position));

    return scale * ( (_A(indices) - mean) / sqrt(variance + float(${t.epsilon})) ) + b;
  }`;return{...pv,output:{dims:e[0].dims,type:e[0].type,textureType:0},shaderSource:s}},Jj=r=>{if(!r||r.length!==5)throw new Error("BatchNormalization requires 5 inputs.");let e=r[0],t=r[1],n=r[2],i=r[3],o=r[4];if(e.dims.length<3||t.dims.length!==1||n.dims.length!==1||i.dims.length!==1||o.dims.length!==1)throw new Error("invalid input shape.");if(t.dims[0]!==e.dims[1]||n.dims[0]!==e.dims[1]||i.dims[0]!==e.dims[1]||o.dims[0]!==e.dims[1])throw new Error("invalid input shape.");if(e.type!=="float32"&&e.type!=="float64"||t.type!=="float32"&&t.type!=="float64"||n.type!=="float32"&&n.type!=="float64"||i.type!=="float32"&&i.type!=="float64"||o.type!=="float32"&&o.type!=="float64")throw new Error("invalid input tensor types.")}});var wa,on,pe,po,Ta,vr=X(()=>{"use strict";wa=class{constructor(e,t,n,i){this.glContext=e;this.programInfo=t;this.inputTextureLayouts=n;this.outputTextureLayout=i}},on=class{constructor(e){this.context=e}},pe=class{constructor(e,t){this.routineBody=e;this.dependencies=t}},po=class{constructor(e,t,n){this.name=e;n?this.dependencies=n:this.dependencies=[],t&&(this.routineBody=t)}addDependency(e){e&&this.dependencies.push(e)}},Ta=class{static returnOrderedNodes(e){if(!e||e.length===0)return[];if(e.length===1)return e;let t=new Set,n=new Set,i=new Array;return this.createOrderedNodes(e,t,n,i),i}static createOrderedNodes(e,t,n,i){for(let o=0;o<e.length;++o)this.dfsTraverse(e[o],t,n,i)}static dfsTraverse(e,t,n,i){if(!e||n.has(e.name))return;if(t.has(e.name))throw new Error("Cyclic dependency detected. Can't topologically sort routines needed for shader.");t.add(e.name);let o=e.dependencies;if(o&&o.length>0)for(let a=0;a<o.length;++a)this.dfsTraverse(o[a],t,n,i);i.push(e),n.add(e.name),t.delete(e.name)}}});function Qj(){let r="add_";return{body:`
  float ${r}(float a, float b) {
    return a + b;
  }
  vec4 ${r}(vec4 v1, vec4 v2) {
    return v1 + v2;
  }
  `,name:r,type:0}}function eL(){let r="div_";return{body:`
  float ${r}(float a, float b) {
    return a / b;
  }
  vec4 ${r}(vec4 v1, vec4 v2) {
    return v1 / v2;
  }
  `,name:r,type:0}}function tL(){let r="mul_";return{body:`
  float ${r}(float a, float b) {
    return a * b;
  }
  vec4 ${r}(vec4 v1, vec4 v2) {
    return v1 * v2;
  }
  `,name:r,type:0}}function nL(){let r="sub_";return{body:`
  float ${r}(float a, float b) {
    return a - b;
  }
  vec4 ${r}(vec4 v1, vec4 v2) {
    return v1 - v2;
  }
  `,name:r,type:0}}function rL(){let r="equal_";return{body:`
  float ${r}(float a, float b) {
    return float(a == b);
  }
  vec4 ${r}(vec4 v1, vec4 v2) {
    return vec4(equal(v1, v2));
  }
  `,name:r,type:0}}function iL(){let r="greater_";return{body:`
  float ${r}(float a, float b) {
    return float(a > b);
  }
  vec4 ${r}(vec4 v1, vec4 v2) {
    return vec4( v1.r > v2.r ,
      v1.g > v2.g,
      v1.b > v2.b,
      v1.a > v2.a );
  }
  `,name:r,type:0}}function oL(){let r="less_";return{body:`
  float ${r}(float a, float b) {
    return float(a < b);
  }
  vec4 ${r}(vec4 v1, vec4 v2) {
    return vec4( v1.r < v2.r ,
                v1.g < v2.g,
                v1.b < v2.b,
                v1.a < v2.a );
  }
  `,name:r,type:0}}function aL(){let r="and_";return{body:`
  float ${r}(float a, float b) {
    return float( bool(a) && bool(b) );
  }
  vec4 ${r}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r && b2.r ,
                b1.g && b2.g,
                b1.b && b2.b,
                b1.a && b2.a );
  }
  `,name:r,type:0}}function sL(){let r="or_";return{body:`
  float ${r}(float a, float b) {
    return float( bool(a) || bool(b) );
  }
  vec4 ${r}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r || b2.r ,
                b1.g || b2.g,
                b1.b || b2.b,
                b1.a || b2.a );
  }
  `,name:r,type:0}}function uL(){let r="xor_";return{body:`
  float ${r}(float a, float b) {
    return float( bool(a) ^^ bool(b) );
  }
  vec4 ${r}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r ^^ b2.r ,
                b1.g ^^ b2.g,
                b1.b ^^ b2.b,
                b1.a ^^ b2.a );
  }
  `,name:r,type:0}}function lL(){return dL("pow")}function cL(){let r="prelu_";return{body:`
  float ${r}(float a, float b) {
    return a < 0.0 ? a * b: a;
  }
  vec4 ${r}(vec4 v1, vec4 v2) {
    return vec4(
      v1.r < 0.0 ? v1.r * v2.r: v1.r,
      v1.g < 0.0 ? v1.g * v2.g: v1.g,
      v1.b < 0.0 ? v1.b * v2.b: v1.b,
      v1.a < 0.0 ? v1.a * v2.a: v1.a
      );
  }
  `,name:r,type:0}}function dL(r){let e=`${r}_`;return{body:`
  float ${e}(float a, float b) {
    return ${r}(a, b);
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return ${r}(v1, v2);
  }
  `,name:e,type:0}}var an,fL,yv,bv,_v,vv,wv,Tv,xv,Iv,Sv,$v,Av,Cv,Ov=X(()=>{"use strict";tt();vr();pt();We();an=(r,e,t,n=e[0].type,i)=>{let o=r.session.pack?2:0;return{name:t.name,inputNames:["A","B"],inputTypes:[o,o],cacheHint:i,get:()=>fL(r,e,t,n)}},fL=(r,e,t,n=e[0].type)=>{let i=r.session.pack?2:0,o=!be.areEqual(e[0].dims,e[1].dims),a=e[0].dims,s=r.session.pack;if(o){let h=Lt.calcShape(e[0].dims,e[1].dims,!1);if(!h)throw new Error("Can't perform binary op on the given tensors");a=h;let g=a.length,b=e[0].dims.length!==0?e[0].dims.length:1,w=e[1].dims.length!==0?e[1].dims.length:1,T=e[0].dims.length!==0?"bcastIndices_A(indices, aindices);":"aindices[0] = 0;",I=e[1].dims.length!==0?"bcastIndices_B(indices, bindices);":"bindices[0] = 0;",O=Se(r.session.backend.glContext.version),S=s?`
      ${t.body}
      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();
        vec4 result = ${t.name}(a, b);
        ${O.output} = result;
      }`:`
      ${t.body}
      float process(int indices[${g}]) {
        int aindices[${b}];
        int bindices[${w}];
        ${T}
        ${I}
        return ${t.name}(_A(aindices), _B(bindices));
      }`;return{name:t.name,inputNames:["A","B"],inputTypes:[i,i],output:{dims:a,type:n,textureType:i},shaderSource:S,hasMain:s}}let l=Se(r.session.backend.glContext.version),d=`
    ${t.body}
    void main() {
      vec4 v1 = ${l.texture2D}(A, TexCoords);
      vec4 v2 = ${l.texture2D}(B, TexCoords);
      vec4 result = ${t.name}(v1, v2);
      ${l.output} = result;
    }
    `;return{name:t.name,inputNames:["A","B"],inputTypes:[i,i],output:{dims:e[0].dims,type:n,textureType:i},shaderSource:d,hasMain:!0}},yv=(r,e)=>[r.run(an(r,e,Qj()),e)],bv=(r,e)=>[r.run(an(r,e,aL(),"bool"),e)],_v=(r,e)=>[r.run(an(r,e,eL()),e)],vv=(r,e)=>[r.run(an(r,e,rL(),"bool"),e)],wv=(r,e)=>[r.run(an(r,e,iL(),"bool"),e)],Tv=(r,e)=>[r.run(an(r,e,oL(),"bool"),e)],xv=(r,e)=>[r.run(an(r,e,tL()),e)],Iv=(r,e)=>[r.run(an(r,e,sL(),"bool"),e)],Sv=(r,e)=>[r.run(an(r,e,lL()),e)],$v=(r,e)=>[r.run(an(r,e,cL()),e)],Av=(r,e)=>[r.run(an(r,e,nL()),e)],Cv=(r,e)=>[r.run(an(r,e,uL(),"bool"),e)]});var Pv,Ev,hL,Dv=X(()=>{"use strict";tt();Pv=(r,e,t)=>(hL(e),[r.cast(e[0],t)]),Ev=r=>Dt.tensorDataTypeFromProto(r.attributes.getInt("to")),hL=r=>{if(!r||r.length!==1)throw new Error("Cast requires 1 input.");if(r[0].type==="string")throw new Error("Invalid input type.")}});var mL,gL,kv,xa,jv=X(()=>{"use strict";pt();We();or();ri();mL=(r,e)=>({name:"Concat (packed)",inputNames:Array.from({length:r},(t,n)=>`X${n}`),inputTypes:Array(r).fill(2),cacheHint:e}),gL=(r,e,t,n)=>{let i=t[0].dims.slice();if(n>=i.length||n<-1*i.length)throw new Error("axis specified for concat doesn't match input dimensionality");n<0&&(n=i.length+n);let o=i.slice(0);for(let V=1;V<t.length;V++){let W=t[V].dims.slice();for(let F=0;F<i.length;F++)if(F===n)o[n]+=W[F];else if(i[F]!==W[F])throw new Error("non concat dimensions must match")}let a=o.length,s=$i("coords",a),l=Nt(a),d=ar(),h=t.map(V=>V.dims),g=gn(a),b=new Array(h.length-1);b[0]=h[0][n];for(let V=1;V<b.length;V++)b[V]=b[V-1]+h[V][n];let w=g[n],T=g.slice(-2),I=g.join(),O=`if (${w} < ${b[0]}) {
        return getChannel(
            getX0(${I}), vec2(${T.join()}));
        }`;for(let V=1;V<b.length;V++){let W=b[V-1];O+=`
            if (${w} < ${b[V]}  && ${w} >= ${b[V-1]}) {
              return getChannel(
                getX${V}(${xa(g,w,W)}),
                vec2(${xa(T,w,W)}));
            }`}let S=b.length,A=b[b.length-1];O+=`
            return getChannel(
              getX${S}(${xa(g,w,A)}),
              vec2(${xa(T,w,A)}));`;let j=Se(r.session.backend.glContext.version),k=`
          ${d}
          float getValue(${g.map(V=>"int "+V)}) {
            ${O}
          }

          void main() {
            ${l} coords = getOutputCoords();
            int lastDim = coords.${g[a-1]};
            coords.${g[a-1]} = coords.${g[a-2]};
            coords.${g[a-2]} = lastDim;

            vec4 result = vec4(getValue(${s}), 0., 0., 0.);

            ${s[a-1]} = ${s[a-1]} + 1;
            if (${s[a-1]} < ${o[a-1]}) {
              result.g = getValue(${s});
            }

            ${s[a-2]} = ${s[a-2]} + 1;
            if (${s[a-2]} < ${o[a-2]}) {
              result.a = getValue(${s});
            }

            ${s[a-1]} = ${s[a-1]} - 1;
            if (${s[a-2]} < ${o[a-2]} &&
                ${s[a-1]} < ${o[a-1]}) {
              result.b = getValue(${s});
            }
            ${j.output} = result;
          }
        `;return{...e,output:{dims:o,type:t[0].type,textureType:2},shaderSource:k,hasMain:!0}},kv=(r,e,t)=>{let n=mL(e.length,t.cacheKey);return{...n,get:()=>gL(r,n,e,t.axis)}},xa=(r,e,t)=>{let n=r.indexOf(e);return r.map((o,a)=>a===n?`${o} - ${t}`:o).join()}});var Lv,yL,bL,_L,Nv,vL,wL,TL,Rv,xL,Mv=X(()=>{"use strict";Ct();We();jv();Lv=(r,e,t)=>(xL(e),r.session.pack&&e[0].dims.length>1?[r.run(kv(r,e,t),e)]:[r.run(_L(r,e,t),e)]),yL=(r,e)=>({name:"Concat",inputNames:Array.from({length:r},(t,n)=>`X${n}`),inputTypes:Array(r).fill(0),cacheHint:e}),bL=(r,e,t,n)=>{let i=t[0].dims.slice();if(n>=i.length||n<-1*i.length)throw new Error("axis specified for concat doesn't match input dimensionality");n<0&&(n=i.length+n);let o=i.slice(0);for(let w=1;w<t.length;w++){let T=t[w].dims.slice();for(let I=0;I<i.length;I++)if(I===n)o[n]+=T[I];else if(i[I]!==T[I])throw new Error("non concat dimensions must match")}let a=o.length,s=new Array(t.length),l=0;for(let w=0;w<s.length;++w)l+=t[w].dims[n],s[w]=l;let d="";t.length<5?d=Nv(s):d=vL(s);let h=wL(t.length,a),g=TL(s),b=`
        ${h}
        ${g}
        ${d}
        float process(int indices[${a}]) {
          int textureIndex = getTextureWhereDataResides (indices[${n}]);

          if(textureIndex != 0) {
            indices[${n}] = indices[${n}] - int(getSizeInConcatAxisValueFromIndex(textureIndex-int(1)));
          }

          return fetchDataFromCorrectTexture(textureIndex, indices);
        }`;return{...e,output:{dims:o,type:t[0].type,textureType:0},shaderSource:b}},_L=(r,e,t)=>{let n=yL(e.length,t.cacheKey);return{...n,get:()=>bL(r,n,e,t.axis)}},Nv=r=>`int getTextureWhereDataResides(int index) {
      ${r.map((t,n)=>`if(index<${t}) {return ${n};}
`).join("")}
    }`,vL=r=>Nv(r),wL=(r,e)=>{let t=[`float fetchDataFromCorrectTexture(int textureIndex, int indices[${e}]) {`];for(let n=0;n<r;++n)n===0?t.push(`	if (textureIndex == ${n}) { return _X${n}(indices); }`):n===r-1?t.push(`	else { return _X${n}(indices); }`):t.push(`	else if (textureIndex == ${n}) { return _X${n}(indices); }`);return t.push("	}"),t.join(`
`)},TL=r=>{let e=["int getSizeInConcatAxisValueFromIndex(int index) {"];for(let t=0;t<r.length;++t)t===0?e.push(`	if (index == ${t}) { return ${r[t]}; }`):t===r.length-1?e.push(`	else { return ${r[t]}; }`):e.push(`	else if (index == ${t}) { return ${r[t]}; }`);return e.push("	}"),e.join(`
`)},Rv=r=>Me({axis:r.attributes.getInt("axis")}),xL=r=>{if(!r||r.length<1)throw new Error("too few inputs");let e=r[0].type,t=r[0].dims.length;if(e==="string")throw new Error("string tensor is not supported yet");for(let n of r){if(n.type!==e)throw new Error("input tensors should be one type");if(n.dims.length!==t)throw new Error("input tensors should have the same shape")}}});function IL(){return sn("abs")}function SL(){return sn("acos")}function $L(){return sn("asin")}function AL(){return sn("atan")}function CL(){return sn("ceil")}function OL(){return sn("cos")}function PL(r){let e="elu";return{body:`
  const float alpha = float(${r});

  float ${e}_(float a) {
    return a >= 0.0 ? a: (exp(a) - 1.0) * alpha;
  }
  vec4 ${e}_(vec4 v) {
    return vec4(${e}_(v.x), ${e}_(v.y), ${e}_(v.z), ${e}_(v.w));
  }
  `,name:e,type:0}}function EL(){return sn("exp")}function DL(){return sn("floor")}function rc(r,e){let t="clip";return{body:`
  const float min = float(${r});
  const float max = float(${e});

  float ${t}_(float a) {
    return clamp(a, min, max);
  }
  vec4 ${t}_(vec4 v) {
    return clamp(v, min, max);
  }
  `,name:t,type:0}}function kL(){let r="indentity";return{body:`
  float ${r}_(float a) {
    return a;
  }
  vec4 ${r}_(vec4 v) {
    return v;
  }
  `,name:r,type:0}}function jL(r){let e="leakyRelu";return{body:`
  const float alpha = float(${r});

  float ${e}_(float a) {
    return a < 0.0 ? a * alpha : a;
  }
  vec4 ${e}_(vec4 v) {
    return vec4(${e}_(v.x), ${e}_(v.y), ${e}_(v.z), ${e}_(v.w));
  }
  `,name:e,type:0}}function LL(){return sn("log")}function NL(){let r="neg";return{body:`
  float ${r}_(float a) {
    return -a;
  }
  vec4 ${r}_(vec4 v) {
    return -v;
  }
  `,name:r,type:0}}function RL(){let r="not";return{body:`
  float ${r}_(float a) {
    return float( ! bool(a) );
  }
  bool ${r}_(bool a) {
    return !a;
  }
  vec4 ${r}_(vec4 v) {
    return vec4(!bool(v.x), !bool(v.y), !bool(v.z), !bool(v.w));
  }
  bvec4 ${r}_(bvec4 v) {
    return bvec4(!v.x, !v.y, !v.z, !v.w);
  }
  `,name:r,type:0}}function ML(){return sn("sin")}function ic(){let r="relu";return{body:`
  float ${r}_(float a) {
    return max( a, 0.0 );
  }
  vec4 ${r}_(vec4 v) {
    return max( v, 0.0 );
  }
  `,name:r,type:0}}function oc(){let r="sigmoid";return{body:`
  float ${r}_(float a) {
    return 1.0 / (1.0 + exp(-a));
  }
  vec4 ${r}_(vec4 v) {
    return 1.0 / (1.0 + exp(-v));
  }
  `,name:r,type:0}}function zL(){return sn("sqrt")}function BL(){return sn("tan")}function FL(){let r="tanh";return{body:`
  float ${r}_(float a) {
    a = clamp(a, -10., 10.);
    a = exp(2.*a);
    return (a - 1.) / (a + 1.);
  }
  vec4 ${r}_(vec4 v) {
    v = clamp(v, -10., 10.);
    v = exp(2.*v);
    return (v - 1.) / (v + 1.);
  }
  `,name:r,type:0}}function sn(r){return{body:`
  float ${r}_(float a) {
    return ${r}(a);
  }
  vec4 ${r}_(vec4 v) {
    return ${r}(v);
  }
  `,name:r,type:0}}var VL,vt,zv,Bv,Fv,Vv,ac,Uv,Gv,UL,Wv,Hv,qv,Kv,Xv,Zv,sc,Jv,Yv,Qv,ew,tw,nw,rw,iw,ow,aw,sw,uc=X(()=>{"use strict";Ct();tt();vr();pt();We();VL=(r,e,t,n)=>{let i=r.session.pack?2:0,o=Se(r.session.backend.glContext.version);return{...e,output:{dims:t.dims,type:t.type,textureType:i},shaderSource:`
     ${n.body}
     void main() {
       vec4 v = ${o.texture2D}(A, TexCoords);
       v = ${n.name}_(v);
       ${o.output} = v;
     }
     `,hasMain:!0}},vt=(r,e,t,n)=>{let i=r.session.pack?2:0,o={name:t.name,inputTypes:[i],inputNames:["A"],cacheHint:n};return{...o,get:()=>VL(r,o,e,t)}},zv=(r,e)=>[r.run(vt(r,e[0],IL()),e)],Bv=(r,e)=>[r.run(vt(r,e[0],SL()),e)],Fv=(r,e)=>[r.run(vt(r,e[0],$L()),e)],Vv=(r,e)=>[r.run(vt(r,e[0],AL()),e)],ac=(r,e,t)=>[r.run(vt(r,e[0],rc(t.min,t.max),t.cacheKey),e)],Uv=r=>Me({min:r.attributes.getFloat("min",ei),max:r.attributes.getFloat("max",ti)}),Gv=(r,e)=>{let t=UL(r,e);return ac(r,[e[0]],t)},UL=(r,e)=>{if(e.length>=3&&(!r.session.isInitializer(e[1].dataId)||!r.session.isInitializer(e[2].dataId)))throw new Error("dynamic clip attributes are not allowed");let t=e.length>=3?e[1].numberData[0]:ei,n=e.length>=3?e[2].numberData[0]:ti;return Me({min:t,max:n})},Wv=(r,e)=>[r.run(vt(r,e[0],CL()),e)],Hv=(r,e)=>[r.run(vt(r,e[0],OL()),e)],qv=(r,e,t)=>[r.run(vt(r,e[0],PL(t.alpha),t.cacheKey),e)],Kv=r=>Me({alpha:r.attributes.getFloat("alpha",1)}),Xv=(r,e)=>[r.run(vt(r,e[0],EL()),e)],Zv=(r,e)=>[r.run(vt(r,e[0],DL()),e)],sc=(r,e)=>[r.run(vt(r,e[0],kL()),e)],Jv=(r,e,t)=>[r.run(vt(r,e[0],jL(t.alpha),t.cacheKey),e)],Yv=r=>Me({alpha:r.attributes.getFloat("alpha",.01)}),Qv=(r,e)=>[r.run(vt(r,e[0],LL()),e)],ew=(r,e)=>[r.run(vt(r,e[0],NL()),e)],tw=(r,e)=>[r.run(vt(r,e[0],RL()),e)],nw=(r,e)=>[r.run(vt(r,e[0],ic()),e)],rw=(r,e)=>[r.run(vt(r,e[0],oc()),e)],iw=(r,e)=>[r.run(vt(r,e[0],ML()),e)],ow=(r,e)=>[r.run(vt(r,e[0],zL()),e)],aw=(r,e)=>[r.run(vt(r,e[0],BL()),e)],sw=(r,e)=>[r.run(vt(r,e[0],FL()),e)]});function sr(r){let e;switch(r.activation){case"Relu":e=ic();break;case"Sigmoid":e=oc();break;case"Clip":e=rc(r.clipMin,r.clipMax);break;default:return{activationFunction:"",applyActivation:""}}let t=e.name,n=e.body,i=`value = ${t}_(value);`;return{activationFunction:n,applyActivation:i}}var Ai,ii=X(()=>{"use strict";tt();uc();Ai=r=>{let e=r.getString("activation","");if(e==="Clip"){let[t,n]=r.getFloats("activation_params",[ei,ti]);return{activation:e,clipMax:n,clipMin:t,activationCacheKey:`${e}:${t},${n}`}}return{activation:e,activationCacheKey:e}}});var WL,HL,uw,lw=X(()=>{"use strict";Yt();pt();We();Ia();ii();WL=(r,e)=>({name:"GroupedConv",inputNames:r?["X","W","Bias"]:["X","W"],inputTypes:r?[0,0,0]:[0,0],cacheHint:e}),HL=(r,e,t,n)=>{let o=e.length>2?"value += getBias(output_channel);":"",a=e[0].dims.slice(),s=e[1].dims.slice(),l=s[0]/n.group;rt.verbose("GroupedConv",`autpPad:${n.autoPad}, dilations:${n.dilations}, group:${n.group}, kernelShape:${n.kernelShape}, pads:${n.pads}, strides:${n.strides}`);let d=Ci(a,s,n.dilations,n.pads,n.strides),h=Se(r.session.backend.glContext.version),{activationFunction:g,applyActivation:b}=sr(n),w=`
  const ivec2 strides = ivec2(${n.strides[0]}, ${n.strides[1]});
  const ivec2 pads = ivec2(${n.pads[0]}, ${n.pads[1]});
  ${g}
  void main() {
    ivec4 coords = getOutputCoords();
    int batch = coords.x;
    int output_channel = coords.y;
    ivec2 xRCCorner = coords.zw * strides - pads;
    int group_id = output_channel / ${l};

    float value = 0.0;
    for (int wInChannel = 0; wInChannel < ${s[1]}; wInChannel++) {
      int input_channel = group_id * ${s[1]} + wInChannel;
      for (int wHeight = 0; wHeight < ${s[2]}; wHeight++) {
        int xHeight = xRCCorner.x + wHeight * ${n.dilations[0]};

        if (xHeight < 0 || xHeight >= ${a[2]}) {
          continue;
        }

        for (int wWidth = 0; wWidth < ${s[3]}; wWidth++) {
          int xWidth = xRCCorner.y + wWidth * ${n.dilations[1]};
          if (xWidth < 0 || xWidth >= ${a[3]}) {
            continue;
          }

          float xVal = getX(batch, input_channel, xWidth, xHeight);
          float wVal = getW(output_channel, wInChannel, wWidth, wHeight);
          value += xVal*wVal;
        }
      }
    }
    ${o}
    ${b}
    ${h.output} = vec4(value, .0, .0, .0);
  }
`;return{...t,output:{dims:d,type:e[0].type,textureType:0},shaderSource:w,hasMain:!0}},uw=(r,e,t)=>{let n=WL(e.length>2,t.cacheKey);return{...n,get:()=>HL(r,e,n,t)}}});var qL,KL,cw,dw=X(()=>{"use strict";pt();We();ri();qL=r=>({name:"Im2Col (packed)",inputNames:["A"],inputTypes:[2],cacheHint:r}),KL=(r,e,t,n,i,o)=>{let a=t.dims,s=n.dims,l=2,d=3,h=i.length,g=[s[1]*s[2]*s[3],i[2]*i[3]],b=s[2]*s[3],w=ar(),T=Se(r.session.backend.glContext.version),I="";for(let S=0;S<=1;S++)for(let A=0;A<=1;A++)I+=`
            blockIndex = rc.x + ${A};
            pos = rc.y + ${S};

            if(blockIndex < ${g[1]} && pos < ${g[0]}) {
              offsetY = int(blockIndex / (${i[h-1]})) * ${o.strides[0]} -
                ${o.pads[0]};
              d0 = offsetY + ${o.dilations[0]} * (imod(pos, ${b}) / ${s[2]});

              if(d0 < ${a[l]} && d0 >= 0) {
                offsetX = imod(blockIndex, ${i[h-1]}) * ${o.strides[1]} -
                  ${o.pads[1]};
                d1 = offsetX + ${o.dilations[1]} * imod(imod(pos, ${b}), ${s[2]});

                if(d1 < ${a[d]} && d1 >= 0) {

                  ch = int(float(pos)/ ${b}.);
                    innerDims = vec2(d0, d1);
                    result[${S*2+A}] = getChannel(
                      getA(0, ch, int(innerDims.x),
                      int(innerDims.y)), innerDims);
                }
              }
            }

          `;let O=`
      ${w}

      void main() {
        ivec2 rc = getOutputCoords();
          vec4 result = vec4(0.0);
          int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
          vec2 innerDims;
          ${I}
          ${T.output} = result;
      }
            `;return{...e,output:{dims:g,type:t.type,textureType:2},shaderSource:O,hasMain:!0}},cw=(r,e,t,n,i)=>{let o=qL(i.cacheKey);return{...o,get:()=>KL(r,o,e,t,n,i)}}});function ZL(r,e,t){let n=e[0].dims,i=e[1].dims,o=Lt.calcShape(n,i,!0);if(!o)throw new Error("Can't use matmul on the given tensors");let a=Nt(o.length),s=gn(),{activationFunction:l,applyActivation:d}=sr(t),h=e.length>2,g=h?"value += getBiasForMatmul();":"",b=h?`${cc(a,s,e[2].dims,o,!1)}`:"",w=o.length,T=n.length,I=i.length,O=n[n.length-1],S=`
    ${l}
    ${b}
    float process(int indices[${w}]) {
        int a[${T}];
        int b[${I}];
        bcastMatmulIndices_A(indices, a);
        bcastMatmulIndices_B(indices, b);

        float value;
        for (int k=0; k<${O}; ++k) {
            a[${T-1}] = k;
            b[${I-2}] = k;
            value += _A(a) * _B(b);
        }
        ${g}
        ${d}
        return value;
    }`;return{...r,output:{dims:o,type:e[0].type,textureType:0},shaderSource:S}}function lc(r,e){let t=XL(r.length>2,e.activationCacheKey);return{...t,get:()=>ZL(t,r,e)}}function cc(r,e,t,n,i){let o="",a=t.length,s=n.length,l=s-a;s<2&&a>0?o="coords":o=t.map((I,O)=>`coords.${e[O+l]}`).join(", ");let h=Lt.getBroadcastDims(t,n).map(I=>`coords.${e[I+l]} = 0;`).join(`
`),b=be.size(t)===1,w="vec4(outputValue.xx, outputValue.yy)";return b&&(w="vec4(outputValue.x)"),i?`
vec4 getBiasForMatmul() {
  ${r} coords = getOutputCoords();
  ${h}
  vec4 outputValue = getBias(${o});
  return ${w};
}`:`
float getBiasForMatmul() {
  ${r} coords = getOutputCoords();
  ${h}
  return getBias(coords.x);
}`}var fw,pw,XL,JL,Sa=X(()=>{"use strict";tt();We();or();ii();dc();fw=(r,e,t)=>(JL(e),r.session.pack?[r.run($a(r,e,t),e)]:[r.run(lc(e,t),e)]),pw=r=>Ai(r.attributes),XL=(r,e)=>({name:"MatMul",inputNames:r?["A","B","Bias"]:["A","B"],inputTypes:r?[0,0,0]:[0,0],cacheHint:e});JL=r=>{if(!r||r.length!==2)throw new Error("MatMul requires 2 inputs.");if(r[0].dims[r[0].dims.length-1]!==r[1].dims[r[1].dims.length-2])throw new Error("shared dimension does not match.");if(r[0].type!=="float32"&&r[0].type!=="float64"||r[1].type!=="float32"&&r[1].type!=="float64")throw new Error("inputs should be float type");if(r[0].type!==r[1].type)throw new Error("inputs types should match")}});function eN(r,e,t,n){let i=[],o=[],a=t[0].dims,s=t[1].dims,l=a.length,d=s.length,h=n.length,g=h-l,b=h-d;i=a.map((j,k)=>`coords.${e[k+g]}`),i[l-1]="i*2",i.join(", "),o=s.map((j,k)=>`coords.${e[k+b]}`),o[d-2]="i*2",o.join(", ");let w=Lt.getBroadcastDims(a,n),T=Lt.getBroadcastDims(s,n),I=w.map(j=>`coords.${e[j+g]} = 0;`).join(`
`),O=T.map(j=>`coords.${e[j+b]} = 0;`).join(`
`),S=`int lastDim = coords.${e[h-1]};
  coords.${e[h-1]} = coords.${e[h-2]};
  coords.${e[h-2]} = lastDim;`;return`
vec4 getAAtOutCoordsMatmul(int i) {
  ${r} coords = getOutputCoords();
  ${S}
  ${I}
  vec4 outputValue = getA(${i});
  return outputValue;
}

vec4 getBAtOutCoordsMatmul(int i) {
  ${r} coords = getOutputCoords();
  ${S}
  ${O}
  vec4 outputValue = getB(${o});
  return outputValue;
}`}function tN(r,e){let t="";for(let n=0;n<e-2;n++)t+=`rc.${r[n]}, `;return t+=`rc.${r[e-2]}, i*2`,t}function nN(r,e){let t="";for(let n=0;n<e-2;n++)t+=`rc.${r[n]}, `;return t+=`i*2, rc.${r[e-1]}`,t}var YL,QL,$a,dc=X(()=>{"use strict";tt();pt();We();or();ii();Sa();YL=(r,e)=>({name:"MatMul (packed)",inputNames:r?["A","B","Bias"]:["A","B"],inputTypes:r?[2,2,2]:[2,2],cacheHint:e}),QL=(r,e,t,n)=>{let i=t.length>2,o=i?"value += getBiasForMatmul();":"",a=t[0].dims,s=t[1].dims,l=Lt.calcShape(a,s,!0),d=!be.areEqual(t[0].dims,t[1].dims);if(!l)throw new Error("Can't use matmul on the given tensors");let h=a[a.length-1],g=Math.ceil(h/2),b=a.length,w=s.length,T=Se(r.session.backend.glContext.version),I=Nt(l.length),O=l.length,S=gn(),{activationFunction:A,applyActivation:j}=sr(n),k=i?`${cc(I,S,t[2].dims,l,!0)}`:"",V=d?`${eN(I,S,t,l)}`:"",W=d?"getAAtOutCoordsMatmul(i)":`getA(${tN(S,b)})`,F=d?"getBAtOutCoordsMatmul(i)":`getB(${nN(S,w)})`,Y=d?"":`${I} rc =
          getOutputCoords(); int lastDim = rc.${S[O-1]}; rc.${S[O-1]} =
          rc.${S[O-2]}; rc.${S[O-2]} = lastDim;
      `,ee=`
            ${V}
            ${k}
            ${A}
            void main() {
              ${Y}

              vec4 value = vec4(0);
              for (int i = 0; i < ${g}; i++) {
                vec4 a = ${W};
                vec4 b = ${F};

                value += (a.rrbb * b.rgrg);
                value += (a.ggaa * b.baba);
              }
              ${o}
              ${j}
              ${T.output} = value;
            }`;return{...e,output:{dims:l,type:t[0].type,textureType:2},shaderSource:ee,hasMain:!0}},$a=(r,e,t)=>{let n=YL(e.length>2,t.activationCacheKey);return{...n,get:()=>QL(r,n,e,t)}}});var hw,mw=X(()=>{"use strict";Ia();dw();dc();hw=(r,e,t)=>{let n=e[0].dims,i=e[1].dims,o=Ci(n,i,t.dilations,t.pads,t.strides),a=r.run(cw(r,e[0],e[1],o,t),[e[0]]),s=r.reshapePacked(e[1],[i[0],i[1]*i[2]*i[3]]),l=e.length===3?[s,a,e[2]]:[s,a],d=r.run($a(r,l,t),l);return r.reshapePacked(d,o)}});var rN,iN,gw,fc,pc=X(()=>{"use strict";We();rN=r=>({name:"Im2Col",inputNames:["X"],inputTypes:[0],cacheHint:r}),iN=(r,e,t,n,i,o)=>{let a=t.dims,s=n.dims,l=i.length,d=fc(a,s,i,4),h=`
        const int XC = ${a[1]};
        const int XH = ${a[2]};
        const int XW = ${a[3]};
        const int KH = ${o.kernelShape[0]};
        const int KW = ${o.kernelShape[1]};
        const int dilationH = ${o.dilations[0]};
        const int dilationW = ${o.dilations[1]};
        const int strideH = ${o.strides[0]};
        const int strideW = ${o.strides[1]};
        const int padH = ${o.pads[0]};
        const int padW = ${o.pads[1]};
        const int KHKW = KH*KW;
        const int XCKHKW = XC * KHKW;
        const int outputChannels = 4;
        vec4 process(int indices[${l}]) {
          int b  = indices[0]; // batch size
          int oh = indices[1] * strideH - padH; //output height
          int ow = indices[2] * strideW - padW; //output width
          int p = indices[3] * outputChannels; //patch
          vec4 value = vec4(0.0);
          for(int i=0; i < outputChannels; ++i) {
            if(p < XCKHKW) {
              int patchC = p / KHKW;
              int patchH = (p - patchC*KHKW) / KW;
              int patchW = (p - patchC*KHKW) - patchH * KW;
              int xh2 = oh + patchH * dilationH;
              int xw2 = ow + patchW * dilationW;
              int x[${a.length}];
              x[0] = b;
              x[1] = patchC;
              x[2] = xh2;
              x[3] = xw2;
              if(xh2 >= 0 &&
                  xh2 < XH &&
                  xw2 >= 0 &&
                  xw2 < XW) {
                value[i] = _X(x);
              }
            }
            ++p;
          }
          return value;
        }
        `;return{...e,output:{dims:d,type:t.type,textureType:4},shaderSource:h}},gw=(r,e,t,n,i)=>{let o=rN(i.cacheKey);return{...o,get:()=>iN(r,o,e,t,n,i)}},fc=(r,e,t,n=4)=>[t[0],t[2],t[3],Math.ceil(r[1]*e[2]*e[3]/n)]});var oN,aN,yw,bw=X(()=>{"use strict";tt();pt();We();ii();pc();oN=(r,e)=>({name:"ConvDotProduct",inputNames:r?["Im2Col","K","B"]:["Im2Col","K"],inputTypes:r?[0,4,0]:[0,4],cacheKey:e.activationCacheKey}),aN=(r,e,t,n,i)=>{let o=t[0].dims,a=t[1].dims,s=[a[0],Math.ceil(o[1]*a[2]*a[3]/4)],l=fc(o,a,n),[d,h]=r.calculateTextureWidthAndHeight(s,4),g=be.computeStrides(l),[b,w]=r.calculateTextureWidthAndHeight(l,4),T=n.length,I=t.length<3?"0.0":"_B(b)",O=Math.ceil(o[1]*a[2]*a[3]/4),{activationFunction:S,applyActivation:A}=sr(i),j=Se(r.session.backend.glContext.version),k=`
${S}
float process(int indices[${T}]) {
  int b[1];
  b[0] = indices[1];
  int im2col[4];
  im2col[0] = indices[0];
  im2col[1] = indices[2];
  im2col[2] = indices[3];
  int im2colOffset = im2col[0] * ${g[0]} + im2col[1] * ${g[1]} + im2col[2] * ${g[2]};
  int kernelOffset = indices[1] * ${s[1]};
  float value = ${I};
  for (int i = 0; i < ${O}; ++i) {
    vec2 im2colCoords = offsetToCoords(im2colOffset, ${b}, ${w});
    vec2 kernelCoords = offsetToCoords(kernelOffset, ${d}, ${h});
    value += dot(${j.texture2D}(Im2Col, im2colCoords), ${j.texture2D}(K, kernelCoords));
    ++im2colOffset;
    ++kernelOffset;
  }
  ${A}
  return value;
}`;return{...e,output:{dims:n,type:t[0].type,textureType:0},shaderSource:k}},yw=(r,e,t,n)=>{let i=oN(e.length>2,n);return{...i,get:()=>aN(r,i,e,t,n)}}});var Ci,hc,sN,uN,lN,cN,mc,dN,Ia=X(()=>{"use strict";Ct();tt();lw();mw();bw();ii();pc();Sa();Ci=(r,e,t,n,i)=>{let o=r[0],a=r.slice(2),s=a.length,l=e[0],h=e.slice(2).map((T,I)=>T+(T-1)*(t[I]-1)),b=a.map((T,I)=>T+n[I]+n[I+s]).map((T,I)=>Math.floor((T-h[I]+i[I])/i[I]));return[o,l].concat(...b)},hc=(r,e,t)=>(dN(e,t),sN(r,e,t)),sN=(r,e,t)=>{let n=cN(t,e),i=r.session.pack,o=n.kernelShape[0]===1&&n.kernelShape[1]===1;return n.group>1?[r.run(uw(r,e,n),e)]:o&&i?[uN(r,e,n)]:i&&e[0].dims.length===4&&e[0].dims[0]===1&&!o?[hw(r,e,n)]:[lN(r,e,n)]},uN=(r,e,t)=>{let n=e[0].dims,i=e[1].dims,o=Ci(n,i,t.dilations,t.pads,t.strides),a=r.reshapeUnpacked(e[0],[n[1],n[2]*n[3]]),s=r.reshapeUnpacked(e[1],[i[0],i[1]]),l=e.length>2?[s,a,e[2]]:[s,a],d=r.run(lc(l,t),l);return r.reshapeUnpacked(d,o)},lN=(r,e,t)=>{let n=e[0].dims,i=e[1].dims,o=Ci(n,i,t.dilations,t.pads,t.strides),a=r.run(gw(r,e[0],e[1],o,t),[e[0]]),s=e.length===3?[a,e[1],e[2]]:[a,e[1]];return r.run(yw(r,e,o,t),s)},cN=(r,e)=>{let t=r.kernelShape.slice();if(r.kernelShape.length===0)for(let o=2;o<e[1].dims.length;++o)t.push(e[1].dims[o]);let n=r.pads.slice();Qr.adjustPadsBasedOnAutoPad(e[0].dims,r.strides,r.dilations,t,n,r.autoPad);let i=Object.assign({},r);return Object.assign(i,{kernelShape:t,pads:n,cacheKey:r.cacheKey}),i},mc=r=>{let e=r.attributes,t=Ai(e),n=e.getString("auto_pad","NOTSET"),i=e.getInts("dilations",[1,1]),o=e.getInt("group",1),a=e.getInts("kernel_shape",[]),s=e.getInts("pads",[0,0,0,0]),l=e.getInts("strides",[1,1]);return Me({autoPad:n,dilations:i,group:o,kernelShape:a,pads:s,strides:l,...t})},dN=(r,e)=>{if(!r||r.length!==2&&r.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(r[0].dims.length!==4||r[1].dims.length!==4)throw new Error("currently only support 2-dimensional conv");let t=r[0].dims[1],n=r[1].dims[1]*e.group;if(t!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(r.length===3&&(r[2].dims.length!==1||r[1].dims[0]!==r[2].dims[0]))throw new Error("invalid bias");let i=r[0].dims.length-2;if(e.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(e.strides.length!==i)throw new Error(`strides should be ${i}D`);if(e.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(e.kernelShape.length!==0&&e.kernelShape.length!==r[1].dims.length-2)throw new Error("invalid kernel shape");if(r[0].type!=="float32"||r[1].type!=="float32")throw new Error("Conv input(X,W) should be float tensor");if(r.length===3&&r[2].type!=="float32")throw new Error("Conv input(bias) should be float tensor")}});var fN,pN,hN,_w,mN,gN,yN,bN,_N,vN,vw,wN,ww=X(()=>{"use strict";Ct();pt();We();ii();fN=(r,e,t,n,i,o)=>(r-1)*e+t+(n-1)*i+1-o,pN=(r,e,t,n,i)=>{let o=Math.floor(r/2);e==="SAME_UPPER"?(t[n]=o,t[i]=r-o):e==="SAME_LOWER"&&(t[n]=r-o,t[i]=o)},hN=(r,e,t,n,i,o,a,s)=>{let l=r.length-2,d=s.length===0;for(let h=0;h<l;++h){let g=d?r[h+2]*o[h]:s[h],b=fN(r[h+2],o[h],i[h],e[h],t[h],g);pN(b,n,i,h,h+l),d&&s.push(o[h]*(r[h+2]-1)+a[h]+(e[h]-1)*t[h]+1-i[h]-i[h+l])}},_w=(r,e,t)=>(wN(e,t),mN(r,e,t)),mN=(r,e,t)=>{let n=vN(t,e);return[_N(r,e,n)]},gN=(r,e)=>({name:"ConvTranspose",inputNames:r?["X","W","B"]:["X","W"],inputTypes:r?[0,0,0]:[0,0],cacheHint:e}),yN=(r,e,t,n)=>{let o=e.length>2?"getB(output_channel)":"0.0",a=e[0].dims,s=e[1].dims,l=s[1],d=s[0]/n.group,h=[e[0].dims[0],e[1].dims[1]*n.group,...n.outputShape],g=Se(r.session.backend.glContext.version),{activationFunction:b,applyActivation:w}=sr(n),T=`
  const ivec2 strides = ivec2(${n.strides[0]}, ${n.strides[1]});
  const ivec2 pads = ivec2(${n.pads[0]}, ${n.pads[1]});
  ${b}
  void main() {
    ivec4 coords = getOutputCoords();
    int batch = coords.x;
    int output_channel = coords.y;

    ivec2 loc = coords.zw + pads;

    int group_id = output_channel / ${l};
    int wOutChannel = output_channel - group_id * ${l};

    float value = ${o};
    for (int inChannelOffset = 0; inChannelOffset < ${d}; inChannelOffset++) {
      int input_channel = group_id * ${d} + inChannelOffset;
      for (int wWOff = 0; wWOff < ${s[2]}; wWOff++) {
        for (int wHOff = 0; wHOff < ${s[3]}; wHOff++) {
          ivec2 wOff = ivec2(wWOff * ${n.dilations[0]}, wHOff * ${n.dilations[1]});
          ivec2 wLoc = loc - wOff;
          ivec2 wLocIn = wLoc / strides;
          if (
            wLocIn * strides == wLoc &&
            wLocIn.x >= 0 && wLocIn.x < ${a[2]} &&
            wLocIn.y >= 0 && wLocIn.y < ${a[3]}
          ) {
            float xVal = getX(batch, input_channel, wLocIn.y, wLocIn.x);
            float wVal = getW(input_channel, wOutChannel, wHOff, wWOff);
            value += xVal * wVal;
          }
        }
      }
    }
    ${w}
    ${g.output} = vec4(value, .0, .0, .0);
  }
`;return{...t,output:{dims:h,type:e[0].type,textureType:0},shaderSource:T,hasMain:!0}},bN=(r,e,t)=>{let n=gN(e.length>2,t.cacheKey);return{...n,get:()=>yN(r,e,n,t)}},_N=(r,e,t)=>r.run(bN(r,e,t),e),vN=(r,e)=>{let t=r.kernelShape.slice();if(r.kernelShape.length===0)for(let s=2;s<e[1].dims.length;++s)t.push(e[1].dims[s]);let n=r.pads.slice(),i=r.outputShape.slice(),o=e[0].dims;hN(o,t,r.dilations,r.autoPad,n,r.strides,r.outputPadding,i);let a=Object.assign({},r);return Object.assign(a,{kernelShape:t,pads:n,outputShape:i,cacheKey:r.cacheKey}),a},vw=r=>{let e=r.attributes,t=Ai(e),n=e.getString("auto_pad","NOTSET"),i=e.getInts("dilations",[1,1]),o=e.getInt("group",1),a=e.getInts("kernel_shape",[]),s=e.getInts("output_padding",[0,0]),l=e.getInts("output_shape",[]),d=e.getInts("pads",[0,0,0,0]),h=e.getInts("strides",[1,1]);return Me({autoPad:n,dilations:i,group:o,kernelShape:a,outputPadding:s,outputShape:l,pads:d,strides:h,...t})},wN=(r,e)=>{if(!r||r.length!==2&&r.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(r[0].dims.length!==4||r[1].dims.length!==4)throw new Error("currently only support 2-dimensional conv");let t=r[0].dims[1],n=r[1].dims[0];if(t!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=r[1].dims[1]*e.group;if(r.length===3&&(r[2].dims.length!==1||r[2].dims[0]!==i))throw new Error("invalid bias");let o=r[0].dims.length-2;if(e.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(e.strides.length!==o)throw new Error(`strides should be ${o}D`);if(e.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(e.outputPadding.length!==o)throw new Error(`output_padding should be ${o}D`);if(e.kernelShape.length!==0&&e.kernelShape.length!==r[1].dims.length-2)throw new Error("invalid kernel shape");if(e.outputShape.length!==0&&e.outputShape.length!==r[0].dims.length-2)throw new Error("invalid output shape");if(r[0].type!=="float32"||r[1].type!=="float32")throw new Error("ConvTranspose input(X,W) should be float tensor");if(r.length===3&&r[2].type!=="float32")throw new Error("ConvTranspose input(bias) should be float tensor")}});var Tw,oi,xw,TN,Iw,xN,IN,SN,Aa=X(()=>{"use strict";Ct();tt();We();Tw={name:"Transpose",inputNames:["A"],inputTypes:[0]},oi=(r,e,t)=>(SN(e),[r.run({...Tw,cacheHint:t.cacheKey,get:()=>TN(r,e[0],t.perm)},e)]),xw=r=>Me({perm:r.attributes.getInts("perm",[])}),TN=(r,e,t)=>{let n=e.dims;t=Iw(n,t);let i=xN(n,t),o=n.length,a=`
      ${IN("perm",t,o)}
      float process(int indices[${o}]) {
        int a[${o}];
        perm(a, indices);
        return _A(a);
      }`;return{...Tw,output:{dims:i,type:e.type,textureType:0},shaderSource:a}},Iw=(r,e)=>(e&&e.length!==r.length&&(e=[...r.keys()].reverse()),e),xN=(r,e)=>(e=Iw(r,e),be.sortBasedOnPerm(r,e)),IN=(r,e,t)=>{let n=[];n.push(`void ${r}(out int a[${t}], int src[${t}]) {`);for(let i=0;i<t;++i)n.push(`	a[${e[i]}]=src[${i}];`);return n.push("	}"),n.join(`
`)},SN=r=>{if(!r||r.length!==1)throw new Error("Transpose requires 1 input.");if(r[0].type!=="float32"&&r[0].type!=="float64")throw new Error("input should be float tensor")}});var Sw,$w,$N,Aw=X(()=>{"use strict";Aa();Sw=(r,e,t)=>{$N(e);let n=t.blocksize,i=n*n,o=t.mode==="DCR"?[0,3,4,1,5,2]:[0,1,4,2,5,3],a=t.mode==="DCR"?[e[0].dims[0],n,n,e[0].dims[1]/i,e[0].dims[2],e[0].dims[3]]:[e[0].dims[0],e[0].dims[1]/i,n,n,e[0].dims[2],e[0].dims[3]],s=r.reshapeUnpacked(e[0],a),l={perm:o,cacheKey:`${o}`},[d]=oi(r,[s],l),h=[e[0].dims[0],e[0].dims[1]/i,e[0].dims[2]*n,e[0].dims[3]*n];return[r.reshapeUnpacked(d,h)]},$w=r=>{let e=r.attributes.getInt("blocksize");if(e<1)throw new Error(`blocksize must be >= 1, but got : ${e} for DepthToSpace`);let t=r.attributes.getString("mode","DCR");if(t!=="DCR"&&t!=="CRD")throw new Error(`unrecognized mode: ${t} for DepthToSpace`);return{mode:t,blocksize:e}},$N=r=>{if(r.length!==1)throw new Error(`DepthToSpace expect 1 inputs, but got ${r.length}`);if(r[0].type==="string"||r[0].dims.length!==4)throw new TypeError("DepthToSpace input should be a 4-D numeric tensor")}});var Cw,Ow,AN,Pw=X(()=>{"use strict";tt();Cw=(r,e,t)=>{AN(e,t);let n=be.flattenShape(e[0].dims,t);return[r.reshapeUnpacked(e[0],n)]},Ow=r=>r.attributes.getInt("axis",1),AN=(r,e)=>{if(!r||r.length!==1)throw new Error("Flatten requires 1 input.");let t=r[0].dims.length;if(t===0)throw new Error("scalar tensor is not supported.");if(e<-t||e>t)throw new Error("Invalid axis");if(r[0].type==="string")throw new Error("string tensor is not supported.")}});var Lr,ho=X(()=>{"use strict";Lr=["float32","float64","int32","int16","int8","uint16","uint32","uint8"]});var Ew,Dw,CN,ON,PN,EN,kw=X(()=>{"use strict";Ct();ho();tt();We();Ew=(r,e,t)=>(EN(e,t.axis),[r.run(PN(r,e,t),e)]),Dw=r=>Me({axis:r.attributes.getInt("axis",0)}),CN={name:"Gather",inputNames:["A","B"],inputTypes:[0,0]},ON=(r,e,t,n)=>{let i=t[0].dims.slice(),o=t[1].dims.slice(),a=new Array(i.length+o.length-1);n=be.normalizeAxis(n,i.length);let s=[];for(let b=0;b<a.length;b++)b<n?(a[b]=i[b],s.push(`inputIdx[${b}] = outputIdx[${b}];`)):b<n+o.length?(a[b]=o[b-n],s.push(`indexDataIdx[${b-n}] = outputIdx[${b}];`)):(a[b]=i[b-o.length+1],s.push(`inputIdx[${b-o.length+1}] = outputIdx[${b}];`));let l=a.length||1,d=i.length,h=o.length||1,g=`
      float process(int outputIdx[${l}]) {
        int inputIdx[${d}];
        int indexDataIdx[${h}];
        indexDataIdx[0] = 0;
        ${s.join(`
        `)}
        int idx = int(_B(indexDataIdx));
        inputIdx[${n}] = idx < 0 ? idx + ${i[n]} : idx;
        return _A(inputIdx);
      }`;return{...e,output:{dims:a,type:t[0].type,textureType:0},shaderSource:g}},PN=(r,e,t)=>{let n={...CN,cacheHint:t.cacheKey};return{...n,get:()=>ON(r,n,e,t.axis)}},EN=(r,e)=>{if(!r||r.length!==2)throw new Error("Gather requires 2 inputs.");let t=r[0].dims.length;if(t<1)throw new Error("Invalid input shape.");if(e<-t||e>t-1)throw new Error("Invalid axis.");if(Lr.indexOf(r[0].type)===-1)throw new Error("Invaid input type.");if(r[1].type!=="int32"&&r[1].type!=="int16")throw new Error("Invaid input type.")}});var gc,jw,Lw,Nw,DN,kN,jN,Rw=X(()=>{"use strict";Ct();tt();We();gc=(r,e,t)=>(jN(e,t),[r.run(DN(e,t),e)]),jw=(r,e)=>{let t=r.attributes.getInt("transA",0)!==0,n=r.attributes.getInt("transB",0)!==0,i=r.attributes.getFloat("alpha",1),o=r.attributes.getFloat("beta",1);return Me({transA:t,transB:n,alpha:i,beta:o,isOptionalC:e})},Lw=r=>jw(r,!1),Nw=r=>jw(r,!0),DN=(r,e)=>{let t={name:"Gemm",inputNames:r.length===3?["A","B","C"]:["A","B"],inputTypes:r.length===3?[0,0,0]:[0,0],key:e.cacheKey};return{...t,get:()=>kN(t,r,e)}},kN=(r,e,t)=>{let n=e[0].dims.slice(),i=e[1].dims.slice(),[o,a]=ga.getShapeOfGemmResult(n,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),s=[o,a];if(!s)throw new Error("Can't use gemm on the given tensors");let l=n[n.length-1],d="";t.transA&&(l=n[0]),t.transA&&t.transB?d="value += _A_T(a) * _B_T(b);":t.transA&&!t.transB?d="value += _A_T(a) * _B(b);":!t.transA&&t.transB?d="value += _A(a) * _B_T(b);":!t.transA&&!t.transB&&(d="value += _A(a) * _B(b);");let h=s.length,g=e.length===3?`int c[${e[2].dims.length}];`:"",b=e.length===3?"bcastIndices_C(indices, c);":"",w=e.length===3?"value += beta * _C(c);":"",T=`
      float process(int indices[${h}]) {
          int a[${h}];
          int b[${h}];
          ${g}

          copyVec(indices, a);
          copyVec(indices, b);
          ${b}

          float value = 0.0;
          for (int k=0; k<${l}; ++k) {
              a[${h-1}] = k;
              b[${h-2}] = k;
              ${d}
          }

          value = value * alpha;
          ${w}
          return value;
      }`;return{...r,output:{dims:s,type:e[0].type,textureType:0},variables:[{name:"alpha",type:"float",data:t.alpha},{name:"beta",type:"float",data:t.beta}],shaderSource:T}},jN=(r,e)=>{if(!r)throw new Error("Input is missing");if(e.isOptionalC&&(r.length<2||r.length>3))throw new Error("Invaid input shape.");if(!e.isOptionalC&&r.length!==3)throw new Error("Gemm requires 3 inputs");if(r.length===3&&r[2].dims.length!==1&&r[2].dims.length!==2)throw new Error("Invalid input shape of C");if(r[0].type!=="float32"&&r[0].type!=="float64"||r[1].type!=="float32"&&r[1].type!=="float64"||r.length===3&&r[2].type!=="float32"&&r[2].type!=="float64")throw new Error("Invalid input type.");if(r[0].type!==r[1].type||r.length===3&&r[0].type!==r[2].type)throw new Error("Input types are mismatched")}});var Mw,zw,LN,NN,RN,MN,zN,Bw=X(()=>{"use strict";Ct();We();Mw=(r,e,t)=>(zN(e),[r.run(RN(r,e,t),e)]),zw=r=>{let e=r.attributes.getFloat("scale"),t=r.attributes.getFloats("bias");return Me({scale:e,bias:t})},LN={name:"ImageScaler",inputNames:["X"],inputTypes:[0]},NN=(r,e,t,n)=>{let i=t[0].dims.slice(),o=i.length,s=`
      ${MN(n.bias.length)}
      float process(int indices[${o}]) {
        return _X(indices) * scale + getBias(bias, indices[1]);
      }`;return{...e,output:{dims:i,type:t[0].type,textureType:0},variables:[{name:"bias",type:"float",arrayLength:n.bias.length,data:n.bias},{name:"scale",type:"float",data:n.scale}],shaderSource:s}},RN=(r,e,t)=>{let n={...LN,cacheHint:t.cacheKey};return{...n,get:()=>NN(r,n,e,t)}},MN=r=>{let e=[`float getBias(float bias[${r}], int channel) {`];for(let t=0;t<r;++t)t===0?e.push(`	if (channel == ${t}) { return bias[${t}]; }`):t===r-1?e.push(`	else { return bias[${t}]; }`):e.push(`	else if (channel == ${t}) { return bias[${t}]; }`);return e.push("	}"),e.join(`
`)},zN=r=>{if(!r||r.length!==1)throw new Error("ImageScaler requires 1 input.");if(r[0].dims.length!==4)throw new Error("Invalid input shape.");if(r[0].type!=="float32"&&r[0].type!=="float64")throw new Error("Invalid input type.")}});var Vw,Uw,Fw,BN,FN,VN,UN,GN,WN,Gw=X(()=>{"use strict";pt();We();Vw=(r,e,t)=>{WN(e);let n=r.run(FN(e[0]),e);return[r.run(GN(r,e[0],t,n.dims),[e[0],n,e[1],e[2]])]},Uw=r=>r.attributes.getFloat("epsilon",1e-5),Fw={name:"InstanceNormalization_MeanAndVariance",inputNames:["X"],inputTypes:[0]},BN=(r,e)=>{let t=e.dims.slice(),n=t[1],i=t[2]*t[3],o=[t[0],n],a=`
      vec4 process(int[2] indices) {
        vec4 v = vec4(0.0);
        int a[4];
        a[0] = indices[0];
        a[1] = indices[1];
        float temp = 0.0;
        for(int a2=0; a2<${t[2]}; a2++) {
          a[2] = a2;
          for(int a3=0; a3<${t[3]}; a3++) {
            a[3] = a3;
            float x = _X(a);
            temp += x;
          }
        }
        float mean = temp / float(${i});
        temp = 0.0;
        for(int a2=0; a2<${t[2]}; a2++) {
          a[2] = a2;
          for(int a3=0; a3<${t[3]}; a3++) {
            a[3] = a3;
            float x = _X(a);
            temp += (x - mean) * (x - mean);
          }
        }
        v.r = mean;
        v.g = temp / float(${i});

        return v;
      }`;return{...r,output:{dims:o,type:e.type,textureType:4},shaderSource:a}},FN=r=>({...Fw,get:()=>BN(Fw,r)}),VN={name:"InstanceNormalization_ComputeOutput",inputNames:["X","MeanAndVariance","Scale","B"],inputTypes:[0,4,0,0]},UN=(r,e,t,n,i)=>{let o=Se(r.session.backend.glContext.version),[a,s]=r.calculateTextureWidthAndHeight(i,4),[l,d]=[a/4,s],h=`
      vec4 get_MeanAndVariance(int[2] mv) {
        int offset = indicesToOffset_MeanAndVariance(mv);
        vec2 coords = offsetToCoords(offset, ${l}, ${d});
        return ${o.texture2D}(MeanAndVariance, coords);
      }

      float process(int[4] indices) {
        int mv[2];
        mv[0] = indices[0];
        mv[1] = indices[1];
        vec4 mean_and_variance = get_MeanAndVariance(mv);
        float mean = mean_and_variance.r;
        float variance = mean_and_variance.g;

        int sb[1];
        sb[0] = indices[1];
        float scale = _Scale(sb);
        float b = _B(sb);

        return scale * (_X(indices) - mean) / sqrt(variance + epsilon) + b;
      }`;return{...e,output:{dims:t.dims,type:t.type,textureType:0},variables:[{name:"epsilon",type:"float",data:n}],shaderSource:h}},GN=(r,e,t,n)=>{let i={...VN,cacheHint:`${t}`};return{...i,get:()=>UN(r,i,e,t,n)}},WN=r=>{if(!r||r.length!==3)throw new Error("InstanceNormalization requires 3 inputs.");let e=r[0],t=r[1],n=r[2];if(e.dims.length<3||t.dims.length!==1||n.dims.length!==1)throw new Error("Invalid input shape.");if(t.dims[0]!==e.dims[1]||n.dims[0]!==e.dims[1])throw new Error("Input shapes are mismatched.");if(e.type!=="float32"&&e.type!=="float64"||t.type!=="float32"&&t.type!=="float64"||n.type!=="float32"&&n.type!=="float64")throw new Error("Invalid input type.");if(r[0].dims.length!==4)throw new Error("Only support 4-D input shape.")}});function HN(r,e){let t=r[0].dims[1],n=r[0].dims.length,i=-Math.floor((e.size-1)/2),o=Math.ceil((e.size-1)/2),a=`float(${e.alpha}) / float(${e.size})`,s=`float(${e.bias})`,l=`float(${e.beta})`,d=`
    float process(int indices[${n}]) {
        int c = indices[1];
        float x = _X(indices);
        float square_sum = 0.0;

        for (int i = ${i}; i <= ${o}; i++) {
          int idx = c + i;
          if (c >= 0 && c < ${t}) {
            indices[1] = idx;
            float j = _X(indices);
            square_sum += j * j;
          }
        }
        return x / pow(${s} + ${a} * square_sum, ${l});
    }`;return{...qw,cacheHint:e.cacheKey,output:{dims:r[0].dims,type:r[0].type,textureType:0},shaderSource:d}}function qN(r,e){return{...qw,cacheHint:e.cacheKey,get:()=>HN(r,e)}}var Ww,Hw,qw,KN,Kw=X(()=>{"use strict";Ct();We();Ww=(r,e,t)=>(KN(e),[r.run(qN(e,t),e)]),Hw=r=>{let e=r.attributes.getFloat("alpha",1e-4),t=r.attributes.getFloat("beta",.75),n=r.attributes.getFloat("bias",1),i=r.attributes.getInt("size");return Me({alpha:e,beta:t,bias:n,size:i})},qw={name:"LRN",inputNames:["X"],inputTypes:[0]};KN=r=>{if(!r||r.length!==1)throw new Error("LRN requires 1 input.");if(r[0].dims.length!==4)throw new Error('currently only support LRN for input with "NCHW" format');if(r[0].type!=="float32")throw new Error("input should be float type")}});var XN,yc,Xw,Zw,Jw,ZN,JN,YN,QN,e4,t4,n4,r4,Yw=X(()=>{"use strict";Ct();tt();pt();We();XN={name:"Pad",inputNames:["A"],inputTypes:[0]},yc=(r,e,t)=>(YN(e),[r.run({...XN,cacheHint:t.cacheKey,get:()=>JN(r,e[0],t)},e)]),Xw=r=>{let e=r.attributes.getString("mode","constant"),t=r.attributes.getFloat("value",0),n=r.attributes.getInts("pads");return Me({mode:e,value:t,pads:n})},Zw=(r,e,t)=>{QN(e);let n=ZN(r,e,t);return yc(r,[e[0]],n)},Jw=r=>r.attributes.getString("mode","constant"),ZN=(r,e,t)=>{if(!r.session.isInitializer(e[1].dataId)||e.length>=3&&!r.session.isInitializer(e[2].dataId))throw new Error("dynamic pad attributes are not allowed");let n=Array.from(e[1].integerData),i=e.length>=3?e[2].floatData[0]:0;return Me({mode:t,pads:n,value:i})},JN=(r,e,t)=>{let n=be.padShape(e.dims.slice(),t.pads),i=n.length,a=`
      ${e4(r,e,t)}
      float process(int[${i}] indices) {
          return padA(indices);
      }`;return{name:"Pad",inputNames:["A"],inputTypes:[0],output:{dims:n,type:e.type,textureType:0},shaderSource:a}},YN=r=>{if(!r||r.length!==1)throw new Error("Pad requires 1 input");if(r[0].type!=="float32"&&r[0].type!=="float64")throw new Error("Invalid input type.")},QN=r=>{if(!r||r.length!==2&&r.length!==3)throw new Error("Pad requires 2 or 3 inputs");if(r[1].type!=="int32")throw new Error("Invalid input type.");if(r.length>=3&&r[2].type==="string")throw new Error("Invalid input type.")},e4=(r,e,t)=>{let n=Se(r.session.backend.glContext.version),[i,o]=r.calculateTextureWidthAndHeight(e.dims,0),a=be.computeStrides(e.dims);switch(t.mode){case"constant":return t4(n,e.dims,a,i,o,t.pads,t.value);case"reflect":return n4(n,e.dims,a,i,o,t.pads);case"edge":return r4(n,e.dims,a,i,o,t.pads);default:throw new Error("Invalid mode")}},t4=(r,e,t,n,i,o,a)=>{let s=e.length,l="";for(let d=s-1;d>=0;--d)l+=`
        k = m[${d}] - ${o[d]};
        if (k < 0)  return constant;
        if (k >= ${e[d]}) return constant;
        offset += k * ${t[d]};
        `;return`
      float padA(int m[${s}]) {
        const float constant = float(${a});
        int offset = 0;
        int k = 0;
        ${l}
        vec2 coords = offsetToCoords(offset, ${n}, ${i});
        float value = getColorAsFloat(${r.texture2D}(A, coords));
        return value;
      }
      `},n4=(r,e,t,n,i,o)=>{let a=e.length,s="";for(let l=a-1;l>=0;--l)s+=`
        k = m[${l}] - ${o[l]};
        if (k < 0) { k = -k; }
        {
          const int _2n_1 = ${2*(e[l]-1)};
          k = int( mod( float(k), float(_2n_1) ) ) ;
          if(k >= ${e[l]}) { k = _2n_1 - k; }
        }
        offset += k * ${t[l]};
        `;return`
      float padA(int m[${a}]) {
        int offset = 0;
        int k = 0;
        ${s}
        vec2 coords = offsetToCoords(offset, ${n}, ${i});
        float value = getColorAsFloat(${r.texture2D}(A, coords));
        return value;
      }
      `},r4=(r,e,t,n,i,o)=>{let a=e.length,s="";for(let l=a-1;l>=0;--l)s+=`
        k = m[${l}] - ${o[l]};
        if (k < 0)  k = 0;
        if (k >= ${e[l]}) k = ${e[l]-1};
        offset += k * ${t[l]};
      `;return`
      float padA(int m[${a}]) {
        int offset = 0;
        int k = 0;
        ${s}
        vec2 coords = offsetToCoords(offset, ${n}, ${i});
        float value = getColorAsFloat(${r.texture2D}(A, coords));
        return value;
      }
      `}});var e0,t0,n0,r0,i0,o0,a0,s0,u0,i4,Qw,l0,Oa,c0,Ca,o4,d0=X(()=>{"use strict";Ct();tt();We();e0=(r,e,t)=>{Oa(e);let n={name:"AveragePool",inputNames:["X"],inputTypes:[0],cacheHint:t.cacheKey};return[r.run({...n,get:()=>n0(e,n,!1,t)},e)]},t0=r=>{let e=r.attributes.getString("auto_pad","NOTSET"),t=r.attributes.getInt("ceil_mode",0),n=r.attributes.getInt("count_include_pad",0)!==0,i=r.attributes.getInts("kernel_shape"),o=r.attributes.getInts("strides",[]),a=r.attributes.getInts("pads",[]);if(t!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");return Me({autoPad:e,ceilMode:t,countIncludePad:n,kernelShape:i,strides:o,pads:a})},n0=(r,e,t,n)=>{let[i,o]=u0(r,n,t),a=be.size(i.kernelShape),s="value += _X(x);",l="";i.countIncludePad?l+=`value /= float(${a});`:l+=`value /= float(${a} - pad);`;let h=`
        ${c0(r[0].dims,i,s,l,"0.0")}
      `;return{...e,output:{dims:o,type:r[0].type,textureType:0},shaderSource:h}},r0=(r,e,t)=>{Oa(e);let n={name:"GlobalAveragePool",inputNames:["X"],inputTypes:[0],cacheHint:`${t.countIncludePad}`};return[r.run({...n,get:()=>n0(e,n,!0,t)},e)]},i0=r=>{let e=r.attributes.getInt("count_include_pad",0)!==0;return Me({autoPad:"",ceilMode:0,countIncludePad:e,kernelShape:[],strides:[],pads:[]})},o0=(r,e,t)=>{Oa(e);let n={name:"MaxPool",inputNames:["X"],inputTypes:[0],cacheHint:t.cacheKey};return[r.run({...n,get:()=>s0(e,n,!1,t)},e)]},a0=r=>{let e=r.attributes.getString("auto_pad","NOTSET"),t=r.attributes.getInt("ceil_mode",0),n=r.attributes.getInts("kernel_shape"),i=r.attributes.getInts("strides",[]),o=r.attributes.getInts("pads",[]),a=r.attributes.getInt("storage_order",0),s=r.attributes.getInts("dilations",[]);if(a!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(t!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");return Me({autoPad:e,ceilMode:t,countIncludePad:!1,kernelShape:n,strides:i,pads:o,storageOrder:a,dilations:s})},s0=(r,e,t,n)=>{let[i,o]=u0(r,n,t),d=`
      ${c0(r[0].dims,i,`
      value = max(_X(x), value);
    `,"","-1e5")}
    `;return{...e,output:{dims:o,type:r[0].type,textureType:0},shaderSource:d}},u0=(r,e,t)=>{let n=r[0].dims.slice(),i=Object.hasOwnProperty.call(e,"dilations"),o=e.kernelShape.slice(),a=e.strides.slice(),s=i?e.dilations.slice():[],l=e.pads.slice();Qr.adjustPoolAttributes(t,n,o,a,s,l);let d=Qr.computePoolOutputShape(t,n,a,s,o,l,e.autoPad),h=Object.assign({},e);return i?Object.assign(h,{kernelShape:o,strides:a,pads:l,dilations:s,cacheKey:e.cacheKey}):Object.assign(h,{kernelShape:o,strides:a,pads:l,cacheKey:e.cacheKey}),[h,d]},i4={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[],cacheKey:""},Qw={name:"GlobalMaxPool",inputNames:["X"],inputTypes:[0]},l0=(r,e)=>(Oa(e),[r.run({...Qw,get:()=>s0(e,Qw,!0,i4)},e)]),Oa=r=>{if(!r||r.length!==1)throw new Error("Pool ops requires 1 input.");if(r[0].type!=="float32"&&r[0].type!=="float64")throw new Error("Invalid input type.")},c0=(r,e,t,n,i)=>{let o=r.length;if(e.kernelShape.length<=2){let a=e.kernelShape[e.kernelShape.length-1],s=e.strides[e.strides.length-1],l=e.pads[e.pads.length/2-1],d=e.pads[e.pads.length-1],h=r[o-1],g="",b="",w="";if(l+d!==0?g=`
          for (int i = 0; i < ${a}; i++) {
            x[${o} - 1] = indices[${o} - 1] * ${s} - ${l} + i;
            if (x[${o} - 1] < 0 || x[${o} - 1] >= ${h}) {
              pad++;
              continue;
            }
            ${t}
          }`:g=`
          for (int i = 0; i < ${a}; i++) {
            x[${o} - 1] = indices[${o} - 1] * ${s} - ${l} + i;
            ${t}
          }`,e.kernelShape.length===2){let I=e.kernelShape[e.kernelShape.length-2],O=e.strides[e.strides.length-2],S=e.pads[e.pads.length/2-2],A=e.pads[e.pads.length-2],j=r[o-2];S+A!==0?b=`
            for (int j = 0; j < ${I}; j++) {
              x[${o} - 2] = indices[${o} - 2] * ${O} - ${S} + j;
              if (x[${o} - 2] < 0 || x[${o} - 2] >= ${j}) {
                pad+= ${a};
                continue;
              }
          `:b=`
            for (int j = 0; j < ${I}; j++) {
              x[${o} - 2] = indices[${o} - 2] * ${O} - ${S} + j;
            `,w=`
          }
        `}return`
        float process(int indices[${o}]) {
          int x[${o}];
          copyVec(indices, x);

          float value = ${i};
          int pad = 0;
          ${b}
          ${g}
          ${w}
          ${n}
          return value;
        }
      `}else{let a=be.size(e.kernelShape),s=be.computeStrides(e.kernelShape),l=s.length,d=e.pads.length,h=o4(l),g=Ca(r,"inputDims"),b=Ca(e.pads,"pads"),w=Ca(s,"kernelStrides"),T=Ca(e.strides,"strides"),I=e.pads.reduce((A,j)=>A+j),O="";return I?O=`
            if (x[j] >= inputDims[j] || x[j] < 0) {
              pad++;
              isPad = true;
              break;
            }
          }
          if (!isPad) {
            ${t}
          }`:O=`
          }
          ${t}
        `,`
        ${h}
        float process(int indices[${o}]) {
          int x[${o}];
          copyVec(indices, x);
          int offset[${l}];
          int pads[${d}];
          int inputDims[${o}];
          int kernelStrides[${l}];
          int strides[${l}];
          ${b}
          ${g}
          ${T}
          ${w}

          float value = ${i};
          int pad = 0;
          bool isPad = false;
          for (int i = 0; i < ${a}; i++) {
            offsetToIndices(i, kernelStrides, offset);
            isPad = false;
            for (int j = ${o} - ${l}; j < ${o}; j++) {
              x[j] = indices[j] * strides[j - ${o} + ${l}]
                + offset[j - ${o} + ${l}] - pads[j - 2];
              ${O}
          }
          ${n}

          return value;
        }
      `}},Ca=(r,e)=>{let t="";for(let n=0;n<r.length;n++)t+=`
      ${e}[${n}] = ${r[n]};
    `;return t},o4=r=>`
  void offsetToIndices(int offset, int[${r}] strides, out int[${r}] indices) {
    if (${r} == 0) {
      return;
    }
    for (int i = 0; i < ${r} - 1; ++i) {
      indices[i] = offset / strides[i];
      offset -= indices[i] * strides[i];
    }
    indices[${r} - 1] = offset;
  }`});var ai,Nr,a4,s4,f0,p0,h0,m0,g0,y0,b0,_0=X(()=>{"use strict";Ct();ho();tt();We();ai=(r,e,t,n,i)=>{s4(e);let o={name:n,inputNames:["A"],inputTypes:[0]};return[r.run({...o,cacheHint:t.cacheKey,get:()=>a4(r,e,t,n,i,o)},e)]},Nr=r=>{let e=r.attributes.getInts("axes",[]),t=r.attributes.getInt("keepdims",1)===1;return Me({axes:e,keepDims:t})},a4=(r,e,t,n,i,o)=>{let a=[],s=e[0].dims.length||1,l=[],d=be.normalizeAxes(t.axes,e[0].dims.length),h=i(e,d),g=h[1];for(let T=0;T<e[0].dims.length;T++)d.indexOf(T)>=0||d.length===0?(t.keepDims&&a.push(1),g=`
          for(int j${T} = 0; j${T} < ${e[0].dims[T]}; j${T}++) {
            inputIdx[${T}] = j${T};
            ${g}
          }`):(l.push(`inputIdx[${T}] = outputIdx[${a.length}];`),a.push(e[0].dims[T]));let w=`
      float process(int outputIdx[${a.length||1}]) {
        float value;                 // final result
        int inputIdx[${s}];      // addressing input data
        ${l.join(`
`)}
        ${h[0]}       // init ops for reduce max/min
        ${g}
        ${h[2]}       // final computation for reduce mean
        return value;
      }`;return{...o,output:{dims:a,type:e[0].type,textureType:0},shaderSource:w}},s4=r=>{if(!r||r.length!==1)throw new Error("Reduce op requires 1 input.");if(Lr.indexOf(r[0].type)===-1)throw new Error("Invalid input type.")},f0=(r,e,t)=>ai(r,e,t,"ReduceSum",()=>["value = 0.0;","value += _A(inputIdx);",""]),p0=(r,e,t)=>ai(r,e,t,"ReduceMean",(i,o)=>{let a=1;for(let s=0;s<i[0].dims.length;s++)(o.indexOf(s)>=0||o.length===0)&&(a*=i[0].dims[s]);return["value = 0.0;","value += _A(inputIdx);",`value /= ${a}.;`]}),h0=(r,e,t)=>ai(r,e,t,"ReduceMax",(i,o)=>{let a=[];for(let s=0;s<i[0].dims.length;s++)(o.indexOf(s)>=0||o.length===0)&&a.push(`inputIdx[${s}] = 0;`);return[`${a.join(`
`)}
value = _A(inputIdx);`,"value = max(value, _A(inputIdx));",""]}),m0=(r,e,t)=>ai(r,e,t,"ReduceMin",(i,o)=>{let a=[];for(let s=0;s<i[0].dims.length;s++)(o.indexOf(s)>=0||o.length===0)&&a.push(`inputIdx[${s}] = 0;`);return[`${a.join(`
`)}
value = _A(inputIdx);`,"value = min(value, _A(inputIdx));",""]}),g0=(r,e,t)=>ai(r,e,t,"ReduceProd",()=>["value = 1.0;","value *= _A(inputIdx);",""]),y0=(r,e,t)=>ai(r,e,t,"ReduceLogSum",()=>["value = 0.0;","value += _A(inputIdx);","value = log(value);"]),b0=(r,e,t)=>ai(r,e,t,"ReduceLogSumSquare",()=>["float t; value = 0.0;","t = _A(inputIdx); value += t * t;",""])});var v0,w0=X(()=>{"use strict";tt();v0=(r,e)=>{let t=be.calculateReshapedDims(e[0].dims,e[1].integerData);return r.session.pack?[r.reshapePacked(e[0],t)]:[r.reshapeUnpacked(e[0],t)]}});var T0,bc,x0,I0,mo,u4,_c,Pa,vc=X(()=>{"use strict";Ct();pt();We();T0={name:"Upsample",inputNames:["X"],inputTypes:[0]},bc=(r,e,t)=>(_c(e,t),[r.run({...T0,cacheHint:t.cacheKey,get:()=>u4(r,e,t)},e)]),x0=r=>mo(r,7),I0=r=>mo(r,9),mo=(r,e)=>{let t=e>=10,n=r.attributes.getString("mode","nearest");if(n!=="nearest"&&n!=="linear"&&(e<11||n!=="cubic"))throw new Error(`unrecognized mode: ${n}`);let i=[];e<9&&(i=r.attributes.getFloats("scales"),Pa(i,n,t));let o=r.attributes.getFloat("extrapolation_value",0),a=e>10?r.attributes.getString("coordinate_transformation_mode","half_pixel"):"asymmetric";if(["asymmetric","pytorch_half_pixel","tf_half_pixel_for_nn","align_corners","tf_crop_and_resize","half_pixel"].indexOf(a)===-1)throw new Error(`coordinate_transform_mode '${a}' is not supported`);let s=a==="tf_crop_and_resize",l=s,d=n==="nearest"&&e>=11?r.attributes.getString("nearest_mode","round_prefer_floor"):"";if(["round_prefer_floor","round_prefer_ceil","floor","ceil",""].indexOf(d)===-1)throw new Error(`nearest_mode '${d}' is not supported`);let h=r.attributes.getFloat("cubic_coeff_a",-.75),g=r.attributes.getInt("exclude_outside",0)!==0;if(g&&n!=="cubic")throw new Error("exclude_outside can be set to 1 only when mode is CUBIC.");let b=e<11?!0:n==="nearest"&&a==="asymmetric"&&d==="floor",w=0,T=0,I=0;return e>10?r.inputs.length>2?(w=1,T=2,I=3):(T=1,I=2):e===9&&(T=1),Me({opset:e,isResize:t,mode:n,scales:i,extrapolationValue:o,coordinateTransformMode:a,useExtrapolation:l,needRoiInput:s,nearestMode:d,cubicCoefficientA:h,excludeOutside:g,useNearest2xOptimization:b,roiInputIdx:w,scalesInputIdx:T,sizesInputIdx:I})},u4=(r,e,t)=>{let n=Se(r.session.backend.glContext.version),[i,o]=r.calculateTextureWidthAndHeight(e[0].dims,0),a=e[0].dims.map((I,O)=>Math.floor(I*t.scales[O])),[s,l]=r.calculateTextureWidthAndHeight(a,0),d=a.length,h=new Array(d),g=new Array(d),b=`
      int output_pitches[${d}];
      int input_pitches[${d}];
      `;for(let I=d-1;I>=0;I--)h[I]=I===d-1?1:h[I+1]*a[I+1],g[I]=I===d-1?1:g[I+1]*e[0].dims[I+1],b+=`
        output_pitches[${I}] = ${h[I]};
        input_pitches[${I}] = ${g[I]};
        `;let w=`
      float getInputFloat(int index) {
        vec2 coords = offsetToCoords(index, ${i}, ${o});
        float value = getColorAsFloat(${n.texture2D}(X, coords));
        return value;
      }
      `,T=t.mode==="nearest"?`
    ${w}
    float process(int indices[${d}]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${s}, ${l});

      ${b}

      int d, m;
      for (int dim = 0; dim < ${d}; ++dim) {
        d = output_index / output_pitches[dim];
        m = output_index - d * output_pitches[dim];
        output_index = m;

        if (scales[dim] != 1 && d > 0) {
          int d2 = d / scales[dim];
          m = d - d2 * scales[dim];
          d = d2;
        }
        input_index += input_pitches[dim] * d;
      }

      return getInputFloat(input_index);
    }`:d===4?`
    ${w}
    float process(int indices[4]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${s}, ${l});

      ${b}

      int m;
      int index_of_dim0, index_of_dim1, index_of_dim2, index_of_dim3;
      index_of_dim0 = output_index / output_pitches[0];
      m = output_index - index_of_dim0 * output_pitches[0];
      index_of_dim1 = m / output_pitches[1];
      m = m - index_of_dim1 * output_pitches[1];
      index_of_dim2 = m / output_pitches[2];
      m = m - index_of_dim2 * output_pitches[2];
      index_of_dim3 = m;

      int index_of_input_dim2, index_of_input_dim3, x_offset, y_offset;
      index_of_input_dim2 = index_of_dim2 / scales[2];
      y_offset = index_of_dim2 - index_of_input_dim2 * scales[2];
      index_of_input_dim3 = index_of_dim3 / scales[3];
      x_offset = index_of_dim3 - index_of_input_dim3 * scales[3];

      input_index = index_of_dim0 * input_pitches[0] +
            index_of_dim1 * input_pitches[1] +
            index_of_input_dim2 * input_pitches[2] +
            index_of_input_dim3;

      float x00 = getInputFloat(input_index);
      float x10, x01, x11;

      bool end_of_dim2 = false;
      if (index_of_input_dim2 == (${e[0].dims[2]} - 1)) {
        // It's the end in dimension 2
        x01 = x00;
        end_of_dim2 = true;
      } else {
        x01 = getInputFloat(input_index + input_pitches[2]);
      }

      if (index_of_input_dim3 == (input_pitches[2] - 1)) {
        // It's the end in dimension 3
        x10 = x00;
        x11 = x01;
      }
      else {
        x10 = getInputFloat(input_index + 1);
        x11 = end_of_dim2 ? x10 : getInputFloat(input_index + input_pitches[2] + 1);
      }

      float y0 = x00 + float(y_offset) * (x01 - x00) / float(scales[2]);
      float y1 = x10 + float(y_offset) * (x11 - x10) / float(scales[2]);
      return y0 + float(x_offset) * (y1 - y0) / float(scales[3]);
    }`:`
    ${w}
    float process(int indices[2]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${s}, ${l});

      ${b}

      int m;
      int index_of_dim0, index_of_dim1;
      index_of_dim0 = output_index / output_pitches[0];
      m = output_index - index_of_dim0 * output_pitches[0];
      index_of_dim1 = m;

      int index_of_input_dim0, index_of_input_dim1, x_offset, y_offset;
      index_of_input_dim0 = index_of_dim0 / scales[0];
      y_offset = index_of_dim0 - index_of_input_dim0 * scales[0];
      index_of_input_dim1 = index_of_dim1 / scales[1];
      x_offset = index_of_dim1 - index_of_input_dim1 * scales[1];

      input_index = index_of_input_dim0 * input_pitches[0] + index_of_input_dim1;

      float x00 = getInputFloat(input_index);
      float x10, x01, x11;

      bool end_of_dim0 = false;
      if (index_of_input_dim0 == (${e[0].dims[0]} - 1)) {
        // It's the end in dimension 0
        x01 = x00;
        end_of_dim0 = true;
      } else {
        x01 = getInputFloat(input_index + input_pitches[0]);
      }

      if (index_of_input_dim1 == (input_pitches[0] - 1)) {
        // It's the end in dimension 1
        x10 = x00;
        x11 = x01;
      }
      else {
        x10 = getInputFloat(input_index + 1);
        x11 = end_of_dim0 ? x10 : getInputFloat(input_index + input_pitches[0] + 1);
      }

      float y0 = x00 + float(y_offset) * (x01 - x00) / float(scales[0]);
      float y1 = x10 + float(y_offset) * (x11 - x10) / float(scales[0]);
      return y0 + float(x_offset) * (y1 - y0) / float(scales[1]);
    }`;return{...T0,output:{dims:a,type:e[0].type,textureType:0},shaderSource:T,variables:[{name:"scales",type:"int",arrayLength:t.scales.length,data:t.scales.map(I=>Math.ceil(I))}]}},_c=(r,e)=>{if(!r||e.opset<9&&r.length!==1||e.opset>=9&&e.opset<11&&r.length!==2||e.opset>=11&&r.length<2)throw new Error("invalid inputs.");if(e.scales.length>0&&r[0].dims.length!==e.scales.length)throw new Error("Invalid input shape.");if(r[0].type==="string")throw new Error("Invalid input tensor types.")},Pa=(r,e,t)=>{if(t){for(let n of r)if(n<=0)throw new Error("Scale value should be greater than 0.")}else for(let n of r)if(n<1)throw new Error("Scale value should be greater than or equal to 1.");if((e==="linear"||e==="cubic")&&r.length!==2&&(r.length!==4||r[0]!==1||r[1]!==1))throw new Error(`'Linear' mode and 'Cubic' mode only support 2-D inputs ('Bilinear', 'Bicubic')         or 4-D inputs with the corresponding outermost 2 scale values being 1         in the ${t?"Resize":"Upsample"} opeartor.`)}});var wc,Tc,S0,$0,l4,c4,d4,f4,A0=X(()=>{"use strict";pt();We();or();ri();vc();wc={name:"Resize",inputNames:["A"],inputTypes:[2]},Tc=(r,e,t)=>(_c(e,t),[r.run({...wc,cacheHint:t.cacheKey,get:()=>l4(r,e,t)},e)]),S0=r=>mo(r,10),$0=r=>mo(r,11),l4=(r,e,t)=>{let n=Se(r.session.backend.glContext.version),[i,o]=c4(e,t);if(i.every(j=>j===1)&&t.coordinateTransformMode!=="tf_crop_and_resize")return{...wc,output:{dims:o,type:e[0].type,textureType:2},hasMain:!0,shaderSource:`void main() {
                    vec4 v = ${n.texture2D}(X, TexCoords);
                    ${n.output} = v;
                }`};let s=o.length;if(s<2)throw new Error(`output dimension should be at least 2, but got ${s}`);let l=o[s-2],d=o[s-1],h=e[0].dims;if(s!==h.length)throw new Error(`output dimension should match input ${h.length}, but got ${s}`);let g=h[s-2],b=h[s-1],w=i[s-2],T=i[s-1],I="";if(t.mode!=="linear")throw new Error(`resize (packed) does not support mode: '${t.mode}'`);switch(t.coordinateTransformMode){case"asymmetric":I=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        return vec4(coords) / scaleWHWH;
                    }
                `;break;case"half_pixel":I=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        return (vec4(coords) + 0.5) / scaleWHWH - 0.5;
                    }
                `;break;case"pytorch_half_pixel":I=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        vec4 fcoords = vec4(coords);
                        return vec4(
                            ${d}.0 > 1.0 ? (fcoords.x + 0.5) / scaleWHWH.x - 0.5 : 0.0,
                            ${l}.0 > 1.0 ? (fcoords.y + 0.5) / scaleWHWH.y - 0.5 : 0.0,
                            ${d}.0 > 1.0 ? (fcoords.z + 0.5) / scaleWHWH.z - 0.5 : 0.0,
                            ${l}.0 > 1.0 ? (fcoords.w + 0.5) / scaleWHWH.w - 0.5 : 0.0
                          );
                    }
                `;break;case"align_corners":I=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        vec4 resized = vec4(${d}.0 - 1.0, ${l}.0 - 1.0, ${d}.0 - 1.0,
                            ${l}.0 - 1.0);
                        vec4 original = vec4(${b}.0 - 1.0, ${g}.0 - 1.0, ${b}.0 - 1.0,
                            ${g}.0 - 1.0);
                        vec4 new_scale = original / resized;
                        return vec4(coords) * new_scale;
                    }
                `;break;default:throw new Error(`resize (packed) does not support coordinateTransformMode:                                 '${t.coordinateTransformMode}'`)}let O=Nt(s),S=ar(),A=`
            const vec2 inputWH = vec2(${g}.0, ${b}.0);
            const vec4 scaleWHWH = vec4(float(${w}), float(${T}), float(${w}), float(${T}));
            ${S}
            ${I}
            float getAValue(int x10, int r, int c, int d) {
                return getChannel(getA(x10, r, c, d), vec2(c, d));
            }
            void main() {
                ${O} rc = getOutputCoords();

                int batch = rc[0];
                int depth = rc[1];

                // retrieve the 4 coordinates that is used in the 4 packed output values.
                ivec4 coords = ivec4(rc.wz, rc.w + 1, rc.z + 1);

                // calculate the source index in fraction
                vec4 sourceFrac = getSourceFracIndex(coords);

                // get the lower and upper bound of the 4 values that will be packed into one texel.
                ivec4 x00 = ivec4(max(sourceFrac.xy, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.xy)));
                ivec4 x01 = ivec4(max(sourceFrac.xw, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.xw)));
                ivec4 x10 = ivec4(max(sourceFrac.zy, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.zy)));
                ivec4 x11 = ivec4(max(sourceFrac.zw, vec2(0.0)), min(inputWH - 1.0, ceil(sourceFrac.zw)));

                bool hasNextRow = rc.w < ${l-1};
                bool hasNextCol = rc.z < ${d-1};

                // pack x00, x01, x10, x11's top-left corner into one vec4 structure
                vec4 topLeft = vec4(
                    getAValue(batch, depth, x00.x, x00.y),
                    hasNextCol ? getAValue(batch, depth, x01.x, x01.y) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.x, x10.y) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.x, x11.y) : 0.0);

                // pack x00, x01, x10, x11's top-right corner into one vec4 structure
                vec4 topRight = vec4(
                    getAValue(batch, depth, x00.x, x00.w),
                    hasNextCol ? getAValue(batch, depth, x01.x, x01.w) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.x, x10.w) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.x, x11.w) : 0.0);

                // pack x00, x01, x10, x11's bottom-left corner into one vec4 structure
                vec4 bottomLeft = vec4(
                    getAValue(batch, depth, x00.z, x00.y),
                    hasNextCol ? getAValue(batch, depth, x01.z, x01.y) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.z, x10.y) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.z, x11.y) : 0.0);

                // pack x00, x01, x10, x11's bottom-right corner into one vec4 structure
                vec4 bottomRight = vec4(
                    getAValue(batch, depth, x00.z, x00.w),
                    hasNextCol ? getAValue(batch, depth, x01.z, x01.w) : 0.0,
                    hasNextRow ? getAValue(batch, depth, x10.z, x10.w) : 0.0,
                    (hasNextRow && hasNextCol) ? getAValue(batch, depth, x11.z, x11.w) : 0.0);

                // calculate the interpolation fraction on u and v direction
                vec4 frac = vec4(sourceFrac) - floor(sourceFrac);
                vec4 clampFrac = clamp(frac, vec4(0.0), vec4(1.0));

                vec4 top = mix(topLeft, topRight, clampFrac.ywyw);
                vec4 bottom = mix(bottomLeft, bottomRight, clampFrac.ywyw);
                vec4 newValue = mix(top, bottom, clampFrac.xxzz);

                ${n.output} = vec4(newValue);
            }
        `;return{...wc,output:{dims:o,type:e[0].type,textureType:2},hasMain:!0,shaderSource:A}},c4=(r,e)=>{let n=r[0].dims,i=e.scales,o;if(i.length===0){let s=r[e.scalesInputIdx];if(s&&s.size!==0){if(r[e.sizesInputIdx])throw new Error("Only one of scales or sizes must be provided as input.");i=d4(s,e.mode,e.isResize)}else{let l=r[e.sizesInputIdx];if(!l||l.size===0)throw new Error("Either scales or sizes MUST be provided as input.");o=Array.from(l.integerData),i=f4(o,n,e.mode,e.isResize)}}else if(r[e.sizesInputIdx])throw new Error("Only one of scales or sizes must be provided as input.");let a=o||n.map((s,l)=>Math.floor(s*i[l]));return[i,a]},d4=(r,e,t)=>{let n=Array.from(r.floatData);return Pa(n,e,t),n},f4=(r,e,t,n)=>{let i=e.length,o=new Array(i);for(let a=0,s=i;a<s;a++)if(e[a]===0){if(r[a]!==0)throw new Error("Input dim is zero but required output dim is non-zero.");o[a]=1}else o[a]=r[a]/e[a];return Pa(o,t,n),o}});var C0,p4,O0=X(()=>{"use strict";ni();C0=(r,e)=>(p4(e),[new Tt([e[0].dims.length],"int32",void 0,void 0,new Int32Array(e[0].dims))]),p4=r=>{if(!r||r.length!==1)throw new Error("Shape requires 1 input.")}});var xc,P0,E0,D0,h4,k0,m4,g4,j0=X(()=>{"use strict";Ct();ho();tt();We();xc={name:"Slice",inputNames:["A"],inputTypes:[0]},P0=(r,e,t)=>(h4(e),[r.run({...xc,cacheHint:t.cacheKey,get:()=>D0(r,e[0],t)},e)]),E0=r=>{let e=r.attributes.getInts("starts"),t=r.attributes.getInts("ends"),n=r.attributes.getInts("axes",[]);return Me({starts:e,ends:t,axes:n})},D0=(r,e,t)=>{let n=t.axes.length===0?e.dims.slice(0).map((g,b)=>b):t.axes,i=be.normalizeAxes(n,e.dims.length),o=t.starts.map((g,b)=>g>e.dims[i[b]]-1?e.dims[i[b]]:be.normalizeAxis(g,e.dims[i[b]])),a=t.ends.map((g,b)=>g>e.dims[i[b]]-1?e.dims[i[b]]:be.normalizeAxis(g,e.dims[i[b]])),s=e.dims.slice(),l=[];for(let g=0;g<i.length;g++)s[i[g]]=a[g]-o[g],o[g]>0&&l.push(`outputIdx[${i[g]}] += ${o[g]};`);let h=`
      float process(int outputIdx[${s.length}]) {
        ${l.join(`
      `)}
        return _A(outputIdx);
      }`;return{...xc,output:{dims:s,type:e.type,textureType:0},shaderSource:h}},h4=r=>{if(!r||r.length!==1)throw new Error("Slice requires 1 input.");if(Lr.indexOf(r[0].type)===-1)throw new Error("Invalid input type.")},k0=(r,e)=>{g4(e);let t=m4(r,e);return[r.run({...xc,cacheHint:t.cacheKey,get:()=>D0(r,e[0],t)},[e[0]])]},m4=(r,e)=>{if(!r.session.isInitializer(e[1].dataId)||!r.session.isInitializer(e[2].dataId)||e.length>=4&&!r.session.isInitializer(e[3].dataId)||e.length>=5&&!r.session.isInitializer(e[4].dataId))throw new Error("dynamic slice attributes are not allowed");if(e.length>=5&&e[4].integerData.some(a=>a!==1))throw new Error("currently non-1 steps is not supported for Slice");let t=Array.from(e[1].integerData),n=Array.from(e[2].integerData),i=e.length>=4?Array.from(e[3].integerData):[],o=`${i};${t};${n}`;return{starts:t,ends:n,axes:i,cacheKey:o}},g4=r=>{if(!r||r.length<3||r.length>5)throw new Error("Invalid input number.");if(r[1].type!=="int32"||r[1].dims.length!==1)throw new Error("Invalid input type.");if(r[2].type!=="int32"||r[2].dims.length!==1)throw new Error("Invalid input type.");if(r.length>=4&&(r[3].type!=="int32"||r[3].dims.length!==1))throw new Error("Invalid input type.");if(r.length>=5&&(r[4].type!=="int32"||r[4].dims.length!==1))throw new Error("Invalid input type.")}});var L0,N0,R0,M0,z0,B0,F0,V0,y4,b4,_4,U0,G0=X(()=>{"use strict";Ct();tt();pt();We();Aa();L0={name:"SoftmaxComputeMax",inputNames:["A"],inputTypes:[0]},N0={name:"SoftmaxComputeScale",inputNames:["A","Max"],inputTypes:[0,0]},R0={name:"SoftMax",inputNames:["A","Max","Norm"],inputTypes:[0,0,0]},M0=(r,e,t)=>{U0(e);let n=e[0].dims.slice(),i=be.normalizeAxis(t.axis,n.length),o=be.sizeToDimension(n,i),a=be.sizeFromDimension(n,i);return V0(r,e,t,o,a)},z0=r=>Me({axis:r.attributes.getInt("axis",1)}),B0=r=>Me({axis:r.attributes.getInt("axis",-1)}),F0=(r,e,t)=>{U0(e);let n=e[0].dims.slice(),i=be.normalizeAxis(t.axis,n.length),o=n.length,a=i!==o-1,s=[],l=[],d=[],h;a&&(l=Array.from({length:o}).map((T,I)=>I),l[i]=o-1,l[o-1]=i,l.map(T=>s.push(n[T])),h=Me({perm:l}),d=oi(r,e,h));let g=a?be.sizeToDimension(s,o-1):be.sizeToDimension(n,o-1),b=a?be.sizeFromDimension(s,o-1):be.sizeFromDimension(n,o-1),w=V0(r,a?d:e,t,g,b);return a?oi(r,w,h):w},V0=(r,e,t,n,i)=>{let o=y4(r,e[0],n,i,[n]),a=r.run({...L0,cacheHint:t.cacheKey,get:()=>o},e),s=b4(r,e[0],n,i,o.output.dims,[n]),l=r.run({...N0,cacheHint:t.cacheKey,get:()=>s},[e[0],a]),d=_4(r,e[0],n,i,o.output.dims,s.output.dims);return[r.run({...R0,cacheHint:t.cacheKey,get:()=>d},[e[0],a,l])]},y4=(r,e,t,n,i)=>{let[o,a]=r.calculateTextureWidthAndHeight(e.dims,0),s=i.length;if(t<1||n<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(i.length!==1)throw new Error("Dimensionality of the output should be 1");if(i[0]!==t)throw new Error("Shape of the output should be equal to logical row count");let l=Se(r.session.backend.glContext.version),d=`
      float process(int[${s}] indices) {
        int logical_row_start_offset = indices[0] * ${n};

        float max = getColorAsFloat(${l.texture2D}(A, offsetToCoords(logical_row_start_offset, ${o},
        ${a} )));
        for(int i=1; i<${n}; ++i)
        {
          float current = getColorAsFloat(${l.texture2D}(A, offsetToCoords(logical_row_start_offset + i,
            ${o}, ${a})));
          if(current > max)
          max = current;
        }

        return max;
      }`;return{...L0,output:{dims:i,type:e.type,textureType:0},shaderSource:d}},b4=(r,e,t,n,i,o)=>{let[a,s]=r.calculateTextureWidthAndHeight(e.dims,0),l=o.length;if(t<1||n<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(o.length!==1)throw new Error("Dimensionality of the output should be 1");if(o[0]!==t)throw new Error("Shape of the output should be equal to logical row count");if(i.length!==1)throw new Error("Dimensionality of the intermediate results should be 1");if(i[0]!==t)throw new Error("Shape of the intermediate results should be equal to logical row count");let d=Se(r.session.backend.glContext.version),h=`
      float process(int[${l}] indices) {
        int logical_row_start_offset = indices[0] * ${n};

        float norm_factor = 0.0;
        float max = _Max(indices);
        for(int i=0; i<${n}; ++i)
        {
          norm_factor += exp(getColorAsFloat(${d.texture2D}(A, offsetToCoords(logical_row_start_offset + i,
            ${a}, ${s}))) - max);
        }

        return norm_factor;
      }`;return{...N0,output:{dims:o,type:e.type,textureType:0},shaderSource:h}},_4=(r,e,t,n,i,o)=>{let[a,s]=r.calculateTextureWidthAndHeight(e.dims,0),l=e.dims.length;if(t<1||n<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(i.length!==1||o.length!==1)throw new Error("Dimensionality of the intermediate results should be 1");if(i[0]!==t||o[0]!==t)throw new Error("Shape of the intermediate results should be equal to logical row count");let d=`
      float process(int[${l}] indices) {

      // get offset of current logical tensor index from the 2-D texture coordinates (TexCoords)
      int offset = coordsToOffset(TexCoords, ${a}, ${s});

      //determine the logical row for this index
      int logical_row_index[1];
      logical_row_index[0] = offset / ${n};

      float norm_factor = _Norm(logical_row_index);

      // avoid possible division by 0
      // if norm_facor is 0, all elements are zero
      // if so, return 0
      if(norm_factor == 0.0)
        return 0.0;

      return exp(_A(indices) - _Max(logical_row_index)) / norm_factor;
    }`;return{...R0,output:{dims:e.dims,type:e.type,textureType:0},shaderSource:d}},U0=r=>{if(!r||r.length!==1)throw new Error("Softmax requires 1 input.");if(r[0].type!=="float32"&&r[0].type!=="float64")throw new Error("Invalid input type")}});var W0,H0,q0,v4,w4,T4,K0=X(()=>{"use strict";Ct();tt();We();W0={name:"Split",inputNames:["A"],inputTypes:[0]},H0=(r,e,t)=>{T4(e);let n=be.normalizeAxis(t.axis,e[0].dims.length),i=v4(r,e,n,t),o=[];for(let a=0;a<i;++a)o.push(r.run({...W0,cacheHint:`${t.cacheKey};${a}`,get:()=>w4(r,e[0],t,n,a)},e));return o},q0=r=>{let e=r.attributes.getInt("axis",0),t=r.attributes.getInts("split",[]),n=r.outputs.length;return Me({axis:e,split:t,numOutputs:n})},v4=(r,e,t,n)=>{let[,i]=so.splitShape(e[0].dims,t,n.split,n.numOutputs);return i.length},w4=(r,e,t,n,i)=>{let[o,a]=so.splitShape(e.dims,n,t.split,t.numOutputs),s=a[i],l=o[i],h=`
      float process(int indices[${l.length}]) {
        indices[${n}] += ${s};
        return _A(indices);
      }
    `;return{...W0,cacheHint:`${t.cacheKey}:${i}`,output:{dims:l,type:e.type,textureType:0},shaderSource:h}},T4=r=>{if(!r||r.length!==1)throw new Error("Split requires one input.");if(r[0].type!=="int8"&&r[0].type!=="uint8"&&r[0].type!=="int16"&&r[0].type!=="uint16"&&r[0].type!=="int32"&&r[0].type!=="uint32"&&r[0].type!=="float32"&&r[0].type!=="float64"&&r[0].type!=="bool")throw new Error("Invalid input type.")}});var Ic,X0,Z0,x4,I4,J0=X(()=>{"use strict";tt();Ic=(r,e,t)=>{x4(e);let n=be.squeezeShape(e[0].dims,t);return[r.reshapeUnpacked(e[0],n)]},X0=(r,e)=>(I4(e),Ic(r,[e[0]],Array.from(e[1].integerData))),Z0=r=>r.attributes.getInts("axes"),x4=r=>{if(!r||r.length!==1)throw new Error("Squeeze requires 1 input.");if(r[0].type==="string")throw new Error("invalid input tensor types.")},I4=r=>{if(!r||r.length!==2)throw new Error("Squeeze requires 2 inputs.");if(r[1].type!=="int32")throw new Error("Invalid input type.")}});var Y0,S4,$4,Q0=X(()=>{"use strict";pt();We();Y0=(r,e)=>{$4(e);let t={name:"Sum",inputNames:e.map((i,o)=>`X${o}`),inputTypes:new Array(e.length).fill(0)};return[r.run({...t,get:()=>S4(r,e,t)},e)]},S4=(r,e,t)=>{let n=Se(r.session.backend.glContext.version),i=e[0].dims.slice(),a=`
      void main() {
        vec4 result = ${e.map((s,l)=>`${n.texture2D}(X${l},TexCoords)`).join(" + ")};
        ${n.output} = result;
      }
    `;return{...t,output:{dims:i,type:e[0].type,textureType:0},hasMain:!0,shaderSource:a}},$4=r=>{if(!r||r.length===0)throw new Error("Sum requires inputs.");let e=r[0].dims.length;for(let t=1;t<r.length;t++){if(e!==r[t].dims.length)throw new Error("Input shapes are mismatched.");for(let n=0;n<e;n++)if(r[0].dims[n]!==r[t].dims[n])throw new Error("Input shapes are not matched.")}if(r[0].type!=="float32"&&r[0].type!=="float64")throw new Error("Invalid input type.");for(let t=1;t<r.length;t++)if(r[0].type!==r[t].type)throw new Error("Input types are not matched.")}});var eT,A4,C4,tT=X(()=>{"use strict";ho();We();eT=(r,e)=>{C4(e);let t={name:"Tile",inputNames:["A"],inputTypes:[0]};return[r.run({...t,get:()=>A4(r,e,t)},e)]},A4=(r,e,t)=>{let n=e[0].dims.slice(),i=new Array(n.length),o=[];for(let l=0;l<n.length;l++)i[l]=n[l]*e[1].numberData[l],o.push(`inputIdx[${l}] = int(mod(float(outputIdx[${l}]), ${n[l]}.));`);let a=i.length,s=`
      float process(int outputIdx[${a}]) {
        int inputIdx[${a}];
        ${o.join(`
`)}
        return _A(inputIdx);
      }
    `;return{...t,output:{dims:i,type:e[0].type,textureType:0},shaderSource:s}},C4=r=>{if(!r||r.length!==2)throw new Error("Tile requires 2 input.");if(r[1].dims.length!==1)throw new Error("The second input shape must 1 dimension.");if(r[1].dims[0]!==r[0].dims.length)throw new Error("Invalid input shape.");if(Lr.indexOf(r[0].type)===-1)throw new Error("Invalid input type.");if(r[1].type!=="int32"&&r[1].type!=="int16")throw new Error("Invalid repeat type.")}});var Sc,nT,rT,O4,P4,iT=X(()=>{"use strict";tt();Sc=(r,e,t)=>{O4(e);let n=be.unsqueezeShape(e[0].dims,t);return[r.reshapeUnpacked(e[0],n)]},nT=(r,e)=>(P4(e),Sc(r,[e[0]],Array.from(e[1].integerData))),rT=r=>r.attributes.getInts("axes"),O4=r=>{if(!r||r.length!==1)throw new Error("Unsqueeze requires 1 input.");if(r[0].type==="string")throw new Error("invalid input tensor types.")},P4=r=>{if(!r||r.length!==2)throw new Error("Unsqueeze requires 2 inputs.");if(r[1].type!=="int32")throw new Error("Invalid input type.")}});var oT,aT=X(()=>{"use strict";gv();Ov();Dv();Mv();Ia();ww();Aw();Pw();kw();Rw();Bw();Gw();Kw();Sa();Yw();d0();_0();w0();A0();O0();j0();G0();K0();J0();Q0();tT();Aa();uc();iT();vc();oT=[["Abs","","6+",zv],["Acos","","7+",Bv],["Add","","7+",yv],["And","","7+",bv],["Asin","","7+",Fv],["Atan","","7+",Vv],["AveragePool","","7+",e0,t0],["BatchNormalization","","7+",hv,mv],["Cast","","6+",Pv,Ev],["Ceil","","6+",Wv],["Clip","","6-10",ac,Uv],["Clip","","11+",Gv],["Concat","","4+",Lv,Rv],["Conv","","1+",hc,mc],["ConvTranspose","","1+",_w,vw],["Cos","","7+",Hv],["Div","","7+",_v],["Dropout","","7+",sc],["DepthToSpace","","1+",Sw,$w],["Equal","","7+",vv],["Elu","","6+",qv,Kv],["Exp","","6+",Xv],["Flatten","","1+",Cw,Ow],["Floor","","6+",Zv],["FusedConv","com.microsoft","1+",hc,mc],["Gather","","1+",Ew,Dw],["Gemm","","7-10",gc,Lw],["Gemm","","11+",gc,Nw],["GlobalAveragePool","","1+",r0,i0],["GlobalMaxPool","","1+",l0],["Greater","","7+",wv],["Identity","","1+",sc],["ImageScaler","","1+",Mw,zw],["InstanceNormalization","","6+",Vw,Uw],["LeakyRelu","","6+",Jv,Yv],["Less","","7+",Tv],["LRN","","1+",Ww,Hw],["Log","","6+",Qv],["MatMul","","1+",fw,pw],["MaxPool","","1+",o0,a0],["Mul","","7+",xv],["Neg","","6+",ew],["Not","","1+",tw],["Or","","7+",Iv],["Pad","","2-10",yc,Xw],["Pad","","11+",Zw,Jw],["Pow","","7+",Sv],["PRelu","","7+",$v],["ReduceLogSum","","1+",y0,Nr],["ReduceMax","","1+",h0,Nr],["ReduceMean","","1+",p0,Nr],["ReduceMin","","1+",m0,Nr],["ReduceProd","","1+",g0,Nr],["ReduceSum","","1-12",f0,Nr],["ReduceSumSquare","","1+",b0,Nr],["Relu","","6+",nw],["Reshape","","5+",v0],["Resize","","10",Tc,S0],["Resize","","11+",Tc,$0],["Shape","","1+",C0],["Sigmoid","","6+",rw],["Sin","","7+",iw],["Slice","","10+",k0],["Slice","","1-9",P0,E0],["Softmax","","1-12",M0,z0],["Softmax","","13+",F0,B0],["Split","","2-12",H0,q0],["Sqrt","","6+",ow],["Squeeze","","1-12",Ic,Z0],["Squeeze","","13+",X0],["Sub","","7+",Av],["Sum","","6+",Y0],["Tan","","7+",aw],["Tanh","","6+",sw],["Tile","","6+",eT],["Transpose","","1+",oi,xw],["Upsample","","7-8",bc,x0],["Upsample","","9",bc,I0],["Unsqueeze","","1-12",Sc,rT],["Unsqueeze","","13+",nT],["Xor","","7+",Cv]]});function uT(r){let e={},t;for(;(t=sT.exec(r))!==null;){let n=t[3].split(",").map(i=>{let o=i.trim().split(" ");return o&&o.length===2?{type:o[0],name:o[1]}:null}).filter(i=>i!==null);e[t[2]]={params:n,body:t[4]}}for(let n in e){let i=E4.replace("__FUNC__",n),o=new RegExp(i,"gm");for(;(t=o.exec(r))!==null;){let a=t[1],s=t[2],l=t[3].split(","),d=a?`${a} ${s};`:"",h=e[n].body,g="";e[n].params.forEach((w,T)=>{w&&(g+=`${w.type} ${w.name} = ${l[T]};
`)}),h=`${g}
 ${h}`,h=h.replace("return",`${s} = `);let b=`
      ${d}
      {
        ${h}
      }
      `;r=r.replace(t[0],b)}}return r=r.replace(sT,""),r}var sT,E4,lT=X(()=>{"use strict";sT=/@inline[\s\n\r]+(\w+)[\s\n\r]+([0-9a-zA-Z_]+)\s*\(([^)]*)\)\s*{(([^}]|[\n\r])*)}/gm,E4="(\\w+)?\\s+([_0-9a-zA-Z]+)\\s+=\\s+__FUNC__\\((.*)\\)\\s*;"});function Oi(r,e){let t=[],n=[],i=e!=null&&Array.isArray(e)&&e.length===0,o=e==null||i?null:D4(e,r).sort(),a=0;for(let s=0;s<r.length;++s){if(o!=null){if(o[a]===s&&r[s]!==1)throw new Error(`Can't squeeze axis ${s} since its dim '${r[s]}' is not 1`);(o[a]==null||o[a]>s)&&r[s]===1&&(t.push(r[s]),n.push(s)),o[a]<=s&&a++}r[s]!==1&&(t.push(r[s]),n.push(s))}return{newShape:t,keptDims:n}}function D4(r,e){let t=e.length;return r=r==null?e.map((n,i)=>i):[].concat(r),xi(r.every(n=>n>=-t&&n<t),()=>`All values in axis param must be in range [-${t}, ${t}) but got axis ${r}`),xi(r.every(k4),()=>`All values in axis param must be integers but got axis ${r}`),r.map(n=>n<0?t+n:n)}function k4(r){return r%1===0}function j4(r){if(r.length===0)return 1;let e=r[0];for(let t=1;t<r.length;t++)e*=r[t];return e}function cT(r){let e=Math.ceil(Math.sqrt(r));return[e,Math.ceil(r/e)]}var Ea,$c=X(()=>{"use strict";Yt();tt();Ea=class{constructor(e){this.maxTextureSize=e}computeTextureWH(e,t){let n=this.computeTexture(e,t);return t&&t.isPacked&&(n[0]/=2,n[1]/=2),t&&t.reverseWH?[n[1],n[0]]:n}computeTexture(e,t){let n=t&&t.isPacked;if(e.length===0)return n?[2,2]:[1,1];let i=this.maxTextureSize;if(t&&t.breakAxis!==void 0){let s=t.breakAxis>=e.length?1:e.slice(t.breakAxis).reduce((d,h)=>d*h),l=t.breakAxis<=0?1:e.slice(0,t.breakAxis).reduce((d,h)=>d*h);if(s>i||l>i)rt.verbose("TextureLayout",`Given width/height preferences were unattainable: shape:${e}, breakAxis:${t.breakAxis}`);else return[s,l]}let o=e.slice(0);n&&(i=i*2,o=o.map((s,l)=>l>=o.length-2?o[l]%2===0?o[l]:o[l]+1:o[l]),o.length===1&&(o=[2,o[0]])),o.length!==2&&(o=Oi(o).newShape);let a=j4(o);return o.length<=1&&a<=i?[1,a]:o.length===2&&o[0]<=i&&o[1]<=i?o:o.length===3&&o[0]*o[1]<=i&&o[2]<=i?[o[0]*o[1],o[2]]:o.length===3&&o[0]<=i&&o[1]*o[2]<=i?[o[0],o[1]*o[2]]:o.length===4&&o[0]*o[1]*o[2]<=i&&o[3]<=i?[o[0]*o[1]*o[2],o[3]]:o.length===4&&o[0]<=i&&o[1]*o[2]*o[3]<=i?[o[0],o[1]*o[2]*o[3]]:n?cT(a/4).map(s=>s*2):cT(a)}}});var Da,dT=X(()=>{"use strict";tt();vr();pt();$c();or();Da=class extends on{constructor(e){super(e)}getFunctions(){return{...this.offsetToCoords(),...this.coordsToOffset(),...this.toVec(),...this.valueFrom(),...this.getCommonUtilFuncs(),...this.getInputsSamplingSnippets(),...this.getOutputSamplingSnippet()}}getCustomTypes(){return{}}offsetToCoords(){let e="offsetToCoords";return{offsetToCoords:new pe(`
      vec2 ${e}(int offset, int width, int height) {
        int t = offset / width;
        int s = offset - t*width;
        vec2 coords = (vec2(s,t) + vec2(0.5,0.5)) / vec2(width, height);
        return coords;
      }
      `)}}coordsToOffset(){let e="coordsToOffset";return{coordsToOffset:new pe(`
      int ${e}(vec2 coords, int width, int height) {
        float s = coords.s * float(width);
        float t = coords.t * float(height);
        int offset = int(t) * width + int(s);
        return offset;
      }
      `)}}getOutputSamplingSnippet(){let e=this.context.outputTextureLayout;return e.isPacked?this.getPackedOutputSamplingSnippet(e):this.getUnpackedOutputSamplingSnippet(e)}getPackedOutputSamplingSnippet(e){let t=e.unpackedShape,n=[e.width,e.height],i={},o="getOutputCoords";switch(t.length){case 0:i[o]=this.getOutputScalarCoords();break;case 1:i[o]=this.getOutputPacked1DCoords(t,n);break;case 2:i[o]=this.getOutputPacked2DCoords(t,n);break;case 3:i[o]=this.getOutputPacked3DCoords(t,n);break;default:i[o]=this.getOutputPackedNDCoords(t,n)}let s=`
      void setOutput(vec4 val) {
        ${Se(this.context.glContext.version).output} = val;
      }
    `,l="floatTextureSetRGBA";return i[l]=new pe(s),i}getUnpackedOutputSamplingSnippet(e){let t=e.unpackedShape,n=[e.width,e.height],i={},o="getOutputCoords";switch(t.length){case 0:i[o]=this.getOutputScalarCoords();break;case 1:i[o]=this.getOutputUnpacked1DCoords(t,n);break;case 2:i[o]=this.getOutputUnpacked2DCoords(t,n);break;case 3:i[o]=this.getOutputUnpacked3DCoords(t,n);break;case 4:i[o]=this.getOutputUnpacked4DCoords(t,n);break;case 5:i[o]=this.getOutputUnpacked5DCoords(t,n);break;case 6:i[o]=this.getOutputUnpacked6DCoords(t,n);break;default:throw new Error(`Unsupported output dimensionality: ${t.length}`)}let s=`
        void setOutput(float val) {
          ${Se(this.context.glContext.version).output} = vec4(val, 0, 0, 0);
        }
    `,l="floatTextureSetR";return i[l]=new pe(s),i}getOutputScalarCoords(){return new pe(`
      int getOutputCoords() {
        return 0;
      }
    `)}getOutputPacked1DCoords(e,t){let n=t,i="";return n[0]===1?(i=`
          int getOutputCoords() {
            return 2 * int(TexCoords.y * ${n[1]}.0);
          }
        `,new pe(i)):n[1]===1?(i=`
          int getOutputCoords() {
            return 2 * int(TexCoords.x * ${n[0]}.0);
          }
        `,new pe(i)):(i=`
        int getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                 vec2(${n[0]}, ${n[1]}));
          return 2 * (resTexRC.y * ${n[0]} + resTexRC.x);
        }
      `,new pe(i))}getOutputPacked2DCoords(e,t){let n="";if(Yr.arraysEqual(e,t))return n=`
        ivec2 getOutputCoords() {
          return 2 * ivec2(TexCoords.xy * vec2(${t[0]}, ${t[1]}));
        }
      `,new pe(n);let i=t,o=Math.ceil(e[1]/2);return n=`
        ivec2 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${i[0]}, ${i[1]}));

          int index = resTexRC.y * ${i[0]} + resTexRC.x;

          // reverse r and c order for packed texture
          int r = imod(index, ${o}) * 2;
          int c = 2 * (index / ${o});

          return ivec2(r, c);
        }
      `,new pe(n)}getOutputPacked3DCoords(e,t){let n=[t[0],t[1]],i=Math.ceil(e[2]/2),o=i*Math.ceil(e[1]/2),a=`
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${n[0]}, ${n[1]}));
          int index = resTexRC.y * ${n[0]} + resTexRC.x;

          int b = index / ${o};
          index -= b * ${o};

          // reverse r and c order for packed texture
          int r = imod(index, ${i}) * 2;
          int c = 2 * (index / ${i});

          return ivec3(b, r, c);
        }
      `;return new pe(a)}getOutputPackedNDCoords(e,t){let n=[t[0],t[1]],i=Math.ceil(e[e.length-1]/2),o=i*Math.ceil(e[e.length-2]/2),a=o,s="",l="b, r, c";for(let h=2;h<e.length-1;h++)a*=e[e.length-h-1],s=`
      int b${h} = index / ${a};
      index -= b${h} * ${a};
    `+s,l=`b${h}, `+l;let d=`
      ivec${e.length} getOutputCoords() {
        ivec2 resTexRC = ivec2(TexCoords.xy *
                              vec2(${n[0]}, ${n[1]}));
        int index = resTexRC.y * ${n[0]} + resTexRC.x;

        ${s}

        int b = index / ${o};
        index -= b * ${o};

        // reverse r and c order for packed texture
        int r = imod(index, ${i}) * 2;
        int c = 2 * (index / ${i});

        return ivec${e.length}(${l});
      }
    `;return new pe(d)}getOutputUnpacked1DCoords(e,t){let n=`
        int getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          return resTexRC.y * ${t[0]} + resTexRC.x;
        }
      `;return new pe(n)}getOutputUnpacked2DCoords(e,t){let n=`
        ivec2 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          int r = index / ${e[1]};
          int c = index - r * ${e[1]};
          return ivec2(r, c);
        }
      `;return new pe(n)}getOutputUnpacked3DCoords(e,t){let n="",i=e.length,o=null;i<2&&(o=[]),o=new Array(i-1),o[i-2]=e[i-1];for(let l=i-3;l>=0;--l)o[l]=o[l+1]*e[l+1];let a=["r","c","d"],s=o.map((l,d)=>{let h=`int ${a[d]} = index / ${l}`,g=d===o.length-1?`int ${a[d+1]} = index - ${a[d]} * ${l}`:`index -= ${a[d]} * ${l}`;return`${h}; ${g};`}).join("");return n=`
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${s}
          return ivec3(r, c, d);
        }
      `,new pe(n)}getOutputUnpacked4DCoords(e,t){let n="",i=e.length,o=null;i<2&&(o=[]),o=new Array(i-1),o[i-2]=e[i-1];for(let l=i-3;l>=0;--l)o[l]=o[l+1]*e[l+1];let a=["r","c","d","d2"],s=o.map((l,d)=>{let h=`int ${a[d]} = index / ${l}`,g=d===o.length-1?`int ${a[d+1]} = index - ${a[d]} * ${l}`:`index -= ${a[d]} * ${l}`;return`${h}; ${g};`}).join("");return n=`
      ivec4 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${s}
          return ivec4(r, c, d, d2);
        }
      `,new pe(n)}getOutputUnpacked5DCoords(e,t){let n="",i=e.length,o=null;i<2&&(o=[]),o=new Array(i-1),o[i-2]=e[i-1];for(let l=i-3;l>=0;--l)o[l]=o[l+1]*e[l+1];let a=["r","c","d","d2","d3"],s=o.map((l,d)=>{let h=`int ${a[d]} = index / ${l}`,g=d===o.length-1?`int ${a[d+1]} = index - ${a[d]} * ${l}`:`index -= ${a[d]} * ${l}`;return`${h}; ${g};`}).join("");return n=`
      ivec5 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${s}
          return ivec5(r, c, d, d2, d3);
        }
      `,new pe(n)}getOutputUnpacked6DCoords(e,t){let n="",i=e.length,o=null;i<2&&(o=[]),o=new Array(i-1),o[i-2]=e[i-1];for(let l=i-3;l>=0;--l)o[l]=o[l+1]*e[l+1];let a=["r","c","d","d2","d3","d4"],s=o.map((l,d)=>{let h=`int ${a[d]} = index / ${l}`,g=d===o.length-1?`int ${a[d+1]} = index - ${a[d]} * ${l}`:`index -= ${a[d]} * ${l}`;return`${h}; ${g};`}).join("");return n=`
     ivec6 getOutputCoords() {
         ivec2 resTexRC = ivec2(TexCoords.xy *
                               vec2(${t[0]}, ${t[1]}));
         int index = resTexRC.y * ${t[0]} + resTexRC.x;
         ${s}
         return ivec6(r, c, d, d2, d3, d4);
       }
     `,new pe(n)}getCommonUtilFuncs(){let e={},t="uvFromFlat";e[t]=new pe(`
    vec2 uvFromFlat(int texNumR, int texNumC, int index) {
      int texC = index / texNumR;
      int texR = index - texC * texNumR;
      // TODO: swap texR, texC order in following function so row is corresponding to u and column is corresponding to
      //       v.
      return (vec2(texR, texC) + halfCR) / vec2(texNumR, texNumC);
    }
    `),t="packedUVfrom1D",e[t]=new pe(`
      vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
        int texelIndex = index / 2;
        int texR = texelIndex / texNumC;
        int texC = texelIndex - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),t="packedUVfrom2D",e[t]=new pe(`
      vec2 packedUVfrom2D(int texNumR, int texNumC, int texelsInLogicalRow, int row, int col) {
        int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
        int texR = texelIndex / texNumC;
        int texC = texelIndex - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),t="packedUVfrom3D",e[t]=new pe(`
      vec2 packedUVfrom3D(int texNumR, int texNumC,
          int texelsInBatch, int texelsInLogicalRow, int b,
          int row, int col) {
        int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
        int texR = index / texNumC;
        int texC = index - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),t="sampleTexture";let n=Se(this.context.glContext.version);return e[t]=new pe(`
        float sampleTexture(sampler2D textureSampler, vec2 uv) {
            return ${n.texture2D}(textureSampler, uv).r;
        }`),e}getInputsSamplingSnippets(){let e={},t=this.context.outputTextureLayout;return this.context.programInfo.inputNames.forEach((n,i)=>{let o=this.context.inputTextureLayouts[i],a=ya(n);o.isPacked?e[a]=this.getPackedSamplerFromInput(a,n,o):e[a]=this.getUnpackedSamplerFromInput(a,n,o);let s=Y_(n);o.unpackedShape.length<=t.unpackedShape.length&&(o.isPacked?e[s]=this.getPackedSamplerAtOutputCoords(s,o,t,n):e[s]=this.getUnpackedSamplerAtOutputCoords(s,o,t,n))}),e}getPackedSamplerAtOutputCoords(e,t,n,i){let o=t.unpackedShape,a=n.unpackedShape,l=ya(i),d=o.length,h=a.length,g=Lt.getBroadcastDims(o,a),b=Nt(h),w=h-d,T,I=gn();d===0?T="":h<2&&g.length>=1?T="coords = 0;":T=g.map(Y=>`coords.${I[Y+w]} = 0;`).join(`
`);let O="";h<2&&d>0?O="coords":O=o.map((Y,ee)=>`coords.${I[ee+w]}`).join(", ");let S="return outputValue;",j=be.size(o)===1,V=be.size(a)===1;if(d===1&&!j&&!V)S=`
        return vec4(outputValue.xy, outputValue.xy);
      `;else if(j&&!V)h===1?S=`
          return vec4(outputValue.x, outputValue.x, 0., 0.);
        `:S=`
          return vec4(outputValue.x);
        `;else if(g.length){let Y=d-2,ee=d-1;g.indexOf(Y)>-1&&g.indexOf(ee)>-1?S="return vec4(outputValue.x);":g.indexOf(Y)>-1?S="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":g.indexOf(ee)>-1&&(S="return vec4(outputValue.xx, outputValue.zz);")}let W=`
        int lastDim = coords.${I[h-1]};
        coords.${I[h-1]} = coords.${I[h-2]};
        coords.${I[h-2]} = lastDim;
      `,F=`
      vec4 ${e}() {
        ${b} coords = getOutputCoords();
        ${W}
        ${T}
        vec4 outputValue = ${l}(${O});
        ${S}
      }
    `;return new pe(F,["coordinates.getOutputCoords"])}getUnpackedSamplerAtOutputCoords(e,t,n,i){let o=[n.width,n.height],a=[t.width,t.height],s=t.unpackedShape.length,l=n.unpackedShape.length,d=t.unpackedShape,h=n.unpackedShape,g=ya(i);if(s===l&&Yr.arraysEqual(a,o)){let j=`
          float ${e}() {
            return sampleTexture(${i}, TexCoords);
          }
        `;return new pe(j,["coordinates.sampleTexture"])}let b=Nt(l),w=Lt.getBroadcastDims(d,h),T=l-s,I,O=gn();s===0?I="":l<2&&w.length>=1?I="coords = 0;":I=w.map(j=>`coords.${O[j+T]} = 0;`).join(`
`);let S="";l<2&&s>0?S="coords":S=t.unpackedShape.map((j,k)=>`coords.${O[k+T]}`).join(", ");let A=`
        float ${e}() {
          ${b} coords = getOutputCoords();
          ${I}
          return ${g}(${S});
        }
      `;return new pe(A,["coordinates.getOutputCoords"])}getPackedSamplerFromInput(e,t,n){switch(n.unpackedShape.length){case 0:return this.getPackedSamplerScalar(e,t);case 1:return this.getPackedSampler1D(e,t,n);case 2:return this.getPackedSampler2D(e,t,n);case 3:return this.getPackedSampler3D(e,t,n);default:return this.getPackedSamplerND(e,t,n)}}getUnpackedSamplerFromInput(e,t,n){let i=n.unpackedShape;switch(i.length){case 0:return this.getUnpackedSamplerScalar(e,t,n);case 1:return this.getUnpackedSampler1D(e,t,n);case 2:return this.getUnpackedSampler2D(e,t,n);case 3:return this.getUnpackedSampler3D(e,t,n);case 4:return this.getUnpackedSampler4D(e,t,n);case 5:return this.getUnpackedSampler5D(e,t,n);case 6:return this.getUnpackedSampler6D(e,t,n);default:throw new Error(`Unsupported dimension ${i.length}-D`)}}getPackedSamplerScalar(e,t){let n=Se(this.context.glContext.version),i=`
          vec4 ${e}() {
            return ${n.texture2D}(${t}, halfCR);
          }
        `;return new pe(i)}getPackedSampler1D(e,t,n){let i=[n.width,n.height],o=[i[1],i[0]],a=Se(this.context.glContext.version),l=`vec4 ${e}(int index) {
      vec2 uv = packedUVfrom1D(
      ${o[0]}, ${o[1]}, index);
      return ${a.texture2D}(${t}, uv);
    }`;return new pe(l,["coordinates.packedUVfrom1D"])}getPackedSampler2D(e,t,n){let i=n.unpackedShape,o=[n.width,n.height],a=Se(this.context.glContext.version),s=o[0],l=o[1];if(o!=null&&Yr.arraysEqual(i,o)){let w=`vec4 ${e}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${l}.0, ${s}.0);
        return ${a.texture2D}(${t}, uv);
      }`;return new pe(w)}let d=o,h=Math.ceil(i[1]/2),b=`vec4 ${e}(int row, int col) {
      vec2 uv = packedUVfrom2D(${d[1]}, ${d[0]}, ${h}, row, col);
      return ${a.texture2D}(${t}, uv);
    }`;return new pe(b,["coordinates.packedUVfrom2D"])}getPackedSampler3D(e,t,n){let i=n.unpackedShape,o=[n.width,n.height],a=[o[0],o[1]],s=Se(this.context.glContext.version);if(i[0]===1){let T=i.slice(1),I=[1,2],O=Ii(i,T),S=["b","row","col"],A=JSON.parse(JSON.stringify(n));A.unpackedShape=O;let j=this.getPackedSamplerFromInput(e,t,A),V=`${j.routineBody}
      vec4 ${e}(int b, int row, int col) {
        return ${e}(${Si(S,I)});
      } `;return new pe(V,j.dependencies)}let l=a[0],d=a[1],h=Math.ceil(i[2]/2),g=h*Math.ceil(i[1]/2),w=`vec4 ${e}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${d}, ${l}, ${g}, ${h}, b, row, col);
      return ${s.texture2D}(${t}, uv);}`;return new pe(w,["coordinates.packedUVfrom3D"])}getPackedSamplerND(e,t,n){let i=n.unpackedShape,o=i.length,a=[n.width,n.height],s=Se(this.context.glContext.version),l=[a[0],a[1]],d=l[1],h=l[0],g=Math.ceil(i[o-1]/2),b=g*Math.ceil(i[o-2]/2),w="int b, int row, int col",T=`b * ${b} + (row / 2) * ${g} + (col / 2)`;for(let S=2;S<o-1;S++)w=`int b${S}, `+w,b*=i[o-S-1],T=`b${S} * ${b} + `+T;let O=`vec4 ${e}(${w}) {
      int index = ${T};
      int texR = index / ${h};
      int texC = index - texR * ${h};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${h}, ${d});
      return ${s.texture2D}(${t}, uv);
    }`;return new pe(O)}getUnpackedSamplerScalar(e,t,n){let[i,o]=[n.width,n.height];if(i===1&&o===1){let s=`
          float ${e}() {
            return sampleTexture(${t}, halfCR);
          }
        `;return new pe(s,["coordinates.sampleTexture"])}let a=`
        float ${e}() {
          int offset_${t} = coordsToOffset(TexCoords, ${i}, ${o});
          vec2 uv = uvFromFlat(${i}, ${o}, offset_${t});
          return sampleTexture(${t}, uv);
        }
      `;return new pe(a,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler1D(e,t,n){let i=n.width,o=n.height;if(o===1&&i===1){let s=`
        float ${e}(int index) {
          return sampleTexture(${t}, halfCR);
        }
      `;return new pe(s,["coordinates.sampleTexture"])}if(o===1){let s=`
          float ${e}(int index) {
            vec2 uv = vec2((float(index) + 0.5) / ${i}.0, 0.5);
            return sampleTexture(${t}, uv);
          }
        `;return new pe(s,["coordinates.sampleTexture"])}if(i===1){let s=`
          float ${e}(int index) {
            vec2 uv = vec2(0.5, (float(index) + 0.5) / ${o}.0);
            return sampleTexture(${t}, uv);
          }
        `;return new pe(s,["coordinates.sampleTexture"])}let a=`
        float ${e}(int index) {
          vec2 uv = uvFromFlat(${i}, ${o}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new pe(a,["coordinates.uvFromFlat","coordinates.sampleTexture"])}getUnpackedSampler2D(e,t,n){let i=n.unpackedShape,o=[n.height,n.width];if(o!=null&&Yr.arraysEqual(i,o)){let b=o[1],w=o[0],T=`
          float ${e}(int row, int col) {
            vec2 uv = (vec2(row, col) + halfCR) / vec2(${b}.0, ${w}.0);
            return sampleTexture(${t}, uv);
          }
        `;return new pe(T,["coordinates.sampleTexture"])}let{newShape:a,keptDims:s}=Oi(i),l=a;if(l.length<i.length){let b=Ii(i,l),w=JSON.parse(JSON.stringify(n));w.unpackedShape=b;let T=["col","row"],I=`
          ${this.getUnpackedSamplerFromInput(e,t,w).routineBody}
          float ${e}(int row, int col) {
            return ${e}(${Si(T,s)});
          }
        `;return new pe(I,["coordinates.sampleTexture"])}let d=o[1],h=o[0];if(h===1){let b=`
          float ${e}(int row, int col) {
            int offset_${t} = coordsToOffset(TexCoords, ${d}, ${h});
            float index = dot(vec3(row, col, offset_${t}), vec3(${i[1]}, 1, 1));
            vec2 uv = vec2(0.5, (index + 0.5) / ${d}.0);
            return sampleTexture(${t}, uv);
          }
        `;return new pe(b,["coordinates.sampleTexture","coordinates.coordsToOffset"])}if(d===1){let b=`
          float ${e}(int row, int col) {
            int offset_${t} = coordsToOffset(TexCoords, ${d}, ${h});
            float index = dot(vec3(row, col, offset_${t}), vec3(${i[1]}, 1, 1));
            vec2 uv = vec2((index + 0.5) / ${h}.0, 0.5);
            return sampleTexture(${t}, uv);
          }
        `;return new pe(b,["coordinates.sampleTexture","coordinates.coordsToOffset"])}let g=`
        float ${e}(int row, int col) {
          int index = col * ${i[1]} + row;
          vec2 uv = uvFromFlat(${d}, ${h}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new pe(g,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler3D(e,t,n){let i=n.unpackedShape,o=i[1]*i[2],a=i[2],{newShape:s,keptDims:l}=Oi(i),d=s;if(d.length<i.length){let w=Ii(i,d),T=["batch","col","row"],I=JSON.parse(JSON.stringify(n));I.unpackedShape=w;let O=this.getUnpackedSamplerFromInput(e,t,I),S=l.reverse(),A=`
          ${O.routineBody}
          float ${e}(int batch, int row, int col) {
            return ${e}(${Si(T,S)});
          }
        `;return new pe(A,O.dependencies)}let h=n.width,g=n.height,b=`
          float ${e}(int depth, int row, int col) {
            // Explicitly use integer operations as dot() only works on floats.
            int index = depth * ${o} + col * ${a} + row;
            vec2 uv = uvFromFlat(${h}, ${g}, index);
            return sampleTexture(${t}, uv);
          }
      `;return new pe(b,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler4D(e,t,n){let i=n.unpackedShape,o=i[3],a=i[2]*o,s=i[1]*a,l=n.width,d=n.height,h=`
        float ${e}(int row, int col, int depth, int depth2) {
          int index = row * ${s} + col * ${a} +
              depth2 * ${o} + depth;
          vec2 uv = uvFromFlat(${l}, ${d}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new pe(h,["coordinates.uvFromFlat","coordinates.sampleTexture"])}getUnpackedSampler5D(e,t,n){let i=n.unpackedShape,o=i[4],a=i[3]*o,s=i[2]*a,l=i[1]*s,{newShape:d,keptDims:h}=Oi(i);if(d.length<i.length){let T=Ii(i,d),I=["row","col","depth","depth2","depth3"],O=JSON.parse(JSON.stringify(n));O.unpackedShape=T;let S=`
          ${this.getUnpackedSamplerFromInput(e,t,O).routineBody}
          float ${e}(int row, int col, int depth, int depth2, int depth3) {
            return ${e}(${Si(I,h)});
          }
        `;return new pe(S,["coordinates.sampleTexture","coordinates.uvFromFlat"])}let g=n.width,b=n.height,w=`
        float ${e}(int row, int col, int depth, int depth2, int depth3) {
          int index = row * ${l} + col * ${s} + depth * ${a} +
          depth3 * ${o} + depth2;
          vec2 uv = uvFromFlat(${g}, ${b}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new pe(w,["coordinates.sampleTexture","coordinates.uvFromFlat"])}getUnpackedSampler6D(e,t,n){let i=n.unpackedShape,o=i[5],a=i[4]*o,s=i[3]*a,l=i[2]*s,d=i[1]*l,{newShape:h,keptDims:g}=Oi(i);if(h.length<i.length){let I=Ii(i,h),O=["row","col","depth","depth2","depth3","depth4"],S=JSON.parse(JSON.stringify(n));S.unpackedShape=I;let A=`
            ${this.getUnpackedSamplerFromInput(e,t,S).routineBody}
            float ${e}(int row, int col, int depth,
              int depth2, int depth3, int depth4) {
              return ${e}(${Si(O,g)});
            }
          `;return new pe(A,["coordinates.sampleTexture","coordinates.uvFromFlat"])}let b=n.width,w=n.height,T=`
          float ${e}(int row, int col, int depth,
            int depth2, int depth3, int depth4) {
            int index = row * ${d} + col * ${l} + depth * ${s} +
            depth2 * ${a} + depth3 * ${o} + depth4;
            vec2 uv = uvFromFlat(${b}, ${w}, index);
            return sampleTexture(${t}, uv);
          }
        `;return new pe(T,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}toVec(){let e=this.context.outputTextureLayout,t=e.shape.length,n=e.strides,i=e.width,o=e.height,a=[];for(let l=0;l<t-1;++l)a.push(`
        c[${l}] = offset / ${n[l]};`),a.push(`
        offset -= c[${l}] * ${n[l]};`);a.push(`
        c[${t-1}] = offset;`);let s=`
      void toVec(vec2 texCoords, out int c[${t}]) {
        int offset = coordsToOffset(texCoords, ${i}, ${o});
        ${a.join("")}
      }
      void toVec(int offset, out int c[${t}]) {
        ${a.join("")}
      }
    `;return{toVec:new pe(s,["coordinates.coordsToOffset"])}}valueFrom(){let e={};return this.context.programInfo.inputNames.forEach((t,n)=>{let i=this.context.inputTextureLayouts[n],a=(i.unpackedShape.length>0?i.unpackedShape:i.shape).length,s=`_${t}`;e[s]=new pe(this.getValueFromSingle(t,a,i.width,i.height,!1),[`shapeUtils.indicesToOffset${s}`,"coordinates.offsetToCoords","fragcolor.getColorAsFloat"]),s=s+"_T",e[s]=new pe(this.getValueFromSingle(t,a,i.width,i.height,!0),[`shapeUtils.indicesToOffset${s}`,"coordinates.offsetToCoords","fragcolor.getColorAsFloat"])}),e}getValueFromSingle(e,t,n,i,o){let a=`_${e}`;o&&(a=a+"_T");let s=Se(this.context.glContext.version);return`
        float ${a}(int m[${t}]) {
          int offset = indicesToOffset${a}(m);
          vec2 coords = offsetToCoords(offset, ${n}, ${i});
          float value = getColorAsFloat(${s.texture2D}(${e}, coords));
          return value;
        }
        `}getPackedValueFrom(e,t,n,i,o){let a=`_${e}_Pack`;o&&(a=a+"_T");let s=Se(this.context.glContext.version);return`
        vec4 ${a}(int m[${t}]) {
          int offset = indicesToOffset_${e}(m);
          vec2 coords = offsetToCoords(offset, ${n}, ${i});
          return ${s.texture2D}(${e}, coords);
        }
        `}}});var ka,fT=X(()=>{"use strict";vr();ka=class r extends on{constructor(e){super(e)}getFunctions(){return{...this.encodeFloat32(),...this.decodeFloat32()}}getCustomTypes(){return{}}encodeFloat32(){return{encode:new pe(`highp vec4 encode(highp float f) {
        return vec4(f, 0.0, 0.0, 0.0);
      }
        `)}}decodeFloat32(){return{decode:new pe(`highp float decode(highp vec4 rgba) {
        return rgba.r;
      }
        `)}}encodeUint8(){let e=r.isLittleEndian()?"rgba.rgba=rgba.abgr;":"";return{encode:new pe(`
      highp vec4 encode(highp float f) {
        highp float F = abs(f);
        highp float Sign = step(0.0,-f);
        highp float Exponent = floor(log2(F));
        highp float Mantissa = (exp2(- Exponent) * F);
        Exponent = floor(log2(F) + 127.0) + floor(log2(Mantissa));
        highp vec4 rgba;
        rgba[0] = 128.0 * Sign  + floor(Exponent*exp2(-1.0));
        rgba[1] = 128.0 * mod(Exponent,2.0) + mod(floor(Mantissa*128.0),128.0);
        rgba[2] = floor(mod(floor(Mantissa*exp2(23.0 -8.0)),exp2(8.0)));
        rgba[3] = floor(exp2(23.0)*mod(Mantissa,exp2(-15.0)));
        ${e}
        rgba = rgba / 255.0; // values need to be normalized to [0,1]
        return rgba;
    }
        `)}}decodeUint8(){let e=r.isLittleEndian()?"rgba.rgba=rgba.abgr;":"";return{decode:new pe(`
        highp float decode(highp vec4 rgba) {
          rgba = rgba * 255.0; // values need to be de-normalized from [0,1] to [0,255]
          ${e}
          highp float Sign = 1.0 - step(128.0,rgba[0])*2.0;
          highp float Exponent = 2.0 * mod(rgba[0],128.0) + step(128.0,rgba[1]) - 127.0;
          highp float Mantissa = mod(rgba[1],128.0)*65536.0 + rgba[2]*256.0 +rgba[3] + float(0x800000);
          highp float Result =  Sign * exp2(Exponent) * (Mantissa * exp2(-23.0 ));
          return Result;
      }
        `)}}static isLittleEndian(){let e=new ArrayBuffer(4),t=new Uint32Array(e),n=new Uint8Array(e);if(t[0]=3735928559,n[0]===239)return!0;if(n[0]===222)return!1;throw new Error("unknown endianness")}}});var ja,pT=X(()=>{"use strict";vr();pt();ja=class extends on{constructor(e){super(e)}getFunctions(){return{...this.setFragColor(),...this.getColorAsFloat()}}getCustomTypes(){return{}}setFragColor(){let e=Se(this.context.glContext.version);return{setFragColor:new pe(`
        void setFragColor(float value) {
            ${e.output} = encode(value);
        }
        `,["encoding.encode"])}}getColorAsFloat(){return{getColorAsFloat:new pe(`
        float getColorAsFloat(vec4 color) {
            return decode(color);
        }
        `,["encoding.decode"])}}}});var La,hT=X(()=>{"use strict";vr();La=class r extends on{constructor(e){super(e)}getFunctions(){return{...this.bcastIndex(),...this.bcastMatmulIndex(),...this.offsetToIndices(),...this.indicesToOffset(),...this.incrementIndices()}}getCustomTypes(){return{}}bcastIndex(){let e=this.context.outputTextureLayout.shape.length,t={};return this.context.programInfo.inputNames.forEach((n,i)=>{let o=this.context.inputTextureLayouts[i].unpackedShape;if(o.length<=e){let a=o.length,s=e-a,l=`bcastIndices_${n}`,d="";for(let g=0;g<a;++g)d+=`
          realIndices[${g}] = int( mod(float(bcastedIndices[${s+g}]), ${o[g]}.0) );
          `;let h=`
        void ${l} (int bcastedIndices[${e}], out int realIndices[${a}]) {
          ${d}
        }
        `;t[l]=new pe(h)}}),t}bcastMatmulIndex(){let e=this.context.outputTextureLayout.shape.length,t={};return this.context.programInfo.inputNames.forEach((n,i)=>{let o=this.context.inputTextureLayouts[i].shape;if(!(o.length<2||o.length>e)){let a=o.length,s=e-a,l=`bcastMatmulIndices_${n}`,d="";for(let g=0;g<a-2;++g)d+=`
          realIndices[${g}] = int( mod(float(bcastedIndices[${s+g}]), ${o[g]}.0) );
          `;let h=`
        void ${l}(int bcastedIndices[${e}], out int realIndices[${a}]) {
          ${d}
          realIndices[${a-1}] = bcastedIndices[${e-1}];
          realIndices[${a-2}] = bcastedIndices[${e-2}];
        }
        `;t[l]=new pe(h)}}),t}indicesToOffset(){let e={};return this.context.programInfo.inputNames.forEach((t,n)=>{let i=this.context.inputTextureLayouts[n].shape,o=this.context.inputTextureLayouts[n].strides,a=i.length,s=`indicesToOffset_${t}`;e[s]=new pe(r.indexToOffsetSingle(s,a,o)),s=`indicesToOffset_${t}_T`,e[s]=new pe(r.indexToOffsetSingle(s,a,o.slice().reverse()))}),e}static indexToOffsetSingle(e,t,n){let i="";for(let o=t-1;o>=0;--o)i+=`
        offset += indices[${o}] * ${n[o]};
        `;return`
      int ${e}(int indices[${t}]) {
        int offset = 0;
        ${i}
        return offset;
      }
      `}offsetToIndices(){let e={};return this.context.programInfo.inputNames.forEach((t,n)=>{let i=this.context.inputTextureLayouts[n].shape,o=this.context.inputTextureLayouts[n].strides,a=i.length,s=`offsetToIndices_${t}`;e[s]=new pe(r.offsetToIndicesSingle(s,a,o)),s=`offsetToIndices_${t}_T`,e[s]=new pe(r.offsetToIndicesSingle(s,a,o.slice().reverse()))}),e}static offsetToIndicesSingle(e,t,n){let i=[];for(let o=0;o<t-1;++o)i.push(`
      indices[${o}] = offset / ${n[o]};`),i.push(`
        offset -= indices[${o}] * ${n[o]};`);return i.push(`
      indices[${t-1}] = offset;`),`
      void ${e}(int offset, out int indices[${t}]) {
        ${i.join("")}
      }
      `}incrementIndices(){let e={};return this.context.programInfo.inputNames.forEach((t,n)=>{let i=this.context.inputTextureLayouts[n].shape,o=i.length,a=`incrementIndices_${t}`,s="";for(let d=0;d<o;++d)s+=`
        shape[${d}] = ${i[d]};`;let l=`
        void ${a}(int axis, out int indices[${o}]) {
          int shape[${o}];
          ${s};
          for(int i = ${o} -1 ; i >= 0; --i) {
            if(i > axis) continue;
            indices[i] += 1;
            if(indices[i] < shape[i]) {
              break;
            }
            indices[i] = 0;
          }
        }
        `;e[a]=new pe(l)}),e}}});var Na,mT=X(()=>{"use strict";vr();Na=class extends on{constructor(e){super(e)}getCustomTypes(){return{}}getFunctions(){return{...this.binaryVecFunctions(),...this.copyVec(),...this.setVecItem(),...this.getVecItem()}}binaryVecFunctions(){let t=this.context.outputTextureLayout.shape.length,n={add:"+=",sub:"-=",mul:"*=",div:"/="},i={};for(let o in n){let a=`${o}Vec`,s="";for(let d=0;d<t;++d)s+=`
          dest[${d}] ${n[o]} src[${d}];
          `;let l=`
        void ${a}(int src[${t}], out int dest[${t}]) {
          ${s}
        }
        `;i[a]=new pe(l)}return i}copyVec(){let t=this.context.outputTextureLayout.shape.length,n="";for(let o=0;o<t;++o)n+=`
        dest[${o}] = src[${o}];
        `;let i=`
      void copyVec(int src[${t}], out int dest[${t}]) {
        ${n}
      }
      `;return{copyVec:new pe(i)}}setVecItem(){let t=this.context.outputTextureLayout.shape.length,n=`
        if(index < 0)
            index =${t} + index;
        if (index == 0)
            m[0] = value;
        `;for(let o=1;o<t-1;++o)n+=`
        else if (index == ${o})
            m[${o}] = value;
            `;n+=`
        else
            m[${t-1}] = value;
        `;let i=`
      void setVecItem(out int m[${t}], int index, int value) {
        ${n}
      }
        `;return{setVecItem:new pe(i)}}getVecItem(){let t=this.context.outputTextureLayout.shape.length,n=`
        if(index < 0)
            index = ${t} + index;
        if (index == 0)
            return m[0];
      `;for(let o=1;o<t-1;++o)n+=`
        else if (index == ${o})
            return m[${o}];
      `;n+=`
        else
            return m[${t-1}];
        `;let i=`
      int getVecItem(int m[${t}], int index) {
        ${n}
      }
    `;return{getVecItem:new pe(i)}}}});var Ac,gT=X(()=>{"use strict";dT();fT();pT();hT();mT();Ac={encoding:ka,fragcolor:ja,vec:Na,shapeUtils:La,coordinates:Da}});var Ra,yT=X(()=>{"use strict";vr();lT();gT();pt();Ra=class{constructor(e,t,n,i){this.libs={};this.glslLibRoutineDependencyGraph={};this.context=new wa(e,t,n,i),Object.keys(Ac).forEach(a=>{let s=new Ac[a](this.context);this.libs[a]=s});let o=this.glslLibRoutineDependencyGraph;for(let a in this.libs){let l=this.libs[a].getFunctions();for(let d in l){let h=a+"."+d,g;o[h]?(g=o[h],g.routineBody=l[d].routineBody):(g=new po(h,l[d].routineBody),o[h]=g);let b=l[d].dependencies;if(b)for(let w=0;w<b.length;++w)if(o[b[w]])g.addDependency(o[b[w]]);else{let T=new po(b[w]);o[b[w]]=T,g.addDependency(T)}}}}preprocess(){let e=this.context.programInfo,t=e.shaderSource;return this.context.programInfo.hasMain||(t=`${t}
      ${J_(this.context.glContext.version,this.context.outputTextureLayout.shape.length)}`),t=uT(t),`${Z_(this.context.glContext.version)}
    ${this.getUniforms(e.inputNames,e.variables)}
    ${this.getImports(t)}
    ${t}`}getImports(e){let t=this.selectGlslLibRoutinesToBeIncluded(e);if(t.length===0)return"";let n="";for(let i=0;i<t.length;++i)if(t[i].routineBody)n+=t[i].routineBody+`
`;else throw new Error(`Missing body for the Glsl Library routine: ${t[i].name}`);return n}selectGlslLibRoutinesToBeIncluded(e){let t=[];return Object.keys(this.glslLibRoutineDependencyGraph).forEach(n=>{let i=n.split(".")[1];e.indexOf(i)!==-1&&t.push(this.glslLibRoutineDependencyGraph[n])}),Ta.returnOrderedNodes(t)}getUniforms(e,t){let n=[];if(e)for(let i of e)n.push(`uniform sampler2D ${i};`);if(t)for(let i of t)n.push(`uniform ${i.type} ${i.name}${i.arrayLength?`[${i.arrayLength}]`:""};`);return n.join(`
`)}}});var Ma,bT=X(()=>{"use strict";Et();Yt();yT();pt();Ma=class{constructor(e,t,n){this.profiler=e;this.glContext=t;this.textureLayoutStrategy=n;this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n){this.profiler.event("op",`ProgramManager.run ${e.programInfo.name??"unknown kernel"}`,()=>{let i=this.glContext.gl,o=e.program;i.useProgram(o);try{this.bindOutput(n),this.attributesBound||this.bindAttributes(e.attribLocations),this.bindUniforms(e.uniformLocations,e.programInfo.variables??[],t)}catch(a){throw rt.error("ProgramManager",e.programInfo.shaderSource),a}this.profiler.event("backend","GlContext.draw()",()=>{this.glContext.draw()})},this.glContext)}dispose(){this.vertexShader&&this.glContext.deleteShader(this.vertexShader),this.repo.forEach(e=>this.glContext.deleteProgram(e.program))}build(e,t,n){return this.profiler.event("backend","ProgramManager.build",()=>{let i=new Ra(this.glContext,e,t,n),o=i.preprocess(),a=this.compile(o);return{programInfo:e,program:a,uniformLocations:this.getUniformLocations(a,i.context.programInfo.inputNames,i.context.programInfo.variables),attribLocations:this.getAttribLocations(a)}})}compile(e){if(!this.vertexShader){rt.verbose("ProrgramManager","Compiling and caching Vertex shader for the first time");let i=X_(this.glContext.version);this.vertexShader=this.glContext.compileShader(i,this.glContext.gl.VERTEX_SHADER)}Pe.debug&&rt.verbose("ProrgramManager",`FragShader:
${e}
`);let t=this.glContext.compileShader(e,this.glContext.gl.FRAGMENT_SHADER),n=this.glContext.createProgram(this.vertexShader,t);return this.glContext.deleteShader(t),n}bindOutput(e){let t=e.width,n=e.height;rt.verbose("ProrgramManager",`Binding output texture to Framebuffer: w/h=${t}/${n}, shape=${e.shape}, type=${e.tensor.type}`),this.glContext.attachFramebuffer(e.texture,t,n)}bindAttributes(e){let t=e.position,n=e.textureCoord;this.glContext.setVertexAttributes(t,n),this.attributesBound=!0}bindUniforms(e,t,n){let i=this.glContext.gl,o=0;for(let{name:a,type:s,location:l,arrayLength:d}of e){let h=t.find(g=>g.name===a)?.data;if(s!=="sampler2D"&&!h)throw new Error(`variable '${a}' does not have data defined in program info`);switch(s){case"sampler2D":this.bindTexture(n[o],l,o),o++;break;case"float":d?i.uniform1fv(l,h):i.uniform1f(l,h);break;case"int":d?i.uniform1iv(l,h):i.uniform1i(l,h);break;default:throw new Error(`Uniform not implemented: ${s}`)}}}bindTexture(e,t,n){this.glContext.bindTextureToUniform(e.texture,n,t)}getAttribLocations(e){return{position:this.getAttribLocation(e,"position"),textureCoord:this.getAttribLocation(e,"textureCoord")}}getUniformLocations(e,t,n){let i=[];if(t)for(let o of t)i.push({name:o,type:"sampler2D",location:this.getUniformLocation(e,o)});if(n)for(let o of n)i.push({...o,location:this.getUniformLocation(e,o.name)});return i}getUniformLocation(e,t){let i=this.glContext.gl.getUniformLocation(e,t);if(i===null)throw new Error(`Uniform ${t} not found.`);return i}getAttribLocation(e,t){return this.glContext.gl.getAttribLocation(e,t)}}});var za,_T=X(()=>{"use strict";Yt();co();za=class{constructor(e,t,n,i){this.glContext=e;this.layoutStrategy=t;this.profiler=n;this.config=i;this.pendingRead=new Map;i.reuseTextures&&(this.inUseTextures=new Map,this.idleTextures=new Map,this.textureLookup=new Map)}createTextureFromLayout(e,t,n,i){let o=this.toEncoderType(e),a=this.glContext.getEncoder(o,t.channels||1,i);if(t.isPacked&&i===1)throw new Error("not implemented");let s=t.width,l=t.height,d,h;if(this.config.reuseTextures){d=`${s}x${l}_${a.format}_${a.internalFormat}_${a.textureType}`,h=this.inUseTextures.get(d),h||(h=[],this.inUseTextures.set(d,h));let b=this.idleTextures.get(d);if(b&&b.length>0){let w=b.pop();return h.push(w),i===1&&this.glContext.updateTexture(w,s,l,a,this.toTextureData(e,n)),w}}rt.verbose("TextureManager",`Creating new texture of size ${t.width}x${t.height}`);let g=this.glContext.allocateTexture(s,l,a,this.toTextureData(e,n));return this.config.reuseTextures&&(h.push(g),this.textureLookup.set(g,d)),g}readTexture(e,t,n){return n||(n=1),this.profiler.event("backend","TextureManager.readTexture",()=>{let i=e.shape.reduce((a,s)=>a*s)*n,o=this.glContext.readTexture(e.texture,e.width,e.height,i,this.toEncoderType(t),n);return this.toTensorData(t,o)})}async readTextureAsync(e,t,n){let i=e.tensor.dataId;if(n||(n=1),this.pendingRead.has(i)){let o=this.pendingRead.get(i);return new Promise(a=>o?.push(a))}return this.profiler.event("backend","TextureManager.readTextureAsync",async()=>{this.pendingRead.set(i,[]);let o=e.shape.reduce((d,h)=>d*h)*n;await this.glContext.createAndWaitForFence();let a=this.glContext.readTexture(e.texture,e.width,e.height,o,this.toEncoderType(t),n),s=this.toTensorData(t,a),l=this.pendingRead.get(i);return this.pendingRead.delete(i),l?.forEach(d=>d(s)),s})}readUint8TextureAsFloat(e){return this.profiler.event("backend","TextureManager.readUint8TextureAsFloat",()=>{let t=e.shape.reduce((i,o)=>i*o),n=this.glContext.readTexture(e.texture,e.width,e.height,t*4,"byte",4);return new Float32Array(n.buffer,n.byteOffset,t)})}releaseTexture(e,t){let n;if(this.config.reuseTextures&&(n=this.textureLookup.get(e.texture),n)){t&&this.textureLookup.delete(n);let i=this.inUseTextures.get(n);if(i){let o=i.indexOf(e.texture);if(o!==-1){i.splice(o,1);let a=this.idleTextures.get(n);a||(a=[],this.idleTextures.set(n,a)),a.push(e.texture)}}}(!n||t)&&(rt.verbose("TextureManager",`Deleting texture of size ${e.width}x${e.height}`),this.glContext.deleteTexture(e.texture))}toTensorData(e,t){switch(e){case"int16":return t instanceof Int16Array?t:Int16Array.from(t);case"int32":return t instanceof Int32Array?t:Int32Array.from(t);case"int8":return t instanceof Int8Array?t:Int8Array.from(t);case"uint16":return t instanceof Uint16Array?t:Uint16Array.from(t);case"uint32":return t instanceof Uint32Array?t:Uint32Array.from(t);case"uint8":case"bool":return t instanceof Uint8Array?t:Uint8Array.from(t);case"float32":return t instanceof Float32Array?t:Float32Array.from(t);case"float64":return t instanceof Float64Array?t:Float64Array.from(t);default:throw new Error(`TensorData type ${e} is not supported`)}}toTextureData(e,t){if(t)return t instanceof Float32Array?t:new Float32Array(t)}toEncoderType(e){return"float"}clearActiveTextures(){this.glContext.clearActiveTextures()}}});var Ba,vT=X(()=>{"use strict";Yt();lb();fv();aT();bT();$c();_T();Ba=class{constructor(e,t){this.backend=e;this.context=t;this.layoutStrategy=new Ea(e.glContext.maxTextureSize),this.programManager=new Ma(this.context.profiler,e.glContext,this.layoutStrategy),this.textureManager=new za(e.glContext,this.layoutStrategy,this.context.profiler,{reuseTextures:e.textureCacheMode==="full"}),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache=new Map,this.pack=e.pack,this.pack2unpackMap=new Map,this.unpack2packMap=new Map}createInferenceHandler(){return new va(this)}onGraphInitialized(e){let t=e.getValues().filter(n=>n.from===-1&&n.tensor).map(n=>n.tensor.dataId);this.initializers=new Set(t)}isInitializer(e){return this.initializers?this.initializers.has(e):!1}addInitializer(e){this.initializers.add(e)}getTextureData(e,t){return t?this.packedTextureDataCache.get(e):this.unpackedTextureDataCache.get(e)}setTextureData(e,t,n=!1){rt.verbose("WebGLSessionHandler","Storing Texture data in cache"),n?this.packedTextureDataCache.set(e,t):this.unpackedTextureDataCache.set(e,t)}dispose(){this.programManager.dispose(),this.textureManager.clearActiveTextures(),this.packedTextureDataCache.forEach(e=>this.textureManager.releaseTexture(e,!0)),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache.forEach(e=>this.textureManager.releaseTexture(e,!0)),this.unpackedTextureDataCache=new Map}resolve(e,t,n){let i=ub(e,t,oT);return{impl:i.opImpl,context:i.opInit?i.opInit(e,n):e}}}});function L4(r){let e=0;for(;e<r.length&&r[e]();++e);return e-1}var go,wT=X(()=>{"use strict";Et();co();co();or();go=class{constructor(e,t){this.frameBufferBound=!1;this.itemsToPoll=[];this.gl=e,this.version=t,this.getExtensions(),this.vertexbuffer=this.createVertexbuffer(),this.framebuffer=this.createFramebuffer(),this.queryVitalParameters()}allocateTexture(e,t,n,i){let o=this.gl,a=o.createTexture();o.bindTexture(o.TEXTURE_2D,a),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MAG_FILTER,o.NEAREST),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE);let s=i?n.encode(i,e*t):null;return o.texImage2D(o.TEXTURE_2D,0,n.internalFormat,e,t,0,n.format,n.textureType,s),this.checkError(),a}updateTexture(e,t,n,i,o){let a=this.gl;a.bindTexture(a.TEXTURE_2D,e);let s=i.encode(o,t*n);a.texSubImage2D(a.TEXTURE_2D,0,0,0,t,n,i.format,i.textureType,s),this.checkError()}attachFramebuffer(e,t,n){let i=this.gl;i.bindTexture(i.TEXTURE_2D,e),i.bindFramebuffer(i.FRAMEBUFFER,this.framebuffer),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,e,0),this.checkError(),i.viewport(0,0,t,n),i.scissor(0,0,t,n)}readTexture(e,t,n,i,o,a){let s=this.gl;a||(a=1),this.frameBufferBound||this.attachFramebuffer(e,t,n);let l=this.getEncoder(o,a),d=l.allocate(t*n);return s.bindTexture(s.TEXTURE_2D,e),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,e,0),s.readPixels(0,0,t,n,s.RGBA,l.textureType,d),this.checkError(),l.decode(d,i)}isFramebufferReady(){return!0}getActiveTexture(){let e=this.gl;return`TEXTURE${e.getParameter(this.gl.ACTIVE_TEXTURE)-e.TEXTURE0}`}getTextureBinding(){return this.gl.getParameter(this.gl.TEXTURE_BINDING_2D)}getFramebufferBinding(){return this.gl.getParameter(this.gl.FRAMEBUFFER_BINDING)}setVertexAttributes(e,t){let n=this.gl;n.vertexAttribPointer(e,3,n.FLOAT,!1,20,0),n.enableVertexAttribArray(e),t!==-1&&(n.vertexAttribPointer(t,2,n.FLOAT,!1,20,12),n.enableVertexAttribArray(t)),this.checkError()}createProgram(e,t){let n=this.gl,i=n.createProgram();return n.attachShader(i,e),n.attachShader(i,t),n.linkProgram(i),i}compileShader(e,t){let n=this.gl,i=n.createShader(t);if(!i)throw new Error(`createShader() returned null with type ${t}`);if(n.shaderSource(i,e),n.compileShader(i),n.getShaderParameter(i,n.COMPILE_STATUS)===!1)throw new Error(`Failed to compile shader: ${n.getShaderInfoLog(i)}
Shader source:
${e}`);return i}deleteShader(e){this.gl.deleteShader(e)}bindTextureToUniform(e,t,n){let i=this.gl;i.activeTexture(i.TEXTURE0+t),this.checkError(),i.bindTexture(i.TEXTURE_2D,e),this.checkError(),i.uniform1i(n,t),this.checkError()}draw(){this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4),this.checkError()}checkError(){if(Pe.debug){let e=this.gl,t=e.getError(),n="";switch(t){case e.NO_ERROR:return;case e.INVALID_ENUM:n="INVALID_ENUM";break;case e.INVALID_VALUE:n="INVALID_VALUE";break;case e.INVALID_OPERATION:n="INVALID_OPERATION";break;case e.INVALID_FRAMEBUFFER_OPERATION:n="INVALID_FRAMEBUFFER_OPERATION";break;case e.OUT_OF_MEMORY:n="OUT_OF_MEMORY";break;case e.CONTEXT_LOST_WEBGL:n="CONTEXT_LOST_WEBGL";break;default:n=`Unknown WebGL Error: ${t.toString(16)}`}throw new Error(n)}}deleteTexture(e){this.gl.deleteTexture(e)}deleteProgram(e){this.gl.deleteProgram(e)}getEncoder(e,t,n=0){if(this.version===2)return new ba(this.gl,t);switch(e){case"float":return n===1||this.isRenderFloat32Supported?new lo(this.gl,t):new lo(this.gl,t,this.textureHalfFloatExtension.HALF_FLOAT_OES);case"int":throw new Error("not implemented");case"byte":return new _a(this.gl,t);default:throw new Error(`Invalid dataType: ${e}`)}}clearActiveTextures(){let e=this.gl;for(let t=0;t<this.maxTextureImageUnits;++t)e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,null)}dispose(){if(this.disposed)return;let e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(this.framebuffer),e.bindBuffer(e.ARRAY_BUFFER,null),e.deleteBuffer(this.vertexbuffer),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.finish(),this.disposed=!0}createDefaultGeometry(){return new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0])}createVertexbuffer(){let e=this.gl,t=e.createBuffer();if(!t)throw new Error("createBuffer() returned null");let n=this.createDefaultGeometry();return e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,n,e.STATIC_DRAW),this.checkError(),t}createFramebuffer(){let e=this.gl.createFramebuffer();if(!e)throw new Error("createFramebuffer returned null");return e}queryVitalParameters(){let e=this.gl;if(this.isFloatTextureAttachableToFrameBuffer=this.checkFloatTextureAttachableToFrameBuffer(),this.isRenderFloat32Supported=this.checkRenderFloat32(),this.isFloat32DownloadSupported=this.checkFloat32Download(),this.version===1&&!this.textureHalfFloatExtension&&!this.isRenderFloat32Supported)throw new Error("both float32 and float16 TextureType are not supported");this.isBlendSupported=!this.isRenderFloat32Supported||this.checkFloat32Blend(),this.maxTextureSize=e.getParameter(e.MAX_TEXTURE_SIZE),this.maxTextureImageUnits=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),this.version}getExtensions(){this.version===2?(this.colorBufferFloatExtension=this.gl.getExtension("EXT_color_buffer_float"),this.disjointTimerQueryWebgl2Extension=this.gl.getExtension("EXT_disjoint_timer_query_webgl2")):(this.textureFloatExtension=this.gl.getExtension("OES_texture_float"),this.textureHalfFloatExtension=this.gl.getExtension("OES_texture_half_float"))}checkFloatTextureAttachableToFrameBuffer(){let e=this.gl,t=e.createTexture();e.bindTexture(e.TEXTURE_2D,t);let n=this.version===2?e.RGBA32F:e.RGBA;e.texImage2D(e.TEXTURE_2D,0,n,1,1,0,e.RGBA,e.FLOAT,null);let i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0);let o=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(t),e.deleteFramebuffer(i),o}checkRenderFloat32(){if(this.version===2){if(!this.colorBufferFloatExtension)return!1}else if(!this.textureFloatExtension)return!1;return this.isFloatTextureAttachableToFrameBuffer}checkFloat32Download(){if(this.version===2){if(!this.colorBufferFloatExtension)return!1}else if(!this.textureFloatExtension||!this.gl.getExtension("WEBGL_color_buffer_float"))return!1;return this.isFloatTextureAttachableToFrameBuffer}checkFloat32Blend(){let e=this.gl,t,n,i,o,a;try{t=e.createTexture(),n=e.createFramebuffer(),e.bindTexture(e.TEXTURE_2D,t);let s=this.version===2?e.RGBA32F:e.RGBA;return e.texImage2D(e.TEXTURE_2D,0,s,1,1,0,e.RGBA,e.FLOAT,null),e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0),e.enable(e.BLEND),i=e.createShader(e.VERTEX_SHADER),!i||(e.shaderSource(i,"void main(){}"),e.compileShader(i),o=e.createShader(e.FRAGMENT_SHADER),!o)||(e.shaderSource(o,"precision highp float;void main(){gl_FragColor=vec4(0.5);}"),e.compileShader(o),a=e.createProgram(),!a)?!1:(e.attachShader(a,i),e.attachShader(a,o),e.linkProgram(a),e.useProgram(a),e.drawArrays(e.POINTS,0,1),e.getError()===e.NO_ERROR)}finally{e.disable(e.BLEND),a&&e.deleteProgram(a),i&&e.deleteShader(i),o&&e.deleteShader(o),n&&(e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(n)),t&&(e.bindTexture(e.TEXTURE_2D,null),e.deleteTexture(t))}}beginTimer(){if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let e=this.gl,t=this.disjointTimerQueryWebgl2Extension,n=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,n),n}else throw new Error("WebGL1 profiling currently not supported.")}endTimer(){if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let e=this.gl,t=this.disjointTimerQueryWebgl2Extension;e.endQuery(t.TIME_ELAPSED_EXT);return}else throw new Error("WebGL1 profiling currently not supported")}isTimerResultAvailable(e){let t=!1,n=!1;if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let i=this.gl,o=this.disjointTimerQueryWebgl2Extension;t=i.getQueryParameter(e,i.QUERY_RESULT_AVAILABLE),n=i.getParameter(o.GPU_DISJOINT_EXT)}else throw new Error("WebGL1 profiling currently not supported");return t&&!n}getTimerResult(e){let t=0;if(this.version===2){let n=this.gl;t=n.getQueryParameter(e,n.QUERY_RESULT),n.deleteQuery(e)}else throw new Error("WebGL1 profiling currently not supported");return t/1e6}async waitForQueryAndGetTime(e){return await Yl(()=>this.isTimerResultAvailable(e)),this.getTimerResult(e)}async createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,n=e,i=n.fenceSync(n.SYNC_GPU_COMMANDS_COMPLETE,0);return e.flush(),i===null?t=()=>!0:t=()=>{let o=n.clientWaitSync(i,0,0);return o===n.ALREADY_SIGNALED||o===n.CONDITION_SATISFIED},{query:i,isFencePassed:t}}async pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){let e=L4(this.itemsToPoll.map(t=>t.isDoneFn));for(let t=0;t<=e;++t){let{resolveFn:n}=this.itemsToPoll[t];n()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}async addItemToPoll(e,t){this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),!(this.itemsToPoll.length>1)&&await Yl(()=>(this.pollItems(),this.itemsToPoll.length===0))}}});function Cc(r){let e;if((!r||r==="webgl2")&&"webgl2"in Pi?e=Pi.webgl2:(!r||r==="webgl")&&"webgl"in Pi&&(e=Pi.webgl),!e)try{let n=R4();e=TT(n,r)}catch{let n=N4();e=TT(n,r)}r=r||e.version===1?"webgl":"webgl2";let t=e.gl;return Pi[r]=e,t.isContextLost()?(delete Pi[r],Cc(r)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),e)}function TT(r,e){let t={alpha:!1,depth:!1,antialias:!1,stencil:!1,preserveDrawingBuffer:!1,premultipliedAlpha:!1,failIfMajorPerformanceCaveat:!1},n,i=t;if((!e||e==="webgl2")&&(n=r.getContext("webgl2",i),n))try{return new go(n,2)}catch(o){rt.warning("GlContextFactory",`failed to create WebGLContext using contextId 'webgl2'. Error: ${o}`)}if((!e||e==="webgl")&&(n=r.getContext("webgl",i)||r.getContext("experimental-webgl",i),n))try{return new go(n,1)}catch(o){rt.warning("GlContextFactory",`failed to create WebGLContext using contextId 'webgl' or 'experimental-webgl'. Error: ${o}`)}throw new Error("WebGL is not supported")}function N4(){if(typeof document>"u")throw new TypeError("failed to create canvas: document is not supported");let r=document.createElement("canvas");return r.width=1,r.height=1,r}function R4(){if(typeof OffscreenCanvas>"u")throw new TypeError("failed to create offscreen canvas: OffscreenCanvas is not supported");return new OffscreenCanvas(1,1)}var Pi,xT=X(()=>{"use strict";Yt();wT();Pi={}});var Fa,IT=X(()=>{"use strict";Et();Yt();vT();xT();Fa=class{get contextId(){return Pe.webgl.contextId}set contextId(e){Pe.webgl.contextId=e}get matmulMaxBatchSize(){return Pe.webgl.matmulMaxBatchSize}set matmulMaxBatchSize(e){Pe.webgl.matmulMaxBatchSize=e}get textureCacheMode(){return Pe.webgl.textureCacheMode}set textureCacheMode(e){Pe.webgl.textureCacheMode=e}get pack(){return Pe.webgl.pack}set pack(e){Pe.webgl.pack=e}get async(){return Pe.webgl.async}set async(e){Pe.webgl.async=e}initialize(){try{return this.glContext=Cc(this.contextId),typeof this.matmulMaxBatchSize!="number"&&(this.matmulMaxBatchSize=16),typeof this.textureCacheMode!="string"&&(this.textureCacheMode="full"),typeof this.pack!="boolean"&&(this.pack=!1),typeof this.async!="boolean"&&(this.async=!1),rt.setWithEnv(Pe),Pe.webgl.context||Object.defineProperty(Pe.webgl,"context",{value:this.glContext.gl}),rt.verbose("WebGLBackend",`Created WebGLContext: ${typeof this.glContext} with matmulMaxBatchSize: ${this.matmulMaxBatchSize}; textureCacheMode: ${this.textureCacheMode}; pack: ${this.pack}; async: ${this.async}.`),!0}catch(e){return rt.warning("WebGLBackend",`Unable to initialize WebGLBackend. ${e}`),!1}}createSessionHandler(e){return new Ba(this,e)}dispose(){this.glContext.dispose()}}});async function Oc(r){if(r){let e=typeof r=="string"?[r]:r;for(let t of e){let n=ST.get(t);if(n)return n;let i=await z4(t);if(i)return i}}else return Oc(["webgl"]);throw new Error("no available backend to use")}async function z4(r){let e=M4;if(typeof e[r]<"u"&&B4(e[r])){let t=e[r],n=t.initialize();if(typeof n=="object"&&"then"in n&&(n=await n),n)return ST.set(r,t),t}}function B4(r){let e=r;return"initialize"in e&&typeof e.initialize=="function"&&"createSessionHandler"in e&&typeof e.createSessionHandler=="function"&&"dispose"in e&&typeof e.dispose=="function"}var ST,M4,$T=X(()=>{"use strict";IT();ST=new Map,M4={webgl:new Fa}});var Pc,Va,AT=X(()=>{"use strict";Yt();Pc=class{constructor(e,t){this.op=e;this.node=t}},Va=class{constructor(e,t,n){this.graph=e;this.profiler=n;this.initialize(t)}initialize(e){this.profiler.event("session","ExecutionPlan.initialize",()=>{let t=this.graph.getNodes();if(t.length!==e.length)throw new Error("The size of nodes and OPs do not match.");this._ops=e.map((n,i)=>new Pc(n,t[i])),this.reset(),this._starter=[],this._ops.forEach((n,i)=>{let o=!0;for(let a of n.node.inputs)if(!this._values[a]&&this.graph.getInputIndices().indexOf(a)===-1){o=!1;break}o&&this._starter.push(i)})})}reset(){this._values=this.graph.getValues().map(e=>e.tensor)}async execute(e,t){return this.profiler.event("session","ExecutionPlan.execute",async()=>{this.reset();let n=e.createInferenceHandler(),i=this.graph.getInputIndices();if(t.length!==i.length)throw new Error(`number of input tensors don't match the number of inputs to the model: actual: ${t.length} expected: ${i.length}`);t.forEach((h,g)=>{let b=i[g];this._values[b]=h});let o=this._starter.slice(0),a=this.graph.getValues(),s=this.graph.getNodes(),l=0;for(;l<o.length;){let h=o[l++],g=this._ops[h],b=g.node.inputs.map(O=>this._values[O]);if(b.indexOf(void 0)!==-1)throw new Error(`unresolved input detected: op: ${g.node}`);let w=b;rt.verbose("ExecPlan",`Running op:${g.node.name} (${w.map((O,S)=>`'${g.node.inputs[S]}': ${O.type}[${O.dims.join(",")}]`).join(", ")})`);let T=await this.profiler.event("node",g.node.name,async()=>g.op.impl(n,w,g.op.context));if(T.length!==g.node.outputs.length)throw new Error("the size of output does not match model definition.");T.forEach((O,S)=>{let A=g.node.outputs[S];if(this._values[A])throw new Error(`output [${A}] already has value: op:${g.node.name}`);this._values[A]=O});let I=new Set;T.forEach((O,S)=>{let A=g.node.outputs[S];for(let j of a[A].to){let k=s[j],V=!0;for(let W of k.inputs)if(!this._values[W]){V=!1;break}V&&I.add(j)}}),o.push(...I)}let d=[];for(let h=0;h<this.graph.getOutputIndices().length;h++){let g=this.graph.getOutputIndices()[h],b=this._values[g];if(b===void 0)throw new Error(`required output [${g}] does not have value`);g===0?await b.getData():b.data,d.push(b)}return rt.verbose("ExecPlan","disposing of inferenceHandler"),n.dispose(),d})}}});var Ve,yo,CT=X(()=>{"use strict";ro();Ve=Re(Ti());ni();tt();yo=class r{constructor(e){if(this._attributes=new Map,e!=null){for(let t of e)t instanceof Ve.onnx.AttributeProto?this._attributes.set(t.name,[r.getValue(t),r.getType(t)]):t instanceof ca.Attribute&&this._attributes.set(t.name(),[r.getValue(t),r.getType(t)]);if(this._attributes.size<e.length)throw new Error("duplicated attribute names")}}set(e,t,n){this._attributes.set(e,[n,t])}delete(e){this._attributes.delete(e)}getFloat(e,t){return this.get(e,"float",t)}getInt(e,t){return this.get(e,"int",t)}getString(e,t){return this.get(e,"string",t)}getTensor(e,t){return this.get(e,"tensor",t)}getFloats(e,t){return this.get(e,"floats",t)}getInts(e,t){return this.get(e,"ints",t)}getStrings(e,t){return this.get(e,"strings",t)}getTensors(e,t){return this.get(e,"tensors",t)}get(e,t,n){let i=this._attributes.get(e);if(i===void 0){if(n!==void 0)return n;throw new Error(`required attribute not found: ${e}`)}if(i[1]!==t)throw new Error(`type mismatch: expected ${t} but got ${i[1]}`);return i[0]}static getType(e){let t=e instanceof Ve.onnx.AttributeProto?e.type:e.type();switch(t){case Ve.onnx.AttributeProto.AttributeType.FLOAT:return"float";case Ve.onnx.AttributeProto.AttributeType.INT:return"int";case Ve.onnx.AttributeProto.AttributeType.STRING:return"string";case Ve.onnx.AttributeProto.AttributeType.TENSOR:return"tensor";case Ve.onnx.AttributeProto.AttributeType.FLOATS:return"floats";case Ve.onnx.AttributeProto.AttributeType.INTS:return"ints";case Ve.onnx.AttributeProto.AttributeType.STRINGS:return"strings";case Ve.onnx.AttributeProto.AttributeType.TENSORS:return"tensors";default:throw new Error(`attribute type is not supported yet: ${Ve.onnx.AttributeProto.AttributeType[t]}`)}}static getValue(e){let t=e instanceof Ve.onnx.AttributeProto?e.type:e.type();if(t===Ve.onnx.AttributeProto.AttributeType.GRAPH||t===Ve.onnx.AttributeProto.AttributeType.GRAPHS)throw new Error("graph attribute is not supported yet");let n=this.getValueNoCheck(e);if(t===Ve.onnx.AttributeProto.AttributeType.INT&&Ut.isLong(n))return Ut.longToNumber(n);if(t===Ve.onnx.AttributeProto.AttributeType.INTS){let i=n,o=new Array(i.length);for(let a=0;a<i.length;a++){let s=i[a];o[a]=Ut.longToNumber(s)}return o}if(t===Ve.onnx.AttributeProto.AttributeType.TENSOR)return e instanceof Ve.onnx.AttributeProto?Tt.fromProto(n):Tt.fromOrtTensor(n);if(t===Ve.onnx.AttributeProto.AttributeType.TENSORS){if(e instanceof Ve.onnx.AttributeProto)return n.map(o=>Tt.fromProto(o));if(e instanceof ca.Attribute)return n.map(o=>Tt.fromOrtTensor(o))}return t===Ve.onnx.AttributeProto.AttributeType.STRING&&e instanceof Ve.onnx.AttributeProto?uo(n):t===Ve.onnx.AttributeProto.AttributeType.STRINGS&&e instanceof Ve.onnx.AttributeProto?n.map(uo):n}static getValueNoCheck(e){return e instanceof Ve.onnx.AttributeProto?this.getValueNoCheckFromOnnxFormat(e):this.getValueNoCheckFromOrtFormat(e)}static getValueNoCheckFromOnnxFormat(e){switch(e.type){case Ve.onnx.AttributeProto.AttributeType.FLOAT:return e.f;case Ve.onnx.AttributeProto.AttributeType.INT:return e.i;case Ve.onnx.AttributeProto.AttributeType.STRING:return e.s;case Ve.onnx.AttributeProto.AttributeType.TENSOR:return e.t;case Ve.onnx.AttributeProto.AttributeType.GRAPH:return e.g;case Ve.onnx.AttributeProto.AttributeType.FLOATS:return e.floats;case Ve.onnx.AttributeProto.AttributeType.INTS:return e.ints;case Ve.onnx.AttributeProto.AttributeType.STRINGS:return e.strings;case Ve.onnx.AttributeProto.AttributeType.TENSORS:return e.tensors;case Ve.onnx.AttributeProto.AttributeType.GRAPHS:return e.graphs;default:throw new Error(`unsupported attribute type: ${Ve.onnx.AttributeProto.AttributeType[e.type]}`)}}static getValueNoCheckFromOrtFormat(e){switch(e.type()){case nn.AttributeType.FLOAT:return e.f();case nn.AttributeType.INT:return e.i();case nn.AttributeType.STRING:return e.s();case nn.AttributeType.TENSOR:return e.t();case nn.AttributeType.GRAPH:return e.g();case nn.AttributeType.FLOATS:return e.floatsArray();case nn.AttributeType.INTS:{let t=[];for(let n=0;n<e.intsLength();n++)t.push(e.ints(n));return t}case nn.AttributeType.STRINGS:{let t=[];for(let n=0;n<e.stringsLength();n++)t.push(e.strings(n));return t}case nn.AttributeType.TENSORS:{let t=[];for(let n=0;n<e.tensorsLength();n++)t.push(e.tensors(n));return t}default:throw new Error(`unsupported attribute type: ${nn.AttributeType[e.type()]}`)}}}});var Dc,kc,ur,Ua,Ec,OT=X(()=>{"use strict";CT();ro();Dc=Re(Ti());ni();tt();kc={from:(r,e)=>new Ec(r,e)},ur=class{constructor(e){this._from=void 0,this._to=[],this.tensor=void 0,this.type=void 0,e&&(this.type=Dt.tensorValueTypeFromProto(e.type.tensorType))}get from(){return this._from}get to(){return this._to}},Ua=class{constructor(e,t){e instanceof Dc.onnx.NodeProto?(this.name=e.name,this.opType=e.opType,this.attributes=new yo(e.attribute)):e instanceof jl.Node&&(this.name=t??e.name(),this.opType=e.opType(),this.attributes=new yo(Dt.tensorAttributesFromORTFormat(e))),this.inputs=[],this.outputs=[],this.executeNode=!0}},Ec=class{constructor(e,t){if(!e)throw new TypeError("graph is empty");this.buildGraph(e),this.transformGraph(t),this.checkIsAcyclic()}getInputIndices(){return this._allInputIndices}getInputNames(){return this._allInputNames}getOutputIndices(){return this._allOutputIndices}getOutputNames(){return this._allOutputNames}getValues(){return this._allData}getNodes(){return this._nodes}buildGraph(e){if(e instanceof Dc.onnx.GraphProto)this.buildGraphFromOnnxFormat(e);else if(e instanceof Dl.Graph)this.buildGraphFromOrtFormat(e);else throw new TypeError("Graph type is not supported.")}buildGraphFromOnnxFormat(e){let t=new Map;this._allData=[],this._allInputIndices=[],this._allInputNames=[],this._allOutputIndices=[],this._allOutputNames=[],this._nodes=[];let n=new Map;if(!e.input)throw new Error("missing information in graph: input");let i=[];for(let o of e.input){if(t.has(o.name))throw new Error(`duplicated input name: ${o.name}`);let a=this._allData.push(new ur(o))-1;t.set(o.name,a),i.push(o.name)}if(!e.initializer)throw new Error("missing information in graph: initializer");for(let o of e.initializer){let a=t.get(o.name);if(a===void 0){let s=new ur;s.type={shape:{dims:Dt.tensorDimsFromProto(o.dims)},tensorType:Dt.tensorDataTypeFromProto(o.dataType)},a=this._allData.push(s)-1,t.set(o.name,a)}this._allData[a]._from=-1,this._allData[a].tensor=Tt.fromProto(o)}for(let o=0;o<this._allData.length;o++)this._allData[o].tensor||(this._allInputIndices.push(o),this._allInputNames.push(i[o]));if(!e.output)throw new Error("missing information in graph: output");for(let o of e.output){if(t.has(o.name))throw new Error(`duplicated output name: ${o.name}`);let a=this._allData.push(new ur(o))-1;t.set(o.name,a),this._allOutputIndices.push(a),this._allOutputNames.push(o.name)}if(!e.node)throw new Error("missing information in graph: node");for(let o of e.node){if(!o.name)for(let s=0;;s++){let l=`unnamed_${o.opType}_${s}`;if(!n.has(l)){o.name=l;break}}if(n.has(o.name))throw new Error(`duplicated node name: ${o.name}`);let a=this._nodes.push(new Ua(o))-1;n.set(o.name,a)}for(let o=0;o<this._nodes.length;o++){let a=this._nodes[o],s=e.node[o];if(!s.output)throw new Error(`missing output for node: ${s.name}`);for(let l of s.output){let d=t.get(l);if(typeof d>"u"&&(d=this._allData.push(new ur)-1,t.set(l,d)),a.outputs.push(d),this._allData[d]._from!==void 0)throw new Error(`multiple nodes output to one data value: ${d}`);if(this._allData[d]._from=o,s.opType==="Constant"){if(!s.attribute||s.attribute.length!==1||!s.attribute[0].t)throw new Error("missing attributes or missing tensor value in attributes for this Constant operator");if(!s.output||s.output.length!==1)throw new Error("missing output or incorrect number of outputs for this Constant operator");a.outputs.pop(),a.executeNode=!1,this._allData[d]._from=-1,this._allData[d].tensor=Tt.fromProto(s.attribute[0].t)}}}for(let o=0;o<this._nodes.length;o++){let a=this._nodes[o],s=e.node[o];if(!s.input)throw new Error(`missing input for node: ${s.name}`);for(let l of s.input){let d=t.get(l);if(typeof d>"u"){if(l===""&&(s.input.length===3||s.input.length===4)&&s.opType==="Resize")continue;throw new Error(`unrecognized input '${l}' for node: ${s.name}`)}a.inputs.push(d),this._allData[d]._to.push(o)}}return!0}buildGraphFromOrtFormat(e){let t=new Map;this._allData=[],this._allInputIndices=[],this._allInputNames=[],this._allOutputIndices=[],this._allOutputNames=[],this._nodes=[];let n=new Map,i=[];for(let o=0;o<e.inputsLength();o++){let a=e.inputs(o);if(t.has(a))throw new Error(`duplicated input name: ${a}`);for(let s=0;s<e.nodeArgsLength();s++)if(e.nodeArgs(s)?.name()===a){let l=new ur;if(e.nodeArgs(s)?.type()?.valueType()!==Nl.TypeInfoValue.tensor_type)throw new Error("Unexpected value type for the nodeArg.");let h=e.nodeArgs(s).type().value(new Ll.TensorTypeAndShape),g=Dt.tensorDataTypeFromProto(h.elemType()),b=h.shape(),w=[];for(let I=0;I<b.dimLength();I++)w.push(Ut.longToNumber(b.dim(I).value().dimValue()));l.type={shape:{dims:w},tensorType:g};let T=this._allData.push(l)-1;t.set(a,T),i.push(a)}}for(let o=0;o<e.initializersLength();o++){let a=e.initializers(o),s=t.get(a.name());if(s===void 0){let l=new ur,d=Dt.tensorDimsFromORTFormat(a),h=Dt.tensorDataTypeFromProto(a.dataType());l.type={shape:{dims:d},tensorType:h},s=this._allData.push(l)-1,t.set(a.name(),s)}this._allData[s]._from=-1,this._allData[s].tensor=Tt.fromOrtTensor(a)}for(let o=0;o<this._allData.length;o++)this._allData[o].tensor||(this._allInputIndices.push(o),this._allInputNames.push(i[o]));for(let o=0;o<e.outputsLength();o++){let a=e.outputs(o);if(t.has(a))throw new Error(`duplicated output name: ${a}`);let s=this._allData.push(new ur)-1;t.set(a,s),this._allOutputIndices.push(s),this._allOutputNames.push(a)}if(!e.nodes)throw new Error("missing information in graph: node");for(let o=0;o<e.nodesLength();o++){let a=e.nodes(o),s=a.name();if(!s)for(let d=0;s=`unnamed_${a.opType()}_${d}`,!!n.has(s);d++);if(n.has(s))throw new Error(`duplicated node name: ${s}`);let l=this._nodes.push(new Ua(a,s))-1;n.set(s,l)}for(let o=0;o<this._nodes.length;o++){let a=this._nodes[o],s=e.nodes(o);if(s==null)throw new Error(`No node exists at index ${o}`);if(s?.outputsLength()===0)throw new Error(`missing output for node: ${s.name}`);for(let l=0;l<s?.outputsLength();l++){let d=s?.outputs(l),h=t.get(d);if(typeof h>"u"&&(h=this._allData.push(new ur)-1,t.set(d,h)),a.outputs.push(h),this._allData[h]._from!==void 0)throw new Error(`multiple nodes output to one data value: ${h}`);if(this._allData[h]._from=o,s.opType()==="Constant"){if(s.attributesLength()!==1||!s.attributes(0).t())throw new Error("missing attributes or missing tensor value in attributes for this Constant operator");if(s.outputsLength()!==1)throw new Error("missing output or incorrect number of outputs for this Constant operator");a.outputs.pop(),a.executeNode=!1,this._allData[h]._from=-1,this._allData[h].tensor=Tt.fromOrtTensor(s.attributes(0).t())}}}for(let o=0;o<this._nodes.length;o++){let a=this._nodes[o],s=e.nodes(o);if(s.inputsLength()===0)throw new Error(`missing input for node: ${s.name}`);for(let l=0;l<s.inputsLength();l++){let d=s.inputs(l),h=t.get(d);if(typeof h>"u")throw new Error(`unrecognized input '${d}' for node: ${s.name()}`);a.inputs.push(h),this._allData[h]._to.push(o)}}}checkIsAcyclic(){let e=new Set;this._allInputIndices.forEach(i=>{this._allData[i]._to.forEach(a=>{e.add(a)})});let t=Array.from(e),n=new Array(this._nodes.length).fill("white");for(;t.length>0;){let i=t.pop();n[i]==="gray"?n[i]="black":(t.push(i),n[i]="gray",this._nodes[i].outputs.forEach(o=>{let a=this._allData[o];if(typeof a.tensor<"u")throw new Error("node outputs should not be initialized");if(a._from!==i)throw new Error("from property of the Value object doesn't match index of Node being processed");a._to.forEach(s=>{if(n[s]==="gray")throw new Error("model graph is cyclic");n[s]==="white"&&t.push(s)})}))}}transformGraph(e){this.removeAllIdentityNodes(),this.removeAllDropoutNodes(),this.fuseConvActivationNodes(),e&&e.transformGraph(this),this.finalizeGraph()}finalizeGraph(){let e=0,t=new Array(this._nodes.length,0),n=0;for(let i=0;i<this._nodes.length;i++)t[i]=n,this._nodes[i].executeNode?(n!==i&&(this._nodes[n]=this._nodes[i]),n++):this._nodes[i].outputs.forEach(o=>{this._allData[o]._from=-2});this._nodes.splice(n,this._nodes.length-n);for(let i=0;i<this._allData.length;i++){let o=this._allData[i];o._from!==void 0&&o._from!==-1&&o._from!==-2&&(o._from=t[o._from]);for(let a=0;a<o._to.length;a++)if(o._to[a]>=0)o._to[a]=t[o._to[a]];else throw new Error("Trying to update a removed node")}e=0;for(let i=0;i<this._allData.length;i++){if(this._allData[i].from===-2&&this._allOutputIndices.indexOf(i+e)===-1){e++,this._allData.splice(i,1),i--;continue}if(e>0){let o=-1;this._allData[i].from!==void 0&&this._allData[i].from!==-1?(o=this._nodes[this._allData[i].from].outputs.indexOf(i+e),o!==-1&&(this._nodes[this._allData[i].from].outputs[o]=i)):(o=this._allInputIndices.indexOf(i+e),o!==-1&&(this._allInputIndices[o]=i)),this._allData[i].to.forEach(a=>{o=this._nodes[a].inputs.indexOf(i+e),o!==-1&&(this._nodes[a].inputs[o]=i)}),this._allData[i].to.length===0&&(o=this._allOutputIndices.indexOf(i+e),o!==-1&&(this._allOutputIndices[o]=i))}}}deleteNode(e){let t=this._nodes[e];if(t.outputs.length>1){for(let s=1;s<t.outputs.length;s++)if(this._allData[t.outputs[s]].to.length>0)throw new Error("Node deletion with more than one output connected to other nodes is not supported. ")}t.executeNode=!1;let n=t.inputs[0],i=t.outputs[0],o=this._allData[i].to;for(let s=0;s<t.inputs.length;s++){let l=this._allData[t.inputs[s]].to.indexOf(e);if(l===-1)throw new Error("The Value object doesn't have the current Node in it's 'to' property ");this._allData[t.inputs[s]].to.splice(l,1)}this._allData[i]._to=[];let a=this._allOutputIndices.indexOf(i);if(a!==-1&&(this._allOutputIndices[a]=n),o&&o.length>0)for(let s of o){let l=this._nodes[s].inputs.indexOf(i);if(l===-1)throw new Error("The Node object doesn't have the output Value in it's 'inputs' property ");this._nodes[s].inputs[l]=n,this._allData[n].to.push(s)}}removeAllDropoutNodes(){let e=0;for(let t of this._nodes){if(t.opType==="Dropout"){if(t.inputs.length!==1)throw new Error("Dropout nodes should only contain one input. ");if(t.outputs.length!==1&&t.outputs.length!==2)throw new Error("Dropout nodes should contain either 1 or 2 output(s)");if(t.outputs.length===2&&this._allData[t.outputs[1]]._to.length!==0)throw new Error("Dropout nodes's second output should not be referenced by other nodes");this.deleteNode(e)}e++}}removeAllIdentityNodes(){let e=0;for(let t of this._nodes)t.opType==="Identity"&&this.deleteNode(e),e++}isActivation(e){switch(e.opType){case"Relu":case"Sigmoid":case"Clip":return!0;default:return!1}}fuseConvActivationNodes(){for(let e of this._nodes)if(e.opType==="Conv"){let t=this._allData[e.outputs[0]]._to;if(t.length===1&&this.isActivation(this._nodes[t[0]])){let n=this._nodes[t[0]];if(n.opType==="Clip")if(n.inputs.length===1)try{e.attributes.set("activation_params","floats",[n.attributes.getFloat("min"),n.attributes.getFloat("max")])}catch{e.attributes.set("activation_params","floats",[ei,ti])}else if(n.inputs.length>=3&&this._allData[n.inputs[1]].tensor!==void 0&&this._allData[n.inputs[2]].tensor!==void 0)e.attributes.set("activation_params","floats",[this._allData[n.inputs[1]].tensor.floatData[0],this._allData[n.inputs[2]].tensor.floatData[0]]);else continue;e.attributes.set("activation","string",n.opType),this.deleteNode(t[0])}}}}});var PT,ET,Ga,DT=X(()=>{"use strict";PT=Re(et());OT();ro();ET=Re(Ti());tt();Ga=class{constructor(){}load(e,t,n){let i;if(!n)try{this.loadFromOnnxFormat(e,t);return}catch(o){if(n!==void 0)throw o;i=o}try{this.loadFromOrtFormat(e,t)}catch(o){throw n!==void 0?o:new Error(`Failed to load model as ONNX format: ${i}
as ORT format: ${o}`)}}loadFromOnnxFormat(e,t){let n=ET.onnx.ModelProto.decode(e);if(Ut.longToNumber(n.irVersion)<3)throw new Error("only support ONNX model with IR_VERSION>=3");this._opsets=n.opsetImport.map(o=>({domain:o.domain,version:Ut.longToNumber(o.version)})),this._graph=kc.from(n.graph,t)}loadFromOrtFormat(e,t){let n=new PT.ByteBuffer(e),i=kl.InferenceSession.getRootAsInferenceSession(n).model();if(Ut.longToNumber(i.irVersion())<3)throw new Error("only support ONNX model with IR_VERSION>=3");this._opsets=[];for(let a=0;a<i.opsetImportLength();a++){let s=i.opsetImport(a);this._opsets.push({domain:s?.domain(),version:Ut.longToNumber(s.version())})}this._graph=kc.from(i.graph(),t)}get graph(){return this._graph}get opsets(){return this._opsets}}});var Wa,kT=X(()=>{"use strict";$T();AT();Yt();DT();Wa=class{constructor(e={}){this._initialized=!1,this.backendHint=e.backendHint,this.profiler=Zo.create(e.profiler),this.context={profiler:this.profiler,graphInputTypes:[],graphInputDims:[]}}get inputNames(){return this._model.graph.getInputNames()}get outputNames(){return this._model.graph.getOutputNames()}startProfiling(){this.profiler.start()}endProfiling(){this.profiler.stop()}async loadModel(e,t,n){await this.profiler.event("session","Session.loadModel",async()=>{let i=await Oc(this.backendHint);if(this.sessionHandler=i.createSessionHandler(this.context),this._model=new Ga,typeof e=="string"){let o=e.endsWith(".ort");{let s=await(await fetch(e)).arrayBuffer();this.initialize(new Uint8Array(s),o)}}else if(ArrayBuffer.isView(e))this.initialize(e);else{let o=new Uint8Array(e,t||0,n||e.byteLength);this.initialize(o)}})}initialize(e,t){if(this._initialized)throw new Error("already initialized");this.profiler.event("session","Session.initialize",()=>{let n=this.sessionHandler.transformGraph?this.sessionHandler:void 0;this._model.load(e,n,t),this.sessionHandler.onGraphInitialized&&this.sessionHandler.onGraphInitialized(this._model.graph),this.initializeOps(this._model.graph),this._executionPlan=new Va(this._model.graph,this._ops,this.profiler)}),this._initialized=!0}async run(e){if(!this._initialized)throw new Error("session not initialized yet");return this.profiler.event("session","Session.run",async()=>{let t=this.normalizeAndValidateInputs(e),n=await this._executionPlan.execute(this.sessionHandler,t);return this.createOutput(n)})}normalizeAndValidateInputs(e){let t=this._model.graph.getInputNames();if(Array.isArray(e)){if(e.length!==t.length)throw new Error(`incorrect input array length: expected ${t.length} but got ${e.length}`)}else{if(e.size!==t.length)throw new Error(`incorrect input map size: expected ${t.length} but got ${e.size}`);let n=new Array(e.size),i=0;for(let o=0;o<t.length;++o){let a=e.get(t[o]);if(!a)throw new Error(`missing input tensor for: '${name}'`);n[i++]=a}e=n}if(!this.context.graphInputTypes||this.context.graphInputTypes.length===0||!this.context.graphInputDims||this.context.graphInputDims.length===0){let n=this._model.graph.getInputIndices(),i=this._model.graph.getValues(),o=new Array(n.length);for(let a=0;a<n.length;++a){let s=i[n[a]];o[a]=s.type.shape.dims,this.context.graphInputTypes.push(s.type.tensorType),this.context.graphInputDims.push(e[a].dims)}this.validateInputTensorDims(o,e,!0)}else this.validateInputTensorDims(this.context.graphInputDims,e,!1);return this.validateInputTensorTypes(this.context.graphInputTypes,e),e}validateInputTensorTypes(e,t){for(let n=0;n<t.length;n++){let i=e[n],o=t[n].type;if(i!==o)throw new Error(`input tensor[${n}] check failed: expected type '${i}' but got ${o}`)}}validateInputTensorDims(e,t,n){for(let i=0;i<t.length;i++){let o=e[i],a=t[i].dims;if(!this.compareTensorDims(o,a,n))throw new Error(`input tensor[${i}] check failed: expected shape '[${o.join(",")}]' but got [${a.join(",")}]`)}}compareTensorDims(e,t,n){if(e.length!==t.length)return!1;for(let i=0;i<e.length;++i)if(e[i]!==t[i]&&(!n||e[i]!==0))return!1;return!0}createOutput(e){let t=this._model.graph.getOutputNames();if(e.length!==t.length)throw new Error("expected number of outputs do not match number of generated outputs");let n=new Map;for(let i=0;i<t.length;++i)n.set(t[i],e[i]);return n}initializeOps(e){let t=e.getNodes();this._ops=new Array(t.length);for(let n=0;n<t.length;n++)this._ops[n]=this.sessionHandler.resolve(t[n],this._model.opsets,e)}}});var Ha,jT=X(()=>{"use strict";Et();ni();Ha=class{constructor(e){this.session=e;this.inputNames=this.session.inputNames,this.outputNames=this.session.outputNames}get inputMetadata(){throw new Error("Getting model metadata is not supported in webgl backend.")}get outputMetadata(){throw new Error("Getting model metadata is not supported in webgl backend.")}async dispose(){}async run(e,t,n){let i=new Map;for(let s in e)if(Object.hasOwnProperty.call(e,s)){let l=e[s];i.set(s,new Tt(l.dims,l.type,void 0,void 0,l.data))}let o=await this.session.run(i),a={};return o.forEach((s,l)=>{a[l]=new Ht(s.type,s.data,s.dims)}),a}startProfiling(){this.session.startProfiling()}endProfiling(){this.session.endProfiling()}}});var LT={};Wr(LT,{onnxjsBackend:()=>F4});var jc,F4,NT=X(()=>{"use strict";kT();jT();jc=class{async init(){}async createInferenceSessionHandler(e,t){let n=new Wa(t);return typeof e=="string"?await n.loadModel(e):await n.loadModel(e),new Ha(n)}},F4=new jc});var qa=X(()=>{"use strict"});var zT={};Wr(zT,{default:()=>V4});var RT,MT,V4,BT=X(()=>{"use strict";Lc();Rr();Ka();RT="ort-wasm-proxy-worker",MT=globalThis.self?.name===RT;MT&&(self.onmessage=r=>{let{type:e,in:t}=r.data;try{switch(e){case"init-wasm":Xa(t.wasm).then(()=>{Za(t).then(()=>{postMessage({type:e})},n=>{postMessage({type:e,err:n})})},n=>{postMessage({type:e,err:n})});break;case"init-ep":{let{epName:n,env:i}=t;Ja(i,n).then(()=>{postMessage({type:e})},o=>{postMessage({type:e,err:o})});break}case"copy-from":{let{buffer:n}=t,i=bo(n);postMessage({type:e,out:i});break}case"create":{let{model:n,options:i}=t;Ya(n,i).then(o=>{postMessage({type:e,out:o})},o=>{postMessage({type:e,err:o})});break}case"release":Qa(t),postMessage({type:e});break;case"run":{let{sessionId:n,inputIndices:i,inputs:o,outputIndices:a,options:s}=t;es(n,i,o,a,new Array(a.length).fill(null),s).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:e,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:e,out:l},ns([...o,...l]))},l=>{postMessage({type:e,err:l})});break}case"end-profiling":ts(t),postMessage({type:e});break;default:}}catch(n){postMessage({type:e,err:n})}});V4=MT?null:r=>new Worker(r??Xt,{type:"module",name:RT})});var VT={};Wr(VT,{default:()=>U4});async function FT(r={}){var e,t=r,n=typeof window=="object",i=typeof WorkerGlobalScope<"u",o=!n&&!i,a=i&&self.name?.startsWith("em-pthread");a&&(F(!globalThis.moduleLoaded,"module should only be loaded once on each pthread worker"),globalThis.moduleLoaded=!0),t.mountExternalData=(u,c)=>{u.startsWith("./")&&(u=u.substring(2)),(t.MountedFiles||(t.MountedFiles=new Map)).set(u,c)},t.unmountExternalData=()=>{delete t.MountedFiles};var s=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let l=u=>async(...c)=>{try{if(t.jsepSessionState)throw new Error("Session already started");let f=t.jsepSessionState={sessionHandle:c[0],errors:[]},p=await u(...c);if(t.jsepSessionState!==f)throw new Error("Session mismatch");t.jsepBackend?.flush();let m=f.errors;if(m.length>0){let y=await Promise.all(m);if(y=y.filter(_=>_),y.length>0)throw new Error(y.join(`
`))}return p}finally{t.jsepSessionState=null}};t.jsepInit=(u,c)=>{if(u==="webgpu"){[t.jsepBackend,t.jsepAlloc,t.jsepFree,t.jsepCopy,t.jsepCopyAsync,t.jsepCreateKernel,t.jsepReleaseKernel,t.jsepRunKernel,t.jsepCaptureBegin,t.jsepCaptureEnd,t.jsepReplay]=c;let f=t.jsepBackend;t.jsepRegisterBuffer=(p,m,y,_)=>f.registerBuffer(p,m,y,_),t.jsepGetBuffer=p=>f.getBuffer(p),t.jsepCreateDownloader=(p,m,y)=>f.createDownloader(p,m,y),t.jsepOnCreateSession=p=>{f.onCreateSession(p)},t.jsepOnReleaseSession=p=>{f.onReleaseSession(p)},t.jsepOnRunStart=p=>f.onRunStart(p),t.jsepUploadExternalBuffer=(p,m)=>{f.upload(p,m)}}else if(u==="webnn"){let f=c[0];[t.webnnReserveTensorId,t.webnnReleaseTensorId,t.webnnEnsureTensor,t.webnnUploadTensor,t.webnnDownloadTensor,t.webnnRegisterMLContext,t.webnnEnableTraceEvent]=c.slice(1),t.webnnReleaseTensorId=t.webnnReleaseTensorId,t.webnnUploadTensor=t.webnnUploadTensor,t.webnnRegisterMLContext=t.webnnRegisterMLContext,t.webnnOnRunStart=p=>f.onRunStart(p),t.webnnOnRunEnd=f.onRunEnd.bind(f),t.webnnOnReleaseSession=p=>{f.onReleaseSession(p)},t.webnnCreateMLTensorDownloader=(p,m)=>f.createMLTensorDownloader(p,m),t.webnnRegisterMLTensor=(p,m,y,_)=>f.registerMLTensor(p,m,y,_),t.webnnCreateMLContext=p=>f.createMLContext(p),t.webnnRegisterMLConstant=(p,m,y,_,v,x)=>f.registerMLConstant(p,m,y,_,v,t.MountedFiles,x),t.webnnRegisterGraphInput=f.registerGraphInput.bind(f),t.webnnIsGraphInput=f.isGraphInput.bind(f),t.webnnRegisterGraphOutput=f.registerGraphOutput.bind(f),t.webnnIsGraphOutput=f.isGraphOutput.bind(f),t.webnnCreateTemporaryTensor=f.createTemporaryTensor.bind(f),t.webnnIsGraphInputOutputTypeSupported=f.isGraphInputOutputTypeSupported.bind(f)}};let d=()=>{let u=c=>(...f)=>{let p=me.currData,m=c(...f);return me.currData!=p?me.whenDone():m};(()=>{for(let c of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[c]=u(t[c])})(),l!==void 0&&(t._OrtRun=l(t._OrtRun),t._OrtRunWithBinding=l(t._OrtRunWithBinding)),d=void 0};t.asyncInit=()=>{d?.()};var h,g,b=(u,c)=>{throw c},w=import.meta.url,T="";if(o){if(typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else{if(!n&&!i)throw new Error("environment detection error");try{T=new URL(".",w).href}catch{}if(typeof window!="object"&&typeof WorkerGlobalScope>"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");i&&(g=u=>{var c=new XMLHttpRequest;return c.open("GET",u,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),h=async u=>{if(ge(u))return new Promise((f,p)=>{var m=new XMLHttpRequest;m.open("GET",u,!0),m.responseType="arraybuffer",m.onload=()=>{m.status==200||m.status==0&&m.response?f(m.response):p(m.status)},m.onerror=p,m.send(null)});var c=await fetch(u,{credentials:"same-origin"});if(c.ok)return c.arrayBuffer();throw new Error(c.status+" : "+c.url)}}var I,O,S=console.log.bind(console),A=console.error.bind(console),j=S,k=A;F(n||i||!1,"Pthreads do not work in this environment yet (need Web Workers, or an alternative to them)"),F(!o,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable."),typeof WebAssembly!="object"&&k("no native wasm support detected");var V,W=!1;function F(u,c){u||Ue("Assertion failed"+(c?": "+c:""))}var Y,ee,ue,Te,ge=u=>u.startsWith("file://");function we(){var u=Ki();F(!(3&u)),u==0&&(u+=4),le((H(),Be),u>>>2>>>0,34821223),le((H(),Be),u+4>>>2>>>0,2310721022)}function Oe(){if(!W){var u=Ki();u==0&&(u+=4);var c=te((H(),Be),u>>>2>>>0),f=te((H(),Be),u+4>>>2>>>0);c==34821223&&f==2310721022||Ue(`Stack overflow! Stack cookie has been overwritten at ${wn(u)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${wn(f)} ${wn(c)}`)}}class P extends Error{}class ye extends P{constructor(c){super(c),this.excPtr=c;let f=Cf(c);this.name=f[0],this.message=f[1]}}function xe(...u){console.warn(...u)}function $(u){return()=>F(!1,`call to '${u}' via reference taken before Wasm module initialization`)}function oe(u){Object.getOwnPropertyDescriptor(t,u)&&Ue(`\`Module.${u}\` was supplied but \`${u}\` not included in INCOMING_MODULE_JS_API`)}function Le(u){return u==="FS_createPath"||u==="FS_createDataFile"||u==="FS_createPreloadedFile"||u==="FS_unlink"||u==="addRunDependency"||u==="FS_createLazyFile"||u==="FS_createDevice"||u==="removeRunDependency"}function ot(u,c){typeof globalThis>"u"||Object.getOwnPropertyDescriptor(globalThis,u)||Object.defineProperty(globalThis,u,{configurable:!0,get(){c()}})}function gt(u,c){ot(u,()=>{Tn(`\`${u}\` is not longer defined by emscripten. ${c}`)})}function Ce(u){a||Object.getOwnPropertyDescriptor(t,u)||Object.defineProperty(t,u,{configurable:!0,get(){var c=`'${u}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;Le(u)&&(c+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Ue(c)}})}function re(u,c,f){c>>>=0;let p=u.BYTES_PER_ELEMENT,m=c*p;if(c<=0&&Ue(`segmentation fault ${f} ${p} bytes at address ${m}`),pi){var y=Rf(0);m+p>y&&Ue(`segmentation fault, exceeded the top of the available dynamic heap when ${f} ${p} bytes at address ${m}. DYNAMICTOP=${y}`),y<Xi()&&Ue(`brk >= _emscripten_stack_get_base() (brk=${y}, _emscripten_stack_get_base()=${Xi()})`),y>Xe.buffer.byteLength&&Ue(`brk <= wasmMemory.buffer.byteLength (brk=${y}, wasmMemory.buffer.byteLength=${Xe.buffer.byteLength})`)}return c}function te(u,c){return u[re(u,c,"loading")]}function le(u,c,f){return u[re(u,c,"storing")]=f}function Rt(){Ue("segmentation fault")}function kt(){Ue("alignment fault")}function H(){Xe.buffer!=ct.buffer&&Co()}(()=>{var u=new Int16Array(1),c=new Int8Array(u.buffer);if(u[0]=25459,c[0]!==115||c[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})(),gt("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),gt("asm","Please use wasmExports instead"),Y=xe,xe=(...u)=>{return Y((c=0,pi&&Hi!==void 0&&(c=Hi()),`w:${Sd},t:${wn(c)}:`),...u);var c};var yt,Xe,ct,Ot,yr,xr,ie,Be,Ri,Vr,ln,Id,Sd=0;if(a){let u=function(c){try{var f=c.data,p=f.cmd;if(p==="load"){Sd=f.workerID;let v=[];self.onmessage=x=>v.push(x),yt=()=>{postMessage({cmd:"loaded"});for(let x of v)u(x);self.onmessage=u};for(let x of f.handlers)t[x]&&!t[x].proxy||(t[x]=(...C)=>{postMessage({cmd:"callHandler",handler:x,args:C})},x=="print"&&(j=t[x]),x=="printErr"&&(k=t[x]));Xe=f.wasmMemory,Co(),Te(f.wasmModule)}else if(p==="run"){F(f.pthread_ptr),m=f.pthread_ptr,_=(y=te((H(),Be),m+52>>>2>>>0))-te((H(),Be),m+56>>>2>>>0),F(y!=0),F(_!=0),F(y>_,"stackHigh must be higher then stackLow"),Bf(y,_),Rd(),R(y),we(),eu(f.pthread_ptr,0,0,1,0,0),Fe.threadInitTLS(),Ks(f.pthread_ptr),zs||(Ef(),zs=!0);try{Nd(f.start_routine,f.arg)}catch(v){if(v!="unwind")throw v}}else f.target==="setimmediate"||(p==="checkMailbox"?zs&&jo():p&&(k(`worker: received unknown command ${p}`),k(f)))}catch(v){throw k(`worker: onmessage() captured an uncaught exception: ${v}`),v?.stack&&k(v.stack),kf(),v}var m,y,_};var yB=u,zs=!1;self.onunhandledrejection=c=>{throw c.reason||c},self.onmessage=u}var pi=!1;function Co(){var u=Xe.buffer;t.HEAP8=ct=new Int8Array(u),yr=new Int16Array(u),t.HEAPU8=Ot=new Uint8Array(u),xr=new Uint16Array(u),t.HEAP32=ie=new Int32Array(u),t.HEAPU32=Be=new Uint32Array(u),Ri=new Float32Array(u),Vr=new Float64Array(u),ln=new BigInt64Array(u),Id=new BigUint64Array(u)}function $d(){if(F(!pi),pi=!0,a)return yt();Rd(),Oe(),Sn.__wasm_call_ctors()}F(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");var Mi=0,zi=null,Bi={},Ur=null;function Ad(u){Mi++,u?(F(!Bi[u]),Bi[u]=1,Ur===null&&typeof setInterval<"u"&&(Ur=setInterval(()=>{if(W)return clearInterval(Ur),void(Ur=null);var c=!1;for(var f in Bi)c||(c=!0,k("still waiting on run dependencies:")),k(`dependency: ${f}`);c&&k("(end of list)")},1e4))):k("warning: run dependency added without ID")}function Cd(u){if(Mi--,u?(F(Bi[u]),delete Bi[u]):k("warning: run dependency removed without ID"),Mi==0&&(Ur!==null&&(clearInterval(Ur),Ur=null),zi)){var c=zi;zi=null,c()}}function Ue(u){k(u="Aborted("+u+")"),W=!0,u.indexOf("RuntimeError: unreachable")>=0&&(u+='. "unreachable" may be due to ASYNCIFY_STACK_SIZE not being large enough (try increasing it)');var c=new WebAssembly.RuntimeError(u);throw ue?.(c),c}var Fi,cn={error(){Ue("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM")},init(){cn.error()},createDataFile(){cn.error()},createPreloadedFile(){cn.error()},createLazyFile(){cn.error()},open(){cn.error()},mkdev(){cn.error()},registerDevice(){cn.error()},analyzePath(){cn.error()},ErrnoError(){cn.error()}};function E(u,c){return(...f)=>{F(pi,`native function \`${u}\` called before runtime initialization`);var p=Sn[u];return F(p,`exported native function \`${u}\` not found`),F(f.length<=c,`native function \`${u}\` called with ${f.length} args but expects ${c}`),p(...f)}}async function kS(u,c,f){if(!u&&typeof WebAssembly.instantiateStreaming=="function"&&!ge(c))try{var p=fetch(c,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(p,f)}catch(m){k(`wasm streaming compile failed: ${m}`),k("falling back to ArrayBuffer instantiation")}return async function(m,y){try{var _=await async function(v){if(!I)try{var x=await h(v);return new Uint8Array(x)}catch{}return function(C){if(C==Fi&&I)return new Uint8Array(I);if(g)return g(C);throw"both async and sync fetching of the wasm failed"}(v)}(m);return await WebAssembly.instantiate(_,y)}catch(v){k(`failed to asynchronously prepare wasm: ${v}`),ge(Fi)&&k(`warning: Loading from a file URI (${Fi}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),Ue(v)}}(c,f)}function Od(){return(Wi={HaveOffsetConverter:sA,__assert_fail:jS,__asyncjs__jsepDownload:aA,__cxa_begin_catch:LS,__cxa_end_catch:NS,__cxa_find_matching_catch_2:RS,__cxa_find_matching_catch_3:MS,__cxa_find_matching_catch_4:zS,__cxa_find_matching_catch_5:BS,__cxa_find_matching_catch_6:FS,__cxa_rethrow:VS,__cxa_throw:US,__cxa_uncaught_exceptions:GS,__handle_stack_overflow:WS,__pthread_create_js:Vd,__resumeException:qS,__syscall_fcntl64:Ud,__syscall_fstat64:Gd,__syscall_getcwd:Wd,__syscall_getdents64:Hd,__syscall_ioctl:qd,__syscall_lstat64:Kd,__syscall_mkdirat:Xd,__syscall_newfstatat:Zd,__syscall_openat:Jd,__syscall_readlinkat:Yd,__syscall_rmdir:Qd,__syscall_stat64:ef,__syscall_unlinkat:tf,_abort_js:KS,_embind_register_bigint:JS,_embind_register_bool:YS,_embind_register_emval:e$,_embind_register_float:n$,_embind_register_integer:r$,_embind_register_memory_view:i$,_embind_register_std_string:o$,_embind_register_std_wstring:f$,_embind_register_void:p$,_emscripten_init_main_thread_js:h$,_emscripten_notify_mailbox_postmessage:m$,_emscripten_receive_on_main_thread_js:g$,_emscripten_thread_cleanup:y$,_emscripten_thread_mailbox_await:Ks,_emscripten_thread_set_strongref:b$,_emval_await:cf,_emval_create_invoker:w$,_emval_decref:Hs,_emval_equals:T$,_emval_get_global:x$,_emval_get_module_property:I$,_emval_get_property:S$,_emval_incref:$$,_emval_invoke:ff,_emval_invoke_i64:A$,_emval_new_array:C$,_emval_new_array_from_memory_view:O$,_emval_new_cstring:P$,_emval_new_object:E$,_emval_run_destructors:k$,_emval_set_property:j$,_gmtime_js:L$,_localtime_js:M$,_mktime_js:z$,_mmap_js:hf,_munmap_js:mf,_tzset_js:B$,alignfault:kt,clock_time_get:U$,emscripten_asm_const_int:G$,emscripten_asm_const_ptr:W$,emscripten_check_blocking_allowed:H$,emscripten_date_now:yf,emscripten_errn:q$,emscripten_exit_with_live_runtime:K$,emscripten_get_heap_max:X$,emscripten_get_now:gf,emscripten_num_logical_cores:Z$,emscripten_pc_get_function:zo,emscripten_resize_heap:eA,emscripten_stack_snapshot:tA,emscripten_stack_unwind_buffer:nA,environ_get:Tf,environ_sizes_get:xf,exit:Fs,fd_close:If,fd_read:Sf,fd_seek:$f,fd_write:Af,invoke_di:LO,invoke_dii:AA,invoke_diii:nE,invoke_djj:xA,invoke_fffffff:yP,invoke_fi:XA,invoke_fiff:xC,invoke_fii:KA,invoke_fiif:DE,invoke_fiii:GC,invoke_fijjjjifi:OP,invoke_fj:sE,invoke_i:wA,invoke_if:wC,invoke_iffi:UC,invoke_ii:cA,invoke_iidd:fO,invoke_iidi:fC,invoke_iif:uO,invoke_iiff:RO,invoke_iii:uA,invoke_iiif:_C,invoke_iiifi:hE,invoke_iiii:fA,invoke_iiiii:bA,invoke_iiiiid:FE,invoke_iiiiidfffiii:HC,invoke_iiiiii:yA,invoke_iiiiiii:hA,invoke_iiiiiiii:EA,invoke_iiiiiiiii:nC,invoke_iiiiiiiiii:qA,invoke_iiiiiiiiiii:rC,invoke_iiiiiiiiiiii:kP,invoke_iiiiiiiiiiiii:QP,invoke_iiiiiiiiiiiiifii:pP,invoke_iiiiiiiiiiiiii:lC,invoke_iiiiiiiiiiiiiii:CE,invoke_iiiiiiiiiiiiiiiiifii:rO,invoke_iiiiiiiiiiiiiiiiii:bO,invoke_iiiiiiiiiiiiiiiiiifi:VO,invoke_iiiiiiiiiiiiiiiiiiii:TO,invoke_iiiiiiiiiiiiiiiiiiiiiii:xO,invoke_iiiiiiiiiiiiiiiiiiiiiiii:IO,invoke_iiiiiiiiiiijiiii:lE,invoke_iiiiiiiiiji:gE,invoke_iiiiiiiiijii:wE,invoke_iiiiiiiij:NA,invoke_iiiiiiiijjjfi:xE,invoke_iiiiiij:vA,invoke_iiiiiijji:cC,invoke_iiiiiijjjii:TE,invoke_iiiiij:BE,invoke_iiiiiji:LC,invoke_iiiiijiii:iC,invoke_iiiiijiiiii:tC,invoke_iiiiijji:yE,invoke_iiiij:bC,invoke_iiiiji:zP,invoke_iiiijii:_E,invoke_iiiijiiiiiiiiii:cE,invoke_iiiijiiiijj:uE,invoke_iiiijjii:bE,invoke_iiiijjiii:oC,invoke_iiiijjj:WP,invoke_iiiijjjiii:AE,invoke_iiij:vC,invoke_iiiji:pE,invoke_iiijii:mE,invoke_iiijiii:vE,invoke_iiijiiiii:lP,invoke_iiijjii:qP,invoke_iij:SA,invoke_iiji:RA,invoke_iijiiii:DA,invoke_iijj:pO,invoke_iijjii:zE,invoke_iijjiii:OE,invoke_iijjjf:VP,invoke_iijjjii:$E,invoke_iijjjj:iO,invoke_ij:MA,invoke_iji:BA,invoke_ijii:LE,invoke_ijiiii:OC,invoke_j:yO,invoke_jfi:DP,invoke_ji:TA,invoke_jii:IA,invoke_jiii:ZA,invoke_jiiii:yC,invoke_jiiij:dE,invoke_jiij:gC,invoke_jiijj:fE,invoke_jij:AC,invoke_jiji:_A,invoke_jj:UA,invoke_jjj:aC,invoke_v:mA,invoke_vfiii:BO,invoke_vi:lA,invoke_vid:jA,invoke_vidi:TC,invoke_vif:kA,invoke_viffiii:mO,invoke_vifi:HO,invoke_vifii:sP,invoke_vifiifiiii:zC,invoke_vifiifiiiiiii:BC,invoke_vifiii:uP,invoke_vii:dA,invoke_viid:hO,invoke_viidi:VC,invoke_viif:eC,invoke_viiff:FO,invoke_viifiifijjjii:MC,invoke_viifiii:PO,invoke_viifjjijiiii:QO,invoke_viifjjjijiiiii:ZO,invoke_viii:pA,invoke_viiif:tE,invoke_viiiff:eO,invoke_viiifii:JC,invoke_viiifiifii:cO,invoke_viiifiiiiiifiiii:MO,invoke_viiii:gA,invoke_viiiiff:fP,invoke_viiiifiiifiii:EO,invoke_viiiii:$A,invoke_viiiiidiidii:lO,invoke_viiiiidiidiiii:DO,invoke_viiiiif:QC,invoke_viiiiiff:nO,invoke_viiiiifiifii:CO,invoke_viiiiifiifiiii:OO,invoke_viiiiifiiiifiii:NO,invoke_viiiiifiiiiii:YC,invoke_viiiiii:PA,invoke_viiiiiid:tP,invoke_viiiiiif:vO,invoke_viiiiiiff:tO,invoke_viiiiiiffifiiiii:wP,invoke_viiiiiiffiifiiiii:vP,invoke_viiiiiifi:eE,invoke_viiiiiifii:WC,invoke_viiiiiii:CA,invoke_viiiiiiidiiii:nP,invoke_viiiiiiifiiii:eP,invoke_viiiiiiii:LA,invoke_viiiiiiiif:KC,invoke_viiiiiiiifiiiifiiiii:YP,invoke_viiiiiiiii:HA,invoke_viiiiiiiiifiii:bP,invoke_viiiiiiiiii:YA,invoke_viiiiiiiiiii:JA,invoke_viiiiiiiiiiii:hC,invoke_viiiiiiiiiiiii:IC,invoke_viiiiiiiiiiiiii:pC,invoke_viiiiiiiiiiiiiifi:$O,invoke_viiiiiiiiiiiiiii:zO,invoke_viiiiiiiiiiiiiiii:mC,invoke_viiiiiiiiiiiiiiiifiiii:XC,invoke_viiiiiiiiiiiiiiiii:kO,invoke_viiiiiiiiiiiiiiiiii:ZC,invoke_viiiiiiiiiiiiiiiiiii:wO,invoke_viiiiiiiiiiiiiiiiiiii:SO,invoke_viiiiiiiiiiiiiiiiiiiiii:jO,invoke_viiiiiiiiiiiiiiiiiiiiiii:qC,invoke_viiiiiiiiiiiijfii:rP,invoke_viiiiiiiiijii:iE,invoke_viiiiiiiiji:oE,invoke_viiiiiiiijiiiiii:XP,invoke_viiiiiiiijjj:UO,invoke_viiiiiiijiiii:RE,invoke_viiiiiij:NE,invoke_viiiiiijjiiiii:KP,invoke_viiiiiijjjjjii:GO,invoke_viiiiij:$C,invoke_viiiiiji:iP,invoke_viiiiijiiiiii:LP,invoke_viiiiijjiiiii:NP,invoke_viiiiijjj:_O,invoke_viiiij:dP,invoke_viiiiji:RP,invoke_viiiijii:VA,invoke_viiiijiiiiiiif:AO,invoke_viiiijiiiiiiii:FP,invoke_viiiijj:SE,invoke_viiiijjj:IE,invoke_viiiijjji:UP,invoke_viiiijjjj:EE,invoke_viiij:CC,invoke_viiiji:oP,invoke_viiijii:zA,invoke_viiijiii:FA,invoke_viiijiiiiiiiii:GP,invoke_viiijiijjj:mP,invoke_viiijj:jP,invoke_viiijjiiiiiii:KO,invoke_viiijjjfffi:hP,invoke_viiijjjii:gO,invoke_viiijjjjji:aP,invoke_viij:QA,invoke_viiji:sC,invoke_viijiiii:HP,invoke_viijiiiiiiiiiiiiii:NC,invoke_viijiiiiiiijjii:sO,invoke_viijiiiijiii:XO,invoke_viijj:WA,invoke_viijjiii:MP,invoke_viijjiiiiii:kE,invoke_viijjiiiiiiii:jE,invoke_viijjiiiiiiiii:oO,invoke_viijjj:RC,invoke_viijjjj:gP,invoke_viijjjjiiiiiiiii:PE,invoke_viijjjjjjjjjjjjjii:BP,invoke_vij:OA,invoke_vijfjiiiii:aE,invoke_viji:dC,invoke_vijii:GA,invoke_vijiii:uC,invoke_vijiiiiii:kC,invoke_vijiiiiiiii:EP,invoke_vijiji:PC,invoke_vijj:WO,invoke_vijjfffiii:PP,invoke_vijji:ME,invoke_vijjjiii:rE,invoke_vijjjiiji:aO,invoke_vijjjjiii:dO,invoke_vijjjjjjifiiii:$P,invoke_vijjjjjjjjjjjjjii:qO,invoke_vj:cP,invoke_vjifiii:FC,invoke_vjiiiii:EC,invoke_vjiiiiii:DC,invoke_vjiiiiiii:jC,invoke_vjiij:SC,invoke_vjjii:ZP,invoke_vjjjii:JP,invoke_vjjjjfiii:CP,invoke_vjjjjjiiiii:AP,invoke_vjjjjjjddddjji:YO,invoke_vjjjjjjffffjji:JO,invoke_vjjjjjjfffifiiiii:SP,invoke_vjjjjjjfffifiiiiiii:IP,invoke_vjjjjjjffiifiiiiii:_P,invoke_vjjjjjjjjfffiifiiiii:xP,invoke_vjjjjjjjjfffiifiiiiii:TP,llvm_eh_typeid_for:iA,memory:Xe,proc_exit:Bs,segfault:Rt}).__instrumented||(Wi.__instrumented=!0,me.instrumentWasmImports(Wi)),{env:Wi,wasi_snapshot_preview1:Wi}}class Pd{name="ExitStatus";constructor(c){this.message=`Program terminated with exit(${c})`,this.status=c}}var Ed=u=>{u.terminate(),u.onmessage=c=>{var f=c.data.cmd;k(`received "${f}" command from terminated worker: ${u.workerID}`)}},Dd=u=>{F(!a,"Internal Error! cleanupThread() can only ever be called from main application thread!"),F(u,"Internal Error! Null pthread_ptr in cleanupThread!");var c=Fe.pthreads[u];F(c),Fe.returnWorkerToPool(c)},kd=[],jd=u=>{F(!a,"Internal Error! spawnThread() can only ever be called from main application thread!"),F(u.pthread_ptr,"Internal error, no pthread ptr!");var c=Fe.getNewWorker();if(!c)return 6;F(!c.pthread_ptr,"Internal error!"),Fe.runningWorkers.push(c),Fe.pthreads[u.pthread_ptr]=c,c.pthread_ptr=u.pthread_ptr;var f={cmd:"run",start_routine:u.startRoutine,arg:u.arg,pthread_ptr:u.pthread_ptr};return c.postMessage(f,u.transferList),0},hi=0,Oo=()=>hi>0,M=()=>nu(),R=u=>Ff(u),Po=u=>Vf(u),dt=(u,c,f,...p)=>{for(var m=2*p.length,y=M(),_=Po(8*m),v=_>>>3,x=0;x<p.length;x++){var C=p[x];typeof C=="bigint"?(le((H(),ln),v+2*x>>>0,1n),le((H(),ln),v+2*x+1>>>0,C)):(le((H(),ln),v+2*x>>>0,0n),le((H(),Vr),v+2*x+1>>>0,C))}var D=jf(u,c,m,_,f);return R(y),D};function Bs(u){if(a)return dt(0,0,1,u);V=u,Oo()||(Fe.terminateAllThreads(),W=!0),b(0,new Pd(u))}function Ld(u){if(a)return dt(1,0,0,u);Fs(u)}var Fs=(u,c)=>{if(V=u,function(){var p=j,m=k,y=!1;j=k=_=>{y=!0};try{rA()}catch{}j=p,k=m,y&&(Tn("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc."),Tn("(this may also be due to not including full filesystem support - try building with -sFORCE_FILESYSTEM)"))}(),a)throw F(!c),Ld(u),"unwind";if(Oo()&&!c){var f=`program exited (with status: ${u}), but keepRuntimeAlive() is set (counter=${hi}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;ue?.(f),k(f)}Bs(u)},wn=u=>(F(typeof u=="number"),"0x"+u.toString(16).padStart(8,"0")),Fe={unusedWorkers:[],runningWorkers:[],tlsInitFunctions:[],pthreads:{},nextWorkerID:1,init(){a||Fe.initMainThread()},initMainThread(){for(var u,c=t.numThreads-1;c--;)Fe.allocateUnusedWorker();u=()=>{Ad("loading-workers"),Fe.loadWasmModuleToAllWorkers(()=>Cd("loading-workers"))},kd.push(u)},terminateAllThreads:()=>{for(var u of(F(!a,"Internal Error! terminateAllThreads() can only ever be called from main application thread!"),Fe.runningWorkers))Ed(u);for(var u of Fe.unusedWorkers)Ed(u);Fe.unusedWorkers=[],Fe.runningWorkers=[],Fe.pthreads={}},returnWorkerToPool:u=>{var c=u.pthread_ptr;delete Fe.pthreads[c],Fe.unusedWorkers.push(u),Fe.runningWorkers.splice(Fe.runningWorkers.indexOf(u),1),u.pthread_ptr=0,Lf(c)},threadInitTLS(){Fe.tlsInitFunctions.forEach(u=>u())},loadWasmModuleToWorker:u=>new Promise(c=>{u.onmessage=m=>{var y=m.data,_=y.cmd;if(y.targetThread&&y.targetThread!=Hi()){var v=Fe.pthreads[y.targetThread];v?v.postMessage(y,y.transferList):k(`Internal error! Worker sent a message "${_}" to target pthread ${y.targetThread}, but that thread no longer exists!`)}else _==="checkMailbox"?jo():_==="spawnThread"?jd(y):_==="cleanupThread"?Dd(y.thread):_==="loaded"?(u.loaded=!0,c(u)):y.target==="setimmediate"?u.postMessage(y):_==="callHandler"?t[y.handler](...y.args):_&&k(`worker sent an unknown command ${_}`)},u.onerror=m=>{var y="worker sent an error!";throw u.pthread_ptr&&(y=`Pthread ${wn(u.pthread_ptr)} sent an error!`),k(`${y} ${m.filename}:${m.lineno}: ${m.message}`),m},F(Xe instanceof WebAssembly.Memory,"WebAssembly memory should have been loaded by now!"),F(O instanceof WebAssembly.Module,"WebAssembly Module should have been loaded by now!");var f=[];for(var p of[])t.propertyIsEnumerable(p)&&f.push(p);u.postMessage({cmd:"load",handlers:f,wasmMemory:Xe,wasmModule:O,workerID:u.workerID})}),loadWasmModuleToAllWorkers(u){if(a)return u();Promise.all(Fe.unusedWorkers.map(Fe.loadWasmModuleToWorker)).then(u)},allocateUnusedWorker(){var u;(u=new Worker((()=>{let c=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new c("ort.all.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread-"+Fe.nextWorkerID})).workerID=Fe.nextWorkerID++,Fe.unusedWorkers.push(u)},getNewWorker:()=>(Fe.unusedWorkers.length==0&&(k("Tried to spawn a new thread, but the thread pool is exhausted.\nThis might result in a deadlock unless some threads eventually exit or the code explicitly breaks out to the event loop.\nIf you want to increase the pool size, use setting `-sPTHREAD_POOL_SIZE=...`.\nIf you want to throw an explicit error instead of the risk of deadlocking in those cases, use setting `-sPTHREAD_POOL_SIZE_STRICT=2`."),Fe.allocateUnusedWorker(),Fe.loadWasmModuleToWorker(Fe.unusedWorkers[0])),Fe.unusedWorkers.pop())},N={},Nd=(u,c)=>{hi=0;var f=ou(u,c);Oe(),function(p){Oo()?V=p:tu(p)}(f)};Nd.isAsync=!0;var Rd=()=>{var u=Xi(),c=Ki();Hf(u,c)},Tn=u=>{Tn.shown||={},Tn.shown[u]||(Tn.shown[u]=1,k(u))},mi=u=>u<-9007199254740992||u>9007199254740992?NaN:Number(u),Md=typeof TextDecoder<"u"?new TextDecoder:void 0,zd=(u,c,f,p)=>{var m=c+f;if(p)return m;for(;u[c]&&!(c>=m);)++c;return c},Bd=(u,c=0,f,p)=>{var m=zd(u,c>>>=0,f,p);if(m-c>16&&u.buffer&&Md)return Md.decode(u.buffer instanceof ArrayBuffer?u.subarray(c,m):u.slice(c,m));for(var y="";c<m;){var _=u[c++];if(128&_){var v=63&u[c++];if((224&_)!=192){var x=63&u[c++];if((240&_)==224?_=(15&_)<<12|v<<6|x:((248&_)!=240&&Tn("Invalid UTF-8 leading byte "+wn(_)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),_=(7&_)<<18|v<<12|x<<6|63&u[c++]),_<65536)y+=String.fromCharCode(_);else{var C=_-65536;y+=String.fromCharCode(55296|C>>10,56320|1023&C)}}else y+=String.fromCharCode((31&_)<<6|v)}else y+=String.fromCharCode(_)}return y},at=(u,c,f)=>(F(typeof u=="number",`UTF8ToString expects a number (got ${typeof u})`),(u>>>=0)?Bd((H(),Ot),u,c,f):"");function jS(u,c,f,p){return c>>>=0,p>>>=0,Ue(`Assertion failed: ${at(u>>>=0)}, at: `+[c?at(c):"unknown filename",f,p?at(p):"unknown function"])}var Vi=[],Eo=0;function LS(u){var c=new Vs(u>>>=0);return c.get_caught()||(c.set_caught(!0),Eo--),c.set_rethrown(!1),Vi.push(c),iu(u),Wf(u)}var Ir=0,NS=()=>{z(0,0),F(Vi.length>0);var u=Vi.pop();ru(u.excPtr),Ir=0};class Vs{constructor(c){this.excPtr=c,this.ptr=c-24}set_type(c){le((H(),Be),this.ptr+4>>>2>>>0,c)}get_type(){return te((H(),Be),this.ptr+4>>>2>>>0)}set_destructor(c){le((H(),Be),this.ptr+8>>>2>>>0,c)}get_destructor(){return te((H(),Be),this.ptr+8>>>2>>>0)}set_caught(c){c=c?1:0,le((H(),ct),this.ptr+12>>>0,c)}get_caught(){return te((H(),ct),this.ptr+12>>>0)!=0}set_rethrown(c){c=c?1:0,le((H(),ct),this.ptr+13>>>0,c)}get_rethrown(){return te((H(),ct),this.ptr+13>>>0)!=0}init(c,f){this.set_adjusted_ptr(0),this.set_type(c),this.set_destructor(f)}set_adjusted_ptr(c){le((H(),Be),this.ptr+16>>>2>>>0,c)}get_adjusted_ptr(){return te((H(),Be),this.ptr+16>>>2>>>0)}}var Do=u=>Mf(u),Ui=u=>{var c=Ir?.excPtr;if(!c)return Do(0),0;var f=new Vs(c);f.set_adjusted_ptr(c);var p=f.get_type();if(!p)return Do(0),c;for(var m of u){if(m===0||m===p)break;var y=f.ptr+16;if(Gf(m,p,y))return Do(m),c}return Do(p),c};function RS(){return Ui([])}function MS(u){return Ui([u>>>=0])}function zS(u,c){return Ui([u>>>=0,c>>>=0])}function BS(u,c,f){return Ui([u>>>=0,c>>>=0,f>>>=0])}function FS(u,c,f,p){return Ui([u>>>=0,c>>>=0,f>>>=0,p>>>=0])}var VS=()=>{var u=Vi.pop();u||Ue("no exception to throw");var c=u.excPtr;throw u.get_rethrown()||(Vi.push(u),u.set_rethrown(!0),u.set_caught(!1),Eo++),Ir=new ye(c)};function US(u,c,f){throw c>>>=0,f>>>=0,new Vs(u>>>=0).init(c,f),Ir=new ye(u),Eo++,Ir}var GS=()=>Eo;function WS(u){u>>>=0;var c=Xi(),f=Ki();Ue(`stack overflow (Attempt to set SP to ${wn(u)}, with stack limits [${wn(f)} - ${wn(c)}]). If you require more stack space build with -sSTACK_SIZE=<bytes>`)}function Fd(u,c,f,p){return a?dt(2,0,1,u,c,f,p):Vd(u,c,f,p)}var HS=()=>s!==void 0;function Vd(u,c,f,p){if(u>>>=0,c>>>=0,f>>>=0,p>>>=0,!HS())return xe("pthread_create: environment does not support SharedArrayBuffer, pthreads are not available"),6;var m=[];if(a&&m.length===0)return Fd(u,c,f,p);var y={startRoutine:f,pthread_ptr:u,arg:p,transferList:m};return a?(y.cmd="spawnThread",postMessage(y,m),0):jd(y)}function qS(u){throw Ir||(Ir=new ye(u>>>=0)),Ir}var Us={varargs:void 0,getStr:u=>at(u)};function Ud(u,c,f){return a?dt(3,0,1,u,c,f):(f>>>=0,Us.varargs=f,0)}function Gd(u,c){if(a)return dt(4,0,1,u,c);c>>>=0,Ue("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")}function Wd(u,c){if(a)return dt(5,0,1,u,c);u>>>=0,c>>>=0,Ue("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")}function Hd(u,c,f){if(a)return dt(6,0,1,u,c,f);c>>>=0,f>>>=0,Ue("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")}function qd(u,c,f){return a?dt(7,0,1,u,c,f):(f>>>=0,Us.varargs=f,0)}function Kd(u,c){if(a)return dt(8,0,1,u,c);u>>>=0,c>>>=0,Ue("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")}function Xd(u,c,f){if(a)return dt(9,0,1,u,c,f);c>>>=0,Ue("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")}function Zd(u,c,f,p){if(a)return dt(10,0,1,u,c,f,p);c>>>=0,f>>>=0,Ue("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")}function Jd(u,c,f,p){if(a)return dt(11,0,1,u,c,f,p);c>>>=0,p>>>=0,Us.varargs=p,Ue("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")}function Yd(u,c,f,p){if(a)return dt(12,0,1,u,c,f,p);c>>>=0,f>>>=0,p>>>=0,Ue("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")}function Qd(u){if(a)return dt(13,0,1,u);u>>>=0,Ue("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")}function ef(u,c){if(a)return dt(14,0,1,u,c);u>>>=0,c>>>=0,Ue("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")}function tf(u,c,f){if(a)return dt(15,0,1,u,c,f);c>>>=0,Ue("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")}var KS=()=>Ue("native code called abort()"),xn=u=>{u>>>=0;for(var c="";;){var f=te((H(),Ot),u++>>>0);if(!f)return c;c+=String.fromCharCode(f)}},Gs={},Ws={},XS={},ZS=class extends Error{constructor(u){super(u),this.name="BindingError"}},gi=u=>{throw new ZS(u)};function br(u,c,f={}){return function(p,m,y={}){var _=m.name;if(p||gi(`type "${_}" must have a positive integer typeid pointer`),Ws.hasOwnProperty(p)){if(y.ignoreDuplicateRegistrations)return;gi(`Cannot register type '${_}' twice`)}if(Ws[p]=m,delete XS[p],Gs.hasOwnProperty(p)){var v=Gs[p];delete Gs[p],v.forEach(x=>x())}}(u,c,f)}var nf=(u,c,f)=>{switch(c){case 1:return f?p=>te((H(),ct),p>>>0):p=>te((H(),Ot),p>>>0);case 2:return f?p=>te((H(),yr),p>>>1>>>0):p=>te((H(),xr),p>>>1>>>0);case 4:return f?p=>te((H(),ie),p>>>2>>>0):p=>te((H(),Be),p>>>2>>>0);case 8:return f?p=>te((H(),ln),p>>>3>>>0):p=>te((H(),Id),p>>>3>>>0);default:throw new TypeError(`invalid integer width (${c}): ${u}`)}},ko=u=>{if(u===null)return"null";var c=typeof u;return c==="object"||c==="array"||c==="function"?u.toString():""+u},rf=(u,c,f,p)=>{if(c<f||c>p)throw new TypeError(`Passing a number "${ko(c)}" from JS side to C/C++ side to an argument of type "${u}", which is outside the valid range [${f}, ${p}]!`)},JS=function(u,c,f,p,m){u>>>=0,f>>>=0,c=xn(c>>>=0);let y=p===0n,_=v=>v;if(y){let v=8*f;_=x=>BigInt.asUintN(v,x),m=_(m)}br(u,{name:c,fromWireType:_,toWireType:(v,x)=>{if(typeof x=="number")x=BigInt(x);else if(typeof x!="bigint")throw new TypeError(`Cannot convert "${ko(x)}" to ${this.name}`);return rf(c,x,p,m),x},readValueFromPointer:nf(c,f,!y),destructorFunction:null})};function YS(u,c,f,p){br(u>>>=0,{name:c=xn(c>>>=0),fromWireType:function(m){return!!m},toWireType:function(m,y){return y?f:p},readValueFromPointer:function(m){return this.fromWireType(te((H(),Ot),m>>>0))},destructorFunction:null})}var of=[],In=[0,1,,1,null,1,!0,1,!1,1];function Hs(u){(u>>>=0)>9&&--In[u+1]==0&&(F(In[u]!==void 0,"Decref for unallocated handle."),In[u]=void 0,of.push(u))}var mt={toValue:u=>(u||gi(`Cannot use deleted val. handle = ${u}`),F(u===2||In[u]!==void 0&&u%2==0,`invalid handle: ${u}`),In[u]),toHandle:u=>{switch(u){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let c=of.pop()||In.length;return In[c]=u,In[c+1]=1,c}}}};function qs(u){return this.fromWireType(te((H(),Be),u>>>2>>>0))}var QS={name:"emscripten::val",fromWireType:u=>{var c=mt.toValue(u);return Hs(u),c},toWireType:(u,c)=>mt.toHandle(c),readValueFromPointer:qs,destructorFunction:null};function e$(u){return br(u>>>=0,QS)}var t$=(u,c)=>{switch(c){case 4:return function(f){return this.fromWireType(te((H(),Ri),f>>>2>>>0))};case 8:return function(f){return this.fromWireType(te((H(),Vr),f>>>3>>>0))};default:throw new TypeError(`invalid float width (${c}): ${u}`)}},n$=function(u,c,f){f>>>=0,br(u>>>=0,{name:c=xn(c>>>=0),fromWireType:p=>p,toWireType:(p,m)=>{if(typeof m!="number"&&typeof m!="boolean")throw new TypeError(`Cannot convert ${ko(m)} to ${this.name}`);return m},readValueFromPointer:t$(c,f),destructorFunction:null})},r$=function(u,c,f,p,m){u>>>=0,f>>>=0,c=xn(c>>>=0);let y=v=>v;if(p===0){var _=32-8*f;y=v=>v<<_>>>_,m=y(m)}br(u,{name:c,fromWireType:y,toWireType:(v,x)=>{if(typeof x!="number"&&typeof x!="boolean")throw new TypeError(`Cannot convert "${ko(x)}" to ${c}`);return rf(c,x,p,m),x},readValueFromPointer:nf(c,f,p!==0),destructorFunction:null})};function i$(u,c,f){f>>>=0;var p=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][c];function m(y){var _=te((H(),Be),y>>>2>>>0),v=te((H(),Be),y+4>>>2>>>0);return new p((H(),ct).buffer,v,_)}br(u>>>=0,{name:f=xn(f),fromWireType:m,readValueFromPointer:m},{ignoreDuplicateRegistrations:!0})}var Sr=(u,c,f)=>(F(typeof f=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),((p,m,y,_)=>{if(y>>>=0,F(typeof p=="string",`stringToUTF8Array expects a string (got ${typeof p})`),!(_>0))return 0;for(var v=y,x=y+_-1,C=0;C<p.length;++C){var D=p.codePointAt(C);if(D<=127){if(y>=x)break;m[y++>>>0]=D}else if(D<=2047){if(y+1>=x)break;m[y++>>>0]=192|D>>6,m[y++>>>0]=128|63&D}else if(D<=65535){if(y+2>=x)break;m[y++>>>0]=224|D>>12,m[y++>>>0]=128|D>>6&63,m[y++>>>0]=128|63&D}else{if(y+3>=x)break;D>1114111&&Tn("Invalid Unicode code point "+wn(D)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),m[y++>>>0]=240|D>>18,m[y++>>>0]=128|D>>12&63,m[y++>>>0]=128|D>>6&63,m[y++>>>0]=128|63&D,C++}}return m[y>>>0]=0,y-v})(u,(H(),Ot),c,f)),yi=u=>{for(var c=0,f=0;f<u.length;++f){var p=u.charCodeAt(f);p<=127?c++:p<=2047?c+=2:p>=55296&&p<=57343?(c+=4,++f):c+=3}return c};function o$(u,c){br(u>>>=0,{name:c=xn(c>>>=0),fromWireType(f){var p,m=te((H(),Be),f>>>2>>>0);return p=at(f+4,m,!0),Jt(f),p},toWireType(f,p){var m;p instanceof ArrayBuffer&&(p=new Uint8Array(p));var y=typeof p=="string";y||ArrayBuffer.isView(p)&&p.BYTES_PER_ELEMENT==1||gi("Cannot pass non-string to std::string"),m=y?yi(p):p.length;var _=qi(4+m+1),v=_+4;return le((H(),Be),_>>>2>>>0,m),y?Sr(p,v,m+1):(H(),Ot).set(p,v>>>0),f!==null&&f.push(Jt,_),_},readValueFromPointer:qs,destructorFunction(f){Jt(f)}})}var af=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,a$=(u,c,f)=>{F(u%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");var p=u>>>1,m=zd((H(),xr),p,c/2,f);if(m-p>16&&af)return af.decode((H(),xr).buffer instanceof ArrayBuffer?(H(),xr).subarray(p>>>0,m>>>0):(H(),xr).slice(p,m));for(var y="",_=p;_<m;++_){var v=te((H(),xr),_>>>0);y+=String.fromCharCode(v)}return y},s$=(u,c,f)=>{if(F(c%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),F(typeof f=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),f??=2147483647,f<2)return 0;for(var p=c,m=(f-=2)<2*u.length?f/2:u.length,y=0;y<m;++y){var _=u.charCodeAt(y);le((H(),yr),c>>>1>>>0,_),c+=2}return le((H(),yr),c>>>1>>>0,0),c-p},u$=u=>2*u.length,l$=(u,c,f)=>{F(u%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var p="",m=u>>>2,y=0;!(y>=c/4);y++){var _=te((H(),Be),m+y>>>0);if(!_&&!f)break;p+=String.fromCodePoint(_)}return p},c$=(u,c,f)=>{if(F((c>>>=0)%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),F(typeof f=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),f??=2147483647,f<4)return 0;for(var p=c,m=p+f-4,y=0;y<u.length;++y){var _=u.codePointAt(y);if(_>65535&&y++,le((H(),ie),c>>>2>>>0,_),(c+=4)+4>m)break}return le((H(),ie),c>>>2>>>0,0),c-p},d$=u=>{for(var c=0,f=0;f<u.length;++f)u.codePointAt(f)>65535&&f++,c+=4;return c};function f$(u,c,f){var p,m,y;u>>>=0,c>>>=0,f=xn(f>>>=0),c===2?(p=a$,m=s$,y=u$):(F(c===4,"only 2-byte and 4-byte strings are currently supported"),p=l$,m=c$,y=d$),br(u,{name:f,fromWireType:_=>{var v=te((H(),Be),_>>>2>>>0),x=p(_+4,v*c,!0);return Jt(_),x},toWireType:(_,v)=>{typeof v!="string"&&gi(`Cannot pass non-string to C++ string type ${f}`);var x=y(v),C=qi(4+x+c);return le((H(),Be),C>>>2>>>0,x/c),m(v,C+4,x+c),_!==null&&_.push(Jt,C),C},readValueFromPointer:qs,destructorFunction(_){Jt(_)}})}var p$=function(u,c){br(u>>>=0,{isVoid:!0,name:c=xn(c>>>=0),fromWireType:()=>{},toWireType:(f,p)=>{}})};function h$(u){eu(u>>>=0,!i,1,!n,131072,!1),Fe.threadInitTLS()}var sf=u=>{if(u instanceof Pd||u=="unwind")return V;Oe(),u instanceof WebAssembly.RuntimeError&&nu()<=0&&k("Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 5242880)"),b(0,u)},uf=u=>{if(W)k("user callback triggered after runtime exited or application aborted.  Ignoring.");else try{u(),(()=>{if(!Oo())try{a?tu(V):Fs(V)}catch(c){sf(c)}})()}catch(c){sf(c)}};function Ks(u){if(u>>>=0,typeof Atomics.waitAsync=="function"){var c=Atomics.waitAsync((H(),ie),u>>>2,u);F(c.async),c.value.then(jo);var f=u+128;Atomics.store((H(),ie),f>>>2,1)}}var jo=()=>{var u=Hi();u&&(Ks(u),uf(Nf))};function m$(u,c){if((u>>>=0)==(c>>>=0))setTimeout(jo);else if(a)postMessage({targetThread:u,cmd:"checkMailbox"});else{var f=Fe.pthreads[u];if(!f)return void k(`Cannot send message to thread with ID ${u}, unknown thread ID!`);f.postMessage({cmd:"checkMailbox"})}}var Lo=[];function g$(u,c,f,p,m){c>>>=0,f>>>=0,m>>>=0,p/=2,Lo.length=p;for(var y=m>>>3,_=0;_<p;_++)te((H(),ln),y+2*_>>>0)?Lo[_]=te((H(),ln),y+2*_+1>>>0):Lo[_]=te((H(),Vr),y+2*_+1>>>0);var v=c?Qs[c]:oA[u];F(!(u&&c)),F(v.length==p,"Call args mismatch in _emscripten_receive_on_main_thread_js"),Fe.currentProxiedOperationCallerThread=f;var x=v(...Lo);return Fe.currentProxiedOperationCallerThread=0,F(typeof x!="bigint"),x}function y$(u){u>>>=0,a?postMessage({cmd:"cleanupThread",thread:u}):Dd(u)}function b$(u){}var No=u=>{try{return u()}catch(c){Ue(c)}},lf=()=>{hi+=1},me={instrumentWasmImports(u){var c=/^(invoke_.*|__asyncjs__.*)$/;for(let[f,p]of Object.entries(u))if(typeof p=="function"){let m=p.isAsync||c.test(f);u[f]=(...y)=>{var _=me.state;try{return p(...y)}finally{var v=_===me.State.Normal&&me.state===me.State.Disabled,x=f.startsWith("invoke_")&&!0;if(me.state!==_&&!m&&!v&&!x)throw new Error(`import ${f} was not in ASYNCIFY_IMPORTS, but changed the state`)}}}},instrumentFunction(u){var c=(...f)=>{me.exportCallStack.push(u);try{return u(...f)}finally{W||(F(me.exportCallStack.pop()===u),me.maybeStopUnwind())}};return me.funcWrappers.set(u,c),c},instrumentWasmExports(u){var c={};for(let[p,m]of Object.entries(u))if(typeof m=="function"){var f=me.instrumentFunction(m);c[p]=f}else c[p]=m;return c},State:{Normal:0,Unwinding:1,Rewinding:2,Disabled:3},state:0,StackSize:65536,currData:null,handleSleepReturnValue:0,exportCallStack:[],callstackFuncToId:new Map,callStackIdToFunc:new Map,funcWrappers:new Map,callStackId:0,asyncPromiseHandlers:null,sleepCallbacks:[],getCallStackId(u){if(F(u),!me.callstackFuncToId.has(u)){var c=me.callStackId++;me.callstackFuncToId.set(u,c),me.callStackIdToFunc.set(c,u)}return me.callstackFuncToId.get(u)},maybeStopUnwind(){me.currData&&me.state===me.State.Unwinding&&me.exportCallStack.length===0&&(me.state=me.State.Normal,lf(),No(Ay),typeof Fibers<"u"&&Fibers.trampoline())},whenDone:()=>(F(me.currData,"Tried to wait for an async operation when none is in progress."),F(!me.asyncPromiseHandlers,"Cannot have multiple async operations in flight at once"),new Promise((u,c)=>{me.asyncPromiseHandlers={resolve:u,reject:c}})),allocateData(){var u=qi(12+me.StackSize);return me.setDataHeader(u,u+12,me.StackSize),me.setDataRewindFunc(u),u},setDataHeader(u,c,f){le((H(),Be),u>>>2>>>0,c),le((H(),Be),u+4>>>2>>>0,c+f)},setDataRewindFunc(u){var c=me.exportCallStack[0];F(c,"exportCallStack is empty");var f=me.getCallStackId(c);le((H(),ie),u+8>>>2>>>0,f)},getDataRewindFunc(u){var c=te((H(),ie),u+8>>>2>>>0),f=me.callStackIdToFunc.get(c);return F(f,`id ${c} not found in callStackIdToFunc`),f},doRewind(u){var c=me.getDataRewindFunc(u),f=me.funcWrappers.get(c);return F(c),F(f),F(hi>0),hi-=1,f()},handleSleep(u){if(F(me.state!==me.State.Disabled,"Asyncify cannot be done during or after the runtime exits"),!W){if(me.state===me.State.Normal){var c=!1,f=!1;u((p=0)=>{if(F(!p||typeof p=="number"||typeof p=="boolean"),!W&&(me.handleSleepReturnValue=p,c=!0,f)){F(!me.exportCallStack.length,"Waking up (starting to rewind) must be done from JS, without compiled code on the stack."),me.state=me.State.Rewinding,No(()=>Cy(me.currData)),typeof MainLoop<"u"&&MainLoop.func&&MainLoop.resume();var m,y=!1;try{m=me.doRewind(me.currData)}catch(x){m=x,y=!0}var _=!1;if(!me.currData){var v=me.asyncPromiseHandlers;v&&(me.asyncPromiseHandlers=null,(y?v.reject:v.resolve)(m),_=!0)}if(y&&!_)throw m}}),f=!0,c||(me.state=me.State.Unwinding,me.currData=me.allocateData(),typeof MainLoop<"u"&&MainLoop.func&&MainLoop.pause(),No(()=>$y(me.currData)))}else me.state===me.State.Rewinding?(me.state=me.State.Normal,No(Oy),Jt(me.currData),me.currData=null,me.sleepCallbacks.forEach(uf)):Ue(`invalid state: ${me.state}`);return me.handleSleepReturnValue}},handleAsync:u=>me.handleSleep(c=>{u().then(c)})},cf=function(u){return u>>>=0,me.handleAsync(async()=>{var c=await mt.toValue(u);return mt.toHandle(c)})};cf.isAsync=!0;var Xs=[],_$=(u,c,f)=>{var p=[],m=u(p,f);return p.length&&le((H(),Be),c>>>2>>>0,mt.toHandle(p)),m},v$={},Ro=u=>{var c=v$[u];return c===void 0?xn(u):c},w$=function(u,c,f){c>>>=0;var[p,...m]=((Q,ce)=>{for(var fe=new Array(Q),_e=0;_e<Q;++_e)fe[_e]=(Ee=te((H(),Be),ce+4*_e>>>2>>>0),He=`parameter ${_e}`,Ge=void 0,wt=void 0,Mt=void 0,Wt=void 0,(Wt=Ws[Ee])===void 0&&gi(`${He} has unknown type ${Ge=Ee,wt=Pf(Ge),Mt=xn(wt),Jt(wt),Mt}`),Wt);var Ee,He,Ge,wt,Mt,Wt;return fe})(u,c),y=p.toWireType.bind(p),_=m.map(Q=>Q.readValueFromPointer.bind(Q));u--;var v,x={toValue:mt.toValue},C=_.map((Q,ce)=>{var fe=`argFromPtr${ce}`;return x[fe]=Q,`${fe}(args${ce?"+"+8*ce:""})`});switch(f){case 0:v="toValue(handle)";break;case 2:v="new (toValue(handle))";break;case 3:v="";break;case 1:x.getStringOrSymbol=Ro,v="toValue(handle)[getStringOrSymbol(methodName)]"}v+=`(${C})`,p.isVoid||(x.toReturnWire=y,x.emval_returnValue=_$,v=`return emval_returnValue(toReturnWire, destructorsRef, ${v})`),v=`return function (handle, methodName, destructorsRef, args) {
  ${v}
  }`;var D,B,G,K,J=new Function(Object.keys(x),v)(...Object.values(x));return G=`methodCaller<(${m.map(Q=>Q.name)}) => ${p.name}>`,K=J,D=Object.defineProperty(K,"name",{value:G}),B=Xs.length,Xs.push(D),B};function T$(u,c){return u>>>=0,c>>>=0,(u=mt.toValue(u))==mt.toValue(c)}var df=()=>globalThis;function x$(u){return(u>>>=0)==0?mt.toHandle(df()):(u=Ro(u),mt.toHandle(df()[u]))}function I$(u){return u=Ro(u>>>=0),mt.toHandle(t[u])}function S$(u,c){return u>>>=0,c>>>=0,u=mt.toValue(u),c=mt.toValue(c),mt.toHandle(u[c])}function $$(u){(u>>>=0)>9&&(In[u+1]+=1)}function ff(u,c,f,p,m){return c>>>=0,f>>>=0,p>>>=0,m>>>=0,Xs[u>>>=0](c,f,p,m)}var A$=ff;function C$(){return mt.toHandle([])}function O$(u){u>>>=0,u=mt.toValue(u);for(var c=new Array(u.length),f=0;f<u.length;f++)c[f]=u[f];return mt.toHandle(c)}function P$(u){return u>>>=0,mt.toHandle(Ro(u))}function E$(){return mt.toHandle({})}var D$=u=>{for(;u.length;){var c=u.pop();u.pop()(c)}};function k$(u){u>>>=0;var c=mt.toValue(u);D$(c),Hs(u)}function j$(u,c,f){u>>>=0,c>>>=0,f>>>=0,u=mt.toValue(u),c=mt.toValue(c),f=mt.toValue(f),u[c]=f}function L$(u,c){u=mi(u),c>>>=0;var f=new Date(1e3*u);le((H(),ie),c>>>2>>>0,f.getUTCSeconds()),le((H(),ie),c+4>>>2>>>0,f.getUTCMinutes()),le((H(),ie),c+8>>>2>>>0,f.getUTCHours()),le((H(),ie),c+12>>>2>>>0,f.getUTCDate()),le((H(),ie),c+16>>>2>>>0,f.getUTCMonth()),le((H(),ie),c+20>>>2>>>0,f.getUTCFullYear()-1900),le((H(),ie),c+24>>>2>>>0,f.getUTCDay());var p=Date.UTC(f.getUTCFullYear(),0,1,0,0,0,0),m=(f.getTime()-p)/864e5|0;le((H(),ie),c+28>>>2>>>0,m)}var N$=[0,31,60,91,121,152,182,213,244,274,305,335],R$=[0,31,59,90,120,151,181,212,243,273,304,334],pf=u=>{var c;return((c=u.getFullYear())%4!=0||c%100==0&&c%400!=0?R$:N$)[u.getMonth()]+u.getDate()-1};function M$(u,c){u=mi(u),c>>>=0;var f=new Date(1e3*u);le((H(),ie),c>>>2>>>0,f.getSeconds()),le((H(),ie),c+4>>>2>>>0,f.getMinutes()),le((H(),ie),c+8>>>2>>>0,f.getHours()),le((H(),ie),c+12>>>2>>>0,f.getDate()),le((H(),ie),c+16>>>2>>>0,f.getMonth()),le((H(),ie),c+20>>>2>>>0,f.getFullYear()-1900),le((H(),ie),c+24>>>2>>>0,f.getDay());var p=0|pf(f);le((H(),ie),c+28>>>2>>>0,p),le((H(),ie),c+36>>>2>>>0,-60*f.getTimezoneOffset());var m=new Date(f.getFullYear(),0,1),y=new Date(f.getFullYear(),6,1).getTimezoneOffset(),_=m.getTimezoneOffset(),v=0|(y!=_&&f.getTimezoneOffset()==Math.min(_,y));le((H(),ie),c+32>>>2>>>0,v)}var z$=function(u){u>>>=0;var c=(()=>{var f=new Date(te((H(),ie),u+20>>>2>>>0)+1900,te((H(),ie),u+16>>>2>>>0),te((H(),ie),u+12>>>2>>>0),te((H(),ie),u+8>>>2>>>0),te((H(),ie),u+4>>>2>>>0),te((H(),ie),u>>>2>>>0),0),p=te((H(),ie),u+32>>>2>>>0),m=f.getTimezoneOffset(),y=new Date(f.getFullYear(),0,1),_=new Date(f.getFullYear(),6,1).getTimezoneOffset(),v=y.getTimezoneOffset(),x=Math.min(v,_);if(p<0)le((H(),ie),u+32>>>2>>>0,+(_!=v&&x==m));else if(p>0!=(x==m)){var C=Math.max(v,_),D=p>0?x:C;f.setTime(f.getTime()+6e4*(D-m))}le((H(),ie),u+24>>>2>>>0,f.getDay());var B=0|pf(f);le((H(),ie),u+28>>>2>>>0,B),le((H(),ie),u>>>2>>>0,f.getSeconds()),le((H(),ie),u+4>>>2>>>0,f.getMinutes()),le((H(),ie),u+8>>>2>>>0,f.getHours()),le((H(),ie),u+12>>>2>>>0,f.getDate()),le((H(),ie),u+16>>>2>>>0,f.getMonth()),le((H(),ie),u+20>>>2>>>0,f.getYear());var G=f.getTime();return isNaN(G)?-1:G/1e3})();return BigInt(c)};function hf(u,c,f,p,m,y,_){return a?dt(16,0,1,u,c,f,p,m,y,_):(u>>>=0,m=mi(m),y>>>=0,_>>>=0,-52)}function mf(u,c,f,p,m,y){if(a)return dt(17,0,1,u,c,f,p,m,y);u>>>=0,c>>>=0,y=mi(y)}var B$=function(u,c,f,p){u>>>=0,c>>>=0,f>>>=0,p>>>=0;var m=new Date().getFullYear(),y=new Date(m,0,1),_=new Date(m,6,1),v=y.getTimezoneOffset(),x=_.getTimezoneOffset(),C=Math.max(v,x);le((H(),Be),u>>>2>>>0,60*C),le((H(),ie),c>>>2>>>0,+(v!=x));var D=K=>{var J=K>=0?"-":"+",Q=Math.abs(K);return`UTC${J}${String(Math.floor(Q/60)).padStart(2,"0")}${String(Q%60).padStart(2,"0")}`},B=D(v),G=D(x);F(B),F(G),F(yi(B)<=16,`timezone name truncated to fit in TZNAME_MAX (${B})`),F(yi(G)<=16,`timezone name truncated to fit in TZNAME_MAX (${G})`),x<v?(Sr(B,f,17),Sr(G,p,17)):(Sr(B,p,17),Sr(G,f,17))},gf=()=>performance.timeOrigin+performance.now(),yf=()=>Date.now(),F$=1,V$=u=>u>=0&&u<=3;function U$(u,c,f){if(c=mi(c),f>>>=0,!V$(u))return 28;var p;if(u===0)p=yf();else{if(!F$)return 52;p=gf()}var m=Math.round(1e3*p*1e3);return le((H(),ln),f>>>3>>>0,BigInt(m)),0}var Mo=[],bf=(u,c,f)=>{var p=((m,y)=>{var _;for(F(Array.isArray(Mo)),F(y%16==0),Mo.length=0;_=te((H(),Ot),m++>>>0);){var v=String.fromCharCode(_),x=["d","f","i","p"];x.push("j"),F(x.includes(v),`Invalid character ${_}("${v}") in readEmAsmArgs! Use only [${x}], and do not specify "v" for void return argument.`);var C=_!=105;y+=(C&=_!=112)&&y%8?4:0,Mo.push(_==112?te((H(),Be),y>>>2>>>0):_==106?te((H(),ln),y>>>3>>>0):_==105?te((H(),ie),y>>>2>>>0):te((H(),Vr),y>>>3>>>0)),y+=C?8:4}return Mo})(c,f);return F(Qs.hasOwnProperty(u),`No EM_ASM constant found at address ${u}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),Qs[u](...p)};function G$(u,c,f){return bf(u>>>=0,c>>>=0,f>>>=0)}function W$(u,c,f){return bf(u>>>=0,c>>>=0,f>>>=0)}var H$=()=>{i||Tn("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread")};function q$(u,c){return k(at(u>>>=0,c>>>=0))}var K$=()=>{throw lf(),"unwind"},_f=()=>4294901760;function X$(){return _f()}var Z$=()=>navigator.hardwareConcurrency,Gr={},J$=u=>{var c=yi(u)+1,f=qi(c);return f&&Sr(u,f,c),f};function zo(u){var c;if(!(2147483648&(u>>>=0)))return Ue("Cannot use emscripten_pc_get_function on native functions without -sUSE_OFFSET_CONVERTER"),0;var f,p=Gr[u];if(!p)return 0;if(f=/^\s+at (.*) \(.*\)$/.exec(p))c=f[1];else{if(!(f=/^(.+?)@/.exec(p)))return 0;c=f[1]}return Jt(zo.ret??0),zo.ret=J$(c),zo.ret}var Y$=(u,c)=>(F(c,"alignment argument is required"),Math.ceil(u/c)*c),Q$=u=>{var c=Xe.buffer.byteLength,f=(u-c+65535)/65536|0;try{return Xe.grow(f),Co(),1}catch(p){k(`growMemory: Attempted to grow heap from ${c} bytes to ${u} bytes, but got error: ${p}`)}};function eA(u){u>>>=0;var c=(H(),Ot).length;if(u<=c)return!1;var f=_f();if(u>f)return k(`Cannot enlarge memory, requested ${u} bytes, but the limit is ${f} bytes!`),!1;for(var p=1;p<=4;p*=2){var m=c*(1+.2/p);m=Math.min(m,u+100663296);var y=Math.min(f,Y$(Math.max(u,m),65536));if(Q$(y))return!0}return k(`Failed to grow the heap from ${c} bytes to ${y} bytes, not enough memory!`),!1}var Bo=u=>{var c;if(c=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(u))return+c[1];if(c=/\bwasm-function\[(\d+)\]:(\d+)/.exec(u))Ue("Legacy backtrace format detected but -sUSE_OFFSET_CONVERTER not present.");else if(c=/:(\d+):\d+(?:\)|$)/.exec(u))return 2147483648|+c[1];return 0},vf=u=>{u.forEach(c=>{var f=Bo(c);f&&(Gr[f]=c)})},wf=()=>new Error().stack.toString();function tA(){var u=wf().split(`
`);return u[0]=="Error"&&u.shift(),vf(u),Gr.last_addr=Bo(u[3]),Gr.last_stack=u,Gr.last_addr}function nA(u,c,f){var p;u>>>=0,c>>>=0,Gr.last_addr==u?p=Gr.last_stack:((p=wf().split(`
`))[0]=="Error"&&p.shift(),vf(p));for(var m=3;p[m]&&Bo(p[m])!=u;)++m;for(var y=0;y<f&&p[y+m];++y)le((H(),ie),c+4*y>>>2>>>0,Bo(p[y+m]));return y}var Zs={},Gi=()=>{if(!Gi.strings){var u={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(var c in Zs)Zs[c]===void 0?delete u[c]:u[c]=Zs[c];var f=[];for(var c in u)f.push(`${c}=${u[c]}`);Gi.strings=f}return Gi.strings};function Tf(u,c){if(a)return dt(18,0,1,u,c);u>>>=0,c>>>=0;var f=0,p=0;for(var m of Gi()){var y=c+f;le((H(),Be),u+p>>>2>>>0,y),f+=Sr(m,y,1/0)+1,p+=4}return 0}function xf(u,c){if(a)return dt(19,0,1,u,c);u>>>=0,c>>>=0;var f=Gi();le((H(),Be),u>>>2>>>0,f.length);var p=0;for(var m of f)p+=yi(m)+1;return le((H(),Be),c>>>2>>>0,p),0}function If(u){if(a)return dt(20,0,1,u);Ue("fd_close called without SYSCALLS_REQUIRE_FILESYSTEM")}function Sf(u,c,f,p){if(a)return dt(21,0,1,u,c,f,p);c>>>=0,f>>>=0,p>>>=0,Ue("fd_read called without SYSCALLS_REQUIRE_FILESYSTEM")}function $f(u,c,f,p){return a?dt(22,0,1,u,c,f,p):(c=mi(c),p>>>=0,70)}var Js=[null,[],[]],Ys=(u,c)=>{var f=Js[u];F(f),c===0||c===10?((u===1?j:k)(Bd(f)),f.length=0):f.push(c)},rA=()=>{Df(0),Js[1].length&&Ys(1,10),Js[2].length&&Ys(2,10)};function Af(u,c,f,p){if(a)return dt(23,0,1,u,c,f,p);c>>>=0,f>>>=0,p>>>=0;for(var m=0,y=0;y<f;y++){var _=te((H(),Be),c>>>2>>>0),v=te((H(),Be),c+4>>>2>>>0);c+=8;for(var x=0;x<v;x++)Ys(u,te((H(),Ot),_+x>>>0));m+=v}return le((H(),Be),p>>>2>>>0,m),0}function iA(u){return u>>>0}var Cf=u=>(c=>{var f=M(),p=Po(4),m=Po(4);Uf(c,p,m);var y,_=te((H(),Be),p>>>2>>>0),v=te((H(),Be),m>>>2>>>0),x=at(_);return Jt(_),v&&(y=at(v),Jt(v)),R(f),[x,y]})(u);Fe.init(),F(In.length===10),a||(F(!0,"INITIAL_MEMORY should be larger than STACK_SIZE, was 16777216! (STACK_SIZE=5242880)"),Xe=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Co()),t.wasmBinary&&(I=t.wasmBinary),t.FS_createDataFile=cn.createDataFile,t.FS_createPreloadedFile=cn.createPreloadedFile,oe("ENVIRONMENT"),oe("GL_MAX_TEXTURE_IMAGE_UNITS"),oe("SDL_canPlayWithWebAudio"),oe("SDL_numSimultaneouslyQueuedBuffers"),oe("INITIAL_MEMORY"),oe("wasmMemory"),oe("arguments"),oe("buffer"),oe("canvas"),oe("doNotCaptureKeyboard"),oe("dynamicLibraries"),oe("elementPointerLock"),oe("extraStackTrace"),oe("forcedAspectRatio"),oe("keyboardListeningElement"),oe("freePreloadedMediaOnUse"),oe("loadSplitModule"),oe("logReadFiles"),oe("mainScriptUrlOrBlob"),oe("mem"),oe("monitorRunDependencies"),oe("noExitRuntime"),oe("noInitialRun"),oe("onAbort"),oe("onCustomMessage"),oe("onExit"),oe("onFree"),oe("onFullScreen"),oe("onMalloc"),oe("onRealloc"),oe("onRuntimeInitialized"),oe("postMainLoop"),oe("postRun"),oe("preInit"),oe("preMainLoop"),oe("preRun"),oe("preinitializedWebGLContext"),oe("preloadPlugins"),oe("print"),oe("printErr"),oe("setStatus"),oe("statusMessage"),oe("stderr"),oe("stdin"),oe("stdout"),oe("thisProgram"),oe("wasm"),oe("websocket"),oe("fetchSettings"),F(t.memoryInitializerPrefixURL===void 0,"Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),F(t.pthreadMainPrefixURL===void 0,"Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),F(t.cdInitializerPrefixURL===void 0,"Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),F(t.filePackagePrefixURL===void 0,"Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),F(t.read===void 0,"Module.read option was removed"),F(t.readAsync===void 0,"Module.readAsync option was removed (modify readAsync in JS)"),F(t.readBinary===void 0,"Module.readBinary option was removed (modify readBinary in JS)"),F(t.setWindowTitle===void 0,"Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),F(t.TOTAL_MEMORY===void 0,"Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),F(t.ENVIRONMENT===void 0,"Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),F(t.STACK_SIZE===void 0,"STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),t.stackSave=M,t.stackRestore=R,t.stackAlloc=Po,t.setValue=function(u,c,f="i8"){switch(f.endsWith("*")&&(f="*"),f){case"i1":case"i8":le((H(),ct),u>>>0,c);break;case"i16":le((H(),yr),u>>>1>>>0,c);break;case"i32":le((H(),ie),u>>>2>>>0,c);break;case"i64":le((H(),ln),u>>>3>>>0,BigInt(c));break;case"float":le((H(),Ri),u>>>2>>>0,c);break;case"double":le((H(),Vr),u>>>3>>>0,c);break;case"*":le((H(),Be),u>>>2>>>0,c);break;default:Ue(`invalid type for setValue: ${f}`)}},t.getValue=function(u,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":return te((H(),ct),u>>>0);case"i16":return te((H(),yr),u>>>1>>>0);case"i32":return te((H(),ie),u>>>2>>>0);case"i64":return te((H(),ln),u>>>3>>>0);case"float":return te((H(),Ri),u>>>2>>>0);case"double":return te((H(),Vr),u>>>3>>>0);case"*":return te((H(),Be),u>>>2>>>0);default:Ue(`invalid type for getValue: ${c}`)}},t.UTF8ToString=at,t.stringToUTF8=Sr,t.lengthBytesUTF8=yi,["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","strError","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","asmjsMangle","asyncLoad","mmapAlloc","HandleAllocator","getNativeTypeSize","getUniqueRunDependency","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","addOnPostRun","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","ccall","cwrap","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","intArrayFromString","intArrayToString","stringToAscii","stringToUTF8OnStack","writeArrayToMemory","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","registerBatteryEventCallback","setCanvasElementSizeCallingThread","setCanvasElementSizeMainThread","setCanvasElementSize","getCanvasSizeCallingThread","getCanvasSizeMainThread","getCanvasElementSize","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","initRandomFill","randomFill","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","emscripten_webgl_destroy_context_before_on_calling_thread","registerWebGlEventCallback","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","throwInternalError","whenDependentTypesAreResolved","getFunctionName","getFunctionArgsName","heap32VectorToArray","usesDestructorStack","createJsInvokerSignature","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","PureVirtualError","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","getBasestPointer","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","enumReadValueFromPointer","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","flushPendingDeletes","setDelayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","count_emval_handles"].forEach(function(u){ot(u,()=>{var c=`\`${u}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,f=u;f.startsWith("_")||(f="$"+u),c+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${f}')`,Le(u)&&(c+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Tn(c)}),Ce(u)}),["run","addRunDependency","removeRunDependency","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP16","HEAPU16","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","setStackLimits","ERRNO_CODES","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","dynCallLegacy","dynCall","handleException","keepRuntimeAlive","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","alignMemory","wasmTable","noExitRuntime","addOnPreRun","freeTableIndexes","functionsInTableMap","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","stringToUTF8Array","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToNewUTF8","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","jsStackTrace","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","flush_NO_FILESYSTEM","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","runAndAbortIfError","Asyncify","Fibers","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","PThread","terminateWorker","cleanupThread","registerTLSInit","spawnThread","exitOnMainThread","proxyToMainThread","proxiedJSCallArgs","invokeEntryPoint","checkMailbox","InternalError","BindingError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","getTypeName","requireRegisteredType","EmValType","EmValOptionalType","createNamedFunction","embindRepr","registeredInstances","registeredPointers","registerType","integerReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","finalizationRegistry","detachFinalizer_deps","deletionQueue","delayFunction","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"].forEach(Ce),t.incrementExceptionRefcount=u=>iu(u),t.decrementExceptionRefcount=u=>ru(u),t.getExceptionMessage=Cf;var oA=[Bs,Ld,Fd,Ud,Gd,Wd,Hd,qd,Kd,Xd,Zd,Jd,Yd,Qd,ef,tf,hf,mf,Tf,xf,If,Sf,$f,Af],Qs={7290880:(u,c,f,p,m)=>{if(t===void 0||!t.MountedFiles)return 1;let y=at(Number(u>>>0));y.startsWith("./")&&(y=y.substring(2));let _=t.MountedFiles.get(y);if(!_)return 2;let v=Number(c>>>0),x=Number(f>>>0),C=Number(p>>>0),D=m;if(v+x>_.byteLength)return 3;try{let B=_.subarray(v,v+x);switch(D){case 0:(H(),Ot).set(B,C>>>0);break;case 1:t.webgpuUploadExternalBuffer?t.webgpuUploadExternalBuffer(C,B):t.jsepUploadExternalBuffer(C,B);break;default:return 4}return 0}catch{return 4}},7291704:(u,c,f)=>{t.webnnUploadTensor(u,(H(),Ot).subarray(c>>>0,c+f>>>0))},7291768:()=>t.webnnReserveTensorId(),7291810:u=>{t.webnnReleaseTensorId(u)},7291847:(u,c,f,p,m,y,_,v,x)=>{t.jsepCreateKernel("Attention",u,{numHeads:c,isUnidirectional:f,maskFilterValue:p,scale:m,doRotary:y,qkvHiddenSizes:_?Array.from((H(),ie).subarray(Number(v)>>>0,Number(v)+_>>>0)):[],pastPresentShareBuffer:!!x})},7292119:u=>{t.jsepReleaseKernel(u)},7292153:(u,c)=>t.jsepRunKernel(Number(u),Number(c),t.jsepSessionState.sessionHandle,t.jsepSessionState.errors),7292281:u=>{t.jsepCreateKernel("BiasAdd",u,void 0)},7292336:u=>{t.jsepCreateKernel("BiasSplitGelu",u,void 0)},7292397:u=>{t.jsepCreateKernel("FastGelu",u,void 0)},7292453:(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q)=>{t.jsepCreateKernel("Conv",u,{format:B?"NHWC":"NCHW",auto_pad:c,dilations:f?Array.from((H(),ie).subarray(Number(f)>>>0,Number(p)>>>0)):[],group:m,kernel_shape:y?Array.from((H(),ie).subarray(Number(y)>>>0,Number(_)>>>0)):[],pads:v?Array.from((H(),ie).subarray(Number(v)>>>0,Number(x)>>>0)):[],strides:C?Array.from((H(),ie).subarray(Number(C)>>>0,Number(D)>>>0)):[],w_is_const:()=>!!te((H(),ct),Number(G)>>>0),activation:at(K),activation_params:J?Array.from((H(),Ri).subarray(Number(J)>>>0,Number(Q)>>>0)):[]})},7293037:u=>{t.jsepCreateKernel("Gelu",u,void 0)},7293089:(u,c,f,p,m,y,_,v,x)=>{t.jsepCreateKernel("GroupQueryAttention",u,{numHeads:c,kvNumHeads:f,scale:p,softcap:m,doRotary:y,rotaryInterleaved:_,smoothSoftmax:v,localWindowSize:x})},7293306:(u,c,f,p)=>{t.jsepCreateKernel("LayerNormalization",u,{axis:c,epsilon:f,simplified:!!p})},7293417:(u,c,f,p)=>{t.jsepCreateKernel("LayerNormalization",u,{axis:c,epsilon:f,simplified:!!p})},7293528:(u,c,f,p,m,y)=>{t.jsepCreateKernel("MatMulNBits",u,{k:c,n:f,accuracyLevel:p,bits:m,blockSize:y})},7293655:(u,c,f,p,m,y)=>{t.jsepCreateKernel("MultiHeadAttention",u,{numHeads:c,isUnidirectional:f,maskFilterValue:p,scale:m,doRotary:y})},7293814:(u,c)=>{t.jsepCreateKernel("QuickGelu",u,{alpha:c})},7293878:(u,c,f,p,m)=>{t.jsepCreateKernel("RotaryEmbedding",u,{interleaved:!!c,numHeads:f,rotaryEmbeddingDim:p,scale:m})},7294017:(u,c,f)=>{t.jsepCreateKernel("SkipLayerNormalization",u,{epsilon:c,simplified:!!f})},7294119:(u,c,f)=>{t.jsepCreateKernel("SkipLayerNormalization",u,{epsilon:c,simplified:!!f})},7294221:(u,c,f,p)=>{t.jsepCreateKernel("GatherBlockQuantized",u,{gatherAxis:c,quantizeAxis:f,blockSize:p})},7294342:u=>t.jsepAlloc(u),7294375:u=>t.jsepFree(u),7294407:(u,c,f)=>{t.jsepCopy(Number(u),Number(c),Number(f),!0)},7294470:(u,c,f)=>{t.jsepCopy(Number(u),Number(c),Number(f))},7294527:u=>{t.jsepCreateKernel("Abs",u,void 0)},7294578:u=>{t.jsepCreateKernel("Neg",u,void 0)},7294629:u=>{t.jsepCreateKernel("Floor",u,void 0)},7294682:u=>{t.jsepCreateKernel("Ceil",u,void 0)},7294734:u=>{t.jsepCreateKernel("Reciprocal",u,void 0)},7294792:u=>{t.jsepCreateKernel("Sqrt",u,void 0)},7294844:u=>{t.jsepCreateKernel("Exp",u,void 0)},7294895:u=>{t.jsepCreateKernel("Erf",u,void 0)},7294946:u=>{t.jsepCreateKernel("Sigmoid",u,void 0)},7295001:(u,c,f)=>{t.jsepCreateKernel("HardSigmoid",u,{alpha:c,beta:f})},7295080:u=>{t.jsepCreateKernel("Log",u,void 0)},7295131:u=>{t.jsepCreateKernel("Sin",u,void 0)},7295182:u=>{t.jsepCreateKernel("Cos",u,void 0)},7295233:u=>{t.jsepCreateKernel("Tan",u,void 0)},7295284:u=>{t.jsepCreateKernel("Asin",u,void 0)},7295336:u=>{t.jsepCreateKernel("Acos",u,void 0)},7295388:u=>{t.jsepCreateKernel("Atan",u,void 0)},7295440:u=>{t.jsepCreateKernel("Sinh",u,void 0)},7295492:u=>{t.jsepCreateKernel("Cosh",u,void 0)},7295544:u=>{t.jsepCreateKernel("Asinh",u,void 0)},7295597:u=>{t.jsepCreateKernel("Acosh",u,void 0)},7295650:u=>{t.jsepCreateKernel("Atanh",u,void 0)},7295703:u=>{t.jsepCreateKernel("Tanh",u,void 0)},7295755:u=>{t.jsepCreateKernel("Not",u,void 0)},7295806:(u,c,f)=>{t.jsepCreateKernel("Clip",u,{min:c,max:f})},7295875:u=>{t.jsepCreateKernel("Clip",u,void 0)},7295927:(u,c)=>{t.jsepCreateKernel("Elu",u,{alpha:c})},7295985:u=>{t.jsepCreateKernel("Gelu",u,void 0)},7296037:u=>{t.jsepCreateKernel("Relu",u,void 0)},7296089:(u,c)=>{t.jsepCreateKernel("LeakyRelu",u,{alpha:c})},7296153:(u,c)=>{t.jsepCreateKernel("ThresholdedRelu",u,{alpha:c})},7296223:(u,c)=>{t.jsepCreateKernel("Cast",u,{to:c})},7296281:u=>{t.jsepCreateKernel("Add",u,void 0)},7296332:u=>{t.jsepCreateKernel("Sub",u,void 0)},7296383:u=>{t.jsepCreateKernel("Mul",u,void 0)},7296434:u=>{t.jsepCreateKernel("Div",u,void 0)},7296485:u=>{t.jsepCreateKernel("Pow",u,void 0)},7296536:u=>{t.jsepCreateKernel("Equal",u,void 0)},7296589:u=>{t.jsepCreateKernel("Greater",u,void 0)},7296644:u=>{t.jsepCreateKernel("GreaterOrEqual",u,void 0)},7296706:u=>{t.jsepCreateKernel("Less",u,void 0)},7296758:u=>{t.jsepCreateKernel("LessOrEqual",u,void 0)},7296817:(u,c,f,p,m)=>{t.jsepCreateKernel("ReduceMean",u,{keepDims:!!c,noopWithEmptyAxes:!!f,axes:p?Array.from((H(),ie).subarray(Number(p)>>>0,Number(m)>>>0)):[]})},7296992:(u,c,f,p,m)=>{t.jsepCreateKernel("ReduceMax",u,{keepDims:!!c,noopWithEmptyAxes:!!f,axes:p?Array.from((H(),ie).subarray(Number(p)>>>0,Number(m)>>>0)):[]})},7297166:(u,c,f,p,m)=>{t.jsepCreateKernel("ReduceMin",u,{keepDims:!!c,noopWithEmptyAxes:!!f,axes:p?Array.from((H(),ie).subarray(Number(p)>>>0,Number(m)>>>0)):[]})},7297340:(u,c,f,p,m)=>{t.jsepCreateKernel("ReduceProd",u,{keepDims:!!c,noopWithEmptyAxes:!!f,axes:p?Array.from((H(),ie).subarray(Number(p)>>>0,Number(m)>>>0)):[]})},7297515:(u,c,f,p,m)=>{t.jsepCreateKernel("ReduceSum",u,{keepDims:!!c,noopWithEmptyAxes:!!f,axes:p?Array.from((H(),ie).subarray(Number(p)>>>0,Number(m)>>>0)):[]})},7297689:(u,c,f,p,m)=>{t.jsepCreateKernel("ReduceL1",u,{keepDims:!!c,noopWithEmptyAxes:!!f,axes:p?Array.from((H(),ie).subarray(Number(p)>>>0,Number(m)>>>0)):[]})},7297862:(u,c,f,p,m)=>{t.jsepCreateKernel("ReduceL2",u,{keepDims:!!c,noopWithEmptyAxes:!!f,axes:p?Array.from((H(),ie).subarray(Number(p)>>>0,Number(m)>>>0)):[]})},7298035:(u,c,f,p,m)=>{t.jsepCreateKernel("ReduceLogSum",u,{keepDims:!!c,noopWithEmptyAxes:!!f,axes:p?Array.from((H(),ie).subarray(Number(p)>>>0,Number(m)>>>0)):[]})},7298212:(u,c,f,p,m)=>{t.jsepCreateKernel("ReduceSumSquare",u,{keepDims:!!c,noopWithEmptyAxes:!!f,axes:p?Array.from((H(),ie).subarray(Number(p)>>>0,Number(m)>>>0)):[]})},7298392:(u,c,f,p,m)=>{t.jsepCreateKernel("ReduceLogSumExp",u,{keepDims:!!c,noopWithEmptyAxes:!!f,axes:p?Array.from((H(),ie).subarray(Number(p)>>>0,Number(m)>>>0)):[]})},7298572:u=>{t.jsepCreateKernel("Where",u,void 0)},7298625:(u,c,f)=>{t.jsepCreateKernel("Transpose",u,{perm:c?Array.from((H(),ie).subarray(Number(c)>>>0,Number(f)>>>0)):[]})},7298749:(u,c,f,p)=>{t.jsepCreateKernel("DepthToSpace",u,{blocksize:c,mode:at(f),format:p?"NHWC":"NCHW"})},7298882:(u,c,f,p)=>{t.jsepCreateKernel("DepthToSpace",u,{blocksize:c,mode:at(f),format:p?"NHWC":"NCHW"})},7299015:(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J)=>{t.jsepCreateKernel("ConvTranspose",u,{format:x?"NHWC":"NCHW",autoPad:c,dilations:[f],group:p,kernelShape:[m],pads:[y,_],strides:[v],wIsConst:()=>!!te((H(),ct),C>>>0),outputPadding:D?Array.from((H(),ie).subarray(Number(D)>>>0,Number(B)>>>0)):[],outputShape:G?Array.from((H(),ie).subarray(Number(G)>>>0,Number(K)>>>0)):[],activation:at(J)})},7299448:(u,c,f,p,m,y,_,v,x,C,D,B,G,K)=>{t.jsepCreateKernel("ConvTranspose",u,{format:v?"NHWC":"NCHW",autoPad:c,dilations:Array.from((H(),ie).subarray(Number(f)>>>0,2+(Number(f)>>>0)>>>0)),group:p,kernelShape:Array.from((H(),ie).subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),pads:Array.from((H(),ie).subarray(Number(y)>>>0,4+(Number(y)>>>0)>>>0)),strides:Array.from((H(),ie).subarray(Number(_)>>>0,2+(Number(_)>>>0)>>>0)),wIsConst:()=>!!te((H(),ct),x>>>0),outputPadding:C?Array.from((H(),ie).subarray(Number(C)>>>0,Number(D)>>>0)):[],outputShape:B?Array.from((H(),ie).subarray(Number(B)>>>0,Number(G)>>>0)):[],activation:at(K)})},7300109:(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J)=>{t.jsepCreateKernel("ConvTranspose",u,{format:x?"NHWC":"NCHW",autoPad:c,dilations:[f],group:p,kernelShape:[m],pads:[y,_],strides:[v],wIsConst:()=>!!te((H(),ct),C>>>0),outputPadding:D?Array.from((H(),ie).subarray(Number(D)>>>0,Number(B)>>>0)):[],outputShape:G?Array.from((H(),ie).subarray(Number(G)>>>0,Number(K)>>>0)):[],activation:at(J)})},7300542:(u,c,f,p,m,y,_,v,x,C,D,B,G,K)=>{t.jsepCreateKernel("ConvTranspose",u,{format:v?"NHWC":"NCHW",autoPad:c,dilations:Array.from((H(),ie).subarray(Number(f)>>>0,2+(Number(f)>>>0)>>>0)),group:p,kernelShape:Array.from((H(),ie).subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),pads:Array.from((H(),ie).subarray(Number(y)>>>0,4+(Number(y)>>>0)>>>0)),strides:Array.from((H(),ie).subarray(Number(_)>>>0,2+(Number(_)>>>0)>>>0)),wIsConst:()=>!!te((H(),ct),x>>>0),outputPadding:C?Array.from((H(),ie).subarray(Number(C)>>>0,Number(D)>>>0)):[],outputShape:B?Array.from((H(),ie).subarray(Number(B)>>>0,Number(G)>>>0)):[],activation:at(K)})},7301203:(u,c)=>{t.jsepCreateKernel("GlobalAveragePool",u,{format:c?"NHWC":"NCHW"})},7301294:(u,c,f,p,m,y,_,v,x,C,D,B,G,K)=>{t.jsepCreateKernel("AveragePool",u,{format:K?"NHWC":"NCHW",auto_pad:c,ceil_mode:f,count_include_pad:p,storage_order:m,dilations:y?Array.from((H(),ie).subarray(Number(y)>>>0,Number(_)>>>0)):[],kernel_shape:v?Array.from((H(),ie).subarray(Number(v)>>>0,Number(x)>>>0)):[],pads:C?Array.from((H(),ie).subarray(Number(C)>>>0,Number(D)>>>0)):[],strides:B?Array.from((H(),ie).subarray(Number(B)>>>0,Number(G)>>>0)):[]})},7301773:(u,c)=>{t.jsepCreateKernel("GlobalAveragePool",u,{format:c?"NHWC":"NCHW"})},7301864:(u,c,f,p,m,y,_,v,x,C,D,B,G,K)=>{t.jsepCreateKernel("AveragePool",u,{format:K?"NHWC":"NCHW",auto_pad:c,ceil_mode:f,count_include_pad:p,storage_order:m,dilations:y?Array.from((H(),ie).subarray(Number(y)>>>0,Number(_)>>>0)):[],kernel_shape:v?Array.from((H(),ie).subarray(Number(v)>>>0,Number(x)>>>0)):[],pads:C?Array.from((H(),ie).subarray(Number(C)>>>0,Number(D)>>>0)):[],strides:B?Array.from((H(),ie).subarray(Number(B)>>>0,Number(G)>>>0)):[]})},7302343:(u,c)=>{t.jsepCreateKernel("GlobalMaxPool",u,{format:c?"NHWC":"NCHW"})},7302430:(u,c,f,p,m,y,_,v,x,C,D,B,G,K)=>{t.jsepCreateKernel("MaxPool",u,{format:K?"NHWC":"NCHW",auto_pad:c,ceil_mode:f,count_include_pad:p,storage_order:m,dilations:y?Array.from((H(),ie).subarray(Number(y)>>>0,Number(_)>>>0)):[],kernel_shape:v?Array.from((H(),ie).subarray(Number(v)>>>0,Number(x)>>>0)):[],pads:C?Array.from((H(),ie).subarray(Number(C)>>>0,Number(D)>>>0)):[],strides:B?Array.from((H(),ie).subarray(Number(B)>>>0,Number(G)>>>0)):[]})},7302905:(u,c)=>{t.jsepCreateKernel("GlobalMaxPool",u,{format:c?"NHWC":"NCHW"})},7302992:(u,c,f,p,m,y,_,v,x,C,D,B,G,K)=>{t.jsepCreateKernel("MaxPool",u,{format:K?"NHWC":"NCHW",auto_pad:c,ceil_mode:f,count_include_pad:p,storage_order:m,dilations:y?Array.from((H(),ie).subarray(Number(y)>>>0,Number(_)>>>0)):[],kernel_shape:v?Array.from((H(),ie).subarray(Number(v)>>>0,Number(x)>>>0)):[],pads:C?Array.from((H(),ie).subarray(Number(C)>>>0,Number(D)>>>0)):[],strides:B?Array.from((H(),ie).subarray(Number(B)>>>0,Number(G)>>>0)):[]})},7303467:(u,c,f,p,m)=>{t.jsepCreateKernel("Gemm",u,{alpha:c,beta:f,transA:p,transB:m})},7303571:u=>{t.jsepCreateKernel("MatMul",u,void 0)},7303625:(u,c,f,p)=>{t.jsepCreateKernel("ArgMax",u,{keepDims:!!c,selectLastIndex:!!f,axis:p})},7303733:(u,c,f,p)=>{t.jsepCreateKernel("ArgMin",u,{keepDims:!!c,selectLastIndex:!!f,axis:p})},7303841:(u,c)=>{t.jsepCreateKernel("Softmax",u,{axis:c})},7303904:(u,c)=>{t.jsepCreateKernel("Concat",u,{axis:c})},7303964:(u,c,f,p,m)=>{t.jsepCreateKernel("Split",u,{axis:c,numOutputs:f,splitSizes:p?Array.from((H(),ie).subarray(Number(p)>>>0,Number(m)>>>0)):[]})},7304120:u=>{t.jsepCreateKernel("Expand",u,void 0)},7304174:(u,c)=>{t.jsepCreateKernel("Gather",u,{axis:Number(c)})},7304245:(u,c)=>{t.jsepCreateKernel("GatherElements",u,{axis:Number(c)})},7304324:(u,c)=>{t.jsepCreateKernel("GatherND",u,{batch_dims:Number(c)})},7304403:(u,c,f,p,m,y,_,v,x,C,D)=>{t.jsepCreateKernel("Resize",u,{antialias:c,axes:f?Array.from((H(),ie).subarray(Number(f)>>>0,Number(p)>>>0)):[],coordinateTransformMode:at(m),cubicCoeffA:y,excludeOutside:_,extrapolationValue:v,keepAspectRatioPolicy:at(x),mode:at(C),nearestMode:at(D)})},7304765:(u,c,f,p,m,y,_)=>{t.jsepCreateKernel("Slice",u,{starts:c?Array.from((H(),ie).subarray(Number(c)>>>0,Number(f)>>>0)):[],ends:p?Array.from((H(),ie).subarray(Number(p)>>>0,Number(m)>>>0)):[],axes:y?Array.from((H(),ie).subarray(Number(y)>>>0,Number(_)>>>0)):[]})},7305029:u=>{t.jsepCreateKernel("Tile",u,void 0)},7305081:(u,c,f)=>{t.jsepCreateKernel("InstanceNormalization",u,{epsilon:c,format:f?"NHWC":"NCHW"})},7305195:(u,c,f)=>{t.jsepCreateKernel("InstanceNormalization",u,{epsilon:c,format:f?"NHWC":"NCHW"})},7305309:u=>{t.jsepCreateKernel("Range",u,void 0)},7305362:(u,c)=>{t.jsepCreateKernel("Einsum",u,{equation:at(c)})},7305443:(u,c,f,p,m)=>{t.jsepCreateKernel("Pad",u,{mode:c,value:f,pads:p?Array.from((H(),ie).subarray(Number(p)>>>0,Number(m)>>>0)):[]})},7305586:(u,c,f,p,m,y)=>{t.jsepCreateKernel("BatchNormalization",u,{epsilon:c,momentum:f,spatial:!!m,trainingMode:!!p,format:y?"NHWC":"NCHW"})},7305755:(u,c,f,p,m,y)=>{t.jsepCreateKernel("BatchNormalization",u,{epsilon:c,momentum:f,spatial:!!m,trainingMode:!!p,format:y?"NHWC":"NCHW"})},7305924:(u,c,f)=>{t.jsepCreateKernel("CumSum",u,{exclusive:Number(c),reverse:Number(f)})},7306021:(u,c,f)=>{t.jsepCreateKernel("DequantizeLinear",u,{axis:c,blockSize:f})},7306111:(u,c,f,p,m)=>{t.jsepCreateKernel("GridSample",u,{align_corners:c,mode:at(f),padding_mode:at(p),format:m?"NHWC":"NCHW"})},7306281:(u,c,f,p,m)=>{t.jsepCreateKernel("GridSample",u,{align_corners:c,mode:at(f),padding_mode:at(p),format:m?"NHWC":"NCHW"})},7306451:(u,c)=>{t.jsepCreateKernel("ScatterND",u,{reduction:at(c)})},7306536:()=>{t.jsepCaptureBegin()},7306567:()=>{t.jsepCaptureEnd()},7306596:()=>{t.jsepReplay()},7306621:()=>typeof wasmOffsetConverter<"u"};function aA(u,c,f){return me.handleAsync(async()=>{await t.jsepCopyAsync(Number(u),Number(c),Number(f))})}function sA(){return typeof wasmOffsetConverter<"u"}var Wi,Of,Pf=$("___getTypeName"),Ef=$("__embind_initialize_bindings"),Hi=(t._OrtInit=$("_OrtInit"),t._OrtGetLastError=$("_OrtGetLastError"),t._OrtCreateSessionOptions=$("_OrtCreateSessionOptions"),t._OrtAppendExecutionProvider=$("_OrtAppendExecutionProvider"),t._OrtAddFreeDimensionOverride=$("_OrtAddFreeDimensionOverride"),t._OrtAddSessionConfigEntry=$("_OrtAddSessionConfigEntry"),t._OrtReleaseSessionOptions=$("_OrtReleaseSessionOptions"),t._OrtCreateSession=$("_OrtCreateSession"),t._OrtReleaseSession=$("_OrtReleaseSession"),t._OrtGetInputOutputCount=$("_OrtGetInputOutputCount"),t._OrtGetInputOutputMetadata=$("_OrtGetInputOutputMetadata"),t._OrtFree=$("_OrtFree"),t._OrtCreateTensor=$("_OrtCreateTensor"),t._OrtGetTensorData=$("_OrtGetTensorData"),t._OrtReleaseTensor=$("_OrtReleaseTensor"),t._OrtCreateRunOptions=$("_OrtCreateRunOptions"),t._OrtAddRunConfigEntry=$("_OrtAddRunConfigEntry"),t._OrtReleaseRunOptions=$("_OrtReleaseRunOptions"),t._OrtCreateBinding=$("_OrtCreateBinding"),t._OrtBindInput=$("_OrtBindInput"),t._OrtBindOutput=$("_OrtBindOutput"),t._OrtClearBoundOutputs=$("_OrtClearBoundOutputs"),t._OrtReleaseBinding=$("_OrtReleaseBinding"),t._OrtRunWithBinding=$("_OrtRunWithBinding"),t._OrtRun=$("_OrtRun"),t._OrtEndProfiling=$("_OrtEndProfiling"),$("___cxa_free_exception"),t._JsepOutput=$("_JsepOutput"),t._JsepGetNodeName=$("_JsepGetNodeName"),$("_pthread_self")),Jt=t._free=$("_free"),Df=$("_fflush"),qi=t._malloc=$("_malloc"),eu=($("__emscripten_tls_init"),$("__emscripten_thread_init")),kf=$("__emscripten_thread_crashed"),Ki=$("_emscripten_stack_get_end"),Xi=$("_emscripten_stack_get_base"),jf=$("__emscripten_run_js_on_main_thread"),Lf=$("__emscripten_thread_free_data"),tu=$("__emscripten_thread_exit"),Nf=$("__emscripten_check_mailbox"),Rf=$("_sbrk"),z=($("_emscripten_get_sbrk_ptr"),$("_setThrew")),Mf=$("__emscripten_tempret_set"),zf=$("_emscripten_stack_init"),Bf=$("_emscripten_stack_set_limits"),Ff=($("_emscripten_stack_get_free"),$("__emscripten_stack_restore")),Vf=$("__emscripten_stack_alloc"),nu=$("_emscripten_stack_get_current"),ru=$("___cxa_decrement_exception_refcount"),iu=$("___cxa_increment_exception_refcount"),Uf=$("___get_exception_message"),Gf=$("___cxa_can_catch"),Wf=$("___cxa_get_exception_ptr"),Hf=t.___set_stack_limits=$("___set_stack_limits"),qf=$("dynCall_vi"),Kf=$("dynCall_iii"),ou=$("dynCall_ii"),Xf=$("dynCall_vii"),Zf=$("dynCall_iiii"),Jf=$("dynCall_iiiiiii"),Yf=$("dynCall_v"),Qf=$("dynCall_viii"),ep=$("dynCall_iiiiii"),tp=$("dynCall_iiiii"),np=$("dynCall_viiii"),rp=$("dynCall_ji"),ip=$("dynCall_viijiiiiiiiiiiiiii"),op=$("dynCall_viiiiii"),ap=$("dynCall_viiiji"),sp=$("dynCall_viiiii"),up=$("dynCall_djj"),lp=$("dynCall_jii"),cp=$("dynCall_jiji"),dp=$("dynCall_iiiiiij"),fp=$("dynCall_i"),pp=$("dynCall_iij"),hp=$("dynCall_vij"),mp=$("dynCall_viiijii"),gp=$("dynCall_viiiiiii"),yp=$("dynCall_jj"),bp=$("dynCall_viiiiiiii"),_p=$("dynCall_vif"),vp=$("dynCall_iiiiiiiij"),wp=$("dynCall_iiiiiiii"),Tp=$("dynCall_iiji"),xp=$("dynCall_viiiijii"),Ip=$("dynCall_ij"),Sp=$("dynCall_iji"),$p=$("dynCall_viiijiii"),Ap=$("dynCall_vijii"),Cp=$("dynCall_viijj"),Op=$("dynCall_fii"),Pp=$("dynCall_viiiiiiiiii"),Ep=$("dynCall_fi"),Dp=$("dynCall_jiii"),kp=$("dynCall_vid"),jp=$("dynCall_dii"),Lp=$("dynCall_viiiiiiiii"),Np=$("dynCall_viiiiiiiiiii"),Rp=$("dynCall_iiiiiiiiii"),Mp=$("dynCall_iiiiiiiiiii"),zp=$("dynCall_iiiiijiii"),Bp=$("dynCall_iiiiiiiii"),Fp=$("dynCall_viij"),Vp=$("dynCall_viif"),Up=$("dynCall_iiiiijiiiii"),Gp=$("dynCall_iiiijjiii"),Wp=$("dynCall_jjj"),Hp=$("dynCall_viiji"),qp=$("dynCall_vijiii"),Kp=$("dynCall_iiiiiijji"),Xp=$("dynCall_iidi"),Zp=$("dynCall_viiiiiiiiiiii"),Jp=$("dynCall_iiiiiiiiiiiiii"),Yp=$("dynCall_viiiiiiiiiiiiii"),Qp=$("dynCall_viiiiiiiiiiiiiiii"),eh=$("dynCall_jiiii"),th=$("dynCall_viiiiiiiiiiiiiiiiiii"),nh=$("dynCall_jiij"),rh=$("dynCall_iiiij"),ih=$("dynCall_iiif"),oh=$("dynCall_iiij"),ah=$("dynCall_if"),sh=$("dynCall_vidi"),uh=$("dynCall_fiff"),lh=$("dynCall_fiii"),ch=$("dynCall_viiiiiiiiiiiii"),dh=$("dynCall_vjiij"),fh=$("dynCall_viiiiij"),ph=$("dynCall_jij"),hh=$("dynCall_viiij"),mh=$("dynCall_ijiiii"),gh=$("dynCall_vijiji"),yh=$("dynCall_vjiiiii"),bh=$("dynCall_vjiiiiii"),_h=$("dynCall_vijiiiiii"),vh=$("dynCall_vjiiiiiii"),wh=$("dynCall_iiiiiji"),Th=$("dynCall_viijjj"),xh=$("dynCall_viifiifijjjii"),Ih=$("dynCall_vifiifiiii"),Sh=$("dynCall_vifiifiiiiiii"),$h=$("dynCall_vjifiii"),Ah=$("dynCall_viidi"),Ch=$("dynCall_iffi"),Oh=$("dynCall_viiiiiifii"),Ph=$("dynCall_iiiiidfffiii"),Eh=$("dynCall_viiiiiiiiiiiiiiiiiiiiiii"),Dh=$("dynCall_viiiiiiiif"),kh=$("dynCall_viiiiiiiiiiiiiiiifiiii"),jh=$("dynCall_viiiiiiiiiiiiiiiiii"),Lh=$("dynCall_viiifii"),Nh=$("dynCall_viiiiifiiiiii"),Rh=$("dynCall_viiff"),Mh=$("dynCall_viiiiiff"),zh=$("dynCall_viiiiff"),Bh=($("dynCall_ffff"),$("dynCall_viiiff")),Fh=$("dynCall_viiiiiiff"),Vh=($("dynCall_fiiii"),$("dynCall_vfiii")),Uh=$("dynCall_viiiiif"),Gh=$("dynCall_iiiiiiiiiiiiiiiiifii"),Wh=$("dynCall_iijjjj"),Hh=$("dynCall_viijjiiiiiiiii"),qh=$("dynCall_vijjjiiji"),Kh=$("dynCall_viijiiiiiiijjii"),Xh=$("dynCall_iif"),Zh=$("dynCall_viiiiidiidii"),Jh=$("dynCall_viiifiifii"),Yh=$("dynCall_vijjjjiii"),Qh=$("dynCall_j"),em=$("dynCall_iidd"),tm=$("dynCall_iijj"),nm=$("dynCall_viid"),rm=$("dynCall_viffiii"),im=$("dynCall_viiijjjii"),om=$("dynCall_viiiiijjj"),am=$("dynCall_iiiiiiiiiiiiiiiiii"),sm=$("dynCall_viiiiiif"),um=$("dynCall_iiiiiiiiiiiiiiiiiiii"),lm=$("dynCall_iiiiiiiiiiiiiiiiiiiiiii"),cm=$("dynCall_viiiiiiiiiiiiiii"),dm=$("dynCall_iiiiiiiiiiiiiiiiiiiiiiii"),fm=$("dynCall_viiiiiiiiiiiiiiiiiiii"),pm=$("dynCall_viiiiiiiiiiiiiifi"),hm=$("dynCall_viiiijiiiiiiif"),mm=$("dynCall_viiiiifiifii"),gm=$("dynCall_viiiiifiifiiii"),ym=$("dynCall_viifiii"),bm=$("dynCall_viiiifiiifiii"),_m=$("dynCall_viiiiidiidiiii"),vm=$("dynCall_viiiiiiiiiiiiiiiii"),wm=$("dynCall_viiiiiiiiiiiiiiiiiiiiii"),Tm=$("dynCall_di"),xm=$("dynCall_viiiiifiiiifiii"),Im=$("dynCall_iiff"),Sm=$("dynCall_viiifiiiiiifiiii"),$m=$("dynCall_iiiiiiiiiiiiiiiiiifi"),Am=$("dynCall_viiiiiiiijjj"),Cm=$("dynCall_viiiiiijjjjjii"),Om=$("dynCall_vijj"),Pm=$("dynCall_viji"),Em=$("dynCall_vifi"),Dm=$("dynCall_vijjjjjjjjjjjjjii"),km=$("dynCall_viiijjiiiiiii"),jm=$("dynCall_viijiiiijiii"),Lm=$("dynCall_viifjjjijiiiii"),Nm=$("dynCall_vjjjjjjffffjji"),Rm=$("dynCall_vjjjjjjddddjji"),Mm=$("dynCall_viifjjijiiii"),zm=$("dynCall_viiiiiiifiiii"),Bm=$("dynCall_viiiiiid"),Fm=$("dynCall_viiiiiiidiiii"),Vm=$("dynCall_viiiiiiiiiiiijfii"),Um=$("dynCall_viiiiiji"),Gm=$("dynCall_viiijjjjji"),Wm=$("dynCall_vifii"),Hm=$("dynCall_vifiii"),qm=$("dynCall_iiijiiiii"),Km=$("dynCall_vj"),Xm=$("dynCall_viiiij"),Zm=$("dynCall_iiiiiiiiiiiiifii"),Jm=$("dynCall_viiijjjfffi"),Ym=$("dynCall_viiijiijjj"),Qm=$("dynCall_viijjjj"),eg=$("dynCall_viiiiiiiiifiii"),tg=$("dynCall_vjjjjjjffiifiiiiii"),ng=$("dynCall_viiiiiiffiifiiiii"),rg=$("dynCall_viiiiiiffifiiiii"),ig=$("dynCall_vjjjjjjjjfffiifiiiiii"),og=$("dynCall_vjjjjjjjjfffiifiiiii"),ag=$("dynCall_vjjjjjjfffifiiiiiii"),sg=$("dynCall_vjjjjjjfffifiiiii"),ug=$("dynCall_fffffff"),lg=$("dynCall_jfi"),cg=$("dynCall_vijjjjjjifiiii"),dg=$("dynCall_vjjjjjiiiii"),fg=$("dynCall_vjjjjfiii"),pg=$("dynCall_fijjjjifi"),hg=$("dynCall_vijjfffiii"),mg=$("dynCall_vijiiiiiiii"),gg=($("dynCall_fif"),$("dynCall_iiiiiiiiiiii")),yg=$("dynCall_viiijj"),bg=$("dynCall_viiiiijiiiiii"),_g=$("dynCall_viiiiijjiiiii"),vg=$("dynCall_viiiiji"),wg=$("dynCall_viijjiii"),Tg=$("dynCall_iiiiji"),xg=$("dynCall_viijjjjjjjjjjjjjii"),Ig=$("dynCall_viiiijiiiiiiii"),Sg=$("dynCall_iijjjf"),$g=$("dynCall_viiiijjji"),Ag=($("dynCall_jjjjjj"),$("dynCall_jjjjjjj"),$("dynCall_viiijiiiiiiiii")),Cg=$("dynCall_iiiijjj"),Og=$("dynCall_viijiiii"),Pg=$("dynCall_iiijjii"),Eg=$("dynCall_iijjii"),Dg=$("dynCall_viiiiiijjiiiii"),kg=$("dynCall_viiiiiiiijiiiiii"),jg=$("dynCall_vjjii"),Lg=$("dynCall_vjjjii"),Ng=$("dynCall_viiiiiiiifiiiifiiiii"),Rg=$("dynCall_iiiiiiiiiiiii"),Mg=$("dynCall_viiiiiifi"),zg=$("dynCall_viiif"),Bg=$("dynCall_diii"),Fg=$("dynCall_vijjjiii"),Vg=$("dynCall_viiiiiiiiijii"),Ug=$("dynCall_viiiiiiiiji"),Gg=$("dynCall_vijfjiiiii"),Wg=$("dynCall_fj"),Hg=$("dynCall_iiiijiiiijj"),qg=$("dynCall_iiiiiiiiiiijiiii"),Kg=$("dynCall_iiiijiiiiiiiiii"),Xg=$("dynCall_jiiij"),Zg=$("dynCall_jiijj"),Jg=$("dynCall_iiiji"),Yg=$("dynCall_iiifi"),Qg=$("dynCall_iiijii"),ey=$("dynCall_iiiiiiiiiji"),ty=$("dynCall_iiiiijji"),ny=$("dynCall_iiiijjii"),ry=$("dynCall_iiiijii"),iy=$("dynCall_iiijiii"),oy=$("dynCall_iiiiiiiiijii"),ay=$("dynCall_iiiiiijjjii"),sy=$("dynCall_iiiiiiiijjjfi"),uy=$("dynCall_iijiiii"),ly=$("dynCall_viiiijjj"),cy=$("dynCall_viiiijj"),dy=$("dynCall_iijjjii"),fy=$("dynCall_iiiijjjiii"),py=$("dynCall_iiiiiiiiiiiiiii"),hy=$("dynCall_iijjiii"),my=$("dynCall_viijjjjiiiiiiiii"),gy=$("dynCall_viiiijjjj"),yy=$("dynCall_fiif"),by=$("dynCall_viijjiiiiii"),_y=$("dynCall_viijjiiiiiiii"),vy=$("dynCall_ijii"),wy=$("dynCall_viiiiiij"),Ty=$("dynCall_viiiiiiijiiii"),xy=$("dynCall_vijji"),Iy=($("dynCall_viijii"),$("dynCall_iidiiii"),$("dynCall_iiiiij")),Sy=$("dynCall_iiiiid"),$y=($("dynCall_iiiiijj"),$("dynCall_iiiiiijj"),$("_asyncify_start_unwind")),Ay=$("_asyncify_stop_unwind"),Cy=$("_asyncify_start_rewind"),Oy=$("_asyncify_stop_rewind"),Sn=await async function(){function u(y,_){return Sn=y.exports,Sn=function(x){var C,D=G=>K=>G(K)>>>0,B=G=>()=>G()>>>0;return(x=Object.assign({},x)).__getTypeName=D(x.__getTypeName),x.pthread_self=B(x.pthread_self),x.malloc=D(x.malloc),x.emscripten_stack_get_end=B(x.emscripten_stack_get_end),x.emscripten_stack_get_base=B(x.emscripten_stack_get_base),x.sbrk=(C=x.sbrk,G=>C(G)>>>0),x._emscripten_stack_alloc=D(x._emscripten_stack_alloc),x.emscripten_stack_get_current=B(x.emscripten_stack_get_current),x.__cxa_get_exception_ptr=D(x.__cxa_get_exception_ptr),x}(Sn=me.instrumentWasmExports(Sn)),v=Sn._emscripten_tls_init,Fe.tlsInitFunctions.push(v),F(Sn.__indirect_function_table,"table not found in wasm exports"),O=_,function(x){Pf=E("__getTypeName",1),Ef=E("_embind_initialize_bindings",0),t._OrtInit=E("OrtInit",2),t._OrtGetLastError=E("OrtGetLastError",2),t._OrtCreateSessionOptions=E("OrtCreateSessionOptions",10),t._OrtAppendExecutionProvider=E("OrtAppendExecutionProvider",5),t._OrtAddFreeDimensionOverride=E("OrtAddFreeDimensionOverride",3),t._OrtAddSessionConfigEntry=E("OrtAddSessionConfigEntry",3),t._OrtReleaseSessionOptions=E("OrtReleaseSessionOptions",1),t._OrtCreateSession=E("OrtCreateSession",3),t._OrtReleaseSession=E("OrtReleaseSession",1),t._OrtGetInputOutputCount=E("OrtGetInputOutputCount",3),t._OrtGetInputOutputMetadata=E("OrtGetInputOutputMetadata",4),t._OrtFree=E("OrtFree",1),t._OrtCreateTensor=E("OrtCreateTensor",6),t._OrtGetTensorData=E("OrtGetTensorData",5),t._OrtReleaseTensor=E("OrtReleaseTensor",1),t._OrtCreateRunOptions=E("OrtCreateRunOptions",4),t._OrtAddRunConfigEntry=E("OrtAddRunConfigEntry",3),t._OrtReleaseRunOptions=E("OrtReleaseRunOptions",1),t._OrtCreateBinding=E("OrtCreateBinding",1),t._OrtBindInput=E("OrtBindInput",3),t._OrtBindOutput=E("OrtBindOutput",4),t._OrtClearBoundOutputs=E("OrtClearBoundOutputs",1),t._OrtReleaseBinding=E("OrtReleaseBinding",1),t._OrtRunWithBinding=E("OrtRunWithBinding",5),t._OrtRun=E("OrtRun",8),t._OrtEndProfiling=E("OrtEndProfiling",1),E("__cxa_free_exception",1),t._JsepOutput=E("JsepOutput",3),t._JsepGetNodeName=E("JsepGetNodeName",1),Hi=x.pthread_self,t._free=Jt=E("free",1),Df=E("fflush",1),t._malloc=qi=E("malloc",1),E("_emscripten_tls_init",0),eu=E("_emscripten_thread_init",6),kf=E("_emscripten_thread_crashed",0),Ki=x.emscripten_stack_get_end,Xi=x.emscripten_stack_get_base,jf=E("_emscripten_run_js_on_main_thread",5),Lf=E("_emscripten_thread_free_data",1),tu=E("_emscripten_thread_exit",1),Nf=E("_emscripten_check_mailbox",0),Rf=E("sbrk",1),E("emscripten_get_sbrk_ptr",0),z=E("setThrew",2),Mf=E("_emscripten_tempret_set",1),zf=x.emscripten_stack_init,Bf=x.emscripten_stack_set_limits,x.emscripten_stack_get_free,Ff=x._emscripten_stack_restore,Vf=x._emscripten_stack_alloc,nu=x.emscripten_stack_get_current,ru=E("__cxa_decrement_exception_refcount",1),iu=E("__cxa_increment_exception_refcount",1),Uf=E("__get_exception_message",3),Gf=E("__cxa_can_catch",3),Wf=E("__cxa_get_exception_ptr",1),t.___set_stack_limits=Hf=E("__set_stack_limits",2),N.vi=qf=E("dynCall_vi",2),N.iii=Kf=E("dynCall_iii",3),N.ii=ou=E("dynCall_ii",2),N.vii=Xf=E("dynCall_vii",3),N.iiii=Zf=E("dynCall_iiii",4),N.iiiiiii=Jf=E("dynCall_iiiiiii",7),N.v=Yf=E("dynCall_v",1),N.viii=Qf=E("dynCall_viii",4),N.iiiiii=ep=E("dynCall_iiiiii",6),N.iiiii=tp=E("dynCall_iiiii",5),N.viiii=np=E("dynCall_viiii",5),N.ji=rp=E("dynCall_ji",2),N.viijiiiiiiiiiiiiii=ip=E("dynCall_viijiiiiiiiiiiiiii",18),N.viiiiii=op=E("dynCall_viiiiii",7),N.viiiji=ap=E("dynCall_viiiji",6),N.viiiii=sp=E("dynCall_viiiii",6),N.djj=up=E("dynCall_djj",3),N.jii=lp=E("dynCall_jii",3),N.jiji=cp=E("dynCall_jiji",4),N.iiiiiij=dp=E("dynCall_iiiiiij",7),N.i=fp=E("dynCall_i",1),N.iij=pp=E("dynCall_iij",3),N.vij=hp=E("dynCall_vij",3),N.viiijii=mp=E("dynCall_viiijii",7),N.viiiiiii=gp=E("dynCall_viiiiiii",8),N.jj=yp=E("dynCall_jj",2),N.viiiiiiii=bp=E("dynCall_viiiiiiii",9),N.vif=_p=E("dynCall_vif",3),N.iiiiiiiij=vp=E("dynCall_iiiiiiiij",9),N.iiiiiiii=wp=E("dynCall_iiiiiiii",8),N.iiji=Tp=E("dynCall_iiji",4),N.viiiijii=xp=E("dynCall_viiiijii",8),N.ij=Ip=E("dynCall_ij",2),N.iji=Sp=E("dynCall_iji",3),N.viiijiii=$p=E("dynCall_viiijiii",8),N.vijii=Ap=E("dynCall_vijii",5),N.viijj=Cp=E("dynCall_viijj",5),N.fii=Op=E("dynCall_fii",3),N.viiiiiiiiii=Pp=E("dynCall_viiiiiiiiii",11),N.fi=Ep=E("dynCall_fi",2),N.jiii=Dp=E("dynCall_jiii",4),N.vid=kp=E("dynCall_vid",3),N.dii=jp=E("dynCall_dii",3),N.viiiiiiiii=Lp=E("dynCall_viiiiiiiii",10),N.viiiiiiiiiii=Np=E("dynCall_viiiiiiiiiii",12),N.iiiiiiiiii=Rp=E("dynCall_iiiiiiiiii",10),N.iiiiiiiiiii=Mp=E("dynCall_iiiiiiiiiii",11),N.iiiiijiii=zp=E("dynCall_iiiiijiii",9),N.iiiiiiiii=Bp=E("dynCall_iiiiiiiii",9),N.viij=Fp=E("dynCall_viij",4),N.viif=Vp=E("dynCall_viif",4),N.iiiiijiiiii=Up=E("dynCall_iiiiijiiiii",11),N.iiiijjiii=Gp=E("dynCall_iiiijjiii",9),N.jjj=Wp=E("dynCall_jjj",3),N.viiji=Hp=E("dynCall_viiji",5),N.vijiii=qp=E("dynCall_vijiii",6),N.iiiiiijji=Kp=E("dynCall_iiiiiijji",9),N.iidi=Xp=E("dynCall_iidi",4),N.viiiiiiiiiiii=Zp=E("dynCall_viiiiiiiiiiii",13),N.iiiiiiiiiiiiii=Jp=E("dynCall_iiiiiiiiiiiiii",14),N.viiiiiiiiiiiiii=Yp=E("dynCall_viiiiiiiiiiiiii",15),N.viiiiiiiiiiiiiiii=Qp=E("dynCall_viiiiiiiiiiiiiiii",17),N.jiiii=eh=E("dynCall_jiiii",5),N.viiiiiiiiiiiiiiiiiii=th=E("dynCall_viiiiiiiiiiiiiiiiiii",20),N.jiij=nh=E("dynCall_jiij",4),N.iiiij=rh=E("dynCall_iiiij",5),N.iiif=ih=E("dynCall_iiif",4),N.iiij=oh=E("dynCall_iiij",4),N.if=ah=E("dynCall_if",2),N.vidi=sh=E("dynCall_vidi",4),N.fiff=uh=E("dynCall_fiff",4),N.fiii=lh=E("dynCall_fiii",4),N.viiiiiiiiiiiii=ch=E("dynCall_viiiiiiiiiiiii",14),N.vjiij=dh=E("dynCall_vjiij",5),N.viiiiij=fh=E("dynCall_viiiiij",7),N.jij=ph=E("dynCall_jij",3),N.viiij=hh=E("dynCall_viiij",5),N.ijiiii=mh=E("dynCall_ijiiii",6),N.vijiji=gh=E("dynCall_vijiji",6),N.vjiiiii=yh=E("dynCall_vjiiiii",7),N.vjiiiiii=bh=E("dynCall_vjiiiiii",8),N.vijiiiiii=_h=E("dynCall_vijiiiiii",9),N.vjiiiiiii=vh=E("dynCall_vjiiiiiii",9),N.iiiiiji=wh=E("dynCall_iiiiiji",7),N.viijjj=Th=E("dynCall_viijjj",6),N.viifiifijjjii=xh=E("dynCall_viifiifijjjii",13),N.vifiifiiii=Ih=E("dynCall_vifiifiiii",10),N.vifiifiiiiiii=Sh=E("dynCall_vifiifiiiiiii",13),N.vjifiii=$h=E("dynCall_vjifiii",7),N.viidi=Ah=E("dynCall_viidi",5),N.iffi=Ch=E("dynCall_iffi",4),N.viiiiiifii=Oh=E("dynCall_viiiiiifii",10),N.iiiiidfffiii=Ph=E("dynCall_iiiiidfffiii",12),N.viiiiiiiiiiiiiiiiiiiiiii=Eh=E("dynCall_viiiiiiiiiiiiiiiiiiiiiii",24),N.viiiiiiiif=Dh=E("dynCall_viiiiiiiif",10),N.viiiiiiiiiiiiiiiifiiii=kh=E("dynCall_viiiiiiiiiiiiiiiifiiii",22),N.viiiiiiiiiiiiiiiiii=jh=E("dynCall_viiiiiiiiiiiiiiiiii",19),N.viiifii=Lh=E("dynCall_viiifii",7),N.viiiiifiiiiii=Nh=E("dynCall_viiiiifiiiiii",13),N.viiff=Rh=E("dynCall_viiff",5),N.viiiiiff=Mh=E("dynCall_viiiiiff",8),N.viiiiff=zh=E("dynCall_viiiiff",7),N.ffff=E("dynCall_ffff",4),N.viiiff=Bh=E("dynCall_viiiff",6),N.viiiiiiff=Fh=E("dynCall_viiiiiiff",9),N.fiiii=E("dynCall_fiiii",5),N.vfiii=Vh=E("dynCall_vfiii",5),N.viiiiif=Uh=E("dynCall_viiiiif",7),N.iiiiiiiiiiiiiiiiifii=Gh=E("dynCall_iiiiiiiiiiiiiiiiifii",20),N.iijjjj=Wh=E("dynCall_iijjjj",6),N.viijjiiiiiiiii=Hh=E("dynCall_viijjiiiiiiiii",14),N.vijjjiiji=qh=E("dynCall_vijjjiiji",9),N.viijiiiiiiijjii=Kh=E("dynCall_viijiiiiiiijjii",15),N.iif=Xh=E("dynCall_iif",3),N.viiiiidiidii=Zh=E("dynCall_viiiiidiidii",12),N.viiifiifii=Jh=E("dynCall_viiifiifii",10),N.vijjjjiii=Yh=E("dynCall_vijjjjiii",9),N.j=Qh=E("dynCall_j",1),N.iidd=em=E("dynCall_iidd",4),N.iijj=tm=E("dynCall_iijj",4),N.viid=nm=E("dynCall_viid",4),N.viffiii=rm=E("dynCall_viffiii",7),N.viiijjjii=im=E("dynCall_viiijjjii",9),N.viiiiijjj=om=E("dynCall_viiiiijjj",9),N.iiiiiiiiiiiiiiiiii=am=E("dynCall_iiiiiiiiiiiiiiiiii",18),N.viiiiiif=sm=E("dynCall_viiiiiif",8),N.iiiiiiiiiiiiiiiiiiii=um=E("dynCall_iiiiiiiiiiiiiiiiiiii",20),N.iiiiiiiiiiiiiiiiiiiiiii=lm=E("dynCall_iiiiiiiiiiiiiiiiiiiiiii",23),N.viiiiiiiiiiiiiii=cm=E("dynCall_viiiiiiiiiiiiiii",16),N.iiiiiiiiiiiiiiiiiiiiiiii=dm=E("dynCall_iiiiiiiiiiiiiiiiiiiiiiii",24),N.viiiiiiiiiiiiiiiiiiii=fm=E("dynCall_viiiiiiiiiiiiiiiiiiii",21),N.viiiiiiiiiiiiiifi=pm=E("dynCall_viiiiiiiiiiiiiifi",17),N.viiiijiiiiiiif=hm=E("dynCall_viiiijiiiiiiif",14),N.viiiiifiifii=mm=E("dynCall_viiiiifiifii",12),N.viiiiifiifiiii=gm=E("dynCall_viiiiifiifiiii",14),N.viifiii=ym=E("dynCall_viifiii",7),N.viiiifiiifiii=bm=E("dynCall_viiiifiiifiii",13),N.viiiiidiidiiii=_m=E("dynCall_viiiiidiidiiii",14),N.viiiiiiiiiiiiiiiii=vm=E("dynCall_viiiiiiiiiiiiiiiii",18),N.viiiiiiiiiiiiiiiiiiiiii=wm=E("dynCall_viiiiiiiiiiiiiiiiiiiiii",23),N.di=Tm=E("dynCall_di",2),N.viiiiifiiiifiii=xm=E("dynCall_viiiiifiiiifiii",15),N.iiff=Im=E("dynCall_iiff",4),N.viiifiiiiiifiiii=Sm=E("dynCall_viiifiiiiiifiiii",16),N.iiiiiiiiiiiiiiiiiifi=$m=E("dynCall_iiiiiiiiiiiiiiiiiifi",20),N.viiiiiiiijjj=Am=E("dynCall_viiiiiiiijjj",12),N.viiiiiijjjjjii=Cm=E("dynCall_viiiiiijjjjjii",14),N.vijj=Om=E("dynCall_vijj",4),N.viji=Pm=E("dynCall_viji",4),N.vifi=Em=E("dynCall_vifi",4),N.vijjjjjjjjjjjjjii=Dm=E("dynCall_vijjjjjjjjjjjjjii",17),N.viiijjiiiiiii=km=E("dynCall_viiijjiiiiiii",13),N.viijiiiijiii=jm=E("dynCall_viijiiiijiii",12),N.viifjjjijiiiii=Lm=E("dynCall_viifjjjijiiiii",14),N.vjjjjjjffffjji=Nm=E("dynCall_vjjjjjjffffjji",14),N.vjjjjjjddddjji=Rm=E("dynCall_vjjjjjjddddjji",14),N.viifjjijiiii=Mm=E("dynCall_viifjjijiiii",12),N.viiiiiiifiiii=zm=E("dynCall_viiiiiiifiiii",13),N.viiiiiid=Bm=E("dynCall_viiiiiid",8),N.viiiiiiidiiii=Fm=E("dynCall_viiiiiiidiiii",13),N.viiiiiiiiiiiijfii=Vm=E("dynCall_viiiiiiiiiiiijfii",17),N.viiiiiji=Um=E("dynCall_viiiiiji",8),N.viiijjjjji=Gm=E("dynCall_viiijjjjji",10),N.vifii=Wm=E("dynCall_vifii",5),N.vifiii=Hm=E("dynCall_vifiii",6),N.iiijiiiii=qm=E("dynCall_iiijiiiii",9),N.vj=Km=E("dynCall_vj",2),N.viiiij=Xm=E("dynCall_viiiij",6),N.iiiiiiiiiiiiifii=Zm=E("dynCall_iiiiiiiiiiiiifii",16),N.viiijjjfffi=Jm=E("dynCall_viiijjjfffi",11),N.viiijiijjj=Ym=E("dynCall_viiijiijjj",10),N.viijjjj=Qm=E("dynCall_viijjjj",7),N.viiiiiiiiifiii=eg=E("dynCall_viiiiiiiiifiii",14),N.vjjjjjjffiifiiiiii=tg=E("dynCall_vjjjjjjffiifiiiiii",18),N.viiiiiiffiifiiiii=ng=E("dynCall_viiiiiiffiifiiiii",17),N.viiiiiiffifiiiii=rg=E("dynCall_viiiiiiffifiiiii",16),N.vjjjjjjjjfffiifiiiiii=ig=E("dynCall_vjjjjjjjjfffiifiiiiii",21),N.vjjjjjjjjfffiifiiiii=og=E("dynCall_vjjjjjjjjfffiifiiiii",20),N.vjjjjjjfffifiiiiiii=ag=E("dynCall_vjjjjjjfffifiiiiiii",19),N.vjjjjjjfffifiiiii=sg=E("dynCall_vjjjjjjfffifiiiii",17),N.fffffff=ug=E("dynCall_fffffff",7),N.jfi=lg=E("dynCall_jfi",3),N.vijjjjjjifiiii=cg=E("dynCall_vijjjjjjifiiii",14),N.vjjjjjiiiii=dg=E("dynCall_vjjjjjiiiii",11),N.vjjjjfiii=fg=E("dynCall_vjjjjfiii",9),N.fijjjjifi=pg=E("dynCall_fijjjjifi",9),N.vijjfffiii=hg=E("dynCall_vijjfffiii",10),N.vijiiiiiiii=mg=E("dynCall_vijiiiiiiii",11),N.fif=E("dynCall_fif",3),N.iiiiiiiiiiii=gg=E("dynCall_iiiiiiiiiiii",12),N.viiijj=yg=E("dynCall_viiijj",6),N.viiiiijiiiiii=bg=E("dynCall_viiiiijiiiiii",13),N.viiiiijjiiiii=_g=E("dynCall_viiiiijjiiiii",13),N.viiiiji=vg=E("dynCall_viiiiji",7),N.viijjiii=wg=E("dynCall_viijjiii",8),N.iiiiji=Tg=E("dynCall_iiiiji",6),N.viijjjjjjjjjjjjjii=xg=E("dynCall_viijjjjjjjjjjjjjii",18),N.viiiijiiiiiiii=Ig=E("dynCall_viiiijiiiiiiii",14),N.iijjjf=Sg=E("dynCall_iijjjf",6),N.viiiijjji=$g=E("dynCall_viiiijjji",9),N.jjjjjj=E("dynCall_jjjjjj",6),N.jjjjjjj=E("dynCall_jjjjjjj",7),N.viiijiiiiiiiii=Ag=E("dynCall_viiijiiiiiiiii",14),N.iiiijjj=Cg=E("dynCall_iiiijjj",7),N.viijiiii=Og=E("dynCall_viijiiii",8),N.iiijjii=Pg=E("dynCall_iiijjii",7),N.iijjii=Eg=E("dynCall_iijjii",6),N.viiiiiijjiiiii=Dg=E("dynCall_viiiiiijjiiiii",14),N.viiiiiiiijiiiiii=kg=E("dynCall_viiiiiiiijiiiiii",16),N.vjjii=jg=E("dynCall_vjjii",5),N.vjjjii=Lg=E("dynCall_vjjjii",6),N.viiiiiiiifiiiifiiiii=Ng=E("dynCall_viiiiiiiifiiiifiiiii",20),N.iiiiiiiiiiiii=Rg=E("dynCall_iiiiiiiiiiiii",13),N.viiiiiifi=Mg=E("dynCall_viiiiiifi",9),N.viiif=zg=E("dynCall_viiif",5),N.diii=Bg=E("dynCall_diii",4),N.vijjjiii=Fg=E("dynCall_vijjjiii",8),N.viiiiiiiiijii=Vg=E("dynCall_viiiiiiiiijii",13),N.viiiiiiiiji=Ug=E("dynCall_viiiiiiiiji",11),N.vijfjiiiii=Gg=E("dynCall_vijfjiiiii",10),N.fj=Wg=E("dynCall_fj",2),N.iiiijiiiijj=Hg=E("dynCall_iiiijiiiijj",11),N.iiiiiiiiiiijiiii=qg=E("dynCall_iiiiiiiiiiijiiii",16),N.iiiijiiiiiiiiii=Kg=E("dynCall_iiiijiiiiiiiiii",15),N.jiiij=Xg=E("dynCall_jiiij",5),N.jiijj=Zg=E("dynCall_jiijj",5),N.iiiji=Jg=E("dynCall_iiiji",5),N.iiifi=Yg=E("dynCall_iiifi",5),N.iiijii=Qg=E("dynCall_iiijii",6),N.iiiiiiiiiji=ey=E("dynCall_iiiiiiiiiji",11),N.iiiiijji=ty=E("dynCall_iiiiijji",8),N.iiiijjii=ny=E("dynCall_iiiijjii",8),N.iiiijii=ry=E("dynCall_iiiijii",7),N.iiijiii=iy=E("dynCall_iiijiii",7),N.iiiiiiiiijii=oy=E("dynCall_iiiiiiiiijii",12),N.iiiiiijjjii=ay=E("dynCall_iiiiiijjjii",11),N.iiiiiiiijjjfi=sy=E("dynCall_iiiiiiiijjjfi",13),N.iijiiii=uy=E("dynCall_iijiiii",7),N.viiiijjj=ly=E("dynCall_viiiijjj",8),N.viiiijj=cy=E("dynCall_viiiijj",7),N.iijjjii=dy=E("dynCall_iijjjii",7),N.iiiijjjiii=fy=E("dynCall_iiiijjjiii",10),N.iiiiiiiiiiiiiii=py=E("dynCall_iiiiiiiiiiiiiii",15),N.iijjiii=hy=E("dynCall_iijjiii",7),N.viijjjjiiiiiiiii=my=E("dynCall_viijjjjiiiiiiiii",16),N.viiiijjjj=gy=E("dynCall_viiiijjjj",9),N.fiif=yy=E("dynCall_fiif",4),N.viijjiiiiii=by=E("dynCall_viijjiiiiii",11),N.viijjiiiiiiii=_y=E("dynCall_viijjiiiiiiii",13),N.ijii=vy=E("dynCall_ijii",4),N.viiiiiij=wy=E("dynCall_viiiiiij",8),N.viiiiiiijiiii=Ty=E("dynCall_viiiiiiijiiii",13),N.vijji=xy=E("dynCall_vijji",5),N.viijii=E("dynCall_viijii",6),N.iidiiii=E("dynCall_iidiiii",7),N.iiiiij=Iy=E("dynCall_iiiiij",6),N.iiiiid=Sy=E("dynCall_iiiiid",6),N.iiiiijj=E("dynCall_iiiiijj",7),N.iiiiiijj=E("dynCall_iiiiiijj",8),$y=E("asyncify_start_unwind",1),Ay=E("asyncify_stop_unwind",0),Cy=E("asyncify_start_rewind",1),Oy=E("asyncify_stop_rewind",0)}(Sn),Cd("wasm-instantiate"),Sn;var v}Ad("wasm-instantiate");var c,f,p=t,m=Od();return t.instantiateWasm?new Promise((y,_)=>{try{t.instantiateWasm(m,(v,x)=>{y(u(v,x))})}catch(v){k(`Module.instantiateWasm callback failed with error: ${v}`),_(v)}}):a?new Promise(y=>{Te=_=>{var v=new WebAssembly.Instance(_,Od());y(u(v,_))}}):(Fi??=t.locateFile?(f="ort-wasm-simd-threaded.jsep.wasm",t.locateFile?t.locateFile(f,T):T+f):new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href,c=await kS(I,Fi,m),F(t===p,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),p=null,u(c.instance,c.module))}();function uA(u,c,f){var p=M();try{return Kf(u,c,f)}catch(m){if(R(p),!(m instanceof P))throw m;z(1,0)}}function lA(u,c){var f=M();try{qf(u,c)}catch(p){if(R(f),!(p instanceof P))throw p;z(1,0)}}function cA(u,c){var f=M();try{return ou(u,c)}catch(p){if(R(f),!(p instanceof P))throw p;z(1,0)}}function dA(u,c,f){var p=M();try{Xf(u,c,f)}catch(m){if(R(p),!(m instanceof P))throw m;z(1,0)}}function fA(u,c,f,p){var m=M();try{return Zf(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;z(1,0)}}function pA(u,c,f,p){var m=M();try{Qf(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;z(1,0)}}function hA(u,c,f,p,m,y,_){var v=M();try{return Jf(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function mA(u){var c=M();try{Yf(u)}catch(f){if(R(c),!(f instanceof P))throw f;z(1,0)}}function gA(u,c,f,p,m){var y=M();try{np(u,c,f,p,m)}catch(_){if(R(y),!(_ instanceof P))throw _;z(1,0)}}function yA(u,c,f,p,m,y){var _=M();try{return ep(u,c,f,p,m,y)}catch(v){if(R(_),!(v instanceof P))throw v;z(1,0)}}function bA(u,c,f,p,m){var y=M();try{return tp(u,c,f,p,m)}catch(_){if(R(y),!(_ instanceof P))throw _;z(1,0)}}function _A(u,c,f,p){var m=M();try{return cp(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;return z(1,0),0n}}function vA(u,c,f,p,m,y,_){var v=M();try{return dp(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function wA(u){var c=M();try{return fp(u)}catch(f){if(R(c),!(f instanceof P))throw f;z(1,0)}}function TA(u,c){var f=M();try{return rp(u,c)}catch(p){if(R(f),!(p instanceof P))throw p;return z(1,0),0n}}function xA(u,c,f){var p=M();try{return up(u,c,f)}catch(m){if(R(p),!(m instanceof P))throw m;z(1,0)}}function IA(u,c,f){var p=M();try{return lp(u,c,f)}catch(m){if(R(p),!(m instanceof P))throw m;return z(1,0),0n}}function SA(u,c,f){var p=M();try{return pp(u,c,f)}catch(m){if(R(p),!(m instanceof P))throw m;z(1,0)}}function $A(u,c,f,p,m,y){var _=M();try{sp(u,c,f,p,m,y)}catch(v){if(R(_),!(v instanceof P))throw v;z(1,0)}}function AA(u,c,f){var p=M();try{return jp(u,c,f)}catch(m){if(R(p),!(m instanceof P))throw m;z(1,0)}}function CA(u,c,f,p,m,y,_,v){var x=M();try{gp(u,c,f,p,m,y,_,v)}catch(C){if(R(x),!(C instanceof P))throw C;z(1,0)}}function OA(u,c,f){var p=M();try{hp(u,c,f)}catch(m){if(R(p),!(m instanceof P))throw m;z(1,0)}}function PA(u,c,f,p,m,y,_){var v=M();try{op(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function EA(u,c,f,p,m,y,_,v){var x=M();try{return wp(u,c,f,p,m,y,_,v)}catch(C){if(R(x),!(C instanceof P))throw C;z(1,0)}}function DA(u,c,f,p,m,y,_){var v=M();try{return uy(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function kA(u,c,f){var p=M();try{_p(u,c,f)}catch(m){if(R(p),!(m instanceof P))throw m;z(1,0)}}function jA(u,c,f){var p=M();try{kp(u,c,f)}catch(m){if(R(p),!(m instanceof P))throw m;z(1,0)}}function LA(u,c,f,p,m,y,_,v,x){var C=M();try{bp(u,c,f,p,m,y,_,v,x)}catch(D){if(R(C),!(D instanceof P))throw D;z(1,0)}}function NA(u,c,f,p,m,y,_,v,x){var C=M();try{return vp(u,c,f,p,m,y,_,v,x)}catch(D){if(R(C),!(D instanceof P))throw D;z(1,0)}}function RA(u,c,f,p){var m=M();try{return Tp(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;z(1,0)}}function MA(u,c){var f=M();try{return Ip(u,c)}catch(p){if(R(f),!(p instanceof P))throw p;z(1,0)}}function zA(u,c,f,p,m,y,_){var v=M();try{mp(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function BA(u,c,f){var p=M();try{return Sp(u,c,f)}catch(m){if(R(p),!(m instanceof P))throw m;z(1,0)}}function FA(u,c,f,p,m,y,_,v){var x=M();try{$p(u,c,f,p,m,y,_,v)}catch(C){if(R(x),!(C instanceof P))throw C;z(1,0)}}function VA(u,c,f,p,m,y,_,v){var x=M();try{xp(u,c,f,p,m,y,_,v)}catch(C){if(R(x),!(C instanceof P))throw C;z(1,0)}}function UA(u,c){var f=M();try{return yp(u,c)}catch(p){if(R(f),!(p instanceof P))throw p;return z(1,0),0n}}function GA(u,c,f,p,m){var y=M();try{Ap(u,c,f,p,m)}catch(_){if(R(y),!(_ instanceof P))throw _;z(1,0)}}function WA(u,c,f,p,m){var y=M();try{Cp(u,c,f,p,m)}catch(_){if(R(y),!(_ instanceof P))throw _;z(1,0)}}function HA(u,c,f,p,m,y,_,v,x,C){var D=M();try{Lp(u,c,f,p,m,y,_,v,x,C)}catch(B){if(R(D),!(B instanceof P))throw B;z(1,0)}}function qA(u,c,f,p,m,y,_,v,x,C){var D=M();try{return Rp(u,c,f,p,m,y,_,v,x,C)}catch(B){if(R(D),!(B instanceof P))throw B;z(1,0)}}function KA(u,c,f){var p=M();try{return Op(u,c,f)}catch(m){if(R(p),!(m instanceof P))throw m;z(1,0)}}function XA(u,c){var f=M();try{return Ep(u,c)}catch(p){if(R(f),!(p instanceof P))throw p;z(1,0)}}function ZA(u,c,f,p){var m=M();try{return Dp(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;return z(1,0),0n}}function JA(u,c,f,p,m,y,_,v,x,C,D,B){var G=M();try{Np(u,c,f,p,m,y,_,v,x,C,D,B)}catch(K){if(R(G),!(K instanceof P))throw K;z(1,0)}}function YA(u,c,f,p,m,y,_,v,x,C,D){var B=M();try{Pp(u,c,f,p,m,y,_,v,x,C,D)}catch(G){if(R(B),!(G instanceof P))throw G;z(1,0)}}function QA(u,c,f,p){var m=M();try{Fp(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;z(1,0)}}function eC(u,c,f,p){var m=M();try{Vp(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;z(1,0)}}function tC(u,c,f,p,m,y,_,v,x,C,D){var B=M();try{return Up(u,c,f,p,m,y,_,v,x,C,D)}catch(G){if(R(B),!(G instanceof P))throw G;z(1,0)}}function nC(u,c,f,p,m,y,_,v,x){var C=M();try{return Bp(u,c,f,p,m,y,_,v,x)}catch(D){if(R(C),!(D instanceof P))throw D;z(1,0)}}function rC(u,c,f,p,m,y,_,v,x,C,D){var B=M();try{return Mp(u,c,f,p,m,y,_,v,x,C,D)}catch(G){if(R(B),!(G instanceof P))throw G;z(1,0)}}function iC(u,c,f,p,m,y,_,v,x){var C=M();try{return zp(u,c,f,p,m,y,_,v,x)}catch(D){if(R(C),!(D instanceof P))throw D;z(1,0)}}function oC(u,c,f,p,m,y,_,v,x){var C=M();try{return Gp(u,c,f,p,m,y,_,v,x)}catch(D){if(R(C),!(D instanceof P))throw D;z(1,0)}}function aC(u,c,f){var p=M();try{return Wp(u,c,f)}catch(m){if(R(p),!(m instanceof P))throw m;return z(1,0),0n}}function sC(u,c,f,p,m){var y=M();try{Hp(u,c,f,p,m)}catch(_){if(R(y),!(_ instanceof P))throw _;z(1,0)}}function uC(u,c,f,p,m,y){var _=M();try{qp(u,c,f,p,m,y)}catch(v){if(R(_),!(v instanceof P))throw v;z(1,0)}}function lC(u,c,f,p,m,y,_,v,x,C,D,B,G,K){var J=M();try{return Jp(u,c,f,p,m,y,_,v,x,C,D,B,G,K)}catch(Q){if(R(J),!(Q instanceof P))throw Q;z(1,0)}}function cC(u,c,f,p,m,y,_,v,x){var C=M();try{return Kp(u,c,f,p,m,y,_,v,x)}catch(D){if(R(C),!(D instanceof P))throw D;z(1,0)}}function dC(u,c,f,p){var m=M();try{Pm(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;z(1,0)}}function fC(u,c,f,p){var m=M();try{return Xp(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;z(1,0)}}function pC(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J){var Q=M();try{Yp(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J)}catch(ce){if(R(Q),!(ce instanceof P))throw ce;z(1,0)}}function hC(u,c,f,p,m,y,_,v,x,C,D,B,G){var K=M();try{Zp(u,c,f,p,m,y,_,v,x,C,D,B,G)}catch(J){if(R(K),!(J instanceof P))throw J;z(1,0)}}function mC(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce){var fe=M();try{Qp(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce)}catch(_e){if(R(fe),!(_e instanceof P))throw _e;z(1,0)}}function gC(u,c,f,p){var m=M();try{return nh(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;return z(1,0),0n}}function yC(u,c,f,p,m){var y=M();try{return eh(u,c,f,p,m)}catch(_){if(R(y),!(_ instanceof P))throw _;return z(1,0),0n}}function bC(u,c,f,p,m){var y=M();try{return rh(u,c,f,p,m)}catch(_){if(R(y),!(_ instanceof P))throw _;z(1,0)}}function _C(u,c,f,p){var m=M();try{return ih(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;z(1,0)}}function vC(u,c,f,p){var m=M();try{return oh(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;z(1,0)}}function wC(u,c){var f=M();try{return ah(u,c)}catch(p){if(R(f),!(p instanceof P))throw p;z(1,0)}}function TC(u,c,f,p){var m=M();try{sh(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;z(1,0)}}function xC(u,c,f,p){var m=M();try{return uh(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;z(1,0)}}function IC(u,c,f,p,m,y,_,v,x,C,D,B,G,K){var J=M();try{ch(u,c,f,p,m,y,_,v,x,C,D,B,G,K)}catch(Q){if(R(J),!(Q instanceof P))throw Q;z(1,0)}}function SC(u,c,f,p,m){var y=M();try{dh(u,c,f,p,m)}catch(_){if(R(y),!(_ instanceof P))throw _;z(1,0)}}function $C(u,c,f,p,m,y,_){var v=M();try{fh(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function AC(u,c,f){var p=M();try{return ph(u,c,f)}catch(m){if(R(p),!(m instanceof P))throw m;return z(1,0),0n}}function CC(u,c,f,p,m){var y=M();try{hh(u,c,f,p,m)}catch(_){if(R(y),!(_ instanceof P))throw _;z(1,0)}}function OC(u,c,f,p,m,y){var _=M();try{return mh(u,c,f,p,m,y)}catch(v){if(R(_),!(v instanceof P))throw v;z(1,0)}}function PC(u,c,f,p,m,y){var _=M();try{gh(u,c,f,p,m,y)}catch(v){if(R(_),!(v instanceof P))throw v;z(1,0)}}function EC(u,c,f,p,m,y,_){var v=M();try{yh(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function DC(u,c,f,p,m,y,_,v){var x=M();try{bh(u,c,f,p,m,y,_,v)}catch(C){if(R(x),!(C instanceof P))throw C;z(1,0)}}function kC(u,c,f,p,m,y,_,v,x){var C=M();try{_h(u,c,f,p,m,y,_,v,x)}catch(D){if(R(C),!(D instanceof P))throw D;z(1,0)}}function jC(u,c,f,p,m,y,_,v,x){var C=M();try{vh(u,c,f,p,m,y,_,v,x)}catch(D){if(R(C),!(D instanceof P))throw D;z(1,0)}}function LC(u,c,f,p,m,y,_){var v=M();try{return wh(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function NC(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe){var _e=M();try{ip(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe)}catch(Ee){if(R(_e),!(Ee instanceof P))throw Ee;z(1,0)}}function RC(u,c,f,p,m,y){var _=M();try{Th(u,c,f,p,m,y)}catch(v){if(R(_),!(v instanceof P))throw v;z(1,0)}}function MC(u,c,f,p,m,y,_,v,x,C,D,B,G){var K=M();try{xh(u,c,f,p,m,y,_,v,x,C,D,B,G)}catch(J){if(R(K),!(J instanceof P))throw J;z(1,0)}}function zC(u,c,f,p,m,y,_,v,x,C){var D=M();try{Ih(u,c,f,p,m,y,_,v,x,C)}catch(B){if(R(D),!(B instanceof P))throw B;z(1,0)}}function BC(u,c,f,p,m,y,_,v,x,C,D,B,G){var K=M();try{Sh(u,c,f,p,m,y,_,v,x,C,D,B,G)}catch(J){if(R(K),!(J instanceof P))throw J;z(1,0)}}function FC(u,c,f,p,m,y,_){var v=M();try{$h(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function VC(u,c,f,p,m){var y=M();try{Ah(u,c,f,p,m)}catch(_){if(R(y),!(_ instanceof P))throw _;z(1,0)}}function UC(u,c,f,p){var m=M();try{return Ch(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;z(1,0)}}function GC(u,c,f,p){var m=M();try{return lh(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;z(1,0)}}function WC(u,c,f,p,m,y,_,v,x,C){var D=M();try{Oh(u,c,f,p,m,y,_,v,x,C)}catch(B){if(R(D),!(B instanceof P))throw B;z(1,0)}}function HC(u,c,f,p,m,y,_,v,x,C,D,B){var G=M();try{return Ph(u,c,f,p,m,y,_,v,x,C,D,B)}catch(K){if(R(G),!(K instanceof P))throw K;z(1,0)}}function qC(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee,He,Ge,wt,Mt){var Wt=M();try{Eh(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee,He,Ge,wt,Mt)}catch(Zi){if(R(Wt),!(Zi instanceof P))throw Zi;z(1,0)}}function KC(u,c,f,p,m,y,_,v,x,C){var D=M();try{Dh(u,c,f,p,m,y,_,v,x,C)}catch(B){if(R(D),!(B instanceof P))throw B;z(1,0)}}function XC(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee,He,Ge){var wt=M();try{kh(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee,He,Ge)}catch(Mt){if(R(wt),!(Mt instanceof P))throw Mt;z(1,0)}}function ZC(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e){var Ee=M();try{jh(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e)}catch(He){if(R(Ee),!(He instanceof P))throw He;z(1,0)}}function JC(u,c,f,p,m,y,_){var v=M();try{Lh(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function YC(u,c,f,p,m,y,_,v,x,C,D,B,G){var K=M();try{Nh(u,c,f,p,m,y,_,v,x,C,D,B,G)}catch(J){if(R(K),!(J instanceof P))throw J;z(1,0)}}function QC(u,c,f,p,m,y,_){var v=M();try{Uh(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function eO(u,c,f,p,m,y){var _=M();try{Bh(u,c,f,p,m,y)}catch(v){if(R(_),!(v instanceof P))throw v;z(1,0)}}function tO(u,c,f,p,m,y,_,v,x){var C=M();try{Fh(u,c,f,p,m,y,_,v,x)}catch(D){if(R(C),!(D instanceof P))throw D;z(1,0)}}function nO(u,c,f,p,m,y,_,v){var x=M();try{Mh(u,c,f,p,m,y,_,v)}catch(C){if(R(x),!(C instanceof P))throw C;z(1,0)}}function rO(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee){var He=M();try{return Gh(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee)}catch(Ge){if(R(He),!(Ge instanceof P))throw Ge;z(1,0)}}function iO(u,c,f,p,m,y){var _=M();try{return Wh(u,c,f,p,m,y)}catch(v){if(R(_),!(v instanceof P))throw v;z(1,0)}}function oO(u,c,f,p,m,y,_,v,x,C,D,B,G,K){var J=M();try{Hh(u,c,f,p,m,y,_,v,x,C,D,B,G,K)}catch(Q){if(R(J),!(Q instanceof P))throw Q;z(1,0)}}function aO(u,c,f,p,m,y,_,v,x){var C=M();try{qh(u,c,f,p,m,y,_,v,x)}catch(D){if(R(C),!(D instanceof P))throw D;z(1,0)}}function sO(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J){var Q=M();try{Kh(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J)}catch(ce){if(R(Q),!(ce instanceof P))throw ce;z(1,0)}}function uO(u,c,f){var p=M();try{return Xh(u,c,f)}catch(m){if(R(p),!(m instanceof P))throw m;z(1,0)}}function lO(u,c,f,p,m,y,_,v,x,C,D,B){var G=M();try{Zh(u,c,f,p,m,y,_,v,x,C,D,B)}catch(K){if(R(G),!(K instanceof P))throw K;z(1,0)}}function cO(u,c,f,p,m,y,_,v,x,C){var D=M();try{Jh(u,c,f,p,m,y,_,v,x,C)}catch(B){if(R(D),!(B instanceof P))throw B;z(1,0)}}function dO(u,c,f,p,m,y,_,v,x){var C=M();try{Yh(u,c,f,p,m,y,_,v,x)}catch(D){if(R(C),!(D instanceof P))throw D;z(1,0)}}function fO(u,c,f,p){var m=M();try{return em(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;z(1,0)}}function pO(u,c,f,p){var m=M();try{return tm(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;z(1,0)}}function hO(u,c,f,p){var m=M();try{nm(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;z(1,0)}}function mO(u,c,f,p,m,y,_){var v=M();try{rm(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function gO(u,c,f,p,m,y,_,v,x){var C=M();try{im(u,c,f,p,m,y,_,v,x)}catch(D){if(R(C),!(D instanceof P))throw D;z(1,0)}}function yO(u){var c=M();try{return Qh(u)}catch(f){if(R(c),!(f instanceof P))throw f;return z(1,0),0n}}function bO(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe){var _e=M();try{return am(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe)}catch(Ee){if(R(_e),!(Ee instanceof P))throw Ee;z(1,0)}}function _O(u,c,f,p,m,y,_,v,x){var C=M();try{om(u,c,f,p,m,y,_,v,x)}catch(D){if(R(C),!(D instanceof P))throw D;z(1,0)}}function vO(u,c,f,p,m,y,_,v){var x=M();try{sm(u,c,f,p,m,y,_,v)}catch(C){if(R(x),!(C instanceof P))throw C;z(1,0)}}function wO(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee){var He=M();try{th(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee)}catch(Ge){if(R(He),!(Ge instanceof P))throw Ge;z(1,0)}}function TO(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee){var He=M();try{return um(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee)}catch(Ge){if(R(He),!(Ge instanceof P))throw Ge;z(1,0)}}function xO(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee,He,Ge,wt){var Mt=M();try{return lm(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee,He,Ge,wt)}catch(Wt){if(R(Mt),!(Wt instanceof P))throw Wt;z(1,0)}}function IO(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee,He,Ge,wt,Mt){var Wt=M();try{return dm(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee,He,Ge,wt,Mt)}catch(Zi){if(R(Wt),!(Zi instanceof P))throw Zi;z(1,0)}}function SO(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee,He){var Ge=M();try{fm(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee,He)}catch(wt){if(R(Ge),!(wt instanceof P))throw wt;z(1,0)}}function $O(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce){var fe=M();try{pm(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce)}catch(_e){if(R(fe),!(_e instanceof P))throw _e;z(1,0)}}function AO(u,c,f,p,m,y,_,v,x,C,D,B,G,K){var J=M();try{hm(u,c,f,p,m,y,_,v,x,C,D,B,G,K)}catch(Q){if(R(J),!(Q instanceof P))throw Q;z(1,0)}}function CO(u,c,f,p,m,y,_,v,x,C,D,B){var G=M();try{mm(u,c,f,p,m,y,_,v,x,C,D,B)}catch(K){if(R(G),!(K instanceof P))throw K;z(1,0)}}function OO(u,c,f,p,m,y,_,v,x,C,D,B,G,K){var J=M();try{gm(u,c,f,p,m,y,_,v,x,C,D,B,G,K)}catch(Q){if(R(J),!(Q instanceof P))throw Q;z(1,0)}}function PO(u,c,f,p,m,y,_){var v=M();try{ym(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function EO(u,c,f,p,m,y,_,v,x,C,D,B,G){var K=M();try{bm(u,c,f,p,m,y,_,v,x,C,D,B,G)}catch(J){if(R(K),!(J instanceof P))throw J;z(1,0)}}function DO(u,c,f,p,m,y,_,v,x,C,D,B,G,K){var J=M();try{_m(u,c,f,p,m,y,_,v,x,C,D,B,G,K)}catch(Q){if(R(J),!(Q instanceof P))throw Q;z(1,0)}}function kO(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe){var _e=M();try{vm(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe)}catch(Ee){if(R(_e),!(Ee instanceof P))throw Ee;z(1,0)}}function jO(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee,He,Ge,wt){var Mt=M();try{wm(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee,He,Ge,wt)}catch(Wt){if(R(Mt),!(Wt instanceof P))throw Wt;z(1,0)}}function LO(u,c){var f=M();try{return Tm(u,c)}catch(p){if(R(f),!(p instanceof P))throw p;z(1,0)}}function NO(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J){var Q=M();try{xm(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J)}catch(ce){if(R(Q),!(ce instanceof P))throw ce;z(1,0)}}function RO(u,c,f,p){var m=M();try{return Im(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;z(1,0)}}function MO(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q){var ce=M();try{Sm(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q)}catch(fe){if(R(ce),!(fe instanceof P))throw fe;z(1,0)}}function zO(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q){var ce=M();try{cm(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q)}catch(fe){if(R(ce),!(fe instanceof P))throw fe;z(1,0)}}function BO(u,c,f,p,m){var y=M();try{Vh(u,c,f,p,m)}catch(_){if(R(y),!(_ instanceof P))throw _;z(1,0)}}function FO(u,c,f,p,m){var y=M();try{Rh(u,c,f,p,m)}catch(_){if(R(y),!(_ instanceof P))throw _;z(1,0)}}function VO(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee){var He=M();try{return $m(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee)}catch(Ge){if(R(He),!(Ge instanceof P))throw Ge;z(1,0)}}function UO(u,c,f,p,m,y,_,v,x,C,D,B){var G=M();try{Am(u,c,f,p,m,y,_,v,x,C,D,B)}catch(K){if(R(G),!(K instanceof P))throw K;z(1,0)}}function GO(u,c,f,p,m,y,_,v,x,C,D,B,G,K){var J=M();try{Cm(u,c,f,p,m,y,_,v,x,C,D,B,G,K)}catch(Q){if(R(J),!(Q instanceof P))throw Q;z(1,0)}}function WO(u,c,f,p){var m=M();try{Om(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;z(1,0)}}function HO(u,c,f,p){var m=M();try{Em(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;z(1,0)}}function qO(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce){var fe=M();try{Dm(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce)}catch(_e){if(R(fe),!(_e instanceof P))throw _e;z(1,0)}}function KO(u,c,f,p,m,y,_,v,x,C,D,B,G){var K=M();try{km(u,c,f,p,m,y,_,v,x,C,D,B,G)}catch(J){if(R(K),!(J instanceof P))throw J;z(1,0)}}function XO(u,c,f,p,m,y,_,v,x,C,D,B){var G=M();try{jm(u,c,f,p,m,y,_,v,x,C,D,B)}catch(K){if(R(G),!(K instanceof P))throw K;z(1,0)}}function ZO(u,c,f,p,m,y,_,v,x,C,D,B,G,K){var J=M();try{Lm(u,c,f,p,m,y,_,v,x,C,D,B,G,K)}catch(Q){if(R(J),!(Q instanceof P))throw Q;z(1,0)}}function JO(u,c,f,p,m,y,_,v,x,C,D,B,G,K){var J=M();try{Nm(u,c,f,p,m,y,_,v,x,C,D,B,G,K)}catch(Q){if(R(J),!(Q instanceof P))throw Q;z(1,0)}}function YO(u,c,f,p,m,y,_,v,x,C,D,B,G,K){var J=M();try{Rm(u,c,f,p,m,y,_,v,x,C,D,B,G,K)}catch(Q){if(R(J),!(Q instanceof P))throw Q;z(1,0)}}function QO(u,c,f,p,m,y,_,v,x,C,D,B){var G=M();try{Mm(u,c,f,p,m,y,_,v,x,C,D,B)}catch(K){if(R(G),!(K instanceof P))throw K;z(1,0)}}function eP(u,c,f,p,m,y,_,v,x,C,D,B,G){var K=M();try{zm(u,c,f,p,m,y,_,v,x,C,D,B,G)}catch(J){if(R(K),!(J instanceof P))throw J;z(1,0)}}function tP(u,c,f,p,m,y,_,v){var x=M();try{Bm(u,c,f,p,m,y,_,v)}catch(C){if(R(x),!(C instanceof P))throw C;z(1,0)}}function nP(u,c,f,p,m,y,_,v,x,C,D,B,G){var K=M();try{Fm(u,c,f,p,m,y,_,v,x,C,D,B,G)}catch(J){if(R(K),!(J instanceof P))throw J;z(1,0)}}function rP(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce){var fe=M();try{Vm(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce)}catch(_e){if(R(fe),!(_e instanceof P))throw _e;z(1,0)}}function iP(u,c,f,p,m,y,_,v){var x=M();try{Um(u,c,f,p,m,y,_,v)}catch(C){if(R(x),!(C instanceof P))throw C;z(1,0)}}function oP(u,c,f,p,m,y){var _=M();try{ap(u,c,f,p,m,y)}catch(v){if(R(_),!(v instanceof P))throw v;z(1,0)}}function aP(u,c,f,p,m,y,_,v,x,C){var D=M();try{Gm(u,c,f,p,m,y,_,v,x,C)}catch(B){if(R(D),!(B instanceof P))throw B;z(1,0)}}function sP(u,c,f,p,m){var y=M();try{Wm(u,c,f,p,m)}catch(_){if(R(y),!(_ instanceof P))throw _;z(1,0)}}function uP(u,c,f,p,m,y){var _=M();try{Hm(u,c,f,p,m,y)}catch(v){if(R(_),!(v instanceof P))throw v;z(1,0)}}function lP(u,c,f,p,m,y,_,v,x){var C=M();try{return qm(u,c,f,p,m,y,_,v,x)}catch(D){if(R(C),!(D instanceof P))throw D;z(1,0)}}function cP(u,c){var f=M();try{Km(u,c)}catch(p){if(R(f),!(p instanceof P))throw p;z(1,0)}}function dP(u,c,f,p,m,y){var _=M();try{Xm(u,c,f,p,m,y)}catch(v){if(R(_),!(v instanceof P))throw v;z(1,0)}}function fP(u,c,f,p,m,y,_){var v=M();try{zh(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function pP(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q){var ce=M();try{return Zm(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q)}catch(fe){if(R(ce),!(fe instanceof P))throw fe;z(1,0)}}function hP(u,c,f,p,m,y,_,v,x,C,D){var B=M();try{Jm(u,c,f,p,m,y,_,v,x,C,D)}catch(G){if(R(B),!(G instanceof P))throw G;z(1,0)}}function mP(u,c,f,p,m,y,_,v,x,C){var D=M();try{Ym(u,c,f,p,m,y,_,v,x,C)}catch(B){if(R(D),!(B instanceof P))throw B;z(1,0)}}function gP(u,c,f,p,m,y,_){var v=M();try{Qm(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function yP(u,c,f,p,m,y,_){var v=M();try{return ug(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function bP(u,c,f,p,m,y,_,v,x,C,D,B,G,K){var J=M();try{eg(u,c,f,p,m,y,_,v,x,C,D,B,G,K)}catch(Q){if(R(J),!(Q instanceof P))throw Q;z(1,0)}}function _P(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe){var _e=M();try{tg(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe)}catch(Ee){if(R(_e),!(Ee instanceof P))throw Ee;z(1,0)}}function vP(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce){var fe=M();try{ng(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce)}catch(_e){if(R(fe),!(_e instanceof P))throw _e;z(1,0)}}function wP(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q){var ce=M();try{rg(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q)}catch(fe){if(R(ce),!(fe instanceof P))throw fe;z(1,0)}}function TP(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee,He){var Ge=M();try{ig(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee,He)}catch(wt){if(R(Ge),!(wt instanceof P))throw wt;z(1,0)}}function xP(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee){var He=M();try{og(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee)}catch(Ge){if(R(He),!(Ge instanceof P))throw Ge;z(1,0)}}function IP(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e){var Ee=M();try{ag(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e)}catch(He){if(R(Ee),!(He instanceof P))throw He;z(1,0)}}function SP(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce){var fe=M();try{sg(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce)}catch(_e){if(R(fe),!(_e instanceof P))throw _e;z(1,0)}}function $P(u,c,f,p,m,y,_,v,x,C,D,B,G,K){var J=M();try{cg(u,c,f,p,m,y,_,v,x,C,D,B,G,K)}catch(Q){if(R(J),!(Q instanceof P))throw Q;z(1,0)}}function AP(u,c,f,p,m,y,_,v,x,C,D){var B=M();try{dg(u,c,f,p,m,y,_,v,x,C,D)}catch(G){if(R(B),!(G instanceof P))throw G;z(1,0)}}function CP(u,c,f,p,m,y,_,v,x){var C=M();try{fg(u,c,f,p,m,y,_,v,x)}catch(D){if(R(C),!(D instanceof P))throw D;z(1,0)}}function OP(u,c,f,p,m,y,_,v,x){var C=M();try{return pg(u,c,f,p,m,y,_,v,x)}catch(D){if(R(C),!(D instanceof P))throw D;z(1,0)}}function PP(u,c,f,p,m,y,_,v,x,C){var D=M();try{hg(u,c,f,p,m,y,_,v,x,C)}catch(B){if(R(D),!(B instanceof P))throw B;z(1,0)}}function EP(u,c,f,p,m,y,_,v,x,C,D){var B=M();try{mg(u,c,f,p,m,y,_,v,x,C,D)}catch(G){if(R(B),!(G instanceof P))throw G;z(1,0)}}function DP(u,c,f){var p=M();try{return lg(u,c,f)}catch(m){if(R(p),!(m instanceof P))throw m;return z(1,0),0n}}function kP(u,c,f,p,m,y,_,v,x,C,D,B){var G=M();try{return gg(u,c,f,p,m,y,_,v,x,C,D,B)}catch(K){if(R(G),!(K instanceof P))throw K;z(1,0)}}function jP(u,c,f,p,m,y){var _=M();try{yg(u,c,f,p,m,y)}catch(v){if(R(_),!(v instanceof P))throw v;z(1,0)}}function LP(u,c,f,p,m,y,_,v,x,C,D,B,G){var K=M();try{bg(u,c,f,p,m,y,_,v,x,C,D,B,G)}catch(J){if(R(K),!(J instanceof P))throw J;z(1,0)}}function NP(u,c,f,p,m,y,_,v,x,C,D,B,G){var K=M();try{_g(u,c,f,p,m,y,_,v,x,C,D,B,G)}catch(J){if(R(K),!(J instanceof P))throw J;z(1,0)}}function RP(u,c,f,p,m,y,_){var v=M();try{vg(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function MP(u,c,f,p,m,y,_,v){var x=M();try{wg(u,c,f,p,m,y,_,v)}catch(C){if(R(x),!(C instanceof P))throw C;z(1,0)}}function zP(u,c,f,p,m,y){var _=M();try{return Tg(u,c,f,p,m,y)}catch(v){if(R(_),!(v instanceof P))throw v;z(1,0)}}function BP(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe){var _e=M();try{xg(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe)}catch(Ee){if(R(_e),!(Ee instanceof P))throw Ee;z(1,0)}}function FP(u,c,f,p,m,y,_,v,x,C,D,B,G,K){var J=M();try{Ig(u,c,f,p,m,y,_,v,x,C,D,B,G,K)}catch(Q){if(R(J),!(Q instanceof P))throw Q;z(1,0)}}function VP(u,c,f,p,m,y){var _=M();try{return Sg(u,c,f,p,m,y)}catch(v){if(R(_),!(v instanceof P))throw v;z(1,0)}}function UP(u,c,f,p,m,y,_,v,x){var C=M();try{$g(u,c,f,p,m,y,_,v,x)}catch(D){if(R(C),!(D instanceof P))throw D;z(1,0)}}function GP(u,c,f,p,m,y,_,v,x,C,D,B,G,K){var J=M();try{Ag(u,c,f,p,m,y,_,v,x,C,D,B,G,K)}catch(Q){if(R(J),!(Q instanceof P))throw Q;z(1,0)}}function WP(u,c,f,p,m,y,_){var v=M();try{return Cg(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function HP(u,c,f,p,m,y,_,v){var x=M();try{Og(u,c,f,p,m,y,_,v)}catch(C){if(R(x),!(C instanceof P))throw C;z(1,0)}}function qP(u,c,f,p,m,y,_){var v=M();try{return Pg(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function KP(u,c,f,p,m,y,_,v,x,C,D,B,G,K){var J=M();try{Dg(u,c,f,p,m,y,_,v,x,C,D,B,G,K)}catch(Q){if(R(J),!(Q instanceof P))throw Q;z(1,0)}}function XP(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q){var ce=M();try{kg(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q)}catch(fe){if(R(ce),!(fe instanceof P))throw fe;z(1,0)}}function ZP(u,c,f,p,m){var y=M();try{jg(u,c,f,p,m)}catch(_){if(R(y),!(_ instanceof P))throw _;z(1,0)}}function JP(u,c,f,p,m,y){var _=M();try{Lg(u,c,f,p,m,y)}catch(v){if(R(_),!(v instanceof P))throw v;z(1,0)}}function YP(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee){var He=M();try{Ng(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q,ce,fe,_e,Ee)}catch(Ge){if(R(He),!(Ge instanceof P))throw Ge;z(1,0)}}function QP(u,c,f,p,m,y,_,v,x,C,D,B,G){var K=M();try{return Rg(u,c,f,p,m,y,_,v,x,C,D,B,G)}catch(J){if(R(K),!(J instanceof P))throw J;z(1,0)}}function eE(u,c,f,p,m,y,_,v,x){var C=M();try{Mg(u,c,f,p,m,y,_,v,x)}catch(D){if(R(C),!(D instanceof P))throw D;z(1,0)}}function tE(u,c,f,p,m){var y=M();try{zg(u,c,f,p,m)}catch(_){if(R(y),!(_ instanceof P))throw _;z(1,0)}}function nE(u,c,f,p){var m=M();try{return Bg(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;z(1,0)}}function rE(u,c,f,p,m,y,_,v){var x=M();try{Fg(u,c,f,p,m,y,_,v)}catch(C){if(R(x),!(C instanceof P))throw C;z(1,0)}}function iE(u,c,f,p,m,y,_,v,x,C,D,B,G){var K=M();try{Vg(u,c,f,p,m,y,_,v,x,C,D,B,G)}catch(J){if(R(K),!(J instanceof P))throw J;z(1,0)}}function oE(u,c,f,p,m,y,_,v,x,C,D){var B=M();try{Ug(u,c,f,p,m,y,_,v,x,C,D)}catch(G){if(R(B),!(G instanceof P))throw G;z(1,0)}}function aE(u,c,f,p,m,y,_,v,x,C){var D=M();try{Gg(u,c,f,p,m,y,_,v,x,C)}catch(B){if(R(D),!(B instanceof P))throw B;z(1,0)}}function sE(u,c){var f=M();try{return Wg(u,c)}catch(p){if(R(f),!(p instanceof P))throw p;z(1,0)}}function uE(u,c,f,p,m,y,_,v,x,C,D){var B=M();try{return Hg(u,c,f,p,m,y,_,v,x,C,D)}catch(G){if(R(B),!(G instanceof P))throw G;z(1,0)}}function lE(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q){var ce=M();try{return qg(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q)}catch(fe){if(R(ce),!(fe instanceof P))throw fe;z(1,0)}}function cE(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J){var Q=M();try{return Kg(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J)}catch(ce){if(R(Q),!(ce instanceof P))throw ce;z(1,0)}}function dE(u,c,f,p,m){var y=M();try{return Xg(u,c,f,p,m)}catch(_){if(R(y),!(_ instanceof P))throw _;return z(1,0),0n}}function fE(u,c,f,p,m){var y=M();try{return Zg(u,c,f,p,m)}catch(_){if(R(y),!(_ instanceof P))throw _;return z(1,0),0n}}function pE(u,c,f,p,m){var y=M();try{return Jg(u,c,f,p,m)}catch(_){if(R(y),!(_ instanceof P))throw _;z(1,0)}}function hE(u,c,f,p,m){var y=M();try{return Yg(u,c,f,p,m)}catch(_){if(R(y),!(_ instanceof P))throw _;z(1,0)}}function mE(u,c,f,p,m,y){var _=M();try{return Qg(u,c,f,p,m,y)}catch(v){if(R(_),!(v instanceof P))throw v;z(1,0)}}function gE(u,c,f,p,m,y,_,v,x,C,D){var B=M();try{return ey(u,c,f,p,m,y,_,v,x,C,D)}catch(G){if(R(B),!(G instanceof P))throw G;z(1,0)}}function yE(u,c,f,p,m,y,_,v){var x=M();try{return ty(u,c,f,p,m,y,_,v)}catch(C){if(R(x),!(C instanceof P))throw C;z(1,0)}}function bE(u,c,f,p,m,y,_,v){var x=M();try{return ny(u,c,f,p,m,y,_,v)}catch(C){if(R(x),!(C instanceof P))throw C;z(1,0)}}function _E(u,c,f,p,m,y,_){var v=M();try{return ry(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function vE(u,c,f,p,m,y,_){var v=M();try{return iy(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function wE(u,c,f,p,m,y,_,v,x,C,D,B){var G=M();try{return oy(u,c,f,p,m,y,_,v,x,C,D,B)}catch(K){if(R(G),!(K instanceof P))throw K;z(1,0)}}function TE(u,c,f,p,m,y,_,v,x,C,D){var B=M();try{return ay(u,c,f,p,m,y,_,v,x,C,D)}catch(G){if(R(B),!(G instanceof P))throw G;z(1,0)}}function xE(u,c,f,p,m,y,_,v,x,C,D,B,G){var K=M();try{return sy(u,c,f,p,m,y,_,v,x,C,D,B,G)}catch(J){if(R(K),!(J instanceof P))throw J;z(1,0)}}function IE(u,c,f,p,m,y,_,v){var x=M();try{ly(u,c,f,p,m,y,_,v)}catch(C){if(R(x),!(C instanceof P))throw C;z(1,0)}}function SE(u,c,f,p,m,y,_){var v=M();try{cy(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function $E(u,c,f,p,m,y,_){var v=M();try{return dy(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function AE(u,c,f,p,m,y,_,v,x,C){var D=M();try{return fy(u,c,f,p,m,y,_,v,x,C)}catch(B){if(R(D),!(B instanceof P))throw B;z(1,0)}}function CE(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J){var Q=M();try{return py(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J)}catch(ce){if(R(Q),!(ce instanceof P))throw ce;z(1,0)}}function OE(u,c,f,p,m,y,_){var v=M();try{return hy(u,c,f,p,m,y,_)}catch(x){if(R(v),!(x instanceof P))throw x;z(1,0)}}function PE(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q){var ce=M();try{my(u,c,f,p,m,y,_,v,x,C,D,B,G,K,J,Q)}catch(fe){if(R(ce),!(fe instanceof P))throw fe;z(1,0)}}function EE(u,c,f,p,m,y,_,v,x){var C=M();try{gy(u,c,f,p,m,y,_,v,x)}catch(D){if(R(C),!(D instanceof P))throw D;z(1,0)}}function DE(u,c,f,p){var m=M();try{return yy(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;z(1,0)}}function kE(u,c,f,p,m,y,_,v,x,C,D){var B=M();try{by(u,c,f,p,m,y,_,v,x,C,D)}catch(G){if(R(B),!(G instanceof P))throw G;z(1,0)}}function jE(u,c,f,p,m,y,_,v,x,C,D,B,G){var K=M();try{_y(u,c,f,p,m,y,_,v,x,C,D,B,G)}catch(J){if(R(K),!(J instanceof P))throw J;z(1,0)}}function LE(u,c,f,p){var m=M();try{return vy(u,c,f,p)}catch(y){if(R(m),!(y instanceof P))throw y;z(1,0)}}function NE(u,c,f,p,m,y,_,v){var x=M();try{wy(u,c,f,p,m,y,_,v)}catch(C){if(R(x),!(C instanceof P))throw C;z(1,0)}}function RE(u,c,f,p,m,y,_,v,x,C,D,B,G){var K=M();try{Ty(u,c,f,p,m,y,_,v,x,C,D,B,G)}catch(J){if(R(K),!(J instanceof P))throw J;z(1,0)}}function ME(u,c,f,p,m){var y=M();try{xy(u,c,f,p,m)}catch(_){if(R(y),!(_ instanceof P))throw _;z(1,0)}}function zE(u,c,f,p,m,y){var _=M();try{return Eg(u,c,f,p,m,y)}catch(v){if(R(_),!(v instanceof P))throw v;z(1,0)}}function BE(u,c,f,p,m,y){var _=M();try{return Iy(u,c,f,p,m,y)}catch(v){if(R(_),!(v instanceof P))throw v;z(1,0)}}function FE(u,c,f,p,m,y){var _=M();try{return Sy(u,c,f,p,m,y)}catch(v){if(R(_),!(v instanceof P))throw v;z(1,0)}}(function u(){if(Mi>0)zi=u;else{if(a)return ee?.(t),void $d();F(!a),zf(),we(),F(!a),(c=>{for(;c.length>0;)c.shift()(t)})(kd),Mi>0?zi=u:(F(!Of),Of=!0,t.calledRun=!0,W||($d(),ee?.(t),F(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),Oe()),Oe())}})(),t.PTR_SIZE=4,e=pi?t:new Promise((u,c)=>{ee=u,ue=c});for(let u of Object.keys(t))u in r||Object.defineProperty(r,u,{configurable:!0,get(){Ue(`Access to module property ('${u}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e}var U4,G4,UT=X(()=>{"use strict";U4=FT,G4=globalThis.self?.name?.startsWith("em-pthread");G4&&FT()});var HT,Rc,W4,Xt,qT,Nc,H4,q4,KT,K4,GT,XT,WT,ZT,Ka=X(()=>{"use strict";qa();HT=typeof location>"u"?void 0:location.origin,Rc=import.meta.url>"file:"&&import.meta.url<"file;",W4=()=>{if(!!1){if(Rc){let r=URL;return new URL(new r("ort.all.bundle.min.mjs",import.meta.url).href,HT).href}return import.meta.url}},Xt=W4(),qT=()=>{if(Xt&&!Xt.startsWith("blob:"))return Xt.substring(0,Xt.lastIndexOf("/")+1)},Nc=(r,e)=>{try{let t=e??Xt;return(t?new URL(r,t):new URL(r)).origin===HT}catch{return!1}},H4=(r,e)=>{let t=e??Xt;try{return(t?new URL(r,t):new URL(r)).href}catch{return}},q4=(r,e)=>`${e??"./"}${r}`,KT=async r=>{let t=await(await fetch(r,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},K4=async r=>(await import(/*webpackIgnore:true*/ /*@vite-ignore*/r)).default,GT=(BT(),bi(zT)).default,XT=async()=>{if(!Xt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Nc(Xt))return[void 0,GT()];let r=await KT(Xt);return[r,GT(r)]},WT=(UT(),bi(VT)).default,ZT=async(r,e,t,n)=>{let i=WT&&!(r||e);if(i)if(Xt)i=Nc(Xt);else if(n&&!t)i=!0;else throw new Error("cannot determine the script source URL.");if(i)return[void 0,WT];{let o="ort-wasm-simd-threaded.jsep.mjs",a=r??H4(o,e),s=!!1&&t&&a&&!Nc(a,e),l=s?await KT(a):a??q4(o,e);return[s?l:void 0,await K4(l)]}}});var Mc,zc,rs,JT,X4,Z4,J4,Xa,nt,Rr=X(()=>{"use strict";Ka();zc=!1,rs=!1,JT=!1,X4=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Z4=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},J4=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Xa=async r=>{if(zc)return Promise.resolve();if(rs)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(JT)throw new Error("previous call to 'initializeWebAssembly()' failed.");rs=!0;let e=r.initTimeout,t=r.numThreads;if(r.simd!==!1){if(r.simd==="relaxed"){if(!J4())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Z4())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let n=X4();t>1&&!n&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+t+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),r.numThreads=t=1);let i=r.wasmPaths,o=typeof i=="string"?i:void 0,a=i?.mjs,s=a?.href??a,l=i?.wasm,d=l?.href??l,h=r.wasmBinary,[g,b]=await ZT(s,o,t>1,!!h||!!d),w=!1,T=[];if(e>0&&T.push(new Promise(I=>{setTimeout(()=>{w=!0,I()},e)})),T.push(new Promise((I,O)=>{let S={numThreads:t};if(h)S.wasmBinary=h;else if(d||o)S.locateFile=A=>d??o+A;else if(s&&s.indexOf("blob:")!==0)S.locateFile=A=>new URL(A,s).href;else if(g){let A=qT();A&&(S.locateFile=j=>A+j)}b(S).then(A=>{rs=!1,zc=!0,Mc=A,I(),g&&URL.revokeObjectURL(g)},A=>{rs=!1,JT=!0,O(A)})})),await Promise.race(T),w)throw new Error(`WebAssembly backend initializing failed due to timeout: ${e}ms`)},nt=()=>{if(zc&&Mc)return Mc;throw new Error("WebAssembly is not initialized yet.")}});var Zt,_o,qe,is=X(()=>{"use strict";Rr();Zt=(r,e)=>{let t=nt(),n=t.lengthBytesUTF8(r)+1,i=t._malloc(n);return t.stringToUTF8(r,i,n),e.push(i),i},_o=(r,e,t,n)=>{if(typeof r=="object"&&r!==null){if(t.has(r))throw new Error("Circular reference in options");t.add(r)}Object.entries(r).forEach(([i,o])=>{let a=e?e+i:i;if(typeof o=="object")_o(o,a+".",t,n);else if(typeof o=="string"||typeof o=="number")n(a,o.toString());else if(typeof o=="boolean")n(a,o?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof o}`)})},qe=r=>{let e=nt(),t=e.stackSave();try{let n=e.PTR_SIZE,i=e.stackAlloc(2*n);e._OrtGetLastError(i,i+n);let o=Number(e.getValue(i,n===4?"i32":"i64")),a=e.getValue(i+n,"*"),s=a?e.UTF8ToString(a):"";throw new Error(`${r} ERROR_CODE: ${o}, ERROR_MESSAGE: ${s}`)}finally{e.stackRestore(t)}}});var YT,QT=X(()=>{"use strict";Rr();is();YT=r=>{let e=nt(),t=0,n=[],i=r||{};try{if(r?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof r.logSeverityLevel!="number"||!Number.isInteger(r.logSeverityLevel)||r.logSeverityLevel<0||r.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${r.logSeverityLevel}`);if(r?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof r.logVerbosityLevel!="number"||!Number.isInteger(r.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${r.logVerbosityLevel}`);r?.terminate===void 0&&(i.terminate=!1);let o=0;return r?.tag!==void 0&&(o=Zt(r.tag,n)),t=e._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,o),t===0&&qe("Can't create run options."),r?.extra!==void 0&&_o(r.extra,"",new WeakSet,(a,s)=>{let l=Zt(a,n),d=Zt(s,n);e._OrtAddRunConfigEntry(t,l,d)!==0&&qe(`Can't set a run config entry: ${a} - ${s}.`)}),[t,n]}catch(o){throw t!==0&&e._OrtReleaseRunOptions(t),n.forEach(a=>e._free(a)),o}}});var Y4,Q4,eR,os,tR,ex,tx=X(()=>{"use strict";Rr();is();Y4=r=>{switch(r){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${r}`)}},Q4=r=>{switch(r){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${r}`)}},eR=r=>{r.extra||(r.extra={}),r.extra.session||(r.extra.session={});let e=r.extra.session;e.use_ort_model_bytes_directly||(e.use_ort_model_bytes_directly="1"),r.executionProviders&&r.executionProviders.some(t=>(typeof t=="string"?t:t.name)==="webgpu")&&(r.enableMemPattern=!1)},os=(r,e,t,n)=>{let i=Zt(e,n),o=Zt(t,n);nt()._OrtAddSessionConfigEntry(r,i,o)!==0&&qe(`Can't set a session config entry: ${e} - ${t}.`)},tR=async(r,e,t)=>{let n=e.executionProviders;for(let i of n){let o=typeof i=="string"?i:i.name,a=[];switch(o){case"webnn":if(o="WEBNN",typeof i!="string"){let b=i?.deviceType;b&&os(r,"deviceType",b,t)}break;case"webgpu":if(o="JS",typeof i!="string"){let g=i;if(g?.preferredLayout){if(g.preferredLayout!=="NCHW"&&g.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${g.preferredLayout}`);os(r,"preferredLayout",g.preferredLayout,t)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${o}`)}let s=Zt(o,t),l=a.length,d=0,h=0;if(l>0){d=nt()._malloc(l*nt().PTR_SIZE),t.push(d),h=nt()._malloc(l*nt().PTR_SIZE),t.push(h);for(let g=0;g<l;g++)nt().setValue(d+g*nt().PTR_SIZE,a[g][0],"*"),nt().setValue(h+g*nt().PTR_SIZE,a[g][1],"*")}await nt()._OrtAppendExecutionProvider(r,s,d,h,l)!==0&&qe(`Can't append execution provider: ${o}.`)}},ex=async r=>{let e=nt(),t=0,n=[],i=r||{};eR(i);try{let o=Y4(i.graphOptimizationLevel??"all"),a=Q4(i.executionMode??"sequential"),s=typeof i.logId=="string"?Zt(i.logId,n):0,l=i.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=i.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let h=typeof i.optimizedModelFilePath=="string"?Zt(i.optimizedModelFilePath,n):0;if(t=e._OrtCreateSessionOptions(o,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,s,l,d,h),t===0&&qe("Can't create session options."),i.executionProviders&&await tR(t,i,n),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);os(t,"enableGraphCapture",i.enableGraphCapture.toString(),n)}if(i.freeDimensionOverrides)for(let[g,b]of Object.entries(i.freeDimensionOverrides)){if(typeof g!="string")throw new Error(`free dimension override name must be a string: ${g}`);if(typeof b!="number"||!Number.isInteger(b)||b<0)throw new Error(`free dimension override value must be a non-negative integer: ${b}`);let w=Zt(g,n);e._OrtAddFreeDimensionOverride(t,w,b)!==0&&qe(`Can't set a free dimension override: ${g} - ${b}.`)}return i.extra!==void 0&&_o(i.extra,"",new WeakSet,(g,b)=>{os(t,g,b,n)}),[t,n]}catch(o){throw t!==0&&e._OrtReleaseSessionOptions(t)!==0&&qe("Can't release session options."),n.forEach(a=>e._free(a)),o}}});var Mr,lr,zr,Ei,vo,as,ss,Bc,$e=X(()=>{"use strict";Mr=r=>{switch(r){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${r}`)}},lr=r=>{switch(r){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${r}`)}},zr=(r,e)=>{let t=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][r],n=typeof e=="number"?e:e.reduce((i,o)=>i*o,1);return t>0?Math.ceil(n*t):void 0},Ei=r=>{switch(r){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${r}`)}},vo=r=>{switch(r){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${r}`)}},as=r=>r==="float32"||r==="float16"||r==="int32"||r==="int64"||r==="uint32"||r==="uint8"||r==="bool"||r==="uint4"||r==="int4",ss=r=>r==="float32"||r==="float16"||r==="int32"||r==="int64"||r==="uint32"||r==="uint64"||r==="int8"||r==="uint8"||r==="bool"||r==="uint4"||r==="int4",Bc=r=>{switch(r){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${r}`)}}});var wo,Fc=X(()=>{"use strict";qa();wo=async r=>{if(typeof r=="string")if(!1)try{let{readFile:e}=au("node:fs/promises");return new Uint8Array(await e(r))}catch(e){if(e.code==="ERR_FS_FILE_TOO_LARGE"){let{createReadStream:t}=au("node:fs"),n=t(r),i=[];for await(let o of n)i.push(o);return new Uint8Array(Buffer.concat(i))}throw e}else{let e=await fetch(r);if(!e.ok)throw new Error(`failed to load external data file: ${r}`);let t=e.headers.get("Content-Length"),n=t?parseInt(t,10):0;if(n<1073741824)return new Uint8Array(await e.arrayBuffer());{if(!e.body)throw new Error(`failed to load external data file: ${r}, no response body.`);let i=e.body.getReader(),o;try{o=new ArrayBuffer(n)}catch(s){if(s instanceof RangeError){let l=Math.ceil(n/65536);o=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw s}let a=0;for(;;){let{done:s,value:l}=await i.read();if(s)break;let d=l.byteLength;new Uint8Array(o,a,d).set(l),a+=d}return new Uint8Array(o,0,n)}}else return r instanceof Blob?new Uint8Array(await r.arrayBuffer()):r instanceof Uint8Array?r:new Uint8Array(r)}});var nR,rR,nx,rx,us,iR,Ne,cr=X(()=>{"use strict";$e();nR=["V","I","W","E","F"],rR=(r,e)=>{console.log(`[${nR[r]},${new Date().toISOString()}]${e}`)},us=(r,e)=>{nx=r,rx=e},iR=(r,e)=>{let t=vo(r),n=vo(nx);t>=n&&rR(t,typeof e=="function"?e():e)},Ne=(...r)=>{rx&&iR(...r)}});var Vc,dr,q,ui,ls,ix,ox,De=X(()=>{"use strict";Vc=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},dr=class{static calcShape(e,t,n=!1){let i=e.length,o=t.length;if(i===0)return t;if(o===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(n){if(i<2||o<2)return;let l=Vc.calcMatMulShape([e[i-2],e[i-1]],[t[o-2],t[o-1]]);if(l===void 0)return;[s[a-2],s[a-1]]=l}for(let l=n?3:1;l<=a;l++){let d=i-l<0?1:e[i-l],h=o-l<0?1:t[o-l];if(d!==h&&d>1&&h>1)return;let g=Math.max(d,h);if(d&&h)s[a-l]=Math.max(d,h);else{if(g>1)return;s[a-l]=0}}return s}static isValidBroadcast(e,t){let n=e.length,i=t.length;if(n>i)return!1;for(let o=1;o<=n;o++)if(e[n-o]!==1&&e[n-o]!==t[i-o])return!1;return!0}},q=class r{static size(e){return r.getSizeFromDimensionRange(e,0,e.length)}static convertShape(e,t=4){let n=e.length;if(n===0)return[];let i=new Array(n),o=n-1;for(;o>=0;){if(e[o]%t===0){i[o]=e[o]/t;break}if(t%e[o]!==0)throw new Error("cannot convert shape");i[o]=1,t/=e[o],o--}for(o--;o>=0;o--)i[o]=e[o];return i}static sizeFromDimension(e,t){if(t<0||t>e.length)throw new Error(`invalid dimension of ${t} for sizeFromDimension as Tensor has ${e.length} dimensions.`);return r.getSizeFromDimensionRange(e,t,e.length)}static sizeToDimension(e,t){if(t<0||t>e.length)throw new Error(`invalid dimension of ${t} for sizeToDimension as Tensor has ${e.length} dimensions.`);return r.getSizeFromDimensionRange(e,0,t)}static getSizeFromDimensionRange(e,t,n){let i=1;for(let o=t;o<n;o++){if(e[o]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");i*=Number(e[o])}return i}static computeStrides(e){let t=e.length;if(t===0)return[];if(t===1)return[1];let n=new Array(t);n[t-1]=1,n[t-2]=e[t-1];for(let i=t-3;i>=0;--i)n[i]=n[i+1]*e[i+1];return n}static normalizeAxis(e,t){if(e<-t&&e>=t)throw new Error("unsupported axis for this operation.");return e<0?e+t:e}static normalizeAxes(e,t){return e.map(n=>this.normalizeAxis(n,t??e.length))}static sortBasedOnPerm(e,t){return t?t.map(n=>e[n]):e.slice().reverse()}static padShape(e,t){let n=e.length;return e.map((i,o)=>i+t[o]+t[o+n])}static areEqual(e,t){return e.length!==t.length?!1:e.every((n,i)=>n===t[i])}},ui=class r{static adjustPoolAttributes(e,t,n,i,o,a){if(!e&&n.length!==t.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(e)for(let s=0;s<t.length-2;s++)s>=n.length?n.push(t[s+2]):n[s]=t[s+2];for(let s=0;s<n.length;s++)if(s<i.length){if(i[s]<0)throw new Error("strides should be greater than or equal to 1")}else i.push(1);for(let s=0;s<n.length;s++)if(s<o.length){if(o[s]<0)throw new Error("dilations should be greater than or equal to 1")}else o.push(1);for(let s=0;s<n.length*2;s++)if(s<a.length){if(a[s]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let s=0;s<n.length;s++){if(n[s]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[s]>=n[s]||a[s+n.length]>=n[s])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(e,t,n,i,o,a,s){if(s){if(o.length!==2*(e.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(t.length!==e.length-2)throw new Error("length of strides should be the length of data dimensions");if(i.length!==e.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<e.length-2;l++)r.adjustPadAndReturnShape(e[l+(a?1:2)],t[l],n[l],i[l],o,l,l+e.length-2,s)}}static computePoolOutputShape(e,t,n,i,o,a,s){if(t.length<=0)throw new Error("input shape must be of size greater than 0");let l=[t[0],t[1]];return r.computeShapeHelper(e,t,l,n,i,o,a,s),l}static computeConvOutputShape(e,t,n,i,o,a,s){if(e.length<=0||t.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[e[0],t[0]];return r.computeShapeHelper(!1,e,l,n,i,o,a,s),l}static computeShapeHelper(e,t,n,i,o,a,s,l){if(e)for(let d=0;d<t.length-2;d++)n.push(1);else for(let d=0;d<t.length-2;d++)n.push(r.adjustPadAndReturnShape(t[d+2],i[d],o[d],a[d],s,d,d+t.length-2,l))}static adjustPadAndReturnShape(e,t,n,i,o,a,s,l){let d=n*(i-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return o[a]=0,o[s]=0,Math.floor((e-d)/t+1);case"SAME_LOWER":case"SAME_UPPER":if(n!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let g=((e+t-1)/t-1)*t+i-e;return o[a]=Math.floor(l==="SAME_LOWER"?(g+1)/2:g/2),o[s]=g-o[a],Math.floor((e+g-i)/t+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((e+o[a]+o[s]-d)/t+1)}},ls=class{static getShapeOfGemmResult(e,t,n,i,o){if(e.length!==2||n.length!==2)throw new Error("shape need to be of size 2");let a,s,l;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let d=-1;if(i?(l=n[0],d=1):(l=n[1],d=0),n[d]!==s)throw new Error("dimension mismatch");if(a<=0||l<=0||s<=0)throw new Error("invalid shape specified");if(o&&!dr.isValidBroadcast(o,[a,l]))throw new Error("gemm: invalid bias shape for broadcast");return[a,l,s]}},ix=-34028234663852886e22,ox=34028234663852886e22});var cs,Uc=X(()=>{"use strict";$e();cs=(r,e)=>new(Ei(e))(r)});var sx,Wc,ux,oR,ax,aR,lx,ds,fs,Gc,cx,dx=X(()=>{"use strict";$e();cr();sx=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Wc=(r,e)=>{if(e==="int32")return r;let t=sx.get(e);if(!t)throw new Error(`WebNN backend does not support data type: ${e}`);let n=t/8;if(r.byteLength%n!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${n}.`);let i=r.byteLength/n,o=new(Ei(e))(r.buffer,r.byteOffset,i);switch(e){case"int64":case"uint64":{let a=new Int32Array(i);for(let s=0;s<i;s++){let l=o[s];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[s]=Number(l)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(e==="uint32"&&o.some(s=>s>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(o,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${e} to 'int32'`)}},ux=(r,e)=>{if(e==="int32")return r;if(r.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let t=r.byteLength/4,n=new Int32Array(r.buffer,r.byteOffset,t);switch(e){case"int64":{let i=BigInt64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"uint64":{if(n.some(o=>o<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let i=BigUint64Array.from(n,BigInt);return new Uint8Array(i.buffer)}case"int8":{if(n.some(o=>o<-128||o>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let i=Int8Array.from(n,Number);return new Uint8Array(i.buffer)}case"uint8":{if(n.some(i=>i<0||i>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(n,Number)}case"uint32":{if(n.some(o=>o<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let i=Uint32Array.from(n,Number);return new Uint8Array(i.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${e}`)}},oR=1,ax=()=>oR++,aR=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),lx=(r,e)=>{let t=sx.get(r);if(!t)throw new Error(`WebNN backend does not support data type: ${r}`);return e.length>0?Math.ceil(e.reduce((n,i)=>n*i)*t/8):0},ds=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:i,dataType:o,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=i,this.dataType=o,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return lx(this.dataType,this.tensorShape)}destroy(){Ne("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=ux(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return n.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((i,o)=>i===n[o])}setIsDataConverted(e){this.isDataConverted=e}},fs=class{constructor(e,t){this.tensorManager=e;this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,i){let o=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!a?.input.dataTypes.includes(t)){if(s=aR.get(t),!s||a?.input.dataTypes.includes(s))throw new Error(`WebNN backend does not support data type: ${t}`);Ne("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(o,t,n))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==lx(t,n))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let l=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,l,!0,!0,s),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Wc(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else Ne("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?ux(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Gc=class{constructor(e){this.backend=e;this.tensorTrackersById=new Map;this.freeTensors=[];this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=ax();return this.tensorTrackersById.set(e,new fs(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,i,o){Ne("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${i}, copyOld: ${o}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,n,i,o)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");n.upload(t)}async download(e,t){Ne("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw new Error("Tensor not found.");return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,i){let o=this.getMLContext(e),a=ax(),s=new ds({sessionId:e,context:o,tensor:t,dataType:n,shape:i});return this.tensorTrackersById.set(a,new fs(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,n,i,o,a,s){let l=this.getMLContext(e);for(let[h,g]of this.freeTensors.entries())if(g.canReuseTensor(l,t,n)){Ne("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}`);let b=this.freeTensors.splice(h,1)[0];return b.sessionId=e,b}Ne("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${n}}`);let d=await l.createTensor({dataType:s??t,shape:n,dimensions:n,usage:i,writable:o,readable:a});return new ds({sessionId:e,context:l,tensor:d,dataType:t,shape:n,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},cx=(...r)=>new Gc(...r)});var ps,sR,hs,fx=X(()=>{"use strict";$e();Rr();Uc();dx();cr();ps=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),sR=(r,e)=>{if(r===e)return!0;if(r===void 0||e===void 0)return!1;let t=Object.keys(r).sort(),n=Object.keys(e).sort();return t.length===n.length&&t.every((i,o)=>i===n[o]&&r[i]===e[i])},hs=class{constructor(e){this.tensorManager=cx(this);this.mlContextBySessionId=new Map;this.sessionIdsByMLContext=new Map;this.mlContextCache=[];this.sessionGraphInputs=new Map;this.sessionGraphOutputs=new Map;this.temporaryGraphInputs=[];this.temporaryGraphOutputs=[];this.temporarySessionTensorIds=new Map;this.mlOpSupportLimitsBySessionId=new Map;us(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Ne("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Ne("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let n of t)Ne("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${n}}`),this.tensorManager.releaseTensorId(n);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let n=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(n!==-1)return this.mlContextCache[n].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let n=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(n!==-1)return this.mlContextCache[n].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(n=>sR(n.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let n=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:n}),n}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(o=>o.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ne("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,i,o){let a=ps.get(n);if(!a)throw new Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,i,o)}async createTemporaryTensor(e,t,n){Ne("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let i=ps.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let o=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,o,i,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(o):this.temporarySessionTensorIds.set(e,[o]),o}uploadTensor(e,t){if(!nt().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ne("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return cs(n,t)}}registerMLTensor(e,t,n,i){let o=ps.get(n);if(!o)throw new Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,o,i);return Ne("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${o}, dimensions: ${i}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,i,o,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let l=e;e.startsWith("./")&&(l=e.substring(2));let d=a.get(l);if(!d)throw new Error(`File with name ${l} not found in preloaded files.`);if(t+n>d.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let h=d.slice(t,t+n).buffer,g;switch(o.dataType){case"float32":g=new Float32Array(h);break;case"float16":g=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(h):new Uint16Array(h);break;case"int32":g=new Int32Array(h);break;case"uint32":g=new Uint32Array(h);break;case"int64":if(s){let b=Wc(new Uint8Array(h),"int64");g=new Int32Array(b.buffer),o.dataType="int32"}else g=new BigInt64Array(h);break;case"uint64":g=new BigUint64Array(h);break;case"int8":g=new Int8Array(h);break;case"int4":case"uint4":case"uint8":g=new Uint8Array(h);break;default:throw new Error(`Unsupported data type: ${o.dataType} in creating WebNN Constant from external data.`)}return Ne("verbose",()=>`[WebNN] registerMLConstant {dataType: ${o.dataType}, shape: ${o.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(o,g)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let i=ps.get(Mr(t)),o=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:n?!!o?.input.dataTypes.includes(i):!!o?.output.dataTypes.includes(i)}flush(){}}});var ms=X(()=>{"use strict"});var px,Hc,qc,uR,lR,hx,Xc,Kc,gx,yx=X(()=>{"use strict";cr();ms();px=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Hc=[],qc=r=>Math.ceil(Number(r)/16)*16,uR=r=>{for(let e=0;e<Hc.length;e++){let t=Hc[e];if(r<=t)return t}return Math.ceil(r/16)*16},lR=1,hx=()=>lR++,Xc=async(r,e,t,n)=>{let i=qc(t),o=r.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=r.getCommandEncoder();r.endComputePass(),a.copyBufferToBuffer(e,0,o,0,i),r.flush(),await o.mapAsync(GPUMapMode.READ);let s=o.getMappedRange();if(n){let l=n();return l.set(new Uint8Array(s,0,t)),l}else return new Uint8Array(s.slice(0,t))}finally{o.destroy()}},Kc=class{constructor(e){this.backend=e;this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of px)Hc.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,i=t.byteOffset,o=t.byteLength,a=qc(o),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==o)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${o}`);let l=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),d=l.getMappedRange();new Uint8Array(d).set(new Uint8Array(n,i,o)),l.unmap();let h=this.backend.device.createCommandEncoder();h.copyBufferToBuffer(l,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([h.finish()]),l.destroy(),Ne("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(n.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let o=qc(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,i.gpuData.buffer,0,o)}registerExternalBuffer(e,t,n){let i;if(n){if(i=n[0],e===n[1])return Ne("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=hx();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),Ne("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ne("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=uR(e),i,o=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(o||a){let d=(o?this.freeBuffers:this.freeUniformBuffers).get(n);d?d.length>0?i=d.pop():i=this.backend.device.createBuffer({size:n,usage:t}):i=this.backend.device.createBuffer({size:n,usage:t})}else i=this.backend.device.createBuffer({size:n,usage:t});let s={id:hx(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),Ne("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ne("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw new Error("data does not exist");await Xc(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=px.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(n=>{n.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ne("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(n=>{n.gpuData.buffer.destroy()}),this.storageCache=new Map)}},gx=(...r)=>new Kc(...r)});var Zc,Ae,ht=X(()=>{"use strict";Zc=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ae=r=>new Zc(r)});var li,Yc,it,St,ae,Ke,Qc,ci,yn,he,gs,Z,ne,bx,ys,Jc,_x,je=X(()=>{"use strict";$e();De();li=64,Yc=(r,e)=>{if(e===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(r)){case 10:return e>1?`vec${e}<f16>`:"f16";case 1:return e>1?`vec${e}<f32>`:"f32";case 6:return e>1?`vec${e}<i32>`:"i32";case 12:return e>1?`vec${e}<u32>`:"u32";case 7:if(e>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(e>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(e!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${r}`)}},it=(r,e=1)=>{let t=Yc(r,e);return typeof t=="string"?t:t[0]},St=(r,e=1)=>{let t=Yc(r,e);return typeof t=="string"?t:t[1]},ae=(...r)=>{let e=[];return r.forEach(t=>{t.length!==0&&e.push({type:12,data:t},{type:12,data:q.computeStrides(t)})}),e},Ke=r=>r%4===0?4:r%2===0?2:1,Qc=(r="f32",e,t="0")=>!e||e===1?`${r}(${t})`:`vec${e}<${r}>(${t})`,ci=(r,e,t)=>r==="f32"?t:e===1?`f32(${t})`:`vec${e}<f32>(${t})`,yn=(r,e)=>e===4?`(${r}.x + ${r}.y + ${r}.z + ${r}.w)`:e===2?`(${r}.x + ${r}.y)`:e===3?`(${r}.x + ${r}.y + ${r}.z)`:r,he=(r,e,t,n)=>r.startsWith("uniforms.")&&t>4?typeof e=="string"?n==="f16"?`${r}[(${e}) / 8][(${e}) % 8 / 4][(${e}) % 8 % 4]`:`${r}[(${e}) / 4][(${e}) % 4]`:n==="f16"?`${r}[${Math.floor(e/8)}][${Math.floor(e%8/4)}][${e%8%4}]`:`${r}[${Math.floor(e/4)}][${e%4}]`:t>1?`${r}[${e}]`:r,gs=(r,e,t,n,i)=>{let o=typeof t=="number",a=o?t:t.length,s=[...new Array(a).keys()],l=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,d=Yc(e,i),h=typeof d=="string"?d:d[1],g=typeof d=="string"?d:d[0],b={indices:l,value:h,storage:g,tensor:e},w=re=>typeof re=="string"?re:`${re}u`,T={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},I=o?"uniforms.":"",O=`${I}${r}_shape`,S=`${I}${r}_strides`,A="";for(let re=0;re<a-1;re++)A+=`
    let dim${re} = current / ${he(S,re,a)};
    let rest${re} = current % ${he(S,re,a)};
    indices[${re}] = dim${re};
    current = rest${re};
    `;A+=`indices[${a-1}] = current;`;let j=a<2?"":`
  fn o2i_${r}(offset: u32) -> ${b.indices} {
    var indices: ${b.indices};
    var current = offset;
    ${A}
    return indices;
  }`,k=re=>(T.offsetToIndices=!0,a<2?re:`o2i_${r}(${re})`),V=[];if(a>=2)for(let re=a-1;re>=0;re--)V.push(`${he(S,re,a)} * (indices[${re}])`);let W=a<2?"":`
  fn i2o_${r}(indices: ${b.indices}) -> u32 {
    return ${V.join("+")};
  }`,F=re=>(T.indicesToOffset=!0,a<2?re:`i2o_${r}(${re})`),Y=(...re)=>a===0?"0u":`${b.indices}(${re.map(w).join(",")})`,ee=(re,te)=>a<2?`${re}`:`${he(re,te,a)}`,ue=(re,te,le)=>a<2?`${re}=${le};`:`${he(re,te,a)}=${le};`,Te={},ge=(re,te)=>{T.broadcastedIndicesToOffset=!0;let le=`${te.name}broadcastedIndicesTo${r}Offset`;if(le in Te)return`${le}(${re})`;let Rt=[];for(let kt=a-1;kt>=0;kt--){let H=te.indicesGet("outputIndices",kt+te.rank-a);Rt.push(`${ee(S,kt)} * (${H} % ${ee(O,kt)})`)}return Te[le]=`fn ${le}(outputIndices: ${te.type.indices}) -> u32 {
             return ${Rt.length>0?Rt.join("+"):"0u"};
           }`,`${le}(${re})`},we=(re,te)=>(()=>{if(b.storage===b.value)return`${r}[${re}]=${te};`;if(b.storage==="vec2<u32>"&&b.value==="i32")return`${r}[${re}]=vec2<u32>(u32(${te}), select(0u, 0xFFFFFFFFu, ${te} < 0));`;if(b.storage==="vec2<u32>"&&b.value==="u32")return`${r}[${re}]=vec2<u32>(u32(${te}), 0u);`;if(b.storage==="u32"&&b.value==="vec4<bool>")return`${r}[${re}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${te}));`;throw new Error(`not supported combination of storage type ${b.storage} and value type ${b.value} yet`)})(),Oe=re=>(()=>{if(b.storage===b.value)return`${r}[${re}]`;if(b.storage==="vec2<u32>"&&b.value==="i32")return`i32(${r}[${re}].x)`;if(b.storage==="vec2<u32>"&&b.value==="u32")return`u32(${r}[${re}].x)`;if(b.storage==="u32"&&b.value==="vec4<bool>")return`vec4<bool>(bool(${r}[${re}] & 0xFFu), bool(${r}[${re}] & 0xFF00u), bool(${r}[${re}] & 0xFF0000u), bool(${r}[${re}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${b.storage} and value type ${b.value} yet`)})(),P=a<2?"":`
  fn get_${r}ByIndices(indices: ${b.indices}) -> ${h} {
    return ${Oe(`i2o_${r}(indices)`)};
  }`,ye=a<2?"":(()=>{let re=s.map(le=>`d${le}: u32`).join(", "),te=s.map(le=>`d${le}`).join(", ");return`
  fn get_${r}(${re}) -> ${h} {
    return get_${r}ByIndices(${Y(te)});
  }`})(),xe=(...re)=>{if(re.length!==a)throw new Error(`indices length must be ${a}`);let te=re.map(w).join(",");return a===0?Oe("0u"):a===1?Oe(te[0]):(T.get=!0,T.getByIndices=!0,T.indicesToOffset=!0,`get_${r}(${te})`)},$=re=>a<2?Oe(re):(T.getByIndices=!0,T.indicesToOffset=!0,`get_${r}ByIndices(${re})`),oe=a<2?"":`
  fn set_${r}ByIndices(indices: ${b.indices}, value: ${h}) {
    ${we(`i2o_${r}(indices)`,"value")}
  }`,Le=a<2?"":(()=>{let re=s.map(le=>`d${le}: u32`).join(", "),te=s.map(le=>`d${le}`).join(", ");return`
  fn set_${r}(${re}, value: ${h}) {
    set_${r}ByIndices(${Y(te)}, value);
  }`})();return{impl:()=>{let re=[],te=!1;return T.offsetToIndices&&(re.push(j),te=!0),T.indicesToOffset&&(re.push(W),te=!0),T.broadcastedIndicesToOffset&&(Object.values(Te).forEach(le=>re.push(le)),te=!0),T.set&&(re.push(Le),te=!0),T.setByIndices&&(re.push(oe),te=!0),T.get&&(re.push(ye),te=!0),T.getByIndices&&(re.push(P),te=!0),!o&&te&&re.unshift(`const ${O} = ${b.indices}(${t.join(",")});`,`const ${S} = ${b.indices}(${q.computeStrides(t).join(",")});`),re.join(`
`)},type:b,offsetToIndices:k,indicesToOffset:F,broadcastedIndicesToOffset:ge,indices:Y,indicesGet:ee,indicesSet:ue,set:(...re)=>{if(re.length!==a+1)throw new Error(`indices length must be ${a}`);let te=re[a];if(typeof te!="string")throw new Error("value must be string");let le=re.slice(0,a).map(w).join(",");return a===0?we("0u",te):a===1?we(le[0],te):(T.set=!0,T.setByIndices=!0,T.indicesToOffset=!0,`set_${r}(${le}, ${te})`)},setByOffset:we,setByIndices:(re,te)=>a<2?we(re,te):(T.setByIndices=!0,T.indicesToOffset=!0,`set_${r}ByIndices(${re}, ${te});`),get:xe,getByOffset:Oe,getByIndices:$,usage:n,name:r,strides:S,shape:O,rank:a}},Z=(r,e,t,n=1)=>gs(r,e,t,"input",n),ne=(r,e,t,n=1)=>gs(r,e,t,"output",n),bx=(r,e,t)=>gs(r,e,t,"atomicOutput",1),ys=(r,e,t,n=1)=>gs(r,e,t,"internal",n),Jc=class{constructor(e,t){this.normalizedDispatchGroup=e;this.limits=t;this.internalVariables=[];this.variables=[];this.uniforms=[];this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=li){let t=typeof e=="number"?e:e[0],n=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${n}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${n}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let o=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=o?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=o?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${n}, ${i})
  fn main(${a}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:n,length:i}of this.uniforms)if(i&&i>4)n==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(i/4)}>`);else{let o=i==null||i===1?n:`vec${i}<${n}>`;e.push(`${t}:${o}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},_x=(r,e)=>new Jc(r,e)});var cR,vx,dR,fR,pR,hR,$t,wx,Tx,wr=X(()=>{"use strict";$e();De();ht();je();cR=(r,e)=>{if(!r||r.length!==1)throw new Error("Transpose requires 1 input.");if(e.length!==0&&e.length!==r[0].dims.length)throw new Error(`perm size ${e.length} does not match input rank ${r[0].dims.length}`)},vx=(r,e)=>e.length!==0?e:[...new Array(r).keys()].reverse(),dR=(r,e)=>q.sortBasedOnPerm(r,vx(r.length,e)),fR=(r,e,t,n)=>{let i=`fn perm(i: ${n.type.indices}) -> ${t.type.indices} {
    var a: ${t.type.indices};`;for(let o=0;o<e;++o)i+=`a[${r[o]}]=i[${o}];`;return i+="return a;}"},pR=(r,e)=>{let t=[],n=[];for(let i=0;i<r.length;++i)r[i]!==1&&t.push(r[i]),r[e[i]]!==1&&n.push(e[i]);return{newShape:t,newPerm:n}},hR=(r,e)=>{let t=0;for(let n=0;n<r.length;++n)if(e[r[n]]!==1){if(r[n]<t)return!1;t=r[n]}return!0},$t=(r,e)=>{let t=r.dataType,n=r.dims.length,i=vx(n,e),o=dR(r.dims,i),a=r.dims,s=o,l=n<2||hR(i,r.dims),d;if(l)return d=I=>{let O=Z("input",t,a,4),S=ne("output",t,s,4);return`
  ${I.registerUniform("output_size","u32").declareVariables(O,S)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let I=q.size(o);return{outputs:[{dims:o,dataType:r.dataType}],dispatchGroup:{x:Math.ceil(I/64/4)},programUniforms:[{type:12,data:Math.ceil(I/4)}]}},getShaderSource:d};let{newShape:h,newPerm:g}=pR(r.dims,i),b=q.areEqual(g,[2,3,1]),w=q.areEqual(g,[3,1,2]);if(h.length===2||b||w){a=b?[h[0],h[1]*h[2]]:w?[h[0]*h[1],h[2]]:h,s=[a[1],a[0]];let I=16;return d=O=>{let S=Z("a",t,a.length),A=ne("output",t,s.length);return`
  ${O.registerUniform("output_size","u32").declareVariables(S,A)}
  var<workgroup> tile : array<array<${A.type.value}, ${I+1}>, ${I}>;
  ${O.mainStart([I,I,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${I} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${I}u + local_id.x;
    let input_row = workgroup_id_x * ${I}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${I}u + local_id.x;
    let output_row = workgroup_id_y * ${I}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${A.setByIndices(`${A.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let O=q.size(o);return{outputs:[{dims:o,dataType:r.dataType}],dispatchGroup:{x:Math.ceil(s[1]/I),y:Math.ceil(s[0]/I)},programUniforms:[{type:12,data:O},...ae(a,s)]}},getShaderSource:d}}return d=I=>{let O=Z("a",t,a.length),S=ne("output",t,s.length);return`
  ${I.registerUniform("output_size","u32").declareVariables(O,S)}

  ${fR(i,n,O,S)}

  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",O.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${e}`,inputDependencies:["rank"]},getRunData:()=>{let I=q.size(o);return{outputs:[{dims:o,dataType:r.dataType}],dispatchGroup:{x:Math.ceil(I/64)},programUniforms:[{type:12,data:I},...ae(a,s)]}},getShaderSource:d}},wx=(r,e)=>{cR(r.inputs,e.perm),r.compute($t(r.inputs[0],e.perm))},Tx=r=>Ae({perm:r.perm})});var mR,gR,yR,bR,_R,vR,wR,TR,xR,IR,fr,xx,Ix,Sx,$x,Ax,Cx,Ox,Px,Ex,Dx,kx=X(()=>{"use strict";$e();De();je();bs();wr();mR={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},gR={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},yR={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},bR={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},_R=(r,e)=>{let t=[];for(let n=e-r;n<e;++n)t.push(n);return t},vR=(r,e)=>{let t=[],n=r.length;for(let o=0;o<n;o++)e.indexOf(o)===-1&&t.push(r[o]);let i=e.map(o=>r[o]);return[t,i]},wR=(r,e)=>{let t=r.length+e.length,n=[],i=0;for(let o=0;o<t;o++)e.indexOf(o)===-1?n.push(r[i++]):n.push(1);return n},TR=(r,e)=>{for(let t=0;t<r.length;++t)if(r[r.length-t-1]!==e-1-t)return!1;return!0},xR=(r,e)=>{let t=[];if(!TR(r,e)){for(let n=0;n<e;++n)r.indexOf(n)===-1&&t.push(n);r.forEach(n=>t.push(n))}return t},IR=(r,e,t,n,i,o,a)=>{let s=t[0].dims,l=q.size(o),d=q.size(a),h=Z("_A",t[0].dataType,s),g=ne("output",i,o),b=64;l===1&&(b=256);let w=`
          var<workgroup> aBestValues : array<f32, ${b}>;
       `,T=I=>`
        ${I.registerUniform("reduceSize","u32").declareVariables(h,g)}
        ${w}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${I.mainStart(b)}

          let outputIndex = global_idx / ${b};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${yR[n]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${b}) {
           let candidate = f32(${h.getByOffset("offset + k")});
           bestValue = ${mR[n]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${b}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${gR[n]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${g.setByOffset("outputIndex",`${n==="mean"?`${g.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${g.type.storage}(${bR[n]})`}`)};
         }
        }`;return{name:r,shaderCache:{hint:`${e};${b}`,inputDependencies:["type"]},getShaderSource:T,getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},fr=(r,e,t,n)=>{let i=r.inputs.length===1?t:ed(r.inputs,t),o=i.axes;o.length===0&&!i.noopWithEmptyAxes&&(o=r.inputs[0].dims.map((w,T)=>T));let a=q.normalizeAxes(o,r.inputs[0].dims.length),s=a,l=r.inputs[0],d=xR(s,r.inputs[0].dims.length);d.length>0&&(l=r.compute($t(r.inputs[0],d),{inputs:[0],outputs:[-1]})[0],s=_R(s.length,l.dims.length));let[h,g]=vR(l.dims,s),b=h;i.keepDims&&(b=wR(h,a)),r.compute(IR(e,i.cacheKey,[l],n,r.inputs[0].dataType,b,g),{inputs:[l]})},xx=(r,e)=>{fr(r,"ReduceMeanShared",e,"mean")},Ix=(r,e)=>{fr(r,"ReduceL1Shared",e,"l1")},Sx=(r,e)=>{fr(r,"ReduceL2Shared",e,"l2")},$x=(r,e)=>{fr(r,"ReduceLogSumExpShared",e,"logSumExp")},Ax=(r,e)=>{fr(r,"ReduceMaxShared",e,"max")},Cx=(r,e)=>{fr(r,"ReduceMinShared",e,"min")},Ox=(r,e)=>{fr(r,"ReduceProdShared",e,"prod")},Px=(r,e)=>{fr(r,"ReduceSumShared",e,"sum")},Ex=(r,e)=>{fr(r,"ReduceSumSquareShared",e,"sumSquare")},Dx=(r,e)=>{fr(r,"ReduceLogSumShared",e,"logSum")}});var pr,SR,_s,ed,hr,$R,AR,CR,OR,PR,ER,DR,kR,jR,LR,mr,jx,Lx,Nx,Rx,Mx,zx,Bx,Fx,Vx,Ux,bs=X(()=>{"use strict";$e();De();ht();je();kx();pr=r=>{if(!r||r.length===0||r.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(r.length===2&&r[1].dims.length!==1)throw new Error("Invalid axes input dims.")},SR=r=>["","",`var value = ${r.getByIndices("input_indices")};`,""],_s=(r,e,t,n,i,o,a=!1,s=!1)=>{let l=[],d=t[0].dims,h=d.length,g=q.normalizeAxes(i,h),b=!s&&g.length===0;d.forEach((O,S)=>{b||g.indexOf(S)>=0?a&&l.push(1):l.push(O)});let w=l.length,T=q.size(l);return{name:r,shaderCache:e,getShaderSource:O=>{let S=[],A=Z("_A",t[0].dataType,h),j=ne("output",o,w),k=n(A,j,g),V=k[2];for(let W=0,F=0;W<h;W++)b||g.indexOf(W)>=0?(a&&F++,V=`for(var j${W}: u32 = 0; j${W} < ${d[W]}; j${W}++) {
                  ${k[2].includes("last_index")?`let last_index = j${W};`:""}
                  ${A.indicesSet("input_indices",W,`j${W}`)}
                  ${V}
                }`):(S.push(`${A.indicesSet("input_indices",W,j.indicesGet("output_indices",F))};`),F++);return`

        ${O.registerUniform("output_size","u32").declareVariables(A,j)}

        ${O.mainStart()}
          ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${A.type.indices};
          let output_indices = ${j.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${k[0]}       // init ops for reduce max/min
          ${k[1]}
          ${V}
          ${k[3]}
          ${k.length===4?j.setByOffset("global_idx","value"):k.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:o}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...ae(d,l)]})}},ed=(r,e)=>{let t=[];return r[1].dims[0]>0&&r[1].getBigInt64Array().forEach(n=>t.push(Number(n))),Ae({axes:t,keepDims:e.keepDims,noopWithEmptyAxes:e.noopWithEmptyAxes})},hr=(r,e,t,n)=>{let i=r.inputs,o=i.length===1?t:ed(i,t);r.compute(_s(e,{hint:o.cacheKey,inputDependencies:["rank"]},[i[0]],o.noopWithEmptyAxes&&o.axes.length===0?SR:n,o.axes,i[0].dataType,o.keepDims,o.noopWithEmptyAxes),{inputs:[0]})},$R=(r,e)=>{pr(r.inputs),hr(r,"ReduceLogSum",e,(n,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,"value = log(value);"])},AR=(r,e)=>{pr(r.inputs),hr(r,"ReduceL1",e,(n,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${n.getByIndices("input_indices")});`,""])},CR=(r,e)=>{pr(r.inputs),hr(r,"ReduceL2",e,(n,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},OR=(r,e)=>{pr(r.inputs),hr(r,"ReduceLogSumExp",e,(n,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${n.getByIndices("input_indices")});`,"value = log(value);"])},PR=(r,e)=>{pr(r.inputs),hr(r,"ReduceMax",e,(n,i,o)=>{let a=[];for(let s=0;s<n.rank;s++)(o.indexOf(s)>=0||o.length===0)&&a.push(n.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = max(value, ${n.getByIndices("input_indices")});`,""]})},ER=(r,e)=>{pr(r.inputs),hr(r,"ReduceMean",e,(n,i,o)=>{let a=1;for(let s=0;s<n.rank;s++)(o.indexOf(s)>=0||o.length===0)&&(a*=r.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${n.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${a});`]})},DR=(r,e)=>{pr(r.inputs),hr(r,"ReduceMin",e,(n,i,o)=>{let a=[];for(let s=0;s<n.rank;s++)(o.indexOf(s)>=0||o.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};`,`value = min(value, ${n.getByIndices("input_indices")});`,""]})},kR=(r,e)=>{pr(r.inputs),hr(r,"ReduceProd",e,(n,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${n.getByIndices("input_indices")};`,""])},jR=(r,e)=>{pr(r.inputs),hr(r,"ReduceSum",e,(n,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${n.getByIndices("input_indices")};`,""])},LR=(r,e)=>{pr(r.inputs),hr(r,"ReduceSumSquare",e,(n,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${n.getByIndices("input_indices")}; value += t * t;`,""])},mr=(r,e,t)=>{if(e.length===0)return t;let n=1,i=1;for(let o=0;o<e.length;o++)e.indexOf(o)===-1?n*=r[o]:i*=r[o];return i<32&&n>1024},jx=(r,e)=>{mr(r.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?ER(r,e):xx(r,e)},Lx=(r,e)=>{mr(r.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?AR(r,e):Ix(r,e)},Nx=(r,e)=>{mr(r.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?CR(r,e):Sx(r,e)},Rx=(r,e)=>{mr(r.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?OR(r,e):$x(r,e)},Mx=(r,e)=>{mr(r.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?PR(r,e):Ax(r,e)},zx=(r,e)=>{mr(r.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?DR(r,e):Cx(r,e)},Bx=(r,e)=>{mr(r.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?kR(r,e):Ox(r,e)},Fx=(r,e)=>{mr(r.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?jR(r,e):Px(r,e)},Vx=(r,e)=>{mr(r.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?LR(r,e):Ex(r,e)},Ux=(r,e)=>{mr(r.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?$R(r,e):Dx(r,e)}});var Gx,Wx,Hx,td,qx=X(()=>{"use strict";$e();ht();bs();Gx=r=>{if(!r||r.length===0||r.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(r[0].dataType!==1)throw new Error("Invalid input type.")},Wx=(r,e)=>{Gx(r.inputs);let t=(n,i,o)=>{let a=[];for(let s=0;s<n.rank;s++)(o.indexOf(s)>=0||o.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${e.selectLastIndex>0?"<=":"<"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};r.compute(_s("ArgMin",{hint:e.cacheKey,inputDependencies:["rank"]},[r.inputs[0]],t,[e.axis],7,e.keepDims),{inputs:[0]})},Hx=(r,e)=>{Gx(r.inputs);let t=(n,i,o)=>{let a=[];for(let s=0;s<n.rank;s++)(o.indexOf(s)>=0||o.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${n.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${n.getByIndices("input_indices")} ${e.selectLastIndex>0?">=":">"} value) {
         value = ${n.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",i.setByOffset("global_idx","best_index")]};r.compute(_s("argMax",{hint:e.cacheKey,inputDependencies:["rank"]},[r.inputs[0]],t,[e.axis],7,e.keepDims),{inputs:[0]})},td=r=>Ae(r)});var NR,nd,RR,MR,zR,Di,BR,Kx,vs=X(()=>{"use strict";$e();De();ms();je();NR=(r,e)=>{let t=r[0],n=r[1],i=r[2],o=r[3],a=r[4],s=r[5];if(a&&s)throw new Error("Attention cannot have both past and attention_bias");if(t.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=t.dims[0],d=t.dims[1],h=t.dims[2];if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(n.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(n.dims[0]!==h)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(i.dims[0]!==n.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let g=i.dims[0]/3,b=g,w=b;if(e.qkvHiddenSizes.length>0){if(e.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let j of e.qkvHiddenSizes)if(j%e.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");g=e.qkvHiddenSizes[0],b=e.qkvHiddenSizes[1],w=e.qkvHiddenSizes[2]}let T=d;if(g!==b)throw new Error("qkv_hidden_sizes first element should be same as the second");if(i.dims[0]!==g+b+w)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let I=0;if(a){if(b!==w)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==e.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==b/e.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');e.pastPresentShareBuffer||(I=a.dims[3])}let O=T+I,S=-1,A=0;if(o)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(s){if(s.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(s.dims[0]!==l||s.dims[1]!==e.numHeads||s.dims[2]!==d||s.dims[3]!==O)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:I,kvSequenceLength:T,totalSequenceLength:O,maxSequenceLength:S,inputHiddenSize:h,hiddenSize:g,vHiddenSize:w,headSize:Math.floor(g/e.numHeads),vHeadSize:Math.floor(w/e.numHeads),numHeads:e.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:e.maskFilterValue,maskType:A,scale:e.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},nd=(r,e,t)=>e&&r?`
      let total_sequence_length_input = u32(${e.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${r?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${t?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,RR=(r,e,t,n,i,o,a,s)=>{let l=Ke(a?1:o),d=64,h=o/l;h<d&&(d=32);let g=Math.ceil(o/l/d),b=[{type:12,data:e},{type:12,data:t},{type:12,data:n},{type:12,data:i},{type:12,data:h},{type:12,data:g}],w=it(r.dataType,l),T=St(1,l),I=["type"];a&&I.push("type"),s&&I.push("type");let O=S=>{let A=ne("x",r.dataType,r.dims,l),j=[A],k=a?Z("seq_lens",a.dataType,a.dims):void 0;k&&j.push(k);let V=s?Z("total_sequence_length_input",s.dataType,s.dims):void 0;V&&j.push(V);let W=St(r.dataType),F=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${S.registerUniforms(F).declareVariables(...j)}
  ${S.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${nd(k,V,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${a?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${T}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${T}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${T}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${T}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${A.type.value}(${W}(1.0) / ${W}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${T}(x[offset + i]);
        x[offset + i] = ${A.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${A.type.value}(${W}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${w};${l}`,inputDependencies:I},getShaderSource:O,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:e*t},programUniforms:b})}},MR=(r,e,t,n,i,o,a,s,l)=>{let d=a+o.kvSequenceLength,h=[o.batchSize,o.numHeads,o.sequenceLength,d],g=r>1&&n,b=o.kvNumHeads?o.kvNumHeads:o.numHeads,w=g?[o.batchSize,b,d,o.headSize]:void 0,T=o.nReps?o.nReps:1,I=o.scale===0?1/Math.sqrt(o.headSize):o.scale,O=Ke(o.headSize),S=o.headSize/O,A=12,j={x:Math.ceil(d/A),y:Math.ceil(o.sequenceLength/A),z:o.batchSize*o.numHeads},k=[{type:12,data:o.sequenceLength},{type:12,data:S},{type:12,data:d},{type:12,data:o.numHeads},{type:12,data:o.headSize},{type:1,data:I},{type:12,data:a},{type:12,data:o.kvSequenceLength},{type:12,data:T}],V=g&&n&&q.size(n.dims)>0,W=["type","type"];V&&W.push("type"),i&&W.push("type"),s&&W.push("type"),l&&W.push("type");let F=[{dims:h,dataType:e.dataType,gpuDataType:0}];g&&F.push({dims:w,dataType:e.dataType,gpuDataType:0});let Y=ee=>{let ue=Z("q",e.dataType,e.dims,O),Te=Z("key",t.dataType,t.dims,O),ge=[ue,Te];if(V){let oe=Z("past_key",n.dataType,n.dims,O);ge.push(oe)}i&&ge.push(Z("attention_bias",i.dataType,i.dims));let we=s?Z("seq_lens",s.dataType,s.dims):void 0;we&&ge.push(we);let Oe=l?Z("total_sequence_length_input",l.dataType,l.dims):void 0;Oe&&ge.push(Oe);let P=ne("output",e.dataType,h),ye=[P];g&&ye.push(ne("present_key",e.dataType,w,O));let xe=St(1,O),$=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${A}u;

  var<workgroup> tileQ: array<${ue.type.storage}, ${A*A}>;
  var<workgroup> tileK: array<${ue.type.storage}, ${A*A}>;
  ${ee.registerUniforms($).declareVariables(...ge,...ye)}
  ${ee.mainStart([A,A,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${T===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${T===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${nd(we,Oe,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${V&&g?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${g?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${xe}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${V&&g?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${g?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${xe}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(O){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${O}`)}})()};
        output[outputIdx] = ${P.type.value} (sum * uniforms.alpha) + ${i?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${O};${i!==void 0};${n!==void 0};${r}`,inputDependencies:W},getRunData:()=>({outputs:F,dispatchGroup:j,programUniforms:k}),getShaderSource:Y}},zR=(r,e,t,n,i,o,a=void 0,s=void 0)=>{let l=o+i.kvSequenceLength,d=i.nReps?i.nReps:1,h=i.vHiddenSize*d,g=r>1&&n,b=i.kvNumHeads?i.kvNumHeads:i.numHeads,w=g?[i.batchSize,b,l,i.headSize]:void 0,T=[i.batchSize,i.sequenceLength,h],I=12,O={x:Math.ceil(i.vHeadSize/I),y:Math.ceil(i.sequenceLength/I),z:i.batchSize*i.numHeads},S=[{type:12,data:i.sequenceLength},{type:12,data:l},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:h},{type:12,data:o},{type:12,data:i.kvSequenceLength},{type:12,data:d}],A=g&&n&&q.size(n.dims)>0,j=["type","type"];A&&j.push("type"),a&&j.push("type"),s&&j.push("type");let k=[{dims:T,dataType:e.dataType,gpuDataType:0}];g&&k.push({dims:w,dataType:e.dataType,gpuDataType:0});let V=W=>{let F=Z("probs",e.dataType,e.dims),Y=Z("v",t.dataType,t.dims),ee=[F,Y];A&&ee.push(Z("past_value",n.dataType,n.dims));let ue=a?Z("seq_lens",a.dataType,a.dims):void 0;a&&ee.push(ue);let Te=s?Z("total_sequence_length_input",s.dataType,s.dims):void 0;s&&ee.push(Te);let we=[ne("output",e.dataType,T)];g&&we.push(ne("present_value",e.dataType,w));let Oe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${I}u;
  var<workgroup> tileQ: array<${F.type.value}, ${I*I}>;
  var<workgroup> tileV: array<${F.type.value}, ${I*I}>;
  ${W.registerUniforms(Oe).declareVariables(...ee,...we)}
  ${W.mainStart([I,I,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${nd(ue,Te,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${A&&g?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${g?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${F.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${A&&g?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${g?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${n!==void 0};${r}`,inputDependencies:j},getRunData:()=>({outputs:k,dispatchGroup:O,programUniforms:S}),getShaderSource:V}},Di=(r,e,t,n,i,o,a,s,l,d,h=void 0,g=void 0)=>{let b=Math.min(r.outputCount,1+(a?1:0)+(s?1:0)),w=b>1?d.pastSequenceLength:0,T=w+d.kvSequenceLength,I=l&&q.size(l.dims)>0?l:void 0,O=[e,t];b>1&&a&&q.size(a.dims)>0&&O.push(a),I&&O.push(I),h&&O.push(h),g&&O.push(g);let S=r.compute(MR(b,e,t,a,I,d,w,h,g),{inputs:O,outputs:b>1?[-1,1]:[-1]})[0];r.compute(RR(S,d.batchSize,d.numHeads,w,d.sequenceLength,T,h,g),{inputs:h&&g?[S,h,g]:[S],outputs:[]});let A=[S,n];b>1&&s&&q.size(s.dims)>0&&A.push(s),h&&A.push(h),g&&A.push(g),r.compute(zR(b,S,n,s,d,w,h,g),{inputs:A,outputs:b>1?[0,2]:[0]})},BR=(r,e)=>{let t=[e.batchSize,e.numHeads,e.sequenceLength,e.headSize],n=e.sequenceLength,i=e.inputHiddenSize,o=e.headSize,a=12,s={x:Math.ceil(e.headSize/a),y:Math.ceil(e.sequenceLength/a),z:e.batchSize*e.numHeads},l=[r.inputs[0],r.inputs[1],r.inputs[2]],d=[{type:12,data:n},{type:12,data:i},{type:12,data:o},{type:12,data:e.numHeads},{type:12,data:e.headSize},{type:12,data:e.hiddenSize},{type:12,data:e.hiddenSize+e.hiddenSize+e.vHiddenSize}],h=g=>{let b=ne("output_q",l[0].dataType,t),w=ne("output_k",l[0].dataType,t),T=ne("output_v",l[0].dataType,t),I=Z("input",l[0].dataType,l[0].dims),O=Z("weight",l[1].dataType,l[1].dims),S=Z("bias",l[2].dataType,l[2].dims),A=I.type.storage,j=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${A}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${A}, ${a*a}>;
  var<workgroup> tileWeightK: array<${A}, ${a*a}>;
  var<workgroup> tileWeightV: array<${A}, ${a*a}>;
  ${g.registerUniforms(j).declareVariables(I,O,S,b,w,T)}
  ${g.mainStart([a,a,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${A}(0);
    var valueK = ${A}(0);
    var valueV = ${A}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return r.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:t,dataType:r.inputs[0].dataType,gpuDataType:0},{dims:t,dataType:r.inputs[0].dataType,gpuDataType:0},{dims:t,dataType:r.inputs[0].dataType,gpuDataType:0}],dispatchGroup:s,programUniforms:d}),getShaderSource:h},{inputs:l,outputs:[-1,-1,-1]})},Kx=(r,e)=>{let t=NR(r.inputs,e),[n,i,o]=BR(r,t);return Di(r,n,i,o,r.inputs[4],void 0,void 0,void 0,r.inputs[5],t)}});var FR,VR,UR,Xx,Zx=X(()=>{"use strict";Et();$e();De();ht();je();FR=(r,e)=>{if(!r||r.length!==5)throw new Error("BatchNormalization requires 5 inputs");let t=(n,i,o)=>{let a=i.length;if(a!==n.length)throw new Error(`${o}: num dimensions != ${a}`);i.forEach((s,l)=>{if(s!==n[l])throw new Error(`${o}: dim[${l}] do not match`)})};if(r[0].dims.length>1){let n=e.format==="NHWC"?e.spatial?r[0].dims.slice(-1):r[0].dims.slice(-1).concat(r[0].dims.slice(1,r[0].dims.length-1)):r[0].dims.slice(1,e.spatial?2:void 0);t(r[1].dims,n,"Invalid input scale"),t(r[2].dims,n,"Invalid input B"),t(r[3].dims,n,"Invalid input mean"),t(r[4].dims,n,"Invalid input var")}else t(r[1].dims,[1],"Invalid input scale"),t(r[2].dims,[1],"Invalid input B"),t(r[3].dims,[1],"Invalid input mean"),t(r[4].dims,[1],"Invalid input var")},VR=(r,e)=>{let{epsilon:t,spatial:n,format:i}=e,o=r[0].dims,a=n?Ke(o[o.length-1]):1,s=i==="NHWC"&&o.length>1?a:1,l=q.size(o)/a,d=n,h=d?o.length:o,g=Z("x",r[0].dataType,r[0].dims,a),b=Z("scale",r[1].dataType,r[1].dims,s),w=Z("bias",r[2].dataType,r[2].dims,s),T=Z("inputMean",r[3].dataType,r[3].dims,s),I=Z("inputVar",r[4].dataType,r[4].dims,s),O=ne("y",r[0].dataType,h,a),S=()=>{let j="";if(n)j=`let cOffset = ${o.length===1?"0u":i==="NHWC"?`outputIndices[${o.length-1}] / ${a}`:"outputIndices[1]"};`;else if(i==="NCHW")j=`
            ${O.indicesSet("outputIndices","0","0")}
            let cOffset = ${O.indicesToOffset("outputIndices")};`;else{j=`var cIndices = ${b.type.indices}(0);
                       cIndices[0] = outputIndices[${o.length-1}];`;for(let k=1;k<b.rank;k++)j+=`cIndices[${k}] = outputIndices[${k}];`;j+=`let cOffset = ${b.indicesToOffset("cIndices")};`}return j},A=j=>`
  const epsilon = ${t};
  ${j.registerUniform("outputSize","u32").declareVariables(g,b,w,T,I,O)}
  ${j.mainStart()}
  ${j.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${O.offsetToIndices(`global_idx * ${a}`)};
    ${S()}
    let scale = ${b.getByOffset("cOffset")};
    let bias = ${w.getByOffset("cOffset")};
    let inputMean = ${T.getByOffset("cOffset")};
    let inputVar = ${I.getByOffset("cOffset")};
    let x = ${g.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${O.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${e.epsilon}_${e.format}_${n}_${a}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:A,getRunData:()=>({outputs:[{dims:r[0].dims,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...ae(o)]:[{type:12,data:l}]})}},UR=r=>Ae(r),Xx=(r,e)=>{let{inputs:t,outputCount:n}=r,i=UR({...e,outputCount:n});if(Pe.webgpu.validateInputContent&&FR(t,i),e.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");r.compute(VR(t,i))}});var GR,WR,Jx,Yx=X(()=>{"use strict";De();je();GR=r=>{if(r[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(r[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(r[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(r[0].dims[2]!==r[1].dims[0])throw new Error("last dimension of input and bias are not the same")},WR=r=>{let e=r[0].dims,t=r[0].dims[2],n=q.size(e)/4,i=r[0].dataType,o=Z("input",i,e,4),a=Z("bias",i,[t],4),s=Z("residual",i,e,4),l=ne("output",i,e,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:e,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:h=>`
  const channels = ${t}u / 4;
  ${h.declareVariables(o,a,s,l)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let value = ${o.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${s.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},Jx=r=>{GR(r.inputs),r.compute(WR(r.inputs))}});var HR,Ye,Qx,e1,t1,n1,r1,i1,o1,a1,s1,qR,u1,l1,c1,d1,To,f1,ws,p1,h1,m1,g1,y1,b1,_1,v1,w1,T1,x1,I1,S1,$1,A1,C1,O1,P1,rd,id,E1,D1,k1,KR,XR,j1,Ts=X(()=>{"use strict";$e();De();ht();je();HR=(r,e,t,n,i,o,a)=>{let s=Math.ceil(e/4),l="";typeof i=="string"?l=`${i}(a)`:l=i("a");let d=Z("inputData",t,[s],4),h=ne("outputData",n,[s],4),g=[{name:"vec_size",type:"u32"}];return a&&g.push(...a),`
      ${r.registerUniforms(g).declareVariables(d,h)}

  ${o??""}

  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${h.setByOffset("global_idx",l)}
  }`},Ye=(r,e,t,n,i,o=r.dataType,a,s)=>{let l=[{type:12,data:Math.ceil(q.size(r.dims)/4)}];return a&&l.push(...a),{name:e,shaderCache:{hint:i,inputDependencies:["type"]},getShaderSource:d=>HR(d,q.size(r.dims),r.dataType,o,t,n,s),getRunData:d=>({outputs:[{dims:r.dims,dataType:o}],dispatchGroup:{x:Math.ceil(q.size(d[0].dims)/64/4)},programUniforms:l})}},Qx=r=>{r.compute(Ye(r.inputs[0],"Abs","abs"))},e1=r=>{r.compute(Ye(r.inputs[0],"Acos","acos"))},t1=r=>{r.compute(Ye(r.inputs[0],"Acosh","acosh"))},n1=r=>{r.compute(Ye(r.inputs[0],"Asin","asin"))},r1=r=>{r.compute(Ye(r.inputs[0],"Asinh","asinh"))},i1=r=>{r.compute(Ye(r.inputs[0],"Atan","atan"))},o1=r=>{r.compute(Ye(r.inputs[0],"Atanh","atanh"))},a1=r=>Ae(r),s1=(r,e)=>{let t;switch(e.to){case 10:t="vec4<f16>";break;case 1:t="vec4<f32>";break;case 12:t="vec4<u32>";break;case 6:t="vec4<i32>";break;case 9:t="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${e.to}`)}r.compute(Ye(r.inputs[0],"Cast",t,void 0,e.cacheKey,e.to))},qR=r=>{let e,t,n=r.length>=2&&r[1].data!==0,i=r.length>=3&&r[2].data!==0;switch(r[0].dataType){case 1:e=n?r[1].getFloat32Array()[0]:-34028234663852886e22,t=i?r[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:e=n?r[1].getUint16Array()[0]:64511,t=i?r[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ae({min:e,max:t})},u1=(r,e)=>{let t=e||qR(r.inputs),n=St(r.inputs[0].dataType);r.compute(Ye(r.inputs[0],"Clip",i=>`clamp(${i}, vec4<${n}>(uniforms.min), vec4<${n}>(uniforms.max))`,void 0,t.cacheKey,void 0,[{type:r.inputs[0].dataType,data:t.min},{type:r.inputs[0].dataType,data:t.max}],[{name:"min",type:n},{name:"max",type:n}]),{inputs:[0]})},l1=r=>{r.compute(Ye(r.inputs[0],"Ceil","ceil"))},c1=r=>{r.compute(Ye(r.inputs[0],"Cos","cos"))},d1=r=>{r.compute(Ye(r.inputs[0],"Cosh","cosh"))},To=r=>Ae(r),f1=(r,e)=>{let t=St(r.inputs[0].dataType);r.compute(Ye(r.inputs[0],"Elu",n=>`elu_vf32(${n})`,`
  const elu_alpha_ = ${t}(${e.alpha});

  fn elu_f32(a: ${t}) -> ${t} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${t}>) -> vec4<${t}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,e.cacheKey))},ws=(r="f32")=>`
const r0: ${r} = 0.3275911;
const r1: ${r} = 0.254829592;
const r2: ${r} = -0.284496736;
const r3: ${r} = 1.421413741;
const r4: ${r} = -1.453152027;
const r5: ${r} = 1.061405429;

fn erf_vf32(v: vec4<${r}>) -> vec4<${r}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,p1=r=>{let e=St(r.inputs[0].dataType);r.compute(Ye(r.inputs[0],"Erf",t=>`erf_vf32(${t})`,ws(e)))},h1=r=>{r.compute(Ye(r.inputs[0],"Exp","exp"))},m1=r=>{r.compute(Ye(r.inputs[0],"Floor","floor"))},g1=r=>{let e=St(r.inputs[0].dataType);r.compute(Ye(r.inputs[0],"Gelu",t=>`0.5 * ${t} * (1.0 + erf_vf32(${t} * 0.7071067811865475))`,ws(e)))},y1=(r,e)=>{let t=St(r.inputs[0].dataType);r.compute(Ye(r.inputs[0],"LeakyRelu",n=>`select(leaky_relu_alpha_ * ${n}, ${n}, ${n} >= vec4<${t}>(0.0))`,`const leaky_relu_alpha_ = ${t}(${e.alpha});`,e.cacheKey))},b1=r=>{r.compute(Ye(r.inputs[0],"Not",e=>`!${e}`))},_1=r=>{r.compute(Ye(r.inputs[0],"Neg",e=>`-${e}`))},v1=r=>{r.compute(Ye(r.inputs[0],"Reciprocal",e=>`1.0/${e}`))},w1=r=>{let e=St(r.inputs[0].dataType);r.compute(Ye(r.inputs[0],"Relu",t=>`select(vec4<${e}>(0.0), ${t}, ${t} > vec4<${e}>(0.0))`))},T1=r=>{r.compute(Ye(r.inputs[0],"Sigmoid",e=>`(1.0 / (1.0 + exp(-${e})))`))},x1=r=>Ae(r),I1=(r,e)=>{let t=St(r.inputs[0].dataType);r.compute(Ye(r.inputs[0],"HardSigmoid",n=>`max(vec4<${t}>(0.0), min(vec4<${t}>(1.0), ${e.alpha} * ${n} + vec4<${t}>(${e.beta})))`,void 0,e.cacheKey))},S1=r=>{r.compute(Ye(r.inputs[0],"Sin","sin"))},$1=r=>{r.compute(Ye(r.inputs[0],"Sinh","sinh"))},A1=r=>{r.compute(Ye(r.inputs[0],"Sqrt","sqrt"))},C1=r=>{r.compute(Ye(r.inputs[0],"Tan","tan"))},O1=r=>`sign(${r}) * (1 - exp(-2 * abs(${r}))) / (1 + exp(-2 * abs(${r})))`,P1=r=>{r.compute(Ye(r.inputs[0],"Tanh",O1))},rd=(r="f32")=>`
const fast_gelu_a: ${r} = 0.5;
const fast_gelu_b: ${r} = 0.7978845608028654;
const fast_gelu_c: ${r} = 0.035677408136300125;

fn tanh_v(v: vec4<${r}>) -> vec4<${r}> {
  return ${O1("v")};
}
`,id=r=>`(fast_gelu_a + fast_gelu_a * tanh_v(${r} * (fast_gelu_c * ${r} * ${r} + fast_gelu_b))) * ${r}`,E1=r=>{let e=St(r.inputs[0].dataType);r.compute(Ye(r.inputs[0],"FastGelu",id,rd(e),void 0,r.inputs[0].dataType))},D1=(r,e)=>{let t=St(r.inputs[0].dataType);return r.compute(Ye(r.inputs[0],"ThresholdedRelu",n=>`select(vec4<${t}>(0.0), ${n}, ${n} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${t}>(${e.alpha});`,e.cacheKey)),0},k1=r=>{r.compute(Ye(r.inputs[0],"Log","log"))},KR=(r,e)=>`
const alpha = vec4<${r}>(${e});
const one = ${r}(1.0);
const zero = ${r}(0.0);

fn quick_gelu_impl(x: vec4<${r}>) -> vec4<${r}> {
  let v = x *alpha;
  var x1 : vec4<${r}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,XR=r=>`quick_gelu_impl(${r})`,j1=(r,e)=>{let t=St(r.inputs[0].dataType);r.compute(Ye(r.inputs[0],"QuickGelu",XR,KR(t,e.alpha),e.cacheKey,r.inputs[0].dataType))}});var ZR,JR,N1,R1=X(()=>{"use strict";De();je();Ts();ZR=r=>{if(r[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(r[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(r[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(r[0].dims[2]!==r[1].dims[0])throw new Error("last dimension of input and bias are not the same")},JR=r=>{let e=r[0].dims.slice();e[2]=e[2]/2;let t=Z("input",r[0].dataType,r[0].dims,4),n=Z("bias",r[0].dataType,[r[0].dims[2]],4),i=ne("output",r[0].dataType,e,4),o=q.size(e)/4,a=it(r[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:e,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)}}),getShaderSource:l=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${r[0].dims[2]/4/2}u;

  ${l.declareVariables(t,n,i)}

  ${ws(a)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(o)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},N1=r=>{ZR(r.inputs),r.compute(JR(r.inputs))}});var YR,QR,gr,M1,z1,B1,F1,V1,U1,G1,W1,H1,q1,K1=X(()=>{"use strict";$e();De();je();YR=(r,e,t,n,i,o,a,s,l,d,h,g)=>{let b,w;typeof s=="string"?b=w=(A,j)=>`${s}((${A}),(${j}))`:typeof s=="function"?b=w=s:(b=s.scalar,w=s.vector);let T=ne("outputData",h,n.length,4),I=Z("aData",l,e.length,4),O=Z("bData",d,t.length,4),S;if(i)if(o){let A=q.size(e)===1,j=q.size(t)===1,k=e.length>0&&e[e.length-1]%4===0,V=t.length>0&&t[t.length-1]%4===0;A||j?S=T.setByOffset("global_idx",w(A?`${I.type.value}(${I.getByOffset("0")}.x)`:I.getByOffset("global_idx"),j?`${O.type.value}(${O.getByOffset("0")}.x)`:O.getByOffset("global_idx"))):S=`
            let outputIndices = ${T.offsetToIndices("global_idx * 4u")};
            let offsetA = ${I.broadcastedIndicesToOffset("outputIndices",T)};
            let offsetB = ${O.broadcastedIndicesToOffset("outputIndices",T)};
            ${T.setByOffset("global_idx",w(a||k?I.getByOffset("offsetA / 4u"):`${I.type.value}(${I.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||V?O.getByOffset("offsetB / 4u"):`${O.type.value}(${O.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else S=T.setByOffset("global_idx",w(I.getByOffset("global_idx"),O.getByOffset("global_idx")));else{if(!o)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let A=(j,k,V="")=>{let W=`aData[indexA${k}][componentA${k}]`,F=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${T.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${I.broadcastedIndicesToOffset(`outputIndices${k}`,T)};
            let offsetB${k} = ${O.broadcastedIndicesToOffset(`outputIndices${k}`,T)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${j}[${k}] = ${V}(${b(W,F)});
          `};h===9?S=`
            var data = vec4<u32>(0);
            ${A("data",0,"u32")}
            ${A("data",1,"u32")}
            ${A("data",2,"u32")}
            ${A("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:S=`
            ${A("outputData[global_idx]",0)}
            ${A("outputData[global_idx]",1)}
            ${A("outputData[global_idx]",2)}
            ${A("outputData[global_idx]",3)}
          `}return`
        ${r.registerUniform("vec_size","u32").declareVariables(I,O,T)}

        ${g??""}

        ${r.mainStart()}
        ${r.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${S}
      }`},QR=(r,e,t,n,i,o,a=t.dataType)=>{let s=t.dims.map(Number),l=n.dims.map(Number),d=!q.areEqual(s,l),h=s,g=q.size(s),b=!1,w=!1,T=[d];if(d){let I=dr.calcShape(s,l,!1);if(!I)throw new Error("Can't perform binary op on the given tensors");h=I.slice(),g=q.size(h);let O=q.size(s)===1,S=q.size(l)===1,A=s.length>0&&s[s.length-1]%4===0,j=l.length>0&&l[l.length-1]%4===0;T.push(O),T.push(S),T.push(A),T.push(j);let k=1;for(let V=1;V<h.length;V++){let W=s[s.length-V],F=l[l.length-V];if(W===F)k*=W;else break}k%4===0?(w=!0,b=!0):(O||S||A||j)&&(b=!0)}else b=!0;return T.push(b),{name:r,shaderCache:{hint:e+T.map(I=>I.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:I=>YR(I,s,l,h,b,d,w,i,t.dataType,n.dataType,a,o),getRunData:()=>({outputs:[{dims:h,dataType:a}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(q.size(h)/4)},...ae(s,l,h)]})}},gr=(r,e,t,n,i,o)=>{r.compute(QR(e,i??"",r.inputs[0],r.inputs[1],t,n,o))},M1=r=>{gr(r,"Add",(e,t)=>`${e}+${t}`)},z1=r=>{gr(r,"Div",(e,t)=>`${e}/${t}`)},B1=r=>{gr(r,"Equal",{scalar:(e,t)=>`u32(${e}==${t})`,vector:(e,t)=>`vec4<u32>(${e}==${t})`},void 0,void 0,9)},F1=r=>{gr(r,"Mul",(e,t)=>`${e}*${t}`)},V1=r=>{let e=Z("input",r.inputs[0].dataType,r.inputs[0].dims).type.value;gr(r,"Pow",{scalar:(n,i)=>`pow_custom(${n},${i})`,vector:(n,i)=>`pow_vector_custom(${n},${i})`},`
    fn pow_custom(a : ${e}, b : ${e}) -> ${e} {
      if (b == ${e}(0.0)) {
        return ${e}(1.0);
      } else if (a < ${e}(0.0) && f32(b) != floor(f32(b))) {
        return ${e}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${e}(1.0), round(f32(abs(b) % ${e}(2.0))) != 1.0) * ${e}(${e==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${e}>, b : vec4<${e}>) -> vec4<${e}> {
      // TODO: implement vectorized pow
      return vec4<${e}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},U1=r=>{gr(r,"Sub",(e,t)=>`${e}-${t}`)},G1=r=>{gr(r,"Greater",{scalar:(e,t)=>`u32(${e}>${t})`,vector:(e,t)=>`vec4<u32>(${e}>${t})`},void 0,void 0,9)},W1=r=>{gr(r,"Less",{scalar:(e,t)=>`u32(${e}<${t})`,vector:(e,t)=>`vec4<u32>(${e}<${t})`},void 0,void 0,9)},H1=r=>{gr(r,"GreaterOrEqual",{scalar:(e,t)=>`u32(${e}>=${t})`,vector:(e,t)=>`vec4<u32>(${e}>=${t})`},void 0,void 0,9)},q1=r=>{gr(r,"LessOrEqual",{scalar:(e,t)=>`u32(${e}<=${t})`,vector:(e,t)=>`vec4<u32>(${e}<=${t})`},void 0,void 0,9)}});var tM,nM,rM,iM,X1,Z1,J1=X(()=>{"use strict";$e();De();ht();je();tM=(r,e)=>{if(!r||r.length<1)throw new Error("too few inputs");let t=0,n=r[t],i=n.dataType,o=n.dims.length;r.forEach((a,s)=>{if(s!==t){if(a.dataType!==i)throw new Error("input tensors should be one type");if(a.dims.length!==o)throw new Error("input tensors should have the same shape");a.dims.forEach((l,d)=>{if(d!==e&&l!==n.dims[d])throw new Error("non concat dimensions must match")})}})},nM=(r,e)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${r}u>(${e});
    for (var i: u32 = 0u; i < ${r}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${r}u;
  }`,rM=(r,e)=>{let t=r.length,n=[];for(let i=0;i<t;++i){let o=e.setByOffset("global_idx",r[i].getByIndices("indices"));t===1?n.push(o):i===0?n.push(`if (inputIndex == ${i}u) { ${o} }`):i===t-1?n.push(`else { ${o} }`):n.push(`else if (inputIndex == ${i}) { ${o} }`)}return n.join(`
`)},iM=(r,e,t,n)=>{let i=q.size(t),o=new Array(r.length),a=new Array(r.length),s=0,l=[],d=[],h=[{type:12,data:i}];for(let I=0;I<r.length;++I)s+=r[I].dims[e],o[I]=s,d.push(r[I].dims.length),a[I]=Z(`input${I}`,n,d[I]),l.push("rank"),h.push({type:12,data:o[I]});for(let I=0;I<r.length;++I)h.push(...ae(r[I].dims));h.push(...ae(t));let g=ne("output",n,t.length),b=g.indicesGet("indices",e),w=Array.from(Array(o.length).keys()).map(I=>`uniforms.sizeInConcatAxis${I}`).join(","),T=I=>`

  ${(()=>{I.registerUniform("outputSize","u32");for(let O=0;O<r.length;O++)I.registerUniform(`sizeInConcatAxis${O}`,"u32");return I.declareVariables(...a,g)})()}

  ${nM(o.length,w)}

  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${g.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${b});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${o.length}u>(${w});
      ${b} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${rM(a,g)}
  }`;return{name:"Concat",shaderCache:{hint:`${e}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:t,dataType:n}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h}),getShaderSource:T}},X1=(r,e)=>{let t=r.inputs,n=t[0].dims,i=q.normalizeAxis(e.axis,n.length);tM(t,i);let o=n.slice();o[i]=t.reduce((s,l)=>s+(l.dims.length>i?l.dims[i]:0),0);let a=t.filter(s=>q.size(s.dims)>0);r.compute(iM(a,i,o,t[0].dataType),{inputs:a})},Z1=r=>Ae({axis:r.axis})});var bn,_n,vn,xs,Br=X(()=>{"use strict";$e();De();bn=(r,e,t="f32")=>{switch(r.activation){case"Relu":return`value = max(value, ${e}(0.0));`;case"Sigmoid":return`value = (${e}(1.0) / (${e}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${e}(${t}(uniforms.clip_min)), ${e}(${t}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${e}(0.0), min(${e}(1.0), ${t}(uniforms.alpha) * value + ${t}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${t}(uniforms.alpha) * value, value, value >= ${e}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${r.activation}`)}},_n=(r,e)=>{r.activation==="Clip"?e.push({type:1,data:r.clipMax},{type:1,data:r.clipMin}):r.activation==="HardSigmoid"?e.push({type:1,data:r.alpha},{type:1,data:r.beta}):r.activation==="LeakyRelu"&&e.push({type:1,data:r.alpha})},vn=(r,e)=>{r.activation==="Clip"?e.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):r.activation==="HardSigmoid"?e.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):r.activation==="LeakyRelu"&&e.push({name:"alpha",type:"f32"})},xs=r=>{let e=r?.activation||"";if(e==="HardSigmoid"){let[t,n]=r?.activation_params||[.2,.5];return{activation:e,alpha:t,beta:n}}else if(e==="Clip"){let[t,n]=r?.activation_params||[ix,ox];return{activation:e,clipMax:n,clipMin:t}}else if(e==="LeakyRelu"){let[t]=r?.activation_params||[.01];return{activation:e,alpha:t}}return{activation:e}}});var xt,Y1,Is=X(()=>{"use strict";xt=(r,e)=>{switch(r){case 1:return e;case 2:return`vec2<${e}>`;case 3:return`vec3<${e}>`;case 4:return`vec4<${e}>`;default:throw new Error(`${r}-component is not supported.`)}},Y1=r=>`
      ${r?"value = value + getBiasByOutputCoords(coords);":""}
      `});var Q1,eI=X(()=>{"use strict";Q1=r=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${r}.x), i32(${r}.y), i32(${r}.z), 1));
}
`});var xo,Ss,$s=X(()=>{"use strict";$e();De();je();Br();xo=(r,e,t,n,i)=>{let o=n-t;return`
      ${Array.from({length:t}).map((a,s)=>`
      if (${he(e.shape,s,e.rank)} != 1) {
        ${e.indicesSet(r,s,he(i,s+o,n))}
      } else {
        ${e.indicesSet(r,s,0)}
      }`).join("")}
`},Ss=(r,e,t,n,i=!1,o)=>{let a=r[0].dims,s=r[1].dims,l=a[a.length-2],d=s[s.length-1],h=a[a.length-1],g=Ke(d),b=Ke(h),w=Ke(l),T=q.size(t)/g/w,I=r.length>2,O=n?n.slice(0,-2):t.slice(0,-2),A=[q.size(O),l,d],j=[{type:12,data:T},{type:12,data:l},{type:12,data:d},{type:12,data:h}];_n(e,j),j.push(...ae(O,a,s)),I&&j.push(...ae(r[2].dims)),j.push(...ae(A));let k=V=>{let W=ys("batch_dims",r[0].dataType,O.length),F=Z("a",r[0].dataType,a.length,b),Y=Z("b",r[1].dataType,s.length,g),ee=ne("output",r[0].dataType,A.length,g),ue=it(ee.type.tensor),Te=bn(e,ee.type.value,ue),ge=[F,Y],we="";if(I){let ye=i?g:1;ge.push(Z("bias",r[2].dataType,r[2].dims.length,ye)),we=`${i?`value += bias[col / ${ye}];`:`value += ${ee.type.value}(bias[row + i]);`}`}let Oe=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];vn(e,Oe);let P=()=>{let ye=`var a_data: ${F.type.value};`;for(let xe=0;xe<b;xe++)ye+=`
              let b_data${xe} = b[(b_offset + (k + ${xe}) * uniforms.N + col) / ${g}];`;for(let xe=0;xe<w;xe++){ye+=`a_data = a[(a_offset + (row + ${xe}) * uniforms.K + k) / ${b}];`;for(let $=0;$<b;$++)ye+=`
            values[${xe}] = fma(${Y.type.value}(a_data${b===1?"":`[${$}]`}), b_data${$}, values[${xe}]);
`}return ye};return`
  ${V.registerUniforms(Oe).registerInternalVariables(W).declareVariables(...ge,ee)}
  ${V.mainStart()}
    ${V.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${g})) * ${g};
    var index1 = global_idx / (uniforms.N / ${g});
    let stride1 = uniforms.M / ${w};
    let row = (index1 % stride1) * ${w};
    let batch = index1 / stride1;

    ${t.length===2?"":`let batch_indices = ${W.offsetToIndices("batch")};`}

    var a_indices: ${F.type.indices};
    ${xo("a_indices",F,F.rank-2,W.rank,"batch_indices")}
    ${F.indicesSet("a_indices",F.rank-2,0)}
    ${F.indicesSet("a_indices",F.rank-1,0)}
    let a_offset = ${F.indicesToOffset("a_indices")};

    var b_indices: ${Y.type.indices};
    ${xo("b_indices",Y,Y.rank-2,W.rank,"batch_indices")}
    ${Y.indicesSet("b_indices",Y.rank-2,0)}
    ${Y.indicesSet("b_indices",Y.rank-1,0)}
    let b_offset = ${Y.indicesToOffset("b_indices")};
    var values: array<${ee.type.value}, ${w}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${b}) {
      ${P()}
    }
    for (var i = 0u; i < ${w}u; i++) {
      var value = values[i];
      ${we}
      ${Te}
      let cur_indices = ${ee.type.indices}(batch, row + i, col);
      let offset = ${ee.indicesToOffset("cur_indices")};
      ${ee.setByOffset(`offset / ${g}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${e.activation};${g};${b};${w};${i}`,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:o?o(t):t,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:j}),getShaderSource:k}}});var oM,aM,od,tI,sM,ad,uM,Io,As=X(()=>{"use strict";$e();De();je();Br();$s();Is();oM=(r,e)=>r?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${e?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${e?", batchIndices":""});
        `,aM=(r,e)=>r?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${e===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${e===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${e===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,od=(r,e,t="f32",n,i=!1,o=32,a=!1,s=32)=>{let l=e[1]*r[1],d=e[0]*r[0],h=i?l:o,g=i?o:l,b=h/e[0],w=o/e[1];if(!((i&&b===4&&r[1]===4||!i&&(b===3||b===4))&&h%e[0]===0&&o%e[1]===0&&r[0]===4))throw new Error(`If transposeA ${i} is true, innerElementSize ${b} and workPerThread[1] ${r[1]} must be 4.
      Otherwise, innerElementSize ${b} must be 3 or 4.
  tileAWidth ${h} must be divisible by workgroupSize[0]${e[0]}. tileInner ${o} must be divisible by workgroupSize[1] ${e[1]}. colPerThread ${r[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${b}<${t}>, ${h/b}>, ${g}>;
var<workgroup> mm_Bsub: array<array<vec4<${t}>, ${d/r[0]}>, ${o}>;

const rowPerThread = ${r[1]};
const colPerThread = ${r[0]};
const innerElementSize = ${b};
const tileInner = ${o};

@compute @workgroup_size(${e[0]}, ${e[1]}, ${e[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${a?"0":"i32(globalId.z)"};
  ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${a?`${Math.ceil(s/o)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${s}`:"0"};

  var acc: array<vec4<${t}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${w};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${oM(i,n)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${n?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${b===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${aM(i,b)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},tI=(r,e)=>r?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${e?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${e?", batchIndices":""});
            `,sM=r=>r?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",ad=(r,e,t="f32",n,i=!1,o=32,a=!1,s=32,l=!1)=>{let d=r[1]*e[1],h=r[0]*e[0],g=i?d:o,b=i?o:d;if(!(b%e[1]===0&&g%e[0]===0&&o%e[1]===0))throw new Error(`tileAHight ${b} must be divisible by workgroupSize[1]${e[1]}, tileAWidth ${g} must be divisible by workgroupSize[0]${e[0]}, tileInner ${o} must be divisible by workgroupSize[1]${e[1]}`);let w=b/e[1],T=g/e[0],I=o/e[1],O=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${h};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${b}; inputRow = inputRow + ${e[1]}) {
        for (var inputCol = localCol; inputCol < ${g}; inputCol = inputCol + ${e[0]}) {
          ${tI(i,n)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${o}; inputRow = inputRow + ${e[1]}) {
            for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${e[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${n?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${t}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${e[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${e[1]}];`:`mm_Asub[localRow + innerRow * ${e[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${e[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${e[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${w};
let tileColA = i32(localId.x) * ${T};
let tileRowB = i32(localId.y) * ${I};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${T}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${tI(i,n)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${I}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${n?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${t}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${sM(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${t}, ${g}>, ${b}>;
  var<workgroup> mm_Bsub : array<array<${t}, ${h}>, ${o}>;
  const rowPerThread = ${r[1]};
  const colPerThread = ${r[0]};
  const tileInner = ${o};

@compute @workgroup_size(${e[0]}, ${e[1]}, ${e[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${n?`let batchIndices = ${n.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(s/o)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${s}`:"0"};

    var acc : array<array<${t}, colPerThread>, rowPerThread>;
    ${O}
  }
`},uM=(r,e,t,n,i=!1)=>{let[o,a,s,l]=n,d=it(n[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${xt(r,d)} {
      var value = ${xt(r,d)}(0.0);
      let col = colIn * ${r};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${xo("aIndices",a,a.rank-2,o.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${xt(r,d)} {
      var value = ${xt(r,d)}(0.0);
      let col = colIn * ${r};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${s.type.indices};
        ${xo("bIndices",s,s.rank-2,o.rank,"batchIndices")}
        ${s.indicesSet("bIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("bIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${xt(r,d)}) {
      let col = colIn * ${r};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${e?`value = value + ${i?"bias[colIn]":`${xt(r,d)}(bias[row])`};`:""}
        ${t}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Io=(r,e,t,n,i=!1,o)=>{let a=r[0].dims,s=r[1].dims,l=a.slice(0,-2),d=s.slice(0,-2),h=n?n.slice(0,-2):t.slice(0,-2),g=q.size(h),b=a[a.length-2],w=a[a.length-1],T=s[s.length-1],I=w%4===0&&T%4===0,O=b<=8?[4,1,1]:[4,4,1],S=[8,8,1],A=[Math.ceil(T/S[0]/O[0]),Math.ceil(b/S[1]/O[1]),Math.ceil(g/S[2]/O[2])],j=I?4:1,k=[...l,b,w/j],V=k.length,W=[...d,w,T/j],F=W.length,Y=[g,b,T/j],ee=[{type:6,data:b},{type:6,data:T},{type:6,data:w}];_n(e,ee),ee.push(...ae(h,k,W));let ue=["rank","rank"],Te=r.length>2;Te&&(ee.push(...ae(r[2].dims)),ue.push("rank")),ee.push(...ae(Y));let ge=we=>{let Oe=h.length,P=ys("batchDims",r[0].dataType,Oe,1),ye=it(r[0].dataType),xe=Z("a",r[0].dataType,V,j),$=Z("b",r[1].dataType,F,j),oe=ne("result",r[0].dataType,Y.length,j),Le=[xe,$];if(Te){let te=i?j:1;Le.push(Z("bias",r[2].dataType,r[2].dims.length,te))}let ot=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];vn(e,ot);let gt=it(oe.type.tensor),Ce=bn(e,oe.type.value,gt),re=uM(j,Te,Ce,[P,xe,$,oe],i);return`
  ${we.registerUniforms(ot).registerInternalVariables(P).declareVariables(...Le,oe)}
  ${re}
  ${I?od(O,S,ye,P):ad(O,S,ye,P)}
                   `};return{name:"MatMul",shaderCache:{hint:`${O};${e.activation};${I};${i}`,inputDependencies:ue},getRunData:()=>({outputs:[{dims:o?o(t):t,dataType:r[0].dataType}],dispatchGroup:{x:A[0],y:A[1],z:A[2]},programUniforms:ee}),getShaderSource:ge}}});var lM,nI,rI=X(()=>{"use strict";$e();cr();je();Br();Is();eI();As();lM=(r,e,t,n,i=!1,o,a=4,s=4,l=4,d="f32")=>{let h=ue=>{switch(ue){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${ue} is not supported.`)}},g=ue=>{switch(ue){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${ue} is not supported.`)}},b=r?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,w=r?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,T=r?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",I=r?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",O=r?"row":"col",S=r?"col":"row",A=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${r?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${O} / outWidth;
    let outCol = ${O} % outWidth;

    let WRow = ${S} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${S} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${S} % inChannels;
    var resData = ${xt(a,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${T} && xCol >= 0 && xCol < ${I}) {
      ${b}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${h(a)}
    }
    return resData;`,j=r?e&&n?`
    let col = colIn * ${a};
    ${A}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${A}
    }
    return ${xt(a,d)}(0.0);`:n&&t?`
    let col = colIn * ${a};
    ${A}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${A}
    }
    return ${xt(a,d)}(0.0);`,k=r?n&&t?g(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${g(s)}
    }
    return ${xt(s,d)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${g(s)}
    }
    return ${xt(s,d)}(0.0);`,V=xt(l,d),W=r?xt(a,d):xt(s,d),F=r?xt(s,d):xt(a,d),Y=bn(o,V,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${W} {
      ${r?j:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${F} {
      ${r?k:j}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${V}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${r?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${w}
      ${Y1(i)}
      ${Y}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},nI=(r,e,t,n,i,o,a,s,l)=>{let d=e.format==="NHWC",h=d?r[0].dims[3]:r[0].dims[1],g=t[0],b=d?t[2]:t[3],w=d?t[1]:t[2],T=d?t[3]:t[1],I=d&&(h%4===0||h%3===0)&&T%4===0,O=d?T:b*w,S=d?b*w:T,A=[8,8,1],j=n<=8?[4,1,1]:[4,4,1],k=[Math.ceil(O/A[0]/j[0]),Math.ceil(S/A[1]/j[1]),Math.ceil(g/A[2]/j[2])];Ne("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let V=I?d&&h%4!==0?3:4:1,W=A[1]*j[1],F=A[0]*j[0],Y=Math.max(A[0]*V,A[1]),ee=n%W===0,ue=i%F===0,Te=o%Y===0,ge=I?[V,4,4]:[1,1,1],we=[{type:6,data:n},{type:6,data:i},{type:6,data:o},{type:6,data:[e.pads[0],e.pads[1]]},{type:6,data:e.strides},{type:6,data:e.dilations}];_n(e,we),we.push(...ae(r[0].dims,r[1].dims));let Oe=["rank","rank"];a&&(we.push(...ae(r[2].dims)),Oe.push("rank")),we.push(...ae(t));let P=ye=>{let xe=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];vn(e,xe);let $=I?4:1,oe=it(r[0].dataType),Le=`
      fn setOutputAtIndex(flatIndex : i32, value : ${I?`vec4<${oe}>`:oe}) {
        result[flatIndex] = ${I?`vec4<${oe}>`:oe}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${I?`vec4<${oe}>`:oe}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${I?"/ 4":""}, value);
      }`,ot=Z("x",r[0].dataType,r[0].dims.length,V===3?1:V),gt=Z("w",r[1].dataType,r[1].dims.length,$),Ce=[ot,gt],re=ne("result",r[0].dataType,t.length,$);if(a){let te=Z("bias",r[2].dataType,r[2].dims.length,$);Ce.push(te),Le+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${I?`vec4<${oe}>`:oe} {
          return bias[coords.${d?"w":"y"}${I?"/ 4":""}];
        }`}return`
        ${Q1("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${ye.registerUniforms(xe).declareVariables(...Ce,re)}
        ${Le}
        ${lM(d,ee,ue,Te,a,e,ge[0],ge[1],ge[2],oe)}
        ${I?od(j,A,oe,void 0,!d,Y):ad(j,A,oe,void 0,!d,Y,!1,void 0,s)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${e.cacheKey};${V};${I};${ee};${ue};${Te};${W};${F};${Y}`,inputDependencies:Oe},getRunData:()=>({outputs:[{dims:l?l(t):t,dataType:r[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:we}),getShaderSource:P}}});var cM,iI,Cs,dM,oI,fM,aI,sI,uI=X(()=>{"use strict";$e();cr();De();je();Br();Is();cM=r=>{let e=1;for(let t=0;t<r.length;t++)e*=r[t];return e},iI=r=>typeof r=="number"?[r,r,r]:r,Cs=(r,e)=>e<=1?r:r+(r-1)*(e-1),dM=(r,e,t,n=1)=>{let i=Cs(e,n);return Math.floor((r[0]*(t-1)-t+i)/2)},oI=(r,e,t,n,i)=>{i==null&&(i=dM(r,e[0],n[0]));let o=[0,0,0,t];for(let a=0;a<3;a++)r[a]+2*i>=e[a]&&(o[a]=Math.trunc((r[a]-e[a]+2*i)/n[a]+1));return o},fM=(r,e,t,n,i,o,a,s,l,d)=>{let h,g,b,w;if(r==="VALID"&&(r=0),typeof r=="number"){h={top:r,bottom:r,left:r,right:r,front:r,back:r};let T=oI([e,t,n,1],[s,l,d],1,[i,o,a],r);g=T[0],b=T[1],w=T[2]}else if(Array.isArray(r)){if(!r.every((I,O,S)=>I===S[0]))throw Error(`Unsupported padding parameter: ${r}`);h={top:r[0],bottom:r[1],left:r[2],right:r[3],front:r[4],back:r[5]};let T=oI([e,t,n,1],[s,l,d],1,[i,o,a],r[0]);g=T[0],b=T[1],w=T[2]}else if(r==="SAME_UPPER"){g=Math.ceil(e/i),b=Math.ceil(t/o),w=Math.ceil(n/a);let T=(g-1)*i+s-e,I=(b-1)*o+l-t,O=(w-1)*a+d-n,S=Math.floor(T/2),A=T-S,j=Math.floor(I/2),k=I-j,V=Math.floor(O/2),W=O-V;h={top:j,bottom:k,left:V,right:W,front:S,back:A}}else throw Error(`Unknown padding parameter: ${r}`);return{padInfo:h,outDepth:g,outHeight:b,outWidth:w}},aI=(r,e,t,n,i,o=!1,a="channelsLast")=>{let s,l,d,h,g;if(a==="channelsLast")[s,l,d,h,g]=r;else if(a==="channelsFirst")[s,g,l,d,h]=r;else throw new Error(`Unknown dataFormat ${a}`);let[b,,w,T,I]=e,[O,S,A]=iI(t),[j,k,V]=iI(n),W=Cs(w,j),F=Cs(T,k),Y=Cs(I,V),{padInfo:ee,outDepth:ue,outHeight:Te,outWidth:ge}=fM(i,l,d,h,O,S,A,W,F,Y),we=o?b*g:b,Oe=[0,0,0,0,0];return a==="channelsFirst"?Oe=[s,we,ue,Te,ge]:a==="channelsLast"&&(Oe=[s,ue,Te,ge,we]),{batchSize:s,dataFormat:a,inDepth:l,inHeight:d,inWidth:h,inChannels:g,outDepth:ue,outHeight:Te,outWidth:ge,outChannels:we,padInfo:ee,strideDepth:O,strideHeight:S,strideWidth:A,filterDepth:w,filterHeight:T,filterWidth:I,effectiveFilterDepth:W,effectiveFilterHeight:F,effectiveFilterWidth:Y,dilationDepth:j,dilationHeight:k,dilationWidth:V,inShape:r,outShape:Oe,filterShape:e}},sI=(r,e,t,n,i,o)=>{let a=o==="channelsLast",s=a?r[0].dims[3]:r[0].dims[1],l=!1,d=[64,1,1],h={x:t.map((A,j)=>j)},g=[Math.ceil(cM(h.x.map(A=>t[A]))/d[0]),1,1];Ne("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${g}`);let b=l?a&&s%4!==0?3:4:1,w=q.size(t),T=[{type:12,data:w},{type:12,data:n},{type:12,data:i},{type:12,data:e.strides},{type:12,data:e.dilations}];_n(e,T),T.push(...ae(r[0].dims,r[1].dims));let I=["rank","rank"],O=r.length===3;O&&(T.push(...ae(r[2].dims)),I.push("rank")),T.push(...ae(t));let S=A=>{let j=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:n.length},{name:"pads",type:"u32",length:i.length},{name:"strides",type:"u32",length:e.strides.length},{name:"dilations",type:"u32",length:e.dilations.length}];vn(e,j);let k=l?4:1,V=it(r[0].dataType),W=Z("x",r[0].dataType,r[0].dims.length,b===3?1:b),F=Z("W",r[1].dataType,r[1].dims.length,k),Y=[W,F],ee=ne("result",r[0].dataType,t.length,k),ue="";if(O){let we=Z("bias",r[2].dataType,r[2].dims.length,k);Y.push(we),ue+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${l?`vec4<${V}>`:V} {
          return bias[${a?he("coords",4,5):he("coords",1,5)}${l?"/ 4":""}];
        }`}let Te=xt(b,V),ge=bn(e,Te,V);return`
            ${ue}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${W.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${F.getByIndices("aIndices")};
            }
          ${A.registerUniforms(j).declareVariables(...Y,ee)}
          ${A.mainStart()}
          ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${ee.offsetToIndices("global_idx")};
              let batch = ${he("coords",0,W.rank)};
              let d2 = ${a?he("coords",W.rank-1,W.rank):he("coords",1,W.rank)};
              let xFRCCorner = vec3<u32>(${a?he("coords",1,W.rank):he("coords",2,W.rank)},
              ${a?he("coords",2,W.rank):he("coords",3,W.rank)},
              ${a?he("coords",3,W.rank):he("coords",4,W.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?he("uniforms.x_shape",1,W.rank):he("uniforms.x_shape",2,W.rank)};
              let xShapeZ = ${a?he("uniforms.x_shape",2,W.rank):he("uniforms.x_shape",3,W.rank)};
              let xShapeW = ${a?he("uniforms.x_shape",3,W.rank):he("uniforms.x_shape",4,W.rank)};
              let xShapeU = ${a?he("uniforms.x_shape",4,W.rank):he("uniforms.x_shape",1,W.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${a?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${a?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${a?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${a?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${O?"value = value + getBiasByOutputCoords(coords)":""};
              ${ge}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${e.cacheKey};${a};${b};${O}`,inputDependencies:I},getRunData:()=>({outputs:[{dims:t,dataType:r[0].dataType}],dispatchGroup:{x:g[0],y:g[1],z:g[2]},programUniforms:T}),getShaderSource:S}}});var lI,cI,dI=X(()=>{"use strict";$e();De();je();Br();lI=(r,e,t,n)=>{let i=r.length>2,o=i?"value += b[output_channel];":"",a=r[0].dims,s=r[1].dims,l=e.format==="NHWC",d=l?t[3]:t[1],h=d/e.group,g=l&&h>=4?Ke(d):1,b=q.size(t)/g,w=[{type:12,data:b},{type:12,data:e.dilations},{type:12,data:[e.strides[0],e.strides[1]]},{type:12,data:[e.pads[0],e.pads[1]]},{type:12,data:h}];_n(e,w),w.push(...ae(a,[s[0],s[1],s[2],s[3]/g]));let T=i?["rank","rank","rank"]:["rank","rank"];w.push(...ae([t[0],t[1],t[2],t[3]/g]));let I=O=>{let S=ne("output",r[0].dataType,t.length,g),A=it(S.type.tensor),j=bn(e,S.type.value,A),k=Z("x",r[0].dataType,a.length),V=Z("w",r[1].dataType,s.length,g),W=[k,V];i&&W.push(Z("b",r[2].dataType,r[2].dims,g));let F=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:e.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];vn(e,F);let Y=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${V.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${V.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${O.registerUniforms(F).declareVariables(...W,S)}

  ${O.mainStart()}
    ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${S.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${g} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${S.type.value} = ${S.type.value}(0);
    ${Y}
    ${o}
    ${j}
    ${S.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${e.cacheKey}_${g}`,inputDependencies:T},getRunData:()=>({outputs:[{dims:n?n(t):t,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:w}),getShaderSource:I}},cI=(r,e,t,n)=>{let i=r.length>2,o=Ke(t[3]),a=Ke(t[2]),s=q.size(t)/o/a,l=[r[0].dims[0],r[0].dims[1],r[0].dims[2],r[0].dims[3]/o],d=[r[1].dims[0],r[1].dims[1],r[1].dims[2],r[1].dims[3]/o],h=[t[0],t[1],t[2],t[3]/o],g=[{type:12,data:s},{type:6,data:[e.strides[0],e.strides[1]]},{type:6,data:[e.pads[0],e.pads[1]]}];_n(e,g),g.push(...ae(l,d,h));let b=(a-1)*e.strides[1]+d[1],w=T=>{let I=ne("output",r[0].dataType,h.length,o),O=it(I.type.tensor),S=bn(e,I.type.value,O),A=Z("x",r[0].dataType,l.length,o),j=Z("w",r[1].dataType,d.length,o),k=[A,j];i&&k.push(Z("b",r[2].dataType,r[2].dims,o));let V=i?"value += b[output_channel];":"",W=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return vn(e,W),`
  ${T.registerUniforms(W).declareVariables(...k,I)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${a}u;
    let col = (index1 % width1) * ${a}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${A.type.value}, ${b}>;
    var values: array<${I.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${b}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${A.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${A.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${j.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${V}
      ${S}
      ${I.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${e.cacheKey};${o};${a};${b};${d[0]};${d[1]}`,inputDependencies:i?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(t):t,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:g}),getShaderSource:w}}});var pM,sd,hM,ud,ld,fI,mM,gM,cd,pI=X(()=>{"use strict";De();rI();uI();As();dI();Br();$s();wr();pM=(r,e,t,n,i,o)=>{let a=r[0],s=r.slice(o?1:2,o?3:4),l=s.length,d=e[0],g=e.slice(2).map((T,I)=>T+(T-1)*(t[I]-1)),w=s.map((T,I)=>T+n[I]+n[I+l]).map((T,I)=>Math.floor((T-g[I]+i[I])/i[I]));return w.splice(0,0,a),w.splice(o?3:1,0,d),w},sd=[2,3,1,0],hM=(r,e)=>{if(!r||r.length!==2&&r.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(r[0].dims.length>5)throw new Error("greater than 5D is not supported");if(r[0].dims.length!==r[1].dims.length)throw new Error("filter does not have same dimension as input");let t=r[0].dims[e.format==="NHWC"?r[0].dims.length-1:1],n=r[1].dims[1]*e.group;if(t!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(r.length===3&&(r[2].dims.length!==1||r[1].dims[0]!==r[2].dims[0]))throw new Error("invalid bias");let i=r[0].dims.length-2;if(e.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(e.strides.length!==i)throw new Error(`strides should be ${i}D`);if(e.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(e.kernelShape.length!==0&&e.kernelShape.length!==r[1].dims.length-2)throw new Error("invalid kernel shape")},ud=(r,e)=>{let t=r.kernelShape.slice();t.length<e[1].dims.length-2&&t.push(...Array(e[1].dims.length-2-t.length).fill(0));for(let o=2;o<e[1].dims.length;++o)t[o-2]===0&&(t[o-2]=e[1].dims[o]);let n=r.pads.slice();ui.adjustPadsBasedOnAutoPad(e[0].dims,r.strides,r.dilations,t,n,r.format==="NHWC",r.autoPad);let i=Object.assign({},r);return Object.assign(i,{kernelShape:t,pads:n}),i},ld=r=>{let e=xs(r),t=r.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][r.auto_pad],i=r.dilations,o=r.group,a=r.kernel_shape,s=r.pads,l=r.strides,d=r.w_is_const();return{autoPad:n,format:t,dilations:i,group:o,kernelShape:a,pads:s,strides:l,wIsConst:d,...e,cacheKey:`${r.format};${e.activation};`}},fI=(r,e,t,n)=>{let i=t.format==="NHWC",o=pM(e[0].dims,e[1].dims,t.dilations,t.pads,t.strides,i);if(t.group!==1){let W=[e[0]];if(i){let Y=r.kernelCustomData.wT??r.compute($t(e[1],sd),{inputs:[1],outputs:[t.wIsConst?-2:-1]})[0];t.wIsConst&&!r.kernelCustomData.wT&&(r.kernelCustomData.wT=Y),W.push(Y)}else W.push(e[1]);e.length===3&&W.push(e[2]),!r.adapterInfo.isArchitecture("ampere")&&i&&e[1].dims[0]===t.group&&e[1].dims[1]===1&&t.dilations[0]===1&&t.dilations[1]===1?r.compute(cI(W,t,o,n),{inputs:W}):r.compute(lI(W,t,o,n),{inputs:W});return}let a=e.length===3,s=e[0].dims[i?1:2],l=e[0].dims[i?2:3],d=e[0].dims[i?3:1],h=e[1].dims[2],g=e[1].dims[3],b=o[i?1:2],w=o[i?2:3],T=o[i?3:1],I=i&&h===s&&g===l&&t.pads[0]===0&&t.pads[1]===0;if(I||h===1&&g===1&&t.dilations[0]===1&&t.dilations[1]===1&&t.strides[0]===1&&t.strides[1]===1&&t.pads[0]===0&&t.pads[1]===0){let W=o[0],F,Y,ee,ue=[];if(i){let we=r.kernelCustomData.wT??r.compute($t(e[1],sd),{inputs:[1],outputs:[t.wIsConst?-2:-1]})[0];if(t.wIsConst&&!r.kernelCustomData.wT&&(r.kernelCustomData.wT=we),I){let Oe=s*l*d;F=e[0].reshape([1,W,Oe]),Y=we.reshape([1,Oe,T]),ee=[1,W,T]}else F=e[0].reshape([W,s*l,d]),Y=we.reshape([1,d,T]),ee=[W,b*w,T];ue.push(F),ue.push(Y)}else F=e[0].reshape([W,d,s*l]),Y=e[1].reshape([1,T,d]),ee=[W,T,b*w],ue.push(Y),ue.push(F);a&&ue.push(e[2]);let Te=ee[2],ge=ue[0].dims[ue[0].dims.length-1];Te<8&&ge<8?r.compute(Ss(ue,t,o,ee,i,n),{inputs:ue}):r.compute(Io(ue,t,o,ee,i,n),{inputs:ue});return}let O=!0,S=r.kernelCustomData.wT??r.compute($t(e[1],sd),{inputs:[1],outputs:[t.wIsConst?-2:-1]})[0];t.wIsConst&&!r.kernelCustomData.wT&&(r.kernelCustomData.wT=S);let A=[e[0],S];a&&A.push(e[2]);let j=i?b*w:T,k=i?T:b*w,V=h*g*d;r.compute(nI(A,t,o,j,k,V,a,O,n),{inputs:A})},mM=(r,e)=>{let t=e.format==="NHWC",n=[r.inputs[0].reshape(t?[r.inputs[0].dims[0],1,r.inputs[0].dims[1],r.inputs[0].dims[2]]:[r.inputs[0].dims[0],r.inputs[0].dims[1],1,r.inputs[0].dims[2]]),r.inputs[1].reshape([r.inputs[1].dims[0],r.inputs[1].dims[1],1,r.inputs[1].dims[2]])];r.inputs.length===3&&n.push(r.inputs[2]);let i=[0,e.pads[0],0,e.pads[1]],o=[1].concat(e.strides),a=[1].concat(e.dilations),s=[1].concat(e.kernelShape),l=ud({...e,pads:i,strides:o,dilations:a,kernelShape:s},n);fI(r,n,l,d=>t?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},gM=(r,e,t)=>{let n=t.format==="NHWC"?"channelsLast":"channelsFirst",i=ud(t,e),o=t.autoPad==="NOTSET"?t.pads:t.autoPad,a=aI(e[0].dims,e[1].dims,t.strides,t.dilations,o,!1,n);r.compute(sI(e,i,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],n))},cd=(r,e)=>{if(hM(r.inputs,e),r.inputs[0].dims.length===3)mM(r,e);else if(r.inputs[0].dims.length===5)gM(r,r.inputs,e);else{let t=ud(e,r.inputs);fI(r,r.inputs,t)}}});var hI,mI=X(()=>{"use strict";$e();cr();De();je();hI=(r,e,t)=>{let n=r.length>2,i=e.outputShape,o=e.format==="NHWC",a=e.group,s=r[1].dims,l=s[2]/a,d=s[3],h=o?Ke(l):1,g=o&&d===1&&l>=4,b=g?Math.floor(l/4)*4:Math.floor(l/h)*h,w=l-b,T=o?Ke(d):1,I=o?d===1?h:T:1,O=q.size(i)/T,S=[Math.ceil(O/64),1,1];Ne("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${S}`);let A=["rank","rank"],j=[e.strides[0],e.strides[1]],k=[e.kernelShape[o?1:2],e.kernelShape[o?2:3]],V=[e.dilations[0],e.dilations[1]],W=[k[0]+(e.dilations[0]<=1?0:(e.kernelShape[o?1:2]-1)*(e.dilations[0]-1)),k[1]+(e.dilations[1]<=1?0:(e.kernelShape[o?2:3]-1)*(e.dilations[1]-1))],F=[W[0]-1-Math.floor((e.pads[0]+e.pads[2])/2),W[1]-1-Math.floor((e.pads[1]+e.pads[3])/2)],Y=[{type:12,data:O},{type:12,data:j},{type:12,data:k},{type:12,data:V},{type:12,data:W},{type:6,data:F},{type:12,data:b},{type:12,data:l},{type:12,data:d},...ae(r[0].dims,r[1].dims)];n&&(Y.push(...ae(r[2].dims)),A.push("rank")),Y.push(...ae(i));let ee=ue=>{let Te=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:j.length},{name:"filter_dims",type:"u32",length:k.length},{name:"dilations",type:"u32",length:k.length},{name:"effective_filter_dims",type:"u32",length:W.length},{name:"pads",type:"i32",length:F.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],ge=it(r[0].dataType),we=o?1:2,Oe=o?2:3,P=o?3:1,ye=Z("W",r[1].dataType,r[1].dims.length,I),xe=Z("Dy",r[0].dataType,r[0].dims.length,h),$=[xe,ye];n&&$.push(Z("bias",r[2].dataType,[i[P]].length,T));let oe=ne("result",r[0].dataType,i.length,T),Le=()=>{let Ce="";if(g)h===4?Ce+=`
        let xValue = ${xe.getByOffset("x_offset")};
        let wValue = ${ye.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:h===2?Ce+=`
          dotProd = dotProd + dot(vec4<${ge}>(${xe.getByOffset("x_offset")}, ${xe.getByOffset("x_offset + 1u")}), vec4<${ge}>(${ye.getByOffset("w_offset")}, ${ye.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:h===1&&(Ce+=`
          dotProd = dotProd + dot(vec4<${ge}>(${xe.getByOffset("x_offset")}, ${xe.getByOffset("x_offset + 1u")}, ${xe.getByOffset("x_offset + 2u")}, ${xe.getByOffset("x_offset + 3u")}), vec4<${ge}>(${ye.getByOffset("w_offset")}, ${ye.getByOffset("w_offset + 1u")}, ${ye.getByOffset("w_offset + 2u")}, ${ye.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Ce+=`
                  let xValue = ${o?xe.getByOffset(`${xe.indicesToOffset(`${xe.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h}`):xe.get("batch","inputChannel","idyR","idyC")};
        `,h===1)Ce+=`
          let w_offset = ${ye.indicesToOffset(`${ye.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${ye.getByOffset(`w_offset / ${I}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let re=0;re<h;re++)Ce+=`
            let wValue${re} = ${ye.getByOffset(`${ye.indicesToOffset(`${ye.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${re}, wOutChannel)`)} / ${I}`)};
            dotProd = dotProd + xValue[${re}] * wValue${re};`;return Ce},ot=()=>{if(w===0)return"";if(!g)throw new Error(`packInputAs4 ${g} is not true.`);let Ce="";if(h===1){Ce+="dotProd = dotProd";for(let re=0;re<w;re++)Ce+=`
            + ${xe.getByOffset(`x_offset + ${re}`)} * ${ye.getByOffset(`w_offset + ${re}`)}`;Ce+=";"}else if(h===2){if(w!==2)throw new Error(`Invalid inputChannelsRemainder ${w}.`);Ce+=`
          let xValue = ${xe.getByOffset("x_offset")};
          let wValue = ${ye.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Ce},gt=`
            let outputIndices = ${oe.offsetToIndices(`global_idx * ${T}`)};
            let batch = ${oe.indicesGet("outputIndices",0)};
            let d1 = ${oe.indicesGet("outputIndices",P)};
            let r = ${oe.indicesGet("outputIndices",we)};
            let c = ${oe.indicesGet("outputIndices",Oe)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${oe.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${ge}(dyRCorner) + ${ge}(wR)) / ${ge}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${ge}(uniforms.Dy_shape[${we}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${ge}(dyCCorner) + ${ge}(wC)) / ${ge}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${ge}(uniforms.Dy_shape[${Oe}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${g?`
                var x_offset = ${xe.indicesToOffset(`${xe.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${h};
                var w_offset = ${ye.indicesToOffset(`${ye.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${I};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${g?4:h}) {
                  ${Le()}
                  inputChannel = inputChannel + ${g?4:h};
                }
                ${ot()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${n?` + bias[d1 / ${T}]`:""};
            ${oe.setByOffset("global_idx","value")};
          `;return`
    ${ue.registerUniforms(Te).declareVariables(...$,oe)}
      ${ue.mainStart()}
      ${ue.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${gt}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${e.cacheKey};${h}${I}${T}${g}${w}`,inputDependencies:A},getRunData:()=>({dispatchGroup:{x:S[0],y:S[1],z:S[2]},outputs:[{dims:t?t(i):i,dataType:r[0].dataType}],programUniforms:Y}),getShaderSource:ee}}});var yM,bM,_M,gI,yI,vM,bI,wM,_I,vI=X(()=>{"use strict";mI();Br();wr();yM=(r,e,t,n,i,o)=>(r-1)*e+t+(n-1)*i+1-o,bM=(r,e,t,n,i)=>{let o=Math.floor(r/2);e==="SAME_UPPER"?(t[n]=o,t[i]=r-o):e==="SAME_LOWER"&&(t[n]=r-o,t[i]=o)},_M=(r,e,t,n,i,o,a,s,l,d)=>{let h=r.length-2,g=d.length===0;l.length<h&&l.push(...Array(h-l.length).fill(0));let b=r[0],w=e[s?3:1]*i;for(let T=0,I=r.length-h-(s?1:0);T<h;++T,++I){let O=r[I],S=g?O*a[T]:d[T],A=yM(O,a[T],o[T],e[I],t[T],S);bM(A,n,o,T,T+h),g&&d.push(a[T]*(O-1)+l[T]+(e[I]-1)*t[T]+1-o[T]-o[T+h])}d.splice(0,0,b),d.splice(s?3:1,0,w)},gI=(r,e)=>{let t=r.kernelShape.slice();if(r.kernelShape.length===0||r.kernelShape.reduce((g,b)=>g*b,1)===0){t.length=0;for(let g=2;g<e[1].dims.length;++g)t.push(e[1].dims[g])}let n=r.format==="NHWC";t.splice(0,0,e[1].dims[0]),t.splice(n?3:1,0,e[1].dims[1]);let i=r.pads.slice(),o=r.outputShape.slice(),a=r.outputPadding.slice(),s=e[0].dims,l=r.dilations.slice();if(l.reduce((g,b)=>g+b,0)===0){let g=e[0].dims.length-2;l=new Array(g).fill(1)}let d=r.strides.slice();if(d.reduce((g,b)=>g+b,0)===0){let g=e[0].dims.length-2;d=new Array(g).fill(1)}_M(s,t,l,r.autoPad,r.group,i,d,n,a,o);let h=Object.assign({},r);return Object.assign(h,{kernelShape:t,pads:i,outputPadding:a,outputShape:o,dilations:l,strides:d}),h},yI=r=>{let e=xs(r),t=r.format,n=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof r.autoPad>"u"?0:r.autoPad],i=r.dilations,o=r.group,a=r.kernelShape,s=r.pads,l=r.strides,d=r.wIsConst(),h=r.outputPadding,g=r.outputShape;return{autoPad:n,format:t,dilations:i,group:o,kernelShape:a,outputPadding:h,outputShape:g,pads:s,strides:l,wIsConst:d,...e,cacheKey:`${r.format};${e.activation};`}},vM=(r,e)=>{if(!r||r.length!==2&&r.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(r[0].dims.length!==4&&r[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(r[0].dims.length!==r[1].dims.length)throw new Error("filter does not have same dimension as input");let t=r[0].dims[e.format==="NHWC"?r[0].dims.length-1:1],n=r[1].dims[0];if(t!==n)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let i=r[1].dims[1]*e.group;if(r.length===3&&(r[2].dims.length!==1||r[2].dims[0]!==i))throw new Error("invalid bias");let o=r[0].dims.length-2;if(e.dilations.reduce((h,g)=>h+g,0)>0&&e.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(e.strides.reduce((h,g)=>h+g,0)>0&&e.strides.length!==o)throw new Error(`strides should be ${o}D`);if(e.pads.reduce((h,g)=>h+g,0)>0&&e.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(e.outputPadding.length!==o&&e.outputPadding.length!==0)throw new Error(`output_padding should be ${o}D`);if(e.kernelShape.reduce((h,g)=>h+g,0)>0&&e.kernelShape.length!==0&&e.kernelShape.length!==r[1].dims.length-2)throw new Error("invalid kernel shape");if(e.outputShape.length!==0&&e.outputShape.length!==r[0].dims.length-2)throw new Error("invalid output shape")},bI=(r,e,t,n)=>{let i=r.kernelCustomData.wT??r.compute($t(e[1],[2,3,0,1]),{inputs:[1],outputs:[t.wIsConst?-2:-1]})[0];t.wIsConst&&!r.kernelCustomData.wT&&(r.kernelCustomData.wT=i);let o=[e[0],i];e.length===3&&o.push(e[2]),r.compute(hI(o,t,n),{inputs:o})},wM=(r,e)=>{let t=e.format==="NHWC",n=[r.inputs[0].reshape(t?[r.inputs[0].dims[0],1,r.inputs[0].dims[1],r.inputs[0].dims[2]]:[r.inputs[0].dims[0],r.inputs[0].dims[1],1,r.inputs[0].dims[2]]),r.inputs[1].reshape([r.inputs[1].dims[0],r.inputs[1].dims[1],1,r.inputs[1].dims[2]])];r.inputs.length===3&&n.push(r.inputs[2]);let i=e.kernelShape;(i.length===0||i[0]===0)&&(i=[r.inputs[1].dims[2]]);let o=e.dilations;(o.length===0||o[0]===0)&&(o=[1]);let a=e.strides;(a.length===0||a[0]===0)&&(a=[1]);let s=e.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],a=[1].concat(a),o=[1].concat(o),i=[1].concat(i);let l=e.outputPadding;l=[0].concat(l);let d=gI({...e,pads:s,strides:a,dilations:o,kernelShape:i,outputPadding:l},n);bI(r,n,d,h=>t?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},_I=(r,e)=>{if(vM(r.inputs,e),r.inputs[0].dims.length===3)wM(r,e);else{let t=gI(e,r.inputs);bI(r,r.inputs,t)}}});var TM,wI,TI,xI=X(()=>{"use strict";$e();De();ht();je();TM=(r,e,t,n)=>{let i=q.size(e),o=e.length,a=Z("input",r,o),s=ne("output",r,o),l=t.dataType===6?t.getInt32Array()[0]:Number(t.getBigInt64Array()[0]),d=q.normalizeAxis(l,o),h=g=>{let b=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,w=he("uniforms.input_shape","uniforms.axis",o),T=n.reverse?b+(n.exclusive?" + 1":""):"0",I=n.reverse?w:b+(n.exclusive?"":" + 1");return`
                ${g.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,s)}
                ${g.mainStart()}
                  ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${s.offsetToIndices("global_idx")};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${T};
                  let last : i32 = ${I};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${s.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:n.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:e,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:d},...ae(e,e)]}),getShaderSource:h}},wI=(r,e)=>{let t=r.inputs[0].dims,n=r.inputs[0].dataType,i=r.inputs[1];r.compute(TM(n,t,i,e),{inputs:[0]})},TI=r=>{let e=r.exclusive===1,t=r.reverse===1;return Ae({exclusive:e,reverse:t})}});var xM,IM,SM,II,SI,$I=X(()=>{"use strict";$e();De();ht();je();xM=r=>{if(!r||r.length!==1)throw new Error("DepthToSpace requires 1 input.");if(r[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},IM=(r,e,t,n)=>{let i=[];i.push(`fn perm(i: ${n.type.indices}) -> ${t.type.indices} {
    var a: ${t.type.indices};`);for(let o=0;o<e;++o)i.push(t.indicesSet("a",r[o],`i[${o}]`));return i.push("return a;}"),i.join(`
`)},SM=(r,e)=>{let t,n,i,o,a,s,l=e.format==="NHWC",d=e.blocksize,h=e.mode==="DCR";l?([t,n,i,o]=r.dims,a=h?[t,n,i,d,d,o/d**2]:[t,n,i,o/d**2,d,d],s=h?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([t,n,i,o]=[r.dims[0],r.dims[2],r.dims[3],r.dims[1]],a=h?[t,d,d,o/d**2,n,i]:[t,o/d**2,d,d,n,i],s=h?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let g=r.reshape(a),b=g.dims.length,w=r.dataType,T=Z("a",w,b),I=ne("output",w,b),O=S=>`
  ${S.registerUniform("output_size","u32").declareVariables(T,I)}

  ${IM(s,b,T,I)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${I.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${I.setByOffset("global_idx",T.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${r.dims};${e.blocksize};${e.mode}`,inputDependencies:["rank"]},getRunData:S=>{let A=l?[t,n*d,i*d,o/d**2]:[t,o/d**2,n*d,i*d],j=q.size(A),k=g.dims,V=q.sortBasedOnPerm(k,s);return{outputs:[{dims:A,dataType:S[0].dataType}],dispatchGroup:{x:Math.ceil(j/64)},programUniforms:[{type:12,data:j},...ae(k,V)]}},getShaderSource:O}},II=(r,e)=>{xM(r.inputs),r.compute(SM(r.inputs[0],e))},SI=r=>Ae({blocksize:r.blocksize,mode:r.mode,format:r.format})});var dd,Os,AI,$M,AM,fd,pd,CI,CM,OI,PI,EI=X(()=>{"use strict";$e();De();ht();je();dd="[a-zA-Z]|\\.\\.\\.",Os="("+dd+")+",AI="^"+Os+"$",$M="("+Os+",)*"+Os,AM="^"+$M+"$",fd=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},pd=class{constructor(e,t){this.equation=t;this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[n,i]=t.includes("->")?t.split("->",2):[t,""];if(!n.match(RegExp(AM)))throw new Error("Invalid LHS term");if(n.split(",").forEach((s,l)=>{let d=e[l].dims.slice();if(!s.match(RegExp(AI)))throw new Error("Invalid LHS term");let h=this.processTerm(s,!0,d,l);this.lhs.push(h)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([s,l])=>l.count===1||s==="...").map(([s])=>s).join("");else if(!i.match(RegExp(Os)))throw new Error("Invalid RHS");i.match(RegExp(dd,"g"))?.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let l=this.symbolToInfo.get(s);if(l===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(l.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,n){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(n)}else i={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,i)}processTerm(e,t,n,i=-1){let o=n.length,a=!1,s=[],l=0;if(!e.match(RegExp(AI))&&!t&&e!=="")throw new Error("Invalid LHS term");let d=e.match(RegExp(dd,"g")),h=new fd(i);return d?.forEach((g,b)=>{if(g==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let w=o-d.length+1;if(w<0)throw new Error("Ellipsis out of bounds");if(s=n.slice(l,l+w),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let T=0;T<s.length;T++){let I=String.fromCharCode(48+T);h.addSymbol(I,b+T),this.addSymbol(I,n[l++],i)}}else h.addSymbol(g,b+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(g,n[l++],i)}),h}},CI=r=>r+"_max",CM=(r,e,t,n)=>{let o=r.map(h=>h.length).map((h,g)=>Z(`input${g}`,e,h)),a=q.size(n),s=ne("output",e,n.length),l=[...t.symbolToInfo.keys()].filter(h=>!t.rhs.symbolToIndices.has(h)),d=h=>{let g=[],b="var prod = 1.0;",w="var sum = 0.0;",T="sum += prod;",I=[],O=[],S=[],A=[],j=t.symbolToInfo.size===t.rhs.symbolToIndices.size;t.symbolToInfo.forEach((V,W)=>{if(t.rhs.symbolToIndices.has(W)){let F=t.rhs.symbolToIndices.get(W)?.[0];F!==void 0&&t.lhs.forEach((Y,ee)=>{if(V.inputIndices.includes(ee)){let ue=Y.symbolToIndices.get(W);if(ue===void 0)throw new Error("Invalid symbol error");ue.forEach(Te=>{g.push(`${o[ee].indicesSet(`input${ee}Indices`,Te,s.indicesGet("outputIndices",F))}`)})}})}else t.lhs.forEach((F,Y)=>{if(V.inputIndices.includes(Y)){let ee=F.symbolToIndices.get(W);if(ee===void 0)throw new Error("Invalid symbol error");ee.forEach(ue=>{I.push(`${o[Y].indicesSet(`input${Y}Indices`,ue,`${W}`)}`)}),A.push(`prod *= ${o[Y].getByIndices(`input${Y}Indices`)};`)}}),O.push(`for(var ${W}: u32 = 0; ${W} < uniforms.${CI(W)}; ${W}++) {`),S.push("}")});let k=j?[...g,`let sum = ${o.map((V,W)=>V.getByIndices(`input${W}Indices`)).join(" * ")};`]:[...g,w,...O,...I,b,...A,T,...S];return`
            ${h.registerUniforms(l.map(V=>({name:`${CI(V)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...o,s)}

            ${h.mainStart()}
            ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${o.map((V,W)=>`var input${W}Indices: ${o[W].type.indices};`).join(`
`)}
            ${k.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:t.equation,inputDependencies:r.map(()=>"rank")},getRunData:()=>{let h=l.filter(b=>t.symbolToInfo.has(b)).map(b=>({type:12,data:t.symbolToInfo.get(b)?.dimValue||0}));h.push({type:12,data:a});let g=r.map((b,w)=>[...ae(b)]).reduce((b,w)=>b.concat(w),h);return g.push(...ae(n)),{outputs:[{dims:n,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:g}},getShaderSource:d}},OI=(r,e)=>{let t=new pd(r.inputs,e.equation),n=t.outputDims,i=r.inputs.map((o,a)=>o.dims);r.compute(CM(i,r.inputs[0].dataType,t,n))},PI=r=>{let e=r.equation.replace(/\s+/g,"");return Ae({equation:e})}});var OM,DI,PM,EM,kI,jI=X(()=>{"use strict";$e();De();je();OM=r=>{if(!r||r.length!==2)throw new Error("Expand requires 2 input.");let e=r[0].dims,t=Array.from(r[1].getBigInt64Array(),Number),n=t.length<e.length?0:t.length-e.length,i=e.length<t.length?0:e.length-t.length;for(;n<t.length&&i<e.length;++n,++i)if(t[n]!==e[i]&&t[n]!==1&&e[i]!==1)throw new Error("Expand requires shape to be broadcastable to input")},DI=(r,e)=>{let t=r.length-e.length,n=[];for(let i=0;i<t;++i)n.push(r[i]);for(let i=0;i<e.length;++i)n.push(e[i]===1?r[i+t]:e[i]);return n},PM=(r,e)=>r.length>e.length?DI(r,e):DI(e,r),EM=r=>{let e=r[0].dims,t=Array.from(r[1].getBigInt64Array(),Number),n=PM(e,t),i=r[0].dataType,o=i===9||q.size(e)===1,a=i===9||e.length>0&&e[e.length-1]%4===0?4:1,s=o||n.length>0&&n[n.length-1]%4===0?4:1,l=Math.ceil(q.size(n)/s),d=g=>{let b=Z("input",i,e.length,a),w=ne("output",i,n.length,s),T;if(i===9){let I=(O,S,A="")=>`
          let outputIndices${S} = ${w.offsetToIndices(`outputOffset + ${S}u`)};
          let offset${S} = ${b.broadcastedIndicesToOffset(`outputIndices${S}`,w)};
          let index${S} = offset${S} / 4u;
          let component${S} = offset${S} % 4u;
          ${O}[${S}] = ${A}(${b.getByOffset(`index${S}`)}[component${S}]);
        `;T=`
        let outputOffset = global_idx * ${s};
        var data = vec4<u32>(0);
        ${I("data",0,"u32")}
        ${I("data",1,"u32")}
        ${I("data",2,"u32")}
        ${I("data",3,"u32")}
        ${w.setByOffset("global_idx","data")}
      }`}else T=`
        let outputIndices = ${w.offsetToIndices(`global_idx * ${s}`)};
        let inputOffset = ${b.broadcastedIndicesToOffset("outputIndices",w)};
        let data = ${w.type.value}(${b.getByOffset(`inputOffset / ${a}`)});
        ${w.setByOffset("global_idx","data")}
      }`;return`
    ${g.registerUniform("vec_size","u32").declareVariables(b,w)}
    ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${T}`},h=[{type:12,data:l},...ae(e,n)];return{name:"Expand",shaderCache:{hint:`${n.length};${a}${s}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:n,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h})}},kI=r=>{OM(r.inputs),r.compute(EM(r.inputs),{inputs:[0]})}});var DM,LI,NI=X(()=>{"use strict";$e();De();je();Ts();DM=r=>{let e=r[0].dataType,t=q.size(r[0].dims),n=q.size(r[1].dims),i=n%4===0,o=a=>{let s=Z("x",e,[1],4),l=Z("bias",e,[1],4),d=ne("y",e,[1],4),h=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],g=w=>`
      let bias${w}_offset: u32 = (global_idx * 4 + ${w}) % uniforms.bias_size;
      let bias${w} = ${l.getByOffset(`bias${w}_offset / 4`)}[bias${w}_offset % 4];`,b=i?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${g(0)}${g(1)}${g(2)}${g(3)}
      let bias = ${s.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(h).declareVariables(s,l,d)}

    ${rd(St(e))}

    ${a.mainStart(li)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${s.getByOffset("global_idx")};
      ${b}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",id("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${i}`,inputDependencies:["type","type"]},getShaderSource:o,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(t/4)},{type:12,data:n}],dispatchGroup:{x:Math.ceil(t/li/4)}})}},LI=r=>{r.inputs.length<2||q.size(r.inputs[1].dims)===0?E1(r):r.compute(DM(r.inputs))}});var kM,jM,RI,MI,zI=X(()=>{"use strict";$e();De();ht();je();kM=r=>{if(!r||r.length!==2)throw new Error("Gather requires 2 inputs.")},jM=(r,e)=>{let t=r[0].dims,n=r[1].dims,i=t.length,o=q.normalizeAxis(e.axis,i),a=t.slice(0);a.splice(o,1,...n);let s=t[o],l=r[0].dataType===9?4:1,d=Math.ceil(q.size(a)/l),h=[{type:12,data:d},{type:6,data:s},{type:12,data:o},...ae(r[0].dims,r[1].dims,a)],g=b=>{let w=Z("data",r[0].dataType,r[0].dims.length,l),T=Z("inputIndices",r[1].dataType,r[1].dims.length),I=ne("output",r[0].dataType,a.length,l),O=A=>{let j=n.length,k=`var indicesIndices${A}  = ${T.type.indices}(0);`;for(let V=0;V<j;V++)k+=`${j>1?`indicesIndices${A}[${V}]`:`indicesIndices${A}`} = ${a.length>1?`outputIndices${A}[uniforms.axis + ${V}]`:`outputIndices${A}`};`;k+=`
          var idx${A} = ${T.getByIndices(`indicesIndices${A}`)};
          if (idx${A} < 0) {
            idx${A} = idx${A} + uniforms.axisDimLimit;
          }
          var dataIndices${A} : ${w.type.indices};
        `;for(let V=0,W=0;V<i;V++)V===o?(k+=`${i>1?`dataIndices${A}[${V}]`:`dataIndices${A}`} = u32(idx${A});`,W+=j):(k+=`${i>1?`dataIndices${A}[${V}]`:`dataIndices${A}`} = ${a.length>1?`outputIndices${A}[${W}]`:`outputIndices${A}`};`,W++);return k},S;if(r[0].dataType===9){let A=(j,k,V="")=>`
          let outputIndices${k} = ${I.offsetToIndices(`outputOffset + ${k}u`)};
          ${O(k)};
          let offset${k} = ${w.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${j}[${k}] = ${V}(${w.getByOffset(`index${k}`)}[component${k}]);
        `;S=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${A("value",0,"u32")}
        ${A("value",1,"u32")}
        ${A("value",2,"u32")}
        ${A("value",3,"u32")}
        ${I.setByOffset("global_idx","value")}
      `}else S=`
      let outputIndices = ${I.offsetToIndices("global_idx")};
      ${O("")};
      let value = ${w.getByIndices("dataIndices")};
      ${I.setByOffset("global_idx","value")};
      `;return`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(w,T,I)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${S}
      }`};return{name:"Gather",shaderCache:{hint:e.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:h}),getShaderSource:g}},RI=r=>Ae({axis:r.axis}),MI=(r,e)=>{let t=r.inputs;kM(t),r.compute(jM(r.inputs,e))}});var LM,BI,FI,VI=X(()=>{"use strict";$e();De();je();LM=(r,e,t,n,i,o,a,s,l)=>{let d=[{type:12,data:o},{type:12,data:n},{type:12,data:i},{type:12,data:t},{type:12,data:a},{type:12,data:s},{type:12,data:l}],h=[o];d.push(...ae(e.dims,h));let g=b=>{let w=Z("indices_data",e.dataType,e.dims.length),T=ne("input_slice_offsets_data",12,1,1),I=[w,T],O=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:i.length},{name:"sizes_from_slice_dims_data",type:"u32",length:t.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${b.registerUniforms(O).declareVariables(...I)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${t.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return r.compute({name:"computeSliceOffsets",shaderCache:{hint:`${i.length}_${t.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:h,dataType:r.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:d}),getShaderSource:g},{inputs:[e],outputs:[-1]})[0]},BI=(r,e)=>{let t=r.inputs,n=t[0].dims,i=t[0].dataType,o=t[1].dims,a=o[o.length-1],s=q.sizeToDimension(o,o.length-1),l=q.sizeFromDimension(n,e.batchDims+a),d=q.sizeToDimension(n,e.batchDims),h=q.sizeFromDimension(n,e.batchDims),g=s/d,b=new Array(a),w=l;for(let k=0;k<a;++k)b[a-1-k]=w,w*=n[e.batchDims+a-1-k];let T=LM(r,t[1],b,e.batchDims,n,s,g,h,a),I=e.batchDims+a;if(I>n.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let O=o.slice(0,-1).concat(n.slice(I)),S=q.size(O),A=[{type:12,data:S},{type:12,data:l},...ae(t[0].dims,T.dims,O)],j=k=>{let V=Z("data",t[0].dataType,t[0].dims.length),W=Z("slice_offsets",12,T.dims.length),F=ne("output",t[0].dataType,O.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(V,W,F)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};r.compute({name:"GatherND",shaderCache:{hint:e.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:O,dataType:i}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:A}),getShaderSource:j},{inputs:[t[0],T]})},FI=r=>({batchDims:r.batch_dims,cacheKey:""})});var NM,RM,UI,GI,WI=X(()=>{"use strict";$e();De();ht();je();NM=(r,e)=>{if(r.length<3||r.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let t=q.normalizeAxis(e.quantizeAxis,r[0].dims.length),n=e.blockSize,i=r[0],o=r[2],a=r.length===4?r[3]:void 0;if(o.dims.length!==i.dims.length||!i.dims.map((s,l)=>l===t?Math.ceil(s/n)===o.dims[l]:s===o.dims[l]).reduce((s,l)=>s&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==i.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==o.dims.length||!a.dims.map((s,l)=>s===o.dims[l]).reduce((s,l)=>s&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},RM=(r,e)=>{let t=r[0].dims,n=r[1].dims,i=t.length,o=q.normalizeAxis(e.gatherAxis,i),a=q.normalizeAxis(e.quantizeAxis,i),s=t.slice(0);s.splice(o,1,...n);let l=q.size(s),d=r[2].dataType,g=r[0].dataType===22,b=[{type:12,data:l},{type:12,data:a},{type:12,data:o},{type:12,data:e.blockSize},...ae(...r.map((T,I)=>T.dims),s)],w=T=>{let I=Z("data",r[0].dataType,r[0].dims.length),O=Z("inputIndices",r[1].dataType,r[1].dims.length),S=Z("scales",r[2].dataType,r[2].dims.length),A=r.length>3?Z("zeroPoint",r[3].dataType,r[3].dims.length):void 0,j=ne("output",d,s.length),k=[I,O,S];A&&k.push(A);let V=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${T.registerUniforms(V).declareVariables(...k,j)}
        ${T.mainStart()}
        let output_indices = ${j.offsetToIndices("global_idx")};
        var indices_indices = ${O.type.indices}(0);
        ${n.length>1?`
          for (var i: u32 = 0; i < ${n.length}; i++) {
            let index = ${j.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${O.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${j.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${I.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${j.indicesGet("output_indices","i")};
          ${I.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${O.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${t[o]};
        }
        ${I.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${s.length}; i++) {
          let index = ${j.indicesGet("output_indices",`i + ${n.length} - 1`)};
          ${I.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${I.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${I.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${g?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${A?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${A.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${A.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${g?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${St(d)}(quantized_data - zero_point) * scale;
        ${j.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${e.cacheKey};${r.filter((T,I)=>I!==1).map(T=>T.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:r.length},(T,I)=>"rank")},getRunData:()=>({outputs:[{dims:s,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:b}),getShaderSource:w}},UI=(r,e)=>{let t=r.inputs;NM(t,e),r.compute(RM(r.inputs,e))},GI=r=>Ae({blockSize:r.blockSize,gatherAxis:r.gatherAxis,quantizeAxis:r.quantizeAxis})});var MM,zM,HI,qI,KI=X(()=>{"use strict";$e();De();ht();je();MM=r=>{if(!r||r.length!==2)throw new Error("GatherElements requires 2 inputs.");if(r[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(r[0].dims.length!==r[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},zM=(r,e)=>{let t=r[0].dims,n=r[0].dataType,i=t.length,o=r[1].dims,a=r[1].dataType,s=q.normalizeAxis(e.axis,i),l=t[s],d=o.slice(0),h=q.size(d),g=Z("input",n,i),b=Z("indicesInput",a,o.length),w=ne("output",n,d.length),T=[{type:12,data:h},{type:6,data:l},{type:12,data:s}];return T.push(...ae(t,o,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:T}),getShaderSource:S=>`
      ${S.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,b,w)}
      ${S.mainStart()}
      ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${w.offsetToIndices("global_idx")};

      var idx = ${b.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${g.type.indices}(outputIndices);
      ${g.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${g.getByIndices("inputIndices")};

      ${w.setByOffset("global_idx","value")};
  }`}},HI=r=>Ae({axis:r.axis}),qI=(r,e)=>{let t=r.inputs;MM(t),r.compute(zM(r.inputs,e))}});var BM,FM,XI,ZI,JI=X(()=>{"use strict";$e();De();je();BM=r=>{if(!r)throw new Error("Input is missing");if(r.length<2||r.length>3)throw new Error("Invaid input number.");if(r.length===3&&r[2].dims.length>2)throw new Error("Invalid input shape of C");if(r[0].dataType!==r[1].dataType||r.length===3&&r[0].dataType!==r[2].dataType)throw new Error("Input types are mismatched")},FM=(r,e)=>{let t=r[0].dims.slice(),n=r[1].dims.slice(),[i,o,a]=ls.getShapeOfGemmResult(t,e.transA,n,e.transB,r.length===3?r[2].dims:void 0),s=[i,o];if(!s)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(o/l),h=Math.ceil(i/l),g=!0,b=q.size(s),w=[{type:12,data:g?d:b},{type:12,data:i},{type:12,data:o},{type:12,data:a},{type:1,data:e.alpha},{type:1,data:e.beta}],T=["type","type"];r.length===3&&(w.push(...ae(r[2].dims)),T.push("rank")),w.push(...ae(s));let I=S=>{let A="";e.transA&&e.transB?A="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":e.transA&&!e.transB?A="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!e.transA&&e.transB?A="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!e.transA&&!e.transB&&(A="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let j=e.alpha===1?"":"value *= uniforms.alpha;",k=Z("a",r[0].dataType,r[0].dims),V=Z("b",r[1].dataType,r[1].dims),W=k.type.value,F=null,Y=[k,V];r.length===3&&(F=Z("c",r[2].dataType,r[2].dims.length),Y.push(F));let ee=ne("output",r[0].dataType,s.length);Y.push(ee);let ue=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${S.registerUniforms(ue).declareVariables(...Y)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${W}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${A}
    }

    ${j}
    ${F!=null?`let cOffset = ${F.broadcastedIndicesToOffset("vec2(m, n)",ee)}; value += ${W}(uniforms.beta) * ${F.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},O=S=>{let A=Z("a",r[0].dataType,r[0].dims),j=Z("b",r[1].dataType,r[1].dims),k=null,V=[A,j];r.length===3&&(k=Z("c",r[2].dataType,r[2].dims.length),V.push(k));let W=ne("output",r[0].dataType,s.length);V.push(W);let F=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],Y="",ee="";e.transA&&e.transB?(ee=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${A.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${j.type.value}(0);
      }
      `,Y="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):e.transA&&!e.transB?(ee=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${A.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${j.type.value}(0);
      }
      `,Y="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!e.transA&&e.transB?(ee=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${A.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${j.type.value}(0);
      }
      `,Y="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!e.transA&&!e.transB&&(ee=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${A.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${j.type.value}(0);
      }
      `,Y="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let ue=e.alpha===1?"":"value *= uniforms.alpha;";return`
  ${S.registerUniforms(F).declareVariables(...V)}
  var<workgroup> tile_a: array<array<${A.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${j.type.storage}, ${l}>, ${l}>;
  ${S.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${W.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${ee}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${Y}
      }
      workgroupBarrier();
    }

    ${ue}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",W)}; value += ${W.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return g?{name:"GemmShared",shaderCache:{hint:`${e.cacheKey}`,inputDependencies:T},getRunData:()=>({outputs:[{dims:s,dataType:r[0].dataType}],dispatchGroup:{x:d*h},programUniforms:w}),getShaderSource:O}:{name:"Gemm",shaderCache:{hint:`${e.cacheKey}`,inputDependencies:T},getRunData:()=>({outputs:[{dims:s,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:w}),getShaderSource:I}},XI=r=>{let e=r.transA,t=r.transB,n=r.alpha,i=r.beta;return{transA:e,transB:t,alpha:n,beta:i,cacheKey:`${r.transA};${r.transB};${r.alpha===1}`}},ZI=(r,e)=>{BM(r.inputs),r.compute(FM(r.inputs,e))}});var Tr,Fr,ki,ji,VM,UM,GM,WM,HM,qM,KM,XM,YI,QI,e2=X(()=>{"use strict";$e();De();ht();je();[Tr,Fr,ki,ji]=[0,1,2,3],VM=r=>{if(r[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(r[0].dims.length!==r[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(r[0].dims.length-2!==r[1].dims[r[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${r[0].dims.length-2}`);if(r[0].dims[0]!==r[1].dims[0])throw new Error("grid batch size must match input batch size")},UM=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,GM=r=>`
  fn gs_bicubic_interpolate(p: mat4x4<${r}>, x: f32, y: f32) -> ${r} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${r}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,WM=r=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${r.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,HM=r=>`
  ${r.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,qM=(r,e,t)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${e} {
     var pixel = ${e}(0);
     var indices = vec4<u32>(0);
     indices[${Tr}] = batch;
     indices[${Fr}] = channel;`+(()=>{switch(t.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${ki}] = u32(r);
            indices[${ji}] = u32(c);
          } else {
            return ${e}(0);
          }
        `;case"border":return`
          indices[${ki}] = u32(clamp(r, 0, H - 1));
          indices[${ji}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${ki}] = gs_reflect(r, border[1], border[3]);
          indices[${ji}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${t.paddingMode} is not supported`)}})()+`
    return ${r.getByIndices("indices")};
  }
`,KM=(r,e,t)=>(()=>{switch(t.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Tr}], indices[${Fr}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Tr}], indices[${Fr}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Tr}], indices[${Fr}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Tr}], indices[${Fr}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Tr}], indices[${Fr}], border);

          let dx2 = ${e}(f32(x2) - x);
          let dx1 = ${e}(x - f32(x1));
          let dy2 = ${e}(f32(y2) - y);
          let dy1 = ${e}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${e}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Tr}], indices[${Fr}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${t.mode} is not supported`)}})()+`${r.setByOffset("global_idx","result")}`,XM=(r,e)=>{let t=Z("x",r[0].dataType,r[0].dims.length),n=[r[1].dims[0],r[1].dims[1],r[1].dims[2]],i=Z("grid",r[1].dataType,n.length,2),o=[r[0].dims[0],r[0].dims[1],r[1].dims[1],r[1].dims[2]];e.format==="NHWC"&&(o=[r[0].dims[0],r[1].dims[1],r[1].dims[2],r[0].dims[3]],[Tr,Fr,ki,ji]=[0,3,1,2]);let a=ne("output",r[0].dataType,o.length),s=t.type.value,l=q.size(o),d=[{type:12,data:l},...ae(r[0].dims,n,o)],h=g=>`
  ${g.registerUniform("output_size","u32").declareVariables(t,i,a)}
  ${UM}
  ${GM(s)}
  ${WM(e)}
  ${HM(e)}
  ${qM(t,s,e)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${ki}]);
      let W_in = i32(uniforms.x_shape[${ji}]);

      ${e.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${a.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Tr}], indices[${ki}], indices[${ji}]);
      let nxy = ${i.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${KM(a,s,e)}
  }`;return{name:"GridSample",shaderCache:{hint:`${e.cacheKey}`,inputDependencies:["type","type"]},getRunData:g=>{let b=q.size(o);return{outputs:[{dims:o,dataType:g[0].dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:d}},getShaderSource:h}},YI=(r,e)=>{VM(r.inputs),r.compute(XM(r.inputs,e))},QI=r=>Ae({alignCorners:r.align_corners,mode:r.mode,paddingMode:r.padding_mode,format:r.format})});var Gt,YM,n2,t2,QM,So,r2,hd=X(()=>{"use strict";$e();De();ht();ms();vs();je();wr();Gt=(r,e)=>r.length>e&&r[e].dims.length>0?r[e]:void 0,YM=(r,e)=>{let t=r[0],n=Gt(r,1),i=Gt(r,2),o=Gt(r,3),a=Gt(r,4),s=Gt(r,5),l=Gt(r,6),d=Gt(r,7);if(t.dims.length!==3&&t.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=t.dims[0],g=t.dims[1],b=t.dims.length===3?t.dims[2]:e.numHeads*t.dims[4],w=g,T=0,I=0,O=Math.floor(b/e.numHeads);if(l&&d&&q.size(l.dims)&&q.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==h||l.dims[1]!==e.numHeads||l.dims[3]!==O)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==h||d.dims[1]!==e.numHeads||d.dims[3]!==O)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');T=l.dims[2],I=l.dims[2]}else if(l&&q.size(l.dims)||d&&q.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let S;if(n&&q.size(n.dims)>0){if(t.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(t.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(n.dims[2]!==t.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');S=2,w=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==e.numHeads||n.dims[3]!==2||n.dims[4]!==O)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');S=5,w=n.dims[1]}else{if(n.dims[1]!==e.numHeads||n.dims[3]!==O)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');S=0,w=n.dims[2]}}else{if(t.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(t.dims[2]!==e.numHeads||t.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');S=3}if(o&&q.size(o.dims)>0){if(o.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(n&&n.dims.length===5&&n.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let A=T+w,j=0;if(a&&q.size(a.dims)>0){j=8;let F=a.dims;throw F.length===1?F[0]===h?j=1:F[0]===3*h+2&&(j=3):F.length===2&&F[0]===h&&F[1]===A&&(j=5),j===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,V=b;if(i&&q.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(t.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(w!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');V=i.dims[2]}else{if(w!==i.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');V=i.dims[1]*i.dims[3],k=!0}}let W=!1;if(a&&q.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(s&&q.size(s.dims)>0){if(s.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(s.dims[0]!==h||s.dims[1]!==e.numHeads||s.dims[2]!==g||s.dims[3]!==A)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:g,pastSequenceLength:T,kvSequenceLength:w,totalSequenceLength:A,maxSequenceLength:I,inputHiddenSize:0,hiddenSize:b,vHiddenSize:V,headSize:O,vHeadSize:Math.floor(V/e.numHeads),numHeads:e.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:e.maskFilterValue,maskType:j,scale:e.scale,broadcastResPosBias:W,passPastInKv:k,qkvFormat:S}},n2=r=>Ae({...r}),t2=Ae({perm:[0,2,1,3]}),QM=(r,e,t,n,i,o,a)=>{let s=[n,i,o],l=q.size(s),d=[{type:12,data:l},{type:12,data:a},{type:12,data:o}],h=g=>{let b=ne("qkv_with_bias",e.dataType,s),w=Z("qkv",e.dataType,s),T=Z("bias",t.dataType,s),I=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${g.registerUniforms(I).declareVariables(w,T,b)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return r.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:s,dataType:e.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:h},{inputs:[e,t],outputs:[-1]})[0]},So=(r,e,t,n,i,o,a,s)=>{let l=o;if(a&&q.size(a.dims)>0){if(n===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=QM(r,o,a,e,n,t*i,s),l=l.reshape([e,n,t,i]),t===1||n===1?l:r.compute($t(l,t2.perm),{inputs:[l],outputs:[-1]})[0]}else return o.dims.length===3&&(l=o.reshape([e,n,t,i])),t===1||n===1?l:r.compute($t(l,t2.perm),{inputs:[l],outputs:[-1]})[0]},r2=(r,e)=>{let t=YM(r.inputs,e),n=r.inputs[0],i=Gt(r.inputs,1),o=Gt(r.inputs,2),a=Gt(r.inputs,3),s=Gt(r.inputs,4),l=Gt(r.inputs,5),d=Gt(r.inputs,6),h=Gt(r.inputs,7);if(n.dims.length===5)throw new Error("Packed QKV is not implemented");if(i?.dims.length===5)throw new Error("Packed KV is not implemented");let g=i&&o&&i.dims.length===4&&o.dims.length===4,b=So(r,t.batchSize,t.numHeads,t.sequenceLength,t.headSize,n,a,0);if(g)return Di(r,b,i,o,s,void 0,d,h,l,t);if(!i||!o)throw new Error("key and value must be provided");let w=So(r,t.batchSize,t.numHeads,t.kvSequenceLength,t.headSize,i,a,t.hiddenSize),T=So(r,t.batchSize,t.numHeads,t.kvSequenceLength,t.vHeadSize,o,a,2*t.hiddenSize);Di(r,b,w,T,s,void 0,d,h,l,t)}});var ez,tz,nz,rz,md,i2,o2,gd=X(()=>{"use strict";$e();De();ht();je();ez=r=>{if(!r||r.length<1)throw new Error("too few inputs")},tz=(r,e)=>{let t=[],n=e.numOutputs;return r[1].dims[0]>0&&(r[1].getBigInt64Array().forEach(i=>t.push(Number(i))),n=t.length),Ae({numOutputs:n,axis:e.axis,splitSizes:t})},nz=r=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${r}u; i += 1u ) {
    if (index < ${he("uniforms.size_in_split_axis","i",r)}) {
        return i;
    }
    }
    return ${r}u;
}`,rz=r=>{let e=r.length,t=[];for(let n=0;n<e;++n){let i=r[n].setByIndices("indices","input[global_idx]");e===1?t.push(i):n===0?t.push(`if (output_number == ${n}u) { ${i} }`):n===e-1?t.push(`else { ${i} }`):t.push(`else if (output_number == ${n}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${r[0].type.indices}, global_idx: u32) {
        ${t.join(`
`)}
      }`},md=(r,e)=>{let t=r[0].dims,n=q.size(t),i=r[0].dataType,o=q.normalizeAxis(e.axis,t.length),a=new Array(e.numOutputs),s=Z("input",i,t.length),l=new Array(e.numOutputs),d=[],h=[],g=0,b=[{type:12,data:n}];for(let T=0;T<e.numOutputs;T++){g+=e.splitSizes[T],l[T]=g;let I=t.slice();I[o]=e.splitSizes[T],h.push(I),a[T]=ne(`output${T}`,i,I.length),d.push({dims:h[T],dataType:r[0].dataType})}b.push({type:12,data:l},...ae(t,...h));let w=T=>`
  ${T.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(s,...a)}
  ${nz(l.length)}
  ${rz(a)}

  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${s.offsetToIndices("global_idx")};
    var index = ${s.indicesGet("indices",o)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${he("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${s.indicesSet("indices",o,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:e.cacheKey,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(n/64)},programUniforms:b})}},i2=(r,e)=>{ez(r.inputs);let t=r.inputs.length===1?e:tz(r.inputs,e);r.compute(md(r.inputs,t),{inputs:[0]})},o2=r=>{let e=r.axis,t=r.splitSizes,n=r.numOutputs<0?t.length:r.numOutputs;if(n!==t.length)throw new Error("numOutputs and splitSizes length must be equal");return Ae({axis:e,numOutputs:n,splitSizes:t})}});var iz,Ps,a2,yd=X(()=>{"use strict";$e();De();ht();je();iz=(r,e)=>{let[t,n,i,o]=r,{numHeads:a,rotaryEmbeddingDim:s}=e;if(t.dims.length!==3&&t.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${t.dims.length}`);if(!q.areEqual(n.dims,[])&&!q.areEqual(n.dims,[1])&&n.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(o.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${o.dims.length}`);if(!q.areEqual(i.dims,o.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(s>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=t.dims[0],d=t.dims[t.dims.length-2],h=i.dims[0],g=q.sizeFromDimension(t.dims,1)/d,b=s===0?i.dims[1]*2:g/a;if(s>b)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(n.dims.length===2){if(l!==n.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${n.dims[0]}`);if(d!==n.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${n.dims[1]}`)}if(b/2!==i.dims[1]&&s/2!==i.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`);if(d>h)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},Ps=(r,e)=>{let{interleaved:t,numHeads:n,rotaryEmbeddingDim:i,scale:o}=e,a=r[0].dims[0],s=q.sizeFromDimension(r[0].dims,1),l=r[0].dims[r[0].dims.length-2],d=s/l,h=r[2].dims[1],g=i===0?h*2:d/n,b=new Array(a,l,d/g,g-h),w=q.computeStrides(b),T=[{type:1,data:o},{type:12,data:b},{type:12,data:w},...r[0].dims.length===3?new Array({type:12,data:[s,d,g,1]}):[],...r[0].dims.length===4?new Array({type:12,data:[s,g,l*g,1]}):[],...ae(r[0].dims,r[1].dims,r[2].dims,r[3].dims,r[0].dims)],I=O=>{let S=Z("input",r[0].dataType,r[0].dims.length),A=Z("position_ids",r[1].dataType,r[1].dims.length),j=Z("cos_cache",r[2].dataType,r[2].dims.length),k=Z("sin_cache",r[3].dataType,r[3].dims.length),V=ne("output",r[0].dataType,r[0].dims.length);return O.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:b.length},{name:"global_strides",type:"u32",length:w.length},{name:"input_output_strides",type:"u32",length:w.length}]),`
        ${O.declareVariables(S,A,j,k,V)}

        ${O.mainStart(li)}
          let half_rotary_emb_dim = uniforms.${j.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${O.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${A.broadcastedIndicesToOffset("bsnh.xy",ne("",A.type.tensor,2))};
            let position_id =
                u32(${A.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${t});
            let j = i + select(half_rotary_emb_dim, 1, ${t});
            let re = ${S.getByOffset("i")} * ${j.get("position_id","bsnh[3]")} -
                ${S.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${V.setByOffset("i","re")}
            let im = ${S.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${S.getByOffset("j")} * ${j.get("position_id","bsnh[3]")};
            ${V.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${V.setByOffset("k",S.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ae({interleaved:t}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:I,getRunData:()=>({outputs:[{dims:r[0].dims,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(b)/li)},programUniforms:T})}},a2=(r,e)=>{iz(r.inputs,e),r.compute(Ps(r.inputs,e))}});var oz,az,s2,sz,u2,l2=X(()=>{"use strict";ht();$e();vs();hd();gd();wr();yd();je();oz=(r,e)=>{if(e.doRotary&&r.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let t=r[0],n=r[1],i=r[2],o=r[3],a=r[4];if(e.doRotary!==0&&r.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(e.localWindowSize!==-1)throw new Error("Local attention is not supported");if(e.softcap!==0)throw new Error("Softcap is not supported");if(e.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(e.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(t.dims.length!==3&&t.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let s=!1,l=t.dims[0],d=t.dims[1],h=t.dims.length===3?s?t.dims[2]/3:t.dims[2]:e.numHeads*t.dims[4],g=d,b=0,w=!n||n.dims.length===0,T=Math.floor(w?h/(e.numHeads+2*e.kvNumHeads):h/e.numHeads);w&&(h=T*e.numHeads);let I=o&&o.dims.length!==0,O=a&&a.dims.length!==0;if(I&&o.dims.length===4&&o.dims[0]===l&&o.dims[1]!==e.kvNumHeads&&o.dims[2]===e.kvNumHeads&&o.dims[3]===T)throw new Error("BSNH pastKey/pastValue is not supported");if(I&&O){if(o.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');b=o.dims[2]}else if(I||O)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let A=1;if(n&&n.dims.length>0){if(t.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(n.dims.length<3||n.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(t.dims[0]!==n.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(n.dims.length===3){if(t.dims[2]%n.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');g=n.dims[1]}else if(n.dims.length===5){if(n.dims[2]!==e.numHeads||n.dims[3]!==2||n.dims[4]!==T)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(i)throw new Error('Expect "value" be none when "key" has packed kv format.');g=n.dims[1]}else{if(n.dims[1]!==e.numHeads||n.dims[3]!==T)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');g=n.dims[2]}}else{if(t.dims.length!==3&&t.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(t.dims.length===5&&(t.dims[2]!==e.numHeads||t.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');A=3}let j=0,k=!1,V=e.kvNumHeads?T*e.kvNumHeads:h;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(t.dims[0]!==i.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(i.dims.length===3){if(g!==i.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');V=i.dims[2]}else{if(g!==i.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');V=i.dims[1]*i.dims[3],k=!0}}let W=r.length>4?r[5]:void 0;if(W&&W.dims.length!==1&&W.dims[0]!==l)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:l,sequenceLength:d,pastSequenceLength:b,kvSequenceLength:g,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:h,vHiddenSize:V,headSize:T,vHeadSize:Math.floor(V/e.kvNumHeads),numHeads:e.numHeads,kvNumHeads:e.kvNumHeads,nReps:e.numHeads/e.kvNumHeads,pastPresentShareBuffer:!1,maskType:j,scale:e.scale,broadcastResPosBias:!1,passPastInKv:k,qkvFormat:A}},az=Ae({perm:[0,2,1,3]}),s2=(r,e,t)=>{let n=e,i=t.kvNumHeads;return e.dims.length===3&&t.kvSequenceLength!==0&&(n=e.reshape([t.batchSize,t.kvSequenceLength,i,t.headSize]),n=r.compute($t(n,az.perm),{inputs:[n],outputs:[-1]})[0]),n},sz=(r,e,t,n)=>{let i=7,o=["type","type"],a=[r*e],s=r*e,l=[{type:12,data:s},{type:12,data:e},{type:12,data:r}],d=h=>{let g=Z("seq_lens",t.dataType,t.dims),b=Z("total_seq_lens",n.dataType,n.dims),w=ne("pos_ids",i,a),T=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${h.registerUniforms(T).declareVariables(g,b,w)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${b.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${g.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${w.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${w.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${w.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${r};${e}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l}),getShaderSource:d}},u2=(r,e)=>{let t=oz(r.inputs,e);if(r.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(r.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let n=r.inputs[0],i=r.inputs[1]&&r.inputs[1].dims.length>0?r.inputs[1]:void 0,o=r.inputs[2]&&r.inputs[2].dims.length>0?r.inputs[2]:void 0,a=r.inputs[3]&&r.inputs[3].dims.length!==0?r.inputs[3]:void 0,s=r.inputs[4]&&r.inputs[4].dims.length!==0?r.inputs[4]:void 0,l=r.inputs.length>4?r.inputs[5]:void 0,d=r.inputs.length>5?r.inputs[6]:void 0,h=t.kvNumHeads?t.kvNumHeads:t.numHeads,g=Ae({axis:2,numOutputs:3,splitSizes:[t.numHeads*t.headSize,h*t.headSize,h*t.headSize]}),[b,w,T]=!i&&!o?r.compute(md([n],g),{inputs:[n],outputs:[-1,-1,-1]}):[n,i,o],I,O;if(e.doRotary){let k=r.compute(sz(t.batchSize,t.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],V=r.inputs[7],W=r.inputs[8],F=Ae({interleaved:e.rotaryInterleaved!==0,numHeads:t.numHeads,rotaryEmbeddingDim:0,scale:e.scale}),Y=[b,k,V,W],ee=[-1];I=r.compute(Ps(Y,F),{inputs:Y,outputs:ee})[0],Y.splice(0,1,w);let ue=Ae({interleaved:e.rotaryInterleaved!==0,numHeads:t.kvNumHeads,rotaryEmbeddingDim:0,scale:e.scale});O=r.compute(Ps(Y,ue),{inputs:Y,outputs:ee})[0]}let S=So(r,t.batchSize,t.numHeads,t.sequenceLength,t.headSize,e.doRotary?I:b,void 0,0),A=s2(r,e.doRotary?O:w,t),j=s2(r,T,t);Di(r,S,A,j,void 0,void 0,a,s,void 0,t,l,d)}});var c2,uz,lz,d2,f2=X(()=>{"use strict";$e();De();wr();je();c2=(r,e,t,n,i,o,a,s)=>{let l=Ke(o),d=l===1?"f32":`vec${l}f`,h=l===1?"vec2f":`mat2x${l}f`,g=i*a,b=64;g===1&&(b=256);let w=[i,a,o/l],T=[i,a,2],I=["rank","type","type"],O=[];O.push(...ae(w,T));let S=A=>{let j=Z("x",e.dataType,3,l),k=Z("scale",t.dataType,t.dims),V=Z("bias",n.dataType,n.dims),W=ne("output",1,3,2),F=[j,k,V,W];return`
  var<workgroup> workgroup_shared : array<${h}, ${b}>;
  const workgroup_size = ${b}u;
  ${A.declareVariables(...F)}
  ${A.mainStart(b)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${j.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${h}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${yn("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${yn("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return r.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${s};${b}`,inputDependencies:I},getRunData:()=>({outputs:[{dims:T,dataType:1}],dispatchGroup:{x:g},programUniforms:O}),getShaderSource:S},{inputs:[e,t,n],outputs:[-1]})[0]},uz=(r,e,t)=>{let n=e[0].dims,i=n,o=2,a=n[0],s=n[1],l=q.sizeFromDimension(n,o),d=Ke(l),h=q.size(i)/d,g=c2(r,e[0],e[1],e[2],a,l,s,t.epsilon),b=[a,s,l/d],w=[a,s],T=["type","none"],I=O=>{let S=Z("x",e[0].dataType,b.length,d),A=Z("scale_shift",1,w.length,2),j=ne("output",e[0].dataType,b.length,d),k=[S,A,j];return`
  ${O.registerUniform("output_size","u32").declareVariables(...k)}
  ${O.mainStart()}
  ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${j.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${A.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${S.getByOffset("global_idx")} * ${j.type.value}(scale_shift.x) + ${j.type.value}(scale_shift.y);
      ${j.setByOffset("global_idx","value")};
  }`};r.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:T},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},...ae(b,w,b)]}),getShaderSource:I},{inputs:[e[0],g]})},lz=(r,e,t)=>{let n=e[0].dims,i=n,o=n[0],a=n[n.length-1],s=q.sizeFromDimension(n,1)/a,l=Ke(a),d=q.size(i)/l,h=[{type:12,data:s},{type:12,data:Math.floor(a/l)}],g=["type","type"],b=!1,w=[0,n.length-1];for(let S=0;S<n.length-2;S++)b=b||n[S+1]!==1,w.push(S+1);b=b&&n[n.length-1]!==1;let T=b?r.compute($t(r.inputs[0],w),{inputs:[r.inputs[0]],outputs:[-1]})[0]:r.inputs[0].reshape(Array.from({length:n.length},(S,A)=>n[w[A]])),I=c2(r,T,e[1],e[2],o,s,a,t.epsilon),O=S=>{let A=it(e[0].dataType),j=l===1?"vec2f":`mat${l}x2f`,k=F=>{let Y=F===0?"x":"y",ee=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${A}(${ee}(scale.${Y}))`;case 2:return`vec2<${A}>(${ee}(scale[0].${Y}, scale[1].${Y}))`;case 4:return`vec4<${A}>(${ee}(scale[0].${Y}, scale[1].${Y}, scale[2].${Y}, scale[3].${Y}))`;default:throw new Error(`Not supported compoents ${l}`)}},V=Z("input",e[0].dataType,e[0].dims,l),W=ne("output",e[0].dataType,i,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${V.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${j}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${W.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${S.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};r.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:h}),getShaderSource:O},{inputs:[e[0],I]})},d2=(r,e)=>{e.format==="NHWC"?lz(r,r.inputs,e):uz(r,r.inputs,e)}});var cz,dz,p2,h2=X(()=>{"use strict";$e();De();je();cz=r=>{if(!r||r.length<2)throw new Error("layerNorm requires at least 2 inputs.")},dz=(r,e,t)=>{let n=e.simplified,i=r[0].dims,o=r[1],a=!n&&r[2],s=i,l=q.normalizeAxis(e.axis,i.length),d=q.sizeToDimension(i,l),h=q.sizeFromDimension(i,l),g=q.size(o.dims),b=a?q.size(a.dims):0;if(g!==h||a&&b!==h)throw new Error(`Size of X.shape()[axis:] == ${h}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${g} and bias size of ${b}`);let w=[];for(let V=0;V<i.length;++V)V<l?w.push(i[V]):w.push(1);let T=Ke(h),I=["type","type"],O=[{type:12,data:d},{type:1,data:h},{type:12,data:Math.floor(h/T)},{type:1,data:e.epsilon}];a&&I.push("type");let S=t>1,A=t>2,j=V=>{let W=it(r[0].dataType),F=[Z("x",r[0].dataType,r[0].dims,T),Z("scale",o.dataType,o.dims,T)];a&&F.push(Z("bias",a.dataType,a.dims,T)),F.push(ne("output",r[0].dataType,s,T)),S&&F.push(ne("mean_data_output",1,w)),A&&F.push(ne("inv_std_output",1,w));let Y=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${V.registerUniforms(Y).declareVariables(...F)}
  ${V.mainStart()}
    ${V.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Qc("f32",T)};
    var mean_square_vector = ${Qc("f32",T)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${ci(W,T,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${yn("mean_vector",T)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${yn("mean_square_vector",T)} / uniforms.norm_size ${n?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${ci(W,T,"x[j + offset]")};
      let f32scale = ${ci(W,T,"scale[j]")};
      output[j + offset] = ${F[0].type.value}((f32input ${n?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${ci(W,T,"bias[j]")}`:""}
      );
    }

    ${S?"mean_data_output[global_idx] = mean":""};
    ${A?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:s,dataType:r[0].dataType}];return S&&k.push({dims:w,dataType:1}),A&&k.push({dims:w,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${T};${t};${n}`,inputDependencies:I},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:O}),getShaderSource:j}},p2=(r,e)=>{cz(r.inputs),r.compute(dz(r.inputs,e,r.outputCount))}});var fz,m2,g2=X(()=>{"use strict";De();$s();As();fz=r=>{if(!r||r.length!==2)throw new Error("MatMul requires 2 inputs.");if(r[0].dims[r[0].dims.length-1]!==r[1].dims[r[1].dims.length-2])throw new Error("shared dimension does not match.")},m2=r=>{fz(r.inputs);let e=dr.calcShape(r.inputs[0].dims,r.inputs[1].dims,!0);if(!e)throw new Error("Can't use matmul on the given tensors");let t=e[e.length-1],n=r.inputs[0].dims[r.inputs[0].dims.length-1];if(t<8&&n<8)r.compute(Ss(r.inputs,{activation:""},e));else{let i=e[e.length-2],o=q.size(r.inputs[0].dims.slice(0,-2)),a=q.size(r.inputs[1].dims.slice(0,-2));if(o!==1&&i===1&&a===1){let s=r.inputs[0].reshape([1,o,n]),l=r.inputs[1].reshape([1,n,t]),d=[1,o,t],h=[s,l];r.compute(Io(h,{activation:""},e,d),{inputs:h})}else r.compute(Io(r.inputs,{activation:""},e))}}});var pz,hz,mz,y2,b2,_2=X(()=>{"use strict";$e();De();ht();je();pz=(r,e)=>{if(r.length<3||r.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let t=r[0],n=t.dims.length;if(t.dims[n-1]!==e.k)throw new Error("The last dim of input shape does not match the k value");let i=Math.floor((e.k+e.blockSize-1)/e.blockSize),o=e.blockSize/8*e.bits,a=r[1];if(!q.areEqual(a.dims,[e.n,i,o]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let l=r[2].dims;if(q.size(l)!==e.n*i)throw new Error("scales input size error.");if(r.length===4){let h=r[3].dims,g=e.n*(e.bits===8?i:Math.floor((i*e.bits+7)/8));if(q.size(h)!==g)throw new Error("zeroPoints input size error.")}},hz=(r,e)=>{let t=r[0].dims,n=t.length,i=t[n-2],o=e.k,a=e.n,s=t.slice(0,n-2),l=q.size(s),h=r[1].dims[2]/4,g=r[0].dataType,b=Ke(e.k),w=Ke(h),T=Ke(a),I=s.concat([i,a]),O=i>1&&a/T%2===0?2:1,S=q.size(I)/T/O,A=64,j=[],k=[l,i,o/b],V=q.convertShape(r[1].dims).slice();V.splice(-1,1,h/w),j.push(...ae(k)),j.push(...ae(V)),j.push(...ae(r[2].dims)),r.length===4&&j.push(...ae(q.convertShape(r[3].dims)));let W=[l,i,a/T];j.push(...ae(W));let F=Y=>{let ee=k.length,ue=Z("a",r[0].dataType,ee,b),Te=Z("b",12,V.length,w),ge=Z("scales",r[2].dataType,r[2].dims.length),we=[ue,Te,ge],Oe=r.length===4?Z("zero_points",12,r[3].dims.length):void 0;Oe&&we.push(Oe);let P=W.length,ye=ne("output",r[0].dataType,P,T),xe=it(r[0].dataType),$=(()=>{switch(b){case 1:return`array<${xe}, 8>`;case 2:return`mat4x2<${xe}>`;case 4:return`mat2x4<${xe}>`;default:throw new Error(`${b}-component is not supported.`)}})(),oe=()=>{let gt=`
          // reuse a data
            var input_offset = ${ue.indicesToOffset(`${ue.type.indices}(batch, row, word_offset)`)};
            var a_data: ${$};
            for (var j: u32 = 0; j < ${8/b}; j++) {
              a_data[j] = ${ue.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let Ce=0;Ce<T*O;Ce++)gt+=`
            b_value = ${w===1?`b${Ce}_data`:`b${Ce}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${$}(${Array.from({length:4},(re,te)=>`${xe}(b_value_lower[${te}]), ${xe}(b_value_upper[${te}])`).join(", ")});
            b_dequantized_values = ${b===1?`${$}(${Array.from({length:8},(re,te)=>`(b_quantized_values[${te}] - ${Oe?`zero_point${Ce}`:"zero_point"}) * scale${Ce}`).join(", ")});`:`(b_quantized_values - ${$}(${Array(8).fill(`${Oe?`zero_point${Ce}`:"zero_point"}`).join(",")})) * scale${Ce};`};
            workgroup_shared[local_id.x * ${O} + ${Math.floor(Ce/T)}]${T>1?`[${Ce%T}]`:""} += ${Array.from({length:8/b},(re,te)=>`${b===1?`a_data[${te}] * b_dequantized_values[${te}]`:`dot(a_data[${te}], b_dequantized_values[${te}])`}`).join(" + ")};
          `;return gt},Le=()=>{let gt=`
            var col_index = col * ${T};
            ${Oe?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${xe}(8);`}
            `;for(let Ce=0;Ce<T*O;Ce++)gt+=`
            let scale${Ce} = ${ge.getByOffset("col_index * nBlocksPerCol + block")};
            ${Oe?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${Oe.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${Ce} = ${xe}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return gt},ot=()=>{let gt=`col_index = col * ${T};`;for(let Ce=0;Ce<T*O;Ce++)gt+=`
            let b${Ce}_data = ${Te.getByIndices(`${Te.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return gt+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${$};
            var b_dequantized_values: ${$};`,gt};return`
        var<workgroup> workgroup_shared: array<${ye.type.value}, ${O*A}>;
        ${Y.declareVariables(...we,ye)}
        ${Y.mainStart([A,1,1])}
          let output_indices = ${ye.offsetToIndices(`(global_idx / ${A}) * ${O}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${A}) {
            //process one block
            var word_offset: u32 = block * ${e.blockSize/b};
            ${Le()}
            for (var word: u32 = 0; word < ${h}; word += ${w}) {
              ${ot()}
              for (var i: u32 = 0; i < ${w}; i++) {
                ${oe()}
                word_offset += ${8/b};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${O}) {
            var output_value: ${ye.type.value} = ${ye.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${A}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${O};
            }
            ${ye.setByIndices(`${ye.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${e.blockSize};${e.bits};${b};${w};${T};${O};${A}`,inputDependencies:Array(r.length).fill("rank")},getRunData:()=>({outputs:[{dims:I,dataType:g}],dispatchGroup:{x:S},programUniforms:j}),getShaderSource:F}},mz=(r,e)=>{let t=r[0].dims,n=t.length,i=t[n-2],o=e.k,a=e.n,s=t.slice(0,n-2),l=q.size(s),h=r[1].dims[2]/4,g=r[0].dataType,b=Ke(e.k),w=Ke(h),T=s.concat([i,a]),I=128,O=a%8===0?8:a%4===0?4:1,S=I/O,A=S*w*8,j=A/b,k=A/e.blockSize,V=q.size(T)/O,W=[],F=[l,i,o/b],Y=q.convertShape(r[1].dims).slice();Y.splice(-1,1,h/w),W.push(...ae(F)),W.push(...ae(Y)),W.push(...ae(r[2].dims)),r.length===4&&W.push(...ae(q.convertShape(r[3].dims)));let ee=[l,i,a];W.push(...ae(ee));let ue=Te=>{let ge=F.length,we=Z("a",r[0].dataType,ge,b),Oe=Z("b",12,Y.length,w),P=Z("scales",r[2].dataType,r[2].dims.length),ye=[we,Oe,P],xe=r.length===4?Z("zero_points",12,r[3].dims.length):void 0;xe&&ye.push(xe);let $=ee.length,oe=ne("output",r[0].dataType,$),Le=it(r[0].dataType),ot=()=>{switch(b){case 1:return`
          let a_data0 = vec4<${Le}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Le}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Le}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Le}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${b}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${we.type.value}, ${j}>;
        var<workgroup> inter_results: array<array<${oe.type.value}, ${S}>, ${O}>;
        ${Te.declareVariables(...ye,oe)}
        ${Te.mainStart([S,O,1])}
          let output_indices = ${oe.offsetToIndices(`workgroup_index * ${O}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${k} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${j};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${j}; a_offset += ${I})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${we.getByIndices(`${we.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${we.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${k} + local_id.x;
            ${xe?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${xe.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Le}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${Le}(8);`}
            let scale = ${P.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${Oe.getByIndices(`${Oe.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${e.blockSize/b};
            for (var i: u32 = 0; i < ${w}; i++) {
              ${ot()}
              let b_value = ${w===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${Le}>(${Array.from({length:4},(gt,Ce)=>`${Le}(b_value_lower[${Ce}]), ${Le}(b_value_upper[${Ce}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${Le}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(gt,Ce)=>`${`dot(a_data${Ce}, b_dequantized_values[${Ce}])`}`).join(" + ")};
              word_offset += ${8/b};
            }
            workgroupBarrier();
          }

          if (local_idx < ${O}) {
            var output_value: ${oe.type.value} = ${oe.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${oe.setByIndices(`${oe.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${e.blockSize};${b};${w};${S};${O}`,inputDependencies:Array(r.length).fill("rank")},getRunData:()=>({outputs:[{dims:T,dataType:g}],dispatchGroup:{x:V},programUniforms:W}),getShaderSource:ue}},y2=(r,e)=>{pz(r.inputs,e),e.blockSize===32&&r.adapterInfo.isVendor("intel")&&r.adapterInfo.isArchitecture("gen-12lp")?r.compute(mz(r.inputs,e)):r.compute(hz(r.inputs,e))},b2=r=>Ae(r)});var gz,yz,bz,_z,vz,wz,Tz,xz,v2,w2=X(()=>{"use strict";$e();De();je();gz=r=>{if(!r||r.length<1)throw new Error("Too few inputs");if(r[0].dataType!==1&&r[0].dataType!==10)throw new Error("Input type must be float or float16.");if(r.length>=2){let e=r[0].dims.length*2===r[1].dims[0];if(r.length===4&&(e=r[3].dims[0]*2===r[1].dims[0]),!e)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},yz=(r,e,t)=>{let n="";for(let i=e-1;i>=0;--i)n+=`
            k = i32(${r.indicesGet("indices",i)}) - ${he("uniforms.pads",i,t)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${he("uniforms.x_shape",i,e)})) {
              break;
            }
            offset += k * i32(${he("uniforms.x_strides",i,e)});
        `;return`
          value = ${r.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${n}
            value = x[offset];
          }
      `},bz=(r,e,t)=>{let n="";for(let i=e-1;i>=0;--i)n+=`
                k = i32(${r.indicesGet("indices",i)}) - ${he("uniforms.pads",i,t)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${he("uniforms.x_shape",i,e)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${he("uniforms.x_shape",i,e)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${he("uniforms.x_strides",i,e)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},_z=(r,e,t)=>{let n="";for(let i=e-1;i>=0;--i)n+=`
                k = i32(${r.indicesGet("indices",i)}) - ${he("uniforms.pads",i,t)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${he("uniforms.x_shape",i,e)})) {
                  k = i32(${he("uniforms.x_shape",i,e)}) - 1;
                }
                offset += k * i32(${he("uniforms.x_strides",i,e)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},vz=(r,e,t)=>{let n="";for(let i=e-1;i>=0;--i)n+=`
                k = i32(${r.indicesGet("indices",i)}) - ${he("uniforms.pads",i,t)};
                if (k < 0)  {
                  k += i32(${he("uniforms.x_shape",i,e)}]);
                }
                if (k >= i32(${he("uniforms.x_shape",i,e)})) {
                  k -= i32(${he("uniforms.x_shape",i,e)});
                }
                offset += k * i32(${he("uniforms.x_strides",i,e)});
            `;return`
              var offset = 0;
              var k = 0;
              ${n}
              value = x[offset];
          `},wz=(r,e,t)=>{switch(t.mode){case 0:return yz(r,e,t.pads.length);case 1:return bz(r,e,t.pads.length);case 2:return _z(r,e,t.pads.length);case 3:return vz(r,e,t.pads.length);default:throw new Error("Invalid mode")}},Tz=(r,e)=>{let t=q.padShape(r[0].dims.slice(),e.pads),n=r[0].dims,i=q.size(t),o=[{type:12,data:i},{type:6,data:e.pads}],a=r.length>=3&&r[2].data;e.mode===0&&o.push({type:a?r[2].dataType:1,data:e.value}),o.push(...ae(r[0].dims,t));let s=["rank"],l=d=>{let h=ne("output",r[0].dataType,t.length),g=Z("x",r[0].dataType,n.length),b=g.type.value,w=wz(h,n.length,e),T=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:e.pads.length}];return e.mode===0&&T.push({name:"constant_value",type:a?b:"f32"}),`
            ${d.registerUniforms(T).declareVariables(g,h)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${h.offsetToIndices("global_idx")};

            var value = ${b}(0);
            ${w}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${e.mode}${a}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:t,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(q.size(t)/64)},programUniforms:o}),getShaderSource:l}},xz=(r,e)=>{if(r.length>1){let t=r[1].getBigInt64Array(),n=r.length>=3&&r[2].data?r[2].dataType===10?r[2].getUint16Array()[0]:r[2].getFloat32Array()[0]:0,i=r[0].dims.length,o=new Int32Array(2*i).fill(0);if(r.length>=4){let s=r[3].getBigInt64Array();for(let l=0;l<s.length;l++)o[Number(s[l])]=Number(t[l]),o[Number(s[l])+i]=Number(t[l+s.length])}else t.forEach((s,l)=>o[Number(l)]=Number(s));let a=[];return o.forEach(s=>a.push(s)),{mode:e.mode,value:n,pads:a}}else return e},v2=(r,e)=>{gz(r.inputs);let t=xz(r.inputs,e);r.compute(Tz(r.inputs,t),{inputs:[0]})}});var Es,T2,x2,I2,S2,Iz,Sz,$2,A2,C2,O2,P2,E2,D2,k2,j2,L2,N2,R2,M2=X(()=>{"use strict";Et();$e();De();je();Es=r=>{if(Pe.webgpu.validateInputContent&&(!r||r.length!==1))throw new Error("Pool ops requires 1 input.")},T2=(r,e,t)=>{let n=e.format==="NHWC",i=r.dims.slice();n&&i.splice(1,0,i.pop());let o=Object.hasOwnProperty.call(e,"dilations"),a=e.kernelShape.slice(),s=e.strides.slice(),l=o?e.dilations.slice():[],d=e.pads.slice();ui.adjustPoolAttributes(t,i,a,s,l,d);let h=ui.computePoolOutputShape(t,i,s,l,a,d,e.autoPad),g=Object.assign({},e);o?Object.assign(g,{kernelShape:a,strides:s,pads:d,dilations:l,cacheKey:e.cacheKey}):Object.assign(g,{kernelShape:a,strides:s,pads:d,cacheKey:e.cacheKey});let b=h.slice();return b.push(b.splice(1,1)[0]),[g,n?b:h]},x2=(r,e)=>{let t=e.format==="NHWC",n=q.size(r),i=q.size(e.kernelShape),o=[{type:12,data:n},{type:12,data:i}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(e.kernelShape.length<=2){let s=e.kernelShape[e.kernelShape.length-1],l=e.strides[e.strides.length-1],d=e.pads[e.pads.length/2-1],h=e.pads[e.pads.length-1],g=!!(d+h);o.push({type:12,data:s},{type:12,data:l},{type:12,data:d},{type:12,data:h}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let b=!1;if(e.kernelShape.length===2){let w=e.kernelShape[e.kernelShape.length-2],T=e.strides[e.strides.length-2],I=e.pads[e.pads.length/2-2],O=e.pads[e.pads.length-2];b=!!(I+O),o.push({type:12,data:w},{type:12,data:T},{type:12,data:I},{type:12,data:O}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[o,a,!0,g,b]}else{if(t)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let s=q.computeStrides(e.kernelShape);o.push({type:12,data:s},{type:12,data:e.pads},{type:12,data:e.strides}),a.push({name:"kernelStrides",type:"u32",length:s.length},{name:"pads",type:"u32",length:e.pads.length},{name:"strides",type:"u32",length:e.strides.length});let l=e.pads.reduce((d,h)=>d+h);return[o,a,!!l,!1,!1]}},I2=(r,e,t,n,i,o,a,s,l,d,h,g)=>{let b=i.format==="NHWC",w=e.type.value,T=ne("output",e.type.tensor,n);if(i.kernelShape.length<=2){let I="",O="",S="",A=t-(b?2:1);if(h?I=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${A}] = indices[${A}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${A}] < 0 || xIndices[${A}]
                      >= uniforms.x_shape[${A}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${e.indicesToOffset("xIndices")}];
                  ${o}
                }`:I=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${A}] = indices[${A}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${e.indicesToOffset("xIndices")}];
                  ${o}
                }`,i.kernelShape.length===2){let k=t-(b?3:2);g?O=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${k}] < 0 || xIndices[${k}] >= uniforms.x_shape[${k}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:O=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                `,S=`
              }
            `}return`
            ${r.registerUniforms(l).declareVariables(e,T)}

            ${r.mainStart()}
              ${r.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${T.offsetToIndices("global_idx")};
              var xIndices = ${T.offsetToIndices("global_idx")};

              var value = ${w}(${s});
              var pad = 0;
              ${O}
              ${I}
              ${S}
              ${a}

              output[global_idx] = value;
            }`}else{if(b)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let I=i.kernelShape.length,O=i.pads.length,S="";return d?S=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${e.indicesToOffset("xIndices")}];
                ${o}
              }`:S=`
              }
              let x_val = x[${e.indicesToOffset("xIndices")}];
              ${o}
            `,`
            ${r.registerUniforms(l).declareVariables(e,T)}

            ${r.mainStart()}
              ${r.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${T.offsetToIndices("global_idx")};
              var xIndices = ${T.offsetToIndices("global_idx")};

              var offsets: array<u32, ${I}>;

              var value = ${w}(${s});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${I-1}u; j++) {
                  offsets[j] = offset / ${he("uniforms.kernelStrides","j",I)};
                  offset -= offsets[j] * ${he("uniforms.kernelStrides","j",I)};
                }
                offsets[${I-1}] = offset;

                isPad = false;
                for (var j = ${t-I}u; j < ${t}u; j++) {
                  xIndices[j] = indices[j] * ${he("uniforms.strides",`j - ${t-I}u`,I)}
                    + offsets[j - ${t-I}u] - ${he("uniforms.pads","j - 2u",O)};
                  ${S}
              }
              ${a}

              output[global_idx] = value;
            }`}},S2=r=>`${r.format};${r.ceilMode};${r.autoPad};${r.kernelShape.length}`,Iz=r=>`${S2(r)};${r.countIncludePad}`,Sz=r=>`${S2(r)};${r.storageOrder};${r.dilations}`,$2=r=>({format:r.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][r.auto_pad],ceilMode:r.ceil_mode,kernelShape:r.kernel_shape,strides:r.strides,pads:r.pads}),A2=(r,e,t,n)=>{let[i,o]=T2(e,n,t),a=Z("x",e.dataType,e.dims.length),s=a.type.value,l="value += x_val;",d="";i.countIncludePad?d+=`value /= ${s}(uniforms.kernelSize);`:d+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[h,g,b,w,T]=x2(o,i);h.push(...ae(e.dims,o));let I=["rank"];return{name:r,shaderCache:{hint:`${n.cacheKey};${b};${w};${T}`,inputDependencies:I},getRunData:()=>({outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(q.size(o)/64)},programUniforms:h}),getShaderSource:O=>I2(O,a,e.dims.length,o.length,i,l,d,0,g,b,w,T)}},C2=r=>{let e=r.count_include_pad!==0,t=$2(r);if(t.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let n={countIncludePad:e,...t,cacheKey:""};return{...n,cacheKey:Iz(n)}},O2=(r,e)=>{Es(r.inputs),r.compute(A2("AveragePool",r.inputs[0],!1,e))},P2={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},E2=r=>{let e=r.format;return{format:e,...P2,cacheKey:e}},D2=(r,e)=>{Es(r.inputs),r.compute(A2("GlobalAveragePool",r.inputs[0],!0,e))},k2=(r,e,t,n)=>{let[i,o]=T2(e,n,t),a=`
      value = max(x_val, value);
    `,s="",l=Z("x",e.dataType,e.dims.length),d=["rank"],[h,g,b,w,T]=x2(o,i);return h.push(...ae(e.dims,o)),{name:r,shaderCache:{hint:`${n.cacheKey};${b};${w};${T}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(q.size(o)/64)},programUniforms:h}),getShaderSource:I=>I2(I,l,e.dims.length,o.length,i,a,s,e.dataType===10?-65504:-1e5,g,b,w,T)}},j2=(r,e)=>{Es(r.inputs),r.compute(k2("MaxPool",r.inputs[0],!1,e))},L2=r=>{let e=r.storage_order,t=r.dilations,n=$2(r);if(e!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(n.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let i={storageOrder:e,dilations:t,...n,cacheKey:""};return{...i,cacheKey:Sz(i)}},N2=r=>{let e=r.format;return{format:e,...P2,cacheKey:e}},R2=(r,e)=>{Es(r.inputs),r.compute(k2("GlobalMaxPool",r.inputs[0],!0,e))}});var Az,Cz,z2,B2,F2=X(()=>{"use strict";$e();De();ht();je();Az=(r,e)=>{if(r.length<2||r.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(r.length===3&&r[1].dims===r[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(r.length===3&&r[0].dataType!==r[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(r[0].dataType===6&&r.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(r[1].dims.length!==0&&r[1].dims.length!==1&&r[1].dims.length!==r[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(r.length>2){if(r[0].dataType!==r[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(r[1].dims.length!==r[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!r[1].dims.map((t,n)=>t===r[2].dims[n]).reduce((t,n)=>t&&n,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(e.blockSize>0){if(r[1].dims.length===0||r[1].dims.length===1&&r[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!r[1].dims.map((i,o)=>o===e.axis||i===r[0].dims[o]).reduce((i,o)=>i&&o,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(r[1].dims.length!==r[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let t=r[0].dims[e.axis],n=r[1].dims[e.axis];if(e.blockSize<Math.ceil(t/n)||e.blockSize>Math.ceil(t/(n-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Cz=(r,e)=>{let t=q.normalizeAxis(e.axis,r[0].dims.length),n=r[0].dataType,i=n===3,o=r[0].dims,a=r[1].dataType,s=q.size(o),l=n===3||n===2,d=l?[Math.ceil(q.size(r[0].dims)/4)]:r[0].dims,h=r[1].dims,g=r.length>2?r[2]:void 0,b=g?l?[Math.ceil(q.size(g.dims)/4)]:g.dims:void 0,w=h.length===0||h.length===1&&h[0]===1,T=w===!1&&h.length===1,I=Ke(s),O=w&&(!l||I===4),S=O?I:1,A=O&&!l?I:1,j=Z("input",l?12:n,d.length,A),k=Z("scale",a,h.length),V=g?Z("zero_point",l?12:n,b.length):void 0,W=ne("output",a,o.length,S),F=[j,k];V&&F.push(V);let Y=[d,h];g&&Y.push(b);let ee=[{type:12,data:s/S},{type:12,data:t},{type:12,data:e.blockSize},...ae(...Y,o)],ue=Te=>{let ge=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${Te.registerUniforms(ge).declareVariables(...F,W)}
      ${Te.mainStart()}
          ${Te.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${W.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${j.getByOffset("global_idx / 4")};
            let x_vec = ${i?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${S===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${j.getByOffset("global_idx")};`};

          // Set scale input
          ${w?`let scale_value= ${k.getByOffset("0")}`:T?`
            let scale_index = ${W.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${V?w?l?`
                let zero_point_input = ${V.getByOffset("0")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${V.getByOffset("0")}`:T?l?`
                let zero_point_index = ${W.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${V.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${W.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${V.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${V.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${i?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${V.getByIndices("scale_indices")};`:`let zero_point_value = ${l?i?"i32":"u32":j.type.value}(0);`};
      // Compute and write output
      ${W.setByOffset("global_idx",`${W.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:e.cacheKey,inputDependencies:V?["rank","rank","rank"]:["rank","rank"]},getShaderSource:ue,getRunData:()=>({outputs:[{dims:o,dataType:a}],dispatchGroup:{x:Math.ceil(s/S/64),y:1,z:1},programUniforms:ee})}},z2=(r,e)=>{Az(r.inputs,e),r.compute(Cz(r.inputs,e))},B2=r=>Ae({axis:r.axis,blockSize:r.blockSize})});var Oz,Pz,V2,U2=X(()=>{"use strict";Et();$e();je();Oz=(r,e,t)=>{let n=r===e,i=r<e&&t<0,o=r>e&&t>0;if(n||i||o)throw new Error("Range these inputs' contents are invalid.")},Pz=(r,e,t,n)=>{let i=Math.abs(Math.ceil((e-r)/t)),o=[i],a=i,s=[{type:12,data:a},{type:n,data:r},{type:n,data:t},...ae(o)],l=d=>{let h=ne("output",n,o.length),g=h.type.value,b=[{name:"outputSize",type:"u32"},{name:"start",type:g},{name:"delta",type:g}];return`
        ${d.registerUniforms(b).declareVariables(h)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${g}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${n}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:o,dataType:n}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:s})}},V2=r=>{let e=0,t=0,n=0;r.inputs[0].dataType===6?(e=r.inputs[0].getInt32Array()[0],t=r.inputs[1].getInt32Array()[0],n=r.inputs[2].getInt32Array()[0]):r.inputs[0].dataType===1&&(e=r.inputs[0].getFloat32Array()[0],t=r.inputs[1].getFloat32Array()[0],n=r.inputs[2].getFloat32Array()[0]),Pe.webgpu.validateInputContent&&Oz(e,t,n),r.compute(Pz(e,t,n,r.inputs[0].dataType),{inputs:[]})}});var Ez,Dz,G2,W2,H2=X(()=>{"use strict";$e();De();ht();je();Ez=(r,e,t,n)=>{if(r!=="none"&&n!=="i32"&&n!=="u32"&&n!=="f32")throw new Error(`Input ${n} is not supported with reduction ${r}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,o=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${e}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(r){case"none":return`${e}=${t};`;case"add":return n==="i32"||n==="u32"?`atomicAdd(&${e}, bitcast<${n}>(${t}));`:`
              ${i}bitcast<${n}>(oldValue) + (${t})${o}`;case"max":return n==="i32"||n==="u32"?`atomicMax(&${e}, bitcast<${n}>(${t}));`:`
                ${i}max(bitcast<f32>(oldValue), (${t}))${o}`;case"min":return n==="i32"||n==="u32"?`atomicMin(&${e}, bitcast<${n}>(${t}));`:`${i}min(bitcast<${n}>(oldValue), (${t}))${o}`;case"mul":return`${i}(bitcast<${n}>(oldValue) * (${t}))${o}`;default:throw new Error(`Reduction ${r} is not supported.`)}},Dz=(r,e)=>{let t=r[0].dims,n=r[1].dims,i=t,o=1,a=Math.ceil(q.sizeToDimension(n,n.length-1)/o),s=n[n.length-1],l=q.sizeFromDimension(t,s),d=[{type:12,data:a},{type:12,data:s},{type:12,data:l},...ae(r[1].dims,r[2].dims,i)],h=g=>{let b=Z("indices",r[1].dataType,r[1].dims.length),w=Z("updates",r[2].dataType,r[2].dims.length,o),T=e.reduction!=="none"&&e.reduction!==""?bx("output",r[0].dataType,i.length):ne("output",r[0].dataType,i.length,o);return`
      ${g.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(b,w,T)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${r[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Ez(e.reduction,"output[data_offset + i]","value",T.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${e.cacheKey}_${e.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:i,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:h}},G2=r=>Ae({reduction:r.reduction}),W2=(r,e)=>{r.compute(Dz(r.inputs,e),{inputs:[r.inputs[1],r.inputs[2]],outputs:[]})}});var kz,jz,Lz,q2,Nz,Rz,Mz,zz,Bz,Fz,Vz,Uz,K2,Gz,Wz,Hz,qz,Kz,X2,Z2,J2=X(()=>{"use strict";$e();De();ht();je();kz=(r,e)=>{if(r.every(t=>t>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),r.length>0){if(e.mode==="linear"){if(!(r.length===2||r.length===3||r.length===4&&r[0]===1&&r[1]===1||r.length===4&&r[0]===1&&r[3]===1||r.length===5&&r[0]===1&&r[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(e.mode==="cubic"&&!(r.length===2||r.length===4&&r[0]===1&&r[1]===1||r.length===4&&r[0]===1&&r[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},jz=(r,e,t)=>{e.every(i=>i>=0&&i<t||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let n=new Array(t).fill(1);return e.forEach((i,o)=>n[i]=r[o]),n},Lz=(r,e,t,n,i,o)=>{let[a,s,l]=t>10?[1,2,3]:[-1,r.length>1?1:-1,-1],d=r[0].dims.length;if(a>0&&r.length>a&&r[a].dims.length>0)r[a].getFloat32Array().forEach(h=>o.push(h));else if(e.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(s>0&&r.length>s&&r[s].dims.length===1&&r[s].dims[0]>0){if(r[s].getFloat32Array().forEach(h=>n.push(h)),n.length!==0&&n.length!==d&&t>=18&&n.length!==e.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");kz(n,e),e.axes.length>0&&jz(n,e.axes,d).forEach((h,g)=>n[g]=h)}if(l>0&&r.length>l&&r[l].dims.length===1&&r[l].dims[0]>0&&(r[l].getBigInt64Array().forEach(h=>i.push(Number(h))),i.length!==0&&i.length!==d&&t>=18&&i.length!==e.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(e.axes.length>0){if(n.length!==0&&n.length!==e.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(i.length!==0&&i.length!==e.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof n<"u"&&typeof i<"u"&&n.length>0&&i.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},q2=(r,e,t,n)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${r}) * (${e});
  let whole = ${n}(big / (${t}));
  let fract = ${n}(big % (${t})) / ${n}(${t});
  return whole + fract;
`,Nz=(r,e)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${e} { `+(()=>{switch(r){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${e}(xResized) / ${e}(xScale);
          } else {
            ${q2("xResized","lengthOriginal","lengthResized",e)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${e}(xResized) + 0.5) / ${e}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${e}(xResized) + 0.5) / ${e}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${q2("xResized","lengthOriginal - 1","lengthResized - 1",e)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${e}(roiStart) * ${e}(lengthOriginal - 1) +
                        (${e}(xResized) * ${e}(roiEnd - roiStart) * ${e}(lengthOriginal - 1)) /
                        ${e}(lengthResized - 1);
                  } else {
                    return 0.5 * ${e}(roiStart + roiEnd) * ${e}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${e}xScale * ${e}(lengthResized);
                  const adjustment = ${e}(lengthResized) / outputWidth;
                  const center = ${e}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${e}(xResized) + 0.5) / ${e}(xScale)) - 0.5;`;case"half_pixel":return`return ((${e}(xResized) + 0.5) / ${e}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${r} is not supported`)}})()+"}",Rz=(r,e,t)=>`fn getNearestPixelFromOriginal(xOriginal: ${t}, isDownSample: bool) -> ${t} {`+(()=>{switch(r){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(e<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${r} is not supported`)}})()+"}",Mz=(r,e,t)=>{let n=new Array(t).fill(0).concat(new Array(t).fill(1)),i=r.length===0?n:r.slice();return e.length>0?(e.forEach((o,a)=>{n[o]=i[a],n[a+t]=i[e.length+a]}),n):i},zz=(r,e,t,n)=>{let i=[];if(t.length>0)if(n.length>0){if(r.forEach(o=>i.push(o)),Math.max(...n)>r.length)throw new Error("axes is out of bound");n.forEach((o,a)=>i[o]=t[a])}else t.forEach(o=>i.push(o));else{if(e.length===0)throw new Error("Resize requires either scales or sizes.");i=r.map((o,a)=>Math.round(o*e[a]))}return i},Bz=(r,e,t)=>{let n=(()=>{switch(t.keepAspectRatioPolicy){case"not_larger":return t.axes.length>0?Math.min(...t.axes.map(o=>e[o]),Number.MAX_VALUE):Math.min(...e,Number.MAX_VALUE);case"not_smaller":return t.axes.length>0?Math.max(...t.axes.map(o=>e[o]),Number.MIN_VALUE):Math.max(...e,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${t.keepAspectRatioPolicy} is not supported`)}})();e.fill(1,0,e.length);let i=r.slice();return t.axes.length>0?(t.axes.forEach(o=>e[o]=n),t.axes.forEach(o=>i[o]=Math.round(r[o]*e[o]))):(e.fill(n,0,e.length),i.forEach((o,a)=>i[a]=Math.round(o*e[a]))),i},Fz=(r,e,t,n,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${r.type.indices}) -> array<${r.type.value}, ${t.length}> {
      var original_indices: array<${r.type.value}, ${t.length}>;
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var output_index = ${r.indicesGet("output_indices","i")};
        var scale = ${he("uniforms.scales","i",n)};
        var roi_low = ${he("uniforms.roi","i",i)};
        var roi_hi = ${he("uniforms.roi",`i + ${e.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${r.type.value}(output_index);
        } else {
          var input_shape_i = ${he("uniforms.input_shape","i",e.length)};
          var output_shape_i = ${he("uniforms.output_shape","i",t.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Vz=(r,e,t,n,i,o,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> ${r.type.indices} {
      var input_indices: ${r.type.indices};
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${he("uniforms.scales","i",i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${he("uniforms.roi","i",o)};
          var roi_hi = ${he("uniforms.roi",`i + ${t.length}`,o)};
          var input_shape_i = ${he("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${he("uniforms.output_shape","i",n.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${a} || (original_idx >= 0 && original_idx < ${e.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${e.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${r.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Uz=(r,e)=>`
    fn checkInputIndices(input_indices: ${r.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${e.length}; i++) {
        var input_index = ${r.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${he("uniforms.input_shape","i",e.length)}) {
          return false;
        }
      }
      return true;
    }`,K2=(r,e,t,n)=>r.rank>n?`
    ${r.indicesSet("input_indices",e,"channel")};
    ${r.indicesSet("input_indices",t,"batch")};
`:"",Gz=(r,e,t,n,i)=>{let[a,s,l,d]=t.length===2?[-1,0,1,-1]:[0,2,3,1],h=r.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${h} {
      var input_indices: ${r.type.indices};
      ${r.indicesSet("input_indices",s,`max(0, min(row, ${t[s]} - 1))`)};
      ${r.indicesSet("input_indices",l,`max(0, min(col, ${t[l]} - 1))`)};
      ${K2(r,d,a,2)}
      return ${r.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${e.type.indices}) -> ${h} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${h} = originalIndices[${s}];
      var col:${h} = originalIndices[${l}];
      ${n?`if (row < 0 || row > (${t[s]} - 1) || col < 0 || col > (${t[l]} - 1)) {
        return ${i};
      }`:""};
      row = max(0, min(row, ${t[s]} - 1));
      col = max(0, min(col, ${t[l]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${t.length>2?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${t.length>2?`u32(originalIndices[${a}])`:"0"};
      var x11: ${h} = getInputValue(batch, channel, row1, col1);
      var x12: ${h} = getInputValue(batch, channel, row1, col2);
      var x21: ${h} = getInputValue(batch, channel, row2, col1);
      var x22: ${h} = getInputValue(batch, channel, row2, col2);
      var dx1: ${h} = abs(row - ${h}(row1));
      var dx2: ${h} = abs(${h}(row2) - row);
      var dy1: ${h} = abs(col - ${h}(col1));
      var dy2: ${h} = abs(${h}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Wz=(r,e,t,n,i,o,a,s,l,d)=>{let h=t.length===2,g=!0,[b,w]=h?[0,1]:g?[2,3]:[1,2],T=r.type.value,I=O=>{let S=O===b?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${r.type.indices}, output_indices: ${e.type.indices}) -> ${T} {
        var output_index = ${e.indicesGet("output_indices",O)};
        var originalIdx: ${T} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[O]},
        ${n[O]}, ${t[O]}, ${o[O]}, ${o[O]} + ${t.length});
        var fractOriginalIdx: ${T} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${s} && (originalIdx < 0 || originalIdx > (${t[O]} - 1))) {
          return ${l};
        }
        var data: array<${T}, 4> = array<${T}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${T} = originalIdx + ${T}(i);
          if (${S} < 0 || ${S} >= ${t[O]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:s?`return ${l};`:`${S} = max(0, min(${S}, ${t[O]} - 1));`};
          }
        var input_indices_copy: ${r.type.indices} = input_indices;
          ${r.indicesSet("input_indices_copy",O,`u32(${S})`)};
          data[i + 1] = ${O===b?r.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${I(b)};
    ${I(w)};
  fn getCubicInterpolationCoefs(s: ${T}) -> array<${T}, 4> {
    var absS = abs(s);
    var coeffs: array<${T}, 4> = array<${T}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${T} = 1.0 - absS;
    var twoMinusAbsS: ${T} = 2.0 - absS;
    var onePlusAbsS: ${T} = 1.0 + absS;
    coeffs[0] = ((${a} * onePlusAbsS - 5 * ${a}) * onePlusAbsS + 8 * ${a}) * onePlusAbsS - 4 * ${a};
    coeffs[1] = ((${a} + 2) * absS - (${a} + 3)) * absS * absS + 1;
    coeffs[2] = ((${a} + 2) * oneMinusAbsS - (${a} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${a} * twoMinusAbsS - 5 * ${a}) * twoMinusAbsS + 8 * ${a}) * twoMinusAbsS - 4 * ${a};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${T}, 4>, coefs: array<${T}, 4>) -> ${T} {
    var coefsSum: ${T} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${e.type.indices}) -> ${T} {
    var input_indices: ${r.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Hz=(r,e,t,n,i)=>{let[a,s,l,d,h]=t.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],g=r.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${g} {
      var input_indices: ${r.type.indices};
      ${r.indicesSet("input_indices",s,`max(0, min(depth, ${t[s]} - 1))`)};
      ${r.indicesSet("input_indices",l,`max(0, min(height, ${t[l]} - 1))`)};
      ${r.indicesSet("input_indices",d,`max(0, min(width, ${t[d]} - 1))`)};
      ${K2(r,h,a,3)}
      return ${r.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${e.type.indices}) -> ${g} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${g} = originalIndices[${s}];
      var height:${g} = originalIndices[${l}];
      var width:${g} = originalIndices[${d}];
      ${n?`if (depth < 0 || depth > (${t[s]} - 1) || height < 0 || height > (${t[l]} - 1) || width < 0 || (width > ${t[d]} - 1)) {
      return ${i};
        }`:""};

    depth = max(0, min(depth, ${t[s]} - 1));
      height = max(0, min(height, ${t[l]} - 1));
      width = max(0, min(width, ${t[d]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${t.length>3?`u32(originalIndices[${h}])`:"0"};
      var batch: u32 =  ${t.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${g} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${g} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${g} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${g} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${g} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${g} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${g} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${g} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${g} = abs(depth - ${g}(depth1));
      var dx2: ${g} = abs(${g}(depth2) - depth);
      var dy1: ${g} = abs(height - ${g}(height1));
      var dy2: ${g} = abs(${g}(height2) - height);
      var dz1: ${g} = abs(width - ${g}(width1));
      var dz2: ${g} = abs(${g}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},qz=(r,e,t,n,i,o)=>{let a=r.dims,s=Mz(o,e.axes,a.length),l=zz(a,n,i,e.axes),d=n.slice();n.length===0&&(d=a.map((A,j)=>A===0?1:l[j]/A),e.keepAspectRatioPolicy!=="stretch"&&(l=Bz(a,d,e)));let h=ne("output",r.dataType,l.length),g=Z("input",r.dataType,a.length),b=q.size(l),w=a.length===l.length&&a.every((A,j)=>A===l[j]),T=e.coordinateTransformMode==="tf_crop_and_resize",I=e.extrapolationValue,O=g.type.value,S=A=>`
      ${w?"":`
      ${Nz(e.coordinateTransformMode,O)};
      ${(()=>{switch(e.mode){case"nearest":return`
              ${Uz(g,a)};
              ${Rz(e.nearestMode,t,O)};
              ${Vz(g,h,a,l,d.length,s.length,T)};
              `;case"linear":return`
              ${Fz(h,a,l,d.length,s.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${Gz(g,h,a,T,I)}`;if(a.length===3||a.length===5)return`${Hz(g,h,a,T,I)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${Wz(g,h,a,l,d,s,e.cubicCoeffA,T,e.extrapolationValue,e.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${A.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",s.length).declareVariables(g,h)}
      ${A.mainStart()}
        ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${w?"output[global_idx] = input[global_idx];":`
        let output_indices = ${h.offsetToIndices("global_idx")};
        var input_indices: ${g.type.indices};
        ${(()=>{switch(e.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${g.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${e.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${e.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${e.cacheKey}|${t}|${d.length>0?e.mode==="cubic"?d:d.length:""}|${i.length>0?i:""}|${s.length>0?s:""}|${w}|${e.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[{dims:l,dataType:r.dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},{type:1,data:d},{type:1,data:s},...ae(a,l)]})}},Kz=r=>{let e=r.customDataBuffer;return new Uint32Array(e,e.byteOffset,1)[0]},X2=(r,e)=>{let t=[],n=[],i=[],o=Kz(r);if(e.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Lz(r.inputs,e,o,t,n,i),r.compute(qz(r.inputs[0],e,o,t,n,i),{inputs:[0]})},Z2=r=>{let e=r.antialias,t=r.axes,n=r.coordinateTransformMode,i=r.cubicCoeffA,o=r.excludeOutside!==0,a=r.extrapolationValue,s=r.keepAspectRatioPolicy,l=r.mode,d=r.nearestMode===""?"simple":r.nearestMode;return Ae({antialias:e,axes:t,coordinateTransformMode:n,cubicCoeffA:i,excludeOutside:o,extrapolationValue:a,keepAspectRatioPolicy:s,mode:l,nearestMode:d})}});var Xz,Zz,Y2,Q2=X(()=>{"use strict";$e();De();je();Xz=r=>{if(!r||r.length<3)throw new Error("layerNorm requires at least 3 inputs.");let e=r[0],t=r[1],n=r[2];if(e.dataType!==t.dataType||e.dataType!==n.dataType)throw new Error("All inputs must have the same data type");if(e.dims.length!==3&&e.dims.length!==2)throw new Error("Input must be 2D or 3D");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Skip must be 2D or 3D");let i=e.dims[e.dims.length-1],o=e.dims[e.dims.length-2];if(t.dims[t.dims.length-1]!==i)throw new Error("Skip must have the same hidden size as input");if(t.dims[t.dims.length-2]!==o)throw new Error("Skip must have the same sequence length as input");if(n.dims.length!==1)throw new Error("Gamma must be 1D");if(n.dims[n.dims.length-1]!==i)throw new Error("Gamma must have the same hidden size as input");if(r.length>3){let a=r[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Beta must have the same hidden size as input")}if(r.length>4){let a=r[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==i)throw new Error("Bias must have the same hidden size as input")}},Zz=(r,e,t,n)=>{let i=e.simplified,o=r[0].dims,a=q.size(o),s=o,l=a,d=o.slice(-1)[0],h=n?o.slice(0,-1).concat(1):[],g=!i&&r.length>3,b=r.length>4,w=n&&t>1,T=n&&t>2,I=t>3,O=64,S=Ke(d),A=[{type:12,data:l},{type:12,data:S},{type:12,data:d},{type:1,data:e.epsilon}],j=V=>{let W=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],F=[Z("x",r[0].dataType,r[0].dims,S),Z("skip",r[1].dataType,r[1].dims,S),Z("gamma",r[2].dataType,r[2].dims,S)];g&&F.push(Z("beta",r[3].dataType,r[3].dims,S)),b&&F.push(Z("bias",r[4].dataType,r[4].dims,S)),F.push(ne("output",r[0].dataType,s,S)),w&&F.push(ne("mean_output",1,h)),T&&F.push(ne("inv_std_output",1,h)),I&&F.push(ne("input_skip_bias_sum",r[0].dataType,s,S));let Y=it(r[0].dataType),ee=it(1,S);return`

      ${V.registerUniforms(W).declareVariables(...F)}
      var<workgroup> sum_shared : array<${ee}, ${O}>;
      var<workgroup> sum_squared_shared : array<${ee}, ${O}>;

      ${V.mainStart([O,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${O};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${O};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${O-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${b?"bias[offset1d + i]":Y+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${I?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${ci(Y,S,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${O};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${yn("sum",S)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${yn("square_sum",S)} / f32(uniforms.hidden_size) ${i?"":"- mean * mean"} + uniforms.epsilon);
        ${w?"mean_output[global_idx] = mean;":""}
        ${T?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?"":`- ${Y}(mean)`}) *
            ${Y}(inv_std_dev) * gamma[offset1d + i]
            ${g?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:s,dataType:r[0].dataType}];return t>1&&k.push({dims:h,dataType:1}),t>2&&k.push({dims:h,dataType:1}),t>3&&k.push({dims:o,dataType:r[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${S};${w};${T};${I}`,inputDependencies:r.map((V,W)=>"type")},getShaderSource:j,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:A})}},Y2=(r,e)=>{Xz(r.inputs);let n=[0];r.outputCount>1&&n.push(-3),r.outputCount>2&&n.push(-3),r.outputCount>3&&n.push(3),r.compute(Zz(r.inputs,e,r.outputCount,!1),{outputs:n})}});var Jz,Ds,Yz,eS,Qz,eB,tS,nS,rS=X(()=>{"use strict";$e();De();ht();je();Jz=(r,e)=>{if(!r||r.length<1)throw new Error("too few inputs");if(e.axes.length!==0){if(e.axes.length!==e.starts.length||e.axes.length!==e.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(e.starts.length!==e.ends.length)throw new Error("starts and ends must have the same length");r.slice(1).forEach((t,n)=>{if(r[n+1].dataType!==6&&r[n+1].dataType!==7)throw new Error(`Input ${n} must be an array of int32 or int64`)})},Ds=(r,e)=>{let t=[];if(r.length>e)if(r[e].dataType===7)r[e].getBigInt64Array().forEach(n=>t.push(Number(n)));else if(r[e].dataType===6)r[e].getInt32Array().forEach(n=>t.push(Number(n)));else throw new Error(`Input ${e} must be an array of int32 or int64`);return t},Yz=(r,e)=>{if(r.length>1){let t=Ds(r,1),n=Ds(r,2),i=Ds(r,3);return i.length===0&&(i=[...Array(r[0].dims.length).keys()]),Ae({starts:t,ends:n,axes:i})}else return e},eS=(r,e,t,n,i)=>{let o=r;return r<0&&(o+=t[n[e]]),i[e]<0?Math.max(0,Math.min(o,t[n[e]]-1)):Math.max(0,Math.min(o,t[n[e]]))},Qz=(r,e,t)=>`fn calculateInputIndices(output_indices: ${e.type.indices}) -> ${r.type.indices} {
          var input_indices: ${r.type.indices};
          var carry = 0u;
          for (var i = ${t.length-1}; i >= 0; i--) {
            let input_shape_i = ${he("uniforms.input_shape","i",t.length)};
            let steps_i = ${he("uniforms.steps","i",t.length)};
            let signs_i = ${he("uniforms.signs","i",t.length)};
            let starts_i = ${he("uniforms.starts","i",t.length)};
            var output_index = ${e.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${r.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,eB=(r,e)=>{let t=r[0].dims,n=q.size(t),i=e.axes.length>0?q.normalizeAxes(e.axes,t.length):[...Array(t.length).keys()],o=Ds(r,4);o.forEach(S=>S!==0||(()=>{throw new Error("step cannot be 0")})),o.length===0&&(o=Array(i.length).fill(1));let a=e.starts.map((S,A)=>eS(S,A,t,i,o)),s=e.ends.map((S,A)=>eS(S,A,t,i,o));if(i.length!==a.length||i.length!==s.length)throw new Error("start, ends and axes should have the same number of elements");if(i.length!==t.length)for(let S=0;S<t.length;++S)i.includes(S)||(a.splice(S,0,0),s.splice(S,0,t[S]),o.splice(S,0,1));let l=o.map(S=>Math.sign(S));o.forEach((S,A,j)=>{if(S<0){let k=(s[A]-a[A])/S,V=a[A],W=V+k*o[A];a[A]=W,s[A]=V,j[A]=-S}});let d=t.slice(0);i.forEach((S,A)=>{d[S]=Math.ceil((s[S]-a[S])/o[S])});let h={dims:d,dataType:r[0].dataType},g=ne("output",r[0].dataType,d.length),b=Z("input",r[0].dataType,r[0].dims.length),w=q.size(d),T=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:o.length}],I=[{type:12,data:w},{type:12,data:a},{type:6,data:l},{type:12,data:o},...ae(r[0].dims,d)],O=S=>`
      ${S.registerUniforms(T).declareVariables(b,g)}
        ${Qz(b,g,t)}
        ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${g.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${g.setByOffset("global_idx",b.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${a.length}_${o.length}`,inputDependencies:["rank"]},getShaderSource:O,getRunData:()=>({outputs:[h],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:I})}},tS=(r,e)=>{Jz(r.inputs,e);let t=Yz(r.inputs,e);r.compute(eB(r.inputs,t),{inputs:[0]})},nS=r=>{let e=r.starts,t=r.ends,n=r.axes;return Ae({starts:e,ends:t,axes:n})}});var tB,nB,iS,oS,aS=X(()=>{"use strict";$e();De();ht();wr();je();tB=r=>{if(!r||r.length!==1)throw new Error("Softmax op requires 1 input.")},nB=(r,e)=>{let t=r.inputs[0],n=t.dims,i=q.size(n),o=n.length,a=q.normalizeAxis(e.axis,o),s=a<n.length-1,l,d=[];s?(d=Array.from({length:o},(F,Y)=>Y),d[a]=o-1,d[o-1]=a,l=r.compute($t(t,d),{inputs:[t],outputs:[-1]})[0]):l=t;let h=l.dims,g=h[o-1],b=i/g,w=Ke(g),T=g/w,I=64;b===1&&(I=256);let O=(F,Y)=>Y===4?`max(max(${F}.x, ${F}.y), max(${F}.z, ${F}.w))`:Y===2?`max(${F}.x, ${F}.y)`:Y===3?`max(max(${F}.x, ${F}.y), ${F}.z)`:F,S=Z("x",l.dataType,l.dims,w),A=ne("result",l.dataType,l.dims,w),j=S.type.value,k=it(l.dataType)==="f32"?`var threadMax = ${j}(-3.402823e+38f);`:`var threadMax = ${j}(-65504.0h);`,V=F=>`
      var<workgroup> rowMaxShared : ${j};
      var<workgroup> rowSumShared : ${j};
      var<workgroup> threadShared : array<${j}, ${I}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${j} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${j}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${F.registerUniform("packedCols","i32").declareVariables(S,A)}
      ${F.mainStart(I)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${I};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${k}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${j}(${O("threadShared[0]",w)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${j}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${j}(${yn("threadShared[0]",w)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${j}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,W=r.compute({name:"Softmax",shaderCache:{hint:`${w};${I}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:h,dataType:l.dataType}],dispatchGroup:{x:b},programUniforms:[{type:6,data:T}]}),getShaderSource:V},{inputs:[l],outputs:[s?-1:0]})[0];s&&r.compute($t(W,d),{inputs:[W]})},iS=(r,e)=>{tB(r.inputs),nB(r,e)},oS=r=>Ae({axis:r.axis})});var sS,rB,iB,oB,uS,lS=X(()=>{"use strict";$e();De();je();sS=r=>Array.from(r.getBigInt64Array(),Number),rB=r=>{if(!r||r.length!==2)throw new Error("Tile requires 2 inputs.");if(r[0].dataType!==1&&r[0].dataType!==10&&r[0].dataType!==6&&r[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(r[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(r[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(sS(r[1]).length!==r[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},iB=(r,e)=>{let t=[];for(let n=0;n<r.length;++n)t.push(r[n]*e[n]);return t},oB=(r,e)=>{let t=r[0].dims,n=e??sS(r[1]),i=iB(t,n),o=q.size(i),a=r[0].dataType,s=Z("input",a,t.length),l=ne("output",a,i.length),d=h=>`
      const inputShape = ${s.indices(...t)};
      ${h.registerUniform("output_size","u32").declareVariables(s,l)}
      ${h.mainStart()}
      ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${s.type.indices};
      for (var i = 0; i < ${t.length}; i++) {
        let input_dim_i = ${s.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${s.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",s.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${n}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:i,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...ae(r[0].dims,i)]}),getShaderSource:d}},uS=r=>{rB(r.inputs),r.compute(oB(r.inputs),{inputs:[0]})}});var aB,sB,cS,dS=X(()=>{"use strict";$e();De();je();aB=(r,e,t,n,i)=>{let o=ne("output_data",i,t.length,4),a=Z("a_data",e[1].dataType,e[1].dims.length,4),s=Z("b_data",e[2].dataType,e[2].dims.length,4),l=Z("c_data",e[0].dataType,e[0].dims.length,4),d,h=(g,b,w)=>`select(${b}, ${g}, ${w})`;if(!n)d=o.setByOffset("global_idx",h(a.getByOffset("global_idx"),s.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let g=(b,w,T="")=>{let I=`a_data[index_a${w}][component_a${w}]`,O=`b_data[index_b${w}][component_b${w}]`,S=`bool(c_data[index_c${w}] & (0xffu << (component_c${w} * 8)))`;return`
            let output_indices${w} = ${o.offsetToIndices(`global_idx * 4u + ${w}u`)};
            let offset_a${w} = ${a.broadcastedIndicesToOffset(`output_indices${w}`,o)};
            let offset_b${w} = ${s.broadcastedIndicesToOffset(`output_indices${w}`,o)};
            let offset_c${w} = ${l.broadcastedIndicesToOffset(`output_indices${w}`,o)};
            let index_a${w} = offset_a${w} / 4u;
            let index_b${w} = offset_b${w} / 4u;
            let index_c${w} = offset_c${w} / 4u;
            let component_a${w} = offset_a${w} % 4u;
            let component_b${w} = offset_b${w} % 4u;
            let component_c${w} = offset_c${w} % 4u;
            ${b}[${w}] = ${T}(${h(I,O,S)});
          `};i===9?d=`
            var data = vec4<u32>(0);
            ${g("data",0,"u32")}
            ${g("data",1,"u32")}
            ${g("data",2,"u32")}
            ${g("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${g("output_data[global_idx]",0)}
            ${g("output_data[global_idx]",1)}
            ${g("output_data[global_idx]",2)}
            ${g("output_data[global_idx]",3)}
          `}return`
        ${r.registerUniform("vec_size","u32").declareVariables(l,a,s,o)}
        ${r.mainStart()}
        ${r.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},sB=r=>{let e=r[1].dims,t=r[2].dims,n=r[0].dims,i=r[1].dataType,o=!(q.areEqual(e,t)&&q.areEqual(t,n)),a=e,s=q.size(e);if(o){let d=dr.calcShape(dr.calcShape(e,t,!1),n,!1);if(!d)throw new Error("Can't perform where op on the given tensors");a=d,s=q.size(a)}let l=Math.ceil(s/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>aB(d,r,a,o,i),getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:l},...ae(n,e,t,a)]})}},cS=r=>{r.compute(sB(r.inputs))}});var fS,pS=X(()=>{"use strict";qx();vs();Zx();Yx();R1();K1();J1();pI();vI();xI();$I();EI();jI();NI();zI();VI();WI();KI();JI();e2();l2();f2();h2();g2();_2();hd();w2();M2();F2();U2();H2();bs();J2();yd();Q2();rS();aS();gd();lS();wr();Ts();dS();fS=new Map([["Abs",[Qx]],["Acos",[e1]],["Acosh",[t1]],["Add",[M1]],["ArgMax",[Hx,td]],["ArgMin",[Wx,td]],["Asin",[n1]],["Asinh",[r1]],["Atan",[i1]],["Atanh",[o1]],["Attention",[Kx]],["AveragePool",[O2,C2]],["BatchNormalization",[Xx]],["BiasAdd",[Jx]],["BiasSplitGelu",[N1]],["Cast",[s1,a1]],["Ceil",[l1]],["Clip",[u1]],["Concat",[X1,Z1]],["Conv",[cd,ld]],["ConvTranspose",[_I,yI]],["Cos",[c1]],["Cosh",[d1]],["CumSum",[wI,TI]],["DepthToSpace",[II,SI]],["DequantizeLinear",[z2,B2]],["Div",[z1]],["Einsum",[OI,PI]],["Elu",[f1,To]],["Equal",[B1]],["Erf",[p1]],["Exp",[h1]],["Expand",[kI]],["FastGelu",[LI]],["Floor",[m1]],["FusedConv",[cd,ld]],["Gather",[MI,RI]],["GatherElements",[qI,HI]],["GatherBlockQuantized",[UI,GI]],["GatherND",[BI,FI]],["Gelu",[g1]],["Gemm",[ZI,XI]],["GlobalAveragePool",[D2,E2]],["GlobalMaxPool",[R2,N2]],["Greater",[G1]],["GreaterOrEqual",[H1]],["GridSample",[YI,QI]],["GroupQueryAttention",[u2]],["HardSigmoid",[I1,x1]],["InstanceNormalization",[d2]],["LayerNormalization",[p2]],["LeakyRelu",[y1,To]],["Less",[W1]],["LessOrEqual",[q1]],["Log",[k1]],["MatMul",[m2]],["MatMulNBits",[y2,b2]],["MaxPool",[j2,L2]],["Mul",[F1]],["MultiHeadAttention",[r2,n2]],["Neg",[_1]],["Not",[b1]],["Pad",[v2]],["Pow",[V1]],["QuickGelu",[j1,To]],["Range",[V2]],["Reciprocal",[v1]],["ReduceMin",[zx]],["ReduceMean",[jx]],["ReduceMax",[Mx]],["ReduceSum",[Fx]],["ReduceProd",[Bx]],["ReduceL1",[Lx]],["ReduceL2",[Nx]],["ReduceLogSum",[Ux]],["ReduceLogSumExp",[Rx]],["ReduceSumSquare",[Vx]],["Relu",[w1]],["Resize",[X2,Z2]],["RotaryEmbedding",[a2]],["ScatterND",[W2,G2]],["Sigmoid",[T1]],["Sin",[S1]],["Sinh",[$1]],["Slice",[tS,nS]],["SkipLayerNormalization",[Y2]],["Split",[i2,o2]],["Sqrt",[A1]],["Softmax",[iS,oS]],["Sub",[U1]],["Tan",[C1]],["Tanh",[P1]],["ThresholdedRelu",[D1,To]],["Tile",[uS]],["Transpose",[wx,Tx]],["Where",[cS]]])});var ks,hS=X(()=>{"use strict";Et();cr();je();ks=class{constructor(e){this.backend=e;this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,i,o){qt(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let l=[];for(let h of t)l.push({binding:l.length,resource:{buffer:h.buffer}});for(let h of n)l.push({binding:l.length,resource:{buffer:h.buffer}});o&&l.push({binding:l.length,resource:o});let d=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:l,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let h={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:d,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(h)}s.setPipeline(e.computePipeline),s.setBindGroup(0,d),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),zt(e.programInfo.name)}dispose(){}build(e,t){qt(e.name);let n=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(g=>{n.features.has(g.feature)&&i.push(`enable ${g.extension};`)});let a=_x(t,this.backend.device.limits),s=e.getShaderSource(a),l=`${i.join(`
`)}
${a.additionalImplementations}
${s}`,d=n.createShaderModule({code:l,label:e.name});Ne("verbose",()=>`[WebGPU] ${e.name} shader code: ${l}`);let h=n.createComputePipeline({compute:{module:d,entryPoint:"main"},layout:"auto",label:e.name});return zt(e.name),{programInfo:e,computePipeline:h,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,n=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,o=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=o&&n<=o&&i<=o)return[t,n,i];let a=t*n*i,s=Math.ceil(Math.sqrt(a));if(s>o){if(s=Math.ceil(Math.cbrt(a)),s>o)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}});var mS={};Wr(mS,{WebGpuBackend:()=>_d});var uB,lB,bd,_d,gS=X(()=>{"use strict";Et();$e();cr();Uc();yx();pS();hS();uB=(r,e)=>{if(e.length!==r.length)throw new Error(`inputDependencies length ${e.length} is not equal to inputTensors length ${r.length}.`);let t=[];for(let n=0;n<r.length;++n){let i=r[n].dataType;switch(e[n]){case"none":{t.push("");break}case"type":{t.push(`${i}`);break}case"rank":{let o=r[n].dims.length;t.push(`${i};${o}`);break}case"dims":{let o=r[n].dims.join(",");t.push(`${i};${o}`);break}default:throw new Error(`unsupported input dependency: ${e[n]}`)}}return t.join("|")},lB=(r,e,t)=>{let n=r.name;return r.shaderCache?.hint&&(n+="["+r.shaderCache.hint+"]"),n+=":"+t+`:${uB(e,r.shaderCache?.inputDependencies??new Array(e.length).fill("dims"))}`,n},bd=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},_d=class{constructor(){this.currentSessionId=null;this.currentKernelId=null;this.commandEncoder=null;this.computePassEncoder=null;this.maxDispatchNumber=16;this.pendingDispatchNumber=0;this.pendingKernels=[];this.pendingQueries=new Map;this.sessionStatus="default";this.capturedCommandList=new Map;this.capturedPendingKernels=new Map;this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},o=a=>t.features.has(a)&&n.push(a)&&!0;o("chromium-experimental-timestamp-query-inside-passes")||o("timestamp-query"),o("shader-f16"),o("subgroups"),this.device=await t.requestDevice(i),this.adapterInfo=new bd(t.info||await t.requestAdapterInfo()),this.gpuDataManager=gx(this),this.programManager=new ks(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,us(e.logLevel,!!e.debug),this.device.onuncapturederror=a=>{a.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${a.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;qt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let o=n[i],a=o.kernelId,s=this.kernels.get(a),l=s.kernelType,d=s.kernelName,h=o.programName,g=o.inputTensorViews,b=o.outputTensorViews,w=t[i*2],T=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=w);let I=Number(w-this.queryTimeBase),O=Number(T-this.queryTimeBase);if(!Number.isSafeInteger(I)||!Number.isSafeInteger(O))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:g.map(S=>({dims:S.dims,dataType:lr(S.dataType)})),outputsMetadata:b.map(S=>({dims:S.dims,dataType:lr(S.dataType)})),kernelId:a,kernelType:l,kernelName:d,programName:h,startTime:I,endTime:O});else{let S="";g.forEach((j,k)=>{S+=`input[${k}]: [${j.dims}] | ${lr(j.dataType)}, `});let A="";b.forEach((j,k)=>{A+=`output[${k}]: [${j.dims}] | ${lr(j.dataType)}, `}),console.log(`[profiling] kernel "${a}|${l}|${d}|${h}" ${S}${A}start time: ${I} ns, execution time: ${O-I} ns`)}Go("GPU",`${h}::${w}::${T}`)}e.unmap(),this.pendingQueries.delete(e)}),zt()}run(e,t,n,i,o,a){qt(e.name);let s=[];for(let j=0;j<t.length;++j){let k=t[j].data;if(k===0)continue;let V=this.gpuDataManager.get(k);if(!V)throw new Error(`no GPU data for input: ${k}`);s.push(V)}let{outputs:l,dispatchGroup:d,programUniforms:h}=e.getRunData(t),g=n.length===0?l.map((j,k)=>k):n;if(g.length!==l.length)throw new Error(`Output size ${g.length} must be equal to ${l.length}.`);let b=[],w=[];for(let j=0;j<l.length;++j){if(!Number.isInteger(g[j])||g[j]<-3||g[j]>=a)throw new Error(`Invalid output index: ${g[j]}`);if(g[j]===-3)continue;let k=g[j]===-1,V=g[j]===-2,W=k||V?o(l[j].dataType,l[j].dims):i(g[j],l[j].dataType,l[j].dims);if(b.push(W),W.data===0)continue;let F=this.gpuDataManager.get(W.data);if(!F)throw new Error(`no GPU data for output: ${W.data}`);if(k&&this.temporaryData.push(F),V){let Y=this.kernelPersistentData.get(this.currentKernelId);Y||(Y=[],this.kernelPersistentData.set(this.currentKernelId,Y)),Y.push(F)}w.push(F)}if(s.length!==t.length||w.length!==b.length){if(w.length===0)return zt(e.name),b;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let T;if(h){let j=0,k=[];h.forEach(Y=>{let ee=typeof Y.data=="number"?[Y.data]:Y.data;if(ee.length===0)return;let ue=Y.type===10?2:4,Te,ge;Y.type===10?(ge=ee.length>4?16:ee.length>2?8:ee.length*ue,Te=ee.length>4?16:ue*ee.length):(ge=ee.length<=2?ee.length*ue:16,Te=16),j=Math.ceil(j/ge)*ge,k.push(j);let we=Y.type===10?8:4;j+=ee.length>4?Math.ceil(ee.length/we)*Te:ee.length*ue});let V=16;j=Math.ceil(j/V)*V;let W=new ArrayBuffer(j);h.forEach((Y,ee)=>{let ue=k[ee],Te=typeof Y.data=="number"?[Y.data]:Y.data;if(Y.type===6)new Int32Array(W,ue,Te.length).set(Te);else if(Y.type===12)new Uint32Array(W,ue,Te.length).set(Te);else if(Y.type===10)new Uint16Array(W,ue,Te.length).set(Te);else if(Y.type===1)new Float32Array(W,ue,Te.length).set(Te);else throw new Error(`Unsupported uniform type: ${lr(Y.type)}`)});let F=this.gpuDataManager.create(j,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(F.buffer,0,W,0,j),this.gpuDataManager.release(F.id),T={offset:0,size:j,buffer:F.buffer}}let I=this.programManager.normalizeDispatchGroupSize(d),O=I[1]===1&&I[2]===1,S=lB(e,t,O),A=this.programManager.getArtifact(S);if(A||(A=this.programManager.build(e,I),this.programManager.setArtifact(S,A),Ne("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),h&&A.uniformVariablesInfo){if(h.length!==A.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${A.uniformVariablesInfo.length}, got ${h.length} in program "${A.programInfo.name}".`);for(let j=0;j<h.length;j++){let k=h[j],V=k.type,W=typeof k.data=="number"?1:k.data.length,[F,Y]=A.uniformVariablesInfo[j];if(V!==F||W!==Y)throw new Error(`Uniform variable ${j} mismatch: expect type ${F} with size ${Y}, got type ${V} with size ${W} in program "${A.programInfo.name}".`)}}if(Ne("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${I[0]}x${I[1]}x${I[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let j={kernelId:this.currentKernelId,programName:A.programInfo.name,inputTensorViews:t,outputTensorViews:b};this.pendingKernels.push(j),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(j)}return this.programManager.run(A,s,w,I,T),zt(e.name),b}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,i){let o=fS.get(e);if(!o)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:i,kernelEntry:o[0],attributes:[o[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let n of t)this.gpuDataManager.release(n.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let o=i.kernelType,a=i.kernelName,s=i.kernelEntry,l=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${o}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,l[0]&&(l[1]=l[0](l[1]),l[0]=void 0),Ne("info",()=>`[WebGPU] Start to run kernel "[${o}] ${a}"...`);let d=this.env.debug;this.temporaryData=[];try{return d&&this.device.pushErrorScope("validation"),s(t,l[1]),0}catch(h){return n.push(Promise.resolve(`[WebGPU] Kernel "[${o}] ${a}" failed. ${h}`)),1}finally{d&&n.push(this.device.popErrorScope().then(h=>h?`GPU validation error for kernel "[${o}] ${a}": ${h.message}`:null));for(let h of this.temporaryData)this.gpuDataManager.release(h.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,i){let o=this.sessionExternalDataMapping.get(e);o||(o=new Map,this.sessionExternalDataMapping.set(e,o));let a=o.get(t),s=this.gpuDataManager.registerExternalBuffer(n,i,a);return o.set(t,[s,n]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(n=>this.gpuDataManager.unregisterExternalBuffer(n[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let i=await Xc(this,e,t);return cs(i.buffer,n)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ne("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ne("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ne("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let i=0;i<n;i++){let o=this.getComputePassEncoder(),a=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),o.setPipeline(a.computePipeline),o.setBindGroup(0,a.bindGroup),o.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}});var yS={};Wr(yS,{init:()=>cB});var $o,vd,cB,bS=X(()=>{"use strict";$e();cr();De();fx();$o=class r{constructor(e,t,n,i){this.module=e;this.dataType=t;this.data=n;this.dims=i}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let e=q.size(this.dims);return e===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,e)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let e=q.size(this.dims);return e===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,e)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let e=q.size(this.dims);return e===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,e)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let e=q.size(this.dims);return e===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,e)}reshape(e){if(q.size(e)!==q.size(this.dims))throw new Error("Invalid new shape");return new r(this.module,this.dataType,this.data,e)}},vd=class{constructor(e,t,n){this.module=e;this.backend=t;this.customDataOffset=0;this.customDataSize=0;this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,o=n/e.PTR_SIZE,a=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*o++,a));let s=Number(e.getValue(i*o++,a));this.outputCount=Number(e.getValue(i*o++,a)),this.customDataOffset=Number(e.getValue(i*o++,"*")),this.customDataSize=Number(e.getValue(i*o++,a));let l=[];for(let d=0;d<s;d++){let h=Number(e.getValue(i*o++,a)),g=Number(e.getValue(i*o++,"*")),b=Number(e.getValue(i*o++,a)),w=[];for(let T=0;T<b;T++)w.push(Number(e.getValue(i*o++,a)));l.push(new $o(e,h,g,w))}this.inputs=l}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let n=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,i=t?.outputs??[],o=(s,l,d)=>new $o(this.module,l,this.output(s,d),d),a=(s,l)=>{let d=zr(s,l);if(!d)throw new Error(`Unsupported data type: ${s}`);let h=d>0?this.backend.gpuDataManager.create(d).id:0;return new $o(this.module,s,h,l)};return this.backend.run(e,n,i,o,a,this.outputCount)}output(e,t){let n=this.module.stackSave();try{let i=this.module.PTR_SIZE,o=i===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*i);this.module.setValue(a,t.length,o);for(let s=0;s<t.length;s++)this.module.setValue(a+i*(s+1),t[s],o);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(n)}}},cB=async(r,e,t,n)=>{let i=e.jsepInit;if(!i)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(r==="webgpu"){let o=(gS(),bi(mS)).WebGpuBackend,a=new o;await a.initialize(t,n),i("webgpu",[a,s=>a.alloc(Number(s)),s=>a.free(s),(s,l,d,h=!1)=>{if(h)Ne("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(l)}, size=${Number(d)}`),a.memcpy(Number(s),Number(l));else{Ne("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let g=e.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(d));a.upload(Number(l),g)}},async(s,l,d)=>{Ne("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${l}, size=${d}`),await a.download(Number(s),()=>e.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(s,l,d)=>a.createKernel(s,Number(l),d,e.UTF8ToString(e._JsepGetNodeName(Number(l)))),s=>a.releaseKernel(s),(s,l,d,h)=>{Ne("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${s}, contextDataOffset=${l}`);let g=new vd(e,a,Number(l));return a.computeKernel(Number(s),g,h)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let o=new hs(t);i("webnn",[o,()=>o.reserveTensorId(),a=>o.releaseTensorId(a),async(a,s,l,d,h)=>o.ensureTensor(a,s,l,d,h),(a,s)=>{o.uploadTensor(a,s)},async(a,s)=>o.downloadTensor(a,s),(a,s)=>o.registerMLContext(a,s),!!t.trace])}}});var dB,Za,Ja,di,fB,_S,bo,Ya,Qa,vS,es,ts,ns,Lc=X(()=>{"use strict";Et();QT();tx();$e();Rr();is();Fc();dB=(r,e)=>{nt()._OrtInit(r,e)!==0&&qe("Can't initialize onnxruntime.")},Za=async r=>{dB(r.wasm.numThreads,vo(r.logLevel))},Ja=async(r,e)=>{nt().asyncInit?.();let t=r.webgpu.adapter;if(e==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(t){if(typeof t.limits!="object"||typeof t.features!="object"||typeof t.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=r.webgpu.powerPreference;if(n!==void 0&&n!=="low-power"&&n!=="high-performance")throw new Error(`Invalid powerPreference setting: "${n}"`);let i=r.webgpu.forceFallbackAdapter;if(i!==void 0&&typeof i!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${i}"`);if(t=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:i}),!t)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(e==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let n=(bS(),bi(yS)).init;e==="webgpu"&&await n("webgpu",nt(),r,t),e==="webnn"&&await n("webnn",nt(),r)}},di=new Map,fB=r=>{let e=nt(),t=e.stackSave();try{let n=e.PTR_SIZE,i=e.stackAlloc(2*n);e._OrtGetInputOutputCount(r,i,i+n)!==0&&qe("Can't get session input/output count.");let a=n===4?"i32":"i64";return[Number(e.getValue(i,a)),Number(e.getValue(i+n,a))]}finally{e.stackRestore(t)}},_S=(r,e)=>{let t=nt(),n=t.stackSave(),i=0;try{let o=t.PTR_SIZE,a=t.stackAlloc(2*o);t._OrtGetInputOutputMetadata(r,e,a,a+o)!==0&&qe("Can't get session input/output metadata.");let l=Number(t.getValue(a,"*"));i=Number(t.getValue(a+o,"*"));let d=t.HEAP32[i/4];if(d===0)return[l,0];let h=t.HEAPU32[i/4+1],g=[];for(let b=0;b<h;b++){let w=Number(t.getValue(i+8+b*o,"*"));g.push(w!==0?t.UTF8ToString(w):Number(t.getValue(i+8+(b+h)*o,"*")))}return[l,d,g]}finally{t.stackRestore(n),i!==0&&t._OrtFree(i)}},bo=r=>{let e=nt(),t=e._malloc(r.byteLength);if(t===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${r.byteLength}.`);return e.HEAPU8.set(r,t),[t,r.byteLength]},Ya=async(r,e)=>{let t,n,i=nt();Array.isArray(r)?[t,n]=r:r.buffer===i.HEAPU8.buffer?[t,n]=[r.byteOffset,r.byteLength]:[t,n]=bo(r);let o=0,a=0,s=0,l=[],d=[],h=[];try{if([a,l]=await ex(e),e?.externalData&&i.mountExternalData){let k=[];for(let V of e.externalData){let W=typeof V=="string"?V:V.path;k.push(wo(typeof V=="string"?V:V.data).then(F=>{i.mountExternalData(W,F)}))}await Promise.all(k)}for(let k of e?.executionProviders??[])if((typeof k=="string"?k:k.name)==="webnn"){if(i.shouldTransferToMLTensor=!1,typeof k!="string"){let W=k,F=W?.context,Y=W?.gpuDevice,ee=W?.deviceType,ue=W?.powerPreference;F?i.currentContext=F:Y?i.currentContext=await i.webnnCreateMLContext(Y):i.currentContext=await i.webnnCreateMLContext({deviceType:ee,powerPreference:ue})}else i.currentContext=await i.webnnCreateMLContext();break}o=await i._OrtCreateSession(t,n,a),i.webgpuOnCreateSession?.(o),o===0&&qe("Can't create a session."),i.jsepOnCreateSession?.(),i.currentContext&&(i.webnnRegisterMLContext(o,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[g,b]=fB(o),w=!!e?.enableGraphCapture,T=[],I=[],O=[],S=[],A=[];for(let k=0;k<g;k++){let[V,W,F]=_S(o,k);V===0&&qe("Can't get an input name."),d.push(V);let Y=i.UTF8ToString(V);T.push(Y),O.push(W===0?{name:Y,isTensor:!1}:{name:Y,isTensor:!0,type:lr(W),shape:F})}for(let k=0;k<b;k++){let[V,W,F]=_S(o,k+g);V===0&&qe("Can't get an output name."),h.push(V);let Y=i.UTF8ToString(V);I.push(Y),S.push(W===0?{name:Y,isTensor:!1}:{name:Y,isTensor:!0,type:lr(W),shape:F});{if(w&&e?.preferredOutputLocation===void 0){A.push("gpu-buffer");continue}let ee=typeof e?.preferredOutputLocation=="string"?e.preferredOutputLocation:e?.preferredOutputLocation?.[Y]??"cpu",ue=i.webnnIsGraphOutput;if(ee==="cpu"&&ue&&ue(o,Y)){A.push("ml-tensor-cpu-output");continue}if(ee!=="cpu"&&ee!=="cpu-pinned"&&ee!=="gpu-buffer"&&ee!=="ml-tensor")throw new Error(`Not supported preferred output location: ${ee}.`);if(w&&ee!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${ee}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);A.push(ee)}}let j=null;return A.some(k=>k==="gpu-buffer"||k==="ml-tensor"||k==="ml-tensor-cpu-output")&&(s=i._OrtCreateBinding(o),s===0&&qe("Can't create IO binding."),j={handle:s,outputPreferredLocations:A,outputPreferredLocationsEncoded:A.map(k=>k==="ml-tensor-cpu-output"?"ml-tensor":k).map(k=>Bc(k))}),di.set(o,[o,d,h,j,w,!1]),[o,T,I,O,S]}catch(g){throw d.forEach(b=>i._OrtFree(b)),h.forEach(b=>i._OrtFree(b)),s!==0&&i._OrtReleaseBinding(s)!==0&&qe("Can't release IO binding."),o!==0&&i._OrtReleaseSession(o)!==0&&qe("Can't release session."),g}finally{i._free(t),a!==0&&i._OrtReleaseSessionOptions(a)!==0&&qe("Can't release session options."),l.forEach(g=>i._free(g)),i.unmountExternalData?.()}},Qa=r=>{let e=nt(),t=di.get(r);if(!t)throw new Error(`cannot release session. invalid session id: ${r}`);let[n,i,o,a,s]=t;a&&(s&&e._OrtClearBoundOutputs(a.handle)!==0&&qe("Can't clear bound outputs."),e._OrtReleaseBinding(a.handle)!==0&&qe("Can't release IO binding.")),e.jsepOnReleaseSession?.(r),e.webnnOnReleaseSession?.(r),e.webgpuOnReleaseSession?.(r),i.forEach(l=>e._OrtFree(l)),o.forEach(l=>e._OrtFree(l)),e._OrtReleaseSession(n)!==0&&qe("Can't release session."),di.delete(r)},vS=async(r,e,t,n,i,o,a=!1)=>{if(!r){e.push(0);return}let s=nt(),l=s.PTR_SIZE,d=r[0],h=r[1],g=r[3],b=g,w,T;if(d==="string"&&(g==="gpu-buffer"||g==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&g!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${o} when enableGraphCapture is true.`);if(g==="gpu-buffer"){let S=r[2].gpuBuffer;T=zr(Mr(d),h);{let A=s.jsepRegisterBuffer;if(!A)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');w=A(n,o,S,T)}}else if(g==="ml-tensor"){let S=r[2].mlTensor;T=zr(Mr(d),h);let A=s.webnnRegisterMLTensor;if(!A)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');w=A(n,S,Mr(d),h)}else{let S=r[2];if(Array.isArray(S)){T=l*S.length,w=s._malloc(T),t.push(w);for(let A=0;A<S.length;A++){if(typeof S[A]!="string")throw new TypeError(`tensor data at index ${A} is not a string`);s.setValue(w+A*l,Zt(S[A],t),"*")}}else{let A=s.webnnIsGraphInput,j=s.webnnIsGraphOutput;if(d!=="string"&&A&&j){let k=s.UTF8ToString(i);if(A(n,k)||j(n,k)){let V=Mr(d);T=zr(V,h),b="ml-tensor";let W=s.webnnCreateTemporaryTensor,F=s.webnnUploadTensor;if(!W||!F)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let Y=await W(n,V,h);F(Y,new Uint8Array(S.buffer,S.byteOffset,S.byteLength)),w=Y}else T=S.byteLength,w=s._malloc(T),t.push(w),s.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,T),w)}else T=S.byteLength,w=s._malloc(T),t.push(w),s.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,T),w)}}let I=s.stackSave(),O=s.stackAlloc(4*h.length);try{h.forEach((A,j)=>s.setValue(O+j*l,A,l===4?"i32":"i64"));let S=s._OrtCreateTensor(Mr(d),w,T,O,h.length,Bc(b));S===0&&qe(`Can't create tensor for input/output. session=${n}, index=${o}.`),e.push(S)}finally{s.stackRestore(I)}},es=async(r,e,t,n,i,o)=>{let a=nt(),s=a.PTR_SIZE,l=di.get(r);if(!l)throw new Error(`cannot run inference. invalid session id: ${r}`);let d=l[0],h=l[1],g=l[2],b=l[3],w=l[4],T=l[5],I=e.length,O=n.length,S=0,A=[],j=[],k=[],V=[],W=[],F=a.stackSave(),Y=a.stackAlloc(I*s),ee=a.stackAlloc(I*s),ue=a.stackAlloc(O*s),Te=a.stackAlloc(O*s);try{[S,A]=YT(o),Ar("wasm prepareInputOutputTensor");for(let P=0;P<I;P++)await vS(t[P],j,V,r,h[e[P]],e[P],w);for(let P=0;P<O;P++)await vS(i[P],k,V,r,g[n[P]],I+n[P],w);Cr("wasm prepareInputOutputTensor");for(let P=0;P<I;P++)a.setValue(Y+P*s,j[P],"*"),a.setValue(ee+P*s,h[e[P]],"*");for(let P=0;P<O;P++)a.setValue(ue+P*s,k[P],"*"),a.setValue(Te+P*s,g[n[P]],"*");if(b&&!T){let{handle:P,outputPreferredLocations:ye,outputPreferredLocationsEncoded:xe}=b;if(h.length!==I)throw new Error(`input count from feeds (${I}) is expected to be always equal to model's input count (${h.length}).`);Ar("wasm bindInputsOutputs");for(let $=0;$<I;$++){let oe=e[$];await a._OrtBindInput(P,h[oe],j[$])!==0&&qe(`Can't bind input[${$}] for session=${r}.`)}for(let $=0;$<O;$++){let oe=n[$];i[$]?.[3]?(W.push(k[$]),a._OrtBindOutput(P,g[oe],k[$],0)!==0&&qe(`Can't bind pre-allocated output[${$}] for session=${r}.`)):a._OrtBindOutput(P,g[oe],0,xe[oe])!==0&&qe(`Can't bind output[${$}] to ${ye[$]} for session=${r}.`)}Cr("wasm bindInputsOutputs"),di.set(r,[d,h,g,b,w,!0])}a.jsepOnRunStart?.(d),a.webnnOnRunStart?.(d);let ge;b?ge=await a._OrtRunWithBinding(d,b.handle,O,ue,S):ge=await a._OrtRun(d,ee,Y,I,Te,O,ue,S),ge!==0&&qe("failed to call OrtRun().");let we=[],Oe=[];Ar("wasm ProcessOutputTensor");for(let P=0;P<O;P++){let ye=Number(a.getValue(ue+P*s,"*"));if(ye===k[P]||W.includes(k[P])){we.push(i[P]),ye!==k[P]&&a._OrtReleaseTensor(ye)!==0&&qe("Can't release tensor.");continue}let xe=a.stackSave(),$=a.stackAlloc(4*s),oe=!1,Le,ot=0;try{a._OrtGetTensorData(ye,$,$+s,$+2*s,$+3*s)!==0&&qe(`Can't access output tensor data on index ${P}.`);let Ce=s===4?"i32":"i64",re=Number(a.getValue($,Ce));ot=a.getValue($+s,"*");let te=a.getValue($+s*2,"*"),le=Number(a.getValue($+s*3,Ce)),Rt=[];for(let yt=0;yt<le;yt++)Rt.push(Number(a.getValue(te+yt*s,Ce)));a._OrtFree(te)!==0&&qe("Can't free memory for tensor dims.");let kt=Rt.reduce((yt,Xe)=>yt*Xe,1);Le=lr(re);let H=b?.outputPreferredLocations[n[P]];if(Le==="string"){if(H==="gpu-buffer"||H==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let yt=[];for(let Xe=0;Xe<kt;Xe++){let ct=a.getValue(ot+Xe*s,"*"),Ot=a.getValue(ot+(Xe+1)*s,"*"),yr=Xe===kt-1?void 0:Ot-ct;yt.push(a.UTF8ToString(ct,yr))}we.push([Le,Rt,yt,"cpu"])}else if(H==="gpu-buffer"&&kt>0){let yt=a.jsepGetBuffer;if(!yt)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Xe=yt(ot),ct=zr(re,kt);if(ct===void 0||!as(Le))throw new Error(`Unsupported data type: ${Le}`);oe=!0,we.push([Le,Rt,{gpuBuffer:Xe,download:a.jsepCreateDownloader(Xe,ct,Le),dispose:()=>{a._OrtReleaseTensor(ye)!==0&&qe("Can't release tensor.")}},"gpu-buffer"])}else if(H==="ml-tensor"&&kt>0){let yt=a.webnnEnsureTensor,Xe=a.webnnIsGraphInputOutputTypeSupported;if(!yt||!Xe)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(zr(re,kt)===void 0||!ss(Le))throw new Error(`Unsupported data type: ${Le}`);if(!Xe(r,Le,!1))throw new Error(`preferredLocation "ml-tensor" for ${Le} output is not supported by current WebNN Context.`);let Ot=await yt(r,ot,re,Rt,!1);oe=!0,we.push([Le,Rt,{mlTensor:Ot,download:a.webnnCreateMLTensorDownloader(ot,Le),dispose:()=>{a.webnnReleaseTensorId(ot),a._OrtReleaseTensor(ye)}},"ml-tensor"])}else if(H==="ml-tensor-cpu-output"&&kt>0){let yt=a.webnnCreateMLTensorDownloader(ot,Le)(),Xe=we.length;oe=!0,Oe.push((async()=>{let ct=[Xe,await yt];return a.webnnReleaseTensorId(ot),a._OrtReleaseTensor(ye),ct})()),we.push([Le,Rt,[],"cpu"])}else{let yt=Ei(Le),Xe=new yt(kt);new Uint8Array(Xe.buffer,Xe.byteOffset,Xe.byteLength).set(a.HEAPU8.subarray(ot,ot+Xe.byteLength)),we.push([Le,Rt,Xe,"cpu"])}}finally{a.stackRestore(xe),Le==="string"&&ot&&a._free(ot),oe||a._OrtReleaseTensor(ye)}}b&&!w&&(a._OrtClearBoundOutputs(b.handle)!==0&&qe("Can't clear bound outputs."),di.set(r,[d,h,g,b,w,!1]));for(let[P,ye]of await Promise.all(Oe))we[P][2]=ye;return Cr("wasm ProcessOutputTensor"),we}finally{a.webnnOnRunEnd?.(d),a.stackRestore(F),j.forEach(ge=>a._OrtReleaseTensor(ge)),k.forEach(ge=>a._OrtReleaseTensor(ge)),V.forEach(ge=>a._free(ge)),S!==0&&a._OrtReleaseRunOptions(S),A.forEach(ge=>a._free(ge))}},ts=r=>{let e=nt(),t=di.get(r);if(!t)throw new Error("invalid session id");let n=t[0],i=e._OrtEndProfiling(n);i===0&&qe("Can't get an profile file name."),e._OrtFree(i)},ns=r=>{let e=[];for(let t of r){let n=t[2];!Array.isArray(n)&&"buffer"in n&&e.push(n.buffer)}return e}});var fi,un,Ao,Ls,Ns,js,wd,Td,Li,Ni,hB,wS,TS,xS,IS,SS,$S,AS,xd=X(()=>{"use strict";Et();Lc();Rr();Ka();fi=()=>!!Pe.wasm.proxy&&typeof document<"u",Ao=!1,Ls=!1,Ns=!1,Td=new Map,Li=(r,e)=>{let t=Td.get(r);t?t.push(e):Td.set(r,[e])},Ni=()=>{if(Ao||!Ls||Ns||!un)throw new Error("worker not ready")},hB=r=>{switch(r.data.type){case"init-wasm":Ao=!1,r.data.err?(Ns=!0,wd[1](r.data.err)):(Ls=!0,wd[0]()),js&&(URL.revokeObjectURL(js),js=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let e=Td.get(r.data.type);r.data.err?e.shift()[1](r.data.err):e.shift()[0](r.data.out);break}default:}},wS=async()=>{if(!Ls){if(Ao)throw new Error("multiple calls to 'initWasm()' detected.");if(Ns)throw new Error("previous call to 'initWasm()' failed.");if(Ao=!0,fi())return new Promise((r,e)=>{un?.terminate(),XT().then(([t,n])=>{try{un=n,un.onerror=o=>e(o),un.onmessage=hB,wd=[r,e];let i={type:"init-wasm",in:Pe};!i.in.wasm.wasmPaths&&(t||Rc)&&(i.in.wasm.wasmPaths={wasm:new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href}),un.postMessage(i),js=t}catch(i){e(i)}},e)});try{await Xa(Pe.wasm),await Za(Pe),Ls=!0}catch(r){throw Ns=!0,r}finally{Ao=!1}}},TS=async r=>{if(fi())return Ni(),new Promise((e,t)=>{Li("init-ep",[e,t]);let n={type:"init-ep",in:{epName:r,env:Pe}};un.postMessage(n)});await Ja(Pe,r)},xS=async r=>fi()?(Ni(),new Promise((e,t)=>{Li("copy-from",[e,t]);let n={type:"copy-from",in:{buffer:r}};un.postMessage(n,[r.buffer])})):bo(r),IS=async(r,e)=>{if(fi()){if(e?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Ni(),new Promise((t,n)=>{Li("create",[t,n]);let i={type:"create",in:{model:r,options:{...e}}},o=[];r instanceof Uint8Array&&o.push(r.buffer),un.postMessage(i,o)})}else return Ya(r,e)},SS=async r=>{if(fi())return Ni(),new Promise((e,t)=>{Li("release",[e,t]);let n={type:"release",in:r};un.postMessage(n)});Qa(r)},$S=async(r,e,t,n,i,o)=>{if(fi()){if(t.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(i.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return Ni(),new Promise((a,s)=>{Li("run",[a,s]);let l=t,d={type:"run",in:{sessionId:r,inputIndices:e,inputs:l,outputIndices:n,options:o}};un.postMessage(d,ns(l))})}else return es(r,e,t,n,i,o)},AS=async r=>{if(fi())return Ni(),new Promise((e,t)=>{Li("end-profiling",[e,t]);let n={type:"end-profiling",in:r};un.postMessage(n)});ts(r)}});var CS,mB,Rs,OS=X(()=>{"use strict";Et();xd();$e();qa();Fc();CS=(r,e)=>{switch(r.location){case"cpu":return[r.type,r.dims,r.data,"cpu"];case"gpu-buffer":return[r.type,r.dims,{gpuBuffer:r.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[r.type,r.dims,{mlTensor:r.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${r.location} for ${e()}`)}},mB=r=>{switch(r[3]){case"cpu":return new Ht(r[0],r[2],r[1]);case"gpu-buffer":{let e=r[0];if(!as(e))throw new Error(`not supported data type: ${e} for deserializing GPU tensor`);let{gpuBuffer:t,download:n,dispose:i}=r[2];return Ht.fromGpuBuffer(t,{dataType:e,dims:r[1],download:n,dispose:i})}case"ml-tensor":{let e=r[0];if(!ss(e))throw new Error(`not supported data type: ${e} for deserializing MLTensor tensor`);let{mlTensor:t,download:n,dispose:i}=r[2];return Ht.fromMLTensor(t,{dataType:e,dims:r[1],download:n,dispose:i})}default:throw new Error(`invalid data location: ${r[3]}`)}},Rs=class{async fetchModelAndCopyToWasmMemory(e){return xS(await wo(e))}async loadModel(e,t){qt();let n;typeof e=="string"?n=await this.fetchModelAndCopyToWasmMemory(e):n=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await IS(n,t),zt()}async dispose(){return SS(this.sessionId)}async run(e,t,n){qt();let i=[],o=[];Object.entries(e).forEach(b=>{let w=b[0],T=b[1],I=this.inputNames.indexOf(w);if(I===-1)throw new Error(`invalid input '${w}'`);i.push(T),o.push(I)});let a=[],s=[];Object.entries(t).forEach(b=>{let w=b[0],T=b[1],I=this.outputNames.indexOf(w);if(I===-1)throw new Error(`invalid output '${w}'`);a.push(T),s.push(I)});let l=i.map((b,w)=>CS(b,()=>`input "${this.inputNames[o[w]]}"`)),d=a.map((b,w)=>b?CS(b,()=>`output "${this.outputNames[s[w]]}"`):null),h=await $S(this.sessionId,o,l,s,d,n),g={};for(let b=0;b<h.length;b++)g[this.outputNames[s[b]]]=a[b]??mB(h[b]);return zt(),g}startProfiling(){}endProfiling(){AS(this.sessionId)}}});var ES={};Wr(ES,{OnnxruntimeWebAssemblyBackend:()=>Ms,initializeFlags:()=>PS,wasmBackend:()=>gB});var PS,Ms,gB,DS=X(()=>{"use strict";Et();xd();OS();PS=()=>{(typeof Pe.wasm.initTimeout!="number"||Pe.wasm.initTimeout<0)&&(Pe.wasm.initTimeout=0);let r=Pe.wasm.simd;if(typeof r!="boolean"&&r!==void 0&&r!=="fixed"&&r!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${r}". Reset it to \`false\` and ignore SIMD feature checking.`),Pe.wasm.simd=!1),typeof Pe.wasm.proxy!="boolean"&&(Pe.wasm.proxy=!1),typeof Pe.wasm.trace!="boolean"&&(Pe.wasm.trace=!1),typeof Pe.wasm.numThreads!="number"||!Number.isInteger(Pe.wasm.numThreads)||Pe.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Pe.wasm.numThreads=1;else{let e=typeof navigator>"u"?au("node:os").cpus().length:navigator.hardwareConcurrency;Pe.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},Ms=class{async init(e){PS(),await wS(),await TS(e)}async createInferenceSessionHandler(e,t){let n=new Rs;return await n.loadModel(e,t),n}},gB=new Ms});Et();Et();Et();var ob="1.24.0";var Zee=fu;{let r=(NT(),bi(LT)).onnxjsBackend;$r("webgl",r,-10)}{let r=(DS(),bi(ES)).wasmBackend;$r("webgpu",r,5),$r("webnn",r,5),$r("cpu",r,10),$r("wasm",r,10)}Object.defineProperty(Pe.versions,"web",{value:ob,enumerable:!0});export{KE as InferenceSession,Go as TRACE,Ar as TRACE_EVENT_BEGIN,Cr as TRACE_EVENT_END,qt as TRACE_FUNC_BEGIN,zt as TRACE_FUNC_END,Ht as Tensor,Zee as default,Pe as env,$r as registerBackend};
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/*! Bundled license information:

long/index.js:
  (**
   * @license
   * Copyright 2009 The Closure Library Authors
   * Copyright 2020 Daniel Wirtz / The long.js Authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
//# sourceMappingURL=ort.all.bundle.min.mjs.map
