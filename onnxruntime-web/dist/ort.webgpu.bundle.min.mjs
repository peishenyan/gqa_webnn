/*!
 * ONNX Runtime Web v1.21.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var Kn=Object.defineProperty;var cw=Object.getOwnPropertyDescriptor;var pw=Object.getOwnPropertyNames;var fw=Object.prototype.hasOwnProperty;var Yn=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,i)=>(typeof require<"u"?require:t)[i]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var X=(e,t)=>()=>(e&&(t=e(e=0)),t);var nr=(e,t)=>{for(var i in t)Kn(e,i,{get:t[i],enumerable:!0})},mw=(e,t,i,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of pw(t))!fw.call(e,s)&&s!==i&&Kn(e,s,{get:()=>t[s],enumerable:!(r=cw(t,s))||r.enumerable});return e};var Ar=e=>mw(Kn({},"__esModule",{value:!0}),e);var kr,Dt,Bt,hw,Ml,Zn=X(()=>{"use strict";kr=new Map,Dt=[],Bt=(e,t,i)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=kr.get(e);if(r===void 0)kr.set(e,{backend:t,priority:i});else{if(r.priority>i)return;if(r.priority===i&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${i}`)}if(i>=0){let s=Dt.indexOf(e);s!==-1&&Dt.splice(s,1);for(let d=0;d<Dt.length;d++)if(kr.get(Dt[d]).priority<=i){Dt.splice(d,0,e);return}Dt.push(e)}return}throw new TypeError("not a valid backend")},hw=async e=>{let t=kr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let i=!!t.initPromise;try{return i||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return i||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Ml=async e=>{let t=e.executionProviders||[],i=t.map(h=>typeof h=="string"?h:h.name),r=i.length===0?Dt:i,s,d=[],c=new Set;for(let h of r){let y=await hw(h);typeof y=="string"?d.push({name:h,err:y}):(s||(s=y),s===y&&c.add(h))}if(!s)throw new Error(`no available backend found. ERR: ${d.map(h=>`[${h.name}] ${h.err}`).join(", ")}`);for(let{name:h,err:y}of d)i.includes(h)&&console.warn(`removing requested execution provider "${h}" from session options because it is not available: ${y}`);let f=t.filter(h=>c.has(typeof h=="string"?h:h.name));return[s,new Proxy(e,{get:(h,y)=>y==="executionProviders"?f:Reflect.get(h,y)})]}});var Rl=X(()=>{"use strict";Zn()});var jl,Ul=X(()=>{"use strict";jl="1.21.0"});var Nl,qe,Qn=X(()=>{"use strict";Ul();Nl="warning",qe={wasm:{},webgl:{},webgpu:{},versions:{common:jl},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Nl=e}},get logLevel(){return Nl}};Object.defineProperty(qe,"logLevel",{enumerable:!0})});var Ae,Vl=X(()=>{"use strict";Qn();Ae=qe});var Wl,Ll,Gl=X(()=>{"use strict";Wl=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);i.width=e.dims[3],i.height=e.dims[2];let r=i.getContext("2d");if(r!=null){let s,d;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],d=e.dims[3]):(s=e.dims[3],d=e.dims[2]);let c=t?.format!==void 0?t.format:"RGB",f=t?.norm,h,y;f===void 0||f.mean===void 0?h=[255,255,255,255]:typeof f.mean=="number"?h=[f.mean,f.mean,f.mean,f.mean]:(h=[f.mean[0],f.mean[1],f.mean[2],0],f.mean[3]!==void 0&&(h[3]=f.mean[3])),f===void 0||f.bias===void 0?y=[0,0,0,0]:typeof f.bias=="number"?y=[f.bias,f.bias,f.bias,f.bias]:(y=[f.bias[0],f.bias[1],f.bias[2],0],f.bias[3]!==void 0&&(y[3]=f.bias[3]));let _=d*s,w=0,v=_,C=_*2,x=-1;c==="RGBA"?(w=0,v=_,C=_*2,x=_*3):c==="RGB"?(w=0,v=_,C=_*2):c==="RBG"&&(w=0,C=_,v=_*2);for(let S=0;S<d;S++)for(let E=0;E<s;E++){let A=(e.data[w++]-y[0])*h[0],I=(e.data[v++]-y[1])*h[1],P=(e.data[C++]-y[2])*h[2],D=x===-1?255:(e.data[x++]-y[3])*h[3];r.fillStyle="rgba("+A+","+I+","+P+","+D+")",r.fillRect(E,S,1,1)}if("toDataURL"in i)return i.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Ll=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(i!=null){let s,d,c;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(s=e.dims[2],d=e.dims[1],c=e.dims[3]):(s=e.dims[3],d=e.dims[2],c=e.dims[1]);let f=t!==void 0&&t.format!==void 0?t.format:"RGB",h=t?.norm,y,_;h===void 0||h.mean===void 0?y=[255,255,255,255]:typeof h.mean=="number"?y=[h.mean,h.mean,h.mean,h.mean]:(y=[h.mean[0],h.mean[1],h.mean[2],255],h.mean[3]!==void 0&&(y[3]=h.mean[3])),h===void 0||h.bias===void 0?_=[0,0,0,0]:typeof h.bias=="number"?_=[h.bias,h.bias,h.bias,h.bias]:(_=[h.bias[0],h.bias[1],h.bias[2],0],h.bias[3]!==void 0&&(_[3]=h.bias[3]));let w=d*s;if(t!==void 0&&(t.format!==void 0&&c===4&&t.format!=="RGBA"||c===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let v=4,C=0,x=1,S=2,E=3,A=0,I=w,P=w*2,D=-1;f==="RGBA"?(A=0,I=w,P=w*2,D=w*3):f==="RGB"?(A=0,I=w,P=w*2):f==="RBG"&&(A=0,P=w,I=w*2),r=i.createImageData(s,d);for(let B=0;B<d*s;C+=v,x+=v,S+=v,E+=v,B++)r.data[C]=(e.data[A++]-_[0])*y[0],r.data[x]=(e.data[I++]-_[1])*y[1],r.data[S]=(e.data[P++]-_[2])*y[2],r.data[E]=D===-1?255:(e.data[D++]-_[3])*y[3]}else throw new Error("Can not access image data");return r}});var Xn,Hl,Fl,ql,Kl,Yl,Zl=X(()=>{"use strict";Er();Xn=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:i,width:r}=t,s=t.norm??{mean:255,bias:0},d,c;typeof s.mean=="number"?d=[s.mean,s.mean,s.mean,s.mean]:d=[s.mean[0],s.mean[1],s.mean[2],s.mean[3]??255],typeof s.bias=="number"?c=[s.bias,s.bias,s.bias,s.bias]:c=[s.bias[0],s.bias[1],s.bias[2],s.bias[3]??0];let f=t.format!==void 0?t.format:"RGBA",h=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",y=i*r,_=h==="RGBA"?new Float32Array(y*4):new Float32Array(y*3),w=4,v=0,C=1,x=2,S=3,E=0,A=y,I=y*2,P=-1;f==="RGB"&&(w=3,v=0,C=1,x=2,S=-1),h==="RGBA"?P=y*3:h==="RBG"?(E=0,I=y,A=y*2):h==="BGR"&&(I=0,A=y,E=y*2);for(let B=0;B<y;B++,v+=w,x+=w,C+=w,S+=w)_[E++]=(e[v]+c[0])/d[0],_[A++]=(e[C]+c[1])/d[1],_[I++]=(e[x]+c[2])/d[2],P!==-1&&S!==-1&&(_[P++]=(e[S]+c[3])/d[3]);return h==="RGBA"?new Le("float32",_,[1,4,i,r]):new Le("float32",_,[1,3,i,r])},Hl=async(e,t)=>{let i=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,s=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,d=typeof e=="string",c,f=t??{},h=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},y=_=>typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||_ instanceof OffscreenCanvas?_.getContext("2d"):null;if(i){let _=h();_.width=e.width,_.height=e.height;let w=y(_);if(w!=null){let v=e.height,C=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(v=t.resizedHeight,C=t.resizedWidth),t!==void 0){if(f=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");f.tensorFormat="RGBA",f.height=v,f.width=C}else f.tensorFormat="RGBA",f.height=v,f.width=C;w.drawImage(e,0,0),c=w.getImageData(0,0,C,v).data}else throw new Error("Can not access image data")}else if(r){let _,w;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(_=t.resizedHeight,w=t.resizedWidth):(_=e.height,w=e.width),t!==void 0&&(f=t),f.format="RGBA",f.height=_,f.width=w,t!==void 0){let v=h();v.width=w,v.height=_;let C=y(v);if(C!=null)C.putImageData(e,0,0),c=C.getImageData(0,0,w,_).data;else throw new Error("Can not access image data")}else c=e.data}else if(s){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let _=h();_.width=e.width,_.height=e.height;let w=y(_);if(w!=null){let v=e.height,C=e.width;return w.drawImage(e,0,0,C,v),c=w.getImageData(0,0,C,v).data,f.height=v,f.width=C,Xn(c,f)}else throw new Error("Can not access image data")}else{if(d)return new Promise((_,w)=>{let v=h(),C=y(v);if(!e||!C)return w();let x=new Image;x.crossOrigin="Anonymous",x.src=e,x.onload=()=>{v.width=x.width,v.height=x.height,C.drawImage(x,0,0,v.width,v.height);let S=C.getImageData(0,0,v.width,v.height);f.height=v.height,f.width=v.width,_(Xn(S.data,f))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(c!==void 0)return Xn(c,f);throw new Error("Input data provided is not supported - aborted tensor creation")},Fl=(e,t)=>{let{width:i,height:r,download:s,dispose:d}=t,c=[1,r,i,4];return new Le({location:"texture",type:"float32",texture:e,dims:c,download:s,dispose:d})},ql=(e,t)=>{let{dataType:i,dims:r,download:s,dispose:d}=t;return new Le({location:"gpu-buffer",type:i??"float32",gpuBuffer:e,dims:r,download:s,dispose:d})},Kl=(e,t)=>{let{dataType:i,dims:r,download:s,dispose:d}=t;return new Le({location:"ml-tensor",type:i??"float32",mlTensor:e,dims:r,download:s,dispose:d})},Yl=(e,t,i)=>new Le({location:"cpu-pinned",type:e,data:t,dims:i??[t.length]})});var Mt,ir,Ql,Xl,Jl=X(()=>{"use strict";Mt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),ir=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ql=!1,Xl=()=>{if(!Ql){Ql=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,i=typeof Float16Array<"u"&&Float16Array.from;e&&(Mt.set("int64",BigInt64Array),ir.set(BigInt64Array,"int64")),t&&(Mt.set("uint64",BigUint64Array),ir.set(BigUint64Array,"uint64")),i?(Mt.set("float16",Float16Array),ir.set(Float16Array,"float16")):Mt.set("float16",Uint16Array)}}});var ed,td,rd=X(()=>{"use strict";Er();ed=e=>{let t=1;for(let i=0;i<e.length;i++){let r=e[i];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${i}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${i}] must be a non-negative integer, got: ${r}`);t*=r}return t},td=(e,t)=>{switch(e.location){case"cpu":return new Le(e.type,e.data,t);case"cpu-pinned":return new Le({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Le({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Le({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Le({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}});var Le,Er=X(()=>{"use strict";Gl();Zl();Jl();rd();Le=class{constructor(t,i,r){Xl();let s,d;if(typeof t=="object"&&"location"in t)switch(this.dataLocation=t.location,s=t.type,d=t.dims,t.location){case"cpu-pinned":{let f=Mt.get(s);if(!f)throw new TypeError(`unsupported type "${s}" to create tensor from pinned buffer`);if(!(t.data instanceof f))throw new TypeError(`buffer should be of type ${f.name}`);this.cpuData=t.data;break}case"texture":{if(s!=="float32")throw new TypeError(`unsupported type "${s}" to create tensor from texture`);this.gpuTextureData=t.texture,this.downloader=t.download,this.disposer=t.dispose;break}case"gpu-buffer":{if(s!=="float32"&&s!=="float16"&&s!=="int32"&&s!=="int64"&&s!=="uint32"&&s!=="uint8"&&s!=="bool"&&s!=="uint4"&&s!=="int4")throw new TypeError(`unsupported type "${s}" to create tensor from gpu buffer`);this.gpuBufferData=t.gpuBuffer,this.downloader=t.download,this.disposer=t.dispose;break}case"ml-tensor":{if(s!=="float32"&&s!=="float16"&&s!=="int32"&&s!=="int64"&&s!=="uint32"&&s!=="uint64"&&s!=="int8"&&s!=="uint8"&&s!=="bool"&&s!=="uint4"&&s!=="int4")throw new TypeError(`unsupported type "${s}" to create tensor from MLTensor`);this.mlTensorData=t.mlTensor,this.downloader=t.download,this.disposer=t.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let f,h;if(typeof t=="string")if(s=t,h=r,t==="string"){if(!Array.isArray(i))throw new TypeError("A string tensor's data must be a string array.");f=i}else{let y=Mt.get(t);if(y===void 0)throw new TypeError(`Unsupported tensor type: ${t}.`);if(Array.isArray(i)){if(t==="float16"&&y===Uint16Array||t==="uint4"||t==="int4")throw new TypeError(`Creating a ${t} tensor from number array is not supported. Please use ${y.name} as data.`);t==="uint64"||t==="int64"?f=y.from(i,BigInt):f=y.from(i)}else if(i instanceof y)f=i;else if(i instanceof Uint8ClampedArray)if(t==="uint8")f=Uint8Array.from(i);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${s} tensor's data must be type of ${y}`)}else if(h=i,Array.isArray(t)){if(t.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let y=typeof t[0];if(y==="string")s="string",f=t;else if(y==="boolean")s="bool",f=Uint8Array.from(t);else throw new TypeError(`Invalid element type of data array: ${y}.`)}else if(t instanceof Uint8ClampedArray)s="uint8",f=Uint8Array.from(t);else{let y=ir.get(t.constructor);if(y===void 0)throw new TypeError(`Unsupported type for tensor data: ${t.constructor}.`);s=y,f=t}if(h===void 0)h=[f.length];else if(!Array.isArray(h))throw new TypeError("A tensor's dims must be a number array");d=h,this.cpuData=f,this.dataLocation="cpu"}let c=ed(d);if(this.cpuData&&c!==this.cpuData.length&&!((s==="uint4"||s==="int4")&&Math.ceil(c/2)===this.cpuData.length))throw new Error(`Tensor's size(${c}) does not match data length(${this.cpuData.length}).`);this.type=s,this.dims=d,this.size=c}static async fromImage(t,i){return Hl(t,i)}static fromTexture(t,i){return Fl(t,i)}static fromGpuBuffer(t,i){return ql(t,i)}static fromMLTensor(t,i){return Kl(t,i)}static fromPinnedBuffer(t,i,r){return Yl(t,i,r)}toDataURL(t){return Wl(this,t)}toImageData(t){return Ll(this,t)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(t){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let i=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=i,t&&this.disposer&&(this.disposer(),this.disposer=void 0),i}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(t){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return td(this,t)}}});var tt,Jn=X(()=>{"use strict";Er();tt=Le});var Pr,nd,Ke,Ge,ei=X(()=>{"use strict";Qn();Pr=(e,t)=>{(typeof qe.trace>"u"?!qe.wasm.trace:!qe.trace)||console.timeStamp(`${e}::ORT::${t}`)},nd=(e,t)=>{let i=new Error().stack?.split(/\r\n|\r|\n/g)||[],r=!1;for(let s=0;s<i.length;s++){if(r&&!i[s].includes("TRACE_FUNC")){let d=`FUNC_${e}::${i[s].trim().split(" ")[1]}`;t&&(d+=`::${t}`),Pr("CPU",d);return}i[s].includes("TRACE_FUNC")&&(r=!0)}},Ke=e=>{(typeof qe.trace>"u"?!qe.wasm.trace:!qe.trace)||nd("BEGIN",e)},Ge=e=>{(typeof qe.trace>"u"?!qe.wasm.trace:!qe.trace)||nd("END",e)}});var zr,id=X(()=>{"use strict";Zn();Jn();ei();zr=class e{constructor(t){this.handler=t}async run(t,i,r){Ke();let s={},d={};if(typeof t!="object"||t===null||t instanceof tt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let c=!0;if(typeof i=="object"){if(i===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(i instanceof tt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(i)){if(i.length===0)throw new TypeError("'fetches' cannot be an empty array.");c=!1;for(let y of i){if(typeof y!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(y)===-1)throw new RangeError(`'fetches' contains invalid output name: ${y}.`);s[y]=null}if(typeof r=="object"&&r!==null)d=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let y=!1,_=Object.getOwnPropertyNames(i);for(let w of this.outputNames)if(_.indexOf(w)!==-1){let v=i[w];(v===null||v instanceof tt)&&(y=!0,c=!1,s[w]=v)}if(y){if(typeof r=="object"&&r!==null)d=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else d=i}}else if(typeof i<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let y of this.inputNames)if(typeof t[y]>"u")throw new Error(`input '${y}' is missing in 'feeds'.`);if(c)for(let y of this.outputNames)s[y]=null;let f=await this.handler.run(t,s,d),h={};for(let y in f)if(Object.hasOwnProperty.call(f,y)){let _=f[y];_ instanceof tt?h[y]=_:h[y]=new tt(_.type,_.data,_.dims)}return Ge(),h}async release(){return this.handler.dispose()}static async create(t,i,r,s){Ke();let d,c={};if(typeof t=="string"){if(d=t,typeof i=="object"&&i!==null)c=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(d=t,typeof i=="object"&&i!==null)c=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let _=t,w=0,v=t.byteLength;if(typeof i=="object"&&i!==null)c=i;else if(typeof i=="number"){if(w=i,!Number.isSafeInteger(w))throw new RangeError("'byteOffset' must be an integer.");if(w<0||w>=_.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${_.byteLength}).`);if(v=t.byteLength-w,typeof r=="number"){if(v=r,!Number.isSafeInteger(v))throw new RangeError("'byteLength' must be an integer.");if(v<=0||w+v>_.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${_.byteLength-w}].`);if(typeof s=="object"&&s!==null)c=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof i<"u")throw new TypeError("'options' must be an object.");d=new Uint8Array(_,w,v)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[f,h]=await Ml(c),y=await f.createInferenceSessionHandler(d,h);return Ge(),new e(y)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}});var gw,od=X(()=>{"use strict";id();gw=zr});var ad=X(()=>{"use strict"});var sd=X(()=>{"use strict"});var ud=X(()=>{"use strict"});var ld=X(()=>{"use strict"});var ti={};nr(ti,{InferenceSession:()=>gw,TRACE:()=>Pr,TRACE_FUNC_BEGIN:()=>Ke,TRACE_FUNC_END:()=>Ge,Tensor:()=>tt,env:()=>Ae,registerBackend:()=>Bt});var Qe=X(()=>{"use strict";Rl();Vl();od();Jn();ad();sd();ei();ud();ld()});var Or=X(()=>{"use strict"});var fd={};nr(fd,{default:()=>yw});var cd,pd,yw,md=X(()=>{"use strict";ri();It();Dr();cd="ort-wasm-proxy-worker",pd=globalThis.self?.name===cd;pd&&(self.onmessage=e=>{let{type:t,in:i}=e.data;try{switch(t){case"init-wasm":Br(i.wasm).then(()=>{Mr(i).then(()=>{postMessage({type:t})},r=>{postMessage({type:t,err:r})})},r=>{postMessage({type:t,err:r})});break;case"init-ep":{let{epName:r,env:s}=i;Rr(s,r).then(()=>{postMessage({type:t})},d=>{postMessage({type:t,err:d})});break}case"copy-from":{let{buffer:r}=i,s=or(r);postMessage({type:t,out:s});break}case"create":{let{model:r,options:s}=i;jr(r,s).then(d=>{postMessage({type:t,out:d})},d=>{postMessage({type:t,err:d})});break}case"release":Ur(i),postMessage({type:t});break;case"run":{let{sessionId:r,inputIndices:s,inputs:d,outputIndices:c,options:f}=i;Nr(r,s,d,c,new Array(c.length).fill(null),f).then(h=>{h.some(y=>y[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:h},Wr([...d,...h]))},h=>{postMessage({type:t,err:h})});break}case"end-profiling":Vr(i),postMessage({type:t});break;default:}}catch(r){postMessage({type:t,err:r})}});yw=pd?null:e=>new Worker(e??Ye,{type:"module",name:cd})});var gd={};nr(gd,{default:()=>bw});var ni,hd,bw,_w,yd=X(()=>{"use strict";hd=(ni=import.meta.url,async function(e={}){var t,i,r=e,s=new Promise((n,o)=>{t=n,i=o}),d=typeof window=="object",c=typeof WorkerGlobalScope<"u",f=c&&self.name?.startsWith("em-pthread");r.mountExternalData=(n,o)=>{n.startsWith("./")&&(n=n.substring(2)),(r.bj||(r.bj=new Map)).set(n,o)},r.unmountExternalData=()=>{delete r.bj};var h=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let y=()=>{let n=(a,u,l)=>(...p)=>{let m=ut,g=u?.();p=a(...p);let b=u?.();return g!==b&&(a=b,l(g),u=l=null),ut!=m?new Promise(($,T)=>{Un={resolve:$,reject:T}}):p},o=a=>async(...u)=>{try{if(r.cj)throw Error("Session already started");let l=r.cj={Cj:u[0],errors:[]},p=await a(...u);if(r.cj!==l)throw Error("Session mismatch");r.dj?.flush();let m=l.errors;if(0<m.length){let g=await Promise.all(m);if(g=g.filter(b=>b),0<g.length)throw Error(g.join(`
`))}return p}finally{r.cj=null}};r._OrtCreateSession=n(r._OrtCreateSession,()=>r._OrtCreateSession,a=>r._OrtCreateSession=a),r._OrtRun=o(n(r._OrtRun,()=>r._OrtRun,a=>r._OrtRun=a)),r._OrtRunWithBinding=o(n(r._OrtRunWithBinding,()=>r._OrtRunWithBinding,a=>r._OrtRunWithBinding=a)),r._OrtBindInput=n(r._OrtBindInput,()=>r._OrtBindInput,a=>r._OrtBindInput=a),y=void 0};r.jsepInit=(n,o)=>{if(y?.(),n==="webgpu"){[r.dj,r.rj,r.vj,r.hj,r.uj,r.Ye,r.wj,r.zj,r.sj,r.tj,r.xj]=o;let a=r.dj;r.jsepRegisterBuffer=(u,l,p,m)=>a.registerBuffer(u,l,p,m),r.jsepGetBuffer=u=>a.getBuffer(u),r.jsepCreateDownloader=(u,l,p)=>a.createDownloader(u,l,p),r.jsepOnCreateSession=u=>{a.onCreateSession(u)},r.jsepOnReleaseSession=u=>{a.onReleaseSession(u)},r.jsepOnRunStart=u=>a.onRunStart(u),r.Aj=(u,l)=>{a.upload(u,l)}}else if(n==="webnn"){[r.dj,r.yj,r.ij,r.jsepEnsureTensor,r.jj,r.jsepDownloadTensor]=o,r.jsepReleaseTensorId=r.ij,r.jsepUploadTensor=r.jj;let a=r.dj;r.jsepOnRunStart=u=>a.onRunStart(u),r.jsepOnRunEnd=a.onRunEnd.bind(a),r.jsepRegisterMLContext=(u,l)=>{a.registerMLContext(u,l)},r.jsepOnReleaseSession=u=>{a.onReleaseSession(u)},r.jsepCreateMLTensorDownloader=(u,l)=>a.createMLTensorDownloader(u,l),r.jsepRegisterMLTensor=(u,l,p,m)=>a.registerMLTensor(u,l,p,m),r.jsepCreateMLContext=u=>a.createMLContext(u),r.jsepRegisterMLConstant=(u,l,p,m,g)=>a.registerMLConstant(u,l,p,m,g,r.bj),r.jsepRegisterGraphInput=a.registerGraphInput.bind(a),r.jsepIsGraphInput=a.isGraphInput.bind(a),r.jsepCreateTemporaryTensor=a.createTemporaryTensor.bind(a)}};var _,w,v=Object.assign({},r),C=(n,o)=>{throw o},x="";(d||c)&&(c?x=self.location.href:typeof document<"u"&&document.currentScript&&(x=document.currentScript.src),ni&&(x=ni),x=x.startsWith("blob:")?"":x.slice(0,x.replace(/[?#].*/,"").lastIndexOf("/")+1),c&&(w=n=>{var o=new XMLHttpRequest;return o.open("GET",n,!1),o.responseType="arraybuffer",o.send(null),new Uint8Array(o.response)}),_=async n=>{if(ge(n))return new Promise((a,u)=>{var l=new XMLHttpRequest;l.open("GET",n,!0),l.responseType="arraybuffer",l.onload=()=>{l.status==200||l.status==0&&l.response?a(l.response):u(l.status)},l.onerror=u,l.send(null)});var o=await fetch(n,{credentials:"same-origin"});if(o.ok)return o.arrayBuffer();throw Error(o.status+" : "+o.url)});var S=console.log.bind(console),E=console.error.bind(console),A=S,I=E;Object.assign(r,v),v=null;var P,D,B,M,G,F,Z,te,ne,fe,Q,ue,ke,ae=r.wasmBinary,de=!1,ge=n=>n.startsWith("file://");function ie(){return P.buffer!=M.buffer&&Te(),M}function be(){return P.buffer!=M.buffer&&Te(),G}function Me(){return P.buffer!=M.buffer&&Te(),F}function Pe(){return P.buffer!=M.buffer&&Te(),Z}function H(){return P.buffer!=M.buffer&&Te(),te}function q(){return P.buffer!=M.buffer&&Te(),ne}function se(){return P.buffer!=M.buffer&&Te(),fe}function ve(){return P.buffer!=M.buffer&&Te(),ke}if(f){let n=function(o){try{var a=o.data,u=a.Zi;if(u==="load"){let l=[];self.onmessage=p=>l.push(p),self.startWorker=()=>{postMessage({Zi:"loaded"});for(let p of l)n(p);self.onmessage=n};for(let p of a.oj)r[p]&&!r[p].proxy||(r[p]=(...m)=>{postMessage({Zi:"callHandler",nj:p,args:m})},p=="print"&&(A=r[p]),p=="printErr"&&(I=r[p]));P=a.Ij,Te(),Je(a.Jj)}else if(u==="run"){sh(a.Yi),Ln(a.Yi,0,0,1,0,0),Qi(),Rn(a.Yi),Ee||(Fo(),Ee=!0);try{uh(a.Ej,a.fj)}catch(l){if(l!="unwind")throw l}}else a.target!=="setimmediate"&&(u==="checkMailbox"?Ee&&br():u&&(I(`worker: received unknown command ${u}`),I(a)))}catch(l){throw qo(),l}};var H$=n,Je,Ee=!1;I=function(...o){o=o.join(" "),console.error(o)},self.alert=function(...o){postMessage({Zi:"alert",text:o.join(" "),Gj:Tr()})},self.onunhandledrejection=o=>{throw o.reason||o},self.onmessage=n}function Te(){var n=P.buffer;r.HEAP8=M=new Int8Array(n),r.HEAP16=F=new Int16Array(n),r.HEAPU8=G=new Uint8Array(n),r.HEAPU16=Z=new Uint16Array(n),r.HEAP32=te=new Int32Array(n),r.HEAPU32=ne=new Uint32Array(n),r.HEAPF32=fe=new Float32Array(n),r.HEAPF64=ke=new Float64Array(n),r.HEAP64=Q=new BigInt64Array(n),r.HEAPU64=ue=new BigUint64Array(n)}function at(){f?startWorker(r):O.oe()}f||(P=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Te());var Xt,zt=0,Jt=null;function Gi(){if(--zt==0&&Jt){var n=Jt;Jt=null,n()}}function yt(n){throw I(n="Aborted("+n+")"),de=!0,n=new WebAssembly.RuntimeError(n+". Build with -sASSERTIONS for more info."),i(n),n}function Hi(){return{a:{sc:ah,Rd:oh,w:lh,X:dh,b:ph,o:fh,z:mh,r:hh,Nb:gh,t:yh,db:bh,kd:to,g:ch,Lb:io,Ad:oo,gd:so,id:uo,Bd:lo,yd:co,rd:po,xd:fo,nc:mo,hd:ho,ed:go,zd:yo,fd:bo,Gd:_h,ic:vh,_c:$h,Yc:Ch,hc:Th,Fa:Ih,fa:Ah,Zc:kh,Kb:Mh,$c:Rh,ud:jh,bd:Uh,ld:Nh,Wc:Vh,jc:Wh,td:Rn,Dd:Lh,be:Gh,Zd:Hh,ne:Kh,jb:Yh,pa:Qh,dd:Dn,le:Xh,ia:tg,qb:rg,ke:ng,V:ig,Uc:og,$d:ag,ba:sg,rb:ug,ge:lg,de:dg,Ea:cg,od:pg,pd:fg,qd:mg,md:zo,nd:Oo,Xc:Do,Id:gg,Fd:_g,C:wg,Ub:vg,kc:$g,Ed:yg,vb:xg,Cd:Cg,cd:Sg,_:hg,sb:Tg,oc:Ig,ad:Ag,Kd:kg,Jd:Eg,vd:jo,wd:Uo,jd:kn,Mb:No,mc:Vo,sd:Wo,lc:Lo,Ib:wy,xb:Hb,ya:Y_,O:Q_,M:Z_,va:xb,xa:by,Ld:lw,_b:Gb,Od:q_,W:rb,y:ty,c:Rg,Vc:Xg,Ta:Qg,f:Bg,Aa:F_,i:Dg,da:z_,j:Lg,Md:sw,k:Wg,v:Vg,s:ny,q:yy,Ia:Ay,L:py,ma:Eb,la:sy,fc:Jy,cb:nb,Wb:l_,gb:Yb,zc:O_,Rc:Ty,wc:R_,$a:A_,xc:B_,Ob:aw,na:Ib,Jb:cy,Sb:P_,ub:nw,ha:Ab,Ac:I_,I:Gy,yc:D_,Ra:ob,G:Ug,fb:__,Qd:M_,ua:jb,Ha:ab,B:Zg,Rb:V_,vc:j_,Dc:C_,Ec:x_,Tb:$_,Pd:U_,Sa:tb,Z:Bb,eb:ew,Pb:rw,_a:iw,Ua:X_,Cc:S_,pc:ow,bc:Cb,ja:_y,K:Jg,E:Ry,Ba:w_,P:_b,Ic:Qb,uc:N_,Bc:T_,R:Fy,d:Ng,Za:Ky,m:jg,Pc:zy,Ka:W_,sa:Lb,Eb:Oy,h:Mg,Qc:Py,Y:E_,ra:Zy,wb:Xb,mb:By,e:Gg,Ud:h_,Xd:p_,l:Hg,Mc:Yy,n:Kg,Vd:m_,Oc:My,Yd:c_,Lc:Qy,ae:e_,p:Fg,Pa:cb,Cb:db,Oa:pb,Zb:qb,D:dy,F:ey,N:gy,Xa:g_,Wd:f_,Db:qy,aa:uy,ca:Yg,La:o_,kb:eb,Ca:Ub,ie:Ny,tb:uw,Da:ly,Gc:a_,ab:i_,bb:n_,Ya:Jb,he:Xy,ta:Vb,_d:u_,ee:Db,fe:ub,ac:Sb,Ma:Nb,U:qg,ib:Wb,Kc:kb,yb:Tb,qa:Mb,Ga:sb,Fc:v_,Hb:Cy,Xb:s_,ka:ky,oa:Wy,Sc:$y,Td:y_,$:zb,pb:ay,Vb:d_,Qb:G_,tc:L_,Wa:k_,rc:J_,nb:Dy,A:my,T:iy,Gb:Iy,Ja:xy,Sd:b_,Q:hy,hb:Kb,za:Ob,qc:tw,Jc:Fb,me:oy,u:ry,S:Sy,ga:Zb,ce:Rb,dc:yb,Hc:r_,ob:vy,cc:bb,Fb:Ey,$b:Pb,je:Uy,Yb:t_,ec:ib,Va:H_,Tc:fy,gc:Ly,ea:wb,Nc:Vy,H:Hy,lb:jy,Nd:K_,wa:$b,J:vb,Ab:hb,Na:mb,Qa:lb,zb:gb,Bb:fb,x:zg,a:P,Hd:An}}}var Sn={1412436:(n,o,a,u,l)=>{if(r===void 0||!r.bj)return 1;if((n=Re(Number(n>>>0))).startsWith("./")&&(n=n.substring(2)),!(n=r.bj.get(n)))return 2;if(o=Number(o>>>0),a=Number(a>>>0),u=Number(u>>>0),o+a>n.byteLength)return 3;try{let p=n.subarray(o,o+a);switch(l){case 0:be().set(p,u>>>0);break;case 1:r.Aj(u,p);break;default:return 4}return 0}catch{return 4}},1413151:(n,o,a)=>{r.jj(n,be().subarray(o>>>0,o+a>>>0))},1413214:()=>r.yj(),1413255:n=>{r.ij(n)},1413291:()=>{r.sj()},1413322:()=>{r.tj()},1413351:()=>{r.xj()},1413376:n=>r.rj(n),1413409:n=>r.vj(n),1413441:(n,o,a)=>{r.hj(Number(n),Number(o),Number(a),!0)},1413504:(n,o,a)=>{r.hj(Number(n),Number(o),Number(a))},1413561:()=>typeof wasmOffsetConverter<"u",1413618:n=>{r.Ye("Abs",n,void 0)},1413669:n=>{r.Ye("Neg",n,void 0)},1413720:n=>{r.Ye("Floor",n,void 0)},1413773:n=>{r.Ye("Ceil",n,void 0)},1413825:n=>{r.Ye("Reciprocal",n,void 0)},1413883:n=>{r.Ye("Sqrt",n,void 0)},1413935:n=>{r.Ye("Exp",n,void 0)},1413986:n=>{r.Ye("Erf",n,void 0)},1414037:n=>{r.Ye("Sigmoid",n,void 0)},1414092:(n,o,a)=>{r.Ye("HardSigmoid",n,{alpha:o,beta:a})},1414171:n=>{r.Ye("Log",n,void 0)},1414222:n=>{r.Ye("Sin",n,void 0)},1414273:n=>{r.Ye("Cos",n,void 0)},1414324:n=>{r.Ye("Tan",n,void 0)},1414375:n=>{r.Ye("Asin",n,void 0)},1414427:n=>{r.Ye("Acos",n,void 0)},1414479:n=>{r.Ye("Atan",n,void 0)},1414531:n=>{r.Ye("Sinh",n,void 0)},1414583:n=>{r.Ye("Cosh",n,void 0)},1414635:n=>{r.Ye("Asinh",n,void 0)},1414688:n=>{r.Ye("Acosh",n,void 0)},1414741:n=>{r.Ye("Atanh",n,void 0)},1414794:n=>{r.Ye("Tanh",n,void 0)},1414846:n=>{r.Ye("Not",n,void 0)},1414897:(n,o,a)=>{r.Ye("Clip",n,{min:o,max:a})},1414966:n=>{r.Ye("Clip",n,void 0)},1415018:(n,o)=>{r.Ye("Elu",n,{alpha:o})},1415076:n=>{r.Ye("Gelu",n,void 0)},1415128:n=>{r.Ye("Relu",n,void 0)},1415180:(n,o)=>{r.Ye("LeakyRelu",n,{alpha:o})},1415244:(n,o)=>{r.Ye("ThresholdedRelu",n,{alpha:o})},1415314:(n,o)=>{r.Ye("Cast",n,{to:o})},1415372:n=>{r.Ye("Add",n,void 0)},1415423:n=>{r.Ye("Sub",n,void 0)},1415474:n=>{r.Ye("Mul",n,void 0)},1415525:n=>{r.Ye("Div",n,void 0)},1415576:n=>{r.Ye("Pow",n,void 0)},1415627:n=>{r.Ye("Equal",n,void 0)},1415680:n=>{r.Ye("Greater",n,void 0)},1415735:n=>{r.Ye("GreaterOrEqual",n,void 0)},1415797:n=>{r.Ye("Less",n,void 0)},1415849:n=>{r.Ye("LessOrEqual",n,void 0)},1415908:(n,o,a,u,l)=>{r.Ye("ReduceMean",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:u?Array.from(H().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1416083:(n,o,a,u,l)=>{r.Ye("ReduceMax",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:u?Array.from(H().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1416257:(n,o,a,u,l)=>{r.Ye("ReduceMin",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:u?Array.from(H().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1416431:(n,o,a,u,l)=>{r.Ye("ReduceProd",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:u?Array.from(H().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1416606:(n,o,a,u,l)=>{r.Ye("ReduceSum",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:u?Array.from(H().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1416780:(n,o,a,u,l)=>{r.Ye("ReduceL1",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:u?Array.from(H().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1416953:(n,o,a,u,l)=>{r.Ye("ReduceL2",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:u?Array.from(H().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1417126:(n,o,a,u,l)=>{r.Ye("ReduceLogSum",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:u?Array.from(H().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1417303:(n,o,a,u,l)=>{r.Ye("ReduceSumSquare",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:u?Array.from(H().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1417483:(n,o,a,u,l)=>{r.Ye("ReduceLogSumExp",n,{keepDims:!!o,noopWithEmptyAxes:!!a,axes:u?Array.from(H().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1417663:n=>{r.Ye("Where",n,void 0)},1417716:(n,o,a)=>{r.Ye("Transpose",n,{perm:o?Array.from(H().subarray(Number(o)>>>0,Number(a)>>>0)):[]})},1417840:(n,o,a,u)=>{r.Ye("DepthToSpace",n,{blocksize:o,mode:Re(a),format:u?"NHWC":"NCHW"})},1417973:(n,o,a,u)=>{r.Ye("DepthToSpace",n,{blocksize:o,mode:Re(a),format:u?"NHWC":"NCHW"})},1418106:(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L)=>{r.Ye("ConvTranspose",n,{format:b?"NHWC":"NCHW",autoPad:o,dilations:[a],group:u,kernelShape:[l],pads:[p,m],strides:[g],wIsConst:()=>!!ie()[$>>>0],outputPadding:T?Array.from(H().subarray(Number(T)>>>0,Number(k)>>>0)):[],outputShape:z?Array.from(H().subarray(Number(z)>>>0,Number(U)>>>0)):[],activation:Re(L)})},1418539:(n,o,a,u,l,p,m,g,b,$,T,k,z,U)=>{r.Ye("ConvTranspose",n,{format:g?"NHWC":"NCHW",autoPad:o,dilations:Array.from(H().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),group:u,kernelShape:Array.from(H().subarray(Number(l)>>>0,2+(Number(l)>>>0)>>>0)),pads:Array.from(H().subarray(Number(p)>>>0,4+(Number(p)>>>0)>>>0)),strides:Array.from(H().subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),wIsConst:()=>!!ie()[b>>>0],outputPadding:$?Array.from(H().subarray(Number($)>>>0,Number(T)>>>0)):[],outputShape:k?Array.from(H().subarray(Number(k)>>>0,Number(z)>>>0)):[],activation:Re(U)})},1419200:(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L)=>{r.Ye("ConvTranspose",n,{format:b?"NHWC":"NCHW",autoPad:o,dilations:[a],group:u,kernelShape:[l],pads:[p,m],strides:[g],wIsConst:()=>!!ie()[$>>>0],outputPadding:T?Array.from(H().subarray(Number(T)>>>0,Number(k)>>>0)):[],outputShape:z?Array.from(H().subarray(Number(z)>>>0,Number(U)>>>0)):[],activation:Re(L)})},1419633:(n,o,a,u,l,p,m,g,b,$,T,k,z,U)=>{r.Ye("ConvTranspose",n,{format:g?"NHWC":"NCHW",autoPad:o,dilations:Array.from(H().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),group:u,kernelShape:Array.from(H().subarray(Number(l)>>>0,2+(Number(l)>>>0)>>>0)),pads:Array.from(H().subarray(Number(p)>>>0,4+(Number(p)>>>0)>>>0)),strides:Array.from(H().subarray(Number(m)>>>0,2+(Number(m)>>>0)>>>0)),wIsConst:()=>!!ie()[b>>>0],outputPadding:$?Array.from(H().subarray(Number($)>>>0,Number(T)>>>0)):[],outputShape:k?Array.from(H().subarray(Number(k)>>>0,Number(z)>>>0)):[],activation:Re(U)})},1420294:(n,o)=>{r.Ye("GlobalAveragePool",n,{format:o?"NHWC":"NCHW"})},1420385:(n,o,a,u,l,p,m,g,b,$,T,k,z,U)=>{r.Ye("AveragePool",n,{format:U?"NHWC":"NCHW",auto_pad:o,ceil_mode:a,count_include_pad:u,storage_order:l,dilations:p?Array.from(H().subarray(Number(p)>>>0,Number(m)>>>0)):[],kernel_shape:g?Array.from(H().subarray(Number(g)>>>0,Number(b)>>>0)):[],pads:$?Array.from(H().subarray(Number($)>>>0,Number(T)>>>0)):[],strides:k?Array.from(H().subarray(Number(k)>>>0,Number(z)>>>0)):[]})},1420864:(n,o)=>{r.Ye("GlobalAveragePool",n,{format:o?"NHWC":"NCHW"})},1420955:(n,o,a,u,l,p,m,g,b,$,T,k,z,U)=>{r.Ye("AveragePool",n,{format:U?"NHWC":"NCHW",auto_pad:o,ceil_mode:a,count_include_pad:u,storage_order:l,dilations:p?Array.from(H().subarray(Number(p)>>>0,Number(m)>>>0)):[],kernel_shape:g?Array.from(H().subarray(Number(g)>>>0,Number(b)>>>0)):[],pads:$?Array.from(H().subarray(Number($)>>>0,Number(T)>>>0)):[],strides:k?Array.from(H().subarray(Number(k)>>>0,Number(z)>>>0)):[]})},1421434:(n,o)=>{r.Ye("GlobalMaxPool",n,{format:o?"NHWC":"NCHW"})},1421521:(n,o,a,u,l,p,m,g,b,$,T,k,z,U)=>{r.Ye("MaxPool",n,{format:U?"NHWC":"NCHW",auto_pad:o,ceil_mode:a,count_include_pad:u,storage_order:l,dilations:p?Array.from(H().subarray(Number(p)>>>0,Number(m)>>>0)):[],kernel_shape:g?Array.from(H().subarray(Number(g)>>>0,Number(b)>>>0)):[],pads:$?Array.from(H().subarray(Number($)>>>0,Number(T)>>>0)):[],strides:k?Array.from(H().subarray(Number(k)>>>0,Number(z)>>>0)):[]})},1421996:(n,o)=>{r.Ye("GlobalMaxPool",n,{format:o?"NHWC":"NCHW"})},1422083:(n,o,a,u,l,p,m,g,b,$,T,k,z,U)=>{r.Ye("MaxPool",n,{format:U?"NHWC":"NCHW",auto_pad:o,ceil_mode:a,count_include_pad:u,storage_order:l,dilations:p?Array.from(H().subarray(Number(p)>>>0,Number(m)>>>0)):[],kernel_shape:g?Array.from(H().subarray(Number(g)>>>0,Number(b)>>>0)):[],pads:$?Array.from(H().subarray(Number($)>>>0,Number(T)>>>0)):[],strides:k?Array.from(H().subarray(Number(k)>>>0,Number(z)>>>0)):[]})},1422558:(n,o,a,u,l)=>{r.Ye("Gemm",n,{alpha:o,beta:a,transA:u,transB:l})},1422662:n=>{r.Ye("MatMul",n,void 0)},1422716:(n,o,a,u)=>{r.Ye("ArgMax",n,{keepDims:!!o,selectLastIndex:!!a,axis:u})},1422824:(n,o,a,u)=>{r.Ye("ArgMin",n,{keepDims:!!o,selectLastIndex:!!a,axis:u})},1422932:(n,o)=>{r.Ye("Softmax",n,{axis:o})},1422995:(n,o)=>{r.Ye("Concat",n,{axis:o})},1423055:(n,o,a,u,l)=>{r.Ye("Split",n,{axis:o,numOutputs:a,splitSizes:u?Array.from(H().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1423211:n=>{r.Ye("Expand",n,void 0)},1423265:(n,o)=>{r.Ye("Gather",n,{axis:Number(o)})},1423336:(n,o)=>{r.Ye("GatherElements",n,{axis:Number(o)})},1423415:(n,o)=>{r.Ye("GatherND",n,{batch_dims:Number(o)})},1423494:(n,o,a,u,l,p,m,g,b,$,T)=>{r.Ye("Resize",n,{antialias:o,axes:a?Array.from(H().subarray(Number(a)>>>0,Number(u)>>>0)):[],coordinateTransformMode:Re(l),cubicCoeffA:p,excludeOutside:m,extrapolationValue:g,keepAspectRatioPolicy:Re(b),mode:Re($),nearestMode:Re(T)})},1423856:(n,o,a,u,l,p,m)=>{r.Ye("Slice",n,{starts:o?Array.from(H().subarray(Number(o)>>>0,Number(a)>>>0)):[],ends:u?Array.from(H().subarray(Number(u)>>>0,Number(l)>>>0)):[],axes:p?Array.from(H().subarray(Number(p)>>>0,Number(m)>>>0)):[]})},1424120:n=>{r.Ye("Tile",n,void 0)},1424172:(n,o,a)=>{r.Ye("InstanceNormalization",n,{epsilon:o,format:a?"NHWC":"NCHW"})},1424286:(n,o,a)=>{r.Ye("InstanceNormalization",n,{epsilon:o,format:a?"NHWC":"NCHW"})},1424400:n=>{r.Ye("Range",n,void 0)},1424453:(n,o)=>{r.Ye("Einsum",n,{equation:Re(o)})},1424534:(n,o,a,u,l)=>{r.Ye("Pad",n,{mode:o,value:a,pads:u?Array.from(H().subarray(Number(u)>>>0,Number(l)>>>0)):[]})},1424677:(n,o,a,u,l,p)=>{r.Ye("BatchNormalization",n,{epsilon:o,momentum:a,spatial:!!l,trainingMode:!!u,format:p?"NHWC":"NCHW"})},1424846:(n,o,a,u,l,p)=>{r.Ye("BatchNormalization",n,{epsilon:o,momentum:a,spatial:!!l,trainingMode:!!u,format:p?"NHWC":"NCHW"})},1425015:(n,o,a)=>{r.Ye("CumSum",n,{exclusive:Number(o),reverse:Number(a)})},1425112:(n,o,a)=>{r.Ye("DequantizeLinear",n,{axis:o,blockSize:a})},1425202:(n,o,a,u,l)=>{r.Ye("GridSample",n,{align_corners:o,mode:Re(a),padding_mode:Re(u),format:l?"NHWC":"NCHW"})},1425372:(n,o,a,u,l)=>{r.Ye("GridSample",n,{align_corners:o,mode:Re(a),padding_mode:Re(u),format:l?"NHWC":"NCHW"})},1425542:(n,o,a,u,l,p,m,g,b)=>{r.Ye("Attention",n,{numHeads:o,isUnidirectional:a,maskFilterValue:u,scale:l,doRotary:p,qkvHiddenSizes:m?Array.from(H().subarray(Number(g)>>>0,Number(g)+m>>>0)):[],pastPresentShareBuffer:!!b})},1425814:n=>{r.Ye("BiasAdd",n,void 0)},1425869:n=>{r.Ye("BiasSplitGelu",n,void 0)},1425930:n=>{r.Ye("FastGelu",n,void 0)},1425986:(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K)=>{r.Ye("Conv",n,{format:k?"NHWC":"NCHW",auto_pad:o,dilations:a?Array.from(H().subarray(Number(a)>>>0,Number(u)>>>0)):[],group:l,kernel_shape:p?Array.from(H().subarray(Number(p)>>>0,Number(m)>>>0)):[],pads:g?Array.from(H().subarray(Number(g)>>>0,Number(b)>>>0)):[],strides:$?Array.from(H().subarray(Number($)>>>0,Number(T)>>>0)):[],w_is_const:()=>!!ie()[Number(z)>>>0],activation:Re(U),activation_params:L?Array.from(se().subarray(Number(L)>>>0,Number(K)>>>0)):[]})},1426570:n=>{r.Ye("Gelu",n,void 0)},1426622:(n,o,a,u,l,p,m,g,b)=>{r.Ye("GroupQueryAttention",n,{numHeads:o,kvNumHeads:a,scale:u,softcap:l,doRotary:p,rotaryInterleaved:m,smoothSoftmax:g,localWindowSize:b})},1426839:(n,o,a,u)=>{r.Ye("LayerNormalization",n,{axis:o,epsilon:a,simplified:!!u})},1426950:(n,o,a,u)=>{r.Ye("LayerNormalization",n,{axis:o,epsilon:a,simplified:!!u})},1427061:(n,o,a,u,l,p)=>{r.Ye("MatMulNBits",n,{k:o,n:a,accuracyLevel:u,bits:l,blockSize:p})},1427188:(n,o,a,u,l,p)=>{r.Ye("MultiHeadAttention",n,{numHeads:o,isUnidirectional:a,maskFilterValue:u,scale:l,doRotary:p})},1427347:(n,o)=>{r.Ye("QuickGelu",n,{alpha:o})},1427411:(n,o,a,u,l)=>{r.Ye("RotaryEmbedding",n,{interleaved:!!o,numHeads:a,rotaryEmbeddingDim:u,scale:l})},1427550:(n,o,a)=>{r.Ye("SkipLayerNormalization",n,{epsilon:o,simplified:!!a})},1427652:(n,o,a)=>{r.Ye("SkipLayerNormalization",n,{epsilon:o,simplified:!!a})},1427754:(n,o,a,u)=>{r.Ye("GatherBlockQuantized",n,{gatherAxis:o,quantizeAxis:a,blockSize:u})},1427875:n=>{r.wj(n)},1427909:(n,o)=>r.zj(Number(n),Number(o),r.cj.Cj,r.cj.errors)};function oh(n,o,a){return To(async()=>{await r.uj(Number(n),Number(o),Number(a))})}function ah(){return typeof wasmOffsetConverter<"u"}class Tn{name="ExitStatus";constructor(o){this.message=`Program terminated with exit(${o})`,this.status=o}}var Fi=n=>{n.terminate(),n.onmessage=()=>{}},In=[],qi=n=>{xt.length==0&&(Ji(),Xi(xt[0]));var o=xt.pop();if(!o)return 6;er.push(o),Ot[n.Yi]=o,o.Yi=n.Yi;var a={Zi:"run",Ej:n.Dj,fj:n.fj,Yi:n.Yi};return o.postMessage(a,n.lj),0},$t=0,ze=(n,o,...a)=>{for(var u=2*a.length,l=j(),p=Hn(8*u),m=p>>>3,g=0;g<a.length;g++){var b=a[g];typeof b=="bigint"?(Q[m+2*g]=1n,Q[m+2*g+1]=b):(Q[m+2*g]=0n,ve()[m+2*g+1>>>0]=b)}return n=Ko(n,0,u,p,o),R(l),n};function An(n){if(f)return ze(0,1,n);if(B=n,!(0<$t)){for(var o of er)Fi(o);for(o of xt)Fi(o);xt=[],er=[],Ot={},de=!0}C(0,new Tn(n))}function Ki(n){if(f)return ze(1,0,n);kn(n)}var kn=n=>{if(B=n,f)throw Ki(n),"unwind";An(n)},xt=[],er=[],Yi=[],Ot={},Zi=n=>{var o=n.Yi;delete Ot[o],xt.push(n),er.splice(er.indexOf(n),1),n.Yi=0,Yo(o)};function Qi(){Yi.forEach(n=>n())}var Xi=n=>new Promise(o=>{n.onmessage=l=>{var p=(l=l.data).Zi;if(l.ej&&l.ej!=Tr()){var m=Ot[l.ej];m?m.postMessage(l,l.lj):I(`Internal error! Worker sent a message "${p}" to target pthread ${l.ej}, but that thread no longer exists!`)}else p==="checkMailbox"?br():p==="spawnThread"?qi(l):p==="cleanupThread"?Zi(Ot[l.Fj]):p==="loaded"?(n.loaded=!0,o(n)):p==="alert"?alert(`Thread ${l.Gj}: ${l.text}`):l.target==="setimmediate"?n.postMessage(l):p==="callHandler"?r[l.nj](...l.args):p&&I(`worker sent an unknown command ${p}`)},n.onerror=l=>{throw I(`worker sent an error! ${l.filename}:${l.lineno}: ${l.message}`),l};var a,u=[];for(a of[])r.propertyIsEnumerable(a)&&u.push(a);n.postMessage({Zi:"load",oj:u,Ij:P,Jj:D})});function Ji(){var n=new Worker(import.meta.url.startsWith("file:")?new URL("ort.webgpu.bundle.min.mjs",import.meta.url):new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});xt.push(n)}var sh=n=>{Te();var o=q()[n+52>>>2>>>0];n=q()[n+56>>>2>>>0],Xo(o,o-n),R(o)},uh=(n,o)=>{$t=0,n=Fn(n,o),0<$t?B=n:Gn(n)},hr=[],gr=0;function lh(n){var o=new En(n>>>=0);if(ie()[o.Xi+12>>>0]==0){var a=1;ie()[o.Xi+12>>>0]=a,gr--}return a=0,ie()[o.Xi+13>>>0]=a,hr.push(o),ea(n),ra(n)}var Lt=0,dh=()=>{N(0,0);var n=hr.pop();Jo(n.gj),Lt=0};class En{constructor(o){this.gj=o,this.Xi=o-24}}function ch(n){throw Lt||=n>>>0,Lt}var yr=n=>{var o=Lt;if(!o)return rr(0),0;var a=new En(o);q()[a.Xi+16>>>2>>>0]=o;var u=q()[a.Xi+4>>>2>>>0];if(!u)return rr(0),o;for(var l of n){if(l===0||l===u)break;if(ta(l,u,a.Xi+16))return rr(l),o}return rr(u),o};function ph(){return yr([])}function fh(n){return yr([n>>>0])}function mh(n,o){return yr([n>>>0,o>>>0])}function hh(n,o,a){return yr([n>>>0,o>>>0,a>>>0])}var gh=()=>{var n=hr.pop();n||yt("no exception to throw");var o=n.gj;if(ie()[n.Xi+13>>>0]==0){hr.push(n);var a=1;ie()[n.Xi+13>>>0]=a,a=0,ie()[n.Xi+12>>>0]=a,gr++}throw Lt=o};function yh(n,o,a){var u=new En(n>>>=0);throw o>>>=0,a>>>=0,q()[u.Xi+16>>>2>>>0]=0,q()[u.Xi+4>>>2>>>0]=o,q()[u.Xi+8>>>2>>>0]=a,gr++,Lt=n}var bh=()=>gr;function eo(n,o,a,u){return f?ze(2,1,n,o,a,u):to(n,o,a,u)}function to(n,o,a,u){if(n>>>=0,a>>>=0,u>>>=0,h===void 0)return 6;var l=[];return f&&l.length===0?eo(n,o>>>=0,a,u):(n={Dj:a,Yi:n,fj:u,lj:l},f?(n.Zi="spawnThread",postMessage(n,l),0):qi(n))}var ro=typeof TextDecoder<"u"?new TextDecoder:void 0,no=(n,o=0,a=NaN)=>{var u=(o>>>=0)+a;for(a=o;n[a]&&!(a>=u);)++a;if(16<a-o&&n.buffer&&ro)return ro.decode(n.buffer instanceof ArrayBuffer?n.subarray(o,a):n.slice(o,a));for(u="";o<a;){var l=n[o++];if(128&l){var p=63&n[o++];if((224&l)==192)u+=String.fromCharCode((31&l)<<6|p);else{var m=63&n[o++];65536>(l=(240&l)==224?(15&l)<<12|p<<6|m:(7&l)<<18|p<<12|m<<6|63&n[o++])?u+=String.fromCharCode(l):(l-=65536,u+=String.fromCharCode(55296|l>>10,56320|1023&l))}}else u+=String.fromCharCode(l)}return u},Re=(n,o)=>(n>>>=0)?no(be(),n,o):"";function io(n,o,a){return f?ze(3,1,n,o,a):0}function oo(n,o){if(f)return ze(4,1,n,o)}var ao=n=>{for(var o=0,a=0;a<n.length;++a){var u=n.charCodeAt(a);127>=u?o++:2047>=u?o+=2:55296<=u&&57343>=u?(o+=4,++a):o+=3}return o},Gt=(n,o,a)=>{var u=be();if(o>>>=0,0<a){var l=o;a=o+a-1;for(var p=0;p<n.length;++p){var m=n.charCodeAt(p);if(55296<=m&&57343>=m&&(m=65536+((1023&m)<<10)|1023&n.charCodeAt(++p)),127>=m){if(o>=a)break;u[o++>>>0]=m}else{if(2047>=m){if(o+1>=a)break;u[o++>>>0]=192|m>>6}else{if(65535>=m){if(o+2>=a)break;u[o++>>>0]=224|m>>12}else{if(o+3>=a)break;u[o++>>>0]=240|m>>18,u[o++>>>0]=128|m>>12&63}u[o++>>>0]=128|m>>6&63}u[o++>>>0]=128|63&m}}u[o>>>0]=0,n=o-l}else n=0;return n};function so(n,o){if(f)return ze(5,1,n,o)}function uo(n,o,a){if(f)return ze(6,1,n,o,a)}function lo(n,o,a){return f?ze(7,1,n,o,a):0}function co(n,o){if(f)return ze(8,1,n,o)}function po(n,o,a){if(f)return ze(9,1,n,o,a)}function fo(n,o,a,u){if(f)return ze(10,1,n,o,a,u)}function mo(n,o,a,u){if(f)return ze(11,1,n,o,a,u)}function ho(n,o,a,u){if(f)return ze(12,1,n,o,a,u)}function go(n){if(f)return ze(13,1,n)}function yo(n,o){if(f)return ze(14,1,n,o)}function bo(n,o,a){if(f)return ze(15,1,n,o,a)}var _o,Ct,_h=()=>yt(""),st=n=>{for(var o="";be()[n>>>0];)o+=_o[be()[n++>>>0]];return o},Pn={},zn={},wh={};function bt(n,o,a={}){return function(u,l,p={}){var m=l.name;if(!u)throw new Ct(`type "${m}" must have a positive integer typeid pointer`);if(zn.hasOwnProperty(u)){if(p.pj)return;throw new Ct(`Cannot register type '${m}' twice`)}zn[u]=l,delete wh[u],Pn.hasOwnProperty(u)&&(l=Pn[u],delete Pn[u],l.forEach(g=>g()))}(n,o,a)}var wo=(n,o,a)=>{switch(o){case 1:return a?u=>ie()[u>>>0]:u=>be()[u>>>0];case 2:return a?u=>Me()[u>>>1>>>0]:u=>Pe()[u>>>1>>>0];case 4:return a?u=>H()[u>>>2>>>0]:u=>q()[u>>>2>>>0];case 8:return a?u=>Q[u>>>3]:u=>ue[u>>>3];default:throw new TypeError(`invalid integer width (${o}): ${n}`)}};function vh(n,o,a){a>>>=0,bt(n>>>=0,{name:o=st(o>>>0),fromWireType:u=>u,toWireType:function(u,l){if(typeof l!="bigint"&&typeof l!="number")throw l=l===null?"null":(u=typeof l)=="object"||u==="array"||u==="function"?l.toString():""+l,new TypeError(`Cannot convert "${l}" to ${this.name}`);return typeof l=="number"&&(l=BigInt(l)),l},$i:St,readValueFromPointer:wo(o,a,o.indexOf("u")==-1),aj:null})}var St=8;function $h(n,o,a,u){bt(n>>>=0,{name:o=st(o>>>0),fromWireType:function(l){return!!l},toWireType:function(l,p){return p?a:u},$i:St,readValueFromPointer:function(l){return this.fromWireType(be()[l>>>0])},aj:null})}var On=[],_t=[];function Dn(n){9<(n>>>=0)&&--_t[n+1]==0&&(_t[n]=void 0,On.push(n))}var Fe=n=>{if(!n)throw new Ct("Cannot use deleted val. handle = "+n);return _t[n]},Ze=n=>{switch(n){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let o=On.pop()||_t.length;return _t[o]=n,_t[o+1]=1,o}};function Bn(n){return this.fromWireType(q()[n>>>2>>>0])}var xh={name:"emscripten::val",fromWireType:n=>{var o=Fe(n);return Dn(n),o},toWireType:(n,o)=>Ze(o),$i:St,readValueFromPointer:Bn,aj:null};function Ch(n){return bt(n>>>0,xh)}var Sh=(n,o)=>{switch(o){case 4:return function(a){return this.fromWireType(se()[a>>>2>>>0])};case 8:return function(a){return this.fromWireType(ve()[a>>>3>>>0])};default:throw new TypeError(`invalid float width (${o}): ${n}`)}};function Th(n,o,a){a>>>=0,bt(n>>>=0,{name:o=st(o>>>0),fromWireType:u=>u,toWireType:(u,l)=>l,$i:St,readValueFromPointer:Sh(o,a),aj:null})}function Ih(n,o,a,u,l){if(n>>>=0,a>>>=0,o=st(o>>>0),l===-1&&(l=4294967295),l=g=>g,u===0){var p=32-8*a;l=g=>g<<p>>>p}var m=o.includes("unsigned")?function(g,b){return b>>>0}:function(g,b){return b};bt(n,{name:o,fromWireType:l,toWireType:m,$i:St,readValueFromPointer:wo(o,a,u!==0),aj:null})}function Ah(n,o,a){function u(p){var m=q()[p>>>2>>>0];return p=q()[p+4>>>2>>>0],new l(ie().buffer,p,m)}var l=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][o];bt(n>>>=0,{name:a=st(a>>>0),fromWireType:u,$i:St,readValueFromPointer:u},{pj:!0})}function kh(n,o){bt(n>>>=0,{name:o=st(o>>>0),fromWireType:function(a){for(var u,l=q()[a>>>2>>>0],p=a+4,m=p,g=0;g<=l;++g){var b=p+g;g!=l&&be()[b>>>0]!=0||(m=Re(m,b-m),u===void 0?u=m:(u+=String.fromCharCode(0),u+=m),m=b+1)}return lt(a),u},toWireType:function(a,u){u instanceof ArrayBuffer&&(u=new Uint8Array(u));var l=typeof u=="string";if(!(l||u instanceof Uint8Array||u instanceof Uint8ClampedArray||u instanceof Int8Array))throw new Ct("Cannot pass non-string to std::string");var p=l?ao(u):u.length,m=Ir(4+p+1),g=m+4;if(q()[m>>>2>>>0]=p,l)Gt(u,g,p+1);else if(l)for(l=0;l<p;++l){var b=u.charCodeAt(l);if(255<b)throw lt(m),new Ct("String has UTF-16 code units that do not fit in 8 bits");be()[g+l>>>0]=b}else for(l=0;l<p;++l)be()[g+l>>>0]=u[l];return a!==null&&a.push(lt,m),m},$i:St,readValueFromPointer:Bn,aj(a){lt(a)}})}var vo=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Eh=(n,o)=>{for(var a=n>>1,u=a+o/2;!(a>=u)&&Pe()[a>>>0];)++a;if(32<(a<<=1)-n&&vo)return vo.decode(be().slice(n,a));for(a="",u=0;!(u>=o/2);++u){var l=Me()[n+2*u>>>1>>>0];if(l==0)break;a+=String.fromCharCode(l)}return a},Ph=(n,o,a)=>{if(a??=2147483647,2>a)return 0;var u=o;a=(a-=2)<2*n.length?a/2:n.length;for(var l=0;l<a;++l){var p=n.charCodeAt(l);Me()[o>>>1>>>0]=p,o+=2}return Me()[o>>>1>>>0]=0,o-u},zh=n=>2*n.length,Oh=(n,o)=>{for(var a=0,u="";!(a>=o/4);){var l=H()[n+4*a>>>2>>>0];if(l==0)break;++a,65536<=l?(l-=65536,u+=String.fromCharCode(55296|l>>10,56320|1023&l)):u+=String.fromCharCode(l)}return u},Dh=(n,o,a)=>{if(o>>>=0,a??=2147483647,4>a)return 0;var u=o;a=u+a-4;for(var l=0;l<n.length;++l){var p=n.charCodeAt(l);if(55296<=p&&57343>=p&&(p=65536+((1023&p)<<10)|1023&n.charCodeAt(++l)),H()[o>>>2>>>0]=p,(o+=4)+4>a)break}return H()[o>>>2>>>0]=0,o-u},Bh=n=>{for(var o=0,a=0;a<n.length;++a){var u=n.charCodeAt(a);55296<=u&&57343>=u&&++a,o+=4}return o};function Mh(n,o,a){if(n>>>=0,o>>>=0,a=st(a>>>=0),o===2)var u=Eh,l=Ph,p=zh,m=g=>Pe()[g>>>1>>>0];else o===4&&(u=Oh,l=Dh,p=Bh,m=g=>q()[g>>>2>>>0]);bt(n,{name:a,fromWireType:g=>{for(var b,$=q()[g>>>2>>>0],T=g+4,k=0;k<=$;++k){var z=g+4+k*o;k!=$&&m(z)!=0||(T=u(T,z-T),b===void 0?b=T:(b+=String.fromCharCode(0),b+=T),T=z+o)}return lt(g),b},toWireType:(g,b)=>{if(typeof b!="string")throw new Ct(`Cannot pass non-string to C++ string type ${a}`);var $=p(b),T=Ir(4+$+o);return q()[T>>>2>>>0]=$/o,l(b,T+4,$+o),g!==null&&g.push(lt,T),T},$i:St,readValueFromPointer:Bn,aj(g){lt(g)}})}function Rh(n,o){bt(n>>>=0,{qj:!0,name:o=st(o>>>0),$i:0,fromWireType:()=>{},toWireType:()=>{}})}function jh(n){Ln(n>>>0,!c,1,!d,131072,!1),Qi()}var Mn=n=>{if(!de)try{if(n(),!(0<$t))try{f?Gn(B):kn(B)}catch(o){o instanceof Tn||o=="unwind"||C(0,o)}}catch(o){o instanceof Tn||o=="unwind"||C(0,o)}};function Rn(n){n>>>=0,typeof Atomics.Hj=="function"&&(Atomics.Hj(H(),n>>>2,n).value.then(br),n+=128,Atomics.store(H(),n>>>2,1))}var br=()=>{var n=Tr();n&&(Rn(n),Mn(Qo))};function Uh(n,o){(n>>>=0)==o>>>0?setTimeout(br):f?postMessage({ej:n,Zi:"checkMailbox"}):(n=Ot[n])&&n.postMessage({Zi:"checkMailbox"})}var jn=[];function Nh(n,o,a,u,l){for(o>>>=0,u/=2,jn.length=u,a=l>>>0>>>3,l=0;l<u;l++)jn[l]=Q[a+2*l]?Q[a+2*l+1]:ve()[a+2*l+1>>>0];return(o?Sn[o]:Og[n])(...jn)}var Vh=()=>{$t=0};function Wh(n){n>>>=0,f?postMessage({Zi:"cleanupThread",Fj:n}):Zi(Ot[n])}function Lh(n){}var _r=(n,o)=>{var a=zn[n];if(a===void 0)throw n=Ho(n),a=st(n),lt(n),new Ct(`${o} has unknown type ${a}`);return a},$o=(n,o,a)=>{var u=[];return n=n.toWireType(u,a),u.length&&(q()[o>>>2>>>0]=Ze(u)),n};function Gh(n,o,a){return o>>>=0,a>>>=0,n=Fe(n>>>0),o=_r(o,"emval::as"),$o(o,a,n)}function Hh(n,o){return o>>>=0,n=Fe(n>>>0),(o=_r(o,"emval::as")).toWireType(null,n)}var wr=n=>{try{n()}catch(o){yt(o)}},Tt=0,ut=null,xo=0,vr=[],Co={},So={},Fh=0,Un=null,qh=[];function To(n){return function(o){if(!de){if(Tt===0){var a=!1,u=!1;o((l=0)=>{if(!de&&(xo=l,a=!0,u)){Tt=2,wr(()=>Dl(ut)),typeof MainLoop<"u"&&MainLoop.mj&&MainLoop.resume(),l=!1;try{var p=function(){var b=H()[ut+8>>>2>>>0];return b=O[So[b]],--$t,b()}()}catch(b){p=b,l=!0}var m=!1;if(!ut){var g=Un;g&&(Un=null,(l?g.reject:g.resolve)(p),m=!0)}if(l&&!m)throw p}}),u=!0,a||(Tt=1,ut=function(){var l=Ir(65548),p=l+12;q()[l>>>2>>>0]=p,q()[l+4>>>2>>>0]=p+65536,p=vr[0];var m=Co[p];return m===void 0&&(m=Fh++,Co[p]=m,So[m]=p),p=m,H()[l+8>>>2>>>0]=p,l}(),typeof MainLoop<"u"&&MainLoop.mj&&MainLoop.pause(),wr(()=>zl(ut)))}else Tt===2?(Tt=0,wr(Bl),lt(ut),ut=null,qh.forEach(Mn)):yt(`invalid state: ${Tt}`);return xo}}(o=>{n().then(o)})}function Kh(n){return n>>>=0,To(async()=>{var o=await Fe(n);return Ze(o)})}var $r=[];function Yh(n,o,a,u){return a>>>=0,u>>>=0,(n=$r[n>>>0])(null,o=Fe(o>>>0),a,u)}var Zh={},xr=n=>{var o=Zh[n];return o===void 0?st(n):o};function Qh(n,o,a,u,l){return a>>>=0,u>>>=0,l>>>=0,(n=$r[n>>>0])(o=Fe(o>>>0),o[a=xr(a)],u,l)}var Io=()=>typeof globalThis=="object"?globalThis:Function("return this")();function Xh(n){return(n>>>=0)==0?Ze(Io()):(n=xr(n),Ze(Io()[n]))}var Jh=n=>{var o=$r.length;return $r.push(n),o},eg=(n,o)=>{for(var a=Array(n),u=0;u<n;++u)a[u]=_r(q()[o+4*u>>>2>>>0],"parameter "+u);return a},Ao=(n,o)=>Object.defineProperty(o,"name",{value:n});function tg(n,o,a){var u=(o=eg(n,o>>>0)).shift();n--;var l=`return function (obj, func, destructorsRef, args) {
`,p=0,m=[];a===0&&m.push("obj");for(var g=["retType"],b=[u],$=0;$<n;++$)m.push("arg"+$),g.push("argType"+$),b.push(o[$]),l+=`  var arg${$} = argType${$}.readValueFromPointer(args${p?"+"+p:""});
`,p+=o[$].$i;return l+=`  var rv = ${a===1?"new func":"func.call"}(${m.join(", ")});
`,u.qj||(g.push("emval_returnValue"),b.push($o),l+=`  return emval_returnValue(retType, destructorsRef, rv);
`),g.push(l+`};
`),n=function(T){var k=Function;if(!(k instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof k} which is not a function`);var z=Ao(k.name||"unknownFunctionName",function(){});return z.prototype=k.prototype,z=new z,(T=k.apply(z,T))instanceof Object?T:z}(g)(...b),a=`methodCaller<(${o.map(T=>T.name).join(", ")}) => ${u.name}>`,Jh(Ao(a,n))}function rg(n){return n=xr(n>>>0),Ze(r[n])}function ng(n,o){return o>>>=0,n=Fe(n>>>0),o=Fe(o),Ze(n[o])}function ig(n){9<(n>>>=0)&&(_t[n+1]+=1)}function og(){return Ze([])}function ag(n){n=Fe(n>>>0);for(var o=Array(n.length),a=0;a<n.length;a++)o[a]=n[a];return Ze(o)}function sg(n){return Ze(xr(n>>>0))}function ug(){return Ze({})}function lg(n){for(var o=Fe(n>>>=0);o.length;){var a=o.pop();o.pop()(a)}Dn(n)}function dg(n,o,a){o>>>=0,a>>>=0,n=Fe(n>>>0),o=Fe(o),a=Fe(a),n[o]=a}function cg(n,o){return o>>>=0,n=(n=_r(n>>>0,"_emval_take_value")).readValueFromPointer(o),Ze(n)}function pg(n,o){n=-9007199254740992>n||9007199254740992<n?NaN:Number(n),o>>>=0,n=new Date(1e3*n),H()[o>>>2>>>0]=n.getUTCSeconds(),H()[o+4>>>2>>>0]=n.getUTCMinutes(),H()[o+8>>>2>>>0]=n.getUTCHours(),H()[o+12>>>2>>>0]=n.getUTCDate(),H()[o+16>>>2>>>0]=n.getUTCMonth(),H()[o+20>>>2>>>0]=n.getUTCFullYear()-1900,H()[o+24>>>2>>>0]=n.getUTCDay(),n=(n.getTime()-Date.UTC(n.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,H()[o+28>>>2>>>0]=n}var ko=n=>n%4==0&&(n%100!=0||n%400==0),Eo=[0,31,60,91,121,152,182,213,244,274,305,335],Po=[0,31,59,90,120,151,181,212,243,273,304,334];function fg(n,o){n=-9007199254740992>n||9007199254740992<n?NaN:Number(n),o>>>=0,n=new Date(1e3*n),H()[o>>>2>>>0]=n.getSeconds(),H()[o+4>>>2>>>0]=n.getMinutes(),H()[o+8>>>2>>>0]=n.getHours(),H()[o+12>>>2>>>0]=n.getDate(),H()[o+16>>>2>>>0]=n.getMonth(),H()[o+20>>>2>>>0]=n.getFullYear()-1900,H()[o+24>>>2>>>0]=n.getDay();var a=(ko(n.getFullYear())?Eo:Po)[n.getMonth()]+n.getDate()-1|0;H()[o+28>>>2>>>0]=a,H()[o+36>>>2>>>0]=-60*n.getTimezoneOffset(),a=new Date(n.getFullYear(),6,1).getTimezoneOffset();var u=new Date(n.getFullYear(),0,1).getTimezoneOffset();n=0|(a!=u&&n.getTimezoneOffset()==Math.min(u,a)),H()[o+32>>>2>>>0]=n}function mg(n){n>>>=0;var o=new Date(H()[n+20>>>2>>>0]+1900,H()[n+16>>>2>>>0],H()[n+12>>>2>>>0],H()[n+8>>>2>>>0],H()[n+4>>>2>>>0],H()[n>>>2>>>0],0),a=H()[n+32>>>2>>>0],u=o.getTimezoneOffset(),l=new Date(o.getFullYear(),6,1).getTimezoneOffset(),p=new Date(o.getFullYear(),0,1).getTimezoneOffset(),m=Math.min(p,l);return 0>a?H()[n+32>>>2>>>0]=+(l!=p&&m==u):0<a!=(m==u)&&(l=Math.max(p,l),o.setTime(o.getTime()+6e4*((0<a?m:l)-u))),H()[n+24>>>2>>>0]=o.getDay(),a=(ko(o.getFullYear())?Eo:Po)[o.getMonth()]+o.getDate()-1|0,H()[n+28>>>2>>>0]=a,H()[n>>>2>>>0]=o.getSeconds(),H()[n+4>>>2>>>0]=o.getMinutes(),H()[n+8>>>2>>>0]=o.getHours(),H()[n+12>>>2>>>0]=o.getDate(),H()[n+16>>>2>>>0]=o.getMonth(),H()[n+20>>>2>>>0]=o.getYear(),n=o.getTime(),BigInt(isNaN(n)?-1:n/1e3)}function zo(n,o,a,u,l,p,m){return f?ze(16,1,n,o,a,u,l,p,m):-52}function Oo(n,o,a,u,l,p){if(f)return ze(17,1,n,o,a,u,l,p)}var tr={},hg=()=>performance.timeOrigin+performance.now();function Do(n,o){if(f)return ze(18,1,n,o);if(tr[n]&&(clearTimeout(tr[n].id),delete tr[n]),!o)return 0;var a=setTimeout(()=>{delete tr[n],Mn(()=>Zo(n,performance.timeOrigin+performance.now()))},o);return tr[n]={id:a,Lj:o},0}function gg(n,o,a,u){n>>>=0,o>>>=0,a>>>=0,u>>>=0;var l=new Date().getFullYear(),p=new Date(l,0,1).getTimezoneOffset();l=new Date(l,6,1).getTimezoneOffset();var m=Math.max(p,l);q()[n>>>2>>>0]=60*m,H()[o>>>2>>>0]=+(p!=l),n=(o=g=>{var b=Math.abs(g);return`UTC${0<=g?"-":"+"}${String(Math.floor(b/60)).padStart(2,"0")}${String(b%60).padStart(2,"0")}`})(p),o=o(l),l<p?(Gt(n,a,17),Gt(o,u,17)):(Gt(n,u,17),Gt(o,a,17))}var yg=()=>Date.now(),bg=1;function _g(n,o,a){if(!(0<=n&&3>=n))return 28;if(n===0)n=Date.now();else{if(!bg)return 52;n=performance.timeOrigin+performance.now()}return Q[a>>>0>>>3]=BigInt(Math.round(1e6*n)),0}var Nn=[],Bo=(n,o)=>{Nn.length=0;for(var a;a=be()[n++>>>0];){var u=a!=105;o+=(u&=a!=112)&&o%8?4:0,Nn.push(a==112?q()[o>>>2>>>0]:a==106?Q[o>>>3]:a==105?H()[o>>>2>>>0]:ve()[o>>>3>>>0]),o+=u?8:4}return Nn};function wg(n,o,a){return n>>>=0,o=Bo(o>>>0,a>>>0),Sn[n](...o)}function vg(n,o,a){return n>>>=0,o=Bo(o>>>0,a>>>0),Sn[n](...o)}var $g=()=>{};function xg(n,o){return I(Re(n>>>0,o>>>0))}var Cg=()=>{throw $t+=1,"unwind"};function Sg(){return 4294901760}var Tg=()=>navigator.hardwareConcurrency;function Ig(){return yt("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function Ag(n){n>>>=0;var o=be().length;if(n<=o||4294901760<n)return!1;for(var a=1;4>=a;a*=2){var u=o*(1+.2/a);u=Math.min(u,n+100663296);e:{u=(Math.min(4294901760,65536*Math.ceil(Math.max(n,u)/65536))-P.buffer.byteLength+65535)/65536|0;try{P.grow(u),Te();var l=1;break e}catch{}l=void 0}if(l)return!0}return!1}var Cr=()=>(yt("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Ht={},Mo=n=>{n.forEach(o=>{var a=Cr();a&&(Ht[a]=o)})};function kg(){var n=Error().stack.toString().split(`
`);return n[0]=="Error"&&n.shift(),Mo(n),Ht.kj=Cr(),Ht.Bj=n,Ht.kj}function Eg(n,o,a){if(n>>>=0,o>>>=0,Ht.kj==n)var u=Ht.Bj;else(u=Error().stack.toString().split(`
`))[0]=="Error"&&u.shift(),Mo(u);for(var l=3;u[l]&&Cr()!=n;)++l;for(n=0;n<a&&u[n+l];++n)H()[o+4*n>>>2>>>0]=Cr();return n}var Vn,Wn={},Ro=()=>{if(!Vn){var n,o={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(n in Wn)Wn[n]===void 0?delete o[n]:o[n]=Wn[n];var a=[];for(n in o)a.push(`${n}=${o[n]}`);Vn=a}return Vn};function jo(n,o){if(f)return ze(19,1,n,o);n>>>=0,o>>>=0;var a=0;return Ro().forEach((u,l)=>{var p=o+a;for(l=q()[n+4*l>>>2>>>0]=p,p=0;p<u.length;++p)ie()[l++>>>0]=u.charCodeAt(p);ie()[l>>>0]=0,a+=u.length+1}),0}function Uo(n,o){if(f)return ze(20,1,n,o);n>>>=0,o>>>=0;var a=Ro();q()[n>>>2>>>0]=a.length;var u=0;return a.forEach(l=>u+=l.length+1),q()[o>>>2>>>0]=u,0}function No(n){return f?ze(21,1,n):52}function Vo(n,o,a,u){return f?ze(22,1,n,o,a,u):52}function Wo(n,o,a,u){return f?ze(23,1,n,o,a,u):70}var Pg=[null,[],[]];function Lo(n,o,a,u){if(f)return ze(24,1,n,o,a,u);o>>>=0,a>>>=0,u>>>=0;for(var l=0,p=0;p<a;p++){var m=q()[o>>>2>>>0],g=q()[o+4>>>2>>>0];o+=8;for(var b=0;b<g;b++){var $=be()[m+b>>>0],T=Pg[n];$===0||$===10?((n===1?A:I)(no(T)),T.length=0):T.push($)}l+=g}return q()[u>>>2>>>0]=l,0}function zg(n){return n>>>0}f||function(){for(var n=r.numThreads-1;n--;)Ji();In.unshift(()=>{zt++,function(o){f?o():Promise.all(xt.map(Xi)).then(o)}(()=>Gi())})}();for(var Go=Array(256),Sr=0;256>Sr;++Sr)Go[Sr]=String.fromCharCode(Sr);_o=Go,Ct=r.BindingError=class extends Error{constructor(n){super(n),this.name="BindingError"}},r.InternalError=class extends Error{constructor(n){super(n),this.name="InternalError"}},_t.push(0,1,void 0,1,null,1,!0,1,!1,1),r.count_emval_handles=()=>_t.length/2-5-On.length;var O,Og=[An,Ki,eo,io,oo,so,uo,lo,co,po,fo,mo,ho,go,yo,bo,zo,Oo,Do,jo,Uo,No,Vo,Wo,Lo];(async function(){function n(u,l){return O=u.exports,O=function(){var p=O,m={};for(let[g,b]of Object.entries(p))m[g]=typeof b=="function"?(...$)=>{vr.push(g);try{return b(...$)}finally{de||(vr.pop(),ut&&Tt===1&&vr.length===0&&(Tt=0,$t+=1,wr(Ol),typeof Fibers<"u"&&Fibers.Mj()))}}:b;return m}(),O=function(){var p=O,m=b=>$=>b($)>>>0,g=b=>()=>b()>>>0;return(p=Object.assign({},p)).pe=m(p.pe),p.Ue=g(p.Ue),p.We=m(p.We),p.jf=m(p.jf),p.kf=g(p.kf),p.of=m(p.of),p}(),Yi.push(O.Xe),D=l,Gi(),O}zt++;var o=Hi();if(r.instantiateWasm)return new Promise(u=>{r.instantiateWasm(o,(l,p)=>{n(l,p),u(l.exports)})});if(f)return new Promise(u=>{Je=l=>{var p=new WebAssembly.Instance(l,Hi());u(n(p,l))}});Xt??=r.locateFile?r.locateFile?r.locateFile("ort-wasm-simd-threaded.jsep.wasm",x):x+"ort-wasm-simd-threaded.jsep.wasm":new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href;try{var a=await async function(u){var l=Xt;if(!ae&&typeof WebAssembly.instantiateStreaming=="function"&&!ge(l))try{var p=fetch(l,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(p,u)}catch(m){I(`wasm streaming compile failed: ${m}`),I("falling back to ArrayBuffer instantiation")}return async function(m,g){try{var b=await async function($){if(!ae)try{var T=await _($);return new Uint8Array(T)}catch{}if($==Xt&&ae)$=new Uint8Array(ae);else{if(!w)throw"both async and sync fetching of the wasm failed";$=w($)}return $}(m);return await WebAssembly.instantiate(b,g)}catch($){I(`failed to asynchronously prepare wasm: ${$}`),yt($)}}(l,u)}(o);return n(a.instance,a.module)}catch(u){return i(u),Promise.reject(u)}})();var Ho=n=>(Ho=O.pe)(n),Fo=()=>(Fo=O.qe)();r._OrtInit=(n,o)=>(r._OrtInit=O.re)(n,o),r._OrtGetLastError=(n,o)=>(r._OrtGetLastError=O.se)(n,o),r._OrtCreateSessionOptions=(n,o,a,u,l,p,m,g,b,$)=>(r._OrtCreateSessionOptions=O.te)(n,o,a,u,l,p,m,g,b,$),r._OrtAppendExecutionProvider=(n,o)=>(r._OrtAppendExecutionProvider=O.ue)(n,o),r._OrtAddFreeDimensionOverride=(n,o,a)=>(r._OrtAddFreeDimensionOverride=O.ve)(n,o,a),r._OrtAddSessionConfigEntry=(n,o,a)=>(r._OrtAddSessionConfigEntry=O.we)(n,o,a),r._OrtReleaseSessionOptions=n=>(r._OrtReleaseSessionOptions=O.xe)(n),r._OrtCreateSession=(n,o,a)=>(r._OrtCreateSession=O.ye)(n,o,a),r._OrtReleaseSession=n=>(r._OrtReleaseSession=O.ze)(n),r._OrtGetInputOutputCount=(n,o,a)=>(r._OrtGetInputOutputCount=O.Ae)(n,o,a),r._OrtGetInputName=(n,o)=>(r._OrtGetInputName=O.Be)(n,o),r._OrtGetOutputName=(n,o)=>(r._OrtGetOutputName=O.Ce)(n,o),r._OrtFree=n=>(r._OrtFree=O.De)(n),r._OrtCreateTensor=(n,o,a,u,l,p)=>(r._OrtCreateTensor=O.Ee)(n,o,a,u,l,p),r._OrtGetTensorData=(n,o,a,u,l)=>(r._OrtGetTensorData=O.Fe)(n,o,a,u,l),r._OrtReleaseTensor=n=>(r._OrtReleaseTensor=O.Ge)(n),r._OrtCreateRunOptions=(n,o,a,u)=>(r._OrtCreateRunOptions=O.He)(n,o,a,u),r._OrtAddRunConfigEntry=(n,o,a)=>(r._OrtAddRunConfigEntry=O.Ie)(n,o,a),r._OrtReleaseRunOptions=n=>(r._OrtReleaseRunOptions=O.Je)(n),r._OrtCreateBinding=n=>(r._OrtCreateBinding=O.Ke)(n),r._OrtBindInput=(n,o,a)=>(r._OrtBindInput=O.Le)(n,o,a),r._OrtBindOutput=(n,o,a,u)=>(r._OrtBindOutput=O.Me)(n,o,a,u),r._OrtClearBoundOutputs=n=>(r._OrtClearBoundOutputs=O.Ne)(n),r._OrtReleaseBinding=n=>(r._OrtReleaseBinding=O.Oe)(n),r._OrtRunWithBinding=(n,o,a,u,l)=>(r._OrtRunWithBinding=O.Pe)(n,o,a,u,l),r._OrtRun=(n,o,a,u,l,p,m,g)=>(r._OrtRun=O.Qe)(n,o,a,u,l,p,m,g),r._OrtEndProfiling=n=>(r._OrtEndProfiling=O.Re)(n),r._JsepOutput=(n,o,a)=>(r._JsepOutput=O.Se)(n,o,a),r._JsepGetNodeName=n=>(r._JsepGetNodeName=O.Te)(n);var Tr=()=>(Tr=O.Ue)(),lt=r._free=n=>(lt=r._free=O.Ve)(n),Ir=r._malloc=n=>(Ir=r._malloc=O.We)(n),Ln=(n,o,a,u,l,p)=>(Ln=O.Ze)(n,o,a,u,l,p),qo=()=>(qo=O._e)(),Ko=(n,o,a,u,l)=>(Ko=O.$e)(n,o,a,u,l),Yo=n=>(Yo=O.af)(n),Gn=n=>(Gn=O.bf)(n),Zo=(n,o)=>(Zo=O.cf)(n,o),Qo=()=>(Qo=O.df)(),N=(n,o)=>(N=O.ef)(n,o),rr=n=>(rr=O.ff)(n),Xo=(n,o)=>(Xo=O.gf)(n,o),R=n=>(R=O.hf)(n),Hn=n=>(Hn=O.jf)(n),j=()=>(j=O.kf)(),Jo=n=>(Jo=O.lf)(n),ea=n=>(ea=O.mf)(n),ta=(n,o,a)=>(ta=O.nf)(n,o,a),ra=n=>(ra=O.of)(n),na=r.dynCall_vii=(n,o,a)=>(na=r.dynCall_vii=O.pf)(n,o,a),ia=r.dynCall_iiii=(n,o,a,u)=>(ia=r.dynCall_iiii=O.qf)(n,o,a,u),oa=r.dynCall_iii=(n,o,a)=>(oa=r.dynCall_iii=O.rf)(n,o,a),Fn=r.dynCall_ii=(n,o)=>(Fn=r.dynCall_ii=O.sf)(n,o),aa=r.dynCall_iiiiiii=(n,o,a,u,l,p,m)=>(aa=r.dynCall_iiiiiii=O.tf)(n,o,a,u,l,p,m),sa=r.dynCall_vi=(n,o)=>(sa=r.dynCall_vi=O.uf)(n,o),ua=r.dynCall_v=n=>(ua=r.dynCall_v=O.vf)(n),la=r.dynCall_iiiiii=(n,o,a,u,l,p)=>(la=r.dynCall_iiiiii=O.wf)(n,o,a,u,l,p),da=r.dynCall_iiij=(n,o,a,u)=>(da=r.dynCall_iiij=O.xf)(n,o,a,u),ca=r.dynCall_iiiii=(n,o,a,u,l)=>(ca=r.dynCall_iiiii=O.yf)(n,o,a,u,l),pa=r.dynCall_viii=(n,o,a,u)=>(pa=r.dynCall_viii=O.zf)(n,o,a,u),fa=r.dynCall_viiiii=(n,o,a,u,l,p)=>(fa=r.dynCall_viiiii=O.Af)(n,o,a,u,l,p),ma=r.dynCall_viiii=(n,o,a,u,l)=>(ma=r.dynCall_viiii=O.Bf)(n,o,a,u,l),ha=r.dynCall_viiiiii=(n,o,a,u,l,p,m)=>(ha=r.dynCall_viiiiii=O.Cf)(n,o,a,u,l,p,m),ga=r.dynCall_viiiiij=(n,o,a,u,l,p,m)=>(ga=r.dynCall_viiiiij=O.Df)(n,o,a,u,l,p,m),ya=r.dynCall_viiji=(n,o,a,u,l)=>(ya=r.dynCall_viiji=O.Ef)(n,o,a,u,l),ba=r.dynCall_viiiiiiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k)=>(ba=r.dynCall_viiiiiiiiiii=O.Ff)(n,o,a,u,l,p,m,g,b,$,T,k),_a=r.dynCall_viiijjjii=(n,o,a,u,l,p,m,g,b)=>(_a=r.dynCall_viiijjjii=O.Gf)(n,o,a,u,l,p,m,g,b),wa=r.dynCall_iij=(n,o,a)=>(wa=r.dynCall_iij=O.Hf)(n,o,a),va=r.dynCall_iif=(n,o,a)=>(va=r.dynCall_iif=O.If)(n,o,a),$a=r.dynCall_iid=(n,o,a)=>($a=r.dynCall_iid=O.Jf)(n,o,a),xa=r.dynCall_jii=(n,o,a)=>(xa=r.dynCall_jii=O.Kf)(n,o,a),Ca=r.dynCall_i=n=>(Ca=r.dynCall_i=O.Lf)(n),Sa=r.dynCall_viiiiiiii=(n,o,a,u,l,p,m,g,b)=>(Sa=r.dynCall_viiiiiiii=O.Mf)(n,o,a,u,l,p,m,g,b),Ta=r.dynCall_ji=(n,o)=>(Ta=r.dynCall_ji=O.Nf)(n,o),Ia=r.dynCall_viij=(n,o,a,u)=>(Ia=r.dynCall_viij=O.Of)(n,o,a,u),Aa=r.dynCall_iiiiiiiiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z)=>(Aa=r.dynCall_iiiiiiiiiiiii=O.Pf)(n,o,a,u,l,p,m,g,b,$,T,k,z),ka=r.dynCall_viiiiiiiiii=(n,o,a,u,l,p,m,g,b,$,T)=>(ka=r.dynCall_viiiiiiiiii=O.Qf)(n,o,a,u,l,p,m,g,b,$,T),Ea=r.dynCall_ij=(n,o)=>(Ea=r.dynCall_ij=O.Rf)(n,o),Pa=r.dynCall_iiiiij=(n,o,a,u,l,p)=>(Pa=r.dynCall_iiiiij=O.Sf)(n,o,a,u,l,p),za=r.dynCall_j=n=>(za=r.dynCall_j=O.Tf)(n),Oa=r.dynCall_vij=(n,o,a)=>(Oa=r.dynCall_vij=O.Uf)(n,o,a),Da=r.dynCall_iiiiiiii=(n,o,a,u,l,p,m,g)=>(Da=r.dynCall_iiiiiiii=O.Vf)(n,o,a,u,l,p,m,g),Ba=r.dynCall_viijjjiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k)=>(Ba=r.dynCall_viijjjiiiiii=O.Wf)(n,o,a,u,l,p,m,g,b,$,T,k),Ma=r.dynCall_viiiiiiiii=(n,o,a,u,l,p,m,g,b,$)=>(Ma=r.dynCall_viiiiiiiii=O.Xf)(n,o,a,u,l,p,m,g,b,$),Ra=r.dynCall_viiijiiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k)=>(Ra=r.dynCall_viiijiiiiiii=O.Yf)(n,o,a,u,l,p,m,g,b,$,T,k),ja=r.dynCall_viiiiiii=(n,o,a,u,l,p,m,g)=>(ja=r.dynCall_viiiiiii=O.Zf)(n,o,a,u,l,p,m,g),Ua=r.dynCall_viiiiiiiiiiiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee)=>(Ua=r.dynCall_viiiiiiiiiiiiiiii=O._f)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee),Na=r.dynCall_iiiiiiiij=(n,o,a,u,l,p,m,g,b)=>(Na=r.dynCall_iiiiiiiij=O.$f)(n,o,a,u,l,p,m,g,b),Va=r.dynCall_iiiiiiiii=(n,o,a,u,l,p,m,g,b)=>(Va=r.dynCall_iiiiiiiii=O.ag)(n,o,a,u,l,p,m,g,b),Wa=r.dynCall_iiiiijiiiii=(n,o,a,u,l,p,m,g,b,$,T)=>(Wa=r.dynCall_iiiiijiiiii=O.bg)(n,o,a,u,l,p,m,g,b,$,T),La=r.dynCall_iiiiiiiiiii=(n,o,a,u,l,p,m,g,b,$,T)=>(La=r.dynCall_iiiiiiiiiii=O.cg)(n,o,a,u,l,p,m,g,b,$,T),Ga=r.dynCall_vijjjiiiiij=(n,o,a,u,l,p,m,g,b,$,T)=>(Ga=r.dynCall_vijjjiiiiij=O.dg)(n,o,a,u,l,p,m,g,b,$,T),Ha=r.dynCall_viijj=(n,o,a,u,l)=>(Ha=r.dynCall_viijj=O.eg)(n,o,a,u,l),Fa=r.dynCall_fi=(n,o)=>(Fa=r.dynCall_fi=O.fg)(n,o),qa=r.dynCall_fii=(n,o,a)=>(qa=r.dynCall_fii=O.gg)(n,o,a),Ka=r.dynCall_di=(n,o)=>(Ka=r.dynCall_di=O.hg)(n,o),Ya=r.dynCall_dii=(n,o,a)=>(Ya=r.dynCall_dii=O.ig)(n,o,a),Za=r.dynCall_vijj=(n,o,a,u)=>(Za=r.dynCall_vijj=O.jg)(n,o,a,u),Qa=r.dynCall_viji=(n,o,a,u)=>(Qa=r.dynCall_viji=O.kg)(n,o,a,u),Xa=r.dynCall_viijiii=(n,o,a,u,l,p,m)=>(Xa=r.dynCall_viijiii=O.lg)(n,o,a,u,l,p,m),Ja=r.dynCall_iiiiiiiiii=(n,o,a,u,l,p,m,g,b,$)=>(Ja=r.dynCall_iiiiiiiiii=O.mg)(n,o,a,u,l,p,m,g,b,$),es=r.dynCall_viiij=(n,o,a,u,l)=>(es=r.dynCall_viiij=O.ng)(n,o,a,u,l),ts=r.dynCall_vijji=(n,o,a,u,l)=>(ts=r.dynCall_vijji=O.og)(n,o,a,u,l),rs=r.dynCall_viid=(n,o,a,u)=>(rs=r.dynCall_viid=O.pg)(n,o,a,u),ns=r.dynCall_vid=(n,o,a)=>(ns=r.dynCall_vid=O.qg)(n,o,a),is=r.dynCall_viffiii=(n,o,a,u,l,p,m)=>(is=r.dynCall_viffiii=O.rg)(n,o,a,u,l,p,m),os=r.dynCall_viifiii=(n,o,a,u,l,p,m)=>(os=r.dynCall_viifiii=O.sg)(n,o,a,u,l,p,m),as=r.dynCall_viiiiidiidi=(n,o,a,u,l,p,m,g,b,$,T)=>(as=r.dynCall_viiiiidiidi=O.tg)(n,o,a,u,l,p,m,g,b,$,T),ss=r.dynCall_viiiiiiiiidi=(n,o,a,u,l,p,m,g,b,$,T,k)=>(ss=r.dynCall_viiiiiiiiidi=O.ug)(n,o,a,u,l,p,m,g,b,$,T,k),us=r.dynCall_jiii=(n,o,a,u)=>(us=r.dynCall_jiii=O.vg)(n,o,a,u),ls=r.dynCall_vjiiiiii=(n,o,a,u,l,p,m,g)=>(ls=r.dynCall_vjiiiiii=O.wg)(n,o,a,u,l,p,m,g),ds=r.dynCall_vijjiiiii=(n,o,a,u,l,p,m,g,b)=>(ds=r.dynCall_vijjiiiii=O.xg)(n,o,a,u,l,p,m,g,b),cs=r.dynCall_viiiiiiiiiiiiiifi=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee)=>(cs=r.dynCall_viiiiiiiiiiiiiifi=O.yg)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee),ps=r.dynCall_ijii=(n,o,a,u)=>(ps=r.dynCall_ijii=O.zg)(n,o,a,u),fs=r.dynCall_vijjjjjjjjjjjjji=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K)=>(fs=r.dynCall_vijjjjjjjjjjjjji=O.Ag)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K),ms=r.dynCall_viiiji=(n,o,a,u,l,p)=>(ms=r.dynCall_viiiji=O.Bg)(n,o,a,u,l,p),hs=r.dynCall_vijjjiiji=(n,o,a,u,l,p,m,g,b)=>(hs=r.dynCall_vijjjiiji=O.Cg)(n,o,a,u,l,p,m,g,b),gs=r.dynCall_iiiijiiiiiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L)=>(gs=r.dynCall_iiiijiiiiiiiiii=O.Dg)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L),ys=r.dynCall_vj=(n,o)=>(ys=r.dynCall_vj=O.Eg)(n,o),bs=r.dynCall_jjj=(n,o,a)=>(bs=r.dynCall_jjj=O.Fg)(n,o,a),_s=r.dynCall_vfiii=(n,o,a,u,l)=>(_s=r.dynCall_vfiii=O.Gg)(n,o,a,u,l),ws=r.dynCall_viiiiff=(n,o,a,u,l,p,m)=>(ws=r.dynCall_viiiiff=O.Hg)(n,o,a,u,l,p,m),vs=r.dynCall_viiiiiff=(n,o,a,u,l,p,m,g)=>(vs=r.dynCall_viiiiiff=O.Ig)(n,o,a,u,l,p,m,g),$s=r.dynCall_viiff=(n,o,a,u,l)=>($s=r.dynCall_viiff=O.Jg)(n,o,a,u,l),xs=r.dynCall_viiiiiiiiifiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L)=>(xs=r.dynCall_viiiiiiiiifiiii=O.Kg)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L),Cs=r.dynCall_viiiiiiiijj=(n,o,a,u,l,p,m,g,b,$,T)=>(Cs=r.dynCall_viiiiiiiijj=O.Lg)(n,o,a,u,l,p,m,g,b,$,T),Ss=r.dynCall_iiiiiiiiiiiiiifii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee)=>(Ss=r.dynCall_iiiiiiiiiiiiiifii=O.Mg)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee),Ts=r.dynCall_viiiiiiiiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U)=>(Ts=r.dynCall_viiiiiiiiiiiii=O.Ng)(n,o,a,u,l,p,m,g,b,$,T,k,z,U),Is=r.dynCall_iiiiiiiiiiiiiiiiiiifii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce,Be)=>(Is=r.dynCall_iiiiiiiiiiiiiiiiiiifii=O.Og)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce,Be),As=r.dynCall_vijjiiiiiii=(n,o,a,u,l,p,m,g,b,$,T)=>(As=r.dynCall_vijjiiiiiii=O.Pg)(n,o,a,u,l,p,m,g,b,$,T),ks=r.dynCall_iiiijjj=(n,o,a,u,l,p,m)=>(ks=r.dynCall_iiiijjj=O.Qg)(n,o,a,u,l,p,m),Es=r.dynCall_iiijjj=(n,o,a,u,l,p)=>(Es=r.dynCall_iiijjj=O.Rg)(n,o,a,u,l,p),Ps=r.dynCall_fffffff=(n,o,a,u,l,p,m)=>(Ps=r.dynCall_fffffff=O.Sg)(n,o,a,u,l,p,m),zs=r.dynCall_viiiij=(n,o,a,u,l,p)=>(zs=r.dynCall_viiiij=O.Tg)(n,o,a,u,l,p),Os=r.dynCall_viiiiiijiifiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U)=>(Os=r.dynCall_viiiiiijiifiii=O.Ug)(n,o,a,u,l,p,m,g,b,$,T,k,z,U),Ds=r.dynCall_vjjjjjjffjifiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe)=>(Ds=r.dynCall_vjjjjjjffjifiiiiii=O.Vg)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe),Bs=r.dynCall_viiiiiiffjifiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee)=>(Bs=r.dynCall_viiiiiiffjifiiiii=O.Wg)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee),Ms=r.dynCall_viiiiiiffjfiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K)=>(Ms=r.dynCall_viiiiiiffjfiiiii=O.Xg)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K),Rs=r.dynCall_viiiiiiffjiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L)=>(Rs=r.dynCall_viiiiiiffjiiiii=O.Yg)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L),js=r.dynCall_vjjjjjjjjfffjifiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce)=>(js=r.dynCall_vjjjjjjjjfffjifiiiiii=O.Zg)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce),Us=r.dynCall_vjjjjjjfffifijiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le)=>(Us=r.dynCall_vjjjjjjfffifijiiiii=O._g)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le),Ns=r.dynCall_vjjjjjjfffifiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe)=>(Ns=r.dynCall_vjjjjjjfffifiiiiii=O.$g)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe),Vs=r.dynCall_vjjjjjjjjfffiiifiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce)=>(Vs=r.dynCall_vjjjjjjjjfffiiifiiiii=O.ah)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce),Ws=r.dynCall_vijiiiiiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z)=>(Ws=r.dynCall_vijiiiiiiiiii=O.bh)(n,o,a,u,l,p,m,g,b,$,T,k,z),Ls=r.dynCall_vijjfffiii=(n,o,a,u,l,p,m,g,b,$)=>(Ls=r.dynCall_vijjfffiii=O.ch)(n,o,a,u,l,p,m,g,b,$),Gs=r.dynCall_jiijjiif=(n,o,a,u,l,p,m,g)=>(Gs=r.dynCall_jiijjiif=O.dh)(n,o,a,u,l,p,m,g),Hs=r.dynCall_vijjjjjjifiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L)=>(Hs=r.dynCall_vijjjjjjifiiiii=O.eh)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L),Fs=r.dynCall_vjjjjjiiii=(n,o,a,u,l,p,m,g,b,$)=>(Fs=r.dynCall_vjjjjjiiii=O.fh)(n,o,a,u,l,p,m,g,b,$),qs=r.dynCall_vjjjjfiii=(n,o,a,u,l,p,m,g,b)=>(qs=r.dynCall_vjjjjfiii=O.gh)(n,o,a,u,l,p,m,g,b),Ks=r.dynCall_viiiiiijiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U)=>(Ks=r.dynCall_viiiiiijiiiiii=O.hh)(n,o,a,u,l,p,m,g,b,$,T,k,z,U),Ys=r.dynCall_vijjii=(n,o,a,u,l,p)=>(Ys=r.dynCall_vijjii=O.ih)(n,o,a,u,l,p),Zs=r.dynCall_viiiiijjiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z)=>(Zs=r.dynCall_viiiiijjiiiii=O.jh)(n,o,a,u,l,p,m,g,b,$,T,k,z),Qs=r.dynCall_iiiiiji=(n,o,a,u,l,p,m)=>(Qs=r.dynCall_iiiiiji=O.kh)(n,o,a,u,l,p,m),Xs=r.dynCall_iiiiji=(n,o,a,u,l,p)=>(Xs=r.dynCall_iiiiji=O.lh)(n,o,a,u,l,p),Js=r.dynCall_viiiiijiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z)=>(Js=r.dynCall_viiiiijiiiiii=O.mh)(n,o,a,u,l,p,m,g,b,$,T,k,z),eu=r.dynCall_iiiiiiiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k)=>(eu=r.dynCall_iiiiiiiiiiii=O.nh)(n,o,a,u,l,p,m,g,b,$,T,k),tu=r.dynCall_viiijiiiiii=(n,o,a,u,l,p,m,g,b,$,T)=>(tu=r.dynCall_viiijiiiiii=O.oh)(n,o,a,u,l,p,m,g,b,$,T),ru=r.dynCall_viiiijii=(n,o,a,u,l,p,m,g)=>(ru=r.dynCall_viiiijii=O.ph)(n,o,a,u,l,p,m,g),nu=r.dynCall_viijjiii=(n,o,a,u,l,p,m,g)=>(nu=r.dynCall_viijjiii=O.qh)(n,o,a,u,l,p,m,g),iu=r.dynCall_viiiiiijii=(n,o,a,u,l,p,m,g,b,$)=>(iu=r.dynCall_viiiiiijii=O.rh)(n,o,a,u,l,p,m,g,b,$),ou=r.dynCall_viiiiijjji=(n,o,a,u,l,p,m,g,b,$)=>(ou=r.dynCall_viiiiijjji=O.sh)(n,o,a,u,l,p,m,g,b,$),au=r.dynCall_vijiii=(n,o,a,u,l,p)=>(au=r.dynCall_vijiii=O.th)(n,o,a,u,l,p),su=r.dynCall_iiijiiii=(n,o,a,u,l,p,m,g)=>(su=r.dynCall_iiijiiii=O.uh)(n,o,a,u,l,p,m,g),uu=r.dynCall_viiiiiijjiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U)=>(uu=r.dynCall_viiiiiijjiiiii=O.vh)(n,o,a,u,l,p,m,g,b,$,T,k,z,U),lu=r.dynCall_viiiiiiijiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L)=>(lu=r.dynCall_viiiiiiijiiiiii=O.wh)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L),du=r.dynCall_viiiiiji=(n,o,a,u,l,p,m,g)=>(du=r.dynCall_viiiiiji=O.xh)(n,o,a,u,l,p,m,g),cu=r.dynCall_vif=(n,o,a)=>(cu=r.dynCall_vif=O.yh)(n,o,a),pu=r.dynCall_viif=(n,o,a,u)=>(pu=r.dynCall_viif=O.zh)(n,o,a,u),fu=r.dynCall_fiif=(n,o,a,u)=>(fu=r.dynCall_fiif=O.Ah)(n,o,a,u),mu=r.dynCall_viijjjiii=(n,o,a,u,l,p,m,g,b)=>(mu=r.dynCall_viijjjiii=O.Bh)(n,o,a,u,l,p,m,g,b),hu=r.dynCall_viiiiiifiii=(n,o,a,u,l,p,m,g,b,$,T)=>(hu=r.dynCall_viiiiiifiii=O.Ch)(n,o,a,u,l,p,m,g,b,$,T),gu=r.dynCall_viijji=(n,o,a,u,l,p)=>(gu=r.dynCall_viijji=O.Dh)(n,o,a,u,l,p),yu=r.dynCall_iiiiiiiiiiijijji=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K)=>(yu=r.dynCall_iiiiiiiiiiijijji=O.Eh)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K),bu=r.dynCall_vijii=(n,o,a,u,l)=>(bu=r.dynCall_vijii=O.Fh)(n,o,a,u,l),_u=r.dynCall_jiijjiii=(n,o,a,u,l,p,m,g)=>(_u=r.dynCall_jiijjiii=O.Gh)(n,o,a,u,l,p,m,g),wu=r.dynCall_viifiifijjjii=(n,o,a,u,l,p,m,g,b,$,T,k,z)=>(wu=r.dynCall_viifiifijjjii=O.Hh)(n,o,a,u,l,p,m,g,b,$,T,k,z),vu=r.dynCall_viiiiiiiiiiiiiiiiiiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce,Be,Ue,et)=>(vu=r.dynCall_viiiiiiiiiiiiiiiiiiiiiii=O.Ih)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce,Be,Ue,et),$u=r.dynCall_viiiiifiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z)=>($u=r.dynCall_viiiiifiiiiii=O.Jh)(n,o,a,u,l,p,m,g,b,$,T,k,z),xu=r.dynCall_vijjiiiiii=(n,o,a,u,l,p,m,g,b,$)=>(xu=r.dynCall_vijjiiiiii=O.Kh)(n,o,a,u,l,p,m,g,b,$),Cu=r.dynCall_vijiiiiiiijjii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U)=>(Cu=r.dynCall_vijiiiiiiijjii=O.Lh)(n,o,a,u,l,p,m,g,b,$,T,k,z,U),Su=r.dynCall_viiiiiiiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z)=>(Su=r.dynCall_viiiiiiiiiiii=O.Mh)(n,o,a,u,l,p,m,g,b,$,T,k,z),Tu=r.dynCall_viiiiiiiiiiiiiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le)=>(Tu=r.dynCall_viiiiiiiiiiiiiiiiii=O.Nh)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le),Iu=r.dynCall_viiiiiiiiiiiiiiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we)=>(Iu=r.dynCall_viiiiiiiiiiiiiiiiiii=O.Oh)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we),Au=r.dynCall_viiiiiiiiiiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K)=>(Au=r.dynCall_viiiiiiiiiiiiiii=O.Ph)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K),ku=r.dynCall_viiiiiiiiiiiiiiiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce)=>(ku=r.dynCall_viiiiiiiiiiiiiiiiiiii=O.Qh)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce),Eu=r.dynCall_viiiijjj=(n,o,a,u,l,p,m,g)=>(Eu=r.dynCall_viiiijjj=O.Rh)(n,o,a,u,l,p,m,g),Pu=r.dynCall_iiiiid=(n,o,a,u,l,p)=>(Pu=r.dynCall_iiiiid=O.Sh)(n,o,a,u,l,p),zu=r.dynCall_viiiiiiiiiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L)=>(zu=r.dynCall_viiiiiiiiiiiiii=O.Th)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L),Ou=r.dynCall_viiiiiiijjj=(n,o,a,u,l,p,m,g,b,$,T)=>(Ou=r.dynCall_viiiiiiijjj=O.Uh)(n,o,a,u,l,p,m,g,b,$,T),Du=r.dynCall_iiiiiiiiiiiiiiiiiiiifi=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce,Be)=>(Du=r.dynCall_iiiiiiiiiiiiiiiiiiiifi=O.Vh)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce,Be),Bu=r.dynCall_viiijiiiiiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L)=>(Bu=r.dynCall_viiijiiiiiiiiii=O.Wh)(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L),Mu=r.dynCall_viiiiif=(n,o,a,u,l,p,m)=>(Mu=r.dynCall_viiiiif=O.Xh)(n,o,a,u,l,p,m),Ru=r.dynCall_viiif=(n,o,a,u,l)=>(Ru=r.dynCall_viiif=O.Yh)(n,o,a,u,l),ju=r.dynCall_viiiiiiiiifi=(n,o,a,u,l,p,m,g,b,$,T,k)=>(ju=r.dynCall_viiiiiiiiifi=O.Zh)(n,o,a,u,l,p,m,g,b,$,T,k),Uu=r.dynCall_viiiiid=(n,o,a,u,l,p,m)=>(Uu=r.dynCall_viiiiid=O._h)(n,o,a,u,l,p,m),Nu=r.dynCall_viiid=(n,o,a,u,l)=>(Nu=r.dynCall_viiid=O.$h)(n,o,a,u,l),Vu=r.dynCall_viiijiiiii=(n,o,a,u,l,p,m,g,b,$)=>(Vu=r.dynCall_viiijiiiii=O.ai)(n,o,a,u,l,p,m,g,b,$),Wu=r.dynCall_jj=(n,o)=>(Wu=r.dynCall_jj=O.bi)(n,o),Lu=r.dynCall_iiiijii=(n,o,a,u,l,p,m)=>(Lu=r.dynCall_iiiijii=O.ci)(n,o,a,u,l,p,m),Gu=r.dynCall_iiijii=(n,o,a,u,l,p)=>(Gu=r.dynCall_iiijii=O.di)(n,o,a,u,l,p),Hu=r.dynCall_viiiiji=(n,o,a,u,l,p,m)=>(Hu=r.dynCall_viiiiji=O.ei)(n,o,a,u,l,p,m),Fu=r.dynCall_iijjji=(n,o,a,u,l,p)=>(Fu=r.dynCall_iijjji=O.fi)(n,o,a,u,l,p),qu=r.dynCall_viijii=(n,o,a,u,l,p)=>(qu=r.dynCall_viijii=O.gi)(n,o,a,u,l,p),Ku=r.dynCall_jiij=(n,o,a,u)=>(Ku=r.dynCall_jiij=O.hi)(n,o,a,u),Yu=r.dynCall_iijijjijiji=(n,o,a,u,l,p,m,g,b,$,T)=>(Yu=r.dynCall_iijijjijiji=O.ii)(n,o,a,u,l,p,m,g,b,$,T),Zu=r.dynCall_iijijji=(n,o,a,u,l,p,m)=>(Zu=r.dynCall_iijijji=O.ji)(n,o,a,u,l,p,m),Qu=r.dynCall_ijijji=(n,o,a,u,l,p)=>(Qu=r.dynCall_ijijji=O.ki)(n,o,a,u,l,p),Xu=r.dynCall_iiiiiiij=(n,o,a,u,l,p,m,g)=>(Xu=r.dynCall_iiiiiiij=O.li)(n,o,a,u,l,p,m,g),Ju=r.dynCall_viiijjiii=(n,o,a,u,l,p,m,g,b)=>(Ju=r.dynCall_viiijjiii=O.mi)(n,o,a,u,l,p,m,g,b),el=r.dynCall_iiiiijji=(n,o,a,u,l,p,m,g)=>(el=r.dynCall_iiiiijji=O.ni)(n,o,a,u,l,p,m,g),tl=r.dynCall_iiiifi=(n,o,a,u,l,p)=>(tl=r.dynCall_iiiifi=O.oi)(n,o,a,u,l,p),rl=r.dynCall_iiiiiiiiijii=(n,o,a,u,l,p,m,g,b,$,T,k)=>(rl=r.dynCall_iiiiiiiiijii=O.pi)(n,o,a,u,l,p,m,g,b,$,T,k),nl=r.dynCall_iiiijjii=(n,o,a,u,l,p,m,g)=>(nl=r.dynCall_iiiijjii=O.qi)(n,o,a,u,l,p,m,g),il=r.dynCall_iiiiiijjjii=(n,o,a,u,l,p,m,g,b,$,T)=>(il=r.dynCall_iiiiiijjjii=O.ri)(n,o,a,u,l,p,m,g,b,$,T),ol=r.dynCall_iiijiii=(n,o,a,u,l,p,m)=>(ol=r.dynCall_iiijiii=O.si)(n,o,a,u,l,p,m),al=r.dynCall_iiiiiiiijjjfi=(n,o,a,u,l,p,m,g,b,$,T,k,z)=>(al=r.dynCall_iiiiiiiijjjfi=O.ti)(n,o,a,u,l,p,m,g,b,$,T,k,z),sl=r.dynCall_iijiiii=(n,o,a,u,l,p,m)=>(sl=r.dynCall_iijiiii=O.ui)(n,o,a,u,l,p,m),ul=r.dynCall_iijjjii=(n,o,a,u,l,p,m)=>(ul=r.dynCall_iijjjii=O.vi)(n,o,a,u,l,p,m),ll=r.dynCall_jij=(n,o,a)=>(ll=r.dynCall_jij=O.wi)(n,o,a),dl=r.dynCall_iiji=(n,o,a,u)=>(dl=r.dynCall_iiji=O.xi)(n,o,a,u),cl=r.dynCall_iiif=(n,o,a,u)=>(cl=r.dynCall_iiif=O.yi)(n,o,a,u),pl=r.dynCall_vidi=(n,o,a,u)=>(pl=r.dynCall_vidi=O.zi)(n,o,a,u),fl=r.dynCall_viiijiji=(n,o,a,u,l,p,m,g)=>(fl=r.dynCall_viiijiji=O.Ai)(n,o,a,u,l,p,m,g),ml=r.dynCall_viiijij=(n,o,a,u,l,p,m)=>(ml=r.dynCall_viiijij=O.Bi)(n,o,a,u,l,p,m),hl=r.dynCall_vijjj=(n,o,a,u,l)=>(hl=r.dynCall_vijjj=O.Ci)(n,o,a,u,l),gl=r.dynCall_vjiij=(n,o,a,u,l)=>(gl=r.dynCall_vjiij=O.Di)(n,o,a,u,l),yl=r.dynCall_diii=(n,o,a,u)=>(yl=r.dynCall_diii=O.Ei)(n,o,a,u),bl=r.dynCall_diiiii=(n,o,a,u,l,p)=>(bl=r.dynCall_diiiii=O.Fi)(n,o,a,u,l,p),_l=r.dynCall_diiii=(n,o,a,u,l)=>(_l=r.dynCall_diiii=O.Gi)(n,o,a,u,l),wl=r.dynCall_ijiijji=(n,o,a,u,l,p,m)=>(wl=r.dynCall_ijiijji=O.Hi)(n,o,a,u,l,p,m),vl=r.dynCall_viiijjiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k)=>(vl=r.dynCall_viiijjiiiiii=O.Ii)(n,o,a,u,l,p,m,g,b,$,T,k),$l=r.dynCall_viijjijjjjiii=(n,o,a,u,l,p,m,g,b,$,T,k,z)=>($l=r.dynCall_viijjijjjjiii=O.Ji)(n,o,a,u,l,p,m,g,b,$,T,k,z),xl=r.dynCall_ijiii=(n,o,a,u,l)=>(xl=r.dynCall_ijiii=O.Ki)(n,o,a,u,l),Cl=r.dynCall_ijiiiiji=(n,o,a,u,l,p,m,g)=>(Cl=r.dynCall_ijiiiiji=O.Li)(n,o,a,u,l,p,m,g),Sl=r.dynCall_ijiij=(n,o,a,u,l)=>(Sl=r.dynCall_ijiij=O.Mi)(n,o,a,u,l),Tl=r.dynCall_iiiij=(n,o,a,u,l)=>(Tl=r.dynCall_iiiij=O.Ni)(n,o,a,u,l),Il=r.dynCall_viiijii=(n,o,a,u,l,p,m)=>(Il=r.dynCall_viiijii=O.Oi)(n,o,a,u,l,p,m),Al=r.dynCall_viijiiiiiiiiii=(n,o,a,u,l,p,m,g,b,$,T,k,z,U)=>(Al=r.dynCall_viijiiiiiiiiii=O.Pi)(n,o,a,u,l,p,m,g,b,$,T,k,z,U),kl=r.dynCall_fiiii=(n,o,a,u,l)=>(kl=r.dynCall_fiiii=O.Qi)(n,o,a,u,l),El=r.dynCall_jfi=(n,o,a)=>(El=r.dynCall_jfi=O.Ri)(n,o,a),Pl=r.dynCall_fiii=(n,o,a,u)=>(Pl=r.dynCall_fiii=O.Si)(n,o,a,u),zl=n=>(zl=O.Ti)(n),Ol=()=>(Ol=O.Ui)(),Dl=n=>(Dl=O.Vi)(n),Bl=()=>(Bl=O.Wi)();function Dg(n,o,a,u){var l=j();try{return ia(n,o,a,u)}catch(p){if(R(l),p!==p+0)throw p;N(1,0)}}function Bg(n,o,a){var u=j();try{return oa(n,o,a)}catch(l){if(R(u),l!==l+0)throw l;N(1,0)}}function Mg(n,o,a){var u=j();try{na(n,o,a)}catch(l){if(R(u),l!==l+0)throw l;N(1,0)}}function Rg(n,o){var a=j();try{return Fn(n,o)}catch(u){if(R(a),u!==u+0)throw u;N(1,0)}}function jg(n,o){var a=j();try{sa(n,o)}catch(u){if(R(a),u!==u+0)throw u;N(1,0)}}function Ug(n,o,a,u){var l=j();try{return da(n,o,a,u)}catch(p){if(R(l),p!==p+0)throw p;N(1,0)}}function Ng(n){var o=j();try{ua(n)}catch(a){if(R(o),a!==a+0)throw a;N(1,0)}}function Vg(n,o,a,u,l,p,m){var g=j();try{return aa(n,o,a,u,l,p,m)}catch(b){if(R(g),b!==b+0)throw b;N(1,0)}}function Wg(n,o,a,u,l,p){var m=j();try{return la(n,o,a,u,l,p)}catch(g){if(R(m),g!==g+0)throw g;N(1,0)}}function Lg(n,o,a,u,l){var p=j();try{return ca(n,o,a,u,l)}catch(m){if(R(p),m!==m+0)throw m;N(1,0)}}function Gg(n,o,a,u){var l=j();try{pa(n,o,a,u)}catch(p){if(R(l),p!==p+0)throw p;N(1,0)}}function Hg(n,o,a,u,l){var p=j();try{ma(n,o,a,u,l)}catch(m){if(R(p),m!==m+0)throw m;N(1,0)}}function Fg(n,o,a,u,l,p,m){var g=j();try{ha(n,o,a,u,l,p,m)}catch(b){if(R(g),b!==b+0)throw b;N(1,0)}}function qg(n,o,a,u,l,p,m){var g=j();try{ga(n,o,a,u,l,p,m)}catch(b){if(R(g),b!==b+0)throw b;N(1,0)}}function Kg(n,o,a,u,l,p){var m=j();try{fa(n,o,a,u,l,p)}catch(g){if(R(m),g!==g+0)throw g;N(1,0)}}function Yg(n,o,a,u,l,p,m,g,b,$,T,k){var z=j();try{ba(n,o,a,u,l,p,m,g,b,$,T,k)}catch(U){if(R(z),U!==U+0)throw U;N(1,0)}}function Zg(n,o,a){var u=j();try{return wa(n,o,a)}catch(l){if(R(u),l!==l+0)throw l;N(1,0)}}function Qg(n,o,a){var u=j();try{return va(n,o,a)}catch(l){if(R(u),l!==l+0)throw l;N(1,0)}}function Xg(n,o,a){var u=j();try{return $a(n,o,a)}catch(l){if(R(u),l!==l+0)throw l;N(1,0)}}function Jg(n,o,a){var u=j();try{return xa(n,o,a)}catch(l){if(R(u),l!==l+0)throw l;return N(1,0),0n}}function ey(n,o,a,u,l,p,m,g,b){var $=j();try{Sa(n,o,a,u,l,p,m,g,b)}catch(T){if(R($),T!==T+0)throw T;N(1,0)}}function ty(n){var o=j();try{return Ca(n)}catch(a){if(R(o),a!==a+0)throw a;N(1,0)}}function ry(n,o,a){var u=j();try{Oa(n,o,a)}catch(l){if(R(u),l!==l+0)throw l;N(1,0)}}function ny(n,o,a,u,l,p,m,g){var b=j();try{return Da(n,o,a,u,l,p,m,g)}catch($){if(R(b),$!==$+0)throw $;N(1,0)}}function iy(n,o,a,u,l){var p=j();try{ya(n,o,a,u,l)}catch(m){if(R(p),m!==m+0)throw m;N(1,0)}}function oy(n,o,a,u,l,p,m,g,b,$,T,k){var z=j();try{Ba(n,o,a,u,l,p,m,g,b,$,T,k)}catch(U){if(R(z),U!==U+0)throw U;N(1,0)}}function ay(n,o,a,u,l,p,m,g,b,$,T,k){var z=j();try{Ra(n,o,a,u,l,p,m,g,b,$,T,k)}catch(U){if(R(z),U!==U+0)throw U;N(1,0)}}function sy(n,o,a,u,l,p,m,g,b,$,T,k,z){var U=j();try{return Aa(n,o,a,u,l,p,m,g,b,$,T,k,z)}catch(L){if(R(U),L!==L+0)throw L;N(1,0)}}function uy(n,o,a,u,l,p,m,g,b,$,T){var k=j();try{ka(n,o,a,u,l,p,m,g,b,$,T)}catch(z){if(R(k),z!==z+0)throw z;N(1,0)}}function ly(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee){var oe=j();try{Ua(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee)}catch(le){if(R(oe),le!==le+0)throw le;N(1,0)}}function dy(n,o,a,u,l,p,m,g){var b=j();try{ja(n,o,a,u,l,p,m,g)}catch($){if(R(b),$!==$+0)throw $;N(1,0)}}function cy(n,o,a,u,l,p,m,g,b,$,T){var k=j();try{return Wa(n,o,a,u,l,p,m,g,b,$,T)}catch(z){if(R(k),z!==z+0)throw z;N(1,0)}}function py(n,o,a,u,l,p,m,g,b,$,T){var k=j();try{return La(n,o,a,u,l,p,m,g,b,$,T)}catch(z){if(R(k),z!==z+0)throw z;N(1,0)}}function fy(n,o,a,u,l,p,m,g,b,$,T){var k=j();try{Ga(n,o,a,u,l,p,m,g,b,$,T)}catch(z){if(R(k),z!==z+0)throw z;N(1,0)}}function my(n,o,a,u){var l=j();try{Ia(n,o,a,u)}catch(p){if(R(l),p!==p+0)throw p;N(1,0)}}function hy(n,o,a,u,l){var p=j();try{Ha(n,o,a,u,l)}catch(m){if(R(p),m!==m+0)throw m;N(1,0)}}function gy(n,o,a,u,l,p,m,g,b,$){var T=j();try{Ma(n,o,a,u,l,p,m,g,b,$)}catch(k){if(R(T),k!==k+0)throw k;N(1,0)}}function yy(n,o,a,u,l,p,m,g,b){var $=j();try{return Va(n,o,a,u,l,p,m,g,b)}catch(T){if(R($),T!==T+0)throw T;N(1,0)}}function by(n,o){var a=j();try{return Fa(n,o)}catch(u){if(R(a),u!==u+0)throw u;N(1,0)}}function _y(n,o){var a=j();try{return Ta(n,o)}catch(u){if(R(a),u!==u+0)throw u;return N(1,0),0n}}function wy(n,o){var a=j();try{return Ka(n,o)}catch(u){if(R(a),u!==u+0)throw u;N(1,0)}}function vy(n,o,a,u){var l=j();try{Za(n,o,a,u)}catch(p){if(R(l),p!==p+0)throw p;N(1,0)}}function $y(n,o,a,u,l,p,m){var g=j();try{Il(n,o,a,u,l,p,m)}catch(b){if(R(g),b!==b+0)throw b;N(1,0)}}function xy(n,o,a,u,l,p,m){var g=j();try{Xa(n,o,a,u,l,p,m)}catch(b){if(R(g),b!==b+0)throw b;N(1,0)}}function Cy(n,o,a,u,l,p,m,g){var b=j();try{ru(n,o,a,u,l,p,m,g)}catch($){if(R(b),$!==$+0)throw $;N(1,0)}}function Sy(n,o,a,u){var l=j();try{Qa(n,o,a,u)}catch(p){if(R(l),p!==p+0)throw p;N(1,0)}}function Ty(n,o,a,u,l,p,m,g,b){var $=j();try{return Na(n,o,a,u,l,p,m,g,b)}catch(T){if(R($),T!==T+0)throw T;N(1,0)}}function Iy(n,o,a,u,l,p){var m=j();try{qu(n,o,a,u,l,p)}catch(g){if(R(m),g!==g+0)throw g;N(1,0)}}function Ay(n,o,a,u,l,p,m,g,b,$){var T=j();try{return Ja(n,o,a,u,l,p,m,g,b,$)}catch(k){if(R(T),k!==k+0)throw k;N(1,0)}}function ky(n,o,a,u,l){var p=j();try{es(n,o,a,u,l)}catch(m){if(R(p),m!==m+0)throw m;N(1,0)}}function Ey(n,o,a,u,l){var p=j();try{ts(n,o,a,u,l)}catch(m){if(R(p),m!==m+0)throw m;N(1,0)}}function Py(n,o,a,u){var l=j();try{rs(n,o,a,u)}catch(p){if(R(l),p!==p+0)throw p;N(1,0)}}function zy(n,o,a){var u=j();try{ns(n,o,a)}catch(l){if(R(u),l!==l+0)throw l;N(1,0)}}function Oy(n,o,a,u,l,p,m){var g=j();try{is(n,o,a,u,l,p,m)}catch(b){if(R(g),b!==b+0)throw b;N(1,0)}}function Dy(n,o,a,u,l,p,m,g,b){var $=j();try{_a(n,o,a,u,l,p,m,g,b)}catch(T){if(R($),T!==T+0)throw T;N(1,0)}}function By(n,o,a,u,l,p,m){var g=j();try{os(n,o,a,u,l,p,m)}catch(b){if(R(g),b!==b+0)throw b;N(1,0)}}function My(n,o,a,u,l,p,m,g,b,$,T){var k=j();try{as(n,o,a,u,l,p,m,g,b,$,T)}catch(z){if(R(k),z!==z+0)throw z;N(1,0)}}function Ry(n,o,a,u){var l=j();try{return us(n,o,a,u)}catch(p){if(R(l),p!==p+0)throw p;return N(1,0),0n}}function jy(n,o,a,u,l,p,m,g){var b=j();try{ls(n,o,a,u,l,p,m,g)}catch($){if(R(b),$!==$+0)throw $;N(1,0)}}function Uy(n,o,a,u,l,p,m,g,b){var $=j();try{ds(n,o,a,u,l,p,m,g,b)}catch(T){if(R($),T!==T+0)throw T;N(1,0)}}function Ny(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee){var oe=j();try{cs(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee)}catch(le){if(R(oe),le!==le+0)throw le;N(1,0)}}function Vy(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K){var ee=j();try{fs(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K)}catch(oe){if(R(ee),oe!==oe+0)throw oe;N(1,0)}}function Wy(n,o,a,u,l,p){var m=j();try{ms(n,o,a,u,l,p)}catch(g){if(R(m),g!==g+0)throw g;N(1,0)}}function Ly(n,o,a,u,l,p,m,g,b){var $=j();try{hs(n,o,a,u,l,p,m,g,b)}catch(T){if(R($),T!==T+0)throw T;N(1,0)}}function Gy(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L){var K=j();try{return gs(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L)}catch(ee){if(R(K),ee!==ee+0)throw ee;N(1,0)}}function Hy(n,o){var a=j();try{ys(n,o)}catch(u){if(R(a),u!==u+0)throw u;N(1,0)}}function Fy(n,o,a){var u=j();try{return bs(n,o,a)}catch(l){if(R(u),l!==l+0)throw l;return N(1,0),0n}}function qy(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L){var K=j();try{xs(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L)}catch(ee){if(R(K),ee!==ee+0)throw ee;N(1,0)}}function Ky(n,o,a,u,l){var p=j();try{_s(n,o,a,u,l)}catch(m){if(R(p),m!==m+0)throw m;N(1,0)}}function Yy(n,o,a,u,l,p,m){var g=j();try{ws(n,o,a,u,l,p,m)}catch(b){if(R(g),b!==b+0)throw b;N(1,0)}}function Zy(n,o,a,u,l){var p=j();try{$s(n,o,a,u,l)}catch(m){if(R(p),m!==m+0)throw m;N(1,0)}}function Qy(n,o,a,u,l,p,m,g){var b=j();try{vs(n,o,a,u,l,p,m,g)}catch($){if(R(b),$!==$+0)throw $;N(1,0)}}function Xy(n,o,a,u,l,p,m,g,b,$,T){var k=j();try{Cs(n,o,a,u,l,p,m,g,b,$,T)}catch(z){if(R(k),z!==z+0)throw z;N(1,0)}}function Jy(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee){var oe=j();try{return Ss(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee)}catch(le){if(R(oe),le!==le+0)throw le;N(1,0)}}function eb(n,o,a,u,l,p,m,g,b,$,T,k,z,U){var L=j();try{Ts(n,o,a,u,l,p,m,g,b,$,T,k,z,U)}catch(K){if(R(L),K!==K+0)throw K;N(1,0)}}function tb(n,o){var a=j();try{return Ea(n,o)}catch(u){if(R(a),u!==u+0)throw u;N(1,0)}}function rb(n,o,a,u,l){var p=j();try{return kl(n,o,a,u,l)}catch(m){if(R(p),m!==m+0)throw m;N(1,0)}}function nb(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce,Be){var Ue=j();try{return Is(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce,Be)}catch(et){if(R(Ue),et!==et+0)throw et;N(1,0)}}function ib(n,o,a,u,l,p,m,g,b,$,T){var k=j();try{As(n,o,a,u,l,p,m,g,b,$,T)}catch(z){if(R(k),z!==z+0)throw z;N(1,0)}}function ob(n,o,a,u,l,p,m){var g=j();try{return ks(n,o,a,u,l,p,m)}catch(b){if(R(g),b!==b+0)throw b;N(1,0)}}function ab(n,o,a,u,l,p){var m=j();try{return Es(n,o,a,u,l,p)}catch(g){if(R(m),g!==g+0)throw g;N(1,0)}}function sb(n,o,a,u,l,p){var m=j();try{zs(n,o,a,u,l,p)}catch(g){if(R(m),g!==g+0)throw g;N(1,0)}}function ub(n,o,a,u,l,p,m,g,b,$,T,k,z,U){var L=j();try{Os(n,o,a,u,l,p,m,g,b,$,T,k,z,U)}catch(K){if(R(L),K!==K+0)throw K;N(1,0)}}function lb(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe){var le=j();try{Ds(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe)}catch(we){if(R(le),we!==we+0)throw we;N(1,0)}}function db(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee){var oe=j();try{Bs(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee)}catch(le){if(R(oe),le!==le+0)throw le;N(1,0)}}function cb(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K){var ee=j();try{Ms(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K)}catch(oe){if(R(ee),oe!==oe+0)throw oe;N(1,0)}}function pb(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L){var K=j();try{Rs(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L)}catch(ee){if(R(K),ee!==ee+0)throw ee;N(1,0)}}function fb(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce){var Be=j();try{js(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce)}catch(Ue){if(R(Be),Ue!==Ue+0)throw Ue;N(1,0)}}function mb(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le){var we=j();try{Us(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le)}catch(Ce){if(R(we),Ce!==Ce+0)throw Ce;N(1,0)}}function hb(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe){var le=j();try{Ns(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe)}catch(we){if(R(le),we!==we+0)throw we;N(1,0)}}function gb(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce){var Be=j();try{Vs(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce)}catch(Ue){if(R(Be),Ue!==Ue+0)throw Ue;N(1,0)}}function yb(n,o,a,u,l,p,m,g,b,$,T,k,z){var U=j();try{Ws(n,o,a,u,l,p,m,g,b,$,T,k,z)}catch(L){if(R(U),L!==L+0)throw L;N(1,0)}}function bb(n,o,a,u,l,p,m,g,b,$){var T=j();try{Ls(n,o,a,u,l,p,m,g,b,$)}catch(k){if(R(T),k!==k+0)throw k;N(1,0)}}function _b(n,o,a,u,l,p,m,g){var b=j();try{return Gs(n,o,a,u,l,p,m,g)}catch($){if(R(b),$!==$+0)throw $;return N(1,0),0n}}function wb(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L){var K=j();try{Hs(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L)}catch(ee){if(R(K),ee!==ee+0)throw ee;N(1,0)}}function vb(n,o,a,u,l,p,m,g,b,$){var T=j();try{Fs(n,o,a,u,l,p,m,g,b,$)}catch(k){if(R(T),k!==k+0)throw k;N(1,0)}}function $b(n,o,a,u,l,p,m,g,b){var $=j();try{qs(n,o,a,u,l,p,m,g,b)}catch(T){if(R($),T!==T+0)throw T;N(1,0)}}function xb(n,o,a,u,l,p,m){var g=j();try{return Ps(n,o,a,u,l,p,m)}catch(b){if(R(g),b!==b+0)throw b;N(1,0)}}function Cb(n,o,a){var u=j();try{return El(n,o,a)}catch(l){if(R(u),l!==l+0)throw l;return N(1,0),0n}}function Sb(n,o,a,u,l,p,m,g,b,$,T,k,z,U){var L=j();try{Ks(n,o,a,u,l,p,m,g,b,$,T,k,z,U)}catch(K){if(R(L),K!==K+0)throw K;N(1,0)}}function Tb(n,o,a,u,l,p,m,g,b,$,T,k,z){var U=j();try{Zs(n,o,a,u,l,p,m,g,b,$,T,k,z)}catch(L){if(R(U),L!==L+0)throw L;N(1,0)}}function Ib(n,o,a,u,l,p,m){var g=j();try{return Qs(n,o,a,u,l,p,m)}catch(b){if(R(g),b!==b+0)throw b;N(1,0)}}function Ab(n,o,a,u,l,p){var m=j();try{return Xs(n,o,a,u,l,p)}catch(g){if(R(m),g!==g+0)throw g;N(1,0)}}function kb(n,o,a,u,l,p,m,g,b,$,T,k,z){var U=j();try{Js(n,o,a,u,l,p,m,g,b,$,T,k,z)}catch(L){if(R(U),L!==L+0)throw L;N(1,0)}}function Eb(n,o,a,u,l,p,m,g,b,$,T,k){var z=j();try{return eu(n,o,a,u,l,p,m,g,b,$,T,k)}catch(U){if(R(z),U!==U+0)throw U;N(1,0)}}function Pb(n,o,a,u,l,p){var m=j();try{Ys(n,o,a,u,l,p)}catch(g){if(R(m),g!==g+0)throw g;N(1,0)}}function zb(n,o,a,u,l,p,m,g,b,$,T){var k=j();try{tu(n,o,a,u,l,p,m,g,b,$,T)}catch(z){if(R(k),z!==z+0)throw z;N(1,0)}}function Ob(n,o,a,u,l,p,m,g){var b=j();try{nu(n,o,a,u,l,p,m,g)}catch($){if(R(b),$!==$+0)throw $;N(1,0)}}function Db(n,o,a,u,l,p,m,g,b,$){var T=j();try{iu(n,o,a,u,l,p,m,g,b,$)}catch(k){if(R(T),k!==k+0)throw k;N(1,0)}}function Bb(n,o,a,u){var l=j();try{return ps(n,o,a,u)}catch(p){if(R(l),p!==p+0)throw p;N(1,0)}}function Mb(n,o,a,u,l,p,m,g,b,$){var T=j();try{ou(n,o,a,u,l,p,m,g,b,$)}catch(k){if(R(T),k!==k+0)throw k;N(1,0)}}function Rb(n,o,a,u,l,p){var m=j();try{au(n,o,a,u,l,p)}catch(g){if(R(m),g!==g+0)throw g;N(1,0)}}function jb(n,o,a,u,l,p,m,g){var b=j();try{return su(n,o,a,u,l,p,m,g)}catch($){if(R(b),$!==$+0)throw $;N(1,0)}}function Ub(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L){var K=j();try{zu(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L)}catch(ee){if(R(K),ee!==ee+0)throw ee;N(1,0)}}function Nb(n,o,a,u,l,p,m,g,b,$,T,k,z,U){var L=j();try{uu(n,o,a,u,l,p,m,g,b,$,T,k,z,U)}catch(K){if(R(L),K!==K+0)throw K;N(1,0)}}function Vb(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L){var K=j();try{lu(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L)}catch(ee){if(R(K),ee!==ee+0)throw ee;N(1,0)}}function Wb(n,o,a,u,l,p,m,g){var b=j();try{du(n,o,a,u,l,p,m,g)}catch($){if(R(b),$!==$+0)throw $;N(1,0)}}function Lb(n,o,a){var u=j();try{cu(n,o,a)}catch(l){if(R(u),l!==l+0)throw l;N(1,0)}}function Gb(n,o,a,u){var l=j();try{return fu(n,o,a,u)}catch(p){if(R(l),p!==p+0)throw p;N(1,0)}}function Hb(n,o,a){var u=j();try{return Ya(n,o,a)}catch(l){if(R(u),l!==l+0)throw l;N(1,0)}}function Fb(n,o,a,u,l,p,m,g,b){var $=j();try{mu(n,o,a,u,l,p,m,g,b)}catch(T){if(R($),T!==T+0)throw T;N(1,0)}}function qb(n,o,a,u,l,p,m,g,b,$,T){var k=j();try{hu(n,o,a,u,l,p,m,g,b,$,T)}catch(z){if(R(k),z!==z+0)throw z;N(1,0)}}function Kb(n,o,a,u,l,p){var m=j();try{gu(n,o,a,u,l,p)}catch(g){if(R(m),g!==g+0)throw g;N(1,0)}}function Yb(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K){var ee=j();try{return yu(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K)}catch(oe){if(R(ee),oe!==oe+0)throw oe;N(1,0)}}function Zb(n,o,a,u,l){var p=j();try{bu(n,o,a,u,l)}catch(m){if(R(p),m!==m+0)throw m;N(1,0)}}function Qb(n,o,a,u,l,p,m,g){var b=j();try{return _u(n,o,a,u,l,p,m,g)}catch($){if(R(b),$!==$+0)throw $;return N(1,0),0n}}function Xb(n,o,a,u,l,p,m,g,b,$,T,k,z){var U=j();try{wu(n,o,a,u,l,p,m,g,b,$,T,k,z)}catch(L){if(R(U),L!==L+0)throw L;N(1,0)}}function Jb(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce,Be,Ue,et){var dw=j();try{vu(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce,Be,Ue,et)}catch(qn){if(R(dw),qn!==qn+0)throw qn;N(1,0)}}function e_(n,o,a,u,l,p,m,g,b,$,T,k,z){var U=j();try{$u(n,o,a,u,l,p,m,g,b,$,T,k,z)}catch(L){if(R(U),L!==L+0)throw L;N(1,0)}}function t_(n,o,a,u,l,p,m,g,b,$){var T=j();try{xu(n,o,a,u,l,p,m,g,b,$)}catch(k){if(R(T),k!==k+0)throw k;N(1,0)}}function r_(n,o,a,u,l,p,m,g,b,$,T,k,z,U){var L=j();try{Cu(n,o,a,u,l,p,m,g,b,$,T,k,z,U)}catch(K){if(R(L),K!==K+0)throw K;N(1,0)}}function n_(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce){var Be=j();try{ku(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce)}catch(Ue){if(R(Be),Ue!==Ue+0)throw Ue;N(1,0)}}function i_(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we){var Ce=j();try{Iu(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we)}catch(Be){if(R(Ce),Be!==Be+0)throw Be;N(1,0)}}function o_(n,o,a,u,l,p,m,g,b,$,T,k,z){var U=j();try{Su(n,o,a,u,l,p,m,g,b,$,T,k,z)}catch(L){if(R(U),L!==L+0)throw L;N(1,0)}}function a_(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le){var we=j();try{Tu(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le)}catch(Ce){if(R(we),Ce!==Ce+0)throw Ce;N(1,0)}}function s_(n,o,a,u,l,p,m,g){var b=j();try{Eu(n,o,a,u,l,p,m,g)}catch($){if(R(b),$!==$+0)throw $;N(1,0)}}function u_(n,o,a,u,l,p,m,g,b,$,T){var k=j();try{Ou(n,o,a,u,l,p,m,g,b,$,T)}catch(z){if(R(k),z!==z+0)throw z;N(1,0)}}function l_(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce,Be){var Ue=j();try{return Du(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K,ee,oe,le,we,Ce,Be)}catch(et){if(R(Ue),et!==et+0)throw et;N(1,0)}}function d_(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L){var K=j();try{Bu(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L)}catch(ee){if(R(K),ee!==ee+0)throw ee;N(1,0)}}function c_(n,o,a,u,l,p,m){var g=j();try{Mu(n,o,a,u,l,p,m)}catch(b){if(R(g),b!==b+0)throw b;N(1,0)}}function p_(n,o,a,u,l){var p=j();try{Ru(n,o,a,u,l)}catch(m){if(R(p),m!==m+0)throw m;N(1,0)}}function f_(n,o,a,u,l,p,m,g,b,$,T,k){var z=j();try{ju(n,o,a,u,l,p,m,g,b,$,T,k)}catch(U){if(R(z),U!==U+0)throw U;N(1,0)}}function m_(n,o,a,u,l,p,m){var g=j();try{Uu(n,o,a,u,l,p,m)}catch(b){if(R(g),b!==b+0)throw b;N(1,0)}}function h_(n,o,a,u,l){var p=j();try{Nu(n,o,a,u,l)}catch(m){if(R(p),m!==m+0)throw m;N(1,0)}}function g_(n,o,a,u,l,p,m,g,b,$,T,k){var z=j();try{ss(n,o,a,u,l,p,m,g,b,$,T,k)}catch(U){if(R(z),U!==U+0)throw U;N(1,0)}}function y_(n,o,a,u,l,p,m,g,b,$){var T=j();try{Vu(n,o,a,u,l,p,m,g,b,$)}catch(k){if(R(T),k!==k+0)throw k;N(1,0)}}function b_(n,o,a,u,l,p,m,g,b,$,T,k,z,U){var L=j();try{Al(n,o,a,u,l,p,m,g,b,$,T,k,z,U)}catch(K){if(R(L),K!==K+0)throw K;N(1,0)}}function __(n,o,a,u,l,p){var m=j();try{return Gu(n,o,a,u,l,p)}catch(g){if(R(m),g!==g+0)throw g;N(1,0)}}function w_(n,o,a,u){var l=j();try{return Ku(n,o,a,u)}catch(p){if(R(l),p!==p+0)throw p;return N(1,0),0n}}function v_(n,o,a,u,l,p,m){var g=j();try{Hu(n,o,a,u,l,p,m)}catch(b){if(R(g),b!==b+0)throw b;N(1,0)}}function $_(n,o,a,u,l,p){var m=j();try{return Fu(n,o,a,u,l,p)}catch(g){if(R(m),g!==g+0)throw g;N(1,0)}}function x_(n,o,a,u,l,p,m,g,b,$,T){var k=j();try{return Yu(n,o,a,u,l,p,m,g,b,$,T)}catch(z){if(R(k),z!==z+0)throw z;N(1,0)}}function C_(n,o,a,u,l,p,m){var g=j();try{return Zu(n,o,a,u,l,p,m)}catch(b){if(R(g),b!==b+0)throw b;N(1,0)}}function S_(n,o,a,u,l,p){var m=j();try{return Qu(n,o,a,u,l,p)}catch(g){if(R(m),g!==g+0)throw g;N(1,0)}}function T_(n,o){var a=j();try{return Wu(n,o)}catch(u){if(R(a),u!==u+0)throw u;return N(1,0),0n}}function I_(n,o,a,u,l,p,m){var g=j();try{return Lu(n,o,a,u,l,p,m)}catch(b){if(R(g),b!==b+0)throw b;N(1,0)}}function A_(n,o,a,u,l,p,m,g){var b=j();try{return Xu(n,o,a,u,l,p,m,g)}catch($){if(R(b),$!==$+0)throw $;N(1,0)}}function k_(n,o,a,u,l,p,m,g,b){var $=j();try{Ju(n,o,a,u,l,p,m,g,b)}catch(T){if(R($),T!==T+0)throw T;N(1,0)}}function E_(n,o,a,u){var l=j();try{pu(n,o,a,u)}catch(p){if(R(l),p!==p+0)throw p;N(1,0)}}function P_(n,o,a,u,l,p,m,g){var b=j();try{return el(n,o,a,u,l,p,m,g)}catch($){if(R(b),$!==$+0)throw $;N(1,0)}}function z_(n,o,a,u,l,p){var m=j();try{return tl(n,o,a,u,l,p)}catch(g){if(R(m),g!==g+0)throw g;N(1,0)}}function O_(n,o,a,u,l,p,m,g,b,$,T,k){var z=j();try{return rl(n,o,a,u,l,p,m,g,b,$,T,k)}catch(U){if(R(z),U!==U+0)throw U;N(1,0)}}function D_(n,o,a,u,l,p,m,g){var b=j();try{return nl(n,o,a,u,l,p,m,g)}catch($){if(R(b),$!==$+0)throw $;N(1,0)}}function B_(n,o,a,u,l,p,m,g,b,$,T){var k=j();try{return il(n,o,a,u,l,p,m,g,b,$,T)}catch(z){if(R(k),z!==z+0)throw z;N(1,0)}}function M_(n,o,a,u,l,p,m){var g=j();try{return ol(n,o,a,u,l,p,m)}catch(b){if(R(g),b!==b+0)throw b;N(1,0)}}function R_(n,o,a,u,l,p,m,g,b,$,T,k,z){var U=j();try{return al(n,o,a,u,l,p,m,g,b,$,T,k,z)}catch(L){if(R(U),L!==L+0)throw L;N(1,0)}}function j_(n,o,a,u,l,p,m){var g=j();try{return sl(n,o,a,u,l,p,m)}catch(b){if(R(g),b!==b+0)throw b;N(1,0)}}function U_(n,o,a,u,l,p,m){var g=j();try{return ul(n,o,a,u,l,p,m)}catch(b){if(R(g),b!==b+0)throw b;N(1,0)}}function N_(n,o,a){var u=j();try{return ll(n,o,a)}catch(l){if(R(u),l!==l+0)throw l;return N(1,0),0n}}function V_(n,o,a,u){var l=j();try{return dl(n,o,a,u)}catch(p){if(R(l),p!==p+0)throw p;N(1,0)}}function W_(n,o,a,u){var l=j();try{pl(n,o,a,u)}catch(p){if(R(l),p!==p+0)throw p;N(1,0)}}function L_(n,o,a,u,l,p,m,g){var b=j();try{fl(n,o,a,u,l,p,m,g)}catch($){if(R(b),$!==$+0)throw $;N(1,0)}}function G_(n,o,a,u,l,p,m){var g=j();try{ml(n,o,a,u,l,p,m)}catch(b){if(R(g),b!==b+0)throw b;N(1,0)}}function H_(n,o,a,u,l){var p=j();try{hl(n,o,a,u,l)}catch(m){if(R(p),m!==m+0)throw m;N(1,0)}}function F_(n,o,a,u){var l=j();try{return cl(n,o,a,u)}catch(p){if(R(l),p!==p+0)throw p;N(1,0)}}function q_(n,o,a,u){var l=j();try{return Pl(n,o,a,u)}catch(p){if(R(l),p!==p+0)throw p;N(1,0)}}function K_(n,o,a,u,l){var p=j();try{gl(n,o,a,u,l)}catch(m){if(R(p),m!==m+0)throw m;N(1,0)}}function Y_(n,o,a,u){var l=j();try{return yl(n,o,a,u)}catch(p){if(R(l),p!==p+0)throw p;N(1,0)}}function Z_(n,o,a,u,l,p){var m=j();try{return bl(n,o,a,u,l,p)}catch(g){if(R(m),g!==g+0)throw g;N(1,0)}}function Q_(n,o,a,u,l){var p=j();try{return _l(n,o,a,u,l)}catch(m){if(R(p),m!==m+0)throw m;N(1,0)}}function X_(n,o,a,u,l,p,m){var g=j();try{return wl(n,o,a,u,l,p,m)}catch(b){if(R(g),b!==b+0)throw b;N(1,0)}}function J_(n,o,a,u,l,p,m,g,b,$,T,k){var z=j();try{vl(n,o,a,u,l,p,m,g,b,$,T,k)}catch(U){if(R(z),U!==U+0)throw U;N(1,0)}}function ew(n,o,a,u,l){var p=j();try{return xl(n,o,a,u,l)}catch(m){if(R(p),m!==m+0)throw m;N(1,0)}}function tw(n,o,a,u,l,p,m,g,b,$,T,k,z){var U=j();try{$l(n,o,a,u,l,p,m,g,b,$,T,k,z)}catch(L){if(R(U),L!==L+0)throw L;N(1,0)}}function rw(n,o,a,u,l,p,m,g){var b=j();try{return Cl(n,o,a,u,l,p,m,g)}catch($){if(R(b),$!==$+0)throw $;N(1,0)}}function nw(n,o,a,u,l){var p=j();try{return Tl(n,o,a,u,l)}catch(m){if(R(p),m!==m+0)throw m;N(1,0)}}function iw(n,o,a,u,l){var p=j();try{return Sl(n,o,a,u,l)}catch(m){if(R(p),m!==m+0)throw m;N(1,0)}}function ow(n){var o=j();try{return za(n)}catch(a){if(R(o),a!==a+0)throw a;return N(1,0),0n}}function aw(n,o,a,u,l,p){var m=j();try{return Pa(n,o,a,u,l,p)}catch(g){if(R(m),g!==g+0)throw g;N(1,0)}}function sw(n,o,a,u,l,p){var m=j();try{return Pu(n,o,a,u,l,p)}catch(g){if(R(m),g!==g+0)throw g;N(1,0)}}function uw(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K){var ee=j();try{Au(n,o,a,u,l,p,m,g,b,$,T,k,z,U,L,K)}catch(oe){if(R(ee),oe!==oe+0)throw oe;N(1,0)}}function lw(n,o,a){var u=j();try{return qa(n,o,a)}catch(l){if(R(u),l!==l+0)throw l;N(1,0)}}return r.stackSave=()=>j(),r.stackRestore=n=>R(n),r.stackAlloc=n=>Hn(n),r.setValue=function(n,o,a="i8"){switch(a.endsWith("*")&&(a="*"),a){case"i1":case"i8":ie()[n>>>0]=o;break;case"i16":Me()[n>>>1>>>0]=o;break;case"i32":H()[n>>>2>>>0]=o;break;case"i64":Q[n>>>3]=BigInt(o);break;case"float":se()[n>>>2>>>0]=o;break;case"double":ve()[n>>>3>>>0]=o;break;case"*":q()[n>>>2>>>0]=o;break;default:yt(`invalid type for setValue: ${a}`)}},r.getValue=function(n,o="i8"){switch(o.endsWith("*")&&(o="*"),o){case"i1":case"i8":return ie()[n>>>0];case"i16":return Me()[n>>>1>>>0];case"i32":return H()[n>>>2>>>0];case"i64":return Q[n>>>3];case"float":return se()[n>>>2>>>0];case"double":return ve()[n>>>3>>>0];case"*":return q()[n>>>2>>>0];default:yt(`invalid type for getValue: ${o}`)}},r.UTF8ToString=Re,r.stringToUTF8=Gt,r.lengthBytesUTF8=ao,function n(){if(0<zt)Jt=n;else if(f)t(r),at();else{for(;0<In.length;)In.shift()(r);0<zt?Jt=n:(r.calledRun=!0,de||(at(),t(r)))}}(),r.PTR_SIZE=4,s}),bw=hd,_w=globalThis.self?.name?.startsWith("em-pthread");_w&&hd()});var wd,ww,Ye,vd,ii,vw,$w,$d,xw,bd,xd,_d,Cd,Dr=X(()=>{"use strict";Or();wd=!1||typeof location>"u"?void 0:location.origin,ww=()=>{if(!!1)return import.meta.url?.startsWith("file:")?new URL(new URL("ort.webgpu.bundle.min.mjs",import.meta.url).href,wd).href:import.meta.url},Ye=ww(),vd=()=>{if(Ye&&!Ye.startsWith("blob:"))return Ye.substring(0,Ye.lastIndexOf("/")+1)},ii=(e,t)=>{try{let i=t??Ye;return(i?new URL(e,i):new URL(e)).origin===wd}catch{return!1}},vw=(e,t)=>{let i=t??Ye;try{return(i?new URL(e,i):new URL(e)).href}catch{return}},$w=(e,t)=>`${t??"./"}${e}`,$d=async e=>{let i=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(i)},xw=async e=>(await import(/*webpackIgnore:true*/e)).default,bd=(md(),Ar(fd)).default,xd=async()=>{if(!Ye)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(ii(Ye))return[void 0,bd()];let e=await $d(Ye);return[e,bd(e)]},_d=(yd(),Ar(gd)).default,Cd=async(e,t,i)=>{if(!e&&!t&&_d&&Ye&&ii(Ye))return[void 0,_d];{let r="ort-wasm-simd-threaded.jsep.mjs",s=e??vw(r,t),d=!!1&&i&&s&&!ii(s,t),c=d?await $d(s):s??$w(r,t);return[d?c:void 0,await xw(c)]}}});var oi,ai,Lr,Sd,Cw,Sw,Br,De,It=X(()=>{"use strict";Dr();ai=!1,Lr=!1,Sd=!1,Cw=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Sw=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Br=async e=>{if(ai)return Promise.resolve();if(Lr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Sd)throw new Error("previous call to 'initializeWebAssembly()' failed.");Lr=!0;let t=e.initTimeout,i=e.numThreads;if(!Sw())throw new Error("WebAssembly SIMD is not supported in the current environment.");let r=Cw();i>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+i+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=i=1);let s=e.wasmPaths,d=typeof s=="string"?s:void 0,c=s?.mjs,f=c?.href??c,h=s?.wasm,y=h?.href??h,_=e.wasmBinary,[w,v]=await Cd(f,d,i>1),C=!1,x=[];if(t>0&&x.push(new Promise(S=>{setTimeout(()=>{C=!0,S()},t)})),x.push(new Promise((S,E)=>{let A={numThreads:i};if(_)A.wasmBinary=_;else if(y||d)A.locateFile=I=>y??d+I;else if(f&&f.indexOf("blob:")!==0)A.locateFile=I=>new URL(I,f).href;else if(w){let I=vd();I&&(A.locateFile=P=>I+P)}v(A).then(I=>{Lr=!1,ai=!0,oi=I,S(),w&&URL.revokeObjectURL(w)},I=>{Lr=!1,Sd=!0,E(I)})})),await Promise.race(x),C)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},De=()=>{if(ai&&oi)return oi;throw new Error("WebAssembly is not initialized yet.")}});var Ne,ar,$e,Gr=X(()=>{"use strict";It();Ne=(e,t)=>{let i=De(),r=i.lengthBytesUTF8(e)+1,s=i._malloc(r);return i.stringToUTF8(e,s,r),t.push(s),s},ar=(e,t,i,r)=>{if(typeof e=="object"&&e!==null){if(i.has(e))throw new Error("Circular reference in options");i.add(e)}Object.entries(e).forEach(([s,d])=>{let c=t?t+s:s;if(typeof d=="object")ar(d,c+".",i,r);else if(typeof d=="string"||typeof d=="number")r(c,d.toString());else if(typeof d=="boolean")r(c,d?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof d}`)})},$e=e=>{let t=De(),i=t.stackSave();try{let r=t.PTR_SIZE,s=t.stackAlloc(2*r);t._OrtGetLastError(s,s+r);let d=Number(t.getValue(s,r===4?"i32":"i64")),c=t.getValue(s+r,"*"),f=c?t.UTF8ToString(c):"";throw new Error(`${e} ERROR_CODE: ${d}, ERROR_MESSAGE: ${f}`)}finally{t.stackRestore(i)}}});var Td,Id=X(()=>{"use strict";It();Gr();Td=e=>{let t=De(),i=0,r=[],s=e||{};try{if(e?.logSeverityLevel===void 0)s.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)s.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(s.terminate=!1);let d=0;return e?.tag!==void 0&&(d=Ne(e.tag,r)),i=t._OrtCreateRunOptions(s.logSeverityLevel,s.logVerbosityLevel,!!s.terminate,d),i===0&&$e("Can't create run options."),e?.extra!==void 0&&ar(e.extra,"",new WeakSet,(c,f)=>{let h=Ne(c,r),y=Ne(f,r);t._OrtAddRunConfigEntry(i,h,y)!==0&&$e(`Can't set a run config entry: ${c} - ${f}.`)}),[i,r]}catch(d){throw i!==0&&t._OrtReleaseRunOptions(i),r.forEach(c=>t._free(c)),d}}});var Tw,Iw,Aw,kw,Ad,kd=X(()=>{"use strict";It();Gr();Tw=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Iw=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Aw=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(i=>(typeof i=="string"?i:i.name)==="webgpu")&&(e.enableMemPattern=!1)},kw=(e,t,i)=>{for(let r of t){let s=typeof r=="string"?r:r.name;switch(s){case"webnn":if(s="WEBNN",typeof r!="string"){let f=r?.deviceType;if(f){let h=Ne("deviceType",i),y=Ne(f,i);De()._OrtAddSessionConfigEntry(e,h,y)!==0&&$e(`Can't set a session config entry: 'deviceType' - ${f}.`)}}break;case"webgpu":if(s="JS",typeof r!="string"){let c=r;if(c?.preferredLayout){if(c.preferredLayout!=="NCHW"&&c.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${c.preferredLayout}`);let f=Ne("preferredLayout",i),h=Ne(c.preferredLayout,i);De()._OrtAddSessionConfigEntry(e,f,h)!==0&&$e(`Can't set a session config entry: 'preferredLayout' - ${c.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let d=Ne(s,i);De()._OrtAppendExecutionProvider(e,d)!==0&&$e(`Can't append execution provider: ${s}.`)}},Ad=e=>{let t=De(),i=0,r=[],s=e||{};Aw(s);try{let d=Tw(s.graphOptimizationLevel??"all"),c=Iw(s.executionMode??"sequential"),f=typeof s.logId=="string"?Ne(s.logId,r):0,h=s.logSeverityLevel??2;if(!Number.isInteger(h)||h<0||h>4)throw new Error(`log serverity level is not valid: ${h}`);let y=s.logVerbosityLevel??0;if(!Number.isInteger(y)||y<0||y>4)throw new Error(`log verbosity level is not valid: ${y}`);let _=typeof s.optimizedModelFilePath=="string"?Ne(s.optimizedModelFilePath,r):0;if(i=t._OrtCreateSessionOptions(d,!!s.enableCpuMemArena,!!s.enableMemPattern,c,!!s.enableProfiling,0,f,h,y,_),i===0&&$e("Can't create session options."),s.executionProviders&&kw(i,s.executionProviders,r),s.enableGraphCapture!==void 0){if(typeof s.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${s.enableGraphCapture}`);let w=Ne("enableGraphCapture",r),v=Ne(s.enableGraphCapture.toString(),r);t._OrtAddSessionConfigEntry(i,w,v)!==0&&$e(`Can't set a session config entry: 'enableGraphCapture' - ${s.enableGraphCapture}.`)}if(s.freeDimensionOverrides)for(let[w,v]of Object.entries(s.freeDimensionOverrides)){if(typeof w!="string")throw new Error(`free dimension override name must be a string: ${w}`);if(typeof v!="number"||!Number.isInteger(v)||v<0)throw new Error(`free dimension override value must be a non-negative integer: ${v}`);let C=Ne(w,r);t._OrtAddFreeDimensionOverride(i,C,v)!==0&&$e(`Can't set a free dimension override: ${w} - ${v}.`)}return s.extra!==void 0&&ar(s.extra,"",new WeakSet,(w,v)=>{let C=Ne(w,r),x=Ne(v,r);t._OrtAddSessionConfigEntry(i,C,x)!==0&&$e(`Can't set a session config entry: ${w} - ${v}.`)}),[i,r]}catch(d){throw i!==0&&t._OrtReleaseSessionOptions(i)!==0&&$e("Can't release session options."),r.forEach(c=>t._free(c)),d}}});var Ft,At,kt,Hr,sr,Fr,qr,si,ce=X(()=>{"use strict";Ft=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},At=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},kt=(e,t)=>{let i=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((s,d)=>s*d,1);return i>0?Math.ceil(r*i):void 0},Hr=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},sr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Fr=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",qr=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",si=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}});var ur,ui=X(()=>{"use strict";Or();ur=async e=>{if(typeof e=="string")if(!1)try{let{readFile:t}=Yn("node:fs/promises");return new Uint8Array(await t(e))}catch(t){if(t.code==="ERR_FS_FILE_TOO_LARGE"){let{createReadStream:i}=Yn("node:fs"),r=i(e),s=[];for await(let d of r)s.push(d);return new Uint8Array(Buffer.concat(s))}throw t}else{let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let i=t.headers.get("Content-Length"),r=i?parseInt(i,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let s=t.body.getReader(),d;try{d=new ArrayBuffer(r)}catch(f){if(f instanceof RangeError){let h=Math.ceil(r/65536);d=new WebAssembly.Memory({initial:h,maximum:h}).buffer}else throw f}let c=0;for(;;){let{done:f,value:h}=await s.read();if(f)break;let y=h.byteLength;new Uint8Array(d,c,y).set(h),c+=y}return new Uint8Array(d,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}});var Ew,Pw,Ed,Pd,Kr,zw,_e,dt=X(()=>{"use strict";ce();Ew=["V","I","W","E","F"],Pw=(e,t)=>{console.log(`[${Ew[e]},${new Date().toISOString()}]${t}`)},Kr=(e,t)=>{Ed=e,Pd=t},zw=(e,t)=>{let i=sr(e),r=sr(Ed);i>=r&&Pw(i,typeof t=="function"?t():t)},_e=(...e)=>{Pd&&zw(...e)}});var Yr,li=X(()=>{"use strict";ce();Yr=(e,t)=>new(Hr(t))(e)});var Zr=X(()=>{"use strict"});var zd,di,ci,Ow,Dw,Od,fi,pi,Bd,Md=X(()=>{"use strict";dt();Zr();zd=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),di=[],ci=e=>Math.ceil(Number(e)/16)*16,Ow=e=>{for(let t=0;t<di.length;t++){let i=di[t];if(e<=i)return i}return Math.ceil(e/16)*16},Dw=1,Od=()=>Dw++,fi=async(e,t,i,r)=>{let s=ci(i),d=e.device.createBuffer({size:s,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let c=e.getCommandEncoder();e.endComputePass(),c.copyBufferToBuffer(t,0,d,0,s),e.flush(),await d.mapAsync(GPUMapMode.READ);let f=d.getMappedRange();if(r){let h=r();return h.set(new Uint8Array(f,0,i)),h}else return new Uint8Array(f.slice(0,i))}finally{d.destroy()}},pi=class{constructor(t){this.backend=t;this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[i]of zd)di.push(i),this.freeBuffers.set(i,[]),this.freeUniformBuffers.set(i,[]);this.sessionCount=0}upload(t,i){let r=i.buffer,s=i.byteOffset,d=i.byteLength,c=ci(d),f=this.storageCache.get(t);if(!f)throw new Error("gpu data for uploading does not exist");if(Number(f.originalSize)!==d)throw new Error(`inconsistent data size. gpu data size=${f.originalSize}, data size=${d}`);let h=this.backend.device.createBuffer({mappedAtCreation:!0,size:c,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),y=h.getMappedRange();new Uint8Array(y).set(new Uint8Array(r,s,d)),h.unmap();let _=this.backend.device.createCommandEncoder();_.copyBufferToBuffer(h,0,f.gpuData.buffer,0,c),this.backend.device.queue.submit([_.finish()]),h.destroy(),_e("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${t})`)}memcpy(t,i){let r=this.storageCache.get(t);if(!r)throw new Error("source gpu data for memcpy does not exist");let s=this.storageCache.get(i);if(!s)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==s.originalSize)throw new Error("inconsistent source and destination gpu data size");let d=ci(r.originalSize),c=this.backend.getCommandEncoder();this.backend.endComputePass(),c.copyBufferToBuffer(r.gpuData.buffer,0,s.gpuData.buffer,0,d)}registerExternalBuffer(t,i,r){let s;if(r){if(s=r[0],t===r[1])return _e("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${i}) => id=${s}, buffer is the same, skip.`),s;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else s=Od();return this.storageCache.set(s,{gpuData:{id:s,type:0,buffer:t},originalSize:i}),_e("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${i}) => id=${s}, registered.`),s}unregisterExternalBuffer(t){t!==void 0&&(this.storageCache.delete(t),_e("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${t}`))}create(t,i=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Ow(t),s,d=(i&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,c=(i&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(d||c){let y=(d?this.freeBuffers:this.freeUniformBuffers).get(r);y?y.length>0?s=y.pop():s=this.backend.device.createBuffer({size:r,usage:i}):s=this.backend.device.createBuffer({size:r,usage:i})}else s=this.backend.device.createBuffer({size:r,usage:i});let f={id:Od(),type:0,buffer:s};return this.storageCache.set(f.id,{gpuData:f,originalSize:Number(t)}),_e("verbose",()=>`[WebGPU] GpuDataManager.create(size=${t}) => id=${f.id}`),f}get(t){return this.storageCache.get(t)?.gpuData}release(t){let i=typeof t=="bigint"?Number(t):t,r=this.storageCache.get(i);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return _e("verbose",()=>`[WebGPU] GpuDataManager.release(id=${i}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(i),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(t,i){let r=this.storageCache.get(Number(t));if(!r)throw new Error("data does not exist");await fi(this.backend,r.gpuData.buffer,r.originalSize,i)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let t of this.buffersPending){let i=zd.get(t.size);if((t.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(t.size)||[];i===void 0||r.length>=i?t.destroy():r.push(t)}else if((t.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(t.size)||[];i===void 0||r.length>=i?t.destroy():r.push(t)}else t.destroy()}this.buffersPending=[]}else{let t=this.capturedPendingBuffers.get(this.backend.currentSessionId);t||(t=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,t));for(let i of this.buffersPending)t.push(i);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(t=>{t.forEach(i=>{i.destroy()})}),this.freeUniformBuffers.forEach(t=>{t.forEach(i=>{i.destroy()})}),this.storageCache.forEach(t=>{t.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(t=>{t.forEach(i=>{i.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(t){let i=this.capturedPendingBuffers.get(t);i&&(i.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(t)),this.sessionCount-=1,this.sessionCount===0&&(_e("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Bd=(...e)=>new pi(...e)});var mi,pe,Oe=X(()=>{"use strict";mi=class{constructor(t){Object.assign(this,t)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(t=>`${this[t]}`).join(";")),this.key}},pe=e=>new mi(e)});var hi,ct,V,jt,Qr,Rd,jd,me=X(()=>{"use strict";hi=class{static calcMatMulShape(t,i){return t[1]!==i[0]?void 0:[t[0],i[1]]}},ct=class{static calcShape(t,i,r=!1){let s=t.length,d=i.length;if(s===0)return i;if(d===0)return t;let c=Math.max(t.length,i.length),f=new Array(c);if(r){if(s<2||d<2)return;let h=hi.calcMatMulShape([t[s-2],t[s-1]],[i[d-2],i[d-1]]);if(h===void 0)return;[f[c-2],f[c-1]]=h}for(let h=r?3:1;h<=c;h++){let y=s-h<0?1:t[s-h],_=d-h<0?1:i[d-h];if(y!==_&&y>1&&_>1)return;let w=Math.max(y,_);if(y&&_)f[c-h]=Math.max(y,_);else{if(w>1)return;f[c-h]=0}}return f}static isValidBroadcast(t,i){let r=t.length,s=i.length;if(r>s)return!1;for(let d=1;d<=r;d++)if(t[r-d]!==1&&t[r-d]!==i[s-d])return!1;return!0}},V=class e{static size(t){return e.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,i=4){let r=t.length;if(r===0)return[];let s=new Array(r),d=r-1;for(;d>=0;){if(t[d]%i===0){s[d]=t[d]/i;break}if(i%t[d]!==0)throw new Error("cannot convert shape");s[d]=1,i/=t[d],d--}for(d--;d>=0;d--)s[d]=t[d];return s}static sizeFromDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,i,t.length)}static sizeToDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeToDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,0,i)}static getSizeFromDimensionRange(t,i,r){let s=1;for(let d=i;d<r;d++){if(t[d]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");s*=Number(t[d])}return s}static computeStrides(t){let i=t.length;if(i===0)return[];if(i===1)return[1];let r=new Array(i);r[i-1]=1,r[i-2]=t[i-1];for(let s=i-3;s>=0;--s)r[s]=r[s+1]*t[s+1];return r}static normalizeAxis(t,i){if(t<-i&&t>=i)throw new Error("unsupported axis for this operation.");return t<0?t+i:t}static normalizeAxes(t,i){return t.map(r=>this.normalizeAxis(r,i??t.length))}static sortBasedOnPerm(t,i){return i?i.map(r=>t[r]):t.slice().reverse()}static padShape(t,i){let r=t.length;return t.map((s,d)=>s+i[d]+i[d+r])}static areEqual(t,i){return t.length!==i.length?!1:t.every((r,s)=>r===i[s])}},jt=class e{static adjustPoolAttributes(t,i,r,s,d,c){if(!t&&r.length!==i.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let f=0;f<i.length-2;f++)f>=r.length?r.push(i[f+2]):r[f]=i[f+2];for(let f=0;f<r.length;f++)if(f<s.length){if(s[f]<0)throw new Error("strides should be greater than or equal to 1")}else s.push(1);for(let f=0;f<r.length;f++)if(f<d.length){if(d[f]<0)throw new Error("dilations should be greater than or equal to 1")}else d.push(1);for(let f=0;f<r.length*2;f++)if(f<c.length){if(c[f]<0)throw new Error("pad should be greater than or equal to 1")}else c.push(0);for(let f=0;f<r.length;f++){if(r[f]<=0)throw new Error("kernel shapes need to be greater than 0");if(c[f]>=r[f]||c[f+r.length]>=r[f])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,i,r,s,d,c,f){if(f){if(d.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(s.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let h=0;h<t.length-2;h++)e.adjustPadAndReturnShape(t[h+(c?1:2)],i[h],r[h],s[h],d,h,h+t.length-2,f)}}static computePoolOutputShape(t,i,r,s,d,c,f){if(i.length<=0)throw new Error("input shape must be of size greater than 0");let h=[i[0],i[1]];return e.computeShapeHelper(t,i,h,r,s,d,c,f),h}static computeConvOutputShape(t,i,r,s,d,c,f){if(t.length<=0||i.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let h=[t[0],i[0]];return e.computeShapeHelper(!1,t,h,r,s,d,c,f),h}static computeShapeHelper(t,i,r,s,d,c,f,h){if(t)for(let y=0;y<i.length-2;y++)r.push(1);else for(let y=0;y<i.length-2;y++)r.push(e.adjustPadAndReturnShape(i[y+2],s[y],d[y],c[y],f,y,y+i.length-2,h))}static adjustPadAndReturnShape(t,i,r,s,d,c,f,h){let y=r*(s-1)+1;if(h&&h!=="NOTSET")switch(h){case"VALID":return d[c]=0,d[f]=0,Math.floor((t-y)/i+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let w=((t+i-1)/i-1)*i+s-t;return d[c]=Math.floor(h==="SAME_LOWER"?(w+1)/2:w/2),d[f]=w-d[c],Math.floor((t+w-s)/i+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+d[c]+d[f]-y)/i+1)}},Qr=class{static getShapeOfGemmResult(t,i,r,s,d){if(t.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let c,f,h;i?(c=t[1],f=t[0]):(c=t[0],f=t[1]);let y=-1;if(s?(h=r[0],y=1):(h=r[1],y=0),r[y]!==f)throw new Error("dimension mismatch");if(c<=0||h<=0||f<=0)throw new Error("invalid shape specified");if(d&&!ct.isValidBroadcast(d,[c,h]))throw new Error("gemm: invalid bias shape for broadcast");return[c,h,f]}},Rd=-34028234663852886e22,jd=34028234663852886e22});var Ut,yi,Ie,Ve,J,xe,bi,Nt,rt,re,Xr,W,Y,Ud,Jr,gi,Nd,ye=X(()=>{"use strict";ce();me();Ut=64,yi=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ie=(e,t=1)=>{let i=yi(e,t);return typeof i=="string"?i:i[0]},Ve=(e,t=1)=>{let i=yi(e,t);return typeof i=="string"?i:i[1]},J=(...e)=>{let t=[];return e.forEach(i=>{i.length!==0&&t.push({type:12,data:i},{type:12,data:V.computeStrides(i)})}),t},xe=e=>e%4===0?4:e%2===0?2:1,bi=(e="f32",t,i="0")=>!t||t===1?`${e}(${i})`:`vec${t}<${e}>(${i})`,Nt=(e,t,i)=>e==="f32"?i:t===1?`f32(${i})`:`vec${t}<f32>(${i})`,rt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,re=(e,t,i,r)=>e.startsWith("uniforms.")&&i>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:i>1?`${e}[${t}]`:e,Xr=(e,t,i,r,s)=>{let d=typeof i=="number",c=d?i:i.length,f=[...new Array(c).keys()],h=c<2?"u32":c<=4?`vec${c}<u32>`:`array<u32, ${c}>`,y=yi(t,s),_=typeof y=="string"?y:y[1],w=typeof y=="string"?y:y[0],v={indices:h,value:_,storage:w,tensor:t},C=q=>typeof q=="string"?q:`${q}u`,x={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},S=d?"uniforms.":"",E=`${S}${e}_shape`,A=`${S}${e}_strides`,I="";for(let q=0;q<c-1;q++)I+=`
    let dim${q} = current / ${re(A,q,c)};
    let rest${q} = current % ${re(A,q,c)};
    indices[${q}] = dim${q};
    current = rest${q};
    `;I+=`indices[${c-1}] = current;`;let P=c<2?"":`
  fn o2i_${e}(offset: u32) -> ${v.indices} {
    var indices: ${v.indices};
    var current = offset;
    ${I}
    return indices;
  }`,D=q=>(x.offsetToIndices=!0,c<2?q:`o2i_${e}(${q})`),B=[];if(c>=2)for(let q=c-1;q>=0;q--)B.push(`${re(A,q,c)} * (indices[${q}])`);let M=c<2?"":`
  fn i2o_${e}(indices: ${v.indices}) -> u32 {
    return ${B.join("+")};
  }`,G=q=>(x.indicesToOffset=!0,c<2?q:`i2o_${e}(${q})`),F=(...q)=>c===0?"0u":`${v.indices}(${q.map(C).join(",")})`,Z=(q,se)=>c<2?`${q}`:`${re(q,se,c)}`,te=(q,se,ve)=>c<2?`${q}=${ve};`:`${re(q,se,c)}=${ve};`,ne={},fe=(q,se)=>{x.broadcastedIndicesToOffset=!0;let ve=`${se.name}broadcastedIndicesTo${e}Offset`;if(ve in ne)return`${ve}(${q})`;let Je=[];for(let Ee=c-1;Ee>=0;Ee--){let Te=se.indicesGet("outputIndices",Ee+se.rank-c);Je.push(`${Z(A,Ee)} * (${Te} % ${Z(E,Ee)})`)}return ne[ve]=`fn ${ve}(outputIndices: ${se.type.indices}) -> u32 {
             return ${Je.length>0?Je.join("+"):"0u"};
           }`,`${ve}(${q})`},Q=(q,se)=>(()=>{if(v.storage===v.value)return`${e}[${q}]=${se};`;if(v.storage==="vec2<u32>"&&v.value==="i32")return`${e}[${q}]=vec2<u32>(u32(${se}), select(0u, 0xFFFFFFFFu, ${se} < 0));`;if(v.storage==="vec2<u32>"&&v.value==="u32")return`${e}[${q}]=vec2<u32>(u32(${se}), 0u);`;if(v.storage==="u32"&&v.value==="vec4<bool>")return`${e}[${q}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${se}));`;throw new Error(`not supported combination of storage type ${v.storage} and value type ${v.value} yet`)})(),ue=q=>(()=>{if(v.storage===v.value)return`${e}[${q}]`;if(v.storage==="vec2<u32>"&&v.value==="i32")return`i32(${e}[${q}].x)`;if(v.storage==="vec2<u32>"&&v.value==="u32")return`u32(${e}[${q}].x)`;if(v.storage==="u32"&&v.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${q}] & 0xFFu), bool(${e}[${q}] & 0xFF00u), bool(${e}[${q}] & 0xFF0000u), bool(${e}[${q}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${v.storage} and value type ${v.value} yet`)})(),ke=c<2?"":`
  fn get_${e}ByIndices(indices: ${v.indices}) -> ${_} {
    return ${ue(`i2o_${e}(indices)`)};
  }`,ae=c<2?"":(()=>{let q=f.map(ve=>`d${ve}: u32`).join(", "),se=f.map(ve=>`d${ve}`).join(", ");return`
  fn get_${e}(${q}) -> ${_} {
    return get_${e}ByIndices(${F(se)});
  }`})(),de=(...q)=>{if(q.length!==c)throw new Error(`indices length must be ${c}`);let se=q.map(C).join(",");return c===0?ue("0u"):c===1?ue(se[0]):(x.get=!0,x.getByIndices=!0,x.indicesToOffset=!0,`get_${e}(${se})`)},ge=q=>c<2?ue(q):(x.getByIndices=!0,x.indicesToOffset=!0,`get_${e}ByIndices(${q})`),ie=c<2?"":`
  fn set_${e}ByIndices(indices: ${v.indices}, value: ${_}) {
    ${Q(`i2o_${e}(indices)`,"value")}
  }`,be=c<2?"":(()=>{let q=f.map(ve=>`d${ve}: u32`).join(", "),se=f.map(ve=>`d${ve}`).join(", ");return`
  fn set_${e}(${q}, value: ${_}) {
    set_${e}ByIndices(${F(se)}, value);
  }`})();return{impl:()=>{let q=[],se=!1;return x.offsetToIndices&&(q.push(P),se=!0),x.indicesToOffset&&(q.push(M),se=!0),x.broadcastedIndicesToOffset&&(Object.values(ne).forEach(ve=>q.push(ve)),se=!0),x.set&&(q.push(be),se=!0),x.setByIndices&&(q.push(ie),se=!0),x.get&&(q.push(ae),se=!0),x.getByIndices&&(q.push(ke),se=!0),!d&&se&&q.unshift(`const ${E} = ${v.indices}(${i.join(",")});`,`const ${A} = ${v.indices}(${V.computeStrides(i).join(",")});`),q.join(`
`)},type:v,offsetToIndices:D,indicesToOffset:G,broadcastedIndicesToOffset:fe,indices:F,indicesGet:Z,indicesSet:te,set:(...q)=>{if(q.length!==c+1)throw new Error(`indices length must be ${c}`);let se=q[c];if(typeof se!="string")throw new Error("value must be string");let ve=q.slice(0,c).map(C).join(",");return c===0?Q("0u",se):c===1?Q(ve[0],se):(x.set=!0,x.setByIndices=!0,x.indicesToOffset=!0,`set_${e}(${ve}, ${se})`)},setByOffset:Q,setByIndices:(q,se)=>c<2?Q(q,se):(x.setByIndices=!0,x.indicesToOffset=!0,`set_${e}ByIndices(${q}, ${se});`),get:de,getByOffset:ue,getByIndices:ge,usage:r,name:e,strides:A,shape:E,rank:c}},W=(e,t,i,r=1)=>Xr(e,t,i,"input",r),Y=(e,t,i,r=1)=>Xr(e,t,i,"output",r),Ud=(e,t,i)=>Xr(e,t,i,"atomicOutput",1),Jr=(e,t,i,r=1)=>Xr(e,t,i,"internal",r),gi=class{constructor(t,i){this.normalizedDispatchGroup=t;this.limits=i;this.internalVariables=[];this.variables=[];this.uniforms=[];this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(t){return`if (global_idx >= ${typeof t=="number"?`${t}u`:t}) { return; }`}mainStart(t=Ut){let i=typeof t=="number"?t:t[0],r=typeof t=="number"?1:t[1],s=typeof t=="number"?1:t[2];if(i>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||s>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${i}, ${r}, ${s}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(i*r*s>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${i}, ${r}, ${s}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let d=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,c=d?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let t=i=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(i)];return this.uniforms.map(i=>[t(i.type),i.length??1])}},Nd=(e,t)=>new gi(e,t)});var Bw,Vd,Mw,Rw,jw,Uw,We,Wd,Ld,wt=X(()=>{"use strict";ce();me();Oe();ye();Bw=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Vd=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Mw=(e,t)=>V.sortBasedOnPerm(e,Vd(e.length,t)),Rw=(e,t,i,r)=>{let s=`fn perm(i: ${r.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`;for(let d=0;d<t;++d)s+=`a[${e[d]}]=i[${d}];`;return s+="return a;}"},jw=(e,t)=>{let i=[],r=[];for(let s=0;s<e.length;++s)e[s]!==1&&i.push(e[s]),e[t[s]]!==1&&r.push(t[s]);return{newShape:i,newPerm:r}},Uw=(e,t)=>{let i=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<i)return!1;i=e[r]}return!0},We=(e,t)=>{let i=e.dataType,r=e.dims.length,s=Vd(r,t),d=Mw(e.dims,s),c=e.dims,f=d,h=r<2||Uw(s,e.dims),y;if(h)return y=S=>{let E=W("input",i,c,4),A=Y("output",i,f,4);return`
  ${S.registerUniform("output_size","u32").declareVariables(E,A)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let S=V.size(d);return{outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(S/64/4)},programUniforms:[{type:12,data:Math.ceil(S/4)}]}},getShaderSource:y};let{newShape:_,newPerm:w}=jw(e.dims,s),v=V.areEqual(w,[2,3,1]),C=V.areEqual(w,[3,1,2]);if(_.length===2||v||C){c=v?[_[0],_[1]*_[2]]:C?[_[0]*_[1],_[2]]:_,f=[c[1],c[0]];let S=16;return y=E=>{let A=W("a",i,c.length),I=Y("output",i,f.length);return`
  ${E.registerUniform("output_size","u32").declareVariables(A,I)}
  var<workgroup> tile : array<array<${I.type.value}, ${S+1}>, ${S}>;
  ${E.mainStart([S,S,1])}
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
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let E=V.size(d);return{outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f[1]/S),y:Math.ceil(f[0]/S)},programUniforms:[{type:12,data:E},...J(c,f)]}},getShaderSource:y}}return y=S=>{let E=W("a",i,c.length),A=Y("output",i,f.length);return`
  ${S.registerUniform("output_size","u32").declareVariables(E,A)}

  ${Rw(s,r,E,A)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${A.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${A.setByOffset("global_idx",E.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let S=V.size(d);return{outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...J(c,f)]}},getShaderSource:y}},Wd=(e,t)=>{Bw(e.inputs,t.perm),e.compute(We(e.inputs[0],t.perm))},Ld=e=>pe({perm:e.perm})});var Nw,Vw,Ww,Lw,Gw,Hw,Fw,qw,Kw,Yw,pt,Gd,Hd,Fd,qd,Kd,Yd,Zd,Qd,Xd,Jd,ec=X(()=>{"use strict";ce();me();ye();en();wt();Nw={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Vw={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Ww={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Lw={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Gw=(e,t)=>{let i=[];for(let r=t-e;r<t;++r)i.push(r);return i},Hw=(e,t)=>{let i=[],r=e.length;for(let d=0;d<r;d++)t.indexOf(d)===-1&&i.push(e[d]);let s=t.map(d=>e[d]);return[i,s]},Fw=(e,t)=>{let i=e.length+t.length,r=[],s=0;for(let d=0;d<i;d++)t.indexOf(d)===-1?r.push(e[s++]):r.push(1);return r},qw=(e,t)=>{for(let i=0;i<e.length;++i)if(e[e.length-i-1]!==t-1-i)return!1;return!0},Kw=(e,t)=>{let i=[];if(!qw(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&i.push(r);e.forEach(r=>i.push(r))}return i},Yw=(e,t,i,r,s,d,c)=>{let f=i[0].dims,h=V.size(d),y=V.size(c),_=W("_A",i[0].dataType,f),w=Y("output",s,d),v=64;h===1&&(v=256);let C=`
          var<workgroup> aBestValues : array<f32, ${v}>;
       `,x=S=>`
        ${S.registerUniform("reduceSize","u32").declareVariables(_,w)}
        ${C}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${S.mainStart(v)}

          let outputIndex = global_idx / ${v};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Ww[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${v}) {
           let candidate = f32(${_.getByOffset("offset + k")});
           bestValue = ${Nw[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${v}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Vw[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${w.setByOffset("outputIndex",`${r==="mean"?`${w.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${w.type.storage}(${Lw[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${v}`,inputDependencies:["type"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:d,dataType:s}],dispatchGroup:{x:h},programUniforms:[{type:12,data:y}]})}},pt=(e,t,i,r)=>{let s=e.inputs.length===1?i:_i(e.inputs,i),d=s.axes;d.length===0&&!s.noopWithEmptyAxes&&(d=e.inputs[0].dims.map((C,x)=>x));let c=V.normalizeAxes(d,e.inputs[0].dims.length),f=c,h=e.inputs[0],y=Kw(f,e.inputs[0].dims.length);y.length>0&&(h=e.compute(We(e.inputs[0],y),{inputs:[0],outputs:[-1]})[0],f=Gw(f.length,h.dims.length));let[_,w]=Hw(h.dims,f),v=_;s.keepDims&&(v=Fw(_,c)),e.compute(Yw(t,s.cacheKey,[h],r,e.inputs[0].dataType,v,w),{inputs:[h]})},Gd=(e,t)=>{pt(e,"ReduceMeanShared",t,"mean")},Hd=(e,t)=>{pt(e,"ReduceL1Shared",t,"l1")},Fd=(e,t)=>{pt(e,"ReduceL2Shared",t,"l2")},qd=(e,t)=>{pt(e,"ReduceLogSumExpShared",t,"logSumExp")},Kd=(e,t)=>{pt(e,"ReduceMaxShared",t,"max")},Yd=(e,t)=>{pt(e,"ReduceMinShared",t,"min")},Zd=(e,t)=>{pt(e,"ReduceProdShared",t,"prod")},Qd=(e,t)=>{pt(e,"ReduceSumShared",t,"sum")},Xd=(e,t)=>{pt(e,"ReduceSumSquareShared",t,"sumSquare")},Jd=(e,t)=>{pt(e,"ReduceLogSumShared",t,"logSum")}});var ft,Zw,tn,_i,mt,Qw,Xw,Jw,e0,t0,r0,n0,i0,o0,a0,ht,tc,rc,nc,ic,oc,ac,sc,uc,lc,dc,en=X(()=>{"use strict";ce();me();Oe();ye();ec();ft=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Zw=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],tn=(e,t,i,r,s,d,c=!1,f=!1)=>{let h=[],y=i[0].dims,_=y.length,w=V.normalizeAxes(s,_),v=!f&&w.length===0;y.forEach((E,A)=>{v||w.indexOf(A)>=0?c&&h.push(1):h.push(E)});let C=h.length,x=V.size(h);return{name:e,shaderCache:t,getShaderSource:E=>{let A=[],I=W("_A",i[0].dataType,_),P=Y("output",d,C),D=r(I,P,w),B=D[2];for(let M=0,G=0;M<_;M++)v||w.indexOf(M)>=0?(c&&G++,B=`for(var j${M}: u32 = 0; j${M} < ${y[M]}; j${M}++) {
                  ${D[2].includes("last_index")?`let last_index = j${M};`:""}
                  ${I.indicesSet("input_indices",M,`j${M}`)}
                  ${B}
                }`):(A.push(`${I.indicesSet("input_indices",M,P.indicesGet("output_indices",G))};`),G++);return`

        ${E.registerUniform("output_size","u32").declareVariables(I,P)}

        ${E.mainStart()}
          ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${I.type.indices};
          let output_indices = ${P.offsetToIndices("global_idx")};

          ${A.join(`
`)}
          ${D[0]}       // init ops for reduce max/min
          ${D[1]}
          ${B}
          ${D[3]}
          ${D.length===4?P.setByOffset("global_idx","value"):D.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:h,dataType:d}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:[{type:12,data:x},...J(y,h)]})}},_i=(e,t)=>{let i=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>i.push(Number(r))),pe({axes:i,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},mt=(e,t,i,r)=>{let s=e.inputs,d=s.length===1?i:_i(s,i);e.compute(tn(t,{hint:d.cacheKey,inputDependencies:["rank"]},[s[0]],d.noopWithEmptyAxes&&d.axes.length===0?Zw:r,d.axes,s[0].dataType,d.keepDims,d.noopWithEmptyAxes),{inputs:[0]})},Qw=(e,t)=>{ft(e.inputs),mt(e,"ReduceLogSum",t,(r,s)=>[`var value = ${s.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Xw=(e,t)=>{ft(e.inputs),mt(e,"ReduceL1",t,(r,s)=>[`var value = ${s.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Jw=(e,t)=>{ft(e.inputs),mt(e,"ReduceL2",t,(r,s)=>[`var t = ${s.type.value}(0); var value = ${s.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},e0=(e,t)=>{ft(e.inputs),mt(e,"ReduceLogSumExp",t,(r,s)=>[`var value = ${s.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},t0=(e,t)=>{ft(e.inputs),mt(e,"ReduceMax",t,(r,s,d)=>{let c=[];for(let f=0;f<r.rank;f++)(d.indexOf(f)>=0||d.length===0)&&c.push(r.indicesSet("input_indices",f,0));return[`${c.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},r0=(e,t)=>{ft(e.inputs),mt(e,"ReduceMean",t,(r,s,d)=>{let c=1;for(let f=0;f<r.rank;f++)(d.indexOf(f)>=0||d.length===0)&&(c*=e.inputs[0].dims[f]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${s.type.value}(sum / ${c});`]})},n0=(e,t)=>{ft(e.inputs),mt(e,"ReduceMin",t,(r,s,d)=>{let c=[];for(let f=0;f<r.rank;f++)(d.indexOf(f)>=0||d.length===0)&&c.push(`input_indices[${f}] = 0;`);return[`${c.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},i0=(e,t)=>{ft(e.inputs),mt(e,"ReduceProd",t,(r,s)=>[`var value = ${s.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},o0=(e,t)=>{ft(e.inputs),mt(e,"ReduceSum",t,(r,s)=>[`var value = ${s.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},a0=(e,t)=>{ft(e.inputs),mt(e,"ReduceSumSquare",t,(r,s)=>[`var t = ${s.type.value}(0); var value = ${s.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},ht=(e,t,i)=>{if(t.length===0)return i;let r=1,s=1;for(let d=0;d<t.length;d++)t.indexOf(d)===-1?r*=e[d]:s*=e[d];return s<32&&r>1024},tc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?r0(e,t):Gd(e,t)},rc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Xw(e,t):Hd(e,t)},nc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Jw(e,t):Fd(e,t)},ic=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?e0(e,t):qd(e,t)},oc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?t0(e,t):Kd(e,t)},ac=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?n0(e,t):Yd(e,t)},sc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?i0(e,t):Zd(e,t)},uc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?o0(e,t):Qd(e,t)},lc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?a0(e,t):Xd(e,t)},dc=(e,t)=>{ht(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Qw(e,t):Jd(e,t)}});var cc,pc,fc,wi,mc=X(()=>{"use strict";ce();Oe();en();cc=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},pc=(e,t)=>{cc(e.inputs);let i=(r,s,d)=>{let c=[];for(let f=0;f<r.rank;f++)(d.indexOf(f)>=0||d.length===0)&&c.push(`input_indices[${f}] = 0;`);return[`${c.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",s.setByOffset("global_idx","best_index")]};e.compute(tn("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},fc=(e,t)=>{cc(e.inputs);let i=(r,s,d)=>{let c=[];for(let f=0;f<r.rank;f++)(d.indexOf(f)>=0||d.length===0)&&c.push(`input_indices[${f}] = 0;`);return[`${c.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",s.setByOffset("global_idx","best_index")]};e.compute(tn("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},wi=e=>pe(e)});var s0,vi,u0,l0,d0,qt,c0,hc,rn=X(()=>{"use strict";ce();me();Zr();ye();s0=(e,t)=>{let i=e[0],r=e[1],s=e[2],d=e[3],c=e[4],f=e[5];if(c&&f)throw new Error("Attention cannot have both past and attention_bias");if(i.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let h=i.dims[0],y=i.dims[1],_=i.dims[2];if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==_)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(s.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let w=s.dims[0]/3,v=w,C=v;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let P of t.qkvHiddenSizes)if(P%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");w=t.qkvHiddenSizes[0],v=t.qkvHiddenSizes[1],C=t.qkvHiddenSizes[2]}let x=y;if(w!==v)throw new Error("qkv_hidden_sizes first element should be same as the second");if(s.dims[0]!==w+v+C)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let S=0;if(c){if(v!==C)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(c.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(c.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(c.dims[1]!==h)throw new Error('Input "past" second dimension must be batch_size');if(c.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(c.dims[4]!==v/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(S=c.dims[3])}let E=x+S,A=-1,I=0;if(d)throw new Error("Mask not supported");if(c)throw new Error("past is not supported");if(f){if(f.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(f.dims[0]!==h||f.dims[1]!==t.numHeads||f.dims[2]!==y||f.dims[3]!==E)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:h,sequenceLength:y,pastSequenceLength:S,kvSequenceLength:x,totalSequenceLength:E,maxSequenceLength:A,inputHiddenSize:_,hiddenSize:w,vHiddenSize:C,headSize:Math.floor(w/t.numHeads),vHeadSize:Math.floor(C/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:I,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},vi=(e,t,i)=>t&&e?`
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
    `,u0=(e,t,i,r,s,d,c,f)=>{let h=xe(c?1:d),y=64,_=d/h;_<y&&(y=32);let w=Math.ceil(d/h/y),v=[{type:12,data:t},{type:12,data:i},{type:12,data:r},{type:12,data:s},{type:12,data:_},{type:12,data:w}],C=Ie(e.dataType,h),x=Ve(1,h),S=["type"];c&&S.push("type"),f&&S.push("type");let E=A=>{let I=Y("x",e.dataType,e.dims,h),P=[I],D=c?W("seq_lens",c.dataType,c.dims):void 0;D&&P.push(D);let B=f?W("total_sequence_length_input",f.dataType,f.dims):void 0;B&&P.push(B);let M=Ve(e.dataType),G=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${y}>;
  var<workgroup> thread_sum: array<f32, ${y}>;
  ${A.registerUniforms(G).declareVariables(...P)}
  ${A.mainStart([y,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${vi(D,B,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${y}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${c?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${x}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${x}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(h){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${h}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${y}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${x}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${x}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(h){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${h}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${y}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${I.type.value}(${M}(1.0) / ${M}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${x}(x[offset + i]);
        x[offset + i] = ${I.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${c?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${I.type.value}(${M}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${y};${C};${h}`,inputDependencies:S},getShaderSource:E,getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(d/y),y:s,z:t*i},programUniforms:v})}},l0=(e,t,i,r,s,d,c,f,h)=>{let y=c+d.kvSequenceLength,_=[d.batchSize,d.numHeads,d.sequenceLength,y],w=e>1&&r,v=d.kvNumHeads?d.kvNumHeads:d.numHeads,C=w?[d.batchSize,v,y,d.headSize]:void 0,x=d.nReps?d.nReps:1,S=d.scale===0?1/Math.sqrt(d.headSize):d.scale,E=xe(d.headSize),A=d.headSize/E,I=12,P={x:Math.ceil(y/I),y:Math.ceil(d.sequenceLength/I),z:d.batchSize*d.numHeads},D=[{type:12,data:d.sequenceLength},{type:12,data:A},{type:12,data:y},{type:12,data:d.numHeads},{type:12,data:d.headSize},{type:1,data:S},{type:12,data:c},{type:12,data:d.kvSequenceLength},{type:12,data:x}],B=w&&r&&V.size(r.dims)>0,M=["type","type"];B&&M.push("type"),s&&M.push("type"),f&&M.push("type"),h&&M.push("type");let G=[{dims:_,dataType:t.dataType,gpuDataType:0}];w&&G.push({dims:C,dataType:t.dataType,gpuDataType:0});let F=Z=>{let te=W("q",t.dataType,t.dims,E),ne=W("key",i.dataType,i.dims,E),fe=[te,ne];if(B){let ie=W("past_key",r.dataType,r.dims,E);fe.push(ie)}s&&fe.push(W("attention_bias",s.dataType,s.dims));let Q=f?W("seq_lens",f.dataType,f.dims):void 0;Q&&fe.push(Q);let ue=h?W("total_sequence_length_input",h.dataType,h.dims):void 0;ue&&fe.push(ue);let ke=Y("output",t.dataType,_),ae=[ke];w&&ae.push(Y("present_key",t.dataType,C,E));let de=Ve(1,E),ge=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${I}u;

  var<workgroup> tileQ: array<${te.type.storage}, ${I*I}>;
  var<workgroup> tileK: array<${te.type.storage}, ${I*I}>;
  ${Z.registerUniforms(ge).declareVariables(...fe,...ae)}
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
    ${vi(Q,ue,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${B&&w?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${w?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${de}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${(()=>B&&w?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`)()}
      ${w?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${de}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(E){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${E}`)}})()};
        output[outputIdx] = ${ke.type.value} (sum * uniforms.alpha) + ${s?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${E};${s!==void 0};${r!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:G,dispatchGroup:P,programUniforms:D}),getShaderSource:F}},d0=(e,t,i,r,s,d,c=void 0,f=void 0)=>{let h=d+s.kvSequenceLength,y=s.nReps?s.nReps:1,_=s.vHiddenSize*y,w=e>1&&r,v=s.kvNumHeads?s.kvNumHeads:s.numHeads,C=w?[s.batchSize,v,h,s.headSize]:void 0,x=[s.batchSize,s.sequenceLength,_],S=12,E={x:Math.ceil(s.vHeadSize/S),y:Math.ceil(s.sequenceLength/S),z:s.batchSize*s.numHeads},A=[{type:12,data:s.sequenceLength},{type:12,data:h},{type:12,data:s.vHeadSize},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:12,data:_},{type:12,data:d},{type:12,data:s.kvSequenceLength},{type:12,data:y}],I=w&&r&&V.size(r.dims)>0,P=["type","type"];I&&P.push("type"),c&&P.push("type"),f&&P.push("type");let D=[{dims:x,dataType:t.dataType,gpuDataType:0}];w&&D.push({dims:C,dataType:t.dataType,gpuDataType:0});let B=M=>{let G=W("probs",t.dataType,t.dims),F=W("v",i.dataType,i.dims),Z=[G,F];I&&Z.push(W("past_value",r.dataType,r.dims));let te=c?W("seq_lens",c.dataType,c.dims):void 0;c&&Z.push(te);let ne=f?W("total_sequence_length_input",f.dataType,f.dims):void 0;f&&Z.push(ne);let Q=[Y("output",t.dataType,x)];w&&Q.push(Y("present_value",t.dataType,C));let ue=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${S}u;
  var<workgroup> tileQ: array<${G.type.value}, ${S*S}>;
  var<workgroup> tileV: array<${G.type.value}, ${S*S}>;
  ${M.registerUniforms(ue).declareVariables(...Z,...Q)}
  ${M.mainStart([S,S,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${y===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${y===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${vi(te,ne,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${I&&w?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${w?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${G.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${(()=>I&&w?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`)()}
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:P},getRunData:()=>({outputs:D,dispatchGroup:E,programUniforms:A}),getShaderSource:B}},qt=(e,t,i,r,s,d,c,f,h,y,_=void 0,w=void 0)=>{let v=Math.min(e.outputCount,1+(c?1:0)+(f?1:0)),C=v>1?y.pastSequenceLength:0,x=C+y.kvSequenceLength,S=h&&V.size(h.dims)>0?h:void 0,E=[t,i];v>1&&c&&V.size(c.dims)>0&&E.push(c),S&&E.push(S),_&&E.push(_),w&&E.push(w);let A=e.compute(l0(v,t,i,c,S,y,C,_,w),{inputs:E,outputs:v>1?[-1,1]:[-1]})[0];e.compute(u0(A,y.batchSize,y.numHeads,C,y.sequenceLength,x,_,w),{inputs:_&&w?[A,_,w]:[A],outputs:[]});let I=[A,r];v>1&&f&&V.size(f.dims)>0&&I.push(f),_&&I.push(_),w&&I.push(w),e.compute(d0(v,A,r,f,y,C,_,w),{inputs:I,outputs:v>1?[0,2]:[0]})},c0=(e,t)=>{let i=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,s=t.inputHiddenSize,d=t.headSize,c=12,f={x:Math.ceil(t.headSize/c),y:Math.ceil(t.sequenceLength/c),z:t.batchSize*t.numHeads},h=[e.inputs[0],e.inputs[1],e.inputs[2]],y=[{type:12,data:r},{type:12,data:s},{type:12,data:d},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],_=w=>{let v=Y("output_q",h[0].dataType,i),C=Y("output_k",h[0].dataType,i),x=Y("output_v",h[0].dataType,i),S=W("input",h[0].dataType,h[0].dims),E=W("weight",h[1].dataType,h[1].dims),A=W("bias",h[2].dataType,h[2].dims),I=S.type.storage,P=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${c}u;
  var<workgroup> tileInput: array<${I}, ${c*c}>;
  var<workgroup> tileWeightQ: array<${I}, ${c*c}>;
  var<workgroup> tileWeightK: array<${I}, ${c*c}>;
  var<workgroup> tileWeightV: array<${I}, ${c*c}>;
  ${w.registerUniforms(P).declareVariables(S,E,A,v,C,x)}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:f,programUniforms:y}),getShaderSource:_},{inputs:h,outputs:[-1,-1,-1]})},hc=(e,t)=>{let i=s0(e.inputs,t),[r,s,d]=c0(e,i);return qt(e,r,s,d,e.inputs[4],void 0,void 0,void 0,e.inputs[5],i)}});var p0,f0,m0,gc,yc=X(()=>{"use strict";Qe();ce();me();Oe();ye();p0=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let i=(r,s,d)=>{let c=s.length;if(c!==r.length)throw new Error(`${d}: num dimensions != ${c}`);s.forEach((f,h)=>{if(f!==r[h])throw new Error(`${d}: dim[${h}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);i(e[1].dims,r,"Invalid input scale"),i(e[2].dims,r,"Invalid input B"),i(e[3].dims,r,"Invalid input mean"),i(e[4].dims,r,"Invalid input var")}else i(e[1].dims,[1],"Invalid input scale"),i(e[2].dims,[1],"Invalid input B"),i(e[3].dims,[1],"Invalid input mean"),i(e[4].dims,[1],"Invalid input var")},f0=(e,t)=>{let{epsilon:i,spatial:r,format:s}=t,d=e[0].dims,c=r?xe(d[d.length-1]):1,f=s==="NHWC"&&d.length>1?c:1,h=V.size(d)/c,y=r,_=y?d.length:d,w=W("x",e[0].dataType,e[0].dims,c),v=W("scale",e[1].dataType,e[1].dims,f),C=W("bias",e[2].dataType,e[2].dims,f),x=W("inputMean",e[3].dataType,e[3].dims,f),S=W("inputVar",e[4].dataType,e[4].dims,f),E=Y("y",e[0].dataType,_,c),A=()=>{let P="";if(r)P=`let cOffset = ${d.length===1?"0u":s==="NHWC"?`outputIndices[${d.length-1}] / ${c}`:"outputIndices[1]"};`;else if(s==="NCHW")P=`
            ${E.indicesSet("outputIndices","0","0")}
            let cOffset = ${E.indicesToOffset("outputIndices")};`;else{P=`var cIndices = ${v.type.indices}(0);
                       cIndices[0] = outputIndices[${d.length-1}];`;for(let D=1;D<v.rank;D++)P+=`cIndices[${D}] = outputIndices[${D}];`;P+=`let cOffset = ${v.indicesToOffset("cIndices")};`}return P},I=P=>`
  const epsilon = ${i};
  ${P.registerUniform("outputSize","u32").declareVariables(w,v,C,x,S,E)}
  ${P.mainStart()}
  ${P.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${E.offsetToIndices(`global_idx * ${c}`)};
    ${A()}
    let scale = ${v.getByOffset("cOffset")};
    let bias = ${C.getByOffset("cOffset")};
    let inputMean = ${x.getByOffset("cOffset")};
    let inputVar = ${S.getByOffset("cOffset")};
    let x = ${w.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${E.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${c}`,inputDependencies:y?["rank","type","type","type","type"]:void 0},getShaderSource:I,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:y?[{type:12,data:h},...J(d)]:[{type:12,data:h}]})}},m0=e=>pe(e),gc=(e,t)=>{let{inputs:i,outputCount:r}=e,s=m0({...t,outputCount:r});if(Ae.webgpu.validateInputContent&&p0(i,s),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(f0(i,s))}});var h0,g0,bc,_c=X(()=>{"use strict";me();ye();h0=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},g0=e=>{let t=e[0].dims,i=e[0].dims[2],r=V.size(t)/4,s=e[0].dataType,d=W("input",s,t,4),c=W("bias",s,[i],4),f=W("residual",s,t,4),h=Y("output",s,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:_=>`
  const channels = ${i}u / 4;
  ${_.declareVariables(d,c,f,h)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${d.getByOffset("global_idx")}
      + ${c.getByOffset("global_idx % channels")} + ${f.getByOffset("global_idx")};
    ${h.setByOffset("global_idx","value")}
  }`}},bc=e=>{h0(e.inputs),e.compute(g0(e.inputs))}});var y0,Se,wc,vc,$c,xc,Cc,Sc,Tc,Ic,Ac,b0,kc,Ec,Pc,zc,lr,Oc,nn,Dc,Bc,Mc,Rc,jc,Uc,Nc,Vc,Wc,Lc,Gc,Hc,Fc,qc,Kc,Yc,Zc,Qc,$i,xi,Xc,Jc,ep,_0,w0,tp,on=X(()=>{"use strict";ce();me();Oe();ye();y0=(e,t,i,r,s,d,c)=>{let f=Math.ceil(t/4),h="";typeof s=="string"?h=`${s}(a)`:h=s("a");let y=W("inputData",i,[f],4),_=Y("outputData",r,[f],4),w=[{name:"vec_size",type:"u32"}];return c&&w.push(...c),`
      ${e.registerUniforms(w).declareVariables(y,_)}

  ${d??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${y.getByOffset("global_idx")};
    ${_.setByOffset("global_idx",h)}
  }`},Se=(e,t,i,r,s,d=e.dataType,c,f)=>{let h=[{type:12,data:Math.ceil(V.size(e.dims)/4)}];return c&&h.push(...c),{name:t,shaderCache:{hint:s,inputDependencies:["type"]},getShaderSource:y=>y0(y,V.size(e.dims),e.dataType,d,i,r,f),getRunData:y=>({outputs:[{dims:e.dims,dataType:d}],dispatchGroup:{x:Math.ceil(V.size(y[0].dims)/64/4)},programUniforms:h})}},wc=e=>{e.compute(Se(e.inputs[0],"Abs","abs"))},vc=e=>{e.compute(Se(e.inputs[0],"Acos","acos"))},$c=e=>{e.compute(Se(e.inputs[0],"Acosh","acosh"))},xc=e=>{e.compute(Se(e.inputs[0],"Asin","asin"))},Cc=e=>{e.compute(Se(e.inputs[0],"Asinh","asinh"))},Sc=e=>{e.compute(Se(e.inputs[0],"Atan","atan"))},Tc=e=>{e.compute(Se(e.inputs[0],"Atanh","atanh"))},Ic=e=>pe(e),Ac=(e,t)=>{let i;switch(t.to){case 10:i="vec4<f16>";break;case 1:i="vec4<f32>";break;case 12:i="vec4<u32>";break;case 6:i="vec4<i32>";break;case 9:i="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Se(e.inputs[0],"Cast",i,void 0,t.cacheKey,t.to))},b0=e=>{let t,i,r=e.length>=2&&e[1].data!==0,s=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,i=s?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,i=s?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return pe({min:t,max:i})},kc=(e,t)=>{let i=t||b0(e.inputs),r=Ve(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"Clip",s=>`clamp(${s}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,i.cacheKey,void 0,[{type:e.inputs[0].dataType,data:i.min},{type:e.inputs[0].dataType,data:i.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},Ec=e=>{e.compute(Se(e.inputs[0],"Ceil","ceil"))},Pc=e=>{e.compute(Se(e.inputs[0],"Cos","cos"))},zc=e=>{e.compute(Se(e.inputs[0],"Cosh","cosh"))},lr=e=>pe(e),Oc=(e,t)=>{let i=Ve(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${i}(${t.alpha});

  fn elu_f32(a: ${i}) -> ${i} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${i}>) -> vec4<${i}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},nn=(e="f32")=>`
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
}`,Dc=e=>{let t=Ve(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"Erf",i=>`erf_vf32(${i})`,nn(t)))},Bc=e=>{e.compute(Se(e.inputs[0],"Exp","exp"))},Mc=e=>{e.compute(Se(e.inputs[0],"Floor","floor"))},Rc=e=>{let t=Ve(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"Gelu",i=>`0.5 * ${i} * (1.0 + erf_vf32(${i} * 0.7071067811865475))`,nn(t)))},jc=(e,t)=>{let i=Ve(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${i}>(0.0))`,`const leaky_relu_alpha_ = ${i}(${t.alpha});`,t.cacheKey))},Uc=e=>{e.compute(Se(e.inputs[0],"Not",t=>`!${t}`))},Nc=e=>{e.compute(Se(e.inputs[0],"Neg",t=>`-${t}`))},Vc=e=>{e.compute(Se(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Wc=e=>{let t=Ve(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"Relu",i=>`select(vec4<${t}>(0.0), ${i}, ${i} > vec4<${t}>(0.0))`))},Lc=e=>{e.compute(Se(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Gc=e=>pe(e),Hc=(e,t)=>{let i=Ve(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"HardSigmoid",r=>`max(vec4<${i}>(0.0), min(vec4<${i}>(1.0), ${t.alpha} * ${r} + vec4<${i}>(${t.beta})))`,void 0,t.cacheKey))},Fc=e=>{e.compute(Se(e.inputs[0],"Sin","sin"))},qc=e=>{e.compute(Se(e.inputs[0],"Sinh","sinh"))},Kc=e=>{e.compute(Se(e.inputs[0],"Sqrt","sqrt"))},Yc=e=>{e.compute(Se(e.inputs[0],"Tan","tan"))},Zc=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Qc=e=>{e.compute(Se(e.inputs[0],"Tanh",Zc))},$i=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Zc("v")};
}
`,xi=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Xc=e=>{let t=Ve(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"FastGelu",xi,$i(t),void 0,e.inputs[0].dataType))},Jc=(e,t)=>{let i=Ve(e.inputs[0].dataType);return e.compute(Se(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${i}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${i}>(${t.alpha});`,t.cacheKey)),0},ep=e=>{e.compute(Se(e.inputs[0],"Log","log"))},_0=(e,t)=>`
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
`,w0=e=>`quick_gelu_impl(${e})`,tp=(e,t)=>{let i=Ve(e.inputs[0].dataType);e.compute(Se(e.inputs[0],"QuickGelu",w0,_0(i,t.alpha),t.cacheKey,e.inputs[0].dataType))}});var v0,$0,np,ip=X(()=>{"use strict";me();ye();on();v0=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},$0=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let i=W("input",e[0].dataType,e[0].dims,4),r=W("bias",e[0].dataType,[e[0].dims[2]],4),s=Y("output",e[0].dataType,t,4),d=V.size(t)/4,c=Ie(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)}}),getShaderSource:h=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${h.declareVariables(i,r,s)}

  ${nn(c)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes(d)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${s.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},np=e=>{v0(e.inputs),e.compute($0(e.inputs))}});var x0,C0,gt,op,ap,sp,up,lp,dp,cp,pp,fp,mp,hp=X(()=>{"use strict";ce();me();ye();x0=(e,t,i,r,s,d,c,f,h,y,_,w)=>{let v,C;typeof f=="string"?v=C=(I,P)=>`${f}((${I}),(${P}))`:typeof f=="function"?v=C=f:(v=f.scalar,C=f.vector);let x=Y("outputData",_,r.length,4),S=W("aData",h,t.length,4),E=W("bData",y,i.length,4),A;if(s)if(d){let I=V.size(t)===1,P=V.size(i)===1,D=t.length>0&&t[t.length-1]%4===0,B=i.length>0&&i[i.length-1]%4===0;I||P?A=x.setByOffset("global_idx",C(I?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"),P?`${E.type.value}(${E.getByOffset("0")}.x)`:E.getByOffset("global_idx"))):A=`
            let outputIndices = ${x.offsetToIndices("global_idx * 4u")};
            let offsetA = ${S.broadcastedIndicesToOffset("outputIndices",x)};
            let offsetB = ${E.broadcastedIndicesToOffset("outputIndices",x)};
            ${x.setByOffset("global_idx",C(c||D?S.getByOffset("offsetA / 4u"):`${S.type.value}(${S.getByOffset("offsetA / 4u")}[offsetA % 4u])`,c||B?E.getByOffset("offsetB / 4u"):`${E.type.value}(${E.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else A=x.setByOffset("global_idx",C(S.getByOffset("global_idx"),E.getByOffset("global_idx")));else{if(!d)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let I=(P,D,B="")=>{let M=`aData[indexA${D}][componentA${D}]`,G=`bData[indexB${D}][componentB${D}]`;return`
            let outputIndices${D} = ${x.offsetToIndices(`global_idx * 4u + ${D}u`)};
            let offsetA${D} = ${S.broadcastedIndicesToOffset(`outputIndices${D}`,x)};
            let offsetB${D} = ${E.broadcastedIndicesToOffset(`outputIndices${D}`,x)};
            let indexA${D} = offsetA${D} / 4u;
            let indexB${D} = offsetB${D} / 4u;
            let componentA${D} = offsetA${D} % 4u;
            let componentB${D} = offsetB${D} % 4u;
            ${P}[${D}] = ${B}(${v(M,G)});
          `};_===9?A=`
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
        ${e.registerUniform("vec_size","u32").declareVariables(S,E,x)}

        ${w??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${A}
      }`},C0=(e,t,i,r,s,d,c=i.dataType)=>{let f=i.dims.map(S=>Number(S)??1),h=r.dims.map(S=>Number(S)??1),y=!V.areEqual(f,h),_=f,w=V.size(f),v=!1,C=!1,x=[y];if(y){let S=ct.calcShape(f,h,!1);if(!S)throw new Error("Can't perform binary op on the given tensors");_=S.slice(),w=V.size(_);let E=V.size(f)===1,A=V.size(h)===1,I=f.length>0&&f[f.length-1]%4===0,P=h.length>0&&h[h.length-1]%4===0;x.push(E),x.push(A),x.push(I),x.push(P);let D=1;for(let B=1;B<_.length;B++){let M=f[f.length-B],G=h[h.length-B];if(M===G)D*=M;else break}D%4===0?(C=!0,v=!0):(E||A||I||P)&&(v=!0)}else v=!0;return x.push(v),{name:e,shaderCache:{hint:t+x.map(S=>S.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:S=>x0(S,f,h,_,v,y,C,s,i.dataType,r.dataType,c,d),getRunData:()=>({outputs:[{dims:_,dataType:c}],dispatchGroup:{x:Math.ceil(w/64/4)},programUniforms:[{type:12,data:Math.ceil(V.size(_)/4)},...J(f,h,_)]})}},gt=(e,t,i,r,s,d)=>{e.compute(C0(t,s??"",e.inputs[0],e.inputs[1],i,r,d))},op=e=>{gt(e,"Add",(t,i)=>`${t}+${i}`)},ap=e=>{gt(e,"Div",(t,i)=>`${t}/${i}`)},sp=e=>{gt(e,"Equal",{scalar:(t,i)=>`u32(${t}==${i})`,vector:(t,i)=>`vec4<u32>(${t}==${i})`},void 0,void 0,9)},up=e=>{gt(e,"Mul",(t,i)=>`${t}*${i}`)},lp=e=>{let t=W("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;gt(e,"Pow",{scalar:(r,s)=>`pow_custom(${r},${s})`,vector:(r,s)=>`pow_vector_custom(${r},${s})`},`
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
      `)},dp=e=>{gt(e,"Sub",(t,i)=>`${t}-${i}`)},cp=e=>{gt(e,"Greater",{scalar:(t,i)=>`u32(${t}>${i})`,vector:(t,i)=>`vec4<u32>(${t}>${i})`},void 0,void 0,9)},pp=e=>{gt(e,"Less",{scalar:(t,i)=>`u32(${t}<${i})`,vector:(t,i)=>`vec4<u32>(${t}<${i})`},void 0,void 0,9)},fp=e=>{gt(e,"GreaterOrEqual",{scalar:(t,i)=>`u32(${t}>=${i})`,vector:(t,i)=>`vec4<u32>(${t}>=${i})`},void 0,void 0,9)},mp=e=>{gt(e,"LessOrEqual",{scalar:(t,i)=>`u32(${t}<=${i})`,vector:(t,i)=>`vec4<u32>(${t}<=${i})`},void 0,void 0,9)}});var T0,I0,A0,k0,gp,yp,bp=X(()=>{"use strict";ce();me();Oe();ye();T0=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let i=0,r=e[i],s=r.dataType,d=r.dims.length;e.forEach((c,f)=>{if(f!==i){if(c.dataType!==s)throw new Error("input tensors should be one type");if(c.dims.length!==d)throw new Error("input tensors should have the same shape");c.dims.forEach((h,y)=>{if(y!==t&&h!==r.dims[y])throw new Error("non concat dimensions must match")})}})},I0=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,A0=(e,t)=>{let i=e.length,r=[];for(let s=0;s<i;++s){let d=t.setByOffset("global_idx",e[s].getByIndices("indices"));i===1?r.push(d):s===0?r.push(`if (inputIndex == ${s}u) { ${d} }`):s===i-1?r.push(`else { ${d} }`):r.push(`else if (inputIndex == ${s}) { ${d} }`)}return r.join(`
`)},k0=(e,t,i,r)=>{let s=V.size(i),d=new Array(e.length),c=new Array(e.length),f=0,h=[],y=[],_=[{type:12,data:s}];for(let S=0;S<e.length;++S)f+=e[S].dims[t],d[S]=f,y.push(e[S].dims.length),c[S]=W(`input${S}`,r,y[S]),h.push("rank"),_.push({type:12,data:d[S]});for(let S=0;S<e.length;++S)_.push(...J(e[S].dims));_.push(...J(i));let w=Y("output",r,i.length),v=w.indicesGet("indices",t),C=Array.from(Array(d.length).keys()).map(S=>`uniforms.sizeInConcatAxis${S}`).join(","),x=S=>`

  ${(()=>{S.registerUniform("outputSize","u32");for(let E=0;E<e.length;E++)S.registerUniform(`sizeInConcatAxis${E}`,"u32");return S.declareVariables(...c,w)})()}

  ${I0(d.length,C)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${w.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${v});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${d.length}u>(${C});
      ${v} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${A0(c,w)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:i,dataType:r}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:_}),getShaderSource:x}},gp=(e,t)=>{let i=e.inputs,r=i[0].dims,s=V.normalizeAxis(t.axis,r.length);T0(i,s);let d=r.slice();d[s]=i.reduce((f,h)=>f+(h.dims.length>s?h.dims[s]:0),0);let c=i.filter(f=>V.size(f.dims)>0);e.compute(k0(c,s,d,i[0].dataType),{inputs:c})},yp=e=>pe({axis:e.axis})});var nt,it,ot,an,Et=X(()=>{"use strict";ce();me();nt=(e,t,i="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${i}(uniforms.clip_min)), ${t}(${i}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${i}(uniforms.alpha) * value + ${i}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${i}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},it=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},ot=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},an=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[i,r]=e?.activation_params||[.2,.5];return{activation:t,alpha:i,beta:r}}else if(t==="Clip"){let[i,r]=e?.activation_params||[Rd,jd];return{activation:t,clipMax:r,clipMin:i}}else if(t==="LeakyRelu"){let[i]=e?.activation_params||[.01];return{activation:t,alpha:i}}return{activation:t}}});var je,_p,sn=X(()=>{"use strict";je=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},_p=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `});var wp,vp=X(()=>{"use strict";wp=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`});var dr,un,ln=X(()=>{"use strict";ce();me();ye();Et();dr=(e,t,i,r,s)=>{let d=r-i;return`
      ${Array.from({length:i}).map((c,f)=>`
      if (${re(t.shape,f,t.rank)} != 1) {
        ${t.indicesSet(e,f,re(s,f+d,r))}
      } else {
        ${t.indicesSet(e,f,0)}
      }`).join("")}
`},un=(e,t,i,r,s=!1,d)=>{let c=e[0].dims,f=e[1].dims,h=c[c.length-2],y=f[f.length-1],_=c[c.length-1],w=xe(y),v=xe(_),C=xe(h),x=V.size(i)/w/C,S=e.length>2,E=r?r.slice(0,-2):i.slice(0,-2),I=[V.size(E),h,y],P=[{type:12,data:x},{type:12,data:h},{type:12,data:y},{type:12,data:_}];it(t,P),P.push(...J(E,c,f)),S&&P.push(...J(e[2].dims)),P.push(...J(I));let D=B=>{let M=Jr("batch_dims",e[0].dataType,E.length),G=W("a",e[0].dataType,c.length,v),F=W("b",e[1].dataType,f.length,w),Z=Y("output",e[0].dataType,I.length,w),te=Ie(Z.type.tensor),ne=nt(t,Z.type.value,te),fe=[G,F],Q="";if(S){let ae=s?w:1;fe.push(W("bias",e[2].dataType,e[2].dims.length,ae)),Q=`${s?`value += bias[col / ${ae}];`:`value += ${Z.type.value}(bias[row + i]);`}`}let ue=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];ot(t,ue);let ke=()=>{let ae=`var a_data: ${G.type.value};`;for(let de=0;de<v;de++)ae+=`
              let b_data${de} = b[(b_offset + (k + ${de}) * uniforms.N + col) / ${w}];`;for(let de=0;de<C;de++){ae+=`a_data = a[(a_offset + (row + ${de}) * uniforms.K + k) / ${v}];`;for(let ge=0;ge<v;ge++)ae+=`
            values[${de}] = fma(${F.type.value}(a_data${v===1?"":`[${ge}]`}), b_data${ge}, values[${de}]);
`}return ae};return`
  ${B.registerUniforms(ue).registerInternalVariables(M).declareVariables(...fe,Z)}
  ${B.mainStart()}
    ${B.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${w})) * ${w};
    var index1 = global_idx / (uniforms.N / ${w});
    let stride1 = uniforms.M / ${C};
    let row = (index1 % stride1) * ${C};
    let batch = index1 / stride1;

    ${i.length===2?"":`let batch_indices = ${M.offsetToIndices("batch")};`}

    var a_indices: ${G.type.indices};
    ${dr("a_indices",G,G.rank-2,M.rank,"batch_indices")}
    ${G.indicesSet("a_indices",G.rank-2,0)}
    ${G.indicesSet("a_indices",G.rank-1,0)}
    let a_offset = ${G.indicesToOffset("a_indices")};

    var b_indices: ${F.type.indices};
    ${dr("b_indices",F,F.rank-2,M.rank,"batch_indices")}
    ${F.indicesSet("b_indices",F.rank-2,0)}
    ${F.indicesSet("b_indices",F.rank-1,0)}
    let b_offset = ${F.indicesToOffset("b_indices")};
    var values: array<${Z.type.value}, ${C}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${v}) {
      ${ke()}
    }
    for (var i = 0u; i < ${C}u; i++) {
      var value = values[i];
      ${Q}
      ${ne}
      let cur_indices = ${Z.type.indices}(batch, row + i, col);
      let offset = ${Z.indicesToOffset("cur_indices")};
      ${Z.setByOffset(`offset / ${w}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${w};${v};${C};${s}`,inputDependencies:S?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:d?d(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:P}),getShaderSource:D}}});var E0,P0,Ci,$p,z0,Si,O0,cr,dn=X(()=>{"use strict";ce();me();ye();Et();ln();sn();E0=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,P0=(e,t)=>e?`
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
        }`,Ci=(e,t,i="f32",r,s=!1,d=32,c=!1,f=32)=>{let h=t[1]*e[1],y=t[0]*e[0],_=s?h:d,w=s?d:h,v=_/t[0],C=d/t[1];if(!((s&&v===4&&e[1]===4||!s&&(v===3||v===4))&&_%t[0]===0&&d%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${s} is true, innerElementSize ${v} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${v} must be 3 or 4.
  tileAWidth ${_} must be divisible by workgroupSize[0]${t[0]}. tileInner ${d} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${v}<${i}>, ${_/v}>, ${w}>;
var<workgroup> mm_Bsub: array<array<vec4<${i}>, ${y/e[0]}>, ${d}>;

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
          ${E0(s,r)}
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

          ${P0(s,v)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},$p=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,z0=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Si=(e,t,i="f32",r,s=!1,d=32,c=!1,f=32,h=!1)=>{let y=e[1]*t[1],_=e[0]*t[0],w=s?y:d,v=s?d:y;if(!(v%t[1]===0&&w%t[0]===0&&d%t[1]===0))throw new Error(`tileAHight ${v} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${w} must be divisible by workgroupSize[0]${t[0]}, tileInner ${d} must be divisible by workgroupSize[1]${t[1]}`);let C=v/t[1],x=w/t[0],S=d/t[1],E=h?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${y};
    let globalColStart = i32(workgroupId.x) * ${_};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${v}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${w}; inputCol = inputCol + ${t[0]}) {
          ${$p(s,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${d}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${_}; inputCol = inputCol + ${t[0]}) {
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
let globalRowStart = i32(workgroupId.y) * ${y};

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
      ${$p(s,r)}
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
      ${z0(s)}
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
  var<workgroup> mm_Bsub : array<array<${i}, ${_}>, ${d}>;
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
    ${E}
  }
`},O0=(e,t,i,r,s=!1)=>{let[d,c,f,h]=r,y=Ie(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${d.type.indices}) -> ${je(e,y)} {
      var value = ${je(e,y)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${c.type.indices};
        ${dr("aIndices",c,c.rank-2,d.rank,"batchIndices")}
        ${c.indicesSet("aIndices",c.rank-2,"u32(row)")}
        ${c.indicesSet("aIndices",c.rank-1,"u32(colIn)")}
        value = ${c.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${d.type.indices}) -> ${je(e,y)} {
      var value = ${je(e,y)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${f.type.indices};
        ${dr("bIndices",f,f.rank-2,d.rank,"batchIndices")}
        ${f.indicesSet("bIndices",f.rank-2,"u32(row)")}
        ${f.indicesSet("bIndices",f.rank-1,"u32(colIn)")}
        value = ${f.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${je(e,y)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${s?"bias[colIn]":`${je(e,y)}(bias[row])`};`:""}
        ${i}
        ${h.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},cr=(e,t,i,r,s=!1,d)=>{let c=e[0].dims,f=e[1].dims,h=c.slice(0,-2),y=f.slice(0,-2),_=r?r.slice(0,-2):i.slice(0,-2),w=V.size(_),v=c[c.length-2],C=c[c.length-1],x=f[f.length-1],S=C%4===0&&x%4===0,E=v<=8?[4,1,1]:[4,4,1],A=[8,8,1],I=[Math.ceil(x/A[0]/E[0]),Math.ceil(v/A[1]/E[1]),Math.ceil(w/A[2]/E[2])],P=S?4:1,D=[...h,v,C/P],B=D.length,M=[...y,C,x/P],G=M.length,F=[w,v,x/P],Z=[{type:6,data:v},{type:6,data:x},{type:6,data:C}];it(t,Z),Z.push(...J(_,D,M));let te=["rank","rank"],ne=e.length>2;ne&&(Z.push(...J(e[2].dims)),te.push("rank")),Z.push(...J(F));let fe=Q=>{let ue=_.length,ke=Jr("batchDims",e[0].dataType,ue,1),ae=Ie(e[0].dataType),de=W("a",e[0].dataType,B,P),ge=W("b",e[1].dataType,G,P),ie=Y("result",e[0].dataType,F.length,P),be=[de,ge];if(ne){let se=s?P:1;be.push(W("bias",e[2].dataType,e[2].dims.length,se))}let Me=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];ot(t,Me);let Pe=Ie(ie.type.tensor),H=nt(t,ie.type.value,Pe),q=O0(P,ne,H,[ke,de,ge,ie],s);return`
  ${Q.registerUniforms(Me).registerInternalVariables(ke).declareVariables(...be,ie)}
  ${q}
  ${S?Ci(E,A,ae,ke):Si(E,A,ae,ke)}
                   `};return{name:"MatMul",shaderCache:{hint:`${E};${t.activation};${S};${s}`,inputDependencies:te},getRunData:()=>({outputs:[{dims:d?d(i):i,dataType:e[0].dataType}],dispatchGroup:{x:I[0],y:I[1],z:I[2]},programUniforms:Z}),getShaderSource:fe}}});var D0,xp,Cp=X(()=>{"use strict";ce();dt();ye();Et();sn();vp();dn();D0=(e,t,i,r,s=!1,d,c=4,f=4,h=4,y="f32")=>{let _=te=>{switch(te){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${y}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${te} is not supported.`)}},w=te=>{switch(te){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${te} is not supported.`)}},v=e?`
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
    `,x=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",S=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",E=e?"row":"col",A=e?"col":"row",I=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${E} / outWidth;
    let outCol = ${E} % outWidth;

    let WRow = ${A} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${A} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${A} % inChannels;
    var resData = ${je(c,y)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${x} && xCol >= 0 && xCol < ${S}) {
      ${v}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${_(c)}
    }
    return resData;`,P=e?t&&r?`
    let col = colIn * ${c};
    ${I}`:`
    let col = colIn * ${c};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${I}
    }
    return ${je(c,y)}(0.0);`:r&&i?`
    let col = colIn * ${c};
    ${I}`:`
    let col = colIn * ${c};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${I}
    }
    return ${je(c,y)}(0.0);`,D=e?r&&i?w(f):`
    let col = colIn * ${f};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w(f)}
    }
    return ${je(f,y)}(0.0);`:`
    let col = colIn * ${f};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${w(f)}
    }
    return ${je(f,y)}(0.0);`,B=je(h,y),M=e?je(c,y):je(f,y),G=e?je(f,y):je(c,y),F=nt(d,B,y);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${M} {
      ${e?P:D}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${G} {
      ${e?D:P}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${B}) {
      let col = colIn * ${h};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${C}
      ${_p(s)}
      ${F}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},xp=(e,t,i,r,s,d,c,f,h)=>{let y=t.format==="NHWC",_=y?e[0].dims[3]:e[0].dims[1],w=i[0],v=y?i[2]:i[3],C=y?i[1]:i[2],x=y?i[3]:i[1],S=y&&(_%4===0||_%3===0)&&x%4===0,E=y?x:v*C,A=y?v*C:x,I=[8,8,1],P=r<=8?[4,1,1]:[4,4,1],D=[Math.ceil(E/I[0]/P[0]),Math.ceil(A/I[1]/P[1]),Math.ceil(w/I[2]/P[2])];_e("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${D}`);let B=S?y&&_%4!==0?3:4:1,M=I[1]*P[1],G=I[0]*P[0],F=Math.max(I[0]*B,I[1]),Z=r%M===0,te=s%G===0,ne=d%F===0,fe=S?[B,4,4]:[1,1,1],Q=[{type:6,data:r},{type:6,data:s},{type:6,data:d},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];it(t,Q),Q.push(...J(e[0].dims,e[1].dims));let ue=["rank","rank"];c&&(Q.push(...J(e[2].dims)),ue.push("rank")),Q.push(...J(i));let ke=ae=>{let de=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];ot(t,de);let ge=S?4:1,ie=Ie(e[0].dataType),be=`
      fn setOutputAtIndex(flatIndex : i32, value : ${S?`vec4<${ie}>`:ie}) {
        result[flatIndex] = ${S?`vec4<${ie}>`:ie}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${S?`vec4<${ie}>`:ie}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${S?"/ 4":""}, value);
      }`,Me=W("x",e[0].dataType,e[0].dims.length,B===3?1:B),Pe=W("w",e[1].dataType,e[1].dims.length,ge),H=[Me,Pe],q=Y("result",e[0].dataType,i.length,ge);if(c){let se=W("bias",e[2].dataType,e[2].dims.length,ge);H.push(se),be+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${S?`vec4<${ie}>`:ie} {
          return bias[coords.${y?"w":"y"}${S?"/ 4":""}];
        }`}return`
        ${wp("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${ae.registerUniforms(de).declareVariables(...H,q)}
        ${be}
        ${D0(y,Z,te,ne,c,t,fe[0],fe[1],fe[2],ie)}
        ${S?Ci(P,I,ie,void 0,!y,F):Si(P,I,ie,void 0,!y,F,!1,void 0,f)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${B};${S};${Z};${te};${ne};${M};${G};${F}`,inputDependencies:ue},getRunData:()=>({outputs:[{dims:h?h(i):i,dataType:e[0].dataType}],dispatchGroup:{x:D[0],y:D[1],z:D[2]},programUniforms:Q}),getShaderSource:ke}}});var B0,Sp,cn,M0,Tp,R0,Ip,Ap,kp=X(()=>{"use strict";ce();dt();me();ye();Et();sn();B0=e=>{let t=1;for(let i=0;i<e.length;i++)t*=e[i];return t},Sp=e=>typeof e=="number"?[e,e,e]:e,cn=(e,t)=>t<=1?e:e+(e-1)*(t-1),M0=(e,t,i,r=1)=>{let s=cn(t,r);return Math.floor((e[0]*(i-1)-i+s)/2)},Tp=(e,t,i,r,s)=>{s==null&&(s=M0(e,t[0],r[0]));let d=[0,0,0,i];for(let c=0;c<3;c++)e[c]+2*s>=t[c]&&(d[c]=Math.trunc((e[c]-t[c]+2*s)/r[c]+1));return d},R0=(e,t,i,r,s,d,c,f,h,y)=>{let _,w,v,C;if(e==="VALID"&&(e=0),typeof e=="number"){_={top:e,bottom:e,left:e,right:e,front:e,back:e};let x=Tp([t,i,r,1],[f,h,y],1,[s,d,c],e);w=x[0],v=x[1],C=x[2]}else if(Array.isArray(e)){if(!e.every((S,E,A)=>S===A[0]))throw Error(`Unsupported padding parameter: ${e}`);_={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let x=Tp([t,i,r,1],[f,h,y],1,[s,d,c],e[0]);w=x[0],v=x[1],C=x[2]}else if(e==="SAME_UPPER"){w=Math.ceil(t/s),v=Math.ceil(i/d),C=Math.ceil(r/c);let x=(w-1)*s+f-t,S=(v-1)*d+h-i,E=(C-1)*c+y-r,A=Math.floor(x/2),I=x-A,P=Math.floor(S/2),D=S-P,B=Math.floor(E/2),M=E-B;_={top:P,bottom:D,left:B,right:M,front:A,back:I}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:_,outDepth:w,outHeight:v,outWidth:C}},Ip=(e,t,i,r,s,d=!1,c="channelsLast")=>{let f,h,y,_,w;if(c==="channelsLast")[f,h,y,_,w]=e;else if(c==="channelsFirst")[f,w,h,y,_]=e;else throw new Error(`Unknown dataFormat ${c}`);let[v,,C,x,S]=t,[E,A,I]=Sp(i),[P,D,B]=Sp(r),M=cn(C,P),G=cn(x,D),F=cn(S,B),{padInfo:Z,outDepth:te,outHeight:ne,outWidth:fe}=R0(s,h,y,_,E,A,I,M,G,F),Q=d?v*w:v,ue=[0,0,0,0,0];return c==="channelsFirst"?ue=[f,Q,te,ne,fe]:c==="channelsLast"&&(ue=[f,te,ne,fe,Q]),{batchSize:f,dataFormat:c,inDepth:h,inHeight:y,inWidth:_,inChannels:w,outDepth:te,outHeight:ne,outWidth:fe,outChannels:Q,padInfo:Z,strideDepth:E,strideHeight:A,strideWidth:I,filterDepth:C,filterHeight:x,filterWidth:S,effectiveFilterDepth:M,effectiveFilterHeight:G,effectiveFilterWidth:F,dilationDepth:P,dilationHeight:D,dilationWidth:B,inShape:e,outShape:ue,filterShape:t}},Ap=(e,t,i,r,s,d)=>{let c=d==="channelsLast",f=c?e[0].dims[3]:e[0].dims[1],h=!1,y=[64,1,1],_={x:i.map((I,P)=>P)},w=[Math.ceil(B0(_.x.map(I=>i[I]))/y[0]),1,1];_e("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${w}`);let v=h?c&&f%4!==0?3:4:1,C=V.size(i),x=[{type:12,data:C},{type:12,data:r},{type:12,data:s},{type:12,data:t.strides},{type:12,data:t.dilations}];it(t,x),x.push(...J(e[0].dims,e[1].dims));let S=["rank","rank"],E=e.length===3;E&&(x.push(...J(e[2].dims)),S.push("rank")),x.push(...J(i));let A=I=>{let P=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:s.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];ot(t,P);let D=h?4:1,B=Ie(e[0].dataType),M=W("x",e[0].dataType,e[0].dims.length,v===3?1:v),G=W("W",e[1].dataType,e[1].dims.length,D),F=[M,G],Z=Y("result",e[0].dataType,i.length,D),te="";if(E){let Q=W("bias",e[2].dataType,e[2].dims.length,D);F.push(Q),te+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${h?`vec4<${B}>`:B} {
          return bias[${c?re("coords",4,5):re("coords",1,5)}${h?"/ 4":""}];
        }`}let ne=je(v,B),fe=nt(t,ne,B);return`
            ${te}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${M.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${G.getByIndices("aIndices")};
            }
          ${I.registerUniforms(P).declareVariables(...F,Z)}
          ${I.mainStart()}
          ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${Z.offsetToIndices("global_idx")};
              let batch = ${re("coords",0,M.rank)};
              let d2 = ${c?re("coords",M.rank-1,M.rank):re("coords",1,M.rank)};
              let xFRCCorner = vec3<u32>(${c?re("coords",1,M.rank):re("coords",2,M.rank)},
              ${c?re("coords",2,M.rank):re("coords",3,M.rank)},
              ${c?re("coords",3,M.rank):re("coords",4,M.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${c?re("uniforms.x_shape",1,M.rank):re("uniforms.x_shape",2,M.rank)};
              let xShapeZ = ${c?re("uniforms.x_shape",2,M.rank):re("uniforms.x_shape",3,M.rank)};
              let xShapeW = ${c?re("uniforms.x_shape",3,M.rank):re("uniforms.x_shape",4,M.rank)};
              let xShapeU = ${c?re("uniforms.x_shape",4,M.rank):re("uniforms.x_shape",1,M.rank)};
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
              ${E?"value = value + getBiasByOutputCoords(coords)":""};
              ${fe}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${c};${v};${E}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:x}),getShaderSource:A}}});var Ep,Pp,zp=X(()=>{"use strict";ce();me();ye();Et();Ep=(e,t,i,r)=>{let s=e.length>2,d=s?"value += b[output_channel];":"",c=e[0].dims,f=e[1].dims,h=t.format==="NHWC",y=h?i[3]:i[1],_=y/t.group,w=h&&_>=4?xe(y):1,v=V.size(i)/w,C=[{type:12,data:v},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:_}];it(t,C),C.push(...J(c,[f[0],f[1],f[2],f[3]/w]));let x=s?["rank","rank","rank"]:["rank","rank"];C.push(...J([i[0],i[1],i[2],i[3]/w]));let S=E=>{let A=Y("output",e[0].dataType,i.length,w),I=Ie(A.type.tensor),P=nt(t,A.type.value,I),D=W("x",e[0].dataType,c.length),B=W("w",e[1].dataType,f.length,w),M=[D,B];s&&M.push(W("b",e[2].dataType,e[2].dims,w));let G=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];ot(t,G);let F=h?`
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
            let xVal = ${D.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${B.get("wHeight","wWidth","wInChannel","output_channel")};
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

            let xVal = ${D.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${B.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${E.registerUniforms(G).declareVariables(...M,A)}

  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

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
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${w}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:C}),getShaderSource:S}},Pp=(e,t,i,r)=>{let s=e.length>2,d=xe(i[3]),c=xe(i[2]),f=V.size(i)/d/c,h=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/d],y=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/d],_=[i[0],i[1],i[2],i[3]/d],w=[{type:12,data:f},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];it(t,w),w.push(...J(h,y,_));let v=(c-1)*t.strides[1]+y[1],C=x=>{let S=Y("output",e[0].dataType,_.length,d),E=Ie(S.type.tensor),A=nt(t,S.type.value,E),I=W("x",e[0].dataType,h.length,d),P=W("w",e[1].dataType,y.length,d),D=[I,P];s&&D.push(W("b",e[2].dataType,e[2].dims,d));let B=s?"value += b[output_channel];":"",M=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return ot(t,M),`
  ${x.registerUniforms(M).declareVariables(...D,S)}
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
    for (var w_height: u32 = 0u; w_height < ${y[0]}; w_height++) {
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
        for (var w_width: u32 = 0u; w_width < ${y[1]}; w_width++) {
          let w_val = ${P.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${c}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${c}u; i++) {
      var value = values[i];
      ${B}
      ${A}
      ${S.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${d};${c};${v};${y[0]};${y[1]}`,inputDependencies:s?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:w}),getShaderSource:C}}});var j0,Ti,U0,Ii,Ai,Op,N0,V0,ki,Dp=X(()=>{"use strict";me();Cp();kp();dn();zp();Et();ln();wt();j0=(e,t,i,r,s,d)=>{let c=e[0],f=e.slice(d?1:2,d?3:4),h=f.length,y=t[0],w=t.slice(2).map((x,S)=>x+(x-1)*(i[S]-1)),C=f.map((x,S)=>x+r[S]+r[S+h]).map((x,S)=>Math.floor((x-w[S]+s[S])/s[S]));return C.splice(0,0,c),C.splice(d?3:1,0,y),C},Ti=[2,3,1,0],U0=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(i!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Ii=(e,t)=>{let i=e.kernelShape.slice();i.length<t[1].dims.length-2&&i.push(...Array(t[1].dims.length-2-i.length).fill(0));for(let d=2;d<t[1].dims.length;++d)i[d-2]===0&&(i[d-2]=t[1].dims[d]);let r=e.pads.slice();jt.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,i,r,e.format==="NHWC",e.autoPad);let s=Object.assign({},e);return Object.assign(s,{kernelShape:i,pads:r}),s},Ai=e=>{let t=an(e),i=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],s=e.dilations,d=e.group,c=e.kernel_shape,f=e.pads,h=e.strides,y=e.w_is_const();return{autoPad:r,format:i,dilations:s,group:d,kernelShape:c,pads:f,strides:h,wIsConst:y,...t,cacheKey:`${e.format};${t.activation};`}},Op=(e,t,i,r)=>{let s=i.format==="NHWC",d=j0(t[0].dims,t[1].dims,i.dilations,i.pads,i.strides,s);if(i.group!==1){let M=[t[0]];if(s){let F=e.kernelCustomData.wT??e.compute(We(t[1],Ti),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=F),M.push(F)}else M.push(t[1]);t.length===3&&M.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&s&&t[1].dims[0]===i.group&&t[1].dims[1]===1&&i.dilations[0]===1&&i.dilations[1]===1?e.compute(Pp(M,i,d,r),{inputs:M}):e.compute(Ep(M,i,d,r),{inputs:M});return}let c=t.length===3,f=t[0].dims[s?1:2],h=t[0].dims[s?2:3],y=t[0].dims[s?3:1],_=t[1].dims[2],w=t[1].dims[3],v=d[s?1:2],C=d[s?2:3],x=d[s?3:1],S=s&&_===f&&w===h&&i.pads[0]===0&&i.pads[1]===0;if(S||_===1&&w===1&&i.dilations[0]===1&&i.dilations[1]===1&&i.strides[0]===1&&i.strides[1]===1&&i.pads[0]===0&&i.pads[1]===0){let M=d[0],G,F,Z,te=[];if(s){let Q=e.kernelCustomData.wT??e.compute(We(t[1],Ti),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];if(i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=Q),S){let ue=f*h*y;G=t[0].reshape([1,M,ue]),F=Q.reshape([1,ue,x]),Z=[1,M,x]}else G=t[0].reshape([M,f*h,y]),F=Q.reshape([1,y,x]),Z=[M,v*C,x];te.push(G),te.push(F)}else G=t[0].reshape([M,y,f*h]),F=t[1].reshape([1,x,y]),Z=[M,x,v*C],te.push(F),te.push(G);c&&te.push(t[2]);let ne=Z[2],fe=te[0].dims[te[0].dims.length-1];ne<8&&fe<8?e.compute(un(te,i,d,Z,s,r),{inputs:te}):e.compute(cr(te,i,d,Z,s,r),{inputs:te});return}let E=!0,A=e.kernelCustomData.wT??e.compute(We(t[1],Ti),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=A);let I=[t[0],A];c&&I.push(t[2]);let P=s?v*C:x,D=s?x:v*C,B=_*w*y;e.compute(xp(I,i,d,P,D,B,c,E,r),{inputs:I})},N0=(e,t)=>{let i=t.format==="NHWC",r=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let s=[0,t.pads[0],0,t.pads[1]],d=[1].concat(t.strides),c=[1].concat(t.dilations),f=[1].concat(t.kernelShape),h=Ii({...t,pads:s,strides:d,dilations:c,kernelShape:f},r);Op(e,r,h,y=>i?[y[0],y[2],y[3]]:[y[0],y[1],y[3]])},V0=(e,t,i)=>{let r=i.format==="NHWC"?"channelsLast":"channelsFirst",s=Ii(i,t),d=i.autoPad==="NOTSET"?i.pads:i.autoPad,c=Ip(t[0].dims,t[1].dims,i.strides,i.dilations,d,!1,r);e.compute(Ap(t,s,c.outShape,[c.filterDepth,c.filterHeight,c.filterWidth],[c.padInfo.front,c.padInfo.top,c.padInfo.left],r))},ki=(e,t)=>{if(U0(e.inputs,t),e.inputs[0].dims.length===3)N0(e,t);else if(e.inputs[0].dims.length===5)V0(e,e.inputs,t);else{let i=Ii(t,e.inputs);Op(e,e.inputs,i)}}});var Bp,Mp=X(()=>{"use strict";ce();dt();me();ye();Bp=(e,t,i)=>{let r=e.length>2,s=t.outputShape,d=t.format==="NHWC",c=t.group,f=e[1].dims,h=f[2]/c,y=f[3],_=d?xe(h):1,w=d?xe(y):1,v=d?y===1?_:w:1,C=V.size(s)/w,x=[Math.ceil(C/64),1,1];_e("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${x}`);let S=["rank","rank"],E=[t.strides[0],t.strides[1]],A=[t.kernelShape[d?1:2],t.kernelShape[d?2:3]],I=[t.dilations[0],t.dilations[1]],P=[A[0]+(t.dilations[0]<=1?0:(t.kernelShape[d?1:2]-1)*(t.dilations[0]-1)),A[1]+(t.dilations[1]<=1?0:(t.kernelShape[d?2:3]-1)*(t.dilations[1]-1))],D=[P[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),P[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],B=[{type:12,data:C},{type:12,data:E},{type:12,data:A},{type:12,data:I},{type:12,data:P},{type:6,data:D},{type:12,data:h},{type:12,data:y},...J(e[0].dims,e[1].dims)];r&&(B.push(...J(e[2].dims)),S.push("rank")),B.push(...J(s));let M=G=>{let F=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:E.length},{name:"filter_dims",type:"u32",length:A.length},{name:"dilations",type:"u32",length:A.length},{name:"effective_filter_dims",type:"u32",length:P.length},{name:"pads",type:"i32",length:D.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],Z=Ie(e[0].dataType),te=d?1:2,ne=d?2:3,fe=d?3:1,Q=W("W",e[1].dataType,e[1].dims.length,v),ue=W("Dy",e[0].dataType,e[0].dims.length,_),ke=[ue,Q];r&&ke.push(W("bias",e[2].dataType,[s[fe]].length,w));let ae=Y("result",e[0].dataType,s.length,w),de=()=>{let ie="";if(_===1)ie+=`
        let w_offset = ${Q.indicesToOffset(`${Q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${Q.getByOffset(`w_offset / ${v}`)};
        dotProd = dotProd + xValue * wValue;`;else if(y===1)ie+=`
          let wValue = ${Q.getByOffset(`${Q.indicesToOffset(`${Q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${v}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let be=0;be<_;be++)ie+=`
            let wValue${be} = ${Q.getByOffset(`${Q.indicesToOffset(`${Q.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${be}, wOutChannel)`)} / ${v}`)};
            dotProd = dotProd + xValue[${be}] * wValue${be};`;return ie},ge=`
            let outputIndices = ${ae.offsetToIndices(`global_idx * ${w}`)};
            let batch = ${ae.indicesGet("outputIndices",0)};
            let d1 = ${ae.indicesGet("outputIndices",fe)};
            let r = ${ae.indicesGet("outputIndices",te)};
            let c = ${ae.indicesGet("outputIndices",ne)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${ae.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${Z}(dyRCorner) + ${Z}(wR)) / ${Z}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${Z}(uniforms.Dy_shape[${te}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${Z}(dyCCorner) + ${Z}(wC)) / ${Z}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${Z}(uniforms.Dy_shape[${ne}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${_}) {
                  let xValue = ${d?ue.getByOffset(`${ue.indicesToOffset(`${ue.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${_}`):ue.get("batch","inputChannel","idyR","idyC")};
                  ${de()}
                  inputChannel = inputChannel + ${_};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${w}]`:""};
            ${ae.setByOffset("global_idx","value")};
          `;return`
    ${G.registerUniforms(F).declareVariables(...ke,ae)}
      ${G.mainStart()}
      ${G.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${ge}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${_}${v}${w}${y===1}`,inputDependencies:S},getRunData:()=>({dispatchGroup:{x:x[0],y:x[1],z:x[2]},outputs:[{dims:i?i(s):s,dataType:e[0].dataType}],programUniforms:B}),getShaderSource:M}}});var W0,L0,G0,Rp,jp,H0,Up,F0,Np,Vp=X(()=>{"use strict";Mp();Et();wt();W0=(e,t,i,r,s,d)=>(e-1)*t+i+(r-1)*s+1-d,L0=(e,t,i,r,s)=>{let d=Math.floor(e/2);t==="SAME_UPPER"?(i[r]=d,i[s]=e-d):t==="SAME_LOWER"&&(i[r]=e-d,i[s]=d)},G0=(e,t,i,r,s,d,c,f,h,y)=>{let _=e.length-2,w=y.length===0;h.length<_&&h.push(...Array(_-h.length).fill(0));let v=e[0],C=t[f?3:1]*s;for(let x=0,S=e.length-_-(f?1:0);x<_;++x,++S){let E=e[S],A=w?E*c[x]:y[x],I=W0(E,c[x],d[x],t[S],i[x],A);L0(I,r,d,x,x+_),w&&y.push(c[x]*(E-1)+h[x]+(t[S]-1)*i[x]+1-d[x]-d[x+_])}y.splice(0,0,v),y.splice(f?3:1,0,C)},Rp=(e,t)=>{let i=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((w,v)=>w*v,1)===0){i.length=0;for(let w=2;w<t[1].dims.length;++w)i.push(t[1].dims[w])}let r=e.format==="NHWC";i.splice(0,0,t[1].dims[0]),i.splice(r?3:1,0,t[1].dims[1]);let s=e.pads.slice(),d=e.outputShape.slice(),c=e.outputPadding.slice(),f=t[0].dims,h=e.dilations.slice();if(h.reduce((w,v)=>w+v,0)===0){let w=t[0].dims.length-2;h=new Array(w).fill(1)}let y=e.strides.slice();if(y.reduce((w,v)=>w+v,0)===0){let w=t[0].dims.length-2;y=new Array(w).fill(1)}G0(f,i,h,e.autoPad,e.group,s,y,r,c,d);let _=Object.assign({},e);return Object.assign(_,{kernelShape:i,pads:s,outputPadding:c,outputShape:d,dilations:h,strides:y}),_},jp=e=>{let t=an(e),i=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],s=e.dilations,d=e.group,c=e.kernelShape,f=e.pads,h=e.strides,y=e.wIsConst(),_=e.outputPadding,w=e.outputShape;return{autoPad:r,format:i,dilations:s,group:d,kernelShape:c,outputPadding:_,outputShape:w,pads:f,strides:h,wIsConst:y,...t,cacheKey:`${e.format};${t.activation};`}},H0=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(i!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let s=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==s))throw new Error("invalid bias");let d=e[0].dims.length-2;if(t.dilations.reduce((_,w)=>_+w,0)>0&&t.dilations.length!==d)throw new Error(`dilations should be ${d}D`);if(t.strides.reduce((_,w)=>_+w,0)>0&&t.strides.length!==d)throw new Error(`strides should be ${d}D`);if(t.pads.reduce((_,w)=>_+w,0)>0&&t.pads.length!==d*2)throw new Error(`pads should be ${d*2}D`);if(t.outputPadding.length!==d&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${d}D`);if(t.kernelShape.reduce((_,w)=>_+w,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Up=(e,t,i,r)=>{let s=e.kernelCustomData.wT??e.compute(We(t[1],[2,3,0,1]),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=s);let d=[t[0],s];t.length===3&&d.push(t[2]),e.compute(Bp(d,i,r),{inputs:d})},F0=(e,t)=>{let i=t.format==="NHWC",r=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let s=t.kernelShape;(s.length===0||s[0]===0)&&(s=[e.inputs[1].dims[2]]);let d=t.dilations;(d.length===0||d[0]===0)&&(d=[1]);let c=t.strides;(c.length===0||c[0]===0)&&(c=[1]);let f=t.pads;f.length===0&&(f=[0,0]),f=[0,f[0],0,f[1]],c=[1].concat(c),d=[1].concat(d),s=[1].concat(s);let h=t.outputPadding;h=[0].concat(h);let y=Rp({...t,pads:f,strides:c,dilations:d,kernelShape:s,outputPadding:h},r);Up(e,r,y,_=>i?[_[0],_[2],_[3]]:[_[0],_[1],_[3]])},Np=(e,t)=>{if(H0(e.inputs,t),e.inputs[0].dims.length===3)F0(e,t);else{let i=Rp(t,e.inputs);Up(e,e.inputs,i)}}});var q0,Wp,Lp,Gp=X(()=>{"use strict";ce();me();Oe();ye();q0=(e,t,i,r)=>{let s=V.size(t),d=t.length,c=W("input",e,d),f=Y("output",e,d),h=i.dataType===6?i.getInt32Array()[0]:Number(i.getBigInt64Array()[0]),y=V.normalizeAxis(h,d),_=w=>{let v=` i32(${c.indicesGet("inputIndices","uniforms.axis")}) `,C=re("uniforms.input_shape","uniforms.axis",d),x=r.reverse?v+(r.exclusive?" + 1":""):"0",S=r.reverse?C:v+(r.exclusive?"":" + 1");return`
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
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},{type:12,data:y},...J(t,t)]}),getShaderSource:_}},Wp=(e,t)=>{let i=e.inputs[0].dims,r=e.inputs[0].dataType,s=e.inputs[1];e.compute(q0(r,i,s,t),{inputs:[0]})},Lp=e=>{let t=e.exclusive===1,i=e.reverse===1;return pe({exclusive:t,reverse:i})}});var K0,Y0,Z0,Hp,Fp,qp=X(()=>{"use strict";ce();me();Oe();ye();K0=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Y0=(e,t,i,r)=>{let s=[];s.push(`fn perm(i: ${r.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`);for(let d=0;d<t;++d)s.push(i.indicesSet("a",e[d],`i[${d}]`));return s.push("return a;}"),s.join(`
`)},Z0=(e,t)=>{let i,r,s,d,c,f,h=t.format==="NHWC",y=t.blocksize,_=t.mode==="DCR";h?([i,r,s,d]=e.dims,c=_?[i,r,s,y,y,d/y**2]:[i,r,s,d/y**2,y,y],f=_?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([i,r,s,d]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],c=_?[i,y,y,d/y**2,r,s]:[i,d/y**2,y,y,r,s],f=_?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let w=e.reshape(c),v=w.dims.length,C=e.dataType,x=W("a",C,v),S=Y("output",C,v),E=A=>`
  ${A.registerUniform("output_size","u32").declareVariables(x,S)}

  ${Y0(f,v,x,S)}

  ${A.mainStart()}
    ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",x.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:A=>{let I=h?[i,r*y,s*y,d/y**2]:[i,d/y**2,r*y,s*y],P=V.size(I),D=w.dims,B=V.sortBasedOnPerm(D,f);return{outputs:[{dims:I,dataType:A[0].dataType}],dispatchGroup:{x:Math.ceil(P/64)},programUniforms:[{type:12,data:P},...J(D,B)]}},getShaderSource:E}},Hp=(e,t)=>{K0(e.inputs),e.compute(Z0(e.inputs[0],t))},Fp=e=>pe({blocksize:e.blocksize,mode:e.mode,format:e.format})});var Ei,pn,Kp,Q0,X0,Pi,zi,Yp,J0,Zp,Qp,Xp=X(()=>{"use strict";ce();me();Oe();ye();Ei="[a-zA-Z]|\\.\\.\\.",pn="("+Ei+")+",Kp="^"+pn+"$",Q0="("+pn+",)*"+pn,X0="^"+Q0+"$",Pi=class{constructor(t=-1){this.symbolToIndices=new Map,this.inputIndex=t}addSymbol(t,i){let r=this.symbolToIndices.get(t);r===void 0?r=[i]:r.push(i),this.symbolToIndices.set(t,r)}},zi=class{constructor(t,i){this.equation=i;this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,s]=i.includes("->")?i.split("->",2):[i,""];if(!r.match(RegExp(X0)))throw new Error("Invalid LHS term");if(r.split(",").forEach((f,h)=>{let y=t[h].dims.slice();if(!f.match(RegExp(Kp)))throw new Error("Invalid LHS term");let _=this.processTerm(f,!0,y,h);this.lhs.push(_)}),s==="")s+=[...this.symbolToInfo.entries()].filter(([f,h])=>h.count===1||f==="...").map(([f])=>f).join("");else if(!s.match(RegExp(pn)))throw new Error("Invalid RHS");s.match(RegExp(Ei,"g"))?.forEach(f=>{if(f==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let h=this.symbolToInfo.get(f);if(h===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(h.dimValue)}}),this.rhs=this.processTerm(s,!1,this.outputDims)}addSymbol(t,i,r){let s=this.symbolToInfo.get(t);if(s!==void 0){if(s.dimValue!==i&&s.count!==1)throw new Error("Dimension mismatch");s.count++,s.inputIndices.push(r)}else s={count:1,dimValue:i,inputIndices:[r]};this.symbolToInfo.set(t,s)}processTerm(t,i,r,s=-1){let d=r.length,c=!1,f=[],h=0;if(!t.match(RegExp(Kp))&&!i&&t!=="")throw new Error("Invalid LHS term");let y=t.match(RegExp(Ei,"g")),_=new Pi(s);return y?.forEach((w,v)=>{if(w==="..."){if(c)throw new Error("Only one ellipsis is allowed per input term");c=!0;let C=d-y.length+1;if(C<0)throw new Error("Ellipsis out of bounds");if(f=r.slice(h,h+C),this.hasEllipsis){if(this.ellipsisDims.length!==f.length||this.ellipsisDims.toString()!==f.toString())throw new Error("Ellipsis dimensions mismatch")}else if(i)this.hasEllipsis=!0,this.ellipsisDims=f;else throw new Error("Ellipsis must be specified in the LHS");for(let x=0;x<f.length;x++){let S=String.fromCharCode("0".charCodeAt(0)+x);_.addSymbol(S,v+x),this.addSymbol(S,r[h++],s)}}else _.addSymbol(w,v+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(w,r[h++],s)}),_}},Yp=e=>e+"_max",J0=(e,t,i,r)=>{let d=e.map(_=>_.length).map((_,w)=>W(`input${w}`,t,_)),c=V.size(r),f=Y("output",t,r.length),h=[...i.symbolToInfo.keys()].filter(_=>!i.rhs.symbolToIndices.has(_)),y=_=>{let w=[],v="var prod = 1.0;",C="var sum = 0.0;",x="sum += prod;",S=[],E=[],A=[],I=[],P=i.symbolToInfo.size===i.rhs.symbolToIndices.size;i.symbolToInfo.forEach((B,M)=>{if(i.rhs.symbolToIndices.has(M)){let G=i.rhs.symbolToIndices.get(M)?.[0];G!==void 0&&i.lhs.forEach((F,Z)=>{if(B.inputIndices.includes(Z)){let te=F.symbolToIndices.get(M);if(te===void 0)throw new Error("Invalid symbol error");te.forEach(ne=>{w.push(`${d[Z].indicesSet(`input${Z}Indices`,ne,f.indicesGet("outputIndices",G))}`)})}})}else i.lhs.forEach((G,F)=>{if(B.inputIndices.includes(F)){let Z=G.symbolToIndices.get(M);if(Z===void 0)throw new Error("Invalid symbol error");Z.forEach(te=>{S.push(`${d[F].indicesSet(`input${F}Indices`,te,`${M}`)}`)}),I.push(`prod *= ${d[F].getByIndices(`input${F}Indices`)};`)}}),E.push(`for(var ${M}: u32 = 0; ${M} < uniforms.${Yp(M)}; ${M}++) {`),A.push("}")});let D=P?[...w,`let sum = ${d.map((B,M)=>B.getByIndices(`input${M}Indices`)).join(" * ")};`]:[...w,C,...E,...S,v,...I,x,...A];return`
            ${_.registerUniforms(h.map(B=>({name:`${Yp(B)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...d,f)}

            ${_.mainStart()}
            ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${f.offsetToIndices("global_idx")};
            ${d.map((B,M)=>`var input${M}Indices: ${d[M].type.indices};`).join(`
`)}
            ${D.join(`
`)};
            ${f.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:i.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let _=h.filter(v=>i.symbolToInfo.has(v)).map(v=>({type:12,data:i.symbolToInfo.get(v)?.dimValue||0}));_.push({type:12,data:c});let w=e.map((v,C)=>[...J(v)]).reduce((v,C)=>v.concat(C),_);return w.push(...J(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:w}},getShaderSource:y}},Zp=(e,t)=>{let i=new zi(e.inputs,t.equation),r=i.outputDims,s=e.inputs.map((d,c)=>d.dims);e.compute(J0(s,e.inputs[0].dataType,i,r))},Qp=e=>{let t=e.equation.replace(/\s+/g,"");return pe({equation:t})}});var ev,Jp,tv,rv,ef,tf=X(()=>{"use strict";ce();me();ye();ev=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),r=i.length<t.length?0:i.length-t.length,s=t.length<i.length?0:t.length-i.length;for(;r<i.length&&s<t.length;++r,++s)if(i[r]!==t[s]&&i[r]!==1&&t[s]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Jp=(e,t)=>{let i=e.length-t.length,r=[];for(let s=0;s<i;++s)r.push(e[s]);for(let s=0;s<t.length;++s)r.push(t[s]===1?e[s+i]:t[s]);return r},tv=(e,t)=>e.length>t.length?Jp(e,t):Jp(t,e),rv=e=>{let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),r=tv(t,i),s=e[0].dataType,d=s===9||V.size(t)===1,c=s===9||t.length>0&&t[t.length-1]%4===0?4:1,f=d||r.length>0&&r[r.length-1]%4===0?4:1,h=Math.ceil(V.size(r)/f),y=w=>{let v=W("input",s,t.length,c),C=Y("output",s,r.length,f),x;if(s===9){let S=(E,A,I="")=>`
          let outputIndices${A} = ${C.offsetToIndices(`outputOffset + ${A}u`)};
          let offset${A} = ${v.broadcastedIndicesToOffset(`outputIndices${A}`,C)};
          let index${A} = offset${A} / 4u;
          let component${A} = offset${A} % 4u;
          ${E}[${A}] = ${I}(${v.getByOffset(`index${A}`)}[component${A}]);
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
    ${x}`},_=[{type:12,data:h},...J(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${c}${f}`,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:_})}},ef=e=>{ev(e.inputs),e.compute(rv(e.inputs),{inputs:[0]})}});var nv,rf,nf=X(()=>{"use strict";ce();me();ye();on();nv=e=>{let t=e[0].dataType,i=V.size(e[0].dims),r=V.size(e[1].dims),s=r%4===0,d=c=>{let f=W("x",t,[1],4),h=W("bias",t,[1],4),y=Y("y",t,[1],4),_=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],w=C=>`
      let bias${C}_offset: u32 = (global_idx * 4 + ${C}) % uniforms.bias_size;
      let bias${C} = ${h.getByOffset(`bias${C}_offset / 4`)}[bias${C}_offset % 4];`,v=s?`
      let bias = ${h.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${w(0)}${w(1)}${w(2)}${w(3)}
      let bias = ${f.type.value}(bias0, bias1, bias2, bias3);`;return`${c.registerUniforms(_).declareVariables(f,h,y)}

    ${$i(Ve(t))}

    ${c.mainStart(Ut)}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${f.getByOffset("global_idx")};
      ${v}
      let x_in = x + bias;
      ${y.setByOffset("global_idx",xi("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${s}`,inputDependencies:["type","type"]},getShaderSource:d,getRunData:c=>({outputs:[{dims:c[0].dims,dataType:c[0].dataType}],programUniforms:[{type:12,data:Math.ceil(i/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(i/Ut/4)}})}},rf=e=>{e.inputs.length<2||V.size(e.inputs[1].dims)===0?Xc(e):e.compute(nv(e.inputs))}});var iv,ov,of,af,sf=X(()=>{"use strict";ce();me();Oe();ye();iv=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},ov=(e,t)=>{let i=e[0].dims,r=e[1].dims,s=i.length,d=V.normalizeAxis(t.axis,s),c=i.slice(0);c.splice(d,1,...r);let f=i[d],h=e[0].dataType===9?4:1,y=Math.ceil(V.size(c)/h),_=[{type:12,data:y},{type:6,data:f},{type:12,data:d},...J(e[0].dims,e[1].dims,c)],w=v=>{let C=W("data",e[0].dataType,e[0].dims.length,h),x=W("inputIndices",e[1].dataType,e[1].dims.length),S=Y("output",e[0].dataType,c.length,h),E=I=>{let P=r.length,D=`var indicesIndices${I}  = ${x.type.indices}(0);`;for(let B=0;B<P;B++)D+=`${P>1?`indicesIndices${I}[${B}]`:`indicesIndices${I}`} = ${c.length>1?`outputIndices${I}[uniforms.axis + ${B}]`:`outputIndices${I}`};`;D+=`
          var idx${I} = ${x.getByIndices(`indicesIndices${I}`)};
          if (idx${I} < 0) {
            idx${I} = idx${I} + uniforms.axisDimLimit;
          }
          var dataIndices${I} : ${C.type.indices};
        `;for(let B=0,M=0;B<s;B++)B===d?(D+=`${s>1?`dataIndices${I}[${B}]`:`dataIndices${I}`} = u32(idx${I});`,M+=P):(D+=`${s>1?`dataIndices${I}[${B}]`:`dataIndices${I}`} = ${c.length>1?`outputIndices${I}[${M}]`:`outputIndices${I}`};`,M++);return D},A;if(e[0].dataType===9){let I=(P,D,B="")=>`
          let outputIndices${D} = ${S.offsetToIndices(`outputOffset + ${D}u`)};
          ${E(D)};
          let offset${D} = ${C.indicesToOffset(`dataIndices${D}`)};
          let index${D} = offset${D} / 4u;
          let component${D} = offset${D} % 4u;
          ${P}[${D}] = ${B}(${C.getByOffset(`index${D}`)}[component${D}]);
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
      ${E("")};
      let value = ${C.getByIndices("dataIndices")};
      ${S.setByOffset("global_idx","value")};
      `;return`
      ${v.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(C,x,S)}
      ${v.mainStart()}
        ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${A}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:_}),getShaderSource:w}},of=e=>pe({axis:e.axis}),af=(e,t)=>{let i=e.inputs;iv(i),e.compute(ov(e.inputs,t))}});var av,uf,lf,df=X(()=>{"use strict";ce();me();ye();av=(e,t,i,r,s,d,c,f,h)=>{let y=[{type:12,data:d},{type:12,data:r},{type:12,data:s},{type:12,data:i},{type:12,data:c},{type:12,data:f},{type:12,data:h}],_=[d];y.push(...J(t.dims,_));let w=v=>{let C=W("indices_data",t.dataType,t.dims.length),x=Y("input_slice_offsets_data",12,1,1),S=[C,x],E=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:s.length},{name:"sizes_from_slice_dims_data",type:"u32",length:i.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${v.registerUniforms(E).declareVariables(...S)}
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${s.length}_${i.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:_,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:y}),getShaderSource:w},{inputs:[t],outputs:[-1]})[0]},uf=(e,t)=>{let i=e.inputs,r=i[0].dims,s=i[0].dataType,d=i[1].dims,c=d[d.length-1],f=V.sizeToDimension(d,d.length-1),h=V.sizeFromDimension(r,t.batchDims+c),y=V.sizeToDimension(r,t.batchDims),_=V.sizeFromDimension(r,t.batchDims),w=f/y,v=new Array(c),C=h;for(let D=0;D<c;++D)v[c-1-D]=C,C*=r[t.batchDims+c-1-D];let x=av(e,i[1],v,t.batchDims,r,f,w,_,c),S=t.batchDims+c;if(S>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let E=d.slice(0,-1).concat(r.slice(S)),A=V.size(E),I=[{type:12,data:A},{type:12,data:h},...J(i[0].dims,x.dims,E)],P=D=>{let B=W("data",i[0].dataType,i[0].dims.length),M=W("slice_offsets",12,x.dims.length),G=Y("output",i[0].dataType,E.length);return`
          ${D.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(B,M,G)}
            ${D.mainStart()}
            ${D.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:E,dataType:s}],dispatchGroup:{x:Math.ceil(A/64)},programUniforms:I}),getShaderSource:P},{inputs:[i[0],x]})},lf=e=>({batchDims:e.batch_dims,cacheKey:""})});var sv,uv,cf,pf,ff=X(()=>{"use strict";ce();me();Oe();ye();sv=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let i=V.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,s=e[0],d=e[2],c=e.length===4?e[3]:void 0;if(d.dims.length!==s.dims.length||!s.dims.map((f,h)=>h===i?Math.ceil(f/r)===d.dims[h]:f===d.dims[h]).reduce((f,h)=>f&&h,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(c){if(c.dataType!==s.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(c.dims.length!==d.dims.length||!c.dims.map((f,h)=>f===d.dims[h]).reduce((f,h)=>f&&h,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},uv=(e,t)=>{let i=e[0].dims,r=e[1].dims,s=i.length,d=V.normalizeAxis(t.gatherAxis,s),c=V.normalizeAxis(t.quantizeAxis,s),f=i.slice(0);f.splice(d,1,...r);let h=V.size(f),y=e[2].dataType,w=e[0].dataType===22,v=[{type:12,data:h},{type:12,data:c},{type:12,data:d},{type:12,data:t.blockSize},...J(...e.map((x,S)=>x.dims),f)],C=x=>{let S=W("data",e[0].dataType,e[0].dims.length),E=W("inputIndices",e[1].dataType,e[1].dims.length),A=W("scales",e[2].dataType,e[2].dims.length),I=e.length>3?W("zeroPoint",e[3].dataType,e[3].dims.length):void 0,P=Y("output",y,f.length),D=[S,E,A];I&&D.push(I);let B=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${x.registerUniforms(B).declareVariables(...D,P)}
        ${x.mainStart()}
        let output_indices = ${P.offsetToIndices("global_idx")};
        var indices_indices = ${E.type.indices}(0);
        ${(()=>r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${P.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${E.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${P.indicesGet("output_indices","uniforms.gather_axis")};`)()};
        var data_indices = ${S.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${P.indicesGet("output_indices","i")};
          ${S.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${E.getByIndices("indices_indices")};
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
        ${(()=>I?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${I.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${I.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${w?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0")()};
        let dequantized_data = ${Ve(y)}(quantized_data - zero_point) * scale;
        ${P.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((x,S)=>S!==1).map(x=>x.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(x,S)=>"rank")},getRunData:()=>({outputs:[{dims:f,dataType:y}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:v}),getShaderSource:C}},cf=(e,t)=>{let i=e.inputs;sv(i,t),e.compute(uv(e.inputs,t))},pf=e=>pe({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})});var lv,dv,mf,hf,gf=X(()=>{"use strict";ce();me();Oe();ye();lv=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},dv=(e,t)=>{let i=e[0].dims,r=e[0].dataType,s=i.length,d=e[1].dims,c=e[1].dataType,f=V.normalizeAxis(t.axis,s),h=i[f],y=d.slice(0),_=V.size(y),w=W("input",r,s),v=W("indicesInput",c,d.length),C=Y("output",r,y.length),x=[{type:12,data:_},{type:6,data:h},{type:12,data:f}];return x.push(...J(i,d,y)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:y,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:x}),getShaderSource:A=>`
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
  }`}},mf=e=>pe({axis:e.axis}),hf=(e,t)=>{let i=e.inputs;lv(i),e.compute(dv(e.inputs,t))}});var cv,pv,yf,bf,_f=X(()=>{"use strict";ce();me();ye();cv=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},pv=(e,t)=>{let i=e[0].dims.slice(),r=e[1].dims.slice(),[s,d,c]=Qr.getShapeOfGemmResult(i,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),f=[s,d];if(!f)throw new Error("Can't use gemm on the given tensors");let h=16,y=Math.ceil(d/h),_=Math.ceil(s/h),w=!0,v=V.size(f),C=[{type:12,data:w?y:v},{type:12,data:s},{type:12,data:d},{type:12,data:c},{type:1,data:t.alpha},{type:1,data:t.beta}],x=["type","type"];e.length===3&&(C.push(...J(e[2].dims)),x.push("rank")),C.push(...J(f));let S=A=>{let I="";t.transA&&t.transB?I="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?I="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?I="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(I="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let P=t.alpha===1?"":"value *= uniforms.alpha;",D=W("a",e[0].dataType,e[0].dims),B=W("b",e[1].dataType,e[1].dims),M=D.type.value,G=null,F=[D,B];e.length===3&&(G=W("c",e[2].dataType,e[2].dims.length),F.push(G));let Z=Y("output",e[0].dataType,f.length);F.push(Z);let te=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${A.registerUniforms(te).declareVariables(...F)}

  ${A.mainStart()}
    ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${M}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${I}
    }

    ${P}
    ${(()=>G!=null?`let cOffset = ${G.broadcastedIndicesToOffset("vec2(m, n)",Z)}; value += ${M}(uniforms.beta) * ${G.getByOffset("cOffset")};`:"")()}
    output[global_idx] = value;
  }`},E=A=>{let I=W("a",e[0].dataType,e[0].dims),P=W("b",e[1].dataType,e[1].dims),D=null,B=[I,P];e.length===3&&(D=W("c",e[2].dataType,e[2].dims.length),B.push(D));let M=Y("output",e[0].dataType,f.length);B.push(M);let G=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],F="",Z="";t.transA&&t.transB?(Z=`
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
  ${A.registerUniforms(G).declareVariables(...B)}
  var<workgroup> tile_a: array<array<${I.type.storage}, ${h}>, ${h}>;
  var<workgroup> tile_b: array<array<${P.type.storage}, ${h}>, ${h}>;
  ${A.mainStart([h,h,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${h};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${h};
    let num_tiles = (uniforms.K - 1) / ${h} + 1;
    var k_start = 0u;
    var value = ${M.type.value}(0);
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
    ${(()=>D!=null?`let cOffset = ${D.broadcastedIndicesToOffset("vec2(m, n)",M)}; value += ${M.type.value}(uniforms.beta) * ${D.getByOffset("cOffset")};`:"")()}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return w?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:f,dataType:e[0].dataType}],dispatchGroup:{x:y*_},programUniforms:C}),getShaderSource:E}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:f,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:C}),getShaderSource:S}},yf=e=>{let t=e.transA,i=e.transB,r=e.alpha,s=e.beta;return{transA:t,transB:i,alpha:r,beta:s,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},bf=(e,t)=>{cv(e.inputs),e.compute(pv(e.inputs,t))}});var vt,Pt,Kt,Yt,fv,mv,hv,gv,yv,bv,_v,wv,wf,vf,$f=X(()=>{"use strict";ce();me();Oe();ye();[vt,Pt,Kt,Yt]=[0,1,2,3],fv=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},mv=`
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
`,hv=e=>`
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
`,gv=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,yv=e=>`
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
`,bv=(e,t,i)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${vt}] = batch;
     indices[${Pt}] = channel;`+(()=>{switch(i.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Kt}] = u32(r);
            indices[${Yt}] = u32(c);
          }
        `;case"border":return`
          indices[${Kt}] = u32(clamp(r, 0, H - 1));
          indices[${Yt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Kt}] = gs_reflect(r, border[1], border[3]);
          indices[${Yt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${i.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,_v=(e,t,i)=>(()=>{switch(i.mode){case"nearest":return`
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
        `;default:throw new Error(`mode ${i.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,wv=(e,t)=>{let i=W("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],s=W("grid",e[1].dataType,r.length,2),d=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(d=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[vt,Pt,Kt,Yt]=[0,3,1,2]);let c=Y("output",e[0].dataType,d.length),f=i.type.value,h=V.size(d),y=[{type:12,data:h},...J(e[0].dims,r,d)],_=w=>`
  ${w.registerUniform("output_size","u32").declareVariables(i,s,c)}
  ${mv}
  ${hv(f)}
  ${gv(t)}
  ${yv(t)}
  ${bv(i,f,t)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Kt}]);
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
      var grid_indices = vec3<u32>(indices[${vt}], indices[${Kt}], indices[${Yt}]);
      let nxy = ${s.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${_v(c,f,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:w=>{let v=V.size(d);return{outputs:[{dims:d,dataType:w[0].dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:y}},getShaderSource:_}},wf=(e,t)=>{fv(e.inputs),e.compute(wv(e.inputs,t))},vf=e=>pe({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})});var He,xv,Cf,xf,Cv,pr,Sf,Oi=X(()=>{"use strict";ce();me();Oe();Zr();rn();ye();wt();He=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,xv=(e,t)=>{let i=e[0],r=He(e,1),s=He(e,2),d=He(e,3),c=He(e,4),f=He(e,5),h=He(e,6),y=He(e,7);if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let _=i.dims[0],w=i.dims[1],v=i.dims.length===3?i.dims[2]:t.numHeads*i.dims[4],C=w,x=0,S=0,E=Math.floor(v/t.numHeads);if(h&&y&&V.size(h.dims)&&V.size(y.dims)){if(h.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(h.dims[0]!==_||h.dims[1]!==t.numHeads||h.dims[3]!==E)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(y.dims[0]!==_||y.dims[1]!==t.numHeads||y.dims[3]!==E)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(h.dims[2]!==y.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(y.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');x=h.dims[2],S=h.dims[2]}else if(h&&V.size(h.dims)||y&&V.size(y.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let A;if(r&&V.size(r.dims)>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==i.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');A=2,C=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==E)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw new Error('Expect "value" be none when "key" has packed kv format.');A=5,C=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==E)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');A=0,C=r.dims[2]}}else{if(i.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(i.dims[2]!==t.numHeads||i.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');A=3}if(d&&V.size(d.dims)>0){if(d.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let I=x+C,P=0;if(c&&V.size(c.dims)>0){P=8;let G=c.dims;throw G.length===1?G[0]===_?P=1:G[0]===3*_+2&&(P=3):G.length===2&&G[0]===_&&G[1]===I&&(P=5),P===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let D=!1,B=v;if(s&&V.size(s.dims)>0){if(s.dims.length!==3&&s.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==s.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(s.dims.length===3){if(C!==s.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');B=s.dims[2]}else{if(C!==s.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');B=s.dims[1]*s.dims[3],D=!0}}let M=!1;if(c&&V.size(c.dims)>0)throw new Error("Key padding mask is not supported");if(f&&V.size(f.dims)>0){if(f.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(f.dims[0]!==_||f.dims[1]!==t.numHeads||f.dims[2]!==w||f.dims[3]!==I)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:_,sequenceLength:w,pastSequenceLength:x,kvSequenceLength:C,totalSequenceLength:I,maxSequenceLength:S,inputHiddenSize:0,hiddenSize:v,vHiddenSize:B,headSize:E,vHeadSize:Math.floor(B/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:P,scale:t.scale,broadcastResPosBias:M,passPastInKv:D,qkvFormat:A}},Cf=e=>pe({...e}),xf=pe({perm:[0,2,1,3]}),Cv=(e,t,i,r,s,d,c)=>{let f=[r,s,d],h=V.size(f),y=[{type:12,data:h},{type:12,data:c},{type:12,data:d}],_=w=>{let v=Y("qkv_with_bias",t.dataType,f),C=W("qkv",t.dataType,f),x=W("bias",i.dataType,f),S=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${w.registerUniforms(S).declareVariables(C,x,v)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:f,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:y}),getShaderSource:_},{inputs:[t,i],outputs:[-1]})[0]},pr=(e,t,i,r,s,d,c,f)=>{let h=d;if(c&&V.size(c.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return h=Cv(e,d,c,t,r,i*s,f),h=h.reshape([t,r,i,s]),i===1||r===1?h:e.compute(We(h,xf.perm),{inputs:[h],outputs:[-1]})[0]}else return d.dims.length===3&&(h=d.reshape([t,r,i,s])),i===1||r===1?h:e.compute(We(h,xf.perm),{inputs:[h],outputs:[-1]})[0]},Sf=(e,t)=>{let i=xv(e.inputs,t),r=e.inputs[0],s=He(e.inputs,1),d=He(e.inputs,2),c=He(e.inputs,3),f=He(e.inputs,4),h=He(e.inputs,5),y=He(e.inputs,6),_=He(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if(s?.dims.length===5)throw new Error("Packed KV is not implemented");let w=s&&d&&s.dims.length===4&&d.dims.length===4,v=pr(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,r,c,0);if(w)return qt(e,v,s,d,f,void 0,y,_,h,i);if(!s||!d)throw new Error("key and value must be provided");let C=pr(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.headSize,s,c,i.hiddenSize),x=pr(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.vHeadSize,d,c,2*i.hiddenSize);qt(e,v,C,x,f,void 0,y,_,h,i)}});var Sv,Tv,Iv,Av,Di,Tf,If,Bi=X(()=>{"use strict";ce();me();Oe();ye();Sv=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Tv=(e,t)=>{let i=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(s=>i.push(Number(s))),r=i.length),pe({numOutputs:r,axis:t.axis,splitSizes:i})},Iv=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${re("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Av=e=>{let t=e.length,i=[];for(let r=0;r<t;++r){let s=e[r].setByIndices("indices","input[global_idx]");t===1?i.push(s):r===0?i.push(`if (output_number == ${r}u) { ${s} }`):r===t-1?i.push(`else { ${s} }`):i.push(`else if (output_number == ${r}) { ${s} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${i.join(`
`)}
      }`},Di=(e,t)=>{let i=e[0].dims,r=V.size(i),s=e[0].dataType,d=V.normalizeAxis(t.axis,i.length),c=new Array(t.numOutputs),f=W("input",s,i.length),h=new Array(t.numOutputs),y=[],_=[],w=0,v=[{type:12,data:r}];for(let x=0;x<t.numOutputs;x++){w+=t.splitSizes[x],h[x]=w;let S=i.slice();S[d]=t.splitSizes[x],_.push(S),c[x]=Y(`output${x}`,s,S.length),y.push({dims:_[x],dataType:e[0].dataType})}v.push({type:12,data:h},...J(i,..._));let C=x=>`
  ${x.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",h.length).declareVariables(f,...c)}
  ${Iv(h.length)}
  ${Av(c)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${f.offsetToIndices("global_idx")};
    var index = ${f.indicesGet("indices",d)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${re("uniforms.size_in_split_axis","output_number - 1u",h.length)};
      ${f.indicesSet("indices",d,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:C,getRunData:()=>({outputs:y,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:v})}},Tf=(e,t)=>{Sv(e.inputs);let i=e.inputs.length===1?t:Tv(e.inputs,t);e.compute(Di(e.inputs,i),{inputs:[0]})},If=e=>{let t=e.axis,i=e.splitSizes,r=e.numOutputs<0?i.length:e.numOutputs;if(r!==i.length)throw new Error("numOutputs and splitSizes lengh must be equal");return pe({axis:t,numOutputs:r,splitSizes:i})}});var kv,Ev,Af,kf,Ef=X(()=>{"use strict";Oe();rn();Oi();Bi();wt();kv=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let i=e[0],r=e[1],s=e[2],d=e[3],c=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let f=!1,h=i.dims[0],y=i.dims[1],_=i.dims.length===3?f?i.dims[2]/3:i.dims[2]:t.numHeads*i.dims[4],w=y,v=0,C=!r||r.dims.length===0,x=Math.floor(C?_/(t.numHeads+2*t.kvNumHeads):_/t.numHeads);C&&(_=x*t.numHeads);let S=d&&d.dims.length!==0,E=c&&c.dims.length!==0;if(S&&d.dims.length===4&&d.dims[0]===h&&d.dims[1]!==t.kvNumHeads&&d.dims[2]===t.kvNumHeads&&d.dims[3]===x)throw new Error("BSNH pastKey/pastValue is not supported");if(S&&E){if(d.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(c.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');v=d.dims[2]}else if(S||E)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let I=1;if(r&&r.dims.length>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(i.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');w=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==x)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(s)throw new Error('Expect "value" be none when "key" has packed kv format.');w=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==x)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');w=r.dims[2]}}else{if(i.dims.length!==3&&i.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(i.dims.length===5&&(i.dims[2]!==t.numHeads||i.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');I=3}let P=0,D=!1,B=t.kvNumHeads?x*t.kvNumHeads:_;if(s&&s.dims.length>0){if(s.dims.length!==3&&s.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==s.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(s.dims.length===3){if(w!==s.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');B=s.dims[2]}else{if(w!==s.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');B=s.dims[1]*s.dims[3],D=!0}}let M=e.length>4?e[5]:void 0;if(M&&M.dims.length!==1&&M.dims[0]!==h)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');let G=-1,F=-1,Z=!1;return{batchSize:h,sequenceLength:y,pastSequenceLength:v,kvSequenceLength:w,totalSequenceLength:G,maxSequenceLength:F,inputHiddenSize:0,hiddenSize:_,vHiddenSize:B,headSize:x,vHeadSize:Math.floor(B/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:P,scale:t.scale,broadcastResPosBias:Z,passPastInKv:D,qkvFormat:I}},Ev=pe({perm:[0,2,1,3]}),Af=(e,t,i)=>{let r=t,s=i.kvNumHeads;return t.dims.length===3&&i.kvSequenceLength!==0&&(r=t.reshape([i.batchSize,i.kvSequenceLength,s,i.headSize]),r=e.compute(We(r,Ev.perm),{inputs:[r],outputs:[-1]})[0]),r},kf=(e,t)=>{let i=kv(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],s=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,d=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,c=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,f=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,h=e.inputs.length>4?e.inputs[5]:void 0,y=e.inputs.length>5?e.inputs[6]:void 0,_=i.kvNumHeads?i.kvNumHeads:i.numHeads,w=pe({axis:2,numOutputs:3,splitSizes:[i.numHeads*i.headSize,_*i.headSize,_*i.headSize]}),[v,C,x]=!s&&!d?e.compute(Di([r],w),{inputs:[r],outputs:[-1,-1,-1]}):[r,s,d],S=pr(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,v,void 0,0);qt(e,S,Af(e,C,i),Af(e,x,i),void 0,void 0,c,f,void 0,i,h,y)}});var Pf,Pv,zv,zf,Of=X(()=>{"use strict";ce();me();wt();ye();Pf=(e,t,i,r,s,d,c,f)=>{let h=xe(d),y=h===1?"f32":`vec${h}f`,_=h===1?"vec2f":`mat2x${h}f`,w=s*c,v=64;w===1&&(v=256);let C=[s,c,d/h],x=[s,c,2],S=["rank","type","type"],E=[];E.push(...J(C,x));let A=I=>{let P=W("x",t.dataType,3,h),D=W("scale",i.dataType,i.dims),B=W("bias",r.dataType,r.dims),M=Y("output",1,3,2),G=[P,D,B,M];return`
  var<workgroup> workgroup_shared : array<${_}, ${v}>;
  const workgroup_size = ${v}u;
  ${I.declareVariables(...G)}
  ${I.mainStart(v)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${y}(0);
    var squared_sum = ${y}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${y}(${P.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${_}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${rt("workgroup_shared[0][0]",h)} / f32(hight * ${h});
      let squared_sum_final = ${rt("workgroup_shared[0][1]",h)} / f32(hight * ${h});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${f}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${h};${f};${v}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:x,dataType:1}],dispatchGroup:{x:w},programUniforms:E}),getShaderSource:A},{inputs:[t,i,r],outputs:[-1]})[0]},Pv=(e,t,i)=>{let r=t[0].dims,s=r,d=2,c=r[0],f=r[1],h=V.sizeFromDimension(r,d),y=xe(h),_=V.size(s)/y,w=Pf(e,t[0],t[1],t[2],c,h,f,i.epsilon),v=[c,f,h/y],C=[c,f],x=["type","none"],S=E=>{let A=W("x",t[0].dataType,v.length,y),I=W("scale_shift",1,C.length,2),P=Y("output",t[0].dataType,v.length,y),D=[A,I,P];return`
  ${E.registerUniform("output_size","u32").declareVariables(...D)}
  ${E.mainStart()}
  ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${P.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${I.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${A.getByOffset("global_idx")} * ${P.type.value}(scale_shift.x) + ${P.type.value}(scale_shift.y);
      ${P.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${y}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...J(v,C,v)]}),getShaderSource:S},{inputs:[t[0],w]})},zv=(e,t,i)=>{let r=t[0].dims,s=r,d=r[0],c=r[r.length-1],f=V.sizeFromDimension(r,1)/c,h=xe(c),y=V.size(s)/h,_=[{type:12,data:f},{type:12,data:Math.floor(c/h)}],w=["type","type"],v=!1,C=[0,r.length-1];for(let A=0;A<r.length-2;A++)v=v||r[A+1]!==1,C.push(A+1);v=v&&r[r.length-1]!==1;let x=v?e.compute(We(e.inputs[0],C),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(A,I)=>r[C[I]])),S=Pf(e,x,t[1],t[2],d,f,c,i.epsilon),E=A=>{let I=Ie(t[0].dataType),P=h===1?"vec2f":`mat${h}x2f`,D=G=>{let F=G===0?"x":"y",Z=h===1?"f32":`vec${h}f`;switch(h){case 1:return`${I}(${Z}(scale.${F}))`;case 2:return`vec2<${I}>(${Z}(scale[0].${F}, scale[1].${F}))`;case 4:return`vec4<${I}>(${Z}(scale[0].${F}, scale[1].${F}, scale[2].${F}, scale[3].${F}))`;default:throw new Error(`Not supported compoents ${h}`)}},B=W("input",t[0].dataType,t[0].dims,h),M=Y("output",t[0].dataType,s,h);return`
  @group(0) @binding(0) var<storage, read> input : array<${B.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${P}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${M.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${A.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${D(0)}, ${D(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${h}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:s,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:_}),getShaderSource:E},{inputs:[t[0],S]})},zf=(e,t)=>{t.format==="NHWC"?zv(e,e.inputs,t):Pv(e,e.inputs,t)}});var Ov,Dv,Df,Bf=X(()=>{"use strict";ce();me();ye();Ov=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Dv=(e,t,i)=>{let r=t.simplified,s=e[0].dims,d=e[1],c=!r&&e[2],f=s,h=V.normalizeAxis(t.axis,s.length),y=V.sizeToDimension(s,h),_=V.sizeFromDimension(s,h),w=V.size(d.dims),v=c?V.size(c.dims):0;if(w!==_||c&&v!==_)throw new Error(`Size of X.shape()[axis:] == ${_}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${w} and bias size of ${v}`);let C=[];for(let B=0;B<s.length;++B)B<h?C.push(s[B]):C.push(1);let x=xe(_),S=["type","type"],E=[{type:12,data:y},{type:1,data:_},{type:12,data:Math.floor(_/x)},{type:1,data:t.epsilon}];c&&S.push("type");let A=i>1,I=i>2,P=B=>{let M=Ie(e[0].dataType),G=[W("x",e[0].dataType,e[0].dims,x),W("scale",d.dataType,d.dims,x)];c&&G.push(W("bias",c.dataType,c.dims,x)),G.push(Y("output",e[0].dataType,f,x)),A&&G.push(Y("mean_data_output",1,C)),I&&G.push(Y("inv_std_output",1,C));let F=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${B.registerUniforms(F).declareVariables(...G)}
  ${B.mainStart()}
    ${B.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${bi("f32",x)};
    var mean_square_vector = ${bi("f32",x)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Nt(M,x,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${rt("mean_vector",x)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${rt("mean_square_vector",x)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Nt(M,x,"x[j + offset]")};
      let f32scale = ${Nt(M,x,"scale[j]")};
      output[j + offset] = ${G[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${c?`+ ${Nt(M,x,"bias[j]")}`:""}
      );
    }

    ${A?"mean_data_output[global_idx] = mean":""};
    ${I?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},D=[{dims:f,dataType:e[0].dataType}];return A&&D.push({dims:C,dataType:1}),I&&D.push({dims:C,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${x};${i};${r}`,inputDependencies:S},getRunData:()=>({outputs:D,dispatchGroup:{x:Math.ceil(y/64)},programUniforms:E}),getShaderSource:P}},Df=(e,t)=>{Ov(e.inputs),e.compute(Dv(e.inputs,t,e.outputCount))}});var Bv,Mf,Rf=X(()=>{"use strict";me();ln();dn();Bv=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Mf=e=>{Bv(e.inputs);let t=ct.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let i=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(i<8&&r<8)e.compute(un(e.inputs,{activation:""},t));else{let s=t[t.length-2],d=V.size(e.inputs[0].dims.slice(0,-2)),c=V.size(e.inputs[1].dims.slice(0,-2));if(d!==1&&s===1&&c===1){let f=e.inputs[0].reshape([1,d,r]),h=e.inputs[1].reshape([1,r,i]),y=[1,d,i],_=[f,h];e.compute(cr(_,{activation:""},t,y),{inputs:_})}else e.compute(cr(e.inputs,{activation:""},t))}}});var Mv,Rv,jv,jf,Uf,Nf=X(()=>{"use strict";ce();me();Oe();ye();Mv=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let i=e[0],r=i.dims.length;if(i.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let s=Math.floor((t.k+t.blockSize-1)/t.blockSize),d=t.blockSize/8*t.bits,c=e[1];if(!V.areEqual(c.dims,[t.n,s,d]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let h=e[2].dims;if(V.size(h)!==t.n*s)throw new Error("scales input size error.");if(e.length===4){let _=e[3].dims,w=t.bits>4?t.n*s:t.n*Math.floor((s+1)/2);if(V.size(_)!==w)throw new Error("zeroPoints input size error.")}},Rv=(e,t)=>{let i=e[0].dims,r=i.length,s=i[r-2],d=t.k,c=t.n,f=i.slice(0,r-2),h=V.size(f),_=e[1].dims[2]/4,w=e[0].dataType,v=xe(t.k),C=xe(_),x=xe(c),S=f.concat([s,c]),E=s>1&&c/x%2===0?2:1,A=V.size(S)/x/E,I=64,P=[],D=[h,s,d/v],B=V.convertShape(e[1].dims).slice();B.splice(-1,1,_/C),P.push(...J(D)),P.push(...J(B)),P.push(...J(e[2].dims)),e.length===4&&P.push(...J(V.convertShape(e[3].dims)));let M=[h,s,c/x];P.push(...J(M));let G=F=>{let Z=D.length,te=W("a",e[0].dataType,Z,v),ne=W("b",12,B.length,C),fe=W("scales",e[2].dataType,e[2].dims.length),Q=[te,ne,fe],ue=e.length===4?W("zero_points",12,e[3].dims.length):void 0;ue&&Q.push(ue);let ke=M.length,ae=Y("output",e[0].dataType,ke,x),de=Ie(e[0].dataType),ge=(()=>{switch(v){case 1:return`array<${de}, 8>`;case 2:return`mat4x2<${de}>`;case 4:return`mat2x4<${de}>`;default:throw new Error(`${v}-component is not supported.`)}})(),ie=()=>{let Pe=`
          // reuse a data
            var input_offset = ${te.indicesToOffset(`${te.type.indices}(batch, row, word_offset)`)};
            var a_data: ${ge};
            for (var j: u32 = 0; j < ${8/v}; j++) {
              a_data[j] = ${te.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let H=0;H<x*E;H++)Pe+=`
            b_value = ${C===1?`b${H}_data`:`b${H}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${ge}(${Array.from({length:4},(q,se)=>`${de}(b_value_lower[${se}]), ${de}(b_value_upper[${se}])`).join(", ")});
            b_dequantized_values = ${(()=>v===1?`${ge}(${Array.from({length:8},(q,se)=>`(b_quantized_values[${se}] - ${ue?`zero_point${H}`:"zero_point"}) * scale${H}`).join(", ")});`:`(b_quantized_values - ${ge}(${Array(8).fill(`${ue?`zero_point${H}`:"zero_point"}`).join(",")})) * scale${H};`)()};
            workgroup_shared[local_id.x * ${E} + ${Math.floor(H/x)}]${x>1?`[${H%x}]`:""} += ${Array.from({length:8/v},(q,se)=>`${v===1?`a_data[${se}] * b_dequantized_values[${se}]`:`dot(a_data[${se}], b_dequantized_values[${se}])`}`).join(" + ")};
          `;return Pe},be=()=>{let Pe=`
            var col_index = col * ${x};
            ${ue?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${de}(8);`}
            `;for(let H=0;H<x*E;H++)Pe+=`
            let scale${H} = ${fe.getByOffset("col_index * nBlocksPerCol + block")};
            ${ue?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${ue.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${H} = ${de}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return Pe},Me=()=>{let Pe=`col_index = col * ${x};`;for(let H=0;H<x*E;H++)Pe+=`
            let b${H}_data = ${ne.getByIndices(`${ne.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Pe+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${ge};
            var b_dequantized_values: ${ge};`,Pe};return`
        var<workgroup> workgroup_shared: array<${ae.type.value}, ${E*I}>;
        ${F.declareVariables(...Q,ae)}
        ${F.mainStart([I,1,1])}
          let output_indices = ${ae.offsetToIndices(`(global_idx / ${I}) * ${E}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${I}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/v};
            ${be()}
            for (var word: u32 = 0; word < ${_}; word += ${C}) {
              ${Me()}
              for (var i: u32 = 0; i < ${C}; i++) {
                ${ie()}
                word_offset += ${8/v};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${E}) {
            var output_value: ${ae.type.value} = ${ae.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${I}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${E};
            }
            ${ae.setByIndices(`${ae.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${v};${C};${x};${E};${I}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:S,dataType:w}],dispatchGroup:{x:A},programUniforms:P}),getShaderSource:G}},jv=(e,t)=>{let i=e[0].dims,r=i.length,s=i[r-2],d=t.k,c=t.n,f=i.slice(0,r-2),h=V.size(f),_=e[1].dims[2]/4,w=e[0].dataType,v=xe(t.k),C=xe(_),x=f.concat([s,c]),S=128,E=c%8===0?8:c%4===0?4:1,A=S/E,I=A*C*8,P=I/v,D=I/t.blockSize,B=V.size(x)/E,M=[],G=[h,s,d/v],F=V.convertShape(e[1].dims).slice();F.splice(-1,1,_/C),M.push(...J(G)),M.push(...J(F)),M.push(...J(e[2].dims)),e.length===4&&M.push(...J(V.convertShape(e[3].dims)));let Z=[h,s,c];M.push(...J(Z));let te=ne=>{let fe=G.length,Q=W("a",e[0].dataType,fe,v),ue=W("b",12,F.length,C),ke=W("scales",e[2].dataType,e[2].dims.length),ae=[Q,ue,ke],de=e.length===4?W("zero_points",12,e[3].dims.length):void 0;de&&ae.push(de);let ge=Z.length,ie=Y("output",e[0].dataType,ge),be=Ie(e[0].dataType),Me=()=>{switch(v){case 1:return`
          let a_data0 = vec4<${be}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${be}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${be}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${be}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${v}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${Q.type.value}, ${P}>;
        var<workgroup> inter_results: array<array<${ie.type.value}, ${A}>, ${E}>;
        ${ne.declareVariables(...ae,ie)}
        ${ne.mainStart([A,E,1])}
          let output_indices = ${ie.offsetToIndices(`workgroup_index * ${E}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${D} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${P};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${P}; a_offset += ${S})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${Q.getByIndices(`${Q.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${Q.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${D} + local_id.x;
            ${de?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${de.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${be}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${be}(8);`}
            let scale = ${ke.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${ue.getByIndices(`${ue.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/v};
            for (var i: u32 = 0; i < ${C}; i++) {
              ${Me()}
              let b_value = ${C===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${be}>(${Array.from({length:4},(Pe,H)=>`${be}(b_value_lower[${H}]), ${be}(b_value_upper[${H}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${be}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Pe,H)=>`${`dot(a_data${H}, b_dequantized_values[${H}])`}`).join(" + ")};
              word_offset += ${8/v};
            }
            workgroupBarrier();
          }

          if (local_idx < ${E}) {
            var output_value: ${ie.type.value} = ${ie.type.value}(0);
            for (var b = 0u; b < ${A}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${ie.setByIndices(`${ie.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${v};${C};${A};${E}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:x,dataType:w}],dispatchGroup:{x:B},programUniforms:M}),getShaderSource:te}},jf=(e,t)=>{Mv(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(jv(e.inputs,t)):e.compute(Rv(e.inputs,t))},Uf=e=>pe(e)});var Uv,Nv,Vv,Wv,Lv,Gv,Hv,Fv,Vf,Wf=X(()=>{"use strict";ce();me();ye();Uv=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Nv=(e,t,i)=>{let r="";for(let s=t-1;s>=0;--s)r+=`
            k = i32(${e.indicesGet("indices",s)}) - ${re("uniforms.pads",s,i)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${re("uniforms.x_shape",s,t)})) {
              break;
            }
            offset += k * i32(${re("uniforms.x_strides",s,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},Vv=(e,t,i)=>{let r="";for(let s=t-1;s>=0;--s)r+=`
                k = i32(${e.indicesGet("indices",s)}) - ${re("uniforms.pads",s,i)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${re("uniforms.x_shape",s,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${re("uniforms.x_shape",s,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${re("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Wv=(e,t,i)=>{let r="";for(let s=t-1;s>=0;--s)r+=`
                k = i32(${e.indicesGet("indices",s)}) - ${re("uniforms.pads",s,i)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${re("uniforms.x_shape",s,t)})) {
                  k = i32(${re("uniforms.x_shape",s,t)}) - 1;
                }
                offset += k * i32(${re("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Lv=(e,t,i)=>{let r="";for(let s=t-1;s>=0;--s)r+=`
                k = i32(${e.indicesGet("indices",s)}) - ${re("uniforms.pads",s,i)};
                if (k < 0)  {
                  k += i32(${re("uniforms.x_shape",s,t)}]);
                }
                if (k >= i32(${re("uniforms.x_shape",s,t)})) {
                  k -= i32(${re("uniforms.x_shape",s,t)});
                }
                offset += k * i32(${re("uniforms.x_strides",s,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Gv=(e,t,i)=>{switch(i.mode){case 0:return Nv(e,t,i.pads.length);case 1:return Vv(e,t,i.pads.length);case 2:return Wv(e,t,i.pads.length);case 3:return Lv(e,t,i.pads.length);default:throw new Error("Invalid mode")}},Hv=(e,t)=>{let i=V.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,s=V.size(i),d=[{type:12,data:s},{type:6,data:t.pads}],c=e.length>=3&&e[2].data;t.mode===0&&d.push({type:c?e[2].dataType:1,data:t.value}),d.push(...J(e[0].dims,i));let f=["rank"],h=y=>{let _=Y("output",e[0].dataType,i.length),w=W("x",e[0].dataType,r.length),v=w.type.value,C=Gv(_,r.length,t),x=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&x.push({name:"constant_value",type:c?v:"f32"}),`
            ${y.registerUniforms(x).declareVariables(w,_)}
            ${y.mainStart()}
            ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${_.offsetToIndices("global_idx")};

            var value = ${v}(0);
            ${C}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${c}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(V.size(i)/64)},programUniforms:d}),getShaderSource:h}},Fv=(e,t)=>{if(e.length>1){let i=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,s=e[0].dims.length,d=new Int32Array(2*s).fill(0);if(e.length>=4){let f=e[3].getBigInt64Array();for(let h=0;h<f.length;h++)d[Number(f[h])]=Number(i[h]),d[Number(f[h])+s]=Number(i[h+f.length])}else i.forEach((f,h)=>d[Number(h)]=Number(f));let c=[];return d.forEach(f=>c.push(f)),{mode:t.mode,value:r,pads:c}}else return t},Vf=(e,t)=>{Uv(e.inputs);let i=Fv(e.inputs,t);e.compute(Hv(e.inputs,i),{inputs:[0]})}});var fn,Lf,Gf,Hf,Ff,qv,Kv,qf,Kf,Yf,Zf,Qf,Xf,Jf,em,tm,rm,nm,im,om=X(()=>{"use strict";Qe();ce();me();ye();fn=e=>{if(Ae.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Lf=(e,t,i)=>{let r=t.format==="NHWC",s=e.dims.slice();r&&s.splice(1,0,s.pop());let d=Object.hasOwnProperty.call(t,"dilations"),c=t.kernelShape.slice(),f=t.strides.slice(),h=d?t.dilations.slice():[],y=t.pads.slice();jt.adjustPoolAttributes(i,s,c,f,h,y);let _=jt.computePoolOutputShape(i,s,f,h,c,y,t.autoPad),w=Object.assign({},t);d?Object.assign(w,{kernelShape:c,strides:f,pads:y,dilations:h,cacheKey:t.cacheKey}):Object.assign(w,{kernelShape:c,strides:f,pads:y,cacheKey:t.cacheKey});let v=_.slice();return v.push(v.splice(1,1)[0]),[w,r?v:_]},Gf=(e,t)=>{let i=t.format==="NHWC",r=V.size(e),s=V.size(t.kernelShape),d=[{type:12,data:r},{type:12,data:s}],c=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let f=t.kernelShape[t.kernelShape.length-1],h=t.strides[t.strides.length-1],y=t.pads[t.pads.length/2-1],_=t.pads[t.pads.length-1],w=!!(y+_);d.push({type:12,data:f},{type:12,data:h},{type:12,data:y},{type:12,data:_}),c.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let v=!1;if(t.kernelShape.length===2){let C=t.kernelShape[t.kernelShape.length-2],x=t.strides[t.strides.length-2],S=t.pads[t.pads.length/2-2],E=t.pads[t.pads.length-2];v=!!(S+E),d.push({type:12,data:C},{type:12,data:x},{type:12,data:S},{type:12,data:E}),c.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[d,c,!0,w,v]}else{if(i)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let f=V.computeStrides(t.kernelShape);d.push({type:12,data:f},{type:12,data:t.pads},{type:12,data:t.strides}),c.push({name:"kernelStrides",type:"u32",length:f.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let h=t.pads.reduce((y,_)=>y+_);return[d,c,!!h,!1,!1]}},Hf=(e,t,i,r,s,d,c,f,h,y,_,w)=>{let v=s.format==="NHWC",C=t.type.value,x=Y("output",t.type.tensor,r);if(s.kernelShape.length<=2){let S="",E="",A="",I=i-(v?2:1);if(_?S=`
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
                }`,s.kernelShape.length===2){let D=i-(v?3:2);w?E=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${D}] = indices[${D}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${D}] < 0 || xIndices[${D}] >= uniforms.x_shape[${D}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:E=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${D}] = indices[${D}] * uniforms.sh - uniforms.phStart + j;
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
              ${E}
              ${S}
              ${A}
              ${c}

              output[global_idx] = value;
            }`}else{if(v)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let S=s.kernelShape.length,E=s.pads.length,A="";return y?A=`
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
                  offsets[j] = offset / ${re("uniforms.kernelStrides","j",S)};
                  offset -= offsets[j] * ${re("uniforms.kernelStrides","j",S)};
                }
                offsets[${S-1}] = offset;

                isPad = false;
                for (var j = ${i-S}u; j < ${i}u; j++) {
                  xIndices[j] = indices[j] * ${re("uniforms.strides",`j - ${i-S}u`,S)}
                    + offsets[j - ${i-S}u] - ${re("uniforms.pads","j - 2u",E)};
                  ${A}
              }
              ${c}

              output[global_idx] = value;
            }`}},Ff=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,qv=e=>`${Ff(e)};${e.countIncludePad}`,Kv=e=>`${Ff(e)};${e.storageOrder};${e.dilations}`,qf=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Kf=(e,t,i,r)=>{let[s,d]=Lf(t,r,i),c=W("x",t.dataType,t.dims.length),f=c.type.value,h="value += x_val;",y="";s.countIncludePad?y+=`value /= ${f}(uniforms.kernelSize);`:y+=`value /= ${f}(i32(uniforms.kernelSize) - pad);`;let[_,w,v,C,x]=Gf(d,s);_.push(...J(t.dims,d));let S=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${v};${C};${x}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:d,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(V.size(d)/64)},programUniforms:_}),getShaderSource:E=>Hf(E,c,t.dims.length,d.length,s,h,y,0,w,v,C,x)}},Yf=e=>{let t=e.count_include_pad!==0,i=qf(e);if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...i,cacheKey:""};return{...r,cacheKey:qv(r)}},Zf=(e,t)=>{fn(e.inputs),e.compute(Kf("AveragePool",e.inputs[0],!1,t))},Qf={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Xf=e=>{let t=e.format;return{format:t,...Qf,cacheKey:t}},Jf=(e,t)=>{fn(e.inputs),e.compute(Kf("GlobalAveragePool",e.inputs[0],!0,t))},em=(e,t,i,r)=>{let[s,d]=Lf(t,r,i),c=`
      value = max(x_val, value);
    `,f="",h=W("x",t.dataType,t.dims.length),y=["rank"],[_,w,v,C,x]=Gf(d,s);return _.push(...J(t.dims,d)),{name:e,shaderCache:{hint:`${r.cacheKey};${v};${C};${x}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:d,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(V.size(d)/64)},programUniforms:_}),getShaderSource:S=>Hf(S,h,t.dims.length,d.length,s,c,f,t.dataType===10?-65504:-1e5,w,v,C,x)}},tm=(e,t)=>{fn(e.inputs),e.compute(em("MaxPool",e.inputs[0],!1,t))},rm=e=>{let t=e.storage_order,i=e.dilations,r=qf(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let s={storageOrder:t,dilations:i,...r,cacheKey:""};return{...s,cacheKey:Kv(s)}},nm=e=>{let t=e.format;return{format:t,...Qf,cacheKey:t}},im=(e,t)=>{fn(e.inputs),e.compute(em("GlobalMaxPool",e.inputs[0],!0,t))}});var Zv,Qv,am,sm,um=X(()=>{"use strict";ce();me();Oe();ye();Zv=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((i,r)=>i===e[2].dims[r]).reduce((i,r)=>i&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((s,d)=>d===t.axis||s===e[0].dims[d]).reduce((s,d)=>s&&d,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let i=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(i/r)||t.blockSize>Math.ceil(i/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Qv=(e,t)=>{let i=V.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,s=r===3,d=e[0].dims,c=e[1].dataType,f=V.size(d),h=r===3||r===2,y=h?[Math.ceil(V.size(e[0].dims)/4)]:e[0].dims,_=e[1].dims,w=e.length>2?e[2]:void 0,v=w?h?[Math.ceil(V.size(w.dims)/4)]:w.dims:void 0,C=_.length===0||_.length===1&&_[0]===1,x=C===!1&&_.length===1,S=xe(f),E=C&&(!h||S===4),A=E?S:1,I=E&&!h?S:1,P=W("input",h?12:r,y.length,I),D=W("scale",c,_.length),B=w?W("zero_point",h?12:r,v.length):void 0,M=Y("output",c,d.length,A),G=[P,D];B&&G.push(B);let F=[y,_];w&&F.push(v);let Z=[{type:12,data:f/A},{type:12,data:i},{type:12,data:t.blockSize},...J(...F,d)],te=ne=>{let fe=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${ne.registerUniforms(fe).declareVariables(...G,M)}
      ${ne.mainStart()}
          ${ne.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${M.offsetToIndices("global_idx")};

          // Set input x
          ${(()=>h?`
            let input = ${P.getByOffset("global_idx / 4")};
            let x_vec = ${s?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${A===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${P.getByOffset("global_idx")};`)()};

          // Set scale input
          ${(()=>C?`let scale_value= ${D.getByOffset("0")}`:x?`
            let scale_index = ${M.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${D.getByOffset("scale_index")};`:`
            var scale_indices: ${D.type.indices} = output_indices;
            let index = ${D.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${D.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${D.getByIndices("scale_indices")};`)()};

          // Set zero-point input
          ${(()=>B?C?h?`
                let zero_point_input = ${B.getByOffset("0")};
                let zero_point_vec =  ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${B.getByOffset("0")}`:x?h?`
                let zero_point_index = ${M.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${B.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${M.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${B.getByOffset("zero_point_index")};`:h?`
                let zero_point_offset = ${D.indicesToOffset("scale_indices")};
                let zero_point_input = ${B.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${s?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${B.getByIndices("scale_indices")};`:`let zero_point_value = ${h?s?"i32":"u32":P.type.value}(0);`)()};
      // Compute and write output
      ${M.setByOffset("global_idx",`${M.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:B?["rank","rank","rank"]:["rank","rank"]},getShaderSource:te,getRunData:()=>({outputs:[{dims:d,dataType:c}],dispatchGroup:{x:Math.ceil(f/A/64),y:1,z:1},programUniforms:Z})}},am=(e,t)=>{Zv(e.inputs,t),e.compute(Qv(e.inputs,t))},sm=e=>pe({axis:e.axis,blockSize:e.blockSize})});var Xv,Jv,lm,dm=X(()=>{"use strict";Qe();ce();ye();Xv=(e,t,i)=>{let r=e===t,s=e<t&&i<0,d=e>t&&i>0;if(r||s||d)throw new Error("Range these inputs' contents are invalid.")},Jv=(e,t,i,r)=>{let s=Math.abs(Math.ceil((t-e)/i)),d=[s],c=s,f=[{type:12,data:c},{type:r,data:e},{type:r,data:i},...J(d)],h=y=>{let _=Y("output",r,d.length),w=_.type.value,v=[{name:"outputSize",type:"u32"},{name:"start",type:w},{name:"delta",type:w}];return`
        ${y.registerUniforms(v).declareVariables(_)}
        ${y.mainStart()}
        ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${w}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:h,getRunData:()=>({outputs:[{dims:d,dataType:r}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:f})}},lm=e=>{let t=0,i=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],i=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],i=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Ae.webgpu.validateInputContent&&Xv(t,i,r),e.compute(Jv(t,i,r,e.inputs[0].dataType),{inputs:[]})}});var e$,t$,cm,pm,fm=X(()=>{"use strict";ce();me();Oe();ye();e$=(e,t,i,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let s=`{
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
                ${s}max(bitcast<f32>(oldValue), (${i}))${d}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${i}));`:`${s}min(bitcast<${r}>(oldValue), (${i}))${d}`;case"mul":return`${s}(bitcast<${r}>(oldValue) * (${i}))${d}`;default:throw new Error(`Reduction ${e} is not supported.`)}},t$=(e,t)=>{let i=e[0].dims,r=e[1].dims,s=i,d=1,c=Math.ceil(V.size(r)/d),f=r[r.length-1],h=V.sizeFromDimension(i,f),y=[{type:12,data:c},{type:12,data:f},{type:12,data:h},...J(e[1].dims,e[2].dims,s)],_=w=>{let v=W("indices",e[1].dataType,e[1].dims.length),C=W("updates",e[2].dataType,e[2].dims.length,d),x=t.reduction!=="none"&&t.reduction!==""?Ud("output",e[0].dataType,s.length):Y("output",e[0].dataType,s.length,d);return`
      ${w.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(v,C,x)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
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
    ${e$(t.reduction,"output[data_offset + i]","value",x.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:y}),getShaderSource:_}},cm=e=>pe({reduction:e.reduction}),pm=(e,t)=>{e.compute(t$(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}});var r$,n$,i$,mm,o$,a$,s$,u$,l$,d$,c$,p$,hm,f$,m$,h$,g$,y$,gm,ym,bm=X(()=>{"use strict";ce();me();Oe();ye();r$=(e,t)=>{if(e.every(i=>i>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},n$=(e,t,i)=>{t.every(s=>s>=0&&s<i||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(i).fill(1);return t.forEach((s,d)=>r[s]=e[d]),r},i$=(e,t,i,r,s,d)=>{let[c,f,h]=i>10?[1,2,3]:[-1,e.length>1?1:-1,-1],y=e[0].dims.length;if(c>0&&e.length>c&&e[c].dims.length>0)e[c].getFloat32Array().forEach(_=>d.push(_));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(f>0&&e.length>f&&e[f].dims.length===1&&e[f].dims[0]>0){if(e[f].getFloat32Array().forEach(_=>r.push(_)),r.length!==0&&r.length!==y&&i>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");r$(r,t),t.axes.length>0&&n$(r,t.axes,y).forEach((_,w)=>r[w]=_)}if(h>0&&e.length>h&&e[h].dims.length===1&&e[h].dims[0]>0&&(e[h].getBigInt64Array().forEach(_=>s.push(Number(_))),s.length!==0&&s.length!==y&&i>=18&&s.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(s.length!==0&&s.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof s<"u"&&r.length>0&&s.length>y)throw new Error("Resize requires only of scales or sizes to be specified")},mm=(e,t,i,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${i}));
  let fract = ${r}(big % (${i})) / ${r}(${i});
  return whole + fract;
`,o$=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${mm("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${mm("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",a$=(e,t,i)=>`fn getNearestPixelFromOriginal(xOriginal: ${i}, isDownSample: bool) -> ${i} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",s$=(e,t,i)=>{let r=new Array(i).fill(0).concat(new Array(i).fill(1)),s=e.length===0?r:e.slice();return t.length>0?(t.forEach((d,c)=>{r[d]=s[c],r[c+i]=s[t.length+c]}),r):s},u$=(e,t,i,r)=>{let s=[];if(i.length>0)if(r.length>0){if(e.forEach(d=>s.push(d)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((d,c)=>s[d]=i[c])}else i.forEach(d=>s.push(d));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");s=e.map((d,c)=>Math.round(d*t[c]))}return s},l$=(e,t,i)=>{let r=(()=>{switch(i.keepAspectRatioPolicy){case"not_larger":return i.axes.length>0?Math.min(...i.axes.map(d=>t[d]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return i.axes.length>0?Math.max(...i.axes.map(d=>t[d]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${i.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let s=e.slice();return i.axes.length>0?(i.axes.forEach(d=>t[d]=r),i.axes.forEach(d=>s[d]=Math.round(e[d]*t[d]))):(t.fill(r,0,t.length),s.forEach((d,c)=>s[c]=Math.round(d*t[c]))),s},d$=(e,t,i,r,s)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${i.length}> {
      var original_indices: array<${e.type.value}, ${i.length}>;
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${re("uniforms.scales","i",r)};
        var roi_low = ${re("uniforms.roi","i",s)};
        var roi_hi = ${re("uniforms.roi",`i + ${t.length}`,s)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${re("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${re("uniforms.output_shape","i",i.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,c$=(e,t,i,r,s,d,c)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${re("uniforms.scales","i",s)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${re("uniforms.roi","i",d)};
          var roi_hi = ${re("uniforms.roi",`i + ${i.length}`,d)};
          var input_shape_i = ${re("uniforms.input_shape","i",i.length)};
          var output_shape_i = ${re("uniforms.output_shape","i",r.length)};
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
    }`,p$=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${re("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,hm=(e,t,i,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",i,"batch")};
`:"",f$=(e,t,i,r,s)=>{let[c,f,h,y]=i.length===2?[-1,0,1,-1]:[0,2,3,1],_=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${_} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",f,`max(0, min(row, ${i[f]} - 1))`)};
      ${e.indicesSet("input_indices",h,`max(0, min(col, ${i[h]} - 1))`)};
      ${hm(e,y,c,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${_} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${_} = originalIndices[${f}];
      var col:${_} = originalIndices[${h}];
      ${r?`if (row < 0 || row > (${i[f]} - 1) || col < 0 || col > (${i[h]} - 1)) {
        return ${s};
      }`:""};
      row = max(0, min(row, ${i[f]} - 1));
      col = max(0, min(col, ${i[h]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${i.length>2?`u32(originalIndices[${y}])`:"0"};
      var batch: u32 =  ${i.length>2?`u32(originalIndices[${c}])`:"0"};
      var x11: ${_} = getInputValue(batch, channel, row1, col1);
      var x12: ${_} = getInputValue(batch, channel, row1, col2);
      var x21: ${_} = getInputValue(batch, channel, row2, col1);
      var x22: ${_} = getInputValue(batch, channel, row2, col2);
      var dx1: ${_} = abs(row - ${_}(row1));
      var dx2: ${_} = abs(${_}(row2) - row);
      var dy1: ${_} = abs(col - ${_}(col1));
      var dy2: ${_} = abs(${_}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},m$=(e,t,i,r,s,d,c,f,h,y)=>{let _=i.length===2,w=!0,[v,C]=_?[0,1]:w?[2,3]:[1,2],x=e.type.value,S=E=>{let A=E===v?"row":"col";return`
      fn ${A}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${x} {
        var output_index = ${t.indicesGet("output_indices",E)};
        var originalIdx: ${x} = getOriginalCoordinateFromResizedCoordinate(output_index, ${s[E]},
        ${r[E]}, ${i[E]}, ${d[E]}, ${d[E]} + ${i.length});
        var fractOriginalIdx: ${x} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${f} && (originalIdx < 0 || originalIdx > (${i[E]} - 1))) {
          return ${h};
        }
        var data: array<${x}, 4> = array<${x}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${A}: ${x} = originalIdx + ${x}(i);
          if (${A} < 0 || ${A} >= ${i[E]}) {
            ${(()=>y?`coefs[i + 1] = 0.0;
                        continue;`:f?`return ${h};`:`${A} = max(0, min(${A}, ${i[E]} - 1));`)()};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",E,`u32(${A})`)};
          data[i + 1] = ${E===v?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
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
    `},h$=(e,t,i,r,s)=>{let[c,f,h,y,_]=i.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],w=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${w} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",f,`max(0, min(depth, ${i[f]} - 1))`)};
      ${e.indicesSet("input_indices",h,`max(0, min(height, ${i[h]} - 1))`)};
      ${e.indicesSet("input_indices",y,`max(0, min(width, ${i[y]} - 1))`)};
      ${hm(e,_,c,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${w} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${w} = originalIndices[${f}];
      var height:${w} = originalIndices[${h}];
      var width:${w} = originalIndices[${y}];
      ${r?`if (depth < 0 || depth > (${i[f]} - 1) || height < 0 || height > (${i[h]} - 1) || width < 0 || (width > ${i[y]} - 1)) {
      return ${s};
        }`:""};

    depth = max(0, min(depth, ${i[f]} - 1));
      height = max(0, min(height, ${i[h]} - 1));
      width = max(0, min(width, ${i[y]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${i.length>3?`u32(originalIndices[${_}])`:"0"};
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
    }`},g$=(e,t,i,r,s,d)=>{let c=e.dims,f=s$(d,t.axes,c.length),h=u$(c,r,s,t.axes),y=r.slice();r.length===0&&(y=c.map((I,P)=>I===0?1:h[P]/I),t.keepAspectRatioPolicy!=="stretch"&&(h=l$(c,y,t)));let _=Y("output",e.dataType,h.length),w=W("input",e.dataType,c.length),v=V.size(h),C=c.length===h.length&&c.every((I,P)=>I===h[P]),x=t.coordinateTransformMode==="tf_crop_and_resize",S=t.extrapolationValue,E=w.type.value,A=I=>`
      ${C?"":`
      ${o$(t.coordinateTransformMode,E)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${p$(w,c)};
              ${a$(t.nearestMode,i,E)};
              ${c$(w,_,c,h,y.length,f.length,x)};
              `;case"linear":return`
              ${d$(_,c,h,y.length,f.length)};
              ${(()=>{if(c.length===2||c.length===4)return`${f$(w,_,c,x,S)}`;if(c.length===3||c.length===5)return`${h$(w,_,c,x,S)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(c.length===2||c.length===4)return`${m$(w,_,c,h,y,f,t.cubicCoeffA,x,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${I.registerUniform("output_size","u32").registerUniform("scales","f32",y.length).registerUniform("roi","f32",f.length).declareVariables(w,_)}
      ${I.mainStart()}
        ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${C?"output[global_idx] = input[global_idx];":`
        let output_indices = ${_.offsetToIndices("global_idx")};
        var input_indices: ${w.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${w.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${c.length===2||c.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${i}|${y.length>0?t.mode==="cubic"?y:y.length:""}|${s.length>0?s:""}|${f.length>0?f:""}|${C}|${t.mode==="nearest"?c.length:c}`,inputDependencies:["rank"]},getShaderSource:A,getRunData:()=>({outputs:[{dims:h,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:[{type:12,data:v},{type:1,data:y},{type:1,data:f},...J(c,h)]})}},y$=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},gm=(e,t)=>{let i=[],r=[],s=[],d=y$(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");i$(e.inputs,t,d,i,r,s),e.compute(g$(e.inputs[0],t,d,i,r,s),{inputs:[0]})},ym=e=>{let t=e.antialias,i=e.axes,r=e.coordinateTransformMode,s=e.cubicCoeffA,d=e.excludeOutside!==0,c=e.extrapolationValue,f=e.keepAspectRatioPolicy,h=e.mode,y=e.nearestMode===""?"simple":e.nearestMode;return pe({antialias:t,axes:i,coordinateTransformMode:r,cubicCoeffA:s,excludeOutside:d,extrapolationValue:c,keepAspectRatioPolicy:f,mode:h,nearestMode:y})}});var b$,_$,_m,wm=X(()=>{"use strict";ce();me();Oe();ye();b$=(e,t)=>{let[i,r,s,d]=e,{numHeads:c,rotaryEmbeddingDim:f}=t;if(i.dims.length!==3&&i.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${i.dims.length}`);if(!V.areEqual(r.dims,[])&&!V.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(d.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${d.dims.length}`);if(!V.areEqual(s.dims,d.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(f>0&&c===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let h=i.dims[0],y=i.dims[i.dims.length-2],_=s.dims[0],w=V.sizeFromDimension(i.dims,1)/y,v=f===0?s.dims[1]*2:w/c;if(f>v)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(h!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(y!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(v/2!==s.dims[1]&&f/2!==s.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${s.dims[1]}`);if(y>_)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},_$=(e,t)=>{let{interleaved:i,numHeads:r,rotaryEmbeddingDim:s,scale:d}=t,c=e[0].dims[0],f=V.sizeFromDimension(e[0].dims,1),h=e[0].dims[e[0].dims.length-2],y=f/h,_=e[2].dims[1],w=s===0?_*2:y/r,v=new Array(c,h,y/w,w-_),C=V.computeStrides(v),x=[{type:1,data:d},{type:12,data:v},{type:12,data:C},...e[0].dims.length===3?new Array({type:12,data:[f,y,w,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[f,w,h*w,1]}):[],...J(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],S=E=>{let A=W("input",e[0].dataType,e[0].dims.length),I=W("position_ids",e[1].dataType,e[1].dims.length),P=W("cos_cache",e[2].dataType,e[2].dims.length),D=W("sin_cache",e[3].dataType,e[3].dims.length),B=Y("output",e[0].dataType,e[0].dims.length);return E.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:v.length},{name:"global_strides",type:"u32",length:C.length},{name:"input_output_strides",type:"u32",length:C.length}]),`
        ${E.declareVariables(A,I,P,D,B)}

        ${E.mainStart(Ut)}
          let half_rotary_emb_dim = uniforms.${P.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${E.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${I.broadcastedIndicesToOffset("bsnh.xy",Y("",I.type.tensor,2))};
            let position_id =
                u32(${I.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${i});
            let j = i + select(half_rotary_emb_dim, 1, ${i});
            let re = ${A.getByOffset("i")} * ${P.get("position_id","bsnh[3]")} -
                ${A.getByOffset("j")} * ${D.get("position_id","bsnh[3]")};
            ${B.setByOffset("i","re")}
            let im = ${A.getByOffset("i")} * ${D.get("position_id","bsnh[3]")} +
                ${A.getByOffset("j")} * ${P.get("position_id","bsnh[3]")};
            ${B.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${B.setByOffset("k",A.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:pe({interleaved:i}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:S,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(V.size(v)/Ut)},programUniforms:x})}},_m=(e,t)=>{b$(e.inputs,t),e.compute(_$(e.inputs,t))}});var w$,v$,vm,$m=X(()=>{"use strict";ce();me();ye();w$=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],i=e[1],r=e[2];if(t.dataType!==i.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(i.dims.length!==3&&i.dims.length!==2)throw new Error("Skip must be 2D or 3D");let s=t.dims[t.dims.length-1],d=t.dims[t.dims.length-2];if(i.dims[i.dims.length-1]!==s)throw new Error("Skip must have the same hidden size as input");if(i.dims[i.dims.length-2]!==d)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==s)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let c=e[3];if(c.dims.length!==1)throw new Error("Beta must be 1D");if(c.dims[c.dims.length-1]!==s)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let c=e[4];if(c.dims.length!==1)throw new Error("Bias must be 1D");if(c.dims[c.dims.length-1]!==s)throw new Error("Bias must have the same hidden size as input")}},v$=(e,t,i,r)=>{let s=t.simplified,d=e[0].dims,c=V.size(d),f=d,h=c,y=d.slice(-1)[0],_=r?d.slice(0,-1).concat(1):[],w=!s&&e.length>3,v=e.length>4,C=r&&i>1,x=r&&i>2,S=i>3,E=64,A=xe(y),I=[{type:12,data:h},{type:12,data:A},{type:12,data:y},{type:1,data:t.epsilon}],P=B=>{let M=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],G=[W("x",e[0].dataType,e[0].dims,A),W("skip",e[1].dataType,e[1].dims,A),W("gamma",e[2].dataType,e[2].dims,A)];w&&G.push(W("beta",e[3].dataType,e[3].dims,A)),v&&G.push(W("bias",e[4].dataType,e[4].dims,A)),G.push(Y("output",e[0].dataType,f,A)),C&&G.push(Y("mean_output",1,_)),x&&G.push(Y("inv_std_output",1,_)),S&&G.push(Y("input_skip_bias_sum",e[0].dataType,f,A));let F=Ie(e[0].dataType),Z=Ie(1,A);return`

      ${B.registerUniforms(M).declareVariables(...G)}
      var<workgroup> sum_shared : array<${Z}, ${E}>;
      var<workgroup> sum_squared_shared : array<${Z}, ${E}>;

      ${B.mainStart([E,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${E};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${E};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${E-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${v?"bias[offset1d + i]":F+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${S?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Nt(F,A,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${E};
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
        let mean = ${rt("sum",A)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${rt("square_sum",A)} / f32(uniforms.hidden_size) ${s?"":"- mean * mean"} + uniforms.epsilon);
        ${C?"mean_output[global_idx] = mean;":""}
        ${x?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${s?"":`- ${F}(mean)`}) *
            ${F}(inv_std_dev) * gamma[offset1d + i]
            ${w?"+ beta[offset1d + i]":""};
        }
      }`},D=[{dims:f,dataType:e[0].dataType}];return i>1&&D.push({dims:_,dataType:1}),i>2&&D.push({dims:_,dataType:1}),i>3&&D.push({dims:d,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${A};${C};${x};${S}`,inputDependencies:e.map((B,M)=>"type")},getShaderSource:P,getRunData:()=>({outputs:D,dispatchGroup:{x:Math.ceil(h/y)},programUniforms:I})}},vm=(e,t)=>{w$(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(v$(e.inputs,t,e.outputCount,!1),{outputs:r})}});var $$,mn,x$,xm,C$,S$,Cm,Sm,Tm=X(()=>{"use strict";ce();me();Oe();ye();$$=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((i,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},mn=(e,t)=>{let i=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>i.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>i.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return i},x$=(e,t)=>{if(e.length>1){let i=mn(e,1),r=mn(e,2),s=mn(e,3);return s.length===0&&(s=[...Array(e[0].dims.length).keys()]),pe({starts:i,ends:r,axes:s})}else return t},xm=(e,t,i,r,s)=>{let d=e;return e<0&&(d+=i[r[t]]),s[t]<0?Math.max(0,Math.min(d,i[r[t]]-1)):Math.max(0,Math.min(d,i[r[t]]))},C$=(e,t,i)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${i.length}; i >= 0; i--) {
            let input_shape_i = ${re("uniforms.input_shape","i",i.length)};
            let steps_i = ${re("uniforms.steps","i",i.length)};
            let signs_i = ${re("uniforms.signs","i",i.length)};
            let starts_i = ${re("uniforms.starts","i",i.length)};
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
      }`,S$=(e,t)=>{let i=e[0].dims,r=V.size(i),s=t.axes.length>0?V.normalizeAxes(t.axes,i.length):[...Array(i.length).keys()],d=mn(e,4);d.forEach(A=>A!==0||(()=>{throw new Error("step cannot be 0")})),d.length===0&&(d=Array(s.length).fill(1));let c=t.starts.map((A,I)=>xm(A,I,i,s,d)),f=t.ends.map((A,I)=>xm(A,I,i,s,d));if(s.length!==c.length||s.length!==f.length)throw new Error("start, ends and axes should have the same number of elements");if(s.length!==i.length)for(let A=0;A<i.length;++A)s.includes(A)||(c.splice(A,0,0),f.splice(A,0,i[A]),d.splice(A,0,1));let h=d.map(A=>Math.sign(A));d.forEach((A,I,P)=>{if(A<0){let D=(f[I]-c[I])/A,B=c[I],M=B+D*d[I];c[I]=M,f[I]=B,P[I]=-A}});let y=i.slice(0);s.forEach((A,I)=>{y[A]=Math.ceil((f[A]-c[A])/d[A])});let _={dims:y,dataType:e[0].dataType},w=Y("output",e[0].dataType,y.length),v=W("input",e[0].dataType,e[0].dims.length),C=V.size(y),x=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:c.length},{name:"signs",type:"i32",length:h.length},{name:"steps",type:"u32",length:d.length}],S=[{type:12,data:C},{type:12,data:c},{type:6,data:h},{type:12,data:d},...J(e[0].dims,y)],E=A=>`
      ${A.registerUniforms(x).declareVariables(v,w)}
        ${C$(v,w,i)}
        ${A.mainStart()}
          ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${w.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${w.setByOffset("global_idx",v.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${h.length}_${c.length}_${d.length}`,inputDependencies:["rank"]},getShaderSource:E,getRunData:()=>({outputs:[_],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:S})}},Cm=(e,t)=>{$$(e.inputs,t);let i=x$(e.inputs,t);e.compute(S$(e.inputs,i),{inputs:[0]})},Sm=e=>{let t=e.starts,i=e.ends,r=e.axes;return pe({starts:t,ends:i,axes:r})}});var T$,I$,Im,Am,km=X(()=>{"use strict";ce();me();Oe();wt();ye();T$=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},I$=(e,t)=>{let i=e.inputs[0],r=i.dims,s=V.size(r),d=r.length,c=V.normalizeAxis(t.axis,d),f=c<r.length-1,h,y=[];f?(y=Array.from({length:d},(G,F)=>F),y[c]=d-1,y[d-1]=c,h=e.compute(We(i,y),{inputs:[i],outputs:[-1]})[0]):h=i;let _=h.dims,w=_[d-1],v=s/w,C=xe(w),x=w/C,S=64;v===1&&(S=256);let E=(G,F)=>F===4?`max(max(${G}.x, ${G}.y), max(${G}.z, ${G}.w))`:F===2?`max(${G}.x, ${G}.y)`:F===3?`max(max(${G}.x, ${G}.y), ${G}.z)`:G,A=W("x",h.dataType,h.dims,C),I=Y("result",h.dataType,h.dims,C),P=A.type.value,D=Ie(h.dataType)==="f32"?`var threadMax = ${P}(-3.402823e+38f);`:`var threadMax = ${P}(-65504.0h);`,B=G=>`
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
      ${G.registerUniform("packedCols","i32").declareVariables(A,I)}
      ${G.mainStart(S)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${S};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${D}
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
          rowMaxShared = ${P}(${E("threadShared[0]",C)});
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
          rowSumShared = ${P}(${rt("threadShared[0]",C)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,M=e.compute({name:"Softmax",shaderCache:{hint:`${C};${S}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:_,dataType:h.dataType}],dispatchGroup:{x:v},programUniforms:[{type:6,data:x}]}),getShaderSource:B},{inputs:[h],outputs:[f?-1:0]})[0];f&&e.compute(We(M,y),{inputs:[M]})},Im=(e,t)=>{T$(e.inputs),I$(e,t)},Am=e=>pe({axis:e.axis})});var Em,A$,k$,E$,Pm,zm=X(()=>{"use strict";ce();me();ye();Em=e=>Array.from(e.getBigInt64Array(),Number),A$=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Em(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},k$=(e,t)=>{let i=[];for(let r=0;r<e.length;++r)i.push(e[r]*t[r]);return i},E$=(e,t)=>{let i=e[0].dims,r=t??Em(e[1]),s=k$(i,r),d=V.size(s),c=e[0].dataType,f=W("input",c,i.length),h=Y("output",c,s.length),y=_=>`
      const inputShape = ${f.indices(...i)};
      ${_.registerUniform("output_size","u32").declareVariables(f,h)}
      ${_.mainStart()}
      ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${h.offsetToIndices("global_idx")};
      var input_indices: ${f.type.indices};
      for (var i = 0; i < ${i.length}; i++) {
        let input_dim_i = ${f.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${h.indicesGet("output_indices","i")}  % input_dim_i;

        ${f.indicesSet("input_indices","i","input_dim_value")}
      }
      ${h.setByOffset("global_idx",f.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},...J(e[0].dims,s)]}),getShaderSource:y}},Pm=e=>{A$(e.inputs),e.compute(E$(e.inputs),{inputs:[0]})}});var P$,z$,Om,Dm=X(()=>{"use strict";ce();me();ye();P$=(e,t,i,r,s)=>{let d=Y("output_data",s,i.length,4),c=W("a_data",t[1].dataType,t[1].dims.length,4),f=W("b_data",t[2].dataType,t[2].dims.length,4),h=W("c_data",t[0].dataType,t[0].dims.length,4),y,_=(w,v,C)=>`select(${v}, ${w}, ${C})`;if(!r)y=d.setByOffset("global_idx",_(c.getByOffset("global_idx"),f.getByOffset("global_idx"),h.getByOffset("global_idx")));else{let w=(v,C,x="")=>{let S=`a_data[index_a${C}][component_a${C}]`,E=`b_data[index_b${C}][component_b${C}]`,A=`bool(c_data[index_c${C}] & (0xffu << (component_c${C} * 8)))`;return`
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
            ${v}[${C}] = ${x}(${_(S,E,A)});
          `};s===9?y=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:y=`
            ${w("output_data[global_idx]",0)}
            ${w("output_data[global_idx]",1)}
            ${w("output_data[global_idx]",2)}
            ${w("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(h,c,f,d)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${y}
      }`},z$=e=>{let t=e[1].dims,i=e[2].dims,r=e[0].dims,s=e[1].dataType,d=!(V.areEqual(t,i)&&V.areEqual(i,r)),c=t,f=V.size(t);if(d){let y=ct.calcShape(ct.calcShape(t,i,!1),r,!1);if(!y)throw new Error("Can't perform where op on the given tensors");c=y,f=V.size(c)}let h=Math.ceil(f/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:y=>P$(y,e,c,d,s),getRunData:()=>({outputs:[{dims:c,dataType:s}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:h},...J(r,t,i,c)]})}},Om=e=>{e.compute(z$(e.inputs))}});var Bm,Mm=X(()=>{"use strict";mc();rn();yc();_c();ip();hp();bp();Dp();Vp();Gp();qp();Xp();tf();nf();sf();df();ff();gf();_f();$f();Ef();Of();Bf();Rf();Nf();Oi();Wf();om();um();dm();fm();en();bm();wm();$m();Tm();km();Bi();zm();wt();on();Dm();Bm=new Map([["Abs",[wc]],["Acos",[vc]],["Acosh",[$c]],["Add",[op]],["ArgMax",[fc,wi]],["ArgMin",[pc,wi]],["Asin",[xc]],["Asinh",[Cc]],["Atan",[Sc]],["Atanh",[Tc]],["Attention",[hc]],["AveragePool",[Zf,Yf]],["BatchNormalization",[gc]],["BiasAdd",[bc]],["BiasSplitGelu",[np]],["Cast",[Ac,Ic]],["Ceil",[Ec]],["Clip",[kc]],["Concat",[gp,yp]],["Conv",[ki,Ai]],["ConvTranspose",[Np,jp]],["Cos",[Pc]],["Cosh",[zc]],["CumSum",[Wp,Lp]],["DepthToSpace",[Hp,Fp]],["DequantizeLinear",[am,sm]],["Div",[ap]],["Einsum",[Zp,Qp]],["Elu",[Oc,lr]],["Equal",[sp]],["Erf",[Dc]],["Exp",[Bc]],["Expand",[ef]],["FastGelu",[rf]],["Floor",[Mc]],["FusedConv",[ki,Ai]],["Gather",[af,of]],["GatherElements",[hf,mf]],["GatherBlockQuantized",[cf,pf]],["GatherND",[uf,lf]],["Gelu",[Rc]],["Gemm",[bf,yf]],["GlobalAveragePool",[Jf,Xf]],["GlobalMaxPool",[im,nm]],["Greater",[cp]],["GreaterOrEqual",[fp]],["GridSample",[wf,vf]],["GroupQueryAttention",[kf]],["HardSigmoid",[Hc,Gc]],["InstanceNormalization",[zf]],["LayerNormalization",[Df]],["LeakyRelu",[jc,lr]],["Less",[pp]],["LessOrEqual",[mp]],["Log",[ep]],["MatMul",[Mf]],["MatMulNBits",[jf,Uf]],["MaxPool",[tm,rm]],["Mul",[up]],["MultiHeadAttention",[Sf,Cf]],["Neg",[Nc]],["Not",[Uc]],["Pad",[Vf]],["Pow",[lp]],["QuickGelu",[tp,lr]],["Range",[lm]],["Reciprocal",[Vc]],["ReduceMin",[ac]],["ReduceMean",[tc]],["ReduceMax",[oc]],["ReduceSum",[uc]],["ReduceProd",[sc]],["ReduceL1",[rc]],["ReduceL2",[nc]],["ReduceLogSum",[dc]],["ReduceLogSumExp",[ic]],["ReduceSumSquare",[lc]],["Relu",[Wc]],["Resize",[gm,ym]],["RotaryEmbedding",[_m]],["ScatterND",[pm,cm]],["Sigmoid",[Lc]],["Sin",[Fc]],["Sinh",[qc]],["Slice",[Cm,Sm]],["SkipLayerNormalization",[vm]],["Split",[Tf,If]],["Sqrt",[Kc]],["Softmax",[Im,Am]],["Sub",[dp]],["Tan",[Yc]],["Tanh",[Qc]],["ThresholdedRelu",[Jc,lr]],["Tile",[Pm]],["Transpose",[Wd,Ld]],["Where",[Om]]])});var hn,Rm=X(()=>{"use strict";Qe();dt();ye();hn=class{constructor(t){this.backend=t;this.repo=new Map,this.attributesBound=!1}getArtifact(t){return this.repo.get(t)}setArtifact(t,i){this.repo.set(t,i)}run(t,i,r,s,d){Ke(t.programInfo.name);let c=this.backend.device,f=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let h=[];for(let _ of i)h.push({binding:h.length,resource:{buffer:_.buffer}});for(let _ of r)h.push({binding:h.length,resource:{buffer:_.buffer}});d&&h.push({binding:h.length,resource:d});let y=c.createBindGroup({layout:t.computePipeline.getBindGroupLayout(0),entries:h,label:t.programInfo.name});if(this.backend.sessionStatus==="capturing"){let _={kernelId:this.backend.currentKernelId,computePipeline:t.computePipeline,bindGroup:y,dispatchGroup:s};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(_)}f.setPipeline(t.computePipeline),f.setBindGroup(0,y),f.dispatchWorkgroups(...s),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ge(t.programInfo.name)}dispose(){}build(t,i){Ke(t.name);let r=this.backend.device,s=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(w=>{r.features.has(w.feature)&&s.push(`enable ${w.extension};`)});let c=Nd(i,this.backend.device.limits),f=t.getShaderSource(c),h=`${s.join(`
`)}
${c.additionalImplementations}
${f}`,y=r.createShaderModule({code:h,label:t.name});_e("verbose",()=>`[WebGPU] ${t.name} shader code: ${h}`);let _=r.createComputePipeline({compute:{module:y,entryPoint:"main"},layout:"auto",label:t.name});return Ge(t.name),{programInfo:t,computePipeline:_,uniformVariablesInfo:c.variablesInfo}}normalizeDispatchGroupSize(t){let i=typeof t=="number"?t:t.x,r=typeof t=="number"?1:t.y||1,s=typeof t=="number"?1:t.z||1,d=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(i<=d&&r<=d&&s<=d)return[i,r,s];let c=i*r*s,f=Math.ceil(Math.sqrt(c));if(f>d){if(f=Math.ceil(Math.cbrt(c)),f>d)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[f,f,f]}else return[f,f,1]}}});var O$,D$,Mi,Ri,gn,jm=X(()=>{"use strict";Qe();ce();dt();li();Md();Mm();Rm();O$=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let i=[];for(let r=0;r<e.length;++r){let s=e[r].dataType;switch(t[r]){case"none":{i.push("");break}case"type":{i.push(`${s}`);break}case"rank":{let d=e[r].dims.length;i.push(`${s};${d}`);break}case"dims":{let d=e[r].dims.join(",");i.push(`${s};${d}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return i.join("|")},D$=(e,t,i)=>{let r=e.name;return e.shaderCache?.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+i+`:${O$(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,r},Mi=class{constructor(t){t&&(this.architecture=t.architecture,this.vendor=t.vendor)}isArchitecture(t){return this.architecture===t}isVendor(t){return this.vendor===t}},Ri=class{constructor(t){this.subgroupsSupported=t.features.has("subgroups"),this.subgroupsF16Supported=t.features.has("subgroups");let i=t.limits;!this.subgroupsSupported||!i.minSubgroupSize||!i.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[i.minSubgroupSize,i.maxSubgroupSize]}},gn=class{constructor(){this.currentSessionId=null;this.currentKernelId=null;this.commandEncoder=null;this.computePassEncoder=null;this.maxDispatchNumber=16;this.pendingDispatchNumber=0;this.pendingKernels=[];this.pendingQueries=new Map;this.sessionStatus="default";this.capturedCommandList=new Map;this.capturedPendingKernels=new Map;this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let t=this.kernelCustomData.get(this.currentKernelId);return t||(t={},this.kernelCustomData.set(this.currentKernelId,t)),t}async initialize(t,i){this.env=t;let r=[],s={requiredLimits:{maxComputeWorkgroupStorageSize:i.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:i.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:i.limits.maxStorageBufferBindingSize,maxBufferSize:i.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:i.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:i.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:i.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:i.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},d=c=>i.features.has(c)&&r.push(c)&&!0;d("chromium-experimental-timestamp-query-inside-passes")||d("timestamp-query"),d("shader-f16"),d("subgroups")&&d("subgroups-f16"),this.device=await i.requestDevice(s),this.deviceInfo=new Ri(this.device),this.adapterInfo=new Mi(i.info||await i.requestAdapterInfo()),this.gpuDataManager=Bd(this),this.programManager=new hn(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Kr(t.logLevel,!!t.debug),this.device.onuncapturederror=c=>{c.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${c.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:i,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let t=this.getCommandEncoder(),i={};this.queryType==="at-passes"&&(i.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=t.beginComputePass(i)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Ke(),this.endComputePass();let t;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),t=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(t,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,t,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&t.mapAsync(GPUMapMode.READ).then(()=>{let i=new BigUint64Array(t.getMappedRange()),r=this.pendingQueries.get(t);for(let s=0;s<i.length/2;s++){let d=r[s],c=d.kernelId,f=this.kernels.get(c),h=f.kernelType,y=f.kernelName,_=d.programName,w=d.inputTensorViews,v=d.outputTensorViews,C=i[s*2],x=i[s*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=C);let S=Number(C-this.queryTimeBase),E=Number(x-this.queryTimeBase);if(!Number.isSafeInteger(S)||!Number.isSafeInteger(E))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:w.map(A=>({dims:A.dims,dataType:At(A.dataType)})),outputsMetadata:v.map(A=>({dims:A.dims,dataType:At(A.dataType)})),kernelId:c,kernelType:h,kernelName:y,programName:_,startTime:S,endTime:E});else{let A="";w.forEach((P,D)=>{A+=`input[${D}]: [${P.dims}] | ${At(P.dataType)}, `});let I="";v.forEach((P,D)=>{I+=`output[${D}]: [${P.dims}] | ${At(P.dataType)}, `}),console.log(`[profiling] kernel "${c}|${h}|${y}|${_}" ${A}${I}execution time: ${E-S} ns`)}Pr("GPU",`${_}::${C}::${x}`)}t.unmap(),this.pendingQueries.delete(t)}),Ge()}run(t,i,r,s,d,c){Ke(t.name);let f=[];for(let P=0;P<i.length;++P){let D=i[P].data;if(D===0)continue;let B=this.gpuDataManager.get(D);if(!B)throw new Error(`no GPU data for input: ${D}`);f.push(B)}let{outputs:h,dispatchGroup:y,programUniforms:_}=t.getRunData(i),w=r.length===0?h.map((P,D)=>D):r;if(w.length!==h.length)throw new Error(`Output size ${w.length} must be equal to ${h.length}.`);let v=[],C=[];for(let P=0;P<h.length;++P){if(!Number.isInteger(w[P])||w[P]<-3||w[P]>=c)throw new Error(`Invalid output index: ${w[P]}`);if(w[P]===-3)continue;let D=w[P]===-1,B=w[P]===-2,M=D||B?d(h[P].dataType,h[P].dims):s(w[P],h[P].dataType,h[P].dims);if(v.push(M),M.data===0)continue;let G=this.gpuDataManager.get(M.data);if(!G)throw new Error(`no GPU data for output: ${M.data}`);if(D&&this.temporaryData.push(G),B){let F=this.kernelPersistentData.get(this.currentKernelId);F||(F=[],this.kernelPersistentData.set(this.currentKernelId,F)),F.push(G)}C.push(G)}if(f.length!==i.length||C.length!==v.length){if(C.length===0)return Ge(t.name),v;throw new Error(`Program ${t.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let x;if(_){let P=0,D=[];_.forEach(F=>{let Z=typeof F.data=="number"?[F.data]:F.data;if(Z.length===0)return;let te=F.type===10?2:4,ne,fe;F.type===10?(fe=Z.length>4?16:Z.length>2?8:Z.length*te,ne=Z.length>4?16:te*Z.length):(fe=Z.length<=2?Z.length*te:16,ne=16),P=Math.ceil(P/fe)*fe,D.push(P);let Q=F.type===10?8:4;P+=Z.length>4?Math.ceil(Z.length/Q)*ne:Z.length*te});let B=16;P=Math.ceil(P/B)*B;let M=new ArrayBuffer(P);_.forEach((F,Z)=>{let te=D[Z],ne=typeof F.data=="number"?[F.data]:F.data;if(F.type===6)new Int32Array(M,te,ne.length).set(ne);else if(F.type===12)new Uint32Array(M,te,ne.length).set(ne);else if(F.type===10)new Uint16Array(M,te,ne.length).set(ne);else if(F.type===1)new Float32Array(M,te,ne.length).set(ne);else throw new Error(`Unsupported uniform type: ${At(F.type)}`)});let G=this.gpuDataManager.create(P,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(G.buffer,0,M,0,P),this.gpuDataManager.release(G.id),x={offset:0,size:P,buffer:G.buffer}}let S=this.programManager.normalizeDispatchGroupSize(y),E=S[1]===1&&S[2]===1,A=D$(t,i,E),I=this.programManager.getArtifact(A);if(I||(I=this.programManager.build(t,S),this.programManager.setArtifact(A,I),_e("info",()=>`[artifact] key: ${A}, programName: ${t.name}`)),_&&I.uniformVariablesInfo){if(_.length!==I.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${I.uniformVariablesInfo.length}, got ${_.length} in program "${I.programInfo.name}".`);for(let P=0;P<_.length;P++){let D=_[P],B=D.type,M=typeof D.data=="number"?1:D.data.length,[G,F]=I.uniformVariablesInfo[P];if(B!==G||M!==F)throw new Error(`Uniform variable ${P} mismatch: expect type ${G} with size ${F}, got type ${B} with size ${M} in program "${I.programInfo.name}".`)}}if(_e("info",()=>`[ProgramManager] run "${t.name}" (key=${A}) with ${S[0]}x${S[1]}x${S[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let P={kernelId:this.currentKernelId,programName:I.programInfo.name,inputTensorViews:i,outputTensorViews:v};this.pendingKernels.push(P),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(P)}return this.programManager.run(I,f,C,S,x),Ge(t.name),v}upload(t,i){this.gpuDataManager.upload(t,i)}memcpy(t,i){this.gpuDataManager.memcpy(t,i)}async download(t,i){await this.gpuDataManager.download(t,i)}alloc(t){return this.gpuDataManager.create(t).id}free(t){return this.gpuDataManager.release(t)}createKernel(t,i,r,s){let d=Bm.get(t);if(!d)throw new Error(`kernel not implemented: ${t}`);let c={kernelType:t,kernelName:s,kernelEntry:d[0],attributes:[d[1],r]};this.kernels.set(i,c)}releaseKernel(t){let i=this.kernelPersistentData.get(t);if(i){for(let r of i)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(t)}this.kernelCustomData.delete(t),this.kernels.delete(t)}computeKernel(t,i,r){let s=this.kernels.get(t);if(!s)throw new Error(`kernel not created: ${t}`);let d=s.kernelType,c=s.kernelName,f=s.kernelEntry,h=s.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${d}] ${c}" is not allowed to be called recursively`);this.currentKernelId=t,h[0]&&(h[1]=h[0](h[1]),h[0]=void 0),_e("info",()=>`[WebGPU] Start to run kernel "[${d}] ${c}"...`);let y=this.env.debug;this.temporaryData=[];try{return y&&this.device.pushErrorScope("validation"),f(i,h[1]),0}catch(_){return r.push(Promise.resolve(`[WebGPU] Kernel "[${d}] ${c}" failed. ${_}`)),1}finally{y&&r.push(this.device.popErrorScope().then(_=>_?`GPU validation error for kernel "[${d}] ${c}": ${_.message}`:null));for(let _ of this.temporaryData)this.gpuDataManager.release(_.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(t,i,r,s){let d=this.sessionExternalDataMapping.get(t);d||(d=new Map,this.sessionExternalDataMapping.set(t,d));let c=d.get(i),f=this.gpuDataManager.registerExternalBuffer(r,s,c);return d.set(i,[f,r]),f}unregisterBuffers(t){let i=this.sessionExternalDataMapping.get(t);i&&(i.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(t))}getBuffer(t){let i=this.gpuDataManager.get(t);if(!i)throw new Error(`no GPU data for buffer: ${t}`);return i.buffer}createDownloader(t,i,r){return async()=>{let s=await fi(this,t,i);return Yr(s.buffer,r)}}writeTimestamp(t){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,t)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){_e("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){_e("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){_e("info","replay"),this.sessionStatus="replaying";let t=this.capturedCommandList.get(this.currentSessionId),i=this.capturedPendingKernels.get(this.currentSessionId),r=t.length;this.pendingKernels=[];for(let s=0;s<r;s++){let d=this.getComputePassEncoder(),c=t[s];this.writeTimestamp(this.pendingDispatchNumber*2),d.setPipeline(c.computePipeline),d.setBindGroup(0,c.bindGroup),d.dispatchWorkgroups(...c.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(i[s]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(t){this.unregisterBuffers(t),this.capturedCommandList.has(t)&&this.capturedCommandList.delete(t),this.capturedPendingKernels.has(t)&&this.capturedPendingKernels.delete(t),this.gpuDataManager.onReleaseSession(t)}onRunStart(t){this.currentSessionId=t,this.setQueryType()}}});var B$,Um,M$,Nm,yn,bn,ji,Vm,Wm=X(()=>{"use strict";dt();B$=1,Um=()=>B$++,M$=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Nm=(e,t)=>{let i=M$.get(e);if(!i)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((r,s)=>r*s)*i/8):0},yn=class{constructor(t){this.sessionId=t.sessionId,this.mlContext=t.context,this.mlTensor=t.tensor,this.dataType=t.dataType,this.tensorShape=t.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return Nm(this.dataType,this.tensorShape)}destroy(){_e("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(t){this.mlContext.writeTensor(this.mlTensor,t)}async read(t){return t?this.mlContext.readTensor(this.mlTensor,t):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(t,i,r){return this.mlContext===t&&this.dataType===i&&this.tensorShape.length===r.length&&this.tensorShape.every((s,d)=>s===r[d])}},bn=class{constructor(t,i){this.tensorManager=t;this.wrapper=i}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(t,i,r,s){let d=this.tensorManager.getMLContext(t);if(this.wrapper){if(this.wrapper.canReuseTensor(d,i,r))return this.wrapper.tensor;if(s){if(this.wrapper.byteLength!==Nm(i,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let c=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(t,i,r,c,!0,!0),s&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(t){if(this.wrapper)if(t.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else _e("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(t){if(this.activeUpload)if(t){t instanceof ArrayBuffer?new Uint8Array(t).set(this.activeUpload):new Uint8Array(t.buffer,t.byteOffset,t.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return t?this.wrapper.read(t):this.wrapper.read()}},ji=class{constructor(t){this.backend=t;this.tensorTrackersById=new Map;this.freeTensors=[];this.externalTensors=new Set}getMLContext(t){let i=this.backend.getMLContext(t);if(!i)throw new Error("MLContext not found for session.");return i}reserveTensorId(){let t=Um();return this.tensorTrackersById.set(t,new bn(this)),t}releaseTensorId(t){let i=this.tensorTrackersById.get(t);i&&(this.tensorTrackersById.delete(t),i.tensorWrapper&&this.releaseTensor(i.tensorWrapper))}async ensureTensor(t,i,r,s,d){_e("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${i}, dataType: ${r}, shape: ${s}, copyOld: ${d}}`);let c=this.tensorTrackersById.get(i);if(!c)throw new Error("Tensor not found.");return c.ensureTensor(t,r,s,d)}upload(t,i){let r=this.tensorTrackersById.get(t);if(!r)throw new Error("Tensor not found.");r.upload(i)}async download(t,i){_e("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${t}, dstBuffer: ${i?.byteLength}}`);let r=this.tensorTrackersById.get(t);if(!r)throw new Error("Tensor not found.");return r.download(i)}releaseTensorsForSession(t){for(let i of this.freeTensors)i.sessionId===t&&i.destroy();this.freeTensors=this.freeTensors.filter(i=>i.sessionId!==t)}registerTensor(t,i,r,s){let d=this.getMLContext(t),c=Um(),f=new yn({sessionId:t,context:d,tensor:i,dataType:r,shape:s});return this.tensorTrackersById.set(c,new bn(this,f)),this.externalTensors.add(f),c}async getCachedTensor(t,i,r,s,d,c){let f=this.getMLContext(t);for(let[y,_]of this.freeTensors.entries())if(_.canReuseTensor(f,i,r)){_e("verbose",()=>`[WebNN] Reusing tensor {dataType: ${i}, shape: ${r}}`);let w=this.freeTensors.splice(y,1)[0];return w.sessionId=t,w}_e("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${i}, shape: ${r}}`);let h=await f.createTensor({dataType:i,shape:r,dimensions:r,usage:s,writable:d,readable:c});return new yn({sessionId:t,context:f,tensor:h,dataType:i,shape:r})}releaseTensor(t){this.externalTensors.has(t)&&this.externalTensors.delete(t),this.freeTensors.push(t)}},Vm=(...e)=>new ji(...e)});var Ui,R$,_n,Lm=X(()=>{"use strict";ce();It();li();Wm();dt();Ui=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),R$=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let i=Object.keys(e).sort(),r=Object.keys(t).sort();return i.length===r.length&&i.every((s,d)=>s===r[d]&&e[s]===t[s])},_n=class{constructor(t){this.tensorManager=Vm(this);this.mlContextBySessionId=new Map;this.sessionIdsByMLContext=new Map;this.mlContextCache=[];this.sessionGraphInputs=new Map;this.temporaryGraphInputs=[];this.temporarySessionTensorIds=new Map;Kr(t.logLevel,!!t.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(t){_e("verbose",()=>`[WebNN] onRunStart {sessionId: ${t}}`),this.activeSessionId=t}onRunEnd(t){_e("verbose",()=>`[WebNN] onRunEnd {sessionId: ${t}}`);let i=this.temporarySessionTensorIds.get(t);if(i){for(let r of i)_e("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(t),this.activeSessionId=void 0}}async createMLContext(t){if(t instanceof GPUDevice){let r=this.mlContextCache.findIndex(s=>s.gpuDevice===t);if(r!==-1)return this.mlContextCache[r].mlContext;{let s=await navigator.ml.createContext(t);return this.mlContextCache.push({gpuDevice:t,mlContext:s}),s}}else if(t===void 0){let r=this.mlContextCache.findIndex(s=>s.options===void 0&&s.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let s=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:s}),s}}let i=this.mlContextCache.findIndex(r=>R$(r.options,t));if(i!==-1)return this.mlContextCache[i].mlContext;{let r=await navigator.ml.createContext(t);return this.mlContextCache.push({options:t,mlContext:r}),r}}registerMLContext(t,i){this.mlContextBySessionId.set(t,i);let r=this.sessionIdsByMLContext.get(i);r||(r=new Set,this.sessionIdsByMLContext.set(i,r)),r.add(t),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(t,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(t){this.sessionGraphInputs.delete(t);let i=this.mlContextBySessionId.get(t);if(!i)return;this.tensorManager.releaseTensorsForSession(t),this.mlContextBySessionId.delete(t);let r=this.sessionIdsByMLContext.get(i);if(r.delete(t),r.size===0){this.sessionIdsByMLContext.delete(i);let s=this.mlContextCache.findIndex(d=>d.mlContext===i);s!==-1&&this.mlContextCache.splice(s,1)}}getMLContext(t){return this.mlContextBySessionId.get(t)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(t){_e("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${t}}`),this.tensorManager.releaseTensorId(t)}async ensureTensor(t,i,r,s,d){let c=Ui.get(r);if(!c)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(t??this.currentSessionId,i,c,s,d)}async createTemporaryTensor(t,i,r){_e("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${i}, shape: ${r}}`);let s=Ui.get(i);if(!s)throw new Error(`Unsupported ONNX data type: ${i}`);let d=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(t,d,s,r,!1);let c=this.temporarySessionTensorIds.get(t);return c?c.push(d):this.temporarySessionTensorIds.set(t,[d]),d}uploadTensor(t,i){if(!De().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");_e("verbose",()=>`[WebNN] uploadTensor {tensorId: ${t}, data: ${i.byteLength}}`),this.tensorManager.upload(t,i)}async downloadTensor(t,i){return this.tensorManager.download(t,i)}createMLTensorDownloader(t,i){return async()=>{let r=await this.tensorManager.download(t);return Yr(r,i)}}registerMLTensor(t,i,r,s){let d=Ui.get(r);if(!d)throw new Error(`Unsupported ONNX data type: ${r}`);let c=this.tensorManager.registerTensor(t,i,d,s);return _e("verbose",()=>`[WebNN] registerMLTensor {tensor: ${i}, dataType: ${d}, dimensions: ${s}} -> {tensorId: ${c}}`),c}registerMLConstant(t,i,r,s,d,c){if(!c)throw new Error("External mounted files are not available.");let f=t;t.startsWith("./")&&(f=t.substring(2));let h=c.get(f);if(!h)throw new Error(`File with name ${f} not found in preloaded files.`);if(i+r>h.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let y=h.slice(i,i+r).buffer,_;switch(d.dataType){case"float32":_=new Float32Array(y);break;case"float16":_=new Uint16Array(y);break;case"int32":_=new Int32Array(y);break;case"uint32":_=new Uint32Array(y);break;case"int64":_=new BigInt64Array(y);break;case"uint64":_=new BigUint64Array(y);break;case"int8":_=new Int8Array(y);break;case"int4":case"uint4":case"uint8":_=new Uint8Array(y);break;default:throw new Error(`Unsupported data type: ${d.dataType} in creating WebNN Constant from external data.`)}return _e("verbose",()=>`[WebNN] registerMLConstant {dataType: ${d.dataType}, shape: ${d.shape}}}`),s.constant(d,_)}registerGraphInput(t){this.temporaryGraphInputs.push(t)}isGraphInput(t,i){let r=this.sessionGraphInputs.get(t);return r?r.includes(i):!1}flush(){}}});var Gm={};nr(Gm,{init:()=>j$});var fr,Ni,j$,Hm=X(()=>{"use strict";ce();jm();dt();me();Lm();fr=class e{constructor(t,i,r,s){this.module=t;this.dataType=i;this.data=r;this.dims=s}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=V.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=V.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=V.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=V.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(V.size(t)!==V.size(this.dims))throw new Error("Invalid new shape");return new e(this.module,this.dataType,this.data,t)}},Ni=class{constructor(t,i,r){this.module=t;this.backend=i;this.customDataOffset=0;this.customDataSize=0;this.adapterInfo=i.adapterInfo,this.deviceInfo=i.deviceInfo;let s=t.PTR_SIZE,d=r/t.PTR_SIZE,c=s===4?"i32":"i64";this.opKernelContext=Number(t.getValue(s*d++,c));let f=Number(t.getValue(s*d++,c));this.outputCount=Number(t.getValue(s*d++,c)),this.customDataOffset=Number(t.getValue(s*d++,"*")),this.customDataSize=Number(t.getValue(s*d++,c));let h=[];for(let y=0;y<f;y++){let _=Number(t.getValue(s*d++,c)),w=Number(t.getValue(s*d++,"*")),v=Number(t.getValue(s*d++,c)),C=[];for(let x=0;x<v;x++)C.push(Number(t.getValue(s*d++,c)));h.push(new fr(t,_,w,C))}this.inputs=h}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(t,i){let r=i?.inputs?.map(f=>typeof f=="number"?this.inputs[f]:f)??this.inputs,s=i?.outputs??[],d=(f,h,y)=>new fr(this.module,h,this.output(f,y),y),c=(f,h)=>{let y=kt(f,h);if(!y)throw new Error(`Unsupported data type: ${f}`);let _=y>0?this.backend.gpuDataManager.create(y).id:0;return new fr(this.module,f,_,h)};return this.backend.run(t,r,s,d,c,this.outputCount)}output(t,i){let r=this.module.stackSave();try{let s=this.module.PTR_SIZE,d=s===4?"i32":"i64",c=this.module.stackAlloc((1+i.length)*s);this.module.setValue(c,i.length,d);for(let f=0;f<i.length;f++)this.module.setValue(c+s*(f+1),i[f],d);return this.module._JsepOutput(this.opKernelContext,t,c)}catch(s){throw new Error(`Failed to generate kernel's output[${t}] with dims [${i}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${s}`)}finally{this.module.stackRestore(r)}}},j$=async(e,t,i,r)=>{let s=t.jsepInit;if(!s)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let d=new gn;await d.initialize(i,r),s("webgpu",[d,c=>d.alloc(Number(c)),c=>d.free(c),(c,f,h,y=!1)=>{if(y)_e("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(c)}, dst=${Number(f)}, size=${Number(h)}`),d.memcpy(Number(c),Number(f));else{_e("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(c)}, gpuDataId=${Number(f)}, size=${Number(h)}`);let _=t.HEAPU8.subarray(Number(c>>>0),Number(c>>>0)+Number(h));d.upload(Number(f),_)}},async(c,f,h)=>{_e("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${c}, dataOffset=${f}, size=${h}`),await d.download(Number(c),()=>t.HEAPU8.subarray(Number(f)>>>0,Number(f+h)>>>0))},(c,f,h)=>d.createKernel(c,Number(f),h,t.UTF8ToString(t._JsepGetNodeName(Number(f)))),c=>d.releaseKernel(c),(c,f,h,y)=>{_e("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${h}, kernel=${c}, contextDataOffset=${f}`);let _=new Ni(t,d,Number(f));return d.computeKernel(Number(c),_,y)},()=>d.captureBegin(),()=>d.captureEnd(),()=>d.replay()])}else{let d=new _n(i);s("webnn",[d,()=>d.reserveTensorId(),c=>d.releaseTensorId(c),async(c,f,h,y,_)=>d.ensureTensor(c,f,h,y,_),(c,f)=>{d.uploadTensor(c,f)},async(c,f)=>d.downloadTensor(c,f)])}}});var U$,Mr,Rr,Vt,N$,or,jr,Ur,Fm,Nr,Vr,Wr,ri=X(()=>{"use strict";Id();kd();ce();It();Gr();ui();U$=(e,t)=>{De()._OrtInit(e,t)!==0&&$e("Can't initialize onnxruntime.")},Mr=async e=>{U$(e.wasm.numThreads,sr(e.logLevel))},Rr=async(e,t)=>{{let i=(Hm(),Ar(Gm)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let r=e.webgpu.adapter;if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let d=e.webgpu.forceFallbackAdapter;if(d!==void 0&&typeof d!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${d}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:d}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await i("webgpu",De(),e,r)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await i("webnn",De(),e)}}},Vt=new Map,N$=e=>{let t=De(),i=t.stackSave();try{let r=t.PTR_SIZE,s=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,s,s+r)!==0&&$e("Can't get session input/output count.");let c=r===4?"i32":"i64";return[Number(t.getValue(s,c)),Number(t.getValue(s+r,c))]}finally{t.stackRestore(i)}},or=e=>{let t=De(),i=t._malloc(e.byteLength);if(i===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,i),[i,e.byteLength]},jr=async(e,t)=>{let i,r,s=De();Array.isArray(e)?[i,r]=e:e.buffer===s.HEAPU8.buffer?[i,r]=[e.byteOffset,e.byteLength]:[i,r]=or(e);let d=0,c=0,f=0,h=[],y=[],_=[];try{if([c,h]=Ad(t),t?.externalData&&s.mountExternalData){let I=[];for(let P of t.externalData){let D=typeof P=="string"?P:P.path;I.push(ur(typeof P=="string"?P:P.data).then(B=>{s.mountExternalData(D,B)}))}await Promise.all(I)}for(let I of t?.executionProviders??[])if((typeof I=="string"?I:I.name)==="webnn"){if(s.shouldTransferToMLTensor=!1,typeof I!="string"){let D=I,B=D?.context,M=D?.gpuDevice,G=D?.deviceType,F=D?.powerPreference;B?s.currentContext=B:M?s.currentContext=await s.jsepCreateMLContext(M):s.currentContext=await s.jsepCreateMLContext({deviceType:G,powerPreference:F})}else s.currentContext=await s.jsepCreateMLContext();break}d=await s._OrtCreateSession(i,r,c),d===0&&$e("Can't create a session."),s.jsepOnCreateSession?.(),s.currentContext&&(s.jsepRegisterMLContext(d,s.currentContext),s.currentContext=void 0,s.shouldTransferToMLTensor=!0);let[w,v]=N$(d),C=!!t?.enableGraphCapture,x=[],S=[],E=[];for(let I=0;I<w;I++){let P=s._OrtGetInputName(d,I);P===0&&$e("Can't get an input name."),y.push(P),x.push(s.UTF8ToString(P))}for(let I=0;I<v;I++){let P=s._OrtGetOutputName(d,I);P===0&&$e("Can't get an output name."),_.push(P);let D=s.UTF8ToString(P);S.push(D);{if(C&&t?.preferredOutputLocation===void 0){E.push("gpu-buffer");continue}let B=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[D]??"cpu";if(B!=="cpu"&&B!=="cpu-pinned"&&B!=="gpu-buffer"&&B!=="ml-tensor")throw new Error(`Not supported preferred output location: ${B}.`);if(C&&B!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${B}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);E.push(B)}}let A=null;return E.some(I=>I==="gpu-buffer"||I==="ml-tensor")&&(f=s._OrtCreateBinding(d),f===0&&$e("Can't create IO binding."),A={handle:f,outputPreferredLocations:E,outputPreferredLocationsEncoded:E.map(I=>si(I))}),Vt.set(d,[d,y,_,A,C,!1]),[d,x,S]}catch(w){throw y.forEach(v=>s._OrtFree(v)),_.forEach(v=>s._OrtFree(v)),f!==0&&s._OrtReleaseBinding(f)!==0&&$e("Can't release IO binding."),d!==0&&s._OrtReleaseSession(d)!==0&&$e("Can't release session."),w}finally{s._free(i),c!==0&&s._OrtReleaseSessionOptions(c)!==0&&$e("Can't release session options."),h.forEach(w=>s._free(w)),s.unmountExternalData?.()}},Ur=e=>{let t=De(),i=Vt.get(e);if(!i)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,s,d,c,f]=i;c&&(f&&t._OrtClearBoundOutputs(c.handle)!==0&&$e("Can't clear bound outputs."),t._OrtReleaseBinding(c.handle)!==0&&$e("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),s.forEach(h=>t._OrtFree(h)),d.forEach(h=>t._OrtFree(h)),t._OrtReleaseSession(r)!==0&&$e("Can't release session."),Vt.delete(e)},Fm=async(e,t,i,r,s,d=!1)=>{if(!e){t.push(0);return}let c=De(),f=c.PTR_SIZE,h=e[0],y=e[1],_=e[3],w=_,v,C;if(h==="string"&&(_==="gpu-buffer"||_==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(d&&_!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(_==="gpu-buffer"){let E=e[2].gpuBuffer;C=kt(Ft(h),y);let A=c.jsepRegisterBuffer;if(!A)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');v=A(r,s,E,C)}else if(_==="ml-tensor"){let E=e[2].mlTensor;C=kt(Ft(h),y);let A=c.jsepRegisterMLTensor;if(!A)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');v=A(r,E,Ft(h),y)}else{let E=e[2];if(Array.isArray(E)){C=f*E.length,v=c._malloc(C),i.push(v);for(let A=0;A<E.length;A++){if(typeof E[A]!="string")throw new TypeError(`tensor data at index ${A} is not a string`);c.setValue(v+A*f,Ne(E[A],i),"*")}}else{let A=c.jsepIsGraphInput;if(h!=="string"&&A){let I=c._OrtGetInputName(r,s),P=c.UTF8ToString(I);if(A(r,P)){let D=Ft(h);C=kt(D,y),w="ml-tensor";let B=c.jsepCreateTemporaryTensor,M=c.jsepUploadTensor;if(!B||!M)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let G=await B(r,D,y);M(G,new Uint8Array(E.buffer,E.byteOffset,E.byteLength)),v=G}else C=E.byteLength,v=c._malloc(C),i.push(v),c.HEAPU8.set(new Uint8Array(E.buffer,E.byteOffset,C),v)}else C=E.byteLength,v=c._malloc(C),i.push(v),c.HEAPU8.set(new Uint8Array(E.buffer,E.byteOffset,C),v)}}let x=c.stackSave(),S=c.stackAlloc(4*y.length);try{y.forEach((A,I)=>c.setValue(S+I*f,A,f===4?"i32":"i64"));let E=c._OrtCreateTensor(Ft(h),v,C,S,y.length,si(w));E===0&&$e(`Can't create tensor for input/output. session=${r}, index=${s}.`),t.push(E)}finally{c.stackRestore(x)}},Nr=async(e,t,i,r,s,d)=>{let c=De(),f=c.PTR_SIZE,h=Vt.get(e);if(!h)throw new Error(`cannot run inference. invalid session id: ${e}`);let y=h[0],_=h[1],w=h[2],v=h[3],C=h[4],x=h[5],S=t.length,E=r.length,A=0,I=[],P=[],D=[],B=[],M=c.stackSave(),G=c.stackAlloc(S*f),F=c.stackAlloc(S*f),Z=c.stackAlloc(E*f),te=c.stackAlloc(E*f);try{[A,I]=Td(d);for(let Q=0;Q<S;Q++)await Fm(i[Q],P,B,e,t[Q],C);for(let Q=0;Q<E;Q++)await Fm(s[Q],D,B,e,S+r[Q],C);for(let Q=0;Q<S;Q++)c.setValue(G+Q*f,P[Q],"*"),c.setValue(F+Q*f,_[t[Q]],"*");for(let Q=0;Q<E;Q++)c.setValue(Z+Q*f,D[Q],"*"),c.setValue(te+Q*f,w[r[Q]],"*");if(v&&!x){let{handle:Q,outputPreferredLocations:ue,outputPreferredLocationsEncoded:ke}=v;if(_.length!==S)throw new Error(`input count from feeds (${S}) is expected to be always equal to model's input count (${_.length}).`);for(let ae=0;ae<S;ae++){let de=t[ae];await c._OrtBindInput(Q,_[de],P[ae])!==0&&$e(`Can't bind input[${ae}] for session=${e}.`)}for(let ae=0;ae<E;ae++){let de=r[ae];s[ae]?.[3]?c._OrtBindOutput(Q,w[de],D[ae],0)!==0&&$e(`Can't bind pre-allocated output[${ae}] for session=${e}.`):c._OrtBindOutput(Q,w[de],0,ke[de])!==0&&$e(`Can't bind output[${ae}] to ${ue[ae]} for session=${e}.`)}Vt.set(e,[y,_,w,v,C,!0])}c.jsepOnRunStart?.(y);let ne;v?ne=await c._OrtRunWithBinding(y,v.handle,E,Z,A):ne=await c._OrtRun(y,F,G,S,te,E,Z,A),ne!==0&&$e("failed to call OrtRun().");let fe=[];for(let Q=0;Q<E;Q++){let ue=Number(c.getValue(Z+Q*f,"*"));if(ue===D[Q]){fe.push(s[Q]);continue}let ke=c.stackSave(),ae=c.stackAlloc(4*f),de=!1,ge,ie=0;try{c._OrtGetTensorData(ue,ae,ae+f,ae+2*f,ae+3*f)!==0&&$e(`Can't access output tensor data on index ${Q}.`);let Me=f===4?"i32":"i64",Pe=Number(c.getValue(ae,Me));ie=c.getValue(ae+f,"*");let H=c.getValue(ae+f*2,"*"),q=Number(c.getValue(ae+f*3,Me)),se=[];for(let Ee=0;Ee<q;Ee++)se.push(Number(c.getValue(H+Ee*f,Me)));c._OrtFree(H)!==0&&$e("Can't free memory for tensor dims.");let ve=se.reduce((Ee,Te)=>Ee*Te,1);ge=At(Pe);let Je=v?.outputPreferredLocations[r[Q]];if(ge==="string"){if(Je==="gpu-buffer"||Je==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Ee=[];for(let Te=0;Te<ve;Te++){let at=c.getValue(ie+Te*f,"*"),Xt=c.getValue(ie+(Te+1)*f,"*"),zt=Te===ve-1?void 0:Xt-at;Ee.push(c.UTF8ToString(at,zt))}fe.push([ge,se,Ee,"cpu"])}else if(Je==="gpu-buffer"&&ve>0){let Ee=c.jsepGetBuffer;if(!Ee)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Te=Ee(ie),at=kt(Pe,ve);if(at===void 0||!Fr(ge))throw new Error(`Unsupported data type: ${ge}`);de=!0,fe.push([ge,se,{gpuBuffer:Te,download:c.jsepCreateDownloader(Te,at,ge),dispose:()=>{c._OrtReleaseTensor(ue)!==0&&$e("Can't release tensor.")}},"gpu-buffer"])}else if(Je==="ml-tensor"&&ve>0){let Ee=c.jsepEnsureTensor;if(!Ee)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(kt(Pe,ve)===void 0||!qr(ge))throw new Error(`Unsupported data type: ${ge}`);let at=await Ee(e,ie,Pe,se,!1);de=!0,fe.push([ge,se,{mlTensor:at,download:c.jsepCreateMLTensorDownloader(ie,ge),dispose:()=>{c.jsepReleaseTensorId(ie),c._OrtReleaseTensor(ue)}},"ml-tensor"])}else{let Ee=Hr(ge),Te=new Ee(ve);new Uint8Array(Te.buffer,Te.byteOffset,Te.byteLength).set(c.HEAPU8.subarray(ie,ie+Te.byteLength)),fe.push([ge,se,Te,"cpu"])}}finally{c.stackRestore(ke),ge==="string"&&ie&&c._free(ie),de||c._OrtReleaseTensor(ue),c.jsepOnRunEnd?.(y)}}return v&&!C&&(c._OrtClearBoundOutputs(v.handle)!==0&&$e("Can't clear bound outputs."),Vt.set(e,[y,_,w,v,C,!1])),fe}finally{c.stackRestore(M),P.forEach(ne=>c._OrtReleaseTensor(ne)),D.forEach(ne=>c._OrtReleaseTensor(ne)),B.forEach(ne=>c._free(ne)),A!==0&&c._OrtReleaseRunOptions(A),I.forEach(ne=>c._free(ne))}},Vr=e=>{let t=De(),i=Vt.get(e);if(!i)throw new Error("invalid session id");let r=i[0],s=t._OrtEndProfiling(r);s===0&&$e("Can't get an profile file name."),t._OrtFree(s)},Wr=e=>{let t=[];for(let i of e){let r=i[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}});var Wt,Xe,mr,vn,$n,wn,Vi,Wi,Zt,Qt,W$,qm,Km,Ym,Zm,Qm,Xm,Jm,Li=X(()=>{"use strict";Qe();ri();It();Dr();Wt=()=>!!Ae.wasm.proxy&&typeof document<"u",mr=!1,vn=!1,$n=!1,Wi=new Map,Zt=(e,t)=>{let i=Wi.get(e);i?i.push(t):Wi.set(e,[t])},Qt=()=>{if(mr||!vn||$n||!Xe)throw new Error("worker not ready")},W$=e=>{switch(e.data.type){case"init-wasm":mr=!1,e.data.err?($n=!0,Vi[1](e.data.err)):(vn=!0,Vi[0]()),wn&&(URL.revokeObjectURL(wn),wn=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Wi.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},qm=async()=>{if(!vn){if(mr)throw new Error("multiple calls to 'initWasm()' detected.");if($n)throw new Error("previous call to 'initWasm()' failed.");if(mr=!0,Wt())return new Promise((e,t)=>{Xe?.terminate(),xd().then(([i,r])=>{try{Xe=r,Xe.onerror=d=>t(d),Xe.onmessage=W$,Vi=[e,t];let s={type:"init-wasm",in:Ae};!s.in.wasm.wasmPaths&&(i||import.meta.url?.startsWith("file:"))&&(s.in.wasm.wasmPaths={wasm:new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href}),Xe.postMessage(s),wn=i}catch(s){t(s)}},t)});try{await Br(Ae.wasm),await Mr(Ae),vn=!0}catch(e){throw $n=!0,e}finally{mr=!1}}},Km=async e=>{if(Wt())return Qt(),new Promise((t,i)=>{Zt("init-ep",[t,i]);let r={type:"init-ep",in:{epName:e,env:Ae}};Xe.postMessage(r)});await Rr(Ae,e)},Ym=async e=>Wt()?(Qt(),new Promise((t,i)=>{Zt("copy-from",[t,i]);let r={type:"copy-from",in:{buffer:e}};Xe.postMessage(r,[e.buffer])})):or(e),Zm=async(e,t)=>{if(Wt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Qt(),new Promise((i,r)=>{Zt("create",[i,r]);let s={type:"create",in:{model:e,options:{...t}}},d=[];e instanceof Uint8Array&&d.push(e.buffer),Xe.postMessage(s,d)})}else return jr(e,t)},Qm=async e=>{if(Wt())return Qt(),new Promise((t,i)=>{Zt("release",[t,i]);let r={type:"release",in:e};Xe.postMessage(r)});Ur(e)},Xm=async(e,t,i,r,s,d)=>{if(Wt()){if(i.some(c=>c[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(s.some(c=>c))throw new Error("pre-allocated output tensor is not supported for proxy.");return Qt(),new Promise((c,f)=>{Zt("run",[c,f]);let h=i,y={type:"run",in:{sessionId:e,inputIndices:t,inputs:h,outputIndices:r,options:d}};Xe.postMessage(y,Wr(h))})}else return Nr(e,t,i,r,s,d)},Jm=async e=>{if(Wt())return Qt(),new Promise((t,i)=>{Zt("end-profiling",[t,i]);let r={type:"end-profiling",in:e};Xe.postMessage(r)});Vr(e)}});var eh,L$,xn,th=X(()=>{"use strict";Qe();Li();ce();Or();ui();eh=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},L$=e=>{switch(e[3]){case"cpu":return new tt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Fr(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:i,download:r,dispose:s}=e[2];return tt.fromGpuBuffer(i,{dataType:t,dims:e[1],download:r,dispose:s})}case"ml-tensor":{let t=e[0];if(!qr(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:i,download:r,dispose:s}=e[2];return tt.fromMLTensor(i,{dataType:t,dims:e[1],download:r,dispose:s})}default:throw new Error(`invalid data location: ${e[3]}`)}},xn=class{async fetchModelAndCopyToWasmMemory(t){return Ym(await ur(t))}async loadModel(t,i){Ke();let r;typeof t=="string"?!1?r=await ur(t):r=await this.fetchModelAndCopyToWasmMemory(t):r=t,[this.sessionId,this.inputNames,this.outputNames]=await Zm(r,i),Ge()}async dispose(){return Qm(this.sessionId)}async run(t,i,r){Ke();let s=[],d=[];Object.entries(t).forEach(v=>{let C=v[0],x=v[1],S=this.inputNames.indexOf(C);if(S===-1)throw new Error(`invalid input '${C}'`);s.push(x),d.push(S)});let c=[],f=[];Object.entries(i).forEach(v=>{let C=v[0],x=v[1],S=this.outputNames.indexOf(C);if(S===-1)throw new Error(`invalid output '${C}'`);c.push(x),f.push(S)});let h=s.map((v,C)=>eh(v,()=>`input "${this.inputNames[d[C]]}"`)),y=c.map((v,C)=>v?eh(v,()=>`output "${this.outputNames[f[C]]}"`):null),_=await Xm(this.sessionId,d,h,f,y,r),w={};for(let v=0;v<_.length;v++)w[this.outputNames[f[v]]]=c[v]??L$(_[v]);return Ge(),w}startProfiling(){}endProfiling(){Jm(this.sessionId)}}});var nh={};nr(nh,{OnnxruntimeWebAssemblyBackend:()=>Cn,initializeFlags:()=>rh,wasmBackend:()=>G$});var rh,Cn,G$,ih=X(()=>{"use strict";Qe();Li();th();rh=()=>{if((typeof Ae.wasm.initTimeout!="number"||Ae.wasm.initTimeout<0)&&(Ae.wasm.initTimeout=0),Ae.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof Ae.wasm.proxy!="boolean"&&(Ae.wasm.proxy=!1),typeof Ae.wasm.trace!="boolean"&&(Ae.wasm.trace=!1),typeof Ae.wasm.numThreads!="number"||!Number.isInteger(Ae.wasm.numThreads)||Ae.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ae.wasm.numThreads=1;else{let e=typeof navigator>"u"?Yn("node:os").cpus().length:navigator.hardwareConcurrency;Ae.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},Cn=class{async init(t){rh(),await qm(),await Km(t)}async createInferenceSessionHandler(t,i){let r=new xn;return await r.loadModel(t,i),Promise.resolve(r)}},G$=new Cn});Qe();Qe();Qe();var dd="1.21.0";var qk=ti;{let e=(ih(),Ar(nh)).wasmBackend;Bt("webgpu",e,5),Bt("webnn",e,5),Bt("cpu",e,10),Bt("wasm",e,10)}Object.defineProperty(Ae.versions,"web",{value:dd,enumerable:!0});export{gw as InferenceSession,Pr as TRACE,Ke as TRACE_FUNC_BEGIN,Ge as TRACE_FUNC_END,tt as Tensor,qk as default,Ae as env,Bt as registerBackend};
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
