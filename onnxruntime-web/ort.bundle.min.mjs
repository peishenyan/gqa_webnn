/*!
 * ONNX Runtime Web v1.24.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var br=Object.defineProperty;var n$=Object.getOwnPropertyDescriptor;var r$=Object.getOwnPropertyNames;var o$=Object.prototype.hasOwnProperty;var vr=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,i)=>(typeof require<"u"?require:t)[i]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var ne=(e,t)=>()=>(e&&(t=e(e=0)),t);var li=(e,t)=>{for(var i in t)br(e,i,{get:t[i],enumerable:!0})},a$=(e,t,i,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of r$(t))!o$.call(e,a)&&a!==i&&br(e,a,{get:()=>t[a],enumerable:!(r=n$(t,a))||r.enumerable});return e};var ji=e=>a$(br({},"__esModule",{value:!0}),e);var tn,Yt,Zt,s$,$c,wr=ne(()=>{"use strict";tn=new Map,Yt=[],Zt=(e,t,i)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=tn.get(e);if(r===void 0)tn.set(e,{backend:t,priority:i});else{if(r.priority>i)return;if(r.priority===i&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${i}`)}if(i>=0){let a=Yt.indexOf(e);a!==-1&&Yt.splice(a,1);for(let u=0;u<Yt.length;u++)if(tn.get(Yt[u]).priority<=i){Yt.splice(u,0,e);return}Yt.push(e)}return}throw new TypeError("not a valid backend")},s$=async e=>{let t=tn.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let i=!!t.initPromise;try{return i||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return i||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},$c=async e=>{let t=e.executionProviders||[],i=t.map(f=>typeof f=="string"?f:f.name),r=i.length===0?Yt:i,a,u=[],l=new Set;for(let f of r){let h=await s$(f);typeof h=="string"?u.push({name:f,err:h}):(a||(a=h),a===h&&l.add(f))}if(!a)throw new Error(`no available backend found. ERR: ${u.map(f=>`[${f.name}] ${f.err}`).join(", ")}`);for(let{name:f,err:h}of u)i.includes(f)&&console.warn(`removing requested execution provider "${f}" from session options because it is not available: ${h}`);let c=t.filter(f=>l.has(typeof f=="string"?f:f.name));return[a,new Proxy(e,{get:(f,h)=>h==="executionProviders"?c:Reflect.get(f,h)})]}});var Cc=ne(()=>{"use strict";wr()});var xc,Sc=ne(()=>{"use strict";xc="1.24.0"});var Tc,Ye,$r=ne(()=>{"use strict";Sc();Tc="warning",Ye={wasm:{},webgl:{},webgpu:{},versions:{common:xc},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Tc=e}},get logLevel(){return Tc}};Object.defineProperty(Ye,"logLevel",{enumerable:!0})});var Re,Ic=ne(()=>{"use strict";$r();Re=Ye});var Ac,kc,jc=ne(()=>{"use strict";Ac=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);i.width=e.dims[3],i.height=e.dims[2];let r=i.getContext("2d");if(r!=null){let a,u;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],u=e.dims[3]):(a=e.dims[3],u=e.dims[2]);let l=t?.format!==void 0?t.format:"RGB",c=t?.norm,f,h;c===void 0||c.mean===void 0?f=[255,255,255,255]:typeof c.mean=="number"?f=[c.mean,c.mean,c.mean,c.mean]:(f=[c.mean[0],c.mean[1],c.mean[2],0],c.mean[3]!==void 0&&(f[3]=c.mean[3])),c===void 0||c.bias===void 0?h=[0,0,0,0]:typeof c.bias=="number"?h=[c.bias,c.bias,c.bias,c.bias]:(h=[c.bias[0],c.bias[1],c.bias[2],0],c.bias[3]!==void 0&&(h[3]=c.bias[3]));let g=u*a,_=0,w=g,x=g*2,$=-1;l==="RGBA"?(_=0,w=g,x=g*2,$=g*3):l==="RGB"?(_=0,w=g,x=g*2):l==="RBG"&&(_=0,x=g,w=g*2);for(let S=0;S<u;S++)for(let O=0;O<a;O++){let j=(e.data[_++]-h[0])*f[0],I=(e.data[w++]-h[1])*f[1],D=(e.data[x++]-h[2])*f[2],P=$===-1?255:(e.data[$++]-h[3])*f[3];r.fillStyle="rgba("+j+","+I+","+D+","+P+")",r.fillRect(O,S,1,1)}if("toDataURL"in i)return i.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},kc=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(i!=null){let a,u,l;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],u=e.dims[1],l=e.dims[3]):(a=e.dims[3],u=e.dims[2],l=e.dims[1]);let c=t!==void 0&&t.format!==void 0?t.format:"RGB",f=t?.norm,h,g;f===void 0||f.mean===void 0?h=[255,255,255,255]:typeof f.mean=="number"?h=[f.mean,f.mean,f.mean,f.mean]:(h=[f.mean[0],f.mean[1],f.mean[2],255],f.mean[3]!==void 0&&(h[3]=f.mean[3])),f===void 0||f.bias===void 0?g=[0,0,0,0]:typeof f.bias=="number"?g=[f.bias,f.bias,f.bias,f.bias]:(g=[f.bias[0],f.bias[1],f.bias[2],0],f.bias[3]!==void 0&&(g[3]=f.bias[3]));let _=u*a;if(t!==void 0&&(t.format!==void 0&&l===4&&t.format!=="RGBA"||l===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let w=4,x=0,$=1,S=2,O=3,j=0,I=_,D=_*2,P=-1;c==="RGBA"?(j=0,I=_,D=_*2,P=_*3):c==="RGB"?(j=0,I=_,D=_*2):c==="RBG"&&(j=0,D=_,I=_*2),r=i.createImageData(a,u);for(let G=0;G<u*a;x+=w,$+=w,S+=w,O+=w,G++)r.data[x]=(e.data[j++]-g[0])*h[0],r.data[$]=(e.data[I++]-g[1])*h[1],r.data[S]=(e.data[D++]-g[2])*h[2],r.data[O]=P===-1?255:(e.data[P++]-g[3])*h[3]}else throw new Error("Can not access image data");return r}});var Cr,Ec,Pc,Oc,Dc,Bc,Mc=ne(()=>{"use strict";nn();Cr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:i,width:r}=t,a=t.norm??{mean:255,bias:0},u,l;typeof a.mean=="number"?u=[a.mean,a.mean,a.mean,a.mean]:u=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?l=[a.bias,a.bias,a.bias,a.bias]:l=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let c=t.format!==void 0?t.format:"RGBA",f=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",h=i*r,g=f==="RGBA"?new Float32Array(h*4):new Float32Array(h*3),_=4,w=0,x=1,$=2,S=3,O=0,j=h,I=h*2,D=-1;c==="RGB"&&(_=3,w=0,x=1,$=2,S=-1),f==="RGBA"?D=h*3:f==="RBG"?(O=0,I=h,j=h*2):f==="BGR"&&(I=0,j=h,O=h*2);for(let G=0;G<h;G++,w+=_,$+=_,x+=_,S+=_)g[O++]=(e[w]+l[0])/u[0],g[j++]=(e[x]+l[1])/u[1],g[I++]=(e[$]+l[2])/u[2],D!==-1&&S!==-1&&(g[D++]=(e[S]+l[3])/u[3]);return f==="RGBA"?new Xe("float32",g,[1,4,i,r]):new Xe("float32",g,[1,3,i,r])},Ec=async(e,t)=>{let i=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,u=typeof e=="string",l,c=t??{},f=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},h=g=>typeof HTMLCanvasElement<"u"&&g instanceof HTMLCanvasElement||g instanceof OffscreenCanvas?g.getContext("2d"):null;if(i){let g=f();g.width=e.width,g.height=e.height;let _=h(g);if(_!=null){let w=e.height,x=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(w=t.resizedHeight,x=t.resizedWidth),t!==void 0){if(c=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");c.tensorFormat="RGBA",c.height=w,c.width=x}else c.tensorFormat="RGBA",c.height=w,c.width=x;_.drawImage(e,0,0),l=_.getImageData(0,0,x,w).data}else throw new Error("Can not access image data")}else if(r){let g,_;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(g=t.resizedHeight,_=t.resizedWidth):(g=e.height,_=e.width),t!==void 0&&(c=t),c.format="RGBA",c.height=g,c.width=_,t!==void 0){let w=f();w.width=_,w.height=g;let x=h(w);if(x!=null)x.putImageData(e,0,0),l=x.getImageData(0,0,_,g).data;else throw new Error("Can not access image data")}else l=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let g=f();g.width=e.width,g.height=e.height;let _=h(g);if(_!=null){let w=e.height,x=e.width;return _.drawImage(e,0,0,x,w),l=_.getImageData(0,0,x,w).data,c.height=w,c.width=x,Cr(l,c)}else throw new Error("Can not access image data")}else{if(u)return new Promise((g,_)=>{let w=f(),x=h(w);if(!e||!x)return _();let $=new Image;$.crossOrigin="Anonymous",$.src=e,$.onload=()=>{w.width=$.width,w.height=$.height,x.drawImage($,0,0,w.width,w.height);let S=x.getImageData(0,0,w.width,w.height);c.height=w.height,c.width=w.width,g(Cr(S.data,c))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(l!==void 0)return Cr(l,c);throw new Error("Input data provided is not supported - aborted tensor creation")},Pc=(e,t)=>{let{width:i,height:r,download:a,dispose:u}=t,l=[1,r,i,4];return new Xe({location:"texture",type:"float32",texture:e,dims:l,download:a,dispose:u})},Oc=(e,t)=>{let{dataType:i,dims:r,download:a,dispose:u}=t;return new Xe({location:"gpu-buffer",type:i??"float32",gpuBuffer:e,dims:r,download:a,dispose:u})},Dc=(e,t)=>{let{dataType:i,dims:r,download:a,dispose:u}=t;return new Xe({location:"ml-tensor",type:i??"float32",mlTensor:e,dims:r,download:a,dispose:u})},Bc=(e,t,i)=>new Xe({location:"cpu-pinned",type:e,data:t,dims:i??[t.length]})});var Qt,Ei,Rc,zc,Uc=ne(()=>{"use strict";Qt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Ei=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Rc=!1,zc=()=>{if(!Rc){Rc=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,i=globalThis.Float16Array,r=typeof i<"u"&&i.from;e&&(Qt.set("int64",BigInt64Array),Ei.set(BigInt64Array,"int64")),t&&(Qt.set("uint64",BigUint64Array),Ei.set(BigUint64Array,"uint64")),r?(Qt.set("float16",i),Ei.set(i,"float16")):Qt.set("float16",Uint16Array)}}});var Nc,Lc,Vc=ne(()=>{"use strict";nn();Nc=e=>{let t=1;for(let i=0;i<e.length;i++){let r=e[i];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${i}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${i}] must be a non-negative integer, got: ${r}`);t*=r}return t},Lc=(e,t)=>{switch(e.location){case"cpu":return new Xe(e.type,e.data,t);case"cpu-pinned":return new Xe({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Xe({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Xe({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Xe({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}});var Xe,nn=ne(()=>{"use strict";jc();Mc();Uc();Vc();Xe=class{constructor(t,i,r){zc();let a,u;if(typeof t=="object"&&"location"in t)switch(this.dataLocation=t.location,a=t.type,u=t.dims,t.location){case"cpu-pinned":{let c=Qt.get(a);if(!c)throw new TypeError(`unsupported type "${a}" to create tensor from pinned buffer`);if(!(t.data instanceof c))throw new TypeError(`buffer should be of type ${c.name}`);this.cpuData=t.data;break}case"texture":{if(a!=="float32")throw new TypeError(`unsupported type "${a}" to create tensor from texture`);this.gpuTextureData=t.texture,this.downloader=t.download,this.disposer=t.dispose;break}case"gpu-buffer":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from gpu buffer`);this.gpuBufferData=t.gpuBuffer,this.downloader=t.download,this.disposer=t.dispose;break}case"ml-tensor":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint64"&&a!=="int8"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from MLTensor`);this.mlTensorData=t.mlTensor,this.downloader=t.download,this.disposer=t.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let c,f;if(typeof t=="string")if(a=t,f=r,t==="string"){if(!Array.isArray(i))throw new TypeError("A string tensor's data must be a string array.");c=i}else{let h=Qt.get(t);if(h===void 0)throw new TypeError(`Unsupported tensor type: ${t}.`);if(Array.isArray(i)){if(t==="float16"&&h===Uint16Array||t==="uint4"||t==="int4")throw new TypeError(`Creating a ${t} tensor from number array is not supported. Please use ${h.name} as data.`);t==="uint64"||t==="int64"?c=h.from(i,BigInt):c=h.from(i)}else if(i instanceof h)c=i;else if(i instanceof Uint8ClampedArray)if(t==="uint8")c=Uint8Array.from(i);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(t==="float16"&&i instanceof Uint16Array&&h!==Uint16Array)c=new globalThis.Float16Array(i.buffer,i.byteOffset,i.length);else throw new TypeError(`A ${a} tensor's data must be type of ${h}`)}else if(f=i,Array.isArray(t)){if(t.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let h=typeof t[0];if(h==="string")a="string",c=t;else if(h==="boolean")a="bool",c=Uint8Array.from(t);else throw new TypeError(`Invalid element type of data array: ${h}.`)}else if(t instanceof Uint8ClampedArray)a="uint8",c=Uint8Array.from(t);else{let h=Ei.get(t.constructor);if(h===void 0)throw new TypeError(`Unsupported type for tensor data: ${t.constructor}.`);a=h,c=t}if(f===void 0)f=[c.length];else if(!Array.isArray(f))throw new TypeError("A tensor's dims must be a number array");u=f,this.cpuData=c,this.dataLocation="cpu"}let l=Nc(u);if(this.cpuData&&l!==this.cpuData.length&&!((a==="uint4"||a==="int4")&&Math.ceil(l/2)===this.cpuData.length))throw new Error(`Tensor's size(${l}) does not match data length(${this.cpuData.length}).`);this.type=a,this.dims=u,this.size=l}static async fromImage(t,i){return Ec(t,i)}static fromTexture(t,i){return Pc(t,i)}static fromGpuBuffer(t,i){return Oc(t,i)}static fromMLTensor(t,i){return Dc(t,i)}static fromPinnedBuffer(t,i,r){return Bc(t,i,r)}toDataURL(t){return Ac(this,t)}toImageData(t){return kc(this,t)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(t){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let i=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=i,t&&this.disposer&&(this.disposer(),this.disposer=void 0),i}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(t){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Lc(this,t)}}});var mt,xr=ne(()=>{"use strict";nn();mt=Xe});var rn,Wc,at,nt,Ut,Nt,Sr=ne(()=>{"use strict";$r();rn=(e,t)=>{(typeof Ye.trace>"u"?!Ye.wasm.trace:!Ye.trace)||console.timeStamp(`${e}::ORT::${t}`)},Wc=(e,t)=>{let i=new Error().stack?.split(/\r\n|\r|\n/g)||[],r=!1;for(let a=0;a<i.length;a++){if(r&&!i[a].includes("TRACE_FUNC")){let u=`FUNC_${e}::${i[a].trim().split(" ")[1]}`;t&&(u+=`::${t}`),rn("CPU",u);return}i[a].includes("TRACE_FUNC")&&(r=!0)}},at=e=>{(typeof Ye.trace>"u"?!Ye.wasm.trace:!Ye.trace)||Wc("BEGIN",e)},nt=e=>{(typeof Ye.trace>"u"?!Ye.wasm.trace:!Ye.trace)||Wc("END",e)},Ut=e=>{(typeof Ye.trace>"u"?!Ye.wasm.trace:!Ye.trace)||console.time(`ORT::${e}`)},Nt=e=>{(typeof Ye.trace>"u"?!Ye.wasm.trace:!Ye.trace)||console.timeEnd(`ORT::${e}`)}});var on,Gc=ne(()=>{"use strict";wr();xr();Sr();on=class e{constructor(t){this.handler=t}async run(t,i,r){at(),Ut("InferenceSession.run");let a={},u={};if(typeof t!="object"||t===null||t instanceof mt||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let l=!0;if(typeof i=="object"){if(i===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(i instanceof mt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(i)){if(i.length===0)throw new TypeError("'fetches' cannot be an empty array.");l=!1;for(let h of i){if(typeof h!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(h)===-1)throw new RangeError(`'fetches' contains invalid output name: ${h}.`);a[h]=null}if(typeof r=="object"&&r!==null)u=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let h=!1,g=Object.getOwnPropertyNames(i);for(let _ of this.outputNames)if(g.indexOf(_)!==-1){let w=i[_];(w===null||w instanceof mt)&&(h=!0,l=!1,a[_]=w)}if(h){if(typeof r=="object"&&r!==null)u=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else u=i}}else if(typeof i<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let h of this.inputNames)if(typeof t[h]>"u")throw new Error(`input '${h}' is missing in 'feeds'.`);if(l)for(let h of this.outputNames)a[h]=null;let c=await this.handler.run(t,a,u),f={};for(let h in c)if(Object.hasOwnProperty.call(c,h)){let g=c[h];g instanceof mt?f[h]=g:f[h]=new mt(g.type,g.data,g.dims)}return Nt("InferenceSession.run"),nt(),f}async release(){return this.handler.dispose()}static async create(t,i,r,a){at(),Ut("InferenceSession.create");let u,l={};if(typeof t=="string"){if(u=t,typeof i=="object"&&i!==null)l=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(u=t,typeof i=="object"&&i!==null)l=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let g=t,_=0,w=t.byteLength;if(typeof i=="object"&&i!==null)l=i;else if(typeof i=="number"){if(_=i,!Number.isSafeInteger(_))throw new RangeError("'byteOffset' must be an integer.");if(_<0||_>=g.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${g.byteLength}).`);if(w=t.byteLength-_,typeof r=="number"){if(w=r,!Number.isSafeInteger(w))throw new RangeError("'byteLength' must be an integer.");if(w<=0||_+w>g.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${g.byteLength-_}].`);if(typeof a=="object"&&a!==null)l=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof i<"u")throw new TypeError("'options' must be an object.");u=new Uint8Array(g,_,w)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[c,f]=await $c(l),h=await c.createInferenceSessionHandler(u,f);return Nt("InferenceSession.create"),nt(),new e(h)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}});var u$,Fc=ne(()=>{"use strict";Gc();u$=on});var Hc=ne(()=>{"use strict"});var qc=ne(()=>{"use strict"});var Kc=ne(()=>{"use strict"});var Yc=ne(()=>{"use strict"});var Tr={};li(Tr,{InferenceSession:()=>u$,TRACE:()=>rn,TRACE_EVENT_BEGIN:()=>Ut,TRACE_EVENT_END:()=>Nt,TRACE_FUNC_BEGIN:()=>at,TRACE_FUNC_END:()=>nt,Tensor:()=>mt,env:()=>Re,registerBackend:()=>Zt});var st=ne(()=>{"use strict";Cc();Ic();Fc();xr();Hc();qc();Sr();Kc();Yc()});var an=ne(()=>{"use strict"});var Xc={};li(Xc,{default:()=>l$});var Qc,Jc,l$,ep=ne(()=>{"use strict";Ir();Lt();sn();Qc="ort-wasm-proxy-worker",Jc=globalThis.self?.name===Qc;Jc&&(self.onmessage=e=>{let{type:t,in:i}=e.data;try{switch(t){case"init-wasm":un(i.wasm).then(()=>{ln(i).then(()=>{postMessage({type:t})},r=>{postMessage({type:t,err:r})})},r=>{postMessage({type:t,err:r})});break;case"init-ep":{let{epName:r,env:a}=i;dn(a,r).then(()=>{postMessage({type:t})},u=>{postMessage({type:t,err:u})});break}case"copy-from":{let{buffer:r}=i,a=Pi(r);postMessage({type:t,out:a});break}case"create":{let{model:r,options:a}=i;cn(r,a).then(u=>{postMessage({type:t,out:u})},u=>{postMessage({type:t,err:u})});break}case"release":pn(i),postMessage({type:t});break;case"run":{let{sessionId:r,inputIndices:a,inputs:u,outputIndices:l,options:c}=i;fn(r,a,u,l,new Array(l.length).fill(null),c).then(f=>{f.some(h=>h[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:f},hn([...u,...f]))},f=>{postMessage({type:t,err:f})});break}case"end-profiling":mn(i),postMessage({type:t});break;default:}}catch(r){postMessage({type:t,err:r})}});l$=Jc?null:e=>new Worker(e??ut,{type:"module",name:Qc})});var ip={};li(ip,{default:()=>d$});async function tp(e={}){var t,i=e,r=typeof window=="object",a=typeof WorkerGlobalScope<"u",u=!r&&!a,l=a&&self.name?.startsWith("em-pthread");l&&(N(!globalThis.moduleLoaded,"module should only be loaded once on each pthread worker"),globalThis.moduleLoaded=!0),i.mountExternalData=(n,o)=>{n.startsWith("./")&&(n=n.substring(2)),(i.MountedFiles||(i.MountedFiles=new Map)).set(n,o)},i.unmountExternalData=()=>{delete i.MountedFiles};var c=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let f=n=>async(...o)=>{try{if(i.jsepSessionState)throw new Error("Session already started");let s=i.jsepSessionState={sessionHandle:o[0],errors:[]},d=await n(...o);if(i.jsepSessionState!==s)throw new Error("Session mismatch");i.jsepBackend?.flush();let p=s.errors;if(p.length>0){let m=await Promise.all(p);if(m=m.filter(y=>y),m.length>0)throw new Error(m.join(`
`))}return d}finally{i.jsepSessionState=null}};i.jsepInit=(n,o)=>{if(n==="webgpu"){[i.jsepBackend,i.jsepAlloc,i.jsepFree,i.jsepCopy,i.jsepCopyAsync,i.jsepCreateKernel,i.jsepReleaseKernel,i.jsepRunKernel,i.jsepCaptureBegin,i.jsepCaptureEnd,i.jsepReplay]=o;let s=i.jsepBackend;i.jsepRegisterBuffer=(d,p,m,y)=>s.registerBuffer(d,p,m,y),i.jsepGetBuffer=d=>s.getBuffer(d),i.jsepCreateDownloader=(d,p,m)=>s.createDownloader(d,p,m),i.jsepOnCreateSession=d=>{s.onCreateSession(d)},i.jsepOnReleaseSession=d=>{s.onReleaseSession(d)},i.jsepOnRunStart=d=>s.onRunStart(d),i.jsepUploadExternalBuffer=(d,p)=>{s.upload(d,p)}}else if(n==="webnn"){let s=o[0];[i.webnnReserveTensorId,i.webnnReleaseTensorId,i.webnnEnsureTensor,i.webnnUploadTensor,i.webnnDownloadTensor,i.webnnRegisterMLContext,i.webnnEnableTraceEvent]=o.slice(1),i.webnnReleaseTensorId=i.webnnReleaseTensorId,i.webnnUploadTensor=i.webnnUploadTensor,i.webnnRegisterMLContext=i.webnnRegisterMLContext,i.webnnOnRunStart=d=>s.onRunStart(d),i.webnnOnRunEnd=s.onRunEnd.bind(s),i.webnnOnReleaseSession=d=>{s.onReleaseSession(d)},i.webnnCreateMLTensorDownloader=(d,p)=>s.createMLTensorDownloader(d,p),i.webnnRegisterMLTensor=(d,p,m,y)=>s.registerMLTensor(d,p,m,y),i.webnnCreateMLContext=d=>s.createMLContext(d),i.webnnRegisterMLConstant=(d,p,m,y,b,v)=>s.registerMLConstant(d,p,m,y,b,i.MountedFiles,v),i.webnnRegisterGraphInput=s.registerGraphInput.bind(s),i.webnnIsGraphInput=s.isGraphInput.bind(s),i.webnnRegisterGraphOutput=s.registerGraphOutput.bind(s),i.webnnIsGraphOutput=s.isGraphOutput.bind(s),i.webnnCreateTemporaryTensor=s.createTemporaryTensor.bind(s),i.webnnIsGraphInputOutputTypeSupported=s.isGraphInputOutputTypeSupported.bind(s)}};let h=()=>{let n=o=>(...s)=>{let d=de.currData,p=o(...s);return de.currData!=d?de.whenDone():p};(()=>{for(let o of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])i[o]=n(i[o])})(),f!==void 0&&(i._OrtRun=f(i._OrtRun),i._OrtRunWithBinding=f(i._OrtRunWithBinding)),h=void 0};i.asyncInit=()=>{h?.()};var g,_,w=(n,o)=>{throw o},x=import.meta.url,$="";if(u){if(typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else{if(!r&&!a)throw new Error("environment detection error");try{$=new URL(".",x).href}catch{}if(typeof window!="object"&&typeof WorkerGlobalScope>"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");a&&(_=n=>{var o=new XMLHttpRequest;return o.open("GET",n,!1),o.responseType="arraybuffer",o.send(null),new Uint8Array(o.response)}),g=async n=>{if(ce(n))return new Promise((s,d)=>{var p=new XMLHttpRequest;p.open("GET",n,!0),p.responseType="arraybuffer",p.onload=()=>{p.status==200||p.status==0&&p.response?s(p.response):d(p.status)},p.onerror=d,p.send(null)});var o=await fetch(n,{credentials:"same-origin"});if(o.ok)return o.arrayBuffer();throw new Error(o.status+" : "+o.url)}}var S,O,j=console.log.bind(console),I=console.error.bind(console),D=j,P=I;N(r||a||!1,"Pthreads do not work in this environment yet (need Web Workers, or an alternative to them)"),N(!u,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable."),typeof WebAssembly!="object"&&P("no native wasm support detected");var G,V=!1;function N(n,o){n||ke("Assertion failed"+(o?": "+o:""))}var Y,J,oe,he,ce=n=>n.startsWith("file://");function me(){var n=Ii();N(!(3&n)),n==0&&(n+=4),ae((W(),Ie),n>>>2>>>0,34821223),ae((W(),Ie),n+4>>>2>>>0,2310721022)}function ve(){if(!V){var n=Ii();n==0&&(n+=4);var o=Q((W(),Ie),n>>>2>>>0),s=Q((W(),Ie),n+4>>>2>>>0);o==34821223&&s==2310721022||ke(`Stack overflow! Stack cookie has been overwritten at ${bt(n)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${bt(s)} ${bt(o)}`)}}class A extends Error{}class pe extends A{constructor(o){super(o),this.excPtr=o;let s=va(o);this.name=s[0],this.message=s[1]}}function ye(...n){console.warn(...n)}function C(n){return()=>N(!1,`call to '${n}' via reference taken before Wasm module initialization`)}function ie(n){Object.getOwnPropertyDescriptor(i,n)&&ke(`\`Module.${n}\` was supplied but \`${n}\` not included in INCOMING_MODULE_JS_API`)}function Se(n){return n==="FS_createPath"||n==="FS_createDataFile"||n==="FS_createPreloadedFile"||n==="FS_unlink"||n==="addRunDependency"||n==="FS_createLazyFile"||n==="FS_createDevice"||n==="removeRunDependency"}function Ue(n,o){typeof globalThis>"u"||Object.getOwnPropertyDescriptor(globalThis,n)||Object.defineProperty(globalThis,n,{configurable:!0,get(){o()}})}function Fe(n,o){Ue(n,()=>{vt(`\`${n}\` is not longer defined by emscripten. ${o}`)})}function be(n){l||Object.getOwnPropertyDescriptor(i,n)||Object.defineProperty(i,n,{configurable:!0,get(){var o=`'${n}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;Se(n)&&(o+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),ke(o)}})}function ee(n,o,s){o>>>=0;let d=n.BYTES_PER_ELEMENT,p=o*d;if(o<=0&&ke(`segmentation fault ${s} ${d} bytes at address ${p}`),ri){var m=ka(0);p+d>m&&ke(`segmentation fault, exceeded the top of the available dynamic heap when ${s} ${d} bytes at address ${p}. DYNAMICTOP=${m}`),m<Ai()&&ke(`brk >= _emscripten_stack_get_base() (brk=${m}, _emscripten_stack_get_base()=${Ai()})`),m>De.buffer.byteLength&&ke(`brk <= wasmMemory.buffer.byteLength (brk=${m}, wasmMemory.buffer.byteLength=${De.buffer.byteLength})`)}return o}function Q(n,o){return n[ee(n,o,"loading")]}function ae(n,o,s){return n[ee(n,o,"storing")]=s}function tt(){ke("segmentation fault")}function et(){ke("alignment fault")}function W(){De.buffer!=Le.buffer&&Vi()}(()=>{var n=new Int16Array(1),o=new Int8Array(n.buffer);if(n[0]=25459,o[0]!==115||o[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})(),Fe("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),Fe("asm","Please use wasmExports instead"),Y=ye,ye=(...n)=>{return Y((o=0,ri&&Si!==void 0&&(o=Si()),`w:${_o},t:${bt(o)}:`),...n);var o};var He,De,Le,Je,Pt,Mt,te,Ie,yi,Ht,pt,go,_o=0;if(l){let n=function(o){try{var s=o.data,d=s.cmd;if(d==="load"){_o=s.workerID;let b=[];self.onmessage=v=>b.push(v),He=()=>{postMessage({cmd:"loaded"});for(let v of b)n(v);self.onmessage=n};for(let v of s.handlers)i[v]&&!i[v].proxy||(i[v]=(...T)=>{postMessage({cmd:"callHandler",handler:v,args:T})},v=="print"&&(D=i[v]),v=="printErr"&&(P=i[v]));De=s.wasmMemory,Vi(),he(s.wasmModule)}else if(d==="run"){N(s.pthread_ptr),p=s.pthread_ptr,y=(m=Q((W(),Ie),p+52>>>2>>>0))-Q((W(),Ie),p+56>>>2>>>0),N(m!=0),N(y!=0),N(m>y,"stackHigh must be higher then stackLow"),Pa(m,y),jo(),M(m),me(),fr(s.pthread_ptr,0,0,1,0,0),Ae.threadInitTLS(),sr(s.pthread_ptr),Jn||(Ca(),Jn=!0);try{ko(s.start_routine,s.arg)}catch(b){if(b!="unwind")throw b}}else s.target==="setimmediate"||(d==="checkMailbox"?Jn&&Ki():d&&(P(`worker: received unknown command ${d}`),P(s)))}catch(b){throw P(`worker: onmessage() captured an uncaught exception: ${b}`),b?.stack&&P(b.stack),Sa(),b}var p,m,y};var z2=n,Jn=!1;self.onunhandledrejection=o=>{throw o.reason||o},self.onmessage=n}var ri=!1;function Vi(){var n=De.buffer;i.HEAP8=Le=new Int8Array(n),Pt=new Int16Array(n),i.HEAPU8=Je=new Uint8Array(n),Mt=new Uint16Array(n),i.HEAP32=te=new Int32Array(n),i.HEAPU32=Ie=new Uint32Array(n),yi=new Float32Array(n),Ht=new Float64Array(n),pt=new BigInt64Array(n),go=new BigUint64Array(n)}function bo(){if(N(!ri),ri=!0,l)return He();jo(),ve(),Ct.__wasm_call_ctors()}N(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");var gi=0,_i=null,bi={},qt=null;function vo(n){gi++,n?(N(!bi[n]),bi[n]=1,qt===null&&typeof setInterval<"u"&&(qt=setInterval(()=>{if(V)return clearInterval(qt),void(qt=null);var o=!1;for(var s in bi)o||(o=!0,P("still waiting on run dependencies:")),P(`dependency: ${s}`);o&&P("(end of list)")},1e4))):P("warning: run dependency added without ID")}function wo(n){if(gi--,n?(N(bi[n]),delete bi[n]):P("warning: run dependency removed without ID"),gi==0&&(qt!==null&&(clearInterval(qt),qt=null),_i)){var o=_i;_i=null,o()}}function ke(n){P(n="Aborted("+n+")"),V=!0,n.indexOf("RuntimeError: unreachable")>=0&&(n+='. "unreachable" may be due to ASYNCIFY_STACK_SIZE not being large enough (try increasing it)');var o=new WebAssembly.RuntimeError(n);throw oe?.(o),o}var vi,ft={error(){ke("Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with -sFORCE_FILESYSTEM")},init(){ft.error()},createDataFile(){ft.error()},createPreloadedFile(){ft.error()},createLazyFile(){ft.error()},open(){ft.error()},mkdev(){ft.error()},registerDevice(){ft.error()},analyzePath(){ft.error()},ErrnoError(){ft.error()}};function k(n,o){return(...s)=>{N(ri,`native function \`${n}\` called before runtime initialization`);var d=Ct[n];return N(d,`exported native function \`${n}\` not found`),N(s.length<=o,`native function \`${n}\` called with ${s.length} args but expects ${o}`),d(...s)}}async function Ky(n,o,s){if(!n&&typeof WebAssembly.instantiateStreaming=="function"&&!ce(o))try{var d=fetch(o,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(d,s)}catch(p){P(`wasm streaming compile failed: ${p}`),P("falling back to ArrayBuffer instantiation")}return async function(p,m){try{var y=await async function(b){if(!S)try{var v=await g(b);return new Uint8Array(v)}catch{}return function(T){if(T==vi&&S)return new Uint8Array(S);if(_)return _(T);throw"both async and sync fetching of the wasm failed"}(b)}(p);return await WebAssembly.instantiate(y,m)}catch(b){P(`failed to asynchronously prepare wasm: ${b}`),ce(vi)&&P(`warning: Loading from a file URI (${vi}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),ke(b)}}(o,s)}function $o(){return(xi={HaveOffsetConverter:$_,__assert_fail:Yy,__asyncjs__jsepDownload:w_,__cxa_begin_catch:Zy,__cxa_end_catch:Qy,__cxa_find_matching_catch_2:Jy,__cxa_find_matching_catch_3:Xy,__cxa_find_matching_catch_4:eg,__cxa_find_matching_catch_5:tg,__cxa_find_matching_catch_6:ig,__cxa_rethrow:ng,__cxa_throw:rg,__cxa_uncaught_exceptions:og,__handle_stack_overflow:ag,__pthread_create_js:Bo,__resumeException:ug,__syscall_fcntl64:Mo,__syscall_fstat64:Ro,__syscall_getcwd:zo,__syscall_getdents64:Uo,__syscall_ioctl:No,__syscall_lstat64:Lo,__syscall_mkdirat:Vo,__syscall_newfstatat:Wo,__syscall_openat:Go,__syscall_readlinkat:Fo,__syscall_rmdir:Ho,__syscall_stat64:qo,__syscall_unlinkat:Ko,_abort_js:lg,_embind_register_bigint:pg,_embind_register_bool:fg,_embind_register_emval:hg,_embind_register_float:gg,_embind_register_integer:_g,_embind_register_memory_view:bg,_embind_register_std_string:vg,_embind_register_std_wstring:Ig,_embind_register_void:Ag,_emscripten_init_main_thread_js:kg,_emscripten_notify_mailbox_postmessage:jg,_emscripten_receive_on_main_thread_js:Eg,_emscripten_thread_cleanup:Pg,_emscripten_thread_mailbox_await:sr,_emscripten_thread_set_strongref:Og,_emval_await:ia,_emval_create_invoker:Mg,_emval_decref:or,_emval_equals:Rg,_emval_get_global:zg,_emval_get_module_property:Ug,_emval_get_property:Ng,_emval_incref:Lg,_emval_invoke:ra,_emval_invoke_i64:Vg,_emval_new_array:Wg,_emval_new_array_from_memory_view:Gg,_emval_new_cstring:Fg,_emval_new_object:Hg,_emval_run_destructors:Kg,_emval_set_property:Yg,_gmtime_js:Zg,_localtime_js:Xg,_mktime_js:e_,_mmap_js:aa,_munmap_js:sa,_tzset_js:t_,alignfault:et,clock_time_get:r_,emscripten_asm_const_int:o_,emscripten_asm_const_ptr:a_,emscripten_check_blocking_allowed:s_,emscripten_date_now:la,emscripten_errn:u_,emscripten_exit_with_live_runtime:l_,emscripten_get_heap_max:d_,emscripten_get_now:ua,emscripten_num_logical_cores:c_,emscripten_pc_get_function:Xi,emscripten_resize_heap:h_,emscripten_stack_snapshot:y_,emscripten_stack_unwind_buffer:g_,environ_get:ma,environ_sizes_get:ha,exit:er,fd_close:ya,fd_read:ga,fd_seek:_a,fd_write:ba,invoke_di:Zv,invoke_dii:V_,invoke_diii:g0,invoke_djj:z_,invoke_fffffff:Pw,invoke_fi:db,invoke_fiff:zb,invoke_fii:lb,invoke_fiif:q0,invoke_fiii:ov,invoke_fijjjjifi:Gw,invoke_fj:$0,invoke_i:M_,invoke_if:Mb,invoke_iffi:rv,invoke_ii:S_,invoke_iidd:Iv,invoke_iidi:Ib,invoke_iif:Cv,invoke_iiff:Jv,invoke_iii:C_,invoke_iiif:Db,invoke_iiifi:k0,invoke_iiii:I_,invoke_iiiii:O_,invoke_iiiiid:i$,invoke_iiiiidfffiii:sv,invoke_iiiiii:P_,invoke_iiiiiii:k_,invoke_iiiiiiii:H_,invoke_iiiiiiiii:gb,invoke_iiiiiiiiii:ub,invoke_iiiiiiiiiii:_b,invoke_iiiiiiiiiiii:Kw,invoke_iiiiiiiiiiiii:m0,invoke_iiiiiiiiiiiiifii:Aw,invoke_iiiiiiiiiiiiii:xb,invoke_iiiiiiiiiiiiiii:W0,invoke_iiiiiiiiiiiiiiiiifii:_v,invoke_iiiiiiiiiiiiiiiiii:Ov,invoke_iiiiiiiiiiiiiiiiiifi:nw,invoke_iiiiiiiiiiiiiiiiiiii:Rv,invoke_iiiiiiiiiiiiiiiiiiiiiii:zv,invoke_iiiiiiiiiiiiiiiiiiiiiiii:Uv,invoke_iiiiiiiiiiijiiii:x0,invoke_iiiiiiiiiji:E0,invoke_iiiiiiiiijii:M0,invoke_iiiiiiiij:Q_,invoke_iiiiiiiijjjfi:z0,invoke_iiiiiij:B_,invoke_iiiiiijji:Sb,invoke_iiiiiijjjii:R0,invoke_iiiiij:t$,invoke_iiiiiji:Zb,invoke_iiiiijiii:bb,invoke_iiiiijiiiii:yb,invoke_iiiiijji:P0,invoke_iiiij:Ob,invoke_iiiiji:e0,invoke_iiiijii:D0,invoke_iiiijiiiiiiiiii:S0,invoke_iiiijiiiijj:C0,invoke_iiiijjii:O0,invoke_iiiijjiii:vb,invoke_iiiijjj:a0,invoke_iiiijjjiii:V0,invoke_iiij:Bb,invoke_iiiji:A0,invoke_iiijii:j0,invoke_iiijiii:B0,invoke_iiijiiiii:xw,invoke_iiijjii:u0,invoke_iij:N_,invoke_iiji:J_,invoke_iijiiii:q_,invoke_iijj:Av,invoke_iijjii:e$,invoke_iijjiii:G0,invoke_iijjjf:n0,invoke_iijjjii:L0,invoke_iijjjj:bv,invoke_ij:X_,invoke_iji:tb,invoke_ijii:Z0,invoke_ijiiii:Gb,invoke_j:Pv,invoke_jfi:qw,invoke_ji:R_,invoke_jii:U_,invoke_jiii:cb,invoke_jiiii:Pb,invoke_jiiij:T0,invoke_jiij:Eb,invoke_jiijj:I0,invoke_jij:Vb,invoke_jiji:D_,invoke_jj:rb,invoke_jjj:wb,invoke_v:j_,invoke_vfiii:tw,invoke_vi:x_,invoke_vid:Y_,invoke_vidi:Rb,invoke_vif:K_,invoke_viffiii:jv,invoke_vifi:sw,invoke_vifii:$w,invoke_vifiifiiii:ev,invoke_vifiifiiiiiii:tv,invoke_vifiii:Cw,invoke_vii:T_,invoke_viid:kv,invoke_viidi:nv,invoke_viif:hb,invoke_viiff:iw,invoke_viifiifijjjii:Xb,invoke_viifiii:Fv,invoke_viifjjijiiii:mw,invoke_viifjjjijiiiii:cw,invoke_viii:A_,invoke_viiif:y0,invoke_viiiff:hv,invoke_viiifii:pv,invoke_viiifiifii:Sv,invoke_viiifiiiiiifiiii:Xv,invoke_viiii:E_,invoke_viiiiff:Iw,invoke_viiiifiiifiii:Hv,invoke_viiiii:L_,invoke_viiiiidiidii:xv,invoke_viiiiidiidiiii:qv,invoke_viiiiif:mv,invoke_viiiiiff:gv,invoke_viiiiifiifii:Wv,invoke_viiiiifiifiiii:Gv,invoke_viiiiifiiiifiii:Qv,invoke_viiiiifiiiiii:fv,invoke_viiiiii:F_,invoke_viiiiiid:yw,invoke_viiiiiif:Bv,invoke_viiiiiiff:yv,invoke_viiiiiiffifiiiii:Mw,invoke_viiiiiiffiifiiiii:Bw,invoke_viiiiiifi:h0,invoke_viiiiiifii:av,invoke_viiiiiii:W_,invoke_viiiiiiidiiii:gw,invoke_viiiiiiifiiii:hw,invoke_viiiiiiii:Z_,invoke_viiiiiiiif:lv,invoke_viiiiiiiifiiiifiiiii:f0,invoke_viiiiiiiii:sb,invoke_viiiiiiiiifiii:Ow,invoke_viiiiiiiiii:fb,invoke_viiiiiiiiiii:pb,invoke_viiiiiiiiiiii:kb,invoke_viiiiiiiiiiiii:Ub,invoke_viiiiiiiiiiiiii:Ab,invoke_viiiiiiiiiiiiiifi:Lv,invoke_viiiiiiiiiiiiiii:ew,invoke_viiiiiiiiiiiiiiii:jb,invoke_viiiiiiiiiiiiiiiifiiii:dv,invoke_viiiiiiiiiiiiiiiii:Kv,invoke_viiiiiiiiiiiiiiiiii:cv,invoke_viiiiiiiiiiiiiiiiiii:Mv,invoke_viiiiiiiiiiiiiiiiiiii:Nv,invoke_viiiiiiiiiiiiiiiiiiiiii:Yv,invoke_viiiiiiiiiiiiiiiiiiiiiii:uv,invoke_viiiiiiiiiiiijfii:_w,invoke_viiiiiiiiijii:b0,invoke_viiiiiiiiji:v0,invoke_viiiiiiiijiiiiii:d0,invoke_viiiiiiiijjj:rw,invoke_viiiiiiijiiii:J0,invoke_viiiiiij:Q0,invoke_viiiiiijjiiiii:l0,invoke_viiiiiijjjjjii:ow,invoke_viiiiij:Lb,invoke_viiiiiji:bw,invoke_viiiiijiiiiii:Zw,invoke_viiiiijjiiiii:Qw,invoke_viiiiijjj:Dv,invoke_viiiij:Tw,invoke_viiiiji:Jw,invoke_viiiijii:nb,invoke_viiiijiiiiiiif:Vv,invoke_viiiijiiiiiiii:i0,invoke_viiiijj:N0,invoke_viiiijjj:U0,invoke_viiiijjji:r0,invoke_viiiijjjj:H0,invoke_viiij:Wb,invoke_viiiji:vw,invoke_viiijii:eb,invoke_viiijiii:ib,invoke_viiijiiiiiiiii:o0,invoke_viiijiijjj:jw,invoke_viiijj:Yw,invoke_viiijjiiiiiii:lw,invoke_viiijjjfffi:kw,invoke_viiijjjii:Ev,invoke_viiijjjjji:ww,invoke_viij:mb,invoke_viiji:$b,invoke_viijiiii:s0,invoke_viijiiiiiiiiiiiiii:Qb,invoke_viijiiiiiiijjii:$v,invoke_viijiiiijiii:dw,invoke_viijj:ab,invoke_viijjiii:Xw,invoke_viijjiiiiii:K0,invoke_viijjiiiiiiii:Y0,invoke_viijjiiiiiiiii:vv,invoke_viijjj:Jb,invoke_viijjjj:Ew,invoke_viijjjjiiiiiiiii:F0,invoke_viijjjjjjjjjjjjjii:t0,invoke_vij:G_,invoke_vijfjiiiii:w0,invoke_viji:Tb,invoke_vijii:ob,invoke_vijiii:Cb,invoke_vijiiiiii:Kb,invoke_vijiiiiiiii:Hw,invoke_vijiji:Fb,invoke_vijj:aw,invoke_vijjfffiii:Fw,invoke_vijji:X0,invoke_vijjjiii:_0,invoke_vijjjiiji:wv,invoke_vijjjjiii:Tv,invoke_vijjjjjjifiiii:Lw,invoke_vijjjjjjjjjjjjjii:uw,invoke_vj:Sw,invoke_vjifiii:iv,invoke_vjiiiii:Hb,invoke_vjiiiiii:qb,invoke_vjiiiiiii:Yb,invoke_vjiij:Nb,invoke_vjjii:c0,invoke_vjjjii:p0,invoke_vjjjjfiii:Ww,invoke_vjjjjjiiiii:Vw,invoke_vjjjjjjddddjji:fw,invoke_vjjjjjjffffjji:pw,invoke_vjjjjjjfffifiiiii:Nw,invoke_vjjjjjjfffifiiiiiii:Uw,invoke_vjjjjjjffiifiiiiii:Dw,invoke_vjjjjjjjjfffiifiiiii:zw,invoke_vjjjjjjjjfffiifiiiiii:Rw,llvm_eh_typeid_for:b_,memory:De,proc_exit:Xn,segfault:tt}).__instrumented||(xi.__instrumented=!0,de.instrumentWasmImports(xi)),{env:xi,wasi_snapshot_preview1:xi}}class Co{name="ExitStatus";constructor(o){this.message=`Program terminated with exit(${o})`,this.status=o}}var xo=n=>{n.terminate(),n.onmessage=o=>{var s=o.data.cmd;P(`received "${s}" command from terminated worker: ${n.workerID}`)}},So=n=>{N(!l,"Internal Error! cleanupThread() can only ever be called from main application thread!"),N(n,"Internal Error! Null pthread_ptr in cleanupThread!");var o=Ae.pthreads[n];N(o),Ae.returnWorkerToPool(o)},To=[],Io=n=>{N(!l,"Internal Error! spawnThread() can only ever be called from main application thread!"),N(n.pthread_ptr,"Internal error, no pthread ptr!");var o=Ae.getNewWorker();if(!o)return 6;N(!o.pthread_ptr,"Internal error!"),Ae.runningWorkers.push(o),Ae.pthreads[n.pthread_ptr]=o,o.pthread_ptr=n.pthread_ptr;var s={cmd:"run",start_routine:n.startRoutine,arg:n.arg,pthread_ptr:n.pthread_ptr};return o.postMessage(s,n.transferList),0},oi=0,Wi=()=>oi>0,R=()=>hr(),M=n=>Oa(n),Gi=n=>Da(n),Ve=(n,o,s,...d)=>{for(var p=2*d.length,m=R(),y=Gi(8*p),b=y>>>3,v=0;v<d.length;v++){var T=d[v];typeof T=="bigint"?(ae((W(),pt),b+2*v>>>0,1n),ae((W(),pt),b+2*v+1>>>0,T)):(ae((W(),pt),b+2*v>>>0,0n),ae((W(),Ht),b+2*v+1>>>0,T))}var E=Ta(n,o,p,y,s);return M(m),E};function Xn(n){if(l)return Ve(0,0,1,n);G=n,Wi()||(Ae.terminateAllThreads(),V=!0),w(0,new Co(n))}function Ao(n){if(l)return Ve(1,0,0,n);er(n)}var er=(n,o)=>{if(G=n,function(){var d=D,p=P,m=!1;D=P=y=>{m=!0};try{__()}catch{}D=d,P=p,m&&(vt("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc."),vt("(this may also be due to not including full filesystem support - try building with -sFORCE_FILESYSTEM)"))}(),l)throw N(!o),Ao(n),"unwind";if(Wi()&&!o){var s=`program exited (with status: ${n}), but keepRuntimeAlive() is set (counter=${oi}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;oe?.(s),P(s)}Xn(n)},bt=n=>(N(typeof n=="number"),"0x"+n.toString(16).padStart(8,"0")),Ae={unusedWorkers:[],runningWorkers:[],tlsInitFunctions:[],pthreads:{},nextWorkerID:1,init(){l||Ae.initMainThread()},initMainThread(){for(var n,o=i.numThreads-1;o--;)Ae.allocateUnusedWorker();n=()=>{vo("loading-workers"),Ae.loadWasmModuleToAllWorkers(()=>wo("loading-workers"))},To.push(n)},terminateAllThreads:()=>{for(var n of(N(!l,"Internal Error! terminateAllThreads() can only ever be called from main application thread!"),Ae.runningWorkers))xo(n);for(var n of Ae.unusedWorkers)xo(n);Ae.unusedWorkers=[],Ae.runningWorkers=[],Ae.pthreads={}},returnWorkerToPool:n=>{var o=n.pthread_ptr;delete Ae.pthreads[o],Ae.unusedWorkers.push(n),Ae.runningWorkers.splice(Ae.runningWorkers.indexOf(n),1),n.pthread_ptr=0,Ia(o)},threadInitTLS(){Ae.tlsInitFunctions.forEach(n=>n())},loadWasmModuleToWorker:n=>new Promise(o=>{n.onmessage=p=>{var m=p.data,y=m.cmd;if(m.targetThread&&m.targetThread!=Si()){var b=Ae.pthreads[m.targetThread];b?b.postMessage(m,m.transferList):P(`Internal error! Worker sent a message "${y}" to target pthread ${m.targetThread}, but that thread no longer exists!`)}else y==="checkMailbox"?Ki():y==="spawnThread"?Io(m):y==="cleanupThread"?So(m.thread):y==="loaded"?(n.loaded=!0,o(n)):m.target==="setimmediate"?n.postMessage(m):y==="callHandler"?i[m.handler](...m.args):y&&P(`worker sent an unknown command ${y}`)},n.onerror=p=>{var m="worker sent an error!";throw n.pthread_ptr&&(m=`Pthread ${bt(n.pthread_ptr)} sent an error!`),P(`${m} ${p.filename}:${p.lineno}: ${p.message}`),p},N(De instanceof WebAssembly.Memory,"WebAssembly memory should have been loaded by now!"),N(O instanceof WebAssembly.Module,"WebAssembly Module should have been loaded by now!");var s=[];for(var d of[])i.propertyIsEnumerable(d)&&s.push(d);n.postMessage({cmd:"load",handlers:s,wasmMemory:De,wasmModule:O,workerID:n.workerID})}),loadWasmModuleToAllWorkers(n){if(l)return n();Promise.all(Ae.unusedWorkers.map(Ae.loadWasmModuleToWorker)).then(n)},allocateUnusedWorker(){var n;(n=new Worker((()=>{let o=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new o("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread-"+Ae.nextWorkerID})).workerID=Ae.nextWorkerID++,Ae.unusedWorkers.push(n)},getNewWorker:()=>(Ae.unusedWorkers.length==0&&(P("Tried to spawn a new thread, but the thread pool is exhausted.\nThis might result in a deadlock unless some threads eventually exit or the code explicitly breaks out to the event loop.\nIf you want to increase the pool size, use setting `-sPTHREAD_POOL_SIZE=...`.\nIf you want to throw an explicit error instead of the risk of deadlocking in those cases, use setting `-sPTHREAD_POOL_SIZE_STRICT=2`."),Ae.allocateUnusedWorker(),Ae.loadWasmModuleToWorker(Ae.unusedWorkers[0])),Ae.unusedWorkers.pop())},B={},ko=(n,o)=>{oi=0;var s=_r(n,o);ve(),function(d){Wi()?G=d:mr(d)}(s)};ko.isAsync=!0;var jo=()=>{var n=Ai(),o=Ii();za(n,o)},vt=n=>{vt.shown||={},vt.shown[n]||(vt.shown[n]=1,P(n))},ai=n=>n<-9007199254740992||n>9007199254740992?NaN:Number(n),Eo=typeof TextDecoder<"u"?new TextDecoder:void 0,Po=(n,o,s,d)=>{var p=o+s;if(d)return p;for(;n[o]&&!(o>=p);)++o;return o},Oo=(n,o=0,s,d)=>{var p=Po(n,o>>>=0,s,d);if(p-o>16&&n.buffer&&Eo)return Eo.decode(n.buffer instanceof ArrayBuffer?n.subarray(o,p):n.slice(o,p));for(var m="";o<p;){var y=n[o++];if(128&y){var b=63&n[o++];if((224&y)!=192){var v=63&n[o++];if((240&y)==224?y=(15&y)<<12|b<<6|v:((248&y)!=240&&vt("Invalid UTF-8 leading byte "+bt(y)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),y=(7&y)<<18|b<<12|v<<6|63&n[o++]),y<65536)m+=String.fromCharCode(y);else{var T=y-65536;m+=String.fromCharCode(55296|T>>10,56320|1023&T)}}else m+=String.fromCharCode((31&y)<<6|b)}else m+=String.fromCharCode(y)}return m},Ne=(n,o,s)=>(N(typeof n=="number",`UTF8ToString expects a number (got ${typeof n})`),(n>>>=0)?Oo((W(),Je),n,o,s):"");function Yy(n,o,s,d){return o>>>=0,d>>>=0,ke(`Assertion failed: ${Ne(n>>>=0)}, at: `+[o?Ne(o):"unknown filename",s,d?Ne(d):"unknown function"])}var wi=[],Fi=0;function Zy(n){var o=new tr(n>>>=0);return o.get_caught()||(o.set_caught(!0),Fi--),o.set_rethrown(!1),wi.push(o),gr(n),Ra(n)}var Rt=0,Qy=()=>{z(0,0),N(wi.length>0);var n=wi.pop();yr(n.excPtr),Rt=0};class tr{constructor(o){this.excPtr=o,this.ptr=o-24}set_type(o){ae((W(),Ie),this.ptr+4>>>2>>>0,o)}get_type(){return Q((W(),Ie),this.ptr+4>>>2>>>0)}set_destructor(o){ae((W(),Ie),this.ptr+8>>>2>>>0,o)}get_destructor(){return Q((W(),Ie),this.ptr+8>>>2>>>0)}set_caught(o){o=o?1:0,ae((W(),Le),this.ptr+12>>>0,o)}get_caught(){return Q((W(),Le),this.ptr+12>>>0)!=0}set_rethrown(o){o=o?1:0,ae((W(),Le),this.ptr+13>>>0,o)}get_rethrown(){return Q((W(),Le),this.ptr+13>>>0)!=0}init(o,s){this.set_adjusted_ptr(0),this.set_type(o),this.set_destructor(s)}set_adjusted_ptr(o){ae((W(),Ie),this.ptr+16>>>2>>>0,o)}get_adjusted_ptr(){return Q((W(),Ie),this.ptr+16>>>2>>>0)}}var Hi=n=>ja(n),$i=n=>{var o=Rt?.excPtr;if(!o)return Hi(0),0;var s=new tr(o);s.set_adjusted_ptr(o);var d=s.get_type();if(!d)return Hi(0),o;for(var p of n){if(p===0||p===d)break;var m=s.ptr+16;if(Ma(p,d,m))return Hi(p),o}return Hi(d),o};function Jy(){return $i([])}function Xy(n){return $i([n>>>=0])}function eg(n,o){return $i([n>>>=0,o>>>=0])}function tg(n,o,s){return $i([n>>>=0,o>>>=0,s>>>=0])}function ig(n,o,s,d){return $i([n>>>=0,o>>>=0,s>>>=0,d>>>=0])}var ng=()=>{var n=wi.pop();n||ke("no exception to throw");var o=n.excPtr;throw n.get_rethrown()||(wi.push(n),n.set_rethrown(!0),n.set_caught(!1),Fi++),Rt=new pe(o)};function rg(n,o,s){throw o>>>=0,s>>>=0,new tr(n>>>=0).init(o,s),Rt=new pe(n),Fi++,Rt}var og=()=>Fi;function ag(n){n>>>=0;var o=Ai(),s=Ii();ke(`stack overflow (Attempt to set SP to ${bt(n)}, with stack limits [${bt(s)} - ${bt(o)}]). If you require more stack space build with -sSTACK_SIZE=<bytes>`)}function Do(n,o,s,d){return l?Ve(2,0,1,n,o,s,d):Bo(n,o,s,d)}var sg=()=>c!==void 0;function Bo(n,o,s,d){if(n>>>=0,o>>>=0,s>>>=0,d>>>=0,!sg())return ye("pthread_create: environment does not support SharedArrayBuffer, pthreads are not available"),6;var p=[];if(l&&p.length===0)return Do(n,o,s,d);var m={startRoutine:s,pthread_ptr:n,arg:d,transferList:p};return l?(m.cmd="spawnThread",postMessage(m,p),0):Io(m)}function ug(n){throw Rt||(Rt=new pe(n>>>=0)),Rt}var ir={varargs:void 0,getStr:n=>Ne(n)};function Mo(n,o,s){return l?Ve(3,0,1,n,o,s):(s>>>=0,ir.varargs=s,0)}function Ro(n,o){if(l)return Ve(4,0,1,n,o);o>>>=0,ke("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")}function zo(n,o){if(l)return Ve(5,0,1,n,o);n>>>=0,o>>>=0,ke("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")}function Uo(n,o,s){if(l)return Ve(6,0,1,n,o,s);o>>>=0,s>>>=0,ke("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")}function No(n,o,s){return l?Ve(7,0,1,n,o,s):(s>>>=0,ir.varargs=s,0)}function Lo(n,o){if(l)return Ve(8,0,1,n,o);n>>>=0,o>>>=0,ke("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")}function Vo(n,o,s){if(l)return Ve(9,0,1,n,o,s);o>>>=0,ke("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")}function Wo(n,o,s,d){if(l)return Ve(10,0,1,n,o,s,d);o>>>=0,s>>>=0,ke("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")}function Go(n,o,s,d){if(l)return Ve(11,0,1,n,o,s,d);o>>>=0,d>>>=0,ir.varargs=d,ke("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")}function Fo(n,o,s,d){if(l)return Ve(12,0,1,n,o,s,d);o>>>=0,s>>>=0,d>>>=0,ke("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")}function Ho(n){if(l)return Ve(13,0,1,n);n>>>=0,ke("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")}function qo(n,o){if(l)return Ve(14,0,1,n,o);n>>>=0,o>>>=0,ke("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")}function Ko(n,o,s){if(l)return Ve(15,0,1,n,o,s);o>>>=0,ke("it should not be possible to operate on streams when !SYSCALLS_REQUIRE_FILESYSTEM")}var lg=()=>ke("native code called abort()"),wt=n=>{n>>>=0;for(var o="";;){var s=Q((W(),Je),n++>>>0);if(!s)return o;o+=String.fromCharCode(s)}},nr={},rr={},dg={},cg=class extends Error{constructor(n){super(n),this.name="BindingError"}},si=n=>{throw new cg(n)};function Ot(n,o,s={}){return function(d,p,m={}){var y=p.name;if(d||si(`type "${y}" must have a positive integer typeid pointer`),rr.hasOwnProperty(d)){if(m.ignoreDuplicateRegistrations)return;si(`Cannot register type '${y}' twice`)}if(rr[d]=p,delete dg[d],nr.hasOwnProperty(d)){var b=nr[d];delete nr[d],b.forEach(v=>v())}}(n,o,s)}var Yo=(n,o,s)=>{switch(o){case 1:return s?d=>Q((W(),Le),d>>>0):d=>Q((W(),Je),d>>>0);case 2:return s?d=>Q((W(),Pt),d>>>1>>>0):d=>Q((W(),Mt),d>>>1>>>0);case 4:return s?d=>Q((W(),te),d>>>2>>>0):d=>Q((W(),Ie),d>>>2>>>0);case 8:return s?d=>Q((W(),pt),d>>>3>>>0):d=>Q((W(),go),d>>>3>>>0);default:throw new TypeError(`invalid integer width (${o}): ${n}`)}},qi=n=>{if(n===null)return"null";var o=typeof n;return o==="object"||o==="array"||o==="function"?n.toString():""+n},Zo=(n,o,s,d)=>{if(o<s||o>d)throw new TypeError(`Passing a number "${qi(o)}" from JS side to C/C++ side to an argument of type "${n}", which is outside the valid range [${s}, ${d}]!`)},pg=function(n,o,s,d,p){n>>>=0,s>>>=0,o=wt(o>>>=0);let m=d===0n,y=b=>b;if(m){let b=8*s;y=v=>BigInt.asUintN(b,v),p=y(p)}Ot(n,{name:o,fromWireType:y,toWireType:(b,v)=>{if(typeof v=="number")v=BigInt(v);else if(typeof v!="bigint")throw new TypeError(`Cannot convert "${qi(v)}" to ${this.name}`);return Zo(o,v,d,p),v},readValueFromPointer:Yo(o,s,!m),destructorFunction:null})};function fg(n,o,s,d){Ot(n>>>=0,{name:o=wt(o>>>=0),fromWireType:function(p){return!!p},toWireType:function(p,m){return m?s:d},readValueFromPointer:function(p){return this.fromWireType(Q((W(),Je),p>>>0))},destructorFunction:null})}var Qo=[],$t=[0,1,,1,null,1,!0,1,!1,1];function or(n){(n>>>=0)>9&&--$t[n+1]==0&&(N($t[n]!==void 0,"Decref for unallocated handle."),$t[n]=void 0,Qo.push(n))}var Ge={toValue:n=>(n||si(`Cannot use deleted val. handle = ${n}`),N(n===2||$t[n]!==void 0&&n%2==0,`invalid handle: ${n}`),$t[n]),toHandle:n=>{switch(n){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let o=Qo.pop()||$t.length;return $t[o]=n,$t[o+1]=1,o}}}};function ar(n){return this.fromWireType(Q((W(),Ie),n>>>2>>>0))}var mg={name:"emscripten::val",fromWireType:n=>{var o=Ge.toValue(n);return or(n),o},toWireType:(n,o)=>Ge.toHandle(o),readValueFromPointer:ar,destructorFunction:null};function hg(n){return Ot(n>>>=0,mg)}var yg=(n,o)=>{switch(o){case 4:return function(s){return this.fromWireType(Q((W(),yi),s>>>2>>>0))};case 8:return function(s){return this.fromWireType(Q((W(),Ht),s>>>3>>>0))};default:throw new TypeError(`invalid float width (${o}): ${n}`)}},gg=function(n,o,s){s>>>=0,Ot(n>>>=0,{name:o=wt(o>>>=0),fromWireType:d=>d,toWireType:(d,p)=>{if(typeof p!="number"&&typeof p!="boolean")throw new TypeError(`Cannot convert ${qi(p)} to ${this.name}`);return p},readValueFromPointer:yg(o,s),destructorFunction:null})},_g=function(n,o,s,d,p){n>>>=0,s>>>=0,o=wt(o>>>=0);let m=b=>b;if(d===0){var y=32-8*s;m=b=>b<<y>>>y,p=m(p)}Ot(n,{name:o,fromWireType:m,toWireType:(b,v)=>{if(typeof v!="number"&&typeof v!="boolean")throw new TypeError(`Cannot convert "${qi(v)}" to ${o}`);return Zo(o,v,d,p),v},readValueFromPointer:Yo(o,s,d!==0),destructorFunction:null})};function bg(n,o,s){s>>>=0;var d=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][o];function p(m){var y=Q((W(),Ie),m>>>2>>>0),b=Q((W(),Ie),m+4>>>2>>>0);return new d((W(),Le).buffer,b,y)}Ot(n>>>=0,{name:s=wt(s),fromWireType:p,readValueFromPointer:p},{ignoreDuplicateRegistrations:!0})}var zt=(n,o,s)=>(N(typeof s=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),((d,p,m,y)=>{if(m>>>=0,N(typeof d=="string",`stringToUTF8Array expects a string (got ${typeof d})`),!(y>0))return 0;for(var b=m,v=m+y-1,T=0;T<d.length;++T){var E=d.codePointAt(T);if(E<=127){if(m>=v)break;p[m++>>>0]=E}else if(E<=2047){if(m+1>=v)break;p[m++>>>0]=192|E>>6,p[m++>>>0]=128|63&E}else if(E<=65535){if(m+2>=v)break;p[m++>>>0]=224|E>>12,p[m++>>>0]=128|E>>6&63,p[m++>>>0]=128|63&E}else{if(m+3>=v)break;E>1114111&&vt("Invalid Unicode code point "+bt(E)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),p[m++>>>0]=240|E>>18,p[m++>>>0]=128|E>>12&63,p[m++>>>0]=128|E>>6&63,p[m++>>>0]=128|63&E,T++}}return p[m>>>0]=0,m-b})(n,(W(),Je),o,s)),ui=n=>{for(var o=0,s=0;s<n.length;++s){var d=n.charCodeAt(s);d<=127?o++:d<=2047?o+=2:d>=55296&&d<=57343?(o+=4,++s):o+=3}return o};function vg(n,o){Ot(n>>>=0,{name:o=wt(o>>>=0),fromWireType(s){var d,p=Q((W(),Ie),s>>>2>>>0);return d=Ne(s+4,p,!0),dt(s),d},toWireType(s,d){var p;d instanceof ArrayBuffer&&(d=new Uint8Array(d));var m=typeof d=="string";m||ArrayBuffer.isView(d)&&d.BYTES_PER_ELEMENT==1||si("Cannot pass non-string to std::string"),p=m?ui(d):d.length;var y=Ti(4+p+1),b=y+4;return ae((W(),Ie),y>>>2>>>0,p),m?zt(d,b,p+1):(W(),Je).set(d,b>>>0),s!==null&&s.push(dt,y),y},readValueFromPointer:ar,destructorFunction(s){dt(s)}})}var Jo=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,wg=(n,o,s)=>{N(n%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");var d=n>>>1,p=Po((W(),Mt),d,o/2,s);if(p-d>16&&Jo)return Jo.decode((W(),Mt).buffer instanceof ArrayBuffer?(W(),Mt).subarray(d>>>0,p>>>0):(W(),Mt).slice(d,p));for(var m="",y=d;y<p;++y){var b=Q((W(),Mt),y>>>0);m+=String.fromCharCode(b)}return m},$g=(n,o,s)=>{if(N(o%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),N(typeof s=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),s??=2147483647,s<2)return 0;for(var d=o,p=(s-=2)<2*n.length?s/2:n.length,m=0;m<p;++m){var y=n.charCodeAt(m);ae((W(),Pt),o>>>1>>>0,y),o+=2}return ae((W(),Pt),o>>>1>>>0,0),o-d},Cg=n=>2*n.length,xg=(n,o,s)=>{N(n%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var d="",p=n>>>2,m=0;!(m>=o/4);m++){var y=Q((W(),Ie),p+m>>>0);if(!y&&!s)break;d+=String.fromCodePoint(y)}return d},Sg=(n,o,s)=>{if(N((o>>>=0)%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),N(typeof s=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),s??=2147483647,s<4)return 0;for(var d=o,p=d+s-4,m=0;m<n.length;++m){var y=n.codePointAt(m);if(y>65535&&m++,ae((W(),te),o>>>2>>>0,y),(o+=4)+4>p)break}return ae((W(),te),o>>>2>>>0,0),o-d},Tg=n=>{for(var o=0,s=0;s<n.length;++s)n.codePointAt(s)>65535&&s++,o+=4;return o};function Ig(n,o,s){var d,p,m;n>>>=0,o>>>=0,s=wt(s>>>=0),o===2?(d=wg,p=$g,m=Cg):(N(o===4,"only 2-byte and 4-byte strings are currently supported"),d=xg,p=Sg,m=Tg),Ot(n,{name:s,fromWireType:y=>{var b=Q((W(),Ie),y>>>2>>>0),v=d(y+4,b*o,!0);return dt(y),v},toWireType:(y,b)=>{typeof b!="string"&&si(`Cannot pass non-string to C++ string type ${s}`);var v=m(b),T=Ti(4+v+o);return ae((W(),Ie),T>>>2>>>0,v/o),p(b,T+4,v+o),y!==null&&y.push(dt,T),T},readValueFromPointer:ar,destructorFunction(y){dt(y)}})}var Ag=function(n,o){Ot(n>>>=0,{isVoid:!0,name:o=wt(o>>>=0),fromWireType:()=>{},toWireType:(s,d)=>{}})};function kg(n){fr(n>>>=0,!a,1,!r,131072,!1),Ae.threadInitTLS()}var Xo=n=>{if(n instanceof Co||n=="unwind")return G;ve(),n instanceof WebAssembly.RuntimeError&&hr()<=0&&P("Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 5242880)"),w(0,n)},ea=n=>{if(V)P("user callback triggered after runtime exited or application aborted.  Ignoring.");else try{n(),(()=>{if(!Wi())try{l?mr(G):er(G)}catch(o){Xo(o)}})()}catch(o){Xo(o)}};function sr(n){if(n>>>=0,typeof Atomics.waitAsync=="function"){var o=Atomics.waitAsync((W(),te),n>>>2,n);N(o.async),o.value.then(Ki);var s=n+128;Atomics.store((W(),te),s>>>2,1)}}var Ki=()=>{var n=Si();n&&(sr(n),ea(Aa))};function jg(n,o){if((n>>>=0)==(o>>>=0))setTimeout(Ki);else if(l)postMessage({targetThread:n,cmd:"checkMailbox"});else{var s=Ae.pthreads[n];if(!s)return void P(`Cannot send message to thread with ID ${n}, unknown thread ID!`);s.postMessage({cmd:"checkMailbox"})}}var Yi=[];function Eg(n,o,s,d,p){o>>>=0,s>>>=0,p>>>=0,d/=2,Yi.length=d;for(var m=p>>>3,y=0;y<d;y++)Q((W(),pt),m+2*y>>>0)?Yi[y]=Q((W(),pt),m+2*y+1>>>0):Yi[y]=Q((W(),Ht),m+2*y+1>>>0);var b=o?pr[o]:v_[n];N(!(n&&o)),N(b.length==d,"Call args mismatch in _emscripten_receive_on_main_thread_js"),Ae.currentProxiedOperationCallerThread=s;var v=b(...Yi);return Ae.currentProxiedOperationCallerThread=0,N(typeof v!="bigint"),v}function Pg(n){n>>>=0,l?postMessage({cmd:"cleanupThread",thread:n}):So(n)}function Og(n){}var Zi=n=>{try{return n()}catch(o){ke(o)}},ta=()=>{oi+=1},de={instrumentWasmImports(n){var o=/^(invoke_.*|__asyncjs__.*)$/;for(let[s,d]of Object.entries(n))if(typeof d=="function"){let p=d.isAsync||o.test(s);n[s]=(...m)=>{var y=de.state;try{return d(...m)}finally{var b=y===de.State.Normal&&de.state===de.State.Disabled,v=s.startsWith("invoke_")&&!0;if(de.state!==y&&!p&&!b&&!v)throw new Error(`import ${s} was not in ASYNCIFY_IMPORTS, but changed the state`)}}}},instrumentFunction(n){var o=(...s)=>{de.exportCallStack.push(n);try{return n(...s)}finally{V||(N(de.exportCallStack.pop()===n),de.maybeStopUnwind())}};return de.funcWrappers.set(n,o),o},instrumentWasmExports(n){var o={};for(let[d,p]of Object.entries(n))if(typeof p=="function"){var s=de.instrumentFunction(p);o[d]=s}else o[d]=p;return o},State:{Normal:0,Unwinding:1,Rewinding:2,Disabled:3},state:0,StackSize:65536,currData:null,handleSleepReturnValue:0,exportCallStack:[],callstackFuncToId:new Map,callStackIdToFunc:new Map,funcWrappers:new Map,callStackId:0,asyncPromiseHandlers:null,sleepCallbacks:[],getCallStackId(n){if(N(n),!de.callstackFuncToId.has(n)){var o=de.callStackId++;de.callstackFuncToId.set(n,o),de.callStackIdToFunc.set(o,n)}return de.callstackFuncToId.get(n)},maybeStopUnwind(){de.currData&&de.state===de.State.Unwinding&&de.exportCallStack.length===0&&(de.state=de.State.Normal,ta(),Zi(bc),typeof Fibers<"u"&&Fibers.trampoline())},whenDone:()=>(N(de.currData,"Tried to wait for an async operation when none is in progress."),N(!de.asyncPromiseHandlers,"Cannot have multiple async operations in flight at once"),new Promise((n,o)=>{de.asyncPromiseHandlers={resolve:n,reject:o}})),allocateData(){var n=Ti(12+de.StackSize);return de.setDataHeader(n,n+12,de.StackSize),de.setDataRewindFunc(n),n},setDataHeader(n,o,s){ae((W(),Ie),n>>>2>>>0,o),ae((W(),Ie),n+4>>>2>>>0,o+s)},setDataRewindFunc(n){var o=de.exportCallStack[0];N(o,"exportCallStack is empty");var s=de.getCallStackId(o);ae((W(),te),n+8>>>2>>>0,s)},getDataRewindFunc(n){var o=Q((W(),te),n+8>>>2>>>0),s=de.callStackIdToFunc.get(o);return N(s,`id ${o} not found in callStackIdToFunc`),s},doRewind(n){var o=de.getDataRewindFunc(n),s=de.funcWrappers.get(o);return N(o),N(s),N(oi>0),oi-=1,s()},handleSleep(n){if(N(de.state!==de.State.Disabled,"Asyncify cannot be done during or after the runtime exits"),!V){if(de.state===de.State.Normal){var o=!1,s=!1;n((d=0)=>{if(N(!d||typeof d=="number"||typeof d=="boolean"),!V&&(de.handleSleepReturnValue=d,o=!0,s)){N(!de.exportCallStack.length,"Waking up (starting to rewind) must be done from JS, without compiled code on the stack."),de.state=de.State.Rewinding,Zi(()=>vc(de.currData)),typeof MainLoop<"u"&&MainLoop.func&&MainLoop.resume();var p,m=!1;try{p=de.doRewind(de.currData)}catch(v){p=v,m=!0}var y=!1;if(!de.currData){var b=de.asyncPromiseHandlers;b&&(de.asyncPromiseHandlers=null,(m?b.reject:b.resolve)(p),y=!0)}if(m&&!y)throw p}}),s=!0,o||(de.state=de.State.Unwinding,de.currData=de.allocateData(),typeof MainLoop<"u"&&MainLoop.func&&MainLoop.pause(),Zi(()=>_c(de.currData)))}else de.state===de.State.Rewinding?(de.state=de.State.Normal,Zi(wc),dt(de.currData),de.currData=null,de.sleepCallbacks.forEach(ea)):ke(`invalid state: ${de.state}`);return de.handleSleepReturnValue}},handleAsync:n=>de.handleSleep(o=>{n().then(o)})},ia=function(n){return n>>>=0,de.handleAsync(async()=>{var o=await Ge.toValue(n);return Ge.toHandle(o)})};ia.isAsync=!0;var ur=[],Dg=(n,o,s)=>{var d=[],p=n(d,s);return d.length&&ae((W(),Ie),o>>>2>>>0,Ge.toHandle(d)),p},Bg={},Qi=n=>{var o=Bg[n];return o===void 0?wt(n):o},Mg=function(n,o,s){o>>>=0;var[d,...p]=((Z,se)=>{for(var ue=new Array(Z),fe=0;fe<Z;++fe)ue[fe]=(we=Q((W(),Ie),se+4*fe>>>2>>>0),Ee=`parameter ${fe}`,je=void 0,qe=void 0,it=void 0,ot=void 0,(ot=rr[we])===void 0&&si(`${Ee} has unknown type ${je=we,qe=$a(je),it=wt(qe),dt(qe),it}`),ot);var we,Ee,je,qe,it,ot;return ue})(n,o),m=d.toWireType.bind(d),y=p.map(Z=>Z.readValueFromPointer.bind(Z));n--;var b,v={toValue:Ge.toValue},T=y.map((Z,se)=>{var ue=`argFromPtr${se}`;return v[ue]=Z,`${ue}(args${se?"+"+8*se:""})`});switch(s){case 0:b="toValue(handle)";break;case 2:b="new (toValue(handle))";break;case 3:b="";break;case 1:v.getStringOrSymbol=Qi,b="toValue(handle)[getStringOrSymbol(methodName)]"}b+=`(${T})`,d.isVoid||(v.toReturnWire=m,v.emval_returnValue=Dg,b=`return emval_returnValue(toReturnWire, destructorsRef, ${b})`),b=`return function (handle, methodName, destructorsRef, args) {
  ${b}
  }`;var E,U,L,H,K=new Function(Object.keys(v),b)(...Object.values(v));return L=`methodCaller<(${p.map(Z=>Z.name)}) => ${d.name}>`,H=K,E=Object.defineProperty(H,"name",{value:L}),U=ur.length,ur.push(E),U};function Rg(n,o){return n>>>=0,o>>>=0,(n=Ge.toValue(n))==Ge.toValue(o)}var na=()=>globalThis;function zg(n){return(n>>>=0)==0?Ge.toHandle(na()):(n=Qi(n),Ge.toHandle(na()[n]))}function Ug(n){return n=Qi(n>>>=0),Ge.toHandle(i[n])}function Ng(n,o){return n>>>=0,o>>>=0,n=Ge.toValue(n),o=Ge.toValue(o),Ge.toHandle(n[o])}function Lg(n){(n>>>=0)>9&&($t[n+1]+=1)}function ra(n,o,s,d,p){return o>>>=0,s>>>=0,d>>>=0,p>>>=0,ur[n>>>=0](o,s,d,p)}var Vg=ra;function Wg(){return Ge.toHandle([])}function Gg(n){n>>>=0,n=Ge.toValue(n);for(var o=new Array(n.length),s=0;s<n.length;s++)o[s]=n[s];return Ge.toHandle(o)}function Fg(n){return n>>>=0,Ge.toHandle(Qi(n))}function Hg(){return Ge.toHandle({})}var qg=n=>{for(;n.length;){var o=n.pop();n.pop()(o)}};function Kg(n){n>>>=0;var o=Ge.toValue(n);qg(o),or(n)}function Yg(n,o,s){n>>>=0,o>>>=0,s>>>=0,n=Ge.toValue(n),o=Ge.toValue(o),s=Ge.toValue(s),n[o]=s}function Zg(n,o){n=ai(n),o>>>=0;var s=new Date(1e3*n);ae((W(),te),o>>>2>>>0,s.getUTCSeconds()),ae((W(),te),o+4>>>2>>>0,s.getUTCMinutes()),ae((W(),te),o+8>>>2>>>0,s.getUTCHours()),ae((W(),te),o+12>>>2>>>0,s.getUTCDate()),ae((W(),te),o+16>>>2>>>0,s.getUTCMonth()),ae((W(),te),o+20>>>2>>>0,s.getUTCFullYear()-1900),ae((W(),te),o+24>>>2>>>0,s.getUTCDay());var d=Date.UTC(s.getUTCFullYear(),0,1,0,0,0,0),p=(s.getTime()-d)/864e5|0;ae((W(),te),o+28>>>2>>>0,p)}var Qg=[0,31,60,91,121,152,182,213,244,274,305,335],Jg=[0,31,59,90,120,151,181,212,243,273,304,334],oa=n=>{var o;return((o=n.getFullYear())%4!=0||o%100==0&&o%400!=0?Jg:Qg)[n.getMonth()]+n.getDate()-1};function Xg(n,o){n=ai(n),o>>>=0;var s=new Date(1e3*n);ae((W(),te),o>>>2>>>0,s.getSeconds()),ae((W(),te),o+4>>>2>>>0,s.getMinutes()),ae((W(),te),o+8>>>2>>>0,s.getHours()),ae((W(),te),o+12>>>2>>>0,s.getDate()),ae((W(),te),o+16>>>2>>>0,s.getMonth()),ae((W(),te),o+20>>>2>>>0,s.getFullYear()-1900),ae((W(),te),o+24>>>2>>>0,s.getDay());var d=0|oa(s);ae((W(),te),o+28>>>2>>>0,d),ae((W(),te),o+36>>>2>>>0,-60*s.getTimezoneOffset());var p=new Date(s.getFullYear(),0,1),m=new Date(s.getFullYear(),6,1).getTimezoneOffset(),y=p.getTimezoneOffset(),b=0|(m!=y&&s.getTimezoneOffset()==Math.min(y,m));ae((W(),te),o+32>>>2>>>0,b)}var e_=function(n){n>>>=0;var o=(()=>{var s=new Date(Q((W(),te),n+20>>>2>>>0)+1900,Q((W(),te),n+16>>>2>>>0),Q((W(),te),n+12>>>2>>>0),Q((W(),te),n+8>>>2>>>0),Q((W(),te),n+4>>>2>>>0),Q((W(),te),n>>>2>>>0),0),d=Q((W(),te),n+32>>>2>>>0),p=s.getTimezoneOffset(),m=new Date(s.getFullYear(),0,1),y=new Date(s.getFullYear(),6,1).getTimezoneOffset(),b=m.getTimezoneOffset(),v=Math.min(b,y);if(d<0)ae((W(),te),n+32>>>2>>>0,+(y!=b&&v==p));else if(d>0!=(v==p)){var T=Math.max(b,y),E=d>0?v:T;s.setTime(s.getTime()+6e4*(E-p))}ae((W(),te),n+24>>>2>>>0,s.getDay());var U=0|oa(s);ae((W(),te),n+28>>>2>>>0,U),ae((W(),te),n>>>2>>>0,s.getSeconds()),ae((W(),te),n+4>>>2>>>0,s.getMinutes()),ae((W(),te),n+8>>>2>>>0,s.getHours()),ae((W(),te),n+12>>>2>>>0,s.getDate()),ae((W(),te),n+16>>>2>>>0,s.getMonth()),ae((W(),te),n+20>>>2>>>0,s.getYear());var L=s.getTime();return isNaN(L)?-1:L/1e3})();return BigInt(o)};function aa(n,o,s,d,p,m,y){return l?Ve(16,0,1,n,o,s,d,p,m,y):(n>>>=0,p=ai(p),m>>>=0,y>>>=0,-52)}function sa(n,o,s,d,p,m){if(l)return Ve(17,0,1,n,o,s,d,p,m);n>>>=0,o>>>=0,m=ai(m)}var t_=function(n,o,s,d){n>>>=0,o>>>=0,s>>>=0,d>>>=0;var p=new Date().getFullYear(),m=new Date(p,0,1),y=new Date(p,6,1),b=m.getTimezoneOffset(),v=y.getTimezoneOffset(),T=Math.max(b,v);ae((W(),Ie),n>>>2>>>0,60*T),ae((W(),te),o>>>2>>>0,+(b!=v));var E=H=>{var K=H>=0?"-":"+",Z=Math.abs(H);return`UTC${K}${String(Math.floor(Z/60)).padStart(2,"0")}${String(Z%60).padStart(2,"0")}`},U=E(b),L=E(v);N(U),N(L),N(ui(U)<=16,`timezone name truncated to fit in TZNAME_MAX (${U})`),N(ui(L)<=16,`timezone name truncated to fit in TZNAME_MAX (${L})`),v<b?(zt(U,s,17),zt(L,d,17)):(zt(U,d,17),zt(L,s,17))},ua=()=>performance.timeOrigin+performance.now(),la=()=>Date.now(),i_=1,n_=n=>n>=0&&n<=3;function r_(n,o,s){if(o=ai(o),s>>>=0,!n_(n))return 28;var d;if(n===0)d=la();else{if(!i_)return 52;d=ua()}var p=Math.round(1e3*d*1e3);return ae((W(),pt),s>>>3>>>0,BigInt(p)),0}var Ji=[],da=(n,o,s)=>{var d=((p,m)=>{var y;for(N(Array.isArray(Ji)),N(m%16==0),Ji.length=0;y=Q((W(),Je),p++>>>0);){var b=String.fromCharCode(y),v=["d","f","i","p"];v.push("j"),N(v.includes(b),`Invalid character ${y}("${b}") in readEmAsmArgs! Use only [${v}], and do not specify "v" for void return argument.`);var T=y!=105;m+=(T&=y!=112)&&m%8?4:0,Ji.push(y==112?Q((W(),Ie),m>>>2>>>0):y==106?Q((W(),pt),m>>>3>>>0):y==105?Q((W(),te),m>>>2>>>0):Q((W(),Ht),m>>>3>>>0)),m+=T?8:4}return Ji})(o,s);return N(pr.hasOwnProperty(n),`No EM_ASM constant found at address ${n}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),pr[n](...d)};function o_(n,o,s){return da(n>>>=0,o>>>=0,s>>>=0)}function a_(n,o,s){return da(n>>>=0,o>>>=0,s>>>=0)}var s_=()=>{a||vt("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread")};function u_(n,o){return P(Ne(n>>>=0,o>>>=0))}var l_=()=>{throw ta(),"unwind"},ca=()=>4294901760;function d_(){return ca()}var c_=()=>navigator.hardwareConcurrency,Kt={},p_=n=>{var o=ui(n)+1,s=Ti(o);return s&&zt(n,s,o),s};function Xi(n){var o;if(!(2147483648&(n>>>=0)))return ke("Cannot use emscripten_pc_get_function on native functions without -sUSE_OFFSET_CONVERTER"),0;var s,d=Kt[n];if(!d)return 0;if(s=/^\s+at (.*) \(.*\)$/.exec(d))o=s[1];else{if(!(s=/^(.+?)@/.exec(d)))return 0;o=s[1]}return dt(Xi.ret??0),Xi.ret=p_(o),Xi.ret}var f_=(n,o)=>(N(o,"alignment argument is required"),Math.ceil(n/o)*o),m_=n=>{var o=De.buffer.byteLength,s=(n-o+65535)/65536|0;try{return De.grow(s),Vi(),1}catch(d){P(`growMemory: Attempted to grow heap from ${o} bytes to ${n} bytes, but got error: ${d}`)}};function h_(n){n>>>=0;var o=(W(),Je).length;if(n<=o)return!1;var s=ca();if(n>s)return P(`Cannot enlarge memory, requested ${n} bytes, but the limit is ${s} bytes!`),!1;for(var d=1;d<=4;d*=2){var p=o*(1+.2/d);p=Math.min(p,n+100663296);var m=Math.min(s,f_(Math.max(n,p),65536));if(m_(m))return!0}return P(`Failed to grow the heap from ${o} bytes to ${m} bytes, not enough memory!`),!1}var en=n=>{var o;if(o=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(n))return+o[1];if(o=/\bwasm-function\[(\d+)\]:(\d+)/.exec(n))ke("Legacy backtrace format detected but -sUSE_OFFSET_CONVERTER not present.");else if(o=/:(\d+):\d+(?:\)|$)/.exec(n))return 2147483648|+o[1];return 0},pa=n=>{n.forEach(o=>{var s=en(o);s&&(Kt[s]=o)})},fa=()=>new Error().stack.toString();function y_(){var n=fa().split(`
`);return n[0]=="Error"&&n.shift(),pa(n),Kt.last_addr=en(n[3]),Kt.last_stack=n,Kt.last_addr}function g_(n,o,s){var d;n>>>=0,o>>>=0,Kt.last_addr==n?d=Kt.last_stack:((d=fa().split(`
`))[0]=="Error"&&d.shift(),pa(d));for(var p=3;d[p]&&en(d[p])!=n;)++p;for(var m=0;m<s&&d[m+p];++m)ae((W(),te),o+4*m>>>2>>>0,en(d[m+p]));return m}var lr={},Ci=()=>{if(!Ci.strings){var n={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(var o in lr)lr[o]===void 0?delete n[o]:n[o]=lr[o];var s=[];for(var o in n)s.push(`${o}=${n[o]}`);Ci.strings=s}return Ci.strings};function ma(n,o){if(l)return Ve(18,0,1,n,o);n>>>=0,o>>>=0;var s=0,d=0;for(var p of Ci()){var m=o+s;ae((W(),Ie),n+d>>>2>>>0,m),s+=zt(p,m,1/0)+1,d+=4}return 0}function ha(n,o){if(l)return Ve(19,0,1,n,o);n>>>=0,o>>>=0;var s=Ci();ae((W(),Ie),n>>>2>>>0,s.length);var d=0;for(var p of s)d+=ui(p)+1;return ae((W(),Ie),o>>>2>>>0,d),0}function ya(n){if(l)return Ve(20,0,1,n);ke("fd_close called without SYSCALLS_REQUIRE_FILESYSTEM")}function ga(n,o,s,d){if(l)return Ve(21,0,1,n,o,s,d);o>>>=0,s>>>=0,d>>>=0,ke("fd_read called without SYSCALLS_REQUIRE_FILESYSTEM")}function _a(n,o,s,d){return l?Ve(22,0,1,n,o,s,d):(o=ai(o),d>>>=0,70)}var dr=[null,[],[]],cr=(n,o)=>{var s=dr[n];N(s),o===0||o===10?((n===1?D:P)(Oo(s)),s.length=0):s.push(o)},__=()=>{xa(0),dr[1].length&&cr(1,10),dr[2].length&&cr(2,10)};function ba(n,o,s,d){if(l)return Ve(23,0,1,n,o,s,d);o>>>=0,s>>>=0,d>>>=0;for(var p=0,m=0;m<s;m++){var y=Q((W(),Ie),o>>>2>>>0),b=Q((W(),Ie),o+4>>>2>>>0);o+=8;for(var v=0;v<b;v++)cr(n,Q((W(),Je),y+v>>>0));p+=b}return ae((W(),Ie),d>>>2>>>0,p),0}function b_(n){return n>>>0}var va=n=>(o=>{var s=R(),d=Gi(4),p=Gi(4);Ba(o,d,p);var m,y=Q((W(),Ie),d>>>2>>>0),b=Q((W(),Ie),p>>>2>>>0),v=Ne(y);return dt(y),b&&(m=Ne(b),dt(b)),M(s),[v,m]})(n);Ae.init(),N($t.length===10),l||(N(!0,"INITIAL_MEMORY should be larger than STACK_SIZE, was 16777216! (STACK_SIZE=5242880)"),De=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Vi()),i.wasmBinary&&(S=i.wasmBinary),i.FS_createDataFile=ft.createDataFile,i.FS_createPreloadedFile=ft.createPreloadedFile,ie("ENVIRONMENT"),ie("GL_MAX_TEXTURE_IMAGE_UNITS"),ie("SDL_canPlayWithWebAudio"),ie("SDL_numSimultaneouslyQueuedBuffers"),ie("INITIAL_MEMORY"),ie("wasmMemory"),ie("arguments"),ie("buffer"),ie("canvas"),ie("doNotCaptureKeyboard"),ie("dynamicLibraries"),ie("elementPointerLock"),ie("extraStackTrace"),ie("forcedAspectRatio"),ie("keyboardListeningElement"),ie("freePreloadedMediaOnUse"),ie("loadSplitModule"),ie("logReadFiles"),ie("mainScriptUrlOrBlob"),ie("mem"),ie("monitorRunDependencies"),ie("noExitRuntime"),ie("noInitialRun"),ie("onAbort"),ie("onCustomMessage"),ie("onExit"),ie("onFree"),ie("onFullScreen"),ie("onMalloc"),ie("onRealloc"),ie("onRuntimeInitialized"),ie("postMainLoop"),ie("postRun"),ie("preInit"),ie("preMainLoop"),ie("preRun"),ie("preinitializedWebGLContext"),ie("preloadPlugins"),ie("print"),ie("printErr"),ie("setStatus"),ie("statusMessage"),ie("stderr"),ie("stdin"),ie("stdout"),ie("thisProgram"),ie("wasm"),ie("websocket"),ie("fetchSettings"),N(i.memoryInitializerPrefixURL===void 0,"Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),N(i.pthreadMainPrefixURL===void 0,"Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),N(i.cdInitializerPrefixURL===void 0,"Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),N(i.filePackagePrefixURL===void 0,"Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),N(i.read===void 0,"Module.read option was removed"),N(i.readAsync===void 0,"Module.readAsync option was removed (modify readAsync in JS)"),N(i.readBinary===void 0,"Module.readBinary option was removed (modify readBinary in JS)"),N(i.setWindowTitle===void 0,"Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),N(i.TOTAL_MEMORY===void 0,"Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),N(i.ENVIRONMENT===void 0,"Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),N(i.STACK_SIZE===void 0,"STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),i.stackSave=R,i.stackRestore=M,i.stackAlloc=Gi,i.setValue=function(n,o,s="i8"){switch(s.endsWith("*")&&(s="*"),s){case"i1":case"i8":ae((W(),Le),n>>>0,o);break;case"i16":ae((W(),Pt),n>>>1>>>0,o);break;case"i32":ae((W(),te),n>>>2>>>0,o);break;case"i64":ae((W(),pt),n>>>3>>>0,BigInt(o));break;case"float":ae((W(),yi),n>>>2>>>0,o);break;case"double":ae((W(),Ht),n>>>3>>>0,o);break;case"*":ae((W(),Ie),n>>>2>>>0,o);break;default:ke(`invalid type for setValue: ${s}`)}},i.getValue=function(n,o="i8"){switch(o.endsWith("*")&&(o="*"),o){case"i1":case"i8":return Q((W(),Le),n>>>0);case"i16":return Q((W(),Pt),n>>>1>>>0);case"i32":return Q((W(),te),n>>>2>>>0);case"i64":return Q((W(),pt),n>>>3>>>0);case"float":return Q((W(),yi),n>>>2>>>0);case"double":return Q((W(),Ht),n>>>3>>>0);case"*":return Q((W(),Ie),n>>>2>>>0);default:ke(`invalid type for getValue: ${o}`)}},i.UTF8ToString=Ne,i.stringToUTF8=zt,i.lengthBytesUTF8=ui,["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","strError","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","asmjsMangle","asyncLoad","mmapAlloc","HandleAllocator","getNativeTypeSize","getUniqueRunDependency","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","addOnPostRun","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","ccall","cwrap","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","intArrayFromString","intArrayToString","stringToAscii","stringToUTF8OnStack","writeArrayToMemory","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","registerBatteryEventCallback","setCanvasElementSizeCallingThread","setCanvasElementSizeMainThread","setCanvasElementSize","getCanvasSizeCallingThread","getCanvasSizeMainThread","getCanvasElementSize","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","initRandomFill","randomFill","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","emscripten_webgl_destroy_context_before_on_calling_thread","registerWebGlEventCallback","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","throwInternalError","whenDependentTypesAreResolved","getFunctionName","getFunctionArgsName","heap32VectorToArray","usesDestructorStack","createJsInvokerSignature","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","PureVirtualError","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","getBasestPointer","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","enumReadValueFromPointer","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","flushPendingDeletes","setDelayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","count_emval_handles"].forEach(function(n){Ue(n,()=>{var o=`\`${n}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,s=n;s.startsWith("_")||(s="$"+n),o+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${s}')`,Se(n)&&(o+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),vt(o)}),be(n)}),["run","addRunDependency","removeRunDependency","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP16","HEAPU16","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","setStackLimits","ERRNO_CODES","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","dynCallLegacy","dynCall","handleException","keepRuntimeAlive","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","alignMemory","wasmTable","noExitRuntime","addOnPreRun","freeTableIndexes","functionsInTableMap","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","stringToUTF8Array","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToNewUTF8","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","jsStackTrace","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","flush_NO_FILESYSTEM","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","runAndAbortIfError","Asyncify","Fibers","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","PThread","terminateWorker","cleanupThread","registerTLSInit","spawnThread","exitOnMainThread","proxyToMainThread","proxiedJSCallArgs","invokeEntryPoint","checkMailbox","InternalError","BindingError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","getTypeName","requireRegisteredType","EmValType","EmValOptionalType","createNamedFunction","embindRepr","registeredInstances","registeredPointers","registerType","integerReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","finalizationRegistry","detachFinalizer_deps","deletionQueue","delayFunction","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"].forEach(be),i.incrementExceptionRefcount=n=>gr(n),i.decrementExceptionRefcount=n=>yr(n),i.getExceptionMessage=va;var v_=[Xn,Ao,Do,Mo,Ro,zo,Uo,No,Lo,Vo,Wo,Go,Fo,Ho,qo,Ko,aa,sa,ma,ha,ya,ga,_a,ba],pr={7290880:(n,o,s,d,p)=>{if(i===void 0||!i.MountedFiles)return 1;let m=Ne(Number(n>>>0));m.startsWith("./")&&(m=m.substring(2));let y=i.MountedFiles.get(m);if(!y)return 2;let b=Number(o>>>0),v=Number(s>>>0),T=Number(d>>>0),E=p;if(b+v>y.byteLength)return 3;try{let U=y.subarray(b,b+v);switch(E){case 0:(W(),Je).set(U,T>>>0);break;case 1:i.webgpuUploadExternalBuffer?i.webgpuUploadExternalBuffer(T,U):i.jsepUploadExternalBuffer(T,U);break;default:return 4}return 0}catch{return 4}},7291704:(n,o,s)=>{i.webnnUploadTensor(n,(W(),Je).subarray(o>>>0,o+s>>>0))},7291768:()=>i.webnnReserveTensorId(),7291810:n=>{i.webnnReleaseTensorId(n)},7291847:(n,o,s,d,p,m,y,b,v)=>{i.jsepCreateKernel("Attention",n,{numHeads:o,isUnidirectional:s,maskFilterValue:d,scale:p,doRotary:m,qkvHiddenSizes:y?Array.from((W(),te).subarray(Number(b)>>>0,Number(b)+y>>>0)):[],pastPresentShareBuffer:!!v})},7292119:n=>{i.jsepReleaseKernel(n)},7292153:(n,o)=>i.jsepRunKernel(Number(n),Number(o),i.jsepSessionState.sessionHandle,i.jsepSessionState.errors),7292281:n=>{i.jsepCreateKernel("BiasAdd",n,void 0)},7292336:n=>{i.jsepCreateKernel("BiasSplitGelu",n,void 0)},7292397:n=>{i.jsepCreateKernel("FastGelu",n,void 0)},7292453:(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z)=>{i.jsepCreateKernel("Conv",n,{format:U?"NHWC":"NCHW",auto_pad:o,dilations:s?Array.from((W(),te).subarray(Number(s)>>>0,Number(d)>>>0)):[],group:p,kernel_shape:m?Array.from((W(),te).subarray(Number(m)>>>0,Number(y)>>>0)):[],pads:b?Array.from((W(),te).subarray(Number(b)>>>0,Number(v)>>>0)):[],strides:T?Array.from((W(),te).subarray(Number(T)>>>0,Number(E)>>>0)):[],w_is_const:()=>!!Q((W(),Le),Number(L)>>>0),activation:Ne(H),activation_params:K?Array.from((W(),yi).subarray(Number(K)>>>0,Number(Z)>>>0)):[]})},7293037:n=>{i.jsepCreateKernel("Gelu",n,void 0)},7293089:(n,o,s,d,p,m,y,b,v)=>{i.jsepCreateKernel("GroupQueryAttention",n,{numHeads:o,kvNumHeads:s,scale:d,softcap:p,doRotary:m,rotaryInterleaved:y,smoothSoftmax:b,localWindowSize:v})},7293306:(n,o,s,d)=>{i.jsepCreateKernel("LayerNormalization",n,{axis:o,epsilon:s,simplified:!!d})},7293417:(n,o,s,d)=>{i.jsepCreateKernel("LayerNormalization",n,{axis:o,epsilon:s,simplified:!!d})},7293528:(n,o,s,d,p,m)=>{i.jsepCreateKernel("MatMulNBits",n,{k:o,n:s,accuracyLevel:d,bits:p,blockSize:m})},7293655:(n,o,s,d,p,m)=>{i.jsepCreateKernel("MultiHeadAttention",n,{numHeads:o,isUnidirectional:s,maskFilterValue:d,scale:p,doRotary:m})},7293814:(n,o)=>{i.jsepCreateKernel("QuickGelu",n,{alpha:o})},7293878:(n,o,s,d,p)=>{i.jsepCreateKernel("RotaryEmbedding",n,{interleaved:!!o,numHeads:s,rotaryEmbeddingDim:d,scale:p})},7294017:(n,o,s)=>{i.jsepCreateKernel("SkipLayerNormalization",n,{epsilon:o,simplified:!!s})},7294119:(n,o,s)=>{i.jsepCreateKernel("SkipLayerNormalization",n,{epsilon:o,simplified:!!s})},7294221:(n,o,s,d)=>{i.jsepCreateKernel("GatherBlockQuantized",n,{gatherAxis:o,quantizeAxis:s,blockSize:d})},7294342:n=>i.jsepAlloc(n),7294375:n=>i.jsepFree(n),7294407:(n,o,s)=>{i.jsepCopy(Number(n),Number(o),Number(s),!0)},7294470:(n,o,s)=>{i.jsepCopy(Number(n),Number(o),Number(s))},7294527:n=>{i.jsepCreateKernel("Abs",n,void 0)},7294578:n=>{i.jsepCreateKernel("Neg",n,void 0)},7294629:n=>{i.jsepCreateKernel("Floor",n,void 0)},7294682:n=>{i.jsepCreateKernel("Ceil",n,void 0)},7294734:n=>{i.jsepCreateKernel("Reciprocal",n,void 0)},7294792:n=>{i.jsepCreateKernel("Sqrt",n,void 0)},7294844:n=>{i.jsepCreateKernel("Exp",n,void 0)},7294895:n=>{i.jsepCreateKernel("Erf",n,void 0)},7294946:n=>{i.jsepCreateKernel("Sigmoid",n,void 0)},7295001:(n,o,s)=>{i.jsepCreateKernel("HardSigmoid",n,{alpha:o,beta:s})},7295080:n=>{i.jsepCreateKernel("Log",n,void 0)},7295131:n=>{i.jsepCreateKernel("Sin",n,void 0)},7295182:n=>{i.jsepCreateKernel("Cos",n,void 0)},7295233:n=>{i.jsepCreateKernel("Tan",n,void 0)},7295284:n=>{i.jsepCreateKernel("Asin",n,void 0)},7295336:n=>{i.jsepCreateKernel("Acos",n,void 0)},7295388:n=>{i.jsepCreateKernel("Atan",n,void 0)},7295440:n=>{i.jsepCreateKernel("Sinh",n,void 0)},7295492:n=>{i.jsepCreateKernel("Cosh",n,void 0)},7295544:n=>{i.jsepCreateKernel("Asinh",n,void 0)},7295597:n=>{i.jsepCreateKernel("Acosh",n,void 0)},7295650:n=>{i.jsepCreateKernel("Atanh",n,void 0)},7295703:n=>{i.jsepCreateKernel("Tanh",n,void 0)},7295755:n=>{i.jsepCreateKernel("Not",n,void 0)},7295806:(n,o,s)=>{i.jsepCreateKernel("Clip",n,{min:o,max:s})},7295875:n=>{i.jsepCreateKernel("Clip",n,void 0)},7295927:(n,o)=>{i.jsepCreateKernel("Elu",n,{alpha:o})},7295985:n=>{i.jsepCreateKernel("Gelu",n,void 0)},7296037:n=>{i.jsepCreateKernel("Relu",n,void 0)},7296089:(n,o)=>{i.jsepCreateKernel("LeakyRelu",n,{alpha:o})},7296153:(n,o)=>{i.jsepCreateKernel("ThresholdedRelu",n,{alpha:o})},7296223:(n,o)=>{i.jsepCreateKernel("Cast",n,{to:o})},7296281:n=>{i.jsepCreateKernel("Add",n,void 0)},7296332:n=>{i.jsepCreateKernel("Sub",n,void 0)},7296383:n=>{i.jsepCreateKernel("Mul",n,void 0)},7296434:n=>{i.jsepCreateKernel("Div",n,void 0)},7296485:n=>{i.jsepCreateKernel("Pow",n,void 0)},7296536:n=>{i.jsepCreateKernel("Equal",n,void 0)},7296589:n=>{i.jsepCreateKernel("Greater",n,void 0)},7296644:n=>{i.jsepCreateKernel("GreaterOrEqual",n,void 0)},7296706:n=>{i.jsepCreateKernel("Less",n,void 0)},7296758:n=>{i.jsepCreateKernel("LessOrEqual",n,void 0)},7296817:(n,o,s,d,p)=>{i.jsepCreateKernel("ReduceMean",n,{keepDims:!!o,noopWithEmptyAxes:!!s,axes:d?Array.from((W(),te).subarray(Number(d)>>>0,Number(p)>>>0)):[]})},7296992:(n,o,s,d,p)=>{i.jsepCreateKernel("ReduceMax",n,{keepDims:!!o,noopWithEmptyAxes:!!s,axes:d?Array.from((W(),te).subarray(Number(d)>>>0,Number(p)>>>0)):[]})},7297166:(n,o,s,d,p)=>{i.jsepCreateKernel("ReduceMin",n,{keepDims:!!o,noopWithEmptyAxes:!!s,axes:d?Array.from((W(),te).subarray(Number(d)>>>0,Number(p)>>>0)):[]})},7297340:(n,o,s,d,p)=>{i.jsepCreateKernel("ReduceProd",n,{keepDims:!!o,noopWithEmptyAxes:!!s,axes:d?Array.from((W(),te).subarray(Number(d)>>>0,Number(p)>>>0)):[]})},7297515:(n,o,s,d,p)=>{i.jsepCreateKernel("ReduceSum",n,{keepDims:!!o,noopWithEmptyAxes:!!s,axes:d?Array.from((W(),te).subarray(Number(d)>>>0,Number(p)>>>0)):[]})},7297689:(n,o,s,d,p)=>{i.jsepCreateKernel("ReduceL1",n,{keepDims:!!o,noopWithEmptyAxes:!!s,axes:d?Array.from((W(),te).subarray(Number(d)>>>0,Number(p)>>>0)):[]})},7297862:(n,o,s,d,p)=>{i.jsepCreateKernel("ReduceL2",n,{keepDims:!!o,noopWithEmptyAxes:!!s,axes:d?Array.from((W(),te).subarray(Number(d)>>>0,Number(p)>>>0)):[]})},7298035:(n,o,s,d,p)=>{i.jsepCreateKernel("ReduceLogSum",n,{keepDims:!!o,noopWithEmptyAxes:!!s,axes:d?Array.from((W(),te).subarray(Number(d)>>>0,Number(p)>>>0)):[]})},7298212:(n,o,s,d,p)=>{i.jsepCreateKernel("ReduceSumSquare",n,{keepDims:!!o,noopWithEmptyAxes:!!s,axes:d?Array.from((W(),te).subarray(Number(d)>>>0,Number(p)>>>0)):[]})},7298392:(n,o,s,d,p)=>{i.jsepCreateKernel("ReduceLogSumExp",n,{keepDims:!!o,noopWithEmptyAxes:!!s,axes:d?Array.from((W(),te).subarray(Number(d)>>>0,Number(p)>>>0)):[]})},7298572:n=>{i.jsepCreateKernel("Where",n,void 0)},7298625:(n,o,s)=>{i.jsepCreateKernel("Transpose",n,{perm:o?Array.from((W(),te).subarray(Number(o)>>>0,Number(s)>>>0)):[]})},7298749:(n,o,s,d)=>{i.jsepCreateKernel("DepthToSpace",n,{blocksize:o,mode:Ne(s),format:d?"NHWC":"NCHW"})},7298882:(n,o,s,d)=>{i.jsepCreateKernel("DepthToSpace",n,{blocksize:o,mode:Ne(s),format:d?"NHWC":"NCHW"})},7299015:(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K)=>{i.jsepCreateKernel("ConvTranspose",n,{format:v?"NHWC":"NCHW",autoPad:o,dilations:[s],group:d,kernelShape:[p],pads:[m,y],strides:[b],wIsConst:()=>!!Q((W(),Le),T>>>0),outputPadding:E?Array.from((W(),te).subarray(Number(E)>>>0,Number(U)>>>0)):[],outputShape:L?Array.from((W(),te).subarray(Number(L)>>>0,Number(H)>>>0)):[],activation:Ne(K)})},7299448:(n,o,s,d,p,m,y,b,v,T,E,U,L,H)=>{i.jsepCreateKernel("ConvTranspose",n,{format:b?"NHWC":"NCHW",autoPad:o,dilations:Array.from((W(),te).subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),group:d,kernelShape:Array.from((W(),te).subarray(Number(p)>>>0,2+(Number(p)>>>0)>>>0)),pads:Array.from((W(),te).subarray(Number(m)>>>0,4+(Number(m)>>>0)>>>0)),strides:Array.from((W(),te).subarray(Number(y)>>>0,2+(Number(y)>>>0)>>>0)),wIsConst:()=>!!Q((W(),Le),v>>>0),outputPadding:T?Array.from((W(),te).subarray(Number(T)>>>0,Number(E)>>>0)):[],outputShape:U?Array.from((W(),te).subarray(Number(U)>>>0,Number(L)>>>0)):[],activation:Ne(H)})},7300109:(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K)=>{i.jsepCreateKernel("ConvTranspose",n,{format:v?"NHWC":"NCHW",autoPad:o,dilations:[s],group:d,kernelShape:[p],pads:[m,y],strides:[b],wIsConst:()=>!!Q((W(),Le),T>>>0),outputPadding:E?Array.from((W(),te).subarray(Number(E)>>>0,Number(U)>>>0)):[],outputShape:L?Array.from((W(),te).subarray(Number(L)>>>0,Number(H)>>>0)):[],activation:Ne(K)})},7300542:(n,o,s,d,p,m,y,b,v,T,E,U,L,H)=>{i.jsepCreateKernel("ConvTranspose",n,{format:b?"NHWC":"NCHW",autoPad:o,dilations:Array.from((W(),te).subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),group:d,kernelShape:Array.from((W(),te).subarray(Number(p)>>>0,2+(Number(p)>>>0)>>>0)),pads:Array.from((W(),te).subarray(Number(m)>>>0,4+(Number(m)>>>0)>>>0)),strides:Array.from((W(),te).subarray(Number(y)>>>0,2+(Number(y)>>>0)>>>0)),wIsConst:()=>!!Q((W(),Le),v>>>0),outputPadding:T?Array.from((W(),te).subarray(Number(T)>>>0,Number(E)>>>0)):[],outputShape:U?Array.from((W(),te).subarray(Number(U)>>>0,Number(L)>>>0)):[],activation:Ne(H)})},7301203:(n,o)=>{i.jsepCreateKernel("GlobalAveragePool",n,{format:o?"NHWC":"NCHW"})},7301294:(n,o,s,d,p,m,y,b,v,T,E,U,L,H)=>{i.jsepCreateKernel("AveragePool",n,{format:H?"NHWC":"NCHW",auto_pad:o,ceil_mode:s,count_include_pad:d,storage_order:p,dilations:m?Array.from((W(),te).subarray(Number(m)>>>0,Number(y)>>>0)):[],kernel_shape:b?Array.from((W(),te).subarray(Number(b)>>>0,Number(v)>>>0)):[],pads:T?Array.from((W(),te).subarray(Number(T)>>>0,Number(E)>>>0)):[],strides:U?Array.from((W(),te).subarray(Number(U)>>>0,Number(L)>>>0)):[]})},7301773:(n,o)=>{i.jsepCreateKernel("GlobalAveragePool",n,{format:o?"NHWC":"NCHW"})},7301864:(n,o,s,d,p,m,y,b,v,T,E,U,L,H)=>{i.jsepCreateKernel("AveragePool",n,{format:H?"NHWC":"NCHW",auto_pad:o,ceil_mode:s,count_include_pad:d,storage_order:p,dilations:m?Array.from((W(),te).subarray(Number(m)>>>0,Number(y)>>>0)):[],kernel_shape:b?Array.from((W(),te).subarray(Number(b)>>>0,Number(v)>>>0)):[],pads:T?Array.from((W(),te).subarray(Number(T)>>>0,Number(E)>>>0)):[],strides:U?Array.from((W(),te).subarray(Number(U)>>>0,Number(L)>>>0)):[]})},7302343:(n,o)=>{i.jsepCreateKernel("GlobalMaxPool",n,{format:o?"NHWC":"NCHW"})},7302430:(n,o,s,d,p,m,y,b,v,T,E,U,L,H)=>{i.jsepCreateKernel("MaxPool",n,{format:H?"NHWC":"NCHW",auto_pad:o,ceil_mode:s,count_include_pad:d,storage_order:p,dilations:m?Array.from((W(),te).subarray(Number(m)>>>0,Number(y)>>>0)):[],kernel_shape:b?Array.from((W(),te).subarray(Number(b)>>>0,Number(v)>>>0)):[],pads:T?Array.from((W(),te).subarray(Number(T)>>>0,Number(E)>>>0)):[],strides:U?Array.from((W(),te).subarray(Number(U)>>>0,Number(L)>>>0)):[]})},7302905:(n,o)=>{i.jsepCreateKernel("GlobalMaxPool",n,{format:o?"NHWC":"NCHW"})},7302992:(n,o,s,d,p,m,y,b,v,T,E,U,L,H)=>{i.jsepCreateKernel("MaxPool",n,{format:H?"NHWC":"NCHW",auto_pad:o,ceil_mode:s,count_include_pad:d,storage_order:p,dilations:m?Array.from((W(),te).subarray(Number(m)>>>0,Number(y)>>>0)):[],kernel_shape:b?Array.from((W(),te).subarray(Number(b)>>>0,Number(v)>>>0)):[],pads:T?Array.from((W(),te).subarray(Number(T)>>>0,Number(E)>>>0)):[],strides:U?Array.from((W(),te).subarray(Number(U)>>>0,Number(L)>>>0)):[]})},7303467:(n,o,s,d,p)=>{i.jsepCreateKernel("Gemm",n,{alpha:o,beta:s,transA:d,transB:p})},7303571:n=>{i.jsepCreateKernel("MatMul",n,void 0)},7303625:(n,o,s,d)=>{i.jsepCreateKernel("ArgMax",n,{keepDims:!!o,selectLastIndex:!!s,axis:d})},7303733:(n,o,s,d)=>{i.jsepCreateKernel("ArgMin",n,{keepDims:!!o,selectLastIndex:!!s,axis:d})},7303841:(n,o)=>{i.jsepCreateKernel("Softmax",n,{axis:o})},7303904:(n,o)=>{i.jsepCreateKernel("Concat",n,{axis:o})},7303964:(n,o,s,d,p)=>{i.jsepCreateKernel("Split",n,{axis:o,numOutputs:s,splitSizes:d?Array.from((W(),te).subarray(Number(d)>>>0,Number(p)>>>0)):[]})},7304120:n=>{i.jsepCreateKernel("Expand",n,void 0)},7304174:(n,o)=>{i.jsepCreateKernel("Gather",n,{axis:Number(o)})},7304245:(n,o)=>{i.jsepCreateKernel("GatherElements",n,{axis:Number(o)})},7304324:(n,o)=>{i.jsepCreateKernel("GatherND",n,{batch_dims:Number(o)})},7304403:(n,o,s,d,p,m,y,b,v,T,E)=>{i.jsepCreateKernel("Resize",n,{antialias:o,axes:s?Array.from((W(),te).subarray(Number(s)>>>0,Number(d)>>>0)):[],coordinateTransformMode:Ne(p),cubicCoeffA:m,excludeOutside:y,extrapolationValue:b,keepAspectRatioPolicy:Ne(v),mode:Ne(T),nearestMode:Ne(E)})},7304765:(n,o,s,d,p,m,y)=>{i.jsepCreateKernel("Slice",n,{starts:o?Array.from((W(),te).subarray(Number(o)>>>0,Number(s)>>>0)):[],ends:d?Array.from((W(),te).subarray(Number(d)>>>0,Number(p)>>>0)):[],axes:m?Array.from((W(),te).subarray(Number(m)>>>0,Number(y)>>>0)):[]})},7305029:n=>{i.jsepCreateKernel("Tile",n,void 0)},7305081:(n,o,s)=>{i.jsepCreateKernel("InstanceNormalization",n,{epsilon:o,format:s?"NHWC":"NCHW"})},7305195:(n,o,s)=>{i.jsepCreateKernel("InstanceNormalization",n,{epsilon:o,format:s?"NHWC":"NCHW"})},7305309:n=>{i.jsepCreateKernel("Range",n,void 0)},7305362:(n,o)=>{i.jsepCreateKernel("Einsum",n,{equation:Ne(o)})},7305443:(n,o,s,d,p)=>{i.jsepCreateKernel("Pad",n,{mode:o,value:s,pads:d?Array.from((W(),te).subarray(Number(d)>>>0,Number(p)>>>0)):[]})},7305586:(n,o,s,d,p,m)=>{i.jsepCreateKernel("BatchNormalization",n,{epsilon:o,momentum:s,spatial:!!p,trainingMode:!!d,format:m?"NHWC":"NCHW"})},7305755:(n,o,s,d,p,m)=>{i.jsepCreateKernel("BatchNormalization",n,{epsilon:o,momentum:s,spatial:!!p,trainingMode:!!d,format:m?"NHWC":"NCHW"})},7305924:(n,o,s)=>{i.jsepCreateKernel("CumSum",n,{exclusive:Number(o),reverse:Number(s)})},7306021:(n,o,s)=>{i.jsepCreateKernel("DequantizeLinear",n,{axis:o,blockSize:s})},7306111:(n,o,s,d,p)=>{i.jsepCreateKernel("GridSample",n,{align_corners:o,mode:Ne(s),padding_mode:Ne(d),format:p?"NHWC":"NCHW"})},7306281:(n,o,s,d,p)=>{i.jsepCreateKernel("GridSample",n,{align_corners:o,mode:Ne(s),padding_mode:Ne(d),format:p?"NHWC":"NCHW"})},7306451:(n,o)=>{i.jsepCreateKernel("ScatterND",n,{reduction:Ne(o)})},7306536:()=>{i.jsepCaptureBegin()},7306567:()=>{i.jsepCaptureEnd()},7306596:()=>{i.jsepReplay()},7306621:()=>typeof wasmOffsetConverter<"u"};function w_(n,o,s){return de.handleAsync(async()=>{await i.jsepCopyAsync(Number(n),Number(o),Number(s))})}function $_(){return typeof wasmOffsetConverter<"u"}var xi,wa,$a=C("___getTypeName"),Ca=C("__embind_initialize_bindings"),Si=(i._OrtInit=C("_OrtInit"),i._OrtGetLastError=C("_OrtGetLastError"),i._OrtCreateSessionOptions=C("_OrtCreateSessionOptions"),i._OrtAppendExecutionProvider=C("_OrtAppendExecutionProvider"),i._OrtAddFreeDimensionOverride=C("_OrtAddFreeDimensionOverride"),i._OrtAddSessionConfigEntry=C("_OrtAddSessionConfigEntry"),i._OrtReleaseSessionOptions=C("_OrtReleaseSessionOptions"),i._OrtCreateSession=C("_OrtCreateSession"),i._OrtReleaseSession=C("_OrtReleaseSession"),i._OrtGetInputOutputCount=C("_OrtGetInputOutputCount"),i._OrtGetInputOutputMetadata=C("_OrtGetInputOutputMetadata"),i._OrtFree=C("_OrtFree"),i._OrtCreateTensor=C("_OrtCreateTensor"),i._OrtGetTensorData=C("_OrtGetTensorData"),i._OrtReleaseTensor=C("_OrtReleaseTensor"),i._OrtCreateRunOptions=C("_OrtCreateRunOptions"),i._OrtAddRunConfigEntry=C("_OrtAddRunConfigEntry"),i._OrtReleaseRunOptions=C("_OrtReleaseRunOptions"),i._OrtCreateBinding=C("_OrtCreateBinding"),i._OrtBindInput=C("_OrtBindInput"),i._OrtBindOutput=C("_OrtBindOutput"),i._OrtClearBoundOutputs=C("_OrtClearBoundOutputs"),i._OrtReleaseBinding=C("_OrtReleaseBinding"),i._OrtRunWithBinding=C("_OrtRunWithBinding"),i._OrtRun=C("_OrtRun"),i._OrtEndProfiling=C("_OrtEndProfiling"),C("___cxa_free_exception"),i._JsepOutput=C("_JsepOutput"),i._JsepGetNodeName=C("_JsepGetNodeName"),C("_pthread_self")),dt=i._free=C("_free"),xa=C("_fflush"),Ti=i._malloc=C("_malloc"),fr=(C("__emscripten_tls_init"),C("__emscripten_thread_init")),Sa=C("__emscripten_thread_crashed"),Ii=C("_emscripten_stack_get_end"),Ai=C("_emscripten_stack_get_base"),Ta=C("__emscripten_run_js_on_main_thread"),Ia=C("__emscripten_thread_free_data"),mr=C("__emscripten_thread_exit"),Aa=C("__emscripten_check_mailbox"),ka=C("_sbrk"),z=(C("_emscripten_get_sbrk_ptr"),C("_setThrew")),ja=C("__emscripten_tempret_set"),Ea=C("_emscripten_stack_init"),Pa=C("_emscripten_stack_set_limits"),Oa=(C("_emscripten_stack_get_free"),C("__emscripten_stack_restore")),Da=C("__emscripten_stack_alloc"),hr=C("_emscripten_stack_get_current"),yr=C("___cxa_decrement_exception_refcount"),gr=C("___cxa_increment_exception_refcount"),Ba=C("___get_exception_message"),Ma=C("___cxa_can_catch"),Ra=C("___cxa_get_exception_ptr"),za=i.___set_stack_limits=C("___set_stack_limits"),Ua=C("dynCall_vi"),Na=C("dynCall_iii"),_r=C("dynCall_ii"),La=C("dynCall_vii"),Va=C("dynCall_iiii"),Wa=C("dynCall_iiiiiii"),Ga=C("dynCall_v"),Fa=C("dynCall_viii"),Ha=C("dynCall_iiiiii"),qa=C("dynCall_iiiii"),Ka=C("dynCall_viiii"),Ya=C("dynCall_ji"),Za=C("dynCall_viijiiiiiiiiiiiiii"),Qa=C("dynCall_viiiiii"),Ja=C("dynCall_viiiji"),Xa=C("dynCall_viiiii"),es=C("dynCall_djj"),ts=C("dynCall_jii"),is=C("dynCall_jiji"),ns=C("dynCall_iiiiiij"),rs=C("dynCall_i"),os=C("dynCall_iij"),as=C("dynCall_vij"),ss=C("dynCall_viiijii"),us=C("dynCall_viiiiiii"),ls=C("dynCall_jj"),ds=C("dynCall_viiiiiiii"),cs=C("dynCall_vif"),ps=C("dynCall_iiiiiiiij"),fs=C("dynCall_iiiiiiii"),ms=C("dynCall_iiji"),hs=C("dynCall_viiiijii"),ys=C("dynCall_ij"),gs=C("dynCall_iji"),_s=C("dynCall_viiijiii"),bs=C("dynCall_vijii"),vs=C("dynCall_viijj"),ws=C("dynCall_fii"),$s=C("dynCall_viiiiiiiiii"),Cs=C("dynCall_fi"),xs=C("dynCall_jiii"),Ss=C("dynCall_vid"),Ts=C("dynCall_dii"),Is=C("dynCall_viiiiiiiii"),As=C("dynCall_viiiiiiiiiii"),ks=C("dynCall_iiiiiiiiii"),js=C("dynCall_iiiiiiiiiii"),Es=C("dynCall_iiiiijiii"),Ps=C("dynCall_iiiiiiiii"),Os=C("dynCall_viij"),Ds=C("dynCall_viif"),Bs=C("dynCall_iiiiijiiiii"),Ms=C("dynCall_iiiijjiii"),Rs=C("dynCall_jjj"),zs=C("dynCall_viiji"),Us=C("dynCall_vijiii"),Ns=C("dynCall_iiiiiijji"),Ls=C("dynCall_iidi"),Vs=C("dynCall_viiiiiiiiiiii"),Ws=C("dynCall_iiiiiiiiiiiiii"),Gs=C("dynCall_viiiiiiiiiiiiii"),Fs=C("dynCall_viiiiiiiiiiiiiiii"),Hs=C("dynCall_jiiii"),qs=C("dynCall_viiiiiiiiiiiiiiiiiii"),Ks=C("dynCall_jiij"),Ys=C("dynCall_iiiij"),Zs=C("dynCall_iiif"),Qs=C("dynCall_iiij"),Js=C("dynCall_if"),Xs=C("dynCall_vidi"),eu=C("dynCall_fiff"),tu=C("dynCall_fiii"),iu=C("dynCall_viiiiiiiiiiiii"),nu=C("dynCall_vjiij"),ru=C("dynCall_viiiiij"),ou=C("dynCall_jij"),au=C("dynCall_viiij"),su=C("dynCall_ijiiii"),uu=C("dynCall_vijiji"),lu=C("dynCall_vjiiiii"),du=C("dynCall_vjiiiiii"),cu=C("dynCall_vijiiiiii"),pu=C("dynCall_vjiiiiiii"),fu=C("dynCall_iiiiiji"),mu=C("dynCall_viijjj"),hu=C("dynCall_viifiifijjjii"),yu=C("dynCall_vifiifiiii"),gu=C("dynCall_vifiifiiiiiii"),_u=C("dynCall_vjifiii"),bu=C("dynCall_viidi"),vu=C("dynCall_iffi"),wu=C("dynCall_viiiiiifii"),$u=C("dynCall_iiiiidfffiii"),Cu=C("dynCall_viiiiiiiiiiiiiiiiiiiiiii"),xu=C("dynCall_viiiiiiiif"),Su=C("dynCall_viiiiiiiiiiiiiiiifiiii"),Tu=C("dynCall_viiiiiiiiiiiiiiiiii"),Iu=C("dynCall_viiifii"),Au=C("dynCall_viiiiifiiiiii"),ku=C("dynCall_viiff"),ju=C("dynCall_viiiiiff"),Eu=C("dynCall_viiiiff"),Pu=(C("dynCall_ffff"),C("dynCall_viiiff")),Ou=C("dynCall_viiiiiiff"),Du=(C("dynCall_fiiii"),C("dynCall_vfiii")),Bu=C("dynCall_viiiiif"),Mu=C("dynCall_iiiiiiiiiiiiiiiiifii"),Ru=C("dynCall_iijjjj"),zu=C("dynCall_viijjiiiiiiiii"),Uu=C("dynCall_vijjjiiji"),Nu=C("dynCall_viijiiiiiiijjii"),Lu=C("dynCall_iif"),Vu=C("dynCall_viiiiidiidii"),Wu=C("dynCall_viiifiifii"),Gu=C("dynCall_vijjjjiii"),Fu=C("dynCall_j"),Hu=C("dynCall_iidd"),qu=C("dynCall_iijj"),Ku=C("dynCall_viid"),Yu=C("dynCall_viffiii"),Zu=C("dynCall_viiijjjii"),Qu=C("dynCall_viiiiijjj"),Ju=C("dynCall_iiiiiiiiiiiiiiiiii"),Xu=C("dynCall_viiiiiif"),el=C("dynCall_iiiiiiiiiiiiiiiiiiii"),tl=C("dynCall_iiiiiiiiiiiiiiiiiiiiiii"),il=C("dynCall_viiiiiiiiiiiiiii"),nl=C("dynCall_iiiiiiiiiiiiiiiiiiiiiiii"),rl=C("dynCall_viiiiiiiiiiiiiiiiiiii"),ol=C("dynCall_viiiiiiiiiiiiiifi"),al=C("dynCall_viiiijiiiiiiif"),sl=C("dynCall_viiiiifiifii"),ul=C("dynCall_viiiiifiifiiii"),ll=C("dynCall_viifiii"),dl=C("dynCall_viiiifiiifiii"),cl=C("dynCall_viiiiidiidiiii"),pl=C("dynCall_viiiiiiiiiiiiiiiii"),fl=C("dynCall_viiiiiiiiiiiiiiiiiiiiii"),ml=C("dynCall_di"),hl=C("dynCall_viiiiifiiiifiii"),yl=C("dynCall_iiff"),gl=C("dynCall_viiifiiiiiifiiii"),_l=C("dynCall_iiiiiiiiiiiiiiiiiifi"),bl=C("dynCall_viiiiiiiijjj"),vl=C("dynCall_viiiiiijjjjjii"),wl=C("dynCall_vijj"),$l=C("dynCall_viji"),Cl=C("dynCall_vifi"),xl=C("dynCall_vijjjjjjjjjjjjjii"),Sl=C("dynCall_viiijjiiiiiii"),Tl=C("dynCall_viijiiiijiii"),Il=C("dynCall_viifjjjijiiiii"),Al=C("dynCall_vjjjjjjffffjji"),kl=C("dynCall_vjjjjjjddddjji"),jl=C("dynCall_viifjjijiiii"),El=C("dynCall_viiiiiiifiiii"),Pl=C("dynCall_viiiiiid"),Ol=C("dynCall_viiiiiiidiiii"),Dl=C("dynCall_viiiiiiiiiiiijfii"),Bl=C("dynCall_viiiiiji"),Ml=C("dynCall_viiijjjjji"),Rl=C("dynCall_vifii"),zl=C("dynCall_vifiii"),Ul=C("dynCall_iiijiiiii"),Nl=C("dynCall_vj"),Ll=C("dynCall_viiiij"),Vl=C("dynCall_iiiiiiiiiiiiifii"),Wl=C("dynCall_viiijjjfffi"),Gl=C("dynCall_viiijiijjj"),Fl=C("dynCall_viijjjj"),Hl=C("dynCall_viiiiiiiiifiii"),ql=C("dynCall_vjjjjjjffiifiiiiii"),Kl=C("dynCall_viiiiiiffiifiiiii"),Yl=C("dynCall_viiiiiiffifiiiii"),Zl=C("dynCall_vjjjjjjjjfffiifiiiiii"),Ql=C("dynCall_vjjjjjjjjfffiifiiiii"),Jl=C("dynCall_vjjjjjjfffifiiiiiii"),Xl=C("dynCall_vjjjjjjfffifiiiii"),ed=C("dynCall_fffffff"),td=C("dynCall_jfi"),id=C("dynCall_vijjjjjjifiiii"),nd=C("dynCall_vjjjjjiiiii"),rd=C("dynCall_vjjjjfiii"),od=C("dynCall_fijjjjifi"),ad=C("dynCall_vijjfffiii"),sd=C("dynCall_vijiiiiiiii"),ud=(C("dynCall_fif"),C("dynCall_iiiiiiiiiiii")),ld=C("dynCall_viiijj"),dd=C("dynCall_viiiiijiiiiii"),cd=C("dynCall_viiiiijjiiiii"),pd=C("dynCall_viiiiji"),fd=C("dynCall_viijjiii"),md=C("dynCall_iiiiji"),hd=C("dynCall_viijjjjjjjjjjjjjii"),yd=C("dynCall_viiiijiiiiiiii"),gd=C("dynCall_iijjjf"),_d=C("dynCall_viiiijjji"),bd=(C("dynCall_jjjjjj"),C("dynCall_jjjjjjj"),C("dynCall_viiijiiiiiiiii")),vd=C("dynCall_iiiijjj"),wd=C("dynCall_viijiiii"),$d=C("dynCall_iiijjii"),Cd=C("dynCall_iijjii"),xd=C("dynCall_viiiiiijjiiiii"),Sd=C("dynCall_viiiiiiiijiiiiii"),Td=C("dynCall_vjjii"),Id=C("dynCall_vjjjii"),Ad=C("dynCall_viiiiiiiifiiiifiiiii"),kd=C("dynCall_iiiiiiiiiiiii"),jd=C("dynCall_viiiiiifi"),Ed=C("dynCall_viiif"),Pd=C("dynCall_diii"),Od=C("dynCall_vijjjiii"),Dd=C("dynCall_viiiiiiiiijii"),Bd=C("dynCall_viiiiiiiiji"),Md=C("dynCall_vijfjiiiii"),Rd=C("dynCall_fj"),zd=C("dynCall_iiiijiiiijj"),Ud=C("dynCall_iiiiiiiiiiijiiii"),Nd=C("dynCall_iiiijiiiiiiiiii"),Ld=C("dynCall_jiiij"),Vd=C("dynCall_jiijj"),Wd=C("dynCall_iiiji"),Gd=C("dynCall_iiifi"),Fd=C("dynCall_iiijii"),Hd=C("dynCall_iiiiiiiiiji"),qd=C("dynCall_iiiiijji"),Kd=C("dynCall_iiiijjii"),Yd=C("dynCall_iiiijii"),Zd=C("dynCall_iiijiii"),Qd=C("dynCall_iiiiiiiiijii"),Jd=C("dynCall_iiiiiijjjii"),Xd=C("dynCall_iiiiiiiijjjfi"),ec=C("dynCall_iijiiii"),tc=C("dynCall_viiiijjj"),ic=C("dynCall_viiiijj"),nc=C("dynCall_iijjjii"),rc=C("dynCall_iiiijjjiii"),oc=C("dynCall_iiiiiiiiiiiiiii"),ac=C("dynCall_iijjiii"),sc=C("dynCall_viijjjjiiiiiiiii"),uc=C("dynCall_viiiijjjj"),lc=C("dynCall_fiif"),dc=C("dynCall_viijjiiiiii"),cc=C("dynCall_viijjiiiiiiii"),pc=C("dynCall_ijii"),fc=C("dynCall_viiiiiij"),mc=C("dynCall_viiiiiiijiiii"),hc=C("dynCall_vijji"),yc=(C("dynCall_viijii"),C("dynCall_iidiiii"),C("dynCall_iiiiij")),gc=C("dynCall_iiiiid"),_c=(C("dynCall_iiiiijj"),C("dynCall_iiiiiijj"),C("_asyncify_start_unwind")),bc=C("_asyncify_stop_unwind"),vc=C("_asyncify_start_rewind"),wc=C("_asyncify_stop_rewind"),Ct=await async function(){function n(m,y){return Ct=m.exports,Ct=function(v){var T,E=L=>H=>L(H)>>>0,U=L=>()=>L()>>>0;return(v=Object.assign({},v)).__getTypeName=E(v.__getTypeName),v.pthread_self=U(v.pthread_self),v.malloc=E(v.malloc),v.emscripten_stack_get_end=U(v.emscripten_stack_get_end),v.emscripten_stack_get_base=U(v.emscripten_stack_get_base),v.sbrk=(T=v.sbrk,L=>T(L)>>>0),v._emscripten_stack_alloc=E(v._emscripten_stack_alloc),v.emscripten_stack_get_current=U(v.emscripten_stack_get_current),v.__cxa_get_exception_ptr=E(v.__cxa_get_exception_ptr),v}(Ct=de.instrumentWasmExports(Ct)),b=Ct._emscripten_tls_init,Ae.tlsInitFunctions.push(b),N(Ct.__indirect_function_table,"table not found in wasm exports"),O=y,function(v){$a=k("__getTypeName",1),Ca=k("_embind_initialize_bindings",0),i._OrtInit=k("OrtInit",2),i._OrtGetLastError=k("OrtGetLastError",2),i._OrtCreateSessionOptions=k("OrtCreateSessionOptions",10),i._OrtAppendExecutionProvider=k("OrtAppendExecutionProvider",5),i._OrtAddFreeDimensionOverride=k("OrtAddFreeDimensionOverride",3),i._OrtAddSessionConfigEntry=k("OrtAddSessionConfigEntry",3),i._OrtReleaseSessionOptions=k("OrtReleaseSessionOptions",1),i._OrtCreateSession=k("OrtCreateSession",3),i._OrtReleaseSession=k("OrtReleaseSession",1),i._OrtGetInputOutputCount=k("OrtGetInputOutputCount",3),i._OrtGetInputOutputMetadata=k("OrtGetInputOutputMetadata",4),i._OrtFree=k("OrtFree",1),i._OrtCreateTensor=k("OrtCreateTensor",6),i._OrtGetTensorData=k("OrtGetTensorData",5),i._OrtReleaseTensor=k("OrtReleaseTensor",1),i._OrtCreateRunOptions=k("OrtCreateRunOptions",4),i._OrtAddRunConfigEntry=k("OrtAddRunConfigEntry",3),i._OrtReleaseRunOptions=k("OrtReleaseRunOptions",1),i._OrtCreateBinding=k("OrtCreateBinding",1),i._OrtBindInput=k("OrtBindInput",3),i._OrtBindOutput=k("OrtBindOutput",4),i._OrtClearBoundOutputs=k("OrtClearBoundOutputs",1),i._OrtReleaseBinding=k("OrtReleaseBinding",1),i._OrtRunWithBinding=k("OrtRunWithBinding",5),i._OrtRun=k("OrtRun",8),i._OrtEndProfiling=k("OrtEndProfiling",1),k("__cxa_free_exception",1),i._JsepOutput=k("JsepOutput",3),i._JsepGetNodeName=k("JsepGetNodeName",1),Si=v.pthread_self,i._free=dt=k("free",1),xa=k("fflush",1),i._malloc=Ti=k("malloc",1),k("_emscripten_tls_init",0),fr=k("_emscripten_thread_init",6),Sa=k("_emscripten_thread_crashed",0),Ii=v.emscripten_stack_get_end,Ai=v.emscripten_stack_get_base,Ta=k("_emscripten_run_js_on_main_thread",5),Ia=k("_emscripten_thread_free_data",1),mr=k("_emscripten_thread_exit",1),Aa=k("_emscripten_check_mailbox",0),ka=k("sbrk",1),k("emscripten_get_sbrk_ptr",0),z=k("setThrew",2),ja=k("_emscripten_tempret_set",1),Ea=v.emscripten_stack_init,Pa=v.emscripten_stack_set_limits,v.emscripten_stack_get_free,Oa=v._emscripten_stack_restore,Da=v._emscripten_stack_alloc,hr=v.emscripten_stack_get_current,yr=k("__cxa_decrement_exception_refcount",1),gr=k("__cxa_increment_exception_refcount",1),Ba=k("__get_exception_message",3),Ma=k("__cxa_can_catch",3),Ra=k("__cxa_get_exception_ptr",1),i.___set_stack_limits=za=k("__set_stack_limits",2),B.vi=Ua=k("dynCall_vi",2),B.iii=Na=k("dynCall_iii",3),B.ii=_r=k("dynCall_ii",2),B.vii=La=k("dynCall_vii",3),B.iiii=Va=k("dynCall_iiii",4),B.iiiiiii=Wa=k("dynCall_iiiiiii",7),B.v=Ga=k("dynCall_v",1),B.viii=Fa=k("dynCall_viii",4),B.iiiiii=Ha=k("dynCall_iiiiii",6),B.iiiii=qa=k("dynCall_iiiii",5),B.viiii=Ka=k("dynCall_viiii",5),B.ji=Ya=k("dynCall_ji",2),B.viijiiiiiiiiiiiiii=Za=k("dynCall_viijiiiiiiiiiiiiii",18),B.viiiiii=Qa=k("dynCall_viiiiii",7),B.viiiji=Ja=k("dynCall_viiiji",6),B.viiiii=Xa=k("dynCall_viiiii",6),B.djj=es=k("dynCall_djj",3),B.jii=ts=k("dynCall_jii",3),B.jiji=is=k("dynCall_jiji",4),B.iiiiiij=ns=k("dynCall_iiiiiij",7),B.i=rs=k("dynCall_i",1),B.iij=os=k("dynCall_iij",3),B.vij=as=k("dynCall_vij",3),B.viiijii=ss=k("dynCall_viiijii",7),B.viiiiiii=us=k("dynCall_viiiiiii",8),B.jj=ls=k("dynCall_jj",2),B.viiiiiiii=ds=k("dynCall_viiiiiiii",9),B.vif=cs=k("dynCall_vif",3),B.iiiiiiiij=ps=k("dynCall_iiiiiiiij",9),B.iiiiiiii=fs=k("dynCall_iiiiiiii",8),B.iiji=ms=k("dynCall_iiji",4),B.viiiijii=hs=k("dynCall_viiiijii",8),B.ij=ys=k("dynCall_ij",2),B.iji=gs=k("dynCall_iji",3),B.viiijiii=_s=k("dynCall_viiijiii",8),B.vijii=bs=k("dynCall_vijii",5),B.viijj=vs=k("dynCall_viijj",5),B.fii=ws=k("dynCall_fii",3),B.viiiiiiiiii=$s=k("dynCall_viiiiiiiiii",11),B.fi=Cs=k("dynCall_fi",2),B.jiii=xs=k("dynCall_jiii",4),B.vid=Ss=k("dynCall_vid",3),B.dii=Ts=k("dynCall_dii",3),B.viiiiiiiii=Is=k("dynCall_viiiiiiiii",10),B.viiiiiiiiiii=As=k("dynCall_viiiiiiiiiii",12),B.iiiiiiiiii=ks=k("dynCall_iiiiiiiiii",10),B.iiiiiiiiiii=js=k("dynCall_iiiiiiiiiii",11),B.iiiiijiii=Es=k("dynCall_iiiiijiii",9),B.iiiiiiiii=Ps=k("dynCall_iiiiiiiii",9),B.viij=Os=k("dynCall_viij",4),B.viif=Ds=k("dynCall_viif",4),B.iiiiijiiiii=Bs=k("dynCall_iiiiijiiiii",11),B.iiiijjiii=Ms=k("dynCall_iiiijjiii",9),B.jjj=Rs=k("dynCall_jjj",3),B.viiji=zs=k("dynCall_viiji",5),B.vijiii=Us=k("dynCall_vijiii",6),B.iiiiiijji=Ns=k("dynCall_iiiiiijji",9),B.iidi=Ls=k("dynCall_iidi",4),B.viiiiiiiiiiii=Vs=k("dynCall_viiiiiiiiiiii",13),B.iiiiiiiiiiiiii=Ws=k("dynCall_iiiiiiiiiiiiii",14),B.viiiiiiiiiiiiii=Gs=k("dynCall_viiiiiiiiiiiiii",15),B.viiiiiiiiiiiiiiii=Fs=k("dynCall_viiiiiiiiiiiiiiii",17),B.jiiii=Hs=k("dynCall_jiiii",5),B.viiiiiiiiiiiiiiiiiii=qs=k("dynCall_viiiiiiiiiiiiiiiiiii",20),B.jiij=Ks=k("dynCall_jiij",4),B.iiiij=Ys=k("dynCall_iiiij",5),B.iiif=Zs=k("dynCall_iiif",4),B.iiij=Qs=k("dynCall_iiij",4),B.if=Js=k("dynCall_if",2),B.vidi=Xs=k("dynCall_vidi",4),B.fiff=eu=k("dynCall_fiff",4),B.fiii=tu=k("dynCall_fiii",4),B.viiiiiiiiiiiii=iu=k("dynCall_viiiiiiiiiiiii",14),B.vjiij=nu=k("dynCall_vjiij",5),B.viiiiij=ru=k("dynCall_viiiiij",7),B.jij=ou=k("dynCall_jij",3),B.viiij=au=k("dynCall_viiij",5),B.ijiiii=su=k("dynCall_ijiiii",6),B.vijiji=uu=k("dynCall_vijiji",6),B.vjiiiii=lu=k("dynCall_vjiiiii",7),B.vjiiiiii=du=k("dynCall_vjiiiiii",8),B.vijiiiiii=cu=k("dynCall_vijiiiiii",9),B.vjiiiiiii=pu=k("dynCall_vjiiiiiii",9),B.iiiiiji=fu=k("dynCall_iiiiiji",7),B.viijjj=mu=k("dynCall_viijjj",6),B.viifiifijjjii=hu=k("dynCall_viifiifijjjii",13),B.vifiifiiii=yu=k("dynCall_vifiifiiii",10),B.vifiifiiiiiii=gu=k("dynCall_vifiifiiiiiii",13),B.vjifiii=_u=k("dynCall_vjifiii",7),B.viidi=bu=k("dynCall_viidi",5),B.iffi=vu=k("dynCall_iffi",4),B.viiiiiifii=wu=k("dynCall_viiiiiifii",10),B.iiiiidfffiii=$u=k("dynCall_iiiiidfffiii",12),B.viiiiiiiiiiiiiiiiiiiiiii=Cu=k("dynCall_viiiiiiiiiiiiiiiiiiiiiii",24),B.viiiiiiiif=xu=k("dynCall_viiiiiiiif",10),B.viiiiiiiiiiiiiiiifiiii=Su=k("dynCall_viiiiiiiiiiiiiiiifiiii",22),B.viiiiiiiiiiiiiiiiii=Tu=k("dynCall_viiiiiiiiiiiiiiiiii",19),B.viiifii=Iu=k("dynCall_viiifii",7),B.viiiiifiiiiii=Au=k("dynCall_viiiiifiiiiii",13),B.viiff=ku=k("dynCall_viiff",5),B.viiiiiff=ju=k("dynCall_viiiiiff",8),B.viiiiff=Eu=k("dynCall_viiiiff",7),B.ffff=k("dynCall_ffff",4),B.viiiff=Pu=k("dynCall_viiiff",6),B.viiiiiiff=Ou=k("dynCall_viiiiiiff",9),B.fiiii=k("dynCall_fiiii",5),B.vfiii=Du=k("dynCall_vfiii",5),B.viiiiif=Bu=k("dynCall_viiiiif",7),B.iiiiiiiiiiiiiiiiifii=Mu=k("dynCall_iiiiiiiiiiiiiiiiifii",20),B.iijjjj=Ru=k("dynCall_iijjjj",6),B.viijjiiiiiiiii=zu=k("dynCall_viijjiiiiiiiii",14),B.vijjjiiji=Uu=k("dynCall_vijjjiiji",9),B.viijiiiiiiijjii=Nu=k("dynCall_viijiiiiiiijjii",15),B.iif=Lu=k("dynCall_iif",3),B.viiiiidiidii=Vu=k("dynCall_viiiiidiidii",12),B.viiifiifii=Wu=k("dynCall_viiifiifii",10),B.vijjjjiii=Gu=k("dynCall_vijjjjiii",9),B.j=Fu=k("dynCall_j",1),B.iidd=Hu=k("dynCall_iidd",4),B.iijj=qu=k("dynCall_iijj",4),B.viid=Ku=k("dynCall_viid",4),B.viffiii=Yu=k("dynCall_viffiii",7),B.viiijjjii=Zu=k("dynCall_viiijjjii",9),B.viiiiijjj=Qu=k("dynCall_viiiiijjj",9),B.iiiiiiiiiiiiiiiiii=Ju=k("dynCall_iiiiiiiiiiiiiiiiii",18),B.viiiiiif=Xu=k("dynCall_viiiiiif",8),B.iiiiiiiiiiiiiiiiiiii=el=k("dynCall_iiiiiiiiiiiiiiiiiiii",20),B.iiiiiiiiiiiiiiiiiiiiiii=tl=k("dynCall_iiiiiiiiiiiiiiiiiiiiiii",23),B.viiiiiiiiiiiiiii=il=k("dynCall_viiiiiiiiiiiiiii",16),B.iiiiiiiiiiiiiiiiiiiiiiii=nl=k("dynCall_iiiiiiiiiiiiiiiiiiiiiiii",24),B.viiiiiiiiiiiiiiiiiiii=rl=k("dynCall_viiiiiiiiiiiiiiiiiiii",21),B.viiiiiiiiiiiiiifi=ol=k("dynCall_viiiiiiiiiiiiiifi",17),B.viiiijiiiiiiif=al=k("dynCall_viiiijiiiiiiif",14),B.viiiiifiifii=sl=k("dynCall_viiiiifiifii",12),B.viiiiifiifiiii=ul=k("dynCall_viiiiifiifiiii",14),B.viifiii=ll=k("dynCall_viifiii",7),B.viiiifiiifiii=dl=k("dynCall_viiiifiiifiii",13),B.viiiiidiidiiii=cl=k("dynCall_viiiiidiidiiii",14),B.viiiiiiiiiiiiiiiii=pl=k("dynCall_viiiiiiiiiiiiiiiii",18),B.viiiiiiiiiiiiiiiiiiiiii=fl=k("dynCall_viiiiiiiiiiiiiiiiiiiiii",23),B.di=ml=k("dynCall_di",2),B.viiiiifiiiifiii=hl=k("dynCall_viiiiifiiiifiii",15),B.iiff=yl=k("dynCall_iiff",4),B.viiifiiiiiifiiii=gl=k("dynCall_viiifiiiiiifiiii",16),B.iiiiiiiiiiiiiiiiiifi=_l=k("dynCall_iiiiiiiiiiiiiiiiiifi",20),B.viiiiiiiijjj=bl=k("dynCall_viiiiiiiijjj",12),B.viiiiiijjjjjii=vl=k("dynCall_viiiiiijjjjjii",14),B.vijj=wl=k("dynCall_vijj",4),B.viji=$l=k("dynCall_viji",4),B.vifi=Cl=k("dynCall_vifi",4),B.vijjjjjjjjjjjjjii=xl=k("dynCall_vijjjjjjjjjjjjjii",17),B.viiijjiiiiiii=Sl=k("dynCall_viiijjiiiiiii",13),B.viijiiiijiii=Tl=k("dynCall_viijiiiijiii",12),B.viifjjjijiiiii=Il=k("dynCall_viifjjjijiiiii",14),B.vjjjjjjffffjji=Al=k("dynCall_vjjjjjjffffjji",14),B.vjjjjjjddddjji=kl=k("dynCall_vjjjjjjddddjji",14),B.viifjjijiiii=jl=k("dynCall_viifjjijiiii",12),B.viiiiiiifiiii=El=k("dynCall_viiiiiiifiiii",13),B.viiiiiid=Pl=k("dynCall_viiiiiid",8),B.viiiiiiidiiii=Ol=k("dynCall_viiiiiiidiiii",13),B.viiiiiiiiiiiijfii=Dl=k("dynCall_viiiiiiiiiiiijfii",17),B.viiiiiji=Bl=k("dynCall_viiiiiji",8),B.viiijjjjji=Ml=k("dynCall_viiijjjjji",10),B.vifii=Rl=k("dynCall_vifii",5),B.vifiii=zl=k("dynCall_vifiii",6),B.iiijiiiii=Ul=k("dynCall_iiijiiiii",9),B.vj=Nl=k("dynCall_vj",2),B.viiiij=Ll=k("dynCall_viiiij",6),B.iiiiiiiiiiiiifii=Vl=k("dynCall_iiiiiiiiiiiiifii",16),B.viiijjjfffi=Wl=k("dynCall_viiijjjfffi",11),B.viiijiijjj=Gl=k("dynCall_viiijiijjj",10),B.viijjjj=Fl=k("dynCall_viijjjj",7),B.viiiiiiiiifiii=Hl=k("dynCall_viiiiiiiiifiii",14),B.vjjjjjjffiifiiiiii=ql=k("dynCall_vjjjjjjffiifiiiiii",18),B.viiiiiiffiifiiiii=Kl=k("dynCall_viiiiiiffiifiiiii",17),B.viiiiiiffifiiiii=Yl=k("dynCall_viiiiiiffifiiiii",16),B.vjjjjjjjjfffiifiiiiii=Zl=k("dynCall_vjjjjjjjjfffiifiiiiii",21),B.vjjjjjjjjfffiifiiiii=Ql=k("dynCall_vjjjjjjjjfffiifiiiii",20),B.vjjjjjjfffifiiiiiii=Jl=k("dynCall_vjjjjjjfffifiiiiiii",19),B.vjjjjjjfffifiiiii=Xl=k("dynCall_vjjjjjjfffifiiiii",17),B.fffffff=ed=k("dynCall_fffffff",7),B.jfi=td=k("dynCall_jfi",3),B.vijjjjjjifiiii=id=k("dynCall_vijjjjjjifiiii",14),B.vjjjjjiiiii=nd=k("dynCall_vjjjjjiiiii",11),B.vjjjjfiii=rd=k("dynCall_vjjjjfiii",9),B.fijjjjifi=od=k("dynCall_fijjjjifi",9),B.vijjfffiii=ad=k("dynCall_vijjfffiii",10),B.vijiiiiiiii=sd=k("dynCall_vijiiiiiiii",11),B.fif=k("dynCall_fif",3),B.iiiiiiiiiiii=ud=k("dynCall_iiiiiiiiiiii",12),B.viiijj=ld=k("dynCall_viiijj",6),B.viiiiijiiiiii=dd=k("dynCall_viiiiijiiiiii",13),B.viiiiijjiiiii=cd=k("dynCall_viiiiijjiiiii",13),B.viiiiji=pd=k("dynCall_viiiiji",7),B.viijjiii=fd=k("dynCall_viijjiii",8),B.iiiiji=md=k("dynCall_iiiiji",6),B.viijjjjjjjjjjjjjii=hd=k("dynCall_viijjjjjjjjjjjjjii",18),B.viiiijiiiiiiii=yd=k("dynCall_viiiijiiiiiiii",14),B.iijjjf=gd=k("dynCall_iijjjf",6),B.viiiijjji=_d=k("dynCall_viiiijjji",9),B.jjjjjj=k("dynCall_jjjjjj",6),B.jjjjjjj=k("dynCall_jjjjjjj",7),B.viiijiiiiiiiii=bd=k("dynCall_viiijiiiiiiiii",14),B.iiiijjj=vd=k("dynCall_iiiijjj",7),B.viijiiii=wd=k("dynCall_viijiiii",8),B.iiijjii=$d=k("dynCall_iiijjii",7),B.iijjii=Cd=k("dynCall_iijjii",6),B.viiiiiijjiiiii=xd=k("dynCall_viiiiiijjiiiii",14),B.viiiiiiiijiiiiii=Sd=k("dynCall_viiiiiiiijiiiiii",16),B.vjjii=Td=k("dynCall_vjjii",5),B.vjjjii=Id=k("dynCall_vjjjii",6),B.viiiiiiiifiiiifiiiii=Ad=k("dynCall_viiiiiiiifiiiifiiiii",20),B.iiiiiiiiiiiii=kd=k("dynCall_iiiiiiiiiiiii",13),B.viiiiiifi=jd=k("dynCall_viiiiiifi",9),B.viiif=Ed=k("dynCall_viiif",5),B.diii=Pd=k("dynCall_diii",4),B.vijjjiii=Od=k("dynCall_vijjjiii",8),B.viiiiiiiiijii=Dd=k("dynCall_viiiiiiiiijii",13),B.viiiiiiiiji=Bd=k("dynCall_viiiiiiiiji",11),B.vijfjiiiii=Md=k("dynCall_vijfjiiiii",10),B.fj=Rd=k("dynCall_fj",2),B.iiiijiiiijj=zd=k("dynCall_iiiijiiiijj",11),B.iiiiiiiiiiijiiii=Ud=k("dynCall_iiiiiiiiiiijiiii",16),B.iiiijiiiiiiiiii=Nd=k("dynCall_iiiijiiiiiiiiii",15),B.jiiij=Ld=k("dynCall_jiiij",5),B.jiijj=Vd=k("dynCall_jiijj",5),B.iiiji=Wd=k("dynCall_iiiji",5),B.iiifi=Gd=k("dynCall_iiifi",5),B.iiijii=Fd=k("dynCall_iiijii",6),B.iiiiiiiiiji=Hd=k("dynCall_iiiiiiiiiji",11),B.iiiiijji=qd=k("dynCall_iiiiijji",8),B.iiiijjii=Kd=k("dynCall_iiiijjii",8),B.iiiijii=Yd=k("dynCall_iiiijii",7),B.iiijiii=Zd=k("dynCall_iiijiii",7),B.iiiiiiiiijii=Qd=k("dynCall_iiiiiiiiijii",12),B.iiiiiijjjii=Jd=k("dynCall_iiiiiijjjii",11),B.iiiiiiiijjjfi=Xd=k("dynCall_iiiiiiiijjjfi",13),B.iijiiii=ec=k("dynCall_iijiiii",7),B.viiiijjj=tc=k("dynCall_viiiijjj",8),B.viiiijj=ic=k("dynCall_viiiijj",7),B.iijjjii=nc=k("dynCall_iijjjii",7),B.iiiijjjiii=rc=k("dynCall_iiiijjjiii",10),B.iiiiiiiiiiiiiii=oc=k("dynCall_iiiiiiiiiiiiiii",15),B.iijjiii=ac=k("dynCall_iijjiii",7),B.viijjjjiiiiiiiii=sc=k("dynCall_viijjjjiiiiiiiii",16),B.viiiijjjj=uc=k("dynCall_viiiijjjj",9),B.fiif=lc=k("dynCall_fiif",4),B.viijjiiiiii=dc=k("dynCall_viijjiiiiii",11),B.viijjiiiiiiii=cc=k("dynCall_viijjiiiiiiii",13),B.ijii=pc=k("dynCall_ijii",4),B.viiiiiij=fc=k("dynCall_viiiiiij",8),B.viiiiiiijiiii=mc=k("dynCall_viiiiiiijiiii",13),B.vijji=hc=k("dynCall_vijji",5),B.viijii=k("dynCall_viijii",6),B.iidiiii=k("dynCall_iidiiii",7),B.iiiiij=yc=k("dynCall_iiiiij",6),B.iiiiid=gc=k("dynCall_iiiiid",6),B.iiiiijj=k("dynCall_iiiiijj",7),B.iiiiiijj=k("dynCall_iiiiiijj",8),_c=k("asyncify_start_unwind",1),bc=k("asyncify_stop_unwind",0),vc=k("asyncify_start_rewind",1),wc=k("asyncify_stop_rewind",0)}(Ct),wo("wasm-instantiate"),Ct;var b}vo("wasm-instantiate");var o,s,d=i,p=$o();return i.instantiateWasm?new Promise((m,y)=>{try{i.instantiateWasm(p,(b,v)=>{m(n(b,v))})}catch(b){P(`Module.instantiateWasm callback failed with error: ${b}`),y(b)}}):l?new Promise(m=>{he=y=>{var b=new WebAssembly.Instance(y,$o());m(n(b,y))}}):(vi??=i.locateFile?(s="ort-wasm-simd-threaded.jsep.wasm",i.locateFile?i.locateFile(s,$):$+s):new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href,o=await Ky(S,vi,p),N(i===d,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),d=null,n(o.instance,o.module))}();function C_(n,o,s){var d=R();try{return Na(n,o,s)}catch(p){if(M(d),!(p instanceof A))throw p;z(1,0)}}function x_(n,o){var s=R();try{Ua(n,o)}catch(d){if(M(s),!(d instanceof A))throw d;z(1,0)}}function S_(n,o){var s=R();try{return _r(n,o)}catch(d){if(M(s),!(d instanceof A))throw d;z(1,0)}}function T_(n,o,s){var d=R();try{La(n,o,s)}catch(p){if(M(d),!(p instanceof A))throw p;z(1,0)}}function I_(n,o,s,d){var p=R();try{return Va(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;z(1,0)}}function A_(n,o,s,d){var p=R();try{Fa(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;z(1,0)}}function k_(n,o,s,d,p,m,y){var b=R();try{return Wa(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function j_(n){var o=R();try{Ga(n)}catch(s){if(M(o),!(s instanceof A))throw s;z(1,0)}}function E_(n,o,s,d,p){var m=R();try{Ka(n,o,s,d,p)}catch(y){if(M(m),!(y instanceof A))throw y;z(1,0)}}function P_(n,o,s,d,p,m){var y=R();try{return Ha(n,o,s,d,p,m)}catch(b){if(M(y),!(b instanceof A))throw b;z(1,0)}}function O_(n,o,s,d,p){var m=R();try{return qa(n,o,s,d,p)}catch(y){if(M(m),!(y instanceof A))throw y;z(1,0)}}function D_(n,o,s,d){var p=R();try{return is(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;return z(1,0),0n}}function B_(n,o,s,d,p,m,y){var b=R();try{return ns(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function M_(n){var o=R();try{return rs(n)}catch(s){if(M(o),!(s instanceof A))throw s;z(1,0)}}function R_(n,o){var s=R();try{return Ya(n,o)}catch(d){if(M(s),!(d instanceof A))throw d;return z(1,0),0n}}function z_(n,o,s){var d=R();try{return es(n,o,s)}catch(p){if(M(d),!(p instanceof A))throw p;z(1,0)}}function U_(n,o,s){var d=R();try{return ts(n,o,s)}catch(p){if(M(d),!(p instanceof A))throw p;return z(1,0),0n}}function N_(n,o,s){var d=R();try{return os(n,o,s)}catch(p){if(M(d),!(p instanceof A))throw p;z(1,0)}}function L_(n,o,s,d,p,m){var y=R();try{Xa(n,o,s,d,p,m)}catch(b){if(M(y),!(b instanceof A))throw b;z(1,0)}}function V_(n,o,s){var d=R();try{return Ts(n,o,s)}catch(p){if(M(d),!(p instanceof A))throw p;z(1,0)}}function W_(n,o,s,d,p,m,y,b){var v=R();try{us(n,o,s,d,p,m,y,b)}catch(T){if(M(v),!(T instanceof A))throw T;z(1,0)}}function G_(n,o,s){var d=R();try{as(n,o,s)}catch(p){if(M(d),!(p instanceof A))throw p;z(1,0)}}function F_(n,o,s,d,p,m,y){var b=R();try{Qa(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function H_(n,o,s,d,p,m,y,b){var v=R();try{return fs(n,o,s,d,p,m,y,b)}catch(T){if(M(v),!(T instanceof A))throw T;z(1,0)}}function q_(n,o,s,d,p,m,y){var b=R();try{return ec(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function K_(n,o,s){var d=R();try{cs(n,o,s)}catch(p){if(M(d),!(p instanceof A))throw p;z(1,0)}}function Y_(n,o,s){var d=R();try{Ss(n,o,s)}catch(p){if(M(d),!(p instanceof A))throw p;z(1,0)}}function Z_(n,o,s,d,p,m,y,b,v){var T=R();try{ds(n,o,s,d,p,m,y,b,v)}catch(E){if(M(T),!(E instanceof A))throw E;z(1,0)}}function Q_(n,o,s,d,p,m,y,b,v){var T=R();try{return ps(n,o,s,d,p,m,y,b,v)}catch(E){if(M(T),!(E instanceof A))throw E;z(1,0)}}function J_(n,o,s,d){var p=R();try{return ms(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;z(1,0)}}function X_(n,o){var s=R();try{return ys(n,o)}catch(d){if(M(s),!(d instanceof A))throw d;z(1,0)}}function eb(n,o,s,d,p,m,y){var b=R();try{ss(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function tb(n,o,s){var d=R();try{return gs(n,o,s)}catch(p){if(M(d),!(p instanceof A))throw p;z(1,0)}}function ib(n,o,s,d,p,m,y,b){var v=R();try{_s(n,o,s,d,p,m,y,b)}catch(T){if(M(v),!(T instanceof A))throw T;z(1,0)}}function nb(n,o,s,d,p,m,y,b){var v=R();try{hs(n,o,s,d,p,m,y,b)}catch(T){if(M(v),!(T instanceof A))throw T;z(1,0)}}function rb(n,o){var s=R();try{return ls(n,o)}catch(d){if(M(s),!(d instanceof A))throw d;return z(1,0),0n}}function ob(n,o,s,d,p){var m=R();try{bs(n,o,s,d,p)}catch(y){if(M(m),!(y instanceof A))throw y;z(1,0)}}function ab(n,o,s,d,p){var m=R();try{vs(n,o,s,d,p)}catch(y){if(M(m),!(y instanceof A))throw y;z(1,0)}}function sb(n,o,s,d,p,m,y,b,v,T){var E=R();try{Is(n,o,s,d,p,m,y,b,v,T)}catch(U){if(M(E),!(U instanceof A))throw U;z(1,0)}}function ub(n,o,s,d,p,m,y,b,v,T){var E=R();try{return ks(n,o,s,d,p,m,y,b,v,T)}catch(U){if(M(E),!(U instanceof A))throw U;z(1,0)}}function lb(n,o,s){var d=R();try{return ws(n,o,s)}catch(p){if(M(d),!(p instanceof A))throw p;z(1,0)}}function db(n,o){var s=R();try{return Cs(n,o)}catch(d){if(M(s),!(d instanceof A))throw d;z(1,0)}}function cb(n,o,s,d){var p=R();try{return xs(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;return z(1,0),0n}}function pb(n,o,s,d,p,m,y,b,v,T,E,U){var L=R();try{As(n,o,s,d,p,m,y,b,v,T,E,U)}catch(H){if(M(L),!(H instanceof A))throw H;z(1,0)}}function fb(n,o,s,d,p,m,y,b,v,T,E){var U=R();try{$s(n,o,s,d,p,m,y,b,v,T,E)}catch(L){if(M(U),!(L instanceof A))throw L;z(1,0)}}function mb(n,o,s,d){var p=R();try{Os(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;z(1,0)}}function hb(n,o,s,d){var p=R();try{Ds(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;z(1,0)}}function yb(n,o,s,d,p,m,y,b,v,T,E){var U=R();try{return Bs(n,o,s,d,p,m,y,b,v,T,E)}catch(L){if(M(U),!(L instanceof A))throw L;z(1,0)}}function gb(n,o,s,d,p,m,y,b,v){var T=R();try{return Ps(n,o,s,d,p,m,y,b,v)}catch(E){if(M(T),!(E instanceof A))throw E;z(1,0)}}function _b(n,o,s,d,p,m,y,b,v,T,E){var U=R();try{return js(n,o,s,d,p,m,y,b,v,T,E)}catch(L){if(M(U),!(L instanceof A))throw L;z(1,0)}}function bb(n,o,s,d,p,m,y,b,v){var T=R();try{return Es(n,o,s,d,p,m,y,b,v)}catch(E){if(M(T),!(E instanceof A))throw E;z(1,0)}}function vb(n,o,s,d,p,m,y,b,v){var T=R();try{return Ms(n,o,s,d,p,m,y,b,v)}catch(E){if(M(T),!(E instanceof A))throw E;z(1,0)}}function wb(n,o,s){var d=R();try{return Rs(n,o,s)}catch(p){if(M(d),!(p instanceof A))throw p;return z(1,0),0n}}function $b(n,o,s,d,p){var m=R();try{zs(n,o,s,d,p)}catch(y){if(M(m),!(y instanceof A))throw y;z(1,0)}}function Cb(n,o,s,d,p,m){var y=R();try{Us(n,o,s,d,p,m)}catch(b){if(M(y),!(b instanceof A))throw b;z(1,0)}}function xb(n,o,s,d,p,m,y,b,v,T,E,U,L,H){var K=R();try{return Ws(n,o,s,d,p,m,y,b,v,T,E,U,L,H)}catch(Z){if(M(K),!(Z instanceof A))throw Z;z(1,0)}}function Sb(n,o,s,d,p,m,y,b,v){var T=R();try{return Ns(n,o,s,d,p,m,y,b,v)}catch(E){if(M(T),!(E instanceof A))throw E;z(1,0)}}function Tb(n,o,s,d){var p=R();try{$l(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;z(1,0)}}function Ib(n,o,s,d){var p=R();try{return Ls(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;z(1,0)}}function Ab(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K){var Z=R();try{Gs(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K)}catch(se){if(M(Z),!(se instanceof A))throw se;z(1,0)}}function kb(n,o,s,d,p,m,y,b,v,T,E,U,L){var H=R();try{Vs(n,o,s,d,p,m,y,b,v,T,E,U,L)}catch(K){if(M(H),!(K instanceof A))throw K;z(1,0)}}function jb(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se){var ue=R();try{Fs(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se)}catch(fe){if(M(ue),!(fe instanceof A))throw fe;z(1,0)}}function Eb(n,o,s,d){var p=R();try{return Ks(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;return z(1,0),0n}}function Pb(n,o,s,d,p){var m=R();try{return Hs(n,o,s,d,p)}catch(y){if(M(m),!(y instanceof A))throw y;return z(1,0),0n}}function Ob(n,o,s,d,p){var m=R();try{return Ys(n,o,s,d,p)}catch(y){if(M(m),!(y instanceof A))throw y;z(1,0)}}function Db(n,o,s,d){var p=R();try{return Zs(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;z(1,0)}}function Bb(n,o,s,d){var p=R();try{return Qs(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;z(1,0)}}function Mb(n,o){var s=R();try{return Js(n,o)}catch(d){if(M(s),!(d instanceof A))throw d;z(1,0)}}function Rb(n,o,s,d){var p=R();try{Xs(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;z(1,0)}}function zb(n,o,s,d){var p=R();try{return eu(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;z(1,0)}}function Ub(n,o,s,d,p,m,y,b,v,T,E,U,L,H){var K=R();try{iu(n,o,s,d,p,m,y,b,v,T,E,U,L,H)}catch(Z){if(M(K),!(Z instanceof A))throw Z;z(1,0)}}function Nb(n,o,s,d,p){var m=R();try{nu(n,o,s,d,p)}catch(y){if(M(m),!(y instanceof A))throw y;z(1,0)}}function Lb(n,o,s,d,p,m,y){var b=R();try{ru(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function Vb(n,o,s){var d=R();try{return ou(n,o,s)}catch(p){if(M(d),!(p instanceof A))throw p;return z(1,0),0n}}function Wb(n,o,s,d,p){var m=R();try{au(n,o,s,d,p)}catch(y){if(M(m),!(y instanceof A))throw y;z(1,0)}}function Gb(n,o,s,d,p,m){var y=R();try{return su(n,o,s,d,p,m)}catch(b){if(M(y),!(b instanceof A))throw b;z(1,0)}}function Fb(n,o,s,d,p,m){var y=R();try{uu(n,o,s,d,p,m)}catch(b){if(M(y),!(b instanceof A))throw b;z(1,0)}}function Hb(n,o,s,d,p,m,y){var b=R();try{lu(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function qb(n,o,s,d,p,m,y,b){var v=R();try{du(n,o,s,d,p,m,y,b)}catch(T){if(M(v),!(T instanceof A))throw T;z(1,0)}}function Kb(n,o,s,d,p,m,y,b,v){var T=R();try{cu(n,o,s,d,p,m,y,b,v)}catch(E){if(M(T),!(E instanceof A))throw E;z(1,0)}}function Yb(n,o,s,d,p,m,y,b,v){var T=R();try{pu(n,o,s,d,p,m,y,b,v)}catch(E){if(M(T),!(E instanceof A))throw E;z(1,0)}}function Zb(n,o,s,d,p,m,y){var b=R();try{return fu(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function Qb(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue){var fe=R();try{Za(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue)}catch(we){if(M(fe),!(we instanceof A))throw we;z(1,0)}}function Jb(n,o,s,d,p,m){var y=R();try{mu(n,o,s,d,p,m)}catch(b){if(M(y),!(b instanceof A))throw b;z(1,0)}}function Xb(n,o,s,d,p,m,y,b,v,T,E,U,L){var H=R();try{hu(n,o,s,d,p,m,y,b,v,T,E,U,L)}catch(K){if(M(H),!(K instanceof A))throw K;z(1,0)}}function ev(n,o,s,d,p,m,y,b,v,T){var E=R();try{yu(n,o,s,d,p,m,y,b,v,T)}catch(U){if(M(E),!(U instanceof A))throw U;z(1,0)}}function tv(n,o,s,d,p,m,y,b,v,T,E,U,L){var H=R();try{gu(n,o,s,d,p,m,y,b,v,T,E,U,L)}catch(K){if(M(H),!(K instanceof A))throw K;z(1,0)}}function iv(n,o,s,d,p,m,y){var b=R();try{_u(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function nv(n,o,s,d,p){var m=R();try{bu(n,o,s,d,p)}catch(y){if(M(m),!(y instanceof A))throw y;z(1,0)}}function rv(n,o,s,d){var p=R();try{return vu(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;z(1,0)}}function ov(n,o,s,d){var p=R();try{return tu(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;z(1,0)}}function av(n,o,s,d,p,m,y,b,v,T){var E=R();try{wu(n,o,s,d,p,m,y,b,v,T)}catch(U){if(M(E),!(U instanceof A))throw U;z(1,0)}}function sv(n,o,s,d,p,m,y,b,v,T,E,U){var L=R();try{return $u(n,o,s,d,p,m,y,b,v,T,E,U)}catch(H){if(M(L),!(H instanceof A))throw H;z(1,0)}}function uv(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we,Ee,je,qe,it){var ot=R();try{Cu(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we,Ee,je,qe,it)}catch(ki){if(M(ot),!(ki instanceof A))throw ki;z(1,0)}}function lv(n,o,s,d,p,m,y,b,v,T){var E=R();try{xu(n,o,s,d,p,m,y,b,v,T)}catch(U){if(M(E),!(U instanceof A))throw U;z(1,0)}}function dv(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we,Ee,je){var qe=R();try{Su(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we,Ee,je)}catch(it){if(M(qe),!(it instanceof A))throw it;z(1,0)}}function cv(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe){var we=R();try{Tu(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe)}catch(Ee){if(M(we),!(Ee instanceof A))throw Ee;z(1,0)}}function pv(n,o,s,d,p,m,y){var b=R();try{Iu(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function fv(n,o,s,d,p,m,y,b,v,T,E,U,L){var H=R();try{Au(n,o,s,d,p,m,y,b,v,T,E,U,L)}catch(K){if(M(H),!(K instanceof A))throw K;z(1,0)}}function mv(n,o,s,d,p,m,y){var b=R();try{Bu(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function hv(n,o,s,d,p,m){var y=R();try{Pu(n,o,s,d,p,m)}catch(b){if(M(y),!(b instanceof A))throw b;z(1,0)}}function yv(n,o,s,d,p,m,y,b,v){var T=R();try{Ou(n,o,s,d,p,m,y,b,v)}catch(E){if(M(T),!(E instanceof A))throw E;z(1,0)}}function gv(n,o,s,d,p,m,y,b){var v=R();try{ju(n,o,s,d,p,m,y,b)}catch(T){if(M(v),!(T instanceof A))throw T;z(1,0)}}function _v(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we){var Ee=R();try{return Mu(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we)}catch(je){if(M(Ee),!(je instanceof A))throw je;z(1,0)}}function bv(n,o,s,d,p,m){var y=R();try{return Ru(n,o,s,d,p,m)}catch(b){if(M(y),!(b instanceof A))throw b;z(1,0)}}function vv(n,o,s,d,p,m,y,b,v,T,E,U,L,H){var K=R();try{zu(n,o,s,d,p,m,y,b,v,T,E,U,L,H)}catch(Z){if(M(K),!(Z instanceof A))throw Z;z(1,0)}}function wv(n,o,s,d,p,m,y,b,v){var T=R();try{Uu(n,o,s,d,p,m,y,b,v)}catch(E){if(M(T),!(E instanceof A))throw E;z(1,0)}}function $v(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K){var Z=R();try{Nu(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K)}catch(se){if(M(Z),!(se instanceof A))throw se;z(1,0)}}function Cv(n,o,s){var d=R();try{return Lu(n,o,s)}catch(p){if(M(d),!(p instanceof A))throw p;z(1,0)}}function xv(n,o,s,d,p,m,y,b,v,T,E,U){var L=R();try{Vu(n,o,s,d,p,m,y,b,v,T,E,U)}catch(H){if(M(L),!(H instanceof A))throw H;z(1,0)}}function Sv(n,o,s,d,p,m,y,b,v,T){var E=R();try{Wu(n,o,s,d,p,m,y,b,v,T)}catch(U){if(M(E),!(U instanceof A))throw U;z(1,0)}}function Tv(n,o,s,d,p,m,y,b,v){var T=R();try{Gu(n,o,s,d,p,m,y,b,v)}catch(E){if(M(T),!(E instanceof A))throw E;z(1,0)}}function Iv(n,o,s,d){var p=R();try{return Hu(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;z(1,0)}}function Av(n,o,s,d){var p=R();try{return qu(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;z(1,0)}}function kv(n,o,s,d){var p=R();try{Ku(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;z(1,0)}}function jv(n,o,s,d,p,m,y){var b=R();try{Yu(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function Ev(n,o,s,d,p,m,y,b,v){var T=R();try{Zu(n,o,s,d,p,m,y,b,v)}catch(E){if(M(T),!(E instanceof A))throw E;z(1,0)}}function Pv(n){var o=R();try{return Fu(n)}catch(s){if(M(o),!(s instanceof A))throw s;return z(1,0),0n}}function Ov(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue){var fe=R();try{return Ju(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue)}catch(we){if(M(fe),!(we instanceof A))throw we;z(1,0)}}function Dv(n,o,s,d,p,m,y,b,v){var T=R();try{Qu(n,o,s,d,p,m,y,b,v)}catch(E){if(M(T),!(E instanceof A))throw E;z(1,0)}}function Bv(n,o,s,d,p,m,y,b){var v=R();try{Xu(n,o,s,d,p,m,y,b)}catch(T){if(M(v),!(T instanceof A))throw T;z(1,0)}}function Mv(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we){var Ee=R();try{qs(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we)}catch(je){if(M(Ee),!(je instanceof A))throw je;z(1,0)}}function Rv(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we){var Ee=R();try{return el(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we)}catch(je){if(M(Ee),!(je instanceof A))throw je;z(1,0)}}function zv(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we,Ee,je,qe){var it=R();try{return tl(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we,Ee,je,qe)}catch(ot){if(M(it),!(ot instanceof A))throw ot;z(1,0)}}function Uv(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we,Ee,je,qe,it){var ot=R();try{return nl(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we,Ee,je,qe,it)}catch(ki){if(M(ot),!(ki instanceof A))throw ki;z(1,0)}}function Nv(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we,Ee){var je=R();try{rl(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we,Ee)}catch(qe){if(M(je),!(qe instanceof A))throw qe;z(1,0)}}function Lv(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se){var ue=R();try{ol(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se)}catch(fe){if(M(ue),!(fe instanceof A))throw fe;z(1,0)}}function Vv(n,o,s,d,p,m,y,b,v,T,E,U,L,H){var K=R();try{al(n,o,s,d,p,m,y,b,v,T,E,U,L,H)}catch(Z){if(M(K),!(Z instanceof A))throw Z;z(1,0)}}function Wv(n,o,s,d,p,m,y,b,v,T,E,U){var L=R();try{sl(n,o,s,d,p,m,y,b,v,T,E,U)}catch(H){if(M(L),!(H instanceof A))throw H;z(1,0)}}function Gv(n,o,s,d,p,m,y,b,v,T,E,U,L,H){var K=R();try{ul(n,o,s,d,p,m,y,b,v,T,E,U,L,H)}catch(Z){if(M(K),!(Z instanceof A))throw Z;z(1,0)}}function Fv(n,o,s,d,p,m,y){var b=R();try{ll(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function Hv(n,o,s,d,p,m,y,b,v,T,E,U,L){var H=R();try{dl(n,o,s,d,p,m,y,b,v,T,E,U,L)}catch(K){if(M(H),!(K instanceof A))throw K;z(1,0)}}function qv(n,o,s,d,p,m,y,b,v,T,E,U,L,H){var K=R();try{cl(n,o,s,d,p,m,y,b,v,T,E,U,L,H)}catch(Z){if(M(K),!(Z instanceof A))throw Z;z(1,0)}}function Kv(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue){var fe=R();try{pl(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue)}catch(we){if(M(fe),!(we instanceof A))throw we;z(1,0)}}function Yv(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we,Ee,je,qe){var it=R();try{fl(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we,Ee,je,qe)}catch(ot){if(M(it),!(ot instanceof A))throw ot;z(1,0)}}function Zv(n,o){var s=R();try{return ml(n,o)}catch(d){if(M(s),!(d instanceof A))throw d;z(1,0)}}function Qv(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K){var Z=R();try{hl(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K)}catch(se){if(M(Z),!(se instanceof A))throw se;z(1,0)}}function Jv(n,o,s,d){var p=R();try{return yl(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;z(1,0)}}function Xv(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z){var se=R();try{gl(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z)}catch(ue){if(M(se),!(ue instanceof A))throw ue;z(1,0)}}function ew(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z){var se=R();try{il(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z)}catch(ue){if(M(se),!(ue instanceof A))throw ue;z(1,0)}}function tw(n,o,s,d,p){var m=R();try{Du(n,o,s,d,p)}catch(y){if(M(m),!(y instanceof A))throw y;z(1,0)}}function iw(n,o,s,d,p){var m=R();try{ku(n,o,s,d,p)}catch(y){if(M(m),!(y instanceof A))throw y;z(1,0)}}function nw(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we){var Ee=R();try{return _l(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we)}catch(je){if(M(Ee),!(je instanceof A))throw je;z(1,0)}}function rw(n,o,s,d,p,m,y,b,v,T,E,U){var L=R();try{bl(n,o,s,d,p,m,y,b,v,T,E,U)}catch(H){if(M(L),!(H instanceof A))throw H;z(1,0)}}function ow(n,o,s,d,p,m,y,b,v,T,E,U,L,H){var K=R();try{vl(n,o,s,d,p,m,y,b,v,T,E,U,L,H)}catch(Z){if(M(K),!(Z instanceof A))throw Z;z(1,0)}}function aw(n,o,s,d){var p=R();try{wl(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;z(1,0)}}function sw(n,o,s,d){var p=R();try{Cl(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;z(1,0)}}function uw(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se){var ue=R();try{xl(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se)}catch(fe){if(M(ue),!(fe instanceof A))throw fe;z(1,0)}}function lw(n,o,s,d,p,m,y,b,v,T,E,U,L){var H=R();try{Sl(n,o,s,d,p,m,y,b,v,T,E,U,L)}catch(K){if(M(H),!(K instanceof A))throw K;z(1,0)}}function dw(n,o,s,d,p,m,y,b,v,T,E,U){var L=R();try{Tl(n,o,s,d,p,m,y,b,v,T,E,U)}catch(H){if(M(L),!(H instanceof A))throw H;z(1,0)}}function cw(n,o,s,d,p,m,y,b,v,T,E,U,L,H){var K=R();try{Il(n,o,s,d,p,m,y,b,v,T,E,U,L,H)}catch(Z){if(M(K),!(Z instanceof A))throw Z;z(1,0)}}function pw(n,o,s,d,p,m,y,b,v,T,E,U,L,H){var K=R();try{Al(n,o,s,d,p,m,y,b,v,T,E,U,L,H)}catch(Z){if(M(K),!(Z instanceof A))throw Z;z(1,0)}}function fw(n,o,s,d,p,m,y,b,v,T,E,U,L,H){var K=R();try{kl(n,o,s,d,p,m,y,b,v,T,E,U,L,H)}catch(Z){if(M(K),!(Z instanceof A))throw Z;z(1,0)}}function mw(n,o,s,d,p,m,y,b,v,T,E,U){var L=R();try{jl(n,o,s,d,p,m,y,b,v,T,E,U)}catch(H){if(M(L),!(H instanceof A))throw H;z(1,0)}}function hw(n,o,s,d,p,m,y,b,v,T,E,U,L){var H=R();try{El(n,o,s,d,p,m,y,b,v,T,E,U,L)}catch(K){if(M(H),!(K instanceof A))throw K;z(1,0)}}function yw(n,o,s,d,p,m,y,b){var v=R();try{Pl(n,o,s,d,p,m,y,b)}catch(T){if(M(v),!(T instanceof A))throw T;z(1,0)}}function gw(n,o,s,d,p,m,y,b,v,T,E,U,L){var H=R();try{Ol(n,o,s,d,p,m,y,b,v,T,E,U,L)}catch(K){if(M(H),!(K instanceof A))throw K;z(1,0)}}function _w(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se){var ue=R();try{Dl(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se)}catch(fe){if(M(ue),!(fe instanceof A))throw fe;z(1,0)}}function bw(n,o,s,d,p,m,y,b){var v=R();try{Bl(n,o,s,d,p,m,y,b)}catch(T){if(M(v),!(T instanceof A))throw T;z(1,0)}}function vw(n,o,s,d,p,m){var y=R();try{Ja(n,o,s,d,p,m)}catch(b){if(M(y),!(b instanceof A))throw b;z(1,0)}}function ww(n,o,s,d,p,m,y,b,v,T){var E=R();try{Ml(n,o,s,d,p,m,y,b,v,T)}catch(U){if(M(E),!(U instanceof A))throw U;z(1,0)}}function $w(n,o,s,d,p){var m=R();try{Rl(n,o,s,d,p)}catch(y){if(M(m),!(y instanceof A))throw y;z(1,0)}}function Cw(n,o,s,d,p,m){var y=R();try{zl(n,o,s,d,p,m)}catch(b){if(M(y),!(b instanceof A))throw b;z(1,0)}}function xw(n,o,s,d,p,m,y,b,v){var T=R();try{return Ul(n,o,s,d,p,m,y,b,v)}catch(E){if(M(T),!(E instanceof A))throw E;z(1,0)}}function Sw(n,o){var s=R();try{Nl(n,o)}catch(d){if(M(s),!(d instanceof A))throw d;z(1,0)}}function Tw(n,o,s,d,p,m){var y=R();try{Ll(n,o,s,d,p,m)}catch(b){if(M(y),!(b instanceof A))throw b;z(1,0)}}function Iw(n,o,s,d,p,m,y){var b=R();try{Eu(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function Aw(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z){var se=R();try{return Vl(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z)}catch(ue){if(M(se),!(ue instanceof A))throw ue;z(1,0)}}function kw(n,o,s,d,p,m,y,b,v,T,E){var U=R();try{Wl(n,o,s,d,p,m,y,b,v,T,E)}catch(L){if(M(U),!(L instanceof A))throw L;z(1,0)}}function jw(n,o,s,d,p,m,y,b,v,T){var E=R();try{Gl(n,o,s,d,p,m,y,b,v,T)}catch(U){if(M(E),!(U instanceof A))throw U;z(1,0)}}function Ew(n,o,s,d,p,m,y){var b=R();try{Fl(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function Pw(n,o,s,d,p,m,y){var b=R();try{return ed(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function Ow(n,o,s,d,p,m,y,b,v,T,E,U,L,H){var K=R();try{Hl(n,o,s,d,p,m,y,b,v,T,E,U,L,H)}catch(Z){if(M(K),!(Z instanceof A))throw Z;z(1,0)}}function Dw(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue){var fe=R();try{ql(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue)}catch(we){if(M(fe),!(we instanceof A))throw we;z(1,0)}}function Bw(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se){var ue=R();try{Kl(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se)}catch(fe){if(M(ue),!(fe instanceof A))throw fe;z(1,0)}}function Mw(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z){var se=R();try{Yl(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z)}catch(ue){if(M(se),!(ue instanceof A))throw ue;z(1,0)}}function Rw(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we,Ee){var je=R();try{Zl(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we,Ee)}catch(qe){if(M(je),!(qe instanceof A))throw qe;z(1,0)}}function zw(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we){var Ee=R();try{Ql(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we)}catch(je){if(M(Ee),!(je instanceof A))throw je;z(1,0)}}function Uw(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe){var we=R();try{Jl(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe)}catch(Ee){if(M(we),!(Ee instanceof A))throw Ee;z(1,0)}}function Nw(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se){var ue=R();try{Xl(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se)}catch(fe){if(M(ue),!(fe instanceof A))throw fe;z(1,0)}}function Lw(n,o,s,d,p,m,y,b,v,T,E,U,L,H){var K=R();try{id(n,o,s,d,p,m,y,b,v,T,E,U,L,H)}catch(Z){if(M(K),!(Z instanceof A))throw Z;z(1,0)}}function Vw(n,o,s,d,p,m,y,b,v,T,E){var U=R();try{nd(n,o,s,d,p,m,y,b,v,T,E)}catch(L){if(M(U),!(L instanceof A))throw L;z(1,0)}}function Ww(n,o,s,d,p,m,y,b,v){var T=R();try{rd(n,o,s,d,p,m,y,b,v)}catch(E){if(M(T),!(E instanceof A))throw E;z(1,0)}}function Gw(n,o,s,d,p,m,y,b,v){var T=R();try{return od(n,o,s,d,p,m,y,b,v)}catch(E){if(M(T),!(E instanceof A))throw E;z(1,0)}}function Fw(n,o,s,d,p,m,y,b,v,T){var E=R();try{ad(n,o,s,d,p,m,y,b,v,T)}catch(U){if(M(E),!(U instanceof A))throw U;z(1,0)}}function Hw(n,o,s,d,p,m,y,b,v,T,E){var U=R();try{sd(n,o,s,d,p,m,y,b,v,T,E)}catch(L){if(M(U),!(L instanceof A))throw L;z(1,0)}}function qw(n,o,s){var d=R();try{return td(n,o,s)}catch(p){if(M(d),!(p instanceof A))throw p;return z(1,0),0n}}function Kw(n,o,s,d,p,m,y,b,v,T,E,U){var L=R();try{return ud(n,o,s,d,p,m,y,b,v,T,E,U)}catch(H){if(M(L),!(H instanceof A))throw H;z(1,0)}}function Yw(n,o,s,d,p,m){var y=R();try{ld(n,o,s,d,p,m)}catch(b){if(M(y),!(b instanceof A))throw b;z(1,0)}}function Zw(n,o,s,d,p,m,y,b,v,T,E,U,L){var H=R();try{dd(n,o,s,d,p,m,y,b,v,T,E,U,L)}catch(K){if(M(H),!(K instanceof A))throw K;z(1,0)}}function Qw(n,o,s,d,p,m,y,b,v,T,E,U,L){var H=R();try{cd(n,o,s,d,p,m,y,b,v,T,E,U,L)}catch(K){if(M(H),!(K instanceof A))throw K;z(1,0)}}function Jw(n,o,s,d,p,m,y){var b=R();try{pd(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function Xw(n,o,s,d,p,m,y,b){var v=R();try{fd(n,o,s,d,p,m,y,b)}catch(T){if(M(v),!(T instanceof A))throw T;z(1,0)}}function e0(n,o,s,d,p,m){var y=R();try{return md(n,o,s,d,p,m)}catch(b){if(M(y),!(b instanceof A))throw b;z(1,0)}}function t0(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue){var fe=R();try{hd(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue)}catch(we){if(M(fe),!(we instanceof A))throw we;z(1,0)}}function i0(n,o,s,d,p,m,y,b,v,T,E,U,L,H){var K=R();try{yd(n,o,s,d,p,m,y,b,v,T,E,U,L,H)}catch(Z){if(M(K),!(Z instanceof A))throw Z;z(1,0)}}function n0(n,o,s,d,p,m){var y=R();try{return gd(n,o,s,d,p,m)}catch(b){if(M(y),!(b instanceof A))throw b;z(1,0)}}function r0(n,o,s,d,p,m,y,b,v){var T=R();try{_d(n,o,s,d,p,m,y,b,v)}catch(E){if(M(T),!(E instanceof A))throw E;z(1,0)}}function o0(n,o,s,d,p,m,y,b,v,T,E,U,L,H){var K=R();try{bd(n,o,s,d,p,m,y,b,v,T,E,U,L,H)}catch(Z){if(M(K),!(Z instanceof A))throw Z;z(1,0)}}function a0(n,o,s,d,p,m,y){var b=R();try{return vd(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function s0(n,o,s,d,p,m,y,b){var v=R();try{wd(n,o,s,d,p,m,y,b)}catch(T){if(M(v),!(T instanceof A))throw T;z(1,0)}}function u0(n,o,s,d,p,m,y){var b=R();try{return $d(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function l0(n,o,s,d,p,m,y,b,v,T,E,U,L,H){var K=R();try{xd(n,o,s,d,p,m,y,b,v,T,E,U,L,H)}catch(Z){if(M(K),!(Z instanceof A))throw Z;z(1,0)}}function d0(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z){var se=R();try{Sd(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z)}catch(ue){if(M(se),!(ue instanceof A))throw ue;z(1,0)}}function c0(n,o,s,d,p){var m=R();try{Td(n,o,s,d,p)}catch(y){if(M(m),!(y instanceof A))throw y;z(1,0)}}function p0(n,o,s,d,p,m){var y=R();try{Id(n,o,s,d,p,m)}catch(b){if(M(y),!(b instanceof A))throw b;z(1,0)}}function f0(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we){var Ee=R();try{Ad(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z,se,ue,fe,we)}catch(je){if(M(Ee),!(je instanceof A))throw je;z(1,0)}}function m0(n,o,s,d,p,m,y,b,v,T,E,U,L){var H=R();try{return kd(n,o,s,d,p,m,y,b,v,T,E,U,L)}catch(K){if(M(H),!(K instanceof A))throw K;z(1,0)}}function h0(n,o,s,d,p,m,y,b,v){var T=R();try{jd(n,o,s,d,p,m,y,b,v)}catch(E){if(M(T),!(E instanceof A))throw E;z(1,0)}}function y0(n,o,s,d,p){var m=R();try{Ed(n,o,s,d,p)}catch(y){if(M(m),!(y instanceof A))throw y;z(1,0)}}function g0(n,o,s,d){var p=R();try{return Pd(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;z(1,0)}}function _0(n,o,s,d,p,m,y,b){var v=R();try{Od(n,o,s,d,p,m,y,b)}catch(T){if(M(v),!(T instanceof A))throw T;z(1,0)}}function b0(n,o,s,d,p,m,y,b,v,T,E,U,L){var H=R();try{Dd(n,o,s,d,p,m,y,b,v,T,E,U,L)}catch(K){if(M(H),!(K instanceof A))throw K;z(1,0)}}function v0(n,o,s,d,p,m,y,b,v,T,E){var U=R();try{Bd(n,o,s,d,p,m,y,b,v,T,E)}catch(L){if(M(U),!(L instanceof A))throw L;z(1,0)}}function w0(n,o,s,d,p,m,y,b,v,T){var E=R();try{Md(n,o,s,d,p,m,y,b,v,T)}catch(U){if(M(E),!(U instanceof A))throw U;z(1,0)}}function $0(n,o){var s=R();try{return Rd(n,o)}catch(d){if(M(s),!(d instanceof A))throw d;z(1,0)}}function C0(n,o,s,d,p,m,y,b,v,T,E){var U=R();try{return zd(n,o,s,d,p,m,y,b,v,T,E)}catch(L){if(M(U),!(L instanceof A))throw L;z(1,0)}}function x0(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z){var se=R();try{return Ud(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z)}catch(ue){if(M(se),!(ue instanceof A))throw ue;z(1,0)}}function S0(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K){var Z=R();try{return Nd(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K)}catch(se){if(M(Z),!(se instanceof A))throw se;z(1,0)}}function T0(n,o,s,d,p){var m=R();try{return Ld(n,o,s,d,p)}catch(y){if(M(m),!(y instanceof A))throw y;return z(1,0),0n}}function I0(n,o,s,d,p){var m=R();try{return Vd(n,o,s,d,p)}catch(y){if(M(m),!(y instanceof A))throw y;return z(1,0),0n}}function A0(n,o,s,d,p){var m=R();try{return Wd(n,o,s,d,p)}catch(y){if(M(m),!(y instanceof A))throw y;z(1,0)}}function k0(n,o,s,d,p){var m=R();try{return Gd(n,o,s,d,p)}catch(y){if(M(m),!(y instanceof A))throw y;z(1,0)}}function j0(n,o,s,d,p,m){var y=R();try{return Fd(n,o,s,d,p,m)}catch(b){if(M(y),!(b instanceof A))throw b;z(1,0)}}function E0(n,o,s,d,p,m,y,b,v,T,E){var U=R();try{return Hd(n,o,s,d,p,m,y,b,v,T,E)}catch(L){if(M(U),!(L instanceof A))throw L;z(1,0)}}function P0(n,o,s,d,p,m,y,b){var v=R();try{return qd(n,o,s,d,p,m,y,b)}catch(T){if(M(v),!(T instanceof A))throw T;z(1,0)}}function O0(n,o,s,d,p,m,y,b){var v=R();try{return Kd(n,o,s,d,p,m,y,b)}catch(T){if(M(v),!(T instanceof A))throw T;z(1,0)}}function D0(n,o,s,d,p,m,y){var b=R();try{return Yd(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function B0(n,o,s,d,p,m,y){var b=R();try{return Zd(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function M0(n,o,s,d,p,m,y,b,v,T,E,U){var L=R();try{return Qd(n,o,s,d,p,m,y,b,v,T,E,U)}catch(H){if(M(L),!(H instanceof A))throw H;z(1,0)}}function R0(n,o,s,d,p,m,y,b,v,T,E){var U=R();try{return Jd(n,o,s,d,p,m,y,b,v,T,E)}catch(L){if(M(U),!(L instanceof A))throw L;z(1,0)}}function z0(n,o,s,d,p,m,y,b,v,T,E,U,L){var H=R();try{return Xd(n,o,s,d,p,m,y,b,v,T,E,U,L)}catch(K){if(M(H),!(K instanceof A))throw K;z(1,0)}}function U0(n,o,s,d,p,m,y,b){var v=R();try{tc(n,o,s,d,p,m,y,b)}catch(T){if(M(v),!(T instanceof A))throw T;z(1,0)}}function N0(n,o,s,d,p,m,y){var b=R();try{ic(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function L0(n,o,s,d,p,m,y){var b=R();try{return nc(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function V0(n,o,s,d,p,m,y,b,v,T){var E=R();try{return rc(n,o,s,d,p,m,y,b,v,T)}catch(U){if(M(E),!(U instanceof A))throw U;z(1,0)}}function W0(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K){var Z=R();try{return oc(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K)}catch(se){if(M(Z),!(se instanceof A))throw se;z(1,0)}}function G0(n,o,s,d,p,m,y){var b=R();try{return ac(n,o,s,d,p,m,y)}catch(v){if(M(b),!(v instanceof A))throw v;z(1,0)}}function F0(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z){var se=R();try{sc(n,o,s,d,p,m,y,b,v,T,E,U,L,H,K,Z)}catch(ue){if(M(se),!(ue instanceof A))throw ue;z(1,0)}}function H0(n,o,s,d,p,m,y,b,v){var T=R();try{uc(n,o,s,d,p,m,y,b,v)}catch(E){if(M(T),!(E instanceof A))throw E;z(1,0)}}function q0(n,o,s,d){var p=R();try{return lc(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;z(1,0)}}function K0(n,o,s,d,p,m,y,b,v,T,E){var U=R();try{dc(n,o,s,d,p,m,y,b,v,T,E)}catch(L){if(M(U),!(L instanceof A))throw L;z(1,0)}}function Y0(n,o,s,d,p,m,y,b,v,T,E,U,L){var H=R();try{cc(n,o,s,d,p,m,y,b,v,T,E,U,L)}catch(K){if(M(H),!(K instanceof A))throw K;z(1,0)}}function Z0(n,o,s,d){var p=R();try{return pc(n,o,s,d)}catch(m){if(M(p),!(m instanceof A))throw m;z(1,0)}}function Q0(n,o,s,d,p,m,y,b){var v=R();try{fc(n,o,s,d,p,m,y,b)}catch(T){if(M(v),!(T instanceof A))throw T;z(1,0)}}function J0(n,o,s,d,p,m,y,b,v,T,E,U,L){var H=R();try{mc(n,o,s,d,p,m,y,b,v,T,E,U,L)}catch(K){if(M(H),!(K instanceof A))throw K;z(1,0)}}function X0(n,o,s,d,p){var m=R();try{hc(n,o,s,d,p)}catch(y){if(M(m),!(y instanceof A))throw y;z(1,0)}}function e$(n,o,s,d,p,m){var y=R();try{return Cd(n,o,s,d,p,m)}catch(b){if(M(y),!(b instanceof A))throw b;z(1,0)}}function t$(n,o,s,d,p,m){var y=R();try{return yc(n,o,s,d,p,m)}catch(b){if(M(y),!(b instanceof A))throw b;z(1,0)}}function i$(n,o,s,d,p,m){var y=R();try{return gc(n,o,s,d,p,m)}catch(b){if(M(y),!(b instanceof A))throw b;z(1,0)}}(function n(){if(gi>0)_i=n;else{if(l)return J?.(i),void bo();N(!l),Ea(),me(),N(!l),(o=>{for(;o.length>0;)o.shift()(i)})(To),gi>0?_i=n:(N(!wa),wa=!0,i.calledRun=!0,V||(bo(),J?.(i),N(!i._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),ve()),ve())}})(),i.PTR_SIZE=4,t=ri?i:new Promise((n,o)=>{J=n,oe=o});for(let n of Object.keys(i))n in e||Object.defineProperty(e,n,{configurable:!0,get(){ke(`Access to module property ('${n}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return t}var d$,c$,np=ne(()=>{"use strict";d$=tp,c$=globalThis.self?.name?.startsWith("em-pthread");c$&&tp()});var ap,kr,p$,ut,sp,Ar,f$,m$,up,h$,rp,lp,op,dp,sn=ne(()=>{"use strict";an();ap=typeof location>"u"?void 0:location.origin,kr=import.meta.url>"file:"&&import.meta.url<"file;",p$=()=>{if(!!1){if(kr){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,ap).href}return import.meta.url}},ut=p$(),sp=()=>{if(ut&&!ut.startsWith("blob:"))return ut.substring(0,ut.lastIndexOf("/")+1)},Ar=(e,t)=>{try{let i=t??ut;return(i?new URL(e,i):new URL(e)).origin===ap}catch{return!1}},f$=(e,t)=>{let i=t??ut;try{return(i?new URL(e,i):new URL(e)).href}catch{return}},m$=(e,t)=>`${t??"./"}${e}`,up=async e=>{let i=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(i)},h$=async e=>(await import(/*webpackIgnore:true*/ /*@vite-ignore*/e)).default,rp=(ep(),ji(Xc)).default,lp=async()=>{if(!ut)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Ar(ut))return[void 0,rp()];let e=await up(ut);return[e,rp(e)]},op=(np(),ji(ip)).default,dp=async(e,t,i,r)=>{let a=op&&!(e||t);if(a)if(ut)a=Ar(ut);else if(r&&!i)a=!0;else throw new Error("cannot determine the script source URL.");if(a)return[void 0,op];{let u="ort-wasm-simd-threaded.jsep.mjs",l=e??f$(u,t),c=!!1&&i&&l&&!Ar(l,t),f=c?await up(l):l??m$(u,t);return[c?f:void 0,await h$(f)]}}});var jr,Er,yn,cp,y$,g$,_$,un,Me,Lt=ne(()=>{"use strict";sn();Er=!1,yn=!1,cp=!1,y$=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},g$=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},_$=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},un=async e=>{if(Er)return Promise.resolve();if(yn)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(cp)throw new Error("previous call to 'initializeWebAssembly()' failed.");yn=!0;let t=e.initTimeout,i=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!_$())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!g$())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let r=y$();i>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+i+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=i=1);let a=e.wasmPaths,u=typeof a=="string"?a:void 0,l=a?.mjs,c=l?.href??l,f=a?.wasm,h=f?.href??f,g=e.wasmBinary,[_,w]=await dp(c,u,i>1,!!g||!!h),x=!1,$=[];if(t>0&&$.push(new Promise(S=>{setTimeout(()=>{x=!0,S()},t)})),$.push(new Promise((S,O)=>{let j={numThreads:i};if(g)j.wasmBinary=g;else if(h||u)j.locateFile=I=>h??u+I;else if(c&&c.indexOf("blob:")!==0)j.locateFile=I=>new URL(I,c).href;else if(_){let I=sp();I&&(j.locateFile=D=>I+D)}w(j).then(I=>{yn=!1,Er=!0,jr=I,S(),_&&URL.revokeObjectURL(_)},I=>{yn=!1,cp=!0,O(I)})})),await Promise.race($),x)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Me=()=>{if(Er&&jr)return jr;throw new Error("WebAssembly is not initialized yet.")}});var lt,Oi,Pe,gn=ne(()=>{"use strict";Lt();lt=(e,t)=>{let i=Me(),r=i.lengthBytesUTF8(e)+1,a=i._malloc(r);return i.stringToUTF8(e,a,r),t.push(a),a},Oi=(e,t,i,r)=>{if(typeof e=="object"&&e!==null){if(i.has(e))throw new Error("Circular reference in options");i.add(e)}Object.entries(e).forEach(([a,u])=>{let l=t?t+a:a;if(typeof u=="object")Oi(u,l+".",i,r);else if(typeof u=="string"||typeof u=="number")r(l,u.toString());else if(typeof u=="boolean")r(l,u?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof u}`)})},Pe=e=>{let t=Me(),i=t.stackSave();try{let r=t.PTR_SIZE,a=t.stackAlloc(2*r);t._OrtGetLastError(a,a+r);let u=Number(t.getValue(a,r===4?"i32":"i64")),l=t.getValue(a+r,"*"),c=l?t.UTF8ToString(l):"";throw new Error(`${e} ERROR_CODE: ${u}, ERROR_MESSAGE: ${c}`)}finally{t.stackRestore(i)}}});var pp,fp=ne(()=>{"use strict";Lt();gn();pp=e=>{let t=Me(),i=0,r=[],a=e||{};try{if(e?.logSeverityLevel===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(a.terminate=!1);let u=0;return e?.tag!==void 0&&(u=lt(e.tag,r)),i=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,u),i===0&&Pe("Can't create run options."),e?.extra!==void 0&&Oi(e.extra,"",new WeakSet,(l,c)=>{let f=lt(l,r),h=lt(c,r);t._OrtAddRunConfigEntry(i,f,h)!==0&&Pe(`Can't set a run config entry: ${l} - ${c}.`)}),[i,r]}catch(u){throw i!==0&&t._OrtReleaseRunOptions(i),r.forEach(l=>t._free(l)),u}}});var b$,v$,w$,_n,$$,mp,hp=ne(()=>{"use strict";Lt();gn();b$=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},v$=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},w$=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(i=>(typeof i=="string"?i:i.name)==="webgpu")&&(e.enableMemPattern=!1)},_n=(e,t,i,r)=>{let a=lt(t,r),u=lt(i,r);Me()._OrtAddSessionConfigEntry(e,a,u)!==0&&Pe(`Can't set a session config entry: ${t} - ${i}.`)},$$=async(e,t,i)=>{let r=t.executionProviders;for(let a of r){let u=typeof a=="string"?a:a.name,l=[];switch(u){case"webnn":if(u="WEBNN",typeof a!="string"){let w=a?.deviceType;w&&_n(e,"deviceType",w,i)}break;case"webgpu":if(u="JS",typeof a!="string"){let _=a;if(_?.preferredLayout){if(_.preferredLayout!=="NCHW"&&_.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${_.preferredLayout}`);_n(e,"preferredLayout",_.preferredLayout,i)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${u}`)}let c=lt(u,i),f=l.length,h=0,g=0;if(f>0){h=Me()._malloc(f*Me().PTR_SIZE),i.push(h),g=Me()._malloc(f*Me().PTR_SIZE),i.push(g);for(let _=0;_<f;_++)Me().setValue(h+_*Me().PTR_SIZE,l[_][0],"*"),Me().setValue(g+_*Me().PTR_SIZE,l[_][1],"*")}await Me()._OrtAppendExecutionProvider(e,c,h,g,f)!==0&&Pe(`Can't append execution provider: ${u}.`)}},mp=async e=>{let t=Me(),i=0,r=[],a=e||{};w$(a);try{let u=b$(a.graphOptimizationLevel??"all"),l=v$(a.executionMode??"sequential"),c=typeof a.logId=="string"?lt(a.logId,r):0,f=a.logSeverityLevel??2;if(!Number.isInteger(f)||f<0||f>4)throw new Error(`log severity level is not valid: ${f}`);let h=a.logVerbosityLevel??0;if(!Number.isInteger(h)||h<0||h>4)throw new Error(`log verbosity level is not valid: ${h}`);let g=typeof a.optimizedModelFilePath=="string"?lt(a.optimizedModelFilePath,r):0;if(i=t._OrtCreateSessionOptions(u,!!a.enableCpuMemArena,!!a.enableMemPattern,l,!!a.enableProfiling,0,c,f,h,g),i===0&&Pe("Can't create session options."),a.executionProviders&&await $$(i,a,r),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);_n(i,"enableGraphCapture",a.enableGraphCapture.toString(),r)}if(a.freeDimensionOverrides)for(let[_,w]of Object.entries(a.freeDimensionOverrides)){if(typeof _!="string")throw new Error(`free dimension override name must be a string: ${_}`);if(typeof w!="number"||!Number.isInteger(w)||w<0)throw new Error(`free dimension override value must be a non-negative integer: ${w}`);let x=lt(_,r);t._OrtAddFreeDimensionOverride(i,x,w)!==0&&Pe(`Can't set a free dimension override: ${_} - ${w}.`)}return a.extra!==void 0&&Oi(a.extra,"",new WeakSet,(_,w)=>{_n(i,_,w,r)}),[i,r]}catch(u){throw i!==0&&t._OrtReleaseSessionOptions(i)!==0&&Pe("Can't release session options."),r.forEach(l=>t._free(l)),u}}});var Vt,xt,Wt,di,Di,bn,vn,Pr,ge=ne(()=>{"use strict";Vt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},xt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Wt=(e,t)=>{let i=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((a,u)=>a*u,1);return i>0?Math.ceil(r*i):void 0},di=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Di=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},bn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",vn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Pr=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}});var Bi,Or=ne(()=>{"use strict";an();Bi=async e=>{if(typeof e=="string")if(!1)try{let{readFile:t}=vr("node:fs/promises");return new Uint8Array(await t(e))}catch(t){if(t.code==="ERR_FS_FILE_TOO_LARGE"){let{createReadStream:i}=vr("node:fs"),r=i(e),a=[];for await(let u of r)a.push(u);return new Uint8Array(Buffer.concat(a))}throw t}else{let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let i=t.headers.get("Content-Length"),r=i?parseInt(i,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),u;try{u=new ArrayBuffer(r)}catch(c){if(c instanceof RangeError){let f=Math.ceil(r/65536);u=new WebAssembly.Memory({initial:f,maximum:f}).buffer}else throw c}let l=0;for(;;){let{done:c,value:f}=await a.read();if(c)break;let h=f.byteLength;new Uint8Array(u,l,h).set(f),l+=h}return new Uint8Array(u,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}});var C$,x$,yp,gp,wn,S$,Te,St=ne(()=>{"use strict";ge();C$=["V","I","W","E","F"],x$=(e,t)=>{console.log(`[${C$[e]},${new Date().toISOString()}]${t}`)},wn=(e,t)=>{yp=e,gp=t},S$=(e,t)=>{let i=Di(e),r=Di(yp);i>=r&&x$(i,typeof t=="function"?t():t)},Te=(...e)=>{gp&&S$(...e)}});var Dr,Tt,F,Xt,$n,_p,bp,$e=ne(()=>{"use strict";Dr=class{static calcMatMulShape(t,i){return t[1]!==i[0]?void 0:[t[0],i[1]]}},Tt=class{static calcShape(t,i,r=!1){let a=t.length,u=i.length;if(a===0)return i;if(u===0)return t;let l=Math.max(t.length,i.length),c=new Array(l);if(r){if(a<2||u<2)return;let f=Dr.calcMatMulShape([t[a-2],t[a-1]],[i[u-2],i[u-1]]);if(f===void 0)return;[c[l-2],c[l-1]]=f}for(let f=r?3:1;f<=l;f++){let h=a-f<0?1:t[a-f],g=u-f<0?1:i[u-f];if(h!==g&&h>1&&g>1)return;let _=Math.max(h,g);if(h&&g)c[l-f]=Math.max(h,g);else{if(_>1)return;c[l-f]=0}}return c}static isValidBroadcast(t,i){let r=t.length,a=i.length;if(r>a)return!1;for(let u=1;u<=r;u++)if(t[r-u]!==1&&t[r-u]!==i[a-u])return!1;return!0}},F=class e{static size(t){return e.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,i=4){let r=t.length;if(r===0)return[];let a=new Array(r),u=r-1;for(;u>=0;){if(t[u]%i===0){a[u]=t[u]/i;break}if(i%t[u]!==0)throw new Error("cannot convert shape");a[u]=1,i/=t[u],u--}for(u--;u>=0;u--)a[u]=t[u];return a}static sizeFromDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,i,t.length)}static sizeToDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeToDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,0,i)}static getSizeFromDimensionRange(t,i,r){let a=1;for(let u=i;u<r;u++){if(t[u]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[u])}return a}static computeStrides(t){let i=t.length;if(i===0)return[];if(i===1)return[1];let r=new Array(i);r[i-1]=1,r[i-2]=t[i-1];for(let a=i-3;a>=0;--a)r[a]=r[a+1]*t[a+1];return r}static normalizeAxis(t,i){if(t<-i&&t>=i)throw new Error("unsupported axis for this operation.");return t<0?t+i:t}static normalizeAxes(t,i){return t.map(r=>this.normalizeAxis(r,i??t.length))}static sortBasedOnPerm(t,i){return i?i.map(r=>t[r]):t.slice().reverse()}static padShape(t,i){let r=t.length;return t.map((a,u)=>a+i[u]+i[u+r])}static areEqual(t,i){return t.length!==i.length?!1:t.every((r,a)=>r===i[a])}},Xt=class e{static adjustPoolAttributes(t,i,r,a,u,l){if(!t&&r.length!==i.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let c=0;c<i.length-2;c++)c>=r.length?r.push(i[c+2]):r[c]=i[c+2];for(let c=0;c<r.length;c++)if(c<a.length){if(a[c]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let c=0;c<r.length;c++)if(c<u.length){if(u[c]<0)throw new Error("dilations should be greater than or equal to 1")}else u.push(1);for(let c=0;c<r.length*2;c++)if(c<l.length){if(l[c]<0)throw new Error("pad should be greater than or equal to 1")}else l.push(0);for(let c=0;c<r.length;c++){if(r[c]<=0)throw new Error("kernel shapes need to be greater than 0");if(l[c]>=r[c]||l[c+r.length]>=r[c])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,i,r,a,u,l,c){if(c){if(u.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let f=0;f<t.length-2;f++)e.adjustPadAndReturnShape(t[f+(l?1:2)],i[f],r[f],a[f],u,f,f+t.length-2,c)}}static computePoolOutputShape(t,i,r,a,u,l,c){if(i.length<=0)throw new Error("input shape must be of size greater than 0");let f=[i[0],i[1]];return e.computeShapeHelper(t,i,f,r,a,u,l,c),f}static computeConvOutputShape(t,i,r,a,u,l,c){if(t.length<=0||i.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let f=[t[0],i[0]];return e.computeShapeHelper(!1,t,f,r,a,u,l,c),f}static computeShapeHelper(t,i,r,a,u,l,c,f){if(t)for(let h=0;h<i.length-2;h++)r.push(1);else for(let h=0;h<i.length-2;h++)r.push(e.adjustPadAndReturnShape(i[h+2],a[h],u[h],l[h],c,h,h+i.length-2,f))}static adjustPadAndReturnShape(t,i,r,a,u,l,c,f){let h=r*(a-1)+1;if(f&&f!=="NOTSET")switch(f){case"VALID":return u[l]=0,u[c]=0,Math.floor((t-h)/i+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let _=((t+i-1)/i-1)*i+a-t;return u[l]=Math.floor(f==="SAME_LOWER"?(_+1)/2:_/2),u[c]=_-u[l],Math.floor((t+_-a)/i+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+u[l]+u[c]-h)/i+1)}},$n=class{static getShapeOfGemmResult(t,i,r,a,u){if(t.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let l,c,f;i?(l=t[1],c=t[0]):(l=t[0],c=t[1]);let h=-1;if(a?(f=r[0],h=1):(f=r[1],h=0),r[h]!==c)throw new Error("dimension mismatch");if(l<=0||f<=0||c<=0)throw new Error("invalid shape specified");if(u&&!Tt.isValidBroadcast(u,[l,f]))throw new Error("gemm: invalid bias shape for broadcast");return[l,f,c]}},_p=-34028234663852886e22,bp=34028234663852886e22});var Cn,Br=ne(()=>{"use strict";ge();Cn=(e,t)=>new(di(t))(e)});var wp,Rr,$p,T$,vp,I$,Cp,xn,Sn,Mr,xp,Sp=ne(()=>{"use strict";ge();St();wp=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Rr=(e,t)=>{if(t==="int32")return e;let i=wp.get(t);if(!i)throw new Error(`WebNN backend does not support data type: ${t}`);let r=i/8;if(e.byteLength%r!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let a=e.byteLength/r,u=new(di(t))(e.buffer,e.byteOffset,a);switch(t){case"int64":case"uint64":{let l=new Int32Array(a);for(let c=0;c<a;c++){let f=u[c];if(f>2147483647n||f<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");l[c]=Number(f)}return new Uint8Array(l.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&u.some(c=>c>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let l=Int32Array.from(u,Number);return new Uint8Array(l.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},$p=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let i=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,i);switch(t){case"int64":{let a=BigInt64Array.from(r,BigInt);return new Uint8Array(a.buffer)}case"uint64":{if(r.some(u=>u<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let a=BigUint64Array.from(r,BigInt);return new Uint8Array(a.buffer)}case"int8":{if(r.some(u=>u<-128||u>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let a=Int8Array.from(r,Number);return new Uint8Array(a.buffer)}case"uint8":{if(r.some(a=>a<0||a>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(r,Number)}case"uint32":{if(r.some(u=>u<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let a=Uint32Array.from(r,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},T$=1,vp=()=>T$++,I$=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Cp=(e,t)=>{let i=wp.get(e);if(!i)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((r,a)=>r*a)*i/8):0},xn=class{constructor(t){this.isDataConverted=!1;let{sessionId:i,context:r,tensor:a,dataType:u,shape:l,fallbackDataType:c}=t;this.sessionId=i,this.mlContext=r,this.mlTensor=a,this.dataType=u,this.tensorShape=l,this.fallbackDataType=c}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Cp(this.dataType,this.tensorShape)}destroy(){Te("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(t){this.mlContext.writeTensor(this.mlTensor,t)}async read(t){if(this.fallbackDataType){let i=await this.mlContext.readTensor(this.mlTensor),r=$p(new Uint8Array(i),this.dataType);if(t){(t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)).set(r);return}else return r.buffer}else return t?this.mlContext.readTensor(this.mlTensor,t):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(t,i,r){return this.mlContext===t&&this.dataType===i&&this.tensorShape.length===r.length&&this.tensorShape.every((a,u)=>a===r[u])}setIsDataConverted(t){this.isDataConverted=t}},Sn=class{constructor(t,i){this.tensorManager=t;this.wrapper=i}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(t,i,r,a){let u=this.tensorManager.getMLContext(t),l=this.tensorManager.getMLOpSupportLimits(t),c;if(!l?.input.dataTypes.includes(i)){if(c=I$.get(i),!c||l?.input.dataTypes.includes(c))throw new Error(`WebNN backend does not support data type: ${i}`);Te("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${i} to ${c}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(u,i,r))return this.wrapper.tensor;if(a){if(this.wrapper.byteLength!==Cp(i,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let f=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(t,i,r,f,!0,!0,c),a&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(t){let i=t;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")i=Rr(t,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(t.byteLength===this.wrapper.byteLength){this.wrapper.write(i);return}else Te("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(i):this.activeUpload=new Uint8Array(i)}async download(t){if(this.activeUpload){let i=this.wrapper?.isDataConverted?$p(this.activeUpload,this.wrapper?.type):this.activeUpload;if(t){t instanceof ArrayBuffer?new Uint8Array(t).set(i):new Uint8Array(t.buffer,t.byteOffset,t.byteLength).set(i);return}else return i.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return t?this.wrapper.read(t):this.wrapper.read()}},Mr=class{constructor(t){this.backend=t;this.tensorTrackersById=new Map;this.freeTensors=[];this.externalTensors=new Set}getMLContext(t){let i=this.backend.getMLContext(t);if(!i)throw new Error("MLContext not found for session.");return i}getMLOpSupportLimits(t){return this.backend.getMLOpSupportLimits(t)}reserveTensorId(){let t=vp();return this.tensorTrackersById.set(t,new Sn(this)),t}releaseTensorId(t){let i=this.tensorTrackersById.get(t);i&&(this.tensorTrackersById.delete(t),i.tensorWrapper&&this.releaseTensor(i.tensorWrapper))}async ensureTensor(t,i,r,a,u){Te("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${i}, dataType: ${r}, shape: ${a}, copyOld: ${u}}`);let l=this.tensorTrackersById.get(i);if(!l)throw new Error("Tensor not found.");return l.ensureTensor(t,r,a,u)}upload(t,i){let r=this.tensorTrackersById.get(t);if(!r)throw new Error("Tensor not found.");r.upload(i)}async download(t,i){Te("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${t}, dstBuffer: ${i?.byteLength}}`);let r=this.tensorTrackersById.get(t);if(!r)throw new Error("Tensor not found.");return r.download(i)}releaseTensorsForSession(t){for(let i of this.freeTensors)i.sessionId===t&&i.destroy();this.freeTensors=this.freeTensors.filter(i=>i.sessionId!==t)}registerTensor(t,i,r,a){let u=this.getMLContext(t),l=vp(),c=new xn({sessionId:t,context:u,tensor:i,dataType:r,shape:a});return this.tensorTrackersById.set(l,new Sn(this,c)),this.externalTensors.add(c),l}async getCachedTensor(t,i,r,a,u,l,c){let f=this.getMLContext(t);for(let[g,_]of this.freeTensors.entries())if(_.canReuseTensor(f,i,r)){Te("verbose",()=>`[WebNN] Reusing tensor {dataType: ${i}, ${c?`fallbackDataType: ${c},`:""} shape: ${r}`);let w=this.freeTensors.splice(g,1)[0];return w.sessionId=t,w}Te("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${i}, ${c?`fallbackDataType: ${c},`:""} shape: ${r}}`);let h=await f.createTensor({dataType:c??i,shape:r,dimensions:r,usage:a,writable:u,readable:l});return new xn({sessionId:t,context:f,tensor:h,dataType:i,shape:r,fallbackDataType:c})}releaseTensor(t){this.externalTensors.has(t)&&this.externalTensors.delete(t),this.freeTensors.push(t)}},xp=(...e)=>new Mr(...e)});var Tn,A$,In,Tp=ne(()=>{"use strict";ge();Lt();Br();Sp();St();Tn=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),A$=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let i=Object.keys(e).sort(),r=Object.keys(t).sort();return i.length===r.length&&i.every((a,u)=>a===r[u]&&e[a]===t[a])},In=class{constructor(t){this.tensorManager=xp(this);this.mlContextBySessionId=new Map;this.sessionIdsByMLContext=new Map;this.mlContextCache=[];this.sessionGraphInputs=new Map;this.sessionGraphOutputs=new Map;this.temporaryGraphInputs=[];this.temporaryGraphOutputs=[];this.temporarySessionTensorIds=new Map;this.mlOpSupportLimitsBySessionId=new Map;wn(t.logLevel,!!t.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(t){Te("verbose",()=>`[WebNN] onRunStart {sessionId: ${t}}`),this.activeSessionId=t}onRunEnd(t){Te("verbose",()=>`[WebNN] onRunEnd {sessionId: ${t}}`);let i=this.temporarySessionTensorIds.get(t);if(i){for(let r of i)Te("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(t),this.activeSessionId=void 0}}async createMLContext(t){if(t instanceof GPUDevice){let r=this.mlContextCache.findIndex(a=>a.gpuDevice===t);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext(t);return this.mlContextCache.push({gpuDevice:t,mlContext:a}),a}}else if(t===void 0){let r=this.mlContextCache.findIndex(a=>a.options===void 0&&a.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:a}),a}}let i=this.mlContextCache.findIndex(r=>A$(r.options,t));if(i!==-1)return this.mlContextCache[i].mlContext;{let r=await navigator.ml.createContext(t);return this.mlContextCache.push({options:t,mlContext:r}),r}}registerMLContext(t,i){this.mlContextBySessionId.set(t,i);let r=this.sessionIdsByMLContext.get(i);r||(r=new Set,this.sessionIdsByMLContext.set(i,r)),r.add(t),this.mlOpSupportLimitsBySessionId.has(t)||this.mlOpSupportLimitsBySessionId.set(t,i.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(t,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(t,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(t){this.sessionGraphInputs.delete(t),this.sessionGraphOutputs.delete(t);let i=this.mlContextBySessionId.get(t);if(!i)return;this.tensorManager.releaseTensorsForSession(t),this.mlContextBySessionId.delete(t),this.mlOpSupportLimitsBySessionId.delete(t);let r=this.sessionIdsByMLContext.get(i);if(r.delete(t),r.size===0){this.sessionIdsByMLContext.delete(i);let a=this.mlContextCache.findIndex(u=>u.mlContext===i);a!==-1&&this.mlContextCache.splice(a,1)}}getMLContext(t){return this.mlContextBySessionId.get(t)}getMLOpSupportLimits(t){return this.mlOpSupportLimitsBySessionId.get(t)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(t){Te("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${t}}`),this.tensorManager.releaseTensorId(t)}async ensureTensor(t,i,r,a,u){let l=Tn.get(r);if(!l)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(t??this.currentSessionId,i,l,a,u)}async createTemporaryTensor(t,i,r){Te("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${i}, shape: ${r}}`);let a=Tn.get(i);if(!a)throw new Error(`Unsupported ONNX data type: ${i}`);let u=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(t,u,a,r,!1);let l=this.temporarySessionTensorIds.get(t);return l?l.push(u):this.temporarySessionTensorIds.set(t,[u]),u}uploadTensor(t,i){if(!Me().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Te("verbose",()=>`[WebNN] uploadTensor {tensorId: ${t}, data: ${i.byteLength}}`),this.tensorManager.upload(t,i)}async downloadTensor(t,i){return this.tensorManager.download(t,i)}createMLTensorDownloader(t,i){return async()=>{let r=await this.tensorManager.download(t);return Cn(r,i)}}registerMLTensor(t,i,r,a){let u=Tn.get(r);if(!u)throw new Error(`Unsupported ONNX data type: ${r}`);let l=this.tensorManager.registerTensor(t,i,u,a);return Te("verbose",()=>`[WebNN] registerMLTensor {tensor: ${i}, dataType: ${u}, dimensions: ${a}} -> {tensorId: ${l}}`),l}registerMLConstant(t,i,r,a,u,l,c=!1){if(!l)throw new Error("External mounted files are not available.");let f=t;t.startsWith("./")&&(f=t.substring(2));let h=l.get(f);if(!h)throw new Error(`File with name ${f} not found in preloaded files.`);if(i+r>h.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let g=h.slice(i,i+r).buffer,_;switch(u.dataType){case"float32":_=new Float32Array(g);break;case"float16":_=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(g):new Uint16Array(g);break;case"int32":_=new Int32Array(g);break;case"uint32":_=new Uint32Array(g);break;case"int64":if(c){let w=Rr(new Uint8Array(g),"int64");_=new Int32Array(w.buffer),u.dataType="int32"}else _=new BigInt64Array(g);break;case"uint64":_=new BigUint64Array(g);break;case"int8":_=new Int8Array(g);break;case"int4":case"uint4":case"uint8":_=new Uint8Array(g);break;default:throw new Error(`Unsupported data type: ${u.dataType} in creating WebNN Constant from external data.`)}return Te("verbose",()=>`[WebNN] registerMLConstant {dataType: ${u.dataType}, shape: ${u.shape}}} ${c?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),a.constant(u,_)}registerGraphInput(t){this.temporaryGraphInputs.push(t)}registerGraphOutput(t){this.temporaryGraphOutputs.push(t)}isGraphInput(t,i){let r=this.sessionGraphInputs.get(t);return r?r.includes(i):!1}isGraphOutput(t,i){let r=this.sessionGraphOutputs.get(t);return r?r.includes(i):!1}isGraphInputOutputTypeSupported(t,i,r=!0){let a=Tn.get(Vt(i)),u=this.mlOpSupportLimitsBySessionId.get(t);return typeof a>"u"?!1:r?!!u?.input.dataTypes.includes(a):!!u?.output.dataTypes.includes(a)}flush(){}}});var An=ne(()=>{"use strict"});var Ip,zr,Ur,k$,j$,Ap,Lr,Nr,jp,Ep=ne(()=>{"use strict";St();An();Ip=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),zr=[],Ur=e=>Math.ceil(Number(e)/16)*16,k$=e=>{for(let t=0;t<zr.length;t++){let i=zr[t];if(e<=i)return i}return Math.ceil(e/16)*16},j$=1,Ap=()=>j$++,Lr=async(e,t,i,r)=>{let a=Ur(i),u=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let l=e.getCommandEncoder();e.endComputePass(),l.copyBufferToBuffer(t,0,u,0,a),e.flush(),await u.mapAsync(GPUMapMode.READ);let c=u.getMappedRange();if(r){let f=r();return f.set(new Uint8Array(c,0,i)),f}else return new Uint8Array(c.slice(0,i))}finally{u.destroy()}},Nr=class{constructor(t){this.backend=t;this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[i]of Ip)zr.push(i),this.freeBuffers.set(i,[]),this.freeUniformBuffers.set(i,[]);this.sessionCount=0}upload(t,i){let r=i.buffer,a=i.byteOffset,u=i.byteLength,l=Ur(u),c=this.storageCache.get(t);if(!c)throw new Error("gpu data for uploading does not exist");if(Number(c.originalSize)!==u)throw new Error(`inconsistent data size. gpu data size=${c.originalSize}, data size=${u}`);let f=this.backend.device.createBuffer({mappedAtCreation:!0,size:l,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),h=f.getMappedRange();new Uint8Array(h).set(new Uint8Array(r,a,u)),f.unmap();let g=this.backend.device.createCommandEncoder();g.copyBufferToBuffer(f,0,c.gpuData.buffer,0,l),this.backend.device.queue.submit([g.finish()]),f.destroy(),Te("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${t})`)}memcpy(t,i){let r=this.storageCache.get(t);if(!r)throw new Error("source gpu data for memcpy does not exist");let a=this.storageCache.get(i);if(!a)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==a.originalSize)throw new Error("inconsistent source and destination gpu data size");let u=Ur(r.originalSize),l=this.backend.getCommandEncoder();this.backend.endComputePass(),l.copyBufferToBuffer(r.gpuData.buffer,0,a.gpuData.buffer,0,u)}registerExternalBuffer(t,i,r){let a;if(r){if(a=r[0],t===r[1])return Te("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${i}) => id=${a}, buffer is the same, skip.`),a;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else a=Ap();return this.storageCache.set(a,{gpuData:{id:a,type:0,buffer:t},originalSize:i}),Te("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${i}) => id=${a}, registered.`),a}unregisterExternalBuffer(t){t!==void 0&&(this.storageCache.delete(t),Te("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${t}`))}create(t,i=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=k$(t),a,u=(i&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,l=(i&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(u||l){let h=(u?this.freeBuffers:this.freeUniformBuffers).get(r);h?h.length>0?a=h.pop():a=this.backend.device.createBuffer({size:r,usage:i}):a=this.backend.device.createBuffer({size:r,usage:i})}else a=this.backend.device.createBuffer({size:r,usage:i});let c={id:Ap(),type:0,buffer:a};return this.storageCache.set(c.id,{gpuData:c,originalSize:Number(t)}),Te("verbose",()=>`[WebGPU] GpuDataManager.create(size=${t}) => id=${c.id}`),c}get(t){return this.storageCache.get(t)?.gpuData}release(t){let i=typeof t=="bigint"?Number(t):t,r=this.storageCache.get(i);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Te("verbose",()=>`[WebGPU] GpuDataManager.release(id=${i}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(i),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(t,i){let r=this.storageCache.get(Number(t));if(!r)throw new Error("data does not exist");await Lr(this.backend,r.gpuData.buffer,r.originalSize,i)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let t of this.buffersPending){let i=Ip.get(t.size);if((t.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(t.size)||[];i===void 0||r.length>=i?t.destroy():r.push(t)}else if((t.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(t.size)||[];i===void 0||r.length>=i?t.destroy():r.push(t)}else t.destroy()}this.buffersPending=[]}else{let t=this.capturedPendingBuffers.get(this.backend.currentSessionId);t||(t=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,t));for(let i of this.buffersPending)t.push(i);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(t=>{t.forEach(i=>{i.destroy()})}),this.freeUniformBuffers.forEach(t=>{t.forEach(i=>{i.destroy()})}),this.storageCache.forEach(t=>{t.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(t=>{t.forEach(i=>{i.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(t){let i=this.capturedPendingBuffers.get(t);i&&(i.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(t)),this.sessionCount-=1,this.sessionCount===0&&(Te("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},jp=(...e)=>new Nr(...e)});var Vr,_e,We=ne(()=>{"use strict";Vr=class{constructor(t){Object.assign(this,t)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(t=>`${this[t]}`).join(";")),this.key}},_e=e=>new Vr(e)});var ei,Gr,ze,Ze,re,Oe,Fr,ti,ht,le,kn,q,X,Pp,jn,Wr,Op,xe=ne(()=>{"use strict";ge();$e();ei=64,Gr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},ze=(e,t=1)=>{let i=Gr(e,t);return typeof i=="string"?i:i[0]},Ze=(e,t=1)=>{let i=Gr(e,t);return typeof i=="string"?i:i[1]},re=(...e)=>{let t=[];return e.forEach(i=>{i.length!==0&&t.push({type:12,data:i},{type:12,data:F.computeStrides(i)})}),t},Oe=e=>e%4===0?4:e%2===0?2:1,Fr=(e="f32",t,i="0")=>!t||t===1?`${e}(${i})`:`vec${t}<${e}>(${i})`,ti=(e,t,i)=>e==="f32"?i:t===1?`f32(${i})`:`vec${t}<f32>(${i})`,ht=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,le=(e,t,i,r)=>e.startsWith("uniforms.")&&i>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:i>1?`${e}[${t}]`:e,kn=(e,t,i,r,a)=>{let u=typeof i=="number",l=u?i:i.length,c=[...new Array(l).keys()],f=l<2?"u32":l<=4?`vec${l}<u32>`:`array<u32, ${l}>`,h=Gr(t,a),g=typeof h=="string"?h:h[1],_=typeof h=="string"?h:h[0],w={indices:f,value:g,storage:_,tensor:t},x=ee=>typeof ee=="string"?ee:`${ee}u`,$={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},S=u?"uniforms.":"",O=`${S}${e}_shape`,j=`${S}${e}_strides`,I="";for(let ee=0;ee<l-1;ee++)I+=`
    let dim${ee} = current / ${le(j,ee,l)};
    let rest${ee} = current % ${le(j,ee,l)};
    indices[${ee}] = dim${ee};
    current = rest${ee};
    `;I+=`indices[${l-1}] = current;`;let D=l<2?"":`
  fn o2i_${e}(offset: u32) -> ${w.indices} {
    var indices: ${w.indices};
    var current = offset;
    ${I}
    return indices;
  }`,P=ee=>($.offsetToIndices=!0,l<2?ee:`o2i_${e}(${ee})`),G=[];if(l>=2)for(let ee=l-1;ee>=0;ee--)G.push(`${le(j,ee,l)} * (indices[${ee}])`);let V=l<2?"":`
  fn i2o_${e}(indices: ${w.indices}) -> u32 {
    return ${G.join("+")};
  }`,N=ee=>($.indicesToOffset=!0,l<2?ee:`i2o_${e}(${ee})`),Y=(...ee)=>l===0?"0u":`${w.indices}(${ee.map(x).join(",")})`,J=(ee,Q)=>l<2?`${ee}`:`${le(ee,Q,l)}`,oe=(ee,Q,ae)=>l<2?`${ee}=${ae};`:`${le(ee,Q,l)}=${ae};`,he={},ce=(ee,Q)=>{$.broadcastedIndicesToOffset=!0;let ae=`${Q.name}broadcastedIndicesTo${e}Offset`;if(ae in he)return`${ae}(${ee})`;let tt=[];for(let et=l-1;et>=0;et--){let W=Q.indicesGet("outputIndices",et+Q.rank-l);tt.push(`${J(j,et)} * (${W} % ${J(O,et)})`)}return he[ae]=`fn ${ae}(outputIndices: ${Q.type.indices}) -> u32 {
             return ${tt.length>0?tt.join("+"):"0u"};
           }`,`${ae}(${ee})`},me=(ee,Q)=>(()=>{if(w.storage===w.value)return`${e}[${ee}]=${Q};`;if(w.storage==="vec2<u32>"&&w.value==="i32")return`${e}[${ee}]=vec2<u32>(u32(${Q}), select(0u, 0xFFFFFFFFu, ${Q} < 0));`;if(w.storage==="vec2<u32>"&&w.value==="u32")return`${e}[${ee}]=vec2<u32>(u32(${Q}), 0u);`;if(w.storage==="u32"&&w.value==="vec4<bool>")return`${e}[${ee}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${Q}));`;throw new Error(`not supported combination of storage type ${w.storage} and value type ${w.value} yet`)})(),ve=ee=>(()=>{if(w.storage===w.value)return`${e}[${ee}]`;if(w.storage==="vec2<u32>"&&w.value==="i32")return`i32(${e}[${ee}].x)`;if(w.storage==="vec2<u32>"&&w.value==="u32")return`u32(${e}[${ee}].x)`;if(w.storage==="u32"&&w.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${ee}] & 0xFFu), bool(${e}[${ee}] & 0xFF00u), bool(${e}[${ee}] & 0xFF0000u), bool(${e}[${ee}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${w.storage} and value type ${w.value} yet`)})(),A=l<2?"":`
  fn get_${e}ByIndices(indices: ${w.indices}) -> ${g} {
    return ${ve(`i2o_${e}(indices)`)};
  }`,pe=l<2?"":(()=>{let ee=c.map(ae=>`d${ae}: u32`).join(", "),Q=c.map(ae=>`d${ae}`).join(", ");return`
  fn get_${e}(${ee}) -> ${g} {
    return get_${e}ByIndices(${Y(Q)});
  }`})(),ye=(...ee)=>{if(ee.length!==l)throw new Error(`indices length must be ${l}`);let Q=ee.map(x).join(",");return l===0?ve("0u"):l===1?ve(Q[0]):($.get=!0,$.getByIndices=!0,$.indicesToOffset=!0,`get_${e}(${Q})`)},C=ee=>l<2?ve(ee):($.getByIndices=!0,$.indicesToOffset=!0,`get_${e}ByIndices(${ee})`),ie=l<2?"":`
  fn set_${e}ByIndices(indices: ${w.indices}, value: ${g}) {
    ${me(`i2o_${e}(indices)`,"value")}
  }`,Se=l<2?"":(()=>{let ee=c.map(ae=>`d${ae}: u32`).join(", "),Q=c.map(ae=>`d${ae}`).join(", ");return`
  fn set_${e}(${ee}, value: ${g}) {
    set_${e}ByIndices(${Y(Q)}, value);
  }`})();return{impl:()=>{let ee=[],Q=!1;return $.offsetToIndices&&(ee.push(D),Q=!0),$.indicesToOffset&&(ee.push(V),Q=!0),$.broadcastedIndicesToOffset&&(Object.values(he).forEach(ae=>ee.push(ae)),Q=!0),$.set&&(ee.push(Se),Q=!0),$.setByIndices&&(ee.push(ie),Q=!0),$.get&&(ee.push(pe),Q=!0),$.getByIndices&&(ee.push(A),Q=!0),!u&&Q&&ee.unshift(`const ${O} = ${w.indices}(${i.join(",")});`,`const ${j} = ${w.indices}(${F.computeStrides(i).join(",")});`),ee.join(`
`)},type:w,offsetToIndices:P,indicesToOffset:N,broadcastedIndicesToOffset:ce,indices:Y,indicesGet:J,indicesSet:oe,set:(...ee)=>{if(ee.length!==l+1)throw new Error(`indices length must be ${l}`);let Q=ee[l];if(typeof Q!="string")throw new Error("value must be string");let ae=ee.slice(0,l).map(x).join(",");return l===0?me("0u",Q):l===1?me(ae[0],Q):($.set=!0,$.setByIndices=!0,$.indicesToOffset=!0,`set_${e}(${ae}, ${Q})`)},setByOffset:me,setByIndices:(ee,Q)=>l<2?me(ee,Q):($.setByIndices=!0,$.indicesToOffset=!0,`set_${e}ByIndices(${ee}, ${Q});`),get:ye,getByOffset:ve,getByIndices:C,usage:r,name:e,strides:j,shape:O,rank:l}},q=(e,t,i,r=1)=>kn(e,t,i,"input",r),X=(e,t,i,r=1)=>kn(e,t,i,"output",r),Pp=(e,t,i)=>kn(e,t,i,"atomicOutput",1),jn=(e,t,i,r=1)=>kn(e,t,i,"internal",r),Wr=class{constructor(t,i){this.normalizedDispatchGroup=t;this.limits=i;this.internalVariables=[];this.variables=[];this.uniforms=[];this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(t){return`if (global_idx >= ${typeof t=="number"?`${t}u`:t}) { return; }`}mainStart(t=ei){let i=typeof t=="number"?t:t[0],r=typeof t=="number"?1:t[1],a=typeof t=="number"?1:t[2];if(i>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||a>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${i}, ${r}, ${a}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(i*r*a>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${i}, ${r}, ${a}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let u=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,l=u?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,c=u?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${i*r*a}u + local_idx;`;return`@compute @workgroup_size(${i}, ${r}, ${a})
  fn main(${l}) {
    ${c}
  `}appendVariableUniforms(t){t.rank!==0&&(t.shape.startsWith("uniforms.")&&this.uniforms.push({name:t.shape.replace("uniforms.",""),type:"u32",length:t.rank}),t.strides.startsWith("uniforms.")&&this.uniforms.push({name:t.strides.replace("uniforms.",""),type:"u32",length:t.rank}))}declareVariable(t,i){if(t.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(t),this.appendVariableUniforms(t);let r=t.usage==="input"?"read":"read_write",a=t.usage==="atomicOutput"?"atomic<i32>":t.type.storage;return`@group(0) @binding(${i}) var<storage, ${r}> ${t.name}: array<${a}>;`}declareVariables(...t){return t.map(i=>this.declareVariable(i,this.variableIndex++)).join(`
`)}registerInternalVariable(t){if(t.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(t),this.appendVariableUniforms(t)}registerInternalVariables(...t){return t.forEach(i=>this.registerInternalVariable(i)),this}registerUniform(t,i,r=1){return this.uniforms.push({name:t,type:i,length:r}),this}registerUniforms(t){return this.uniforms=this.uniforms.concat(t),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let t=[];for(let{name:i,type:r,length:a}of this.uniforms)if(a&&a>4)r==="f16"?t.push(`@align(16) ${i}:array<mat2x4<${r}>, ${Math.ceil(a/8)}>`):t.push(`${i}:array<vec4<${r}>, ${Math.ceil(a/4)}>`);else{let u=a==null||a===1?r:`vec${a}<${r}>`;t.push(`${i}:${u}`)}return`
      struct Uniforms { ${t.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(t=>t.impl()).join(`
`)+this.internalVariables.map(t=>t.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let t=i=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(i)];return this.uniforms.map(i=>[t(i.type),i.length??1])}},Op=(e,t)=>new Wr(e,t)});var E$,Dp,P$,O$,D$,B$,Qe,Bp,Mp,Dt=ne(()=>{"use strict";ge();$e();We();xe();E$=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Dp=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),P$=(e,t)=>F.sortBasedOnPerm(e,Dp(e.length,t)),O$=(e,t,i,r)=>{let a=`fn perm(i: ${r.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`;for(let u=0;u<t;++u)a+=`a[${e[u]}]=i[${u}];`;return a+="return a;}"},D$=(e,t)=>{let i=[],r=[];for(let a=0;a<e.length;++a)e[a]!==1&&i.push(e[a]),e[t[a]]!==1&&r.push(t[a]);return{newShape:i,newPerm:r}},B$=(e,t)=>{let i=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<i)return!1;i=e[r]}return!0},Qe=(e,t)=>{let i=e.dataType,r=e.dims.length,a=Dp(r,t),u=P$(e.dims,a),l=e.dims,c=u,f=r<2||B$(a,e.dims),h;if(f)return h=S=>{let O=q("input",i,l,4),j=X("output",i,c,4);return`
  ${S.registerUniform("output_size","u32").declareVariables(O,j)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let S=F.size(u);return{outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(S/64/4)},programUniforms:[{type:12,data:Math.ceil(S/4)}]}},getShaderSource:h};let{newShape:g,newPerm:_}=D$(e.dims,a),w=F.areEqual(_,[2,3,1]),x=F.areEqual(_,[3,1,2]);if(g.length===2||w||x){l=w?[g[0],g[1]*g[2]]:x?[g[0]*g[1],g[2]]:g,c=[l[1],l[0]];let S=16;return h=O=>{let j=q("a",i,l.length),I=X("output",i,c.length);return`
  ${O.registerUniform("output_size","u32").declareVariables(j,I)}
  var<workgroup> tile : array<array<${I.type.value}, ${S+1}>, ${S}>;
  ${O.mainStart([S,S,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${S} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${S}u + local_id.x;
    let input_row = workgroup_id_x * ${S}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${j.getByIndices(`${j.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${S}u + local_id.x;
    let output_row = workgroup_id_y * ${S}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${I.setByIndices(`${I.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let O=F.size(u);return{outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(c[1]/S),y:Math.ceil(c[0]/S)},programUniforms:[{type:12,data:O},...re(l,c)]}},getShaderSource:h}}return h=S=>{let O=q("a",i,l.length),j=X("output",i,c.length);return`
  ${S.registerUniform("output_size","u32").declareVariables(O,j)}

  ${O$(a,r,O,j)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${j.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${j.setByOffset("global_idx",O.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let S=F.size(u);return{outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...re(l,c)]}},getShaderSource:h}},Bp=(e,t)=>{E$(e.inputs,t.perm),e.compute(Qe(e.inputs[0],t.perm))},Mp=e=>_e({perm:e.perm})});var M$,R$,z$,U$,N$,L$,V$,W$,G$,F$,It,Rp,zp,Up,Np,Lp,Vp,Wp,Gp,Fp,Hp,qp=ne(()=>{"use strict";ge();$e();xe();En();Dt();M$={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},R$={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},z$={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},U$={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},N$=(e,t)=>{let i=[];for(let r=t-e;r<t;++r)i.push(r);return i},L$=(e,t)=>{let i=[],r=e.length;for(let u=0;u<r;u++)t.indexOf(u)===-1&&i.push(e[u]);let a=t.map(u=>e[u]);return[i,a]},V$=(e,t)=>{let i=e.length+t.length,r=[],a=0;for(let u=0;u<i;u++)t.indexOf(u)===-1?r.push(e[a++]):r.push(1);return r},W$=(e,t)=>{for(let i=0;i<e.length;++i)if(e[e.length-i-1]!==t-1-i)return!1;return!0},G$=(e,t)=>{let i=[];if(!W$(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&i.push(r);e.forEach(r=>i.push(r))}return i},F$=(e,t,i,r,a,u,l)=>{let c=i[0].dims,f=F.size(u),h=F.size(l),g=q("_A",i[0].dataType,c),_=X("output",a,u),w=64;f===1&&(w=256);let x=`
          var<workgroup> aBestValues : array<f32, ${w}>;
       `,$=S=>`
        ${S.registerUniform("reduceSize","u32").declareVariables(g,_)}
        ${x}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${S.mainStart(w)}

          let outputIndex = global_idx / ${w};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${z$[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${w}) {
           let candidate = f32(${g.getByOffset("offset + k")});
           bestValue = ${M$[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${w}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${R$[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${_.setByOffset("outputIndex",`${r==="mean"?`${_.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${_.type.storage}(${U$[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${w}`,inputDependencies:["type"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:f},programUniforms:[{type:12,data:h}]})}},It=(e,t,i,r)=>{let a=e.inputs.length===1?i:Hr(e.inputs,i),u=a.axes;u.length===0&&!a.noopWithEmptyAxes&&(u=e.inputs[0].dims.map((x,$)=>$));let l=F.normalizeAxes(u,e.inputs[0].dims.length),c=l,f=e.inputs[0],h=G$(c,e.inputs[0].dims.length);h.length>0&&(f=e.compute(Qe(e.inputs[0],h),{inputs:[0],outputs:[-1]})[0],c=N$(c.length,f.dims.length));let[g,_]=L$(f.dims,c),w=g;a.keepDims&&(w=V$(g,l)),e.compute(F$(t,a.cacheKey,[f],r,e.inputs[0].dataType,w,_),{inputs:[f]})},Rp=(e,t)=>{It(e,"ReduceMeanShared",t,"mean")},zp=(e,t)=>{It(e,"ReduceL1Shared",t,"l1")},Up=(e,t)=>{It(e,"ReduceL2Shared",t,"l2")},Np=(e,t)=>{It(e,"ReduceLogSumExpShared",t,"logSumExp")},Lp=(e,t)=>{It(e,"ReduceMaxShared",t,"max")},Vp=(e,t)=>{It(e,"ReduceMinShared",t,"min")},Wp=(e,t)=>{It(e,"ReduceProdShared",t,"prod")},Gp=(e,t)=>{It(e,"ReduceSumShared",t,"sum")},Fp=(e,t)=>{It(e,"ReduceSumSquareShared",t,"sumSquare")},Hp=(e,t)=>{It(e,"ReduceLogSumShared",t,"logSum")}});var At,H$,Pn,Hr,kt,q$,K$,Y$,Z$,Q$,J$,X$,eC,tC,iC,jt,Kp,Yp,Zp,Qp,Jp,Xp,ef,tf,nf,rf,En=ne(()=>{"use strict";ge();$e();We();xe();qp();At=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},H$=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Pn=(e,t,i,r,a,u,l=!1,c=!1)=>{let f=[],h=i[0].dims,g=h.length,_=F.normalizeAxes(a,g),w=!c&&_.length===0;h.forEach((O,j)=>{w||_.indexOf(j)>=0?l&&f.push(1):f.push(O)});let x=f.length,$=F.size(f);return{name:e,shaderCache:t,getShaderSource:O=>{let j=[],I=q("_A",i[0].dataType,g),D=X("output",u,x),P=r(I,D,_),G=P[2];for(let V=0,N=0;V<g;V++)w||_.indexOf(V)>=0?(l&&N++,G=`for(var j${V}: u32 = 0; j${V} < ${h[V]}; j${V}++) {
                  ${P[2].includes("last_index")?`let last_index = j${V};`:""}
                  ${I.indicesSet("input_indices",V,`j${V}`)}
                  ${G}
                }`):(j.push(`${I.indicesSet("input_indices",V,D.indicesGet("output_indices",N))};`),N++);return`

        ${O.registerUniform("output_size","u32").declareVariables(I,D)}

        ${O.mainStart()}
          ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${I.type.indices};
          let output_indices = ${D.offsetToIndices("global_idx")};

          ${j.join(`
`)}
          ${P[0]}       // init ops for reduce max/min
          ${P[1]}
          ${G}
          ${P[3]}
          ${P.length===4?D.setByOffset("global_idx","value"):P.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:f,dataType:u}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:[{type:12,data:$},...re(h,f)]})}},Hr=(e,t)=>{let i=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>i.push(Number(r))),_e({axes:i,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},kt=(e,t,i,r)=>{let a=e.inputs,u=a.length===1?i:Hr(a,i);e.compute(Pn(t,{hint:u.cacheKey,inputDependencies:["rank"]},[a[0]],u.noopWithEmptyAxes&&u.axes.length===0?H$:r,u.axes,a[0].dataType,u.keepDims,u.noopWithEmptyAxes),{inputs:[0]})},q$=(e,t)=>{At(e.inputs),kt(e,"ReduceLogSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},K$=(e,t)=>{At(e.inputs),kt(e,"ReduceL1",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Y$=(e,t)=>{At(e.inputs),kt(e,"ReduceL2",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Z$=(e,t)=>{At(e.inputs),kt(e,"ReduceLogSumExp",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},Q$=(e,t)=>{At(e.inputs),kt(e,"ReduceMax",t,(r,a,u)=>{let l=[];for(let c=0;c<r.rank;c++)(u.indexOf(c)>=0||u.length===0)&&l.push(r.indicesSet("input_indices",c,0));return[`${l.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},J$=(e,t)=>{At(e.inputs),kt(e,"ReduceMean",t,(r,a,u)=>{let l=1;for(let c=0;c<r.rank;c++)(u.indexOf(c)>=0||u.length===0)&&(l*=e.inputs[0].dims[c]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${a.type.value}(sum / ${l});`]})},X$=(e,t)=>{At(e.inputs),kt(e,"ReduceMin",t,(r,a,u)=>{let l=[];for(let c=0;c<r.rank;c++)(u.indexOf(c)>=0||u.length===0)&&l.push(`input_indices[${c}] = 0;`);return[`${l.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},eC=(e,t)=>{At(e.inputs),kt(e,"ReduceProd",t,(r,a)=>[`var value = ${a.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},tC=(e,t)=>{At(e.inputs),kt(e,"ReduceSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},iC=(e,t)=>{At(e.inputs),kt(e,"ReduceSumSquare",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},jt=(e,t,i)=>{if(t.length===0)return i;let r=1,a=1;for(let u=0;u<t.length;u++)t.indexOf(u)===-1?r*=e[u]:a*=e[u];return a<32&&r>1024},Kp=(e,t)=>{jt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?J$(e,t):Rp(e,t)},Yp=(e,t)=>{jt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?K$(e,t):zp(e,t)},Zp=(e,t)=>{jt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Y$(e,t):Up(e,t)},Qp=(e,t)=>{jt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Z$(e,t):Np(e,t)},Jp=(e,t)=>{jt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Q$(e,t):Lp(e,t)},Xp=(e,t)=>{jt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?X$(e,t):Vp(e,t)},ef=(e,t)=>{jt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?eC(e,t):Wp(e,t)},tf=(e,t)=>{jt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?tC(e,t):Gp(e,t)},nf=(e,t)=>{jt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?iC(e,t):Fp(e,t)},rf=(e,t)=>{jt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?q$(e,t):Hp(e,t)}});var of,af,sf,qr,uf=ne(()=>{"use strict";ge();We();En();of=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},af=(e,t)=>{of(e.inputs);let i=(r,a,u)=>{let l=[];for(let c=0;c<r.rank;c++)(u.indexOf(c)>=0||u.length===0)&&l.push(`input_indices[${c}] = 0;`);return[`${l.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Pn("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},sf=(e,t)=>{of(e.inputs);let i=(r,a,u)=>{let l=[];for(let c=0;c<r.rank;c++)(u.indexOf(c)>=0||u.length===0)&&l.push(`input_indices[${c}] = 0;`);return[`${l.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Pn("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},qr=e=>_e(e)});var nC,Kr,rC,oC,aC,ci,sC,lf,On=ne(()=>{"use strict";ge();$e();An();xe();nC=(e,t)=>{let i=e[0],r=e[1],a=e[2],u=e[3],l=e[4],c=e[5];if(l&&c)throw new Error("Attention cannot have both past and attention_bias");if(i.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let f=i.dims[0],h=i.dims[1],g=i.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==g)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let _=a.dims[0]/3,w=_,x=w;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let D of t.qkvHiddenSizes)if(D%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");_=t.qkvHiddenSizes[0],w=t.qkvHiddenSizes[1],x=t.qkvHiddenSizes[2]}let $=h;if(_!==w)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==_+w+x)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let S=0;if(l){if(w!==x)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(l.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(l.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(l.dims[1]!==f)throw new Error('Input "past" second dimension must be batch_size');if(l.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(l.dims[4]!==w/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(S=l.dims[3])}let O=$+S,j=-1,I=0;if(u)throw new Error("Mask not supported");if(l)throw new Error("past is not supported");if(c){if(c.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(c.dims[0]!==f||c.dims[1]!==t.numHeads||c.dims[2]!==h||c.dims[3]!==O)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:h,pastSequenceLength:S,kvSequenceLength:$,totalSequenceLength:O,maxSequenceLength:j,inputHiddenSize:g,hiddenSize:_,vHiddenSize:x,headSize:Math.floor(_/t.numHeads),vHeadSize:Math.floor(x/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:I,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Kr=(e,t,i)=>t&&e?`
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
    `,rC=(e,t,i,r,a,u,l,c)=>{let f=Oe(l?1:u),h=64,g=u/f;g<h&&(h=32);let _=Math.ceil(u/f/h),w=[{type:12,data:t},{type:12,data:i},{type:12,data:r},{type:12,data:a},{type:12,data:g},{type:12,data:_}],x=ze(e.dataType,f),$=Ze(1,f),S=["type"];l&&S.push("type"),c&&S.push("type");let O=j=>{let I=X("x",e.dataType,e.dims,f),D=[I],P=l?q("seq_lens",l.dataType,l.dims):void 0;P&&D.push(P);let G=c?q("total_sequence_length_input",c.dataType,c.dims):void 0;G&&D.push(G);let V=Ze(e.dataType),N=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${h}>;
  var<workgroup> thread_sum: array<f32, ${h}>;
  ${j.registerUniforms(N).declareVariables(...D)}
  ${j.mainStart([h,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Kr(P,G,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${h}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${l?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${$}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${$}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(f){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${f}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${h}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${$}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${$}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(f){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${f}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${h}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${I.type.value}(${V}(1.0) / ${V}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${$}(x[offset + i]);
        x[offset + i] = ${I.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${l?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${I.type.value}(${V}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${h};${x};${f}`,inputDependencies:S},getShaderSource:O,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:a,z:t*i},programUniforms:w})}},oC=(e,t,i,r,a,u,l,c,f)=>{let h=l+u.kvSequenceLength,g=[u.batchSize,u.numHeads,u.sequenceLength,h],_=e>1&&r,w=u.kvNumHeads?u.kvNumHeads:u.numHeads,x=_?[u.batchSize,w,h,u.headSize]:void 0,$=u.nReps?u.nReps:1,S=u.scale===0?1/Math.sqrt(u.headSize):u.scale,O=Oe(u.headSize),j=u.headSize/O,I=12,D={x:Math.ceil(h/I),y:Math.ceil(u.sequenceLength/I),z:u.batchSize*u.numHeads},P=[{type:12,data:u.sequenceLength},{type:12,data:j},{type:12,data:h},{type:12,data:u.numHeads},{type:12,data:u.headSize},{type:1,data:S},{type:12,data:l},{type:12,data:u.kvSequenceLength},{type:12,data:$}],G=_&&r&&F.size(r.dims)>0,V=["type","type"];G&&V.push("type"),a&&V.push("type"),c&&V.push("type"),f&&V.push("type");let N=[{dims:g,dataType:t.dataType,gpuDataType:0}];_&&N.push({dims:x,dataType:t.dataType,gpuDataType:0});let Y=J=>{let oe=q("q",t.dataType,t.dims,O),he=q("key",i.dataType,i.dims,O),ce=[oe,he];if(G){let ie=q("past_key",r.dataType,r.dims,O);ce.push(ie)}a&&ce.push(q("attention_bias",a.dataType,a.dims));let me=c?q("seq_lens",c.dataType,c.dims):void 0;me&&ce.push(me);let ve=f?q("total_sequence_length_input",f.dataType,f.dims):void 0;ve&&ce.push(ve);let A=X("output",t.dataType,g),pe=[A];_&&pe.push(X("present_key",t.dataType,x,O));let ye=Ze(1,O),C=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${I}u;

  var<workgroup> tileQ: array<${oe.type.storage}, ${I*I}>;
  var<workgroup> tileK: array<${oe.type.storage}, ${I*I}>;
  ${J.registerUniforms(C).declareVariables(...ce,...pe)}
  ${J.mainStart([I,I,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${$===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${$===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Kr(me,ve,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${G&&_?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${_?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${ye}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${G&&_?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${_?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${ye}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(O){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${O}`)}})()};
        output[outputIdx] = ${A.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${O};${a!==void 0};${r!==void 0};${e}`,inputDependencies:V},getRunData:()=>({outputs:N,dispatchGroup:D,programUniforms:P}),getShaderSource:Y}},aC=(e,t,i,r,a,u,l=void 0,c=void 0)=>{let f=u+a.kvSequenceLength,h=a.nReps?a.nReps:1,g=a.vHiddenSize*h,_=e>1&&r,w=a.kvNumHeads?a.kvNumHeads:a.numHeads,x=_?[a.batchSize,w,f,a.headSize]:void 0,$=[a.batchSize,a.sequenceLength,g],S=12,O={x:Math.ceil(a.vHeadSize/S),y:Math.ceil(a.sequenceLength/S),z:a.batchSize*a.numHeads},j=[{type:12,data:a.sequenceLength},{type:12,data:f},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:g},{type:12,data:u},{type:12,data:a.kvSequenceLength},{type:12,data:h}],I=_&&r&&F.size(r.dims)>0,D=["type","type"];I&&D.push("type"),l&&D.push("type"),c&&D.push("type");let P=[{dims:$,dataType:t.dataType,gpuDataType:0}];_&&P.push({dims:x,dataType:t.dataType,gpuDataType:0});let G=V=>{let N=q("probs",t.dataType,t.dims),Y=q("v",i.dataType,i.dims),J=[N,Y];I&&J.push(q("past_value",r.dataType,r.dims));let oe=l?q("seq_lens",l.dataType,l.dims):void 0;l&&J.push(oe);let he=c?q("total_sequence_length_input",c.dataType,c.dims):void 0;c&&J.push(he);let me=[X("output",t.dataType,$)];_&&me.push(X("present_value",t.dataType,x));let ve=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${S}u;
  var<workgroup> tileQ: array<${N.type.value}, ${S*S}>;
  var<workgroup> tileV: array<${N.type.value}, ${S*S}>;
  ${V.registerUniforms(ve).declareVariables(...J,...me)}
  ${V.mainStart([S,S,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${h===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${h===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Kr(oe,he,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${I&&_?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${_?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${N.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${I&&_?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${_?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:D},getRunData:()=>({outputs:P,dispatchGroup:O,programUniforms:j}),getShaderSource:G}},ci=(e,t,i,r,a,u,l,c,f,h,g=void 0,_=void 0)=>{let w=Math.min(e.outputCount,1+(l?1:0)+(c?1:0)),x=w>1?h.pastSequenceLength:0,$=x+h.kvSequenceLength,S=f&&F.size(f.dims)>0?f:void 0,O=[t,i];w>1&&l&&F.size(l.dims)>0&&O.push(l),S&&O.push(S),g&&O.push(g),_&&O.push(_);let j=e.compute(oC(w,t,i,l,S,h,x,g,_),{inputs:O,outputs:w>1?[-1,1]:[-1]})[0];e.compute(rC(j,h.batchSize,h.numHeads,x,h.sequenceLength,$,g,_),{inputs:g&&_?[j,g,_]:[j],outputs:[]});let I=[j,r];w>1&&c&&F.size(c.dims)>0&&I.push(c),g&&I.push(g),_&&I.push(_),e.compute(aC(w,j,r,c,h,x,g,_),{inputs:I,outputs:w>1?[0,2]:[0]})},sC=(e,t)=>{let i=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,a=t.inputHiddenSize,u=t.headSize,l=12,c={x:Math.ceil(t.headSize/l),y:Math.ceil(t.sequenceLength/l),z:t.batchSize*t.numHeads},f=[e.inputs[0],e.inputs[1],e.inputs[2]],h=[{type:12,data:r},{type:12,data:a},{type:12,data:u},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],g=_=>{let w=X("output_q",f[0].dataType,i),x=X("output_k",f[0].dataType,i),$=X("output_v",f[0].dataType,i),S=q("input",f[0].dataType,f[0].dims),O=q("weight",f[1].dataType,f[1].dims),j=q("bias",f[2].dataType,f[2].dims),I=S.type.storage,D=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${l}u;
  var<workgroup> tileInput: array<${I}, ${l*l}>;
  var<workgroup> tileWeightQ: array<${I}, ${l*l}>;
  var<workgroup> tileWeightK: array<${I}, ${l*l}>;
  var<workgroup> tileWeightV: array<${I}, ${l*l}>;
  ${_.registerUniforms(D).declareVariables(S,O,j,w,x,$)}
  ${_.mainStart([l,l,1])}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:c,programUniforms:h}),getShaderSource:g},{inputs:f,outputs:[-1,-1,-1]})},lf=(e,t)=>{let i=nC(e.inputs,t),[r,a,u]=sC(e,i);return ci(e,r,a,u,e.inputs[4],void 0,void 0,void 0,e.inputs[5],i)}});var uC,lC,dC,df,cf=ne(()=>{"use strict";st();ge();$e();We();xe();uC=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let i=(r,a,u)=>{let l=a.length;if(l!==r.length)throw new Error(`${u}: num dimensions != ${l}`);a.forEach((c,f)=>{if(c!==r[f])throw new Error(`${u}: dim[${f}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);i(e[1].dims,r,"Invalid input scale"),i(e[2].dims,r,"Invalid input B"),i(e[3].dims,r,"Invalid input mean"),i(e[4].dims,r,"Invalid input var")}else i(e[1].dims,[1],"Invalid input scale"),i(e[2].dims,[1],"Invalid input B"),i(e[3].dims,[1],"Invalid input mean"),i(e[4].dims,[1],"Invalid input var")},lC=(e,t)=>{let{epsilon:i,spatial:r,format:a}=t,u=e[0].dims,l=r?Oe(u[u.length-1]):1,c=a==="NHWC"&&u.length>1?l:1,f=F.size(u)/l,h=r,g=h?u.length:u,_=q("x",e[0].dataType,e[0].dims,l),w=q("scale",e[1].dataType,e[1].dims,c),x=q("bias",e[2].dataType,e[2].dims,c),$=q("inputMean",e[3].dataType,e[3].dims,c),S=q("inputVar",e[4].dataType,e[4].dims,c),O=X("y",e[0].dataType,g,l),j=()=>{let D="";if(r)D=`let cOffset = ${u.length===1?"0u":a==="NHWC"?`outputIndices[${u.length-1}] / ${l}`:"outputIndices[1]"};`;else if(a==="NCHW")D=`
            ${O.indicesSet("outputIndices","0","0")}
            let cOffset = ${O.indicesToOffset("outputIndices")};`;else{D=`var cIndices = ${w.type.indices}(0);
                       cIndices[0] = outputIndices[${u.length-1}];`;for(let P=1;P<w.rank;P++)D+=`cIndices[${P}] = outputIndices[${P}];`;D+=`let cOffset = ${w.indicesToOffset("cIndices")};`}return D},I=D=>`
  const epsilon = ${i};
  ${D.registerUniform("outputSize","u32").declareVariables(_,w,x,$,S,O)}
  ${D.mainStart()}
  ${D.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${O.offsetToIndices(`global_idx * ${l}`)};
    ${j()}
    let scale = ${w.getByOffset("cOffset")};
    let bias = ${x.getByOffset("cOffset")};
    let inputMean = ${$.getByOffset("cOffset")};
    let inputVar = ${S.getByOffset("cOffset")};
    let x = ${_.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${O.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${l}`,inputDependencies:h?["rank","type","type","type","type"]:void 0},getShaderSource:I,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:h?[{type:12,data:f},...re(u)]:[{type:12,data:f}]})}},dC=e=>_e(e),df=(e,t)=>{let{inputs:i,outputCount:r}=e,a=dC({...t,outputCount:r});if(Re.webgpu.validateInputContent&&uC(i,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(lC(i,a))}});var cC,pC,pf,ff=ne(()=>{"use strict";$e();xe();cC=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},pC=e=>{let t=e[0].dims,i=e[0].dims[2],r=F.size(t)/4,a=e[0].dataType,u=q("input",a,t,4),l=q("bias",a,[i],4),c=q("residual",a,t,4),f=X("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:g=>`
  const channels = ${i}u / 4;
  ${g.declareVariables(u,l,c,f)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${u.getByOffset("global_idx")}
      + ${l.getByOffset("global_idx % channels")} + ${c.getByOffset("global_idx")};
    ${f.setByOffset("global_idx","value")}
  }`}},pf=e=>{cC(e.inputs),e.compute(pC(e.inputs))}});var fC,Be,mf,hf,yf,gf,_f,bf,vf,wf,$f,mC,Cf,xf,Sf,Tf,Mi,If,Dn,Af,kf,jf,Ef,Pf,Of,Df,Bf,Mf,Rf,zf,Uf,Nf,Lf,Vf,Wf,Gf,Ff,Yr,Zr,Hf,qf,Kf,hC,yC,Yf,Bn=ne(()=>{"use strict";ge();$e();We();xe();fC=(e,t,i,r,a,u,l)=>{let c=Math.ceil(t/4),f="";typeof a=="string"?f=`${a}(a)`:f=a("a");let h=q("inputData",i,[c],4),g=X("outputData",r,[c],4),_=[{name:"vec_size",type:"u32"}];return l&&_.push(...l),`
      ${e.registerUniforms(_).declareVariables(h,g)}

  ${u??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${h.getByOffset("global_idx")};
    ${g.setByOffset("global_idx",f)}
  }`},Be=(e,t,i,r,a,u=e.dataType,l,c)=>{let f=[{type:12,data:Math.ceil(F.size(e.dims)/4)}];return l&&f.push(...l),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:h=>fC(h,F.size(e.dims),e.dataType,u,i,r,c),getRunData:h=>({outputs:[{dims:e.dims,dataType:u}],dispatchGroup:{x:Math.ceil(F.size(h[0].dims)/64/4)},programUniforms:f})}},mf=e=>{e.compute(Be(e.inputs[0],"Abs","abs"))},hf=e=>{e.compute(Be(e.inputs[0],"Acos","acos"))},yf=e=>{e.compute(Be(e.inputs[0],"Acosh","acosh"))},gf=e=>{e.compute(Be(e.inputs[0],"Asin","asin"))},_f=e=>{e.compute(Be(e.inputs[0],"Asinh","asinh"))},bf=e=>{e.compute(Be(e.inputs[0],"Atan","atan"))},vf=e=>{e.compute(Be(e.inputs[0],"Atanh","atanh"))},wf=e=>_e(e),$f=(e,t)=>{let i;switch(t.to){case 10:i="vec4<f16>";break;case 1:i="vec4<f32>";break;case 12:i="vec4<u32>";break;case 6:i="vec4<i32>";break;case 9:i="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Be(e.inputs[0],"Cast",i,void 0,t.cacheKey,t.to))},mC=e=>{let t,i,r=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,i=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,i=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return _e({min:t,max:i})},Cf=(e,t)=>{let i=t||mC(e.inputs),r=Ze(e.inputs[0].dataType);e.compute(Be(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,i.cacheKey,void 0,[{type:e.inputs[0].dataType,data:i.min},{type:e.inputs[0].dataType,data:i.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},xf=e=>{e.compute(Be(e.inputs[0],"Ceil","ceil"))},Sf=e=>{e.compute(Be(e.inputs[0],"Cos","cos"))},Tf=e=>{e.compute(Be(e.inputs[0],"Cosh","cosh"))},Mi=e=>_e(e),If=(e,t)=>{let i=Ze(e.inputs[0].dataType);e.compute(Be(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${i}(${t.alpha});

  fn elu_f32(a: ${i}) -> ${i} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${i}>) -> vec4<${i}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Dn=(e="f32")=>`
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
}`,Af=e=>{let t=Ze(e.inputs[0].dataType);e.compute(Be(e.inputs[0],"Erf",i=>`erf_vf32(${i})`,Dn(t)))},kf=e=>{e.compute(Be(e.inputs[0],"Exp","exp"))},jf=e=>{e.compute(Be(e.inputs[0],"Floor","floor"))},Ef=e=>{let t=Ze(e.inputs[0].dataType);e.compute(Be(e.inputs[0],"Gelu",i=>`0.5 * ${i} * (1.0 + erf_vf32(${i} * 0.7071067811865475))`,Dn(t)))},Pf=(e,t)=>{let i=Ze(e.inputs[0].dataType);e.compute(Be(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${i}>(0.0))`,`const leaky_relu_alpha_ = ${i}(${t.alpha});`,t.cacheKey))},Of=e=>{e.compute(Be(e.inputs[0],"Not",t=>`!${t}`))},Df=e=>{e.compute(Be(e.inputs[0],"Neg",t=>`-${t}`))},Bf=e=>{e.compute(Be(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Mf=e=>{let t=Ze(e.inputs[0].dataType);e.compute(Be(e.inputs[0],"Relu",i=>`select(vec4<${t}>(0.0), ${i}, ${i} > vec4<${t}>(0.0))`))},Rf=e=>{e.compute(Be(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},zf=e=>_e(e),Uf=(e,t)=>{let i=Ze(e.inputs[0].dataType);e.compute(Be(e.inputs[0],"HardSigmoid",r=>`max(vec4<${i}>(0.0), min(vec4<${i}>(1.0), ${t.alpha} * ${r} + vec4<${i}>(${t.beta})))`,void 0,t.cacheKey))},Nf=e=>{e.compute(Be(e.inputs[0],"Sin","sin"))},Lf=e=>{e.compute(Be(e.inputs[0],"Sinh","sinh"))},Vf=e=>{e.compute(Be(e.inputs[0],"Sqrt","sqrt"))},Wf=e=>{e.compute(Be(e.inputs[0],"Tan","tan"))},Gf=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Ff=e=>{e.compute(Be(e.inputs[0],"Tanh",Gf))},Yr=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Gf("v")};
}
`,Zr=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Hf=e=>{let t=Ze(e.inputs[0].dataType);e.compute(Be(e.inputs[0],"FastGelu",Zr,Yr(t),void 0,e.inputs[0].dataType))},qf=(e,t)=>{let i=Ze(e.inputs[0].dataType);return e.compute(Be(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${i}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${i}>(${t.alpha});`,t.cacheKey)),0},Kf=e=>{e.compute(Be(e.inputs[0],"Log","log"))},hC=(e,t)=>`
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
`,yC=e=>`quick_gelu_impl(${e})`,Yf=(e,t)=>{let i=Ze(e.inputs[0].dataType);e.compute(Be(e.inputs[0],"QuickGelu",yC,hC(i,t.alpha),t.cacheKey,e.inputs[0].dataType))}});var gC,_C,Qf,Jf=ne(()=>{"use strict";$e();xe();Bn();gC=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},_C=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let i=q("input",e[0].dataType,e[0].dims,4),r=q("bias",e[0].dataType,[e[0].dims[2]],4),a=X("output",e[0].dataType,t,4),u=F.size(t)/4,l=ze(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)}}),getShaderSource:f=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${f.declareVariables(i,r,a)}

  ${Dn(l)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes(u)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Qf=e=>{gC(e.inputs),e.compute(_C(e.inputs))}});var bC,vC,Et,Xf,em,tm,im,nm,rm,om,am,sm,um,lm=ne(()=>{"use strict";ge();$e();xe();bC=(e,t,i,r,a,u,l,c,f,h,g,_)=>{let w,x;typeof c=="string"?w=x=(I,D)=>`${c}((${I}),(${D}))`:typeof c=="function"?w=x=c:(w=c.scalar,x=c.vector);let $=X("outputData",g,r.length,4),S=q("aData",f,t.length,4),O=q("bData",h,i.length,4),j;if(a)if(u){let I=F.size(t)===1,D=F.size(i)===1,P=t.length>0&&t[t.length-1]%4===0,G=i.length>0&&i[i.length-1]%4===0;I||D?j=$.setByOffset("global_idx",x(I?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"),D?`${O.type.value}(${O.getByOffset("0")}.x)`:O.getByOffset("global_idx"))):j=`
            let outputIndices = ${$.offsetToIndices("global_idx * 4u")};
            let offsetA = ${S.broadcastedIndicesToOffset("outputIndices",$)};
            let offsetB = ${O.broadcastedIndicesToOffset("outputIndices",$)};
            ${$.setByOffset("global_idx",x(l||P?S.getByOffset("offsetA / 4u"):`${S.type.value}(${S.getByOffset("offsetA / 4u")}[offsetA % 4u])`,l||G?O.getByOffset("offsetB / 4u"):`${O.type.value}(${O.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else j=$.setByOffset("global_idx",x(S.getByOffset("global_idx"),O.getByOffset("global_idx")));else{if(!u)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let I=(D,P,G="")=>{let V=`aData[indexA${P}][componentA${P}]`,N=`bData[indexB${P}][componentB${P}]`;return`
            let outputIndices${P} = ${$.offsetToIndices(`global_idx * 4u + ${P}u`)};
            let offsetA${P} = ${S.broadcastedIndicesToOffset(`outputIndices${P}`,$)};
            let offsetB${P} = ${O.broadcastedIndicesToOffset(`outputIndices${P}`,$)};
            let indexA${P} = offsetA${P} / 4u;
            let indexB${P} = offsetB${P} / 4u;
            let componentA${P} = offsetA${P} % 4u;
            let componentB${P} = offsetB${P} % 4u;
            ${D}[${P}] = ${G}(${w(V,N)});
          `};g===9?j=`
            var data = vec4<u32>(0);
            ${I("data",0,"u32")}
            ${I("data",1,"u32")}
            ${I("data",2,"u32")}
            ${I("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:j=`
            ${I("outputData[global_idx]",0)}
            ${I("outputData[global_idx]",1)}
            ${I("outputData[global_idx]",2)}
            ${I("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(S,O,$)}

        ${_??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${j}
      }`},vC=(e,t,i,r,a,u,l=i.dataType)=>{let c=i.dims.map(Number),f=r.dims.map(Number),h=!F.areEqual(c,f),g=c,_=F.size(c),w=!1,x=!1,$=[h];if(h){let S=Tt.calcShape(c,f,!1);if(!S)throw new Error("Can't perform binary op on the given tensors");g=S.slice(),_=F.size(g);let O=F.size(c)===1,j=F.size(f)===1,I=c.length>0&&c[c.length-1]%4===0,D=f.length>0&&f[f.length-1]%4===0;$.push(O),$.push(j),$.push(I),$.push(D);let P=1;for(let G=1;G<g.length;G++){let V=c[c.length-G],N=f[f.length-G];if(V===N)P*=V;else break}P%4===0?(x=!0,w=!0):(O||j||I||D)&&(w=!0)}else w=!0;return $.push(w),{name:e,shaderCache:{hint:t+$.map(S=>S.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:S=>bC(S,c,f,g,w,h,x,a,i.dataType,r.dataType,l,u),getRunData:()=>({outputs:[{dims:g,dataType:l}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(F.size(g)/4)},...re(c,f,g)]})}},Et=(e,t,i,r,a,u)=>{e.compute(vC(t,a??"",e.inputs[0],e.inputs[1],i,r,u))},Xf=e=>{Et(e,"Add",(t,i)=>`${t}+${i}`)},em=e=>{Et(e,"Div",(t,i)=>`${t}/${i}`)},tm=e=>{Et(e,"Equal",{scalar:(t,i)=>`u32(${t}==${i})`,vector:(t,i)=>`vec4<u32>(${t}==${i})`},void 0,void 0,9)},im=e=>{Et(e,"Mul",(t,i)=>`${t}*${i}`)},nm=e=>{let t=q("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Et(e,"Pow",{scalar:(r,a)=>`pow_custom(${r},${a})`,vector:(r,a)=>`pow_vector_custom(${r},${a})`},`
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
      `)},rm=e=>{Et(e,"Sub",(t,i)=>`${t}-${i}`)},om=e=>{Et(e,"Greater",{scalar:(t,i)=>`u32(${t}>${i})`,vector:(t,i)=>`vec4<u32>(${t}>${i})`},void 0,void 0,9)},am=e=>{Et(e,"Less",{scalar:(t,i)=>`u32(${t}<${i})`,vector:(t,i)=>`vec4<u32>(${t}<${i})`},void 0,void 0,9)},sm=e=>{Et(e,"GreaterOrEqual",{scalar:(t,i)=>`u32(${t}>=${i})`,vector:(t,i)=>`vec4<u32>(${t}>=${i})`},void 0,void 0,9)},um=e=>{Et(e,"LessOrEqual",{scalar:(t,i)=>`u32(${t}<=${i})`,vector:(t,i)=>`vec4<u32>(${t}<=${i})`},void 0,void 0,9)}});var $C,CC,xC,SC,dm,cm,pm=ne(()=>{"use strict";ge();$e();We();xe();$C=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let i=0,r=e[i],a=r.dataType,u=r.dims.length;e.forEach((l,c)=>{if(c!==i){if(l.dataType!==a)throw new Error("input tensors should be one type");if(l.dims.length!==u)throw new Error("input tensors should have the same shape");l.dims.forEach((f,h)=>{if(h!==t&&f!==r.dims[h])throw new Error("non concat dimensions must match")})}})},CC=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,xC=(e,t)=>{let i=e.length,r=[];for(let a=0;a<i;++a){let u=t.setByOffset("global_idx",e[a].getByIndices("indices"));i===1?r.push(u):a===0?r.push(`if (inputIndex == ${a}u) { ${u} }`):a===i-1?r.push(`else { ${u} }`):r.push(`else if (inputIndex == ${a}) { ${u} }`)}return r.join(`
`)},SC=(e,t,i,r)=>{let a=F.size(i),u=new Array(e.length),l=new Array(e.length),c=0,f=[],h=[],g=[{type:12,data:a}];for(let S=0;S<e.length;++S)c+=e[S].dims[t],u[S]=c,h.push(e[S].dims.length),l[S]=q(`input${S}`,r,h[S]),f.push("rank"),g.push({type:12,data:u[S]});for(let S=0;S<e.length;++S)g.push(...re(e[S].dims));g.push(...re(i));let _=X("output",r,i.length),w=_.indicesGet("indices",t),x=Array.from(Array(u.length).keys()).map(S=>`uniforms.sizeInConcatAxis${S}`).join(","),$=S=>`

  ${(()=>{S.registerUniform("outputSize","u32");for(let O=0;O<e.length;O++)S.registerUniform(`sizeInConcatAxis${O}`,"u32");return S.declareVariables(...l,_)})()}

  ${CC(u.length,x)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${_.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${w});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${u.length}u>(${x});
      ${w} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${xC(l,_)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:i,dataType:r}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:g}),getShaderSource:$}},dm=(e,t)=>{let i=e.inputs,r=i[0].dims,a=F.normalizeAxis(t.axis,r.length);$C(i,a);let u=r.slice();u[a]=i.reduce((c,f)=>c+(f.dims.length>a?f.dims[a]:0),0);let l=i.filter(c=>F.size(c.dims)>0);e.compute(SC(l,a,u,i[0].dataType),{inputs:l})},cm=e=>_e({axis:e.axis})});var yt,gt,_t,Mn,Gt=ne(()=>{"use strict";ge();$e();yt=(e,t,i="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${i}(uniforms.clip_min)), ${t}(${i}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${i}(uniforms.alpha) * value + ${i}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${i}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},gt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},_t=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Mn=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[i,r]=e?.activation_params||[.2,.5];return{activation:t,alpha:i,beta:r}}else if(t==="Clip"){let[i,r]=e?.activation_params||[_p,bp];return{activation:t,clipMax:r,clipMin:i}}else if(t==="LeakyRelu"){let[i]=e?.activation_params||[.01];return{activation:t,alpha:i}}return{activation:t}}});var Ke,fm,Rn=ne(()=>{"use strict";Ke=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},fm=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `});var mm,hm=ne(()=>{"use strict";mm=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`});var Ri,zn,Un=ne(()=>{"use strict";ge();$e();xe();Gt();Ri=(e,t,i,r,a)=>{let u=r-i;return`
      ${Array.from({length:i}).map((l,c)=>`
      if (${le(t.shape,c,t.rank)} != 1) {
        ${t.indicesSet(e,c,le(a,c+u,r))}
      } else {
        ${t.indicesSet(e,c,0)}
      }`).join("")}
`},zn=(e,t,i,r,a=!1,u)=>{let l=e[0].dims,c=e[1].dims,f=l[l.length-2],h=c[c.length-1],g=l[l.length-1],_=Oe(h),w=Oe(g),x=Oe(f),$=F.size(i)/_/x,S=e.length>2,O=r?r.slice(0,-2):i.slice(0,-2),I=[F.size(O),f,h],D=[{type:12,data:$},{type:12,data:f},{type:12,data:h},{type:12,data:g}];gt(t,D),D.push(...re(O,l,c)),S&&D.push(...re(e[2].dims)),D.push(...re(I));let P=G=>{let V=jn("batch_dims",e[0].dataType,O.length),N=q("a",e[0].dataType,l.length,w),Y=q("b",e[1].dataType,c.length,_),J=X("output",e[0].dataType,I.length,_),oe=ze(J.type.tensor),he=yt(t,J.type.value,oe),ce=[N,Y],me="";if(S){let pe=a?_:1;ce.push(q("bias",e[2].dataType,e[2].dims.length,pe)),me=`${a?`value += bias[col / ${pe}];`:`value += ${J.type.value}(bias[row + i]);`}`}let ve=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];_t(t,ve);let A=()=>{let pe=`var a_data: ${N.type.value};`;for(let ye=0;ye<w;ye++)pe+=`
              let b_data${ye} = b[(b_offset + (k + ${ye}) * uniforms.N + col) / ${_}];`;for(let ye=0;ye<x;ye++){pe+=`a_data = a[(a_offset + (row + ${ye}) * uniforms.K + k) / ${w}];`;for(let C=0;C<w;C++)pe+=`
            values[${ye}] = fma(${Y.type.value}(a_data${w===1?"":`[${C}]`}), b_data${C}, values[${ye}]);
`}return pe};return`
  ${G.registerUniforms(ve).registerInternalVariables(V).declareVariables(...ce,J)}
  ${G.mainStart()}
    ${G.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${_})) * ${_};
    var index1 = global_idx / (uniforms.N / ${_});
    let stride1 = uniforms.M / ${x};
    let row = (index1 % stride1) * ${x};
    let batch = index1 / stride1;

    ${i.length===2?"":`let batch_indices = ${V.offsetToIndices("batch")};`}

    var a_indices: ${N.type.indices};
    ${Ri("a_indices",N,N.rank-2,V.rank,"batch_indices")}
    ${N.indicesSet("a_indices",N.rank-2,0)}
    ${N.indicesSet("a_indices",N.rank-1,0)}
    let a_offset = ${N.indicesToOffset("a_indices")};

    var b_indices: ${Y.type.indices};
    ${Ri("b_indices",Y,Y.rank-2,V.rank,"batch_indices")}
    ${Y.indicesSet("b_indices",Y.rank-2,0)}
    ${Y.indicesSet("b_indices",Y.rank-1,0)}
    let b_offset = ${Y.indicesToOffset("b_indices")};
    var values: array<${J.type.value}, ${x}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${w}) {
      ${A()}
    }
    for (var i = 0u; i < ${x}u; i++) {
      var value = values[i];
      ${me}
      ${he}
      let cur_indices = ${J.type.indices}(batch, row + i, col);
      let offset = ${J.indicesToOffset("cur_indices")};
      ${J.setByOffset(`offset / ${_}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${_};${w};${x};${a}`,inputDependencies:S?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:u?u(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:D}),getShaderSource:P}}});var TC,IC,Qr,ym,AC,Jr,kC,zi,Nn=ne(()=>{"use strict";ge();$e();xe();Gt();Un();Rn();TC=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,IC=(e,t)=>e?`
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
        }`,Qr=(e,t,i="f32",r,a=!1,u=32,l=!1,c=32)=>{let f=t[1]*e[1],h=t[0]*e[0],g=a?f:u,_=a?u:f,w=g/t[0],x=u/t[1];if(!((a&&w===4&&e[1]===4||!a&&(w===3||w===4))&&g%t[0]===0&&u%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${w} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${w} must be 3 or 4.
  tileAWidth ${g} must be divisible by workgroupSize[0]${t[0]}. tileInner ${u} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${w}<${i}>, ${g/w}>, ${_}>;
var<workgroup> mm_Bsub: array<array<vec4<${i}>, ${h/e[0]}>, ${u}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${w};
const tileInner = ${u};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${l?"0":"i32(globalId.z)"};
  ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${f};

  let num_tiles = ${l?`${Math.ceil(c/u)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${l?`i32(globalId.z) * ${c}`:"0"};

  var acc: array<vec4<${i}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${x};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${TC(a,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${x}; innerRow = innerRow + 1) {
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
          ${w===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${IC(a,w)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},ym=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,AC=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Jr=(e,t,i="f32",r,a=!1,u=32,l=!1,c=32,f=!1)=>{let h=e[1]*t[1],g=e[0]*t[0],_=a?h:u,w=a?u:h;if(!(w%t[1]===0&&_%t[0]===0&&u%t[1]===0))throw new Error(`tileAHight ${w} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${_} must be divisible by workgroupSize[0]${t[0]}, tileInner ${u} must be divisible by workgroupSize[1]${t[1]}`);let x=w/t[1],$=_/t[0],S=u/t[1],O=f?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${h};
    let globalColStart = i32(workgroupId.x) * ${g};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${w}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${_}; inputCol = inputCol + ${t[0]}) {
          ${ym(a,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${u}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${g}; inputCol = inputCol + ${t[0]}) {
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
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
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
let globalRowStart = i32(workgroupId.y) * ${h};

let tileRowA = i32(localId.y) * ${x};
let tileColA = i32(localId.x) * ${$};
let tileRowB = i32(localId.y) * ${S};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${x}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${$}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${ym(a,r)}
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
      ${AC(a)}
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
  var<workgroup> mm_Asub : array<array<${i}, ${_}>, ${w}>;
  var<workgroup> mm_Bsub : array<array<${i}, ${g}>, ${u}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${u};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${l?"0":"i32(globalId.z)"};
    ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${l?`${Math.ceil(c/u)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${l?`i32(globalId.z) * ${c}`:"0"};

    var acc : array<array<${i}, colPerThread>, rowPerThread>;
    ${O}
  }
`},kC=(e,t,i,r,a=!1)=>{let[u,l,c,f]=r,h=ze(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${u.type.indices}) -> ${Ke(e,h)} {
      var value = ${Ke(e,h)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${l.type.indices};
        ${Ri("aIndices",l,l.rank-2,u.rank,"batchIndices")}
        ${l.indicesSet("aIndices",l.rank-2,"u32(row)")}
        ${l.indicesSet("aIndices",l.rank-1,"u32(colIn)")}
        value = ${l.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${u.type.indices}) -> ${Ke(e,h)} {
      var value = ${Ke(e,h)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${c.type.indices};
        ${Ri("bIndices",c,c.rank-2,u.rank,"batchIndices")}
        ${c.indicesSet("bIndices",c.rank-2,"u32(row)")}
        ${c.indicesSet("bIndices",c.rank-1,"u32(colIn)")}
        value = ${c.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ke(e,h)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${Ke(e,h)}(bias[row])`};`:""}
        ${i}
        ${f.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},zi=(e,t,i,r,a=!1,u)=>{let l=e[0].dims,c=e[1].dims,f=l.slice(0,-2),h=c.slice(0,-2),g=r?r.slice(0,-2):i.slice(0,-2),_=F.size(g),w=l[l.length-2],x=l[l.length-1],$=c[c.length-1],S=x%4===0&&$%4===0,O=w<=8?[4,1,1]:[4,4,1],j=[8,8,1],I=[Math.ceil($/j[0]/O[0]),Math.ceil(w/j[1]/O[1]),Math.ceil(_/j[2]/O[2])],D=S?4:1,P=[...f,w,x/D],G=P.length,V=[...h,x,$/D],N=V.length,Y=[_,w,$/D],J=[{type:6,data:w},{type:6,data:$},{type:6,data:x}];gt(t,J),J.push(...re(g,P,V));let oe=["rank","rank"],he=e.length>2;he&&(J.push(...re(e[2].dims)),oe.push("rank")),J.push(...re(Y));let ce=me=>{let ve=g.length,A=jn("batchDims",e[0].dataType,ve,1),pe=ze(e[0].dataType),ye=q("a",e[0].dataType,G,D),C=q("b",e[1].dataType,N,D),ie=X("result",e[0].dataType,Y.length,D),Se=[ye,C];if(he){let Q=a?D:1;Se.push(q("bias",e[2].dataType,e[2].dims.length,Q))}let Ue=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];_t(t,Ue);let Fe=ze(ie.type.tensor),be=yt(t,ie.type.value,Fe),ee=kC(D,he,be,[A,ye,C,ie],a);return`
  ${me.registerUniforms(Ue).registerInternalVariables(A).declareVariables(...Se,ie)}
  ${ee}
  ${S?Qr(O,j,pe,A):Jr(O,j,pe,A)}
                   `};return{name:"MatMul",shaderCache:{hint:`${O};${t.activation};${S};${a}`,inputDependencies:oe},getRunData:()=>({outputs:[{dims:u?u(i):i,dataType:e[0].dataType}],dispatchGroup:{x:I[0],y:I[1],z:I[2]},programUniforms:J}),getShaderSource:ce}}});var jC,gm,_m=ne(()=>{"use strict";ge();St();xe();Gt();Rn();hm();Nn();jC=(e,t,i,r,a=!1,u,l=4,c=4,f=4,h="f32")=>{let g=oe=>{switch(oe){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${h}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${oe} is not supported.`)}},_=oe=>{switch(oe){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${oe} is not supported.`)}},w=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,x=e?`
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
    `,$=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",S=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",O=e?"row":"col",j=e?"col":"row",I=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${O} / outWidth;
    let outCol = ${O} % outWidth;

    let WRow = ${j} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${j} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${j} % inChannels;
    var resData = ${Ke(l,h)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${$} && xCol >= 0 && xCol < ${S}) {
      ${w}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${g(l)}
    }
    return resData;`,D=e?t&&r?`
    let col = colIn * ${l};
    ${I}`:`
    let col = colIn * ${l};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${I}
    }
    return ${Ke(l,h)}(0.0);`:r&&i?`
    let col = colIn * ${l};
    ${I}`:`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${I}
    }
    return ${Ke(l,h)}(0.0);`,P=e?r&&i?_(c):`
    let col = colIn * ${c};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${_(c)}
    }
    return ${Ke(c,h)}(0.0);`:`
    let col = colIn * ${c};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${_(c)}
    }
    return ${Ke(c,h)}(0.0);`,G=Ke(f,h),V=e?Ke(l,h):Ke(c,h),N=e?Ke(c,h):Ke(l,h),Y=yt(u,G,h);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${V} {
      ${e?D:P}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${N} {
      ${e?P:D}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${G}) {
      let col = colIn * ${f};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${x}
      ${fm(a)}
      ${Y}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},gm=(e,t,i,r,a,u,l,c,f)=>{let h=t.format==="NHWC",g=h?e[0].dims[3]:e[0].dims[1],_=i[0],w=h?i[2]:i[3],x=h?i[1]:i[2],$=h?i[3]:i[1],S=h&&(g%4===0||g%3===0)&&$%4===0,O=h?$:w*x,j=h?w*x:$,I=[8,8,1],D=r<=8?[4,1,1]:[4,4,1],P=[Math.ceil(O/I[0]/D[0]),Math.ceil(j/I[1]/D[1]),Math.ceil(_/I[2]/D[2])];Te("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${P}`);let G=S?h&&g%4!==0?3:4:1,V=I[1]*D[1],N=I[0]*D[0],Y=Math.max(I[0]*G,I[1]),J=r%V===0,oe=a%N===0,he=u%Y===0,ce=S?[G,4,4]:[1,1,1],me=[{type:6,data:r},{type:6,data:a},{type:6,data:u},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];gt(t,me),me.push(...re(e[0].dims,e[1].dims));let ve=["rank","rank"];l&&(me.push(...re(e[2].dims)),ve.push("rank")),me.push(...re(i));let A=pe=>{let ye=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];_t(t,ye);let C=S?4:1,ie=ze(e[0].dataType),Se=`
      fn setOutputAtIndex(flatIndex : i32, value : ${S?`vec4<${ie}>`:ie}) {
        result[flatIndex] = ${S?`vec4<${ie}>`:ie}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${S?`vec4<${ie}>`:ie}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${S?"/ 4":""}, value);
      }`,Ue=q("x",e[0].dataType,e[0].dims.length,G===3?1:G),Fe=q("w",e[1].dataType,e[1].dims.length,C),be=[Ue,Fe],ee=X("result",e[0].dataType,i.length,C);if(l){let Q=q("bias",e[2].dataType,e[2].dims.length,C);be.push(Q),Se+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${S?`vec4<${ie}>`:ie} {
          return bias[coords.${h?"w":"y"}${S?"/ 4":""}];
        }`}return`
        ${mm("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${pe.registerUniforms(ye).declareVariables(...be,ee)}
        ${Se}
        ${jC(h,J,oe,he,l,t,ce[0],ce[1],ce[2],ie)}
        ${S?Qr(D,I,ie,void 0,!h,Y):Jr(D,I,ie,void 0,!h,Y,!1,void 0,c)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${G};${S};${J};${oe};${he};${V};${N};${Y}`,inputDependencies:ve},getRunData:()=>({outputs:[{dims:f?f(i):i,dataType:e[0].dataType}],dispatchGroup:{x:P[0],y:P[1],z:P[2]},programUniforms:me}),getShaderSource:A}}});var EC,bm,Ln,PC,vm,OC,wm,$m,Cm=ne(()=>{"use strict";ge();St();$e();xe();Gt();Rn();EC=e=>{let t=1;for(let i=0;i<e.length;i++)t*=e[i];return t},bm=e=>typeof e=="number"?[e,e,e]:e,Ln=(e,t)=>t<=1?e:e+(e-1)*(t-1),PC=(e,t,i,r=1)=>{let a=Ln(t,r);return Math.floor((e[0]*(i-1)-i+a)/2)},vm=(e,t,i,r,a)=>{a==null&&(a=PC(e,t[0],r[0]));let u=[0,0,0,i];for(let l=0;l<3;l++)e[l]+2*a>=t[l]&&(u[l]=Math.trunc((e[l]-t[l]+2*a)/r[l]+1));return u},OC=(e,t,i,r,a,u,l,c,f,h)=>{let g,_,w,x;if(e==="VALID"&&(e=0),typeof e=="number"){g={top:e,bottom:e,left:e,right:e,front:e,back:e};let $=vm([t,i,r,1],[c,f,h],1,[a,u,l],e);_=$[0],w=$[1],x=$[2]}else if(Array.isArray(e)){if(!e.every((S,O,j)=>S===j[0]))throw Error(`Unsupported padding parameter: ${e}`);g={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let $=vm([t,i,r,1],[c,f,h],1,[a,u,l],e[0]);_=$[0],w=$[1],x=$[2]}else if(e==="SAME_UPPER"){_=Math.ceil(t/a),w=Math.ceil(i/u),x=Math.ceil(r/l);let $=(_-1)*a+c-t,S=(w-1)*u+f-i,O=(x-1)*l+h-r,j=Math.floor($/2),I=$-j,D=Math.floor(S/2),P=S-D,G=Math.floor(O/2),V=O-G;g={top:D,bottom:P,left:G,right:V,front:j,back:I}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:g,outDepth:_,outHeight:w,outWidth:x}},wm=(e,t,i,r,a,u=!1,l="channelsLast")=>{let c,f,h,g,_;if(l==="channelsLast")[c,f,h,g,_]=e;else if(l==="channelsFirst")[c,_,f,h,g]=e;else throw new Error(`Unknown dataFormat ${l}`);let[w,,x,$,S]=t,[O,j,I]=bm(i),[D,P,G]=bm(r),V=Ln(x,D),N=Ln($,P),Y=Ln(S,G),{padInfo:J,outDepth:oe,outHeight:he,outWidth:ce}=OC(a,f,h,g,O,j,I,V,N,Y),me=u?w*_:w,ve=[0,0,0,0,0];return l==="channelsFirst"?ve=[c,me,oe,he,ce]:l==="channelsLast"&&(ve=[c,oe,he,ce,me]),{batchSize:c,dataFormat:l,inDepth:f,inHeight:h,inWidth:g,inChannels:_,outDepth:oe,outHeight:he,outWidth:ce,outChannels:me,padInfo:J,strideDepth:O,strideHeight:j,strideWidth:I,filterDepth:x,filterHeight:$,filterWidth:S,effectiveFilterDepth:V,effectiveFilterHeight:N,effectiveFilterWidth:Y,dilationDepth:D,dilationHeight:P,dilationWidth:G,inShape:e,outShape:ve,filterShape:t}},$m=(e,t,i,r,a,u)=>{let l=u==="channelsLast",c=l?e[0].dims[3]:e[0].dims[1],f=!1,h=[64,1,1],g={x:i.map((I,D)=>D)},_=[Math.ceil(EC(g.x.map(I=>i[I]))/h[0]),1,1];Te("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${_}`);let w=f?l&&c%4!==0?3:4:1,x=F.size(i),$=[{type:12,data:x},{type:12,data:r},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];gt(t,$),$.push(...re(e[0].dims,e[1].dims));let S=["rank","rank"],O=e.length===3;O&&($.push(...re(e[2].dims)),S.push("rank")),$.push(...re(i));let j=I=>{let D=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];_t(t,D);let P=f?4:1,G=ze(e[0].dataType),V=q("x",e[0].dataType,e[0].dims.length,w===3?1:w),N=q("W",e[1].dataType,e[1].dims.length,P),Y=[V,N],J=X("result",e[0].dataType,i.length,P),oe="";if(O){let me=q("bias",e[2].dataType,e[2].dims.length,P);Y.push(me),oe+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${f?`vec4<${G}>`:G} {
          return bias[${l?le("coords",4,5):le("coords",1,5)}${f?"/ 4":""}];
        }`}let he=Ke(w,G),ce=yt(t,he,G);return`
            ${oe}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${V.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${N.getByIndices("aIndices")};
            }
          ${I.registerUniforms(D).declareVariables(...Y,J)}
          ${I.mainStart()}
          ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${J.offsetToIndices("global_idx")};
              let batch = ${le("coords",0,V.rank)};
              let d2 = ${l?le("coords",V.rank-1,V.rank):le("coords",1,V.rank)};
              let xFRCCorner = vec3<u32>(${l?le("coords",1,V.rank):le("coords",2,V.rank)},
              ${l?le("coords",2,V.rank):le("coords",3,V.rank)},
              ${l?le("coords",3,V.rank):le("coords",4,V.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${l?le("uniforms.x_shape",1,V.rank):le("uniforms.x_shape",2,V.rank)};
              let xShapeZ = ${l?le("uniforms.x_shape",2,V.rank):le("uniforms.x_shape",3,V.rank)};
              let xShapeW = ${l?le("uniforms.x_shape",3,V.rank):le("uniforms.x_shape",4,V.rank)};
              let xShapeU = ${l?le("uniforms.x_shape",4,V.rank):le("uniforms.x_shape",1,V.rank)};
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
                      ${l?`let xValues = vec4<f32>(
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
                        ${l?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${l?`let xValues = vec2<f32>(
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
                      ${l?`let xValues = vec3<f32>(
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
              ${ce}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${l};${w};${O}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:_[0],y:_[1],z:_[2]},programUniforms:$}),getShaderSource:j}}});var xm,Sm,Tm=ne(()=>{"use strict";ge();$e();xe();Gt();xm=(e,t,i,r)=>{let a=e.length>2,u=a?"value += b[output_channel];":"",l=e[0].dims,c=e[1].dims,f=t.format==="NHWC",h=f?i[3]:i[1],g=h/t.group,_=f&&g>=4?Oe(h):1,w=F.size(i)/_,x=[{type:12,data:w},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:g}];gt(t,x),x.push(...re(l,[c[0],c[1],c[2],c[3]/_]));let $=a?["rank","rank","rank"]:["rank","rank"];x.push(...re([i[0],i[1],i[2],i[3]/_]));let S=O=>{let j=X("output",e[0].dataType,i.length,_),I=ze(j.type.tensor),D=yt(t,j.type.value,I),P=q("x",e[0].dataType,l.length),G=q("w",e[1].dataType,c.length,_),V=[P,G];a&&V.push(q("b",e[2].dataType,e[2].dims,_));let N=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];_t(t,N);let Y=f?`
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
            let xVal = ${P.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${G.get("wHeight","wWidth","wInChannel","output_channel")};
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

            let xVal = ${P.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${G.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${O.registerUniforms(N).declareVariables(...V,j)}

  ${O.mainStart()}
    ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${j.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${f?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${f?1:2}], outputIndices[${f?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${_} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${f?2:1}];

    var value: ${j.type.value} = ${j.type.value}(0);
    ${Y}
    ${u}
    ${D}
    ${j.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${_}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:x}),getShaderSource:S}},Sm=(e,t,i,r)=>{let a=e.length>2,u=Oe(i[3]),l=Oe(i[2]),c=F.size(i)/u/l,f=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/u],h=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/u],g=[i[0],i[1],i[2],i[3]/u],_=[{type:12,data:c},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];gt(t,_),_.push(...re(f,h,g));let w=(l-1)*t.strides[1]+h[1],x=$=>{let S=X("output",e[0].dataType,g.length,u),O=ze(S.type.tensor),j=yt(t,S.type.value,O),I=q("x",e[0].dataType,f.length,u),D=q("w",e[1].dataType,h.length,u),P=[I,D];a&&P.push(q("b",e[2].dataType,e[2].dims,u));let G=a?"value += b[output_channel];":"",V=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return _t(t,V),`
  ${$.registerUniforms(V).declareVariables(...P,S)}
  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${l}u;
    let col = (index1 % width1) * ${l}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${I.type.value}, ${w}>;
    var values: array<${S.type.value}, ${l}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${h[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${w}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${I.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${I.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${h[1]}; w_width++) {
          let w_val = ${D.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${l}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${l}u; i++) {
      var value = values[i];
      ${G}
      ${j}
      ${S.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${u};${l};${w};${h[0]};${h[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:_}),getShaderSource:x}}});var DC,Xr,BC,eo,to,Im,MC,RC,io,Am=ne(()=>{"use strict";$e();_m();Cm();Nn();Tm();Gt();Un();Dt();DC=(e,t,i,r,a,u)=>{let l=e[0],c=e.slice(u?1:2,u?3:4),f=c.length,h=t[0],_=t.slice(2).map(($,S)=>$+($-1)*(i[S]-1)),x=c.map(($,S)=>$+r[S]+r[S+f]).map(($,S)=>Math.floor(($-_[S]+a[S])/a[S]));return x.splice(0,0,l),x.splice(u?3:1,0,h),x},Xr=[2,3,1,0],BC=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(i!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},eo=(e,t)=>{let i=e.kernelShape.slice();i.length<t[1].dims.length-2&&i.push(...Array(t[1].dims.length-2-i.length).fill(0));for(let u=2;u<t[1].dims.length;++u)i[u-2]===0&&(i[u-2]=t[1].dims[u]);let r=e.pads.slice();Xt.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,i,r,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:i,pads:r}),a},to=e=>{let t=Mn(e),i=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,u=e.group,l=e.kernel_shape,c=e.pads,f=e.strides,h=e.w_is_const();return{autoPad:r,format:i,dilations:a,group:u,kernelShape:l,pads:c,strides:f,wIsConst:h,...t,cacheKey:`${e.format};${t.activation};`}},Im=(e,t,i,r)=>{let a=i.format==="NHWC",u=DC(t[0].dims,t[1].dims,i.dilations,i.pads,i.strides,a);if(i.group!==1){let V=[t[0]];if(a){let Y=e.kernelCustomData.wT??e.compute(Qe(t[1],Xr),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=Y),V.push(Y)}else V.push(t[1]);t.length===3&&V.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===i.group&&t[1].dims[1]===1&&i.dilations[0]===1&&i.dilations[1]===1?e.compute(Sm(V,i,u,r),{inputs:V}):e.compute(xm(V,i,u,r),{inputs:V});return}let l=t.length===3,c=t[0].dims[a?1:2],f=t[0].dims[a?2:3],h=t[0].dims[a?3:1],g=t[1].dims[2],_=t[1].dims[3],w=u[a?1:2],x=u[a?2:3],$=u[a?3:1],S=a&&g===c&&_===f&&i.pads[0]===0&&i.pads[1]===0;if(S||g===1&&_===1&&i.dilations[0]===1&&i.dilations[1]===1&&i.strides[0]===1&&i.strides[1]===1&&i.pads[0]===0&&i.pads[1]===0){let V=u[0],N,Y,J,oe=[];if(a){let me=e.kernelCustomData.wT??e.compute(Qe(t[1],Xr),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];if(i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=me),S){let ve=c*f*h;N=t[0].reshape([1,V,ve]),Y=me.reshape([1,ve,$]),J=[1,V,$]}else N=t[0].reshape([V,c*f,h]),Y=me.reshape([1,h,$]),J=[V,w*x,$];oe.push(N),oe.push(Y)}else N=t[0].reshape([V,h,c*f]),Y=t[1].reshape([1,$,h]),J=[V,$,w*x],oe.push(Y),oe.push(N);l&&oe.push(t[2]);let he=J[2],ce=oe[0].dims[oe[0].dims.length-1];he<8&&ce<8?e.compute(zn(oe,i,u,J,a,r),{inputs:oe}):e.compute(zi(oe,i,u,J,a,r),{inputs:oe});return}let O=!0,j=e.kernelCustomData.wT??e.compute(Qe(t[1],Xr),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=j);let I=[t[0],j];l&&I.push(t[2]);let D=a?w*x:$,P=a?$:w*x,G=g*_*h;e.compute(gm(I,i,u,D,P,G,l,O,r),{inputs:I})},MC=(e,t)=>{let i=t.format==="NHWC",r=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],u=[1].concat(t.strides),l=[1].concat(t.dilations),c=[1].concat(t.kernelShape),f=eo({...t,pads:a,strides:u,dilations:l,kernelShape:c},r);Im(e,r,f,h=>i?[h[0],h[2],h[3]]:[h[0],h[1],h[3]])},RC=(e,t,i)=>{let r=i.format==="NHWC"?"channelsLast":"channelsFirst",a=eo(i,t),u=i.autoPad==="NOTSET"?i.pads:i.autoPad,l=wm(t[0].dims,t[1].dims,i.strides,i.dilations,u,!1,r);e.compute($m(t,a,l.outShape,[l.filterDepth,l.filterHeight,l.filterWidth],[l.padInfo.front,l.padInfo.top,l.padInfo.left],r))},io=(e,t)=>{if(BC(e.inputs,t),e.inputs[0].dims.length===3)MC(e,t);else if(e.inputs[0].dims.length===5)RC(e,e.inputs,t);else{let i=eo(t,e.inputs);Im(e,e.inputs,i)}}});var km,jm=ne(()=>{"use strict";ge();St();$e();xe();km=(e,t,i)=>{let r=e.length>2,a=t.outputShape,u=t.format==="NHWC",l=t.group,c=e[1].dims,f=c[2]/l,h=c[3],g=u?Oe(f):1,_=u&&h===1&&f>=4,w=_?Math.floor(f/4)*4:Math.floor(f/g)*g,x=f-w,$=u?Oe(h):1,S=u?h===1?g:$:1,O=F.size(a)/$,j=[Math.ceil(O/64),1,1];Te("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${j}`);let I=["rank","rank"],D=[t.strides[0],t.strides[1]],P=[t.kernelShape[u?1:2],t.kernelShape[u?2:3]],G=[t.dilations[0],t.dilations[1]],V=[P[0]+(t.dilations[0]<=1?0:(t.kernelShape[u?1:2]-1)*(t.dilations[0]-1)),P[1]+(t.dilations[1]<=1?0:(t.kernelShape[u?2:3]-1)*(t.dilations[1]-1))],N=[V[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),V[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],Y=[{type:12,data:O},{type:12,data:D},{type:12,data:P},{type:12,data:G},{type:12,data:V},{type:6,data:N},{type:12,data:w},{type:12,data:f},{type:12,data:h},...re(e[0].dims,e[1].dims)];r&&(Y.push(...re(e[2].dims)),I.push("rank")),Y.push(...re(a));let J=oe=>{let he=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:D.length},{name:"filter_dims",type:"u32",length:P.length},{name:"dilations",type:"u32",length:P.length},{name:"effective_filter_dims",type:"u32",length:V.length},{name:"pads",type:"i32",length:N.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],ce=ze(e[0].dataType),me=u?1:2,ve=u?2:3,A=u?3:1,pe=q("W",e[1].dataType,e[1].dims.length,S),ye=q("Dy",e[0].dataType,e[0].dims.length,g),C=[ye,pe];r&&C.push(q("bias",e[2].dataType,[a[A]].length,$));let ie=X("result",e[0].dataType,a.length,$),Se=()=>{let be="";if(_)g===4?be+=`
        let xValue = ${ye.getByOffset("x_offset")};
        let wValue = ${pe.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:g===2?be+=`
          dotProd = dotProd + dot(vec4<${ce}>(${ye.getByOffset("x_offset")}, ${ye.getByOffset("x_offset + 1u")}), vec4<${ce}>(${pe.getByOffset("w_offset")}, ${pe.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:g===1&&(be+=`
          dotProd = dotProd + dot(vec4<${ce}>(${ye.getByOffset("x_offset")}, ${ye.getByOffset("x_offset + 1u")}, ${ye.getByOffset("x_offset + 2u")}, ${ye.getByOffset("x_offset + 3u")}), vec4<${ce}>(${pe.getByOffset("w_offset")}, ${pe.getByOffset("w_offset + 1u")}, ${pe.getByOffset("w_offset + 2u")}, ${pe.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(be+=`
                  let xValue = ${u?ye.getByOffset(`${ye.indicesToOffset(`${ye.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${g}`):ye.get("batch","inputChannel","idyR","idyC")};
        `,g===1)be+=`
          let w_offset = ${pe.indicesToOffset(`${pe.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${pe.getByOffset(`w_offset / ${S}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let ee=0;ee<g;ee++)be+=`
            let wValue${ee} = ${pe.getByOffset(`${pe.indicesToOffset(`${pe.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ee}, wOutChannel)`)} / ${S}`)};
            dotProd = dotProd + xValue[${ee}] * wValue${ee};`;return be},Ue=()=>{if(x===0)return"";if(!_)throw new Error(`packInputAs4 ${_} is not true.`);let be="";if(g===1){be+="dotProd = dotProd";for(let ee=0;ee<x;ee++)be+=`
            + ${ye.getByOffset(`x_offset + ${ee}`)} * ${pe.getByOffset(`w_offset + ${ee}`)}`;be+=";"}else if(g===2){if(x!==2)throw new Error(`Invalid inputChannelsRemainder ${x}.`);be+=`
          let xValue = ${ye.getByOffset("x_offset")};
          let wValue = ${pe.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return be},Fe=`
            let outputIndices = ${ie.offsetToIndices(`global_idx * ${$}`)};
            let batch = ${ie.indicesGet("outputIndices",0)};
            let d1 = ${ie.indicesGet("outputIndices",A)};
            let r = ${ie.indicesGet("outputIndices",me)};
            let c = ${ie.indicesGet("outputIndices",ve)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${ie.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${ce}(dyRCorner) + ${ce}(wR)) / ${ce}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${ce}(uniforms.Dy_shape[${me}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${ce}(dyCCorner) + ${ce}(wC)) / ${ce}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${ce}(uniforms.Dy_shape[${ve}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${_?`
                var x_offset = ${ye.indicesToOffset(`${ye.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${g};
                var w_offset = ${pe.indicesToOffset(`${pe.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${S};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${_?4:g}) {
                  ${Se()}
                  inputChannel = inputChannel + ${_?4:g};
                }
                ${Ue()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${$}]`:""};
            ${ie.setByOffset("global_idx","value")};
          `;return`
    ${oe.registerUniforms(he).declareVariables(...C,ie)}
      ${oe.mainStart()}
      ${oe.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${Fe}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${g}${S}${$}${_}${x}`,inputDependencies:I},getRunData:()=>({dispatchGroup:{x:j[0],y:j[1],z:j[2]},outputs:[{dims:i?i(a):a,dataType:e[0].dataType}],programUniforms:Y}),getShaderSource:J}}});var zC,UC,NC,Em,Pm,LC,Om,VC,Dm,Bm=ne(()=>{"use strict";jm();Gt();Dt();zC=(e,t,i,r,a,u)=>(e-1)*t+i+(r-1)*a+1-u,UC=(e,t,i,r,a)=>{let u=Math.floor(e/2);t==="SAME_UPPER"?(i[r]=u,i[a]=e-u):t==="SAME_LOWER"&&(i[r]=e-u,i[a]=u)},NC=(e,t,i,r,a,u,l,c,f,h)=>{let g=e.length-2,_=h.length===0;f.length<g&&f.push(...Array(g-f.length).fill(0));let w=e[0],x=t[c?3:1]*a;for(let $=0,S=e.length-g-(c?1:0);$<g;++$,++S){let O=e[S],j=_?O*l[$]:h[$],I=zC(O,l[$],u[$],t[S],i[$],j);UC(I,r,u,$,$+g),_&&h.push(l[$]*(O-1)+f[$]+(t[S]-1)*i[$]+1-u[$]-u[$+g])}h.splice(0,0,w),h.splice(c?3:1,0,x)},Em=(e,t)=>{let i=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((_,w)=>_*w,1)===0){i.length=0;for(let _=2;_<t[1].dims.length;++_)i.push(t[1].dims[_])}let r=e.format==="NHWC";i.splice(0,0,t[1].dims[0]),i.splice(r?3:1,0,t[1].dims[1]);let a=e.pads.slice(),u=e.outputShape.slice(),l=e.outputPadding.slice(),c=t[0].dims,f=e.dilations.slice();if(f.reduce((_,w)=>_+w,0)===0){let _=t[0].dims.length-2;f=new Array(_).fill(1)}let h=e.strides.slice();if(h.reduce((_,w)=>_+w,0)===0){let _=t[0].dims.length-2;h=new Array(_).fill(1)}NC(c,i,f,e.autoPad,e.group,a,h,r,l,u);let g=Object.assign({},e);return Object.assign(g,{kernelShape:i,pads:a,outputPadding:l,outputShape:u,dilations:f,strides:h}),g},Pm=e=>{let t=Mn(e),i=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,u=e.group,l=e.kernelShape,c=e.pads,f=e.strides,h=e.wIsConst(),g=e.outputPadding,_=e.outputShape;return{autoPad:r,format:i,dilations:a,group:u,kernelShape:l,outputPadding:g,outputShape:_,pads:c,strides:f,wIsConst:h,...t,cacheKey:`${e.format};${t.activation};`}},LC=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(i!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let u=e[0].dims.length-2;if(t.dilations.reduce((g,_)=>g+_,0)>0&&t.dilations.length!==u)throw new Error(`dilations should be ${u}D`);if(t.strides.reduce((g,_)=>g+_,0)>0&&t.strides.length!==u)throw new Error(`strides should be ${u}D`);if(t.pads.reduce((g,_)=>g+_,0)>0&&t.pads.length!==u*2)throw new Error(`pads should be ${u*2}D`);if(t.outputPadding.length!==u&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${u}D`);if(t.kernelShape.reduce((g,_)=>g+_,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Om=(e,t,i,r)=>{let a=e.kernelCustomData.wT??e.compute(Qe(t[1],[2,3,0,1]),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let u=[t[0],a];t.length===3&&u.push(t[2]),e.compute(km(u,i,r),{inputs:u})},VC=(e,t)=>{let i=t.format==="NHWC",r=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let u=t.dilations;(u.length===0||u[0]===0)&&(u=[1]);let l=t.strides;(l.length===0||l[0]===0)&&(l=[1]);let c=t.pads;c.length===0&&(c=[0,0]),c=[0,c[0],0,c[1]],l=[1].concat(l),u=[1].concat(u),a=[1].concat(a);let f=t.outputPadding;f=[0].concat(f);let h=Em({...t,pads:c,strides:l,dilations:u,kernelShape:a,outputPadding:f},r);Om(e,r,h,g=>i?[g[0],g[2],g[3]]:[g[0],g[1],g[3]])},Dm=(e,t)=>{if(LC(e.inputs,t),e.inputs[0].dims.length===3)VC(e,t);else{let i=Em(t,e.inputs);Om(e,e.inputs,i)}}});var WC,Mm,Rm,zm=ne(()=>{"use strict";ge();$e();We();xe();WC=(e,t,i,r)=>{let a=F.size(t),u=t.length,l=q("input",e,u),c=X("output",e,u),f=i.dataType===6?i.getInt32Array()[0]:Number(i.getBigInt64Array()[0]),h=F.normalizeAxis(f,u),g=_=>{let w=` i32(${l.indicesGet("inputIndices","uniforms.axis")}) `,x=le("uniforms.input_shape","uniforms.axis",u),$=r.reverse?w+(r.exclusive?" + 1":""):"0",S=r.reverse?x:w+(r.exclusive?"":" + 1");return`
                ${_.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(l,c)}
                ${_.mainStart()}
                  ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${c.offsetToIndices("global_idx")};
                  var sum = ${c.type.value}(0);
                  let first : i32 = ${$};
                  let last : i32 = ${S};
                  for (var i : i32 = first; i < last; i++) {
                    ${l.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${l.getByIndices("inputIndices")};
                  }
                  ${c.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:h},...re(t,t)]}),getShaderSource:g}},Mm=(e,t)=>{let i=e.inputs[0].dims,r=e.inputs[0].dataType,a=e.inputs[1];e.compute(WC(r,i,a,t),{inputs:[0]})},Rm=e=>{let t=e.exclusive===1,i=e.reverse===1;return _e({exclusive:t,reverse:i})}});var GC,FC,HC,Um,Nm,Lm=ne(()=>{"use strict";ge();$e();We();xe();GC=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},FC=(e,t,i,r)=>{let a=[];a.push(`fn perm(i: ${r.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`);for(let u=0;u<t;++u)a.push(i.indicesSet("a",e[u],`i[${u}]`));return a.push("return a;}"),a.join(`
`)},HC=(e,t)=>{let i,r,a,u,l,c,f=t.format==="NHWC",h=t.blocksize,g=t.mode==="DCR";f?([i,r,a,u]=e.dims,l=g?[i,r,a,h,h,u/h**2]:[i,r,a,u/h**2,h,h],c=g?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([i,r,a,u]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],l=g?[i,h,h,u/h**2,r,a]:[i,u/h**2,h,h,r,a],c=g?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let _=e.reshape(l),w=_.dims.length,x=e.dataType,$=q("a",x,w),S=X("output",x,w),O=j=>`
  ${j.registerUniform("output_size","u32").declareVariables($,S)}

  ${FC(c,w,$,S)}

  ${j.mainStart()}
    ${j.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:j=>{let I=f?[i,r*h,a*h,u/h**2]:[i,u/h**2,r*h,a*h],D=F.size(I),P=_.dims,G=F.sortBasedOnPerm(P,c);return{outputs:[{dims:I,dataType:j[0].dataType}],dispatchGroup:{x:Math.ceil(D/64)},programUniforms:[{type:12,data:D},...re(P,G)]}},getShaderSource:O}},Um=(e,t)=>{GC(e.inputs),e.compute(HC(e.inputs[0],t))},Nm=e=>_e({blocksize:e.blocksize,mode:e.mode,format:e.format})});var no,Vn,Vm,qC,KC,ro,oo,Wm,YC,Gm,Fm,Hm=ne(()=>{"use strict";ge();$e();We();xe();no="[a-zA-Z]|\\.\\.\\.",Vn="("+no+")+",Vm="^"+Vn+"$",qC="("+Vn+",)*"+Vn,KC="^"+qC+"$",ro=class{constructor(t=-1){this.symbolToIndices=new Map,this.inputIndex=t}addSymbol(t,i){let r=this.symbolToIndices.get(t);r===void 0?r=[i]:r.push(i),this.symbolToIndices.set(t,r)}},oo=class{constructor(t,i){this.equation=i;this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,a]=i.includes("->")?i.split("->",2):[i,""];if(!r.match(RegExp(KC)))throw new Error("Invalid LHS term");if(r.split(",").forEach((c,f)=>{let h=t[f].dims.slice();if(!c.match(RegExp(Vm)))throw new Error("Invalid LHS term");let g=this.processTerm(c,!0,h,f);this.lhs.push(g)}),a==="")a+=[...this.symbolToInfo.entries()].filter(([c,f])=>f.count===1||c==="...").map(([c])=>c).join("");else if(!a.match(RegExp(Vn)))throw new Error("Invalid RHS");a.match(RegExp(no,"g"))?.forEach(c=>{if(c==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let f=this.symbolToInfo.get(c);if(f===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(f.dimValue)}}),this.rhs=this.processTerm(a,!1,this.outputDims)}addSymbol(t,i,r){let a=this.symbolToInfo.get(t);if(a!==void 0){if(a.dimValue!==i&&a.count!==1)throw new Error("Dimension mismatch");a.count++,a.inputIndices.push(r)}else a={count:1,dimValue:i,inputIndices:[r]};this.symbolToInfo.set(t,a)}processTerm(t,i,r,a=-1){let u=r.length,l=!1,c=[],f=0;if(!t.match(RegExp(Vm))&&!i&&t!=="")throw new Error("Invalid LHS term");let h=t.match(RegExp(no,"g")),g=new ro(a);return h?.forEach((_,w)=>{if(_==="..."){if(l)throw new Error("Only one ellipsis is allowed per input term");l=!0;let x=u-h.length+1;if(x<0)throw new Error("Ellipsis out of bounds");if(c=r.slice(f,f+x),this.hasEllipsis){if(this.ellipsisDims.length!==c.length||this.ellipsisDims.toString()!==c.toString())throw new Error("Ellipsis dimensions mismatch")}else if(i)this.hasEllipsis=!0,this.ellipsisDims=c;else throw new Error("Ellipsis must be specified in the LHS");for(let $=0;$<c.length;$++){let S=String.fromCharCode(48+$);g.addSymbol(S,w+$),this.addSymbol(S,r[f++],a)}}else g.addSymbol(_,w+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(_,r[f++],a)}),g}},Wm=e=>e+"_max",YC=(e,t,i,r)=>{let u=e.map(g=>g.length).map((g,_)=>q(`input${_}`,t,g)),l=F.size(r),c=X("output",t,r.length),f=[...i.symbolToInfo.keys()].filter(g=>!i.rhs.symbolToIndices.has(g)),h=g=>{let _=[],w="var prod = 1.0;",x="var sum = 0.0;",$="sum += prod;",S=[],O=[],j=[],I=[],D=i.symbolToInfo.size===i.rhs.symbolToIndices.size;i.symbolToInfo.forEach((G,V)=>{if(i.rhs.symbolToIndices.has(V)){let N=i.rhs.symbolToIndices.get(V)?.[0];N!==void 0&&i.lhs.forEach((Y,J)=>{if(G.inputIndices.includes(J)){let oe=Y.symbolToIndices.get(V);if(oe===void 0)throw new Error("Invalid symbol error");oe.forEach(he=>{_.push(`${u[J].indicesSet(`input${J}Indices`,he,c.indicesGet("outputIndices",N))}`)})}})}else i.lhs.forEach((N,Y)=>{if(G.inputIndices.includes(Y)){let J=N.symbolToIndices.get(V);if(J===void 0)throw new Error("Invalid symbol error");J.forEach(oe=>{S.push(`${u[Y].indicesSet(`input${Y}Indices`,oe,`${V}`)}`)}),I.push(`prod *= ${u[Y].getByIndices(`input${Y}Indices`)};`)}}),O.push(`for(var ${V}: u32 = 0; ${V} < uniforms.${Wm(V)}; ${V}++) {`),j.push("}")});let P=D?[..._,`let sum = ${u.map((G,V)=>G.getByIndices(`input${V}Indices`)).join(" * ")};`]:[..._,x,...O,...S,w,...I,$,...j];return`
            ${g.registerUniforms(f.map(G=>({name:`${Wm(G)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...u,c)}

            ${g.mainStart()}
            ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${c.offsetToIndices("global_idx")};
            ${u.map((G,V)=>`var input${V}Indices: ${u[V].type.indices};`).join(`
`)}
            ${P.join(`
`)};
            ${c.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:i.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let g=f.filter(w=>i.symbolToInfo.has(w)).map(w=>({type:12,data:i.symbolToInfo.get(w)?.dimValue||0}));g.push({type:12,data:l});let _=e.map((w,x)=>[...re(w)]).reduce((w,x)=>w.concat(x),g);return _.push(...re(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:_}},getShaderSource:h}},Gm=(e,t)=>{let i=new oo(e.inputs,t.equation),r=i.outputDims,a=e.inputs.map((u,l)=>u.dims);e.compute(YC(a,e.inputs[0].dataType,i,r))},Fm=e=>{let t=e.equation.replace(/\s+/g,"");return _e({equation:t})}});var ZC,qm,QC,JC,Km,Ym=ne(()=>{"use strict";ge();$e();xe();ZC=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),r=i.length<t.length?0:i.length-t.length,a=t.length<i.length?0:t.length-i.length;for(;r<i.length&&a<t.length;++r,++a)if(i[r]!==t[a]&&i[r]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},qm=(e,t)=>{let i=e.length-t.length,r=[];for(let a=0;a<i;++a)r.push(e[a]);for(let a=0;a<t.length;++a)r.push(t[a]===1?e[a+i]:t[a]);return r},QC=(e,t)=>e.length>t.length?qm(e,t):qm(t,e),JC=e=>{let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),r=QC(t,i),a=e[0].dataType,u=a===9||F.size(t)===1,l=a===9||t.length>0&&t[t.length-1]%4===0?4:1,c=u||r.length>0&&r[r.length-1]%4===0?4:1,f=Math.ceil(F.size(r)/c),h=_=>{let w=q("input",a,t.length,l),x=X("output",a,r.length,c),$;if(a===9){let S=(O,j,I="")=>`
          let outputIndices${j} = ${x.offsetToIndices(`outputOffset + ${j}u`)};
          let offset${j} = ${w.broadcastedIndicesToOffset(`outputIndices${j}`,x)};
          let index${j} = offset${j} / 4u;
          let component${j} = offset${j} % 4u;
          ${O}[${j}] = ${I}(${w.getByOffset(`index${j}`)}[component${j}]);
        `;$=`
        let outputOffset = global_idx * ${c};
        var data = vec4<u32>(0);
        ${S("data",0,"u32")}
        ${S("data",1,"u32")}
        ${S("data",2,"u32")}
        ${S("data",3,"u32")}
        ${x.setByOffset("global_idx","data")}
      }`}else $=`
        let outputIndices = ${x.offsetToIndices(`global_idx * ${c}`)};
        let inputOffset = ${w.broadcastedIndicesToOffset("outputIndices",x)};
        let data = ${x.type.value}(${w.getByOffset(`inputOffset / ${l}`)});
        ${x.setByOffset("global_idx","data")}
      }`;return`
    ${_.registerUniform("vec_size","u32").declareVariables(w,x)}
    ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${$}`},g=[{type:12,data:f},...re(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${l}${c}`,inputDependencies:["rank"]},getShaderSource:h,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:g})}},Km=e=>{ZC(e.inputs),e.compute(JC(e.inputs),{inputs:[0]})}});var XC,Zm,Qm=ne(()=>{"use strict";ge();$e();xe();Bn();XC=e=>{let t=e[0].dataType,i=F.size(e[0].dims),r=F.size(e[1].dims),a=r%4===0,u=l=>{let c=q("x",t,[1],4),f=q("bias",t,[1],4),h=X("y",t,[1],4),g=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],_=x=>`
      let bias${x}_offset: u32 = (global_idx * 4 + ${x}) % uniforms.bias_size;
      let bias${x} = ${f.getByOffset(`bias${x}_offset / 4`)}[bias${x}_offset % 4];`,w=a?`
      let bias = ${f.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${_(0)}${_(1)}${_(2)}${_(3)}
      let bias = ${c.type.value}(bias0, bias1, bias2, bias3);`;return`${l.registerUniforms(g).declareVariables(c,f,h)}

    ${Yr(Ze(t))}

    ${l.mainStart(ei)}
      ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${c.getByOffset("global_idx")};
      ${w}
      let x_in = x + bias;
      ${h.setByOffset("global_idx",Zr("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:u,getRunData:l=>({outputs:[{dims:l[0].dims,dataType:l[0].dataType}],programUniforms:[{type:12,data:Math.ceil(i/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(i/ei/4)}})}},Zm=e=>{e.inputs.length<2||F.size(e.inputs[1].dims)===0?Hf(e):e.compute(XC(e.inputs))}});var ex,tx,Jm,Xm,eh=ne(()=>{"use strict";ge();$e();We();xe();ex=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},tx=(e,t)=>{let i=e[0].dims,r=e[1].dims,a=i.length,u=F.normalizeAxis(t.axis,a),l=i.slice(0);l.splice(u,1,...r);let c=i[u],f=e[0].dataType===9?4:1,h=Math.ceil(F.size(l)/f),g=[{type:12,data:h},{type:6,data:c},{type:12,data:u},...re(e[0].dims,e[1].dims,l)],_=w=>{let x=q("data",e[0].dataType,e[0].dims.length,f),$=q("inputIndices",e[1].dataType,e[1].dims.length),S=X("output",e[0].dataType,l.length,f),O=I=>{let D=r.length,P=`var indicesIndices${I}  = ${$.type.indices}(0);`;for(let G=0;G<D;G++)P+=`${D>1?`indicesIndices${I}[${G}]`:`indicesIndices${I}`} = ${l.length>1?`outputIndices${I}[uniforms.axis + ${G}]`:`outputIndices${I}`};`;P+=`
          var idx${I} = ${$.getByIndices(`indicesIndices${I}`)};
          if (idx${I} < 0) {
            idx${I} = idx${I} + uniforms.axisDimLimit;
          }
          var dataIndices${I} : ${x.type.indices};
        `;for(let G=0,V=0;G<a;G++)G===u?(P+=`${a>1?`dataIndices${I}[${G}]`:`dataIndices${I}`} = u32(idx${I});`,V+=D):(P+=`${a>1?`dataIndices${I}[${G}]`:`dataIndices${I}`} = ${l.length>1?`outputIndices${I}[${V}]`:`outputIndices${I}`};`,V++);return P},j;if(e[0].dataType===9){let I=(D,P,G="")=>`
          let outputIndices${P} = ${S.offsetToIndices(`outputOffset + ${P}u`)};
          ${O(P)};
          let offset${P} = ${x.indicesToOffset(`dataIndices${P}`)};
          let index${P} = offset${P} / 4u;
          let component${P} = offset${P} % 4u;
          ${D}[${P}] = ${G}(${x.getByOffset(`index${P}`)}[component${P}]);
        `;j=`
        let outputOffset = global_idx * ${f};
        var value = vec4<u32>(0);
        ${I("value",0,"u32")}
        ${I("value",1,"u32")}
        ${I("value",2,"u32")}
        ${I("value",3,"u32")}
        ${S.setByOffset("global_idx","value")}
      `}else j=`
      let outputIndices = ${S.offsetToIndices("global_idx")};
      ${O("")};
      let value = ${x.getByIndices("dataIndices")};
      ${S.setByOffset("global_idx","value")};
      `;return`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(x,$,S)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${j}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:_}},Jm=e=>_e({axis:e.axis}),Xm=(e,t)=>{let i=e.inputs;ex(i),e.compute(tx(e.inputs,t))}});var ix,th,ih,nh=ne(()=>{"use strict";ge();$e();xe();ix=(e,t,i,r,a,u,l,c,f)=>{let h=[{type:12,data:u},{type:12,data:r},{type:12,data:a},{type:12,data:i},{type:12,data:l},{type:12,data:c},{type:12,data:f}],g=[u];h.push(...re(t.dims,g));let _=w=>{let x=q("indices_data",t.dataType,t.dims.length),$=X("input_slice_offsets_data",12,1,1),S=[x,$],O=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:i.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${w.registerUniforms(O).declareVariables(...S)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${a.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${i.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${i.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:g,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h}),getShaderSource:_},{inputs:[t],outputs:[-1]})[0]},th=(e,t)=>{let i=e.inputs,r=i[0].dims,a=i[0].dataType,u=i[1].dims,l=u[u.length-1],c=F.sizeToDimension(u,u.length-1),f=F.sizeFromDimension(r,t.batchDims+l),h=F.sizeToDimension(r,t.batchDims),g=F.sizeFromDimension(r,t.batchDims),_=c/h,w=new Array(l),x=f;for(let P=0;P<l;++P)w[l-1-P]=x,x*=r[t.batchDims+l-1-P];let $=ix(e,i[1],w,t.batchDims,r,c,_,g,l),S=t.batchDims+l;if(S>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let O=u.slice(0,-1).concat(r.slice(S)),j=F.size(O),I=[{type:12,data:j},{type:12,data:f},...re(i[0].dims,$.dims,O)],D=P=>{let G=q("data",i[0].dataType,i[0].dims.length),V=q("slice_offsets",12,$.dims.length),N=X("output",i[0].dataType,O.length);return`
          ${P.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(G,V,N)}
            ${P.mainStart()}
            ${P.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:O,dataType:a}],dispatchGroup:{x:Math.ceil(j/64)},programUniforms:I}),getShaderSource:D},{inputs:[i[0],$]})},ih=e=>({batchDims:e.batch_dims,cacheKey:""})});var nx,rx,rh,oh,ah=ne(()=>{"use strict";ge();$e();We();xe();nx=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let i=F.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,a=e[0],u=e[2],l=e.length===4?e[3]:void 0;if(u.dims.length!==a.dims.length||!a.dims.map((c,f)=>f===i?Math.ceil(c/r)===u.dims[f]:c===u.dims[f]).reduce((c,f)=>c&&f,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(l){if(l.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(l.dims.length!==u.dims.length||!l.dims.map((c,f)=>c===u.dims[f]).reduce((c,f)=>c&&f,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},rx=(e,t)=>{let i=e[0].dims,r=e[1].dims,a=i.length,u=F.normalizeAxis(t.gatherAxis,a),l=F.normalizeAxis(t.quantizeAxis,a),c=i.slice(0);c.splice(u,1,...r);let f=F.size(c),h=e[2].dataType,_=e[0].dataType===22,w=[{type:12,data:f},{type:12,data:l},{type:12,data:u},{type:12,data:t.blockSize},...re(...e.map(($,S)=>$.dims),c)],x=$=>{let S=q("data",e[0].dataType,e[0].dims.length),O=q("inputIndices",e[1].dataType,e[1].dims.length),j=q("scales",e[2].dataType,e[2].dims.length),I=e.length>3?q("zeroPoint",e[3].dataType,e[3].dims.length):void 0,D=X("output",h,c.length),P=[S,O,j];I&&P.push(I);let G=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${$.registerUniforms(G).declareVariables(...P,D)}
        ${$.mainStart()}
        let output_indices = ${D.offsetToIndices("global_idx")};
        var indices_indices = ${O.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${D.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${O.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${D.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${S.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${D.indicesGet("output_indices","i")};
          ${S.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${O.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${i[u]};
        }
        ${S.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${c.length}; i++) {
          let index = ${D.indicesGet("output_indices",`i + ${r.length} - 1`)};
          ${S.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${S.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${S.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${_?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${j.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${j.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${j.getByIndices("scale_indices")};
        ${I?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${I.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${I.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${_?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Ze(h)}(quantized_data - zero_point) * scale;
        ${D.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter(($,S)=>S!==1).map($=>$.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},($,S)=>"rank")},getRunData:()=>({outputs:[{dims:c,dataType:h}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:w}),getShaderSource:x}},rh=(e,t)=>{let i=e.inputs;nx(i,t),e.compute(rx(e.inputs,t))},oh=e=>_e({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})});var ox,ax,sh,uh,lh=ne(()=>{"use strict";ge();$e();We();xe();ox=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},ax=(e,t)=>{let i=e[0].dims,r=e[0].dataType,a=i.length,u=e[1].dims,l=e[1].dataType,c=F.normalizeAxis(t.axis,a),f=i[c],h=u.slice(0),g=F.size(h),_=q("input",r,a),w=q("indicesInput",l,u.length),x=X("output",r,h.length),$=[{type:12,data:g},{type:6,data:f},{type:12,data:c}];return $.push(...re(i,u,h)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:h,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:$}),getShaderSource:j=>`
      ${j.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(_,w,x)}
      ${j.mainStart()}
      ${j.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${x.offsetToIndices("global_idx")};

      var idx = ${w.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${_.type.indices}(outputIndices);
      ${_.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${_.getByIndices("inputIndices")};

      ${x.setByOffset("global_idx","value")};
  }`}},sh=e=>_e({axis:e.axis}),uh=(e,t)=>{let i=e.inputs;ox(i),e.compute(ax(e.inputs,t))}});var sx,ux,dh,ch,ph=ne(()=>{"use strict";ge();$e();xe();sx=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},ux=(e,t)=>{let i=e[0].dims.slice(),r=e[1].dims.slice(),[a,u,l]=$n.getShapeOfGemmResult(i,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),c=[a,u];if(!c)throw new Error("Can't use gemm on the given tensors");let f=16,h=Math.ceil(u/f),g=Math.ceil(a/f),_=!0,w=F.size(c),x=[{type:12,data:_?h:w},{type:12,data:a},{type:12,data:u},{type:12,data:l},{type:1,data:t.alpha},{type:1,data:t.beta}],$=["type","type"];e.length===3&&(x.push(...re(e[2].dims)),$.push("rank")),x.push(...re(c));let S=j=>{let I="";t.transA&&t.transB?I="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?I="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?I="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(I="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let D=t.alpha===1?"":"value *= uniforms.alpha;",P=q("a",e[0].dataType,e[0].dims),G=q("b",e[1].dataType,e[1].dims),V=P.type.value,N=null,Y=[P,G];e.length===3&&(N=q("c",e[2].dataType,e[2].dims.length),Y.push(N));let J=X("output",e[0].dataType,c.length);Y.push(J);let oe=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${j.registerUniforms(oe).declareVariables(...Y)}

  ${j.mainStart()}
    ${j.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${V}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${I}
    }

    ${D}
    ${N!=null?`let cOffset = ${N.broadcastedIndicesToOffset("vec2(m, n)",J)}; value += ${V}(uniforms.beta) * ${N.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},O=j=>{let I=q("a",e[0].dataType,e[0].dims),D=q("b",e[1].dataType,e[1].dims),P=null,G=[I,D];e.length===3&&(P=q("c",e[2].dataType,e[2].dims.length),G.push(P));let V=X("output",e[0].dataType,c.length);G.push(V);let N=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],Y="",J="";t.transA&&t.transB?(J=`
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
        tile_b[local_id.y][local_id.x] = ${D.type.value}(0);
      }
      `,Y="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(J=`
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
        tile_b[local_id.y][local_id.x] = ${D.type.value}(0);
      }
      `,Y="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(J=`
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
        tile_b[local_id.y][local_id.x] = ${D.type.value}(0);
      }
      `,Y="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(J=`
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
        tile_b[local_id.y][local_id.x] = ${D.type.value}(0);
      }
      `,Y="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let oe=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${j.registerUniforms(N).declareVariables(...G)}
  var<workgroup> tile_a: array<array<${I.type.storage}, ${f}>, ${f}>;
  var<workgroup> tile_b: array<array<${D.type.storage}, ${f}>, ${f}>;
  ${j.mainStart([f,f,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${f};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${f};
    let num_tiles = (uniforms.K - 1) / ${f} + 1;
    var k_start = 0u;
    var value = ${V.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${J}
      k_start = k_start + ${f};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${f}; k++) {
        ${Y}
      }
      workgroupBarrier();
    }

    ${oe}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${P!=null?`let cOffset = ${P.broadcastedIndicesToOffset("vec2(m, n)",V)}; value += ${V.type.value}(uniforms.beta) * ${P.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return _?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:c,dataType:e[0].dataType}],dispatchGroup:{x:h*g},programUniforms:x}),getShaderSource:O}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:c,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:x}),getShaderSource:S}},dh=e=>{let t=e.transA,i=e.transB,r=e.alpha,a=e.beta;return{transA:t,transB:i,alpha:r,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},ch=(e,t)=>{sx(e.inputs),e.compute(ux(e.inputs,t))}});var Bt,Ft,pi,fi,lx,dx,cx,px,fx,mx,hx,yx,fh,mh,hh=ne(()=>{"use strict";ge();$e();We();xe();[Bt,Ft,pi,fi]=[0,1,2,3],lx=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},dx=`
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
`,cx=e=>`
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
`,px=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,fx=e=>`
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
`,mx=(e,t,i)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Bt}] = batch;
     indices[${Ft}] = channel;`+(()=>{switch(i.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${pi}] = u32(r);
            indices[${fi}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${pi}] = u32(clamp(r, 0, H - 1));
          indices[${fi}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${pi}] = gs_reflect(r, border[1], border[3]);
          indices[${fi}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${i.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,hx=(e,t,i)=>(()=>{switch(i.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Bt}], indices[${Ft}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Bt}], indices[${Ft}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Bt}], indices[${Ft}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Bt}], indices[${Ft}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Bt}], indices[${Ft}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Bt}], indices[${Ft}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${i.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,yx=(e,t)=>{let i=q("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=q("grid",e[1].dataType,r.length,2),u=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(u=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Bt,Ft,pi,fi]=[0,3,1,2]);let l=X("output",e[0].dataType,u.length),c=i.type.value,f=F.size(u),h=[{type:12,data:f},...re(e[0].dims,r,u)],g=_=>`
  ${_.registerUniform("output_size","u32").declareVariables(i,a,l)}
  ${dx}
  ${cx(c)}
  ${px(t)}
  ${fx(t)}
  ${mx(i,c,t)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${pi}]);
      let W_in = i32(uniforms.x_shape[${fi}]);

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

      let indices = ${l.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Bt}], indices[${pi}], indices[${fi}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${hx(l,c,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:_=>{let w=F.size(u);return{outputs:[{dims:u,dataType:_[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:h}},getShaderSource:g}},fh=(e,t)=>{lx(e.inputs),e.compute(yx(e.inputs,t))},mh=e=>_e({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})});var rt,bx,gh,yh,vx,Ui,_h,ao=ne(()=>{"use strict";ge();$e();We();An();On();xe();Dt();rt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,bx=(e,t)=>{let i=e[0],r=rt(e,1),a=rt(e,2),u=rt(e,3),l=rt(e,4),c=rt(e,5),f=rt(e,6),h=rt(e,7);if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let g=i.dims[0],_=i.dims[1],w=i.dims.length===3?i.dims[2]:t.numHeads*i.dims[4],x=_,$=0,S=0,O=Math.floor(w/t.numHeads);if(f&&h&&F.size(f.dims)&&F.size(h.dims)){if(f.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(f.dims[0]!==g||f.dims[1]!==t.numHeads||f.dims[3]!==O)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(h.dims[0]!==g||h.dims[1]!==t.numHeads||h.dims[3]!==O)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(f.dims[2]!==h.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(h.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');$=f.dims[2],S=f.dims[2]}else if(f&&F.size(f.dims)||h&&F.size(h.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let j;if(r&&F.size(r.dims)>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==i.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');j=2,x=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==O)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');j=5,x=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==O)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');j=0,x=r.dims[2]}}else{if(i.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(i.dims[2]!==t.numHeads||i.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');j=3}if(u&&F.size(u.dims)>0){if(u.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let I=$+x,D=0;if(l&&F.size(l.dims)>0){D=8;let N=l.dims;throw N.length===1?N[0]===g?D=1:N[0]===3*g+2&&(D=3):N.length===2&&N[0]===g&&N[1]===I&&(D=5),D===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let P=!1,G=w;if(a&&F.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(x!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');G=a.dims[2]}else{if(x!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');G=a.dims[1]*a.dims[3],P=!0}}let V=!1;if(l&&F.size(l.dims)>0)throw new Error("Key padding mask is not supported");if(c&&F.size(c.dims)>0){if(c.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(c.dims[0]!==g||c.dims[1]!==t.numHeads||c.dims[2]!==_||c.dims[3]!==I)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:g,sequenceLength:_,pastSequenceLength:$,kvSequenceLength:x,totalSequenceLength:I,maxSequenceLength:S,inputHiddenSize:0,hiddenSize:w,vHiddenSize:G,headSize:O,vHeadSize:Math.floor(G/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:D,scale:t.scale,broadcastResPosBias:V,passPastInKv:P,qkvFormat:j}},gh=e=>_e({...e}),yh=_e({perm:[0,2,1,3]}),vx=(e,t,i,r,a,u,l)=>{let c=[r,a,u],f=F.size(c),h=[{type:12,data:f},{type:12,data:l},{type:12,data:u}],g=_=>{let w=X("qkv_with_bias",t.dataType,c),x=q("qkv",t.dataType,c),$=q("bias",i.dataType,c),S=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${_.registerUniforms(S).declareVariables(x,$,w)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:c,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:h}),getShaderSource:g},{inputs:[t,i],outputs:[-1]})[0]},Ui=(e,t,i,r,a,u,l,c)=>{let f=u;if(l&&F.size(l.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return f=vx(e,u,l,t,r,i*a,c),f=f.reshape([t,r,i,a]),i===1||r===1?f:e.compute(Qe(f,yh.perm),{inputs:[f],outputs:[-1]})[0]}else return u.dims.length===3&&(f=u.reshape([t,r,i,a])),i===1||r===1?f:e.compute(Qe(f,yh.perm),{inputs:[f],outputs:[-1]})[0]},_h=(e,t)=>{let i=bx(e.inputs,t),r=e.inputs[0],a=rt(e.inputs,1),u=rt(e.inputs,2),l=rt(e.inputs,3),c=rt(e.inputs,4),f=rt(e.inputs,5),h=rt(e.inputs,6),g=rt(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if(a?.dims.length===5)throw new Error("Packed KV is not implemented");let _=a&&u&&a.dims.length===4&&u.dims.length===4,w=Ui(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,r,l,0);if(_)return ci(e,w,a,u,c,void 0,h,g,f,i);if(!a||!u)throw new Error("key and value must be provided");let x=Ui(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.headSize,a,l,i.hiddenSize),$=Ui(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.vHeadSize,u,l,2*i.hiddenSize);ci(e,w,x,$,c,void 0,h,g,f,i)}});var wx,$x,Cx,xx,so,bh,vh,uo=ne(()=>{"use strict";ge();$e();We();xe();wx=e=>{if(!e||e.length<1)throw new Error("too few inputs")},$x=(e,t)=>{let i=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>i.push(Number(a))),r=i.length),_e({numOutputs:r,axis:t.axis,splitSizes:i})},Cx=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${le("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,xx=e=>{let t=e.length,i=[];for(let r=0;r<t;++r){let a=e[r].setByIndices("indices","input[global_idx]");t===1?i.push(a):r===0?i.push(`if (output_number == ${r}u) { ${a} }`):r===t-1?i.push(`else { ${a} }`):i.push(`else if (output_number == ${r}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${i.join(`
`)}
      }`},so=(e,t)=>{let i=e[0].dims,r=F.size(i),a=e[0].dataType,u=F.normalizeAxis(t.axis,i.length),l=new Array(t.numOutputs),c=q("input",a,i.length),f=new Array(t.numOutputs),h=[],g=[],_=0,w=[{type:12,data:r}];for(let $=0;$<t.numOutputs;$++){_+=t.splitSizes[$],f[$]=_;let S=i.slice();S[u]=t.splitSizes[$],g.push(S),l[$]=X(`output${$}`,a,S.length),h.push({dims:g[$],dataType:e[0].dataType})}w.push({type:12,data:f},...re(i,...g));let x=$=>`
  ${$.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",f.length).declareVariables(c,...l)}
  ${Cx(f.length)}
  ${xx(l)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${c.offsetToIndices("global_idx")};
    var index = ${c.indicesGet("indices",u)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${le("uniforms.size_in_split_axis","output_number - 1u",f.length)};
      ${c.indicesSet("indices",u,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:h,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:w})}},bh=(e,t)=>{wx(e.inputs);let i=e.inputs.length===1?t:$x(e.inputs,t);e.compute(so(e.inputs,i),{inputs:[0]})},vh=e=>{let t=e.axis,i=e.splitSizes,r=e.numOutputs<0?i.length:e.numOutputs;if(r!==i.length)throw new Error("numOutputs and splitSizes length must be equal");return _e({axis:t,numOutputs:r,splitSizes:i})}});var Sx,Wn,wh,lo=ne(()=>{"use strict";ge();$e();We();xe();Sx=(e,t)=>{let[i,r,a,u]=e,{numHeads:l,rotaryEmbeddingDim:c}=t;if(i.dims.length!==3&&i.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${i.dims.length}`);if(!F.areEqual(r.dims,[])&&!F.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(u.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${u.dims.length}`);if(!F.areEqual(a.dims,u.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(c>0&&l===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let f=i.dims[0],h=i.dims[i.dims.length-2],g=a.dims[0],_=F.sizeFromDimension(i.dims,1)/h,w=c===0?a.dims[1]*2:_/l;if(c>w)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(f!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(h!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(w/2!==a.dims[1]&&c/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`);if(h>g)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},Wn=(e,t)=>{let{interleaved:i,numHeads:r,rotaryEmbeddingDim:a,scale:u}=t,l=e[0].dims[0],c=F.sizeFromDimension(e[0].dims,1),f=e[0].dims[e[0].dims.length-2],h=c/f,g=e[2].dims[1],_=a===0?g*2:h/r,w=new Array(l,f,h/_,_-g),x=F.computeStrides(w),$=[{type:1,data:u},{type:12,data:w},{type:12,data:x},...e[0].dims.length===3?new Array({type:12,data:[c,h,_,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[c,_,f*_,1]}):[],...re(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],S=O=>{let j=q("input",e[0].dataType,e[0].dims.length),I=q("position_ids",e[1].dataType,e[1].dims.length),D=q("cos_cache",e[2].dataType,e[2].dims.length),P=q("sin_cache",e[3].dataType,e[3].dims.length),G=X("output",e[0].dataType,e[0].dims.length);return O.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:w.length},{name:"global_strides",type:"u32",length:x.length},{name:"input_output_strides",type:"u32",length:x.length}]),`
        ${O.declareVariables(j,I,D,P,G)}

        ${O.mainStart(ei)}
          let half_rotary_emb_dim = uniforms.${D.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${O.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${I.broadcastedIndicesToOffset("bsnh.xy",X("",I.type.tensor,2))};
            let position_id =
                u32(${I.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${i});
            let j = i + select(half_rotary_emb_dim, 1, ${i});
            let re = ${j.getByOffset("i")} * ${D.get("position_id","bsnh[3]")} -
                ${j.getByOffset("j")} * ${P.get("position_id","bsnh[3]")};
            ${G.setByOffset("i","re")}
            let im = ${j.getByOffset("i")} * ${P.get("position_id","bsnh[3]")} +
                ${j.getByOffset("j")} * ${D.get("position_id","bsnh[3]")};
            ${G.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${G.setByOffset("k",j.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:_e({interleaved:i}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:S,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(F.size(w)/ei)},programUniforms:$})}},wh=(e,t)=>{Sx(e.inputs,t),e.compute(Wn(e.inputs,t))}});var Tx,Ix,$h,Ax,Ch,xh=ne(()=>{"use strict";We();ge();On();ao();uo();Dt();lo();xe();Tx=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let i=e[0],r=e[1],a=e[2],u=e[3],l=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=!1,f=i.dims[0],h=i.dims[1],g=i.dims.length===3?c?i.dims[2]/3:i.dims[2]:t.numHeads*i.dims[4],_=h,w=0,x=!r||r.dims.length===0,$=Math.floor(x?g/(t.numHeads+2*t.kvNumHeads):g/t.numHeads);x&&(g=$*t.numHeads);let S=u&&u.dims.length!==0,O=l&&l.dims.length!==0;if(S&&u.dims.length===4&&u.dims[0]===f&&u.dims[1]!==t.kvNumHeads&&u.dims[2]===t.kvNumHeads&&u.dims[3]===$)throw new Error("BSNH pastKey/pastValue is not supported");if(S&&O){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');w=u.dims[2]}else if(S||O)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let I=1;if(r&&r.dims.length>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(i.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');_=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==$)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');_=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==$)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');_=r.dims[2]}}else{if(i.dims.length!==3&&i.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(i.dims.length===5&&(i.dims[2]!==t.numHeads||i.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');I=3}let D=0,P=!1,G=t.kvNumHeads?$*t.kvNumHeads:g;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(_!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');G=a.dims[2]}else{if(_!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');G=a.dims[1]*a.dims[3],P=!0}}let V=e.length>4?e[5]:void 0;if(V&&V.dims.length!==1&&V.dims[0]!==f)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:f,sequenceLength:h,pastSequenceLength:w,kvSequenceLength:_,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:g,vHiddenSize:G,headSize:$,vHeadSize:Math.floor(G/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:D,scale:t.scale,broadcastResPosBias:!1,passPastInKv:P,qkvFormat:I}},Ix=_e({perm:[0,2,1,3]}),$h=(e,t,i)=>{let r=t,a=i.kvNumHeads;return t.dims.length===3&&i.kvSequenceLength!==0&&(r=t.reshape([i.batchSize,i.kvSequenceLength,a,i.headSize]),r=e.compute(Qe(r,Ix.perm),{inputs:[r],outputs:[-1]})[0]),r},Ax=(e,t,i,r)=>{let a=7,u=["type","type"],l=[e*t],c=e*t,f=[{type:12,data:c},{type:12,data:t},{type:12,data:e}],h=g=>{let _=q("seq_lens",i.dataType,i.dims),w=q("total_seq_lens",r.dataType,r.dims),x=X("pos_ids",a,l),$=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${g.registerUniforms($).declareVariables(_,w,x)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${w.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${_.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${x.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${x.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${x.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:l,dataType:a}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:f}),getShaderSource:h}},Ch=(e,t)=>{let i=Tx(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,u=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,l=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,c=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,f=e.inputs.length>4?e.inputs[5]:void 0,h=e.inputs.length>5?e.inputs[6]:void 0,g=i.kvNumHeads?i.kvNumHeads:i.numHeads,_=_e({axis:2,numOutputs:3,splitSizes:[i.numHeads*i.headSize,g*i.headSize,g*i.headSize]}),[w,x,$]=!a&&!u?e.compute(so([r],_),{inputs:[r],outputs:[-1,-1,-1]}):[r,a,u],S,O;if(t.doRotary){let P=e.compute(Ax(i.batchSize,i.sequenceLength,f,h),{inputs:[f,h],outputs:[-1]})[0],G=e.inputs[7],V=e.inputs[8],N=_e({interleaved:t.rotaryInterleaved!==0,numHeads:i.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),Y=[w,P,G,V],J=[-1];S=e.compute(Wn(Y,N),{inputs:Y,outputs:J})[0],Y.splice(0,1,x);let oe=_e({interleaved:t.rotaryInterleaved!==0,numHeads:i.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});O=e.compute(Wn(Y,oe),{inputs:Y,outputs:J})[0]}let j=Ui(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,t.doRotary?S:w,void 0,0),I=$h(e,t.doRotary?O:x,i),D=$h(e,$,i);ci(e,j,I,D,void 0,void 0,l,c,void 0,i,f,h)}});var Sh,kx,jx,Th,Ih=ne(()=>{"use strict";ge();$e();Dt();xe();Sh=(e,t,i,r,a,u,l,c)=>{let f=Oe(u),h=f===1?"f32":`vec${f}f`,g=f===1?"vec2f":`mat2x${f}f`,_=a*l,w=64;_===1&&(w=256);let x=[a,l,u/f],$=[a,l,2],S=["rank","type","type"],O=[];O.push(...re(x,$));let j=I=>{let D=q("x",t.dataType,3,f),P=q("scale",i.dataType,i.dims),G=q("bias",r.dataType,r.dims),V=X("output",1,3,2),N=[D,P,G,V];return`
  var<workgroup> workgroup_shared : array<${g}, ${w}>;
  const workgroup_size = ${w}u;
  ${I.declareVariables(...N)}
  ${I.mainStart(w)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${h}(0);
    var squared_sum = ${h}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${h}(${D.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${g}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${ht("workgroup_shared[0][0]",f)} / f32(hight * ${f});
      let squared_sum_final = ${ht("workgroup_shared[0][1]",f)} / f32(hight * ${f});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${c}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${f};${c};${w}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:$,dataType:1}],dispatchGroup:{x:_},programUniforms:O}),getShaderSource:j},{inputs:[t,i,r],outputs:[-1]})[0]},kx=(e,t,i)=>{let r=t[0].dims,a=r,u=2,l=r[0],c=r[1],f=F.sizeFromDimension(r,u),h=Oe(f),g=F.size(a)/h,_=Sh(e,t[0],t[1],t[2],l,f,c,i.epsilon),w=[l,c,f/h],x=[l,c],$=["type","none"],S=O=>{let j=q("x",t[0].dataType,w.length,h),I=q("scale_shift",1,x.length,2),D=X("output",t[0].dataType,w.length,h),P=[j,I,D];return`
  ${O.registerUniform("output_size","u32").declareVariables(...P)}
  ${O.mainStart()}
  ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${D.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${I.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${j.getByOffset("global_idx")} * ${D.type.value}(scale_shift.x) + ${D.type.value}(scale_shift.y);
      ${D.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${h}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:[{type:12,data:g},...re(w,x,w)]}),getShaderSource:S},{inputs:[t[0],_]})},jx=(e,t,i)=>{let r=t[0].dims,a=r,u=r[0],l=r[r.length-1],c=F.sizeFromDimension(r,1)/l,f=Oe(l),h=F.size(a)/f,g=[{type:12,data:c},{type:12,data:Math.floor(l/f)}],_=["type","type"],w=!1,x=[0,r.length-1];for(let j=0;j<r.length-2;j++)w=w||r[j+1]!==1,x.push(j+1);w=w&&r[r.length-1]!==1;let $=w?e.compute(Qe(e.inputs[0],x),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(j,I)=>r[x[I]])),S=Sh(e,$,t[1],t[2],u,c,l,i.epsilon),O=j=>{let I=ze(t[0].dataType),D=f===1?"vec2f":`mat${f}x2f`,P=N=>{let Y=N===0?"x":"y",J=f===1?"f32":`vec${f}f`;switch(f){case 1:return`${I}(${J}(scale.${Y}))`;case 2:return`vec2<${I}>(${J}(scale[0].${Y}, scale[1].${Y}))`;case 4:return`vec4<${I}>(${J}(scale[0].${Y}, scale[1].${Y}, scale[2].${Y}, scale[3].${Y}))`;default:throw new Error(`Not supported compoents ${f}`)}},G=q("input",t[0].dataType,t[0].dims,f),V=X("output",t[0].dataType,a,f);return`
  @group(0) @binding(0) var<storage, read> input : array<${G.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${D}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${V.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${j.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${P(0)}, ${P(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${f}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:g}),getShaderSource:O},{inputs:[t[0],S]})},Th=(e,t)=>{t.format==="NHWC"?jx(e,e.inputs,t):kx(e,e.inputs,t)}});var Ex,Px,Ah,kh=ne(()=>{"use strict";ge();$e();xe();Ex=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Px=(e,t,i)=>{let r=t.simplified,a=e[0].dims,u=e[1],l=!r&&e[2],c=a,f=F.normalizeAxis(t.axis,a.length),h=F.sizeToDimension(a,f),g=F.sizeFromDimension(a,f),_=F.size(u.dims),w=l?F.size(l.dims):0;if(_!==g||l&&w!==g)throw new Error(`Size of X.shape()[axis:] == ${g}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${_} and bias size of ${w}`);let x=[];for(let G=0;G<a.length;++G)G<f?x.push(a[G]):x.push(1);let $=Oe(g),S=["type","type"],O=[{type:12,data:h},{type:1,data:g},{type:12,data:Math.floor(g/$)},{type:1,data:t.epsilon}];l&&S.push("type");let j=i>1,I=i>2,D=G=>{let V=ze(e[0].dataType),N=[q("x",e[0].dataType,e[0].dims,$),q("scale",u.dataType,u.dims,$)];l&&N.push(q("bias",l.dataType,l.dims,$)),N.push(X("output",e[0].dataType,c,$)),j&&N.push(X("mean_data_output",1,x)),I&&N.push(X("inv_std_output",1,x));let Y=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${G.registerUniforms(Y).declareVariables(...N)}
  ${G.mainStart()}
    ${G.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Fr("f32",$)};
    var mean_square_vector = ${Fr("f32",$)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${ti(V,$,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${ht("mean_vector",$)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${ht("mean_square_vector",$)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${ti(V,$,"x[j + offset]")};
      let f32scale = ${ti(V,$,"scale[j]")};
      output[j + offset] = ${N[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${l?`+ ${ti(V,$,"bias[j]")}`:""}
      );
    }

    ${j?"mean_data_output[global_idx] = mean":""};
    ${I?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},P=[{dims:c,dataType:e[0].dataType}];return j&&P.push({dims:x,dataType:1}),I&&P.push({dims:x,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${$};${i};${r}`,inputDependencies:S},getRunData:()=>({outputs:P,dispatchGroup:{x:Math.ceil(h/64)},programUniforms:O}),getShaderSource:D}},Ah=(e,t)=>{Ex(e.inputs),e.compute(Px(e.inputs,t,e.outputCount))}});var Ox,jh,Eh=ne(()=>{"use strict";$e();Un();Nn();Ox=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},jh=e=>{Ox(e.inputs);let t=Tt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let i=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(i<8&&r<8)e.compute(zn(e.inputs,{activation:""},t));else{let a=t[t.length-2],u=F.size(e.inputs[0].dims.slice(0,-2)),l=F.size(e.inputs[1].dims.slice(0,-2));if(u!==1&&a===1&&l===1){let c=e.inputs[0].reshape([1,u,r]),f=e.inputs[1].reshape([1,r,i]),h=[1,u,i],g=[c,f];e.compute(zi(g,{activation:""},t,h),{inputs:g})}else e.compute(zi(e.inputs,{activation:""},t))}}});var Dx,Bx,Mx,Ph,Oh,Dh=ne(()=>{"use strict";ge();$e();We();xe();Dx=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let i=e[0],r=i.dims.length;if(i.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),u=t.blockSize/8*t.bits,l=e[1];if(!F.areEqual(l.dims,[t.n,a,u]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let f=e[2].dims;if(F.size(f)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let g=e[3].dims,_=t.n*(t.bits===8?a:Math.floor((a*t.bits+7)/8));if(F.size(g)!==_)throw new Error("zeroPoints input size error.")}},Bx=(e,t)=>{let i=e[0].dims,r=i.length,a=i[r-2],u=t.k,l=t.n,c=i.slice(0,r-2),f=F.size(c),g=e[1].dims[2]/4,_=e[0].dataType,w=Oe(t.k),x=Oe(g),$=Oe(l),S=c.concat([a,l]),O=a>1&&l/$%2===0?2:1,j=F.size(S)/$/O,I=64,D=[],P=[f,a,u/w],G=F.convertShape(e[1].dims).slice();G.splice(-1,1,g/x),D.push(...re(P)),D.push(...re(G)),D.push(...re(e[2].dims)),e.length===4&&D.push(...re(F.convertShape(e[3].dims)));let V=[f,a,l/$];D.push(...re(V));let N=Y=>{let J=P.length,oe=q("a",e[0].dataType,J,w),he=q("b",12,G.length,x),ce=q("scales",e[2].dataType,e[2].dims.length),me=[oe,he,ce],ve=e.length===4?q("zero_points",12,e[3].dims.length):void 0;ve&&me.push(ve);let A=V.length,pe=X("output",e[0].dataType,A,$),ye=ze(e[0].dataType),C=(()=>{switch(w){case 1:return`array<${ye}, 8>`;case 2:return`mat4x2<${ye}>`;case 4:return`mat2x4<${ye}>`;default:throw new Error(`${w}-component is not supported.`)}})(),ie=()=>{let Fe=`
          // reuse a data
            var input_offset = ${oe.indicesToOffset(`${oe.type.indices}(batch, row, word_offset)`)};
            var a_data: ${C};
            for (var j: u32 = 0; j < ${8/w}; j++) {
              a_data[j] = ${oe.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let be=0;be<$*O;be++)Fe+=`
            b_value = ${x===1?`b${be}_data`:`b${be}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${C}(${Array.from({length:4},(ee,Q)=>`${ye}(b_value_lower[${Q}]), ${ye}(b_value_upper[${Q}])`).join(", ")});
            b_dequantized_values = ${w===1?`${C}(${Array.from({length:8},(ee,Q)=>`(b_quantized_values[${Q}] - ${ve?`zero_point${be}`:"zero_point"}) * scale${be}`).join(", ")});`:`(b_quantized_values - ${C}(${Array(8).fill(`${ve?`zero_point${be}`:"zero_point"}`).join(",")})) * scale${be};`};
            workgroup_shared[local_id.x * ${O} + ${Math.floor(be/$)}]${$>1?`[${be%$}]`:""} += ${Array.from({length:8/w},(ee,Q)=>`${w===1?`a_data[${Q}] * b_dequantized_values[${Q}]`:`dot(a_data[${Q}], b_dequantized_values[${Q}])`}`).join(" + ")};
          `;return Fe},Se=()=>{let Fe=`
            var col_index = col * ${$};
            ${ve?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${ye}(8);`}
            `;for(let be=0;be<$*O;be++)Fe+=`
            let scale${be} = ${ce.getByOffset("col_index * nBlocksPerCol + block")};
            ${ve?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${ve.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${be} = ${ye}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return Fe},Ue=()=>{let Fe=`col_index = col * ${$};`;for(let be=0;be<$*O;be++)Fe+=`
            let b${be}_data = ${he.getByIndices(`${he.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Fe+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${C};
            var b_dequantized_values: ${C};`,Fe};return`
        var<workgroup> workgroup_shared: array<${pe.type.value}, ${O*I}>;
        ${Y.declareVariables(...me,pe)}
        ${Y.mainStart([I,1,1])}
          let output_indices = ${pe.offsetToIndices(`(global_idx / ${I}) * ${O}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${I}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/w};
            ${Se()}
            for (var word: u32 = 0; word < ${g}; word += ${x}) {
              ${Ue()}
              for (var i: u32 = 0; i < ${x}; i++) {
                ${ie()}
                word_offset += ${8/w};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${O}) {
            var output_value: ${pe.type.value} = ${pe.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${I}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${O};
            }
            ${pe.setByIndices(`${pe.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${w};${x};${$};${O};${I}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:S,dataType:_}],dispatchGroup:{x:j},programUniforms:D}),getShaderSource:N}},Mx=(e,t)=>{let i=e[0].dims,r=i.length,a=i[r-2],u=t.k,l=t.n,c=i.slice(0,r-2),f=F.size(c),g=e[1].dims[2]/4,_=e[0].dataType,w=Oe(t.k),x=Oe(g),$=c.concat([a,l]),S=128,O=l%8===0?8:l%4===0?4:1,j=S/O,I=j*x*8,D=I/w,P=I/t.blockSize,G=F.size($)/O,V=[],N=[f,a,u/w],Y=F.convertShape(e[1].dims).slice();Y.splice(-1,1,g/x),V.push(...re(N)),V.push(...re(Y)),V.push(...re(e[2].dims)),e.length===4&&V.push(...re(F.convertShape(e[3].dims)));let J=[f,a,l];V.push(...re(J));let oe=he=>{let ce=N.length,me=q("a",e[0].dataType,ce,w),ve=q("b",12,Y.length,x),A=q("scales",e[2].dataType,e[2].dims.length),pe=[me,ve,A],ye=e.length===4?q("zero_points",12,e[3].dims.length):void 0;ye&&pe.push(ye);let C=J.length,ie=X("output",e[0].dataType,C),Se=ze(e[0].dataType),Ue=()=>{switch(w){case 1:return`
          let a_data0 = vec4<${Se}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Se}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Se}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Se}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${w}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${me.type.value}, ${D}>;
        var<workgroup> inter_results: array<array<${ie.type.value}, ${j}>, ${O}>;
        ${he.declareVariables(...pe,ie)}
        ${he.mainStart([j,O,1])}
          let output_indices = ${ie.offsetToIndices(`workgroup_index * ${O}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${P} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${D};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${D}; a_offset += ${S})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${me.getByIndices(`${me.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${me.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${P} + local_id.x;
            ${ye?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${ye.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Se}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${Se}(8);`}
            let scale = ${A.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${ve.getByIndices(`${ve.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/w};
            for (var i: u32 = 0; i < ${x}; i++) {
              ${Ue()}
              let b_value = ${x===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${Se}>(${Array.from({length:4},(Fe,be)=>`${Se}(b_value_lower[${be}]), ${Se}(b_value_upper[${be}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${Se}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Fe,be)=>`${`dot(a_data${be}, b_dequantized_values[${be}])`}`).join(" + ")};
              word_offset += ${8/w};
            }
            workgroupBarrier();
          }

          if (local_idx < ${O}) {
            var output_value: ${ie.type.value} = ${ie.type.value}(0);
            for (var b = 0u; b < ${j}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${ie.setByIndices(`${ie.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${w};${x};${j};${O}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:$,dataType:_}],dispatchGroup:{x:G},programUniforms:V}),getShaderSource:oe}},Ph=(e,t)=>{Dx(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Mx(e.inputs,t)):e.compute(Bx(e.inputs,t))},Oh=e=>_e(e)});var Rx,zx,Ux,Nx,Lx,Vx,Wx,Gx,Bh,Mh=ne(()=>{"use strict";ge();$e();xe();Rx=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},zx=(e,t,i)=>{let r="";for(let a=t-1;a>=0;--a)r+=`
            k = i32(${e.indicesGet("indices",a)}) - ${le("uniforms.pads",a,i)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${le("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${le("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},Ux=(e,t,i)=>{let r="";for(let a=t-1;a>=0;--a)r+=`
                k = i32(${e.indicesGet("indices",a)}) - ${le("uniforms.pads",a,i)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${le("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${le("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${le("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Nx=(e,t,i)=>{let r="";for(let a=t-1;a>=0;--a)r+=`
                k = i32(${e.indicesGet("indices",a)}) - ${le("uniforms.pads",a,i)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${le("uniforms.x_shape",a,t)})) {
                  k = i32(${le("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${le("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Lx=(e,t,i)=>{let r="";for(let a=t-1;a>=0;--a)r+=`
                k = i32(${e.indicesGet("indices",a)}) - ${le("uniforms.pads",a,i)};
                if (k < 0)  {
                  k += i32(${le("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${le("uniforms.x_shape",a,t)})) {
                  k -= i32(${le("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${le("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Vx=(e,t,i)=>{switch(i.mode){case 0:return zx(e,t,i.pads.length);case 1:return Ux(e,t,i.pads.length);case 2:return Nx(e,t,i.pads.length);case 3:return Lx(e,t,i.pads.length);default:throw new Error("Invalid mode")}},Wx=(e,t)=>{let i=F.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,a=F.size(i),u=[{type:12,data:a},{type:6,data:t.pads}],l=e.length>=3&&e[2].data;t.mode===0&&u.push({type:l?e[2].dataType:1,data:t.value}),u.push(...re(e[0].dims,i));let c=["rank"],f=h=>{let g=X("output",e[0].dataType,i.length),_=q("x",e[0].dataType,r.length),w=_.type.value,x=Vx(g,r.length,t),$=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&$.push({name:"constant_value",type:l?w:"f32"}),`
            ${h.registerUniforms($).declareVariables(_,g)}
            ${h.mainStart()}
            ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${g.offsetToIndices("global_idx")};

            var value = ${w}(0);
            ${x}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${l}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(F.size(i)/64)},programUniforms:u}),getShaderSource:f}},Gx=(e,t)=>{if(e.length>1){let i=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,u=new Int32Array(2*a).fill(0);if(e.length>=4){let c=e[3].getBigInt64Array();for(let f=0;f<c.length;f++)u[Number(c[f])]=Number(i[f]),u[Number(c[f])+a]=Number(i[f+c.length])}else i.forEach((c,f)=>u[Number(f)]=Number(c));let l=[];return u.forEach(c=>l.push(c)),{mode:t.mode,value:r,pads:l}}else return t},Bh=(e,t)=>{Rx(e.inputs);let i=Gx(e.inputs,t);e.compute(Wx(e.inputs,i),{inputs:[0]})}});var Gn,Rh,zh,Uh,Nh,Fx,Hx,Lh,Vh,Wh,Gh,Fh,Hh,qh,Kh,Yh,Zh,Qh,Jh,Xh=ne(()=>{"use strict";st();ge();$e();xe();Gn=e=>{if(Re.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Rh=(e,t,i)=>{let r=t.format==="NHWC",a=e.dims.slice();r&&a.splice(1,0,a.pop());let u=Object.hasOwnProperty.call(t,"dilations"),l=t.kernelShape.slice(),c=t.strides.slice(),f=u?t.dilations.slice():[],h=t.pads.slice();Xt.adjustPoolAttributes(i,a,l,c,f,h);let g=Xt.computePoolOutputShape(i,a,c,f,l,h,t.autoPad),_=Object.assign({},t);u?Object.assign(_,{kernelShape:l,strides:c,pads:h,dilations:f,cacheKey:t.cacheKey}):Object.assign(_,{kernelShape:l,strides:c,pads:h,cacheKey:t.cacheKey});let w=g.slice();return w.push(w.splice(1,1)[0]),[_,r?w:g]},zh=(e,t)=>{let i=t.format==="NHWC",r=F.size(e),a=F.size(t.kernelShape),u=[{type:12,data:r},{type:12,data:a}],l=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let c=t.kernelShape[t.kernelShape.length-1],f=t.strides[t.strides.length-1],h=t.pads[t.pads.length/2-1],g=t.pads[t.pads.length-1],_=!!(h+g);u.push({type:12,data:c},{type:12,data:f},{type:12,data:h},{type:12,data:g}),l.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let w=!1;if(t.kernelShape.length===2){let x=t.kernelShape[t.kernelShape.length-2],$=t.strides[t.strides.length-2],S=t.pads[t.pads.length/2-2],O=t.pads[t.pads.length-2];w=!!(S+O),u.push({type:12,data:x},{type:12,data:$},{type:12,data:S},{type:12,data:O}),l.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[u,l,!0,_,w]}else{if(i)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let c=F.computeStrides(t.kernelShape);u.push({type:12,data:c},{type:12,data:t.pads},{type:12,data:t.strides}),l.push({name:"kernelStrides",type:"u32",length:c.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let f=t.pads.reduce((h,g)=>h+g);return[u,l,!!f,!1,!1]}},Uh=(e,t,i,r,a,u,l,c,f,h,g,_)=>{let w=a.format==="NHWC",x=t.type.value,$=X("output",t.type.tensor,r);if(a.kernelShape.length<=2){let S="",O="",j="",I=i-(w?2:1);if(g?S=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${I}] < 0 || xIndices[${I}]
                      >= uniforms.x_shape[${I}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${u}
                }`:S=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${u}
                }`,a.kernelShape.length===2){let P=i-(w?3:2);_?O=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${P}] = indices[${P}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${P}] < 0 || xIndices[${P}] >= uniforms.x_shape[${P}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:O=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${P}] = indices[${P}] * uniforms.sh - uniforms.phStart + j;
                `,j=`
              }
            `}return`
            ${e.registerUniforms(f).declareVariables(t,$)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${$.offsetToIndices("global_idx")};
              var xIndices = ${$.offsetToIndices("global_idx")};

              var value = ${x}(${c});
              var pad = 0;
              ${O}
              ${S}
              ${j}
              ${l}

              output[global_idx] = value;
            }`}else{if(w)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let S=a.kernelShape.length,O=a.pads.length,j="";return h?j=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${u}
              }`:j=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${u}
            `,`
            ${e.registerUniforms(f).declareVariables(t,$)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${$.offsetToIndices("global_idx")};
              var xIndices = ${$.offsetToIndices("global_idx")};

              var offsets: array<u32, ${S}>;

              var value = ${x}(${c});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${S-1}u; j++) {
                  offsets[j] = offset / ${le("uniforms.kernelStrides","j",S)};
                  offset -= offsets[j] * ${le("uniforms.kernelStrides","j",S)};
                }
                offsets[${S-1}] = offset;

                isPad = false;
                for (var j = ${i-S}u; j < ${i}u; j++) {
                  xIndices[j] = indices[j] * ${le("uniforms.strides",`j - ${i-S}u`,S)}
                    + offsets[j - ${i-S}u] - ${le("uniforms.pads","j - 2u",O)};
                  ${j}
              }
              ${l}

              output[global_idx] = value;
            }`}},Nh=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Fx=e=>`${Nh(e)};${e.countIncludePad}`,Hx=e=>`${Nh(e)};${e.storageOrder};${e.dilations}`,Lh=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Vh=(e,t,i,r)=>{let[a,u]=Rh(t,r,i),l=q("x",t.dataType,t.dims.length),c=l.type.value,f="value += x_val;",h="";a.countIncludePad?h+=`value /= ${c}(uniforms.kernelSize);`:h+=`value /= ${c}(i32(uniforms.kernelSize) - pad);`;let[g,_,w,x,$]=zh(u,a);g.push(...re(t.dims,u));let S=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${w};${x};${$}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(F.size(u)/64)},programUniforms:g}),getShaderSource:O=>Uh(O,l,t.dims.length,u.length,a,f,h,0,_,w,x,$)}},Wh=e=>{let t=e.count_include_pad!==0,i=Lh(e);if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...i,cacheKey:""};return{...r,cacheKey:Fx(r)}},Gh=(e,t)=>{Gn(e.inputs),e.compute(Vh("AveragePool",e.inputs[0],!1,t))},Fh={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Hh=e=>{let t=e.format;return{format:t,...Fh,cacheKey:t}},qh=(e,t)=>{Gn(e.inputs),e.compute(Vh("GlobalAveragePool",e.inputs[0],!0,t))},Kh=(e,t,i,r)=>{let[a,u]=Rh(t,r,i),l=`
      value = max(x_val, value);
    `,c="",f=q("x",t.dataType,t.dims.length),h=["rank"],[g,_,w,x,$]=zh(u,a);return g.push(...re(t.dims,u)),{name:e,shaderCache:{hint:`${r.cacheKey};${w};${x};${$}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(F.size(u)/64)},programUniforms:g}),getShaderSource:S=>Uh(S,f,t.dims.length,u.length,a,l,c,t.dataType===10?-65504:-1e5,_,w,x,$)}},Yh=(e,t)=>{Gn(e.inputs),e.compute(Kh("MaxPool",e.inputs[0],!1,t))},Zh=e=>{let t=e.storage_order,i=e.dilations,r=Lh(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:i,...r,cacheKey:""};return{...a,cacheKey:Hx(a)}},Qh=e=>{let t=e.format;return{format:t,...Fh,cacheKey:t}},Jh=(e,t)=>{Gn(e.inputs),e.compute(Kh("GlobalMaxPool",e.inputs[0],!0,t))}});var Kx,Yx,ey,ty,iy=ne(()=>{"use strict";ge();$e();We();xe();Kx=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((i,r)=>i===e[2].dims[r]).reduce((i,r)=>i&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,u)=>u===t.axis||a===e[0].dims[u]).reduce((a,u)=>a&&u,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let i=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(i/r)||t.blockSize>Math.ceil(i/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Yx=(e,t)=>{let i=F.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,a=r===3,u=e[0].dims,l=e[1].dataType,c=F.size(u),f=r===3||r===2,h=f?[Math.ceil(F.size(e[0].dims)/4)]:e[0].dims,g=e[1].dims,_=e.length>2?e[2]:void 0,w=_?f?[Math.ceil(F.size(_.dims)/4)]:_.dims:void 0,x=g.length===0||g.length===1&&g[0]===1,$=x===!1&&g.length===1,S=Oe(c),O=x&&(!f||S===4),j=O?S:1,I=O&&!f?S:1,D=q("input",f?12:r,h.length,I),P=q("scale",l,g.length),G=_?q("zero_point",f?12:r,w.length):void 0,V=X("output",l,u.length,j),N=[D,P];G&&N.push(G);let Y=[h,g];_&&Y.push(w);let J=[{type:12,data:c/j},{type:12,data:i},{type:12,data:t.blockSize},...re(...Y,u)],oe=he=>{let ce=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${he.registerUniforms(ce).declareVariables(...N,V)}
      ${he.mainStart()}
          ${he.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${V.offsetToIndices("global_idx")};

          // Set input x
          ${f?`
            let input = ${D.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${j===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${D.getByOffset("global_idx")};`};

          // Set scale input
          ${x?`let scale_value= ${P.getByOffset("0")}`:$?`
            let scale_index = ${V.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${P.getByOffset("scale_index")};`:`
            var scale_indices: ${P.type.indices} = output_indices;
            let index = ${P.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${P.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${P.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${G?x?f?`
                let zero_point_input = ${G.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${G.getByOffset("0")}`:$?f?`
                let zero_point_index = ${V.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${G.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${V.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${G.getByOffset("zero_point_index")};`:f?`
                let zero_point_offset = ${P.indicesToOffset("scale_indices")};
                let zero_point_input = ${G.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${G.getByIndices("scale_indices")};`:`let zero_point_value = ${f?a?"i32":"u32":D.type.value}(0);`};
      // Compute and write output
      ${V.setByOffset("global_idx",`${V.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:G?["rank","rank","rank"]:["rank","rank"]},getShaderSource:oe,getRunData:()=>({outputs:[{dims:u,dataType:l}],dispatchGroup:{x:Math.ceil(c/j/64),y:1,z:1},programUniforms:J})}},ey=(e,t)=>{Kx(e.inputs,t),e.compute(Yx(e.inputs,t))},ty=e=>_e({axis:e.axis,blockSize:e.blockSize})});var Zx,Qx,ny,ry=ne(()=>{"use strict";st();ge();xe();Zx=(e,t,i)=>{let r=e===t,a=e<t&&i<0,u=e>t&&i>0;if(r||a||u)throw new Error("Range these inputs' contents are invalid.")},Qx=(e,t,i,r)=>{let a=Math.abs(Math.ceil((t-e)/i)),u=[a],l=a,c=[{type:12,data:l},{type:r,data:e},{type:r,data:i},...re(u)],f=h=>{let g=X("output",r,u.length),_=g.type.value,w=[{name:"outputSize",type:"u32"},{name:"start",type:_},{name:"delta",type:_}];return`
        ${h.registerUniforms(w).declareVariables(g)}
        ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${_}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:f,getRunData:()=>({outputs:[{dims:u,dataType:r}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},ny=e=>{let t=0,i=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],i=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],i=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Re.webgpu.validateInputContent&&Zx(t,i,r),e.compute(Qx(t,i,r,e.inputs[0].dataType),{inputs:[]})}});var Jx,Xx,oy,ay,sy=ne(()=>{"use strict";ge();$e();We();xe();Jx=(e,t,i,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,u=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${i};`;case"add":return r==="i32"||r==="u32"?`atomicAdd(&${t}, bitcast<${r}>(${i}));`:`
              ${a}bitcast<${r}>(oldValue) + (${i})${u}`;case"max":return r==="i32"||r==="u32"?`atomicMax(&${t}, bitcast<${r}>(${i}));`:`
                ${a}max(bitcast<f32>(oldValue), (${i}))${u}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${i}));`:`${a}min(bitcast<${r}>(oldValue), (${i}))${u}`;case"mul":return`${a}(bitcast<${r}>(oldValue) * (${i}))${u}`;default:throw new Error(`Reduction ${e} is not supported.`)}},Xx=(e,t)=>{let i=e[0].dims,r=e[1].dims,a=i,u=1,l=Math.ceil(F.sizeToDimension(r,r.length-1)/u),c=r[r.length-1],f=F.sizeFromDimension(i,c),h=[{type:12,data:l},{type:12,data:c},{type:12,data:f},...re(e[1].dims,e[2].dims,a)],g=_=>{let w=q("indices",e[1].dataType,e[1].dims.length),x=q("updates",e[2].dataType,e[2].dims.length,u),$=t.reduction!=="none"&&t.reduction!==""?Pp("output",e[0].dataType,a.length):X("output",e[0].dataType,a.length,u);return`
      ${_.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(w,x,$)}
      ${_.mainStart()}
        ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
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
    ${Jx(t.reduction,"output[data_offset + i]","value",$.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:g}},oy=e=>_e({reduction:e.reduction}),ay=(e,t)=>{e.compute(Xx(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}});var e2,t2,i2,uy,n2,r2,o2,a2,s2,u2,l2,d2,ly,c2,p2,f2,m2,h2,dy,cy,py=ne(()=>{"use strict";ge();$e();We();xe();e2=(e,t)=>{if(e.every(i=>i>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},t2=(e,t,i)=>{t.every(a=>a>=0&&a<i||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(i).fill(1);return t.forEach((a,u)=>r[a]=e[u]),r},i2=(e,t,i,r,a,u)=>{let[l,c,f]=i>10?[1,2,3]:[-1,e.length>1?1:-1,-1],h=e[0].dims.length;if(l>0&&e.length>l&&e[l].dims.length>0)e[l].getFloat32Array().forEach(g=>u.push(g));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(c>0&&e.length>c&&e[c].dims.length===1&&e[c].dims[0]>0){if(e[c].getFloat32Array().forEach(g=>r.push(g)),r.length!==0&&r.length!==h&&i>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");e2(r,t),t.axes.length>0&&t2(r,t.axes,h).forEach((g,_)=>r[_]=g)}if(f>0&&e.length>f&&e[f].dims.length===1&&e[f].dims[0]>0&&(e[f].getBigInt64Array().forEach(g=>a.push(Number(g))),a.length!==0&&a.length!==h&&i>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof a<"u"&&r.length>0&&a.length>h)throw new Error("Resize requires only of scales or sizes to be specified")},uy=(e,t,i,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${i}));
  let fract = ${r}(big % (${i})) / ${r}(${i});
  return whole + fract;
`,n2=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${uy("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${uy("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",r2=(e,t,i)=>`fn getNearestPixelFromOriginal(xOriginal: ${i}, isDownSample: bool) -> ${i} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",o2=(e,t,i)=>{let r=new Array(i).fill(0).concat(new Array(i).fill(1)),a=e.length===0?r:e.slice();return t.length>0?(t.forEach((u,l)=>{r[u]=a[l],r[l+i]=a[t.length+l]}),r):a},a2=(e,t,i,r)=>{let a=[];if(i.length>0)if(r.length>0){if(e.forEach(u=>a.push(u)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((u,l)=>a[u]=i[l])}else i.forEach(u=>a.push(u));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((u,l)=>Math.round(u*t[l]))}return a},s2=(e,t,i)=>{let r=(()=>{switch(i.keepAspectRatioPolicy){case"not_larger":return i.axes.length>0?Math.min(...i.axes.map(u=>t[u]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return i.axes.length>0?Math.max(...i.axes.map(u=>t[u]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${i.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return i.axes.length>0?(i.axes.forEach(u=>t[u]=r),i.axes.forEach(u=>a[u]=Math.round(e[u]*t[u]))):(t.fill(r,0,t.length),a.forEach((u,l)=>a[l]=Math.round(u*t[l]))),a},u2=(e,t,i,r,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${i.length}> {
      var original_indices: array<${e.type.value}, ${i.length}>;
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${le("uniforms.scales","i",r)};
        var roi_low = ${le("uniforms.roi","i",a)};
        var roi_hi = ${le("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${le("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${le("uniforms.output_shape","i",i.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,l2=(e,t,i,r,a,u,l)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${le("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${le("uniforms.roi","i",u)};
          var roi_hi = ${le("uniforms.roi",`i + ${i.length}`,u)};
          var input_shape_i = ${le("uniforms.input_shape","i",i.length)};
          var output_shape_i = ${le("uniforms.output_shape","i",r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${l} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
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
    }`,d2=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${le("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,ly=(e,t,i,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",i,"batch")};
`:"",c2=(e,t,i,r,a)=>{let[l,c,f,h]=i.length===2?[-1,0,1,-1]:[0,2,3,1],g=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${g} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",c,`max(0, min(row, ${i[c]} - 1))`)};
      ${e.indicesSet("input_indices",f,`max(0, min(col, ${i[f]} - 1))`)};
      ${ly(e,h,l,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${g} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${g} = originalIndices[${c}];
      var col:${g} = originalIndices[${f}];
      ${r?`if (row < 0 || row > (${i[c]} - 1) || col < 0 || col > (${i[f]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${i[c]} - 1));
      col = max(0, min(col, ${i[f]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${i.length>2?`u32(originalIndices[${h}])`:"0"};
      var batch: u32 =  ${i.length>2?`u32(originalIndices[${l}])`:"0"};
      var x11: ${g} = getInputValue(batch, channel, row1, col1);
      var x12: ${g} = getInputValue(batch, channel, row1, col2);
      var x21: ${g} = getInputValue(batch, channel, row2, col1);
      var x22: ${g} = getInputValue(batch, channel, row2, col2);
      var dx1: ${g} = abs(row - ${g}(row1));
      var dx2: ${g} = abs(${g}(row2) - row);
      var dy1: ${g} = abs(col - ${g}(col1));
      var dy2: ${g} = abs(${g}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},p2=(e,t,i,r,a,u,l,c,f,h)=>{let g=i.length===2,_=!0,[w,x]=g?[0,1]:_?[2,3]:[1,2],$=e.type.value,S=O=>{let j=O===w?"row":"col";return`
      fn ${j}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${$} {
        var output_index = ${t.indicesGet("output_indices",O)};
        var originalIdx: ${$} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[O]},
        ${r[O]}, ${i[O]}, ${u[O]}, ${u[O]} + ${i.length});
        var fractOriginalIdx: ${$} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${c} && (originalIdx < 0 || originalIdx > (${i[O]} - 1))) {
          return ${f};
        }
        var data: array<${$}, 4> = array<${$}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${j}: ${$} = originalIdx + ${$}(i);
          if (${j} < 0 || ${j} >= ${i[O]}) {
            ${h?`coefs[i + 1] = 0.0;
                        continue;`:c?`return ${f};`:`${j} = max(0, min(${j}, ${i[O]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",O,`u32(${j})`)};
          data[i + 1] = ${O===w?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${S(w)};
    ${S(x)};
  fn getCubicInterpolationCoefs(s: ${$}) -> array<${$}, 4> {
    var absS = abs(s);
    var coeffs: array<${$}, 4> = array<${$}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${$} = 1.0 - absS;
    var twoMinusAbsS: ${$} = 2.0 - absS;
    var onePlusAbsS: ${$} = 1.0 + absS;
    coeffs[0] = ((${l} * onePlusAbsS - 5 * ${l}) * onePlusAbsS + 8 * ${l}) * onePlusAbsS - 4 * ${l};
    coeffs[1] = ((${l} + 2) * absS - (${l} + 3)) * absS * absS + 1;
    coeffs[2] = ((${l} + 2) * oneMinusAbsS - (${l} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${l} * twoMinusAbsS - 5 * ${l}) * twoMinusAbsS + 8 * ${l}) * twoMinusAbsS - 4 * ${l};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${$}, 4>, coefs: array<${$}, 4>) -> ${$} {
    var coefsSum: ${$} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${$} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},f2=(e,t,i,r,a)=>{let[l,c,f,h,g]=i.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],_=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${_} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",c,`max(0, min(depth, ${i[c]} - 1))`)};
      ${e.indicesSet("input_indices",f,`max(0, min(height, ${i[f]} - 1))`)};
      ${e.indicesSet("input_indices",h,`max(0, min(width, ${i[h]} - 1))`)};
      ${ly(e,g,l,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${_} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${_} = originalIndices[${c}];
      var height:${_} = originalIndices[${f}];
      var width:${_} = originalIndices[${h}];
      ${r?`if (depth < 0 || depth > (${i[c]} - 1) || height < 0 || height > (${i[f]} - 1) || width < 0 || (width > ${i[h]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${i[c]} - 1));
      height = max(0, min(height, ${i[f]} - 1));
      width = max(0, min(width, ${i[h]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${i.length>3?`u32(originalIndices[${g}])`:"0"};
      var batch: u32 =  ${i.length>3?`u32(originalIndices[${l}])`:"0"};

      var x111: ${_} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${_} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${_} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${_} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${_} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${_} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${_} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${_} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${_} = abs(depth - ${_}(depth1));
      var dx2: ${_} = abs(${_}(depth2) - depth);
      var dy1: ${_} = abs(height - ${_}(height1));
      var dy2: ${_} = abs(${_}(height2) - height);
      var dz1: ${_} = abs(width - ${_}(width1));
      var dz2: ${_} = abs(${_}(width2) - width);
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
    }`},m2=(e,t,i,r,a,u)=>{let l=e.dims,c=o2(u,t.axes,l.length),f=a2(l,r,a,t.axes),h=r.slice();r.length===0&&(h=l.map((I,D)=>I===0?1:f[D]/I),t.keepAspectRatioPolicy!=="stretch"&&(f=s2(l,h,t)));let g=X("output",e.dataType,f.length),_=q("input",e.dataType,l.length),w=F.size(f),x=l.length===f.length&&l.every((I,D)=>I===f[D]),$=t.coordinateTransformMode==="tf_crop_and_resize",S=t.extrapolationValue,O=_.type.value,j=I=>`
      ${x?"":`
      ${n2(t.coordinateTransformMode,O)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${d2(_,l)};
              ${r2(t.nearestMode,i,O)};
              ${l2(_,g,l,f,h.length,c.length,$)};
              `;case"linear":return`
              ${u2(g,l,f,h.length,c.length)};
              ${(()=>{if(l.length===2||l.length===4)return`${c2(_,g,l,$,S)}`;if(l.length===3||l.length===5)return`${f2(_,g,l,$,S)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(l.length===2||l.length===4)return`${p2(_,g,l,f,h,c,t.cubicCoeffA,$,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${I.registerUniform("output_size","u32").registerUniform("scales","f32",h.length).registerUniform("roi","f32",c.length).declareVariables(_,g)}
      ${I.mainStart()}
        ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${x?"output[global_idx] = input[global_idx];":`
        let output_indices = ${g.offsetToIndices("global_idx")};
        var input_indices: ${_.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${_.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${l.length===2||l.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${i}|${h.length>0?t.mode==="cubic"?h:h.length:""}|${a.length>0?a:""}|${c.length>0?c:""}|${x}|${t.mode==="nearest"?l.length:l}`,inputDependencies:["rank"]},getShaderSource:j,getRunData:()=>({outputs:[{dims:f,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},{type:1,data:h},{type:1,data:c},...re(l,f)]})}},h2=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},dy=(e,t)=>{let i=[],r=[],a=[],u=h2(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");i2(e.inputs,t,u,i,r,a),e.compute(m2(e.inputs[0],t,u,i,r,a),{inputs:[0]})},cy=e=>{let t=e.antialias,i=e.axes,r=e.coordinateTransformMode,a=e.cubicCoeffA,u=e.excludeOutside!==0,l=e.extrapolationValue,c=e.keepAspectRatioPolicy,f=e.mode,h=e.nearestMode===""?"simple":e.nearestMode;return _e({antialias:t,axes:i,coordinateTransformMode:r,cubicCoeffA:a,excludeOutside:u,extrapolationValue:l,keepAspectRatioPolicy:c,mode:f,nearestMode:h})}});var y2,g2,fy,my=ne(()=>{"use strict";ge();$e();xe();y2=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],i=e[1],r=e[2];if(t.dataType!==i.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(i.dims.length!==3&&i.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],u=t.dims[t.dims.length-2];if(i.dims[i.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(i.dims[i.dims.length-2]!==u)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let l=e[3];if(l.dims.length!==1)throw new Error("Beta must be 1D");if(l.dims[l.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let l=e[4];if(l.dims.length!==1)throw new Error("Bias must be 1D");if(l.dims[l.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},g2=(e,t,i,r)=>{let a=t.simplified,u=e[0].dims,l=F.size(u),c=u,f=l,h=u.slice(-1)[0],g=r?u.slice(0,-1).concat(1):[],_=!a&&e.length>3,w=e.length>4,x=r&&i>1,$=r&&i>2,S=i>3,O=64,j=Oe(h),I=[{type:12,data:f},{type:12,data:j},{type:12,data:h},{type:1,data:t.epsilon}],D=G=>{let V=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],N=[q("x",e[0].dataType,e[0].dims,j),q("skip",e[1].dataType,e[1].dims,j),q("gamma",e[2].dataType,e[2].dims,j)];_&&N.push(q("beta",e[3].dataType,e[3].dims,j)),w&&N.push(q("bias",e[4].dataType,e[4].dims,j)),N.push(X("output",e[0].dataType,c,j)),x&&N.push(X("mean_output",1,g)),$&&N.push(X("inv_std_output",1,g)),S&&N.push(X("input_skip_bias_sum",e[0].dataType,c,j));let Y=ze(e[0].dataType),J=ze(1,j);return`

      ${G.registerUniforms(V).declareVariables(...N)}
      var<workgroup> sum_shared : array<${J}, ${O}>;
      var<workgroup> sum_squared_shared : array<${J}, ${O}>;

      ${G.mainStart([O,1,1])}
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
          let bias_value = ${w?"bias[offset1d + i]":Y+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${S?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${ti(Y,j,"value")};
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
        let mean = ${ht("sum",j)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${ht("square_sum",j)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${x?"mean_output[global_idx] = mean;":""}
        ${$?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${Y}(mean)`}) *
            ${Y}(inv_std_dev) * gamma[offset1d + i]
            ${_?"+ beta[offset1d + i]":""};
        }
      }`},P=[{dims:c,dataType:e[0].dataType}];return i>1&&P.push({dims:g,dataType:1}),i>2&&P.push({dims:g,dataType:1}),i>3&&P.push({dims:u,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${j};${x};${$};${S}`,inputDependencies:e.map((G,V)=>"type")},getShaderSource:D,getRunData:()=>({outputs:P,dispatchGroup:{x:Math.ceil(f/h)},programUniforms:I})}},fy=(e,t)=>{y2(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(g2(e.inputs,t,e.outputCount,!1),{outputs:r})}});var _2,Fn,b2,hy,v2,w2,yy,gy,_y=ne(()=>{"use strict";ge();$e();We();xe();_2=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((i,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},Fn=(e,t)=>{let i=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>i.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>i.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return i},b2=(e,t)=>{if(e.length>1){let i=Fn(e,1),r=Fn(e,2),a=Fn(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),_e({starts:i,ends:r,axes:a})}else return t},hy=(e,t,i,r,a)=>{let u=e;return e<0&&(u+=i[r[t]]),a[t]<0?Math.max(0,Math.min(u,i[r[t]]-1)):Math.max(0,Math.min(u,i[r[t]]))},v2=(e,t,i)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${i.length-1}; i >= 0; i--) {
            let input_shape_i = ${le("uniforms.input_shape","i",i.length)};
            let steps_i = ${le("uniforms.steps","i",i.length)};
            let signs_i = ${le("uniforms.signs","i",i.length)};
            let starts_i = ${le("uniforms.starts","i",i.length)};
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
      }`,w2=(e,t)=>{let i=e[0].dims,r=F.size(i),a=t.axes.length>0?F.normalizeAxes(t.axes,i.length):[...Array(i.length).keys()],u=Fn(e,4);u.forEach(j=>j!==0||(()=>{throw new Error("step cannot be 0")})),u.length===0&&(u=Array(a.length).fill(1));let l=t.starts.map((j,I)=>hy(j,I,i,a,u)),c=t.ends.map((j,I)=>hy(j,I,i,a,u));if(a.length!==l.length||a.length!==c.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==i.length)for(let j=0;j<i.length;++j)a.includes(j)||(l.splice(j,0,0),c.splice(j,0,i[j]),u.splice(j,0,1));let f=u.map(j=>Math.sign(j));u.forEach((j,I,D)=>{if(j<0){let P=(c[I]-l[I])/j,G=l[I],V=G+P*u[I];l[I]=V,c[I]=G,D[I]=-j}});let h=i.slice(0);a.forEach((j,I)=>{h[j]=Math.ceil((c[j]-l[j])/u[j])});let g={dims:h,dataType:e[0].dataType},_=X("output",e[0].dataType,h.length),w=q("input",e[0].dataType,e[0].dims.length),x=F.size(h),$=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:l.length},{name:"signs",type:"i32",length:f.length},{name:"steps",type:"u32",length:u.length}],S=[{type:12,data:x},{type:12,data:l},{type:6,data:f},{type:12,data:u},...re(e[0].dims,h)],O=j=>`
      ${j.registerUniforms($).declareVariables(w,_)}
        ${v2(w,_,i)}
        ${j.mainStart()}
          ${j.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${_.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${_.setByOffset("global_idx",w.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${f.length}_${l.length}_${u.length}`,inputDependencies:["rank"]},getShaderSource:O,getRunData:()=>({outputs:[g],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:S})}},yy=(e,t)=>{_2(e.inputs,t);let i=b2(e.inputs,t);e.compute(w2(e.inputs,i),{inputs:[0]})},gy=e=>{let t=e.starts,i=e.ends,r=e.axes;return _e({starts:t,ends:i,axes:r})}});var $2,C2,by,vy,wy=ne(()=>{"use strict";ge();$e();We();Dt();xe();$2=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},C2=(e,t)=>{let i=e.inputs[0],r=i.dims,a=F.size(r),u=r.length,l=F.normalizeAxis(t.axis,u),c=l<r.length-1,f,h=[];c?(h=Array.from({length:u},(N,Y)=>Y),h[l]=u-1,h[u-1]=l,f=e.compute(Qe(i,h),{inputs:[i],outputs:[-1]})[0]):f=i;let g=f.dims,_=g[u-1],w=a/_,x=Oe(_),$=_/x,S=64;w===1&&(S=256);let O=(N,Y)=>Y===4?`max(max(${N}.x, ${N}.y), max(${N}.z, ${N}.w))`:Y===2?`max(${N}.x, ${N}.y)`:Y===3?`max(max(${N}.x, ${N}.y), ${N}.z)`:N,j=q("x",f.dataType,f.dims,x),I=X("result",f.dataType,f.dims,x),D=j.type.value,P=ze(f.dataType)==="f32"?`var threadMax = ${D}(-3.402823e+38f);`:`var threadMax = ${D}(-65504.0h);`,G=N=>`
      var<workgroup> rowMaxShared : ${D};
      var<workgroup> rowSumShared : ${D};
      var<workgroup> threadShared : array<${D}, ${S}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${D} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${D}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${N.registerUniform("packedCols","i32").declareVariables(j,I)}
      ${N.mainStart(S)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${S};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${P}
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
          rowMaxShared = ${D}(${O("threadShared[0]",x)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${D}(0.0);
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
          rowSumShared = ${D}(${ht("threadShared[0]",x)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${D}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,V=e.compute({name:"Softmax",shaderCache:{hint:`${x};${S}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:g,dataType:f.dataType}],dispatchGroup:{x:w},programUniforms:[{type:6,data:$}]}),getShaderSource:G},{inputs:[f],outputs:[c?-1:0]})[0];c&&e.compute(Qe(V,h),{inputs:[V]})},by=(e,t)=>{$2(e.inputs),C2(e,t)},vy=e=>_e({axis:e.axis})});var $y,x2,S2,T2,Cy,xy=ne(()=>{"use strict";ge();$e();xe();$y=e=>Array.from(e.getBigInt64Array(),Number),x2=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if($y(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},S2=(e,t)=>{let i=[];for(let r=0;r<e.length;++r)i.push(e[r]*t[r]);return i},T2=(e,t)=>{let i=e[0].dims,r=t??$y(e[1]),a=S2(i,r),u=F.size(a),l=e[0].dataType,c=q("input",l,i.length),f=X("output",l,a.length),h=g=>`
      const inputShape = ${c.indices(...i)};
      ${g.registerUniform("output_size","u32").declareVariables(c,f)}
      ${g.mainStart()}
      ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${f.offsetToIndices("global_idx")};
      var input_indices: ${c.type.indices};
      for (var i = 0; i < ${i.length}; i++) {
        let input_dim_i = ${c.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${f.indicesGet("output_indices","i")}  % input_dim_i;

        ${c.indicesSet("input_indices","i","input_dim_value")}
      }
      ${f.setByOffset("global_idx",c.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:[{type:12,data:u},...re(e[0].dims,a)]}),getShaderSource:h}},Cy=e=>{x2(e.inputs),e.compute(T2(e.inputs),{inputs:[0]})}});var I2,A2,Sy,Ty=ne(()=>{"use strict";ge();$e();xe();I2=(e,t,i,r,a)=>{let u=X("output_data",a,i.length,4),l=q("a_data",t[1].dataType,t[1].dims.length,4),c=q("b_data",t[2].dataType,t[2].dims.length,4),f=q("c_data",t[0].dataType,t[0].dims.length,4),h,g=(_,w,x)=>`select(${w}, ${_}, ${x})`;if(!r)h=u.setByOffset("global_idx",g(l.getByOffset("global_idx"),c.getByOffset("global_idx"),f.getByOffset("global_idx")));else{let _=(w,x,$="")=>{let S=`a_data[index_a${x}][component_a${x}]`,O=`b_data[index_b${x}][component_b${x}]`,j=`bool(c_data[index_c${x}] & (0xffu << (component_c${x} * 8)))`;return`
            let output_indices${x} = ${u.offsetToIndices(`global_idx * 4u + ${x}u`)};
            let offset_a${x} = ${l.broadcastedIndicesToOffset(`output_indices${x}`,u)};
            let offset_b${x} = ${c.broadcastedIndicesToOffset(`output_indices${x}`,u)};
            let offset_c${x} = ${f.broadcastedIndicesToOffset(`output_indices${x}`,u)};
            let index_a${x} = offset_a${x} / 4u;
            let index_b${x} = offset_b${x} / 4u;
            let index_c${x} = offset_c${x} / 4u;
            let component_a${x} = offset_a${x} % 4u;
            let component_b${x} = offset_b${x} % 4u;
            let component_c${x} = offset_c${x} % 4u;
            ${w}[${x}] = ${$}(${g(S,O,j)});
          `};a===9?h=`
            var data = vec4<u32>(0);
            ${_("data",0,"u32")}
            ${_("data",1,"u32")}
            ${_("data",2,"u32")}
            ${_("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:h=`
            ${_("output_data[global_idx]",0)}
            ${_("output_data[global_idx]",1)}
            ${_("output_data[global_idx]",2)}
            ${_("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(f,l,c,u)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${h}
      }`},A2=e=>{let t=e[1].dims,i=e[2].dims,r=e[0].dims,a=e[1].dataType,u=!(F.areEqual(t,i)&&F.areEqual(i,r)),l=t,c=F.size(t);if(u){let h=Tt.calcShape(Tt.calcShape(t,i,!1),r,!1);if(!h)throw new Error("Can't perform where op on the given tensors");l=h,c=F.size(l)}let f=Math.ceil(c/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:h=>I2(h,e,l,u,a),getRunData:()=>({outputs:[{dims:l,dataType:a}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:f},...re(r,t,i,l)]})}},Sy=e=>{e.compute(A2(e.inputs))}});var Iy,Ay=ne(()=>{"use strict";uf();On();cf();ff();Jf();lm();pm();Am();Bm();zm();Lm();Hm();Ym();Qm();eh();nh();ah();lh();ph();hh();xh();Ih();kh();Eh();Dh();ao();Mh();Xh();iy();ry();sy();En();py();lo();my();_y();wy();uo();xy();Dt();Bn();Ty();Iy=new Map([["Abs",[mf]],["Acos",[hf]],["Acosh",[yf]],["Add",[Xf]],["ArgMax",[sf,qr]],["ArgMin",[af,qr]],["Asin",[gf]],["Asinh",[_f]],["Atan",[bf]],["Atanh",[vf]],["Attention",[lf]],["AveragePool",[Gh,Wh]],["BatchNormalization",[df]],["BiasAdd",[pf]],["BiasSplitGelu",[Qf]],["Cast",[$f,wf]],["Ceil",[xf]],["Clip",[Cf]],["Concat",[dm,cm]],["Conv",[io,to]],["ConvTranspose",[Dm,Pm]],["Cos",[Sf]],["Cosh",[Tf]],["CumSum",[Mm,Rm]],["DepthToSpace",[Um,Nm]],["DequantizeLinear",[ey,ty]],["Div",[em]],["Einsum",[Gm,Fm]],["Elu",[If,Mi]],["Equal",[tm]],["Erf",[Af]],["Exp",[kf]],["Expand",[Km]],["FastGelu",[Zm]],["Floor",[jf]],["FusedConv",[io,to]],["Gather",[Xm,Jm]],["GatherElements",[uh,sh]],["GatherBlockQuantized",[rh,oh]],["GatherND",[th,ih]],["Gelu",[Ef]],["Gemm",[ch,dh]],["GlobalAveragePool",[qh,Hh]],["GlobalMaxPool",[Jh,Qh]],["Greater",[om]],["GreaterOrEqual",[sm]],["GridSample",[fh,mh]],["GroupQueryAttention",[Ch]],["HardSigmoid",[Uf,zf]],["InstanceNormalization",[Th]],["LayerNormalization",[Ah]],["LeakyRelu",[Pf,Mi]],["Less",[am]],["LessOrEqual",[um]],["Log",[Kf]],["MatMul",[jh]],["MatMulNBits",[Ph,Oh]],["MaxPool",[Yh,Zh]],["Mul",[im]],["MultiHeadAttention",[_h,gh]],["Neg",[Df]],["Not",[Of]],["Pad",[Bh]],["Pow",[nm]],["QuickGelu",[Yf,Mi]],["Range",[ny]],["Reciprocal",[Bf]],["ReduceMin",[Xp]],["ReduceMean",[Kp]],["ReduceMax",[Jp]],["ReduceSum",[tf]],["ReduceProd",[ef]],["ReduceL1",[Yp]],["ReduceL2",[Zp]],["ReduceLogSum",[rf]],["ReduceLogSumExp",[Qp]],["ReduceSumSquare",[nf]],["Relu",[Mf]],["Resize",[dy,cy]],["RotaryEmbedding",[wh]],["ScatterND",[ay,oy]],["Sigmoid",[Rf]],["Sin",[Nf]],["Sinh",[Lf]],["Slice",[yy,gy]],["SkipLayerNormalization",[fy]],["Split",[bh,vh]],["Sqrt",[Vf]],["Softmax",[by,vy]],["Sub",[rm]],["Tan",[Wf]],["Tanh",[Ff]],["ThresholdedRelu",[qf,Mi]],["Tile",[Cy]],["Transpose",[Bp,Mp]],["Where",[Sy]]])});var Hn,ky=ne(()=>{"use strict";st();St();xe();Hn=class{constructor(t){this.backend=t;this.repo=new Map,this.attributesBound=!1}getArtifact(t){return this.repo.get(t)}setArtifact(t,i){this.repo.set(t,i)}run(t,i,r,a,u){at(t.programInfo.name);let l=this.backend.device,c=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let f=[];for(let g of i)f.push({binding:f.length,resource:{buffer:g.buffer}});for(let g of r)f.push({binding:f.length,resource:{buffer:g.buffer}});u&&f.push({binding:f.length,resource:u});let h=l.createBindGroup({layout:t.computePipeline.getBindGroupLayout(0),entries:f,label:t.programInfo.name});if(this.backend.sessionStatus==="capturing"){let g={kernelId:this.backend.currentKernelId,computePipeline:t.computePipeline,bindGroup:h,dispatchGroup:a};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(g)}c.setPipeline(t.computePipeline),c.setBindGroup(0,h),c.dispatchWorkgroups(...a),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),nt(t.programInfo.name)}dispose(){}build(t,i){at(t.name);let r=this.backend.device,a=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(_=>{r.features.has(_.feature)&&a.push(`enable ${_.extension};`)});let l=Op(i,this.backend.device.limits),c=t.getShaderSource(l),f=`${a.join(`
`)}
${l.additionalImplementations}
${c}`,h=r.createShaderModule({code:f,label:t.name});Te("verbose",()=>`[WebGPU] ${t.name} shader code: ${f}`);let g=r.createComputePipeline({compute:{module:h,entryPoint:"main"},layout:"auto",label:t.name});return nt(t.name),{programInfo:t,computePipeline:g,uniformVariablesInfo:l.variablesInfo}}normalizeDispatchGroupSize(t){let i=typeof t=="number"?t:t.x,r=typeof t=="number"?1:t.y||1,a=typeof t=="number"?1:t.z||1,u=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(i<=u&&r<=u&&a<=u)return[i,r,a];let l=i*r*a,c=Math.ceil(Math.sqrt(l));if(c>u){if(c=Math.ceil(Math.cbrt(l)),c>u)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[c,c,c]}else return[c,c,1]}}});var jy={};li(jy,{WebGpuBackend:()=>po});var k2,j2,co,po,Ey=ne(()=>{"use strict";st();ge();St();Br();Ep();Ay();ky();k2=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let i=[];for(let r=0;r<e.length;++r){let a=e[r].dataType;switch(t[r]){case"none":{i.push("");break}case"type":{i.push(`${a}`);break}case"rank":{let u=e[r].dims.length;i.push(`${a};${u}`);break}case"dims":{let u=e[r].dims.join(",");i.push(`${a};${u}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return i.join("|")},j2=(e,t,i)=>{let r=e.name;return e.shaderCache?.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+i+`:${k2(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,r},co=class{constructor(t){t&&(this.architecture=t.architecture,this.vendor=t.vendor)}isArchitecture(t){return this.architecture===t}isVendor(t){return this.vendor===t}},po=class{constructor(){this.currentSessionId=null;this.currentKernelId=null;this.commandEncoder=null;this.computePassEncoder=null;this.maxDispatchNumber=16;this.pendingDispatchNumber=0;this.pendingKernels=[];this.pendingQueries=new Map;this.sessionStatus="default";this.capturedCommandList=new Map;this.capturedPendingKernels=new Map;this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let t=this.kernelCustomData.get(this.currentKernelId);return t||(t={},this.kernelCustomData.set(this.currentKernelId,t)),t}async initialize(t,i){this.env=t;let r=[],a={requiredLimits:{maxComputeWorkgroupStorageSize:i.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:i.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:i.limits.maxStorageBufferBindingSize,maxBufferSize:i.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:i.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:i.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:i.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:i.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},u=l=>i.features.has(l)&&r.push(l)&&!0;u("chromium-experimental-timestamp-query-inside-passes")||u("timestamp-query"),u("shader-f16"),u("subgroups"),this.device=await i.requestDevice(a),this.adapterInfo=new co(i.info||await i.requestAdapterInfo()),this.gpuDataManager=jp(this),this.programManager=new Hn(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,wn(t.logLevel,!!t.debug),this.device.onuncapturederror=l=>{l.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${l.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:i,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let t=this.getCommandEncoder(),i={};this.queryType==="at-passes"&&(i.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=t.beginComputePass(i)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;at(),this.endComputePass();let t;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),t=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(t,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,t,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&t.mapAsync(GPUMapMode.READ).then(()=>{let i=new BigUint64Array(t.getMappedRange()),r=this.pendingQueries.get(t);for(let a=0;a<i.length/2;a++){let u=r[a],l=u.kernelId,c=this.kernels.get(l),f=c.kernelType,h=c.kernelName,g=u.programName,_=u.inputTensorViews,w=u.outputTensorViews,x=i[a*2],$=i[a*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=x);let S=Number(x-this.queryTimeBase),O=Number($-this.queryTimeBase);if(!Number.isSafeInteger(S)||!Number.isSafeInteger(O))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:_.map(j=>({dims:j.dims,dataType:xt(j.dataType)})),outputsMetadata:w.map(j=>({dims:j.dims,dataType:xt(j.dataType)})),kernelId:l,kernelType:f,kernelName:h,programName:g,startTime:S,endTime:O});else{let j="";_.forEach((D,P)=>{j+=`input[${P}]: [${D.dims}] | ${xt(D.dataType)}, `});let I="";w.forEach((D,P)=>{I+=`output[${P}]: [${D.dims}] | ${xt(D.dataType)}, `}),console.log(`[profiling] kernel "${l}|${f}|${h}|${g}" ${j}${I}start time: ${S} ns, execution time: ${O-S} ns`)}rn("GPU",`${g}::${x}::${$}`)}t.unmap(),this.pendingQueries.delete(t)}),nt()}run(t,i,r,a,u,l){at(t.name);let c=[];for(let D=0;D<i.length;++D){let P=i[D].data;if(P===0)continue;let G=this.gpuDataManager.get(P);if(!G)throw new Error(`no GPU data for input: ${P}`);c.push(G)}let{outputs:f,dispatchGroup:h,programUniforms:g}=t.getRunData(i),_=r.length===0?f.map((D,P)=>P):r;if(_.length!==f.length)throw new Error(`Output size ${_.length} must be equal to ${f.length}.`);let w=[],x=[];for(let D=0;D<f.length;++D){if(!Number.isInteger(_[D])||_[D]<-3||_[D]>=l)throw new Error(`Invalid output index: ${_[D]}`);if(_[D]===-3)continue;let P=_[D]===-1,G=_[D]===-2,V=P||G?u(f[D].dataType,f[D].dims):a(_[D],f[D].dataType,f[D].dims);if(w.push(V),V.data===0)continue;let N=this.gpuDataManager.get(V.data);if(!N)throw new Error(`no GPU data for output: ${V.data}`);if(P&&this.temporaryData.push(N),G){let Y=this.kernelPersistentData.get(this.currentKernelId);Y||(Y=[],this.kernelPersistentData.set(this.currentKernelId,Y)),Y.push(N)}x.push(N)}if(c.length!==i.length||x.length!==w.length){if(x.length===0)return nt(t.name),w;throw new Error(`Program ${t.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let $;if(g){let D=0,P=[];g.forEach(Y=>{let J=typeof Y.data=="number"?[Y.data]:Y.data;if(J.length===0)return;let oe=Y.type===10?2:4,he,ce;Y.type===10?(ce=J.length>4?16:J.length>2?8:J.length*oe,he=J.length>4?16:oe*J.length):(ce=J.length<=2?J.length*oe:16,he=16),D=Math.ceil(D/ce)*ce,P.push(D);let me=Y.type===10?8:4;D+=J.length>4?Math.ceil(J.length/me)*he:J.length*oe});let G=16;D=Math.ceil(D/G)*G;let V=new ArrayBuffer(D);g.forEach((Y,J)=>{let oe=P[J],he=typeof Y.data=="number"?[Y.data]:Y.data;if(Y.type===6)new Int32Array(V,oe,he.length).set(he);else if(Y.type===12)new Uint32Array(V,oe,he.length).set(he);else if(Y.type===10)new Uint16Array(V,oe,he.length).set(he);else if(Y.type===1)new Float32Array(V,oe,he.length).set(he);else throw new Error(`Unsupported uniform type: ${xt(Y.type)}`)});let N=this.gpuDataManager.create(D,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(N.buffer,0,V,0,D),this.gpuDataManager.release(N.id),$={offset:0,size:D,buffer:N.buffer}}let S=this.programManager.normalizeDispatchGroupSize(h),O=S[1]===1&&S[2]===1,j=j2(t,i,O),I=this.programManager.getArtifact(j);if(I||(I=this.programManager.build(t,S),this.programManager.setArtifact(j,I),Te("info",()=>`[artifact] key: ${j}, programName: ${t.name}`)),g&&I.uniformVariablesInfo){if(g.length!==I.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${I.uniformVariablesInfo.length}, got ${g.length} in program "${I.programInfo.name}".`);for(let D=0;D<g.length;D++){let P=g[D],G=P.type,V=typeof P.data=="number"?1:P.data.length,[N,Y]=I.uniformVariablesInfo[D];if(G!==N||V!==Y)throw new Error(`Uniform variable ${D} mismatch: expect type ${N} with size ${Y}, got type ${G} with size ${V} in program "${I.programInfo.name}".`)}}if(Te("info",()=>`[ProgramManager] run "${t.name}" (key=${j}) with ${S[0]}x${S[1]}x${S[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let D={kernelId:this.currentKernelId,programName:I.programInfo.name,inputTensorViews:i,outputTensorViews:w};this.pendingKernels.push(D),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(D)}return this.programManager.run(I,c,x,S,$),nt(t.name),w}upload(t,i){this.gpuDataManager.upload(t,i)}memcpy(t,i){this.gpuDataManager.memcpy(t,i)}async download(t,i){await this.gpuDataManager.download(t,i)}alloc(t){return this.gpuDataManager.create(t).id}free(t){return this.gpuDataManager.release(t)}createKernel(t,i,r,a){let u=Iy.get(t);if(!u)throw new Error(`kernel not implemented: ${t}`);let l={kernelType:t,kernelName:a,kernelEntry:u[0],attributes:[u[1],r]};this.kernels.set(i,l)}releaseKernel(t){let i=this.kernelPersistentData.get(t);if(i){for(let r of i)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(t)}this.kernelCustomData.delete(t),this.kernels.delete(t)}computeKernel(t,i,r){let a=this.kernels.get(t);if(!a)throw new Error(`kernel not created: ${t}`);let u=a.kernelType,l=a.kernelName,c=a.kernelEntry,f=a.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${u}] ${l}" is not allowed to be called recursively`);this.currentKernelId=t,f[0]&&(f[1]=f[0](f[1]),f[0]=void 0),Te("info",()=>`[WebGPU] Start to run kernel "[${u}] ${l}"...`);let h=this.env.debug;this.temporaryData=[];try{return h&&this.device.pushErrorScope("validation"),c(i,f[1]),0}catch(g){return r.push(Promise.resolve(`[WebGPU] Kernel "[${u}] ${l}" failed. ${g}`)),1}finally{h&&r.push(this.device.popErrorScope().then(g=>g?`GPU validation error for kernel "[${u}] ${l}": ${g.message}`:null));for(let g of this.temporaryData)this.gpuDataManager.release(g.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(t,i,r,a){let u=this.sessionExternalDataMapping.get(t);u||(u=new Map,this.sessionExternalDataMapping.set(t,u));let l=u.get(i),c=this.gpuDataManager.registerExternalBuffer(r,a,l);return u.set(i,[c,r]),c}unregisterBuffers(t){let i=this.sessionExternalDataMapping.get(t);i&&(i.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(t))}getBuffer(t){let i=this.gpuDataManager.get(t);if(!i)throw new Error(`no GPU data for buffer: ${t}`);return i.buffer}createDownloader(t,i,r){return async()=>{let a=await Lr(this,t,i);return Cn(a.buffer,r)}}writeTimestamp(t){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,t)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Te("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Te("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Te("info","replay"),this.sessionStatus="replaying";let t=this.capturedCommandList.get(this.currentSessionId),i=this.capturedPendingKernels.get(this.currentSessionId),r=t.length;this.pendingKernels=[];for(let a=0;a<r;a++){let u=this.getComputePassEncoder(),l=t[a];this.writeTimestamp(this.pendingDispatchNumber*2),u.setPipeline(l.computePipeline),u.setBindGroup(0,l.bindGroup),u.dispatchWorkgroups(...l.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(i[a]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(t){this.unregisterBuffers(t),this.capturedCommandList.has(t)&&this.capturedCommandList.delete(t),this.capturedPendingKernels.has(t)&&this.capturedPendingKernels.delete(t),this.gpuDataManager.onReleaseSession(t)}onRunStart(t){this.currentSessionId=t,this.setQueryType()}}});var Py={};li(Py,{init:()=>E2});var Ni,fo,E2,Oy=ne(()=>{"use strict";ge();St();$e();Tp();Ni=class e{constructor(t,i,r,a){this.module=t;this.dataType=i;this.data=r;this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=F.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(F.size(t)!==F.size(this.dims))throw new Error("Invalid new shape");return new e(this.module,this.dataType,this.data,t)}},fo=class{constructor(t,i,r){this.module=t;this.backend=i;this.customDataOffset=0;this.customDataSize=0;this.adapterInfo=i.adapterInfo;let a=t.PTR_SIZE,u=r/t.PTR_SIZE,l=a===4?"i32":"i64";this.opKernelContext=Number(t.getValue(a*u++,l));let c=Number(t.getValue(a*u++,l));this.outputCount=Number(t.getValue(a*u++,l)),this.customDataOffset=Number(t.getValue(a*u++,"*")),this.customDataSize=Number(t.getValue(a*u++,l));let f=[];for(let h=0;h<c;h++){let g=Number(t.getValue(a*u++,l)),_=Number(t.getValue(a*u++,"*")),w=Number(t.getValue(a*u++,l)),x=[];for(let $=0;$<w;$++)x.push(Number(t.getValue(a*u++,l)));f.push(new Ni(t,g,_,x))}this.inputs=f}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(t,i){let r=i?.inputs?.map(c=>typeof c=="number"?this.inputs[c]:c)??this.inputs,a=i?.outputs??[],u=(c,f,h)=>new Ni(this.module,f,this.output(c,h),h),l=(c,f)=>{let h=Wt(c,f);if(!h)throw new Error(`Unsupported data type: ${c}`);let g=h>0?this.backend.gpuDataManager.create(h).id:0;return new Ni(this.module,c,g,f)};return this.backend.run(t,r,a,u,l,this.outputCount)}output(t,i){let r=this.module.stackSave();try{let a=this.module.PTR_SIZE,u=a===4?"i32":"i64",l=this.module.stackAlloc((1+i.length)*a);this.module.setValue(l,i.length,u);for(let c=0;c<i.length;c++)this.module.setValue(l+a*(c+1),i[c],u);return this.module._JsepOutput(this.opKernelContext,t,l)}catch(a){throw new Error(`Failed to generate kernel's output[${t}] with dims [${i}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${a}`)}finally{this.module.stackRestore(r)}}},E2=async(e,t,i,r)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let u=(Ey(),ji(jy)).WebGpuBackend,l=new u;await l.initialize(i,r),a("webgpu",[l,c=>l.alloc(Number(c)),c=>l.free(c),(c,f,h,g=!1)=>{if(g)Te("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(c)}, dst=${Number(f)}, size=${Number(h)}`),l.memcpy(Number(c),Number(f));else{Te("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(c)}, gpuDataId=${Number(f)}, size=${Number(h)}`);let _=t.HEAPU8.subarray(Number(c>>>0),Number(c>>>0)+Number(h));l.upload(Number(f),_)}},async(c,f,h)=>{Te("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${c}, dataOffset=${f}, size=${h}`),await l.download(Number(c),()=>t.HEAPU8.subarray(Number(f)>>>0,Number(f+h)>>>0))},(c,f,h)=>l.createKernel(c,Number(f),h,t.UTF8ToString(t._JsepGetNodeName(Number(f)))),c=>l.releaseKernel(c),(c,f,h,g)=>{Te("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${h}, kernel=${c}, contextDataOffset=${f}`);let _=new fo(t,l,Number(f));return l.computeKernel(Number(c),_,g)},()=>l.captureBegin(),()=>l.captureEnd(),()=>l.replay()])}else{let u=new In(i);a("webnn",[u,()=>u.reserveTensorId(),l=>u.releaseTensorId(l),async(l,c,f,h,g)=>u.ensureTensor(l,c,f,h,g),(l,c)=>{u.uploadTensor(l,c)},async(l,c)=>u.downloadTensor(l,c),(l,c)=>u.registerMLContext(l,c),!!i.trace])}}});var P2,ln,dn,ii,O2,Dy,Pi,cn,pn,By,fn,mn,hn,Ir=ne(()=>{"use strict";st();fp();hp();ge();Lt();gn();Or();P2=(e,t)=>{Me()._OrtInit(e,t)!==0&&Pe("Can't initialize onnxruntime.")},ln=async e=>{P2(e.wasm.numThreads,Di(e.logLevel))},dn=async(e,t)=>{Me().asyncInit?.();let i=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(i){if(typeof i.limits!="object"||typeof i.features!="object"||typeof i.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let r=e.webgpu.powerPreference;if(r!==void 0&&r!=="low-power"&&r!=="high-performance")throw new Error(`Invalid powerPreference setting: "${r}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(i=await navigator.gpu.requestAdapter({powerPreference:r,forceFallbackAdapter:a}),!i)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let r=(Oy(),ji(Py)).init;t==="webgpu"&&await r("webgpu",Me(),e,i),t==="webnn"&&await r("webnn",Me(),e)}},ii=new Map,O2=e=>{let t=Me(),i=t.stackSave();try{let r=t.PTR_SIZE,a=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,a,a+r)!==0&&Pe("Can't get session input/output count.");let l=r===4?"i32":"i64";return[Number(t.getValue(a,l)),Number(t.getValue(a+r,l))]}finally{t.stackRestore(i)}},Dy=(e,t)=>{let i=Me(),r=i.stackSave(),a=0;try{let u=i.PTR_SIZE,l=i.stackAlloc(2*u);i._OrtGetInputOutputMetadata(e,t,l,l+u)!==0&&Pe("Can't get session input/output metadata.");let f=Number(i.getValue(l,"*"));a=Number(i.getValue(l+u,"*"));let h=i.HEAP32[a/4];if(h===0)return[f,0];let g=i.HEAPU32[a/4+1],_=[];for(let w=0;w<g;w++){let x=Number(i.getValue(a+8+w*u,"*"));_.push(x!==0?i.UTF8ToString(x):Number(i.getValue(a+8+(w+g)*u,"*")))}return[f,h,_]}finally{i.stackRestore(r),a!==0&&i._OrtFree(a)}},Pi=e=>{let t=Me(),i=t._malloc(e.byteLength);if(i===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,i),[i,e.byteLength]},cn=async(e,t)=>{let i,r,a=Me();Array.isArray(e)?[i,r]=e:e.buffer===a.HEAPU8.buffer?[i,r]=[e.byteOffset,e.byteLength]:[i,r]=Pi(e);let u=0,l=0,c=0,f=[],h=[],g=[];try{if([l,f]=await mp(t),t?.externalData&&a.mountExternalData){let P=[];for(let G of t.externalData){let V=typeof G=="string"?G:G.path;P.push(Bi(typeof G=="string"?G:G.data).then(N=>{a.mountExternalData(V,N)}))}await Promise.all(P)}for(let P of t?.executionProviders??[])if((typeof P=="string"?P:P.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof P!="string"){let V=P,N=V?.context,Y=V?.gpuDevice,J=V?.deviceType,oe=V?.powerPreference;N?a.currentContext=N:Y?a.currentContext=await a.webnnCreateMLContext(Y):a.currentContext=await a.webnnCreateMLContext({deviceType:J,powerPreference:oe})}else a.currentContext=await a.webnnCreateMLContext();break}u=await a._OrtCreateSession(i,r,l),a.webgpuOnCreateSession?.(u),u===0&&Pe("Can't create a session."),a.jsepOnCreateSession?.(),a.currentContext&&(a.webnnRegisterMLContext(u,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[_,w]=O2(u),x=!!t?.enableGraphCapture,$=[],S=[],O=[],j=[],I=[];for(let P=0;P<_;P++){let[G,V,N]=Dy(u,P);G===0&&Pe("Can't get an input name."),h.push(G);let Y=a.UTF8ToString(G);$.push(Y),O.push(V===0?{name:Y,isTensor:!1}:{name:Y,isTensor:!0,type:xt(V),shape:N})}for(let P=0;P<w;P++){let[G,V,N]=Dy(u,P+_);G===0&&Pe("Can't get an output name."),g.push(G);let Y=a.UTF8ToString(G);S.push(Y),j.push(V===0?{name:Y,isTensor:!1}:{name:Y,isTensor:!0,type:xt(V),shape:N});{if(x&&t?.preferredOutputLocation===void 0){I.push("gpu-buffer");continue}let J=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[Y]??"cpu",oe=a.webnnIsGraphOutput;if(J==="cpu"&&oe&&oe(u,Y)){I.push("ml-tensor-cpu-output");continue}if(J!=="cpu"&&J!=="cpu-pinned"&&J!=="gpu-buffer"&&J!=="ml-tensor")throw new Error(`Not supported preferred output location: ${J}.`);if(x&&J!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${J}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);I.push(J)}}let D=null;return I.some(P=>P==="gpu-buffer"||P==="ml-tensor"||P==="ml-tensor-cpu-output")&&(c=a._OrtCreateBinding(u),c===0&&Pe("Can't create IO binding."),D={handle:c,outputPreferredLocations:I,outputPreferredLocationsEncoded:I.map(P=>P==="ml-tensor-cpu-output"?"ml-tensor":P).map(P=>Pr(P))}),ii.set(u,[u,h,g,D,x,!1]),[u,$,S,O,j]}catch(_){throw h.forEach(w=>a._OrtFree(w)),g.forEach(w=>a._OrtFree(w)),c!==0&&a._OrtReleaseBinding(c)!==0&&Pe("Can't release IO binding."),u!==0&&a._OrtReleaseSession(u)!==0&&Pe("Can't release session."),_}finally{a._free(i),l!==0&&a._OrtReleaseSessionOptions(l)!==0&&Pe("Can't release session options."),f.forEach(_=>a._free(_)),a.unmountExternalData?.()}},pn=e=>{let t=Me(),i=ii.get(e);if(!i)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,a,u,l,c]=i;l&&(c&&t._OrtClearBoundOutputs(l.handle)!==0&&Pe("Can't clear bound outputs."),t._OrtReleaseBinding(l.handle)!==0&&Pe("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),a.forEach(f=>t._OrtFree(f)),u.forEach(f=>t._OrtFree(f)),t._OrtReleaseSession(r)!==0&&Pe("Can't release session."),ii.delete(e)},By=async(e,t,i,r,a,u,l=!1)=>{if(!e){t.push(0);return}let c=Me(),f=c.PTR_SIZE,h=e[0],g=e[1],_=e[3],w=_,x,$;if(h==="string"&&(_==="gpu-buffer"||_==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(l&&_!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${u} when enableGraphCapture is true.`);if(_==="gpu-buffer"){let j=e[2].gpuBuffer;$=Wt(Vt(h),g);{let I=c.jsepRegisterBuffer;if(!I)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');x=I(r,u,j,$)}}else if(_==="ml-tensor"){let j=e[2].mlTensor;$=Wt(Vt(h),g);let I=c.webnnRegisterMLTensor;if(!I)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');x=I(r,j,Vt(h),g)}else{let j=e[2];if(Array.isArray(j)){$=f*j.length,x=c._malloc($),i.push(x);for(let I=0;I<j.length;I++){if(typeof j[I]!="string")throw new TypeError(`tensor data at index ${I} is not a string`);c.setValue(x+I*f,lt(j[I],i),"*")}}else{let I=c.webnnIsGraphInput,D=c.webnnIsGraphOutput;if(h!=="string"&&I&&D){let P=c.UTF8ToString(a);if(I(r,P)||D(r,P)){let G=Vt(h);$=Wt(G,g),w="ml-tensor";let V=c.webnnCreateTemporaryTensor,N=c.webnnUploadTensor;if(!V||!N)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let Y=await V(r,G,g);N(Y,new Uint8Array(j.buffer,j.byteOffset,j.byteLength)),x=Y}else $=j.byteLength,x=c._malloc($),i.push(x),c.HEAPU8.set(new Uint8Array(j.buffer,j.byteOffset,$),x)}else $=j.byteLength,x=c._malloc($),i.push(x),c.HEAPU8.set(new Uint8Array(j.buffer,j.byteOffset,$),x)}}let S=c.stackSave(),O=c.stackAlloc(4*g.length);try{g.forEach((I,D)=>c.setValue(O+D*f,I,f===4?"i32":"i64"));let j=c._OrtCreateTensor(Vt(h),x,$,O,g.length,Pr(w));j===0&&Pe(`Can't create tensor for input/output. session=${r}, index=${u}.`),t.push(j)}finally{c.stackRestore(S)}},fn=async(e,t,i,r,a,u)=>{let l=Me(),c=l.PTR_SIZE,f=ii.get(e);if(!f)throw new Error(`cannot run inference. invalid session id: ${e}`);let h=f[0],g=f[1],_=f[2],w=f[3],x=f[4],$=f[5],S=t.length,O=r.length,j=0,I=[],D=[],P=[],G=[],V=[],N=l.stackSave(),Y=l.stackAlloc(S*c),J=l.stackAlloc(S*c),oe=l.stackAlloc(O*c),he=l.stackAlloc(O*c);try{[j,I]=pp(u),Ut("wasm prepareInputOutputTensor");for(let A=0;A<S;A++)await By(i[A],D,G,e,g[t[A]],t[A],x);for(let A=0;A<O;A++)await By(a[A],P,G,e,_[r[A]],S+r[A],x);Nt("wasm prepareInputOutputTensor");for(let A=0;A<S;A++)l.setValue(Y+A*c,D[A],"*"),l.setValue(J+A*c,g[t[A]],"*");for(let A=0;A<O;A++)l.setValue(oe+A*c,P[A],"*"),l.setValue(he+A*c,_[r[A]],"*");if(w&&!$){let{handle:A,outputPreferredLocations:pe,outputPreferredLocationsEncoded:ye}=w;if(g.length!==S)throw new Error(`input count from feeds (${S}) is expected to be always equal to model's input count (${g.length}).`);Ut("wasm bindInputsOutputs");for(let C=0;C<S;C++){let ie=t[C];await l._OrtBindInput(A,g[ie],D[C])!==0&&Pe(`Can't bind input[${C}] for session=${e}.`)}for(let C=0;C<O;C++){let ie=r[C];a[C]?.[3]?(V.push(P[C]),l._OrtBindOutput(A,_[ie],P[C],0)!==0&&Pe(`Can't bind pre-allocated output[${C}] for session=${e}.`)):l._OrtBindOutput(A,_[ie],0,ye[ie])!==0&&Pe(`Can't bind output[${C}] to ${pe[C]} for session=${e}.`)}Nt("wasm bindInputsOutputs"),ii.set(e,[h,g,_,w,x,!0])}l.jsepOnRunStart?.(h),l.webnnOnRunStart?.(h);let ce;w?ce=await l._OrtRunWithBinding(h,w.handle,O,oe,j):ce=await l._OrtRun(h,J,Y,S,he,O,oe,j),ce!==0&&Pe("failed to call OrtRun().");let me=[],ve=[];Ut("wasm ProcessOutputTensor");for(let A=0;A<O;A++){let pe=Number(l.getValue(oe+A*c,"*"));if(pe===P[A]||V.includes(P[A])){me.push(a[A]),pe!==P[A]&&l._OrtReleaseTensor(pe)!==0&&Pe("Can't release tensor.");continue}let ye=l.stackSave(),C=l.stackAlloc(4*c),ie=!1,Se,Ue=0;try{l._OrtGetTensorData(pe,C,C+c,C+2*c,C+3*c)!==0&&Pe(`Can't access output tensor data on index ${A}.`);let be=c===4?"i32":"i64",ee=Number(l.getValue(C,be));Ue=l.getValue(C+c,"*");let Q=l.getValue(C+c*2,"*"),ae=Number(l.getValue(C+c*3,be)),tt=[];for(let He=0;He<ae;He++)tt.push(Number(l.getValue(Q+He*c,be)));l._OrtFree(Q)!==0&&Pe("Can't free memory for tensor dims.");let et=tt.reduce((He,De)=>He*De,1);Se=xt(ee);let W=w?.outputPreferredLocations[r[A]];if(Se==="string"){if(W==="gpu-buffer"||W==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let He=[];for(let De=0;De<et;De++){let Le=l.getValue(Ue+De*c,"*"),Je=l.getValue(Ue+(De+1)*c,"*"),Pt=De===et-1?void 0:Je-Le;He.push(l.UTF8ToString(Le,Pt))}me.push([Se,tt,He,"cpu"])}else if(W==="gpu-buffer"&&et>0){let He=l.jsepGetBuffer;if(!He)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let De=He(Ue),Le=Wt(ee,et);if(Le===void 0||!bn(Se))throw new Error(`Unsupported data type: ${Se}`);ie=!0,me.push([Se,tt,{gpuBuffer:De,download:l.jsepCreateDownloader(De,Le,Se),dispose:()=>{l._OrtReleaseTensor(pe)!==0&&Pe("Can't release tensor.")}},"gpu-buffer"])}else if(W==="ml-tensor"&&et>0){let He=l.webnnEnsureTensor,De=l.webnnIsGraphInputOutputTypeSupported;if(!He||!De)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Wt(ee,et)===void 0||!vn(Se))throw new Error(`Unsupported data type: ${Se}`);if(!De(e,Se,!1))throw new Error(`preferredLocation "ml-tensor" for ${Se} output is not supported by current WebNN Context.`);let Je=await He(e,Ue,ee,tt,!1);ie=!0,me.push([Se,tt,{mlTensor:Je,download:l.webnnCreateMLTensorDownloader(Ue,Se),dispose:()=>{l.webnnReleaseTensorId(Ue),l._OrtReleaseTensor(pe)}},"ml-tensor"])}else if(W==="ml-tensor-cpu-output"&&et>0){let He=l.webnnCreateMLTensorDownloader(Ue,Se)(),De=me.length;ie=!0,ve.push((async()=>{let Le=[De,await He];return l.webnnReleaseTensorId(Ue),l._OrtReleaseTensor(pe),Le})()),me.push([Se,tt,[],"cpu"])}else{let He=di(Se),De=new He(et);new Uint8Array(De.buffer,De.byteOffset,De.byteLength).set(l.HEAPU8.subarray(Ue,Ue+De.byteLength)),me.push([Se,tt,De,"cpu"])}}finally{l.stackRestore(ye),Se==="string"&&Ue&&l._free(Ue),ie||l._OrtReleaseTensor(pe)}}w&&!x&&(l._OrtClearBoundOutputs(w.handle)!==0&&Pe("Can't clear bound outputs."),ii.set(e,[h,g,_,w,x,!1]));for(let[A,pe]of await Promise.all(ve))me[A][2]=pe;return Nt("wasm ProcessOutputTensor"),me}finally{l.webnnOnRunEnd?.(h),l.stackRestore(N),D.forEach(ce=>l._OrtReleaseTensor(ce)),P.forEach(ce=>l._OrtReleaseTensor(ce)),G.forEach(ce=>l._free(ce)),j!==0&&l._OrtReleaseRunOptions(j),I.forEach(ce=>l._free(ce))}},mn=e=>{let t=Me(),i=ii.get(e);if(!i)throw new Error("invalid session id");let r=i[0],a=t._OrtEndProfiling(r);a===0&&Pe("Can't get an profile file name."),t._OrtFree(a)},hn=e=>{let t=[];for(let i of e){let r=i[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}});var ni,ct,Li,Kn,Yn,qn,mo,ho,mi,hi,B2,My,Ry,zy,Uy,Ny,Ly,Vy,yo=ne(()=>{"use strict";st();Ir();Lt();sn();ni=()=>!!Re.wasm.proxy&&typeof document<"u",Li=!1,Kn=!1,Yn=!1,ho=new Map,mi=(e,t)=>{let i=ho.get(e);i?i.push(t):ho.set(e,[t])},hi=()=>{if(Li||!Kn||Yn||!ct)throw new Error("worker not ready")},B2=e=>{switch(e.data.type){case"init-wasm":Li=!1,e.data.err?(Yn=!0,mo[1](e.data.err)):(Kn=!0,mo[0]()),qn&&(URL.revokeObjectURL(qn),qn=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=ho.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},My=async()=>{if(!Kn){if(Li)throw new Error("multiple calls to 'initWasm()' detected.");if(Yn)throw new Error("previous call to 'initWasm()' failed.");if(Li=!0,ni())return new Promise((e,t)=>{ct?.terminate(),lp().then(([i,r])=>{try{ct=r,ct.onerror=u=>t(u),ct.onmessage=B2,mo=[e,t];let a={type:"init-wasm",in:Re};!a.in.wasm.wasmPaths&&(i||kr)&&(a.in.wasm.wasmPaths={wasm:new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href}),ct.postMessage(a),qn=i}catch(a){t(a)}},t)});try{await un(Re.wasm),await ln(Re),Kn=!0}catch(e){throw Yn=!0,e}finally{Li=!1}}},Ry=async e=>{if(ni())return hi(),new Promise((t,i)=>{mi("init-ep",[t,i]);let r={type:"init-ep",in:{epName:e,env:Re}};ct.postMessage(r)});await dn(Re,e)},zy=async e=>ni()?(hi(),new Promise((t,i)=>{mi("copy-from",[t,i]);let r={type:"copy-from",in:{buffer:e}};ct.postMessage(r,[e.buffer])})):Pi(e),Uy=async(e,t)=>{if(ni()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return hi(),new Promise((i,r)=>{mi("create",[i,r]);let a={type:"create",in:{model:e,options:{...t}}},u=[];e instanceof Uint8Array&&u.push(e.buffer),ct.postMessage(a,u)})}else return cn(e,t)},Ny=async e=>{if(ni())return hi(),new Promise((t,i)=>{mi("release",[t,i]);let r={type:"release",in:e};ct.postMessage(r)});pn(e)},Ly=async(e,t,i,r,a,u)=>{if(ni()){if(i.some(l=>l[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(l=>l))throw new Error("pre-allocated output tensor is not supported for proxy.");return hi(),new Promise((l,c)=>{mi("run",[l,c]);let f=i,h={type:"run",in:{sessionId:e,inputIndices:t,inputs:f,outputIndices:r,options:u}};ct.postMessage(h,hn(f))})}else return fn(e,t,i,r,a,u)},Vy=async e=>{if(ni())return hi(),new Promise((t,i)=>{mi("end-profiling",[t,i]);let r={type:"end-profiling",in:e};ct.postMessage(r)});mn(e)}});var Wy,M2,Zn,Gy=ne(()=>{"use strict";st();yo();ge();an();Or();Wy=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},M2=e=>{switch(e[3]){case"cpu":return new mt(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!bn(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:i,download:r,dispose:a}=e[2];return mt.fromGpuBuffer(i,{dataType:t,dims:e[1],download:r,dispose:a})}case"ml-tensor":{let t=e[0];if(!vn(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:i,download:r,dispose:a}=e[2];return mt.fromMLTensor(i,{dataType:t,dims:e[1],download:r,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},Zn=class{async fetchModelAndCopyToWasmMemory(t){return zy(await Bi(t))}async loadModel(t,i){at();let r;typeof t=="string"?r=await this.fetchModelAndCopyToWasmMemory(t):r=t,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Uy(r,i),nt()}async dispose(){return Ny(this.sessionId)}async run(t,i,r){at();let a=[],u=[];Object.entries(t).forEach(w=>{let x=w[0],$=w[1],S=this.inputNames.indexOf(x);if(S===-1)throw new Error(`invalid input '${x}'`);a.push($),u.push(S)});let l=[],c=[];Object.entries(i).forEach(w=>{let x=w[0],$=w[1],S=this.outputNames.indexOf(x);if(S===-1)throw new Error(`invalid output '${x}'`);l.push($),c.push(S)});let f=a.map((w,x)=>Wy(w,()=>`input "${this.inputNames[u[x]]}"`)),h=l.map((w,x)=>w?Wy(w,()=>`output "${this.outputNames[c[x]]}"`):null),g=await Ly(this.sessionId,u,f,c,h,r),_={};for(let w=0;w<g.length;w++)_[this.outputNames[c[w]]]=l[w]??M2(g[w]);return nt(),_}startProfiling(){}endProfiling(){Vy(this.sessionId)}}});var Hy={};li(Hy,{OnnxruntimeWebAssemblyBackend:()=>Qn,initializeFlags:()=>Fy,wasmBackend:()=>R2});var Fy,Qn,R2,qy=ne(()=>{"use strict";st();yo();Gy();Fy=()=>{(typeof Re.wasm.initTimeout!="number"||Re.wasm.initTimeout<0)&&(Re.wasm.initTimeout=0);let e=Re.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),Re.wasm.simd=!1),typeof Re.wasm.proxy!="boolean"&&(Re.wasm.proxy=!1),typeof Re.wasm.trace!="boolean"&&(Re.wasm.trace=!1),typeof Re.wasm.numThreads!="number"||!Number.isInteger(Re.wasm.numThreads)||Re.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Re.wasm.numThreads=1;else{let t=typeof navigator>"u"?vr("node:os").cpus().length:navigator.hardwareConcurrency;Re.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Qn=class{async init(t){Fy(),await My(),await Ry(t)}async createInferenceSessionHandler(t,i){let r=new Zn;return await r.loadModel(t,i),r}},R2=new Qn});st();st();st();var Zc="1.24.0";var KP=Tr;{let e=(qy(),ji(Hy)).wasmBackend;Zt("webgpu",e,5),Zt("webnn",e,5),Zt("cpu",e,10),Zt("wasm",e,10)}Object.defineProperty(Re.versions,"web",{value:Zc,enumerable:!0});export{u$ as InferenceSession,rn as TRACE,Ut as TRACE_EVENT_BEGIN,Nt as TRACE_EVENT_END,at as TRACE_FUNC_BEGIN,nt as TRACE_FUNC_END,mt as Tensor,KP as default,Re as env,Zt as registerBackend};
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
//# sourceMappingURL=ort.bundle.min.mjs.map
