/*!
 * ONNX Runtime Web v1.22.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var Yn=Object.defineProperty;var mw=Object.getOwnPropertyDescriptor;var hw=Object.getOwnPropertyNames;var gw=Object.prototype.hasOwnProperty;var Zn=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,i)=>(typeof require<"u"?require:t)[i]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var Y=(e,t)=>()=>(e&&(t=e(e=0)),t);var qt=(e,t)=>{for(var i in t)Yn(e,i,{get:t[i],enumerable:!0})},yw=(e,t,i,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of hw(t))!gw.call(e,s)&&s!==i&&Yn(e,s,{get:()=>t[s],enumerable:!(r=mw(t,s))||r.enumerable});return e};var or=e=>yw(Yn({},"__esModule",{value:!0}),e);var kr,Ot,Bt,bw,Ul,Qn=Y(()=>{"use strict";kr=new Map,Ot=[],Bt=(e,t,i)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=kr.get(e);if(r===void 0)kr.set(e,{backend:t,priority:i});else{if(r.priority>i)return;if(r.priority===i&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${i}`)}if(i>=0){let s=Ot.indexOf(e);s!==-1&&Ot.splice(s,1);for(let d=0;d<Ot.length;d++)if(kr.get(Ot[d]).priority<=i){Ot.splice(d,0,e);return}Ot.push(e)}return}throw new TypeError("not a valid backend")},bw=async e=>{let t=kr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let i=!!t.initPromise;try{return i||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return i||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Ul=async e=>{let t=e.executionProviders||[],i=t.map(h=>typeof h=="string"?h:h.name),r=i.length===0?Ot:i,s,d=[],c=new Set;for(let h of r){let g=await bw(h);typeof g=="string"?d.push({name:h,err:g}):(s||(s=g),s===g&&c.add(h))}if(!s)throw new Error(`no available backend found. ERR: ${d.map(h=>`[${h.name}] ${h.err}`).join(", ")}`);for(let{name:h,err:g}of d)i.includes(h)&&console.warn(`removing requested execution provider "${h}" from session options because it is not available: ${g}`);let f=t.filter(h=>c.has(typeof h=="string"?h:h.name));return[s,new Proxy(e,{get:(h,g)=>g==="executionProviders"?f:Reflect.get(h,g)})]}});var jl=Y(()=>{"use strict";Qn()});var Nl,Vl=Y(()=>{"use strict";Nl="1.22.0"});var Wl,Ke,Xn=Y(()=>{"use strict";Vl();Wl="warning",Ke={wasm:{},webgl:{},webgpu:{},versions:{common:Nl},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Wl=e}},get logLevel(){return Wl}};Object.defineProperty(Ke,"logLevel",{enumerable:!0})});var ke,Ll=Y(()=>{"use strict";Xn();ke=Ke});var Gl,Hl,Fl=Y(()=>{"use strict";Gl=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);i.width=e.dims[3],i.height=e.dims[2];let r=i.getContext("2d");if(r!=null){let s,d;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],d=e.dims[3]):(s=e.dims[3],d=e.dims[2]);let c=t?.format!==void 0?t.format:"RGB",f=t?.norm,h,g;f===void 0||f.mean===void 0?h=[255,255,255,255]:typeof f.mean=="number"?h=[f.mean,f.mean,f.mean,f.mean]:(h=[f.mean[0],f.mean[1],f.mean[2],0],f.mean[3]!==void 0&&(h[3]=f.mean[3])),f===void 0||f.bias===void 0?g=[0,0,0,0]:typeof f.bias=="number"?g=[f.bias,f.bias,f.bias,f.bias]:(g=[f.bias[0],f.bias[1],f.bias[2],0],f.bias[3]!==void 0&&(g[3]=f.bias[3]));let b=d*s,w=0,v=b,C=b*2,x=-1;c==="RGBA"?(w=0,v=b,C=b*2,x=b*3):c==="RGB"?(w=0,v=b,C=b*2):c==="RBG"&&(w=0,C=b,v=b*2);for(let S=0;S<d;S++)for(let k=0;k<s;k++){let A=(e.data[w++]-g[0])*h[0],I=(e.data[v++]-g[1])*h[1],P=(e.data[C++]-g[2])*h[2],B=x===-1?255:(e.data[x++]-g[3])*h[3];r.fillStyle="rgba("+A+","+I+","+P+","+B+")",r.fillRect(k,S,1,1)}if("toDataURL"in i)return i.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Hl=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(i!=null){let s,d,c;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],d=e.dims[1],c=e.dims[3]):(s=e.dims[3],d=e.dims[2],c=e.dims[1]);let f=t!==void 0&&t.format!==void 0?t.format:"RGB",h=t?.norm,g,b;h===void 0||h.mean===void 0?g=[255,255,255,255]:typeof h.mean=="number"?g=[h.mean,h.mean,h.mean,h.mean]:(g=[h.mean[0],h.mean[1],h.mean[2],255],h.mean[3]!==void 0&&(g[3]=h.mean[3])),h===void 0||h.bias===void 0?b=[0,0,0,0]:typeof h.bias=="number"?b=[h.bias,h.bias,h.bias,h.bias]:(b=[h.bias[0],h.bias[1],h.bias[2],0],h.bias[3]!==void 0&&(b[3]=h.bias[3]));let w=d*s;if(t!==void 0&&(t.format!==void 0&&c===4&&t.format!=="RGBA"||c===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let v=4,C=0,x=1,S=2,k=3,A=0,I=w,P=w*2,B=-1;f==="RGBA"?(A=0,I=w,P=w*2,B=w*3):f==="RGB"?(A=0,I=w,P=w*2):f==="RBG"&&(A=0,P=w,I=w*2),r=i.createImageData(s,d);for(let V=0;V<d*s;C+=v,x+=v,S+=v,k+=v,V++)r.data[C]=(e.data[A++]-b[0])*g[0],r.data[x]=(e.data[I++]-b[1])*g[1],r.data[S]=(e.data[P++]-b[2])*g[2],r.data[k]=B===-1?255:(e.data[B++]-b[3])*g[3]}else throw new Error("Can not access image data");return r}});var Jn,ql,Kl,Yl,Zl,Ql,Xl=Y(()=>{"use strict";Pr();Jn=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:i,width:r}=t,s=t.norm??{mean:255,bias:0},d,c;typeof s.mean=="number"?d=[s.mean,s.mean,s.mean,s.mean]:d=[s.mean[0],s.mean[1],s.mean[2],s.mean[3]??255],typeof s.bias=="number"?c=[s.bias,s.bias,s.bias,s.bias]:c=[s.bias[0],s.bias[1],s.bias[2],s.bias[3]??0];let f=t.format!==void 0?t.format:"RGBA",h=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",g=i*r,b=h==="RGBA"?new Float32Array(g*4):new Float32Array(g*3),w=4,v=0,C=1,x=2,S=3,k=0,A=g,I=g*2,P=-1;f==="RGB"&&(w=3,v=0,C=1,x=2,S=-1),h==="RGBA"?P=g*3:h==="RBG"?(k=0,I=g,A=g*2):h==="BGR"&&(I=0,A=g,k=g*2);for(let V=0;V<g;V++,v+=w,x+=w,C+=w,S+=w)b[k++]=(e[v]+c[0])/d[0],b[A++]=(e[C]+c[1])/d[1],b[I++]=(e[x]+c[2])/d[2],P!==-1&&S!==-1&&(b[P++]=(e[S]+c[3])/d[3]);return h==="RGBA"?new Le("float32",b,[1,4,i,r]):new Le("float32",b,[1,3,i,r])},ql=async(e,t)=>{let i=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,s=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,d=typeof e=="string",c,f=t??{},h=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},g=b=>typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||b instanceof OffscreenCanvas?b.getContext("2d"):null;if(i){let b=h();b.width=e.width,b.height=e.height;let w=g(b);if(w!=null){let v=e.height,C=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(v=t.resizedHeight,C=t.resizedWidth),t!==void 0){if(f=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");f.tensorFormat="RGBA",f.height=v,f.width=C}else f.tensorFormat="RGBA",f.height=v,f.width=C;w.drawImage(e,0,0),c=w.getImageData(0,0,C,v).data}else throw new Error("Can not access image data")}else if(r){let b,w;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(b=t.resizedHeight,w=t.resizedWidth):(b=e.height,w=e.width),t!==void 0&&(f=t),f.format="RGBA",f.height=b,f.width=w,t!==void 0){let v=h();v.width=w,v.height=b;let C=g(v);if(C!=null)C.putImageData(e,0,0),c=C.getImageData(0,0,w,b).data;else throw new Error("Can not access image data")}else c=e.data}else if(s){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let b=h();b.width=e.width,b.height=e.height;let w=g(b);if(w!=null){let v=e.height,C=e.width;return w.drawImage(e,0,0,C,v),c=w.getImageData(0,0,C,v).data,f.height=v,f.width=C,Jn(c,f)}else throw new Error("Can not access image data")}else{if(d)return new Promise((b,w)=>{let v=h(),C=g(v);if(!e||!C)return w();let x=new Image;x.crossOrigin="Anonymous",x.src=e,x.onload=()=>{v.width=x.width,v.height=x.height,C.drawImage(x,0,0,v.width,v.height);let S=C.getImageData(0,0,v.width,v.height);f.height=v.height,f.width=v.width,b(Jn(S.data,f))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(c!==void 0)return Jn(c,f);throw new Error("Input data provided is not supported - aborted tensor creation")},Kl=(e,t)=>{let{width:i,height:r,download:s,dispose:d}=t,c=[1,r,i,4];return new Le({location:"texture",type:"float32",texture:e,dims:c,download:s,dispose:d})},Yl=(e,t)=>{let{dataType:i,dims:r,download:s,dispose:d}=t;return new Le({location:"gpu-buffer",type:i??"float32",gpuBuffer:e,dims:r,download:s,dispose:d})},Zl=(e,t)=>{let{dataType:i,dims:r,download:s,dispose:d}=t;return new Le({location:"ml-tensor",type:i??"float32",mlTensor:e,dims:r,download:s,dispose:d})},Ql=(e,t,i)=>new Le({location:"cpu-pinned",type:e,data:t,dims:i??[t.length]})});var Dt,ar,Jl,ed,td=Y(()=>{"use strict";Dt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),ar=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Jl=!1,ed=()=>{if(!Jl){Jl=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,i=globalThis.Float16Array,r=typeof i<"u"&&i.from;e&&(Dt.set("int64",BigInt64Array),ar.set(BigInt64Array,"int64")),t&&(Dt.set("uint64",BigUint64Array),ar.set(BigUint64Array,"uint64")),r?(Dt.set("float16",i),ar.set(i,"float16")):Dt.set("float16",Uint16Array)}}});var rd,nd,id=Y(()=>{"use strict";Pr();rd=e=>{let t=1;for(let i=0;i<e.length;i++){let r=e[i];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${i}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${i}] must be a non-negative integer, got: ${r}`);t*=r}return t},nd=(e,t)=>{switch(e.location){case"cpu":return new Le(e.type,e.data,t);case"cpu-pinned":return new Le({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Le({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Le({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Le({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}});var Le,Pr=Y(()=>{"use strict";Fl();Xl();td();id();Le=class{constructor(t,i,r){ed();let s,d;if(typeof t=="object"&&"location"in t)switch(this.dataLocation=t.location,s=t.type,d=t.dims,t.location){case"cpu-pinned":{let f=Dt.get(s);if(!f)throw new TypeError(`unsupported type "${s}" to create tensor from pinned buffer`);if(!(t.data instanceof f))throw new TypeError(`buffer should be of type ${f.name}`);this.cpuData=t.data;break}case"texture":{if(s!=="float32")throw new TypeError(`unsupported type "${s}" to create tensor from texture`);this.gpuTextureData=t.texture,this.downloader=t.download,this.disposer=t.dispose;break}case"gpu-buffer":{if(s!=="float32"&&s!=="float16"&&s!=="int32"&&s!=="int64"&&s!=="uint32"&&s!=="uint8"&&s!=="bool"&&s!=="uint4"&&s!=="int4")throw new TypeError(`unsupported type "${s}" to create tensor from gpu buffer`);this.gpuBufferData=t.gpuBuffer,this.downloader=t.download,this.disposer=t.dispose;break}case"ml-tensor":{if(s!=="float32"&&s!=="float16"&&s!=="int32"&&s!=="int64"&&s!=="uint32"&&s!=="uint64"&&s!=="int8"&&s!=="uint8"&&s!=="bool"&&s!=="uint4"&&s!=="int4")throw new TypeError(`unsupported type "${s}" to create tensor from MLTensor`);this.mlTensorData=t.mlTensor,this.downloader=t.download,this.disposer=t.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let f,h;if(typeof t=="string")if(s=t,h=r,t==="string"){if(!Array.isArray(i))throw new TypeError("A string tensor's data must be a string array.");f=i}else{let g=Dt.get(t);if(g===void 0)throw new TypeError(`Unsupported tensor type: ${t}.`);if(Array.isArray(i)){if(t==="float16"&&g===Uint16Array||t==="uint4"||t==="int4")throw new TypeError(`Creating a ${t} tensor from number array is not supported. Please use ${g.name} as data.`);t==="uint64"||t==="int64"?f=g.from(i,BigInt):f=g.from(i)}else if(i instanceof g)f=i;else if(i instanceof Uint8ClampedArray)if(t==="uint8")f=Uint8Array.from(i);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(t==="float16"&&i instanceof Uint16Array&&g!==Uint16Array)f=new globalThis.Float16Array(i.buffer,i.byteOffset,i.length);else throw new TypeError(`A ${s} tensor's data must be type of ${g}`)}else if(h=i,Array.isArray(t)){if(t.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let g=typeof t[0];if(g==="string")s="string",f=t;else if(g==="boolean")s="bool",f=Uint8Array.from(t);else throw new TypeError(`Invalid element type of data array: ${g}.`)}else if(t instanceof Uint8ClampedArray)s="uint8",f=Uint8Array.from(t);else{let g=ar.get(t.constructor);if(g===void 0)throw new TypeError(`Unsupported type for tensor data: ${t.constructor}.`);s=g,f=t}if(h===void 0)h=[f.length];else if(!Array.isArray(h))throw new TypeError("A tensor's dims must be a number array");d=h,this.cpuData=f,this.dataLocation="cpu"}let c=rd(d);if(this.cpuData&&c!==this.cpuData.length&&!((s==="uint4"||s==="int4")&&Math.ceil(c/2)===this.cpuData.length))throw new Error(`Tensor's size(${c}) does not match data length(${this.cpuData.length}).`);this.type=s,this.dims=d,this.size=c}static async fromImage(t,i){return ql(t,i)}static fromTexture(t,i){return Kl(t,i)}static fromGpuBuffer(t,i){return Yl(t,i)}static fromMLTensor(t,i){return Zl(t,i)}static fromPinnedBuffer(t,i,r){return Ql(t,i,r)}toDataURL(t){return Gl(this,t)}toImageData(t){return Hl(this,t)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(t){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let i=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=i,t&&this.disposer&&(this.disposer(),this.disposer=void 0),i}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(t){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return nd(this,t)}}});var rt,ei=Y(()=>{"use strict";Pr();rt=Le});var zr,od,Ye,He,ti=Y(()=>{"use strict";Xn();zr=(e,t)=>{(typeof Ke.trace>"u"?!Ke.wasm.trace:!Ke.trace)||console.timeStamp(`${e}::ORT::${t}`)},od=(e,t)=>{let i=new Error().stack?.split(/\r\n|\r|\n/g)||[],r=!1;for(let s=0;s<i.length;s++){if(r&&!i[s].includes("TRACE_FUNC")){let d=`FUNC_${e}::${i[s].trim().split(" ")[1]}`;t&&(d+=`::${t}`),zr("CPU",d);return}i[s].includes("TRACE_FUNC")&&(r=!0)}},Ye=e=>{(typeof Ke.trace>"u"?!Ke.wasm.trace:!Ke.trace)||od("BEGIN",e)},He=e=>{(typeof Ke.trace>"u"?!Ke.wasm.trace:!Ke.trace)||od("END",e)}});var Or,ad=Y(()=>{"use strict";Qn();ei();ti();Or=class e{constructor(t){this.handler=t}async run(t,i,r){Ye();let s={},d={};if(typeof t!="object"||t===null||t instanceof rt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let c=!0;if(typeof i=="object"){if(i===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(i instanceof rt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(i)){if(i.length===0)throw new TypeError("'fetches' cannot be an empty array.");c=!1;for(let g of i){if(typeof g!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(g)===-1)throw new RangeError(`'fetches' contains invalid output name: ${g}.`);s[g]=null}if(typeof r=="object"&&r!==null)d=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let g=!1,b=Object.getOwnPropertyNames(i);for(let w of this.outputNames)if(b.indexOf(w)!==-1){let v=i[w];(v===null||v instanceof rt)&&(g=!0,c=!1,s[w]=v)}if(g){if(typeof r=="object"&&r!==null)d=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else d=i}}else if(typeof i<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let g of this.inputNames)if(typeof t[g]>"u")throw new Error(`input '${g}' is missing in 'feeds'.`);if(c)for(let g of this.outputNames)s[g]=null;let f=await this.handler.run(t,s,d),h={};for(let g in f)if(Object.hasOwnProperty.call(f,g)){let b=f[g];b instanceof rt?h[g]=b:h[g]=new rt(b.type,b.data,b.dims)}return He(),h}async release(){return this.handler.dispose()}static async create(t,i,r,s){Ye();let d,c={};if(typeof t=="string"){if(d=t,typeof i=="object"&&i!==null)c=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(d=t,typeof i=="object"&&i!==null)c=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let b=t,w=0,v=t.byteLength;if(typeof i=="object"&&i!==null)c=i;else if(typeof i=="number"){if(w=i,!Number.isSafeInteger(w))throw new RangeError("'byteOffset' must be an integer.");if(w<0||w>=b.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${b.byteLength}).`);if(v=t.byteLength-w,typeof r=="number"){if(v=r,!Number.isSafeInteger(v))throw new RangeError("'byteLength' must be an integer.");if(v<=0||w+v>b.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${b.byteLength-w}].`);if(typeof s=="object"&&s!==null)c=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof i<"u")throw new TypeError("'options' must be an object.");d=new Uint8Array(b,w,v)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[f,h]=await Ul(c),g=await f.createInferenceSessionHandler(d,h);return He(),new e(g)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}});var _w,sd=Y(()=>{"use strict";ad();_w=Or});var ud=Y(()=>{"use strict"});var ld=Y(()=>{"use strict"});var dd=Y(()=>{"use strict"});var cd=Y(()=>{"use strict"});var ri={};qt(ri,{InferenceSession:()=>_w,TRACE:()=>zr,TRACE_FUNC_BEGIN:()=>Ye,TRACE_FUNC_END:()=>He,Tensor:()=>rt,env:()=>ke,registerBackend:()=>Bt});var Je=Y(()=>{"use strict";jl();Ll();sd();ei();ud();ld();ti();dd();cd()});var Br=Y(()=>{"use strict"});var hd={};qt(hd,{default:()=>ww});var fd,md,ww,gd=Y(()=>{"use strict";ni();It();Dr();fd="ort-wasm-proxy-worker",md=globalThis.self?.name===fd;md&&(self.onmessage=e=>{let{type:t,in:i}=e.data;try{switch(t){case"init-wasm":Mr(i.wasm).then(()=>{Rr(i).then(()=>{postMessage({type:t})},r=>{postMessage({type:t,err:r})})},r=>{postMessage({type:t,err:r})});break;case"init-ep":{let{epName:r,env:s}=i;Ur(s,r).then(()=>{postMessage({type:t})},d=>{postMessage({type:t,err:d})});break}case"copy-from":{let{buffer:r}=i,s=sr(r);postMessage({type:t,out:s});break}case"create":{let{model:r,options:s}=i;jr(r,s).then(d=>{postMessage({type:t,out:d})},d=>{postMessage({type:t,err:d})});break}case"release":Nr(i),postMessage({type:t});break;case"run":{let{sessionId:r,inputIndices:s,inputs:d,outputIndices:c,options:f}=i;Vr(r,s,d,c,new Array(c.length).fill(null),f).then(h=>{h.some(g=>g[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:h},Lr([...d,...h]))},h=>{postMessage({type:t,err:h})});break}case"end-profiling":Wr(i),postMessage({type:t});break;default:}}catch(r){postMessage({type:t,err:r})}});ww=md?null:e=>new Worker(e??Ze,{type:"module",name:fd})});var bd={};qt(bd,{default:()=>vw});var ii,yd,vw,$w,_d=Y(()=>{"use strict";yd=(ii=import.meta.url,async function(e={}){var t,i,r=e,s=new Promise((n,o)=>{t=n,i=o}),d=typeof window=="object",c=typeof WorkerGlobalScope<"u",f=c&&self.name?.startsWith("em-pthread");r.mountExternalData=(n,o)=>{n.startsWith("./")&&(n=n.substring(2)),(r.bj||(r.bj=new Map)).set(n,o)},r.unmountExternalData=()=>{delete r.bj};var h=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,Mj:!0}).buffer.constructor;let g=n=>async(...o)=>{try{if(r.cj)throw Error("Session already started");let a=r.cj={Cj:o[0],errors:[]},u=await n(...o);if(r.cj!==a)throw Error("Session mismatch");r.dj?.flush();let l=a.errors;if(0<l.length){let p=await Promise.all(l);if(p=p.filter(m=>m),0<p.length)throw Error(p.join(`
`))}return u}finally{r.cj=null}};r.jsepInit=(n,o)=>{if(n==="webgpu"){[r.dj,r.rj,r.vj,r.hj,r.uj,r.Ye,r.wj,r.zj,r.sj,r.tj,r.xj]=o;let a=r.dj;r.jsepRegisterBuffer=(u,l,p,m)=>a.registerBuffer(u,l,p,m),r.jsepGetBuffer=u=>a.getBuffer(u),r.jsepCreateDownloader=(u,l,p)=>a.createDownloader(u,l,p),r.jsepOnCreateSession=u=>{a.onCreateSession(u)},r.jsepOnReleaseSession=u=>{a.onReleaseSession(u)},r.jsepOnRunStart=u=>a.onRunStart(u),r.Aj=(u,l)=>{a.upload(u,l)}}else if(n==="webnn"){[r.dj,r.yj,r.ij,r.jsepEnsureTensor,r.jj,r.jsepDownloadTensor]=o,r.jsepReleaseTensorId=r.ij,r.jsepUploadTensor=r.jj;let a=r.dj;r.jsepOnRunStart=u=>a.onRunStart(u),r.jsepOnRunEnd=a.onRunEnd.bind(a),r.jsepRegisterMLContext=(u,l)=>{a.registerMLContext(u,l)},r.jsepOnReleaseSession=u=>{a.onReleaseSession(u)},r.jsepCreateMLTensorDownloader=(u,l)=>a.createMLTensorDownloader(u,l),r.jsepRegisterMLTensor=(u,l,p,m)=>a.registerMLTensor(u,l,p,m),r.jsepCreateMLContext=u=>a.createMLContext(u),r.jsepRegisterMLConstant=(u,l,p,m,y)=>a.registerMLConstant(u,l,p,m,y,r.bj),r.jsepRegisterGraphInput=a.registerGraphInput.bind(a),r.jsepIsGraphInput=a.isGraphInput.bind(a),r.jsepCreateTemporaryTensor=a.createTemporaryTensor.bind(a)}};let b=()=>{let n=(o,a,u)=>(...l)=>{let p=ut,m=a?.();l=o(...l);let y=a?.();return m!==y&&(o=y,u(m),a=u=null),ut!=p?new Promise((_,$)=>{Nn={resolve:_,reject:$}}):l};(()=>{for(let o of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])r[o]=n(r[o],()=>r[o],a=>r[o]=a)})(),g!==void 0&&(r._OrtRun=g(r._OrtRun),r._OrtRunWithBinding=g(r._OrtRunWithBinding)),b=void 0};r.asyncInit=()=>{b?.()};var w,v,C=Object.assign({},r),x=(n,o)=>{throw o},S="";(d||c)&&(c?S=self.location.href:typeof document<"u"&&document.currentScript&&(S=document.currentScript.src),ii&&(S=ii),S=S.startsWith("blob:")?"":S.slice(0,S.replace(/[?#].*/,"").lastIndexOf("/")+1),c&&(v=n=>{var o=new XMLHttpRequest;return o.open("GET",n,!1),o.responseType="arraybuffer",o.send(null),new Uint8Array(o.response)}),w=async n=>{if(le(n))return new Promise((a,u)=>{var l=new XMLHttpRequest;l.open("GET",n,!0),l.responseType="arraybuffer",l.onload=()=>{l.status==200||l.status==0&&l.response?a(l.response):u(l.status)},l.onerror=u,l.send(null)});var o=await fetch(n,{credentials:"same-origin"});if(o.ok)return o.arrayBuffer();throw Error(o.status+" : "+o.url)});var k=console.log.bind(console),A=console.error.bind(console),I=k,P=A;Object.assign(r,C),C=null;var B,V,j,H,F,Z,te,ie,ue,ee,se,Pe,re,ae=r.wasmBinary,fe=!1,le=n=>n.startsWith("file://");function _e(){return B.buffer!=H.buffer&&Ue(),H}function Te(){return B.buffer!=H.buffer&&Ue(),F}function Ee(){return B.buffer!=H.buffer&&Ue(),Z}function me(){return B.buffer!=H.buffer&&Ue(),te}function D(){return B.buffer!=H.buffer&&Ue(),ie}function J(){return B.buffer!=H.buffer&&Ue(),ue}function ve(){return B.buffer!=H.buffer&&Ue(),ee}function Ge(){return B.buffer!=H.buffer&&Ue(),re}if(f){let n=function(o){try{var a=o.data,u=a.Zi;if(u==="load"){let l=[];self.onmessage=p=>l.push(p),self.startWorker=()=>{postMessage({Zi:"loaded"});for(let p of l)n(p);self.onmessage=n};for(let p of a.oj)r[p]&&!r[p].proxy||(r[p]=(...m)=>{postMessage({Zi:"callHandler",nj:p,args:m})},p=="print"&&(I=r[p]),p=="printErr"&&(P=r[p]));B=a.Ij,Ue(),ze(a.Jj)}else if(u==="run"){dh(a.Yi),Gn(a.Yi,0,0,1,0,0),Ji(),Un(a.Yi),De||(Ko(),De=!0);try{ch(a.Ej,a.fj)}catch(l){if(l!="unwind")throw l}}else a.target!=="setimmediate"&&(u==="checkMailbox"?De&&wr():u&&(P(`worker: received unknown command ${u}`),P(a)))}catch(l){throw Yo(),l}};var K$=n,ze,De=!1;P=function(...o){o=o.join(" "),console.error(o)},self.alert=function(...o){postMessage({Zi:"alert",text:o.join(" "),Gj:Ar()})},self.onunhandledrejection=o=>{throw o.reason||o},self.onmessage=n}function Ue(){var n=B.buffer;r.HEAP8=H=new Int8Array(n),r.HEAP16=Z=new Int16Array(n),r.HEAPU8=F=new Uint8Array(n),r.HEAPU16=te=new Uint16Array(n),r.HEAP32=ie=new Int32Array(n),r.HEAPU32=ue=new Uint32Array(n),r.HEAPF32=ee=new Float32Array(n),r.HEAPF64=re=new Float64Array(n),r.HEAP64=se=new BigInt64Array(n),r.HEAPU64=Pe=new BigUint64Array(n)}function er(){f?startWorker(r):O.oe()}f||(B=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Ue());var Wt,Lt=0,tr=null;function Fi(){if(--Lt==0&&tr){var n=tr;tr=null,n()}}function yt(n){throw P(n="Aborted("+n+")"),fe=!0,n=new WebAssembly.RuntimeError(n+". Build with -sASSERTIONS for more info."),i(n),n}function qi(){return{a:{sc:lh,Vd:uh,v:ph,X:fh,b:hh,n:gh,z:yh,r:bh,Nb:_h,t:wh,db:vh,ld:no,g:mh,Lb:ao,Bd:so,hd:lo,jd:co,Cd:po,zd:fo,sd:mo,yd:ho,nc:go,id:yo,fd:bo,Ad:_o,gd:wo,Hd:$h,ic:Ch,$c:Sh,Zc:Ih,hc:Eh,Fa:kh,ha:Ph,_c:zh,Kb:jh,ad:Nh,vd:Vh,cd:Wh,md:Lh,Xc:Gh,jc:Hh,ud:Un,Ed:Fh,$d:qh,Xd:Kh,ne:Qh,jb:Xh,pa:eg,ed:Dn,le:tg,ja:ig,qb:og,ke:ag,V:sg,Vc:ug,_d:lg,ca:dg,rb:cg,ge:pg,be:fg,Ea:mg,pd:hg,qd:gg,rd:yg,nd:Bo,od:Do,Yc:Mo,Jd:_g,Gd:$g,C:xg,Vb:Cg,kc:Sg,Fd:wg,vb:Tg,Dd:Ig,dd:Ag,_:bg,sb:Eg,oc:kg,bd:Pg,Ld:zg,Kd:Og,wd:No,xd:Vo,kd:kn,Mb:Wo,mc:Lo,td:Go,lc:Ho,Ib:$y,xb:v_,xa:J_,O:tw,M:ew,ua:t_,za:wy,yc:m_,Xb:w_,Od:Q_,W:Mb,y:ny,c:Ng,Wc:ey,Ta:Jg,f:Ug,Aa:Z_,i:Rg,ea:sb,j:Hg,Md:cw,k:Gg,w:Lg,s:oy,q:_y,Ia:ky,L:fy,oa:Wy,la:uy,cc:Db,ab:Rb,Sb:U_,gb:S_,Jc:ub,Sc:Ay,Gc:fb,bb:rb,Hc:cb,Ob:dw,ma:o_,Jb:py,fc:ob,ub:sw,ia:ab,Kc:eb,I:Ib,Ic:lb,Ra:jb,G:db,mb:Ny,fe:pb,ta:h_,Ha:Gy,B:Xg,ec:_b,Fc:mb,Nc:Qy,Oc:Zy,gc:Yy,ee:gb,Sa:Uy,Z:c_,eb:iw,Pb:aw,Za:uw,Ua:rw,Mc:Xy,pc:lw,_b:r_,aa:vy,J:ty,E:Fy,Ca:Ly,P:Qb,wc:T_,Ec:yb,Lc:Jy,S:bb,d:Wg,Xa:kb,m:Vg,Qc:Dy,Ka:F_,wa:tb,Eb:wb,h:jg,Rc:By,Y:ib,ra:zb,wb:I_,kb:vb,e:Fg,Pd:G_,Sd:V_,l:qg,Bc:Pb,o:Zg,Qd:L_,Dc:$b,Td:N_,Ac:Ob,Wd:E_,p:Kg,Pa:Lb,Cb:Wb,Oa:Gb,Wb:x_,D:cy,F:ry,N:yy,Va:H_,Rd:W_,Db:Eb,fa:ly,ga:Qg,La:B_,cb:Vy,Ba:g_,de:xb,tb:pw,Da:dy,uc:D_,_a:O_,$a:z_,Wa:A_,ce:Bb,sa:b_,Ud:R_,Zd:d_,ae:Nb,Zb:n_,Ma:y_,T:Yg,ib:__,zc:a_,yb:i_,qa:p_,Ga:hb,Pc:Ky,Hb:Ty,Tb:M_,ka:zy,na:Sb,Tc:Cy,je:My,$:u_,pb:sy,Rb:j_,Qb:K_,tc:q_,Ya:nb,rc:nw,nb:Ry,A:hy,U:Py,Gb:Ey,Ja:Sy,ie:jy,Q:gy,hb:C_,ya:l_,qc:ow,xc:$_,me:ay,u:iy,R:Iy,ba:by,Yd:f_,ac:Yb,vc:P_,ob:xy,$b:Zb,Fb:Oy,Yb:s_,he:qy,Ub:k_,bc:Ub,fb:Y_,Uc:my,dc:Tb,da:Xb,Cc:Cb,H:Ab,lb:Hy,Nd:X_,va:e_,K:Jb,Ab:qb,Na:Fb,Qa:Vb,zb:Kb,Bb:Hb,x:Dg,a:B,Id:En}}}var Tn={1419988:(n,o,a,u,l)=>{if(r===void 0||!r.bj)return 1;if((n=Me(Number(n>>>0))).startsWith("./")&&(n=n.substring(2)),!(n=r.bj.get(n)))return 2;if(o=Number(o>>>0),a=Number(a>>>0),u=Number(u>>>0),o+a>n.byteLength)return 3;try{let p=n.subarray(o,o+a);switch(l){case 0:Te().set(p,u>>>0);break;case 1:r.Kj?r.Kj(u,p):r.Aj(u,p);break;default:return 4}return 0}catch{return 4}},1420812:(n,o,a)=>{r.jj(n,Te().subarray(o>>>0,o+a>>>0))},1420875:()=>r.yj(),1420916:n=>{r.ij(n)},1420952:()=>{r.sj()},1420983:()=>{r.tj()},1421012:()=>{r.xj()},1421037:n=>r.rj(n),1421070:n=>r.vj(n),1421102:(n,o,a)=>{r.hj(Number(n),Number(o),Number(a),!0)},1421165:(n,o,a)=>{r.hj(Number(n),Number(o),Number(a))},1421222:()=>typeof wasmOffsetConverter<"u",1421279:n=>{r.Ye("Abs",n,void 0)},1421330:n=>{r.Ye("Neg",n,void 0)},1421381:n=>{r.Ye("Floor",n,void 0)},1421434:n=>{r.Ye("Ceil",n,void 0)},1421486:n=>{r.Ye("Reciprocal",n,void 0)},1421544:n=>{r.Ye("Sqrt",n,void 0)},1421596:n=>{r.Ye("Exp",n,void 0)},1421647:n=>{r.Ye("Erf",n,void 0)},1421698:n=>{r.Ye("Sigmoid",n,void 0)},1421753:(n,o,a)=>{r.Ye("HardSigmoid",n,{alpha:o,beta:a})},1421832:n=>{r.Ye("Log",n,void 0)},1421883:n=>{r.Ye("Sin",n,void 0)},1421934:n=>{r.Ye("Cos",n,void 0)},1421985:n=>{r.Ye("Tan",n,void 0)},1422036:n=>{r.Ye("Asin",n,void 0)},1422088:n=>{r.Ye("Acos",n,void 0)},1422140:n=>{r.Ye("Atan",n,void 0)},1422192:n=>{r.Ye("Sinh",n,void 0)},1422244:n=>{r.Ye("Cosh",n,void 0)},1422296:n=>{r.Ye("Asinh",n,void 0)},1422349:n=>{r.Ye("Acosh",n,void 0)},1422402:n=>{r.Ye("Atanh",n,void 0)},1422455:n=>{r.Ye("Tanh",n,void 0)},1422507:n=>{r.Ye("Not",n,void 0)},1422558:(n,o,a)=>{r.Ye("Clip",n,{min:o,max:a})},1422627:n=>{r.Ye("Clip",n,void 0)},1422679:(n,o)=>{r.Ye("Elu",n,{alpha:o})},1422737:n=>{r.Ye("Gelu",n,void 0)},1422789:n=>{r.Ye("Relu",n,void 0)},1422841:(n,o)=>{r.Ye("LeakyRelu",n,{alpha:o})},1422905:(n,o)=>{r.Ye("ThresholdedRelu",n,{alpha:o})},1422975:(n,o)=>{r.Ye("Cast",n,{to:o})},1423033:n=>{r.Ye("Add",n,void 0)},1423084:n=>{r.Ye("Sub",n,void 0)},1423135:n=>{r.Ye("Mul",n,void 0)},1423186:n=>{r.Ye("Div",n,void 0)},1423237:n=>{r.Ye("Pow",n,void 0)},1423288:n=>{r.Ye("Equal",n,void 0)},1423341:n=>{r.Ye("Greater",n,void 0)},1423396:n=>{r.Ye("GreaterOrEqual",n,void 0)},1423458:n=>{r.Ye("Less",n,void 0)},1423510:n=>{r.Ye("LessOrEqual",n,void 0)},1423569:(n,o,a,u,l)=>{r.Ye("ReduceMean",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:u?Array.from(D().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1423744:(n,o,a,u,l)=>{r.Ye("ReduceMax",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:u?Array.from(D().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1423918:(n,o,a,u,l)=>{r.Ye("ReduceMin",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:u?Array.from(D().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1424092:(n,o,a,u,l)=>{r.Ye("ReduceProd",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:u?Array.from(D().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1424267:(n,o,a,u,l)=>{r.Ye("ReduceSum",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:u?Array.from(D().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1424441:(n,o,a,u,l)=>{r.Ye("ReduceL1",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:u?Array.from(D().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1424614:(n,o,a,u,l)=>{r.Ye("ReduceL2",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:u?Array.from(D().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1424787:(n,o,a,u,l)=>{r.Ye("ReduceLogSum",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:u?Array.from(D().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1424964:(n,o,a,u,l)=>{r.Ye("ReduceSumSquare",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:u?Array.from(D().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1425144:(n,o,a,u,l)=>{r.Ye("ReduceLogSumExp",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:u?Array.from(D().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1425324:n=>{r.Ye("Where",n,void 0)},1425377:(n,o,a)=>{r.Ye("Transpose",n,{perm:o?Array.from(D().subarray(Number(o)>>>0,Number(a)>>>0)):[]})},1425501:(n,o,a,u)=>{r.Ye("DepthToSpace",n,{blocksize:o,mode:Me(a),format:u?"NHWC":"NCHW"})},1425634:(n,o,a,u)=>{r.Ye("DepthToSpace",n,{blocksize:o,mode:Me(a),format:u?"NHWC":"NCHW"})},1425767:(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G)=>{r.Ye("ConvTranspose",n,{format:_?"NHWC":"NCHW",autoPad:o,dilations:[a],group:u,kernelShape:[l],pads:[p,m],strides:[y],wIsConst:()=>!!_e()[$>>>0],outputPadding:T?Array.from(D().subarray(Number(T)>>>0,Number(E)>>>0)):[],outputShape:z?Array.from(D().subarray(Number(z)>>>0,Number(U)>>>0)):[],activation:Me(G)})},1426200:(n,o,a,u,l,p,m,y,_,$,T,E,z,U)=>{r.Ye("ConvTranspose",n,{format:y?"NHWC":"NCHW",autoPad:o,dilations:Array.from(D().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),group:u,kernelShape:Array.from(D().subarray(Number(l)>>>0,2+(Number(l)>>>0)>>>0)),pads:Array.from(D().subarray(Number(p)>>>0,4+(Number(p)>>>0)>>>0)),strides:Array.from(D().subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),wIsConst:()=>!!_e()[_>>>0],outputPadding:$?Array.from(D().subarray(Number($)>>>0,Number(T)>>>0)):[],outputShape:E?Array.from(D().subarray(Number(E)>>>0,Number(z)>>>0)):[],activation:Me(U)})},1426861:(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G)=>{r.Ye("ConvTranspose",n,{format:_?"NHWC":"NCHW",autoPad:o,dilations:[a],group:u,kernelShape:[l],pads:[p,m],strides:[y],wIsConst:()=>!!_e()[$>>>0],outputPadding:T?Array.from(D().subarray(Number(T)>>>0,Number(E)>>>0)):[],outputShape:z?Array.from(D().subarray(Number(z)>>>0,Number(U)>>>0)):[],activation:Me(G)})},1427294:(n,o,a,u,l,p,m,y,_,$,T,E,z,U)=>{r.Ye("ConvTranspose",n,{format:y?"NHWC":"NCHW",autoPad:o,dilations:Array.from(D().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),group:u,kernelShape:Array.from(D().subarray(Number(l)>>>0,2+(Number(l)>>>0)>>>0)),pads:Array.from(D().subarray(Number(p)>>>0,4+(Number(p)>>>0)>>>0)),strides:Array.from(D().subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),wIsConst:()=>!!_e()[_>>>0],outputPadding:$?Array.from(D().subarray(Number($)>>>0,Number(T)>>>0)):[],outputShape:E?Array.from(D().subarray(Number(E)>>>0,Number(z)>>>0)):[],activation:Me(U)})},1427955:(n,o)=>{r.Ye("GlobalAveragePool",n,{format:o?"NHWC":"NCHW"})},1428046:(n,o,a,u,l,p,m,y,_,$,T,E,z,U)=>{r.Ye("AveragePool",n,{format:U?"NHWC":"NCHW",auto_pad:o,ceil_mode:a,count_include_pad:u,storage_order:l,dilations:p?Array.from(D().subarray(Number(p)>>>0,Number(m)>>>0)):[],kernel_shape:y?Array.from(D().subarray(Number(y)>>>0,Number(_)>>>0)):[],pads:$?Array.from(D().subarray(Number($)>>>0,Number(T)>>>0)):[],strides:E?Array.from(D().subarray(Number(E)>>>0,Number(z)>>>0)):[]})},1428525:(n,o)=>{r.Ye("GlobalAveragePool",n,{format:o?"NHWC":"NCHW"})},1428616:(n,o,a,u,l,p,m,y,_,$,T,E,z,U)=>{r.Ye("AveragePool",n,{format:U?"NHWC":"NCHW",auto_pad:o,ceil_mode:a,count_include_pad:u,storage_order:l,dilations:p?Array.from(D().subarray(Number(p)>>>0,Number(m)>>>0)):[],kernel_shape:y?Array.from(D().subarray(Number(y)>>>0,Number(_)>>>0)):[],pads:$?Array.from(D().subarray(Number($)>>>0,Number(T)>>>0)):[],strides:E?Array.from(D().subarray(Number(E)>>>0,Number(z)>>>0)):[]})},1429095:(n,o)=>{r.Ye("GlobalMaxPool",n,{format:o?"NHWC":"NCHW"})},1429182:(n,o,a,u,l,p,m,y,_,$,T,E,z,U)=>{r.Ye("MaxPool",n,{format:U?"NHWC":"NCHW",auto_pad:o,ceil_mode:a,count_include_pad:u,storage_order:l,dilations:p?Array.from(D().subarray(Number(p)>>>0,Number(m)>>>0)):[],kernel_shape:y?Array.from(D().subarray(Number(y)>>>0,Number(_)>>>0)):[],pads:$?Array.from(D().subarray(Number($)>>>0,Number(T)>>>0)):[],strides:E?Array.from(D().subarray(Number(E)>>>0,Number(z)>>>0)):[]})},1429657:(n,o)=>{r.Ye("GlobalMaxPool",n,{format:o?"NHWC":"NCHW"})},1429744:(n,o,a,u,l,p,m,y,_,$,T,E,z,U)=>{r.Ye("MaxPool",n,{format:U?"NHWC":"NCHW",auto_pad:o,ceil_mode:a,count_include_pad:u,storage_order:l,dilations:p?Array.from(D().subarray(Number(p)>>>0,Number(m)>>>0)):[],kernel_shape:y?Array.from(D().subarray(Number(y)>>>0,Number(_)>>>0)):[],pads:$?Array.from(D().subarray(Number($)>>>0,Number(T)>>>0)):[],strides:E?Array.from(D().subarray(Number(E)>>>0,Number(z)>>>0)):[]})},1430219:(n,o,a,u,l)=>{r.Ye("Gemm",n,{alpha:o,beta:a,transA:u,transB:l})},1430323:n=>{r.Ye("MatMul",n,void 0)},1430377:(n,o,a,u)=>{r.Ye("ArgMax",n,{keepDims:!!o,selectLastIndex:!!a,axis:u})},1430485:(n,o,a,u)=>{r.Ye("ArgMin",n,{keepDims:!!o,selectLastIndex:!!a,axis:u})},1430593:(n,o)=>{r.Ye("Softmax",n,{axis:o})},1430656:(n,o)=>{r.Ye("Concat",n,{axis:o})},1430716:(n,o,a,u,l)=>{r.Ye("Split",n,{axis:o,numOutputs:a,splitSizes:u?Array.from(D().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1430872:n=>{r.Ye("Expand",n,void 0)},1430926:(n,o)=>{r.Ye("Gather",n,{axis:Number(o)})},1430997:(n,o)=>{r.Ye("GatherElements",n,{axis:Number(o)})},1431076:(n,o)=>{r.Ye("GatherND",n,{batch_dims:Number(o)})},1431155:(n,o,a,u,l,p,m,y,_,$,T)=>{r.Ye("Resize",n,{antialias:o,axes:a?Array.from(D().subarray(Number(a)>>>0,Number(u)>>>0)):[],coordinateTransformMode:Me(l),cubicCoeffA:p,excludeOutside:m,extrapolationValue:y,keepAspectRatioPolicy:Me(_),mode:Me($),nearestMode:Me(T)})},1431517:(n,o,a,u,l,p,m)=>{r.Ye("Slice",n,{starts:o?Array.from(D().subarray(Number(o)>>>0,Number(a)>>>0)):[],ends:u?Array.from(D().subarray(Number(u)>>>0,Number(l)>>>0)):[],axes:p?Array.from(D().subarray(Number(p)>>>0,Number(m)>>>0)):[]})},1431781:n=>{r.Ye("Tile",n,void 0)},1431833:(n,o,a)=>{r.Ye("InstanceNormalization",n,{epsilon:o,format:a?"NHWC":"NCHW"})},1431947:(n,o,a)=>{r.Ye("InstanceNormalization",n,{epsilon:o,format:a?"NHWC":"NCHW"})},1432061:n=>{r.Ye("Range",n,void 0)},1432114:(n,o)=>{r.Ye("Einsum",n,{equation:Me(o)})},1432195:(n,o,a,u,l)=>{r.Ye("Pad",n,{mode:o,value:a,pads:u?Array.from(D().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1432338:(n,o,a,u,l,p)=>{r.Ye("BatchNormalization",n,{epsilon:o,momentum:a,spatial:!!l,trainingMode:!!u,format:p?"NHWC":"NCHW"})},1432507:(n,o,a,u,l,p)=>{r.Ye("BatchNormalization",n,{epsilon:o,momentum:a,spatial:!!l,trainingMode:!!u,format:p?"NHWC":"NCHW"})},1432676:(n,o,a)=>{r.Ye("CumSum",n,{exclusive:Number(o),reverse:Number(a)})},1432773:(n,o,a)=>{r.Ye("DequantizeLinear",n,{axis:o,blockSize:a})},1432863:(n,o,a,u,l)=>{r.Ye("GridSample",n,{align_corners:o,mode:Me(a),padding_mode:Me(u),format:l?"NHWC":"NCHW"})},1433033:(n,o,a,u,l)=>{r.Ye("GridSample",n,{align_corners:o,mode:Me(a),padding_mode:Me(u),format:l?"NHWC":"NCHW"})},1433203:(n,o)=>{r.Ye("ScatterND",n,{reduction:Me(o)})},1433288:(n,o,a,u,l,p,m,y,_)=>{r.Ye("Attention",n,{numHeads:o,isUnidirectional:a,maskFilterValue:u,scale:l,doRotary:p,qkvHiddenSizes:m?Array.from(D().subarray(Number(y)>>>0,Number(y)+m>>>0)):[],pastPresentShareBuffer:!!_})},1433560:n=>{r.Ye("BiasAdd",n,void 0)},1433615:n=>{r.Ye("BiasSplitGelu",n,void 0)},1433676:n=>{r.Ye("FastGelu",n,void 0)},1433732:(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q)=>{r.Ye("Conv",n,{format:E?"NHWC":"NCHW",auto_pad:o,dilations:a?Array.from(D().subarray(Number(a)>>>0,Number(u)>>>0)):[],group:l,kernel_shape:p?Array.from(D().subarray(Number(p)>>>0,Number(m)>>>0)):[],pads:y?Array.from(D().subarray(Number(y)>>>0,Number(_)>>>0)):[],strides:$?Array.from(D().subarray(Number($)>>>0,Number(T)>>>0)):[],w_is_const:()=>!!_e()[Number(z)>>>0],activation:Me(U),activation_params:G?Array.from(ve().subarray(Number(G)>>>0,Number(q)>>>0)):[]})},1434316:n=>{r.Ye("Gelu",n,void 0)},1434368:(n,o,a,u,l,p,m,y,_)=>{r.Ye("GroupQueryAttention",n,{numHeads:o,kvNumHeads:a,scale:u,softcap:l,doRotary:p,rotaryInterleaved:m,smoothSoftmax:y,localWindowSize:_})},1434585:(n,o,a,u)=>{r.Ye("LayerNormalization",n,{axis:o,epsilon:a,simplified:!!u})},1434696:(n,o,a,u)=>{r.Ye("LayerNormalization",n,{axis:o,epsilon:a,simplified:!!u})},1434807:(n,o,a,u,l,p)=>{r.Ye("MatMulNBits",n,{k:o,n:a,accuracyLevel:u,bits:l,blockSize:p})},1434934:(n,o,a,u,l,p)=>{r.Ye("MultiHeadAttention",n,{numHeads:o,isUnidirectional:a,maskFilterValue:u,scale:l,doRotary:p})},1435093:(n,o)=>{r.Ye("QuickGelu",n,{alpha:o})},1435157:(n,o,a,u,l)=>{r.Ye("RotaryEmbedding",n,{interleaved:!!o,numHeads:a,rotaryEmbeddingDim:u,scale:l})},1435296:(n,o,a)=>{r.Ye("SkipLayerNormalization",n,{epsilon:o,simplified:!!a})},1435398:(n,o,a)=>{r.Ye("SkipLayerNormalization",n,{epsilon:o,simplified:!!a})},1435500:(n,o,a,u)=>{r.Ye("GatherBlockQuantized",n,{gatherAxis:o,quantizeAxis:a,blockSize:u})},1435621:n=>{r.wj(n)},1435655:(n,o)=>r.zj(Number(n),Number(o),r.cj.Cj,r.cj.errors)};function uh(n,o,a){return Ao(async()=>{await r.uj(Number(n),Number(o),Number(a))})}function lh(){return typeof wasmOffsetConverter<"u"}class In{name="ExitStatus";constructor(o){this.message=`Program terminated with exit(${o})`,this.status=o}}var Ki=n=>{n.terminate(),n.onmessage=()=>{}},An=[],Yi=n=>{xt.length==0&&(to(),eo(xt[0]));var o=xt.pop();if(!o)return 6;rr.push(o),zt[n.Yi]=o,o.Yi=n.Yi;var a={Zi:"run",Ej:n.Dj,fj:n.fj,Yi:n.Yi};return o.postMessage(a,n.lj),0},$t=0,Oe=(n,o,...a)=>{for(var u=2*a.length,l=R(),p=Fn(8*u),m=p>>>3,y=0;y<a.length;y++){var _=a[y];typeof _=="bigint"?(se[m+2*y]=1n,se[m+2*y+1]=_):(se[m+2*y]=0n,Ge()[m+2*y+1>>>0]=_)}return n=Zo(n,0,u,p,o),M(l),n};function En(n){if(f)return Oe(0,1,n);if(j=n,!(0<$t)){for(var o of rr)Ki(o);for(o of xt)Ki(o);xt=[],rr=[],zt={},fe=!0}x(0,new In(n))}function Zi(n){if(f)return Oe(1,0,n);kn(n)}var kn=n=>{if(j=n,f)throw Zi(n),"unwind";En(n)},xt=[],rr=[],Qi=[],zt={},Xi=n=>{var o=n.Yi;delete zt[o],xt.push(n),rr.splice(rr.indexOf(n),1),n.Yi=0,Qo(o)};function Ji(){Qi.forEach(n=>n())}var eo=n=>new Promise(o=>{n.onmessage=l=>{var p=(l=l.data).Zi;if(l.ej&&l.ej!=Ar()){var m=zt[l.ej];m?m.postMessage(l,l.lj):P(`Internal error! Worker sent a message "${p}" to target pthread ${l.ej}, but that thread no longer exists!`)}else p==="checkMailbox"?wr():p==="spawnThread"?Yi(l):p==="cleanupThread"?Xi(zt[l.Fj]):p==="loaded"?(n.loaded=!0,o(n)):p==="alert"?alert(`Thread ${l.Gj}: ${l.text}`):l.target==="setimmediate"?n.postMessage(l):p==="callHandler"?r[l.nj](...l.args):p&&P(`worker sent an unknown command ${p}`)},n.onerror=l=>{throw P(`worker sent an error! ${l.filename}:${l.lineno}: ${l.message}`),l};var a,u=[];for(a of[])r.propertyIsEnumerable(a)&&u.push(a);n.postMessage({Zi:"load",oj:u,Ij:B,Jj:V})});function to(){var n=new Worker((()=>{let o=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new o("ort.webgpu.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});xt.push(n)}var dh=n=>{Ue();var o=J()[n+52>>>2>>>0];n=J()[n+56>>>2>>>0],ea(o,o-n),M(o)},ch=(n,o)=>{$t=0,n=qn(n,o),0<$t?j=n:Hn(n)},yr=[],br=0;function ph(n){var o=new Pn(n>>>=0);if(_e()[o.Xi+12>>>0]==0){var a=1;_e()[o.Xi+12>>>0]=a,br--}return a=0,_e()[o.Xi+13>>>0]=a,yr.push(o),ra(n),ia(n)}var Gt=0,fh=()=>{N(0,0);var n=yr.pop();ta(n.gj),Gt=0};class Pn{constructor(o){this.gj=o,this.Xi=o-24}}function mh(n){throw Gt||=n>>>0,Gt}var _r=n=>{var o=Gt;if(!o)return ir(0),0;var a=new Pn(o);J()[a.Xi+16>>>2>>>0]=o;var u=J()[a.Xi+4>>>2>>>0];if(!u)return ir(0),o;for(var l of n){if(l===0||l===u)break;if(na(l,u,a.Xi+16))return ir(l),o}return ir(u),o};function hh(){return _r([])}function gh(n){return _r([n>>>0])}function yh(n,o){return _r([n>>>0,o>>>0])}function bh(n,o,a){return _r([n>>>0,o>>>0,a>>>0])}var _h=()=>{var n=yr.pop();n||yt("no exception to throw");var o=n.gj;if(_e()[n.Xi+13>>>0]==0){yr.push(n);var a=1;_e()[n.Xi+13>>>0]=a,a=0,_e()[n.Xi+12>>>0]=a,br++}throw Gt=o};function wh(n,o,a){var u=new Pn(n>>>=0);throw o>>>=0,a>>>=0,J()[u.Xi+16>>>2>>>0]=0,J()[u.Xi+4>>>2>>>0]=o,J()[u.Xi+8>>>2>>>0]=a,br++,Gt=n}var vh=()=>br;function ro(n,o,a,u){return f?Oe(2,1,n,o,a,u):no(n,o,a,u)}function no(n,o,a,u){if(n>>>=0,a>>>=0,u>>>=0,h===void 0)return 6;var l=[];return f&&l.length===0?ro(n,o>>>=0,a,u):(n={Dj:a,Yi:n,fj:u,lj:l},f?(n.Zi="spawnThread",postMessage(n,l),0):Yi(n))}var io=typeof TextDecoder<"u"?new TextDecoder:void 0,oo=(n,o=0,a=NaN)=>{var u=(o>>>=0)+a;for(a=o;n[a]&&!(a>=u);)++a;if(16<a-o&&n.buffer&&io)return io.decode(n.buffer instanceof ArrayBuffer?n.subarray(o,a):n.slice(o,a));for(u="";o<a;){var l=n[o++];if(128&l){var p=63&n[o++];if((224&l)==192)u+=String.fromCharCode((31&l)<<6|p);else{var m=63&n[o++];65536>(l=(240&l)==224?(15&l)<<12|p<<6|m:(7&l)<<18|p<<12|m<<6|63&n[o++])?u+=String.fromCharCode(l):(l-=65536,u+=String.fromCharCode(55296|l>>10,56320|1023&l))}}else u+=String.fromCharCode(l)}return u},Me=(n,o)=>(n>>>=0)?oo(Te(),n,o):"";function ao(n,o,a){return f?Oe(3,1,n,o,a):0}function so(n,o){if(f)return Oe(4,1,n,o)}var uo=n=>{for(var o=0,a=0;a<n.length;++a){var u=n.charCodeAt(a);127>=u?o++:2047>=u?o+=2:55296<=u&&57343>=u?(o+=4,++a):o+=3}return o},Ht=(n,o,a)=>{var u=Te();if(o>>>=0,0<a){var l=o;a=o+a-1;for(var p=0;p<n.length;++p){var m=n.charCodeAt(p);if(55296<=m&&57343>=m&&(m=65536+((1023&m)<<10)|1023&n.charCodeAt(++p)),127>=m){if(o>=a)break;u[o++>>>0]=m}else{if(2047>=m){if(o+1>=a)break;u[o++>>>0]=192|m>>6}else{if(65535>=m){if(o+2>=a)break;u[o++>>>0]=224|m>>12}else{if(o+3>=a)break;u[o++>>>0]=240|m>>18,u[o++>>>0]=128|m>>12&63}u[o++>>>0]=128|m>>6&63}u[o++>>>0]=128|63&m}}u[o>>>0]=0,n=o-l}else n=0;return n};function lo(n,o){if(f)return Oe(5,1,n,o)}function co(n,o,a){if(f)return Oe(6,1,n,o,a)}function po(n,o,a){return f?Oe(7,1,n,o,a):0}function fo(n,o){if(f)return Oe(8,1,n,o)}function mo(n,o,a){if(f)return Oe(9,1,n,o,a)}function ho(n,o,a,u){if(f)return Oe(10,1,n,o,a,u)}function go(n,o,a,u){if(f)return Oe(11,1,n,o,a,u)}function yo(n,o,a,u){if(f)return Oe(12,1,n,o,a,u)}function bo(n){if(f)return Oe(13,1,n)}function _o(n,o){if(f)return Oe(14,1,n,o)}function wo(n,o,a){if(f)return Oe(15,1,n,o,a)}var vo,Ct,$h=()=>yt(""),st=n=>{for(var o="";Te()[n>>>0];)o+=vo[Te()[n++>>>0]];return o},zn={},On={},xh={};function bt(n,o,a={}){return function(u,l,p={}){var m=l.name;if(!u)throw new Ct(`type "${m}" must have a positive integer typeid pointer`);if(On.hasOwnProperty(u)){if(p.pj)return;throw new Ct(`Cannot register type '${m}' twice`)}On[u]=l,delete xh[u],zn.hasOwnProperty(u)&&(l=zn[u],delete zn[u],l.forEach(y=>y()))}(n,o,a)}var $o=(n,o,a)=>{switch(o){case 1:return a?u=>_e()[u>>>0]:u=>Te()[u>>>0];case 2:return a?u=>Ee()[u>>>1>>>0]:u=>me()[u>>>1>>>0];case 4:return a?u=>D()[u>>>2>>>0]:u=>J()[u>>>2>>>0];case 8:return a?u=>se[u>>>3]:u=>Pe[u>>>3];default:throw new TypeError(`invalid integer width (${o}): ${n}`)}};function Ch(n,o,a){a>>>=0,bt(n>>>=0,{name:o=st(o>>>0),fromWireType:u=>u,toWireType:function(u,l){if(typeof l!="bigint"&&typeof l!="number")throw l=l===null?"null":(u=typeof l)=="object"||u==="array"||u==="function"?l.toString():""+l,new TypeError(`Cannot convert "${l}" to ${this.name}`);return typeof l=="number"&&(l=BigInt(l)),l},$i:St,readValueFromPointer:$o(o,a,o.indexOf("u")==-1),aj:null})}var St=8;function Sh(n,o,a,u){bt(n>>>=0,{name:o=st(o>>>0),fromWireType:function(l){return!!l},toWireType:function(l,p){return p?a:u},$i:St,readValueFromPointer:function(l){return this.fromWireType(Te()[l>>>0])},aj:null})}var Bn=[],_t=[];function Dn(n){9<(n>>>=0)&&--_t[n+1]==0&&(_t[n]=void 0,Bn.push(n))}var qe=n=>{if(!n)throw new Ct("Cannot use deleted val. handle = "+n);return _t[n]},Xe=n=>{switch(n){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let o=Bn.pop()||_t.length;return _t[o]=n,_t[o+1]=1,o}};function Mn(n){return this.fromWireType(J()[n>>>2>>>0])}var Th={name:"emscripten::val",fromWireType:n=>{var o=qe(n);return Dn(n),o},toWireType:(n,o)=>Xe(o),$i:St,readValueFromPointer:Mn,aj:null};function Ih(n){return bt(n>>>0,Th)}var Ah=(n,o)=>{switch(o){case 4:return function(a){return this.fromWireType(ve()[a>>>2>>>0])};case 8:return function(a){return this.fromWireType(Ge()[a>>>3>>>0])};default:throw new TypeError(`invalid float width (${o}): ${n}`)}};function Eh(n,o,a){a>>>=0,bt(n>>>=0,{name:o=st(o>>>0),fromWireType:u=>u,toWireType:(u,l)=>l,$i:St,readValueFromPointer:Ah(o,a),aj:null})}function kh(n,o,a,u,l){if(n>>>=0,a>>>=0,o=st(o>>>0),l===-1&&(l=4294967295),l=y=>y,u===0){var p=32-8*a;l=y=>y<<p>>>p}var m=o.includes("unsigned")?function(y,_){return _>>>0}:function(y,_){return _};bt(n,{name:o,fromWireType:l,toWireType:m,$i:St,readValueFromPointer:$o(o,a,u!==0),aj:null})}function Ph(n,o,a){function u(p){var m=J()[p>>>2>>>0];return p=J()[p+4>>>2>>>0],new l(_e().buffer,p,m)}var l=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][o];bt(n>>>=0,{name:a=st(a>>>0),fromWireType:u,$i:St,readValueFromPointer:u},{pj:!0})}function zh(n,o){bt(n>>>=0,{name:o=st(o>>>0),fromWireType:function(a){for(var u,l=J()[a>>>2>>>0],p=a+4,m=p,y=0;y<=l;++y){var _=p+y;y!=l&&Te()[_>>>0]!=0||(m=Me(m,_-m),u===void 0?u=m:(u+="\0",u+=m),m=_+1)}return lt(a),u},toWireType:function(a,u){u instanceof ArrayBuffer&&(u=new Uint8Array(u));var l=typeof u=="string";if(!(l||u instanceof Uint8Array||u instanceof Uint8ClampedArray||u instanceof Int8Array))throw new Ct("Cannot pass non-string to std::string");var p=l?uo(u):u.length,m=Er(4+p+1),y=m+4;if(J()[m>>>2>>>0]=p,l)Ht(u,y,p+1);else if(l)for(l=0;l<p;++l){var _=u.charCodeAt(l);if(255<_)throw lt(m),new Ct("String has UTF-16 code units that do not fit in 8 bits");Te()[y+l>>>0]=_}else for(l=0;l<p;++l)Te()[y+l>>>0]=u[l];return a!==null&&a.push(lt,m),m},$i:St,readValueFromPointer:Mn,aj(a){lt(a)}})}var xo=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Oh=(n,o)=>{for(var a=n>>1,u=a+o/2;!(a>=u)&&me()[a>>>0];)++a;if(32<(a<<=1)-n&&xo)return xo.decode(Te().slice(n,a));for(a="",u=0;!(u>=o/2);++u){var l=Ee()[n+2*u>>>1>>>0];if(l==0)break;a+=String.fromCharCode(l)}return a},Bh=(n,o,a)=>{if(a??=2147483647,2>a)return 0;var u=o;a=(a-=2)<2*n.length?a/2:n.length;for(var l=0;l<a;++l){var p=n.charCodeAt(l);Ee()[o>>>1>>>0]=p,o+=2}return Ee()[o>>>1>>>0]=0,o-u},Dh=n=>2*n.length,Mh=(n,o)=>{for(var a=0,u="";!(a>=o/4);){var l=D()[n+4*a>>>2>>>0];if(l==0)break;++a,65536<=l?(l-=65536,u+=String.fromCharCode(55296|l>>10,56320|1023&l)):u+=String.fromCharCode(l)}return u},Rh=(n,o,a)=>{if(o>>>=0,a??=2147483647,4>a)return 0;var u=o;a=u+a-4;for(var l=0;l<n.length;++l){var p=n.charCodeAt(l);if(55296<=p&&57343>=p&&(p=65536+((1023&p)<<10)|1023&n.charCodeAt(++l)),D()[o>>>2>>>0]=p,(o+=4)+4>a)break}return D()[o>>>2>>>0]=0,o-u},Uh=n=>{for(var o=0,a=0;a<n.length;++a){var u=n.charCodeAt(a);55296<=u&&57343>=u&&++a,o+=4}return o};function jh(n,o,a){if(n>>>=0,o>>>=0,a=st(a>>>=0),o===2)var u=Oh,l=Bh,p=Dh,m=y=>me()[y>>>1>>>0];else o===4&&(u=Mh,l=Rh,p=Uh,m=y=>J()[y>>>2>>>0]);bt(n,{name:a,fromWireType:y=>{for(var _,$=J()[y>>>2>>>0],T=y+4,E=0;E<=$;++E){var z=y+4+E*o;E!=$&&m(z)!=0||(T=u(T,z-T),_===void 0?_=T:(_+="\0",_+=T),T=z+o)}return lt(y),_},toWireType:(y,_)=>{if(typeof _!="string")throw new Ct(`Cannot pass non-string to C++ string type ${a}`);var $=p(_),T=Er(4+$+o);return J()[T>>>2>>>0]=$/o,l(_,T+4,$+o),y!==null&&y.push(lt,T),T},$i:St,readValueFromPointer:Mn,aj(y){lt(y)}})}function Nh(n,o){bt(n>>>=0,{qj:!0,name:o=st(o>>>0),$i:0,fromWireType:()=>{},toWireType:()=>{}})}function Vh(n){Gn(n>>>0,!c,1,!d,131072,!1),Ji()}var Rn=n=>{if(!fe)try{if(n(),!(0<$t))try{f?Hn(j):kn(j)}catch(o){o instanceof In||o=="unwind"||x(0,o)}}catch(o){o instanceof In||o=="unwind"||x(0,o)}};function Un(n){n>>>=0,typeof Atomics.Hj=="function"&&(Atomics.Hj(D(),n>>>2,n).value.then(wr),n+=128,Atomics.store(D(),n>>>2,1))}var wr=()=>{var n=Ar();n&&(Un(n),Rn(Jo))};function Wh(n,o){(n>>>=0)==o>>>0?setTimeout(wr):f?postMessage({ej:n,Zi:"checkMailbox"}):(n=zt[n])&&n.postMessage({Zi:"checkMailbox"})}var jn=[];function Lh(n,o,a,u,l){for(o>>>=0,u/=2,jn.length=u,a=l>>>0>>>3,l=0;l<u;l++)jn[l]=se[a+2*l]?se[a+2*l+1]:Ge()[a+2*l+1>>>0];return(o?Tn[o]:Mg[n])(...jn)}var Gh=()=>{$t=0};function Hh(n){n>>>=0,f?postMessage({Zi:"cleanupThread",Fj:n}):Xi(zt[n])}function Fh(n){}var vr=(n,o)=>{var a=On[n];if(a===void 0)throw n=qo(n),a=st(n),lt(n),new Ct(`${o} has unknown type ${a}`);return a},Co=(n,o,a)=>{var u=[];return n=n.toWireType(u,a),u.length&&(J()[o>>>2>>>0]=Xe(u)),n};function qh(n,o,a){return o>>>=0,a>>>=0,n=qe(n>>>0),o=vr(o,"emval::as"),Co(o,a,n)}function Kh(n,o){return o>>>=0,n=qe(n>>>0),(o=vr(o,"emval::as")).toWireType(null,n)}var $r=n=>{try{n()}catch(o){yt(o)}},Tt=0,ut=null,So=0,xr=[],To={},Io={},Yh=0,Nn=null,Zh=[];function Ao(n){return function(o){if(!fe){if(Tt===0){var a=!1,u=!1;o((l=0)=>{if(!fe&&(So=l,a=!0,u)){Tt=2,$r(()=>Ml(ut)),typeof MainLoop<"u"&&MainLoop.mj&&MainLoop.resume(),l=!1;try{var p=function(){var _=D()[ut+8>>>2>>>0];return _=O[Io[_]],--$t,_()}()}catch(_){p=_,l=!0}var m=!1;if(!ut){var y=Nn;y&&(Nn=null,(l?y.reject:y.resolve)(p),m=!0)}if(l&&!m)throw p}}),u=!0,a||(Tt=1,ut=function(){var l=Er(65548),p=l+12;J()[l>>>2>>>0]=p,J()[l+4>>>2>>>0]=p+65536,p=xr[0];var m=To[p];return m===void 0&&(m=Yh++,To[p]=m,Io[m]=p),p=m,D()[l+8>>>2>>>0]=p,l}(),typeof MainLoop<"u"&&MainLoop.mj&&MainLoop.pause(),$r(()=>Bl(ut)))}else Tt===2?(Tt=0,$r(Rl),lt(ut),ut=null,Zh.forEach(Rn)):yt(`invalid state: ${Tt}`);return So}}(o=>{n().then(o)})}function Qh(n){return n>>>=0,Ao(async()=>{var o=await qe(n);return Xe(o)})}var Cr=[];function Xh(n,o,a,u){return a>>>=0,u>>>=0,(n=Cr[n>>>0])(null,o=qe(o>>>0),a,u)}var Jh={},Sr=n=>{var o=Jh[n];return o===void 0?st(n):o};function eg(n,o,a,u,l){return a>>>=0,u>>>=0,l>>>=0,(n=Cr[n>>>0])(o=qe(o>>>0),o[a=Sr(a)],u,l)}var Eo=()=>typeof globalThis=="object"?globalThis:Function("return this")();function tg(n){return(n>>>=0)==0?Xe(Eo()):(n=Sr(n),Xe(Eo()[n]))}var rg=n=>{var o=Cr.length;return Cr.push(n),o},ng=(n,o)=>{for(var a=Array(n),u=0;u<n;++u)a[u]=vr(J()[o+4*u>>>2>>>0],"parameter "+u);return a},ko=(n,o)=>Object.defineProperty(o,"name",{value:n});function ig(n,o,a){var u=(o=ng(n,o>>>0)).shift();n--;var l=`return function (obj, func, destructorsRef, args) {
`,p=0,m=[];a===0&&m.push("obj");for(var y=["retType"],_=[u],$=0;$<n;++$)m.push("arg"+$),y.push("argType"+$),_.push(o[$]),l+=`  var arg${$} = argType${$}.readValueFromPointer(args${p?"+"+p:""});
`,p+=o[$].$i;return l+=`  var rv = ${a===1?"new func":"func.call"}(${m.join(", ")});
`,u.qj||(y.push("emval_returnValue"),_.push(Co),l+=`  return emval_returnValue(retType, destructorsRef, rv);
`),y.push(l+`};
`),n=function(T){var E=Function;if(!(E instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof E} which is not a function`);var z=ko(E.name||"unknownFunctionName",function(){});return z.prototype=E.prototype,z=new z,(T=E.apply(z,T))instanceof Object?T:z}(y)(..._),a=`methodCaller<(${o.map(T=>T.name).join(", ")}) => ${u.name}>`,rg(ko(a,n))}function og(n){return n=Sr(n>>>0),Xe(r[n])}function ag(n,o){return o>>>=0,n=qe(n>>>0),o=qe(o),Xe(n[o])}function sg(n){9<(n>>>=0)&&(_t[n+1]+=1)}function ug(){return Xe([])}function lg(n){n=qe(n>>>0);for(var o=Array(n.length),a=0;a<n.length;a++)o[a]=n[a];return Xe(o)}function dg(n){return Xe(Sr(n>>>0))}function cg(){return Xe({})}function pg(n){for(var o=qe(n>>>=0);o.length;){var a=o.pop();o.pop()(a)}Dn(n)}function fg(n,o,a){o>>>=0,a>>>=0,n=qe(n>>>0),o=qe(o),a=qe(a),n[o]=a}function mg(n,o){return o>>>=0,n=(n=vr(n>>>0,"_emval_take_value")).readValueFromPointer(o),Xe(n)}function hg(n,o){n=-9007199254740992>n||9007199254740992<n?NaN:Number(n),o>>>=0,n=new Date(1e3*n),D()[o>>>2>>>0]=n.getUTCSeconds(),D()[o+4>>>2>>>0]=n.getUTCMinutes(),D()[o+8>>>2>>>0]=n.getUTCHours(),D()[o+12>>>2>>>0]=n.getUTCDate(),D()[o+16>>>2>>>0]=n.getUTCMonth(),D()[o+20>>>2>>>0]=n.getUTCFullYear()-1900,D()[o+24>>>2>>>0]=n.getUTCDay(),n=(n.getTime()-Date.UTC(n.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,D()[o+28>>>2>>>0]=n}var Po=n=>n%4==0&&(n%100!=0||n%400==0),zo=[0,31,60,91,121,152,182,213,244,274,305,335],Oo=[0,31,59,90,120,151,181,212,243,273,304,334];function gg(n,o){n=-9007199254740992>n||9007199254740992<n?NaN:Number(n),o>>>=0,n=new Date(1e3*n),D()[o>>>2>>>0]=n.getSeconds(),D()[o+4>>>2>>>0]=n.getMinutes(),D()[o+8>>>2>>>0]=n.getHours(),D()[o+12>>>2>>>0]=n.getDate(),D()[o+16>>>2>>>0]=n.getMonth(),D()[o+20>>>2>>>0]=n.getFullYear()-1900,D()[o+24>>>2>>>0]=n.getDay();var a=(Po(n.getFullYear())?zo:Oo)[n.getMonth()]+n.getDate()-1|0;D()[o+28>>>2>>>0]=a,D()[o+36>>>2>>>0]=-60*n.getTimezoneOffset(),a=new Date(n.getFullYear(),6,1).getTimezoneOffset();var u=new Date(n.getFullYear(),0,1).getTimezoneOffset();n=0|(a!=u&&n.getTimezoneOffset()==Math.min(u,a)),D()[o+32>>>2>>>0]=n}function yg(n){n>>>=0;var o=new Date(D()[n+20>>>2>>>0]+1900,D()[n+16>>>2>>>0],D()[n+12>>>2>>>0],D()[n+8>>>2>>>0],D()[n+4>>>2>>>0],D()[n>>>2>>>0],0),a=D()[n+32>>>2>>>0],u=o.getTimezoneOffset(),l=new Date(o.getFullYear(),6,1).getTimezoneOffset(),p=new Date(o.getFullYear(),0,1).getTimezoneOffset(),m=Math.min(p,l);return 0>a?D()[n+32>>>2>>>0]=+(l!=p&&m==u):0<a!=(m==u)&&(l=Math.max(p,l),o.setTime(o.getTime()+6e4*((0<a?m:l)-u))),D()[n+24>>>2>>>0]=o.getDay(),a=(Po(o.getFullYear())?zo:Oo)[o.getMonth()]+o.getDate()-1|0,D()[n+28>>>2>>>0]=a,D()[n>>>2>>>0]=o.getSeconds(),D()[n+4>>>2>>>0]=o.getMinutes(),D()[n+8>>>2>>>0]=o.getHours(),D()[n+12>>>2>>>0]=o.getDate(),D()[n+16>>>2>>>0]=o.getMonth(),D()[n+20>>>2>>>0]=o.getYear(),n=o.getTime(),BigInt(isNaN(n)?-1:n/1e3)}function Bo(n,o,a,u,l,p,m){return f?Oe(16,1,n,o,a,u,l,p,m):-52}function Do(n,o,a,u,l,p){if(f)return Oe(17,1,n,o,a,u,l,p)}var nr={},bg=()=>performance.timeOrigin+performance.now();function Mo(n,o){if(f)return Oe(18,1,n,o);if(nr[n]&&(clearTimeout(nr[n].id),delete nr[n]),!o)return 0;var a=setTimeout(()=>{delete nr[n],Rn(()=>Xo(n,performance.timeOrigin+performance.now()))},o);return nr[n]={id:a,Nj:o},0}function _g(n,o,a,u){n>>>=0,o>>>=0,a>>>=0,u>>>=0;var l=new Date().getFullYear(),p=new Date(l,0,1).getTimezoneOffset();l=new Date(l,6,1).getTimezoneOffset();var m=Math.max(p,l);J()[n>>>2>>>0]=60*m,D()[o>>>2>>>0]=+(p!=l),n=(o=y=>{var _=Math.abs(y);return`UTC${0<=y?"-":"+"}${String(Math.floor(_/60)).padStart(2,"0")}${String(_%60).padStart(2,"0")}`})(p),o=o(l),l<p?(Ht(n,a,17),Ht(o,u,17)):(Ht(n,u,17),Ht(o,a,17))}var wg=()=>Date.now(),vg=1;function $g(n,o,a){if(!(0<=n&&3>=n))return 28;if(n===0)n=Date.now();else{if(!vg)return 52;n=performance.timeOrigin+performance.now()}return se[a>>>0>>>3]=BigInt(Math.round(1e6*n)),0}var Vn=[],Ro=(n,o)=>{Vn.length=0;for(var a;a=Te()[n++>>>0];){var u=a!=105;o+=(u&=a!=112)&&o%8?4:0,Vn.push(a==112?J()[o>>>2>>>0]:a==106?se[o>>>3]:a==105?D()[o>>>2>>>0]:Ge()[o>>>3>>>0]),o+=u?8:4}return Vn};function xg(n,o,a){return n>>>=0,o=Ro(o>>>0,a>>>0),Tn[n](...o)}function Cg(n,o,a){return n>>>=0,o=Ro(o>>>0,a>>>0),Tn[n](...o)}var Sg=()=>{};function Tg(n,o){return P(Me(n>>>0,o>>>0))}var Ig=()=>{throw $t+=1,"unwind"};function Ag(){return 4294901760}var Eg=()=>navigator.hardwareConcurrency;function kg(){return yt("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function Pg(n){n>>>=0;var o=Te().length;if(n<=o||4294901760<n)return!1;for(var a=1;4>=a;a*=2){var u=o*(1+.2/a);u=Math.min(u,n+100663296);e:{u=(Math.min(4294901760,65536*Math.ceil(Math.max(n,u)/65536))-B.buffer.byteLength+65535)/65536|0;try{B.grow(u),Ue();var l=1;break e}catch{}l=void 0}if(l)return!0}return!1}var Tr=()=>(yt("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Ft={},Uo=n=>{n.forEach(o=>{var a=Tr();a&&(Ft[a]=o)})};function zg(){var n=Error().stack.toString().split(`
`);return n[0]=="Error"&&n.shift(),Uo(n),Ft.kj=Tr(),Ft.Bj=n,Ft.kj}function Og(n,o,a){if(n>>>=0,o>>>=0,Ft.kj==n)var u=Ft.Bj;else(u=Error().stack.toString().split(`
`))[0]=="Error"&&u.shift(),Uo(u);for(var l=3;u[l]&&Tr()!=n;)++l;for(n=0;n<a&&u[n+l];++n)D()[o+4*n>>>2>>>0]=Tr();return n}var Wn,Ln={},jo=()=>{if(!Wn){var n,o={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(n in Ln)Ln[n]===void 0?delete o[n]:o[n]=Ln[n];var a=[];for(n in o)a.push(`${n}=${o[n]}`);Wn=a}return Wn};function No(n,o){if(f)return Oe(19,1,n,o);n>>>=0,o>>>=0;var a=0;return jo().forEach((u,l)=>{var p=o+a;for(l=J()[n+4*l>>>2>>>0]=p,p=0;p<u.length;++p)_e()[l++>>>0]=u.charCodeAt(p);_e()[l>>>0]=0,a+=u.length+1}),0}function Vo(n,o){if(f)return Oe(20,1,n,o);n>>>=0,o>>>=0;var a=jo();J()[n>>>2>>>0]=a.length;var u=0;return a.forEach(l=>u+=l.length+1),J()[o>>>2>>>0]=u,0}function Wo(n){return f?Oe(21,1,n):52}function Lo(n,o,a,u){return f?Oe(22,1,n,o,a,u):52}function Go(n,o,a,u){return f?Oe(23,1,n,o,a,u):70}var Bg=[null,[],[]];function Ho(n,o,a,u){if(f)return Oe(24,1,n,o,a,u);o>>>=0,a>>>=0,u>>>=0;for(var l=0,p=0;p<a;p++){var m=J()[o>>>2>>>0],y=J()[o+4>>>2>>>0];o+=8;for(var _=0;_<y;_++){var $=Te()[m+_>>>0],T=Bg[n];$===0||$===10?((n===1?I:P)(oo(T)),T.length=0):T.push($)}l+=y}return J()[u>>>2>>>0]=l,0}function Dg(n){return n>>>0}f||function(){for(var n=r.numThreads-1;n--;)to();An.unshift(()=>{Lt++,function(o){f?o():Promise.all(xt.map(eo)).then(o)}(()=>Fi())})}();for(var Fo=Array(256),Ir=0;256>Ir;++Ir)Fo[Ir]=String.fromCharCode(Ir);vo=Fo,Ct=r.BindingError=class extends Error{constructor(n){super(n),this.name="BindingError"}},r.InternalError=class extends Error{constructor(n){super(n),this.name="InternalError"}},_t.push(0,1,void 0,1,null,1,!0,1,!1,1),r.count_emval_handles=()=>_t.length/2-5-Bn.length;var O,Mg=[En,Zi,ro,ao,so,lo,co,po,fo,mo,ho,go,yo,bo,_o,wo,Bo,Do,Mo,No,Vo,Wo,Lo,Go,Ho];(async function(){function n(u,l){return O=u.exports,O=function(){var p=O,m={};for(let[y,_]of Object.entries(p))m[y]=typeof _=="function"?(...$)=>{xr.push(y);try{return _(...$)}finally{fe||(xr.pop(),ut&&Tt===1&&xr.length===0&&(Tt=0,$t+=1,$r(Dl),typeof Fibers<"u"&&Fibers.Oj()))}}:_;return m}(),O=function(){var p=O,m=_=>$=>_($)>>>0,y=_=>()=>_()>>>0;return(p=Object.assign({},p)).pe=m(p.pe),p.Ue=y(p.Ue),p.We=m(p.We),p.jf=m(p.jf),p.kf=y(p.kf),p.of=m(p.of),p}(),Qi.push(O.Xe),V=l,Fi(),O}Lt++;var o=qi();if(r.instantiateWasm)return new Promise(u=>{r.instantiateWasm(o,(l,p)=>{n(l,p),u(l.exports)})});if(f)return new Promise(u=>{ze=l=>{var p=new WebAssembly.Instance(l,qi());u(n(p,l))}});Wt??=r.locateFile?r.locateFile?r.locateFile("ort-wasm-simd-threaded.jsep.wasm",S):S+"ort-wasm-simd-threaded.jsep.wasm":new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href;try{var a=await async function(u){var l=Wt;if(!ae&&typeof WebAssembly.instantiateStreaming=="function"&&!le(l))try{var p=fetch(l,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(p,u)}catch(m){P(`wasm streaming compile failed: ${m}`),P("falling back to ArrayBuffer instantiation")}return async function(m,y){try{var _=await async function($){if(!ae)try{var T=await w($);return new Uint8Array(T)}catch{}if($==Wt&&ae)$=new Uint8Array(ae);else{if(!v)throw"both async and sync fetching of the wasm failed";$=v($)}return $}(m);return await WebAssembly.instantiate(_,y)}catch($){P(`failed to asynchronously prepare wasm: ${$}`),yt($)}}(l,u)}(o);return n(a.instance,a.module)}catch(u){return i(u),Promise.reject(u)}})();var qo=n=>(qo=O.pe)(n),Ko=()=>(Ko=O.qe)();r._OrtInit=(n,o)=>(r._OrtInit=O.re)(n,o),r._OrtGetLastError=(n,o)=>(r._OrtGetLastError=O.se)(n,o),r._OrtCreateSessionOptions=(n,o,a,u,l,p,m,y,_,$)=>(r._OrtCreateSessionOptions=O.te)(n,o,a,u,l,p,m,y,_,$),r._OrtAppendExecutionProvider=(n,o,a,u,l)=>(r._OrtAppendExecutionProvider=O.ue)(n,o,a,u,l),r._OrtAddFreeDimensionOverride=(n,o,a)=>(r._OrtAddFreeDimensionOverride=O.ve)(n,o,a),r._OrtAddSessionConfigEntry=(n,o,a)=>(r._OrtAddSessionConfigEntry=O.we)(n,o,a),r._OrtReleaseSessionOptions=n=>(r._OrtReleaseSessionOptions=O.xe)(n),r._OrtCreateSession=(n,o,a)=>(r._OrtCreateSession=O.ye)(n,o,a),r._OrtReleaseSession=n=>(r._OrtReleaseSession=O.ze)(n),r._OrtGetInputOutputCount=(n,o,a)=>(r._OrtGetInputOutputCount=O.Ae)(n,o,a),r._OrtGetInputName=(n,o)=>(r._OrtGetInputName=O.Be)(n,o),r._OrtGetOutputName=(n,o)=>(r._OrtGetOutputName=O.Ce)(n,o),r._OrtFree=n=>(r._OrtFree=O.De)(n),r._OrtCreateTensor=(n,o,a,u,l,p)=>(r._OrtCreateTensor=O.Ee)(n,o,a,u,l,p),r._OrtGetTensorData=(n,o,a,u,l)=>(r._OrtGetTensorData=O.Fe)(n,o,a,u,l),r._OrtReleaseTensor=n=>(r._OrtReleaseTensor=O.Ge)(n),r._OrtCreateRunOptions=(n,o,a,u)=>(r._OrtCreateRunOptions=O.He)(n,o,a,u),r._OrtAddRunConfigEntry=(n,o,a)=>(r._OrtAddRunConfigEntry=O.Ie)(n,o,a),r._OrtReleaseRunOptions=n=>(r._OrtReleaseRunOptions=O.Je)(n),r._OrtCreateBinding=n=>(r._OrtCreateBinding=O.Ke)(n),r._OrtBindInput=(n,o,a)=>(r._OrtBindInput=O.Le)(n,o,a),r._OrtBindOutput=(n,o,a,u)=>(r._OrtBindOutput=O.Me)(n,o,a,u),r._OrtClearBoundOutputs=n=>(r._OrtClearBoundOutputs=O.Ne)(n),r._OrtReleaseBinding=n=>(r._OrtReleaseBinding=O.Oe)(n),r._OrtRunWithBinding=(n,o,a,u,l)=>(r._OrtRunWithBinding=O.Pe)(n,o,a,u,l),r._OrtRun=(n,o,a,u,l,p,m,y)=>(r._OrtRun=O.Qe)(n,o,a,u,l,p,m,y),r._OrtEndProfiling=n=>(r._OrtEndProfiling=O.Re)(n),r._JsepOutput=(n,o,a)=>(r._JsepOutput=O.Se)(n,o,a),r._JsepGetNodeName=n=>(r._JsepGetNodeName=O.Te)(n);var Ar=()=>(Ar=O.Ue)(),lt=r._free=n=>(lt=r._free=O.Ve)(n),Er=r._malloc=n=>(Er=r._malloc=O.We)(n),Gn=(n,o,a,u,l,p)=>(Gn=O.Ze)(n,o,a,u,l,p),Yo=()=>(Yo=O._e)(),Zo=(n,o,a,u,l)=>(Zo=O.$e)(n,o,a,u,l),Qo=n=>(Qo=O.af)(n),Hn=n=>(Hn=O.bf)(n),Xo=(n,o)=>(Xo=O.cf)(n,o),Jo=()=>(Jo=O.df)(),N=(n,o)=>(N=O.ef)(n,o),ir=n=>(ir=O.ff)(n),ea=(n,o)=>(ea=O.gf)(n,o),M=n=>(M=O.hf)(n),Fn=n=>(Fn=O.jf)(n),R=()=>(R=O.kf)(),ta=n=>(ta=O.lf)(n),ra=n=>(ra=O.mf)(n),na=(n,o,a)=>(na=O.nf)(n,o,a),ia=n=>(ia=O.of)(n),oa=r.dynCall_vii=(n,o,a)=>(oa=r.dynCall_vii=O.pf)(n,o,a),aa=r.dynCall_iiii=(n,o,a,u)=>(aa=r.dynCall_iiii=O.qf)(n,o,a,u),sa=r.dynCall_iii=(n,o,a)=>(sa=r.dynCall_iii=O.rf)(n,o,a),qn=r.dynCall_ii=(n,o)=>(qn=r.dynCall_ii=O.sf)(n,o),ua=r.dynCall_iiiiiii=(n,o,a,u,l,p,m)=>(ua=r.dynCall_iiiiiii=O.tf)(n,o,a,u,l,p,m),la=r.dynCall_vi=(n,o)=>(la=r.dynCall_vi=O.uf)(n,o),da=r.dynCall_v=n=>(da=r.dynCall_v=O.vf)(n),ca=r.dynCall_iiiiii=(n,o,a,u,l,p)=>(ca=r.dynCall_iiiiii=O.wf)(n,o,a,u,l,p),pa=r.dynCall_iiiii=(n,o,a,u,l)=>(pa=r.dynCall_iiiii=O.xf)(n,o,a,u,l),fa=r.dynCall_viii=(n,o,a,u)=>(fa=r.dynCall_viii=O.yf)(n,o,a,u),ma=r.dynCall_viiiii=(n,o,a,u,l,p)=>(ma=r.dynCall_viiiii=O.zf)(n,o,a,u,l,p),ha=r.dynCall_viiii=(n,o,a,u,l)=>(ha=r.dynCall_viiii=O.Af)(n,o,a,u,l),ga=r.dynCall_viiiiii=(n,o,a,u,l,p,m)=>(ga=r.dynCall_viiiiii=O.Bf)(n,o,a,u,l,p,m),ya=r.dynCall_viiiiij=(n,o,a,u,l,p,m)=>(ya=r.dynCall_viiiiij=O.Cf)(n,o,a,u,l,p,m),ba=r.dynCall_viiji=(n,o,a,u,l)=>(ba=r.dynCall_viiji=O.Df)(n,o,a,u,l),_a=r.dynCall_viiiiiiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E)=>(_a=r.dynCall_viiiiiiiiiii=O.Ef)(n,o,a,u,l,p,m,y,_,$,T,E),wa=r.dynCall_viiijjjii=(n,o,a,u,l,p,m,y,_)=>(wa=r.dynCall_viiijjjii=O.Ff)(n,o,a,u,l,p,m,y,_),va=r.dynCall_iij=(n,o,a)=>(va=r.dynCall_iij=O.Gf)(n,o,a),$a=r.dynCall_iif=(n,o,a)=>($a=r.dynCall_iif=O.Hf)(n,o,a),xa=r.dynCall_iid=(n,o,a)=>(xa=r.dynCall_iid=O.If)(n,o,a),Ca=r.dynCall_jii=(n,o,a)=>(Ca=r.dynCall_jii=O.Jf)(n,o,a),Sa=r.dynCall_i=n=>(Sa=r.dynCall_i=O.Kf)(n),Ta=r.dynCall_viiiiiiii=(n,o,a,u,l,p,m,y,_)=>(Ta=r.dynCall_viiiiiiii=O.Lf)(n,o,a,u,l,p,m,y,_),Ia=r.dynCall_iiiiij=(n,o,a,u,l,p)=>(Ia=r.dynCall_iiiiij=O.Mf)(n,o,a,u,l,p),Aa=r.dynCall_j=n=>(Aa=r.dynCall_j=O.Nf)(n),Ea=r.dynCall_vij=(n,o,a)=>(Ea=r.dynCall_vij=O.Of)(n,o,a),ka=r.dynCall_iiiiiiii=(n,o,a,u,l,p,m,y)=>(ka=r.dynCall_iiiiiiii=O.Pf)(n,o,a,u,l,p,m,y),Pa=r.dynCall_viijjjiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E)=>(Pa=r.dynCall_viijjjiiiiii=O.Qf)(n,o,a,u,l,p,m,y,_,$,T,E),za=r.dynCall_viiiiiiiii=(n,o,a,u,l,p,m,y,_,$)=>(za=r.dynCall_viiiiiiiii=O.Rf)(n,o,a,u,l,p,m,y,_,$),Oa=r.dynCall_ji=(n,o)=>(Oa=r.dynCall_ji=O.Sf)(n,o),Ba=r.dynCall_viiijiiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E)=>(Ba=r.dynCall_viiijiiiiiii=O.Tf)(n,o,a,u,l,p,m,y,_,$,T,E),Da=r.dynCall_viiiiiii=(n,o,a,u,l,p,m,y)=>(Da=r.dynCall_viiiiiii=O.Uf)(n,o,a,u,l,p,m,y),Ma=r.dynCall_iiiiiiiiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z)=>(Ma=r.dynCall_iiiiiiiiiiiii=O.Vf)(n,o,a,u,l,p,m,y,_,$,T,E,z),Ra=r.dynCall_viiiiiiiiii=(n,o,a,u,l,p,m,y,_,$,T)=>(Ra=r.dynCall_viiiiiiiiii=O.Wf)(n,o,a,u,l,p,m,y,_,$,T),Ua=r.dynCall_viiiiiiiiiiiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X)=>(Ua=r.dynCall_viiiiiiiiiiiiiiii=O.Xf)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X),ja=r.dynCall_iiiiiiiij=(n,o,a,u,l,p,m,y,_)=>(ja=r.dynCall_iiiiiiiij=O.Yf)(n,o,a,u,l,p,m,y,_),Na=r.dynCall_vijii=(n,o,a,u,l)=>(Na=r.dynCall_vijii=O.Zf)(n,o,a,u,l),Va=r.dynCall_iiiiiiiii=(n,o,a,u,l,p,m,y,_)=>(Va=r.dynCall_iiiiiiiii=O._f)(n,o,a,u,l,p,m,y,_),Wa=r.dynCall_iiiiijiiiii=(n,o,a,u,l,p,m,y,_,$,T)=>(Wa=r.dynCall_iiiiijiiiii=O.$f)(n,o,a,u,l,p,m,y,_,$,T),La=r.dynCall_iiiiiiiiiii=(n,o,a,u,l,p,m,y,_,$,T)=>(La=r.dynCall_iiiiiiiiiii=O.ag)(n,o,a,u,l,p,m,y,_,$,T),Ga=r.dynCall_vijjjiiiiij=(n,o,a,u,l,p,m,y,_,$,T)=>(Ga=r.dynCall_vijjjiiiiij=O.bg)(n,o,a,u,l,p,m,y,_,$,T),Ha=r.dynCall_viij=(n,o,a,u)=>(Ha=r.dynCall_viij=O.cg)(n,o,a,u),Fa=r.dynCall_viijj=(n,o,a,u,l)=>(Fa=r.dynCall_viijj=O.dg)(n,o,a,u,l),qa=r.dynCall_fi=(n,o)=>(qa=r.dynCall_fi=O.eg)(n,o),Ka=r.dynCall_fii=(n,o,a)=>(Ka=r.dynCall_fii=O.fg)(n,o,a),Ya=r.dynCall_di=(n,o)=>(Ya=r.dynCall_di=O.gg)(n,o),Za=r.dynCall_dii=(n,o,a)=>(Za=r.dynCall_dii=O.hg)(n,o,a),Qa=r.dynCall_vijj=(n,o,a,u)=>(Qa=r.dynCall_vijj=O.ig)(n,o,a,u),Xa=r.dynCall_viji=(n,o,a,u)=>(Xa=r.dynCall_viji=O.jg)(n,o,a,u),Ja=r.dynCall_viijiii=(n,o,a,u,l,p,m)=>(Ja=r.dynCall_viijiii=O.kg)(n,o,a,u,l,p,m),es=r.dynCall_iiiiiiiiii=(n,o,a,u,l,p,m,y,_,$)=>(es=r.dynCall_iiiiiiiiii=O.lg)(n,o,a,u,l,p,m,y,_,$),ts=r.dynCall_viiij=(n,o,a,u,l)=>(ts=r.dynCall_viiij=O.mg)(n,o,a,u,l),rs=r.dynCall_vijji=(n,o,a,u,l)=>(rs=r.dynCall_vijji=O.ng)(n,o,a,u,l),ns=r.dynCall_viid=(n,o,a,u)=>(ns=r.dynCall_viid=O.og)(n,o,a,u),is=r.dynCall_vid=(n,o,a)=>(is=r.dynCall_vid=O.pg)(n,o,a),os=r.dynCall_viiijiiiii=(n,o,a,u,l,p,m,y,_,$)=>(os=r.dynCall_viiijiiiii=O.qg)(n,o,a,u,l,p,m,y,_,$),as=r.dynCall_jj=(n,o)=>(as=r.dynCall_jj=O.rg)(n,o),ss=r.dynCall_iiiijii=(n,o,a,u,l,p,m)=>(ss=r.dynCall_iiiijii=O.sg)(n,o,a,u,l,p,m),us=r.dynCall_iiijii=(n,o,a,u,l,p)=>(us=r.dynCall_iiijii=O.tg)(n,o,a,u,l,p),ls=r.dynCall_viiiiiiiiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U)=>(ls=r.dynCall_viiiiiiiiiiiii=O.ug)(n,o,a,u,l,p,m,y,_,$,T,E,z,U),ds=r.dynCall_iiiiiiiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E)=>(ds=r.dynCall_iiiiiiiiiiii=O.vg)(n,o,a,u,l,p,m,y,_,$,T,E),cs=r.dynCall_iiijjj=(n,o,a,u,l,p)=>(cs=r.dynCall_iiijjj=O.wg)(n,o,a,u,l,p),ps=r.dynCall_ij=(n,o)=>(ps=r.dynCall_ij=O.xg)(n,o),fs=r.dynCall_viiiiji=(n,o,a,u,l,p,m)=>(fs=r.dynCall_viiiiji=O.yg)(n,o,a,u,l,p,m),ms=r.dynCall_iijjji=(n,o,a,u,l,p)=>(ms=r.dynCall_iijjji=O.zg)(n,o,a,u,l,p),hs=r.dynCall_viijii=(n,o,a,u,l,p)=>(hs=r.dynCall_viijii=O.Ag)(n,o,a,u,l,p),gs=r.dynCall_vjiiiiii=(n,o,a,u,l,p,m,y)=>(gs=r.dynCall_vjiiiiii=O.Bg)(n,o,a,u,l,p,m,y),ys=r.dynCall_jiii=(n,o,a,u)=>(ys=r.dynCall_jiii=O.Cg)(n,o,a,u),bs=r.dynCall_vijjiiiii=(n,o,a,u,l,p,m,y,_)=>(bs=r.dynCall_vijjiiiii=O.Dg)(n,o,a,u,l,p,m,y,_),_s=r.dynCall_jiij=(n,o,a,u)=>(_s=r.dynCall_jiij=O.Eg)(n,o,a,u),ws=r.dynCall_iijijjijiji=(n,o,a,u,l,p,m,y,_,$,T)=>(ws=r.dynCall_iijijjijiji=O.Fg)(n,o,a,u,l,p,m,y,_,$,T),vs=r.dynCall_iijijji=(n,o,a,u,l,p,m)=>(vs=r.dynCall_iijijji=O.Gg)(n,o,a,u,l,p,m),$s=r.dynCall_ijijji=(n,o,a,u,l,p)=>($s=r.dynCall_ijijji=O.Hg)(n,o,a,u,l,p),xs=r.dynCall_iiiiiiij=(n,o,a,u,l,p,m,y)=>(xs=r.dynCall_iiiiiiij=O.Ig)(n,o,a,u,l,p,m,y),Cs=r.dynCall_viiijjiii=(n,o,a,u,l,p,m,y,_)=>(Cs=r.dynCall_viiijjiii=O.Jg)(n,o,a,u,l,p,m,y,_),Ss=r.dynCall_vif=(n,o,a)=>(Ss=r.dynCall_vif=O.Kg)(n,o,a),Ts=r.dynCall_viif=(n,o,a,u)=>(Ts=r.dynCall_viif=O.Lg)(n,o,a,u),Is=r.dynCall_iiiiijji=(n,o,a,u,l,p,m,y)=>(Is=r.dynCall_iiiiijji=O.Mg)(n,o,a,u,l,p,m,y),As=r.dynCall_iiiiji=(n,o,a,u,l,p)=>(As=r.dynCall_iiiiji=O.Ng)(n,o,a,u,l,p),Es=r.dynCall_iiiifi=(n,o,a,u,l,p)=>(Es=r.dynCall_iiiifi=O.Og)(n,o,a,u,l,p),ks=r.dynCall_iiiiiiiiijii=(n,o,a,u,l,p,m,y,_,$,T,E)=>(ks=r.dynCall_iiiiiiiiijii=O.Pg)(n,o,a,u,l,p,m,y,_,$,T,E),Ps=r.dynCall_iiiijjii=(n,o,a,u,l,p,m,y)=>(Ps=r.dynCall_iiiijjii=O.Qg)(n,o,a,u,l,p,m,y),zs=r.dynCall_iiij=(n,o,a,u)=>(zs=r.dynCall_iiij=O.Rg)(n,o,a,u),Os=r.dynCall_iiiiiijjjii=(n,o,a,u,l,p,m,y,_,$,T)=>(Os=r.dynCall_iiiiiijjjii=O.Sg)(n,o,a,u,l,p,m,y,_,$,T),Bs=r.dynCall_iiijiii=(n,o,a,u,l,p,m)=>(Bs=r.dynCall_iiijiii=O.Tg)(n,o,a,u,l,p,m),Ds=r.dynCall_iiiiiiiijjjfi=(n,o,a,u,l,p,m,y,_,$,T,E,z)=>(Ds=r.dynCall_iiiiiiiijjjfi=O.Ug)(n,o,a,u,l,p,m,y,_,$,T,E,z),Ms=r.dynCall_iijiiii=(n,o,a,u,l,p,m)=>(Ms=r.dynCall_iijiiii=O.Vg)(n,o,a,u,l,p,m),Rs=r.dynCall_viiiij=(n,o,a,u,l,p)=>(Rs=r.dynCall_viiiij=O.Wg)(n,o,a,u,l,p),Us=r.dynCall_iijjjii=(n,o,a,u,l,p,m)=>(Us=r.dynCall_iijjjii=O.Xg)(n,o,a,u,l,p,m),js=r.dynCall_jij=(n,o,a)=>(js=r.dynCall_jij=O.Yg)(n,o,a),Ns=r.dynCall_jjj=(n,o,a)=>(Ns=r.dynCall_jjj=O.Zg)(n,o,a),Vs=r.dynCall_iiji=(n,o,a,u)=>(Vs=r.dynCall_iiji=O._g)(n,o,a,u),Ws=r.dynCall_viffiii=(n,o,a,u,l,p,m)=>(Ws=r.dynCall_viffiii=O.$g)(n,o,a,u,l,p,m),Ls=r.dynCall_viifiii=(n,o,a,u,l,p,m)=>(Ls=r.dynCall_viifiii=O.ah)(n,o,a,u,l,p,m),Gs=r.dynCall_viiiiidiidi=(n,o,a,u,l,p,m,y,_,$,T)=>(Gs=r.dynCall_viiiiidiidi=O.bh)(n,o,a,u,l,p,m,y,_,$,T),Hs=r.dynCall_viiiiiiiiidi=(n,o,a,u,l,p,m,y,_,$,T,E)=>(Hs=r.dynCall_viiiiiiiiidi=O.ch)(n,o,a,u,l,p,m,y,_,$,T,E),Fs=r.dynCall_viiiiiiiiiiiiiifi=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X)=>(Fs=r.dynCall_viiiiiiiiiiiiiifi=O.dh)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X),qs=r.dynCall_ijii=(n,o,a,u)=>(qs=r.dynCall_ijii=O.eh)(n,o,a,u),Ks=r.dynCall_vijjjjjjjjjjjjji=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q)=>(Ks=r.dynCall_vijjjjjjjjjjjjji=O.fh)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q),Ys=r.dynCall_viiiji=(n,o,a,u,l,p)=>(Ys=r.dynCall_viiiji=O.gh)(n,o,a,u,l,p),Zs=r.dynCall_vijjjiiji=(n,o,a,u,l,p,m,y,_)=>(Zs=r.dynCall_vijjjiiji=O.hh)(n,o,a,u,l,p,m,y,_),Qs=r.dynCall_iiiijiiiiiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G)=>(Qs=r.dynCall_iiiijiiiiiiiiii=O.ih)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G),Xs=r.dynCall_vj=(n,o)=>(Xs=r.dynCall_vj=O.jh)(n,o),Js=r.dynCall_vfiii=(n,o,a,u,l)=>(Js=r.dynCall_vfiii=O.kh)(n,o,a,u,l),eu=r.dynCall_viiiiff=(n,o,a,u,l,p,m)=>(eu=r.dynCall_viiiiff=O.lh)(n,o,a,u,l,p,m),tu=r.dynCall_viiiiiff=(n,o,a,u,l,p,m,y)=>(tu=r.dynCall_viiiiiff=O.mh)(n,o,a,u,l,p,m,y),ru=r.dynCall_viiff=(n,o,a,u,l)=>(ru=r.dynCall_viiff=O.nh)(n,o,a,u,l),nu=r.dynCall_viiiiiiiiifiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G)=>(nu=r.dynCall_viiiiiiiiifiiii=O.oh)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G),iu=r.dynCall_viiiiiiiijj=(n,o,a,u,l,p,m,y,_,$,T)=>(iu=r.dynCall_viiiiiiiijj=O.ph)(n,o,a,u,l,p,m,y,_,$,T),ou=r.dynCall_iiiiiiiiiiiiiifii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X)=>(ou=r.dynCall_iiiiiiiiiiiiiifii=O.qh)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X),au=r.dynCall_iiiiiiiiiiiiiiiiiiifii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe,Re)=>(au=r.dynCall_iiiiiiiiiiiiiiiiiiifii=O.rh)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe,Re),su=r.dynCall_vijjiiiiiii=(n,o,a,u,l,p,m,y,_,$,T)=>(su=r.dynCall_vijjiiiiiii=O.sh)(n,o,a,u,l,p,m,y,_,$,T),uu=r.dynCall_iiiijjj=(n,o,a,u,l,p,m)=>(uu=r.dynCall_iiiijjj=O.th)(n,o,a,u,l,p,m),lu=r.dynCall_fffffff=(n,o,a,u,l,p,m)=>(lu=r.dynCall_fffffff=O.uh)(n,o,a,u,l,p,m),du=r.dynCall_viiiiiijiifiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U)=>(du=r.dynCall_viiiiiijiifiii=O.vh)(n,o,a,u,l,p,m,y,_,$,T,E,z,U),cu=r.dynCall_vjjjjjjffjifiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe)=>(cu=r.dynCall_vjjjjjjffjifiiiiii=O.wh)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe),pu=r.dynCall_viiiiiiffjifiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X)=>(pu=r.dynCall_viiiiiiffjifiiiii=O.xh)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X),fu=r.dynCall_viiiiiiffjfiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q)=>(fu=r.dynCall_viiiiiiffjfiiiii=O.yh)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q),mu=r.dynCall_viiiiiiffjiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G)=>(mu=r.dynCall_viiiiiiffjiiiii=O.zh)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G),hu=r.dynCall_vjjjjjjjjfffjifiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe)=>(hu=r.dynCall_vjjjjjjjjfffjifiiiiii=O.Ah)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe),gu=r.dynCall_vjjjjjjfffifijiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de)=>(gu=r.dynCall_vjjjjjjfffifijiiiii=O.Bh)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de),yu=r.dynCall_vjjjjjjfffifiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe)=>(yu=r.dynCall_vjjjjjjfffifiiiiii=O.Ch)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe),bu=r.dynCall_vjjjjjjjjfffiiifiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe)=>(bu=r.dynCall_vjjjjjjjjfffiiifiiiii=O.Dh)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe),_u=r.dynCall_vijiiiiiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z)=>(_u=r.dynCall_vijiiiiiiiiii=O.Eh)(n,o,a,u,l,p,m,y,_,$,T,E,z),wu=r.dynCall_vijjfffiii=(n,o,a,u,l,p,m,y,_,$)=>(wu=r.dynCall_vijjfffiii=O.Fh)(n,o,a,u,l,p,m,y,_,$),vu=r.dynCall_jiijjiif=(n,o,a,u,l,p,m,y)=>(vu=r.dynCall_jiijjiif=O.Gh)(n,o,a,u,l,p,m,y),$u=r.dynCall_vijjjjjjifiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G)=>($u=r.dynCall_vijjjjjjifiiiii=O.Hh)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G),xu=r.dynCall_vjjjjjiiii=(n,o,a,u,l,p,m,y,_,$)=>(xu=r.dynCall_vjjjjjiiii=O.Ih)(n,o,a,u,l,p,m,y,_,$),Cu=r.dynCall_vjjjjfiii=(n,o,a,u,l,p,m,y,_)=>(Cu=r.dynCall_vjjjjfiii=O.Jh)(n,o,a,u,l,p,m,y,_),Su=r.dynCall_viiiiiijiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U)=>(Su=r.dynCall_viiiiiijiiiiii=O.Kh)(n,o,a,u,l,p,m,y,_,$,T,E,z,U),Tu=r.dynCall_vijjii=(n,o,a,u,l,p)=>(Tu=r.dynCall_vijjii=O.Lh)(n,o,a,u,l,p),Iu=r.dynCall_viiiiijjiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z)=>(Iu=r.dynCall_viiiiijjiiiii=O.Mh)(n,o,a,u,l,p,m,y,_,$,T,E,z),Au=r.dynCall_iiiiiji=(n,o,a,u,l,p,m)=>(Au=r.dynCall_iiiiiji=O.Nh)(n,o,a,u,l,p,m),Eu=r.dynCall_viiiiijiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z)=>(Eu=r.dynCall_viiiiijiiiiii=O.Oh)(n,o,a,u,l,p,m,y,_,$,T,E,z),ku=r.dynCall_viiijiiiiii=(n,o,a,u,l,p,m,y,_,$,T)=>(ku=r.dynCall_viiijiiiiii=O.Ph)(n,o,a,u,l,p,m,y,_,$,T),Pu=r.dynCall_viiiijii=(n,o,a,u,l,p,m,y)=>(Pu=r.dynCall_viiiijii=O.Qh)(n,o,a,u,l,p,m,y),zu=r.dynCall_viijjiii=(n,o,a,u,l,p,m,y)=>(zu=r.dynCall_viijjiii=O.Rh)(n,o,a,u,l,p,m,y),Ou=r.dynCall_viiiiiijii=(n,o,a,u,l,p,m,y,_,$)=>(Ou=r.dynCall_viiiiiijii=O.Sh)(n,o,a,u,l,p,m,y,_,$),Bu=r.dynCall_viiiiijjji=(n,o,a,u,l,p,m,y,_,$)=>(Bu=r.dynCall_viiiiijjji=O.Th)(n,o,a,u,l,p,m,y,_,$),Du=r.dynCall_vijiii=(n,o,a,u,l,p)=>(Du=r.dynCall_vijiii=O.Uh)(n,o,a,u,l,p),Mu=r.dynCall_iiijiiii=(n,o,a,u,l,p,m,y)=>(Mu=r.dynCall_iiijiiii=O.Vh)(n,o,a,u,l,p,m,y),Ru=r.dynCall_viiiiiijjiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U)=>(Ru=r.dynCall_viiiiiijjiiiii=O.Wh)(n,o,a,u,l,p,m,y,_,$,T,E,z,U),Uu=r.dynCall_viiiiiiijiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G)=>(Uu=r.dynCall_viiiiiiijiiiiii=O.Xh)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G),ju=r.dynCall_viiiiiji=(n,o,a,u,l,p,m,y)=>(ju=r.dynCall_viiiiiji=O.Yh)(n,o,a,u,l,p,m,y),Nu=r.dynCall_fiif=(n,o,a,u)=>(Nu=r.dynCall_fiif=O.Zh)(n,o,a,u),Vu=r.dynCall_viijjjiii=(n,o,a,u,l,p,m,y,_)=>(Vu=r.dynCall_viijjjiii=O._h)(n,o,a,u,l,p,m,y,_),Wu=r.dynCall_viiiiiifiii=(n,o,a,u,l,p,m,y,_,$,T)=>(Wu=r.dynCall_viiiiiifiii=O.$h)(n,o,a,u,l,p,m,y,_,$,T),Lu=r.dynCall_viijji=(n,o,a,u,l,p)=>(Lu=r.dynCall_viijji=O.ai)(n,o,a,u,l,p),Gu=r.dynCall_iiiiiiiiiiijijji=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q)=>(Gu=r.dynCall_iiiiiiiiiiijijji=O.bi)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q),Hu=r.dynCall_jiijjiii=(n,o,a,u,l,p,m,y)=>(Hu=r.dynCall_jiijjiii=O.ci)(n,o,a,u,l,p,m,y),Fu=r.dynCall_viifiifijjjii=(n,o,a,u,l,p,m,y,_,$,T,E,z)=>(Fu=r.dynCall_viifiifijjjii=O.di)(n,o,a,u,l,p,m,y,_,$,T,E,z),qu=r.dynCall_viiiiiiiiiiiiiiiiiiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe,Re,Ne,tt)=>(qu=r.dynCall_viiiiiiiiiiiiiiiiiiiiiii=O.ei)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe,Re,Ne,tt),Ku=r.dynCall_viiiiifiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z)=>(Ku=r.dynCall_viiiiifiiiiii=O.fi)(n,o,a,u,l,p,m,y,_,$,T,E,z),Yu=r.dynCall_vijjiiiiii=(n,o,a,u,l,p,m,y,_,$)=>(Yu=r.dynCall_vijjiiiiii=O.gi)(n,o,a,u,l,p,m,y,_,$),Zu=r.dynCall_vijiiiiiiijjii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U)=>(Zu=r.dynCall_vijiiiiiiijjii=O.hi)(n,o,a,u,l,p,m,y,_,$,T,E,z,U),Qu=r.dynCall_viiiiiiiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z)=>(Qu=r.dynCall_viiiiiiiiiiii=O.ii)(n,o,a,u,l,p,m,y,_,$,T,E,z),Xu=r.dynCall_viiiiiiiiiiiiiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de)=>(Xu=r.dynCall_viiiiiiiiiiiiiiiiii=O.ji)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de),Ju=r.dynCall_viiiiiiiiiiiiiiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we)=>(Ju=r.dynCall_viiiiiiiiiiiiiiiiiii=O.ki)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we),el=r.dynCall_viiiiiiiiiiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q)=>(el=r.dynCall_viiiiiiiiiiiiiii=O.li)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q),tl=r.dynCall_viiiiiiiiiiiiiiiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe)=>(tl=r.dynCall_viiiiiiiiiiiiiiiiiiii=O.mi)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe),rl=r.dynCall_viiiijjj=(n,o,a,u,l,p,m,y)=>(rl=r.dynCall_viiiijjj=O.ni)(n,o,a,u,l,p,m,y),nl=r.dynCall_iiiiid=(n,o,a,u,l,p)=>(nl=r.dynCall_iiiiid=O.oi)(n,o,a,u,l,p),il=r.dynCall_viiiiiiiiiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G)=>(il=r.dynCall_viiiiiiiiiiiiii=O.pi)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G),ol=r.dynCall_viiiiiiijjj=(n,o,a,u,l,p,m,y,_,$,T)=>(ol=r.dynCall_viiiiiiijjj=O.qi)(n,o,a,u,l,p,m,y,_,$,T),al=r.dynCall_iiiiiiiiiiiiiiiiiiiifi=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe,Re)=>(al=r.dynCall_iiiiiiiiiiiiiiiiiiiifi=O.ri)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe,Re),sl=r.dynCall_viiijiiiiiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G)=>(sl=r.dynCall_viiijiiiiiiiiii=O.si)(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G),ul=r.dynCall_viiiiif=(n,o,a,u,l,p,m)=>(ul=r.dynCall_viiiiif=O.ti)(n,o,a,u,l,p,m),ll=r.dynCall_viiif=(n,o,a,u,l)=>(ll=r.dynCall_viiif=O.ui)(n,o,a,u,l),dl=r.dynCall_viiiiiiiiifi=(n,o,a,u,l,p,m,y,_,$,T,E)=>(dl=r.dynCall_viiiiiiiiifi=O.vi)(n,o,a,u,l,p,m,y,_,$,T,E),cl=r.dynCall_viiiiid=(n,o,a,u,l,p,m)=>(cl=r.dynCall_viiiiid=O.wi)(n,o,a,u,l,p,m),pl=r.dynCall_viiid=(n,o,a,u,l)=>(pl=r.dynCall_viiid=O.xi)(n,o,a,u,l),fl=r.dynCall_iiif=(n,o,a,u)=>(fl=r.dynCall_iiif=O.yi)(n,o,a,u),ml=r.dynCall_vidi=(n,o,a,u)=>(ml=r.dynCall_vidi=O.zi)(n,o,a,u),hl=r.dynCall_viiijiji=(n,o,a,u,l,p,m,y)=>(hl=r.dynCall_viiijiji=O.Ai)(n,o,a,u,l,p,m,y),gl=r.dynCall_viiijij=(n,o,a,u,l,p,m)=>(gl=r.dynCall_viiijij=O.Bi)(n,o,a,u,l,p,m),yl=r.dynCall_vijjj=(n,o,a,u,l)=>(yl=r.dynCall_vijjj=O.Ci)(n,o,a,u,l),bl=r.dynCall_vjiij=(n,o,a,u,l)=>(bl=r.dynCall_vjiij=O.Di)(n,o,a,u,l),_l=r.dynCall_diii=(n,o,a,u)=>(_l=r.dynCall_diii=O.Ei)(n,o,a,u),wl=r.dynCall_diiiii=(n,o,a,u,l,p)=>(wl=r.dynCall_diiiii=O.Fi)(n,o,a,u,l,p),vl=r.dynCall_diiii=(n,o,a,u,l)=>(vl=r.dynCall_diiii=O.Gi)(n,o,a,u,l),$l=r.dynCall_ijiijji=(n,o,a,u,l,p,m)=>($l=r.dynCall_ijiijji=O.Hi)(n,o,a,u,l,p,m),xl=r.dynCall_viiijjiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E)=>(xl=r.dynCall_viiijjiiiiii=O.Ii)(n,o,a,u,l,p,m,y,_,$,T,E),Cl=r.dynCall_viijjijjjjiii=(n,o,a,u,l,p,m,y,_,$,T,E,z)=>(Cl=r.dynCall_viijjijjjjiii=O.Ji)(n,o,a,u,l,p,m,y,_,$,T,E,z),Sl=r.dynCall_ijiii=(n,o,a,u,l)=>(Sl=r.dynCall_ijiii=O.Ki)(n,o,a,u,l),Tl=r.dynCall_ijiiiiji=(n,o,a,u,l,p,m,y)=>(Tl=r.dynCall_ijiiiiji=O.Li)(n,o,a,u,l,p,m,y),Il=r.dynCall_ijiij=(n,o,a,u,l)=>(Il=r.dynCall_ijiij=O.Mi)(n,o,a,u,l),Al=r.dynCall_iiiij=(n,o,a,u,l)=>(Al=r.dynCall_iiiij=O.Ni)(n,o,a,u,l),El=r.dynCall_viiijii=(n,o,a,u,l,p,m)=>(El=r.dynCall_viiijii=O.Oi)(n,o,a,u,l,p,m),kl=r.dynCall_viijiiiiiiiiii=(n,o,a,u,l,p,m,y,_,$,T,E,z,U)=>(kl=r.dynCall_viijiiiiiiiiii=O.Pi)(n,o,a,u,l,p,m,y,_,$,T,E,z,U),Pl=r.dynCall_fiiii=(n,o,a,u,l)=>(Pl=r.dynCall_fiiii=O.Qi)(n,o,a,u,l),zl=r.dynCall_jfi=(n,o,a)=>(zl=r.dynCall_jfi=O.Ri)(n,o,a),Ol=r.dynCall_fiii=(n,o,a,u)=>(Ol=r.dynCall_fiii=O.Si)(n,o,a,u),Bl=n=>(Bl=O.Ti)(n),Dl=()=>(Dl=O.Ui)(),Ml=n=>(Ml=O.Vi)(n),Rl=()=>(Rl=O.Wi)();function Rg(n,o,a,u){var l=R();try{return aa(n,o,a,u)}catch(p){if(M(l),p!==p+0)throw p;N(1,0)}}function Ug(n,o,a){var u=R();try{return sa(n,o,a)}catch(l){if(M(u),l!==l+0)throw l;N(1,0)}}function jg(n,o,a){var u=R();try{oa(n,o,a)}catch(l){if(M(u),l!==l+0)throw l;N(1,0)}}function Ng(n,o){var a=R();try{return qn(n,o)}catch(u){if(M(a),u!==u+0)throw u;N(1,0)}}function Vg(n,o){var a=R();try{la(n,o)}catch(u){if(M(a),u!==u+0)throw u;N(1,0)}}function Wg(n){var o=R();try{da(n)}catch(a){if(M(o),a!==a+0)throw a;N(1,0)}}function Lg(n,o,a,u,l,p,m){var y=R();try{return ua(n,o,a,u,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;N(1,0)}}function Gg(n,o,a,u,l,p){var m=R();try{return ca(n,o,a,u,l,p)}catch(y){if(M(m),y!==y+0)throw y;N(1,0)}}function Hg(n,o,a,u,l){var p=R();try{return pa(n,o,a,u,l)}catch(m){if(M(p),m!==m+0)throw m;N(1,0)}}function Fg(n,o,a,u){var l=R();try{fa(n,o,a,u)}catch(p){if(M(l),p!==p+0)throw p;N(1,0)}}function qg(n,o,a,u,l){var p=R();try{ha(n,o,a,u,l)}catch(m){if(M(p),m!==m+0)throw m;N(1,0)}}function Kg(n,o,a,u,l,p,m){var y=R();try{ga(n,o,a,u,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;N(1,0)}}function Yg(n,o,a,u,l,p,m){var y=R();try{ya(n,o,a,u,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;N(1,0)}}function Zg(n,o,a,u,l,p){var m=R();try{ma(n,o,a,u,l,p)}catch(y){if(M(m),y!==y+0)throw y;N(1,0)}}function Qg(n,o,a,u,l,p,m,y,_,$,T,E){var z=R();try{_a(n,o,a,u,l,p,m,y,_,$,T,E)}catch(U){if(M(z),U!==U+0)throw U;N(1,0)}}function Xg(n,o,a){var u=R();try{return va(n,o,a)}catch(l){if(M(u),l!==l+0)throw l;N(1,0)}}function Jg(n,o,a){var u=R();try{return $a(n,o,a)}catch(l){if(M(u),l!==l+0)throw l;N(1,0)}}function ey(n,o,a){var u=R();try{return xa(n,o,a)}catch(l){if(M(u),l!==l+0)throw l;N(1,0)}}function ty(n,o,a){var u=R();try{return Ca(n,o,a)}catch(l){if(M(u),l!==l+0)throw l;return N(1,0),0n}}function ry(n,o,a,u,l,p,m,y,_){var $=R();try{Ta(n,o,a,u,l,p,m,y,_)}catch(T){if(M($),T!==T+0)throw T;N(1,0)}}function ny(n){var o=R();try{return Sa(n)}catch(a){if(M(o),a!==a+0)throw a;N(1,0)}}function iy(n,o,a){var u=R();try{Ea(n,o,a)}catch(l){if(M(u),l!==l+0)throw l;N(1,0)}}function oy(n,o,a,u,l,p,m,y){var _=R();try{return ka(n,o,a,u,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;N(1,0)}}function ay(n,o,a,u,l,p,m,y,_,$,T,E){var z=R();try{Pa(n,o,a,u,l,p,m,y,_,$,T,E)}catch(U){if(M(z),U!==U+0)throw U;N(1,0)}}function sy(n,o,a,u,l,p,m,y,_,$,T,E){var z=R();try{Ba(n,o,a,u,l,p,m,y,_,$,T,E)}catch(U){if(M(z),U!==U+0)throw U;N(1,0)}}function uy(n,o,a,u,l,p,m,y,_,$,T,E,z){var U=R();try{return Ma(n,o,a,u,l,p,m,y,_,$,T,E,z)}catch(G){if(M(U),G!==G+0)throw G;N(1,0)}}function ly(n,o,a,u,l,p,m,y,_,$,T){var E=R();try{Ra(n,o,a,u,l,p,m,y,_,$,T)}catch(z){if(M(E),z!==z+0)throw z;N(1,0)}}function dy(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X){var oe=R();try{Ua(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X)}catch(de){if(M(oe),de!==de+0)throw de;N(1,0)}}function cy(n,o,a,u,l,p,m,y){var _=R();try{Da(n,o,a,u,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;N(1,0)}}function py(n,o,a,u,l,p,m,y,_,$,T){var E=R();try{return Wa(n,o,a,u,l,p,m,y,_,$,T)}catch(z){if(M(E),z!==z+0)throw z;N(1,0)}}function fy(n,o,a,u,l,p,m,y,_,$,T){var E=R();try{return La(n,o,a,u,l,p,m,y,_,$,T)}catch(z){if(M(E),z!==z+0)throw z;N(1,0)}}function my(n,o,a,u,l,p,m,y,_,$,T){var E=R();try{Ga(n,o,a,u,l,p,m,y,_,$,T)}catch(z){if(M(E),z!==z+0)throw z;N(1,0)}}function hy(n,o,a,u){var l=R();try{Ha(n,o,a,u)}catch(p){if(M(l),p!==p+0)throw p;N(1,0)}}function gy(n,o,a,u,l){var p=R();try{Fa(n,o,a,u,l)}catch(m){if(M(p),m!==m+0)throw m;N(1,0)}}function yy(n,o,a,u,l,p,m,y,_,$){var T=R();try{za(n,o,a,u,l,p,m,y,_,$)}catch(E){if(M(T),E!==E+0)throw E;N(1,0)}}function by(n,o,a,u,l){var p=R();try{Na(n,o,a,u,l)}catch(m){if(M(p),m!==m+0)throw m;N(1,0)}}function _y(n,o,a,u,l,p,m,y,_){var $=R();try{return Va(n,o,a,u,l,p,m,y,_)}catch(T){if(M($),T!==T+0)throw T;N(1,0)}}function wy(n,o){var a=R();try{return qa(n,o)}catch(u){if(M(a),u!==u+0)throw u;N(1,0)}}function vy(n,o){var a=R();try{return Oa(n,o)}catch(u){if(M(a),u!==u+0)throw u;return N(1,0),0n}}function $y(n,o){var a=R();try{return Ya(n,o)}catch(u){if(M(a),u!==u+0)throw u;N(1,0)}}function xy(n,o,a,u){var l=R();try{Qa(n,o,a,u)}catch(p){if(M(l),p!==p+0)throw p;N(1,0)}}function Cy(n,o,a,u,l,p,m){var y=R();try{El(n,o,a,u,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;N(1,0)}}function Sy(n,o,a,u,l,p,m){var y=R();try{Ja(n,o,a,u,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;N(1,0)}}function Ty(n,o,a,u,l,p,m,y){var _=R();try{Pu(n,o,a,u,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;N(1,0)}}function Iy(n,o,a,u){var l=R();try{Xa(n,o,a,u)}catch(p){if(M(l),p!==p+0)throw p;N(1,0)}}function Ay(n,o,a,u,l,p,m,y,_){var $=R();try{return ja(n,o,a,u,l,p,m,y,_)}catch(T){if(M($),T!==T+0)throw T;N(1,0)}}function Ey(n,o,a,u,l,p){var m=R();try{hs(n,o,a,u,l,p)}catch(y){if(M(m),y!==y+0)throw y;N(1,0)}}function ky(n,o,a,u,l,p,m,y,_,$){var T=R();try{return es(n,o,a,u,l,p,m,y,_,$)}catch(E){if(M(T),E!==E+0)throw E;N(1,0)}}function Py(n,o,a,u,l){var p=R();try{ba(n,o,a,u,l)}catch(m){if(M(p),m!==m+0)throw m;N(1,0)}}function zy(n,o,a,u,l){var p=R();try{ts(n,o,a,u,l)}catch(m){if(M(p),m!==m+0)throw m;N(1,0)}}function Oy(n,o,a,u,l){var p=R();try{rs(n,o,a,u,l)}catch(m){if(M(p),m!==m+0)throw m;N(1,0)}}function By(n,o,a,u){var l=R();try{ns(n,o,a,u)}catch(p){if(M(l),p!==p+0)throw p;N(1,0)}}function Dy(n,o,a){var u=R();try{is(n,o,a)}catch(l){if(M(u),l!==l+0)throw l;N(1,0)}}function My(n,o,a,u,l,p,m,y,_,$){var T=R();try{os(n,o,a,u,l,p,m,y,_,$)}catch(E){if(M(T),E!==E+0)throw E;N(1,0)}}function Ry(n,o,a,u,l,p,m,y,_){var $=R();try{wa(n,o,a,u,l,p,m,y,_)}catch(T){if(M($),T!==T+0)throw T;N(1,0)}}function Uy(n,o){var a=R();try{return ps(n,o)}catch(u){if(M(a),u!==u+0)throw u;N(1,0)}}function jy(n,o,a,u,l,p,m,y,_,$,T,E,z,U){var G=R();try{kl(n,o,a,u,l,p,m,y,_,$,T,E,z,U)}catch(q){if(M(G),q!==q+0)throw q;N(1,0)}}function Ny(n,o,a,u,l,p){var m=R();try{return us(n,o,a,u,l,p)}catch(y){if(M(m),y!==y+0)throw y;N(1,0)}}function Vy(n,o,a,u,l,p,m,y,_,$,T,E,z,U){var G=R();try{ls(n,o,a,u,l,p,m,y,_,$,T,E,z,U)}catch(q){if(M(G),q!==q+0)throw q;N(1,0)}}function Wy(n,o,a,u,l,p,m,y,_,$,T,E){var z=R();try{return ds(n,o,a,u,l,p,m,y,_,$,T,E)}catch(U){if(M(z),U!==U+0)throw U;N(1,0)}}function Ly(n,o,a,u){var l=R();try{return _s(n,o,a,u)}catch(p){if(M(l),p!==p+0)throw p;return N(1,0),0n}}function Gy(n,o,a,u,l,p){var m=R();try{return cs(n,o,a,u,l,p)}catch(y){if(M(m),y!==y+0)throw y;N(1,0)}}function Hy(n,o,a,u,l,p,m,y){var _=R();try{gs(n,o,a,u,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;N(1,0)}}function Fy(n,o,a,u){var l=R();try{return ys(n,o,a,u)}catch(p){if(M(l),p!==p+0)throw p;return N(1,0),0n}}function qy(n,o,a,u,l,p,m,y,_){var $=R();try{bs(n,o,a,u,l,p,m,y,_)}catch(T){if(M($),T!==T+0)throw T;N(1,0)}}function Ky(n,o,a,u,l,p,m){var y=R();try{fs(n,o,a,u,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;N(1,0)}}function Yy(n,o,a,u,l,p){var m=R();try{return ms(n,o,a,u,l,p)}catch(y){if(M(m),y!==y+0)throw y;N(1,0)}}function Zy(n,o,a,u,l,p,m,y,_,$,T){var E=R();try{return ws(n,o,a,u,l,p,m,y,_,$,T)}catch(z){if(M(E),z!==z+0)throw z;N(1,0)}}function Qy(n,o,a,u,l,p,m){var y=R();try{return vs(n,o,a,u,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;N(1,0)}}function Xy(n,o,a,u,l,p){var m=R();try{return $s(n,o,a,u,l,p)}catch(y){if(M(m),y!==y+0)throw y;N(1,0)}}function Jy(n,o){var a=R();try{return as(n,o)}catch(u){if(M(a),u!==u+0)throw u;return N(1,0),0n}}function eb(n,o,a,u,l,p,m){var y=R();try{return ss(n,o,a,u,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;N(1,0)}}function tb(n,o,a){var u=R();try{Ss(n,o,a)}catch(l){if(M(u),l!==l+0)throw l;N(1,0)}}function rb(n,o,a,u,l,p,m,y){var _=R();try{return xs(n,o,a,u,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;N(1,0)}}function nb(n,o,a,u,l,p,m,y,_){var $=R();try{Cs(n,o,a,u,l,p,m,y,_)}catch(T){if(M($),T!==T+0)throw T;N(1,0)}}function ib(n,o,a,u){var l=R();try{Ts(n,o,a,u)}catch(p){if(M(l),p!==p+0)throw p;N(1,0)}}function ob(n,o,a,u,l,p,m,y){var _=R();try{return Is(n,o,a,u,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;N(1,0)}}function ab(n,o,a,u,l,p){var m=R();try{return As(n,o,a,u,l,p)}catch(y){if(M(m),y!==y+0)throw y;N(1,0)}}function sb(n,o,a,u,l,p){var m=R();try{return Es(n,o,a,u,l,p)}catch(y){if(M(m),y!==y+0)throw y;N(1,0)}}function ub(n,o,a,u,l,p,m,y,_,$,T,E){var z=R();try{return ks(n,o,a,u,l,p,m,y,_,$,T,E)}catch(U){if(M(z),U!==U+0)throw U;N(1,0)}}function lb(n,o,a,u,l,p,m,y){var _=R();try{return Ps(n,o,a,u,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;N(1,0)}}function db(n,o,a,u){var l=R();try{return zs(n,o,a,u)}catch(p){if(M(l),p!==p+0)throw p;N(1,0)}}function cb(n,o,a,u,l,p,m,y,_,$,T){var E=R();try{return Os(n,o,a,u,l,p,m,y,_,$,T)}catch(z){if(M(E),z!==z+0)throw z;N(1,0)}}function pb(n,o,a,u,l,p,m){var y=R();try{return Bs(n,o,a,u,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;N(1,0)}}function fb(n,o,a,u,l,p,m,y,_,$,T,E,z){var U=R();try{return Ds(n,o,a,u,l,p,m,y,_,$,T,E,z)}catch(G){if(M(U),G!==G+0)throw G;N(1,0)}}function mb(n,o,a,u,l,p,m){var y=R();try{return Ms(n,o,a,u,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;N(1,0)}}function hb(n,o,a,u,l,p){var m=R();try{Rs(n,o,a,u,l,p)}catch(y){if(M(m),y!==y+0)throw y;N(1,0)}}function gb(n,o,a,u,l,p,m){var y=R();try{return Us(n,o,a,u,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;N(1,0)}}function yb(n,o,a){var u=R();try{return js(n,o,a)}catch(l){if(M(u),l!==l+0)throw l;return N(1,0),0n}}function bb(n,o,a){var u=R();try{return Ns(n,o,a)}catch(l){if(M(u),l!==l+0)throw l;return N(1,0),0n}}function _b(n,o,a,u){var l=R();try{return Vs(n,o,a,u)}catch(p){if(M(l),p!==p+0)throw p;N(1,0)}}function wb(n,o,a,u,l,p,m){var y=R();try{Ws(n,o,a,u,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;N(1,0)}}function vb(n,o,a,u,l,p,m){var y=R();try{Ls(n,o,a,u,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;N(1,0)}}function $b(n,o,a,u,l,p,m,y,_,$,T){var E=R();try{Gs(n,o,a,u,l,p,m,y,_,$,T)}catch(z){if(M(E),z!==z+0)throw z;N(1,0)}}function xb(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X){var oe=R();try{Fs(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X)}catch(de){if(M(oe),de!==de+0)throw de;N(1,0)}}function Cb(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q){var X=R();try{Ks(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q)}catch(oe){if(M(X),oe!==oe+0)throw oe;N(1,0)}}function Sb(n,o,a,u,l,p){var m=R();try{Ys(n,o,a,u,l,p)}catch(y){if(M(m),y!==y+0)throw y;N(1,0)}}function Tb(n,o,a,u,l,p,m,y,_){var $=R();try{Zs(n,o,a,u,l,p,m,y,_)}catch(T){if(M($),T!==T+0)throw T;N(1,0)}}function Ib(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G){var q=R();try{return Qs(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G)}catch(X){if(M(q),X!==X+0)throw X;N(1,0)}}function Ab(n,o){var a=R();try{Xs(n,o)}catch(u){if(M(a),u!==u+0)throw u;N(1,0)}}function Eb(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G){var q=R();try{nu(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G)}catch(X){if(M(q),X!==X+0)throw X;N(1,0)}}function kb(n,o,a,u,l){var p=R();try{Js(n,o,a,u,l)}catch(m){if(M(p),m!==m+0)throw m;N(1,0)}}function Pb(n,o,a,u,l,p,m){var y=R();try{eu(n,o,a,u,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;N(1,0)}}function zb(n,o,a,u,l){var p=R();try{ru(n,o,a,u,l)}catch(m){if(M(p),m!==m+0)throw m;N(1,0)}}function Ob(n,o,a,u,l,p,m,y){var _=R();try{tu(n,o,a,u,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;N(1,0)}}function Bb(n,o,a,u,l,p,m,y,_,$,T){var E=R();try{iu(n,o,a,u,l,p,m,y,_,$,T)}catch(z){if(M(E),z!==z+0)throw z;N(1,0)}}function Db(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X){var oe=R();try{return ou(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X)}catch(de){if(M(oe),de!==de+0)throw de;N(1,0)}}function Mb(n,o,a,u,l){var p=R();try{return Pl(n,o,a,u,l)}catch(m){if(M(p),m!==m+0)throw m;N(1,0)}}function Rb(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe,Re){var Ne=R();try{return au(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe,Re)}catch(tt){if(M(Ne),tt!==tt+0)throw tt;N(1,0)}}function Ub(n,o,a,u,l,p,m,y,_,$,T){var E=R();try{su(n,o,a,u,l,p,m,y,_,$,T)}catch(z){if(M(E),z!==z+0)throw z;N(1,0)}}function jb(n,o,a,u,l,p,m){var y=R();try{return uu(n,o,a,u,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;N(1,0)}}function Nb(n,o,a,u,l,p,m,y,_,$,T,E,z,U){var G=R();try{du(n,o,a,u,l,p,m,y,_,$,T,E,z,U)}catch(q){if(M(G),q!==q+0)throw q;N(1,0)}}function Vb(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe){var de=R();try{cu(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe)}catch(we){if(M(de),we!==we+0)throw we;N(1,0)}}function Wb(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X){var oe=R();try{pu(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X)}catch(de){if(M(oe),de!==de+0)throw de;N(1,0)}}function Lb(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q){var X=R();try{fu(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q)}catch(oe){if(M(X),oe!==oe+0)throw oe;N(1,0)}}function Gb(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G){var q=R();try{mu(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G)}catch(X){if(M(q),X!==X+0)throw X;N(1,0)}}function Hb(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe){var Re=R();try{hu(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe)}catch(Ne){if(M(Re),Ne!==Ne+0)throw Ne;N(1,0)}}function Fb(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de){var we=R();try{gu(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de)}catch(xe){if(M(we),xe!==xe+0)throw xe;N(1,0)}}function qb(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe){var de=R();try{yu(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe)}catch(we){if(M(de),we!==we+0)throw we;N(1,0)}}function Kb(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe){var Re=R();try{bu(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe)}catch(Ne){if(M(Re),Ne!==Ne+0)throw Ne;N(1,0)}}function Yb(n,o,a,u,l,p,m,y,_,$,T,E,z){var U=R();try{_u(n,o,a,u,l,p,m,y,_,$,T,E,z)}catch(G){if(M(U),G!==G+0)throw G;N(1,0)}}function Zb(n,o,a,u,l,p,m,y,_,$){var T=R();try{wu(n,o,a,u,l,p,m,y,_,$)}catch(E){if(M(T),E!==E+0)throw E;N(1,0)}}function Qb(n,o,a,u,l,p,m,y){var _=R();try{return vu(n,o,a,u,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;return N(1,0),0n}}function Xb(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G){var q=R();try{$u(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G)}catch(X){if(M(q),X!==X+0)throw X;N(1,0)}}function Jb(n,o,a,u,l,p,m,y,_,$){var T=R();try{xu(n,o,a,u,l,p,m,y,_,$)}catch(E){if(M(T),E!==E+0)throw E;N(1,0)}}function e_(n,o,a,u,l,p,m,y,_){var $=R();try{Cu(n,o,a,u,l,p,m,y,_)}catch(T){if(M($),T!==T+0)throw T;N(1,0)}}function t_(n,o,a,u,l,p,m){var y=R();try{return lu(n,o,a,u,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;N(1,0)}}function r_(n,o,a){var u=R();try{return zl(n,o,a)}catch(l){if(M(u),l!==l+0)throw l;return N(1,0),0n}}function n_(n,o,a,u,l,p,m,y,_,$,T,E,z,U){var G=R();try{Su(n,o,a,u,l,p,m,y,_,$,T,E,z,U)}catch(q){if(M(G),q!==q+0)throw q;N(1,0)}}function i_(n,o,a,u,l,p,m,y,_,$,T,E,z){var U=R();try{Iu(n,o,a,u,l,p,m,y,_,$,T,E,z)}catch(G){if(M(U),G!==G+0)throw G;N(1,0)}}function o_(n,o,a,u,l,p,m){var y=R();try{return Au(n,o,a,u,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;N(1,0)}}function a_(n,o,a,u,l,p,m,y,_,$,T,E,z){var U=R();try{Eu(n,o,a,u,l,p,m,y,_,$,T,E,z)}catch(G){if(M(U),G!==G+0)throw G;N(1,0)}}function s_(n,o,a,u,l,p){var m=R();try{Tu(n,o,a,u,l,p)}catch(y){if(M(m),y!==y+0)throw y;N(1,0)}}function u_(n,o,a,u,l,p,m,y,_,$,T){var E=R();try{ku(n,o,a,u,l,p,m,y,_,$,T)}catch(z){if(M(E),z!==z+0)throw z;N(1,0)}}function l_(n,o,a,u,l,p,m,y){var _=R();try{zu(n,o,a,u,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;N(1,0)}}function d_(n,o,a,u,l,p,m,y,_,$){var T=R();try{Ou(n,o,a,u,l,p,m,y,_,$)}catch(E){if(M(T),E!==E+0)throw E;N(1,0)}}function c_(n,o,a,u){var l=R();try{return qs(n,o,a,u)}catch(p){if(M(l),p!==p+0)throw p;N(1,0)}}function p_(n,o,a,u,l,p,m,y,_,$){var T=R();try{Bu(n,o,a,u,l,p,m,y,_,$)}catch(E){if(M(T),E!==E+0)throw E;N(1,0)}}function f_(n,o,a,u,l,p){var m=R();try{Du(n,o,a,u,l,p)}catch(y){if(M(m),y!==y+0)throw y;N(1,0)}}function m_(n,o,a){var u=R();try{return Ka(n,o,a)}catch(l){if(M(u),l!==l+0)throw l;N(1,0)}}function h_(n,o,a,u,l,p,m,y){var _=R();try{return Mu(n,o,a,u,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;N(1,0)}}function g_(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G){var q=R();try{il(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G)}catch(X){if(M(q),X!==X+0)throw X;N(1,0)}}function y_(n,o,a,u,l,p,m,y,_,$,T,E,z,U){var G=R();try{Ru(n,o,a,u,l,p,m,y,_,$,T,E,z,U)}catch(q){if(M(G),q!==q+0)throw q;N(1,0)}}function b_(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G){var q=R();try{Uu(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G)}catch(X){if(M(q),X!==X+0)throw X;N(1,0)}}function __(n,o,a,u,l,p,m,y){var _=R();try{ju(n,o,a,u,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;N(1,0)}}function w_(n,o,a,u){var l=R();try{return Nu(n,o,a,u)}catch(p){if(M(l),p!==p+0)throw p;N(1,0)}}function v_(n,o,a){var u=R();try{return Za(n,o,a)}catch(l){if(M(u),l!==l+0)throw l;N(1,0)}}function $_(n,o,a,u,l,p,m,y,_){var $=R();try{Vu(n,o,a,u,l,p,m,y,_)}catch(T){if(M($),T!==T+0)throw T;N(1,0)}}function x_(n,o,a,u,l,p,m,y,_,$,T){var E=R();try{Wu(n,o,a,u,l,p,m,y,_,$,T)}catch(z){if(M(E),z!==z+0)throw z;N(1,0)}}function C_(n,o,a,u,l,p){var m=R();try{Lu(n,o,a,u,l,p)}catch(y){if(M(m),y!==y+0)throw y;N(1,0)}}function S_(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q){var X=R();try{return Gu(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q)}catch(oe){if(M(X),oe!==oe+0)throw oe;N(1,0)}}function T_(n,o,a,u,l,p,m,y){var _=R();try{return Hu(n,o,a,u,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;return N(1,0),0n}}function I_(n,o,a,u,l,p,m,y,_,$,T,E,z){var U=R();try{Fu(n,o,a,u,l,p,m,y,_,$,T,E,z)}catch(G){if(M(U),G!==G+0)throw G;N(1,0)}}function A_(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe,Re,Ne,tt){var fw=R();try{qu(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe,Re,Ne,tt)}catch(Kn){if(M(fw),Kn!==Kn+0)throw Kn;N(1,0)}}function E_(n,o,a,u,l,p,m,y,_,$,T,E,z){var U=R();try{Ku(n,o,a,u,l,p,m,y,_,$,T,E,z)}catch(G){if(M(U),G!==G+0)throw G;N(1,0)}}function k_(n,o,a,u,l,p,m,y,_,$){var T=R();try{Yu(n,o,a,u,l,p,m,y,_,$)}catch(E){if(M(T),E!==E+0)throw E;N(1,0)}}function P_(n,o,a,u,l,p,m,y,_,$,T,E,z,U){var G=R();try{Zu(n,o,a,u,l,p,m,y,_,$,T,E,z,U)}catch(q){if(M(G),q!==q+0)throw q;N(1,0)}}function z_(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe){var Re=R();try{tl(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe)}catch(Ne){if(M(Re),Ne!==Ne+0)throw Ne;N(1,0)}}function O_(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we){var xe=R();try{Ju(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we)}catch(Re){if(M(xe),Re!==Re+0)throw Re;N(1,0)}}function B_(n,o,a,u,l,p,m,y,_,$,T,E,z){var U=R();try{Qu(n,o,a,u,l,p,m,y,_,$,T,E,z)}catch(G){if(M(U),G!==G+0)throw G;N(1,0)}}function D_(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de){var we=R();try{Xu(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de)}catch(xe){if(M(we),xe!==xe+0)throw xe;N(1,0)}}function M_(n,o,a,u,l,p,m,y){var _=R();try{rl(n,o,a,u,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;N(1,0)}}function R_(n,o,a,u,l,p,m,y,_,$,T){var E=R();try{ol(n,o,a,u,l,p,m,y,_,$,T)}catch(z){if(M(E),z!==z+0)throw z;N(1,0)}}function U_(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe,Re){var Ne=R();try{return al(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q,X,oe,de,we,xe,Re)}catch(tt){if(M(Ne),tt!==tt+0)throw tt;N(1,0)}}function j_(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G){var q=R();try{sl(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G)}catch(X){if(M(q),X!==X+0)throw X;N(1,0)}}function N_(n,o,a,u,l,p,m){var y=R();try{ul(n,o,a,u,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;N(1,0)}}function V_(n,o,a,u,l){var p=R();try{ll(n,o,a,u,l)}catch(m){if(M(p),m!==m+0)throw m;N(1,0)}}function W_(n,o,a,u,l,p,m,y,_,$,T,E){var z=R();try{dl(n,o,a,u,l,p,m,y,_,$,T,E)}catch(U){if(M(z),U!==U+0)throw U;N(1,0)}}function L_(n,o,a,u,l,p,m){var y=R();try{cl(n,o,a,u,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;N(1,0)}}function G_(n,o,a,u,l){var p=R();try{pl(n,o,a,u,l)}catch(m){if(M(p),m!==m+0)throw m;N(1,0)}}function H_(n,o,a,u,l,p,m,y,_,$,T,E){var z=R();try{Hs(n,o,a,u,l,p,m,y,_,$,T,E)}catch(U){if(M(z),U!==U+0)throw U;N(1,0)}}function F_(n,o,a,u){var l=R();try{ml(n,o,a,u)}catch(p){if(M(l),p!==p+0)throw p;N(1,0)}}function q_(n,o,a,u,l,p,m,y){var _=R();try{hl(n,o,a,u,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;N(1,0)}}function K_(n,o,a,u,l,p,m){var y=R();try{gl(n,o,a,u,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;N(1,0)}}function Y_(n,o,a,u,l){var p=R();try{yl(n,o,a,u,l)}catch(m){if(M(p),m!==m+0)throw m;N(1,0)}}function Z_(n,o,a,u){var l=R();try{return fl(n,o,a,u)}catch(p){if(M(l),p!==p+0)throw p;N(1,0)}}function Q_(n,o,a,u){var l=R();try{return Ol(n,o,a,u)}catch(p){if(M(l),p!==p+0)throw p;N(1,0)}}function X_(n,o,a,u,l){var p=R();try{bl(n,o,a,u,l)}catch(m){if(M(p),m!==m+0)throw m;N(1,0)}}function J_(n,o,a,u){var l=R();try{return _l(n,o,a,u)}catch(p){if(M(l),p!==p+0)throw p;N(1,0)}}function ew(n,o,a,u,l,p){var m=R();try{return wl(n,o,a,u,l,p)}catch(y){if(M(m),y!==y+0)throw y;N(1,0)}}function tw(n,o,a,u,l){var p=R();try{return vl(n,o,a,u,l)}catch(m){if(M(p),m!==m+0)throw m;N(1,0)}}function rw(n,o,a,u,l,p,m){var y=R();try{return $l(n,o,a,u,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;N(1,0)}}function nw(n,o,a,u,l,p,m,y,_,$,T,E){var z=R();try{xl(n,o,a,u,l,p,m,y,_,$,T,E)}catch(U){if(M(z),U!==U+0)throw U;N(1,0)}}function iw(n,o,a,u,l){var p=R();try{return Sl(n,o,a,u,l)}catch(m){if(M(p),m!==m+0)throw m;N(1,0)}}function ow(n,o,a,u,l,p,m,y,_,$,T,E,z){var U=R();try{Cl(n,o,a,u,l,p,m,y,_,$,T,E,z)}catch(G){if(M(U),G!==G+0)throw G;N(1,0)}}function aw(n,o,a,u,l,p,m,y){var _=R();try{return Tl(n,o,a,u,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;N(1,0)}}function sw(n,o,a,u,l){var p=R();try{return Al(n,o,a,u,l)}catch(m){if(M(p),m!==m+0)throw m;N(1,0)}}function uw(n,o,a,u,l){var p=R();try{return Il(n,o,a,u,l)}catch(m){if(M(p),m!==m+0)throw m;N(1,0)}}function lw(n){var o=R();try{return Aa(n)}catch(a){if(M(o),a!==a+0)throw a;return N(1,0),0n}}function dw(n,o,a,u,l,p){var m=R();try{return Ia(n,o,a,u,l,p)}catch(y){if(M(m),y!==y+0)throw y;N(1,0)}}function cw(n,o,a,u,l,p){var m=R();try{return nl(n,o,a,u,l,p)}catch(y){if(M(m),y!==y+0)throw y;N(1,0)}}function pw(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q){var X=R();try{el(n,o,a,u,l,p,m,y,_,$,T,E,z,U,G,q)}catch(oe){if(M(X),oe!==oe+0)throw oe;N(1,0)}}return r.stackSave=()=>R(),r.stackRestore=n=>M(n),r.stackAlloc=n=>Fn(n),r.setValue=function(n,o,a="i8"){switch(a.endsWith("*")&&(a="*"),a){case"i1":case"i8":_e()[n>>>0]=o;break;case"i16":Ee()[n>>>1>>>0]=o;break;case"i32":D()[n>>>2>>>0]=o;break;case"i64":se[n>>>3]=BigInt(o);break;case"float":ve()[n>>>2>>>0]=o;break;case"double":Ge()[n>>>3>>>0]=o;break;case"*":J()[n>>>2>>>0]=o;break;default:yt(`invalid type for setValue: ${a}`)}},r.getValue=function(n,o="i8"){switch(o.endsWith("*")&&(o="*"),o){case"i1":case"i8":return _e()[n>>>0];case"i16":return Ee()[n>>>1>>>0];case"i32":return D()[n>>>2>>>0];case"i64":return se[n>>>3];case"float":return ve()[n>>>2>>>0];case"double":return Ge()[n>>>3>>>0];case"*":return J()[n>>>2>>>0];default:yt(`invalid type for getValue: ${o}`)}},r.UTF8ToString=Me,r.stringToUTF8=Ht,r.lengthBytesUTF8=uo,function n(){if(0<Lt)tr=n;else if(f)t(r),er();else{for(;0<An.length;)An.shift()(r);0<Lt?tr=n:(r.calledRun=!0,fe||(er(),t(r)))}}(),r.PTR_SIZE=4,s}),vw=yd,$w=globalThis.self?.name?.startsWith("em-pthread");$w&&yd()});var $d,ai,xw,Ze,xd,oi,Cw,Sw,Cd,Tw,wd,Sd,vd,Td,Dr=Y(()=>{"use strict";Br();$d=typeof location>"u"?void 0:location.origin,ai=import.meta.url>"file:"&&import.meta.url<"file;",xw=()=>{if(!!1){if(ai){let e=URL;return new URL(new e("ort.webgpu.bundle.min.mjs",import.meta.url).href,$d).href}return import.meta.url}},Ze=xw(),xd=()=>{if(Ze&&!Ze.startsWith("blob:"))return Ze.substring(0,Ze.lastIndexOf("/")+1)},oi=(e,t)=>{try{let i=t??Ze;return(i?new URL(e,i):new URL(e)).origin===$d}catch{return!1}},Cw=(e,t)=>{let i=t??Ze;try{return(i?new URL(e,i):new URL(e)).href}catch{return}},Sw=(e,t)=>`${t??"./"}${e}`,Cd=async e=>{let i=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(i)},Tw=async e=>(await import(/*webpackIgnore:true*/e)).default,wd=(gd(),or(hd)).default,Sd=async()=>{if(!Ze)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(oi(Ze))return[void 0,wd()];let e=await Cd(Ze);return[e,wd(e)]},vd=(_d(),or(bd)).default,Td=async(e,t,i)=>{if(!e&&!t&&vd&&Ze&&oi(Ze))return[void 0,vd];{let r="ort-wasm-simd-threaded.jsep.mjs",s=e??Cw(r,t),d=!!1&&i&&s&&!oi(s,t),c=d?await Cd(s):s??Sw(r,t);return[d?c:void 0,await Tw(c)]}}});var si,ui,Gr,Id,Iw,Aw,Mr,Ie,It=Y(()=>{"use strict";Dr();ui=!1,Gr=!1,Id=!1,Iw=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Aw=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Mr=async e=>{if(ui)return Promise.resolve();if(Gr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Id)throw new Error("previous call to 'initializeWebAssembly()' failed.");Gr=!0;let t=e.initTimeout,i=e.numThreads;if(!Aw())throw new Error("WebAssembly SIMD is not supported in the current environment.");let r=Iw();i>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+i+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=i=1);let s=e.wasmPaths,d=typeof s=="string"?s:void 0,c=s?.mjs,f=c?.href??c,h=s?.wasm,g=h?.href??h,b=e.wasmBinary,[w,v]=await Td(f,d,i>1),C=!1,x=[];if(t>0&&x.push(new Promise(S=>{setTimeout(()=>{C=!0,S()},t)})),x.push(new Promise((S,k)=>{let A={numThreads:i};if(b)A.wasmBinary=b;else if(g||d)A.locateFile=I=>g??d+I;else if(f&&f.indexOf("blob:")!==0)A.locateFile=I=>new URL(I,f).href;else if(w){let I=xd();I&&(A.locateFile=P=>I+P)}v(A).then(I=>{Gr=!1,ui=!0,si=I,S(),w&&URL.revokeObjectURL(w)},I=>{Gr=!1,Id=!0,k(I)})})),await Promise.race(x),C)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ie=()=>{if(ui&&si)return si;throw new Error("WebAssembly is not initialized yet.")}});var Qe,ur,Se,Hr=Y(()=>{"use strict";It();Qe=(e,t)=>{let i=Ie(),r=i.lengthBytesUTF8(e)+1,s=i._malloc(r);return i.stringToUTF8(e,s,r),t.push(s),s},ur=(e,t,i,r)=>{if(typeof e=="object"&&e!==null){if(i.has(e))throw new Error("Circular reference in options");i.add(e)}Object.entries(e).forEach(([s,d])=>{let c=t?t+s:s;if(typeof d=="object")ur(d,c+".",i,r);else if(typeof d=="string"||typeof d=="number")r(c,d.toString());else if(typeof d=="boolean")r(c,d?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof d}`)})},Se=e=>{let t=Ie(),i=t.stackSave();try{let r=t.PTR_SIZE,s=t.stackAlloc(2*r);t._OrtGetLastError(s,s+r);let d=Number(t.getValue(s,r===4?"i32":"i64")),c=t.getValue(s+r,"*"),f=c?t.UTF8ToString(c):"";throw new Error(`${e} ERROR_CODE: ${d}, ERROR_MESSAGE: ${f}`)}finally{t.stackRestore(i)}}});var Ad,Ed=Y(()=>{"use strict";It();Hr();Ad=e=>{let t=Ie(),i=0,r=[],s=e||{};try{if(e?.logSeverityLevel===void 0)s.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)s.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(s.terminate=!1);let d=0;return e?.tag!==void 0&&(d=Qe(e.tag,r)),i=t._OrtCreateRunOptions(s.logSeverityLevel,s.logVerbosityLevel,!!s.terminate,d),i===0&&Se("Can't create run options."),e?.extra!==void 0&&ur(e.extra,"",new WeakSet,(c,f)=>{let h=Qe(c,r),g=Qe(f,r);t._OrtAddRunConfigEntry(i,h,g)!==0&&Se(`Can't set a run config entry: ${c} - ${f}.`)}),[i,r]}catch(d){throw i!==0&&t._OrtReleaseRunOptions(i),r.forEach(c=>t._free(c)),d}}});var Ew,kw,Pw,Fr,zw,kd,Pd=Y(()=>{"use strict";It();Hr();Ew=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},kw=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Pw=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(i=>(typeof i=="string"?i:i.name)==="webgpu")&&(e.enableMemPattern=!1)},Fr=(e,t,i,r)=>{let s=Qe(t,r),d=Qe(i,r);Ie()._OrtAddSessionConfigEntry(e,s,d)!==0&&Se(`Can't set a session config entry: ${t} - ${i}.`)},zw=async(e,t,i)=>{for(let r of t){let s=typeof r=="string"?r:r.name,d=[];switch(s){case"webnn":if(s="WEBNN",typeof r!="string"){let w=r?.deviceType;w&&Fr(e,"deviceType",w,i)}break;case"webgpu":if(s="JS",typeof r!="string"){let b=r;if(b?.preferredLayout){if(b.preferredLayout!=="NCHW"&&b.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${b.preferredLayout}`);Fr(e,"preferredLayout",b.preferredLayout,i)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let c=Qe(s,i),f=d.length,h=0,g=0;if(f>0){h=Ie()._malloc(f*Ie().PTR_SIZE),i.push(h),g=Ie()._malloc(f*Ie().PTR_SIZE),i.push(g);for(let b=0;b<f;b++)Ie().setValue(h+b*Ie().PTR_SIZE,d[b][0],"*"),Ie().setValue(g+b*Ie().PTR_SIZE,d[b][1],"*")}await Ie()._OrtAppendExecutionProvider(e,c,h,g,f)!==0&&Se(`Can't append execution provider: ${s}.`)}},kd=async e=>{let t=Ie(),i=0,r=[],s=e||{};Pw(s);try{let d=Ew(s.graphOptimizationLevel??"all"),c=kw(s.executionMode??"sequential"),f=typeof s.logId=="string"?Qe(s.logId,r):0,h=s.logSeverityLevel??2;if(!Number.isInteger(h)||h<0||h>4)throw new Error(`log serverity level is not valid: ${h}`);let g=s.logVerbosityLevel??0;if(!Number.isInteger(g)||g<0||g>4)throw new Error(`log verbosity level is not valid: ${g}`);let b=typeof s.optimizedModelFilePath=="string"?Qe(s.optimizedModelFilePath,r):0;if(i=t._OrtCreateSessionOptions(d,!!s.enableCpuMemArena,!!s.enableMemPattern,c,!!s.enableProfiling,0,f,h,g,b),i===0&&Se("Can't create session options."),s.executionProviders&&await zw(i,s.executionProviders,r),s.enableGraphCapture!==void 0){if(typeof s.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${s.enableGraphCapture}`);Fr(i,"enableGraphCapture",s.enableGraphCapture.toString(),r)}if(s.freeDimensionOverrides)for(let[w,v]of Object.entries(s.freeDimensionOverrides)){if(typeof w!="string")throw new Error(`free dimension override name must be a string: ${w}`);if(typeof v!="number"||!Number.isInteger(v)||v<0)throw new Error(`free dimension override value must be a non-negative integer: ${v}`);let C=Qe(w,r);t._OrtAddFreeDimensionOverride(i,C,v)!==0&&Se(`Can't set a free dimension override: ${w} - ${v}.`)}return s.extra!==void 0&&ur(s.extra,"",new WeakSet,(w,v)=>{Fr(i,w,v,r)}),[i,r]}catch(d){throw i!==0&&t._OrtReleaseSessionOptions(i)!==0&&Se("Can't release session options."),r.forEach(c=>t._free(c)),d}}});var Kt,At,Et,qr,lr,Kr,Yr,li,ce=Y(()=>{"use strict";Kt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},At=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Et=(e,t)=>{let i=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((s,d)=>s*d,1);return i>0?Math.ceil(r*i):void 0},qr=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},lr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Kr=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Yr=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",li=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}});var dr,di=Y(()=>{"use strict";Br();dr=async e=>{if(typeof e=="string")if(!1)try{let{readFile:t}=Zn("node:fs/promises");return new Uint8Array(await t(e))}catch(t){if(t.code==="ERR_FS_FILE_TOO_LARGE"){let{createReadStream:i}=Zn("node:fs"),r=i(e),s=[];for await(let d of r)s.push(d);return new Uint8Array(Buffer.concat(s))}throw t}else{let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let i=t.headers.get("Content-Length"),r=i?parseInt(i,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let s=t.body.getReader(),d;try{d=new ArrayBuffer(r)}catch(f){if(f instanceof RangeError){let h=Math.ceil(r/65536);d=new WebAssembly.Memory({initial:h,maximum:h}).buffer}else throw f}let c=0;for(;;){let{done:f,value:h}=await s.read();if(f)break;let g=h.byteLength;new Uint8Array(d,c,g).set(h),c+=g}return new Uint8Array(d,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}});var Ow,Bw,zd,Od,Zr,Dw,be,dt=Y(()=>{"use strict";ce();Ow=["V","I","W","E","F"],Bw=(e,t)=>{console.log(`[${Ow[e]},${new Date().toISOString()}]${t}`)},Zr=(e,t)=>{zd=e,Od=t},Dw=(e,t)=>{let i=lr(e),r=lr(zd);i>=r&&Bw(i,typeof t=="function"?t():t)},be=(...e)=>{Od&&Dw(...e)}});var ci,ct,W,Rt,Qr,Bd,Dd,he=Y(()=>{"use strict";ci=class{static calcMatMulShape(t,i){return t[1]!==i[0]?void 0:[t[0],i[1]]}},ct=class{static calcShape(t,i,r=!1){let s=t.length,d=i.length;if(s===0)return i;if(d===0)return t;let c=Math.max(t.length,i.length),f=new Array(c);if(r){if(s<2||d<2)return;let h=ci.calcMatMulShape([t[s-2],t[s-1]],[i[d-2],i[d-1]]);if(h===void 0)return;[f[c-2],f[c-1]]=h}for(let h=r?3:1;h<=c;h++){let g=s-h<0?1:t[s-h],b=d-h<0?1:i[d-h];if(g!==b&&g>1&&b>1)return;let w=Math.max(g,b);if(g&&b)f[c-h]=Math.max(g,b);else{if(w>1)return;f[c-h]=0}}return f}static isValidBroadcast(t,i){let r=t.length,s=i.length;if(r>s)return!1;for(let d=1;d<=r;d++)if(t[r-d]!==1&&t[r-d]!==i[s-d])return!1;return!0}},W=class e{static size(t){return e.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,i=4){let r=t.length;if(r===0)return[];let s=new Array(r),d=r-1;for(;d>=0;){if(t[d]%i===0){s[d]=t[d]/i;break}if(i%t[d]!==0)throw new Error("cannot convert shape");s[d]=1,i/=t[d],d--}for(d--;d>=0;d--)s[d]=t[d];return s}static sizeFromDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,i,t.length)}static sizeToDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeToDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,0,i)}static getSizeFromDimensionRange(t,i,r){let s=1;for(let d=i;d<r;d++){if(t[d]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");s*=Number(t[d])}return s}static computeStrides(t){let i=t.length;if(i===0)return[];if(i===1)return[1];let r=new Array(i);r[i-1]=1,r[i-2]=t[i-1];for(let s=i-3;s>=0;--s)r[s]=r[s+1]*t[s+1];return r}static normalizeAxis(t,i){if(t<-i&&t>=i)throw new Error("unsupported axis for this operation.");return t<0?t+i:t}static normalizeAxes(t,i){return t.map(r=>this.normalizeAxis(r,i??t.length))}static sortBasedOnPerm(t,i){return i?i.map(r=>t[r]):t.slice().reverse()}static padShape(t,i){let r=t.length;return t.map((s,d)=>s+i[d]+i[d+r])}static areEqual(t,i){return t.length!==i.length?!1:t.every((r,s)=>r===i[s])}},Rt=class e{static adjustPoolAttributes(t,i,r,s,d,c){if(!t&&r.length!==i.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let f=0;f<i.length-2;f++)f>=r.length?r.push(i[f+2]):r[f]=i[f+2];for(let f=0;f<r.length;f++)if(f<s.length){if(s[f]<0)throw new Error("strides should be greater than or equal to 1")}else s.push(1);for(let f=0;f<r.length;f++)if(f<d.length){if(d[f]<0)throw new Error("dilations should be greater than or equal to 1")}else d.push(1);for(let f=0;f<r.length*2;f++)if(f<c.length){if(c[f]<0)throw new Error("pad should be greater than or equal to 1")}else c.push(0);for(let f=0;f<r.length;f++){if(r[f]<=0)throw new Error("kernel shapes need to be greater than 0");if(c[f]>=r[f]||c[f+r.length]>=r[f])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,i,r,s,d,c,f){if(f){if(d.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(s.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let h=0;h<t.length-2;h++)e.adjustPadAndReturnShape(t[h+(c?1:2)],i[h],r[h],s[h],d,h,h+t.length-2,f)}}static computePoolOutputShape(t,i,r,s,d,c,f){if(i.length<=0)throw new Error("input shape must be of size greater than 0");let h=[i[0],i[1]];return e.computeShapeHelper(t,i,h,r,s,d,c,f),h}static computeConvOutputShape(t,i,r,s,d,c,f){if(t.length<=0||i.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let h=[t[0],i[0]];return e.computeShapeHelper(!1,t,h,r,s,d,c,f),h}static computeShapeHelper(t,i,r,s,d,c,f,h){if(t)for(let g=0;g<i.length-2;g++)r.push(1);else for(let g=0;g<i.length-2;g++)r.push(e.adjustPadAndReturnShape(i[g+2],s[g],d[g],c[g],f,g,g+i.length-2,h))}static adjustPadAndReturnShape(t,i,r,s,d,c,f,h){let g=r*(s-1)+1;if(h&&h!=="NOTSET")switch(h){case"VALID":return d[c]=0,d[f]=0,Math.floor((t-g)/i+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let w=((t+i-1)/i-1)*i+s-t;return d[c]=Math.floor(h==="SAME_LOWER"?(w+1)/2:w/2),d[f]=w-d[c],Math.floor((t+w-s)/i+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+d[c]+d[f]-g)/i+1)}},Qr=class{static getShapeOfGemmResult(t,i,r,s,d){if(t.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let c,f,h;i?(c=t[1],f=t[0]):(c=t[0],f=t[1]);let g=-1;if(s?(h=r[0],g=1):(h=r[1],g=0),r[g]!==f)throw new Error("dimension mismatch");if(c<=0||h<=0||f<=0)throw new Error("invalid shape specified");if(d&&!ct.isValidBroadcast(d,[c,h]))throw new Error("gemm: invalid bias shape for broadcast");return[c,h,f]}},Bd=-34028234663852886e22,Dd=34028234663852886e22});var Xr,pi=Y(()=>{"use strict";ce();Xr=(e,t)=>new(qr(t))(e)});var Mw,Md,Rw,Rd,Jr,en,fi,Ud,jd=Y(()=>{"use strict";dt();Mw=1,Md=()=>Mw++,Rw=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Rd=(e,t)=>{let i=Rw.get(e);if(!i)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((r,s)=>r*s)*i/8):0},Jr=class{constructor(t){this.sessionId=t.sessionId,this.mlContext=t.context,this.mlTensor=t.tensor,this.dataType=t.dataType,this.tensorShape=t.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return Rd(this.dataType,this.tensorShape)}destroy(){be("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(t){this.mlContext.writeTensor(this.mlTensor,t)}async read(t){return t?this.mlContext.readTensor(this.mlTensor,t):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(t,i,r){return this.mlContext===t&&this.dataType===i&&this.tensorShape.length===r.length&&this.tensorShape.every((s,d)=>s===r[d])}},en=class{constructor(t,i){this.tensorManager=t;this.wrapper=i}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(t,i,r,s){let d=this.tensorManager.getMLContext(t);if(this.wrapper){if(this.wrapper.canReuseTensor(d,i,r))return this.wrapper.tensor;if(s){if(this.wrapper.byteLength!==Rd(i,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let c=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(t,i,r,c,!0,!0),s&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(t){if(this.wrapper)if(t.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else be("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(t){if(this.activeUpload)if(t){t instanceof ArrayBuffer?new Uint8Array(t).set(this.activeUpload):new Uint8Array(t.buffer,t.byteOffset,t.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return t?this.wrapper.read(t):this.wrapper.read()}},fi=class{constructor(t){this.backend=t;this.tensorTrackersById=new Map;this.freeTensors=[];this.externalTensors=new Set}getMLContext(t){let i=this.backend.getMLContext(t);if(!i)throw new Error("MLContext not found for session.");return i}reserveTensorId(){let t=Md();return this.tensorTrackersById.set(t,new en(this)),t}releaseTensorId(t){let i=this.tensorTrackersById.get(t);i&&(this.tensorTrackersById.delete(t),i.tensorWrapper&&this.releaseTensor(i.tensorWrapper))}async ensureTensor(t,i,r,s,d){be("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${i}, dataType: ${r}, shape: ${s}, copyOld: ${d}}`);let c=this.tensorTrackersById.get(i);if(!c)throw new Error("Tensor not found.");return c.ensureTensor(t,r,s,d)}upload(t,i){let r=this.tensorTrackersById.get(t);if(!r)throw new Error("Tensor not found.");r.upload(i)}async download(t,i){be("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${t}, dstBuffer: ${i?.byteLength}}`);let r=this.tensorTrackersById.get(t);if(!r)throw new Error("Tensor not found.");return r.download(i)}releaseTensorsForSession(t){for(let i of this.freeTensors)i.sessionId===t&&i.destroy();this.freeTensors=this.freeTensors.filter(i=>i.sessionId!==t)}registerTensor(t,i,r,s){let d=this.getMLContext(t),c=Md(),f=new Jr({sessionId:t,context:d,tensor:i,dataType:r,shape:s});return this.tensorTrackersById.set(c,new en(this,f)),this.externalTensors.add(f),c}async getCachedTensor(t,i,r,s,d,c){let f=this.getMLContext(t);for(let[g,b]of this.freeTensors.entries())if(b.canReuseTensor(f,i,r)){be("verbose",()=>`[WebNN] Reusing tensor {dataType: ${i}, shape: ${r}}`);let w=this.freeTensors.splice(g,1)[0];return w.sessionId=t,w}be("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${i}, shape: ${r}}`);let h=await f.createTensor({dataType:i,shape:r,dimensions:r,usage:s,writable:d,readable:c});return new Jr({sessionId:t,context:f,tensor:h,dataType:i,shape:r})}releaseTensor(t){this.externalTensors.has(t)&&this.externalTensors.delete(t),this.freeTensors.push(t)}},Ud=(...e)=>new fi(...e)});var mi,Uw,tn,Nd=Y(()=>{"use strict";ce();It();pi();jd();dt();mi=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Uw=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let i=Object.keys(e).sort(),r=Object.keys(t).sort();return i.length===r.length&&i.every((s,d)=>s===r[d]&&e[s]===t[s])},tn=class{constructor(t){this.tensorManager=Ud(this);this.mlContextBySessionId=new Map;this.sessionIdsByMLContext=new Map;this.mlContextCache=[];this.sessionGraphInputs=new Map;this.temporaryGraphInputs=[];this.temporarySessionTensorIds=new Map;Zr(t.logLevel,!!t.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(t){be("verbose",()=>`[WebNN] onRunStart {sessionId: ${t}}`),this.activeSessionId=t}onRunEnd(t){be("verbose",()=>`[WebNN] onRunEnd {sessionId: ${t}}`);let i=this.temporarySessionTensorIds.get(t);if(i){for(let r of i)be("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(t),this.activeSessionId=void 0}}async createMLContext(t){if(t instanceof GPUDevice){let r=this.mlContextCache.findIndex(s=>s.gpuDevice===t);if(r!==-1)return this.mlContextCache[r].mlContext;{let s=await navigator.ml.createContext(t);return this.mlContextCache.push({gpuDevice:t,mlContext:s}),s}}else if(t===void 0){let r=this.mlContextCache.findIndex(s=>s.options===void 0&&s.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let s=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:s}),s}}let i=this.mlContextCache.findIndex(r=>Uw(r.options,t));if(i!==-1)return this.mlContextCache[i].mlContext;{let r=await navigator.ml.createContext(t);return this.mlContextCache.push({options:t,mlContext:r}),r}}registerMLContext(t,i){this.mlContextBySessionId.set(t,i);let r=this.sessionIdsByMLContext.get(i);r||(r=new Set,this.sessionIdsByMLContext.set(i,r)),r.add(t),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(t,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(t){this.sessionGraphInputs.delete(t);let i=this.mlContextBySessionId.get(t);if(!i)return;this.tensorManager.releaseTensorsForSession(t),this.mlContextBySessionId.delete(t);let r=this.sessionIdsByMLContext.get(i);if(r.delete(t),r.size===0){this.sessionIdsByMLContext.delete(i);let s=this.mlContextCache.findIndex(d=>d.mlContext===i);s!==-1&&this.mlContextCache.splice(s,1)}}getMLContext(t){return this.mlContextBySessionId.get(t)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(t){be("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${t}}`),this.tensorManager.releaseTensorId(t)}async ensureTensor(t,i,r,s,d){let c=mi.get(r);if(!c)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(t??this.currentSessionId,i,c,s,d)}async createTemporaryTensor(t,i,r){be("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${i}, shape: ${r}}`);let s=mi.get(i);if(!s)throw new Error(`Unsupported ONNX data type: ${i}`);let d=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(t,d,s,r,!1);let c=this.temporarySessionTensorIds.get(t);return c?c.push(d):this.temporarySessionTensorIds.set(t,[d]),d}uploadTensor(t,i){if(!Ie().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");be("verbose",()=>`[WebNN] uploadTensor {tensorId: ${t}, data: ${i.byteLength}}`),this.tensorManager.upload(t,i)}async downloadTensor(t,i){return this.tensorManager.download(t,i)}createMLTensorDownloader(t,i){return async()=>{let r=await this.tensorManager.download(t);return Xr(r,i)}}registerMLTensor(t,i,r,s){let d=mi.get(r);if(!d)throw new Error(`Unsupported ONNX data type: ${r}`);let c=this.tensorManager.registerTensor(t,i,d,s);return be("verbose",()=>`[WebNN] registerMLTensor {tensor: ${i}, dataType: ${d}, dimensions: ${s}} -> {tensorId: ${c}}`),c}registerMLConstant(t,i,r,s,d,c){if(!c)throw new Error("External mounted files are not available.");let f=t;t.startsWith("./")&&(f=t.substring(2));let h=c.get(f);if(!h)throw new Error(`File with name ${f} not found in preloaded files.`);if(i+r>h.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let g=h.slice(i,i+r).buffer,b;switch(d.dataType){case"float32":b=new Float32Array(g);break;case"float16":b=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(g):new Uint16Array(g);break;case"int32":b=new Int32Array(g);break;case"uint32":b=new Uint32Array(g);break;case"int64":b=new BigInt64Array(g);break;case"uint64":b=new BigUint64Array(g);break;case"int8":b=new Int8Array(g);break;case"int4":case"uint4":case"uint8":b=new Uint8Array(g);break;default:throw new Error(`Unsupported data type: ${d.dataType} in creating WebNN Constant from external data.`)}return be("verbose",()=>`[WebNN] registerMLConstant {dataType: ${d.dataType}, shape: ${d.shape}}}`),s.constant(d,b)}registerGraphInput(t){this.temporaryGraphInputs.push(t)}isGraphInput(t,i){let r=this.sessionGraphInputs.get(t);return r?r.includes(i):!1}flush(){}}});var rn=Y(()=>{"use strict"});var Vd,hi,gi,jw,Nw,Wd,bi,yi,Gd,Hd=Y(()=>{"use strict";dt();rn();Vd=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),hi=[],gi=e=>Math.ceil(Number(e)/16)*16,jw=e=>{for(let t=0;t<hi.length;t++){let i=hi[t];if(e<=i)return i}return Math.ceil(e/16)*16},Nw=1,Wd=()=>Nw++,bi=async(e,t,i,r)=>{let s=gi(i),d=e.device.createBuffer({size:s,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let c=e.getCommandEncoder();e.endComputePass(),c.copyBufferToBuffer(t,0,d,0,s),e.flush(),await d.mapAsync(GPUMapMode.READ);let f=d.getMappedRange();if(r){let h=r();return h.set(new Uint8Array(f,0,i)),h}else return new Uint8Array(f.slice(0,i))}finally{d.destroy()}},yi=class{constructor(t){this.backend=t;this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[i]of Vd)hi.push(i),this.freeBuffers.set(i,[]),this.freeUniformBuffers.set(i,[]);this.sessionCount=0}upload(t,i){let r=i.buffer,s=i.byteOffset,d=i.byteLength,c=gi(d),f=this.storageCache.get(t);if(!f)throw new Error("gpu data for uploading does not exist");if(Number(f.originalSize)!==d)throw new Error(`inconsistent data size. gpu data size=${f.originalSize}, data size=${d}`);let h=this.backend.device.createBuffer({mappedAtCreation:!0,size:c,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),g=h.getMappedRange();new Uint8Array(g).set(new Uint8Array(r,s,d)),h.unmap();let b=this.backend.device.createCommandEncoder();b.copyBufferToBuffer(h,0,f.gpuData.buffer,0,c),this.backend.device.queue.submit([b.finish()]),h.destroy(),be("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${t})`)}memcpy(t,i){let r=this.storageCache.get(t);if(!r)throw new Error("source gpu data for memcpy does not exist");let s=this.storageCache.get(i);if(!s)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==s.originalSize)throw new Error("inconsistent source and destination gpu data size");let d=gi(r.originalSize),c=this.backend.getCommandEncoder();this.backend.endComputePass(),c.copyBufferToBuffer(r.gpuData.buffer,0,s.gpuData.buffer,0,d)}registerExternalBuffer(t,i,r){let s;if(r){if(s=r[0],t===r[1])return be("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${i}) => id=${s}, buffer is the same, skip.`),s;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else s=Wd();return this.storageCache.set(s,{gpuData:{id:s,type:0,buffer:t},originalSize:i}),be("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${i}) => id=${s}, registered.`),s}unregisterExternalBuffer(t){t!==void 0&&(this.storageCache.delete(t),be("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${t}`))}create(t,i=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=jw(t),s,d=(i&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,c=(i&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(d||c){let g=(d?this.freeBuffers:this.freeUniformBuffers).get(r);g?g.length>0?s=g.pop():s=this.backend.device.createBuffer({size:r,usage:i}):s=this.backend.device.createBuffer({size:r,usage:i})}else s=this.backend.device.createBuffer({size:r,usage:i});let f={id:Wd(),type:0,buffer:s};return this.storageCache.set(f.id,{gpuData:f,originalSize:Number(t)}),be("verbose",()=>`[WebGPU] GpuDataManager.create(size=${t}) => id=${f.id}`),f}get(t){return this.storageCache.get(t)?.gpuData}release(t){let i=typeof t=="bigint"?Number(t):t,r=this.storageCache.get(i);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return be("verbose",()=>`[WebGPU] GpuDataManager.release(id=${i}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(i),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(t,i){let r=this.storageCache.get(Number(t));if(!r)throw new Error("data does not exist");await bi(this.backend,r.gpuData.buffer,r.originalSize,i)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let t of this.buffersPending){let i=Vd.get(t.size);if((t.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(t.size)||[];i===void 0||r.length>=i?t.destroy():r.push(t)}else if((t.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(t.size)||[];i===void 0||r.length>=i?t.destroy():r.push(t)}else t.destroy()}this.buffersPending=[]}else{let t=this.capturedPendingBuffers.get(this.backend.currentSessionId);t||(t=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,t));for(let i of this.buffersPending)t.push(i);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(t=>{t.forEach(i=>{i.destroy()})}),this.freeUniformBuffers.forEach(t=>{t.forEach(i=>{i.destroy()})}),this.storageCache.forEach(t=>{t.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(t=>{t.forEach(i=>{i.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(t){let i=this.capturedPendingBuffers.get(t);i&&(i.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(t)),this.sessionCount-=1,this.sessionCount===0&&(be("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Gd=(...e)=>new yi(...e)});var _i,pe,Be=Y(()=>{"use strict";_i=class{constructor(t){Object.assign(this,t)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(t=>`${this[t]}`).join(";")),this.key}},pe=e=>new _i(e)});var Ut,vi,Ae,Ve,Q,$e,$i,jt,nt,ne,nn,L,K,Fd,on,wi,qd,ye=Y(()=>{"use strict";ce();he();Ut=64,vi=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ae=(e,t=1)=>{let i=vi(e,t);return typeof i=="string"?i:i[0]},Ve=(e,t=1)=>{let i=vi(e,t);return typeof i=="string"?i:i[1]},Q=(...e)=>{let t=[];return e.forEach(i=>{i.length!==0&&t.push({type:12,data:i},{type:12,data:W.computeStrides(i)})}),t},$e=e=>e%4===0?4:e%2===0?2:1,$i=(e="f32",t,i="0")=>!t||t===1?`${e}(${i})`:`vec${t}<${e}>(${i})`,jt=(e,t,i)=>e==="f32"?i:t===1?`f32(${i})`:`vec${t}<f32>(${i})`,nt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ne=(e,t,i,r)=>e.startsWith("uniforms.")&&i>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:i>1?`${e}[${t}]`:e,nn=(e,t,i,r,s)=>{let d=typeof i=="number",c=d?i:i.length,f=[...new Array(c).keys()],h=c<2?"u32":c<=4?`vec${c}<u32>`:`array<u32, ${c}>`,g=vi(t,s),b=typeof g=="string"?g:g[1],w=typeof g=="string"?g:g[0],v={indices:h,value:b,storage:w,tensor:t},C=D=>typeof D=="string"?D:`${D}u`,x={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},S=d?"uniforms.":"",k=`${S}${e}_shape`,A=`${S}${e}_strides`,I="";for(let D=0;D<c-1;D++)I+=`
    let dim${D} = current / ${ne(A,D,c)};
    let rest${D} = current % ${ne(A,D,c)};
    indices[${D}] = dim${D};
    current = rest${D};
    `;I+=`indices[${c-1}] = current;`;let P=c<2?"":`
  fn o2i_${e}(offset: u32) -> ${v.indices} {
    var indices: ${v.indices};
    var current = offset;
    ${I}
    return indices;
  }`,B=D=>(x.offsetToIndices=!0,c<2?D:`o2i_${e}(${D})`),V=[];if(c>=2)for(let D=c-1;D>=0;D--)V.push(`${ne(A,D,c)} * (indices[${D}])`);let j=c<2?"":`
  fn i2o_${e}(indices: ${v.indices}) -> u32 {
    return ${V.join("+")};
  }`,H=D=>(x.indicesToOffset=!0,c<2?D:`i2o_${e}(${D})`),F=(...D)=>c===0?"0u":`${v.indices}(${D.map(C).join(",")})`,Z=(D,J)=>c<2?`${D}`:`${ne(D,J,c)}`,te=(D,J,ve)=>c<2?`${D}=${ve};`:`${ne(D,J,c)}=${ve};`,ie={},ue=(D,J)=>{x.broadcastedIndicesToOffset=!0;let ve=`${J.name}broadcastedIndicesTo${e}Offset`;if(ve in ie)return`${ve}(${D})`;let Ge=[];for(let ze=c-1;ze>=0;ze--){let De=J.indicesGet("outputIndices",ze+J.rank-c);Ge.push(`${Z(A,ze)} * (${De} % ${Z(k,ze)})`)}return ie[ve]=`fn ${ve}(outputIndices: ${J.type.indices}) -> u32 {
             return ${Ge.length>0?Ge.join("+"):"0u"};
           }`,`${ve}(${D})`},ee=(D,J)=>(()=>{if(v.storage===v.value)return`${e}[${D}]=${J};`;if(v.storage==="vec2<u32>"&&v.value==="i32")return`${e}[${D}]=vec2<u32>(u32(${J}), select(0u, 0xFFFFFFFFu, ${J} < 0));`;if(v.storage==="vec2<u32>"&&v.value==="u32")return`${e}[${D}]=vec2<u32>(u32(${J}), 0u);`;if(v.storage==="u32"&&v.value==="vec4<bool>")return`${e}[${D}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${J}));`;throw new Error(`not supported combination of storage type ${v.storage} and value type ${v.value} yet`)})(),se=D=>(()=>{if(v.storage===v.value)return`${e}[${D}]`;if(v.storage==="vec2<u32>"&&v.value==="i32")return`i32(${e}[${D}].x)`;if(v.storage==="vec2<u32>"&&v.value==="u32")return`u32(${e}[${D}].x)`;if(v.storage==="u32"&&v.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${D}] & 0xFFu), bool(${e}[${D}] & 0xFF00u), bool(${e}[${D}] & 0xFF0000u), bool(${e}[${D}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${v.storage} and value type ${v.value} yet`)})(),Pe=c<2?"":`
  fn get_${e}ByIndices(indices: ${v.indices}) -> ${b} {
    return ${se(`i2o_${e}(indices)`)};
  }`,re=c<2?"":(()=>{let D=f.map(ve=>`d${ve}: u32`).join(", "),J=f.map(ve=>`d${ve}`).join(", ");return`
  fn get_${e}(${D}) -> ${b} {
    return get_${e}ByIndices(${F(J)});
  }`})(),ae=(...D)=>{if(D.length!==c)throw new Error(`indices length must be ${c}`);let J=D.map(C).join(",");return c===0?se("0u"):c===1?se(J[0]):(x.get=!0,x.getByIndices=!0,x.indicesToOffset=!0,`get_${e}(${J})`)},fe=D=>c<2?se(D):(x.getByIndices=!0,x.indicesToOffset=!0,`get_${e}ByIndices(${D})`),le=c<2?"":`
  fn set_${e}ByIndices(indices: ${v.indices}, value: ${b}) {
    ${ee(`i2o_${e}(indices)`,"value")}
  }`,_e=c<2?"":(()=>{let D=f.map(ve=>`d${ve}: u32`).join(", "),J=f.map(ve=>`d${ve}`).join(", ");return`
  fn set_${e}(${D}, value: ${b}) {
    set_${e}ByIndices(${F(J)}, value);
  }`})();return{impl:()=>{let D=[],J=!1;return x.offsetToIndices&&(D.push(P),J=!0),x.indicesToOffset&&(D.push(j),J=!0),x.broadcastedIndicesToOffset&&(Object.values(ie).forEach(ve=>D.push(ve)),J=!0),x.set&&(D.push(_e),J=!0),x.setByIndices&&(D.push(le),J=!0),x.get&&(D.push(re),J=!0),x.getByIndices&&(D.push(Pe),J=!0),!d&&J&&D.unshift(`const ${k} = ${v.indices}(${i.join(",")});`,`const ${A} = ${v.indices}(${W.computeStrides(i).join(",")});`),D.join(`
`)},type:v,offsetToIndices:B,indicesToOffset:H,broadcastedIndicesToOffset:ue,indices:F,indicesGet:Z,indicesSet:te,set:(...D)=>{if(D.length!==c+1)throw new Error(`indices length must be ${c}`);let J=D[c];if(typeof J!="string")throw new Error("value must be string");let ve=D.slice(0,c).map(C).join(",");return c===0?ee("0u",J):c===1?ee(ve[0],J):(x.set=!0,x.setByIndices=!0,x.indicesToOffset=!0,`set_${e}(${ve}, ${J})`)},setByOffset:ee,setByIndices:(D,J)=>c<2?ee(D,J):(x.setByIndices=!0,x.indicesToOffset=!0,`set_${e}ByIndices(${D}, ${J});`),get:ae,getByOffset:se,getByIndices:fe,usage:r,name:e,strides:A,shape:k,rank:c}},L=(e,t,i,r=1)=>nn(e,t,i,"input",r),K=(e,t,i,r=1)=>nn(e,t,i,"output",r),Fd=(e,t,i)=>nn(e,t,i,"atomicOutput",1),on=(e,t,i,r=1)=>nn(e,t,i,"internal",r),wi=class{constructor(t,i){this.normalizedDispatchGroup=t;this.limits=i;this.internalVariables=[];this.variables=[];this.uniforms=[];this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(t){return`if (global_idx >= ${typeof t=="number"?`${t}u`:t}) { return; }`}mainStart(t=Ut){let i=typeof t=="number"?t:t[0],r=typeof t=="number"?1:t[1],s=typeof t=="number"?1:t[2];if(i>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||s>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${i}, ${r}, ${s}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(i*r*s>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${i}, ${r}, ${s}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let d=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,c=d?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,f=d?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${i*r*s}u + local_idx;`;return`@compute @workgroup_size(${i}, ${r}, ${s})
  fn main(${c}) {
    ${f}
  `}appendVariableUniforms(t){t.rank!==0&&(t.shape.startsWith("uniforms.")&&this.uniforms.push({name:t.shape.replace("uniforms.",""),type:"u32",length:t.rank}),t.strides.startsWith("uniforms.")&&this.uniforms.push({name:t.strides.replace("uniforms.",""),type:"u32",length:t.rank}))}declareVariable(t,i){if(t.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(t),this.appendVariableUniforms(t);let r=t.usage==="input"?"read":"read_write",s=t.usage==="atomicOutput"?"atomic<i32>":t.type.storage;return`@group(0) @binding(${i}) var<storage, ${r}> ${t.name}: array<${s}>;`}declareVariables(...t){return t.map(i=>this.declareVariable(i,this.variableIndex++)).join(`
`)}registerInternalVariable(t){if(t.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(t),this.appendVariableUniforms(t)}registerInternalVariables(...t){return t.forEach(i=>this.registerInternalVariable(i)),this}registerUniform(t,i,r=1){return this.uniforms.push({name:t,type:i,length:r}),this}registerUniforms(t){return this.uniforms=this.uniforms.concat(t),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let t=[];for(let{name:i,type:r,length:s}of this.uniforms)if(s&&s>4)r==="f16"?t.push(`@align(16) ${i}:array<mat2x4<${r}>, ${Math.ceil(s/8)}>`):t.push(`${i}:array<vec4<${r}>, ${Math.ceil(s/4)}>`);else{let d=s==null||s===1?r:`vec${s}<${r}>`;t.push(`${i}:${d}`)}return`
      struct Uniforms { ${t.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(t=>t.impl()).join(`
`)+this.internalVariables.map(t=>t.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let t=i=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(i)];return this.uniforms.map(i=>[t(i.type),i.length??1])}},qd=(e,t)=>new wi(e,t)});var Vw,Kd,Ww,Lw,Gw,Hw,We,Yd,Zd,wt=Y(()=>{"use strict";ce();he();Be();ye();Vw=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Kd=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Ww=(e,t)=>W.sortBasedOnPerm(e,Kd(e.length,t)),Lw=(e,t,i,r)=>{let s=`fn perm(i: ${r.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`;for(let d=0;d<t;++d)s+=`a[${e[d]}]=i[${d}];`;return s+="return a;}"},Gw=(e,t)=>{let i=[],r=[];for(let s=0;s<e.length;++s)e[s]!==1&&i.push(e[s]),e[t[s]]!==1&&r.push(t[s]);return{newShape:i,newPerm:r}},Hw=(e,t)=>{let i=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<i)return!1;i=e[r]}return!0},We=(e,t)=>{let i=e.dataType,r=e.dims.length,s=Kd(r,t),d=Ww(e.dims,s),c=e.dims,f=d,h=r<2||Hw(s,e.dims),g;if(h)return g=S=>{let k=L("input",i,c,4),A=K("output",i,f,4);return`
  ${S.registerUniform("output_size","u32").declareVariables(k,A)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let S=W.size(d);return{outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(S/64/4)},programUniforms:[{type:12,data:Math.ceil(S/4)}]}},getShaderSource:g};let{newShape:b,newPerm:w}=Gw(e.dims,s),v=W.areEqual(w,[2,3,1]),C=W.areEqual(w,[3,1,2]);if(b.length===2||v||C){c=v?[b[0],b[1]*b[2]]:C?[b[0]*b[1],b[2]]:b,f=[c[1],c[0]];let S=16;return g=k=>{let A=L("a",i,c.length),I=K("output",i,f.length);return`
  ${k.registerUniform("output_size","u32").declareVariables(A,I)}
  var<workgroup> tile : array<array<${I.type.value}, ${S+1}>, ${S}>;
  ${k.mainStart([S,S,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${S} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${S}u + local_id.x;
    let input_row = workgroup_id_x * ${S}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${A.getByIndices(`${A.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${S}u + local_id.x;
    let output_row = workgroup_id_y * ${S}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${I.setByIndices(`${I.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let k=W.size(d);return{outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f[1]/S),y:Math.ceil(f[0]/S)},programUniforms:[{type:12,data:k},...Q(c,f)]}},getShaderSource:g}}return g=S=>{let k=L("a",i,c.length),A=K("output",i,f.length);return`
  ${S.registerUniform("output_size","u32").declareVariables(k,A)}

  ${Lw(s,r,k,A)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${A.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${A.setByOffset("global_idx",k.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let S=W.size(d);return{outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...Q(c,f)]}},getShaderSource:g}},Yd=(e,t)=>{Vw(e.inputs,t.perm),e.compute(We(e.inputs[0],t.perm))},Zd=e=>pe({perm:e.perm})});var Fw,qw,Kw,Yw,Zw,Qw,Xw,Jw,e0,t0,pt,Qd,Xd,Jd,ec,tc,rc,nc,ic,oc,ac,sc=Y(()=>{"use strict";ce();he();ye();an();wt();Fw={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},qw={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Kw={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Yw={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Zw=(e,t)=>{let i=[];for(let r=t-e;r<t;++r)i.push(r);return i},Qw=(e,t)=>{let i=[],r=e.length;for(let d=0;d<r;d++)t.indexOf(d)===-1&&i.push(e[d]);let s=t.map(d=>e[d]);return[i,s]},Xw=(e,t)=>{let i=e.length+t.length,r=[],s=0;for(let d=0;d<i;d++)t.indexOf(d)===-1?r.push(e[s++]):r.push(1);return r},Jw=(e,t)=>{for(let i=0;i<e.length;++i)if(e[e.length-i-1]!==t-1-i)return!1;return!0},e0=(e,t)=>{let i=[];if(!Jw(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&i.push(r);e.forEach(r=>i.push(r))}return i},t0=(e,t,i,r,s,d,c)=>{let f=i[0].dims,h=W.size(d),g=W.size(c),b=L("_A",i[0].dataType,f),w=K("output",s,d),v=64;h===1&&(v=256);let C=`
          var<workgroup> aBestValues : array<f32, ${v}>;
       `,x=S=>`
        ${S.registerUniform("reduceSize","u32").declareVariables(b,w)}
        ${C}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${S.mainStart(v)}

          let outputIndex = global_idx / ${v};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Kw[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${v}) {
           let candidate = f32(${b.getByOffset("offset + k")});
           bestValue = ${Fw[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${v}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${qw[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${w.setByOffset("outputIndex",`${r==="mean"?`${w.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${w.type.storage}(${Yw[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${v}`,inputDependencies:["type"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:d,dataType:s}],dispatchGroup:{x:h},programUniforms:[{type:12,data:g}]})}},pt=(e,t,i,r)=>{let s=e.inputs.length===1?i:xi(e.inputs,i),d=s.axes;d.length===0&&!s.noopWithEmptyAxes&&(d=e.inputs[0].dims.map((C,x)=>x));let c=W.normalizeAxes(d,e.inputs[0].dims.length),f=c,h=e.inputs[0],g=e0(f,e.inputs[0].dims.length);g.length>0&&(h=e.compute(We(e.inputs[0],g),{inputs:[0],outputs:[-1]})[0],f=Zw(f.length,h.dims.length));let[b,w]=Qw(h.dims,f),v=b;s.keepDims&&(v=Xw(b,c)),e.compute(t0(t,s.cacheKey,[h],r,e.inputs[0].dataType,v,w),{inputs:[h]})},Qd=(e,t)=>{pt(e,"ReduceMeanShared",t,"mean")},Xd=(e,t)=>{pt(e,"ReduceL1Shared",t,"l1")},Jd=(e,t)=>{pt(e,"ReduceL2Shared",t,"l2")},ec=(e,t)=>{pt(e,"ReduceLogSumExpShared",t,"logSumExp")},tc=(e,t)=>{pt(e,"ReduceMaxShared",t,"max")},rc=(e,t)=>{pt(e,"ReduceMinShared",t,"min")},nc=(e,t)=>{pt(e,"ReduceProdShared",t,"prod")},ic=(e,t)=>{pt(e,"ReduceSumShared",t,"sum")},oc=(e,t)=>{pt(e,"ReduceSumSquareShared",t,"sumSquare")},ac=(e,t)=>{pt(e,"ReduceLogSumShared",t,"logSum")}});var ft,r0,sn,xi,mt,n0,i0,o0,a0,s0,u0,l0,d0,c0,p0,ht,uc,lc,dc,cc,pc,fc,mc,hc,gc,yc,an=Y(()=>{"use strict";ce();he();Be();ye();sc();ft=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},r0=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],sn=(e,t,i,r,s,d,c=!1,f=!1)=>{let h=[],g=i[0].dims,b=g.length,w=W.normalizeAxes(s,b),v=!f&&w.length===0;g.forEach((k,A)=>{v||w.indexOf(A)>=0?c&&h.push(1):h.push(k)});let C=h.length,x=W.size(h);return{name:e,shaderCache:t,getShaderSource:k=>{let A=[],I=L("_A",i[0].dataType,b),P=K("output",d,C),B=r(I,P,w),V=B[2];for(let j=0,H=0;j<b;j++)v||w.indexOf(j)>=0?(c&&H++,V=`for(var j${j}: u32 = 0; j${j} < ${g[j]}; j${j}++) {
                  ${B[2].includes("last_index")?`let last_index = j${j};`:""}
                  ${I.indicesSet("input_indices",j,`j${j}`)}
                  ${V}
                }`):(A.push(`${I.indicesSet("input_indices",j,P.indicesGet("output_indices",H))};`),H++);return`

        ${k.registerUniform("output_size","u32").declareVariables(I,P)}

        ${k.mainStart()}
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${I.type.indices};
          let output_indices = ${P.offsetToIndices("global_idx")};

          ${A.join(`
`)}
          ${B[0]}       // init ops for reduce max/min
          ${B[1]}
          ${V}
          ${B[3]}
          ${B.length===4?P.setByOffset("global_idx","value"):B.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:h,dataType:d}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:[{type:12,data:x},...Q(g,h)]})}},xi=(e,t)=>{let i=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>i.push(Number(r))),pe({axes:i,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},mt=(e,t,i,r)=>{let s=e.inputs,d=s.length===1?i:xi(s,i);e.compute(sn(t,{hint:d.cacheKey,inputDependencies:["rank"]},[s[0]],d.noopWithEmptyAxes&&d.axes.length===0?r0:r,d.axes,s[0].dataType,d.keepDims,d.noopWithEmptyAxes),{inputs:[0]})},n0=(e,t)=>{ft(e.inputs),mt(e,"ReduceLogSum",t,(r,s)=>[`var value = ${s.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},i0=(e,t)=>{ft(e.inputs),mt(e,"ReduceL1",t,(r,s)=>[`var value = ${s.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},o0=(e,t)=>{ft(e.inputs),mt(e,"ReduceL2",t,(r,s)=>[`var t = ${s.type.value}(0); var value = ${s.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},a0=(e,t)=>{ft(e.inputs),mt(e,"ReduceLogSumExp",t,(r,s)=>[`var value = ${s.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},s0=(e,t)=>{ft(e.inputs),mt(e,"ReduceMax",t,(r,s,d)=>{let c=[];for(let f=0;f<r.rank;f++)(d.indexOf(f)>=0||d.length===0)&&c.push(r.indicesSet("input_indices",f,0));return[`${c.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},u0=(e,t)=>{ft(e.inputs),mt(e,"ReduceMean",t,(r,s,d)=>{let c=1;for(let f=0;f<r.rank;f++)(d.indexOf(f)>=0||d.length===0)&&(c*=e.inputs[0].dims[f]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${s.type.value}(sum / ${c});`]})},l0=(e,t)=>{ft(e.inputs),mt(e,"ReduceMin",t,(r,s,d)=>{let c=[];for(let f=0;f<r.rank;f++)(d.indexOf(f)>=0||d.length===0)&&c.push(`input_indices[${f}] = 0;`);return[`${c.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},d0=(e,t)=>{ft(e.inputs),mt(e,"ReduceProd",t,(r,s)=>[`var value = ${s.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},c0=(e,t)=>{ft(e.inputs),mt(e,"ReduceSum",t,(r,s)=>[`var value = ${s.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},p0=(e,t)=>{ft(e.inputs),mt(e,"ReduceSumSquare",t,(r,s)=>[`var t = ${s.type.value}(0); var value = ${s.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},ht=(e,t,i)=>{if(t.length===0)return i;let r=1,s=1;for(let d=0;d<t.length;d++)t.indexOf(d)===-1?r*=e[d]:s*=e[d];return s<32&&r>1024},uc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?u0(e,t):Qd(e,t)},lc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?i0(e,t):Xd(e,t)},dc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?o0(e,t):Jd(e,t)},cc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?a0(e,t):ec(e,t)},pc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?s0(e,t):tc(e,t)},fc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?l0(e,t):rc(e,t)},mc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?d0(e,t):nc(e,t)},hc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?c0(e,t):ic(e,t)},gc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?p0(e,t):oc(e,t)},yc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?n0(e,t):ac(e,t)}});var bc,_c,wc,Ci,vc=Y(()=>{"use strict";ce();Be();an();bc=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},_c=(e,t)=>{bc(e.inputs);let i=(r,s,d)=>{let c=[];for(let f=0;f<r.rank;f++)(d.indexOf(f)>=0||d.length===0)&&c.push(`input_indices[${f}] = 0;`);return[`${c.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",s.setByOffset("global_idx","best_index")]};e.compute(sn("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},wc=(e,t)=>{bc(e.inputs);let i=(r,s,d)=>{let c=[];for(let f=0;f<r.rank;f++)(d.indexOf(f)>=0||d.length===0)&&c.push(`input_indices[${f}] = 0;`);return[`${c.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",s.setByOffset("global_idx","best_index")]};e.compute(sn("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},Ci=e=>pe(e)});var f0,Si,m0,h0,g0,Yt,y0,$c,un=Y(()=>{"use strict";ce();he();rn();ye();f0=(e,t)=>{let i=e[0],r=e[1],s=e[2],d=e[3],c=e[4],f=e[5];if(c&&f)throw new Error("Attention cannot have both past and attention_bias");if(i.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let h=i.dims[0],g=i.dims[1],b=i.dims[2];if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==b)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(s.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let w=s.dims[0]/3,v=w,C=v;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let P of t.qkvHiddenSizes)if(P%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");w=t.qkvHiddenSizes[0],v=t.qkvHiddenSizes[1],C=t.qkvHiddenSizes[2]}let x=g;if(w!==v)throw new Error("qkv_hidden_sizes first element should be same as the second");if(s.dims[0]!==w+v+C)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let S=0;if(c){if(v!==C)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(c.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(c.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(c.dims[1]!==h)throw new Error('Input "past" second dimension must be batch_size');if(c.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(c.dims[4]!==v/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(S=c.dims[3])}let k=x+S,A=-1,I=0;if(d)throw new Error("Mask not supported");if(c)throw new Error("past is not supported");if(f){if(f.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(f.dims[0]!==h||f.dims[1]!==t.numHeads||f.dims[2]!==g||f.dims[3]!==k)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:g,pastSequenceLength:S,kvSequenceLength:x,totalSequenceLength:k,maxSequenceLength:A,inputHiddenSize:b,hiddenSize:w,vHiddenSize:C,headSize:Math.floor(w/t.numHeads),vHeadSize:Math.floor(C/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:I,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Si=(e,t,i)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${i?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,m0=(e,t,i,r,s,d,c,f)=>{let h=$e(c?1:d),g=64,b=d/h;b<g&&(g=32);let w=Math.ceil(d/h/g),v=[{type:12,data:t},{type:12,data:i},{type:12,data:r},{type:12,data:s},{type:12,data:b},{type:12,data:w}],C=Ae(e.dataType,h),x=Ve(1,h),S=["type"];c&&S.push("type"),f&&S.push("type");let k=A=>{let I=K("x",e.dataType,e.dims,h),P=[I],B=c?L("seq_lens",c.dataType,c.dims):void 0;B&&P.push(B);let V=f?L("total_sequence_length_input",f.dataType,f.dims):void 0;V&&P.push(V);let j=Ve(e.dataType),H=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${g}>;
  var<workgroup> thread_sum: array<f32, ${g}>;
  ${A.registerUniforms(H).declareVariables(...P)}
  ${A.mainStart([g,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Si(B,V,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${g}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${c?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${x}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${x}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(h){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${h}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${g}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${x}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${x}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(h){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${h}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${g}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${I.type.value}(${j}(1.0) / ${j}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${x}(x[offset + i]);
        x[offset + i] = ${I.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${c?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${I.type.value}(${j}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${g};${C};${h}`,inputDependencies:S},getShaderSource:k,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:s,z:t*i},programUniforms:v})}},h0=(e,t,i,r,s,d,c,f,h)=>{let g=c+d.kvSequenceLength,b=[d.batchSize,d.numHeads,d.sequenceLength,g],w=e>1&&r,v=d.kvNumHeads?d.kvNumHeads:d.numHeads,C=w?[d.batchSize,v,g,d.headSize]:void 0,x=d.nReps?d.nReps:1,S=d.scale===0?1/Math.sqrt(d.headSize):d.scale,k=$e(d.headSize),A=d.headSize/k,I=12,P={x:Math.ceil(g/I),y:Math.ceil(d.sequenceLength/I),z:d.batchSize*d.numHeads},B=[{type:12,data:d.sequenceLength},{type:12,data:A},{type:12,data:g},{type:12,data:d.numHeads},{type:12,data:d.headSize},{type:1,data:S},{type:12,data:c},{type:12,data:d.kvSequenceLength},{type:12,data:x}],V=w&&r&&W.size(r.dims)>0,j=["type","type"];V&&j.push("type"),s&&j.push("type"),f&&j.push("type"),h&&j.push("type");let H=[{dims:b,dataType:t.dataType,gpuDataType:0}];w&&H.push({dims:C,dataType:t.dataType,gpuDataType:0});let F=Z=>{let te=L("q",t.dataType,t.dims,k),ie=L("key",i.dataType,i.dims,k),ue=[te,ie];if(V){let le=L("past_key",r.dataType,r.dims,k);ue.push(le)}s&&ue.push(L("attention_bias",s.dataType,s.dims));let ee=f?L("seq_lens",f.dataType,f.dims):void 0;ee&&ue.push(ee);let se=h?L("total_sequence_length_input",h.dataType,h.dims):void 0;se&&ue.push(se);let Pe=K("output",t.dataType,b),re=[Pe];w&&re.push(K("present_key",t.dataType,C,k));let ae=Ve(1,k),fe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${I}u;

  var<workgroup> tileQ: array<${te.type.storage}, ${I*I}>;
  var<workgroup> tileK: array<${te.type.storage}, ${I*I}>;
  ${Z.registerUniforms(fe).declareVariables(...ue,...re)}
  ${Z.mainStart([I,I,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${x===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${x===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Si(ee,se,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${V&&w?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${w?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${ae}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${V&&w?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${w?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${ae}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(k){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${k}`)}})()};
        output[outputIdx] = ${Pe.type.value} (sum * uniforms.alpha) + ${s?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${k};${s!==void 0};${r!==void 0};${e}`,inputDependencies:j},getRunData:()=>({outputs:H,dispatchGroup:P,programUniforms:B}),getShaderSource:F}},g0=(e,t,i,r,s,d,c=void 0,f=void 0)=>{let h=d+s.kvSequenceLength,g=s.nReps?s.nReps:1,b=s.vHiddenSize*g,w=e>1&&r,v=s.kvNumHeads?s.kvNumHeads:s.numHeads,C=w?[s.batchSize,v,h,s.headSize]:void 0,x=[s.batchSize,s.sequenceLength,b],S=12,k={x:Math.ceil(s.vHeadSize/S),y:Math.ceil(s.sequenceLength/S),z:s.batchSize*s.numHeads},A=[{type:12,data:s.sequenceLength},{type:12,data:h},{type:12,data:s.vHeadSize},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:12,data:b},{type:12,data:d},{type:12,data:s.kvSequenceLength},{type:12,data:g}],I=w&&r&&W.size(r.dims)>0,P=["type","type"];I&&P.push("type"),c&&P.push("type"),f&&P.push("type");let B=[{dims:x,dataType:t.dataType,gpuDataType:0}];w&&B.push({dims:C,dataType:t.dataType,gpuDataType:0});let V=j=>{let H=L("probs",t.dataType,t.dims),F=L("v",i.dataType,i.dims),Z=[H,F];I&&Z.push(L("past_value",r.dataType,r.dims));let te=c?L("seq_lens",c.dataType,c.dims):void 0;c&&Z.push(te);let ie=f?L("total_sequence_length_input",f.dataType,f.dims):void 0;f&&Z.push(ie);let ee=[K("output",t.dataType,x)];w&&ee.push(K("present_value",t.dataType,C));let se=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${S}u;
  var<workgroup> tileQ: array<${H.type.value}, ${S*S}>;
  var<workgroup> tileV: array<${H.type.value}, ${S*S}>;
  ${j.registerUniforms(se).declareVariables(...Z,...ee)}
  ${j.mainStart([S,S,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${g===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${g===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Si(te,ie,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${I&&w?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${w?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${H.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${I&&w?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${w?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:P},getRunData:()=>({outputs:B,dispatchGroup:k,programUniforms:A}),getShaderSource:V}},Yt=(e,t,i,r,s,d,c,f,h,g,b=void 0,w=void 0)=>{let v=Math.min(e.outputCount,1+(c?1:0)+(f?1:0)),C=v>1?g.pastSequenceLength:0,x=C+g.kvSequenceLength,S=h&&W.size(h.dims)>0?h:void 0,k=[t,i];v>1&&c&&W.size(c.dims)>0&&k.push(c),S&&k.push(S),b&&k.push(b),w&&k.push(w);let A=e.compute(h0(v,t,i,c,S,g,C,b,w),{inputs:k,outputs:v>1?[-1,1]:[-1]})[0];e.compute(m0(A,g.batchSize,g.numHeads,C,g.sequenceLength,x,b,w),{inputs:b&&w?[A,b,w]:[A],outputs:[]});let I=[A,r];v>1&&f&&W.size(f.dims)>0&&I.push(f),b&&I.push(b),w&&I.push(w),e.compute(g0(v,A,r,f,g,C,b,w),{inputs:I,outputs:v>1?[0,2]:[0]})},y0=(e,t)=>{let i=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,s=t.inputHiddenSize,d=t.headSize,c=12,f={x:Math.ceil(t.headSize/c),y:Math.ceil(t.sequenceLength/c),z:t.batchSize*t.numHeads},h=[e.inputs[0],e.inputs[1],e.inputs[2]],g=[{type:12,data:r},{type:12,data:s},{type:12,data:d},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],b=w=>{let v=K("output_q",h[0].dataType,i),C=K("output_k",h[0].dataType,i),x=K("output_v",h[0].dataType,i),S=L("input",h[0].dataType,h[0].dims),k=L("weight",h[1].dataType,h[1].dims),A=L("bias",h[2].dataType,h[2].dims),I=S.type.storage,P=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${c}u;
  var<workgroup> tileInput: array<${I}, ${c*c}>;
  var<workgroup> tileWeightQ: array<${I}, ${c*c}>;
  var<workgroup> tileWeightK: array<${I}, ${c*c}>;
  var<workgroup> tileWeightV: array<${I}, ${c*c}>;
  ${w.registerUniforms(P).declareVariables(S,k,A,v,C,x)}
  ${w.mainStart([c,c,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${I}(0);
    var valueK = ${I}(0);
    var valueV = ${I}(0);
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:f,programUniforms:g}),getShaderSource:b},{inputs:h,outputs:[-1,-1,-1]})},$c=(e,t)=>{let i=f0(e.inputs,t),[r,s,d]=y0(e,i);return Yt(e,r,s,d,e.inputs[4],void 0,void 0,void 0,e.inputs[5],i)}});var b0,_0,w0,xc,Cc=Y(()=>{"use strict";Je();ce();he();Be();ye();b0=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let i=(r,s,d)=>{let c=s.length;if(c!==r.length)throw new Error(`${d}: num dimensions != ${c}`);s.forEach((f,h)=>{if(f!==r[h])throw new Error(`${d}: dim[${h}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);i(e[1].dims,r,"Invalid input scale"),i(e[2].dims,r,"Invalid input B"),i(e[3].dims,r,"Invalid input mean"),i(e[4].dims,r,"Invalid input var")}else i(e[1].dims,[1],"Invalid input scale"),i(e[2].dims,[1],"Invalid input B"),i(e[3].dims,[1],"Invalid input mean"),i(e[4].dims,[1],"Invalid input var")},_0=(e,t)=>{let{epsilon:i,spatial:r,format:s}=t,d=e[0].dims,c=r?$e(d[d.length-1]):1,f=s==="NHWC"&&d.length>1?c:1,h=W.size(d)/c,g=r,b=g?d.length:d,w=L("x",e[0].dataType,e[0].dims,c),v=L("scale",e[1].dataType,e[1].dims,f),C=L("bias",e[2].dataType,e[2].dims,f),x=L("inputMean",e[3].dataType,e[3].dims,f),S=L("inputVar",e[4].dataType,e[4].dims,f),k=K("y",e[0].dataType,b,c),A=()=>{let P="";if(r)P=`let cOffset = ${d.length===1?"0u":s==="NHWC"?`outputIndices[${d.length-1}] / ${c}`:"outputIndices[1]"};`;else if(s==="NCHW")P=`
            ${k.indicesSet("outputIndices","0","0")}
            let cOffset = ${k.indicesToOffset("outputIndices")};`;else{P=`var cIndices = ${v.type.indices}(0);
                       cIndices[0] = outputIndices[${d.length-1}];`;for(let B=1;B<v.rank;B++)P+=`cIndices[${B}] = outputIndices[${B}];`;P+=`let cOffset = ${v.indicesToOffset("cIndices")};`}return P},I=P=>`
  const epsilon = ${i};
  ${P.registerUniform("outputSize","u32").declareVariables(w,v,C,x,S,k)}
  ${P.mainStart()}
  ${P.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${k.offsetToIndices(`global_idx * ${c}`)};
    ${A()}
    let scale = ${v.getByOffset("cOffset")};
    let bias = ${C.getByOffset("cOffset")};
    let inputMean = ${x.getByOffset("cOffset")};
    let inputVar = ${S.getByOffset("cOffset")};
    let x = ${w.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${k.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${c}`,inputDependencies:g?["rank","type","type","type","type"]:void 0},getShaderSource:I,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g?[{type:12,data:h},...Q(d)]:[{type:12,data:h}]})}},w0=e=>pe(e),xc=(e,t)=>{let{inputs:i,outputCount:r}=e,s=w0({...t,outputCount:r});if(ke.webgpu.validateInputContent&&b0(i,s),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(_0(i,s))}});var v0,$0,Sc,Tc=Y(()=>{"use strict";he();ye();v0=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},$0=e=>{let t=e[0].dims,i=e[0].dims[2],r=W.size(t)/4,s=e[0].dataType,d=L("input",s,t,4),c=L("bias",s,[i],4),f=L("residual",s,t,4),h=K("output",s,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:b=>`
  const channels = ${i}u / 4;
  ${b.declareVariables(d,c,f,h)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${d.getByOffset("global_idx")}
      + ${c.getByOffset("global_idx % channels")} + ${f.getByOffset("global_idx")};
    ${h.setByOffset("global_idx","value")}
  }`}},Sc=e=>{v0(e.inputs),e.compute($0(e.inputs))}});var x0,Ce,Ic,Ac,Ec,kc,Pc,zc,Oc,Bc,Dc,C0,Mc,Rc,Uc,jc,cr,Nc,ln,Vc,Wc,Lc,Gc,Hc,Fc,qc,Kc,Yc,Zc,Qc,Xc,Jc,ep,tp,rp,np,ip,Ti,Ii,op,ap,sp,S0,T0,up,dn=Y(()=>{"use strict";ce();he();Be();ye();x0=(e,t,i,r,s,d,c)=>{let f=Math.ceil(t/4),h="";typeof s=="string"?h=`${s}(a)`:h=s("a");let g=L("inputData",i,[f],4),b=K("outputData",r,[f],4),w=[{name:"vec_size",type:"u32"}];return c&&w.push(...c),`
      ${e.registerUniforms(w).declareVariables(g,b)}

  ${d??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${g.getByOffset("global_idx")};
    ${b.setByOffset("global_idx",h)}
  }`},Ce=(e,t,i,r,s,d=e.dataType,c,f)=>{let h=[{type:12,data:Math.ceil(W.size(e.dims)/4)}];return c&&h.push(...c),{name:t,shaderCache:{hint:s,inputDependencies:["type"]},getShaderSource:g=>x0(g,W.size(e.dims),e.dataType,d,i,r,f),getRunData:g=>({outputs:[{dims:e.dims,dataType:d}],dispatchGroup:{x:Math.ceil(W.size(g[0].dims)/64/4)},programUniforms:h})}},Ic=e=>{e.compute(Ce(e.inputs[0],"Abs","abs"))},Ac=e=>{e.compute(Ce(e.inputs[0],"Acos","acos"))},Ec=e=>{e.compute(Ce(e.inputs[0],"Acosh","acosh"))},kc=e=>{e.compute(Ce(e.inputs[0],"Asin","asin"))},Pc=e=>{e.compute(Ce(e.inputs[0],"Asinh","asinh"))},zc=e=>{e.compute(Ce(e.inputs[0],"Atan","atan"))},Oc=e=>{e.compute(Ce(e.inputs[0],"Atanh","atanh"))},Bc=e=>pe(e),Dc=(e,t)=>{let i;switch(t.to){case 10:i="vec4<f16>";break;case 1:i="vec4<f32>";break;case 12:i="vec4<u32>";break;case 6:i="vec4<i32>";break;case 9:i="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Ce(e.inputs[0],"Cast",i,void 0,t.cacheKey,t.to))},C0=e=>{let t,i,r=e.length>=2&&e[1].data!==0,s=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,i=s?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,i=s?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return pe({min:t,max:i})},Mc=(e,t)=>{let i=t||C0(e.inputs),r=Ve(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Clip",s=>`clamp(${s}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,i.cacheKey,void 0,[{type:e.inputs[0].dataType,data:i.min},{type:e.inputs[0].dataType,data:i.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},Rc=e=>{e.compute(Ce(e.inputs[0],"Ceil","ceil"))},Uc=e=>{e.compute(Ce(e.inputs[0],"Cos","cos"))},jc=e=>{e.compute(Ce(e.inputs[0],"Cosh","cosh"))},cr=e=>pe(e),Nc=(e,t)=>{let i=Ve(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${i}(${t.alpha});

  fn elu_f32(a: ${i}) -> ${i} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${i}>) -> vec4<${i}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},ln=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Vc=e=>{let t=Ve(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Erf",i=>`erf_vf32(${i})`,ln(t)))},Wc=e=>{e.compute(Ce(e.inputs[0],"Exp","exp"))},Lc=e=>{e.compute(Ce(e.inputs[0],"Floor","floor"))},Gc=e=>{let t=Ve(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Gelu",i=>`0.5 * ${i} * (1.0 + erf_vf32(${i} * 0.7071067811865475))`,ln(t)))},Hc=(e,t)=>{let i=Ve(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${i}>(0.0))`,`const leaky_relu_alpha_ = ${i}(${t.alpha});`,t.cacheKey))},Fc=e=>{e.compute(Ce(e.inputs[0],"Not",t=>`!${t}`))},qc=e=>{e.compute(Ce(e.inputs[0],"Neg",t=>`-${t}`))},Kc=e=>{e.compute(Ce(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Yc=e=>{let t=Ve(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Relu",i=>`select(vec4<${t}>(0.0), ${i}, ${i} > vec4<${t}>(0.0))`))},Zc=e=>{e.compute(Ce(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Qc=e=>pe(e),Xc=(e,t)=>{let i=Ve(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"HardSigmoid",r=>`max(vec4<${i}>(0.0), min(vec4<${i}>(1.0), ${t.alpha} * ${r} + vec4<${i}>(${t.beta})))`,void 0,t.cacheKey))},Jc=e=>{e.compute(Ce(e.inputs[0],"Sin","sin"))},ep=e=>{e.compute(Ce(e.inputs[0],"Sinh","sinh"))},tp=e=>{e.compute(Ce(e.inputs[0],"Sqrt","sqrt"))},rp=e=>{e.compute(Ce(e.inputs[0],"Tan","tan"))},np=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,ip=e=>{e.compute(Ce(e.inputs[0],"Tanh",np))},Ti=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${np("v")};
}
`,Ii=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,op=e=>{let t=Ve(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"FastGelu",Ii,Ti(t),void 0,e.inputs[0].dataType))},ap=(e,t)=>{let i=Ve(e.inputs[0].dataType);return e.compute(Ce(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${i}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${i}>(${t.alpha});`,t.cacheKey)),0},sp=e=>{e.compute(Ce(e.inputs[0],"Log","log"))},S0=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,T0=e=>`quick_gelu_impl(${e})`,up=(e,t)=>{let i=Ve(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"QuickGelu",T0,S0(i,t.alpha),t.cacheKey,e.inputs[0].dataType))}});var I0,A0,dp,cp=Y(()=>{"use strict";he();ye();dn();I0=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},A0=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let i=L("input",e[0].dataType,e[0].dims,4),r=L("bias",e[0].dataType,[e[0].dims[2]],4),s=K("output",e[0].dataType,t,4),d=W.size(t)/4,c=Ae(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)}}),getShaderSource:h=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${h.declareVariables(i,r,s)}

  ${ln(c)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes(d)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${s.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},dp=e=>{I0(e.inputs),e.compute(A0(e.inputs))}});var E0,k0,gt,pp,fp,mp,hp,gp,yp,bp,_p,wp,vp,$p=Y(()=>{"use strict";ce();he();ye();E0=(e,t,i,r,s,d,c,f,h,g,b,w)=>{let v,C;typeof f=="string"?v=C=(I,P)=>`${f}((${I}),(${P}))`:typeof f=="function"?v=C=f:(v=f.scalar,C=f.vector);let x=K("outputData",b,r.length,4),S=L("aData",h,t.length,4),k=L("bData",g,i.length,4),A;if(s)if(d){let I=W.size(t)===1,P=W.size(i)===1,B=t.length>0&&t[t.length-1]%4===0,V=i.length>0&&i[i.length-1]%4===0;I||P?A=x.setByOffset("global_idx",C(I?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"),P?`${k.type.value}(${k.getByOffset("0")}.x)`:k.getByOffset("global_idx"))):A=`
            let outputIndices = ${x.offsetToIndices("global_idx * 4u")};
            let offsetA = ${S.broadcastedIndicesToOffset("outputIndices",x)};
            let offsetB = ${k.broadcastedIndicesToOffset("outputIndices",x)};
            ${x.setByOffset("global_idx",C(c||B?S.getByOffset("offsetA / 4u"):`${S.type.value}(${S.getByOffset("offsetA / 4u")}[offsetA % 4u])`,c||V?k.getByOffset("offsetB / 4u"):`${k.type.value}(${k.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else A=x.setByOffset("global_idx",C(S.getByOffset("global_idx"),k.getByOffset("global_idx")));else{if(!d)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let I=(P,B,V="")=>{let j=`aData[indexA${B}][componentA${B}]`,H=`bData[indexB${B}][componentB${B}]`;return`
            let outputIndices${B} = ${x.offsetToIndices(`global_idx * 4u + ${B}u`)};
            let offsetA${B} = ${S.broadcastedIndicesToOffset(`outputIndices${B}`,x)};
            let offsetB${B} = ${k.broadcastedIndicesToOffset(`outputIndices${B}`,x)};
            let indexA${B} = offsetA${B} / 4u;
            let indexB${B} = offsetB${B} / 4u;
            let componentA${B} = offsetA${B} % 4u;
            let componentB${B} = offsetB${B} % 4u;
            ${P}[${B}] = ${V}(${v(j,H)});
          `};b===9?A=`
            var data = vec4<u32>(0);
            ${I("data",0,"u32")}
            ${I("data",1,"u32")}
            ${I("data",2,"u32")}
            ${I("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:A=`
            ${I("outputData[global_idx]",0)}
            ${I("outputData[global_idx]",1)}
            ${I("outputData[global_idx]",2)}
            ${I("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(S,k,x)}

        ${w??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${A}
      }`},k0=(e,t,i,r,s,d,c=i.dataType)=>{let f=i.dims.map(S=>Number(S)??1),h=r.dims.map(S=>Number(S)??1),g=!W.areEqual(f,h),b=f,w=W.size(f),v=!1,C=!1,x=[g];if(g){let S=ct.calcShape(f,h,!1);if(!S)throw new Error("Can't perform binary op on the given tensors");b=S.slice(),w=W.size(b);let k=W.size(f)===1,A=W.size(h)===1,I=f.length>0&&f[f.length-1]%4===0,P=h.length>0&&h[h.length-1]%4===0;x.push(k),x.push(A),x.push(I),x.push(P);let B=1;for(let V=1;V<b.length;V++){let j=f[f.length-V],H=h[h.length-V];if(j===H)B*=j;else break}B%4===0?(C=!0,v=!0):(k||A||I||P)&&(v=!0)}else v=!0;return x.push(v),{name:e,shaderCache:{hint:t+x.map(S=>S.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:S=>E0(S,f,h,b,v,g,C,s,i.dataType,r.dataType,c,d),getRunData:()=>({outputs:[{dims:b,dataType:c}],dispatchGroup:{x:Math.ceil(w/64/4)},programUniforms:[{type:12,data:Math.ceil(W.size(b)/4)},...Q(f,h,b)]})}},gt=(e,t,i,r,s,d)=>{e.compute(k0(t,s??"",e.inputs[0],e.inputs[1],i,r,d))},pp=e=>{gt(e,"Add",(t,i)=>`${t}+${i}`)},fp=e=>{gt(e,"Div",(t,i)=>`${t}/${i}`)},mp=e=>{gt(e,"Equal",{scalar:(t,i)=>`u32(${t}==${i})`,vector:(t,i)=>`vec4<u32>(${t}==${i})`},void 0,void 0,9)},hp=e=>{gt(e,"Mul",(t,i)=>`${t}*${i}`)},gp=e=>{let t=L("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;gt(e,"Pow",{scalar:(r,s)=>`pow_custom(${r},${s})`,vector:(r,s)=>`pow_vector_custom(${r},${s})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},yp=e=>{gt(e,"Sub",(t,i)=>`${t}-${i}`)},bp=e=>{gt(e,"Greater",{scalar:(t,i)=>`u32(${t}>${i})`,vector:(t,i)=>`vec4<u32>(${t}>${i})`},void 0,void 0,9)},_p=e=>{gt(e,"Less",{scalar:(t,i)=>`u32(${t}<${i})`,vector:(t,i)=>`vec4<u32>(${t}<${i})`},void 0,void 0,9)},wp=e=>{gt(e,"GreaterOrEqual",{scalar:(t,i)=>`u32(${t}>=${i})`,vector:(t,i)=>`vec4<u32>(${t}>=${i})`},void 0,void 0,9)},vp=e=>{gt(e,"LessOrEqual",{scalar:(t,i)=>`u32(${t}<=${i})`,vector:(t,i)=>`vec4<u32>(${t}<=${i})`},void 0,void 0,9)}});var z0,O0,B0,D0,xp,Cp,Sp=Y(()=>{"use strict";ce();he();Be();ye();z0=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let i=0,r=e[i],s=r.dataType,d=r.dims.length;e.forEach((c,f)=>{if(f!==i){if(c.dataType!==s)throw new Error("input tensors should be one type");if(c.dims.length!==d)throw new Error("input tensors should have the same shape");c.dims.forEach((h,g)=>{if(g!==t&&h!==r.dims[g])throw new Error("non concat dimensions must match")})}})},O0=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,B0=(e,t)=>{let i=e.length,r=[];for(let s=0;s<i;++s){let d=t.setByOffset("global_idx",e[s].getByIndices("indices"));i===1?r.push(d):s===0?r.push(`if (inputIndex == ${s}u) { ${d} }`):s===i-1?r.push(`else { ${d} }`):r.push(`else if (inputIndex == ${s}) { ${d} }`)}return r.join(`
`)},D0=(e,t,i,r)=>{let s=W.size(i),d=new Array(e.length),c=new Array(e.length),f=0,h=[],g=[],b=[{type:12,data:s}];for(let S=0;S<e.length;++S)f+=e[S].dims[t],d[S]=f,g.push(e[S].dims.length),c[S]=L(`input${S}`,r,g[S]),h.push("rank"),b.push({type:12,data:d[S]});for(let S=0;S<e.length;++S)b.push(...Q(e[S].dims));b.push(...Q(i));let w=K("output",r,i.length),v=w.indicesGet("indices",t),C=Array.from(Array(d.length).keys()).map(S=>`uniforms.sizeInConcatAxis${S}`).join(","),x=S=>`

  ${(()=>{S.registerUniform("outputSize","u32");for(let k=0;k<e.length;k++)S.registerUniform(`sizeInConcatAxis${k}`,"u32");return S.declareVariables(...c,w)})()}

  ${O0(d.length,C)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${w.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${v});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${d.length}u>(${C});
      ${v} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${B0(c,w)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:i,dataType:r}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:b}),getShaderSource:x}},xp=(e,t)=>{let i=e.inputs,r=i[0].dims,s=W.normalizeAxis(t.axis,r.length);z0(i,s);let d=r.slice();d[s]=i.reduce((f,h)=>f+(h.dims.length>s?h.dims[s]:0),0);let c=i.filter(f=>W.size(f.dims)>0);e.compute(D0(c,s,d,i[0].dataType),{inputs:c})},Cp=e=>pe({axis:e.axis})});var it,ot,at,cn,kt=Y(()=>{"use strict";ce();he();it=(e,t,i="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${i}(uniforms.clip_min)), ${t}(${i}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${i}(uniforms.alpha) * value + ${i}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${i}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},ot=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},at=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},cn=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[i,r]=e?.activation_params||[.2,.5];return{activation:t,alpha:i,beta:r}}else if(t==="Clip"){let[i,r]=e?.activation_params||[Bd,Dd];return{activation:t,clipMax:r,clipMin:i}}else if(t==="LeakyRelu"){let[i]=e?.activation_params||[.01];return{activation:t,alpha:i}}return{activation:t}}});var je,Tp,pn=Y(()=>{"use strict";je=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Tp=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `});var Ip,Ap=Y(()=>{"use strict";Ip=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`});var pr,fn,mn=Y(()=>{"use strict";ce();he();ye();kt();pr=(e,t,i,r,s)=>{let d=r-i;return`
      ${Array.from({length:i}).map((c,f)=>`
      if (${ne(t.shape,f,t.rank)} != 1) {
        ${t.indicesSet(e,f,ne(s,f+d,r))}
      } else {
        ${t.indicesSet(e,f,0)}
      }`).join("")}
`},fn=(e,t,i,r,s=!1,d)=>{let c=e[0].dims,f=e[1].dims,h=c[c.length-2],g=f[f.length-1],b=c[c.length-1],w=$e(g),v=$e(b),C=$e(h),x=W.size(i)/w/C,S=e.length>2,k=r?r.slice(0,-2):i.slice(0,-2),I=[W.size(k),h,g],P=[{type:12,data:x},{type:12,data:h},{type:12,data:g},{type:12,data:b}];ot(t,P),P.push(...Q(k,c,f)),S&&P.push(...Q(e[2].dims)),P.push(...Q(I));let B=V=>{let j=on("batch_dims",e[0].dataType,k.length),H=L("a",e[0].dataType,c.length,v),F=L("b",e[1].dataType,f.length,w),Z=K("output",e[0].dataType,I.length,w),te=Ae(Z.type.tensor),ie=it(t,Z.type.value,te),ue=[H,F],ee="";if(S){let re=s?w:1;ue.push(L("bias",e[2].dataType,e[2].dims.length,re)),ee=`${s?`value += bias[col / ${re}];`:`value += ${Z.type.value}(bias[row + i]);`}`}let se=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];at(t,se);let Pe=()=>{let re=`var a_data: ${H.type.value};`;for(let ae=0;ae<v;ae++)re+=`
              let b_data${ae} = b[(b_offset + (k + ${ae}) * uniforms.N + col) / ${w}];`;for(let ae=0;ae<C;ae++){re+=`a_data = a[(a_offset + (row + ${ae}) * uniforms.K + k) / ${v}];`;for(let fe=0;fe<v;fe++)re+=`
            values[${ae}] = fma(${F.type.value}(a_data${v===1?"":`[${fe}]`}), b_data${fe}, values[${ae}]);
`}return re};return`
  ${V.registerUniforms(se).registerInternalVariables(j).declareVariables(...ue,Z)}
  ${V.mainStart()}
    ${V.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${w})) * ${w};
    var index1 = global_idx / (uniforms.N / ${w});
    let stride1 = uniforms.M / ${C};
    let row = (index1 % stride1) * ${C};
    let batch = index1 / stride1;

    ${i.length===2?"":`let batch_indices = ${j.offsetToIndices("batch")};`}

    var a_indices: ${H.type.indices};
    ${pr("a_indices",H,H.rank-2,j.rank,"batch_indices")}
    ${H.indicesSet("a_indices",H.rank-2,0)}
    ${H.indicesSet("a_indices",H.rank-1,0)}
    let a_offset = ${H.indicesToOffset("a_indices")};

    var b_indices: ${F.type.indices};
    ${pr("b_indices",F,F.rank-2,j.rank,"batch_indices")}
    ${F.indicesSet("b_indices",F.rank-2,0)}
    ${F.indicesSet("b_indices",F.rank-1,0)}
    let b_offset = ${F.indicesToOffset("b_indices")};
    var values: array<${Z.type.value}, ${C}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${v}) {
      ${Pe()}
    }
    for (var i = 0u; i < ${C}u; i++) {
      var value = values[i];
      ${ee}
      ${ie}
      let cur_indices = ${Z.type.indices}(batch, row + i, col);
      let offset = ${Z.indicesToOffset("cur_indices")};
      ${Z.setByOffset(`offset / ${w}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${w};${v};${C};${s}`,inputDependencies:S?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:d?d(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:P}),getShaderSource:B}}});var M0,R0,Ai,Ep,U0,Ei,j0,fr,hn=Y(()=>{"use strict";ce();he();ye();kt();mn();pn();M0=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,R0=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Ai=(e,t,i="f32",r,s=!1,d=32,c=!1,f=32)=>{let h=t[1]*e[1],g=t[0]*e[0],b=s?h:d,w=s?d:h,v=b/t[0],C=d/t[1];if(!((s&&v===4&&e[1]===4||!s&&(v===3||v===4))&&b%t[0]===0&&d%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${s} is true, innerElementSize ${v} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${v} must be 3 or 4.
  tileAWidth ${b} must be divisible by workgroupSize[0]${t[0]}. tileInner ${d} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${v}<${i}>, ${b/v}>, ${w}>;
var<workgroup> mm_Bsub: array<array<vec4<${i}>, ${g/e[0]}>, ${d}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${v};
const tileInner = ${d};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${c?"0":"i32(globalId.z)"};
  ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${h};

  let num_tiles = ${c?`${Math.ceil(f/d)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${c?`i32(globalId.z) * ${f}`:"0"};

  var acc: array<vec4<${i}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${C};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${M0(s,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${C}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${r?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${v===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${R0(s,v)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ep=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,U0=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Ei=(e,t,i="f32",r,s=!1,d=32,c=!1,f=32,h=!1)=>{let g=e[1]*t[1],b=e[0]*t[0],w=s?g:d,v=s?d:g;if(!(v%t[1]===0&&w%t[0]===0&&d%t[1]===0))throw new Error(`tileAHight ${v} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${w} must be divisible by workgroupSize[0]${t[0]}, tileInner ${d} must be divisible by workgroupSize[1]${t[1]}`);let C=v/t[1],x=w/t[0],S=d/t[1],k=h?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${g};
    let globalColStart = i32(workgroupId.x) * ${b};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${v}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${w}; inputCol = inputCol + ${t[0]}) {
          ${Ep(s,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${d}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${b}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${r?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${i}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${s?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${g};

let tileRowA = i32(localId.y) * ${C};
let tileColA = i32(localId.x) * ${x};
let tileRowB = i32(localId.y) * ${S};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${C}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${x}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Ep(s,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${S}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${r?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${i}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${U0(s)}
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
  var<workgroup> mm_Asub : array<array<${i}, ${w}>, ${v}>;
  var<workgroup> mm_Bsub : array<array<${i}, ${b}>, ${d}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${d};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${c?"0":"i32(globalId.z)"};
    ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${c?`${Math.ceil(f/d)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${c?`i32(globalId.z) * ${f}`:"0"};

    var acc : array<array<${i}, colPerThread>, rowPerThread>;
    ${k}
  }
`},j0=(e,t,i,r,s=!1)=>{let[d,c,f,h]=r,g=Ae(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${d.type.indices}) -> ${je(e,g)} {
      var value = ${je(e,g)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${c.type.indices};
        ${pr("aIndices",c,c.rank-2,d.rank,"batchIndices")}
        ${c.indicesSet("aIndices",c.rank-2,"u32(row)")}
        ${c.indicesSet("aIndices",c.rank-1,"u32(colIn)")}
        value = ${c.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${d.type.indices}) -> ${je(e,g)} {
      var value = ${je(e,g)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${f.type.indices};
        ${pr("bIndices",f,f.rank-2,d.rank,"batchIndices")}
        ${f.indicesSet("bIndices",f.rank-2,"u32(row)")}
        ${f.indicesSet("bIndices",f.rank-1,"u32(colIn)")}
        value = ${f.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${je(e,g)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${s?"bias[colIn]":`${je(e,g)}(bias[row])`};`:""}
        ${i}
        ${h.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},fr=(e,t,i,r,s=!1,d)=>{let c=e[0].dims,f=e[1].dims,h=c.slice(0,-2),g=f.slice(0,-2),b=r?r.slice(0,-2):i.slice(0,-2),w=W.size(b),v=c[c.length-2],C=c[c.length-1],x=f[f.length-1],S=C%4===0&&x%4===0,k=v<=8?[4,1,1]:[4,4,1],A=[8,8,1],I=[Math.ceil(x/A[0]/k[0]),Math.ceil(v/A[1]/k[1]),Math.ceil(w/A[2]/k[2])],P=S?4:1,B=[...h,v,C/P],V=B.length,j=[...g,C,x/P],H=j.length,F=[w,v,x/P],Z=[{type:6,data:v},{type:6,data:x},{type:6,data:C}];ot(t,Z),Z.push(...Q(b,B,j));let te=["rank","rank"],ie=e.length>2;ie&&(Z.push(...Q(e[2].dims)),te.push("rank")),Z.push(...Q(F));let ue=ee=>{let se=b.length,Pe=on("batchDims",e[0].dataType,se,1),re=Ae(e[0].dataType),ae=L("a",e[0].dataType,V,P),fe=L("b",e[1].dataType,H,P),le=K("result",e[0].dataType,F.length,P),_e=[ae,fe];if(ie){let J=s?P:1;_e.push(L("bias",e[2].dataType,e[2].dims.length,J))}let Te=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];at(t,Te);let Ee=Ae(le.type.tensor),me=it(t,le.type.value,Ee),D=j0(P,ie,me,[Pe,ae,fe,le],s);return`
  ${ee.registerUniforms(Te).registerInternalVariables(Pe).declareVariables(..._e,le)}
  ${D}
  ${S?Ai(k,A,re,Pe):Ei(k,A,re,Pe)}
                   `};return{name:"MatMul",shaderCache:{hint:`${k};${t.activation};${S};${s}`,inputDependencies:te},getRunData:()=>({outputs:[{dims:d?d(i):i,dataType:e[0].dataType}],dispatchGroup:{x:I[0],y:I[1],z:I[2]},programUniforms:Z}),getShaderSource:ue}}});var N0,kp,Pp=Y(()=>{"use strict";ce();dt();ye();kt();pn();Ap();hn();N0=(e,t,i,r,s=!1,d,c=4,f=4,h=4,g="f32")=>{let b=te=>{switch(te){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${g}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${te} is not supported.`)}},w=te=>{switch(te){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${te} is not supported.`)}},v=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,C=e?`
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
    `,x=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",S=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",k=e?"row":"col",A=e?"col":"row",I=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${k} / outWidth;
    let outCol = ${k} % outWidth;

    let WRow = ${A} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${A} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${A} % inChannels;
    var resData = ${je(c,g)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${x} && xCol >= 0 && xCol < ${S}) {
      ${v}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${b(c)}
    }
    return resData;`,P=e?t&&r?`
    let col = colIn * ${c};
    ${I}`:`
    let col = colIn * ${c};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${I}
    }
    return ${je(c,g)}(0.0);`:r&&i?`
    let col = colIn * ${c};
    ${I}`:`
    let col = colIn * ${c};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${I}
    }
    return ${je(c,g)}(0.0);`,B=e?r&&i?w(f):`
    let col = colIn * ${f};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w(f)}
    }
    return ${je(f,g)}(0.0);`:`
    let col = colIn * ${f};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${w(f)}
    }
    return ${je(f,g)}(0.0);`,V=je(h,g),j=e?je(c,g):je(f,g),H=e?je(f,g):je(c,g),F=it(d,V,g);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${j} {
      ${e?P:B}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${H} {
      ${e?B:P}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${V}) {
      let col = colIn * ${h};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${C}
      ${Tp(s)}
      ${F}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},kp=(e,t,i,r,s,d,c,f,h)=>{let g=t.format==="NHWC",b=g?e[0].dims[3]:e[0].dims[1],w=i[0],v=g?i[2]:i[3],C=g?i[1]:i[2],x=g?i[3]:i[1],S=g&&(b%4===0||b%3===0)&&x%4===0,k=g?x:v*C,A=g?v*C:x,I=[8,8,1],P=r<=8?[4,1,1]:[4,4,1],B=[Math.ceil(k/I[0]/P[0]),Math.ceil(A/I[1]/P[1]),Math.ceil(w/I[2]/P[2])];be("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${B}`);let V=S?g&&b%4!==0?3:4:1,j=I[1]*P[1],H=I[0]*P[0],F=Math.max(I[0]*V,I[1]),Z=r%j===0,te=s%H===0,ie=d%F===0,ue=S?[V,4,4]:[1,1,1],ee=[{type:6,data:r},{type:6,data:s},{type:6,data:d},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];ot(t,ee),ee.push(...Q(e[0].dims,e[1].dims));let se=["rank","rank"];c&&(ee.push(...Q(e[2].dims)),se.push("rank")),ee.push(...Q(i));let Pe=re=>{let ae=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];at(t,ae);let fe=S?4:1,le=Ae(e[0].dataType),_e=`
      fn setOutputAtIndex(flatIndex : i32, value : ${S?`vec4<${le}>`:le}) {
        result[flatIndex] = ${S?`vec4<${le}>`:le}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${S?`vec4<${le}>`:le}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${S?"/ 4":""}, value);
      }`,Te=L("x",e[0].dataType,e[0].dims.length,V===3?1:V),Ee=L("w",e[1].dataType,e[1].dims.length,fe),me=[Te,Ee],D=K("result",e[0].dataType,i.length,fe);if(c){let J=L("bias",e[2].dataType,e[2].dims.length,fe);me.push(J),_e+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${S?`vec4<${le}>`:le} {
          return bias[coords.${g?"w":"y"}${S?"/ 4":""}];
        }`}return`
        ${Ip("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${re.registerUniforms(ae).declareVariables(...me,D)}
        ${_e}
        ${N0(g,Z,te,ie,c,t,ue[0],ue[1],ue[2],le)}
        ${S?Ai(P,I,le,void 0,!g,F):Ei(P,I,le,void 0,!g,F,!1,void 0,f)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${V};${S};${Z};${te};${ie};${j};${H};${F}`,inputDependencies:se},getRunData:()=>({outputs:[{dims:h?h(i):i,dataType:e[0].dataType}],dispatchGroup:{x:B[0],y:B[1],z:B[2]},programUniforms:ee}),getShaderSource:Pe}}});var V0,zp,gn,W0,Op,L0,Bp,Dp,Mp=Y(()=>{"use strict";ce();dt();he();ye();kt();pn();V0=e=>{let t=1;for(let i=0;i<e.length;i++)t*=e[i];return t},zp=e=>typeof e=="number"?[e,e,e]:e,gn=(e,t)=>t<=1?e:e+(e-1)*(t-1),W0=(e,t,i,r=1)=>{let s=gn(t,r);return Math.floor((e[0]*(i-1)-i+s)/2)},Op=(e,t,i,r,s)=>{s==null&&(s=W0(e,t[0],r[0]));let d=[0,0,0,i];for(let c=0;c<3;c++)e[c]+2*s>=t[c]&&(d[c]=Math.trunc((e[c]-t[c]+2*s)/r[c]+1));return d},L0=(e,t,i,r,s,d,c,f,h,g)=>{let b,w,v,C;if(e==="VALID"&&(e=0),typeof e=="number"){b={top:e,bottom:e,left:e,right:e,front:e,back:e};let x=Op([t,i,r,1],[f,h,g],1,[s,d,c],e);w=x[0],v=x[1],C=x[2]}else if(Array.isArray(e)){if(!e.every((S,k,A)=>S===A[0]))throw Error(`Unsupported padding parameter: ${e}`);b={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let x=Op([t,i,r,1],[f,h,g],1,[s,d,c],e[0]);w=x[0],v=x[1],C=x[2]}else if(e==="SAME_UPPER"){w=Math.ceil(t/s),v=Math.ceil(i/d),C=Math.ceil(r/c);let x=(w-1)*s+f-t,S=(v-1)*d+h-i,k=(C-1)*c+g-r,A=Math.floor(x/2),I=x-A,P=Math.floor(S/2),B=S-P,V=Math.floor(k/2),j=k-V;b={top:P,bottom:B,left:V,right:j,front:A,back:I}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:b,outDepth:w,outHeight:v,outWidth:C}},Bp=(e,t,i,r,s,d=!1,c="channelsLast")=>{let f,h,g,b,w;if(c==="channelsLast")[f,h,g,b,w]=e;else if(c==="channelsFirst")[f,w,h,g,b]=e;else throw new Error(`Unknown dataFormat ${c}`);let[v,,C,x,S]=t,[k,A,I]=zp(i),[P,B,V]=zp(r),j=gn(C,P),H=gn(x,B),F=gn(S,V),{padInfo:Z,outDepth:te,outHeight:ie,outWidth:ue}=L0(s,h,g,b,k,A,I,j,H,F),ee=d?v*w:v,se=[0,0,0,0,0];return c==="channelsFirst"?se=[f,ee,te,ie,ue]:c==="channelsLast"&&(se=[f,te,ie,ue,ee]),{batchSize:f,dataFormat:c,inDepth:h,inHeight:g,inWidth:b,inChannels:w,outDepth:te,outHeight:ie,outWidth:ue,outChannels:ee,padInfo:Z,strideDepth:k,strideHeight:A,strideWidth:I,filterDepth:C,filterHeight:x,filterWidth:S,effectiveFilterDepth:j,effectiveFilterHeight:H,effectiveFilterWidth:F,dilationDepth:P,dilationHeight:B,dilationWidth:V,inShape:e,outShape:se,filterShape:t}},Dp=(e,t,i,r,s,d)=>{let c=d==="channelsLast",f=c?e[0].dims[3]:e[0].dims[1],h=!1,g=[64,1,1],b={x:i.map((I,P)=>P)},w=[Math.ceil(V0(b.x.map(I=>i[I]))/g[0]),1,1];be("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${w}`);let v=h?c&&f%4!==0?3:4:1,C=W.size(i),x=[{type:12,data:C},{type:12,data:r},{type:12,data:s},{type:12,data:t.strides},{type:12,data:t.dilations}];ot(t,x),x.push(...Q(e[0].dims,e[1].dims));let S=["rank","rank"],k=e.length===3;k&&(x.push(...Q(e[2].dims)),S.push("rank")),x.push(...Q(i));let A=I=>{let P=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:s.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];at(t,P);let B=h?4:1,V=Ae(e[0].dataType),j=L("x",e[0].dataType,e[0].dims.length,v===3?1:v),H=L("W",e[1].dataType,e[1].dims.length,B),F=[j,H],Z=K("result",e[0].dataType,i.length,B),te="";if(k){let ee=L("bias",e[2].dataType,e[2].dims.length,B);F.push(ee),te+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${h?`vec4<${V}>`:V} {
          return bias[${c?ne("coords",4,5):ne("coords",1,5)}${h?"/ 4":""}];
        }`}let ie=je(v,V),ue=it(t,ie,V);return`
            ${te}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${j.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${H.getByIndices("aIndices")};
            }
          ${I.registerUniforms(P).declareVariables(...F,Z)}
          ${I.mainStart()}
          ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${Z.offsetToIndices("global_idx")};
              let batch = ${ne("coords",0,j.rank)};
              let d2 = ${c?ne("coords",j.rank-1,j.rank):ne("coords",1,j.rank)};
              let xFRCCorner = vec3<u32>(${c?ne("coords",1,j.rank):ne("coords",2,j.rank)},
              ${c?ne("coords",2,j.rank):ne("coords",3,j.rank)},
              ${c?ne("coords",3,j.rank):ne("coords",4,j.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${c?ne("uniforms.x_shape",1,j.rank):ne("uniforms.x_shape",2,j.rank)};
              let xShapeZ = ${c?ne("uniforms.x_shape",2,j.rank):ne("uniforms.x_shape",3,j.rank)};
              let xShapeW = ${c?ne("uniforms.x_shape",3,j.rank):ne("uniforms.x_shape",4,j.rank)};
              let xShapeU = ${c?ne("uniforms.x_shape",4,j.rank):ne("uniforms.x_shape",1,j.rank)};
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
                      ${c?`let xValues = vec4<f32>(
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
                        ${c?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${c?`let xValues = vec2<f32>(
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
                      ${c?`let xValues = vec3<f32>(
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
              ${k?"value = value + getBiasByOutputCoords(coords)":""};
              ${ue}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${c};${v};${k}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:x}),getShaderSource:A}}});var Rp,Up,jp=Y(()=>{"use strict";ce();he();ye();kt();Rp=(e,t,i,r)=>{let s=e.length>2,d=s?"value += b[output_channel];":"",c=e[0].dims,f=e[1].dims,h=t.format==="NHWC",g=h?i[3]:i[1],b=g/t.group,w=h&&b>=4?$e(g):1,v=W.size(i)/w,C=[{type:12,data:v},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:b}];ot(t,C),C.push(...Q(c,[f[0],f[1],f[2],f[3]/w]));let x=s?["rank","rank","rank"]:["rank","rank"];C.push(...Q([i[0],i[1],i[2],i[3]/w]));let S=k=>{let A=K("output",e[0].dataType,i.length,w),I=Ae(A.type.tensor),P=it(t,A.type.value,I),B=L("x",e[0].dataType,c.length),V=L("w",e[1].dataType,f.length,w),j=[B,V];s&&j.push(L("b",e[2].dataType,e[2].dims,w));let H=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];at(t,H);let F=h?`
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
            let xVal = ${B.get("batch","xHeight","xWidth","input_channel")};
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

            let xVal = ${B.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${V.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${k.registerUniforms(H).declareVariables(...j,A)}

  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${A.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${h?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${h?1:2}], outputIndices[${h?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${w} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${h?2:1}];

    var value: ${A.type.value} = ${A.type.value}(0);
    ${F}
    ${d}
    ${P}
    ${A.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${w}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:C}),getShaderSource:S}},Up=(e,t,i,r)=>{let s=e.length>2,d=$e(i[3]),c=$e(i[2]),f=W.size(i)/d/c,h=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/d],g=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/d],b=[i[0],i[1],i[2],i[3]/d],w=[{type:12,data:f},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];ot(t,w),w.push(...Q(h,g,b));let v=(c-1)*t.strides[1]+g[1],C=x=>{let S=K("output",e[0].dataType,b.length,d),k=Ae(S.type.tensor),A=it(t,S.type.value,k),I=L("x",e[0].dataType,h.length,d),P=L("w",e[1].dataType,g.length,d),B=[I,P];s&&B.push(L("b",e[2].dataType,e[2].dims,d));let V=s?"value += b[output_channel];":"",j=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return at(t,j),`
  ${x.registerUniforms(j).declareVariables(...B,S)}
  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${c}u;
    let col = (index1 % width1) * ${c}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${I.type.value}, ${v}>;
    var values: array<${S.type.value}, ${c}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${g[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${v}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${I.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${I.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${g[1]}; w_width++) {
          let w_val = ${P.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${c}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${c}u; i++) {
      var value = values[i];
      ${V}
      ${A}
      ${S.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${d};${c};${v};${g[0]};${g[1]}`,inputDependencies:s?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:w}),getShaderSource:C}}});var G0,ki,H0,Pi,zi,Np,F0,q0,Oi,Vp=Y(()=>{"use strict";he();Pp();Mp();hn();jp();kt();mn();wt();G0=(e,t,i,r,s,d)=>{let c=e[0],f=e.slice(d?1:2,d?3:4),h=f.length,g=t[0],w=t.slice(2).map((x,S)=>x+(x-1)*(i[S]-1)),C=f.map((x,S)=>x+r[S]+r[S+h]).map((x,S)=>Math.floor((x-w[S]+s[S])/s[S]));return C.splice(0,0,c),C.splice(d?3:1,0,g),C},ki=[2,3,1,0],H0=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(i!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Pi=(e,t)=>{let i=e.kernelShape.slice();i.length<t[1].dims.length-2&&i.push(...Array(t[1].dims.length-2-i.length).fill(0));for(let d=2;d<t[1].dims.length;++d)i[d-2]===0&&(i[d-2]=t[1].dims[d]);let r=e.pads.slice();Rt.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,i,r,e.format==="NHWC",e.autoPad);let s=Object.assign({},e);return Object.assign(s,{kernelShape:i,pads:r}),s},zi=e=>{let t=cn(e),i=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],s=e.dilations,d=e.group,c=e.kernel_shape,f=e.pads,h=e.strides,g=e.w_is_const();return{autoPad:r,format:i,dilations:s,group:d,kernelShape:c,pads:f,strides:h,wIsConst:g,...t,cacheKey:`${e.format};${t.activation};`}},Np=(e,t,i,r)=>{let s=i.format==="NHWC",d=G0(t[0].dims,t[1].dims,i.dilations,i.pads,i.strides,s);if(i.group!==1){let j=[t[0]];if(s){let F=e.kernelCustomData.wT??e.compute(We(t[1],ki),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=F),j.push(F)}else j.push(t[1]);t.length===3&&j.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&s&&t[1].dims[0]===i.group&&t[1].dims[1]===1&&i.dilations[0]===1&&i.dilations[1]===1?e.compute(Up(j,i,d,r),{inputs:j}):e.compute(Rp(j,i,d,r),{inputs:j});return}let c=t.length===3,f=t[0].dims[s?1:2],h=t[0].dims[s?2:3],g=t[0].dims[s?3:1],b=t[1].dims[2],w=t[1].dims[3],v=d[s?1:2],C=d[s?2:3],x=d[s?3:1],S=s&&b===f&&w===h&&i.pads[0]===0&&i.pads[1]===0;if(S||b===1&&w===1&&i.dilations[0]===1&&i.dilations[1]===1&&i.strides[0]===1&&i.strides[1]===1&&i.pads[0]===0&&i.pads[1]===0){let j=d[0],H,F,Z,te=[];if(s){let ee=e.kernelCustomData.wT??e.compute(We(t[1],ki),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];if(i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=ee),S){let se=f*h*g;H=t[0].reshape([1,j,se]),F=ee.reshape([1,se,x]),Z=[1,j,x]}else H=t[0].reshape([j,f*h,g]),F=ee.reshape([1,g,x]),Z=[j,v*C,x];te.push(H),te.push(F)}else H=t[0].reshape([j,g,f*h]),F=t[1].reshape([1,x,g]),Z=[j,x,v*C],te.push(F),te.push(H);c&&te.push(t[2]);let ie=Z[2],ue=te[0].dims[te[0].dims.length-1];ie<8&&ue<8?e.compute(fn(te,i,d,Z,s,r),{inputs:te}):e.compute(fr(te,i,d,Z,s,r),{inputs:te});return}let k=!0,A=e.kernelCustomData.wT??e.compute(We(t[1],ki),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=A);let I=[t[0],A];c&&I.push(t[2]);let P=s?v*C:x,B=s?x:v*C,V=b*w*g;e.compute(kp(I,i,d,P,B,V,c,k,r),{inputs:I})},F0=(e,t)=>{let i=t.format==="NHWC",r=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let s=[0,t.pads[0],0,t.pads[1]],d=[1].concat(t.strides),c=[1].concat(t.dilations),f=[1].concat(t.kernelShape),h=Pi({...t,pads:s,strides:d,dilations:c,kernelShape:f},r);Np(e,r,h,g=>i?[g[0],g[2],g[3]]:[g[0],g[1],g[3]])},q0=(e,t,i)=>{let r=i.format==="NHWC"?"channelsLast":"channelsFirst",s=Pi(i,t),d=i.autoPad==="NOTSET"?i.pads:i.autoPad,c=Bp(t[0].dims,t[1].dims,i.strides,i.dilations,d,!1,r);e.compute(Dp(t,s,c.outShape,[c.filterDepth,c.filterHeight,c.filterWidth],[c.padInfo.front,c.padInfo.top,c.padInfo.left],r))},Oi=(e,t)=>{if(H0(e.inputs,t),e.inputs[0].dims.length===3)F0(e,t);else if(e.inputs[0].dims.length===5)q0(e,e.inputs,t);else{let i=Pi(t,e.inputs);Np(e,e.inputs,i)}}});var Wp,Lp=Y(()=>{"use strict";ce();dt();he();ye();Wp=(e,t,i)=>{let r=e.length>2,s=t.outputShape,d=t.format==="NHWC",c=t.group,f=e[1].dims,h=f[2]/c,g=f[3],b=d?$e(h):1,w=d&&g===1&&h>=4,v=w?Math.floor(h/4)*4:Math.floor(h/b)*b,C=h-v,x=d?$e(g):1,S=d?g===1?b:x:1,k=W.size(s)/x,A=[Math.ceil(k/64),1,1];be("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${A}`);let I=["rank","rank"],P=[t.strides[0],t.strides[1]],B=[t.kernelShape[d?1:2],t.kernelShape[d?2:3]],V=[t.dilations[0],t.dilations[1]],j=[B[0]+(t.dilations[0]<=1?0:(t.kernelShape[d?1:2]-1)*(t.dilations[0]-1)),B[1]+(t.dilations[1]<=1?0:(t.kernelShape[d?2:3]-1)*(t.dilations[1]-1))],H=[j[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),j[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],F=[{type:12,data:k},{type:12,data:P},{type:12,data:B},{type:12,data:V},{type:12,data:j},{type:6,data:H},{type:12,data:v},{type:12,data:h},{type:12,data:g},...Q(e[0].dims,e[1].dims)];r&&(F.push(...Q(e[2].dims)),I.push("rank")),F.push(...Q(s));let Z=te=>{let ie=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:P.length},{name:"filter_dims",type:"u32",length:B.length},{name:"dilations",type:"u32",length:B.length},{name:"effective_filter_dims",type:"u32",length:j.length},{name:"pads",type:"i32",length:H.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],ue=Ae(e[0].dataType),ee=d?1:2,se=d?2:3,Pe=d?3:1,re=L("W",e[1].dataType,e[1].dims.length,S),ae=L("Dy",e[0].dataType,e[0].dims.length,b),fe=[ae,re];r&&fe.push(L("bias",e[2].dataType,[s[Pe]].length,x));let le=K("result",e[0].dataType,s.length,x),_e=()=>{let me="";if(w)b===4?me+=`
        let xValue = ${ae.getByOffset("x_offset")};
        let wValue = ${re.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:b===2?me+=`
          dotProd = dotProd + dot(vec4<${ue}>(${ae.getByOffset("x_offset")}, ${ae.getByOffset("x_offset + 1u")}), vec4<${ue}>(${re.getByOffset("w_offset")}, ${re.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:b===1&&(me+=`
          dotProd = dotProd + dot(vec4<${ue}>(${ae.getByOffset("x_offset")}, ${ae.getByOffset("x_offset + 1u")}, ${ae.getByOffset("x_offset + 2u")}, ${ae.getByOffset("x_offset + 3u")}), vec4<${ue}>(${re.getByOffset("w_offset")}, ${re.getByOffset("w_offset + 1u")}, ${re.getByOffset("w_offset + 2u")}, ${re.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(me+=`
                  let xValue = ${d?ae.getByOffset(`${ae.indicesToOffset(`${ae.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${b}`):ae.get("batch","inputChannel","idyR","idyC")};
        `,b===1)me+=`
          let w_offset = ${re.indicesToOffset(`${re.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${re.getByOffset(`w_offset / ${S}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let D=0;D<b;D++)me+=`
            let wValue${D} = ${re.getByOffset(`${re.indicesToOffset(`${re.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${D}, wOutChannel)`)} / ${S}`)};
            dotProd = dotProd + xValue[${D}] * wValue${D};`;return me},Te=()=>{if(C===0)return"";if(!w)throw new Error(`packInputAs4 ${w} is not true.`);let me="";if(b===1){me+="dotProd = dotProd";for(let D=0;D<C;D++)me+=`
            + ${ae.getByOffset(`x_offset + ${D}`)} * ${re.getByOffset(`w_offset + ${D}`)}`;me+=";"}else if(b===2){if(C!==2)throw new Error(`Invalid inputChannelsRemainder ${C}.`);me+=`
          let xValue = ${ae.getByOffset("x_offset")};
          let wValue = ${re.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return me},Ee=`
            let outputIndices = ${le.offsetToIndices(`global_idx * ${x}`)};
            let batch = ${le.indicesGet("outputIndices",0)};
            let d1 = ${le.indicesGet("outputIndices",Pe)};
            let r = ${le.indicesGet("outputIndices",ee)};
            let c = ${le.indicesGet("outputIndices",se)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${le.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${ue}(dyRCorner) + ${ue}(wR)) / ${ue}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${ue}(uniforms.Dy_shape[${ee}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${ue}(dyCCorner) + ${ue}(wC)) / ${ue}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${ue}(uniforms.Dy_shape[${se}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${w?`
                var x_offset = ${ae.indicesToOffset(`${ae.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${b};
                var w_offset = ${re.indicesToOffset(`${re.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${S};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${w?4:b}) {
                  ${_e()}
                  inputChannel = inputChannel + ${w?4:b};
                }
                ${Te()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${x}]`:""};
            ${le.setByOffset("global_idx","value")};
          `;return`
    ${te.registerUniforms(ie).declareVariables(...fe,le)}
      ${te.mainStart()}
      ${te.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${Ee}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${b}${S}${x}${w}${C}`,inputDependencies:I},getRunData:()=>({dispatchGroup:{x:A[0],y:A[1],z:A[2]},outputs:[{dims:i?i(s):s,dataType:e[0].dataType}],programUniforms:F}),getShaderSource:Z}}});var K0,Y0,Z0,Gp,Hp,Q0,Fp,X0,qp,Kp=Y(()=>{"use strict";Lp();kt();wt();K0=(e,t,i,r,s,d)=>(e-1)*t+i+(r-1)*s+1-d,Y0=(e,t,i,r,s)=>{let d=Math.floor(e/2);t==="SAME_UPPER"?(i[r]=d,i[s]=e-d):t==="SAME_LOWER"&&(i[r]=e-d,i[s]=d)},Z0=(e,t,i,r,s,d,c,f,h,g)=>{let b=e.length-2,w=g.length===0;h.length<b&&h.push(...Array(b-h.length).fill(0));let v=e[0],C=t[f?3:1]*s;for(let x=0,S=e.length-b-(f?1:0);x<b;++x,++S){let k=e[S],A=w?k*c[x]:g[x],I=K0(k,c[x],d[x],t[S],i[x],A);Y0(I,r,d,x,x+b),w&&g.push(c[x]*(k-1)+h[x]+(t[S]-1)*i[x]+1-d[x]-d[x+b])}g.splice(0,0,v),g.splice(f?3:1,0,C)},Gp=(e,t)=>{let i=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((w,v)=>w*v,1)===0){i.length=0;for(let w=2;w<t[1].dims.length;++w)i.push(t[1].dims[w])}let r=e.format==="NHWC";i.splice(0,0,t[1].dims[0]),i.splice(r?3:1,0,t[1].dims[1]);let s=e.pads.slice(),d=e.outputShape.slice(),c=e.outputPadding.slice(),f=t[0].dims,h=e.dilations.slice();if(h.reduce((w,v)=>w+v,0)===0){let w=t[0].dims.length-2;h=new Array(w).fill(1)}let g=e.strides.slice();if(g.reduce((w,v)=>w+v,0)===0){let w=t[0].dims.length-2;g=new Array(w).fill(1)}Z0(f,i,h,e.autoPad,e.group,s,g,r,c,d);let b=Object.assign({},e);return Object.assign(b,{kernelShape:i,pads:s,outputPadding:c,outputShape:d,dilations:h,strides:g}),b},Hp=e=>{let t=cn(e),i=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],s=e.dilations,d=e.group,c=e.kernelShape,f=e.pads,h=e.strides,g=e.wIsConst(),b=e.outputPadding,w=e.outputShape;return{autoPad:r,format:i,dilations:s,group:d,kernelShape:c,outputPadding:b,outputShape:w,pads:f,strides:h,wIsConst:g,...t,cacheKey:`${e.format};${t.activation};`}},Q0=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(i!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let s=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==s))throw new Error("invalid bias");let d=e[0].dims.length-2;if(t.dilations.reduce((b,w)=>b+w,0)>0&&t.dilations.length!==d)throw new Error(`dilations should be ${d}D`);if(t.strides.reduce((b,w)=>b+w,0)>0&&t.strides.length!==d)throw new Error(`strides should be ${d}D`);if(t.pads.reduce((b,w)=>b+w,0)>0&&t.pads.length!==d*2)throw new Error(`pads should be ${d*2}D`);if(t.outputPadding.length!==d&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${d}D`);if(t.kernelShape.reduce((b,w)=>b+w,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Fp=(e,t,i,r)=>{let s=e.kernelCustomData.wT??e.compute(We(t[1],[2,3,0,1]),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=s);let d=[t[0],s];t.length===3&&d.push(t[2]),e.compute(Wp(d,i,r),{inputs:d})},X0=(e,t)=>{let i=t.format==="NHWC",r=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let s=t.kernelShape;(s.length===0||s[0]===0)&&(s=[e.inputs[1].dims[2]]);let d=t.dilations;(d.length===0||d[0]===0)&&(d=[1]);let c=t.strides;(c.length===0||c[0]===0)&&(c=[1]);let f=t.pads;f.length===0&&(f=[0,0]),f=[0,f[0],0,f[1]],c=[1].concat(c),d=[1].concat(d),s=[1].concat(s);let h=t.outputPadding;h=[0].concat(h);let g=Gp({...t,pads:f,strides:c,dilations:d,kernelShape:s,outputPadding:h},r);Fp(e,r,g,b=>i?[b[0],b[2],b[3]]:[b[0],b[1],b[3]])},qp=(e,t)=>{if(Q0(e.inputs,t),e.inputs[0].dims.length===3)X0(e,t);else{let i=Gp(t,e.inputs);Fp(e,e.inputs,i)}}});var J0,Yp,Zp,Qp=Y(()=>{"use strict";ce();he();Be();ye();J0=(e,t,i,r)=>{let s=W.size(t),d=t.length,c=L("input",e,d),f=K("output",e,d),h=i.dataType===6?i.getInt32Array()[0]:Number(i.getBigInt64Array()[0]),g=W.normalizeAxis(h,d),b=w=>{let v=` i32(${c.indicesGet("inputIndices","uniforms.axis")}) `,C=ne("uniforms.input_shape","uniforms.axis",d),x=r.reverse?v+(r.exclusive?" + 1":""):"0",S=r.reverse?C:v+(r.exclusive?"":" + 1");return`
                ${w.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(c,f)}
                ${w.mainStart()}
                  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${f.offsetToIndices("global_idx")};
                  var sum = ${f.type.value}(0);
                  let first : i32 = ${x};
                  let last : i32 = ${S};
                  for (var i : i32 = first; i < last; i++) {
                    ${c.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${c.getByIndices("inputIndices")};
                  }
                  ${f.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},{type:12,data:g},...Q(t,t)]}),getShaderSource:b}},Yp=(e,t)=>{let i=e.inputs[0].dims,r=e.inputs[0].dataType,s=e.inputs[1];e.compute(J0(r,i,s,t),{inputs:[0]})},Zp=e=>{let t=e.exclusive===1,i=e.reverse===1;return pe({exclusive:t,reverse:i})}});var ev,tv,rv,Xp,Jp,ef=Y(()=>{"use strict";ce();he();Be();ye();ev=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},tv=(e,t,i,r)=>{let s=[];s.push(`fn perm(i: ${r.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`);for(let d=0;d<t;++d)s.push(i.indicesSet("a",e[d],`i[${d}]`));return s.push("return a;}"),s.join(`
`)},rv=(e,t)=>{let i,r,s,d,c,f,h=t.format==="NHWC",g=t.blocksize,b=t.mode==="DCR";h?([i,r,s,d]=e.dims,c=b?[i,r,s,g,g,d/g**2]:[i,r,s,d/g**2,g,g],f=b?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([i,r,s,d]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],c=b?[i,g,g,d/g**2,r,s]:[i,d/g**2,g,g,r,s],f=b?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let w=e.reshape(c),v=w.dims.length,C=e.dataType,x=L("a",C,v),S=K("output",C,v),k=A=>`
  ${A.registerUniform("output_size","u32").declareVariables(x,S)}

  ${tv(f,v,x,S)}

  ${A.mainStart()}
    ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",x.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:A=>{let I=h?[i,r*g,s*g,d/g**2]:[i,d/g**2,r*g,s*g],P=W.size(I),B=w.dims,V=W.sortBasedOnPerm(B,f);return{outputs:[{dims:I,dataType:A[0].dataType}],dispatchGroup:{x:Math.ceil(P/64)},programUniforms:[{type:12,data:P},...Q(B,V)]}},getShaderSource:k}},Xp=(e,t)=>{ev(e.inputs),e.compute(rv(e.inputs[0],t))},Jp=e=>pe({blocksize:e.blocksize,mode:e.mode,format:e.format})});var Bi,yn,tf,nv,iv,Di,Mi,rf,ov,nf,of,af=Y(()=>{"use strict";ce();he();Be();ye();Bi="[a-zA-Z]|\\.\\.\\.",yn="("+Bi+")+",tf="^"+yn+"$",nv="("+yn+",)*"+yn,iv="^"+nv+"$",Di=class{constructor(t=-1){this.symbolToIndices=new Map,this.inputIndex=t}addSymbol(t,i){let r=this.symbolToIndices.get(t);r===void 0?r=[i]:r.push(i),this.symbolToIndices.set(t,r)}},Mi=class{constructor(t,i){this.equation=i;this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,s]=i.includes("->")?i.split("->",2):[i,""];if(!r.match(RegExp(iv)))throw new Error("Invalid LHS term");if(r.split(",").forEach((f,h)=>{let g=t[h].dims.slice();if(!f.match(RegExp(tf)))throw new Error("Invalid LHS term");let b=this.processTerm(f,!0,g,h);this.lhs.push(b)}),s==="")s+=[...this.symbolToInfo.entries()].filter(([f,h])=>h.count===1||f==="...").map(([f])=>f).join("");else if(!s.match(RegExp(yn)))throw new Error("Invalid RHS");s.match(RegExp(Bi,"g"))?.forEach(f=>{if(f==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let h=this.symbolToInfo.get(f);if(h===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(h.dimValue)}}),this.rhs=this.processTerm(s,!1,this.outputDims)}addSymbol(t,i,r){let s=this.symbolToInfo.get(t);if(s!==void 0){if(s.dimValue!==i&&s.count!==1)throw new Error("Dimension mismatch");s.count++,s.inputIndices.push(r)}else s={count:1,dimValue:i,inputIndices:[r]};this.symbolToInfo.set(t,s)}processTerm(t,i,r,s=-1){let d=r.length,c=!1,f=[],h=0;if(!t.match(RegExp(tf))&&!i&&t!=="")throw new Error("Invalid LHS term");let g=t.match(RegExp(Bi,"g")),b=new Di(s);return g?.forEach((w,v)=>{if(w==="..."){if(c)throw new Error("Only one ellipsis is allowed per input term");c=!0;let C=d-g.length+1;if(C<0)throw new Error("Ellipsis out of bounds");if(f=r.slice(h,h+C),this.hasEllipsis){if(this.ellipsisDims.length!==f.length||this.ellipsisDims.toString()!==f.toString())throw new Error("Ellipsis dimensions mismatch")}else if(i)this.hasEllipsis=!0,this.ellipsisDims=f;else throw new Error("Ellipsis must be specified in the LHS");for(let x=0;x<f.length;x++){let S=String.fromCharCode(48+x);b.addSymbol(S,v+x),this.addSymbol(S,r[h++],s)}}else b.addSymbol(w,v+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(w,r[h++],s)}),b}},rf=e=>e+"_max",ov=(e,t,i,r)=>{let d=e.map(b=>b.length).map((b,w)=>L(`input${w}`,t,b)),c=W.size(r),f=K("output",t,r.length),h=[...i.symbolToInfo.keys()].filter(b=>!i.rhs.symbolToIndices.has(b)),g=b=>{let w=[],v="var prod = 1.0;",C="var sum = 0.0;",x="sum += prod;",S=[],k=[],A=[],I=[],P=i.symbolToInfo.size===i.rhs.symbolToIndices.size;i.symbolToInfo.forEach((V,j)=>{if(i.rhs.symbolToIndices.has(j)){let H=i.rhs.symbolToIndices.get(j)?.[0];H!==void 0&&i.lhs.forEach((F,Z)=>{if(V.inputIndices.includes(Z)){let te=F.symbolToIndices.get(j);if(te===void 0)throw new Error("Invalid symbol error");te.forEach(ie=>{w.push(`${d[Z].indicesSet(`input${Z}Indices`,ie,f.indicesGet("outputIndices",H))}`)})}})}else i.lhs.forEach((H,F)=>{if(V.inputIndices.includes(F)){let Z=H.symbolToIndices.get(j);if(Z===void 0)throw new Error("Invalid symbol error");Z.forEach(te=>{S.push(`${d[F].indicesSet(`input${F}Indices`,te,`${j}`)}`)}),I.push(`prod *= ${d[F].getByIndices(`input${F}Indices`)};`)}}),k.push(`for(var ${j}: u32 = 0; ${j} < uniforms.${rf(j)}; ${j}++) {`),A.push("}")});let B=P?[...w,`let sum = ${d.map((V,j)=>V.getByIndices(`input${j}Indices`)).join(" * ")};`]:[...w,C,...k,...S,v,...I,x,...A];return`
            ${b.registerUniforms(h.map(V=>({name:`${rf(V)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...d,f)}

            ${b.mainStart()}
            ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${f.offsetToIndices("global_idx")};
            ${d.map((V,j)=>`var input${j}Indices: ${d[j].type.indices};`).join(`
`)}
            ${B.join(`
`)};
            ${f.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:i.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let b=h.filter(v=>i.symbolToInfo.has(v)).map(v=>({type:12,data:i.symbolToInfo.get(v)?.dimValue||0}));b.push({type:12,data:c});let w=e.map((v,C)=>[...Q(v)]).reduce((v,C)=>v.concat(C),b);return w.push(...Q(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:w}},getShaderSource:g}},nf=(e,t)=>{let i=new Mi(e.inputs,t.equation),r=i.outputDims,s=e.inputs.map((d,c)=>d.dims);e.compute(ov(s,e.inputs[0].dataType,i,r))},of=e=>{let t=e.equation.replace(/\s+/g,"");return pe({equation:t})}});var av,sf,sv,uv,uf,lf=Y(()=>{"use strict";ce();he();ye();av=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),r=i.length<t.length?0:i.length-t.length,s=t.length<i.length?0:t.length-i.length;for(;r<i.length&&s<t.length;++r,++s)if(i[r]!==t[s]&&i[r]!==1&&t[s]!==1)throw new Error("Expand requires shape to be broadcastable to input")},sf=(e,t)=>{let i=e.length-t.length,r=[];for(let s=0;s<i;++s)r.push(e[s]);for(let s=0;s<t.length;++s)r.push(t[s]===1?e[s+i]:t[s]);return r},sv=(e,t)=>e.length>t.length?sf(e,t):sf(t,e),uv=e=>{let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),r=sv(t,i),s=e[0].dataType,d=s===9||W.size(t)===1,c=s===9||t.length>0&&t[t.length-1]%4===0?4:1,f=d||r.length>0&&r[r.length-1]%4===0?4:1,h=Math.ceil(W.size(r)/f),g=w=>{let v=L("input",s,t.length,c),C=K("output",s,r.length,f),x;if(s===9){let S=(k,A,I="")=>`
          let outputIndices${A} = ${C.offsetToIndices(`outputOffset + ${A}u`)};
          let offset${A} = ${v.broadcastedIndicesToOffset(`outputIndices${A}`,C)};
          let index${A} = offset${A} / 4u;
          let component${A} = offset${A} % 4u;
          ${k}[${A}] = ${I}(${v.getByOffset(`index${A}`)}[component${A}]);
        `;x=`
        let outputOffset = global_idx * ${f};
        var data = vec4<u32>(0);
        ${S("data",0,"u32")}
        ${S("data",1,"u32")}
        ${S("data",2,"u32")}
        ${S("data",3,"u32")}
        ${C.setByOffset("global_idx","data")}
      }`}else x=`
        let outputIndices = ${C.offsetToIndices(`global_idx * ${f}`)};
        let inputOffset = ${v.broadcastedIndicesToOffset("outputIndices",C)};
        let data = ${C.type.value}(${v.getByOffset(`inputOffset / ${c}`)});
        ${C.setByOffset("global_idx","data")}
      }`;return`
    ${w.registerUniform("vec_size","u32").declareVariables(v,C)}
    ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${x}`},b=[{type:12,data:h},...Q(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${c}${f}`,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:b})}},uf=e=>{av(e.inputs),e.compute(uv(e.inputs),{inputs:[0]})}});var lv,df,cf=Y(()=>{"use strict";ce();he();ye();dn();lv=e=>{let t=e[0].dataType,i=W.size(e[0].dims),r=W.size(e[1].dims),s=r%4===0,d=c=>{let f=L("x",t,[1],4),h=L("bias",t,[1],4),g=K("y",t,[1],4),b=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],w=C=>`
      let bias${C}_offset: u32 = (global_idx * 4 + ${C}) % uniforms.bias_size;
      let bias${C} = ${h.getByOffset(`bias${C}_offset / 4`)}[bias${C}_offset % 4];`,v=s?`
      let bias = ${h.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${w(0)}${w(1)}${w(2)}${w(3)}
      let bias = ${f.type.value}(bias0, bias1, bias2, bias3);`;return`${c.registerUniforms(b).declareVariables(f,h,g)}

    ${Ti(Ve(t))}

    ${c.mainStart(Ut)}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${f.getByOffset("global_idx")};
      ${v}
      let x_in = x + bias;
      ${g.setByOffset("global_idx",Ii("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${s}`,inputDependencies:["type","type"]},getShaderSource:d,getRunData:c=>({outputs:[{dims:c[0].dims,dataType:c[0].dataType}],programUniforms:[{type:12,data:Math.ceil(i/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(i/Ut/4)}})}},df=e=>{e.inputs.length<2||W.size(e.inputs[1].dims)===0?op(e):e.compute(lv(e.inputs))}});var dv,cv,pf,ff,mf=Y(()=>{"use strict";ce();he();Be();ye();dv=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},cv=(e,t)=>{let i=e[0].dims,r=e[1].dims,s=i.length,d=W.normalizeAxis(t.axis,s),c=i.slice(0);c.splice(d,1,...r);let f=i[d],h=e[0].dataType===9?4:1,g=Math.ceil(W.size(c)/h),b=[{type:12,data:g},{type:6,data:f},{type:12,data:d},...Q(e[0].dims,e[1].dims,c)],w=v=>{let C=L("data",e[0].dataType,e[0].dims.length,h),x=L("inputIndices",e[1].dataType,e[1].dims.length),S=K("output",e[0].dataType,c.length,h),k=I=>{let P=r.length,B=`var indicesIndices${I}  = ${x.type.indices}(0);`;for(let V=0;V<P;V++)B+=`${P>1?`indicesIndices${I}[${V}]`:`indicesIndices${I}`} = ${c.length>1?`outputIndices${I}[uniforms.axis + ${V}]`:`outputIndices${I}`};`;B+=`
          var idx${I} = ${x.getByIndices(`indicesIndices${I}`)};
          if (idx${I} < 0) {
            idx${I} = idx${I} + uniforms.axisDimLimit;
          }
          var dataIndices${I} : ${C.type.indices};
        `;for(let V=0,j=0;V<s;V++)V===d?(B+=`${s>1?`dataIndices${I}[${V}]`:`dataIndices${I}`} = u32(idx${I});`,j+=P):(B+=`${s>1?`dataIndices${I}[${V}]`:`dataIndices${I}`} = ${c.length>1?`outputIndices${I}[${j}]`:`outputIndices${I}`};`,j++);return B},A;if(e[0].dataType===9){let I=(P,B,V="")=>`
          let outputIndices${B} = ${S.offsetToIndices(`outputOffset + ${B}u`)};
          ${k(B)};
          let offset${B} = ${C.indicesToOffset(`dataIndices${B}`)};
          let index${B} = offset${B} / 4u;
          let component${B} = offset${B} % 4u;
          ${P}[${B}] = ${V}(${C.getByOffset(`index${B}`)}[component${B}]);
        `;A=`
        let outputOffset = global_idx * ${h};
        var value = vec4<u32>(0);
        ${I("value",0,"u32")}
        ${I("value",1,"u32")}
        ${I("value",2,"u32")}
        ${I("value",3,"u32")}
        ${S.setByOffset("global_idx","value")}
      `}else A=`
      let outputIndices = ${S.offsetToIndices("global_idx")};
      ${k("")};
      let value = ${C.getByIndices("dataIndices")};
      ${S.setByOffset("global_idx","value")};
      `;return`
      ${v.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(C,x,S)}
      ${v.mainStart()}
        ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${A}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:b}),getShaderSource:w}},pf=e=>pe({axis:e.axis}),ff=(e,t)=>{let i=e.inputs;dv(i),e.compute(cv(e.inputs,t))}});var pv,hf,gf,yf=Y(()=>{"use strict";ce();he();ye();pv=(e,t,i,r,s,d,c,f,h)=>{let g=[{type:12,data:d},{type:12,data:r},{type:12,data:s},{type:12,data:i},{type:12,data:c},{type:12,data:f},{type:12,data:h}],b=[d];g.push(...Q(t.dims,b));let w=v=>{let C=L("indices_data",t.dataType,t.dims.length),x=K("input_slice_offsets_data",12,1,1),S=[C,x],k=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:s.length},{name:"sizes_from_slice_dims_data",type:"u32",length:i.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${v.registerUniforms(k).declareVariables(...S)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${s.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${i.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${s.length}_${i.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:b,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:g}),getShaderSource:w},{inputs:[t],outputs:[-1]})[0]},hf=(e,t)=>{let i=e.inputs,r=i[0].dims,s=i[0].dataType,d=i[1].dims,c=d[d.length-1],f=W.sizeToDimension(d,d.length-1),h=W.sizeFromDimension(r,t.batchDims+c),g=W.sizeToDimension(r,t.batchDims),b=W.sizeFromDimension(r,t.batchDims),w=f/g,v=new Array(c),C=h;for(let B=0;B<c;++B)v[c-1-B]=C,C*=r[t.batchDims+c-1-B];let x=pv(e,i[1],v,t.batchDims,r,f,w,b,c),S=t.batchDims+c;if(S>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let k=d.slice(0,-1).concat(r.slice(S)),A=W.size(k),I=[{type:12,data:A},{type:12,data:h},...Q(i[0].dims,x.dims,k)],P=B=>{let V=L("data",i[0].dataType,i[0].dims.length),j=L("slice_offsets",12,x.dims.length),H=K("output",i[0].dataType,k.length);return`
          ${B.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(V,j,H)}
            ${B.mainStart()}
            ${B.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:k,dataType:s}],dispatchGroup:{x:Math.ceil(A/64)},programUniforms:I}),getShaderSource:P},{inputs:[i[0],x]})},gf=e=>({batchDims:e.batch_dims,cacheKey:""})});var fv,mv,bf,_f,wf=Y(()=>{"use strict";ce();he();Be();ye();fv=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let i=W.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,s=e[0],d=e[2],c=e.length===4?e[3]:void 0;if(d.dims.length!==s.dims.length||!s.dims.map((f,h)=>h===i?Math.ceil(f/r)===d.dims[h]:f===d.dims[h]).reduce((f,h)=>f&&h,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(c){if(c.dataType!==s.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(c.dims.length!==d.dims.length||!c.dims.map((f,h)=>f===d.dims[h]).reduce((f,h)=>f&&h,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},mv=(e,t)=>{let i=e[0].dims,r=e[1].dims,s=i.length,d=W.normalizeAxis(t.gatherAxis,s),c=W.normalizeAxis(t.quantizeAxis,s),f=i.slice(0);f.splice(d,1,...r);let h=W.size(f),g=e[2].dataType,w=e[0].dataType===22,v=[{type:12,data:h},{type:12,data:c},{type:12,data:d},{type:12,data:t.blockSize},...Q(...e.map((x,S)=>x.dims),f)],C=x=>{let S=L("data",e[0].dataType,e[0].dims.length),k=L("inputIndices",e[1].dataType,e[1].dims.length),A=L("scales",e[2].dataType,e[2].dims.length),I=e.length>3?L("zeroPoint",e[3].dataType,e[3].dims.length):void 0,P=K("output",g,f.length),B=[S,k,A];I&&B.push(I);let V=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${x.registerUniforms(V).declareVariables(...B,P)}
        ${x.mainStart()}
        let output_indices = ${P.offsetToIndices("global_idx")};
        var indices_indices = ${k.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${P.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${k.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${P.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${S.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${P.indicesGet("output_indices","i")};
          ${S.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${k.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${i[d]};
        }
        ${S.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${f.length}; i++) {
          let index = ${P.indicesGet("output_indices",`i + ${r.length} - 1`)};
          ${S.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${S.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${S.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${w?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${A.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${A.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${A.getByIndices("scale_indices")};
        ${I?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${I.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${I.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${w?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Ve(g)}(quantized_data - zero_point) * scale;
        ${P.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((x,S)=>S!==1).map(x=>x.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(x,S)=>"rank")},getRunData:()=>({outputs:[{dims:f,dataType:g}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:v}),getShaderSource:C}},bf=(e,t)=>{let i=e.inputs;fv(i,t),e.compute(mv(e.inputs,t))},_f=e=>pe({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})});var hv,gv,vf,$f,xf=Y(()=>{"use strict";ce();he();Be();ye();hv=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},gv=(e,t)=>{let i=e[0].dims,r=e[0].dataType,s=i.length,d=e[1].dims,c=e[1].dataType,f=W.normalizeAxis(t.axis,s),h=i[f],g=d.slice(0),b=W.size(g),w=L("input",r,s),v=L("indicesInput",c,d.length),C=K("output",r,g.length),x=[{type:12,data:b},{type:6,data:h},{type:12,data:f}];return x.push(...Q(i,d,g)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:g,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:x}),getShaderSource:A=>`
      ${A.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(w,v,C)}
      ${A.mainStart()}
      ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${C.offsetToIndices("global_idx")};

      var idx = ${v.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${w.type.indices}(outputIndices);
      ${w.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${w.getByIndices("inputIndices")};

      ${C.setByOffset("global_idx","value")};
  }`}},vf=e=>pe({axis:e.axis}),$f=(e,t)=>{let i=e.inputs;hv(i),e.compute(gv(e.inputs,t))}});var yv,bv,Cf,Sf,Tf=Y(()=>{"use strict";ce();he();ye();yv=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},bv=(e,t)=>{let i=e[0].dims.slice(),r=e[1].dims.slice(),[s,d,c]=Qr.getShapeOfGemmResult(i,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),f=[s,d];if(!f)throw new Error("Can't use gemm on the given tensors");let h=16,g=Math.ceil(d/h),b=Math.ceil(s/h),w=!0,v=W.size(f),C=[{type:12,data:w?g:v},{type:12,data:s},{type:12,data:d},{type:12,data:c},{type:1,data:t.alpha},{type:1,data:t.beta}],x=["type","type"];e.length===3&&(C.push(...Q(e[2].dims)),x.push("rank")),C.push(...Q(f));let S=A=>{let I="";t.transA&&t.transB?I="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?I="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?I="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(I="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let P=t.alpha===1?"":"value *= uniforms.alpha;",B=L("a",e[0].dataType,e[0].dims),V=L("b",e[1].dataType,e[1].dims),j=B.type.value,H=null,F=[B,V];e.length===3&&(H=L("c",e[2].dataType,e[2].dims.length),F.push(H));let Z=K("output",e[0].dataType,f.length);F.push(Z);let te=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${A.registerUniforms(te).declareVariables(...F)}

  ${A.mainStart()}
    ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${j}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${I}
    }

    ${P}
    ${H!=null?`let cOffset = ${H.broadcastedIndicesToOffset("vec2(m, n)",Z)}; value += ${j}(uniforms.beta) * ${H.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},k=A=>{let I=L("a",e[0].dataType,e[0].dims),P=L("b",e[1].dataType,e[1].dims),B=null,V=[I,P];e.length===3&&(B=L("c",e[2].dataType,e[2].dims.length),V.push(B));let j=K("output",e[0].dataType,f.length);V.push(j);let H=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],F="",Z="";t.transA&&t.transB?(Z=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${I.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${P.type.value}(0);
      }
      `,F="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(Z=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${I.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${P.type.value}(0);
      }
      `,F="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(Z=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${I.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${P.type.value}(0);
      }
      `,F="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(Z=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${I.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${P.type.value}(0);
      }
      `,F="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let te=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${A.registerUniforms(H).declareVariables(...V)}
  var<workgroup> tile_a: array<array<${I.type.storage}, ${h}>, ${h}>;
  var<workgroup> tile_b: array<array<${P.type.storage}, ${h}>, ${h}>;
  ${A.mainStart([h,h,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${h};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${h};
    let num_tiles = (uniforms.K - 1) / ${h} + 1;
    var k_start = 0u;
    var value = ${j.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${Z}
      k_start = k_start + ${h};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${h}; k++) {
        ${F}
      }
      workgroupBarrier();
    }

    ${te}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${B!=null?`let cOffset = ${B.broadcastedIndicesToOffset("vec2(m, n)",j)}; value += ${j.type.value}(uniforms.beta) * ${B.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return w?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:f,dataType:e[0].dataType}],dispatchGroup:{x:g*b},programUniforms:C}),getShaderSource:k}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:f,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:C}),getShaderSource:S}},Cf=e=>{let t=e.transA,i=e.transB,r=e.alpha,s=e.beta;return{transA:t,transB:i,alpha:r,beta:s,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Sf=(e,t)=>{yv(e.inputs),e.compute(bv(e.inputs,t))}});var vt,Pt,Zt,Qt,_v,wv,vv,$v,xv,Cv,Sv,Tv,If,Af,Ef=Y(()=>{"use strict";ce();he();Be();ye();[vt,Pt,Zt,Qt]=[0,1,2,3],_v=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},wv=`
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
`,vv=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,$v=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,xv=e=>`
  ${e.paddingMode==="reflection"?`
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
`,Cv=(e,t,i)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${vt}] = batch;
     indices[${Pt}] = channel;`+(()=>{switch(i.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Zt}] = u32(r);
            indices[${Qt}] = u32(c);
          }
        `;case"border":return`
          indices[${Zt}] = u32(clamp(r, 0, H - 1));
          indices[${Qt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Zt}] = gs_reflect(r, border[1], border[3]);
          indices[${Qt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${i.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Sv=(e,t,i)=>(()=>{switch(i.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${vt}], indices[${Pt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${vt}], indices[${Pt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${vt}], indices[${Pt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${vt}], indices[${Pt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${vt}], indices[${Pt}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${vt}], indices[${Pt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${i.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Tv=(e,t)=>{let i=L("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],s=L("grid",e[1].dataType,r.length,2),d=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(d=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[vt,Pt,Zt,Qt]=[0,3,1,2]);let c=K("output",e[0].dataType,d.length),f=i.type.value,h=W.size(d),g=[{type:12,data:h},...Q(e[0].dims,r,d)],b=w=>`
  ${w.registerUniform("output_size","u32").declareVariables(i,s,c)}
  ${wv}
  ${vv(f)}
  ${$v(t)}
  ${xv(t)}
  ${Cv(i,f,t)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Zt}]);
      let W_in = i32(uniforms.x_shape[${Qt}]);

      ${t.alignCorners===0?`
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

      let indices = ${c.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${vt}], indices[${Zt}], indices[${Qt}]);
      let nxy = ${s.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Sv(c,f,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:w=>{let v=W.size(d);return{outputs:[{dims:d,dataType:w[0].dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:g}},getShaderSource:b}},If=(e,t)=>{_v(e.inputs),e.compute(Tv(e.inputs,t))},Af=e=>pe({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})});var Fe,Ev,Pf,kf,kv,mr,zf,Ri=Y(()=>{"use strict";ce();he();Be();rn();un();ye();wt();Fe=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Ev=(e,t)=>{let i=e[0],r=Fe(e,1),s=Fe(e,2),d=Fe(e,3),c=Fe(e,4),f=Fe(e,5),h=Fe(e,6),g=Fe(e,7);if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let b=i.dims[0],w=i.dims[1],v=i.dims.length===3?i.dims[2]:t.numHeads*i.dims[4],C=w,x=0,S=0,k=Math.floor(v/t.numHeads);if(h&&g&&W.size(h.dims)&&W.size(g.dims)){if(h.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(h.dims[0]!==b||h.dims[1]!==t.numHeads||h.dims[3]!==k)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(g.dims[0]!==b||g.dims[1]!==t.numHeads||g.dims[3]!==k)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(h.dims[2]!==g.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(g.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');x=h.dims[2],S=h.dims[2]}else if(h&&W.size(h.dims)||g&&W.size(g.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let A;if(r&&W.size(r.dims)>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==i.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');A=2,C=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==k)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw new Error('Expect "value" be none when "key" has packed kv format.');A=5,C=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==k)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');A=0,C=r.dims[2]}}else{if(i.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(i.dims[2]!==t.numHeads||i.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');A=3}if(d&&W.size(d.dims)>0){if(d.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let I=x+C,P=0;if(c&&W.size(c.dims)>0){P=8;let H=c.dims;throw H.length===1?H[0]===b?P=1:H[0]===3*b+2&&(P=3):H.length===2&&H[0]===b&&H[1]===I&&(P=5),P===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let B=!1,V=v;if(s&&W.size(s.dims)>0){if(s.dims.length!==3&&s.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==s.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(s.dims.length===3){if(C!==s.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');V=s.dims[2]}else{if(C!==s.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');V=s.dims[1]*s.dims[3],B=!0}}let j=!1;if(c&&W.size(c.dims)>0)throw new Error("Key padding mask is not supported");if(f&&W.size(f.dims)>0){if(f.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(f.dims[0]!==b||f.dims[1]!==t.numHeads||f.dims[2]!==w||f.dims[3]!==I)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:b,sequenceLength:w,pastSequenceLength:x,kvSequenceLength:C,totalSequenceLength:I,maxSequenceLength:S,inputHiddenSize:0,hiddenSize:v,vHiddenSize:V,headSize:k,vHeadSize:Math.floor(V/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:P,scale:t.scale,broadcastResPosBias:j,passPastInKv:B,qkvFormat:A}},Pf=e=>pe({...e}),kf=pe({perm:[0,2,1,3]}),kv=(e,t,i,r,s,d,c)=>{let f=[r,s,d],h=W.size(f),g=[{type:12,data:h},{type:12,data:c},{type:12,data:d}],b=w=>{let v=K("qkv_with_bias",t.dataType,f),C=L("qkv",t.dataType,f),x=L("bias",i.dataType,f),S=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${w.registerUniforms(S).declareVariables(C,x,v)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:f,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:b},{inputs:[t,i],outputs:[-1]})[0]},mr=(e,t,i,r,s,d,c,f)=>{let h=d;if(c&&W.size(c.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return h=kv(e,d,c,t,r,i*s,f),h=h.reshape([t,r,i,s]),i===1||r===1?h:e.compute(We(h,kf.perm),{inputs:[h],outputs:[-1]})[0]}else return d.dims.length===3&&(h=d.reshape([t,r,i,s])),i===1||r===1?h:e.compute(We(h,kf.perm),{inputs:[h],outputs:[-1]})[0]},zf=(e,t)=>{let i=Ev(e.inputs,t),r=e.inputs[0],s=Fe(e.inputs,1),d=Fe(e.inputs,2),c=Fe(e.inputs,3),f=Fe(e.inputs,4),h=Fe(e.inputs,5),g=Fe(e.inputs,6),b=Fe(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if(s?.dims.length===5)throw new Error("Packed KV is not implemented");let w=s&&d&&s.dims.length===4&&d.dims.length===4,v=mr(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,r,c,0);if(w)return Yt(e,v,s,d,f,void 0,g,b,h,i);if(!s||!d)throw new Error("key and value must be provided");let C=mr(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.headSize,s,c,i.hiddenSize),x=mr(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.vHeadSize,d,c,2*i.hiddenSize);Yt(e,v,C,x,f,void 0,g,b,h,i)}});var Pv,zv,Ov,Bv,Ui,Of,Bf,ji=Y(()=>{"use strict";ce();he();Be();ye();Pv=e=>{if(!e||e.length<1)throw new Error("too few inputs")},zv=(e,t)=>{let i=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(s=>i.push(Number(s))),r=i.length),pe({numOutputs:r,axis:t.axis,splitSizes:i})},Ov=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ne("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Bv=e=>{let t=e.length,i=[];for(let r=0;r<t;++r){let s=e[r].setByIndices("indices","input[global_idx]");t===1?i.push(s):r===0?i.push(`if (output_number == ${r}u) { ${s} }`):r===t-1?i.push(`else { ${s} }`):i.push(`else if (output_number == ${r}) { ${s} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${i.join(`
`)}
      }`},Ui=(e,t)=>{let i=e[0].dims,r=W.size(i),s=e[0].dataType,d=W.normalizeAxis(t.axis,i.length),c=new Array(t.numOutputs),f=L("input",s,i.length),h=new Array(t.numOutputs),g=[],b=[],w=0,v=[{type:12,data:r}];for(let x=0;x<t.numOutputs;x++){w+=t.splitSizes[x],h[x]=w;let S=i.slice();S[d]=t.splitSizes[x],b.push(S),c[x]=K(`output${x}`,s,S.length),g.push({dims:b[x],dataType:e[0].dataType})}v.push({type:12,data:h},...Q(i,...b));let C=x=>`
  ${x.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",h.length).declareVariables(f,...c)}
  ${Ov(h.length)}
  ${Bv(c)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${f.offsetToIndices("global_idx")};
    var index = ${f.indicesGet("indices",d)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ne("uniforms.size_in_split_axis","output_number - 1u",h.length)};
      ${f.indicesSet("indices",d,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:C,getRunData:()=>({outputs:g,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:v})}},Of=(e,t)=>{Pv(e.inputs);let i=e.inputs.length===1?t:zv(e.inputs,t);e.compute(Ui(e.inputs,i),{inputs:[0]})},Bf=e=>{let t=e.axis,i=e.splitSizes,r=e.numOutputs<0?i.length:e.numOutputs;if(r!==i.length)throw new Error("numOutputs and splitSizes lengh must be equal");return pe({axis:t,numOutputs:r,splitSizes:i})}});var Dv,Mv,Df,Mf,Rf=Y(()=>{"use strict";Be();un();Ri();ji();wt();Dv=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let i=e[0],r=e[1],s=e[2],d=e[3],c=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let f=!1,h=i.dims[0],g=i.dims[1],b=i.dims.length===3?f?i.dims[2]/3:i.dims[2]:t.numHeads*i.dims[4],w=g,v=0,C=!r||r.dims.length===0,x=Math.floor(C?b/(t.numHeads+2*t.kvNumHeads):b/t.numHeads);C&&(b=x*t.numHeads);let S=d&&d.dims.length!==0,k=c&&c.dims.length!==0;if(S&&d.dims.length===4&&d.dims[0]===h&&d.dims[1]!==t.kvNumHeads&&d.dims[2]===t.kvNumHeads&&d.dims[3]===x)throw new Error("BSNH pastKey/pastValue is not supported");if(S&&k){if(d.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(c.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');v=d.dims[2]}else if(S||k)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let I=1;if(r&&r.dims.length>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(i.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');w=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==x)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw new Error('Expect "value" be none when "key" has packed kv format.');w=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==x)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');w=r.dims[2]}}else{if(i.dims.length!==3&&i.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(i.dims.length===5&&(i.dims[2]!==t.numHeads||i.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');I=3}let P=0,B=!1,V=t.kvNumHeads?x*t.kvNumHeads:b;if(s&&s.dims.length>0){if(s.dims.length!==3&&s.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==s.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(s.dims.length===3){if(w!==s.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');V=s.dims[2]}else{if(w!==s.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');V=s.dims[1]*s.dims[3],B=!0}}let j=e.length>4?e[5]:void 0;if(j&&j.dims.length!==1&&j.dims[0]!==h)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:h,sequenceLength:g,pastSequenceLength:v,kvSequenceLength:w,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:b,vHiddenSize:V,headSize:x,vHeadSize:Math.floor(V/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:P,scale:t.scale,broadcastResPosBias:!1,passPastInKv:B,qkvFormat:I}},Mv=pe({perm:[0,2,1,3]}),Df=(e,t,i)=>{let r=t,s=i.kvNumHeads;return t.dims.length===3&&i.kvSequenceLength!==0&&(r=t.reshape([i.batchSize,i.kvSequenceLength,s,i.headSize]),r=e.compute(We(r,Mv.perm),{inputs:[r],outputs:[-1]})[0]),r},Mf=(e,t)=>{let i=Dv(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],s=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,d=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,c=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,f=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,h=e.inputs.length>4?e.inputs[5]:void 0,g=e.inputs.length>5?e.inputs[6]:void 0,b=i.kvNumHeads?i.kvNumHeads:i.numHeads,w=pe({axis:2,numOutputs:3,splitSizes:[i.numHeads*i.headSize,b*i.headSize,b*i.headSize]}),[v,C,x]=!s&&!d?e.compute(Ui([r],w),{inputs:[r],outputs:[-1,-1,-1]}):[r,s,d],S=mr(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,v,void 0,0);Yt(e,S,Df(e,C,i),Df(e,x,i),void 0,void 0,c,f,void 0,i,h,g)}});var Uf,Rv,Uv,jf,Nf=Y(()=>{"use strict";ce();he();wt();ye();Uf=(e,t,i,r,s,d,c,f)=>{let h=$e(d),g=h===1?"f32":`vec${h}f`,b=h===1?"vec2f":`mat2x${h}f`,w=s*c,v=64;w===1&&(v=256);let C=[s,c,d/h],x=[s,c,2],S=["rank","type","type"],k=[];k.push(...Q(C,x));let A=I=>{let P=L("x",t.dataType,3,h),B=L("scale",i.dataType,i.dims),V=L("bias",r.dataType,r.dims),j=K("output",1,3,2),H=[P,B,V,j];return`
  var<workgroup> workgroup_shared : array<${b}, ${v}>;
  const workgroup_size = ${v}u;
  ${I.declareVariables(...H)}
  ${I.mainStart(v)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${g}(0);
    var squared_sum = ${g}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${g}(${P.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${b}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${nt("workgroup_shared[0][0]",h)} / f32(hight * ${h});
      let squared_sum_final = ${nt("workgroup_shared[0][1]",h)} / f32(hight * ${h});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${f}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${h};${f};${v}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:x,dataType:1}],dispatchGroup:{x:w},programUniforms:k}),getShaderSource:A},{inputs:[t,i,r],outputs:[-1]})[0]},Rv=(e,t,i)=>{let r=t[0].dims,s=r,d=2,c=r[0],f=r[1],h=W.sizeFromDimension(r,d),g=$e(h),b=W.size(s)/g,w=Uf(e,t[0],t[1],t[2],c,h,f,i.epsilon),v=[c,f,h/g],C=[c,f],x=["type","none"],S=k=>{let A=L("x",t[0].dataType,v.length,g),I=L("scale_shift",1,C.length,2),P=K("output",t[0].dataType,v.length,g),B=[A,I,P];return`
  ${k.registerUniform("output_size","u32").declareVariables(...B)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${P.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${I.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${A.getByOffset("global_idx")} * ${P.type.value}(scale_shift.x) + ${P.type.value}(scale_shift.y);
      ${P.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${g}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...Q(v,C,v)]}),getShaderSource:S},{inputs:[t[0],w]})},Uv=(e,t,i)=>{let r=t[0].dims,s=r,d=r[0],c=r[r.length-1],f=W.sizeFromDimension(r,1)/c,h=$e(c),g=W.size(s)/h,b=[{type:12,data:f},{type:12,data:Math.floor(c/h)}],w=["type","type"],v=!1,C=[0,r.length-1];for(let A=0;A<r.length-2;A++)v=v||r[A+1]!==1,C.push(A+1);v=v&&r[r.length-1]!==1;let x=v?e.compute(We(e.inputs[0],C),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(A,I)=>r[C[I]])),S=Uf(e,x,t[1],t[2],d,f,c,i.epsilon),k=A=>{let I=Ae(t[0].dataType),P=h===1?"vec2f":`mat${h}x2f`,B=H=>{let F=H===0?"x":"y",Z=h===1?"f32":`vec${h}f`;switch(h){case 1:return`${I}(${Z}(scale.${F}))`;case 2:return`vec2<${I}>(${Z}(scale[0].${F}, scale[1].${F}))`;case 4:return`vec4<${I}>(${Z}(scale[0].${F}, scale[1].${F}, scale[2].${F}, scale[3].${F}))`;default:throw new Error(`Not supported compoents ${h}`)}},V=L("input",t[0].dataType,t[0].dims,h),j=K("output",t[0].dataType,s,h);return`
  @group(0) @binding(0) var<storage, read> input : array<${V.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${P}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${j.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${A.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${B(0)}, ${B(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${h}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:b}),getShaderSource:k},{inputs:[t[0],S]})},jf=(e,t)=>{t.format==="NHWC"?Uv(e,e.inputs,t):Rv(e,e.inputs,t)}});var jv,Nv,Vf,Wf=Y(()=>{"use strict";ce();he();ye();jv=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Nv=(e,t,i)=>{let r=t.simplified,s=e[0].dims,d=e[1],c=!r&&e[2],f=s,h=W.normalizeAxis(t.axis,s.length),g=W.sizeToDimension(s,h),b=W.sizeFromDimension(s,h),w=W.size(d.dims),v=c?W.size(c.dims):0;if(w!==b||c&&v!==b)throw new Error(`Size of X.shape()[axis:] == ${b}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${w} and bias size of ${v}`);let C=[];for(let V=0;V<s.length;++V)V<h?C.push(s[V]):C.push(1);let x=$e(b),S=["type","type"],k=[{type:12,data:g},{type:1,data:b},{type:12,data:Math.floor(b/x)},{type:1,data:t.epsilon}];c&&S.push("type");let A=i>1,I=i>2,P=V=>{let j=Ae(e[0].dataType),H=[L("x",e[0].dataType,e[0].dims,x),L("scale",d.dataType,d.dims,x)];c&&H.push(L("bias",c.dataType,c.dims,x)),H.push(K("output",e[0].dataType,f,x)),A&&H.push(K("mean_data_output",1,C)),I&&H.push(K("inv_std_output",1,C));let F=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${V.registerUniforms(F).declareVariables(...H)}
  ${V.mainStart()}
    ${V.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${$i("f32",x)};
    var mean_square_vector = ${$i("f32",x)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${jt(j,x,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${nt("mean_vector",x)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${nt("mean_square_vector",x)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${jt(j,x,"x[j + offset]")};
      let f32scale = ${jt(j,x,"scale[j]")};
      output[j + offset] = ${H[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${c?`+ ${jt(j,x,"bias[j]")}`:""}
      );
    }

    ${A?"mean_data_output[global_idx] = mean":""};
    ${I?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},B=[{dims:f,dataType:e[0].dataType}];return A&&B.push({dims:C,dataType:1}),I&&B.push({dims:C,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${x};${i};${r}`,inputDependencies:S},getRunData:()=>({outputs:B,dispatchGroup:{x:Math.ceil(g/64)},programUniforms:k}),getShaderSource:P}},Vf=(e,t)=>{jv(e.inputs),e.compute(Nv(e.inputs,t,e.outputCount))}});var Vv,Lf,Gf=Y(()=>{"use strict";he();mn();hn();Vv=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Lf=e=>{Vv(e.inputs);let t=ct.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let i=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(i<8&&r<8)e.compute(fn(e.inputs,{activation:""},t));else{let s=t[t.length-2],d=W.size(e.inputs[0].dims.slice(0,-2)),c=W.size(e.inputs[1].dims.slice(0,-2));if(d!==1&&s===1&&c===1){let f=e.inputs[0].reshape([1,d,r]),h=e.inputs[1].reshape([1,r,i]),g=[1,d,i],b=[f,h];e.compute(fr(b,{activation:""},t,g),{inputs:b})}else e.compute(fr(e.inputs,{activation:""},t))}}});var Wv,Lv,Gv,Hf,Ff,qf=Y(()=>{"use strict";ce();he();Be();ye();Wv=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let i=e[0],r=i.dims.length;if(i.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let s=Math.floor((t.k+t.blockSize-1)/t.blockSize),d=t.blockSize/8*t.bits,c=e[1];if(!W.areEqual(c.dims,[t.n,s,d]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let h=e[2].dims;if(W.size(h)!==t.n*s)throw new Error("scales input size error.");if(e.length===4){let b=e[3].dims,w=t.bits>4?t.n*s:t.n*Math.floor((s+1)/2);if(W.size(b)!==w)throw new Error("zeroPoints input size error.")}},Lv=(e,t)=>{let i=e[0].dims,r=i.length,s=i[r-2],d=t.k,c=t.n,f=i.slice(0,r-2),h=W.size(f),b=e[1].dims[2]/4,w=e[0].dataType,v=$e(t.k),C=$e(b),x=$e(c),S=f.concat([s,c]),k=s>1&&c/x%2===0?2:1,A=W.size(S)/x/k,I=64,P=[],B=[h,s,d/v],V=W.convertShape(e[1].dims).slice();V.splice(-1,1,b/C),P.push(...Q(B)),P.push(...Q(V)),P.push(...Q(e[2].dims)),e.length===4&&P.push(...Q(W.convertShape(e[3].dims)));let j=[h,s,c/x];P.push(...Q(j));let H=F=>{let Z=B.length,te=L("a",e[0].dataType,Z,v),ie=L("b",12,V.length,C),ue=L("scales",e[2].dataType,e[2].dims.length),ee=[te,ie,ue],se=e.length===4?L("zero_points",12,e[3].dims.length):void 0;se&&ee.push(se);let Pe=j.length,re=K("output",e[0].dataType,Pe,x),ae=Ae(e[0].dataType),fe=(()=>{switch(v){case 1:return`array<${ae}, 8>`;case 2:return`mat4x2<${ae}>`;case 4:return`mat2x4<${ae}>`;default:throw new Error(`${v}-component is not supported.`)}})(),le=()=>{let Ee=`
          // reuse a data
            var input_offset = ${te.indicesToOffset(`${te.type.indices}(batch, row, word_offset)`)};
            var a_data: ${fe};
            for (var j: u32 = 0; j < ${8/v}; j++) {
              a_data[j] = ${te.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let me=0;me<x*k;me++)Ee+=`
            b_value = ${C===1?`b${me}_data`:`b${me}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${fe}(${Array.from({length:4},(D,J)=>`${ae}(b_value_lower[${J}]), ${ae}(b_value_upper[${J}])`).join(", ")});
            b_dequantized_values = ${v===1?`${fe}(${Array.from({length:8},(D,J)=>`(b_quantized_values[${J}] - ${se?`zero_point${me}`:"zero_point"}) * scale${me}`).join(", ")});`:`(b_quantized_values - ${fe}(${Array(8).fill(`${se?`zero_point${me}`:"zero_point"}`).join(",")})) * scale${me};`};
            workgroup_shared[local_id.x * ${k} + ${Math.floor(me/x)}]${x>1?`[${me%x}]`:""} += ${Array.from({length:8/v},(D,J)=>`${v===1?`a_data[${J}] * b_dequantized_values[${J}]`:`dot(a_data[${J}], b_dequantized_values[${J}])`}`).join(" + ")};
          `;return Ee},_e=()=>{let Ee=`
            var col_index = col * ${x};
            ${se?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${ae}(8);`}
            `;for(let me=0;me<x*k;me++)Ee+=`
            let scale${me} = ${ue.getByOffset("col_index * nBlocksPerCol + block")};
            ${se?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${se.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${me} = ${ae}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return Ee},Te=()=>{let Ee=`col_index = col * ${x};`;for(let me=0;me<x*k;me++)Ee+=`
            let b${me}_data = ${ie.getByIndices(`${ie.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Ee+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${fe};
            var b_dequantized_values: ${fe};`,Ee};return`
        var<workgroup> workgroup_shared: array<${re.type.value}, ${k*I}>;
        ${F.declareVariables(...ee,re)}
        ${F.mainStart([I,1,1])}
          let output_indices = ${re.offsetToIndices(`(global_idx / ${I}) * ${k}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${I}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/v};
            ${_e()}
            for (var word: u32 = 0; word < ${b}; word += ${C}) {
              ${Te()}
              for (var i: u32 = 0; i < ${C}; i++) {
                ${le()}
                word_offset += ${8/v};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${k}) {
            var output_value: ${re.type.value} = ${re.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${I}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${k};
            }
            ${re.setByIndices(`${re.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${v};${C};${x};${k};${I}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:S,dataType:w}],dispatchGroup:{x:A},programUniforms:P}),getShaderSource:H}},Gv=(e,t)=>{let i=e[0].dims,r=i.length,s=i[r-2],d=t.k,c=t.n,f=i.slice(0,r-2),h=W.size(f),b=e[1].dims[2]/4,w=e[0].dataType,v=$e(t.k),C=$e(b),x=f.concat([s,c]),S=128,k=c%8===0?8:c%4===0?4:1,A=S/k,I=A*C*8,P=I/v,B=I/t.blockSize,V=W.size(x)/k,j=[],H=[h,s,d/v],F=W.convertShape(e[1].dims).slice();F.splice(-1,1,b/C),j.push(...Q(H)),j.push(...Q(F)),j.push(...Q(e[2].dims)),e.length===4&&j.push(...Q(W.convertShape(e[3].dims)));let Z=[h,s,c];j.push(...Q(Z));let te=ie=>{let ue=H.length,ee=L("a",e[0].dataType,ue,v),se=L("b",12,F.length,C),Pe=L("scales",e[2].dataType,e[2].dims.length),re=[ee,se,Pe],ae=e.length===4?L("zero_points",12,e[3].dims.length):void 0;ae&&re.push(ae);let fe=Z.length,le=K("output",e[0].dataType,fe),_e=Ae(e[0].dataType),Te=()=>{switch(v){case 1:return`
          let a_data0 = vec4<${_e}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${_e}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${_e}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${_e}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${v}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ee.type.value}, ${P}>;
        var<workgroup> inter_results: array<array<${le.type.value}, ${A}>, ${k}>;
        ${ie.declareVariables(...re,le)}
        ${ie.mainStart([A,k,1])}
          let output_indices = ${le.offsetToIndices(`workgroup_index * ${k}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${B} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${P};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${P}; a_offset += ${S})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ee.getByIndices(`${ee.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ee.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${B} + local_id.x;
            ${ae?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${ae.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${_e}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${_e}(8);`}
            let scale = ${Pe.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${se.getByIndices(`${se.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/v};
            for (var i: u32 = 0; i < ${C}; i++) {
              ${Te()}
              let b_value = ${C===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${_e}>(${Array.from({length:4},(Ee,me)=>`${_e}(b_value_lower[${me}]), ${_e}(b_value_upper[${me}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${_e}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Ee,me)=>`${`dot(a_data${me}, b_dequantized_values[${me}])`}`).join(" + ")};
              word_offset += ${8/v};
            }
            workgroupBarrier();
          }

          if (local_idx < ${k}) {
            var output_value: ${le.type.value} = ${le.type.value}(0);
            for (var b = 0u; b < ${A}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${le.setByIndices(`${le.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${v};${C};${A};${k}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:x,dataType:w}],dispatchGroup:{x:V},programUniforms:j}),getShaderSource:te}},Hf=(e,t)=>{Wv(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Gv(e.inputs,t)):e.compute(Lv(e.inputs,t))},Ff=e=>pe(e)});var Hv,Fv,qv,Kv,Yv,Zv,Qv,Xv,Kf,Yf=Y(()=>{"use strict";ce();he();ye();Hv=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Fv=(e,t,i)=>{let r="";for(let s=t-1;s>=0;--s)r+=`
            k = i32(${e.indicesGet("indices",s)}) - ${ne("uniforms.pads",s,i)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ne("uniforms.x_shape",s,t)})) {
              break;
            }
            offset += k * i32(${ne("uniforms.x_strides",s,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},qv=(e,t,i)=>{let r="";for(let s=t-1;s>=0;--s)r+=`
                k = i32(${e.indicesGet("indices",s)}) - ${ne("uniforms.pads",s,i)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ne("uniforms.x_shape",s,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ne("uniforms.x_shape",s,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ne("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Kv=(e,t,i)=>{let r="";for(let s=t-1;s>=0;--s)r+=`
                k = i32(${e.indicesGet("indices",s)}) - ${ne("uniforms.pads",s,i)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ne("uniforms.x_shape",s,t)})) {
                  k = i32(${ne("uniforms.x_shape",s,t)}) - 1;
                }
                offset += k * i32(${ne("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Yv=(e,t,i)=>{let r="";for(let s=t-1;s>=0;--s)r+=`
                k = i32(${e.indicesGet("indices",s)}) - ${ne("uniforms.pads",s,i)};
                if (k < 0)  {
                  k += i32(${ne("uniforms.x_shape",s,t)}]);
                }
                if (k >= i32(${ne("uniforms.x_shape",s,t)})) {
                  k -= i32(${ne("uniforms.x_shape",s,t)});
                }
                offset += k * i32(${ne("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Zv=(e,t,i)=>{switch(i.mode){case 0:return Fv(e,t,i.pads.length);case 1:return qv(e,t,i.pads.length);case 2:return Kv(e,t,i.pads.length);case 3:return Yv(e,t,i.pads.length);default:throw new Error("Invalid mode")}},Qv=(e,t)=>{let i=W.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,s=W.size(i),d=[{type:12,data:s},{type:6,data:t.pads}],c=e.length>=3&&e[2].data;t.mode===0&&d.push({type:c?e[2].dataType:1,data:t.value}),d.push(...Q(e[0].dims,i));let f=["rank"],h=g=>{let b=K("output",e[0].dataType,i.length),w=L("x",e[0].dataType,r.length),v=w.type.value,C=Zv(b,r.length,t),x=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&x.push({name:"constant_value",type:c?v:"f32"}),`
            ${g.registerUniforms(x).declareVariables(w,b)}
            ${g.mainStart()}
            ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${b.offsetToIndices("global_idx")};

            var value = ${v}(0);
            ${C}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${c}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(W.size(i)/64)},programUniforms:d}),getShaderSource:h}},Xv=(e,t)=>{if(e.length>1){let i=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,s=e[0].dims.length,d=new Int32Array(2*s).fill(0);if(e.length>=4){let f=e[3].getBigInt64Array();for(let h=0;h<f.length;h++)d[Number(f[h])]=Number(i[h]),d[Number(f[h])+s]=Number(i[h+f.length])}else i.forEach((f,h)=>d[Number(h)]=Number(f));let c=[];return d.forEach(f=>c.push(f)),{mode:t.mode,value:r,pads:c}}else return t},Kf=(e,t)=>{Hv(e.inputs);let i=Xv(e.inputs,t);e.compute(Qv(e.inputs,i),{inputs:[0]})}});var bn,Zf,Qf,Xf,Jf,Jv,e$,em,tm,rm,nm,im,om,am,sm,um,lm,dm,cm,pm=Y(()=>{"use strict";Je();ce();he();ye();bn=e=>{if(ke.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Zf=(e,t,i)=>{let r=t.format==="NHWC",s=e.dims.slice();r&&s.splice(1,0,s.pop());let d=Object.hasOwnProperty.call(t,"dilations"),c=t.kernelShape.slice(),f=t.strides.slice(),h=d?t.dilations.slice():[],g=t.pads.slice();Rt.adjustPoolAttributes(i,s,c,f,h,g);let b=Rt.computePoolOutputShape(i,s,f,h,c,g,t.autoPad),w=Object.assign({},t);d?Object.assign(w,{kernelShape:c,strides:f,pads:g,dilations:h,cacheKey:t.cacheKey}):Object.assign(w,{kernelShape:c,strides:f,pads:g,cacheKey:t.cacheKey});let v=b.slice();return v.push(v.splice(1,1)[0]),[w,r?v:b]},Qf=(e,t)=>{let i=t.format==="NHWC",r=W.size(e),s=W.size(t.kernelShape),d=[{type:12,data:r},{type:12,data:s}],c=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let f=t.kernelShape[t.kernelShape.length-1],h=t.strides[t.strides.length-1],g=t.pads[t.pads.length/2-1],b=t.pads[t.pads.length-1],w=!!(g+b);d.push({type:12,data:f},{type:12,data:h},{type:12,data:g},{type:12,data:b}),c.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let v=!1;if(t.kernelShape.length===2){let C=t.kernelShape[t.kernelShape.length-2],x=t.strides[t.strides.length-2],S=t.pads[t.pads.length/2-2],k=t.pads[t.pads.length-2];v=!!(S+k),d.push({type:12,data:C},{type:12,data:x},{type:12,data:S},{type:12,data:k}),c.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[d,c,!0,w,v]}else{if(i)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let f=W.computeStrides(t.kernelShape);d.push({type:12,data:f},{type:12,data:t.pads},{type:12,data:t.strides}),c.push({name:"kernelStrides",type:"u32",length:f.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let h=t.pads.reduce((g,b)=>g+b);return[d,c,!!h,!1,!1]}},Xf=(e,t,i,r,s,d,c,f,h,g,b,w)=>{let v=s.format==="NHWC",C=t.type.value,x=K("output",t.type.tensor,r);if(s.kernelShape.length<=2){let S="",k="",A="",I=i-(v?2:1);if(b?S=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${I}] < 0 || xIndices[${I}]
                      >= uniforms.x_shape[${I}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${d}
                }`:S=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${d}
                }`,s.kernelShape.length===2){let B=i-(v?3:2);w?k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${B}] = indices[${B}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${B}] < 0 || xIndices[${B}] >= uniforms.x_shape[${B}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:k=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${B}] = indices[${B}] * uniforms.sh - uniforms.phStart + j;
                `,A=`
              }
            `}return`
            ${e.registerUniforms(h).declareVariables(t,x)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${x.offsetToIndices("global_idx")};
              var xIndices = ${x.offsetToIndices("global_idx")};

              var value = ${C}(${f});
              var pad = 0;
              ${k}
              ${S}
              ${A}
              ${c}

              output[global_idx] = value;
            }`}else{if(v)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let S=s.kernelShape.length,k=s.pads.length,A="";return g?A=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${d}
              }`:A=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${d}
            `,`
            ${e.registerUniforms(h).declareVariables(t,x)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${x.offsetToIndices("global_idx")};
              var xIndices = ${x.offsetToIndices("global_idx")};

              var offsets: array<u32, ${S}>;

              var value = ${C}(${f});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${S-1}u; j++) {
                  offsets[j] = offset / ${ne("uniforms.kernelStrides","j",S)};
                  offset -= offsets[j] * ${ne("uniforms.kernelStrides","j",S)};
                }
                offsets[${S-1}] = offset;

                isPad = false;
                for (var j = ${i-S}u; j < ${i}u; j++) {
                  xIndices[j] = indices[j] * ${ne("uniforms.strides",`j - ${i-S}u`,S)}
                    + offsets[j - ${i-S}u] - ${ne("uniforms.pads","j - 2u",k)};
                  ${A}
              }
              ${c}

              output[global_idx] = value;
            }`}},Jf=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Jv=e=>`${Jf(e)};${e.countIncludePad}`,e$=e=>`${Jf(e)};${e.storageOrder};${e.dilations}`,em=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),tm=(e,t,i,r)=>{let[s,d]=Zf(t,r,i),c=L("x",t.dataType,t.dims.length),f=c.type.value,h="value += x_val;",g="";s.countIncludePad?g+=`value /= ${f}(uniforms.kernelSize);`:g+=`value /= ${f}(i32(uniforms.kernelSize) - pad);`;let[b,w,v,C,x]=Qf(d,s);b.push(...Q(t.dims,d));let S=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${v};${C};${x}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:d,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(W.size(d)/64)},programUniforms:b}),getShaderSource:k=>Xf(k,c,t.dims.length,d.length,s,h,g,0,w,v,C,x)}},rm=e=>{let t=e.count_include_pad!==0,i=em(e);if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...i,cacheKey:""};return{...r,cacheKey:Jv(r)}},nm=(e,t)=>{bn(e.inputs),e.compute(tm("AveragePool",e.inputs[0],!1,t))},im={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},om=e=>{let t=e.format;return{format:t,...im,cacheKey:t}},am=(e,t)=>{bn(e.inputs),e.compute(tm("GlobalAveragePool",e.inputs[0],!0,t))},sm=(e,t,i,r)=>{let[s,d]=Zf(t,r,i),c=`
      value = max(x_val, value);
    `,f="",h=L("x",t.dataType,t.dims.length),g=["rank"],[b,w,v,C,x]=Qf(d,s);return b.push(...Q(t.dims,d)),{name:e,shaderCache:{hint:`${r.cacheKey};${v};${C};${x}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:d,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(W.size(d)/64)},programUniforms:b}),getShaderSource:S=>Xf(S,h,t.dims.length,d.length,s,c,f,t.dataType===10?-65504:-1e5,w,v,C,x)}},um=(e,t)=>{bn(e.inputs),e.compute(sm("MaxPool",e.inputs[0],!1,t))},lm=e=>{let t=e.storage_order,i=e.dilations,r=em(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let s={storageOrder:t,dilations:i,...r,cacheKey:""};return{...s,cacheKey:e$(s)}},dm=e=>{let t=e.format;return{format:t,...im,cacheKey:t}},cm=(e,t)=>{bn(e.inputs),e.compute(sm("GlobalMaxPool",e.inputs[0],!0,t))}});var r$,n$,fm,mm,hm=Y(()=>{"use strict";ce();he();Be();ye();r$=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((i,r)=>i===e[2].dims[r]).reduce((i,r)=>i&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((s,d)=>d===t.axis||s===e[0].dims[d]).reduce((s,d)=>s&&d,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let i=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(i/r)||t.blockSize>Math.ceil(i/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},n$=(e,t)=>{let i=W.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,s=r===3,d=e[0].dims,c=e[1].dataType,f=W.size(d),h=r===3||r===2,g=h?[Math.ceil(W.size(e[0].dims)/4)]:e[0].dims,b=e[1].dims,w=e.length>2?e[2]:void 0,v=w?h?[Math.ceil(W.size(w.dims)/4)]:w.dims:void 0,C=b.length===0||b.length===1&&b[0]===1,x=C===!1&&b.length===1,S=$e(f),k=C&&(!h||S===4),A=k?S:1,I=k&&!h?S:1,P=L("input",h?12:r,g.length,I),B=L("scale",c,b.length),V=w?L("zero_point",h?12:r,v.length):void 0,j=K("output",c,d.length,A),H=[P,B];V&&H.push(V);let F=[g,b];w&&F.push(v);let Z=[{type:12,data:f/A},{type:12,data:i},{type:12,data:t.blockSize},...Q(...F,d)],te=ie=>{let ue=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${ie.registerUniforms(ue).declareVariables(...H,j)}
      ${ie.mainStart()}
          ${ie.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${j.offsetToIndices("global_idx")};

          // Set input x
          ${h?`
            let input = ${P.getByOffset("global_idx / 4")};
            let x_vec = ${s?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${A===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${P.getByOffset("global_idx")};`};

          // Set scale input
          ${C?`let scale_value= ${B.getByOffset("0")}`:x?`
            let scale_index = ${j.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${B.getByOffset("scale_index")};`:`
            var scale_indices: ${B.type.indices} = output_indices;
            let index = ${B.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${B.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${B.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${V?C?h?`
                let zero_point_input = ${V.getByOffset("0")};
                let zero_point_vec =  ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${V.getByOffset("0")}`:x?h?`
                let zero_point_index = ${j.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${V.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${j.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${V.getByOffset("zero_point_index")};`:h?`
                let zero_point_offset = ${B.indicesToOffset("scale_indices")};
                let zero_point_input = ${V.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${V.getByIndices("scale_indices")};`:`let zero_point_value = ${h?s?"i32":"u32":P.type.value}(0);`};
      // Compute and write output
      ${j.setByOffset("global_idx",`${j.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:V?["rank","rank","rank"]:["rank","rank"]},getShaderSource:te,getRunData:()=>({outputs:[{dims:d,dataType:c}],dispatchGroup:{x:Math.ceil(f/A/64),y:1,z:1},programUniforms:Z})}},fm=(e,t)=>{r$(e.inputs,t),e.compute(n$(e.inputs,t))},mm=e=>pe({axis:e.axis,blockSize:e.blockSize})});var i$,o$,gm,ym=Y(()=>{"use strict";Je();ce();ye();i$=(e,t,i)=>{let r=e===t,s=e<t&&i<0,d=e>t&&i>0;if(r||s||d)throw new Error("Range these inputs' contents are invalid.")},o$=(e,t,i,r)=>{let s=Math.abs(Math.ceil((t-e)/i)),d=[s],c=s,f=[{type:12,data:c},{type:r,data:e},{type:r,data:i},...Q(d)],h=g=>{let b=K("output",r,d.length),w=b.type.value,v=[{name:"outputSize",type:"u32"},{name:"start",type:w},{name:"delta",type:w}];return`
        ${g.registerUniforms(v).declareVariables(b)}
        ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${w}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:h,getRunData:()=>({outputs:[{dims:d,dataType:r}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:f})}},gm=e=>{let t=0,i=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],i=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],i=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),ke.webgpu.validateInputContent&&i$(t,i,r),e.compute(o$(t,i,r,e.inputs[0].dataType),{inputs:[]})}});var a$,s$,bm,_m,wm=Y(()=>{"use strict";ce();he();Be();ye();a$=(e,t,i,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let s=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,d=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${i};`;case"add":return r==="i32"||r==="u32"?`atomicAdd(&${t}, bitcast<${r}>(${i}));`:`
              ${s}bitcast<${r}>(oldValue) + (${i})${d}`;case"max":return r==="i32"||r==="u32"?`atomicMax(&${t}, bitcast<${r}>(${i}));`:`
                ${s}max(bitcast<f32>(oldValue), (${i}))${d}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${i}));`:`${s}min(bitcast<${r}>(oldValue), (${i}))${d}`;case"mul":return`${s}(bitcast<${r}>(oldValue) * (${i}))${d}`;default:throw new Error(`Reduction ${e} is not supported.`)}},s$=(e,t)=>{let i=e[0].dims,r=e[1].dims,s=i,d=1,c=Math.ceil(W.size(r)/d),f=r[r.length-1],h=W.sizeFromDimension(i,f),g=[{type:12,data:c},{type:12,data:f},{type:12,data:h},...Q(e[1].dims,e[2].dims,s)],b=w=>{let v=L("indices",e[1].dataType,e[1].dims.length),C=L("updates",e[2].dataType,e[2].dims.length,d),x=t.reduction!=="none"&&t.reduction!==""?Fd("output",e[0].dataType,s.length):K("output",e[0].dataType,s.length,d);return`
      ${w.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(v,C,x)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    let n = ${W.size(r)};
    for (var i = 0; i < n; i = i + 1) {
      for (var j = i + 1; j < n; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  if (${t.reduction==="none"} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    indices_start = 0u;
  }
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
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
    ${a$(t.reduction,"output[data_offset + i]","value",x.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:g}),getShaderSource:b}},bm=e=>pe({reduction:e.reduction}),_m=(e,t)=>{e.compute(s$(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}});var u$,l$,d$,vm,c$,p$,f$,m$,h$,g$,y$,b$,$m,_$,w$,v$,$$,x$,xm,Cm,Sm=Y(()=>{"use strict";ce();he();Be();ye();u$=(e,t)=>{if(e.every(i=>i>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},l$=(e,t,i)=>{t.every(s=>s>=0&&s<i||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(i).fill(1);return t.forEach((s,d)=>r[s]=e[d]),r},d$=(e,t,i,r,s,d)=>{let[c,f,h]=i>10?[1,2,3]:[-1,e.length>1?1:-1,-1],g=e[0].dims.length;if(c>0&&e.length>c&&e[c].dims.length>0)e[c].getFloat32Array().forEach(b=>d.push(b));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(f>0&&e.length>f&&e[f].dims.length===1&&e[f].dims[0]>0){if(e[f].getFloat32Array().forEach(b=>r.push(b)),r.length!==0&&r.length!==g&&i>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");u$(r,t),t.axes.length>0&&l$(r,t.axes,g).forEach((b,w)=>r[w]=b)}if(h>0&&e.length>h&&e[h].dims.length===1&&e[h].dims[0]>0&&(e[h].getBigInt64Array().forEach(b=>s.push(Number(b))),s.length!==0&&s.length!==g&&i>=18&&s.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(s.length!==0&&s.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof s<"u"&&r.length>0&&s.length>g)throw new Error("Resize requires only of scales or sizes to be specified")},vm=(e,t,i,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${i}));
  let fract = ${r}(big % (${i})) / ${r}(${i});
  return whole + fract;
`,c$=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${vm("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${vm("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",p$=(e,t,i)=>`fn getNearestPixelFromOriginal(xOriginal: ${i}, isDownSample: bool) -> ${i} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",f$=(e,t,i)=>{let r=new Array(i).fill(0).concat(new Array(i).fill(1)),s=e.length===0?r:e.slice();return t.length>0?(t.forEach((d,c)=>{r[d]=s[c],r[c+i]=s[t.length+c]}),r):s},m$=(e,t,i,r)=>{let s=[];if(i.length>0)if(r.length>0){if(e.forEach(d=>s.push(d)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((d,c)=>s[d]=i[c])}else i.forEach(d=>s.push(d));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");s=e.map((d,c)=>Math.round(d*t[c]))}return s},h$=(e,t,i)=>{let r=(()=>{switch(i.keepAspectRatioPolicy){case"not_larger":return i.axes.length>0?Math.min(...i.axes.map(d=>t[d]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return i.axes.length>0?Math.max(...i.axes.map(d=>t[d]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${i.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let s=e.slice();return i.axes.length>0?(i.axes.forEach(d=>t[d]=r),i.axes.forEach(d=>s[d]=Math.round(e[d]*t[d]))):(t.fill(r,0,t.length),s.forEach((d,c)=>s[c]=Math.round(d*t[c]))),s},g$=(e,t,i,r,s)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${i.length}> {
      var original_indices: array<${e.type.value}, ${i.length}>;
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ne("uniforms.scales","i",r)};
        var roi_low = ${ne("uniforms.roi","i",s)};
        var roi_hi = ${ne("uniforms.roi",`i + ${t.length}`,s)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ne("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${ne("uniforms.output_shape","i",i.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,y$=(e,t,i,r,s,d,c)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ne("uniforms.scales","i",s)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ne("uniforms.roi","i",d)};
          var roi_hi = ${ne("uniforms.roi",`i + ${i.length}`,d)};
          var input_shape_i = ${ne("uniforms.input_shape","i",i.length)};
          var output_shape_i = ${ne("uniforms.output_shape","i",r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${c} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,b$=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ne("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,$m=(e,t,i,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",i,"batch")};
`:"",_$=(e,t,i,r,s)=>{let[c,f,h,g]=i.length===2?[-1,0,1,-1]:[0,2,3,1],b=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${b} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",f,`max(0, min(row, ${i[f]} - 1))`)};
      ${e.indicesSet("input_indices",h,`max(0, min(col, ${i[h]} - 1))`)};
      ${$m(e,g,c,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${b} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${b} = originalIndices[${f}];
      var col:${b} = originalIndices[${h}];
      ${r?`if (row < 0 || row > (${i[f]} - 1) || col < 0 || col > (${i[h]} - 1)) {
        return ${s};
      }`:""};
      row = max(0, min(row, ${i[f]} - 1));
      col = max(0, min(col, ${i[h]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${i.length>2?`u32(originalIndices[${g}])`:"0"};
      var batch: u32 =  ${i.length>2?`u32(originalIndices[${c}])`:"0"};
      var x11: ${b} = getInputValue(batch, channel, row1, col1);
      var x12: ${b} = getInputValue(batch, channel, row1, col2);
      var x21: ${b} = getInputValue(batch, channel, row2, col1);
      var x22: ${b} = getInputValue(batch, channel, row2, col2);
      var dx1: ${b} = abs(row - ${b}(row1));
      var dx2: ${b} = abs(${b}(row2) - row);
      var dy1: ${b} = abs(col - ${b}(col1));
      var dy2: ${b} = abs(${b}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},w$=(e,t,i,r,s,d,c,f,h,g)=>{let b=i.length===2,w=!0,[v,C]=b?[0,1]:w?[2,3]:[1,2],x=e.type.value,S=k=>{let A=k===v?"row":"col";return`
      fn ${A}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${x} {
        var output_index = ${t.indicesGet("output_indices",k)};
        var originalIdx: ${x} = getOriginalCoordinateFromResizedCoordinate(output_index, ${s[k]},
        ${r[k]}, ${i[k]}, ${d[k]}, ${d[k]} + ${i.length});
        var fractOriginalIdx: ${x} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${f} && (originalIdx < 0 || originalIdx > (${i[k]} - 1))) {
          return ${h};
        }
        var data: array<${x}, 4> = array<${x}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${A}: ${x} = originalIdx + ${x}(i);
          if (${A} < 0 || ${A} >= ${i[k]}) {
            ${g?`coefs[i + 1] = 0.0;
                        continue;`:f?`return ${h};`:`${A} = max(0, min(${A}, ${i[k]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",k,`u32(${A})`)};
          data[i + 1] = ${k===v?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${S(v)};
    ${S(C)};
  fn getCubicInterpolationCoefs(s: ${x}) -> array<${x}, 4> {
    var absS = abs(s);
    var coeffs: array<${x}, 4> = array<${x}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${x} = 1.0 - absS;
    var twoMinusAbsS: ${x} = 2.0 - absS;
    var onePlusAbsS: ${x} = 1.0 + absS;
    coeffs[0] = ((${c} * onePlusAbsS - 5 * ${c}) * onePlusAbsS + 8 * ${c}) * onePlusAbsS - 4 * ${c};
    coeffs[1] = ((${c} + 2) * absS - (${c} + 3)) * absS * absS + 1;
    coeffs[2] = ((${c} + 2) * oneMinusAbsS - (${c} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${c} * twoMinusAbsS - 5 * ${c}) * twoMinusAbsS + 8 * ${c}) * twoMinusAbsS - 4 * ${c};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${x}, 4>, coefs: array<${x}, 4>) -> ${x} {
    var coefsSum: ${x} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${x} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},v$=(e,t,i,r,s)=>{let[c,f,h,g,b]=i.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],w=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${w} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",f,`max(0, min(depth, ${i[f]} - 1))`)};
      ${e.indicesSet("input_indices",h,`max(0, min(height, ${i[h]} - 1))`)};
      ${e.indicesSet("input_indices",g,`max(0, min(width, ${i[g]} - 1))`)};
      ${$m(e,b,c,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${w} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${w} = originalIndices[${f}];
      var height:${w} = originalIndices[${h}];
      var width:${w} = originalIndices[${g}];
      ${r?`if (depth < 0 || depth > (${i[f]} - 1) || height < 0 || height > (${i[h]} - 1) || width < 0 || (width > ${i[g]} - 1)) {
      return ${s};
        }`:""};

    depth = max(0, min(depth, ${i[f]} - 1));
      height = max(0, min(height, ${i[h]} - 1));
      width = max(0, min(width, ${i[g]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${i.length>3?`u32(originalIndices[${b}])`:"0"};
      var batch: u32 =  ${i.length>3?`u32(originalIndices[${c}])`:"0"};

      var x111: ${w} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${w} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${w} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${w} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${w} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${w} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${w} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${w} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${w} = abs(depth - ${w}(depth1));
      var dx2: ${w} = abs(${w}(depth2) - depth);
      var dy1: ${w} = abs(height - ${w}(height1));
      var dy2: ${w} = abs(${w}(height2) - height);
      var dz1: ${w} = abs(width - ${w}(width1));
      var dz2: ${w} = abs(${w}(width2) - width);
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
    }`},$$=(e,t,i,r,s,d)=>{let c=e.dims,f=f$(d,t.axes,c.length),h=m$(c,r,s,t.axes),g=r.slice();r.length===0&&(g=c.map((I,P)=>I===0?1:h[P]/I),t.keepAspectRatioPolicy!=="stretch"&&(h=h$(c,g,t)));let b=K("output",e.dataType,h.length),w=L("input",e.dataType,c.length),v=W.size(h),C=c.length===h.length&&c.every((I,P)=>I===h[P]),x=t.coordinateTransformMode==="tf_crop_and_resize",S=t.extrapolationValue,k=w.type.value,A=I=>`
      ${C?"":`
      ${c$(t.coordinateTransformMode,k)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${b$(w,c)};
              ${p$(t.nearestMode,i,k)};
              ${y$(w,b,c,h,g.length,f.length,x)};
              `;case"linear":return`
              ${g$(b,c,h,g.length,f.length)};
              ${(()=>{if(c.length===2||c.length===4)return`${_$(w,b,c,x,S)}`;if(c.length===3||c.length===5)return`${v$(w,b,c,x,S)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(c.length===2||c.length===4)return`${w$(w,b,c,h,g,f,t.cubicCoeffA,x,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${I.registerUniform("output_size","u32").registerUniform("scales","f32",g.length).registerUniform("roi","f32",f.length).declareVariables(w,b)}
      ${I.mainStart()}
        ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${C?"output[global_idx] = input[global_idx];":`
        let output_indices = ${b.offsetToIndices("global_idx")};
        var input_indices: ${w.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${w.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${c.length===2||c.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${i}|${g.length>0?t.mode==="cubic"?g:g.length:""}|${s.length>0?s:""}|${f.length>0?f:""}|${C}|${t.mode==="nearest"?c.length:c}`,inputDependencies:["rank"]},getShaderSource:A,getRunData:()=>({outputs:[{dims:h,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:[{type:12,data:v},{type:1,data:g},{type:1,data:f},...Q(c,h)]})}},x$=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},xm=(e,t)=>{let i=[],r=[],s=[],d=x$(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");d$(e.inputs,t,d,i,r,s),e.compute($$(e.inputs[0],t,d,i,r,s),{inputs:[0]})},Cm=e=>{let t=e.antialias,i=e.axes,r=e.coordinateTransformMode,s=e.cubicCoeffA,d=e.excludeOutside!==0,c=e.extrapolationValue,f=e.keepAspectRatioPolicy,h=e.mode,g=e.nearestMode===""?"simple":e.nearestMode;return pe({antialias:t,axes:i,coordinateTransformMode:r,cubicCoeffA:s,excludeOutside:d,extrapolationValue:c,keepAspectRatioPolicy:f,mode:h,nearestMode:g})}});var C$,S$,Tm,Im=Y(()=>{"use strict";ce();he();Be();ye();C$=(e,t)=>{let[i,r,s,d]=e,{numHeads:c,rotaryEmbeddingDim:f}=t;if(i.dims.length!==3&&i.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${i.dims.length}`);if(!W.areEqual(r.dims,[])&&!W.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(d.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${d.dims.length}`);if(!W.areEqual(s.dims,d.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(f>0&&c===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let h=i.dims[0],g=i.dims[i.dims.length-2],b=s.dims[0],w=W.sizeFromDimension(i.dims,1)/g,v=f===0?s.dims[1]*2:w/c;if(f>v)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(h!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(g!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(v/2!==s.dims[1]&&f/2!==s.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${s.dims[1]}`);if(g>b)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},S$=(e,t)=>{let{interleaved:i,numHeads:r,rotaryEmbeddingDim:s,scale:d}=t,c=e[0].dims[0],f=W.sizeFromDimension(e[0].dims,1),h=e[0].dims[e[0].dims.length-2],g=f/h,b=e[2].dims[1],w=s===0?b*2:g/r,v=new Array(c,h,g/w,w-b),C=W.computeStrides(v),x=[{type:1,data:d},{type:12,data:v},{type:12,data:C},...e[0].dims.length===3?new Array({type:12,data:[f,g,w,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[f,w,h*w,1]}):[],...Q(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],S=k=>{let A=L("input",e[0].dataType,e[0].dims.length),I=L("position_ids",e[1].dataType,e[1].dims.length),P=L("cos_cache",e[2].dataType,e[2].dims.length),B=L("sin_cache",e[3].dataType,e[3].dims.length),V=K("output",e[0].dataType,e[0].dims.length);return k.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:v.length},{name:"global_strides",type:"u32",length:C.length},{name:"input_output_strides",type:"u32",length:C.length}]),`
        ${k.declareVariables(A,I,P,B,V)}

        ${k.mainStart(Ut)}
          let half_rotary_emb_dim = uniforms.${P.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${I.broadcastedIndicesToOffset("bsnh.xy",K("",I.type.tensor,2))};
            let position_id =
                u32(${I.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${i});
            let j = i + select(half_rotary_emb_dim, 1, ${i});
            let re = ${A.getByOffset("i")} * ${P.get("position_id","bsnh[3]")} -
                ${A.getByOffset("j")} * ${B.get("position_id","bsnh[3]")};
            ${V.setByOffset("i","re")}
            let im = ${A.getByOffset("i")} * ${B.get("position_id","bsnh[3]")} +
                ${A.getByOffset("j")} * ${P.get("position_id","bsnh[3]")};
            ${V.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${V.setByOffset("k",A.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:pe({interleaved:i}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:S,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(W.size(v)/Ut)},programUniforms:x})}},Tm=(e,t)=>{C$(e.inputs,t),e.compute(S$(e.inputs,t))}});var T$,I$,Am,Em=Y(()=>{"use strict";ce();he();ye();T$=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],i=e[1],r=e[2];if(t.dataType!==i.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(i.dims.length!==3&&i.dims.length!==2)throw new Error("Skip must be 2D or 3D");let s=t.dims[t.dims.length-1],d=t.dims[t.dims.length-2];if(i.dims[i.dims.length-1]!==s)throw new Error("Skip must have the same hidden size as input");if(i.dims[i.dims.length-2]!==d)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==s)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let c=e[3];if(c.dims.length!==1)throw new Error("Beta must be 1D");if(c.dims[c.dims.length-1]!==s)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let c=e[4];if(c.dims.length!==1)throw new Error("Bias must be 1D");if(c.dims[c.dims.length-1]!==s)throw new Error("Bias must have the same hidden size as input")}},I$=(e,t,i,r)=>{let s=t.simplified,d=e[0].dims,c=W.size(d),f=d,h=c,g=d.slice(-1)[0],b=r?d.slice(0,-1).concat(1):[],w=!s&&e.length>3,v=e.length>4,C=r&&i>1,x=r&&i>2,S=i>3,k=64,A=$e(g),I=[{type:12,data:h},{type:12,data:A},{type:12,data:g},{type:1,data:t.epsilon}],P=V=>{let j=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],H=[L("x",e[0].dataType,e[0].dims,A),L("skip",e[1].dataType,e[1].dims,A),L("gamma",e[2].dataType,e[2].dims,A)];w&&H.push(L("beta",e[3].dataType,e[3].dims,A)),v&&H.push(L("bias",e[4].dataType,e[4].dims,A)),H.push(K("output",e[0].dataType,f,A)),C&&H.push(K("mean_output",1,b)),x&&H.push(K("inv_std_output",1,b)),S&&H.push(K("input_skip_bias_sum",e[0].dataType,f,A));let F=Ae(e[0].dataType),Z=Ae(1,A);return`

      ${V.registerUniforms(j).declareVariables(...H)}
      var<workgroup> sum_shared : array<${Z}, ${k}>;
      var<workgroup> sum_squared_shared : array<${Z}, ${k}>;

      ${V.mainStart([k,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${k};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${k};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${k-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${v?"bias[offset1d + i]":F+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${S?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${jt(F,A,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${k};
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
        let mean = ${nt("sum",A)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${nt("square_sum",A)} / f32(uniforms.hidden_size) ${s?"":"- mean * mean"} + uniforms.epsilon);
        ${C?"mean_output[global_idx] = mean;":""}
        ${x?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${s?"":`- ${F}(mean)`}) *
            ${F}(inv_std_dev) * gamma[offset1d + i]
            ${w?"+ beta[offset1d + i]":""};
        }
      }`},B=[{dims:f,dataType:e[0].dataType}];return i>1&&B.push({dims:b,dataType:1}),i>2&&B.push({dims:b,dataType:1}),i>3&&B.push({dims:d,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${A};${C};${x};${S}`,inputDependencies:e.map((V,j)=>"type")},getShaderSource:P,getRunData:()=>({outputs:B,dispatchGroup:{x:Math.ceil(h/g)},programUniforms:I})}},Am=(e,t)=>{T$(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(I$(e.inputs,t,e.outputCount,!1),{outputs:r})}});var A$,_n,E$,km,k$,P$,Pm,zm,Om=Y(()=>{"use strict";ce();he();Be();ye();A$=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((i,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},_n=(e,t)=>{let i=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>i.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>i.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return i},E$=(e,t)=>{if(e.length>1){let i=_n(e,1),r=_n(e,2),s=_n(e,3);return s.length===0&&(s=[...Array(e[0].dims.length).keys()]),pe({starts:i,ends:r,axes:s})}else return t},km=(e,t,i,r,s)=>{let d=e;return e<0&&(d+=i[r[t]]),s[t]<0?Math.max(0,Math.min(d,i[r[t]]-1)):Math.max(0,Math.min(d,i[r[t]]))},k$=(e,t,i)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${i.length}; i >= 0; i--) {
            let input_shape_i = ${ne("uniforms.input_shape","i",i.length)};
            let steps_i = ${ne("uniforms.steps","i",i.length)};
            let signs_i = ${ne("uniforms.signs","i",i.length)};
            let starts_i = ${ne("uniforms.starts","i",i.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,P$=(e,t)=>{let i=e[0].dims,r=W.size(i),s=t.axes.length>0?W.normalizeAxes(t.axes,i.length):[...Array(i.length).keys()],d=_n(e,4);d.forEach(A=>A!==0||(()=>{throw new Error("step cannot be 0")})),d.length===0&&(d=Array(s.length).fill(1));let c=t.starts.map((A,I)=>km(A,I,i,s,d)),f=t.ends.map((A,I)=>km(A,I,i,s,d));if(s.length!==c.length||s.length!==f.length)throw new Error("start, ends and axes should have the same number of elements");if(s.length!==i.length)for(let A=0;A<i.length;++A)s.includes(A)||(c.splice(A,0,0),f.splice(A,0,i[A]),d.splice(A,0,1));let h=d.map(A=>Math.sign(A));d.forEach((A,I,P)=>{if(A<0){let B=(f[I]-c[I])/A,V=c[I],j=V+B*d[I];c[I]=j,f[I]=V,P[I]=-A}});let g=i.slice(0);s.forEach((A,I)=>{g[A]=Math.ceil((f[A]-c[A])/d[A])});let b={dims:g,dataType:e[0].dataType},w=K("output",e[0].dataType,g.length),v=L("input",e[0].dataType,e[0].dims.length),C=W.size(g),x=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:c.length},{name:"signs",type:"i32",length:h.length},{name:"steps",type:"u32",length:d.length}],S=[{type:12,data:C},{type:12,data:c},{type:6,data:h},{type:12,data:d},...Q(e[0].dims,g)],k=A=>`
      ${A.registerUniforms(x).declareVariables(v,w)}
        ${k$(v,w,i)}
        ${A.mainStart()}
          ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${w.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${w.setByOffset("global_idx",v.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${h.length}_${c.length}_${d.length}`,inputDependencies:["rank"]},getShaderSource:k,getRunData:()=>({outputs:[b],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:S})}},Pm=(e,t)=>{A$(e.inputs,t);let i=E$(e.inputs,t);e.compute(P$(e.inputs,i),{inputs:[0]})},zm=e=>{let t=e.starts,i=e.ends,r=e.axes;return pe({starts:t,ends:i,axes:r})}});var z$,O$,Bm,Dm,Mm=Y(()=>{"use strict";ce();he();Be();wt();ye();z$=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},O$=(e,t)=>{let i=e.inputs[0],r=i.dims,s=W.size(r),d=r.length,c=W.normalizeAxis(t.axis,d),f=c<r.length-1,h,g=[];f?(g=Array.from({length:d},(H,F)=>F),g[c]=d-1,g[d-1]=c,h=e.compute(We(i,g),{inputs:[i],outputs:[-1]})[0]):h=i;let b=h.dims,w=b[d-1],v=s/w,C=$e(w),x=w/C,S=64;v===1&&(S=256);let k=(H,F)=>F===4?`max(max(${H}.x, ${H}.y), max(${H}.z, ${H}.w))`:F===2?`max(${H}.x, ${H}.y)`:F===3?`max(max(${H}.x, ${H}.y), ${H}.z)`:H,A=L("x",h.dataType,h.dims,C),I=K("result",h.dataType,h.dims,C),P=A.type.value,B=Ae(h.dataType)==="f32"?`var threadMax = ${P}(-3.402823e+38f);`:`var threadMax = ${P}(-65504.0h);`,V=H=>`
      var<workgroup> rowMaxShared : ${P};
      var<workgroup> rowSumShared : ${P};
      var<workgroup> threadShared : array<${P}, ${S}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${P} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${P}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${H.registerUniform("packedCols","i32").declareVariables(A,I)}
      ${H.mainStart(S)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${S};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${B}
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
          rowMaxShared = ${P}(${k("threadShared[0]",C)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${P}(0.0);
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
          rowSumShared = ${P}(${nt("threadShared[0]",C)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,j=e.compute({name:"Softmax",shaderCache:{hint:`${C};${S}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:b,dataType:h.dataType}],dispatchGroup:{x:v},programUniforms:[{type:6,data:x}]}),getShaderSource:V},{inputs:[h],outputs:[f?-1:0]})[0];f&&e.compute(We(j,g),{inputs:[j]})},Bm=(e,t)=>{z$(e.inputs),O$(e,t)},Dm=e=>pe({axis:e.axis})});var Rm,B$,D$,M$,Um,jm=Y(()=>{"use strict";ce();he();ye();Rm=e=>Array.from(e.getBigInt64Array(),Number),B$=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Rm(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},D$=(e,t)=>{let i=[];for(let r=0;r<e.length;++r)i.push(e[r]*t[r]);return i},M$=(e,t)=>{let i=e[0].dims,r=t??Rm(e[1]),s=D$(i,r),d=W.size(s),c=e[0].dataType,f=L("input",c,i.length),h=K("output",c,s.length),g=b=>`
      const inputShape = ${f.indices(...i)};
      ${b.registerUniform("output_size","u32").declareVariables(f,h)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${h.offsetToIndices("global_idx")};
      var input_indices: ${f.type.indices};
      for (var i = 0; i < ${i.length}; i++) {
        let input_dim_i = ${f.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${h.indicesGet("output_indices","i")}  % input_dim_i;

        ${f.indicesSet("input_indices","i","input_dim_value")}
      }
      ${h.setByOffset("global_idx",f.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},...Q(e[0].dims,s)]}),getShaderSource:g}},Um=e=>{B$(e.inputs),e.compute(M$(e.inputs),{inputs:[0]})}});var R$,U$,Nm,Vm=Y(()=>{"use strict";ce();he();ye();R$=(e,t,i,r,s)=>{let d=K("output_data",s,i.length,4),c=L("a_data",t[1].dataType,t[1].dims.length,4),f=L("b_data",t[2].dataType,t[2].dims.length,4),h=L("c_data",t[0].dataType,t[0].dims.length,4),g,b=(w,v,C)=>`select(${v}, ${w}, ${C})`;if(!r)g=d.setByOffset("global_idx",b(c.getByOffset("global_idx"),f.getByOffset("global_idx"),h.getByOffset("global_idx")));else{let w=(v,C,x="")=>{let S=`a_data[index_a${C}][component_a${C}]`,k=`b_data[index_b${C}][component_b${C}]`,A=`bool(c_data[index_c${C}] & (0xffu << (component_c${C} * 8)))`;return`
            let output_indices${C} = ${d.offsetToIndices(`global_idx * 4u + ${C}u`)};
            let offset_a${C} = ${c.broadcastedIndicesToOffset(`output_indices${C}`,d)};
            let offset_b${C} = ${f.broadcastedIndicesToOffset(`output_indices${C}`,d)};
            let offset_c${C} = ${h.broadcastedIndicesToOffset(`output_indices${C}`,d)};
            let index_a${C} = offset_a${C} / 4u;
            let index_b${C} = offset_b${C} / 4u;
            let index_c${C} = offset_c${C} / 4u;
            let component_a${C} = offset_a${C} % 4u;
            let component_b${C} = offset_b${C} % 4u;
            let component_c${C} = offset_c${C} % 4u;
            ${v}[${C}] = ${x}(${b(S,k,A)});
          `};s===9?g=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:g=`
            ${w("output_data[global_idx]",0)}
            ${w("output_data[global_idx]",1)}
            ${w("output_data[global_idx]",2)}
            ${w("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(h,c,f,d)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${g}
      }`},U$=e=>{let t=e[1].dims,i=e[2].dims,r=e[0].dims,s=e[1].dataType,d=!(W.areEqual(t,i)&&W.areEqual(i,r)),c=t,f=W.size(t);if(d){let g=ct.calcShape(ct.calcShape(t,i,!1),r,!1);if(!g)throw new Error("Can't perform where op on the given tensors");c=g,f=W.size(c)}let h=Math.ceil(f/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:g=>R$(g,e,c,d,s),getRunData:()=>({outputs:[{dims:c,dataType:s}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:h},...Q(r,t,i,c)]})}},Nm=e=>{e.compute(U$(e.inputs))}});var Wm,Lm=Y(()=>{"use strict";vc();un();Cc();Tc();cp();$p();Sp();Vp();Kp();Qp();ef();af();lf();cf();mf();yf();wf();xf();Tf();Ef();Rf();Nf();Wf();Gf();qf();Ri();Yf();pm();hm();ym();wm();an();Sm();Im();Em();Om();Mm();ji();jm();wt();dn();Vm();Wm=new Map([["Abs",[Ic]],["Acos",[Ac]],["Acosh",[Ec]],["Add",[pp]],["ArgMax",[wc,Ci]],["ArgMin",[_c,Ci]],["Asin",[kc]],["Asinh",[Pc]],["Atan",[zc]],["Atanh",[Oc]],["Attention",[$c]],["AveragePool",[nm,rm]],["BatchNormalization",[xc]],["BiasAdd",[Sc]],["BiasSplitGelu",[dp]],["Cast",[Dc,Bc]],["Ceil",[Rc]],["Clip",[Mc]],["Concat",[xp,Cp]],["Conv",[Oi,zi]],["ConvTranspose",[qp,Hp]],["Cos",[Uc]],["Cosh",[jc]],["CumSum",[Yp,Zp]],["DepthToSpace",[Xp,Jp]],["DequantizeLinear",[fm,mm]],["Div",[fp]],["Einsum",[nf,of]],["Elu",[Nc,cr]],["Equal",[mp]],["Erf",[Vc]],["Exp",[Wc]],["Expand",[uf]],["FastGelu",[df]],["Floor",[Lc]],["FusedConv",[Oi,zi]],["Gather",[ff,pf]],["GatherElements",[$f,vf]],["GatherBlockQuantized",[bf,_f]],["GatherND",[hf,gf]],["Gelu",[Gc]],["Gemm",[Sf,Cf]],["GlobalAveragePool",[am,om]],["GlobalMaxPool",[cm,dm]],["Greater",[bp]],["GreaterOrEqual",[wp]],["GridSample",[If,Af]],["GroupQueryAttention",[Mf]],["HardSigmoid",[Xc,Qc]],["InstanceNormalization",[jf]],["LayerNormalization",[Vf]],["LeakyRelu",[Hc,cr]],["Less",[_p]],["LessOrEqual",[vp]],["Log",[sp]],["MatMul",[Lf]],["MatMulNBits",[Hf,Ff]],["MaxPool",[um,lm]],["Mul",[hp]],["MultiHeadAttention",[zf,Pf]],["Neg",[qc]],["Not",[Fc]],["Pad",[Kf]],["Pow",[gp]],["QuickGelu",[up,cr]],["Range",[gm]],["Reciprocal",[Kc]],["ReduceMin",[fc]],["ReduceMean",[uc]],["ReduceMax",[pc]],["ReduceSum",[hc]],["ReduceProd",[mc]],["ReduceL1",[lc]],["ReduceL2",[dc]],["ReduceLogSum",[yc]],["ReduceLogSumExp",[cc]],["ReduceSumSquare",[gc]],["Relu",[Yc]],["Resize",[xm,Cm]],["RotaryEmbedding",[Tm]],["ScatterND",[_m,bm]],["Sigmoid",[Zc]],["Sin",[Jc]],["Sinh",[ep]],["Slice",[Pm,zm]],["SkipLayerNormalization",[Am]],["Split",[Of,Bf]],["Sqrt",[tp]],["Softmax",[Bm,Dm]],["Sub",[yp]],["Tan",[rp]],["Tanh",[ip]],["ThresholdedRelu",[ap,cr]],["Tile",[Um]],["Transpose",[Yd,Zd]],["Where",[Nm]]])});var wn,Gm=Y(()=>{"use strict";Je();dt();ye();wn=class{constructor(t){this.backend=t;this.repo=new Map,this.attributesBound=!1}getArtifact(t){return this.repo.get(t)}setArtifact(t,i){this.repo.set(t,i)}run(t,i,r,s,d){Ye(t.programInfo.name);let c=this.backend.device,f=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let h=[];for(let b of i)h.push({binding:h.length,resource:{buffer:b.buffer}});for(let b of r)h.push({binding:h.length,resource:{buffer:b.buffer}});d&&h.push({binding:h.length,resource:d});let g=c.createBindGroup({layout:t.computePipeline.getBindGroupLayout(0),entries:h,label:t.programInfo.name});if(this.backend.sessionStatus==="capturing"){let b={kernelId:this.backend.currentKernelId,computePipeline:t.computePipeline,bindGroup:g,dispatchGroup:s};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(b)}f.setPipeline(t.computePipeline),f.setBindGroup(0,g),f.dispatchWorkgroups(...s),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),He(t.programInfo.name)}dispose(){}build(t,i){Ye(t.name);let r=this.backend.device,s=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(w=>{r.features.has(w.feature)&&s.push(`enable ${w.extension};`)});let c=qd(i,this.backend.device.limits),f=t.getShaderSource(c),h=`${s.join(`
`)}
${c.additionalImplementations}
${f}`,g=r.createShaderModule({code:h,label:t.name});be("verbose",()=>`[WebGPU] ${t.name} shader code: ${h}`);let b=r.createComputePipeline({compute:{module:g,entryPoint:"main"},layout:"auto",label:t.name});return He(t.name),{programInfo:t,computePipeline:b,uniformVariablesInfo:c.variablesInfo}}normalizeDispatchGroupSize(t){let i=typeof t=="number"?t:t.x,r=typeof t=="number"?1:t.y||1,s=typeof t=="number"?1:t.z||1,d=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(i<=d&&r<=d&&s<=d)return[i,r,s];let c=i*r*s,f=Math.ceil(Math.sqrt(c));if(f>d){if(f=Math.ceil(Math.cbrt(c)),f>d)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[f,f,f]}else return[f,f,1]}}});var Hm={};qt(Hm,{WebGpuBackend:()=>Vi});var j$,N$,Ni,Vi,Fm=Y(()=>{"use strict";Je();ce();dt();pi();Hd();Lm();Gm();j$=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let i=[];for(let r=0;r<e.length;++r){let s=e[r].dataType;switch(t[r]){case"none":{i.push("");break}case"type":{i.push(`${s}`);break}case"rank":{let d=e[r].dims.length;i.push(`${s};${d}`);break}case"dims":{let d=e[r].dims.join(",");i.push(`${s};${d}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return i.join("|")},N$=(e,t,i)=>{let r=e.name;return e.shaderCache?.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+i+`:${j$(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,r},Ni=class{constructor(t){t&&(this.architecture=t.architecture,this.vendor=t.vendor)}isArchitecture(t){return this.architecture===t}isVendor(t){return this.vendor===t}},Vi=class{constructor(){this.currentSessionId=null;this.currentKernelId=null;this.commandEncoder=null;this.computePassEncoder=null;this.maxDispatchNumber=16;this.pendingDispatchNumber=0;this.pendingKernels=[];this.pendingQueries=new Map;this.sessionStatus="default";this.capturedCommandList=new Map;this.capturedPendingKernels=new Map;this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let t=this.kernelCustomData.get(this.currentKernelId);return t||(t={},this.kernelCustomData.set(this.currentKernelId,t)),t}async initialize(t,i){this.env=t;let r=[],s={requiredLimits:{maxComputeWorkgroupStorageSize:i.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:i.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:i.limits.maxStorageBufferBindingSize,maxBufferSize:i.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:i.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:i.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:i.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:i.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},d=c=>i.features.has(c)&&r.push(c)&&!0;d("chromium-experimental-timestamp-query-inside-passes")||d("timestamp-query"),d("shader-f16"),d("subgroups"),this.device=await i.requestDevice(s),this.adapterInfo=new Ni(i.info||await i.requestAdapterInfo()),this.gpuDataManager=Gd(this),this.programManager=new wn(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Zr(t.logLevel,!!t.debug),this.device.onuncapturederror=c=>{c.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${c.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:i,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let t=this.getCommandEncoder(),i={};this.queryType==="at-passes"&&(i.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=t.beginComputePass(i)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Ye(),this.endComputePass();let t;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),t=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(t,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,t,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&t.mapAsync(GPUMapMode.READ).then(()=>{let i=new BigUint64Array(t.getMappedRange()),r=this.pendingQueries.get(t);for(let s=0;s<i.length/2;s++){let d=r[s],c=d.kernelId,f=this.kernels.get(c),h=f.kernelType,g=f.kernelName,b=d.programName,w=d.inputTensorViews,v=d.outputTensorViews,C=i[s*2],x=i[s*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=C);let S=Number(C-this.queryTimeBase),k=Number(x-this.queryTimeBase);if(!Number.isSafeInteger(S)||!Number.isSafeInteger(k))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:w.map(A=>({dims:A.dims,dataType:At(A.dataType)})),outputsMetadata:v.map(A=>({dims:A.dims,dataType:At(A.dataType)})),kernelId:c,kernelType:h,kernelName:g,programName:b,startTime:S,endTime:k});else{let A="";w.forEach((P,B)=>{A+=`input[${B}]: [${P.dims}] | ${At(P.dataType)}, `});let I="";v.forEach((P,B)=>{I+=`output[${B}]: [${P.dims}] | ${At(P.dataType)}, `}),console.log(`[profiling] kernel "${c}|${h}|${g}|${b}" ${A}${I}execution time: ${k-S} ns`)}zr("GPU",`${b}::${C}::${x}`)}t.unmap(),this.pendingQueries.delete(t)}),He()}run(t,i,r,s,d,c){Ye(t.name);let f=[];for(let P=0;P<i.length;++P){let B=i[P].data;if(B===0)continue;let V=this.gpuDataManager.get(B);if(!V)throw new Error(`no GPU data for input: ${B}`);f.push(V)}let{outputs:h,dispatchGroup:g,programUniforms:b}=t.getRunData(i),w=r.length===0?h.map((P,B)=>B):r;if(w.length!==h.length)throw new Error(`Output size ${w.length} must be equal to ${h.length}.`);let v=[],C=[];for(let P=0;P<h.length;++P){if(!Number.isInteger(w[P])||w[P]<-3||w[P]>=c)throw new Error(`Invalid output index: ${w[P]}`);if(w[P]===-3)continue;let B=w[P]===-1,V=w[P]===-2,j=B||V?d(h[P].dataType,h[P].dims):s(w[P],h[P].dataType,h[P].dims);if(v.push(j),j.data===0)continue;let H=this.gpuDataManager.get(j.data);if(!H)throw new Error(`no GPU data for output: ${j.data}`);if(B&&this.temporaryData.push(H),V){let F=this.kernelPersistentData.get(this.currentKernelId);F||(F=[],this.kernelPersistentData.set(this.currentKernelId,F)),F.push(H)}C.push(H)}if(f.length!==i.length||C.length!==v.length){if(C.length===0)return He(t.name),v;throw new Error(`Program ${t.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let x;if(b){let P=0,B=[];b.forEach(F=>{let Z=typeof F.data=="number"?[F.data]:F.data;if(Z.length===0)return;let te=F.type===10?2:4,ie,ue;F.type===10?(ue=Z.length>4?16:Z.length>2?8:Z.length*te,ie=Z.length>4?16:te*Z.length):(ue=Z.length<=2?Z.length*te:16,ie=16),P=Math.ceil(P/ue)*ue,B.push(P);let ee=F.type===10?8:4;P+=Z.length>4?Math.ceil(Z.length/ee)*ie:Z.length*te});let V=16;P=Math.ceil(P/V)*V;let j=new ArrayBuffer(P);b.forEach((F,Z)=>{let te=B[Z],ie=typeof F.data=="number"?[F.data]:F.data;if(F.type===6)new Int32Array(j,te,ie.length).set(ie);else if(F.type===12)new Uint32Array(j,te,ie.length).set(ie);else if(F.type===10)new Uint16Array(j,te,ie.length).set(ie);else if(F.type===1)new Float32Array(j,te,ie.length).set(ie);else throw new Error(`Unsupported uniform type: ${At(F.type)}`)});let H=this.gpuDataManager.create(P,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(H.buffer,0,j,0,P),this.gpuDataManager.release(H.id),x={offset:0,size:P,buffer:H.buffer}}let S=this.programManager.normalizeDispatchGroupSize(g),k=S[1]===1&&S[2]===1,A=N$(t,i,k),I=this.programManager.getArtifact(A);if(I||(I=this.programManager.build(t,S),this.programManager.setArtifact(A,I),be("info",()=>`[artifact] key: ${A}, programName: ${t.name}`)),b&&I.uniformVariablesInfo){if(b.length!==I.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${I.uniformVariablesInfo.length}, got ${b.length} in program "${I.programInfo.name}".`);for(let P=0;P<b.length;P++){let B=b[P],V=B.type,j=typeof B.data=="number"?1:B.data.length,[H,F]=I.uniformVariablesInfo[P];if(V!==H||j!==F)throw new Error(`Uniform variable ${P} mismatch: expect type ${H} with size ${F}, got type ${V} with size ${j} in program "${I.programInfo.name}".`)}}if(be("info",()=>`[ProgramManager] run "${t.name}" (key=${A}) with ${S[0]}x${S[1]}x${S[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let P={kernelId:this.currentKernelId,programName:I.programInfo.name,inputTensorViews:i,outputTensorViews:v};this.pendingKernels.push(P),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(P)}return this.programManager.run(I,f,C,S,x),He(t.name),v}upload(t,i){this.gpuDataManager.upload(t,i)}memcpy(t,i){this.gpuDataManager.memcpy(t,i)}async download(t,i){await this.gpuDataManager.download(t,i)}alloc(t){return this.gpuDataManager.create(t).id}free(t){return this.gpuDataManager.release(t)}createKernel(t,i,r,s){let d=Wm.get(t);if(!d)throw new Error(`kernel not implemented: ${t}`);let c={kernelType:t,kernelName:s,kernelEntry:d[0],attributes:[d[1],r]};this.kernels.set(i,c)}releaseKernel(t){let i=this.kernelPersistentData.get(t);if(i){for(let r of i)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(t)}this.kernelCustomData.delete(t),this.kernels.delete(t)}computeKernel(t,i,r){let s=this.kernels.get(t);if(!s)throw new Error(`kernel not created: ${t}`);let d=s.kernelType,c=s.kernelName,f=s.kernelEntry,h=s.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${d}] ${c}" is not allowed to be called recursively`);this.currentKernelId=t,h[0]&&(h[1]=h[0](h[1]),h[0]=void 0),be("info",()=>`[WebGPU] Start to run kernel "[${d}] ${c}"...`);let g=this.env.debug;this.temporaryData=[];try{return g&&this.device.pushErrorScope("validation"),f(i,h[1]),0}catch(b){return r.push(Promise.resolve(`[WebGPU] Kernel "[${d}] ${c}" failed. ${b}`)),1}finally{g&&r.push(this.device.popErrorScope().then(b=>b?`GPU validation error for kernel "[${d}] ${c}": ${b.message}`:null));for(let b of this.temporaryData)this.gpuDataManager.release(b.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(t,i,r,s){let d=this.sessionExternalDataMapping.get(t);d||(d=new Map,this.sessionExternalDataMapping.set(t,d));let c=d.get(i),f=this.gpuDataManager.registerExternalBuffer(r,s,c);return d.set(i,[f,r]),f}unregisterBuffers(t){let i=this.sessionExternalDataMapping.get(t);i&&(i.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(t))}getBuffer(t){let i=this.gpuDataManager.get(t);if(!i)throw new Error(`no GPU data for buffer: ${t}`);return i.buffer}createDownloader(t,i,r){return async()=>{let s=await bi(this,t,i);return Xr(s.buffer,r)}}writeTimestamp(t){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,t)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){be("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){be("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){be("info","replay"),this.sessionStatus="replaying";let t=this.capturedCommandList.get(this.currentSessionId),i=this.capturedPendingKernels.get(this.currentSessionId),r=t.length;this.pendingKernels=[];for(let s=0;s<r;s++){let d=this.getComputePassEncoder(),c=t[s];this.writeTimestamp(this.pendingDispatchNumber*2),d.setPipeline(c.computePipeline),d.setBindGroup(0,c.bindGroup),d.dispatchWorkgroups(...c.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(i[s]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(t){this.unregisterBuffers(t),this.capturedCommandList.has(t)&&this.capturedCommandList.delete(t),this.capturedPendingKernels.has(t)&&this.capturedPendingKernels.delete(t),this.gpuDataManager.onReleaseSession(t)}onRunStart(t){this.currentSessionId=t,this.setQueryType()}}});var qm={};qt(qm,{init:()=>V$});var hr,Wi,V$,Km=Y(()=>{"use strict";ce();dt();he();Nd();hr=class e{constructor(t,i,r,s){this.module=t;this.dataType=i;this.data=r;this.dims=s}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(W.size(t)!==W.size(this.dims))throw new Error("Invalid new shape");return new e(this.module,this.dataType,this.data,t)}},Wi=class{constructor(t,i,r){this.module=t;this.backend=i;this.customDataOffset=0;this.customDataSize=0;this.adapterInfo=i.adapterInfo;let s=t.PTR_SIZE,d=r/t.PTR_SIZE,c=s===4?"i32":"i64";this.opKernelContext=Number(t.getValue(s*d++,c));let f=Number(t.getValue(s*d++,c));this.outputCount=Number(t.getValue(s*d++,c)),this.customDataOffset=Number(t.getValue(s*d++,"*")),this.customDataSize=Number(t.getValue(s*d++,c));let h=[];for(let g=0;g<f;g++){let b=Number(t.getValue(s*d++,c)),w=Number(t.getValue(s*d++,"*")),v=Number(t.getValue(s*d++,c)),C=[];for(let x=0;x<v;x++)C.push(Number(t.getValue(s*d++,c)));h.push(new hr(t,b,w,C))}this.inputs=h}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(t,i){let r=i?.inputs?.map(f=>typeof f=="number"?this.inputs[f]:f)??this.inputs,s=i?.outputs??[],d=(f,h,g)=>new hr(this.module,h,this.output(f,g),g),c=(f,h)=>{let g=Et(f,h);if(!g)throw new Error(`Unsupported data type: ${f}`);let b=g>0?this.backend.gpuDataManager.create(g).id:0;return new hr(this.module,f,b,h)};return this.backend.run(t,r,s,d,c,this.outputCount)}output(t,i){let r=this.module.stackSave();try{let s=this.module.PTR_SIZE,d=s===4?"i32":"i64",c=this.module.stackAlloc((1+i.length)*s);this.module.setValue(c,i.length,d);for(let f=0;f<i.length;f++)this.module.setValue(c+s*(f+1),i[f],d);return this.module._JsepOutput(this.opKernelContext,t,c)}catch(s){throw new Error(`Failed to generate kernel's output[${t}] with dims [${i}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${s}`)}finally{this.module.stackRestore(r)}}},V$=async(e,t,i,r)=>{let s=t.jsepInit;if(!s)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let d=(Fm(),or(Hm)).WebGpuBackend,c=new d;await c.initialize(i,r),s("webgpu",[c,f=>c.alloc(Number(f)),f=>c.free(f),(f,h,g,b=!1)=>{if(b)be("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(f)}, dst=${Number(h)}, size=${Number(g)}`),c.memcpy(Number(f),Number(h));else{be("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(f)}, gpuDataId=${Number(h)}, size=${Number(g)}`);let w=t.HEAPU8.subarray(Number(f>>>0),Number(f>>>0)+Number(g));c.upload(Number(h),w)}},async(f,h,g)=>{be("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${f}, dataOffset=${h}, size=${g}`),await c.download(Number(f),()=>t.HEAPU8.subarray(Number(h)>>>0,Number(h+g)>>>0))},(f,h,g)=>c.createKernel(f,Number(h),g,t.UTF8ToString(t._JsepGetNodeName(Number(h)))),f=>c.releaseKernel(f),(f,h,g,b)=>{be("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${g}, kernel=${f}, contextDataOffset=${h}`);let w=new Wi(t,c,Number(h));return c.computeKernel(Number(f),w,b)},()=>c.captureBegin(),()=>c.captureEnd(),()=>c.replay()])}else{let d=new tn(i);s("webnn",[d,()=>d.reserveTensorId(),c=>d.releaseTensorId(c),async(c,f,h,g,b)=>d.ensureTensor(c,f,h,g,b),(c,f)=>{d.uploadTensor(c,f)},async(c,f)=>d.downloadTensor(c,f)])}}});var W$,Rr,Ur,Nt,L$,sr,jr,Nr,Ym,Vr,Wr,Lr,ni=Y(()=>{"use strict";Ed();Pd();ce();It();Hr();di();W$=(e,t)=>{Ie()._OrtInit(e,t)!==0&&Se("Can't initialize onnxruntime.")},Rr=async e=>{W$(e.wasm.numThreads,lr(e.logLevel))},Ur=async(e,t)=>{Ie().asyncInit?.();{let i=(Km(),or(qm)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let r=e.webgpu.adapter;if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let d=e.webgpu.forceFallbackAdapter;if(d!==void 0&&typeof d!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${d}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:d}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await i("webgpu",Ie(),e,r)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await i("webnn",Ie(),e)}}},Nt=new Map,L$=e=>{let t=Ie(),i=t.stackSave();try{let r=t.PTR_SIZE,s=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,s,s+r)!==0&&Se("Can't get session input/output count.");let c=r===4?"i32":"i64";return[Number(t.getValue(s,c)),Number(t.getValue(s+r,c))]}finally{t.stackRestore(i)}},sr=e=>{let t=Ie(),i=t._malloc(e.byteLength);if(i===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,i),[i,e.byteLength]},jr=async(e,t)=>{let i,r,s=Ie();Array.isArray(e)?[i,r]=e:e.buffer===s.HEAPU8.buffer?[i,r]=[e.byteOffset,e.byteLength]:[i,r]=sr(e);let d=0,c=0,f=0,h=[],g=[],b=[];try{if([c,h]=await kd(t),t?.externalData&&s.mountExternalData){let I=[];for(let P of t.externalData){let B=typeof P=="string"?P:P.path;I.push(dr(typeof P=="string"?P:P.data).then(V=>{s.mountExternalData(B,V)}))}await Promise.all(I)}for(let I of t?.executionProviders??[])if((typeof I=="string"?I:I.name)==="webnn"){if(s.shouldTransferToMLTensor=!1,typeof I!="string"){let B=I,V=B?.context,j=B?.gpuDevice,H=B?.deviceType,F=B?.powerPreference;V?s.currentContext=V:j?s.currentContext=await s.jsepCreateMLContext(j):s.currentContext=await s.jsepCreateMLContext({deviceType:H,powerPreference:F})}else s.currentContext=await s.jsepCreateMLContext();break}d=await s._OrtCreateSession(i,r,c),s.webgpuOnCreateSession?.(d),d===0&&Se("Can't create a session."),s.jsepOnCreateSession?.(),s.currentContext&&(s.jsepRegisterMLContext(d,s.currentContext),s.currentContext=void 0,s.shouldTransferToMLTensor=!0);let[w,v]=L$(d),C=!!t?.enableGraphCapture,x=[],S=[],k=[];for(let I=0;I<w;I++){let P=s._OrtGetInputName(d,I);P===0&&Se("Can't get an input name."),g.push(P),x.push(s.UTF8ToString(P))}for(let I=0;I<v;I++){let P=s._OrtGetOutputName(d,I);P===0&&Se("Can't get an output name."),b.push(P);let B=s.UTF8ToString(P);S.push(B);{if(C&&t?.preferredOutputLocation===void 0){k.push("gpu-buffer");continue}let V=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[B]??"cpu";if(V!=="cpu"&&V!=="cpu-pinned"&&V!=="gpu-buffer"&&V!=="ml-tensor")throw new Error(`Not supported preferred output location: ${V}.`);if(C&&V!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${V}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);k.push(V)}}let A=null;return k.some(I=>I==="gpu-buffer"||I==="ml-tensor")&&(f=s._OrtCreateBinding(d),f===0&&Se("Can't create IO binding."),A={handle:f,outputPreferredLocations:k,outputPreferredLocationsEncoded:k.map(I=>li(I))}),Nt.set(d,[d,g,b,A,C,!1]),[d,x,S]}catch(w){throw g.forEach(v=>s._OrtFree(v)),b.forEach(v=>s._OrtFree(v)),f!==0&&s._OrtReleaseBinding(f)!==0&&Se("Can't release IO binding."),d!==0&&s._OrtReleaseSession(d)!==0&&Se("Can't release session."),w}finally{s._free(i),c!==0&&s._OrtReleaseSessionOptions(c)!==0&&Se("Can't release session options."),h.forEach(w=>s._free(w)),s.unmountExternalData?.()}},Nr=e=>{let t=Ie(),i=Nt.get(e);if(!i)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,s,d,c,f]=i;c&&(f&&t._OrtClearBoundOutputs(c.handle)!==0&&Se("Can't clear bound outputs."),t._OrtReleaseBinding(c.handle)!==0&&Se("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),s.forEach(h=>t._OrtFree(h)),d.forEach(h=>t._OrtFree(h)),t._OrtReleaseSession(r)!==0&&Se("Can't release session."),Nt.delete(e)},Ym=async(e,t,i,r,s,d=!1)=>{if(!e){t.push(0);return}let c=Ie(),f=c.PTR_SIZE,h=e[0],g=e[1],b=e[3],w=b,v,C;if(h==="string"&&(b==="gpu-buffer"||b==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(d&&b!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(b==="gpu-buffer"){let k=e[2].gpuBuffer;C=Et(Kt(h),g);{let A=c.jsepRegisterBuffer;if(!A)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');v=A(r,s,k,C)}}else if(b==="ml-tensor"){let k=e[2].mlTensor;C=Et(Kt(h),g);let A=c.jsepRegisterMLTensor;if(!A)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');v=A(r,k,Kt(h),g)}else{let k=e[2];if(Array.isArray(k)){C=f*k.length,v=c._malloc(C),i.push(v);for(let A=0;A<k.length;A++){if(typeof k[A]!="string")throw new TypeError(`tensor data at index ${A} is not a string`);c.setValue(v+A*f,Qe(k[A],i),"*")}}else{let A=c.jsepIsGraphInput;if(h!=="string"&&A){let I=c._OrtGetInputName(r,s),P=c.UTF8ToString(I);if(A(r,P)){let B=Kt(h);C=Et(B,g),w="ml-tensor";let V=c.jsepCreateTemporaryTensor,j=c.jsepUploadTensor;if(!V||!j)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let H=await V(r,B,g);j(H,new Uint8Array(k.buffer,k.byteOffset,k.byteLength)),v=H}else C=k.byteLength,v=c._malloc(C),i.push(v),c.HEAPU8.set(new Uint8Array(k.buffer,k.byteOffset,C),v)}else C=k.byteLength,v=c._malloc(C),i.push(v),c.HEAPU8.set(new Uint8Array(k.buffer,k.byteOffset,C),v)}}let x=c.stackSave(),S=c.stackAlloc(4*g.length);try{g.forEach((A,I)=>c.setValue(S+I*f,A,f===4?"i32":"i64"));let k=c._OrtCreateTensor(Kt(h),v,C,S,g.length,li(w));k===0&&Se(`Can't create tensor for input/output. session=${r}, index=${s}.`),t.push(k)}finally{c.stackRestore(x)}},Vr=async(e,t,i,r,s,d)=>{let c=Ie(),f=c.PTR_SIZE,h=Nt.get(e);if(!h)throw new Error(`cannot run inference. invalid session id: ${e}`);let g=h[0],b=h[1],w=h[2],v=h[3],C=h[4],x=h[5],S=t.length,k=r.length,A=0,I=[],P=[],B=[],V=[],j=c.stackSave(),H=c.stackAlloc(S*f),F=c.stackAlloc(S*f),Z=c.stackAlloc(k*f),te=c.stackAlloc(k*f);try{[A,I]=Ad(d);for(let ee=0;ee<S;ee++)await Ym(i[ee],P,V,e,t[ee],C);for(let ee=0;ee<k;ee++)await Ym(s[ee],B,V,e,S+r[ee],C);for(let ee=0;ee<S;ee++)c.setValue(H+ee*f,P[ee],"*"),c.setValue(F+ee*f,b[t[ee]],"*");for(let ee=0;ee<k;ee++)c.setValue(Z+ee*f,B[ee],"*"),c.setValue(te+ee*f,w[r[ee]],"*");if(v&&!x){let{handle:ee,outputPreferredLocations:se,outputPreferredLocationsEncoded:Pe}=v;if(b.length!==S)throw new Error(`input count from feeds (${S}) is expected to be always equal to model's input count (${b.length}).`);for(let re=0;re<S;re++){let ae=t[re];await c._OrtBindInput(ee,b[ae],P[re])!==0&&Se(`Can't bind input[${re}] for session=${e}.`)}for(let re=0;re<k;re++){let ae=r[re];s[re]?.[3]?c._OrtBindOutput(ee,w[ae],B[re],0)!==0&&Se(`Can't bind pre-allocated output[${re}] for session=${e}.`):c._OrtBindOutput(ee,w[ae],0,Pe[ae])!==0&&Se(`Can't bind output[${re}] to ${se[re]} for session=${e}.`)}Nt.set(e,[g,b,w,v,C,!0])}c.jsepOnRunStart?.(g);let ie;v?ie=await c._OrtRunWithBinding(g,v.handle,k,Z,A):ie=await c._OrtRun(g,F,H,S,te,k,Z,A),ie!==0&&Se("failed to call OrtRun().");let ue=[];for(let ee=0;ee<k;ee++){let se=Number(c.getValue(Z+ee*f,"*"));if(se===B[ee]){ue.push(s[ee]);continue}let Pe=c.stackSave(),re=c.stackAlloc(4*f),ae=!1,fe,le=0;try{c._OrtGetTensorData(se,re,re+f,re+2*f,re+3*f)!==0&&Se(`Can't access output tensor data on index ${ee}.`);let Te=f===4?"i32":"i64",Ee=Number(c.getValue(re,Te));le=c.getValue(re+f,"*");let me=c.getValue(re+f*2,"*"),D=Number(c.getValue(re+f*3,Te)),J=[];for(let ze=0;ze<D;ze++)J.push(Number(c.getValue(me+ze*f,Te)));c._OrtFree(me)!==0&&Se("Can't free memory for tensor dims.");let ve=J.reduce((ze,De)=>ze*De,1);fe=At(Ee);let Ge=v?.outputPreferredLocations[r[ee]];if(fe==="string"){if(Ge==="gpu-buffer"||Ge==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ze=[];for(let De=0;De<ve;De++){let Ue=c.getValue(le+De*f,"*"),er=c.getValue(le+(De+1)*f,"*"),Wt=De===ve-1?void 0:er-Ue;ze.push(c.UTF8ToString(Ue,Wt))}ue.push([fe,J,ze,"cpu"])}else if(Ge==="gpu-buffer"&&ve>0){let ze=c.jsepGetBuffer;if(!ze)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let De=ze(le),Ue=Et(Ee,ve);if(Ue===void 0||!Kr(fe))throw new Error(`Unsupported data type: ${fe}`);ae=!0,ue.push([fe,J,{gpuBuffer:De,download:c.jsepCreateDownloader(De,Ue,fe),dispose:()=>{c._OrtReleaseTensor(se)!==0&&Se("Can't release tensor.")}},"gpu-buffer"])}else if(Ge==="ml-tensor"&&ve>0){let ze=c.jsepEnsureTensor;if(!ze)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Et(Ee,ve)===void 0||!Yr(fe))throw new Error(`Unsupported data type: ${fe}`);let Ue=await ze(e,le,Ee,J,!1);ae=!0,ue.push([fe,J,{mlTensor:Ue,download:c.jsepCreateMLTensorDownloader(le,fe),dispose:()=>{c.jsepReleaseTensorId(le),c._OrtReleaseTensor(se)}},"ml-tensor"])}else{let ze=qr(fe),De=new ze(ve);new Uint8Array(De.buffer,De.byteOffset,De.byteLength).set(c.HEAPU8.subarray(le,le+De.byteLength)),ue.push([fe,J,De,"cpu"])}}finally{c.stackRestore(Pe),fe==="string"&&le&&c._free(le),ae||c._OrtReleaseTensor(se),c.jsepOnRunEnd?.(g)}}return v&&!C&&(c._OrtClearBoundOutputs(v.handle)!==0&&Se("Can't clear bound outputs."),Nt.set(e,[g,b,w,v,C,!1])),ue}finally{c.stackRestore(j),P.forEach(ie=>c._OrtReleaseTensor(ie)),B.forEach(ie=>c._OrtReleaseTensor(ie)),V.forEach(ie=>c._free(ie)),A!==0&&c._OrtReleaseRunOptions(A),I.forEach(ie=>c._free(ie))}},Wr=e=>{let t=Ie(),i=Nt.get(e);if(!i)throw new Error("invalid session id");let r=i[0],s=t._OrtEndProfiling(r);s===0&&Se("Can't get an profile file name."),t._OrtFree(s)},Lr=e=>{let t=[];for(let i of e){let r=i[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}});var Vt,et,gr,$n,xn,vn,Li,Gi,Xt,Jt,H$,Zm,Qm,Xm,Jm,eh,th,rh,Hi=Y(()=>{"use strict";Je();ni();It();Dr();Vt=()=>!!ke.wasm.proxy&&typeof document<"u",gr=!1,$n=!1,xn=!1,Gi=new Map,Xt=(e,t)=>{let i=Gi.get(e);i?i.push(t):Gi.set(e,[t])},Jt=()=>{if(gr||!$n||xn||!et)throw new Error("worker not ready")},H$=e=>{switch(e.data.type){case"init-wasm":gr=!1,e.data.err?(xn=!0,Li[1](e.data.err)):($n=!0,Li[0]()),vn&&(URL.revokeObjectURL(vn),vn=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Gi.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},Zm=async()=>{if(!$n){if(gr)throw new Error("multiple calls to 'initWasm()' detected.");if(xn)throw new Error("previous call to 'initWasm()' failed.");if(gr=!0,Vt())return new Promise((e,t)=>{et?.terminate(),Sd().then(([i,r])=>{try{et=r,et.onerror=d=>t(d),et.onmessage=H$,Li=[e,t];let s={type:"init-wasm",in:ke};!s.in.wasm.wasmPaths&&(i||ai)&&(s.in.wasm.wasmPaths={wasm:new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href}),et.postMessage(s),vn=i}catch(s){t(s)}},t)});try{await Mr(ke.wasm),await Rr(ke),$n=!0}catch(e){throw xn=!0,e}finally{gr=!1}}},Qm=async e=>{if(Vt())return Jt(),new Promise((t,i)=>{Xt("init-ep",[t,i]);let r={type:"init-ep",in:{epName:e,env:ke}};et.postMessage(r)});await Ur(ke,e)},Xm=async e=>Vt()?(Jt(),new Promise((t,i)=>{Xt("copy-from",[t,i]);let r={type:"copy-from",in:{buffer:e}};et.postMessage(r,[e.buffer])})):sr(e),Jm=async(e,t)=>{if(Vt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Jt(),new Promise((i,r)=>{Xt("create",[i,r]);let s={type:"create",in:{model:e,options:{...t}}},d=[];e instanceof Uint8Array&&d.push(e.buffer),et.postMessage(s,d)})}else return jr(e,t)},eh=async e=>{if(Vt())return Jt(),new Promise((t,i)=>{Xt("release",[t,i]);let r={type:"release",in:e};et.postMessage(r)});Nr(e)},th=async(e,t,i,r,s,d)=>{if(Vt()){if(i.some(c=>c[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(s.some(c=>c))throw new Error("pre-allocated output tensor is not supported for proxy.");return Jt(),new Promise((c,f)=>{Xt("run",[c,f]);let h=i,g={type:"run",in:{sessionId:e,inputIndices:t,inputs:h,outputIndices:r,options:d}};et.postMessage(g,Lr(h))})}else return Vr(e,t,i,r,s,d)},rh=async e=>{if(Vt())return Jt(),new Promise((t,i)=>{Xt("end-profiling",[t,i]);let r={type:"end-profiling",in:e};et.postMessage(r)});Wr(e)}});var nh,F$,Cn,ih=Y(()=>{"use strict";Je();Hi();ce();Br();di();nh=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},F$=e=>{switch(e[3]){case"cpu":return new rt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Kr(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:i,download:r,dispose:s}=e[2];return rt.fromGpuBuffer(i,{dataType:t,dims:e[1],download:r,dispose:s})}case"ml-tensor":{let t=e[0];if(!Yr(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:i,download:r,dispose:s}=e[2];return rt.fromMLTensor(i,{dataType:t,dims:e[1],download:r,dispose:s})}default:throw new Error(`invalid data location: ${e[3]}`)}},Cn=class{async fetchModelAndCopyToWasmMemory(t){return Xm(await dr(t))}async loadModel(t,i){Ye();let r;typeof t=="string"?r=await this.fetchModelAndCopyToWasmMemory(t):r=t,[this.sessionId,this.inputNames,this.outputNames]=await Jm(r,i),He()}async dispose(){return eh(this.sessionId)}async run(t,i,r){Ye();let s=[],d=[];Object.entries(t).forEach(v=>{let C=v[0],x=v[1],S=this.inputNames.indexOf(C);if(S===-1)throw new Error(`invalid input '${C}'`);s.push(x),d.push(S)});let c=[],f=[];Object.entries(i).forEach(v=>{let C=v[0],x=v[1],S=this.outputNames.indexOf(C);if(S===-1)throw new Error(`invalid output '${C}'`);c.push(x),f.push(S)});let h=s.map((v,C)=>nh(v,()=>`input "${this.inputNames[d[C]]}"`)),g=c.map((v,C)=>v?nh(v,()=>`output "${this.outputNames[f[C]]}"`):null),b=await th(this.sessionId,d,h,f,g,r),w={};for(let v=0;v<b.length;v++)w[this.outputNames[f[v]]]=c[v]??F$(b[v]);return He(),w}startProfiling(){}endProfiling(){rh(this.sessionId)}}});var ah={};qt(ah,{OnnxruntimeWebAssemblyBackend:()=>Sn,initializeFlags:()=>oh,wasmBackend:()=>q$});var oh,Sn,q$,sh=Y(()=>{"use strict";Je();Hi();ih();oh=()=>{if((typeof ke.wasm.initTimeout!="number"||ke.wasm.initTimeout<0)&&(ke.wasm.initTimeout=0),ke.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof ke.wasm.proxy!="boolean"&&(ke.wasm.proxy=!1),typeof ke.wasm.trace!="boolean"&&(ke.wasm.trace=!1),typeof ke.wasm.numThreads!="number"||!Number.isInteger(ke.wasm.numThreads)||ke.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ke.wasm.numThreads=1;else{let e=typeof navigator>"u"?Zn("node:os").cpus().length:navigator.hardwareConcurrency;ke.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},Sn=class{async init(t){oh(),await Zm(),await Qm(t)}async createInferenceSessionHandler(t,i){let r=new Cn;return await r.loadModel(t,i),Promise.resolve(r)}},q$=new Sn});Je();Je();Je();var pd="1.22.0";var KE=ri;{let e=(sh(),or(ah)).wasmBackend;Bt("webgpu",e,5),Bt("webnn",e,5),Bt("cpu",e,10),Bt("wasm",e,10)}Object.defineProperty(ke.versions,"web",{value:pd,enumerable:!0});export{_w as InferenceSession,zr as TRACE,Ye as TRACE_FUNC_BEGIN,He as TRACE_FUNC_END,rt as Tensor,KE as default,ke as env,Bt as registerBackend};
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
//# sourceMappingURL=ort.webgpu.bundle.min.mjs.map
