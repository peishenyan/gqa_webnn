/*!
 * ONNX Runtime Web v1.22.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var Zn=Object.defineProperty;var gw=Object.getOwnPropertyDescriptor;var yw=Object.getOwnPropertyNames;var bw=Object.prototype.hasOwnProperty;var Qn=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,i)=>(typeof require<"u"?require:t)[i]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var Z=(e,t)=>()=>(e&&(t=e(e=0)),t);var qt=(e,t)=>{for(var i in t)Zn(e,i,{get:t[i],enumerable:!0})},_w=(e,t,i,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let u of yw(t))!bw.call(e,u)&&u!==i&&Zn(e,u,{get:()=>t[u],enumerable:!(r=gw(t,u))||r.enumerable});return e};var or=e=>_w(Zn({},"__esModule",{value:!0}),e);var kr,Ot,Bt,ww,jl,Yn=Z(()=>{"use strict";kr=new Map,Ot=[],Bt=(e,t,i)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=kr.get(e);if(r===void 0)kr.set(e,{backend:t,priority:i});else{if(r.priority>i)return;if(r.priority===i&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${i}`)}if(i>=0){let u=Ot.indexOf(e);u!==-1&&Ot.splice(u,1);for(let d=0;d<Ot.length;d++)if(kr.get(Ot[d]).priority<=i){Ot.splice(d,0,e);return}Ot.push(e)}return}throw new TypeError("not a valid backend")},ww=async e=>{let t=kr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let i=!!t.initPromise;try{return i||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return i||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},jl=async e=>{let t=e.executionProviders||[],i=t.map(h=>typeof h=="string"?h:h.name),r=i.length===0?Ot:i,u,d=[],c=new Set;for(let h of r){let g=await ww(h);typeof g=="string"?d.push({name:h,err:g}):(u||(u=g),u===g&&c.add(h))}if(!u)throw new Error(`no available backend found. ERR: ${d.map(h=>`[${h.name}] ${h.err}`).join(", ")}`);for(let{name:h,err:g}of d)i.includes(h)&&console.warn(`removing requested execution provider "${h}" from session options because it is not available: ${g}`);let f=t.filter(h=>c.has(typeof h=="string"?h:h.name));return[u,new Proxy(e,{get:(h,g)=>g==="executionProviders"?f:Reflect.get(h,g)})]}});var Nl=Z(()=>{"use strict";Yn()});var Vl,Wl=Z(()=>{"use strict";Vl="1.22.0"});var Ll,Ke,Xn=Z(()=>{"use strict";Wl();Ll="warning",Ke={wasm:{},webgl:{},webgpu:{},versions:{common:Vl},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ll=e}},get logLevel(){return Ll}};Object.defineProperty(Ke,"logLevel",{enumerable:!0})});var ke,Gl=Z(()=>{"use strict";Xn();ke=Ke});var Hl,Fl,ql=Z(()=>{"use strict";Hl=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);i.width=e.dims[3],i.height=e.dims[2];let r=i.getContext("2d");if(r!=null){let u,d;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(u=e.dims[2],d=e.dims[3]):(u=e.dims[3],d=e.dims[2]);let c=t?.format!==void 0?t.format:"RGB",f=t?.norm,h,g;f===void 0||f.mean===void 0?h=[255,255,255,255]:typeof f.mean=="number"?h=[f.mean,f.mean,f.mean,f.mean]:(h=[f.mean[0],f.mean[1],f.mean[2],0],f.mean[3]!==void 0&&(h[3]=f.mean[3])),f===void 0||f.bias===void 0?g=[0,0,0,0]:typeof f.bias=="number"?g=[f.bias,f.bias,f.bias,f.bias]:(g=[f.bias[0],f.bias[1],f.bias[2],0],f.bias[3]!==void 0&&(g[3]=f.bias[3]));let b=d*u,w=0,v=b,C=b*2,x=-1;c==="RGBA"?(w=0,v=b,C=b*2,x=b*3):c==="RGB"?(w=0,v=b,C=b*2):c==="RBG"&&(w=0,C=b,v=b*2);for(let S=0;S<d;S++)for(let k=0;k<u;k++){let A=(e.data[w++]-g[0])*h[0],I=(e.data[v++]-g[1])*h[1],P=(e.data[C++]-g[2])*h[2],B=x===-1?255:(e.data[x++]-g[3])*h[3];r.fillStyle="rgba("+A+","+I+","+P+","+B+")",r.fillRect(k,S,1,1)}if("toDataURL"in i)return i.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Fl=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(i!=null){let u,d,c;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(u=e.dims[2],d=e.dims[1],c=e.dims[3]):(u=e.dims[3],d=e.dims[2],c=e.dims[1]);let f=t!==void 0&&t.format!==void 0?t.format:"RGB",h=t?.norm,g,b;h===void 0||h.mean===void 0?g=[255,255,255,255]:typeof h.mean=="number"?g=[h.mean,h.mean,h.mean,h.mean]:(g=[h.mean[0],h.mean[1],h.mean[2],255],h.mean[3]!==void 0&&(g[3]=h.mean[3])),h===void 0||h.bias===void 0?b=[0,0,0,0]:typeof h.bias=="number"?b=[h.bias,h.bias,h.bias,h.bias]:(b=[h.bias[0],h.bias[1],h.bias[2],0],h.bias[3]!==void 0&&(b[3]=h.bias[3]));let w=d*u;if(t!==void 0&&(t.format!==void 0&&c===4&&t.format!=="RGBA"||c===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let v=4,C=0,x=1,S=2,k=3,A=0,I=w,P=w*2,B=-1;f==="RGBA"?(A=0,I=w,P=w*2,B=w*3):f==="RGB"?(A=0,I=w,P=w*2):f==="RBG"&&(A=0,P=w,I=w*2),r=i.createImageData(u,d);for(let V=0;V<d*u;C+=v,x+=v,S+=v,k+=v,V++)r.data[C]=(e.data[A++]-b[0])*g[0],r.data[x]=(e.data[I++]-b[1])*g[1],r.data[S]=(e.data[P++]-b[2])*g[2],r.data[k]=B===-1?255:(e.data[B++]-b[3])*g[3]}else throw new Error("Can not access image data");return r}});var Jn,Kl,Zl,Ql,Yl,Xl,Jl=Z(()=>{"use strict";Pr();Jn=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:i,width:r}=t,u=t.norm??{mean:255,bias:0},d,c;typeof u.mean=="number"?d=[u.mean,u.mean,u.mean,u.mean]:d=[u.mean[0],u.mean[1],u.mean[2],u.mean[3]??255],typeof u.bias=="number"?c=[u.bias,u.bias,u.bias,u.bias]:c=[u.bias[0],u.bias[1],u.bias[2],u.bias[3]??0];let f=t.format!==void 0?t.format:"RGBA",h=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",g=i*r,b=h==="RGBA"?new Float32Array(g*4):new Float32Array(g*3),w=4,v=0,C=1,x=2,S=3,k=0,A=g,I=g*2,P=-1;f==="RGB"&&(w=3,v=0,C=1,x=2,S=-1),h==="RGBA"?P=g*3:h==="RBG"?(k=0,I=g,A=g*2):h==="BGR"&&(I=0,A=g,k=g*2);for(let V=0;V<g;V++,v+=w,x+=w,C+=w,S+=w)b[k++]=(e[v]+c[0])/d[0],b[A++]=(e[C]+c[1])/d[1],b[I++]=(e[x]+c[2])/d[2],P!==-1&&S!==-1&&(b[P++]=(e[S]+c[3])/d[3]);return h==="RGBA"?new Le("float32",b,[1,4,i,r]):new Le("float32",b,[1,3,i,r])},Kl=async(e,t)=>{let i=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,u=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,d=typeof e=="string",c,f=t??{},h=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},g=b=>typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||b instanceof OffscreenCanvas?b.getContext("2d"):null;if(i){let b=h();b.width=e.width,b.height=e.height;let w=g(b);if(w!=null){let v=e.height,C=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(v=t.resizedHeight,C=t.resizedWidth),t!==void 0){if(f=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");f.tensorFormat="RGBA",f.height=v,f.width=C}else f.tensorFormat="RGBA",f.height=v,f.width=C;w.drawImage(e,0,0),c=w.getImageData(0,0,C,v).data}else throw new Error("Can not access image data")}else if(r){let b,w;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(b=t.resizedHeight,w=t.resizedWidth):(b=e.height,w=e.width),t!==void 0&&(f=t),f.format="RGBA",f.height=b,f.width=w,t!==void 0){let v=h();v.width=w,v.height=b;let C=g(v);if(C!=null)C.putImageData(e,0,0),c=C.getImageData(0,0,w,b).data;else throw new Error("Can not access image data")}else c=e.data}else if(u){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let b=h();b.width=e.width,b.height=e.height;let w=g(b);if(w!=null){let v=e.height,C=e.width;return w.drawImage(e,0,0,C,v),c=w.getImageData(0,0,C,v).data,f.height=v,f.width=C,Jn(c,f)}else throw new Error("Can not access image data")}else{if(d)return new Promise((b,w)=>{let v=h(),C=g(v);if(!e||!C)return w();let x=new Image;x.crossOrigin="Anonymous",x.src=e,x.onload=()=>{v.width=x.width,v.height=x.height,C.drawImage(x,0,0,v.width,v.height);let S=C.getImageData(0,0,v.width,v.height);f.height=v.height,f.width=v.width,b(Jn(S.data,f))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(c!==void 0)return Jn(c,f);throw new Error("Input data provided is not supported - aborted tensor creation")},Zl=(e,t)=>{let{width:i,height:r,download:u,dispose:d}=t,c=[1,r,i,4];return new Le({location:"texture",type:"float32",texture:e,dims:c,download:u,dispose:d})},Ql=(e,t)=>{let{dataType:i,dims:r,download:u,dispose:d}=t;return new Le({location:"gpu-buffer",type:i??"float32",gpuBuffer:e,dims:r,download:u,dispose:d})},Yl=(e,t)=>{let{dataType:i,dims:r,download:u,dispose:d}=t;return new Le({location:"ml-tensor",type:i??"float32",mlTensor:e,dims:r,download:u,dispose:d})},Xl=(e,t,i)=>new Le({location:"cpu-pinned",type:e,data:t,dims:i??[t.length]})});var Dt,ar,ed,td,rd=Z(()=>{"use strict";Dt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),ar=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),ed=!1,td=()=>{if(!ed){ed=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,i=globalThis.Float16Array,r=typeof i<"u"&&i.from;e&&(Dt.set("int64",BigInt64Array),ar.set(BigInt64Array,"int64")),t&&(Dt.set("uint64",BigUint64Array),ar.set(BigUint64Array,"uint64")),r?(Dt.set("float16",i),ar.set(i,"float16")):Dt.set("float16",Uint16Array)}}});var nd,id,od=Z(()=>{"use strict";Pr();nd=e=>{let t=1;for(let i=0;i<e.length;i++){let r=e[i];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${i}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${i}] must be a non-negative integer, got: ${r}`);t*=r}return t},id=(e,t)=>{switch(e.location){case"cpu":return new Le(e.type,e.data,t);case"cpu-pinned":return new Le({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Le({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Le({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Le({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}});var Le,Pr=Z(()=>{"use strict";ql();Jl();rd();od();Le=class{constructor(t,i,r){td();let u,d;if(typeof t=="object"&&"location"in t)switch(this.dataLocation=t.location,u=t.type,d=t.dims,t.location){case"cpu-pinned":{let f=Dt.get(u);if(!f)throw new TypeError(`unsupported type "${u}" to create tensor from pinned buffer`);if(!(t.data instanceof f))throw new TypeError(`buffer should be of type ${f.name}`);this.cpuData=t.data;break}case"texture":{if(u!=="float32")throw new TypeError(`unsupported type "${u}" to create tensor from texture`);this.gpuTextureData=t.texture,this.downloader=t.download,this.disposer=t.dispose;break}case"gpu-buffer":{if(u!=="float32"&&u!=="float16"&&u!=="int32"&&u!=="int64"&&u!=="uint32"&&u!=="uint8"&&u!=="bool"&&u!=="uint4"&&u!=="int4")throw new TypeError(`unsupported type "${u}" to create tensor from gpu buffer`);this.gpuBufferData=t.gpuBuffer,this.downloader=t.download,this.disposer=t.dispose;break}case"ml-tensor":{if(u!=="float32"&&u!=="float16"&&u!=="int32"&&u!=="int64"&&u!=="uint32"&&u!=="uint64"&&u!=="int8"&&u!=="uint8"&&u!=="bool"&&u!=="uint4"&&u!=="int4")throw new TypeError(`unsupported type "${u}" to create tensor from MLTensor`);this.mlTensorData=t.mlTensor,this.downloader=t.download,this.disposer=t.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let f,h;if(typeof t=="string")if(u=t,h=r,t==="string"){if(!Array.isArray(i))throw new TypeError("A string tensor's data must be a string array.");f=i}else{let g=Dt.get(t);if(g===void 0)throw new TypeError(`Unsupported tensor type: ${t}.`);if(Array.isArray(i)){if(t==="float16"&&g===Uint16Array||t==="uint4"||t==="int4")throw new TypeError(`Creating a ${t} tensor from number array is not supported. Please use ${g.name} as data.`);t==="uint64"||t==="int64"?f=g.from(i,BigInt):f=g.from(i)}else if(i instanceof g)f=i;else if(i instanceof Uint8ClampedArray)if(t==="uint8")f=Uint8Array.from(i);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(t==="float16"&&i instanceof Uint16Array&&g!==Uint16Array)f=new globalThis.Float16Array(i.buffer,i.byteOffset,i.length);else throw new TypeError(`A ${u} tensor's data must be type of ${g}`)}else if(h=i,Array.isArray(t)){if(t.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let g=typeof t[0];if(g==="string")u="string",f=t;else if(g==="boolean")u="bool",f=Uint8Array.from(t);else throw new TypeError(`Invalid element type of data array: ${g}.`)}else if(t instanceof Uint8ClampedArray)u="uint8",f=Uint8Array.from(t);else{let g=ar.get(t.constructor);if(g===void 0)throw new TypeError(`Unsupported type for tensor data: ${t.constructor}.`);u=g,f=t}if(h===void 0)h=[f.length];else if(!Array.isArray(h))throw new TypeError("A tensor's dims must be a number array");d=h,this.cpuData=f,this.dataLocation="cpu"}let c=nd(d);if(this.cpuData&&c!==this.cpuData.length&&!((u==="uint4"||u==="int4")&&Math.ceil(c/2)===this.cpuData.length))throw new Error(`Tensor's size(${c}) does not match data length(${this.cpuData.length}).`);this.type=u,this.dims=d,this.size=c}static async fromImage(t,i){return Kl(t,i)}static fromTexture(t,i){return Zl(t,i)}static fromGpuBuffer(t,i){return Ql(t,i)}static fromMLTensor(t,i){return Yl(t,i)}static fromPinnedBuffer(t,i,r){return Xl(t,i,r)}toDataURL(t){return Hl(this,t)}toImageData(t){return Fl(this,t)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(t){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let i=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=i,t&&this.disposer&&(this.disposer(),this.disposer=void 0),i}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(t){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return id(this,t)}}});var rt,ei=Z(()=>{"use strict";Pr();rt=Le});var zr,ad,Ze,He,ti=Z(()=>{"use strict";Xn();zr=(e,t)=>{(typeof Ke.trace>"u"?!Ke.wasm.trace:!Ke.trace)||console.timeStamp(`${e}::ORT::${t}`)},ad=(e,t)=>{let i=new Error().stack?.split(/\r\n|\r|\n/g)||[],r=!1;for(let u=0;u<i.length;u++){if(r&&!i[u].includes("TRACE_FUNC")){let d=`FUNC_${e}::${i[u].trim().split(" ")[1]}`;t&&(d+=`::${t}`),zr("CPU",d);return}i[u].includes("TRACE_FUNC")&&(r=!0)}},Ze=e=>{(typeof Ke.trace>"u"?!Ke.wasm.trace:!Ke.trace)||ad("BEGIN",e)},He=e=>{(typeof Ke.trace>"u"?!Ke.wasm.trace:!Ke.trace)||ad("END",e)}});var Or,sd=Z(()=>{"use strict";Yn();ei();ti();Or=class e{constructor(t){this.handler=t}async run(t,i,r){Ze();let u={},d={};if(typeof t!="object"||t===null||t instanceof rt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let c=!0;if(typeof i=="object"){if(i===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(i instanceof rt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(i)){if(i.length===0)throw new TypeError("'fetches' cannot be an empty array.");c=!1;for(let g of i){if(typeof g!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(g)===-1)throw new RangeError(`'fetches' contains invalid output name: ${g}.`);u[g]=null}if(typeof r=="object"&&r!==null)d=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let g=!1,b=Object.getOwnPropertyNames(i);for(let w of this.outputNames)if(b.indexOf(w)!==-1){let v=i[w];(v===null||v instanceof rt)&&(g=!0,c=!1,u[w]=v)}if(g){if(typeof r=="object"&&r!==null)d=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else d=i}}else if(typeof i<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let g of this.inputNames)if(typeof t[g]>"u")throw new Error(`input '${g}' is missing in 'feeds'.`);if(c)for(let g of this.outputNames)u[g]=null;let f=await this.handler.run(t,u,d),h={};for(let g in f)if(Object.hasOwnProperty.call(f,g)){let b=f[g];b instanceof rt?h[g]=b:h[g]=new rt(b.type,b.data,b.dims)}return He(),h}async release(){return this.handler.dispose()}static async create(t,i,r,u){Ze();let d,c={};if(typeof t=="string"){if(d=t,typeof i=="object"&&i!==null)c=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(d=t,typeof i=="object"&&i!==null)c=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let b=t,w=0,v=t.byteLength;if(typeof i=="object"&&i!==null)c=i;else if(typeof i=="number"){if(w=i,!Number.isSafeInteger(w))throw new RangeError("'byteOffset' must be an integer.");if(w<0||w>=b.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${b.byteLength}).`);if(v=t.byteLength-w,typeof r=="number"){if(v=r,!Number.isSafeInteger(v))throw new RangeError("'byteLength' must be an integer.");if(v<=0||w+v>b.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${b.byteLength-w}].`);if(typeof u=="object"&&u!==null)c=u;else if(typeof u<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof i<"u")throw new TypeError("'options' must be an object.");d=new Uint8Array(b,w,v)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[f,h]=await jl(c),g=await f.createInferenceSessionHandler(d,h);return He(),new e(g)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}});var vw,ud=Z(()=>{"use strict";sd();vw=Or});var ld=Z(()=>{"use strict"});var dd=Z(()=>{"use strict"});var cd=Z(()=>{"use strict"});var pd=Z(()=>{"use strict"});var ri={};qt(ri,{InferenceSession:()=>vw,TRACE:()=>zr,TRACE_FUNC_BEGIN:()=>Ze,TRACE_FUNC_END:()=>He,Tensor:()=>rt,env:()=>ke,registerBackend:()=>Bt});var Je=Z(()=>{"use strict";Nl();Gl();ud();ei();ld();dd();ti();cd();pd()});var Br=Z(()=>{"use strict"});var gd={};qt(gd,{default:()=>$w});var md,hd,$w,yd=Z(()=>{"use strict";ni();It();Dr();md="ort-wasm-proxy-worker",hd=globalThis.self?.name===md;hd&&(self.onmessage=e=>{let{type:t,in:i}=e.data;try{switch(t){case"init-wasm":Mr(i.wasm).then(()=>{Rr(i).then(()=>{postMessage({type:t})},r=>{postMessage({type:t,err:r})})},r=>{postMessage({type:t,err:r})});break;case"init-ep":{let{epName:r,env:u}=i;Ur(u,r).then(()=>{postMessage({type:t})},d=>{postMessage({type:t,err:d})});break}case"copy-from":{let{buffer:r}=i,u=sr(r);postMessage({type:t,out:u});break}case"create":{let{model:r,options:u}=i;jr(r,u).then(d=>{postMessage({type:t,out:d})},d=>{postMessage({type:t,err:d})});break}case"release":Nr(i),postMessage({type:t});break;case"run":{let{sessionId:r,inputIndices:u,inputs:d,outputIndices:c,options:f}=i;Vr(r,u,d,c,new Array(c.length).fill(null),f).then(h=>{h.some(g=>g[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:h},Lr([...d,...h]))},h=>{postMessage({type:t,err:h})});break}case"end-profiling":Wr(i),postMessage({type:t});break;default:}}catch(r){postMessage({type:t,err:r})}});$w=hd?null:e=>new Worker(e??Qe,{type:"module",name:md})});var _d={};qt(_d,{default:()=>xw});var ii,bd,xw,Cw,wd=Z(()=>{"use strict";bd=(ii=import.meta.url,async function(e={}){var t,i,r=e,u=new Promise((n,o)=>{t=n,i=o}),d=typeof window=="object",c=typeof WorkerGlobalScope<"u",f=c&&self.name?.startsWith("em-pthread");r.mountExternalData=(n,o)=>{n.startsWith("./")&&(n=n.substring(2)),(r.dj||(r.dj=new Map)).set(n,o)},r.unmountExternalData=()=>{delete r.dj};var h=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,Oj:!0}).buffer.constructor;let g=n=>async(...o)=>{try{if(r.ej)throw Error("Session already started");let a=r.ej={Ej:o[0],errors:[]},s=await n(...o);if(r.ej!==a)throw Error("Session mismatch");r.fj?.flush();let l=a.errors;if(0<l.length){let p=await Promise.all(l);if(p=p.filter(m=>m),0<p.length)throw Error(p.join(`
`))}return s}finally{r.ej=null}};r.jsepInit=(n,o)=>{if(n==="webgpu"){[r.fj,r.tj,r.xj,r.jj,r.wj,r.Ze,r.yj,r.Bj,r.uj,r.vj,r.zj]=o;let a=r.fj;r.jsepRegisterBuffer=(s,l,p,m)=>a.registerBuffer(s,l,p,m),r.jsepGetBuffer=s=>a.getBuffer(s),r.jsepCreateDownloader=(s,l,p)=>a.createDownloader(s,l,p),r.jsepOnCreateSession=s=>{a.onCreateSession(s)},r.jsepOnReleaseSession=s=>{a.onReleaseSession(s)},r.jsepOnRunStart=s=>a.onRunStart(s),r.Cj=(s,l)=>{a.upload(s,l)}}else if(n==="webnn"){[r.fj,r.Aj,r.kj,r.jsepEnsureTensor,r.lj,r.jsepDownloadTensor]=o,r.jsepReleaseTensorId=r.kj,r.jsepUploadTensor=r.lj;let a=r.fj;r.jsepOnRunStart=s=>a.onRunStart(s),r.jsepOnRunEnd=a.onRunEnd.bind(a),r.jsepRegisterMLContext=(s,l)=>{a.registerMLContext(s,l)},r.jsepOnReleaseSession=s=>{a.onReleaseSession(s)},r.jsepCreateMLTensorDownloader=(s,l)=>a.createMLTensorDownloader(s,l),r.jsepRegisterMLTensor=(s,l,p,m)=>a.registerMLTensor(s,l,p,m),r.jsepCreateMLContext=s=>a.createMLContext(s),r.jsepRegisterMLConstant=(s,l,p,m,y)=>a.registerMLConstant(s,l,p,m,y,r.dj),r.jsepRegisterGraphInput=a.registerGraphInput.bind(a),r.jsepIsGraphInput=a.isGraphInput.bind(a),r.jsepCreateTemporaryTensor=a.createTemporaryTensor.bind(a)}};let b=()=>{let n=(o,a,s)=>(...l)=>{let p=ut,m=a?.();l=o(...l);let y=a?.();return m!==y&&(o=y,s(m),a=s=null),ut!=p?new Promise((_,$)=>{Nn={resolve:_,reject:$}}):l};(()=>{for(let o of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])r[o]=n(r[o],()=>r[o],a=>r[o]=a)})(),g!==void 0&&(r._OrtRun=g(r._OrtRun),r._OrtRunWithBinding=g(r._OrtRunWithBinding)),b=void 0};r.asyncInit=()=>{b?.()};var w,v,C=Object.assign({},r),x=(n,o)=>{throw o},S="";(d||c)&&(c?S=self.location.href:typeof document<"u"&&document.currentScript&&(S=document.currentScript.src),ii&&(S=ii),S=S.startsWith("blob:")?"":S.slice(0,S.replace(/[?#].*/,"").lastIndexOf("/")+1),c&&(v=n=>{var o=new XMLHttpRequest;return o.open("GET",n,!1),o.responseType="arraybuffer",o.send(null),new Uint8Array(o.response)}),w=async n=>{if(le(n))return new Promise((a,s)=>{var l=new XMLHttpRequest;l.open("GET",n,!0),l.responseType="arraybuffer",l.onload=()=>{l.status==200||l.status==0&&l.response?a(l.response):s(l.status)},l.onerror=s,l.send(null)});var o=await fetch(n,{credentials:"same-origin"});if(o.ok)return o.arrayBuffer();throw Error(o.status+" : "+o.url)});var k=console.log.bind(console),A=console.error.bind(console),I=k,P=A;Object.assign(r,C),C=null;var B,V,N,H,F,Q,te,ie,ue,ee,se,Pe,re,ae=r.wasmBinary,fe=!1,le=n=>n.startsWith("file://");function _e(){return B.buffer!=H.buffer&&Ue(),H}function Te(){return B.buffer!=H.buffer&&Ue(),F}function Ee(){return B.buffer!=H.buffer&&Ue(),Q}function me(){return B.buffer!=H.buffer&&Ue(),te}function D(){return B.buffer!=H.buffer&&Ue(),ie}function J(){return B.buffer!=H.buffer&&Ue(),ue}function ve(){return B.buffer!=H.buffer&&Ue(),ee}function Ge(){return B.buffer!=H.buffer&&Ue(),re}if(f){let n=function(o){try{var a=o.data,s=a.aj;if(s==="load"){let l=[];self.onmessage=p=>l.push(p),self.startWorker=()=>{postMessage({aj:"loaded"});for(let p of l)n(p);self.onmessage=n};for(let p of a.qj)r[p]&&!r[p].proxy||(r[p]=(...m)=>{postMessage({aj:"callHandler",pj:p,args:m})},p=="print"&&(I=r[p]),p=="printErr"&&(P=r[p]));B=a.Kj,Ue(),ze(a.Lj)}else if(s==="run"){ch(a.$i),Gn(a.$i,0,0,1,0,0),Ji(),Un(a.$i),De||(Ko(),De=!0);try{ph(a.Gj,a.hj)}catch(l){if(l!="unwind")throw l}}else a.target!=="setimmediate"&&(s==="checkMailbox"?De&&wr():s&&(P(`worker: received unknown command ${s}`),P(a)))}catch(l){throw Zo(),l}};var Q$=n,ze,De=!1;P=function(...o){o=o.join(" "),console.error(o)},self.alert=function(...o){postMessage({aj:"alert",text:o.join(" "),Ij:Ar()})},self.onunhandledrejection=o=>{throw o.reason||o},self.onmessage=n}function Ue(){var n=B.buffer;r.HEAP8=H=new Int8Array(n),r.HEAP16=Q=new Int16Array(n),r.HEAPU8=F=new Uint8Array(n),r.HEAPU16=te=new Uint16Array(n),r.HEAP32=ie=new Int32Array(n),r.HEAPU32=ue=new Uint32Array(n),r.HEAPF32=ee=new Float32Array(n),r.HEAPF64=re=new Float64Array(n),r.HEAP64=se=new BigInt64Array(n),r.HEAPU64=Pe=new BigUint64Array(n)}function er(){f?startWorker(r):z.pe()}f||(B=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Ue());var Wt,Lt=0,tr=null;function Fi(){if(--Lt==0&&tr){var n=tr;tr=null,n()}}function yt(n){throw P(n="Aborted("+n+")"),fe=!0,n=new WebAssembly.RuntimeError(n+". Build with -sASSERTIONS for more info."),i(n),n}function qi(){return{a:{tc:dh,Xd:lh,v:fh,X:mh,b:gh,n:yh,z:bh,r:_h,Ob:wh,t:vh,db:$h,nd:no,g:hh,Mb:ao,Dd:so,jd:lo,ld:co,Ed:po,Bd:fo,ud:mo,Ad:ho,oc:go,kd:yo,hd:bo,Cd:_o,id:wo,Jd:xh,jc:Sh,bd:Th,$c:Ah,ic:kh,Da:Ph,ha:zh,ad:Oh,Lb:Nh,cd:Vh,xd:Wh,ed:Lh,od:Gh,Zc:Hh,kc:Fh,wd:Un,Gd:qh,Bc:Kh,Zd:Zh,oe:Xh,jb:Jh,pa:tg,gd:Dn,me:rg,ja:og,qb:ag,le:sg,V:ug,Xc:lg,ae:dg,ca:cg,rb:pg,he:fg,ce:mg,Ja:hg,rd:gg,sd:yg,td:bg,pd:Bo,qd:Do,_c:Mo,Ld:wg,Id:xg,C:Cg,Wb:Sg,lc:Tg,Hd:vg,wb:Ig,Fd:Ag,fd:Eg,_:_g,sb:kg,qc:Pg,dd:zg,Nd:Og,Md:Bg,yd:No,zd:Vo,md:kn,Nb:Wo,nc:Lo,vd:Go,mc:Ho,Jb:xy,yb:$_,xa:ew,O:rw,M:tw,ua:r_,za:vy,zc:h_,Yb:v_,Qd:X_,W:Rb,y:iy,c:Vg,Yc:ty,Ta:ey,f:jg,vb:Y_,Ea:uw,i:Ug,ea:ub,j:Fg,Od:fw,k:Hg,w:Gg,s:ay,q:wy,Ha:Py,L:my,oa:Ly,la:ly,dc:Mb,ab:Ub,Tb:j_,gb:T_,Lc:lb,Uc:Ey,Ic:mb,bb:nb,Jc:pb,Pb:pw,ma:a_,Kb:fy,gc:ab,ub:lw,ia:sb,Mc:tb,I:Ab,Kc:db,Ra:Nb,G:cb,mb:Vy,ge:fb,ta:g_,Ga:Hy,B:Jg,fc:wb,Hc:hb,Pc:Xy,Qc:Yy,hc:Qy,fe:yb,Sa:jy,Z:p_,eb:ow,Qb:sw,Za:dw,Ua:nw,Oc:Jy,pc:cw,$b:n_,aa:$y,J:ry,E:qy,Ba:Gy,P:Xb,xc:I_,Gc:bb,Nc:eb,S:_b,d:Lg,Xa:Pb,m:Wg,Sc:My,Ka:q_,wa:rb,Fb:vb,h:Ng,Tc:Dy,Y:ob,ra:Ob,xb:A_,kb:$b,e:qg,Rd:H_,Ud:W_,l:Kg,Dc:zb,o:Yg,Sd:G_,Fc:xb,Vd:V_,Cc:Bb,Yd:k_,p:Zg,Pa:Gb,Db:Lb,Oa:Hb,Xb:C_,D:py,F:ny,N:by,Va:F_,Td:L_,Eb:kb,fa:dy,ga:Xg,La:D_,cb:Wy,Aa:y_,ee:Cb,tb:mw,Ca:cy,vc:M_,_a:B_,$a:O_,Wa:E_,de:Db,sa:__,Wd:U_,$d:c_,be:Vb,_b:i_,Ma:b_,T:Qg,ib:w_,Ac:s_,zb:o_,qa:f_,Fa:gb,Rc:Zy,Ib:Iy,Ub:R_,ka:Oy,na:Tb,Vc:Sy,ke:Ry,$:l_,pb:uy,Sb:N_,Rb:Z_,uc:K_,Ya:ib,sc:iw,nb:Uy,A:gy,U:zy,Hb:ky,Ia:Ty,je:Ny,Q:yy,hb:S_,ya:d_,rc:aw,yc:x_,ne:sy,u:oy,R:Ay,ba:_y,_d:m_,bc:Qb,wc:z_,ob:Cy,ac:Yb,Gb:By,Zb:u_,ie:Ky,Vb:P_,cc:jb,fb:Q_,Wc:hy,ec:Ib,da:Jb,Ec:Sb,H:Eb,lb:Fy,Pd:J_,va:t_,K:e_,Bb:Kb,Na:qb,Qa:Wb,Ab:Zb,Cb:Fb,x:Mg,a:B,Kd:En}}}var Tn={1420180:(n,o,a,s,l)=>{if(r===void 0||!r.dj)return 1;if((n=Me(Number(n>>>0))).startsWith("./")&&(n=n.substring(2)),!(n=r.dj.get(n)))return 2;if(o=Number(o>>>0),a=Number(a>>>0),s=Number(s>>>0),o+a>n.byteLength)return 3;try{let p=n.subarray(o,o+a);switch(l){case 0:Te().set(p,s>>>0);break;case 1:r.Mj?r.Mj(s,p):r.Cj(s,p);break;default:return 4}return 0}catch{return 4}},1421004:(n,o,a)=>{r.lj(n,Te().subarray(o>>>0,o+a>>>0))},1421067:()=>r.Aj(),1421108:n=>{r.kj(n)},1421144:()=>{r.uj()},1421175:()=>{r.vj()},1421204:()=>{r.zj()},1421229:n=>r.tj(n),1421262:n=>r.xj(n),1421294:(n,o,a)=>{r.jj(Number(n),Number(o),Number(a),!0)},1421357:(n,o,a)=>{r.jj(Number(n),Number(o),Number(a))},1421414:()=>typeof wasmOffsetConverter<"u",1421471:n=>{r.Ze("Abs",n,void 0)},1421522:n=>{r.Ze("Neg",n,void 0)},1421573:n=>{r.Ze("Floor",n,void 0)},1421626:n=>{r.Ze("Ceil",n,void 0)},1421678:n=>{r.Ze("Reciprocal",n,void 0)},1421736:n=>{r.Ze("Sqrt",n,void 0)},1421788:n=>{r.Ze("Exp",n,void 0)},1421839:n=>{r.Ze("Erf",n,void 0)},1421890:n=>{r.Ze("Sigmoid",n,void 0)},1421945:(n,o,a)=>{r.Ze("HardSigmoid",n,{alpha:o,beta:a})},1422024:n=>{r.Ze("Log",n,void 0)},1422075:n=>{r.Ze("Sin",n,void 0)},1422126:n=>{r.Ze("Cos",n,void 0)},1422177:n=>{r.Ze("Tan",n,void 0)},1422228:n=>{r.Ze("Asin",n,void 0)},1422280:n=>{r.Ze("Acos",n,void 0)},1422332:n=>{r.Ze("Atan",n,void 0)},1422384:n=>{r.Ze("Sinh",n,void 0)},1422436:n=>{r.Ze("Cosh",n,void 0)},1422488:n=>{r.Ze("Asinh",n,void 0)},1422541:n=>{r.Ze("Acosh",n,void 0)},1422594:n=>{r.Ze("Atanh",n,void 0)},1422647:n=>{r.Ze("Tanh",n,void 0)},1422699:n=>{r.Ze("Not",n,void 0)},1422750:(n,o,a)=>{r.Ze("Clip",n,{min:o,max:a})},1422819:n=>{r.Ze("Clip",n,void 0)},1422871:(n,o)=>{r.Ze("Elu",n,{alpha:o})},1422929:n=>{r.Ze("Gelu",n,void 0)},1422981:n=>{r.Ze("Relu",n,void 0)},1423033:(n,o)=>{r.Ze("LeakyRelu",n,{alpha:o})},1423097:(n,o)=>{r.Ze("ThresholdedRelu",n,{alpha:o})},1423167:(n,o)=>{r.Ze("Cast",n,{to:o})},1423225:n=>{r.Ze("Add",n,void 0)},1423276:n=>{r.Ze("Sub",n,void 0)},1423327:n=>{r.Ze("Mul",n,void 0)},1423378:n=>{r.Ze("Div",n,void 0)},1423429:n=>{r.Ze("Pow",n,void 0)},1423480:n=>{r.Ze("Equal",n,void 0)},1423533:n=>{r.Ze("Greater",n,void 0)},1423588:n=>{r.Ze("GreaterOrEqual",n,void 0)},1423650:n=>{r.Ze("Less",n,void 0)},1423702:n=>{r.Ze("LessOrEqual",n,void 0)},1423761:(n,o,a,s,l)=>{r.Ze("ReduceMean",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:s?Array.from(D().subarray(Number(s)>>>0,Number(l)>>>0)):[]})},1423936:(n,o,a,s,l)=>{r.Ze("ReduceMax",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:s?Array.from(D().subarray(Number(s)>>>0,Number(l)>>>0)):[]})},1424110:(n,o,a,s,l)=>{r.Ze("ReduceMin",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:s?Array.from(D().subarray(Number(s)>>>0,Number(l)>>>0)):[]})},1424284:(n,o,a,s,l)=>{r.Ze("ReduceProd",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:s?Array.from(D().subarray(Number(s)>>>0,Number(l)>>>0)):[]})},1424459:(n,o,a,s,l)=>{r.Ze("ReduceSum",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:s?Array.from(D().subarray(Number(s)>>>0,Number(l)>>>0)):[]})},1424633:(n,o,a,s,l)=>{r.Ze("ReduceL1",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:s?Array.from(D().subarray(Number(s)>>>0,Number(l)>>>0)):[]})},1424806:(n,o,a,s,l)=>{r.Ze("ReduceL2",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:s?Array.from(D().subarray(Number(s)>>>0,Number(l)>>>0)):[]})},1424979:(n,o,a,s,l)=>{r.Ze("ReduceLogSum",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:s?Array.from(D().subarray(Number(s)>>>0,Number(l)>>>0)):[]})},1425156:(n,o,a,s,l)=>{r.Ze("ReduceSumSquare",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:s?Array.from(D().subarray(Number(s)>>>0,Number(l)>>>0)):[]})},1425336:(n,o,a,s,l)=>{r.Ze("ReduceLogSumExp",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:s?Array.from(D().subarray(Number(s)>>>0,Number(l)>>>0)):[]})},1425516:n=>{r.Ze("Where",n,void 0)},1425569:(n,o,a)=>{r.Ze("Transpose",n,{perm:o?Array.from(D().subarray(Number(o)>>>0,Number(a)>>>0)):[]})},1425693:(n,o,a,s)=>{r.Ze("DepthToSpace",n,{blocksize:o,mode:Me(a),format:s?"NHWC":"NCHW"})},1425826:(n,o,a,s)=>{r.Ze("DepthToSpace",n,{blocksize:o,mode:Me(a),format:s?"NHWC":"NCHW"})},1425959:(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G)=>{r.Ze("ConvTranspose",n,{format:_?"NHWC":"NCHW",autoPad:o,dilations:[a],group:s,kernelShape:[l],pads:[p,m],strides:[y],wIsConst:()=>!!_e()[$>>>0],outputPadding:T?Array.from(D().subarray(Number(T)>>>0,Number(E)>>>0)):[],outputShape:O?Array.from(D().subarray(Number(O)>>>0,Number(j)>>>0)):[],activation:Me(G)})},1426392:(n,o,a,s,l,p,m,y,_,$,T,E,O,j)=>{r.Ze("ConvTranspose",n,{format:y?"NHWC":"NCHW",autoPad:o,dilations:Array.from(D().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),group:s,kernelShape:Array.from(D().subarray(Number(l)>>>0,2+(Number(l)>>>0)>>>0)),pads:Array.from(D().subarray(Number(p)>>>0,4+(Number(p)>>>0)>>>0)),strides:Array.from(D().subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),wIsConst:()=>!!_e()[_>>>0],outputPadding:$?Array.from(D().subarray(Number($)>>>0,Number(T)>>>0)):[],outputShape:E?Array.from(D().subarray(Number(E)>>>0,Number(O)>>>0)):[],activation:Me(j)})},1427053:(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G)=>{r.Ze("ConvTranspose",n,{format:_?"NHWC":"NCHW",autoPad:o,dilations:[a],group:s,kernelShape:[l],pads:[p,m],strides:[y],wIsConst:()=>!!_e()[$>>>0],outputPadding:T?Array.from(D().subarray(Number(T)>>>0,Number(E)>>>0)):[],outputShape:O?Array.from(D().subarray(Number(O)>>>0,Number(j)>>>0)):[],activation:Me(G)})},1427486:(n,o,a,s,l,p,m,y,_,$,T,E,O,j)=>{r.Ze("ConvTranspose",n,{format:y?"NHWC":"NCHW",autoPad:o,dilations:Array.from(D().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),group:s,kernelShape:Array.from(D().subarray(Number(l)>>>0,2+(Number(l)>>>0)>>>0)),pads:Array.from(D().subarray(Number(p)>>>0,4+(Number(p)>>>0)>>>0)),strides:Array.from(D().subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),wIsConst:()=>!!_e()[_>>>0],outputPadding:$?Array.from(D().subarray(Number($)>>>0,Number(T)>>>0)):[],outputShape:E?Array.from(D().subarray(Number(E)>>>0,Number(O)>>>0)):[],activation:Me(j)})},1428147:(n,o)=>{r.Ze("GlobalAveragePool",n,{format:o?"NHWC":"NCHW"})},1428238:(n,o,a,s,l,p,m,y,_,$,T,E,O,j)=>{r.Ze("AveragePool",n,{format:j?"NHWC":"NCHW",auto_pad:o,ceil_mode:a,count_include_pad:s,storage_order:l,dilations:p?Array.from(D().subarray(Number(p)>>>0,Number(m)>>>0)):[],kernel_shape:y?Array.from(D().subarray(Number(y)>>>0,Number(_)>>>0)):[],pads:$?Array.from(D().subarray(Number($)>>>0,Number(T)>>>0)):[],strides:E?Array.from(D().subarray(Number(E)>>>0,Number(O)>>>0)):[]})},1428717:(n,o)=>{r.Ze("GlobalAveragePool",n,{format:o?"NHWC":"NCHW"})},1428808:(n,o,a,s,l,p,m,y,_,$,T,E,O,j)=>{r.Ze("AveragePool",n,{format:j?"NHWC":"NCHW",auto_pad:o,ceil_mode:a,count_include_pad:s,storage_order:l,dilations:p?Array.from(D().subarray(Number(p)>>>0,Number(m)>>>0)):[],kernel_shape:y?Array.from(D().subarray(Number(y)>>>0,Number(_)>>>0)):[],pads:$?Array.from(D().subarray(Number($)>>>0,Number(T)>>>0)):[],strides:E?Array.from(D().subarray(Number(E)>>>0,Number(O)>>>0)):[]})},1429287:(n,o)=>{r.Ze("GlobalMaxPool",n,{format:o?"NHWC":"NCHW"})},1429374:(n,o,a,s,l,p,m,y,_,$,T,E,O,j)=>{r.Ze("MaxPool",n,{format:j?"NHWC":"NCHW",auto_pad:o,ceil_mode:a,count_include_pad:s,storage_order:l,dilations:p?Array.from(D().subarray(Number(p)>>>0,Number(m)>>>0)):[],kernel_shape:y?Array.from(D().subarray(Number(y)>>>0,Number(_)>>>0)):[],pads:$?Array.from(D().subarray(Number($)>>>0,Number(T)>>>0)):[],strides:E?Array.from(D().subarray(Number(E)>>>0,Number(O)>>>0)):[]})},1429849:(n,o)=>{r.Ze("GlobalMaxPool",n,{format:o?"NHWC":"NCHW"})},1429936:(n,o,a,s,l,p,m,y,_,$,T,E,O,j)=>{r.Ze("MaxPool",n,{format:j?"NHWC":"NCHW",auto_pad:o,ceil_mode:a,count_include_pad:s,storage_order:l,dilations:p?Array.from(D().subarray(Number(p)>>>0,Number(m)>>>0)):[],kernel_shape:y?Array.from(D().subarray(Number(y)>>>0,Number(_)>>>0)):[],pads:$?Array.from(D().subarray(Number($)>>>0,Number(T)>>>0)):[],strides:E?Array.from(D().subarray(Number(E)>>>0,Number(O)>>>0)):[]})},1430411:(n,o,a,s,l)=>{r.Ze("Gemm",n,{alpha:o,beta:a,transA:s,transB:l})},1430515:n=>{r.Ze("MatMul",n,void 0)},1430569:(n,o,a,s)=>{r.Ze("ArgMax",n,{keepDims:!!o,selectLastIndex:!!a,axis:s})},1430677:(n,o,a,s)=>{r.Ze("ArgMin",n,{keepDims:!!o,selectLastIndex:!!a,axis:s})},1430785:(n,o)=>{r.Ze("Softmax",n,{axis:o})},1430848:(n,o)=>{r.Ze("Concat",n,{axis:o})},1430908:(n,o,a,s,l)=>{r.Ze("Split",n,{axis:o,numOutputs:a,splitSizes:s?Array.from(D().subarray(Number(s)>>>0,Number(l)>>>0)):[]})},1431064:n=>{r.Ze("Expand",n,void 0)},1431118:(n,o)=>{r.Ze("Gather",n,{axis:Number(o)})},1431189:(n,o)=>{r.Ze("GatherElements",n,{axis:Number(o)})},1431268:(n,o)=>{r.Ze("GatherND",n,{batch_dims:Number(o)})},1431347:(n,o,a,s,l,p,m,y,_,$,T)=>{r.Ze("Resize",n,{antialias:o,axes:a?Array.from(D().subarray(Number(a)>>>0,Number(s)>>>0)):[],coordinateTransformMode:Me(l),cubicCoeffA:p,excludeOutside:m,extrapolationValue:y,keepAspectRatioPolicy:Me(_),mode:Me($),nearestMode:Me(T)})},1431709:(n,o,a,s,l,p,m)=>{r.Ze("Slice",n,{starts:o?Array.from(D().subarray(Number(o)>>>0,Number(a)>>>0)):[],ends:s?Array.from(D().subarray(Number(s)>>>0,Number(l)>>>0)):[],axes:p?Array.from(D().subarray(Number(p)>>>0,Number(m)>>>0)):[]})},1431973:n=>{r.Ze("Tile",n,void 0)},1432025:(n,o,a)=>{r.Ze("InstanceNormalization",n,{epsilon:o,format:a?"NHWC":"NCHW"})},1432139:(n,o,a)=>{r.Ze("InstanceNormalization",n,{epsilon:o,format:a?"NHWC":"NCHW"})},1432253:n=>{r.Ze("Range",n,void 0)},1432306:(n,o)=>{r.Ze("Einsum",n,{equation:Me(o)})},1432387:(n,o,a,s,l)=>{r.Ze("Pad",n,{mode:o,value:a,pads:s?Array.from(D().subarray(Number(s)>>>0,Number(l)>>>0)):[]})},1432530:(n,o,a,s,l,p)=>{r.Ze("BatchNormalization",n,{epsilon:o,momentum:a,spatial:!!l,trainingMode:!!s,format:p?"NHWC":"NCHW"})},1432699:(n,o,a,s,l,p)=>{r.Ze("BatchNormalization",n,{epsilon:o,momentum:a,spatial:!!l,trainingMode:!!s,format:p?"NHWC":"NCHW"})},1432868:(n,o,a)=>{r.Ze("CumSum",n,{exclusive:Number(o),reverse:Number(a)})},1432965:(n,o,a)=>{r.Ze("DequantizeLinear",n,{axis:o,blockSize:a})},1433055:(n,o,a,s,l)=>{r.Ze("GridSample",n,{align_corners:o,mode:Me(a),padding_mode:Me(s),format:l?"NHWC":"NCHW"})},1433225:(n,o,a,s,l)=>{r.Ze("GridSample",n,{align_corners:o,mode:Me(a),padding_mode:Me(s),format:l?"NHWC":"NCHW"})},1433395:(n,o)=>{r.Ze("ScatterND",n,{reduction:Me(o)})},1433480:(n,o,a,s,l,p,m,y,_)=>{r.Ze("Attention",n,{numHeads:o,isUnidirectional:a,maskFilterValue:s,scale:l,doRotary:p,qkvHiddenSizes:m?Array.from(D().subarray(Number(y)>>>0,Number(y)+m>>>0)):[],pastPresentShareBuffer:!!_})},1433752:n=>{r.Ze("BiasAdd",n,void 0)},1433807:n=>{r.Ze("BiasSplitGelu",n,void 0)},1433868:n=>{r.Ze("FastGelu",n,void 0)},1433924:(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q)=>{r.Ze("Conv",n,{format:E?"NHWC":"NCHW",auto_pad:o,dilations:a?Array.from(D().subarray(Number(a)>>>0,Number(s)>>>0)):[],group:l,kernel_shape:p?Array.from(D().subarray(Number(p)>>>0,Number(m)>>>0)):[],pads:y?Array.from(D().subarray(Number(y)>>>0,Number(_)>>>0)):[],strides:$?Array.from(D().subarray(Number($)>>>0,Number(T)>>>0)):[],w_is_const:()=>!!_e()[Number(O)>>>0],activation:Me(j),activation_params:G?Array.from(ve().subarray(Number(G)>>>0,Number(q)>>>0)):[]})},1434508:n=>{r.Ze("Gelu",n,void 0)},1434560:(n,o,a,s,l,p,m,y,_)=>{r.Ze("GroupQueryAttention",n,{numHeads:o,kvNumHeads:a,scale:s,softcap:l,doRotary:p,rotaryInterleaved:m,smoothSoftmax:y,localWindowSize:_})},1434777:(n,o,a,s)=>{r.Ze("LayerNormalization",n,{axis:o,epsilon:a,simplified:!!s})},1434888:(n,o,a,s)=>{r.Ze("LayerNormalization",n,{axis:o,epsilon:a,simplified:!!s})},1434999:(n,o,a,s,l,p)=>{r.Ze("MatMulNBits",n,{k:o,n:a,accuracyLevel:s,bits:l,blockSize:p})},1435126:(n,o,a,s,l,p)=>{r.Ze("MultiHeadAttention",n,{numHeads:o,isUnidirectional:a,maskFilterValue:s,scale:l,doRotary:p})},1435285:(n,o)=>{r.Ze("QuickGelu",n,{alpha:o})},1435349:(n,o,a,s,l)=>{r.Ze("RotaryEmbedding",n,{interleaved:!!o,numHeads:a,rotaryEmbeddingDim:s,scale:l})},1435488:(n,o,a)=>{r.Ze("SkipLayerNormalization",n,{epsilon:o,simplified:!!a})},1435590:(n,o,a)=>{r.Ze("SkipLayerNormalization",n,{epsilon:o,simplified:!!a})},1435692:(n,o,a,s)=>{r.Ze("GatherBlockQuantized",n,{gatherAxis:o,quantizeAxis:a,blockSize:s})},1435813:n=>{r.yj(n)},1435847:(n,o)=>r.Bj(Number(n),Number(o),r.ej.Ej,r.ej.errors)};function lh(n,o,a){return Ao(async()=>{await r.wj(Number(n),Number(o),Number(a))})}function dh(){return typeof wasmOffsetConverter<"u"}class In{name="ExitStatus";constructor(o){this.message=`Program terminated with exit(${o})`,this.status=o}}var Ki=n=>{n.terminate(),n.onmessage=()=>{}},An=[],Zi=n=>{xt.length==0&&(to(),eo(xt[0]));var o=xt.pop();if(!o)return 6;rr.push(o),zt[n.$i]=o,o.$i=n.$i;var a={aj:"run",Gj:n.Fj,hj:n.hj,$i:n.$i};return o.postMessage(a,n.nj),0},$t=0,Oe=(n,o,...a)=>{for(var s=2*a.length,l=R(),p=Fn(8*s),m=p>>>3,y=0;y<a.length;y++){var _=a[y];typeof _=="bigint"?(se[m+2*y]=1n,se[m+2*y+1]=_):(se[m+2*y]=0n,Ge()[m+2*y+1>>>0]=_)}return n=Qo(n,0,s,p,o),M(l),n};function En(n){if(f)return Oe(0,1,n);if(N=n,!(0<$t)){for(var o of rr)Ki(o);for(o of xt)Ki(o);xt=[],rr=[],zt={},fe=!0}x(0,new In(n))}function Qi(n){if(f)return Oe(1,0,n);kn(n)}var kn=n=>{if(N=n,f)throw Qi(n),"unwind";En(n)},xt=[],rr=[],Yi=[],zt={},Xi=n=>{var o=n.$i;delete zt[o],xt.push(n),rr.splice(rr.indexOf(n),1),n.$i=0,Yo(o)};function Ji(){Yi.forEach(n=>n())}var eo=n=>new Promise(o=>{n.onmessage=l=>{var p=(l=l.data).aj;if(l.gj&&l.gj!=Ar()){var m=zt[l.gj];m?m.postMessage(l,l.nj):P(`Internal error! Worker sent a message "${p}" to target pthread ${l.gj}, but that thread no longer exists!`)}else p==="checkMailbox"?wr():p==="spawnThread"?Zi(l):p==="cleanupThread"?Xi(zt[l.Hj]):p==="loaded"?(n.loaded=!0,o(n)):p==="alert"?alert(`Thread ${l.Ij}: ${l.text}`):l.target==="setimmediate"?n.postMessage(l):p==="callHandler"?r[l.pj](...l.args):p&&P(`worker sent an unknown command ${p}`)},n.onerror=l=>{throw P(`worker sent an error! ${l.filename}:${l.lineno}: ${l.message}`),l};var a,s=[];for(a of[])r.propertyIsEnumerable(a)&&s.push(a);n.postMessage({aj:"load",qj:s,Kj:B,Lj:V})});function to(){var n=new Worker((()=>{let o=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new o("ort.webgpu.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});xt.push(n)}var ch=n=>{Ue();var o=J()[n+52>>>2>>>0];n=J()[n+56>>>2>>>0],ea(o,o-n),M(o)},ph=(n,o)=>{$t=0,n=qn(n,o),0<$t?N=n:Hn(n)},yr=[],br=0;function fh(n){var o=new Pn(n>>>=0);if(_e()[o.Zi+12>>>0]==0){var a=1;_e()[o.Zi+12>>>0]=a,br--}return a=0,_e()[o.Zi+13>>>0]=a,yr.push(o),ra(n),ia(n)}var Gt=0,mh=()=>{U(0,0);var n=yr.pop();ta(n.ij),Gt=0};class Pn{constructor(o){this.ij=o,this.Zi=o-24}}function hh(n){throw Gt||=n>>>0,Gt}var _r=n=>{var o=Gt;if(!o)return ir(0),0;var a=new Pn(o);J()[a.Zi+16>>>2>>>0]=o;var s=J()[a.Zi+4>>>2>>>0];if(!s)return ir(0),o;for(var l of n){if(l===0||l===s)break;if(na(l,s,a.Zi+16))return ir(l),o}return ir(s),o};function gh(){return _r([])}function yh(n){return _r([n>>>0])}function bh(n,o){return _r([n>>>0,o>>>0])}function _h(n,o,a){return _r([n>>>0,o>>>0,a>>>0])}var wh=()=>{var n=yr.pop();n||yt("no exception to throw");var o=n.ij;if(_e()[n.Zi+13>>>0]==0){yr.push(n);var a=1;_e()[n.Zi+13>>>0]=a,a=0,_e()[n.Zi+12>>>0]=a,br++}throw Gt=o};function vh(n,o,a){var s=new Pn(n>>>=0);throw o>>>=0,a>>>=0,J()[s.Zi+16>>>2>>>0]=0,J()[s.Zi+4>>>2>>>0]=o,J()[s.Zi+8>>>2>>>0]=a,br++,Gt=n}var $h=()=>br;function ro(n,o,a,s){return f?Oe(2,1,n,o,a,s):no(n,o,a,s)}function no(n,o,a,s){if(n>>>=0,a>>>=0,s>>>=0,h===void 0)return 6;var l=[];return f&&l.length===0?ro(n,o>>>=0,a,s):(n={Fj:a,$i:n,hj:s,nj:l},f?(n.aj="spawnThread",postMessage(n,l),0):Zi(n))}var io=typeof TextDecoder<"u"?new TextDecoder:void 0,oo=(n,o=0,a=NaN)=>{var s=(o>>>=0)+a;for(a=o;n[a]&&!(a>=s);)++a;if(16<a-o&&n.buffer&&io)return io.decode(n.buffer instanceof ArrayBuffer?n.subarray(o,a):n.slice(o,a));for(s="";o<a;){var l=n[o++];if(128&l){var p=63&n[o++];if((224&l)==192)s+=String.fromCharCode((31&l)<<6|p);else{var m=63&n[o++];65536>(l=(240&l)==224?(15&l)<<12|p<<6|m:(7&l)<<18|p<<12|m<<6|63&n[o++])?s+=String.fromCharCode(l):(l-=65536,s+=String.fromCharCode(55296|l>>10,56320|1023&l))}}else s+=String.fromCharCode(l)}return s},Me=(n,o)=>(n>>>=0)?oo(Te(),n,o):"";function ao(n,o,a){return f?Oe(3,1,n,o,a):0}function so(n,o){if(f)return Oe(4,1,n,o)}var uo=n=>{for(var o=0,a=0;a<n.length;++a){var s=n.charCodeAt(a);127>=s?o++:2047>=s?o+=2:55296<=s&&57343>=s?(o+=4,++a):o+=3}return o},Ht=(n,o,a)=>{var s=Te();if(o>>>=0,0<a){var l=o;a=o+a-1;for(var p=0;p<n.length;++p){var m=n.charCodeAt(p);if(55296<=m&&57343>=m&&(m=65536+((1023&m)<<10)|1023&n.charCodeAt(++p)),127>=m){if(o>=a)break;s[o++>>>0]=m}else{if(2047>=m){if(o+1>=a)break;s[o++>>>0]=192|m>>6}else{if(65535>=m){if(o+2>=a)break;s[o++>>>0]=224|m>>12}else{if(o+3>=a)break;s[o++>>>0]=240|m>>18,s[o++>>>0]=128|m>>12&63}s[o++>>>0]=128|m>>6&63}s[o++>>>0]=128|63&m}}s[o>>>0]=0,n=o-l}else n=0;return n};function lo(n,o){if(f)return Oe(5,1,n,o)}function co(n,o,a){if(f)return Oe(6,1,n,o,a)}function po(n,o,a){return f?Oe(7,1,n,o,a):0}function fo(n,o){if(f)return Oe(8,1,n,o)}function mo(n,o,a){if(f)return Oe(9,1,n,o,a)}function ho(n,o,a,s){if(f)return Oe(10,1,n,o,a,s)}function go(n,o,a,s){if(f)return Oe(11,1,n,o,a,s)}function yo(n,o,a,s){if(f)return Oe(12,1,n,o,a,s)}function bo(n){if(f)return Oe(13,1,n)}function _o(n,o){if(f)return Oe(14,1,n,o)}function wo(n,o,a){if(f)return Oe(15,1,n,o,a)}var vo,Ct,xh=()=>yt(""),st=n=>{for(var o="";Te()[n>>>0];)o+=vo[Te()[n++>>>0]];return o},zn={},On={},Ch={};function bt(n,o,a={}){return function(s,l,p={}){var m=l.name;if(!s)throw new Ct(`type "${m}" must have a positive integer typeid pointer`);if(On.hasOwnProperty(s)){if(p.rj)return;throw new Ct(`Cannot register type '${m}' twice`)}On[s]=l,delete Ch[s],zn.hasOwnProperty(s)&&(l=zn[s],delete zn[s],l.forEach(y=>y()))}(n,o,a)}var $o=(n,o,a)=>{switch(o){case 1:return a?s=>_e()[s>>>0]:s=>Te()[s>>>0];case 2:return a?s=>Ee()[s>>>1>>>0]:s=>me()[s>>>1>>>0];case 4:return a?s=>D()[s>>>2>>>0]:s=>J()[s>>>2>>>0];case 8:return a?s=>se[s>>>3]:s=>Pe[s>>>3];default:throw new TypeError(`invalid integer width (${o}): ${n}`)}};function Sh(n,o,a){a>>>=0,bt(n>>>=0,{name:o=st(o>>>0),fromWireType:s=>s,toWireType:function(s,l){if(typeof l!="bigint"&&typeof l!="number")throw l=l===null?"null":(s=typeof l)=="object"||s==="array"||s==="function"?l.toString():""+l,new TypeError(`Cannot convert "${l}" to ${this.name}`);return typeof l=="number"&&(l=BigInt(l)),l},bj:St,readValueFromPointer:$o(o,a,o.indexOf("u")==-1),cj:null})}var St=8;function Th(n,o,a,s){bt(n>>>=0,{name:o=st(o>>>0),fromWireType:function(l){return!!l},toWireType:function(l,p){return p?a:s},bj:St,readValueFromPointer:function(l){return this.fromWireType(Te()[l>>>0])},cj:null})}var Bn=[],_t=[];function Dn(n){9<(n>>>=0)&&--_t[n+1]==0&&(_t[n]=void 0,Bn.push(n))}var qe=n=>{if(!n)throw new Ct("Cannot use deleted val. handle = "+n);return _t[n]},Xe=n=>{switch(n){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let o=Bn.pop()||_t.length;return _t[o]=n,_t[o+1]=1,o}};function Mn(n){return this.fromWireType(J()[n>>>2>>>0])}var Ih={name:"emscripten::val",fromWireType:n=>{var o=qe(n);return Dn(n),o},toWireType:(n,o)=>Xe(o),bj:St,readValueFromPointer:Mn,cj:null};function Ah(n){return bt(n>>>0,Ih)}var Eh=(n,o)=>{switch(o){case 4:return function(a){return this.fromWireType(ve()[a>>>2>>>0])};case 8:return function(a){return this.fromWireType(Ge()[a>>>3>>>0])};default:throw new TypeError(`invalid float width (${o}): ${n}`)}};function kh(n,o,a){a>>>=0,bt(n>>>=0,{name:o=st(o>>>0),fromWireType:s=>s,toWireType:(s,l)=>l,bj:St,readValueFromPointer:Eh(o,a),cj:null})}function Ph(n,o,a,s,l){if(n>>>=0,a>>>=0,o=st(o>>>0),l===-1&&(l=4294967295),l=y=>y,s===0){var p=32-8*a;l=y=>y<<p>>>p}var m=o.includes("unsigned")?function(y,_){return _>>>0}:function(y,_){return _};bt(n,{name:o,fromWireType:l,toWireType:m,bj:St,readValueFromPointer:$o(o,a,s!==0),cj:null})}function zh(n,o,a){function s(p){var m=J()[p>>>2>>>0];return p=J()[p+4>>>2>>>0],new l(_e().buffer,p,m)}var l=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][o];bt(n>>>=0,{name:a=st(a>>>0),fromWireType:s,bj:St,readValueFromPointer:s},{rj:!0})}function Oh(n,o){bt(n>>>=0,{name:o=st(o>>>0),fromWireType:function(a){for(var s,l=J()[a>>>2>>>0],p=a+4,m=p,y=0;y<=l;++y){var _=p+y;y!=l&&Te()[_>>>0]!=0||(m=Me(m,_-m),s===void 0?s=m:(s+="\0",s+=m),m=_+1)}return lt(a),s},toWireType:function(a,s){s instanceof ArrayBuffer&&(s=new Uint8Array(s));var l=typeof s=="string";if(!(l||s instanceof Uint8Array||s instanceof Uint8ClampedArray||s instanceof Int8Array))throw new Ct("Cannot pass non-string to std::string");var p=l?uo(s):s.length,m=Er(4+p+1),y=m+4;if(J()[m>>>2>>>0]=p,l)Ht(s,y,p+1);else if(l)for(l=0;l<p;++l){var _=s.charCodeAt(l);if(255<_)throw lt(m),new Ct("String has UTF-16 code units that do not fit in 8 bits");Te()[y+l>>>0]=_}else for(l=0;l<p;++l)Te()[y+l>>>0]=s[l];return a!==null&&a.push(lt,m),m},bj:St,readValueFromPointer:Mn,cj(a){lt(a)}})}var xo=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Bh=(n,o)=>{for(var a=n>>1,s=a+o/2;!(a>=s)&&me()[a>>>0];)++a;if(32<(a<<=1)-n&&xo)return xo.decode(Te().slice(n,a));for(a="",s=0;!(s>=o/2);++s){var l=Ee()[n+2*s>>>1>>>0];if(l==0)break;a+=String.fromCharCode(l)}return a},Dh=(n,o,a)=>{if(a??=2147483647,2>a)return 0;var s=o;a=(a-=2)<2*n.length?a/2:n.length;for(var l=0;l<a;++l){var p=n.charCodeAt(l);Ee()[o>>>1>>>0]=p,o+=2}return Ee()[o>>>1>>>0]=0,o-s},Mh=n=>2*n.length,Rh=(n,o)=>{for(var a=0,s="";!(a>=o/4);){var l=D()[n+4*a>>>2>>>0];if(l==0)break;++a,65536<=l?(l-=65536,s+=String.fromCharCode(55296|l>>10,56320|1023&l)):s+=String.fromCharCode(l)}return s},Uh=(n,o,a)=>{if(o>>>=0,a??=2147483647,4>a)return 0;var s=o;a=s+a-4;for(var l=0;l<n.length;++l){var p=n.charCodeAt(l);if(55296<=p&&57343>=p&&(p=65536+((1023&p)<<10)|1023&n.charCodeAt(++l)),D()[o>>>2>>>0]=p,(o+=4)+4>a)break}return D()[o>>>2>>>0]=0,o-s},jh=n=>{for(var o=0,a=0;a<n.length;++a){var s=n.charCodeAt(a);55296<=s&&57343>=s&&++a,o+=4}return o};function Nh(n,o,a){if(n>>>=0,o>>>=0,a=st(a>>>=0),o===2)var s=Bh,l=Dh,p=Mh,m=y=>me()[y>>>1>>>0];else o===4&&(s=Rh,l=Uh,p=jh,m=y=>J()[y>>>2>>>0]);bt(n,{name:a,fromWireType:y=>{for(var _,$=J()[y>>>2>>>0],T=y+4,E=0;E<=$;++E){var O=y+4+E*o;E!=$&&m(O)!=0||(T=s(T,O-T),_===void 0?_=T:(_+="\0",_+=T),T=O+o)}return lt(y),_},toWireType:(y,_)=>{if(typeof _!="string")throw new Ct(`Cannot pass non-string to C++ string type ${a}`);var $=p(_),T=Er(4+$+o);return J()[T>>>2>>>0]=$/o,l(_,T+4,$+o),y!==null&&y.push(lt,T),T},bj:St,readValueFromPointer:Mn,cj(y){lt(y)}})}function Vh(n,o){bt(n>>>=0,{sj:!0,name:o=st(o>>>0),bj:0,fromWireType:()=>{},toWireType:()=>{}})}function Wh(n){Gn(n>>>0,!c,1,!d,131072,!1),Ji()}var Rn=n=>{if(!fe)try{if(n(),!(0<$t))try{f?Hn(N):kn(N)}catch(o){o instanceof In||o=="unwind"||x(0,o)}}catch(o){o instanceof In||o=="unwind"||x(0,o)}};function Un(n){n>>>=0,typeof Atomics.Jj=="function"&&(Atomics.Jj(D(),n>>>2,n).value.then(wr),n+=128,Atomics.store(D(),n>>>2,1))}var wr=()=>{var n=Ar();n&&(Un(n),Rn(Jo))};function Lh(n,o){(n>>>=0)==o>>>0?setTimeout(wr):f?postMessage({gj:n,aj:"checkMailbox"}):(n=zt[n])&&n.postMessage({aj:"checkMailbox"})}var jn=[];function Gh(n,o,a,s,l){for(o>>>=0,s/=2,jn.length=s,a=l>>>0>>>3,l=0;l<s;l++)jn[l]=se[a+2*l]?se[a+2*l+1]:Ge()[a+2*l+1>>>0];return(o?Tn[o]:Rg[n])(...jn)}var Hh=()=>{$t=0};function Fh(n){n>>>=0,f?postMessage({aj:"cleanupThread",Hj:n}):Xi(zt[n])}function qh(n){}var vr=(n,o)=>{var a=On[n];if(a===void 0)throw n=qo(n),a=st(n),lt(n),new Ct(`${o} has unknown type ${a}`);return a},Co=(n,o,a)=>{var s=[];return n=n.toWireType(s,a),s.length&&(J()[o>>>2>>>0]=Xe(s)),n};function Kh(n,o,a){return o>>>=0,a>>>=0,n=qe(n>>>0),o=vr(o,"emval::as"),Co(o,a,n)}function Zh(n,o){return o>>>=0,n=qe(n>>>0),(o=vr(o,"emval::as")).toWireType(null,n)}var $r=n=>{try{n()}catch(o){yt(o)}},Tt=0,ut=null,So=0,xr=[],To={},Io={},Qh=0,Nn=null,Yh=[];function Ao(n){return function(o){if(!fe){if(Tt===0){var a=!1,s=!1;o((l=0)=>{if(!fe&&(So=l,a=!0,s)){Tt=2,$r(()=>Rl(ut)),typeof MainLoop<"u"&&MainLoop.oj&&MainLoop.resume(),l=!1;try{var p=function(){var _=D()[ut+8>>>2>>>0];return _=z[Io[_]],--$t,_()}()}catch(_){p=_,l=!0}var m=!1;if(!ut){var y=Nn;y&&(Nn=null,(l?y.reject:y.resolve)(p),m=!0)}if(l&&!m)throw p}}),s=!0,a||(Tt=1,ut=function(){var l=Er(65548),p=l+12;J()[l>>>2>>>0]=p,J()[l+4>>>2>>>0]=p+65536,p=xr[0];var m=To[p];return m===void 0&&(m=Qh++,To[p]=m,Io[m]=p),p=m,D()[l+8>>>2>>>0]=p,l}(),typeof MainLoop<"u"&&MainLoop.oj&&MainLoop.pause(),$r(()=>Dl(ut)))}else Tt===2?(Tt=0,$r(Ul),lt(ut),ut=null,Yh.forEach(Rn)):yt(`invalid state: ${Tt}`);return So}}(o=>{n().then(o)})}function Xh(n){return n>>>=0,Ao(async()=>{var o=await qe(n);return Xe(o)})}var Cr=[];function Jh(n,o,a,s){return a>>>=0,s>>>=0,(n=Cr[n>>>0])(null,o=qe(o>>>0),a,s)}var eg={},Sr=n=>{var o=eg[n];return o===void 0?st(n):o};function tg(n,o,a,s,l){return a>>>=0,s>>>=0,l>>>=0,(n=Cr[n>>>0])(o=qe(o>>>0),o[a=Sr(a)],s,l)}var Eo=()=>typeof globalThis=="object"?globalThis:Function("return this")();function rg(n){return(n>>>=0)==0?Xe(Eo()):(n=Sr(n),Xe(Eo()[n]))}var ng=n=>{var o=Cr.length;return Cr.push(n),o},ig=(n,o)=>{for(var a=Array(n),s=0;s<n;++s)a[s]=vr(J()[o+4*s>>>2>>>0],"parameter "+s);return a},ko=(n,o)=>Object.defineProperty(o,"name",{value:n});function og(n,o,a){var s=(o=ig(n,o>>>0)).shift();n--;var l=`return function (obj, func, destructorsRef, args) {
`,p=0,m=[];a===0&&m.push("obj");for(var y=["retType"],_=[s],$=0;$<n;++$)m.push("arg"+$),y.push("argType"+$),_.push(o[$]),l+=`  var arg${$} = argType${$}.readValueFromPointer(args${p?"+"+p:""});
`,p+=o[$].bj;return l+=`  var rv = ${a===1?"new func":"func.call"}(${m.join(", ")});
`,s.sj||(y.push("emval_returnValue"),_.push(Co),l+=`  return emval_returnValue(retType, destructorsRef, rv);
`),y.push(l+`};
`),n=function(T){var E=Function;if(!(E instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof E} which is not a function`);var O=ko(E.name||"unknownFunctionName",function(){});return O.prototype=E.prototype,O=new O,(T=E.apply(O,T))instanceof Object?T:O}(y)(..._),a=`methodCaller<(${o.map(T=>T.name).join(", ")}) => ${s.name}>`,ng(ko(a,n))}function ag(n){return n=Sr(n>>>0),Xe(r[n])}function sg(n,o){return o>>>=0,n=qe(n>>>0),o=qe(o),Xe(n[o])}function ug(n){9<(n>>>=0)&&(_t[n+1]+=1)}function lg(){return Xe([])}function dg(n){n=qe(n>>>0);for(var o=Array(n.length),a=0;a<n.length;a++)o[a]=n[a];return Xe(o)}function cg(n){return Xe(Sr(n>>>0))}function pg(){return Xe({})}function fg(n){for(var o=qe(n>>>=0);o.length;){var a=o.pop();o.pop()(a)}Dn(n)}function mg(n,o,a){o>>>=0,a>>>=0,n=qe(n>>>0),o=qe(o),a=qe(a),n[o]=a}function hg(n,o){return o>>>=0,n=(n=vr(n>>>0,"_emval_take_value")).readValueFromPointer(o),Xe(n)}function gg(n,o){n=-9007199254740992>n||9007199254740992<n?NaN:Number(n),o>>>=0,n=new Date(1e3*n),D()[o>>>2>>>0]=n.getUTCSeconds(),D()[o+4>>>2>>>0]=n.getUTCMinutes(),D()[o+8>>>2>>>0]=n.getUTCHours(),D()[o+12>>>2>>>0]=n.getUTCDate(),D()[o+16>>>2>>>0]=n.getUTCMonth(),D()[o+20>>>2>>>0]=n.getUTCFullYear()-1900,D()[o+24>>>2>>>0]=n.getUTCDay(),n=(n.getTime()-Date.UTC(n.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,D()[o+28>>>2>>>0]=n}var Po=n=>n%4==0&&(n%100!=0||n%400==0),zo=[0,31,60,91,121,152,182,213,244,274,305,335],Oo=[0,31,59,90,120,151,181,212,243,273,304,334];function yg(n,o){n=-9007199254740992>n||9007199254740992<n?NaN:Number(n),o>>>=0,n=new Date(1e3*n),D()[o>>>2>>>0]=n.getSeconds(),D()[o+4>>>2>>>0]=n.getMinutes(),D()[o+8>>>2>>>0]=n.getHours(),D()[o+12>>>2>>>0]=n.getDate(),D()[o+16>>>2>>>0]=n.getMonth(),D()[o+20>>>2>>>0]=n.getFullYear()-1900,D()[o+24>>>2>>>0]=n.getDay();var a=(Po(n.getFullYear())?zo:Oo)[n.getMonth()]+n.getDate()-1|0;D()[o+28>>>2>>>0]=a,D()[o+36>>>2>>>0]=-60*n.getTimezoneOffset(),a=new Date(n.getFullYear(),6,1).getTimezoneOffset();var s=new Date(n.getFullYear(),0,1).getTimezoneOffset();n=0|(a!=s&&n.getTimezoneOffset()==Math.min(s,a)),D()[o+32>>>2>>>0]=n}function bg(n){n>>>=0;var o=new Date(D()[n+20>>>2>>>0]+1900,D()[n+16>>>2>>>0],D()[n+12>>>2>>>0],D()[n+8>>>2>>>0],D()[n+4>>>2>>>0],D()[n>>>2>>>0],0),a=D()[n+32>>>2>>>0],s=o.getTimezoneOffset(),l=new Date(o.getFullYear(),6,1).getTimezoneOffset(),p=new Date(o.getFullYear(),0,1).getTimezoneOffset(),m=Math.min(p,l);return 0>a?D()[n+32>>>2>>>0]=+(l!=p&&m==s):0<a!=(m==s)&&(l=Math.max(p,l),o.setTime(o.getTime()+6e4*((0<a?m:l)-s))),D()[n+24>>>2>>>0]=o.getDay(),a=(Po(o.getFullYear())?zo:Oo)[o.getMonth()]+o.getDate()-1|0,D()[n+28>>>2>>>0]=a,D()[n>>>2>>>0]=o.getSeconds(),D()[n+4>>>2>>>0]=o.getMinutes(),D()[n+8>>>2>>>0]=o.getHours(),D()[n+12>>>2>>>0]=o.getDate(),D()[n+16>>>2>>>0]=o.getMonth(),D()[n+20>>>2>>>0]=o.getYear(),n=o.getTime(),BigInt(isNaN(n)?-1:n/1e3)}function Bo(n,o,a,s,l,p,m){return f?Oe(16,1,n,o,a,s,l,p,m):-52}function Do(n,o,a,s,l,p){if(f)return Oe(17,1,n,o,a,s,l,p)}var nr={},_g=()=>performance.timeOrigin+performance.now();function Mo(n,o){if(f)return Oe(18,1,n,o);if(nr[n]&&(clearTimeout(nr[n].id),delete nr[n]),!o)return 0;var a=setTimeout(()=>{delete nr[n],Rn(()=>Xo(n,performance.timeOrigin+performance.now()))},o);return nr[n]={id:a,Pj:o},0}function wg(n,o,a,s){n>>>=0,o>>>=0,a>>>=0,s>>>=0;var l=new Date().getFullYear(),p=new Date(l,0,1).getTimezoneOffset();l=new Date(l,6,1).getTimezoneOffset();var m=Math.max(p,l);J()[n>>>2>>>0]=60*m,D()[o>>>2>>>0]=+(p!=l),n=(o=y=>{var _=Math.abs(y);return`UTC${0<=y?"-":"+"}${String(Math.floor(_/60)).padStart(2,"0")}${String(_%60).padStart(2,"0")}`})(p),o=o(l),l<p?(Ht(n,a,17),Ht(o,s,17)):(Ht(n,s,17),Ht(o,a,17))}var vg=()=>Date.now(),$g=1;function xg(n,o,a){if(!(0<=n&&3>=n))return 28;if(n===0)n=Date.now();else{if(!$g)return 52;n=performance.timeOrigin+performance.now()}return se[a>>>0>>>3]=BigInt(Math.round(1e6*n)),0}var Vn=[],Ro=(n,o)=>{Vn.length=0;for(var a;a=Te()[n++>>>0];){var s=a!=105;o+=(s&=a!=112)&&o%8?4:0,Vn.push(a==112?J()[o>>>2>>>0]:a==106?se[o>>>3]:a==105?D()[o>>>2>>>0]:Ge()[o>>>3>>>0]),o+=s?8:4}return Vn};function Cg(n,o,a){return n>>>=0,o=Ro(o>>>0,a>>>0),Tn[n](...o)}function Sg(n,o,a){return n>>>=0,o=Ro(o>>>0,a>>>0),Tn[n](...o)}var Tg=()=>{};function Ig(n,o){return P(Me(n>>>0,o>>>0))}var Ag=()=>{throw $t+=1,"unwind"};function Eg(){return 4294901760}var kg=()=>navigator.hardwareConcurrency;function Pg(){return yt("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function zg(n){n>>>=0;var o=Te().length;if(n<=o||4294901760<n)return!1;for(var a=1;4>=a;a*=2){var s=o*(1+.2/a);s=Math.min(s,n+100663296);e:{s=(Math.min(4294901760,65536*Math.ceil(Math.max(n,s)/65536))-B.buffer.byteLength+65535)/65536|0;try{B.grow(s),Ue();var l=1;break e}catch{}l=void 0}if(l)return!0}return!1}var Tr=()=>(yt("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Ft={},Uo=n=>{n.forEach(o=>{var a=Tr();a&&(Ft[a]=o)})};function Og(){var n=Error().stack.toString().split(`
`);return n[0]=="Error"&&n.shift(),Uo(n),Ft.mj=Tr(),Ft.Dj=n,Ft.mj}function Bg(n,o,a){if(n>>>=0,o>>>=0,Ft.mj==n)var s=Ft.Dj;else(s=Error().stack.toString().split(`
`))[0]=="Error"&&s.shift(),Uo(s);for(var l=3;s[l]&&Tr()!=n;)++l;for(n=0;n<a&&s[n+l];++n)D()[o+4*n>>>2>>>0]=Tr();return n}var Wn,Ln={},jo=()=>{if(!Wn){var n,o={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(n in Ln)Ln[n]===void 0?delete o[n]:o[n]=Ln[n];var a=[];for(n in o)a.push(`${n}=${o[n]}`);Wn=a}return Wn};function No(n,o){if(f)return Oe(19,1,n,o);n>>>=0,o>>>=0;var a=0;return jo().forEach((s,l)=>{var p=o+a;for(l=J()[n+4*l>>>2>>>0]=p,p=0;p<s.length;++p)_e()[l++>>>0]=s.charCodeAt(p);_e()[l>>>0]=0,a+=s.length+1}),0}function Vo(n,o){if(f)return Oe(20,1,n,o);n>>>=0,o>>>=0;var a=jo();J()[n>>>2>>>0]=a.length;var s=0;return a.forEach(l=>s+=l.length+1),J()[o>>>2>>>0]=s,0}function Wo(n){return f?Oe(21,1,n):52}function Lo(n,o,a,s){return f?Oe(22,1,n,o,a,s):52}function Go(n,o,a,s){return f?Oe(23,1,n,o,a,s):70}var Dg=[null,[],[]];function Ho(n,o,a,s){if(f)return Oe(24,1,n,o,a,s);o>>>=0,a>>>=0,s>>>=0;for(var l=0,p=0;p<a;p++){var m=J()[o>>>2>>>0],y=J()[o+4>>>2>>>0];o+=8;for(var _=0;_<y;_++){var $=Te()[m+_>>>0],T=Dg[n];$===0||$===10?((n===1?I:P)(oo(T)),T.length=0):T.push($)}l+=y}return J()[s>>>2>>>0]=l,0}function Mg(n){return n>>>0}f||function(){for(var n=r.numThreads-1;n--;)to();An.unshift(()=>{Lt++,function(o){f?o():Promise.all(xt.map(eo)).then(o)}(()=>Fi())})}();for(var Fo=Array(256),Ir=0;256>Ir;++Ir)Fo[Ir]=String.fromCharCode(Ir);vo=Fo,Ct=r.BindingError=class extends Error{constructor(n){super(n),this.name="BindingError"}},r.InternalError=class extends Error{constructor(n){super(n),this.name="InternalError"}},_t.push(0,1,void 0,1,null,1,!0,1,!1,1),r.count_emval_handles=()=>_t.length/2-5-Bn.length;var z,Rg=[En,Qi,ro,ao,so,lo,co,po,fo,mo,ho,go,yo,bo,_o,wo,Bo,Do,Mo,No,Vo,Wo,Lo,Go,Ho];(async function(){function n(s,l){return z=s.exports,z=function(){var p=z,m={};for(let[y,_]of Object.entries(p))m[y]=typeof _=="function"?(...$)=>{xr.push(y);try{return _(...$)}finally{fe||(xr.pop(),ut&&Tt===1&&xr.length===0&&(Tt=0,$t+=1,$r(Ml),typeof Fibers<"u"&&Fibers.Qj()))}}:_;return m}(),z=function(){var p=z,m=_=>$=>_($)>>>0,y=_=>()=>_()>>>0;return(p=Object.assign({},p)).qe=m(p.qe),p.Ve=y(p.Ve),p.Xe=m(p.Xe),p.kf=m(p.kf),p.lf=y(p.lf),p.pf=m(p.pf),p}(),Yi.push(z.Ye),V=l,Fi(),z}Lt++;var o=qi();if(r.instantiateWasm)return new Promise(s=>{r.instantiateWasm(o,(l,p)=>{n(l,p),s(l.exports)})});if(f)return new Promise(s=>{ze=l=>{var p=new WebAssembly.Instance(l,qi());s(n(p,l))}});Wt??=r.locateFile?r.locateFile?r.locateFile("ort-wasm-simd-threaded.jsep.wasm",S):S+"ort-wasm-simd-threaded.jsep.wasm":new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href;try{var a=await async function(s){var l=Wt;if(!ae&&typeof WebAssembly.instantiateStreaming=="function"&&!le(l))try{var p=fetch(l,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(p,s)}catch(m){P(`wasm streaming compile failed: ${m}`),P("falling back to ArrayBuffer instantiation")}return async function(m,y){try{var _=await async function($){if(!ae)try{var T=await w($);return new Uint8Array(T)}catch{}if($==Wt&&ae)$=new Uint8Array(ae);else{if(!v)throw"both async and sync fetching of the wasm failed";$=v($)}return $}(m);return await WebAssembly.instantiate(_,y)}catch($){P(`failed to asynchronously prepare wasm: ${$}`),yt($)}}(l,s)}(o);return n(a.instance,a.module)}catch(s){return i(s),Promise.reject(s)}})();var qo=n=>(qo=z.qe)(n),Ko=()=>(Ko=z.re)();r._OrtInit=(n,o)=>(r._OrtInit=z.se)(n,o),r._OrtGetLastError=(n,o)=>(r._OrtGetLastError=z.te)(n,o),r._OrtCreateSessionOptions=(n,o,a,s,l,p,m,y,_,$)=>(r._OrtCreateSessionOptions=z.ue)(n,o,a,s,l,p,m,y,_,$),r._OrtAppendExecutionProvider=(n,o,a,s,l)=>(r._OrtAppendExecutionProvider=z.ve)(n,o,a,s,l),r._OrtAddFreeDimensionOverride=(n,o,a)=>(r._OrtAddFreeDimensionOverride=z.we)(n,o,a),r._OrtAddSessionConfigEntry=(n,o,a)=>(r._OrtAddSessionConfigEntry=z.xe)(n,o,a),r._OrtReleaseSessionOptions=n=>(r._OrtReleaseSessionOptions=z.ye)(n),r._OrtCreateSession=(n,o,a)=>(r._OrtCreateSession=z.ze)(n,o,a),r._OrtReleaseSession=n=>(r._OrtReleaseSession=z.Ae)(n),r._OrtGetInputOutputCount=(n,o,a)=>(r._OrtGetInputOutputCount=z.Be)(n,o,a),r._OrtGetInputName=(n,o)=>(r._OrtGetInputName=z.Ce)(n,o),r._OrtGetOutputName=(n,o)=>(r._OrtGetOutputName=z.De)(n,o),r._OrtFree=n=>(r._OrtFree=z.Ee)(n),r._OrtCreateTensor=(n,o,a,s,l,p)=>(r._OrtCreateTensor=z.Fe)(n,o,a,s,l,p),r._OrtGetTensorData=(n,o,a,s,l)=>(r._OrtGetTensorData=z.Ge)(n,o,a,s,l),r._OrtReleaseTensor=n=>(r._OrtReleaseTensor=z.He)(n),r._OrtCreateRunOptions=(n,o,a,s)=>(r._OrtCreateRunOptions=z.Ie)(n,o,a,s),r._OrtAddRunConfigEntry=(n,o,a)=>(r._OrtAddRunConfigEntry=z.Je)(n,o,a),r._OrtReleaseRunOptions=n=>(r._OrtReleaseRunOptions=z.Ke)(n),r._OrtCreateBinding=n=>(r._OrtCreateBinding=z.Le)(n),r._OrtBindInput=(n,o,a)=>(r._OrtBindInput=z.Me)(n,o,a),r._OrtBindOutput=(n,o,a,s)=>(r._OrtBindOutput=z.Ne)(n,o,a,s),r._OrtClearBoundOutputs=n=>(r._OrtClearBoundOutputs=z.Oe)(n),r._OrtReleaseBinding=n=>(r._OrtReleaseBinding=z.Pe)(n),r._OrtRunWithBinding=(n,o,a,s,l)=>(r._OrtRunWithBinding=z.Qe)(n,o,a,s,l),r._OrtRun=(n,o,a,s,l,p,m,y)=>(r._OrtRun=z.Re)(n,o,a,s,l,p,m,y),r._OrtEndProfiling=n=>(r._OrtEndProfiling=z.Se)(n),r._JsepOutput=(n,o,a)=>(r._JsepOutput=z.Te)(n,o,a),r._JsepGetNodeName=n=>(r._JsepGetNodeName=z.Ue)(n);var Ar=()=>(Ar=z.Ve)(),lt=r._free=n=>(lt=r._free=z.We)(n),Er=r._malloc=n=>(Er=r._malloc=z.Xe)(n),Gn=(n,o,a,s,l,p)=>(Gn=z._e)(n,o,a,s,l,p),Zo=()=>(Zo=z.$e)(),Qo=(n,o,a,s,l)=>(Qo=z.af)(n,o,a,s,l),Yo=n=>(Yo=z.bf)(n),Hn=n=>(Hn=z.cf)(n),Xo=(n,o)=>(Xo=z.df)(n,o),Jo=()=>(Jo=z.ef)(),U=(n,o)=>(U=z.ff)(n,o),ir=n=>(ir=z.gf)(n),ea=(n,o)=>(ea=z.hf)(n,o),M=n=>(M=z.jf)(n),Fn=n=>(Fn=z.kf)(n),R=()=>(R=z.lf)(),ta=n=>(ta=z.mf)(n),ra=n=>(ra=z.nf)(n),na=(n,o,a)=>(na=z.of)(n,o,a),ia=n=>(ia=z.pf)(n),oa=r.dynCall_vii=(n,o,a)=>(oa=r.dynCall_vii=z.qf)(n,o,a),aa=r.dynCall_iiii=(n,o,a,s)=>(aa=r.dynCall_iiii=z.rf)(n,o,a,s),sa=r.dynCall_iii=(n,o,a)=>(sa=r.dynCall_iii=z.sf)(n,o,a),qn=r.dynCall_ii=(n,o)=>(qn=r.dynCall_ii=z.tf)(n,o),ua=r.dynCall_iiiiiii=(n,o,a,s,l,p,m)=>(ua=r.dynCall_iiiiiii=z.uf)(n,o,a,s,l,p,m),la=r.dynCall_vi=(n,o)=>(la=r.dynCall_vi=z.vf)(n,o),da=r.dynCall_v=n=>(da=r.dynCall_v=z.wf)(n),ca=r.dynCall_iiiiii=(n,o,a,s,l,p)=>(ca=r.dynCall_iiiiii=z.xf)(n,o,a,s,l,p),pa=r.dynCall_iiiii=(n,o,a,s,l)=>(pa=r.dynCall_iiiii=z.yf)(n,o,a,s,l),fa=r.dynCall_viii=(n,o,a,s)=>(fa=r.dynCall_viii=z.zf)(n,o,a,s),ma=r.dynCall_viiiii=(n,o,a,s,l,p)=>(ma=r.dynCall_viiiii=z.Af)(n,o,a,s,l,p),ha=r.dynCall_viiii=(n,o,a,s,l)=>(ha=r.dynCall_viiii=z.Bf)(n,o,a,s,l),ga=r.dynCall_viiiiii=(n,o,a,s,l,p,m)=>(ga=r.dynCall_viiiiii=z.Cf)(n,o,a,s,l,p,m),ya=r.dynCall_viiiiij=(n,o,a,s,l,p,m)=>(ya=r.dynCall_viiiiij=z.Df)(n,o,a,s,l,p,m),ba=r.dynCall_viiji=(n,o,a,s,l)=>(ba=r.dynCall_viiji=z.Ef)(n,o,a,s,l),_a=r.dynCall_viiiiiiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E)=>(_a=r.dynCall_viiiiiiiiiii=z.Ff)(n,o,a,s,l,p,m,y,_,$,T,E),wa=r.dynCall_viiijjjii=(n,o,a,s,l,p,m,y,_)=>(wa=r.dynCall_viiijjjii=z.Gf)(n,o,a,s,l,p,m,y,_),va=r.dynCall_iij=(n,o,a)=>(va=r.dynCall_iij=z.Hf)(n,o,a),$a=r.dynCall_iif=(n,o,a)=>($a=r.dynCall_iif=z.If)(n,o,a),xa=r.dynCall_iid=(n,o,a)=>(xa=r.dynCall_iid=z.Jf)(n,o,a),Ca=r.dynCall_jii=(n,o,a)=>(Ca=r.dynCall_jii=z.Kf)(n,o,a),Sa=r.dynCall_i=n=>(Sa=r.dynCall_i=z.Lf)(n),Ta=r.dynCall_viiiiiiii=(n,o,a,s,l,p,m,y,_)=>(Ta=r.dynCall_viiiiiiii=z.Mf)(n,o,a,s,l,p,m,y,_),Ia=r.dynCall_iiiiij=(n,o,a,s,l,p)=>(Ia=r.dynCall_iiiiij=z.Nf)(n,o,a,s,l,p),Aa=r.dynCall_j=n=>(Aa=r.dynCall_j=z.Of)(n),Ea=r.dynCall_vij=(n,o,a)=>(Ea=r.dynCall_vij=z.Pf)(n,o,a),ka=r.dynCall_iiiiiiii=(n,o,a,s,l,p,m,y)=>(ka=r.dynCall_iiiiiiii=z.Qf)(n,o,a,s,l,p,m,y),Pa=r.dynCall_viijjjiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E)=>(Pa=r.dynCall_viijjjiiiiii=z.Rf)(n,o,a,s,l,p,m,y,_,$,T,E),za=r.dynCall_viiiiiiiii=(n,o,a,s,l,p,m,y,_,$)=>(za=r.dynCall_viiiiiiiii=z.Sf)(n,o,a,s,l,p,m,y,_,$),Oa=r.dynCall_ji=(n,o)=>(Oa=r.dynCall_ji=z.Tf)(n,o),Ba=r.dynCall_viiijiiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E)=>(Ba=r.dynCall_viiijiiiiiii=z.Uf)(n,o,a,s,l,p,m,y,_,$,T,E),Da=r.dynCall_viiiiiii=(n,o,a,s,l,p,m,y)=>(Da=r.dynCall_viiiiiii=z.Vf)(n,o,a,s,l,p,m,y),Ma=r.dynCall_iiiiiiiiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O)=>(Ma=r.dynCall_iiiiiiiiiiiii=z.Wf)(n,o,a,s,l,p,m,y,_,$,T,E,O),Ra=r.dynCall_viiiiiiiiii=(n,o,a,s,l,p,m,y,_,$,T)=>(Ra=r.dynCall_viiiiiiiiii=z.Xf)(n,o,a,s,l,p,m,y,_,$,T),Ua=r.dynCall_viiiiiiiiiiiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X)=>(Ua=r.dynCall_viiiiiiiiiiiiiiii=z.Yf)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X),ja=r.dynCall_iiiiiiiij=(n,o,a,s,l,p,m,y,_)=>(ja=r.dynCall_iiiiiiiij=z.Zf)(n,o,a,s,l,p,m,y,_),Na=r.dynCall_vijii=(n,o,a,s,l)=>(Na=r.dynCall_vijii=z._f)(n,o,a,s,l),Va=r.dynCall_iiiiiiiii=(n,o,a,s,l,p,m,y,_)=>(Va=r.dynCall_iiiiiiiii=z.$f)(n,o,a,s,l,p,m,y,_),Wa=r.dynCall_iiiiijiiiii=(n,o,a,s,l,p,m,y,_,$,T)=>(Wa=r.dynCall_iiiiijiiiii=z.ag)(n,o,a,s,l,p,m,y,_,$,T),La=r.dynCall_iiiiiiiiiii=(n,o,a,s,l,p,m,y,_,$,T)=>(La=r.dynCall_iiiiiiiiiii=z.bg)(n,o,a,s,l,p,m,y,_,$,T),Ga=r.dynCall_vijjjiiiiij=(n,o,a,s,l,p,m,y,_,$,T)=>(Ga=r.dynCall_vijjjiiiiij=z.cg)(n,o,a,s,l,p,m,y,_,$,T),Ha=r.dynCall_viij=(n,o,a,s)=>(Ha=r.dynCall_viij=z.dg)(n,o,a,s),Fa=r.dynCall_viijj=(n,o,a,s,l)=>(Fa=r.dynCall_viijj=z.eg)(n,o,a,s,l),qa=r.dynCall_fi=(n,o)=>(qa=r.dynCall_fi=z.fg)(n,o),Ka=r.dynCall_fii=(n,o,a)=>(Ka=r.dynCall_fii=z.gg)(n,o,a),Za=r.dynCall_di=(n,o)=>(Za=r.dynCall_di=z.hg)(n,o),Qa=r.dynCall_dii=(n,o,a)=>(Qa=r.dynCall_dii=z.ig)(n,o,a),Ya=r.dynCall_vijj=(n,o,a,s)=>(Ya=r.dynCall_vijj=z.jg)(n,o,a,s),Xa=r.dynCall_viji=(n,o,a,s)=>(Xa=r.dynCall_viji=z.kg)(n,o,a,s),Ja=r.dynCall_viijiii=(n,o,a,s,l,p,m)=>(Ja=r.dynCall_viijiii=z.lg)(n,o,a,s,l,p,m),es=r.dynCall_iiiiiiiiii=(n,o,a,s,l,p,m,y,_,$)=>(es=r.dynCall_iiiiiiiiii=z.mg)(n,o,a,s,l,p,m,y,_,$),ts=r.dynCall_viiij=(n,o,a,s,l)=>(ts=r.dynCall_viiij=z.ng)(n,o,a,s,l),rs=r.dynCall_vijji=(n,o,a,s,l)=>(rs=r.dynCall_vijji=z.og)(n,o,a,s,l),ns=r.dynCall_viid=(n,o,a,s)=>(ns=r.dynCall_viid=z.pg)(n,o,a,s),is=r.dynCall_vid=(n,o,a)=>(is=r.dynCall_vid=z.qg)(n,o,a),os=r.dynCall_viiijiiiii=(n,o,a,s,l,p,m,y,_,$)=>(os=r.dynCall_viiijiiiii=z.rg)(n,o,a,s,l,p,m,y,_,$),as=r.dynCall_jj=(n,o)=>(as=r.dynCall_jj=z.sg)(n,o),ss=r.dynCall_iiiijii=(n,o,a,s,l,p,m)=>(ss=r.dynCall_iiiijii=z.tg)(n,o,a,s,l,p,m),us=r.dynCall_iiijii=(n,o,a,s,l,p)=>(us=r.dynCall_iiijii=z.ug)(n,o,a,s,l,p),ls=r.dynCall_viiiiiiiiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j)=>(ls=r.dynCall_viiiiiiiiiiiii=z.vg)(n,o,a,s,l,p,m,y,_,$,T,E,O,j),ds=r.dynCall_iiiiiiiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E)=>(ds=r.dynCall_iiiiiiiiiiii=z.wg)(n,o,a,s,l,p,m,y,_,$,T,E),cs=r.dynCall_iiijjj=(n,o,a,s,l,p)=>(cs=r.dynCall_iiijjj=z.xg)(n,o,a,s,l,p),ps=r.dynCall_ij=(n,o)=>(ps=r.dynCall_ij=z.yg)(n,o),fs=r.dynCall_viiiiji=(n,o,a,s,l,p,m)=>(fs=r.dynCall_viiiiji=z.zg)(n,o,a,s,l,p,m),ms=r.dynCall_iijjji=(n,o,a,s,l,p)=>(ms=r.dynCall_iijjji=z.Ag)(n,o,a,s,l,p),hs=r.dynCall_viijii=(n,o,a,s,l,p)=>(hs=r.dynCall_viijii=z.Bg)(n,o,a,s,l,p),gs=r.dynCall_vjiiiiii=(n,o,a,s,l,p,m,y)=>(gs=r.dynCall_vjiiiiii=z.Cg)(n,o,a,s,l,p,m,y),ys=r.dynCall_jiii=(n,o,a,s)=>(ys=r.dynCall_jiii=z.Dg)(n,o,a,s),bs=r.dynCall_vijjiiiii=(n,o,a,s,l,p,m,y,_)=>(bs=r.dynCall_vijjiiiii=z.Eg)(n,o,a,s,l,p,m,y,_),_s=r.dynCall_jiij=(n,o,a,s)=>(_s=r.dynCall_jiij=z.Fg)(n,o,a,s),ws=r.dynCall_iijijjijiji=(n,o,a,s,l,p,m,y,_,$,T)=>(ws=r.dynCall_iijijjijiji=z.Gg)(n,o,a,s,l,p,m,y,_,$,T),vs=r.dynCall_iijijji=(n,o,a,s,l,p,m)=>(vs=r.dynCall_iijijji=z.Hg)(n,o,a,s,l,p,m),$s=r.dynCall_ijijji=(n,o,a,s,l,p)=>($s=r.dynCall_ijijji=z.Ig)(n,o,a,s,l,p),xs=r.dynCall_iiiiiiij=(n,o,a,s,l,p,m,y)=>(xs=r.dynCall_iiiiiiij=z.Jg)(n,o,a,s,l,p,m,y),Cs=r.dynCall_viiijjiii=(n,o,a,s,l,p,m,y,_)=>(Cs=r.dynCall_viiijjiii=z.Kg)(n,o,a,s,l,p,m,y,_),Ss=r.dynCall_vif=(n,o,a)=>(Ss=r.dynCall_vif=z.Lg)(n,o,a),Ts=r.dynCall_viif=(n,o,a,s)=>(Ts=r.dynCall_viif=z.Mg)(n,o,a,s),Is=r.dynCall_iiiiijji=(n,o,a,s,l,p,m,y)=>(Is=r.dynCall_iiiiijji=z.Ng)(n,o,a,s,l,p,m,y),As=r.dynCall_iiiiji=(n,o,a,s,l,p)=>(As=r.dynCall_iiiiji=z.Og)(n,o,a,s,l,p),Es=r.dynCall_iiiifi=(n,o,a,s,l,p)=>(Es=r.dynCall_iiiifi=z.Pg)(n,o,a,s,l,p),ks=r.dynCall_iiiiiiiiijii=(n,o,a,s,l,p,m,y,_,$,T,E)=>(ks=r.dynCall_iiiiiiiiijii=z.Qg)(n,o,a,s,l,p,m,y,_,$,T,E),Ps=r.dynCall_iiiijjii=(n,o,a,s,l,p,m,y)=>(Ps=r.dynCall_iiiijjii=z.Rg)(n,o,a,s,l,p,m,y),zs=r.dynCall_iiij=(n,o,a,s)=>(zs=r.dynCall_iiij=z.Sg)(n,o,a,s),Os=r.dynCall_iiiiiijjjii=(n,o,a,s,l,p,m,y,_,$,T)=>(Os=r.dynCall_iiiiiijjjii=z.Tg)(n,o,a,s,l,p,m,y,_,$,T),Bs=r.dynCall_iiijiii=(n,o,a,s,l,p,m)=>(Bs=r.dynCall_iiijiii=z.Ug)(n,o,a,s,l,p,m),Ds=r.dynCall_iiiiiiiijjjfi=(n,o,a,s,l,p,m,y,_,$,T,E,O)=>(Ds=r.dynCall_iiiiiiiijjjfi=z.Vg)(n,o,a,s,l,p,m,y,_,$,T,E,O),Ms=r.dynCall_iijiiii=(n,o,a,s,l,p,m)=>(Ms=r.dynCall_iijiiii=z.Wg)(n,o,a,s,l,p,m),Rs=r.dynCall_viiiij=(n,o,a,s,l,p)=>(Rs=r.dynCall_viiiij=z.Xg)(n,o,a,s,l,p),Us=r.dynCall_iijjjii=(n,o,a,s,l,p,m)=>(Us=r.dynCall_iijjjii=z.Yg)(n,o,a,s,l,p,m),js=r.dynCall_jij=(n,o,a)=>(js=r.dynCall_jij=z.Zg)(n,o,a),Ns=r.dynCall_jjj=(n,o,a)=>(Ns=r.dynCall_jjj=z._g)(n,o,a),Vs=r.dynCall_iiji=(n,o,a,s)=>(Vs=r.dynCall_iiji=z.$g)(n,o,a,s),Ws=r.dynCall_viffiii=(n,o,a,s,l,p,m)=>(Ws=r.dynCall_viffiii=z.ah)(n,o,a,s,l,p,m),Ls=r.dynCall_viifiii=(n,o,a,s,l,p,m)=>(Ls=r.dynCall_viifiii=z.bh)(n,o,a,s,l,p,m),Gs=r.dynCall_viiiiidiidi=(n,o,a,s,l,p,m,y,_,$,T)=>(Gs=r.dynCall_viiiiidiidi=z.ch)(n,o,a,s,l,p,m,y,_,$,T),Hs=r.dynCall_viiiiiiiiidi=(n,o,a,s,l,p,m,y,_,$,T,E)=>(Hs=r.dynCall_viiiiiiiiidi=z.dh)(n,o,a,s,l,p,m,y,_,$,T,E),Fs=r.dynCall_viiiiiiiiiiiiiifi=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X)=>(Fs=r.dynCall_viiiiiiiiiiiiiifi=z.eh)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X),qs=r.dynCall_ijii=(n,o,a,s)=>(qs=r.dynCall_ijii=z.fh)(n,o,a,s),Ks=r.dynCall_vijjjjjjjjjjjjji=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q)=>(Ks=r.dynCall_vijjjjjjjjjjjjji=z.gh)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q),Zs=r.dynCall_viiiji=(n,o,a,s,l,p)=>(Zs=r.dynCall_viiiji=z.hh)(n,o,a,s,l,p),Qs=r.dynCall_vijjjiiji=(n,o,a,s,l,p,m,y,_)=>(Qs=r.dynCall_vijjjiiji=z.ih)(n,o,a,s,l,p,m,y,_),Ys=r.dynCall_iiiijiiiiiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G)=>(Ys=r.dynCall_iiiijiiiiiiiiii=z.jh)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G),Xs=r.dynCall_vj=(n,o)=>(Xs=r.dynCall_vj=z.kh)(n,o),Js=r.dynCall_vfiii=(n,o,a,s,l)=>(Js=r.dynCall_vfiii=z.lh)(n,o,a,s,l),eu=r.dynCall_viiiiff=(n,o,a,s,l,p,m)=>(eu=r.dynCall_viiiiff=z.mh)(n,o,a,s,l,p,m),tu=r.dynCall_viiiiiff=(n,o,a,s,l,p,m,y)=>(tu=r.dynCall_viiiiiff=z.nh)(n,o,a,s,l,p,m,y),ru=r.dynCall_viiff=(n,o,a,s,l)=>(ru=r.dynCall_viiff=z.oh)(n,o,a,s,l),nu=r.dynCall_viiiiiiiiifiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G)=>(nu=r.dynCall_viiiiiiiiifiiii=z.ph)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G),iu=r.dynCall_viiiiiiiijj=(n,o,a,s,l,p,m,y,_,$,T)=>(iu=r.dynCall_viiiiiiiijj=z.qh)(n,o,a,s,l,p,m,y,_,$,T),ou=r.dynCall_iiiiiiiiiiiiiifii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X)=>(ou=r.dynCall_iiiiiiiiiiiiiifii=z.rh)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X),au=r.dynCall_iiiiiiiiiiiiiiiiiiifii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe,Re)=>(au=r.dynCall_iiiiiiiiiiiiiiiiiiifii=z.sh)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe,Re),su=r.dynCall_vijjiiiiiii=(n,o,a,s,l,p,m,y,_,$,T)=>(su=r.dynCall_vijjiiiiiii=z.th)(n,o,a,s,l,p,m,y,_,$,T),uu=r.dynCall_iiiijjj=(n,o,a,s,l,p,m)=>(uu=r.dynCall_iiiijjj=z.uh)(n,o,a,s,l,p,m),lu=r.dynCall_fffffff=(n,o,a,s,l,p,m)=>(lu=r.dynCall_fffffff=z.vh)(n,o,a,s,l,p,m),du=r.dynCall_viiiiiijiifiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j)=>(du=r.dynCall_viiiiiijiifiii=z.wh)(n,o,a,s,l,p,m,y,_,$,T,E,O,j),cu=r.dynCall_vjjjjjjffjifiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe)=>(cu=r.dynCall_vjjjjjjffjifiiiiii=z.xh)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe),pu=r.dynCall_viiiiiiffjifiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X)=>(pu=r.dynCall_viiiiiiffjifiiiii=z.yh)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X),fu=r.dynCall_viiiiiiffjfiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q)=>(fu=r.dynCall_viiiiiiffjfiiiii=z.zh)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q),mu=r.dynCall_viiiiiiffjiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G)=>(mu=r.dynCall_viiiiiiffjiiiii=z.Ah)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G),hu=r.dynCall_vjjjjjjjjfffjifiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe)=>(hu=r.dynCall_vjjjjjjjjfffjifiiiiii=z.Bh)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe),gu=r.dynCall_vjjjjjjfffifijiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de)=>(gu=r.dynCall_vjjjjjjfffifijiiiii=z.Ch)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de),yu=r.dynCall_vjjjjjjfffifiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe)=>(yu=r.dynCall_vjjjjjjfffifiiiiii=z.Dh)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe),bu=r.dynCall_vjjjjjjjjfffiiifiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe)=>(bu=r.dynCall_vjjjjjjjjfffiiifiiiii=z.Eh)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe),_u=r.dynCall_vijiiiiiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O)=>(_u=r.dynCall_vijiiiiiiiiii=z.Fh)(n,o,a,s,l,p,m,y,_,$,T,E,O),wu=r.dynCall_vijjfffiii=(n,o,a,s,l,p,m,y,_,$)=>(wu=r.dynCall_vijjfffiii=z.Gh)(n,o,a,s,l,p,m,y,_,$),vu=r.dynCall_jiijjiif=(n,o,a,s,l,p,m,y)=>(vu=r.dynCall_jiijjiif=z.Hh)(n,o,a,s,l,p,m,y),$u=r.dynCall_vijjjjjjifiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G)=>($u=r.dynCall_vijjjjjjifiiiii=z.Ih)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G),xu=r.dynCall_vjjjjjiiii=(n,o,a,s,l,p,m,y,_,$)=>(xu=r.dynCall_vjjjjjiiii=z.Jh)(n,o,a,s,l,p,m,y,_,$),Cu=r.dynCall_vjjjjfiii=(n,o,a,s,l,p,m,y,_)=>(Cu=r.dynCall_vjjjjfiii=z.Kh)(n,o,a,s,l,p,m,y,_),Su=r.dynCall_viiiiiijiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j)=>(Su=r.dynCall_viiiiiijiiiiii=z.Lh)(n,o,a,s,l,p,m,y,_,$,T,E,O,j),Tu=r.dynCall_vijjii=(n,o,a,s,l,p)=>(Tu=r.dynCall_vijjii=z.Mh)(n,o,a,s,l,p),Iu=r.dynCall_viiiiijjiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O)=>(Iu=r.dynCall_viiiiijjiiiii=z.Nh)(n,o,a,s,l,p,m,y,_,$,T,E,O),Au=r.dynCall_iiiiiji=(n,o,a,s,l,p,m)=>(Au=r.dynCall_iiiiiji=z.Oh)(n,o,a,s,l,p,m),Eu=r.dynCall_viiiiijiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O)=>(Eu=r.dynCall_viiiiijiiiiii=z.Ph)(n,o,a,s,l,p,m,y,_,$,T,E,O),ku=r.dynCall_viiijiiiiii=(n,o,a,s,l,p,m,y,_,$,T)=>(ku=r.dynCall_viiijiiiiii=z.Qh)(n,o,a,s,l,p,m,y,_,$,T),Pu=r.dynCall_viiiijii=(n,o,a,s,l,p,m,y)=>(Pu=r.dynCall_viiiijii=z.Rh)(n,o,a,s,l,p,m,y),zu=r.dynCall_viijjiii=(n,o,a,s,l,p,m,y)=>(zu=r.dynCall_viijjiii=z.Sh)(n,o,a,s,l,p,m,y),Ou=r.dynCall_viiiiiijii=(n,o,a,s,l,p,m,y,_,$)=>(Ou=r.dynCall_viiiiiijii=z.Th)(n,o,a,s,l,p,m,y,_,$),Bu=r.dynCall_viiiiijjji=(n,o,a,s,l,p,m,y,_,$)=>(Bu=r.dynCall_viiiiijjji=z.Uh)(n,o,a,s,l,p,m,y,_,$),Du=r.dynCall_vijiii=(n,o,a,s,l,p)=>(Du=r.dynCall_vijiii=z.Vh)(n,o,a,s,l,p),Mu=r.dynCall_iiijiiii=(n,o,a,s,l,p,m,y)=>(Mu=r.dynCall_iiijiiii=z.Wh)(n,o,a,s,l,p,m,y),Ru=r.dynCall_viiiiiijjiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j)=>(Ru=r.dynCall_viiiiiijjiiiii=z.Xh)(n,o,a,s,l,p,m,y,_,$,T,E,O,j),Uu=r.dynCall_viiiiiiijiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G)=>(Uu=r.dynCall_viiiiiiijiiiiii=z.Yh)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G),ju=r.dynCall_viiiiiji=(n,o,a,s,l,p,m,y)=>(ju=r.dynCall_viiiiiji=z.Zh)(n,o,a,s,l,p,m,y),Nu=r.dynCall_fiif=(n,o,a,s)=>(Nu=r.dynCall_fiif=z._h)(n,o,a,s),Vu=r.dynCall_viijjjiii=(n,o,a,s,l,p,m,y,_)=>(Vu=r.dynCall_viijjjiii=z.$h)(n,o,a,s,l,p,m,y,_),Wu=r.dynCall_viiiiiifiii=(n,o,a,s,l,p,m,y,_,$,T)=>(Wu=r.dynCall_viiiiiifiii=z.ai)(n,o,a,s,l,p,m,y,_,$,T),Lu=r.dynCall_viijji=(n,o,a,s,l,p)=>(Lu=r.dynCall_viijji=z.bi)(n,o,a,s,l,p),Gu=r.dynCall_iiiiiiiiiiijijji=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q)=>(Gu=r.dynCall_iiiiiiiiiiijijji=z.ci)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q),Hu=r.dynCall_jiijjiii=(n,o,a,s,l,p,m,y)=>(Hu=r.dynCall_jiijjiii=z.di)(n,o,a,s,l,p,m,y),Fu=r.dynCall_viifiifijjjii=(n,o,a,s,l,p,m,y,_,$,T,E,O)=>(Fu=r.dynCall_viifiifijjjii=z.ei)(n,o,a,s,l,p,m,y,_,$,T,E,O),qu=r.dynCall_viiiiiiiiiiiiiiiiiiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe,Re,Ne,tt)=>(qu=r.dynCall_viiiiiiiiiiiiiiiiiiiiiii=z.fi)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe,Re,Ne,tt),Ku=r.dynCall_viiiiifiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O)=>(Ku=r.dynCall_viiiiifiiiiii=z.gi)(n,o,a,s,l,p,m,y,_,$,T,E,O),Zu=r.dynCall_vijjiiiiii=(n,o,a,s,l,p,m,y,_,$)=>(Zu=r.dynCall_vijjiiiiii=z.hi)(n,o,a,s,l,p,m,y,_,$),Qu=r.dynCall_vijiiiiiiijjii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j)=>(Qu=r.dynCall_vijiiiiiiijjii=z.ii)(n,o,a,s,l,p,m,y,_,$,T,E,O,j),Yu=r.dynCall_viiiiiiiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O)=>(Yu=r.dynCall_viiiiiiiiiiii=z.ji)(n,o,a,s,l,p,m,y,_,$,T,E,O),Xu=r.dynCall_viiiiiiiiiiiiiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de)=>(Xu=r.dynCall_viiiiiiiiiiiiiiiiii=z.ki)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de),Ju=r.dynCall_viiiiiiiiiiiiiiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we)=>(Ju=r.dynCall_viiiiiiiiiiiiiiiiiii=z.li)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we),el=r.dynCall_viiiiiiiiiiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q)=>(el=r.dynCall_viiiiiiiiiiiiiii=z.mi)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q),tl=r.dynCall_viiiiiiiiiiiiiiiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe)=>(tl=r.dynCall_viiiiiiiiiiiiiiiiiiii=z.ni)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe),rl=r.dynCall_viiiijjj=(n,o,a,s,l,p,m,y)=>(rl=r.dynCall_viiiijjj=z.oi)(n,o,a,s,l,p,m,y),nl=r.dynCall_iiiiid=(n,o,a,s,l,p)=>(nl=r.dynCall_iiiiid=z.pi)(n,o,a,s,l,p),il=r.dynCall_viiiiiiiiiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G)=>(il=r.dynCall_viiiiiiiiiiiiii=z.qi)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G),ol=r.dynCall_viiiiiiijjj=(n,o,a,s,l,p,m,y,_,$,T)=>(ol=r.dynCall_viiiiiiijjj=z.ri)(n,o,a,s,l,p,m,y,_,$,T),al=r.dynCall_iiiiiiiiiiiiiiiiiiiifi=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe,Re)=>(al=r.dynCall_iiiiiiiiiiiiiiiiiiiifi=z.si)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe,Re),sl=r.dynCall_viiijiiiiiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G)=>(sl=r.dynCall_viiijiiiiiiiiii=z.ti)(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G),ul=r.dynCall_viiiiif=(n,o,a,s,l,p,m)=>(ul=r.dynCall_viiiiif=z.ui)(n,o,a,s,l,p,m),ll=r.dynCall_viiif=(n,o,a,s,l)=>(ll=r.dynCall_viiif=z.vi)(n,o,a,s,l),dl=r.dynCall_viiiiiiiiifi=(n,o,a,s,l,p,m,y,_,$,T,E)=>(dl=r.dynCall_viiiiiiiiifi=z.wi)(n,o,a,s,l,p,m,y,_,$,T,E),cl=r.dynCall_viiiiid=(n,o,a,s,l,p,m)=>(cl=r.dynCall_viiiiid=z.xi)(n,o,a,s,l,p,m),pl=r.dynCall_viiid=(n,o,a,s,l)=>(pl=r.dynCall_viiid=z.yi)(n,o,a,s,l),fl=r.dynCall_iiif=(n,o,a,s)=>(fl=r.dynCall_iiif=z.zi)(n,o,a,s),ml=r.dynCall_vidi=(n,o,a,s)=>(ml=r.dynCall_vidi=z.Ai)(n,o,a,s),hl=r.dynCall_viiijiji=(n,o,a,s,l,p,m,y)=>(hl=r.dynCall_viiijiji=z.Bi)(n,o,a,s,l,p,m,y),gl=r.dynCall_viiijij=(n,o,a,s,l,p,m)=>(gl=r.dynCall_viiijij=z.Ci)(n,o,a,s,l,p,m),yl=r.dynCall_vijjj=(n,o,a,s,l)=>(yl=r.dynCall_vijjj=z.Di)(n,o,a,s,l),bl=r.dynCall_vjiij=(n,o,a,s,l)=>(bl=r.dynCall_vjiij=z.Ei)(n,o,a,s,l),_l=r.dynCall_diii=(n,o,a,s)=>(_l=r.dynCall_diii=z.Fi)(n,o,a,s),wl=r.dynCall_diiiii=(n,o,a,s,l,p)=>(wl=r.dynCall_diiiii=z.Gi)(n,o,a,s,l,p),vl=r.dynCall_diiii=(n,o,a,s,l)=>(vl=r.dynCall_diiii=z.Hi)(n,o,a,s,l),$l=r.dynCall_ijiijji=(n,o,a,s,l,p,m)=>($l=r.dynCall_ijiijji=z.Ii)(n,o,a,s,l,p,m),xl=r.dynCall_viiijjiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E)=>(xl=r.dynCall_viiijjiiiiii=z.Ji)(n,o,a,s,l,p,m,y,_,$,T,E),Cl=r.dynCall_viijjijjjjiii=(n,o,a,s,l,p,m,y,_,$,T,E,O)=>(Cl=r.dynCall_viijjijjjjiii=z.Ki)(n,o,a,s,l,p,m,y,_,$,T,E,O),Sl=r.dynCall_ijiii=(n,o,a,s,l)=>(Sl=r.dynCall_ijiii=z.Li)(n,o,a,s,l),Tl=r.dynCall_ijiiiiji=(n,o,a,s,l,p,m,y)=>(Tl=r.dynCall_ijiiiiji=z.Mi)(n,o,a,s,l,p,m,y),Il=r.dynCall_iiifi=(n,o,a,s,l)=>(Il=r.dynCall_iiifi=z.Ni)(n,o,a,s,l),Al=r.dynCall_ijiij=(n,o,a,s,l)=>(Al=r.dynCall_ijiij=z.Oi)(n,o,a,s,l),El=r.dynCall_iiiij=(n,o,a,s,l)=>(El=r.dynCall_iiiij=z.Pi)(n,o,a,s,l),kl=r.dynCall_viiijii=(n,o,a,s,l,p,m)=>(kl=r.dynCall_viiijii=z.Qi)(n,o,a,s,l,p,m),Pl=r.dynCall_viijiiiiiiiiii=(n,o,a,s,l,p,m,y,_,$,T,E,O,j)=>(Pl=r.dynCall_viijiiiiiiiiii=z.Ri)(n,o,a,s,l,p,m,y,_,$,T,E,O,j),zl=r.dynCall_fiiii=(n,o,a,s,l)=>(zl=r.dynCall_fiiii=z.Si)(n,o,a,s,l),Ol=r.dynCall_jfi=(n,o,a)=>(Ol=r.dynCall_jfi=z.Ti)(n,o,a),Bl=r.dynCall_fiii=(n,o,a,s)=>(Bl=r.dynCall_fiii=z.Ui)(n,o,a,s),Dl=n=>(Dl=z.Vi)(n),Ml=()=>(Ml=z.Wi)(),Rl=n=>(Rl=z.Xi)(n),Ul=()=>(Ul=z.Yi)();function Ug(n,o,a,s){var l=R();try{return aa(n,o,a,s)}catch(p){if(M(l),p!==p+0)throw p;U(1,0)}}function jg(n,o,a){var s=R();try{return sa(n,o,a)}catch(l){if(M(s),l!==l+0)throw l;U(1,0)}}function Ng(n,o,a){var s=R();try{oa(n,o,a)}catch(l){if(M(s),l!==l+0)throw l;U(1,0)}}function Vg(n,o){var a=R();try{return qn(n,o)}catch(s){if(M(a),s!==s+0)throw s;U(1,0)}}function Wg(n,o){var a=R();try{la(n,o)}catch(s){if(M(a),s!==s+0)throw s;U(1,0)}}function Lg(n){var o=R();try{da(n)}catch(a){if(M(o),a!==a+0)throw a;U(1,0)}}function Gg(n,o,a,s,l,p,m){var y=R();try{return ua(n,o,a,s,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;U(1,0)}}function Hg(n,o,a,s,l,p){var m=R();try{return ca(n,o,a,s,l,p)}catch(y){if(M(m),y!==y+0)throw y;U(1,0)}}function Fg(n,o,a,s,l){var p=R();try{return pa(n,o,a,s,l)}catch(m){if(M(p),m!==m+0)throw m;U(1,0)}}function qg(n,o,a,s){var l=R();try{fa(n,o,a,s)}catch(p){if(M(l),p!==p+0)throw p;U(1,0)}}function Kg(n,o,a,s,l){var p=R();try{ha(n,o,a,s,l)}catch(m){if(M(p),m!==m+0)throw m;U(1,0)}}function Zg(n,o,a,s,l,p,m){var y=R();try{ga(n,o,a,s,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;U(1,0)}}function Qg(n,o,a,s,l,p,m){var y=R();try{ya(n,o,a,s,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;U(1,0)}}function Yg(n,o,a,s,l,p){var m=R();try{ma(n,o,a,s,l,p)}catch(y){if(M(m),y!==y+0)throw y;U(1,0)}}function Xg(n,o,a,s,l,p,m,y,_,$,T,E){var O=R();try{_a(n,o,a,s,l,p,m,y,_,$,T,E)}catch(j){if(M(O),j!==j+0)throw j;U(1,0)}}function Jg(n,o,a){var s=R();try{return va(n,o,a)}catch(l){if(M(s),l!==l+0)throw l;U(1,0)}}function ey(n,o,a){var s=R();try{return $a(n,o,a)}catch(l){if(M(s),l!==l+0)throw l;U(1,0)}}function ty(n,o,a){var s=R();try{return xa(n,o,a)}catch(l){if(M(s),l!==l+0)throw l;U(1,0)}}function ry(n,o,a){var s=R();try{return Ca(n,o,a)}catch(l){if(M(s),l!==l+0)throw l;return U(1,0),0n}}function ny(n,o,a,s,l,p,m,y,_){var $=R();try{Ta(n,o,a,s,l,p,m,y,_)}catch(T){if(M($),T!==T+0)throw T;U(1,0)}}function iy(n){var o=R();try{return Sa(n)}catch(a){if(M(o),a!==a+0)throw a;U(1,0)}}function oy(n,o,a){var s=R();try{Ea(n,o,a)}catch(l){if(M(s),l!==l+0)throw l;U(1,0)}}function ay(n,o,a,s,l,p,m,y){var _=R();try{return ka(n,o,a,s,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;U(1,0)}}function sy(n,o,a,s,l,p,m,y,_,$,T,E){var O=R();try{Pa(n,o,a,s,l,p,m,y,_,$,T,E)}catch(j){if(M(O),j!==j+0)throw j;U(1,0)}}function uy(n,o,a,s,l,p,m,y,_,$,T,E){var O=R();try{Ba(n,o,a,s,l,p,m,y,_,$,T,E)}catch(j){if(M(O),j!==j+0)throw j;U(1,0)}}function ly(n,o,a,s,l,p,m,y,_,$,T,E,O){var j=R();try{return Ma(n,o,a,s,l,p,m,y,_,$,T,E,O)}catch(G){if(M(j),G!==G+0)throw G;U(1,0)}}function dy(n,o,a,s,l,p,m,y,_,$,T){var E=R();try{Ra(n,o,a,s,l,p,m,y,_,$,T)}catch(O){if(M(E),O!==O+0)throw O;U(1,0)}}function cy(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X){var oe=R();try{Ua(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X)}catch(de){if(M(oe),de!==de+0)throw de;U(1,0)}}function py(n,o,a,s,l,p,m,y){var _=R();try{Da(n,o,a,s,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;U(1,0)}}function fy(n,o,a,s,l,p,m,y,_,$,T){var E=R();try{return Wa(n,o,a,s,l,p,m,y,_,$,T)}catch(O){if(M(E),O!==O+0)throw O;U(1,0)}}function my(n,o,a,s,l,p,m,y,_,$,T){var E=R();try{return La(n,o,a,s,l,p,m,y,_,$,T)}catch(O){if(M(E),O!==O+0)throw O;U(1,0)}}function hy(n,o,a,s,l,p,m,y,_,$,T){var E=R();try{Ga(n,o,a,s,l,p,m,y,_,$,T)}catch(O){if(M(E),O!==O+0)throw O;U(1,0)}}function gy(n,o,a,s){var l=R();try{Ha(n,o,a,s)}catch(p){if(M(l),p!==p+0)throw p;U(1,0)}}function yy(n,o,a,s,l){var p=R();try{Fa(n,o,a,s,l)}catch(m){if(M(p),m!==m+0)throw m;U(1,0)}}function by(n,o,a,s,l,p,m,y,_,$){var T=R();try{za(n,o,a,s,l,p,m,y,_,$)}catch(E){if(M(T),E!==E+0)throw E;U(1,0)}}function _y(n,o,a,s,l){var p=R();try{Na(n,o,a,s,l)}catch(m){if(M(p),m!==m+0)throw m;U(1,0)}}function wy(n,o,a,s,l,p,m,y,_){var $=R();try{return Va(n,o,a,s,l,p,m,y,_)}catch(T){if(M($),T!==T+0)throw T;U(1,0)}}function vy(n,o){var a=R();try{return qa(n,o)}catch(s){if(M(a),s!==s+0)throw s;U(1,0)}}function $y(n,o){var a=R();try{return Oa(n,o)}catch(s){if(M(a),s!==s+0)throw s;return U(1,0),0n}}function xy(n,o){var a=R();try{return Za(n,o)}catch(s){if(M(a),s!==s+0)throw s;U(1,0)}}function Cy(n,o,a,s){var l=R();try{Ya(n,o,a,s)}catch(p){if(M(l),p!==p+0)throw p;U(1,0)}}function Sy(n,o,a,s,l,p,m){var y=R();try{kl(n,o,a,s,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;U(1,0)}}function Ty(n,o,a,s,l,p,m){var y=R();try{Ja(n,o,a,s,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;U(1,0)}}function Iy(n,o,a,s,l,p,m,y){var _=R();try{Pu(n,o,a,s,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;U(1,0)}}function Ay(n,o,a,s){var l=R();try{Xa(n,o,a,s)}catch(p){if(M(l),p!==p+0)throw p;U(1,0)}}function Ey(n,o,a,s,l,p,m,y,_){var $=R();try{return ja(n,o,a,s,l,p,m,y,_)}catch(T){if(M($),T!==T+0)throw T;U(1,0)}}function ky(n,o,a,s,l,p){var m=R();try{hs(n,o,a,s,l,p)}catch(y){if(M(m),y!==y+0)throw y;U(1,0)}}function Py(n,o,a,s,l,p,m,y,_,$){var T=R();try{return es(n,o,a,s,l,p,m,y,_,$)}catch(E){if(M(T),E!==E+0)throw E;U(1,0)}}function zy(n,o,a,s,l){var p=R();try{ba(n,o,a,s,l)}catch(m){if(M(p),m!==m+0)throw m;U(1,0)}}function Oy(n,o,a,s,l){var p=R();try{ts(n,o,a,s,l)}catch(m){if(M(p),m!==m+0)throw m;U(1,0)}}function By(n,o,a,s,l){var p=R();try{rs(n,o,a,s,l)}catch(m){if(M(p),m!==m+0)throw m;U(1,0)}}function Dy(n,o,a,s){var l=R();try{ns(n,o,a,s)}catch(p){if(M(l),p!==p+0)throw p;U(1,0)}}function My(n,o,a){var s=R();try{is(n,o,a)}catch(l){if(M(s),l!==l+0)throw l;U(1,0)}}function Ry(n,o,a,s,l,p,m,y,_,$){var T=R();try{os(n,o,a,s,l,p,m,y,_,$)}catch(E){if(M(T),E!==E+0)throw E;U(1,0)}}function Uy(n,o,a,s,l,p,m,y,_){var $=R();try{wa(n,o,a,s,l,p,m,y,_)}catch(T){if(M($),T!==T+0)throw T;U(1,0)}}function jy(n,o){var a=R();try{return ps(n,o)}catch(s){if(M(a),s!==s+0)throw s;U(1,0)}}function Ny(n,o,a,s,l,p,m,y,_,$,T,E,O,j){var G=R();try{Pl(n,o,a,s,l,p,m,y,_,$,T,E,O,j)}catch(q){if(M(G),q!==q+0)throw q;U(1,0)}}function Vy(n,o,a,s,l,p){var m=R();try{return us(n,o,a,s,l,p)}catch(y){if(M(m),y!==y+0)throw y;U(1,0)}}function Wy(n,o,a,s,l,p,m,y,_,$,T,E,O,j){var G=R();try{ls(n,o,a,s,l,p,m,y,_,$,T,E,O,j)}catch(q){if(M(G),q!==q+0)throw q;U(1,0)}}function Ly(n,o,a,s,l,p,m,y,_,$,T,E){var O=R();try{return ds(n,o,a,s,l,p,m,y,_,$,T,E)}catch(j){if(M(O),j!==j+0)throw j;U(1,0)}}function Gy(n,o,a,s){var l=R();try{return _s(n,o,a,s)}catch(p){if(M(l),p!==p+0)throw p;return U(1,0),0n}}function Hy(n,o,a,s,l,p){var m=R();try{return cs(n,o,a,s,l,p)}catch(y){if(M(m),y!==y+0)throw y;U(1,0)}}function Fy(n,o,a,s,l,p,m,y){var _=R();try{gs(n,o,a,s,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;U(1,0)}}function qy(n,o,a,s){var l=R();try{return ys(n,o,a,s)}catch(p){if(M(l),p!==p+0)throw p;return U(1,0),0n}}function Ky(n,o,a,s,l,p,m,y,_){var $=R();try{bs(n,o,a,s,l,p,m,y,_)}catch(T){if(M($),T!==T+0)throw T;U(1,0)}}function Zy(n,o,a,s,l,p,m){var y=R();try{fs(n,o,a,s,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;U(1,0)}}function Qy(n,o,a,s,l,p){var m=R();try{return ms(n,o,a,s,l,p)}catch(y){if(M(m),y!==y+0)throw y;U(1,0)}}function Yy(n,o,a,s,l,p,m,y,_,$,T){var E=R();try{return ws(n,o,a,s,l,p,m,y,_,$,T)}catch(O){if(M(E),O!==O+0)throw O;U(1,0)}}function Xy(n,o,a,s,l,p,m){var y=R();try{return vs(n,o,a,s,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;U(1,0)}}function Jy(n,o,a,s,l,p){var m=R();try{return $s(n,o,a,s,l,p)}catch(y){if(M(m),y!==y+0)throw y;U(1,0)}}function eb(n,o){var a=R();try{return as(n,o)}catch(s){if(M(a),s!==s+0)throw s;return U(1,0),0n}}function tb(n,o,a,s,l,p,m){var y=R();try{return ss(n,o,a,s,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;U(1,0)}}function rb(n,o,a){var s=R();try{Ss(n,o,a)}catch(l){if(M(s),l!==l+0)throw l;U(1,0)}}function nb(n,o,a,s,l,p,m,y){var _=R();try{return xs(n,o,a,s,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;U(1,0)}}function ib(n,o,a,s,l,p,m,y,_){var $=R();try{Cs(n,o,a,s,l,p,m,y,_)}catch(T){if(M($),T!==T+0)throw T;U(1,0)}}function ob(n,o,a,s){var l=R();try{Ts(n,o,a,s)}catch(p){if(M(l),p!==p+0)throw p;U(1,0)}}function ab(n,o,a,s,l,p,m,y){var _=R();try{return Is(n,o,a,s,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;U(1,0)}}function sb(n,o,a,s,l,p){var m=R();try{return As(n,o,a,s,l,p)}catch(y){if(M(m),y!==y+0)throw y;U(1,0)}}function ub(n,o,a,s,l,p){var m=R();try{return Es(n,o,a,s,l,p)}catch(y){if(M(m),y!==y+0)throw y;U(1,0)}}function lb(n,o,a,s,l,p,m,y,_,$,T,E){var O=R();try{return ks(n,o,a,s,l,p,m,y,_,$,T,E)}catch(j){if(M(O),j!==j+0)throw j;U(1,0)}}function db(n,o,a,s,l,p,m,y){var _=R();try{return Ps(n,o,a,s,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;U(1,0)}}function cb(n,o,a,s){var l=R();try{return zs(n,o,a,s)}catch(p){if(M(l),p!==p+0)throw p;U(1,0)}}function pb(n,o,a,s,l,p,m,y,_,$,T){var E=R();try{return Os(n,o,a,s,l,p,m,y,_,$,T)}catch(O){if(M(E),O!==O+0)throw O;U(1,0)}}function fb(n,o,a,s,l,p,m){var y=R();try{return Bs(n,o,a,s,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;U(1,0)}}function mb(n,o,a,s,l,p,m,y,_,$,T,E,O){var j=R();try{return Ds(n,o,a,s,l,p,m,y,_,$,T,E,O)}catch(G){if(M(j),G!==G+0)throw G;U(1,0)}}function hb(n,o,a,s,l,p,m){var y=R();try{return Ms(n,o,a,s,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;U(1,0)}}function gb(n,o,a,s,l,p){var m=R();try{Rs(n,o,a,s,l,p)}catch(y){if(M(m),y!==y+0)throw y;U(1,0)}}function yb(n,o,a,s,l,p,m){var y=R();try{return Us(n,o,a,s,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;U(1,0)}}function bb(n,o,a){var s=R();try{return js(n,o,a)}catch(l){if(M(s),l!==l+0)throw l;return U(1,0),0n}}function _b(n,o,a){var s=R();try{return Ns(n,o,a)}catch(l){if(M(s),l!==l+0)throw l;return U(1,0),0n}}function wb(n,o,a,s){var l=R();try{return Vs(n,o,a,s)}catch(p){if(M(l),p!==p+0)throw p;U(1,0)}}function vb(n,o,a,s,l,p,m){var y=R();try{Ws(n,o,a,s,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;U(1,0)}}function $b(n,o,a,s,l,p,m){var y=R();try{Ls(n,o,a,s,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;U(1,0)}}function xb(n,o,a,s,l,p,m,y,_,$,T){var E=R();try{Gs(n,o,a,s,l,p,m,y,_,$,T)}catch(O){if(M(E),O!==O+0)throw O;U(1,0)}}function Cb(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X){var oe=R();try{Fs(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X)}catch(de){if(M(oe),de!==de+0)throw de;U(1,0)}}function Sb(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q){var X=R();try{Ks(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q)}catch(oe){if(M(X),oe!==oe+0)throw oe;U(1,0)}}function Tb(n,o,a,s,l,p){var m=R();try{Zs(n,o,a,s,l,p)}catch(y){if(M(m),y!==y+0)throw y;U(1,0)}}function Ib(n,o,a,s,l,p,m,y,_){var $=R();try{Qs(n,o,a,s,l,p,m,y,_)}catch(T){if(M($),T!==T+0)throw T;U(1,0)}}function Ab(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G){var q=R();try{return Ys(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G)}catch(X){if(M(q),X!==X+0)throw X;U(1,0)}}function Eb(n,o){var a=R();try{Xs(n,o)}catch(s){if(M(a),s!==s+0)throw s;U(1,0)}}function kb(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G){var q=R();try{nu(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G)}catch(X){if(M(q),X!==X+0)throw X;U(1,0)}}function Pb(n,o,a,s,l){var p=R();try{Js(n,o,a,s,l)}catch(m){if(M(p),m!==m+0)throw m;U(1,0)}}function zb(n,o,a,s,l,p,m){var y=R();try{eu(n,o,a,s,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;U(1,0)}}function Ob(n,o,a,s,l){var p=R();try{ru(n,o,a,s,l)}catch(m){if(M(p),m!==m+0)throw m;U(1,0)}}function Bb(n,o,a,s,l,p,m,y){var _=R();try{tu(n,o,a,s,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;U(1,0)}}function Db(n,o,a,s,l,p,m,y,_,$,T){var E=R();try{iu(n,o,a,s,l,p,m,y,_,$,T)}catch(O){if(M(E),O!==O+0)throw O;U(1,0)}}function Mb(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X){var oe=R();try{return ou(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X)}catch(de){if(M(oe),de!==de+0)throw de;U(1,0)}}function Rb(n,o,a,s,l){var p=R();try{return zl(n,o,a,s,l)}catch(m){if(M(p),m!==m+0)throw m;U(1,0)}}function Ub(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe,Re){var Ne=R();try{return au(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe,Re)}catch(tt){if(M(Ne),tt!==tt+0)throw tt;U(1,0)}}function jb(n,o,a,s,l,p,m,y,_,$,T){var E=R();try{su(n,o,a,s,l,p,m,y,_,$,T)}catch(O){if(M(E),O!==O+0)throw O;U(1,0)}}function Nb(n,o,a,s,l,p,m){var y=R();try{return uu(n,o,a,s,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;U(1,0)}}function Vb(n,o,a,s,l,p,m,y,_,$,T,E,O,j){var G=R();try{du(n,o,a,s,l,p,m,y,_,$,T,E,O,j)}catch(q){if(M(G),q!==q+0)throw q;U(1,0)}}function Wb(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe){var de=R();try{cu(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe)}catch(we){if(M(de),we!==we+0)throw we;U(1,0)}}function Lb(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X){var oe=R();try{pu(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X)}catch(de){if(M(oe),de!==de+0)throw de;U(1,0)}}function Gb(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q){var X=R();try{fu(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q)}catch(oe){if(M(X),oe!==oe+0)throw oe;U(1,0)}}function Hb(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G){var q=R();try{mu(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G)}catch(X){if(M(q),X!==X+0)throw X;U(1,0)}}function Fb(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe){var Re=R();try{hu(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe)}catch(Ne){if(M(Re),Ne!==Ne+0)throw Ne;U(1,0)}}function qb(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de){var we=R();try{gu(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de)}catch(xe){if(M(we),xe!==xe+0)throw xe;U(1,0)}}function Kb(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe){var de=R();try{yu(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe)}catch(we){if(M(de),we!==we+0)throw we;U(1,0)}}function Zb(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe){var Re=R();try{bu(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe)}catch(Ne){if(M(Re),Ne!==Ne+0)throw Ne;U(1,0)}}function Qb(n,o,a,s,l,p,m,y,_,$,T,E,O){var j=R();try{_u(n,o,a,s,l,p,m,y,_,$,T,E,O)}catch(G){if(M(j),G!==G+0)throw G;U(1,0)}}function Yb(n,o,a,s,l,p,m,y,_,$){var T=R();try{wu(n,o,a,s,l,p,m,y,_,$)}catch(E){if(M(T),E!==E+0)throw E;U(1,0)}}function Xb(n,o,a,s,l,p,m,y){var _=R();try{return vu(n,o,a,s,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;return U(1,0),0n}}function Jb(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G){var q=R();try{$u(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G)}catch(X){if(M(q),X!==X+0)throw X;U(1,0)}}function e_(n,o,a,s,l,p,m,y,_,$){var T=R();try{xu(n,o,a,s,l,p,m,y,_,$)}catch(E){if(M(T),E!==E+0)throw E;U(1,0)}}function t_(n,o,a,s,l,p,m,y,_){var $=R();try{Cu(n,o,a,s,l,p,m,y,_)}catch(T){if(M($),T!==T+0)throw T;U(1,0)}}function r_(n,o,a,s,l,p,m){var y=R();try{return lu(n,o,a,s,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;U(1,0)}}function n_(n,o,a){var s=R();try{return Ol(n,o,a)}catch(l){if(M(s),l!==l+0)throw l;return U(1,0),0n}}function i_(n,o,a,s,l,p,m,y,_,$,T,E,O,j){var G=R();try{Su(n,o,a,s,l,p,m,y,_,$,T,E,O,j)}catch(q){if(M(G),q!==q+0)throw q;U(1,0)}}function o_(n,o,a,s,l,p,m,y,_,$,T,E,O){var j=R();try{Iu(n,o,a,s,l,p,m,y,_,$,T,E,O)}catch(G){if(M(j),G!==G+0)throw G;U(1,0)}}function a_(n,o,a,s,l,p,m){var y=R();try{return Au(n,o,a,s,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;U(1,0)}}function s_(n,o,a,s,l,p,m,y,_,$,T,E,O){var j=R();try{Eu(n,o,a,s,l,p,m,y,_,$,T,E,O)}catch(G){if(M(j),G!==G+0)throw G;U(1,0)}}function u_(n,o,a,s,l,p){var m=R();try{Tu(n,o,a,s,l,p)}catch(y){if(M(m),y!==y+0)throw y;U(1,0)}}function l_(n,o,a,s,l,p,m,y,_,$,T){var E=R();try{ku(n,o,a,s,l,p,m,y,_,$,T)}catch(O){if(M(E),O!==O+0)throw O;U(1,0)}}function d_(n,o,a,s,l,p,m,y){var _=R();try{zu(n,o,a,s,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;U(1,0)}}function c_(n,o,a,s,l,p,m,y,_,$){var T=R();try{Ou(n,o,a,s,l,p,m,y,_,$)}catch(E){if(M(T),E!==E+0)throw E;U(1,0)}}function p_(n,o,a,s){var l=R();try{return qs(n,o,a,s)}catch(p){if(M(l),p!==p+0)throw p;U(1,0)}}function f_(n,o,a,s,l,p,m,y,_,$){var T=R();try{Bu(n,o,a,s,l,p,m,y,_,$)}catch(E){if(M(T),E!==E+0)throw E;U(1,0)}}function m_(n,o,a,s,l,p){var m=R();try{Du(n,o,a,s,l,p)}catch(y){if(M(m),y!==y+0)throw y;U(1,0)}}function h_(n,o,a){var s=R();try{return Ka(n,o,a)}catch(l){if(M(s),l!==l+0)throw l;U(1,0)}}function g_(n,o,a,s,l,p,m,y){var _=R();try{return Mu(n,o,a,s,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;U(1,0)}}function y_(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G){var q=R();try{il(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G)}catch(X){if(M(q),X!==X+0)throw X;U(1,0)}}function b_(n,o,a,s,l,p,m,y,_,$,T,E,O,j){var G=R();try{Ru(n,o,a,s,l,p,m,y,_,$,T,E,O,j)}catch(q){if(M(G),q!==q+0)throw q;U(1,0)}}function __(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G){var q=R();try{Uu(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G)}catch(X){if(M(q),X!==X+0)throw X;U(1,0)}}function w_(n,o,a,s,l,p,m,y){var _=R();try{ju(n,o,a,s,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;U(1,0)}}function v_(n,o,a,s){var l=R();try{return Nu(n,o,a,s)}catch(p){if(M(l),p!==p+0)throw p;U(1,0)}}function $_(n,o,a){var s=R();try{return Qa(n,o,a)}catch(l){if(M(s),l!==l+0)throw l;U(1,0)}}function x_(n,o,a,s,l,p,m,y,_){var $=R();try{Vu(n,o,a,s,l,p,m,y,_)}catch(T){if(M($),T!==T+0)throw T;U(1,0)}}function C_(n,o,a,s,l,p,m,y,_,$,T){var E=R();try{Wu(n,o,a,s,l,p,m,y,_,$,T)}catch(O){if(M(E),O!==O+0)throw O;U(1,0)}}function S_(n,o,a,s,l,p){var m=R();try{Lu(n,o,a,s,l,p)}catch(y){if(M(m),y!==y+0)throw y;U(1,0)}}function T_(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q){var X=R();try{return Gu(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q)}catch(oe){if(M(X),oe!==oe+0)throw oe;U(1,0)}}function I_(n,o,a,s,l,p,m,y){var _=R();try{return Hu(n,o,a,s,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;return U(1,0),0n}}function A_(n,o,a,s,l,p,m,y,_,$,T,E,O){var j=R();try{Fu(n,o,a,s,l,p,m,y,_,$,T,E,O)}catch(G){if(M(j),G!==G+0)throw G;U(1,0)}}function E_(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe,Re,Ne,tt){var hw=R();try{qu(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe,Re,Ne,tt)}catch(Kn){if(M(hw),Kn!==Kn+0)throw Kn;U(1,0)}}function k_(n,o,a,s,l,p,m,y,_,$,T,E,O){var j=R();try{Ku(n,o,a,s,l,p,m,y,_,$,T,E,O)}catch(G){if(M(j),G!==G+0)throw G;U(1,0)}}function P_(n,o,a,s,l,p,m,y,_,$){var T=R();try{Zu(n,o,a,s,l,p,m,y,_,$)}catch(E){if(M(T),E!==E+0)throw E;U(1,0)}}function z_(n,o,a,s,l,p,m,y,_,$,T,E,O,j){var G=R();try{Qu(n,o,a,s,l,p,m,y,_,$,T,E,O,j)}catch(q){if(M(G),q!==q+0)throw q;U(1,0)}}function O_(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe){var Re=R();try{tl(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe)}catch(Ne){if(M(Re),Ne!==Ne+0)throw Ne;U(1,0)}}function B_(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we){var xe=R();try{Ju(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we)}catch(Re){if(M(xe),Re!==Re+0)throw Re;U(1,0)}}function D_(n,o,a,s,l,p,m,y,_,$,T,E,O){var j=R();try{Yu(n,o,a,s,l,p,m,y,_,$,T,E,O)}catch(G){if(M(j),G!==G+0)throw G;U(1,0)}}function M_(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de){var we=R();try{Xu(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de)}catch(xe){if(M(we),xe!==xe+0)throw xe;U(1,0)}}function R_(n,o,a,s,l,p,m,y){var _=R();try{rl(n,o,a,s,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;U(1,0)}}function U_(n,o,a,s,l,p,m,y,_,$,T){var E=R();try{ol(n,o,a,s,l,p,m,y,_,$,T)}catch(O){if(M(E),O!==O+0)throw O;U(1,0)}}function j_(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe,Re){var Ne=R();try{return al(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q,X,oe,de,we,xe,Re)}catch(tt){if(M(Ne),tt!==tt+0)throw tt;U(1,0)}}function N_(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G){var q=R();try{sl(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G)}catch(X){if(M(q),X!==X+0)throw X;U(1,0)}}function V_(n,o,a,s,l,p,m){var y=R();try{ul(n,o,a,s,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;U(1,0)}}function W_(n,o,a,s,l){var p=R();try{ll(n,o,a,s,l)}catch(m){if(M(p),m!==m+0)throw m;U(1,0)}}function L_(n,o,a,s,l,p,m,y,_,$,T,E){var O=R();try{dl(n,o,a,s,l,p,m,y,_,$,T,E)}catch(j){if(M(O),j!==j+0)throw j;U(1,0)}}function G_(n,o,a,s,l,p,m){var y=R();try{cl(n,o,a,s,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;U(1,0)}}function H_(n,o,a,s,l){var p=R();try{pl(n,o,a,s,l)}catch(m){if(M(p),m!==m+0)throw m;U(1,0)}}function F_(n,o,a,s,l,p,m,y,_,$,T,E){var O=R();try{Hs(n,o,a,s,l,p,m,y,_,$,T,E)}catch(j){if(M(O),j!==j+0)throw j;U(1,0)}}function q_(n,o,a,s){var l=R();try{ml(n,o,a,s)}catch(p){if(M(l),p!==p+0)throw p;U(1,0)}}function K_(n,o,a,s,l,p,m,y){var _=R();try{hl(n,o,a,s,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;U(1,0)}}function Z_(n,o,a,s,l,p,m){var y=R();try{gl(n,o,a,s,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;U(1,0)}}function Q_(n,o,a,s,l){var p=R();try{yl(n,o,a,s,l)}catch(m){if(M(p),m!==m+0)throw m;U(1,0)}}function Y_(n,o,a,s){var l=R();try{return fl(n,o,a,s)}catch(p){if(M(l),p!==p+0)throw p;U(1,0)}}function X_(n,o,a,s){var l=R();try{return Bl(n,o,a,s)}catch(p){if(M(l),p!==p+0)throw p;U(1,0)}}function J_(n,o,a,s,l){var p=R();try{bl(n,o,a,s,l)}catch(m){if(M(p),m!==m+0)throw m;U(1,0)}}function ew(n,o,a,s){var l=R();try{return _l(n,o,a,s)}catch(p){if(M(l),p!==p+0)throw p;U(1,0)}}function tw(n,o,a,s,l,p){var m=R();try{return wl(n,o,a,s,l,p)}catch(y){if(M(m),y!==y+0)throw y;U(1,0)}}function rw(n,o,a,s,l){var p=R();try{return vl(n,o,a,s,l)}catch(m){if(M(p),m!==m+0)throw m;U(1,0)}}function nw(n,o,a,s,l,p,m){var y=R();try{return $l(n,o,a,s,l,p,m)}catch(_){if(M(y),_!==_+0)throw _;U(1,0)}}function iw(n,o,a,s,l,p,m,y,_,$,T,E){var O=R();try{xl(n,o,a,s,l,p,m,y,_,$,T,E)}catch(j){if(M(O),j!==j+0)throw j;U(1,0)}}function ow(n,o,a,s,l){var p=R();try{return Sl(n,o,a,s,l)}catch(m){if(M(p),m!==m+0)throw m;U(1,0)}}function aw(n,o,a,s,l,p,m,y,_,$,T,E,O){var j=R();try{Cl(n,o,a,s,l,p,m,y,_,$,T,E,O)}catch(G){if(M(j),G!==G+0)throw G;U(1,0)}}function sw(n,o,a,s,l,p,m,y){var _=R();try{return Tl(n,o,a,s,l,p,m,y)}catch($){if(M(_),$!==$+0)throw $;U(1,0)}}function uw(n,o,a,s,l){var p=R();try{return Il(n,o,a,s,l)}catch(m){if(M(p),m!==m+0)throw m;U(1,0)}}function lw(n,o,a,s,l){var p=R();try{return El(n,o,a,s,l)}catch(m){if(M(p),m!==m+0)throw m;U(1,0)}}function dw(n,o,a,s,l){var p=R();try{return Al(n,o,a,s,l)}catch(m){if(M(p),m!==m+0)throw m;U(1,0)}}function cw(n){var o=R();try{return Aa(n)}catch(a){if(M(o),a!==a+0)throw a;return U(1,0),0n}}function pw(n,o,a,s,l,p){var m=R();try{return Ia(n,o,a,s,l,p)}catch(y){if(M(m),y!==y+0)throw y;U(1,0)}}function fw(n,o,a,s,l,p){var m=R();try{return nl(n,o,a,s,l,p)}catch(y){if(M(m),y!==y+0)throw y;U(1,0)}}function mw(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q){var X=R();try{el(n,o,a,s,l,p,m,y,_,$,T,E,O,j,G,q)}catch(oe){if(M(X),oe!==oe+0)throw oe;U(1,0)}}return r.stackSave=()=>R(),r.stackRestore=n=>M(n),r.stackAlloc=n=>Fn(n),r.setValue=function(n,o,a="i8"){switch(a.endsWith("*")&&(a="*"),a){case"i1":case"i8":_e()[n>>>0]=o;break;case"i16":Ee()[n>>>1>>>0]=o;break;case"i32":D()[n>>>2>>>0]=o;break;case"i64":se[n>>>3]=BigInt(o);break;case"float":ve()[n>>>2>>>0]=o;break;case"double":Ge()[n>>>3>>>0]=o;break;case"*":J()[n>>>2>>>0]=o;break;default:yt(`invalid type for setValue: ${a}`)}},r.getValue=function(n,o="i8"){switch(o.endsWith("*")&&(o="*"),o){case"i1":case"i8":return _e()[n>>>0];case"i16":return Ee()[n>>>1>>>0];case"i32":return D()[n>>>2>>>0];case"i64":return se[n>>>3];case"float":return ve()[n>>>2>>>0];case"double":return Ge()[n>>>3>>>0];case"*":return J()[n>>>2>>>0];default:yt(`invalid type for getValue: ${o}`)}},r.UTF8ToString=Me,r.stringToUTF8=Ht,r.lengthBytesUTF8=uo,function n(){if(0<Lt)tr=n;else if(f)t(r),er();else{for(;0<An.length;)An.shift()(r);0<Lt?tr=n:(r.calledRun=!0,fe||(er(),t(r)))}}(),r.PTR_SIZE=4,u}),xw=bd,Cw=globalThis.self?.name?.startsWith("em-pthread");Cw&&bd()});var xd,ai,Sw,Qe,Cd,oi,Tw,Iw,Sd,Aw,vd,Td,$d,Id,Dr=Z(()=>{"use strict";Br();xd=typeof location>"u"?void 0:location.origin,ai=import.meta.url>"file:"&&import.meta.url<"file;",Sw=()=>{if(!!1){if(ai){let e=URL;return new URL(new e("ort.webgpu.bundle.min.mjs",import.meta.url).href,xd).href}return import.meta.url}},Qe=Sw(),Cd=()=>{if(Qe&&!Qe.startsWith("blob:"))return Qe.substring(0,Qe.lastIndexOf("/")+1)},oi=(e,t)=>{try{let i=t??Qe;return(i?new URL(e,i):new URL(e)).origin===xd}catch{return!1}},Tw=(e,t)=>{let i=t??Qe;try{return(i?new URL(e,i):new URL(e)).href}catch{return}},Iw=(e,t)=>`${t??"./"}${e}`,Sd=async e=>{let i=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(i)},Aw=async e=>(await import(/*webpackIgnore:true*/e)).default,vd=(yd(),or(gd)).default,Td=async()=>{if(!Qe)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(oi(Qe))return[void 0,vd()];let e=await Sd(Qe);return[e,vd(e)]},$d=(wd(),or(_d)).default,Id=async(e,t,i)=>{if(!e&&!t&&$d&&Qe&&oi(Qe))return[void 0,$d];{let r="ort-wasm-simd-threaded.jsep.mjs",u=e??Tw(r,t),d=!!1&&i&&u&&!oi(u,t),c=d?await Sd(u):u??Iw(r,t);return[d?c:void 0,await Aw(c)]}}});var si,ui,Gr,Ad,Ew,kw,Mr,Ie,It=Z(()=>{"use strict";Dr();ui=!1,Gr=!1,Ad=!1,Ew=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},kw=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Mr=async e=>{if(ui)return Promise.resolve();if(Gr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ad)throw new Error("previous call to 'initializeWebAssembly()' failed.");Gr=!0;let t=e.initTimeout,i=e.numThreads;if(!kw())throw new Error("WebAssembly SIMD is not supported in the current environment.");let r=Ew();i>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+i+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=i=1);let u=e.wasmPaths,d=typeof u=="string"?u:void 0,c=u?.mjs,f=c?.href??c,h=u?.wasm,g=h?.href??h,b=e.wasmBinary,[w,v]=await Id(f,d,i>1),C=!1,x=[];if(t>0&&x.push(new Promise(S=>{setTimeout(()=>{C=!0,S()},t)})),x.push(new Promise((S,k)=>{let A={numThreads:i};if(b)A.wasmBinary=b;else if(g||d)A.locateFile=I=>g??d+I;else if(f&&f.indexOf("blob:")!==0)A.locateFile=I=>new URL(I,f).href;else if(w){let I=Cd();I&&(A.locateFile=P=>I+P)}v(A).then(I=>{Gr=!1,ui=!0,si=I,S(),w&&URL.revokeObjectURL(w)},I=>{Gr=!1,Ad=!0,k(I)})})),await Promise.race(x),C)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Ie=()=>{if(ui&&si)return si;throw new Error("WebAssembly is not initialized yet.")}});var Ye,ur,Se,Hr=Z(()=>{"use strict";It();Ye=(e,t)=>{let i=Ie(),r=i.lengthBytesUTF8(e)+1,u=i._malloc(r);return i.stringToUTF8(e,u,r),t.push(u),u},ur=(e,t,i,r)=>{if(typeof e=="object"&&e!==null){if(i.has(e))throw new Error("Circular reference in options");i.add(e)}Object.entries(e).forEach(([u,d])=>{let c=t?t+u:u;if(typeof d=="object")ur(d,c+".",i,r);else if(typeof d=="string"||typeof d=="number")r(c,d.toString());else if(typeof d=="boolean")r(c,d?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof d}`)})},Se=e=>{let t=Ie(),i=t.stackSave();try{let r=t.PTR_SIZE,u=t.stackAlloc(2*r);t._OrtGetLastError(u,u+r);let d=Number(t.getValue(u,r===4?"i32":"i64")),c=t.getValue(u+r,"*"),f=c?t.UTF8ToString(c):"";throw new Error(`${e} ERROR_CODE: ${d}, ERROR_MESSAGE: ${f}`)}finally{t.stackRestore(i)}}});var Ed,kd=Z(()=>{"use strict";It();Hr();Ed=e=>{let t=Ie(),i=0,r=[],u=e||{};try{if(e?.logSeverityLevel===void 0)u.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)u.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(u.terminate=!1);let d=0;return e?.tag!==void 0&&(d=Ye(e.tag,r)),i=t._OrtCreateRunOptions(u.logSeverityLevel,u.logVerbosityLevel,!!u.terminate,d),i===0&&Se("Can't create run options."),e?.extra!==void 0&&ur(e.extra,"",new WeakSet,(c,f)=>{let h=Ye(c,r),g=Ye(f,r);t._OrtAddRunConfigEntry(i,h,g)!==0&&Se(`Can't set a run config entry: ${c} - ${f}.`)}),[i,r]}catch(d){throw i!==0&&t._OrtReleaseRunOptions(i),r.forEach(c=>t._free(c)),d}}});var Pw,zw,Ow,Fr,Bw,Pd,zd=Z(()=>{"use strict";It();Hr();Pw=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},zw=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Ow=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(i=>(typeof i=="string"?i:i.name)==="webgpu")&&(e.enableMemPattern=!1)},Fr=(e,t,i,r)=>{let u=Ye(t,r),d=Ye(i,r);Ie()._OrtAddSessionConfigEntry(e,u,d)!==0&&Se(`Can't set a session config entry: ${t} - ${i}.`)},Bw=async(e,t,i)=>{for(let r of t){let u=typeof r=="string"?r:r.name,d=[];switch(u){case"webnn":if(u="WEBNN",typeof r!="string"){let w=r?.deviceType;w&&Fr(e,"deviceType",w,i)}break;case"webgpu":if(u="JS",typeof r!="string"){let b=r;if(b?.preferredLayout){if(b.preferredLayout!=="NCHW"&&b.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${b.preferredLayout}`);Fr(e,"preferredLayout",b.preferredLayout,i)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${u}`)}let c=Ye(u,i),f=d.length,h=0,g=0;if(f>0){h=Ie()._malloc(f*Ie().PTR_SIZE),i.push(h),g=Ie()._malloc(f*Ie().PTR_SIZE),i.push(g);for(let b=0;b<f;b++)Ie().setValue(h+b*Ie().PTR_SIZE,d[b][0],"*"),Ie().setValue(g+b*Ie().PTR_SIZE,d[b][1],"*")}await Ie()._OrtAppendExecutionProvider(e,c,h,g,f)!==0&&Se(`Can't append execution provider: ${u}.`)}},Pd=async e=>{let t=Ie(),i=0,r=[],u=e||{};Ow(u);try{let d=Pw(u.graphOptimizationLevel??"all"),c=zw(u.executionMode??"sequential"),f=typeof u.logId=="string"?Ye(u.logId,r):0,h=u.logSeverityLevel??2;if(!Number.isInteger(h)||h<0||h>4)throw new Error(`log serverity level is not valid: ${h}`);let g=u.logVerbosityLevel??0;if(!Number.isInteger(g)||g<0||g>4)throw new Error(`log verbosity level is not valid: ${g}`);let b=typeof u.optimizedModelFilePath=="string"?Ye(u.optimizedModelFilePath,r):0;if(i=t._OrtCreateSessionOptions(d,!!u.enableCpuMemArena,!!u.enableMemPattern,c,!!u.enableProfiling,0,f,h,g,b),i===0&&Se("Can't create session options."),u.executionProviders&&await Bw(i,u.executionProviders,r),u.enableGraphCapture!==void 0){if(typeof u.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${u.enableGraphCapture}`);Fr(i,"enableGraphCapture",u.enableGraphCapture.toString(),r)}if(u.freeDimensionOverrides)for(let[w,v]of Object.entries(u.freeDimensionOverrides)){if(typeof w!="string")throw new Error(`free dimension override name must be a string: ${w}`);if(typeof v!="number"||!Number.isInteger(v)||v<0)throw new Error(`free dimension override value must be a non-negative integer: ${v}`);let C=Ye(w,r);t._OrtAddFreeDimensionOverride(i,C,v)!==0&&Se(`Can't set a free dimension override: ${w} - ${v}.`)}return u.extra!==void 0&&ur(u.extra,"",new WeakSet,(w,v)=>{Fr(i,w,v,r)}),[i,r]}catch(d){throw i!==0&&t._OrtReleaseSessionOptions(i)!==0&&Se("Can't release session options."),r.forEach(c=>t._free(c)),d}}});var Kt,At,Et,qr,lr,Kr,Zr,li,ce=Z(()=>{"use strict";Kt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},At=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Et=(e,t)=>{let i=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((u,d)=>u*d,1);return i>0?Math.ceil(r*i):void 0},qr=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},lr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Kr=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Zr=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",li=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}});var dr,di=Z(()=>{"use strict";Br();dr=async e=>{if(typeof e=="string")if(!1)try{let{readFile:t}=Qn("node:fs/promises");return new Uint8Array(await t(e))}catch(t){if(t.code==="ERR_FS_FILE_TOO_LARGE"){let{createReadStream:i}=Qn("node:fs"),r=i(e),u=[];for await(let d of r)u.push(d);return new Uint8Array(Buffer.concat(u))}throw t}else{let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let i=t.headers.get("Content-Length"),r=i?parseInt(i,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let u=t.body.getReader(),d;try{d=new ArrayBuffer(r)}catch(f){if(f instanceof RangeError){let h=Math.ceil(r/65536);d=new WebAssembly.Memory({initial:h,maximum:h}).buffer}else throw f}let c=0;for(;;){let{done:f,value:h}=await u.read();if(f)break;let g=h.byteLength;new Uint8Array(d,c,g).set(h),c+=g}return new Uint8Array(d,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}});var Dw,Mw,Od,Bd,Qr,Rw,be,dt=Z(()=>{"use strict";ce();Dw=["V","I","W","E","F"],Mw=(e,t)=>{console.log(`[${Dw[e]},${new Date().toISOString()}]${t}`)},Qr=(e,t)=>{Od=e,Bd=t},Rw=(e,t)=>{let i=lr(e),r=lr(Od);i>=r&&Mw(i,typeof t=="function"?t():t)},be=(...e)=>{Bd&&Rw(...e)}});var ci,ct,W,Rt,Yr,Dd,Md,he=Z(()=>{"use strict";ci=class{static calcMatMulShape(t,i){return t[1]!==i[0]?void 0:[t[0],i[1]]}},ct=class{static calcShape(t,i,r=!1){let u=t.length,d=i.length;if(u===0)return i;if(d===0)return t;let c=Math.max(t.length,i.length),f=new Array(c);if(r){if(u<2||d<2)return;let h=ci.calcMatMulShape([t[u-2],t[u-1]],[i[d-2],i[d-1]]);if(h===void 0)return;[f[c-2],f[c-1]]=h}for(let h=r?3:1;h<=c;h++){let g=u-h<0?1:t[u-h],b=d-h<0?1:i[d-h];if(g!==b&&g>1&&b>1)return;let w=Math.max(g,b);if(g&&b)f[c-h]=Math.max(g,b);else{if(w>1)return;f[c-h]=0}}return f}static isValidBroadcast(t,i){let r=t.length,u=i.length;if(r>u)return!1;for(let d=1;d<=r;d++)if(t[r-d]!==1&&t[r-d]!==i[u-d])return!1;return!0}},W=class e{static size(t){return e.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,i=4){let r=t.length;if(r===0)return[];let u=new Array(r),d=r-1;for(;d>=0;){if(t[d]%i===0){u[d]=t[d]/i;break}if(i%t[d]!==0)throw new Error("cannot convert shape");u[d]=1,i/=t[d],d--}for(d--;d>=0;d--)u[d]=t[d];return u}static sizeFromDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,i,t.length)}static sizeToDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeToDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,0,i)}static getSizeFromDimensionRange(t,i,r){let u=1;for(let d=i;d<r;d++){if(t[d]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");u*=Number(t[d])}return u}static computeStrides(t){let i=t.length;if(i===0)return[];if(i===1)return[1];let r=new Array(i);r[i-1]=1,r[i-2]=t[i-1];for(let u=i-3;u>=0;--u)r[u]=r[u+1]*t[u+1];return r}static normalizeAxis(t,i){if(t<-i&&t>=i)throw new Error("unsupported axis for this operation.");return t<0?t+i:t}static normalizeAxes(t,i){return t.map(r=>this.normalizeAxis(r,i??t.length))}static sortBasedOnPerm(t,i){return i?i.map(r=>t[r]):t.slice().reverse()}static padShape(t,i){let r=t.length;return t.map((u,d)=>u+i[d]+i[d+r])}static areEqual(t,i){return t.length!==i.length?!1:t.every((r,u)=>r===i[u])}},Rt=class e{static adjustPoolAttributes(t,i,r,u,d,c){if(!t&&r.length!==i.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let f=0;f<i.length-2;f++)f>=r.length?r.push(i[f+2]):r[f]=i[f+2];for(let f=0;f<r.length;f++)if(f<u.length){if(u[f]<0)throw new Error("strides should be greater than or equal to 1")}else u.push(1);for(let f=0;f<r.length;f++)if(f<d.length){if(d[f]<0)throw new Error("dilations should be greater than or equal to 1")}else d.push(1);for(let f=0;f<r.length*2;f++)if(f<c.length){if(c[f]<0)throw new Error("pad should be greater than or equal to 1")}else c.push(0);for(let f=0;f<r.length;f++){if(r[f]<=0)throw new Error("kernel shapes need to be greater than 0");if(c[f]>=r[f]||c[f+r.length]>=r[f])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,i,r,u,d,c,f){if(f){if(d.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(u.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let h=0;h<t.length-2;h++)e.adjustPadAndReturnShape(t[h+(c?1:2)],i[h],r[h],u[h],d,h,h+t.length-2,f)}}static computePoolOutputShape(t,i,r,u,d,c,f){if(i.length<=0)throw new Error("input shape must be of size greater than 0");let h=[i[0],i[1]];return e.computeShapeHelper(t,i,h,r,u,d,c,f),h}static computeConvOutputShape(t,i,r,u,d,c,f){if(t.length<=0||i.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let h=[t[0],i[0]];return e.computeShapeHelper(!1,t,h,r,u,d,c,f),h}static computeShapeHelper(t,i,r,u,d,c,f,h){if(t)for(let g=0;g<i.length-2;g++)r.push(1);else for(let g=0;g<i.length-2;g++)r.push(e.adjustPadAndReturnShape(i[g+2],u[g],d[g],c[g],f,g,g+i.length-2,h))}static adjustPadAndReturnShape(t,i,r,u,d,c,f,h){let g=r*(u-1)+1;if(h&&h!=="NOTSET")switch(h){case"VALID":return d[c]=0,d[f]=0,Math.floor((t-g)/i+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let w=((t+i-1)/i-1)*i+u-t;return d[c]=Math.floor(h==="SAME_LOWER"?(w+1)/2:w/2),d[f]=w-d[c],Math.floor((t+w-u)/i+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+d[c]+d[f]-g)/i+1)}},Yr=class{static getShapeOfGemmResult(t,i,r,u,d){if(t.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let c,f,h;i?(c=t[1],f=t[0]):(c=t[0],f=t[1]);let g=-1;if(u?(h=r[0],g=1):(h=r[1],g=0),r[g]!==f)throw new Error("dimension mismatch");if(c<=0||h<=0||f<=0)throw new Error("invalid shape specified");if(d&&!ct.isValidBroadcast(d,[c,h]))throw new Error("gemm: invalid bias shape for broadcast");return[c,h,f]}},Dd=-34028234663852886e22,Md=34028234663852886e22});var Xr,pi=Z(()=>{"use strict";ce();Xr=(e,t)=>new(qr(t))(e)});var Uw,Rd,jw,Ud,Jr,en,fi,jd,Nd=Z(()=>{"use strict";dt();Uw=1,Rd=()=>Uw++,jw=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Ud=(e,t)=>{let i=jw.get(e);if(!i)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((r,u)=>r*u)*i/8):0},Jr=class{constructor(t){this.sessionId=t.sessionId,this.mlContext=t.context,this.mlTensor=t.tensor,this.dataType=t.dataType,this.tensorShape=t.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return Ud(this.dataType,this.tensorShape)}destroy(){be("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(t){this.mlContext.writeTensor(this.mlTensor,t)}async read(t){return t?this.mlContext.readTensor(this.mlTensor,t):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(t,i,r){return this.mlContext===t&&this.dataType===i&&this.tensorShape.length===r.length&&this.tensorShape.every((u,d)=>u===r[d])}},en=class{constructor(t,i){this.tensorManager=t;this.wrapper=i}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(t,i,r,u){let d=this.tensorManager.getMLContext(t);if(this.wrapper){if(this.wrapper.canReuseTensor(d,i,r))return this.wrapper.tensor;if(u){if(this.wrapper.byteLength!==Ud(i,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let c=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(t,i,r,c,!0,!0),u&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(t){if(this.wrapper)if(t.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else be("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(t){if(this.activeUpload)if(t){t instanceof ArrayBuffer?new Uint8Array(t).set(this.activeUpload):new Uint8Array(t.buffer,t.byteOffset,t.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return t?this.wrapper.read(t):this.wrapper.read()}},fi=class{constructor(t){this.backend=t;this.tensorTrackersById=new Map;this.freeTensors=[];this.externalTensors=new Set}getMLContext(t){let i=this.backend.getMLContext(t);if(!i)throw new Error("MLContext not found for session.");return i}reserveTensorId(){let t=Rd();return this.tensorTrackersById.set(t,new en(this)),t}releaseTensorId(t){let i=this.tensorTrackersById.get(t);i&&(this.tensorTrackersById.delete(t),i.tensorWrapper&&this.releaseTensor(i.tensorWrapper))}async ensureTensor(t,i,r,u,d){be("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${i}, dataType: ${r}, shape: ${u}, copyOld: ${d}}`);let c=this.tensorTrackersById.get(i);if(!c)throw new Error("Tensor not found.");return c.ensureTensor(t,r,u,d)}upload(t,i){let r=this.tensorTrackersById.get(t);if(!r)throw new Error("Tensor not found.");r.upload(i)}async download(t,i){be("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${t}, dstBuffer: ${i?.byteLength}}`);let r=this.tensorTrackersById.get(t);if(!r)throw new Error("Tensor not found.");return r.download(i)}releaseTensorsForSession(t){for(let i of this.freeTensors)i.sessionId===t&&i.destroy();this.freeTensors=this.freeTensors.filter(i=>i.sessionId!==t)}registerTensor(t,i,r,u){let d=this.getMLContext(t),c=Rd(),f=new Jr({sessionId:t,context:d,tensor:i,dataType:r,shape:u});return this.tensorTrackersById.set(c,new en(this,f)),this.externalTensors.add(f),c}async getCachedTensor(t,i,r,u,d,c){let f=this.getMLContext(t);for(let[g,b]of this.freeTensors.entries())if(b.canReuseTensor(f,i,r)){be("verbose",()=>`[WebNN] Reusing tensor {dataType: ${i}, shape: ${r}}`);let w=this.freeTensors.splice(g,1)[0];return w.sessionId=t,w}be("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${i}, shape: ${r}}`);let h=await f.createTensor({dataType:i,shape:r,dimensions:r,usage:u,writable:d,readable:c});return new Jr({sessionId:t,context:f,tensor:h,dataType:i,shape:r})}releaseTensor(t){this.externalTensors.has(t)&&this.externalTensors.delete(t),this.freeTensors.push(t)}},jd=(...e)=>new fi(...e)});var mi,Nw,tn,Vd=Z(()=>{"use strict";ce();It();pi();Nd();dt();mi=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Nw=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let i=Object.keys(e).sort(),r=Object.keys(t).sort();return i.length===r.length&&i.every((u,d)=>u===r[d]&&e[u]===t[u])},tn=class{constructor(t){this.tensorManager=jd(this);this.mlContextBySessionId=new Map;this.sessionIdsByMLContext=new Map;this.mlContextCache=[];this.sessionGraphInputs=new Map;this.temporaryGraphInputs=[];this.temporarySessionTensorIds=new Map;Qr(t.logLevel,!!t.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(t){be("verbose",()=>`[WebNN] onRunStart {sessionId: ${t}}`),this.activeSessionId=t}onRunEnd(t){be("verbose",()=>`[WebNN] onRunEnd {sessionId: ${t}}`);let i=this.temporarySessionTensorIds.get(t);if(i){for(let r of i)be("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(t),this.activeSessionId=void 0}}async createMLContext(t){if(t instanceof GPUDevice){let r=this.mlContextCache.findIndex(u=>u.gpuDevice===t);if(r!==-1)return this.mlContextCache[r].mlContext;{let u=await navigator.ml.createContext(t);return this.mlContextCache.push({gpuDevice:t,mlContext:u}),u}}else if(t===void 0){let r=this.mlContextCache.findIndex(u=>u.options===void 0&&u.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let u=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:u}),u}}let i=this.mlContextCache.findIndex(r=>Nw(r.options,t));if(i!==-1)return this.mlContextCache[i].mlContext;{let r=await navigator.ml.createContext(t);return this.mlContextCache.push({options:t,mlContext:r}),r}}registerMLContext(t,i){this.mlContextBySessionId.set(t,i);let r=this.sessionIdsByMLContext.get(i);r||(r=new Set,this.sessionIdsByMLContext.set(i,r)),r.add(t),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(t,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(t){this.sessionGraphInputs.delete(t);let i=this.mlContextBySessionId.get(t);if(!i)return;this.tensorManager.releaseTensorsForSession(t),this.mlContextBySessionId.delete(t);let r=this.sessionIdsByMLContext.get(i);if(r.delete(t),r.size===0){this.sessionIdsByMLContext.delete(i);let u=this.mlContextCache.findIndex(d=>d.mlContext===i);u!==-1&&this.mlContextCache.splice(u,1)}}getMLContext(t){return this.mlContextBySessionId.get(t)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(t){be("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${t}}`),this.tensorManager.releaseTensorId(t)}async ensureTensor(t,i,r,u,d){let c=mi.get(r);if(!c)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(t??this.currentSessionId,i,c,u,d)}async createTemporaryTensor(t,i,r){be("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${i}, shape: ${r}}`);let u=mi.get(i);if(!u)throw new Error(`Unsupported ONNX data type: ${i}`);let d=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(t,d,u,r,!1);let c=this.temporarySessionTensorIds.get(t);return c?c.push(d):this.temporarySessionTensorIds.set(t,[d]),d}uploadTensor(t,i){if(!Ie().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");be("verbose",()=>`[WebNN] uploadTensor {tensorId: ${t}, data: ${i.byteLength}}`),this.tensorManager.upload(t,i)}async downloadTensor(t,i){return this.tensorManager.download(t,i)}createMLTensorDownloader(t,i){return async()=>{let r=await this.tensorManager.download(t);return Xr(r,i)}}registerMLTensor(t,i,r,u){let d=mi.get(r);if(!d)throw new Error(`Unsupported ONNX data type: ${r}`);let c=this.tensorManager.registerTensor(t,i,d,u);return be("verbose",()=>`[WebNN] registerMLTensor {tensor: ${i}, dataType: ${d}, dimensions: ${u}} -> {tensorId: ${c}}`),c}registerMLConstant(t,i,r,u,d,c){if(!c)throw new Error("External mounted files are not available.");let f=t;t.startsWith("./")&&(f=t.substring(2));let h=c.get(f);if(!h)throw new Error(`File with name ${f} not found in preloaded files.`);if(i+r>h.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let g=h.slice(i,i+r).buffer,b;switch(d.dataType){case"float32":b=new Float32Array(g);break;case"float16":b=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(g):new Uint16Array(g);break;case"int32":b=new Int32Array(g);break;case"uint32":b=new Uint32Array(g);break;case"int64":b=new BigInt64Array(g);break;case"uint64":b=new BigUint64Array(g);break;case"int8":b=new Int8Array(g);break;case"int4":case"uint4":case"uint8":b=new Uint8Array(g);break;default:throw new Error(`Unsupported data type: ${d.dataType} in creating WebNN Constant from external data.`)}return be("verbose",()=>`[WebNN] registerMLConstant {dataType: ${d.dataType}, shape: ${d.shape}}}`),u.constant(d,b)}registerGraphInput(t){this.temporaryGraphInputs.push(t)}isGraphInput(t,i){let r=this.sessionGraphInputs.get(t);return r?r.includes(i):!1}flush(){}}});var rn=Z(()=>{"use strict"});var Wd,hi,gi,Vw,Ww,Ld,bi,yi,Hd,Fd=Z(()=>{"use strict";dt();rn();Wd=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),hi=[],gi=e=>Math.ceil(Number(e)/16)*16,Vw=e=>{for(let t=0;t<hi.length;t++){let i=hi[t];if(e<=i)return i}return Math.ceil(e/16)*16},Ww=1,Ld=()=>Ww++,bi=async(e,t,i,r)=>{let u=gi(i),d=e.device.createBuffer({size:u,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let c=e.getCommandEncoder();e.endComputePass(),c.copyBufferToBuffer(t,0,d,0,u),e.flush(),await d.mapAsync(GPUMapMode.READ);let f=d.getMappedRange();if(r){let h=r();return h.set(new Uint8Array(f,0,i)),h}else return new Uint8Array(f.slice(0,i))}finally{d.destroy()}},yi=class{constructor(t){this.backend=t;this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[i]of Wd)hi.push(i),this.freeBuffers.set(i,[]),this.freeUniformBuffers.set(i,[]);this.sessionCount=0}upload(t,i){let r=i.buffer,u=i.byteOffset,d=i.byteLength,c=gi(d),f=this.storageCache.get(t);if(!f)throw new Error("gpu data for uploading does not exist");if(Number(f.originalSize)!==d)throw new Error(`inconsistent data size. gpu data size=${f.originalSize}, data size=${d}`);let h=this.backend.device.createBuffer({mappedAtCreation:!0,size:c,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),g=h.getMappedRange();new Uint8Array(g).set(new Uint8Array(r,u,d)),h.unmap();let b=this.backend.device.createCommandEncoder();b.copyBufferToBuffer(h,0,f.gpuData.buffer,0,c),this.backend.device.queue.submit([b.finish()]),h.destroy(),be("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${t})`)}memcpy(t,i){let r=this.storageCache.get(t);if(!r)throw new Error("source gpu data for memcpy does not exist");let u=this.storageCache.get(i);if(!u)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==u.originalSize)throw new Error("inconsistent source and destination gpu data size");let d=gi(r.originalSize),c=this.backend.getCommandEncoder();this.backend.endComputePass(),c.copyBufferToBuffer(r.gpuData.buffer,0,u.gpuData.buffer,0,d)}registerExternalBuffer(t,i,r){let u;if(r){if(u=r[0],t===r[1])return be("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${i}) => id=${u}, buffer is the same, skip.`),u;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else u=Ld();return this.storageCache.set(u,{gpuData:{id:u,type:0,buffer:t},originalSize:i}),be("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${i}) => id=${u}, registered.`),u}unregisterExternalBuffer(t){t!==void 0&&(this.storageCache.delete(t),be("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${t}`))}create(t,i=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Vw(t),u,d=(i&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,c=(i&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(d||c){let g=(d?this.freeBuffers:this.freeUniformBuffers).get(r);g?g.length>0?u=g.pop():u=this.backend.device.createBuffer({size:r,usage:i}):u=this.backend.device.createBuffer({size:r,usage:i})}else u=this.backend.device.createBuffer({size:r,usage:i});let f={id:Ld(),type:0,buffer:u};return this.storageCache.set(f.id,{gpuData:f,originalSize:Number(t)}),be("verbose",()=>`[WebGPU] GpuDataManager.create(size=${t}) => id=${f.id}`),f}get(t){return this.storageCache.get(t)?.gpuData}release(t){let i=typeof t=="bigint"?Number(t):t,r=this.storageCache.get(i);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return be("verbose",()=>`[WebGPU] GpuDataManager.release(id=${i}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(i),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(t,i){let r=this.storageCache.get(Number(t));if(!r)throw new Error("data does not exist");await bi(this.backend,r.gpuData.buffer,r.originalSize,i)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let t of this.buffersPending){let i=Wd.get(t.size);if((t.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(t.size)||[];i===void 0||r.length>=i?t.destroy():r.push(t)}else if((t.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(t.size)||[];i===void 0||r.length>=i?t.destroy():r.push(t)}else t.destroy()}this.buffersPending=[]}else{let t=this.capturedPendingBuffers.get(this.backend.currentSessionId);t||(t=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,t));for(let i of this.buffersPending)t.push(i);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(t=>{t.forEach(i=>{i.destroy()})}),this.freeUniformBuffers.forEach(t=>{t.forEach(i=>{i.destroy()})}),this.storageCache.forEach(t=>{t.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(t=>{t.forEach(i=>{i.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(t){let i=this.capturedPendingBuffers.get(t);i&&(i.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(t)),this.sessionCount-=1,this.sessionCount===0&&(be("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Hd=(...e)=>new yi(...e)});var _i,pe,Be=Z(()=>{"use strict";_i=class{constructor(t){Object.assign(this,t)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(t=>`${this[t]}`).join(";")),this.key}},pe=e=>new _i(e)});var Ut,vi,Ae,Ve,Y,$e,$i,jt,nt,ne,nn,L,K,qd,on,wi,Kd,ye=Z(()=>{"use strict";ce();he();Ut=64,vi=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ae=(e,t=1)=>{let i=vi(e,t);return typeof i=="string"?i:i[0]},Ve=(e,t=1)=>{let i=vi(e,t);return typeof i=="string"?i:i[1]},Y=(...e)=>{let t=[];return e.forEach(i=>{i.length!==0&&t.push({type:12,data:i},{type:12,data:W.computeStrides(i)})}),t},$e=e=>e%4===0?4:e%2===0?2:1,$i=(e="f32",t,i="0")=>!t||t===1?`${e}(${i})`:`vec${t}<${e}>(${i})`,jt=(e,t,i)=>e==="f32"?i:t===1?`f32(${i})`:`vec${t}<f32>(${i})`,nt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ne=(e,t,i,r)=>e.startsWith("uniforms.")&&i>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:i>1?`${e}[${t}]`:e,nn=(e,t,i,r,u)=>{let d=typeof i=="number",c=d?i:i.length,f=[...new Array(c).keys()],h=c<2?"u32":c<=4?`vec${c}<u32>`:`array<u32, ${c}>`,g=vi(t,u),b=typeof g=="string"?g:g[1],w=typeof g=="string"?g:g[0],v={indices:h,value:b,storage:w,tensor:t},C=D=>typeof D=="string"?D:`${D}u`,x={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},S=d?"uniforms.":"",k=`${S}${e}_shape`,A=`${S}${e}_strides`,I="";for(let D=0;D<c-1;D++)I+=`
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
  }`,B=D=>(x.offsetToIndices=!0,c<2?D:`o2i_${e}(${D})`),V=[];if(c>=2)for(let D=c-1;D>=0;D--)V.push(`${ne(A,D,c)} * (indices[${D}])`);let N=c<2?"":`
  fn i2o_${e}(indices: ${v.indices}) -> u32 {
    return ${V.join("+")};
  }`,H=D=>(x.indicesToOffset=!0,c<2?D:`i2o_${e}(${D})`),F=(...D)=>c===0?"0u":`${v.indices}(${D.map(C).join(",")})`,Q=(D,J)=>c<2?`${D}`:`${ne(D,J,c)}`,te=(D,J,ve)=>c<2?`${D}=${ve};`:`${ne(D,J,c)}=${ve};`,ie={},ue=(D,J)=>{x.broadcastedIndicesToOffset=!0;let ve=`${J.name}broadcastedIndicesTo${e}Offset`;if(ve in ie)return`${ve}(${D})`;let Ge=[];for(let ze=c-1;ze>=0;ze--){let De=J.indicesGet("outputIndices",ze+J.rank-c);Ge.push(`${Q(A,ze)} * (${De} % ${Q(k,ze)})`)}return ie[ve]=`fn ${ve}(outputIndices: ${J.type.indices}) -> u32 {
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
  }`})();return{impl:()=>{let D=[],J=!1;return x.offsetToIndices&&(D.push(P),J=!0),x.indicesToOffset&&(D.push(N),J=!0),x.broadcastedIndicesToOffset&&(Object.values(ie).forEach(ve=>D.push(ve)),J=!0),x.set&&(D.push(_e),J=!0),x.setByIndices&&(D.push(le),J=!0),x.get&&(D.push(re),J=!0),x.getByIndices&&(D.push(Pe),J=!0),!d&&J&&D.unshift(`const ${k} = ${v.indices}(${i.join(",")});`,`const ${A} = ${v.indices}(${W.computeStrides(i).join(",")});`),D.join(`
`)},type:v,offsetToIndices:B,indicesToOffset:H,broadcastedIndicesToOffset:ue,indices:F,indicesGet:Q,indicesSet:te,set:(...D)=>{if(D.length!==c+1)throw new Error(`indices length must be ${c}`);let J=D[c];if(typeof J!="string")throw new Error("value must be string");let ve=D.slice(0,c).map(C).join(",");return c===0?ee("0u",J):c===1?ee(ve[0],J):(x.set=!0,x.setByIndices=!0,x.indicesToOffset=!0,`set_${e}(${ve}, ${J})`)},setByOffset:ee,setByIndices:(D,J)=>c<2?ee(D,J):(x.setByIndices=!0,x.indicesToOffset=!0,`set_${e}ByIndices(${D}, ${J});`),get:ae,getByOffset:se,getByIndices:fe,usage:r,name:e,strides:A,shape:k,rank:c}},L=(e,t,i,r=1)=>nn(e,t,i,"input",r),K=(e,t,i,r=1)=>nn(e,t,i,"output",r),qd=(e,t,i)=>nn(e,t,i,"atomicOutput",1),on=(e,t,i,r=1)=>nn(e,t,i,"internal",r),wi=class{constructor(t,i){this.normalizedDispatchGroup=t;this.limits=i;this.internalVariables=[];this.variables=[];this.uniforms=[];this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(t){return`if (global_idx >= ${typeof t=="number"?`${t}u`:t}) { return; }`}mainStart(t=Ut){let i=typeof t=="number"?t:t[0],r=typeof t=="number"?1:t[1],u=typeof t=="number"?1:t[2];if(i>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||u>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${i}, ${r}, ${u}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(i*r*u>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${i}, ${r}, ${u}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let d=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,c=d?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,f=d?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${i*r*u}u + local_idx;`;return`@compute @workgroup_size(${i}, ${r}, ${u})
  fn main(${c}) {
    ${f}
  `}appendVariableUniforms(t){t.rank!==0&&(t.shape.startsWith("uniforms.")&&this.uniforms.push({name:t.shape.replace("uniforms.",""),type:"u32",length:t.rank}),t.strides.startsWith("uniforms.")&&this.uniforms.push({name:t.strides.replace("uniforms.",""),type:"u32",length:t.rank}))}declareVariable(t,i){if(t.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(t),this.appendVariableUniforms(t);let r=t.usage==="input"?"read":"read_write",u=t.usage==="atomicOutput"?"atomic<i32>":t.type.storage;return`@group(0) @binding(${i}) var<storage, ${r}> ${t.name}: array<${u}>;`}declareVariables(...t){return t.map(i=>this.declareVariable(i,this.variableIndex++)).join(`
`)}registerInternalVariable(t){if(t.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(t),this.appendVariableUniforms(t)}registerInternalVariables(...t){return t.forEach(i=>this.registerInternalVariable(i)),this}registerUniform(t,i,r=1){return this.uniforms.push({name:t,type:i,length:r}),this}registerUniforms(t){return this.uniforms=this.uniforms.concat(t),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let t=[];for(let{name:i,type:r,length:u}of this.uniforms)if(u&&u>4)r==="f16"?t.push(`@align(16) ${i}:array<mat2x4<${r}>, ${Math.ceil(u/8)}>`):t.push(`${i}:array<vec4<${r}>, ${Math.ceil(u/4)}>`);else{let d=u==null||u===1?r:`vec${u}<${r}>`;t.push(`${i}:${d}`)}return`
      struct Uniforms { ${t.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(t=>t.impl()).join(`
`)+this.internalVariables.map(t=>t.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let t=i=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(i)];return this.uniforms.map(i=>[t(i.type),i.length??1])}},Kd=(e,t)=>new wi(e,t)});var Lw,Zd,Gw,Hw,Fw,qw,We,Qd,Yd,wt=Z(()=>{"use strict";ce();he();Be();ye();Lw=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Zd=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Gw=(e,t)=>W.sortBasedOnPerm(e,Zd(e.length,t)),Hw=(e,t,i,r)=>{let u=`fn perm(i: ${r.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`;for(let d=0;d<t;++d)u+=`a[${e[d]}]=i[${d}];`;return u+="return a;}"},Fw=(e,t)=>{let i=[],r=[];for(let u=0;u<e.length;++u)e[u]!==1&&i.push(e[u]),e[t[u]]!==1&&r.push(t[u]);return{newShape:i,newPerm:r}},qw=(e,t)=>{let i=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<i)return!1;i=e[r]}return!0},We=(e,t)=>{let i=e.dataType,r=e.dims.length,u=Zd(r,t),d=Gw(e.dims,u),c=e.dims,f=d,h=r<2||qw(u,e.dims),g;if(h)return g=S=>{let k=L("input",i,c,4),A=K("output",i,f,4);return`
  ${S.registerUniform("output_size","u32").declareVariables(k,A)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let S=W.size(d);return{outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(S/64/4)},programUniforms:[{type:12,data:Math.ceil(S/4)}]}},getShaderSource:g};let{newShape:b,newPerm:w}=Fw(e.dims,u),v=W.areEqual(w,[2,3,1]),C=W.areEqual(w,[3,1,2]);if(b.length===2||v||C){c=v?[b[0],b[1]*b[2]]:C?[b[0]*b[1],b[2]]:b,f=[c[1],c[0]];let S=16;return g=k=>{let A=L("a",i,c.length),I=K("output",i,f.length);return`
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
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let k=W.size(d);return{outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f[1]/S),y:Math.ceil(f[0]/S)},programUniforms:[{type:12,data:k},...Y(c,f)]}},getShaderSource:g}}return g=S=>{let k=L("a",i,c.length),A=K("output",i,f.length);return`
  ${S.registerUniform("output_size","u32").declareVariables(k,A)}

  ${Hw(u,r,k,A)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${A.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${A.setByOffset("global_idx",k.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let S=W.size(d);return{outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...Y(c,f)]}},getShaderSource:g}},Qd=(e,t)=>{Lw(e.inputs,t.perm),e.compute(We(e.inputs[0],t.perm))},Yd=e=>pe({perm:e.perm})});var Kw,Zw,Qw,Yw,Xw,Jw,e0,t0,r0,n0,pt,Xd,Jd,ec,tc,rc,nc,ic,oc,ac,sc,uc=Z(()=>{"use strict";ce();he();ye();an();wt();Kw={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Zw={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Qw={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Yw={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Xw=(e,t)=>{let i=[];for(let r=t-e;r<t;++r)i.push(r);return i},Jw=(e,t)=>{let i=[],r=e.length;for(let d=0;d<r;d++)t.indexOf(d)===-1&&i.push(e[d]);let u=t.map(d=>e[d]);return[i,u]},e0=(e,t)=>{let i=e.length+t.length,r=[],u=0;for(let d=0;d<i;d++)t.indexOf(d)===-1?r.push(e[u++]):r.push(1);return r},t0=(e,t)=>{for(let i=0;i<e.length;++i)if(e[e.length-i-1]!==t-1-i)return!1;return!0},r0=(e,t)=>{let i=[];if(!t0(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&i.push(r);e.forEach(r=>i.push(r))}return i},n0=(e,t,i,r,u,d,c)=>{let f=i[0].dims,h=W.size(d),g=W.size(c),b=L("_A",i[0].dataType,f),w=K("output",u,d),v=64;h===1&&(v=256);let C=`
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

          var bestValue = f32(${Qw[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${v}) {
           let candidate = f32(${b.getByOffset("offset + k")});
           bestValue = ${Kw[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${v}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Zw[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${w.setByOffset("outputIndex",`${r==="mean"?`${w.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${w.type.storage}(${Yw[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${v}`,inputDependencies:["type"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:d,dataType:u}],dispatchGroup:{x:h},programUniforms:[{type:12,data:g}]})}},pt=(e,t,i,r)=>{let u=e.inputs.length===1?i:xi(e.inputs,i),d=u.axes;d.length===0&&!u.noopWithEmptyAxes&&(d=e.inputs[0].dims.map((C,x)=>x));let c=W.normalizeAxes(d,e.inputs[0].dims.length),f=c,h=e.inputs[0],g=r0(f,e.inputs[0].dims.length);g.length>0&&(h=e.compute(We(e.inputs[0],g),{inputs:[0],outputs:[-1]})[0],f=Xw(f.length,h.dims.length));let[b,w]=Jw(h.dims,f),v=b;u.keepDims&&(v=e0(b,c)),e.compute(n0(t,u.cacheKey,[h],r,e.inputs[0].dataType,v,w),{inputs:[h]})},Xd=(e,t)=>{pt(e,"ReduceMeanShared",t,"mean")},Jd=(e,t)=>{pt(e,"ReduceL1Shared",t,"l1")},ec=(e,t)=>{pt(e,"ReduceL2Shared",t,"l2")},tc=(e,t)=>{pt(e,"ReduceLogSumExpShared",t,"logSumExp")},rc=(e,t)=>{pt(e,"ReduceMaxShared",t,"max")},nc=(e,t)=>{pt(e,"ReduceMinShared",t,"min")},ic=(e,t)=>{pt(e,"ReduceProdShared",t,"prod")},oc=(e,t)=>{pt(e,"ReduceSumShared",t,"sum")},ac=(e,t)=>{pt(e,"ReduceSumSquareShared",t,"sumSquare")},sc=(e,t)=>{pt(e,"ReduceLogSumShared",t,"logSum")}});var ft,i0,sn,xi,mt,o0,a0,s0,u0,l0,d0,c0,p0,f0,m0,ht,lc,dc,cc,pc,fc,mc,hc,gc,yc,bc,an=Z(()=>{"use strict";ce();he();Be();ye();uc();ft=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},i0=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],sn=(e,t,i,r,u,d,c=!1,f=!1)=>{let h=[],g=i[0].dims,b=g.length,w=W.normalizeAxes(u,b),v=!f&&w.length===0;g.forEach((k,A)=>{v||w.indexOf(A)>=0?c&&h.push(1):h.push(k)});let C=h.length,x=W.size(h);return{name:e,shaderCache:t,getShaderSource:k=>{let A=[],I=L("_A",i[0].dataType,b),P=K("output",d,C),B=r(I,P,w),V=B[2];for(let N=0,H=0;N<b;N++)v||w.indexOf(N)>=0?(c&&H++,V=`for(var j${N}: u32 = 0; j${N} < ${g[N]}; j${N}++) {
                  ${B[2].includes("last_index")?`let last_index = j${N};`:""}
                  ${I.indicesSet("input_indices",N,`j${N}`)}
                  ${V}
                }`):(A.push(`${I.indicesSet("input_indices",N,P.indicesGet("output_indices",H))};`),H++);return`

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
        }`},getRunData:()=>({outputs:[{dims:h,dataType:d}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:[{type:12,data:x},...Y(g,h)]})}},xi=(e,t)=>{let i=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>i.push(Number(r))),pe({axes:i,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},mt=(e,t,i,r)=>{let u=e.inputs,d=u.length===1?i:xi(u,i);e.compute(sn(t,{hint:d.cacheKey,inputDependencies:["rank"]},[u[0]],d.noopWithEmptyAxes&&d.axes.length===0?i0:r,d.axes,u[0].dataType,d.keepDims,d.noopWithEmptyAxes),{inputs:[0]})},o0=(e,t)=>{ft(e.inputs),mt(e,"ReduceLogSum",t,(r,u)=>[`var value = ${u.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},a0=(e,t)=>{ft(e.inputs),mt(e,"ReduceL1",t,(r,u)=>[`var value = ${u.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},s0=(e,t)=>{ft(e.inputs),mt(e,"ReduceL2",t,(r,u)=>[`var t = ${u.type.value}(0); var value = ${u.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},u0=(e,t)=>{ft(e.inputs),mt(e,"ReduceLogSumExp",t,(r,u)=>[`var value = ${u.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},l0=(e,t)=>{ft(e.inputs),mt(e,"ReduceMax",t,(r,u,d)=>{let c=[];for(let f=0;f<r.rank;f++)(d.indexOf(f)>=0||d.length===0)&&c.push(r.indicesSet("input_indices",f,0));return[`${c.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},d0=(e,t)=>{ft(e.inputs),mt(e,"ReduceMean",t,(r,u,d)=>{let c=1;for(let f=0;f<r.rank;f++)(d.indexOf(f)>=0||d.length===0)&&(c*=e.inputs[0].dims[f]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${u.type.value}(sum / ${c});`]})},c0=(e,t)=>{ft(e.inputs),mt(e,"ReduceMin",t,(r,u,d)=>{let c=[];for(let f=0;f<r.rank;f++)(d.indexOf(f)>=0||d.length===0)&&c.push(`input_indices[${f}] = 0;`);return[`${c.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},p0=(e,t)=>{ft(e.inputs),mt(e,"ReduceProd",t,(r,u)=>[`var value = ${u.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},f0=(e,t)=>{ft(e.inputs),mt(e,"ReduceSum",t,(r,u)=>[`var value = ${u.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},m0=(e,t)=>{ft(e.inputs),mt(e,"ReduceSumSquare",t,(r,u)=>[`var t = ${u.type.value}(0); var value = ${u.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},ht=(e,t,i)=>{if(t.length===0)return i;let r=1,u=1;for(let d=0;d<t.length;d++)t.indexOf(d)===-1?r*=e[d]:u*=e[d];return u<32&&r>1024},lc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?d0(e,t):Xd(e,t)},dc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?a0(e,t):Jd(e,t)},cc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?s0(e,t):ec(e,t)},pc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?u0(e,t):tc(e,t)},fc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?l0(e,t):rc(e,t)},mc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?c0(e,t):nc(e,t)},hc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?p0(e,t):ic(e,t)},gc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?f0(e,t):oc(e,t)},yc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?m0(e,t):ac(e,t)},bc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?o0(e,t):sc(e,t)}});var _c,wc,vc,Ci,$c=Z(()=>{"use strict";ce();Be();an();_c=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},wc=(e,t)=>{_c(e.inputs);let i=(r,u,d)=>{let c=[];for(let f=0;f<r.rank;f++)(d.indexOf(f)>=0||d.length===0)&&c.push(`input_indices[${f}] = 0;`);return[`${c.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",u.setByOffset("global_idx","best_index")]};e.compute(sn("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},vc=(e,t)=>{_c(e.inputs);let i=(r,u,d)=>{let c=[];for(let f=0;f<r.rank;f++)(d.indexOf(f)>=0||d.length===0)&&c.push(`input_indices[${f}] = 0;`);return[`${c.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",u.setByOffset("global_idx","best_index")]};e.compute(sn("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},Ci=e=>pe(e)});var h0,Si,g0,y0,b0,Zt,_0,xc,un=Z(()=>{"use strict";ce();he();rn();ye();h0=(e,t)=>{let i=e[0],r=e[1],u=e[2],d=e[3],c=e[4],f=e[5];if(c&&f)throw new Error("Attention cannot have both past and attention_bias");if(i.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let h=i.dims[0],g=i.dims[1],b=i.dims[2];if(u.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==b)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(u.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let w=u.dims[0]/3,v=w,C=v;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let P of t.qkvHiddenSizes)if(P%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");w=t.qkvHiddenSizes[0],v=t.qkvHiddenSizes[1],C=t.qkvHiddenSizes[2]}let x=g;if(w!==v)throw new Error("qkv_hidden_sizes first element should be same as the second");if(u.dims[0]!==w+v+C)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let S=0;if(c){if(v!==C)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(c.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(c.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(c.dims[1]!==h)throw new Error('Input "past" second dimension must be batch_size');if(c.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(c.dims[4]!==v/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(S=c.dims[3])}let k=x+S,A=-1,I=0;if(d)throw new Error("Mask not supported");if(c)throw new Error("past is not supported");if(f){if(f.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(f.dims[0]!==h||f.dims[1]!==t.numHeads||f.dims[2]!==g||f.dims[3]!==k)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:g,pastSequenceLength:S,kvSequenceLength:x,totalSequenceLength:k,maxSequenceLength:A,inputHiddenSize:b,hiddenSize:w,vHiddenSize:C,headSize:Math.floor(w/t.numHeads),vHeadSize:Math.floor(C/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:I,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Si=(e,t,i)=>t&&e?`
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
    `,g0=(e,t,i,r,u,d,c,f)=>{let h=$e(c?1:d),g=64,b=d/h;b<g&&(g=32);let w=Math.ceil(d/h/g),v=[{type:12,data:t},{type:12,data:i},{type:12,data:r},{type:12,data:u},{type:12,data:b},{type:12,data:w}],C=Ae(e.dataType,h),x=Ve(1,h),S=["type"];c&&S.push("type"),f&&S.push("type");let k=A=>{let I=K("x",e.dataType,e.dims,h),P=[I],B=c?L("seq_lens",c.dataType,c.dims):void 0;B&&P.push(B);let V=f?L("total_sequence_length_input",f.dataType,f.dims):void 0;V&&P.push(V);let N=Ve(e.dataType),H=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
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
        x[offset + i] = ${I.type.value}(${N}(1.0) / ${N}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${x}(x[offset + i]);
        x[offset + i] = ${I.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${c?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${I.type.value}(${N}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${g};${C};${h}`,inputDependencies:S},getShaderSource:k,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:u,z:t*i},programUniforms:v})}},y0=(e,t,i,r,u,d,c,f,h)=>{let g=c+d.kvSequenceLength,b=[d.batchSize,d.numHeads,d.sequenceLength,g],w=e>1&&r,v=d.kvNumHeads?d.kvNumHeads:d.numHeads,C=w?[d.batchSize,v,g,d.headSize]:void 0,x=d.nReps?d.nReps:1,S=d.scale===0?1/Math.sqrt(d.headSize):d.scale,k=$e(d.headSize),A=d.headSize/k,I=12,P={x:Math.ceil(g/I),y:Math.ceil(d.sequenceLength/I),z:d.batchSize*d.numHeads},B=[{type:12,data:d.sequenceLength},{type:12,data:A},{type:12,data:g},{type:12,data:d.numHeads},{type:12,data:d.headSize},{type:1,data:S},{type:12,data:c},{type:12,data:d.kvSequenceLength},{type:12,data:x}],V=w&&r&&W.size(r.dims)>0,N=["type","type"];V&&N.push("type"),u&&N.push("type"),f&&N.push("type"),h&&N.push("type");let H=[{dims:b,dataType:t.dataType,gpuDataType:0}];w&&H.push({dims:C,dataType:t.dataType,gpuDataType:0});let F=Q=>{let te=L("q",t.dataType,t.dims,k),ie=L("key",i.dataType,i.dims,k),ue=[te,ie];if(V){let le=L("past_key",r.dataType,r.dims,k);ue.push(le)}u&&ue.push(L("attention_bias",u.dataType,u.dims));let ee=f?L("seq_lens",f.dataType,f.dims):void 0;ee&&ue.push(ee);let se=h?L("total_sequence_length_input",h.dataType,h.dims):void 0;se&&ue.push(se);let Pe=K("output",t.dataType,b),re=[Pe];w&&re.push(K("present_key",t.dataType,C,k));let ae=Ve(1,k),fe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${I}u;

  var<workgroup> tileQ: array<${te.type.storage}, ${I*I}>;
  var<workgroup> tileK: array<${te.type.storage}, ${I*I}>;
  ${Q.registerUniforms(fe).declareVariables(...ue,...re)}
  ${Q.mainStart([I,I,1])}
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
        output[outputIdx] = ${Pe.type.value} (sum * uniforms.alpha) + ${u?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${k};${u!==void 0};${r!==void 0};${e}`,inputDependencies:N},getRunData:()=>({outputs:H,dispatchGroup:P,programUniforms:B}),getShaderSource:F}},b0=(e,t,i,r,u,d,c=void 0,f=void 0)=>{let h=d+u.kvSequenceLength,g=u.nReps?u.nReps:1,b=u.vHiddenSize*g,w=e>1&&r,v=u.kvNumHeads?u.kvNumHeads:u.numHeads,C=w?[u.batchSize,v,h,u.headSize]:void 0,x=[u.batchSize,u.sequenceLength,b],S=12,k={x:Math.ceil(u.vHeadSize/S),y:Math.ceil(u.sequenceLength/S),z:u.batchSize*u.numHeads},A=[{type:12,data:u.sequenceLength},{type:12,data:h},{type:12,data:u.vHeadSize},{type:12,data:u.numHeads},{type:12,data:u.headSize},{type:12,data:b},{type:12,data:d},{type:12,data:u.kvSequenceLength},{type:12,data:g}],I=w&&r&&W.size(r.dims)>0,P=["type","type"];I&&P.push("type"),c&&P.push("type"),f&&P.push("type");let B=[{dims:x,dataType:t.dataType,gpuDataType:0}];w&&B.push({dims:C,dataType:t.dataType,gpuDataType:0});let V=N=>{let H=L("probs",t.dataType,t.dims),F=L("v",i.dataType,i.dims),Q=[H,F];I&&Q.push(L("past_value",r.dataType,r.dims));let te=c?L("seq_lens",c.dataType,c.dims):void 0;c&&Q.push(te);let ie=f?L("total_sequence_length_input",f.dataType,f.dims):void 0;f&&Q.push(ie);let ee=[K("output",t.dataType,x)];w&&ee.push(K("present_value",t.dataType,C));let se=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${S}u;
  var<workgroup> tileQ: array<${H.type.value}, ${S*S}>;
  var<workgroup> tileV: array<${H.type.value}, ${S*S}>;
  ${N.registerUniforms(se).declareVariables(...Q,...ee)}
  ${N.mainStart([S,S,1])}
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:P},getRunData:()=>({outputs:B,dispatchGroup:k,programUniforms:A}),getShaderSource:V}},Zt=(e,t,i,r,u,d,c,f,h,g,b=void 0,w=void 0)=>{let v=Math.min(e.outputCount,1+(c?1:0)+(f?1:0)),C=v>1?g.pastSequenceLength:0,x=C+g.kvSequenceLength,S=h&&W.size(h.dims)>0?h:void 0,k=[t,i];v>1&&c&&W.size(c.dims)>0&&k.push(c),S&&k.push(S),b&&k.push(b),w&&k.push(w);let A=e.compute(y0(v,t,i,c,S,g,C,b,w),{inputs:k,outputs:v>1?[-1,1]:[-1]})[0];e.compute(g0(A,g.batchSize,g.numHeads,C,g.sequenceLength,x,b,w),{inputs:b&&w?[A,b,w]:[A],outputs:[]});let I=[A,r];v>1&&f&&W.size(f.dims)>0&&I.push(f),b&&I.push(b),w&&I.push(w),e.compute(b0(v,A,r,f,g,C,b,w),{inputs:I,outputs:v>1?[0,2]:[0]})},_0=(e,t)=>{let i=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,u=t.inputHiddenSize,d=t.headSize,c=12,f={x:Math.ceil(t.headSize/c),y:Math.ceil(t.sequenceLength/c),z:t.batchSize*t.numHeads},h=[e.inputs[0],e.inputs[1],e.inputs[2]],g=[{type:12,data:r},{type:12,data:u},{type:12,data:d},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],b=w=>{let v=K("output_q",h[0].dataType,i),C=K("output_k",h[0].dataType,i),x=K("output_v",h[0].dataType,i),S=L("input",h[0].dataType,h[0].dims),k=L("weight",h[1].dataType,h[1].dims),A=L("bias",h[2].dataType,h[2].dims),I=S.type.storage,P=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:f,programUniforms:g}),getShaderSource:b},{inputs:h,outputs:[-1,-1,-1]})},xc=(e,t)=>{let i=h0(e.inputs,t),[r,u,d]=_0(e,i);return Zt(e,r,u,d,e.inputs[4],void 0,void 0,void 0,e.inputs[5],i)}});var w0,v0,$0,Cc,Sc=Z(()=>{"use strict";Je();ce();he();Be();ye();w0=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let i=(r,u,d)=>{let c=u.length;if(c!==r.length)throw new Error(`${d}: num dimensions != ${c}`);u.forEach((f,h)=>{if(f!==r[h])throw new Error(`${d}: dim[${h}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);i(e[1].dims,r,"Invalid input scale"),i(e[2].dims,r,"Invalid input B"),i(e[3].dims,r,"Invalid input mean"),i(e[4].dims,r,"Invalid input var")}else i(e[1].dims,[1],"Invalid input scale"),i(e[2].dims,[1],"Invalid input B"),i(e[3].dims,[1],"Invalid input mean"),i(e[4].dims,[1],"Invalid input var")},v0=(e,t)=>{let{epsilon:i,spatial:r,format:u}=t,d=e[0].dims,c=r?$e(d[d.length-1]):1,f=u==="NHWC"&&d.length>1?c:1,h=W.size(d)/c,g=r,b=g?d.length:d,w=L("x",e[0].dataType,e[0].dims,c),v=L("scale",e[1].dataType,e[1].dims,f),C=L("bias",e[2].dataType,e[2].dims,f),x=L("inputMean",e[3].dataType,e[3].dims,f),S=L("inputVar",e[4].dataType,e[4].dims,f),k=K("y",e[0].dataType,b,c),A=()=>{let P="";if(r)P=`let cOffset = ${d.length===1?"0u":u==="NHWC"?`outputIndices[${d.length-1}] / ${c}`:"outputIndices[1]"};`;else if(u==="NCHW")P=`
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
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${c}`,inputDependencies:g?["rank","type","type","type","type"]:void 0},getShaderSource:I,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g?[{type:12,data:h},...Y(d)]:[{type:12,data:h}]})}},$0=e=>pe(e),Cc=(e,t)=>{let{inputs:i,outputCount:r}=e,u=$0({...t,outputCount:r});if(ke.webgpu.validateInputContent&&w0(i,u),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(v0(i,u))}});var x0,C0,Tc,Ic=Z(()=>{"use strict";he();ye();x0=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},C0=e=>{let t=e[0].dims,i=e[0].dims[2],r=W.size(t)/4,u=e[0].dataType,d=L("input",u,t,4),c=L("bias",u,[i],4),f=L("residual",u,t,4),h=K("output",u,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:b=>`
  const channels = ${i}u / 4;
  ${b.declareVariables(d,c,f,h)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${d.getByOffset("global_idx")}
      + ${c.getByOffset("global_idx % channels")} + ${f.getByOffset("global_idx")};
    ${h.setByOffset("global_idx","value")}
  }`}},Tc=e=>{x0(e.inputs),e.compute(C0(e.inputs))}});var S0,Ce,Ac,Ec,kc,Pc,zc,Oc,Bc,Dc,Mc,T0,Rc,Uc,jc,Nc,cr,Vc,ln,Wc,Lc,Gc,Hc,Fc,qc,Kc,Zc,Qc,Yc,Xc,Jc,ep,tp,rp,np,ip,op,Ti,Ii,ap,sp,up,I0,A0,lp,dn=Z(()=>{"use strict";ce();he();Be();ye();S0=(e,t,i,r,u,d,c)=>{let f=Math.ceil(t/4),h="";typeof u=="string"?h=`${u}(a)`:h=u("a");let g=L("inputData",i,[f],4),b=K("outputData",r,[f],4),w=[{name:"vec_size",type:"u32"}];return c&&w.push(...c),`
      ${e.registerUniforms(w).declareVariables(g,b)}

  ${d??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${g.getByOffset("global_idx")};
    ${b.setByOffset("global_idx",h)}
  }`},Ce=(e,t,i,r,u,d=e.dataType,c,f)=>{let h=[{type:12,data:Math.ceil(W.size(e.dims)/4)}];return c&&h.push(...c),{name:t,shaderCache:{hint:u,inputDependencies:["type"]},getShaderSource:g=>S0(g,W.size(e.dims),e.dataType,d,i,r,f),getRunData:g=>({outputs:[{dims:e.dims,dataType:d}],dispatchGroup:{x:Math.ceil(W.size(g[0].dims)/64/4)},programUniforms:h})}},Ac=e=>{e.compute(Ce(e.inputs[0],"Abs","abs"))},Ec=e=>{e.compute(Ce(e.inputs[0],"Acos","acos"))},kc=e=>{e.compute(Ce(e.inputs[0],"Acosh","acosh"))},Pc=e=>{e.compute(Ce(e.inputs[0],"Asin","asin"))},zc=e=>{e.compute(Ce(e.inputs[0],"Asinh","asinh"))},Oc=e=>{e.compute(Ce(e.inputs[0],"Atan","atan"))},Bc=e=>{e.compute(Ce(e.inputs[0],"Atanh","atanh"))},Dc=e=>pe(e),Mc=(e,t)=>{let i;switch(t.to){case 10:i="vec4<f16>";break;case 1:i="vec4<f32>";break;case 12:i="vec4<u32>";break;case 6:i="vec4<i32>";break;case 9:i="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Ce(e.inputs[0],"Cast",i,void 0,t.cacheKey,t.to))},T0=e=>{let t,i,r=e.length>=2&&e[1].data!==0,u=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,i=u?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,i=u?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return pe({min:t,max:i})},Rc=(e,t)=>{let i=t||T0(e.inputs),r=Ve(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Clip",u=>`clamp(${u}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,i.cacheKey,void 0,[{type:e.inputs[0].dataType,data:i.min},{type:e.inputs[0].dataType,data:i.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},Uc=e=>{e.compute(Ce(e.inputs[0],"Ceil","ceil"))},jc=e=>{e.compute(Ce(e.inputs[0],"Cos","cos"))},Nc=e=>{e.compute(Ce(e.inputs[0],"Cosh","cosh"))},cr=e=>pe(e),Vc=(e,t)=>{let i=Ve(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
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
}`,Wc=e=>{let t=Ve(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Erf",i=>`erf_vf32(${i})`,ln(t)))},Lc=e=>{e.compute(Ce(e.inputs[0],"Exp","exp"))},Gc=e=>{e.compute(Ce(e.inputs[0],"Floor","floor"))},Hc=e=>{let t=Ve(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Gelu",i=>`0.5 * ${i} * (1.0 + erf_vf32(${i} * 0.7071067811865475))`,ln(t)))},Fc=(e,t)=>{let i=Ve(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${i}>(0.0))`,`const leaky_relu_alpha_ = ${i}(${t.alpha});`,t.cacheKey))},qc=e=>{e.compute(Ce(e.inputs[0],"Not",t=>`!${t}`))},Kc=e=>{e.compute(Ce(e.inputs[0],"Neg",t=>`-${t}`))},Zc=e=>{e.compute(Ce(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Qc=e=>{let t=Ve(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"Relu",i=>`select(vec4<${t}>(0.0), ${i}, ${i} > vec4<${t}>(0.0))`))},Yc=e=>{e.compute(Ce(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Xc=e=>pe(e),Jc=(e,t)=>{let i=Ve(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"HardSigmoid",r=>`max(vec4<${i}>(0.0), min(vec4<${i}>(1.0), ${t.alpha} * ${r} + vec4<${i}>(${t.beta})))`,void 0,t.cacheKey))},ep=e=>{e.compute(Ce(e.inputs[0],"Sin","sin"))},tp=e=>{e.compute(Ce(e.inputs[0],"Sinh","sinh"))},rp=e=>{e.compute(Ce(e.inputs[0],"Sqrt","sqrt"))},np=e=>{e.compute(Ce(e.inputs[0],"Tan","tan"))},ip=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,op=e=>{e.compute(Ce(e.inputs[0],"Tanh",ip))},Ti=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ip("v")};
}
`,Ii=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,ap=e=>{let t=Ve(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"FastGelu",Ii,Ti(t),void 0,e.inputs[0].dataType))},sp=(e,t)=>{let i=Ve(e.inputs[0].dataType);return e.compute(Ce(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${i}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${i}>(${t.alpha});`,t.cacheKey)),0},up=e=>{e.compute(Ce(e.inputs[0],"Log","log"))},I0=(e,t)=>`
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
`,A0=e=>`quick_gelu_impl(${e})`,lp=(e,t)=>{let i=Ve(e.inputs[0].dataType);e.compute(Ce(e.inputs[0],"QuickGelu",A0,I0(i,t.alpha),t.cacheKey,e.inputs[0].dataType))}});var E0,k0,cp,pp=Z(()=>{"use strict";he();ye();dn();E0=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},k0=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let i=L("input",e[0].dataType,e[0].dims,4),r=L("bias",e[0].dataType,[e[0].dims[2]],4),u=K("output",e[0].dataType,t,4),d=W.size(t)/4,c=Ae(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)}}),getShaderSource:h=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${h.declareVariables(i,r,u)}

  ${ln(c)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes(d)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${u.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},cp=e=>{E0(e.inputs),e.compute(k0(e.inputs))}});var P0,z0,gt,fp,mp,hp,gp,yp,bp,_p,wp,vp,$p,xp=Z(()=>{"use strict";ce();he();ye();P0=(e,t,i,r,u,d,c,f,h,g,b,w)=>{let v,C;typeof f=="string"?v=C=(I,P)=>`${f}((${I}),(${P}))`:typeof f=="function"?v=C=f:(v=f.scalar,C=f.vector);let x=K("outputData",b,r.length,4),S=L("aData",h,t.length,4),k=L("bData",g,i.length,4),A;if(u)if(d){let I=W.size(t)===1,P=W.size(i)===1,B=t.length>0&&t[t.length-1]%4===0,V=i.length>0&&i[i.length-1]%4===0;I||P?A=x.setByOffset("global_idx",C(I?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"),P?`${k.type.value}(${k.getByOffset("0")}.x)`:k.getByOffset("global_idx"))):A=`
            let outputIndices = ${x.offsetToIndices("global_idx * 4u")};
            let offsetA = ${S.broadcastedIndicesToOffset("outputIndices",x)};
            let offsetB = ${k.broadcastedIndicesToOffset("outputIndices",x)};
            ${x.setByOffset("global_idx",C(c||B?S.getByOffset("offsetA / 4u"):`${S.type.value}(${S.getByOffset("offsetA / 4u")}[offsetA % 4u])`,c||V?k.getByOffset("offsetB / 4u"):`${k.type.value}(${k.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else A=x.setByOffset("global_idx",C(S.getByOffset("global_idx"),k.getByOffset("global_idx")));else{if(!d)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let I=(P,B,V="")=>{let N=`aData[indexA${B}][componentA${B}]`,H=`bData[indexB${B}][componentB${B}]`;return`
            let outputIndices${B} = ${x.offsetToIndices(`global_idx * 4u + ${B}u`)};
            let offsetA${B} = ${S.broadcastedIndicesToOffset(`outputIndices${B}`,x)};
            let offsetB${B} = ${k.broadcastedIndicesToOffset(`outputIndices${B}`,x)};
            let indexA${B} = offsetA${B} / 4u;
            let indexB${B} = offsetB${B} / 4u;
            let componentA${B} = offsetA${B} % 4u;
            let componentB${B} = offsetB${B} % 4u;
            ${P}[${B}] = ${V}(${v(N,H)});
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
      }`},z0=(e,t,i,r,u,d,c=i.dataType)=>{let f=i.dims.map(S=>Number(S)??1),h=r.dims.map(S=>Number(S)??1),g=!W.areEqual(f,h),b=f,w=W.size(f),v=!1,C=!1,x=[g];if(g){let S=ct.calcShape(f,h,!1);if(!S)throw new Error("Can't perform binary op on the given tensors");b=S.slice(),w=W.size(b);let k=W.size(f)===1,A=W.size(h)===1,I=f.length>0&&f[f.length-1]%4===0,P=h.length>0&&h[h.length-1]%4===0;x.push(k),x.push(A),x.push(I),x.push(P);let B=1;for(let V=1;V<b.length;V++){let N=f[f.length-V],H=h[h.length-V];if(N===H)B*=N;else break}B%4===0?(C=!0,v=!0):(k||A||I||P)&&(v=!0)}else v=!0;return x.push(v),{name:e,shaderCache:{hint:t+x.map(S=>S.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:S=>P0(S,f,h,b,v,g,C,u,i.dataType,r.dataType,c,d),getRunData:()=>({outputs:[{dims:b,dataType:c}],dispatchGroup:{x:Math.ceil(w/64/4)},programUniforms:[{type:12,data:Math.ceil(W.size(b)/4)},...Y(f,h,b)]})}},gt=(e,t,i,r,u,d)=>{e.compute(z0(t,u??"",e.inputs[0],e.inputs[1],i,r,d))},fp=e=>{gt(e,"Add",(t,i)=>`${t}+${i}`)},mp=e=>{gt(e,"Div",(t,i)=>`${t}/${i}`)},hp=e=>{gt(e,"Equal",{scalar:(t,i)=>`u32(${t}==${i})`,vector:(t,i)=>`vec4<u32>(${t}==${i})`},void 0,void 0,9)},gp=e=>{gt(e,"Mul",(t,i)=>`${t}*${i}`)},yp=e=>{let t=L("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;gt(e,"Pow",{scalar:(r,u)=>`pow_custom(${r},${u})`,vector:(r,u)=>`pow_vector_custom(${r},${u})`},`
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
      `)},bp=e=>{gt(e,"Sub",(t,i)=>`${t}-${i}`)},_p=e=>{gt(e,"Greater",{scalar:(t,i)=>`u32(${t}>${i})`,vector:(t,i)=>`vec4<u32>(${t}>${i})`},void 0,void 0,9)},wp=e=>{gt(e,"Less",{scalar:(t,i)=>`u32(${t}<${i})`,vector:(t,i)=>`vec4<u32>(${t}<${i})`},void 0,void 0,9)},vp=e=>{gt(e,"GreaterOrEqual",{scalar:(t,i)=>`u32(${t}>=${i})`,vector:(t,i)=>`vec4<u32>(${t}>=${i})`},void 0,void 0,9)},$p=e=>{gt(e,"LessOrEqual",{scalar:(t,i)=>`u32(${t}<=${i})`,vector:(t,i)=>`vec4<u32>(${t}<=${i})`},void 0,void 0,9)}});var B0,D0,M0,R0,Cp,Sp,Tp=Z(()=>{"use strict";ce();he();Be();ye();B0=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let i=0,r=e[i],u=r.dataType,d=r.dims.length;e.forEach((c,f)=>{if(f!==i){if(c.dataType!==u)throw new Error("input tensors should be one type");if(c.dims.length!==d)throw new Error("input tensors should have the same shape");c.dims.forEach((h,g)=>{if(g!==t&&h!==r.dims[g])throw new Error("non concat dimensions must match")})}})},D0=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,M0=(e,t)=>{let i=e.length,r=[];for(let u=0;u<i;++u){let d=t.setByOffset("global_idx",e[u].getByIndices("indices"));i===1?r.push(d):u===0?r.push(`if (inputIndex == ${u}u) { ${d} }`):u===i-1?r.push(`else { ${d} }`):r.push(`else if (inputIndex == ${u}) { ${d} }`)}return r.join(`
`)},R0=(e,t,i,r)=>{let u=W.size(i),d=new Array(e.length),c=new Array(e.length),f=0,h=[],g=[],b=[{type:12,data:u}];for(let S=0;S<e.length;++S)f+=e[S].dims[t],d[S]=f,g.push(e[S].dims.length),c[S]=L(`input${S}`,r,g[S]),h.push("rank"),b.push({type:12,data:d[S]});for(let S=0;S<e.length;++S)b.push(...Y(e[S].dims));b.push(...Y(i));let w=K("output",r,i.length),v=w.indicesGet("indices",t),C=Array.from(Array(d.length).keys()).map(S=>`uniforms.sizeInConcatAxis${S}`).join(","),x=S=>`

  ${(()=>{S.registerUniform("outputSize","u32");for(let k=0;k<e.length;k++)S.registerUniform(`sizeInConcatAxis${k}`,"u32");return S.declareVariables(...c,w)})()}

  ${D0(d.length,C)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${w.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${v});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${d.length}u>(${C});
      ${v} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${M0(c,w)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:i,dataType:r}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:b}),getShaderSource:x}},Cp=(e,t)=>{let i=e.inputs,r=i[0].dims,u=W.normalizeAxis(t.axis,r.length);B0(i,u);let d=r.slice();d[u]=i.reduce((f,h)=>f+(h.dims.length>u?h.dims[u]:0),0);let c=i.filter(f=>W.size(f.dims)>0);e.compute(R0(c,u,d,i[0].dataType),{inputs:c})},Sp=e=>pe({axis:e.axis})});var it,ot,at,cn,kt=Z(()=>{"use strict";ce();he();it=(e,t,i="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${i}(uniforms.clip_min)), ${t}(${i}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${i}(uniforms.alpha) * value + ${i}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${i}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},ot=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},at=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},cn=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[i,r]=e?.activation_params||[.2,.5];return{activation:t,alpha:i,beta:r}}else if(t==="Clip"){let[i,r]=e?.activation_params||[Dd,Md];return{activation:t,clipMax:r,clipMin:i}}else if(t==="LeakyRelu"){let[i]=e?.activation_params||[.01];return{activation:t,alpha:i}}return{activation:t}}});var je,Ip,pn=Z(()=>{"use strict";je=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Ip=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `});var Ap,Ep=Z(()=>{"use strict";Ap=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`});var pr,fn,mn=Z(()=>{"use strict";ce();he();ye();kt();pr=(e,t,i,r,u)=>{let d=r-i;return`
      ${Array.from({length:i}).map((c,f)=>`
      if (${ne(t.shape,f,t.rank)} != 1) {
        ${t.indicesSet(e,f,ne(u,f+d,r))}
      } else {
        ${t.indicesSet(e,f,0)}
      }`).join("")}
`},fn=(e,t,i,r,u=!1,d)=>{let c=e[0].dims,f=e[1].dims,h=c[c.length-2],g=f[f.length-1],b=c[c.length-1],w=$e(g),v=$e(b),C=$e(h),x=W.size(i)/w/C,S=e.length>2,k=r?r.slice(0,-2):i.slice(0,-2),I=[W.size(k),h,g],P=[{type:12,data:x},{type:12,data:h},{type:12,data:g},{type:12,data:b}];ot(t,P),P.push(...Y(k,c,f)),S&&P.push(...Y(e[2].dims)),P.push(...Y(I));let B=V=>{let N=on("batch_dims",e[0].dataType,k.length),H=L("a",e[0].dataType,c.length,v),F=L("b",e[1].dataType,f.length,w),Q=K("output",e[0].dataType,I.length,w),te=Ae(Q.type.tensor),ie=it(t,Q.type.value,te),ue=[H,F],ee="";if(S){let re=u?w:1;ue.push(L("bias",e[2].dataType,e[2].dims.length,re)),ee=`${u?`value += bias[col / ${re}];`:`value += ${Q.type.value}(bias[row + i]);`}`}let se=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];at(t,se);let Pe=()=>{let re=`var a_data: ${H.type.value};`;for(let ae=0;ae<v;ae++)re+=`
              let b_data${ae} = b[(b_offset + (k + ${ae}) * uniforms.N + col) / ${w}];`;for(let ae=0;ae<C;ae++){re+=`a_data = a[(a_offset + (row + ${ae}) * uniforms.K + k) / ${v}];`;for(let fe=0;fe<v;fe++)re+=`
            values[${ae}] = fma(${F.type.value}(a_data${v===1?"":`[${fe}]`}), b_data${fe}, values[${ae}]);
`}return re};return`
  ${V.registerUniforms(se).registerInternalVariables(N).declareVariables(...ue,Q)}
  ${V.mainStart()}
    ${V.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${w})) * ${w};
    var index1 = global_idx / (uniforms.N / ${w});
    let stride1 = uniforms.M / ${C};
    let row = (index1 % stride1) * ${C};
    let batch = index1 / stride1;

    ${i.length===2?"":`let batch_indices = ${N.offsetToIndices("batch")};`}

    var a_indices: ${H.type.indices};
    ${pr("a_indices",H,H.rank-2,N.rank,"batch_indices")}
    ${H.indicesSet("a_indices",H.rank-2,0)}
    ${H.indicesSet("a_indices",H.rank-1,0)}
    let a_offset = ${H.indicesToOffset("a_indices")};

    var b_indices: ${F.type.indices};
    ${pr("b_indices",F,F.rank-2,N.rank,"batch_indices")}
    ${F.indicesSet("b_indices",F.rank-2,0)}
    ${F.indicesSet("b_indices",F.rank-1,0)}
    let b_offset = ${F.indicesToOffset("b_indices")};
    var values: array<${Q.type.value}, ${C}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${v}) {
      ${Pe()}
    }
    for (var i = 0u; i < ${C}u; i++) {
      var value = values[i];
      ${ee}
      ${ie}
      let cur_indices = ${Q.type.indices}(batch, row + i, col);
      let offset = ${Q.indicesToOffset("cur_indices")};
      ${Q.setByOffset(`offset / ${w}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${w};${v};${C};${u}`,inputDependencies:S?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:d?d(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:P}),getShaderSource:B}}});var U0,j0,Ai,kp,N0,Ei,V0,fr,hn=Z(()=>{"use strict";ce();he();ye();kt();mn();pn();U0=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,j0=(e,t)=>e?`
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
        }`,Ai=(e,t,i="f32",r,u=!1,d=32,c=!1,f=32)=>{let h=t[1]*e[1],g=t[0]*e[0],b=u?h:d,w=u?d:h,v=b/t[0],C=d/t[1];if(!((u&&v===4&&e[1]===4||!u&&(v===3||v===4))&&b%t[0]===0&&d%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${u} is true, innerElementSize ${v} and workPerThread[1] ${e[1]} must be 4.
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
          ${U0(u,r)}
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

          ${j0(u,v)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},kp=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,N0=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Ei=(e,t,i="f32",r,u=!1,d=32,c=!1,f=32,h=!1)=>{let g=e[1]*t[1],b=e[0]*t[0],w=u?g:d,v=u?d:g;if(!(v%t[1]===0&&w%t[0]===0&&d%t[1]===0))throw new Error(`tileAHight ${v} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${w} must be divisible by workgroupSize[0]${t[0]}, tileInner ${d} must be divisible by workgroupSize[1]${t[1]}`);let C=v/t[1],x=w/t[0],S=d/t[1],k=h?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${g};
    let globalColStart = i32(workgroupId.x) * ${b};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${v}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${w}; inputCol = inputCol + ${t[0]}) {
          ${kp(u,r)}
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
          let ACached = ${u?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
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
      ${kp(u,r)}
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
      ${N0(u)}
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
`},V0=(e,t,i,r,u=!1)=>{let[d,c,f,h]=r,g=Ae(r[0].type.tensor);return`
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
        ${t?`value = value + ${u?"bias[colIn]":`${je(e,g)}(bias[row])`};`:""}
        ${i}
        ${h.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},fr=(e,t,i,r,u=!1,d)=>{let c=e[0].dims,f=e[1].dims,h=c.slice(0,-2),g=f.slice(0,-2),b=r?r.slice(0,-2):i.slice(0,-2),w=W.size(b),v=c[c.length-2],C=c[c.length-1],x=f[f.length-1],S=C%4===0&&x%4===0,k=v<=8?[4,1,1]:[4,4,1],A=[8,8,1],I=[Math.ceil(x/A[0]/k[0]),Math.ceil(v/A[1]/k[1]),Math.ceil(w/A[2]/k[2])],P=S?4:1,B=[...h,v,C/P],V=B.length,N=[...g,C,x/P],H=N.length,F=[w,v,x/P],Q=[{type:6,data:v},{type:6,data:x},{type:6,data:C}];ot(t,Q),Q.push(...Y(b,B,N));let te=["rank","rank"],ie=e.length>2;ie&&(Q.push(...Y(e[2].dims)),te.push("rank")),Q.push(...Y(F));let ue=ee=>{let se=b.length,Pe=on("batchDims",e[0].dataType,se,1),re=Ae(e[0].dataType),ae=L("a",e[0].dataType,V,P),fe=L("b",e[1].dataType,H,P),le=K("result",e[0].dataType,F.length,P),_e=[ae,fe];if(ie){let J=u?P:1;_e.push(L("bias",e[2].dataType,e[2].dims.length,J))}let Te=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];at(t,Te);let Ee=Ae(le.type.tensor),me=it(t,le.type.value,Ee),D=V0(P,ie,me,[Pe,ae,fe,le],u);return`
  ${ee.registerUniforms(Te).registerInternalVariables(Pe).declareVariables(..._e,le)}
  ${D}
  ${S?Ai(k,A,re,Pe):Ei(k,A,re,Pe)}
                   `};return{name:"MatMul",shaderCache:{hint:`${k};${t.activation};${S};${u}`,inputDependencies:te},getRunData:()=>({outputs:[{dims:d?d(i):i,dataType:e[0].dataType}],dispatchGroup:{x:I[0],y:I[1],z:I[2]},programUniforms:Q}),getShaderSource:ue}}});var W0,Pp,zp=Z(()=>{"use strict";ce();dt();ye();kt();pn();Ep();hn();W0=(e,t,i,r,u=!1,d,c=4,f=4,h=4,g="f32")=>{let b=te=>{switch(te){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${g}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${te} is not supported.`)}},w=te=>{switch(te){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${te} is not supported.`)}},v=e?`
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
    return ${je(f,g)}(0.0);`,V=je(h,g),N=e?je(c,g):je(f,g),H=e?je(f,g):je(c,g),F=it(d,V,g);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${N} {
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
      ${Ip(u)}
      ${F}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Pp=(e,t,i,r,u,d,c,f,h)=>{let g=t.format==="NHWC",b=g?e[0].dims[3]:e[0].dims[1],w=i[0],v=g?i[2]:i[3],C=g?i[1]:i[2],x=g?i[3]:i[1],S=g&&(b%4===0||b%3===0)&&x%4===0,k=g?x:v*C,A=g?v*C:x,I=[8,8,1],P=r<=8?[4,1,1]:[4,4,1],B=[Math.ceil(k/I[0]/P[0]),Math.ceil(A/I[1]/P[1]),Math.ceil(w/I[2]/P[2])];be("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${B}`);let V=S?g&&b%4!==0?3:4:1,N=I[1]*P[1],H=I[0]*P[0],F=Math.max(I[0]*V,I[1]),Q=r%N===0,te=u%H===0,ie=d%F===0,ue=S?[V,4,4]:[1,1,1],ee=[{type:6,data:r},{type:6,data:u},{type:6,data:d},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];ot(t,ee),ee.push(...Y(e[0].dims,e[1].dims));let se=["rank","rank"];c&&(ee.push(...Y(e[2].dims)),se.push("rank")),ee.push(...Y(i));let Pe=re=>{let ae=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];at(t,ae);let fe=S?4:1,le=Ae(e[0].dataType),_e=`
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
        ${Ap("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${re.registerUniforms(ae).declareVariables(...me,D)}
        ${_e}
        ${W0(g,Q,te,ie,c,t,ue[0],ue[1],ue[2],le)}
        ${S?Ai(P,I,le,void 0,!g,F):Ei(P,I,le,void 0,!g,F,!1,void 0,f)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${V};${S};${Q};${te};${ie};${N};${H};${F}`,inputDependencies:se},getRunData:()=>({outputs:[{dims:h?h(i):i,dataType:e[0].dataType}],dispatchGroup:{x:B[0],y:B[1],z:B[2]},programUniforms:ee}),getShaderSource:Pe}}});var L0,Op,gn,G0,Bp,H0,Dp,Mp,Rp=Z(()=>{"use strict";ce();dt();he();ye();kt();pn();L0=e=>{let t=1;for(let i=0;i<e.length;i++)t*=e[i];return t},Op=e=>typeof e=="number"?[e,e,e]:e,gn=(e,t)=>t<=1?e:e+(e-1)*(t-1),G0=(e,t,i,r=1)=>{let u=gn(t,r);return Math.floor((e[0]*(i-1)-i+u)/2)},Bp=(e,t,i,r,u)=>{u==null&&(u=G0(e,t[0],r[0]));let d=[0,0,0,i];for(let c=0;c<3;c++)e[c]+2*u>=t[c]&&(d[c]=Math.trunc((e[c]-t[c]+2*u)/r[c]+1));return d},H0=(e,t,i,r,u,d,c,f,h,g)=>{let b,w,v,C;if(e==="VALID"&&(e=0),typeof e=="number"){b={top:e,bottom:e,left:e,right:e,front:e,back:e};let x=Bp([t,i,r,1],[f,h,g],1,[u,d,c],e);w=x[0],v=x[1],C=x[2]}else if(Array.isArray(e)){if(!e.every((S,k,A)=>S===A[0]))throw Error(`Unsupported padding parameter: ${e}`);b={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let x=Bp([t,i,r,1],[f,h,g],1,[u,d,c],e[0]);w=x[0],v=x[1],C=x[2]}else if(e==="SAME_UPPER"){w=Math.ceil(t/u),v=Math.ceil(i/d),C=Math.ceil(r/c);let x=(w-1)*u+f-t,S=(v-1)*d+h-i,k=(C-1)*c+g-r,A=Math.floor(x/2),I=x-A,P=Math.floor(S/2),B=S-P,V=Math.floor(k/2),N=k-V;b={top:P,bottom:B,left:V,right:N,front:A,back:I}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:b,outDepth:w,outHeight:v,outWidth:C}},Dp=(e,t,i,r,u,d=!1,c="channelsLast")=>{let f,h,g,b,w;if(c==="channelsLast")[f,h,g,b,w]=e;else if(c==="channelsFirst")[f,w,h,g,b]=e;else throw new Error(`Unknown dataFormat ${c}`);let[v,,C,x,S]=t,[k,A,I]=Op(i),[P,B,V]=Op(r),N=gn(C,P),H=gn(x,B),F=gn(S,V),{padInfo:Q,outDepth:te,outHeight:ie,outWidth:ue}=H0(u,h,g,b,k,A,I,N,H,F),ee=d?v*w:v,se=[0,0,0,0,0];return c==="channelsFirst"?se=[f,ee,te,ie,ue]:c==="channelsLast"&&(se=[f,te,ie,ue,ee]),{batchSize:f,dataFormat:c,inDepth:h,inHeight:g,inWidth:b,inChannels:w,outDepth:te,outHeight:ie,outWidth:ue,outChannels:ee,padInfo:Q,strideDepth:k,strideHeight:A,strideWidth:I,filterDepth:C,filterHeight:x,filterWidth:S,effectiveFilterDepth:N,effectiveFilterHeight:H,effectiveFilterWidth:F,dilationDepth:P,dilationHeight:B,dilationWidth:V,inShape:e,outShape:se,filterShape:t}},Mp=(e,t,i,r,u,d)=>{let c=d==="channelsLast",f=c?e[0].dims[3]:e[0].dims[1],h=!1,g=[64,1,1],b={x:i.map((I,P)=>P)},w=[Math.ceil(L0(b.x.map(I=>i[I]))/g[0]),1,1];be("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${w}`);let v=h?c&&f%4!==0?3:4:1,C=W.size(i),x=[{type:12,data:C},{type:12,data:r},{type:12,data:u},{type:12,data:t.strides},{type:12,data:t.dilations}];ot(t,x),x.push(...Y(e[0].dims,e[1].dims));let S=["rank","rank"],k=e.length===3;k&&(x.push(...Y(e[2].dims)),S.push("rank")),x.push(...Y(i));let A=I=>{let P=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:u.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];at(t,P);let B=h?4:1,V=Ae(e[0].dataType),N=L("x",e[0].dataType,e[0].dims.length,v===3?1:v),H=L("W",e[1].dataType,e[1].dims.length,B),F=[N,H],Q=K("result",e[0].dataType,i.length,B),te="";if(k){let ee=L("bias",e[2].dataType,e[2].dims.length,B);F.push(ee),te+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${h?`vec4<${V}>`:V} {
          return bias[${c?ne("coords",4,5):ne("coords",1,5)}${h?"/ 4":""}];
        }`}let ie=je(v,V),ue=it(t,ie,V);return`
            ${te}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${N.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${H.getByIndices("aIndices")};
            }
          ${I.registerUniforms(P).declareVariables(...F,Q)}
          ${I.mainStart()}
          ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${Q.offsetToIndices("global_idx")};
              let batch = ${ne("coords",0,N.rank)};
              let d2 = ${c?ne("coords",N.rank-1,N.rank):ne("coords",1,N.rank)};
              let xFRCCorner = vec3<u32>(${c?ne("coords",1,N.rank):ne("coords",2,N.rank)},
              ${c?ne("coords",2,N.rank):ne("coords",3,N.rank)},
              ${c?ne("coords",3,N.rank):ne("coords",4,N.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${c?ne("uniforms.x_shape",1,N.rank):ne("uniforms.x_shape",2,N.rank)};
              let xShapeZ = ${c?ne("uniforms.x_shape",2,N.rank):ne("uniforms.x_shape",3,N.rank)};
              let xShapeW = ${c?ne("uniforms.x_shape",3,N.rank):ne("uniforms.x_shape",4,N.rank)};
              let xShapeU = ${c?ne("uniforms.x_shape",4,N.rank):ne("uniforms.x_shape",1,N.rank)};
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
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${c};${v};${k}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:x}),getShaderSource:A}}});var Up,jp,Np=Z(()=>{"use strict";ce();he();ye();kt();Up=(e,t,i,r)=>{let u=e.length>2,d=u?"value += b[output_channel];":"",c=e[0].dims,f=e[1].dims,h=t.format==="NHWC",g=h?i[3]:i[1],b=g/t.group,w=h&&b>=4?$e(g):1,v=W.size(i)/w,C=[{type:12,data:v},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:b}];ot(t,C),C.push(...Y(c,[f[0],f[1],f[2],f[3]/w]));let x=u?["rank","rank","rank"]:["rank","rank"];C.push(...Y([i[0],i[1],i[2],i[3]/w]));let S=k=>{let A=K("output",e[0].dataType,i.length,w),I=Ae(A.type.tensor),P=it(t,A.type.value,I),B=L("x",e[0].dataType,c.length),V=L("w",e[1].dataType,f.length,w),N=[B,V];u&&N.push(L("b",e[2].dataType,e[2].dims,w));let H=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];at(t,H);let F=h?`
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
  ${k.registerUniforms(H).declareVariables(...N,A)}

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
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${w}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:C}),getShaderSource:S}},jp=(e,t,i,r)=>{let u=e.length>2,d=$e(i[3]),c=$e(i[2]),f=W.size(i)/d/c,h=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/d],g=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/d],b=[i[0],i[1],i[2],i[3]/d],w=[{type:12,data:f},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];ot(t,w),w.push(...Y(h,g,b));let v=(c-1)*t.strides[1]+g[1],C=x=>{let S=K("output",e[0].dataType,b.length,d),k=Ae(S.type.tensor),A=it(t,S.type.value,k),I=L("x",e[0].dataType,h.length,d),P=L("w",e[1].dataType,g.length,d),B=[I,P];u&&B.push(L("b",e[2].dataType,e[2].dims,d));let V=u?"value += b[output_channel];":"",N=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return at(t,N),`
  ${x.registerUniforms(N).declareVariables(...B,S)}
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
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${d};${c};${v};${g[0]};${g[1]}`,inputDependencies:u?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:w}),getShaderSource:C}}});var F0,ki,q0,Pi,zi,Vp,K0,Z0,Oi,Wp=Z(()=>{"use strict";he();zp();Rp();hn();Np();kt();mn();wt();F0=(e,t,i,r,u,d)=>{let c=e[0],f=e.slice(d?1:2,d?3:4),h=f.length,g=t[0],w=t.slice(2).map((x,S)=>x+(x-1)*(i[S]-1)),C=f.map((x,S)=>x+r[S]+r[S+h]).map((x,S)=>Math.floor((x-w[S]+u[S])/u[S]));return C.splice(0,0,c),C.splice(d?3:1,0,g),C},ki=[2,3,1,0],q0=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(i!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let u=e[0].dims.length-2;if(t.dilations.length!==u)throw new Error(`dilations should be ${u}D`);if(t.strides.length!==u)throw new Error(`strides should be ${u}D`);if(t.pads.length!==u*2)throw new Error(`pads should be ${u*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Pi=(e,t)=>{let i=e.kernelShape.slice();i.length<t[1].dims.length-2&&i.push(...Array(t[1].dims.length-2-i.length).fill(0));for(let d=2;d<t[1].dims.length;++d)i[d-2]===0&&(i[d-2]=t[1].dims[d]);let r=e.pads.slice();Rt.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,i,r,e.format==="NHWC",e.autoPad);let u=Object.assign({},e);return Object.assign(u,{kernelShape:i,pads:r}),u},zi=e=>{let t=cn(e),i=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],u=e.dilations,d=e.group,c=e.kernel_shape,f=e.pads,h=e.strides,g=e.w_is_const();return{autoPad:r,format:i,dilations:u,group:d,kernelShape:c,pads:f,strides:h,wIsConst:g,...t,cacheKey:`${e.format};${t.activation};`}},Vp=(e,t,i,r)=>{let u=i.format==="NHWC",d=F0(t[0].dims,t[1].dims,i.dilations,i.pads,i.strides,u);if(i.group!==1){let N=[t[0]];if(u){let F=e.kernelCustomData.wT??e.compute(We(t[1],ki),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=F),N.push(F)}else N.push(t[1]);t.length===3&&N.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&u&&t[1].dims[0]===i.group&&t[1].dims[1]===1&&i.dilations[0]===1&&i.dilations[1]===1?e.compute(jp(N,i,d,r),{inputs:N}):e.compute(Up(N,i,d,r),{inputs:N});return}let c=t.length===3,f=t[0].dims[u?1:2],h=t[0].dims[u?2:3],g=t[0].dims[u?3:1],b=t[1].dims[2],w=t[1].dims[3],v=d[u?1:2],C=d[u?2:3],x=d[u?3:1],S=u&&b===f&&w===h&&i.pads[0]===0&&i.pads[1]===0;if(S||b===1&&w===1&&i.dilations[0]===1&&i.dilations[1]===1&&i.strides[0]===1&&i.strides[1]===1&&i.pads[0]===0&&i.pads[1]===0){let N=d[0],H,F,Q,te=[];if(u){let ee=e.kernelCustomData.wT??e.compute(We(t[1],ki),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];if(i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=ee),S){let se=f*h*g;H=t[0].reshape([1,N,se]),F=ee.reshape([1,se,x]),Q=[1,N,x]}else H=t[0].reshape([N,f*h,g]),F=ee.reshape([1,g,x]),Q=[N,v*C,x];te.push(H),te.push(F)}else H=t[0].reshape([N,g,f*h]),F=t[1].reshape([1,x,g]),Q=[N,x,v*C],te.push(F),te.push(H);c&&te.push(t[2]);let ie=Q[2],ue=te[0].dims[te[0].dims.length-1];ie<8&&ue<8?e.compute(fn(te,i,d,Q,u,r),{inputs:te}):e.compute(fr(te,i,d,Q,u,r),{inputs:te});return}let k=!0,A=e.kernelCustomData.wT??e.compute(We(t[1],ki),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=A);let I=[t[0],A];c&&I.push(t[2]);let P=u?v*C:x,B=u?x:v*C,V=b*w*g;e.compute(Pp(I,i,d,P,B,V,c,k,r),{inputs:I})},K0=(e,t)=>{let i=t.format==="NHWC",r=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let u=[0,t.pads[0],0,t.pads[1]],d=[1].concat(t.strides),c=[1].concat(t.dilations),f=[1].concat(t.kernelShape),h=Pi({...t,pads:u,strides:d,dilations:c,kernelShape:f},r);Vp(e,r,h,g=>i?[g[0],g[2],g[3]]:[g[0],g[1],g[3]])},Z0=(e,t,i)=>{let r=i.format==="NHWC"?"channelsLast":"channelsFirst",u=Pi(i,t),d=i.autoPad==="NOTSET"?i.pads:i.autoPad,c=Dp(t[0].dims,t[1].dims,i.strides,i.dilations,d,!1,r);e.compute(Mp(t,u,c.outShape,[c.filterDepth,c.filterHeight,c.filterWidth],[c.padInfo.front,c.padInfo.top,c.padInfo.left],r))},Oi=(e,t)=>{if(q0(e.inputs,t),e.inputs[0].dims.length===3)K0(e,t);else if(e.inputs[0].dims.length===5)Z0(e,e.inputs,t);else{let i=Pi(t,e.inputs);Vp(e,e.inputs,i)}}});var Lp,Gp=Z(()=>{"use strict";ce();dt();he();ye();Lp=(e,t,i)=>{let r=e.length>2,u=t.outputShape,d=t.format==="NHWC",c=t.group,f=e[1].dims,h=f[2]/c,g=f[3],b=d?$e(h):1,w=d&&g===1&&h>=4,v=w?Math.floor(h/4)*4:Math.floor(h/b)*b,C=h-v,x=d?$e(g):1,S=d?g===1?b:x:1,k=W.size(u)/x,A=[Math.ceil(k/64),1,1];be("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${A}`);let I=["rank","rank"],P=[t.strides[0],t.strides[1]],B=[t.kernelShape[d?1:2],t.kernelShape[d?2:3]],V=[t.dilations[0],t.dilations[1]],N=[B[0]+(t.dilations[0]<=1?0:(t.kernelShape[d?1:2]-1)*(t.dilations[0]-1)),B[1]+(t.dilations[1]<=1?0:(t.kernelShape[d?2:3]-1)*(t.dilations[1]-1))],H=[N[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),N[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],F=[{type:12,data:k},{type:12,data:P},{type:12,data:B},{type:12,data:V},{type:12,data:N},{type:6,data:H},{type:12,data:v},{type:12,data:h},{type:12,data:g},...Y(e[0].dims,e[1].dims)];r&&(F.push(...Y(e[2].dims)),I.push("rank")),F.push(...Y(u));let Q=te=>{let ie=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:P.length},{name:"filter_dims",type:"u32",length:B.length},{name:"dilations",type:"u32",length:B.length},{name:"effective_filter_dims",type:"u32",length:N.length},{name:"pads",type:"i32",length:H.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],ue=Ae(e[0].dataType),ee=d?1:2,se=d?2:3,Pe=d?3:1,re=L("W",e[1].dataType,e[1].dims.length,S),ae=L("Dy",e[0].dataType,e[0].dims.length,b),fe=[ae,re];r&&fe.push(L("bias",e[2].dataType,[u[Pe]].length,x));let le=K("result",e[0].dataType,u.length,x),_e=()=>{let me="";if(w)b===4?me+=`
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
    ${Ee}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${b}${S}${x}${w}${C}`,inputDependencies:I},getRunData:()=>({dispatchGroup:{x:A[0],y:A[1],z:A[2]},outputs:[{dims:i?i(u):u,dataType:e[0].dataType}],programUniforms:F}),getShaderSource:Q}}});var Q0,Y0,X0,Hp,Fp,J0,qp,ev,Kp,Zp=Z(()=>{"use strict";Gp();kt();wt();Q0=(e,t,i,r,u,d)=>(e-1)*t+i+(r-1)*u+1-d,Y0=(e,t,i,r,u)=>{let d=Math.floor(e/2);t==="SAME_UPPER"?(i[r]=d,i[u]=e-d):t==="SAME_LOWER"&&(i[r]=e-d,i[u]=d)},X0=(e,t,i,r,u,d,c,f,h,g)=>{let b=e.length-2,w=g.length===0;h.length<b&&h.push(...Array(b-h.length).fill(0));let v=e[0],C=t[f?3:1]*u;for(let x=0,S=e.length-b-(f?1:0);x<b;++x,++S){let k=e[S],A=w?k*c[x]:g[x],I=Q0(k,c[x],d[x],t[S],i[x],A);Y0(I,r,d,x,x+b),w&&g.push(c[x]*(k-1)+h[x]+(t[S]-1)*i[x]+1-d[x]-d[x+b])}g.splice(0,0,v),g.splice(f?3:1,0,C)},Hp=(e,t)=>{let i=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((w,v)=>w*v,1)===0){i.length=0;for(let w=2;w<t[1].dims.length;++w)i.push(t[1].dims[w])}let r=e.format==="NHWC";i.splice(0,0,t[1].dims[0]),i.splice(r?3:1,0,t[1].dims[1]);let u=e.pads.slice(),d=e.outputShape.slice(),c=e.outputPadding.slice(),f=t[0].dims,h=e.dilations.slice();if(h.reduce((w,v)=>w+v,0)===0){let w=t[0].dims.length-2;h=new Array(w).fill(1)}let g=e.strides.slice();if(g.reduce((w,v)=>w+v,0)===0){let w=t[0].dims.length-2;g=new Array(w).fill(1)}X0(f,i,h,e.autoPad,e.group,u,g,r,c,d);let b=Object.assign({},e);return Object.assign(b,{kernelShape:i,pads:u,outputPadding:c,outputShape:d,dilations:h,strides:g}),b},Fp=e=>{let t=cn(e),i=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],u=e.dilations,d=e.group,c=e.kernelShape,f=e.pads,h=e.strides,g=e.wIsConst(),b=e.outputPadding,w=e.outputShape;return{autoPad:r,format:i,dilations:u,group:d,kernelShape:c,outputPadding:b,outputShape:w,pads:f,strides:h,wIsConst:g,...t,cacheKey:`${e.format};${t.activation};`}},J0=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(i!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let u=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==u))throw new Error("invalid bias");let d=e[0].dims.length-2;if(t.dilations.reduce((b,w)=>b+w,0)>0&&t.dilations.length!==d)throw new Error(`dilations should be ${d}D`);if(t.strides.reduce((b,w)=>b+w,0)>0&&t.strides.length!==d)throw new Error(`strides should be ${d}D`);if(t.pads.reduce((b,w)=>b+w,0)>0&&t.pads.length!==d*2)throw new Error(`pads should be ${d*2}D`);if(t.outputPadding.length!==d&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${d}D`);if(t.kernelShape.reduce((b,w)=>b+w,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},qp=(e,t,i,r)=>{let u=e.kernelCustomData.wT??e.compute(We(t[1],[2,3,0,1]),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=u);let d=[t[0],u];t.length===3&&d.push(t[2]),e.compute(Lp(d,i,r),{inputs:d})},ev=(e,t)=>{let i=t.format==="NHWC",r=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let u=t.kernelShape;(u.length===0||u[0]===0)&&(u=[e.inputs[1].dims[2]]);let d=t.dilations;(d.length===0||d[0]===0)&&(d=[1]);let c=t.strides;(c.length===0||c[0]===0)&&(c=[1]);let f=t.pads;f.length===0&&(f=[0,0]),f=[0,f[0],0,f[1]],c=[1].concat(c),d=[1].concat(d),u=[1].concat(u);let h=t.outputPadding;h=[0].concat(h);let g=Hp({...t,pads:f,strides:c,dilations:d,kernelShape:u,outputPadding:h},r);qp(e,r,g,b=>i?[b[0],b[2],b[3]]:[b[0],b[1],b[3]])},Kp=(e,t)=>{if(J0(e.inputs,t),e.inputs[0].dims.length===3)ev(e,t);else{let i=Hp(t,e.inputs);qp(e,e.inputs,i)}}});var tv,Qp,Yp,Xp=Z(()=>{"use strict";ce();he();Be();ye();tv=(e,t,i,r)=>{let u=W.size(t),d=t.length,c=L("input",e,d),f=K("output",e,d),h=i.dataType===6?i.getInt32Array()[0]:Number(i.getBigInt64Array()[0]),g=W.normalizeAxis(h,d),b=w=>{let v=` i32(${c.indicesGet("inputIndices","uniforms.axis")}) `,C=ne("uniforms.input_shape","uniforms.axis",d),x=r.reverse?v+(r.exclusive?" + 1":""):"0",S=r.reverse?C:v+(r.exclusive?"":" + 1");return`
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
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:[{type:12,data:u},{type:12,data:g},...Y(t,t)]}),getShaderSource:b}},Qp=(e,t)=>{let i=e.inputs[0].dims,r=e.inputs[0].dataType,u=e.inputs[1];e.compute(tv(r,i,u,t),{inputs:[0]})},Yp=e=>{let t=e.exclusive===1,i=e.reverse===1;return pe({exclusive:t,reverse:i})}});var rv,nv,iv,Jp,ef,tf=Z(()=>{"use strict";ce();he();Be();ye();rv=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},nv=(e,t,i,r)=>{let u=[];u.push(`fn perm(i: ${r.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`);for(let d=0;d<t;++d)u.push(i.indicesSet("a",e[d],`i[${d}]`));return u.push("return a;}"),u.join(`
`)},iv=(e,t)=>{let i,r,u,d,c,f,h=t.format==="NHWC",g=t.blocksize,b=t.mode==="DCR";h?([i,r,u,d]=e.dims,c=b?[i,r,u,g,g,d/g**2]:[i,r,u,d/g**2,g,g],f=b?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([i,r,u,d]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],c=b?[i,g,g,d/g**2,r,u]:[i,d/g**2,g,g,r,u],f=b?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let w=e.reshape(c),v=w.dims.length,C=e.dataType,x=L("a",C,v),S=K("output",C,v),k=A=>`
  ${A.registerUniform("output_size","u32").declareVariables(x,S)}

  ${nv(f,v,x,S)}

  ${A.mainStart()}
    ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",x.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:A=>{let I=h?[i,r*g,u*g,d/g**2]:[i,d/g**2,r*g,u*g],P=W.size(I),B=w.dims,V=W.sortBasedOnPerm(B,f);return{outputs:[{dims:I,dataType:A[0].dataType}],dispatchGroup:{x:Math.ceil(P/64)},programUniforms:[{type:12,data:P},...Y(B,V)]}},getShaderSource:k}},Jp=(e,t)=>{rv(e.inputs),e.compute(iv(e.inputs[0],t))},ef=e=>pe({blocksize:e.blocksize,mode:e.mode,format:e.format})});var Bi,yn,rf,ov,av,Di,Mi,nf,sv,of,af,sf=Z(()=>{"use strict";ce();he();Be();ye();Bi="[a-zA-Z]|\\.\\.\\.",yn="("+Bi+")+",rf="^"+yn+"$",ov="("+yn+",)*"+yn,av="^"+ov+"$",Di=class{constructor(t=-1){this.symbolToIndices=new Map,this.inputIndex=t}addSymbol(t,i){let r=this.symbolToIndices.get(t);r===void 0?r=[i]:r.push(i),this.symbolToIndices.set(t,r)}},Mi=class{constructor(t,i){this.equation=i;this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,u]=i.includes("->")?i.split("->",2):[i,""];if(!r.match(RegExp(av)))throw new Error("Invalid LHS term");if(r.split(",").forEach((f,h)=>{let g=t[h].dims.slice();if(!f.match(RegExp(rf)))throw new Error("Invalid LHS term");let b=this.processTerm(f,!0,g,h);this.lhs.push(b)}),u==="")u+=[...this.symbolToInfo.entries()].filter(([f,h])=>h.count===1||f==="...").map(([f])=>f).join("");else if(!u.match(RegExp(yn)))throw new Error("Invalid RHS");u.match(RegExp(Bi,"g"))?.forEach(f=>{if(f==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let h=this.symbolToInfo.get(f);if(h===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(h.dimValue)}}),this.rhs=this.processTerm(u,!1,this.outputDims)}addSymbol(t,i,r){let u=this.symbolToInfo.get(t);if(u!==void 0){if(u.dimValue!==i&&u.count!==1)throw new Error("Dimension mismatch");u.count++,u.inputIndices.push(r)}else u={count:1,dimValue:i,inputIndices:[r]};this.symbolToInfo.set(t,u)}processTerm(t,i,r,u=-1){let d=r.length,c=!1,f=[],h=0;if(!t.match(RegExp(rf))&&!i&&t!=="")throw new Error("Invalid LHS term");let g=t.match(RegExp(Bi,"g")),b=new Di(u);return g?.forEach((w,v)=>{if(w==="..."){if(c)throw new Error("Only one ellipsis is allowed per input term");c=!0;let C=d-g.length+1;if(C<0)throw new Error("Ellipsis out of bounds");if(f=r.slice(h,h+C),this.hasEllipsis){if(this.ellipsisDims.length!==f.length||this.ellipsisDims.toString()!==f.toString())throw new Error("Ellipsis dimensions mismatch")}else if(i)this.hasEllipsis=!0,this.ellipsisDims=f;else throw new Error("Ellipsis must be specified in the LHS");for(let x=0;x<f.length;x++){let S=String.fromCharCode(48+x);b.addSymbol(S,v+x),this.addSymbol(S,r[h++],u)}}else b.addSymbol(w,v+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(w,r[h++],u)}),b}},nf=e=>e+"_max",sv=(e,t,i,r)=>{let d=e.map(b=>b.length).map((b,w)=>L(`input${w}`,t,b)),c=W.size(r),f=K("output",t,r.length),h=[...i.symbolToInfo.keys()].filter(b=>!i.rhs.symbolToIndices.has(b)),g=b=>{let w=[],v="var prod = 1.0;",C="var sum = 0.0;",x="sum += prod;",S=[],k=[],A=[],I=[],P=i.symbolToInfo.size===i.rhs.symbolToIndices.size;i.symbolToInfo.forEach((V,N)=>{if(i.rhs.symbolToIndices.has(N)){let H=i.rhs.symbolToIndices.get(N)?.[0];H!==void 0&&i.lhs.forEach((F,Q)=>{if(V.inputIndices.includes(Q)){let te=F.symbolToIndices.get(N);if(te===void 0)throw new Error("Invalid symbol error");te.forEach(ie=>{w.push(`${d[Q].indicesSet(`input${Q}Indices`,ie,f.indicesGet("outputIndices",H))}`)})}})}else i.lhs.forEach((H,F)=>{if(V.inputIndices.includes(F)){let Q=H.symbolToIndices.get(N);if(Q===void 0)throw new Error("Invalid symbol error");Q.forEach(te=>{S.push(`${d[F].indicesSet(`input${F}Indices`,te,`${N}`)}`)}),I.push(`prod *= ${d[F].getByIndices(`input${F}Indices`)};`)}}),k.push(`for(var ${N}: u32 = 0; ${N} < uniforms.${nf(N)}; ${N}++) {`),A.push("}")});let B=P?[...w,`let sum = ${d.map((V,N)=>V.getByIndices(`input${N}Indices`)).join(" * ")};`]:[...w,C,...k,...S,v,...I,x,...A];return`
            ${b.registerUniforms(h.map(V=>({name:`${nf(V)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...d,f)}

            ${b.mainStart()}
            ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${f.offsetToIndices("global_idx")};
            ${d.map((V,N)=>`var input${N}Indices: ${d[N].type.indices};`).join(`
`)}
            ${B.join(`
`)};
            ${f.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:i.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let b=h.filter(v=>i.symbolToInfo.has(v)).map(v=>({type:12,data:i.symbolToInfo.get(v)?.dimValue||0}));b.push({type:12,data:c});let w=e.map((v,C)=>[...Y(v)]).reduce((v,C)=>v.concat(C),b);return w.push(...Y(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:w}},getShaderSource:g}},of=(e,t)=>{let i=new Mi(e.inputs,t.equation),r=i.outputDims,u=e.inputs.map((d,c)=>d.dims);e.compute(sv(u,e.inputs[0].dataType,i,r))},af=e=>{let t=e.equation.replace(/\s+/g,"");return pe({equation:t})}});var uv,uf,lv,dv,lf,df=Z(()=>{"use strict";ce();he();ye();uv=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),r=i.length<t.length?0:i.length-t.length,u=t.length<i.length?0:t.length-i.length;for(;r<i.length&&u<t.length;++r,++u)if(i[r]!==t[u]&&i[r]!==1&&t[u]!==1)throw new Error("Expand requires shape to be broadcastable to input")},uf=(e,t)=>{let i=e.length-t.length,r=[];for(let u=0;u<i;++u)r.push(e[u]);for(let u=0;u<t.length;++u)r.push(t[u]===1?e[u+i]:t[u]);return r},lv=(e,t)=>e.length>t.length?uf(e,t):uf(t,e),dv=e=>{let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),r=lv(t,i),u=e[0].dataType,d=u===9||W.size(t)===1,c=u===9||t.length>0&&t[t.length-1]%4===0?4:1,f=d||r.length>0&&r[r.length-1]%4===0?4:1,h=Math.ceil(W.size(r)/f),g=w=>{let v=L("input",u,t.length,c),C=K("output",u,r.length,f),x;if(u===9){let S=(k,A,I="")=>`
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
    ${x}`},b=[{type:12,data:h},...Y(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${c}${f}`,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:b})}},lf=e=>{uv(e.inputs),e.compute(dv(e.inputs),{inputs:[0]})}});var cv,cf,pf=Z(()=>{"use strict";ce();he();ye();dn();cv=e=>{let t=e[0].dataType,i=W.size(e[0].dims),r=W.size(e[1].dims),u=r%4===0,d=c=>{let f=L("x",t,[1],4),h=L("bias",t,[1],4),g=K("y",t,[1],4),b=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],w=C=>`
      let bias${C}_offset: u32 = (global_idx * 4 + ${C}) % uniforms.bias_size;
      let bias${C} = ${h.getByOffset(`bias${C}_offset / 4`)}[bias${C}_offset % 4];`,v=u?`
      let bias = ${h.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${w(0)}${w(1)}${w(2)}${w(3)}
      let bias = ${f.type.value}(bias0, bias1, bias2, bias3);`;return`${c.registerUniforms(b).declareVariables(f,h,g)}

    ${Ti(Ve(t))}

    ${c.mainStart(Ut)}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${f.getByOffset("global_idx")};
      ${v}
      let x_in = x + bias;
      ${g.setByOffset("global_idx",Ii("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${u}`,inputDependencies:["type","type"]},getShaderSource:d,getRunData:c=>({outputs:[{dims:c[0].dims,dataType:c[0].dataType}],programUniforms:[{type:12,data:Math.ceil(i/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(i/Ut/4)}})}},cf=e=>{e.inputs.length<2||W.size(e.inputs[1].dims)===0?ap(e):e.compute(cv(e.inputs))}});var pv,fv,ff,mf,hf=Z(()=>{"use strict";ce();he();Be();ye();pv=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},fv=(e,t)=>{let i=e[0].dims,r=e[1].dims,u=i.length,d=W.normalizeAxis(t.axis,u),c=i.slice(0);c.splice(d,1,...r);let f=i[d],h=e[0].dataType===9?4:1,g=Math.ceil(W.size(c)/h),b=[{type:12,data:g},{type:6,data:f},{type:12,data:d},...Y(e[0].dims,e[1].dims,c)],w=v=>{let C=L("data",e[0].dataType,e[0].dims.length,h),x=L("inputIndices",e[1].dataType,e[1].dims.length),S=K("output",e[0].dataType,c.length,h),k=I=>{let P=r.length,B=`var indicesIndices${I}  = ${x.type.indices}(0);`;for(let V=0;V<P;V++)B+=`${P>1?`indicesIndices${I}[${V}]`:`indicesIndices${I}`} = ${c.length>1?`outputIndices${I}[uniforms.axis + ${V}]`:`outputIndices${I}`};`;B+=`
          var idx${I} = ${x.getByIndices(`indicesIndices${I}`)};
          if (idx${I} < 0) {
            idx${I} = idx${I} + uniforms.axisDimLimit;
          }
          var dataIndices${I} : ${C.type.indices};
        `;for(let V=0,N=0;V<u;V++)V===d?(B+=`${u>1?`dataIndices${I}[${V}]`:`dataIndices${I}`} = u32(idx${I});`,N+=P):(B+=`${u>1?`dataIndices${I}[${V}]`:`dataIndices${I}`} = ${c.length>1?`outputIndices${I}[${N}]`:`outputIndices${I}`};`,N++);return B},A;if(e[0].dataType===9){let I=(P,B,V="")=>`
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
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:b}),getShaderSource:w}},ff=e=>pe({axis:e.axis}),mf=(e,t)=>{let i=e.inputs;pv(i),e.compute(fv(e.inputs,t))}});var mv,gf,yf,bf=Z(()=>{"use strict";ce();he();ye();mv=(e,t,i,r,u,d,c,f,h)=>{let g=[{type:12,data:d},{type:12,data:r},{type:12,data:u},{type:12,data:i},{type:12,data:c},{type:12,data:f},{type:12,data:h}],b=[d];g.push(...Y(t.dims,b));let w=v=>{let C=L("indices_data",t.dataType,t.dims.length),x=K("input_slice_offsets_data",12,1,1),S=[C,x],k=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:u.length},{name:"sizes_from_slice_dims_data",type:"u32",length:i.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
        ${u.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${i.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${u.length}_${i.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:b,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:g}),getShaderSource:w},{inputs:[t],outputs:[-1]})[0]},gf=(e,t)=>{let i=e.inputs,r=i[0].dims,u=i[0].dataType,d=i[1].dims,c=d[d.length-1],f=W.sizeToDimension(d,d.length-1),h=W.sizeFromDimension(r,t.batchDims+c),g=W.sizeToDimension(r,t.batchDims),b=W.sizeFromDimension(r,t.batchDims),w=f/g,v=new Array(c),C=h;for(let B=0;B<c;++B)v[c-1-B]=C,C*=r[t.batchDims+c-1-B];let x=mv(e,i[1],v,t.batchDims,r,f,w,b,c),S=t.batchDims+c;if(S>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let k=d.slice(0,-1).concat(r.slice(S)),A=W.size(k),I=[{type:12,data:A},{type:12,data:h},...Y(i[0].dims,x.dims,k)],P=B=>{let V=L("data",i[0].dataType,i[0].dims.length),N=L("slice_offsets",12,x.dims.length),H=K("output",i[0].dataType,k.length);return`
          ${B.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(V,N,H)}
            ${B.mainStart()}
            ${B.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:k,dataType:u}],dispatchGroup:{x:Math.ceil(A/64)},programUniforms:I}),getShaderSource:P},{inputs:[i[0],x]})},yf=e=>({batchDims:e.batch_dims,cacheKey:""})});var hv,gv,_f,wf,vf=Z(()=>{"use strict";ce();he();Be();ye();hv=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let i=W.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,u=e[0],d=e[2],c=e.length===4?e[3]:void 0;if(d.dims.length!==u.dims.length||!u.dims.map((f,h)=>h===i?Math.ceil(f/r)===d.dims[h]:f===d.dims[h]).reduce((f,h)=>f&&h,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(c){if(c.dataType!==u.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(c.dims.length!==d.dims.length||!c.dims.map((f,h)=>f===d.dims[h]).reduce((f,h)=>f&&h,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},gv=(e,t)=>{let i=e[0].dims,r=e[1].dims,u=i.length,d=W.normalizeAxis(t.gatherAxis,u),c=W.normalizeAxis(t.quantizeAxis,u),f=i.slice(0);f.splice(d,1,...r);let h=W.size(f),g=e[2].dataType,w=e[0].dataType===22,v=[{type:12,data:h},{type:12,data:c},{type:12,data:d},{type:12,data:t.blockSize},...Y(...e.map((x,S)=>x.dims),f)],C=x=>{let S=L("data",e[0].dataType,e[0].dims.length),k=L("inputIndices",e[1].dataType,e[1].dims.length),A=L("scales",e[2].dataType,e[2].dims.length),I=e.length>3?L("zeroPoint",e[3].dataType,e[3].dims.length):void 0,P=K("output",g,f.length),B=[S,k,A];I&&B.push(I);let V=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
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
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((x,S)=>S!==1).map(x=>x.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(x,S)=>"rank")},getRunData:()=>({outputs:[{dims:f,dataType:g}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:v}),getShaderSource:C}},_f=(e,t)=>{let i=e.inputs;hv(i,t),e.compute(gv(e.inputs,t))},wf=e=>pe({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})});var yv,bv,$f,xf,Cf=Z(()=>{"use strict";ce();he();Be();ye();yv=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},bv=(e,t)=>{let i=e[0].dims,r=e[0].dataType,u=i.length,d=e[1].dims,c=e[1].dataType,f=W.normalizeAxis(t.axis,u),h=i[f],g=d.slice(0),b=W.size(g),w=L("input",r,u),v=L("indicesInput",c,d.length),C=K("output",r,g.length),x=[{type:12,data:b},{type:6,data:h},{type:12,data:f}];return x.push(...Y(i,d,g)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:g,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:x}),getShaderSource:A=>`
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
  }`}},$f=e=>pe({axis:e.axis}),xf=(e,t)=>{let i=e.inputs;yv(i),e.compute(bv(e.inputs,t))}});var _v,wv,Sf,Tf,If=Z(()=>{"use strict";ce();he();ye();_v=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},wv=(e,t)=>{let i=e[0].dims.slice(),r=e[1].dims.slice(),[u,d,c]=Yr.getShapeOfGemmResult(i,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),f=[u,d];if(!f)throw new Error("Can't use gemm on the given tensors");let h=16,g=Math.ceil(d/h),b=Math.ceil(u/h),w=!0,v=W.size(f),C=[{type:12,data:w?g:v},{type:12,data:u},{type:12,data:d},{type:12,data:c},{type:1,data:t.alpha},{type:1,data:t.beta}],x=["type","type"];e.length===3&&(C.push(...Y(e[2].dims)),x.push("rank")),C.push(...Y(f));let S=A=>{let I="";t.transA&&t.transB?I="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?I="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?I="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(I="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let P=t.alpha===1?"":"value *= uniforms.alpha;",B=L("a",e[0].dataType,e[0].dims),V=L("b",e[1].dataType,e[1].dims),N=B.type.value,H=null,F=[B,V];e.length===3&&(H=L("c",e[2].dataType,e[2].dims.length),F.push(H));let Q=K("output",e[0].dataType,f.length);F.push(Q);let te=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${A.registerUniforms(te).declareVariables(...F)}

  ${A.mainStart()}
    ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${N}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${I}
    }

    ${P}
    ${H!=null?`let cOffset = ${H.broadcastedIndicesToOffset("vec2(m, n)",Q)}; value += ${N}(uniforms.beta) * ${H.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},k=A=>{let I=L("a",e[0].dataType,e[0].dims),P=L("b",e[1].dataType,e[1].dims),B=null,V=[I,P];e.length===3&&(B=L("c",e[2].dataType,e[2].dims.length),V.push(B));let N=K("output",e[0].dataType,f.length);V.push(N);let H=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],F="",Q="";t.transA&&t.transB?(Q=`
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
      `,F="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(Q=`
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
      `,F="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(Q=`
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
      `,F="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(Q=`
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
    var value = ${N.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${Q}
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
    ${B!=null?`let cOffset = ${B.broadcastedIndicesToOffset("vec2(m, n)",N)}; value += ${N.type.value}(uniforms.beta) * ${B.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return w?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:f,dataType:e[0].dataType}],dispatchGroup:{x:g*b},programUniforms:C}),getShaderSource:k}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:f,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:C}),getShaderSource:S}},Sf=e=>{let t=e.transA,i=e.transB,r=e.alpha,u=e.beta;return{transA:t,transB:i,alpha:r,beta:u,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Tf=(e,t)=>{_v(e.inputs),e.compute(wv(e.inputs,t))}});var vt,Pt,Qt,Yt,vv,$v,xv,Cv,Sv,Tv,Iv,Av,Af,Ef,kf=Z(()=>{"use strict";ce();he();Be();ye();[vt,Pt,Qt,Yt]=[0,1,2,3],vv=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},$v=`
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
`,xv=e=>`
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
`,Cv=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Sv=e=>`
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
`,Tv=(e,t,i)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${vt}] = batch;
     indices[${Pt}] = channel;`+(()=>{switch(i.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Qt}] = u32(r);
            indices[${Yt}] = u32(c);
          }
        `;case"border":return`
          indices[${Qt}] = u32(clamp(r, 0, H - 1));
          indices[${Yt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Qt}] = gs_reflect(r, border[1], border[3]);
          indices[${Yt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${i.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Iv=(e,t,i)=>(()=>{switch(i.mode){case"nearest":return`
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
        `;default:throw new Error(`mode ${i.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Av=(e,t)=>{let i=L("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],u=L("grid",e[1].dataType,r.length,2),d=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(d=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[vt,Pt,Qt,Yt]=[0,3,1,2]);let c=K("output",e[0].dataType,d.length),f=i.type.value,h=W.size(d),g=[{type:12,data:h},...Y(e[0].dims,r,d)],b=w=>`
  ${w.registerUniform("output_size","u32").declareVariables(i,u,c)}
  ${$v}
  ${xv(f)}
  ${Cv(t)}
  ${Sv(t)}
  ${Tv(i,f,t)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Qt}]);
      let W_in = i32(uniforms.x_shape[${Yt}]);

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
      var grid_indices = vec3<u32>(indices[${vt}], indices[${Qt}], indices[${Yt}]);
      let nxy = ${u.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Iv(c,f,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:w=>{let v=W.size(d);return{outputs:[{dims:d,dataType:w[0].dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:g}},getShaderSource:b}},Af=(e,t)=>{vv(e.inputs),e.compute(Av(e.inputs,t))},Ef=e=>pe({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})});var Fe,Pv,zf,Pf,zv,mr,Of,Ri=Z(()=>{"use strict";ce();he();Be();rn();un();ye();wt();Fe=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Pv=(e,t)=>{let i=e[0],r=Fe(e,1),u=Fe(e,2),d=Fe(e,3),c=Fe(e,4),f=Fe(e,5),h=Fe(e,6),g=Fe(e,7);if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let b=i.dims[0],w=i.dims[1],v=i.dims.length===3?i.dims[2]:t.numHeads*i.dims[4],C=w,x=0,S=0,k=Math.floor(v/t.numHeads);if(h&&g&&W.size(h.dims)&&W.size(g.dims)){if(h.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(h.dims[0]!==b||h.dims[1]!==t.numHeads||h.dims[3]!==k)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(g.dims[0]!==b||g.dims[1]!==t.numHeads||g.dims[3]!==k)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(h.dims[2]!==g.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(g.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');x=h.dims[2],S=h.dims[2]}else if(h&&W.size(h.dims)||g&&W.size(g.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let A;if(r&&W.size(r.dims)>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==i.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');A=2,C=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==k)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(u)throw new Error('Expect "value" be none when "key" has packed kv format.');A=5,C=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==k)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');A=0,C=r.dims[2]}}else{if(i.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(i.dims[2]!==t.numHeads||i.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');A=3}if(d&&W.size(d.dims)>0){if(d.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let I=x+C,P=0;if(c&&W.size(c.dims)>0){P=8;let H=c.dims;throw H.length===1?H[0]===b?P=1:H[0]===3*b+2&&(P=3):H.length===2&&H[0]===b&&H[1]===I&&(P=5),P===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let B=!1,V=v;if(u&&W.size(u.dims)>0){if(u.dims.length!==3&&u.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==u.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(u.dims.length===3){if(C!==u.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');V=u.dims[2]}else{if(C!==u.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');V=u.dims[1]*u.dims[3],B=!0}}let N=!1;if(c&&W.size(c.dims)>0)throw new Error("Key padding mask is not supported");if(f&&W.size(f.dims)>0){if(f.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(f.dims[0]!==b||f.dims[1]!==t.numHeads||f.dims[2]!==w||f.dims[3]!==I)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:b,sequenceLength:w,pastSequenceLength:x,kvSequenceLength:C,totalSequenceLength:I,maxSequenceLength:S,inputHiddenSize:0,hiddenSize:v,vHiddenSize:V,headSize:k,vHeadSize:Math.floor(V/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:P,scale:t.scale,broadcastResPosBias:N,passPastInKv:B,qkvFormat:A}},zf=e=>pe({...e}),Pf=pe({perm:[0,2,1,3]}),zv=(e,t,i,r,u,d,c)=>{let f=[r,u,d],h=W.size(f),g=[{type:12,data:h},{type:12,data:c},{type:12,data:d}],b=w=>{let v=K("qkv_with_bias",t.dataType,f),C=L("qkv",t.dataType,f),x=L("bias",i.dataType,f),S=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${w.registerUniforms(S).declareVariables(C,x,v)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:f,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:b},{inputs:[t,i],outputs:[-1]})[0]},mr=(e,t,i,r,u,d,c,f)=>{let h=d;if(c&&W.size(c.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return h=zv(e,d,c,t,r,i*u,f),h=h.reshape([t,r,i,u]),i===1||r===1?h:e.compute(We(h,Pf.perm),{inputs:[h],outputs:[-1]})[0]}else return d.dims.length===3&&(h=d.reshape([t,r,i,u])),i===1||r===1?h:e.compute(We(h,Pf.perm),{inputs:[h],outputs:[-1]})[0]},Of=(e,t)=>{let i=Pv(e.inputs,t),r=e.inputs[0],u=Fe(e.inputs,1),d=Fe(e.inputs,2),c=Fe(e.inputs,3),f=Fe(e.inputs,4),h=Fe(e.inputs,5),g=Fe(e.inputs,6),b=Fe(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if(u?.dims.length===5)throw new Error("Packed KV is not implemented");let w=u&&d&&u.dims.length===4&&d.dims.length===4,v=mr(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,r,c,0);if(w)return Zt(e,v,u,d,f,void 0,g,b,h,i);if(!u||!d)throw new Error("key and value must be provided");let C=mr(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.headSize,u,c,i.hiddenSize),x=mr(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.vHeadSize,d,c,2*i.hiddenSize);Zt(e,v,C,x,f,void 0,g,b,h,i)}});var Ov,Bv,Dv,Mv,Ui,Bf,Df,ji=Z(()=>{"use strict";ce();he();Be();ye();Ov=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Bv=(e,t)=>{let i=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(u=>i.push(Number(u))),r=i.length),pe({numOutputs:r,axis:t.axis,splitSizes:i})},Dv=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ne("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Mv=e=>{let t=e.length,i=[];for(let r=0;r<t;++r){let u=e[r].setByIndices("indices","input[global_idx]");t===1?i.push(u):r===0?i.push(`if (output_number == ${r}u) { ${u} }`):r===t-1?i.push(`else { ${u} }`):i.push(`else if (output_number == ${r}) { ${u} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${i.join(`
`)}
      }`},Ui=(e,t)=>{let i=e[0].dims,r=W.size(i),u=e[0].dataType,d=W.normalizeAxis(t.axis,i.length),c=new Array(t.numOutputs),f=L("input",u,i.length),h=new Array(t.numOutputs),g=[],b=[],w=0,v=[{type:12,data:r}];for(let x=0;x<t.numOutputs;x++){w+=t.splitSizes[x],h[x]=w;let S=i.slice();S[d]=t.splitSizes[x],b.push(S),c[x]=K(`output${x}`,u,S.length),g.push({dims:b[x],dataType:e[0].dataType})}v.push({type:12,data:h},...Y(i,...b));let C=x=>`
  ${x.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",h.length).declareVariables(f,...c)}
  ${Dv(h.length)}
  ${Mv(c)}

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
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:C,getRunData:()=>({outputs:g,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:v})}},Bf=(e,t)=>{Ov(e.inputs);let i=e.inputs.length===1?t:Bv(e.inputs,t);e.compute(Ui(e.inputs,i),{inputs:[0]})},Df=e=>{let t=e.axis,i=e.splitSizes,r=e.numOutputs<0?i.length:e.numOutputs;if(r!==i.length)throw new Error("numOutputs and splitSizes lengh must be equal");return pe({axis:t,numOutputs:r,splitSizes:i})}});var Rv,Uv,Mf,Rf,Uf=Z(()=>{"use strict";Be();un();Ri();ji();wt();Rv=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let i=e[0],r=e[1],u=e[2],d=e[3],c=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let f=!1,h=i.dims[0],g=i.dims[1],b=i.dims.length===3?f?i.dims[2]/3:i.dims[2]:t.numHeads*i.dims[4],w=g,v=0,C=!r||r.dims.length===0,x=Math.floor(C?b/(t.numHeads+2*t.kvNumHeads):b/t.numHeads);C&&(b=x*t.numHeads);let S=d&&d.dims.length!==0,k=c&&c.dims.length!==0;if(S&&d.dims.length===4&&d.dims[0]===h&&d.dims[1]!==t.kvNumHeads&&d.dims[2]===t.kvNumHeads&&d.dims[3]===x)throw new Error("BSNH pastKey/pastValue is not supported");if(S&&k){if(d.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(c.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');v=d.dims[2]}else if(S||k)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let I=1;if(r&&r.dims.length>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(i.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');w=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==x)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(u)throw new Error('Expect "value" be none when "key" has packed kv format.');w=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==x)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');w=r.dims[2]}}else{if(i.dims.length!==3&&i.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(i.dims.length===5&&(i.dims[2]!==t.numHeads||i.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');I=3}let P=0,B=!1,V=t.kvNumHeads?x*t.kvNumHeads:b;if(u&&u.dims.length>0){if(u.dims.length!==3&&u.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==u.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(u.dims.length===3){if(w!==u.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');V=u.dims[2]}else{if(w!==u.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');V=u.dims[1]*u.dims[3],B=!0}}let N=e.length>4?e[5]:void 0;if(N&&N.dims.length!==1&&N.dims[0]!==h)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:h,sequenceLength:g,pastSequenceLength:v,kvSequenceLength:w,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:b,vHiddenSize:V,headSize:x,vHeadSize:Math.floor(V/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:P,scale:t.scale,broadcastResPosBias:!1,passPastInKv:B,qkvFormat:I}},Uv=pe({perm:[0,2,1,3]}),Mf=(e,t,i)=>{let r=t,u=i.kvNumHeads;return t.dims.length===3&&i.kvSequenceLength!==0&&(r=t.reshape([i.batchSize,i.kvSequenceLength,u,i.headSize]),r=e.compute(We(r,Uv.perm),{inputs:[r],outputs:[-1]})[0]),r},Rf=(e,t)=>{let i=Rv(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],u=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,d=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,c=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,f=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,h=e.inputs.length>4?e.inputs[5]:void 0,g=e.inputs.length>5?e.inputs[6]:void 0,b=i.kvNumHeads?i.kvNumHeads:i.numHeads,w=pe({axis:2,numOutputs:3,splitSizes:[i.numHeads*i.headSize,b*i.headSize,b*i.headSize]}),[v,C,x]=!u&&!d?e.compute(Ui([r],w),{inputs:[r],outputs:[-1,-1,-1]}):[r,u,d],S=mr(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,v,void 0,0);Zt(e,S,Mf(e,C,i),Mf(e,x,i),void 0,void 0,c,f,void 0,i,h,g)}});var jf,jv,Nv,Nf,Vf=Z(()=>{"use strict";ce();he();wt();ye();jf=(e,t,i,r,u,d,c,f)=>{let h=$e(d),g=h===1?"f32":`vec${h}f`,b=h===1?"vec2f":`mat2x${h}f`,w=u*c,v=64;w===1&&(v=256);let C=[u,c,d/h],x=[u,c,2],S=["rank","type","type"],k=[];k.push(...Y(C,x));let A=I=>{let P=L("x",t.dataType,3,h),B=L("scale",i.dataType,i.dims),V=L("bias",r.dataType,r.dims),N=K("output",1,3,2),H=[P,B,V,N];return`
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
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${h};${f};${v}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:x,dataType:1}],dispatchGroup:{x:w},programUniforms:k}),getShaderSource:A},{inputs:[t,i,r],outputs:[-1]})[0]},jv=(e,t,i)=>{let r=t[0].dims,u=r,d=2,c=r[0],f=r[1],h=W.sizeFromDimension(r,d),g=$e(h),b=W.size(u)/g,w=jf(e,t[0],t[1],t[2],c,h,f,i.epsilon),v=[c,f,h/g],C=[c,f],x=["type","none"],S=k=>{let A=L("x",t[0].dataType,v.length,g),I=L("scale_shift",1,C.length,2),P=K("output",t[0].dataType,v.length,g),B=[A,I,P];return`
  ${k.registerUniform("output_size","u32").declareVariables(...B)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${P.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${I.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${A.getByOffset("global_idx")} * ${P.type.value}(scale_shift.x) + ${P.type.value}(scale_shift.y);
      ${P.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${g}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:u,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...Y(v,C,v)]}),getShaderSource:S},{inputs:[t[0],w]})},Nv=(e,t,i)=>{let r=t[0].dims,u=r,d=r[0],c=r[r.length-1],f=W.sizeFromDimension(r,1)/c,h=$e(c),g=W.size(u)/h,b=[{type:12,data:f},{type:12,data:Math.floor(c/h)}],w=["type","type"],v=!1,C=[0,r.length-1];for(let A=0;A<r.length-2;A++)v=v||r[A+1]!==1,C.push(A+1);v=v&&r[r.length-1]!==1;let x=v?e.compute(We(e.inputs[0],C),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(A,I)=>r[C[I]])),S=jf(e,x,t[1],t[2],d,f,c,i.epsilon),k=A=>{let I=Ae(t[0].dataType),P=h===1?"vec2f":`mat${h}x2f`,B=H=>{let F=H===0?"x":"y",Q=h===1?"f32":`vec${h}f`;switch(h){case 1:return`${I}(${Q}(scale.${F}))`;case 2:return`vec2<${I}>(${Q}(scale[0].${F}, scale[1].${F}))`;case 4:return`vec4<${I}>(${Q}(scale[0].${F}, scale[1].${F}, scale[2].${F}, scale[3].${F}))`;default:throw new Error(`Not supported compoents ${h}`)}},V=L("input",t[0].dataType,t[0].dims,h),N=K("output",t[0].dataType,u,h);return`
  @group(0) @binding(0) var<storage, read> input : array<${V.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${P}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${N.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${A.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${B(0)}, ${B(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${h}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:u,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:b}),getShaderSource:k},{inputs:[t[0],S]})},Nf=(e,t)=>{t.format==="NHWC"?Nv(e,e.inputs,t):jv(e,e.inputs,t)}});var Vv,Wv,Wf,Lf=Z(()=>{"use strict";ce();he();ye();Vv=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Wv=(e,t,i)=>{let r=t.simplified,u=e[0].dims,d=e[1],c=!r&&e[2],f=u,h=W.normalizeAxis(t.axis,u.length),g=W.sizeToDimension(u,h),b=W.sizeFromDimension(u,h),w=W.size(d.dims),v=c?W.size(c.dims):0;if(w!==b||c&&v!==b)throw new Error(`Size of X.shape()[axis:] == ${b}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${w} and bias size of ${v}`);let C=[];for(let V=0;V<u.length;++V)V<h?C.push(u[V]):C.push(1);let x=$e(b),S=["type","type"],k=[{type:12,data:g},{type:1,data:b},{type:12,data:Math.floor(b/x)},{type:1,data:t.epsilon}];c&&S.push("type");let A=i>1,I=i>2,P=V=>{let N=Ae(e[0].dataType),H=[L("x",e[0].dataType,e[0].dims,x),L("scale",d.dataType,d.dims,x)];c&&H.push(L("bias",c.dataType,c.dims,x)),H.push(K("output",e[0].dataType,f,x)),A&&H.push(K("mean_data_output",1,C)),I&&H.push(K("inv_std_output",1,C));let F=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${V.registerUniforms(F).declareVariables(...H)}
  ${V.mainStart()}
    ${V.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${$i("f32",x)};
    var mean_square_vector = ${$i("f32",x)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${jt(N,x,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${nt("mean_vector",x)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${nt("mean_square_vector",x)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${jt(N,x,"x[j + offset]")};
      let f32scale = ${jt(N,x,"scale[j]")};
      output[j + offset] = ${H[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${c?`+ ${jt(N,x,"bias[j]")}`:""}
      );
    }

    ${A?"mean_data_output[global_idx] = mean":""};
    ${I?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},B=[{dims:f,dataType:e[0].dataType}];return A&&B.push({dims:C,dataType:1}),I&&B.push({dims:C,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${x};${i};${r}`,inputDependencies:S},getRunData:()=>({outputs:B,dispatchGroup:{x:Math.ceil(g/64)},programUniforms:k}),getShaderSource:P}},Wf=(e,t)=>{Vv(e.inputs),e.compute(Wv(e.inputs,t,e.outputCount))}});var Lv,Gf,Hf=Z(()=>{"use strict";he();mn();hn();Lv=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Gf=e=>{Lv(e.inputs);let t=ct.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let i=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(i<8&&r<8)e.compute(fn(e.inputs,{activation:""},t));else{let u=t[t.length-2],d=W.size(e.inputs[0].dims.slice(0,-2)),c=W.size(e.inputs[1].dims.slice(0,-2));if(d!==1&&u===1&&c===1){let f=e.inputs[0].reshape([1,d,r]),h=e.inputs[1].reshape([1,r,i]),g=[1,d,i],b=[f,h];e.compute(fr(b,{activation:""},t,g),{inputs:b})}else e.compute(fr(e.inputs,{activation:""},t))}}});var Gv,Hv,Fv,Ff,qf,Kf=Z(()=>{"use strict";ce();he();Be();ye();Gv=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let i=e[0],r=i.dims.length;if(i.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let u=Math.floor((t.k+t.blockSize-1)/t.blockSize),d=t.blockSize/8*t.bits,c=e[1];if(!W.areEqual(c.dims,[t.n,u,d]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let h=e[2].dims;if(W.size(h)!==t.n*u)throw new Error("scales input size error.");if(e.length===4){let b=e[3].dims,w=t.bits>4?t.n*u:t.n*Math.floor((u+1)/2);if(W.size(b)!==w)throw new Error("zeroPoints input size error.")}},Hv=(e,t)=>{let i=e[0].dims,r=i.length,u=i[r-2],d=t.k,c=t.n,f=i.slice(0,r-2),h=W.size(f),b=e[1].dims[2]/4,w=e[0].dataType,v=$e(t.k),C=$e(b),x=$e(c),S=f.concat([u,c]),k=u>1&&c/x%2===0?2:1,A=W.size(S)/x/k,I=64,P=[],B=[h,u,d/v],V=W.convertShape(e[1].dims).slice();V.splice(-1,1,b/C),P.push(...Y(B)),P.push(...Y(V)),P.push(...Y(e[2].dims)),e.length===4&&P.push(...Y(W.convertShape(e[3].dims)));let N=[h,u,c/x];P.push(...Y(N));let H=F=>{let Q=B.length,te=L("a",e[0].dataType,Q,v),ie=L("b",12,V.length,C),ue=L("scales",e[2].dataType,e[2].dims.length),ee=[te,ie,ue],se=e.length===4?L("zero_points",12,e[3].dims.length):void 0;se&&ee.push(se);let Pe=N.length,re=K("output",e[0].dataType,Pe,x),ae=Ae(e[0].dataType),fe=(()=>{switch(v){case 1:return`array<${ae}, 8>`;case 2:return`mat4x2<${ae}>`;case 4:return`mat2x4<${ae}>`;default:throw new Error(`${v}-component is not supported.`)}})(),le=()=>{let Ee=`
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
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${v};${C};${x};${k};${I}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:S,dataType:w}],dispatchGroup:{x:A},programUniforms:P}),getShaderSource:H}},Fv=(e,t)=>{let i=e[0].dims,r=i.length,u=i[r-2],d=t.k,c=t.n,f=i.slice(0,r-2),h=W.size(f),b=e[1].dims[2]/4,w=e[0].dataType,v=$e(t.k),C=$e(b),x=f.concat([u,c]),S=128,k=c%8===0?8:c%4===0?4:1,A=S/k,I=A*C*8,P=I/v,B=I/t.blockSize,V=W.size(x)/k,N=[],H=[h,u,d/v],F=W.convertShape(e[1].dims).slice();F.splice(-1,1,b/C),N.push(...Y(H)),N.push(...Y(F)),N.push(...Y(e[2].dims)),e.length===4&&N.push(...Y(W.convertShape(e[3].dims)));let Q=[h,u,c];N.push(...Y(Q));let te=ie=>{let ue=H.length,ee=L("a",e[0].dataType,ue,v),se=L("b",12,F.length,C),Pe=L("scales",e[2].dataType,e[2].dims.length),re=[ee,se,Pe],ae=e.length===4?L("zero_points",12,e[3].dims.length):void 0;ae&&re.push(ae);let fe=Q.length,le=K("output",e[0].dataType,fe),_e=Ae(e[0].dataType),Te=()=>{switch(v){case 1:return`
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
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${v};${C};${A};${k}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:x,dataType:w}],dispatchGroup:{x:V},programUniforms:N}),getShaderSource:te}},Ff=(e,t)=>{Gv(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Fv(e.inputs,t)):e.compute(Hv(e.inputs,t))},qf=e=>pe(e)});var qv,Kv,Zv,Qv,Yv,Xv,Jv,e$,Zf,Qf=Z(()=>{"use strict";ce();he();ye();qv=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Kv=(e,t,i)=>{let r="";for(let u=t-1;u>=0;--u)r+=`
            k = i32(${e.indicesGet("indices",u)}) - ${ne("uniforms.pads",u,i)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ne("uniforms.x_shape",u,t)})) {
              break;
            }
            offset += k * i32(${ne("uniforms.x_strides",u,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},Zv=(e,t,i)=>{let r="";for(let u=t-1;u>=0;--u)r+=`
                k = i32(${e.indicesGet("indices",u)}) - ${ne("uniforms.pads",u,i)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ne("uniforms.x_shape",u,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ne("uniforms.x_shape",u,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ne("uniforms.x_strides",u,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Qv=(e,t,i)=>{let r="";for(let u=t-1;u>=0;--u)r+=`
                k = i32(${e.indicesGet("indices",u)}) - ${ne("uniforms.pads",u,i)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ne("uniforms.x_shape",u,t)})) {
                  k = i32(${ne("uniforms.x_shape",u,t)}) - 1;
                }
                offset += k * i32(${ne("uniforms.x_strides",u,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Yv=(e,t,i)=>{let r="";for(let u=t-1;u>=0;--u)r+=`
                k = i32(${e.indicesGet("indices",u)}) - ${ne("uniforms.pads",u,i)};
                if (k < 0)  {
                  k += i32(${ne("uniforms.x_shape",u,t)}]);
                }
                if (k >= i32(${ne("uniforms.x_shape",u,t)})) {
                  k -= i32(${ne("uniforms.x_shape",u,t)});
                }
                offset += k * i32(${ne("uniforms.x_strides",u,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Xv=(e,t,i)=>{switch(i.mode){case 0:return Kv(e,t,i.pads.length);case 1:return Zv(e,t,i.pads.length);case 2:return Qv(e,t,i.pads.length);case 3:return Yv(e,t,i.pads.length);default:throw new Error("Invalid mode")}},Jv=(e,t)=>{let i=W.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,u=W.size(i),d=[{type:12,data:u},{type:6,data:t.pads}],c=e.length>=3&&e[2].data;t.mode===0&&d.push({type:c?e[2].dataType:1,data:t.value}),d.push(...Y(e[0].dims,i));let f=["rank"],h=g=>{let b=K("output",e[0].dataType,i.length),w=L("x",e[0].dataType,r.length),v=w.type.value,C=Xv(b,r.length,t),x=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&x.push({name:"constant_value",type:c?v:"f32"}),`
            ${g.registerUniforms(x).declareVariables(w,b)}
            ${g.mainStart()}
            ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${b.offsetToIndices("global_idx")};

            var value = ${v}(0);
            ${C}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${c}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(W.size(i)/64)},programUniforms:d}),getShaderSource:h}},e$=(e,t)=>{if(e.length>1){let i=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,u=e[0].dims.length,d=new Int32Array(2*u).fill(0);if(e.length>=4){let f=e[3].getBigInt64Array();for(let h=0;h<f.length;h++)d[Number(f[h])]=Number(i[h]),d[Number(f[h])+u]=Number(i[h+f.length])}else i.forEach((f,h)=>d[Number(h)]=Number(f));let c=[];return d.forEach(f=>c.push(f)),{mode:t.mode,value:r,pads:c}}else return t},Zf=(e,t)=>{qv(e.inputs);let i=e$(e.inputs,t);e.compute(Jv(e.inputs,i),{inputs:[0]})}});var bn,Yf,Xf,Jf,em,t$,r$,tm,rm,nm,im,om,am,sm,um,lm,dm,cm,pm,fm=Z(()=>{"use strict";Je();ce();he();ye();bn=e=>{if(ke.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Yf=(e,t,i)=>{let r=t.format==="NHWC",u=e.dims.slice();r&&u.splice(1,0,u.pop());let d=Object.hasOwnProperty.call(t,"dilations"),c=t.kernelShape.slice(),f=t.strides.slice(),h=d?t.dilations.slice():[],g=t.pads.slice();Rt.adjustPoolAttributes(i,u,c,f,h,g);let b=Rt.computePoolOutputShape(i,u,f,h,c,g,t.autoPad),w=Object.assign({},t);d?Object.assign(w,{kernelShape:c,strides:f,pads:g,dilations:h,cacheKey:t.cacheKey}):Object.assign(w,{kernelShape:c,strides:f,pads:g,cacheKey:t.cacheKey});let v=b.slice();return v.push(v.splice(1,1)[0]),[w,r?v:b]},Xf=(e,t)=>{let i=t.format==="NHWC",r=W.size(e),u=W.size(t.kernelShape),d=[{type:12,data:r},{type:12,data:u}],c=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let f=t.kernelShape[t.kernelShape.length-1],h=t.strides[t.strides.length-1],g=t.pads[t.pads.length/2-1],b=t.pads[t.pads.length-1],w=!!(g+b);d.push({type:12,data:f},{type:12,data:h},{type:12,data:g},{type:12,data:b}),c.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let v=!1;if(t.kernelShape.length===2){let C=t.kernelShape[t.kernelShape.length-2],x=t.strides[t.strides.length-2],S=t.pads[t.pads.length/2-2],k=t.pads[t.pads.length-2];v=!!(S+k),d.push({type:12,data:C},{type:12,data:x},{type:12,data:S},{type:12,data:k}),c.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[d,c,!0,w,v]}else{if(i)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let f=W.computeStrides(t.kernelShape);d.push({type:12,data:f},{type:12,data:t.pads},{type:12,data:t.strides}),c.push({name:"kernelStrides",type:"u32",length:f.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let h=t.pads.reduce((g,b)=>g+b);return[d,c,!!h,!1,!1]}},Jf=(e,t,i,r,u,d,c,f,h,g,b,w)=>{let v=u.format==="NHWC",C=t.type.value,x=K("output",t.type.tensor,r);if(u.kernelShape.length<=2){let S="",k="",A="",I=i-(v?2:1);if(b?S=`
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
                }`,u.kernelShape.length===2){let B=i-(v?3:2);w?k=`
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
            }`}else{if(v)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let S=u.kernelShape.length,k=u.pads.length,A="";return g?A=`
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
            }`}},em=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,t$=e=>`${em(e)};${e.countIncludePad}`,r$=e=>`${em(e)};${e.storageOrder};${e.dilations}`,tm=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),rm=(e,t,i,r)=>{let[u,d]=Yf(t,r,i),c=L("x",t.dataType,t.dims.length),f=c.type.value,h="value += x_val;",g="";u.countIncludePad?g+=`value /= ${f}(uniforms.kernelSize);`:g+=`value /= ${f}(i32(uniforms.kernelSize) - pad);`;let[b,w,v,C,x]=Xf(d,u);b.push(...Y(t.dims,d));let S=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${v};${C};${x}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:d,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(W.size(d)/64)},programUniforms:b}),getShaderSource:k=>Jf(k,c,t.dims.length,d.length,u,h,g,0,w,v,C,x)}},nm=e=>{let t=e.count_include_pad!==0,i=tm(e);if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...i,cacheKey:""};return{...r,cacheKey:t$(r)}},im=(e,t)=>{bn(e.inputs),e.compute(rm("AveragePool",e.inputs[0],!1,t))},om={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},am=e=>{let t=e.format;return{format:t,...om,cacheKey:t}},sm=(e,t)=>{bn(e.inputs),e.compute(rm("GlobalAveragePool",e.inputs[0],!0,t))},um=(e,t,i,r)=>{let[u,d]=Yf(t,r,i),c=`
      value = max(x_val, value);
    `,f="",h=L("x",t.dataType,t.dims.length),g=["rank"],[b,w,v,C,x]=Xf(d,u);return b.push(...Y(t.dims,d)),{name:e,shaderCache:{hint:`${r.cacheKey};${v};${C};${x}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:d,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(W.size(d)/64)},programUniforms:b}),getShaderSource:S=>Jf(S,h,t.dims.length,d.length,u,c,f,t.dataType===10?-65504:-1e5,w,v,C,x)}},lm=(e,t)=>{bn(e.inputs),e.compute(um("MaxPool",e.inputs[0],!1,t))},dm=e=>{let t=e.storage_order,i=e.dilations,r=tm(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let u={storageOrder:t,dilations:i,...r,cacheKey:""};return{...u,cacheKey:r$(u)}},cm=e=>{let t=e.format;return{format:t,...om,cacheKey:t}},pm=(e,t)=>{bn(e.inputs),e.compute(um("GlobalMaxPool",e.inputs[0],!0,t))}});var i$,o$,mm,hm,gm=Z(()=>{"use strict";ce();he();Be();ye();i$=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((i,r)=>i===e[2].dims[r]).reduce((i,r)=>i&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((u,d)=>d===t.axis||u===e[0].dims[d]).reduce((u,d)=>u&&d,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let i=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(i/r)||t.blockSize>Math.ceil(i/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},o$=(e,t)=>{let i=W.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,u=r===3,d=e[0].dims,c=e[1].dataType,f=W.size(d),h=r===3||r===2,g=h?[Math.ceil(W.size(e[0].dims)/4)]:e[0].dims,b=e[1].dims,w=e.length>2?e[2]:void 0,v=w?h?[Math.ceil(W.size(w.dims)/4)]:w.dims:void 0,C=b.length===0||b.length===1&&b[0]===1,x=C===!1&&b.length===1,S=$e(f),k=C&&(!h||S===4),A=k?S:1,I=k&&!h?S:1,P=L("input",h?12:r,g.length,I),B=L("scale",c,b.length),V=w?L("zero_point",h?12:r,v.length):void 0,N=K("output",c,d.length,A),H=[P,B];V&&H.push(V);let F=[g,b];w&&F.push(v);let Q=[{type:12,data:f/A},{type:12,data:i},{type:12,data:t.blockSize},...Y(...F,d)],te=ie=>{let ue=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${ie.registerUniforms(ue).declareVariables(...H,N)}
      ${ie.mainStart()}
          ${ie.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${N.offsetToIndices("global_idx")};

          // Set input x
          ${h?`
            let input = ${P.getByOffset("global_idx / 4")};
            let x_vec = ${u?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${A===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${P.getByOffset("global_idx")};`};

          // Set scale input
          ${C?`let scale_value= ${B.getByOffset("0")}`:x?`
            let scale_index = ${N.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${B.getByOffset("scale_index")};`:`
            var scale_indices: ${B.type.indices} = output_indices;
            let index = ${B.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${B.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${B.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${V?C?h?`
                let zero_point_input = ${V.getByOffset("0")};
                let zero_point_vec =  ${u?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${V.getByOffset("0")}`:x?h?`
                let zero_point_index = ${N.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${V.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${u?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${N.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${V.getByOffset("zero_point_index")};`:h?`
                let zero_point_offset = ${B.indicesToOffset("scale_indices")};
                let zero_point_input = ${V.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${u?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${V.getByIndices("scale_indices")};`:`let zero_point_value = ${h?u?"i32":"u32":P.type.value}(0);`};
      // Compute and write output
      ${N.setByOffset("global_idx",`${N.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:V?["rank","rank","rank"]:["rank","rank"]},getShaderSource:te,getRunData:()=>({outputs:[{dims:d,dataType:c}],dispatchGroup:{x:Math.ceil(f/A/64),y:1,z:1},programUniforms:Q})}},mm=(e,t)=>{i$(e.inputs,t),e.compute(o$(e.inputs,t))},hm=e=>pe({axis:e.axis,blockSize:e.blockSize})});var a$,s$,ym,bm=Z(()=>{"use strict";Je();ce();ye();a$=(e,t,i)=>{let r=e===t,u=e<t&&i<0,d=e>t&&i>0;if(r||u||d)throw new Error("Range these inputs' contents are invalid.")},s$=(e,t,i,r)=>{let u=Math.abs(Math.ceil((t-e)/i)),d=[u],c=u,f=[{type:12,data:c},{type:r,data:e},{type:r,data:i},...Y(d)],h=g=>{let b=K("output",r,d.length),w=b.type.value,v=[{name:"outputSize",type:"u32"},{name:"start",type:w},{name:"delta",type:w}];return`
        ${g.registerUniforms(v).declareVariables(b)}
        ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${w}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:h,getRunData:()=>({outputs:[{dims:d,dataType:r}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:f})}},ym=e=>{let t=0,i=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],i=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],i=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),ke.webgpu.validateInputContent&&a$(t,i,r),e.compute(s$(t,i,r,e.inputs[0].dataType),{inputs:[]})}});var u$,l$,_m,wm,vm=Z(()=>{"use strict";ce();he();Be();ye();u$=(e,t,i,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let u=`{
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
              ${u}bitcast<${r}>(oldValue) + (${i})${d}`;case"max":return r==="i32"||r==="u32"?`atomicMax(&${t}, bitcast<${r}>(${i}));`:`
                ${u}max(bitcast<f32>(oldValue), (${i}))${d}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${i}));`:`${u}min(bitcast<${r}>(oldValue), (${i}))${d}`;case"mul":return`${u}(bitcast<${r}>(oldValue) * (${i}))${d}`;default:throw new Error(`Reduction ${e} is not supported.`)}},l$=(e,t)=>{let i=e[0].dims,r=e[1].dims,u=i,d=1,c=Math.ceil(W.size(r)/d),f=r[r.length-1],h=W.sizeFromDimension(i,f),g=[{type:12,data:c},{type:12,data:f},{type:12,data:h},...Y(e[1].dims,e[2].dims,u)],b=w=>{let v=L("indices",e[1].dataType,e[1].dims.length),C=L("updates",e[2].dataType,e[2].dims.length,d),x=t.reduction!=="none"&&t.reduction!==""?qd("output",e[0].dataType,u.length):K("output",e[0].dataType,u.length,d);return`
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
    ${u$(t.reduction,"output[data_offset + i]","value",x.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:g}),getShaderSource:b}},_m=e=>pe({reduction:e.reduction}),wm=(e,t)=>{e.compute(l$(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}});var d$,c$,p$,$m,f$,m$,h$,g$,y$,b$,_$,w$,xm,v$,$$,x$,C$,S$,Cm,Sm,Tm=Z(()=>{"use strict";ce();he();Be();ye();d$=(e,t)=>{if(e.every(i=>i>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},c$=(e,t,i)=>{t.every(u=>u>=0&&u<i||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(i).fill(1);return t.forEach((u,d)=>r[u]=e[d]),r},p$=(e,t,i,r,u,d)=>{let[c,f,h]=i>10?[1,2,3]:[-1,e.length>1?1:-1,-1],g=e[0].dims.length;if(c>0&&e.length>c&&e[c].dims.length>0)e[c].getFloat32Array().forEach(b=>d.push(b));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(f>0&&e.length>f&&e[f].dims.length===1&&e[f].dims[0]>0){if(e[f].getFloat32Array().forEach(b=>r.push(b)),r.length!==0&&r.length!==g&&i>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");d$(r,t),t.axes.length>0&&c$(r,t.axes,g).forEach((b,w)=>r[w]=b)}if(h>0&&e.length>h&&e[h].dims.length===1&&e[h].dims[0]>0&&(e[h].getBigInt64Array().forEach(b=>u.push(Number(b))),u.length!==0&&u.length!==g&&i>=18&&u.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(u.length!==0&&u.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof u<"u"&&r.length>0&&u.length>g)throw new Error("Resize requires only of scales or sizes to be specified")},$m=(e,t,i,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${i}));
  let fract = ${r}(big % (${i})) / ${r}(${i});
  return whole + fract;
`,f$=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${$m("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${$m("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",m$=(e,t,i)=>`fn getNearestPixelFromOriginal(xOriginal: ${i}, isDownSample: bool) -> ${i} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",h$=(e,t,i)=>{let r=new Array(i).fill(0).concat(new Array(i).fill(1)),u=e.length===0?r:e.slice();return t.length>0?(t.forEach((d,c)=>{r[d]=u[c],r[c+i]=u[t.length+c]}),r):u},g$=(e,t,i,r)=>{let u=[];if(i.length>0)if(r.length>0){if(e.forEach(d=>u.push(d)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((d,c)=>u[d]=i[c])}else i.forEach(d=>u.push(d));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");u=e.map((d,c)=>Math.round(d*t[c]))}return u},y$=(e,t,i)=>{let r=(()=>{switch(i.keepAspectRatioPolicy){case"not_larger":return i.axes.length>0?Math.min(...i.axes.map(d=>t[d]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return i.axes.length>0?Math.max(...i.axes.map(d=>t[d]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${i.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let u=e.slice();return i.axes.length>0?(i.axes.forEach(d=>t[d]=r),i.axes.forEach(d=>u[d]=Math.round(e[d]*t[d]))):(t.fill(r,0,t.length),u.forEach((d,c)=>u[c]=Math.round(d*t[c]))),u},b$=(e,t,i,r,u)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${i.length}> {
      var original_indices: array<${e.type.value}, ${i.length}>;
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${ne("uniforms.scales","i",r)};
        var roi_low = ${ne("uniforms.roi","i",u)};
        var roi_hi = ${ne("uniforms.roi",`i + ${t.length}`,u)};
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
    }`,_$=(e,t,i,r,u,d,c)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ne("uniforms.scales","i",u)};
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
    }`,w$=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ne("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,xm=(e,t,i,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",i,"batch")};
`:"",v$=(e,t,i,r,u)=>{let[c,f,h,g]=i.length===2?[-1,0,1,-1]:[0,2,3,1],b=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${b} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",f,`max(0, min(row, ${i[f]} - 1))`)};
      ${e.indicesSet("input_indices",h,`max(0, min(col, ${i[h]} - 1))`)};
      ${xm(e,g,c,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${b} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${b} = originalIndices[${f}];
      var col:${b} = originalIndices[${h}];
      ${r?`if (row < 0 || row > (${i[f]} - 1) || col < 0 || col > (${i[h]} - 1)) {
        return ${u};
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
    }`},$$=(e,t,i,r,u,d,c,f,h,g)=>{let b=i.length===2,w=!0,[v,C]=b?[0,1]:w?[2,3]:[1,2],x=e.type.value,S=k=>{let A=k===v?"row":"col";return`
      fn ${A}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${x} {
        var output_index = ${t.indicesGet("output_indices",k)};
        var originalIdx: ${x} = getOriginalCoordinateFromResizedCoordinate(output_index, ${u[k]},
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
    `},x$=(e,t,i,r,u)=>{let[c,f,h,g,b]=i.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],w=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${w} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",f,`max(0, min(depth, ${i[f]} - 1))`)};
      ${e.indicesSet("input_indices",h,`max(0, min(height, ${i[h]} - 1))`)};
      ${e.indicesSet("input_indices",g,`max(0, min(width, ${i[g]} - 1))`)};
      ${xm(e,b,c,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${w} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${w} = originalIndices[${f}];
      var height:${w} = originalIndices[${h}];
      var width:${w} = originalIndices[${g}];
      ${r?`if (depth < 0 || depth > (${i[f]} - 1) || height < 0 || height > (${i[h]} - 1) || width < 0 || (width > ${i[g]} - 1)) {
      return ${u};
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
    }`},C$=(e,t,i,r,u,d)=>{let c=e.dims,f=h$(d,t.axes,c.length),h=g$(c,r,u,t.axes),g=r.slice();r.length===0&&(g=c.map((I,P)=>I===0?1:h[P]/I),t.keepAspectRatioPolicy!=="stretch"&&(h=y$(c,g,t)));let b=K("output",e.dataType,h.length),w=L("input",e.dataType,c.length),v=W.size(h),C=c.length===h.length&&c.every((I,P)=>I===h[P]),x=t.coordinateTransformMode==="tf_crop_and_resize",S=t.extrapolationValue,k=w.type.value,A=I=>`
      ${C?"":`
      ${f$(t.coordinateTransformMode,k)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${w$(w,c)};
              ${m$(t.nearestMode,i,k)};
              ${_$(w,b,c,h,g.length,f.length,x)};
              `;case"linear":return`
              ${b$(b,c,h,g.length,f.length)};
              ${(()=>{if(c.length===2||c.length===4)return`${v$(w,b,c,x,S)}`;if(c.length===3||c.length===5)return`${x$(w,b,c,x,S)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(c.length===2||c.length===4)return`${$$(w,b,c,h,g,f,t.cubicCoeffA,x,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
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
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${i}|${g.length>0?t.mode==="cubic"?g:g.length:""}|${u.length>0?u:""}|${f.length>0?f:""}|${C}|${t.mode==="nearest"?c.length:c}`,inputDependencies:["rank"]},getShaderSource:A,getRunData:()=>({outputs:[{dims:h,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:[{type:12,data:v},{type:1,data:g},{type:1,data:f},...Y(c,h)]})}},S$=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Cm=(e,t)=>{let i=[],r=[],u=[],d=S$(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");p$(e.inputs,t,d,i,r,u),e.compute(C$(e.inputs[0],t,d,i,r,u),{inputs:[0]})},Sm=e=>{let t=e.antialias,i=e.axes,r=e.coordinateTransformMode,u=e.cubicCoeffA,d=e.excludeOutside!==0,c=e.extrapolationValue,f=e.keepAspectRatioPolicy,h=e.mode,g=e.nearestMode===""?"simple":e.nearestMode;return pe({antialias:t,axes:i,coordinateTransformMode:r,cubicCoeffA:u,excludeOutside:d,extrapolationValue:c,keepAspectRatioPolicy:f,mode:h,nearestMode:g})}});var T$,I$,Im,Am=Z(()=>{"use strict";ce();he();Be();ye();T$=(e,t)=>{let[i,r,u,d]=e,{numHeads:c,rotaryEmbeddingDim:f}=t;if(i.dims.length!==3&&i.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${i.dims.length}`);if(!W.areEqual(r.dims,[])&&!W.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(u.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${u.dims.length}`);if(d.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${d.dims.length}`);if(!W.areEqual(u.dims,d.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(f>0&&c===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let h=i.dims[0],g=i.dims[i.dims.length-2],b=u.dims[0],w=W.sizeFromDimension(i.dims,1)/g,v=f===0?u.dims[1]*2:w/c;if(f>v)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(h!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(g!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(v/2!==u.dims[1]&&f/2!==u.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${u.dims[1]}`);if(g>b)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},I$=(e,t)=>{let{interleaved:i,numHeads:r,rotaryEmbeddingDim:u,scale:d}=t,c=e[0].dims[0],f=W.sizeFromDimension(e[0].dims,1),h=e[0].dims[e[0].dims.length-2],g=f/h,b=e[2].dims[1],w=u===0?b*2:g/r,v=new Array(c,h,g/w,w-b),C=W.computeStrides(v),x=[{type:1,data:d},{type:12,data:v},{type:12,data:C},...e[0].dims.length===3?new Array({type:12,data:[f,g,w,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[f,w,h*w,1]}):[],...Y(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],S=k=>{let A=L("input",e[0].dataType,e[0].dims.length),I=L("position_ids",e[1].dataType,e[1].dims.length),P=L("cos_cache",e[2].dataType,e[2].dims.length),B=L("sin_cache",e[3].dataType,e[3].dims.length),V=K("output",e[0].dataType,e[0].dims.length);return k.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:v.length},{name:"global_strides",type:"u32",length:C.length},{name:"input_output_strides",type:"u32",length:C.length}]),`
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
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:pe({interleaved:i}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:S,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(W.size(v)/Ut)},programUniforms:x})}},Im=(e,t)=>{T$(e.inputs,t),e.compute(I$(e.inputs,t))}});var A$,E$,Em,km=Z(()=>{"use strict";ce();he();ye();A$=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],i=e[1],r=e[2];if(t.dataType!==i.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(i.dims.length!==3&&i.dims.length!==2)throw new Error("Skip must be 2D or 3D");let u=t.dims[t.dims.length-1],d=t.dims[t.dims.length-2];if(i.dims[i.dims.length-1]!==u)throw new Error("Skip must have the same hidden size as input");if(i.dims[i.dims.length-2]!==d)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==u)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let c=e[3];if(c.dims.length!==1)throw new Error("Beta must be 1D");if(c.dims[c.dims.length-1]!==u)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let c=e[4];if(c.dims.length!==1)throw new Error("Bias must be 1D");if(c.dims[c.dims.length-1]!==u)throw new Error("Bias must have the same hidden size as input")}},E$=(e,t,i,r)=>{let u=t.simplified,d=e[0].dims,c=W.size(d),f=d,h=c,g=d.slice(-1)[0],b=r?d.slice(0,-1).concat(1):[],w=!u&&e.length>3,v=e.length>4,C=r&&i>1,x=r&&i>2,S=i>3,k=64,A=$e(g),I=[{type:12,data:h},{type:12,data:A},{type:12,data:g},{type:1,data:t.epsilon}],P=V=>{let N=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],H=[L("x",e[0].dataType,e[0].dims,A),L("skip",e[1].dataType,e[1].dims,A),L("gamma",e[2].dataType,e[2].dims,A)];w&&H.push(L("beta",e[3].dataType,e[3].dims,A)),v&&H.push(L("bias",e[4].dataType,e[4].dims,A)),H.push(K("output",e[0].dataType,f,A)),C&&H.push(K("mean_output",1,b)),x&&H.push(K("inv_std_output",1,b)),S&&H.push(K("input_skip_bias_sum",e[0].dataType,f,A));let F=Ae(e[0].dataType),Q=Ae(1,A);return`

      ${V.registerUniforms(N).declareVariables(...H)}
      var<workgroup> sum_shared : array<${Q}, ${k}>;
      var<workgroup> sum_squared_shared : array<${Q}, ${k}>;

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
        let inv_std_dev = inverseSqrt(${nt("square_sum",A)} / f32(uniforms.hidden_size) ${u?"":"- mean * mean"} + uniforms.epsilon);
        ${C?"mean_output[global_idx] = mean;":""}
        ${x?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${u?"":`- ${F}(mean)`}) *
            ${F}(inv_std_dev) * gamma[offset1d + i]
            ${w?"+ beta[offset1d + i]":""};
        }
      }`},B=[{dims:f,dataType:e[0].dataType}];return i>1&&B.push({dims:b,dataType:1}),i>2&&B.push({dims:b,dataType:1}),i>3&&B.push({dims:d,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${A};${C};${x};${S}`,inputDependencies:e.map((V,N)=>"type")},getShaderSource:P,getRunData:()=>({outputs:B,dispatchGroup:{x:Math.ceil(h/g)},programUniforms:I})}},Em=(e,t)=>{A$(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(E$(e.inputs,t,e.outputCount,!1),{outputs:r})}});var k$,_n,P$,Pm,z$,O$,zm,Om,Bm=Z(()=>{"use strict";ce();he();Be();ye();k$=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((i,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},_n=(e,t)=>{let i=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>i.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>i.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return i},P$=(e,t)=>{if(e.length>1){let i=_n(e,1),r=_n(e,2),u=_n(e,3);return u.length===0&&(u=[...Array(e[0].dims.length).keys()]),pe({starts:i,ends:r,axes:u})}else return t},Pm=(e,t,i,r,u)=>{let d=e;return e<0&&(d+=i[r[t]]),u[t]<0?Math.max(0,Math.min(d,i[r[t]]-1)):Math.max(0,Math.min(d,i[r[t]]))},z$=(e,t,i)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
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
      }`,O$=(e,t)=>{let i=e[0].dims,r=W.size(i),u=t.axes.length>0?W.normalizeAxes(t.axes,i.length):[...Array(i.length).keys()],d=_n(e,4);d.forEach(A=>A!==0||(()=>{throw new Error("step cannot be 0")})),d.length===0&&(d=Array(u.length).fill(1));let c=t.starts.map((A,I)=>Pm(A,I,i,u,d)),f=t.ends.map((A,I)=>Pm(A,I,i,u,d));if(u.length!==c.length||u.length!==f.length)throw new Error("start, ends and axes should have the same number of elements");if(u.length!==i.length)for(let A=0;A<i.length;++A)u.includes(A)||(c.splice(A,0,0),f.splice(A,0,i[A]),d.splice(A,0,1));let h=d.map(A=>Math.sign(A));d.forEach((A,I,P)=>{if(A<0){let B=(f[I]-c[I])/A,V=c[I],N=V+B*d[I];c[I]=N,f[I]=V,P[I]=-A}});let g=i.slice(0);u.forEach((A,I)=>{g[A]=Math.ceil((f[A]-c[A])/d[A])});let b={dims:g,dataType:e[0].dataType},w=K("output",e[0].dataType,g.length),v=L("input",e[0].dataType,e[0].dims.length),C=W.size(g),x=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:c.length},{name:"signs",type:"i32",length:h.length},{name:"steps",type:"u32",length:d.length}],S=[{type:12,data:C},{type:12,data:c},{type:6,data:h},{type:12,data:d},...Y(e[0].dims,g)],k=A=>`
      ${A.registerUniforms(x).declareVariables(v,w)}
        ${z$(v,w,i)}
        ${A.mainStart()}
          ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${w.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${w.setByOffset("global_idx",v.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${h.length}_${c.length}_${d.length}`,inputDependencies:["rank"]},getShaderSource:k,getRunData:()=>({outputs:[b],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:S})}},zm=(e,t)=>{k$(e.inputs,t);let i=P$(e.inputs,t);e.compute(O$(e.inputs,i),{inputs:[0]})},Om=e=>{let t=e.starts,i=e.ends,r=e.axes;return pe({starts:t,ends:i,axes:r})}});var B$,D$,Dm,Mm,Rm=Z(()=>{"use strict";ce();he();Be();wt();ye();B$=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},D$=(e,t)=>{let i=e.inputs[0],r=i.dims,u=W.size(r),d=r.length,c=W.normalizeAxis(t.axis,d),f=c<r.length-1,h,g=[];f?(g=Array.from({length:d},(H,F)=>F),g[c]=d-1,g[d-1]=c,h=e.compute(We(i,g),{inputs:[i],outputs:[-1]})[0]):h=i;let b=h.dims,w=b[d-1],v=u/w,C=$e(w),x=w/C,S=64;v===1&&(S=256);let k=(H,F)=>F===4?`max(max(${H}.x, ${H}.y), max(${H}.z, ${H}.w))`:F===2?`max(${H}.x, ${H}.y)`:F===3?`max(max(${H}.x, ${H}.y), ${H}.z)`:H,A=L("x",h.dataType,h.dims,C),I=K("result",h.dataType,h.dims,C),P=A.type.value,B=Ae(h.dataType)==="f32"?`var threadMax = ${P}(-3.402823e+38f);`:`var threadMax = ${P}(-65504.0h);`,V=H=>`
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
      }`,N=e.compute({name:"Softmax",shaderCache:{hint:`${C};${S}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:b,dataType:h.dataType}],dispatchGroup:{x:v},programUniforms:[{type:6,data:x}]}),getShaderSource:V},{inputs:[h],outputs:[f?-1:0]})[0];f&&e.compute(We(N,g),{inputs:[N]})},Dm=(e,t)=>{B$(e.inputs),D$(e,t)},Mm=e=>pe({axis:e.axis})});var Um,M$,R$,U$,jm,Nm=Z(()=>{"use strict";ce();he();ye();Um=e=>Array.from(e.getBigInt64Array(),Number),M$=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Um(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},R$=(e,t)=>{let i=[];for(let r=0;r<e.length;++r)i.push(e[r]*t[r]);return i},U$=(e,t)=>{let i=e[0].dims,r=t??Um(e[1]),u=R$(i,r),d=W.size(u),c=e[0].dataType,f=L("input",c,i.length),h=K("output",c,u.length),g=b=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},...Y(e[0].dims,u)]}),getShaderSource:g}},jm=e=>{M$(e.inputs),e.compute(U$(e.inputs),{inputs:[0]})}});var j$,N$,Vm,Wm=Z(()=>{"use strict";ce();he();ye();j$=(e,t,i,r,u)=>{let d=K("output_data",u,i.length,4),c=L("a_data",t[1].dataType,t[1].dims.length,4),f=L("b_data",t[2].dataType,t[2].dims.length,4),h=L("c_data",t[0].dataType,t[0].dims.length,4),g,b=(w,v,C)=>`select(${v}, ${w}, ${C})`;if(!r)g=d.setByOffset("global_idx",b(c.getByOffset("global_idx"),f.getByOffset("global_idx"),h.getByOffset("global_idx")));else{let w=(v,C,x="")=>{let S=`a_data[index_a${C}][component_a${C}]`,k=`b_data[index_b${C}][component_b${C}]`,A=`bool(c_data[index_c${C}] & (0xffu << (component_c${C} * 8)))`;return`
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
          `};u===9?g=`
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
      }`},N$=e=>{let t=e[1].dims,i=e[2].dims,r=e[0].dims,u=e[1].dataType,d=!(W.areEqual(t,i)&&W.areEqual(i,r)),c=t,f=W.size(t);if(d){let g=ct.calcShape(ct.calcShape(t,i,!1),r,!1);if(!g)throw new Error("Can't perform where op on the given tensors");c=g,f=W.size(c)}let h=Math.ceil(f/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:g=>j$(g,e,c,d,u),getRunData:()=>({outputs:[{dims:c,dataType:u}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:h},...Y(r,t,i,c)]})}},Vm=e=>{e.compute(N$(e.inputs))}});var Lm,Gm=Z(()=>{"use strict";$c();un();Sc();Ic();pp();xp();Tp();Wp();Zp();Xp();tf();sf();df();pf();hf();bf();vf();Cf();If();kf();Uf();Vf();Lf();Hf();Kf();Ri();Qf();fm();gm();bm();vm();an();Tm();Am();km();Bm();Rm();ji();Nm();wt();dn();Wm();Lm=new Map([["Abs",[Ac]],["Acos",[Ec]],["Acosh",[kc]],["Add",[fp]],["ArgMax",[vc,Ci]],["ArgMin",[wc,Ci]],["Asin",[Pc]],["Asinh",[zc]],["Atan",[Oc]],["Atanh",[Bc]],["Attention",[xc]],["AveragePool",[im,nm]],["BatchNormalization",[Cc]],["BiasAdd",[Tc]],["BiasSplitGelu",[cp]],["Cast",[Mc,Dc]],["Ceil",[Uc]],["Clip",[Rc]],["Concat",[Cp,Sp]],["Conv",[Oi,zi]],["ConvTranspose",[Kp,Fp]],["Cos",[jc]],["Cosh",[Nc]],["CumSum",[Qp,Yp]],["DepthToSpace",[Jp,ef]],["DequantizeLinear",[mm,hm]],["Div",[mp]],["Einsum",[of,af]],["Elu",[Vc,cr]],["Equal",[hp]],["Erf",[Wc]],["Exp",[Lc]],["Expand",[lf]],["FastGelu",[cf]],["Floor",[Gc]],["FusedConv",[Oi,zi]],["Gather",[mf,ff]],["GatherElements",[xf,$f]],["GatherBlockQuantized",[_f,wf]],["GatherND",[gf,yf]],["Gelu",[Hc]],["Gemm",[Tf,Sf]],["GlobalAveragePool",[sm,am]],["GlobalMaxPool",[pm,cm]],["Greater",[_p]],["GreaterOrEqual",[vp]],["GridSample",[Af,Ef]],["GroupQueryAttention",[Rf]],["HardSigmoid",[Jc,Xc]],["InstanceNormalization",[Nf]],["LayerNormalization",[Wf]],["LeakyRelu",[Fc,cr]],["Less",[wp]],["LessOrEqual",[$p]],["Log",[up]],["MatMul",[Gf]],["MatMulNBits",[Ff,qf]],["MaxPool",[lm,dm]],["Mul",[gp]],["MultiHeadAttention",[Of,zf]],["Neg",[Kc]],["Not",[qc]],["Pad",[Zf]],["Pow",[yp]],["QuickGelu",[lp,cr]],["Range",[ym]],["Reciprocal",[Zc]],["ReduceMin",[mc]],["ReduceMean",[lc]],["ReduceMax",[fc]],["ReduceSum",[gc]],["ReduceProd",[hc]],["ReduceL1",[dc]],["ReduceL2",[cc]],["ReduceLogSum",[bc]],["ReduceLogSumExp",[pc]],["ReduceSumSquare",[yc]],["Relu",[Qc]],["Resize",[Cm,Sm]],["RotaryEmbedding",[Im]],["ScatterND",[wm,_m]],["Sigmoid",[Yc]],["Sin",[ep]],["Sinh",[tp]],["Slice",[zm,Om]],["SkipLayerNormalization",[Em]],["Split",[Bf,Df]],["Sqrt",[rp]],["Softmax",[Dm,Mm]],["Sub",[bp]],["Tan",[np]],["Tanh",[op]],["ThresholdedRelu",[sp,cr]],["Tile",[jm]],["Transpose",[Qd,Yd]],["Where",[Vm]]])});var wn,Hm=Z(()=>{"use strict";Je();dt();ye();wn=class{constructor(t){this.backend=t;this.repo=new Map,this.attributesBound=!1}getArtifact(t){return this.repo.get(t)}setArtifact(t,i){this.repo.set(t,i)}run(t,i,r,u,d){Ze(t.programInfo.name);let c=this.backend.device,f=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let h=[];for(let b of i)h.push({binding:h.length,resource:{buffer:b.buffer}});for(let b of r)h.push({binding:h.length,resource:{buffer:b.buffer}});d&&h.push({binding:h.length,resource:d});let g=c.createBindGroup({layout:t.computePipeline.getBindGroupLayout(0),entries:h,label:t.programInfo.name});if(this.backend.sessionStatus==="capturing"){let b={kernelId:this.backend.currentKernelId,computePipeline:t.computePipeline,bindGroup:g,dispatchGroup:u};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(b)}f.setPipeline(t.computePipeline),f.setBindGroup(0,g),f.dispatchWorkgroups(...u),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),He(t.programInfo.name)}dispose(){}build(t,i){Ze(t.name);let r=this.backend.device,u=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(w=>{r.features.has(w.feature)&&u.push(`enable ${w.extension};`)});let c=Kd(i,this.backend.device.limits),f=t.getShaderSource(c),h=`${u.join(`
`)}
${c.additionalImplementations}
${f}`,g=r.createShaderModule({code:h,label:t.name});be("verbose",()=>`[WebGPU] ${t.name} shader code: ${h}`);let b=r.createComputePipeline({compute:{module:g,entryPoint:"main"},layout:"auto",label:t.name});return He(t.name),{programInfo:t,computePipeline:b,uniformVariablesInfo:c.variablesInfo}}normalizeDispatchGroupSize(t){let i=typeof t=="number"?t:t.x,r=typeof t=="number"?1:t.y||1,u=typeof t=="number"?1:t.z||1,d=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(i<=d&&r<=d&&u<=d)return[i,r,u];let c=i*r*u,f=Math.ceil(Math.sqrt(c));if(f>d){if(f=Math.ceil(Math.cbrt(c)),f>d)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[f,f,f]}else return[f,f,1]}}});var Fm={};qt(Fm,{WebGpuBackend:()=>Vi});var V$,W$,Ni,Vi,qm=Z(()=>{"use strict";Je();ce();dt();pi();Fd();Gm();Hm();V$=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let i=[];for(let r=0;r<e.length;++r){let u=e[r].dataType;switch(t[r]){case"none":{i.push("");break}case"type":{i.push(`${u}`);break}case"rank":{let d=e[r].dims.length;i.push(`${u};${d}`);break}case"dims":{let d=e[r].dims.join(",");i.push(`${u};${d}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return i.join("|")},W$=(e,t,i)=>{let r=e.name;return e.shaderCache?.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+i+`:${V$(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,r},Ni=class{constructor(t){t&&(this.architecture=t.architecture,this.vendor=t.vendor)}isArchitecture(t){return this.architecture===t}isVendor(t){return this.vendor===t}},Vi=class{constructor(){this.currentSessionId=null;this.currentKernelId=null;this.commandEncoder=null;this.computePassEncoder=null;this.maxDispatchNumber=16;this.pendingDispatchNumber=0;this.pendingKernels=[];this.pendingQueries=new Map;this.sessionStatus="default";this.capturedCommandList=new Map;this.capturedPendingKernels=new Map;this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let t=this.kernelCustomData.get(this.currentKernelId);return t||(t={},this.kernelCustomData.set(this.currentKernelId,t)),t}async initialize(t,i){this.env=t;let r=[],u={requiredLimits:{maxComputeWorkgroupStorageSize:i.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:i.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:i.limits.maxStorageBufferBindingSize,maxBufferSize:i.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:i.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:i.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:i.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:i.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},d=c=>i.features.has(c)&&r.push(c)&&!0;d("chromium-experimental-timestamp-query-inside-passes")||d("timestamp-query"),d("shader-f16"),d("subgroups"),this.device=await i.requestDevice(u),this.adapterInfo=new Ni(i.info||await i.requestAdapterInfo()),this.gpuDataManager=Hd(this),this.programManager=new wn(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Qr(t.logLevel,!!t.debug),this.device.onuncapturederror=c=>{c.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${c.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:i,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let t=this.getCommandEncoder(),i={};this.queryType==="at-passes"&&(i.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=t.beginComputePass(i)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Ze(),this.endComputePass();let t;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),t=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(t,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,t,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&t.mapAsync(GPUMapMode.READ).then(()=>{let i=new BigUint64Array(t.getMappedRange()),r=this.pendingQueries.get(t);for(let u=0;u<i.length/2;u++){let d=r[u],c=d.kernelId,f=this.kernels.get(c),h=f.kernelType,g=f.kernelName,b=d.programName,w=d.inputTensorViews,v=d.outputTensorViews,C=i[u*2],x=i[u*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=C);let S=Number(C-this.queryTimeBase),k=Number(x-this.queryTimeBase);if(!Number.isSafeInteger(S)||!Number.isSafeInteger(k))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:w.map(A=>({dims:A.dims,dataType:At(A.dataType)})),outputsMetadata:v.map(A=>({dims:A.dims,dataType:At(A.dataType)})),kernelId:c,kernelType:h,kernelName:g,programName:b,startTime:S,endTime:k});else{let A="";w.forEach((P,B)=>{A+=`input[${B}]: [${P.dims}] | ${At(P.dataType)}, `});let I="";v.forEach((P,B)=>{I+=`output[${B}]: [${P.dims}] | ${At(P.dataType)}, `}),console.log(`[profiling] kernel "${c}|${h}|${g}|${b}" ${A}${I}execution time: ${k-S} ns`)}zr("GPU",`${b}::${C}::${x}`)}t.unmap(),this.pendingQueries.delete(t)}),He()}run(t,i,r,u,d,c){Ze(t.name);let f=[];for(let P=0;P<i.length;++P){let B=i[P].data;if(B===0)continue;let V=this.gpuDataManager.get(B);if(!V)throw new Error(`no GPU data for input: ${B}`);f.push(V)}let{outputs:h,dispatchGroup:g,programUniforms:b}=t.getRunData(i),w=r.length===0?h.map((P,B)=>B):r;if(w.length!==h.length)throw new Error(`Output size ${w.length} must be equal to ${h.length}.`);let v=[],C=[];for(let P=0;P<h.length;++P){if(!Number.isInteger(w[P])||w[P]<-3||w[P]>=c)throw new Error(`Invalid output index: ${w[P]}`);if(w[P]===-3)continue;let B=w[P]===-1,V=w[P]===-2,N=B||V?d(h[P].dataType,h[P].dims):u(w[P],h[P].dataType,h[P].dims);if(v.push(N),N.data===0)continue;let H=this.gpuDataManager.get(N.data);if(!H)throw new Error(`no GPU data for output: ${N.data}`);if(B&&this.temporaryData.push(H),V){let F=this.kernelPersistentData.get(this.currentKernelId);F||(F=[],this.kernelPersistentData.set(this.currentKernelId,F)),F.push(H)}C.push(H)}if(f.length!==i.length||C.length!==v.length){if(C.length===0)return He(t.name),v;throw new Error(`Program ${t.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let x;if(b){let P=0,B=[];b.forEach(F=>{let Q=typeof F.data=="number"?[F.data]:F.data;if(Q.length===0)return;let te=F.type===10?2:4,ie,ue;F.type===10?(ue=Q.length>4?16:Q.length>2?8:Q.length*te,ie=Q.length>4?16:te*Q.length):(ue=Q.length<=2?Q.length*te:16,ie=16),P=Math.ceil(P/ue)*ue,B.push(P);let ee=F.type===10?8:4;P+=Q.length>4?Math.ceil(Q.length/ee)*ie:Q.length*te});let V=16;P=Math.ceil(P/V)*V;let N=new ArrayBuffer(P);b.forEach((F,Q)=>{let te=B[Q],ie=typeof F.data=="number"?[F.data]:F.data;if(F.type===6)new Int32Array(N,te,ie.length).set(ie);else if(F.type===12)new Uint32Array(N,te,ie.length).set(ie);else if(F.type===10)new Uint16Array(N,te,ie.length).set(ie);else if(F.type===1)new Float32Array(N,te,ie.length).set(ie);else throw new Error(`Unsupported uniform type: ${At(F.type)}`)});let H=this.gpuDataManager.create(P,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(H.buffer,0,N,0,P),this.gpuDataManager.release(H.id),x={offset:0,size:P,buffer:H.buffer}}let S=this.programManager.normalizeDispatchGroupSize(g),k=S[1]===1&&S[2]===1,A=W$(t,i,k),I=this.programManager.getArtifact(A);if(I||(I=this.programManager.build(t,S),this.programManager.setArtifact(A,I),be("info",()=>`[artifact] key: ${A}, programName: ${t.name}`)),b&&I.uniformVariablesInfo){if(b.length!==I.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${I.uniformVariablesInfo.length}, got ${b.length} in program "${I.programInfo.name}".`);for(let P=0;P<b.length;P++){let B=b[P],V=B.type,N=typeof B.data=="number"?1:B.data.length,[H,F]=I.uniformVariablesInfo[P];if(V!==H||N!==F)throw new Error(`Uniform variable ${P} mismatch: expect type ${H} with size ${F}, got type ${V} with size ${N} in program "${I.programInfo.name}".`)}}if(be("info",()=>`[ProgramManager] run "${t.name}" (key=${A}) with ${S[0]}x${S[1]}x${S[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let P={kernelId:this.currentKernelId,programName:I.programInfo.name,inputTensorViews:i,outputTensorViews:v};this.pendingKernels.push(P),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(P)}return this.programManager.run(I,f,C,S,x),He(t.name),v}upload(t,i){this.gpuDataManager.upload(t,i)}memcpy(t,i){this.gpuDataManager.memcpy(t,i)}async download(t,i){await this.gpuDataManager.download(t,i)}alloc(t){return this.gpuDataManager.create(t).id}free(t){return this.gpuDataManager.release(t)}createKernel(t,i,r,u){let d=Lm.get(t);if(!d)throw new Error(`kernel not implemented: ${t}`);let c={kernelType:t,kernelName:u,kernelEntry:d[0],attributes:[d[1],r]};this.kernels.set(i,c)}releaseKernel(t){let i=this.kernelPersistentData.get(t);if(i){for(let r of i)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(t)}this.kernelCustomData.delete(t),this.kernels.delete(t)}computeKernel(t,i,r){let u=this.kernels.get(t);if(!u)throw new Error(`kernel not created: ${t}`);let d=u.kernelType,c=u.kernelName,f=u.kernelEntry,h=u.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${d}] ${c}" is not allowed to be called recursively`);this.currentKernelId=t,h[0]&&(h[1]=h[0](h[1]),h[0]=void 0),be("info",()=>`[WebGPU] Start to run kernel "[${d}] ${c}"...`);let g=this.env.debug;this.temporaryData=[];try{return g&&this.device.pushErrorScope("validation"),f(i,h[1]),0}catch(b){return r.push(Promise.resolve(`[WebGPU] Kernel "[${d}] ${c}" failed. ${b}`)),1}finally{g&&r.push(this.device.popErrorScope().then(b=>b?`GPU validation error for kernel "[${d}] ${c}": ${b.message}`:null));for(let b of this.temporaryData)this.gpuDataManager.release(b.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(t,i,r,u){let d=this.sessionExternalDataMapping.get(t);d||(d=new Map,this.sessionExternalDataMapping.set(t,d));let c=d.get(i),f=this.gpuDataManager.registerExternalBuffer(r,u,c);return d.set(i,[f,r]),f}unregisterBuffers(t){let i=this.sessionExternalDataMapping.get(t);i&&(i.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(t))}getBuffer(t){let i=this.gpuDataManager.get(t);if(!i)throw new Error(`no GPU data for buffer: ${t}`);return i.buffer}createDownloader(t,i,r){return async()=>{let u=await bi(this,t,i);return Xr(u.buffer,r)}}writeTimestamp(t){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,t)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){be("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){be("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){be("info","replay"),this.sessionStatus="replaying";let t=this.capturedCommandList.get(this.currentSessionId),i=this.capturedPendingKernels.get(this.currentSessionId),r=t.length;this.pendingKernels=[];for(let u=0;u<r;u++){let d=this.getComputePassEncoder(),c=t[u];this.writeTimestamp(this.pendingDispatchNumber*2),d.setPipeline(c.computePipeline),d.setBindGroup(0,c.bindGroup),d.dispatchWorkgroups(...c.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(i[u]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(t){this.unregisterBuffers(t),this.capturedCommandList.has(t)&&this.capturedCommandList.delete(t),this.capturedPendingKernels.has(t)&&this.capturedPendingKernels.delete(t),this.gpuDataManager.onReleaseSession(t)}onRunStart(t){this.currentSessionId=t,this.setQueryType()}}});var Km={};qt(Km,{init:()=>L$});var hr,Wi,L$,Zm=Z(()=>{"use strict";ce();dt();he();Vd();hr=class e{constructor(t,i,r,u){this.module=t;this.dataType=i;this.data=r;this.dims=u}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=W.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(W.size(t)!==W.size(this.dims))throw new Error("Invalid new shape");return new e(this.module,this.dataType,this.data,t)}},Wi=class{constructor(t,i,r){this.module=t;this.backend=i;this.customDataOffset=0;this.customDataSize=0;this.adapterInfo=i.adapterInfo;let u=t.PTR_SIZE,d=r/t.PTR_SIZE,c=u===4?"i32":"i64";this.opKernelContext=Number(t.getValue(u*d++,c));let f=Number(t.getValue(u*d++,c));this.outputCount=Number(t.getValue(u*d++,c)),this.customDataOffset=Number(t.getValue(u*d++,"*")),this.customDataSize=Number(t.getValue(u*d++,c));let h=[];for(let g=0;g<f;g++){let b=Number(t.getValue(u*d++,c)),w=Number(t.getValue(u*d++,"*")),v=Number(t.getValue(u*d++,c)),C=[];for(let x=0;x<v;x++)C.push(Number(t.getValue(u*d++,c)));h.push(new hr(t,b,w,C))}this.inputs=h}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(t,i){let r=i?.inputs?.map(f=>typeof f=="number"?this.inputs[f]:f)??this.inputs,u=i?.outputs??[],d=(f,h,g)=>new hr(this.module,h,this.output(f,g),g),c=(f,h)=>{let g=Et(f,h);if(!g)throw new Error(`Unsupported data type: ${f}`);let b=g>0?this.backend.gpuDataManager.create(g).id:0;return new hr(this.module,f,b,h)};return this.backend.run(t,r,u,d,c,this.outputCount)}output(t,i){let r=this.module.stackSave();try{let u=this.module.PTR_SIZE,d=u===4?"i32":"i64",c=this.module.stackAlloc((1+i.length)*u);this.module.setValue(c,i.length,d);for(let f=0;f<i.length;f++)this.module.setValue(c+u*(f+1),i[f],d);return this.module._JsepOutput(this.opKernelContext,t,c)}catch(u){throw new Error(`Failed to generate kernel's output[${t}] with dims [${i}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${u}`)}finally{this.module.stackRestore(r)}}},L$=async(e,t,i,r)=>{let u=t.jsepInit;if(!u)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let d=(qm(),or(Fm)).WebGpuBackend,c=new d;await c.initialize(i,r),u("webgpu",[c,f=>c.alloc(Number(f)),f=>c.free(f),(f,h,g,b=!1)=>{if(b)be("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(f)}, dst=${Number(h)}, size=${Number(g)}`),c.memcpy(Number(f),Number(h));else{be("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(f)}, gpuDataId=${Number(h)}, size=${Number(g)}`);let w=t.HEAPU8.subarray(Number(f>>>0),Number(f>>>0)+Number(g));c.upload(Number(h),w)}},async(f,h,g)=>{be("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${f}, dataOffset=${h}, size=${g}`),await c.download(Number(f),()=>t.HEAPU8.subarray(Number(h)>>>0,Number(h+g)>>>0))},(f,h,g)=>c.createKernel(f,Number(h),g,t.UTF8ToString(t._JsepGetNodeName(Number(h)))),f=>c.releaseKernel(f),(f,h,g,b)=>{be("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${g}, kernel=${f}, contextDataOffset=${h}`);let w=new Wi(t,c,Number(h));return c.computeKernel(Number(f),w,b)},()=>c.captureBegin(),()=>c.captureEnd(),()=>c.replay()])}else{let d=new tn(i);u("webnn",[d,()=>d.reserveTensorId(),c=>d.releaseTensorId(c),async(c,f,h,g,b)=>d.ensureTensor(c,f,h,g,b),(c,f)=>{d.uploadTensor(c,f)},async(c,f)=>d.downloadTensor(c,f)])}}});var G$,Rr,Ur,Nt,H$,sr,jr,Nr,Qm,Vr,Wr,Lr,ni=Z(()=>{"use strict";kd();zd();ce();It();Hr();di();G$=(e,t)=>{Ie()._OrtInit(e,t)!==0&&Se("Can't initialize onnxruntime.")},Rr=async e=>{G$(e.wasm.numThreads,lr(e.logLevel))},Ur=async(e,t)=>{Ie().asyncInit?.();{let i=(Zm(),or(Km)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let r=e.webgpu.adapter;if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let u=e.webgpu.powerPreference;if(u!==void 0&&u!=="low-power"&&u!=="high-performance")throw new Error(`Invalid powerPreference setting: "${u}"`);let d=e.webgpu.forceFallbackAdapter;if(d!==void 0&&typeof d!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${d}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:u,forceFallbackAdapter:d}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await i("webgpu",Ie(),e,r)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await i("webnn",Ie(),e)}}},Nt=new Map,H$=e=>{let t=Ie(),i=t.stackSave();try{let r=t.PTR_SIZE,u=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,u,u+r)!==0&&Se("Can't get session input/output count.");let c=r===4?"i32":"i64";return[Number(t.getValue(u,c)),Number(t.getValue(u+r,c))]}finally{t.stackRestore(i)}},sr=e=>{let t=Ie(),i=t._malloc(e.byteLength);if(i===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,i),[i,e.byteLength]},jr=async(e,t)=>{let i,r,u=Ie();Array.isArray(e)?[i,r]=e:e.buffer===u.HEAPU8.buffer?[i,r]=[e.byteOffset,e.byteLength]:[i,r]=sr(e);let d=0,c=0,f=0,h=[],g=[],b=[];try{if([c,h]=await Pd(t),t?.externalData&&u.mountExternalData){let I=[];for(let P of t.externalData){let B=typeof P=="string"?P:P.path;I.push(dr(typeof P=="string"?P:P.data).then(V=>{u.mountExternalData(B,V)}))}await Promise.all(I)}for(let I of t?.executionProviders??[])if((typeof I=="string"?I:I.name)==="webnn"){if(u.shouldTransferToMLTensor=!1,typeof I!="string"){let B=I,V=B?.context,N=B?.gpuDevice,H=B?.deviceType,F=B?.powerPreference;V?u.currentContext=V:N?u.currentContext=await u.jsepCreateMLContext(N):u.currentContext=await u.jsepCreateMLContext({deviceType:H,powerPreference:F})}else u.currentContext=await u.jsepCreateMLContext();break}d=await u._OrtCreateSession(i,r,c),u.webgpuOnCreateSession?.(d),d===0&&Se("Can't create a session."),u.jsepOnCreateSession?.(),u.currentContext&&(u.jsepRegisterMLContext(d,u.currentContext),u.currentContext=void 0,u.shouldTransferToMLTensor=!0);let[w,v]=H$(d),C=!!t?.enableGraphCapture,x=[],S=[],k=[];for(let I=0;I<w;I++){let P=u._OrtGetInputName(d,I);P===0&&Se("Can't get an input name."),g.push(P),x.push(u.UTF8ToString(P))}for(let I=0;I<v;I++){let P=u._OrtGetOutputName(d,I);P===0&&Se("Can't get an output name."),b.push(P);let B=u.UTF8ToString(P);S.push(B);{if(C&&t?.preferredOutputLocation===void 0){k.push("gpu-buffer");continue}let V=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[B]??"cpu";if(V!=="cpu"&&V!=="cpu-pinned"&&V!=="gpu-buffer"&&V!=="ml-tensor")throw new Error(`Not supported preferred output location: ${V}.`);if(C&&V!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${V}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);k.push(V)}}let A=null;return k.some(I=>I==="gpu-buffer"||I==="ml-tensor")&&(f=u._OrtCreateBinding(d),f===0&&Se("Can't create IO binding."),A={handle:f,outputPreferredLocations:k,outputPreferredLocationsEncoded:k.map(I=>li(I))}),Nt.set(d,[d,g,b,A,C,!1]),[d,x,S]}catch(w){throw g.forEach(v=>u._OrtFree(v)),b.forEach(v=>u._OrtFree(v)),f!==0&&u._OrtReleaseBinding(f)!==0&&Se("Can't release IO binding."),d!==0&&u._OrtReleaseSession(d)!==0&&Se("Can't release session."),w}finally{u._free(i),c!==0&&u._OrtReleaseSessionOptions(c)!==0&&Se("Can't release session options."),h.forEach(w=>u._free(w)),u.unmountExternalData?.()}},Nr=e=>{let t=Ie(),i=Nt.get(e);if(!i)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,u,d,c,f]=i;c&&(f&&t._OrtClearBoundOutputs(c.handle)!==0&&Se("Can't clear bound outputs."),t._OrtReleaseBinding(c.handle)!==0&&Se("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),u.forEach(h=>t._OrtFree(h)),d.forEach(h=>t._OrtFree(h)),t._OrtReleaseSession(r)!==0&&Se("Can't release session."),Nt.delete(e)},Qm=async(e,t,i,r,u,d=!1)=>{if(!e){t.push(0);return}let c=Ie(),f=c.PTR_SIZE,h=e[0],g=e[1],b=e[3],w=b,v,C;if(h==="string"&&(b==="gpu-buffer"||b==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(d&&b!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${u} when enableGraphCapture is true.`);if(b==="gpu-buffer"){let k=e[2].gpuBuffer;C=Et(Kt(h),g);{let A=c.jsepRegisterBuffer;if(!A)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');v=A(r,u,k,C)}}else if(b==="ml-tensor"){let k=e[2].mlTensor;C=Et(Kt(h),g);let A=c.jsepRegisterMLTensor;if(!A)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');v=A(r,k,Kt(h),g)}else{let k=e[2];if(Array.isArray(k)){C=f*k.length,v=c._malloc(C),i.push(v);for(let A=0;A<k.length;A++){if(typeof k[A]!="string")throw new TypeError(`tensor data at index ${A} is not a string`);c.setValue(v+A*f,Ye(k[A],i),"*")}}else{let A=c.jsepIsGraphInput;if(h!=="string"&&A){let I=c._OrtGetInputName(r,u),P=c.UTF8ToString(I);if(A(r,P)){let B=Kt(h);C=Et(B,g),w="ml-tensor";let V=c.jsepCreateTemporaryTensor,N=c.jsepUploadTensor;if(!V||!N)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let H=await V(r,B,g);N(H,new Uint8Array(k.buffer,k.byteOffset,k.byteLength)),v=H}else C=k.byteLength,v=c._malloc(C),i.push(v),c.HEAPU8.set(new Uint8Array(k.buffer,k.byteOffset,C),v)}else C=k.byteLength,v=c._malloc(C),i.push(v),c.HEAPU8.set(new Uint8Array(k.buffer,k.byteOffset,C),v)}}let x=c.stackSave(),S=c.stackAlloc(4*g.length);try{g.forEach((A,I)=>c.setValue(S+I*f,A,f===4?"i32":"i64"));let k=c._OrtCreateTensor(Kt(h),v,C,S,g.length,li(w));k===0&&Se(`Can't create tensor for input/output. session=${r}, index=${u}.`),t.push(k)}finally{c.stackRestore(x)}},Vr=async(e,t,i,r,u,d)=>{let c=Ie(),f=c.PTR_SIZE,h=Nt.get(e);if(!h)throw new Error(`cannot run inference. invalid session id: ${e}`);let g=h[0],b=h[1],w=h[2],v=h[3],C=h[4],x=h[5],S=t.length,k=r.length,A=0,I=[],P=[],B=[],V=[],N=c.stackSave(),H=c.stackAlloc(S*f),F=c.stackAlloc(S*f),Q=c.stackAlloc(k*f),te=c.stackAlloc(k*f);try{[A,I]=Ed(d);for(let ee=0;ee<S;ee++)await Qm(i[ee],P,V,e,t[ee],C);for(let ee=0;ee<k;ee++)await Qm(u[ee],B,V,e,S+r[ee],C);for(let ee=0;ee<S;ee++)c.setValue(H+ee*f,P[ee],"*"),c.setValue(F+ee*f,b[t[ee]],"*");for(let ee=0;ee<k;ee++)c.setValue(Q+ee*f,B[ee],"*"),c.setValue(te+ee*f,w[r[ee]],"*");if(v&&!x){let{handle:ee,outputPreferredLocations:se,outputPreferredLocationsEncoded:Pe}=v;if(b.length!==S)throw new Error(`input count from feeds (${S}) is expected to be always equal to model's input count (${b.length}).`);for(let re=0;re<S;re++){let ae=t[re];await c._OrtBindInput(ee,b[ae],P[re])!==0&&Se(`Can't bind input[${re}] for session=${e}.`)}for(let re=0;re<k;re++){let ae=r[re];u[re]?.[3]?c._OrtBindOutput(ee,w[ae],B[re],0)!==0&&Se(`Can't bind pre-allocated output[${re}] for session=${e}.`):c._OrtBindOutput(ee,w[ae],0,Pe[ae])!==0&&Se(`Can't bind output[${re}] to ${se[re]} for session=${e}.`)}Nt.set(e,[g,b,w,v,C,!0])}c.jsepOnRunStart?.(g);let ie;v?ie=await c._OrtRunWithBinding(g,v.handle,k,Q,A):ie=await c._OrtRun(g,F,H,S,te,k,Q,A),ie!==0&&Se("failed to call OrtRun().");let ue=[];for(let ee=0;ee<k;ee++){let se=Number(c.getValue(Q+ee*f,"*"));if(se===B[ee]){ue.push(u[ee]);continue}let Pe=c.stackSave(),re=c.stackAlloc(4*f),ae=!1,fe,le=0;try{c._OrtGetTensorData(se,re,re+f,re+2*f,re+3*f)!==0&&Se(`Can't access output tensor data on index ${ee}.`);let Te=f===4?"i32":"i64",Ee=Number(c.getValue(re,Te));le=c.getValue(re+f,"*");let me=c.getValue(re+f*2,"*"),D=Number(c.getValue(re+f*3,Te)),J=[];for(let ze=0;ze<D;ze++)J.push(Number(c.getValue(me+ze*f,Te)));c._OrtFree(me)!==0&&Se("Can't free memory for tensor dims.");let ve=J.reduce((ze,De)=>ze*De,1);fe=At(Ee);let Ge=v?.outputPreferredLocations[r[ee]];if(fe==="string"){if(Ge==="gpu-buffer"||Ge==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let ze=[];for(let De=0;De<ve;De++){let Ue=c.getValue(le+De*f,"*"),er=c.getValue(le+(De+1)*f,"*"),Wt=De===ve-1?void 0:er-Ue;ze.push(c.UTF8ToString(Ue,Wt))}ue.push([fe,J,ze,"cpu"])}else if(Ge==="gpu-buffer"&&ve>0){let ze=c.jsepGetBuffer;if(!ze)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let De=ze(le),Ue=Et(Ee,ve);if(Ue===void 0||!Kr(fe))throw new Error(`Unsupported data type: ${fe}`);ae=!0,ue.push([fe,J,{gpuBuffer:De,download:c.jsepCreateDownloader(De,Ue,fe),dispose:()=>{c._OrtReleaseTensor(se)!==0&&Se("Can't release tensor.")}},"gpu-buffer"])}else if(Ge==="ml-tensor"&&ve>0){let ze=c.jsepEnsureTensor;if(!ze)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Et(Ee,ve)===void 0||!Zr(fe))throw new Error(`Unsupported data type: ${fe}`);let Ue=await ze(e,le,Ee,J,!1);ae=!0,ue.push([fe,J,{mlTensor:Ue,download:c.jsepCreateMLTensorDownloader(le,fe),dispose:()=>{c.jsepReleaseTensorId(le),c._OrtReleaseTensor(se)}},"ml-tensor"])}else{let ze=qr(fe),De=new ze(ve);new Uint8Array(De.buffer,De.byteOffset,De.byteLength).set(c.HEAPU8.subarray(le,le+De.byteLength)),ue.push([fe,J,De,"cpu"])}}finally{c.stackRestore(Pe),fe==="string"&&le&&c._free(le),ae||c._OrtReleaseTensor(se),c.jsepOnRunEnd?.(g)}}return v&&!C&&(c._OrtClearBoundOutputs(v.handle)!==0&&Se("Can't clear bound outputs."),Nt.set(e,[g,b,w,v,C,!1])),ue}finally{c.stackRestore(N),P.forEach(ie=>c._OrtReleaseTensor(ie)),B.forEach(ie=>c._OrtReleaseTensor(ie)),V.forEach(ie=>c._free(ie)),A!==0&&c._OrtReleaseRunOptions(A),I.forEach(ie=>c._free(ie))}},Wr=e=>{let t=Ie(),i=Nt.get(e);if(!i)throw new Error("invalid session id");let r=i[0],u=t._OrtEndProfiling(r);u===0&&Se("Can't get an profile file name."),t._OrtFree(u)},Lr=e=>{let t=[];for(let i of e){let r=i[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}});var Vt,et,gr,$n,xn,vn,Li,Gi,Xt,Jt,q$,Ym,Xm,Jm,eh,th,rh,nh,Hi=Z(()=>{"use strict";Je();ni();It();Dr();Vt=()=>!!ke.wasm.proxy&&typeof document<"u",gr=!1,$n=!1,xn=!1,Gi=new Map,Xt=(e,t)=>{let i=Gi.get(e);i?i.push(t):Gi.set(e,[t])},Jt=()=>{if(gr||!$n||xn||!et)throw new Error("worker not ready")},q$=e=>{switch(e.data.type){case"init-wasm":gr=!1,e.data.err?(xn=!0,Li[1](e.data.err)):($n=!0,Li[0]()),vn&&(URL.revokeObjectURL(vn),vn=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Gi.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},Ym=async()=>{if(!$n){if(gr)throw new Error("multiple calls to 'initWasm()' detected.");if(xn)throw new Error("previous call to 'initWasm()' failed.");if(gr=!0,Vt())return new Promise((e,t)=>{et?.terminate(),Td().then(([i,r])=>{try{et=r,et.onerror=d=>t(d),et.onmessage=q$,Li=[e,t];let u={type:"init-wasm",in:ke};!u.in.wasm.wasmPaths&&(i||ai)&&(u.in.wasm.wasmPaths={wasm:new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href}),et.postMessage(u),vn=i}catch(u){t(u)}},t)});try{await Mr(ke.wasm),await Rr(ke),$n=!0}catch(e){throw xn=!0,e}finally{gr=!1}}},Xm=async e=>{if(Vt())return Jt(),new Promise((t,i)=>{Xt("init-ep",[t,i]);let r={type:"init-ep",in:{epName:e,env:ke}};et.postMessage(r)});await Ur(ke,e)},Jm=async e=>Vt()?(Jt(),new Promise((t,i)=>{Xt("copy-from",[t,i]);let r={type:"copy-from",in:{buffer:e}};et.postMessage(r,[e.buffer])})):sr(e),eh=async(e,t)=>{if(Vt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Jt(),new Promise((i,r)=>{Xt("create",[i,r]);let u={type:"create",in:{model:e,options:{...t}}},d=[];e instanceof Uint8Array&&d.push(e.buffer),et.postMessage(u,d)})}else return jr(e,t)},th=async e=>{if(Vt())return Jt(),new Promise((t,i)=>{Xt("release",[t,i]);let r={type:"release",in:e};et.postMessage(r)});Nr(e)},rh=async(e,t,i,r,u,d)=>{if(Vt()){if(i.some(c=>c[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(u.some(c=>c))throw new Error("pre-allocated output tensor is not supported for proxy.");return Jt(),new Promise((c,f)=>{Xt("run",[c,f]);let h=i,g={type:"run",in:{sessionId:e,inputIndices:t,inputs:h,outputIndices:r,options:d}};et.postMessage(g,Lr(h))})}else return Vr(e,t,i,r,u,d)},nh=async e=>{if(Vt())return Jt(),new Promise((t,i)=>{Xt("end-profiling",[t,i]);let r={type:"end-profiling",in:e};et.postMessage(r)});Wr(e)}});var ih,K$,Cn,oh=Z(()=>{"use strict";Je();Hi();ce();Br();di();ih=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},K$=e=>{switch(e[3]){case"cpu":return new rt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Kr(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:i,download:r,dispose:u}=e[2];return rt.fromGpuBuffer(i,{dataType:t,dims:e[1],download:r,dispose:u})}case"ml-tensor":{let t=e[0];if(!Zr(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:i,download:r,dispose:u}=e[2];return rt.fromMLTensor(i,{dataType:t,dims:e[1],download:r,dispose:u})}default:throw new Error(`invalid data location: ${e[3]}`)}},Cn=class{async fetchModelAndCopyToWasmMemory(t){return Jm(await dr(t))}async loadModel(t,i){Ze();let r;typeof t=="string"?r=await this.fetchModelAndCopyToWasmMemory(t):r=t,[this.sessionId,this.inputNames,this.outputNames]=await eh(r,i),He()}async dispose(){return th(this.sessionId)}async run(t,i,r){Ze();let u=[],d=[];Object.entries(t).forEach(v=>{let C=v[0],x=v[1],S=this.inputNames.indexOf(C);if(S===-1)throw new Error(`invalid input '${C}'`);u.push(x),d.push(S)});let c=[],f=[];Object.entries(i).forEach(v=>{let C=v[0],x=v[1],S=this.outputNames.indexOf(C);if(S===-1)throw new Error(`invalid output '${C}'`);c.push(x),f.push(S)});let h=u.map((v,C)=>ih(v,()=>`input "${this.inputNames[d[C]]}"`)),g=c.map((v,C)=>v?ih(v,()=>`output "${this.outputNames[f[C]]}"`):null),b=await rh(this.sessionId,d,h,f,g,r),w={};for(let v=0;v<b.length;v++)w[this.outputNames[f[v]]]=c[v]??K$(b[v]);return He(),w}startProfiling(){}endProfiling(){nh(this.sessionId)}}});var sh={};qt(sh,{OnnxruntimeWebAssemblyBackend:()=>Sn,initializeFlags:()=>ah,wasmBackend:()=>Z$});var ah,Sn,Z$,uh=Z(()=>{"use strict";Je();Hi();oh();ah=()=>{if((typeof ke.wasm.initTimeout!="number"||ke.wasm.initTimeout<0)&&(ke.wasm.initTimeout=0),ke.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof ke.wasm.proxy!="boolean"&&(ke.wasm.proxy=!1),typeof ke.wasm.trace!="boolean"&&(ke.wasm.trace=!1),typeof ke.wasm.numThreads!="number"||!Number.isInteger(ke.wasm.numThreads)||ke.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ke.wasm.numThreads=1;else{let e=typeof navigator>"u"?Qn("node:os").cpus().length:navigator.hardwareConcurrency;ke.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},Sn=class{async init(t){ah(),await Ym(),await Xm(t)}async createInferenceSessionHandler(t,i){let r=new Cn;return await r.loadModel(t,i),Promise.resolve(r)}},Z$=new Sn});Je();Je();Je();var fd="1.22.0";var QE=ri;{let e=(uh(),or(sh)).wasmBackend;Bt("webgpu",e,5),Bt("webnn",e,5),Bt("cpu",e,10),Bt("wasm",e,10)}Object.defineProperty(ke.versions,"web",{value:fd,enumerable:!0});export{vw as InferenceSession,zr as TRACE,Ze as TRACE_FUNC_BEGIN,He as TRACE_FUNC_END,rt as Tensor,QE as default,ke as env,Bt as registerBackend};
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
