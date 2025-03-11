/*!
 * ONNX Runtime Web v1.22.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var QP=Object.create;var gi=Object.defineProperty;var eO=Object.getOwnPropertyDescriptor;var tO=Object.getOwnPropertyNames;var rO=Object.getPrototypeOf,nO=Object.prototype.hasOwnProperty;var Rs=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(e,r)=>(typeof require<"u"?require:e)[r]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')});var W=(n,e)=>()=>(n&&(e=n(n=0)),e);var pe=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),On=(n,e)=>{for(var r in e)gi(n,r,{get:e[r],enumerable:!0})},Hm=(n,e,r,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of tO(e))!nO.call(n,o)&&o!==r&&gi(n,o,{get:()=>e[o],enumerable:!(t=eO(e,o))||t.enumerable});return n};var Pe=(n,e,r)=>(r=n!=null?QP(rO(n)):{},Hm(e||!n||!n.__esModule?gi(r,"default",{value:n,enumerable:!0}):r,n)),ro=n=>Hm(gi({},"__esModule",{value:!0}),n);var yi,Cn,hn,oO,qm,zs=W(()=>{"use strict";yi=new Map,Cn=[],hn=(n,e,r)=>{if(e&&typeof e.init=="function"&&typeof e.createInferenceSessionHandler=="function"){let t=yi.get(n);if(t===void 0)yi.set(n,{backend:e,priority:r});else{if(t.priority>r)return;if(t.priority===r&&t.backend!==e)throw new Error(`cannot register backend "${n}" using priority ${r}`)}if(r>=0){let o=Cn.indexOf(n);o!==-1&&Cn.splice(o,1);for(let i=0;i<Cn.length;i++)if(yi.get(Cn[i]).priority<=r){Cn.splice(i,0,n);return}Cn.push(n)}return}throw new TypeError("not a valid backend")},oO=async n=>{let e=yi.get(n);if(!e)return"backend not found.";if(e.initialized)return e.backend;if(e.aborted)return e.error;{let r=!!e.initPromise;try{return r||(e.initPromise=e.backend.init(n)),await e.initPromise,e.initialized=!0,e.backend}catch(t){return r||(e.error=`${t}`,e.aborted=!0),e.error}finally{delete e.initPromise}}},qm=async n=>{let e=n.executionProviders||[],r=e.map(c=>typeof c=="string"?c:c.name),t=r.length===0?Cn:r,o,i=[],a=new Set;for(let c of t){let p=await oO(c);typeof p=="string"?i.push({name:c,err:p}):(o||(o=p),o===p&&a.add(c))}if(!o)throw new Error(`no available backend found. ERR: ${i.map(c=>`[${c.name}] ${c.err}`).join(", ")}`);for(let{name:c,err:p}of i)r.includes(c)&&console.warn(`removing requested execution provider "${c}" from session options because it is not available: ${p}`);let u=e.filter(c=>a.has(typeof c=="string"?c:c.name));return[o,new Proxy(n,{get:(c,p)=>p==="executionProviders"?u:Reflect.get(c,p)})]}});var Km=W(()=>{"use strict";zs()});var Xm,Ym=W(()=>{"use strict";Xm="1.22.0"});var Zm,Nt,Ms=W(()=>{"use strict";Ym();Zm="warning",Nt={wasm:{},webgl:{},webgpu:{},versions:{common:Xm},set logLevel(n){if(n!==void 0){if(typeof n!="string"||["verbose","info","warning","error","fatal"].indexOf(n)===-1)throw new Error(`Unsupported logging level: ${n}`);Zm=n}},get logLevel(){return Zm}};Object.defineProperty(Nt,"logLevel",{enumerable:!0})});var Ie,Jm=W(()=>{"use strict";Ms();Ie=Nt});var Qm,eg,tg=W(()=>{"use strict";Qm=(n,e)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=n.dims[3],r.height=n.dims[2];let t=r.getContext("2d");if(t!=null){let o,i;e?.tensorLayout!==void 0&&e.tensorLayout==="NHWC"?(o=n.dims[2],i=n.dims[3]):(o=n.dims[3],i=n.dims[2]);let a=e?.format!==void 0?e.format:"RGB",u=e?.norm,c,p;u===void 0||u.mean===void 0?c=[255,255,255,255]:typeof u.mean=="number"?c=[u.mean,u.mean,u.mean,u.mean]:(c=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(c[3]=u.mean[3])),u===void 0||u.bias===void 0?p=[0,0,0,0]:typeof u.bias=="number"?p=[u.bias,u.bias,u.bias,u.bias]:(p=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(p[3]=u.bias[3]));let m=i*o,b=0,_=m,x=m*2,T=-1;a==="RGBA"?(b=0,_=m,x=m*2,T=m*3):a==="RGB"?(b=0,_=m,x=m*2):a==="RBG"&&(b=0,x=m,_=m*2);for(let I=0;I<i;I++)for(let P=0;P<o;P++){let $=(n.data[b++]-p[0])*c[0],A=(n.data[_++]-p[1])*c[1],C=(n.data[x++]-p[2])*c[2],k=T===-1?255:(n.data[T++]-p[3])*c[3];t.fillStyle="rgba("+$+","+A+","+C+","+k+")",t.fillRect(P,I,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},eg=(n,e)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),t;if(r!=null){let o,i,a;e?.tensorLayout!==void 0&&e.tensorLayout==="NHWC"?(o=n.dims[2],i=n.dims[1],a=n.dims[3]):(o=n.dims[3],i=n.dims[2],a=n.dims[1]);let u=e!==void 0&&e.format!==void 0?e.format:"RGB",c=e?.norm,p,m;c===void 0||c.mean===void 0?p=[255,255,255,255]:typeof c.mean=="number"?p=[c.mean,c.mean,c.mean,c.mean]:(p=[c.mean[0],c.mean[1],c.mean[2],255],c.mean[3]!==void 0&&(p[3]=c.mean[3])),c===void 0||c.bias===void 0?m=[0,0,0,0]:typeof c.bias=="number"?m=[c.bias,c.bias,c.bias,c.bias]:(m=[c.bias[0],c.bias[1],c.bias[2],0],c.bias[3]!==void 0&&(m[3]=c.bias[3]));let b=i*o;if(e!==void 0&&(e.format!==void 0&&a===4&&e.format!=="RGBA"||a===3&&e.format!=="RGB"&&e.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let _=4,x=0,T=1,I=2,P=3,$=0,A=b,C=b*2,k=-1;u==="RGBA"?($=0,A=b,C=b*2,k=b*3):u==="RGB"?($=0,A=b,C=b*2):u==="RBG"&&($=0,C=b,A=b*2),t=r.createImageData(o,i);for(let z=0;z<i*o;x+=_,T+=_,I+=_,P+=_,z++)t.data[x]=(n.data[$++]-m[0])*p[0],t.data[T]=(n.data[A++]-m[1])*p[1],t.data[I]=(n.data[C++]-m[2])*p[2],t.data[P]=k===-1?255:(n.data[k++]-m[3])*p[3]}else throw new Error("Can not access image data");return t}});var Bs,rg,ng,og,ig,ag,sg=W(()=>{"use strict";bi();Bs=(n,e)=>{if(n===void 0)throw new Error("Image buffer must be defined");if(e.height===void 0||e.width===void 0)throw new Error("Image height and width must be defined");if(e.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:t}=e,o=e.norm??{mean:255,bias:0},i,a;typeof o.mean=="number"?i=[o.mean,o.mean,o.mean,o.mean]:i=[o.mean[0],o.mean[1],o.mean[2],o.mean[3]??255],typeof o.bias=="number"?a=[o.bias,o.bias,o.bias,o.bias]:a=[o.bias[0],o.bias[1],o.bias[2],o.bias[3]??0];let u=e.format!==void 0?e.format:"RGBA",c=e.tensorFormat!==void 0&&e.tensorFormat!==void 0?e.tensorFormat:"RGB",p=r*t,m=c==="RGBA"?new Float32Array(p*4):new Float32Array(p*3),b=4,_=0,x=1,T=2,I=3,P=0,$=p,A=p*2,C=-1;u==="RGB"&&(b=3,_=0,x=1,T=2,I=-1),c==="RGBA"?C=p*3:c==="RBG"?(P=0,A=p,$=p*2):c==="BGR"&&(A=0,$=p,P=p*2);for(let z=0;z<p;z++,_+=b,T+=b,x+=b,I+=b)m[P++]=(n[_]+a[0])/i[0],m[$++]=(n[x]+a[1])/i[1],m[A++]=(n[T]+a[2])/i[2],C!==-1&&I!==-1&&(m[C++]=(n[I]+a[3])/i[3]);return c==="RGBA"?new vt("float32",m,[1,4,r,t]):new vt("float32",m,[1,3,r,t])},rg=async(n,e)=>{let r=typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement,t=typeof ImageData<"u"&&n instanceof ImageData,o=typeof ImageBitmap<"u"&&n instanceof ImageBitmap,i=typeof n=="string",a,u=e??{},c=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},p=m=>typeof HTMLCanvasElement<"u"&&m instanceof HTMLCanvasElement||m instanceof OffscreenCanvas?m.getContext("2d"):null;if(r){let m=c();m.width=n.width,m.height=n.height;let b=p(m);if(b!=null){let _=n.height,x=n.width;if(e!==void 0&&e.resizedHeight!==void 0&&e.resizedWidth!==void 0&&(_=e.resizedHeight,x=e.resizedWidth),e!==void 0){if(u=e,e.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=_,u.width=x}else u.tensorFormat="RGBA",u.height=_,u.width=x;b.drawImage(n,0,0),a=b.getImageData(0,0,x,_).data}else throw new Error("Can not access image data")}else if(t){let m,b;if(e!==void 0&&e.resizedWidth!==void 0&&e.resizedHeight!==void 0?(m=e.resizedHeight,b=e.resizedWidth):(m=n.height,b=n.width),e!==void 0&&(u=e),u.format="RGBA",u.height=m,u.width=b,e!==void 0){let _=c();_.width=b,_.height=m;let x=p(_);if(x!=null)x.putImageData(n,0,0),a=x.getImageData(0,0,b,m).data;else throw new Error("Can not access image data")}else a=n.data}else if(o){if(e===void 0)throw new Error("Please provide image config with format for Imagebitmap");let m=c();m.width=n.width,m.height=n.height;let b=p(m);if(b!=null){let _=n.height,x=n.width;return b.drawImage(n,0,0,x,_),a=b.getImageData(0,0,x,_).data,u.height=_,u.width=x,Bs(a,u)}else throw new Error("Can not access image data")}else{if(i)return new Promise((m,b)=>{let _=c(),x=p(_);if(!n||!x)return b();let T=new Image;T.crossOrigin="Anonymous",T.src=n,T.onload=()=>{_.width=T.width,_.height=T.height,x.drawImage(T,0,0,_.width,_.height);let I=x.getImageData(0,0,_.width,_.height);u.height=_.height,u.width=_.width,m(Bs(I.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return Bs(a,u);throw new Error("Input data provided is not supported - aborted tensor creation")},ng=(n,e)=>{let{width:r,height:t,download:o,dispose:i}=e,a=[1,t,r,4];return new vt({location:"texture",type:"float32",texture:n,dims:a,download:o,dispose:i})},og=(n,e)=>{let{dataType:r,dims:t,download:o,dispose:i}=e;return new vt({location:"gpu-buffer",type:r??"float32",gpuBuffer:n,dims:t,download:o,dispose:i})},ig=(n,e)=>{let{dataType:r,dims:t,download:o,dispose:i}=e;return new vt({location:"ml-tensor",type:r??"float32",mlTensor:n,dims:t,download:o,dispose:i})},ag=(n,e,r)=>new vt({location:"cpu-pinned",type:n,data:e,dims:r??[e.length]})});var En,Ao,ug,lg,cg=W(()=>{"use strict";En=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Ao=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),ug=!1,lg=()=>{if(!ug){ug=!0;let n=typeof BigInt64Array<"u"&&BigInt64Array.from,e=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,t=typeof r<"u"&&r.from;n&&(En.set("int64",BigInt64Array),Ao.set(BigInt64Array,"int64")),e&&(En.set("uint64",BigUint64Array),Ao.set(BigUint64Array,"uint64")),t?(En.set("float16",r),Ao.set(r,"float16")):En.set("float16",Uint16Array)}}});var dg,fg,pg=W(()=>{"use strict";bi();dg=n=>{let e=1;for(let r=0;r<n.length;r++){let t=n[r];if(typeof t!="number"||!Number.isSafeInteger(t))throw new TypeError(`dims[${r}] must be an integer, got: ${t}`);if(t<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${t}`);e*=t}return e},fg=(n,e)=>{switch(n.location){case"cpu":return new vt(n.type,n.data,e);case"cpu-pinned":return new vt({location:"cpu-pinned",data:n.data,type:n.type,dims:e});case"texture":return new vt({location:"texture",texture:n.texture,type:n.type,dims:e});case"gpu-buffer":return new vt({location:"gpu-buffer",gpuBuffer:n.gpuBuffer,type:n.type,dims:e});case"ml-tensor":return new vt({location:"ml-tensor",mlTensor:n.mlTensor,type:n.type,dims:e});default:throw new Error(`tensorReshape: tensor location ${n.location} is not supported`)}}});var vt,bi=W(()=>{"use strict";tg();sg();cg();pg();vt=class{constructor(e,r,t){lg();let o,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,o=e.type,i=e.dims,e.location){case"cpu-pinned":{let u=En.get(o);if(!u)throw new TypeError(`unsupported type "${o}" to create tensor from pinned buffer`);if(!(e.data instanceof u))throw new TypeError(`buffer should be of type ${u.name}`);this.cpuData=e.data;break}case"texture":{if(o!=="float32")throw new TypeError(`unsupported type "${o}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint8"&&o!=="bool"&&o!=="uint4"&&o!=="int4")throw new TypeError(`unsupported type "${o}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint64"&&o!=="int8"&&o!=="uint8"&&o!=="bool"&&o!=="uint4"&&o!=="int4")throw new TypeError(`unsupported type "${o}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let u,c;if(typeof e=="string")if(o=e,c=t,e==="string"){if(!Array.isArray(r))throw new TypeError("A string tensor's data must be a string array.");u=r}else{let p=En.get(e);if(p===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(r)){if(e==="float16"&&p===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${p.name} as data.`);e==="uint64"||e==="int64"?u=p.from(r,BigInt):u=p.from(r)}else if(r instanceof p)u=r;else if(r instanceof Uint8ClampedArray)if(e==="uint8")u=Uint8Array.from(r);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&r instanceof Uint16Array&&p!==Uint16Array)u=new globalThis.Float16Array(r.buffer,r.byteOffset,r.length);else throw new TypeError(`A ${o} tensor's data must be type of ${p}`)}else if(c=r,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let p=typeof e[0];if(p==="string")o="string",u=e;else if(p==="boolean")o="bool",u=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${p}.`)}else if(e instanceof Uint8ClampedArray)o="uint8",u=Uint8Array.from(e);else{let p=Ao.get(e.constructor);if(p===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);o=p,u=e}if(c===void 0)c=[u.length];else if(!Array.isArray(c))throw new TypeError("A tensor's dims must be a number array");i=c,this.cpuData=u,this.dataLocation="cpu"}let a=dg(i);if(this.cpuData&&a!==this.cpuData.length&&!((o==="uint4"||o==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=o,this.dims=i,this.size=a}static async fromImage(e,r){return rg(e,r)}static fromTexture(e,r){return ng(e,r)}static fromGpuBuffer(e,r){return og(e,r)}static fromMLTensor(e,r){return ig(e,r)}static fromPinnedBuffer(e,r,t){return ag(e,r,t)}toDataURL(e){return Qm(this,e)}toImageData(e){return eg(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let r=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=r,e&&this.disposer&&(this.disposer(),this.disposer=void 0),r}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return fg(this,e)}}});var Lt,Fs=W(()=>{"use strict";bi();Lt=vt});var _i,hg,Rt,At,Vs=W(()=>{"use strict";Ms();_i=(n,e)=>{(typeof Nt.trace>"u"?!Nt.wasm.trace:!Nt.trace)||console.timeStamp(`${n}::ORT::${e}`)},hg=(n,e)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],t=!1;for(let o=0;o<r.length;o++){if(t&&!r[o].includes("TRACE_FUNC")){let i=`FUNC_${n}::${r[o].trim().split(" ")[1]}`;e&&(i+=`::${e}`),_i("CPU",i);return}r[o].includes("TRACE_FUNC")&&(t=!0)}},Rt=n=>{(typeof Nt.trace>"u"?!Nt.wasm.trace:!Nt.trace)||hg("BEGIN",n)},At=n=>{(typeof Nt.trace>"u"?!Nt.wasm.trace:!Nt.trace)||hg("END",n)}});var vi,mg=W(()=>{"use strict";zs();Fs();Vs();vi=class n{constructor(e){this.handler=e}async run(e,r,t){Rt();let o={},i={};if(typeof e!="object"||e===null||e instanceof Lt||Array.isArray(e))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Lt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let p of r){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);o[p]=null}if(typeof t=="object"&&t!==null)i=t;else if(typeof t<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,m=Object.getOwnPropertyNames(r);for(let b of this.outputNames)if(m.indexOf(b)!==-1){let _=r[b];(_===null||_ instanceof Lt)&&(p=!0,a=!1,o[b]=_)}if(p){if(typeof t=="object"&&t!==null)i=t;else if(typeof t<"u")throw new TypeError("'options' must be an object.")}else i=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of this.inputNames)if(typeof e[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(a)for(let p of this.outputNames)o[p]=null;let u=await this.handler.run(e,o,i),c={};for(let p in u)if(Object.hasOwnProperty.call(u,p)){let m=u[p];m instanceof Lt?c[p]=m:c[p]=new Lt(m.type,m.data,m.dims)}return At(),c}async release(){return this.handler.dispose()}static async create(e,r,t,o){Rt();let i,a={};if(typeof e=="string"){if(i=e,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof Uint8Array){if(i=e,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer){let m=e,b=0,_=e.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(b=r,!Number.isSafeInteger(b))throw new RangeError("'byteOffset' must be an integer.");if(b<0||b>=m.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${m.byteLength}).`);if(_=e.byteLength-b,typeof t=="number"){if(_=t,!Number.isSafeInteger(_))throw new RangeError("'byteLength' must be an integer.");if(_<=0||b+_>m.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${m.byteLength-b}].`);if(typeof o=="object"&&o!==null)a=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else if(typeof t<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");i=new Uint8Array(m,b,_)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,c]=await qm(a),p=await u.createInferenceSessionHandler(i,c);return At(),new n(p)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}});var iO,gg=W(()=>{"use strict";mg();iO=vi});var yg=W(()=>{"use strict"});var bg=W(()=>{"use strict"});var _g=W(()=>{"use strict"});var vg=W(()=>{"use strict"});var Gs={};On(Gs,{InferenceSession:()=>iO,TRACE:()=>_i,TRACE_FUNC_BEGIN:()=>Rt,TRACE_FUNC_END:()=>At,Tensor:()=>Lt,env:()=>Ie,registerBackend:()=>hn});var xt=W(()=>{"use strict";Km();Jm();gg();Fs();yg();bg();Vs();_g();vg()});function mn(n,e,r,t){if(e===void 0)return sO(n);if(r===void 0)wi(n,e,1);else if(typeof r=="number"&&t===void 0)wi(n,e,r);else if(typeof r=="string"&&t===void 0)wi(n,r,1,e);else if(typeof r=="string"&&typeof t=="number")wi(n,r,t,e);else throw new TypeError("input is valid")}function sO(n){return{verbose:mn.verbose.bind(null,n),info:mn.info.bind(null,n),warning:mn.warning.bind(null,n),error:mn.error.bind(null,n),fatal:mn.fatal.bind(null,n)}}function wi(n,e,r,t){let o=Po[t||""]||Po[""];xg[n]<xg[o.minimalSeverity]||(o.logDateTime&&(e=`${new Date().toISOString()}|${e}`),o.logSourceLocation,aO[o.provider].log(n,e,t))}var Us,js,xg,aO,Tg,Po,qe,Ti,Ii,Si,xi,Vt=W(()=>{"use strict";Us=class{log(e,r,t){}},js=class{log(e,r,t){console.log(`${this.color(e)} ${t?"\x1B[35m"+t+"\x1B[0m ":""}${r}`)}color(e){switch(e){case"verbose":return"\x1B[34;40mv\x1B[0m";case"info":return"\x1B[32mi\x1B[0m";case"warning":return"\x1B[30;43mw\x1B[0m";case"error":return"\x1B[31;40me\x1B[0m";case"fatal":return"\x1B[101mf\x1B[0m";default:throw new Error(`unsupported severity: ${e}`)}}},xg={verbose:1e3,info:2e3,warning:4e3,error:5e3,fatal:6e3},aO={none:new Us,console:new js},Tg={provider:"console",minimalSeverity:"warning",logDateTime:!0,logSourceLocation:!1},Po={"":Tg};(c=>{function n(p,m){c("verbose",p,m)}c.verbose=n;function e(p,m){c("info",p,m)}c.info=e;function r(p,m){c("warning",p,m)}c.warning=r;function t(p,m){c("error",p,m)}c.error=t;function o(p,m){c("fatal",p,m)}c.fatal=o;function i(p){Po={},a("",p||{})}c.reset=i;function a(p,m){if(p==="*")i(m);else{let b=Po[p]||Tg;Po[p]={provider:m.provider||b.provider,minimalSeverity:m.minimalSeverity||b.minimalSeverity,logDateTime:m.logDateTime===void 0?b.logDateTime:m.logDateTime,logSourceLocation:m.logSourceLocation===void 0?b.logSourceLocation:m.logSourceLocation}}}c.set=a;function u(p){let m={};p.logLevel&&(m.minimalSeverity=p.logLevel),a("",m)}c.setWithEnv=u})(mn||={});qe=mn,Ti=class{constructor(e,r,t,o,i,a){this.category=e;this.name=r;this.startTime=t;this.endCallback=o;this.timer=i;this.ctx=a}async end(){return this.endCallback(this)}async checkTimer(){if(this.ctx===void 0||this.timer===void 0)throw new Error("No webgl timer found");return this.ctx.endTimer(),this.ctx.waitForQueryAndGetTime(this.timer)}},Ii=class{constructor(e,r,t,o){this.category=e;this.name=r;this.startTime=t;this.endTime=o}},Si=class{constructor(e,r,t){this._started=!1;this._flushPointer=0;this._started=!1,this._maxNumberEvents=e===void 0?1e4:e,this._flushBatchSize=r===void 0?10:r,this._flushIntervalInMilliseconds=t===void 0?5e3:t}static create(e){return e===void 0?new this:new this(e.maxNumberEvents,e.flushBatchSize,e.flushIntervalInMilliseconds)}start(){this._started=!0,this._timingEvents=[],this._flushTime=xi(),this._flushPointer=0}stop(){for(this._started=!1;this._flushPointer<this._timingEvents.length;this._flushPointer++)this.logOneEvent(this._timingEvents[this._flushPointer])}event(e,r,t,o){let i=this._started?this.begin(e,r,o):void 0,a=!1,u=t();if(u&&typeof u.then=="function")return a=!0,new Promise((c,p)=>{u.then(async m=>{i&&await i.end(),c(m)},async m=>{i&&await i.end(),p(m)})});if(!a&&i){let c=i.end();if(c&&typeof c.then=="function")return new Promise((p,m)=>{c.then(()=>{p(u)},b=>{m(b)})})}return u}begin(e,r,t){if(!this._started)throw new Error("profiler is not started yet");if(t===void 0){let o=xi();return this.flush(o),new Ti(e,r,o,i=>this.endSync(i))}else{let o=t.beginTimer();return new Ti(e,r,0,async i=>this.end(i),o,t)}}async end(e){let r=await e.checkTimer();this._timingEvents.length<this._maxNumberEvents&&(this._timingEvents.push(new Ii(e.category,e.name,e.startTime,r)),this.flush(r))}endSync(e){let r=xi();this._timingEvents.length<this._maxNumberEvents&&(this._timingEvents.push(new Ii(e.category,e.name,e.startTime,r)),this.flush(r))}logOneEvent(e){qe.verbose(`Profiler.${e.category}`,`${(e.endTime-e.startTime).toFixed(2)}ms on event '${e.name}' at ${e.endTime.toFixed(2)}`)}flush(e){if(this._timingEvents.length-this._flushPointer>=this._flushBatchSize||e-this._flushTime>=this._flushIntervalInMilliseconds){for(let r=this._flushPointer;this._flushPointer<r+this._flushBatchSize&&this._flushPointer<this._timingEvents.length;this._flushPointer++)this.logOneEvent(this._timingEvents[this._flushPointer]);this._flushTime=xi()}}get started(){return this._started}},xi=typeof performance<"u"&&performance.now?()=>performance.now():Date.now});function Ig(n,e,r){for(let t of r){let o=t[0],i=t[1],a=t[2],u=t[3],c=t[4];if(n.opType===o){for(let p of e)if((p.domain===i||p.domain==="ai.onnx"&&i==="")&&uO(p.version,a))return{opImpl:u,opInit:c}}}throw new TypeError(`cannot resolve operator '${n.opType}' with opsets: ${e.map(t=>`${t.domain||"ai.onnx"} v${t.version}`).join(", ")}`)}function uO(n,e){if(e.endsWith("+")){let r=Number.parseInt(e.substring(0,e.length-1),10);return!isNaN(r)&&r<=n}else if(e.split("-").length===2){let r=e.split("-"),t=Number.parseInt(r[0],10),o=Number.parseInt(r[1],10);return!isNaN(t)&&!isNaN(o)&&t<=n&&n<=o}else return Number.parseInt(e,10)===n}var Sg=W(()=>{"use strict"});var $g=pe(Ws=>{"use strict";Ws.__esModule=!0;var lO=function(){function n(e){if(!e)throw new TypeError("Invalid argument; `value` has no value.");this.value=n.EMPTY,e&&n.isGuid(e)&&(this.value=e)}return n.isGuid=function(e){var r=e.toString();return e&&(e instanceof n||n.validator.test(r))},n.create=function(){return new n([n.gen(2),n.gen(1),n.gen(1),n.gen(1),n.gen(3)].join("-"))},n.createEmpty=function(){return new n("emptyguid")},n.parse=function(e){return new n(e)},n.raw=function(){return[n.gen(2),n.gen(1),n.gen(1),n.gen(1),n.gen(3)].join("-")},n.gen=function(e){for(var r="",t=0;t<e;t++)r+=((1+Math.random())*65536|0).toString(16).substring(1);return r},n.prototype.equals=function(e){return n.isGuid(e)&&this.value===e.toString()},n.prototype.isEmpty=function(){return this.value===n.EMPTY},n.prototype.toString=function(){return this.value},n.prototype.toJSON=function(){return{value:this.value}},n.validator=new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$","i"),n.EMPTY="00000000-0000-0000-0000-000000000000",n}();Ws.Guid=lO});function Je(n,e,r){this.low=n|0,this.high=e|0,this.unsigned=!!r}function Tt(n){return(n&&n.__isLong__)===!0}function Ag(n){var e=Math.clz32(n&-n);return n?31-e:e}function Dn(n,e){var r,t,o;return e?(n>>>=0,(o=0<=n&&n<256)&&(t=Og[n],t)?t:(r=Ge(n,0,!0),o&&(Og[n]=r),r)):(n|=0,(o=-128<=n&&n<128)&&(t=Pg[n],t)?t:(r=Ge(n,n<0?-1:0,!1),o&&(Pg[n]=r),r))}function Ut(n,e){if(isNaN(n))return e?on:Jt;if(e){if(n<0)return on;if(n>=kg)return Rg}else{if(n<=-Eg)return Pt;if(n+1>=Eg)return Lg}return n<0?Ut(-n,e).neg():Ge(n%oo|0,n/oo|0,e)}function Ge(n,e,r){return new Je(n,e,r)}function qs(n,e,r){if(n.length===0)throw Error("empty string");if(typeof e=="number"?(r=e,e=!1):e=!!e,n==="NaN"||n==="Infinity"||n==="+Infinity"||n==="-Infinity")return e?on:Jt;if(r=r||10,r<2||36<r)throw RangeError("radix");var t;if((t=n.indexOf("-"))>0)throw Error("interior hyphen");if(t===0)return qs(n.substring(1),e,r).neg();for(var o=Ut($i(r,8)),i=Jt,a=0;a<n.length;a+=8){var u=Math.min(8,n.length-a),c=parseInt(n.substring(a,a+u),r);if(u<8){var p=Ut($i(r,u));i=i.mul(p).add(Ut(c))}else i=i.mul(o),i=i.add(Ut(c))}return i.unsigned=e,i}function Qt(n,e){return typeof n=="number"?Ut(n,e):typeof n=="string"?qs(n,e):Ge(n.low,n.high,typeof e=="boolean"?e:n.unsigned)}var Gt,Pg,Og,$i,Cg,cO,oo,kg,Eg,Dg,Jt,on,no,Ng,Hs,Lg,Rg,Pt,te,gn,Ks=W(()=>{Gt=null;try{Gt=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}Je.prototype.__isLong__;Object.defineProperty(Je.prototype,"__isLong__",{value:!0});Je.isLong=Tt;Pg={},Og={};Je.fromInt=Dn;Je.fromNumber=Ut;Je.fromBits=Ge;$i=Math.pow;Je.fromString=qs;Je.fromValue=Qt;Cg=65536,cO=1<<24,oo=Cg*Cg,kg=oo*oo,Eg=kg/2,Dg=Dn(cO),Jt=Dn(0);Je.ZERO=Jt;on=Dn(0,!0);Je.UZERO=on;no=Dn(1);Je.ONE=no;Ng=Dn(1,!0);Je.UONE=Ng;Hs=Dn(-1);Je.NEG_ONE=Hs;Lg=Ge(-1,2147483647,!1);Je.MAX_VALUE=Lg;Rg=Ge(-1,-1,!0);Je.MAX_UNSIGNED_VALUE=Rg;Pt=Ge(0,-2147483648,!1);Je.MIN_VALUE=Pt;te=Je.prototype;te.toInt=function(){return this.unsigned?this.low>>>0:this.low};te.toNumber=function(){return this.unsigned?(this.high>>>0)*oo+(this.low>>>0):this.high*oo+(this.low>>>0)};te.toString=function(e){if(e=e||10,e<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(Pt)){var r=Ut(e),t=this.div(r),o=t.mul(r).sub(this);return t.toString(e)+o.toInt().toString(e)}else return"-"+this.neg().toString(e);for(var i=Ut($i(e,6),this.unsigned),a=this,u="";;){var c=a.div(i),p=a.sub(c.mul(i)).toInt()>>>0,m=p.toString(e);if(a=c,a.isZero())return m+u;for(;m.length<6;)m="0"+m;u=""+m+u}};te.getHighBits=function(){return this.high};te.getHighBitsUnsigned=function(){return this.high>>>0};te.getLowBits=function(){return this.low};te.getLowBitsUnsigned=function(){return this.low>>>0};te.getNumBitsAbs=function(){if(this.isNegative())return this.eq(Pt)?64:this.neg().getNumBitsAbs();for(var e=this.high!=0?this.high:this.low,r=31;r>0&&(e&1<<r)==0;r--);return this.high!=0?r+33:r+1};te.isZero=function(){return this.high===0&&this.low===0};te.eqz=te.isZero;te.isNegative=function(){return!this.unsigned&&this.high<0};te.isPositive=function(){return this.unsigned||this.high>=0};te.isOdd=function(){return(this.low&1)===1};te.isEven=function(){return(this.low&1)===0};te.equals=function(e){return Tt(e)||(e=Qt(e)),this.unsigned!==e.unsigned&&this.high>>>31===1&&e.high>>>31===1?!1:this.high===e.high&&this.low===e.low};te.eq=te.equals;te.notEquals=function(e){return!this.eq(e)};te.neq=te.notEquals;te.ne=te.notEquals;te.lessThan=function(e){return this.comp(e)<0};te.lt=te.lessThan;te.lessThanOrEqual=function(e){return this.comp(e)<=0};te.lte=te.lessThanOrEqual;te.le=te.lessThanOrEqual;te.greaterThan=function(e){return this.comp(e)>0};te.gt=te.greaterThan;te.greaterThanOrEqual=function(e){return this.comp(e)>=0};te.gte=te.greaterThanOrEqual;te.ge=te.greaterThanOrEqual;te.compare=function(e){if(Tt(e)||(e=Qt(e)),this.eq(e))return 0;var r=this.isNegative(),t=e.isNegative();return r&&!t?-1:!r&&t?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1};te.comp=te.compare;te.negate=function(){return!this.unsigned&&this.eq(Pt)?Pt:this.not().add(no)};te.neg=te.negate;te.add=function(e){Tt(e)||(e=Qt(e));var r=this.high>>>16,t=this.high&65535,o=this.low>>>16,i=this.low&65535,a=e.high>>>16,u=e.high&65535,c=e.low>>>16,p=e.low&65535,m=0,b=0,_=0,x=0;return x+=i+p,_+=x>>>16,x&=65535,_+=o+c,b+=_>>>16,_&=65535,b+=t+u,m+=b>>>16,b&=65535,m+=r+a,m&=65535,Ge(_<<16|x,m<<16|b,this.unsigned)};te.subtract=function(e){return Tt(e)||(e=Qt(e)),this.add(e.neg())};te.sub=te.subtract;te.multiply=function(e){if(this.isZero())return this;if(Tt(e)||(e=Qt(e)),Gt){var r=Gt.mul(this.low,this.high,e.low,e.high);return Ge(r,Gt.get_high(),this.unsigned)}if(e.isZero())return this.unsigned?on:Jt;if(this.eq(Pt))return e.isOdd()?Pt:Jt;if(e.eq(Pt))return this.isOdd()?Pt:Jt;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(Dg)&&e.lt(Dg))return Ut(this.toNumber()*e.toNumber(),this.unsigned);var t=this.high>>>16,o=this.high&65535,i=this.low>>>16,a=this.low&65535,u=e.high>>>16,c=e.high&65535,p=e.low>>>16,m=e.low&65535,b=0,_=0,x=0,T=0;return T+=a*m,x+=T>>>16,T&=65535,x+=i*m,_+=x>>>16,x&=65535,x+=a*p,_+=x>>>16,x&=65535,_+=o*m,b+=_>>>16,_&=65535,_+=i*p,b+=_>>>16,_&=65535,_+=a*c,b+=_>>>16,_&=65535,b+=t*m+o*p+i*c+a*u,b&=65535,Ge(x<<16|T,b<<16|_,this.unsigned)};te.mul=te.multiply;te.divide=function(e){if(Tt(e)||(e=Qt(e)),e.isZero())throw Error("division by zero");if(Gt){if(!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1)return this;var r=(this.unsigned?Gt.div_u:Gt.div_s)(this.low,this.high,e.low,e.high);return Ge(r,Gt.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?on:Jt;var t,o,i;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return on;if(e.gt(this.shru(1)))return Ng;i=on}else{if(this.eq(Pt)){if(e.eq(no)||e.eq(Hs))return Pt;if(e.eq(Pt))return no;var a=this.shr(1);return t=a.div(e).shl(1),t.eq(Jt)?e.isNegative()?no:Hs:(o=this.sub(e.mul(t)),i=t.add(o.div(e)),i)}else if(e.eq(Pt))return this.unsigned?on:Jt;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();i=Jt}for(o=this;o.gte(e);){t=Math.max(1,Math.floor(o.toNumber()/e.toNumber()));for(var u=Math.ceil(Math.log(t)/Math.LN2),c=u<=48?1:$i(2,u-48),p=Ut(t),m=p.mul(e);m.isNegative()||m.gt(o);)t-=c,p=Ut(t,this.unsigned),m=p.mul(e);p.isZero()&&(p=no),i=i.add(p),o=o.sub(m)}return i};te.div=te.divide;te.modulo=function(e){if(Tt(e)||(e=Qt(e)),Gt){var r=(this.unsigned?Gt.rem_u:Gt.rem_s)(this.low,this.high,e.low,e.high);return Ge(r,Gt.get_high(),this.unsigned)}return this.sub(this.div(e).mul(e))};te.mod=te.modulo;te.rem=te.modulo;te.not=function(){return Ge(~this.low,~this.high,this.unsigned)};te.countLeadingZeros=function(){return this.high?Math.clz32(this.high):Math.clz32(this.low)+32};te.clz=te.countLeadingZeros;te.countTrailingZeros=function(){return this.low?Ag(this.low):Ag(this.high)+32};te.ctz=te.countTrailingZeros;te.and=function(e){return Tt(e)||(e=Qt(e)),Ge(this.low&e.low,this.high&e.high,this.unsigned)};te.or=function(e){return Tt(e)||(e=Qt(e)),Ge(this.low|e.low,this.high|e.high,this.unsigned)};te.xor=function(e){return Tt(e)||(e=Qt(e)),Ge(this.low^e.low,this.high^e.high,this.unsigned)};te.shiftLeft=function(e){return Tt(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?Ge(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):Ge(0,this.low<<e-32,this.unsigned)};te.shl=te.shiftLeft;te.shiftRight=function(e){return Tt(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?Ge(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):Ge(this.high>>e-32,this.high>=0?0:-1,this.unsigned)};te.shr=te.shiftRight;te.shiftRightUnsigned=function(e){return Tt(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?Ge(this.low>>>e|this.high<<32-e,this.high>>>e,this.unsigned):e===32?Ge(this.high,0,this.unsigned):Ge(this.high>>>e-32,0,this.unsigned)};te.shru=te.shiftRightUnsigned;te.shr_u=te.shiftRightUnsigned;te.rotateLeft=function(e){var r;return Tt(e)&&(e=e.toInt()),(e&=63)===0?this:e===32?Ge(this.high,this.low,this.unsigned):e<32?(r=32-e,Ge(this.low<<e|this.high>>>r,this.high<<e|this.low>>>r,this.unsigned)):(e-=32,r=32-e,Ge(this.high<<e|this.low>>>r,this.low<<e|this.high>>>r,this.unsigned))};te.rotl=te.rotateLeft;te.rotateRight=function(e){var r;return Tt(e)&&(e=e.toInt()),(e&=63)===0?this:e===32?Ge(this.high,this.low,this.unsigned):e<32?(r=32-e,Ge(this.high<<r|this.low>>>e,this.low<<r|this.high>>>e,this.unsigned)):(e-=32,r=32-e,Ge(this.low<<r|this.high>>>e,this.high<<r|this.low>>>e,this.unsigned))};te.rotr=te.rotateRight;te.toSigned=function(){return this.unsigned?Ge(this.low,this.high,!1):this};te.toUnsigned=function(){return this.unsigned?this:Ge(this.low,this.high,!0)};te.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()};te.toBytesLE=function(){var e=this.high,r=this.low;return[r&255,r>>>8&255,r>>>16&255,r>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]};te.toBytesBE=function(){var e=this.high,r=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,r>>>24,r>>>16&255,r>>>8&255,r&255]};Je.fromBytes=function(e,r,t){return t?Je.fromBytesLE(e,r):Je.fromBytesBE(e,r)};Je.fromBytesLE=function(e,r){return new Je(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,r)};Je.fromBytesBE=function(e,r){return new Je(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],r)};gn=Je});var Xs=pe(Ai=>{"use strict";Object.defineProperty(Ai,"__esModule",{value:!0});Ai.ArgType=void 0;var zg;(function(n){n[n.INPUT=0]="INPUT",n[n.OUTPUT=1]="OUTPUT"})(zg||(Ai.ArgType=zg={}))});var kn=pe(dr=>{"use strict";Object.defineProperty(dr,"__esModule",{value:!0});dr.SIZE_PREFIX_LENGTH=dr.FILE_IDENTIFIER_LENGTH=dr.SIZEOF_INT=dr.SIZEOF_SHORT=void 0;dr.SIZEOF_SHORT=2;dr.SIZEOF_INT=4;dr.FILE_IDENTIFIER_LENGTH=4;dr.SIZE_PREFIX_LENGTH=4});var Ys=pe(jt=>{"use strict";Object.defineProperty(jt,"__esModule",{value:!0});jt.isLittleEndian=jt.float64=jt.float32=jt.int32=void 0;jt.int32=new Int32Array(2);jt.float32=new Float32Array(jt.int32.buffer);jt.float64=new Float64Array(jt.int32.buffer);jt.isLittleEndian=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1});var Zs=pe(Pi=>{"use strict";Object.defineProperty(Pi,"__esModule",{value:!0});Pi.Encoding=void 0;var Mg;(function(n){n[n.UTF8_BYTES=1]="UTF8_BYTES",n[n.UTF16_STRING=2]="UTF16_STRING"})(Mg||(Pi.Encoding=Mg={}))});var Qs=pe(Oi=>{"use strict";Object.defineProperty(Oi,"__esModule",{value:!0});Oi.ByteBuffer=void 0;var fr=kn(),Ot=Ys(),dO=Zs(),Js=class n{constructor(e){this.bytes_=e,this.position_=0,this.text_decoder_=new TextDecoder}static allocate(e){return new n(new Uint8Array(e))}clear(){this.position_=0}bytes(){return this.bytes_}position(){return this.position_}setPosition(e){this.position_=e}capacity(){return this.bytes_.length}readInt8(e){return this.readUint8(e)<<24>>24}readUint8(e){return this.bytes_[e]}readInt16(e){return this.readUint16(e)<<16>>16}readUint16(e){return this.bytes_[e]|this.bytes_[e+1]<<8}readInt32(e){return this.bytes_[e]|this.bytes_[e+1]<<8|this.bytes_[e+2]<<16|this.bytes_[e+3]<<24}readUint32(e){return this.readInt32(e)>>>0}readInt64(e){return BigInt.asIntN(64,BigInt(this.readUint32(e))+(BigInt(this.readUint32(e+4))<<BigInt(32)))}readUint64(e){return BigInt.asUintN(64,BigInt(this.readUint32(e))+(BigInt(this.readUint32(e+4))<<BigInt(32)))}readFloat32(e){return Ot.int32[0]=this.readInt32(e),Ot.float32[0]}readFloat64(e){return Ot.int32[Ot.isLittleEndian?0:1]=this.readInt32(e),Ot.int32[Ot.isLittleEndian?1:0]=this.readInt32(e+4),Ot.float64[0]}writeInt8(e,r){this.bytes_[e]=r}writeUint8(e,r){this.bytes_[e]=r}writeInt16(e,r){this.bytes_[e]=r,this.bytes_[e+1]=r>>8}writeUint16(e,r){this.bytes_[e]=r,this.bytes_[e+1]=r>>8}writeInt32(e,r){this.bytes_[e]=r,this.bytes_[e+1]=r>>8,this.bytes_[e+2]=r>>16,this.bytes_[e+3]=r>>24}writeUint32(e,r){this.bytes_[e]=r,this.bytes_[e+1]=r>>8,this.bytes_[e+2]=r>>16,this.bytes_[e+3]=r>>24}writeInt64(e,r){this.writeInt32(e,Number(BigInt.asIntN(32,r))),this.writeInt32(e+4,Number(BigInt.asIntN(32,r>>BigInt(32))))}writeUint64(e,r){this.writeUint32(e,Number(BigInt.asUintN(32,r))),this.writeUint32(e+4,Number(BigInt.asUintN(32,r>>BigInt(32))))}writeFloat32(e,r){Ot.float32[0]=r,this.writeInt32(e,Ot.int32[0])}writeFloat64(e,r){Ot.float64[0]=r,this.writeInt32(e,Ot.int32[Ot.isLittleEndian?0:1]),this.writeInt32(e+4,Ot.int32[Ot.isLittleEndian?1:0])}getBufferIdentifier(){if(this.bytes_.length<this.position_+fr.SIZEOF_INT+fr.FILE_IDENTIFIER_LENGTH)throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");let e="";for(let r=0;r<fr.FILE_IDENTIFIER_LENGTH;r++)e+=String.fromCharCode(this.readInt8(this.position_+fr.SIZEOF_INT+r));return e}__offset(e,r){let t=e-this.readInt32(e);return r<this.readInt16(t)?this.readInt16(t+r):0}__union(e,r){return e.bb_pos=r+this.readInt32(r),e.bb=this,e}__string(e,r){e+=this.readInt32(e);let t=this.readInt32(e);e+=fr.SIZEOF_INT;let o=this.bytes_.subarray(e,e+t);return r===dO.Encoding.UTF8_BYTES?o:this.text_decoder_.decode(o)}__union_with_string(e,r){return typeof e=="string"?this.__string(r):this.__union(e,r)}__indirect(e){return e+this.readInt32(e)}__vector(e){return e+this.readInt32(e)+fr.SIZEOF_INT}__vector_len(e){return this.readInt32(e+this.readInt32(e))}__has_identifier(e){if(e.length!=fr.FILE_IDENTIFIER_LENGTH)throw new Error("FlatBuffers: file identifier must be length "+fr.FILE_IDENTIFIER_LENGTH);for(let r=0;r<fr.FILE_IDENTIFIER_LENGTH;r++)if(e.charCodeAt(r)!=this.readInt8(this.position()+fr.SIZEOF_INT+r))return!1;return!0}createScalarList(e,r){let t=[];for(let o=0;o<r;++o){let i=e(o);i!==null&&t.push(i)}return t}createObjList(e,r){let t=[];for(let o=0;o<r;++o){let i=e(o);i!==null&&t.push(i.unpack())}return t}};Oi.ByteBuffer=Js});var Fg=pe(Ci=>{"use strict";Object.defineProperty(Ci,"__esModule",{value:!0});Ci.Builder=void 0;var Bg=Qs(),zt=kn(),eu=class n{constructor(e){this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null,this.text_encoder=new TextEncoder;let r;e?r=e:r=1024,this.bb=Bg.ByteBuffer.allocate(r),this.space=r}clear(){this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null}forceDefaults(e){this.force_defaults=e}dataBuffer(){return this.bb}asUint8Array(){return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())}prep(e,r){e>this.minalign&&(this.minalign=e);let t=~(this.bb.capacity()-this.space+r)+1&e-1;for(;this.space<t+e+r;){let o=this.bb.capacity();this.bb=n.growByteBuffer(this.bb),this.space+=this.bb.capacity()-o}this.pad(t)}pad(e){for(let r=0;r<e;r++)this.bb.writeInt8(--this.space,0)}writeInt8(e){this.bb.writeInt8(this.space-=1,e)}writeInt16(e){this.bb.writeInt16(this.space-=2,e)}writeInt32(e){this.bb.writeInt32(this.space-=4,e)}writeInt64(e){this.bb.writeInt64(this.space-=8,e)}writeFloat32(e){this.bb.writeFloat32(this.space-=4,e)}writeFloat64(e){this.bb.writeFloat64(this.space-=8,e)}addInt8(e){this.prep(1,0),this.writeInt8(e)}addInt16(e){this.prep(2,0),this.writeInt16(e)}addInt32(e){this.prep(4,0),this.writeInt32(e)}addInt64(e){this.prep(8,0),this.writeInt64(e)}addFloat32(e){this.prep(4,0),this.writeFloat32(e)}addFloat64(e){this.prep(8,0),this.writeFloat64(e)}addFieldInt8(e,r,t){(this.force_defaults||r!=t)&&(this.addInt8(r),this.slot(e))}addFieldInt16(e,r,t){(this.force_defaults||r!=t)&&(this.addInt16(r),this.slot(e))}addFieldInt32(e,r,t){(this.force_defaults||r!=t)&&(this.addInt32(r),this.slot(e))}addFieldInt64(e,r,t){(this.force_defaults||r!==t)&&(this.addInt64(r),this.slot(e))}addFieldFloat32(e,r,t){(this.force_defaults||r!=t)&&(this.addFloat32(r),this.slot(e))}addFieldFloat64(e,r,t){(this.force_defaults||r!=t)&&(this.addFloat64(r),this.slot(e))}addFieldOffset(e,r,t){(this.force_defaults||r!=t)&&(this.addOffset(r),this.slot(e))}addFieldStruct(e,r,t){r!=t&&(this.nested(r),this.slot(e))}nested(e){if(e!=this.offset())throw new TypeError("FlatBuffers: struct must be serialized inline.")}notNested(){if(this.isNested)throw new TypeError("FlatBuffers: object serialization must not be nested.")}slot(e){this.vtable!==null&&(this.vtable[e]=this.offset())}offset(){return this.bb.capacity()-this.space}static growByteBuffer(e){let r=e.capacity();if(r&3221225472)throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");let t=r<<1,o=Bg.ByteBuffer.allocate(t);return o.setPosition(t-r),o.bytes().set(e.bytes(),t-r),o}addOffset(e){this.prep(zt.SIZEOF_INT,0),this.writeInt32(this.offset()-e+zt.SIZEOF_INT)}startObject(e){this.notNested(),this.vtable==null&&(this.vtable=[]),this.vtable_in_use=e;for(let r=0;r<e;r++)this.vtable[r]=0;this.isNested=!0,this.object_start=this.offset()}endObject(){if(this.vtable==null||!this.isNested)throw new Error("FlatBuffers: endObject called without startObject");this.addInt32(0);let e=this.offset(),r=this.vtable_in_use-1;for(;r>=0&&this.vtable[r]==0;r--);let t=r+1;for(;r>=0;r--)this.addInt16(this.vtable[r]!=0?e-this.vtable[r]:0);let o=2;this.addInt16(e-this.object_start);let i=(t+o)*zt.SIZEOF_SHORT;this.addInt16(i);let a=0,u=this.space;e:for(r=0;r<this.vtables.length;r++){let c=this.bb.capacity()-this.vtables[r];if(i==this.bb.readInt16(c)){for(let p=zt.SIZEOF_SHORT;p<i;p+=zt.SIZEOF_SHORT)if(this.bb.readInt16(u+p)!=this.bb.readInt16(c+p))continue e;a=this.vtables[r];break}}return a?(this.space=this.bb.capacity()-e,this.bb.writeInt32(this.space,a-e)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-e,this.offset()-e)),this.isNested=!1,e}finish(e,r,t){let o=t?zt.SIZE_PREFIX_LENGTH:0;if(r){let i=r;if(this.prep(this.minalign,zt.SIZEOF_INT+zt.FILE_IDENTIFIER_LENGTH+o),i.length!=zt.FILE_IDENTIFIER_LENGTH)throw new TypeError("FlatBuffers: file identifier must be length "+zt.FILE_IDENTIFIER_LENGTH);for(let a=zt.FILE_IDENTIFIER_LENGTH-1;a>=0;a--)this.writeInt8(i.charCodeAt(a))}this.prep(this.minalign,zt.SIZEOF_INT+o),this.addOffset(e),o&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)}finishSizePrefixed(e,r){this.finish(e,r,!0)}requiredField(e,r){let t=this.bb.capacity()-e,o=t-this.bb.readInt32(t);if(!(r<this.bb.readInt16(o)&&this.bb.readInt16(o+r)!=0))throw new TypeError("FlatBuffers: field "+r+" must be set")}startVector(e,r,t){this.notNested(),this.vector_num_elems=r,this.prep(zt.SIZEOF_INT,e*r),this.prep(t,e*r)}endVector(){return this.writeInt32(this.vector_num_elems),this.offset()}createSharedString(e){if(!e)return 0;if(this.string_maps||(this.string_maps=new Map),this.string_maps.has(e))return this.string_maps.get(e);let r=this.createString(e);return this.string_maps.set(e,r),r}createString(e){if(e==null)return 0;let r;return e instanceof Uint8Array?r=e:r=this.text_encoder.encode(e),this.addInt8(0),this.startVector(1,r.length,1),this.bb.setPosition(this.space-=r.length),this.bb.bytes().set(r,this.space),this.endVector()}createByteVector(e){return e==null?0:(this.startVector(1,e.length,1),this.bb.setPosition(this.space-=e.length),this.bb.bytes().set(e,this.space),this.endVector())}createObjectOffset(e){return e===null?0:typeof e=="string"?this.createString(e):e.pack(this)}createObjectOffsetList(e){let r=[];for(let t=0;t<e.length;++t){let o=e[t];if(o!==null)r.push(this.createObjectOffset(o));else throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.")}return r}createStructOffsetList(e,r){return r(this,e.length),this.createObjectOffsetList(e.slice().reverse()),this.endVector()}};Ci.Builder=eu});var Ue=pe(nt=>{"use strict";Object.defineProperty(nt,"__esModule",{value:!0});nt.ByteBuffer=nt.Builder=nt.Encoding=nt.isLittleEndian=nt.float64=nt.float32=nt.int32=nt.SIZE_PREFIX_LENGTH=nt.FILE_IDENTIFIER_LENGTH=nt.SIZEOF_INT=nt.SIZEOF_SHORT=void 0;var fO=kn();Object.defineProperty(nt,"SIZEOF_SHORT",{enumerable:!0,get:function(){return fO.SIZEOF_SHORT}});var pO=kn();Object.defineProperty(nt,"SIZEOF_INT",{enumerable:!0,get:function(){return pO.SIZEOF_INT}});var hO=kn();Object.defineProperty(nt,"FILE_IDENTIFIER_LENGTH",{enumerable:!0,get:function(){return hO.FILE_IDENTIFIER_LENGTH}});var mO=kn();Object.defineProperty(nt,"SIZE_PREFIX_LENGTH",{enumerable:!0,get:function(){return mO.SIZE_PREFIX_LENGTH}});var Ei=Ys();Object.defineProperty(nt,"int32",{enumerable:!0,get:function(){return Ei.int32}});Object.defineProperty(nt,"float32",{enumerable:!0,get:function(){return Ei.float32}});Object.defineProperty(nt,"float64",{enumerable:!0,get:function(){return Ei.float64}});Object.defineProperty(nt,"isLittleEndian",{enumerable:!0,get:function(){return Ei.isLittleEndian}});var gO=Zs();Object.defineProperty(nt,"Encoding",{enumerable:!0,get:function(){return gO.Encoding}});var yO=Fg();Object.defineProperty(nt,"Builder",{enumerable:!0,get:function(){return yO.Builder}});var bO=Qs();Object.defineProperty(nt,"ByteBuffer",{enumerable:!0,get:function(){return bO.ByteBuffer}})});var ru=pe(pr=>{"use strict";var _O=pr&&pr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),vO=pr&&pr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),wO=pr&&pr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&_O(e,n,r);return vO(e,n),e};Object.defineProperty(pr,"__esModule",{value:!0});pr.ArgTypeAndIndex=void 0;var xO=wO(Ue()),Vg=Xs(),tu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsArgTypeAndIndex(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsArgTypeAndIndex(e,r){return e.setPosition(e.position()+xO.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}argType(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt8(this.bb_pos+e):Vg.ArgType.INPUT}index(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readUint32(this.bb_pos+e):0}static startArgTypeAndIndex(e){e.startObject(2)}static addArgType(e,r){e.addFieldInt8(0,r,Vg.ArgType.INPUT)}static addIndex(e,r){e.addFieldInt32(1,r,0)}static endArgTypeAndIndex(e){return e.endObject()}static createArgTypeAndIndex(e,r,t){return n.startArgTypeAndIndex(e),n.addArgType(e,r),n.addIndex(e,t),n.endArgTypeAndIndex(e)}};pr.ArgTypeAndIndex=tu});var nu=pe(Di=>{"use strict";Object.defineProperty(Di,"__esModule",{value:!0});Di.AttributeType=void 0;var Gg;(function(n){n[n.UNDEFINED=0]="UNDEFINED",n[n.FLOAT=1]="FLOAT",n[n.INT=2]="INT",n[n.STRING=3]="STRING",n[n.TENSOR=4]="TENSOR",n[n.GRAPH=5]="GRAPH",n[n.FLOATS=6]="FLOATS",n[n.INTS=7]="INTS",n[n.STRINGS=8]="STRINGS",n[n.TENSORS=9]="TENSORS",n[n.GRAPHS=10]="GRAPHS",n[n.SPARSE_TENSOR=11]="SPARSE_TENSOR",n[n.SPARSE_TENSORS=12]="SPARSE_TENSORS"})(Gg||(Di.AttributeType=Gg={}))});var ou=pe(ki=>{"use strict";Object.defineProperty(ki,"__esModule",{value:!0});ki.NodeType=void 0;var Ug;(function(n){n[n.Primitive=0]="Primitive",n[n.Fused=1]="Fused"})(Ug||(ki.NodeType=Ug={}))});var au=pe(hr=>{"use strict";var TO=hr&&hr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),IO=hr&&hr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),SO=hr&&hr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&TO(e,n,r);return IO(e,n),e};Object.defineProperty(hr,"__esModule",{value:!0});hr.Node=void 0;var $O=SO(Ue()),AO=su(),jg=ou(),iu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsNode(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsNode(e,r){return e.setPosition(e.position()+$O.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}name(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}docString(e){let r=this.bb.__offset(this.bb_pos,6);return r?this.bb.__string(this.bb_pos+r,e):null}domain(e){let r=this.bb.__offset(this.bb_pos,8);return r?this.bb.__string(this.bb_pos+r,e):null}sinceVersion(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readInt32(this.bb_pos+e):0}index(){let e=this.bb.__offset(this.bb_pos,12);return e?this.bb.readUint32(this.bb_pos+e):0}opType(e){let r=this.bb.__offset(this.bb_pos,14);return r?this.bb.__string(this.bb_pos+r,e):null}type(){let e=this.bb.__offset(this.bb_pos,16);return e?this.bb.readInt32(this.bb_pos+e):jg.NodeType.Primitive}executionProviderType(e){let r=this.bb.__offset(this.bb_pos,18);return r?this.bb.__string(this.bb_pos+r,e):null}inputs(e,r){let t=this.bb.__offset(this.bb_pos,20);return t?this.bb.__string(this.bb.__vector(this.bb_pos+t)+e*4,r):null}inputsLength(){let e=this.bb.__offset(this.bb_pos,20);return e?this.bb.__vector_len(this.bb_pos+e):0}outputs(e,r){let t=this.bb.__offset(this.bb_pos,22);return t?this.bb.__string(this.bb.__vector(this.bb_pos+t)+e*4,r):null}outputsLength(){let e=this.bb.__offset(this.bb_pos,22);return e?this.bb.__vector_len(this.bb_pos+e):0}attributes(e,r){let t=this.bb.__offset(this.bb_pos,24);return t?(r||new AO.Attribute).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}attributesLength(){let e=this.bb.__offset(this.bb_pos,24);return e?this.bb.__vector_len(this.bb_pos+e):0}inputArgCounts(e){let r=this.bb.__offset(this.bb_pos,26);return r?this.bb.readInt32(this.bb.__vector(this.bb_pos+r)+e*4):0}inputArgCountsLength(){let e=this.bb.__offset(this.bb_pos,26);return e?this.bb.__vector_len(this.bb_pos+e):0}inputArgCountsArray(){let e=this.bb.__offset(this.bb_pos,26);return e?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}implicitInputs(e,r){let t=this.bb.__offset(this.bb_pos,28);return t?this.bb.__string(this.bb.__vector(this.bb_pos+t)+e*4,r):null}implicitInputsLength(){let e=this.bb.__offset(this.bb_pos,28);return e?this.bb.__vector_len(this.bb_pos+e):0}static startNode(e){e.startObject(13)}static addName(e,r){e.addFieldOffset(0,r,0)}static addDocString(e,r){e.addFieldOffset(1,r,0)}static addDomain(e,r){e.addFieldOffset(2,r,0)}static addSinceVersion(e,r){e.addFieldInt32(3,r,0)}static addIndex(e,r){e.addFieldInt32(4,r,0)}static addOpType(e,r){e.addFieldOffset(5,r,0)}static addType(e,r){e.addFieldInt32(6,r,jg.NodeType.Primitive)}static addExecutionProviderType(e,r){e.addFieldOffset(7,r,0)}static addInputs(e,r){e.addFieldOffset(8,r,0)}static createInputsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startInputsVector(e,r){e.startVector(4,r,4)}static addOutputs(e,r){e.addFieldOffset(9,r,0)}static createOutputsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startOutputsVector(e,r){e.startVector(4,r,4)}static addAttributes(e,r){e.addFieldOffset(10,r,0)}static createAttributesVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startAttributesVector(e,r){e.startVector(4,r,4)}static addInputArgCounts(e,r){e.addFieldOffset(11,r,0)}static createInputArgCountsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addInt32(r[t]);return e.endVector()}static startInputArgCountsVector(e,r){e.startVector(4,r,4)}static addImplicitInputs(e,r){e.addFieldOffset(12,r,0)}static createImplicitInputsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startImplicitInputsVector(e,r){e.startVector(4,r,4)}static endNode(e){return e.endObject()}static createNode(e,r,t,o,i,a,u,c,p,m,b,_,x,T){return n.startNode(e),n.addName(e,r),n.addDocString(e,t),n.addDomain(e,o),n.addSinceVersion(e,i),n.addIndex(e,a),n.addOpType(e,u),n.addType(e,c),n.addExecutionProviderType(e,p),n.addInputs(e,m),n.addOutputs(e,b),n.addAttributes(e,_),n.addInputArgCounts(e,x),n.addImplicitInputs(e,T),n.endNode(e)}};hr.Node=iu});var lu=pe(Ni=>{"use strict";Object.defineProperty(Ni,"__esModule",{value:!0});Ni.EdgeEnd=void 0;var uu=class{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}nodeIndex(){return this.bb.readUint32(this.bb_pos)}srcArgIndex(){return this.bb.readInt32(this.bb_pos+4)}dstArgIndex(){return this.bb.readInt32(this.bb_pos+8)}static sizeOf(){return 12}static createEdgeEnd(e,r,t,o){return e.prep(4,12),e.writeInt32(o),e.writeInt32(t),e.writeInt32(r),e.offset()}};Ni.EdgeEnd=uu});var du=pe(mr=>{"use strict";var PO=mr&&mr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),OO=mr&&mr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),CO=mr&&mr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&PO(e,n,r);return OO(e,n),e};Object.defineProperty(mr,"__esModule",{value:!0});mr.NodeEdge=void 0;var EO=CO(Ue()),Wg=lu(),cu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsNodeEdge(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsNodeEdge(e,r){return e.setPosition(e.position()+EO.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}nodeIndex(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readUint32(this.bb_pos+e):0}inputEdges(e,r){let t=this.bb.__offset(this.bb_pos,6);return t?(r||new Wg.EdgeEnd).__init(this.bb.__vector(this.bb_pos+t)+e*12,this.bb):null}inputEdgesLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}outputEdges(e,r){let t=this.bb.__offset(this.bb_pos,8);return t?(r||new Wg.EdgeEnd).__init(this.bb.__vector(this.bb_pos+t)+e*12,this.bb):null}outputEdgesLength(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__vector_len(this.bb_pos+e):0}static startNodeEdge(e){e.startObject(3)}static addNodeIndex(e,r){e.addFieldInt32(0,r,0)}static addInputEdges(e,r){e.addFieldOffset(1,r,0)}static startInputEdgesVector(e,r){e.startVector(12,r,4)}static addOutputEdges(e,r){e.addFieldOffset(2,r,0)}static startOutputEdgesVector(e,r){e.startVector(12,r,4)}static endNodeEdge(e){return e.endObject()}static createNodeEdge(e,r,t,o){return n.startNodeEdge(e),n.addNodeIndex(e,r),n.addInputEdges(e,t),n.addOutputEdges(e,o),n.endNodeEdge(e)}};mr.NodeEdge=cu});var pu=pe(gr=>{"use strict";var DO=gr&&gr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),kO=gr&&gr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),NO=gr&&gr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&DO(e,n,r);return kO(e,n),e};Object.defineProperty(gr,"__esModule",{value:!0});gr.NodesToOptimizeIndices=void 0;var LO=NO(Ue()),fu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsNodesToOptimizeIndices(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsNodesToOptimizeIndices(e,r){return e.setPosition(e.position()+LO.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}nodeIndices(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.readUint32(this.bb.__vector(this.bb_pos+r)+e*4):0}nodeIndicesLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}nodeIndicesArray(){let e=this.bb.__offset(this.bb_pos,4);return e?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}numInputs(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readUint32(this.bb_pos+e):0}numOutputs(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.readUint32(this.bb_pos+e):0}hasVariadicInput(){let e=this.bb.__offset(this.bb_pos,10);return e?!!this.bb.readInt8(this.bb_pos+e):!1}hasVariadicOutput(){let e=this.bb.__offset(this.bb_pos,12);return e?!!this.bb.readInt8(this.bb_pos+e):!1}numVariadicInputs(){let e=this.bb.__offset(this.bb_pos,14);return e?this.bb.readUint32(this.bb_pos+e):0}numVariadicOutputs(){let e=this.bb.__offset(this.bb_pos,16);return e?this.bb.readUint32(this.bb_pos+e):0}static startNodesToOptimizeIndices(e){e.startObject(7)}static addNodeIndices(e,r){e.addFieldOffset(0,r,0)}static createNodeIndicesVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addInt32(r[t]);return e.endVector()}static startNodeIndicesVector(e,r){e.startVector(4,r,4)}static addNumInputs(e,r){e.addFieldInt32(1,r,0)}static addNumOutputs(e,r){e.addFieldInt32(2,r,0)}static addHasVariadicInput(e,r){e.addFieldInt8(3,+r,0)}static addHasVariadicOutput(e,r){e.addFieldInt8(4,+r,0)}static addNumVariadicInputs(e,r){e.addFieldInt32(5,r,0)}static addNumVariadicOutputs(e,r){e.addFieldInt32(6,r,0)}static endNodesToOptimizeIndices(e){return e.endObject()}static createNodesToOptimizeIndices(e,r,t,o,i,a,u,c){return n.startNodesToOptimizeIndices(e),n.addNodeIndices(e,r),n.addNumInputs(e,t),n.addNumOutputs(e,o),n.addHasVariadicInput(e,i),n.addHasVariadicOutput(e,a),n.addNumVariadicInputs(e,u),n.addNumVariadicOutputs(e,c),n.endNodesToOptimizeIndices(e)}};gr.NodesToOptimizeIndices=fu});var mu=pe(yr=>{"use strict";var RO=yr&&yr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),zO=yr&&yr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),MO=yr&&yr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&RO(e,n,r);return zO(e,n),e};Object.defineProperty(yr,"__esModule",{value:!0});yr.RuntimeOptimizationRecord=void 0;var BO=MO(Ue()),FO=pu(),hu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsRuntimeOptimizationRecord(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsRuntimeOptimizationRecord(e,r){return e.setPosition(e.position()+BO.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}actionId(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}nodesToOptimizeIndices(e){let r=this.bb.__offset(this.bb_pos,6);return r?(e||new FO.NodesToOptimizeIndices).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}producedOpIds(e,r){let t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__string(this.bb.__vector(this.bb_pos+t)+e*4,r):null}producedOpIdsLength(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.__vector_len(this.bb_pos+e):0}static startRuntimeOptimizationRecord(e){e.startObject(4)}static addActionId(e,r){e.addFieldOffset(0,r,0)}static addNodesToOptimizeIndices(e,r){e.addFieldOffset(1,r,0)}static addProducedOpIds(e,r){e.addFieldOffset(3,r,0)}static createProducedOpIdsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startProducedOpIdsVector(e,r){e.startVector(4,r,4)}static endRuntimeOptimizationRecord(e){return e.endObject()}};yr.RuntimeOptimizationRecord=hu});var yu=pe(br=>{"use strict";var VO=br&&br.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),GO=br&&br.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),UO=br&&br.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&VO(e,n,r);return GO(e,n),e};Object.defineProperty(br,"__esModule",{value:!0});br.RuntimeOptimizationRecordContainerEntry=void 0;var jO=UO(Ue()),WO=mu(),gu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsRuntimeOptimizationRecordContainerEntry(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsRuntimeOptimizationRecordContainerEntry(e,r){return e.setPosition(e.position()+jO.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}optimizerName(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}runtimeOptimizationRecords(e,r){let t=this.bb.__offset(this.bb_pos,6);return t?(r||new WO.RuntimeOptimizationRecord).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}runtimeOptimizationRecordsLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}static startRuntimeOptimizationRecordContainerEntry(e){e.startObject(2)}static addOptimizerName(e,r){e.addFieldOffset(0,r,0)}static addRuntimeOptimizationRecords(e,r){e.addFieldOffset(1,r,0)}static createRuntimeOptimizationRecordsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startRuntimeOptimizationRecordsVector(e,r){e.startVector(4,r,4)}static endRuntimeOptimizationRecordContainerEntry(e){let r=e.endObject();return e.requiredField(r,4),r}static createRuntimeOptimizationRecordContainerEntry(e,r,t){return n.startRuntimeOptimizationRecordContainerEntry(e),n.addOptimizerName(e,r),n.addRuntimeOptimizationRecords(e,t),n.endRuntimeOptimizationRecordContainerEntry(e)}};br.RuntimeOptimizationRecordContainerEntry=gu});var _u=pe(_r=>{"use strict";var HO=_r&&_r.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),qO=_r&&_r.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),KO=_r&&_r.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&HO(e,n,r);return qO(e,n),e};Object.defineProperty(_r,"__esModule",{value:!0});_r.RuntimeOptimizations=void 0;var XO=KO(Ue()),YO=yu(),bu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsRuntimeOptimizations(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsRuntimeOptimizations(e,r){return e.setPosition(e.position()+XO.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}records(e,r){let t=this.bb.__offset(this.bb_pos,4);return t?(r||new YO.RuntimeOptimizationRecordContainerEntry).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}recordsLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}static startRuntimeOptimizations(e){e.startObject(1)}static addRecords(e,r){e.addFieldOffset(0,r,0)}static createRecordsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startRecordsVector(e,r){e.startVector(4,r,4)}static endRuntimeOptimizations(e){return e.endObject()}static createRuntimeOptimizations(e,r){return n.startRuntimeOptimizations(e),n.addRecords(e,r),n.endRuntimeOptimizations(e)}};_r.RuntimeOptimizations=bu});var Oo=pe(Li=>{"use strict";Object.defineProperty(Li,"__esModule",{value:!0});Li.TensorDataType=void 0;var Hg;(function(n){n[n.UNDEFINED=0]="UNDEFINED",n[n.FLOAT=1]="FLOAT",n[n.UINT8=2]="UINT8",n[n.INT8=3]="INT8",n[n.UINT16=4]="UINT16",n[n.INT16=5]="INT16",n[n.INT32=6]="INT32",n[n.INT64=7]="INT64",n[n.STRING=8]="STRING",n[n.BOOL=9]="BOOL",n[n.FLOAT16=10]="FLOAT16",n[n.DOUBLE=11]="DOUBLE",n[n.UINT32=12]="UINT32",n[n.UINT64=13]="UINT64",n[n.COMPLEX64=14]="COMPLEX64",n[n.COMPLEX128=15]="COMPLEX128",n[n.BFLOAT16=16]="BFLOAT16",n[n.FLOAT8E4M3FN=17]="FLOAT8E4M3FN",n[n.FLOAT8E4M3FNUZ=18]="FLOAT8E4M3FNUZ",n[n.FLOAT8E5M2=19]="FLOAT8E5M2",n[n.FLOAT8E5M2FNUZ=20]="FLOAT8E5M2FNUZ"})(Hg||(Li.TensorDataType=Hg={}))});var Co=pe(vr=>{"use strict";var ZO=vr&&vr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),JO=vr&&vr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),QO=vr&&vr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&ZO(e,n,r);return JO(e,n),e};Object.defineProperty(vr,"__esModule",{value:!0});vr.Tensor=void 0;var eC=QO(Ue()),qg=Oo(),vu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsTensor(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsTensor(e,r){return e.setPosition(e.position()+eC.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}name(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}docString(e){let r=this.bb.__offset(this.bb_pos,6);return r?this.bb.__string(this.bb_pos+r,e):null}dims(e){let r=this.bb.__offset(this.bb_pos,8);return r?this.bb.readInt64(this.bb.__vector(this.bb_pos+r)+e*8):BigInt(0)}dimsLength(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__vector_len(this.bb_pos+e):0}dataType(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readInt32(this.bb_pos+e):qg.TensorDataType.UNDEFINED}rawData(e){let r=this.bb.__offset(this.bb_pos,12);return r?this.bb.readUint8(this.bb.__vector(this.bb_pos+r)+e):0}rawDataLength(){let e=this.bb.__offset(this.bb_pos,12);return e?this.bb.__vector_len(this.bb_pos+e):0}rawDataArray(){let e=this.bb.__offset(this.bb_pos,12);return e?new Uint8Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}stringData(e,r){let t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__string(this.bb.__vector(this.bb_pos+t)+e*4,r):null}stringDataLength(){let e=this.bb.__offset(this.bb_pos,14);return e?this.bb.__vector_len(this.bb_pos+e):0}externalDataOffset(){let e=this.bb.__offset(this.bb_pos,16);return e?this.bb.readInt64(this.bb_pos+e):BigInt("-1")}static startTensor(e){e.startObject(7)}static addName(e,r){e.addFieldOffset(0,r,0)}static addDocString(e,r){e.addFieldOffset(1,r,0)}static addDims(e,r){e.addFieldOffset(2,r,0)}static createDimsVector(e,r){e.startVector(8,r.length,8);for(let t=r.length-1;t>=0;t--)e.addInt64(r[t]);return e.endVector()}static startDimsVector(e,r){e.startVector(8,r,8)}static addDataType(e,r){e.addFieldInt32(3,r,qg.TensorDataType.UNDEFINED)}static addRawData(e,r){e.addFieldOffset(4,r,0)}static createRawDataVector(e,r){e.startVector(1,r.length,1);for(let t=r.length-1;t>=0;t--)e.addInt8(r[t]);return e.endVector()}static startRawDataVector(e,r){e.startVector(1,r,1)}static addStringData(e,r){e.addFieldOffset(5,r,0)}static createStringDataVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startStringDataVector(e,r){e.startVector(4,r,4)}static addExternalDataOffset(e,r){e.addFieldInt64(6,r,BigInt("-1"))}static endTensor(e){return e.endObject()}static createTensor(e,r,t,o,i,a,u,c){return n.startTensor(e),n.addName(e,r),n.addDocString(e,t),n.addDims(e,o),n.addDataType(e,i),n.addRawData(e,a),n.addStringData(e,u),n.addExternalDataOffset(e,c),n.endTensor(e)}};vr.Tensor=vu});var xu=pe(wr=>{"use strict";var tC=wr&&wr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),rC=wr&&wr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),nC=wr&&wr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&tC(e,n,r);return rC(e,n),e};Object.defineProperty(wr,"__esModule",{value:!0});wr.SparseTensor=void 0;var oC=nC(Ue()),Kg=Co(),wu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsSparseTensor(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsSparseTensor(e,r){return e.setPosition(e.position()+oC.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}values(e){let r=this.bb.__offset(this.bb_pos,4);return r?(e||new Kg.Tensor).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}indices(e){let r=this.bb.__offset(this.bb_pos,6);return r?(e||new Kg.Tensor).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}dims(e){let r=this.bb.__offset(this.bb_pos,8);return r?this.bb.readInt64(this.bb.__vector(this.bb_pos+r)+e*8):BigInt(0)}dimsLength(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__vector_len(this.bb_pos+e):0}static startSparseTensor(e){e.startObject(3)}static addValues(e,r){e.addFieldOffset(0,r,0)}static addIndices(e,r){e.addFieldOffset(1,r,0)}static addDims(e,r){e.addFieldOffset(2,r,0)}static createDimsVector(e,r){e.startVector(8,r.length,8);for(let t=r.length-1;t>=0;t--)e.addInt64(r[t]);return e.endVector()}static startDimsVector(e,r){e.startVector(8,r,8)}static endSparseTensor(e){return e.endObject()}};wr.SparseTensor=wu});var Iu=pe(xr=>{"use strict";var iC=xr&&xr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),aC=xr&&xr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),sC=xr&&xr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&iC(e,n,r);return aC(e,n),e};Object.defineProperty(xr,"__esModule",{value:!0});xr.MapType=void 0;var uC=sC(Ue()),Xg=Oo(),lC=Eo(),Tu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsMapType(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsMapType(e,r){return e.setPosition(e.position()+uC.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}keyType(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt32(this.bb_pos+e):Xg.TensorDataType.UNDEFINED}valueType(e){let r=this.bb.__offset(this.bb_pos,6);return r?(e||new lC.TypeInfo).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}static startMapType(e){e.startObject(2)}static addKeyType(e,r){e.addFieldInt32(0,r,Xg.TensorDataType.UNDEFINED)}static addValueType(e,r){e.addFieldOffset(1,r,0)}static endMapType(e){return e.endObject()}};xr.MapType=Tu});var $u=pe(Tr=>{"use strict";var cC=Tr&&Tr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),dC=Tr&&Tr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),fC=Tr&&Tr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&cC(e,n,r);return dC(e,n),e};Object.defineProperty(Tr,"__esModule",{value:!0});Tr.SequenceType=void 0;var pC=fC(Ue()),hC=Eo(),Su=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsSequenceType(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsSequenceType(e,r){return e.setPosition(e.position()+pC.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}elemType(e){let r=this.bb.__offset(this.bb_pos,4);return r?(e||new hC.TypeInfo).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}static startSequenceType(e){e.startObject(1)}static addElemType(e,r){e.addFieldOffset(0,r,0)}static endSequenceType(e){return e.endObject()}static createSequenceType(e,r){return n.startSequenceType(e),n.addElemType(e,r),n.endSequenceType(e)}};Tr.SequenceType=Su});var Au=pe(Ri=>{"use strict";Object.defineProperty(Ri,"__esModule",{value:!0});Ri.DimensionValueType=void 0;var Yg;(function(n){n[n.UNKNOWN=0]="UNKNOWN",n[n.VALUE=1]="VALUE",n[n.PARAM=2]="PARAM"})(Yg||(Ri.DimensionValueType=Yg={}))});var Ou=pe(Ir=>{"use strict";var mC=Ir&&Ir.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),gC=Ir&&Ir.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),yC=Ir&&Ir.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&mC(e,n,r);return gC(e,n),e};Object.defineProperty(Ir,"__esModule",{value:!0});Ir.DimensionValue=void 0;var bC=yC(Ue()),Zg=Au(),Pu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsDimensionValue(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsDimensionValue(e,r){return e.setPosition(e.position()+bC.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}dimType(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt8(this.bb_pos+e):Zg.DimensionValueType.UNKNOWN}dimValue(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readInt64(this.bb_pos+e):BigInt("0")}dimParam(e){let r=this.bb.__offset(this.bb_pos,8);return r?this.bb.__string(this.bb_pos+r,e):null}static startDimensionValue(e){e.startObject(3)}static addDimType(e,r){e.addFieldInt8(0,r,Zg.DimensionValueType.UNKNOWN)}static addDimValue(e,r){e.addFieldInt64(1,r,BigInt("0"))}static addDimParam(e,r){e.addFieldOffset(2,r,0)}static endDimensionValue(e){return e.endObject()}static createDimensionValue(e,r,t,o){return n.startDimensionValue(e),n.addDimType(e,r),n.addDimValue(e,t),n.addDimParam(e,o),n.endDimensionValue(e)}};Ir.DimensionValue=Pu});var Eu=pe(Sr=>{"use strict";var _C=Sr&&Sr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),vC=Sr&&Sr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),wC=Sr&&Sr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&_C(e,n,r);return vC(e,n),e};Object.defineProperty(Sr,"__esModule",{value:!0});Sr.Dimension=void 0;var xC=wC(Ue()),TC=Ou(),Cu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsDimension(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsDimension(e,r){return e.setPosition(e.position()+xC.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}value(e){let r=this.bb.__offset(this.bb_pos,4);return r?(e||new TC.DimensionValue).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}denotation(e){let r=this.bb.__offset(this.bb_pos,6);return r?this.bb.__string(this.bb_pos+r,e):null}static startDimension(e){e.startObject(2)}static addValue(e,r){e.addFieldOffset(0,r,0)}static addDenotation(e,r){e.addFieldOffset(1,r,0)}static endDimension(e){return e.endObject()}static createDimension(e,r,t){return n.startDimension(e),n.addValue(e,r),n.addDenotation(e,t),n.endDimension(e)}};Sr.Dimension=Cu});var ku=pe($r=>{"use strict";var IC=$r&&$r.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),SC=$r&&$r.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),$C=$r&&$r.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&IC(e,n,r);return SC(e,n),e};Object.defineProperty($r,"__esModule",{value:!0});$r.Shape=void 0;var AC=$C(Ue()),PC=Eu(),Du=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsShape(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsShape(e,r){return e.setPosition(e.position()+AC.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}dim(e,r){let t=this.bb.__offset(this.bb_pos,4);return t?(r||new PC.Dimension).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}dimLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}static startShape(e){e.startObject(1)}static addDim(e,r){e.addFieldOffset(0,r,0)}static createDimVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startDimVector(e,r){e.startVector(4,r,4)}static endShape(e){return e.endObject()}static createShape(e,r){return n.startShape(e),n.addDim(e,r),n.endShape(e)}};$r.Shape=Du});var Lu=pe(Ar=>{"use strict";var OC=Ar&&Ar.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),CC=Ar&&Ar.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),EC=Ar&&Ar.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&OC(e,n,r);return CC(e,n),e};Object.defineProperty(Ar,"__esModule",{value:!0});Ar.TensorTypeAndShape=void 0;var DC=EC(Ue()),kC=ku(),Jg=Oo(),Nu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsTensorTypeAndShape(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsTensorTypeAndShape(e,r){return e.setPosition(e.position()+DC.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}elemType(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt32(this.bb_pos+e):Jg.TensorDataType.UNDEFINED}shape(e){let r=this.bb.__offset(this.bb_pos,6);return r?(e||new kC.Shape).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}static startTensorTypeAndShape(e){e.startObject(2)}static addElemType(e,r){e.addFieldInt32(0,r,Jg.TensorDataType.UNDEFINED)}static addShape(e,r){e.addFieldOffset(1,r,0)}static endTensorTypeAndShape(e){return e.endObject()}};Ar.TensorTypeAndShape=Nu});var Ru=pe(yn=>{"use strict";Object.defineProperty(yn,"__esModule",{value:!0});yn.unionListToTypeInfoValue=yn.unionToTypeInfoValue=yn.TypeInfoValue=void 0;var Qg=Iu(),ey=$u(),ty=Lu(),zi;(function(n){n[n.NONE=0]="NONE",n[n.tensor_type=1]="tensor_type",n[n.sequence_type=2]="sequence_type",n[n.map_type=3]="map_type"})(zi||(yn.TypeInfoValue=zi={}));function NC(n,e){switch(zi[n]){case"NONE":return null;case"tensor_type":return e(new ty.TensorTypeAndShape);case"sequence_type":return e(new ey.SequenceType);case"map_type":return e(new Qg.MapType);default:return null}}yn.unionToTypeInfoValue=NC;function LC(n,e,r){switch(zi[n]){case"NONE":return null;case"tensor_type":return e(r,new ty.TensorTypeAndShape);case"sequence_type":return e(r,new ey.SequenceType);case"map_type":return e(r,new Qg.MapType);default:return null}}yn.unionListToTypeInfoValue=LC});var Eo=pe(Pr=>{"use strict";var RC=Pr&&Pr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),zC=Pr&&Pr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),MC=Pr&&Pr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&RC(e,n,r);return zC(e,n),e};Object.defineProperty(Pr,"__esModule",{value:!0});Pr.TypeInfo=void 0;var BC=MC(Ue()),ry=Ru(),zu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsTypeInfo(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsTypeInfo(e,r){return e.setPosition(e.position()+BC.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}denotation(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}valueType(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readUint8(this.bb_pos+e):ry.TypeInfoValue.NONE}value(e){let r=this.bb.__offset(this.bb_pos,8);return r?this.bb.__union(e,this.bb_pos+r):null}static startTypeInfo(e){e.startObject(3)}static addDenotation(e,r){e.addFieldOffset(0,r,0)}static addValueType(e,r){e.addFieldInt8(1,r,ry.TypeInfoValue.NONE)}static addValue(e,r){e.addFieldOffset(2,r,0)}static endTypeInfo(e){return e.endObject()}static createTypeInfo(e,r,t,o){return n.startTypeInfo(e),n.addDenotation(e,r),n.addValueType(e,t),n.addValue(e,o),n.endTypeInfo(e)}};Pr.TypeInfo=zu});var Bu=pe(Or=>{"use strict";var FC=Or&&Or.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),VC=Or&&Or.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),GC=Or&&Or.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&FC(e,n,r);return VC(e,n),e};Object.defineProperty(Or,"__esModule",{value:!0});Or.ValueInfo=void 0;var UC=GC(Ue()),jC=Eo(),Mu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsValueInfo(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsValueInfo(e,r){return e.setPosition(e.position()+UC.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}name(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}docString(e){let r=this.bb.__offset(this.bb_pos,6);return r?this.bb.__string(this.bb_pos+r,e):null}type(e){let r=this.bb.__offset(this.bb_pos,8);return r?(e||new jC.TypeInfo).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}static startValueInfo(e){e.startObject(3)}static addName(e,r){e.addFieldOffset(0,r,0)}static addDocString(e,r){e.addFieldOffset(1,r,0)}static addType(e,r){e.addFieldOffset(2,r,0)}static endValueInfo(e){return e.endObject()}};Or.ValueInfo=Mu});var Mi=pe(Cr=>{"use strict";var WC=Cr&&Cr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),HC=Cr&&Cr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),qC=Cr&&Cr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&WC(e,n,r);return HC(e,n),e};Object.defineProperty(Cr,"__esModule",{value:!0});Cr.Graph=void 0;var KC=qC(Ue()),XC=au(),YC=du(),ZC=_u(),JC=xu(),QC=Co(),e3=Bu(),Fu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsGraph(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsGraph(e,r){return e.setPosition(e.position()+KC.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}initializers(e,r){let t=this.bb.__offset(this.bb_pos,4);return t?(r||new QC.Tensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}initializersLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}nodeArgs(e,r){let t=this.bb.__offset(this.bb_pos,6);return t?(r||new e3.ValueInfo).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}nodeArgsLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}nodes(e,r){let t=this.bb.__offset(this.bb_pos,8);return t?(r||new XC.Node).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}nodesLength(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__vector_len(this.bb_pos+e):0}maxNodeIndex(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readUint32(this.bb_pos+e):0}nodeEdges(e,r){let t=this.bb.__offset(this.bb_pos,12);return t?(r||new YC.NodeEdge).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}nodeEdgesLength(){let e=this.bb.__offset(this.bb_pos,12);return e?this.bb.__vector_len(this.bb_pos+e):0}inputs(e,r){let t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__string(this.bb.__vector(this.bb_pos+t)+e*4,r):null}inputsLength(){let e=this.bb.__offset(this.bb_pos,14);return e?this.bb.__vector_len(this.bb_pos+e):0}outputs(e,r){let t=this.bb.__offset(this.bb_pos,16);return t?this.bb.__string(this.bb.__vector(this.bb_pos+t)+e*4,r):null}outputsLength(){let e=this.bb.__offset(this.bb_pos,16);return e?this.bb.__vector_len(this.bb_pos+e):0}sparseInitializers(e,r){let t=this.bb.__offset(this.bb_pos,18);return t?(r||new JC.SparseTensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}sparseInitializersLength(){let e=this.bb.__offset(this.bb_pos,18);return e?this.bb.__vector_len(this.bb_pos+e):0}runtimeOptimizations(e){let r=this.bb.__offset(this.bb_pos,20);return r?(e||new ZC.RuntimeOptimizations).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}static startGraph(e){e.startObject(9)}static addInitializers(e,r){e.addFieldOffset(0,r,0)}static createInitializersVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startInitializersVector(e,r){e.startVector(4,r,4)}static addNodeArgs(e,r){e.addFieldOffset(1,r,0)}static createNodeArgsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startNodeArgsVector(e,r){e.startVector(4,r,4)}static addNodes(e,r){e.addFieldOffset(2,r,0)}static createNodesVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startNodesVector(e,r){e.startVector(4,r,4)}static addMaxNodeIndex(e,r){e.addFieldInt32(3,r,0)}static addNodeEdges(e,r){e.addFieldOffset(4,r,0)}static createNodeEdgesVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startNodeEdgesVector(e,r){e.startVector(4,r,4)}static addInputs(e,r){e.addFieldOffset(5,r,0)}static createInputsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startInputsVector(e,r){e.startVector(4,r,4)}static addOutputs(e,r){e.addFieldOffset(6,r,0)}static createOutputsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startOutputsVector(e,r){e.startVector(4,r,4)}static addSparseInitializers(e,r){e.addFieldOffset(7,r,0)}static createSparseInitializersVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startSparseInitializersVector(e,r){e.startVector(4,r,4)}static addRuntimeOptimizations(e,r){e.addFieldOffset(8,r,0)}static endGraph(e){return e.endObject()}};Cr.Graph=Fu});var su=pe(Er=>{"use strict";var t3=Er&&Er.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),r3=Er&&Er.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),n3=Er&&Er.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&t3(e,n,r);return r3(e,n),e};Object.defineProperty(Er,"__esModule",{value:!0});Er.Attribute=void 0;var o3=n3(Ue()),ny=nu(),oy=Mi(),iy=Co(),Vu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsAttribute(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsAttribute(e,r){return e.setPosition(e.position()+o3.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}name(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}docString(e){let r=this.bb.__offset(this.bb_pos,6);return r?this.bb.__string(this.bb_pos+r,e):null}type(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.readInt32(this.bb_pos+e):ny.AttributeType.UNDEFINED}f(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readFloat32(this.bb_pos+e):0}i(){let e=this.bb.__offset(this.bb_pos,12);return e?this.bb.readInt64(this.bb_pos+e):BigInt("0")}s(e){let r=this.bb.__offset(this.bb_pos,14);return r?this.bb.__string(this.bb_pos+r,e):null}t(e){let r=this.bb.__offset(this.bb_pos,16);return r?(e||new iy.Tensor).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}g(e){let r=this.bb.__offset(this.bb_pos,18);return r?(e||new oy.Graph).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}floats(e){let r=this.bb.__offset(this.bb_pos,20);return r?this.bb.readFloat32(this.bb.__vector(this.bb_pos+r)+e*4):0}floatsLength(){let e=this.bb.__offset(this.bb_pos,20);return e?this.bb.__vector_len(this.bb_pos+e):0}floatsArray(){let e=this.bb.__offset(this.bb_pos,20);return e?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}ints(e){let r=this.bb.__offset(this.bb_pos,22);return r?this.bb.readInt64(this.bb.__vector(this.bb_pos+r)+e*8):BigInt(0)}intsLength(){let e=this.bb.__offset(this.bb_pos,22);return e?this.bb.__vector_len(this.bb_pos+e):0}strings(e,r){let t=this.bb.__offset(this.bb_pos,24);return t?this.bb.__string(this.bb.__vector(this.bb_pos+t)+e*4,r):null}stringsLength(){let e=this.bb.__offset(this.bb_pos,24);return e?this.bb.__vector_len(this.bb_pos+e):0}tensors(e,r){let t=this.bb.__offset(this.bb_pos,26);return t?(r||new iy.Tensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}tensorsLength(){let e=this.bb.__offset(this.bb_pos,26);return e?this.bb.__vector_len(this.bb_pos+e):0}graphs(e,r){let t=this.bb.__offset(this.bb_pos,28);return t?(r||new oy.Graph).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}graphsLength(){let e=this.bb.__offset(this.bb_pos,28);return e?this.bb.__vector_len(this.bb_pos+e):0}static startAttribute(e){e.startObject(13)}static addName(e,r){e.addFieldOffset(0,r,0)}static addDocString(e,r){e.addFieldOffset(1,r,0)}static addType(e,r){e.addFieldInt32(2,r,ny.AttributeType.UNDEFINED)}static addF(e,r){e.addFieldFloat32(3,r,0)}static addI(e,r){e.addFieldInt64(4,r,BigInt("0"))}static addS(e,r){e.addFieldOffset(5,r,0)}static addT(e,r){e.addFieldOffset(6,r,0)}static addG(e,r){e.addFieldOffset(7,r,0)}static addFloats(e,r){e.addFieldOffset(8,r,0)}static createFloatsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addFloat32(r[t]);return e.endVector()}static startFloatsVector(e,r){e.startVector(4,r,4)}static addInts(e,r){e.addFieldOffset(9,r,0)}static createIntsVector(e,r){e.startVector(8,r.length,8);for(let t=r.length-1;t>=0;t--)e.addInt64(r[t]);return e.endVector()}static startIntsVector(e,r){e.startVector(8,r,8)}static addStrings(e,r){e.addFieldOffset(10,r,0)}static createStringsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startStringsVector(e,r){e.startVector(4,r,4)}static addTensors(e,r){e.addFieldOffset(11,r,0)}static createTensorsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startTensorsVector(e,r){e.startVector(4,r,4)}static addGraphs(e,r){e.addFieldOffset(12,r,0)}static createGraphsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startGraphsVector(e,r){e.startVector(4,r,4)}static endAttribute(e){return e.endObject()}};Er.Attribute=Vu});var Uu=pe(Dr=>{"use strict";var i3=Dr&&Dr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),a3=Dr&&Dr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),s3=Dr&&Dr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&i3(e,n,r);return a3(e,n),e};Object.defineProperty(Dr,"__esModule",{value:!0});Dr.DeprecatedKernelCreateInfos=void 0;var u3=s3(Ue()),Gu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsDeprecatedKernelCreateInfos(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsDeprecatedKernelCreateInfos(e,r){return e.setPosition(e.position()+u3.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}nodeIndices(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.readUint32(this.bb.__vector(this.bb_pos+r)+e*4):0}nodeIndicesLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}nodeIndicesArray(){let e=this.bb.__offset(this.bb_pos,4);return e?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}kernelDefHashes(e){let r=this.bb.__offset(this.bb_pos,6);return r?this.bb.readUint64(this.bb.__vector(this.bb_pos+r)+e*8):BigInt(0)}kernelDefHashesLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}static startDeprecatedKernelCreateInfos(e){e.startObject(2)}static addNodeIndices(e,r){e.addFieldOffset(0,r,0)}static createNodeIndicesVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addInt32(r[t]);return e.endVector()}static startNodeIndicesVector(e,r){e.startVector(4,r,4)}static addKernelDefHashes(e,r){e.addFieldOffset(1,r,0)}static createKernelDefHashesVector(e,r){e.startVector(8,r.length,8);for(let t=r.length-1;t>=0;t--)e.addInt64(r[t]);return e.endVector()}static startKernelDefHashesVector(e,r){e.startVector(8,r,8)}static endDeprecatedKernelCreateInfos(e){return e.endObject()}static createDeprecatedKernelCreateInfos(e,r,t){return n.startDeprecatedKernelCreateInfos(e),n.addNodeIndices(e,r),n.addKernelDefHashes(e,t),n.endDeprecatedKernelCreateInfos(e)}};Dr.DeprecatedKernelCreateInfos=Gu});var ay=pe(kr=>{"use strict";var l3=kr&&kr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),c3=kr&&kr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),d3=kr&&kr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&l3(e,n,r);return c3(e,n),e};Object.defineProperty(kr,"__esModule",{value:!0});kr.DeprecatedNodeIndexAndKernelDefHash=void 0;var f3=d3(Ue()),ju=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsDeprecatedNodeIndexAndKernelDefHash(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsDeprecatedNodeIndexAndKernelDefHash(e,r){return e.setPosition(e.position()+f3.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}nodeIndex(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readUint32(this.bb_pos+e):0}kernelDefHash(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readUint64(this.bb_pos+e):BigInt("0")}static startDeprecatedNodeIndexAndKernelDefHash(e){e.startObject(2)}static addNodeIndex(e,r){e.addFieldInt32(0,r,0)}static addKernelDefHash(e,r){e.addFieldInt64(1,r,BigInt("0"))}static endDeprecatedNodeIndexAndKernelDefHash(e){return e.endObject()}static createDeprecatedNodeIndexAndKernelDefHash(e,r,t){return n.startDeprecatedNodeIndexAndKernelDefHash(e),n.addNodeIndex(e,r),n.addKernelDefHash(e,t),n.endDeprecatedNodeIndexAndKernelDefHash(e)}};kr.DeprecatedNodeIndexAndKernelDefHash=ju});var Hu=pe(Nr=>{"use strict";var p3=Nr&&Nr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),h3=Nr&&Nr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),m3=Nr&&Nr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&p3(e,n,r);return h3(e,n),e};Object.defineProperty(Nr,"__esModule",{value:!0});Nr.DeprecatedSubGraphSessionState=void 0;var g3=m3(Ue()),y3=qu(),Wu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsDeprecatedSubGraphSessionState(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsDeprecatedSubGraphSessionState(e,r){return e.setPosition(e.position()+g3.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}graphId(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}sessionState(e){let r=this.bb.__offset(this.bb_pos,6);return r?(e||new y3.DeprecatedSessionState).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}static startDeprecatedSubGraphSessionState(e){e.startObject(2)}static addGraphId(e,r){e.addFieldOffset(0,r,0)}static addSessionState(e,r){e.addFieldOffset(1,r,0)}static endDeprecatedSubGraphSessionState(e){let r=e.endObject();return e.requiredField(r,4),r}};Nr.DeprecatedSubGraphSessionState=Wu});var qu=pe(Lr=>{"use strict";var b3=Lr&&Lr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),_3=Lr&&Lr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),v3=Lr&&Lr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&b3(e,n,r);return _3(e,n),e};Object.defineProperty(Lr,"__esModule",{value:!0});Lr.DeprecatedSessionState=void 0;var w3=v3(Ue()),x3=Uu(),T3=Hu(),Ku=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsDeprecatedSessionState(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsDeprecatedSessionState(e,r){return e.setPosition(e.position()+w3.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}kernels(e){let r=this.bb.__offset(this.bb_pos,4);return r?(e||new x3.DeprecatedKernelCreateInfos).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}subGraphSessionStates(e,r){let t=this.bb.__offset(this.bb_pos,6);return t?(r||new T3.DeprecatedSubGraphSessionState).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}subGraphSessionStatesLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}static startDeprecatedSessionState(e){e.startObject(2)}static addKernels(e,r){e.addFieldOffset(0,r,0)}static addSubGraphSessionStates(e,r){e.addFieldOffset(1,r,0)}static createSubGraphSessionStatesVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startSubGraphSessionStatesVector(e,r){e.startVector(4,r,4)}static endDeprecatedSessionState(e){return e.endObject()}static createDeprecatedSessionState(e,r,t){return n.startDeprecatedSessionState(e),n.addKernels(e,r),n.addSubGraphSessionStates(e,t),n.endDeprecatedSessionState(e)}};Lr.DeprecatedSessionState=Ku});var Yu=pe(Rr=>{"use strict";var I3=Rr&&Rr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),S3=Rr&&Rr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),$3=Rr&&Rr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&I3(e,n,r);return S3(e,n),e};Object.defineProperty(Rr,"__esModule",{value:!0});Rr.KernelTypeStrArgsEntry=void 0;var A3=$3(Ue()),P3=ru(),Xu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsKernelTypeStrArgsEntry(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsKernelTypeStrArgsEntry(e,r){return e.setPosition(e.position()+A3.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}kernelTypeStr(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}args(e,r){let t=this.bb.__offset(this.bb_pos,6);return t?(r||new P3.ArgTypeAndIndex).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}argsLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}static startKernelTypeStrArgsEntry(e){e.startObject(2)}static addKernelTypeStr(e,r){e.addFieldOffset(0,r,0)}static addArgs(e,r){e.addFieldOffset(1,r,0)}static createArgsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startArgsVector(e,r){e.startVector(4,r,4)}static endKernelTypeStrArgsEntry(e){let r=e.endObject();return e.requiredField(r,4),r}static createKernelTypeStrArgsEntry(e,r,t){return n.startKernelTypeStrArgsEntry(e),n.addKernelTypeStr(e,r),n.addArgs(e,t),n.endKernelTypeStrArgsEntry(e)}};Rr.KernelTypeStrArgsEntry=Xu});var Ju=pe(zr=>{"use strict";var O3=zr&&zr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),C3=zr&&zr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),E3=zr&&zr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&O3(e,n,r);return C3(e,n),e};Object.defineProperty(zr,"__esModule",{value:!0});zr.OpIdKernelTypeStrArgsEntry=void 0;var D3=E3(Ue()),k3=Yu(),Zu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsOpIdKernelTypeStrArgsEntry(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsOpIdKernelTypeStrArgsEntry(e,r){return e.setPosition(e.position()+D3.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}opId(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}kernelTypeStrArgs(e,r){let t=this.bb.__offset(this.bb_pos,6);return t?(r||new k3.KernelTypeStrArgsEntry).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}kernelTypeStrArgsLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}static startOpIdKernelTypeStrArgsEntry(e){e.startObject(2)}static addOpId(e,r){e.addFieldOffset(0,r,0)}static addKernelTypeStrArgs(e,r){e.addFieldOffset(1,r,0)}static createKernelTypeStrArgsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startKernelTypeStrArgsVector(e,r){e.startVector(4,r,4)}static endOpIdKernelTypeStrArgsEntry(e){let r=e.endObject();return e.requiredField(r,4),r}static createOpIdKernelTypeStrArgsEntry(e,r,t){return n.startOpIdKernelTypeStrArgsEntry(e),n.addOpId(e,r),n.addKernelTypeStrArgs(e,t),n.endOpIdKernelTypeStrArgsEntry(e)}};zr.OpIdKernelTypeStrArgsEntry=Zu});var el=pe(Mr=>{"use strict";var N3=Mr&&Mr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),L3=Mr&&Mr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),R3=Mr&&Mr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&N3(e,n,r);return L3(e,n),e};Object.defineProperty(Mr,"__esModule",{value:!0});Mr.KernelTypeStrResolver=void 0;var z3=R3(Ue()),M3=Ju(),Qu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsKernelTypeStrResolver(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsKernelTypeStrResolver(e,r){return e.setPosition(e.position()+z3.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}opKernelTypeStrArgs(e,r){let t=this.bb.__offset(this.bb_pos,4);return t?(r||new M3.OpIdKernelTypeStrArgsEntry).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}opKernelTypeStrArgsLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}static startKernelTypeStrResolver(e){e.startObject(1)}static addOpKernelTypeStrArgs(e,r){e.addFieldOffset(0,r,0)}static createOpKernelTypeStrArgsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startOpKernelTypeStrArgsVector(e,r){e.startVector(4,r,4)}static endKernelTypeStrResolver(e){return e.endObject()}static createKernelTypeStrResolver(e,r){return n.startKernelTypeStrResolver(e),n.addOpKernelTypeStrArgs(e,r),n.endKernelTypeStrResolver(e)}};Mr.KernelTypeStrResolver=Qu});var rl=pe(Br=>{"use strict";var B3=Br&&Br.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),F3=Br&&Br.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),V3=Br&&Br.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&B3(e,n,r);return F3(e,n),e};Object.defineProperty(Br,"__esModule",{value:!0});Br.OperatorSetId=void 0;var G3=V3(Ue()),tl=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsOperatorSetId(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsOperatorSetId(e,r){return e.setPosition(e.position()+G3.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}domain(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}version(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readInt64(this.bb_pos+e):BigInt("0")}static startOperatorSetId(e){e.startObject(2)}static addDomain(e,r){e.addFieldOffset(0,r,0)}static addVersion(e,r){e.addFieldInt64(1,r,BigInt("0"))}static endOperatorSetId(e){return e.endObject()}static createOperatorSetId(e,r,t){return n.startOperatorSetId(e),n.addDomain(e,r),n.addVersion(e,t),n.endOperatorSetId(e)}};Br.OperatorSetId=tl});var ol=pe(Fr=>{"use strict";var U3=Fr&&Fr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),j3=Fr&&Fr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),W3=Fr&&Fr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&U3(e,n,r);return j3(e,n),e};Object.defineProperty(Fr,"__esModule",{value:!0});Fr.StringStringEntry=void 0;var H3=W3(Ue()),nl=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsStringStringEntry(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsStringStringEntry(e,r){return e.setPosition(e.position()+H3.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}key(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}value(e){let r=this.bb.__offset(this.bb_pos,6);return r?this.bb.__string(this.bb_pos+r,e):null}static startStringStringEntry(e){e.startObject(2)}static addKey(e,r){e.addFieldOffset(0,r,0)}static addValue(e,r){e.addFieldOffset(1,r,0)}static endStringStringEntry(e){return e.endObject()}static createStringStringEntry(e,r,t){return n.startStringStringEntry(e),n.addKey(e,r),n.addValue(e,t),n.endStringStringEntry(e)}};Fr.StringStringEntry=nl});var al=pe(Vr=>{"use strict";var q3=Vr&&Vr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),K3=Vr&&Vr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),X3=Vr&&Vr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&q3(e,n,r);return K3(e,n),e};Object.defineProperty(Vr,"__esModule",{value:!0});Vr.Model=void 0;var Y3=X3(Ue()),Z3=Mi(),J3=rl(),Q3=ol(),il=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsModel(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsModel(e,r){return e.setPosition(e.position()+Y3.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}irVersion(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt64(this.bb_pos+e):BigInt("0")}opsetImport(e,r){let t=this.bb.__offset(this.bb_pos,6);return t?(r||new J3.OperatorSetId).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}opsetImportLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}producerName(e){let r=this.bb.__offset(this.bb_pos,8);return r?this.bb.__string(this.bb_pos+r,e):null}producerVersion(e){let r=this.bb.__offset(this.bb_pos,10);return r?this.bb.__string(this.bb_pos+r,e):null}domain(e){let r=this.bb.__offset(this.bb_pos,12);return r?this.bb.__string(this.bb_pos+r,e):null}modelVersion(){let e=this.bb.__offset(this.bb_pos,14);return e?this.bb.readInt64(this.bb_pos+e):BigInt("0")}docString(e){let r=this.bb.__offset(this.bb_pos,16);return r?this.bb.__string(this.bb_pos+r,e):null}graph(e){let r=this.bb.__offset(this.bb_pos,18);return r?(e||new Z3.Graph).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}graphDocString(e){let r=this.bb.__offset(this.bb_pos,20);return r?this.bb.__string(this.bb_pos+r,e):null}metadataProps(e,r){let t=this.bb.__offset(this.bb_pos,22);return t?(r||new Q3.StringStringEntry).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}metadataPropsLength(){let e=this.bb.__offset(this.bb_pos,22);return e?this.bb.__vector_len(this.bb_pos+e):0}static startModel(e){e.startObject(10)}static addIrVersion(e,r){e.addFieldInt64(0,r,BigInt("0"))}static addOpsetImport(e,r){e.addFieldOffset(1,r,0)}static createOpsetImportVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startOpsetImportVector(e,r){e.startVector(4,r,4)}static addProducerName(e,r){e.addFieldOffset(2,r,0)}static addProducerVersion(e,r){e.addFieldOffset(3,r,0)}static addDomain(e,r){e.addFieldOffset(4,r,0)}static addModelVersion(e,r){e.addFieldInt64(5,r,BigInt("0"))}static addDocString(e,r){e.addFieldOffset(6,r,0)}static addGraph(e,r){e.addFieldOffset(7,r,0)}static addGraphDocString(e,r){e.addFieldOffset(8,r,0)}static addMetadataProps(e,r){e.addFieldOffset(9,r,0)}static createMetadataPropsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startMetadataPropsVector(e,r){e.startVector(4,r,4)}static endModel(e){return e.endObject()}};Vr.Model=il});var sy=pe(Gr=>{"use strict";var eE=Gr&&Gr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),tE=Gr&&Gr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),rE=Gr&&Gr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&eE(e,n,r);return tE(e,n),e};Object.defineProperty(Gr,"__esModule",{value:!0});Gr.InferenceSession=void 0;var nE=rE(Ue()),oE=el(),iE=al(),sl=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsInferenceSession(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsInferenceSession(e,r){return e.setPosition(e.position()+nE.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static bufferHasIdentifier(e){return e.__has_identifier("ORTM")}ortVersion(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}model(e){let r=this.bb.__offset(this.bb_pos,6);return r?(e||new iE.Model).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}kernelTypeStrResolver(e){let r=this.bb.__offset(this.bb_pos,10);return r?(e||new oE.KernelTypeStrResolver).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}static startInferenceSession(e){e.startObject(4)}static addOrtVersion(e,r){e.addFieldOffset(0,r,0)}static addModel(e,r){e.addFieldOffset(1,r,0)}static addKernelTypeStrResolver(e,r){e.addFieldOffset(3,r,0)}static endInferenceSession(e){return e.endObject()}static finishInferenceSessionBuffer(e,r){e.finish(r,"ORTM")}static finishSizePrefixedInferenceSessionBuffer(e,r){e.finish(r,"ORTM",!0)}};Gr.InferenceSession=sl});var aE,sE,Bi,Wt,uE,lE,cE,dE,fE,pE,hE,mE,ul,ll,gE,yE,bE,_E,cl,vE,wE,xE,TE,IE,SE,$E,AE,PE,OE,CE,EE,DE,Do,dl,kE,fl,NE,uy=W(()=>{"use strict";aE=Pe(Xs()),sE=Pe(ru()),Bi=Pe(su()),Wt=Pe(nu()),uE=Pe(Uu()),lE=Pe(ay()),cE=Pe(qu()),dE=Pe(Hu()),fE=Pe(Eu()),pE=Pe(Ou()),hE=Pe(Au()),mE=Pe(lu()),ul=Pe(Mi()),ll=Pe(sy()),gE=Pe(Yu()),yE=Pe(el()),bE=Pe(Iu()),_E=Pe(al()),cl=Pe(au()),vE=Pe(du()),wE=Pe(ou()),xE=Pe(pu()),TE=Pe(Ju()),IE=Pe(rl()),SE=Pe(mu()),$E=Pe(yu()),AE=Pe(_u()),PE=Pe($u()),OE=Pe(ku()),CE=Pe(xu()),EE=Pe(ol()),DE=Pe(Co()),Do=Pe(Oo()),dl=Pe(Lu()),kE=Pe(Eo()),fl=Pe(Ru()),NE=Pe(Bu())});var ko=W(()=>{"use strict";uy()});var cy=pe((lB,ly)=>{"use strict";ly.exports=LE;function LE(n,e){for(var r=new Array(arguments.length-1),t=0,o=2,i=!0;o<arguments.length;)r[t++]=arguments[o++];return new Promise(function(u,c){r[t]=function(m){if(i)if(i=!1,m)c(m);else{for(var b=new Array(arguments.length-1),_=0;_<b.length;)b[_++]=arguments[_];u.apply(null,b)}};try{n.apply(e||null,r)}catch(p){i&&(i=!1,c(p))}})}});var hy=pe(py=>{"use strict";var Vi=py;Vi.length=function(e){var r=e.length;if(!r)return 0;for(var t=0;--r%4>1&&e.charAt(r)==="=";)++t;return Math.ceil(e.length*3)/4-t};var io=new Array(64),fy=new Array(123);for(er=0;er<64;)fy[io[er]=er<26?er+65:er<52?er+71:er<62?er-4:er-59|43]=er++;var er;Vi.encode=function(e,r,t){for(var o=null,i=[],a=0,u=0,c;r<t;){var p=e[r++];switch(u){case 0:i[a++]=io[p>>2],c=(p&3)<<4,u=1;break;case 1:i[a++]=io[c|p>>4],c=(p&15)<<2,u=2;break;case 2:i[a++]=io[c|p>>6],i[a++]=io[p&63],u=0;break}a>8191&&((o||(o=[])).push(String.fromCharCode.apply(String,i)),a=0)}return u&&(i[a++]=io[c],i[a++]=61,u===1&&(i[a++]=61)),o?(a&&o.push(String.fromCharCode.apply(String,i.slice(0,a))),o.join("")):String.fromCharCode.apply(String,i.slice(0,a))};var dy="invalid encoding";Vi.decode=function(e,r,t){for(var o=t,i=0,a,u=0;u<e.length;){var c=e.charCodeAt(u++);if(c===61&&i>1)break;if((c=fy[c])===void 0)throw Error(dy);switch(i){case 0:a=c,i=1;break;case 1:r[t++]=a<<2|(c&48)>>4,a=c,i=2;break;case 2:r[t++]=(a&15)<<4|(c&60)>>2,a=c,i=3;break;case 3:r[t++]=(a&3)<<6|c,i=0;break}}if(i===1)throw Error(dy);return t-o};Vi.test=function(e){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)}});var gy=pe((dB,my)=>{"use strict";my.exports=Gi;function Gi(){this._listeners={}}Gi.prototype.on=function(e,r,t){return(this._listeners[e]||(this._listeners[e]=[])).push({fn:r,ctx:t||this}),this};Gi.prototype.off=function(e,r){if(e===void 0)this._listeners={};else if(r===void 0)this._listeners[e]=[];else for(var t=this._listeners[e],o=0;o<t.length;)t[o].fn===r?t.splice(o,1):++o;return this};Gi.prototype.emit=function(e){var r=this._listeners[e];if(r){for(var t=[],o=1;o<arguments.length;)t.push(arguments[o++]);for(o=0;o<r.length;)r[o].fn.apply(r[o++].ctx,t)}return this}});var Ty=pe((fB,xy)=>{"use strict";xy.exports=yy(yy);function yy(n){return typeof Float32Array<"u"?function(){var e=new Float32Array([-0]),r=new Uint8Array(e.buffer),t=r[3]===128;function o(c,p,m){e[0]=c,p[m]=r[0],p[m+1]=r[1],p[m+2]=r[2],p[m+3]=r[3]}function i(c,p,m){e[0]=c,p[m]=r[3],p[m+1]=r[2],p[m+2]=r[1],p[m+3]=r[0]}n.writeFloatLE=t?o:i,n.writeFloatBE=t?i:o;function a(c,p){return r[0]=c[p],r[1]=c[p+1],r[2]=c[p+2],r[3]=c[p+3],e[0]}function u(c,p){return r[3]=c[p],r[2]=c[p+1],r[1]=c[p+2],r[0]=c[p+3],e[0]}n.readFloatLE=t?a:u,n.readFloatBE=t?u:a}():function(){function e(t,o,i,a){var u=o<0?1:0;if(u&&(o=-o),o===0)t(1/o>0?0:2147483648,i,a);else if(isNaN(o))t(2143289344,i,a);else if(o>34028234663852886e22)t((u<<31|2139095040)>>>0,i,a);else if(o<11754943508222875e-54)t((u<<31|Math.round(o/1401298464324817e-60))>>>0,i,a);else{var c=Math.floor(Math.log(o)/Math.LN2),p=Math.round(o*Math.pow(2,-c)*8388608)&8388607;t((u<<31|c+127<<23|p)>>>0,i,a)}}n.writeFloatLE=e.bind(null,by),n.writeFloatBE=e.bind(null,_y);function r(t,o,i){var a=t(o,i),u=(a>>31)*2+1,c=a>>>23&255,p=a&8388607;return c===255?p?NaN:u*(1/0):c===0?u*1401298464324817e-60*p:u*Math.pow(2,c-150)*(p+8388608)}n.readFloatLE=r.bind(null,vy),n.readFloatBE=r.bind(null,wy)}(),typeof Float64Array<"u"?function(){var e=new Float64Array([-0]),r=new Uint8Array(e.buffer),t=r[7]===128;function o(c,p,m){e[0]=c,p[m]=r[0],p[m+1]=r[1],p[m+2]=r[2],p[m+3]=r[3],p[m+4]=r[4],p[m+5]=r[5],p[m+6]=r[6],p[m+7]=r[7]}function i(c,p,m){e[0]=c,p[m]=r[7],p[m+1]=r[6],p[m+2]=r[5],p[m+3]=r[4],p[m+4]=r[3],p[m+5]=r[2],p[m+6]=r[1],p[m+7]=r[0]}n.writeDoubleLE=t?o:i,n.writeDoubleBE=t?i:o;function a(c,p){return r[0]=c[p],r[1]=c[p+1],r[2]=c[p+2],r[3]=c[p+3],r[4]=c[p+4],r[5]=c[p+5],r[6]=c[p+6],r[7]=c[p+7],e[0]}function u(c,p){return r[7]=c[p],r[6]=c[p+1],r[5]=c[p+2],r[4]=c[p+3],r[3]=c[p+4],r[2]=c[p+5],r[1]=c[p+6],r[0]=c[p+7],e[0]}n.readDoubleLE=t?a:u,n.readDoubleBE=t?u:a}():function(){function e(t,o,i,a,u,c){var p=a<0?1:0;if(p&&(a=-a),a===0)t(0,u,c+o),t(1/a>0?0:2147483648,u,c+i);else if(isNaN(a))t(0,u,c+o),t(2146959360,u,c+i);else if(a>17976931348623157e292)t(0,u,c+o),t((p<<31|2146435072)>>>0,u,c+i);else{var m;if(a<22250738585072014e-324)m=a/5e-324,t(m>>>0,u,c+o),t((p<<31|m/4294967296)>>>0,u,c+i);else{var b=Math.floor(Math.log(a)/Math.LN2);b===1024&&(b=1023),m=a*Math.pow(2,-b),t(m*4503599627370496>>>0,u,c+o),t((p<<31|b+1023<<20|m*1048576&1048575)>>>0,u,c+i)}}}n.writeDoubleLE=e.bind(null,by,0,4),n.writeDoubleBE=e.bind(null,_y,4,0);function r(t,o,i,a,u){var c=t(a,u+o),p=t(a,u+i),m=(p>>31)*2+1,b=p>>>20&2047,_=4294967296*(p&1048575)+c;return b===2047?_?NaN:m*(1/0):b===0?m*5e-324*_:m*Math.pow(2,b-1075)*(_+4503599627370496)}n.readDoubleLE=r.bind(null,vy,0,4),n.readDoubleBE=r.bind(null,wy,4,0)}(),n}function by(n,e,r){e[r]=n&255,e[r+1]=n>>>8&255,e[r+2]=n>>>16&255,e[r+3]=n>>>24}function _y(n,e,r){e[r]=n>>>24,e[r+1]=n>>>16&255,e[r+2]=n>>>8&255,e[r+3]=n&255}function vy(n,e){return(n[e]|n[e+1]<<8|n[e+2]<<16|n[e+3]<<24)>>>0}function wy(n,e){return(n[e]<<24|n[e+1]<<16|n[e+2]<<8|n[e+3])>>>0}});var Iy=pe((exports,module)=>{"use strict";module.exports=inquire;function inquire(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch(n){}return null}});var $y=pe(Sy=>{"use strict";var pl=Sy;pl.length=function(e){for(var r=0,t=0,o=0;o<e.length;++o)t=e.charCodeAt(o),t<128?r+=1:t<2048?r+=2:(t&64512)===55296&&(e.charCodeAt(o+1)&64512)===56320?(++o,r+=4):r+=3;return r};pl.read=function(e,r,t){var o=t-r;if(o<1)return"";for(var i=null,a=[],u=0,c;r<t;)c=e[r++],c<128?a[u++]=c:c>191&&c<224?a[u++]=(c&31)<<6|e[r++]&63:c>239&&c<365?(c=((c&7)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,a[u++]=55296+(c>>10),a[u++]=56320+(c&1023)):a[u++]=(c&15)<<12|(e[r++]&63)<<6|e[r++]&63,u>8191&&((i||(i=[])).push(String.fromCharCode.apply(String,a)),u=0);return i?(u&&i.push(String.fromCharCode.apply(String,a.slice(0,u))),i.join("")):String.fromCharCode.apply(String,a.slice(0,u))};pl.write=function(e,r,t){for(var o=t,i,a,u=0;u<e.length;++u)i=e.charCodeAt(u),i<128?r[t++]=i:i<2048?(r[t++]=i>>6|192,r[t++]=i&63|128):(i&64512)===55296&&((a=e.charCodeAt(u+1))&64512)===56320?(i=65536+((i&1023)<<10)+(a&1023),++u,r[t++]=i>>18|240,r[t++]=i>>12&63|128,r[t++]=i>>6&63|128,r[t++]=i&63|128):(r[t++]=i>>12|224,r[t++]=i>>6&63|128,r[t++]=i&63|128);return t-o}});var Py=pe((hB,Ay)=>{"use strict";Ay.exports=RE;function RE(n,e,r){var t=r||8192,o=t>>>1,i=null,a=t;return function(c){if(c<1||c>o)return n(c);a+c>t&&(i=n(t),a=0);var p=e.call(i,a,a+=c);return a&7&&(a=(a|7)+1),p}}});var Cy=pe((mB,Oy)=>{"use strict";Oy.exports=bt;var No=_n();function bt(n,e){this.lo=n>>>0,this.hi=e>>>0}var Nn=bt.zero=new bt(0,0);Nn.toNumber=function(){return 0};Nn.zzEncode=Nn.zzDecode=function(){return this};Nn.length=function(){return 1};var zE=bt.zeroHash="\0\0\0\0\0\0\0\0";bt.fromNumber=function(e){if(e===0)return Nn;var r=e<0;r&&(e=-e);var t=e>>>0,o=(e-t)/4294967296>>>0;return r&&(o=~o>>>0,t=~t>>>0,++t>4294967295&&(t=0,++o>4294967295&&(o=0))),new bt(t,o)};bt.from=function(e){if(typeof e=="number")return bt.fromNumber(e);if(No.isString(e))if(No.Long)e=No.Long.fromString(e);else return bt.fromNumber(parseInt(e,10));return e.low||e.high?new bt(e.low>>>0,e.high>>>0):Nn};bt.prototype.toNumber=function(e){if(!e&&this.hi>>>31){var r=~this.lo+1>>>0,t=~this.hi>>>0;return r||(t=t+1>>>0),-(r+t*4294967296)}return this.lo+this.hi*4294967296};bt.prototype.toLong=function(e){return No.Long?new No.Long(this.lo|0,this.hi|0,!!e):{low:this.lo|0,high:this.hi|0,unsigned:!!e}};var bn=String.prototype.charCodeAt;bt.fromHash=function(e){return e===zE?Nn:new bt((bn.call(e,0)|bn.call(e,1)<<8|bn.call(e,2)<<16|bn.call(e,3)<<24)>>>0,(bn.call(e,4)|bn.call(e,5)<<8|bn.call(e,6)<<16|bn.call(e,7)<<24)>>>0)};bt.prototype.toHash=function(){return String.fromCharCode(this.lo&255,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,this.hi&255,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)};bt.prototype.zzEncode=function(){var e=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^e)>>>0,this.lo=(this.lo<<1^e)>>>0,this};bt.prototype.zzDecode=function(){var e=-(this.lo&1);return this.lo=((this.lo>>>1|this.hi<<31)^e)>>>0,this.hi=(this.hi>>>1^e)>>>0,this};bt.prototype.length=function(){var e=this.lo,r=(this.lo>>>28|this.hi<<4)>>>0,t=this.hi>>>24;return t===0?r===0?e<16384?e<128?1:2:e<2097152?3:4:r<16384?r<128?5:6:r<2097152?7:8:t<128?9:10}});var _n=pe(hl=>{"use strict";var ge=hl;ge.asPromise=cy();ge.base64=hy();ge.EventEmitter=gy();ge.float=Ty();ge.inquire=Iy();ge.utf8=$y();ge.pool=Py();ge.LongBits=Cy();ge.isNode=!!(typeof global<"u"&&global&&global.process&&global.process.versions&&global.process.versions.node);ge.global=ge.isNode&&global||typeof window<"u"&&window||typeof self<"u"&&self||hl;ge.emptyArray=Object.freeze?Object.freeze([]):[];ge.emptyObject=Object.freeze?Object.freeze({}):{};ge.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};ge.isString=function(e){return typeof e=="string"||e instanceof String};ge.isObject=function(e){return e&&typeof e=="object"};ge.isset=ge.isSet=function(e,r){var t=e[r];return t!=null&&e.hasOwnProperty(r)?typeof t!="object"||(Array.isArray(t)?t.length:Object.keys(t).length)>0:!1};ge.Buffer=function(){try{var n=ge.inquire("buffer").Buffer;return n.prototype.utf8Write?n:null}catch{return null}}();ge._Buffer_from=null;ge._Buffer_allocUnsafe=null;ge.newBuffer=function(e){return typeof e=="number"?ge.Buffer?ge._Buffer_allocUnsafe(e):new ge.Array(e):ge.Buffer?ge._Buffer_from(e):typeof Uint8Array>"u"?e:new Uint8Array(e)};ge.Array=typeof Uint8Array<"u"?Uint8Array:Array;ge.Long=ge.global.dcodeIO&&ge.global.dcodeIO.Long||ge.global.Long||ge.inquire("long");ge.key2Re=/^true|false|0|1$/;ge.key32Re=/^-?(?:0|[1-9][0-9]*)$/;ge.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;ge.longToHash=function(e){return e?ge.LongBits.from(e).toHash():ge.LongBits.zeroHash};ge.longFromHash=function(e,r){var t=ge.LongBits.fromHash(e);return ge.Long?ge.Long.fromBits(t.lo,t.hi,r):t.toNumber(!!r)};function Ey(n,e,r){for(var t=Object.keys(e),o=0;o<t.length;++o)(n[t[o]]===void 0||!r)&&(n[t[o]]=e[t[o]]);return n}ge.merge=Ey;ge.lcFirst=function(e){return e.charAt(0).toLowerCase()+e.substring(1)};function Dy(n){function e(r,t){if(!(this instanceof e))return new e(r,t);Object.defineProperty(this,"message",{get:function(){return r}}),Error.captureStackTrace?Error.captureStackTrace(this,e):Object.defineProperty(this,"stack",{value:new Error().stack||""}),t&&Ey(this,t)}return e.prototype=Object.create(Error.prototype,{constructor:{value:e,writable:!0,enumerable:!1,configurable:!0},name:{get:function(){return n},set:void 0,enumerable:!1,configurable:!0},toString:{value:function(){return this.name+": "+this.message},writable:!0,enumerable:!1,configurable:!0}}),e}ge.newError=Dy;ge.ProtocolError=Dy("ProtocolError");ge.oneOfGetter=function(e){for(var r={},t=0;t<e.length;++t)r[e[t]]=1;return function(){for(var o=Object.keys(this),i=o.length-1;i>-1;--i)if(r[o[i]]===1&&this[o[i]]!==void 0&&this[o[i]]!==null)return o[i]}};ge.oneOfSetter=function(e){return function(r){for(var t=0;t<e.length;++t)e[t]!==r&&delete this[e[t]]}};ge.toJSONOptions={longs:String,enums:String,bytes:String,json:!0};ge._configure=function(){var n=ge.Buffer;if(!n){ge._Buffer_from=ge._Buffer_allocUnsafe=null;return}ge._Buffer_from=n.from!==Uint8Array.from&&n.from||function(r,t){return new n(r,t)},ge._Buffer_allocUnsafe=n.allocUnsafe||function(r){return new n(r)}}});var wl=pe((yB,Ry)=>{"use strict";Ry.exports=Be;var Ht=_n(),ml,Ui=Ht.LongBits,ky=Ht.base64,Ny=Ht.utf8;function Lo(n,e,r){this.fn=n,this.len=e,this.next=void 0,this.val=r}function yl(){}function ME(n){this.head=n.head,this.tail=n.tail,this.len=n.len,this.next=n.states}function Be(){this.len=0,this.head=new Lo(yl,0,0),this.tail=this.head,this.states=null}var Ly=function(){return Ht.Buffer?function(){return(Be.create=function(){return new ml})()}:function(){return new Be}};Be.create=Ly();Be.alloc=function(e){return new Ht.Array(e)};Ht.Array!==Array&&(Be.alloc=Ht.pool(Be.alloc,Ht.Array.prototype.subarray));Be.prototype._push=function(e,r,t){return this.tail=this.tail.next=new Lo(e,r,t),this.len+=r,this};function bl(n,e,r){e[r]=n&255}function BE(n,e,r){for(;n>127;)e[r++]=n&127|128,n>>>=7;e[r]=n}function _l(n,e){this.len=n,this.next=void 0,this.val=e}_l.prototype=Object.create(Lo.prototype);_l.prototype.fn=BE;Be.prototype.uint32=function(e){return this.len+=(this.tail=this.tail.next=new _l((e=e>>>0)<128?1:e<16384?2:e<2097152?3:e<268435456?4:5,e)).len,this};Be.prototype.int32=function(e){return e<0?this._push(vl,10,Ui.fromNumber(e)):this.uint32(e)};Be.prototype.sint32=function(e){return this.uint32((e<<1^e>>31)>>>0)};function vl(n,e,r){for(;n.hi;)e[r++]=n.lo&127|128,n.lo=(n.lo>>>7|n.hi<<25)>>>0,n.hi>>>=7;for(;n.lo>127;)e[r++]=n.lo&127|128,n.lo=n.lo>>>7;e[r++]=n.lo}Be.prototype.uint64=function(e){var r=Ui.from(e);return this._push(vl,r.length(),r)};Be.prototype.int64=Be.prototype.uint64;Be.prototype.sint64=function(e){var r=Ui.from(e).zzEncode();return this._push(vl,r.length(),r)};Be.prototype.bool=function(e){return this._push(bl,1,e?1:0)};function gl(n,e,r){e[r]=n&255,e[r+1]=n>>>8&255,e[r+2]=n>>>16&255,e[r+3]=n>>>24}Be.prototype.fixed32=function(e){return this._push(gl,4,e>>>0)};Be.prototype.sfixed32=Be.prototype.fixed32;Be.prototype.fixed64=function(e){var r=Ui.from(e);return this._push(gl,4,r.lo)._push(gl,4,r.hi)};Be.prototype.sfixed64=Be.prototype.fixed64;Be.prototype.float=function(e){return this._push(Ht.float.writeFloatLE,4,e)};Be.prototype.double=function(e){return this._push(Ht.float.writeDoubleLE,8,e)};var FE=Ht.Array.prototype.set?function(e,r,t){r.set(e,t)}:function(e,r,t){for(var o=0;o<e.length;++o)r[t+o]=e[o]};Be.prototype.bytes=function(e){var r=e.length>>>0;if(!r)return this._push(bl,1,0);if(Ht.isString(e)){var t=Be.alloc(r=ky.length(e));ky.decode(e,t,0),e=t}return this.uint32(r)._push(FE,r,e)};Be.prototype.string=function(e){var r=Ny.length(e);return r?this.uint32(r)._push(Ny.write,r,e):this._push(bl,1,0)};Be.prototype.fork=function(){return this.states=new ME(this),this.head=this.tail=new Lo(yl,0,0),this.len=0,this};Be.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new Lo(yl,0,0),this.len=0),this};Be.prototype.ldelim=function(){var e=this.head,r=this.tail,t=this.len;return this.reset().uint32(t),t&&(this.tail.next=e.next,this.tail=r,this.len+=t),this};Be.prototype.finish=function(){for(var e=this.head.next,r=this.constructor.alloc(this.len),t=0;e;)e.fn(e.val,r,t),t+=e.len,e=e.next;return r};Be._configure=function(n){ml=n,Be.create=Ly(),ml._configure()}});var By=pe((bB,My)=>{"use strict";My.exports=Ur;var zy=wl();(Ur.prototype=Object.create(zy.prototype)).constructor=Ur;var vn=_n();function Ur(){zy.call(this)}Ur._configure=function(){Ur.alloc=vn._Buffer_allocUnsafe,Ur.writeBytesBuffer=vn.Buffer&&vn.Buffer.prototype instanceof Uint8Array&&vn.Buffer.prototype.set.name==="set"?function(e,r,t){r.set(e,t)}:function(e,r,t){if(e.copy)e.copy(r,t,0,e.length);else for(var o=0;o<e.length;)r[t++]=e[o++]}};Ur.prototype.bytes=function(e){vn.isString(e)&&(e=vn._Buffer_from(e,"base64"));var r=e.length>>>0;return this.uint32(r),r&&this._push(Ur.writeBytesBuffer,r,e),this};function VE(n,e,r){n.length<40?vn.utf8.write(n,e,r):e.utf8Write?e.utf8Write(n,r):e.write(n,r)}Ur.prototype.string=function(e){var r=vn.Buffer.byteLength(e);return this.uint32(r),r&&this._push(VE,r,e),this};Ur._configure()});var Il=pe((_B,jy)=>{"use strict";jy.exports=lt;var tr=_n(),Tl,Gy=tr.LongBits,GE=tr.utf8;function rr(n,e){return RangeError("index out of range: "+n.pos+" + "+(e||1)+" > "+n.len)}function lt(n){this.buf=n,this.pos=0,this.len=n.length}var Fy=typeof Uint8Array<"u"?function(e){if(e instanceof Uint8Array||Array.isArray(e))return new lt(e);throw Error("illegal buffer")}:function(e){if(Array.isArray(e))return new lt(e);throw Error("illegal buffer")},Uy=function(){return tr.Buffer?function(r){return(lt.create=function(o){return tr.Buffer.isBuffer(o)?new Tl(o):Fy(o)})(r)}:Fy};lt.create=Uy();lt.prototype._slice=tr.Array.prototype.subarray||tr.Array.prototype.slice;lt.prototype.uint32=function(){var e=4294967295;return function(){if(e=(this.buf[this.pos]&127)>>>0,this.buf[this.pos++]<128||(e=(e|(this.buf[this.pos]&127)<<7)>>>0,this.buf[this.pos++]<128)||(e=(e|(this.buf[this.pos]&127)<<14)>>>0,this.buf[this.pos++]<128)||(e=(e|(this.buf[this.pos]&127)<<21)>>>0,this.buf[this.pos++]<128)||(e=(e|(this.buf[this.pos]&15)<<28)>>>0,this.buf[this.pos++]<128))return e;if((this.pos+=5)>this.len)throw this.pos=this.len,rr(this,10);return e}}();lt.prototype.int32=function(){return this.uint32()|0};lt.prototype.sint32=function(){var e=this.uint32();return e>>>1^-(e&1)|0};function xl(){var n=new Gy(0,0),e=0;if(this.len-this.pos>4){for(;e<4;++e)if(n.lo=(n.lo|(this.buf[this.pos]&127)<<e*7)>>>0,this.buf[this.pos++]<128)return n;if(n.lo=(n.lo|(this.buf[this.pos]&127)<<28)>>>0,n.hi=(n.hi|(this.buf[this.pos]&127)>>4)>>>0,this.buf[this.pos++]<128)return n;e=0}else{for(;e<3;++e){if(this.pos>=this.len)throw rr(this);if(n.lo=(n.lo|(this.buf[this.pos]&127)<<e*7)>>>0,this.buf[this.pos++]<128)return n}return n.lo=(n.lo|(this.buf[this.pos++]&127)<<e*7)>>>0,n}if(this.len-this.pos>4){for(;e<5;++e)if(n.hi=(n.hi|(this.buf[this.pos]&127)<<e*7+3)>>>0,this.buf[this.pos++]<128)return n}else for(;e<5;++e){if(this.pos>=this.len)throw rr(this);if(n.hi=(n.hi|(this.buf[this.pos]&127)<<e*7+3)>>>0,this.buf[this.pos++]<128)return n}throw Error("invalid varint encoding")}lt.prototype.bool=function(){return this.uint32()!==0};function ji(n,e){return(n[e-4]|n[e-3]<<8|n[e-2]<<16|n[e-1]<<24)>>>0}lt.prototype.fixed32=function(){if(this.pos+4>this.len)throw rr(this,4);return ji(this.buf,this.pos+=4)};lt.prototype.sfixed32=function(){if(this.pos+4>this.len)throw rr(this,4);return ji(this.buf,this.pos+=4)|0};function Vy(){if(this.pos+8>this.len)throw rr(this,8);return new Gy(ji(this.buf,this.pos+=4),ji(this.buf,this.pos+=4))}lt.prototype.float=function(){if(this.pos+4>this.len)throw rr(this,4);var e=tr.float.readFloatLE(this.buf,this.pos);return this.pos+=4,e};lt.prototype.double=function(){if(this.pos+8>this.len)throw rr(this,4);var e=tr.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,e};lt.prototype.bytes=function(){var e=this.uint32(),r=this.pos,t=this.pos+e;if(t>this.len)throw rr(this,e);if(this.pos+=e,Array.isArray(this.buf))return this.buf.slice(r,t);if(r===t){var o=tr.Buffer;return o?o.alloc(0):new this.buf.constructor(0)}return this._slice.call(this.buf,r,t)};lt.prototype.string=function(){var e=this.bytes();return GE.read(e,0,e.length)};lt.prototype.skip=function(e){if(typeof e=="number"){if(this.pos+e>this.len)throw rr(this,e);this.pos+=e}else do if(this.pos>=this.len)throw rr(this);while(this.buf[this.pos++]&128);return this};lt.prototype.skipType=function(n){switch(n){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;(n=this.uint32()&7)!==4;)this.skipType(n);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+n+" at offset "+this.pos)}return this};lt._configure=function(n){Tl=n,lt.create=Uy(),Tl._configure();var e=tr.Long?"toLong":"toNumber";tr.merge(lt.prototype,{int64:function(){return xl.call(this)[e](!1)},uint64:function(){return xl.call(this)[e](!0)},sint64:function(){return xl.call(this).zzDecode()[e](!1)},fixed64:function(){return Vy.call(this)[e](!0)},sfixed64:function(){return Vy.call(this)[e](!1)}})}});var Ky=pe((vB,qy)=>{"use strict";qy.exports=Ln;var Hy=Il();(Ln.prototype=Object.create(Hy.prototype)).constructor=Ln;var Wy=_n();function Ln(n){Hy.call(this,n)}Ln._configure=function(){Wy.Buffer&&(Ln.prototype._slice=Wy.Buffer.prototype.slice)};Ln.prototype.string=function(){var e=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+e,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+e,this.len))};Ln._configure()});var Yy=pe((wB,Xy)=>{"use strict";Xy.exports=Ro;var Sl=_n();(Ro.prototype=Object.create(Sl.EventEmitter.prototype)).constructor=Ro;function Ro(n,e,r){if(typeof n!="function")throw TypeError("rpcImpl must be a function");Sl.EventEmitter.call(this),this.rpcImpl=n,this.requestDelimited=!!e,this.responseDelimited=!!r}Ro.prototype.rpcCall=function n(e,r,t,o,i){if(!o)throw TypeError("request must be specified");var a=this;if(!i)return Sl.asPromise(n,a,e,r,t,o);if(!a.rpcImpl){setTimeout(function(){i(Error("already ended"))},0);return}try{return a.rpcImpl(e,r[a.requestDelimited?"encodeDelimited":"encode"](o).finish(),function(c,p){if(c)return a.emit("error",c,e),i(c);if(p===null){a.end(!0);return}if(!(p instanceof t))try{p=t[a.responseDelimited?"decodeDelimited":"decode"](p)}catch(m){return a.emit("error",m,e),i(m)}return a.emit("data",p,e),i(null,p)})}catch(u){a.emit("error",u,e),setTimeout(function(){i(u)},0);return}};Ro.prototype.end=function(e){return this.rpcImpl&&(e||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this}});var Jy=pe(Zy=>{"use strict";var UE=Zy;UE.Service=Yy()});var eb=pe((TB,Qy)=>{"use strict";Qy.exports={}});var nb=pe(rb=>{"use strict";var Ct=rb;Ct.build="minimal";Ct.Writer=wl();Ct.BufferWriter=By();Ct.Reader=Il();Ct.BufferReader=Ky();Ct.util=_n();Ct.rpc=Jy();Ct.roots=eb();Ct.configure=tb;function tb(){Ct.util._configure(),Ct.Writer._configure(Ct.BufferWriter),Ct.Reader._configure(Ct.BufferReader)}tb()});var ib=pe((SB,ob)=>{"use strict";ob.exports=nb()});var ao=pe(($B,ab)=>{"use strict";var Qe=ib(),oe=Qe.Reader,ct=Qe.Writer,R=Qe.util,E=Qe.roots.default||(Qe.roots.default={});E.onnx=function(){var n={};return n.Version=function(){var e={},r=Object.create(e);return r[e[0]="_START_VERSION"]=0,r[e[1]="IR_VERSION_2017_10_10"]=1,r[e[2]="IR_VERSION_2017_10_30"]=2,r[e[3]="IR_VERSION_2017_11_3"]=3,r[e[4]="IR_VERSION_2019_1_22"]=4,r[e[5]="IR_VERSION_2019_3_18"]=5,r[e[6]="IR_VERSION_2019_9_19"]=6,r[e[7]="IR_VERSION_2020_5_8"]=7,r[e[8]="IR_VERSION_2021_7_30"]=8,r[e[9]="IR_VERSION"]=9,r}(),n.AttributeProto=function(){function e(r){if(this.floats=[],this.ints=[],this.strings=[],this.tensors=[],this.graphs=[],this.sparseTensors=[],this.typeProtos=[],r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.name="",e.prototype.refAttrName="",e.prototype.docString="",e.prototype.type=0,e.prototype.f=0,e.prototype.i=R.Long?R.Long.fromBits(0,0,!1):0,e.prototype.s=R.newBuffer([]),e.prototype.t=null,e.prototype.g=null,e.prototype.sparseTensor=null,e.prototype.tp=null,e.prototype.floats=R.emptyArray,e.prototype.ints=R.emptyArray,e.prototype.strings=R.emptyArray,e.prototype.tensors=R.emptyArray,e.prototype.graphs=R.emptyArray,e.prototype.sparseTensors=R.emptyArray,e.prototype.typeProtos=R.emptyArray,e.create=function(t){return new e(t)},e.encode=function(t,o){if(o||(o=ct.create()),t.name!=null&&Object.hasOwnProperty.call(t,"name")&&o.uint32(10).string(t.name),t.f!=null&&Object.hasOwnProperty.call(t,"f")&&o.uint32(21).float(t.f),t.i!=null&&Object.hasOwnProperty.call(t,"i")&&o.uint32(24).int64(t.i),t.s!=null&&Object.hasOwnProperty.call(t,"s")&&o.uint32(34).bytes(t.s),t.t!=null&&Object.hasOwnProperty.call(t,"t")&&E.onnx.TensorProto.encode(t.t,o.uint32(42).fork()).ldelim(),t.g!=null&&Object.hasOwnProperty.call(t,"g")&&E.onnx.GraphProto.encode(t.g,o.uint32(50).fork()).ldelim(),t.floats!=null&&t.floats.length){o.uint32(58).fork();for(var i=0;i<t.floats.length;++i)o.float(t.floats[i]);o.ldelim()}if(t.ints!=null&&t.ints.length){o.uint32(66).fork();for(var i=0;i<t.ints.length;++i)o.int64(t.ints[i]);o.ldelim()}if(t.strings!=null&&t.strings.length)for(var i=0;i<t.strings.length;++i)o.uint32(74).bytes(t.strings[i]);if(t.tensors!=null&&t.tensors.length)for(var i=0;i<t.tensors.length;++i)E.onnx.TensorProto.encode(t.tensors[i],o.uint32(82).fork()).ldelim();if(t.graphs!=null&&t.graphs.length)for(var i=0;i<t.graphs.length;++i)E.onnx.GraphProto.encode(t.graphs[i],o.uint32(90).fork()).ldelim();if(t.docString!=null&&Object.hasOwnProperty.call(t,"docString")&&o.uint32(106).string(t.docString),t.tp!=null&&Object.hasOwnProperty.call(t,"tp")&&E.onnx.TypeProto.encode(t.tp,o.uint32(114).fork()).ldelim(),t.typeProtos!=null&&t.typeProtos.length)for(var i=0;i<t.typeProtos.length;++i)E.onnx.TypeProto.encode(t.typeProtos[i],o.uint32(122).fork()).ldelim();if(t.type!=null&&Object.hasOwnProperty.call(t,"type")&&o.uint32(160).int32(t.type),t.refAttrName!=null&&Object.hasOwnProperty.call(t,"refAttrName")&&o.uint32(170).string(t.refAttrName),t.sparseTensor!=null&&Object.hasOwnProperty.call(t,"sparseTensor")&&E.onnx.SparseTensorProto.encode(t.sparseTensor,o.uint32(178).fork()).ldelim(),t.sparseTensors!=null&&t.sparseTensors.length)for(var i=0;i<t.sparseTensors.length;++i)E.onnx.SparseTensorProto.encode(t.sparseTensors[i],o.uint32(186).fork()).ldelim();return o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.AttributeProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.name=t.string();break}case 21:{a.refAttrName=t.string();break}case 13:{a.docString=t.string();break}case 20:{a.type=t.int32();break}case 2:{a.f=t.float();break}case 3:{a.i=t.int64();break}case 4:{a.s=t.bytes();break}case 5:{a.t=E.onnx.TensorProto.decode(t,t.uint32());break}case 6:{a.g=E.onnx.GraphProto.decode(t,t.uint32());break}case 22:{a.sparseTensor=E.onnx.SparseTensorProto.decode(t,t.uint32());break}case 14:{a.tp=E.onnx.TypeProto.decode(t,t.uint32());break}case 7:{if(a.floats&&a.floats.length||(a.floats=[]),(u&7)===2)for(var c=t.uint32()+t.pos;t.pos<c;)a.floats.push(t.float());else a.floats.push(t.float());break}case 8:{if(a.ints&&a.ints.length||(a.ints=[]),(u&7)===2)for(var c=t.uint32()+t.pos;t.pos<c;)a.ints.push(t.int64());else a.ints.push(t.int64());break}case 9:{a.strings&&a.strings.length||(a.strings=[]),a.strings.push(t.bytes());break}case 10:{a.tensors&&a.tensors.length||(a.tensors=[]),a.tensors.push(E.onnx.TensorProto.decode(t,t.uint32()));break}case 11:{a.graphs&&a.graphs.length||(a.graphs=[]),a.graphs.push(E.onnx.GraphProto.decode(t,t.uint32()));break}case 23:{a.sparseTensors&&a.sparseTensors.length||(a.sparseTensors=[]),a.sparseTensors.push(E.onnx.SparseTensorProto.decode(t,t.uint32()));break}case 15:{a.typeProtos&&a.typeProtos.length||(a.typeProtos=[]),a.typeProtos.push(E.onnx.TypeProto.decode(t,t.uint32()));break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.name!=null&&t.hasOwnProperty("name")&&!R.isString(t.name))return"name: string expected";if(t.refAttrName!=null&&t.hasOwnProperty("refAttrName")&&!R.isString(t.refAttrName))return"refAttrName: string expected";if(t.docString!=null&&t.hasOwnProperty("docString")&&!R.isString(t.docString))return"docString: string expected";if(t.type!=null&&t.hasOwnProperty("type"))switch(t.type){default:return"type: enum value expected";case 0:case 1:case 2:case 3:case 4:case 5:case 11:case 13:case 6:case 7:case 8:case 9:case 10:case 12:case 14:break}if(t.f!=null&&t.hasOwnProperty("f")&&typeof t.f!="number")return"f: number expected";if(t.i!=null&&t.hasOwnProperty("i")&&!R.isInteger(t.i)&&!(t.i&&R.isInteger(t.i.low)&&R.isInteger(t.i.high)))return"i: integer|Long expected";if(t.s!=null&&t.hasOwnProperty("s")&&!(t.s&&typeof t.s.length=="number"||R.isString(t.s)))return"s: buffer expected";if(t.t!=null&&t.hasOwnProperty("t")){var o=E.onnx.TensorProto.verify(t.t);if(o)return"t."+o}if(t.g!=null&&t.hasOwnProperty("g")){var o=E.onnx.GraphProto.verify(t.g);if(o)return"g."+o}if(t.sparseTensor!=null&&t.hasOwnProperty("sparseTensor")){var o=E.onnx.SparseTensorProto.verify(t.sparseTensor);if(o)return"sparseTensor."+o}if(t.tp!=null&&t.hasOwnProperty("tp")){var o=E.onnx.TypeProto.verify(t.tp);if(o)return"tp."+o}if(t.floats!=null&&t.hasOwnProperty("floats")){if(!Array.isArray(t.floats))return"floats: array expected";for(var i=0;i<t.floats.length;++i)if(typeof t.floats[i]!="number")return"floats: number[] expected"}if(t.ints!=null&&t.hasOwnProperty("ints")){if(!Array.isArray(t.ints))return"ints: array expected";for(var i=0;i<t.ints.length;++i)if(!R.isInteger(t.ints[i])&&!(t.ints[i]&&R.isInteger(t.ints[i].low)&&R.isInteger(t.ints[i].high)))return"ints: integer|Long[] expected"}if(t.strings!=null&&t.hasOwnProperty("strings")){if(!Array.isArray(t.strings))return"strings: array expected";for(var i=0;i<t.strings.length;++i)if(!(t.strings[i]&&typeof t.strings[i].length=="number"||R.isString(t.strings[i])))return"strings: buffer[] expected"}if(t.tensors!=null&&t.hasOwnProperty("tensors")){if(!Array.isArray(t.tensors))return"tensors: array expected";for(var i=0;i<t.tensors.length;++i){var o=E.onnx.TensorProto.verify(t.tensors[i]);if(o)return"tensors."+o}}if(t.graphs!=null&&t.hasOwnProperty("graphs")){if(!Array.isArray(t.graphs))return"graphs: array expected";for(var i=0;i<t.graphs.length;++i){var o=E.onnx.GraphProto.verify(t.graphs[i]);if(o)return"graphs."+o}}if(t.sparseTensors!=null&&t.hasOwnProperty("sparseTensors")){if(!Array.isArray(t.sparseTensors))return"sparseTensors: array expected";for(var i=0;i<t.sparseTensors.length;++i){var o=E.onnx.SparseTensorProto.verify(t.sparseTensors[i]);if(o)return"sparseTensors."+o}}if(t.typeProtos!=null&&t.hasOwnProperty("typeProtos")){if(!Array.isArray(t.typeProtos))return"typeProtos: array expected";for(var i=0;i<t.typeProtos.length;++i){var o=E.onnx.TypeProto.verify(t.typeProtos[i]);if(o)return"typeProtos."+o}}return null},e.fromObject=function(t){if(t instanceof E.onnx.AttributeProto)return t;var o=new E.onnx.AttributeProto;switch(t.name!=null&&(o.name=String(t.name)),t.refAttrName!=null&&(o.refAttrName=String(t.refAttrName)),t.docString!=null&&(o.docString=String(t.docString)),t.type){default:if(typeof t.type=="number"){o.type=t.type;break}break;case"UNDEFINED":case 0:o.type=0;break;case"FLOAT":case 1:o.type=1;break;case"INT":case 2:o.type=2;break;case"STRING":case 3:o.type=3;break;case"TENSOR":case 4:o.type=4;break;case"GRAPH":case 5:o.type=5;break;case"SPARSE_TENSOR":case 11:o.type=11;break;case"TYPE_PROTO":case 13:o.type=13;break;case"FLOATS":case 6:o.type=6;break;case"INTS":case 7:o.type=7;break;case"STRINGS":case 8:o.type=8;break;case"TENSORS":case 9:o.type=9;break;case"GRAPHS":case 10:o.type=10;break;case"SPARSE_TENSORS":case 12:o.type=12;break;case"TYPE_PROTOS":case 14:o.type=14;break}if(t.f!=null&&(o.f=Number(t.f)),t.i!=null&&(R.Long?(o.i=R.Long.fromValue(t.i)).unsigned=!1:typeof t.i=="string"?o.i=parseInt(t.i,10):typeof t.i=="number"?o.i=t.i:typeof t.i=="object"&&(o.i=new R.LongBits(t.i.low>>>0,t.i.high>>>0).toNumber())),t.s!=null&&(typeof t.s=="string"?R.base64.decode(t.s,o.s=R.newBuffer(R.base64.length(t.s)),0):t.s.length>=0&&(o.s=t.s)),t.t!=null){if(typeof t.t!="object")throw TypeError(".onnx.AttributeProto.t: object expected");o.t=E.onnx.TensorProto.fromObject(t.t)}if(t.g!=null){if(typeof t.g!="object")throw TypeError(".onnx.AttributeProto.g: object expected");o.g=E.onnx.GraphProto.fromObject(t.g)}if(t.sparseTensor!=null){if(typeof t.sparseTensor!="object")throw TypeError(".onnx.AttributeProto.sparseTensor: object expected");o.sparseTensor=E.onnx.SparseTensorProto.fromObject(t.sparseTensor)}if(t.tp!=null){if(typeof t.tp!="object")throw TypeError(".onnx.AttributeProto.tp: object expected");o.tp=E.onnx.TypeProto.fromObject(t.tp)}if(t.floats){if(!Array.isArray(t.floats))throw TypeError(".onnx.AttributeProto.floats: array expected");o.floats=[];for(var i=0;i<t.floats.length;++i)o.floats[i]=Number(t.floats[i])}if(t.ints){if(!Array.isArray(t.ints))throw TypeError(".onnx.AttributeProto.ints: array expected");o.ints=[];for(var i=0;i<t.ints.length;++i)R.Long?(o.ints[i]=R.Long.fromValue(t.ints[i])).unsigned=!1:typeof t.ints[i]=="string"?o.ints[i]=parseInt(t.ints[i],10):typeof t.ints[i]=="number"?o.ints[i]=t.ints[i]:typeof t.ints[i]=="object"&&(o.ints[i]=new R.LongBits(t.ints[i].low>>>0,t.ints[i].high>>>0).toNumber())}if(t.strings){if(!Array.isArray(t.strings))throw TypeError(".onnx.AttributeProto.strings: array expected");o.strings=[];for(var i=0;i<t.strings.length;++i)typeof t.strings[i]=="string"?R.base64.decode(t.strings[i],o.strings[i]=R.newBuffer(R.base64.length(t.strings[i])),0):t.strings[i].length>=0&&(o.strings[i]=t.strings[i])}if(t.tensors){if(!Array.isArray(t.tensors))throw TypeError(".onnx.AttributeProto.tensors: array expected");o.tensors=[];for(var i=0;i<t.tensors.length;++i){if(typeof t.tensors[i]!="object")throw TypeError(".onnx.AttributeProto.tensors: object expected");o.tensors[i]=E.onnx.TensorProto.fromObject(t.tensors[i])}}if(t.graphs){if(!Array.isArray(t.graphs))throw TypeError(".onnx.AttributeProto.graphs: array expected");o.graphs=[];for(var i=0;i<t.graphs.length;++i){if(typeof t.graphs[i]!="object")throw TypeError(".onnx.AttributeProto.graphs: object expected");o.graphs[i]=E.onnx.GraphProto.fromObject(t.graphs[i])}}if(t.sparseTensors){if(!Array.isArray(t.sparseTensors))throw TypeError(".onnx.AttributeProto.sparseTensors: array expected");o.sparseTensors=[];for(var i=0;i<t.sparseTensors.length;++i){if(typeof t.sparseTensors[i]!="object")throw TypeError(".onnx.AttributeProto.sparseTensors: object expected");o.sparseTensors[i]=E.onnx.SparseTensorProto.fromObject(t.sparseTensors[i])}}if(t.typeProtos){if(!Array.isArray(t.typeProtos))throw TypeError(".onnx.AttributeProto.typeProtos: array expected");o.typeProtos=[];for(var i=0;i<t.typeProtos.length;++i){if(typeof t.typeProtos[i]!="object")throw TypeError(".onnx.AttributeProto.typeProtos: object expected");o.typeProtos[i]=E.onnx.TypeProto.fromObject(t.typeProtos[i])}}return o},e.toObject=function(t,o){o||(o={});var i={};if((o.arrays||o.defaults)&&(i.floats=[],i.ints=[],i.strings=[],i.tensors=[],i.graphs=[],i.typeProtos=[],i.sparseTensors=[]),o.defaults){if(i.name="",i.f=0,R.Long){var a=new R.Long(0,0,!1);i.i=o.longs===String?a.toString():o.longs===Number?a.toNumber():a}else i.i=o.longs===String?"0":0;o.bytes===String?i.s="":(i.s=[],o.bytes!==Array&&(i.s=R.newBuffer(i.s))),i.t=null,i.g=null,i.docString="",i.tp=null,i.type=o.enums===String?"UNDEFINED":0,i.refAttrName="",i.sparseTensor=null}if(t.name!=null&&t.hasOwnProperty("name")&&(i.name=t.name),t.f!=null&&t.hasOwnProperty("f")&&(i.f=o.json&&!isFinite(t.f)?String(t.f):t.f),t.i!=null&&t.hasOwnProperty("i")&&(typeof t.i=="number"?i.i=o.longs===String?String(t.i):t.i:i.i=o.longs===String?R.Long.prototype.toString.call(t.i):o.longs===Number?new R.LongBits(t.i.low>>>0,t.i.high>>>0).toNumber():t.i),t.s!=null&&t.hasOwnProperty("s")&&(i.s=o.bytes===String?R.base64.encode(t.s,0,t.s.length):o.bytes===Array?Array.prototype.slice.call(t.s):t.s),t.t!=null&&t.hasOwnProperty("t")&&(i.t=E.onnx.TensorProto.toObject(t.t,o)),t.g!=null&&t.hasOwnProperty("g")&&(i.g=E.onnx.GraphProto.toObject(t.g,o)),t.floats&&t.floats.length){i.floats=[];for(var u=0;u<t.floats.length;++u)i.floats[u]=o.json&&!isFinite(t.floats[u])?String(t.floats[u]):t.floats[u]}if(t.ints&&t.ints.length){i.ints=[];for(var u=0;u<t.ints.length;++u)typeof t.ints[u]=="number"?i.ints[u]=o.longs===String?String(t.ints[u]):t.ints[u]:i.ints[u]=o.longs===String?R.Long.prototype.toString.call(t.ints[u]):o.longs===Number?new R.LongBits(t.ints[u].low>>>0,t.ints[u].high>>>0).toNumber():t.ints[u]}if(t.strings&&t.strings.length){i.strings=[];for(var u=0;u<t.strings.length;++u)i.strings[u]=o.bytes===String?R.base64.encode(t.strings[u],0,t.strings[u].length):o.bytes===Array?Array.prototype.slice.call(t.strings[u]):t.strings[u]}if(t.tensors&&t.tensors.length){i.tensors=[];for(var u=0;u<t.tensors.length;++u)i.tensors[u]=E.onnx.TensorProto.toObject(t.tensors[u],o)}if(t.graphs&&t.graphs.length){i.graphs=[];for(var u=0;u<t.graphs.length;++u)i.graphs[u]=E.onnx.GraphProto.toObject(t.graphs[u],o)}if(t.docString!=null&&t.hasOwnProperty("docString")&&(i.docString=t.docString),t.tp!=null&&t.hasOwnProperty("tp")&&(i.tp=E.onnx.TypeProto.toObject(t.tp,o)),t.typeProtos&&t.typeProtos.length){i.typeProtos=[];for(var u=0;u<t.typeProtos.length;++u)i.typeProtos[u]=E.onnx.TypeProto.toObject(t.typeProtos[u],o)}if(t.type!=null&&t.hasOwnProperty("type")&&(i.type=o.enums===String?E.onnx.AttributeProto.AttributeType[t.type]===void 0?t.type:E.onnx.AttributeProto.AttributeType[t.type]:t.type),t.refAttrName!=null&&t.hasOwnProperty("refAttrName")&&(i.refAttrName=t.refAttrName),t.sparseTensor!=null&&t.hasOwnProperty("sparseTensor")&&(i.sparseTensor=E.onnx.SparseTensorProto.toObject(t.sparseTensor,o)),t.sparseTensors&&t.sparseTensors.length){i.sparseTensors=[];for(var u=0;u<t.sparseTensors.length;++u)i.sparseTensors[u]=E.onnx.SparseTensorProto.toObject(t.sparseTensors[u],o)}return i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Qe.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.AttributeProto"},e.AttributeType=function(){var r={},t=Object.create(r);return t[r[0]="UNDEFINED"]=0,t[r[1]="FLOAT"]=1,t[r[2]="INT"]=2,t[r[3]="STRING"]=3,t[r[4]="TENSOR"]=4,t[r[5]="GRAPH"]=5,t[r[11]="SPARSE_TENSOR"]=11,t[r[13]="TYPE_PROTO"]=13,t[r[6]="FLOATS"]=6,t[r[7]="INTS"]=7,t[r[8]="STRINGS"]=8,t[r[9]="TENSORS"]=9,t[r[10]="GRAPHS"]=10,t[r[12]="SPARSE_TENSORS"]=12,t[r[14]="TYPE_PROTOS"]=14,t}(),e}(),n.ValueInfoProto=function(){function e(r){if(r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.name="",e.prototype.type=null,e.prototype.docString="",e.create=function(t){return new e(t)},e.encode=function(t,o){return o||(o=ct.create()),t.name!=null&&Object.hasOwnProperty.call(t,"name")&&o.uint32(10).string(t.name),t.type!=null&&Object.hasOwnProperty.call(t,"type")&&E.onnx.TypeProto.encode(t.type,o.uint32(18).fork()).ldelim(),t.docString!=null&&Object.hasOwnProperty.call(t,"docString")&&o.uint32(26).string(t.docString),o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.ValueInfoProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.name=t.string();break}case 2:{a.type=E.onnx.TypeProto.decode(t,t.uint32());break}case 3:{a.docString=t.string();break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.name!=null&&t.hasOwnProperty("name")&&!R.isString(t.name))return"name: string expected";if(t.type!=null&&t.hasOwnProperty("type")){var o=E.onnx.TypeProto.verify(t.type);if(o)return"type."+o}return t.docString!=null&&t.hasOwnProperty("docString")&&!R.isString(t.docString)?"docString: string expected":null},e.fromObject=function(t){if(t instanceof E.onnx.ValueInfoProto)return t;var o=new E.onnx.ValueInfoProto;if(t.name!=null&&(o.name=String(t.name)),t.type!=null){if(typeof t.type!="object")throw TypeError(".onnx.ValueInfoProto.type: object expected");o.type=E.onnx.TypeProto.fromObject(t.type)}return t.docString!=null&&(o.docString=String(t.docString)),o},e.toObject=function(t,o){o||(o={});var i={};return o.defaults&&(i.name="",i.type=null,i.docString=""),t.name!=null&&t.hasOwnProperty("name")&&(i.name=t.name),t.type!=null&&t.hasOwnProperty("type")&&(i.type=E.onnx.TypeProto.toObject(t.type,o)),t.docString!=null&&t.hasOwnProperty("docString")&&(i.docString=t.docString),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Qe.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.ValueInfoProto"},e}(),n.NodeProto=function(){function e(r){if(this.input=[],this.output=[],this.attribute=[],r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.input=R.emptyArray,e.prototype.output=R.emptyArray,e.prototype.name="",e.prototype.opType="",e.prototype.domain="",e.prototype.attribute=R.emptyArray,e.prototype.docString="",e.create=function(t){return new e(t)},e.encode=function(t,o){if(o||(o=ct.create()),t.input!=null&&t.input.length)for(var i=0;i<t.input.length;++i)o.uint32(10).string(t.input[i]);if(t.output!=null&&t.output.length)for(var i=0;i<t.output.length;++i)o.uint32(18).string(t.output[i]);if(t.name!=null&&Object.hasOwnProperty.call(t,"name")&&o.uint32(26).string(t.name),t.opType!=null&&Object.hasOwnProperty.call(t,"opType")&&o.uint32(34).string(t.opType),t.attribute!=null&&t.attribute.length)for(var i=0;i<t.attribute.length;++i)E.onnx.AttributeProto.encode(t.attribute[i],o.uint32(42).fork()).ldelim();return t.docString!=null&&Object.hasOwnProperty.call(t,"docString")&&o.uint32(50).string(t.docString),t.domain!=null&&Object.hasOwnProperty.call(t,"domain")&&o.uint32(58).string(t.domain),o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.NodeProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.input&&a.input.length||(a.input=[]),a.input.push(t.string());break}case 2:{a.output&&a.output.length||(a.output=[]),a.output.push(t.string());break}case 3:{a.name=t.string();break}case 4:{a.opType=t.string();break}case 7:{a.domain=t.string();break}case 5:{a.attribute&&a.attribute.length||(a.attribute=[]),a.attribute.push(E.onnx.AttributeProto.decode(t,t.uint32()));break}case 6:{a.docString=t.string();break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.input!=null&&t.hasOwnProperty("input")){if(!Array.isArray(t.input))return"input: array expected";for(var o=0;o<t.input.length;++o)if(!R.isString(t.input[o]))return"input: string[] expected"}if(t.output!=null&&t.hasOwnProperty("output")){if(!Array.isArray(t.output))return"output: array expected";for(var o=0;o<t.output.length;++o)if(!R.isString(t.output[o]))return"output: string[] expected"}if(t.name!=null&&t.hasOwnProperty("name")&&!R.isString(t.name))return"name: string expected";if(t.opType!=null&&t.hasOwnProperty("opType")&&!R.isString(t.opType))return"opType: string expected";if(t.domain!=null&&t.hasOwnProperty("domain")&&!R.isString(t.domain))return"domain: string expected";if(t.attribute!=null&&t.hasOwnProperty("attribute")){if(!Array.isArray(t.attribute))return"attribute: array expected";for(var o=0;o<t.attribute.length;++o){var i=E.onnx.AttributeProto.verify(t.attribute[o]);if(i)return"attribute."+i}}return t.docString!=null&&t.hasOwnProperty("docString")&&!R.isString(t.docString)?"docString: string expected":null},e.fromObject=function(t){if(t instanceof E.onnx.NodeProto)return t;var o=new E.onnx.NodeProto;if(t.input){if(!Array.isArray(t.input))throw TypeError(".onnx.NodeProto.input: array expected");o.input=[];for(var i=0;i<t.input.length;++i)o.input[i]=String(t.input[i])}if(t.output){if(!Array.isArray(t.output))throw TypeError(".onnx.NodeProto.output: array expected");o.output=[];for(var i=0;i<t.output.length;++i)o.output[i]=String(t.output[i])}if(t.name!=null&&(o.name=String(t.name)),t.opType!=null&&(o.opType=String(t.opType)),t.domain!=null&&(o.domain=String(t.domain)),t.attribute){if(!Array.isArray(t.attribute))throw TypeError(".onnx.NodeProto.attribute: array expected");o.attribute=[];for(var i=0;i<t.attribute.length;++i){if(typeof t.attribute[i]!="object")throw TypeError(".onnx.NodeProto.attribute: object expected");o.attribute[i]=E.onnx.AttributeProto.fromObject(t.attribute[i])}}return t.docString!=null&&(o.docString=String(t.docString)),o},e.toObject=function(t,o){o||(o={});var i={};if((o.arrays||o.defaults)&&(i.input=[],i.output=[],i.attribute=[]),o.defaults&&(i.name="",i.opType="",i.docString="",i.domain=""),t.input&&t.input.length){i.input=[];for(var a=0;a<t.input.length;++a)i.input[a]=t.input[a]}if(t.output&&t.output.length){i.output=[];for(var a=0;a<t.output.length;++a)i.output[a]=t.output[a]}if(t.name!=null&&t.hasOwnProperty("name")&&(i.name=t.name),t.opType!=null&&t.hasOwnProperty("opType")&&(i.opType=t.opType),t.attribute&&t.attribute.length){i.attribute=[];for(var a=0;a<t.attribute.length;++a)i.attribute[a]=E.onnx.AttributeProto.toObject(t.attribute[a],o)}return t.docString!=null&&t.hasOwnProperty("docString")&&(i.docString=t.docString),t.domain!=null&&t.hasOwnProperty("domain")&&(i.domain=t.domain),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Qe.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.NodeProto"},e}(),n.TrainingInfoProto=function(){function e(r){if(this.initializationBinding=[],this.updateBinding=[],r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.initialization=null,e.prototype.algorithm=null,e.prototype.initializationBinding=R.emptyArray,e.prototype.updateBinding=R.emptyArray,e.create=function(t){return new e(t)},e.encode=function(t,o){if(o||(o=ct.create()),t.initialization!=null&&Object.hasOwnProperty.call(t,"initialization")&&E.onnx.GraphProto.encode(t.initialization,o.uint32(10).fork()).ldelim(),t.algorithm!=null&&Object.hasOwnProperty.call(t,"algorithm")&&E.onnx.GraphProto.encode(t.algorithm,o.uint32(18).fork()).ldelim(),t.initializationBinding!=null&&t.initializationBinding.length)for(var i=0;i<t.initializationBinding.length;++i)E.onnx.StringStringEntryProto.encode(t.initializationBinding[i],o.uint32(26).fork()).ldelim();if(t.updateBinding!=null&&t.updateBinding.length)for(var i=0;i<t.updateBinding.length;++i)E.onnx.StringStringEntryProto.encode(t.updateBinding[i],o.uint32(34).fork()).ldelim();return o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.TrainingInfoProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.initialization=E.onnx.GraphProto.decode(t,t.uint32());break}case 2:{a.algorithm=E.onnx.GraphProto.decode(t,t.uint32());break}case 3:{a.initializationBinding&&a.initializationBinding.length||(a.initializationBinding=[]),a.initializationBinding.push(E.onnx.StringStringEntryProto.decode(t,t.uint32()));break}case 4:{a.updateBinding&&a.updateBinding.length||(a.updateBinding=[]),a.updateBinding.push(E.onnx.StringStringEntryProto.decode(t,t.uint32()));break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.initialization!=null&&t.hasOwnProperty("initialization")){var o=E.onnx.GraphProto.verify(t.initialization);if(o)return"initialization."+o}if(t.algorithm!=null&&t.hasOwnProperty("algorithm")){var o=E.onnx.GraphProto.verify(t.algorithm);if(o)return"algorithm."+o}if(t.initializationBinding!=null&&t.hasOwnProperty("initializationBinding")){if(!Array.isArray(t.initializationBinding))return"initializationBinding: array expected";for(var i=0;i<t.initializationBinding.length;++i){var o=E.onnx.StringStringEntryProto.verify(t.initializationBinding[i]);if(o)return"initializationBinding."+o}}if(t.updateBinding!=null&&t.hasOwnProperty("updateBinding")){if(!Array.isArray(t.updateBinding))return"updateBinding: array expected";for(var i=0;i<t.updateBinding.length;++i){var o=E.onnx.StringStringEntryProto.verify(t.updateBinding[i]);if(o)return"updateBinding."+o}}return null},e.fromObject=function(t){if(t instanceof E.onnx.TrainingInfoProto)return t;var o=new E.onnx.TrainingInfoProto;if(t.initialization!=null){if(typeof t.initialization!="object")throw TypeError(".onnx.TrainingInfoProto.initialization: object expected");o.initialization=E.onnx.GraphProto.fromObject(t.initialization)}if(t.algorithm!=null){if(typeof t.algorithm!="object")throw TypeError(".onnx.TrainingInfoProto.algorithm: object expected");o.algorithm=E.onnx.GraphProto.fromObject(t.algorithm)}if(t.initializationBinding){if(!Array.isArray(t.initializationBinding))throw TypeError(".onnx.TrainingInfoProto.initializationBinding: array expected");o.initializationBinding=[];for(var i=0;i<t.initializationBinding.length;++i){if(typeof t.initializationBinding[i]!="object")throw TypeError(".onnx.TrainingInfoProto.initializationBinding: object expected");o.initializationBinding[i]=E.onnx.StringStringEntryProto.fromObject(t.initializationBinding[i])}}if(t.updateBinding){if(!Array.isArray(t.updateBinding))throw TypeError(".onnx.TrainingInfoProto.updateBinding: array expected");o.updateBinding=[];for(var i=0;i<t.updateBinding.length;++i){if(typeof t.updateBinding[i]!="object")throw TypeError(".onnx.TrainingInfoProto.updateBinding: object expected");o.updateBinding[i]=E.onnx.StringStringEntryProto.fromObject(t.updateBinding[i])}}return o},e.toObject=function(t,o){o||(o={});var i={};if((o.arrays||o.defaults)&&(i.initializationBinding=[],i.updateBinding=[]),o.defaults&&(i.initialization=null,i.algorithm=null),t.initialization!=null&&t.hasOwnProperty("initialization")&&(i.initialization=E.onnx.GraphProto.toObject(t.initialization,o)),t.algorithm!=null&&t.hasOwnProperty("algorithm")&&(i.algorithm=E.onnx.GraphProto.toObject(t.algorithm,o)),t.initializationBinding&&t.initializationBinding.length){i.initializationBinding=[];for(var a=0;a<t.initializationBinding.length;++a)i.initializationBinding[a]=E.onnx.StringStringEntryProto.toObject(t.initializationBinding[a],o)}if(t.updateBinding&&t.updateBinding.length){i.updateBinding=[];for(var a=0;a<t.updateBinding.length;++a)i.updateBinding[a]=E.onnx.StringStringEntryProto.toObject(t.updateBinding[a],o)}return i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Qe.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.TrainingInfoProto"},e}(),n.ModelProto=function(){function e(r){if(this.opsetImport=[],this.metadataProps=[],this.trainingInfo=[],this.functions=[],r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.irVersion=R.Long?R.Long.fromBits(0,0,!1):0,e.prototype.opsetImport=R.emptyArray,e.prototype.producerName="",e.prototype.producerVersion="",e.prototype.domain="",e.prototype.modelVersion=R.Long?R.Long.fromBits(0,0,!1):0,e.prototype.docString="",e.prototype.graph=null,e.prototype.metadataProps=R.emptyArray,e.prototype.trainingInfo=R.emptyArray,e.prototype.functions=R.emptyArray,e.create=function(t){return new e(t)},e.encode=function(t,o){if(o||(o=ct.create()),t.irVersion!=null&&Object.hasOwnProperty.call(t,"irVersion")&&o.uint32(8).int64(t.irVersion),t.producerName!=null&&Object.hasOwnProperty.call(t,"producerName")&&o.uint32(18).string(t.producerName),t.producerVersion!=null&&Object.hasOwnProperty.call(t,"producerVersion")&&o.uint32(26).string(t.producerVersion),t.domain!=null&&Object.hasOwnProperty.call(t,"domain")&&o.uint32(34).string(t.domain),t.modelVersion!=null&&Object.hasOwnProperty.call(t,"modelVersion")&&o.uint32(40).int64(t.modelVersion),t.docString!=null&&Object.hasOwnProperty.call(t,"docString")&&o.uint32(50).string(t.docString),t.graph!=null&&Object.hasOwnProperty.call(t,"graph")&&E.onnx.GraphProto.encode(t.graph,o.uint32(58).fork()).ldelim(),t.opsetImport!=null&&t.opsetImport.length)for(var i=0;i<t.opsetImport.length;++i)E.onnx.OperatorSetIdProto.encode(t.opsetImport[i],o.uint32(66).fork()).ldelim();if(t.metadataProps!=null&&t.metadataProps.length)for(var i=0;i<t.metadataProps.length;++i)E.onnx.StringStringEntryProto.encode(t.metadataProps[i],o.uint32(114).fork()).ldelim();if(t.trainingInfo!=null&&t.trainingInfo.length)for(var i=0;i<t.trainingInfo.length;++i)E.onnx.TrainingInfoProto.encode(t.trainingInfo[i],o.uint32(162).fork()).ldelim();if(t.functions!=null&&t.functions.length)for(var i=0;i<t.functions.length;++i)E.onnx.FunctionProto.encode(t.functions[i],o.uint32(202).fork()).ldelim();return o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.ModelProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.irVersion=t.int64();break}case 8:{a.opsetImport&&a.opsetImport.length||(a.opsetImport=[]),a.opsetImport.push(E.onnx.OperatorSetIdProto.decode(t,t.uint32()));break}case 2:{a.producerName=t.string();break}case 3:{a.producerVersion=t.string();break}case 4:{a.domain=t.string();break}case 5:{a.modelVersion=t.int64();break}case 6:{a.docString=t.string();break}case 7:{a.graph=E.onnx.GraphProto.decode(t,t.uint32());break}case 14:{a.metadataProps&&a.metadataProps.length||(a.metadataProps=[]),a.metadataProps.push(E.onnx.StringStringEntryProto.decode(t,t.uint32()));break}case 20:{a.trainingInfo&&a.trainingInfo.length||(a.trainingInfo=[]),a.trainingInfo.push(E.onnx.TrainingInfoProto.decode(t,t.uint32()));break}case 25:{a.functions&&a.functions.length||(a.functions=[]),a.functions.push(E.onnx.FunctionProto.decode(t,t.uint32()));break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.irVersion!=null&&t.hasOwnProperty("irVersion")&&!R.isInteger(t.irVersion)&&!(t.irVersion&&R.isInteger(t.irVersion.low)&&R.isInteger(t.irVersion.high)))return"irVersion: integer|Long expected";if(t.opsetImport!=null&&t.hasOwnProperty("opsetImport")){if(!Array.isArray(t.opsetImport))return"opsetImport: array expected";for(var o=0;o<t.opsetImport.length;++o){var i=E.onnx.OperatorSetIdProto.verify(t.opsetImport[o]);if(i)return"opsetImport."+i}}if(t.producerName!=null&&t.hasOwnProperty("producerName")&&!R.isString(t.producerName))return"producerName: string expected";if(t.producerVersion!=null&&t.hasOwnProperty("producerVersion")&&!R.isString(t.producerVersion))return"producerVersion: string expected";if(t.domain!=null&&t.hasOwnProperty("domain")&&!R.isString(t.domain))return"domain: string expected";if(t.modelVersion!=null&&t.hasOwnProperty("modelVersion")&&!R.isInteger(t.modelVersion)&&!(t.modelVersion&&R.isInteger(t.modelVersion.low)&&R.isInteger(t.modelVersion.high)))return"modelVersion: integer|Long expected";if(t.docString!=null&&t.hasOwnProperty("docString")&&!R.isString(t.docString))return"docString: string expected";if(t.graph!=null&&t.hasOwnProperty("graph")){var i=E.onnx.GraphProto.verify(t.graph);if(i)return"graph."+i}if(t.metadataProps!=null&&t.hasOwnProperty("metadataProps")){if(!Array.isArray(t.metadataProps))return"metadataProps: array expected";for(var o=0;o<t.metadataProps.length;++o){var i=E.onnx.StringStringEntryProto.verify(t.metadataProps[o]);if(i)return"metadataProps."+i}}if(t.trainingInfo!=null&&t.hasOwnProperty("trainingInfo")){if(!Array.isArray(t.trainingInfo))return"trainingInfo: array expected";for(var o=0;o<t.trainingInfo.length;++o){var i=E.onnx.TrainingInfoProto.verify(t.trainingInfo[o]);if(i)return"trainingInfo."+i}}if(t.functions!=null&&t.hasOwnProperty("functions")){if(!Array.isArray(t.functions))return"functions: array expected";for(var o=0;o<t.functions.length;++o){var i=E.onnx.FunctionProto.verify(t.functions[o]);if(i)return"functions."+i}}return null},e.fromObject=function(t){if(t instanceof E.onnx.ModelProto)return t;var o=new E.onnx.ModelProto;if(t.irVersion!=null&&(R.Long?(o.irVersion=R.Long.fromValue(t.irVersion)).unsigned=!1:typeof t.irVersion=="string"?o.irVersion=parseInt(t.irVersion,10):typeof t.irVersion=="number"?o.irVersion=t.irVersion:typeof t.irVersion=="object"&&(o.irVersion=new R.LongBits(t.irVersion.low>>>0,t.irVersion.high>>>0).toNumber())),t.opsetImport){if(!Array.isArray(t.opsetImport))throw TypeError(".onnx.ModelProto.opsetImport: array expected");o.opsetImport=[];for(var i=0;i<t.opsetImport.length;++i){if(typeof t.opsetImport[i]!="object")throw TypeError(".onnx.ModelProto.opsetImport: object expected");o.opsetImport[i]=E.onnx.OperatorSetIdProto.fromObject(t.opsetImport[i])}}if(t.producerName!=null&&(o.producerName=String(t.producerName)),t.producerVersion!=null&&(o.producerVersion=String(t.producerVersion)),t.domain!=null&&(o.domain=String(t.domain)),t.modelVersion!=null&&(R.Long?(o.modelVersion=R.Long.fromValue(t.modelVersion)).unsigned=!1:typeof t.modelVersion=="string"?o.modelVersion=parseInt(t.modelVersion,10):typeof t.modelVersion=="number"?o.modelVersion=t.modelVersion:typeof t.modelVersion=="object"&&(o.modelVersion=new R.LongBits(t.modelVersion.low>>>0,t.modelVersion.high>>>0).toNumber())),t.docString!=null&&(o.docString=String(t.docString)),t.graph!=null){if(typeof t.graph!="object")throw TypeError(".onnx.ModelProto.graph: object expected");o.graph=E.onnx.GraphProto.fromObject(t.graph)}if(t.metadataProps){if(!Array.isArray(t.metadataProps))throw TypeError(".onnx.ModelProto.metadataProps: array expected");o.metadataProps=[];for(var i=0;i<t.metadataProps.length;++i){if(typeof t.metadataProps[i]!="object")throw TypeError(".onnx.ModelProto.metadataProps: object expected");o.metadataProps[i]=E.onnx.StringStringEntryProto.fromObject(t.metadataProps[i])}}if(t.trainingInfo){if(!Array.isArray(t.trainingInfo))throw TypeError(".onnx.ModelProto.trainingInfo: array expected");o.trainingInfo=[];for(var i=0;i<t.trainingInfo.length;++i){if(typeof t.trainingInfo[i]!="object")throw TypeError(".onnx.ModelProto.trainingInfo: object expected");o.trainingInfo[i]=E.onnx.TrainingInfoProto.fromObject(t.trainingInfo[i])}}if(t.functions){if(!Array.isArray(t.functions))throw TypeError(".onnx.ModelProto.functions: array expected");o.functions=[];for(var i=0;i<t.functions.length;++i){if(typeof t.functions[i]!="object")throw TypeError(".onnx.ModelProto.functions: object expected");o.functions[i]=E.onnx.FunctionProto.fromObject(t.functions[i])}}return o},e.toObject=function(t,o){o||(o={});var i={};if((o.arrays||o.defaults)&&(i.opsetImport=[],i.metadataProps=[],i.trainingInfo=[],i.functions=[]),o.defaults){if(R.Long){var a=new R.Long(0,0,!1);i.irVersion=o.longs===String?a.toString():o.longs===Number?a.toNumber():a}else i.irVersion=o.longs===String?"0":0;if(i.producerName="",i.producerVersion="",i.domain="",R.Long){var a=new R.Long(0,0,!1);i.modelVersion=o.longs===String?a.toString():o.longs===Number?a.toNumber():a}else i.modelVersion=o.longs===String?"0":0;i.docString="",i.graph=null}if(t.irVersion!=null&&t.hasOwnProperty("irVersion")&&(typeof t.irVersion=="number"?i.irVersion=o.longs===String?String(t.irVersion):t.irVersion:i.irVersion=o.longs===String?R.Long.prototype.toString.call(t.irVersion):o.longs===Number?new R.LongBits(t.irVersion.low>>>0,t.irVersion.high>>>0).toNumber():t.irVersion),t.producerName!=null&&t.hasOwnProperty("producerName")&&(i.producerName=t.producerName),t.producerVersion!=null&&t.hasOwnProperty("producerVersion")&&(i.producerVersion=t.producerVersion),t.domain!=null&&t.hasOwnProperty("domain")&&(i.domain=t.domain),t.modelVersion!=null&&t.hasOwnProperty("modelVersion")&&(typeof t.modelVersion=="number"?i.modelVersion=o.longs===String?String(t.modelVersion):t.modelVersion:i.modelVersion=o.longs===String?R.Long.prototype.toString.call(t.modelVersion):o.longs===Number?new R.LongBits(t.modelVersion.low>>>0,t.modelVersion.high>>>0).toNumber():t.modelVersion),t.docString!=null&&t.hasOwnProperty("docString")&&(i.docString=t.docString),t.graph!=null&&t.hasOwnProperty("graph")&&(i.graph=E.onnx.GraphProto.toObject(t.graph,o)),t.opsetImport&&t.opsetImport.length){i.opsetImport=[];for(var u=0;u<t.opsetImport.length;++u)i.opsetImport[u]=E.onnx.OperatorSetIdProto.toObject(t.opsetImport[u],o)}if(t.metadataProps&&t.metadataProps.length){i.metadataProps=[];for(var u=0;u<t.metadataProps.length;++u)i.metadataProps[u]=E.onnx.StringStringEntryProto.toObject(t.metadataProps[u],o)}if(t.trainingInfo&&t.trainingInfo.length){i.trainingInfo=[];for(var u=0;u<t.trainingInfo.length;++u)i.trainingInfo[u]=E.onnx.TrainingInfoProto.toObject(t.trainingInfo[u],o)}if(t.functions&&t.functions.length){i.functions=[];for(var u=0;u<t.functions.length;++u)i.functions[u]=E.onnx.FunctionProto.toObject(t.functions[u],o)}return i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Qe.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.ModelProto"},e}(),n.StringStringEntryProto=function(){function e(r){if(r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.key="",e.prototype.value="",e.create=function(t){return new e(t)},e.encode=function(t,o){return o||(o=ct.create()),t.key!=null&&Object.hasOwnProperty.call(t,"key")&&o.uint32(10).string(t.key),t.value!=null&&Object.hasOwnProperty.call(t,"value")&&o.uint32(18).string(t.value),o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.StringStringEntryProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.key=t.string();break}case 2:{a.value=t.string();break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){return typeof t!="object"||t===null?"object expected":t.key!=null&&t.hasOwnProperty("key")&&!R.isString(t.key)?"key: string expected":t.value!=null&&t.hasOwnProperty("value")&&!R.isString(t.value)?"value: string expected":null},e.fromObject=function(t){if(t instanceof E.onnx.StringStringEntryProto)return t;var o=new E.onnx.StringStringEntryProto;return t.key!=null&&(o.key=String(t.key)),t.value!=null&&(o.value=String(t.value)),o},e.toObject=function(t,o){o||(o={});var i={};return o.defaults&&(i.key="",i.value=""),t.key!=null&&t.hasOwnProperty("key")&&(i.key=t.key),t.value!=null&&t.hasOwnProperty("value")&&(i.value=t.value),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Qe.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.StringStringEntryProto"},e}(),n.TensorAnnotation=function(){function e(r){if(this.quantParameterTensorNames=[],r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.tensorName="",e.prototype.quantParameterTensorNames=R.emptyArray,e.create=function(t){return new e(t)},e.encode=function(t,o){if(o||(o=ct.create()),t.tensorName!=null&&Object.hasOwnProperty.call(t,"tensorName")&&o.uint32(10).string(t.tensorName),t.quantParameterTensorNames!=null&&t.quantParameterTensorNames.length)for(var i=0;i<t.quantParameterTensorNames.length;++i)E.onnx.StringStringEntryProto.encode(t.quantParameterTensorNames[i],o.uint32(18).fork()).ldelim();return o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.TensorAnnotation;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.tensorName=t.string();break}case 2:{a.quantParameterTensorNames&&a.quantParameterTensorNames.length||(a.quantParameterTensorNames=[]),a.quantParameterTensorNames.push(E.onnx.StringStringEntryProto.decode(t,t.uint32()));break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.tensorName!=null&&t.hasOwnProperty("tensorName")&&!R.isString(t.tensorName))return"tensorName: string expected";if(t.quantParameterTensorNames!=null&&t.hasOwnProperty("quantParameterTensorNames")){if(!Array.isArray(t.quantParameterTensorNames))return"quantParameterTensorNames: array expected";for(var o=0;o<t.quantParameterTensorNames.length;++o){var i=E.onnx.StringStringEntryProto.verify(t.quantParameterTensorNames[o]);if(i)return"quantParameterTensorNames."+i}}return null},e.fromObject=function(t){if(t instanceof E.onnx.TensorAnnotation)return t;var o=new E.onnx.TensorAnnotation;if(t.tensorName!=null&&(o.tensorName=String(t.tensorName)),t.quantParameterTensorNames){if(!Array.isArray(t.quantParameterTensorNames))throw TypeError(".onnx.TensorAnnotation.quantParameterTensorNames: array expected");o.quantParameterTensorNames=[];for(var i=0;i<t.quantParameterTensorNames.length;++i){if(typeof t.quantParameterTensorNames[i]!="object")throw TypeError(".onnx.TensorAnnotation.quantParameterTensorNames: object expected");o.quantParameterTensorNames[i]=E.onnx.StringStringEntryProto.fromObject(t.quantParameterTensorNames[i])}}return o},e.toObject=function(t,o){o||(o={});var i={};if((o.arrays||o.defaults)&&(i.quantParameterTensorNames=[]),o.defaults&&(i.tensorName=""),t.tensorName!=null&&t.hasOwnProperty("tensorName")&&(i.tensorName=t.tensorName),t.quantParameterTensorNames&&t.quantParameterTensorNames.length){i.quantParameterTensorNames=[];for(var a=0;a<t.quantParameterTensorNames.length;++a)i.quantParameterTensorNames[a]=E.onnx.StringStringEntryProto.toObject(t.quantParameterTensorNames[a],o)}return i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Qe.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.TensorAnnotation"},e}(),n.GraphProto=function(){function e(r){if(this.node=[],this.initializer=[],this.sparseInitializer=[],this.input=[],this.output=[],this.valueInfo=[],this.quantizationAnnotation=[],r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.node=R.emptyArray,e.prototype.name="",e.prototype.initializer=R.emptyArray,e.prototype.sparseInitializer=R.emptyArray,e.prototype.docString="",e.prototype.input=R.emptyArray,e.prototype.output=R.emptyArray,e.prototype.valueInfo=R.emptyArray,e.prototype.quantizationAnnotation=R.emptyArray,e.create=function(t){return new e(t)},e.encode=function(t,o){if(o||(o=ct.create()),t.node!=null&&t.node.length)for(var i=0;i<t.node.length;++i)E.onnx.NodeProto.encode(t.node[i],o.uint32(10).fork()).ldelim();if(t.name!=null&&Object.hasOwnProperty.call(t,"name")&&o.uint32(18).string(t.name),t.initializer!=null&&t.initializer.length)for(var i=0;i<t.initializer.length;++i)E.onnx.TensorProto.encode(t.initializer[i],o.uint32(42).fork()).ldelim();if(t.docString!=null&&Object.hasOwnProperty.call(t,"docString")&&o.uint32(82).string(t.docString),t.input!=null&&t.input.length)for(var i=0;i<t.input.length;++i)E.onnx.ValueInfoProto.encode(t.input[i],o.uint32(90).fork()).ldelim();if(t.output!=null&&t.output.length)for(var i=0;i<t.output.length;++i)E.onnx.ValueInfoProto.encode(t.output[i],o.uint32(98).fork()).ldelim();if(t.valueInfo!=null&&t.valueInfo.length)for(var i=0;i<t.valueInfo.length;++i)E.onnx.ValueInfoProto.encode(t.valueInfo[i],o.uint32(106).fork()).ldelim();if(t.quantizationAnnotation!=null&&t.quantizationAnnotation.length)for(var i=0;i<t.quantizationAnnotation.length;++i)E.onnx.TensorAnnotation.encode(t.quantizationAnnotation[i],o.uint32(114).fork()).ldelim();if(t.sparseInitializer!=null&&t.sparseInitializer.length)for(var i=0;i<t.sparseInitializer.length;++i)E.onnx.SparseTensorProto.encode(t.sparseInitializer[i],o.uint32(122).fork()).ldelim();return o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.GraphProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.node&&a.node.length||(a.node=[]),a.node.push(E.onnx.NodeProto.decode(t,t.uint32()));break}case 2:{a.name=t.string();break}case 5:{a.initializer&&a.initializer.length||(a.initializer=[]),a.initializer.push(E.onnx.TensorProto.decode(t,t.uint32()));break}case 15:{a.sparseInitializer&&a.sparseInitializer.length||(a.sparseInitializer=[]),a.sparseInitializer.push(E.onnx.SparseTensorProto.decode(t,t.uint32()));break}case 10:{a.docString=t.string();break}case 11:{a.input&&a.input.length||(a.input=[]),a.input.push(E.onnx.ValueInfoProto.decode(t,t.uint32()));break}case 12:{a.output&&a.output.length||(a.output=[]),a.output.push(E.onnx.ValueInfoProto.decode(t,t.uint32()));break}case 13:{a.valueInfo&&a.valueInfo.length||(a.valueInfo=[]),a.valueInfo.push(E.onnx.ValueInfoProto.decode(t,t.uint32()));break}case 14:{a.quantizationAnnotation&&a.quantizationAnnotation.length||(a.quantizationAnnotation=[]),a.quantizationAnnotation.push(E.onnx.TensorAnnotation.decode(t,t.uint32()));break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.node!=null&&t.hasOwnProperty("node")){if(!Array.isArray(t.node))return"node: array expected";for(var o=0;o<t.node.length;++o){var i=E.onnx.NodeProto.verify(t.node[o]);if(i)return"node."+i}}if(t.name!=null&&t.hasOwnProperty("name")&&!R.isString(t.name))return"name: string expected";if(t.initializer!=null&&t.hasOwnProperty("initializer")){if(!Array.isArray(t.initializer))return"initializer: array expected";for(var o=0;o<t.initializer.length;++o){var i=E.onnx.TensorProto.verify(t.initializer[o]);if(i)return"initializer."+i}}if(t.sparseInitializer!=null&&t.hasOwnProperty("sparseInitializer")){if(!Array.isArray(t.sparseInitializer))return"sparseInitializer: array expected";for(var o=0;o<t.sparseInitializer.length;++o){var i=E.onnx.SparseTensorProto.verify(t.sparseInitializer[o]);if(i)return"sparseInitializer."+i}}if(t.docString!=null&&t.hasOwnProperty("docString")&&!R.isString(t.docString))return"docString: string expected";if(t.input!=null&&t.hasOwnProperty("input")){if(!Array.isArray(t.input))return"input: array expected";for(var o=0;o<t.input.length;++o){var i=E.onnx.ValueInfoProto.verify(t.input[o]);if(i)return"input."+i}}if(t.output!=null&&t.hasOwnProperty("output")){if(!Array.isArray(t.output))return"output: array expected";for(var o=0;o<t.output.length;++o){var i=E.onnx.ValueInfoProto.verify(t.output[o]);if(i)return"output."+i}}if(t.valueInfo!=null&&t.hasOwnProperty("valueInfo")){if(!Array.isArray(t.valueInfo))return"valueInfo: array expected";for(var o=0;o<t.valueInfo.length;++o){var i=E.onnx.ValueInfoProto.verify(t.valueInfo[o]);if(i)return"valueInfo."+i}}if(t.quantizationAnnotation!=null&&t.hasOwnProperty("quantizationAnnotation")){if(!Array.isArray(t.quantizationAnnotation))return"quantizationAnnotation: array expected";for(var o=0;o<t.quantizationAnnotation.length;++o){var i=E.onnx.TensorAnnotation.verify(t.quantizationAnnotation[o]);if(i)return"quantizationAnnotation."+i}}return null},e.fromObject=function(t){if(t instanceof E.onnx.GraphProto)return t;var o=new E.onnx.GraphProto;if(t.node){if(!Array.isArray(t.node))throw TypeError(".onnx.GraphProto.node: array expected");o.node=[];for(var i=0;i<t.node.length;++i){if(typeof t.node[i]!="object")throw TypeError(".onnx.GraphProto.node: object expected");o.node[i]=E.onnx.NodeProto.fromObject(t.node[i])}}if(t.name!=null&&(o.name=String(t.name)),t.initializer){if(!Array.isArray(t.initializer))throw TypeError(".onnx.GraphProto.initializer: array expected");o.initializer=[];for(var i=0;i<t.initializer.length;++i){if(typeof t.initializer[i]!="object")throw TypeError(".onnx.GraphProto.initializer: object expected");o.initializer[i]=E.onnx.TensorProto.fromObject(t.initializer[i])}}if(t.sparseInitializer){if(!Array.isArray(t.sparseInitializer))throw TypeError(".onnx.GraphProto.sparseInitializer: array expected");o.sparseInitializer=[];for(var i=0;i<t.sparseInitializer.length;++i){if(typeof t.sparseInitializer[i]!="object")throw TypeError(".onnx.GraphProto.sparseInitializer: object expected");o.sparseInitializer[i]=E.onnx.SparseTensorProto.fromObject(t.sparseInitializer[i])}}if(t.docString!=null&&(o.docString=String(t.docString)),t.input){if(!Array.isArray(t.input))throw TypeError(".onnx.GraphProto.input: array expected");o.input=[];for(var i=0;i<t.input.length;++i){if(typeof t.input[i]!="object")throw TypeError(".onnx.GraphProto.input: object expected");o.input[i]=E.onnx.ValueInfoProto.fromObject(t.input[i])}}if(t.output){if(!Array.isArray(t.output))throw TypeError(".onnx.GraphProto.output: array expected");o.output=[];for(var i=0;i<t.output.length;++i){if(typeof t.output[i]!="object")throw TypeError(".onnx.GraphProto.output: object expected");o.output[i]=E.onnx.ValueInfoProto.fromObject(t.output[i])}}if(t.valueInfo){if(!Array.isArray(t.valueInfo))throw TypeError(".onnx.GraphProto.valueInfo: array expected");o.valueInfo=[];for(var i=0;i<t.valueInfo.length;++i){if(typeof t.valueInfo[i]!="object")throw TypeError(".onnx.GraphProto.valueInfo: object expected");o.valueInfo[i]=E.onnx.ValueInfoProto.fromObject(t.valueInfo[i])}}if(t.quantizationAnnotation){if(!Array.isArray(t.quantizationAnnotation))throw TypeError(".onnx.GraphProto.quantizationAnnotation: array expected");o.quantizationAnnotation=[];for(var i=0;i<t.quantizationAnnotation.length;++i){if(typeof t.quantizationAnnotation[i]!="object")throw TypeError(".onnx.GraphProto.quantizationAnnotation: object expected");o.quantizationAnnotation[i]=E.onnx.TensorAnnotation.fromObject(t.quantizationAnnotation[i])}}return o},e.toObject=function(t,o){o||(o={});var i={};if((o.arrays||o.defaults)&&(i.node=[],i.initializer=[],i.input=[],i.output=[],i.valueInfo=[],i.quantizationAnnotation=[],i.sparseInitializer=[]),o.defaults&&(i.name="",i.docString=""),t.node&&t.node.length){i.node=[];for(var a=0;a<t.node.length;++a)i.node[a]=E.onnx.NodeProto.toObject(t.node[a],o)}if(t.name!=null&&t.hasOwnProperty("name")&&(i.name=t.name),t.initializer&&t.initializer.length){i.initializer=[];for(var a=0;a<t.initializer.length;++a)i.initializer[a]=E.onnx.TensorProto.toObject(t.initializer[a],o)}if(t.docString!=null&&t.hasOwnProperty("docString")&&(i.docString=t.docString),t.input&&t.input.length){i.input=[];for(var a=0;a<t.input.length;++a)i.input[a]=E.onnx.ValueInfoProto.toObject(t.input[a],o)}if(t.output&&t.output.length){i.output=[];for(var a=0;a<t.output.length;++a)i.output[a]=E.onnx.ValueInfoProto.toObject(t.output[a],o)}if(t.valueInfo&&t.valueInfo.length){i.valueInfo=[];for(var a=0;a<t.valueInfo.length;++a)i.valueInfo[a]=E.onnx.ValueInfoProto.toObject(t.valueInfo[a],o)}if(t.quantizationAnnotation&&t.quantizationAnnotation.length){i.quantizationAnnotation=[];for(var a=0;a<t.quantizationAnnotation.length;++a)i.quantizationAnnotation[a]=E.onnx.TensorAnnotation.toObject(t.quantizationAnnotation[a],o)}if(t.sparseInitializer&&t.sparseInitializer.length){i.sparseInitializer=[];for(var a=0;a<t.sparseInitializer.length;++a)i.sparseInitializer[a]=E.onnx.SparseTensorProto.toObject(t.sparseInitializer[a],o)}return i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Qe.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.GraphProto"},e}(),n.TensorProto=function(){function e(r){if(this.dims=[],this.floatData=[],this.int32Data=[],this.stringData=[],this.int64Data=[],this.externalData=[],this.doubleData=[],this.uint64Data=[],r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.dims=R.emptyArray,e.prototype.dataType=0,e.prototype.segment=null,e.prototype.floatData=R.emptyArray,e.prototype.int32Data=R.emptyArray,e.prototype.stringData=R.emptyArray,e.prototype.int64Data=R.emptyArray,e.prototype.name="",e.prototype.docString="",e.prototype.rawData=R.newBuffer([]),e.prototype.externalData=R.emptyArray,e.prototype.dataLocation=0,e.prototype.doubleData=R.emptyArray,e.prototype.uint64Data=R.emptyArray,e.create=function(t){return new e(t)},e.encode=function(t,o){if(o||(o=ct.create()),t.dims!=null&&t.dims.length){o.uint32(10).fork();for(var i=0;i<t.dims.length;++i)o.int64(t.dims[i]);o.ldelim()}if(t.dataType!=null&&Object.hasOwnProperty.call(t,"dataType")&&o.uint32(16).int32(t.dataType),t.segment!=null&&Object.hasOwnProperty.call(t,"segment")&&E.onnx.TensorProto.Segment.encode(t.segment,o.uint32(26).fork()).ldelim(),t.floatData!=null&&t.floatData.length){o.uint32(34).fork();for(var i=0;i<t.floatData.length;++i)o.float(t.floatData[i]);o.ldelim()}if(t.int32Data!=null&&t.int32Data.length){o.uint32(42).fork();for(var i=0;i<t.int32Data.length;++i)o.int32(t.int32Data[i]);o.ldelim()}if(t.stringData!=null&&t.stringData.length)for(var i=0;i<t.stringData.length;++i)o.uint32(50).bytes(t.stringData[i]);if(t.int64Data!=null&&t.int64Data.length){o.uint32(58).fork();for(var i=0;i<t.int64Data.length;++i)o.int64(t.int64Data[i]);o.ldelim()}if(t.name!=null&&Object.hasOwnProperty.call(t,"name")&&o.uint32(66).string(t.name),t.rawData!=null&&Object.hasOwnProperty.call(t,"rawData")&&o.uint32(74).bytes(t.rawData),t.doubleData!=null&&t.doubleData.length){o.uint32(82).fork();for(var i=0;i<t.doubleData.length;++i)o.double(t.doubleData[i]);o.ldelim()}if(t.uint64Data!=null&&t.uint64Data.length){o.uint32(90).fork();for(var i=0;i<t.uint64Data.length;++i)o.uint64(t.uint64Data[i]);o.ldelim()}if(t.docString!=null&&Object.hasOwnProperty.call(t,"docString")&&o.uint32(98).string(t.docString),t.externalData!=null&&t.externalData.length)for(var i=0;i<t.externalData.length;++i)E.onnx.StringStringEntryProto.encode(t.externalData[i],o.uint32(106).fork()).ldelim();return t.dataLocation!=null&&Object.hasOwnProperty.call(t,"dataLocation")&&o.uint32(112).int32(t.dataLocation),o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.TensorProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{if(a.dims&&a.dims.length||(a.dims=[]),(u&7)===2)for(var c=t.uint32()+t.pos;t.pos<c;)a.dims.push(t.int64());else a.dims.push(t.int64());break}case 2:{a.dataType=t.int32();break}case 3:{a.segment=E.onnx.TensorProto.Segment.decode(t,t.uint32());break}case 4:{if(a.floatData&&a.floatData.length||(a.floatData=[]),(u&7)===2)for(var c=t.uint32()+t.pos;t.pos<c;)a.floatData.push(t.float());else a.floatData.push(t.float());break}case 5:{if(a.int32Data&&a.int32Data.length||(a.int32Data=[]),(u&7)===2)for(var c=t.uint32()+t.pos;t.pos<c;)a.int32Data.push(t.int32());else a.int32Data.push(t.int32());break}case 6:{a.stringData&&a.stringData.length||(a.stringData=[]),a.stringData.push(t.bytes());break}case 7:{if(a.int64Data&&a.int64Data.length||(a.int64Data=[]),(u&7)===2)for(var c=t.uint32()+t.pos;t.pos<c;)a.int64Data.push(t.int64());else a.int64Data.push(t.int64());break}case 8:{a.name=t.string();break}case 12:{a.docString=t.string();break}case 9:{a.rawData=t.bytes();break}case 13:{a.externalData&&a.externalData.length||(a.externalData=[]),a.externalData.push(E.onnx.StringStringEntryProto.decode(t,t.uint32()));break}case 14:{a.dataLocation=t.int32();break}case 10:{if(a.doubleData&&a.doubleData.length||(a.doubleData=[]),(u&7)===2)for(var c=t.uint32()+t.pos;t.pos<c;)a.doubleData.push(t.double());else a.doubleData.push(t.double());break}case 11:{if(a.uint64Data&&a.uint64Data.length||(a.uint64Data=[]),(u&7)===2)for(var c=t.uint32()+t.pos;t.pos<c;)a.uint64Data.push(t.uint64());else a.uint64Data.push(t.uint64());break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.dims!=null&&t.hasOwnProperty("dims")){if(!Array.isArray(t.dims))return"dims: array expected";for(var o=0;o<t.dims.length;++o)if(!R.isInteger(t.dims[o])&&!(t.dims[o]&&R.isInteger(t.dims[o].low)&&R.isInteger(t.dims[o].high)))return"dims: integer|Long[] expected"}if(t.dataType!=null&&t.hasOwnProperty("dataType")&&!R.isInteger(t.dataType))return"dataType: integer expected";if(t.segment!=null&&t.hasOwnProperty("segment")){var i=E.onnx.TensorProto.Segment.verify(t.segment);if(i)return"segment."+i}if(t.floatData!=null&&t.hasOwnProperty("floatData")){if(!Array.isArray(t.floatData))return"floatData: array expected";for(var o=0;o<t.floatData.length;++o)if(typeof t.floatData[o]!="number")return"floatData: number[] expected"}if(t.int32Data!=null&&t.hasOwnProperty("int32Data")){if(!Array.isArray(t.int32Data))return"int32Data: array expected";for(var o=0;o<t.int32Data.length;++o)if(!R.isInteger(t.int32Data[o]))return"int32Data: integer[] expected"}if(t.stringData!=null&&t.hasOwnProperty("stringData")){if(!Array.isArray(t.stringData))return"stringData: array expected";for(var o=0;o<t.stringData.length;++o)if(!(t.stringData[o]&&typeof t.stringData[o].length=="number"||R.isString(t.stringData[o])))return"stringData: buffer[] expected"}if(t.int64Data!=null&&t.hasOwnProperty("int64Data")){if(!Array.isArray(t.int64Data))return"int64Data: array expected";for(var o=0;o<t.int64Data.length;++o)if(!R.isInteger(t.int64Data[o])&&!(t.int64Data[o]&&R.isInteger(t.int64Data[o].low)&&R.isInteger(t.int64Data[o].high)))return"int64Data: integer|Long[] expected"}if(t.name!=null&&t.hasOwnProperty("name")&&!R.isString(t.name))return"name: string expected";if(t.docString!=null&&t.hasOwnProperty("docString")&&!R.isString(t.docString))return"docString: string expected";if(t.rawData!=null&&t.hasOwnProperty("rawData")&&!(t.rawData&&typeof t.rawData.length=="number"||R.isString(t.rawData)))return"rawData: buffer expected";if(t.externalData!=null&&t.hasOwnProperty("externalData")){if(!Array.isArray(t.externalData))return"externalData: array expected";for(var o=0;o<t.externalData.length;++o){var i=E.onnx.StringStringEntryProto.verify(t.externalData[o]);if(i)return"externalData."+i}}if(t.dataLocation!=null&&t.hasOwnProperty("dataLocation"))switch(t.dataLocation){default:return"dataLocation: enum value expected";case 0:case 1:break}if(t.doubleData!=null&&t.hasOwnProperty("doubleData")){if(!Array.isArray(t.doubleData))return"doubleData: array expected";for(var o=0;o<t.doubleData.length;++o)if(typeof t.doubleData[o]!="number")return"doubleData: number[] expected"}if(t.uint64Data!=null&&t.hasOwnProperty("uint64Data")){if(!Array.isArray(t.uint64Data))return"uint64Data: array expected";for(var o=0;o<t.uint64Data.length;++o)if(!R.isInteger(t.uint64Data[o])&&!(t.uint64Data[o]&&R.isInteger(t.uint64Data[o].low)&&R.isInteger(t.uint64Data[o].high)))return"uint64Data: integer|Long[] expected"}return null},e.fromObject=function(t){if(t instanceof E.onnx.TensorProto)return t;var o=new E.onnx.TensorProto;if(t.dims){if(!Array.isArray(t.dims))throw TypeError(".onnx.TensorProto.dims: array expected");o.dims=[];for(var i=0;i<t.dims.length;++i)R.Long?(o.dims[i]=R.Long.fromValue(t.dims[i])).unsigned=!1:typeof t.dims[i]=="string"?o.dims[i]=parseInt(t.dims[i],10):typeof t.dims[i]=="number"?o.dims[i]=t.dims[i]:typeof t.dims[i]=="object"&&(o.dims[i]=new R.LongBits(t.dims[i].low>>>0,t.dims[i].high>>>0).toNumber())}if(t.dataType!=null&&(o.dataType=t.dataType|0),t.segment!=null){if(typeof t.segment!="object")throw TypeError(".onnx.TensorProto.segment: object expected");o.segment=E.onnx.TensorProto.Segment.fromObject(t.segment)}if(t.floatData){if(!Array.isArray(t.floatData))throw TypeError(".onnx.TensorProto.floatData: array expected");o.floatData=[];for(var i=0;i<t.floatData.length;++i)o.floatData[i]=Number(t.floatData[i])}if(t.int32Data){if(!Array.isArray(t.int32Data))throw TypeError(".onnx.TensorProto.int32Data: array expected");o.int32Data=[];for(var i=0;i<t.int32Data.length;++i)o.int32Data[i]=t.int32Data[i]|0}if(t.stringData){if(!Array.isArray(t.stringData))throw TypeError(".onnx.TensorProto.stringData: array expected");o.stringData=[];for(var i=0;i<t.stringData.length;++i)typeof t.stringData[i]=="string"?R.base64.decode(t.stringData[i],o.stringData[i]=R.newBuffer(R.base64.length(t.stringData[i])),0):t.stringData[i].length>=0&&(o.stringData[i]=t.stringData[i])}if(t.int64Data){if(!Array.isArray(t.int64Data))throw TypeError(".onnx.TensorProto.int64Data: array expected");o.int64Data=[];for(var i=0;i<t.int64Data.length;++i)R.Long?(o.int64Data[i]=R.Long.fromValue(t.int64Data[i])).unsigned=!1:typeof t.int64Data[i]=="string"?o.int64Data[i]=parseInt(t.int64Data[i],10):typeof t.int64Data[i]=="number"?o.int64Data[i]=t.int64Data[i]:typeof t.int64Data[i]=="object"&&(o.int64Data[i]=new R.LongBits(t.int64Data[i].low>>>0,t.int64Data[i].high>>>0).toNumber())}if(t.name!=null&&(o.name=String(t.name)),t.docString!=null&&(o.docString=String(t.docString)),t.rawData!=null&&(typeof t.rawData=="string"?R.base64.decode(t.rawData,o.rawData=R.newBuffer(R.base64.length(t.rawData)),0):t.rawData.length>=0&&(o.rawData=t.rawData)),t.externalData){if(!Array.isArray(t.externalData))throw TypeError(".onnx.TensorProto.externalData: array expected");o.externalData=[];for(var i=0;i<t.externalData.length;++i){if(typeof t.externalData[i]!="object")throw TypeError(".onnx.TensorProto.externalData: object expected");o.externalData[i]=E.onnx.StringStringEntryProto.fromObject(t.externalData[i])}}switch(t.dataLocation){default:if(typeof t.dataLocation=="number"){o.dataLocation=t.dataLocation;break}break;case"DEFAULT":case 0:o.dataLocation=0;break;case"EXTERNAL":case 1:o.dataLocation=1;break}if(t.doubleData){if(!Array.isArray(t.doubleData))throw TypeError(".onnx.TensorProto.doubleData: array expected");o.doubleData=[];for(var i=0;i<t.doubleData.length;++i)o.doubleData[i]=Number(t.doubleData[i])}if(t.uint64Data){if(!Array.isArray(t.uint64Data))throw TypeError(".onnx.TensorProto.uint64Data: array expected");o.uint64Data=[];for(var i=0;i<t.uint64Data.length;++i)R.Long?(o.uint64Data[i]=R.Long.fromValue(t.uint64Data[i])).unsigned=!0:typeof t.uint64Data[i]=="string"?o.uint64Data[i]=parseInt(t.uint64Data[i],10):typeof t.uint64Data[i]=="number"?o.uint64Data[i]=t.uint64Data[i]:typeof t.uint64Data[i]=="object"&&(o.uint64Data[i]=new R.LongBits(t.uint64Data[i].low>>>0,t.uint64Data[i].high>>>0).toNumber(!0))}return o},e.toObject=function(t,o){o||(o={});var i={};if((o.arrays||o.defaults)&&(i.dims=[],i.floatData=[],i.int32Data=[],i.stringData=[],i.int64Data=[],i.doubleData=[],i.uint64Data=[],i.externalData=[]),o.defaults&&(i.dataType=0,i.segment=null,i.name="",o.bytes===String?i.rawData="":(i.rawData=[],o.bytes!==Array&&(i.rawData=R.newBuffer(i.rawData))),i.docString="",i.dataLocation=o.enums===String?"DEFAULT":0),t.dims&&t.dims.length){i.dims=[];for(var a=0;a<t.dims.length;++a)typeof t.dims[a]=="number"?i.dims[a]=o.longs===String?String(t.dims[a]):t.dims[a]:i.dims[a]=o.longs===String?R.Long.prototype.toString.call(t.dims[a]):o.longs===Number?new R.LongBits(t.dims[a].low>>>0,t.dims[a].high>>>0).toNumber():t.dims[a]}if(t.dataType!=null&&t.hasOwnProperty("dataType")&&(i.dataType=t.dataType),t.segment!=null&&t.hasOwnProperty("segment")&&(i.segment=E.onnx.TensorProto.Segment.toObject(t.segment,o)),t.floatData&&t.floatData.length){i.floatData=[];for(var a=0;a<t.floatData.length;++a)i.floatData[a]=o.json&&!isFinite(t.floatData[a])?String(t.floatData[a]):t.floatData[a]}if(t.int32Data&&t.int32Data.length){i.int32Data=[];for(var a=0;a<t.int32Data.length;++a)i.int32Data[a]=t.int32Data[a]}if(t.stringData&&t.stringData.length){i.stringData=[];for(var a=0;a<t.stringData.length;++a)i.stringData[a]=o.bytes===String?R.base64.encode(t.stringData[a],0,t.stringData[a].length):o.bytes===Array?Array.prototype.slice.call(t.stringData[a]):t.stringData[a]}if(t.int64Data&&t.int64Data.length){i.int64Data=[];for(var a=0;a<t.int64Data.length;++a)typeof t.int64Data[a]=="number"?i.int64Data[a]=o.longs===String?String(t.int64Data[a]):t.int64Data[a]:i.int64Data[a]=o.longs===String?R.Long.prototype.toString.call(t.int64Data[a]):o.longs===Number?new R.LongBits(t.int64Data[a].low>>>0,t.int64Data[a].high>>>0).toNumber():t.int64Data[a]}if(t.name!=null&&t.hasOwnProperty("name")&&(i.name=t.name),t.rawData!=null&&t.hasOwnProperty("rawData")&&(i.rawData=o.bytes===String?R.base64.encode(t.rawData,0,t.rawData.length):o.bytes===Array?Array.prototype.slice.call(t.rawData):t.rawData),t.doubleData&&t.doubleData.length){i.doubleData=[];for(var a=0;a<t.doubleData.length;++a)i.doubleData[a]=o.json&&!isFinite(t.doubleData[a])?String(t.doubleData[a]):t.doubleData[a]}if(t.uint64Data&&t.uint64Data.length){i.uint64Data=[];for(var a=0;a<t.uint64Data.length;++a)typeof t.uint64Data[a]=="number"?i.uint64Data[a]=o.longs===String?String(t.uint64Data[a]):t.uint64Data[a]:i.uint64Data[a]=o.longs===String?R.Long.prototype.toString.call(t.uint64Data[a]):o.longs===Number?new R.LongBits(t.uint64Data[a].low>>>0,t.uint64Data[a].high>>>0).toNumber(!0):t.uint64Data[a]}if(t.docString!=null&&t.hasOwnProperty("docString")&&(i.docString=t.docString),t.externalData&&t.externalData.length){i.externalData=[];for(var a=0;a<t.externalData.length;++a)i.externalData[a]=E.onnx.StringStringEntryProto.toObject(t.externalData[a],o)}return t.dataLocation!=null&&t.hasOwnProperty("dataLocation")&&(i.dataLocation=o.enums===String?E.onnx.TensorProto.DataLocation[t.dataLocation]===void 0?t.dataLocation:E.onnx.TensorProto.DataLocation[t.dataLocation]:t.dataLocation),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Qe.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.TensorProto"},e.DataType=function(){var r={},t=Object.create(r);return t[r[0]="UNDEFINED"]=0,t[r[1]="FLOAT"]=1,t[r[2]="UINT8"]=2,t[r[3]="INT8"]=3,t[r[4]="UINT16"]=4,t[r[5]="INT16"]=5,t[r[6]="INT32"]=6,t[r[7]="INT64"]=7,t[r[8]="STRING"]=8,t[r[9]="BOOL"]=9,t[r[10]="FLOAT16"]=10,t[r[11]="DOUBLE"]=11,t[r[12]="UINT32"]=12,t[r[13]="UINT64"]=13,t[r[14]="COMPLEX64"]=14,t[r[15]="COMPLEX128"]=15,t[r[16]="BFLOAT16"]=16,t[r[17]="FLOAT8E4M3FN"]=17,t[r[18]="FLOAT8E4M3FNUZ"]=18,t[r[19]="FLOAT8E5M2"]=19,t[r[20]="FLOAT8E5M2FNUZ"]=20,t}(),e.Segment=function(){function r(t){if(t)for(var o=Object.keys(t),i=0;i<o.length;++i)t[o[i]]!=null&&(this[o[i]]=t[o[i]])}return r.prototype.begin=R.Long?R.Long.fromBits(0,0,!1):0,r.prototype.end=R.Long?R.Long.fromBits(0,0,!1):0,r.create=function(o){return new r(o)},r.encode=function(o,i){return i||(i=ct.create()),o.begin!=null&&Object.hasOwnProperty.call(o,"begin")&&i.uint32(8).int64(o.begin),o.end!=null&&Object.hasOwnProperty.call(o,"end")&&i.uint32(16).int64(o.end),i},r.encodeDelimited=function(o,i){return this.encode(o,i).ldelim()},r.decode=function(o,i){o instanceof oe||(o=oe.create(o));for(var a=i===void 0?o.len:o.pos+i,u=new E.onnx.TensorProto.Segment;o.pos<a;){var c=o.uint32();switch(c>>>3){case 1:{u.begin=o.int64();break}case 2:{u.end=o.int64();break}default:o.skipType(c&7);break}}return u},r.decodeDelimited=function(o){return o instanceof oe||(o=new oe(o)),this.decode(o,o.uint32())},r.verify=function(o){return typeof o!="object"||o===null?"object expected":o.begin!=null&&o.hasOwnProperty("begin")&&!R.isInteger(o.begin)&&!(o.begin&&R.isInteger(o.begin.low)&&R.isInteger(o.begin.high))?"begin: integer|Long expected":o.end!=null&&o.hasOwnProperty("end")&&!R.isInteger(o.end)&&!(o.end&&R.isInteger(o.end.low)&&R.isInteger(o.end.high))?"end: integer|Long expected":null},r.fromObject=function(o){if(o instanceof E.onnx.TensorProto.Segment)return o;var i=new E.onnx.TensorProto.Segment;return o.begin!=null&&(R.Long?(i.begin=R.Long.fromValue(o.begin)).unsigned=!1:typeof o.begin=="string"?i.begin=parseInt(o.begin,10):typeof o.begin=="number"?i.begin=o.begin:typeof o.begin=="object"&&(i.begin=new R.LongBits(o.begin.low>>>0,o.begin.high>>>0).toNumber())),o.end!=null&&(R.Long?(i.end=R.Long.fromValue(o.end)).unsigned=!1:typeof o.end=="string"?i.end=parseInt(o.end,10):typeof o.end=="number"?i.end=o.end:typeof o.end=="object"&&(i.end=new R.LongBits(o.end.low>>>0,o.end.high>>>0).toNumber())),i},r.toObject=function(o,i){i||(i={});var a={};if(i.defaults){if(R.Long){var u=new R.Long(0,0,!1);a.begin=i.longs===String?u.toString():i.longs===Number?u.toNumber():u}else a.begin=i.longs===String?"0":0;if(R.Long){var u=new R.Long(0,0,!1);a.end=i.longs===String?u.toString():i.longs===Number?u.toNumber():u}else a.end=i.longs===String?"0":0}return o.begin!=null&&o.hasOwnProperty("begin")&&(typeof o.begin=="number"?a.begin=i.longs===String?String(o.begin):o.begin:a.begin=i.longs===String?R.Long.prototype.toString.call(o.begin):i.longs===Number?new R.LongBits(o.begin.low>>>0,o.begin.high>>>0).toNumber():o.begin),o.end!=null&&o.hasOwnProperty("end")&&(typeof o.end=="number"?a.end=i.longs===String?String(o.end):o.end:a.end=i.longs===String?R.Long.prototype.toString.call(o.end):i.longs===Number?new R.LongBits(o.end.low>>>0,o.end.high>>>0).toNumber():o.end),a},r.prototype.toJSON=function(){return this.constructor.toObject(this,Qe.util.toJSONOptions)},r.getTypeUrl=function(o){return o===void 0&&(o="type.googleapis.com"),o+"/onnx.TensorProto.Segment"},r}(),e.DataLocation=function(){var r={},t=Object.create(r);return t[r[0]="DEFAULT"]=0,t[r[1]="EXTERNAL"]=1,t}(),e}(),n.SparseTensorProto=function(){function e(r){if(this.dims=[],r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.values=null,e.prototype.indices=null,e.prototype.dims=R.emptyArray,e.create=function(t){return new e(t)},e.encode=function(t,o){if(o||(o=ct.create()),t.values!=null&&Object.hasOwnProperty.call(t,"values")&&E.onnx.TensorProto.encode(t.values,o.uint32(10).fork()).ldelim(),t.indices!=null&&Object.hasOwnProperty.call(t,"indices")&&E.onnx.TensorProto.encode(t.indices,o.uint32(18).fork()).ldelim(),t.dims!=null&&t.dims.length){o.uint32(26).fork();for(var i=0;i<t.dims.length;++i)o.int64(t.dims[i]);o.ldelim()}return o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.SparseTensorProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.values=E.onnx.TensorProto.decode(t,t.uint32());break}case 2:{a.indices=E.onnx.TensorProto.decode(t,t.uint32());break}case 3:{if(a.dims&&a.dims.length||(a.dims=[]),(u&7)===2)for(var c=t.uint32()+t.pos;t.pos<c;)a.dims.push(t.int64());else a.dims.push(t.int64());break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.values!=null&&t.hasOwnProperty("values")){var o=E.onnx.TensorProto.verify(t.values);if(o)return"values."+o}if(t.indices!=null&&t.hasOwnProperty("indices")){var o=E.onnx.TensorProto.verify(t.indices);if(o)return"indices."+o}if(t.dims!=null&&t.hasOwnProperty("dims")){if(!Array.isArray(t.dims))return"dims: array expected";for(var i=0;i<t.dims.length;++i)if(!R.isInteger(t.dims[i])&&!(t.dims[i]&&R.isInteger(t.dims[i].low)&&R.isInteger(t.dims[i].high)))return"dims: integer|Long[] expected"}return null},e.fromObject=function(t){if(t instanceof E.onnx.SparseTensorProto)return t;var o=new E.onnx.SparseTensorProto;if(t.values!=null){if(typeof t.values!="object")throw TypeError(".onnx.SparseTensorProto.values: object expected");o.values=E.onnx.TensorProto.fromObject(t.values)}if(t.indices!=null){if(typeof t.indices!="object")throw TypeError(".onnx.SparseTensorProto.indices: object expected");o.indices=E.onnx.TensorProto.fromObject(t.indices)}if(t.dims){if(!Array.isArray(t.dims))throw TypeError(".onnx.SparseTensorProto.dims: array expected");o.dims=[];for(var i=0;i<t.dims.length;++i)R.Long?(o.dims[i]=R.Long.fromValue(t.dims[i])).unsigned=!1:typeof t.dims[i]=="string"?o.dims[i]=parseInt(t.dims[i],10):typeof t.dims[i]=="number"?o.dims[i]=t.dims[i]:typeof t.dims[i]=="object"&&(o.dims[i]=new R.LongBits(t.dims[i].low>>>0,t.dims[i].high>>>0).toNumber())}return o},e.toObject=function(t,o){o||(o={});var i={};if((o.arrays||o.defaults)&&(i.dims=[]),o.defaults&&(i.values=null,i.indices=null),t.values!=null&&t.hasOwnProperty("values")&&(i.values=E.onnx.TensorProto.toObject(t.values,o)),t.indices!=null&&t.hasOwnProperty("indices")&&(i.indices=E.onnx.TensorProto.toObject(t.indices,o)),t.dims&&t.dims.length){i.dims=[];for(var a=0;a<t.dims.length;++a)typeof t.dims[a]=="number"?i.dims[a]=o.longs===String?String(t.dims[a]):t.dims[a]:i.dims[a]=o.longs===String?R.Long.prototype.toString.call(t.dims[a]):o.longs===Number?new R.LongBits(t.dims[a].low>>>0,t.dims[a].high>>>0).toNumber():t.dims[a]}return i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Qe.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.SparseTensorProto"},e}(),n.TensorShapeProto=function(){function e(r){if(this.dim=[],r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.dim=R.emptyArray,e.create=function(t){return new e(t)},e.encode=function(t,o){if(o||(o=ct.create()),t.dim!=null&&t.dim.length)for(var i=0;i<t.dim.length;++i)E.onnx.TensorShapeProto.Dimension.encode(t.dim[i],o.uint32(10).fork()).ldelim();return o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.TensorShapeProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.dim&&a.dim.length||(a.dim=[]),a.dim.push(E.onnx.TensorShapeProto.Dimension.decode(t,t.uint32()));break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.dim!=null&&t.hasOwnProperty("dim")){if(!Array.isArray(t.dim))return"dim: array expected";for(var o=0;o<t.dim.length;++o){var i=E.onnx.TensorShapeProto.Dimension.verify(t.dim[o]);if(i)return"dim."+i}}return null},e.fromObject=function(t){if(t instanceof E.onnx.TensorShapeProto)return t;var o=new E.onnx.TensorShapeProto;if(t.dim){if(!Array.isArray(t.dim))throw TypeError(".onnx.TensorShapeProto.dim: array expected");o.dim=[];for(var i=0;i<t.dim.length;++i){if(typeof t.dim[i]!="object")throw TypeError(".onnx.TensorShapeProto.dim: object expected");o.dim[i]=E.onnx.TensorShapeProto.Dimension.fromObject(t.dim[i])}}return o},e.toObject=function(t,o){o||(o={});var i={};if((o.arrays||o.defaults)&&(i.dim=[]),t.dim&&t.dim.length){i.dim=[];for(var a=0;a<t.dim.length;++a)i.dim[a]=E.onnx.TensorShapeProto.Dimension.toObject(t.dim[a],o)}return i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Qe.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.TensorShapeProto"},e.Dimension=function(){function r(o){if(o)for(var i=Object.keys(o),a=0;a<i.length;++a)o[i[a]]!=null&&(this[i[a]]=o[i[a]])}r.prototype.dimValue=null,r.prototype.dimParam=null,r.prototype.denotation="";var t;return Object.defineProperty(r.prototype,"value",{get:R.oneOfGetter(t=["dimValue","dimParam"]),set:R.oneOfSetter(t)}),r.create=function(i){return new r(i)},r.encode=function(i,a){return a||(a=ct.create()),i.dimValue!=null&&Object.hasOwnProperty.call(i,"dimValue")&&a.uint32(8).int64(i.dimValue),i.dimParam!=null&&Object.hasOwnProperty.call(i,"dimParam")&&a.uint32(18).string(i.dimParam),i.denotation!=null&&Object.hasOwnProperty.call(i,"denotation")&&a.uint32(26).string(i.denotation),a},r.encodeDelimited=function(i,a){return this.encode(i,a).ldelim()},r.decode=function(i,a){i instanceof oe||(i=oe.create(i));for(var u=a===void 0?i.len:i.pos+a,c=new E.onnx.TensorShapeProto.Dimension;i.pos<u;){var p=i.uint32();switch(p>>>3){case 1:{c.dimValue=i.int64();break}case 2:{c.dimParam=i.string();break}case 3:{c.denotation=i.string();break}default:i.skipType(p&7);break}}return c},r.decodeDelimited=function(i){return i instanceof oe||(i=new oe(i)),this.decode(i,i.uint32())},r.verify=function(i){if(typeof i!="object"||i===null)return"object expected";var a={};if(i.dimValue!=null&&i.hasOwnProperty("dimValue")&&(a.value=1,!R.isInteger(i.dimValue)&&!(i.dimValue&&R.isInteger(i.dimValue.low)&&R.isInteger(i.dimValue.high))))return"dimValue: integer|Long expected";if(i.dimParam!=null&&i.hasOwnProperty("dimParam")){if(a.value===1)return"value: multiple values";if(a.value=1,!R.isString(i.dimParam))return"dimParam: string expected"}return i.denotation!=null&&i.hasOwnProperty("denotation")&&!R.isString(i.denotation)?"denotation: string expected":null},r.fromObject=function(i){if(i instanceof E.onnx.TensorShapeProto.Dimension)return i;var a=new E.onnx.TensorShapeProto.Dimension;return i.dimValue!=null&&(R.Long?(a.dimValue=R.Long.fromValue(i.dimValue)).unsigned=!1:typeof i.dimValue=="string"?a.dimValue=parseInt(i.dimValue,10):typeof i.dimValue=="number"?a.dimValue=i.dimValue:typeof i.dimValue=="object"&&(a.dimValue=new R.LongBits(i.dimValue.low>>>0,i.dimValue.high>>>0).toNumber())),i.dimParam!=null&&(a.dimParam=String(i.dimParam)),i.denotation!=null&&(a.denotation=String(i.denotation)),a},r.toObject=function(i,a){a||(a={});var u={};return a.defaults&&(u.denotation=""),i.dimValue!=null&&i.hasOwnProperty("dimValue")&&(typeof i.dimValue=="number"?u.dimValue=a.longs===String?String(i.dimValue):i.dimValue:u.dimValue=a.longs===String?R.Long.prototype.toString.call(i.dimValue):a.longs===Number?new R.LongBits(i.dimValue.low>>>0,i.dimValue.high>>>0).toNumber():i.dimValue,a.oneofs&&(u.value="dimValue")),i.dimParam!=null&&i.hasOwnProperty("dimParam")&&(u.dimParam=i.dimParam,a.oneofs&&(u.value="dimParam")),i.denotation!=null&&i.hasOwnProperty("denotation")&&(u.denotation=i.denotation),u},r.prototype.toJSON=function(){return this.constructor.toObject(this,Qe.util.toJSONOptions)},r.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.TensorShapeProto.Dimension"},r}(),e}(),n.TypeProto=function(){function e(t){if(t)for(var o=Object.keys(t),i=0;i<o.length;++i)t[o[i]]!=null&&(this[o[i]]=t[o[i]])}e.prototype.tensorType=null,e.prototype.sequenceType=null,e.prototype.mapType=null,e.prototype.optionalType=null,e.prototype.sparseTensorType=null,e.prototype.denotation="";var r;return Object.defineProperty(e.prototype,"value",{get:R.oneOfGetter(r=["tensorType","sequenceType","mapType","optionalType","sparseTensorType"]),set:R.oneOfSetter(r)}),e.create=function(o){return new e(o)},e.encode=function(o,i){return i||(i=ct.create()),o.tensorType!=null&&Object.hasOwnProperty.call(o,"tensorType")&&E.onnx.TypeProto.Tensor.encode(o.tensorType,i.uint32(10).fork()).ldelim(),o.sequenceType!=null&&Object.hasOwnProperty.call(o,"sequenceType")&&E.onnx.TypeProto.Sequence.encode(o.sequenceType,i.uint32(34).fork()).ldelim(),o.mapType!=null&&Object.hasOwnProperty.call(o,"mapType")&&E.onnx.TypeProto.Map.encode(o.mapType,i.uint32(42).fork()).ldelim(),o.denotation!=null&&Object.hasOwnProperty.call(o,"denotation")&&i.uint32(50).string(o.denotation),o.sparseTensorType!=null&&Object.hasOwnProperty.call(o,"sparseTensorType")&&E.onnx.TypeProto.SparseTensor.encode(o.sparseTensorType,i.uint32(66).fork()).ldelim(),o.optionalType!=null&&Object.hasOwnProperty.call(o,"optionalType")&&E.onnx.TypeProto.Optional.encode(o.optionalType,i.uint32(74).fork()).ldelim(),i},e.encodeDelimited=function(o,i){return this.encode(o,i).ldelim()},e.decode=function(o,i){o instanceof oe||(o=oe.create(o));for(var a=i===void 0?o.len:o.pos+i,u=new E.onnx.TypeProto;o.pos<a;){var c=o.uint32();switch(c>>>3){case 1:{u.tensorType=E.onnx.TypeProto.Tensor.decode(o,o.uint32());break}case 4:{u.sequenceType=E.onnx.TypeProto.Sequence.decode(o,o.uint32());break}case 5:{u.mapType=E.onnx.TypeProto.Map.decode(o,o.uint32());break}case 9:{u.optionalType=E.onnx.TypeProto.Optional.decode(o,o.uint32());break}case 8:{u.sparseTensorType=E.onnx.TypeProto.SparseTensor.decode(o,o.uint32());break}case 6:{u.denotation=o.string();break}default:o.skipType(c&7);break}}return u},e.decodeDelimited=function(o){return o instanceof oe||(o=new oe(o)),this.decode(o,o.uint32())},e.verify=function(o){if(typeof o!="object"||o===null)return"object expected";var i={};if(o.tensorType!=null&&o.hasOwnProperty("tensorType")){i.value=1;{var a=E.onnx.TypeProto.Tensor.verify(o.tensorType);if(a)return"tensorType."+a}}if(o.sequenceType!=null&&o.hasOwnProperty("sequenceType")){if(i.value===1)return"value: multiple values";i.value=1;{var a=E.onnx.TypeProto.Sequence.verify(o.sequenceType);if(a)return"sequenceType."+a}}if(o.mapType!=null&&o.hasOwnProperty("mapType")){if(i.value===1)return"value: multiple values";i.value=1;{var a=E.onnx.TypeProto.Map.verify(o.mapType);if(a)return"mapType."+a}}if(o.optionalType!=null&&o.hasOwnProperty("optionalType")){if(i.value===1)return"value: multiple values";i.value=1;{var a=E.onnx.TypeProto.Optional.verify(o.optionalType);if(a)return"optionalType."+a}}if(o.sparseTensorType!=null&&o.hasOwnProperty("sparseTensorType")){if(i.value===1)return"value: multiple values";i.value=1;{var a=E.onnx.TypeProto.SparseTensor.verify(o.sparseTensorType);if(a)return"sparseTensorType."+a}}return o.denotation!=null&&o.hasOwnProperty("denotation")&&!R.isString(o.denotation)?"denotation: string expected":null},e.fromObject=function(o){if(o instanceof E.onnx.TypeProto)return o;var i=new E.onnx.TypeProto;if(o.tensorType!=null){if(typeof o.tensorType!="object")throw TypeError(".onnx.TypeProto.tensorType: object expected");i.tensorType=E.onnx.TypeProto.Tensor.fromObject(o.tensorType)}if(o.sequenceType!=null){if(typeof o.sequenceType!="object")throw TypeError(".onnx.TypeProto.sequenceType: object expected");i.sequenceType=E.onnx.TypeProto.Sequence.fromObject(o.sequenceType)}if(o.mapType!=null){if(typeof o.mapType!="object")throw TypeError(".onnx.TypeProto.mapType: object expected");i.mapType=E.onnx.TypeProto.Map.fromObject(o.mapType)}if(o.optionalType!=null){if(typeof o.optionalType!="object")throw TypeError(".onnx.TypeProto.optionalType: object expected");i.optionalType=E.onnx.TypeProto.Optional.fromObject(o.optionalType)}if(o.sparseTensorType!=null){if(typeof o.sparseTensorType!="object")throw TypeError(".onnx.TypeProto.sparseTensorType: object expected");i.sparseTensorType=E.onnx.TypeProto.SparseTensor.fromObject(o.sparseTensorType)}return o.denotation!=null&&(i.denotation=String(o.denotation)),i},e.toObject=function(o,i){i||(i={});var a={};return i.defaults&&(a.denotation=""),o.tensorType!=null&&o.hasOwnProperty("tensorType")&&(a.tensorType=E.onnx.TypeProto.Tensor.toObject(o.tensorType,i),i.oneofs&&(a.value="tensorType")),o.sequenceType!=null&&o.hasOwnProperty("sequenceType")&&(a.sequenceType=E.onnx.TypeProto.Sequence.toObject(o.sequenceType,i),i.oneofs&&(a.value="sequenceType")),o.mapType!=null&&o.hasOwnProperty("mapType")&&(a.mapType=E.onnx.TypeProto.Map.toObject(o.mapType,i),i.oneofs&&(a.value="mapType")),o.denotation!=null&&o.hasOwnProperty("denotation")&&(a.denotation=o.denotation),o.sparseTensorType!=null&&o.hasOwnProperty("sparseTensorType")&&(a.sparseTensorType=E.onnx.TypeProto.SparseTensor.toObject(o.sparseTensorType,i),i.oneofs&&(a.value="sparseTensorType")),o.optionalType!=null&&o.hasOwnProperty("optionalType")&&(a.optionalType=E.onnx.TypeProto.Optional.toObject(o.optionalType,i),i.oneofs&&(a.value="optionalType")),a},e.prototype.toJSON=function(){return this.constructor.toObject(this,Qe.util.toJSONOptions)},e.getTypeUrl=function(o){return o===void 0&&(o="type.googleapis.com"),o+"/onnx.TypeProto"},e.Tensor=function(){function t(o){if(o)for(var i=Object.keys(o),a=0;a<i.length;++a)o[i[a]]!=null&&(this[i[a]]=o[i[a]])}return t.prototype.elemType=0,t.prototype.shape=null,t.create=function(i){return new t(i)},t.encode=function(i,a){return a||(a=ct.create()),i.elemType!=null&&Object.hasOwnProperty.call(i,"elemType")&&a.uint32(8).int32(i.elemType),i.shape!=null&&Object.hasOwnProperty.call(i,"shape")&&E.onnx.TensorShapeProto.encode(i.shape,a.uint32(18).fork()).ldelim(),a},t.encodeDelimited=function(i,a){return this.encode(i,a).ldelim()},t.decode=function(i,a){i instanceof oe||(i=oe.create(i));for(var u=a===void 0?i.len:i.pos+a,c=new E.onnx.TypeProto.Tensor;i.pos<u;){var p=i.uint32();switch(p>>>3){case 1:{c.elemType=i.int32();break}case 2:{c.shape=E.onnx.TensorShapeProto.decode(i,i.uint32());break}default:i.skipType(p&7);break}}return c},t.decodeDelimited=function(i){return i instanceof oe||(i=new oe(i)),this.decode(i,i.uint32())},t.verify=function(i){if(typeof i!="object"||i===null)return"object expected";if(i.elemType!=null&&i.hasOwnProperty("elemType")&&!R.isInteger(i.elemType))return"elemType: integer expected";if(i.shape!=null&&i.hasOwnProperty("shape")){var a=E.onnx.TensorShapeProto.verify(i.shape);if(a)return"shape."+a}return null},t.fromObject=function(i){if(i instanceof E.onnx.TypeProto.Tensor)return i;var a=new E.onnx.TypeProto.Tensor;if(i.elemType!=null&&(a.elemType=i.elemType|0),i.shape!=null){if(typeof i.shape!="object")throw TypeError(".onnx.TypeProto.Tensor.shape: object expected");a.shape=E.onnx.TensorShapeProto.fromObject(i.shape)}return a},t.toObject=function(i,a){a||(a={});var u={};return a.defaults&&(u.elemType=0,u.shape=null),i.elemType!=null&&i.hasOwnProperty("elemType")&&(u.elemType=i.elemType),i.shape!=null&&i.hasOwnProperty("shape")&&(u.shape=E.onnx.TensorShapeProto.toObject(i.shape,a)),u},t.prototype.toJSON=function(){return this.constructor.toObject(this,Qe.util.toJSONOptions)},t.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.TypeProto.Tensor"},t}(),e.Sequence=function(){function t(o){if(o)for(var i=Object.keys(o),a=0;a<i.length;++a)o[i[a]]!=null&&(this[i[a]]=o[i[a]])}return t.prototype.elemType=null,t.create=function(i){return new t(i)},t.encode=function(i,a){return a||(a=ct.create()),i.elemType!=null&&Object.hasOwnProperty.call(i,"elemType")&&E.onnx.TypeProto.encode(i.elemType,a.uint32(10).fork()).ldelim(),a},t.encodeDelimited=function(i,a){return this.encode(i,a).ldelim()},t.decode=function(i,a){i instanceof oe||(i=oe.create(i));for(var u=a===void 0?i.len:i.pos+a,c=new E.onnx.TypeProto.Sequence;i.pos<u;){var p=i.uint32();switch(p>>>3){case 1:{c.elemType=E.onnx.TypeProto.decode(i,i.uint32());break}default:i.skipType(p&7);break}}return c},t.decodeDelimited=function(i){return i instanceof oe||(i=new oe(i)),this.decode(i,i.uint32())},t.verify=function(i){if(typeof i!="object"||i===null)return"object expected";if(i.elemType!=null&&i.hasOwnProperty("elemType")){var a=E.onnx.TypeProto.verify(i.elemType);if(a)return"elemType."+a}return null},t.fromObject=function(i){if(i instanceof E.onnx.TypeProto.Sequence)return i;var a=new E.onnx.TypeProto.Sequence;if(i.elemType!=null){if(typeof i.elemType!="object")throw TypeError(".onnx.TypeProto.Sequence.elemType: object expected");a.elemType=E.onnx.TypeProto.fromObject(i.elemType)}return a},t.toObject=function(i,a){a||(a={});var u={};return a.defaults&&(u.elemType=null),i.elemType!=null&&i.hasOwnProperty("elemType")&&(u.elemType=E.onnx.TypeProto.toObject(i.elemType,a)),u},t.prototype.toJSON=function(){return this.constructor.toObject(this,Qe.util.toJSONOptions)},t.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.TypeProto.Sequence"},t}(),e.Map=function(){function t(o){if(o)for(var i=Object.keys(o),a=0;a<i.length;++a)o[i[a]]!=null&&(this[i[a]]=o[i[a]])}return t.prototype.keyType=0,t.prototype.valueType=null,t.create=function(i){return new t(i)},t.encode=function(i,a){return a||(a=ct.create()),i.keyType!=null&&Object.hasOwnProperty.call(i,"keyType")&&a.uint32(8).int32(i.keyType),i.valueType!=null&&Object.hasOwnProperty.call(i,"valueType")&&E.onnx.TypeProto.encode(i.valueType,a.uint32(18).fork()).ldelim(),a},t.encodeDelimited=function(i,a){return this.encode(i,a).ldelim()},t.decode=function(i,a){i instanceof oe||(i=oe.create(i));for(var u=a===void 0?i.len:i.pos+a,c=new E.onnx.TypeProto.Map;i.pos<u;){var p=i.uint32();switch(p>>>3){case 1:{c.keyType=i.int32();break}case 2:{c.valueType=E.onnx.TypeProto.decode(i,i.uint32());break}default:i.skipType(p&7);break}}return c},t.decodeDelimited=function(i){return i instanceof oe||(i=new oe(i)),this.decode(i,i.uint32())},t.verify=function(i){if(typeof i!="object"||i===null)return"object expected";if(i.keyType!=null&&i.hasOwnProperty("keyType")&&!R.isInteger(i.keyType))return"keyType: integer expected";if(i.valueType!=null&&i.hasOwnProperty("valueType")){var a=E.onnx.TypeProto.verify(i.valueType);if(a)return"valueType."+a}return null},t.fromObject=function(i){if(i instanceof E.onnx.TypeProto.Map)return i;var a=new E.onnx.TypeProto.Map;if(i.keyType!=null&&(a.keyType=i.keyType|0),i.valueType!=null){if(typeof i.valueType!="object")throw TypeError(".onnx.TypeProto.Map.valueType: object expected");a.valueType=E.onnx.TypeProto.fromObject(i.valueType)}return a},t.toObject=function(i,a){a||(a={});var u={};return a.defaults&&(u.keyType=0,u.valueType=null),i.keyType!=null&&i.hasOwnProperty("keyType")&&(u.keyType=i.keyType),i.valueType!=null&&i.hasOwnProperty("valueType")&&(u.valueType=E.onnx.TypeProto.toObject(i.valueType,a)),u},t.prototype.toJSON=function(){return this.constructor.toObject(this,Qe.util.toJSONOptions)},t.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.TypeProto.Map"},t}(),e.Optional=function(){function t(o){if(o)for(var i=Object.keys(o),a=0;a<i.length;++a)o[i[a]]!=null&&(this[i[a]]=o[i[a]])}return t.prototype.elemType=null,t.create=function(i){return new t(i)},t.encode=function(i,a){return a||(a=ct.create()),i.elemType!=null&&Object.hasOwnProperty.call(i,"elemType")&&E.onnx.TypeProto.encode(i.elemType,a.uint32(10).fork()).ldelim(),a},t.encodeDelimited=function(i,a){return this.encode(i,a).ldelim()},t.decode=function(i,a){i instanceof oe||(i=oe.create(i));for(var u=a===void 0?i.len:i.pos+a,c=new E.onnx.TypeProto.Optional;i.pos<u;){var p=i.uint32();switch(p>>>3){case 1:{c.elemType=E.onnx.TypeProto.decode(i,i.uint32());break}default:i.skipType(p&7);break}}return c},t.decodeDelimited=function(i){return i instanceof oe||(i=new oe(i)),this.decode(i,i.uint32())},t.verify=function(i){if(typeof i!="object"||i===null)return"object expected";if(i.elemType!=null&&i.hasOwnProperty("elemType")){var a=E.onnx.TypeProto.verify(i.elemType);if(a)return"elemType."+a}return null},t.fromObject=function(i){if(i instanceof E.onnx.TypeProto.Optional)return i;var a=new E.onnx.TypeProto.Optional;if(i.elemType!=null){if(typeof i.elemType!="object")throw TypeError(".onnx.TypeProto.Optional.elemType: object expected");a.elemType=E.onnx.TypeProto.fromObject(i.elemType)}return a},t.toObject=function(i,a){a||(a={});var u={};return a.defaults&&(u.elemType=null),i.elemType!=null&&i.hasOwnProperty("elemType")&&(u.elemType=E.onnx.TypeProto.toObject(i.elemType,a)),u},t.prototype.toJSON=function(){return this.constructor.toObject(this,Qe.util.toJSONOptions)},t.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.TypeProto.Optional"},t}(),e.SparseTensor=function(){function t(o){if(o)for(var i=Object.keys(o),a=0;a<i.length;++a)o[i[a]]!=null&&(this[i[a]]=o[i[a]])}return t.prototype.elemType=0,t.prototype.shape=null,t.create=function(i){return new t(i)},t.encode=function(i,a){return a||(a=ct.create()),i.elemType!=null&&Object.hasOwnProperty.call(i,"elemType")&&a.uint32(8).int32(i.elemType),i.shape!=null&&Object.hasOwnProperty.call(i,"shape")&&E.onnx.TensorShapeProto.encode(i.shape,a.uint32(18).fork()).ldelim(),a},t.encodeDelimited=function(i,a){return this.encode(i,a).ldelim()},t.decode=function(i,a){i instanceof oe||(i=oe.create(i));for(var u=a===void 0?i.len:i.pos+a,c=new E.onnx.TypeProto.SparseTensor;i.pos<u;){var p=i.uint32();switch(p>>>3){case 1:{c.elemType=i.int32();break}case 2:{c.shape=E.onnx.TensorShapeProto.decode(i,i.uint32());break}default:i.skipType(p&7);break}}return c},t.decodeDelimited=function(i){return i instanceof oe||(i=new oe(i)),this.decode(i,i.uint32())},t.verify=function(i){if(typeof i!="object"||i===null)return"object expected";if(i.elemType!=null&&i.hasOwnProperty("elemType")&&!R.isInteger(i.elemType))return"elemType: integer expected";if(i.shape!=null&&i.hasOwnProperty("shape")){var a=E.onnx.TensorShapeProto.verify(i.shape);if(a)return"shape."+a}return null},t.fromObject=function(i){if(i instanceof E.onnx.TypeProto.SparseTensor)return i;var a=new E.onnx.TypeProto.SparseTensor;if(i.elemType!=null&&(a.elemType=i.elemType|0),i.shape!=null){if(typeof i.shape!="object")throw TypeError(".onnx.TypeProto.SparseTensor.shape: object expected");a.shape=E.onnx.TensorShapeProto.fromObject(i.shape)}return a},t.toObject=function(i,a){a||(a={});var u={};return a.defaults&&(u.elemType=0,u.shape=null),i.elemType!=null&&i.hasOwnProperty("elemType")&&(u.elemType=i.elemType),i.shape!=null&&i.hasOwnProperty("shape")&&(u.shape=E.onnx.TensorShapeProto.toObject(i.shape,a)),u},t.prototype.toJSON=function(){return this.constructor.toObject(this,Qe.util.toJSONOptions)},t.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.TypeProto.SparseTensor"},t}(),e}(),n.OperatorSetIdProto=function(){function e(r){if(r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.domain="",e.prototype.version=R.Long?R.Long.fromBits(0,0,!1):0,e.create=function(t){return new e(t)},e.encode=function(t,o){return o||(o=ct.create()),t.domain!=null&&Object.hasOwnProperty.call(t,"domain")&&o.uint32(10).string(t.domain),t.version!=null&&Object.hasOwnProperty.call(t,"version")&&o.uint32(16).int64(t.version),o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.OperatorSetIdProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.domain=t.string();break}case 2:{a.version=t.int64();break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){return typeof t!="object"||t===null?"object expected":t.domain!=null&&t.hasOwnProperty("domain")&&!R.isString(t.domain)?"domain: string expected":t.version!=null&&t.hasOwnProperty("version")&&!R.isInteger(t.version)&&!(t.version&&R.isInteger(t.version.low)&&R.isInteger(t.version.high))?"version: integer|Long expected":null},e.fromObject=function(t){if(t instanceof E.onnx.OperatorSetIdProto)return t;var o=new E.onnx.OperatorSetIdProto;return t.domain!=null&&(o.domain=String(t.domain)),t.version!=null&&(R.Long?(o.version=R.Long.fromValue(t.version)).unsigned=!1:typeof t.version=="string"?o.version=parseInt(t.version,10):typeof t.version=="number"?o.version=t.version:typeof t.version=="object"&&(o.version=new R.LongBits(t.version.low>>>0,t.version.high>>>0).toNumber())),o},e.toObject=function(t,o){o||(o={});var i={};if(o.defaults)if(i.domain="",R.Long){var a=new R.Long(0,0,!1);i.version=o.longs===String?a.toString():o.longs===Number?a.toNumber():a}else i.version=o.longs===String?"0":0;return t.domain!=null&&t.hasOwnProperty("domain")&&(i.domain=t.domain),t.version!=null&&t.hasOwnProperty("version")&&(typeof t.version=="number"?i.version=o.longs===String?String(t.version):t.version:i.version=o.longs===String?R.Long.prototype.toString.call(t.version):o.longs===Number?new R.LongBits(t.version.low>>>0,t.version.high>>>0).toNumber():t.version),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Qe.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.OperatorSetIdProto"},e}(),n.OperatorStatus=function(){var e={},r=Object.create(e);return r[e[0]="EXPERIMENTAL"]=0,r[e[1]="STABLE"]=1,r}(),n.FunctionProto=function(){function e(r){if(this.input=[],this.output=[],this.attribute=[],this.attributeProto=[],this.node=[],this.opsetImport=[],r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.name="",e.prototype.input=R.emptyArray,e.prototype.output=R.emptyArray,e.prototype.attribute=R.emptyArray,e.prototype.attributeProto=R.emptyArray,e.prototype.node=R.emptyArray,e.prototype.docString="",e.prototype.opsetImport=R.emptyArray,e.prototype.domain="",e.create=function(t){return new e(t)},e.encode=function(t,o){if(o||(o=ct.create()),t.name!=null&&Object.hasOwnProperty.call(t,"name")&&o.uint32(10).string(t.name),t.input!=null&&t.input.length)for(var i=0;i<t.input.length;++i)o.uint32(34).string(t.input[i]);if(t.output!=null&&t.output.length)for(var i=0;i<t.output.length;++i)o.uint32(42).string(t.output[i]);if(t.attribute!=null&&t.attribute.length)for(var i=0;i<t.attribute.length;++i)o.uint32(50).string(t.attribute[i]);if(t.node!=null&&t.node.length)for(var i=0;i<t.node.length;++i)E.onnx.NodeProto.encode(t.node[i],o.uint32(58).fork()).ldelim();if(t.docString!=null&&Object.hasOwnProperty.call(t,"docString")&&o.uint32(66).string(t.docString),t.opsetImport!=null&&t.opsetImport.length)for(var i=0;i<t.opsetImport.length;++i)E.onnx.OperatorSetIdProto.encode(t.opsetImport[i],o.uint32(74).fork()).ldelim();if(t.domain!=null&&Object.hasOwnProperty.call(t,"domain")&&o.uint32(82).string(t.domain),t.attributeProto!=null&&t.attributeProto.length)for(var i=0;i<t.attributeProto.length;++i)E.onnx.AttributeProto.encode(t.attributeProto[i],o.uint32(90).fork()).ldelim();return o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.FunctionProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.name=t.string();break}case 4:{a.input&&a.input.length||(a.input=[]),a.input.push(t.string());break}case 5:{a.output&&a.output.length||(a.output=[]),a.output.push(t.string());break}case 6:{a.attribute&&a.attribute.length||(a.attribute=[]),a.attribute.push(t.string());break}case 11:{a.attributeProto&&a.attributeProto.length||(a.attributeProto=[]),a.attributeProto.push(E.onnx.AttributeProto.decode(t,t.uint32()));break}case 7:{a.node&&a.node.length||(a.node=[]),a.node.push(E.onnx.NodeProto.decode(t,t.uint32()));break}case 8:{a.docString=t.string();break}case 9:{a.opsetImport&&a.opsetImport.length||(a.opsetImport=[]),a.opsetImport.push(E.onnx.OperatorSetIdProto.decode(t,t.uint32()));break}case 10:{a.domain=t.string();break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.name!=null&&t.hasOwnProperty("name")&&!R.isString(t.name))return"name: string expected";if(t.input!=null&&t.hasOwnProperty("input")){if(!Array.isArray(t.input))return"input: array expected";for(var o=0;o<t.input.length;++o)if(!R.isString(t.input[o]))return"input: string[] expected"}if(t.output!=null&&t.hasOwnProperty("output")){if(!Array.isArray(t.output))return"output: array expected";for(var o=0;o<t.output.length;++o)if(!R.isString(t.output[o]))return"output: string[] expected"}if(t.attribute!=null&&t.hasOwnProperty("attribute")){if(!Array.isArray(t.attribute))return"attribute: array expected";for(var o=0;o<t.attribute.length;++o)if(!R.isString(t.attribute[o]))return"attribute: string[] expected"}if(t.attributeProto!=null&&t.hasOwnProperty("attributeProto")){if(!Array.isArray(t.attributeProto))return"attributeProto: array expected";for(var o=0;o<t.attributeProto.length;++o){var i=E.onnx.AttributeProto.verify(t.attributeProto[o]);if(i)return"attributeProto."+i}}if(t.node!=null&&t.hasOwnProperty("node")){if(!Array.isArray(t.node))return"node: array expected";for(var o=0;o<t.node.length;++o){var i=E.onnx.NodeProto.verify(t.node[o]);if(i)return"node."+i}}if(t.docString!=null&&t.hasOwnProperty("docString")&&!R.isString(t.docString))return"docString: string expected";if(t.opsetImport!=null&&t.hasOwnProperty("opsetImport")){if(!Array.isArray(t.opsetImport))return"opsetImport: array expected";for(var o=0;o<t.opsetImport.length;++o){var i=E.onnx.OperatorSetIdProto.verify(t.opsetImport[o]);if(i)return"opsetImport."+i}}return t.domain!=null&&t.hasOwnProperty("domain")&&!R.isString(t.domain)?"domain: string expected":null},e.fromObject=function(t){if(t instanceof E.onnx.FunctionProto)return t;var o=new E.onnx.FunctionProto;if(t.name!=null&&(o.name=String(t.name)),t.input){if(!Array.isArray(t.input))throw TypeError(".onnx.FunctionProto.input: array expected");o.input=[];for(var i=0;i<t.input.length;++i)o.input[i]=String(t.input[i])}if(t.output){if(!Array.isArray(t.output))throw TypeError(".onnx.FunctionProto.output: array expected");o.output=[];for(var i=0;i<t.output.length;++i)o.output[i]=String(t.output[i])}if(t.attribute){if(!Array.isArray(t.attribute))throw TypeError(".onnx.FunctionProto.attribute: array expected");o.attribute=[];for(var i=0;i<t.attribute.length;++i)o.attribute[i]=String(t.attribute[i])}if(t.attributeProto){if(!Array.isArray(t.attributeProto))throw TypeError(".onnx.FunctionProto.attributeProto: array expected");o.attributeProto=[];for(var i=0;i<t.attributeProto.length;++i){if(typeof t.attributeProto[i]!="object")throw TypeError(".onnx.FunctionProto.attributeProto: object expected");o.attributeProto[i]=E.onnx.AttributeProto.fromObject(t.attributeProto[i])}}if(t.node){if(!Array.isArray(t.node))throw TypeError(".onnx.FunctionProto.node: array expected");o.node=[];for(var i=0;i<t.node.length;++i){if(typeof t.node[i]!="object")throw TypeError(".onnx.FunctionProto.node: object expected");o.node[i]=E.onnx.NodeProto.fromObject(t.node[i])}}if(t.docString!=null&&(o.docString=String(t.docString)),t.opsetImport){if(!Array.isArray(t.opsetImport))throw TypeError(".onnx.FunctionProto.opsetImport: array expected");o.opsetImport=[];for(var i=0;i<t.opsetImport.length;++i){if(typeof t.opsetImport[i]!="object")throw TypeError(".onnx.FunctionProto.opsetImport: object expected");o.opsetImport[i]=E.onnx.OperatorSetIdProto.fromObject(t.opsetImport[i])}}return t.domain!=null&&(o.domain=String(t.domain)),o},e.toObject=function(t,o){o||(o={});var i={};if((o.arrays||o.defaults)&&(i.input=[],i.output=[],i.attribute=[],i.node=[],i.opsetImport=[],i.attributeProto=[]),o.defaults&&(i.name="",i.docString="",i.domain=""),t.name!=null&&t.hasOwnProperty("name")&&(i.name=t.name),t.input&&t.input.length){i.input=[];for(var a=0;a<t.input.length;++a)i.input[a]=t.input[a]}if(t.output&&t.output.length){i.output=[];for(var a=0;a<t.output.length;++a)i.output[a]=t.output[a]}if(t.attribute&&t.attribute.length){i.attribute=[];for(var a=0;a<t.attribute.length;++a)i.attribute[a]=t.attribute[a]}if(t.node&&t.node.length){i.node=[];for(var a=0;a<t.node.length;++a)i.node[a]=E.onnx.NodeProto.toObject(t.node[a],o)}if(t.docString!=null&&t.hasOwnProperty("docString")&&(i.docString=t.docString),t.opsetImport&&t.opsetImport.length){i.opsetImport=[];for(var a=0;a<t.opsetImport.length;++a)i.opsetImport[a]=E.onnx.OperatorSetIdProto.toObject(t.opsetImport[a],o)}if(t.domain!=null&&t.hasOwnProperty("domain")&&(i.domain=t.domain),t.attributeProto&&t.attributeProto.length){i.attributeProto=[];for(var a=0;a<t.attributeProto.length;++a)i.attributeProto[a]=E.onnx.AttributeProto.toObject(t.attributeProto[a],o)}return i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Qe.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.FunctionProto"},e}(),n}();ab.exports=E});function so(n,e){if(!n)throw new Error(typeof e=="string"?e:e())}function Mo(n){return new TextDecoder().decode(n)}var et,Rn,$l,St,Wi,wt,Et,fe,zo,zn,Mn,Bn,je=W(()=>{"use strict";Ks();et=Pe(ao());Fn();Rn=class{static arraysEqual(e,r){if(e.length!==r.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}},$l=class{static preprocessInputShapes(e,r){let t=e.length===1?[1,e[0]]:e,o=r.length===1?[r[0],1]:r;return[t,o]}static postprocessOutputShape(e,r,t){r===1&&e.splice(e.length-2,1),t===1&&e.pop()}static calcMatMulShape(e,r){return e[1]!==r[0]?void 0:[e[0],r[1]]}},St=class n{static calcShape(e,r,t=!1){let o=e.length,i=r.length;if(o===0)return r;if(i===0)return e;let a=Math.max(e.length,r.length),u=new Array(a);if(t){if(o<2||i<2)return;let c=$l.calcMatMulShape([e[o-2],e[o-1]],[r[i-2],r[i-1]]);if(c===void 0)return;[u[a-2],u[a-1]]=c}for(let c=t?3:1;c<=a;c++){let p=o-c<0?1:e[o-c],m=i-c<0?1:r[i-c];if(p!==m&&p>1&&m>1)return;u[a-c]=Math.max(p,m)}return u}static index(e,r){let t=new Array(r.length);return n.fillIndex(e,r,t),t}static fillIndex(e,r,t){let o=e.length-r.length;for(let i=0;i<r.length;i++)t[i]=e[o+i]%r[i]}static calc(e,r,t,o,i){let a=n.calcShape(e.dims,r.dims);if(a){if(o&&!fe.areEqual(a,e.dims))return;let u=fe.size(a),c=o?e:new pt(a,i||e.type);if(a.length===0)c.set([],t(e.get([]),r.get([])));else{let p=new Array(a.length),m=new Array(e.dims.length),b=new Array(r.dims.length),_=0,x=0,T=!1,I=!1;e.dims.length===0&&(_=e.get([]),T=!0),r.dims.length===0&&(x=r.get([]),I=!0);let P;for(let $=0;$<u;$++){P=$;for(let A=a.length-1;A>=0;A--)p[A]=P%a[A],P=Math.floor(P/a[A]);T||(n.fillIndex(p,e.dims,m),_=e.get(m)),I||(n.fillIndex(p,r.dims,b),x=r.get(b)),c.set(p,t(_,x))}}return c}}static isValidBroadcast(e,r){let t=e.length,o=r.length;if(t>o)return!1;for(let i=1;i<=t;i++)if(e[t-i]!==1&&e[t-i]!==r[o-i])return!1;return!0}static getBroadcastDims(e,r){let t=e.length,o=[];for(let i=0;i<t;i++){let a=t-1-i,u=e[a]||1;(r[r.length-1-i]||1)>1&&u===1&&o.unshift(a)}return o}},Wi=class{static getShapeOfGemmResult(e,r,t,o,i){if(e.length!==2||t.length!==2)throw new Error("shape need to be of size 2");let a,u,c;r?(a=e[1],u=e[0]):(a=e[0],u=e[1]);let p=-1;if(o?(c=t[0],p=1):(c=t[1],p=0),t[p]!==u)throw new Error("dimension mismatch");if(a<=0||c<=0||u<=0)throw new Error("invalid shape specified");if(i&&!St.isValidBroadcast(i,[a,c]))throw new Error("gemm: invalid bias shape for broadcast");return[a,c,u]}},wt=class n{static tensorDataTypeFromProto(e){switch(e){case et.onnx.TensorProto.DataType.INT8:return"int8";case et.onnx.TensorProto.DataType.UINT8:return"uint8";case et.onnx.TensorProto.DataType.BOOL:return"bool";case et.onnx.TensorProto.DataType.INT16:return"int16";case et.onnx.TensorProto.DataType.UINT16:return"uint16";case et.onnx.TensorProto.DataType.INT32:return"int32";case et.onnx.TensorProto.DataType.UINT32:return"uint32";case et.onnx.TensorProto.DataType.FLOAT:return"float32";case et.onnx.TensorProto.DataType.DOUBLE:return"float64";case et.onnx.TensorProto.DataType.STRING:return"string";case et.onnx.TensorProto.DataType.INT64:return"int32";case et.onnx.TensorProto.DataType.UINT64:return"uint32";default:throw new Error(`unsupported data type: ${et.onnx.TensorProto.DataType[e]}`)}}static tensorDataTypeStringToEnum(e){switch(e){case"int8":return et.onnx.TensorProto.DataType.INT8;case"uint8":return et.onnx.TensorProto.DataType.UINT8;case"bool":return et.onnx.TensorProto.DataType.BOOL;case"int16":return et.onnx.TensorProto.DataType.INT16;case"uint16":return et.onnx.TensorProto.DataType.UINT16;case"int32":return et.onnx.TensorProto.DataType.INT32;case"uint32":return et.onnx.TensorProto.DataType.UINT32;case"float32":return et.onnx.TensorProto.DataType.FLOAT;case"float64":return et.onnx.TensorProto.DataType.DOUBLE;case"string":return et.onnx.TensorProto.DataType.STRING;case"int64":return et.onnx.TensorProto.DataType.INT64;case"uint64":return et.onnx.TensorProto.DataType.UINT64;default:throw new Error(`unsupported data type: ${e}`)}}static tensorDimsFromProto(e){return e.map(r=>gn.isLong(r)?r.toNumber():r)}static tensorValueTypeFromProto(e){return{tensorType:n.tensorDataTypeFromProto(e.elemType),shape:{dims:n.tensorDimsFromProto(e.shape.dim.map(r=>r.dimValue))}}}static tensorDimsFromORTFormat(e){let r=[];for(let t=0;t<e.dimsLength();t++)r.push(Et.longToNumber(e.dims(t)));return r}static tensorAttributesFromORTFormat(e){let r=[];for(let t=0;t<e.attributesLength();t++)r.push(e.attributes(t));return r}},Et=class{static longToNumber(e){return gn.isLong(e)?e.toNumber():typeof e=="bigint"?Number(e):e}static isLong(e){return gn.isLong(e)||typeof e=="bigint"}},fe=class n{static size(e){return n.getSizeFromDimensionRange(e,0,e.length)}static sizeFromDimension(e,r){if(r<0||r>e.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${e.length} dimensions.`);return n.getSizeFromDimensionRange(e,r,e.length)}static sizeToDimension(e,r){if(r<0||r>e.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${e.length} dimensions.`);return n.getSizeFromDimensionRange(e,0,r)}static getSizeFromDimensionRange(e,r,t){let o=1;for(let i=r;i<t;i++){if(e[i]<=0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains 0 or negative values in them.");o*=e[i]}return o}static computeStrides(e){let r=e.length;if(r===0)return[];if(r===1)return[1];let t=new Array(r);t[r-1]=1,t[r-2]=e[r-1];for(let o=r-3;o>=0;--o)t[o]=t[o+1]*e[o+1];return t}static transpose(e){return e.slice().reverse()}static indicesToOffset(e,r,t){t===void 0&&(t=e.length);let o=0;for(let i=0;i<t;++i)o+=r[i]*e[i];return o}static offsetToIndices(e,r){let t=r.length;if(t===0)return[];if(t===1)return[e*r[0]];let o=new Array(r.length);for(let i=0;i<o.length-1;++i)o[i]=Math.floor(e/r[i]),e-=o[i]*r[i];return o[o.length-1]=e,o}static normalizeAxis(e,r){if(e<-r&&e>=r)throw new Error("unsupported axis for this operation.");return e<0?e+r:e}static normalizeAxes(e,r){return e.map(t=>this.normalizeAxis(t,r))}static incrementIndex(e,r,t){if(r.length===0||e.length===0)throw new Error("Index incrementing unsupported for scalar Tensor");if(t===void 0)t=r.length;else if(t<=0||t>r.length)throw new Error("Incorrect axis to increment on");for(let o=t-1;o>=0&&(e[o]++,!(e[o]<r[o]));--o)e[o]=0}static calculateReshapedDims(e,r){if(r.length===0){if(e.length===0||n.size(e)===1)return[];throw new Error("cannot reshape to a scalar Tensor")}let t=r.length,o=new Array(t),i=-1,a=1;for(let c=0;c<t;c++){if(r[c]<-1)throw new Error("a dimension in shape hints cannot be less than -1");if(r[c]===-1){if(i!==-1)throw new Error("at most one dimension in shape hints can be -1");i=c}else{if(r[c]===0){if(c>=e.length)throw new Error("the dimension with value zero exceeds the dimension size of the input tensor");o[c]=e[c]}else o[c]=r[c];a*=o[c]}}let u=n.size(e);if(i!==-1){if(u%a!==0)throw new Error(`the input tensor cannot be reshaped to the requested shape. Input shape: [${e}] Output shape: [${r}]`);o[i]=u/a}else if(a!==u)throw new Error("reshapedDims and originalDims don't have matching sizes");return o}static sortBasedOnPerm(e,r){return r?r.map(t=>e[t]):e.slice().reverse()}static padShape(e,r){let t=e.length;return e.map((o,i)=>o+r[i]+r[i+t])}static areEqual(e,r){return e.length!==r.length?!1:e.every((t,o)=>t===r[o])}static validateDimsAndCalcSize(e){if(e.length>6)throw new TypeError("Only rank 0 to 6 is supported for tensor shape.");let r=1;for(let t of e){if(!Number.isInteger(t))throw new TypeError(`Invalid shape: ${t} is not an integer`);if(t<0||t>2147483647)throw new TypeError(`Invalid shape: length ${t} is not allowed`);r*=t}return r}static flattenShape(e,r){r<0&&(r+=e.length);let t=e.reduce((a,u)=>a*u,1),o=e.slice(r).reduce((a,u)=>a*u,1);return[t/o,o]}static squeezeShape(e,r){let t=new Array;r=n.normalizeAxes(r,e.length);for(let o=0;o<e.length;o++){let i=r.indexOf(o)>=0;if(i&&e[o]!==1)throw new Error("squeeze an axis of size different than 1");(r.length===0&&e[o]>1||r.length>0&&!i)&&t.push(e[o])}return t}static unsqueezeShape(e,r){let t=new Array(e.length+r.length);t.fill(0);for(let i=0;i<r.length;i++){let a=n.normalizeAxis(r[i],t.length);if(a>=t.length)throw new Error("'axes' has an out of range axis");if(t[a]!==0)throw new Error("'axes' has a duplicate axis");t[a]=1}let o=0;for(let i=0;i<t.length;i++)t[i]===0&&(t[i]=e[o++]);if(o!==e.length)throw new Error("the unsqueezed dimension could not be established");return t}},zo=class n{static splitShape(e,r,t,o){if(t.length===0){if(!o)throw new Error("need to know number of outputs when the 'split' attribute is not specified");n.determineSplit(e[r],o,t)}let i=[],a=[0];for(let u=0;u<t.length;++u){u!==0&&a.push(a[u-1]+t[u-1]);let c=e.slice();c[r]=t[u],i.push(c)}return[i,a]}static determineSplit(e,r,t){if(e%r!==0)throw new Error("cannot split tensor to equal sized parts");for(let o=0;o<r;++o)t.push(e/r)}},zn=class n{static adjustPoolAttributes(e,r,t,o,i,a){if(!e&&t.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(e)for(let u=0;u<r.length-2;u++)u>=t.length?t.push(r[u+2]):t[u]=r[u+2];for(let u=0;u<t.length;u++)if(u<o.length){if(o[u]<0)throw new Error("strides should be greater than or equal to 1")}else o.push(1);for(let u=0;u<t.length;u++)if(u<i.length){if(i[u]<0)throw new Error("dilations should be greater than or equal to 1")}else i.push(1);for(let u=0;u<t.length*2;u++)if(u<a.length){if(a[u]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let u=0;u<t.length;u++){if(t[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[u]>=t[u]||a[u+t.length]>=t[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(e,r,t,o,i,a){if(a){if(i.length!==2*(e.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==e.length-2)throw new Error("length of strides should be the length of data dimensions");if(o.length!==e.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<e.length-2;u++)n.adjustPadAndReturnShape(e[u+2],r[u],t[u],o[u],i,u,u+e.length-2,a)}}static computePoolOutputShape(e,r,t,o,i,a,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let c=[r[0],r[1]];return n.computeShapeHelper(e,r,c,t,o,i,a,u),c}static computeConvOutputShape(e,r,t,o,i,a,u){if(e.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let c=[e[0],r[0]];return n.computeShapeHelper(!1,e,c,t,o,i,a,u),c}static computeShapeHelper(e,r,t,o,i,a,u,c){if(e)for(let p=0;p<r.length-2;p++)t.push(1);else for(let p=0;p<r.length-2;p++)t.push(n.adjustPadAndReturnShape(r[p+2],o[p],i[p],a[p],u,p,p+r.length-2,c))}static adjustPadAndReturnShape(e,r,t,o,i,a,u,c){let p=t*(o-1)+1;if(c&&c!=="NOTSET")switch(c){case"VALID":return i[a]=0,i[u]=0,Math.floor((e-p)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(t!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let b=((e+r-1)/r-1)*r+o-e;return i[a]=Math.floor(c==="SAME_LOWER"?(b+1)/2:b/2),i[u]=b-i[a],Math.floor((e+b-o)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((e+i[a]+i[u]-p)/r+1)}},Mn=-34028234663852886e22,Bn=34028234663852886e22});function jE(n){switch(n){case"bool":case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;case"float64":return 8;default:throw new Error(`cannot calculate sizeof() on type ${n}`)}}function sb(n){switch(n){case De.onnx.TensorProto.DataType.UINT8:case De.onnx.TensorProto.DataType.INT8:case De.onnx.TensorProto.DataType.BOOL:return 1;case De.onnx.TensorProto.DataType.UINT16:case De.onnx.TensorProto.DataType.INT16:return 2;case De.onnx.TensorProto.DataType.FLOAT:case De.onnx.TensorProto.DataType.INT32:case De.onnx.TensorProto.DataType.UINT32:return 4;case De.onnx.TensorProto.DataType.INT64:case De.onnx.TensorProto.DataType.DOUBLE:case De.onnx.TensorProto.DataType.UINT64:return 8;default:throw new Error(`cannot calculate sizeof() on type ${De.onnx.TensorProto.DataType[n]}`)}}function WE(n,e){return new(cb(e))(n)}function cb(n){switch(n){case"bool":case"uint8":return Uint8Array;case"int8":return Int8Array;case"int16":return Int16Array;case"uint16":return Uint16Array;case"int32":return Int32Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"float32":return Float32Array;case"float64":return Float64Array;default:throw new Error("unspecified error")}}function Al(n,e){if(e===De.onnx.TensorProto.DataType.INT64||e===Do.TensorDataType.INT64){if(n.greaterThanOrEqual(2147483648)||n.lessThan(-2147483648))throw new TypeError("int64 is not supported")}else if(e===De.onnx.TensorProto.DataType.UINT32||e===Do.TensorDataType.UINT32||e===De.onnx.TensorProto.DataType.UINT64||e===Do.TensorDataType.UINT64){if(n.greaterThanOrEqual(4294967296)||n.lessThan(0))throw new TypeError("uint64 is not supported")}else throw new TypeError(`not a LONG type: ${De.onnx.TensorProto.DataType[e]}`);return n.toNumber()}function ub(n,e,r){switch(e){case De.onnx.TensorProto.DataType.BOOL:case De.onnx.TensorProto.DataType.UINT8:return n.getUint8(r);case De.onnx.TensorProto.DataType.INT8:return n.getInt8(r);case De.onnx.TensorProto.DataType.UINT16:return n.getUint16(r,!0);case De.onnx.TensorProto.DataType.INT16:return n.getInt16(r,!0);case De.onnx.TensorProto.DataType.FLOAT:return n.getFloat32(r,!0);case De.onnx.TensorProto.DataType.INT32:return n.getInt32(r,!0);case De.onnx.TensorProto.DataType.UINT32:return n.getUint32(r,!0);case De.onnx.TensorProto.DataType.INT64:return Al(gn.fromBits(n.getUint32(r,!0),n.getUint32(r+4,!0),!1),e);case De.onnx.TensorProto.DataType.DOUBLE:return n.getFloat64(r,!0);case De.onnx.TensorProto.DataType.UINT64:return Al(gn.fromBits(n.getUint32(r,!0),n.getUint32(r+4,!0),!0),e);default:throw new Error(`cannot read from DataView for type ${De.onnx.TensorProto.DataType[e]}`)}}var lb,De,pt,Fn=W(()=>{"use strict";lb=Pe($g());Ks();ko();De=Pe(ao());je();pt=class n{constructor(e,r,t,o,i,a=lb.Guid.create()){this.dims=e;this.type=r;this.dataProvider=t;this.asyncDataProvider=o;this.cache=i;this.dataId=a;this.size=fe.validateDimsAndCalcSize(e);let u=this.size,c=t===void 0&&o===void 0&&i===void 0;if(i!==void 0&&i.length!==u)throw new RangeError("Input dims doesn't match data length.");if(r==="string"){if(i!==void 0&&(!Array.isArray(i)||!i.every(p=>typeof p=="string")))throw new TypeError("cache should be a string array");c&&(this.cache=new Array(u))}else{if(i!==void 0){let p=cb(r);if(!(i instanceof p))throw new TypeError(`cache should be type ${p.name}`)}if(c){let p=new ArrayBuffer(u*jE(r));this.cache=WE(p,r)}}}get data(){if(this.cache===void 0){let e=this.dataProvider(this.dataId);if(e.length!==this.size)throw new Error("Length of data provided by the Data Provider is inconsistent with the dims of this Tensor.");this.cache=e}return this.cache}get stringData(){if(this.type!=="string")throw new TypeError("data type is not string");return this.data}get integerData(){switch(this.type){case"uint8":case"int8":case"uint16":case"int16":case"int32":case"uint32":case"bool":return this.data;default:throw new TypeError("data type is not integer (uint8, int8, uint16, int16, int32, uint32, bool)")}}get floatData(){switch(this.type){case"float32":case"float64":return this.data;default:throw new TypeError("data type is not float (float32, float64)")}}get numberData(){if(this.type!=="string")return this.data;throw new TypeError("type cannot be non-number (string)")}get(e){return this.data[fe.indicesToOffset(e,this.strides)]}set(e,r){this.data[fe.indicesToOffset(e,this.strides)]=r}async getData(){return this.cache===void 0&&(this.cache=await this.asyncDataProvider(this.dataId)),this.cache}get strides(){return this._strides||(this._strides=fe.computeStrides(this.dims)),this._strides}static fromProto(e){if(!e)throw new Error("cannot construct Value from an empty tensor");let r=wt.tensorDataTypeFromProto(e.dataType),t=wt.tensorDimsFromProto(e.dims),o=new n(t,r);if(r==="string")e.stringData.forEach((i,a)=>{o.data[a]=Mo(i)});else if(e.rawData&&typeof e.rawData.byteLength=="number"&&e.rawData.byteLength>0){let i=o.data,a=new DataView(e.rawData.buffer,e.rawData.byteOffset,e.rawData.byteLength),u=sb(e.dataType),c=e.rawData.byteLength/u;if(e.rawData.byteLength%u!==0)throw new Error("invalid buffer length");if(i.length!==c)throw new Error("buffer length mismatch");for(let p=0;p<c;p++){let m=ub(a,e.dataType,p*u);i[p]=m}}else{let i;switch(e.dataType){case De.onnx.TensorProto.DataType.FLOAT:i=e.floatData;break;case De.onnx.TensorProto.DataType.INT32:case De.onnx.TensorProto.DataType.INT16:case De.onnx.TensorProto.DataType.UINT16:case De.onnx.TensorProto.DataType.INT8:case De.onnx.TensorProto.DataType.UINT8:case De.onnx.TensorProto.DataType.BOOL:i=e.int32Data;break;case De.onnx.TensorProto.DataType.INT64:i=e.int64Data;break;case De.onnx.TensorProto.DataType.DOUBLE:i=e.doubleData;break;case De.onnx.TensorProto.DataType.UINT32:case De.onnx.TensorProto.DataType.UINT64:i=e.uint64Data;break;default:throw new Error("unspecific error")}if(i==null)throw new Error("failed to populate data from a tensorproto value");let a=o.data;if(a.length!==i.length)throw new Error("array length mismatch");for(let u=0;u<i.length;u++){let c=i[u];gn.isLong(c)?a[u]=Al(c,e.dataType):a[u]=c}}return o}static fromData(e,r,t){return new n(r,t,void 0,void 0,e)}static fromOrtTensor(e){if(!e)throw new Error("cannot construct Value from an empty tensor");let r=wt.tensorDimsFromORTFormat(e),t=wt.tensorDataTypeFromProto(e.dataType()),o=new n(r,t);if(t==="string")for(let i=0;i<e.stringDataLength();i++)o.data[i]=e.stringData(i);else if(e.rawDataArray()&&typeof e.rawDataLength()=="number"&&e.rawDataLength()>0){let i=o.data,a=new DataView(e.rawDataArray().buffer,e.rawDataArray().byteOffset,e.rawDataLength()),u=sb(e.dataType()),c=e.rawDataLength()/u;if(e.rawDataLength()%u!==0)throw new Error("invalid buffer length");if(i.length!==c)throw new Error("buffer length mismatch");for(let p=0;p<c;p++){let m=ub(a,e.dataType(),p*u);i[p]=m}}return o}}});function be(n){return n===1?HE:qE}function db(n){let e=be(n);return`${e.version}
      precision highp float;
      ${e.attribute} vec3 position;
      ${e.attribute} vec2 textureCoord;

      ${e.varyingVertex} vec2 TexCoords;

      void main()
      {
          gl_Position = vec4(position, 1.0);
          TexCoords = textureCoord;
      }`}function fb(n){let e=be(n);return`${e.version}
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

    `}function pb(n,e){let r=be(n);return`
  void main() {
    int indices[${e}];
    toVec(TexCoords, indices);
    vec4 result = vec4(process(indices));
    ${r.output} = result;
  }
  `}var HE,qE,ot=W(()=>{"use strict";HE={version:"",attribute:"attribute",varyingVertex:"varying",varyingFrag:"varying",texture2D:"texture2D",output:"gl_FragColor",outputDeclaration:""},qE={version:"#version 300 es",attribute:"in",varyingVertex:"out",varyingFrag:"in",texture2D:"texture",output:"outputColor",outputDeclaration:"out vec4 outputColor;"}});var Le=W(()=>{"use strict"});async function Pl(n,e=t=>0,r){return new Promise((t,o)=>{let i=0,a=()=>{if(n()){t();return}i++;let u=e(i);if(r!=null&&i>=r){o();return}setTimeout(a,u)};a()})}function Hi(n){return so(typeof n<"u"&&n.length!==0,()=>"empty string found for sampler name"),"get"+n.charAt(0).toUpperCase()+n.slice(1)}function hb(n){return so(typeof n<"u"&&n.length!==0,()=>"empty string found for sampler name"),"get"+n.charAt(0).toUpperCase()+n.slice(1)+"AtOutCoords"}function uo(n,e){let r=JSON.parse(JSON.stringify(n));return r=e,r}function lo(n,e){return e.map(r=>n[r]).join(", ")}function $t(n){if(n<=1)return"int";if(n===2)return"ivec2";if(n===3)return"ivec3";if(n===4)return"ivec4";if(n===5)return"ivec5";if(n===6)return"ivec6";throw Error(`GPU for rank ${n} is not yet supported`)}function nr(n=6){return["x","y","z","w","u","v"].slice(0,n)}var jr=W(()=>{"use strict";je()});function KE(n,e){return nr(e).map(r=>`${n}.${r}`)}function co(n,e){return e===1?[n]:KE(n,e)}function Wr(){return`
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
  `}var Vn=W(()=>{"use strict";jr()});function YE(n,e,r){if(n===0)return"false";if(n===1)return`rc > ${e[0]}`;let t="";for(let o=n-2;o<n;o++)t+=`${r[o]} >= ${e[o-n+2]}`,o<n-1&&(t+="||");return t}function ZE(n,e){let r=n.length;if(r===0)return"getA(), 0, 0, 0";if(r===1)return`getA(rc),
            rc + 1 >= ${n[0]} ? 0. : getA(rc + 1),
            0, 0`;let t="r, c",o="r, cp1",i="rp1, c",a="rp1, cp1",u="";if(r>2)for(let c=0;c<r-2;++c)u=u+`${e[c]},`;return`getA(${u}${t}),
          rEdge ? 0. : getA(${u}${i}),
          cEdge ? 0. : getA(${u}${o}),
          rEdge || cEdge ? 0. : getA(${u}${a})`}function JE(n,e,r,t){return n===0||n===1?"":`
    int r = ${e[n-2]};
    int c = ${e[n-1]};
    int rp1 = ${e[n-2]} + 1;
    int cp1 = ${e[n-1]} + 1;
    bool rEdge = rp1 >= ${t};
    bool cEdge = cp1 >= ${r};
    `}var mb,XE,gb,yb=W(()=>{"use strict";ot();Le();jr();Vn();mb={name:"pack",inputNames:["A"],inputTypes:[1]},XE=(n,e)=>{let r=be(n.session.backend.glContext.version),t=e.dims,o=t.length,i=e.dims.length,a=$t(i),u=co("rc",i),c=JE(i,u,t[t.length-2],t[t.length-1]),p;o===0?p=[1,1]:o===1?p=[t[0],1]:p=[t[i-1],t[i-2]];let m=YE(i,p,u),b=ZE(t,u),_=`
        void main() {
          ${a} rc = getOutputCoords();

          if(${m}) {
            ${r.output} = vec4(0);
          } else {
            ${c}

            ${r.output} = vec4(${b});
          }
        }
      `;return{...mb,hasMain:!0,output:{dims:e.dims,type:e.type,textureType:2},shaderSource:_}},gb=(n,e)=>({...mb,get:()=>XE(n,e)})});function Ol(n){if(n.length===0)return[1,1,1];let e=1;for(let r=0;r<n.length-2;++r)e*=n[r];return[e,n.length>1?n[n.length-2]:1,n[n.length-1]]}function _b(n,e){let r=!1;return n.length===0||e.length===0?r=!0:n.length<2||e.length<2?r=n[n.length-1]===e[e.length-1]:r=n[n.length-1]===e[e.length-1]&&n[n.length-2]===e[e.length-2],r}function tD(n){let e=fe.computeStrides(n),r=["b","r","c"],t="index";return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${e.map((i,a)=>{let u=`int ${r[a]} = ${t} / ${i}`,c=a===e.length-1?`int ${r[a+1]} = ${t} - ${r[a]} * ${i}`:`index -= ${r[a]} * ${i}`;return`${u}; ${c};`}).join("")}
      return ivec3(b, r, c);
    }
  `}function rD(n){let e=fe.computeStrides(n);return`
  int getFlattenedIndex(ivec3 coords) {
    // reverse y, z order
    return coords.x * ${e[0]} + coords.z * ${e[1]} + coords.y;
  }
`}var QE,eD,bb,vb=W(()=>{"use strict";je();ot();Le();Vn();QE=n=>({name:"Reshape (packed)",inputTypes:[2],inputNames:["A"],cacheHint:`${n}`}),eD=(n,e,r,t)=>{let o=e.dims,i=t,a="";for(let p=0;p<4;p++){let m="";switch(p){case 0:m="outputCoords = rc;";break;case 1:m="outputCoords = ivec3(rc.x, rc.y+1, rc.z);";break;case 2:m="outputCoords = ivec3(rc.x, rc.y, rc.z+1);";break;case 3:m="outputCoords = ivec3(rc.x, rc.y+1, rc.z+1);";break;default:throw new Error}a+=`
        ${m}
        ${p>0?"if(outputCoords.y < rows && outputCoords.z < cols){":""}
          int flattenedIndex = getFlattenedIndex(outputCoords);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flattenedIndex);
          vec2 innerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${p}] = getChannel(getA(inputRC.x, inputRC.y, inputRC.z), innerDims);

        ${p>0?"}":""}
      `}let u=be(n.session.backend.glContext.version),c=`
      ${tD(o)}
      ${rD(i)}
      ${Wr()}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.0);

        ivec3 outputCoords;
        int rows = ${i[2]};
        int cols = ${i[1]};

        ${a}
        ${u.output} = result;
      }
    `;return{...r,output:{dims:i,type:e.type,textureType:2},shaderSource:c,hasMain:!0}},bb=(n,e,r)=>{let t=QE(r);return{...t,get:()=>eD(n,e,t,r)}}});var Cl,wb=W(()=>{"use strict";ot();Le();Cl=(n,e)=>{let r=e.shape,t=be(n.session.backend.glContext.version),o=`
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
      float value = ${t.texture2D}(X,TexCoords).r;
      ${t.output} = encodeAsUint8(value);
    }`,i={name:"Uint8Encode",inputTypes:[0],inputNames:["X"],output:{dims:r,type:e.tensor.type,textureType:3},shaderSource:o,hasMain:!0};return n.executeProgram(i,[e.tensor])}});function oD(n,e){if(n===1)return"rc";let r="";for(let t=0;t<n;t++)r+=e[t],t<n-1&&(r+=",");return r}var xb,nD,Tb,Ib=W(()=>{"use strict";ot();Le();jr();Vn();xb={name:"unpack",inputNames:["A"],inputTypes:[2]},nD=(n,e)=>{let r=e.dims.length,t=co("rc",r),o=t.slice(-2),i=$t(r),a=Wr(),c=e.dims.length===0?"":oD(r,t),p=r<=1?"rc":`vec2(${o.join(",")})`,m=be(n.session.backend.glContext.version),b=`
    ${a}
    void main() {
      ${i} rc = getOutputCoords();

       // Sample the texture with the coords to get the rgba channel value.
       vec4 packedInput = getA(${c});

       ${m.output} = vec4(getChannel(packedInput, ${p}), 0, 0, 0);
     }
   `;return{...xb,hasMain:!0,output:{dims:e.dims,type:e.type,textureType:0},shaderSource:b}},Tb=(n,e)=>({...xb,get:()=>nD(n,e)})});var qi,Bo,Ki,Fo=W(()=>{"use strict";Vt();qi=class{constructor(e,r=1){if(r===1)this.internalFormat=e.R32F,this.format=e.RED,this.textureType=e.FLOAT,this.channelSize=r;else if(r===4)this.internalFormat=e.RGBA32F,this.format=e.RGBA,this.textureType=e.FLOAT,this.channelSize=r;else throw new Error(`Invalid number of channels: ${r}`)}encode(e,r){let t,o;return e.constructor!==Float32Array&&(qe.warning("Encoder","data was not of type Float32; creating new Float32Array"),o=new Float32Array(e)),r*this.channelSize>e.length?(qe.warning("Encoder","Source data too small. Allocating larger array"),o=e,t=this.allocate(r*this.channelSize),o.forEach((i,a)=>t[a]=i)):(o=e,t=o),t}allocate(e){return new Float32Array(e*4)}decode(e,r){return this.channelSize===1?e.filter((o,i)=>i%4===0).subarray(0,r):e.subarray(0,r)}},Bo=class{constructor(e,r=1,t){if(r!==1&&r!==4)throw new Error(`Invalid number of channels: ${r}`);this.internalFormat=e.RGBA,this.format=e.RGBA,this.channelSize=r,this.textureType=t||e.FLOAT}encode(e,r){let t=e;return this.channelSize===1&&(qe.verbose("Encoder","Exploding into a larger array"),t=this.allocate(r),e.forEach((o,i)=>t[i*4]=o)),t}allocate(e){return new Float32Array(e*4)}decode(e,r){return this.channelSize===1?e.filter((o,i)=>i%4===0).subarray(0,r):e.subarray(0,r)}},Ki=class{constructor(e,r=1){this.channelSize=4;if(r===1)this.internalFormat=e.ALPHA,this.format=e.ALPHA,this.textureType=e.UNSIGNED_BYTE,this.channelSize=r;else if(r===4)this.internalFormat=e.RGBA,this.format=e.RGBA,this.textureType=e.UNSIGNED_BYTE,this.channelSize=r;else throw new Error(`Invalid number of channels: ${r}`)}encode(e,r){return new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}allocate(e){return new Uint8Array(e*this.channelSize)}decode(e,r){if(e instanceof Uint8Array)return e.subarray(0,r);throw new Error(`Invalid array type: ${e.constructor}`)}}});var Vo,Sb,El,$b=W(()=>{"use strict";je();Le();Vo=(n,e,r)=>{let t=r===0||r===1?1:4,o=r===2,i=r===1||r===2,a=r===4?e.length-1:void 0,u=r===4?e.map((c,p)=>p===e.length-1?c*4:c):void 0;return El(n,e,t,u,{isPacked:o,reverseWH:i,breakAxis:a})},Sb=(n,e,r)=>{let t=Vo(n,e,r);return[t.width,t.height]},El=(n,e,r=1,t,o)=>{let i=!!(o&&o.isPacked),[a,u]=n.computeTextureWH(i&&t||e,o),c=e.length,p=e.slice(0);if(c===0&&(p=[1]),r===1)t=e;else if(i){if(r!==4)throw new Error("a packed texture must be 4-channel");t=e,c>0&&(p[c-1]=Math.ceil(p[c-1]/2)),c>1&&(p[c-2]=Math.ceil(p[c-2]/2))}else if(!t)throw new Error("Unpacked shape is needed when using channels > 1");return{width:a,height:u,channels:r,isPacked:i,shape:p,strides:fe.computeStrides(p),unpackedShape:t,reversedWH:o&&o.reverseWH}}});var aD,Xi,Pb=W(()=>{"use strict";Vt();Fn();je();yb();vb();wb();Ib();Fo();$b();Le();aD=(n,e)=>{let r=e.map(o=>`${o.unpackedShape.join(",")};${o.width}x${o.height}`).join("_"),t=n.name;return n.cacheHint&&(t+="["+n.cacheHint+"]"),t+=":"+r,t},Xi=class{constructor(e){this.session=e;this.packedTextureDataCache=new Map,this.unpackedTextureDataCache=new Map}calculateTextureWidthAndHeight(e,r){return Sb(this.session.layoutStrategy,e,r)}executeProgram(e,r){if(r.length<e.inputNames.length)throw new Error(`Input size mustn't be less than ${e.inputNames.length}.`);if(e.inputNames.length!==e.inputTypes.length)throw new Error("input names size does not match input types");let t=[];for(let p=0;p<e.inputNames.length;++p)t[p]=this.getOrCreateTextureData(r[p],e.inputTypes[p]);let o=aD(e,t),i=this.session.programManager.getArtifact(o),a=i?i.programInfo:typeof e.get=="function"?e.get():e,u=Vo(this.session.layoutStrategy,a.output.dims,a.output.textureType),c=this.createTextureData(u,a.output.type);return i||(i=this.session.programManager.build(a,t,c),this.session.programManager.setArtifact(o,i)),this.runProgram(i,t,c),c}run(e,r){return this.executeProgram(e,r).tensor}runProgram(e,r,t){for(let o=0;o<r.length;++o)if(!!r[o].isPacked!=(e.programInfo.inputTypes[o]===2))throw new Error(`input[${o}] property packed inconsistent`);if(!!t.isPacked!=(e.programInfo.output.textureType===2))throw new Error("output property packed inconsistent");this.session.programManager.run(e,r,t)}getOrCreateTextureData(e,r){let t=this.getTextureData(e.dataId,r===2);if(!t&&(t=this.getTextureData(e.dataId,r!==2),t))return r===2?this.pack(t):this.unpack(t);if(!t){let o=Vo(this.session.layoutStrategy,e.dims,r);if(r===4){let u=e.dims;if(u.length===4){let c=[u[0],Math.ceil(u[1]*u[2]*u[3]/4)],p=Vo(this.session.layoutStrategy,c,r),m=e.numberData;if(u[1]*u[2]*u[3]%4!==0){let b=u[0],_=u[1]*u[2]*u[3],x=Math.ceil(_*1/4)*4,T=b*x;m=new Float32Array(T);for(let I=0;I<b;++I){let P=I*_,$=I*x+I%1*_;m.set(e.numberData.subarray(P,P+_),$)}}return this.createTextureData(p,e.type,m,e,1)}}if(r===2){let i=El(this.session.layoutStrategy,e.dims,1,[],{reverseWH:!0}),a=this.createTextureData(i,e.type,e.numberData,e,1);t=this.pack(a)}else t=this.createTextureData(o,e.type,e.numberData,e,1)}return t}createTextureDataFromLayoutBindTensor(e,r,t,o){return this.createTextureData(e,r,t,o,1)}createTextureData(e,r,t,o,i){qe.verbose("InferenceHandler",`Creating TextureData: layout:[${JSON.stringify(e)}]`);let a=this.session.textureManager.createTextureFromLayout(r,e,t,i);return this.createTextureDataFromTexture(e,r,a,o)}reshapeUnpacked(e,r){let t=this.getOrCreateTextureData(e,0),o={channels:t.channels,height:t.height,width:t.width,shape:r.length!==0?r:[1],strides:fe.computeStrides(r),unpackedShape:r};return this.createTextureDataFromTexture(o,e.type,t.texture).tensor}reshapePacked(e,r){let t=this.getOrCreateTextureData(e,2);if(_b(e.dims,r)){let p={channels:t.channels,height:t.height,width:t.width,shape:r.length!==0?r:[1],strides:fe.computeStrides(r),unpackedShape:r,isPacked:!0};return this.createTextureDataFromTexture(p,e.type,t.texture).tensor}let o=Ol(e.dims),i=Ol(r),a=this.reshapePacked(e,o),u=this.run(bb(this,a,i),[a]);return this.reshapePacked(u,r)}cast(e,r){let t=this.getOrCreateTextureData(e,0);return this.createTextureDataFromTexture(t,r,t.texture).tensor}createTextureDataFromTexture(e,r,t,o,i){let a={...e,tensor:o||new pt(e.unpackedShape,r,u=>this.readTexture(a),async u=>this.readTextureAsync(a),void 0,i),texture:t};return this.setTextureData(a.tensor.dataId,a,e.isPacked),a}getTextureData(e,r=!1){return this.session.isInitializer(e)?this.session.getTextureData(e,r):r?this.packedTextureDataCache.get(e):this.unpackedTextureDataCache.get(e)}setTextureData(e,r,t=!1){this.session.isInitializer(e)?this.session.setTextureData(e,r,t):(t?this.packedTextureDataCache:this.unpackedTextureDataCache).set(e,r)}isTextureLayoutCached(e,r=!1){return!!this.getTextureData(e.dataId,r)}dispose(){this.session.textureManager.clearActiveTextures(),this.packedTextureDataCache.forEach(e=>this.session.textureManager.releaseTexture(e)),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache.forEach(e=>this.session.textureManager.releaseTexture(e)),this.unpackedTextureDataCache=new Map}readTexture(e){return e.isPacked?this.readTexture(this.unpack(e)):this.session.backend.glContext.isFloat32DownloadSupported?this.session.textureManager.readTexture(e,e.tensor.type,e.channels):this.session.textureManager.readUint8TextureAsFloat(Cl(this,e))}async readTextureAsync(e){return e.isPacked?this.readTextureAsync(this.unpack(e)):this.session.backend.glContext.isFloat32DownloadSupported?this.session.textureManager.readTextureAsync(e,e.tensor.type,e.channels):this.session.textureManager.readUint8TextureAsFloat(Cl(this,e))}pack(e){return this.executeProgram(gb(this,e.tensor),[e.tensor])}unpack(e){return this.executeProgram(Tb(this,e.tensor),[e.tensor])}}});var Dl,Ce,_t=W(()=>{"use strict";Dl=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ce=n=>new Dl(n)});var Ob,Cb,Eb,sD,uD,Db=W(()=>{"use strict";_t();ot();Le();Ob={name:"BatchNormalization",inputNames:["A","Scale","B","Mean","Variance"],inputTypes:[0,0,0,0,0]},Cb=(n,e,r)=>(uD(e),[n.run({...Ob,cacheHint:r.cacheKey,get:()=>sD(n,e,r)},e)]),Eb=n=>{let e=n.attributes.getFloat("epsilon",1e-5),r=n.attributes.getFloat("momentum",.9),t=n.attributes.getInt("spatial",1);return Ce({epsilon:e,momentum:r,spatial:t})},sD=(n,e,r)=>{let t=be(n.session.backend.glContext.version),o=e[0].dims.length,[i,a]=n.calculateTextureWidthAndHeight(e[1].dims,0),u=`
  float process(int[${o}] indices) {
    vec2 position = offsetToCoords(indices[1], ${i}, ${a});
    float scale = getColorAsFloat(${t.texture2D}(Scale, position));
    float mean = getColorAsFloat(${t.texture2D}(Mean, position));
    float variance = getColorAsFloat(${t.texture2D}(Variance, position));
    float b = getColorAsFloat(${t.texture2D}(B, position));

    return scale * ( (_A(indices) - mean) / sqrt(variance + float(${r.epsilon})) ) + b;
  }`;return{...Ob,output:{dims:e[0].dims,type:e[0].type,textureType:0},shaderSource:u}},uD=n=>{if(!n||n.length!==5)throw new Error("BatchNormalization requires 5 inputs.");let e=n[0],r=n[1],t=n[2],o=n[3],i=n[4];if(e.dims.length<3||r.dims.length!==1||t.dims.length!==1||o.dims.length!==1||i.dims.length!==1)throw new Error("invalid input shape.");if(r.dims[0]!==e.dims[1]||t.dims[0]!==e.dims[1]||o.dims[0]!==e.dims[1]||i.dims[0]!==e.dims[1])throw new Error("invalid input shape.");if(e.type!=="float32"&&e.type!=="float64"||r.type!=="float32"&&r.type!=="float64"||t.type!=="float32"&&t.type!=="float64"||o.type!=="float32"&&o.type!=="float64"||i.type!=="float32"&&i.type!=="float64")throw new Error("invalid input tensor types.")}});var Yi,qt,ae,Go,Zi,an=W(()=>{"use strict";Yi=class{constructor(e,r,t,o){this.glContext=e;this.programInfo=r;this.inputTextureLayouts=t;this.outputTextureLayout=o}},qt=class{constructor(e){this.context=e}},ae=class{constructor(e,r){this.routineBody=e;this.dependencies=r}},Go=class{constructor(e,r,t){this.name=e;t?this.dependencies=t:this.dependencies=[],r&&(this.routineBody=r)}addDependency(e){e&&this.dependencies.push(e)}},Zi=class{static returnOrderedNodes(e){if(!e||e.length===0)return[];if(e.length===1)return e;let r=new Set,t=new Set,o=new Array;return this.createOrderedNodes(e,r,t,o),o}static createOrderedNodes(e,r,t,o){for(let i=0;i<e.length;++i)this.dfsTraverse(e[i],r,t,o)}static dfsTraverse(e,r,t,o){if(!e||t.has(e.name))return;if(r.has(e.name))throw new Error("Cyclic dependency detected. Can't topologically sort routines needed for shader.");r.add(e.name);let i=e.dependencies;if(i&&i.length>0)for(let a=0;a<i.length;++a)this.dfsTraverse(i[a],r,t,o);o.push(e),t.add(e.name),r.delete(e.name)}}});function cD(){let n="add_";return{body:`
  float ${n}(float a, float b) {
    return a + b;
  }
  vec4 ${n}(vec4 v1, vec4 v2) {
    return v1 + v2;
  }
  `,name:n,type:0}}function dD(){let n="div_";return{body:`
  float ${n}(float a, float b) {
    return a / b;
  }
  vec4 ${n}(vec4 v1, vec4 v2) {
    return v1 / v2;
  }
  `,name:n,type:0}}function fD(){let n="mul_";return{body:`
  float ${n}(float a, float b) {
    return a * b;
  }
  vec4 ${n}(vec4 v1, vec4 v2) {
    return v1 * v2;
  }
  `,name:n,type:0}}function pD(){let n="sub_";return{body:`
  float ${n}(float a, float b) {
    return a - b;
  }
  vec4 ${n}(vec4 v1, vec4 v2) {
    return v1 - v2;
  }
  `,name:n,type:0}}function hD(){let n="equal_";return{body:`
  float ${n}(float a, float b) {
    return float(a == b);
  }
  vec4 ${n}(vec4 v1, vec4 v2) {
    return vec4(equal(v1, v2));
  }
  `,name:n,type:0}}function mD(){let n="greater_";return{body:`
  float ${n}(float a, float b) {
    return float(a > b);
  }
  vec4 ${n}(vec4 v1, vec4 v2) {
    return vec4( v1.r > v2.r ,
      v1.g > v2.g,
      v1.b > v2.b,
      v1.a > v2.a );
  }
  `,name:n,type:0}}function gD(){let n="less_";return{body:`
  float ${n}(float a, float b) {
    return float(a < b);
  }
  vec4 ${n}(vec4 v1, vec4 v2) {
    return vec4( v1.r < v2.r ,
                v1.g < v2.g,
                v1.b < v2.b,
                v1.a < v2.a );
  }
  `,name:n,type:0}}function yD(){let n="and_";return{body:`
  float ${n}(float a, float b) {
    return float( bool(a) && bool(b) );
  }
  vec4 ${n}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r && b2.r ,
                b1.g && b2.g,
                b1.b && b2.b,
                b1.a && b2.a );
  }
  `,name:n,type:0}}function bD(){let n="or_";return{body:`
  float ${n}(float a, float b) {
    return float( bool(a) || bool(b) );
  }
  vec4 ${n}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r || b2.r ,
                b1.g || b2.g,
                b1.b || b2.b,
                b1.a || b2.a );
  }
  `,name:n,type:0}}function _D(){let n="xor_";return{body:`
  float ${n}(float a, float b) {
    return float( bool(a) ^^ bool(b) );
  }
  vec4 ${n}(vec4 v1, vec4 v2) {
    bvec4 b1 = bvec4(v1);
    bvec4 b2 = bvec4(v2);
    return vec4( b1.r ^^ b2.r ,
                b1.g ^^ b2.g,
                b1.b ^^ b2.b,
                b1.a ^^ b2.a );
  }
  `,name:n,type:0}}function vD(){return xD("pow")}function wD(){let n="prelu_";return{body:`
  float ${n}(float a, float b) {
    return a < 0.0 ? a * b: a;
  }
  vec4 ${n}(vec4 v1, vec4 v2) {
    return vec4(
      v1.r < 0.0 ? v1.r * v2.r: v1.r,
      v1.g < 0.0 ? v1.g * v2.g: v1.g,
      v1.b < 0.0 ? v1.b * v2.b: v1.b,
      v1.a < 0.0 ? v1.a * v2.a: v1.a
      );
  }
  `,name:n,type:0}}function xD(n){let e=`${n}_`;return{body:`
  float ${e}(float a, float b) {
    return ${n}(a, b);
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return ${n}(v1, v2);
  }
  `,name:e,type:0}}var Kt,TD,kb,Nb,Lb,Rb,zb,Mb,Bb,Fb,Vb,Gb,Ub,jb,Wb=W(()=>{"use strict";je();an();ot();Le();Kt=(n,e,r,t=e[0].type,o)=>{let i=n.session.pack?2:0;return{name:r.name,inputNames:["A","B"],inputTypes:[i,i],cacheHint:o,get:()=>TD(n,e,r,t)}},TD=(n,e,r,t=e[0].type)=>{let o=n.session.pack?2:0,i=!fe.areEqual(e[0].dims,e[1].dims),a=e[0].dims,u=n.session.pack;if(i){let m=St.calcShape(e[0].dims,e[1].dims,!1);if(!m)throw new Error("Can't perform binary op on the given tensors");a=m;let b=a.length,_=e[0].dims.length!==0?e[0].dims.length:1,x=e[1].dims.length!==0?e[1].dims.length:1,T=e[0].dims.length!==0?"bcastIndices_A(indices, aindices);":"aindices[0] = 0;",I=e[1].dims.length!==0?"bcastIndices_B(indices, bindices);":"bindices[0] = 0;",P=be(n.session.backend.glContext.version),$=u?`
      ${r.body}
      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();
        vec4 result = ${r.name}(a, b);
        ${P.output} = result;
      }`:`
      ${r.body}
      float process(int indices[${b}]) {
        int aindices[${_}];
        int bindices[${x}];
        ${T}
        ${I}
        return ${r.name}(_A(aindices), _B(bindices));
      }`;return{name:r.name,inputNames:["A","B"],inputTypes:[o,o],output:{dims:a,type:t,textureType:o},shaderSource:$,hasMain:u}}let c=be(n.session.backend.glContext.version),p=`
    ${r.body}
    void main() {
      vec4 v1 = ${c.texture2D}(A, TexCoords);
      vec4 v2 = ${c.texture2D}(B, TexCoords);
      vec4 result = ${r.name}(v1, v2);
      ${c.output} = result;
    }
    `;return{name:r.name,inputNames:["A","B"],inputTypes:[o,o],output:{dims:e[0].dims,type:t,textureType:o},shaderSource:p,hasMain:!0}},kb=(n,e)=>[n.run(Kt(n,e,cD()),e)],Nb=(n,e)=>[n.run(Kt(n,e,yD(),"bool"),e)],Lb=(n,e)=>[n.run(Kt(n,e,dD()),e)],Rb=(n,e)=>[n.run(Kt(n,e,hD(),"bool"),e)],zb=(n,e)=>[n.run(Kt(n,e,mD(),"bool"),e)],Mb=(n,e)=>[n.run(Kt(n,e,gD(),"bool"),e)],Bb=(n,e)=>[n.run(Kt(n,e,fD()),e)],Fb=(n,e)=>[n.run(Kt(n,e,bD(),"bool"),e)],Vb=(n,e)=>[n.run(Kt(n,e,vD()),e)],Gb=(n,e)=>[n.run(Kt(n,e,wD()),e)],Ub=(n,e)=>[n.run(Kt(n,e,pD()),e)],jb=(n,e)=>[n.run(Kt(n,e,_D(),"bool"),e)]});var Hb,qb,SD,Kb=W(()=>{"use strict";je();Hb=(n,e,r)=>(SD(e),[n.cast(e[0],r)]),qb=n=>wt.tensorDataTypeFromProto(n.attributes.getInt("to")),SD=n=>{if(!n||n.length!==1)throw new Error("Cast requires 1 input.");if(n[0].type==="string")throw new Error("Invalid input type.")}});var $D,AD,Xb,Ji,Yb=W(()=>{"use strict";ot();Le();jr();Vn();$D=(n,e)=>({name:"Concat (packed)",inputNames:Array.from({length:n},(r,t)=>`X${t}`),inputTypes:Array(n).fill(2),cacheHint:e}),AD=(n,e,r,t)=>{let o=r[0].dims.slice();if(t>=o.length||t<-1*o.length)throw new Error("axis specified for concat doesn't match input dimensionality");t<0&&(t=o.length+t);let i=o.slice(0);for(let z=1;z<r.length;z++){let M=r[z].dims.slice();for(let q=0;q<o.length;q++)if(q===t)i[t]+=M[q];else if(o[q]!==M[q])throw new Error("non concat dimensions must match")}let a=i.length,u=co("coords",a),c=$t(a),p=Wr(),m=r.map(z=>z.dims),b=nr(a),_=new Array(m.length-1);_[0]=m[0][t];for(let z=1;z<_.length;z++)_[z]=_[z-1]+m[z][t];let x=b[t],T=b.slice(-2),I=b.join(),P=`if (${x} < ${_[0]}) {
        return getChannel(
            getX0(${I}), vec2(${T.join()}));
        }`;for(let z=1;z<_.length;z++){let M=_[z-1];P+=`
            if (${x} < ${_[z]}  && ${x} >= ${_[z-1]}) {
              return getChannel(
                getX${z}(${Ji(b,x,M)}),
                vec2(${Ji(T,x,M)}));
            }`}let $=_.length,A=_[_.length-1];P+=`
            return getChannel(
              getX${$}(${Ji(b,x,A)}),
              vec2(${Ji(T,x,A)}));`;let C=be(n.session.backend.glContext.version),k=`
          ${p}
          float getValue(${b.map(z=>"int "+z)}) {
            ${P}
          }

          void main() {
            ${c} coords = getOutputCoords();
            int lastDim = coords.${b[a-1]};
            coords.${b[a-1]} = coords.${b[a-2]};
            coords.${b[a-2]} = lastDim;

            vec4 result = vec4(getValue(${u}), 0., 0., 0.);

            ${u[a-1]} = ${u[a-1]} + 1;
            if (${u[a-1]} < ${i[a-1]}) {
              result.g = getValue(${u});
            }

            ${u[a-2]} = ${u[a-2]} + 1;
            if (${u[a-2]} < ${i[a-2]}) {
              result.a = getValue(${u});
            }

            ${u[a-1]} = ${u[a-1]} - 1;
            if (${u[a-2]} < ${i[a-2]} &&
                ${u[a-1]} < ${i[a-1]}) {
              result.b = getValue(${u});
            }
            ${C.output} = result;
          }
        `;return{...e,output:{dims:i,type:r[0].type,textureType:2},shaderSource:k,hasMain:!0}},Xb=(n,e,r)=>{let t=$D(e.length,r.cacheKey);return{...t,get:()=>AD(n,t,e,r.axis)}},Ji=(n,e,r)=>{let t=n.indexOf(e);return n.map((i,a)=>a===t?`${i} - ${r}`:i).join()}});var Zb,PD,OD,CD,Jb,ED,DD,kD,Qb,ND,e_=W(()=>{"use strict";_t();Le();Yb();Zb=(n,e,r)=>(ND(e),n.session.pack&&e[0].dims.length>1?[n.run(Xb(n,e,r),e)]:[n.run(CD(n,e,r),e)]),PD=(n,e)=>({name:"Concat",inputNames:Array.from({length:n},(r,t)=>`X${t}`),inputTypes:Array(n).fill(0),cacheHint:e}),OD=(n,e,r,t)=>{let o=r[0].dims.slice();if(t>=o.length||t<-1*o.length)throw new Error("axis specified for concat doesn't match input dimensionality");t<0&&(t=o.length+t);let i=o.slice(0);for(let x=1;x<r.length;x++){let T=r[x].dims.slice();for(let I=0;I<o.length;I++)if(I===t)i[t]+=T[I];else if(o[I]!==T[I])throw new Error("non concat dimensions must match")}let a=i.length,u=new Array(r.length),c=0;for(let x=0;x<u.length;++x)c+=r[x].dims[t],u[x]=c;let p="";r.length<5?p=Jb(u):p=ED(u);let m=DD(r.length,a),b=kD(u),_=`
        ${m}
        ${b}
        ${p}
        float process(int indices[${a}]) {
          int textureIndex = getTextureWhereDataResides (indices[${t}]);

          if(textureIndex != 0) {
            indices[${t}] = indices[${t}] - int(getSizeInConcatAxisValueFromIndex(textureIndex-int(1)));
          }

          return fetchDataFromCorrectTexture(textureIndex, indices);
        }`;return{...e,output:{dims:i,type:r[0].type,textureType:0},shaderSource:_}},CD=(n,e,r)=>{let t=PD(e.length,r.cacheKey);return{...t,get:()=>OD(n,t,e,r.axis)}},Jb=n=>`int getTextureWhereDataResides(int index) {
      ${n.map((r,t)=>`if(index<${r}) {return ${t};}
`).join("")}
    }`,ED=n=>Jb(n),DD=(n,e)=>{let r=[`float fetchDataFromCorrectTexture(int textureIndex, int indices[${e}]) {`];for(let t=0;t<n;++t)t===0?r.push(`	if (textureIndex == ${t}) { return _X${t}(indices); }`):t===n-1?r.push(`	else { return _X${t}(indices); }`):r.push(`	else if (textureIndex == ${t}) { return _X${t}(indices); }`);return r.push("	}"),r.join(`
`)},kD=n=>{let e=["int getSizeInConcatAxisValueFromIndex(int index) {"];for(let r=0;r<n.length;++r)r===0?e.push(`	if (index == ${r}) { return ${n[r]}; }`):r===n.length-1?e.push(`	else { return ${n[r]}; }`):e.push(`	else if (index == ${r}) { return ${n[r]}; }`);return e.push("	}"),e.join(`
`)},Qb=n=>Ce({axis:n.attributes.getInt("axis")}),ND=n=>{if(!n||n.length<1)throw new Error("too few inputs");let e=n[0].type,r=n[0].dims.length;if(e==="string")throw new Error("string tensor is not supported yet");for(let t of n){if(t.type!==e)throw new Error("input tensors should be one type");if(t.dims.length!==r)throw new Error("input tensors should have the same shape")}}});function LD(){return Xt("abs")}function RD(){return Xt("acos")}function zD(){return Xt("asin")}function MD(){return Xt("atan")}function BD(){return Xt("ceil")}function FD(){return Xt("cos")}function VD(n){let e="elu";return{body:`
  const float alpha = float(${n});

  float ${e}_(float a) {
    return a >= 0.0 ? a: (exp(a) - 1.0) * alpha;
  }
  vec4 ${e}_(vec4 v) {
    return vec4(${e}_(v.x), ${e}_(v.y), ${e}_(v.z), ${e}_(v.w));
  }
  `,name:e,type:0}}function GD(){return Xt("exp")}function UD(){return Xt("floor")}function kl(n,e){let r="clip";return{body:`
  const float min = float(${n});
  const float max = float(${e});

  float ${r}_(float a) {
    return clamp(a, min, max);
  }
  vec4 ${r}_(vec4 v) {
    return clamp(v, min, max);
  }
  `,name:r,type:0}}function jD(){let n="indentity";return{body:`
  float ${n}_(float a) {
    return a;
  }
  vec4 ${n}_(vec4 v) {
    return v;
  }
  `,name:n,type:0}}function WD(n){let e="leakyRelu";return{body:`
  const float alpha = float(${n});

  float ${e}_(float a) {
    return a < 0.0 ? a * alpha : a;
  }
  vec4 ${e}_(vec4 v) {
    return vec4(${e}_(v.x), ${e}_(v.y), ${e}_(v.z), ${e}_(v.w));
  }
  `,name:e,type:0}}function HD(){return Xt("log")}function qD(){let n="neg";return{body:`
  float ${n}_(float a) {
    return -a;
  }
  vec4 ${n}_(vec4 v) {
    return -v;
  }
  `,name:n,type:0}}function KD(){let n="not";return{body:`
  float ${n}_(float a) {
    return float( ! bool(a) );
  }
  bool ${n}_(bool a) {
    return !a;
  }
  vec4 ${n}_(vec4 v) {
    return vec4(!bool(v.x), !bool(v.y), !bool(v.z), !bool(v.w));
  }
  bvec4 ${n}_(bvec4 v) {
    return bvec4(!v.x, !v.y, !v.z, !v.w);
  }
  `,name:n,type:0}}function XD(){return Xt("sin")}function Nl(){let n="relu";return{body:`
  float ${n}_(float a) {
    return max( a, 0.0 );
  }
  vec4 ${n}_(vec4 v) {
    return max( v, 0.0 );
  }
  `,name:n,type:0}}function Ll(){let n="sigmoid";return{body:`
  float ${n}_(float a) {
    return 1.0 / (1.0 + exp(-a));
  }
  vec4 ${n}_(vec4 v) {
    return 1.0 / (1.0 + exp(-v));
  }
  `,name:n,type:0}}function YD(){return Xt("sqrt")}function ZD(){return Xt("tan")}function JD(){let n="tanh";return{body:`
  float ${n}_(float a) {
    a = clamp(a, -10., 10.);
    a = exp(2.*a);
    return (a - 1.) / (a + 1.);
  }
  vec4 ${n}_(vec4 v) {
    v = clamp(v, -10., 10.);
    v = exp(2.*v);
    return (v - 1.) / (v + 1.);
  }
  `,name:n,type:0}}function Xt(n){return{body:`
  float ${n}_(float a) {
    return ${n}(a);
  }
  vec4 ${n}_(vec4 v) {
    return ${n}(v);
  }
  `,name:n,type:0}}var QD,dt,t_,r_,n_,o_,Rl,i_,a_,ek,s_,u_,l_,c_,d_,f_,zl,p_,h_,m_,g_,y_,b_,__,v_,w_,x_,T_,Ml=W(()=>{"use strict";_t();je();an();ot();Le();QD=(n,e,r,t)=>{let o=n.session.pack?2:0,i=be(n.session.backend.glContext.version);return{...e,output:{dims:r.dims,type:r.type,textureType:o},shaderSource:`
     ${t.body}
     void main() {
       vec4 v = ${i.texture2D}(A, TexCoords);
       v = ${t.name}_(v);
       ${i.output} = v;
     }
     `,hasMain:!0}},dt=(n,e,r,t)=>{let o=n.session.pack?2:0,i={name:r.name,inputTypes:[o],inputNames:["A"],cacheHint:t};return{...i,get:()=>QD(n,i,e,r)}},t_=(n,e)=>[n.run(dt(n,e[0],LD()),e)],r_=(n,e)=>[n.run(dt(n,e[0],RD()),e)],n_=(n,e)=>[n.run(dt(n,e[0],zD()),e)],o_=(n,e)=>[n.run(dt(n,e[0],MD()),e)],Rl=(n,e,r)=>[n.run(dt(n,e[0],kl(r.min,r.max),r.cacheKey),e)],i_=n=>Ce({min:n.attributes.getFloat("min",Mn),max:n.attributes.getFloat("max",Bn)}),a_=(n,e)=>{let r=ek(n,e);return Rl(n,[e[0]],r)},ek=(n,e)=>{if(e.length>=3&&(!n.session.isInitializer(e[1].dataId)||!n.session.isInitializer(e[2].dataId)))throw new Error("dynamic clip attributes are not allowed");let r=e.length>=3?e[1].numberData[0]:Mn,t=e.length>=3?e[2].numberData[0]:Bn;return Ce({min:r,max:t})},s_=(n,e)=>[n.run(dt(n,e[0],BD()),e)],u_=(n,e)=>[n.run(dt(n,e[0],FD()),e)],l_=(n,e,r)=>[n.run(dt(n,e[0],VD(r.alpha),r.cacheKey),e)],c_=n=>Ce({alpha:n.attributes.getFloat("alpha",1)}),d_=(n,e)=>[n.run(dt(n,e[0],GD()),e)],f_=(n,e)=>[n.run(dt(n,e[0],UD()),e)],zl=(n,e)=>[n.run(dt(n,e[0],jD()),e)],p_=(n,e,r)=>[n.run(dt(n,e[0],WD(r.alpha),r.cacheKey),e)],h_=n=>Ce({alpha:n.attributes.getFloat("alpha",.01)}),m_=(n,e)=>[n.run(dt(n,e[0],HD()),e)],g_=(n,e)=>[n.run(dt(n,e[0],qD()),e)],y_=(n,e)=>[n.run(dt(n,e[0],KD()),e)],b_=(n,e)=>[n.run(dt(n,e[0],Nl()),e)],__=(n,e)=>[n.run(dt(n,e[0],Ll()),e)],v_=(n,e)=>[n.run(dt(n,e[0],XD()),e)],w_=(n,e)=>[n.run(dt(n,e[0],YD()),e)],x_=(n,e)=>[n.run(dt(n,e[0],ZD()),e)],T_=(n,e)=>[n.run(dt(n,e[0],JD()),e)]});function Hr(n){let e;switch(n.activation){case"Relu":e=Nl();break;case"Sigmoid":e=Ll();break;case"Clip":e=kl(n.clipMin,n.clipMax);break;default:return{activationFunction:"",applyActivation:""}}let r=e.name,t=e.body,o=`value = ${r}_(value);`;return{activationFunction:t,applyActivation:o}}var fo,Gn=W(()=>{"use strict";je();Ml();fo=n=>{let e=n.getString("activation","");if(e==="Clip"){let[r,t]=n.getFloats("activation_params",[Mn,Bn]);return{activation:e,clipMax:t,clipMin:r,activationCacheKey:`${e}:${r},${t}`}}return{activation:e,activationCacheKey:e}}});var rk,nk,I_,S_=W(()=>{"use strict";Vt();ot();Le();Qi();Gn();rk=(n,e)=>({name:"GroupedConv",inputNames:n?["X","W","Bias"]:["X","W"],inputTypes:n?[0,0,0]:[0,0],cacheHint:e}),nk=(n,e,r,t)=>{let i=e.length>2?"value += getBias(output_channel);":"",a=e[0].dims.slice(),u=e[1].dims.slice(),c=u[0]/t.group;qe.verbose("GroupedConv",`autpPad:${t.autoPad}, dilations:${t.dilations}, group:${t.group}, kernelShape:${t.kernelShape}, pads:${t.pads}, strides:${t.strides}`);let p=po(a,u,t.dilations,t.pads,t.strides),m=be(n.session.backend.glContext.version),{activationFunction:b,applyActivation:_}=Hr(t),x=`
  const ivec2 strides = ivec2(${t.strides[0]}, ${t.strides[1]});
  const ivec2 pads = ivec2(${t.pads[0]}, ${t.pads[1]});
  ${b}
  void main() {
    ivec4 coords = getOutputCoords();
    int batch = coords.x;
    int output_channel = coords.y;
    ivec2 xRCCorner = coords.zw * strides - pads;
    int group_id = output_channel / ${c};

    float value = 0.0;
    for (int wInChannel = 0; wInChannel < ${u[1]}; wInChannel++) {
      int input_channel = group_id * ${u[1]} + wInChannel;
      for (int wHeight = 0; wHeight < ${u[2]}; wHeight++) {
        int xHeight = xRCCorner.x + wHeight * ${t.dilations[0]};

        if (xHeight < 0 || xHeight >= ${a[2]}) {
          continue;
        }

        for (int wWidth = 0; wWidth < ${u[3]}; wWidth++) {
          int xWidth = xRCCorner.y + wWidth * ${t.dilations[1]};
          if (xWidth < 0 || xWidth >= ${a[3]}) {
            continue;
          }

          float xVal = getX(batch, input_channel, xWidth, xHeight);
          float wVal = getW(output_channel, wInChannel, wWidth, wHeight);
          value += xVal*wVal;
        }
      }
    }
    ${i}
    ${_}
    ${m.output} = vec4(value, .0, .0, .0);
  }
`;return{...r,output:{dims:p,type:e[0].type,textureType:0},shaderSource:x,hasMain:!0}},I_=(n,e,r)=>{let t=rk(e.length>2,r.cacheKey);return{...t,get:()=>nk(n,e,t,r)}}});var ok,ik,$_,A_=W(()=>{"use strict";ot();Le();Vn();ok=n=>({name:"Im2Col (packed)",inputNames:["A"],inputTypes:[2],cacheHint:n}),ik=(n,e,r,t,o,i)=>{let a=r.dims,u=t.dims,c=2,p=3,m=o.length,b=[u[1]*u[2]*u[3],o[2]*o[3]],_=u[2]*u[3],x=Wr(),T=be(n.session.backend.glContext.version),I="";for(let $=0;$<=1;$++)for(let A=0;A<=1;A++)I+=`
            blockIndex = rc.x + ${A};
            pos = rc.y + ${$};

            if(blockIndex < ${b[1]} && pos < ${b[0]}) {
              offsetY = int(blockIndex / (${o[m-1]})) * ${i.strides[0]} -
                ${i.pads[0]};
              d0 = offsetY + ${i.dilations[0]} * (imod(pos, ${_}) / ${u[2]});

              if(d0 < ${a[c]} && d0 >= 0) {
                offsetX = imod(blockIndex, ${o[m-1]}) * ${i.strides[1]} -
                  ${i.pads[1]};
                d1 = offsetX + ${i.dilations[1]} * imod(imod(pos, ${_}), ${u[2]});

                if(d1 < ${a[p]} && d1 >= 0) {

                  ch = int(float(pos)/ ${_}.);
                    innerDims = vec2(d0, d1);
                    result[${$*2+A}] = getChannel(
                      getA(0, ch, int(innerDims.x),
                      int(innerDims.y)), innerDims);
                }
              }
            }

          `;let P=`
      ${x}

      void main() {
        ivec2 rc = getOutputCoords();
          vec4 result = vec4(0.0);
          int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
          vec2 innerDims;
          ${I}
          ${T.output} = result;
      }
            `;return{...e,output:{dims:b,type:r.type,textureType:2},shaderSource:P,hasMain:!0}},$_=(n,e,r,t,o)=>{let i=ok(o.cacheKey);return{...i,get:()=>ik(n,i,e,r,t,o)}}});function sk(n,e,r){let t=e[0].dims,o=e[1].dims,i=St.calcShape(t,o,!0);if(!i)throw new Error("Can't use matmul on the given tensors");let a=$t(i.length),u=nr(),{activationFunction:c,applyActivation:p}=Hr(r),m=e.length>2,b=m?"value += getBiasForMatmul();":"",_=m?`${Fl(a,u,e[2].dims,i,!1)}`:"",x=i.length,T=t.length,I=o.length,P=t[t.length-1],$=`
    ${c}
    ${_}
    float process(int indices[${x}]) {
        int a[${T}];
        int b[${I}];
        bcastMatmulIndices_A(indices, a);
        bcastMatmulIndices_B(indices, b);

        float value;
        for (int k=0; k<${P}; ++k) {
            a[${T-1}] = k;
            b[${I-2}] = k;
            value += _A(a) * _B(b);
        }
        ${b}
        ${p}
        return value;
    }`;return{...n,output:{dims:i,type:e[0].type,textureType:0},shaderSource:$}}function Bl(n,e){let r=ak(n.length>2,e.activationCacheKey);return{...r,get:()=>sk(r,n,e)}}function Fl(n,e,r,t,o){let i="",a=r.length,u=t.length,c=u-a;u<2&&a>0?i="coords":i=r.map((I,P)=>`coords.${e[P+c]}`).join(", ");let m=St.getBroadcastDims(r,t).map(I=>`coords.${e[I+c]} = 0;`).join(`
`),_=fe.size(r)===1,x="vec4(outputValue.xx, outputValue.yy)";return _&&(x="vec4(outputValue.x)"),o?`
vec4 getBiasForMatmul() {
  ${n} coords = getOutputCoords();
  ${m}
  vec4 outputValue = getBias(${i});
  return ${x};
}`:`
float getBiasForMatmul() {
  ${n} coords = getOutputCoords();
  ${m}
  return getBias(coords.x);
}`}var P_,O_,ak,uk,ea=W(()=>{"use strict";je();Le();jr();Gn();Vl();P_=(n,e,r)=>(uk(e),n.session.pack?[n.run(ta(n,e,r),e)]:[n.run(Bl(e,r),e)]),O_=n=>fo(n.attributes),ak=(n,e)=>({name:"MatMul",inputNames:n?["A","B","Bias"]:["A","B"],inputTypes:n?[0,0,0]:[0,0],cacheHint:e});uk=n=>{if(!n||n.length!==2)throw new Error("MatMul requires 2 inputs.");if(n[0].dims[n[0].dims.length-1]!==n[1].dims[n[1].dims.length-2])throw new Error("shared dimension does not match.");if(n[0].type!=="float32"&&n[0].type!=="float64"||n[1].type!=="float32"&&n[1].type!=="float64")throw new Error("inputs should be float type");if(n[0].type!==n[1].type)throw new Error("inputs types should match")}});function dk(n,e,r,t){let o=[],i=[],a=r[0].dims,u=r[1].dims,c=a.length,p=u.length,m=t.length,b=m-c,_=m-p;o=a.map((C,k)=>`coords.${e[k+b]}`),o[c-1]="i*2",o.join(", "),i=u.map((C,k)=>`coords.${e[k+_]}`),i[p-2]="i*2",i.join(", ");let x=St.getBroadcastDims(a,t),T=St.getBroadcastDims(u,t),I=x.map(C=>`coords.${e[C+b]} = 0;`).join(`
`),P=T.map(C=>`coords.${e[C+_]} = 0;`).join(`
`),$=`int lastDim = coords.${e[m-1]};
  coords.${e[m-1]} = coords.${e[m-2]};
  coords.${e[m-2]} = lastDim;`;return`
vec4 getAAtOutCoordsMatmul(int i) {
  ${n} coords = getOutputCoords();
  ${$}
  ${I}
  vec4 outputValue = getA(${o});
  return outputValue;
}

vec4 getBAtOutCoordsMatmul(int i) {
  ${n} coords = getOutputCoords();
  ${$}
  ${P}
  vec4 outputValue = getB(${i});
  return outputValue;
}`}function fk(n,e){let r="";for(let t=0;t<e-2;t++)r+=`rc.${n[t]}, `;return r+=`rc.${n[e-2]}, i*2`,r}function pk(n,e){let r="";for(let t=0;t<e-2;t++)r+=`rc.${n[t]}, `;return r+=`i*2, rc.${n[e-1]}`,r}var lk,ck,ta,Vl=W(()=>{"use strict";je();ot();Le();jr();Gn();ea();lk=(n,e)=>({name:"MatMul (packed)",inputNames:n?["A","B","Bias"]:["A","B"],inputTypes:n?[2,2,2]:[2,2],cacheHint:e}),ck=(n,e,r,t)=>{let o=r.length>2,i=o?"value += getBiasForMatmul();":"",a=r[0].dims,u=r[1].dims,c=St.calcShape(a,u,!0),p=!fe.areEqual(r[0].dims,r[1].dims);if(!c)throw new Error("Can't use matmul on the given tensors");let m=a[a.length-1],b=Math.ceil(m/2),_=a.length,x=u.length,T=be(n.session.backend.glContext.version),I=$t(c.length),P=c.length,$=nr(),{activationFunction:A,applyActivation:C}=Hr(t),k=o?`${Fl(I,$,r[2].dims,c,!0)}`:"",z=p?`${dk(I,$,r,c)}`:"",M=p?"getAAtOutCoordsMatmul(i)":`getA(${fk($,_)})`,q=p?"getBAtOutCoordsMatmul(i)":`getB(${pk($,x)})`,X=p?"":`${I} rc =
          getOutputCoords(); int lastDim = rc.${$[P-1]}; rc.${$[P-1]} =
          rc.${$[P-2]}; rc.${$[P-2]} = lastDim;
      `,J=`
            ${z}
            ${k}
            ${A}
            void main() {
              ${X}

              vec4 value = vec4(0);
              for (int i = 0; i < ${b}; i++) {
                vec4 a = ${M};
                vec4 b = ${q};

                value += (a.rrbb * b.rgrg);
                value += (a.ggaa * b.baba);
              }
              ${i}
              ${C}
              ${T.output} = value;
            }`;return{...e,output:{dims:c,type:r[0].type,textureType:2},shaderSource:J,hasMain:!0}},ta=(n,e,r)=>{let t=lk(e.length>2,r.activationCacheKey);return{...t,get:()=>ck(n,t,e,r)}}});var C_,E_=W(()=>{"use strict";Qi();A_();Vl();C_=(n,e,r)=>{let t=e[0].dims,o=e[1].dims,i=po(t,o,r.dilations,r.pads,r.strides),a=n.run($_(n,e[0],e[1],i,r),[e[0]]),u=n.reshapePacked(e[1],[o[0],o[1]*o[2]*o[3]]),c=e.length===3?[u,a,e[2]]:[u,a],p=n.run(ta(n,c,r),c);return n.reshapePacked(p,i)}});var hk,mk,D_,Gl,Ul=W(()=>{"use strict";Le();hk=n=>({name:"Im2Col",inputNames:["X"],inputTypes:[0],cacheHint:n}),mk=(n,e,r,t,o,i)=>{let a=r.dims,u=t.dims,c=o.length,p=Gl(a,u,o,4),m=`
        const int XC = ${a[1]};
        const int XH = ${a[2]};
        const int XW = ${a[3]};
        const int KH = ${i.kernelShape[0]};
        const int KW = ${i.kernelShape[1]};
        const int dilationH = ${i.dilations[0]};
        const int dilationW = ${i.dilations[1]};
        const int strideH = ${i.strides[0]};
        const int strideW = ${i.strides[1]};
        const int padH = ${i.pads[0]};
        const int padW = ${i.pads[1]};
        const int KHKW = KH*KW;
        const int XCKHKW = XC * KHKW;
        const int outputChannels = 4;
        vec4 process(int indices[${c}]) {
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
        `;return{...e,output:{dims:p,type:r.type,textureType:4},shaderSource:m}},D_=(n,e,r,t,o)=>{let i=hk(o.cacheKey);return{...i,get:()=>mk(n,i,e,r,t,o)}},Gl=(n,e,r,t=4)=>[r[0],r[2],r[3],Math.ceil(n[1]*e[2]*e[3]/t)]});var gk,yk,k_,N_=W(()=>{"use strict";je();ot();Le();Gn();Ul();gk=(n,e)=>({name:"ConvDotProduct",inputNames:n?["Im2Col","K","B"]:["Im2Col","K"],inputTypes:n?[0,4,0]:[0,4],cacheKey:e.activationCacheKey}),yk=(n,e,r,t,o)=>{let i=r[0].dims,a=r[1].dims,u=[a[0],Math.ceil(i[1]*a[2]*a[3]/4)],c=Gl(i,a,t),[p,m]=n.calculateTextureWidthAndHeight(u,4),b=fe.computeStrides(c),[_,x]=n.calculateTextureWidthAndHeight(c,4),T=t.length,I=r.length<3?"0.0":"_B(b)",P=Math.ceil(i[1]*a[2]*a[3]/4),{activationFunction:$,applyActivation:A}=Hr(o),C=be(n.session.backend.glContext.version),k=`
${$}
float process(int indices[${T}]) {
  int b[1];
  b[0] = indices[1];
  int im2col[4];
  im2col[0] = indices[0];
  im2col[1] = indices[2];
  im2col[2] = indices[3];
  int im2colOffset = im2col[0] * ${b[0]} + im2col[1] * ${b[1]} + im2col[2] * ${b[2]};
  int kernelOffset = indices[1] * ${u[1]};
  float value = ${I};
  for (int i = 0; i < ${P}; ++i) {
    vec2 im2colCoords = offsetToCoords(im2colOffset, ${_}, ${x});
    vec2 kernelCoords = offsetToCoords(kernelOffset, ${p}, ${m});
    value += dot(${C.texture2D}(Im2Col, im2colCoords), ${C.texture2D}(K, kernelCoords));
    ++im2colOffset;
    ++kernelOffset;
  }
  ${A}
  return value;
}`;return{...e,output:{dims:t,type:r[0].type,textureType:0},shaderSource:k}},k_=(n,e,r,t)=>{let o=gk(e.length>2,t);return{...o,get:()=>yk(n,o,e,r,t)}}});var po,jl,bk,_k,vk,wk,Wl,xk,Qi=W(()=>{"use strict";_t();je();S_();E_();N_();Gn();Ul();ea();po=(n,e,r,t,o)=>{let i=n[0],a=n.slice(2),u=a.length,c=e[0],m=e.slice(2).map((T,I)=>T+(T-1)*(r[I]-1)),_=a.map((T,I)=>T+t[I]+t[I+u]).map((T,I)=>Math.floor((T-m[I]+o[I])/o[I]));return[i,c].concat(..._)},jl=(n,e,r)=>(xk(e,r),bk(n,e,r)),bk=(n,e,r)=>{let t=wk(r,e),o=n.session.pack,i=t.kernelShape[0]===1&&t.kernelShape[1]===1;return t.group>1?[n.run(I_(n,e,t),e)]:i&&o?[_k(n,e,t)]:o&&e[0].dims.length===4&&e[0].dims[0]===1&&!i?[C_(n,e,t)]:[vk(n,e,t)]},_k=(n,e,r)=>{let t=e[0].dims,o=e[1].dims,i=po(t,o,r.dilations,r.pads,r.strides),a=n.reshapeUnpacked(e[0],[t[1],t[2]*t[3]]),u=n.reshapeUnpacked(e[1],[o[0],o[1]]),c=e.length>2?[u,a,e[2]]:[u,a],p=n.run(Bl(c,r),c);return n.reshapeUnpacked(p,i)},vk=(n,e,r)=>{let t=e[0].dims,o=e[1].dims,i=po(t,o,r.dilations,r.pads,r.strides),a=n.run(D_(n,e[0],e[1],i,r),[e[0]]),u=e.length===3?[a,e[1],e[2]]:[a,e[1]];return n.run(k_(n,e,i,r),u)},wk=(n,e)=>{let r=n.kernelShape.slice();if(n.kernelShape.length===0)for(let i=2;i<e[1].dims.length;++i)r.push(e[1].dims[i]);let t=n.pads.slice();zn.adjustPadsBasedOnAutoPad(e[0].dims,n.strides,n.dilations,r,t,n.autoPad);let o=Object.assign({},n);return Object.assign(o,{kernelShape:r,pads:t,cacheKey:n.cacheKey}),o},Wl=n=>{let e=n.attributes,r=fo(e),t=e.getString("auto_pad","NOTSET"),o=e.getInts("dilations",[1,1]),i=e.getInt("group",1),a=e.getInts("kernel_shape",[]),u=e.getInts("pads",[0,0,0,0]),c=e.getInts("strides",[1,1]);return Ce({autoPad:t,dilations:o,group:i,kernelShape:a,pads:u,strides:c,...r})},xk=(n,e)=>{if(!n||n.length!==2&&n.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(n[0].dims.length!==4||n[1].dims.length!==4)throw new Error("currently only support 2-dimensional conv");let r=n[0].dims[1],t=n[1].dims[1]*e.group;if(r!==t)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(n.length===3&&(n[2].dims.length!==1||n[1].dims[0]!==n[2].dims[0]))throw new Error("invalid bias");let o=n[0].dims.length-2;if(e.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(e.strides.length!==o)throw new Error(`strides should be ${o}D`);if(e.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(e.kernelShape.length!==0&&e.kernelShape.length!==n[1].dims.length-2)throw new Error("invalid kernel shape");if(n[0].type!=="float32"||n[1].type!=="float32")throw new Error("Conv input(X,W) should be float tensor");if(n.length===3&&n[2].type!=="float32")throw new Error("Conv input(bias) should be float tensor")}});var Tk,Ik,Sk,L_,$k,Ak,Pk,Ok,Ck,Ek,R_,Dk,z_=W(()=>{"use strict";_t();ot();Le();Gn();Tk=(n,e,r,t,o,i)=>(n-1)*e+r+(t-1)*o+1-i,Ik=(n,e,r,t,o)=>{let i=Math.floor(n/2);e==="SAME_UPPER"?(r[t]=i,r[o]=n-i):e==="SAME_LOWER"&&(r[t]=n-i,r[o]=i)},Sk=(n,e,r,t,o,i,a,u)=>{let c=n.length-2,p=u.length===0;for(let m=0;m<c;++m){let b=p?n[m+2]*i[m]:u[m],_=Tk(n[m+2],i[m],o[m],e[m],r[m],b);Ik(_,t,o,m,m+c),p&&u.push(i[m]*(n[m+2]-1)+a[m]+(e[m]-1)*r[m]+1-o[m]-o[m+c])}},L_=(n,e,r)=>(Dk(e,r),$k(n,e,r)),$k=(n,e,r)=>{let t=Ek(r,e);return[Ck(n,e,t)]},Ak=(n,e)=>({name:"ConvTranspose",inputNames:n?["X","W","B"]:["X","W"],inputTypes:n?[0,0,0]:[0,0],cacheHint:e}),Pk=(n,e,r,t)=>{let i=e.length>2?"getB(output_channel)":"0.0",a=e[0].dims,u=e[1].dims,c=u[1],p=u[0]/t.group,m=[e[0].dims[0],e[1].dims[1]*t.group,...t.outputShape],b=be(n.session.backend.glContext.version),{activationFunction:_,applyActivation:x}=Hr(t),T=`
  const ivec2 strides = ivec2(${t.strides[0]}, ${t.strides[1]});
  const ivec2 pads = ivec2(${t.pads[0]}, ${t.pads[1]});
  ${_}
  void main() {
    ivec4 coords = getOutputCoords();
    int batch = coords.x;
    int output_channel = coords.y;

    ivec2 loc = coords.zw + pads;

    int group_id = output_channel / ${c};
    int wOutChannel = output_channel - group_id * ${c};

    float value = ${i};
    for (int inChannelOffset = 0; inChannelOffset < ${p}; inChannelOffset++) {
      int input_channel = group_id * ${p} + inChannelOffset;
      for (int wWOff = 0; wWOff < ${u[2]}; wWOff++) {
        for (int wHOff = 0; wHOff < ${u[3]}; wHOff++) {
          ivec2 wOff = ivec2(wWOff * ${t.dilations[0]}, wHOff * ${t.dilations[1]});
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
    ${x}
    ${b.output} = vec4(value, .0, .0, .0);
  }
`;return{...r,output:{dims:m,type:e[0].type,textureType:0},shaderSource:T,hasMain:!0}},Ok=(n,e,r)=>{let t=Ak(e.length>2,r.cacheKey);return{...t,get:()=>Pk(n,e,t,r)}},Ck=(n,e,r)=>n.run(Ok(n,e,r),e),Ek=(n,e)=>{let r=n.kernelShape.slice();if(n.kernelShape.length===0)for(let u=2;u<e[1].dims.length;++u)r.push(e[1].dims[u]);let t=n.pads.slice(),o=n.outputShape.slice(),i=e[0].dims;Sk(i,r,n.dilations,n.autoPad,t,n.strides,n.outputPadding,o);let a=Object.assign({},n);return Object.assign(a,{kernelShape:r,pads:t,outputShape:o,cacheKey:n.cacheKey}),a},R_=n=>{let e=n.attributes,r=fo(e),t=e.getString("auto_pad","NOTSET"),o=e.getInts("dilations",[1,1]),i=e.getInt("group",1),a=e.getInts("kernel_shape",[]),u=e.getInts("output_padding",[0,0]),c=e.getInts("output_shape",[]),p=e.getInts("pads",[0,0,0,0]),m=e.getInts("strides",[1,1]);return Ce({autoPad:t,dilations:o,group:i,kernelShape:a,outputPadding:u,outputShape:c,pads:p,strides:m,...r})},Dk=(n,e)=>{if(!n||n.length!==2&&n.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(n[0].dims.length!==4||n[1].dims.length!==4)throw new Error("currently only support 2-dimensional conv");let r=n[0].dims[1],t=n[1].dims[0];if(r!==t)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let o=n[1].dims[1]*e.group;if(n.length===3&&(n[2].dims.length!==1||n[2].dims[0]!==o))throw new Error("invalid bias");let i=n[0].dims.length-2;if(e.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(e.strides.length!==i)throw new Error(`strides should be ${i}D`);if(e.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(e.outputPadding.length!==i)throw new Error(`output_padding should be ${i}D`);if(e.kernelShape.length!==0&&e.kernelShape.length!==n[1].dims.length-2)throw new Error("invalid kernel shape");if(e.outputShape.length!==0&&e.outputShape.length!==n[0].dims.length-2)throw new Error("invalid output shape");if(n[0].type!=="float32"||n[1].type!=="float32")throw new Error("ConvTranspose input(X,W) should be float tensor");if(n.length===3&&n[2].type!=="float32")throw new Error("ConvTranspose input(bias) should be float tensor")}});var M_,Un,B_,kk,F_,Nk,Lk,Rk,ra=W(()=>{"use strict";_t();je();Le();M_={name:"Transpose",inputNames:["A"],inputTypes:[0]},Un=(n,e,r)=>(Rk(e),[n.run({...M_,cacheHint:r.cacheKey,get:()=>kk(n,e[0],r.perm)},e)]),B_=n=>Ce({perm:n.attributes.getInts("perm",[])}),kk=(n,e,r)=>{let t=e.dims;r=F_(t,r);let o=Nk(t,r),i=t.length,a=`
      ${Lk("perm",r,i)}
      float process(int indices[${i}]) {
        int a[${i}];
        perm(a, indices);
        return _A(a);
      }`;return{...M_,output:{dims:o,type:e.type,textureType:0},shaderSource:a}},F_=(n,e)=>(e&&e.length!==n.length&&(e=[...n.keys()].reverse()),e),Nk=(n,e)=>(e=F_(n,e),fe.sortBasedOnPerm(n,e)),Lk=(n,e,r)=>{let t=[];t.push(`void ${n}(out int a[${r}], int src[${r}]) {`);for(let o=0;o<r;++o)t.push(`	a[${e[o]}]=src[${o}];`);return t.push("	}"),t.join(`
`)},Rk=n=>{if(!n||n.length!==1)throw new Error("Transpose requires 1 input.");if(n[0].type!=="float32"&&n[0].type!=="float64")throw new Error("input should be float tensor")}});var V_,G_,zk,U_=W(()=>{"use strict";ra();V_=(n,e,r)=>{zk(e);let t=r.blocksize,o=t*t,i=r.mode==="DCR"?[0,3,4,1,5,2]:[0,1,4,2,5,3],a=r.mode==="DCR"?[e[0].dims[0],t,t,e[0].dims[1]/o,e[0].dims[2],e[0].dims[3]]:[e[0].dims[0],e[0].dims[1]/o,t,t,e[0].dims[2],e[0].dims[3]],u=n.reshapeUnpacked(e[0],a),c={perm:i,cacheKey:`${i}`},[p]=Un(n,[u],c),m=[e[0].dims[0],e[0].dims[1]/o,e[0].dims[2]*t,e[0].dims[3]*t];return[n.reshapeUnpacked(p,m)]},G_=n=>{let e=n.attributes.getInt("blocksize");if(e<1)throw new Error(`blocksize must be >= 1, but got : ${e} for DepthToSpace`);let r=n.attributes.getString("mode","DCR");if(r!=="DCR"&&r!=="CRD")throw new Error(`unrecognized mode: ${r} for DepthToSpace`);return{mode:r,blocksize:e}},zk=n=>{if(n.length!==1)throw new Error(`DepthToSpace expect 1 inputs, but got ${n.length}`);if(n[0].type==="string"||n[0].dims.length!==4)throw new TypeError("DepthToSpace input should be a 4-D numeric tensor")}});var j_,W_,Mk,H_=W(()=>{"use strict";je();j_=(n,e,r)=>{Mk(e,r);let t=fe.flattenShape(e[0].dims,r);return[n.reshapeUnpacked(e[0],t)]},W_=n=>n.attributes.getInt("axis",1),Mk=(n,e)=>{if(!n||n.length!==1)throw new Error("Flatten requires 1 input.");let r=n[0].dims.length;if(r===0)throw new Error("scalar tensor is not supported.");if(e<-r||e>r)throw new Error("Invalid axis");if(n[0].type==="string")throw new Error("string tensor is not supported.")}});var wn,Uo=W(()=>{"use strict";wn=["float32","float64","int32","int16","int8","uint16","uint32","uint8"]});var q_,K_,Bk,Fk,Vk,Gk,X_=W(()=>{"use strict";_t();Uo();je();Le();q_=(n,e,r)=>(Gk(e,r.axis),[n.run(Vk(n,e,r),e)]),K_=n=>Ce({axis:n.attributes.getInt("axis",0)}),Bk={name:"Gather",inputNames:["A","B"],inputTypes:[0,0]},Fk=(n,e,r,t)=>{let o=r[0].dims.slice(),i=r[1].dims.slice(),a=new Array(o.length+i.length-1);t=fe.normalizeAxis(t,o.length);let u=[];for(let _=0;_<a.length;_++)_<t?(a[_]=o[_],u.push(`inputIdx[${_}] = outputIdx[${_}];`)):_<t+i.length?(a[_]=i[_-t],u.push(`indexDataIdx[${_-t}] = outputIdx[${_}];`)):(a[_]=o[_-i.length+1],u.push(`inputIdx[${_-i.length+1}] = outputIdx[${_}];`));let c=a.length||1,p=o.length,m=i.length||1,b=`
      float process(int outputIdx[${c}]) {
        int inputIdx[${p}];
        int indexDataIdx[${m}];
        indexDataIdx[0] = 0;
        ${u.join(`
        `)}
        int idx = int(_B(indexDataIdx));
        inputIdx[${t}] = idx < 0 ? idx + ${o[t]} : idx;
        return _A(inputIdx);
      }`;return{...e,output:{dims:a,type:r[0].type,textureType:0},shaderSource:b}},Vk=(n,e,r)=>{let t={...Bk,cacheHint:r.cacheKey};return{...t,get:()=>Fk(n,t,e,r.axis)}},Gk=(n,e)=>{if(!n||n.length!==2)throw new Error("Gather requires 2 inputs.");let r=n[0].dims.length;if(r<1)throw new Error("Invalid input shape.");if(e<-r||e>r-1)throw new Error("Invalid axis.");if(wn.indexOf(n[0].type)===-1)throw new Error("Invaid input type.");if(n[1].type!=="int32"&&n[1].type!=="int16")throw new Error("Invaid input type.")}});var Hl,Y_,Z_,J_,Uk,jk,Wk,Q_=W(()=>{"use strict";_t();je();Le();Hl=(n,e,r)=>(Wk(e,r),[n.run(Uk(e,r),e)]),Y_=(n,e)=>{let r=n.attributes.getInt("transA",0)!==0,t=n.attributes.getInt("transB",0)!==0,o=n.attributes.getFloat("alpha",1),i=n.attributes.getFloat("beta",1);return Ce({transA:r,transB:t,alpha:o,beta:i,isOptionalC:e})},Z_=n=>Y_(n,!1),J_=n=>Y_(n,!0),Uk=(n,e)=>{let r={name:"Gemm",inputNames:n.length===3?["A","B","C"]:["A","B"],inputTypes:n.length===3?[0,0,0]:[0,0],key:e.cacheKey};return{...r,get:()=>jk(r,n,e)}},jk=(n,e,r)=>{let t=e[0].dims.slice(),o=e[1].dims.slice(),[i,a]=Wi.getShapeOfGemmResult(t,r.transA,o,r.transB,e.length===3?e[2].dims:void 0),u=[i,a];if(!u)throw new Error("Can't use gemm on the given tensors");let c=t[t.length-1],p="";r.transA&&(c=t[0]),r.transA&&r.transB?p="value += _A_T(a) * _B_T(b);":r.transA&&!r.transB?p="value += _A_T(a) * _B(b);":!r.transA&&r.transB?p="value += _A(a) * _B_T(b);":!r.transA&&!r.transB&&(p="value += _A(a) * _B(b);");let m=u.length,b=e.length===3?`int c[${e[2].dims.length}];`:"",_=e.length===3?"bcastIndices_C(indices, c);":"",x=e.length===3?"value += beta * _C(c);":"",T=`
      float process(int indices[${m}]) {
          int a[${m}];
          int b[${m}];
          ${b}

          copyVec(indices, a);
          copyVec(indices, b);
          ${_}

          float value = 0.0;
          for (int k=0; k<${c}; ++k) {
              a[${m-1}] = k;
              b[${m-2}] = k;
              ${p}
          }

          value = value * alpha;
          ${x}
          return value;
      }`;return{...n,output:{dims:u,type:e[0].type,textureType:0},variables:[{name:"alpha",type:"float",data:r.alpha},{name:"beta",type:"float",data:r.beta}],shaderSource:T}},Wk=(n,e)=>{if(!n)throw new Error("Input is missing");if(e.isOptionalC&&(n.length<2||n.length>3))throw new Error("Invaid input shape.");if(!e.isOptionalC&&n.length!==3)throw new Error("Gemm requires 3 inputs");if(n.length===3&&n[2].dims.length!==1&&n[2].dims.length!==2)throw new Error("Invalid input shape of C");if(n[0].type!=="float32"&&n[0].type!=="float64"||n[1].type!=="float32"&&n[1].type!=="float64"||n.length===3&&n[2].type!=="float32"&&n[2].type!=="float64")throw new Error("Invalid input type.");if(n[0].type!==n[1].type||n.length===3&&n[0].type!==n[2].type)throw new Error("Input types are mismatched")}});var e0,t0,Hk,qk,Kk,Xk,Yk,r0=W(()=>{"use strict";_t();Le();e0=(n,e,r)=>(Yk(e),[n.run(Kk(n,e,r),e)]),t0=n=>{let e=n.attributes.getFloat("scale"),r=n.attributes.getFloats("bias");return Ce({scale:e,bias:r})},Hk={name:"ImageScaler",inputNames:["X"],inputTypes:[0]},qk=(n,e,r,t)=>{let o=r[0].dims.slice(),i=o.length,u=`
      ${Xk(t.bias.length)}
      float process(int indices[${i}]) {
        return _X(indices) * scale + getBias(bias, indices[1]);
      }`;return{...e,output:{dims:o,type:r[0].type,textureType:0},variables:[{name:"bias",type:"float",arrayLength:t.bias.length,data:t.bias},{name:"scale",type:"float",data:t.scale}],shaderSource:u}},Kk=(n,e,r)=>{let t={...Hk,cacheHint:r.cacheKey};return{...t,get:()=>qk(n,t,e,r)}},Xk=n=>{let e=[`float getBias(float bias[${n}], int channel) {`];for(let r=0;r<n;++r)r===0?e.push(`	if (channel == ${r}) { return bias[${r}]; }`):r===n-1?e.push(`	else { return bias[${r}]; }`):e.push(`	else if (channel == ${r}) { return bias[${r}]; }`);return e.push("	}"),e.join(`
`)},Yk=n=>{if(!n||n.length!==1)throw new Error("ImageScaler requires 1 input.");if(n[0].dims.length!==4)throw new Error("Invalid input shape.");if(n[0].type!=="float32"&&n[0].type!=="float64")throw new Error("Invalid input type.")}});var o0,i0,n0,Zk,Jk,Qk,e4,t4,r4,a0=W(()=>{"use strict";ot();Le();o0=(n,e,r)=>{r4(e);let t=n.run(Jk(e[0]),e);return[n.run(t4(n,e[0],r,t.dims),[e[0],t,e[1],e[2]])]},i0=n=>n.attributes.getFloat("epsilon",1e-5),n0={name:"InstanceNormalization_MeanAndVariance",inputNames:["X"],inputTypes:[0]},Zk=(n,e)=>{let r=e.dims.slice(),t=r[1],o=r[2]*r[3],i=[r[0],t],a=`
      vec4 process(int[2] indices) {
        vec4 v = vec4(0.0);
        int a[4];
        a[0] = indices[0];
        a[1] = indices[1];
        float temp = 0.0;
        for(int a2=0; a2<${r[2]}; a2++) {
          a[2] = a2;
          for(int a3=0; a3<${r[3]}; a3++) {
            a[3] = a3;
            float x = _X(a);
            temp += x;
          }
        }
        float mean = temp / float(${o});
        temp = 0.0;
        for(int a2=0; a2<${r[2]}; a2++) {
          a[2] = a2;
          for(int a3=0; a3<${r[3]}; a3++) {
            a[3] = a3;
            float x = _X(a);
            temp += (x - mean) * (x - mean);
          }
        }
        v.r = mean;
        v.g = temp / float(${o});

        return v;
      }`;return{...n,output:{dims:i,type:e.type,textureType:4},shaderSource:a}},Jk=n=>({...n0,get:()=>Zk(n0,n)}),Qk={name:"InstanceNormalization_ComputeOutput",inputNames:["X","MeanAndVariance","Scale","B"],inputTypes:[0,4,0,0]},e4=(n,e,r,t,o)=>{let i=be(n.session.backend.glContext.version),[a,u]=n.calculateTextureWidthAndHeight(o,4),[c,p]=[a/4,u],m=`
      vec4 get_MeanAndVariance(int[2] mv) {
        int offset = indicesToOffset_MeanAndVariance(mv);
        vec2 coords = offsetToCoords(offset, ${c}, ${p});
        return ${i.texture2D}(MeanAndVariance, coords);
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
      }`;return{...e,output:{dims:r.dims,type:r.type,textureType:0},variables:[{name:"epsilon",type:"float",data:t}],shaderSource:m}},t4=(n,e,r,t)=>{let o={...Qk,cacheHint:`${r}`};return{...o,get:()=>e4(n,o,e,r,t)}},r4=n=>{if(!n||n.length!==3)throw new Error("InstanceNormalization requires 3 inputs.");let e=n[0],r=n[1],t=n[2];if(e.dims.length<3||r.dims.length!==1||t.dims.length!==1)throw new Error("Invalid input shape.");if(r.dims[0]!==e.dims[1]||t.dims[0]!==e.dims[1])throw new Error("Input shapes are mismatched.");if(e.type!=="float32"&&e.type!=="float64"||r.type!=="float32"&&r.type!=="float64"||t.type!=="float32"&&t.type!=="float64")throw new Error("Invalid input type.");if(n[0].dims.length!==4)throw new Error("Only support 4-D input shape.")}});function n4(n,e){let r=n[0].dims[1],t=n[0].dims.length,o=-Math.floor((e.size-1)/2),i=Math.ceil((e.size-1)/2),a=`float(${e.alpha}) / float(${e.size})`,u=`float(${e.bias})`,c=`float(${e.beta})`,p=`
    float process(int indices[${t}]) {
        int c = indices[1];
        float x = _X(indices);
        float square_sum = 0.0;

        for (int i = ${o}; i <= ${i}; i++) {
          int idx = c + i;
          if (c >= 0 && c < ${r}) {
            indices[1] = idx;
            float j = _X(indices);
            square_sum += j * j;
          }
        }
        return x / pow(${u} + ${a} * square_sum, ${c});
    }`;return{...l0,cacheHint:e.cacheKey,output:{dims:n[0].dims,type:n[0].type,textureType:0},shaderSource:p}}function o4(n,e){return{...l0,cacheHint:e.cacheKey,get:()=>n4(n,e)}}var s0,u0,l0,i4,c0=W(()=>{"use strict";_t();Le();s0=(n,e,r)=>(i4(e),[n.run(o4(e,r),e)]),u0=n=>{let e=n.attributes.getFloat("alpha",1e-4),r=n.attributes.getFloat("beta",.75),t=n.attributes.getFloat("bias",1),o=n.attributes.getInt("size");return Ce({alpha:e,beta:r,bias:t,size:o})},l0={name:"LRN",inputNames:["X"],inputTypes:[0]};i4=n=>{if(!n||n.length!==1)throw new Error("LRN requires 1 input.");if(n[0].dims.length!==4)throw new Error('currently only support LRN for input with "NCHW" format');if(n[0].type!=="float32")throw new Error("input should be float type")}});var a4,ql,d0,f0,p0,s4,u4,l4,c4,d4,f4,p4,h4,h0=W(()=>{"use strict";_t();je();ot();Le();a4={name:"Pad",inputNames:["A"],inputTypes:[0]},ql=(n,e,r)=>(l4(e),[n.run({...a4,cacheHint:r.cacheKey,get:()=>u4(n,e[0],r)},e)]),d0=n=>{let e=n.attributes.getString("mode","constant"),r=n.attributes.getFloat("value",0),t=n.attributes.getInts("pads");return Ce({mode:e,value:r,pads:t})},f0=(n,e,r)=>{c4(e);let t=s4(n,e,r);return ql(n,[e[0]],t)},p0=n=>n.attributes.getString("mode","constant"),s4=(n,e,r)=>{if(!n.session.isInitializer(e[1].dataId)||e.length>=3&&!n.session.isInitializer(e[2].dataId))throw new Error("dynamic pad attributes are not allowed");let t=Array.from(e[1].integerData),o=e.length>=3?e[2].floatData[0]:0;return Ce({mode:r,pads:t,value:o})},u4=(n,e,r)=>{let t=fe.padShape(e.dims.slice(),r.pads),o=t.length,a=`
      ${d4(n,e,r)}
      float process(int[${o}] indices) {
          return padA(indices);
      }`;return{name:"Pad",inputNames:["A"],inputTypes:[0],output:{dims:t,type:e.type,textureType:0},shaderSource:a}},l4=n=>{if(!n||n.length!==1)throw new Error("Pad requires 1 input");if(n[0].type!=="float32"&&n[0].type!=="float64")throw new Error("Invalid input type.")},c4=n=>{if(!n||n.length!==2&&n.length!==3)throw new Error("Pad requires 2 or 3 inputs");if(n[1].type!=="int32")throw new Error("Invalid input type.");if(n.length>=3&&n[2].type==="string")throw new Error("Invalid input type.")},d4=(n,e,r)=>{let t=be(n.session.backend.glContext.version),[o,i]=n.calculateTextureWidthAndHeight(e.dims,0),a=fe.computeStrides(e.dims);switch(r.mode){case"constant":return f4(t,e.dims,a,o,i,r.pads,r.value);case"reflect":return p4(t,e.dims,a,o,i,r.pads);case"edge":return h4(t,e.dims,a,o,i,r.pads);default:throw new Error("Invalid mode")}},f4=(n,e,r,t,o,i,a)=>{let u=e.length,c="";for(let p=u-1;p>=0;--p)c+=`
        k = m[${p}] - ${i[p]};
        if (k < 0)  return constant;
        if (k >= ${e[p]}) return constant;
        offset += k * ${r[p]};
        `;return`
      float padA(int m[${u}]) {
        const float constant = float(${a});
        int offset = 0;
        int k = 0;
        ${c}
        vec2 coords = offsetToCoords(offset, ${t}, ${o});
        float value = getColorAsFloat(${n.texture2D}(A, coords));
        return value;
      }
      `},p4=(n,e,r,t,o,i)=>{let a=e.length,u="";for(let c=a-1;c>=0;--c)u+=`
        k = m[${c}] - ${i[c]};
        if (k < 0) { k = -k; }
        {
          const int _2n_1 = ${2*(e[c]-1)};
          k = int( mod( float(k), float(_2n_1) ) ) ;
          if(k >= ${e[c]}) { k = _2n_1 - k; }
        }
        offset += k * ${r[c]};
        `;return`
      float padA(int m[${a}]) {
        int offset = 0;
        int k = 0;
        ${u}
        vec2 coords = offsetToCoords(offset, ${t}, ${o});
        float value = getColorAsFloat(${n.texture2D}(A, coords));
        return value;
      }
      `},h4=(n,e,r,t,o,i)=>{let a=e.length,u="";for(let c=a-1;c>=0;--c)u+=`
        k = m[${c}] - ${i[c]};
        if (k < 0)  k = 0;
        if (k >= ${e[c]}) k = ${e[c]-1};
        offset += k * ${r[c]};
      `;return`
      float padA(int m[${a}]) {
        int offset = 0;
        int k = 0;
        ${u}
        vec2 coords = offsetToCoords(offset, ${t}, ${o});
        float value = getColorAsFloat(${n.texture2D}(A, coords));
        return value;
      }
      `}});var g0,y0,b0,_0,v0,w0,x0,T0,I0,m4,m0,S0,oa,$0,na,g4,A0=W(()=>{"use strict";_t();je();Le();g0=(n,e,r)=>{oa(e);let t={name:"AveragePool",inputNames:["X"],inputTypes:[0],cacheHint:r.cacheKey};return[n.run({...t,get:()=>b0(e,t,!1,r)},e)]},y0=n=>{let e=n.attributes.getString("auto_pad","NOTSET"),r=n.attributes.getInt("ceil_mode",0),t=n.attributes.getInt("count_include_pad",0)!==0,o=n.attributes.getInts("kernel_shape"),i=n.attributes.getInts("strides",[]),a=n.attributes.getInts("pads",[]);if(r!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");return Ce({autoPad:e,ceilMode:r,countIncludePad:t,kernelShape:o,strides:i,pads:a})},b0=(n,e,r,t)=>{let[o,i]=I0(n,t,r),a=fe.size(o.kernelShape),u="value += _X(x);",c="";o.countIncludePad?c+=`value /= float(${a});`:c+=`value /= float(${a} - pad);`;let m=`
        ${$0(n[0].dims,o,u,c,"0.0")}
      `;return{...e,output:{dims:i,type:n[0].type,textureType:0},shaderSource:m}},_0=(n,e,r)=>{oa(e);let t={name:"GlobalAveragePool",inputNames:["X"],inputTypes:[0],cacheHint:`${r.countIncludePad}`};return[n.run({...t,get:()=>b0(e,t,!0,r)},e)]},v0=n=>{let e=n.attributes.getInt("count_include_pad",0)!==0;return Ce({autoPad:"",ceilMode:0,countIncludePad:e,kernelShape:[],strides:[],pads:[]})},w0=(n,e,r)=>{oa(e);let t={name:"MaxPool",inputNames:["X"],inputTypes:[0],cacheHint:r.cacheKey};return[n.run({...t,get:()=>T0(e,t,!1,r)},e)]},x0=n=>{let e=n.attributes.getString("auto_pad","NOTSET"),r=n.attributes.getInt("ceil_mode",0),t=n.attributes.getInts("kernel_shape"),o=n.attributes.getInts("strides",[]),i=n.attributes.getInts("pads",[]),a=n.attributes.getInt("storage_order",0),u=n.attributes.getInts("dilations",[]);if(a!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");return Ce({autoPad:e,ceilMode:r,countIncludePad:!1,kernelShape:t,strides:o,pads:i,storageOrder:a,dilations:u})},T0=(n,e,r,t)=>{let[o,i]=I0(n,t,r),p=`
      ${$0(n[0].dims,o,`
      value = max(_X(x), value);
    `,"","-1e5")}
    `;return{...e,output:{dims:i,type:n[0].type,textureType:0},shaderSource:p}},I0=(n,e,r)=>{let t=n[0].dims.slice(),o=Object.hasOwnProperty.call(e,"dilations"),i=e.kernelShape.slice(),a=e.strides.slice(),u=o?e.dilations.slice():[],c=e.pads.slice();zn.adjustPoolAttributes(r,t,i,a,u,c);let p=zn.computePoolOutputShape(r,t,a,u,i,c,e.autoPad),m=Object.assign({},e);return o?Object.assign(m,{kernelShape:i,strides:a,pads:c,dilations:u,cacheKey:e.cacheKey}):Object.assign(m,{kernelShape:i,strides:a,pads:c,cacheKey:e.cacheKey}),[m,p]},m4={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[],cacheKey:""},m0={name:"GlobalMaxPool",inputNames:["X"],inputTypes:[0]},S0=(n,e)=>(oa(e),[n.run({...m0,get:()=>T0(e,m0,!0,m4)},e)]),oa=n=>{if(!n||n.length!==1)throw new Error("Pool ops requires 1 input.");if(n[0].type!=="float32"&&n[0].type!=="float64")throw new Error("Invalid input type.")},$0=(n,e,r,t,o)=>{let i=n.length;if(e.kernelShape.length<=2){let a=e.kernelShape[e.kernelShape.length-1],u=e.strides[e.strides.length-1],c=e.pads[e.pads.length/2-1],p=e.pads[e.pads.length-1],m=n[i-1],b="",_="",x="";if(c+p!==0?b=`
          for (int i = 0; i < ${a}; i++) {
            x[${i} - 1] = indices[${i} - 1] * ${u} - ${c} + i;
            if (x[${i} - 1] < 0 || x[${i} - 1] >= ${m}) {
              pad++;
              continue;
            }
            ${r}
          }`:b=`
          for (int i = 0; i < ${a}; i++) {
            x[${i} - 1] = indices[${i} - 1] * ${u} - ${c} + i;
            ${r}
          }`,e.kernelShape.length===2){let I=e.kernelShape[e.kernelShape.length-2],P=e.strides[e.strides.length-2],$=e.pads[e.pads.length/2-2],A=e.pads[e.pads.length-2],C=n[i-2];$+A!==0?_=`
            for (int j = 0; j < ${I}; j++) {
              x[${i} - 2] = indices[${i} - 2] * ${P} - ${$} + j;
              if (x[${i} - 2] < 0 || x[${i} - 2] >= ${C}) {
                pad+= ${a};
                continue;
              }
          `:_=`
            for (int j = 0; j < ${I}; j++) {
              x[${i} - 2] = indices[${i} - 2] * ${P} - ${$} + j;
            `,x=`
          }
        `}return`
        float process(int indices[${i}]) {
          int x[${i}];
          copyVec(indices, x);

          float value = ${o};
          int pad = 0;
          ${_}
          ${b}
          ${x}
          ${t}
          return value;
        }
      `}else{let a=fe.size(e.kernelShape),u=fe.computeStrides(e.kernelShape),c=u.length,p=e.pads.length,m=g4(c),b=na(n,"inputDims"),_=na(e.pads,"pads"),x=na(u,"kernelStrides"),T=na(e.strides,"strides"),I=e.pads.reduce((A,C)=>A+C),P="";return I?P=`
            if (x[j] >= inputDims[j] || x[j] < 0) {
              pad++;
              isPad = true;
              break;
            }
          }
          if (!isPad) {
            ${r}
          }`:P=`
          }
          ${r}
        `,`
        ${m}
        float process(int indices[${i}]) {
          int x[${i}];
          copyVec(indices, x);
          int offset[${c}];
          int pads[${p}];
          int inputDims[${i}];
          int kernelStrides[${c}];
          int strides[${c}];
          ${_}
          ${b}
          ${T}
          ${x}

          float value = ${o};
          int pad = 0;
          bool isPad = false;
          for (int i = 0; i < ${a}; i++) {
            offsetToIndices(i, kernelStrides, offset);
            isPad = false;
            for (int j = ${i} - ${c}; j < ${i}; j++) {
              x[j] = indices[j] * strides[j - ${i} + ${c}]
                + offset[j - ${i} + ${c}] - pads[j - 2];
              ${P}
          }
          ${t}

          return value;
        }
      `}},na=(n,e)=>{let r="";for(let t=0;t<n.length;t++)r+=`
      ${e}[${t}] = ${n[t]};
    `;return r},g4=n=>`
  void offsetToIndices(int offset, int[${n}] strides, out int[${n}] indices) {
    if (${n} == 0) {
      return;
    }
    for (int i = 0; i < ${n} - 1; ++i) {
      indices[i] = offset / strides[i];
      offset -= indices[i] * strides[i];
    }
    indices[${n} - 1] = offset;
  }`});var jn,xn,y4,b4,P0,O0,C0,E0,D0,k0,N0,L0=W(()=>{"use strict";_t();Uo();je();Le();jn=(n,e,r,t,o)=>{b4(e);let i={name:t,inputNames:["A"],inputTypes:[0]};return[n.run({...i,cacheHint:r.cacheKey,get:()=>y4(n,e,r,t,o,i)},e)]},xn=n=>{let e=n.attributes.getInts("axes",[]),r=n.attributes.getInt("keepdims",1)===1;return Ce({axes:e,keepDims:r})},y4=(n,e,r,t,o,i)=>{let a=[],u=e[0].dims.length||1,c=[],p=fe.normalizeAxes(r.axes,e[0].dims.length),m=o(e,p),b=m[1];for(let T=0;T<e[0].dims.length;T++)p.indexOf(T)>=0||p.length===0?(r.keepDims&&a.push(1),b=`
          for(int j${T} = 0; j${T} < ${e[0].dims[T]}; j${T}++) {
            inputIdx[${T}] = j${T};
            ${b}
          }`):(c.push(`inputIdx[${T}] = outputIdx[${a.length}];`),a.push(e[0].dims[T]));let x=`
      float process(int outputIdx[${a.length||1}]) {
        float value;                 // final result
        int inputIdx[${u}];      // addressing input data
        ${c.join(`
`)}
        ${m[0]}       // init ops for reduce max/min
        ${b}
        ${m[2]}       // final computation for reduce mean
        return value;
      }`;return{...i,output:{dims:a,type:e[0].type,textureType:0},shaderSource:x}},b4=n=>{if(!n||n.length!==1)throw new Error("Reduce op requires 1 input.");if(wn.indexOf(n[0].type)===-1)throw new Error("Invalid input type.")},P0=(n,e,r)=>jn(n,e,r,"ReduceSum",()=>["value = 0.0;","value += _A(inputIdx);",""]),O0=(n,e,r)=>jn(n,e,r,"ReduceMean",(o,i)=>{let a=1;for(let u=0;u<o[0].dims.length;u++)(i.indexOf(u)>=0||i.length===0)&&(a*=o[0].dims[u]);return["value = 0.0;","value += _A(inputIdx);",`value /= ${a}.;`]}),C0=(n,e,r)=>jn(n,e,r,"ReduceMax",(o,i)=>{let a=[];for(let u=0;u<o[0].dims.length;u++)(i.indexOf(u)>=0||i.length===0)&&a.push(`inputIdx[${u}] = 0;`);return[`${a.join(`
`)}
value = _A(inputIdx);`,"value = max(value, _A(inputIdx));",""]}),E0=(n,e,r)=>jn(n,e,r,"ReduceMin",(o,i)=>{let a=[];for(let u=0;u<o[0].dims.length;u++)(i.indexOf(u)>=0||i.length===0)&&a.push(`inputIdx[${u}] = 0;`);return[`${a.join(`
`)}
value = _A(inputIdx);`,"value = min(value, _A(inputIdx));",""]}),D0=(n,e,r)=>jn(n,e,r,"ReduceProd",()=>["value = 1.0;","value *= _A(inputIdx);",""]),k0=(n,e,r)=>jn(n,e,r,"ReduceLogSum",()=>["value = 0.0;","value += _A(inputIdx);","value = log(value);"]),N0=(n,e,r)=>jn(n,e,r,"ReduceLogSumSquare",()=>["float t; value = 0.0;","t = _A(inputIdx); value += t * t;",""])});var R0,z0=W(()=>{"use strict";je();R0=(n,e)=>{let r=fe.calculateReshapedDims(e[0].dims,e[1].integerData);return n.session.pack?[n.reshapePacked(e[0],r)]:[n.reshapeUnpacked(e[0],r)]}});var M0,Kl,B0,F0,jo,_4,Xl,ia,Yl=W(()=>{"use strict";_t();ot();Le();M0={name:"Upsample",inputNames:["X"],inputTypes:[0]},Kl=(n,e,r)=>(Xl(e,r),[n.run({...M0,cacheHint:r.cacheKey,get:()=>_4(n,e,r)},e)]),B0=n=>jo(n,7),F0=n=>jo(n,9),jo=(n,e)=>{let r=e>=10,t=n.attributes.getString("mode","nearest");if(t!=="nearest"&&t!=="linear"&&(e<11||t!=="cubic"))throw new Error(`unrecognized mode: ${t}`);let o=[];e<9&&(o=n.attributes.getFloats("scales"),ia(o,t,r));let i=n.attributes.getFloat("extrapolation_value",0),a=e>10?n.attributes.getString("coordinate_transformation_mode","half_pixel"):"asymmetric";if(["asymmetric","pytorch_half_pixel","tf_half_pixel_for_nn","align_corners","tf_crop_and_resize","half_pixel"].indexOf(a)===-1)throw new Error(`coordinate_transform_mode '${a}' is not supported`);let u=a==="tf_crop_and_resize",c=u,p=t==="nearest"&&e>=11?n.attributes.getString("nearest_mode","round_prefer_floor"):"";if(["round_prefer_floor","round_prefer_ceil","floor","ceil",""].indexOf(p)===-1)throw new Error(`nearest_mode '${p}' is not supported`);let m=n.attributes.getFloat("cubic_coeff_a",-.75),b=n.attributes.getInt("exclude_outside",0)!==0;if(b&&t!=="cubic")throw new Error("exclude_outside can be set to 1 only when mode is CUBIC.");let _=e<11?!0:t==="nearest"&&a==="asymmetric"&&p==="floor",x=0,T=0,I=0;return e>10?n.inputs.length>2?(x=1,T=2,I=3):(T=1,I=2):e===9&&(T=1),Ce({opset:e,isResize:r,mode:t,scales:o,extrapolationValue:i,coordinateTransformMode:a,useExtrapolation:c,needRoiInput:u,nearestMode:p,cubicCoefficientA:m,excludeOutside:b,useNearest2xOptimization:_,roiInputIdx:x,scalesInputIdx:T,sizesInputIdx:I})},_4=(n,e,r)=>{let t=be(n.session.backend.glContext.version),[o,i]=n.calculateTextureWidthAndHeight(e[0].dims,0),a=e[0].dims.map((I,P)=>Math.floor(I*r.scales[P])),[u,c]=n.calculateTextureWidthAndHeight(a,0),p=a.length,m=new Array(p),b=new Array(p),_=`
      int output_pitches[${p}];
      int input_pitches[${p}];
      `;for(let I=p-1;I>=0;I--)m[I]=I===p-1?1:m[I+1]*a[I+1],b[I]=I===p-1?1:b[I+1]*e[0].dims[I+1],_+=`
        output_pitches[${I}] = ${m[I]};
        input_pitches[${I}] = ${b[I]};
        `;let x=`
      float getInputFloat(int index) {
        vec2 coords = offsetToCoords(index, ${o}, ${i});
        float value = getColorAsFloat(${t.texture2D}(X, coords));
        return value;
      }
      `,T=r.mode==="nearest"?`
    ${x}
    float process(int indices[${p}]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${u}, ${c});

      ${_}

      int d, m;
      for (int dim = 0; dim < ${p}; ++dim) {
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
    }`:p===4?`
    ${x}
    float process(int indices[4]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${u}, ${c});

      ${_}

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
    ${x}
    float process(int indices[2]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${u}, ${c});

      ${_}

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
    }`;return{...M0,output:{dims:a,type:e[0].type,textureType:0},shaderSource:T,variables:[{name:"scales",type:"int",arrayLength:r.scales.length,data:r.scales.map(I=>Math.ceil(I))}]}},Xl=(n,e)=>{if(!n||e.opset<9&&n.length!==1||e.opset>=9&&e.opset<11&&n.length!==2||e.opset>=11&&n.length<2)throw new Error("invalid inputs.");if(e.scales.length>0&&n[0].dims.length!==e.scales.length)throw new Error("Invalid input shape.");if(n[0].type==="string")throw new Error("Invalid input tensor types.")},ia=(n,e,r)=>{if(r){for(let t of n)if(t<=0)throw new Error("Scale value should be greater than 0.")}else for(let t of n)if(t<1)throw new Error("Scale value should be greater than or equal to 1.");if((e==="linear"||e==="cubic")&&n.length!==2&&(n.length!==4||n[0]!==1||n[1]!==1))throw new Error(`'Linear' mode and 'Cubic' mode only support 2-D inputs ('Bilinear', 'Bicubic')         or 4-D inputs with the corresponding outermost 2 scale values being 1         in the ${r?"Resize":"Upsample"} opeartor.`)}});var Zl,Jl,V0,G0,v4,w4,x4,T4,U0=W(()=>{"use strict";ot();Le();jr();Vn();Yl();Zl={name:"Resize",inputNames:["A"],inputTypes:[2]},Jl=(n,e,r)=>(Xl(e,r),[n.run({...Zl,cacheHint:r.cacheKey,get:()=>v4(n,e,r)},e)]),V0=n=>jo(n,10),G0=n=>jo(n,11),v4=(n,e,r)=>{let t=be(n.session.backend.glContext.version),[o,i]=w4(e,r);if(o.every(C=>C===1)&&r.coordinateTransformMode!=="tf_crop_and_resize")return{...Zl,output:{dims:i,type:e[0].type,textureType:2},hasMain:!0,shaderSource:`void main() {
                    vec4 v = ${t.texture2D}(X, TexCoords);
                    ${t.output} = v;
                }`};let u=i.length;if(u<2)throw new Error(`output dimension should be at least 2, but got ${u}`);let c=i[u-2],p=i[u-1],m=e[0].dims;if(u!==m.length)throw new Error(`output dimension should match input ${m.length}, but got ${u}`);let b=m[u-2],_=m[u-1],x=o[u-2],T=o[u-1],I="";if(r.mode!=="linear")throw new Error(`resize (packed) does not support mode: '${r.mode}'`);switch(r.coordinateTransformMode){case"asymmetric":I=`
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
                            ${p}.0 > 1.0 ? (fcoords.x + 0.5) / scaleWHWH.x - 0.5 : 0.0,
                            ${c}.0 > 1.0 ? (fcoords.y + 0.5) / scaleWHWH.y - 0.5 : 0.0,
                            ${p}.0 > 1.0 ? (fcoords.z + 0.5) / scaleWHWH.z - 0.5 : 0.0,
                            ${c}.0 > 1.0 ? (fcoords.w + 0.5) / scaleWHWH.w - 0.5 : 0.0
                          );
                    }
                `;break;case"align_corners":I=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        vec4 resized = vec4(${p}.0 - 1.0, ${c}.0 - 1.0, ${p}.0 - 1.0,
                            ${c}.0 - 1.0);
                        vec4 original = vec4(${_}.0 - 1.0, ${b}.0 - 1.0, ${_}.0 - 1.0,
                            ${b}.0 - 1.0);
                        vec4 new_scale = original / resized;
                        return vec4(coords) * new_scale;
                    }
                `;break;default:throw new Error(`resize (packed) does not support coordinateTransformMode:                                 '${r.coordinateTransformMode}'`)}let P=$t(u),$=Wr(),A=`
            const vec2 inputWH = vec2(${b}.0, ${_}.0);
            const vec4 scaleWHWH = vec4(float(${x}), float(${T}), float(${x}), float(${T}));
            ${$}
            ${I}
            float getAValue(int x10, int r, int c, int d) {
                return getChannel(getA(x10, r, c, d), vec2(c, d));
            }
            void main() {
                ${P} rc = getOutputCoords();

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

                bool hasNextRow = rc.w < ${c-1};
                bool hasNextCol = rc.z < ${p-1};

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

                ${t.output} = vec4(newValue);
            }
        `;return{...Zl,output:{dims:i,type:e[0].type,textureType:2},hasMain:!0,shaderSource:A}},w4=(n,e)=>{let t=n[0].dims,o=e.scales,i;if(o.length===0){let u=n[e.scalesInputIdx];if(u&&u.size!==0){if(n[e.sizesInputIdx])throw new Error("Only one of scales or sizes must be provided as input.");o=x4(u,e.mode,e.isResize)}else{let c=n[e.sizesInputIdx];if(!c||c.size===0)throw new Error("Either scales or sizes MUST be provided as input.");i=Array.from(c.integerData),o=T4(i,t,e.mode,e.isResize)}}else if(n[e.sizesInputIdx])throw new Error("Only one of scales or sizes must be provided as input.");let a=i||t.map((u,c)=>Math.floor(u*o[c]));return[o,a]},x4=(n,e,r)=>{let t=Array.from(n.floatData);return ia(t,e,r),t},T4=(n,e,r,t)=>{let o=e.length,i=new Array(o);for(let a=0,u=o;a<u;a++)if(e[a]===0){if(n[a]!==0)throw new Error("Input dim is zero but required output dim is non-zero.");i[a]=1}else i[a]=n[a]/e[a];return ia(i,r,t),i}});var j0,I4,W0=W(()=>{"use strict";Fn();j0=(n,e)=>(I4(e),[new pt([e[0].dims.length],"int32",void 0,void 0,new Int32Array(e[0].dims))]),I4=n=>{if(!n||n.length!==1)throw new Error("Shape requires 1 input.")}});var Ql,H0,q0,K0,S4,X0,$4,A4,Y0=W(()=>{"use strict";_t();Uo();je();Le();Ql={name:"Slice",inputNames:["A"],inputTypes:[0]},H0=(n,e,r)=>(S4(e),[n.run({...Ql,cacheHint:r.cacheKey,get:()=>K0(n,e[0],r)},e)]),q0=n=>{let e=n.attributes.getInts("starts"),r=n.attributes.getInts("ends"),t=n.attributes.getInts("axes",[]);return Ce({starts:e,ends:r,axes:t})},K0=(n,e,r)=>{let t=r.axes.length===0?e.dims.slice(0).map((b,_)=>_):r.axes,o=fe.normalizeAxes(t,e.dims.length),i=r.starts.map((b,_)=>b>e.dims[o[_]]-1?e.dims[o[_]]:fe.normalizeAxis(b,e.dims[o[_]])),a=r.ends.map((b,_)=>b>e.dims[o[_]]-1?e.dims[o[_]]:fe.normalizeAxis(b,e.dims[o[_]])),u=e.dims.slice(),c=[];for(let b=0;b<o.length;b++)u[o[b]]=a[b]-i[b],i[b]>0&&c.push(`outputIdx[${o[b]}] += ${i[b]};`);let m=`
      float process(int outputIdx[${u.length}]) {
        ${c.join(`
      `)}
        return _A(outputIdx);
      }`;return{...Ql,output:{dims:u,type:e.type,textureType:0},shaderSource:m}},S4=n=>{if(!n||n.length!==1)throw new Error("Slice requires 1 input.");if(wn.indexOf(n[0].type)===-1)throw new Error("Invalid input type.")},X0=(n,e)=>{A4(e);let r=$4(n,e);return[n.run({...Ql,cacheHint:r.cacheKey,get:()=>K0(n,e[0],r)},[e[0]])]},$4=(n,e)=>{if(!n.session.isInitializer(e[1].dataId)||!n.session.isInitializer(e[2].dataId)||e.length>=4&&!n.session.isInitializer(e[3].dataId)||e.length>=5&&!n.session.isInitializer(e[4].dataId))throw new Error("dynamic slice attributes are not allowed");if(e.length>=5&&e[4].integerData.some(a=>a!==1))throw new Error("currently non-1 steps is not supported for Slice");let r=Array.from(e[1].integerData),t=Array.from(e[2].integerData),o=e.length>=4?Array.from(e[3].integerData):[],i=`${o};${r};${t}`;return{starts:r,ends:t,axes:o,cacheKey:i}},A4=n=>{if(!n||n.length<3||n.length>5)throw new Error("Invalid input number.");if(n[1].type!=="int32"||n[1].dims.length!==1)throw new Error("Invalid input type.");if(n[2].type!=="int32"||n[2].dims.length!==1)throw new Error("Invalid input type.");if(n.length>=4&&(n[3].type!=="int32"||n[3].dims.length!==1))throw new Error("Invalid input type.");if(n.length>=5&&(n[4].type!=="int32"||n[4].dims.length!==1))throw new Error("Invalid input type.")}});var Z0,J0,Q0,ev,tv,rv,nv,ov,P4,O4,C4,iv,av=W(()=>{"use strict";_t();je();ot();Le();ra();Z0={name:"SoftmaxComputeMax",inputNames:["A"],inputTypes:[0]},J0={name:"SoftmaxComputeScale",inputNames:["A","Max"],inputTypes:[0,0]},Q0={name:"SoftMax",inputNames:["A","Max","Norm"],inputTypes:[0,0,0]},ev=(n,e,r)=>{iv(e);let t=e[0].dims.slice(),o=fe.normalizeAxis(r.axis,t.length),i=fe.sizeToDimension(t,o),a=fe.sizeFromDimension(t,o);return ov(n,e,r,i,a)},tv=n=>Ce({axis:n.attributes.getInt("axis",1)}),rv=n=>Ce({axis:n.attributes.getInt("axis",-1)}),nv=(n,e,r)=>{iv(e);let t=e[0].dims.slice(),o=fe.normalizeAxis(r.axis,t.length),i=t.length,a=o!==i-1,u=[],c=[],p=[],m;a&&(c=Array.from({length:i}).map((T,I)=>I),c[o]=i-1,c[i-1]=o,c.map(T=>u.push(t[T])),m=Ce({perm:c}),p=Un(n,e,m));let b=a?fe.sizeToDimension(u,i-1):fe.sizeToDimension(t,i-1),_=a?fe.sizeFromDimension(u,i-1):fe.sizeFromDimension(t,i-1),x=ov(n,a?p:e,r,b,_);return a?Un(n,x,m):x},ov=(n,e,r,t,o)=>{let i=P4(n,e[0],t,o,[t]),a=n.run({...Z0,cacheHint:r.cacheKey,get:()=>i},e),u=O4(n,e[0],t,o,i.output.dims,[t]),c=n.run({...J0,cacheHint:r.cacheKey,get:()=>u},[e[0],a]),p=C4(n,e[0],t,o,i.output.dims,u.output.dims);return[n.run({...Q0,cacheHint:r.cacheKey,get:()=>p},[e[0],a,c])]},P4=(n,e,r,t,o)=>{let[i,a]=n.calculateTextureWidthAndHeight(e.dims,0),u=o.length;if(r<1||t<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(o.length!==1)throw new Error("Dimensionality of the output should be 1");if(o[0]!==r)throw new Error("Shape of the output should be equal to logical row count");let c=be(n.session.backend.glContext.version),p=`
      float process(int[${u}] indices) {
        int logical_row_start_offset = indices[0] * ${t};

        float max = getColorAsFloat(${c.texture2D}(A, offsetToCoords(logical_row_start_offset, ${i},
        ${a} )));
        for(int i=1; i<${t}; ++i)
        {
          float current = getColorAsFloat(${c.texture2D}(A, offsetToCoords(logical_row_start_offset + i,
            ${i}, ${a})));
          if(current > max)
          max = current;
        }

        return max;
      }`;return{...Z0,output:{dims:o,type:e.type,textureType:0},shaderSource:p}},O4=(n,e,r,t,o,i)=>{let[a,u]=n.calculateTextureWidthAndHeight(e.dims,0),c=i.length;if(r<1||t<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(i.length!==1)throw new Error("Dimensionality of the output should be 1");if(i[0]!==r)throw new Error("Shape of the output should be equal to logical row count");if(o.length!==1)throw new Error("Dimensionality of the intermediate results should be 1");if(o[0]!==r)throw new Error("Shape of the intermediate results should be equal to logical row count");let p=be(n.session.backend.glContext.version),m=`
      float process(int[${c}] indices) {
        int logical_row_start_offset = indices[0] * ${t};

        float norm_factor = 0.0;
        float max = _Max(indices);
        for(int i=0; i<${t}; ++i)
        {
          norm_factor += exp(getColorAsFloat(${p.texture2D}(A, offsetToCoords(logical_row_start_offset + i,
            ${a}, ${u}))) - max);
        }

        return norm_factor;
      }`;return{...J0,output:{dims:i,type:e.type,textureType:0},shaderSource:m}},C4=(n,e,r,t,o,i)=>{let[a,u]=n.calculateTextureWidthAndHeight(e.dims,0),c=e.dims.length;if(r<1||t<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(o.length!==1||i.length!==1)throw new Error("Dimensionality of the intermediate results should be 1");if(o[0]!==r||i[0]!==r)throw new Error("Shape of the intermediate results should be equal to logical row count");let p=`
      float process(int[${c}] indices) {

      // get offset of current logical tensor index from the 2-D texture coordinates (TexCoords)
      int offset = coordsToOffset(TexCoords, ${a}, ${u});

      //determine the logical row for this index
      int logical_row_index[1];
      logical_row_index[0] = offset / ${t};

      float norm_factor = _Norm(logical_row_index);

      // avoid possible division by 0
      // if norm_facor is 0, all elements are zero
      // if so, return 0
      if(norm_factor == 0.0)
        return 0.0;

      return exp(_A(indices) - _Max(logical_row_index)) / norm_factor;
    }`;return{...Q0,output:{dims:e.dims,type:e.type,textureType:0},shaderSource:p}},iv=n=>{if(!n||n.length!==1)throw new Error("Softmax requires 1 input.");if(n[0].type!=="float32"&&n[0].type!=="float64")throw new Error("Invalid input type")}});var sv,uv,lv,E4,D4,k4,cv=W(()=>{"use strict";_t();je();Le();sv={name:"Split",inputNames:["A"],inputTypes:[0]},uv=(n,e,r)=>{k4(e);let t=fe.normalizeAxis(r.axis,e[0].dims.length),o=E4(n,e,t,r),i=[];for(let a=0;a<o;++a)i.push(n.run({...sv,cacheHint:`${r.cacheKey};${a}`,get:()=>D4(n,e[0],r,t,a)},e));return i},lv=n=>{let e=n.attributes.getInt("axis",0),r=n.attributes.getInts("split",[]),t=n.outputs.length;return Ce({axis:e,split:r,numOutputs:t})},E4=(n,e,r,t)=>{let[,o]=zo.splitShape(e[0].dims,r,t.split,t.numOutputs);return o.length},D4=(n,e,r,t,o)=>{let[i,a]=zo.splitShape(e.dims,t,r.split,r.numOutputs),u=a[o],c=i[o],m=`
      float process(int indices[${c.length}]) {
        indices[${t}] += ${u};
        return _A(indices);
      }
    `;return{...sv,cacheHint:`${r.cacheKey}:${o}`,output:{dims:c,type:e.type,textureType:0},shaderSource:m}},k4=n=>{if(!n||n.length!==1)throw new Error("Split requires one input.");if(n[0].type!=="int8"&&n[0].type!=="uint8"&&n[0].type!=="int16"&&n[0].type!=="uint16"&&n[0].type!=="int32"&&n[0].type!=="uint32"&&n[0].type!=="float32"&&n[0].type!=="float64"&&n[0].type!=="bool")throw new Error("Invalid input type.")}});var ec,dv,fv,N4,L4,pv=W(()=>{"use strict";je();ec=(n,e,r)=>{N4(e);let t=fe.squeezeShape(e[0].dims,r);return[n.reshapeUnpacked(e[0],t)]},dv=(n,e)=>(L4(e),ec(n,[e[0]],Array.from(e[1].integerData))),fv=n=>n.attributes.getInts("axes"),N4=n=>{if(!n||n.length!==1)throw new Error("Squeeze requires 1 input.");if(n[0].type==="string")throw new Error("invalid input tensor types.")},L4=n=>{if(!n||n.length!==2)throw new Error("Squeeze requires 2 inputs.");if(n[1].type!=="int32")throw new Error("Invalid input type.")}});var hv,R4,z4,mv=W(()=>{"use strict";ot();Le();hv=(n,e)=>{z4(e);let r={name:"Sum",inputNames:e.map((o,i)=>`X${i}`),inputTypes:new Array(e.length).fill(0)};return[n.run({...r,get:()=>R4(n,e,r)},e)]},R4=(n,e,r)=>{let t=be(n.session.backend.glContext.version),o=e[0].dims.slice(),a=`
      void main() {
        vec4 result = ${e.map((u,c)=>`${t.texture2D}(X${c},TexCoords)`).join(" + ")};
        ${t.output} = result;
      }
    `;return{...r,output:{dims:o,type:e[0].type,textureType:0},hasMain:!0,shaderSource:a}},z4=n=>{if(!n||n.length===0)throw new Error("Sum requires inputs.");let e=n[0].dims.length;for(let r=1;r<n.length;r++){if(e!==n[r].dims.length)throw new Error("Input shapes are mismatched.");for(let t=0;t<e;t++)if(n[0].dims[t]!==n[r].dims[t])throw new Error("Input shapes are not matched.")}if(n[0].type!=="float32"&&n[0].type!=="float64")throw new Error("Invalid input type.");for(let r=1;r<n.length;r++)if(n[0].type!==n[r].type)throw new Error("Input types are not matched.")}});var gv,M4,B4,yv=W(()=>{"use strict";Uo();Le();gv=(n,e)=>{B4(e);let r={name:"Tile",inputNames:["A"],inputTypes:[0]};return[n.run({...r,get:()=>M4(n,e,r)},e)]},M4=(n,e,r)=>{let t=e[0].dims.slice(),o=new Array(t.length),i=[];for(let c=0;c<t.length;c++)o[c]=t[c]*e[1].numberData[c],i.push(`inputIdx[${c}] = int(mod(float(outputIdx[${c}]), ${t[c]}.));`);let a=o.length,u=`
      float process(int outputIdx[${a}]) {
        int inputIdx[${a}];
        ${i.join(`
`)}
        return _A(inputIdx);
      }
    `;return{...r,output:{dims:o,type:e[0].type,textureType:0},shaderSource:u}},B4=n=>{if(!n||n.length!==2)throw new Error("Tile requires 2 input.");if(n[1].dims.length!==1)throw new Error("The second input shape must 1 dimension.");if(n[1].dims[0]!==n[0].dims.length)throw new Error("Invalid input shape.");if(wn.indexOf(n[0].type)===-1)throw new Error("Invalid input type.");if(n[1].type!=="int32"&&n[1].type!=="int16")throw new Error("Invalid repeat type.")}});var tc,bv,_v,F4,V4,vv=W(()=>{"use strict";je();tc=(n,e,r)=>{F4(e);let t=fe.unsqueezeShape(e[0].dims,r);return[n.reshapeUnpacked(e[0],t)]},bv=(n,e)=>(V4(e),tc(n,[e[0]],Array.from(e[1].integerData))),_v=n=>n.attributes.getInts("axes"),F4=n=>{if(!n||n.length!==1)throw new Error("Unsqueeze requires 1 input.");if(n[0].type==="string")throw new Error("invalid input tensor types.")},V4=n=>{if(!n||n.length!==2)throw new Error("Unsqueeze requires 2 inputs.");if(n[1].type!=="int32")throw new Error("Invalid input type.")}});var wv,xv=W(()=>{"use strict";Db();Wb();Kb();e_();Qi();z_();U_();H_();X_();Q_();r0();a0();c0();ea();h0();A0();L0();z0();U0();W0();Y0();av();cv();pv();mv();yv();ra();Ml();vv();Yl();wv=[["Abs","","6+",t_],["Acos","","7+",r_],["Add","","7+",kb],["And","","7+",Nb],["Asin","","7+",n_],["Atan","","7+",o_],["AveragePool","","7+",g0,y0],["BatchNormalization","","7+",Cb,Eb],["Cast","","6+",Hb,qb],["Ceil","","6+",s_],["Clip","","6-10",Rl,i_],["Clip","","11+",a_],["Concat","","4+",Zb,Qb],["Conv","","1+",jl,Wl],["ConvTranspose","","1+",L_,R_],["Cos","","7+",u_],["Div","","7+",Lb],["Dropout","","7+",zl],["DepthToSpace","","1+",V_,G_],["Equal","","7+",Rb],["Elu","","6+",l_,c_],["Exp","","6+",d_],["Flatten","","1+",j_,W_],["Floor","","6+",f_],["FusedConv","com.microsoft","1+",jl,Wl],["Gather","","1+",q_,K_],["Gemm","","7-10",Hl,Z_],["Gemm","","11+",Hl,J_],["GlobalAveragePool","","1+",_0,v0],["GlobalMaxPool","","1+",S0],["Greater","","7+",zb],["Identity","","1+",zl],["ImageScaler","","1+",e0,t0],["InstanceNormalization","","6+",o0,i0],["LeakyRelu","","6+",p_,h_],["Less","","7+",Mb],["LRN","","1+",s0,u0],["Log","","6+",m_],["MatMul","","1+",P_,O_],["MaxPool","","1+",w0,x0],["Mul","","7+",Bb],["Neg","","6+",g_],["Not","","1+",y_],["Or","","7+",Fb],["Pad","","2-10",ql,d0],["Pad","","11+",f0,p0],["Pow","","7+",Vb],["PRelu","","7+",Gb],["ReduceLogSum","","1+",k0,xn],["ReduceMax","","1+",C0,xn],["ReduceMean","","1+",O0,xn],["ReduceMin","","1+",E0,xn],["ReduceProd","","1+",D0,xn],["ReduceSum","","1-12",P0,xn],["ReduceSumSquare","","1+",N0,xn],["Relu","","6+",b_],["Reshape","","5+",R0],["Resize","","10",Jl,V0],["Resize","","11+",Jl,G0],["Shape","","1+",j0],["Sigmoid","","6+",__],["Sin","","7+",v_],["Slice","","10+",X0],["Slice","","1-9",H0,q0],["Softmax","","1-12",ev,tv],["Softmax","","13+",nv,rv],["Split","","2-12",uv,lv],["Sqrt","","6+",w_],["Squeeze","","1-12",ec,fv],["Squeeze","","13+",dv],["Sub","","7+",Ub],["Sum","","6+",hv],["Tan","","7+",x_],["Tanh","","6+",T_],["Tile","","6+",gv],["Transpose","","1+",Un,B_],["Upsample","","7-8",Kl,B0],["Upsample","","9",Kl,F0],["Unsqueeze","","1-12",tc,_v],["Unsqueeze","","13+",bv],["Xor","","7+",jb]]});function Iv(n){let e={},r;for(;(r=Tv.exec(n))!==null;){let t=r[3].split(",").map(o=>{let i=o.trim().split(" ");return i&&i.length===2?{type:i[0],name:i[1]}:null}).filter(o=>o!==null);e[r[2]]={params:t,body:r[4]}}for(let t in e){let o=G4.replace("__FUNC__",t),i=new RegExp(o,"gm");for(;(r=i.exec(n))!==null;){let a=r[1],u=r[2],c=r[3].split(","),p=a?`${a} ${u};`:"",m=e[t].body,b="";e[t].params.forEach((x,T)=>{x&&(b+=`${x.type} ${x.name} = ${c[T]};
`)}),m=`${b}
 ${m}`,m=m.replace("return",`${u} = `);let _=`
      ${p}
      {
        ${m}
      }
      `;n=n.replace(r[0],_)}}return n=n.replace(Tv,""),n}var Tv,G4,Sv=W(()=>{"use strict";Tv=/@inline[\s\n\r]+(\w+)[\s\n\r]+([0-9a-zA-Z_]+)\s*\(([^)]*)\)\s*{(([^}]|[\n\r])*)}/gm,G4="(\\w+)?\\s+([_0-9a-zA-Z]+)\\s+=\\s+__FUNC__\\((.*)\\)\\s*;"});function ho(n,e){let r=[],t=[],o=e!=null&&Array.isArray(e)&&e.length===0,i=e==null||o?null:U4(e,n).sort(),a=0;for(let u=0;u<n.length;++u){if(i!=null){if(i[a]===u&&n[u]!==1)throw new Error(`Can't squeeze axis ${u} since its dim '${n[u]}' is not 1`);(i[a]==null||i[a]>u)&&n[u]===1&&(r.push(n[u]),t.push(u)),i[a]<=u&&a++}n[u]!==1&&(r.push(n[u]),t.push(u))}return{newShape:r,keptDims:t}}function U4(n,e){let r=e.length;return n=n==null?e.map((t,o)=>o):[].concat(n),so(n.every(t=>t>=-r&&t<r),()=>`All values in axis param must be in range [-${r}, ${r}) but got axis ${n}`),so(n.every(j4),()=>`All values in axis param must be integers but got axis ${n}`),n.map(t=>t<0?r+t:t)}function j4(n){return n%1===0}function W4(n){if(n.length===0)return 1;let e=n[0];for(let r=1;r<n.length;r++)e*=n[r];return e}function $v(n){let e=Math.ceil(Math.sqrt(n));return[e,Math.ceil(n/e)]}var aa,rc=W(()=>{"use strict";Vt();je();aa=class{constructor(e){this.maxTextureSize=e}computeTextureWH(e,r){let t=this.computeTexture(e,r);return r&&r.isPacked&&(t[0]/=2,t[1]/=2),r&&r.reverseWH?[t[1],t[0]]:t}computeTexture(e,r){let t=r&&r.isPacked;if(e.length===0)return t?[2,2]:[1,1];let o=this.maxTextureSize;if(r&&r.breakAxis!==void 0){let u=r.breakAxis>=e.length?1:e.slice(r.breakAxis).reduce((p,m)=>p*m),c=r.breakAxis<=0?1:e.slice(0,r.breakAxis).reduce((p,m)=>p*m);if(u>o||c>o)qe.verbose("TextureLayout",`Given width/height preferences were unattainable: shape:${e}, breakAxis:${r.breakAxis}`);else return[u,c]}let i=e.slice(0);t&&(o=o*2,i=i.map((u,c)=>c>=i.length-2?i[c]%2===0?i[c]:i[c]+1:i[c]),i.length===1&&(i=[2,i[0]])),i.length!==2&&(i=ho(i).newShape);let a=W4(i);return i.length<=1&&a<=o?[1,a]:i.length===2&&i[0]<=o&&i[1]<=o?i:i.length===3&&i[0]*i[1]<=o&&i[2]<=o?[i[0]*i[1],i[2]]:i.length===3&&i[0]<=o&&i[1]*i[2]<=o?[i[0],i[1]*i[2]]:i.length===4&&i[0]*i[1]*i[2]<=o&&i[3]<=o?[i[0]*i[1]*i[2],i[3]]:i.length===4&&i[0]<=o&&i[1]*i[2]*i[3]<=o?[i[0],i[1]*i[2]*i[3]]:t?$v(a/4).map(u=>u*2):$v(a)}}});var sa,Av=W(()=>{"use strict";je();an();ot();rc();jr();sa=class extends qt{constructor(e){super(e)}getFunctions(){return{...this.offsetToCoords(),...this.coordsToOffset(),...this.toVec(),...this.valueFrom(),...this.getCommonUtilFuncs(),...this.getInputsSamplingSnippets(),...this.getOutputSamplingSnippet()}}getCustomTypes(){return{}}offsetToCoords(){let e="offsetToCoords";return{offsetToCoords:new ae(`
      vec2 ${e}(int offset, int width, int height) {
        int t = offset / width;
        int s = offset - t*width;
        vec2 coords = (vec2(s,t) + vec2(0.5,0.5)) / vec2(width, height);
        return coords;
      }
      `)}}coordsToOffset(){let e="coordsToOffset";return{coordsToOffset:new ae(`
      int ${e}(vec2 coords, int width, int height) {
        float s = coords.s * float(width);
        float t = coords.t * float(height);
        int offset = int(t) * width + int(s);
        return offset;
      }
      `)}}getOutputSamplingSnippet(){let e=this.context.outputTextureLayout;return e.isPacked?this.getPackedOutputSamplingSnippet(e):this.getUnpackedOutputSamplingSnippet(e)}getPackedOutputSamplingSnippet(e){let r=e.unpackedShape,t=[e.width,e.height],o={},i="getOutputCoords";switch(r.length){case 0:o[i]=this.getOutputScalarCoords();break;case 1:o[i]=this.getOutputPacked1DCoords(r,t);break;case 2:o[i]=this.getOutputPacked2DCoords(r,t);break;case 3:o[i]=this.getOutputPacked3DCoords(r,t);break;default:o[i]=this.getOutputPackedNDCoords(r,t)}let u=`
      void setOutput(vec4 val) {
        ${be(this.context.glContext.version).output} = val;
      }
    `,c="floatTextureSetRGBA";return o[c]=new ae(u),o}getUnpackedOutputSamplingSnippet(e){let r=e.unpackedShape,t=[e.width,e.height],o={},i="getOutputCoords";switch(r.length){case 0:o[i]=this.getOutputScalarCoords();break;case 1:o[i]=this.getOutputUnpacked1DCoords(r,t);break;case 2:o[i]=this.getOutputUnpacked2DCoords(r,t);break;case 3:o[i]=this.getOutputUnpacked3DCoords(r,t);break;case 4:o[i]=this.getOutputUnpacked4DCoords(r,t);break;case 5:o[i]=this.getOutputUnpacked5DCoords(r,t);break;case 6:o[i]=this.getOutputUnpacked6DCoords(r,t);break;default:throw new Error(`Unsupported output dimensionality: ${r.length}`)}let u=`
        void setOutput(float val) {
          ${be(this.context.glContext.version).output} = vec4(val, 0, 0, 0);
        }
    `,c="floatTextureSetR";return o[c]=new ae(u),o}getOutputScalarCoords(){return new ae(`
      int getOutputCoords() {
        return 0;
      }
    `)}getOutputPacked1DCoords(e,r){let t=r,o="";return t[0]===1?(o=`
          int getOutputCoords() {
            return 2 * int(TexCoords.y * ${t[1]}.0);
          }
        `,new ae(o)):t[1]===1?(o=`
          int getOutputCoords() {
            return 2 * int(TexCoords.x * ${t[0]}.0);
          }
        `,new ae(o)):(o=`
        int getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                 vec2(${t[0]}, ${t[1]}));
          return 2 * (resTexRC.y * ${t[0]} + resTexRC.x);
        }
      `,new ae(o))}getOutputPacked2DCoords(e,r){let t="";if(Rn.arraysEqual(e,r))return t=`
        ivec2 getOutputCoords() {
          return 2 * ivec2(TexCoords.xy * vec2(${r[0]}, ${r[1]}));
        }
      `,new ae(t);let o=r,i=Math.ceil(e[1]/2);return t=`
        ivec2 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${o[0]}, ${o[1]}));

          int index = resTexRC.y * ${o[0]} + resTexRC.x;

          // reverse r and c order for packed texture
          int r = imod(index, ${i}) * 2;
          int c = 2 * (index / ${i});

          return ivec2(r, c);
        }
      `,new ae(t)}getOutputPacked3DCoords(e,r){let t=[r[0],r[1]],o=Math.ceil(e[2]/2),i=o*Math.ceil(e[1]/2),a=`
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;

          int b = index / ${i};
          index -= b * ${i};

          // reverse r and c order for packed texture
          int r = imod(index, ${o}) * 2;
          int c = 2 * (index / ${o});

          return ivec3(b, r, c);
        }
      `;return new ae(a)}getOutputPackedNDCoords(e,r){let t=[r[0],r[1]],o=Math.ceil(e[e.length-1]/2),i=o*Math.ceil(e[e.length-2]/2),a=i,u="",c="b, r, c";for(let m=2;m<e.length-1;m++)a*=e[e.length-m-1],u=`
      int b${m} = index / ${a};
      index -= b${m} * ${a};
    `+u,c=`b${m}, `+c;let p=`
      ivec${e.length} getOutputCoords() {
        ivec2 resTexRC = ivec2(TexCoords.xy *
                              vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.y * ${t[0]} + resTexRC.x;

        ${u}

        int b = index / ${i};
        index -= b * ${i};

        // reverse r and c order for packed texture
        int r = imod(index, ${o}) * 2;
        int c = 2 * (index / ${o});

        return ivec${e.length}(${c});
      }
    `;return new ae(p)}getOutputUnpacked1DCoords(e,r){let t=`
        int getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${r[0]}, ${r[1]}));
          return resTexRC.y * ${r[0]} + resTexRC.x;
        }
      `;return new ae(t)}getOutputUnpacked2DCoords(e,r){let t=`
        ivec2 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${r[0]}, ${r[1]}));
          int index = resTexRC.y * ${r[0]} + resTexRC.x;
          int r = index / ${e[1]};
          int c = index - r * ${e[1]};
          return ivec2(r, c);
        }
      `;return new ae(t)}getOutputUnpacked3DCoords(e,r){let t="",o=e.length,i=null;o<2&&(i=[]),i=new Array(o-1),i[o-2]=e[o-1];for(let c=o-3;c>=0;--c)i[c]=i[c+1]*e[c+1];let a=["r","c","d"],u=i.map((c,p)=>{let m=`int ${a[p]} = index / ${c}`,b=p===i.length-1?`int ${a[p+1]} = index - ${a[p]} * ${c}`:`index -= ${a[p]} * ${c}`;return`${m}; ${b};`}).join("");return t=`
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${r[0]}, ${r[1]}));
          int index = resTexRC.y * ${r[0]} + resTexRC.x;
          ${u}
          return ivec3(r, c, d);
        }
      `,new ae(t)}getOutputUnpacked4DCoords(e,r){let t="",o=e.length,i=null;o<2&&(i=[]),i=new Array(o-1),i[o-2]=e[o-1];for(let c=o-3;c>=0;--c)i[c]=i[c+1]*e[c+1];let a=["r","c","d","d2"],u=i.map((c,p)=>{let m=`int ${a[p]} = index / ${c}`,b=p===i.length-1?`int ${a[p+1]} = index - ${a[p]} * ${c}`:`index -= ${a[p]} * ${c}`;return`${m}; ${b};`}).join("");return t=`
      ivec4 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${r[0]}, ${r[1]}));
          int index = resTexRC.y * ${r[0]} + resTexRC.x;
          ${u}
          return ivec4(r, c, d, d2);
        }
      `,new ae(t)}getOutputUnpacked5DCoords(e,r){let t="",o=e.length,i=null;o<2&&(i=[]),i=new Array(o-1),i[o-2]=e[o-1];for(let c=o-3;c>=0;--c)i[c]=i[c+1]*e[c+1];let a=["r","c","d","d2","d3"],u=i.map((c,p)=>{let m=`int ${a[p]} = index / ${c}`,b=p===i.length-1?`int ${a[p+1]} = index - ${a[p]} * ${c}`:`index -= ${a[p]} * ${c}`;return`${m}; ${b};`}).join("");return t=`
      ivec5 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${r[0]}, ${r[1]}));
          int index = resTexRC.y * ${r[0]} + resTexRC.x;
          ${u}
          return ivec5(r, c, d, d2, d3);
        }
      `,new ae(t)}getOutputUnpacked6DCoords(e,r){let t="",o=e.length,i=null;o<2&&(i=[]),i=new Array(o-1),i[o-2]=e[o-1];for(let c=o-3;c>=0;--c)i[c]=i[c+1]*e[c+1];let a=["r","c","d","d2","d3","d4"],u=i.map((c,p)=>{let m=`int ${a[p]} = index / ${c}`,b=p===i.length-1?`int ${a[p+1]} = index - ${a[p]} * ${c}`:`index -= ${a[p]} * ${c}`;return`${m}; ${b};`}).join("");return t=`
     ivec6 getOutputCoords() {
         ivec2 resTexRC = ivec2(TexCoords.xy *
                               vec2(${r[0]}, ${r[1]}));
         int index = resTexRC.y * ${r[0]} + resTexRC.x;
         ${u}
         return ivec6(r, c, d, d2, d3, d4);
       }
     `,new ae(t)}getCommonUtilFuncs(){let e={},r="uvFromFlat";e[r]=new ae(`
    vec2 uvFromFlat(int texNumR, int texNumC, int index) {
      int texC = index / texNumR;
      int texR = index - texC * texNumR;
      // TODO: swap texR, texC order in following function so row is corresponding to u and column is corresponding to
      //       v.
      return (vec2(texR, texC) + halfCR) / vec2(texNumR, texNumC);
    }
    `),r="packedUVfrom1D",e[r]=new ae(`
      vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
        int texelIndex = index / 2;
        int texR = texelIndex / texNumC;
        int texC = texelIndex - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),r="packedUVfrom2D",e[r]=new ae(`
      vec2 packedUVfrom2D(int texNumR, int texNumC, int texelsInLogicalRow, int row, int col) {
        int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
        int texR = texelIndex / texNumC;
        int texC = texelIndex - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),r="packedUVfrom3D",e[r]=new ae(`
      vec2 packedUVfrom3D(int texNumR, int texNumC,
          int texelsInBatch, int texelsInLogicalRow, int b,
          int row, int col) {
        int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
        int texR = index / texNumC;
        int texC = index - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),r="sampleTexture";let t=be(this.context.glContext.version);return e[r]=new ae(`
        float sampleTexture(sampler2D textureSampler, vec2 uv) {
            return ${t.texture2D}(textureSampler, uv).r;
        }`),e}getInputsSamplingSnippets(){let e={},r=this.context.outputTextureLayout;return this.context.programInfo.inputNames.forEach((t,o)=>{let i=this.context.inputTextureLayouts[o],a=Hi(t);i.isPacked?e[a]=this.getPackedSamplerFromInput(a,t,i):e[a]=this.getUnpackedSamplerFromInput(a,t,i);let u=hb(t);i.unpackedShape.length<=r.unpackedShape.length&&(i.isPacked?e[u]=this.getPackedSamplerAtOutputCoords(u,i,r,t):e[u]=this.getUnpackedSamplerAtOutputCoords(u,i,r,t))}),e}getPackedSamplerAtOutputCoords(e,r,t,o){let i=r.unpackedShape,a=t.unpackedShape,c=Hi(o),p=i.length,m=a.length,b=St.getBroadcastDims(i,a),_=$t(m),x=m-p,T,I=nr();p===0?T="":m<2&&b.length>=1?T="coords = 0;":T=b.map(X=>`coords.${I[X+x]} = 0;`).join(`
`);let P="";m<2&&p>0?P="coords":P=i.map((X,J)=>`coords.${I[J+x]}`).join(", ");let $="return outputValue;",C=fe.size(i)===1,z=fe.size(a)===1;if(p===1&&!C&&!z)$=`
        return vec4(outputValue.xy, outputValue.xy);
      `;else if(C&&!z)m===1?$=`
          return vec4(outputValue.x, outputValue.x, 0., 0.);
        `:$=`
          return vec4(outputValue.x);
        `;else if(b.length){let X=p-2,J=p-1;b.indexOf(X)>-1&&b.indexOf(J)>-1?$="return vec4(outputValue.x);":b.indexOf(X)>-1?$="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":b.indexOf(J)>-1&&($="return vec4(outputValue.xx, outputValue.zz);")}let M=`
        int lastDim = coords.${I[m-1]};
        coords.${I[m-1]} = coords.${I[m-2]};
        coords.${I[m-2]} = lastDim;
      `,q=`
      vec4 ${e}() {
        ${_} coords = getOutputCoords();
        ${M}
        ${T}
        vec4 outputValue = ${c}(${P});
        ${$}
      }
    `;return new ae(q,["coordinates.getOutputCoords"])}getUnpackedSamplerAtOutputCoords(e,r,t,o){let i=[t.width,t.height],a=[r.width,r.height],u=r.unpackedShape.length,c=t.unpackedShape.length,p=r.unpackedShape,m=t.unpackedShape,b=Hi(o);if(u===c&&Rn.arraysEqual(a,i)){let C=`
          float ${e}() {
            return sampleTexture(${o}, TexCoords);
          }
        `;return new ae(C,["coordinates.sampleTexture"])}let _=$t(c),x=St.getBroadcastDims(p,m),T=c-u,I,P=nr();u===0?I="":c<2&&x.length>=1?I="coords = 0;":I=x.map(C=>`coords.${P[C+T]} = 0;`).join(`
`);let $="";c<2&&u>0?$="coords":$=r.unpackedShape.map((C,k)=>`coords.${P[k+T]}`).join(", ");let A=`
        float ${e}() {
          ${_} coords = getOutputCoords();
          ${I}
          return ${b}(${$});
        }
      `;return new ae(A,["coordinates.getOutputCoords"])}getPackedSamplerFromInput(e,r,t){switch(t.unpackedShape.length){case 0:return this.getPackedSamplerScalar(e,r);case 1:return this.getPackedSampler1D(e,r,t);case 2:return this.getPackedSampler2D(e,r,t);case 3:return this.getPackedSampler3D(e,r,t);default:return this.getPackedSamplerND(e,r,t)}}getUnpackedSamplerFromInput(e,r,t){let o=t.unpackedShape;switch(o.length){case 0:return this.getUnpackedSamplerScalar(e,r,t);case 1:return this.getUnpackedSampler1D(e,r,t);case 2:return this.getUnpackedSampler2D(e,r,t);case 3:return this.getUnpackedSampler3D(e,r,t);case 4:return this.getUnpackedSampler4D(e,r,t);case 5:return this.getUnpackedSampler5D(e,r,t);case 6:return this.getUnpackedSampler6D(e,r,t);default:throw new Error(`Unsupported dimension ${o.length}-D`)}}getPackedSamplerScalar(e,r){let t=be(this.context.glContext.version),o=`
          vec4 ${e}() {
            return ${t.texture2D}(${r}, halfCR);
          }
        `;return new ae(o)}getPackedSampler1D(e,r,t){let o=[t.width,t.height],i=[o[1],o[0]],a=be(this.context.glContext.version),c=`vec4 ${e}(int index) {
      vec2 uv = packedUVfrom1D(
      ${i[0]}, ${i[1]}, index);
      return ${a.texture2D}(${r}, uv);
    }`;return new ae(c,["coordinates.packedUVfrom1D"])}getPackedSampler2D(e,r,t){let o=t.unpackedShape,i=[t.width,t.height],a=be(this.context.glContext.version),u=i[0],c=i[1];if(i!=null&&Rn.arraysEqual(o,i)){let x=`vec4 ${e}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${c}.0, ${u}.0);
        return ${a.texture2D}(${r}, uv);
      }`;return new ae(x)}let p=i,m=Math.ceil(o[1]/2),_=`vec4 ${e}(int row, int col) {
      vec2 uv = packedUVfrom2D(${p[1]}, ${p[0]}, ${m}, row, col);
      return ${a.texture2D}(${r}, uv);
    }`;return new ae(_,["coordinates.packedUVfrom2D"])}getPackedSampler3D(e,r,t){let o=t.unpackedShape,i=[t.width,t.height],a=[i[0],i[1]],u=be(this.context.glContext.version);if(o[0]===1){let T=o.slice(1),I=[1,2],P=uo(o,T),$=["b","row","col"],A=JSON.parse(JSON.stringify(t));A.unpackedShape=P;let C=this.getPackedSamplerFromInput(e,r,A),z=`${C.routineBody}
      vec4 ${e}(int b, int row, int col) {
        return ${e}(${lo($,I)});
      } `;return new ae(z,C.dependencies)}let c=a[0],p=a[1],m=Math.ceil(o[2]/2),b=m*Math.ceil(o[1]/2),x=`vec4 ${e}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${p}, ${c}, ${b}, ${m}, b, row, col);
      return ${u.texture2D}(${r}, uv);}`;return new ae(x,["coordinates.packedUVfrom3D"])}getPackedSamplerND(e,r,t){let o=t.unpackedShape,i=o.length,a=[t.width,t.height],u=be(this.context.glContext.version),c=[a[0],a[1]],p=c[1],m=c[0],b=Math.ceil(o[i-1]/2),_=b*Math.ceil(o[i-2]/2),x="int b, int row, int col",T=`b * ${_} + (row / 2) * ${b} + (col / 2)`;for(let $=2;$<i-1;$++)x=`int b${$}, `+x,_*=o[i-$-1],T=`b${$} * ${_} + `+T;let P=`vec4 ${e}(${x}) {
      int index = ${T};
      int texR = index / ${m};
      int texC = index - texR * ${m};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${m}, ${p});
      return ${u.texture2D}(${r}, uv);
    }`;return new ae(P)}getUnpackedSamplerScalar(e,r,t){let[o,i]=[t.width,t.height];if(o===1&&i===1){let u=`
          float ${e}() {
            return sampleTexture(${r}, halfCR);
          }
        `;return new ae(u,["coordinates.sampleTexture"])}let a=`
        float ${e}() {
          int offset_${r} = coordsToOffset(TexCoords, ${o}, ${i});
          vec2 uv = uvFromFlat(${o}, ${i}, offset_${r});
          return sampleTexture(${r}, uv);
        }
      `;return new ae(a,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler1D(e,r,t){let o=t.width,i=t.height;if(i===1&&o===1){let u=`
        float ${e}(int index) {
          return sampleTexture(${r}, halfCR);
        }
      `;return new ae(u,["coordinates.sampleTexture"])}if(i===1){let u=`
          float ${e}(int index) {
            vec2 uv = vec2((float(index) + 0.5) / ${o}.0, 0.5);
            return sampleTexture(${r}, uv);
          }
        `;return new ae(u,["coordinates.sampleTexture"])}if(o===1){let u=`
          float ${e}(int index) {
            vec2 uv = vec2(0.5, (float(index) + 0.5) / ${i}.0);
            return sampleTexture(${r}, uv);
          }
        `;return new ae(u,["coordinates.sampleTexture"])}let a=`
        float ${e}(int index) {
          vec2 uv = uvFromFlat(${o}, ${i}, index);
          return sampleTexture(${r}, uv);
        }
      `;return new ae(a,["coordinates.uvFromFlat","coordinates.sampleTexture"])}getUnpackedSampler2D(e,r,t){let o=t.unpackedShape,i=[t.height,t.width];if(i!=null&&Rn.arraysEqual(o,i)){let _=i[1],x=i[0],T=`
          float ${e}(int row, int col) {
            vec2 uv = (vec2(row, col) + halfCR) / vec2(${_}.0, ${x}.0);
            return sampleTexture(${r}, uv);
          }
        `;return new ae(T,["coordinates.sampleTexture"])}let{newShape:a,keptDims:u}=ho(o),c=a;if(c.length<o.length){let _=uo(o,c),x=JSON.parse(JSON.stringify(t));x.unpackedShape=_;let T=["col","row"],I=`
          ${this.getUnpackedSamplerFromInput(e,r,x).routineBody}
          float ${e}(int row, int col) {
            return ${e}(${lo(T,u)});
          }
        `;return new ae(I,["coordinates.sampleTexture"])}let p=i[1],m=i[0];if(m===1){let _=`
          float ${e}(int row, int col) {
            int offset_${r} = coordsToOffset(TexCoords, ${p}, ${m});
            float index = dot(vec3(row, col, offset_${r}), vec3(${o[1]}, 1, 1));
            vec2 uv = vec2(0.5, (index + 0.5) / ${p}.0);
            return sampleTexture(${r}, uv);
          }
        `;return new ae(_,["coordinates.sampleTexture","coordinates.coordsToOffset"])}if(p===1){let _=`
          float ${e}(int row, int col) {
            int offset_${r} = coordsToOffset(TexCoords, ${p}, ${m});
            float index = dot(vec3(row, col, offset_${r}), vec3(${o[1]}, 1, 1));
            vec2 uv = vec2((index + 0.5) / ${m}.0, 0.5);
            return sampleTexture(${r}, uv);
          }
        `;return new ae(_,["coordinates.sampleTexture","coordinates.coordsToOffset"])}let b=`
        float ${e}(int row, int col) {
          int index = col * ${o[1]} + row;
          vec2 uv = uvFromFlat(${p}, ${m}, index);
          return sampleTexture(${r}, uv);
        }
      `;return new ae(b,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler3D(e,r,t){let o=t.unpackedShape,i=o[1]*o[2],a=o[2],{newShape:u,keptDims:c}=ho(o),p=u;if(p.length<o.length){let x=uo(o,p),T=["batch","col","row"],I=JSON.parse(JSON.stringify(t));I.unpackedShape=x;let P=this.getUnpackedSamplerFromInput(e,r,I),$=c.reverse(),A=`
          ${P.routineBody}
          float ${e}(int batch, int row, int col) {
            return ${e}(${lo(T,$)});
          }
        `;return new ae(A,P.dependencies)}let m=t.width,b=t.height,_=`
          float ${e}(int depth, int row, int col) {
            // Explicitly use integer operations as dot() only works on floats.
            int index = depth * ${i} + col * ${a} + row;
            vec2 uv = uvFromFlat(${m}, ${b}, index);
            return sampleTexture(${r}, uv);
          }
      `;return new ae(_,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler4D(e,r,t){let o=t.unpackedShape,i=o[3],a=o[2]*i,u=o[1]*a,c=t.width,p=t.height,m=`
        float ${e}(int row, int col, int depth, int depth2) {
          int index = row * ${u} + col * ${a} +
              depth2 * ${i} + depth;
          vec2 uv = uvFromFlat(${c}, ${p}, index);
          return sampleTexture(${r}, uv);
        }
      `;return new ae(m,["coordinates.uvFromFlat","coordinates.sampleTexture"])}getUnpackedSampler5D(e,r,t){let o=t.unpackedShape,i=o[4],a=o[3]*i,u=o[2]*a,c=o[1]*u,{newShape:p,keptDims:m}=ho(o);if(p.length<o.length){let T=uo(o,p),I=["row","col","depth","depth2","depth3"],P=JSON.parse(JSON.stringify(t));P.unpackedShape=T;let $=`
          ${this.getUnpackedSamplerFromInput(e,r,P).routineBody}
          float ${e}(int row, int col, int depth, int depth2, int depth3) {
            return ${e}(${lo(I,m)});
          }
        `;return new ae($,["coordinates.sampleTexture","coordinates.uvFromFlat"])}let b=t.width,_=t.height,x=`
        float ${e}(int row, int col, int depth, int depth2, int depth3) {
          int index = row * ${c} + col * ${u} + depth * ${a} +
          depth3 * ${i} + depth2;
          vec2 uv = uvFromFlat(${b}, ${_}, index);
          return sampleTexture(${r}, uv);
        }
      `;return new ae(x,["coordinates.sampleTexture","coordinates.uvFromFlat"])}getUnpackedSampler6D(e,r,t){let o=t.unpackedShape,i=o[5],a=o[4]*i,u=o[3]*a,c=o[2]*u,p=o[1]*c,{newShape:m,keptDims:b}=ho(o);if(m.length<o.length){let I=uo(o,m),P=["row","col","depth","depth2","depth3","depth4"],$=JSON.parse(JSON.stringify(t));$.unpackedShape=I;let A=`
            ${this.getUnpackedSamplerFromInput(e,r,$).routineBody}
            float ${e}(int row, int col, int depth,
              int depth2, int depth3, int depth4) {
              return ${e}(${lo(P,b)});
            }
          `;return new ae(A,["coordinates.sampleTexture","coordinates.uvFromFlat"])}let _=t.width,x=t.height,T=`
          float ${e}(int row, int col, int depth,
            int depth2, int depth3, int depth4) {
            int index = row * ${p} + col * ${c} + depth * ${u} +
            depth2 * ${a} + depth3 * ${i} + depth4;
            vec2 uv = uvFromFlat(${_}, ${x}, index);
            return sampleTexture(${r}, uv);
          }
        `;return new ae(T,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}toVec(){let e=this.context.outputTextureLayout,r=e.shape.length,t=e.strides,o=e.width,i=e.height,a=[];for(let c=0;c<r-1;++c)a.push(`
        c[${c}] = offset / ${t[c]};`),a.push(`
        offset -= c[${c}] * ${t[c]};`);a.push(`
        c[${r-1}] = offset;`);let u=`
      void toVec(vec2 texCoords, out int c[${r}]) {
        int offset = coordsToOffset(texCoords, ${o}, ${i});
        ${a.join("")}
      }
      void toVec(int offset, out int c[${r}]) {
        ${a.join("")}
      }
    `;return{toVec:new ae(u,["coordinates.coordsToOffset"])}}valueFrom(){let e={};return this.context.programInfo.inputNames.forEach((r,t)=>{let o=this.context.inputTextureLayouts[t],a=(o.unpackedShape.length>0?o.unpackedShape:o.shape).length,u=`_${r}`;e[u]=new ae(this.getValueFromSingle(r,a,o.width,o.height,!1),[`shapeUtils.indicesToOffset${u}`,"coordinates.offsetToCoords","fragcolor.getColorAsFloat"]),u=u+"_T",e[u]=new ae(this.getValueFromSingle(r,a,o.width,o.height,!0),[`shapeUtils.indicesToOffset${u}`,"coordinates.offsetToCoords","fragcolor.getColorAsFloat"])}),e}getValueFromSingle(e,r,t,o,i){let a=`_${e}`;i&&(a=a+"_T");let u=be(this.context.glContext.version);return`
        float ${a}(int m[${r}]) {
          int offset = indicesToOffset${a}(m);
          vec2 coords = offsetToCoords(offset, ${t}, ${o});
          float value = getColorAsFloat(${u.texture2D}(${e}, coords));
          return value;
        }
        `}getPackedValueFrom(e,r,t,o,i){let a=`_${e}_Pack`;i&&(a=a+"_T");let u=be(this.context.glContext.version);return`
        vec4 ${a}(int m[${r}]) {
          int offset = indicesToOffset_${e}(m);
          vec2 coords = offsetToCoords(offset, ${t}, ${o});
          return ${u.texture2D}(${e}, coords);
        }
        `}}});var ua,Pv=W(()=>{"use strict";an();ua=class n extends qt{constructor(e){super(e)}getFunctions(){return{...this.encodeFloat32(),...this.decodeFloat32()}}getCustomTypes(){return{}}encodeFloat32(){return{encode:new ae(`highp vec4 encode(highp float f) {
        return vec4(f, 0.0, 0.0, 0.0);
      }
        `)}}decodeFloat32(){return{decode:new ae(`highp float decode(highp vec4 rgba) {
        return rgba.r;
      }
        `)}}encodeUint8(){let e=n.isLittleEndian()?"rgba.rgba=rgba.abgr;":"";return{encode:new ae(`
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
        `)}}decodeUint8(){let e=n.isLittleEndian()?"rgba.rgba=rgba.abgr;":"";return{decode:new ae(`
        highp float decode(highp vec4 rgba) {
          rgba = rgba * 255.0; // values need to be de-normalized from [0,1] to [0,255]
          ${e}
          highp float Sign = 1.0 - step(128.0,rgba[0])*2.0;
          highp float Exponent = 2.0 * mod(rgba[0],128.0) + step(128.0,rgba[1]) - 127.0;
          highp float Mantissa = mod(rgba[1],128.0)*65536.0 + rgba[2]*256.0 +rgba[3] + float(0x800000);
          highp float Result =  Sign * exp2(Exponent) * (Mantissa * exp2(-23.0 ));
          return Result;
      }
        `)}}static isLittleEndian(){let e=new ArrayBuffer(4),r=new Uint32Array(e),t=new Uint8Array(e);if(r[0]=3735928559,t[0]===239)return!0;if(t[0]===222)return!1;throw new Error("unknown endianness")}}});var la,Ov=W(()=>{"use strict";an();ot();la=class extends qt{constructor(e){super(e)}getFunctions(){return{...this.setFragColor(),...this.getColorAsFloat()}}getCustomTypes(){return{}}setFragColor(){let e=be(this.context.glContext.version);return{setFragColor:new ae(`
        void setFragColor(float value) {
            ${e.output} = encode(value);
        }
        `,["encoding.encode"])}}getColorAsFloat(){return{getColorAsFloat:new ae(`
        float getColorAsFloat(vec4 color) {
            return decode(color);
        }
        `,["encoding.decode"])}}}});var ca,Cv=W(()=>{"use strict";an();ca=class n extends qt{constructor(e){super(e)}getFunctions(){return{...this.bcastIndex(),...this.bcastMatmulIndex(),...this.offsetToIndices(),...this.indicesToOffset(),...this.incrementIndices()}}getCustomTypes(){return{}}bcastIndex(){let e=this.context.outputTextureLayout.shape.length,r={};return this.context.programInfo.inputNames.forEach((t,o)=>{let i=this.context.inputTextureLayouts[o].unpackedShape;if(i.length<=e){let a=i.length,u=e-a,c=`bcastIndices_${t}`,p="";for(let b=0;b<a;++b)p+=`
          realIndices[${b}] = int( mod(float(bcastedIndices[${u+b}]), ${i[b]}.0) );
          `;let m=`
        void ${c} (int bcastedIndices[${e}], out int realIndices[${a}]) {
          ${p}
        }
        `;r[c]=new ae(m)}}),r}bcastMatmulIndex(){let e=this.context.outputTextureLayout.shape.length,r={};return this.context.programInfo.inputNames.forEach((t,o)=>{let i=this.context.inputTextureLayouts[o].shape;if(!(i.length<2||i.length>e)){let a=i.length,u=e-a,c=`bcastMatmulIndices_${t}`,p="";for(let b=0;b<a-2;++b)p+=`
          realIndices[${b}] = int( mod(float(bcastedIndices[${u+b}]), ${i[b]}.0) );
          `;let m=`
        void ${c}(int bcastedIndices[${e}], out int realIndices[${a}]) {
          ${p}
          realIndices[${a-1}] = bcastedIndices[${e-1}];
          realIndices[${a-2}] = bcastedIndices[${e-2}];
        }
        `;r[c]=new ae(m)}}),r}indicesToOffset(){let e={};return this.context.programInfo.inputNames.forEach((r,t)=>{let o=this.context.inputTextureLayouts[t].shape,i=this.context.inputTextureLayouts[t].strides,a=o.length,u=`indicesToOffset_${r}`;e[u]=new ae(n.indexToOffsetSingle(u,a,i)),u=`indicesToOffset_${r}_T`,e[u]=new ae(n.indexToOffsetSingle(u,a,i.slice().reverse()))}),e}static indexToOffsetSingle(e,r,t){let o="";for(let i=r-1;i>=0;--i)o+=`
        offset += indices[${i}] * ${t[i]};
        `;return`
      int ${e}(int indices[${r}]) {
        int offset = 0;
        ${o}
        return offset;
      }
      `}offsetToIndices(){let e={};return this.context.programInfo.inputNames.forEach((r,t)=>{let o=this.context.inputTextureLayouts[t].shape,i=this.context.inputTextureLayouts[t].strides,a=o.length,u=`offsetToIndices_${r}`;e[u]=new ae(n.offsetToIndicesSingle(u,a,i)),u=`offsetToIndices_${r}_T`,e[u]=new ae(n.offsetToIndicesSingle(u,a,i.slice().reverse()))}),e}static offsetToIndicesSingle(e,r,t){let o=[];for(let i=0;i<r-1;++i)o.push(`
      indices[${i}] = offset / ${t[i]};`),o.push(`
        offset -= indices[${i}] * ${t[i]};`);return o.push(`
      indices[${r-1}] = offset;`),`
      void ${e}(int offset, out int indices[${r}]) {
        ${o.join("")}
      }
      `}incrementIndices(){let e={};return this.context.programInfo.inputNames.forEach((r,t)=>{let o=this.context.inputTextureLayouts[t].shape,i=o.length,a=`incrementIndices_${r}`,u="";for(let p=0;p<i;++p)u+=`
        shape[${p}] = ${o[p]};`;let c=`
        void ${a}(int axis, out int indices[${i}]) {
          int shape[${i}];
          ${u};
          for(int i = ${i} -1 ; i >= 0; --i) {
            if(i > axis) continue;
            indices[i] += 1;
            if(indices[i] < shape[i]) {
              break;
            }
            indices[i] = 0;
          }
        }
        `;e[a]=new ae(c)}),e}}});var da,Ev=W(()=>{"use strict";an();da=class extends qt{constructor(e){super(e)}getCustomTypes(){return{}}getFunctions(){return{...this.binaryVecFunctions(),...this.copyVec(),...this.setVecItem(),...this.getVecItem()}}binaryVecFunctions(){let r=this.context.outputTextureLayout.shape.length,t={add:"+=",sub:"-=",mul:"*=",div:"/="},o={};for(let i in t){let a=`${i}Vec`,u="";for(let p=0;p<r;++p)u+=`
          dest[${p}] ${t[i]} src[${p}];
          `;let c=`
        void ${a}(int src[${r}], out int dest[${r}]) {
          ${u}
        }
        `;o[a]=new ae(c)}return o}copyVec(){let r=this.context.outputTextureLayout.shape.length,t="";for(let i=0;i<r;++i)t+=`
        dest[${i}] = src[${i}];
        `;let o=`
      void copyVec(int src[${r}], out int dest[${r}]) {
        ${t}
      }
      `;return{copyVec:new ae(o)}}setVecItem(){let r=this.context.outputTextureLayout.shape.length,t=`
        if(index < 0)
            index =${r} + index;
        if (index == 0)
            m[0] = value;
        `;for(let i=1;i<r-1;++i)t+=`
        else if (index == ${i})
            m[${i}] = value;
            `;t+=`
        else
            m[${r-1}] = value;
        `;let o=`
      void setVecItem(out int m[${r}], int index, int value) {
        ${t}
      }
        `;return{setVecItem:new ae(o)}}getVecItem(){let r=this.context.outputTextureLayout.shape.length,t=`
        if(index < 0)
            index = ${r} + index;
        if (index == 0)
            return m[0];
      `;for(let i=1;i<r-1;++i)t+=`
        else if (index == ${i})
            return m[${i}];
      `;t+=`
        else
            return m[${r-1}];
        `;let o=`
      int getVecItem(int m[${r}], int index) {
        ${t}
      }
    `;return{getVecItem:new ae(o)}}}});var nc,Dv=W(()=>{"use strict";Av();Pv();Ov();Cv();Ev();nc={encoding:ua,fragcolor:la,vec:da,shapeUtils:ca,coordinates:sa}});var fa,kv=W(()=>{"use strict";an();Sv();Dv();ot();fa=class{constructor(e,r,t,o){this.libs={};this.glslLibRoutineDependencyGraph={};this.context=new Yi(e,r,t,o),Object.keys(nc).forEach(a=>{let u=new nc[a](this.context);this.libs[a]=u});let i=this.glslLibRoutineDependencyGraph;for(let a in this.libs){let c=this.libs[a].getFunctions();for(let p in c){let m=a+"."+p,b;i[m]?(b=i[m],b.routineBody=c[p].routineBody):(b=new Go(m,c[p].routineBody),i[m]=b);let _=c[p].dependencies;if(_)for(let x=0;x<_.length;++x)if(i[_[x]])b.addDependency(i[_[x]]);else{let T=new Go(_[x]);i[_[x]]=T,b.addDependency(T)}}}}preprocess(){let e=this.context.programInfo,r=e.shaderSource;return this.context.programInfo.hasMain||(r=`${r}
      ${pb(this.context.glContext.version,this.context.outputTextureLayout.shape.length)}`),r=Iv(r),`${fb(this.context.glContext.version)}
    ${this.getUniforms(e.inputNames,e.variables)}
    ${this.getImports(r)}
    ${r}`}getImports(e){let r=this.selectGlslLibRoutinesToBeIncluded(e);if(r.length===0)return"";let t="";for(let o=0;o<r.length;++o)if(r[o].routineBody)t+=r[o].routineBody+`
`;else throw new Error(`Missing body for the Glsl Library routine: ${r[o].name}`);return t}selectGlslLibRoutinesToBeIncluded(e){let r=[];return Object.keys(this.glslLibRoutineDependencyGraph).forEach(t=>{let o=t.split(".")[1];e.indexOf(o)!==-1&&r.push(this.glslLibRoutineDependencyGraph[t])}),Zi.returnOrderedNodes(r)}getUniforms(e,r){let t=[];if(e)for(let o of e)t.push(`uniform sampler2D ${o};`);if(r)for(let o of r)t.push(`uniform ${o.type} ${o.name}${o.arrayLength?`[${o.arrayLength}]`:""};`);return t.join(`
`)}}});var pa,Nv=W(()=>{"use strict";xt();Vt();kv();ot();pa=class{constructor(e,r,t){this.profiler=e;this.glContext=r;this.textureLayoutStrategy=t;this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,r){this.repo.set(e,r)}run(e,r,t){this.profiler.event("op",`ProgramManager.run ${e.programInfo.name??"unknown kernel"}`,()=>{let o=this.glContext.gl,i=e.program;o.useProgram(i);try{this.bindOutput(t),this.attributesBound||this.bindAttributes(e.attribLocations),this.bindUniforms(e.uniformLocations,e.programInfo.variables??[],r)}catch(a){throw qe.error("ProgramManager",e.programInfo.shaderSource),a}this.profiler.event("backend","GlContext.draw()",()=>{this.glContext.draw()})},this.glContext)}dispose(){this.vertexShader&&this.glContext.deleteShader(this.vertexShader),this.repo.forEach(e=>this.glContext.deleteProgram(e.program))}build(e,r,t){return this.profiler.event("backend","ProgramManager.build",()=>{let o=new fa(this.glContext,e,r,t),i=o.preprocess(),a=this.compile(i);return{programInfo:e,program:a,uniformLocations:this.getUniformLocations(a,o.context.programInfo.inputNames,o.context.programInfo.variables),attribLocations:this.getAttribLocations(a)}})}compile(e){if(!this.vertexShader){qe.verbose("ProrgramManager","Compiling and caching Vertex shader for the first time");let o=db(this.glContext.version);this.vertexShader=this.glContext.compileShader(o,this.glContext.gl.VERTEX_SHADER)}Ie.debug&&qe.verbose("ProrgramManager",`FragShader:
${e}
`);let r=this.glContext.compileShader(e,this.glContext.gl.FRAGMENT_SHADER),t=this.glContext.createProgram(this.vertexShader,r);return this.glContext.deleteShader(r),t}bindOutput(e){let r=e.width,t=e.height;qe.verbose("ProrgramManager",`Binding output texture to Framebuffer: w/h=${r}/${t}, shape=${e.shape}, type=${e.tensor.type}`),this.glContext.attachFramebuffer(e.texture,r,t)}bindAttributes(e){let r=e.position,t=e.textureCoord;this.glContext.setVertexAttributes(r,t),this.attributesBound=!0}bindUniforms(e,r,t){let o=this.glContext.gl,i=0;for(let{name:a,type:u,location:c,arrayLength:p}of e){let m=r.find(b=>b.name===a)?.data;if(u!=="sampler2D"&&!m)throw new Error(`variable '${a}' does not have data defined in program info`);switch(u){case"sampler2D":this.bindTexture(t[i],c,i),i++;break;case"float":p?o.uniform1fv(c,m):o.uniform1f(c,m);break;case"int":p?o.uniform1iv(c,m):o.uniform1i(c,m);break;default:throw new Error(`Uniform not implemented: ${u}`)}}}bindTexture(e,r,t){this.glContext.bindTextureToUniform(e.texture,t,r)}getAttribLocations(e){return{position:this.getAttribLocation(e,"position"),textureCoord:this.getAttribLocation(e,"textureCoord")}}getUniformLocations(e,r,t){let o=[];if(r)for(let i of r)o.push({name:i,type:"sampler2D",location:this.getUniformLocation(e,i)});if(t)for(let i of t)o.push({...i,location:this.getUniformLocation(e,i.name)});return o}getUniformLocation(e,r){let o=this.glContext.gl.getUniformLocation(e,r);if(o===null)throw new Error(`Uniform ${r} not found.`);return o}getAttribLocation(e,r){return this.glContext.gl.getAttribLocation(e,r)}}});var ha,Lv=W(()=>{"use strict";Vt();Fo();ha=class{constructor(e,r,t,o){this.glContext=e;this.layoutStrategy=r;this.profiler=t;this.config=o;this.pendingRead=new Map;o.reuseTextures&&(this.inUseTextures=new Map,this.idleTextures=new Map,this.textureLookup=new Map)}createTextureFromLayout(e,r,t,o){let i=this.toEncoderType(e),a=this.glContext.getEncoder(i,r.channels||1,o);if(r.isPacked&&o===1)throw new Error("not implemented");let u=r.width,c=r.height,p,m;if(this.config.reuseTextures){p=`${u}x${c}_${a.format}_${a.internalFormat}_${a.textureType}`,m=this.inUseTextures.get(p),m||(m=[],this.inUseTextures.set(p,m));let _=this.idleTextures.get(p);if(_&&_.length>0){let x=_.pop();return m.push(x),o===1&&this.glContext.updateTexture(x,u,c,a,this.toTextureData(e,t)),x}}qe.verbose("TextureManager",`Creating new texture of size ${r.width}x${r.height}`);let b=this.glContext.allocateTexture(u,c,a,this.toTextureData(e,t));return this.config.reuseTextures&&(m.push(b),this.textureLookup.set(b,p)),b}readTexture(e,r,t){return t||(t=1),this.profiler.event("backend","TextureManager.readTexture",()=>{let o=e.shape.reduce((a,u)=>a*u)*t,i=this.glContext.readTexture(e.texture,e.width,e.height,o,this.toEncoderType(r),t);return this.toTensorData(r,i)})}async readTextureAsync(e,r,t){let o=e.tensor.dataId;if(t||(t=1),this.pendingRead.has(o)){let i=this.pendingRead.get(o);return new Promise(a=>i?.push(a))}return this.profiler.event("backend","TextureManager.readTextureAsync",async()=>{this.pendingRead.set(o,[]);let i=e.shape.reduce((p,m)=>p*m)*t;await this.glContext.createAndWaitForFence();let a=this.glContext.readTexture(e.texture,e.width,e.height,i,this.toEncoderType(r),t),u=this.toTensorData(r,a),c=this.pendingRead.get(o);return this.pendingRead.delete(o),c?.forEach(p=>p(u)),u})}readUint8TextureAsFloat(e){return this.profiler.event("backend","TextureManager.readUint8TextureAsFloat",()=>{let r=e.shape.reduce((o,i)=>o*i),t=this.glContext.readTexture(e.texture,e.width,e.height,r*4,"byte",4);return new Float32Array(t.buffer,t.byteOffset,r)})}releaseTexture(e,r){let t;if(this.config.reuseTextures&&(t=this.textureLookup.get(e.texture),t)){r&&this.textureLookup.delete(t);let o=this.inUseTextures.get(t);if(o){let i=o.indexOf(e.texture);if(i!==-1){o.splice(i,1);let a=this.idleTextures.get(t);a||(a=[],this.idleTextures.set(t,a)),a.push(e.texture)}}}(!t||r)&&(qe.verbose("TextureManager",`Deleting texture of size ${e.width}x${e.height}`),this.glContext.deleteTexture(e.texture))}toTensorData(e,r){switch(e){case"int16":return r instanceof Int16Array?r:Int16Array.from(r);case"int32":return r instanceof Int32Array?r:Int32Array.from(r);case"int8":return r instanceof Int8Array?r:Int8Array.from(r);case"uint16":return r instanceof Uint16Array?r:Uint16Array.from(r);case"uint32":return r instanceof Uint32Array?r:Uint32Array.from(r);case"uint8":case"bool":return r instanceof Uint8Array?r:Uint8Array.from(r);case"float32":return r instanceof Float32Array?r:Float32Array.from(r);case"float64":return r instanceof Float64Array?r:Float64Array.from(r);default:throw new Error(`TensorData type ${e} is not supported`)}}toTextureData(e,r){if(r)return r instanceof Float32Array?r:new Float32Array(r)}toEncoderType(e){return"float"}clearActiveTextures(){this.glContext.clearActiveTextures()}}});var ma,Rv=W(()=>{"use strict";Vt();Sg();Pb();xv();Nv();rc();Lv();ma=class{constructor(e,r){this.backend=e;this.context=r;this.layoutStrategy=new aa(e.glContext.maxTextureSize),this.programManager=new pa(this.context.profiler,e.glContext,this.layoutStrategy),this.textureManager=new ha(e.glContext,this.layoutStrategy,this.context.profiler,{reuseTextures:e.textureCacheMode==="full"}),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache=new Map,this.pack=e.pack,this.pack2unpackMap=new Map,this.unpack2packMap=new Map}createInferenceHandler(){return new Xi(this)}onGraphInitialized(e){let r=e.getValues().filter(t=>t.from===-1&&t.tensor).map(t=>t.tensor.dataId);this.initializers=new Set(r)}isInitializer(e){return this.initializers?this.initializers.has(e):!1}addInitializer(e){this.initializers.add(e)}getTextureData(e,r){return r?this.packedTextureDataCache.get(e):this.unpackedTextureDataCache.get(e)}setTextureData(e,r,t=!1){qe.verbose("WebGLSessionHandler","Storing Texture data in cache"),t?this.packedTextureDataCache.set(e,r):this.unpackedTextureDataCache.set(e,r)}dispose(){this.programManager.dispose(),this.textureManager.clearActiveTextures(),this.packedTextureDataCache.forEach(e=>this.textureManager.releaseTexture(e,!0)),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache.forEach(e=>this.textureManager.releaseTexture(e,!0)),this.unpackedTextureDataCache=new Map}resolve(e,r,t){let o=Ig(e,r,wv);return{impl:o.opImpl,context:o.opInit?o.opInit(e,t):e}}}});function H4(n){let e=0;for(;e<n.length&&n[e]();++e);return e-1}var Wo,zv=W(()=>{"use strict";xt();Fo();Fo();jr();Wo=class{constructor(e,r){this.frameBufferBound=!1;this.itemsToPoll=[];this.gl=e,this.version=r,this.getExtensions(),this.vertexbuffer=this.createVertexbuffer(),this.framebuffer=this.createFramebuffer(),this.queryVitalParameters()}allocateTexture(e,r,t,o){let i=this.gl,a=i.createTexture();i.bindTexture(i.TEXTURE_2D,a),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE);let u=o?t.encode(o,e*r):null;return i.texImage2D(i.TEXTURE_2D,0,t.internalFormat,e,r,0,t.format,t.textureType,u),this.checkError(),a}updateTexture(e,r,t,o,i){let a=this.gl;a.bindTexture(a.TEXTURE_2D,e);let u=o.encode(i,r*t);a.texSubImage2D(a.TEXTURE_2D,0,0,0,r,t,o.format,o.textureType,u),this.checkError()}attachFramebuffer(e,r,t){let o=this.gl;o.bindTexture(o.TEXTURE_2D,e),o.bindFramebuffer(o.FRAMEBUFFER,this.framebuffer),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,e,0),this.checkError(),o.viewport(0,0,r,t),o.scissor(0,0,r,t)}readTexture(e,r,t,o,i,a){let u=this.gl;a||(a=1),this.frameBufferBound||this.attachFramebuffer(e,r,t);let c=this.getEncoder(i,a),p=c.allocate(r*t);return u.bindTexture(u.TEXTURE_2D,e),u.framebufferTexture2D(u.FRAMEBUFFER,u.COLOR_ATTACHMENT0,u.TEXTURE_2D,e,0),u.readPixels(0,0,r,t,u.RGBA,c.textureType,p),this.checkError(),c.decode(p,o)}isFramebufferReady(){return!0}getActiveTexture(){let e=this.gl;return`TEXTURE${e.getParameter(this.gl.ACTIVE_TEXTURE)-e.TEXTURE0}`}getTextureBinding(){return this.gl.getParameter(this.gl.TEXTURE_BINDING_2D)}getFramebufferBinding(){return this.gl.getParameter(this.gl.FRAMEBUFFER_BINDING)}setVertexAttributes(e,r){let t=this.gl;t.vertexAttribPointer(e,3,t.FLOAT,!1,20,0),t.enableVertexAttribArray(e),r!==-1&&(t.vertexAttribPointer(r,2,t.FLOAT,!1,20,12),t.enableVertexAttribArray(r)),this.checkError()}createProgram(e,r){let t=this.gl,o=t.createProgram();return t.attachShader(o,e),t.attachShader(o,r),t.linkProgram(o),o}compileShader(e,r){let t=this.gl,o=t.createShader(r);if(!o)throw new Error(`createShader() returned null with type ${r}`);if(t.shaderSource(o,e),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)===!1)throw new Error(`Failed to compile shader: ${t.getShaderInfoLog(o)}
Shader source:
${e}`);return o}deleteShader(e){this.gl.deleteShader(e)}bindTextureToUniform(e,r,t){let o=this.gl;o.activeTexture(o.TEXTURE0+r),this.checkError(),o.bindTexture(o.TEXTURE_2D,e),this.checkError(),o.uniform1i(t,r),this.checkError()}draw(){this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4),this.checkError()}checkError(){if(Ie.debug){let e=this.gl,r=e.getError(),t="";switch(r){case e.NO_ERROR:return;case e.INVALID_ENUM:t="INVALID_ENUM";break;case e.INVALID_VALUE:t="INVALID_VALUE";break;case e.INVALID_OPERATION:t="INVALID_OPERATION";break;case e.INVALID_FRAMEBUFFER_OPERATION:t="INVALID_FRAMEBUFFER_OPERATION";break;case e.OUT_OF_MEMORY:t="OUT_OF_MEMORY";break;case e.CONTEXT_LOST_WEBGL:t="CONTEXT_LOST_WEBGL";break;default:t=`Unknown WebGL Error: ${r.toString(16)}`}throw new Error(t)}}deleteTexture(e){this.gl.deleteTexture(e)}deleteProgram(e){this.gl.deleteProgram(e)}getEncoder(e,r,t=0){if(this.version===2)return new qi(this.gl,r);switch(e){case"float":return t===1||this.isRenderFloat32Supported?new Bo(this.gl,r):new Bo(this.gl,r,this.textureHalfFloatExtension.HALF_FLOAT_OES);case"int":throw new Error("not implemented");case"byte":return new Ki(this.gl,r);default:throw new Error(`Invalid dataType: ${e}`)}}clearActiveTextures(){let e=this.gl;for(let r=0;r<this.maxTextureImageUnits;++r)e.activeTexture(e.TEXTURE0+r),e.bindTexture(e.TEXTURE_2D,null)}dispose(){if(this.disposed)return;let e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(this.framebuffer),e.bindBuffer(e.ARRAY_BUFFER,null),e.deleteBuffer(this.vertexbuffer),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.finish(),this.disposed=!0}createDefaultGeometry(){return new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0])}createVertexbuffer(){let e=this.gl,r=e.createBuffer();if(!r)throw new Error("createBuffer() returned null");let t=this.createDefaultGeometry();return e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),this.checkError(),r}createFramebuffer(){let e=this.gl.createFramebuffer();if(!e)throw new Error("createFramebuffer returned null");return e}queryVitalParameters(){let e=this.gl;if(this.isFloatTextureAttachableToFrameBuffer=this.checkFloatTextureAttachableToFrameBuffer(),this.isRenderFloat32Supported=this.checkRenderFloat32(),this.isFloat32DownloadSupported=this.checkFloat32Download(),this.version===1&&!this.textureHalfFloatExtension&&!this.isRenderFloat32Supported)throw new Error("both float32 and float16 TextureType are not supported");this.isBlendSupported=!this.isRenderFloat32Supported||this.checkFloat32Blend(),this.maxTextureSize=e.getParameter(e.MAX_TEXTURE_SIZE),this.maxTextureImageUnits=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),this.version}getExtensions(){this.version===2?(this.colorBufferFloatExtension=this.gl.getExtension("EXT_color_buffer_float"),this.disjointTimerQueryWebgl2Extension=this.gl.getExtension("EXT_disjoint_timer_query_webgl2")):(this.textureFloatExtension=this.gl.getExtension("OES_texture_float"),this.textureHalfFloatExtension=this.gl.getExtension("OES_texture_half_float"))}checkFloatTextureAttachableToFrameBuffer(){let e=this.gl,r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r);let t=this.version===2?e.RGBA32F:e.RGBA;e.texImage2D(e.TEXTURE_2D,0,t,1,1,0,e.RGBA,e.FLOAT,null);let o=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);let i=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(o),i}checkRenderFloat32(){if(this.version===2){if(!this.colorBufferFloatExtension)return!1}else if(!this.textureFloatExtension)return!1;return this.isFloatTextureAttachableToFrameBuffer}checkFloat32Download(){if(this.version===2){if(!this.colorBufferFloatExtension)return!1}else if(!this.textureFloatExtension||!this.gl.getExtension("WEBGL_color_buffer_float"))return!1;return this.isFloatTextureAttachableToFrameBuffer}checkFloat32Blend(){let e=this.gl,r,t,o,i,a;try{r=e.createTexture(),t=e.createFramebuffer(),e.bindTexture(e.TEXTURE_2D,r);let u=this.version===2?e.RGBA32F:e.RGBA;return e.texImage2D(e.TEXTURE_2D,0,u,1,1,0,e.RGBA,e.FLOAT,null),e.bindFramebuffer(e.FRAMEBUFFER,t),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.enable(e.BLEND),o=e.createShader(e.VERTEX_SHADER),!o||(e.shaderSource(o,"void main(){}"),e.compileShader(o),i=e.createShader(e.FRAGMENT_SHADER),!i)||(e.shaderSource(i,"precision highp float;void main(){gl_FragColor=vec4(0.5);}"),e.compileShader(i),a=e.createProgram(),!a)?!1:(e.attachShader(a,o),e.attachShader(a,i),e.linkProgram(a),e.useProgram(a),e.drawArrays(e.POINTS,0,1),e.getError()===e.NO_ERROR)}finally{e.disable(e.BLEND),a&&e.deleteProgram(a),o&&e.deleteShader(o),i&&e.deleteShader(i),t&&(e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(t)),r&&(e.bindTexture(e.TEXTURE_2D,null),e.deleteTexture(r))}}beginTimer(){if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let e=this.gl,r=this.disjointTimerQueryWebgl2Extension,t=e.createQuery();return e.beginQuery(r.TIME_ELAPSED_EXT,t),t}else throw new Error("WebGL1 profiling currently not supported.")}endTimer(){if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let e=this.gl,r=this.disjointTimerQueryWebgl2Extension;e.endQuery(r.TIME_ELAPSED_EXT);return}else throw new Error("WebGL1 profiling currently not supported")}isTimerResultAvailable(e){let r=!1,t=!1;if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let o=this.gl,i=this.disjointTimerQueryWebgl2Extension;r=o.getQueryParameter(e,o.QUERY_RESULT_AVAILABLE),t=o.getParameter(i.GPU_DISJOINT_EXT)}else throw new Error("WebGL1 profiling currently not supported");return r&&!t}getTimerResult(e){let r=0;if(this.version===2){let t=this.gl;r=t.getQueryParameter(e,t.QUERY_RESULT),t.deleteQuery(e)}else throw new Error("WebGL1 profiling currently not supported");return r/1e6}async waitForQueryAndGetTime(e){return await Pl(()=>this.isTimerResultAvailable(e)),this.getTimerResult(e)}async createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let r,t=e,o=t.fenceSync(t.SYNC_GPU_COMMANDS_COMPLETE,0);return e.flush(),o===null?r=()=>!0:r=()=>{let i=t.clientWaitSync(o,0,0);return i===t.ALREADY_SIGNALED||i===t.CONDITION_SATISFIED},{query:o,isFencePassed:r}}async pollFence(e){return new Promise(r=>{this.addItemToPoll(()=>e.isFencePassed(),()=>r())})}pollItems(){let e=H4(this.itemsToPoll.map(r=>r.isDoneFn));for(let r=0;r<=e;++r){let{resolveFn:t}=this.itemsToPoll[r];t()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}async addItemToPoll(e,r){this.itemsToPoll.push({isDoneFn:e,resolveFn:r}),!(this.itemsToPoll.length>1)&&await Pl(()=>(this.pollItems(),this.itemsToPoll.length===0))}}});function oc(n){let e;if((!n||n==="webgl2")&&"webgl2"in mo?e=mo.webgl2:(!n||n==="webgl")&&"webgl"in mo&&(e=mo.webgl),!e)try{let t=K4();e=Mv(t,n)}catch{let o=q4();e=Mv(o,n)}n=n||e.version===1?"webgl":"webgl2";let r=e.gl;return mo[n]=e,r.isContextLost()?(delete mo[n],oc(n)):(r.disable(r.DEPTH_TEST),r.disable(r.STENCIL_TEST),r.disable(r.BLEND),r.disable(r.DITHER),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SAMPLE_COVERAGE),r.enable(r.SCISSOR_TEST),r.enable(r.CULL_FACE),r.cullFace(r.BACK),e)}function Mv(n,e){let r={alpha:!1,depth:!1,antialias:!1,stencil:!1,preserveDrawingBuffer:!1,premultipliedAlpha:!1,failIfMajorPerformanceCaveat:!1},t,o=r;if((!e||e==="webgl2")&&(t=n.getContext("webgl2",o),t))try{return new Wo(t,2)}catch(i){qe.warning("GlContextFactory",`failed to create WebGLContext using contextId 'webgl2'. Error: ${i}`)}if((!e||e==="webgl")&&(t=n.getContext("webgl",o)||n.getContext("experimental-webgl",o),t))try{return new Wo(t,1)}catch(i){qe.warning("GlContextFactory",`failed to create WebGLContext using contextId 'webgl' or 'experimental-webgl'. Error: ${i}`)}throw new Error("WebGL is not supported")}function q4(){if(typeof document>"u")throw new TypeError("failed to create canvas: document is not supported");let n=document.createElement("canvas");return n.width=1,n.height=1,n}function K4(){if(typeof OffscreenCanvas>"u")throw new TypeError("failed to create offscreen canvas: OffscreenCanvas is not supported");return new OffscreenCanvas(1,1)}var mo,Bv=W(()=>{"use strict";Vt();zv();mo={}});var ga,Fv=W(()=>{"use strict";xt();Vt();Rv();Bv();ga=class{get contextId(){return Ie.webgl.contextId}set contextId(e){Ie.webgl.contextId=e}get matmulMaxBatchSize(){return Ie.webgl.matmulMaxBatchSize}set matmulMaxBatchSize(e){Ie.webgl.matmulMaxBatchSize=e}get textureCacheMode(){return Ie.webgl.textureCacheMode}set textureCacheMode(e){Ie.webgl.textureCacheMode=e}get pack(){return Ie.webgl.pack}set pack(e){Ie.webgl.pack=e}get async(){return Ie.webgl.async}set async(e){Ie.webgl.async=e}initialize(){try{return this.glContext=oc(this.contextId),typeof this.matmulMaxBatchSize!="number"&&(this.matmulMaxBatchSize=16),typeof this.textureCacheMode!="string"&&(this.textureCacheMode="full"),typeof this.pack!="boolean"&&(this.pack=!1),typeof this.async!="boolean"&&(this.async=!1),qe.setWithEnv(Ie),Ie.webgl.context||Object.defineProperty(Ie.webgl,"context",{value:this.glContext.gl}),qe.verbose("WebGLBackend",`Created WebGLContext: ${typeof this.glContext} with matmulMaxBatchSize: ${this.matmulMaxBatchSize}; textureCacheMode: ${this.textureCacheMode}; pack: ${this.pack}; async: ${this.async}.`),!0}catch(e){return qe.warning("WebGLBackend",`Unable to initialize WebGLBackend. ${e}`),!1}}createSessionHandler(e){return new ma(this,e)}dispose(){this.glContext.dispose()}}});async function ic(n){if(n){let e=typeof n=="string"?[n]:n;for(let r of e){let t=Vv.get(r);if(t)return t;let o=await Y4(r);if(o)return o}}else return ic(["webgl"]);throw new Error("no available backend to use")}async function Y4(n){let e=X4;if(typeof e[n]<"u"&&Z4(e[n])){let r=e[n],t=r.initialize();if(typeof t=="object"&&"then"in t&&(t=await t),t)return Vv.set(n,r),r}}function Z4(n){let e=n;return"initialize"in e&&typeof e.initialize=="function"&&"createSessionHandler"in e&&typeof e.createSessionHandler=="function"&&"dispose"in e&&typeof e.dispose=="function"}var Vv,X4,Gv=W(()=>{"use strict";Fv();Vv=new Map,X4={webgl:new ga}});var ac,ya,Uv=W(()=>{"use strict";Vt();ac=class{constructor(e,r){this.op=e;this.node=r}},ya=class{constructor(e,r,t){this.graph=e;this.profiler=t;this.initialize(r)}initialize(e){this.profiler.event("session","ExecutionPlan.initialize",()=>{let r=this.graph.getNodes();if(r.length!==e.length)throw new Error("The size of nodes and OPs do not match.");this._ops=e.map((t,o)=>new ac(t,r[o])),this.reset(),this._starter=[],this._ops.forEach((t,o)=>{let i=!0;for(let a of t.node.inputs)if(!this._values[a]&&this.graph.getInputIndices().indexOf(a)===-1){i=!1;break}i&&this._starter.push(o)})})}reset(){this._values=this.graph.getValues().map(e=>e.tensor)}async execute(e,r){return this.profiler.event("session","ExecutionPlan.execute",async()=>{this.reset();let t=e.createInferenceHandler(),o=this.graph.getInputIndices();if(r.length!==o.length)throw new Error(`number of input tensors don't match the number of inputs to the model: actual: ${r.length} expected: ${o.length}`);r.forEach((m,b)=>{let _=o[b];this._values[_]=m});let i=this._starter.slice(0),a=this.graph.getValues(),u=this.graph.getNodes(),c=0;for(;c<i.length;){let m=i[c++],b=this._ops[m],_=b.node.inputs.map(P=>this._values[P]);if(_.indexOf(void 0)!==-1)throw new Error(`unresolved input detected: op: ${b.node}`);let x=_;qe.verbose("ExecPlan",`Running op:${b.node.name} (${x.map((P,$)=>`'${b.node.inputs[$]}': ${P.type}[${P.dims.join(",")}]`).join(", ")})`);let T=await this.profiler.event("node",b.node.name,async()=>b.op.impl(t,x,b.op.context));if(T.length!==b.node.outputs.length)throw new Error("the size of output does not match model definition.");T.forEach((P,$)=>{let A=b.node.outputs[$];if(this._values[A])throw new Error(`output [${A}] already has value: op:${b.node.name}`);this._values[A]=P});let I=new Set;T.forEach((P,$)=>{let A=b.node.outputs[$];for(let C of a[A].to){let k=u[C],z=!0;for(let M of k.inputs)if(!this._values[M]){z=!1;break}z&&I.add(C)}}),i.push(...I)}let p=[];for(let m=0;m<this.graph.getOutputIndices().length;m++){let b=this.graph.getOutputIndices()[m],_=this._values[b];if(_===void 0)throw new Error(`required output [${b}] does not have value`);b===0?await _.getData():_.data,p.push(_)}return qe.verbose("ExecPlan","disposing of inferenceHandler"),t.dispose(),p})}}});var Ne,Ho,jv=W(()=>{"use strict";ko();Ne=Pe(ao());Fn();je();Ho=class n{constructor(e){if(this._attributes=new Map,e!=null){for(let r of e)r instanceof Ne.onnx.AttributeProto?this._attributes.set(r.name,[n.getValue(r),n.getType(r)]):r instanceof Bi.Attribute&&this._attributes.set(r.name(),[n.getValue(r),n.getType(r)]);if(this._attributes.size<e.length)throw new Error("duplicated attribute names")}}set(e,r,t){this._attributes.set(e,[t,r])}delete(e){this._attributes.delete(e)}getFloat(e,r){return this.get(e,"float",r)}getInt(e,r){return this.get(e,"int",r)}getString(e,r){return this.get(e,"string",r)}getTensor(e,r){return this.get(e,"tensor",r)}getFloats(e,r){return this.get(e,"floats",r)}getInts(e,r){return this.get(e,"ints",r)}getStrings(e,r){return this.get(e,"strings",r)}getTensors(e,r){return this.get(e,"tensors",r)}get(e,r,t){let o=this._attributes.get(e);if(o===void 0){if(t!==void 0)return t;throw new Error(`required attribute not found: ${e}`)}if(o[1]!==r)throw new Error(`type mismatch: expected ${r} but got ${o[1]}`);return o[0]}static getType(e){let r=e instanceof Ne.onnx.AttributeProto?e.type:e.type();switch(r){case Ne.onnx.AttributeProto.AttributeType.FLOAT:return"float";case Ne.onnx.AttributeProto.AttributeType.INT:return"int";case Ne.onnx.AttributeProto.AttributeType.STRING:return"string";case Ne.onnx.AttributeProto.AttributeType.TENSOR:return"tensor";case Ne.onnx.AttributeProto.AttributeType.FLOATS:return"floats";case Ne.onnx.AttributeProto.AttributeType.INTS:return"ints";case Ne.onnx.AttributeProto.AttributeType.STRINGS:return"strings";case Ne.onnx.AttributeProto.AttributeType.TENSORS:return"tensors";default:throw new Error(`attribute type is not supported yet: ${Ne.onnx.AttributeProto.AttributeType[r]}`)}}static getValue(e){let r=e instanceof Ne.onnx.AttributeProto?e.type:e.type();if(r===Ne.onnx.AttributeProto.AttributeType.GRAPH||r===Ne.onnx.AttributeProto.AttributeType.GRAPHS)throw new Error("graph attribute is not supported yet");let t=this.getValueNoCheck(e);if(r===Ne.onnx.AttributeProto.AttributeType.INT&&Et.isLong(t))return Et.longToNumber(t);if(r===Ne.onnx.AttributeProto.AttributeType.INTS){let o=t,i=new Array(o.length);for(let a=0;a<o.length;a++){let u=o[a];i[a]=Et.longToNumber(u)}return i}if(r===Ne.onnx.AttributeProto.AttributeType.TENSOR)return e instanceof Ne.onnx.AttributeProto?pt.fromProto(t):pt.fromOrtTensor(t);if(r===Ne.onnx.AttributeProto.AttributeType.TENSORS){if(e instanceof Ne.onnx.AttributeProto)return t.map(i=>pt.fromProto(i));if(e instanceof Bi.Attribute)return t.map(i=>pt.fromOrtTensor(i))}return r===Ne.onnx.AttributeProto.AttributeType.STRING&&e instanceof Ne.onnx.AttributeProto?Mo(t):r===Ne.onnx.AttributeProto.AttributeType.STRINGS&&e instanceof Ne.onnx.AttributeProto?t.map(Mo):t}static getValueNoCheck(e){return e instanceof Ne.onnx.AttributeProto?this.getValueNoCheckFromOnnxFormat(e):this.getValueNoCheckFromOrtFormat(e)}static getValueNoCheckFromOnnxFormat(e){switch(e.type){case Ne.onnx.AttributeProto.AttributeType.FLOAT:return e.f;case Ne.onnx.AttributeProto.AttributeType.INT:return e.i;case Ne.onnx.AttributeProto.AttributeType.STRING:return e.s;case Ne.onnx.AttributeProto.AttributeType.TENSOR:return e.t;case Ne.onnx.AttributeProto.AttributeType.GRAPH:return e.g;case Ne.onnx.AttributeProto.AttributeType.FLOATS:return e.floats;case Ne.onnx.AttributeProto.AttributeType.INTS:return e.ints;case Ne.onnx.AttributeProto.AttributeType.STRINGS:return e.strings;case Ne.onnx.AttributeProto.AttributeType.TENSORS:return e.tensors;case Ne.onnx.AttributeProto.AttributeType.GRAPHS:return e.graphs;default:throw new Error(`unsupported attribute type: ${Ne.onnx.AttributeProto.AttributeType[e.type]}`)}}static getValueNoCheckFromOrtFormat(e){switch(e.type()){case Wt.AttributeType.FLOAT:return e.f();case Wt.AttributeType.INT:return e.i();case Wt.AttributeType.STRING:return e.s();case Wt.AttributeType.TENSOR:return e.t();case Wt.AttributeType.GRAPH:return e.g();case Wt.AttributeType.FLOATS:return e.floatsArray();case Wt.AttributeType.INTS:{let r=[];for(let t=0;t<e.intsLength();t++)r.push(e.ints(t));return r}case Wt.AttributeType.STRINGS:{let r=[];for(let t=0;t<e.stringsLength();t++)r.push(e.strings(t));return r}case Wt.AttributeType.TENSORS:{let r=[];for(let t=0;t<e.tensorsLength();t++)r.push(e.tensors(t));return r}default:throw new Error(`unsupported attribute type: ${Wt.AttributeType[e.type()]}`)}}}});var uc,lc,qr,ba,sc,Wv=W(()=>{"use strict";jv();ko();uc=Pe(ao());Fn();je();lc={from:(n,e)=>new sc(n,e)},qr=class{constructor(e){this._from=void 0,this._to=[],this.tensor=void 0,this.type=void 0,e&&(this.type=wt.tensorValueTypeFromProto(e.type.tensorType))}get from(){return this._from}get to(){return this._to}},ba=class{constructor(e,r){e instanceof uc.onnx.NodeProto?(this.name=e.name,this.opType=e.opType,this.attributes=new Ho(e.attribute)):e instanceof cl.Node&&(this.name=r??e.name(),this.opType=e.opType(),this.attributes=new Ho(wt.tensorAttributesFromORTFormat(e))),this.inputs=[],this.outputs=[],this.executeNode=!0}},sc=class{constructor(e,r){if(!e)throw new TypeError("graph is empty");this.buildGraph(e),this.transformGraph(r),this.checkIsAcyclic()}getInputIndices(){return this._allInputIndices}getInputNames(){return this._allInputNames}getOutputIndices(){return this._allOutputIndices}getOutputNames(){return this._allOutputNames}getValues(){return this._allData}getNodes(){return this._nodes}buildGraph(e){if(e instanceof uc.onnx.GraphProto)this.buildGraphFromOnnxFormat(e);else if(e instanceof ul.Graph)this.buildGraphFromOrtFormat(e);else throw new TypeError("Graph type is not supported.")}buildGraphFromOnnxFormat(e){let r=new Map;this._allData=[],this._allInputIndices=[],this._allInputNames=[],this._allOutputIndices=[],this._allOutputNames=[],this._nodes=[];let t=new Map;if(!e.input)throw new Error("missing information in graph: input");let o=[];for(let i of e.input){if(r.has(i.name))throw new Error(`duplicated input name: ${i.name}`);let a=this._allData.push(new qr(i))-1;r.set(i.name,a),o.push(i.name)}if(!e.initializer)throw new Error("missing information in graph: initializer");for(let i of e.initializer){let a=r.get(i.name);if(a===void 0){let u=new qr;u.type={shape:{dims:wt.tensorDimsFromProto(i.dims)},tensorType:wt.tensorDataTypeFromProto(i.dataType)},a=this._allData.push(u)-1,r.set(i.name,a)}this._allData[a]._from=-1,this._allData[a].tensor=pt.fromProto(i)}for(let i=0;i<this._allData.length;i++)this._allData[i].tensor||(this._allInputIndices.push(i),this._allInputNames.push(o[i]));if(!e.output)throw new Error("missing information in graph: output");for(let i of e.output){if(r.has(i.name))throw new Error(`duplicated output name: ${i.name}`);let a=this._allData.push(new qr(i))-1;r.set(i.name,a),this._allOutputIndices.push(a),this._allOutputNames.push(i.name)}if(!e.node)throw new Error("missing information in graph: node");for(let i of e.node){if(!i.name)for(let u=0;;u++){let c=`unnamed_${i.opType}_${u}`;if(!t.has(c)){i.name=c;break}}if(t.has(i.name))throw new Error(`duplicated node name: ${i.name}`);let a=this._nodes.push(new ba(i))-1;t.set(i.name,a)}for(let i=0;i<this._nodes.length;i++){let a=this._nodes[i],u=e.node[i];if(!u.output)throw new Error(`missing output for node: ${u.name}`);for(let c of u.output){let p=r.get(c);if(typeof p>"u"&&(p=this._allData.push(new qr)-1,r.set(c,p)),a.outputs.push(p),this._allData[p]._from!==void 0)throw new Error(`multiple nodes output to one data value: ${p}`);if(this._allData[p]._from=i,u.opType==="Constant"){if(!u.attribute||u.attribute.length!==1||!u.attribute[0].t)throw new Error("missing attributes or missing tensor value in attributes for this Constant operator");if(!u.output||u.output.length!==1)throw new Error("missing output or incorrect number of outputs for this Constant operator");a.outputs.pop(),a.executeNode=!1,this._allData[p]._from=-1,this._allData[p].tensor=pt.fromProto(u.attribute[0].t)}}}for(let i=0;i<this._nodes.length;i++){let a=this._nodes[i],u=e.node[i];if(!u.input)throw new Error(`missing input for node: ${u.name}`);for(let c of u.input){let p=r.get(c);if(typeof p>"u"){if(c===""&&(u.input.length===3||u.input.length===4)&&u.opType==="Resize")continue;throw new Error(`unrecognized input '${c}' for node: ${u.name}`)}a.inputs.push(p),this._allData[p]._to.push(i)}}return!0}buildGraphFromOrtFormat(e){let r=new Map;this._allData=[],this._allInputIndices=[],this._allInputNames=[],this._allOutputIndices=[],this._allOutputNames=[],this._nodes=[];let t=new Map,o=[];for(let i=0;i<e.inputsLength();i++){let a=e.inputs(i);if(r.has(a))throw new Error(`duplicated input name: ${a}`);for(let u=0;u<e.nodeArgsLength();u++)if(e.nodeArgs(u)?.name()===a){let c=new qr;if(e.nodeArgs(u)?.type()?.valueType()!==fl.TypeInfoValue.tensor_type)throw new Error("Unexpected value type for the nodeArg.");let m=e.nodeArgs(u).type().value(new dl.TensorTypeAndShape),b=wt.tensorDataTypeFromProto(m.elemType()),_=m.shape(),x=[];for(let I=0;I<_.dimLength();I++)x.push(Et.longToNumber(_.dim(I).value().dimValue()));c.type={shape:{dims:x},tensorType:b};let T=this._allData.push(c)-1;r.set(a,T),o.push(a)}}for(let i=0;i<e.initializersLength();i++){let a=e.initializers(i),u=r.get(a.name());if(u===void 0){let c=new qr,p=wt.tensorDimsFromORTFormat(a),m=wt.tensorDataTypeFromProto(a.dataType());c.type={shape:{dims:p},tensorType:m},u=this._allData.push(c)-1,r.set(a.name(),u)}this._allData[u]._from=-1,this._allData[u].tensor=pt.fromOrtTensor(a)}for(let i=0;i<this._allData.length;i++)this._allData[i].tensor||(this._allInputIndices.push(i),this._allInputNames.push(o[i]));for(let i=0;i<e.outputsLength();i++){let a=e.outputs(i);if(r.has(a))throw new Error(`duplicated output name: ${a}`);let u=this._allData.push(new qr)-1;r.set(a,u),this._allOutputIndices.push(u),this._allOutputNames.push(a)}if(!e.nodes)throw new Error("missing information in graph: node");for(let i=0;i<e.nodesLength();i++){let a=e.nodes(i),u=a.name();if(!u)for(let p=0;u=`unnamed_${a.opType()}_${p}`,!!t.has(u);p++);if(t.has(u))throw new Error(`duplicated node name: ${u}`);let c=this._nodes.push(new ba(a,u))-1;t.set(u,c)}for(let i=0;i<this._nodes.length;i++){let a=this._nodes[i],u=e.nodes(i);if(u==null)throw new Error(`No node exists at index ${i}`);if(u?.outputsLength()===0)throw new Error(`missing output for node: ${u.name}`);for(let c=0;c<u?.outputsLength();c++){let p=u?.outputs(c),m=r.get(p);if(typeof m>"u"&&(m=this._allData.push(new qr)-1,r.set(p,m)),a.outputs.push(m),this._allData[m]._from!==void 0)throw new Error(`multiple nodes output to one data value: ${m}`);if(this._allData[m]._from=i,u.opType()==="Constant"){if(u.attributesLength()!==1||!u.attributes(0).t())throw new Error("missing attributes or missing tensor value in attributes for this Constant operator");if(u.outputsLength()!==1)throw new Error("missing output or incorrect number of outputs for this Constant operator");a.outputs.pop(),a.executeNode=!1,this._allData[m]._from=-1,this._allData[m].tensor=pt.fromOrtTensor(u.attributes(0).t())}}}for(let i=0;i<this._nodes.length;i++){let a=this._nodes[i],u=e.nodes(i);if(u.inputsLength()===0)throw new Error(`missing input for node: ${u.name}`);for(let c=0;c<u.inputsLength();c++){let p=u.inputs(c),m=r.get(p);if(typeof m>"u")throw new Error(`unrecognized input '${p}' for node: ${u.name()}`);a.inputs.push(m),this._allData[m]._to.push(i)}}}checkIsAcyclic(){let e=new Set;this._allInputIndices.forEach(o=>{this._allData[o]._to.forEach(a=>{e.add(a)})});let r=Array.from(e),t=new Array(this._nodes.length).fill("white");for(;r.length>0;){let o=r.pop();t[o]==="gray"?t[o]="black":(r.push(o),t[o]="gray",this._nodes[o].outputs.forEach(i=>{let a=this._allData[i];if(typeof a.tensor<"u")throw new Error("node outputs should not be initialized");if(a._from!==o)throw new Error("from property of the Value object doesn't match index of Node being processed");a._to.forEach(u=>{if(t[u]==="gray")throw new Error("model graph is cyclic");t[u]==="white"&&r.push(u)})}))}}transformGraph(e){this.removeAllIdentityNodes(),this.removeAllDropoutNodes(),this.fuseConvActivationNodes(),e&&e.transformGraph(this),this.finalizeGraph()}finalizeGraph(){let e=0,r=new Array(this._nodes.length,0),t=0;for(let o=0;o<this._nodes.length;o++)r[o]=t,this._nodes[o].executeNode?(t!==o&&(this._nodes[t]=this._nodes[o]),t++):this._nodes[o].outputs.forEach(i=>{this._allData[i]._from=-2});this._nodes.splice(t,this._nodes.length-t);for(let o=0;o<this._allData.length;o++){let i=this._allData[o];i._from!==void 0&&i._from!==-1&&i._from!==-2&&(i._from=r[i._from]);for(let a=0;a<i._to.length;a++)if(i._to[a]>=0)i._to[a]=r[i._to[a]];else throw new Error("Trying to update a removed node")}e=0;for(let o=0;o<this._allData.length;o++){if(this._allData[o].from===-2&&this._allOutputIndices.indexOf(o+e)===-1){e++,this._allData.splice(o,1),o--;continue}if(e>0){let i=-1;this._allData[o].from!==void 0&&this._allData[o].from!==-1?(i=this._nodes[this._allData[o].from].outputs.indexOf(o+e),i!==-1&&(this._nodes[this._allData[o].from].outputs[i]=o)):(i=this._allInputIndices.indexOf(o+e),i!==-1&&(this._allInputIndices[i]=o)),this._allData[o].to.forEach(a=>{i=this._nodes[a].inputs.indexOf(o+e),i!==-1&&(this._nodes[a].inputs[i]=o)}),this._allData[o].to.length===0&&(i=this._allOutputIndices.indexOf(o+e),i!==-1&&(this._allOutputIndices[i]=o))}}}deleteNode(e){let r=this._nodes[e];if(r.outputs.length>1){for(let u=1;u<r.outputs.length;u++)if(this._allData[r.outputs[u]].to.length>0)throw new Error("Node deletion with more than one output connected to other nodes is not supported. ")}r.executeNode=!1;let t=r.inputs[0],o=r.outputs[0],i=this._allData[o].to;for(let u=0;u<r.inputs.length;u++){let c=this._allData[r.inputs[u]].to.indexOf(e);if(c===-1)throw new Error("The Value object doesn't have the current Node in it's 'to' property ");this._allData[r.inputs[u]].to.splice(c,1)}this._allData[o]._to=[];let a=this._allOutputIndices.indexOf(o);if(a!==-1&&(this._allOutputIndices[a]=t),i&&i.length>0)for(let u of i){let c=this._nodes[u].inputs.indexOf(o);if(c===-1)throw new Error("The Node object doesn't have the output Value in it's 'inputs' property ");this._nodes[u].inputs[c]=t,this._allData[t].to.push(u)}}removeAllDropoutNodes(){let e=0;for(let r of this._nodes){if(r.opType==="Dropout"){if(r.inputs.length!==1)throw new Error("Dropout nodes should only contain one input. ");if(r.outputs.length!==1&&r.outputs.length!==2)throw new Error("Dropout nodes should contain either 1 or 2 output(s)");if(r.outputs.length===2&&this._allData[r.outputs[1]]._to.length!==0)throw new Error("Dropout nodes's second output should not be referenced by other nodes");this.deleteNode(e)}e++}}removeAllIdentityNodes(){let e=0;for(let r of this._nodes)r.opType==="Identity"&&this.deleteNode(e),e++}isActivation(e){switch(e.opType){case"Relu":case"Sigmoid":case"Clip":return!0;default:return!1}}fuseConvActivationNodes(){for(let e of this._nodes)if(e.opType==="Conv"){let r=this._allData[e.outputs[0]]._to;if(r.length===1&&this.isActivation(this._nodes[r[0]])){let t=this._nodes[r[0]];if(t.opType==="Clip")if(t.inputs.length===1)try{e.attributes.set("activation_params","floats",[t.attributes.getFloat("min"),t.attributes.getFloat("max")])}catch{e.attributes.set("activation_params","floats",[Mn,Bn])}else if(t.inputs.length>=3&&this._allData[t.inputs[1]].tensor!==void 0&&this._allData[t.inputs[2]].tensor!==void 0)e.attributes.set("activation_params","floats",[this._allData[t.inputs[1]].tensor.floatData[0],this._allData[t.inputs[2]].tensor.floatData[0]]);else continue;e.attributes.set("activation","string",t.opType),this.deleteNode(r[0])}}}}});var Hv,qv,_a,Kv=W(()=>{"use strict";Hv=Pe(Ue());Wv();ko();qv=Pe(ao());je();_a=class{constructor(){}load(e,r,t){let o;if(!t)try{this.loadFromOnnxFormat(e,r);return}catch(i){if(t!==void 0)throw i;o=i}try{this.loadFromOrtFormat(e,r)}catch(i){throw t!==void 0?i:new Error(`Failed to load model as ONNX format: ${o}
as ORT format: ${i}`)}}loadFromOnnxFormat(e,r){let t=qv.onnx.ModelProto.decode(e);if(Et.longToNumber(t.irVersion)<3)throw new Error("only support ONNX model with IR_VERSION>=3");this._opsets=t.opsetImport.map(i=>({domain:i.domain,version:Et.longToNumber(i.version)})),this._graph=lc.from(t.graph,r)}loadFromOrtFormat(e,r){let t=new Hv.ByteBuffer(e),o=ll.InferenceSession.getRootAsInferenceSession(t).model();if(Et.longToNumber(o.irVersion())<3)throw new Error("only support ONNX model with IR_VERSION>=3");this._opsets=[];for(let a=0;a<o.opsetImportLength();a++){let u=o.opsetImport(a);this._opsets.push({domain:u?.domain(),version:Et.longToNumber(u.version())})}this._graph=lc.from(o.graph(),r)}get graph(){return this._graph}get opsets(){return this._opsets}}});var va,Xv=W(()=>{"use strict";Gv();Uv();Vt();Kv();va=class{constructor(e={}){this._initialized=!1,this.backendHint=e.backendHint,this.profiler=Si.create(e.profiler),this.context={profiler:this.profiler,graphInputTypes:[],graphInputDims:[]}}get inputNames(){return this._model.graph.getInputNames()}get outputNames(){return this._model.graph.getOutputNames()}startProfiling(){this.profiler.start()}endProfiling(){this.profiler.stop()}async loadModel(e,r,t){await this.profiler.event("session","Session.loadModel",async()=>{let o=await ic(this.backendHint);if(this.sessionHandler=o.createSessionHandler(this.context),this._model=new _a,typeof e=="string"){let i=e.endsWith(".ort");{let u=await(await fetch(e)).arrayBuffer();this.initialize(new Uint8Array(u),i)}}else if(ArrayBuffer.isView(e))this.initialize(e);else{let i=new Uint8Array(e,r||0,t||e.byteLength);this.initialize(i)}})}initialize(e,r){if(this._initialized)throw new Error("already initialized");this.profiler.event("session","Session.initialize",()=>{let t=this.sessionHandler.transformGraph?this.sessionHandler:void 0;this._model.load(e,t,r),this.sessionHandler.onGraphInitialized&&this.sessionHandler.onGraphInitialized(this._model.graph),this.initializeOps(this._model.graph),this._executionPlan=new ya(this._model.graph,this._ops,this.profiler)}),this._initialized=!0}async run(e){if(!this._initialized)throw new Error("session not initialized yet");return this.profiler.event("session","Session.run",async()=>{let r=this.normalizeAndValidateInputs(e),t=await this._executionPlan.execute(this.sessionHandler,r);return this.createOutput(t)})}normalizeAndValidateInputs(e){let r=this._model.graph.getInputNames();if(Array.isArray(e)){if(e.length!==r.length)throw new Error(`incorrect input array length: expected ${r.length} but got ${e.length}`)}else{if(e.size!==r.length)throw new Error(`incorrect input map size: expected ${r.length} but got ${e.size}`);let t=new Array(e.size),o=0;for(let i=0;i<r.length;++i){let a=e.get(r[i]);if(!a)throw new Error(`missing input tensor for: '${name}'`);t[o++]=a}e=t}if(!this.context.graphInputTypes||this.context.graphInputTypes.length===0||!this.context.graphInputDims||this.context.graphInputDims.length===0){let t=this._model.graph.getInputIndices(),o=this._model.graph.getValues(),i=new Array(t.length);for(let a=0;a<t.length;++a){let u=o[t[a]];i[a]=u.type.shape.dims,this.context.graphInputTypes.push(u.type.tensorType),this.context.graphInputDims.push(e[a].dims)}this.validateInputTensorDims(i,e,!0)}else this.validateInputTensorDims(this.context.graphInputDims,e,!1);return this.validateInputTensorTypes(this.context.graphInputTypes,e),e}validateInputTensorTypes(e,r){for(let t=0;t<r.length;t++){let o=e[t],i=r[t].type;if(o!==i)throw new Error(`input tensor[${t}] check failed: expected type '${o}' but got ${i}`)}}validateInputTensorDims(e,r,t){for(let o=0;o<r.length;o++){let i=e[o],a=r[o].dims;if(!this.compareTensorDims(i,a,t))throw new Error(`input tensor[${o}] check failed: expected shape '[${i.join(",")}]' but got [${a.join(",")}]`)}}compareTensorDims(e,r,t){if(e.length!==r.length)return!1;for(let o=0;o<e.length;++o)if(e[o]!==r[o]&&(!t||e[o]!==0))return!1;return!0}createOutput(e){let r=this._model.graph.getOutputNames();if(e.length!==r.length)throw new Error("expected number of outputs do not match number of generated outputs");let t=new Map;for(let o=0;o<r.length;++o)t.set(r[o],e[o]);return t}initializeOps(e){let r=e.getNodes();this._ops=new Array(r.length);for(let t=0;t<r.length;t++)this._ops[t]=this.sessionHandler.resolve(r[t],this._model.opsets,e)}}});var wa,Yv=W(()=>{"use strict";xt();Fn();wa=class{constructor(e){this.session=e;this.inputNames=this.session.inputNames,this.outputNames=this.session.outputNames}async dispose(){}async run(e,r,t){let o=new Map;for(let u in e)if(Object.hasOwnProperty.call(e,u)){let c=e[u];o.set(u,new pt(c.dims,c.type,void 0,void 0,c.data))}let i=await this.session.run(o),a={};return i.forEach((u,c)=>{a[c]=new Lt(u.type,u.data,u.dims)}),a}startProfiling(){this.session.startProfiling()}endProfiling(){this.session.endProfiling()}}});var Zv={};On(Zv,{onnxjsBackend:()=>J4});var cc,J4,Jv=W(()=>{"use strict";Xv();Yv();cc=class{async init(){}async createInferenceSessionHandler(e,r){let t=new va(r);return typeof e=="string"?await t.loadModel(e):await t.loadModel(e),new wa(t)}},J4=new cc});var xa=W(()=>{"use strict"});var tw={};On(tw,{default:()=>Q4});var Qv,ew,Q4,rw=W(()=>{"use strict";dc();Tn();Ta();Qv="ort-wasm-proxy-worker",ew=globalThis.self?.name===Qv;ew&&(self.onmessage=n=>{let{type:e,in:r}=n.data;try{switch(e){case"init-wasm":Ia(r.wasm).then(()=>{Sa(r).then(()=>{postMessage({type:e})},t=>{postMessage({type:e,err:t})})},t=>{postMessage({type:e,err:t})});break;case"init-ep":{let{epName:t,env:o}=r;$a(o,t).then(()=>{postMessage({type:e})},i=>{postMessage({type:e,err:i})});break}case"copy-from":{let{buffer:t}=r,o=qo(t);postMessage({type:e,out:o});break}case"create":{let{model:t,options:o}=r;Aa(t,o).then(i=>{postMessage({type:e,out:i})},i=>{postMessage({type:e,err:i})});break}case"release":Pa(r),postMessage({type:e});break;case"run":{let{sessionId:t,inputIndices:o,inputs:i,outputIndices:a,options:u}=r;Oa(t,o,i,a,new Array(a.length).fill(null),u).then(c=>{c.some(p=>p[3]!=="cpu")?postMessage({type:e,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:e,out:c},Ea([...i,...c]))},c=>{postMessage({type:e,err:c})});break}case"end-profiling":Ca(r),postMessage({type:e});break;default:}}catch(t){postMessage({type:e,err:t})}});Q4=ew?null:n=>new Worker(n??Mt,{type:"module",name:Qv})});var ow={};On(ow,{default:()=>eN});var fc,nw,eN,tN,iw=W(()=>{"use strict";nw=(fc=import.meta.url,async function(n={}){var e,r,t=n,o=new Promise((s,l)=>{e=s,r=l}),i=typeof window=="object",a=typeof WorkerGlobalScope<"u",u=a&&self.name?.startsWith("em-pthread");t.mountExternalData=(s,l)=>{s.startsWith("./")&&(s=s.substring(2)),(t.bj||(t.bj=new Map)).set(s,l)},t.unmountExternalData=()=>{delete t.bj};var c=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,Mj:!0}).buffer.constructor;let p=s=>async(...l)=>{try{if(t.cj)throw Error("Session already started");let d=t.cj={Cj:l[0],errors:[]},f=await s(...l);if(t.cj!==d)throw Error("Session mismatch");t.dj?.flush();let h=d.errors;if(0<h.length){let g=await Promise.all(h);if(g=g.filter(y=>y),0<g.length)throw Error(g.join(`
`))}return f}finally{t.cj=null}};t.jsepInit=(s,l)=>{if(s==="webgpu"){[t.dj,t.rj,t.vj,t.hj,t.uj,t.Ye,t.wj,t.zj,t.sj,t.tj,t.xj]=l;let d=t.dj;t.jsepRegisterBuffer=(f,h,g,y)=>d.registerBuffer(f,h,g,y),t.jsepGetBuffer=f=>d.getBuffer(f),t.jsepCreateDownloader=(f,h,g)=>d.createDownloader(f,h,g),t.jsepOnCreateSession=f=>{d.onCreateSession(f)},t.jsepOnReleaseSession=f=>{d.onReleaseSession(f)},t.jsepOnRunStart=f=>d.onRunStart(f),t.Aj=(f,h)=>{d.upload(f,h)}}else if(s==="webnn"){[t.dj,t.yj,t.ij,t.jsepEnsureTensor,t.jj,t.jsepDownloadTensor]=l,t.jsepReleaseTensorId=t.ij,t.jsepUploadTensor=t.jj;let d=t.dj;t.jsepOnRunStart=f=>d.onRunStart(f),t.jsepOnRunEnd=d.onRunEnd.bind(d),t.jsepRegisterMLContext=(f,h)=>{d.registerMLContext(f,h)},t.jsepOnReleaseSession=f=>{d.onReleaseSession(f)},t.jsepCreateMLTensorDownloader=(f,h)=>d.createMLTensorDownloader(f,h),t.jsepRegisterMLTensor=(f,h,g,y)=>d.registerMLTensor(f,h,g,y),t.jsepCreateMLContext=f=>d.createMLContext(f),t.jsepRegisterMLConstant=(f,h,g,y,v)=>d.registerMLConstant(f,h,g,y,v,t.bj),t.jsepRegisterGraphInput=d.registerGraphInput.bind(d),t.jsepIsGraphInput=d.isGraphInput.bind(d),t.jsepCreateTemporaryTensor=d.createTemporaryTensor.bind(d)}};let m=()=>{let s=(l,d,f)=>(...h)=>{let g=lr,y=d?.();h=l(...h);let v=d?.();return y!==v&&(l=v,f(y),d=f=null),lr!=g?new Promise((w,S)=>{As={resolve:w,reject:S}}):h};(()=>{for(let l of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[l]=s(t[l],()=>t[l],d=>t[l]=d)})(),p!==void 0&&(t._OrtRun=p(t._OrtRun),t._OrtRunWithBinding=p(t._OrtRunWithBinding)),m=void 0};t.asyncInit=()=>{m?.()};var b,_,x=Object.assign({},t),T=(s,l)=>{throw l},I="";(i||a)&&(a?I=self.location.href:typeof document<"u"&&document.currentScript&&(I=document.currentScript.src),fc&&(I=fc),I=I.startsWith("blob:")?"":I.slice(0,I.replace(/[?#].*/,"").lastIndexOf("/")+1),a&&(_=s=>{var l=new XMLHttpRequest;return l.open("GET",s,!1),l.responseType="arraybuffer",l.send(null),new Uint8Array(l.response)}),b=async s=>{if(ye(s))return new Promise((d,f)=>{var h=new XMLHttpRequest;h.open("GET",s,!0),h.responseType="arraybuffer",h.onload=()=>{h.status==200||h.status==0&&h.response?d(h.response):f(h.status)},h.onerror=f,h.send(null)});var l=await fetch(s,{credentials:"same-origin"});if(l.ok)return l.arrayBuffer();throw Error(l.status+" : "+l.url)});var P=console.log.bind(console),$=console.error.bind(console),A=P,C=$;Object.assign(t,x),x=null;var k,z,M,q,X,J,ie,le,me,ne,he,Ze,se,de=t.wasmBinary,xe=!1,ye=s=>s.startsWith("file://");function Ee(){return k.buffer!=q.buffer&&ft(),q}function He(){return k.buffer!=q.buffer&&ft(),X}function Ye(){return k.buffer!=q.buffer&&ft(),J}function Te(){return k.buffer!=q.buffer&&ft(),ie}function B(){return k.buffer!=q.buffer&&ft(),le}function re(){return k.buffer!=q.buffer&&ft(),me}function Re(){return k.buffer!=q.buffer&&ft(),ne}function It(){return k.buffer!=q.buffer&&ft(),se}if(u){let s=function(l){try{var d=l.data,f=d.Zi;if(f==="load"){let h=[];self.onmessage=g=>h.push(g),self.startWorker=()=>{postMessage({Zi:"loaded"});for(let g of h)s(g);self.onmessage=s};for(let g of d.oj)t[g]&&!t[g].proxy||(t[g]=(...y)=>{postMessage({Zi:"callHandler",nj:g,args:y})},g=="print"&&(A=t[g]),g=="printErr"&&(C=t[g]));k=d.Ij,ft(),tt(d.Jj)}else if(f==="run"){X2(d.Yi),Es(d.Yi,0,0,1,0,0),sd(),Ss(d.Yi),at||(tf(),at=!0);try{Y2(d.Ej,d.fj)}catch(h){if(h!="unwind")throw h}}else d.target!=="setimmediate"&&(f==="checkMailbox"?at&&ai():f&&(C(`worker: received unknown command ${f}`),C(d)))}catch(h){throw rf(),h}};var Az=s,tt,at=!1;C=function(...l){l=l.join(" "),console.error(l)},self.alert=function(...l){postMessage({Zi:"alert",text:l.join(" "),Gj:hi()})},self.onunhandledrejection=l=>{throw l.reason||l},self.onmessage=s}function ft(){var s=k.buffer;t.HEAP8=q=new Int8Array(s),t.HEAP16=J=new Int16Array(s),t.HEAPU8=X=new Uint8Array(s),t.HEAPU16=ie=new Uint16Array(s),t.HEAP32=le=new Int32Array(s),t.HEAPU32=me=new Uint32Array(s),t.HEAPF32=ne=new Float32Array(s),t.HEAPF64=se=new Float64Array(s),t.HEAP64=he=new BigInt64Array(s),t.HEAPU64=Ze=new BigUint64Array(s)}function xo(){u?startWorker(t):L.oe()}u||(k=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),ft());var Zn,Jn=0,To=null;function ed(){if(--Jn==0&&To){var s=To;To=null,s()}}function tn(s){throw C(s="Aborted("+s+")"),xe=!0,s=new WebAssembly.RuntimeError(s+". Build with -sASSERTIONS for more info."),r(s),s}function td(){return{a:{sc:K2,Vd:q2,v:Z2,X:J2,b:eI,n:tI,z:rI,r:nI,Nb:oI,t:iI,db:aI,ld:dd,g:Q2,Lb:hd,Bd:md,hd:yd,jd:bd,Cd:_d,zd:vd,sd:wd,yd:xd,nc:Td,id:Id,fd:Sd,Ad:$d,gd:Ad,Hd:sI,ic:lI,$c:cI,Zc:fI,hc:hI,Fa:mI,ha:gI,_c:yI,Kb:II,ad:SI,vd:$I,cd:AI,md:PI,Xc:OI,jc:CI,ud:Ss,Ed:EI,$d:DI,Xd:kI,ne:RI,jb:zI,pa:BI,ed:xs,le:FI,ja:UI,qb:jI,ke:WI,V:HI,Vc:qI,_d:KI,ca:XI,rb:YI,ge:ZI,be:JI,Ea:QI,pd:eS,qd:tS,rd:rS,nd:Vd,od:Gd,Yc:Ud,Jd:oS,Gd:sS,C:uS,Vb:lS,kc:cS,Fd:iS,vb:dS,Dd:fS,dd:pS,_:nS,sb:hS,oc:mS,bd:gS,Ld:yS,Kd:bS,wd:qd,xd:Kd,kd:ys,Mb:Xd,mc:Yd,td:Zd,lc:Jd,Ib:s$,xb:aP,sa:MP,O:FP,M:BP,va:FA,za:i$,yc:QA,Xb:iP,Od:RP,W:wA,y:GS,c:SS,Wc:BS,Ta:MS,f:TS,Aa:LP,i:xS,ea:H$,j:CS,Md:YP,k:OS,w:PS,s:jS,q:o$,Ia:m$,L:JS,oa:A$,la:qS,cc:vA,ab:xA,Sb:TP,gb:cP,Jc:q$,Sc:p$,Gc:J$,bb:V$,Hc:Y$,Ob:XP,ma:jA,Jb:ZS,fc:j$,ub:HP,ia:W$,Kc:B$,I:fA,Ic:K$,Ra:IA,G:X$,mb:S$,fe:Z$,ua:eP,Ha:O$,B:zS,ec:oA,Fc:Q$,Nc:R$,Oc:L$,gc:N$,ee:tA,Sa:T$,Z:YA,eb:UP,Pb:WP,Za:qP,Ua:VP,Mc:z$,pc:KP,_b:VA,aa:a$,J:FS,E:E$,Ca:P$,P:RA,wc:dP,Ec:rA,Lc:M$,S:nA,d:AS,Xa:mA,m:$S,Qc:v$,Ka:EP,xa:F$,Eb:iA,h:IS,Rc:_$,Y:U$,ra:yA,wb:fP,kb:aA,e:ES,Pd:OP,Sd:$P,l:DS,Bc:gA,o:LS,Qd:PP,Dc:sA,Td:SP,Ac:bA,Wd:hP,p:kS,Pa:PA,Cb:AA,Oa:OA,Wb:uP,D:YS,F:VS,N:r$,Va:CP,Rd:AP,Db:hA,fa:KS,ga:RS,La:_P,cb:$$,Ba:tP,de:uA,tb:ZP,Da:XS,uc:vP,_a:bP,$a:yP,Wa:pP,ce:_A,ta:nP,Ud:xP,Zd:XA,ae:SA,Zb:GA,Ma:rP,T:NS,ib:oP,zc:WA,yb:UA,qa:ZA,Ga:eA,Pc:k$,Hb:d$,Tb:wP,ka:y$,na:cA,Tc:l$,je:w$,$:qA,pb:HS,Rb:IP,Qb:kP,tc:DP,Ya:G$,rc:GP,nb:x$,A:e$,U:g$,Gb:h$,Ja:c$,ie:I$,Q:t$,hb:lP,ya:KA,qc:jP,xc:sP,me:WS,u:US,R:f$,ba:n$,Yd:JA,ac:NA,vc:gP,ob:u$,$b:LA,Fb:b$,Yb:HA,he:D$,Ub:mP,bc:TA,fb:NP,Uc:QS,dc:dA,da:zA,Cc:lA,H:pA,lb:C$,Nd:zP,wa:BA,K:MA,Ab:DA,Na:EA,Qa:$A,zb:kA,Bb:CA,x:vS,a:k,Id:gs}}}var ps={1420196:(s,l,d,f,h)=>{if(t===void 0||!t.bj)return 1;if((s=st(Number(s>>>0))).startsWith("./")&&(s=s.substring(2)),!(s=t.bj.get(s)))return 2;if(l=Number(l>>>0),d=Number(d>>>0),f=Number(f>>>0),l+d>s.byteLength)return 3;try{let g=s.subarray(l,l+d);switch(h){case 0:He().set(g,f>>>0);break;case 1:t.Kj?t.Kj(f,g):t.Aj(f,g);break;default:return 4}return 0}catch{return 4}},1421020:(s,l,d)=>{t.jj(s,He().subarray(l>>>0,l+d>>>0))},1421083:()=>t.yj(),1421124:s=>{t.ij(s)},1421160:()=>{t.sj()},1421191:()=>{t.tj()},1421220:()=>{t.xj()},1421245:s=>t.rj(s),1421278:s=>t.vj(s),1421310:(s,l,d)=>{t.hj(Number(s),Number(l),Number(d),!0)},1421373:(s,l,d)=>{t.hj(Number(s),Number(l),Number(d))},1421430:()=>typeof wasmOffsetConverter<"u",1421487:s=>{t.Ye("Abs",s,void 0)},1421538:s=>{t.Ye("Neg",s,void 0)},1421589:s=>{t.Ye("Floor",s,void 0)},1421642:s=>{t.Ye("Ceil",s,void 0)},1421694:s=>{t.Ye("Reciprocal",s,void 0)},1421752:s=>{t.Ye("Sqrt",s,void 0)},1421804:s=>{t.Ye("Exp",s,void 0)},1421855:s=>{t.Ye("Erf",s,void 0)},1421906:s=>{t.Ye("Sigmoid",s,void 0)},1421961:(s,l,d)=>{t.Ye("HardSigmoid",s,{alpha:l,beta:d})},1422040:s=>{t.Ye("Log",s,void 0)},1422091:s=>{t.Ye("Sin",s,void 0)},1422142:s=>{t.Ye("Cos",s,void 0)},1422193:s=>{t.Ye("Tan",s,void 0)},1422244:s=>{t.Ye("Asin",s,void 0)},1422296:s=>{t.Ye("Acos",s,void 0)},1422348:s=>{t.Ye("Atan",s,void 0)},1422400:s=>{t.Ye("Sinh",s,void 0)},1422452:s=>{t.Ye("Cosh",s,void 0)},1422504:s=>{t.Ye("Asinh",s,void 0)},1422557:s=>{t.Ye("Acosh",s,void 0)},1422610:s=>{t.Ye("Atanh",s,void 0)},1422663:s=>{t.Ye("Tanh",s,void 0)},1422715:s=>{t.Ye("Not",s,void 0)},1422766:(s,l,d)=>{t.Ye("Clip",s,{min:l,max:d})},1422835:s=>{t.Ye("Clip",s,void 0)},1422887:(s,l)=>{t.Ye("Elu",s,{alpha:l})},1422945:s=>{t.Ye("Gelu",s,void 0)},1422997:s=>{t.Ye("Relu",s,void 0)},1423049:(s,l)=>{t.Ye("LeakyRelu",s,{alpha:l})},1423113:(s,l)=>{t.Ye("ThresholdedRelu",s,{alpha:l})},1423183:(s,l)=>{t.Ye("Cast",s,{to:l})},1423241:s=>{t.Ye("Add",s,void 0)},1423292:s=>{t.Ye("Sub",s,void 0)},1423343:s=>{t.Ye("Mul",s,void 0)},1423394:s=>{t.Ye("Div",s,void 0)},1423445:s=>{t.Ye("Pow",s,void 0)},1423496:s=>{t.Ye("Equal",s,void 0)},1423549:s=>{t.Ye("Greater",s,void 0)},1423604:s=>{t.Ye("GreaterOrEqual",s,void 0)},1423666:s=>{t.Ye("Less",s,void 0)},1423718:s=>{t.Ye("LessOrEqual",s,void 0)},1423777:(s,l,d,f,h)=>{t.Ye("ReduceMean",s,{keepDims:!!l,noopWithEmptyAxes:!!d,axes:f?Array.from(B().subarray(Number(f)>>>0,Number(h)>>>0)):[]})},1423952:(s,l,d,f,h)=>{t.Ye("ReduceMax",s,{keepDims:!!l,noopWithEmptyAxes:!!d,axes:f?Array.from(B().subarray(Number(f)>>>0,Number(h)>>>0)):[]})},1424126:(s,l,d,f,h)=>{t.Ye("ReduceMin",s,{keepDims:!!l,noopWithEmptyAxes:!!d,axes:f?Array.from(B().subarray(Number(f)>>>0,Number(h)>>>0)):[]})},1424300:(s,l,d,f,h)=>{t.Ye("ReduceProd",s,{keepDims:!!l,noopWithEmptyAxes:!!d,axes:f?Array.from(B().subarray(Number(f)>>>0,Number(h)>>>0)):[]})},1424475:(s,l,d,f,h)=>{t.Ye("ReduceSum",s,{keepDims:!!l,noopWithEmptyAxes:!!d,axes:f?Array.from(B().subarray(Number(f)>>>0,Number(h)>>>0)):[]})},1424649:(s,l,d,f,h)=>{t.Ye("ReduceL1",s,{keepDims:!!l,noopWithEmptyAxes:!!d,axes:f?Array.from(B().subarray(Number(f)>>>0,Number(h)>>>0)):[]})},1424822:(s,l,d,f,h)=>{t.Ye("ReduceL2",s,{keepDims:!!l,noopWithEmptyAxes:!!d,axes:f?Array.from(B().subarray(Number(f)>>>0,Number(h)>>>0)):[]})},1424995:(s,l,d,f,h)=>{t.Ye("ReduceLogSum",s,{keepDims:!!l,noopWithEmptyAxes:!!d,axes:f?Array.from(B().subarray(Number(f)>>>0,Number(h)>>>0)):[]})},1425172:(s,l,d,f,h)=>{t.Ye("ReduceSumSquare",s,{keepDims:!!l,noopWithEmptyAxes:!!d,axes:f?Array.from(B().subarray(Number(f)>>>0,Number(h)>>>0)):[]})},1425352:(s,l,d,f,h)=>{t.Ye("ReduceLogSumExp",s,{keepDims:!!l,noopWithEmptyAxes:!!d,axes:f?Array.from(B().subarray(Number(f)>>>0,Number(h)>>>0)):[]})},1425532:s=>{t.Ye("Where",s,void 0)},1425585:(s,l,d)=>{t.Ye("Transpose",s,{perm:l?Array.from(B().subarray(Number(l)>>>0,Number(d)>>>0)):[]})},1425709:(s,l,d,f)=>{t.Ye("DepthToSpace",s,{blocksize:l,mode:st(d),format:f?"NHWC":"NCHW"})},1425842:(s,l,d,f)=>{t.Ye("DepthToSpace",s,{blocksize:l,mode:st(d),format:f?"NHWC":"NCHW"})},1425975:(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K)=>{t.Ye("ConvTranspose",s,{format:w?"NHWC":"NCHW",autoPad:l,dilations:[d],group:f,kernelShape:[h],pads:[g,y],strides:[v],wIsConst:()=>!!Ee()[S>>>0],outputPadding:O?Array.from(B().subarray(Number(O)>>>0,Number(D)>>>0)):[],outputShape:N?Array.from(B().subarray(Number(N)>>>0,Number(G)>>>0)):[],activation:st(K)})},1426408:(s,l,d,f,h,g,y,v,w,S,O,D,N,G)=>{t.Ye("ConvTranspose",s,{format:v?"NHWC":"NCHW",autoPad:l,dilations:Array.from(B().subarray(Number(d)>>>0,2+(Number(d)>>>0)>>>0)),group:f,kernelShape:Array.from(B().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),pads:Array.from(B().subarray(Number(g)>>>0,4+(Number(g)>>>0)>>>0)),strides:Array.from(B().subarray(Number(y)>>>0,2+(Number(y)>>>0)>>>0)),wIsConst:()=>!!Ee()[w>>>0],outputPadding:S?Array.from(B().subarray(Number(S)>>>0,Number(O)>>>0)):[],outputShape:D?Array.from(B().subarray(Number(D)>>>0,Number(N)>>>0)):[],activation:st(G)})},1427069:(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K)=>{t.Ye("ConvTranspose",s,{format:w?"NHWC":"NCHW",autoPad:l,dilations:[d],group:f,kernelShape:[h],pads:[g,y],strides:[v],wIsConst:()=>!!Ee()[S>>>0],outputPadding:O?Array.from(B().subarray(Number(O)>>>0,Number(D)>>>0)):[],outputShape:N?Array.from(B().subarray(Number(N)>>>0,Number(G)>>>0)):[],activation:st(K)})},1427502:(s,l,d,f,h,g,y,v,w,S,O,D,N,G)=>{t.Ye("ConvTranspose",s,{format:v?"NHWC":"NCHW",autoPad:l,dilations:Array.from(B().subarray(Number(d)>>>0,2+(Number(d)>>>0)>>>0)),group:f,kernelShape:Array.from(B().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),pads:Array.from(B().subarray(Number(g)>>>0,4+(Number(g)>>>0)>>>0)),strides:Array.from(B().subarray(Number(y)>>>0,2+(Number(y)>>>0)>>>0)),wIsConst:()=>!!Ee()[w>>>0],outputPadding:S?Array.from(B().subarray(Number(S)>>>0,Number(O)>>>0)):[],outputShape:D?Array.from(B().subarray(Number(D)>>>0,Number(N)>>>0)):[],activation:st(G)})},1428163:(s,l)=>{t.Ye("GlobalAveragePool",s,{format:l?"NHWC":"NCHW"})},1428254:(s,l,d,f,h,g,y,v,w,S,O,D,N,G)=>{t.Ye("AveragePool",s,{format:G?"NHWC":"NCHW",auto_pad:l,ceil_mode:d,count_include_pad:f,storage_order:h,dilations:g?Array.from(B().subarray(Number(g)>>>0,Number(y)>>>0)):[],kernel_shape:v?Array.from(B().subarray(Number(v)>>>0,Number(w)>>>0)):[],pads:S?Array.from(B().subarray(Number(S)>>>0,Number(O)>>>0)):[],strides:D?Array.from(B().subarray(Number(D)>>>0,Number(N)>>>0)):[]})},1428733:(s,l)=>{t.Ye("GlobalAveragePool",s,{format:l?"NHWC":"NCHW"})},1428824:(s,l,d,f,h,g,y,v,w,S,O,D,N,G)=>{t.Ye("AveragePool",s,{format:G?"NHWC":"NCHW",auto_pad:l,ceil_mode:d,count_include_pad:f,storage_order:h,dilations:g?Array.from(B().subarray(Number(g)>>>0,Number(y)>>>0)):[],kernel_shape:v?Array.from(B().subarray(Number(v)>>>0,Number(w)>>>0)):[],pads:S?Array.from(B().subarray(Number(S)>>>0,Number(O)>>>0)):[],strides:D?Array.from(B().subarray(Number(D)>>>0,Number(N)>>>0)):[]})},1429303:(s,l)=>{t.Ye("GlobalMaxPool",s,{format:l?"NHWC":"NCHW"})},1429390:(s,l,d,f,h,g,y,v,w,S,O,D,N,G)=>{t.Ye("MaxPool",s,{format:G?"NHWC":"NCHW",auto_pad:l,ceil_mode:d,count_include_pad:f,storage_order:h,dilations:g?Array.from(B().subarray(Number(g)>>>0,Number(y)>>>0)):[],kernel_shape:v?Array.from(B().subarray(Number(v)>>>0,Number(w)>>>0)):[],pads:S?Array.from(B().subarray(Number(S)>>>0,Number(O)>>>0)):[],strides:D?Array.from(B().subarray(Number(D)>>>0,Number(N)>>>0)):[]})},1429865:(s,l)=>{t.Ye("GlobalMaxPool",s,{format:l?"NHWC":"NCHW"})},1429952:(s,l,d,f,h,g,y,v,w,S,O,D,N,G)=>{t.Ye("MaxPool",s,{format:G?"NHWC":"NCHW",auto_pad:l,ceil_mode:d,count_include_pad:f,storage_order:h,dilations:g?Array.from(B().subarray(Number(g)>>>0,Number(y)>>>0)):[],kernel_shape:v?Array.from(B().subarray(Number(v)>>>0,Number(w)>>>0)):[],pads:S?Array.from(B().subarray(Number(S)>>>0,Number(O)>>>0)):[],strides:D?Array.from(B().subarray(Number(D)>>>0,Number(N)>>>0)):[]})},1430427:(s,l,d,f,h)=>{t.Ye("Gemm",s,{alpha:l,beta:d,transA:f,transB:h})},1430531:s=>{t.Ye("MatMul",s,void 0)},1430585:(s,l,d,f)=>{t.Ye("ArgMax",s,{keepDims:!!l,selectLastIndex:!!d,axis:f})},1430693:(s,l,d,f)=>{t.Ye("ArgMin",s,{keepDims:!!l,selectLastIndex:!!d,axis:f})},1430801:(s,l)=>{t.Ye("Softmax",s,{axis:l})},1430864:(s,l)=>{t.Ye("Concat",s,{axis:l})},1430924:(s,l,d,f,h)=>{t.Ye("Split",s,{axis:l,numOutputs:d,splitSizes:f?Array.from(B().subarray(Number(f)>>>0,Number(h)>>>0)):[]})},1431080:s=>{t.Ye("Expand",s,void 0)},1431134:(s,l)=>{t.Ye("Gather",s,{axis:Number(l)})},1431205:(s,l)=>{t.Ye("GatherElements",s,{axis:Number(l)})},1431284:(s,l)=>{t.Ye("GatherND",s,{batch_dims:Number(l)})},1431363:(s,l,d,f,h,g,y,v,w,S,O)=>{t.Ye("Resize",s,{antialias:l,axes:d?Array.from(B().subarray(Number(d)>>>0,Number(f)>>>0)):[],coordinateTransformMode:st(h),cubicCoeffA:g,excludeOutside:y,extrapolationValue:v,keepAspectRatioPolicy:st(w),mode:st(S),nearestMode:st(O)})},1431725:(s,l,d,f,h,g,y)=>{t.Ye("Slice",s,{starts:l?Array.from(B().subarray(Number(l)>>>0,Number(d)>>>0)):[],ends:f?Array.from(B().subarray(Number(f)>>>0,Number(h)>>>0)):[],axes:g?Array.from(B().subarray(Number(g)>>>0,Number(y)>>>0)):[]})},1431989:s=>{t.Ye("Tile",s,void 0)},1432041:(s,l,d)=>{t.Ye("InstanceNormalization",s,{epsilon:l,format:d?"NHWC":"NCHW"})},1432155:(s,l,d)=>{t.Ye("InstanceNormalization",s,{epsilon:l,format:d?"NHWC":"NCHW"})},1432269:s=>{t.Ye("Range",s,void 0)},1432322:(s,l)=>{t.Ye("Einsum",s,{equation:st(l)})},1432403:(s,l,d,f,h)=>{t.Ye("Pad",s,{mode:l,value:d,pads:f?Array.from(B().subarray(Number(f)>>>0,Number(h)>>>0)):[]})},1432546:(s,l,d,f,h,g)=>{t.Ye("BatchNormalization",s,{epsilon:l,momentum:d,spatial:!!h,trainingMode:!!f,format:g?"NHWC":"NCHW"})},1432715:(s,l,d,f,h,g)=>{t.Ye("BatchNormalization",s,{epsilon:l,momentum:d,spatial:!!h,trainingMode:!!f,format:g?"NHWC":"NCHW"})},1432884:(s,l,d)=>{t.Ye("CumSum",s,{exclusive:Number(l),reverse:Number(d)})},1432981:(s,l,d)=>{t.Ye("DequantizeLinear",s,{axis:l,blockSize:d})},1433071:(s,l,d,f,h)=>{t.Ye("GridSample",s,{align_corners:l,mode:st(d),padding_mode:st(f),format:h?"NHWC":"NCHW"})},1433241:(s,l,d,f,h)=>{t.Ye("GridSample",s,{align_corners:l,mode:st(d),padding_mode:st(f),format:h?"NHWC":"NCHW"})},1433411:(s,l)=>{t.Ye("ScatterND",s,{reduction:st(l)})},1433496:(s,l,d,f,h,g,y,v,w)=>{t.Ye("Attention",s,{numHeads:l,isUnidirectional:d,maskFilterValue:f,scale:h,doRotary:g,qkvHiddenSizes:y?Array.from(B().subarray(Number(v)>>>0,Number(v)+y>>>0)):[],pastPresentShareBuffer:!!w})},1433768:s=>{t.Ye("BiasAdd",s,void 0)},1433823:s=>{t.Ye("BiasSplitGelu",s,void 0)},1433884:s=>{t.Ye("FastGelu",s,void 0)},1433940:(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y)=>{t.Ye("Conv",s,{format:D?"NHWC":"NCHW",auto_pad:l,dilations:d?Array.from(B().subarray(Number(d)>>>0,Number(f)>>>0)):[],group:h,kernel_shape:g?Array.from(B().subarray(Number(g)>>>0,Number(y)>>>0)):[],pads:v?Array.from(B().subarray(Number(v)>>>0,Number(w)>>>0)):[],strides:S?Array.from(B().subarray(Number(S)>>>0,Number(O)>>>0)):[],w_is_const:()=>!!Ee()[Number(N)>>>0],activation:st(G),activation_params:K?Array.from(Re().subarray(Number(K)>>>0,Number(Y)>>>0)):[]})},1434524:s=>{t.Ye("Gelu",s,void 0)},1434576:(s,l,d,f,h,g,y,v,w)=>{t.Ye("GroupQueryAttention",s,{numHeads:l,kvNumHeads:d,scale:f,softcap:h,doRotary:g,rotaryInterleaved:y,smoothSoftmax:v,localWindowSize:w})},1434793:(s,l,d,f)=>{t.Ye("LayerNormalization",s,{axis:l,epsilon:d,simplified:!!f})},1434904:(s,l,d,f)=>{t.Ye("LayerNormalization",s,{axis:l,epsilon:d,simplified:!!f})},1435015:(s,l,d,f,h,g)=>{t.Ye("MatMulNBits",s,{k:l,n:d,accuracyLevel:f,bits:h,blockSize:g})},1435142:(s,l,d,f,h,g)=>{t.Ye("MultiHeadAttention",s,{numHeads:l,isUnidirectional:d,maskFilterValue:f,scale:h,doRotary:g})},1435301:(s,l)=>{t.Ye("QuickGelu",s,{alpha:l})},1435365:(s,l,d,f,h)=>{t.Ye("RotaryEmbedding",s,{interleaved:!!l,numHeads:d,rotaryEmbeddingDim:f,scale:h})},1435504:(s,l,d)=>{t.Ye("SkipLayerNormalization",s,{epsilon:l,simplified:!!d})},1435606:(s,l,d)=>{t.Ye("SkipLayerNormalization",s,{epsilon:l,simplified:!!d})},1435708:(s,l,d,f)=>{t.Ye("GatherBlockQuantized",s,{gatherAxis:l,quantizeAxis:d,blockSize:f})},1435829:s=>{t.wj(s)},1435863:(s,l)=>t.zj(Number(s),Number(l),t.cj.Cj,t.cj.errors)};function q2(s,l,d){return Ld(async()=>{await t.uj(Number(s),Number(l),Number(d))})}function K2(){return typeof wasmOffsetConverter<"u"}class hs{name="ExitStatus";constructor(l){this.message=`Program terminated with exit(${l})`,this.status=l}}var rd=s=>{s.terminate(),s.onmessage=()=>{}},ms=[],nd=s=>{cn.length==0&&(ld(),ud(cn[0]));var l=cn.pop();if(!l)return 6;Io.push(l),Pn[s.Yi]=l,l.Yi=s.Yi;var d={Zi:"run",Ej:s.Dj,fj:s.fj,Yi:s.Yi};return l.postMessage(d,s.lj),0},ln=0,rt=(s,l,...d)=>{for(var f=2*d.length,h=V(),g=ks(8*f),y=g>>>3,v=0;v<d.length;v++){var w=d[v];typeof w=="bigint"?(he[y+2*v]=1n,he[y+2*v+1]=w):(he[y+2*v]=0n,It()[y+2*v+1>>>0]=w)}return s=nf(s,0,f,g,l),F(h),s};function gs(s){if(u)return rt(0,1,s);if(M=s,!(0<ln)){for(var l of Io)rd(l);for(l of cn)rd(l);cn=[],Io=[],Pn={},xe=!0}T(0,new hs(s))}function od(s){if(u)return rt(1,0,s);ys(s)}var ys=s=>{if(M=s,u)throw od(s),"unwind";gs(s)},cn=[],Io=[],id=[],Pn={},ad=s=>{var l=s.Yi;delete Pn[l],cn.push(s),Io.splice(Io.indexOf(s),1),s.Yi=0,of(l)};function sd(){id.forEach(s=>s())}var ud=s=>new Promise(l=>{s.onmessage=h=>{var g=(h=h.data).Zi;if(h.ej&&h.ej!=hi()){var y=Pn[h.ej];y?y.postMessage(h,h.lj):C(`Internal error! Worker sent a message "${g}" to target pthread ${h.ej}, but that thread no longer exists!`)}else g==="checkMailbox"?ai():g==="spawnThread"?nd(h):g==="cleanupThread"?ad(Pn[h.Fj]):g==="loaded"?(s.loaded=!0,l(s)):g==="alert"?alert(`Thread ${h.Gj}: ${h.text}`):h.target==="setimmediate"?s.postMessage(h):g==="callHandler"?t[h.nj](...h.args):g&&C(`worker sent an unknown command ${g}`)},s.onerror=h=>{throw C(`worker sent an error! ${h.filename}:${h.lineno}: ${h.message}`),h};var d,f=[];for(d of[])t.propertyIsEnumerable(d)&&f.push(d);s.postMessage({Zi:"load",oj:f,Ij:k,Jj:z})});function ld(){var s=new Worker((()=>{let l=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new l("ort.all.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});cn.push(s)}var X2=s=>{ft();var l=re()[s+52>>>2>>>0];s=re()[s+56>>>2>>>0],uf(l,l-s),F(l)},Y2=(s,l)=>{ln=0,s=Ns(s,l),0<ln?M=s:Ds(s)},ni=[],oi=0;function Z2(s){var l=new bs(s>>>=0);if(Ee()[l.Xi+12>>>0]==0){var d=1;Ee()[l.Xi+12>>>0]=d,oi--}return d=0,Ee()[l.Xi+13>>>0]=d,ni.push(l),cf(s),ff(s)}var Qn=0,J2=()=>{U(0,0);var s=ni.pop();lf(s.gj),Qn=0};class bs{constructor(l){this.gj=l,this.Xi=l-24}}function Q2(s){throw Qn||=s>>>0,Qn}var ii=s=>{var l=Qn;if(!l)return $o(0),0;var d=new bs(l);re()[d.Xi+16>>>2>>>0]=l;var f=re()[d.Xi+4>>>2>>>0];if(!f)return $o(0),l;for(var h of s){if(h===0||h===f)break;if(df(h,f,d.Xi+16))return $o(h),l}return $o(f),l};function eI(){return ii([])}function tI(s){return ii([s>>>0])}function rI(s,l){return ii([s>>>0,l>>>0])}function nI(s,l,d){return ii([s>>>0,l>>>0,d>>>0])}var oI=()=>{var s=ni.pop();s||tn("no exception to throw");var l=s.gj;if(Ee()[s.Xi+13>>>0]==0){ni.push(s);var d=1;Ee()[s.Xi+13>>>0]=d,d=0,Ee()[s.Xi+12>>>0]=d,oi++}throw Qn=l};function iI(s,l,d){var f=new bs(s>>>=0);throw l>>>=0,d>>>=0,re()[f.Xi+16>>>2>>>0]=0,re()[f.Xi+4>>>2>>>0]=l,re()[f.Xi+8>>>2>>>0]=d,oi++,Qn=s}var aI=()=>oi;function cd(s,l,d,f){return u?rt(2,1,s,l,d,f):dd(s,l,d,f)}function dd(s,l,d,f){if(s>>>=0,d>>>=0,f>>>=0,c===void 0)return 6;var h=[];return u&&h.length===0?cd(s,l>>>=0,d,f):(s={Dj:d,Yi:s,fj:f,lj:h},u?(s.Zi="spawnThread",postMessage(s,h),0):nd(s))}var fd=typeof TextDecoder<"u"?new TextDecoder:void 0,pd=(s,l=0,d=NaN)=>{var f=(l>>>=0)+d;for(d=l;s[d]&&!(d>=f);)++d;if(16<d-l&&s.buffer&&fd)return fd.decode(s.buffer instanceof ArrayBuffer?s.subarray(l,d):s.slice(l,d));for(f="";l<d;){var h=s[l++];if(128&h){var g=63&s[l++];if((224&h)==192)f+=String.fromCharCode((31&h)<<6|g);else{var y=63&s[l++];65536>(h=(240&h)==224?(15&h)<<12|g<<6|y:(7&h)<<18|g<<12|y<<6|63&s[l++])?f+=String.fromCharCode(h):(h-=65536,f+=String.fromCharCode(55296|h>>10,56320|1023&h))}}else f+=String.fromCharCode(h)}return f},st=(s,l)=>(s>>>=0)?pd(He(),s,l):"";function hd(s,l,d){return u?rt(3,1,s,l,d):0}function md(s,l){if(u)return rt(4,1,s,l)}var gd=s=>{for(var l=0,d=0;d<s.length;++d){var f=s.charCodeAt(d);127>=f?l++:2047>=f?l+=2:55296<=f&&57343>=f?(l+=4,++d):l+=3}return l},eo=(s,l,d)=>{var f=He();if(l>>>=0,0<d){var h=l;d=l+d-1;for(var g=0;g<s.length;++g){var y=s.charCodeAt(g);if(55296<=y&&57343>=y&&(y=65536+((1023&y)<<10)|1023&s.charCodeAt(++g)),127>=y){if(l>=d)break;f[l++>>>0]=y}else{if(2047>=y){if(l+1>=d)break;f[l++>>>0]=192|y>>6}else{if(65535>=y){if(l+2>=d)break;f[l++>>>0]=224|y>>12}else{if(l+3>=d)break;f[l++>>>0]=240|y>>18,f[l++>>>0]=128|y>>12&63}f[l++>>>0]=128|y>>6&63}f[l++>>>0]=128|63&y}}f[l>>>0]=0,s=l-h}else s=0;return s};function yd(s,l){if(u)return rt(5,1,s,l)}function bd(s,l,d){if(u)return rt(6,1,s,l,d)}function _d(s,l,d){return u?rt(7,1,s,l,d):0}function vd(s,l){if(u)return rt(8,1,s,l)}function wd(s,l,d){if(u)return rt(9,1,s,l,d)}function xd(s,l,d,f){if(u)return rt(10,1,s,l,d,f)}function Td(s,l,d,f){if(u)return rt(11,1,s,l,d,f)}function Id(s,l,d,f){if(u)return rt(12,1,s,l,d,f)}function Sd(s){if(u)return rt(13,1,s)}function $d(s,l){if(u)return rt(14,1,s,l)}function Ad(s,l,d){if(u)return rt(15,1,s,l,d)}var Pd,dn,sI=()=>tn(""),ur=s=>{for(var l="";He()[s>>>0];)l+=Pd[He()[s++>>>0]];return l},_s={},vs={},uI={};function rn(s,l,d={}){return function(f,h,g={}){var y=h.name;if(!f)throw new dn(`type "${y}" must have a positive integer typeid pointer`);if(vs.hasOwnProperty(f)){if(g.pj)return;throw new dn(`Cannot register type '${y}' twice`)}vs[f]=h,delete uI[f],_s.hasOwnProperty(f)&&(h=_s[f],delete _s[f],h.forEach(v=>v()))}(s,l,d)}var Od=(s,l,d)=>{switch(l){case 1:return d?f=>Ee()[f>>>0]:f=>He()[f>>>0];case 2:return d?f=>Ye()[f>>>1>>>0]:f=>Te()[f>>>1>>>0];case 4:return d?f=>B()[f>>>2>>>0]:f=>re()[f>>>2>>>0];case 8:return d?f=>he[f>>>3]:f=>Ze[f>>>3];default:throw new TypeError(`invalid integer width (${l}): ${s}`)}};function lI(s,l,d){d>>>=0,rn(s>>>=0,{name:l=ur(l>>>0),fromWireType:f=>f,toWireType:function(f,h){if(typeof h!="bigint"&&typeof h!="number")throw h=h===null?"null":(f=typeof h)=="object"||f==="array"||f==="function"?h.toString():""+h,new TypeError(`Cannot convert "${h}" to ${this.name}`);return typeof h=="number"&&(h=BigInt(h)),h},$i:fn,readValueFromPointer:Od(l,d,l.indexOf("u")==-1),aj:null})}var fn=8;function cI(s,l,d,f){rn(s>>>=0,{name:l=ur(l>>>0),fromWireType:function(h){return!!h},toWireType:function(h,g){return g?d:f},$i:fn,readValueFromPointer:function(h){return this.fromWireType(He()[h>>>0])},aj:null})}var ws=[],nn=[];function xs(s){9<(s>>>=0)&&--nn[s+1]==0&&(nn[s]=void 0,ws.push(s))}var kt=s=>{if(!s)throw new dn("Cannot use deleted val. handle = "+s);return nn[s]},Ft=s=>{switch(s){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let l=ws.pop()||nn.length;return nn[l]=s,nn[l+1]=1,l}};function Ts(s){return this.fromWireType(re()[s>>>2>>>0])}var dI={name:"emscripten::val",fromWireType:s=>{var l=kt(s);return xs(s),l},toWireType:(s,l)=>Ft(l),$i:fn,readValueFromPointer:Ts,aj:null};function fI(s){return rn(s>>>0,dI)}var pI=(s,l)=>{switch(l){case 4:return function(d){return this.fromWireType(Re()[d>>>2>>>0])};case 8:return function(d){return this.fromWireType(It()[d>>>3>>>0])};default:throw new TypeError(`invalid float width (${l}): ${s}`)}};function hI(s,l,d){d>>>=0,rn(s>>>=0,{name:l=ur(l>>>0),fromWireType:f=>f,toWireType:(f,h)=>h,$i:fn,readValueFromPointer:pI(l,d),aj:null})}function mI(s,l,d,f,h){if(s>>>=0,d>>>=0,l=ur(l>>>0),h===-1&&(h=4294967295),h=v=>v,f===0){var g=32-8*d;h=v=>v<<g>>>g}var y=l.includes("unsigned")?function(v,w){return w>>>0}:function(v,w){return w};rn(s,{name:l,fromWireType:h,toWireType:y,$i:fn,readValueFromPointer:Od(l,d,f!==0),aj:null})}function gI(s,l,d){function f(g){var y=re()[g>>>2>>>0];return g=re()[g+4>>>2>>>0],new h(Ee().buffer,g,y)}var h=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][l];rn(s>>>=0,{name:d=ur(d>>>0),fromWireType:f,$i:fn,readValueFromPointer:f},{pj:!0})}function yI(s,l){rn(s>>>=0,{name:l=ur(l>>>0),fromWireType:function(d){for(var f,h=re()[d>>>2>>>0],g=d+4,y=g,v=0;v<=h;++v){var w=g+v;v!=h&&He()[w>>>0]!=0||(y=st(y,w-y),f===void 0?f=y:(f+="\0",f+=y),y=w+1)}return cr(d),f},toWireType:function(d,f){f instanceof ArrayBuffer&&(f=new Uint8Array(f));var h=typeof f=="string";if(!(h||f instanceof Uint8Array||f instanceof Uint8ClampedArray||f instanceof Int8Array))throw new dn("Cannot pass non-string to std::string");var g=h?gd(f):f.length,y=mi(4+g+1),v=y+4;if(re()[y>>>2>>>0]=g,h)eo(f,v,g+1);else if(h)for(h=0;h<g;++h){var w=f.charCodeAt(h);if(255<w)throw cr(y),new dn("String has UTF-16 code units that do not fit in 8 bits");He()[v+h>>>0]=w}else for(h=0;h<g;++h)He()[v+h>>>0]=f[h];return d!==null&&d.push(cr,y),y},$i:fn,readValueFromPointer:Ts,aj(d){cr(d)}})}var Cd=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,bI=(s,l)=>{for(var d=s>>1,f=d+l/2;!(d>=f)&&Te()[d>>>0];)++d;if(32<(d<<=1)-s&&Cd)return Cd.decode(He().slice(s,d));for(d="",f=0;!(f>=l/2);++f){var h=Ye()[s+2*f>>>1>>>0];if(h==0)break;d+=String.fromCharCode(h)}return d},_I=(s,l,d)=>{if(d??=2147483647,2>d)return 0;var f=l;d=(d-=2)<2*s.length?d/2:s.length;for(var h=0;h<d;++h){var g=s.charCodeAt(h);Ye()[l>>>1>>>0]=g,l+=2}return Ye()[l>>>1>>>0]=0,l-f},vI=s=>2*s.length,wI=(s,l)=>{for(var d=0,f="";!(d>=l/4);){var h=B()[s+4*d>>>2>>>0];if(h==0)break;++d,65536<=h?(h-=65536,f+=String.fromCharCode(55296|h>>10,56320|1023&h)):f+=String.fromCharCode(h)}return f},xI=(s,l,d)=>{if(l>>>=0,d??=2147483647,4>d)return 0;var f=l;d=f+d-4;for(var h=0;h<s.length;++h){var g=s.charCodeAt(h);if(55296<=g&&57343>=g&&(g=65536+((1023&g)<<10)|1023&s.charCodeAt(++h)),B()[l>>>2>>>0]=g,(l+=4)+4>d)break}return B()[l>>>2>>>0]=0,l-f},TI=s=>{for(var l=0,d=0;d<s.length;++d){var f=s.charCodeAt(d);55296<=f&&57343>=f&&++d,l+=4}return l};function II(s,l,d){if(s>>>=0,l>>>=0,d=ur(d>>>=0),l===2)var f=bI,h=_I,g=vI,y=v=>Te()[v>>>1>>>0];else l===4&&(f=wI,h=xI,g=TI,y=v=>re()[v>>>2>>>0]);rn(s,{name:d,fromWireType:v=>{for(var w,S=re()[v>>>2>>>0],O=v+4,D=0;D<=S;++D){var N=v+4+D*l;D!=S&&y(N)!=0||(O=f(O,N-O),w===void 0?w=O:(w+="\0",w+=O),O=N+l)}return cr(v),w},toWireType:(v,w)=>{if(typeof w!="string")throw new dn(`Cannot pass non-string to C++ string type ${d}`);var S=g(w),O=mi(4+S+l);return re()[O>>>2>>>0]=S/l,h(w,O+4,S+l),v!==null&&v.push(cr,O),O},$i:fn,readValueFromPointer:Ts,aj(v){cr(v)}})}function SI(s,l){rn(s>>>=0,{qj:!0,name:l=ur(l>>>0),$i:0,fromWireType:()=>{},toWireType:()=>{}})}function $I(s){Es(s>>>0,!a,1,!i,131072,!1),sd()}var Is=s=>{if(!xe)try{if(s(),!(0<ln))try{u?Ds(M):ys(M)}catch(l){l instanceof hs||l=="unwind"||T(0,l)}}catch(l){l instanceof hs||l=="unwind"||T(0,l)}};function Ss(s){s>>>=0,typeof Atomics.Hj=="function"&&(Atomics.Hj(B(),s>>>2,s).value.then(ai),s+=128,Atomics.store(B(),s>>>2,1))}var ai=()=>{var s=hi();s&&(Ss(s),Is(sf))};function AI(s,l){(s>>>=0)==l>>>0?setTimeout(ai):u?postMessage({ej:s,Zi:"checkMailbox"}):(s=Pn[s])&&s.postMessage({Zi:"checkMailbox"})}var $s=[];function PI(s,l,d,f,h){for(l>>>=0,f/=2,$s.length=f,d=h>>>0>>>3,h=0;h<f;h++)$s[h]=he[d+2*h]?he[d+2*h+1]:It()[d+2*h+1>>>0];return(l?ps[l]:wS[s])(...$s)}var OI=()=>{ln=0};function CI(s){s>>>=0,u?postMessage({Zi:"cleanupThread",Fj:s}):ad(Pn[s])}function EI(s){}var si=(s,l)=>{var d=vs[s];if(d===void 0)throw s=ef(s),d=ur(s),cr(s),new dn(`${l} has unknown type ${d}`);return d},Ed=(s,l,d)=>{var f=[];return s=s.toWireType(f,d),f.length&&(re()[l>>>2>>>0]=Ft(f)),s};function DI(s,l,d){return l>>>=0,d>>>=0,s=kt(s>>>0),l=si(l,"emval::as"),Ed(l,d,s)}function kI(s,l){return l>>>=0,s=kt(s>>>0),(l=si(l,"emval::as")).toWireType(null,s)}var ui=s=>{try{s()}catch(l){tn(l)}},pn=0,lr=null,Dd=0,li=[],kd={},Nd={},NI=0,As=null,LI=[];function Ld(s){return function(l){if(!xe){if(pn===0){var d=!1,f=!1;l((h=0)=>{if(!xe&&(Dd=h,d=!0,f)){pn=2,ui(()=>jm(lr)),typeof MainLoop<"u"&&MainLoop.mj&&MainLoop.resume(),h=!1;try{var g=function(){var w=B()[lr+8>>>2>>>0];return w=L[Nd[w]],--ln,w()}()}catch(w){g=w,h=!0}var y=!1;if(!lr){var v=As;v&&(As=null,(h?v.reject:v.resolve)(g),y=!0)}if(h&&!y)throw g}}),f=!0,d||(pn=1,lr=function(){var h=mi(65548),g=h+12;re()[h>>>2>>>0]=g,re()[h+4>>>2>>>0]=g+65536,g=li[0];var y=kd[g];return y===void 0&&(y=NI++,kd[g]=y,Nd[y]=g),g=y,B()[h+8>>>2>>>0]=g,h}(),typeof MainLoop<"u"&&MainLoop.mj&&MainLoop.pause(),ui(()=>Gm(lr)))}else pn===2?(pn=0,ui(Wm),cr(lr),lr=null,LI.forEach(Is)):tn(`invalid state: ${pn}`);return Dd}}(l=>{s().then(l)})}function RI(s){return s>>>=0,Ld(async()=>{var l=await kt(s);return Ft(l)})}var ci=[];function zI(s,l,d,f){return d>>>=0,f>>>=0,(s=ci[s>>>0])(null,l=kt(l>>>0),d,f)}var MI={},di=s=>{var l=MI[s];return l===void 0?ur(s):l};function BI(s,l,d,f,h){return d>>>=0,f>>>=0,h>>>=0,(s=ci[s>>>0])(l=kt(l>>>0),l[d=di(d)],f,h)}var Rd=()=>typeof globalThis=="object"?globalThis:Function("return this")();function FI(s){return(s>>>=0)==0?Ft(Rd()):(s=di(s),Ft(Rd()[s]))}var VI=s=>{var l=ci.length;return ci.push(s),l},GI=(s,l)=>{for(var d=Array(s),f=0;f<s;++f)d[f]=si(re()[l+4*f>>>2>>>0],"parameter "+f);return d},zd=(s,l)=>Object.defineProperty(l,"name",{value:s});function UI(s,l,d){var f=(l=GI(s,l>>>0)).shift();s--;var h=`return function (obj, func, destructorsRef, args) {
`,g=0,y=[];d===0&&y.push("obj");for(var v=["retType"],w=[f],S=0;S<s;++S)y.push("arg"+S),v.push("argType"+S),w.push(l[S]),h+=`  var arg${S} = argType${S}.readValueFromPointer(args${g?"+"+g:""});
`,g+=l[S].$i;return h+=`  var rv = ${d===1?"new func":"func.call"}(${y.join(", ")});
`,f.qj||(v.push("emval_returnValue"),w.push(Ed),h+=`  return emval_returnValue(retType, destructorsRef, rv);
`),v.push(h+`};
`),s=function(O){var D=Function;if(!(D instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof D} which is not a function`);var N=zd(D.name||"unknownFunctionName",function(){});return N.prototype=D.prototype,N=new N,(O=D.apply(N,O))instanceof Object?O:N}(v)(...w),d=`methodCaller<(${l.map(O=>O.name).join(", ")}) => ${f.name}>`,VI(zd(d,s))}function jI(s){return s=di(s>>>0),Ft(t[s])}function WI(s,l){return l>>>=0,s=kt(s>>>0),l=kt(l),Ft(s[l])}function HI(s){9<(s>>>=0)&&(nn[s+1]+=1)}function qI(){return Ft([])}function KI(s){s=kt(s>>>0);for(var l=Array(s.length),d=0;d<s.length;d++)l[d]=s[d];return Ft(l)}function XI(s){return Ft(di(s>>>0))}function YI(){return Ft({})}function ZI(s){for(var l=kt(s>>>=0);l.length;){var d=l.pop();l.pop()(d)}xs(s)}function JI(s,l,d){l>>>=0,d>>>=0,s=kt(s>>>0),l=kt(l),d=kt(d),s[l]=d}function QI(s,l){return l>>>=0,s=(s=si(s>>>0,"_emval_take_value")).readValueFromPointer(l),Ft(s)}function eS(s,l){s=-9007199254740992>s||9007199254740992<s?NaN:Number(s),l>>>=0,s=new Date(1e3*s),B()[l>>>2>>>0]=s.getUTCSeconds(),B()[l+4>>>2>>>0]=s.getUTCMinutes(),B()[l+8>>>2>>>0]=s.getUTCHours(),B()[l+12>>>2>>>0]=s.getUTCDate(),B()[l+16>>>2>>>0]=s.getUTCMonth(),B()[l+20>>>2>>>0]=s.getUTCFullYear()-1900,B()[l+24>>>2>>>0]=s.getUTCDay(),s=(s.getTime()-Date.UTC(s.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,B()[l+28>>>2>>>0]=s}var Md=s=>s%4==0&&(s%100!=0||s%400==0),Bd=[0,31,60,91,121,152,182,213,244,274,305,335],Fd=[0,31,59,90,120,151,181,212,243,273,304,334];function tS(s,l){s=-9007199254740992>s||9007199254740992<s?NaN:Number(s),l>>>=0,s=new Date(1e3*s),B()[l>>>2>>>0]=s.getSeconds(),B()[l+4>>>2>>>0]=s.getMinutes(),B()[l+8>>>2>>>0]=s.getHours(),B()[l+12>>>2>>>0]=s.getDate(),B()[l+16>>>2>>>0]=s.getMonth(),B()[l+20>>>2>>>0]=s.getFullYear()-1900,B()[l+24>>>2>>>0]=s.getDay();var d=(Md(s.getFullYear())?Bd:Fd)[s.getMonth()]+s.getDate()-1|0;B()[l+28>>>2>>>0]=d,B()[l+36>>>2>>>0]=-60*s.getTimezoneOffset(),d=new Date(s.getFullYear(),6,1).getTimezoneOffset();var f=new Date(s.getFullYear(),0,1).getTimezoneOffset();s=0|(d!=f&&s.getTimezoneOffset()==Math.min(f,d)),B()[l+32>>>2>>>0]=s}function rS(s){s>>>=0;var l=new Date(B()[s+20>>>2>>>0]+1900,B()[s+16>>>2>>>0],B()[s+12>>>2>>>0],B()[s+8>>>2>>>0],B()[s+4>>>2>>>0],B()[s>>>2>>>0],0),d=B()[s+32>>>2>>>0],f=l.getTimezoneOffset(),h=new Date(l.getFullYear(),6,1).getTimezoneOffset(),g=new Date(l.getFullYear(),0,1).getTimezoneOffset(),y=Math.min(g,h);return 0>d?B()[s+32>>>2>>>0]=+(h!=g&&y==f):0<d!=(y==f)&&(h=Math.max(g,h),l.setTime(l.getTime()+6e4*((0<d?y:h)-f))),B()[s+24>>>2>>>0]=l.getDay(),d=(Md(l.getFullYear())?Bd:Fd)[l.getMonth()]+l.getDate()-1|0,B()[s+28>>>2>>>0]=d,B()[s>>>2>>>0]=l.getSeconds(),B()[s+4>>>2>>>0]=l.getMinutes(),B()[s+8>>>2>>>0]=l.getHours(),B()[s+12>>>2>>>0]=l.getDate(),B()[s+16>>>2>>>0]=l.getMonth(),B()[s+20>>>2>>>0]=l.getYear(),s=l.getTime(),BigInt(isNaN(s)?-1:s/1e3)}function Vd(s,l,d,f,h,g,y){return u?rt(16,1,s,l,d,f,h,g,y):-52}function Gd(s,l,d,f,h,g){if(u)return rt(17,1,s,l,d,f,h,g)}var So={},nS=()=>performance.timeOrigin+performance.now();function Ud(s,l){if(u)return rt(18,1,s,l);if(So[s]&&(clearTimeout(So[s].id),delete So[s]),!l)return 0;var d=setTimeout(()=>{delete So[s],Is(()=>af(s,performance.timeOrigin+performance.now()))},l);return So[s]={id:d,Nj:l},0}function oS(s,l,d,f){s>>>=0,l>>>=0,d>>>=0,f>>>=0;var h=new Date().getFullYear(),g=new Date(h,0,1).getTimezoneOffset();h=new Date(h,6,1).getTimezoneOffset();var y=Math.max(g,h);re()[s>>>2>>>0]=60*y,B()[l>>>2>>>0]=+(g!=h),s=(l=v=>{var w=Math.abs(v);return`UTC${0<=v?"-":"+"}${String(Math.floor(w/60)).padStart(2,"0")}${String(w%60).padStart(2,"0")}`})(g),l=l(h),h<g?(eo(s,d,17),eo(l,f,17)):(eo(s,f,17),eo(l,d,17))}var iS=()=>Date.now(),aS=1;function sS(s,l,d){if(!(0<=s&&3>=s))return 28;if(s===0)s=Date.now();else{if(!aS)return 52;s=performance.timeOrigin+performance.now()}return he[d>>>0>>>3]=BigInt(Math.round(1e6*s)),0}var Ps=[],jd=(s,l)=>{Ps.length=0;for(var d;d=He()[s++>>>0];){var f=d!=105;l+=(f&=d!=112)&&l%8?4:0,Ps.push(d==112?re()[l>>>2>>>0]:d==106?he[l>>>3]:d==105?B()[l>>>2>>>0]:It()[l>>>3>>>0]),l+=f?8:4}return Ps};function uS(s,l,d){return s>>>=0,l=jd(l>>>0,d>>>0),ps[s](...l)}function lS(s,l,d){return s>>>=0,l=jd(l>>>0,d>>>0),ps[s](...l)}var cS=()=>{};function dS(s,l){return C(st(s>>>0,l>>>0))}var fS=()=>{throw ln+=1,"unwind"};function pS(){return 4294901760}var hS=()=>navigator.hardwareConcurrency;function mS(){return tn("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function gS(s){s>>>=0;var l=He().length;if(s<=l||4294901760<s)return!1;for(var d=1;4>=d;d*=2){var f=l*(1+.2/d);f=Math.min(f,s+100663296);e:{f=(Math.min(4294901760,65536*Math.ceil(Math.max(s,f)/65536))-k.buffer.byteLength+65535)/65536|0;try{k.grow(f),ft();var h=1;break e}catch{}h=void 0}if(h)return!0}return!1}var fi=()=>(tn("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),to={},Wd=s=>{s.forEach(l=>{var d=fi();d&&(to[d]=l)})};function yS(){var s=Error().stack.toString().split(`
`);return s[0]=="Error"&&s.shift(),Wd(s),to.kj=fi(),to.Bj=s,to.kj}function bS(s,l,d){if(s>>>=0,l>>>=0,to.kj==s)var f=to.Bj;else(f=Error().stack.toString().split(`
`))[0]=="Error"&&f.shift(),Wd(f);for(var h=3;f[h]&&fi()!=s;)++h;for(s=0;s<d&&f[s+h];++s)B()[l+4*s>>>2>>>0]=fi();return s}var Os,Cs={},Hd=()=>{if(!Os){var s,l={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(s in Cs)Cs[s]===void 0?delete l[s]:l[s]=Cs[s];var d=[];for(s in l)d.push(`${s}=${l[s]}`);Os=d}return Os};function qd(s,l){if(u)return rt(19,1,s,l);s>>>=0,l>>>=0;var d=0;return Hd().forEach((f,h)=>{var g=l+d;for(h=re()[s+4*h>>>2>>>0]=g,g=0;g<f.length;++g)Ee()[h++>>>0]=f.charCodeAt(g);Ee()[h>>>0]=0,d+=f.length+1}),0}function Kd(s,l){if(u)return rt(20,1,s,l);s>>>=0,l>>>=0;var d=Hd();re()[s>>>2>>>0]=d.length;var f=0;return d.forEach(h=>f+=h.length+1),re()[l>>>2>>>0]=f,0}function Xd(s){return u?rt(21,1,s):52}function Yd(s,l,d,f){return u?rt(22,1,s,l,d,f):52}function Zd(s,l,d,f){return u?rt(23,1,s,l,d,f):70}var _S=[null,[],[]];function Jd(s,l,d,f){if(u)return rt(24,1,s,l,d,f);l>>>=0,d>>>=0,f>>>=0;for(var h=0,g=0;g<d;g++){var y=re()[l>>>2>>>0],v=re()[l+4>>>2>>>0];l+=8;for(var w=0;w<v;w++){var S=He()[y+w>>>0],O=_S[s];S===0||S===10?((s===1?A:C)(pd(O)),O.length=0):O.push(S)}h+=v}return re()[f>>>2>>>0]=h,0}function vS(s){return s>>>0}u||function(){for(var s=t.numThreads-1;s--;)ld();ms.unshift(()=>{Jn++,function(l){u?l():Promise.all(cn.map(ud)).then(l)}(()=>ed())})}();for(var Qd=Array(256),pi=0;256>pi;++pi)Qd[pi]=String.fromCharCode(pi);Pd=Qd,dn=t.BindingError=class extends Error{constructor(s){super(s),this.name="BindingError"}},t.InternalError=class extends Error{constructor(s){super(s),this.name="InternalError"}},nn.push(0,1,void 0,1,null,1,!0,1,!1,1),t.count_emval_handles=()=>nn.length/2-5-ws.length;var L,wS=[gs,od,cd,hd,md,yd,bd,_d,vd,wd,xd,Td,Id,Sd,$d,Ad,Vd,Gd,Ud,qd,Kd,Xd,Yd,Zd,Jd];(async function(){function s(f,h){return L=f.exports,L=function(){var g=L,y={};for(let[v,w]of Object.entries(g))y[v]=typeof w=="function"?(...S)=>{li.push(v);try{return w(...S)}finally{xe||(li.pop(),lr&&pn===1&&li.length===0&&(pn=0,ln+=1,ui(Um),typeof Fibers<"u"&&Fibers.Oj()))}}:w;return y}(),L=function(){var g=L,y=w=>S=>w(S)>>>0,v=w=>()=>w()>>>0;return(g=Object.assign({},g)).pe=y(g.pe),g.Ue=v(g.Ue),g.We=y(g.We),g.jf=y(g.jf),g.kf=v(g.kf),g.of=y(g.of),g}(),id.push(L.Xe),z=h,ed(),L}Jn++;var l=td();if(t.instantiateWasm)return new Promise(f=>{t.instantiateWasm(l,(h,g)=>{s(h,g),f(h.exports)})});if(u)return new Promise(f=>{tt=h=>{var g=new WebAssembly.Instance(h,td());f(s(g,h))}});Zn??=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",I):I+"ort-wasm-simd-threaded.jsep.wasm":new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href;try{var d=await async function(f){var h=Zn;if(!de&&typeof WebAssembly.instantiateStreaming=="function"&&!ye(h))try{var g=fetch(h,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(g,f)}catch(y){C(`wasm streaming compile failed: ${y}`),C("falling back to ArrayBuffer instantiation")}return async function(y,v){try{var w=await async function(S){if(!de)try{var O=await b(S);return new Uint8Array(O)}catch{}if(S==Zn&&de)S=new Uint8Array(de);else{if(!_)throw"both async and sync fetching of the wasm failed";S=_(S)}return S}(y);return await WebAssembly.instantiate(w,v)}catch(S){C(`failed to asynchronously prepare wasm: ${S}`),tn(S)}}(h,f)}(l);return s(d.instance,d.module)}catch(f){return r(f),Promise.reject(f)}})();var ef=s=>(ef=L.pe)(s),tf=()=>(tf=L.qe)();t._OrtInit=(s,l)=>(t._OrtInit=L.re)(s,l),t._OrtGetLastError=(s,l)=>(t._OrtGetLastError=L.se)(s,l),t._OrtCreateSessionOptions=(s,l,d,f,h,g,y,v,w,S)=>(t._OrtCreateSessionOptions=L.te)(s,l,d,f,h,g,y,v,w,S),t._OrtAppendExecutionProvider=(s,l,d,f,h)=>(t._OrtAppendExecutionProvider=L.ue)(s,l,d,f,h),t._OrtAddFreeDimensionOverride=(s,l,d)=>(t._OrtAddFreeDimensionOverride=L.ve)(s,l,d),t._OrtAddSessionConfigEntry=(s,l,d)=>(t._OrtAddSessionConfigEntry=L.we)(s,l,d),t._OrtReleaseSessionOptions=s=>(t._OrtReleaseSessionOptions=L.xe)(s),t._OrtCreateSession=(s,l,d)=>(t._OrtCreateSession=L.ye)(s,l,d),t._OrtReleaseSession=s=>(t._OrtReleaseSession=L.ze)(s),t._OrtGetInputOutputCount=(s,l,d)=>(t._OrtGetInputOutputCount=L.Ae)(s,l,d),t._OrtGetInputName=(s,l)=>(t._OrtGetInputName=L.Be)(s,l),t._OrtGetOutputName=(s,l)=>(t._OrtGetOutputName=L.Ce)(s,l),t._OrtFree=s=>(t._OrtFree=L.De)(s),t._OrtCreateTensor=(s,l,d,f,h,g)=>(t._OrtCreateTensor=L.Ee)(s,l,d,f,h,g),t._OrtGetTensorData=(s,l,d,f,h)=>(t._OrtGetTensorData=L.Fe)(s,l,d,f,h),t._OrtReleaseTensor=s=>(t._OrtReleaseTensor=L.Ge)(s),t._OrtCreateRunOptions=(s,l,d,f)=>(t._OrtCreateRunOptions=L.He)(s,l,d,f),t._OrtAddRunConfigEntry=(s,l,d)=>(t._OrtAddRunConfigEntry=L.Ie)(s,l,d),t._OrtReleaseRunOptions=s=>(t._OrtReleaseRunOptions=L.Je)(s),t._OrtCreateBinding=s=>(t._OrtCreateBinding=L.Ke)(s),t._OrtBindInput=(s,l,d)=>(t._OrtBindInput=L.Le)(s,l,d),t._OrtBindOutput=(s,l,d,f)=>(t._OrtBindOutput=L.Me)(s,l,d,f),t._OrtClearBoundOutputs=s=>(t._OrtClearBoundOutputs=L.Ne)(s),t._OrtReleaseBinding=s=>(t._OrtReleaseBinding=L.Oe)(s),t._OrtRunWithBinding=(s,l,d,f,h)=>(t._OrtRunWithBinding=L.Pe)(s,l,d,f,h),t._OrtRun=(s,l,d,f,h,g,y,v)=>(t._OrtRun=L.Qe)(s,l,d,f,h,g,y,v),t._OrtEndProfiling=s=>(t._OrtEndProfiling=L.Re)(s),t._JsepOutput=(s,l,d)=>(t._JsepOutput=L.Se)(s,l,d),t._JsepGetNodeName=s=>(t._JsepGetNodeName=L.Te)(s);var hi=()=>(hi=L.Ue)(),cr=t._free=s=>(cr=t._free=L.Ve)(s),mi=t._malloc=s=>(mi=t._malloc=L.We)(s),Es=(s,l,d,f,h,g)=>(Es=L.Ze)(s,l,d,f,h,g),rf=()=>(rf=L._e)(),nf=(s,l,d,f,h)=>(nf=L.$e)(s,l,d,f,h),of=s=>(of=L.af)(s),Ds=s=>(Ds=L.bf)(s),af=(s,l)=>(af=L.cf)(s,l),sf=()=>(sf=L.df)(),U=(s,l)=>(U=L.ef)(s,l),$o=s=>($o=L.ff)(s),uf=(s,l)=>(uf=L.gf)(s,l),F=s=>(F=L.hf)(s),ks=s=>(ks=L.jf)(s),V=()=>(V=L.kf)(),lf=s=>(lf=L.lf)(s),cf=s=>(cf=L.mf)(s),df=(s,l,d)=>(df=L.nf)(s,l,d),ff=s=>(ff=L.of)(s),pf=t.dynCall_vii=(s,l,d)=>(pf=t.dynCall_vii=L.pf)(s,l,d),hf=t.dynCall_iiii=(s,l,d,f)=>(hf=t.dynCall_iiii=L.qf)(s,l,d,f),mf=t.dynCall_iii=(s,l,d)=>(mf=t.dynCall_iii=L.rf)(s,l,d),Ns=t.dynCall_ii=(s,l)=>(Ns=t.dynCall_ii=L.sf)(s,l),gf=t.dynCall_iiiiiii=(s,l,d,f,h,g,y)=>(gf=t.dynCall_iiiiiii=L.tf)(s,l,d,f,h,g,y),yf=t.dynCall_vi=(s,l)=>(yf=t.dynCall_vi=L.uf)(s,l),bf=t.dynCall_v=s=>(bf=t.dynCall_v=L.vf)(s),_f=t.dynCall_iiiiii=(s,l,d,f,h,g)=>(_f=t.dynCall_iiiiii=L.wf)(s,l,d,f,h,g),vf=t.dynCall_iiiii=(s,l,d,f,h)=>(vf=t.dynCall_iiiii=L.xf)(s,l,d,f,h),wf=t.dynCall_viii=(s,l,d,f)=>(wf=t.dynCall_viii=L.yf)(s,l,d,f),xf=t.dynCall_viiiii=(s,l,d,f,h,g)=>(xf=t.dynCall_viiiii=L.zf)(s,l,d,f,h,g),Tf=t.dynCall_viiii=(s,l,d,f,h)=>(Tf=t.dynCall_viiii=L.Af)(s,l,d,f,h),If=t.dynCall_viiiiii=(s,l,d,f,h,g,y)=>(If=t.dynCall_viiiiii=L.Bf)(s,l,d,f,h,g,y),Sf=t.dynCall_viiiiij=(s,l,d,f,h,g,y)=>(Sf=t.dynCall_viiiiij=L.Cf)(s,l,d,f,h,g,y),$f=t.dynCall_viiji=(s,l,d,f,h)=>($f=t.dynCall_viiji=L.Df)(s,l,d,f,h),Af=t.dynCall_viiiiiiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D)=>(Af=t.dynCall_viiiiiiiiiii=L.Ef)(s,l,d,f,h,g,y,v,w,S,O,D),Pf=t.dynCall_viiijjjii=(s,l,d,f,h,g,y,v,w)=>(Pf=t.dynCall_viiijjjii=L.Ff)(s,l,d,f,h,g,y,v,w),Of=t.dynCall_iij=(s,l,d)=>(Of=t.dynCall_iij=L.Gf)(s,l,d),Cf=t.dynCall_iif=(s,l,d)=>(Cf=t.dynCall_iif=L.Hf)(s,l,d),Ef=t.dynCall_iid=(s,l,d)=>(Ef=t.dynCall_iid=L.If)(s,l,d),Df=t.dynCall_jii=(s,l,d)=>(Df=t.dynCall_jii=L.Jf)(s,l,d),kf=t.dynCall_i=s=>(kf=t.dynCall_i=L.Kf)(s),Nf=t.dynCall_viiiiiiii=(s,l,d,f,h,g,y,v,w)=>(Nf=t.dynCall_viiiiiiii=L.Lf)(s,l,d,f,h,g,y,v,w),Lf=t.dynCall_iiiiij=(s,l,d,f,h,g)=>(Lf=t.dynCall_iiiiij=L.Mf)(s,l,d,f,h,g),Rf=t.dynCall_j=s=>(Rf=t.dynCall_j=L.Nf)(s),zf=t.dynCall_vij=(s,l,d)=>(zf=t.dynCall_vij=L.Of)(s,l,d),Mf=t.dynCall_iiiiiiii=(s,l,d,f,h,g,y,v)=>(Mf=t.dynCall_iiiiiiii=L.Pf)(s,l,d,f,h,g,y,v),Bf=t.dynCall_viijjjiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D)=>(Bf=t.dynCall_viijjjiiiiii=L.Qf)(s,l,d,f,h,g,y,v,w,S,O,D),Ff=t.dynCall_viiiiiiiii=(s,l,d,f,h,g,y,v,w,S)=>(Ff=t.dynCall_viiiiiiiii=L.Rf)(s,l,d,f,h,g,y,v,w,S),Vf=t.dynCall_ji=(s,l)=>(Vf=t.dynCall_ji=L.Sf)(s,l),Gf=t.dynCall_viiijiiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D)=>(Gf=t.dynCall_viiijiiiiiii=L.Tf)(s,l,d,f,h,g,y,v,w,S,O,D),Uf=t.dynCall_viiiiiii=(s,l,d,f,h,g,y,v)=>(Uf=t.dynCall_viiiiiii=L.Uf)(s,l,d,f,h,g,y,v),jf=t.dynCall_iiiiiiiiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N)=>(jf=t.dynCall_iiiiiiiiiiiii=L.Vf)(s,l,d,f,h,g,y,v,w,S,O,D,N),Wf=t.dynCall_viiiiiiiiii=(s,l,d,f,h,g,y,v,w,S,O)=>(Wf=t.dynCall_viiiiiiiiii=L.Wf)(s,l,d,f,h,g,y,v,w,S,O),Hf=t.dynCall_viiiiiiiiiiiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee)=>(Hf=t.dynCall_viiiiiiiiiiiiiiii=L.Xf)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee),qf=t.dynCall_iiiiiiiij=(s,l,d,f,h,g,y,v,w)=>(qf=t.dynCall_iiiiiiiij=L.Yf)(s,l,d,f,h,g,y,v,w),Kf=t.dynCall_vijii=(s,l,d,f,h)=>(Kf=t.dynCall_vijii=L.Zf)(s,l,d,f,h),Xf=t.dynCall_iiiiiiiii=(s,l,d,f,h,g,y,v,w)=>(Xf=t.dynCall_iiiiiiiii=L._f)(s,l,d,f,h,g,y,v,w),Yf=t.dynCall_iiiiijiiiii=(s,l,d,f,h,g,y,v,w,S,O)=>(Yf=t.dynCall_iiiiijiiiii=L.$f)(s,l,d,f,h,g,y,v,w,S,O),Zf=t.dynCall_iiiiiiiiiii=(s,l,d,f,h,g,y,v,w,S,O)=>(Zf=t.dynCall_iiiiiiiiiii=L.ag)(s,l,d,f,h,g,y,v,w,S,O),Jf=t.dynCall_vijjjiiiiij=(s,l,d,f,h,g,y,v,w,S,O)=>(Jf=t.dynCall_vijjjiiiiij=L.bg)(s,l,d,f,h,g,y,v,w,S,O),Qf=t.dynCall_viij=(s,l,d,f)=>(Qf=t.dynCall_viij=L.cg)(s,l,d,f),ep=t.dynCall_viijj=(s,l,d,f,h)=>(ep=t.dynCall_viijj=L.dg)(s,l,d,f,h),tp=t.dynCall_fi=(s,l)=>(tp=t.dynCall_fi=L.eg)(s,l),rp=t.dynCall_fii=(s,l,d)=>(rp=t.dynCall_fii=L.fg)(s,l,d),np=t.dynCall_di=(s,l)=>(np=t.dynCall_di=L.gg)(s,l),op=t.dynCall_dii=(s,l,d)=>(op=t.dynCall_dii=L.hg)(s,l,d),ip=t.dynCall_vijj=(s,l,d,f)=>(ip=t.dynCall_vijj=L.ig)(s,l,d,f),ap=t.dynCall_viji=(s,l,d,f)=>(ap=t.dynCall_viji=L.jg)(s,l,d,f),sp=t.dynCall_viijiii=(s,l,d,f,h,g,y)=>(sp=t.dynCall_viijiii=L.kg)(s,l,d,f,h,g,y),up=t.dynCall_iiiiiiiiii=(s,l,d,f,h,g,y,v,w,S)=>(up=t.dynCall_iiiiiiiiii=L.lg)(s,l,d,f,h,g,y,v,w,S),lp=t.dynCall_viiij=(s,l,d,f,h)=>(lp=t.dynCall_viiij=L.mg)(s,l,d,f,h),cp=t.dynCall_vijji=(s,l,d,f,h)=>(cp=t.dynCall_vijji=L.ng)(s,l,d,f,h),dp=t.dynCall_viid=(s,l,d,f)=>(dp=t.dynCall_viid=L.og)(s,l,d,f),fp=t.dynCall_vid=(s,l,d)=>(fp=t.dynCall_vid=L.pg)(s,l,d),pp=t.dynCall_viiijiiiii=(s,l,d,f,h,g,y,v,w,S)=>(pp=t.dynCall_viiijiiiii=L.qg)(s,l,d,f,h,g,y,v,w,S),hp=t.dynCall_jj=(s,l)=>(hp=t.dynCall_jj=L.rg)(s,l),mp=t.dynCall_iiiijii=(s,l,d,f,h,g,y)=>(mp=t.dynCall_iiiijii=L.sg)(s,l,d,f,h,g,y),gp=t.dynCall_iiijii=(s,l,d,f,h,g)=>(gp=t.dynCall_iiijii=L.tg)(s,l,d,f,h,g),yp=t.dynCall_viiiiiiiiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G)=>(yp=t.dynCall_viiiiiiiiiiiii=L.ug)(s,l,d,f,h,g,y,v,w,S,O,D,N,G),bp=t.dynCall_iiiiiiiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D)=>(bp=t.dynCall_iiiiiiiiiiii=L.vg)(s,l,d,f,h,g,y,v,w,S,O,D),_p=t.dynCall_iiijjj=(s,l,d,f,h,g)=>(_p=t.dynCall_iiijjj=L.wg)(s,l,d,f,h,g),vp=t.dynCall_ij=(s,l)=>(vp=t.dynCall_ij=L.xg)(s,l),wp=t.dynCall_viiiiji=(s,l,d,f,h,g,y)=>(wp=t.dynCall_viiiiji=L.yg)(s,l,d,f,h,g,y),xp=t.dynCall_iijjji=(s,l,d,f,h,g)=>(xp=t.dynCall_iijjji=L.zg)(s,l,d,f,h,g),Tp=t.dynCall_viijii=(s,l,d,f,h,g)=>(Tp=t.dynCall_viijii=L.Ag)(s,l,d,f,h,g),Ip=t.dynCall_vjiiiiii=(s,l,d,f,h,g,y,v)=>(Ip=t.dynCall_vjiiiiii=L.Bg)(s,l,d,f,h,g,y,v),Sp=t.dynCall_jiii=(s,l,d,f)=>(Sp=t.dynCall_jiii=L.Cg)(s,l,d,f),$p=t.dynCall_vijjiiiii=(s,l,d,f,h,g,y,v,w)=>($p=t.dynCall_vijjiiiii=L.Dg)(s,l,d,f,h,g,y,v,w),Ap=t.dynCall_jiij=(s,l,d,f)=>(Ap=t.dynCall_jiij=L.Eg)(s,l,d,f),Pp=t.dynCall_iijijjijiji=(s,l,d,f,h,g,y,v,w,S,O)=>(Pp=t.dynCall_iijijjijiji=L.Fg)(s,l,d,f,h,g,y,v,w,S,O),Op=t.dynCall_iijijji=(s,l,d,f,h,g,y)=>(Op=t.dynCall_iijijji=L.Gg)(s,l,d,f,h,g,y),Cp=t.dynCall_ijijji=(s,l,d,f,h,g)=>(Cp=t.dynCall_ijijji=L.Hg)(s,l,d,f,h,g),Ep=t.dynCall_iiiiiiij=(s,l,d,f,h,g,y,v)=>(Ep=t.dynCall_iiiiiiij=L.Ig)(s,l,d,f,h,g,y,v),Dp=t.dynCall_viiijjiii=(s,l,d,f,h,g,y,v,w)=>(Dp=t.dynCall_viiijjiii=L.Jg)(s,l,d,f,h,g,y,v,w),kp=t.dynCall_vif=(s,l,d)=>(kp=t.dynCall_vif=L.Kg)(s,l,d),Np=t.dynCall_viif=(s,l,d,f)=>(Np=t.dynCall_viif=L.Lg)(s,l,d,f),Lp=t.dynCall_iiiiijji=(s,l,d,f,h,g,y,v)=>(Lp=t.dynCall_iiiiijji=L.Mg)(s,l,d,f,h,g,y,v),Rp=t.dynCall_iiiiji=(s,l,d,f,h,g)=>(Rp=t.dynCall_iiiiji=L.Ng)(s,l,d,f,h,g),zp=t.dynCall_iiiifi=(s,l,d,f,h,g)=>(zp=t.dynCall_iiiifi=L.Og)(s,l,d,f,h,g),Mp=t.dynCall_iiiiiiiiijii=(s,l,d,f,h,g,y,v,w,S,O,D)=>(Mp=t.dynCall_iiiiiiiiijii=L.Pg)(s,l,d,f,h,g,y,v,w,S,O,D),Bp=t.dynCall_iiiijjii=(s,l,d,f,h,g,y,v)=>(Bp=t.dynCall_iiiijjii=L.Qg)(s,l,d,f,h,g,y,v),Fp=t.dynCall_iiij=(s,l,d,f)=>(Fp=t.dynCall_iiij=L.Rg)(s,l,d,f),Vp=t.dynCall_iiiiiijjjii=(s,l,d,f,h,g,y,v,w,S,O)=>(Vp=t.dynCall_iiiiiijjjii=L.Sg)(s,l,d,f,h,g,y,v,w,S,O),Gp=t.dynCall_iiijiii=(s,l,d,f,h,g,y)=>(Gp=t.dynCall_iiijiii=L.Tg)(s,l,d,f,h,g,y),Up=t.dynCall_iiiiiiiijjjfi=(s,l,d,f,h,g,y,v,w,S,O,D,N)=>(Up=t.dynCall_iiiiiiiijjjfi=L.Ug)(s,l,d,f,h,g,y,v,w,S,O,D,N),jp=t.dynCall_iijiiii=(s,l,d,f,h,g,y)=>(jp=t.dynCall_iijiiii=L.Vg)(s,l,d,f,h,g,y),Wp=t.dynCall_viiiij=(s,l,d,f,h,g)=>(Wp=t.dynCall_viiiij=L.Wg)(s,l,d,f,h,g),Hp=t.dynCall_iijjjii=(s,l,d,f,h,g,y)=>(Hp=t.dynCall_iijjjii=L.Xg)(s,l,d,f,h,g,y),qp=t.dynCall_jij=(s,l,d)=>(qp=t.dynCall_jij=L.Yg)(s,l,d),Kp=t.dynCall_jjj=(s,l,d)=>(Kp=t.dynCall_jjj=L.Zg)(s,l,d),Xp=t.dynCall_iiji=(s,l,d,f)=>(Xp=t.dynCall_iiji=L._g)(s,l,d,f),Yp=t.dynCall_viffiii=(s,l,d,f,h,g,y)=>(Yp=t.dynCall_viffiii=L.$g)(s,l,d,f,h,g,y),Zp=t.dynCall_viifiii=(s,l,d,f,h,g,y)=>(Zp=t.dynCall_viifiii=L.ah)(s,l,d,f,h,g,y),Jp=t.dynCall_viiiiidiidi=(s,l,d,f,h,g,y,v,w,S,O)=>(Jp=t.dynCall_viiiiidiidi=L.bh)(s,l,d,f,h,g,y,v,w,S,O),Qp=t.dynCall_viiiiiiiiidi=(s,l,d,f,h,g,y,v,w,S,O,D)=>(Qp=t.dynCall_viiiiiiiiidi=L.ch)(s,l,d,f,h,g,y,v,w,S,O,D),eh=t.dynCall_viiiiiiiiiiiiiifi=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee)=>(eh=t.dynCall_viiiiiiiiiiiiiifi=L.dh)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee),th=t.dynCall_ijii=(s,l,d,f)=>(th=t.dynCall_ijii=L.eh)(s,l,d,f),rh=t.dynCall_vijjjjjjjjjjjjji=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y)=>(rh=t.dynCall_vijjjjjjjjjjjjji=L.fh)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y),nh=t.dynCall_viiiji=(s,l,d,f,h,g)=>(nh=t.dynCall_viiiji=L.gh)(s,l,d,f,h,g),oh=t.dynCall_vijjjiiji=(s,l,d,f,h,g,y,v,w)=>(oh=t.dynCall_vijjjiiji=L.hh)(s,l,d,f,h,g,y,v,w),ih=t.dynCall_iiiijiiiiiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K)=>(ih=t.dynCall_iiiijiiiiiiiiii=L.ih)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K),ah=t.dynCall_vj=(s,l)=>(ah=t.dynCall_vj=L.jh)(s,l),sh=t.dynCall_vfiii=(s,l,d,f,h)=>(sh=t.dynCall_vfiii=L.kh)(s,l,d,f,h),uh=t.dynCall_viiiiff=(s,l,d,f,h,g,y)=>(uh=t.dynCall_viiiiff=L.lh)(s,l,d,f,h,g,y),lh=t.dynCall_viiiiiff=(s,l,d,f,h,g,y,v)=>(lh=t.dynCall_viiiiiff=L.mh)(s,l,d,f,h,g,y,v),ch=t.dynCall_viiff=(s,l,d,f,h)=>(ch=t.dynCall_viiff=L.nh)(s,l,d,f,h),dh=t.dynCall_viiiiiiiiifiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K)=>(dh=t.dynCall_viiiiiiiiifiiii=L.oh)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K),fh=t.dynCall_viiiiiiiijj=(s,l,d,f,h,g,y,v,w,S,O)=>(fh=t.dynCall_viiiiiiiijj=L.ph)(s,l,d,f,h,g,y,v,w,S,O),ph=t.dynCall_iiiiiiiiiiiiiifii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee)=>(ph=t.dynCall_iiiiiiiiiiiiiifii=L.qh)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee),hh=t.dynCall_iiiiiiiiiiiiiiiiiiifii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me,ut)=>(hh=t.dynCall_iiiiiiiiiiiiiiiiiiifii=L.rh)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me,ut),mh=t.dynCall_vijjiiiiiii=(s,l,d,f,h,g,y,v,w,S,O)=>(mh=t.dynCall_vijjiiiiiii=L.sh)(s,l,d,f,h,g,y,v,w,S,O),gh=t.dynCall_iiiijjj=(s,l,d,f,h,g,y)=>(gh=t.dynCall_iiiijjj=L.th)(s,l,d,f,h,g,y),yh=t.dynCall_fffffff=(s,l,d,f,h,g,y)=>(yh=t.dynCall_fffffff=L.uh)(s,l,d,f,h,g,y),bh=t.dynCall_viiiiiijiifiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G)=>(bh=t.dynCall_viiiiiijiifiii=L.vh)(s,l,d,f,h,g,y,v,w,S,O,D,N,G),_h=t.dynCall_vjjjjjjffjifiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce)=>(_h=t.dynCall_vjjjjjjffjifiiiiii=L.wh)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce),vh=t.dynCall_viiiiiiffjifiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee)=>(vh=t.dynCall_viiiiiiffjifiiiii=L.xh)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee),wh=t.dynCall_viiiiiiffjfiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y)=>(wh=t.dynCall_viiiiiiffjfiiiii=L.yh)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y),xh=t.dynCall_viiiiiiffjiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K)=>(xh=t.dynCall_viiiiiiffjiiiii=L.zh)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K),Th=t.dynCall_vjjjjjjjjfffjifiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me)=>(Th=t.dynCall_vjjjjjjjjfffjifiiiiii=L.Ah)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me),Ih=t.dynCall_vjjjjjjfffifijiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e)=>(Ih=t.dynCall_vjjjjjjfffifijiiiii=L.Bh)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e),Sh=t.dynCall_vjjjjjjfffifiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce)=>(Sh=t.dynCall_vjjjjjjfffifiiiiii=L.Ch)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce),$h=t.dynCall_vjjjjjjjjfffiiifiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me)=>($h=t.dynCall_vjjjjjjjjfffiiifiiiii=L.Dh)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me),Ah=t.dynCall_vijiiiiiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N)=>(Ah=t.dynCall_vijiiiiiiiiii=L.Eh)(s,l,d,f,h,g,y,v,w,S,O,D,N),Ph=t.dynCall_vijjfffiii=(s,l,d,f,h,g,y,v,w,S)=>(Ph=t.dynCall_vijjfffiii=L.Fh)(s,l,d,f,h,g,y,v,w,S),Oh=t.dynCall_jiijjiif=(s,l,d,f,h,g,y,v)=>(Oh=t.dynCall_jiijjiif=L.Gh)(s,l,d,f,h,g,y,v),Ch=t.dynCall_vijjjjjjifiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K)=>(Ch=t.dynCall_vijjjjjjifiiiii=L.Hh)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K),Eh=t.dynCall_vjjjjjiiii=(s,l,d,f,h,g,y,v,w,S)=>(Eh=t.dynCall_vjjjjjiiii=L.Ih)(s,l,d,f,h,g,y,v,w,S),Dh=t.dynCall_vjjjjfiii=(s,l,d,f,h,g,y,v,w)=>(Dh=t.dynCall_vjjjjfiii=L.Jh)(s,l,d,f,h,g,y,v,w),kh=t.dynCall_viiiiiijiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G)=>(kh=t.dynCall_viiiiiijiiiiii=L.Kh)(s,l,d,f,h,g,y,v,w,S,O,D,N,G),Nh=t.dynCall_vijjii=(s,l,d,f,h,g)=>(Nh=t.dynCall_vijjii=L.Lh)(s,l,d,f,h,g),Lh=t.dynCall_viiiiijjiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N)=>(Lh=t.dynCall_viiiiijjiiiii=L.Mh)(s,l,d,f,h,g,y,v,w,S,O,D,N),Rh=t.dynCall_iiiiiji=(s,l,d,f,h,g,y)=>(Rh=t.dynCall_iiiiiji=L.Nh)(s,l,d,f,h,g,y),zh=t.dynCall_viiiiijiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N)=>(zh=t.dynCall_viiiiijiiiiii=L.Oh)(s,l,d,f,h,g,y,v,w,S,O,D,N),Mh=t.dynCall_viiijiiiiii=(s,l,d,f,h,g,y,v,w,S,O)=>(Mh=t.dynCall_viiijiiiiii=L.Ph)(s,l,d,f,h,g,y,v,w,S,O),Bh=t.dynCall_viiiijii=(s,l,d,f,h,g,y,v)=>(Bh=t.dynCall_viiiijii=L.Qh)(s,l,d,f,h,g,y,v),Fh=t.dynCall_viijjiii=(s,l,d,f,h,g,y,v)=>(Fh=t.dynCall_viijjiii=L.Rh)(s,l,d,f,h,g,y,v),Vh=t.dynCall_viiiiiijii=(s,l,d,f,h,g,y,v,w,S)=>(Vh=t.dynCall_viiiiiijii=L.Sh)(s,l,d,f,h,g,y,v,w,S),Gh=t.dynCall_viiiiijjji=(s,l,d,f,h,g,y,v,w,S)=>(Gh=t.dynCall_viiiiijjji=L.Th)(s,l,d,f,h,g,y,v,w,S),Uh=t.dynCall_vijiii=(s,l,d,f,h,g)=>(Uh=t.dynCall_vijiii=L.Uh)(s,l,d,f,h,g),jh=t.dynCall_iiijiiii=(s,l,d,f,h,g,y,v)=>(jh=t.dynCall_iiijiiii=L.Vh)(s,l,d,f,h,g,y,v),Wh=t.dynCall_viiiiiijjiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G)=>(Wh=t.dynCall_viiiiiijjiiiii=L.Wh)(s,l,d,f,h,g,y,v,w,S,O,D,N,G),Hh=t.dynCall_viiiiiiijiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K)=>(Hh=t.dynCall_viiiiiiijiiiiii=L.Xh)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K),qh=t.dynCall_viiiiiji=(s,l,d,f,h,g,y,v)=>(qh=t.dynCall_viiiiiji=L.Yh)(s,l,d,f,h,g,y,v),Kh=t.dynCall_fiif=(s,l,d,f)=>(Kh=t.dynCall_fiif=L.Zh)(s,l,d,f),Xh=t.dynCall_viijjjiii=(s,l,d,f,h,g,y,v,w)=>(Xh=t.dynCall_viijjjiii=L._h)(s,l,d,f,h,g,y,v,w),Yh=t.dynCall_viiiiiifiii=(s,l,d,f,h,g,y,v,w,S,O)=>(Yh=t.dynCall_viiiiiifiii=L.$h)(s,l,d,f,h,g,y,v,w,S,O),Zh=t.dynCall_viijji=(s,l,d,f,h,g)=>(Zh=t.dynCall_viijji=L.ai)(s,l,d,f,h,g),Jh=t.dynCall_iiiiiiiiiiijijji=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y)=>(Jh=t.dynCall_iiiiiiiiiiijijji=L.bi)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y),Qh=t.dynCall_jiijjiii=(s,l,d,f,h,g,y,v)=>(Qh=t.dynCall_jiijjiii=L.ci)(s,l,d,f,h,g,y,v),em=t.dynCall_viifiifijjjii=(s,l,d,f,h,g,y,v,w,S,O,D,N)=>(em=t.dynCall_viifiifijjjii=L.di)(s,l,d,f,h,g,y,v,w,S,O,D,N),tm=t.dynCall_viiiiiiiiiiiiiiiiiiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me,ut,mt,Zt)=>(tm=t.dynCall_viiiiiiiiiiiiiiiiiiiiiii=L.ei)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me,ut,mt,Zt),rm=t.dynCall_viiiiifiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N)=>(rm=t.dynCall_viiiiifiiiiii=L.fi)(s,l,d,f,h,g,y,v,w,S,O,D,N),nm=t.dynCall_vijjiiiiii=(s,l,d,f,h,g,y,v,w,S)=>(nm=t.dynCall_vijjiiiiii=L.gi)(s,l,d,f,h,g,y,v,w,S),om=t.dynCall_vijiiiiiiijjii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G)=>(om=t.dynCall_vijiiiiiiijjii=L.hi)(s,l,d,f,h,g,y,v,w,S,O,D,N,G),im=t.dynCall_viiiiiiiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N)=>(im=t.dynCall_viiiiiiiiiiii=L.ii)(s,l,d,f,h,g,y,v,w,S,O,D,N),am=t.dynCall_viiiiiiiiiiiiiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e)=>(am=t.dynCall_viiiiiiiiiiiiiiiiii=L.ji)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e),sm=t.dynCall_viiiiiiiiiiiiiiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke)=>(sm=t.dynCall_viiiiiiiiiiiiiiiiiii=L.ki)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke),um=t.dynCall_viiiiiiiiiiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y)=>(um=t.dynCall_viiiiiiiiiiiiiii=L.li)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y),lm=t.dynCall_viiiiiiiiiiiiiiiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me)=>(lm=t.dynCall_viiiiiiiiiiiiiiiiiiii=L.mi)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me),cm=t.dynCall_viiiijjj=(s,l,d,f,h,g,y,v)=>(cm=t.dynCall_viiiijjj=L.ni)(s,l,d,f,h,g,y,v),dm=t.dynCall_iiiiid=(s,l,d,f,h,g)=>(dm=t.dynCall_iiiiid=L.oi)(s,l,d,f,h,g),fm=t.dynCall_viiiiiiiiiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K)=>(fm=t.dynCall_viiiiiiiiiiiiii=L.pi)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K),pm=t.dynCall_viiiiiiijjj=(s,l,d,f,h,g,y,v,w,S,O)=>(pm=t.dynCall_viiiiiiijjj=L.qi)(s,l,d,f,h,g,y,v,w,S,O),hm=t.dynCall_iiiiiiiiiiiiiiiiiiiifi=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me,ut)=>(hm=t.dynCall_iiiiiiiiiiiiiiiiiiiifi=L.ri)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me,ut),mm=t.dynCall_viiijiiiiiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K)=>(mm=t.dynCall_viiijiiiiiiiiii=L.si)(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K),gm=t.dynCall_viiiiif=(s,l,d,f,h,g,y)=>(gm=t.dynCall_viiiiif=L.ti)(s,l,d,f,h,g,y),ym=t.dynCall_viiif=(s,l,d,f,h)=>(ym=t.dynCall_viiif=L.ui)(s,l,d,f,h),bm=t.dynCall_viiiiiiiiifi=(s,l,d,f,h,g,y,v,w,S,O,D)=>(bm=t.dynCall_viiiiiiiiifi=L.vi)(s,l,d,f,h,g,y,v,w,S,O,D),_m=t.dynCall_viiiiid=(s,l,d,f,h,g,y)=>(_m=t.dynCall_viiiiid=L.wi)(s,l,d,f,h,g,y),vm=t.dynCall_viiid=(s,l,d,f,h)=>(vm=t.dynCall_viiid=L.xi)(s,l,d,f,h),wm=t.dynCall_iiif=(s,l,d,f)=>(wm=t.dynCall_iiif=L.yi)(s,l,d,f),xm=t.dynCall_vidi=(s,l,d,f)=>(xm=t.dynCall_vidi=L.zi)(s,l,d,f),Tm=t.dynCall_viiijiji=(s,l,d,f,h,g,y,v)=>(Tm=t.dynCall_viiijiji=L.Ai)(s,l,d,f,h,g,y,v),Im=t.dynCall_viiijij=(s,l,d,f,h,g,y)=>(Im=t.dynCall_viiijij=L.Bi)(s,l,d,f,h,g,y),Sm=t.dynCall_vijjj=(s,l,d,f,h)=>(Sm=t.dynCall_vijjj=L.Ci)(s,l,d,f,h),$m=t.dynCall_vjiij=(s,l,d,f,h)=>($m=t.dynCall_vjiij=L.Di)(s,l,d,f,h),Am=t.dynCall_diii=(s,l,d,f)=>(Am=t.dynCall_diii=L.Ei)(s,l,d,f),Pm=t.dynCall_diiiii=(s,l,d,f,h,g)=>(Pm=t.dynCall_diiiii=L.Fi)(s,l,d,f,h,g),Om=t.dynCall_diiii=(s,l,d,f,h)=>(Om=t.dynCall_diiii=L.Gi)(s,l,d,f,h),Cm=t.dynCall_ijiijji=(s,l,d,f,h,g,y)=>(Cm=t.dynCall_ijiijji=L.Hi)(s,l,d,f,h,g,y),Em=t.dynCall_viiijjiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D)=>(Em=t.dynCall_viiijjiiiiii=L.Ii)(s,l,d,f,h,g,y,v,w,S,O,D),Dm=t.dynCall_viijjijjjjiii=(s,l,d,f,h,g,y,v,w,S,O,D,N)=>(Dm=t.dynCall_viijjijjjjiii=L.Ji)(s,l,d,f,h,g,y,v,w,S,O,D,N),km=t.dynCall_ijiii=(s,l,d,f,h)=>(km=t.dynCall_ijiii=L.Ki)(s,l,d,f,h),Nm=t.dynCall_ijiiiiji=(s,l,d,f,h,g,y,v)=>(Nm=t.dynCall_ijiiiiji=L.Li)(s,l,d,f,h,g,y,v),Lm=t.dynCall_ijiij=(s,l,d,f,h)=>(Lm=t.dynCall_ijiij=L.Mi)(s,l,d,f,h),Rm=t.dynCall_iiiij=(s,l,d,f,h)=>(Rm=t.dynCall_iiiij=L.Ni)(s,l,d,f,h),zm=t.dynCall_viiijii=(s,l,d,f,h,g,y)=>(zm=t.dynCall_viiijii=L.Oi)(s,l,d,f,h,g,y),Mm=t.dynCall_viijiiiiiiiiii=(s,l,d,f,h,g,y,v,w,S,O,D,N,G)=>(Mm=t.dynCall_viijiiiiiiiiii=L.Pi)(s,l,d,f,h,g,y,v,w,S,O,D,N,G),Bm=t.dynCall_fiiii=(s,l,d,f,h)=>(Bm=t.dynCall_fiiii=L.Qi)(s,l,d,f,h),Fm=t.dynCall_jfi=(s,l,d)=>(Fm=t.dynCall_jfi=L.Ri)(s,l,d),Vm=t.dynCall_fiii=(s,l,d,f)=>(Vm=t.dynCall_fiii=L.Si)(s,l,d,f),Gm=s=>(Gm=L.Ti)(s),Um=()=>(Um=L.Ui)(),jm=s=>(jm=L.Vi)(s),Wm=()=>(Wm=L.Wi)();function xS(s,l,d,f){var h=V();try{return hf(s,l,d,f)}catch(g){if(F(h),g!==g+0)throw g;U(1,0)}}function TS(s,l,d){var f=V();try{return mf(s,l,d)}catch(h){if(F(f),h!==h+0)throw h;U(1,0)}}function IS(s,l,d){var f=V();try{pf(s,l,d)}catch(h){if(F(f),h!==h+0)throw h;U(1,0)}}function SS(s,l){var d=V();try{return Ns(s,l)}catch(f){if(F(d),f!==f+0)throw f;U(1,0)}}function $S(s,l){var d=V();try{yf(s,l)}catch(f){if(F(d),f!==f+0)throw f;U(1,0)}}function AS(s){var l=V();try{bf(s)}catch(d){if(F(l),d!==d+0)throw d;U(1,0)}}function PS(s,l,d,f,h,g,y){var v=V();try{return gf(s,l,d,f,h,g,y)}catch(w){if(F(v),w!==w+0)throw w;U(1,0)}}function OS(s,l,d,f,h,g){var y=V();try{return _f(s,l,d,f,h,g)}catch(v){if(F(y),v!==v+0)throw v;U(1,0)}}function CS(s,l,d,f,h){var g=V();try{return vf(s,l,d,f,h)}catch(y){if(F(g),y!==y+0)throw y;U(1,0)}}function ES(s,l,d,f){var h=V();try{wf(s,l,d,f)}catch(g){if(F(h),g!==g+0)throw g;U(1,0)}}function DS(s,l,d,f,h){var g=V();try{Tf(s,l,d,f,h)}catch(y){if(F(g),y!==y+0)throw y;U(1,0)}}function kS(s,l,d,f,h,g,y){var v=V();try{If(s,l,d,f,h,g,y)}catch(w){if(F(v),w!==w+0)throw w;U(1,0)}}function NS(s,l,d,f,h,g,y){var v=V();try{Sf(s,l,d,f,h,g,y)}catch(w){if(F(v),w!==w+0)throw w;U(1,0)}}function LS(s,l,d,f,h,g){var y=V();try{xf(s,l,d,f,h,g)}catch(v){if(F(y),v!==v+0)throw v;U(1,0)}}function RS(s,l,d,f,h,g,y,v,w,S,O,D){var N=V();try{Af(s,l,d,f,h,g,y,v,w,S,O,D)}catch(G){if(F(N),G!==G+0)throw G;U(1,0)}}function zS(s,l,d){var f=V();try{return Of(s,l,d)}catch(h){if(F(f),h!==h+0)throw h;U(1,0)}}function MS(s,l,d){var f=V();try{return Cf(s,l,d)}catch(h){if(F(f),h!==h+0)throw h;U(1,0)}}function BS(s,l,d){var f=V();try{return Ef(s,l,d)}catch(h){if(F(f),h!==h+0)throw h;U(1,0)}}function FS(s,l,d){var f=V();try{return Df(s,l,d)}catch(h){if(F(f),h!==h+0)throw h;return U(1,0),0n}}function VS(s,l,d,f,h,g,y,v,w){var S=V();try{Nf(s,l,d,f,h,g,y,v,w)}catch(O){if(F(S),O!==O+0)throw O;U(1,0)}}function GS(s){var l=V();try{return kf(s)}catch(d){if(F(l),d!==d+0)throw d;U(1,0)}}function US(s,l,d){var f=V();try{zf(s,l,d)}catch(h){if(F(f),h!==h+0)throw h;U(1,0)}}function jS(s,l,d,f,h,g,y,v){var w=V();try{return Mf(s,l,d,f,h,g,y,v)}catch(S){if(F(w),S!==S+0)throw S;U(1,0)}}function WS(s,l,d,f,h,g,y,v,w,S,O,D){var N=V();try{Bf(s,l,d,f,h,g,y,v,w,S,O,D)}catch(G){if(F(N),G!==G+0)throw G;U(1,0)}}function HS(s,l,d,f,h,g,y,v,w,S,O,D){var N=V();try{Gf(s,l,d,f,h,g,y,v,w,S,O,D)}catch(G){if(F(N),G!==G+0)throw G;U(1,0)}}function qS(s,l,d,f,h,g,y,v,w,S,O,D,N){var G=V();try{return jf(s,l,d,f,h,g,y,v,w,S,O,D,N)}catch(K){if(F(G),K!==K+0)throw K;U(1,0)}}function KS(s,l,d,f,h,g,y,v,w,S,O){var D=V();try{Wf(s,l,d,f,h,g,y,v,w,S,O)}catch(N){if(F(D),N!==N+0)throw N;U(1,0)}}function XS(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee){var ce=V();try{Hf(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee)}catch(_e){if(F(ce),_e!==_e+0)throw _e;U(1,0)}}function YS(s,l,d,f,h,g,y,v){var w=V();try{Uf(s,l,d,f,h,g,y,v)}catch(S){if(F(w),S!==S+0)throw S;U(1,0)}}function ZS(s,l,d,f,h,g,y,v,w,S,O){var D=V();try{return Yf(s,l,d,f,h,g,y,v,w,S,O)}catch(N){if(F(D),N!==N+0)throw N;U(1,0)}}function JS(s,l,d,f,h,g,y,v,w,S,O){var D=V();try{return Zf(s,l,d,f,h,g,y,v,w,S,O)}catch(N){if(F(D),N!==N+0)throw N;U(1,0)}}function QS(s,l,d,f,h,g,y,v,w,S,O){var D=V();try{Jf(s,l,d,f,h,g,y,v,w,S,O)}catch(N){if(F(D),N!==N+0)throw N;U(1,0)}}function e$(s,l,d,f){var h=V();try{Qf(s,l,d,f)}catch(g){if(F(h),g!==g+0)throw g;U(1,0)}}function t$(s,l,d,f,h){var g=V();try{ep(s,l,d,f,h)}catch(y){if(F(g),y!==y+0)throw y;U(1,0)}}function r$(s,l,d,f,h,g,y,v,w,S){var O=V();try{Ff(s,l,d,f,h,g,y,v,w,S)}catch(D){if(F(O),D!==D+0)throw D;U(1,0)}}function n$(s,l,d,f,h){var g=V();try{Kf(s,l,d,f,h)}catch(y){if(F(g),y!==y+0)throw y;U(1,0)}}function o$(s,l,d,f,h,g,y,v,w){var S=V();try{return Xf(s,l,d,f,h,g,y,v,w)}catch(O){if(F(S),O!==O+0)throw O;U(1,0)}}function i$(s,l){var d=V();try{return tp(s,l)}catch(f){if(F(d),f!==f+0)throw f;U(1,0)}}function a$(s,l){var d=V();try{return Vf(s,l)}catch(f){if(F(d),f!==f+0)throw f;return U(1,0),0n}}function s$(s,l){var d=V();try{return np(s,l)}catch(f){if(F(d),f!==f+0)throw f;U(1,0)}}function u$(s,l,d,f){var h=V();try{ip(s,l,d,f)}catch(g){if(F(h),g!==g+0)throw g;U(1,0)}}function l$(s,l,d,f,h,g,y){var v=V();try{zm(s,l,d,f,h,g,y)}catch(w){if(F(v),w!==w+0)throw w;U(1,0)}}function c$(s,l,d,f,h,g,y){var v=V();try{sp(s,l,d,f,h,g,y)}catch(w){if(F(v),w!==w+0)throw w;U(1,0)}}function d$(s,l,d,f,h,g,y,v){var w=V();try{Bh(s,l,d,f,h,g,y,v)}catch(S){if(F(w),S!==S+0)throw S;U(1,0)}}function f$(s,l,d,f){var h=V();try{ap(s,l,d,f)}catch(g){if(F(h),g!==g+0)throw g;U(1,0)}}function p$(s,l,d,f,h,g,y,v,w){var S=V();try{return qf(s,l,d,f,h,g,y,v,w)}catch(O){if(F(S),O!==O+0)throw O;U(1,0)}}function h$(s,l,d,f,h,g){var y=V();try{Tp(s,l,d,f,h,g)}catch(v){if(F(y),v!==v+0)throw v;U(1,0)}}function m$(s,l,d,f,h,g,y,v,w,S){var O=V();try{return up(s,l,d,f,h,g,y,v,w,S)}catch(D){if(F(O),D!==D+0)throw D;U(1,0)}}function g$(s,l,d,f,h){var g=V();try{$f(s,l,d,f,h)}catch(y){if(F(g),y!==y+0)throw y;U(1,0)}}function y$(s,l,d,f,h){var g=V();try{lp(s,l,d,f,h)}catch(y){if(F(g),y!==y+0)throw y;U(1,0)}}function b$(s,l,d,f,h){var g=V();try{cp(s,l,d,f,h)}catch(y){if(F(g),y!==y+0)throw y;U(1,0)}}function _$(s,l,d,f){var h=V();try{dp(s,l,d,f)}catch(g){if(F(h),g!==g+0)throw g;U(1,0)}}function v$(s,l,d){var f=V();try{fp(s,l,d)}catch(h){if(F(f),h!==h+0)throw h;U(1,0)}}function w$(s,l,d,f,h,g,y,v,w,S){var O=V();try{pp(s,l,d,f,h,g,y,v,w,S)}catch(D){if(F(O),D!==D+0)throw D;U(1,0)}}function x$(s,l,d,f,h,g,y,v,w){var S=V();try{Pf(s,l,d,f,h,g,y,v,w)}catch(O){if(F(S),O!==O+0)throw O;U(1,0)}}function T$(s,l){var d=V();try{return vp(s,l)}catch(f){if(F(d),f!==f+0)throw f;U(1,0)}}function I$(s,l,d,f,h,g,y,v,w,S,O,D,N,G){var K=V();try{Mm(s,l,d,f,h,g,y,v,w,S,O,D,N,G)}catch(Y){if(F(K),Y!==Y+0)throw Y;U(1,0)}}function S$(s,l,d,f,h,g){var y=V();try{return gp(s,l,d,f,h,g)}catch(v){if(F(y),v!==v+0)throw v;U(1,0)}}function $$(s,l,d,f,h,g,y,v,w,S,O,D,N,G){var K=V();try{yp(s,l,d,f,h,g,y,v,w,S,O,D,N,G)}catch(Y){if(F(K),Y!==Y+0)throw Y;U(1,0)}}function A$(s,l,d,f,h,g,y,v,w,S,O,D){var N=V();try{return bp(s,l,d,f,h,g,y,v,w,S,O,D)}catch(G){if(F(N),G!==G+0)throw G;U(1,0)}}function P$(s,l,d,f){var h=V();try{return Ap(s,l,d,f)}catch(g){if(F(h),g!==g+0)throw g;return U(1,0),0n}}function O$(s,l,d,f,h,g){var y=V();try{return _p(s,l,d,f,h,g)}catch(v){if(F(y),v!==v+0)throw v;U(1,0)}}function C$(s,l,d,f,h,g,y,v){var w=V();try{Ip(s,l,d,f,h,g,y,v)}catch(S){if(F(w),S!==S+0)throw S;U(1,0)}}function E$(s,l,d,f){var h=V();try{return Sp(s,l,d,f)}catch(g){if(F(h),g!==g+0)throw g;return U(1,0),0n}}function D$(s,l,d,f,h,g,y,v,w){var S=V();try{$p(s,l,d,f,h,g,y,v,w)}catch(O){if(F(S),O!==O+0)throw O;U(1,0)}}function k$(s,l,d,f,h,g,y){var v=V();try{wp(s,l,d,f,h,g,y)}catch(w){if(F(v),w!==w+0)throw w;U(1,0)}}function N$(s,l,d,f,h,g){var y=V();try{return xp(s,l,d,f,h,g)}catch(v){if(F(y),v!==v+0)throw v;U(1,0)}}function L$(s,l,d,f,h,g,y,v,w,S,O){var D=V();try{return Pp(s,l,d,f,h,g,y,v,w,S,O)}catch(N){if(F(D),N!==N+0)throw N;U(1,0)}}function R$(s,l,d,f,h,g,y){var v=V();try{return Op(s,l,d,f,h,g,y)}catch(w){if(F(v),w!==w+0)throw w;U(1,0)}}function z$(s,l,d,f,h,g){var y=V();try{return Cp(s,l,d,f,h,g)}catch(v){if(F(y),v!==v+0)throw v;U(1,0)}}function M$(s,l){var d=V();try{return hp(s,l)}catch(f){if(F(d),f!==f+0)throw f;return U(1,0),0n}}function B$(s,l,d,f,h,g,y){var v=V();try{return mp(s,l,d,f,h,g,y)}catch(w){if(F(v),w!==w+0)throw w;U(1,0)}}function F$(s,l,d){var f=V();try{kp(s,l,d)}catch(h){if(F(f),h!==h+0)throw h;U(1,0)}}function V$(s,l,d,f,h,g,y,v){var w=V();try{return Ep(s,l,d,f,h,g,y,v)}catch(S){if(F(w),S!==S+0)throw S;U(1,0)}}function G$(s,l,d,f,h,g,y,v,w){var S=V();try{Dp(s,l,d,f,h,g,y,v,w)}catch(O){if(F(S),O!==O+0)throw O;U(1,0)}}function U$(s,l,d,f){var h=V();try{Np(s,l,d,f)}catch(g){if(F(h),g!==g+0)throw g;U(1,0)}}function j$(s,l,d,f,h,g,y,v){var w=V();try{return Lp(s,l,d,f,h,g,y,v)}catch(S){if(F(w),S!==S+0)throw S;U(1,0)}}function W$(s,l,d,f,h,g){var y=V();try{return Rp(s,l,d,f,h,g)}catch(v){if(F(y),v!==v+0)throw v;U(1,0)}}function H$(s,l,d,f,h,g){var y=V();try{return zp(s,l,d,f,h,g)}catch(v){if(F(y),v!==v+0)throw v;U(1,0)}}function q$(s,l,d,f,h,g,y,v,w,S,O,D){var N=V();try{return Mp(s,l,d,f,h,g,y,v,w,S,O,D)}catch(G){if(F(N),G!==G+0)throw G;U(1,0)}}function K$(s,l,d,f,h,g,y,v){var w=V();try{return Bp(s,l,d,f,h,g,y,v)}catch(S){if(F(w),S!==S+0)throw S;U(1,0)}}function X$(s,l,d,f){var h=V();try{return Fp(s,l,d,f)}catch(g){if(F(h),g!==g+0)throw g;U(1,0)}}function Y$(s,l,d,f,h,g,y,v,w,S,O){var D=V();try{return Vp(s,l,d,f,h,g,y,v,w,S,O)}catch(N){if(F(D),N!==N+0)throw N;U(1,0)}}function Z$(s,l,d,f,h,g,y){var v=V();try{return Gp(s,l,d,f,h,g,y)}catch(w){if(F(v),w!==w+0)throw w;U(1,0)}}function J$(s,l,d,f,h,g,y,v,w,S,O,D,N){var G=V();try{return Up(s,l,d,f,h,g,y,v,w,S,O,D,N)}catch(K){if(F(G),K!==K+0)throw K;U(1,0)}}function Q$(s,l,d,f,h,g,y){var v=V();try{return jp(s,l,d,f,h,g,y)}catch(w){if(F(v),w!==w+0)throw w;U(1,0)}}function eA(s,l,d,f,h,g){var y=V();try{Wp(s,l,d,f,h,g)}catch(v){if(F(y),v!==v+0)throw v;U(1,0)}}function tA(s,l,d,f,h,g,y){var v=V();try{return Hp(s,l,d,f,h,g,y)}catch(w){if(F(v),w!==w+0)throw w;U(1,0)}}function rA(s,l,d){var f=V();try{return qp(s,l,d)}catch(h){if(F(f),h!==h+0)throw h;return U(1,0),0n}}function nA(s,l,d){var f=V();try{return Kp(s,l,d)}catch(h){if(F(f),h!==h+0)throw h;return U(1,0),0n}}function oA(s,l,d,f){var h=V();try{return Xp(s,l,d,f)}catch(g){if(F(h),g!==g+0)throw g;U(1,0)}}function iA(s,l,d,f,h,g,y){var v=V();try{Yp(s,l,d,f,h,g,y)}catch(w){if(F(v),w!==w+0)throw w;U(1,0)}}function aA(s,l,d,f,h,g,y){var v=V();try{Zp(s,l,d,f,h,g,y)}catch(w){if(F(v),w!==w+0)throw w;U(1,0)}}function sA(s,l,d,f,h,g,y,v,w,S,O){var D=V();try{Jp(s,l,d,f,h,g,y,v,w,S,O)}catch(N){if(F(D),N!==N+0)throw N;U(1,0)}}function uA(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee){var ce=V();try{eh(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee)}catch(_e){if(F(ce),_e!==_e+0)throw _e;U(1,0)}}function lA(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y){var ee=V();try{rh(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y)}catch(ce){if(F(ee),ce!==ce+0)throw ce;U(1,0)}}function cA(s,l,d,f,h,g){var y=V();try{nh(s,l,d,f,h,g)}catch(v){if(F(y),v!==v+0)throw v;U(1,0)}}function dA(s,l,d,f,h,g,y,v,w){var S=V();try{oh(s,l,d,f,h,g,y,v,w)}catch(O){if(F(S),O!==O+0)throw O;U(1,0)}}function fA(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K){var Y=V();try{return ih(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K)}catch(ee){if(F(Y),ee!==ee+0)throw ee;U(1,0)}}function pA(s,l){var d=V();try{ah(s,l)}catch(f){if(F(d),f!==f+0)throw f;U(1,0)}}function hA(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K){var Y=V();try{dh(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K)}catch(ee){if(F(Y),ee!==ee+0)throw ee;U(1,0)}}function mA(s,l,d,f,h){var g=V();try{sh(s,l,d,f,h)}catch(y){if(F(g),y!==y+0)throw y;U(1,0)}}function gA(s,l,d,f,h,g,y){var v=V();try{uh(s,l,d,f,h,g,y)}catch(w){if(F(v),w!==w+0)throw w;U(1,0)}}function yA(s,l,d,f,h){var g=V();try{ch(s,l,d,f,h)}catch(y){if(F(g),y!==y+0)throw y;U(1,0)}}function bA(s,l,d,f,h,g,y,v){var w=V();try{lh(s,l,d,f,h,g,y,v)}catch(S){if(F(w),S!==S+0)throw S;U(1,0)}}function _A(s,l,d,f,h,g,y,v,w,S,O){var D=V();try{fh(s,l,d,f,h,g,y,v,w,S,O)}catch(N){if(F(D),N!==N+0)throw N;U(1,0)}}function vA(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee){var ce=V();try{return ph(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee)}catch(_e){if(F(ce),_e!==_e+0)throw _e;U(1,0)}}function wA(s,l,d,f,h){var g=V();try{return Bm(s,l,d,f,h)}catch(y){if(F(g),y!==y+0)throw y;U(1,0)}}function xA(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me,ut){var mt=V();try{return hh(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me,ut)}catch(Zt){if(F(mt),Zt!==Zt+0)throw Zt;U(1,0)}}function TA(s,l,d,f,h,g,y,v,w,S,O){var D=V();try{mh(s,l,d,f,h,g,y,v,w,S,O)}catch(N){if(F(D),N!==N+0)throw N;U(1,0)}}function IA(s,l,d,f,h,g,y){var v=V();try{return gh(s,l,d,f,h,g,y)}catch(w){if(F(v),w!==w+0)throw w;U(1,0)}}function SA(s,l,d,f,h,g,y,v,w,S,O,D,N,G){var K=V();try{bh(s,l,d,f,h,g,y,v,w,S,O,D,N,G)}catch(Y){if(F(K),Y!==Y+0)throw Y;U(1,0)}}function $A(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce){var _e=V();try{_h(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce)}catch(ke){if(F(_e),ke!==ke+0)throw ke;U(1,0)}}function AA(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee){var ce=V();try{vh(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee)}catch(_e){if(F(ce),_e!==_e+0)throw _e;U(1,0)}}function PA(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y){var ee=V();try{wh(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y)}catch(ce){if(F(ee),ce!==ce+0)throw ce;U(1,0)}}function OA(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K){var Y=V();try{xh(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K)}catch(ee){if(F(Y),ee!==ee+0)throw ee;U(1,0)}}function CA(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me){var ut=V();try{Th(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me)}catch(mt){if(F(ut),mt!==mt+0)throw mt;U(1,0)}}function EA(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e){var ke=V();try{Ih(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e)}catch(Me){if(F(ke),Me!==Me+0)throw Me;U(1,0)}}function DA(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce){var _e=V();try{Sh(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce)}catch(ke){if(F(_e),ke!==ke+0)throw ke;U(1,0)}}function kA(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me){var ut=V();try{$h(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me)}catch(mt){if(F(ut),mt!==mt+0)throw mt;U(1,0)}}function NA(s,l,d,f,h,g,y,v,w,S,O,D,N){var G=V();try{Ah(s,l,d,f,h,g,y,v,w,S,O,D,N)}catch(K){if(F(G),K!==K+0)throw K;U(1,0)}}function LA(s,l,d,f,h,g,y,v,w,S){var O=V();try{Ph(s,l,d,f,h,g,y,v,w,S)}catch(D){if(F(O),D!==D+0)throw D;U(1,0)}}function RA(s,l,d,f,h,g,y,v){var w=V();try{return Oh(s,l,d,f,h,g,y,v)}catch(S){if(F(w),S!==S+0)throw S;return U(1,0),0n}}function zA(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K){var Y=V();try{Ch(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K)}catch(ee){if(F(Y),ee!==ee+0)throw ee;U(1,0)}}function MA(s,l,d,f,h,g,y,v,w,S){var O=V();try{Eh(s,l,d,f,h,g,y,v,w,S)}catch(D){if(F(O),D!==D+0)throw D;U(1,0)}}function BA(s,l,d,f,h,g,y,v,w){var S=V();try{Dh(s,l,d,f,h,g,y,v,w)}catch(O){if(F(S),O!==O+0)throw O;U(1,0)}}function FA(s,l,d,f,h,g,y){var v=V();try{return yh(s,l,d,f,h,g,y)}catch(w){if(F(v),w!==w+0)throw w;U(1,0)}}function VA(s,l,d){var f=V();try{return Fm(s,l,d)}catch(h){if(F(f),h!==h+0)throw h;return U(1,0),0n}}function GA(s,l,d,f,h,g,y,v,w,S,O,D,N,G){var K=V();try{kh(s,l,d,f,h,g,y,v,w,S,O,D,N,G)}catch(Y){if(F(K),Y!==Y+0)throw Y;U(1,0)}}function UA(s,l,d,f,h,g,y,v,w,S,O,D,N){var G=V();try{Lh(s,l,d,f,h,g,y,v,w,S,O,D,N)}catch(K){if(F(G),K!==K+0)throw K;U(1,0)}}function jA(s,l,d,f,h,g,y){var v=V();try{return Rh(s,l,d,f,h,g,y)}catch(w){if(F(v),w!==w+0)throw w;U(1,0)}}function WA(s,l,d,f,h,g,y,v,w,S,O,D,N){var G=V();try{zh(s,l,d,f,h,g,y,v,w,S,O,D,N)}catch(K){if(F(G),K!==K+0)throw K;U(1,0)}}function HA(s,l,d,f,h,g){var y=V();try{Nh(s,l,d,f,h,g)}catch(v){if(F(y),v!==v+0)throw v;U(1,0)}}function qA(s,l,d,f,h,g,y,v,w,S,O){var D=V();try{Mh(s,l,d,f,h,g,y,v,w,S,O)}catch(N){if(F(D),N!==N+0)throw N;U(1,0)}}function KA(s,l,d,f,h,g,y,v){var w=V();try{Fh(s,l,d,f,h,g,y,v)}catch(S){if(F(w),S!==S+0)throw S;U(1,0)}}function XA(s,l,d,f,h,g,y,v,w,S){var O=V();try{Vh(s,l,d,f,h,g,y,v,w,S)}catch(D){if(F(O),D!==D+0)throw D;U(1,0)}}function YA(s,l,d,f){var h=V();try{return th(s,l,d,f)}catch(g){if(F(h),g!==g+0)throw g;U(1,0)}}function ZA(s,l,d,f,h,g,y,v,w,S){var O=V();try{Gh(s,l,d,f,h,g,y,v,w,S)}catch(D){if(F(O),D!==D+0)throw D;U(1,0)}}function JA(s,l,d,f,h,g){var y=V();try{Uh(s,l,d,f,h,g)}catch(v){if(F(y),v!==v+0)throw v;U(1,0)}}function QA(s,l,d){var f=V();try{return rp(s,l,d)}catch(h){if(F(f),h!==h+0)throw h;U(1,0)}}function eP(s,l,d,f,h,g,y,v){var w=V();try{return jh(s,l,d,f,h,g,y,v)}catch(S){if(F(w),S!==S+0)throw S;U(1,0)}}function tP(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K){var Y=V();try{fm(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K)}catch(ee){if(F(Y),ee!==ee+0)throw ee;U(1,0)}}function rP(s,l,d,f,h,g,y,v,w,S,O,D,N,G){var K=V();try{Wh(s,l,d,f,h,g,y,v,w,S,O,D,N,G)}catch(Y){if(F(K),Y!==Y+0)throw Y;U(1,0)}}function nP(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K){var Y=V();try{Hh(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K)}catch(ee){if(F(Y),ee!==ee+0)throw ee;U(1,0)}}function oP(s,l,d,f,h,g,y,v){var w=V();try{qh(s,l,d,f,h,g,y,v)}catch(S){if(F(w),S!==S+0)throw S;U(1,0)}}function iP(s,l,d,f){var h=V();try{return Kh(s,l,d,f)}catch(g){if(F(h),g!==g+0)throw g;U(1,0)}}function aP(s,l,d){var f=V();try{return op(s,l,d)}catch(h){if(F(f),h!==h+0)throw h;U(1,0)}}function sP(s,l,d,f,h,g,y,v,w){var S=V();try{Xh(s,l,d,f,h,g,y,v,w)}catch(O){if(F(S),O!==O+0)throw O;U(1,0)}}function uP(s,l,d,f,h,g,y,v,w,S,O){var D=V();try{Yh(s,l,d,f,h,g,y,v,w,S,O)}catch(N){if(F(D),N!==N+0)throw N;U(1,0)}}function lP(s,l,d,f,h,g){var y=V();try{Zh(s,l,d,f,h,g)}catch(v){if(F(y),v!==v+0)throw v;U(1,0)}}function cP(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y){var ee=V();try{return Jh(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y)}catch(ce){if(F(ee),ce!==ce+0)throw ce;U(1,0)}}function dP(s,l,d,f,h,g,y,v){var w=V();try{return Qh(s,l,d,f,h,g,y,v)}catch(S){if(F(w),S!==S+0)throw S;return U(1,0),0n}}function fP(s,l,d,f,h,g,y,v,w,S,O,D,N){var G=V();try{em(s,l,d,f,h,g,y,v,w,S,O,D,N)}catch(K){if(F(G),K!==K+0)throw K;U(1,0)}}function pP(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me,ut,mt,Zt){var JP=V();try{tm(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me,ut,mt,Zt)}catch(Ls){if(F(JP),Ls!==Ls+0)throw Ls;U(1,0)}}function hP(s,l,d,f,h,g,y,v,w,S,O,D,N){var G=V();try{rm(s,l,d,f,h,g,y,v,w,S,O,D,N)}catch(K){if(F(G),K!==K+0)throw K;U(1,0)}}function mP(s,l,d,f,h,g,y,v,w,S){var O=V();try{nm(s,l,d,f,h,g,y,v,w,S)}catch(D){if(F(O),D!==D+0)throw D;U(1,0)}}function gP(s,l,d,f,h,g,y,v,w,S,O,D,N,G){var K=V();try{om(s,l,d,f,h,g,y,v,w,S,O,D,N,G)}catch(Y){if(F(K),Y!==Y+0)throw Y;U(1,0)}}function yP(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me){var ut=V();try{lm(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me)}catch(mt){if(F(ut),mt!==mt+0)throw mt;U(1,0)}}function bP(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke){var Me=V();try{sm(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke)}catch(ut){if(F(Me),ut!==ut+0)throw ut;U(1,0)}}function _P(s,l,d,f,h,g,y,v,w,S,O,D,N){var G=V();try{im(s,l,d,f,h,g,y,v,w,S,O,D,N)}catch(K){if(F(G),K!==K+0)throw K;U(1,0)}}function vP(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e){var ke=V();try{am(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e)}catch(Me){if(F(ke),Me!==Me+0)throw Me;U(1,0)}}function wP(s,l,d,f,h,g,y,v){var w=V();try{cm(s,l,d,f,h,g,y,v)}catch(S){if(F(w),S!==S+0)throw S;U(1,0)}}function xP(s,l,d,f,h,g,y,v,w,S,O){var D=V();try{pm(s,l,d,f,h,g,y,v,w,S,O)}catch(N){if(F(D),N!==N+0)throw N;U(1,0)}}function TP(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me,ut){var mt=V();try{return hm(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y,ee,ce,_e,ke,Me,ut)}catch(Zt){if(F(mt),Zt!==Zt+0)throw Zt;U(1,0)}}function IP(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K){var Y=V();try{mm(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K)}catch(ee){if(F(Y),ee!==ee+0)throw ee;U(1,0)}}function SP(s,l,d,f,h,g,y){var v=V();try{gm(s,l,d,f,h,g,y)}catch(w){if(F(v),w!==w+0)throw w;U(1,0)}}function $P(s,l,d,f,h){var g=V();try{ym(s,l,d,f,h)}catch(y){if(F(g),y!==y+0)throw y;U(1,0)}}function AP(s,l,d,f,h,g,y,v,w,S,O,D){var N=V();try{bm(s,l,d,f,h,g,y,v,w,S,O,D)}catch(G){if(F(N),G!==G+0)throw G;U(1,0)}}function PP(s,l,d,f,h,g,y){var v=V();try{_m(s,l,d,f,h,g,y)}catch(w){if(F(v),w!==w+0)throw w;U(1,0)}}function OP(s,l,d,f,h){var g=V();try{vm(s,l,d,f,h)}catch(y){if(F(g),y!==y+0)throw y;U(1,0)}}function CP(s,l,d,f,h,g,y,v,w,S,O,D){var N=V();try{Qp(s,l,d,f,h,g,y,v,w,S,O,D)}catch(G){if(F(N),G!==G+0)throw G;U(1,0)}}function EP(s,l,d,f){var h=V();try{xm(s,l,d,f)}catch(g){if(F(h),g!==g+0)throw g;U(1,0)}}function DP(s,l,d,f,h,g,y,v){var w=V();try{Tm(s,l,d,f,h,g,y,v)}catch(S){if(F(w),S!==S+0)throw S;U(1,0)}}function kP(s,l,d,f,h,g,y){var v=V();try{Im(s,l,d,f,h,g,y)}catch(w){if(F(v),w!==w+0)throw w;U(1,0)}}function NP(s,l,d,f,h){var g=V();try{Sm(s,l,d,f,h)}catch(y){if(F(g),y!==y+0)throw y;U(1,0)}}function LP(s,l,d,f){var h=V();try{return wm(s,l,d,f)}catch(g){if(F(h),g!==g+0)throw g;U(1,0)}}function RP(s,l,d,f){var h=V();try{return Vm(s,l,d,f)}catch(g){if(F(h),g!==g+0)throw g;U(1,0)}}function zP(s,l,d,f,h){var g=V();try{$m(s,l,d,f,h)}catch(y){if(F(g),y!==y+0)throw y;U(1,0)}}function MP(s,l,d,f){var h=V();try{return Am(s,l,d,f)}catch(g){if(F(h),g!==g+0)throw g;U(1,0)}}function BP(s,l,d,f,h,g){var y=V();try{return Pm(s,l,d,f,h,g)}catch(v){if(F(y),v!==v+0)throw v;U(1,0)}}function FP(s,l,d,f,h){var g=V();try{return Om(s,l,d,f,h)}catch(y){if(F(g),y!==y+0)throw y;U(1,0)}}function VP(s,l,d,f,h,g,y){var v=V();try{return Cm(s,l,d,f,h,g,y)}catch(w){if(F(v),w!==w+0)throw w;U(1,0)}}function GP(s,l,d,f,h,g,y,v,w,S,O,D){var N=V();try{Em(s,l,d,f,h,g,y,v,w,S,O,D)}catch(G){if(F(N),G!==G+0)throw G;U(1,0)}}function UP(s,l,d,f,h){var g=V();try{return km(s,l,d,f,h)}catch(y){if(F(g),y!==y+0)throw y;U(1,0)}}function jP(s,l,d,f,h,g,y,v,w,S,O,D,N){var G=V();try{Dm(s,l,d,f,h,g,y,v,w,S,O,D,N)}catch(K){if(F(G),K!==K+0)throw K;U(1,0)}}function WP(s,l,d,f,h,g,y,v){var w=V();try{return Nm(s,l,d,f,h,g,y,v)}catch(S){if(F(w),S!==S+0)throw S;U(1,0)}}function HP(s,l,d,f,h){var g=V();try{return Rm(s,l,d,f,h)}catch(y){if(F(g),y!==y+0)throw y;U(1,0)}}function qP(s,l,d,f,h){var g=V();try{return Lm(s,l,d,f,h)}catch(y){if(F(g),y!==y+0)throw y;U(1,0)}}function KP(s){var l=V();try{return Rf(s)}catch(d){if(F(l),d!==d+0)throw d;return U(1,0),0n}}function XP(s,l,d,f,h,g){var y=V();try{return Lf(s,l,d,f,h,g)}catch(v){if(F(y),v!==v+0)throw v;U(1,0)}}function YP(s,l,d,f,h,g){var y=V();try{return dm(s,l,d,f,h,g)}catch(v){if(F(y),v!==v+0)throw v;U(1,0)}}function ZP(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y){var ee=V();try{um(s,l,d,f,h,g,y,v,w,S,O,D,N,G,K,Y)}catch(ce){if(F(ee),ce!==ce+0)throw ce;U(1,0)}}return t.stackSave=()=>V(),t.stackRestore=s=>F(s),t.stackAlloc=s=>ks(s),t.setValue=function(s,l,d="i8"){switch(d.endsWith("*")&&(d="*"),d){case"i1":case"i8":Ee()[s>>>0]=l;break;case"i16":Ye()[s>>>1>>>0]=l;break;case"i32":B()[s>>>2>>>0]=l;break;case"i64":he[s>>>3]=BigInt(l);break;case"float":Re()[s>>>2>>>0]=l;break;case"double":It()[s>>>3>>>0]=l;break;case"*":re()[s>>>2>>>0]=l;break;default:tn(`invalid type for setValue: ${d}`)}},t.getValue=function(s,l="i8"){switch(l.endsWith("*")&&(l="*"),l){case"i1":case"i8":return Ee()[s>>>0];case"i16":return Ye()[s>>>1>>>0];case"i32":return B()[s>>>2>>>0];case"i64":return he[s>>>3];case"float":return Re()[s>>>2>>>0];case"double":return It()[s>>>3>>>0];case"*":return re()[s>>>2>>>0];default:tn(`invalid type for getValue: ${l}`)}},t.UTF8ToString=st,t.stringToUTF8=eo,t.lengthBytesUTF8=gd,function s(){if(0<Jn)To=s;else if(u)e(t),xo();else{for(;0<ms.length;)ms.shift()(t);0<Jn?To=s:(t.calledRun=!0,xe||(xo(),e(t)))}}(),t.PTR_SIZE=4,o}),eN=nw,tN=globalThis.self?.name?.startsWith("em-pthread");tN&&nw()});var uw,hc,rN,Mt,lw,pc,nN,oN,cw,iN,aw,dw,sw,fw,Ta=W(()=>{"use strict";xa();uw=typeof location>"u"?void 0:location.origin,hc=import.meta.url>"file:"&&import.meta.url<"file;",rN=()=>{if(!!1){if(hc){let n=URL;return new URL(new n("ort.all.bundle.min.mjs",import.meta.url).href,uw).href}return import.meta.url}},Mt=rN(),lw=()=>{if(Mt&&!Mt.startsWith("blob:"))return Mt.substring(0,Mt.lastIndexOf("/")+1)},pc=(n,e)=>{try{let r=e??Mt;return(r?new URL(n,r):new URL(n)).origin===uw}catch{return!1}},nN=(n,e)=>{let r=e??Mt;try{return(r?new URL(n,r):new URL(n)).href}catch{return}},oN=(n,e)=>`${e??"./"}${n}`,cw=async n=>{let r=await(await fetch(n,{credentials:"same-origin"})).blob();return URL.createObjectURL(r)},iN=async n=>(await import(/*webpackIgnore:true*/n)).default,aw=(rw(),ro(tw)).default,dw=async()=>{if(!Mt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(pc(Mt))return[void 0,aw()];let n=await cw(Mt);return[n,aw(n)]},sw=(iw(),ro(ow)).default,fw=async(n,e,r)=>{if(!n&&!e&&sw&&Mt&&pc(Mt))return[void 0,sw];{let t="ort-wasm-simd-threaded.jsep.mjs",o=n??nN(t,e),i=!!1&&r&&o&&!pc(o,e),a=i?await cw(o):o??oN(t,e);return[i?a:void 0,await iN(a)]}}});var mc,gc,Da,pw,aN,sN,Ia,Ke,Tn=W(()=>{"use strict";Ta();gc=!1,Da=!1,pw=!1,aN=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},sN=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Ia=async n=>{if(gc)return Promise.resolve();if(Da)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(pw)throw new Error("previous call to 'initializeWebAssembly()' failed.");Da=!0;let e=n.initTimeout,r=n.numThreads;if(!sN())throw new Error("WebAssembly SIMD is not supported in the current environment.");let t=aN();r>1&&!t&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),n.numThreads=r=1);let o=n.wasmPaths,i=typeof o=="string"?o:void 0,a=o?.mjs,u=a?.href??a,c=o?.wasm,p=c?.href??c,m=n.wasmBinary,[b,_]=await fw(u,i,r>1),x=!1,T=[];if(e>0&&T.push(new Promise(I=>{setTimeout(()=>{x=!0,I()},e)})),T.push(new Promise((I,P)=>{let $={numThreads:r};if(m)$.wasmBinary=m;else if(p||i)$.locateFile=A=>p??i+A;else if(u&&u.indexOf("blob:")!==0)$.locateFile=A=>new URL(A,u).href;else if(b){let A=lw();A&&($.locateFile=C=>A+C)}_($).then(A=>{Da=!1,gc=!0,mc=A,I(),b&&URL.revokeObjectURL(b)},A=>{Da=!1,pw=!0,P(A)})})),await Promise.race(T),x)throw new Error(`WebAssembly backend initializing failed due to timeout: ${e}ms`)},Ke=()=>{if(gc&&mc)return mc;throw new Error("WebAssembly is not initialized yet.")}});var Bt,Ko,We,ka=W(()=>{"use strict";Tn();Bt=(n,e)=>{let r=Ke(),t=r.lengthBytesUTF8(n)+1,o=r._malloc(t);return r.stringToUTF8(n,o,t),e.push(o),o},Ko=(n,e,r,t)=>{if(typeof n=="object"&&n!==null){if(r.has(n))throw new Error("Circular reference in options");r.add(n)}Object.entries(n).forEach(([o,i])=>{let a=e?e+o:o;if(typeof i=="object")Ko(i,a+".",r,t);else if(typeof i=="string"||typeof i=="number")t(a,i.toString());else if(typeof i=="boolean")t(a,i?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof i}`)})},We=n=>{let e=Ke(),r=e.stackSave();try{let t=e.PTR_SIZE,o=e.stackAlloc(2*t);e._OrtGetLastError(o,o+t);let i=Number(e.getValue(o,t===4?"i32":"i64")),a=e.getValue(o+t,"*"),u=a?e.UTF8ToString(a):"";throw new Error(`${n} ERROR_CODE: ${i}, ERROR_MESSAGE: ${u}`)}finally{e.stackRestore(r)}}});var hw,mw=W(()=>{"use strict";Tn();ka();hw=n=>{let e=Ke(),r=0,t=[],o=n||{};try{if(n?.logSeverityLevel===void 0)o.logSeverityLevel=2;else if(typeof n.logSeverityLevel!="number"||!Number.isInteger(n.logSeverityLevel)||n.logSeverityLevel<0||n.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${n.logSeverityLevel}`);if(n?.logVerbosityLevel===void 0)o.logVerbosityLevel=0;else if(typeof n.logVerbosityLevel!="number"||!Number.isInteger(n.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${n.logVerbosityLevel}`);n?.terminate===void 0&&(o.terminate=!1);let i=0;return n?.tag!==void 0&&(i=Bt(n.tag,t)),r=e._OrtCreateRunOptions(o.logSeverityLevel,o.logVerbosityLevel,!!o.terminate,i),r===0&&We("Can't create run options."),n?.extra!==void 0&&Ko(n.extra,"",new WeakSet,(a,u)=>{let c=Bt(a,t),p=Bt(u,t);e._OrtAddRunConfigEntry(r,c,p)!==0&&We(`Can't set a run config entry: ${a} - ${u}.`)}),[r,t]}catch(i){throw r!==0&&e._OrtReleaseRunOptions(r),t.forEach(a=>e._free(a)),i}}});var uN,lN,cN,Na,dN,gw,yw=W(()=>{"use strict";Tn();ka();uN=n=>{switch(n){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${n}`)}},lN=n=>{switch(n){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${n}`)}},cN=n=>{n.extra||(n.extra={}),n.extra.session||(n.extra.session={});let e=n.extra.session;e.use_ort_model_bytes_directly||(e.use_ort_model_bytes_directly="1"),n.executionProviders&&n.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(n.enableMemPattern=!1)},Na=(n,e,r,t)=>{let o=Bt(e,t),i=Bt(r,t);Ke()._OrtAddSessionConfigEntry(n,o,i)!==0&&We(`Can't set a session config entry: ${e} - ${r}.`)},dN=async(n,e,r)=>{for(let t of e){let o=typeof t=="string"?t:t.name,i=[];switch(o){case"webnn":if(o="WEBNN",typeof t!="string"){let b=t?.deviceType;b&&Na(n,"deviceType",b,r)}break;case"webgpu":if(o="JS",typeof t!="string"){let m=t;if(m?.preferredLayout){if(m.preferredLayout!=="NCHW"&&m.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${m.preferredLayout}`);Na(n,"preferredLayout",m.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${o}`)}let a=Bt(o,r),u=i.length,c=0,p=0;if(u>0){c=Ke()._malloc(u*Ke().PTR_SIZE),r.push(c),p=Ke()._malloc(u*Ke().PTR_SIZE),r.push(p);for(let m=0;m<u;m++)Ke().setValue(c+m*Ke().PTR_SIZE,i[m][0],"*"),Ke().setValue(p+m*Ke().PTR_SIZE,i[m][1],"*")}await Ke()._OrtAppendExecutionProvider(n,a,c,p,u)!==0&&We(`Can't append execution provider: ${o}.`)}},gw=async n=>{let e=Ke(),r=0,t=[],o=n||{};cN(o);try{let i=uN(o.graphOptimizationLevel??"all"),a=lN(o.executionMode??"sequential"),u=typeof o.logId=="string"?Bt(o.logId,t):0,c=o.logSeverityLevel??2;if(!Number.isInteger(c)||c<0||c>4)throw new Error(`log serverity level is not valid: ${c}`);let p=o.logVerbosityLevel??0;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log verbosity level is not valid: ${p}`);let m=typeof o.optimizedModelFilePath=="string"?Bt(o.optimizedModelFilePath,t):0;if(r=e._OrtCreateSessionOptions(i,!!o.enableCpuMemArena,!!o.enableMemPattern,a,!!o.enableProfiling,0,u,c,p,m),r===0&&We("Can't create session options."),o.executionProviders&&await dN(r,o.executionProviders,t),o.enableGraphCapture!==void 0){if(typeof o.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${o.enableGraphCapture}`);Na(r,"enableGraphCapture",o.enableGraphCapture.toString(),t)}if(o.freeDimensionOverrides)for(let[b,_]of Object.entries(o.freeDimensionOverrides)){if(typeof b!="string")throw new Error(`free dimension override name must be a string: ${b}`);if(typeof _!="number"||!Number.isInteger(_)||_<0)throw new Error(`free dimension override value must be a non-negative integer: ${_}`);let x=Bt(b,t);e._OrtAddFreeDimensionOverride(r,x,_)!==0&&We(`Can't set a free dimension override: ${b} - ${_}.`)}return o.extra!==void 0&&Ko(o.extra,"",new WeakSet,(b,_)=>{Na(r,b,_,t)}),[r,t]}catch(i){throw r!==0&&e._OrtReleaseSessionOptions(r)!==0&&We("Can't release session options."),t.forEach(a=>e._free(a)),i}}});var go,In,Sn,La,Xo,Ra,za,yc,ve=W(()=>{"use strict";go=n=>{switch(n){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${n}`)}},In=n=>{switch(n){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${n}`)}},Sn=(n,e)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][n],t=typeof e=="number"?e:e.reduce((o,i)=>o*i,1);return r>0?Math.ceil(t*r):void 0},La=n=>{switch(n){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${n}`)}},Xo=n=>{switch(n){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${n}`)}},Ra=n=>n==="float32"||n==="float16"||n==="int32"||n==="int64"||n==="uint32"||n==="uint8"||n==="bool"||n==="uint4"||n==="int4",za=n=>n==="float32"||n==="float16"||n==="int32"||n==="int64"||n==="uint32"||n==="uint64"||n==="int8"||n==="uint8"||n==="bool"||n==="uint4"||n==="int4",yc=n=>{switch(n){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${n}`)}}});var Yo,bc=W(()=>{"use strict";xa();Yo=async n=>{if(typeof n=="string")if(!1)try{let{readFile:e}=Rs("node:fs/promises");return new Uint8Array(await e(n))}catch(e){if(e.code==="ERR_FS_FILE_TOO_LARGE"){let{createReadStream:r}=Rs("node:fs"),t=r(n),o=[];for await(let i of t)o.push(i);return new Uint8Array(Buffer.concat(o))}throw e}else{let e=await fetch(n);if(!e.ok)throw new Error(`failed to load external data file: ${n}`);let r=e.headers.get("Content-Length"),t=r?parseInt(r,10):0;if(t<1073741824)return new Uint8Array(await e.arrayBuffer());{if(!e.body)throw new Error(`failed to load external data file: ${n}, no response body.`);let o=e.body.getReader(),i;try{i=new ArrayBuffer(t)}catch(u){if(u instanceof RangeError){let c=Math.ceil(t/65536);i=new WebAssembly.Memory({initial:c,maximum:c}).buffer}else throw u}let a=0;for(;;){let{done:u,value:c}=await o.read();if(u)break;let p=c.byteLength;new Uint8Array(i,a,p).set(c),a+=p}return new Uint8Array(i,0,t)}}else return n instanceof Blob?new Uint8Array(await n.arrayBuffer()):n instanceof Uint8Array?n:new Uint8Array(n)}});var fN,pN,bw,_w,Ma,hN,Oe,Kr=W(()=>{"use strict";ve();fN=["V","I","W","E","F"],pN=(n,e)=>{console.log(`[${fN[n]},${new Date().toISOString()}]${e}`)},Ma=(n,e)=>{bw=n,_w=e},hN=(n,e)=>{let r=Xo(n),t=Xo(bw);r>=t&&pN(r,typeof e=="function"?e():e)},Oe=(...n)=>{_w&&hN(...n)}});var _c,Xr,j,Hn,Ba,vw,ww,Se=W(()=>{"use strict";_c=class{static calcMatMulShape(e,r){return e[1]!==r[0]?void 0:[e[0],r[1]]}},Xr=class{static calcShape(e,r,t=!1){let o=e.length,i=r.length;if(o===0)return r;if(i===0)return e;let a=Math.max(e.length,r.length),u=new Array(a);if(t){if(o<2||i<2)return;let c=_c.calcMatMulShape([e[o-2],e[o-1]],[r[i-2],r[i-1]]);if(c===void 0)return;[u[a-2],u[a-1]]=c}for(let c=t?3:1;c<=a;c++){let p=o-c<0?1:e[o-c],m=i-c<0?1:r[i-c];if(p!==m&&p>1&&m>1)return;let b=Math.max(p,m);if(p&&m)u[a-c]=Math.max(p,m);else{if(b>1)return;u[a-c]=0}}return u}static isValidBroadcast(e,r){let t=e.length,o=r.length;if(t>o)return!1;for(let i=1;i<=t;i++)if(e[t-i]!==1&&e[t-i]!==r[o-i])return!1;return!0}},j=class n{static size(e){return n.getSizeFromDimensionRange(e,0,e.length)}static convertShape(e,r=4){let t=e.length;if(t===0)return[];let o=new Array(t),i=t-1;for(;i>=0;){if(e[i]%r===0){o[i]=e[i]/r;break}if(r%e[i]!==0)throw new Error("cannot convert shape");o[i]=1,r/=e[i],i--}for(i--;i>=0;i--)o[i]=e[i];return o}static sizeFromDimension(e,r){if(r<0||r>e.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${e.length} dimensions.`);return n.getSizeFromDimensionRange(e,r,e.length)}static sizeToDimension(e,r){if(r<0||r>e.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${e.length} dimensions.`);return n.getSizeFromDimensionRange(e,0,r)}static getSizeFromDimensionRange(e,r,t){let o=1;for(let i=r;i<t;i++){if(e[i]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");o*=Number(e[i])}return o}static computeStrides(e){let r=e.length;if(r===0)return[];if(r===1)return[1];let t=new Array(r);t[r-1]=1,t[r-2]=e[r-1];for(let o=r-3;o>=0;--o)t[o]=t[o+1]*e[o+1];return t}static normalizeAxis(e,r){if(e<-r&&e>=r)throw new Error("unsupported axis for this operation.");return e<0?e+r:e}static normalizeAxes(e,r){return e.map(t=>this.normalizeAxis(t,r??e.length))}static sortBasedOnPerm(e,r){return r?r.map(t=>e[t]):e.slice().reverse()}static padShape(e,r){let t=e.length;return e.map((o,i)=>o+r[i]+r[i+t])}static areEqual(e,r){return e.length!==r.length?!1:e.every((t,o)=>t===r[o])}},Hn=class n{static adjustPoolAttributes(e,r,t,o,i,a){if(!e&&t.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(e)for(let u=0;u<r.length-2;u++)u>=t.length?t.push(r[u+2]):t[u]=r[u+2];for(let u=0;u<t.length;u++)if(u<o.length){if(o[u]<0)throw new Error("strides should be greater than or equal to 1")}else o.push(1);for(let u=0;u<t.length;u++)if(u<i.length){if(i[u]<0)throw new Error("dilations should be greater than or equal to 1")}else i.push(1);for(let u=0;u<t.length*2;u++)if(u<a.length){if(a[u]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let u=0;u<t.length;u++){if(t[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[u]>=t[u]||a[u+t.length]>=t[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(e,r,t,o,i,a,u){if(u){if(i.length!==2*(e.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==e.length-2)throw new Error("length of strides should be the length of data dimensions");if(o.length!==e.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let c=0;c<e.length-2;c++)n.adjustPadAndReturnShape(e[c+(a?1:2)],r[c],t[c],o[c],i,c,c+e.length-2,u)}}static computePoolOutputShape(e,r,t,o,i,a,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let c=[r[0],r[1]];return n.computeShapeHelper(e,r,c,t,o,i,a,u),c}static computeConvOutputShape(e,r,t,o,i,a,u){if(e.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let c=[e[0],r[0]];return n.computeShapeHelper(!1,e,c,t,o,i,a,u),c}static computeShapeHelper(e,r,t,o,i,a,u,c){if(e)for(let p=0;p<r.length-2;p++)t.push(1);else for(let p=0;p<r.length-2;p++)t.push(n.adjustPadAndReturnShape(r[p+2],o[p],i[p],a[p],u,p,p+r.length-2,c))}static adjustPadAndReturnShape(e,r,t,o,i,a,u,c){let p=t*(o-1)+1;if(c&&c!=="NOTSET")switch(c){case"VALID":return i[a]=0,i[u]=0,Math.floor((e-p)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(t!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let b=((e+r-1)/r-1)*r+o-e;return i[a]=Math.floor(c==="SAME_LOWER"?(b+1)/2:b/2),i[u]=b-i[a],Math.floor((e+b-o)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((e+i[a]+i[u]-p)/r+1)}},Ba=class{static getShapeOfGemmResult(e,r,t,o,i){if(e.length!==2||t.length!==2)throw new Error("shape need to be of size 2");let a,u,c;r?(a=e[1],u=e[0]):(a=e[0],u=e[1]);let p=-1;if(o?(c=t[0],p=1):(c=t[1],p=0),t[p]!==u)throw new Error("dimension mismatch");if(a<=0||c<=0||u<=0)throw new Error("invalid shape specified");if(i&&!Xr.isValidBroadcast(i,[a,c]))throw new Error("gemm: invalid bias shape for broadcast");return[a,c,u]}},vw=-34028234663852886e22,ww=34028234663852886e22});var Fa,vc=W(()=>{"use strict";ve();Fa=(n,e)=>new(La(e))(n)});var mN,xw,gN,Tw,Va,Ga,wc,Iw,Sw=W(()=>{"use strict";Kr();mN=1,xw=()=>mN++,gN=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Tw=(n,e)=>{let r=gN.get(n);if(!r)throw new Error("Unsupported data type.");return e.length>0?Math.ceil(e.reduce((t,o)=>t*o)*r/8):0},Va=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return Tw(this.dataType,this.tensorShape)}destroy(){Oe("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,r,t){return this.mlContext===e&&this.dataType===r&&this.tensorShape.length===t.length&&this.tensorShape.every((o,i)=>o===t[i])}},Ga=class{constructor(e,r){this.tensorManager=e;this.wrapper=r}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,r,t,o){let i=this.tensorManager.getMLContext(e);if(this.wrapper){if(this.wrapper.canReuseTensor(i,r,t))return this.wrapper.tensor;if(o){if(this.wrapper.byteLength!==Tw(r,t))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let a=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,r,t,a,!0,!0),o&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else Oe("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},wc=class{constructor(e){this.backend=e;this.tensorTrackersById=new Map;this.freeTensors=[];this.externalTensors=new Set}getMLContext(e){let r=this.backend.getMLContext(e);if(!r)throw new Error("MLContext not found for session.");return r}reserveTensorId(){let e=xw();return this.tensorTrackersById.set(e,new Ga(this)),e}releaseTensorId(e){let r=this.tensorTrackersById.get(e);r&&(this.tensorTrackersById.delete(e),r.tensorWrapper&&this.releaseTensor(r.tensorWrapper))}async ensureTensor(e,r,t,o,i){Oe("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${r}, dataType: ${t}, shape: ${o}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(r);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,t,o,i)}upload(e,r){let t=this.tensorTrackersById.get(e);if(!t)throw new Error("Tensor not found.");t.upload(r)}async download(e,r){Oe("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${r?.byteLength}}`);let t=this.tensorTrackersById.get(e);if(!t)throw new Error("Tensor not found.");return t.download(r)}releaseTensorsForSession(e){for(let r of this.freeTensors)r.sessionId===e&&r.destroy();this.freeTensors=this.freeTensors.filter(r=>r.sessionId!==e)}registerTensor(e,r,t,o){let i=this.getMLContext(e),a=xw(),u=new Va({sessionId:e,context:i,tensor:r,dataType:t,shape:o});return this.tensorTrackersById.set(a,new Ga(this,u)),this.externalTensors.add(u),a}async getCachedTensor(e,r,t,o,i,a){let u=this.getMLContext(e);for(let[p,m]of this.freeTensors.entries())if(m.canReuseTensor(u,r,t)){Oe("verbose",()=>`[WebNN] Reusing tensor {dataType: ${r}, shape: ${t}}`);let b=this.freeTensors.splice(p,1)[0];return b.sessionId=e,b}Oe("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${r}, shape: ${t}}`);let c=await u.createTensor({dataType:r,shape:t,dimensions:t,usage:o,writable:i,readable:a});return new Va({sessionId:e,context:u,tensor:c,dataType:r,shape:t})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Iw=(...n)=>new wc(...n)});var xc,yN,Ua,$w=W(()=>{"use strict";ve();Tn();vc();Sw();Kr();xc=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),yN=(n,e)=>{if(n===e)return!0;if(n===void 0||e===void 0)return!1;let r=Object.keys(n).sort(),t=Object.keys(e).sort();return r.length===t.length&&r.every((o,i)=>o===t[i]&&n[o]===e[o])},Ua=class{constructor(e){this.tensorManager=Iw(this);this.mlContextBySessionId=new Map;this.sessionIdsByMLContext=new Map;this.mlContextCache=[];this.sessionGraphInputs=new Map;this.temporaryGraphInputs=[];this.temporarySessionTensorIds=new Map;Ma(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Oe("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Oe("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let r=this.temporarySessionTensorIds.get(e);if(r){for(let t of r)Oe("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${t}}`),this.tensorManager.releaseTensorId(t);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let t=this.mlContextCache.findIndex(o=>o.gpuDevice===e);if(t!==-1)return this.mlContextCache[t].mlContext;{let o=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:o}),o}}else if(e===void 0){let t=this.mlContextCache.findIndex(o=>o.options===void 0&&o.gpuDevice===void 0);if(t!==-1)return this.mlContextCache[t].mlContext;{let o=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:o}),o}}let r=this.mlContextCache.findIndex(t=>yN(t.options,e));if(r!==-1)return this.mlContextCache[r].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:t}),t}}registerMLContext(e,r){this.mlContextBySessionId.set(e,r);let t=this.sessionIdsByMLContext.get(r);t||(t=new Set,this.sessionIdsByMLContext.set(r,t)),t.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let r=this.mlContextBySessionId.get(e);if(!r)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let t=this.sessionIdsByMLContext.get(r);if(t.delete(e),t.size===0){this.sessionIdsByMLContext.delete(r);let o=this.mlContextCache.findIndex(i=>i.mlContext===r);o!==-1&&this.mlContextCache.splice(o,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Oe("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,r,t,o,i){let a=xc.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,r,a,o,i)}async createTemporaryTensor(e,r,t){Oe("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${r}, shape: ${t}}`);let o=xc.get(r);if(!o)throw new Error(`Unsupported ONNX data type: ${r}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,o,t,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,r){if(!Ke().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Oe("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${r.byteLength}}`),this.tensorManager.upload(e,r)}async downloadTensor(e,r){return this.tensorManager.download(e,r)}createMLTensorDownloader(e,r){return async()=>{let t=await this.tensorManager.download(e);return Fa(t,r)}}registerMLTensor(e,r,t,o){let i=xc.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.registerTensor(e,r,i,o);return Oe("verbose",()=>`[WebNN] registerMLTensor {tensor: ${r}, dataType: ${i}, dimensions: ${o}} -> {tensorId: ${a}}`),a}registerMLConstant(e,r,t,o,i,a){if(!a)throw new Error("External mounted files are not available.");let u=e;e.startsWith("./")&&(u=e.substring(2));let c=a.get(u);if(!c)throw new Error(`File with name ${u} not found in preloaded files.`);if(r+t>c.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let p=c.slice(r,r+t).buffer,m;switch(i.dataType){case"float32":m=new Float32Array(p);break;case"float16":m=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(p):new Uint16Array(p);break;case"int32":m=new Int32Array(p);break;case"uint32":m=new Uint32Array(p);break;case"int64":m=new BigInt64Array(p);break;case"uint64":m=new BigUint64Array(p);break;case"int8":m=new Int8Array(p);break;case"int4":case"uint4":case"uint8":m=new Uint8Array(p);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Oe("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}}`),o.constant(i,m)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,r){let t=this.sessionGraphInputs.get(e);return t?t.includes(r):!1}flush(){}}});var ja=W(()=>{"use strict"});var Aw,Tc,Ic,bN,_N,Pw,$c,Sc,Cw,Ew=W(()=>{"use strict";Kr();ja();Aw=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Tc=[],Ic=n=>Math.ceil(Number(n)/16)*16,bN=n=>{for(let e=0;e<Tc.length;e++){let r=Tc[e];if(n<=r)return r}return Math.ceil(n/16)*16},_N=1,Pw=()=>_N++,$c=async(n,e,r,t)=>{let o=Ic(r),i=n.device.createBuffer({size:o,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=n.getCommandEncoder();n.endComputePass(),a.copyBufferToBuffer(e,0,i,0,o),n.flush(),await i.mapAsync(GPUMapMode.READ);let u=i.getMappedRange();if(t){let c=t();return c.set(new Uint8Array(u,0,r)),c}else return new Uint8Array(u.slice(0,r))}finally{i.destroy()}},Sc=class{constructor(e){this.backend=e;this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[r]of Aw)Tc.push(r),this.freeBuffers.set(r,[]),this.freeUniformBuffers.set(r,[]);this.sessionCount=0}upload(e,r){let t=r.buffer,o=r.byteOffset,i=r.byteLength,a=Ic(i),u=this.storageCache.get(e);if(!u)throw new Error("gpu data for uploading does not exist");if(Number(u.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${u.originalSize}, data size=${i}`);let c=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),p=c.getMappedRange();new Uint8Array(p).set(new Uint8Array(t,o,i)),c.unmap();let m=this.backend.device.createCommandEncoder();m.copyBufferToBuffer(c,0,u.gpuData.buffer,0,a),this.backend.device.queue.submit([m.finish()]),c.destroy(),Oe("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,r){let t=this.storageCache.get(e);if(!t)throw new Error("source gpu data for memcpy does not exist");let o=this.storageCache.get(r);if(!o)throw new Error("destination gpu data for memcpy does not exist");if(t.originalSize!==o.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=Ic(t.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(t.gpuData.buffer,0,o.gpuData.buffer,0,i)}registerExternalBuffer(e,r,t){let o;if(t){if(o=t[0],e===t[1])return Oe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${r}) => id=${o}, buffer is the same, skip.`),o;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else o=Pw();return this.storageCache.set(o,{gpuData:{id:o,type:0,buffer:e},originalSize:r}),Oe("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${r}) => id=${o}, registered.`),o}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Oe("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,r=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let t=bN(e),o,i=(r&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(r&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let p=(i?this.freeBuffers:this.freeUniformBuffers).get(t);p?p.length>0?o=p.pop():o=this.backend.device.createBuffer({size:t,usage:r}):o=this.backend.device.createBuffer({size:t,usage:r})}else o=this.backend.device.createBuffer({size:t,usage:r});let u={id:Pw(),type:0,buffer:o};return this.storageCache.set(u.id,{gpuData:u,originalSize:Number(e)}),Oe("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${u.id}`),u}get(e){return this.storageCache.get(e)?.gpuData}release(e){let r=typeof e=="bigint"?Number(e):e,t=this.storageCache.get(r);if(!t){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Oe("verbose",()=>`[WebGPU] GpuDataManager.release(id=${r}), gpuDataId=${t.gpuData.id}`),this.storageCache.delete(r),this.buffersPending.push(t.gpuData.buffer),t.originalSize}async download(e,r){let t=this.storageCache.get(Number(e));if(!t)throw new Error("data does not exist");await $c(this.backend,t.gpuData.buffer,t.originalSize,r)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let r=Aw.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let t=this.freeBuffers.get(e.size)||[];r===void 0||t.length>=r?e.destroy():t.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let t=this.freeUniformBuffers.get(e.size)||[];r===void 0||t.length>=r?e.destroy():t.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let r of this.buffersPending)e.push(r);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let r=this.capturedPendingBuffers.get(e);r&&(r.forEach(t=>{t.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Oe("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(t=>{t.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Cw=(...n)=>new Sc(...n)});var Ac,we,it=W(()=>{"use strict";Ac=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},we=n=>new Ac(n)});var qn,Oc,Xe,gt,Q,ze,Cc,Kn,or,ue,Wa,H,Z,Dw,Ha,Pc,kw,Ae=W(()=>{"use strict";ve();Se();qn=64,Oc=(n,e)=>{if(e===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(n)){case 10:return e>1?`vec${e}<f16>`:"f16";case 1:return e>1?`vec${e}<f32>`:"f32";case 6:return e>1?`vec${e}<i32>`:"i32";case 12:return e>1?`vec${e}<u32>`:"u32";case 7:if(e>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(e>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(e!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${n}`)}},Xe=(n,e=1)=>{let r=Oc(n,e);return typeof r=="string"?r:r[0]},gt=(n,e=1)=>{let r=Oc(n,e);return typeof r=="string"?r:r[1]},Q=(...n)=>{let e=[];return n.forEach(r=>{r.length!==0&&e.push({type:12,data:r},{type:12,data:j.computeStrides(r)})}),e},ze=n=>n%4===0?4:n%2===0?2:1,Cc=(n="f32",e,r="0")=>!e||e===1?`${n}(${r})`:`vec${e}<${n}>(${r})`,Kn=(n,e,r)=>n==="f32"?r:e===1?`f32(${r})`:`vec${e}<f32>(${r})`,or=(n,e)=>e===4?`(${n}.x + ${n}.y + ${n}.z + ${n}.w)`:e===2?`(${n}.x + ${n}.y)`:e===3?`(${n}.x + ${n}.y + ${n}.z)`:n,ue=(n,e,r,t)=>n.startsWith("uniforms.")&&r>4?typeof e=="string"?t==="f16"?`${n}[(${e}) / 8][(${e}) % 8 / 4][(${e}) % 8 % 4]`:`${n}[(${e}) / 4][(${e}) % 4]`:t==="f16"?`${n}[${Math.floor(e/8)}][${Math.floor(e%8/4)}][${e%8%4}]`:`${n}[${Math.floor(e/4)}][${e%4}]`:r>1?`${n}[${e}]`:n,Wa=(n,e,r,t,o)=>{let i=typeof r=="number",a=i?r:r.length,u=[...new Array(a).keys()],c=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,p=Oc(e,o),m=typeof p=="string"?p:p[1],b=typeof p=="string"?p:p[0],_={indices:c,value:m,storage:b,tensor:e},x=B=>typeof B=="string"?B:`${B}u`,T={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},I=i?"uniforms.":"",P=`${I}${n}_shape`,$=`${I}${n}_strides`,A="";for(let B=0;B<a-1;B++)A+=`
    let dim${B} = current / ${ue($,B,a)};
    let rest${B} = current % ${ue($,B,a)};
    indices[${B}] = dim${B};
    current = rest${B};
    `;A+=`indices[${a-1}] = current;`;let C=a<2?"":`
  fn o2i_${n}(offset: u32) -> ${_.indices} {
    var indices: ${_.indices};
    var current = offset;
    ${A}
    return indices;
  }`,k=B=>(T.offsetToIndices=!0,a<2?B:`o2i_${n}(${B})`),z=[];if(a>=2)for(let B=a-1;B>=0;B--)z.push(`${ue($,B,a)} * (indices[${B}])`);let M=a<2?"":`
  fn i2o_${n}(indices: ${_.indices}) -> u32 {
    return ${z.join("+")};
  }`,q=B=>(T.indicesToOffset=!0,a<2?B:`i2o_${n}(${B})`),X=(...B)=>a===0?"0u":`${_.indices}(${B.map(x).join(",")})`,J=(B,re)=>a<2?`${B}`:`${ue(B,re,a)}`,ie=(B,re,Re)=>a<2?`${B}=${Re};`:`${ue(B,re,a)}=${Re};`,le={},me=(B,re)=>{T.broadcastedIndicesToOffset=!0;let Re=`${re.name}broadcastedIndicesTo${n}Offset`;if(Re in le)return`${Re}(${B})`;let It=[];for(let tt=a-1;tt>=0;tt--){let at=re.indicesGet("outputIndices",tt+re.rank-a);It.push(`${J($,tt)} * (${at} % ${J(P,tt)})`)}return le[Re]=`fn ${Re}(outputIndices: ${re.type.indices}) -> u32 {
             return ${It.length>0?It.join("+"):"0u"};
           }`,`${Re}(${B})`},ne=(B,re)=>(()=>{if(_.storage===_.value)return`${n}[${B}]=${re};`;if(_.storage==="vec2<u32>"&&_.value==="i32")return`${n}[${B}]=vec2<u32>(u32(${re}), select(0u, 0xFFFFFFFFu, ${re} < 0));`;if(_.storage==="vec2<u32>"&&_.value==="u32")return`${n}[${B}]=vec2<u32>(u32(${re}), 0u);`;if(_.storage==="u32"&&_.value==="vec4<bool>")return`${n}[${B}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${re}));`;throw new Error(`not supported combination of storage type ${_.storage} and value type ${_.value} yet`)})(),he=B=>(()=>{if(_.storage===_.value)return`${n}[${B}]`;if(_.storage==="vec2<u32>"&&_.value==="i32")return`i32(${n}[${B}].x)`;if(_.storage==="vec2<u32>"&&_.value==="u32")return`u32(${n}[${B}].x)`;if(_.storage==="u32"&&_.value==="vec4<bool>")return`vec4<bool>(bool(${n}[${B}] & 0xFFu), bool(${n}[${B}] & 0xFF00u), bool(${n}[${B}] & 0xFF0000u), bool(${n}[${B}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${_.storage} and value type ${_.value} yet`)})(),Ze=a<2?"":`
  fn get_${n}ByIndices(indices: ${_.indices}) -> ${m} {
    return ${he(`i2o_${n}(indices)`)};
  }`,se=a<2?"":(()=>{let B=u.map(Re=>`d${Re}: u32`).join(", "),re=u.map(Re=>`d${Re}`).join(", ");return`
  fn get_${n}(${B}) -> ${m} {
    return get_${n}ByIndices(${X(re)});
  }`})(),de=(...B)=>{if(B.length!==a)throw new Error(`indices length must be ${a}`);let re=B.map(x).join(",");return a===0?he("0u"):a===1?he(re[0]):(T.get=!0,T.getByIndices=!0,T.indicesToOffset=!0,`get_${n}(${re})`)},xe=B=>a<2?he(B):(T.getByIndices=!0,T.indicesToOffset=!0,`get_${n}ByIndices(${B})`),ye=a<2?"":`
  fn set_${n}ByIndices(indices: ${_.indices}, value: ${m}) {
    ${ne(`i2o_${n}(indices)`,"value")}
  }`,Ee=a<2?"":(()=>{let B=u.map(Re=>`d${Re}: u32`).join(", "),re=u.map(Re=>`d${Re}`).join(", ");return`
  fn set_${n}(${B}, value: ${m}) {
    set_${n}ByIndices(${X(re)}, value);
  }`})();return{impl:()=>{let B=[],re=!1;return T.offsetToIndices&&(B.push(C),re=!0),T.indicesToOffset&&(B.push(M),re=!0),T.broadcastedIndicesToOffset&&(Object.values(le).forEach(Re=>B.push(Re)),re=!0),T.set&&(B.push(Ee),re=!0),T.setByIndices&&(B.push(ye),re=!0),T.get&&(B.push(se),re=!0),T.getByIndices&&(B.push(Ze),re=!0),!i&&re&&B.unshift(`const ${P} = ${_.indices}(${r.join(",")});`,`const ${$} = ${_.indices}(${j.computeStrides(r).join(",")});`),B.join(`
`)},type:_,offsetToIndices:k,indicesToOffset:q,broadcastedIndicesToOffset:me,indices:X,indicesGet:J,indicesSet:ie,set:(...B)=>{if(B.length!==a+1)throw new Error(`indices length must be ${a}`);let re=B[a];if(typeof re!="string")throw new Error("value must be string");let Re=B.slice(0,a).map(x).join(",");return a===0?ne("0u",re):a===1?ne(Re[0],re):(T.set=!0,T.setByIndices=!0,T.indicesToOffset=!0,`set_${n}(${Re}, ${re})`)},setByOffset:ne,setByIndices:(B,re)=>a<2?ne(B,re):(T.setByIndices=!0,T.indicesToOffset=!0,`set_${n}ByIndices(${B}, ${re});`),get:de,getByOffset:he,getByIndices:xe,usage:t,name:n,strides:$,shape:P,rank:a}},H=(n,e,r,t=1)=>Wa(n,e,r,"input",t),Z=(n,e,r,t=1)=>Wa(n,e,r,"output",t),Dw=(n,e,r)=>Wa(n,e,r,"atomicOutput",1),Ha=(n,e,r,t=1)=>Wa(n,e,r,"internal",t),Pc=class{constructor(e,r){this.normalizedDispatchGroup=e;this.limits=r;this.internalVariables=[];this.variables=[];this.uniforms=[];this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=qn){let r=typeof e=="number"?e:e[0],t=typeof e=="number"?1:e[1],o=typeof e=="number"?1:e[2];if(r>this.limits.maxComputeWorkgroupSizeX||t>this.limits.maxComputeWorkgroupSizeY||o>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${r}, ${t}, ${o}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(r*t*o>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${r}, ${t}, ${o}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,u=i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${r*t*o}u + local_idx;`;return`@compute @workgroup_size(${r}, ${t}, ${o})
  fn main(${a}) {
    ${u}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,r){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let t=e.usage==="input"?"read":"read_write",o=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${r}) var<storage, ${t}> ${e.name}: array<${o}>;`}declareVariables(...e){return e.map(r=>this.declareVariable(r,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(r=>this.registerInternalVariable(r)),this}registerUniform(e,r,t=1){return this.uniforms.push({name:e,type:r,length:t}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:r,type:t,length:o}of this.uniforms)if(o&&o>4)t==="f16"?e.push(`@align(16) ${r}:array<mat2x4<${t}>, ${Math.ceil(o/8)}>`):e.push(`${r}:array<vec4<${t}>, ${Math.ceil(o/4)}>`);else{let i=o==null||o===1?t:`vec${o}<${t}>`;e.push(`${r}:${i}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=r=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(r)];return this.uniforms.map(r=>[e(r.type),r.length??1])}},kw=(n,e)=>new Pc(n,e)});var vN,Nw,wN,xN,TN,IN,yt,Lw,Rw,sn=W(()=>{"use strict";ve();Se();it();Ae();vN=(n,e)=>{if(!n||n.length!==1)throw new Error("Transpose requires 1 input.");if(e.length!==0&&e.length!==n[0].dims.length)throw new Error(`perm size ${e.length} does not match input rank ${n[0].dims.length}`)},Nw=(n,e)=>e.length!==0?e:[...new Array(n).keys()].reverse(),wN=(n,e)=>j.sortBasedOnPerm(n,Nw(n.length,e)),xN=(n,e,r,t)=>{let o=`fn perm(i: ${t.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let i=0;i<e;++i)o+=`a[${n[i]}]=i[${i}];`;return o+="return a;}"},TN=(n,e)=>{let r=[],t=[];for(let o=0;o<n.length;++o)n[o]!==1&&r.push(n[o]),n[e[o]]!==1&&t.push(e[o]);return{newShape:r,newPerm:t}},IN=(n,e)=>{let r=0;for(let t=0;t<n.length;++t)if(e[n[t]]!==1){if(n[t]<r)return!1;r=n[t]}return!0},yt=(n,e)=>{let r=n.dataType,t=n.dims.length,o=Nw(t,e),i=wN(n.dims,o),a=n.dims,u=i,c=t<2||IN(o,n.dims),p;if(c)return p=I=>{let P=H("input",r,a,4),$=Z("output",r,u,4);return`
  ${I.registerUniform("output_size","u32").declareVariables(P,$)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let I=j.size(i);return{outputs:[{dims:i,dataType:n.dataType}],dispatchGroup:{x:Math.ceil(I/64/4)},programUniforms:[{type:12,data:Math.ceil(I/4)}]}},getShaderSource:p};let{newShape:m,newPerm:b}=TN(n.dims,o),_=j.areEqual(b,[2,3,1]),x=j.areEqual(b,[3,1,2]);if(m.length===2||_||x){a=_?[m[0],m[1]*m[2]]:x?[m[0]*m[1],m[2]]:m,u=[a[1],a[0]];let I=16;return p=P=>{let $=H("a",r,a.length),A=Z("output",r,u.length);return`
  ${P.registerUniform("output_size","u32").declareVariables($,A)}
  var<workgroup> tile : array<array<${A.type.value}, ${I+1}>, ${I}>;
  ${P.mainStart([I,I,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${I} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${I}u + local_id.x;
    let input_row = workgroup_id_x * ${I}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${$.getByIndices(`${$.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${I}u + local_id.x;
    let output_row = workgroup_id_y * ${I}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${A.setByIndices(`${A.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let P=j.size(i);return{outputs:[{dims:i,dataType:n.dataType}],dispatchGroup:{x:Math.ceil(u[1]/I),y:Math.ceil(u[0]/I)},programUniforms:[{type:12,data:P},...Q(a,u)]}},getShaderSource:p}}return p=I=>{let P=H("a",r,a.length),$=Z("output",r,u.length);return`
  ${I.registerUniform("output_size","u32").declareVariables(P,$)}

  ${xN(o,t,P,$)}

  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",P.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${e}`,inputDependencies:["rank"]},getRunData:()=>{let I=j.size(i);return{outputs:[{dims:i,dataType:n.dataType}],dispatchGroup:{x:Math.ceil(I/64)},programUniforms:[{type:12,data:I},...Q(a,u)]}},getShaderSource:p}},Lw=(n,e)=>{vN(n.inputs,e.perm),n.compute(yt(n.inputs[0],e.perm))},Rw=n=>we({perm:n.perm})});var SN,$N,AN,PN,ON,CN,EN,DN,kN,NN,Yr,zw,Mw,Bw,Fw,Vw,Gw,Uw,jw,Ww,Hw,qw=W(()=>{"use strict";ve();Se();Ae();qa();sn();SN={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},$N={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},AN={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},PN={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},ON=(n,e)=>{let r=[];for(let t=e-n;t<e;++t)r.push(t);return r},CN=(n,e)=>{let r=[],t=n.length;for(let i=0;i<t;i++)e.indexOf(i)===-1&&r.push(n[i]);let o=e.map(i=>n[i]);return[r,o]},EN=(n,e)=>{let r=n.length+e.length,t=[],o=0;for(let i=0;i<r;i++)e.indexOf(i)===-1?t.push(n[o++]):t.push(1);return t},DN=(n,e)=>{for(let r=0;r<n.length;++r)if(n[n.length-r-1]!==e-1-r)return!1;return!0},kN=(n,e)=>{let r=[];if(!DN(n,e)){for(let t=0;t<e;++t)n.indexOf(t)===-1&&r.push(t);n.forEach(t=>r.push(t))}return r},NN=(n,e,r,t,o,i,a)=>{let u=r[0].dims,c=j.size(i),p=j.size(a),m=H("_A",r[0].dataType,u),b=Z("output",o,i),_=64;c===1&&(_=256);let x=`
          var<workgroup> aBestValues : array<f32, ${_}>;
       `,T=I=>`
        ${I.registerUniform("reduceSize","u32").declareVariables(m,b)}
        ${x}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${I.mainStart(_)}

          let outputIndex = global_idx / ${_};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${AN[t]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${_}) {
           let candidate = f32(${m.getByOffset("offset + k")});
           bestValue = ${SN[t]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${_}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${$N[t]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${b.setByOffset("outputIndex",`${t==="mean"?`${b.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${b.type.storage}(${PN[t]})`}`)};
         }
        }`;return{name:n,shaderCache:{hint:`${e};${_}`,inputDependencies:["type"]},getShaderSource:T,getRunData:()=>({outputs:[{dims:i,dataType:o}],dispatchGroup:{x:c},programUniforms:[{type:12,data:p}]})}},Yr=(n,e,r,t)=>{let o=n.inputs.length===1?r:Ec(n.inputs,r),i=o.axes;i.length===0&&!o.noopWithEmptyAxes&&(i=n.inputs[0].dims.map((x,T)=>T));let a=j.normalizeAxes(i,n.inputs[0].dims.length),u=a,c=n.inputs[0],p=kN(u,n.inputs[0].dims.length);p.length>0&&(c=n.compute(yt(n.inputs[0],p),{inputs:[0],outputs:[-1]})[0],u=ON(u.length,c.dims.length));let[m,b]=CN(c.dims,u),_=m;o.keepDims&&(_=EN(m,a)),n.compute(NN(e,o.cacheKey,[c],t,n.inputs[0].dataType,_,b),{inputs:[c]})},zw=(n,e)=>{Yr(n,"ReduceMeanShared",e,"mean")},Mw=(n,e)=>{Yr(n,"ReduceL1Shared",e,"l1")},Bw=(n,e)=>{Yr(n,"ReduceL2Shared",e,"l2")},Fw=(n,e)=>{Yr(n,"ReduceLogSumExpShared",e,"logSumExp")},Vw=(n,e)=>{Yr(n,"ReduceMaxShared",e,"max")},Gw=(n,e)=>{Yr(n,"ReduceMinShared",e,"min")},Uw=(n,e)=>{Yr(n,"ReduceProdShared",e,"prod")},jw=(n,e)=>{Yr(n,"ReduceSumShared",e,"sum")},Ww=(n,e)=>{Yr(n,"ReduceSumSquareShared",e,"sumSquare")},Hw=(n,e)=>{Yr(n,"ReduceLogSumShared",e,"logSum")}});var Zr,LN,Ka,Ec,Jr,RN,zN,MN,BN,FN,VN,GN,UN,jN,WN,Qr,Kw,Xw,Yw,Zw,Jw,Qw,ex,tx,rx,nx,qa=W(()=>{"use strict";ve();Se();it();Ae();qw();Zr=n=>{if(!n||n.length===0||n.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(n.length===2&&n[1].dims.length!==1)throw new Error("Invalid axes input dims.")},LN=n=>["","",`var value = ${n.getByIndices("input_indices")};`,""],Ka=(n,e,r,t,o,i,a=!1,u=!1)=>{let c=[],p=r[0].dims,m=p.length,b=j.normalizeAxes(o,m),_=!u&&b.length===0;p.forEach((P,$)=>{_||b.indexOf($)>=0?a&&c.push(1):c.push(P)});let x=c.length,T=j.size(c);return{name:n,shaderCache:e,getShaderSource:P=>{let $=[],A=H("_A",r[0].dataType,m),C=Z("output",i,x),k=t(A,C,b),z=k[2];for(let M=0,q=0;M<m;M++)_||b.indexOf(M)>=0?(a&&q++,z=`for(var j${M}: u32 = 0; j${M} < ${p[M]}; j${M}++) {
                  ${k[2].includes("last_index")?`let last_index = j${M};`:""}
                  ${A.indicesSet("input_indices",M,`j${M}`)}
                  ${z}
                }`):($.push(`${A.indicesSet("input_indices",M,C.indicesGet("output_indices",q))};`),q++);return`

        ${P.registerUniform("output_size","u32").declareVariables(A,C)}

        ${P.mainStart()}
          ${P.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${A.type.indices};
          let output_indices = ${C.offsetToIndices("global_idx")};

          ${$.join(`
`)}
          ${k[0]}       // init ops for reduce max/min
          ${k[1]}
          ${z}
          ${k[3]}
          ${k.length===4?C.setByOffset("global_idx","value"):k.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:c,dataType:i}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...Q(p,c)]})}},Ec=(n,e)=>{let r=[];return n[1].dims[0]>0&&n[1].getBigInt64Array().forEach(t=>r.push(Number(t))),we({axes:r,keepDims:e.keepDims,noopWithEmptyAxes:e.noopWithEmptyAxes})},Jr=(n,e,r,t)=>{let o=n.inputs,i=o.length===1?r:Ec(o,r);n.compute(Ka(e,{hint:i.cacheKey,inputDependencies:["rank"]},[o[0]],i.noopWithEmptyAxes&&i.axes.length===0?LN:t,i.axes,o[0].dataType,i.keepDims,i.noopWithEmptyAxes),{inputs:[0]})},RN=(n,e)=>{Zr(n.inputs),Jr(n,"ReduceLogSum",e,(t,o)=>[`var value = ${o.type.storage}(0);`,"",`value += ${t.getByIndices("input_indices")};`,"value = log(value);"])},zN=(n,e)=>{Zr(n.inputs),Jr(n,"ReduceL1",e,(t,o)=>[`var value = ${o.type.storage}(0);`,"",`value += abs(${t.getByIndices("input_indices")});`,""])},MN=(n,e)=>{Zr(n.inputs),Jr(n,"ReduceL2",e,(t,o)=>[`var t = ${o.type.value}(0); var value = ${o.type.value}(0);`,"",`t = ${t.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},BN=(n,e)=>{Zr(n.inputs),Jr(n,"ReduceLogSumExp",e,(t,o)=>[`var value = ${o.type.storage}(0);`,"",`value += exp(${t.getByIndices("input_indices")});`,"value = log(value);"])},FN=(n,e)=>{Zr(n.inputs),Jr(n,"ReduceMax",e,(t,o,i)=>{let a=[];for(let u=0;u<t.rank;u++)(i.indexOf(u)>=0||i.length===0)&&a.push(t.indicesSet("input_indices",u,0));return[`${a.join(`
`)}`,`var value = ${t.getByIndices("input_indices")};`,`value = max(value, ${t.getByIndices("input_indices")});`,""]})},VN=(n,e)=>{Zr(n.inputs),Jr(n,"ReduceMean",e,(t,o,i)=>{let a=1;for(let u=0;u<t.rank;u++)(i.indexOf(u)>=0||i.length===0)&&(a*=n.inputs[0].dims[u]);return["var sum = f32(0);","",`sum += f32(${t.getByIndices("input_indices")});`,`let value = ${o.type.value}(sum / ${a});`]})},GN=(n,e)=>{Zr(n.inputs),Jr(n,"ReduceMin",e,(t,o,i)=>{let a=[];for(let u=0;u<t.rank;u++)(i.indexOf(u)>=0||i.length===0)&&a.push(`input_indices[${u}] = 0;`);return[`${a.join(`
`)}`,`var value = ${t.getByIndices("input_indices")};`,`value = min(value, ${t.getByIndices("input_indices")});`,""]})},UN=(n,e)=>{Zr(n.inputs),Jr(n,"ReduceProd",e,(t,o)=>[`var value = ${o.type.storage}(1);`,"",`value *= ${t.getByIndices("input_indices")};`,""])},jN=(n,e)=>{Zr(n.inputs),Jr(n,"ReduceSum",e,(t,o)=>[`var value = ${o.type.storage}(0);`,"",`value += ${t.getByIndices("input_indices")};`,""])},WN=(n,e)=>{Zr(n.inputs),Jr(n,"ReduceSumSquare",e,(t,o)=>[`var t = ${o.type.value}(0); var value = ${o.type.value}(0);`,"",`t = ${t.getByIndices("input_indices")}; value += t * t;`,""])},Qr=(n,e,r)=>{if(e.length===0)return r;let t=1,o=1;for(let i=0;i<e.length;i++)e.indexOf(i)===-1?t*=n[i]:o*=n[i];return o<32&&t>1024},Kw=(n,e)=>{Qr(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?VN(n,e):zw(n,e)},Xw=(n,e)=>{Qr(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?zN(n,e):Mw(n,e)},Yw=(n,e)=>{Qr(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?MN(n,e):Bw(n,e)},Zw=(n,e)=>{Qr(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?BN(n,e):Fw(n,e)},Jw=(n,e)=>{Qr(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?FN(n,e):Vw(n,e)},Qw=(n,e)=>{Qr(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?GN(n,e):Gw(n,e)},ex=(n,e)=>{Qr(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?UN(n,e):Uw(n,e)},tx=(n,e)=>{Qr(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?jN(n,e):jw(n,e)},rx=(n,e)=>{Qr(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?WN(n,e):Ww(n,e)},nx=(n,e)=>{Qr(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?RN(n,e):Hw(n,e)}});var ox,ix,ax,Dc,sx=W(()=>{"use strict";ve();it();qa();ox=n=>{if(!n||n.length===0||n.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(n[0].dataType!==1)throw new Error("Invalid input type.")},ix=(n,e)=>{ox(n.inputs);let r=(t,o,i)=>{let a=[];for(let u=0;u<t.rank;u++)(i.indexOf(u)>=0||i.length===0)&&a.push(`input_indices[${u}] = 0;`);return[`${a.join(`
`)}`,`var value = ${t.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${t.getByIndices("input_indices")} ${e.selectLastIndex>0?"<=":"<"} value) {
         value = ${t.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",o.setByOffset("global_idx","best_index")]};n.compute(Ka("ArgMin",{hint:e.cacheKey,inputDependencies:["rank"]},[n.inputs[0]],r,[e.axis],7,e.keepDims),{inputs:[0]})},ax=(n,e)=>{ox(n.inputs);let r=(t,o,i)=>{let a=[];for(let u=0;u<t.rank;u++)(i.indexOf(u)>=0||i.length===0)&&a.push(`input_indices[${u}] = 0;`);return[`${a.join(`
`)}`,`var value = ${t.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${t.getByIndices("input_indices")} ${e.selectLastIndex>0?">=":">"} value) {
         value = ${t.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",o.setByOffset("global_idx","best_index")]};n.compute(Ka("argMax",{hint:e.cacheKey,inputDependencies:["rank"]},[n.inputs[0]],r,[e.axis],7,e.keepDims),{inputs:[0]})},Dc=n=>we(n)});var HN,kc,qN,KN,XN,yo,YN,ux,Xa=W(()=>{"use strict";ve();Se();ja();Ae();HN=(n,e)=>{let r=n[0],t=n[1],o=n[2],i=n[3],a=n[4],u=n[5];if(a&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let c=r.dims[0],p=r.dims[1],m=r.dims[2];if(o.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(t.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(t.dims[0]!==m)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(o.dims[0]!==t.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let b=o.dims[0]/3,_=b,x=_;if(e.qkvHiddenSizes.length>0){if(e.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let C of e.qkvHiddenSizes)if(C%e.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");b=e.qkvHiddenSizes[0],_=e.qkvHiddenSizes[1],x=e.qkvHiddenSizes[2]}let T=p;if(b!==_)throw new Error("qkv_hidden_sizes first element should be same as the second");if(o.dims[0]!==b+_+x)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let I=0;if(a){if(_!==x)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==c)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==e.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==_/e.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');e.pastPresentShareBuffer||(I=a.dims[3])}let P=T+I,$=-1,A=0;if(i)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==e.numHeads||u.dims[2]!==p||u.dims[3]!==P)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:p,pastSequenceLength:I,kvSequenceLength:T,totalSequenceLength:P,maxSequenceLength:$,inputHiddenSize:m,hiddenSize:b,vHiddenSize:x,headSize:Math.floor(b/e.numHeads),vHeadSize:Math.floor(x/e.numHeads),numHeads:e.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:e.maskFilterValue,maskType:A,scale:e.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},kc=(n,e,r)=>e&&n?`
      let total_sequence_length_input = u32(${e.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${n?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,qN=(n,e,r,t,o,i,a,u)=>{let c=ze(a?1:i),p=64,m=i/c;m<p&&(p=32);let b=Math.ceil(i/c/p),_=[{type:12,data:e},{type:12,data:r},{type:12,data:t},{type:12,data:o},{type:12,data:m},{type:12,data:b}],x=Xe(n.dataType,c),T=gt(1,c),I=["type"];a&&I.push("type"),u&&I.push("type");let P=$=>{let A=Z("x",n.dataType,n.dims,c),C=[A],k=a?H("seq_lens",a.dataType,a.dims):void 0;k&&C.push(k);let z=u?H("total_sequence_length_input",u.dataType,u.dims):void 0;z&&C.push(z);let M=gt(n.dataType),q=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${p}>;
  var<workgroup> thread_sum: array<f32, ${p}>;
  ${$.registerUniforms(q).declareVariables(...C)}
  ${$.mainStart([p,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${kc(k,z,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${p}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${a?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${T}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${T}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(c){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${p}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${T}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${T}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(c){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${p}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${A.type.value}(${M}(1.0) / ${M}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${T}(x[offset + i]);
        x[offset + i] = ${A.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${A.type.value}(${M}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${p};${x};${c}`,inputDependencies:I},getShaderSource:P,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:o,z:e*r},programUniforms:_})}},KN=(n,e,r,t,o,i,a,u,c)=>{let p=a+i.kvSequenceLength,m=[i.batchSize,i.numHeads,i.sequenceLength,p],b=n>1&&t,_=i.kvNumHeads?i.kvNumHeads:i.numHeads,x=b?[i.batchSize,_,p,i.headSize]:void 0,T=i.nReps?i.nReps:1,I=i.scale===0?1/Math.sqrt(i.headSize):i.scale,P=ze(i.headSize),$=i.headSize/P,A=12,C={x:Math.ceil(p/A),y:Math.ceil(i.sequenceLength/A),z:i.batchSize*i.numHeads},k=[{type:12,data:i.sequenceLength},{type:12,data:$},{type:12,data:p},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:1,data:I},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:T}],z=b&&t&&j.size(t.dims)>0,M=["type","type"];z&&M.push("type"),o&&M.push("type"),u&&M.push("type"),c&&M.push("type");let q=[{dims:m,dataType:e.dataType,gpuDataType:0}];b&&q.push({dims:x,dataType:e.dataType,gpuDataType:0});let X=J=>{let ie=H("q",e.dataType,e.dims,P),le=H("key",r.dataType,r.dims,P),me=[ie,le];if(z){let ye=H("past_key",t.dataType,t.dims,P);me.push(ye)}o&&me.push(H("attention_bias",o.dataType,o.dims));let ne=u?H("seq_lens",u.dataType,u.dims):void 0;ne&&me.push(ne);let he=c?H("total_sequence_length_input",c.dataType,c.dims):void 0;he&&me.push(he);let Ze=Z("output",e.dataType,m),se=[Ze];b&&se.push(Z("present_key",e.dataType,x,P));let de=gt(1,P),xe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${A}u;

  var<workgroup> tileQ: array<${ie.type.storage}, ${A*A}>;
  var<workgroup> tileK: array<${ie.type.storage}, ${A*A}>;
  ${J.registerUniforms(xe).declareVariables(...me,...se)}
  ${J.mainStart([A,A,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${T===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${T===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${kc(ne,he,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${z&&b?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${b?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${de}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${z&&b?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${b?`if (n + local_id.y < present_sequence_length) {
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
      var sum: f32 = ${(()=>{switch(P){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${P}`)}})()};
        output[outputIdx] = ${Ze.type.value} (sum * uniforms.alpha) + ${o?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${P};${o!==void 0};${t!==void 0};${n}`,inputDependencies:M},getRunData:()=>({outputs:q,dispatchGroup:C,programUniforms:k}),getShaderSource:X}},XN=(n,e,r,t,o,i,a=void 0,u=void 0)=>{let c=i+o.kvSequenceLength,p=o.nReps?o.nReps:1,m=o.vHiddenSize*p,b=n>1&&t,_=o.kvNumHeads?o.kvNumHeads:o.numHeads,x=b?[o.batchSize,_,c,o.headSize]:void 0,T=[o.batchSize,o.sequenceLength,m],I=12,P={x:Math.ceil(o.vHeadSize/I),y:Math.ceil(o.sequenceLength/I),z:o.batchSize*o.numHeads},$=[{type:12,data:o.sequenceLength},{type:12,data:c},{type:12,data:o.vHeadSize},{type:12,data:o.numHeads},{type:12,data:o.headSize},{type:12,data:m},{type:12,data:i},{type:12,data:o.kvSequenceLength},{type:12,data:p}],A=b&&t&&j.size(t.dims)>0,C=["type","type"];A&&C.push("type"),a&&C.push("type"),u&&C.push("type");let k=[{dims:T,dataType:e.dataType,gpuDataType:0}];b&&k.push({dims:x,dataType:e.dataType,gpuDataType:0});let z=M=>{let q=H("probs",e.dataType,e.dims),X=H("v",r.dataType,r.dims),J=[q,X];A&&J.push(H("past_value",t.dataType,t.dims));let ie=a?H("seq_lens",a.dataType,a.dims):void 0;a&&J.push(ie);let le=u?H("total_sequence_length_input",u.dataType,u.dims):void 0;u&&J.push(le);let ne=[Z("output",e.dataType,T)];b&&ne.push(Z("present_value",e.dataType,x));let he=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${I}u;
  var<workgroup> tileQ: array<${q.type.value}, ${I*I}>;
  var<workgroup> tileV: array<${q.type.value}, ${I*I}>;
  ${M.registerUniforms(he).declareVariables(...J,...ne)}
  ${M.mainStart([I,I,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${p===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${p===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${kc(ie,le,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${A&&b?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${b?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${q.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${A&&b?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${b?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${t!==void 0};${n}`,inputDependencies:C},getRunData:()=>({outputs:k,dispatchGroup:P,programUniforms:$}),getShaderSource:z}},yo=(n,e,r,t,o,i,a,u,c,p,m=void 0,b=void 0)=>{let _=Math.min(n.outputCount,1+(a?1:0)+(u?1:0)),x=_>1?p.pastSequenceLength:0,T=x+p.kvSequenceLength,I=c&&j.size(c.dims)>0?c:void 0,P=[e,r];_>1&&a&&j.size(a.dims)>0&&P.push(a),I&&P.push(I),m&&P.push(m),b&&P.push(b);let $=n.compute(KN(_,e,r,a,I,p,x,m,b),{inputs:P,outputs:_>1?[-1,1]:[-1]})[0];n.compute(qN($,p.batchSize,p.numHeads,x,p.sequenceLength,T,m,b),{inputs:m&&b?[$,m,b]:[$],outputs:[]});let A=[$,t];_>1&&u&&j.size(u.dims)>0&&A.push(u),m&&A.push(m),b&&A.push(b),n.compute(XN(_,$,t,u,p,x,m,b),{inputs:A,outputs:_>1?[0,2]:[0]})},YN=(n,e)=>{let r=[e.batchSize,e.numHeads,e.sequenceLength,e.headSize],t=e.sequenceLength,o=e.inputHiddenSize,i=e.headSize,a=12,u={x:Math.ceil(e.headSize/a),y:Math.ceil(e.sequenceLength/a),z:e.batchSize*e.numHeads},c=[n.inputs[0],n.inputs[1],n.inputs[2]],p=[{type:12,data:t},{type:12,data:o},{type:12,data:i},{type:12,data:e.numHeads},{type:12,data:e.headSize},{type:12,data:e.hiddenSize},{type:12,data:e.hiddenSize+e.hiddenSize+e.vHiddenSize}],m=b=>{let _=Z("output_q",c[0].dataType,r),x=Z("output_k",c[0].dataType,r),T=Z("output_v",c[0].dataType,r),I=H("input",c[0].dataType,c[0].dims),P=H("weight",c[1].dataType,c[1].dims),$=H("bias",c[2].dataType,c[2].dims),A=I.type.storage,C=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${A}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${A}, ${a*a}>;
  var<workgroup> tileWeightK: array<${A}, ${a*a}>;
  var<workgroup> tileWeightV: array<${A}, ${a*a}>;
  ${b.registerUniforms(C).declareVariables(I,P,$,_,x,T)}
  ${b.mainStart([a,a,1])}
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
  }`};return n.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:n.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:n.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:n.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:p}),getShaderSource:m},{inputs:c,outputs:[-1,-1,-1]})},ux=(n,e)=>{let r=HN(n.inputs,e),[t,o,i]=YN(n,r);return yo(n,t,o,i,n.inputs[4],void 0,void 0,void 0,n.inputs[5],r)}});var ZN,JN,QN,lx,cx=W(()=>{"use strict";xt();ve();Se();it();Ae();ZN=(n,e)=>{if(!n||n.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(t,o,i)=>{let a=o.length;if(a!==t.length)throw new Error(`${i}: num dimensions != ${a}`);o.forEach((u,c)=>{if(u!==t[c])throw new Error(`${i}: dim[${c}] do not match`)})};if(n[0].dims.length>1){let t=e.format==="NHWC"?e.spatial?n[0].dims.slice(-1):n[0].dims.slice(-1).concat(n[0].dims.slice(1,n[0].dims.length-1)):n[0].dims.slice(1,e.spatial?2:void 0);r(n[1].dims,t,"Invalid input scale"),r(n[2].dims,t,"Invalid input B"),r(n[3].dims,t,"Invalid input mean"),r(n[4].dims,t,"Invalid input var")}else r(n[1].dims,[1],"Invalid input scale"),r(n[2].dims,[1],"Invalid input B"),r(n[3].dims,[1],"Invalid input mean"),r(n[4].dims,[1],"Invalid input var")},JN=(n,e)=>{let{epsilon:r,spatial:t,format:o}=e,i=n[0].dims,a=t?ze(i[i.length-1]):1,u=o==="NHWC"&&i.length>1?a:1,c=j.size(i)/a,p=t,m=p?i.length:i,b=H("x",n[0].dataType,n[0].dims,a),_=H("scale",n[1].dataType,n[1].dims,u),x=H("bias",n[2].dataType,n[2].dims,u),T=H("inputMean",n[3].dataType,n[3].dims,u),I=H("inputVar",n[4].dataType,n[4].dims,u),P=Z("y",n[0].dataType,m,a),$=()=>{let C="";if(t)C=`let cOffset = ${i.length===1?"0u":o==="NHWC"?`outputIndices[${i.length-1}] / ${a}`:"outputIndices[1]"};`;else if(o==="NCHW")C=`
            ${P.indicesSet("outputIndices","0","0")}
            let cOffset = ${P.indicesToOffset("outputIndices")};`;else{C=`var cIndices = ${_.type.indices}(0);
                       cIndices[0] = outputIndices[${i.length-1}];`;for(let k=1;k<_.rank;k++)C+=`cIndices[${k}] = outputIndices[${k}];`;C+=`let cOffset = ${_.indicesToOffset("cIndices")};`}return C},A=C=>`
  const epsilon = ${r};
  ${C.registerUniform("outputSize","u32").declareVariables(b,_,x,T,I,P)}
  ${C.mainStart()}
  ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${P.offsetToIndices(`global_idx * ${a}`)};
    ${$()}
    let scale = ${_.getByOffset("cOffset")};
    let bias = ${x.getByOffset("cOffset")};
    let inputMean = ${T.getByOffset("cOffset")};
    let inputVar = ${I.getByOffset("cOffset")};
    let x = ${b.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${P.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${e.epsilon}_${e.format}_${t}_${a}`,inputDependencies:p?["rank","type","type","type","type"]:void 0},getShaderSource:A,getRunData:()=>({outputs:[{dims:n[0].dims,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:p?[{type:12,data:c},...Q(i)]:[{type:12,data:c}]})}},QN=n=>we(n),lx=(n,e)=>{let{inputs:r,outputCount:t}=n,o=QN({...e,outputCount:t});if(Ie.webgpu.validateInputContent&&ZN(r,o),e.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");n.compute(JN(r,o))}});var eL,tL,dx,fx=W(()=>{"use strict";Se();Ae();eL=n=>{if(n[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(n[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(n[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(n[0].dims[2]!==n[1].dims[0])throw new Error("last dimension of input and bias are not the same")},tL=n=>{let e=n[0].dims,r=n[0].dims[2],t=j.size(e)/4,o=n[0].dataType,i=H("input",o,e,4),a=H("bias",o,[r],4),u=H("residual",o,e,4),c=Z("output",o,e,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:e,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(t/64)}}),getShaderSource:m=>`
  const channels = ${r}u / 4;
  ${m.declareVariables(i,a,u,c)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes(t)}
    let value = ${i.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${c.setByOffset("global_idx","value")}
  }`}},dx=n=>{eL(n.inputs),n.compute(tL(n.inputs))}});var rL,Ve,px,hx,mx,gx,yx,bx,_x,vx,wx,nL,xx,Tx,Ix,Sx,Zo,$x,Ya,Ax,Px,Ox,Cx,Ex,Dx,kx,Nx,Lx,Rx,zx,Mx,Bx,Fx,Vx,Gx,Ux,jx,Nc,Lc,Wx,Hx,qx,oL,iL,Kx,Za=W(()=>{"use strict";ve();Se();it();Ae();rL=(n,e,r,t,o,i,a)=>{let u=Math.ceil(e/4),c="";typeof o=="string"?c=`${o}(a)`:c=o("a");let p=H("inputData",r,[u],4),m=Z("outputData",t,[u],4),b=[{name:"vec_size",type:"u32"}];return a&&b.push(...a),`
      ${n.registerUniforms(b).declareVariables(p,m)}

  ${i??""}

  ${n.mainStart()}
    ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${p.getByOffset("global_idx")};
    ${m.setByOffset("global_idx",c)}
  }`},Ve=(n,e,r,t,o,i=n.dataType,a,u)=>{let c=[{type:12,data:Math.ceil(j.size(n.dims)/4)}];return a&&c.push(...a),{name:e,shaderCache:{hint:o,inputDependencies:["type"]},getShaderSource:p=>rL(p,j.size(n.dims),n.dataType,i,r,t,u),getRunData:p=>({outputs:[{dims:n.dims,dataType:i}],dispatchGroup:{x:Math.ceil(j.size(p[0].dims)/64/4)},programUniforms:c})}},px=n=>{n.compute(Ve(n.inputs[0],"Abs","abs"))},hx=n=>{n.compute(Ve(n.inputs[0],"Acos","acos"))},mx=n=>{n.compute(Ve(n.inputs[0],"Acosh","acosh"))},gx=n=>{n.compute(Ve(n.inputs[0],"Asin","asin"))},yx=n=>{n.compute(Ve(n.inputs[0],"Asinh","asinh"))},bx=n=>{n.compute(Ve(n.inputs[0],"Atan","atan"))},_x=n=>{n.compute(Ve(n.inputs[0],"Atanh","atanh"))},vx=n=>we(n),wx=(n,e)=>{let r;switch(e.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${e.to}`)}n.compute(Ve(n.inputs[0],"Cast",r,void 0,e.cacheKey,e.to))},nL=n=>{let e,r,t=n.length>=2&&n[1].data!==0,o=n.length>=3&&n[2].data!==0;switch(n[0].dataType){case 1:e=t?n[1].getFloat32Array()[0]:-34028234663852886e22,r=o?n[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:e=t?n[1].getUint16Array()[0]:64511,r=o?n[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return we({min:e,max:r})},xx=(n,e)=>{let r=e||nL(n.inputs),t=gt(n.inputs[0].dataType);n.compute(Ve(n.inputs[0],"Clip",o=>`clamp(${o}, vec4<${t}>(uniforms.min), vec4<${t}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:n.inputs[0].dataType,data:r.min},{type:n.inputs[0].dataType,data:r.max}],[{name:"min",type:t},{name:"max",type:t}]),{inputs:[0]})},Tx=n=>{n.compute(Ve(n.inputs[0],"Ceil","ceil"))},Ix=n=>{n.compute(Ve(n.inputs[0],"Cos","cos"))},Sx=n=>{n.compute(Ve(n.inputs[0],"Cosh","cosh"))},Zo=n=>we(n),$x=(n,e)=>{let r=gt(n.inputs[0].dataType);n.compute(Ve(n.inputs[0],"Elu",t=>`elu_vf32(${t})`,`
  const elu_alpha_ = ${r}(${e.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,e.cacheKey))},Ya=(n="f32")=>`
const r0: ${n} = 0.3275911;
const r1: ${n} = 0.254829592;
const r2: ${n} = -0.284496736;
const r3: ${n} = 1.421413741;
const r4: ${n} = -1.453152027;
const r5: ${n} = 1.061405429;

fn erf_vf32(v: vec4<${n}>) -> vec4<${n}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Ax=n=>{let e=gt(n.inputs[0].dataType);n.compute(Ve(n.inputs[0],"Erf",r=>`erf_vf32(${r})`,Ya(e)))},Px=n=>{n.compute(Ve(n.inputs[0],"Exp","exp"))},Ox=n=>{n.compute(Ve(n.inputs[0],"Floor","floor"))},Cx=n=>{let e=gt(n.inputs[0].dataType);n.compute(Ve(n.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Ya(e)))},Ex=(n,e)=>{let r=gt(n.inputs[0].dataType);n.compute(Ve(n.inputs[0],"LeakyRelu",t=>`select(leaky_relu_alpha_ * ${t}, ${t}, ${t} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${e.alpha});`,e.cacheKey))},Dx=n=>{n.compute(Ve(n.inputs[0],"Not",e=>`!${e}`))},kx=n=>{n.compute(Ve(n.inputs[0],"Neg",e=>`-${e}`))},Nx=n=>{n.compute(Ve(n.inputs[0],"Reciprocal",e=>`1.0/${e}`))},Lx=n=>{let e=gt(n.inputs[0].dataType);n.compute(Ve(n.inputs[0],"Relu",r=>`select(vec4<${e}>(0.0), ${r}, ${r} > vec4<${e}>(0.0))`))},Rx=n=>{n.compute(Ve(n.inputs[0],"Sigmoid",e=>`(1.0 / (1.0 + exp(-${e})))`))},zx=n=>we(n),Mx=(n,e)=>{let r=gt(n.inputs[0].dataType);n.compute(Ve(n.inputs[0],"HardSigmoid",t=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${e.alpha} * ${t} + vec4<${r}>(${e.beta})))`,void 0,e.cacheKey))},Bx=n=>{n.compute(Ve(n.inputs[0],"Sin","sin"))},Fx=n=>{n.compute(Ve(n.inputs[0],"Sinh","sinh"))},Vx=n=>{n.compute(Ve(n.inputs[0],"Sqrt","sqrt"))},Gx=n=>{n.compute(Ve(n.inputs[0],"Tan","tan"))},Ux=n=>`sign(${n}) * (1 - exp(-2 * abs(${n}))) / (1 + exp(-2 * abs(${n})))`,jx=n=>{n.compute(Ve(n.inputs[0],"Tanh",Ux))},Nc=(n="f32")=>`
const fast_gelu_a: ${n} = 0.5;
const fast_gelu_b: ${n} = 0.7978845608028654;
const fast_gelu_c: ${n} = 0.035677408136300125;

fn tanh_v(v: vec4<${n}>) -> vec4<${n}> {
  return ${Ux("v")};
}
`,Lc=n=>`(fast_gelu_a + fast_gelu_a * tanh_v(${n} * (fast_gelu_c * ${n} * ${n} + fast_gelu_b))) * ${n}`,Wx=n=>{let e=gt(n.inputs[0].dataType);n.compute(Ve(n.inputs[0],"FastGelu",Lc,Nc(e),void 0,n.inputs[0].dataType))},Hx=(n,e)=>{let r=gt(n.inputs[0].dataType);return n.compute(Ve(n.inputs[0],"ThresholdedRelu",t=>`select(vec4<${r}>(0.0), ${t}, ${t} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${e.alpha});`,e.cacheKey)),0},qx=n=>{n.compute(Ve(n.inputs[0],"Log","log"))},oL=(n,e)=>`
const alpha = vec4<${n}>(${e});
const one = ${n}(1.0);
const zero = ${n}(0.0);

fn quick_gelu_impl(x: vec4<${n}>) -> vec4<${n}> {
  let v = x *alpha;
  var x1 : vec4<${n}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,iL=n=>`quick_gelu_impl(${n})`,Kx=(n,e)=>{let r=gt(n.inputs[0].dataType);n.compute(Ve(n.inputs[0],"QuickGelu",iL,oL(r,e.alpha),e.cacheKey,n.inputs[0].dataType))}});var aL,sL,Yx,Zx=W(()=>{"use strict";Se();Ae();Za();aL=n=>{if(n[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(n[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(n[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(n[0].dims[2]!==n[1].dims[0])throw new Error("last dimension of input and bias are not the same")},sL=n=>{let e=n[0].dims.slice();e[2]=e[2]/2;let r=H("input",n[0].dataType,n[0].dims,4),t=H("bias",n[0].dataType,[n[0].dims[2]],4),o=Z("output",n[0].dataType,e,4),i=j.size(e)/4,a=Xe(n[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:e,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:c=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${n[0].dims[2]/4/2}u;

  ${c.declareVariables(r,t,o)}

  ${Ya(a)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${o.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Yx=n=>{aL(n.inputs),n.compute(sL(n.inputs))}});var uL,lL,en,Jx,Qx,eT,tT,rT,nT,oT,iT,aT,sT,uT=W(()=>{"use strict";ve();Se();Ae();uL=(n,e,r,t,o,i,a,u,c,p,m,b)=>{let _,x;typeof u=="string"?_=x=(A,C)=>`${u}((${A}),(${C}))`:typeof u=="function"?_=x=u:(_=u.scalar,x=u.vector);let T=Z("outputData",m,t.length,4),I=H("aData",c,e.length,4),P=H("bData",p,r.length,4),$;if(o)if(i){let A=j.size(e)===1,C=j.size(r)===1,k=e.length>0&&e[e.length-1]%4===0,z=r.length>0&&r[r.length-1]%4===0;A||C?$=T.setByOffset("global_idx",x(A?`${I.type.value}(${I.getByOffset("0")}.x)`:I.getByOffset("global_idx"),C?`${P.type.value}(${P.getByOffset("0")}.x)`:P.getByOffset("global_idx"))):$=`
            let outputIndices = ${T.offsetToIndices("global_idx * 4u")};
            let offsetA = ${I.broadcastedIndicesToOffset("outputIndices",T)};
            let offsetB = ${P.broadcastedIndicesToOffset("outputIndices",T)};
            ${T.setByOffset("global_idx",x(a||k?I.getByOffset("offsetA / 4u"):`${I.type.value}(${I.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||z?P.getByOffset("offsetB / 4u"):`${P.type.value}(${P.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else $=T.setByOffset("global_idx",x(I.getByOffset("global_idx"),P.getByOffset("global_idx")));else{if(!i)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let A=(C,k,z="")=>{let M=`aData[indexA${k}][componentA${k}]`,q=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${T.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${I.broadcastedIndicesToOffset(`outputIndices${k}`,T)};
            let offsetB${k} = ${P.broadcastedIndicesToOffset(`outputIndices${k}`,T)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${C}[${k}] = ${z}(${_(M,q)});
          `};m===9?$=`
            var data = vec4<u32>(0);
            ${A("data",0,"u32")}
            ${A("data",1,"u32")}
            ${A("data",2,"u32")}
            ${A("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:$=`
            ${A("outputData[global_idx]",0)}
            ${A("outputData[global_idx]",1)}
            ${A("outputData[global_idx]",2)}
            ${A("outputData[global_idx]",3)}
          `}return`
        ${n.registerUniform("vec_size","u32").declareVariables(I,P,T)}

        ${b??""}

        ${n.mainStart()}
        ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${$}
      }`},lL=(n,e,r,t,o,i,a=r.dataType)=>{let u=r.dims.map(I=>Number(I)??1),c=t.dims.map(I=>Number(I)??1),p=!j.areEqual(u,c),m=u,b=j.size(u),_=!1,x=!1,T=[p];if(p){let I=Xr.calcShape(u,c,!1);if(!I)throw new Error("Can't perform binary op on the given tensors");m=I.slice(),b=j.size(m);let P=j.size(u)===1,$=j.size(c)===1,A=u.length>0&&u[u.length-1]%4===0,C=c.length>0&&c[c.length-1]%4===0;T.push(P),T.push($),T.push(A),T.push(C);let k=1;for(let z=1;z<m.length;z++){let M=u[u.length-z],q=c[c.length-z];if(M===q)k*=M;else break}k%4===0?(x=!0,_=!0):(P||$||A||C)&&(_=!0)}else _=!0;return T.push(_),{name:n,shaderCache:{hint:e+T.map(I=>I.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:I=>uL(I,u,c,m,_,p,x,o,r.dataType,t.dataType,a,i),getRunData:()=>({outputs:[{dims:m,dataType:a}],dispatchGroup:{x:Math.ceil(b/64/4)},programUniforms:[{type:12,data:Math.ceil(j.size(m)/4)},...Q(u,c,m)]})}},en=(n,e,r,t,o,i)=>{n.compute(lL(e,o??"",n.inputs[0],n.inputs[1],r,t,i))},Jx=n=>{en(n,"Add",(e,r)=>`${e}+${r}`)},Qx=n=>{en(n,"Div",(e,r)=>`${e}/${r}`)},eT=n=>{en(n,"Equal",{scalar:(e,r)=>`u32(${e}==${r})`,vector:(e,r)=>`vec4<u32>(${e}==${r})`},void 0,void 0,9)},tT=n=>{en(n,"Mul",(e,r)=>`${e}*${r}`)},rT=n=>{let e=H("input",n.inputs[0].dataType,n.inputs[0].dims).type.value;en(n,"Pow",{scalar:(t,o)=>`pow_custom(${t},${o})`,vector:(t,o)=>`pow_vector_custom(${t},${o})`},`
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
      `)},nT=n=>{en(n,"Sub",(e,r)=>`${e}-${r}`)},oT=n=>{en(n,"Greater",{scalar:(e,r)=>`u32(${e}>${r})`,vector:(e,r)=>`vec4<u32>(${e}>${r})`},void 0,void 0,9)},iT=n=>{en(n,"Less",{scalar:(e,r)=>`u32(${e}<${r})`,vector:(e,r)=>`vec4<u32>(${e}<${r})`},void 0,void 0,9)},aT=n=>{en(n,"GreaterOrEqual",{scalar:(e,r)=>`u32(${e}>=${r})`,vector:(e,r)=>`vec4<u32>(${e}>=${r})`},void 0,void 0,9)},sT=n=>{en(n,"LessOrEqual",{scalar:(e,r)=>`u32(${e}<=${r})`,vector:(e,r)=>`vec4<u32>(${e}<=${r})`},void 0,void 0,9)}});var dL,fL,pL,hL,lT,cT,dT=W(()=>{"use strict";ve();Se();it();Ae();dL=(n,e)=>{if(!n||n.length<1)throw new Error("too few inputs");let r=0,t=n[r],o=t.dataType,i=t.dims.length;n.forEach((a,u)=>{if(u!==r){if(a.dataType!==o)throw new Error("input tensors should be one type");if(a.dims.length!==i)throw new Error("input tensors should have the same shape");a.dims.forEach((c,p)=>{if(p!==e&&c!==t.dims[p])throw new Error("non concat dimensions must match")})}})},fL=(n,e)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${n}u>(${e});
    for (var i: u32 = 0u; i < ${n}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${n}u;
  }`,pL=(n,e)=>{let r=n.length,t=[];for(let o=0;o<r;++o){let i=e.setByOffset("global_idx",n[o].getByIndices("indices"));r===1?t.push(i):o===0?t.push(`if (inputIndex == ${o}u) { ${i} }`):o===r-1?t.push(`else { ${i} }`):t.push(`else if (inputIndex == ${o}) { ${i} }`)}return t.join(`
`)},hL=(n,e,r,t)=>{let o=j.size(r),i=new Array(n.length),a=new Array(n.length),u=0,c=[],p=[],m=[{type:12,data:o}];for(let I=0;I<n.length;++I)u+=n[I].dims[e],i[I]=u,p.push(n[I].dims.length),a[I]=H(`input${I}`,t,p[I]),c.push("rank"),m.push({type:12,data:i[I]});for(let I=0;I<n.length;++I)m.push(...Q(n[I].dims));m.push(...Q(r));let b=Z("output",t,r.length),_=b.indicesGet("indices",e),x=Array.from(Array(i.length).keys()).map(I=>`uniforms.sizeInConcatAxis${I}`).join(","),T=I=>`

  ${(()=>{I.registerUniform("outputSize","u32");for(let P=0;P<n.length;P++)I.registerUniform(`sizeInConcatAxis${P}`,"u32");return I.declareVariables(...a,b)})()}

  ${fL(i.length,x)}

  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${b.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${_});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${i.length}u>(${x});
      ${_} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${pL(a,b)}
  }`;return{name:"Concat",shaderCache:{hint:`${e}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:m}),getShaderSource:T}},lT=(n,e)=>{let r=n.inputs,t=r[0].dims,o=j.normalizeAxis(e.axis,t.length);dL(r,o);let i=t.slice();i[o]=r.reduce((u,c)=>u+(c.dims.length>o?c.dims[o]:0),0);let a=r.filter(u=>j.size(u.dims)>0);n.compute(hL(a,o,i,r[0].dataType),{inputs:a})},cT=n=>we({axis:n.axis})});var ir,ar,sr,Ja,$n=W(()=>{"use strict";ve();Se();ir=(n,e,r="f32")=>{switch(n.activation){case"Relu":return`value = max(value, ${e}(0.0));`;case"Sigmoid":return`value = (${e}(1.0) / (${e}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${e}(${r}(uniforms.clip_min)), ${e}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${e}(0.0), min(${e}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${e}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${n.activation}`)}},ar=(n,e)=>{n.activation==="Clip"?e.push({type:1,data:n.clipMax},{type:1,data:n.clipMin}):n.activation==="HardSigmoid"?e.push({type:1,data:n.alpha},{type:1,data:n.beta}):n.activation==="LeakyRelu"&&e.push({type:1,data:n.alpha})},sr=(n,e)=>{n.activation==="Clip"?e.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):n.activation==="HardSigmoid"?e.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):n.activation==="LeakyRelu"&&e.push({name:"alpha",type:"f32"})},Ja=n=>{let e=n?.activation||"";if(e==="HardSigmoid"){let[r,t]=n?.activation_params||[.2,.5];return{activation:e,alpha:r,beta:t}}else if(e==="Clip"){let[r,t]=n?.activation_params||[vw,ww];return{activation:e,clipMax:t,clipMin:r}}else if(e==="LeakyRelu"){let[r]=n?.activation_params||[.01];return{activation:e,alpha:r}}return{activation:e}}});var ht,fT,Qa=W(()=>{"use strict";ht=(n,e)=>{switch(n){case 1:return e;case 2:return`vec2<${e}>`;case 3:return`vec3<${e}>`;case 4:return`vec4<${e}>`;default:throw new Error(`${n}-component is not supported.`)}},fT=n=>`
      ${n?"value = value + getBiasByOutputCoords(coords);":""}
      `});var pT,hT=W(()=>{"use strict";pT=n=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${n}.x), i32(${n}.y), i32(${n}.z), 1));
}
`});var Jo,es,ts=W(()=>{"use strict";ve();Se();Ae();$n();Jo=(n,e,r,t,o)=>{let i=t-r;return`
      ${Array.from({length:r}).map((a,u)=>`
      if (${ue(e.shape,u,e.rank)} != 1) {
        ${e.indicesSet(n,u,ue(o,u+i,t))}
      } else {
        ${e.indicesSet(n,u,0)}
      }`).join("")}
`},es=(n,e,r,t,o=!1,i)=>{let a=n[0].dims,u=n[1].dims,c=a[a.length-2],p=u[u.length-1],m=a[a.length-1],b=ze(p),_=ze(m),x=ze(c),T=j.size(r)/b/x,I=n.length>2,P=t?t.slice(0,-2):r.slice(0,-2),A=[j.size(P),c,p],C=[{type:12,data:T},{type:12,data:c},{type:12,data:p},{type:12,data:m}];ar(e,C),C.push(...Q(P,a,u)),I&&C.push(...Q(n[2].dims)),C.push(...Q(A));let k=z=>{let M=Ha("batch_dims",n[0].dataType,P.length),q=H("a",n[0].dataType,a.length,_),X=H("b",n[1].dataType,u.length,b),J=Z("output",n[0].dataType,A.length,b),ie=Xe(J.type.tensor),le=ir(e,J.type.value,ie),me=[q,X],ne="";if(I){let se=o?b:1;me.push(H("bias",n[2].dataType,n[2].dims.length,se)),ne=`${o?`value += bias[col / ${se}];`:`value += ${J.type.value}(bias[row + i]);`}`}let he=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];sr(e,he);let Ze=()=>{let se=`var a_data: ${q.type.value};`;for(let de=0;de<_;de++)se+=`
              let b_data${de} = b[(b_offset + (k + ${de}) * uniforms.N + col) / ${b}];`;for(let de=0;de<x;de++){se+=`a_data = a[(a_offset + (row + ${de}) * uniforms.K + k) / ${_}];`;for(let xe=0;xe<_;xe++)se+=`
            values[${de}] = fma(${X.type.value}(a_data${_===1?"":`[${xe}]`}), b_data${xe}, values[${de}]);
`}return se};return`
  ${z.registerUniforms(he).registerInternalVariables(M).declareVariables(...me,J)}
  ${z.mainStart()}
    ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${b})) * ${b};
    var index1 = global_idx / (uniforms.N / ${b});
    let stride1 = uniforms.M / ${x};
    let row = (index1 % stride1) * ${x};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${M.offsetToIndices("batch")};`}

    var a_indices: ${q.type.indices};
    ${Jo("a_indices",q,q.rank-2,M.rank,"batch_indices")}
    ${q.indicesSet("a_indices",q.rank-2,0)}
    ${q.indicesSet("a_indices",q.rank-1,0)}
    let a_offset = ${q.indicesToOffset("a_indices")};

    var b_indices: ${X.type.indices};
    ${Jo("b_indices",X,X.rank-2,M.rank,"batch_indices")}
    ${X.indicesSet("b_indices",X.rank-2,0)}
    ${X.indicesSet("b_indices",X.rank-1,0)}
    let b_offset = ${X.indicesToOffset("b_indices")};
    var values: array<${J.type.value}, ${x}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${_}) {
      ${Ze()}
    }
    for (var i = 0u; i < ${x}u; i++) {
      var value = values[i];
      ${ne}
      ${le}
      let cur_indices = ${J.type.indices}(batch, row + i, col);
      let offset = ${J.indicesToOffset("cur_indices")};
      ${J.setByOffset(`offset / ${b}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${e.activation};${b};${_};${x};${o}`,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:C}),getShaderSource:k}}});var mL,gL,Rc,mT,yL,zc,bL,Qo,rs=W(()=>{"use strict";ve();Se();Ae();$n();ts();Qa();mL=(n,e)=>n?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${e?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${e?", batchIndices":""});
        `,gL=(n,e)=>n?`
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
        }`,Rc=(n,e,r="f32",t,o=!1,i=32,a=!1,u=32)=>{let c=e[1]*n[1],p=e[0]*n[0],m=o?c:i,b=o?i:c,_=m/e[0],x=i/e[1];if(!((o&&_===4&&n[1]===4||!o&&(_===3||_===4))&&m%e[0]===0&&i%e[1]===0&&n[0]===4))throw new Error(`If transposeA ${o} is true, innerElementSize ${_} and workPerThread[1] ${n[1]} must be 4.
      Otherwise, innerElementSize ${_} must be 3 or 4.
  tileAWidth ${m} must be divisible by workgroupSize[0]${e[0]}. tileInner ${i} must be divisible by workgroupSize[1] ${e[1]}. colPerThread ${n[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${_}<${r}>, ${m/_}>, ${b}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${p/n[0]}>, ${i}>;

const rowPerThread = ${n[1]};
const colPerThread = ${n[0]};
const innerElementSize = ${_};
const tileInner = ${i};

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
  ${t?`let batchIndices = ${t.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${c};

  let num_tiles = ${a?`${Math.ceil(u/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${x};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${mL(o,t)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${x}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${t?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${_===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${gL(o,_)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},mT=(n,e)=>n?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${e?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${e?", batchIndices":""});
            `,yL=n=>n?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",zc=(n,e,r="f32",t,o=!1,i=32,a=!1,u=32,c=!1)=>{let p=n[1]*e[1],m=n[0]*e[0],b=o?p:i,_=o?i:p;if(!(_%e[1]===0&&b%e[0]===0&&i%e[1]===0))throw new Error(`tileAHight ${_} must be divisible by workgroupSize[1]${e[1]}, tileAWidth ${b} must be divisible by workgroupSize[0]${e[0]}, tileInner ${i} must be divisible by workgroupSize[1]${e[1]}`);let x=_/e[1],T=b/e[0],I=i/e[1],P=c?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${p};
    let globalColStart = i32(workgroupId.x) * ${m};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${_}; inputRow = inputRow + ${e[1]}) {
        for (var inputCol = localCol; inputCol < ${b}; inputCol = inputCol + ${e[0]}) {
          ${mT(o,t)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${i}; inputRow = inputRow + ${e[1]}) {
            for (var inputCol = localCol; inputCol < ${m}; inputCol = inputCol + ${e[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${t?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${e[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${o?`mm_Asub[k][localRow + innerRow * ${e[1]}];`:`mm_Asub[localRow + innerRow * ${e[1]}][k];`}
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
let globalRowStart = i32(workgroupId.y) * ${p};

let tileRowA = i32(localId.y) * ${x};
let tileColA = i32(localId.x) * ${T};
let tileRowB = i32(localId.y) * ${I};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${x}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${T}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${mT(o,t)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${I}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${t?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${yL(o)}
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
  var<workgroup> mm_Asub : array<array<${r}, ${b}>, ${_}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${m}>, ${i}>;
  const rowPerThread = ${n[1]};
  const colPerThread = ${n[0]};
  const tileInner = ${i};

@compute @workgroup_size(${e[0]}, ${e[1]}, ${e[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${t?`let batchIndices = ${t.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(u/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${P}
  }
`},bL=(n,e,r,t,o=!1)=>{let[i,a,u,c]=t,p=Xe(t[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${ht(n,p)} {
      var value = ${ht(n,p)}(0.0);
      let col = colIn * ${n};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${Jo("aIndices",a,a.rank-2,i.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${ht(n,p)} {
      var value = ${ht(n,p)}(0.0);
      let col = colIn * ${n};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${Jo("bIndices",u,u.rank-2,i.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${ht(n,p)}) {
      let col = colIn * ${n};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${e?`value = value + ${o?"bias[colIn]":`${ht(n,p)}(bias[row])`};`:""}
        ${r}
        ${c.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Qo=(n,e,r,t,o=!1,i)=>{let a=n[0].dims,u=n[1].dims,c=a.slice(0,-2),p=u.slice(0,-2),m=t?t.slice(0,-2):r.slice(0,-2),b=j.size(m),_=a[a.length-2],x=a[a.length-1],T=u[u.length-1],I=x%4===0&&T%4===0,P=_<=8?[4,1,1]:[4,4,1],$=[8,8,1],A=[Math.ceil(T/$[0]/P[0]),Math.ceil(_/$[1]/P[1]),Math.ceil(b/$[2]/P[2])],C=I?4:1,k=[...c,_,x/C],z=k.length,M=[...p,x,T/C],q=M.length,X=[b,_,T/C],J=[{type:6,data:_},{type:6,data:T},{type:6,data:x}];ar(e,J),J.push(...Q(m,k,M));let ie=["rank","rank"],le=n.length>2;le&&(J.push(...Q(n[2].dims)),ie.push("rank")),J.push(...Q(X));let me=ne=>{let he=m.length,Ze=Ha("batchDims",n[0].dataType,he,1),se=Xe(n[0].dataType),de=H("a",n[0].dataType,z,C),xe=H("b",n[1].dataType,q,C),ye=Z("result",n[0].dataType,X.length,C),Ee=[de,xe];if(le){let re=o?C:1;Ee.push(H("bias",n[2].dataType,n[2].dims.length,re))}let He=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];sr(e,He);let Ye=Xe(ye.type.tensor),Te=ir(e,ye.type.value,Ye),B=bL(C,le,Te,[Ze,de,xe,ye],o);return`
  ${ne.registerUniforms(He).registerInternalVariables(Ze).declareVariables(...Ee,ye)}
  ${B}
  ${I?Rc(P,$,se,Ze):zc(P,$,se,Ze)}
                   `};return{name:"MatMul",shaderCache:{hint:`${P};${e.activation};${I};${o}`,inputDependencies:ie},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:n[0].dataType}],dispatchGroup:{x:A[0],y:A[1],z:A[2]},programUniforms:J}),getShaderSource:me}}});var _L,gT,yT=W(()=>{"use strict";ve();Kr();Ae();$n();Qa();hT();rs();_L=(n,e,r,t,o=!1,i,a=4,u=4,c=4,p="f32")=>{let m=ie=>{switch(ie){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${p}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${ie} is not supported.`)}},b=ie=>{switch(ie){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${ie} is not supported.`)}},_=n?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,x=n?`
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
    `,T=n?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",I=n?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",P=n?"row":"col",$=n?"col":"row",A=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${n?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${P} / outWidth;
    let outCol = ${P} % outWidth;

    let WRow = ${$} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${$} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${$} % inChannels;
    var resData = ${ht(a,p)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${T} && xCol >= 0 && xCol < ${I}) {
      ${_}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${m(a)}
    }
    return resData;`,C=n?e&&t?`
    let col = colIn * ${a};
    ${A}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${A}
    }
    return ${ht(a,p)}(0.0);`:t&&r?`
    let col = colIn * ${a};
    ${A}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${A}
    }
    return ${ht(a,p)}(0.0);`,k=n?t&&r?b(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b(u)}
    }
    return ${ht(u,p)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${b(u)}
    }
    return ${ht(u,p)}(0.0);`,z=ht(c,p),M=n?ht(a,p):ht(u,p),q=n?ht(u,p):ht(a,p),X=ir(i,z,p);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${M} {
      ${n?C:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${q} {
      ${n?k:C}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${z}) {
      let col = colIn * ${c};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${n?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${x}
      ${fT(o)}
      ${X}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},gT=(n,e,r,t,o,i,a,u,c)=>{let p=e.format==="NHWC",m=p?n[0].dims[3]:n[0].dims[1],b=r[0],_=p?r[2]:r[3],x=p?r[1]:r[2],T=p?r[3]:r[1],I=p&&(m%4===0||m%3===0)&&T%4===0,P=p?T:_*x,$=p?_*x:T,A=[8,8,1],C=t<=8?[4,1,1]:[4,4,1],k=[Math.ceil(P/A[0]/C[0]),Math.ceil($/A[1]/C[1]),Math.ceil(b/A[2]/C[2])];Oe("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let z=I?p&&m%4!==0?3:4:1,M=A[1]*C[1],q=A[0]*C[0],X=Math.max(A[0]*z,A[1]),J=t%M===0,ie=o%q===0,le=i%X===0,me=I?[z,4,4]:[1,1,1],ne=[{type:6,data:t},{type:6,data:o},{type:6,data:i},{type:6,data:[e.pads[0],e.pads[1]]},{type:6,data:e.strides},{type:6,data:e.dilations}];ar(e,ne),ne.push(...Q(n[0].dims,n[1].dims));let he=["rank","rank"];a&&(ne.push(...Q(n[2].dims)),he.push("rank")),ne.push(...Q(r));let Ze=se=>{let de=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];sr(e,de);let xe=I?4:1,ye=Xe(n[0].dataType),Ee=`
      fn setOutputAtIndex(flatIndex : i32, value : ${I?`vec4<${ye}>`:ye}) {
        result[flatIndex] = ${I?`vec4<${ye}>`:ye}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${I?`vec4<${ye}>`:ye}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${I?"/ 4":""}, value);
      }`,He=H("x",n[0].dataType,n[0].dims.length,z===3?1:z),Ye=H("w",n[1].dataType,n[1].dims.length,xe),Te=[He,Ye],B=Z("result",n[0].dataType,r.length,xe);if(a){let re=H("bias",n[2].dataType,n[2].dims.length,xe);Te.push(re),Ee+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${I?`vec4<${ye}>`:ye} {
          return bias[coords.${p?"w":"y"}${I?"/ 4":""}];
        }`}return`
        ${pT("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${se.registerUniforms(de).declareVariables(...Te,B)}
        ${Ee}
        ${_L(p,J,ie,le,a,e,me[0],me[1],me[2],ye)}
        ${I?Rc(C,A,ye,void 0,!p,X):zc(C,A,ye,void 0,!p,X,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${e.cacheKey};${z};${I};${J};${ie};${le};${M};${q};${X}`,inputDependencies:he},getRunData:()=>({outputs:[{dims:c?c(r):r,dataType:n[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:ne}),getShaderSource:Ze}}});var vL,bT,ns,wL,_T,xL,vT,wT,xT=W(()=>{"use strict";ve();Kr();Se();Ae();$n();Qa();vL=n=>{let e=1;for(let r=0;r<n.length;r++)e*=n[r];return e},bT=n=>typeof n=="number"?[n,n,n]:n,ns=(n,e)=>e<=1?n:n+(n-1)*(e-1),wL=(n,e,r,t=1)=>{let o=ns(e,t);return Math.floor((n[0]*(r-1)-r+o)/2)},_T=(n,e,r,t,o)=>{o==null&&(o=wL(n,e[0],t[0]));let i=[0,0,0,r];for(let a=0;a<3;a++)n[a]+2*o>=e[a]&&(i[a]=Math.trunc((n[a]-e[a]+2*o)/t[a]+1));return i},xL=(n,e,r,t,o,i,a,u,c,p)=>{let m,b,_,x;if(n==="VALID"&&(n=0),typeof n=="number"){m={top:n,bottom:n,left:n,right:n,front:n,back:n};let T=_T([e,r,t,1],[u,c,p],1,[o,i,a],n);b=T[0],_=T[1],x=T[2]}else if(Array.isArray(n)){if(!n.every((I,P,$)=>I===$[0]))throw Error(`Unsupported padding parameter: ${n}`);m={top:n[0],bottom:n[1],left:n[2],right:n[3],front:n[4],back:n[5]};let T=_T([e,r,t,1],[u,c,p],1,[o,i,a],n[0]);b=T[0],_=T[1],x=T[2]}else if(n==="SAME_UPPER"){b=Math.ceil(e/o),_=Math.ceil(r/i),x=Math.ceil(t/a);let T=(b-1)*o+u-e,I=(_-1)*i+c-r,P=(x-1)*a+p-t,$=Math.floor(T/2),A=T-$,C=Math.floor(I/2),k=I-C,z=Math.floor(P/2),M=P-z;m={top:C,bottom:k,left:z,right:M,front:$,back:A}}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:m,outDepth:b,outHeight:_,outWidth:x}},vT=(n,e,r,t,o,i=!1,a="channelsLast")=>{let u,c,p,m,b;if(a==="channelsLast")[u,c,p,m,b]=n;else if(a==="channelsFirst")[u,b,c,p,m]=n;else throw new Error(`Unknown dataFormat ${a}`);let[_,,x,T,I]=e,[P,$,A]=bT(r),[C,k,z]=bT(t),M=ns(x,C),q=ns(T,k),X=ns(I,z),{padInfo:J,outDepth:ie,outHeight:le,outWidth:me}=xL(o,c,p,m,P,$,A,M,q,X),ne=i?_*b:_,he=[0,0,0,0,0];return a==="channelsFirst"?he=[u,ne,ie,le,me]:a==="channelsLast"&&(he=[u,ie,le,me,ne]),{batchSize:u,dataFormat:a,inDepth:c,inHeight:p,inWidth:m,inChannels:b,outDepth:ie,outHeight:le,outWidth:me,outChannels:ne,padInfo:J,strideDepth:P,strideHeight:$,strideWidth:A,filterDepth:x,filterHeight:T,filterWidth:I,effectiveFilterDepth:M,effectiveFilterHeight:q,effectiveFilterWidth:X,dilationDepth:C,dilationHeight:k,dilationWidth:z,inShape:n,outShape:he,filterShape:e}},wT=(n,e,r,t,o,i)=>{let a=i==="channelsLast",u=a?n[0].dims[3]:n[0].dims[1],c=!1,p=[64,1,1],m={x:r.map((A,C)=>C)},b=[Math.ceil(vL(m.x.map(A=>r[A]))/p[0]),1,1];Oe("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${b}`);let _=c?a&&u%4!==0?3:4:1,x=j.size(r),T=[{type:12,data:x},{type:12,data:t},{type:12,data:o},{type:12,data:e.strides},{type:12,data:e.dilations}];ar(e,T),T.push(...Q(n[0].dims,n[1].dims));let I=["rank","rank"],P=n.length===3;P&&(T.push(...Q(n[2].dims)),I.push("rank")),T.push(...Q(r));let $=A=>{let C=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:t.length},{name:"pads",type:"u32",length:o.length},{name:"strides",type:"u32",length:e.strides.length},{name:"dilations",type:"u32",length:e.dilations.length}];sr(e,C);let k=c?4:1,z=Xe(n[0].dataType),M=H("x",n[0].dataType,n[0].dims.length,_===3?1:_),q=H("W",n[1].dataType,n[1].dims.length,k),X=[M,q],J=Z("result",n[0].dataType,r.length,k),ie="";if(P){let ne=H("bias",n[2].dataType,n[2].dims.length,k);X.push(ne),ie+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${c?`vec4<${z}>`:z} {
          return bias[${a?ue("coords",4,5):ue("coords",1,5)}${c?"/ 4":""}];
        }`}let le=ht(_,z),me=ir(e,le,z);return`
            ${ie}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${M.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${q.getByIndices("aIndices")};
            }
          ${A.registerUniforms(C).declareVariables(...X,J)}
          ${A.mainStart()}
          ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${J.offsetToIndices("global_idx")};
              let batch = ${ue("coords",0,M.rank)};
              let d2 = ${a?ue("coords",M.rank-1,M.rank):ue("coords",1,M.rank)};
              let xFRCCorner = vec3<u32>(${a?ue("coords",1,M.rank):ue("coords",2,M.rank)},
              ${a?ue("coords",2,M.rank):ue("coords",3,M.rank)},
              ${a?ue("coords",3,M.rank):ue("coords",4,M.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?ue("uniforms.x_shape",1,M.rank):ue("uniforms.x_shape",2,M.rank)};
              let xShapeZ = ${a?ue("uniforms.x_shape",2,M.rank):ue("uniforms.x_shape",3,M.rank)};
              let xShapeW = ${a?ue("uniforms.x_shape",3,M.rank):ue("uniforms.x_shape",4,M.rank)};
              let xShapeU = ${a?ue("uniforms.x_shape",4,M.rank):ue("uniforms.x_shape",1,M.rank)};
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
              ${P?"value = value + getBiasByOutputCoords(coords)":""};
              ${me}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${e.cacheKey};${a};${_};${P}`,inputDependencies:I},getRunData:()=>({outputs:[{dims:r,dataType:n[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:T}),getShaderSource:$}}});var TT,IT,ST=W(()=>{"use strict";ve();Se();Ae();$n();TT=(n,e,r,t)=>{let o=n.length>2,i=o?"value += b[output_channel];":"",a=n[0].dims,u=n[1].dims,c=e.format==="NHWC",p=c?r[3]:r[1],m=p/e.group,b=c&&m>=4?ze(p):1,_=j.size(r)/b,x=[{type:12,data:_},{type:12,data:e.dilations},{type:12,data:[e.strides[0],e.strides[1]]},{type:12,data:[e.pads[0],e.pads[1]]},{type:12,data:m}];ar(e,x),x.push(...Q(a,[u[0],u[1],u[2],u[3]/b]));let T=o?["rank","rank","rank"]:["rank","rank"];x.push(...Q([r[0],r[1],r[2],r[3]/b]));let I=P=>{let $=Z("output",n[0].dataType,r.length,b),A=Xe($.type.tensor),C=ir(e,$.type.value,A),k=H("x",n[0].dataType,a.length),z=H("w",n[1].dataType,u.length,b),M=[k,z];o&&M.push(H("b",n[2].dataType,n[2].dims,b));let q=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:e.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];sr(e,q);let X=c?`
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
            let wVal = ${z.get("wHeight","wWidth","wInChannel","output_channel")};
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
            let wVal = ${z.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${P.registerUniforms(q).declareVariables(...M,$)}

  ${P.mainStart()}
    ${P.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${$.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${c?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${c?1:2}], outputIndices[${c?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${b} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${c?2:1}];

    var value: ${$.type.value} = ${$.type.value}(0);
    ${X}
    ${i}
    ${C}
    ${$.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${e.cacheKey}_${b}`,inputDependencies:T},getRunData:()=>({outputs:[{dims:t?t(r):r,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:x}),getShaderSource:I}},IT=(n,e,r,t)=>{let o=n.length>2,i=ze(r[3]),a=ze(r[2]),u=j.size(r)/i/a,c=[n[0].dims[0],n[0].dims[1],n[0].dims[2],n[0].dims[3]/i],p=[n[1].dims[0],n[1].dims[1],n[1].dims[2],n[1].dims[3]/i],m=[r[0],r[1],r[2],r[3]/i],b=[{type:12,data:u},{type:6,data:[e.strides[0],e.strides[1]]},{type:6,data:[e.pads[0],e.pads[1]]}];ar(e,b),b.push(...Q(c,p,m));let _=(a-1)*e.strides[1]+p[1],x=T=>{let I=Z("output",n[0].dataType,m.length,i),P=Xe(I.type.tensor),$=ir(e,I.type.value,P),A=H("x",n[0].dataType,c.length,i),C=H("w",n[1].dataType,p.length,i),k=[A,C];o&&k.push(H("b",n[2].dataType,n[2].dims,i));let z=o?"value += b[output_channel];":"",M=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return sr(e,M),`
  ${T.registerUniforms(M).declareVariables(...k,I)}
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

    var x_vals: array<${A.type.value}, ${_}>;
    var values: array<${I.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${p[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${_}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${A.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${A.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${p[1]}; w_width++) {
          let w_val = ${C.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${z}
      ${$}
      ${I.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${e.cacheKey};${i};${a};${_};${p[0]};${p[1]}`,inputDependencies:o?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:t?t(r):r,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:b}),getShaderSource:x}}});var TL,Mc,IL,Bc,Fc,$T,SL,$L,Vc,AT=W(()=>{"use strict";Se();yT();xT();rs();ST();$n();ts();sn();TL=(n,e,r,t,o,i)=>{let a=n[0],u=n.slice(i?1:2,i?3:4),c=u.length,p=e[0],b=e.slice(2).map((T,I)=>T+(T-1)*(r[I]-1)),x=u.map((T,I)=>T+t[I]+t[I+c]).map((T,I)=>Math.floor((T-b[I]+o[I])/o[I]));return x.splice(0,0,a),x.splice(i?3:1,0,p),x},Mc=[2,3,1,0],IL=(n,e)=>{if(!n||n.length!==2&&n.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(n[0].dims.length>5)throw new Error("greater than 5D is not supported");if(n[0].dims.length!==n[1].dims.length)throw new Error("filter does not have same dimension as input");let r=n[0].dims[e.format==="NHWC"?n[0].dims.length-1:1],t=n[1].dims[1]*e.group;if(r!==t)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(n.length===3&&(n[2].dims.length!==1||n[1].dims[0]!==n[2].dims[0]))throw new Error("invalid bias");let o=n[0].dims.length-2;if(e.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(e.strides.length!==o)throw new Error(`strides should be ${o}D`);if(e.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(e.kernelShape.length!==0&&e.kernelShape.length!==n[1].dims.length-2)throw new Error("invalid kernel shape")},Bc=(n,e)=>{let r=n.kernelShape.slice();r.length<e[1].dims.length-2&&r.push(...Array(e[1].dims.length-2-r.length).fill(0));for(let i=2;i<e[1].dims.length;++i)r[i-2]===0&&(r[i-2]=e[1].dims[i]);let t=n.pads.slice();Hn.adjustPadsBasedOnAutoPad(e[0].dims,n.strides,n.dilations,r,t,n.format==="NHWC",n.autoPad);let o=Object.assign({},n);return Object.assign(o,{kernelShape:r,pads:t}),o},Fc=n=>{let e=Ja(n),r=n.format,t=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][n.auto_pad],o=n.dilations,i=n.group,a=n.kernel_shape,u=n.pads,c=n.strides,p=n.w_is_const();return{autoPad:t,format:r,dilations:o,group:i,kernelShape:a,pads:u,strides:c,wIsConst:p,...e,cacheKey:`${n.format};${e.activation};`}},$T=(n,e,r,t)=>{let o=r.format==="NHWC",i=TL(e[0].dims,e[1].dims,r.dilations,r.pads,r.strides,o);if(r.group!==1){let M=[e[0]];if(o){let X=n.kernelCustomData.wT??n.compute(yt(e[1],Mc),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!n.kernelCustomData.wT&&(n.kernelCustomData.wT=X),M.push(X)}else M.push(e[1]);e.length===3&&M.push(e[2]),!n.adapterInfo.isArchitecture("ampere")&&o&&e[1].dims[0]===r.group&&e[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?n.compute(IT(M,r,i,t),{inputs:M}):n.compute(TT(M,r,i,t),{inputs:M});return}let a=e.length===3,u=e[0].dims[o?1:2],c=e[0].dims[o?2:3],p=e[0].dims[o?3:1],m=e[1].dims[2],b=e[1].dims[3],_=i[o?1:2],x=i[o?2:3],T=i[o?3:1],I=o&&m===u&&b===c&&r.pads[0]===0&&r.pads[1]===0;if(I||m===1&&b===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let M=i[0],q,X,J,ie=[];if(o){let ne=n.kernelCustomData.wT??n.compute(yt(e[1],Mc),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!n.kernelCustomData.wT&&(n.kernelCustomData.wT=ne),I){let he=u*c*p;q=e[0].reshape([1,M,he]),X=ne.reshape([1,he,T]),J=[1,M,T]}else q=e[0].reshape([M,u*c,p]),X=ne.reshape([1,p,T]),J=[M,_*x,T];ie.push(q),ie.push(X)}else q=e[0].reshape([M,p,u*c]),X=e[1].reshape([1,T,p]),J=[M,T,_*x],ie.push(X),ie.push(q);a&&ie.push(e[2]);let le=J[2],me=ie[0].dims[ie[0].dims.length-1];le<8&&me<8?n.compute(es(ie,r,i,J,o,t),{inputs:ie}):n.compute(Qo(ie,r,i,J,o,t),{inputs:ie});return}let P=!0,$=n.kernelCustomData.wT??n.compute(yt(e[1],Mc),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!n.kernelCustomData.wT&&(n.kernelCustomData.wT=$);let A=[e[0],$];a&&A.push(e[2]);let C=o?_*x:T,k=o?T:_*x,z=m*b*p;n.compute(gT(A,r,i,C,k,z,a,P,t),{inputs:A})},SL=(n,e)=>{let r=e.format==="NHWC",t=[n.inputs[0].reshape(r?[n.inputs[0].dims[0],1,n.inputs[0].dims[1],n.inputs[0].dims[2]]:[n.inputs[0].dims[0],n.inputs[0].dims[1],1,n.inputs[0].dims[2]]),n.inputs[1].reshape([n.inputs[1].dims[0],n.inputs[1].dims[1],1,n.inputs[1].dims[2]])];n.inputs.length===3&&t.push(n.inputs[2]);let o=[0,e.pads[0],0,e.pads[1]],i=[1].concat(e.strides),a=[1].concat(e.dilations),u=[1].concat(e.kernelShape),c=Bc({...e,pads:o,strides:i,dilations:a,kernelShape:u},t);$T(n,t,c,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},$L=(n,e,r)=>{let t=r.format==="NHWC"?"channelsLast":"channelsFirst",o=Bc(r,e),i=r.autoPad==="NOTSET"?r.pads:r.autoPad,a=vT(e[0].dims,e[1].dims,r.strides,r.dilations,i,!1,t);n.compute(wT(e,o,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],t))},Vc=(n,e)=>{if(IL(n.inputs,e),n.inputs[0].dims.length===3)SL(n,e);else if(n.inputs[0].dims.length===5)$L(n,n.inputs,e);else{let r=Bc(e,n.inputs);$T(n,n.inputs,r)}}});var PT,OT=W(()=>{"use strict";ve();Kr();Se();Ae();PT=(n,e,r)=>{let t=n.length>2,o=e.outputShape,i=e.format==="NHWC",a=e.group,u=n[1].dims,c=u[2]/a,p=u[3],m=i?ze(c):1,b=i&&p===1&&c>=4,_=b?Math.floor(c/4)*4:Math.floor(c/m)*m,x=c-_,T=i?ze(p):1,I=i?p===1?m:T:1,P=j.size(o)/T,$=[Math.ceil(P/64),1,1];Oe("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${$}`);let A=["rank","rank"],C=[e.strides[0],e.strides[1]],k=[e.kernelShape[i?1:2],e.kernelShape[i?2:3]],z=[e.dilations[0],e.dilations[1]],M=[k[0]+(e.dilations[0]<=1?0:(e.kernelShape[i?1:2]-1)*(e.dilations[0]-1)),k[1]+(e.dilations[1]<=1?0:(e.kernelShape[i?2:3]-1)*(e.dilations[1]-1))],q=[M[0]-1-Math.floor((e.pads[0]+e.pads[2])/2),M[1]-1-Math.floor((e.pads[1]+e.pads[3])/2)],X=[{type:12,data:P},{type:12,data:C},{type:12,data:k},{type:12,data:z},{type:12,data:M},{type:6,data:q},{type:12,data:_},{type:12,data:c},{type:12,data:p},...Q(n[0].dims,n[1].dims)];t&&(X.push(...Q(n[2].dims)),A.push("rank")),X.push(...Q(o));let J=ie=>{let le=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:C.length},{name:"filter_dims",type:"u32",length:k.length},{name:"dilations",type:"u32",length:k.length},{name:"effective_filter_dims",type:"u32",length:M.length},{name:"pads",type:"i32",length:q.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],me=Xe(n[0].dataType),ne=i?1:2,he=i?2:3,Ze=i?3:1,se=H("W",n[1].dataType,n[1].dims.length,I),de=H("Dy",n[0].dataType,n[0].dims.length,m),xe=[de,se];t&&xe.push(H("bias",n[2].dataType,[o[Ze]].length,T));let ye=Z("result",n[0].dataType,o.length,T),Ee=()=>{let Te="";if(b)m===4?Te+=`
        let xValue = ${de.getByOffset("x_offset")};
        let wValue = ${se.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:m===2?Te+=`
          dotProd = dotProd + dot(vec4<${me}>(${de.getByOffset("x_offset")}, ${de.getByOffset("x_offset + 1u")}), vec4<${me}>(${se.getByOffset("w_offset")}, ${se.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:m===1&&(Te+=`
          dotProd = dotProd + dot(vec4<${me}>(${de.getByOffset("x_offset")}, ${de.getByOffset("x_offset + 1u")}, ${de.getByOffset("x_offset + 2u")}, ${de.getByOffset("x_offset + 3u")}), vec4<${me}>(${se.getByOffset("w_offset")}, ${se.getByOffset("w_offset + 1u")}, ${se.getByOffset("w_offset + 2u")}, ${se.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(Te+=`
                  let xValue = ${i?de.getByOffset(`${de.indicesToOffset(`${de.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${m}`):de.get("batch","inputChannel","idyR","idyC")};
        `,m===1)Te+=`
          let w_offset = ${se.indicesToOffset(`${se.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${se.getByOffset(`w_offset / ${I}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let B=0;B<m;B++)Te+=`
            let wValue${B} = ${se.getByOffset(`${se.indicesToOffset(`${se.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${B}, wOutChannel)`)} / ${I}`)};
            dotProd = dotProd + xValue[${B}] * wValue${B};`;return Te},He=()=>{if(x===0)return"";if(!b)throw new Error(`packInputAs4 ${b} is not true.`);let Te="";if(m===1){Te+="dotProd = dotProd";for(let B=0;B<x;B++)Te+=`
            + ${de.getByOffset(`x_offset + ${B}`)} * ${se.getByOffset(`w_offset + ${B}`)}`;Te+=";"}else if(m===2){if(x!==2)throw new Error(`Invalid inputChannelsRemainder ${x}.`);Te+=`
          let xValue = ${de.getByOffset("x_offset")};
          let wValue = ${se.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return Te},Ye=`
            let outputIndices = ${ye.offsetToIndices(`global_idx * ${T}`)};
            let batch = ${ye.indicesGet("outputIndices",0)};
            let d1 = ${ye.indicesGet("outputIndices",Ze)};
            let r = ${ye.indicesGet("outputIndices",ne)};
            let c = ${ye.indicesGet("outputIndices",he)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${ye.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${me}(dyRCorner) + ${me}(wR)) / ${me}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${me}(uniforms.Dy_shape[${ne}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${me}(dyCCorner) + ${me}(wC)) / ${me}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${me}(uniforms.Dy_shape[${he}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${b?`
                var x_offset = ${de.indicesToOffset(`${de.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${m};
                var w_offset = ${se.indicesToOffset(`${se.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${I};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${b?4:m}) {
                  ${Ee()}
                  inputChannel = inputChannel + ${b?4:m};
                }
                ${He()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${t?` + bias[d1 / ${T}]`:""};
            ${ye.setByOffset("global_idx","value")};
          `;return`
    ${ie.registerUniforms(le).declareVariables(...xe,ye)}
      ${ie.mainStart()}
      ${ie.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${Ye}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${e.cacheKey};${m}${I}${T}${b}${x}`,inputDependencies:A},getRunData:()=>({dispatchGroup:{x:$[0],y:$[1],z:$[2]},outputs:[{dims:r?r(o):o,dataType:n[0].dataType}],programUniforms:X}),getShaderSource:J}}});var AL,PL,OL,CT,ET,CL,DT,EL,kT,NT=W(()=>{"use strict";OT();$n();sn();AL=(n,e,r,t,o,i)=>(n-1)*e+r+(t-1)*o+1-i,PL=(n,e,r,t,o)=>{let i=Math.floor(n/2);e==="SAME_UPPER"?(r[t]=i,r[o]=n-i):e==="SAME_LOWER"&&(r[t]=n-i,r[o]=i)},OL=(n,e,r,t,o,i,a,u,c,p)=>{let m=n.length-2,b=p.length===0;c.length<m&&c.push(...Array(m-c.length).fill(0));let _=n[0],x=e[u?3:1]*o;for(let T=0,I=n.length-m-(u?1:0);T<m;++T,++I){let P=n[I],$=b?P*a[T]:p[T],A=AL(P,a[T],i[T],e[I],r[T],$);PL(A,t,i,T,T+m),b&&p.push(a[T]*(P-1)+c[T]+(e[I]-1)*r[T]+1-i[T]-i[T+m])}p.splice(0,0,_),p.splice(u?3:1,0,x)},CT=(n,e)=>{let r=n.kernelShape.slice();if(n.kernelShape.length===0||n.kernelShape.reduce((b,_)=>b*_,1)===0){r.length=0;for(let b=2;b<e[1].dims.length;++b)r.push(e[1].dims[b])}let t=n.format==="NHWC";r.splice(0,0,e[1].dims[0]),r.splice(t?3:1,0,e[1].dims[1]);let o=n.pads.slice(),i=n.outputShape.slice(),a=n.outputPadding.slice(),u=e[0].dims,c=n.dilations.slice();if(c.reduce((b,_)=>b+_,0)===0){let b=e[0].dims.length-2;c=new Array(b).fill(1)}let p=n.strides.slice();if(p.reduce((b,_)=>b+_,0)===0){let b=e[0].dims.length-2;p=new Array(b).fill(1)}OL(u,r,c,n.autoPad,n.group,o,p,t,a,i);let m=Object.assign({},n);return Object.assign(m,{kernelShape:r,pads:o,outputPadding:a,outputShape:i,dilations:c,strides:p}),m},ET=n=>{let e=Ja(n),r=n.format,t=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof n.autoPad>"u"?0:n.autoPad],o=n.dilations,i=n.group,a=n.kernelShape,u=n.pads,c=n.strides,p=n.wIsConst(),m=n.outputPadding,b=n.outputShape;return{autoPad:t,format:r,dilations:o,group:i,kernelShape:a,outputPadding:m,outputShape:b,pads:u,strides:c,wIsConst:p,...e,cacheKey:`${n.format};${e.activation};`}},CL=(n,e)=>{if(!n||n.length!==2&&n.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(n[0].dims.length!==4&&n[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(n[0].dims.length!==n[1].dims.length)throw new Error("filter does not have same dimension as input");let r=n[0].dims[e.format==="NHWC"?n[0].dims.length-1:1],t=n[1].dims[0];if(r!==t)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let o=n[1].dims[1]*e.group;if(n.length===3&&(n[2].dims.length!==1||n[2].dims[0]!==o))throw new Error("invalid bias");let i=n[0].dims.length-2;if(e.dilations.reduce((m,b)=>m+b,0)>0&&e.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(e.strides.reduce((m,b)=>m+b,0)>0&&e.strides.length!==i)throw new Error(`strides should be ${i}D`);if(e.pads.reduce((m,b)=>m+b,0)>0&&e.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(e.outputPadding.length!==i&&e.outputPadding.length!==0)throw new Error(`output_padding should be ${i}D`);if(e.kernelShape.reduce((m,b)=>m+b,0)>0&&e.kernelShape.length!==0&&e.kernelShape.length!==n[1].dims.length-2)throw new Error("invalid kernel shape");if(e.outputShape.length!==0&&e.outputShape.length!==n[0].dims.length-2)throw new Error("invalid output shape")},DT=(n,e,r,t)=>{let o=n.kernelCustomData.wT??n.compute(yt(e[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!n.kernelCustomData.wT&&(n.kernelCustomData.wT=o);let i=[e[0],o];e.length===3&&i.push(e[2]),n.compute(PT(i,r,t),{inputs:i})},EL=(n,e)=>{let r=e.format==="NHWC",t=[n.inputs[0].reshape(r?[n.inputs[0].dims[0],1,n.inputs[0].dims[1],n.inputs[0].dims[2]]:[n.inputs[0].dims[0],n.inputs[0].dims[1],1,n.inputs[0].dims[2]]),n.inputs[1].reshape([n.inputs[1].dims[0],n.inputs[1].dims[1],1,n.inputs[1].dims[2]])];n.inputs.length===3&&t.push(n.inputs[2]);let o=e.kernelShape;(o.length===0||o[0]===0)&&(o=[n.inputs[1].dims[2]]);let i=e.dilations;(i.length===0||i[0]===0)&&(i=[1]);let a=e.strides;(a.length===0||a[0]===0)&&(a=[1]);let u=e.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],a=[1].concat(a),i=[1].concat(i),o=[1].concat(o);let c=e.outputPadding;c=[0].concat(c);let p=CT({...e,pads:u,strides:a,dilations:i,kernelShape:o,outputPadding:c},t);DT(n,t,p,m=>r?[m[0],m[2],m[3]]:[m[0],m[1],m[3]])},kT=(n,e)=>{if(CL(n.inputs,e),n.inputs[0].dims.length===3)EL(n,e);else{let r=CT(e,n.inputs);DT(n,n.inputs,r)}}});var DL,LT,RT,zT=W(()=>{"use strict";ve();Se();it();Ae();DL=(n,e,r,t)=>{let o=j.size(e),i=e.length,a=H("input",n,i),u=Z("output",n,i),c=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),p=j.normalizeAxis(c,i),m=b=>{let _=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,x=ue("uniforms.input_shape","uniforms.axis",i),T=t.reverse?_+(t.exclusive?" + 1":""):"0",I=t.reverse?x:_+(t.exclusive?"":" + 1");return`
                ${b.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,u)}
                ${b.mainStart()}
                  ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${T};
                  let last : i32 = ${I};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:e,dataType:n}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},{type:12,data:p},...Q(e,e)]}),getShaderSource:m}},LT=(n,e)=>{let r=n.inputs[0].dims,t=n.inputs[0].dataType,o=n.inputs[1];n.compute(DL(t,r,o,e),{inputs:[0]})},RT=n=>{let e=n.exclusive===1,r=n.reverse===1;return we({exclusive:e,reverse:r})}});var kL,NL,LL,MT,BT,FT=W(()=>{"use strict";ve();Se();it();Ae();kL=n=>{if(!n||n.length!==1)throw new Error("DepthToSpace requires 1 input.");if(n[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},NL=(n,e,r,t)=>{let o=[];o.push(`fn perm(i: ${t.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let i=0;i<e;++i)o.push(r.indicesSet("a",n[i],`i[${i}]`));return o.push("return a;}"),o.join(`
`)},LL=(n,e)=>{let r,t,o,i,a,u,c=e.format==="NHWC",p=e.blocksize,m=e.mode==="DCR";c?([r,t,o,i]=n.dims,a=m?[r,t,o,p,p,i/p**2]:[r,t,o,i/p**2,p,p],u=m?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,t,o,i]=[n.dims[0],n.dims[2],n.dims[3],n.dims[1]],a=m?[r,p,p,i/p**2,t,o]:[r,i/p**2,p,p,t,o],u=m?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let b=n.reshape(a),_=b.dims.length,x=n.dataType,T=H("a",x,_),I=Z("output",x,_),P=$=>`
  ${$.registerUniform("output_size","u32").declareVariables(T,I)}

  ${NL(u,_,T,I)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${I.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${I.setByOffset("global_idx",T.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${n.dims};${e.blocksize};${e.mode}`,inputDependencies:["rank"]},getRunData:$=>{let A=c?[r,t*p,o*p,i/p**2]:[r,i/p**2,t*p,o*p],C=j.size(A),k=b.dims,z=j.sortBasedOnPerm(k,u);return{outputs:[{dims:A,dataType:$[0].dataType}],dispatchGroup:{x:Math.ceil(C/64)},programUniforms:[{type:12,data:C},...Q(k,z)]}},getShaderSource:P}},MT=(n,e)=>{kL(n.inputs),n.compute(LL(n.inputs[0],e))},BT=n=>we({blocksize:n.blocksize,mode:n.mode,format:n.format})});var Gc,os,VT,RL,zL,Uc,jc,GT,ML,UT,jT,WT=W(()=>{"use strict";ve();Se();it();Ae();Gc="[a-zA-Z]|\\.\\.\\.",os="("+Gc+")+",VT="^"+os+"$",RL="("+os+",)*"+os,zL="^"+RL+"$",Uc=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,r){let t=this.symbolToIndices.get(e);t===void 0?t=[r]:t.push(r),this.symbolToIndices.set(e,t)}},jc=class{constructor(e,r){this.equation=r;this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[t,o]=r.includes("->")?r.split("->",2):[r,""];if(!t.match(RegExp(zL)))throw new Error("Invalid LHS term");if(t.split(",").forEach((u,c)=>{let p=e[c].dims.slice();if(!u.match(RegExp(VT)))throw new Error("Invalid LHS term");let m=this.processTerm(u,!0,p,c);this.lhs.push(m)}),o==="")o+=[...this.symbolToInfo.entries()].filter(([u,c])=>c.count===1||u==="...").map(([u])=>u).join("");else if(!o.match(RegExp(os)))throw new Error("Invalid RHS");o.match(RegExp(Gc,"g"))?.forEach(u=>{if(u==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let c=this.symbolToInfo.get(u);if(c===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(c.dimValue)}}),this.rhs=this.processTerm(o,!1,this.outputDims)}addSymbol(e,r,t){let o=this.symbolToInfo.get(e);if(o!==void 0){if(o.dimValue!==r&&o.count!==1)throw new Error("Dimension mismatch");o.count++,o.inputIndices.push(t)}else o={count:1,dimValue:r,inputIndices:[t]};this.symbolToInfo.set(e,o)}processTerm(e,r,t,o=-1){let i=t.length,a=!1,u=[],c=0;if(!e.match(RegExp(VT))&&!r&&e!=="")throw new Error("Invalid LHS term");let p=e.match(RegExp(Gc,"g")),m=new Uc(o);return p?.forEach((b,_)=>{if(b==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let x=i-p.length+1;if(x<0)throw new Error("Ellipsis out of bounds");if(u=t.slice(c,c+x),this.hasEllipsis){if(this.ellipsisDims.length!==u.length||this.ellipsisDims.toString()!==u.toString())throw new Error("Ellipsis dimensions mismatch")}else if(r)this.hasEllipsis=!0,this.ellipsisDims=u;else throw new Error("Ellipsis must be specified in the LHS");for(let T=0;T<u.length;T++){let I=String.fromCharCode(48+T);m.addSymbol(I,_+T),this.addSymbol(I,t[c++],o)}}else m.addSymbol(b,_+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(b,t[c++],o)}),m}},GT=n=>n+"_max",ML=(n,e,r,t)=>{let i=n.map(m=>m.length).map((m,b)=>H(`input${b}`,e,m)),a=j.size(t),u=Z("output",e,t.length),c=[...r.symbolToInfo.keys()].filter(m=>!r.rhs.symbolToIndices.has(m)),p=m=>{let b=[],_="var prod = 1.0;",x="var sum = 0.0;",T="sum += prod;",I=[],P=[],$=[],A=[],C=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((z,M)=>{if(r.rhs.symbolToIndices.has(M)){let q=r.rhs.symbolToIndices.get(M)?.[0];q!==void 0&&r.lhs.forEach((X,J)=>{if(z.inputIndices.includes(J)){let ie=X.symbolToIndices.get(M);if(ie===void 0)throw new Error("Invalid symbol error");ie.forEach(le=>{b.push(`${i[J].indicesSet(`input${J}Indices`,le,u.indicesGet("outputIndices",q))}`)})}})}else r.lhs.forEach((q,X)=>{if(z.inputIndices.includes(X)){let J=q.symbolToIndices.get(M);if(J===void 0)throw new Error("Invalid symbol error");J.forEach(ie=>{I.push(`${i[X].indicesSet(`input${X}Indices`,ie,`${M}`)}`)}),A.push(`prod *= ${i[X].getByIndices(`input${X}Indices`)};`)}}),P.push(`for(var ${M}: u32 = 0; ${M} < uniforms.${GT(M)}; ${M}++) {`),$.push("}")});let k=C?[...b,`let sum = ${i.map((z,M)=>z.getByIndices(`input${M}Indices`)).join(" * ")};`]:[...b,x,...P,...I,_,...A,T,...$];return`
            ${m.registerUniforms(c.map(z=>({name:`${GT(z)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,u)}

            ${m.mainStart()}
            ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${u.offsetToIndices("global_idx")};
            ${i.map((z,M)=>`var input${M}Indices: ${i[M].type.indices};`).join(`
`)}
            ${k.join(`
`)};
            ${u.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:n.map(()=>"rank")},getRunData:()=>{let m=c.filter(_=>r.symbolToInfo.has(_)).map(_=>({type:12,data:r.symbolToInfo.get(_)?.dimValue||0}));m.push({type:12,data:a});let b=n.map((_,x)=>[...Q(_)]).reduce((_,x)=>_.concat(x),m);return b.push(...Q(t)),{outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:b}},getShaderSource:p}},UT=(n,e)=>{let r=new jc(n.inputs,e.equation),t=r.outputDims,o=n.inputs.map((i,a)=>i.dims);n.compute(ML(o,n.inputs[0].dataType,r,t))},jT=n=>{let e=n.equation.replace(/\s+/g,"");return we({equation:e})}});var BL,HT,FL,VL,qT,KT=W(()=>{"use strict";ve();Se();Ae();BL=n=>{if(!n||n.length!==2)throw new Error("Expand requires 2 input.");let e=n[0].dims,r=Array.from(n[1].getBigInt64Array(),Number),t=r.length<e.length?0:r.length-e.length,o=e.length<r.length?0:e.length-r.length;for(;t<r.length&&o<e.length;++t,++o)if(r[t]!==e[o]&&r[t]!==1&&e[o]!==1)throw new Error("Expand requires shape to be broadcastable to input")},HT=(n,e)=>{let r=n.length-e.length,t=[];for(let o=0;o<r;++o)t.push(n[o]);for(let o=0;o<e.length;++o)t.push(e[o]===1?n[o+r]:e[o]);return t},FL=(n,e)=>n.length>e.length?HT(n,e):HT(e,n),VL=n=>{let e=n[0].dims,r=Array.from(n[1].getBigInt64Array(),Number),t=FL(e,r),o=n[0].dataType,i=o===9||j.size(e)===1,a=o===9||e.length>0&&e[e.length-1]%4===0?4:1,u=i||t.length>0&&t[t.length-1]%4===0?4:1,c=Math.ceil(j.size(t)/u),p=b=>{let _=H("input",o,e.length,a),x=Z("output",o,t.length,u),T;if(o===9){let I=(P,$,A="")=>`
          let outputIndices${$} = ${x.offsetToIndices(`outputOffset + ${$}u`)};
          let offset${$} = ${_.broadcastedIndicesToOffset(`outputIndices${$}`,x)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${P}[${$}] = ${A}(${_.getByOffset(`index${$}`)}[component${$}]);
        `;T=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${I("data",0,"u32")}
        ${I("data",1,"u32")}
        ${I("data",2,"u32")}
        ${I("data",3,"u32")}
        ${x.setByOffset("global_idx","data")}
      }`}else T=`
        let outputIndices = ${x.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${_.broadcastedIndicesToOffset("outputIndices",x)};
        let data = ${x.type.value}(${_.getByOffset(`inputOffset / ${a}`)});
        ${x.setByOffset("global_idx","data")}
      }`;return`
    ${b.registerUniform("vec_size","u32").declareVariables(_,x)}
    ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${T}`},m=[{type:12,data:c},...Q(e,t)];return{name:"Expand",shaderCache:{hint:`${t.length};${a}${u}`,inputDependencies:["rank"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:t,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:m})}},qT=n=>{BL(n.inputs),n.compute(VL(n.inputs),{inputs:[0]})}});var GL,XT,YT=W(()=>{"use strict";ve();Se();Ae();Za();GL=n=>{let e=n[0].dataType,r=j.size(n[0].dims),t=j.size(n[1].dims),o=t%4===0,i=a=>{let u=H("x",e,[1],4),c=H("bias",e,[1],4),p=Z("y",e,[1],4),m=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],b=x=>`
      let bias${x}_offset: u32 = (global_idx * 4 + ${x}) % uniforms.bias_size;
      let bias${x} = ${c.getByOffset(`bias${x}_offset / 4`)}[bias${x}_offset % 4];`,_=o?`
      let bias = ${c.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${b(0)}${b(1)}${b(2)}${b(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(m).declareVariables(u,c,p)}

    ${Nc(gt(e))}

    ${a.mainStart(qn)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${_}
      let x_in = x + bias;
      ${p.setByOffset("global_idx",Lc("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${o}`,inputDependencies:["type","type"]},getShaderSource:i,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:t}],dispatchGroup:{x:Math.ceil(r/qn/4)}})}},XT=n=>{n.inputs.length<2||j.size(n.inputs[1].dims)===0?Wx(n):n.compute(GL(n.inputs))}});var UL,jL,ZT,JT,QT=W(()=>{"use strict";ve();Se();it();Ae();UL=n=>{if(!n||n.length!==2)throw new Error("Gather requires 2 inputs.")},jL=(n,e)=>{let r=n[0].dims,t=n[1].dims,o=r.length,i=j.normalizeAxis(e.axis,o),a=r.slice(0);a.splice(i,1,...t);let u=r[i],c=n[0].dataType===9?4:1,p=Math.ceil(j.size(a)/c),m=[{type:12,data:p},{type:6,data:u},{type:12,data:i},...Q(n[0].dims,n[1].dims,a)],b=_=>{let x=H("data",n[0].dataType,n[0].dims.length,c),T=H("inputIndices",n[1].dataType,n[1].dims.length),I=Z("output",n[0].dataType,a.length,c),P=A=>{let C=t.length,k=`var indicesIndices${A}  = ${T.type.indices}(0);`;for(let z=0;z<C;z++)k+=`${C>1?`indicesIndices${A}[${z}]`:`indicesIndices${A}`} = ${a.length>1?`outputIndices${A}[uniforms.axis + ${z}]`:`outputIndices${A}`};`;k+=`
          var idx${A} = ${T.getByIndices(`indicesIndices${A}`)};
          if (idx${A} < 0) {
            idx${A} = idx${A} + uniforms.axisDimLimit;
          }
          var dataIndices${A} : ${x.type.indices};
        `;for(let z=0,M=0;z<o;z++)z===i?(k+=`${o>1?`dataIndices${A}[${z}]`:`dataIndices${A}`} = u32(idx${A});`,M+=C):(k+=`${o>1?`dataIndices${A}[${z}]`:`dataIndices${A}`} = ${a.length>1?`outputIndices${A}[${M}]`:`outputIndices${A}`};`,M++);return k},$;if(n[0].dataType===9){let A=(C,k,z="")=>`
          let outputIndices${k} = ${I.offsetToIndices(`outputOffset + ${k}u`)};
          ${P(k)};
          let offset${k} = ${x.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${C}[${k}] = ${z}(${x.getByOffset(`index${k}`)}[component${k}]);
        `;$=`
        let outputOffset = global_idx * ${c};
        var value = vec4<u32>(0);
        ${A("value",0,"u32")}
        ${A("value",1,"u32")}
        ${A("value",2,"u32")}
        ${A("value",3,"u32")}
        ${I.setByOffset("global_idx","value")}
      `}else $=`
      let outputIndices = ${I.offsetToIndices("global_idx")};
      ${P("")};
      let value = ${x.getByIndices("dataIndices")};
      ${I.setByOffset("global_idx","value")};
      `;return`
      ${_.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(x,T,I)}
      ${_.mainStart()}
        ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${$}
      }`};return{name:"Gather",shaderCache:{hint:e.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:b}},ZT=n=>we({axis:n.axis}),JT=(n,e)=>{let r=n.inputs;UL(r),n.compute(jL(n.inputs,e))}});var WL,e1,t1,r1=W(()=>{"use strict";ve();Se();Ae();WL=(n,e,r,t,o,i,a,u,c)=>{let p=[{type:12,data:i},{type:12,data:t},{type:12,data:o},{type:12,data:r},{type:12,data:a},{type:12,data:u},{type:12,data:c}],m=[i];p.push(...Q(e.dims,m));let b=_=>{let x=H("indices_data",e.dataType,e.dims.length),T=Z("input_slice_offsets_data",12,1,1),I=[x,T],P=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:o.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${_.registerUniforms(P).declareVariables(...I)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${o.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return n.compute({name:"computeSliceOffsets",shaderCache:{hint:`${o.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:m,dataType:n.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:p}),getShaderSource:b},{inputs:[e],outputs:[-1]})[0]},e1=(n,e)=>{let r=n.inputs,t=r[0].dims,o=r[0].dataType,i=r[1].dims,a=i[i.length-1],u=j.sizeToDimension(i,i.length-1),c=j.sizeFromDimension(t,e.batchDims+a),p=j.sizeToDimension(t,e.batchDims),m=j.sizeFromDimension(t,e.batchDims),b=u/p,_=new Array(a),x=c;for(let k=0;k<a;++k)_[a-1-k]=x,x*=t[e.batchDims+a-1-k];let T=WL(n,r[1],_,e.batchDims,t,u,b,m,a),I=e.batchDims+a;if(I>t.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let P=i.slice(0,-1).concat(t.slice(I)),$=j.size(P),A=[{type:12,data:$},{type:12,data:c},...Q(r[0].dims,T.dims,P)],C=k=>{let z=H("data",r[0].dataType,r[0].dims.length),M=H("slice_offsets",12,T.dims.length),q=Z("output",r[0].dataType,P.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(z,M,q)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};n.compute({name:"GatherND",shaderCache:{hint:e.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:P,dataType:o}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:A}),getShaderSource:C},{inputs:[r[0],T]})},t1=n=>({batchDims:n.batch_dims,cacheKey:""})});var HL,qL,n1,o1,i1=W(()=>{"use strict";ve();Se();it();Ae();HL=(n,e)=>{if(n.length<3||n.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=j.normalizeAxis(e.quantizeAxis,n[0].dims.length),t=e.blockSize,o=n[0],i=n[2],a=n.length===4?n[3]:void 0;if(i.dims.length!==o.dims.length||!o.dims.map((u,c)=>c===r?Math.ceil(u/t)===i.dims[c]:u===i.dims[c]).reduce((u,c)=>u&&c,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==o.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==i.dims.length||!a.dims.map((u,c)=>u===i.dims[c]).reduce((u,c)=>u&&c,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},qL=(n,e)=>{let r=n[0].dims,t=n[1].dims,o=r.length,i=j.normalizeAxis(e.gatherAxis,o),a=j.normalizeAxis(e.quantizeAxis,o),u=r.slice(0);u.splice(i,1,...t);let c=j.size(u),p=n[2].dataType,b=n[0].dataType===22,_=[{type:12,data:c},{type:12,data:a},{type:12,data:i},{type:12,data:e.blockSize},...Q(...n.map((T,I)=>T.dims),u)],x=T=>{let I=H("data",n[0].dataType,n[0].dims.length),P=H("inputIndices",n[1].dataType,n[1].dims.length),$=H("scales",n[2].dataType,n[2].dims.length),A=n.length>3?H("zeroPoint",n[3].dataType,n[3].dims.length):void 0,C=Z("output",p,u.length),k=[I,P,$];A&&k.push(A);let z=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${T.registerUniforms(z).declareVariables(...k,C)}
        ${T.mainStart()}
        let output_indices = ${C.offsetToIndices("global_idx")};
        var indices_indices = ${P.type.indices}(0);
        ${t.length>1?`
          for (var i: u32 = 0; i < ${t.length}; i++) {
            let index = ${C.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${P.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${C.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${I.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${C.indicesGet("output_indices","i")};
          ${I.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${P.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[i]};
        }
        ${I.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${C.indicesGet("output_indices",`i + ${t.length} - 1`)};
          ${I.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${I.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${I.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${b?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${$.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${$.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${$.getByIndices("scale_indices")};
        ${A?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${A.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${A.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${b?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${gt(p)}(quantized_data - zero_point) * scale;
        ${C.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${e.cacheKey};${n.filter((T,I)=>I!==1).map(T=>T.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:n.length},(T,I)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:p}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:_}),getShaderSource:x}},n1=(n,e)=>{let r=n.inputs;HL(r,e),n.compute(qL(n.inputs,e))},o1=n=>we({blockSize:n.blockSize,gatherAxis:n.gatherAxis,quantizeAxis:n.quantizeAxis})});var KL,XL,a1,s1,u1=W(()=>{"use strict";ve();Se();it();Ae();KL=n=>{if(!n||n.length!==2)throw new Error("GatherElements requires 2 inputs.");if(n[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(n[0].dims.length!==n[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},XL=(n,e)=>{let r=n[0].dims,t=n[0].dataType,o=r.length,i=n[1].dims,a=n[1].dataType,u=j.normalizeAxis(e.axis,o),c=r[u],p=i.slice(0),m=j.size(p),b=H("input",t,o),_=H("indicesInput",a,i.length),x=Z("output",t,p.length),T=[{type:12,data:m},{type:6,data:c},{type:12,data:u}];return T.push(...Q(r,i,p)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:p,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:T}),getShaderSource:$=>`
      ${$.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(b,_,x)}
      ${$.mainStart()}
      ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${x.offsetToIndices("global_idx")};

      var idx = ${_.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${b.type.indices}(outputIndices);
      ${b.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${b.getByIndices("inputIndices")};

      ${x.setByOffset("global_idx","value")};
  }`}},a1=n=>we({axis:n.axis}),s1=(n,e)=>{let r=n.inputs;KL(r),n.compute(XL(n.inputs,e))}});var YL,ZL,l1,c1,d1=W(()=>{"use strict";ve();Se();Ae();YL=n=>{if(!n)throw new Error("Input is missing");if(n.length<2||n.length>3)throw new Error("Invaid input number.");if(n.length===3&&n[2].dims.length>2)throw new Error("Invalid input shape of C");if(n[0].dataType!==n[1].dataType||n.length===3&&n[0].dataType!==n[2].dataType)throw new Error("Input types are mismatched")},ZL=(n,e)=>{let r=n[0].dims.slice(),t=n[1].dims.slice(),[o,i,a]=Ba.getShapeOfGemmResult(r,e.transA,t,e.transB,n.length===3?n[2].dims:void 0),u=[o,i];if(!u)throw new Error("Can't use gemm on the given tensors");let c=16,p=Math.ceil(i/c),m=Math.ceil(o/c),b=!0,_=j.size(u),x=[{type:12,data:b?p:_},{type:12,data:o},{type:12,data:i},{type:12,data:a},{type:1,data:e.alpha},{type:1,data:e.beta}],T=["type","type"];n.length===3&&(x.push(...Q(n[2].dims)),T.push("rank")),x.push(...Q(u));let I=$=>{let A="";e.transA&&e.transB?A="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":e.transA&&!e.transB?A="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!e.transA&&e.transB?A="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!e.transA&&!e.transB&&(A="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let C=e.alpha===1?"":"value *= uniforms.alpha;",k=H("a",n[0].dataType,n[0].dims),z=H("b",n[1].dataType,n[1].dims),M=k.type.value,q=null,X=[k,z];n.length===3&&(q=H("c",n[2].dataType,n[2].dims.length),X.push(q));let J=Z("output",n[0].dataType,u.length);X.push(J);let ie=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${$.registerUniforms(ie).declareVariables(...X)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${M}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${A}
    }

    ${C}
    ${q!=null?`let cOffset = ${q.broadcastedIndicesToOffset("vec2(m, n)",J)}; value += ${M}(uniforms.beta) * ${q.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},P=$=>{let A=H("a",n[0].dataType,n[0].dims),C=H("b",n[1].dataType,n[1].dims),k=null,z=[A,C];n.length===3&&(k=H("c",n[2].dataType,n[2].dims.length),z.push(k));let M=Z("output",n[0].dataType,u.length);z.push(M);let q=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],X="",J="";e.transA&&e.transB?(J=`
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
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,X="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):e.transA&&!e.transB?(J=`
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
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,X="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!e.transA&&e.transB?(J=`
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
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,X="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!e.transA&&!e.transB&&(J=`
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
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,X="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let ie=e.alpha===1?"":"value *= uniforms.alpha;";return`
  ${$.registerUniforms(q).declareVariables(...z)}
  var<workgroup> tile_a: array<array<${A.type.storage}, ${c}>, ${c}>;
  var<workgroup> tile_b: array<array<${C.type.storage}, ${c}>, ${c}>;
  ${$.mainStart([c,c,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${c};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${c};
    let num_tiles = (uniforms.K - 1) / ${c} + 1;
    var k_start = 0u;
    var value = ${M.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${J}
      k_start = k_start + ${c};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${c}; k++) {
        ${X}
      }
      workgroupBarrier();
    }

    ${ie}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",M)}; value += ${M.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return b?{name:"GemmShared",shaderCache:{hint:`${e.cacheKey}`,inputDependencies:T},getRunData:()=>({outputs:[{dims:u,dataType:n[0].dataType}],dispatchGroup:{x:p*m},programUniforms:x}),getShaderSource:P}:{name:"Gemm",shaderCache:{hint:`${e.cacheKey}`,inputDependencies:T},getRunData:()=>({outputs:[{dims:u,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:x}),getShaderSource:I}},l1=n=>{let e=n.transA,r=n.transB,t=n.alpha,o=n.beta;return{transA:e,transB:r,alpha:t,beta:o,cacheKey:`${n.transA};${n.transB};${n.alpha===1}`}},c1=(n,e)=>{YL(n.inputs),n.compute(ZL(n.inputs,e))}});var un,An,bo,_o,JL,QL,eR,tR,rR,nR,oR,iR,f1,p1,h1=W(()=>{"use strict";ve();Se();it();Ae();[un,An,bo,_o]=[0,1,2,3],JL=n=>{if(n[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(n[0].dims.length!==n[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(n[0].dims.length-2!==n[1].dims[n[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${n[0].dims.length-2}`);if(n[0].dims[0]!==n[1].dims[0])throw new Error("grid batch size must match input batch size")},QL=`
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
`,eR=n=>`
  fn gs_bicubic_interpolate(p: mat4x4<${n}>, x: f32, y: f32) -> ${n} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${n}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,tR=n=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${n.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,rR=n=>`
  ${n.paddingMode==="reflection"?`
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
`,nR=(n,e,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${e} {
     var pixel = ${e}(0);
     var indices = vec4<u32>(0);
     indices[${un}] = batch;
     indices[${An}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${bo}] = u32(r);
            indices[${_o}] = u32(c);
          }
        `;case"border":return`
          indices[${bo}] = u32(clamp(r, 0, H - 1));
          indices[${_o}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${bo}] = gs_reflect(r, border[1], border[3]);
          indices[${_o}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${n.getByIndices("indices")};
  }
`,oR=(n,e,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${un}], indices[${An}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${un}], indices[${An}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${un}], indices[${An}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${un}], indices[${An}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${un}], indices[${An}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${un}], indices[${An}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${n.setByOffset("global_idx","result")}`,iR=(n,e)=>{let r=H("x",n[0].dataType,n[0].dims.length),t=[n[1].dims[0],n[1].dims[1],n[1].dims[2]],o=H("grid",n[1].dataType,t.length,2),i=[n[0].dims[0],n[0].dims[1],n[1].dims[1],n[1].dims[2]];e.format==="NHWC"&&(i=[n[0].dims[0],n[1].dims[1],n[1].dims[2],n[0].dims[3]],[un,An,bo,_o]=[0,3,1,2]);let a=Z("output",n[0].dataType,i.length),u=r.type.value,c=j.size(i),p=[{type:12,data:c},...Q(n[0].dims,t,i)],m=b=>`
  ${b.registerUniform("output_size","u32").declareVariables(r,o,a)}
  ${QL}
  ${eR(u)}
  ${tR(e)}
  ${rR(e)}
  ${nR(r,u,e)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${bo}]);
      let W_in = i32(uniforms.x_shape[${_o}]);

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
      var grid_indices = vec3<u32>(indices[${un}], indices[${bo}], indices[${_o}]);
      let nxy = ${o.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${oR(a,u,e)}
  }`;return{name:"GridSample",shaderCache:{hint:`${e.cacheKey}`,inputDependencies:["type","type"]},getRunData:b=>{let _=j.size(i);return{outputs:[{dims:i,dataType:b[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:p}},getShaderSource:m}},f1=(n,e)=>{JL(n.inputs),n.compute(iR(n.inputs,e))},p1=n=>we({alignCorners:n.align_corners,mode:n.mode,paddingMode:n.padding_mode,format:n.format})});var Dt,uR,g1,m1,lR,ei,y1,Wc=W(()=>{"use strict";ve();Se();it();ja();Xa();Ae();sn();Dt=(n,e)=>n.length>e&&n[e].dims.length>0?n[e]:void 0,uR=(n,e)=>{let r=n[0],t=Dt(n,1),o=Dt(n,2),i=Dt(n,3),a=Dt(n,4),u=Dt(n,5),c=Dt(n,6),p=Dt(n,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let m=r.dims[0],b=r.dims[1],_=r.dims.length===3?r.dims[2]:e.numHeads*r.dims[4],x=b,T=0,I=0,P=Math.floor(_/e.numHeads);if(c&&p&&j.size(c.dims)&&j.size(p.dims)){if(c.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(c.dims[0]!==m||c.dims[1]!==e.numHeads||c.dims[3]!==P)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==m||p.dims[1]!==e.numHeads||p.dims[3]!==P)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(c.dims[2]!==p.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(p.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');T=c.dims[2],I=c.dims[2]}else if(c&&j.size(c.dims)||p&&j.size(p.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $;if(t&&j.size(t.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(t.dims.length<3||t.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==t.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(t.dims.length===3){if(t.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');$=2,x=t.dims[1]}else if(t.dims.length===5){if(t.dims[2]!==e.numHeads||t.dims[3]!==2||t.dims[4]!==P)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(o)throw new Error('Expect "value" be none when "key" has packed kv format.');$=5,x=t.dims[1]}else{if(t.dims[1]!==e.numHeads||t.dims[3]!==P)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');$=0,x=t.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==e.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}if(i&&j.size(i.dims)>0){if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(t&&t.dims.length===5&&t.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let A=T+x,C=0;if(a&&j.size(a.dims)>0){C=8;let q=a.dims;throw q.length===1?q[0]===m?C=1:q[0]===3*m+2&&(C=3):q.length===2&&q[0]===m&&q[1]===A&&(C=5),C===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,z=_;if(o&&j.size(o.dims)>0){if(o.dims.length!==3&&o.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==o.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(o.dims.length===3){if(x!==o.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');z=o.dims[2]}else{if(x!==o.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');z=o.dims[1]*o.dims[3],k=!0}}let M=!1;if(a&&j.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(u&&j.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==m||u.dims[1]!==e.numHeads||u.dims[2]!==b||u.dims[3]!==A)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:m,sequenceLength:b,pastSequenceLength:T,kvSequenceLength:x,totalSequenceLength:A,maxSequenceLength:I,inputHiddenSize:0,hiddenSize:_,vHiddenSize:z,headSize:P,vHeadSize:Math.floor(z/e.numHeads),numHeads:e.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:e.maskFilterValue,maskType:C,scale:e.scale,broadcastResPosBias:M,passPastInKv:k,qkvFormat:$}},g1=n=>we({...n}),m1=we({perm:[0,2,1,3]}),lR=(n,e,r,t,o,i,a)=>{let u=[t,o,i],c=j.size(u),p=[{type:12,data:c},{type:12,data:a},{type:12,data:i}],m=b=>{let _=Z("qkv_with_bias",e.dataType,u),x=H("qkv",e.dataType,u),T=H("bias",r.dataType,u),I=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${b.registerUniforms(I).declareVariables(x,T,_)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return n.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:e.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:p}),getShaderSource:m},{inputs:[e,r],outputs:[-1]})[0]},ei=(n,e,r,t,o,i,a,u)=>{let c=i;if(a&&j.size(a.dims)>0){if(t===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return c=lR(n,i,a,e,t,r*o,u),c=c.reshape([e,t,r,o]),r===1||t===1?c:n.compute(yt(c,m1.perm),{inputs:[c],outputs:[-1]})[0]}else return i.dims.length===3&&(c=i.reshape([e,t,r,o])),r===1||t===1?c:n.compute(yt(c,m1.perm),{inputs:[c],outputs:[-1]})[0]},y1=(n,e)=>{let r=uR(n.inputs,e),t=n.inputs[0],o=Dt(n.inputs,1),i=Dt(n.inputs,2),a=Dt(n.inputs,3),u=Dt(n.inputs,4),c=Dt(n.inputs,5),p=Dt(n.inputs,6),m=Dt(n.inputs,7);if(t.dims.length===5)throw new Error("Packed QKV is not implemented");if(o?.dims.length===5)throw new Error("Packed KV is not implemented");let b=o&&i&&o.dims.length===4&&i.dims.length===4,_=ei(n,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t,a,0);if(b)return yo(n,_,o,i,u,void 0,p,m,c,r);if(!o||!i)throw new Error("key and value must be provided");let x=ei(n,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,o,a,r.hiddenSize),T=ei(n,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,i,a,2*r.hiddenSize);yo(n,_,x,T,u,void 0,p,m,c,r)}});var cR,dR,fR,pR,Hc,b1,_1,qc=W(()=>{"use strict";ve();Se();it();Ae();cR=n=>{if(!n||n.length<1)throw new Error("too few inputs")},dR=(n,e)=>{let r=[],t=e.numOutputs;return n[1].dims[0]>0&&(n[1].getBigInt64Array().forEach(o=>r.push(Number(o))),t=r.length),we({numOutputs:t,axis:e.axis,splitSizes:r})},fR=n=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${n}u; i += 1u ) {
    if (index < ${ue("uniforms.size_in_split_axis","i",n)}) {
        return i;
    }
    }
    return ${n}u;
}`,pR=n=>{let e=n.length,r=[];for(let t=0;t<e;++t){let o=n[t].setByIndices("indices","input[global_idx]");e===1?r.push(o):t===0?r.push(`if (output_number == ${t}u) { ${o} }`):t===e-1?r.push(`else { ${o} }`):r.push(`else if (output_number == ${t}) { ${o} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${n[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Hc=(n,e)=>{let r=n[0].dims,t=j.size(r),o=n[0].dataType,i=j.normalizeAxis(e.axis,r.length),a=new Array(e.numOutputs),u=H("input",o,r.length),c=new Array(e.numOutputs),p=[],m=[],b=0,_=[{type:12,data:t}];for(let T=0;T<e.numOutputs;T++){b+=e.splitSizes[T],c[T]=b;let I=r.slice();I[i]=e.splitSizes[T],m.push(I),a[T]=Z(`output${T}`,o,I.length),p.push({dims:m[T],dataType:n[0].dataType})}_.push({type:12,data:c},...Q(r,...m));let x=T=>`
  ${T.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",c.length).declareVariables(u,...a)}
  ${fR(c.length)}
  ${pR(a)}

  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",i)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ue("uniforms.size_in_split_axis","output_number - 1u",c.length)};
      ${u.indicesSet("indices",i,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:e.cacheKey,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:p,dispatchGroup:{x:Math.ceil(t/64)},programUniforms:_})}},b1=(n,e)=>{cR(n.inputs);let r=n.inputs.length===1?e:dR(n.inputs,e);n.compute(Hc(n.inputs,r),{inputs:[0]})},_1=n=>{let e=n.axis,r=n.splitSizes,t=n.numOutputs<0?r.length:n.numOutputs;if(t!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return we({axis:e,numOutputs:t,splitSizes:r})}});var hR,mR,v1,w1,x1=W(()=>{"use strict";it();Xa();Wc();qc();sn();hR=(n,e)=>{if(e.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(e.doRotary&&n.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=n[0],t=n[1],o=n[2],i=n[3],a=n[4];if(e.localWindowSize!==-1)throw new Error("Local attention is not supported");if(e.softcap!==0)throw new Error("Softcap is not supported");if(e.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(e.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,c=r.dims[0],p=r.dims[1],m=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:e.numHeads*r.dims[4],b=p,_=0,x=!t||t.dims.length===0,T=Math.floor(x?m/(e.numHeads+2*e.kvNumHeads):m/e.numHeads);x&&(m=T*e.numHeads);let I=i&&i.dims.length!==0,P=a&&a.dims.length!==0;if(I&&i.dims.length===4&&i.dims[0]===c&&i.dims[1]!==e.kvNumHeads&&i.dims[2]===e.kvNumHeads&&i.dims[3]===T)throw new Error("BSNH pastKey/pastValue is not supported");if(I&&P){if(i.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=i.dims[2]}else if(I||P)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let A=1;if(t&&t.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(t.dims.length<3||t.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==t.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(t.dims.length===3){if(r.dims[2]%t.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');b=t.dims[1]}else if(t.dims.length===5){if(t.dims[2]!==e.numHeads||t.dims[3]!==2||t.dims[4]!==T)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(o)throw new Error('Expect "value" be none when "key" has packed kv format.');b=t.dims[1]}else{if(t.dims[1]!==e.numHeads||t.dims[3]!==T)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');b=t.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==e.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');A=3}let C=0,k=!1,z=e.kvNumHeads?T*e.kvNumHeads:m;if(o&&o.dims.length>0){if(o.dims.length!==3&&o.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==o.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(o.dims.length===3){if(b!==o.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');z=o.dims[2]}else{if(b!==o.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');z=o.dims[1]*o.dims[3],k=!0}}let M=n.length>4?n[5]:void 0;if(M&&M.dims.length!==1&&M.dims[0]!==c)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:c,sequenceLength:p,pastSequenceLength:_,kvSequenceLength:b,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:m,vHiddenSize:z,headSize:T,vHeadSize:Math.floor(z/e.kvNumHeads),numHeads:e.numHeads,kvNumHeads:e.kvNumHeads,nReps:e.numHeads/e.kvNumHeads,pastPresentShareBuffer:!1,maskType:C,scale:e.scale,broadcastResPosBias:!1,passPastInKv:k,qkvFormat:A}},mR=we({perm:[0,2,1,3]}),v1=(n,e,r)=>{let t=e,o=r.kvNumHeads;return e.dims.length===3&&r.kvSequenceLength!==0&&(t=e.reshape([r.batchSize,r.kvSequenceLength,o,r.headSize]),t=n.compute(yt(t,mR.perm),{inputs:[t],outputs:[-1]})[0]),t},w1=(n,e)=>{let r=hR(n.inputs,e);if(n.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(n.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let t=n.inputs[0],o=n.inputs[1]&&n.inputs[1].dims.length>0?n.inputs[1]:void 0,i=n.inputs[2]&&n.inputs[2].dims.length>0?n.inputs[2]:void 0,a=n.inputs[3]&&n.inputs[3].dims.length!==0?n.inputs[3]:void 0,u=n.inputs[4]&&n.inputs[4].dims.length!==0?n.inputs[4]:void 0,c=n.inputs.length>4?n.inputs[5]:void 0,p=n.inputs.length>5?n.inputs[6]:void 0,m=r.kvNumHeads?r.kvNumHeads:r.numHeads,b=we({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,m*r.headSize,m*r.headSize]}),[_,x,T]=!o&&!i?n.compute(Hc([t],b),{inputs:[t],outputs:[-1,-1,-1]}):[t,o,i],I=ei(n,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,_,void 0,0);yo(n,I,v1(n,x,r),v1(n,T,r),void 0,void 0,a,u,void 0,r,c,p)}});var T1,gR,yR,I1,S1=W(()=>{"use strict";ve();Se();sn();Ae();T1=(n,e,r,t,o,i,a,u)=>{let c=ze(i),p=c===1?"f32":`vec${c}f`,m=c===1?"vec2f":`mat2x${c}f`,b=o*a,_=64;b===1&&(_=256);let x=[o,a,i/c],T=[o,a,2],I=["rank","type","type"],P=[];P.push(...Q(x,T));let $=A=>{let C=H("x",e.dataType,3,c),k=H("scale",r.dataType,r.dims),z=H("bias",t.dataType,t.dims),M=Z("output",1,3,2),q=[C,k,z,M];return`
  var<workgroup> workgroup_shared : array<${m}, ${_}>;
  const workgroup_size = ${_}u;
  ${A.declareVariables(...q)}
  ${A.mainStart(_)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${p}(0);
    var squared_sum = ${p}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${p}(${C.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${m}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${or("workgroup_shared[0][0]",c)} / f32(hight * ${c});
      let squared_sum_final = ${or("workgroup_shared[0][1]",c)} / f32(hight * ${c});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return n.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${c};${u};${_}`,inputDependencies:I},getRunData:()=>({outputs:[{dims:T,dataType:1}],dispatchGroup:{x:b},programUniforms:P}),getShaderSource:$},{inputs:[e,r,t],outputs:[-1]})[0]},gR=(n,e,r)=>{let t=e[0].dims,o=t,i=2,a=t[0],u=t[1],c=j.sizeFromDimension(t,i),p=ze(c),m=j.size(o)/p,b=T1(n,e[0],e[1],e[2],a,c,u,r.epsilon),_=[a,u,c/p],x=[a,u],T=["type","none"],I=P=>{let $=H("x",e[0].dataType,_.length,p),A=H("scale_shift",1,x.length,2),C=Z("output",e[0].dataType,_.length,p),k=[$,A,C];return`
  ${P.registerUniform("output_size","u32").declareVariables(...k)}
  ${P.mainStart()}
  ${P.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${C.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${A.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${$.getByOffset("global_idx")} * ${C.type.value}(scale_shift.x) + ${C.type.value}(scale_shift.y);
      ${C.setByOffset("global_idx","value")};
  }`};n.compute({name:"InstanceNormalization",shaderCache:{hint:`${p}`,inputDependencies:T},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...Q(_,x,_)]}),getShaderSource:I},{inputs:[e[0],b]})},yR=(n,e,r)=>{let t=e[0].dims,o=t,i=t[0],a=t[t.length-1],u=j.sizeFromDimension(t,1)/a,c=ze(a),p=j.size(o)/c,m=[{type:12,data:u},{type:12,data:Math.floor(a/c)}],b=["type","type"],_=!1,x=[0,t.length-1];for(let $=0;$<t.length-2;$++)_=_||t[$+1]!==1,x.push($+1);_=_&&t[t.length-1]!==1;let T=_?n.compute(yt(n.inputs[0],x),{inputs:[n.inputs[0]],outputs:[-1]})[0]:n.inputs[0].reshape(Array.from({length:t.length},($,A)=>t[x[A]])),I=T1(n,T,e[1],e[2],i,u,a,r.epsilon),P=$=>{let A=Xe(e[0].dataType),C=c===1?"vec2f":`mat${c}x2f`,k=q=>{let X=q===0?"x":"y",J=c===1?"f32":`vec${c}f`;switch(c){case 1:return`${A}(${J}(scale.${X}))`;case 2:return`vec2<${A}>(${J}(scale[0].${X}, scale[1].${X}))`;case 4:return`vec4<${A}>(${J}(scale[0].${X}, scale[1].${X}, scale[2].${X}, scale[3].${X}))`;default:throw new Error(`Not supported compoents ${c}`)}},z=H("input",e[0].dataType,e[0].dims,c),M=Z("output",e[0].dataType,o,c);return`
  @group(0) @binding(0) var<storage, read> input : array<${z.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${C}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${M.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${$.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};n.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${c}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:P},{inputs:[e[0],I]})},I1=(n,e)=>{e.format==="NHWC"?yR(n,n.inputs,e):gR(n,n.inputs,e)}});var bR,_R,$1,A1=W(()=>{"use strict";ve();Se();Ae();bR=n=>{if(!n||n.length<2)throw new Error("layerNorm requires at least 2 inputs.")},_R=(n,e,r)=>{let t=e.simplified,o=n[0].dims,i=n[1],a=!t&&n[2],u=o,c=j.normalizeAxis(e.axis,o.length),p=j.sizeToDimension(o,c),m=j.sizeFromDimension(o,c),b=j.size(i.dims),_=a?j.size(a.dims):0;if(b!==m||a&&_!==m)throw new Error(`Size of X.shape()[axis:] == ${m}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${b} and bias size of ${_}`);let x=[];for(let z=0;z<o.length;++z)z<c?x.push(o[z]):x.push(1);let T=ze(m),I=["type","type"],P=[{type:12,data:p},{type:1,data:m},{type:12,data:Math.floor(m/T)},{type:1,data:e.epsilon}];a&&I.push("type");let $=r>1,A=r>2,C=z=>{let M=Xe(n[0].dataType),q=[H("x",n[0].dataType,n[0].dims,T),H("scale",i.dataType,i.dims,T)];a&&q.push(H("bias",a.dataType,a.dims,T)),q.push(Z("output",n[0].dataType,u,T)),$&&q.push(Z("mean_data_output",1,x)),A&&q.push(Z("inv_std_output",1,x));let X=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${z.registerUniforms(X).declareVariables(...q)}
  ${z.mainStart()}
    ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Cc("f32",T)};
    var mean_square_vector = ${Cc("f32",T)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Kn(M,T,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${or("mean_vector",T)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${or("mean_square_vector",T)} / uniforms.norm_size ${t?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Kn(M,T,"x[j + offset]")};
      let f32scale = ${Kn(M,T,"scale[j]")};
      output[j + offset] = ${q[0].type.value}((f32input ${t?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${Kn(M,T,"bias[j]")}`:""}
      );
    }

    ${$?"mean_data_output[global_idx] = mean":""};
    ${A?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:u,dataType:n[0].dataType}];return $&&k.push({dims:x,dataType:1}),A&&k.push({dims:x,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${T};${r};${t}`,inputDependencies:I},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(p/64)},programUniforms:P}),getShaderSource:C}},$1=(n,e)=>{bR(n.inputs),n.compute(_R(n.inputs,e,n.outputCount))}});var vR,P1,O1=W(()=>{"use strict";Se();ts();rs();vR=n=>{if(!n||n.length!==2)throw new Error("MatMul requires 2 inputs.");if(n[0].dims[n[0].dims.length-1]!==n[1].dims[n[1].dims.length-2])throw new Error("shared dimension does not match.")},P1=n=>{vR(n.inputs);let e=Xr.calcShape(n.inputs[0].dims,n.inputs[1].dims,!0);if(!e)throw new Error("Can't use matmul on the given tensors");let r=e[e.length-1],t=n.inputs[0].dims[n.inputs[0].dims.length-1];if(r<8&&t<8)n.compute(es(n.inputs,{activation:""},e));else{let o=e[e.length-2],i=j.size(n.inputs[0].dims.slice(0,-2)),a=j.size(n.inputs[1].dims.slice(0,-2));if(i!==1&&o===1&&a===1){let u=n.inputs[0].reshape([1,i,t]),c=n.inputs[1].reshape([1,t,r]),p=[1,i,r],m=[u,c];n.compute(Qo(m,{activation:""},e,p),{inputs:m})}else n.compute(Qo(n.inputs,{activation:""},e))}}});var wR,xR,TR,C1,E1,D1=W(()=>{"use strict";ve();Se();it();Ae();wR=(n,e)=>{if(n.length<3||n.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=n[0],t=r.dims.length;if(r.dims[t-1]!==e.k)throw new Error("The last dim of input shape does not match the k value");let o=Math.floor((e.k+e.blockSize-1)/e.blockSize),i=e.blockSize/8*e.bits,a=n[1];if(!j.areEqual(a.dims,[e.n,o,i]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let c=n[2].dims;if(j.size(c)!==e.n*o)throw new Error("scales input size error.");if(n.length===4){let m=n[3].dims,b=e.bits>4?e.n*o:e.n*Math.floor((o+1)/2);if(j.size(m)!==b)throw new Error("zeroPoints input size error.")}},xR=(n,e)=>{let r=n[0].dims,t=r.length,o=r[t-2],i=e.k,a=e.n,u=r.slice(0,t-2),c=j.size(u),m=n[1].dims[2]/4,b=n[0].dataType,_=ze(e.k),x=ze(m),T=ze(a),I=u.concat([o,a]),P=o>1&&a/T%2===0?2:1,$=j.size(I)/T/P,A=64,C=[],k=[c,o,i/_],z=j.convertShape(n[1].dims).slice();z.splice(-1,1,m/x),C.push(...Q(k)),C.push(...Q(z)),C.push(...Q(n[2].dims)),n.length===4&&C.push(...Q(j.convertShape(n[3].dims)));let M=[c,o,a/T];C.push(...Q(M));let q=X=>{let J=k.length,ie=H("a",n[0].dataType,J,_),le=H("b",12,z.length,x),me=H("scales",n[2].dataType,n[2].dims.length),ne=[ie,le,me],he=n.length===4?H("zero_points",12,n[3].dims.length):void 0;he&&ne.push(he);let Ze=M.length,se=Z("output",n[0].dataType,Ze,T),de=Xe(n[0].dataType),xe=(()=>{switch(_){case 1:return`array<${de}, 8>`;case 2:return`mat4x2<${de}>`;case 4:return`mat2x4<${de}>`;default:throw new Error(`${_}-component is not supported.`)}})(),ye=()=>{let Ye=`
          // reuse a data
            var input_offset = ${ie.indicesToOffset(`${ie.type.indices}(batch, row, word_offset)`)};
            var a_data: ${xe};
            for (var j: u32 = 0; j < ${8/_}; j++) {
              a_data[j] = ${ie.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let Te=0;Te<T*P;Te++)Ye+=`
            b_value = ${x===1?`b${Te}_data`:`b${Te}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${xe}(${Array.from({length:4},(B,re)=>`${de}(b_value_lower[${re}]), ${de}(b_value_upper[${re}])`).join(", ")});
            b_dequantized_values = ${_===1?`${xe}(${Array.from({length:8},(B,re)=>`(b_quantized_values[${re}] - ${he?`zero_point${Te}`:"zero_point"}) * scale${Te}`).join(", ")});`:`(b_quantized_values - ${xe}(${Array(8).fill(`${he?`zero_point${Te}`:"zero_point"}`).join(",")})) * scale${Te};`};
            workgroup_shared[local_id.x * ${P} + ${Math.floor(Te/T)}]${T>1?`[${Te%T}]`:""} += ${Array.from({length:8/_},(B,re)=>`${_===1?`a_data[${re}] * b_dequantized_values[${re}]`:`dot(a_data[${re}], b_dequantized_values[${re}])`}`).join(" + ")};
          `;return Ye},Ee=()=>{let Ye=`
            var col_index = col * ${T};
            ${he?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${de}(8);`}
            `;for(let Te=0;Te<T*P;Te++)Ye+=`
            let scale${Te} = ${me.getByOffset("col_index * nBlocksPerCol + block")};
            ${he?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${he.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${Te} = ${de}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return Ye},He=()=>{let Ye=`col_index = col * ${T};`;for(let Te=0;Te<T*P;Te++)Ye+=`
            let b${Te}_data = ${le.getByIndices(`${le.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return Ye+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${xe};
            var b_dequantized_values: ${xe};`,Ye};return`
        var<workgroup> workgroup_shared: array<${se.type.value}, ${P*A}>;
        ${X.declareVariables(...ne,se)}
        ${X.mainStart([A,1,1])}
          let output_indices = ${se.offsetToIndices(`(global_idx / ${A}) * ${P}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${A}) {
            //process one block
            var word_offset: u32 = block * ${e.blockSize/_};
            ${Ee()}
            for (var word: u32 = 0; word < ${m}; word += ${x}) {
              ${He()}
              for (var i: u32 = 0; i < ${x}; i++) {
                ${ye()}
                word_offset += ${8/_};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${P}) {
            var output_value: ${se.type.value} = ${se.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${A}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${P};
            }
            ${se.setByIndices(`${se.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${e.blockSize};${e.bits};${_};${x};${T};${P};${A}`,inputDependencies:Array(n.length).fill("rank")},getRunData:()=>({outputs:[{dims:I,dataType:b}],dispatchGroup:{x:$},programUniforms:C}),getShaderSource:q}},TR=(n,e)=>{let r=n[0].dims,t=r.length,o=r[t-2],i=e.k,a=e.n,u=r.slice(0,t-2),c=j.size(u),m=n[1].dims[2]/4,b=n[0].dataType,_=ze(e.k),x=ze(m),T=u.concat([o,a]),I=128,P=a%8===0?8:a%4===0?4:1,$=I/P,A=$*x*8,C=A/_,k=A/e.blockSize,z=j.size(T)/P,M=[],q=[c,o,i/_],X=j.convertShape(n[1].dims).slice();X.splice(-1,1,m/x),M.push(...Q(q)),M.push(...Q(X)),M.push(...Q(n[2].dims)),n.length===4&&M.push(...Q(j.convertShape(n[3].dims)));let J=[c,o,a];M.push(...Q(J));let ie=le=>{let me=q.length,ne=H("a",n[0].dataType,me,_),he=H("b",12,X.length,x),Ze=H("scales",n[2].dataType,n[2].dims.length),se=[ne,he,Ze],de=n.length===4?H("zero_points",12,n[3].dims.length):void 0;de&&se.push(de);let xe=J.length,ye=Z("output",n[0].dataType,xe),Ee=Xe(n[0].dataType),He=()=>{switch(_){case 1:return`
          let a_data0 = vec4<${Ee}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Ee}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Ee}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Ee}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${_}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ne.type.value}, ${C}>;
        var<workgroup> inter_results: array<array<${ye.type.value}, ${$}>, ${P}>;
        ${le.declareVariables(...se,ye)}
        ${le.mainStart([$,P,1])}
          let output_indices = ${ye.offsetToIndices(`workgroup_index * ${P}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${k} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${C};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${C}; a_offset += ${I})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ne.getByIndices(`${ne.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ne.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${k} + local_id.x;
            ${de?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${de.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Ee}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${Ee}(8);`}
            let scale = ${Ze.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${he.getByIndices(`${he.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${e.blockSize/_};
            for (var i: u32 = 0; i < ${x}; i++) {
              ${He()}
              let b_value = ${x===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${Ee}>(${Array.from({length:4},(Ye,Te)=>`${Ee}(b_value_lower[${Te}]), ${Ee}(b_value_upper[${Te}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${Ee}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Ye,Te)=>`${`dot(a_data${Te}, b_dequantized_values[${Te}])`}`).join(" + ")};
              word_offset += ${8/_};
            }
            workgroupBarrier();
          }

          if (local_idx < ${P}) {
            var output_value: ${ye.type.value} = ${ye.type.value}(0);
            for (var b = 0u; b < ${$}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${ye.setByIndices(`${ye.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${e.blockSize};${_};${x};${$};${P}`,inputDependencies:Array(n.length).fill("rank")},getRunData:()=>({outputs:[{dims:T,dataType:b}],dispatchGroup:{x:z},programUniforms:M}),getShaderSource:ie}},C1=(n,e)=>{wR(n.inputs,e),e.blockSize===32&&n.adapterInfo.isVendor("intel")&&n.adapterInfo.isArchitecture("gen-12lp")?n.compute(TR(n.inputs,e)):n.compute(xR(n.inputs,e))},E1=n=>we(n)});var IR,SR,$R,AR,PR,OR,CR,ER,k1,N1=W(()=>{"use strict";ve();Se();Ae();IR=n=>{if(!n||n.length<1)throw new Error("Too few inputs");if(n[0].dataType!==1&&n[0].dataType!==10)throw new Error("Input type must be float or float16.");if(n.length>=2){let e=n[0].dims.length*2===n[1].dims[0];if(n.length===4&&(e=n[3].dims[0]*2===n[1].dims[0]),!e)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},SR=(n,e,r)=>{let t="";for(let o=e-1;o>=0;--o)t+=`
            k = i32(${n.indicesGet("indices",o)}) - ${ue("uniforms.pads",o,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ue("uniforms.x_shape",o,e)})) {
              break;
            }
            offset += k * i32(${ue("uniforms.x_strides",o,e)});
        `;return`
          value = ${n.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${t}
            value = x[offset];
          }
      `},$R=(n,e,r)=>{let t="";for(let o=e-1;o>=0;--o)t+=`
                k = i32(${n.indicesGet("indices",o)}) - ${ue("uniforms.pads",o,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ue("uniforms.x_shape",o,e)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ue("uniforms.x_shape",o,e)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ue("uniforms.x_strides",o,e)});
            `;return`
              var offset = 0;
              var k = 0;
              ${t}
              value = x[offset];
          `},AR=(n,e,r)=>{let t="";for(let o=e-1;o>=0;--o)t+=`
                k = i32(${n.indicesGet("indices",o)}) - ${ue("uniforms.pads",o,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ue("uniforms.x_shape",o,e)})) {
                  k = i32(${ue("uniforms.x_shape",o,e)}) - 1;
                }
                offset += k * i32(${ue("uniforms.x_strides",o,e)});
            `;return`
              var offset = 0;
              var k = 0;
              ${t}
              value = x[offset];
          `},PR=(n,e,r)=>{let t="";for(let o=e-1;o>=0;--o)t+=`
                k = i32(${n.indicesGet("indices",o)}) - ${ue("uniforms.pads",o,r)};
                if (k < 0)  {
                  k += i32(${ue("uniforms.x_shape",o,e)}]);
                }
                if (k >= i32(${ue("uniforms.x_shape",o,e)})) {
                  k -= i32(${ue("uniforms.x_shape",o,e)});
                }
                offset += k * i32(${ue("uniforms.x_strides",o,e)});
            `;return`
              var offset = 0;
              var k = 0;
              ${t}
              value = x[offset];
          `},OR=(n,e,r)=>{switch(r.mode){case 0:return SR(n,e,r.pads.length);case 1:return $R(n,e,r.pads.length);case 2:return AR(n,e,r.pads.length);case 3:return PR(n,e,r.pads.length);default:throw new Error("Invalid mode")}},CR=(n,e)=>{let r=j.padShape(n[0].dims.slice(),e.pads),t=n[0].dims,o=j.size(r),i=[{type:12,data:o},{type:6,data:e.pads}],a=n.length>=3&&n[2].data;e.mode===0&&i.push({type:a?n[2].dataType:1,data:e.value}),i.push(...Q(n[0].dims,r));let u=["rank"],c=p=>{let m=Z("output",n[0].dataType,r.length),b=H("x",n[0].dataType,t.length),_=b.type.value,x=OR(m,t.length,e),T=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:e.pads.length}];return e.mode===0&&T.push({name:"constant_value",type:a?_:"f32"}),`
            ${p.registerUniforms(T).declareVariables(b,m)}
            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${m.offsetToIndices("global_idx")};

            var value = ${_}(0);
            ${x}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${e.mode}${a}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(j.size(r)/64)},programUniforms:i}),getShaderSource:c}},ER=(n,e)=>{if(n.length>1){let r=n[1].getBigInt64Array(),t=n.length>=3&&n[2].data?n[2].dataType===10?n[2].getUint16Array()[0]:n[2].getFloat32Array()[0]:0,o=n[0].dims.length,i=new Int32Array(2*o).fill(0);if(n.length>=4){let u=n[3].getBigInt64Array();for(let c=0;c<u.length;c++)i[Number(u[c])]=Number(r[c]),i[Number(u[c])+o]=Number(r[c+u.length])}else r.forEach((u,c)=>i[Number(c)]=Number(u));let a=[];return i.forEach(u=>a.push(u)),{mode:e.mode,value:t,pads:a}}else return e},k1=(n,e)=>{IR(n.inputs);let r=ER(n.inputs,e);n.compute(CR(n.inputs,r),{inputs:[0]})}});var is,L1,R1,z1,M1,DR,kR,B1,F1,V1,G1,U1,j1,W1,H1,q1,K1,X1,Y1,Z1=W(()=>{"use strict";xt();ve();Se();Ae();is=n=>{if(Ie.webgpu.validateInputContent&&(!n||n.length!==1))throw new Error("Pool ops requires 1 input.")},L1=(n,e,r)=>{let t=e.format==="NHWC",o=n.dims.slice();t&&o.splice(1,0,o.pop());let i=Object.hasOwnProperty.call(e,"dilations"),a=e.kernelShape.slice(),u=e.strides.slice(),c=i?e.dilations.slice():[],p=e.pads.slice();Hn.adjustPoolAttributes(r,o,a,u,c,p);let m=Hn.computePoolOutputShape(r,o,u,c,a,p,e.autoPad),b=Object.assign({},e);i?Object.assign(b,{kernelShape:a,strides:u,pads:p,dilations:c,cacheKey:e.cacheKey}):Object.assign(b,{kernelShape:a,strides:u,pads:p,cacheKey:e.cacheKey});let _=m.slice();return _.push(_.splice(1,1)[0]),[b,t?_:m]},R1=(n,e)=>{let r=e.format==="NHWC",t=j.size(n),o=j.size(e.kernelShape),i=[{type:12,data:t},{type:12,data:o}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(e.kernelShape.length<=2){let u=e.kernelShape[e.kernelShape.length-1],c=e.strides[e.strides.length-1],p=e.pads[e.pads.length/2-1],m=e.pads[e.pads.length-1],b=!!(p+m);i.push({type:12,data:u},{type:12,data:c},{type:12,data:p},{type:12,data:m}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let _=!1;if(e.kernelShape.length===2){let x=e.kernelShape[e.kernelShape.length-2],T=e.strides[e.strides.length-2],I=e.pads[e.pads.length/2-2],P=e.pads[e.pads.length-2];_=!!(I+P),i.push({type:12,data:x},{type:12,data:T},{type:12,data:I},{type:12,data:P}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[i,a,!0,b,_]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=j.computeStrides(e.kernelShape);i.push({type:12,data:u},{type:12,data:e.pads},{type:12,data:e.strides}),a.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:e.pads.length},{name:"strides",type:"u32",length:e.strides.length});let c=e.pads.reduce((p,m)=>p+m);return[i,a,!!c,!1,!1]}},z1=(n,e,r,t,o,i,a,u,c,p,m,b)=>{let _=o.format==="NHWC",x=e.type.value,T=Z("output",e.type.tensor,t);if(o.kernelShape.length<=2){let I="",P="",$="",A=r-(_?2:1);if(m?I=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${A}] = indices[${A}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${A}] < 0 || xIndices[${A}]
                      >= uniforms.x_shape[${A}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${e.indicesToOffset("xIndices")}];
                  ${i}
                }`:I=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${A}] = indices[${A}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${e.indicesToOffset("xIndices")}];
                  ${i}
                }`,o.kernelShape.length===2){let k=r-(_?3:2);b?P=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${k}] < 0 || xIndices[${k}] >= uniforms.x_shape[${k}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:P=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                `,$=`
              }
            `}return`
            ${n.registerUniforms(c).declareVariables(e,T)}

            ${n.mainStart()}
              ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${T.offsetToIndices("global_idx")};
              var xIndices = ${T.offsetToIndices("global_idx")};

              var value = ${x}(${u});
              var pad = 0;
              ${P}
              ${I}
              ${$}
              ${a}

              output[global_idx] = value;
            }`}else{if(_)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let I=o.kernelShape.length,P=o.pads.length,$="";return p?$=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${e.indicesToOffset("xIndices")}];
                ${i}
              }`:$=`
              }
              let x_val = x[${e.indicesToOffset("xIndices")}];
              ${i}
            `,`
            ${n.registerUniforms(c).declareVariables(e,T)}

            ${n.mainStart()}
              ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${T.offsetToIndices("global_idx")};
              var xIndices = ${T.offsetToIndices("global_idx")};

              var offsets: array<u32, ${I}>;

              var value = ${x}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${I-1}u; j++) {
                  offsets[j] = offset / ${ue("uniforms.kernelStrides","j",I)};
                  offset -= offsets[j] * ${ue("uniforms.kernelStrides","j",I)};
                }
                offsets[${I-1}] = offset;

                isPad = false;
                for (var j = ${r-I}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${ue("uniforms.strides",`j - ${r-I}u`,I)}
                    + offsets[j - ${r-I}u] - ${ue("uniforms.pads","j - 2u",P)};
                  ${$}
              }
              ${a}

              output[global_idx] = value;
            }`}},M1=n=>`${n.format};${n.ceilMode};${n.autoPad};${n.kernelShape.length}`,DR=n=>`${M1(n)};${n.countIncludePad}`,kR=n=>`${M1(n)};${n.storageOrder};${n.dilations}`,B1=n=>({format:n.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][n.auto_pad],ceilMode:n.ceil_mode,kernelShape:n.kernel_shape,strides:n.strides,pads:n.pads}),F1=(n,e,r,t)=>{let[o,i]=L1(e,t,r),a=H("x",e.dataType,e.dims.length),u=a.type.value,c="value += x_val;",p="";o.countIncludePad?p+=`value /= ${u}(uniforms.kernelSize);`:p+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[m,b,_,x,T]=R1(i,o);m.push(...Q(e.dims,i));let I=["rank"];return{name:n,shaderCache:{hint:`${t.cacheKey};${_};${x};${T}`,inputDependencies:I},getRunData:()=>({outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(j.size(i)/64)},programUniforms:m}),getShaderSource:P=>z1(P,a,e.dims.length,i.length,o,c,p,0,b,_,x,T)}},V1=n=>{let e=n.count_include_pad!==0,r=B1(n);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let t={countIncludePad:e,...r,cacheKey:""};return{...t,cacheKey:DR(t)}},G1=(n,e)=>{is(n.inputs),n.compute(F1("AveragePool",n.inputs[0],!1,e))},U1={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},j1=n=>{let e=n.format;return{format:e,...U1,cacheKey:e}},W1=(n,e)=>{is(n.inputs),n.compute(F1("GlobalAveragePool",n.inputs[0],!0,e))},H1=(n,e,r,t)=>{let[o,i]=L1(e,t,r),a=`
      value = max(x_val, value);
    `,u="",c=H("x",e.dataType,e.dims.length),p=["rank"],[m,b,_,x,T]=R1(i,o);return m.push(...Q(e.dims,i)),{name:n,shaderCache:{hint:`${t.cacheKey};${_};${x};${T}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(j.size(i)/64)},programUniforms:m}),getShaderSource:I=>z1(I,c,e.dims.length,i.length,o,a,u,e.dataType===10?-65504:-1e5,b,_,x,T)}},q1=(n,e)=>{is(n.inputs),n.compute(H1("MaxPool",n.inputs[0],!1,e))},K1=n=>{let e=n.storage_order,r=n.dilations,t=B1(n);if(e!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(t.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let o={storageOrder:e,dilations:r,...t,cacheKey:""};return{...o,cacheKey:kR(o)}},X1=n=>{let e=n.format;return{format:e,...U1,cacheKey:e}},Y1=(n,e)=>{is(n.inputs),n.compute(H1("GlobalMaxPool",n.inputs[0],!0,e))}});var LR,RR,J1,Q1,e2=W(()=>{"use strict";ve();Se();it();Ae();LR=(n,e)=>{if(n.length<2||n.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(n.length===3&&n[1].dims===n[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(n.length===3&&n[0].dataType!==n[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(n[0].dataType===6&&n.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(n[1].dims.length!==0&&n[1].dims.length!==1&&n[1].dims.length!==n[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(n.length>2){if(n[0].dataType!==n[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(n[1].dims.length!==n[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!n[1].dims.map((r,t)=>r===n[2].dims[t]).reduce((r,t)=>r&&t,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(e.blockSize>0){if(n[1].dims.length===0||n[1].dims.length===1&&n[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!n[1].dims.map((o,i)=>i===e.axis||o===n[0].dims[i]).reduce((o,i)=>o&&i,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(n[1].dims.length!==n[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=n[0].dims[e.axis],t=n[1].dims[e.axis];if(e.blockSize<Math.ceil(r/t)||e.blockSize>Math.ceil(r/(t-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},RR=(n,e)=>{let r=j.normalizeAxis(e.axis,n[0].dims.length),t=n[0].dataType,o=t===3,i=n[0].dims,a=n[1].dataType,u=j.size(i),c=t===3||t===2,p=c?[Math.ceil(j.size(n[0].dims)/4)]:n[0].dims,m=n[1].dims,b=n.length>2?n[2]:void 0,_=b?c?[Math.ceil(j.size(b.dims)/4)]:b.dims:void 0,x=m.length===0||m.length===1&&m[0]===1,T=x===!1&&m.length===1,I=ze(u),P=x&&(!c||I===4),$=P?I:1,A=P&&!c?I:1,C=H("input",c?12:t,p.length,A),k=H("scale",a,m.length),z=b?H("zero_point",c?12:t,_.length):void 0,M=Z("output",a,i.length,$),q=[C,k];z&&q.push(z);let X=[p,m];b&&X.push(_);let J=[{type:12,data:u/$},{type:12,data:r},{type:12,data:e.blockSize},...Q(...X,i)],ie=le=>{let me=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${le.registerUniforms(me).declareVariables(...q,M)}
      ${le.mainStart()}
          ${le.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${M.offsetToIndices("global_idx")};

          // Set input x
          ${c?`
            let input = ${C.getByOffset("global_idx / 4")};
            let x_vec = ${o?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${$===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${C.getByOffset("global_idx")};`};

          // Set scale input
          ${x?`let scale_value= ${k.getByOffset("0")}`:T?`
            let scale_index = ${M.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${z?x?c?`
                let zero_point_input = ${z.getByOffset("0")};
                let zero_point_vec =  ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${z.getByOffset("0")}`:T?c?`
                let zero_point_index = ${M.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${z.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${M.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${z.getByOffset("zero_point_index")};`:c?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${z.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${z.getByIndices("scale_indices")};`:`let zero_point_value = ${c?o?"i32":"u32":C.type.value}(0);`};
      // Compute and write output
      ${M.setByOffset("global_idx",`${M.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:e.cacheKey,inputDependencies:z?["rank","rank","rank"]:["rank","rank"]},getShaderSource:ie,getRunData:()=>({outputs:[{dims:i,dataType:a}],dispatchGroup:{x:Math.ceil(u/$/64),y:1,z:1},programUniforms:J})}},J1=(n,e)=>{LR(n.inputs,e),n.compute(RR(n.inputs,e))},Q1=n=>we({axis:n.axis,blockSize:n.blockSize})});var zR,MR,t2,r2=W(()=>{"use strict";xt();ve();Ae();zR=(n,e,r)=>{let t=n===e,o=n<e&&r<0,i=n>e&&r>0;if(t||o||i)throw new Error("Range these inputs' contents are invalid.")},MR=(n,e,r,t)=>{let o=Math.abs(Math.ceil((e-n)/r)),i=[o],a=o,u=[{type:12,data:a},{type:t,data:n},{type:t,data:r},...Q(i)],c=p=>{let m=Z("output",t,i.length),b=m.type.value,_=[{name:"outputSize",type:"u32"},{name:"start",type:b},{name:"delta",type:b}];return`
        ${p.registerUniforms(_).declareVariables(m)}
        ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${b}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${t}`},getShaderSource:c,getRunData:()=>({outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:u})}},t2=n=>{let e=0,r=0,t=0;n.inputs[0].dataType===6?(e=n.inputs[0].getInt32Array()[0],r=n.inputs[1].getInt32Array()[0],t=n.inputs[2].getInt32Array()[0]):n.inputs[0].dataType===1&&(e=n.inputs[0].getFloat32Array()[0],r=n.inputs[1].getFloat32Array()[0],t=n.inputs[2].getFloat32Array()[0]),Ie.webgpu.validateInputContent&&zR(e,r,t),n.compute(MR(e,r,t,n.inputs[0].dataType),{inputs:[]})}});var BR,FR,n2,o2,i2=W(()=>{"use strict";ve();Se();it();Ae();BR=(n,e,r,t)=>{if(n!=="none"&&t!=="i32"&&t!=="u32"&&t!=="f32")throw new Error(`Input ${t} is not supported with reduction ${n}.`);let o=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,i=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${e}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(n){case"none":return`${e}=${r};`;case"add":return t==="i32"||t==="u32"?`atomicAdd(&${e}, bitcast<${t}>(${r}));`:`
              ${o}bitcast<${t}>(oldValue) + (${r})${i}`;case"max":return t==="i32"||t==="u32"?`atomicMax(&${e}, bitcast<${t}>(${r}));`:`
                ${o}max(bitcast<f32>(oldValue), (${r}))${i}`;case"min":return t==="i32"||t==="u32"?`atomicMin(&${e}, bitcast<${t}>(${r}));`:`${o}min(bitcast<${t}>(oldValue), (${r}))${i}`;case"mul":return`${o}(bitcast<${t}>(oldValue) * (${r}))${i}`;default:throw new Error(`Reduction ${n} is not supported.`)}},FR=(n,e)=>{let r=n[0].dims,t=n[1].dims,o=r,i=1,a=Math.ceil(j.size(t)/i),u=t[t.length-1],c=j.sizeFromDimension(r,u),p=[{type:12,data:a},{type:12,data:u},{type:12,data:c},...Q(n[1].dims,n[2].dims,o)],m=b=>{let _=H("indices",n[1].dataType,n[1].dims.length),x=H("updates",n[2].dataType,n[2].dims.length,i),T=e.reduction!=="none"&&e.reduction!==""?Dw("output",n[0].dataType,o.length):Z("output",n[0].dataType,o.length,i);return`
      ${b.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(_,x,T)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${e.reduction==="none"}) {
    let n = ${j.size(t)};
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
  if (${e.reduction==="none"} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    indices_start = 0u;
  }
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${n[0].dims.length===1?`
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
    ${BR(e.reduction,"output[data_offset + i]","value",T.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${e.cacheKey}_${e.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:p}),getShaderSource:m}},n2=n=>we({reduction:n.reduction}),o2=(n,e)=>{n.compute(FR(n.inputs,e),{inputs:[n.inputs[1],n.inputs[2]],outputs:[]})}});var VR,GR,UR,a2,jR,WR,HR,qR,KR,XR,YR,ZR,s2,JR,QR,ez,tz,rz,u2,l2,c2=W(()=>{"use strict";ve();Se();it();Ae();VR=(n,e)=>{if(n.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),n.length>0){if(e.mode==="linear"){if(!(n.length===2||n.length===3||n.length===4&&n[0]===1&&n[1]===1||n.length===4&&n[0]===1&&n[3]===1||n.length===5&&n[0]===1&&n[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(e.mode==="cubic"&&!(n.length===2||n.length===4&&n[0]===1&&n[1]===1||n.length===4&&n[0]===1&&n[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},GR=(n,e,r)=>{e.every(o=>o>=0&&o<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let t=new Array(r).fill(1);return e.forEach((o,i)=>t[o]=n[i]),t},UR=(n,e,r,t,o,i)=>{let[a,u,c]=r>10?[1,2,3]:[-1,n.length>1?1:-1,-1],p=n[0].dims.length;if(a>0&&n.length>a&&n[a].dims.length>0)n[a].getFloat32Array().forEach(m=>i.push(m));else if(e.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&n.length>u&&n[u].dims.length===1&&n[u].dims[0]>0){if(n[u].getFloat32Array().forEach(m=>t.push(m)),t.length!==0&&t.length!==p&&r>=18&&t.length!==e.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");VR(t,e),e.axes.length>0&&GR(t,e.axes,p).forEach((m,b)=>t[b]=m)}if(c>0&&n.length>c&&n[c].dims.length===1&&n[c].dims[0]>0&&(n[c].getBigInt64Array().forEach(m=>o.push(Number(m))),o.length!==0&&o.length!==p&&r>=18&&o.length!==e.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(e.axes.length>0){if(t.length!==0&&t.length!==e.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(o.length!==0&&o.length!==e.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof t<"u"&&typeof o<"u"&&t.length>0&&o.length>p)throw new Error("Resize requires only of scales or sizes to be specified")},a2=(n,e,r,t)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${n}) * (${e});
  let whole = ${t}(big / (${r}));
  let fract = ${t}(big % (${r})) / ${t}(${r});
  return whole + fract;
`,jR=(n,e)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${e} { `+(()=>{switch(n){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${e}(xResized) / ${e}(xScale);
          } else {
            ${a2("xResized","lengthOriginal","lengthResized",e)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${e}(xResized) + 0.5) / ${e}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${e}(xResized) + 0.5) / ${e}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${a2("xResized","lengthOriginal - 1","lengthResized - 1",e)}
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
                  return offset + ((${e}(xResized) + 0.5) / ${e}(xScale)) - 0.5;`;case"half_pixel":return`return ((${e}(xResized) + 0.5) / ${e}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${n} is not supported`)}})()+"}",WR=(n,e,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(n){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(e<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${n} is not supported`)}})()+"}",HR=(n,e,r)=>{let t=new Array(r).fill(0).concat(new Array(r).fill(1)),o=n.length===0?t:n.slice();return e.length>0?(e.forEach((i,a)=>{t[i]=o[a],t[a+r]=o[e.length+a]}),t):o},qR=(n,e,r,t)=>{let o=[];if(r.length>0)if(t.length>0){if(n.forEach(i=>o.push(i)),Math.max(...t)>n.length)throw new Error("axes is out of bound");t.forEach((i,a)=>o[i]=r[a])}else r.forEach(i=>o.push(i));else{if(e.length===0)throw new Error("Resize requires either scales or sizes.");o=n.map((i,a)=>Math.round(i*e[a]))}return o},KR=(n,e,r)=>{let t=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(i=>e[i]),Number.MAX_VALUE):Math.min(...e,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(i=>e[i]),Number.MIN_VALUE):Math.max(...e,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();e.fill(1,0,e.length);let o=n.slice();return r.axes.length>0?(r.axes.forEach(i=>e[i]=t),r.axes.forEach(i=>o[i]=Math.round(n[i]*e[i]))):(e.fill(t,0,e.length),o.forEach((i,a)=>o[a]=Math.round(i*e[a]))),o},XR=(n,e,r,t,o)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${n.type.indices}) -> array<${n.type.value}, ${r.length}> {
      var original_indices: array<${n.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${n.indicesGet("output_indices","i")};
        var scale = ${ue("uniforms.scales","i",t)};
        var roi_low = ${ue("uniforms.roi","i",o)};
        var roi_hi = ${ue("uniforms.roi",`i + ${e.length}`,o)};
        if (scale == 1.0) {
          original_indices[i] = ${n.type.value}(output_index);
        } else {
          var input_shape_i = ${ue("uniforms.input_shape","i",e.length)};
          var output_shape_i = ${ue("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,YR=(n,e,r,t,o,i,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> ${n.type.indices} {
      var input_indices: ${n.type.indices};
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${ue("uniforms.scales","i",o)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ue("uniforms.roi","i",i)};
          var roi_hi = ${ue("uniforms.roi",`i + ${r.length}`,i)};
          var input_shape_i = ${ue("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${ue("uniforms.output_shape","i",t.length)};
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
        ${n.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,ZR=(n,e)=>`
    fn checkInputIndices(input_indices: ${n.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${e.length}; i++) {
        var input_index = ${n.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${ue("uniforms.input_shape","i",e.length)}) {
          return false;
        }
      }
      return true;
    }`,s2=(n,e,r,t)=>n.rank>t?`
    ${n.indicesSet("input_indices",e,"channel")};
    ${n.indicesSet("input_indices",r,"batch")};
`:"",JR=(n,e,r,t,o)=>{let[a,u,c,p]=r.length===2?[-1,0,1,-1]:[0,2,3,1],m=n.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${m} {
      var input_indices: ${n.type.indices};
      ${n.indicesSet("input_indices",u,`max(0, min(row, ${r[u]} - 1))`)};
      ${n.indicesSet("input_indices",c,`max(0, min(col, ${r[c]} - 1))`)};
      ${s2(n,p,a,2)}
      return ${n.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${e.type.indices}) -> ${m} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${m} = originalIndices[${u}];
      var col:${m} = originalIndices[${c}];
      ${t?`if (row < 0 || row > (${r[u]} - 1) || col < 0 || col > (${r[c]} - 1)) {
        return ${o};
      }`:""};
      row = max(0, min(row, ${r[u]} - 1));
      col = max(0, min(col, ${r[c]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${a}])`:"0"};
      var x11: ${m} = getInputValue(batch, channel, row1, col1);
      var x12: ${m} = getInputValue(batch, channel, row1, col2);
      var x21: ${m} = getInputValue(batch, channel, row2, col1);
      var x22: ${m} = getInputValue(batch, channel, row2, col2);
      var dx1: ${m} = abs(row - ${m}(row1));
      var dx2: ${m} = abs(${m}(row2) - row);
      var dy1: ${m} = abs(col - ${m}(col1));
      var dy2: ${m} = abs(${m}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},QR=(n,e,r,t,o,i,a,u,c,p)=>{let m=r.length===2,b=!0,[_,x]=m?[0,1]:b?[2,3]:[1,2],T=n.type.value,I=P=>{let $=P===_?"row":"col";return`
      fn ${$}CubicInterpolation(input_indices: ${n.type.indices}, output_indices: ${e.type.indices}) -> ${T} {
        var output_index = ${e.indicesGet("output_indices",P)};
        var originalIdx: ${T} = getOriginalCoordinateFromResizedCoordinate(output_index, ${o[P]},
        ${t[P]}, ${r[P]}, ${i[P]}, ${i[P]} + ${r.length});
        var fractOriginalIdx: ${T} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[P]} - 1))) {
          return ${c};
        }
        var data: array<${T}, 4> = array<${T}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${$}: ${T} = originalIdx + ${T}(i);
          if (${$} < 0 || ${$} >= ${r[P]}) {
            ${p?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${c};`:`${$} = max(0, min(${$}, ${r[P]} - 1));`};
          }
        var input_indices_copy: ${n.type.indices} = input_indices;
          ${n.indicesSet("input_indices_copy",P,`u32(${$})`)};
          data[i + 1] = ${P===_?n.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${I(_)};
    ${I(x)};
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
    var input_indices: ${n.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},ez=(n,e,r,t,o)=>{let[a,u,c,p,m]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],b=n.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${b} {
      var input_indices: ${n.type.indices};
      ${n.indicesSet("input_indices",u,`max(0, min(depth, ${r[u]} - 1))`)};
      ${n.indicesSet("input_indices",c,`max(0, min(height, ${r[c]} - 1))`)};
      ${n.indicesSet("input_indices",p,`max(0, min(width, ${r[p]} - 1))`)};
      ${s2(n,m,a,3)}
      return ${n.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${e.type.indices}) -> ${b} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${b} = originalIndices[${u}];
      var height:${b} = originalIndices[${c}];
      var width:${b} = originalIndices[${p}];
      ${t?`if (depth < 0 || depth > (${r[u]} - 1) || height < 0 || height > (${r[c]} - 1) || width < 0 || (width > ${r[p]} - 1)) {
      return ${o};
        }`:""};

    depth = max(0, min(depth, ${r[u]} - 1));
      height = max(0, min(height, ${r[c]} - 1));
      width = max(0, min(width, ${r[p]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${m}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${b} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${b} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${b} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${b} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${b} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${b} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${b} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${b} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${b} = abs(depth - ${b}(depth1));
      var dx2: ${b} = abs(${b}(depth2) - depth);
      var dy1: ${b} = abs(height - ${b}(height1));
      var dy2: ${b} = abs(${b}(height2) - height);
      var dz1: ${b} = abs(width - ${b}(width1));
      var dz2: ${b} = abs(${b}(width2) - width);
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
    }`},tz=(n,e,r,t,o,i)=>{let a=n.dims,u=HR(i,e.axes,a.length),c=qR(a,t,o,e.axes),p=t.slice();t.length===0&&(p=a.map((A,C)=>A===0?1:c[C]/A),e.keepAspectRatioPolicy!=="stretch"&&(c=KR(a,p,e)));let m=Z("output",n.dataType,c.length),b=H("input",n.dataType,a.length),_=j.size(c),x=a.length===c.length&&a.every((A,C)=>A===c[C]),T=e.coordinateTransformMode==="tf_crop_and_resize",I=e.extrapolationValue,P=b.type.value,$=A=>`
      ${x?"":`
      ${jR(e.coordinateTransformMode,P)};
      ${(()=>{switch(e.mode){case"nearest":return`
              ${ZR(b,a)};
              ${WR(e.nearestMode,r,P)};
              ${YR(b,m,a,c,p.length,u.length,T)};
              `;case"linear":return`
              ${XR(m,a,c,p.length,u.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${JR(b,m,a,T,I)}`;if(a.length===3||a.length===5)return`${ez(b,m,a,T,I)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${QR(b,m,a,c,p,u,e.cubicCoeffA,T,e.extrapolationValue,e.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${A.registerUniform("output_size","u32").registerUniform("scales","f32",p.length).registerUniform("roi","f32",u.length).declareVariables(b,m)}
      ${A.mainStart()}
        ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${x?"output[global_idx] = input[global_idx];":`
        let output_indices = ${m.offsetToIndices("global_idx")};
        var input_indices: ${b.type.indices};
        ${(()=>{switch(e.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${b.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${e.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${e.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${e.cacheKey}|${r}|${p.length>0?e.mode==="cubic"?p:p.length:""}|${o.length>0?o:""}|${u.length>0?u:""}|${x}|${e.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:c,dataType:n.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},{type:1,data:p},{type:1,data:u},...Q(a,c)]})}},rz=n=>{let e=n.customDataBuffer;return new Uint32Array(e,e.byteOffset,1)[0]},u2=(n,e)=>{let r=[],t=[],o=[],i=rz(n);if(e.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");UR(n.inputs,e,i,r,t,o),n.compute(tz(n.inputs[0],e,i,r,t,o),{inputs:[0]})},l2=n=>{let e=n.antialias,r=n.axes,t=n.coordinateTransformMode,o=n.cubicCoeffA,i=n.excludeOutside!==0,a=n.extrapolationValue,u=n.keepAspectRatioPolicy,c=n.mode,p=n.nearestMode===""?"simple":n.nearestMode;return we({antialias:e,axes:r,coordinateTransformMode:t,cubicCoeffA:o,excludeOutside:i,extrapolationValue:a,keepAspectRatioPolicy:u,mode:c,nearestMode:p})}});var nz,oz,d2,f2=W(()=>{"use strict";ve();Se();it();Ae();nz=(n,e)=>{let[r,t,o,i]=n,{numHeads:a,rotaryEmbeddingDim:u}=e;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!j.areEqual(t.dims,[])&&!j.areEqual(t.dims,[1])&&t.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${t.dims.length}`);if(o.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${o.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(!j.areEqual(o.dims,i.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let c=r.dims[0],p=r.dims[r.dims.length-2],m=o.dims[0],b=j.sizeFromDimension(r.dims,1)/p,_=u===0?o.dims[1]*2:b/a;if(u>_)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(t.dims.length===2){if(c!==t.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${t.dims[0]}`);if(p!==t.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${t.dims[1]}`)}if(_/2!==o.dims[1]&&u/2!==o.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${o.dims[1]}`);if(p>m)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},oz=(n,e)=>{let{interleaved:r,numHeads:t,rotaryEmbeddingDim:o,scale:i}=e,a=n[0].dims[0],u=j.sizeFromDimension(n[0].dims,1),c=n[0].dims[n[0].dims.length-2],p=u/c,m=n[2].dims[1],b=o===0?m*2:p/t,_=new Array(a,c,p/b,b-m),x=j.computeStrides(_),T=[{type:1,data:i},{type:12,data:_},{type:12,data:x},...n[0].dims.length===3?new Array({type:12,data:[u,p,b,1]}):[],...n[0].dims.length===4?new Array({type:12,data:[u,b,c*b,1]}):[],...Q(n[0].dims,n[1].dims,n[2].dims,n[3].dims,n[0].dims)],I=P=>{let $=H("input",n[0].dataType,n[0].dims.length),A=H("position_ids",n[1].dataType,n[1].dims.length),C=H("cos_cache",n[2].dataType,n[2].dims.length),k=H("sin_cache",n[3].dataType,n[3].dims.length),z=Z("output",n[0].dataType,n[0].dims.length);return P.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:_.length},{name:"global_strides",type:"u32",length:x.length},{name:"input_output_strides",type:"u32",length:x.length}]),`
        ${P.declareVariables($,A,C,k,z)}

        ${P.mainStart(qn)}
          let half_rotary_emb_dim = uniforms.${C.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${P.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${A.broadcastedIndicesToOffset("bsnh.xy",Z("",A.type.tensor,2))};
            let position_id =
                u32(${A.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${$.getByOffset("i")} * ${C.get("position_id","bsnh[3]")} -
                ${$.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${z.setByOffset("i","re")}
            let im = ${$.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${$.getByOffset("j")} * ${C.get("position_id","bsnh[3]")};
            ${z.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${z.setByOffset("k",$.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:we({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:I,getRunData:()=>({outputs:[{dims:n[0].dims,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(j.size(_)/qn)},programUniforms:T})}},d2=(n,e)=>{nz(n.inputs,e),n.compute(oz(n.inputs,e))}});var iz,az,p2,h2=W(()=>{"use strict";ve();Se();Ae();iz=n=>{if(!n||n.length<3)throw new Error("layerNorm requires at least 3 inputs.");let e=n[0],r=n[1],t=n[2];if(e.dataType!==r.dataType||e.dataType!==t.dataType)throw new Error("All inputs must have the same data type");if(e.dims.length!==3&&e.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let o=e.dims[e.dims.length-1],i=e.dims[e.dims.length-2];if(r.dims[r.dims.length-1]!==o)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==i)throw new Error("Skip must have the same sequence length as input");if(t.dims.length!==1)throw new Error("Gamma must be 1D");if(t.dims[t.dims.length-1]!==o)throw new Error("Gamma must have the same hidden size as input");if(n.length>3){let a=n[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==o)throw new Error("Beta must have the same hidden size as input")}if(n.length>4){let a=n[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==o)throw new Error("Bias must have the same hidden size as input")}},az=(n,e,r,t)=>{let o=e.simplified,i=n[0].dims,a=j.size(i),u=i,c=a,p=i.slice(-1)[0],m=t?i.slice(0,-1).concat(1):[],b=!o&&n.length>3,_=n.length>4,x=t&&r>1,T=t&&r>2,I=r>3,P=64,$=ze(p),A=[{type:12,data:c},{type:12,data:$},{type:12,data:p},{type:1,data:e.epsilon}],C=z=>{let M=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],q=[H("x",n[0].dataType,n[0].dims,$),H("skip",n[1].dataType,n[1].dims,$),H("gamma",n[2].dataType,n[2].dims,$)];b&&q.push(H("beta",n[3].dataType,n[3].dims,$)),_&&q.push(H("bias",n[4].dataType,n[4].dims,$)),q.push(Z("output",n[0].dataType,u,$)),x&&q.push(Z("mean_output",1,m)),T&&q.push(Z("inv_std_output",1,m)),I&&q.push(Z("input_skip_bias_sum",n[0].dataType,u,$));let X=Xe(n[0].dataType),J=Xe(1,$);return`

      ${z.registerUniforms(M).declareVariables(...q)}
      var<workgroup> sum_shared : array<${J}, ${P}>;
      var<workgroup> sum_squared_shared : array<${J}, ${P}>;

      ${z.mainStart([P,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${P};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${P};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${P-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${_?"bias[offset1d + i]":X+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${I?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Kn(X,$,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${P};
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
        let mean = ${or("sum",$)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${or("square_sum",$)} / f32(uniforms.hidden_size) ${o?"":"- mean * mean"} + uniforms.epsilon);
        ${x?"mean_output[global_idx] = mean;":""}
        ${T?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${o?"":`- ${X}(mean)`}) *
            ${X}(inv_std_dev) * gamma[offset1d + i]
            ${b?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:u,dataType:n[0].dataType}];return r>1&&k.push({dims:m,dataType:1}),r>2&&k.push({dims:m,dataType:1}),r>3&&k.push({dims:i,dataType:n[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${$};${x};${T};${I}`,inputDependencies:n.map((z,M)=>"type")},getShaderSource:C,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(c/p)},programUniforms:A})}},p2=(n,e)=>{iz(n.inputs);let t=[0];n.outputCount>1&&t.push(-3),n.outputCount>2&&t.push(-3),n.outputCount>3&&t.push(3),n.compute(az(n.inputs,e,n.outputCount,!1),{outputs:t})}});var sz,as,uz,m2,lz,cz,g2,y2,b2=W(()=>{"use strict";ve();Se();it();Ae();sz=(n,e)=>{if(!n||n.length<1)throw new Error("too few inputs");if(e.axes.length!==0){if(e.axes.length!==e.starts.length||e.axes.length!==e.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(e.starts.length!==e.ends.length)throw new Error("starts and ends must have the same length");n.slice(1).forEach((r,t)=>{if(n[t+1].dataType!==6&&n[t+1].dataType!==7)throw new Error(`Input ${t} must be an array of int32 or int64`)})},as=(n,e)=>{let r=[];if(n.length>e)if(n[e].dataType===7)n[e].getBigInt64Array().forEach(t=>r.push(Number(t)));else if(n[e].dataType===6)n[e].getInt32Array().forEach(t=>r.push(Number(t)));else throw new Error(`Input ${e} must be an array of int32 or int64`);return r},uz=(n,e)=>{if(n.length>1){let r=as(n,1),t=as(n,2),o=as(n,3);return o.length===0&&(o=[...Array(n[0].dims.length).keys()]),we({starts:r,ends:t,axes:o})}else return e},m2=(n,e,r,t,o)=>{let i=n;return n<0&&(i+=r[t[e]]),o[e]<0?Math.max(0,Math.min(i,r[t[e]]-1)):Math.max(0,Math.min(i,r[t[e]]))},lz=(n,e,r)=>`fn calculateInputIndices(output_indices: ${e.type.indices}) -> ${n.type.indices} {
          var input_indices: ${n.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${ue("uniforms.input_shape","i",r.length)};
            let steps_i = ${ue("uniforms.steps","i",r.length)};
            let signs_i = ${ue("uniforms.signs","i",r.length)};
            let starts_i = ${ue("uniforms.starts","i",r.length)};
            var output_index = ${e.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${n.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,cz=(n,e)=>{let r=n[0].dims,t=j.size(r),o=e.axes.length>0?j.normalizeAxes(e.axes,r.length):[...Array(r.length).keys()],i=as(n,4);i.forEach($=>$!==0||(()=>{throw new Error("step cannot be 0")})),i.length===0&&(i=Array(o.length).fill(1));let a=e.starts.map(($,A)=>m2($,A,r,o,i)),u=e.ends.map(($,A)=>m2($,A,r,o,i));if(o.length!==a.length||o.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(o.length!==r.length)for(let $=0;$<r.length;++$)o.includes($)||(a.splice($,0,0),u.splice($,0,r[$]),i.splice($,0,1));let c=i.map($=>Math.sign($));i.forEach(($,A,C)=>{if($<0){let k=(u[A]-a[A])/$,z=a[A],M=z+k*i[A];a[A]=M,u[A]=z,C[A]=-$}});let p=r.slice(0);o.forEach(($,A)=>{p[$]=Math.ceil((u[$]-a[$])/i[$])});let m={dims:p,dataType:n[0].dataType},b=Z("output",n[0].dataType,p.length),_=H("input",n[0].dataType,n[0].dims.length),x=j.size(p),T=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:c.length},{name:"steps",type:"u32",length:i.length}],I=[{type:12,data:x},{type:12,data:a},{type:6,data:c},{type:12,data:i},...Q(n[0].dims,p)],P=$=>`
      ${$.registerUniforms(T).declareVariables(_,b)}
        ${lz(_,b,r)}
        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${b.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${b.setByOffset("global_idx",_.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${c.length}_${a.length}_${i.length}`,inputDependencies:["rank"]},getShaderSource:P,getRunData:()=>({outputs:[m],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:I})}},g2=(n,e)=>{sz(n.inputs,e);let r=uz(n.inputs,e);n.compute(cz(n.inputs,r),{inputs:[0]})},y2=n=>{let e=n.starts,r=n.ends,t=n.axes;return we({starts:e,ends:r,axes:t})}});var dz,fz,_2,v2,w2=W(()=>{"use strict";ve();Se();it();sn();Ae();dz=n=>{if(!n||n.length!==1)throw new Error("Softmax op requires 1 input.")},fz=(n,e)=>{let r=n.inputs[0],t=r.dims,o=j.size(t),i=t.length,a=j.normalizeAxis(e.axis,i),u=a<t.length-1,c,p=[];u?(p=Array.from({length:i},(q,X)=>X),p[a]=i-1,p[i-1]=a,c=n.compute(yt(r,p),{inputs:[r],outputs:[-1]})[0]):c=r;let m=c.dims,b=m[i-1],_=o/b,x=ze(b),T=b/x,I=64;_===1&&(I=256);let P=(q,X)=>X===4?`max(max(${q}.x, ${q}.y), max(${q}.z, ${q}.w))`:X===2?`max(${q}.x, ${q}.y)`:X===3?`max(max(${q}.x, ${q}.y), ${q}.z)`:q,$=H("x",c.dataType,c.dims,x),A=Z("result",c.dataType,c.dims,x),C=$.type.value,k=Xe(c.dataType)==="f32"?`var threadMax = ${C}(-3.402823e+38f);`:`var threadMax = ${C}(-65504.0h);`,z=q=>`
      var<workgroup> rowMaxShared : ${C};
      var<workgroup> rowSumShared : ${C};
      var<workgroup> threadShared : array<${C}, ${I}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${C} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${C}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${q.registerUniform("packedCols","i32").declareVariables($,A)}
      ${q.mainStart(I)}
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
          rowMaxShared = ${C}(${P("threadShared[0]",x)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${C}(0.0);
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
          rowSumShared = ${C}(${or("threadShared[0]",x)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,M=n.compute({name:"Softmax",shaderCache:{hint:`${x};${I}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:m,dataType:c.dataType}],dispatchGroup:{x:_},programUniforms:[{type:6,data:T}]}),getShaderSource:z},{inputs:[c],outputs:[u?-1:0]})[0];u&&n.compute(yt(M,p),{inputs:[M]})},_2=(n,e)=>{dz(n.inputs),fz(n,e)},v2=n=>we({axis:n.axis})});var x2,pz,hz,mz,T2,I2=W(()=>{"use strict";ve();Se();Ae();x2=n=>Array.from(n.getBigInt64Array(),Number),pz=n=>{if(!n||n.length!==2)throw new Error("Tile requires 2 inputs.");if(n[0].dataType!==1&&n[0].dataType!==10&&n[0].dataType!==6&&n[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(n[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(n[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(x2(n[1]).length!==n[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},hz=(n,e)=>{let r=[];for(let t=0;t<n.length;++t)r.push(n[t]*e[t]);return r},mz=(n,e)=>{let r=n[0].dims,t=e??x2(n[1]),o=hz(r,t),i=j.size(o),a=n[0].dataType,u=H("input",a,r.length),c=Z("output",a,o.length),p=m=>`
      const inputShape = ${u.indices(...r)};
      ${m.registerUniform("output_size","u32").declareVariables(u,c)}
      ${m.mainStart()}
      ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${c.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${c.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${c.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:o,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},...Q(n[0].dims,o)]}),getShaderSource:p}},T2=n=>{pz(n.inputs),n.compute(mz(n.inputs),{inputs:[0]})}});var gz,yz,S2,$2=W(()=>{"use strict";ve();Se();Ae();gz=(n,e,r,t,o)=>{let i=Z("output_data",o,r.length,4),a=H("a_data",e[1].dataType,e[1].dims.length,4),u=H("b_data",e[2].dataType,e[2].dims.length,4),c=H("c_data",e[0].dataType,e[0].dims.length,4),p,m=(b,_,x)=>`select(${_}, ${b}, ${x})`;if(!t)p=i.setByOffset("global_idx",m(a.getByOffset("global_idx"),u.getByOffset("global_idx"),c.getByOffset("global_idx")));else{let b=(_,x,T="")=>{let I=`a_data[index_a${x}][component_a${x}]`,P=`b_data[index_b${x}][component_b${x}]`,$=`bool(c_data[index_c${x}] & (0xffu << (component_c${x} * 8)))`;return`
            let output_indices${x} = ${i.offsetToIndices(`global_idx * 4u + ${x}u`)};
            let offset_a${x} = ${a.broadcastedIndicesToOffset(`output_indices${x}`,i)};
            let offset_b${x} = ${u.broadcastedIndicesToOffset(`output_indices${x}`,i)};
            let offset_c${x} = ${c.broadcastedIndicesToOffset(`output_indices${x}`,i)};
            let index_a${x} = offset_a${x} / 4u;
            let index_b${x} = offset_b${x} / 4u;
            let index_c${x} = offset_c${x} / 4u;
            let component_a${x} = offset_a${x} % 4u;
            let component_b${x} = offset_b${x} % 4u;
            let component_c${x} = offset_c${x} % 4u;
            ${_}[${x}] = ${T}(${m(I,P,$)});
          `};o===9?p=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:p=`
            ${b("output_data[global_idx]",0)}
            ${b("output_data[global_idx]",1)}
            ${b("output_data[global_idx]",2)}
            ${b("output_data[global_idx]",3)}
          `}return`
        ${n.registerUniform("vec_size","u32").declareVariables(c,a,u,i)}
        ${n.mainStart()}
        ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${p}
      }`},yz=n=>{let e=n[1].dims,r=n[2].dims,t=n[0].dims,o=n[1].dataType,i=!(j.areEqual(e,r)&&j.areEqual(r,t)),a=e,u=j.size(e);if(i){let p=Xr.calcShape(Xr.calcShape(e,r,!1),t,!1);if(!p)throw new Error("Can't perform where op on the given tensors");a=p,u=j.size(a)}let c=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:p=>gz(p,n,a,i,o),getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:c},...Q(t,e,r,a)]})}},S2=n=>{n.compute(yz(n.inputs))}});var A2,P2=W(()=>{"use strict";sx();Xa();cx();fx();Zx();uT();dT();AT();NT();zT();FT();WT();KT();YT();QT();r1();i1();u1();d1();h1();x1();S1();A1();O1();D1();Wc();N1();Z1();e2();r2();i2();qa();c2();f2();h2();b2();w2();qc();I2();sn();Za();$2();A2=new Map([["Abs",[px]],["Acos",[hx]],["Acosh",[mx]],["Add",[Jx]],["ArgMax",[ax,Dc]],["ArgMin",[ix,Dc]],["Asin",[gx]],["Asinh",[yx]],["Atan",[bx]],["Atanh",[_x]],["Attention",[ux]],["AveragePool",[G1,V1]],["BatchNormalization",[lx]],["BiasAdd",[dx]],["BiasSplitGelu",[Yx]],["Cast",[wx,vx]],["Ceil",[Tx]],["Clip",[xx]],["Concat",[lT,cT]],["Conv",[Vc,Fc]],["ConvTranspose",[kT,ET]],["Cos",[Ix]],["Cosh",[Sx]],["CumSum",[LT,RT]],["DepthToSpace",[MT,BT]],["DequantizeLinear",[J1,Q1]],["Div",[Qx]],["Einsum",[UT,jT]],["Elu",[$x,Zo]],["Equal",[eT]],["Erf",[Ax]],["Exp",[Px]],["Expand",[qT]],["FastGelu",[XT]],["Floor",[Ox]],["FusedConv",[Vc,Fc]],["Gather",[JT,ZT]],["GatherElements",[s1,a1]],["GatherBlockQuantized",[n1,o1]],["GatherND",[e1,t1]],["Gelu",[Cx]],["Gemm",[c1,l1]],["GlobalAveragePool",[W1,j1]],["GlobalMaxPool",[Y1,X1]],["Greater",[oT]],["GreaterOrEqual",[aT]],["GridSample",[f1,p1]],["GroupQueryAttention",[w1]],["HardSigmoid",[Mx,zx]],["InstanceNormalization",[I1]],["LayerNormalization",[$1]],["LeakyRelu",[Ex,Zo]],["Less",[iT]],["LessOrEqual",[sT]],["Log",[qx]],["MatMul",[P1]],["MatMulNBits",[C1,E1]],["MaxPool",[q1,K1]],["Mul",[tT]],["MultiHeadAttention",[y1,g1]],["Neg",[kx]],["Not",[Dx]],["Pad",[k1]],["Pow",[rT]],["QuickGelu",[Kx,Zo]],["Range",[t2]],["Reciprocal",[Nx]],["ReduceMin",[Qw]],["ReduceMean",[Kw]],["ReduceMax",[Jw]],["ReduceSum",[tx]],["ReduceProd",[ex]],["ReduceL1",[Xw]],["ReduceL2",[Yw]],["ReduceLogSum",[nx]],["ReduceLogSumExp",[Zw]],["ReduceSumSquare",[rx]],["Relu",[Lx]],["Resize",[u2,l2]],["RotaryEmbedding",[d2]],["ScatterND",[o2,n2]],["Sigmoid",[Rx]],["Sin",[Bx]],["Sinh",[Fx]],["Slice",[g2,y2]],["SkipLayerNormalization",[p2]],["Split",[b1,_1]],["Sqrt",[Vx]],["Softmax",[_2,v2]],["Sub",[nT]],["Tan",[Gx]],["Tanh",[jx]],["ThresholdedRelu",[Hx,Zo]],["Tile",[T2]],["Transpose",[Lw,Rw]],["Where",[S2]]])});var ss,O2=W(()=>{"use strict";xt();Kr();Ae();ss=class{constructor(e){this.backend=e;this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,r){this.repo.set(e,r)}run(e,r,t,o,i){Rt(e.programInfo.name);let a=this.backend.device,u=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let c=[];for(let m of r)c.push({binding:c.length,resource:{buffer:m.buffer}});for(let m of t)c.push({binding:c.length,resource:{buffer:m.buffer}});i&&c.push({binding:c.length,resource:i});let p=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:c,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let m={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:p,dispatchGroup:o};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(m)}u.setPipeline(e.computePipeline),u.setBindGroup(0,p),u.dispatchWorkgroups(...o),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),At(e.programInfo.name)}dispose(){}build(e,r){Rt(e.name);let t=this.backend.device,o=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(b=>{t.features.has(b.feature)&&o.push(`enable ${b.extension};`)});let a=kw(r,this.backend.device.limits),u=e.getShaderSource(a),c=`${o.join(`
`)}
${a.additionalImplementations}
${u}`,p=t.createShaderModule({code:c,label:e.name});Oe("verbose",()=>`[WebGPU] ${e.name} shader code: ${c}`);let m=t.createComputePipeline({compute:{module:p,entryPoint:"main"},layout:"auto",label:e.name});return At(e.name),{programInfo:e,computePipeline:m,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let r=typeof e=="number"?e:e.x,t=typeof e=="number"?1:e.y||1,o=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(r<=i&&t<=i&&o<=i)return[r,t,o];let a=r*t*o,u=Math.ceil(Math.sqrt(a));if(u>i){if(u=Math.ceil(Math.cbrt(a)),u>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[u,u,u]}else return[u,u,1]}}});var C2={};On(C2,{WebGpuBackend:()=>Xc});var bz,_z,Kc,Xc,E2=W(()=>{"use strict";xt();ve();Kr();vc();Ew();P2();O2();bz=(n,e)=>{if(e.length!==n.length)throw new Error(`inputDependencies length ${e.length} is not equal to inputTensors length ${n.length}.`);let r=[];for(let t=0;t<n.length;++t){let o=n[t].dataType;switch(e[t]){case"none":{r.push("");break}case"type":{r.push(`${o}`);break}case"rank":{let i=n[t].dims.length;r.push(`${o};${i}`);break}case"dims":{let i=n[t].dims.join(",");r.push(`${o};${i}`);break}default:throw new Error(`unsupported input dependency: ${e[t]}`)}}return r.join("|")},_z=(n,e,r)=>{let t=n.name;return n.shaderCache?.hint&&(t+="["+n.shaderCache.hint+"]"),t+=":"+r+`:${bz(e,n.shaderCache?.inputDependencies??new Array(e.length).fill("dims"))}`,t},Kc=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Xc=class{constructor(){this.currentSessionId=null;this.currentKernelId=null;this.commandEncoder=null;this.computePassEncoder=null;this.maxDispatchNumber=16;this.pendingDispatchNumber=0;this.pendingKernels=[];this.pendingQueries=new Map;this.sessionStatus="default";this.capturedCommandList=new Map;this.capturedPendingKernels=new Map;this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,r){this.env=e;let t=[],o={requiredLimits:{maxComputeWorkgroupStorageSize:r.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:r.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:r.limits.maxStorageBufferBindingSize,maxBufferSize:r.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:r.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:r.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:r.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:r.limits.maxComputeWorkgroupSizeZ},requiredFeatures:t},i=a=>r.features.has(a)&&t.push(a)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups"),this.device=await r.requestDevice(o),this.adapterInfo=new Kc(r.info||await r.requestAdapterInfo()),this.gpuDataManager=Cw(this),this.programManager=new ss(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ma(e.logLevel,!!e.debug),this.device.onuncapturederror=a=>{a.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${a.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:r,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),r={};this.queryType==="at-passes"&&(r.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(r)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Rt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let r=new BigUint64Array(e.getMappedRange()),t=this.pendingQueries.get(e);for(let o=0;o<r.length/2;o++){let i=t[o],a=i.kernelId,u=this.kernels.get(a),c=u.kernelType,p=u.kernelName,m=i.programName,b=i.inputTensorViews,_=i.outputTensorViews,x=r[o*2],T=r[o*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=x);let I=Number(x-this.queryTimeBase),P=Number(T-this.queryTimeBase);if(!Number.isSafeInteger(I)||!Number.isSafeInteger(P))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:b.map($=>({dims:$.dims,dataType:In($.dataType)})),outputsMetadata:_.map($=>({dims:$.dims,dataType:In($.dataType)})),kernelId:a,kernelType:c,kernelName:p,programName:m,startTime:I,endTime:P});else{let $="";b.forEach((C,k)=>{$+=`input[${k}]: [${C.dims}] | ${In(C.dataType)}, `});let A="";_.forEach((C,k)=>{A+=`output[${k}]: [${C.dims}] | ${In(C.dataType)}, `}),console.log(`[profiling] kernel "${a}|${c}|${p}|${m}" ${$}${A}execution time: ${P-I} ns`)}_i("GPU",`${m}::${x}::${T}`)}e.unmap(),this.pendingQueries.delete(e)}),At()}run(e,r,t,o,i,a){Rt(e.name);let u=[];for(let C=0;C<r.length;++C){let k=r[C].data;if(k===0)continue;let z=this.gpuDataManager.get(k);if(!z)throw new Error(`no GPU data for input: ${k}`);u.push(z)}let{outputs:c,dispatchGroup:p,programUniforms:m}=e.getRunData(r),b=t.length===0?c.map((C,k)=>k):t;if(b.length!==c.length)throw new Error(`Output size ${b.length} must be equal to ${c.length}.`);let _=[],x=[];for(let C=0;C<c.length;++C){if(!Number.isInteger(b[C])||b[C]<-3||b[C]>=a)throw new Error(`Invalid output index: ${b[C]}`);if(b[C]===-3)continue;let k=b[C]===-1,z=b[C]===-2,M=k||z?i(c[C].dataType,c[C].dims):o(b[C],c[C].dataType,c[C].dims);if(_.push(M),M.data===0)continue;let q=this.gpuDataManager.get(M.data);if(!q)throw new Error(`no GPU data for output: ${M.data}`);if(k&&this.temporaryData.push(q),z){let X=this.kernelPersistentData.get(this.currentKernelId);X||(X=[],this.kernelPersistentData.set(this.currentKernelId,X)),X.push(q)}x.push(q)}if(u.length!==r.length||x.length!==_.length){if(x.length===0)return At(e.name),_;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let T;if(m){let C=0,k=[];m.forEach(X=>{let J=typeof X.data=="number"?[X.data]:X.data;if(J.length===0)return;let ie=X.type===10?2:4,le,me;X.type===10?(me=J.length>4?16:J.length>2?8:J.length*ie,le=J.length>4?16:ie*J.length):(me=J.length<=2?J.length*ie:16,le=16),C=Math.ceil(C/me)*me,k.push(C);let ne=X.type===10?8:4;C+=J.length>4?Math.ceil(J.length/ne)*le:J.length*ie});let z=16;C=Math.ceil(C/z)*z;let M=new ArrayBuffer(C);m.forEach((X,J)=>{let ie=k[J],le=typeof X.data=="number"?[X.data]:X.data;if(X.type===6)new Int32Array(M,ie,le.length).set(le);else if(X.type===12)new Uint32Array(M,ie,le.length).set(le);else if(X.type===10)new Uint16Array(M,ie,le.length).set(le);else if(X.type===1)new Float32Array(M,ie,le.length).set(le);else throw new Error(`Unsupported uniform type: ${In(X.type)}`)});let q=this.gpuDataManager.create(C,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(q.buffer,0,M,0,C),this.gpuDataManager.release(q.id),T={offset:0,size:C,buffer:q.buffer}}let I=this.programManager.normalizeDispatchGroupSize(p),P=I[1]===1&&I[2]===1,$=_z(e,r,P),A=this.programManager.getArtifact($);if(A||(A=this.programManager.build(e,I),this.programManager.setArtifact($,A),Oe("info",()=>`[artifact] key: ${$}, programName: ${e.name}`)),m&&A.uniformVariablesInfo){if(m.length!==A.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${A.uniformVariablesInfo.length}, got ${m.length} in program "${A.programInfo.name}".`);for(let C=0;C<m.length;C++){let k=m[C],z=k.type,M=typeof k.data=="number"?1:k.data.length,[q,X]=A.uniformVariablesInfo[C];if(z!==q||M!==X)throw new Error(`Uniform variable ${C} mismatch: expect type ${q} with size ${X}, got type ${z} with size ${M} in program "${A.programInfo.name}".`)}}if(Oe("info",()=>`[ProgramManager] run "${e.name}" (key=${$}) with ${I[0]}x${I[1]}x${I[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let C={kernelId:this.currentKernelId,programName:A.programInfo.name,inputTensorViews:r,outputTensorViews:_};this.pendingKernels.push(C),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(C)}return this.programManager.run(A,u,x,I,T),At(e.name),_}upload(e,r){this.gpuDataManager.upload(e,r)}memcpy(e,r){this.gpuDataManager.memcpy(e,r)}async download(e,r){await this.gpuDataManager.download(e,r)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,r,t,o){let i=A2.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:o,kernelEntry:i[0],attributes:[i[1],t]};this.kernels.set(r,a)}releaseKernel(e){let r=this.kernelPersistentData.get(e);if(r){for(let t of r)this.gpuDataManager.release(t.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,r,t){let o=this.kernels.get(e);if(!o)throw new Error(`kernel not created: ${e}`);let i=o.kernelType,a=o.kernelName,u=o.kernelEntry,c=o.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,c[0]&&(c[1]=c[0](c[1]),c[0]=void 0),Oe("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let p=this.env.debug;this.temporaryData=[];try{return p&&this.device.pushErrorScope("validation"),u(r,c[1]),0}catch(m){return t.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${m}`)),1}finally{p&&t.push(this.device.popErrorScope().then(m=>m?`GPU validation error for kernel "[${i}] ${a}": ${m.message}`:null));for(let m of this.temporaryData)this.gpuDataManager.release(m.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,r,t,o){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(r),u=this.gpuDataManager.registerExternalBuffer(t,o,a);return i.set(r,[u,t]),u}unregisterBuffers(e){let r=this.sessionExternalDataMapping.get(e);r&&(r.forEach(t=>this.gpuDataManager.unregisterExternalBuffer(t[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let r=this.gpuDataManager.get(e);if(!r)throw new Error(`no GPU data for buffer: ${e}`);return r.buffer}createDownloader(e,r,t){return async()=>{let o=await $c(this,e,r);return Fa(o.buffer,t)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Oe("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Oe("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Oe("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),r=this.capturedPendingKernels.get(this.currentSessionId),t=e.length;this.pendingKernels=[];for(let o=0;o<t;o++){let i=this.getComputePassEncoder(),a=e[o];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(r[o]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}});var D2={};On(D2,{init:()=>vz});var ti,Yc,vz,k2=W(()=>{"use strict";ve();Kr();Se();$w();ti=class n{constructor(e,r,t,o){this.module=e;this.dataType=r;this.data=t;this.dims=o}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let e=j.size(this.dims);return e===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,e)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let e=j.size(this.dims);return e===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,e)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let e=j.size(this.dims);return e===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,e)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let e=j.size(this.dims);return e===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,e)}reshape(e){if(j.size(e)!==j.size(this.dims))throw new Error("Invalid new shape");return new n(this.module,this.dataType,this.data,e)}},Yc=class{constructor(e,r,t){this.module=e;this.backend=r;this.customDataOffset=0;this.customDataSize=0;this.adapterInfo=r.adapterInfo;let o=e.PTR_SIZE,i=t/e.PTR_SIZE,a=o===4?"i32":"i64";this.opKernelContext=Number(e.getValue(o*i++,a));let u=Number(e.getValue(o*i++,a));this.outputCount=Number(e.getValue(o*i++,a)),this.customDataOffset=Number(e.getValue(o*i++,"*")),this.customDataSize=Number(e.getValue(o*i++,a));let c=[];for(let p=0;p<u;p++){let m=Number(e.getValue(o*i++,a)),b=Number(e.getValue(o*i++,"*")),_=Number(e.getValue(o*i++,a)),x=[];for(let T=0;T<_;T++)x.push(Number(e.getValue(o*i++,a)));c.push(new ti(e,m,b,x))}this.inputs=c}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,r){let t=r?.inputs?.map(u=>typeof u=="number"?this.inputs[u]:u)??this.inputs,o=r?.outputs??[],i=(u,c,p)=>new ti(this.module,c,this.output(u,p),p),a=(u,c)=>{let p=Sn(u,c);if(!p)throw new Error(`Unsupported data type: ${u}`);let m=p>0?this.backend.gpuDataManager.create(p).id:0;return new ti(this.module,u,m,c)};return this.backend.run(e,t,o,i,a,this.outputCount)}output(e,r){let t=this.module.stackSave();try{let o=this.module.PTR_SIZE,i=o===4?"i32":"i64",a=this.module.stackAlloc((1+r.length)*o);this.module.setValue(a,r.length,i);for(let u=0;u<r.length;u++)this.module.setValue(a+o*(u+1),r[u],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(o){throw new Error(`Failed to generate kernel's output[${e}] with dims [${r}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${o}`)}finally{this.module.stackRestore(t)}}},vz=async(n,e,r,t)=>{let o=e.jsepInit;if(!o)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(n==="webgpu"){let i=(E2(),ro(C2)).WebGpuBackend,a=new i;await a.initialize(r,t),o("webgpu",[a,u=>a.alloc(Number(u)),u=>a.free(u),(u,c,p,m=!1)=>{if(m)Oe("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(u)}, dst=${Number(c)}, size=${Number(p)}`),a.memcpy(Number(u),Number(c));else{Oe("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(u)}, gpuDataId=${Number(c)}, size=${Number(p)}`);let b=e.HEAPU8.subarray(Number(u>>>0),Number(u>>>0)+Number(p));a.upload(Number(c),b)}},async(u,c,p)=>{Oe("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${c}, size=${p}`),await a.download(Number(u),()=>e.HEAPU8.subarray(Number(c)>>>0,Number(c+p)>>>0))},(u,c,p)=>a.createKernel(u,Number(c),p,e.UTF8ToString(e._JsepGetNodeName(Number(c)))),u=>a.releaseKernel(u),(u,c,p,m)=>{Oe("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${p}, kernel=${u}, contextDataOffset=${c}`);let b=new Yc(e,a,Number(c));return a.computeKernel(Number(u),b,m)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let i=new Ua(r);o("webnn",[i,()=>i.reserveTensorId(),a=>i.releaseTensorId(a),async(a,u,c,p,m)=>i.ensureTensor(a,u,c,p,m),(a,u)=>{i.uploadTensor(a,u)},async(a,u)=>i.downloadTensor(a,u)])}}});var wz,Sa,$a,Xn,xz,qo,Aa,Pa,N2,Oa,Ca,Ea,dc=W(()=>{"use strict";mw();yw();ve();Tn();ka();bc();wz=(n,e)=>{Ke()._OrtInit(n,e)!==0&&We("Can't initialize onnxruntime.")},Sa=async n=>{wz(n.wasm.numThreads,Xo(n.logLevel))},$a=async(n,e)=>{Ke().asyncInit?.();{let r=(k2(),ro(D2)).init;if(e==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let t=n.webgpu.adapter;if(t){if(typeof t.limits!="object"||typeof t.features!="object"||typeof t.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let o=n.webgpu.powerPreference;if(o!==void 0&&o!=="low-power"&&o!=="high-performance")throw new Error(`Invalid powerPreference setting: "${o}"`);let i=n.webgpu.forceFallbackAdapter;if(i!==void 0&&typeof i!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${i}"`);if(t=await navigator.gpu.requestAdapter({powerPreference:o,forceFallbackAdapter:i}),!t)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",Ke(),n,t)}if(e==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",Ke(),n)}}},Xn=new Map,xz=n=>{let e=Ke(),r=e.stackSave();try{let t=e.PTR_SIZE,o=e.stackAlloc(2*t);e._OrtGetInputOutputCount(n,o,o+t)!==0&&We("Can't get session input/output count.");let a=t===4?"i32":"i64";return[Number(e.getValue(o,a)),Number(e.getValue(o+t,a))]}finally{e.stackRestore(r)}},qo=n=>{let e=Ke(),r=e._malloc(n.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${n.byteLength}.`);return e.HEAPU8.set(n,r),[r,n.byteLength]},Aa=async(n,e)=>{let r,t,o=Ke();Array.isArray(n)?[r,t]=n:n.buffer===o.HEAPU8.buffer?[r,t]=[n.byteOffset,n.byteLength]:[r,t]=qo(n);let i=0,a=0,u=0,c=[],p=[],m=[];try{if([a,c]=await gw(e),e?.externalData&&o.mountExternalData){let A=[];for(let C of e.externalData){let k=typeof C=="string"?C:C.path;A.push(Yo(typeof C=="string"?C:C.data).then(z=>{o.mountExternalData(k,z)}))}await Promise.all(A)}for(let A of e?.executionProviders??[])if((typeof A=="string"?A:A.name)==="webnn"){if(o.shouldTransferToMLTensor=!1,typeof A!="string"){let k=A,z=k?.context,M=k?.gpuDevice,q=k?.deviceType,X=k?.powerPreference;z?o.currentContext=z:M?o.currentContext=await o.jsepCreateMLContext(M):o.currentContext=await o.jsepCreateMLContext({deviceType:q,powerPreference:X})}else o.currentContext=await o.jsepCreateMLContext();break}i=await o._OrtCreateSession(r,t,a),o.webgpuOnCreateSession?.(i),i===0&&We("Can't create a session."),o.jsepOnCreateSession?.(),o.currentContext&&(o.jsepRegisterMLContext(i,o.currentContext),o.currentContext=void 0,o.shouldTransferToMLTensor=!0);let[b,_]=xz(i),x=!!e?.enableGraphCapture,T=[],I=[],P=[];for(let A=0;A<b;A++){let C=o._OrtGetInputName(i,A);C===0&&We("Can't get an input name."),p.push(C),T.push(o.UTF8ToString(C))}for(let A=0;A<_;A++){let C=o._OrtGetOutputName(i,A);C===0&&We("Can't get an output name."),m.push(C);let k=o.UTF8ToString(C);I.push(k);{if(x&&e?.preferredOutputLocation===void 0){P.push("gpu-buffer");continue}let z=typeof e?.preferredOutputLocation=="string"?e.preferredOutputLocation:e?.preferredOutputLocation?.[k]??"cpu";if(z!=="cpu"&&z!=="cpu-pinned"&&z!=="gpu-buffer"&&z!=="ml-tensor")throw new Error(`Not supported preferred output location: ${z}.`);if(x&&z!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${z}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);P.push(z)}}let $=null;return P.some(A=>A==="gpu-buffer"||A==="ml-tensor")&&(u=o._OrtCreateBinding(i),u===0&&We("Can't create IO binding."),$={handle:u,outputPreferredLocations:P,outputPreferredLocationsEncoded:P.map(A=>yc(A))}),Xn.set(i,[i,p,m,$,x,!1]),[i,T,I]}catch(b){throw p.forEach(_=>o._OrtFree(_)),m.forEach(_=>o._OrtFree(_)),u!==0&&o._OrtReleaseBinding(u)!==0&&We("Can't release IO binding."),i!==0&&o._OrtReleaseSession(i)!==0&&We("Can't release session."),b}finally{o._free(r),a!==0&&o._OrtReleaseSessionOptions(a)!==0&&We("Can't release session options."),c.forEach(b=>o._free(b)),o.unmountExternalData?.()}},Pa=n=>{let e=Ke(),r=Xn.get(n);if(!r)throw new Error(`cannot release session. invalid session id: ${n}`);let[t,o,i,a,u]=r;a&&(u&&e._OrtClearBoundOutputs(a.handle)!==0&&We("Can't clear bound outputs."),e._OrtReleaseBinding(a.handle)!==0&&We("Can't release IO binding.")),e.jsepOnReleaseSession?.(n),e.webgpuOnReleaseSession?.(n),o.forEach(c=>e._OrtFree(c)),i.forEach(c=>e._OrtFree(c)),e._OrtReleaseSession(t)!==0&&We("Can't release session."),Xn.delete(n)},N2=async(n,e,r,t,o,i=!1)=>{if(!n){e.push(0);return}let a=Ke(),u=a.PTR_SIZE,c=n[0],p=n[1],m=n[3],b=m,_,x;if(c==="string"&&(m==="gpu-buffer"||m==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(i&&m!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${o} when enableGraphCapture is true.`);if(m==="gpu-buffer"){let P=n[2].gpuBuffer;x=Sn(go(c),p);{let $=a.jsepRegisterBuffer;if(!$)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');_=$(t,o,P,x)}}else if(m==="ml-tensor"){let P=n[2].mlTensor;x=Sn(go(c),p);let $=a.jsepRegisterMLTensor;if(!$)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');_=$(t,P,go(c),p)}else{let P=n[2];if(Array.isArray(P)){x=u*P.length,_=a._malloc(x),r.push(_);for(let $=0;$<P.length;$++){if(typeof P[$]!="string")throw new TypeError(`tensor data at index ${$} is not a string`);a.setValue(_+$*u,Bt(P[$],r),"*")}}else{let $=a.jsepIsGraphInput;if(c!=="string"&&$){let A=a._OrtGetInputName(t,o),C=a.UTF8ToString(A);if($(t,C)){let k=go(c);x=Sn(k,p),b="ml-tensor";let z=a.jsepCreateTemporaryTensor,M=a.jsepUploadTensor;if(!z||!M)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let q=await z(t,k,p);M(q,new Uint8Array(P.buffer,P.byteOffset,P.byteLength)),_=q}else x=P.byteLength,_=a._malloc(x),r.push(_),a.HEAPU8.set(new Uint8Array(P.buffer,P.byteOffset,x),_)}else x=P.byteLength,_=a._malloc(x),r.push(_),a.HEAPU8.set(new Uint8Array(P.buffer,P.byteOffset,x),_)}}let T=a.stackSave(),I=a.stackAlloc(4*p.length);try{p.forEach(($,A)=>a.setValue(I+A*u,$,u===4?"i32":"i64"));let P=a._OrtCreateTensor(go(c),_,x,I,p.length,yc(b));P===0&&We(`Can't create tensor for input/output. session=${t}, index=${o}.`),e.push(P)}finally{a.stackRestore(T)}},Oa=async(n,e,r,t,o,i)=>{let a=Ke(),u=a.PTR_SIZE,c=Xn.get(n);if(!c)throw new Error(`cannot run inference. invalid session id: ${n}`);let p=c[0],m=c[1],b=c[2],_=c[3],x=c[4],T=c[5],I=e.length,P=t.length,$=0,A=[],C=[],k=[],z=[],M=a.stackSave(),q=a.stackAlloc(I*u),X=a.stackAlloc(I*u),J=a.stackAlloc(P*u),ie=a.stackAlloc(P*u);try{[$,A]=hw(i);for(let ne=0;ne<I;ne++)await N2(r[ne],C,z,n,e[ne],x);for(let ne=0;ne<P;ne++)await N2(o[ne],k,z,n,I+t[ne],x);for(let ne=0;ne<I;ne++)a.setValue(q+ne*u,C[ne],"*"),a.setValue(X+ne*u,m[e[ne]],"*");for(let ne=0;ne<P;ne++)a.setValue(J+ne*u,k[ne],"*"),a.setValue(ie+ne*u,b[t[ne]],"*");if(_&&!T){let{handle:ne,outputPreferredLocations:he,outputPreferredLocationsEncoded:Ze}=_;if(m.length!==I)throw new Error(`input count from feeds (${I}) is expected to be always equal to model's input count (${m.length}).`);for(let se=0;se<I;se++){let de=e[se];await a._OrtBindInput(ne,m[de],C[se])!==0&&We(`Can't bind input[${se}] for session=${n}.`)}for(let se=0;se<P;se++){let de=t[se];o[se]?.[3]?a._OrtBindOutput(ne,b[de],k[se],0)!==0&&We(`Can't bind pre-allocated output[${se}] for session=${n}.`):a._OrtBindOutput(ne,b[de],0,Ze[de])!==0&&We(`Can't bind output[${se}] to ${he[se]} for session=${n}.`)}Xn.set(n,[p,m,b,_,x,!0])}a.jsepOnRunStart?.(p);let le;_?le=await a._OrtRunWithBinding(p,_.handle,P,J,$):le=await a._OrtRun(p,X,q,I,ie,P,J,$),le!==0&&We("failed to call OrtRun().");let me=[];for(let ne=0;ne<P;ne++){let he=Number(a.getValue(J+ne*u,"*"));if(he===k[ne]){me.push(o[ne]);continue}let Ze=a.stackSave(),se=a.stackAlloc(4*u),de=!1,xe,ye=0;try{a._OrtGetTensorData(he,se,se+u,se+2*u,se+3*u)!==0&&We(`Can't access output tensor data on index ${ne}.`);let He=u===4?"i32":"i64",Ye=Number(a.getValue(se,He));ye=a.getValue(se+u,"*");let Te=a.getValue(se+u*2,"*"),B=Number(a.getValue(se+u*3,He)),re=[];for(let tt=0;tt<B;tt++)re.push(Number(a.getValue(Te+tt*u,He)));a._OrtFree(Te)!==0&&We("Can't free memory for tensor dims.");let Re=re.reduce((tt,at)=>tt*at,1);xe=In(Ye);let It=_?.outputPreferredLocations[t[ne]];if(xe==="string"){if(It==="gpu-buffer"||It==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let tt=[];for(let at=0;at<Re;at++){let ft=a.getValue(ye+at*u,"*"),xo=a.getValue(ye+(at+1)*u,"*"),Zn=at===Re-1?void 0:xo-ft;tt.push(a.UTF8ToString(ft,Zn))}me.push([xe,re,tt,"cpu"])}else if(It==="gpu-buffer"&&Re>0){let tt=a.jsepGetBuffer;if(!tt)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let at=tt(ye),ft=Sn(Ye,Re);if(ft===void 0||!Ra(xe))throw new Error(`Unsupported data type: ${xe}`);de=!0,me.push([xe,re,{gpuBuffer:at,download:a.jsepCreateDownloader(at,ft,xe),dispose:()=>{a._OrtReleaseTensor(he)!==0&&We("Can't release tensor.")}},"gpu-buffer"])}else if(It==="ml-tensor"&&Re>0){let tt=a.jsepEnsureTensor;if(!tt)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Sn(Ye,Re)===void 0||!za(xe))throw new Error(`Unsupported data type: ${xe}`);let ft=await tt(n,ye,Ye,re,!1);de=!0,me.push([xe,re,{mlTensor:ft,download:a.jsepCreateMLTensorDownloader(ye,xe),dispose:()=>{a.jsepReleaseTensorId(ye),a._OrtReleaseTensor(he)}},"ml-tensor"])}else{let tt=La(xe),at=new tt(Re);new Uint8Array(at.buffer,at.byteOffset,at.byteLength).set(a.HEAPU8.subarray(ye,ye+at.byteLength)),me.push([xe,re,at,"cpu"])}}finally{a.stackRestore(Ze),xe==="string"&&ye&&a._free(ye),de||a._OrtReleaseTensor(he),a.jsepOnRunEnd?.(p)}}return _&&!x&&(a._OrtClearBoundOutputs(_.handle)!==0&&We("Can't clear bound outputs."),Xn.set(n,[p,m,b,_,x,!1])),me}finally{a.stackRestore(M),C.forEach(le=>a._OrtReleaseTensor(le)),k.forEach(le=>a._OrtReleaseTensor(le)),z.forEach(le=>a._free(le)),$!==0&&a._OrtReleaseRunOptions($),A.forEach(le=>a._free(le))}},Ca=n=>{let e=Ke(),r=Xn.get(n);if(!r)throw new Error("invalid session id");let t=r[0],o=e._OrtEndProfiling(t);o===0&&We("Can't get an profile file name."),e._OrtFree(o)},Ea=n=>{let e=[];for(let r of n){let t=r[2];!Array.isArray(t)&&"buffer"in t&&e.push(t.buffer)}return e}});var Yn,Yt,ri,ls,cs,us,Zc,Jc,vo,wo,Iz,L2,R2,z2,M2,B2,F2,V2,Qc=W(()=>{"use strict";xt();dc();Tn();Ta();Yn=()=>!!Ie.wasm.proxy&&typeof document<"u",ri=!1,ls=!1,cs=!1,Jc=new Map,vo=(n,e)=>{let r=Jc.get(n);r?r.push(e):Jc.set(n,[e])},wo=()=>{if(ri||!ls||cs||!Yt)throw new Error("worker not ready")},Iz=n=>{switch(n.data.type){case"init-wasm":ri=!1,n.data.err?(cs=!0,Zc[1](n.data.err)):(ls=!0,Zc[0]()),us&&(URL.revokeObjectURL(us),us=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let e=Jc.get(n.data.type);n.data.err?e.shift()[1](n.data.err):e.shift()[0](n.data.out);break}default:}},L2=async()=>{if(!ls){if(ri)throw new Error("multiple calls to 'initWasm()' detected.");if(cs)throw new Error("previous call to 'initWasm()' failed.");if(ri=!0,Yn())return new Promise((n,e)=>{Yt?.terminate(),dw().then(([r,t])=>{try{Yt=t,Yt.onerror=i=>e(i),Yt.onmessage=Iz,Zc=[n,e];let o={type:"init-wasm",in:Ie};!o.in.wasm.wasmPaths&&(r||hc)&&(o.in.wasm.wasmPaths={wasm:new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href}),Yt.postMessage(o),us=r}catch(o){e(o)}},e)});try{await Ia(Ie.wasm),await Sa(Ie),ls=!0}catch(n){throw cs=!0,n}finally{ri=!1}}},R2=async n=>{if(Yn())return wo(),new Promise((e,r)=>{vo("init-ep",[e,r]);let t={type:"init-ep",in:{epName:n,env:Ie}};Yt.postMessage(t)});await $a(Ie,n)},z2=async n=>Yn()?(wo(),new Promise((e,r)=>{vo("copy-from",[e,r]);let t={type:"copy-from",in:{buffer:n}};Yt.postMessage(t,[n.buffer])})):qo(n),M2=async(n,e)=>{if(Yn()){if(e?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return wo(),new Promise((r,t)=>{vo("create",[r,t]);let o={type:"create",in:{model:n,options:{...e}}},i=[];n instanceof Uint8Array&&i.push(n.buffer),Yt.postMessage(o,i)})}else return Aa(n,e)},B2=async n=>{if(Yn())return wo(),new Promise((e,r)=>{vo("release",[e,r]);let t={type:"release",in:n};Yt.postMessage(t)});Pa(n)},F2=async(n,e,r,t,o,i)=>{if(Yn()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(o.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return wo(),new Promise((a,u)=>{vo("run",[a,u]);let c=r,p={type:"run",in:{sessionId:n,inputIndices:e,inputs:c,outputIndices:t,options:i}};Yt.postMessage(p,Ea(c))})}else return Oa(n,e,r,t,o,i)},V2=async n=>{if(Yn())return wo(),new Promise((e,r)=>{vo("end-profiling",[e,r]);let t={type:"end-profiling",in:n};Yt.postMessage(t)});Ca(n)}});var G2,Sz,ds,U2=W(()=>{"use strict";xt();Qc();ve();xa();bc();G2=(n,e)=>{switch(n.location){case"cpu":return[n.type,n.dims,n.data,"cpu"];case"gpu-buffer":return[n.type,n.dims,{gpuBuffer:n.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[n.type,n.dims,{mlTensor:n.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${n.location} for ${e()}`)}},Sz=n=>{switch(n[3]){case"cpu":return new Lt(n[0],n[2],n[1]);case"gpu-buffer":{let e=n[0];if(!Ra(e))throw new Error(`not supported data type: ${e} for deserializing GPU tensor`);let{gpuBuffer:r,download:t,dispose:o}=n[2];return Lt.fromGpuBuffer(r,{dataType:e,dims:n[1],download:t,dispose:o})}case"ml-tensor":{let e=n[0];if(!za(e))throw new Error(`not supported data type: ${e} for deserializing MLTensor tensor`);let{mlTensor:r,download:t,dispose:o}=n[2];return Lt.fromMLTensor(r,{dataType:e,dims:n[1],download:t,dispose:o})}default:throw new Error(`invalid data location: ${n[3]}`)}},ds=class{async fetchModelAndCopyToWasmMemory(e){return z2(await Yo(e))}async loadModel(e,r){Rt();let t;typeof e=="string"?t=await this.fetchModelAndCopyToWasmMemory(e):t=e,[this.sessionId,this.inputNames,this.outputNames]=await M2(t,r),At()}async dispose(){return B2(this.sessionId)}async run(e,r,t){Rt();let o=[],i=[];Object.entries(e).forEach(_=>{let x=_[0],T=_[1],I=this.inputNames.indexOf(x);if(I===-1)throw new Error(`invalid input '${x}'`);o.push(T),i.push(I)});let a=[],u=[];Object.entries(r).forEach(_=>{let x=_[0],T=_[1],I=this.outputNames.indexOf(x);if(I===-1)throw new Error(`invalid output '${x}'`);a.push(T),u.push(I)});let c=o.map((_,x)=>G2(_,()=>`input "${this.inputNames[i[x]]}"`)),p=a.map((_,x)=>_?G2(_,()=>`output "${this.outputNames[u[x]]}"`):null),m=await F2(this.sessionId,i,c,u,p,t),b={};for(let _=0;_<m.length;_++)b[this.outputNames[u[_]]]=a[_]??Sz(m[_]);return At(),b}startProfiling(){}endProfiling(){V2(this.sessionId)}}});var W2={};On(W2,{OnnxruntimeWebAssemblyBackend:()=>fs,initializeFlags:()=>j2,wasmBackend:()=>$z});var j2,fs,$z,H2=W(()=>{"use strict";xt();Qc();U2();j2=()=>{if((typeof Ie.wasm.initTimeout!="number"||Ie.wasm.initTimeout<0)&&(Ie.wasm.initTimeout=0),Ie.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof Ie.wasm.proxy!="boolean"&&(Ie.wasm.proxy=!1),typeof Ie.wasm.trace!="boolean"&&(Ie.wasm.trace=!1),typeof Ie.wasm.numThreads!="number"||!Number.isInteger(Ie.wasm.numThreads)||Ie.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Ie.wasm.numThreads=1;else{let n=typeof navigator>"u"?Rs("node:os").cpus().length:navigator.hardwareConcurrency;Ie.wasm.numThreads=Math.min(4,Math.ceil((n||1)/2))}},fs=class{async init(e){j2(),await L2(),await R2(e)}async createInferenceSessionHandler(e,r){let t=new ds;return await t.loadModel(e,r),Promise.resolve(t)}},$z=new fs});xt();xt();xt();var wg="1.22.0";var YZ=Gs;{let n=(Jv(),ro(Zv)).onnxjsBackend;hn("webgl",n,-10)}{let n=(H2(),ro(W2)).wasmBackend;hn("webgpu",n,5),hn("webnn",n,5),hn("cpu",n,10),hn("wasm",n,10)}Object.defineProperty(Ie.versions,"web",{value:wg,enumerable:!0});export{iO as InferenceSession,_i as TRACE,Rt as TRACE_FUNC_BEGIN,At as TRACE_FUNC_END,Lt as Tensor,YZ as default,Ie as env,hn as registerBackend};
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
