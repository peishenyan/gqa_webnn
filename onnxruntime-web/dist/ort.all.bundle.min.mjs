/*!
 * ONNX Runtime Web v1.21.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
var YO=Object.create;var mi=Object.defineProperty;var ZO=Object.getOwnPropertyDescriptor;var JO=Object.getOwnPropertyNames;var QO=Object.getPrototypeOf,eP=Object.prototype.hasOwnProperty;var Ls=(n=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(n,{get:(e,r)=>(typeof require<"u"?require:e)[r]}):n)(function(n){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+n+'" is not supported')});var j=(n,e)=>()=>(n&&(e=n(n=0)),e);var he=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports),eo=(n,e)=>{for(var r in e)mi(n,r,{get:e[r],enumerable:!0})},jm=(n,e,r,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of JO(e))!eP.call(n,o)&&o!==r&&mi(n,o,{get:()=>e[o],enumerable:!(t=ZO(e,o))||t.enumerable});return n};var Pe=(n,e,r)=>(r=n!=null?YO(QO(n)):{},jm(e||!n||!n.__esModule?mi(r,"default",{value:n,enumerable:!0}):r,n)),So=n=>jm(mi({},"__esModule",{value:!0}),n);var gi,Cn,hn,tP,Wm,Rs=j(()=>{"use strict";gi=new Map,Cn=[],hn=(n,e,r)=>{if(e&&typeof e.init=="function"&&typeof e.createInferenceSessionHandler=="function"){let t=gi.get(n);if(t===void 0)gi.set(n,{backend:e,priority:r});else{if(t.priority>r)return;if(t.priority===r&&t.backend!==e)throw new Error(`cannot register backend "${n}" using priority ${r}`)}if(r>=0){let o=Cn.indexOf(n);o!==-1&&Cn.splice(o,1);for(let i=0;i<Cn.length;i++)if(gi.get(Cn[i]).priority<=r){Cn.splice(i,0,n);return}Cn.push(n)}return}throw new TypeError("not a valid backend")},tP=async n=>{let e=gi.get(n);if(!e)return"backend not found.";if(e.initialized)return e.backend;if(e.aborted)return e.error;{let r=!!e.initPromise;try{return r||(e.initPromise=e.backend.init(n)),await e.initPromise,e.initialized=!0,e.backend}catch(t){return r||(e.error=`${t}`,e.aborted=!0),e.error}finally{delete e.initPromise}}},Wm=async n=>{let e=n.executionProviders||[],r=e.map(c=>typeof c=="string"?c:c.name),t=r.length===0?Cn:r,o,i=[],a=new Set;for(let c of t){let f=await tP(c);typeof f=="string"?i.push({name:c,err:f}):(o||(o=f),o===f&&a.add(c))}if(!o)throw new Error(`no available backend found. ERR: ${i.map(c=>`[${c.name}] ${c.err}`).join(", ")}`);for(let{name:c,err:f}of i)r.includes(c)&&console.warn(`removing requested execution provider "${c}" from session options because it is not available: ${f}`);let u=e.filter(c=>a.has(typeof c=="string"?c:c.name));return[o,new Proxy(n,{get:(c,f)=>f==="executionProviders"?u:Reflect.get(c,f)})]}});var Hm=j(()=>{"use strict";Rs()});var qm,Km=j(()=>{"use strict";qm="1.21.0"});var Xm,kt,zs=j(()=>{"use strict";Km();Xm="warning",kt={wasm:{},webgl:{},webgpu:{},versions:{common:qm},set logLevel(n){if(n!==void 0){if(typeof n!="string"||["verbose","info","warning","error","fatal"].indexOf(n)===-1)throw new Error(`Unsupported logging level: ${n}`);Xm=n}},get logLevel(){return Xm}};Object.defineProperty(kt,"logLevel",{enumerable:!0})});var Te,Ym=j(()=>{"use strict";zs();Te=kt});var Zm,Jm,Qm=j(()=>{"use strict";Zm=(n,e)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=n.dims[3],r.height=n.dims[2];let t=r.getContext("2d");if(t!=null){let o,i;e?.tensorLayout!==void 0&&e.tensorLayout==="NHWC"?(o=n.dims[2],i=n.dims[3]):(o=n.dims[3],i=n.dims[2]);let a=e?.format!==void 0?e.format:"RGB",u=e?.norm,c,f;u===void 0||u.mean===void 0?c=[255,255,255,255]:typeof u.mean=="number"?c=[u.mean,u.mean,u.mean,u.mean]:(c=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(c[3]=u.mean[3])),u===void 0||u.bias===void 0?f=[0,0,0,0]:typeof u.bias=="number"?f=[u.bias,u.bias,u.bias,u.bias]:(f=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(f[3]=u.bias[3]));let m=i*o,y=0,_=m,x=m*2,T=-1;a==="RGBA"?(y=0,_=m,x=m*2,T=m*3):a==="RGB"?(y=0,_=m,x=m*2):a==="RBG"&&(y=0,x=m,_=m*2);for(let I=0;I<i;I++)for(let O=0;O<o;O++){let A=(n.data[y++]-f[0])*c[0],$=(n.data[_++]-f[1])*c[1],C=(n.data[x++]-f[2])*c[2],L=T===-1?255:(n.data[T++]-f[3])*c[3];t.fillStyle="rgba("+A+","+$+","+C+","+L+")",t.fillRect(O,I,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Jm=(n,e)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),t;if(r!=null){let o,i,a;e?.tensorLayout!==void 0&&e.tensorLayout==="NHWC"?(o=n.dims[2],i=n.dims[1],a=n.dims[3]):(o=n.dims[3],i=n.dims[2],a=n.dims[1]);let u=e!==void 0&&e.format!==void 0?e.format:"RGB",c=e?.norm,f,m;c===void 0||c.mean===void 0?f=[255,255,255,255]:typeof c.mean=="number"?f=[c.mean,c.mean,c.mean,c.mean]:(f=[c.mean[0],c.mean[1],c.mean[2],255],c.mean[3]!==void 0&&(f[3]=c.mean[3])),c===void 0||c.bias===void 0?m=[0,0,0,0]:typeof c.bias=="number"?m=[c.bias,c.bias,c.bias,c.bias]:(m=[c.bias[0],c.bias[1],c.bias[2],0],c.bias[3]!==void 0&&(m[3]=c.bias[3]));let y=i*o;if(e!==void 0&&(e.format!==void 0&&a===4&&e.format!=="RGBA"||a===3&&e.format!=="RGB"&&e.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let _=4,x=0,T=1,I=2,O=3,A=0,$=y,C=y*2,L=-1;u==="RGBA"?(A=0,$=y,C=y*2,L=y*3):u==="RGB"?(A=0,$=y,C=y*2):u==="RBG"&&(A=0,C=y,$=y*2),t=r.createImageData(o,i);for(let R=0;R<i*o;x+=_,T+=_,I+=_,O+=_,R++)t.data[x]=(n.data[A++]-m[0])*f[0],t.data[T]=(n.data[$++]-m[1])*f[1],t.data[I]=(n.data[C++]-m[2])*f[2],t.data[O]=L===-1?255:(n.data[L++]-m[3])*f[3]}else throw new Error("Can not access image data");return t}});var Ms,eg,tg,rg,ng,og,ig=j(()=>{"use strict";yi();Ms=(n,e)=>{if(n===void 0)throw new Error("Image buffer must be defined");if(e.height===void 0||e.width===void 0)throw new Error("Image height and width must be defined");if(e.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:t}=e,o=e.norm??{mean:255,bias:0},i,a;typeof o.mean=="number"?i=[o.mean,o.mean,o.mean,o.mean]:i=[o.mean[0],o.mean[1],o.mean[2],o.mean[3]??255],typeof o.bias=="number"?a=[o.bias,o.bias,o.bias,o.bias]:a=[o.bias[0],o.bias[1],o.bias[2],o.bias[3]??0];let u=e.format!==void 0?e.format:"RGBA",c=e.tensorFormat!==void 0&&e.tensorFormat!==void 0?e.tensorFormat:"RGB",f=r*t,m=c==="RGBA"?new Float32Array(f*4):new Float32Array(f*3),y=4,_=0,x=1,T=2,I=3,O=0,A=f,$=f*2,C=-1;u==="RGB"&&(y=3,_=0,x=1,T=2,I=-1),c==="RGBA"?C=f*3:c==="RBG"?(O=0,$=f,A=f*2):c==="BGR"&&($=0,A=f,O=f*2);for(let R=0;R<f;R++,_+=y,T+=y,x+=y,I+=y)m[O++]=(n[_]+a[0])/i[0],m[A++]=(n[x]+a[1])/i[1],m[$++]=(n[T]+a[2])/i[2],C!==-1&&I!==-1&&(m[C++]=(n[I]+a[3])/i[3]);return c==="RGBA"?new vt("float32",m,[1,4,r,t]):new vt("float32",m,[1,3,r,t])},eg=async(n,e)=>{let r=typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement,t=typeof ImageData<"u"&&n instanceof ImageData,o=typeof ImageBitmap<"u"&&n instanceof ImageBitmap,i=typeof n=="string",a,u=e??{},c=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},f=m=>typeof HTMLCanvasElement<"u"&&m instanceof HTMLCanvasElement||m instanceof OffscreenCanvas?m.getContext("2d"):null;if(r){let m=c();m.width=n.width,m.height=n.height;let y=f(m);if(y!=null){let _=n.height,x=n.width;if(e!==void 0&&e.resizedHeight!==void 0&&e.resizedWidth!==void 0&&(_=e.resizedHeight,x=e.resizedWidth),e!==void 0){if(u=e,e.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=_,u.width=x}else u.tensorFormat="RGBA",u.height=_,u.width=x;y.drawImage(n,0,0),a=y.getImageData(0,0,x,_).data}else throw new Error("Can not access image data")}else if(t){let m,y;if(e!==void 0&&e.resizedWidth!==void 0&&e.resizedHeight!==void 0?(m=e.resizedHeight,y=e.resizedWidth):(m=n.height,y=n.width),e!==void 0&&(u=e),u.format="RGBA",u.height=m,u.width=y,e!==void 0){let _=c();_.width=y,_.height=m;let x=f(_);if(x!=null)x.putImageData(n,0,0),a=x.getImageData(0,0,y,m).data;else throw new Error("Can not access image data")}else a=n.data}else if(o){if(e===void 0)throw new Error("Please provide image config with format for Imagebitmap");let m=c();m.width=n.width,m.height=n.height;let y=f(m);if(y!=null){let _=n.height,x=n.width;return y.drawImage(n,0,0,x,_),a=y.getImageData(0,0,x,_).data,u.height=_,u.width=x,Ms(a,u)}else throw new Error("Can not access image data")}else{if(i)return new Promise((m,y)=>{let _=c(),x=f(_);if(!n||!x)return y();let T=new Image;T.crossOrigin="Anonymous",T.src=n,T.onload=()=>{_.width=T.width,_.height=T.height,x.drawImage(T,0,0,_.width,_.height);let I=x.getImageData(0,0,_.width,_.height);u.height=_.height,u.width=_.width,m(Ms(I.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return Ms(a,u);throw new Error("Input data provided is not supported - aborted tensor creation")},tg=(n,e)=>{let{width:r,height:t,download:o,dispose:i}=e,a=[1,t,r,4];return new vt({location:"texture",type:"float32",texture:n,dims:a,download:o,dispose:i})},rg=(n,e)=>{let{dataType:r,dims:t,download:o,dispose:i}=e;return new vt({location:"gpu-buffer",type:r??"float32",gpuBuffer:n,dims:t,download:o,dispose:i})},ng=(n,e)=>{let{dataType:r,dims:t,download:o,dispose:i}=e;return new vt({location:"ml-tensor",type:r??"float32",mlTensor:n,dims:t,download:o,dispose:i})},og=(n,e,r)=>new vt({location:"cpu-pinned",type:n,data:e,dims:r??[e.length]})});var En,$o,ag,sg,ug=j(()=>{"use strict";En=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),$o=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),ag=!1,sg=()=>{if(!ag){ag=!0;let n=typeof BigInt64Array<"u"&&BigInt64Array.from,e=typeof BigUint64Array<"u"&&BigUint64Array.from,r=typeof Float16Array<"u"&&Float16Array.from;n&&(En.set("int64",BigInt64Array),$o.set(BigInt64Array,"int64")),e&&(En.set("uint64",BigUint64Array),$o.set(BigUint64Array,"uint64")),r?(En.set("float16",Float16Array),$o.set(Float16Array,"float16")):En.set("float16",Uint16Array)}}});var lg,cg,dg=j(()=>{"use strict";yi();lg=n=>{let e=1;for(let r=0;r<n.length;r++){let t=n[r];if(typeof t!="number"||!Number.isSafeInteger(t))throw new TypeError(`dims[${r}] must be an integer, got: ${t}`);if(t<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${t}`);e*=t}return e},cg=(n,e)=>{switch(n.location){case"cpu":return new vt(n.type,n.data,e);case"cpu-pinned":return new vt({location:"cpu-pinned",data:n.data,type:n.type,dims:e});case"texture":return new vt({location:"texture",texture:n.texture,type:n.type,dims:e});case"gpu-buffer":return new vt({location:"gpu-buffer",gpuBuffer:n.gpuBuffer,type:n.type,dims:e});case"ml-tensor":return new vt({location:"ml-tensor",mlTensor:n.mlTensor,type:n.type,dims:e});default:throw new Error(`tensorReshape: tensor location ${n.location} is not supported`)}}});var vt,yi=j(()=>{"use strict";Qm();ig();ug();dg();vt=class{constructor(e,r,t){sg();let o,i;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,o=e.type,i=e.dims,e.location){case"cpu-pinned":{let u=En.get(o);if(!u)throw new TypeError(`unsupported type "${o}" to create tensor from pinned buffer`);if(!(e.data instanceof u))throw new TypeError(`buffer should be of type ${u.name}`);this.cpuData=e.data;break}case"texture":{if(o!=="float32")throw new TypeError(`unsupported type "${o}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint8"&&o!=="bool"&&o!=="uint4"&&o!=="int4")throw new TypeError(`unsupported type "${o}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(o!=="float32"&&o!=="float16"&&o!=="int32"&&o!=="int64"&&o!=="uint32"&&o!=="uint64"&&o!=="int8"&&o!=="uint8"&&o!=="bool"&&o!=="uint4"&&o!=="int4")throw new TypeError(`unsupported type "${o}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let u,c;if(typeof e=="string")if(o=e,c=t,e==="string"){if(!Array.isArray(r))throw new TypeError("A string tensor's data must be a string array.");u=r}else{let f=En.get(e);if(f===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(r)){if(e==="float16"&&f===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${f.name} as data.`);e==="uint64"||e==="int64"?u=f.from(r,BigInt):u=f.from(r)}else if(r instanceof f)u=r;else if(r instanceof Uint8ClampedArray)if(e==="uint8")u=Uint8Array.from(r);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${o} tensor's data must be type of ${f}`)}else if(c=r,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let f=typeof e[0];if(f==="string")o="string",u=e;else if(f==="boolean")o="bool",u=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${f}.`)}else if(e instanceof Uint8ClampedArray)o="uint8",u=Uint8Array.from(e);else{let f=$o.get(e.constructor);if(f===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);o=f,u=e}if(c===void 0)c=[u.length];else if(!Array.isArray(c))throw new TypeError("A tensor's dims must be a number array");i=c,this.cpuData=u,this.dataLocation="cpu"}let a=lg(i);if(this.cpuData&&a!==this.cpuData.length&&!((o==="uint4"||o==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=o,this.dims=i,this.size=a}static async fromImage(e,r){return eg(e,r)}static fromTexture(e,r){return tg(e,r)}static fromGpuBuffer(e,r){return rg(e,r)}static fromMLTensor(e,r){return ng(e,r)}static fromPinnedBuffer(e,r,t){return og(e,r,t)}toDataURL(e){return Zm(this,e)}toImageData(e){return Jm(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let r=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=r,e&&this.disposer&&(this.disposer(),this.disposer=void 0),r}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return cg(this,e)}}});var Nt,Bs=j(()=>{"use strict";yi();Nt=vt});var bi,pg,Lt,$t,Fs=j(()=>{"use strict";zs();bi=(n,e)=>{(typeof kt.trace>"u"?!kt.wasm.trace:!kt.trace)||console.timeStamp(`${n}::ORT::${e}`)},pg=(n,e)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],t=!1;for(let o=0;o<r.length;o++){if(t&&!r[o].includes("TRACE_FUNC")){let i=`FUNC_${n}::${r[o].trim().split(" ")[1]}`;e&&(i+=`::${e}`),bi("CPU",i);return}r[o].includes("TRACE_FUNC")&&(t=!0)}},Lt=n=>{(typeof kt.trace>"u"?!kt.wasm.trace:!kt.trace)||pg("BEGIN",n)},$t=n=>{(typeof kt.trace>"u"?!kt.wasm.trace:!kt.trace)||pg("END",n)}});var _i,fg=j(()=>{"use strict";Rs();Bs();Fs();_i=class n{constructor(e){this.handler=e}async run(e,r,t){Lt();let o={},i={};if(typeof e!="object"||e===null||e instanceof Nt||Array.isArray(e))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Nt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let f of r){if(typeof f!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(f)===-1)throw new RangeError(`'fetches' contains invalid output name: ${f}.`);o[f]=null}if(typeof t=="object"&&t!==null)i=t;else if(typeof t<"u")throw new TypeError("'options' must be an object.")}else{let f=!1,m=Object.getOwnPropertyNames(r);for(let y of this.outputNames)if(m.indexOf(y)!==-1){let _=r[y];(_===null||_ instanceof Nt)&&(f=!0,a=!1,o[y]=_)}if(f){if(typeof t=="object"&&t!==null)i=t;else if(typeof t<"u")throw new TypeError("'options' must be an object.")}else i=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let f of this.inputNames)if(typeof e[f]>"u")throw new Error(`input '${f}' is missing in 'feeds'.`);if(a)for(let f of this.outputNames)o[f]=null;let u=await this.handler.run(e,o,i),c={};for(let f in u)if(Object.hasOwnProperty.call(u,f)){let m=u[f];m instanceof Nt?c[f]=m:c[f]=new Nt(m.type,m.data,m.dims)}return $t(),c}async release(){return this.handler.dispose()}static async create(e,r,t,o){Lt();let i,a={};if(typeof e=="string"){if(i=e,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof Uint8Array){if(i=e,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer){let m=e,y=0,_=e.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(y=r,!Number.isSafeInteger(y))throw new RangeError("'byteOffset' must be an integer.");if(y<0||y>=m.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${m.byteLength}).`);if(_=e.byteLength-y,typeof t=="number"){if(_=t,!Number.isSafeInteger(_))throw new RangeError("'byteLength' must be an integer.");if(_<=0||y+_>m.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${m.byteLength-y}].`);if(typeof o=="object"&&o!==null)a=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else if(typeof t<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");i=new Uint8Array(m,y,_)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,c]=await Wm(a),f=await u.createInferenceSessionHandler(i,c);return $t(),new n(f)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}});var rP,hg=j(()=>{"use strict";fg();rP=_i});var mg=j(()=>{"use strict"});var gg=j(()=>{"use strict"});var yg=j(()=>{"use strict"});var bg=j(()=>{"use strict"});var Vs={};eo(Vs,{InferenceSession:()=>rP,TRACE:()=>bi,TRACE_FUNC_BEGIN:()=>Lt,TRACE_FUNC_END:()=>$t,Tensor:()=>Nt,env:()=>Te,registerBackend:()=>hn});var xt=j(()=>{"use strict";Hm();Ym();hg();Bs();mg();gg();Fs();yg();bg()});function mn(n,e,r,t){if(e===void 0)return oP(n);if(r===void 0)vi(n,e,1);else if(typeof r=="number"&&t===void 0)vi(n,e,r);else if(typeof r=="string"&&t===void 0)vi(n,r,1,e);else if(typeof r=="string"&&typeof t=="number")vi(n,r,t,e);else throw new TypeError("input is valid")}function oP(n){return{verbose:mn.verbose.bind(null,n),info:mn.info.bind(null,n),warning:mn.warning.bind(null,n),error:mn.error.bind(null,n),fatal:mn.fatal.bind(null,n)}}function vi(n,e,r,t){let o=Ao[t||""]||Ao[""];vg[n]<vg[o.minimalSeverity]||(o.logDateTime&&(e=`${new Date().toISOString()}|${e}`),o.logSourceLocation,nP[o.provider].log(n,e,t))}var Gs,Us,vg,nP,wg,Ao,qe,xi,Ti,Ii,wi,Bt=j(()=>{"use strict";Gs=class{log(e,r,t){}},Us=class{log(e,r,t){console.log(`${this.color(e)} ${t?"\x1B[35m"+t+"\x1B[0m ":""}${r}`)}color(e){switch(e){case"verbose":return"\x1B[34;40mv\x1B[0m";case"info":return"\x1B[32mi\x1B[0m";case"warning":return"\x1B[30;43mw\x1B[0m";case"error":return"\x1B[31;40me\x1B[0m";case"fatal":return"\x1B[101mf\x1B[0m";default:throw new Error(`unsupported severity: ${e}`)}}},vg={verbose:1e3,info:2e3,warning:4e3,error:5e3,fatal:6e3},nP={none:new Gs,console:new Us},wg={provider:"console",minimalSeverity:"warning",logDateTime:!0,logSourceLocation:!1},Ao={"":wg};(c=>{function n(f,m){c("verbose",f,m)}c.verbose=n;function e(f,m){c("info",f,m)}c.info=e;function r(f,m){c("warning",f,m)}c.warning=r;function t(f,m){c("error",f,m)}c.error=t;function o(f,m){c("fatal",f,m)}c.fatal=o;function i(f){Ao={},a("",f||{})}c.reset=i;function a(f,m){if(f==="*")i(m);else{let y=Ao[f]||wg;Ao[f]={provider:m.provider||y.provider,minimalSeverity:m.minimalSeverity||y.minimalSeverity,logDateTime:m.logDateTime===void 0?y.logDateTime:m.logDateTime,logSourceLocation:m.logSourceLocation===void 0?y.logSourceLocation:m.logSourceLocation}}}c.set=a;function u(f){let m={};f.logLevel&&(m.minimalSeverity=f.logLevel),a("",m)}c.setWithEnv=u})(mn||={});qe=mn,xi=class{constructor(e,r,t,o,i,a){this.category=e;this.name=r;this.startTime=t;this.endCallback=o;this.timer=i;this.ctx=a}async end(){return this.endCallback(this)}async checkTimer(){if(this.ctx===void 0||this.timer===void 0)throw new Error("No webgl timer found");return this.ctx.endTimer(),this.ctx.waitForQueryAndGetTime(this.timer)}},Ti=class{constructor(e,r,t,o){this.category=e;this.name=r;this.startTime=t;this.endTime=o}},Ii=class{constructor(e,r,t){this._started=!1;this._flushPointer=0;this._started=!1,this._maxNumberEvents=e===void 0?1e4:e,this._flushBatchSize=r===void 0?10:r,this._flushIntervalInMilliseconds=t===void 0?5e3:t}static create(e){return e===void 0?new this:new this(e.maxNumberEvents,e.flushBatchSize,e.flushIntervalInMilliseconds)}start(){this._started=!0,this._timingEvents=[],this._flushTime=wi(),this._flushPointer=0}stop(){for(this._started=!1;this._flushPointer<this._timingEvents.length;this._flushPointer++)this.logOneEvent(this._timingEvents[this._flushPointer])}event(e,r,t,o){let i=this._started?this.begin(e,r,o):void 0,a=!1,u=t();if(u&&typeof u.then=="function")return a=!0,new Promise((c,f)=>{u.then(async m=>{i&&await i.end(),c(m)},async m=>{i&&await i.end(),f(m)})});if(!a&&i){let c=i.end();if(c&&typeof c.then=="function")return new Promise((f,m)=>{c.then(()=>{f(u)},y=>{m(y)})})}return u}begin(e,r,t){if(!this._started)throw new Error("profiler is not started yet");if(t===void 0){let o=wi();return this.flush(o),new xi(e,r,o,i=>this.endSync(i))}else{let o=t.beginTimer();return new xi(e,r,0,async i=>this.end(i),o,t)}}async end(e){let r=await e.checkTimer();this._timingEvents.length<this._maxNumberEvents&&(this._timingEvents.push(new Ti(e.category,e.name,e.startTime,r)),this.flush(r))}endSync(e){let r=wi();this._timingEvents.length<this._maxNumberEvents&&(this._timingEvents.push(new Ti(e.category,e.name,e.startTime,r)),this.flush(r))}logOneEvent(e){qe.verbose(`Profiler.${e.category}`,`${(e.endTime-e.startTime).toFixed(2)}ms on event '${e.name}' at ${e.endTime.toFixed(2)}`)}flush(e){if(this._timingEvents.length-this._flushPointer>=this._flushBatchSize||e-this._flushTime>=this._flushIntervalInMilliseconds){for(let r=this._flushPointer;this._flushPointer<r+this._flushBatchSize&&this._flushPointer<this._timingEvents.length;this._flushPointer++)this.logOneEvent(this._timingEvents[this._flushPointer]);this._flushTime=wi()}}get started(){return this._started}},wi=typeof performance<"u"&&performance.now?()=>performance.now():Date.now});function xg(n,e,r){for(let t of r){let o=t[0],i=t[1],a=t[2],u=t[3],c=t[4];if(n.opType===o){for(let f of e)if((f.domain===i||f.domain==="ai.onnx"&&i==="")&&iP(f.version,a))return{opImpl:u,opInit:c}}}throw new TypeError(`cannot resolve operator '${n.opType}' with opsets: ${e.map(t=>`${t.domain||"ai.onnx"} v${t.version}`).join(", ")}`)}function iP(n,e){if(e.endsWith("+")){let r=Number.parseInt(e.substring(0,e.length-1),10);return!isNaN(r)&&r<=n}else if(e.split("-").length===2){let r=e.split("-"),t=Number.parseInt(r[0],10),o=Number.parseInt(r[1],10);return!isNaN(t)&&!isNaN(o)&&t<=n&&n<=o}else return Number.parseInt(e,10)===n}var Tg=j(()=>{"use strict"});var Ig=he(js=>{"use strict";js.__esModule=!0;var aP=function(){function n(e){if(!e)throw new TypeError("Invalid argument; `value` has no value.");this.value=n.EMPTY,e&&n.isGuid(e)&&(this.value=e)}return n.isGuid=function(e){var r=e.toString();return e&&(e instanceof n||n.validator.test(r))},n.create=function(){return new n([n.gen(2),n.gen(1),n.gen(1),n.gen(1),n.gen(3)].join("-"))},n.createEmpty=function(){return new n("emptyguid")},n.parse=function(e){return new n(e)},n.raw=function(){return[n.gen(2),n.gen(1),n.gen(1),n.gen(1),n.gen(3)].join("-")},n.gen=function(e){for(var r="",t=0;t<e;t++)r+=((1+Math.random())*65536|0).toString(16).substring(1);return r},n.prototype.equals=function(e){return n.isGuid(e)&&this.value===e.toString()},n.prototype.isEmpty=function(){return this.value===n.EMPTY},n.prototype.toString=function(){return this.value},n.prototype.toJSON=function(){return{value:this.value}},n.validator=new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$","i"),n.EMPTY="00000000-0000-0000-0000-000000000000",n}();js.Guid=aP});function Ze(n,e,r){this.low=n|0,this.high=e|0,this.unsigned=!!r}function Tt(n){return(n&&n.__isLong__)===!0}function Sg(n){var e=Math.clz32(n&-n);return n?31-e:e}function Dn(n,e){var r,t,o;return e?(n>>>=0,(o=0<=n&&n<256)&&(t=Ag[n],t)?t:(r=je(n,0,!0),o&&(Ag[n]=r),r)):(n|=0,(o=-128<=n&&n<128)&&(t=$g[n],t)?t:(r=je(n,n<0?-1:0,!1),o&&($g[n]=r),r))}function Vt(n,e){if(isNaN(n))return e?on:Zt;if(e){if(n<0)return on;if(n>=Eg)return Ng}else{if(n<=-Pg)return At;if(n+1>=Pg)return kg}return n<0?Vt(-n,e).neg():je(n%ro|0,n/ro|0,e)}function je(n,e,r){return new Ze(n,e,r)}function Hs(n,e,r){if(n.length===0)throw Error("empty string");if(typeof e=="number"?(r=e,e=!1):e=!!e,n==="NaN"||n==="Infinity"||n==="+Infinity"||n==="-Infinity")return e?on:Zt;if(r=r||10,r<2||36<r)throw RangeError("radix");var t;if((t=n.indexOf("-"))>0)throw Error("interior hyphen");if(t===0)return Hs(n.substring(1),e,r).neg();for(var o=Vt(Si(r,8)),i=Zt,a=0;a<n.length;a+=8){var u=Math.min(8,n.length-a),c=parseInt(n.substring(a,a+u),r);if(u<8){var f=Vt(Si(r,u));i=i.mul(f).add(Vt(c))}else i=i.mul(o),i=i.add(Vt(c))}return i.unsigned=e,i}function Jt(n,e){return typeof n=="number"?Vt(n,e):typeof n=="string"?Hs(n,e):je(n.low,n.high,typeof e=="boolean"?e:n.unsigned)}var Ft,$g,Ag,Si,Og,sP,ro,Eg,Pg,Cg,Zt,on,to,Dg,Ws,kg,Ng,At,ne,gn,qs=j(()=>{Ft=null;try{Ft=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}Ze.prototype.__isLong__;Object.defineProperty(Ze.prototype,"__isLong__",{value:!0});Ze.isLong=Tt;$g={},Ag={};Ze.fromInt=Dn;Ze.fromNumber=Vt;Ze.fromBits=je;Si=Math.pow;Ze.fromString=Hs;Ze.fromValue=Jt;Og=65536,sP=1<<24,ro=Og*Og,Eg=ro*ro,Pg=Eg/2,Cg=Dn(sP),Zt=Dn(0);Ze.ZERO=Zt;on=Dn(0,!0);Ze.UZERO=on;to=Dn(1);Ze.ONE=to;Dg=Dn(1,!0);Ze.UONE=Dg;Ws=Dn(-1);Ze.NEG_ONE=Ws;kg=je(-1,2147483647,!1);Ze.MAX_VALUE=kg;Ng=je(-1,-1,!0);Ze.MAX_UNSIGNED_VALUE=Ng;At=je(0,-2147483648,!1);Ze.MIN_VALUE=At;ne=Ze.prototype;ne.toInt=function(){return this.unsigned?this.low>>>0:this.low};ne.toNumber=function(){return this.unsigned?(this.high>>>0)*ro+(this.low>>>0):this.high*ro+(this.low>>>0)};ne.toString=function(e){if(e=e||10,e<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(At)){var r=Vt(e),t=this.div(r),o=t.mul(r).sub(this);return t.toString(e)+o.toInt().toString(e)}else return"-"+this.neg().toString(e);for(var i=Vt(Si(e,6),this.unsigned),a=this,u="";;){var c=a.div(i),f=a.sub(c.mul(i)).toInt()>>>0,m=f.toString(e);if(a=c,a.isZero())return m+u;for(;m.length<6;)m="0"+m;u=""+m+u}};ne.getHighBits=function(){return this.high};ne.getHighBitsUnsigned=function(){return this.high>>>0};ne.getLowBits=function(){return this.low};ne.getLowBitsUnsigned=function(){return this.low>>>0};ne.getNumBitsAbs=function(){if(this.isNegative())return this.eq(At)?64:this.neg().getNumBitsAbs();for(var e=this.high!=0?this.high:this.low,r=31;r>0&&!(e&1<<r);r--);return this.high!=0?r+33:r+1};ne.isZero=function(){return this.high===0&&this.low===0};ne.eqz=ne.isZero;ne.isNegative=function(){return!this.unsigned&&this.high<0};ne.isPositive=function(){return this.unsigned||this.high>=0};ne.isOdd=function(){return(this.low&1)===1};ne.isEven=function(){return(this.low&1)===0};ne.equals=function(e){return Tt(e)||(e=Jt(e)),this.unsigned!==e.unsigned&&this.high>>>31===1&&e.high>>>31===1?!1:this.high===e.high&&this.low===e.low};ne.eq=ne.equals;ne.notEquals=function(e){return!this.eq(e)};ne.neq=ne.notEquals;ne.ne=ne.notEquals;ne.lessThan=function(e){return this.comp(e)<0};ne.lt=ne.lessThan;ne.lessThanOrEqual=function(e){return this.comp(e)<=0};ne.lte=ne.lessThanOrEqual;ne.le=ne.lessThanOrEqual;ne.greaterThan=function(e){return this.comp(e)>0};ne.gt=ne.greaterThan;ne.greaterThanOrEqual=function(e){return this.comp(e)>=0};ne.gte=ne.greaterThanOrEqual;ne.ge=ne.greaterThanOrEqual;ne.compare=function(e){if(Tt(e)||(e=Jt(e)),this.eq(e))return 0;var r=this.isNegative(),t=e.isNegative();return r&&!t?-1:!r&&t?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1};ne.comp=ne.compare;ne.negate=function(){return!this.unsigned&&this.eq(At)?At:this.not().add(to)};ne.neg=ne.negate;ne.add=function(e){Tt(e)||(e=Jt(e));var r=this.high>>>16,t=this.high&65535,o=this.low>>>16,i=this.low&65535,a=e.high>>>16,u=e.high&65535,c=e.low>>>16,f=e.low&65535,m=0,y=0,_=0,x=0;return x+=i+f,_+=x>>>16,x&=65535,_+=o+c,y+=_>>>16,_&=65535,y+=t+u,m+=y>>>16,y&=65535,m+=r+a,m&=65535,je(_<<16|x,m<<16|y,this.unsigned)};ne.subtract=function(e){return Tt(e)||(e=Jt(e)),this.add(e.neg())};ne.sub=ne.subtract;ne.multiply=function(e){if(this.isZero())return this;if(Tt(e)||(e=Jt(e)),Ft){var r=Ft.mul(this.low,this.high,e.low,e.high);return je(r,Ft.get_high(),this.unsigned)}if(e.isZero())return this.unsigned?on:Zt;if(this.eq(At))return e.isOdd()?At:Zt;if(e.eq(At))return this.isOdd()?At:Zt;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(Cg)&&e.lt(Cg))return Vt(this.toNumber()*e.toNumber(),this.unsigned);var t=this.high>>>16,o=this.high&65535,i=this.low>>>16,a=this.low&65535,u=e.high>>>16,c=e.high&65535,f=e.low>>>16,m=e.low&65535,y=0,_=0,x=0,T=0;return T+=a*m,x+=T>>>16,T&=65535,x+=i*m,_+=x>>>16,x&=65535,x+=a*f,_+=x>>>16,x&=65535,_+=o*m,y+=_>>>16,_&=65535,_+=i*f,y+=_>>>16,_&=65535,_+=a*c,y+=_>>>16,_&=65535,y+=t*m+o*f+i*c+a*u,y&=65535,je(x<<16|T,y<<16|_,this.unsigned)};ne.mul=ne.multiply;ne.divide=function(e){if(Tt(e)||(e=Jt(e)),e.isZero())throw Error("division by zero");if(Ft){if(!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1)return this;var r=(this.unsigned?Ft.div_u:Ft.div_s)(this.low,this.high,e.low,e.high);return je(r,Ft.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?on:Zt;var t,o,i;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return on;if(e.gt(this.shru(1)))return Dg;i=on}else{if(this.eq(At)){if(e.eq(to)||e.eq(Ws))return At;if(e.eq(At))return to;var a=this.shr(1);return t=a.div(e).shl(1),t.eq(Zt)?e.isNegative()?to:Ws:(o=this.sub(e.mul(t)),i=t.add(o.div(e)),i)}else if(e.eq(At))return this.unsigned?on:Zt;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();i=Zt}for(o=this;o.gte(e);){t=Math.max(1,Math.floor(o.toNumber()/e.toNumber()));for(var u=Math.ceil(Math.log(t)/Math.LN2),c=u<=48?1:Si(2,u-48),f=Vt(t),m=f.mul(e);m.isNegative()||m.gt(o);)t-=c,f=Vt(t,this.unsigned),m=f.mul(e);f.isZero()&&(f=to),i=i.add(f),o=o.sub(m)}return i};ne.div=ne.divide;ne.modulo=function(e){if(Tt(e)||(e=Jt(e)),Ft){var r=(this.unsigned?Ft.rem_u:Ft.rem_s)(this.low,this.high,e.low,e.high);return je(r,Ft.get_high(),this.unsigned)}return this.sub(this.div(e).mul(e))};ne.mod=ne.modulo;ne.rem=ne.modulo;ne.not=function(){return je(~this.low,~this.high,this.unsigned)};ne.countLeadingZeros=function(){return this.high?Math.clz32(this.high):Math.clz32(this.low)+32};ne.clz=ne.countLeadingZeros;ne.countTrailingZeros=function(){return this.low?Sg(this.low):Sg(this.high)+32};ne.ctz=ne.countTrailingZeros;ne.and=function(e){return Tt(e)||(e=Jt(e)),je(this.low&e.low,this.high&e.high,this.unsigned)};ne.or=function(e){return Tt(e)||(e=Jt(e)),je(this.low|e.low,this.high|e.high,this.unsigned)};ne.xor=function(e){return Tt(e)||(e=Jt(e)),je(this.low^e.low,this.high^e.high,this.unsigned)};ne.shiftLeft=function(e){return Tt(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?je(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):je(0,this.low<<e-32,this.unsigned)};ne.shl=ne.shiftLeft;ne.shiftRight=function(e){return Tt(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?je(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):je(this.high>>e-32,this.high>=0?0:-1,this.unsigned)};ne.shr=ne.shiftRight;ne.shiftRightUnsigned=function(e){return Tt(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?je(this.low>>>e|this.high<<32-e,this.high>>>e,this.unsigned):e===32?je(this.high,0,this.unsigned):je(this.high>>>e-32,0,this.unsigned)};ne.shru=ne.shiftRightUnsigned;ne.shr_u=ne.shiftRightUnsigned;ne.rotateLeft=function(e){var r;return Tt(e)&&(e=e.toInt()),(e&=63)===0?this:e===32?je(this.high,this.low,this.unsigned):e<32?(r=32-e,je(this.low<<e|this.high>>>r,this.high<<e|this.low>>>r,this.unsigned)):(e-=32,r=32-e,je(this.high<<e|this.low>>>r,this.low<<e|this.high>>>r,this.unsigned))};ne.rotl=ne.rotateLeft;ne.rotateRight=function(e){var r;return Tt(e)&&(e=e.toInt()),(e&=63)===0?this:e===32?je(this.high,this.low,this.unsigned):e<32?(r=32-e,je(this.high<<r|this.low>>>e,this.low<<r|this.high>>>e,this.unsigned)):(e-=32,r=32-e,je(this.low<<r|this.high>>>e,this.high<<r|this.low>>>e,this.unsigned))};ne.rotr=ne.rotateRight;ne.toSigned=function(){return this.unsigned?je(this.low,this.high,!1):this};ne.toUnsigned=function(){return this.unsigned?this:je(this.low,this.high,!0)};ne.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()};ne.toBytesLE=function(){var e=this.high,r=this.low;return[r&255,r>>>8&255,r>>>16&255,r>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]};ne.toBytesBE=function(){var e=this.high,r=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,r>>>24,r>>>16&255,r>>>8&255,r&255]};Ze.fromBytes=function(e,r,t){return t?Ze.fromBytesLE(e,r):Ze.fromBytesBE(e,r)};Ze.fromBytesLE=function(e,r){return new Ze(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,r)};Ze.fromBytesBE=function(e,r){return new Ze(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],r)};gn=Ze});var Ks=he($i=>{"use strict";Object.defineProperty($i,"__esModule",{value:!0});$i.ArgType=void 0;var Lg;(function(n){n[n.INPUT=0]="INPUT",n[n.OUTPUT=1]="OUTPUT"})(Lg||($i.ArgType=Lg={}))});var kn=he(dr=>{"use strict";Object.defineProperty(dr,"__esModule",{value:!0});dr.SIZE_PREFIX_LENGTH=dr.FILE_IDENTIFIER_LENGTH=dr.SIZEOF_INT=dr.SIZEOF_SHORT=void 0;dr.SIZEOF_SHORT=2;dr.SIZEOF_INT=4;dr.FILE_IDENTIFIER_LENGTH=4;dr.SIZE_PREFIX_LENGTH=4});var Xs=he(Gt=>{"use strict";Object.defineProperty(Gt,"__esModule",{value:!0});Gt.isLittleEndian=Gt.float64=Gt.float32=Gt.int32=void 0;Gt.int32=new Int32Array(2);Gt.float32=new Float32Array(Gt.int32.buffer);Gt.float64=new Float64Array(Gt.int32.buffer);Gt.isLittleEndian=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1});var Ys=he(Ai=>{"use strict";Object.defineProperty(Ai,"__esModule",{value:!0});Ai.Encoding=void 0;var Rg;(function(n){n[n.UTF8_BYTES=1]="UTF8_BYTES",n[n.UTF16_STRING=2]="UTF16_STRING"})(Rg||(Ai.Encoding=Rg={}))});var Js=he(Oi=>{"use strict";Object.defineProperty(Oi,"__esModule",{value:!0});Oi.ByteBuffer=void 0;var pr=kn(),Ot=Xs(),uP=Ys(),Zs=class n{constructor(e){this.bytes_=e,this.position_=0,this.text_decoder_=new TextDecoder}static allocate(e){return new n(new Uint8Array(e))}clear(){this.position_=0}bytes(){return this.bytes_}position(){return this.position_}setPosition(e){this.position_=e}capacity(){return this.bytes_.length}readInt8(e){return this.readUint8(e)<<24>>24}readUint8(e){return this.bytes_[e]}readInt16(e){return this.readUint16(e)<<16>>16}readUint16(e){return this.bytes_[e]|this.bytes_[e+1]<<8}readInt32(e){return this.bytes_[e]|this.bytes_[e+1]<<8|this.bytes_[e+2]<<16|this.bytes_[e+3]<<24}readUint32(e){return this.readInt32(e)>>>0}readInt64(e){return BigInt.asIntN(64,BigInt(this.readUint32(e))+(BigInt(this.readUint32(e+4))<<BigInt(32)))}readUint64(e){return BigInt.asUintN(64,BigInt(this.readUint32(e))+(BigInt(this.readUint32(e+4))<<BigInt(32)))}readFloat32(e){return Ot.int32[0]=this.readInt32(e),Ot.float32[0]}readFloat64(e){return Ot.int32[Ot.isLittleEndian?0:1]=this.readInt32(e),Ot.int32[Ot.isLittleEndian?1:0]=this.readInt32(e+4),Ot.float64[0]}writeInt8(e,r){this.bytes_[e]=r}writeUint8(e,r){this.bytes_[e]=r}writeInt16(e,r){this.bytes_[e]=r,this.bytes_[e+1]=r>>8}writeUint16(e,r){this.bytes_[e]=r,this.bytes_[e+1]=r>>8}writeInt32(e,r){this.bytes_[e]=r,this.bytes_[e+1]=r>>8,this.bytes_[e+2]=r>>16,this.bytes_[e+3]=r>>24}writeUint32(e,r){this.bytes_[e]=r,this.bytes_[e+1]=r>>8,this.bytes_[e+2]=r>>16,this.bytes_[e+3]=r>>24}writeInt64(e,r){this.writeInt32(e,Number(BigInt.asIntN(32,r))),this.writeInt32(e+4,Number(BigInt.asIntN(32,r>>BigInt(32))))}writeUint64(e,r){this.writeUint32(e,Number(BigInt.asUintN(32,r))),this.writeUint32(e+4,Number(BigInt.asUintN(32,r>>BigInt(32))))}writeFloat32(e,r){Ot.float32[0]=r,this.writeInt32(e,Ot.int32[0])}writeFloat64(e,r){Ot.float64[0]=r,this.writeInt32(e,Ot.int32[Ot.isLittleEndian?0:1]),this.writeInt32(e+4,Ot.int32[Ot.isLittleEndian?1:0])}getBufferIdentifier(){if(this.bytes_.length<this.position_+pr.SIZEOF_INT+pr.FILE_IDENTIFIER_LENGTH)throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");let e="";for(let r=0;r<pr.FILE_IDENTIFIER_LENGTH;r++)e+=String.fromCharCode(this.readInt8(this.position_+pr.SIZEOF_INT+r));return e}__offset(e,r){let t=e-this.readInt32(e);return r<this.readInt16(t)?this.readInt16(t+r):0}__union(e,r){return e.bb_pos=r+this.readInt32(r),e.bb=this,e}__string(e,r){e+=this.readInt32(e);let t=this.readInt32(e);e+=pr.SIZEOF_INT;let o=this.bytes_.subarray(e,e+t);return r===uP.Encoding.UTF8_BYTES?o:this.text_decoder_.decode(o)}__union_with_string(e,r){return typeof e=="string"?this.__string(r):this.__union(e,r)}__indirect(e){return e+this.readInt32(e)}__vector(e){return e+this.readInt32(e)+pr.SIZEOF_INT}__vector_len(e){return this.readInt32(e+this.readInt32(e))}__has_identifier(e){if(e.length!=pr.FILE_IDENTIFIER_LENGTH)throw new Error("FlatBuffers: file identifier must be length "+pr.FILE_IDENTIFIER_LENGTH);for(let r=0;r<pr.FILE_IDENTIFIER_LENGTH;r++)if(e.charCodeAt(r)!=this.readInt8(this.position()+pr.SIZEOF_INT+r))return!1;return!0}createScalarList(e,r){let t=[];for(let o=0;o<r;++o){let i=e(o);i!==null&&t.push(i)}return t}createObjList(e,r){let t=[];for(let o=0;o<r;++o){let i=e(o);i!==null&&t.push(i.unpack())}return t}};Oi.ByteBuffer=Zs});var Mg=he(Pi=>{"use strict";Object.defineProperty(Pi,"__esModule",{value:!0});Pi.Builder=void 0;var zg=Js(),Rt=kn(),Qs=class n{constructor(e){this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null,this.text_encoder=new TextEncoder;let r;e?r=e:r=1024,this.bb=zg.ByteBuffer.allocate(r),this.space=r}clear(){this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null}forceDefaults(e){this.force_defaults=e}dataBuffer(){return this.bb}asUint8Array(){return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())}prep(e,r){e>this.minalign&&(this.minalign=e);let t=~(this.bb.capacity()-this.space+r)+1&e-1;for(;this.space<t+e+r;){let o=this.bb.capacity();this.bb=n.growByteBuffer(this.bb),this.space+=this.bb.capacity()-o}this.pad(t)}pad(e){for(let r=0;r<e;r++)this.bb.writeInt8(--this.space,0)}writeInt8(e){this.bb.writeInt8(this.space-=1,e)}writeInt16(e){this.bb.writeInt16(this.space-=2,e)}writeInt32(e){this.bb.writeInt32(this.space-=4,e)}writeInt64(e){this.bb.writeInt64(this.space-=8,e)}writeFloat32(e){this.bb.writeFloat32(this.space-=4,e)}writeFloat64(e){this.bb.writeFloat64(this.space-=8,e)}addInt8(e){this.prep(1,0),this.writeInt8(e)}addInt16(e){this.prep(2,0),this.writeInt16(e)}addInt32(e){this.prep(4,0),this.writeInt32(e)}addInt64(e){this.prep(8,0),this.writeInt64(e)}addFloat32(e){this.prep(4,0),this.writeFloat32(e)}addFloat64(e){this.prep(8,0),this.writeFloat64(e)}addFieldInt8(e,r,t){(this.force_defaults||r!=t)&&(this.addInt8(r),this.slot(e))}addFieldInt16(e,r,t){(this.force_defaults||r!=t)&&(this.addInt16(r),this.slot(e))}addFieldInt32(e,r,t){(this.force_defaults||r!=t)&&(this.addInt32(r),this.slot(e))}addFieldInt64(e,r,t){(this.force_defaults||r!==t)&&(this.addInt64(r),this.slot(e))}addFieldFloat32(e,r,t){(this.force_defaults||r!=t)&&(this.addFloat32(r),this.slot(e))}addFieldFloat64(e,r,t){(this.force_defaults||r!=t)&&(this.addFloat64(r),this.slot(e))}addFieldOffset(e,r,t){(this.force_defaults||r!=t)&&(this.addOffset(r),this.slot(e))}addFieldStruct(e,r,t){r!=t&&(this.nested(r),this.slot(e))}nested(e){if(e!=this.offset())throw new TypeError("FlatBuffers: struct must be serialized inline.")}notNested(){if(this.isNested)throw new TypeError("FlatBuffers: object serialization must not be nested.")}slot(e){this.vtable!==null&&(this.vtable[e]=this.offset())}offset(){return this.bb.capacity()-this.space}static growByteBuffer(e){let r=e.capacity();if(r&3221225472)throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");let t=r<<1,o=zg.ByteBuffer.allocate(t);return o.setPosition(t-r),o.bytes().set(e.bytes(),t-r),o}addOffset(e){this.prep(Rt.SIZEOF_INT,0),this.writeInt32(this.offset()-e+Rt.SIZEOF_INT)}startObject(e){this.notNested(),this.vtable==null&&(this.vtable=[]),this.vtable_in_use=e;for(let r=0;r<e;r++)this.vtable[r]=0;this.isNested=!0,this.object_start=this.offset()}endObject(){if(this.vtable==null||!this.isNested)throw new Error("FlatBuffers: endObject called without startObject");this.addInt32(0);let e=this.offset(),r=this.vtable_in_use-1;for(;r>=0&&this.vtable[r]==0;r--);let t=r+1;for(;r>=0;r--)this.addInt16(this.vtable[r]!=0?e-this.vtable[r]:0);let o=2;this.addInt16(e-this.object_start);let i=(t+o)*Rt.SIZEOF_SHORT;this.addInt16(i);let a=0,u=this.space;e:for(r=0;r<this.vtables.length;r++){let c=this.bb.capacity()-this.vtables[r];if(i==this.bb.readInt16(c)){for(let f=Rt.SIZEOF_SHORT;f<i;f+=Rt.SIZEOF_SHORT)if(this.bb.readInt16(u+f)!=this.bb.readInt16(c+f))continue e;a=this.vtables[r];break}}return a?(this.space=this.bb.capacity()-e,this.bb.writeInt32(this.space,a-e)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-e,this.offset()-e)),this.isNested=!1,e}finish(e,r,t){let o=t?Rt.SIZE_PREFIX_LENGTH:0;if(r){let i=r;if(this.prep(this.minalign,Rt.SIZEOF_INT+Rt.FILE_IDENTIFIER_LENGTH+o),i.length!=Rt.FILE_IDENTIFIER_LENGTH)throw new TypeError("FlatBuffers: file identifier must be length "+Rt.FILE_IDENTIFIER_LENGTH);for(let a=Rt.FILE_IDENTIFIER_LENGTH-1;a>=0;a--)this.writeInt8(i.charCodeAt(a))}this.prep(this.minalign,Rt.SIZEOF_INT+o),this.addOffset(e),o&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)}finishSizePrefixed(e,r){this.finish(e,r,!0)}requiredField(e,r){let t=this.bb.capacity()-e,o=t-this.bb.readInt32(t);if(!(r<this.bb.readInt16(o)&&this.bb.readInt16(o+r)!=0))throw new TypeError("FlatBuffers: field "+r+" must be set")}startVector(e,r,t){this.notNested(),this.vector_num_elems=r,this.prep(Rt.SIZEOF_INT,e*r),this.prep(t,e*r)}endVector(){return this.writeInt32(this.vector_num_elems),this.offset()}createSharedString(e){if(!e)return 0;if(this.string_maps||(this.string_maps=new Map),this.string_maps.has(e))return this.string_maps.get(e);let r=this.createString(e);return this.string_maps.set(e,r),r}createString(e){if(e==null)return 0;let r;return e instanceof Uint8Array?r=e:r=this.text_encoder.encode(e),this.addInt8(0),this.startVector(1,r.length,1),this.bb.setPosition(this.space-=r.length),this.bb.bytes().set(r,this.space),this.endVector()}createByteVector(e){return e==null?0:(this.startVector(1,e.length,1),this.bb.setPosition(this.space-=e.length),this.bb.bytes().set(e,this.space),this.endVector())}createObjectOffset(e){return e===null?0:typeof e=="string"?this.createString(e):e.pack(this)}createObjectOffsetList(e){let r=[];for(let t=0;t<e.length;++t){let o=e[t];if(o!==null)r.push(this.createObjectOffset(o));else throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.")}return r}createStructOffsetList(e,r){return r(this,e.length),this.createObjectOffsetList(e.slice().reverse()),this.endVector()}};Pi.Builder=Qs});var We=he(rt=>{"use strict";Object.defineProperty(rt,"__esModule",{value:!0});rt.ByteBuffer=rt.Builder=rt.Encoding=rt.isLittleEndian=rt.float64=rt.float32=rt.int32=rt.SIZE_PREFIX_LENGTH=rt.FILE_IDENTIFIER_LENGTH=rt.SIZEOF_INT=rt.SIZEOF_SHORT=void 0;var lP=kn();Object.defineProperty(rt,"SIZEOF_SHORT",{enumerable:!0,get:function(){return lP.SIZEOF_SHORT}});var cP=kn();Object.defineProperty(rt,"SIZEOF_INT",{enumerable:!0,get:function(){return cP.SIZEOF_INT}});var dP=kn();Object.defineProperty(rt,"FILE_IDENTIFIER_LENGTH",{enumerable:!0,get:function(){return dP.FILE_IDENTIFIER_LENGTH}});var pP=kn();Object.defineProperty(rt,"SIZE_PREFIX_LENGTH",{enumerable:!0,get:function(){return pP.SIZE_PREFIX_LENGTH}});var Ci=Xs();Object.defineProperty(rt,"int32",{enumerable:!0,get:function(){return Ci.int32}});Object.defineProperty(rt,"float32",{enumerable:!0,get:function(){return Ci.float32}});Object.defineProperty(rt,"float64",{enumerable:!0,get:function(){return Ci.float64}});Object.defineProperty(rt,"isLittleEndian",{enumerable:!0,get:function(){return Ci.isLittleEndian}});var fP=Ys();Object.defineProperty(rt,"Encoding",{enumerable:!0,get:function(){return fP.Encoding}});var hP=Mg();Object.defineProperty(rt,"Builder",{enumerable:!0,get:function(){return hP.Builder}});var mP=Js();Object.defineProperty(rt,"ByteBuffer",{enumerable:!0,get:function(){return mP.ByteBuffer}})});var tu=he(fr=>{"use strict";var gP=fr&&fr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),yP=fr&&fr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),bP=fr&&fr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&gP(e,n,r);return yP(e,n),e};Object.defineProperty(fr,"__esModule",{value:!0});fr.ArgTypeAndIndex=void 0;var _P=bP(We()),Bg=Ks(),eu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsArgTypeAndIndex(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsArgTypeAndIndex(e,r){return e.setPosition(e.position()+_P.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}argType(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt8(this.bb_pos+e):Bg.ArgType.INPUT}index(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readUint32(this.bb_pos+e):0}static startArgTypeAndIndex(e){e.startObject(2)}static addArgType(e,r){e.addFieldInt8(0,r,Bg.ArgType.INPUT)}static addIndex(e,r){e.addFieldInt32(1,r,0)}static endArgTypeAndIndex(e){return e.endObject()}static createArgTypeAndIndex(e,r,t){return n.startArgTypeAndIndex(e),n.addArgType(e,r),n.addIndex(e,t),n.endArgTypeAndIndex(e)}};fr.ArgTypeAndIndex=eu});var ru=he(Ei=>{"use strict";Object.defineProperty(Ei,"__esModule",{value:!0});Ei.AttributeType=void 0;var Fg;(function(n){n[n.UNDEFINED=0]="UNDEFINED",n[n.FLOAT=1]="FLOAT",n[n.INT=2]="INT",n[n.STRING=3]="STRING",n[n.TENSOR=4]="TENSOR",n[n.GRAPH=5]="GRAPH",n[n.FLOATS=6]="FLOATS",n[n.INTS=7]="INTS",n[n.STRINGS=8]="STRINGS",n[n.TENSORS=9]="TENSORS",n[n.GRAPHS=10]="GRAPHS",n[n.SPARSE_TENSOR=11]="SPARSE_TENSOR",n[n.SPARSE_TENSORS=12]="SPARSE_TENSORS"})(Fg||(Ei.AttributeType=Fg={}))});var nu=he(Di=>{"use strict";Object.defineProperty(Di,"__esModule",{value:!0});Di.NodeType=void 0;var Vg;(function(n){n[n.Primitive=0]="Primitive",n[n.Fused=1]="Fused"})(Vg||(Di.NodeType=Vg={}))});var iu=he(hr=>{"use strict";var vP=hr&&hr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),wP=hr&&hr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),xP=hr&&hr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&vP(e,n,r);return wP(e,n),e};Object.defineProperty(hr,"__esModule",{value:!0});hr.Node=void 0;var TP=xP(We()),IP=au(),Gg=nu(),ou=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsNode(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsNode(e,r){return e.setPosition(e.position()+TP.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}name(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}docString(e){let r=this.bb.__offset(this.bb_pos,6);return r?this.bb.__string(this.bb_pos+r,e):null}domain(e){let r=this.bb.__offset(this.bb_pos,8);return r?this.bb.__string(this.bb_pos+r,e):null}sinceVersion(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readInt32(this.bb_pos+e):0}index(){let e=this.bb.__offset(this.bb_pos,12);return e?this.bb.readUint32(this.bb_pos+e):0}opType(e){let r=this.bb.__offset(this.bb_pos,14);return r?this.bb.__string(this.bb_pos+r,e):null}type(){let e=this.bb.__offset(this.bb_pos,16);return e?this.bb.readInt32(this.bb_pos+e):Gg.NodeType.Primitive}executionProviderType(e){let r=this.bb.__offset(this.bb_pos,18);return r?this.bb.__string(this.bb_pos+r,e):null}inputs(e,r){let t=this.bb.__offset(this.bb_pos,20);return t?this.bb.__string(this.bb.__vector(this.bb_pos+t)+e*4,r):null}inputsLength(){let e=this.bb.__offset(this.bb_pos,20);return e?this.bb.__vector_len(this.bb_pos+e):0}outputs(e,r){let t=this.bb.__offset(this.bb_pos,22);return t?this.bb.__string(this.bb.__vector(this.bb_pos+t)+e*4,r):null}outputsLength(){let e=this.bb.__offset(this.bb_pos,22);return e?this.bb.__vector_len(this.bb_pos+e):0}attributes(e,r){let t=this.bb.__offset(this.bb_pos,24);return t?(r||new IP.Attribute).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}attributesLength(){let e=this.bb.__offset(this.bb_pos,24);return e?this.bb.__vector_len(this.bb_pos+e):0}inputArgCounts(e){let r=this.bb.__offset(this.bb_pos,26);return r?this.bb.readInt32(this.bb.__vector(this.bb_pos+r)+e*4):0}inputArgCountsLength(){let e=this.bb.__offset(this.bb_pos,26);return e?this.bb.__vector_len(this.bb_pos+e):0}inputArgCountsArray(){let e=this.bb.__offset(this.bb_pos,26);return e?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}implicitInputs(e,r){let t=this.bb.__offset(this.bb_pos,28);return t?this.bb.__string(this.bb.__vector(this.bb_pos+t)+e*4,r):null}implicitInputsLength(){let e=this.bb.__offset(this.bb_pos,28);return e?this.bb.__vector_len(this.bb_pos+e):0}static startNode(e){e.startObject(13)}static addName(e,r){e.addFieldOffset(0,r,0)}static addDocString(e,r){e.addFieldOffset(1,r,0)}static addDomain(e,r){e.addFieldOffset(2,r,0)}static addSinceVersion(e,r){e.addFieldInt32(3,r,0)}static addIndex(e,r){e.addFieldInt32(4,r,0)}static addOpType(e,r){e.addFieldOffset(5,r,0)}static addType(e,r){e.addFieldInt32(6,r,Gg.NodeType.Primitive)}static addExecutionProviderType(e,r){e.addFieldOffset(7,r,0)}static addInputs(e,r){e.addFieldOffset(8,r,0)}static createInputsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startInputsVector(e,r){e.startVector(4,r,4)}static addOutputs(e,r){e.addFieldOffset(9,r,0)}static createOutputsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startOutputsVector(e,r){e.startVector(4,r,4)}static addAttributes(e,r){e.addFieldOffset(10,r,0)}static createAttributesVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startAttributesVector(e,r){e.startVector(4,r,4)}static addInputArgCounts(e,r){e.addFieldOffset(11,r,0)}static createInputArgCountsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addInt32(r[t]);return e.endVector()}static startInputArgCountsVector(e,r){e.startVector(4,r,4)}static addImplicitInputs(e,r){e.addFieldOffset(12,r,0)}static createImplicitInputsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startImplicitInputsVector(e,r){e.startVector(4,r,4)}static endNode(e){return e.endObject()}static createNode(e,r,t,o,i,a,u,c,f,m,y,_,x,T){return n.startNode(e),n.addName(e,r),n.addDocString(e,t),n.addDomain(e,o),n.addSinceVersion(e,i),n.addIndex(e,a),n.addOpType(e,u),n.addType(e,c),n.addExecutionProviderType(e,f),n.addInputs(e,m),n.addOutputs(e,y),n.addAttributes(e,_),n.addInputArgCounts(e,x),n.addImplicitInputs(e,T),n.endNode(e)}};hr.Node=ou});var uu=he(ki=>{"use strict";Object.defineProperty(ki,"__esModule",{value:!0});ki.EdgeEnd=void 0;var su=class{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}nodeIndex(){return this.bb.readUint32(this.bb_pos)}srcArgIndex(){return this.bb.readInt32(this.bb_pos+4)}dstArgIndex(){return this.bb.readInt32(this.bb_pos+8)}static sizeOf(){return 12}static createEdgeEnd(e,r,t,o){return e.prep(4,12),e.writeInt32(o),e.writeInt32(t),e.writeInt32(r),e.offset()}};ki.EdgeEnd=su});var cu=he(mr=>{"use strict";var SP=mr&&mr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),$P=mr&&mr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),AP=mr&&mr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&SP(e,n,r);return $P(e,n),e};Object.defineProperty(mr,"__esModule",{value:!0});mr.NodeEdge=void 0;var OP=AP(We()),Ug=uu(),lu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsNodeEdge(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsNodeEdge(e,r){return e.setPosition(e.position()+OP.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}nodeIndex(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readUint32(this.bb_pos+e):0}inputEdges(e,r){let t=this.bb.__offset(this.bb_pos,6);return t?(r||new Ug.EdgeEnd).__init(this.bb.__vector(this.bb_pos+t)+e*12,this.bb):null}inputEdgesLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}outputEdges(e,r){let t=this.bb.__offset(this.bb_pos,8);return t?(r||new Ug.EdgeEnd).__init(this.bb.__vector(this.bb_pos+t)+e*12,this.bb):null}outputEdgesLength(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__vector_len(this.bb_pos+e):0}static startNodeEdge(e){e.startObject(3)}static addNodeIndex(e,r){e.addFieldInt32(0,r,0)}static addInputEdges(e,r){e.addFieldOffset(1,r,0)}static startInputEdgesVector(e,r){e.startVector(12,r,4)}static addOutputEdges(e,r){e.addFieldOffset(2,r,0)}static startOutputEdgesVector(e,r){e.startVector(12,r,4)}static endNodeEdge(e){return e.endObject()}static createNodeEdge(e,r,t,o){return n.startNodeEdge(e),n.addNodeIndex(e,r),n.addInputEdges(e,t),n.addOutputEdges(e,o),n.endNodeEdge(e)}};mr.NodeEdge=lu});var pu=he(gr=>{"use strict";var PP=gr&&gr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),CP=gr&&gr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),EP=gr&&gr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&PP(e,n,r);return CP(e,n),e};Object.defineProperty(gr,"__esModule",{value:!0});gr.NodesToOptimizeIndices=void 0;var DP=EP(We()),du=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsNodesToOptimizeIndices(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsNodesToOptimizeIndices(e,r){return e.setPosition(e.position()+DP.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}nodeIndices(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.readUint32(this.bb.__vector(this.bb_pos+r)+e*4):0}nodeIndicesLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}nodeIndicesArray(){let e=this.bb.__offset(this.bb_pos,4);return e?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}numInputs(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readUint32(this.bb_pos+e):0}numOutputs(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.readUint32(this.bb_pos+e):0}hasVariadicInput(){let e=this.bb.__offset(this.bb_pos,10);return e?!!this.bb.readInt8(this.bb_pos+e):!1}hasVariadicOutput(){let e=this.bb.__offset(this.bb_pos,12);return e?!!this.bb.readInt8(this.bb_pos+e):!1}numVariadicInputs(){let e=this.bb.__offset(this.bb_pos,14);return e?this.bb.readUint32(this.bb_pos+e):0}numVariadicOutputs(){let e=this.bb.__offset(this.bb_pos,16);return e?this.bb.readUint32(this.bb_pos+e):0}static startNodesToOptimizeIndices(e){e.startObject(7)}static addNodeIndices(e,r){e.addFieldOffset(0,r,0)}static createNodeIndicesVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addInt32(r[t]);return e.endVector()}static startNodeIndicesVector(e,r){e.startVector(4,r,4)}static addNumInputs(e,r){e.addFieldInt32(1,r,0)}static addNumOutputs(e,r){e.addFieldInt32(2,r,0)}static addHasVariadicInput(e,r){e.addFieldInt8(3,+r,0)}static addHasVariadicOutput(e,r){e.addFieldInt8(4,+r,0)}static addNumVariadicInputs(e,r){e.addFieldInt32(5,r,0)}static addNumVariadicOutputs(e,r){e.addFieldInt32(6,r,0)}static endNodesToOptimizeIndices(e){return e.endObject()}static createNodesToOptimizeIndices(e,r,t,o,i,a,u,c){return n.startNodesToOptimizeIndices(e),n.addNodeIndices(e,r),n.addNumInputs(e,t),n.addNumOutputs(e,o),n.addHasVariadicInput(e,i),n.addHasVariadicOutput(e,a),n.addNumVariadicInputs(e,u),n.addNumVariadicOutputs(e,c),n.endNodesToOptimizeIndices(e)}};gr.NodesToOptimizeIndices=du});var hu=he(yr=>{"use strict";var kP=yr&&yr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),NP=yr&&yr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),LP=yr&&yr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&kP(e,n,r);return NP(e,n),e};Object.defineProperty(yr,"__esModule",{value:!0});yr.RuntimeOptimizationRecord=void 0;var RP=LP(We()),zP=pu(),fu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsRuntimeOptimizationRecord(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsRuntimeOptimizationRecord(e,r){return e.setPosition(e.position()+RP.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}actionId(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}nodesToOptimizeIndices(e){let r=this.bb.__offset(this.bb_pos,6);return r?(e||new zP.NodesToOptimizeIndices).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}producedOpIds(e,r){let t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__string(this.bb.__vector(this.bb_pos+t)+e*4,r):null}producedOpIdsLength(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.__vector_len(this.bb_pos+e):0}static startRuntimeOptimizationRecord(e){e.startObject(4)}static addActionId(e,r){e.addFieldOffset(0,r,0)}static addNodesToOptimizeIndices(e,r){e.addFieldOffset(1,r,0)}static addProducedOpIds(e,r){e.addFieldOffset(3,r,0)}static createProducedOpIdsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startProducedOpIdsVector(e,r){e.startVector(4,r,4)}static endRuntimeOptimizationRecord(e){return e.endObject()}};yr.RuntimeOptimizationRecord=fu});var gu=he(br=>{"use strict";var MP=br&&br.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),BP=br&&br.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),FP=br&&br.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&MP(e,n,r);return BP(e,n),e};Object.defineProperty(br,"__esModule",{value:!0});br.RuntimeOptimizationRecordContainerEntry=void 0;var VP=FP(We()),GP=hu(),mu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsRuntimeOptimizationRecordContainerEntry(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsRuntimeOptimizationRecordContainerEntry(e,r){return e.setPosition(e.position()+VP.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}optimizerName(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}runtimeOptimizationRecords(e,r){let t=this.bb.__offset(this.bb_pos,6);return t?(r||new GP.RuntimeOptimizationRecord).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}runtimeOptimizationRecordsLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}static startRuntimeOptimizationRecordContainerEntry(e){e.startObject(2)}static addOptimizerName(e,r){e.addFieldOffset(0,r,0)}static addRuntimeOptimizationRecords(e,r){e.addFieldOffset(1,r,0)}static createRuntimeOptimizationRecordsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startRuntimeOptimizationRecordsVector(e,r){e.startVector(4,r,4)}static endRuntimeOptimizationRecordContainerEntry(e){let r=e.endObject();return e.requiredField(r,4),r}static createRuntimeOptimizationRecordContainerEntry(e,r,t){return n.startRuntimeOptimizationRecordContainerEntry(e),n.addOptimizerName(e,r),n.addRuntimeOptimizationRecords(e,t),n.endRuntimeOptimizationRecordContainerEntry(e)}};br.RuntimeOptimizationRecordContainerEntry=mu});var bu=he(_r=>{"use strict";var UP=_r&&_r.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),jP=_r&&_r.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),WP=_r&&_r.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&UP(e,n,r);return jP(e,n),e};Object.defineProperty(_r,"__esModule",{value:!0});_r.RuntimeOptimizations=void 0;var HP=WP(We()),qP=gu(),yu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsRuntimeOptimizations(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsRuntimeOptimizations(e,r){return e.setPosition(e.position()+HP.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}records(e,r){let t=this.bb.__offset(this.bb_pos,4);return t?(r||new qP.RuntimeOptimizationRecordContainerEntry).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}recordsLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}static startRuntimeOptimizations(e){e.startObject(1)}static addRecords(e,r){e.addFieldOffset(0,r,0)}static createRecordsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startRecordsVector(e,r){e.startVector(4,r,4)}static endRuntimeOptimizations(e){return e.endObject()}static createRuntimeOptimizations(e,r){return n.startRuntimeOptimizations(e),n.addRecords(e,r),n.endRuntimeOptimizations(e)}};_r.RuntimeOptimizations=yu});var Oo=he(Ni=>{"use strict";Object.defineProperty(Ni,"__esModule",{value:!0});Ni.TensorDataType=void 0;var jg;(function(n){n[n.UNDEFINED=0]="UNDEFINED",n[n.FLOAT=1]="FLOAT",n[n.UINT8=2]="UINT8",n[n.INT8=3]="INT8",n[n.UINT16=4]="UINT16",n[n.INT16=5]="INT16",n[n.INT32=6]="INT32",n[n.INT64=7]="INT64",n[n.STRING=8]="STRING",n[n.BOOL=9]="BOOL",n[n.FLOAT16=10]="FLOAT16",n[n.DOUBLE=11]="DOUBLE",n[n.UINT32=12]="UINT32",n[n.UINT64=13]="UINT64",n[n.COMPLEX64=14]="COMPLEX64",n[n.COMPLEX128=15]="COMPLEX128",n[n.BFLOAT16=16]="BFLOAT16",n[n.FLOAT8E4M3FN=17]="FLOAT8E4M3FN",n[n.FLOAT8E4M3FNUZ=18]="FLOAT8E4M3FNUZ",n[n.FLOAT8E5M2=19]="FLOAT8E5M2",n[n.FLOAT8E5M2FNUZ=20]="FLOAT8E5M2FNUZ"})(jg||(Ni.TensorDataType=jg={}))});var Po=he(vr=>{"use strict";var KP=vr&&vr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),XP=vr&&vr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),YP=vr&&vr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&KP(e,n,r);return XP(e,n),e};Object.defineProperty(vr,"__esModule",{value:!0});vr.Tensor=void 0;var ZP=YP(We()),Wg=Oo(),_u=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsTensor(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsTensor(e,r){return e.setPosition(e.position()+ZP.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}name(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}docString(e){let r=this.bb.__offset(this.bb_pos,6);return r?this.bb.__string(this.bb_pos+r,e):null}dims(e){let r=this.bb.__offset(this.bb_pos,8);return r?this.bb.readInt64(this.bb.__vector(this.bb_pos+r)+e*8):BigInt(0)}dimsLength(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__vector_len(this.bb_pos+e):0}dataType(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readInt32(this.bb_pos+e):Wg.TensorDataType.UNDEFINED}rawData(e){let r=this.bb.__offset(this.bb_pos,12);return r?this.bb.readUint8(this.bb.__vector(this.bb_pos+r)+e):0}rawDataLength(){let e=this.bb.__offset(this.bb_pos,12);return e?this.bb.__vector_len(this.bb_pos+e):0}rawDataArray(){let e=this.bb.__offset(this.bb_pos,12);return e?new Uint8Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}stringData(e,r){let t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__string(this.bb.__vector(this.bb_pos+t)+e*4,r):null}stringDataLength(){let e=this.bb.__offset(this.bb_pos,14);return e?this.bb.__vector_len(this.bb_pos+e):0}externalDataOffset(){let e=this.bb.__offset(this.bb_pos,16);return e?this.bb.readInt64(this.bb_pos+e):BigInt("-1")}static startTensor(e){e.startObject(7)}static addName(e,r){e.addFieldOffset(0,r,0)}static addDocString(e,r){e.addFieldOffset(1,r,0)}static addDims(e,r){e.addFieldOffset(2,r,0)}static createDimsVector(e,r){e.startVector(8,r.length,8);for(let t=r.length-1;t>=0;t--)e.addInt64(r[t]);return e.endVector()}static startDimsVector(e,r){e.startVector(8,r,8)}static addDataType(e,r){e.addFieldInt32(3,r,Wg.TensorDataType.UNDEFINED)}static addRawData(e,r){e.addFieldOffset(4,r,0)}static createRawDataVector(e,r){e.startVector(1,r.length,1);for(let t=r.length-1;t>=0;t--)e.addInt8(r[t]);return e.endVector()}static startRawDataVector(e,r){e.startVector(1,r,1)}static addStringData(e,r){e.addFieldOffset(5,r,0)}static createStringDataVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startStringDataVector(e,r){e.startVector(4,r,4)}static addExternalDataOffset(e,r){e.addFieldInt64(6,r,BigInt("-1"))}static endTensor(e){return e.endObject()}static createTensor(e,r,t,o,i,a,u,c){return n.startTensor(e),n.addName(e,r),n.addDocString(e,t),n.addDims(e,o),n.addDataType(e,i),n.addRawData(e,a),n.addStringData(e,u),n.addExternalDataOffset(e,c),n.endTensor(e)}};vr.Tensor=_u});var wu=he(wr=>{"use strict";var JP=wr&&wr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),QP=wr&&wr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),eC=wr&&wr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&JP(e,n,r);return QP(e,n),e};Object.defineProperty(wr,"__esModule",{value:!0});wr.SparseTensor=void 0;var tC=eC(We()),Hg=Po(),vu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsSparseTensor(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsSparseTensor(e,r){return e.setPosition(e.position()+tC.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}values(e){let r=this.bb.__offset(this.bb_pos,4);return r?(e||new Hg.Tensor).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}indices(e){let r=this.bb.__offset(this.bb_pos,6);return r?(e||new Hg.Tensor).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}dims(e){let r=this.bb.__offset(this.bb_pos,8);return r?this.bb.readInt64(this.bb.__vector(this.bb_pos+r)+e*8):BigInt(0)}dimsLength(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__vector_len(this.bb_pos+e):0}static startSparseTensor(e){e.startObject(3)}static addValues(e,r){e.addFieldOffset(0,r,0)}static addIndices(e,r){e.addFieldOffset(1,r,0)}static addDims(e,r){e.addFieldOffset(2,r,0)}static createDimsVector(e,r){e.startVector(8,r.length,8);for(let t=r.length-1;t>=0;t--)e.addInt64(r[t]);return e.endVector()}static startDimsVector(e,r){e.startVector(8,r,8)}static endSparseTensor(e){return e.endObject()}};wr.SparseTensor=vu});var Tu=he(xr=>{"use strict";var rC=xr&&xr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),nC=xr&&xr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),oC=xr&&xr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&rC(e,n,r);return nC(e,n),e};Object.defineProperty(xr,"__esModule",{value:!0});xr.MapType=void 0;var iC=oC(We()),qg=Oo(),aC=Co(),xu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsMapType(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsMapType(e,r){return e.setPosition(e.position()+iC.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}keyType(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt32(this.bb_pos+e):qg.TensorDataType.UNDEFINED}valueType(e){let r=this.bb.__offset(this.bb_pos,6);return r?(e||new aC.TypeInfo).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}static startMapType(e){e.startObject(2)}static addKeyType(e,r){e.addFieldInt32(0,r,qg.TensorDataType.UNDEFINED)}static addValueType(e,r){e.addFieldOffset(1,r,0)}static endMapType(e){return e.endObject()}};xr.MapType=xu});var Su=he(Tr=>{"use strict";var sC=Tr&&Tr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),uC=Tr&&Tr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),lC=Tr&&Tr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&sC(e,n,r);return uC(e,n),e};Object.defineProperty(Tr,"__esModule",{value:!0});Tr.SequenceType=void 0;var cC=lC(We()),dC=Co(),Iu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsSequenceType(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsSequenceType(e,r){return e.setPosition(e.position()+cC.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}elemType(e){let r=this.bb.__offset(this.bb_pos,4);return r?(e||new dC.TypeInfo).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}static startSequenceType(e){e.startObject(1)}static addElemType(e,r){e.addFieldOffset(0,r,0)}static endSequenceType(e){return e.endObject()}static createSequenceType(e,r){return n.startSequenceType(e),n.addElemType(e,r),n.endSequenceType(e)}};Tr.SequenceType=Iu});var $u=he(Li=>{"use strict";Object.defineProperty(Li,"__esModule",{value:!0});Li.DimensionValueType=void 0;var Kg;(function(n){n[n.UNKNOWN=0]="UNKNOWN",n[n.VALUE=1]="VALUE",n[n.PARAM=2]="PARAM"})(Kg||(Li.DimensionValueType=Kg={}))});var Ou=he(Ir=>{"use strict";var pC=Ir&&Ir.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),fC=Ir&&Ir.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),hC=Ir&&Ir.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&pC(e,n,r);return fC(e,n),e};Object.defineProperty(Ir,"__esModule",{value:!0});Ir.DimensionValue=void 0;var mC=hC(We()),Xg=$u(),Au=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsDimensionValue(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsDimensionValue(e,r){return e.setPosition(e.position()+mC.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}dimType(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt8(this.bb_pos+e):Xg.DimensionValueType.UNKNOWN}dimValue(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readInt64(this.bb_pos+e):BigInt("0")}dimParam(e){let r=this.bb.__offset(this.bb_pos,8);return r?this.bb.__string(this.bb_pos+r,e):null}static startDimensionValue(e){e.startObject(3)}static addDimType(e,r){e.addFieldInt8(0,r,Xg.DimensionValueType.UNKNOWN)}static addDimValue(e,r){e.addFieldInt64(1,r,BigInt("0"))}static addDimParam(e,r){e.addFieldOffset(2,r,0)}static endDimensionValue(e){return e.endObject()}static createDimensionValue(e,r,t,o){return n.startDimensionValue(e),n.addDimType(e,r),n.addDimValue(e,t),n.addDimParam(e,o),n.endDimensionValue(e)}};Ir.DimensionValue=Au});var Cu=he(Sr=>{"use strict";var gC=Sr&&Sr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),yC=Sr&&Sr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),bC=Sr&&Sr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&gC(e,n,r);return yC(e,n),e};Object.defineProperty(Sr,"__esModule",{value:!0});Sr.Dimension=void 0;var _C=bC(We()),vC=Ou(),Pu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsDimension(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsDimension(e,r){return e.setPosition(e.position()+_C.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}value(e){let r=this.bb.__offset(this.bb_pos,4);return r?(e||new vC.DimensionValue).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}denotation(e){let r=this.bb.__offset(this.bb_pos,6);return r?this.bb.__string(this.bb_pos+r,e):null}static startDimension(e){e.startObject(2)}static addValue(e,r){e.addFieldOffset(0,r,0)}static addDenotation(e,r){e.addFieldOffset(1,r,0)}static endDimension(e){return e.endObject()}static createDimension(e,r,t){return n.startDimension(e),n.addValue(e,r),n.addDenotation(e,t),n.endDimension(e)}};Sr.Dimension=Pu});var Du=he($r=>{"use strict";var wC=$r&&$r.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),xC=$r&&$r.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),TC=$r&&$r.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&wC(e,n,r);return xC(e,n),e};Object.defineProperty($r,"__esModule",{value:!0});$r.Shape=void 0;var IC=TC(We()),SC=Cu(),Eu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsShape(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsShape(e,r){return e.setPosition(e.position()+IC.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}dim(e,r){let t=this.bb.__offset(this.bb_pos,4);return t?(r||new SC.Dimension).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}dimLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}static startShape(e){e.startObject(1)}static addDim(e,r){e.addFieldOffset(0,r,0)}static createDimVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startDimVector(e,r){e.startVector(4,r,4)}static endShape(e){return e.endObject()}static createShape(e,r){return n.startShape(e),n.addDim(e,r),n.endShape(e)}};$r.Shape=Eu});var Nu=he(Ar=>{"use strict";var $C=Ar&&Ar.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),AC=Ar&&Ar.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),OC=Ar&&Ar.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&$C(e,n,r);return AC(e,n),e};Object.defineProperty(Ar,"__esModule",{value:!0});Ar.TensorTypeAndShape=void 0;var PC=OC(We()),CC=Du(),Yg=Oo(),ku=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsTensorTypeAndShape(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsTensorTypeAndShape(e,r){return e.setPosition(e.position()+PC.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}elemType(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt32(this.bb_pos+e):Yg.TensorDataType.UNDEFINED}shape(e){let r=this.bb.__offset(this.bb_pos,6);return r?(e||new CC.Shape).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}static startTensorTypeAndShape(e){e.startObject(2)}static addElemType(e,r){e.addFieldInt32(0,r,Yg.TensorDataType.UNDEFINED)}static addShape(e,r){e.addFieldOffset(1,r,0)}static endTensorTypeAndShape(e){return e.endObject()}};Ar.TensorTypeAndShape=ku});var Lu=he(yn=>{"use strict";Object.defineProperty(yn,"__esModule",{value:!0});yn.unionListToTypeInfoValue=yn.unionToTypeInfoValue=yn.TypeInfoValue=void 0;var Zg=Tu(),Jg=Su(),Qg=Nu(),Ri;(function(n){n[n.NONE=0]="NONE",n[n.tensor_type=1]="tensor_type",n[n.sequence_type=2]="sequence_type",n[n.map_type=3]="map_type"})(Ri||(yn.TypeInfoValue=Ri={}));function EC(n,e){switch(Ri[n]){case"NONE":return null;case"tensor_type":return e(new Qg.TensorTypeAndShape);case"sequence_type":return e(new Jg.SequenceType);case"map_type":return e(new Zg.MapType);default:return null}}yn.unionToTypeInfoValue=EC;function DC(n,e,r){switch(Ri[n]){case"NONE":return null;case"tensor_type":return e(r,new Qg.TensorTypeAndShape);case"sequence_type":return e(r,new Jg.SequenceType);case"map_type":return e(r,new Zg.MapType);default:return null}}yn.unionListToTypeInfoValue=DC});var Co=he(Or=>{"use strict";var kC=Or&&Or.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),NC=Or&&Or.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),LC=Or&&Or.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&kC(e,n,r);return NC(e,n),e};Object.defineProperty(Or,"__esModule",{value:!0});Or.TypeInfo=void 0;var RC=LC(We()),ey=Lu(),Ru=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsTypeInfo(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsTypeInfo(e,r){return e.setPosition(e.position()+RC.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}denotation(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}valueType(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readUint8(this.bb_pos+e):ey.TypeInfoValue.NONE}value(e){let r=this.bb.__offset(this.bb_pos,8);return r?this.bb.__union(e,this.bb_pos+r):null}static startTypeInfo(e){e.startObject(3)}static addDenotation(e,r){e.addFieldOffset(0,r,0)}static addValueType(e,r){e.addFieldInt8(1,r,ey.TypeInfoValue.NONE)}static addValue(e,r){e.addFieldOffset(2,r,0)}static endTypeInfo(e){return e.endObject()}static createTypeInfo(e,r,t,o){return n.startTypeInfo(e),n.addDenotation(e,r),n.addValueType(e,t),n.addValue(e,o),n.endTypeInfo(e)}};Or.TypeInfo=Ru});var Mu=he(Pr=>{"use strict";var zC=Pr&&Pr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),MC=Pr&&Pr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),BC=Pr&&Pr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&zC(e,n,r);return MC(e,n),e};Object.defineProperty(Pr,"__esModule",{value:!0});Pr.ValueInfo=void 0;var FC=BC(We()),VC=Co(),zu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsValueInfo(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsValueInfo(e,r){return e.setPosition(e.position()+FC.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}name(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}docString(e){let r=this.bb.__offset(this.bb_pos,6);return r?this.bb.__string(this.bb_pos+r,e):null}type(e){let r=this.bb.__offset(this.bb_pos,8);return r?(e||new VC.TypeInfo).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}static startValueInfo(e){e.startObject(3)}static addName(e,r){e.addFieldOffset(0,r,0)}static addDocString(e,r){e.addFieldOffset(1,r,0)}static addType(e,r){e.addFieldOffset(2,r,0)}static endValueInfo(e){return e.endObject()}};Pr.ValueInfo=zu});var zi=he(Cr=>{"use strict";var GC=Cr&&Cr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),UC=Cr&&Cr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),jC=Cr&&Cr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&GC(e,n,r);return UC(e,n),e};Object.defineProperty(Cr,"__esModule",{value:!0});Cr.Graph=void 0;var WC=jC(We()),HC=iu(),qC=cu(),KC=bu(),XC=wu(),YC=Po(),ZC=Mu(),Bu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsGraph(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsGraph(e,r){return e.setPosition(e.position()+WC.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}initializers(e,r){let t=this.bb.__offset(this.bb_pos,4);return t?(r||new YC.Tensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}initializersLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}nodeArgs(e,r){let t=this.bb.__offset(this.bb_pos,6);return t?(r||new ZC.ValueInfo).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}nodeArgsLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}nodes(e,r){let t=this.bb.__offset(this.bb_pos,8);return t?(r||new HC.Node).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}nodesLength(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.__vector_len(this.bb_pos+e):0}maxNodeIndex(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readUint32(this.bb_pos+e):0}nodeEdges(e,r){let t=this.bb.__offset(this.bb_pos,12);return t?(r||new qC.NodeEdge).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}nodeEdgesLength(){let e=this.bb.__offset(this.bb_pos,12);return e?this.bb.__vector_len(this.bb_pos+e):0}inputs(e,r){let t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__string(this.bb.__vector(this.bb_pos+t)+e*4,r):null}inputsLength(){let e=this.bb.__offset(this.bb_pos,14);return e?this.bb.__vector_len(this.bb_pos+e):0}outputs(e,r){let t=this.bb.__offset(this.bb_pos,16);return t?this.bb.__string(this.bb.__vector(this.bb_pos+t)+e*4,r):null}outputsLength(){let e=this.bb.__offset(this.bb_pos,16);return e?this.bb.__vector_len(this.bb_pos+e):0}sparseInitializers(e,r){let t=this.bb.__offset(this.bb_pos,18);return t?(r||new XC.SparseTensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}sparseInitializersLength(){let e=this.bb.__offset(this.bb_pos,18);return e?this.bb.__vector_len(this.bb_pos+e):0}runtimeOptimizations(e){let r=this.bb.__offset(this.bb_pos,20);return r?(e||new KC.RuntimeOptimizations).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}static startGraph(e){e.startObject(9)}static addInitializers(e,r){e.addFieldOffset(0,r,0)}static createInitializersVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startInitializersVector(e,r){e.startVector(4,r,4)}static addNodeArgs(e,r){e.addFieldOffset(1,r,0)}static createNodeArgsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startNodeArgsVector(e,r){e.startVector(4,r,4)}static addNodes(e,r){e.addFieldOffset(2,r,0)}static createNodesVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startNodesVector(e,r){e.startVector(4,r,4)}static addMaxNodeIndex(e,r){e.addFieldInt32(3,r,0)}static addNodeEdges(e,r){e.addFieldOffset(4,r,0)}static createNodeEdgesVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startNodeEdgesVector(e,r){e.startVector(4,r,4)}static addInputs(e,r){e.addFieldOffset(5,r,0)}static createInputsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startInputsVector(e,r){e.startVector(4,r,4)}static addOutputs(e,r){e.addFieldOffset(6,r,0)}static createOutputsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startOutputsVector(e,r){e.startVector(4,r,4)}static addSparseInitializers(e,r){e.addFieldOffset(7,r,0)}static createSparseInitializersVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startSparseInitializersVector(e,r){e.startVector(4,r,4)}static addRuntimeOptimizations(e,r){e.addFieldOffset(8,r,0)}static endGraph(e){return e.endObject()}};Cr.Graph=Bu});var au=he(Er=>{"use strict";var JC=Er&&Er.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),QC=Er&&Er.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),e3=Er&&Er.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&JC(e,n,r);return QC(e,n),e};Object.defineProperty(Er,"__esModule",{value:!0});Er.Attribute=void 0;var t3=e3(We()),ty=ru(),ry=zi(),ny=Po(),Fu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsAttribute(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsAttribute(e,r){return e.setPosition(e.position()+t3.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}name(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}docString(e){let r=this.bb.__offset(this.bb_pos,6);return r?this.bb.__string(this.bb_pos+r,e):null}type(){let e=this.bb.__offset(this.bb_pos,8);return e?this.bb.readInt32(this.bb_pos+e):ty.AttributeType.UNDEFINED}f(){let e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readFloat32(this.bb_pos+e):0}i(){let e=this.bb.__offset(this.bb_pos,12);return e?this.bb.readInt64(this.bb_pos+e):BigInt("0")}s(e){let r=this.bb.__offset(this.bb_pos,14);return r?this.bb.__string(this.bb_pos+r,e):null}t(e){let r=this.bb.__offset(this.bb_pos,16);return r?(e||new ny.Tensor).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}g(e){let r=this.bb.__offset(this.bb_pos,18);return r?(e||new ry.Graph).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}floats(e){let r=this.bb.__offset(this.bb_pos,20);return r?this.bb.readFloat32(this.bb.__vector(this.bb_pos+r)+e*4):0}floatsLength(){let e=this.bb.__offset(this.bb_pos,20);return e?this.bb.__vector_len(this.bb_pos+e):0}floatsArray(){let e=this.bb.__offset(this.bb_pos,20);return e?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}ints(e){let r=this.bb.__offset(this.bb_pos,22);return r?this.bb.readInt64(this.bb.__vector(this.bb_pos+r)+e*8):BigInt(0)}intsLength(){let e=this.bb.__offset(this.bb_pos,22);return e?this.bb.__vector_len(this.bb_pos+e):0}strings(e,r){let t=this.bb.__offset(this.bb_pos,24);return t?this.bb.__string(this.bb.__vector(this.bb_pos+t)+e*4,r):null}stringsLength(){let e=this.bb.__offset(this.bb_pos,24);return e?this.bb.__vector_len(this.bb_pos+e):0}tensors(e,r){let t=this.bb.__offset(this.bb_pos,26);return t?(r||new ny.Tensor).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}tensorsLength(){let e=this.bb.__offset(this.bb_pos,26);return e?this.bb.__vector_len(this.bb_pos+e):0}graphs(e,r){let t=this.bb.__offset(this.bb_pos,28);return t?(r||new ry.Graph).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}graphsLength(){let e=this.bb.__offset(this.bb_pos,28);return e?this.bb.__vector_len(this.bb_pos+e):0}static startAttribute(e){e.startObject(13)}static addName(e,r){e.addFieldOffset(0,r,0)}static addDocString(e,r){e.addFieldOffset(1,r,0)}static addType(e,r){e.addFieldInt32(2,r,ty.AttributeType.UNDEFINED)}static addF(e,r){e.addFieldFloat32(3,r,0)}static addI(e,r){e.addFieldInt64(4,r,BigInt("0"))}static addS(e,r){e.addFieldOffset(5,r,0)}static addT(e,r){e.addFieldOffset(6,r,0)}static addG(e,r){e.addFieldOffset(7,r,0)}static addFloats(e,r){e.addFieldOffset(8,r,0)}static createFloatsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addFloat32(r[t]);return e.endVector()}static startFloatsVector(e,r){e.startVector(4,r,4)}static addInts(e,r){e.addFieldOffset(9,r,0)}static createIntsVector(e,r){e.startVector(8,r.length,8);for(let t=r.length-1;t>=0;t--)e.addInt64(r[t]);return e.endVector()}static startIntsVector(e,r){e.startVector(8,r,8)}static addStrings(e,r){e.addFieldOffset(10,r,0)}static createStringsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startStringsVector(e,r){e.startVector(4,r,4)}static addTensors(e,r){e.addFieldOffset(11,r,0)}static createTensorsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startTensorsVector(e,r){e.startVector(4,r,4)}static addGraphs(e,r){e.addFieldOffset(12,r,0)}static createGraphsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startGraphsVector(e,r){e.startVector(4,r,4)}static endAttribute(e){return e.endObject()}};Er.Attribute=Fu});var Gu=he(Dr=>{"use strict";var r3=Dr&&Dr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),n3=Dr&&Dr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),o3=Dr&&Dr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&r3(e,n,r);return n3(e,n),e};Object.defineProperty(Dr,"__esModule",{value:!0});Dr.DeprecatedKernelCreateInfos=void 0;var i3=o3(We()),Vu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsDeprecatedKernelCreateInfos(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsDeprecatedKernelCreateInfos(e,r){return e.setPosition(e.position()+i3.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}nodeIndices(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.readUint32(this.bb.__vector(this.bb_pos+r)+e*4):0}nodeIndicesLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}nodeIndicesArray(){let e=this.bb.__offset(this.bb_pos,4);return e?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}kernelDefHashes(e){let r=this.bb.__offset(this.bb_pos,6);return r?this.bb.readUint64(this.bb.__vector(this.bb_pos+r)+e*8):BigInt(0)}kernelDefHashesLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}static startDeprecatedKernelCreateInfos(e){e.startObject(2)}static addNodeIndices(e,r){e.addFieldOffset(0,r,0)}static createNodeIndicesVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addInt32(r[t]);return e.endVector()}static startNodeIndicesVector(e,r){e.startVector(4,r,4)}static addKernelDefHashes(e,r){e.addFieldOffset(1,r,0)}static createKernelDefHashesVector(e,r){e.startVector(8,r.length,8);for(let t=r.length-1;t>=0;t--)e.addInt64(r[t]);return e.endVector()}static startKernelDefHashesVector(e,r){e.startVector(8,r,8)}static endDeprecatedKernelCreateInfos(e){return e.endObject()}static createDeprecatedKernelCreateInfos(e,r,t){return n.startDeprecatedKernelCreateInfos(e),n.addNodeIndices(e,r),n.addKernelDefHashes(e,t),n.endDeprecatedKernelCreateInfos(e)}};Dr.DeprecatedKernelCreateInfos=Vu});var oy=he(kr=>{"use strict";var a3=kr&&kr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),s3=kr&&kr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),u3=kr&&kr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&a3(e,n,r);return s3(e,n),e};Object.defineProperty(kr,"__esModule",{value:!0});kr.DeprecatedNodeIndexAndKernelDefHash=void 0;var l3=u3(We()),Uu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsDeprecatedNodeIndexAndKernelDefHash(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsDeprecatedNodeIndexAndKernelDefHash(e,r){return e.setPosition(e.position()+l3.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}nodeIndex(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readUint32(this.bb_pos+e):0}kernelDefHash(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readUint64(this.bb_pos+e):BigInt("0")}static startDeprecatedNodeIndexAndKernelDefHash(e){e.startObject(2)}static addNodeIndex(e,r){e.addFieldInt32(0,r,0)}static addKernelDefHash(e,r){e.addFieldInt64(1,r,BigInt("0"))}static endDeprecatedNodeIndexAndKernelDefHash(e){return e.endObject()}static createDeprecatedNodeIndexAndKernelDefHash(e,r,t){return n.startDeprecatedNodeIndexAndKernelDefHash(e),n.addNodeIndex(e,r),n.addKernelDefHash(e,t),n.endDeprecatedNodeIndexAndKernelDefHash(e)}};kr.DeprecatedNodeIndexAndKernelDefHash=Uu});var Wu=he(Nr=>{"use strict";var c3=Nr&&Nr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),d3=Nr&&Nr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),p3=Nr&&Nr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&c3(e,n,r);return d3(e,n),e};Object.defineProperty(Nr,"__esModule",{value:!0});Nr.DeprecatedSubGraphSessionState=void 0;var f3=p3(We()),h3=Hu(),ju=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsDeprecatedSubGraphSessionState(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsDeprecatedSubGraphSessionState(e,r){return e.setPosition(e.position()+f3.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}graphId(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}sessionState(e){let r=this.bb.__offset(this.bb_pos,6);return r?(e||new h3.DeprecatedSessionState).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}static startDeprecatedSubGraphSessionState(e){e.startObject(2)}static addGraphId(e,r){e.addFieldOffset(0,r,0)}static addSessionState(e,r){e.addFieldOffset(1,r,0)}static endDeprecatedSubGraphSessionState(e){let r=e.endObject();return e.requiredField(r,4),r}};Nr.DeprecatedSubGraphSessionState=ju});var Hu=he(Lr=>{"use strict";var m3=Lr&&Lr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),g3=Lr&&Lr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),y3=Lr&&Lr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&m3(e,n,r);return g3(e,n),e};Object.defineProperty(Lr,"__esModule",{value:!0});Lr.DeprecatedSessionState=void 0;var b3=y3(We()),_3=Gu(),v3=Wu(),qu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsDeprecatedSessionState(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsDeprecatedSessionState(e,r){return e.setPosition(e.position()+b3.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}kernels(e){let r=this.bb.__offset(this.bb_pos,4);return r?(e||new _3.DeprecatedKernelCreateInfos).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}subGraphSessionStates(e,r){let t=this.bb.__offset(this.bb_pos,6);return t?(r||new v3.DeprecatedSubGraphSessionState).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}subGraphSessionStatesLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}static startDeprecatedSessionState(e){e.startObject(2)}static addKernels(e,r){e.addFieldOffset(0,r,0)}static addSubGraphSessionStates(e,r){e.addFieldOffset(1,r,0)}static createSubGraphSessionStatesVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startSubGraphSessionStatesVector(e,r){e.startVector(4,r,4)}static endDeprecatedSessionState(e){return e.endObject()}static createDeprecatedSessionState(e,r,t){return n.startDeprecatedSessionState(e),n.addKernels(e,r),n.addSubGraphSessionStates(e,t),n.endDeprecatedSessionState(e)}};Lr.DeprecatedSessionState=qu});var Xu=he(Rr=>{"use strict";var w3=Rr&&Rr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),x3=Rr&&Rr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),T3=Rr&&Rr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&w3(e,n,r);return x3(e,n),e};Object.defineProperty(Rr,"__esModule",{value:!0});Rr.KernelTypeStrArgsEntry=void 0;var I3=T3(We()),S3=tu(),Ku=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsKernelTypeStrArgsEntry(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsKernelTypeStrArgsEntry(e,r){return e.setPosition(e.position()+I3.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}kernelTypeStr(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}args(e,r){let t=this.bb.__offset(this.bb_pos,6);return t?(r||new S3.ArgTypeAndIndex).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}argsLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}static startKernelTypeStrArgsEntry(e){e.startObject(2)}static addKernelTypeStr(e,r){e.addFieldOffset(0,r,0)}static addArgs(e,r){e.addFieldOffset(1,r,0)}static createArgsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startArgsVector(e,r){e.startVector(4,r,4)}static endKernelTypeStrArgsEntry(e){let r=e.endObject();return e.requiredField(r,4),r}static createKernelTypeStrArgsEntry(e,r,t){return n.startKernelTypeStrArgsEntry(e),n.addKernelTypeStr(e,r),n.addArgs(e,t),n.endKernelTypeStrArgsEntry(e)}};Rr.KernelTypeStrArgsEntry=Ku});var Zu=he(zr=>{"use strict";var $3=zr&&zr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),A3=zr&&zr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),O3=zr&&zr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&$3(e,n,r);return A3(e,n),e};Object.defineProperty(zr,"__esModule",{value:!0});zr.OpIdKernelTypeStrArgsEntry=void 0;var P3=O3(We()),C3=Xu(),Yu=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsOpIdKernelTypeStrArgsEntry(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsOpIdKernelTypeStrArgsEntry(e,r){return e.setPosition(e.position()+P3.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}opId(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}kernelTypeStrArgs(e,r){let t=this.bb.__offset(this.bb_pos,6);return t?(r||new C3.KernelTypeStrArgsEntry).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}kernelTypeStrArgsLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}static startOpIdKernelTypeStrArgsEntry(e){e.startObject(2)}static addOpId(e,r){e.addFieldOffset(0,r,0)}static addKernelTypeStrArgs(e,r){e.addFieldOffset(1,r,0)}static createKernelTypeStrArgsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startKernelTypeStrArgsVector(e,r){e.startVector(4,r,4)}static endOpIdKernelTypeStrArgsEntry(e){let r=e.endObject();return e.requiredField(r,4),r}static createOpIdKernelTypeStrArgsEntry(e,r,t){return n.startOpIdKernelTypeStrArgsEntry(e),n.addOpId(e,r),n.addKernelTypeStrArgs(e,t),n.endOpIdKernelTypeStrArgsEntry(e)}};zr.OpIdKernelTypeStrArgsEntry=Yu});var Qu=he(Mr=>{"use strict";var E3=Mr&&Mr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),D3=Mr&&Mr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),k3=Mr&&Mr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&E3(e,n,r);return D3(e,n),e};Object.defineProperty(Mr,"__esModule",{value:!0});Mr.KernelTypeStrResolver=void 0;var N3=k3(We()),L3=Zu(),Ju=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsKernelTypeStrResolver(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsKernelTypeStrResolver(e,r){return e.setPosition(e.position()+N3.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}opKernelTypeStrArgs(e,r){let t=this.bb.__offset(this.bb_pos,4);return t?(r||new L3.OpIdKernelTypeStrArgsEntry).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}opKernelTypeStrArgsLength(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.__vector_len(this.bb_pos+e):0}static startKernelTypeStrResolver(e){e.startObject(1)}static addOpKernelTypeStrArgs(e,r){e.addFieldOffset(0,r,0)}static createOpKernelTypeStrArgsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startOpKernelTypeStrArgsVector(e,r){e.startVector(4,r,4)}static endKernelTypeStrResolver(e){return e.endObject()}static createKernelTypeStrResolver(e,r){return n.startKernelTypeStrResolver(e),n.addOpKernelTypeStrArgs(e,r),n.endKernelTypeStrResolver(e)}};Mr.KernelTypeStrResolver=Ju});var tl=he(Br=>{"use strict";var R3=Br&&Br.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),z3=Br&&Br.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),M3=Br&&Br.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&R3(e,n,r);return z3(e,n),e};Object.defineProperty(Br,"__esModule",{value:!0});Br.OperatorSetId=void 0;var B3=M3(We()),el=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsOperatorSetId(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsOperatorSetId(e,r){return e.setPosition(e.position()+B3.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}domain(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}version(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readInt64(this.bb_pos+e):BigInt("0")}static startOperatorSetId(e){e.startObject(2)}static addDomain(e,r){e.addFieldOffset(0,r,0)}static addVersion(e,r){e.addFieldInt64(1,r,BigInt("0"))}static endOperatorSetId(e){return e.endObject()}static createOperatorSetId(e,r,t){return n.startOperatorSetId(e),n.addDomain(e,r),n.addVersion(e,t),n.endOperatorSetId(e)}};Br.OperatorSetId=el});var nl=he(Fr=>{"use strict";var F3=Fr&&Fr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),V3=Fr&&Fr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),G3=Fr&&Fr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&F3(e,n,r);return V3(e,n),e};Object.defineProperty(Fr,"__esModule",{value:!0});Fr.StringStringEntry=void 0;var U3=G3(We()),rl=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsStringStringEntry(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsStringStringEntry(e,r){return e.setPosition(e.position()+U3.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}key(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}value(e){let r=this.bb.__offset(this.bb_pos,6);return r?this.bb.__string(this.bb_pos+r,e):null}static startStringStringEntry(e){e.startObject(2)}static addKey(e,r){e.addFieldOffset(0,r,0)}static addValue(e,r){e.addFieldOffset(1,r,0)}static endStringStringEntry(e){return e.endObject()}static createStringStringEntry(e,r,t){return n.startStringStringEntry(e),n.addKey(e,r),n.addValue(e,t),n.endStringStringEntry(e)}};Fr.StringStringEntry=rl});var il=he(Vr=>{"use strict";var j3=Vr&&Vr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),W3=Vr&&Vr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),H3=Vr&&Vr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&j3(e,n,r);return W3(e,n),e};Object.defineProperty(Vr,"__esModule",{value:!0});Vr.Model=void 0;var q3=H3(We()),K3=zi(),X3=tl(),Y3=nl(),ol=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsModel(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsModel(e,r){return e.setPosition(e.position()+q3.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}irVersion(){let e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt64(this.bb_pos+e):BigInt("0")}opsetImport(e,r){let t=this.bb.__offset(this.bb_pos,6);return t?(r||new X3.OperatorSetId).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}opsetImportLength(){let e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__vector_len(this.bb_pos+e):0}producerName(e){let r=this.bb.__offset(this.bb_pos,8);return r?this.bb.__string(this.bb_pos+r,e):null}producerVersion(e){let r=this.bb.__offset(this.bb_pos,10);return r?this.bb.__string(this.bb_pos+r,e):null}domain(e){let r=this.bb.__offset(this.bb_pos,12);return r?this.bb.__string(this.bb_pos+r,e):null}modelVersion(){let e=this.bb.__offset(this.bb_pos,14);return e?this.bb.readInt64(this.bb_pos+e):BigInt("0")}docString(e){let r=this.bb.__offset(this.bb_pos,16);return r?this.bb.__string(this.bb_pos+r,e):null}graph(e){let r=this.bb.__offset(this.bb_pos,18);return r?(e||new K3.Graph).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}graphDocString(e){let r=this.bb.__offset(this.bb_pos,20);return r?this.bb.__string(this.bb_pos+r,e):null}metadataProps(e,r){let t=this.bb.__offset(this.bb_pos,22);return t?(r||new Y3.StringStringEntry).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+t)+e*4),this.bb):null}metadataPropsLength(){let e=this.bb.__offset(this.bb_pos,22);return e?this.bb.__vector_len(this.bb_pos+e):0}static startModel(e){e.startObject(10)}static addIrVersion(e,r){e.addFieldInt64(0,r,BigInt("0"))}static addOpsetImport(e,r){e.addFieldOffset(1,r,0)}static createOpsetImportVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startOpsetImportVector(e,r){e.startVector(4,r,4)}static addProducerName(e,r){e.addFieldOffset(2,r,0)}static addProducerVersion(e,r){e.addFieldOffset(3,r,0)}static addDomain(e,r){e.addFieldOffset(4,r,0)}static addModelVersion(e,r){e.addFieldInt64(5,r,BigInt("0"))}static addDocString(e,r){e.addFieldOffset(6,r,0)}static addGraph(e,r){e.addFieldOffset(7,r,0)}static addGraphDocString(e,r){e.addFieldOffset(8,r,0)}static addMetadataProps(e,r){e.addFieldOffset(9,r,0)}static createMetadataPropsVector(e,r){e.startVector(4,r.length,4);for(let t=r.length-1;t>=0;t--)e.addOffset(r[t]);return e.endVector()}static startMetadataPropsVector(e,r){e.startVector(4,r,4)}static endModel(e){return e.endObject()}};Vr.Model=ol});var iy=he(Gr=>{"use strict";var Z3=Gr&&Gr.__createBinding||(Object.create?function(n,e,r,t){t===void 0&&(t=r);var o=Object.getOwnPropertyDescriptor(e,r);(!o||("get"in o?!e.__esModule:o.writable||o.configurable))&&(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(n,t,o)}:function(n,e,r,t){t===void 0&&(t=r),n[t]=e[r]}),J3=Gr&&Gr.__setModuleDefault||(Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e}),Q3=Gr&&Gr.__importStar||function(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var r in n)r!=="default"&&Object.prototype.hasOwnProperty.call(n,r)&&Z3(e,n,r);return J3(e,n),e};Object.defineProperty(Gr,"__esModule",{value:!0});Gr.InferenceSession=void 0;var eE=Q3(We()),tE=Qu(),rE=il(),al=class n{constructor(){this.bb=null,this.bb_pos=0}__init(e,r){return this.bb_pos=e,this.bb=r,this}static getRootAsInferenceSession(e,r){return(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsInferenceSession(e,r){return e.setPosition(e.position()+eE.SIZE_PREFIX_LENGTH),(r||new n).__init(e.readInt32(e.position())+e.position(),e)}static bufferHasIdentifier(e){return e.__has_identifier("ORTM")}ortVersion(e){let r=this.bb.__offset(this.bb_pos,4);return r?this.bb.__string(this.bb_pos+r,e):null}model(e){let r=this.bb.__offset(this.bb_pos,6);return r?(e||new rE.Model).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}kernelTypeStrResolver(e){let r=this.bb.__offset(this.bb_pos,10);return r?(e||new tE.KernelTypeStrResolver).__init(this.bb.__indirect(this.bb_pos+r),this.bb):null}static startInferenceSession(e){e.startObject(4)}static addOrtVersion(e,r){e.addFieldOffset(0,r,0)}static addModel(e,r){e.addFieldOffset(1,r,0)}static addKernelTypeStrResolver(e,r){e.addFieldOffset(3,r,0)}static endInferenceSession(e){return e.endObject()}static finishInferenceSessionBuffer(e,r){e.finish(r,"ORTM")}static finishSizePrefixedInferenceSessionBuffer(e,r){e.finish(r,"ORTM",!0)}};Gr.InferenceSession=al});var nE,oE,Mi,Ut,iE,aE,sE,uE,lE,cE,dE,pE,sl,ul,fE,hE,mE,gE,ll,yE,bE,_E,vE,wE,xE,TE,IE,SE,$E,AE,OE,PE,Eo,cl,CE,dl,EE,ay=j(()=>{"use strict";nE=Pe(Ks()),oE=Pe(tu()),Mi=Pe(au()),Ut=Pe(ru()),iE=Pe(Gu()),aE=Pe(oy()),sE=Pe(Hu()),uE=Pe(Wu()),lE=Pe(Cu()),cE=Pe(Ou()),dE=Pe($u()),pE=Pe(uu()),sl=Pe(zi()),ul=Pe(iy()),fE=Pe(Xu()),hE=Pe(Qu()),mE=Pe(Tu()),gE=Pe(il()),ll=Pe(iu()),yE=Pe(cu()),bE=Pe(nu()),_E=Pe(pu()),vE=Pe(Zu()),wE=Pe(tl()),xE=Pe(hu()),TE=Pe(gu()),IE=Pe(bu()),SE=Pe(Su()),$E=Pe(Du()),AE=Pe(wu()),OE=Pe(nl()),PE=Pe(Po()),Eo=Pe(Oo()),cl=Pe(Nu()),CE=Pe(Co()),dl=Pe(Lu()),EE=Pe(Mu())});var Do=j(()=>{"use strict";ay()});var uy=he((aB,sy)=>{"use strict";sy.exports=DE;function DE(n,e){for(var r=new Array(arguments.length-1),t=0,o=2,i=!0;o<arguments.length;)r[t++]=arguments[o++];return new Promise(function(u,c){r[t]=function(m){if(i)if(i=!1,m)c(m);else{for(var y=new Array(arguments.length-1),_=0;_<y.length;)y[_++]=arguments[_];u.apply(null,y)}};try{n.apply(e||null,r)}catch(f){i&&(i=!1,c(f))}})}});var py=he(dy=>{"use strict";var Fi=dy;Fi.length=function(e){var r=e.length;if(!r)return 0;for(var t=0;--r%4>1&&e.charAt(r)==="=";)++t;return Math.ceil(e.length*3)/4-t};var no=new Array(64),cy=new Array(123);for(Qt=0;Qt<64;)cy[no[Qt]=Qt<26?Qt+65:Qt<52?Qt+71:Qt<62?Qt-4:Qt-59|43]=Qt++;var Qt;Fi.encode=function(e,r,t){for(var o=null,i=[],a=0,u=0,c;r<t;){var f=e[r++];switch(u){case 0:i[a++]=no[f>>2],c=(f&3)<<4,u=1;break;case 1:i[a++]=no[c|f>>4],c=(f&15)<<2,u=2;break;case 2:i[a++]=no[c|f>>6],i[a++]=no[f&63],u=0;break}a>8191&&((o||(o=[])).push(String.fromCharCode.apply(String,i)),a=0)}return u&&(i[a++]=no[c],i[a++]=61,u===1&&(i[a++]=61)),o?(a&&o.push(String.fromCharCode.apply(String,i.slice(0,a))),o.join("")):String.fromCharCode.apply(String,i.slice(0,a))};var ly="invalid encoding";Fi.decode=function(e,r,t){for(var o=t,i=0,a,u=0;u<e.length;){var c=e.charCodeAt(u++);if(c===61&&i>1)break;if((c=cy[c])===void 0)throw Error(ly);switch(i){case 0:a=c,i=1;break;case 1:r[t++]=a<<2|(c&48)>>4,a=c,i=2;break;case 2:r[t++]=(a&15)<<4|(c&60)>>2,a=c,i=3;break;case 3:r[t++]=(a&3)<<6|c,i=0;break}}if(i===1)throw Error(ly);return t-o};Fi.test=function(e){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)}});var hy=he((uB,fy)=>{"use strict";fy.exports=Vi;function Vi(){this._listeners={}}Vi.prototype.on=function(e,r,t){return(this._listeners[e]||(this._listeners[e]=[])).push({fn:r,ctx:t||this}),this};Vi.prototype.off=function(e,r){if(e===void 0)this._listeners={};else if(r===void 0)this._listeners[e]=[];else for(var t=this._listeners[e],o=0;o<t.length;)t[o].fn===r?t.splice(o,1):++o;return this};Vi.prototype.emit=function(e){var r=this._listeners[e];if(r){for(var t=[],o=1;o<arguments.length;)t.push(arguments[o++]);for(o=0;o<r.length;)r[o].fn.apply(r[o++].ctx,t)}return this}});var wy=he((lB,vy)=>{"use strict";vy.exports=my(my);function my(n){return typeof Float32Array<"u"?function(){var e=new Float32Array([-0]),r=new Uint8Array(e.buffer),t=r[3]===128;function o(c,f,m){e[0]=c,f[m]=r[0],f[m+1]=r[1],f[m+2]=r[2],f[m+3]=r[3]}function i(c,f,m){e[0]=c,f[m]=r[3],f[m+1]=r[2],f[m+2]=r[1],f[m+3]=r[0]}n.writeFloatLE=t?o:i,n.writeFloatBE=t?i:o;function a(c,f){return r[0]=c[f],r[1]=c[f+1],r[2]=c[f+2],r[3]=c[f+3],e[0]}function u(c,f){return r[3]=c[f],r[2]=c[f+1],r[1]=c[f+2],r[0]=c[f+3],e[0]}n.readFloatLE=t?a:u,n.readFloatBE=t?u:a}():function(){function e(t,o,i,a){var u=o<0?1:0;if(u&&(o=-o),o===0)t(1/o>0?0:2147483648,i,a);else if(isNaN(o))t(2143289344,i,a);else if(o>34028234663852886e22)t((u<<31|2139095040)>>>0,i,a);else if(o<11754943508222875e-54)t((u<<31|Math.round(o/1401298464324817e-60))>>>0,i,a);else{var c=Math.floor(Math.log(o)/Math.LN2),f=Math.round(o*Math.pow(2,-c)*8388608)&8388607;t((u<<31|c+127<<23|f)>>>0,i,a)}}n.writeFloatLE=e.bind(null,gy),n.writeFloatBE=e.bind(null,yy);function r(t,o,i){var a=t(o,i),u=(a>>31)*2+1,c=a>>>23&255,f=a&8388607;return c===255?f?NaN:u*(1/0):c===0?u*1401298464324817e-60*f:u*Math.pow(2,c-150)*(f+8388608)}n.readFloatLE=r.bind(null,by),n.readFloatBE=r.bind(null,_y)}(),typeof Float64Array<"u"?function(){var e=new Float64Array([-0]),r=new Uint8Array(e.buffer),t=r[7]===128;function o(c,f,m){e[0]=c,f[m]=r[0],f[m+1]=r[1],f[m+2]=r[2],f[m+3]=r[3],f[m+4]=r[4],f[m+5]=r[5],f[m+6]=r[6],f[m+7]=r[7]}function i(c,f,m){e[0]=c,f[m]=r[7],f[m+1]=r[6],f[m+2]=r[5],f[m+3]=r[4],f[m+4]=r[3],f[m+5]=r[2],f[m+6]=r[1],f[m+7]=r[0]}n.writeDoubleLE=t?o:i,n.writeDoubleBE=t?i:o;function a(c,f){return r[0]=c[f],r[1]=c[f+1],r[2]=c[f+2],r[3]=c[f+3],r[4]=c[f+4],r[5]=c[f+5],r[6]=c[f+6],r[7]=c[f+7],e[0]}function u(c,f){return r[7]=c[f],r[6]=c[f+1],r[5]=c[f+2],r[4]=c[f+3],r[3]=c[f+4],r[2]=c[f+5],r[1]=c[f+6],r[0]=c[f+7],e[0]}n.readDoubleLE=t?a:u,n.readDoubleBE=t?u:a}():function(){function e(t,o,i,a,u,c){var f=a<0?1:0;if(f&&(a=-a),a===0)t(0,u,c+o),t(1/a>0?0:2147483648,u,c+i);else if(isNaN(a))t(0,u,c+o),t(2146959360,u,c+i);else if(a>17976931348623157e292)t(0,u,c+o),t((f<<31|2146435072)>>>0,u,c+i);else{var m;if(a<22250738585072014e-324)m=a/5e-324,t(m>>>0,u,c+o),t((f<<31|m/4294967296)>>>0,u,c+i);else{var y=Math.floor(Math.log(a)/Math.LN2);y===1024&&(y=1023),m=a*Math.pow(2,-y),t(m*4503599627370496>>>0,u,c+o),t((f<<31|y+1023<<20|m*1048576&1048575)>>>0,u,c+i)}}}n.writeDoubleLE=e.bind(null,gy,0,4),n.writeDoubleBE=e.bind(null,yy,4,0);function r(t,o,i,a,u){var c=t(a,u+o),f=t(a,u+i),m=(f>>31)*2+1,y=f>>>20&2047,_=4294967296*(f&1048575)+c;return y===2047?_?NaN:m*(1/0):y===0?m*5e-324*_:m*Math.pow(2,y-1075)*(_+4503599627370496)}n.readDoubleLE=r.bind(null,by,0,4),n.readDoubleBE=r.bind(null,_y,4,0)}(),n}function gy(n,e,r){e[r]=n&255,e[r+1]=n>>>8&255,e[r+2]=n>>>16&255,e[r+3]=n>>>24}function yy(n,e,r){e[r]=n>>>24,e[r+1]=n>>>16&255,e[r+2]=n>>>8&255,e[r+3]=n&255}function by(n,e){return(n[e]|n[e+1]<<8|n[e+2]<<16|n[e+3]<<24)>>>0}function _y(n,e){return(n[e]<<24|n[e+1]<<16|n[e+2]<<8|n[e+3])>>>0}});var xy=he((exports,module)=>{"use strict";module.exports=inquire;function inquire(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch(n){}return null}});var Iy=he(Ty=>{"use strict";var pl=Ty;pl.length=function(e){for(var r=0,t=0,o=0;o<e.length;++o)t=e.charCodeAt(o),t<128?r+=1:t<2048?r+=2:(t&64512)===55296&&(e.charCodeAt(o+1)&64512)===56320?(++o,r+=4):r+=3;return r};pl.read=function(e,r,t){var o=t-r;if(o<1)return"";for(var i=null,a=[],u=0,c;r<t;)c=e[r++],c<128?a[u++]=c:c>191&&c<224?a[u++]=(c&31)<<6|e[r++]&63:c>239&&c<365?(c=((c&7)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,a[u++]=55296+(c>>10),a[u++]=56320+(c&1023)):a[u++]=(c&15)<<12|(e[r++]&63)<<6|e[r++]&63,u>8191&&((i||(i=[])).push(String.fromCharCode.apply(String,a)),u=0);return i?(u&&i.push(String.fromCharCode.apply(String,a.slice(0,u))),i.join("")):String.fromCharCode.apply(String,a.slice(0,u))};pl.write=function(e,r,t){for(var o=t,i,a,u=0;u<e.length;++u)i=e.charCodeAt(u),i<128?r[t++]=i:i<2048?(r[t++]=i>>6|192,r[t++]=i&63|128):(i&64512)===55296&&((a=e.charCodeAt(u+1))&64512)===56320?(i=65536+((i&1023)<<10)+(a&1023),++u,r[t++]=i>>18|240,r[t++]=i>>12&63|128,r[t++]=i>>6&63|128,r[t++]=i&63|128):(r[t++]=i>>12|224,r[t++]=i>>6&63|128,r[t++]=i&63|128);return t-o}});var $y=he((dB,Sy)=>{"use strict";Sy.exports=kE;function kE(n,e,r){var t=r||8192,o=t>>>1,i=null,a=t;return function(c){if(c<1||c>o)return n(c);a+c>t&&(i=n(t),a=0);var f=e.call(i,a,a+=c);return a&7&&(a=(a|7)+1),f}}});var Oy=he((pB,Ay)=>{"use strict";Ay.exports=bt;var ko=_n();function bt(n,e){this.lo=n>>>0,this.hi=e>>>0}var Nn=bt.zero=new bt(0,0);Nn.toNumber=function(){return 0};Nn.zzEncode=Nn.zzDecode=function(){return this};Nn.length=function(){return 1};var NE=bt.zeroHash="\0\0\0\0\0\0\0\0";bt.fromNumber=function(e){if(e===0)return Nn;var r=e<0;r&&(e=-e);var t=e>>>0,o=(e-t)/4294967296>>>0;return r&&(o=~o>>>0,t=~t>>>0,++t>4294967295&&(t=0,++o>4294967295&&(o=0))),new bt(t,o)};bt.from=function(e){if(typeof e=="number")return bt.fromNumber(e);if(ko.isString(e))if(ko.Long)e=ko.Long.fromString(e);else return bt.fromNumber(parseInt(e,10));return e.low||e.high?new bt(e.low>>>0,e.high>>>0):Nn};bt.prototype.toNumber=function(e){if(!e&&this.hi>>>31){var r=~this.lo+1>>>0,t=~this.hi>>>0;return r||(t=t+1>>>0),-(r+t*4294967296)}return this.lo+this.hi*4294967296};bt.prototype.toLong=function(e){return ko.Long?new ko.Long(this.lo|0,this.hi|0,!!e):{low:this.lo|0,high:this.hi|0,unsigned:!!e}};var bn=String.prototype.charCodeAt;bt.fromHash=function(e){return e===NE?Nn:new bt((bn.call(e,0)|bn.call(e,1)<<8|bn.call(e,2)<<16|bn.call(e,3)<<24)>>>0,(bn.call(e,4)|bn.call(e,5)<<8|bn.call(e,6)<<16|bn.call(e,7)<<24)>>>0)};bt.prototype.toHash=function(){return String.fromCharCode(this.lo&255,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,this.hi&255,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)};bt.prototype.zzEncode=function(){var e=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^e)>>>0,this.lo=(this.lo<<1^e)>>>0,this};bt.prototype.zzDecode=function(){var e=-(this.lo&1);return this.lo=((this.lo>>>1|this.hi<<31)^e)>>>0,this.hi=(this.hi>>>1^e)>>>0,this};bt.prototype.length=function(){var e=this.lo,r=(this.lo>>>28|this.hi<<4)>>>0,t=this.hi>>>24;return t===0?r===0?e<16384?e<128?1:2:e<2097152?3:4:r<16384?r<128?5:6:r<2097152?7:8:t<128?9:10}});var _n=he(fl=>{"use strict";var me=fl;me.asPromise=uy();me.base64=py();me.EventEmitter=hy();me.float=wy();me.inquire=xy();me.utf8=Iy();me.pool=$y();me.LongBits=Oy();me.isNode=!!(typeof global<"u"&&global&&global.process&&global.process.versions&&global.process.versions.node);me.global=me.isNode&&global||typeof window<"u"&&window||typeof self<"u"&&self||fl;me.emptyArray=Object.freeze?Object.freeze([]):[];me.emptyObject=Object.freeze?Object.freeze({}):{};me.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};me.isString=function(e){return typeof e=="string"||e instanceof String};me.isObject=function(e){return e&&typeof e=="object"};me.isset=me.isSet=function(e,r){var t=e[r];return t!=null&&e.hasOwnProperty(r)?typeof t!="object"||(Array.isArray(t)?t.length:Object.keys(t).length)>0:!1};me.Buffer=function(){try{var n=me.inquire("buffer").Buffer;return n.prototype.utf8Write?n:null}catch{return null}}();me._Buffer_from=null;me._Buffer_allocUnsafe=null;me.newBuffer=function(e){return typeof e=="number"?me.Buffer?me._Buffer_allocUnsafe(e):new me.Array(e):me.Buffer?me._Buffer_from(e):typeof Uint8Array>"u"?e:new Uint8Array(e)};me.Array=typeof Uint8Array<"u"?Uint8Array:Array;me.Long=me.global.dcodeIO&&me.global.dcodeIO.Long||me.global.Long||me.inquire("long");me.key2Re=/^true|false|0|1$/;me.key32Re=/^-?(?:0|[1-9][0-9]*)$/;me.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;me.longToHash=function(e){return e?me.LongBits.from(e).toHash():me.LongBits.zeroHash};me.longFromHash=function(e,r){var t=me.LongBits.fromHash(e);return me.Long?me.Long.fromBits(t.lo,t.hi,r):t.toNumber(!!r)};function Py(n,e,r){for(var t=Object.keys(e),o=0;o<t.length;++o)(n[t[o]]===void 0||!r)&&(n[t[o]]=e[t[o]]);return n}me.merge=Py;me.lcFirst=function(e){return e.charAt(0).toLowerCase()+e.substring(1)};function Cy(n){function e(r,t){if(!(this instanceof e))return new e(r,t);Object.defineProperty(this,"message",{get:function(){return r}}),Error.captureStackTrace?Error.captureStackTrace(this,e):Object.defineProperty(this,"stack",{value:new Error().stack||""}),t&&Py(this,t)}return e.prototype=Object.create(Error.prototype,{constructor:{value:e,writable:!0,enumerable:!1,configurable:!0},name:{get:function(){return n},set:void 0,enumerable:!1,configurable:!0},toString:{value:function(){return this.name+": "+this.message},writable:!0,enumerable:!1,configurable:!0}}),e}me.newError=Cy;me.ProtocolError=Cy("ProtocolError");me.oneOfGetter=function(e){for(var r={},t=0;t<e.length;++t)r[e[t]]=1;return function(){for(var o=Object.keys(this),i=o.length-1;i>-1;--i)if(r[o[i]]===1&&this[o[i]]!==void 0&&this[o[i]]!==null)return o[i]}};me.oneOfSetter=function(e){return function(r){for(var t=0;t<e.length;++t)e[t]!==r&&delete this[e[t]]}};me.toJSONOptions={longs:String,enums:String,bytes:String,json:!0};me._configure=function(){var n=me.Buffer;if(!n){me._Buffer_from=me._Buffer_allocUnsafe=null;return}me._Buffer_from=n.from!==Uint8Array.from&&n.from||function(r,t){return new n(r,t)},me._Buffer_allocUnsafe=n.allocUnsafe||function(r){return new n(r)}}});var vl=he((hB,Ny)=>{"use strict";Ny.exports=Fe;var jt=_n(),hl,Gi=jt.LongBits,Ey=jt.base64,Dy=jt.utf8;function No(n,e,r){this.fn=n,this.len=e,this.next=void 0,this.val=r}function gl(){}function LE(n){this.head=n.head,this.tail=n.tail,this.len=n.len,this.next=n.states}function Fe(){this.len=0,this.head=new No(gl,0,0),this.tail=this.head,this.states=null}var ky=function(){return jt.Buffer?function(){return(Fe.create=function(){return new hl})()}:function(){return new Fe}};Fe.create=ky();Fe.alloc=function(e){return new jt.Array(e)};jt.Array!==Array&&(Fe.alloc=jt.pool(Fe.alloc,jt.Array.prototype.subarray));Fe.prototype._push=function(e,r,t){return this.tail=this.tail.next=new No(e,r,t),this.len+=r,this};function yl(n,e,r){e[r]=n&255}function RE(n,e,r){for(;n>127;)e[r++]=n&127|128,n>>>=7;e[r]=n}function bl(n,e){this.len=n,this.next=void 0,this.val=e}bl.prototype=Object.create(No.prototype);bl.prototype.fn=RE;Fe.prototype.uint32=function(e){return this.len+=(this.tail=this.tail.next=new bl((e=e>>>0)<128?1:e<16384?2:e<2097152?3:e<268435456?4:5,e)).len,this};Fe.prototype.int32=function(e){return e<0?this._push(_l,10,Gi.fromNumber(e)):this.uint32(e)};Fe.prototype.sint32=function(e){return this.uint32((e<<1^e>>31)>>>0)};function _l(n,e,r){for(;n.hi;)e[r++]=n.lo&127|128,n.lo=(n.lo>>>7|n.hi<<25)>>>0,n.hi>>>=7;for(;n.lo>127;)e[r++]=n.lo&127|128,n.lo=n.lo>>>7;e[r++]=n.lo}Fe.prototype.uint64=function(e){var r=Gi.from(e);return this._push(_l,r.length(),r)};Fe.prototype.int64=Fe.prototype.uint64;Fe.prototype.sint64=function(e){var r=Gi.from(e).zzEncode();return this._push(_l,r.length(),r)};Fe.prototype.bool=function(e){return this._push(yl,1,e?1:0)};function ml(n,e,r){e[r]=n&255,e[r+1]=n>>>8&255,e[r+2]=n>>>16&255,e[r+3]=n>>>24}Fe.prototype.fixed32=function(e){return this._push(ml,4,e>>>0)};Fe.prototype.sfixed32=Fe.prototype.fixed32;Fe.prototype.fixed64=function(e){var r=Gi.from(e);return this._push(ml,4,r.lo)._push(ml,4,r.hi)};Fe.prototype.sfixed64=Fe.prototype.fixed64;Fe.prototype.float=function(e){return this._push(jt.float.writeFloatLE,4,e)};Fe.prototype.double=function(e){return this._push(jt.float.writeDoubleLE,8,e)};var zE=jt.Array.prototype.set?function(e,r,t){r.set(e,t)}:function(e,r,t){for(var o=0;o<e.length;++o)r[t+o]=e[o]};Fe.prototype.bytes=function(e){var r=e.length>>>0;if(!r)return this._push(yl,1,0);if(jt.isString(e)){var t=Fe.alloc(r=Ey.length(e));Ey.decode(e,t,0),e=t}return this.uint32(r)._push(zE,r,e)};Fe.prototype.string=function(e){var r=Dy.length(e);return r?this.uint32(r)._push(Dy.write,r,e):this._push(yl,1,0)};Fe.prototype.fork=function(){return this.states=new LE(this),this.head=this.tail=new No(gl,0,0),this.len=0,this};Fe.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new No(gl,0,0),this.len=0),this};Fe.prototype.ldelim=function(){var e=this.head,r=this.tail,t=this.len;return this.reset().uint32(t),t&&(this.tail.next=e.next,this.tail=r,this.len+=t),this};Fe.prototype.finish=function(){for(var e=this.head.next,r=this.constructor.alloc(this.len),t=0;e;)e.fn(e.val,r,t),t+=e.len,e=e.next;return r};Fe._configure=function(n){hl=n,Fe.create=ky(),hl._configure()}});var zy=he((mB,Ry)=>{"use strict";Ry.exports=Ur;var Ly=vl();(Ur.prototype=Object.create(Ly.prototype)).constructor=Ur;var vn=_n();function Ur(){Ly.call(this)}Ur._configure=function(){Ur.alloc=vn._Buffer_allocUnsafe,Ur.writeBytesBuffer=vn.Buffer&&vn.Buffer.prototype instanceof Uint8Array&&vn.Buffer.prototype.set.name==="set"?function(e,r,t){r.set(e,t)}:function(e,r,t){if(e.copy)e.copy(r,t,0,e.length);else for(var o=0;o<e.length;)r[t++]=e[o++]}};Ur.prototype.bytes=function(e){vn.isString(e)&&(e=vn._Buffer_from(e,"base64"));var r=e.length>>>0;return this.uint32(r),r&&this._push(Ur.writeBytesBuffer,r,e),this};function ME(n,e,r){n.length<40?vn.utf8.write(n,e,r):e.utf8Write?e.utf8Write(n,r):e.write(n,r)}Ur.prototype.string=function(e){var r=vn.Buffer.byteLength(e);return this.uint32(r),r&&this._push(ME,r,e),this};Ur._configure()});var Tl=he((gB,Gy)=>{"use strict";Gy.exports=st;var er=_n(),xl,Fy=er.LongBits,BE=er.utf8;function tr(n,e){return RangeError("index out of range: "+n.pos+" + "+(e||1)+" > "+n.len)}function st(n){this.buf=n,this.pos=0,this.len=n.length}var My=typeof Uint8Array<"u"?function(e){if(e instanceof Uint8Array||Array.isArray(e))return new st(e);throw Error("illegal buffer")}:function(e){if(Array.isArray(e))return new st(e);throw Error("illegal buffer")},Vy=function(){return er.Buffer?function(r){return(st.create=function(o){return er.Buffer.isBuffer(o)?new xl(o):My(o)})(r)}:My};st.create=Vy();st.prototype._slice=er.Array.prototype.subarray||er.Array.prototype.slice;st.prototype.uint32=function(){var e=4294967295;return function(){if(e=(this.buf[this.pos]&127)>>>0,this.buf[this.pos++]<128||(e=(e|(this.buf[this.pos]&127)<<7)>>>0,this.buf[this.pos++]<128)||(e=(e|(this.buf[this.pos]&127)<<14)>>>0,this.buf[this.pos++]<128)||(e=(e|(this.buf[this.pos]&127)<<21)>>>0,this.buf[this.pos++]<128)||(e=(e|(this.buf[this.pos]&15)<<28)>>>0,this.buf[this.pos++]<128))return e;if((this.pos+=5)>this.len)throw this.pos=this.len,tr(this,10);return e}}();st.prototype.int32=function(){return this.uint32()|0};st.prototype.sint32=function(){var e=this.uint32();return e>>>1^-(e&1)|0};function wl(){var n=new Fy(0,0),e=0;if(this.len-this.pos>4){for(;e<4;++e)if(n.lo=(n.lo|(this.buf[this.pos]&127)<<e*7)>>>0,this.buf[this.pos++]<128)return n;if(n.lo=(n.lo|(this.buf[this.pos]&127)<<28)>>>0,n.hi=(n.hi|(this.buf[this.pos]&127)>>4)>>>0,this.buf[this.pos++]<128)return n;e=0}else{for(;e<3;++e){if(this.pos>=this.len)throw tr(this);if(n.lo=(n.lo|(this.buf[this.pos]&127)<<e*7)>>>0,this.buf[this.pos++]<128)return n}return n.lo=(n.lo|(this.buf[this.pos++]&127)<<e*7)>>>0,n}if(this.len-this.pos>4){for(;e<5;++e)if(n.hi=(n.hi|(this.buf[this.pos]&127)<<e*7+3)>>>0,this.buf[this.pos++]<128)return n}else for(;e<5;++e){if(this.pos>=this.len)throw tr(this);if(n.hi=(n.hi|(this.buf[this.pos]&127)<<e*7+3)>>>0,this.buf[this.pos++]<128)return n}throw Error("invalid varint encoding")}st.prototype.bool=function(){return this.uint32()!==0};function Ui(n,e){return(n[e-4]|n[e-3]<<8|n[e-2]<<16|n[e-1]<<24)>>>0}st.prototype.fixed32=function(){if(this.pos+4>this.len)throw tr(this,4);return Ui(this.buf,this.pos+=4)};st.prototype.sfixed32=function(){if(this.pos+4>this.len)throw tr(this,4);return Ui(this.buf,this.pos+=4)|0};function By(){if(this.pos+8>this.len)throw tr(this,8);return new Fy(Ui(this.buf,this.pos+=4),Ui(this.buf,this.pos+=4))}st.prototype.float=function(){if(this.pos+4>this.len)throw tr(this,4);var e=er.float.readFloatLE(this.buf,this.pos);return this.pos+=4,e};st.prototype.double=function(){if(this.pos+8>this.len)throw tr(this,4);var e=er.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,e};st.prototype.bytes=function(){var e=this.uint32(),r=this.pos,t=this.pos+e;if(t>this.len)throw tr(this,e);if(this.pos+=e,Array.isArray(this.buf))return this.buf.slice(r,t);if(r===t){var o=er.Buffer;return o?o.alloc(0):new this.buf.constructor(0)}return this._slice.call(this.buf,r,t)};st.prototype.string=function(){var e=this.bytes();return BE.read(e,0,e.length)};st.prototype.skip=function(e){if(typeof e=="number"){if(this.pos+e>this.len)throw tr(this,e);this.pos+=e}else do if(this.pos>=this.len)throw tr(this);while(this.buf[this.pos++]&128);return this};st.prototype.skipType=function(n){switch(n){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;(n=this.uint32()&7)!==4;)this.skipType(n);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+n+" at offset "+this.pos)}return this};st._configure=function(n){xl=n,st.create=Vy(),xl._configure();var e=er.Long?"toLong":"toNumber";er.merge(st.prototype,{int64:function(){return wl.call(this)[e](!1)},uint64:function(){return wl.call(this)[e](!0)},sint64:function(){return wl.call(this).zzDecode()[e](!1)},fixed64:function(){return By.call(this)[e](!0)},sfixed64:function(){return By.call(this)[e](!1)}})}});var Hy=he((yB,Wy)=>{"use strict";Wy.exports=Ln;var jy=Tl();(Ln.prototype=Object.create(jy.prototype)).constructor=Ln;var Uy=_n();function Ln(n){jy.call(this,n)}Ln._configure=function(){Uy.Buffer&&(Ln.prototype._slice=Uy.Buffer.prototype.slice)};Ln.prototype.string=function(){var e=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+e,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+e,this.len))};Ln._configure()});var Ky=he((bB,qy)=>{"use strict";qy.exports=Lo;var Il=_n();(Lo.prototype=Object.create(Il.EventEmitter.prototype)).constructor=Lo;function Lo(n,e,r){if(typeof n!="function")throw TypeError("rpcImpl must be a function");Il.EventEmitter.call(this),this.rpcImpl=n,this.requestDelimited=!!e,this.responseDelimited=!!r}Lo.prototype.rpcCall=function n(e,r,t,o,i){if(!o)throw TypeError("request must be specified");var a=this;if(!i)return Il.asPromise(n,a,e,r,t,o);if(!a.rpcImpl){setTimeout(function(){i(Error("already ended"))},0);return}try{return a.rpcImpl(e,r[a.requestDelimited?"encodeDelimited":"encode"](o).finish(),function(c,f){if(c)return a.emit("error",c,e),i(c);if(f===null){a.end(!0);return}if(!(f instanceof t))try{f=t[a.responseDelimited?"decodeDelimited":"decode"](f)}catch(m){return a.emit("error",m,e),i(m)}return a.emit("data",f,e),i(null,f)})}catch(u){a.emit("error",u,e),setTimeout(function(){i(u)},0);return}};Lo.prototype.end=function(e){return this.rpcImpl&&(e||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this}});var Yy=he(Xy=>{"use strict";var FE=Xy;FE.Service=Ky()});var Jy=he((vB,Zy)=>{"use strict";Zy.exports={}});var tb=he(eb=>{"use strict";var Pt=eb;Pt.build="minimal";Pt.Writer=vl();Pt.BufferWriter=zy();Pt.Reader=Tl();Pt.BufferReader=Hy();Pt.util=_n();Pt.rpc=Yy();Pt.roots=Jy();Pt.configure=Qy;function Qy(){Pt.util._configure(),Pt.Writer._configure(Pt.BufferWriter),Pt.Reader._configure(Pt.BufferReader)}Qy()});var nb=he((xB,rb)=>{"use strict";rb.exports=tb()});var oo=he((TB,ob)=>{"use strict";var Je=nb(),oe=Je.Reader,ut=Je.Writer,z=Je.util,E=Je.roots.default||(Je.roots.default={});E.onnx=function(){var n={};return n.Version=function(){var e={},r=Object.create(e);return r[e[0]="_START_VERSION"]=0,r[e[1]="IR_VERSION_2017_10_10"]=1,r[e[2]="IR_VERSION_2017_10_30"]=2,r[e[3]="IR_VERSION_2017_11_3"]=3,r[e[4]="IR_VERSION_2019_1_22"]=4,r[e[5]="IR_VERSION_2019_3_18"]=5,r[e[6]="IR_VERSION_2019_9_19"]=6,r[e[7]="IR_VERSION_2020_5_8"]=7,r[e[8]="IR_VERSION_2021_7_30"]=8,r[e[9]="IR_VERSION"]=9,r}(),n.AttributeProto=function(){function e(r){if(this.floats=[],this.ints=[],this.strings=[],this.tensors=[],this.graphs=[],this.sparseTensors=[],this.typeProtos=[],r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.name="",e.prototype.refAttrName="",e.prototype.docString="",e.prototype.type=0,e.prototype.f=0,e.prototype.i=z.Long?z.Long.fromBits(0,0,!1):0,e.prototype.s=z.newBuffer([]),e.prototype.t=null,e.prototype.g=null,e.prototype.sparseTensor=null,e.prototype.tp=null,e.prototype.floats=z.emptyArray,e.prototype.ints=z.emptyArray,e.prototype.strings=z.emptyArray,e.prototype.tensors=z.emptyArray,e.prototype.graphs=z.emptyArray,e.prototype.sparseTensors=z.emptyArray,e.prototype.typeProtos=z.emptyArray,e.create=function(t){return new e(t)},e.encode=function(t,o){if(o||(o=ut.create()),t.name!=null&&Object.hasOwnProperty.call(t,"name")&&o.uint32(10).string(t.name),t.f!=null&&Object.hasOwnProperty.call(t,"f")&&o.uint32(21).float(t.f),t.i!=null&&Object.hasOwnProperty.call(t,"i")&&o.uint32(24).int64(t.i),t.s!=null&&Object.hasOwnProperty.call(t,"s")&&o.uint32(34).bytes(t.s),t.t!=null&&Object.hasOwnProperty.call(t,"t")&&E.onnx.TensorProto.encode(t.t,o.uint32(42).fork()).ldelim(),t.g!=null&&Object.hasOwnProperty.call(t,"g")&&E.onnx.GraphProto.encode(t.g,o.uint32(50).fork()).ldelim(),t.floats!=null&&t.floats.length){o.uint32(58).fork();for(var i=0;i<t.floats.length;++i)o.float(t.floats[i]);o.ldelim()}if(t.ints!=null&&t.ints.length){o.uint32(66).fork();for(var i=0;i<t.ints.length;++i)o.int64(t.ints[i]);o.ldelim()}if(t.strings!=null&&t.strings.length)for(var i=0;i<t.strings.length;++i)o.uint32(74).bytes(t.strings[i]);if(t.tensors!=null&&t.tensors.length)for(var i=0;i<t.tensors.length;++i)E.onnx.TensorProto.encode(t.tensors[i],o.uint32(82).fork()).ldelim();if(t.graphs!=null&&t.graphs.length)for(var i=0;i<t.graphs.length;++i)E.onnx.GraphProto.encode(t.graphs[i],o.uint32(90).fork()).ldelim();if(t.docString!=null&&Object.hasOwnProperty.call(t,"docString")&&o.uint32(106).string(t.docString),t.tp!=null&&Object.hasOwnProperty.call(t,"tp")&&E.onnx.TypeProto.encode(t.tp,o.uint32(114).fork()).ldelim(),t.typeProtos!=null&&t.typeProtos.length)for(var i=0;i<t.typeProtos.length;++i)E.onnx.TypeProto.encode(t.typeProtos[i],o.uint32(122).fork()).ldelim();if(t.type!=null&&Object.hasOwnProperty.call(t,"type")&&o.uint32(160).int32(t.type),t.refAttrName!=null&&Object.hasOwnProperty.call(t,"refAttrName")&&o.uint32(170).string(t.refAttrName),t.sparseTensor!=null&&Object.hasOwnProperty.call(t,"sparseTensor")&&E.onnx.SparseTensorProto.encode(t.sparseTensor,o.uint32(178).fork()).ldelim(),t.sparseTensors!=null&&t.sparseTensors.length)for(var i=0;i<t.sparseTensors.length;++i)E.onnx.SparseTensorProto.encode(t.sparseTensors[i],o.uint32(186).fork()).ldelim();return o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.AttributeProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.name=t.string();break}case 21:{a.refAttrName=t.string();break}case 13:{a.docString=t.string();break}case 20:{a.type=t.int32();break}case 2:{a.f=t.float();break}case 3:{a.i=t.int64();break}case 4:{a.s=t.bytes();break}case 5:{a.t=E.onnx.TensorProto.decode(t,t.uint32());break}case 6:{a.g=E.onnx.GraphProto.decode(t,t.uint32());break}case 22:{a.sparseTensor=E.onnx.SparseTensorProto.decode(t,t.uint32());break}case 14:{a.tp=E.onnx.TypeProto.decode(t,t.uint32());break}case 7:{if(a.floats&&a.floats.length||(a.floats=[]),(u&7)===2)for(var c=t.uint32()+t.pos;t.pos<c;)a.floats.push(t.float());else a.floats.push(t.float());break}case 8:{if(a.ints&&a.ints.length||(a.ints=[]),(u&7)===2)for(var c=t.uint32()+t.pos;t.pos<c;)a.ints.push(t.int64());else a.ints.push(t.int64());break}case 9:{a.strings&&a.strings.length||(a.strings=[]),a.strings.push(t.bytes());break}case 10:{a.tensors&&a.tensors.length||(a.tensors=[]),a.tensors.push(E.onnx.TensorProto.decode(t,t.uint32()));break}case 11:{a.graphs&&a.graphs.length||(a.graphs=[]),a.graphs.push(E.onnx.GraphProto.decode(t,t.uint32()));break}case 23:{a.sparseTensors&&a.sparseTensors.length||(a.sparseTensors=[]),a.sparseTensors.push(E.onnx.SparseTensorProto.decode(t,t.uint32()));break}case 15:{a.typeProtos&&a.typeProtos.length||(a.typeProtos=[]),a.typeProtos.push(E.onnx.TypeProto.decode(t,t.uint32()));break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.name!=null&&t.hasOwnProperty("name")&&!z.isString(t.name))return"name: string expected";if(t.refAttrName!=null&&t.hasOwnProperty("refAttrName")&&!z.isString(t.refAttrName))return"refAttrName: string expected";if(t.docString!=null&&t.hasOwnProperty("docString")&&!z.isString(t.docString))return"docString: string expected";if(t.type!=null&&t.hasOwnProperty("type"))switch(t.type){default:return"type: enum value expected";case 0:case 1:case 2:case 3:case 4:case 5:case 11:case 13:case 6:case 7:case 8:case 9:case 10:case 12:case 14:break}if(t.f!=null&&t.hasOwnProperty("f")&&typeof t.f!="number")return"f: number expected";if(t.i!=null&&t.hasOwnProperty("i")&&!z.isInteger(t.i)&&!(t.i&&z.isInteger(t.i.low)&&z.isInteger(t.i.high)))return"i: integer|Long expected";if(t.s!=null&&t.hasOwnProperty("s")&&!(t.s&&typeof t.s.length=="number"||z.isString(t.s)))return"s: buffer expected";if(t.t!=null&&t.hasOwnProperty("t")){var o=E.onnx.TensorProto.verify(t.t);if(o)return"t."+o}if(t.g!=null&&t.hasOwnProperty("g")){var o=E.onnx.GraphProto.verify(t.g);if(o)return"g."+o}if(t.sparseTensor!=null&&t.hasOwnProperty("sparseTensor")){var o=E.onnx.SparseTensorProto.verify(t.sparseTensor);if(o)return"sparseTensor."+o}if(t.tp!=null&&t.hasOwnProperty("tp")){var o=E.onnx.TypeProto.verify(t.tp);if(o)return"tp."+o}if(t.floats!=null&&t.hasOwnProperty("floats")){if(!Array.isArray(t.floats))return"floats: array expected";for(var i=0;i<t.floats.length;++i)if(typeof t.floats[i]!="number")return"floats: number[] expected"}if(t.ints!=null&&t.hasOwnProperty("ints")){if(!Array.isArray(t.ints))return"ints: array expected";for(var i=0;i<t.ints.length;++i)if(!z.isInteger(t.ints[i])&&!(t.ints[i]&&z.isInteger(t.ints[i].low)&&z.isInteger(t.ints[i].high)))return"ints: integer|Long[] expected"}if(t.strings!=null&&t.hasOwnProperty("strings")){if(!Array.isArray(t.strings))return"strings: array expected";for(var i=0;i<t.strings.length;++i)if(!(t.strings[i]&&typeof t.strings[i].length=="number"||z.isString(t.strings[i])))return"strings: buffer[] expected"}if(t.tensors!=null&&t.hasOwnProperty("tensors")){if(!Array.isArray(t.tensors))return"tensors: array expected";for(var i=0;i<t.tensors.length;++i){var o=E.onnx.TensorProto.verify(t.tensors[i]);if(o)return"tensors."+o}}if(t.graphs!=null&&t.hasOwnProperty("graphs")){if(!Array.isArray(t.graphs))return"graphs: array expected";for(var i=0;i<t.graphs.length;++i){var o=E.onnx.GraphProto.verify(t.graphs[i]);if(o)return"graphs."+o}}if(t.sparseTensors!=null&&t.hasOwnProperty("sparseTensors")){if(!Array.isArray(t.sparseTensors))return"sparseTensors: array expected";for(var i=0;i<t.sparseTensors.length;++i){var o=E.onnx.SparseTensorProto.verify(t.sparseTensors[i]);if(o)return"sparseTensors."+o}}if(t.typeProtos!=null&&t.hasOwnProperty("typeProtos")){if(!Array.isArray(t.typeProtos))return"typeProtos: array expected";for(var i=0;i<t.typeProtos.length;++i){var o=E.onnx.TypeProto.verify(t.typeProtos[i]);if(o)return"typeProtos."+o}}return null},e.fromObject=function(t){if(t instanceof E.onnx.AttributeProto)return t;var o=new E.onnx.AttributeProto;switch(t.name!=null&&(o.name=String(t.name)),t.refAttrName!=null&&(o.refAttrName=String(t.refAttrName)),t.docString!=null&&(o.docString=String(t.docString)),t.type){default:if(typeof t.type=="number"){o.type=t.type;break}break;case"UNDEFINED":case 0:o.type=0;break;case"FLOAT":case 1:o.type=1;break;case"INT":case 2:o.type=2;break;case"STRING":case 3:o.type=3;break;case"TENSOR":case 4:o.type=4;break;case"GRAPH":case 5:o.type=5;break;case"SPARSE_TENSOR":case 11:o.type=11;break;case"TYPE_PROTO":case 13:o.type=13;break;case"FLOATS":case 6:o.type=6;break;case"INTS":case 7:o.type=7;break;case"STRINGS":case 8:o.type=8;break;case"TENSORS":case 9:o.type=9;break;case"GRAPHS":case 10:o.type=10;break;case"SPARSE_TENSORS":case 12:o.type=12;break;case"TYPE_PROTOS":case 14:o.type=14;break}if(t.f!=null&&(o.f=Number(t.f)),t.i!=null&&(z.Long?(o.i=z.Long.fromValue(t.i)).unsigned=!1:typeof t.i=="string"?o.i=parseInt(t.i,10):typeof t.i=="number"?o.i=t.i:typeof t.i=="object"&&(o.i=new z.LongBits(t.i.low>>>0,t.i.high>>>0).toNumber())),t.s!=null&&(typeof t.s=="string"?z.base64.decode(t.s,o.s=z.newBuffer(z.base64.length(t.s)),0):t.s.length>=0&&(o.s=t.s)),t.t!=null){if(typeof t.t!="object")throw TypeError(".onnx.AttributeProto.t: object expected");o.t=E.onnx.TensorProto.fromObject(t.t)}if(t.g!=null){if(typeof t.g!="object")throw TypeError(".onnx.AttributeProto.g: object expected");o.g=E.onnx.GraphProto.fromObject(t.g)}if(t.sparseTensor!=null){if(typeof t.sparseTensor!="object")throw TypeError(".onnx.AttributeProto.sparseTensor: object expected");o.sparseTensor=E.onnx.SparseTensorProto.fromObject(t.sparseTensor)}if(t.tp!=null){if(typeof t.tp!="object")throw TypeError(".onnx.AttributeProto.tp: object expected");o.tp=E.onnx.TypeProto.fromObject(t.tp)}if(t.floats){if(!Array.isArray(t.floats))throw TypeError(".onnx.AttributeProto.floats: array expected");o.floats=[];for(var i=0;i<t.floats.length;++i)o.floats[i]=Number(t.floats[i])}if(t.ints){if(!Array.isArray(t.ints))throw TypeError(".onnx.AttributeProto.ints: array expected");o.ints=[];for(var i=0;i<t.ints.length;++i)z.Long?(o.ints[i]=z.Long.fromValue(t.ints[i])).unsigned=!1:typeof t.ints[i]=="string"?o.ints[i]=parseInt(t.ints[i],10):typeof t.ints[i]=="number"?o.ints[i]=t.ints[i]:typeof t.ints[i]=="object"&&(o.ints[i]=new z.LongBits(t.ints[i].low>>>0,t.ints[i].high>>>0).toNumber())}if(t.strings){if(!Array.isArray(t.strings))throw TypeError(".onnx.AttributeProto.strings: array expected");o.strings=[];for(var i=0;i<t.strings.length;++i)typeof t.strings[i]=="string"?z.base64.decode(t.strings[i],o.strings[i]=z.newBuffer(z.base64.length(t.strings[i])),0):t.strings[i].length>=0&&(o.strings[i]=t.strings[i])}if(t.tensors){if(!Array.isArray(t.tensors))throw TypeError(".onnx.AttributeProto.tensors: array expected");o.tensors=[];for(var i=0;i<t.tensors.length;++i){if(typeof t.tensors[i]!="object")throw TypeError(".onnx.AttributeProto.tensors: object expected");o.tensors[i]=E.onnx.TensorProto.fromObject(t.tensors[i])}}if(t.graphs){if(!Array.isArray(t.graphs))throw TypeError(".onnx.AttributeProto.graphs: array expected");o.graphs=[];for(var i=0;i<t.graphs.length;++i){if(typeof t.graphs[i]!="object")throw TypeError(".onnx.AttributeProto.graphs: object expected");o.graphs[i]=E.onnx.GraphProto.fromObject(t.graphs[i])}}if(t.sparseTensors){if(!Array.isArray(t.sparseTensors))throw TypeError(".onnx.AttributeProto.sparseTensors: array expected");o.sparseTensors=[];for(var i=0;i<t.sparseTensors.length;++i){if(typeof t.sparseTensors[i]!="object")throw TypeError(".onnx.AttributeProto.sparseTensors: object expected");o.sparseTensors[i]=E.onnx.SparseTensorProto.fromObject(t.sparseTensors[i])}}if(t.typeProtos){if(!Array.isArray(t.typeProtos))throw TypeError(".onnx.AttributeProto.typeProtos: array expected");o.typeProtos=[];for(var i=0;i<t.typeProtos.length;++i){if(typeof t.typeProtos[i]!="object")throw TypeError(".onnx.AttributeProto.typeProtos: object expected");o.typeProtos[i]=E.onnx.TypeProto.fromObject(t.typeProtos[i])}}return o},e.toObject=function(t,o){o||(o={});var i={};if((o.arrays||o.defaults)&&(i.floats=[],i.ints=[],i.strings=[],i.tensors=[],i.graphs=[],i.typeProtos=[],i.sparseTensors=[]),o.defaults){if(i.name="",i.f=0,z.Long){var a=new z.Long(0,0,!1);i.i=o.longs===String?a.toString():o.longs===Number?a.toNumber():a}else i.i=o.longs===String?"0":0;o.bytes===String?i.s="":(i.s=[],o.bytes!==Array&&(i.s=z.newBuffer(i.s))),i.t=null,i.g=null,i.docString="",i.tp=null,i.type=o.enums===String?"UNDEFINED":0,i.refAttrName="",i.sparseTensor=null}if(t.name!=null&&t.hasOwnProperty("name")&&(i.name=t.name),t.f!=null&&t.hasOwnProperty("f")&&(i.f=o.json&&!isFinite(t.f)?String(t.f):t.f),t.i!=null&&t.hasOwnProperty("i")&&(typeof t.i=="number"?i.i=o.longs===String?String(t.i):t.i:i.i=o.longs===String?z.Long.prototype.toString.call(t.i):o.longs===Number?new z.LongBits(t.i.low>>>0,t.i.high>>>0).toNumber():t.i),t.s!=null&&t.hasOwnProperty("s")&&(i.s=o.bytes===String?z.base64.encode(t.s,0,t.s.length):o.bytes===Array?Array.prototype.slice.call(t.s):t.s),t.t!=null&&t.hasOwnProperty("t")&&(i.t=E.onnx.TensorProto.toObject(t.t,o)),t.g!=null&&t.hasOwnProperty("g")&&(i.g=E.onnx.GraphProto.toObject(t.g,o)),t.floats&&t.floats.length){i.floats=[];for(var u=0;u<t.floats.length;++u)i.floats[u]=o.json&&!isFinite(t.floats[u])?String(t.floats[u]):t.floats[u]}if(t.ints&&t.ints.length){i.ints=[];for(var u=0;u<t.ints.length;++u)typeof t.ints[u]=="number"?i.ints[u]=o.longs===String?String(t.ints[u]):t.ints[u]:i.ints[u]=o.longs===String?z.Long.prototype.toString.call(t.ints[u]):o.longs===Number?new z.LongBits(t.ints[u].low>>>0,t.ints[u].high>>>0).toNumber():t.ints[u]}if(t.strings&&t.strings.length){i.strings=[];for(var u=0;u<t.strings.length;++u)i.strings[u]=o.bytes===String?z.base64.encode(t.strings[u],0,t.strings[u].length):o.bytes===Array?Array.prototype.slice.call(t.strings[u]):t.strings[u]}if(t.tensors&&t.tensors.length){i.tensors=[];for(var u=0;u<t.tensors.length;++u)i.tensors[u]=E.onnx.TensorProto.toObject(t.tensors[u],o)}if(t.graphs&&t.graphs.length){i.graphs=[];for(var u=0;u<t.graphs.length;++u)i.graphs[u]=E.onnx.GraphProto.toObject(t.graphs[u],o)}if(t.docString!=null&&t.hasOwnProperty("docString")&&(i.docString=t.docString),t.tp!=null&&t.hasOwnProperty("tp")&&(i.tp=E.onnx.TypeProto.toObject(t.tp,o)),t.typeProtos&&t.typeProtos.length){i.typeProtos=[];for(var u=0;u<t.typeProtos.length;++u)i.typeProtos[u]=E.onnx.TypeProto.toObject(t.typeProtos[u],o)}if(t.type!=null&&t.hasOwnProperty("type")&&(i.type=o.enums===String?E.onnx.AttributeProto.AttributeType[t.type]===void 0?t.type:E.onnx.AttributeProto.AttributeType[t.type]:t.type),t.refAttrName!=null&&t.hasOwnProperty("refAttrName")&&(i.refAttrName=t.refAttrName),t.sparseTensor!=null&&t.hasOwnProperty("sparseTensor")&&(i.sparseTensor=E.onnx.SparseTensorProto.toObject(t.sparseTensor,o)),t.sparseTensors&&t.sparseTensors.length){i.sparseTensors=[];for(var u=0;u<t.sparseTensors.length;++u)i.sparseTensors[u]=E.onnx.SparseTensorProto.toObject(t.sparseTensors[u],o)}return i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Je.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.AttributeProto"},e.AttributeType=function(){var r={},t=Object.create(r);return t[r[0]="UNDEFINED"]=0,t[r[1]="FLOAT"]=1,t[r[2]="INT"]=2,t[r[3]="STRING"]=3,t[r[4]="TENSOR"]=4,t[r[5]="GRAPH"]=5,t[r[11]="SPARSE_TENSOR"]=11,t[r[13]="TYPE_PROTO"]=13,t[r[6]="FLOATS"]=6,t[r[7]="INTS"]=7,t[r[8]="STRINGS"]=8,t[r[9]="TENSORS"]=9,t[r[10]="GRAPHS"]=10,t[r[12]="SPARSE_TENSORS"]=12,t[r[14]="TYPE_PROTOS"]=14,t}(),e}(),n.ValueInfoProto=function(){function e(r){if(r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.name="",e.prototype.type=null,e.prototype.docString="",e.create=function(t){return new e(t)},e.encode=function(t,o){return o||(o=ut.create()),t.name!=null&&Object.hasOwnProperty.call(t,"name")&&o.uint32(10).string(t.name),t.type!=null&&Object.hasOwnProperty.call(t,"type")&&E.onnx.TypeProto.encode(t.type,o.uint32(18).fork()).ldelim(),t.docString!=null&&Object.hasOwnProperty.call(t,"docString")&&o.uint32(26).string(t.docString),o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.ValueInfoProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.name=t.string();break}case 2:{a.type=E.onnx.TypeProto.decode(t,t.uint32());break}case 3:{a.docString=t.string();break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.name!=null&&t.hasOwnProperty("name")&&!z.isString(t.name))return"name: string expected";if(t.type!=null&&t.hasOwnProperty("type")){var o=E.onnx.TypeProto.verify(t.type);if(o)return"type."+o}return t.docString!=null&&t.hasOwnProperty("docString")&&!z.isString(t.docString)?"docString: string expected":null},e.fromObject=function(t){if(t instanceof E.onnx.ValueInfoProto)return t;var o=new E.onnx.ValueInfoProto;if(t.name!=null&&(o.name=String(t.name)),t.type!=null){if(typeof t.type!="object")throw TypeError(".onnx.ValueInfoProto.type: object expected");o.type=E.onnx.TypeProto.fromObject(t.type)}return t.docString!=null&&(o.docString=String(t.docString)),o},e.toObject=function(t,o){o||(o={});var i={};return o.defaults&&(i.name="",i.type=null,i.docString=""),t.name!=null&&t.hasOwnProperty("name")&&(i.name=t.name),t.type!=null&&t.hasOwnProperty("type")&&(i.type=E.onnx.TypeProto.toObject(t.type,o)),t.docString!=null&&t.hasOwnProperty("docString")&&(i.docString=t.docString),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Je.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.ValueInfoProto"},e}(),n.NodeProto=function(){function e(r){if(this.input=[],this.output=[],this.attribute=[],r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.input=z.emptyArray,e.prototype.output=z.emptyArray,e.prototype.name="",e.prototype.opType="",e.prototype.domain="",e.prototype.attribute=z.emptyArray,e.prototype.docString="",e.create=function(t){return new e(t)},e.encode=function(t,o){if(o||(o=ut.create()),t.input!=null&&t.input.length)for(var i=0;i<t.input.length;++i)o.uint32(10).string(t.input[i]);if(t.output!=null&&t.output.length)for(var i=0;i<t.output.length;++i)o.uint32(18).string(t.output[i]);if(t.name!=null&&Object.hasOwnProperty.call(t,"name")&&o.uint32(26).string(t.name),t.opType!=null&&Object.hasOwnProperty.call(t,"opType")&&o.uint32(34).string(t.opType),t.attribute!=null&&t.attribute.length)for(var i=0;i<t.attribute.length;++i)E.onnx.AttributeProto.encode(t.attribute[i],o.uint32(42).fork()).ldelim();return t.docString!=null&&Object.hasOwnProperty.call(t,"docString")&&o.uint32(50).string(t.docString),t.domain!=null&&Object.hasOwnProperty.call(t,"domain")&&o.uint32(58).string(t.domain),o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.NodeProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.input&&a.input.length||(a.input=[]),a.input.push(t.string());break}case 2:{a.output&&a.output.length||(a.output=[]),a.output.push(t.string());break}case 3:{a.name=t.string();break}case 4:{a.opType=t.string();break}case 7:{a.domain=t.string();break}case 5:{a.attribute&&a.attribute.length||(a.attribute=[]),a.attribute.push(E.onnx.AttributeProto.decode(t,t.uint32()));break}case 6:{a.docString=t.string();break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.input!=null&&t.hasOwnProperty("input")){if(!Array.isArray(t.input))return"input: array expected";for(var o=0;o<t.input.length;++o)if(!z.isString(t.input[o]))return"input: string[] expected"}if(t.output!=null&&t.hasOwnProperty("output")){if(!Array.isArray(t.output))return"output: array expected";for(var o=0;o<t.output.length;++o)if(!z.isString(t.output[o]))return"output: string[] expected"}if(t.name!=null&&t.hasOwnProperty("name")&&!z.isString(t.name))return"name: string expected";if(t.opType!=null&&t.hasOwnProperty("opType")&&!z.isString(t.opType))return"opType: string expected";if(t.domain!=null&&t.hasOwnProperty("domain")&&!z.isString(t.domain))return"domain: string expected";if(t.attribute!=null&&t.hasOwnProperty("attribute")){if(!Array.isArray(t.attribute))return"attribute: array expected";for(var o=0;o<t.attribute.length;++o){var i=E.onnx.AttributeProto.verify(t.attribute[o]);if(i)return"attribute."+i}}return t.docString!=null&&t.hasOwnProperty("docString")&&!z.isString(t.docString)?"docString: string expected":null},e.fromObject=function(t){if(t instanceof E.onnx.NodeProto)return t;var o=new E.onnx.NodeProto;if(t.input){if(!Array.isArray(t.input))throw TypeError(".onnx.NodeProto.input: array expected");o.input=[];for(var i=0;i<t.input.length;++i)o.input[i]=String(t.input[i])}if(t.output){if(!Array.isArray(t.output))throw TypeError(".onnx.NodeProto.output: array expected");o.output=[];for(var i=0;i<t.output.length;++i)o.output[i]=String(t.output[i])}if(t.name!=null&&(o.name=String(t.name)),t.opType!=null&&(o.opType=String(t.opType)),t.domain!=null&&(o.domain=String(t.domain)),t.attribute){if(!Array.isArray(t.attribute))throw TypeError(".onnx.NodeProto.attribute: array expected");o.attribute=[];for(var i=0;i<t.attribute.length;++i){if(typeof t.attribute[i]!="object")throw TypeError(".onnx.NodeProto.attribute: object expected");o.attribute[i]=E.onnx.AttributeProto.fromObject(t.attribute[i])}}return t.docString!=null&&(o.docString=String(t.docString)),o},e.toObject=function(t,o){o||(o={});var i={};if((o.arrays||o.defaults)&&(i.input=[],i.output=[],i.attribute=[]),o.defaults&&(i.name="",i.opType="",i.docString="",i.domain=""),t.input&&t.input.length){i.input=[];for(var a=0;a<t.input.length;++a)i.input[a]=t.input[a]}if(t.output&&t.output.length){i.output=[];for(var a=0;a<t.output.length;++a)i.output[a]=t.output[a]}if(t.name!=null&&t.hasOwnProperty("name")&&(i.name=t.name),t.opType!=null&&t.hasOwnProperty("opType")&&(i.opType=t.opType),t.attribute&&t.attribute.length){i.attribute=[];for(var a=0;a<t.attribute.length;++a)i.attribute[a]=E.onnx.AttributeProto.toObject(t.attribute[a],o)}return t.docString!=null&&t.hasOwnProperty("docString")&&(i.docString=t.docString),t.domain!=null&&t.hasOwnProperty("domain")&&(i.domain=t.domain),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Je.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.NodeProto"},e}(),n.TrainingInfoProto=function(){function e(r){if(this.initializationBinding=[],this.updateBinding=[],r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.initialization=null,e.prototype.algorithm=null,e.prototype.initializationBinding=z.emptyArray,e.prototype.updateBinding=z.emptyArray,e.create=function(t){return new e(t)},e.encode=function(t,o){if(o||(o=ut.create()),t.initialization!=null&&Object.hasOwnProperty.call(t,"initialization")&&E.onnx.GraphProto.encode(t.initialization,o.uint32(10).fork()).ldelim(),t.algorithm!=null&&Object.hasOwnProperty.call(t,"algorithm")&&E.onnx.GraphProto.encode(t.algorithm,o.uint32(18).fork()).ldelim(),t.initializationBinding!=null&&t.initializationBinding.length)for(var i=0;i<t.initializationBinding.length;++i)E.onnx.StringStringEntryProto.encode(t.initializationBinding[i],o.uint32(26).fork()).ldelim();if(t.updateBinding!=null&&t.updateBinding.length)for(var i=0;i<t.updateBinding.length;++i)E.onnx.StringStringEntryProto.encode(t.updateBinding[i],o.uint32(34).fork()).ldelim();return o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.TrainingInfoProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.initialization=E.onnx.GraphProto.decode(t,t.uint32());break}case 2:{a.algorithm=E.onnx.GraphProto.decode(t,t.uint32());break}case 3:{a.initializationBinding&&a.initializationBinding.length||(a.initializationBinding=[]),a.initializationBinding.push(E.onnx.StringStringEntryProto.decode(t,t.uint32()));break}case 4:{a.updateBinding&&a.updateBinding.length||(a.updateBinding=[]),a.updateBinding.push(E.onnx.StringStringEntryProto.decode(t,t.uint32()));break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.initialization!=null&&t.hasOwnProperty("initialization")){var o=E.onnx.GraphProto.verify(t.initialization);if(o)return"initialization."+o}if(t.algorithm!=null&&t.hasOwnProperty("algorithm")){var o=E.onnx.GraphProto.verify(t.algorithm);if(o)return"algorithm."+o}if(t.initializationBinding!=null&&t.hasOwnProperty("initializationBinding")){if(!Array.isArray(t.initializationBinding))return"initializationBinding: array expected";for(var i=0;i<t.initializationBinding.length;++i){var o=E.onnx.StringStringEntryProto.verify(t.initializationBinding[i]);if(o)return"initializationBinding."+o}}if(t.updateBinding!=null&&t.hasOwnProperty("updateBinding")){if(!Array.isArray(t.updateBinding))return"updateBinding: array expected";for(var i=0;i<t.updateBinding.length;++i){var o=E.onnx.StringStringEntryProto.verify(t.updateBinding[i]);if(o)return"updateBinding."+o}}return null},e.fromObject=function(t){if(t instanceof E.onnx.TrainingInfoProto)return t;var o=new E.onnx.TrainingInfoProto;if(t.initialization!=null){if(typeof t.initialization!="object")throw TypeError(".onnx.TrainingInfoProto.initialization: object expected");o.initialization=E.onnx.GraphProto.fromObject(t.initialization)}if(t.algorithm!=null){if(typeof t.algorithm!="object")throw TypeError(".onnx.TrainingInfoProto.algorithm: object expected");o.algorithm=E.onnx.GraphProto.fromObject(t.algorithm)}if(t.initializationBinding){if(!Array.isArray(t.initializationBinding))throw TypeError(".onnx.TrainingInfoProto.initializationBinding: array expected");o.initializationBinding=[];for(var i=0;i<t.initializationBinding.length;++i){if(typeof t.initializationBinding[i]!="object")throw TypeError(".onnx.TrainingInfoProto.initializationBinding: object expected");o.initializationBinding[i]=E.onnx.StringStringEntryProto.fromObject(t.initializationBinding[i])}}if(t.updateBinding){if(!Array.isArray(t.updateBinding))throw TypeError(".onnx.TrainingInfoProto.updateBinding: array expected");o.updateBinding=[];for(var i=0;i<t.updateBinding.length;++i){if(typeof t.updateBinding[i]!="object")throw TypeError(".onnx.TrainingInfoProto.updateBinding: object expected");o.updateBinding[i]=E.onnx.StringStringEntryProto.fromObject(t.updateBinding[i])}}return o},e.toObject=function(t,o){o||(o={});var i={};if((o.arrays||o.defaults)&&(i.initializationBinding=[],i.updateBinding=[]),o.defaults&&(i.initialization=null,i.algorithm=null),t.initialization!=null&&t.hasOwnProperty("initialization")&&(i.initialization=E.onnx.GraphProto.toObject(t.initialization,o)),t.algorithm!=null&&t.hasOwnProperty("algorithm")&&(i.algorithm=E.onnx.GraphProto.toObject(t.algorithm,o)),t.initializationBinding&&t.initializationBinding.length){i.initializationBinding=[];for(var a=0;a<t.initializationBinding.length;++a)i.initializationBinding[a]=E.onnx.StringStringEntryProto.toObject(t.initializationBinding[a],o)}if(t.updateBinding&&t.updateBinding.length){i.updateBinding=[];for(var a=0;a<t.updateBinding.length;++a)i.updateBinding[a]=E.onnx.StringStringEntryProto.toObject(t.updateBinding[a],o)}return i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Je.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.TrainingInfoProto"},e}(),n.ModelProto=function(){function e(r){if(this.opsetImport=[],this.metadataProps=[],this.trainingInfo=[],this.functions=[],r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.irVersion=z.Long?z.Long.fromBits(0,0,!1):0,e.prototype.opsetImport=z.emptyArray,e.prototype.producerName="",e.prototype.producerVersion="",e.prototype.domain="",e.prototype.modelVersion=z.Long?z.Long.fromBits(0,0,!1):0,e.prototype.docString="",e.prototype.graph=null,e.prototype.metadataProps=z.emptyArray,e.prototype.trainingInfo=z.emptyArray,e.prototype.functions=z.emptyArray,e.create=function(t){return new e(t)},e.encode=function(t,o){if(o||(o=ut.create()),t.irVersion!=null&&Object.hasOwnProperty.call(t,"irVersion")&&o.uint32(8).int64(t.irVersion),t.producerName!=null&&Object.hasOwnProperty.call(t,"producerName")&&o.uint32(18).string(t.producerName),t.producerVersion!=null&&Object.hasOwnProperty.call(t,"producerVersion")&&o.uint32(26).string(t.producerVersion),t.domain!=null&&Object.hasOwnProperty.call(t,"domain")&&o.uint32(34).string(t.domain),t.modelVersion!=null&&Object.hasOwnProperty.call(t,"modelVersion")&&o.uint32(40).int64(t.modelVersion),t.docString!=null&&Object.hasOwnProperty.call(t,"docString")&&o.uint32(50).string(t.docString),t.graph!=null&&Object.hasOwnProperty.call(t,"graph")&&E.onnx.GraphProto.encode(t.graph,o.uint32(58).fork()).ldelim(),t.opsetImport!=null&&t.opsetImport.length)for(var i=0;i<t.opsetImport.length;++i)E.onnx.OperatorSetIdProto.encode(t.opsetImport[i],o.uint32(66).fork()).ldelim();if(t.metadataProps!=null&&t.metadataProps.length)for(var i=0;i<t.metadataProps.length;++i)E.onnx.StringStringEntryProto.encode(t.metadataProps[i],o.uint32(114).fork()).ldelim();if(t.trainingInfo!=null&&t.trainingInfo.length)for(var i=0;i<t.trainingInfo.length;++i)E.onnx.TrainingInfoProto.encode(t.trainingInfo[i],o.uint32(162).fork()).ldelim();if(t.functions!=null&&t.functions.length)for(var i=0;i<t.functions.length;++i)E.onnx.FunctionProto.encode(t.functions[i],o.uint32(202).fork()).ldelim();return o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.ModelProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.irVersion=t.int64();break}case 8:{a.opsetImport&&a.opsetImport.length||(a.opsetImport=[]),a.opsetImport.push(E.onnx.OperatorSetIdProto.decode(t,t.uint32()));break}case 2:{a.producerName=t.string();break}case 3:{a.producerVersion=t.string();break}case 4:{a.domain=t.string();break}case 5:{a.modelVersion=t.int64();break}case 6:{a.docString=t.string();break}case 7:{a.graph=E.onnx.GraphProto.decode(t,t.uint32());break}case 14:{a.metadataProps&&a.metadataProps.length||(a.metadataProps=[]),a.metadataProps.push(E.onnx.StringStringEntryProto.decode(t,t.uint32()));break}case 20:{a.trainingInfo&&a.trainingInfo.length||(a.trainingInfo=[]),a.trainingInfo.push(E.onnx.TrainingInfoProto.decode(t,t.uint32()));break}case 25:{a.functions&&a.functions.length||(a.functions=[]),a.functions.push(E.onnx.FunctionProto.decode(t,t.uint32()));break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.irVersion!=null&&t.hasOwnProperty("irVersion")&&!z.isInteger(t.irVersion)&&!(t.irVersion&&z.isInteger(t.irVersion.low)&&z.isInteger(t.irVersion.high)))return"irVersion: integer|Long expected";if(t.opsetImport!=null&&t.hasOwnProperty("opsetImport")){if(!Array.isArray(t.opsetImport))return"opsetImport: array expected";for(var o=0;o<t.opsetImport.length;++o){var i=E.onnx.OperatorSetIdProto.verify(t.opsetImport[o]);if(i)return"opsetImport."+i}}if(t.producerName!=null&&t.hasOwnProperty("producerName")&&!z.isString(t.producerName))return"producerName: string expected";if(t.producerVersion!=null&&t.hasOwnProperty("producerVersion")&&!z.isString(t.producerVersion))return"producerVersion: string expected";if(t.domain!=null&&t.hasOwnProperty("domain")&&!z.isString(t.domain))return"domain: string expected";if(t.modelVersion!=null&&t.hasOwnProperty("modelVersion")&&!z.isInteger(t.modelVersion)&&!(t.modelVersion&&z.isInteger(t.modelVersion.low)&&z.isInteger(t.modelVersion.high)))return"modelVersion: integer|Long expected";if(t.docString!=null&&t.hasOwnProperty("docString")&&!z.isString(t.docString))return"docString: string expected";if(t.graph!=null&&t.hasOwnProperty("graph")){var i=E.onnx.GraphProto.verify(t.graph);if(i)return"graph."+i}if(t.metadataProps!=null&&t.hasOwnProperty("metadataProps")){if(!Array.isArray(t.metadataProps))return"metadataProps: array expected";for(var o=0;o<t.metadataProps.length;++o){var i=E.onnx.StringStringEntryProto.verify(t.metadataProps[o]);if(i)return"metadataProps."+i}}if(t.trainingInfo!=null&&t.hasOwnProperty("trainingInfo")){if(!Array.isArray(t.trainingInfo))return"trainingInfo: array expected";for(var o=0;o<t.trainingInfo.length;++o){var i=E.onnx.TrainingInfoProto.verify(t.trainingInfo[o]);if(i)return"trainingInfo."+i}}if(t.functions!=null&&t.hasOwnProperty("functions")){if(!Array.isArray(t.functions))return"functions: array expected";for(var o=0;o<t.functions.length;++o){var i=E.onnx.FunctionProto.verify(t.functions[o]);if(i)return"functions."+i}}return null},e.fromObject=function(t){if(t instanceof E.onnx.ModelProto)return t;var o=new E.onnx.ModelProto;if(t.irVersion!=null&&(z.Long?(o.irVersion=z.Long.fromValue(t.irVersion)).unsigned=!1:typeof t.irVersion=="string"?o.irVersion=parseInt(t.irVersion,10):typeof t.irVersion=="number"?o.irVersion=t.irVersion:typeof t.irVersion=="object"&&(o.irVersion=new z.LongBits(t.irVersion.low>>>0,t.irVersion.high>>>0).toNumber())),t.opsetImport){if(!Array.isArray(t.opsetImport))throw TypeError(".onnx.ModelProto.opsetImport: array expected");o.opsetImport=[];for(var i=0;i<t.opsetImport.length;++i){if(typeof t.opsetImport[i]!="object")throw TypeError(".onnx.ModelProto.opsetImport: object expected");o.opsetImport[i]=E.onnx.OperatorSetIdProto.fromObject(t.opsetImport[i])}}if(t.producerName!=null&&(o.producerName=String(t.producerName)),t.producerVersion!=null&&(o.producerVersion=String(t.producerVersion)),t.domain!=null&&(o.domain=String(t.domain)),t.modelVersion!=null&&(z.Long?(o.modelVersion=z.Long.fromValue(t.modelVersion)).unsigned=!1:typeof t.modelVersion=="string"?o.modelVersion=parseInt(t.modelVersion,10):typeof t.modelVersion=="number"?o.modelVersion=t.modelVersion:typeof t.modelVersion=="object"&&(o.modelVersion=new z.LongBits(t.modelVersion.low>>>0,t.modelVersion.high>>>0).toNumber())),t.docString!=null&&(o.docString=String(t.docString)),t.graph!=null){if(typeof t.graph!="object")throw TypeError(".onnx.ModelProto.graph: object expected");o.graph=E.onnx.GraphProto.fromObject(t.graph)}if(t.metadataProps){if(!Array.isArray(t.metadataProps))throw TypeError(".onnx.ModelProto.metadataProps: array expected");o.metadataProps=[];for(var i=0;i<t.metadataProps.length;++i){if(typeof t.metadataProps[i]!="object")throw TypeError(".onnx.ModelProto.metadataProps: object expected");o.metadataProps[i]=E.onnx.StringStringEntryProto.fromObject(t.metadataProps[i])}}if(t.trainingInfo){if(!Array.isArray(t.trainingInfo))throw TypeError(".onnx.ModelProto.trainingInfo: array expected");o.trainingInfo=[];for(var i=0;i<t.trainingInfo.length;++i){if(typeof t.trainingInfo[i]!="object")throw TypeError(".onnx.ModelProto.trainingInfo: object expected");o.trainingInfo[i]=E.onnx.TrainingInfoProto.fromObject(t.trainingInfo[i])}}if(t.functions){if(!Array.isArray(t.functions))throw TypeError(".onnx.ModelProto.functions: array expected");o.functions=[];for(var i=0;i<t.functions.length;++i){if(typeof t.functions[i]!="object")throw TypeError(".onnx.ModelProto.functions: object expected");o.functions[i]=E.onnx.FunctionProto.fromObject(t.functions[i])}}return o},e.toObject=function(t,o){o||(o={});var i={};if((o.arrays||o.defaults)&&(i.opsetImport=[],i.metadataProps=[],i.trainingInfo=[],i.functions=[]),o.defaults){if(z.Long){var a=new z.Long(0,0,!1);i.irVersion=o.longs===String?a.toString():o.longs===Number?a.toNumber():a}else i.irVersion=o.longs===String?"0":0;if(i.producerName="",i.producerVersion="",i.domain="",z.Long){var a=new z.Long(0,0,!1);i.modelVersion=o.longs===String?a.toString():o.longs===Number?a.toNumber():a}else i.modelVersion=o.longs===String?"0":0;i.docString="",i.graph=null}if(t.irVersion!=null&&t.hasOwnProperty("irVersion")&&(typeof t.irVersion=="number"?i.irVersion=o.longs===String?String(t.irVersion):t.irVersion:i.irVersion=o.longs===String?z.Long.prototype.toString.call(t.irVersion):o.longs===Number?new z.LongBits(t.irVersion.low>>>0,t.irVersion.high>>>0).toNumber():t.irVersion),t.producerName!=null&&t.hasOwnProperty("producerName")&&(i.producerName=t.producerName),t.producerVersion!=null&&t.hasOwnProperty("producerVersion")&&(i.producerVersion=t.producerVersion),t.domain!=null&&t.hasOwnProperty("domain")&&(i.domain=t.domain),t.modelVersion!=null&&t.hasOwnProperty("modelVersion")&&(typeof t.modelVersion=="number"?i.modelVersion=o.longs===String?String(t.modelVersion):t.modelVersion:i.modelVersion=o.longs===String?z.Long.prototype.toString.call(t.modelVersion):o.longs===Number?new z.LongBits(t.modelVersion.low>>>0,t.modelVersion.high>>>0).toNumber():t.modelVersion),t.docString!=null&&t.hasOwnProperty("docString")&&(i.docString=t.docString),t.graph!=null&&t.hasOwnProperty("graph")&&(i.graph=E.onnx.GraphProto.toObject(t.graph,o)),t.opsetImport&&t.opsetImport.length){i.opsetImport=[];for(var u=0;u<t.opsetImport.length;++u)i.opsetImport[u]=E.onnx.OperatorSetIdProto.toObject(t.opsetImport[u],o)}if(t.metadataProps&&t.metadataProps.length){i.metadataProps=[];for(var u=0;u<t.metadataProps.length;++u)i.metadataProps[u]=E.onnx.StringStringEntryProto.toObject(t.metadataProps[u],o)}if(t.trainingInfo&&t.trainingInfo.length){i.trainingInfo=[];for(var u=0;u<t.trainingInfo.length;++u)i.trainingInfo[u]=E.onnx.TrainingInfoProto.toObject(t.trainingInfo[u],o)}if(t.functions&&t.functions.length){i.functions=[];for(var u=0;u<t.functions.length;++u)i.functions[u]=E.onnx.FunctionProto.toObject(t.functions[u],o)}return i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Je.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.ModelProto"},e}(),n.StringStringEntryProto=function(){function e(r){if(r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.key="",e.prototype.value="",e.create=function(t){return new e(t)},e.encode=function(t,o){return o||(o=ut.create()),t.key!=null&&Object.hasOwnProperty.call(t,"key")&&o.uint32(10).string(t.key),t.value!=null&&Object.hasOwnProperty.call(t,"value")&&o.uint32(18).string(t.value),o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.StringStringEntryProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.key=t.string();break}case 2:{a.value=t.string();break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){return typeof t!="object"||t===null?"object expected":t.key!=null&&t.hasOwnProperty("key")&&!z.isString(t.key)?"key: string expected":t.value!=null&&t.hasOwnProperty("value")&&!z.isString(t.value)?"value: string expected":null},e.fromObject=function(t){if(t instanceof E.onnx.StringStringEntryProto)return t;var o=new E.onnx.StringStringEntryProto;return t.key!=null&&(o.key=String(t.key)),t.value!=null&&(o.value=String(t.value)),o},e.toObject=function(t,o){o||(o={});var i={};return o.defaults&&(i.key="",i.value=""),t.key!=null&&t.hasOwnProperty("key")&&(i.key=t.key),t.value!=null&&t.hasOwnProperty("value")&&(i.value=t.value),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Je.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.StringStringEntryProto"},e}(),n.TensorAnnotation=function(){function e(r){if(this.quantParameterTensorNames=[],r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.tensorName="",e.prototype.quantParameterTensorNames=z.emptyArray,e.create=function(t){return new e(t)},e.encode=function(t,o){if(o||(o=ut.create()),t.tensorName!=null&&Object.hasOwnProperty.call(t,"tensorName")&&o.uint32(10).string(t.tensorName),t.quantParameterTensorNames!=null&&t.quantParameterTensorNames.length)for(var i=0;i<t.quantParameterTensorNames.length;++i)E.onnx.StringStringEntryProto.encode(t.quantParameterTensorNames[i],o.uint32(18).fork()).ldelim();return o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.TensorAnnotation;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.tensorName=t.string();break}case 2:{a.quantParameterTensorNames&&a.quantParameterTensorNames.length||(a.quantParameterTensorNames=[]),a.quantParameterTensorNames.push(E.onnx.StringStringEntryProto.decode(t,t.uint32()));break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.tensorName!=null&&t.hasOwnProperty("tensorName")&&!z.isString(t.tensorName))return"tensorName: string expected";if(t.quantParameterTensorNames!=null&&t.hasOwnProperty("quantParameterTensorNames")){if(!Array.isArray(t.quantParameterTensorNames))return"quantParameterTensorNames: array expected";for(var o=0;o<t.quantParameterTensorNames.length;++o){var i=E.onnx.StringStringEntryProto.verify(t.quantParameterTensorNames[o]);if(i)return"quantParameterTensorNames."+i}}return null},e.fromObject=function(t){if(t instanceof E.onnx.TensorAnnotation)return t;var o=new E.onnx.TensorAnnotation;if(t.tensorName!=null&&(o.tensorName=String(t.tensorName)),t.quantParameterTensorNames){if(!Array.isArray(t.quantParameterTensorNames))throw TypeError(".onnx.TensorAnnotation.quantParameterTensorNames: array expected");o.quantParameterTensorNames=[];for(var i=0;i<t.quantParameterTensorNames.length;++i){if(typeof t.quantParameterTensorNames[i]!="object")throw TypeError(".onnx.TensorAnnotation.quantParameterTensorNames: object expected");o.quantParameterTensorNames[i]=E.onnx.StringStringEntryProto.fromObject(t.quantParameterTensorNames[i])}}return o},e.toObject=function(t,o){o||(o={});var i={};if((o.arrays||o.defaults)&&(i.quantParameterTensorNames=[]),o.defaults&&(i.tensorName=""),t.tensorName!=null&&t.hasOwnProperty("tensorName")&&(i.tensorName=t.tensorName),t.quantParameterTensorNames&&t.quantParameterTensorNames.length){i.quantParameterTensorNames=[];for(var a=0;a<t.quantParameterTensorNames.length;++a)i.quantParameterTensorNames[a]=E.onnx.StringStringEntryProto.toObject(t.quantParameterTensorNames[a],o)}return i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Je.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.TensorAnnotation"},e}(),n.GraphProto=function(){function e(r){if(this.node=[],this.initializer=[],this.sparseInitializer=[],this.input=[],this.output=[],this.valueInfo=[],this.quantizationAnnotation=[],r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.node=z.emptyArray,e.prototype.name="",e.prototype.initializer=z.emptyArray,e.prototype.sparseInitializer=z.emptyArray,e.prototype.docString="",e.prototype.input=z.emptyArray,e.prototype.output=z.emptyArray,e.prototype.valueInfo=z.emptyArray,e.prototype.quantizationAnnotation=z.emptyArray,e.create=function(t){return new e(t)},e.encode=function(t,o){if(o||(o=ut.create()),t.node!=null&&t.node.length)for(var i=0;i<t.node.length;++i)E.onnx.NodeProto.encode(t.node[i],o.uint32(10).fork()).ldelim();if(t.name!=null&&Object.hasOwnProperty.call(t,"name")&&o.uint32(18).string(t.name),t.initializer!=null&&t.initializer.length)for(var i=0;i<t.initializer.length;++i)E.onnx.TensorProto.encode(t.initializer[i],o.uint32(42).fork()).ldelim();if(t.docString!=null&&Object.hasOwnProperty.call(t,"docString")&&o.uint32(82).string(t.docString),t.input!=null&&t.input.length)for(var i=0;i<t.input.length;++i)E.onnx.ValueInfoProto.encode(t.input[i],o.uint32(90).fork()).ldelim();if(t.output!=null&&t.output.length)for(var i=0;i<t.output.length;++i)E.onnx.ValueInfoProto.encode(t.output[i],o.uint32(98).fork()).ldelim();if(t.valueInfo!=null&&t.valueInfo.length)for(var i=0;i<t.valueInfo.length;++i)E.onnx.ValueInfoProto.encode(t.valueInfo[i],o.uint32(106).fork()).ldelim();if(t.quantizationAnnotation!=null&&t.quantizationAnnotation.length)for(var i=0;i<t.quantizationAnnotation.length;++i)E.onnx.TensorAnnotation.encode(t.quantizationAnnotation[i],o.uint32(114).fork()).ldelim();if(t.sparseInitializer!=null&&t.sparseInitializer.length)for(var i=0;i<t.sparseInitializer.length;++i)E.onnx.SparseTensorProto.encode(t.sparseInitializer[i],o.uint32(122).fork()).ldelim();return o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.GraphProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.node&&a.node.length||(a.node=[]),a.node.push(E.onnx.NodeProto.decode(t,t.uint32()));break}case 2:{a.name=t.string();break}case 5:{a.initializer&&a.initializer.length||(a.initializer=[]),a.initializer.push(E.onnx.TensorProto.decode(t,t.uint32()));break}case 15:{a.sparseInitializer&&a.sparseInitializer.length||(a.sparseInitializer=[]),a.sparseInitializer.push(E.onnx.SparseTensorProto.decode(t,t.uint32()));break}case 10:{a.docString=t.string();break}case 11:{a.input&&a.input.length||(a.input=[]),a.input.push(E.onnx.ValueInfoProto.decode(t,t.uint32()));break}case 12:{a.output&&a.output.length||(a.output=[]),a.output.push(E.onnx.ValueInfoProto.decode(t,t.uint32()));break}case 13:{a.valueInfo&&a.valueInfo.length||(a.valueInfo=[]),a.valueInfo.push(E.onnx.ValueInfoProto.decode(t,t.uint32()));break}case 14:{a.quantizationAnnotation&&a.quantizationAnnotation.length||(a.quantizationAnnotation=[]),a.quantizationAnnotation.push(E.onnx.TensorAnnotation.decode(t,t.uint32()));break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.node!=null&&t.hasOwnProperty("node")){if(!Array.isArray(t.node))return"node: array expected";for(var o=0;o<t.node.length;++o){var i=E.onnx.NodeProto.verify(t.node[o]);if(i)return"node."+i}}if(t.name!=null&&t.hasOwnProperty("name")&&!z.isString(t.name))return"name: string expected";if(t.initializer!=null&&t.hasOwnProperty("initializer")){if(!Array.isArray(t.initializer))return"initializer: array expected";for(var o=0;o<t.initializer.length;++o){var i=E.onnx.TensorProto.verify(t.initializer[o]);if(i)return"initializer."+i}}if(t.sparseInitializer!=null&&t.hasOwnProperty("sparseInitializer")){if(!Array.isArray(t.sparseInitializer))return"sparseInitializer: array expected";for(var o=0;o<t.sparseInitializer.length;++o){var i=E.onnx.SparseTensorProto.verify(t.sparseInitializer[o]);if(i)return"sparseInitializer."+i}}if(t.docString!=null&&t.hasOwnProperty("docString")&&!z.isString(t.docString))return"docString: string expected";if(t.input!=null&&t.hasOwnProperty("input")){if(!Array.isArray(t.input))return"input: array expected";for(var o=0;o<t.input.length;++o){var i=E.onnx.ValueInfoProto.verify(t.input[o]);if(i)return"input."+i}}if(t.output!=null&&t.hasOwnProperty("output")){if(!Array.isArray(t.output))return"output: array expected";for(var o=0;o<t.output.length;++o){var i=E.onnx.ValueInfoProto.verify(t.output[o]);if(i)return"output."+i}}if(t.valueInfo!=null&&t.hasOwnProperty("valueInfo")){if(!Array.isArray(t.valueInfo))return"valueInfo: array expected";for(var o=0;o<t.valueInfo.length;++o){var i=E.onnx.ValueInfoProto.verify(t.valueInfo[o]);if(i)return"valueInfo."+i}}if(t.quantizationAnnotation!=null&&t.hasOwnProperty("quantizationAnnotation")){if(!Array.isArray(t.quantizationAnnotation))return"quantizationAnnotation: array expected";for(var o=0;o<t.quantizationAnnotation.length;++o){var i=E.onnx.TensorAnnotation.verify(t.quantizationAnnotation[o]);if(i)return"quantizationAnnotation."+i}}return null},e.fromObject=function(t){if(t instanceof E.onnx.GraphProto)return t;var o=new E.onnx.GraphProto;if(t.node){if(!Array.isArray(t.node))throw TypeError(".onnx.GraphProto.node: array expected");o.node=[];for(var i=0;i<t.node.length;++i){if(typeof t.node[i]!="object")throw TypeError(".onnx.GraphProto.node: object expected");o.node[i]=E.onnx.NodeProto.fromObject(t.node[i])}}if(t.name!=null&&(o.name=String(t.name)),t.initializer){if(!Array.isArray(t.initializer))throw TypeError(".onnx.GraphProto.initializer: array expected");o.initializer=[];for(var i=0;i<t.initializer.length;++i){if(typeof t.initializer[i]!="object")throw TypeError(".onnx.GraphProto.initializer: object expected");o.initializer[i]=E.onnx.TensorProto.fromObject(t.initializer[i])}}if(t.sparseInitializer){if(!Array.isArray(t.sparseInitializer))throw TypeError(".onnx.GraphProto.sparseInitializer: array expected");o.sparseInitializer=[];for(var i=0;i<t.sparseInitializer.length;++i){if(typeof t.sparseInitializer[i]!="object")throw TypeError(".onnx.GraphProto.sparseInitializer: object expected");o.sparseInitializer[i]=E.onnx.SparseTensorProto.fromObject(t.sparseInitializer[i])}}if(t.docString!=null&&(o.docString=String(t.docString)),t.input){if(!Array.isArray(t.input))throw TypeError(".onnx.GraphProto.input: array expected");o.input=[];for(var i=0;i<t.input.length;++i){if(typeof t.input[i]!="object")throw TypeError(".onnx.GraphProto.input: object expected");o.input[i]=E.onnx.ValueInfoProto.fromObject(t.input[i])}}if(t.output){if(!Array.isArray(t.output))throw TypeError(".onnx.GraphProto.output: array expected");o.output=[];for(var i=0;i<t.output.length;++i){if(typeof t.output[i]!="object")throw TypeError(".onnx.GraphProto.output: object expected");o.output[i]=E.onnx.ValueInfoProto.fromObject(t.output[i])}}if(t.valueInfo){if(!Array.isArray(t.valueInfo))throw TypeError(".onnx.GraphProto.valueInfo: array expected");o.valueInfo=[];for(var i=0;i<t.valueInfo.length;++i){if(typeof t.valueInfo[i]!="object")throw TypeError(".onnx.GraphProto.valueInfo: object expected");o.valueInfo[i]=E.onnx.ValueInfoProto.fromObject(t.valueInfo[i])}}if(t.quantizationAnnotation){if(!Array.isArray(t.quantizationAnnotation))throw TypeError(".onnx.GraphProto.quantizationAnnotation: array expected");o.quantizationAnnotation=[];for(var i=0;i<t.quantizationAnnotation.length;++i){if(typeof t.quantizationAnnotation[i]!="object")throw TypeError(".onnx.GraphProto.quantizationAnnotation: object expected");o.quantizationAnnotation[i]=E.onnx.TensorAnnotation.fromObject(t.quantizationAnnotation[i])}}return o},e.toObject=function(t,o){o||(o={});var i={};if((o.arrays||o.defaults)&&(i.node=[],i.initializer=[],i.input=[],i.output=[],i.valueInfo=[],i.quantizationAnnotation=[],i.sparseInitializer=[]),o.defaults&&(i.name="",i.docString=""),t.node&&t.node.length){i.node=[];for(var a=0;a<t.node.length;++a)i.node[a]=E.onnx.NodeProto.toObject(t.node[a],o)}if(t.name!=null&&t.hasOwnProperty("name")&&(i.name=t.name),t.initializer&&t.initializer.length){i.initializer=[];for(var a=0;a<t.initializer.length;++a)i.initializer[a]=E.onnx.TensorProto.toObject(t.initializer[a],o)}if(t.docString!=null&&t.hasOwnProperty("docString")&&(i.docString=t.docString),t.input&&t.input.length){i.input=[];for(var a=0;a<t.input.length;++a)i.input[a]=E.onnx.ValueInfoProto.toObject(t.input[a],o)}if(t.output&&t.output.length){i.output=[];for(var a=0;a<t.output.length;++a)i.output[a]=E.onnx.ValueInfoProto.toObject(t.output[a],o)}if(t.valueInfo&&t.valueInfo.length){i.valueInfo=[];for(var a=0;a<t.valueInfo.length;++a)i.valueInfo[a]=E.onnx.ValueInfoProto.toObject(t.valueInfo[a],o)}if(t.quantizationAnnotation&&t.quantizationAnnotation.length){i.quantizationAnnotation=[];for(var a=0;a<t.quantizationAnnotation.length;++a)i.quantizationAnnotation[a]=E.onnx.TensorAnnotation.toObject(t.quantizationAnnotation[a],o)}if(t.sparseInitializer&&t.sparseInitializer.length){i.sparseInitializer=[];for(var a=0;a<t.sparseInitializer.length;++a)i.sparseInitializer[a]=E.onnx.SparseTensorProto.toObject(t.sparseInitializer[a],o)}return i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Je.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.GraphProto"},e}(),n.TensorProto=function(){function e(r){if(this.dims=[],this.floatData=[],this.int32Data=[],this.stringData=[],this.int64Data=[],this.externalData=[],this.doubleData=[],this.uint64Data=[],r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.dims=z.emptyArray,e.prototype.dataType=0,e.prototype.segment=null,e.prototype.floatData=z.emptyArray,e.prototype.int32Data=z.emptyArray,e.prototype.stringData=z.emptyArray,e.prototype.int64Data=z.emptyArray,e.prototype.name="",e.prototype.docString="",e.prototype.rawData=z.newBuffer([]),e.prototype.externalData=z.emptyArray,e.prototype.dataLocation=0,e.prototype.doubleData=z.emptyArray,e.prototype.uint64Data=z.emptyArray,e.create=function(t){return new e(t)},e.encode=function(t,o){if(o||(o=ut.create()),t.dims!=null&&t.dims.length){o.uint32(10).fork();for(var i=0;i<t.dims.length;++i)o.int64(t.dims[i]);o.ldelim()}if(t.dataType!=null&&Object.hasOwnProperty.call(t,"dataType")&&o.uint32(16).int32(t.dataType),t.segment!=null&&Object.hasOwnProperty.call(t,"segment")&&E.onnx.TensorProto.Segment.encode(t.segment,o.uint32(26).fork()).ldelim(),t.floatData!=null&&t.floatData.length){o.uint32(34).fork();for(var i=0;i<t.floatData.length;++i)o.float(t.floatData[i]);o.ldelim()}if(t.int32Data!=null&&t.int32Data.length){o.uint32(42).fork();for(var i=0;i<t.int32Data.length;++i)o.int32(t.int32Data[i]);o.ldelim()}if(t.stringData!=null&&t.stringData.length)for(var i=0;i<t.stringData.length;++i)o.uint32(50).bytes(t.stringData[i]);if(t.int64Data!=null&&t.int64Data.length){o.uint32(58).fork();for(var i=0;i<t.int64Data.length;++i)o.int64(t.int64Data[i]);o.ldelim()}if(t.name!=null&&Object.hasOwnProperty.call(t,"name")&&o.uint32(66).string(t.name),t.rawData!=null&&Object.hasOwnProperty.call(t,"rawData")&&o.uint32(74).bytes(t.rawData),t.doubleData!=null&&t.doubleData.length){o.uint32(82).fork();for(var i=0;i<t.doubleData.length;++i)o.double(t.doubleData[i]);o.ldelim()}if(t.uint64Data!=null&&t.uint64Data.length){o.uint32(90).fork();for(var i=0;i<t.uint64Data.length;++i)o.uint64(t.uint64Data[i]);o.ldelim()}if(t.docString!=null&&Object.hasOwnProperty.call(t,"docString")&&o.uint32(98).string(t.docString),t.externalData!=null&&t.externalData.length)for(var i=0;i<t.externalData.length;++i)E.onnx.StringStringEntryProto.encode(t.externalData[i],o.uint32(106).fork()).ldelim();return t.dataLocation!=null&&Object.hasOwnProperty.call(t,"dataLocation")&&o.uint32(112).int32(t.dataLocation),o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.TensorProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{if(a.dims&&a.dims.length||(a.dims=[]),(u&7)===2)for(var c=t.uint32()+t.pos;t.pos<c;)a.dims.push(t.int64());else a.dims.push(t.int64());break}case 2:{a.dataType=t.int32();break}case 3:{a.segment=E.onnx.TensorProto.Segment.decode(t,t.uint32());break}case 4:{if(a.floatData&&a.floatData.length||(a.floatData=[]),(u&7)===2)for(var c=t.uint32()+t.pos;t.pos<c;)a.floatData.push(t.float());else a.floatData.push(t.float());break}case 5:{if(a.int32Data&&a.int32Data.length||(a.int32Data=[]),(u&7)===2)for(var c=t.uint32()+t.pos;t.pos<c;)a.int32Data.push(t.int32());else a.int32Data.push(t.int32());break}case 6:{a.stringData&&a.stringData.length||(a.stringData=[]),a.stringData.push(t.bytes());break}case 7:{if(a.int64Data&&a.int64Data.length||(a.int64Data=[]),(u&7)===2)for(var c=t.uint32()+t.pos;t.pos<c;)a.int64Data.push(t.int64());else a.int64Data.push(t.int64());break}case 8:{a.name=t.string();break}case 12:{a.docString=t.string();break}case 9:{a.rawData=t.bytes();break}case 13:{a.externalData&&a.externalData.length||(a.externalData=[]),a.externalData.push(E.onnx.StringStringEntryProto.decode(t,t.uint32()));break}case 14:{a.dataLocation=t.int32();break}case 10:{if(a.doubleData&&a.doubleData.length||(a.doubleData=[]),(u&7)===2)for(var c=t.uint32()+t.pos;t.pos<c;)a.doubleData.push(t.double());else a.doubleData.push(t.double());break}case 11:{if(a.uint64Data&&a.uint64Data.length||(a.uint64Data=[]),(u&7)===2)for(var c=t.uint32()+t.pos;t.pos<c;)a.uint64Data.push(t.uint64());else a.uint64Data.push(t.uint64());break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.dims!=null&&t.hasOwnProperty("dims")){if(!Array.isArray(t.dims))return"dims: array expected";for(var o=0;o<t.dims.length;++o)if(!z.isInteger(t.dims[o])&&!(t.dims[o]&&z.isInteger(t.dims[o].low)&&z.isInteger(t.dims[o].high)))return"dims: integer|Long[] expected"}if(t.dataType!=null&&t.hasOwnProperty("dataType")&&!z.isInteger(t.dataType))return"dataType: integer expected";if(t.segment!=null&&t.hasOwnProperty("segment")){var i=E.onnx.TensorProto.Segment.verify(t.segment);if(i)return"segment."+i}if(t.floatData!=null&&t.hasOwnProperty("floatData")){if(!Array.isArray(t.floatData))return"floatData: array expected";for(var o=0;o<t.floatData.length;++o)if(typeof t.floatData[o]!="number")return"floatData: number[] expected"}if(t.int32Data!=null&&t.hasOwnProperty("int32Data")){if(!Array.isArray(t.int32Data))return"int32Data: array expected";for(var o=0;o<t.int32Data.length;++o)if(!z.isInteger(t.int32Data[o]))return"int32Data: integer[] expected"}if(t.stringData!=null&&t.hasOwnProperty("stringData")){if(!Array.isArray(t.stringData))return"stringData: array expected";for(var o=0;o<t.stringData.length;++o)if(!(t.stringData[o]&&typeof t.stringData[o].length=="number"||z.isString(t.stringData[o])))return"stringData: buffer[] expected"}if(t.int64Data!=null&&t.hasOwnProperty("int64Data")){if(!Array.isArray(t.int64Data))return"int64Data: array expected";for(var o=0;o<t.int64Data.length;++o)if(!z.isInteger(t.int64Data[o])&&!(t.int64Data[o]&&z.isInteger(t.int64Data[o].low)&&z.isInteger(t.int64Data[o].high)))return"int64Data: integer|Long[] expected"}if(t.name!=null&&t.hasOwnProperty("name")&&!z.isString(t.name))return"name: string expected";if(t.docString!=null&&t.hasOwnProperty("docString")&&!z.isString(t.docString))return"docString: string expected";if(t.rawData!=null&&t.hasOwnProperty("rawData")&&!(t.rawData&&typeof t.rawData.length=="number"||z.isString(t.rawData)))return"rawData: buffer expected";if(t.externalData!=null&&t.hasOwnProperty("externalData")){if(!Array.isArray(t.externalData))return"externalData: array expected";for(var o=0;o<t.externalData.length;++o){var i=E.onnx.StringStringEntryProto.verify(t.externalData[o]);if(i)return"externalData."+i}}if(t.dataLocation!=null&&t.hasOwnProperty("dataLocation"))switch(t.dataLocation){default:return"dataLocation: enum value expected";case 0:case 1:break}if(t.doubleData!=null&&t.hasOwnProperty("doubleData")){if(!Array.isArray(t.doubleData))return"doubleData: array expected";for(var o=0;o<t.doubleData.length;++o)if(typeof t.doubleData[o]!="number")return"doubleData: number[] expected"}if(t.uint64Data!=null&&t.hasOwnProperty("uint64Data")){if(!Array.isArray(t.uint64Data))return"uint64Data: array expected";for(var o=0;o<t.uint64Data.length;++o)if(!z.isInteger(t.uint64Data[o])&&!(t.uint64Data[o]&&z.isInteger(t.uint64Data[o].low)&&z.isInteger(t.uint64Data[o].high)))return"uint64Data: integer|Long[] expected"}return null},e.fromObject=function(t){if(t instanceof E.onnx.TensorProto)return t;var o=new E.onnx.TensorProto;if(t.dims){if(!Array.isArray(t.dims))throw TypeError(".onnx.TensorProto.dims: array expected");o.dims=[];for(var i=0;i<t.dims.length;++i)z.Long?(o.dims[i]=z.Long.fromValue(t.dims[i])).unsigned=!1:typeof t.dims[i]=="string"?o.dims[i]=parseInt(t.dims[i],10):typeof t.dims[i]=="number"?o.dims[i]=t.dims[i]:typeof t.dims[i]=="object"&&(o.dims[i]=new z.LongBits(t.dims[i].low>>>0,t.dims[i].high>>>0).toNumber())}if(t.dataType!=null&&(o.dataType=t.dataType|0),t.segment!=null){if(typeof t.segment!="object")throw TypeError(".onnx.TensorProto.segment: object expected");o.segment=E.onnx.TensorProto.Segment.fromObject(t.segment)}if(t.floatData){if(!Array.isArray(t.floatData))throw TypeError(".onnx.TensorProto.floatData: array expected");o.floatData=[];for(var i=0;i<t.floatData.length;++i)o.floatData[i]=Number(t.floatData[i])}if(t.int32Data){if(!Array.isArray(t.int32Data))throw TypeError(".onnx.TensorProto.int32Data: array expected");o.int32Data=[];for(var i=0;i<t.int32Data.length;++i)o.int32Data[i]=t.int32Data[i]|0}if(t.stringData){if(!Array.isArray(t.stringData))throw TypeError(".onnx.TensorProto.stringData: array expected");o.stringData=[];for(var i=0;i<t.stringData.length;++i)typeof t.stringData[i]=="string"?z.base64.decode(t.stringData[i],o.stringData[i]=z.newBuffer(z.base64.length(t.stringData[i])),0):t.stringData[i].length>=0&&(o.stringData[i]=t.stringData[i])}if(t.int64Data){if(!Array.isArray(t.int64Data))throw TypeError(".onnx.TensorProto.int64Data: array expected");o.int64Data=[];for(var i=0;i<t.int64Data.length;++i)z.Long?(o.int64Data[i]=z.Long.fromValue(t.int64Data[i])).unsigned=!1:typeof t.int64Data[i]=="string"?o.int64Data[i]=parseInt(t.int64Data[i],10):typeof t.int64Data[i]=="number"?o.int64Data[i]=t.int64Data[i]:typeof t.int64Data[i]=="object"&&(o.int64Data[i]=new z.LongBits(t.int64Data[i].low>>>0,t.int64Data[i].high>>>0).toNumber())}if(t.name!=null&&(o.name=String(t.name)),t.docString!=null&&(o.docString=String(t.docString)),t.rawData!=null&&(typeof t.rawData=="string"?z.base64.decode(t.rawData,o.rawData=z.newBuffer(z.base64.length(t.rawData)),0):t.rawData.length>=0&&(o.rawData=t.rawData)),t.externalData){if(!Array.isArray(t.externalData))throw TypeError(".onnx.TensorProto.externalData: array expected");o.externalData=[];for(var i=0;i<t.externalData.length;++i){if(typeof t.externalData[i]!="object")throw TypeError(".onnx.TensorProto.externalData: object expected");o.externalData[i]=E.onnx.StringStringEntryProto.fromObject(t.externalData[i])}}switch(t.dataLocation){default:if(typeof t.dataLocation=="number"){o.dataLocation=t.dataLocation;break}break;case"DEFAULT":case 0:o.dataLocation=0;break;case"EXTERNAL":case 1:o.dataLocation=1;break}if(t.doubleData){if(!Array.isArray(t.doubleData))throw TypeError(".onnx.TensorProto.doubleData: array expected");o.doubleData=[];for(var i=0;i<t.doubleData.length;++i)o.doubleData[i]=Number(t.doubleData[i])}if(t.uint64Data){if(!Array.isArray(t.uint64Data))throw TypeError(".onnx.TensorProto.uint64Data: array expected");o.uint64Data=[];for(var i=0;i<t.uint64Data.length;++i)z.Long?(o.uint64Data[i]=z.Long.fromValue(t.uint64Data[i])).unsigned=!0:typeof t.uint64Data[i]=="string"?o.uint64Data[i]=parseInt(t.uint64Data[i],10):typeof t.uint64Data[i]=="number"?o.uint64Data[i]=t.uint64Data[i]:typeof t.uint64Data[i]=="object"&&(o.uint64Data[i]=new z.LongBits(t.uint64Data[i].low>>>0,t.uint64Data[i].high>>>0).toNumber(!0))}return o},e.toObject=function(t,o){o||(o={});var i={};if((o.arrays||o.defaults)&&(i.dims=[],i.floatData=[],i.int32Data=[],i.stringData=[],i.int64Data=[],i.doubleData=[],i.uint64Data=[],i.externalData=[]),o.defaults&&(i.dataType=0,i.segment=null,i.name="",o.bytes===String?i.rawData="":(i.rawData=[],o.bytes!==Array&&(i.rawData=z.newBuffer(i.rawData))),i.docString="",i.dataLocation=o.enums===String?"DEFAULT":0),t.dims&&t.dims.length){i.dims=[];for(var a=0;a<t.dims.length;++a)typeof t.dims[a]=="number"?i.dims[a]=o.longs===String?String(t.dims[a]):t.dims[a]:i.dims[a]=o.longs===String?z.Long.prototype.toString.call(t.dims[a]):o.longs===Number?new z.LongBits(t.dims[a].low>>>0,t.dims[a].high>>>0).toNumber():t.dims[a]}if(t.dataType!=null&&t.hasOwnProperty("dataType")&&(i.dataType=t.dataType),t.segment!=null&&t.hasOwnProperty("segment")&&(i.segment=E.onnx.TensorProto.Segment.toObject(t.segment,o)),t.floatData&&t.floatData.length){i.floatData=[];for(var a=0;a<t.floatData.length;++a)i.floatData[a]=o.json&&!isFinite(t.floatData[a])?String(t.floatData[a]):t.floatData[a]}if(t.int32Data&&t.int32Data.length){i.int32Data=[];for(var a=0;a<t.int32Data.length;++a)i.int32Data[a]=t.int32Data[a]}if(t.stringData&&t.stringData.length){i.stringData=[];for(var a=0;a<t.stringData.length;++a)i.stringData[a]=o.bytes===String?z.base64.encode(t.stringData[a],0,t.stringData[a].length):o.bytes===Array?Array.prototype.slice.call(t.stringData[a]):t.stringData[a]}if(t.int64Data&&t.int64Data.length){i.int64Data=[];for(var a=0;a<t.int64Data.length;++a)typeof t.int64Data[a]=="number"?i.int64Data[a]=o.longs===String?String(t.int64Data[a]):t.int64Data[a]:i.int64Data[a]=o.longs===String?z.Long.prototype.toString.call(t.int64Data[a]):o.longs===Number?new z.LongBits(t.int64Data[a].low>>>0,t.int64Data[a].high>>>0).toNumber():t.int64Data[a]}if(t.name!=null&&t.hasOwnProperty("name")&&(i.name=t.name),t.rawData!=null&&t.hasOwnProperty("rawData")&&(i.rawData=o.bytes===String?z.base64.encode(t.rawData,0,t.rawData.length):o.bytes===Array?Array.prototype.slice.call(t.rawData):t.rawData),t.doubleData&&t.doubleData.length){i.doubleData=[];for(var a=0;a<t.doubleData.length;++a)i.doubleData[a]=o.json&&!isFinite(t.doubleData[a])?String(t.doubleData[a]):t.doubleData[a]}if(t.uint64Data&&t.uint64Data.length){i.uint64Data=[];for(var a=0;a<t.uint64Data.length;++a)typeof t.uint64Data[a]=="number"?i.uint64Data[a]=o.longs===String?String(t.uint64Data[a]):t.uint64Data[a]:i.uint64Data[a]=o.longs===String?z.Long.prototype.toString.call(t.uint64Data[a]):o.longs===Number?new z.LongBits(t.uint64Data[a].low>>>0,t.uint64Data[a].high>>>0).toNumber(!0):t.uint64Data[a]}if(t.docString!=null&&t.hasOwnProperty("docString")&&(i.docString=t.docString),t.externalData&&t.externalData.length){i.externalData=[];for(var a=0;a<t.externalData.length;++a)i.externalData[a]=E.onnx.StringStringEntryProto.toObject(t.externalData[a],o)}return t.dataLocation!=null&&t.hasOwnProperty("dataLocation")&&(i.dataLocation=o.enums===String?E.onnx.TensorProto.DataLocation[t.dataLocation]===void 0?t.dataLocation:E.onnx.TensorProto.DataLocation[t.dataLocation]:t.dataLocation),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Je.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.TensorProto"},e.DataType=function(){var r={},t=Object.create(r);return t[r[0]="UNDEFINED"]=0,t[r[1]="FLOAT"]=1,t[r[2]="UINT8"]=2,t[r[3]="INT8"]=3,t[r[4]="UINT16"]=4,t[r[5]="INT16"]=5,t[r[6]="INT32"]=6,t[r[7]="INT64"]=7,t[r[8]="STRING"]=8,t[r[9]="BOOL"]=9,t[r[10]="FLOAT16"]=10,t[r[11]="DOUBLE"]=11,t[r[12]="UINT32"]=12,t[r[13]="UINT64"]=13,t[r[14]="COMPLEX64"]=14,t[r[15]="COMPLEX128"]=15,t[r[16]="BFLOAT16"]=16,t[r[17]="FLOAT8E4M3FN"]=17,t[r[18]="FLOAT8E4M3FNUZ"]=18,t[r[19]="FLOAT8E5M2"]=19,t[r[20]="FLOAT8E5M2FNUZ"]=20,t}(),e.Segment=function(){function r(t){if(t)for(var o=Object.keys(t),i=0;i<o.length;++i)t[o[i]]!=null&&(this[o[i]]=t[o[i]])}return r.prototype.begin=z.Long?z.Long.fromBits(0,0,!1):0,r.prototype.end=z.Long?z.Long.fromBits(0,0,!1):0,r.create=function(o){return new r(o)},r.encode=function(o,i){return i||(i=ut.create()),o.begin!=null&&Object.hasOwnProperty.call(o,"begin")&&i.uint32(8).int64(o.begin),o.end!=null&&Object.hasOwnProperty.call(o,"end")&&i.uint32(16).int64(o.end),i},r.encodeDelimited=function(o,i){return this.encode(o,i).ldelim()},r.decode=function(o,i){o instanceof oe||(o=oe.create(o));for(var a=i===void 0?o.len:o.pos+i,u=new E.onnx.TensorProto.Segment;o.pos<a;){var c=o.uint32();switch(c>>>3){case 1:{u.begin=o.int64();break}case 2:{u.end=o.int64();break}default:o.skipType(c&7);break}}return u},r.decodeDelimited=function(o){return o instanceof oe||(o=new oe(o)),this.decode(o,o.uint32())},r.verify=function(o){return typeof o!="object"||o===null?"object expected":o.begin!=null&&o.hasOwnProperty("begin")&&!z.isInteger(o.begin)&&!(o.begin&&z.isInteger(o.begin.low)&&z.isInteger(o.begin.high))?"begin: integer|Long expected":o.end!=null&&o.hasOwnProperty("end")&&!z.isInteger(o.end)&&!(o.end&&z.isInteger(o.end.low)&&z.isInteger(o.end.high))?"end: integer|Long expected":null},r.fromObject=function(o){if(o instanceof E.onnx.TensorProto.Segment)return o;var i=new E.onnx.TensorProto.Segment;return o.begin!=null&&(z.Long?(i.begin=z.Long.fromValue(o.begin)).unsigned=!1:typeof o.begin=="string"?i.begin=parseInt(o.begin,10):typeof o.begin=="number"?i.begin=o.begin:typeof o.begin=="object"&&(i.begin=new z.LongBits(o.begin.low>>>0,o.begin.high>>>0).toNumber())),o.end!=null&&(z.Long?(i.end=z.Long.fromValue(o.end)).unsigned=!1:typeof o.end=="string"?i.end=parseInt(o.end,10):typeof o.end=="number"?i.end=o.end:typeof o.end=="object"&&(i.end=new z.LongBits(o.end.low>>>0,o.end.high>>>0).toNumber())),i},r.toObject=function(o,i){i||(i={});var a={};if(i.defaults){if(z.Long){var u=new z.Long(0,0,!1);a.begin=i.longs===String?u.toString():i.longs===Number?u.toNumber():u}else a.begin=i.longs===String?"0":0;if(z.Long){var u=new z.Long(0,0,!1);a.end=i.longs===String?u.toString():i.longs===Number?u.toNumber():u}else a.end=i.longs===String?"0":0}return o.begin!=null&&o.hasOwnProperty("begin")&&(typeof o.begin=="number"?a.begin=i.longs===String?String(o.begin):o.begin:a.begin=i.longs===String?z.Long.prototype.toString.call(o.begin):i.longs===Number?new z.LongBits(o.begin.low>>>0,o.begin.high>>>0).toNumber():o.begin),o.end!=null&&o.hasOwnProperty("end")&&(typeof o.end=="number"?a.end=i.longs===String?String(o.end):o.end:a.end=i.longs===String?z.Long.prototype.toString.call(o.end):i.longs===Number?new z.LongBits(o.end.low>>>0,o.end.high>>>0).toNumber():o.end),a},r.prototype.toJSON=function(){return this.constructor.toObject(this,Je.util.toJSONOptions)},r.getTypeUrl=function(o){return o===void 0&&(o="type.googleapis.com"),o+"/onnx.TensorProto.Segment"},r}(),e.DataLocation=function(){var r={},t=Object.create(r);return t[r[0]="DEFAULT"]=0,t[r[1]="EXTERNAL"]=1,t}(),e}(),n.SparseTensorProto=function(){function e(r){if(this.dims=[],r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.values=null,e.prototype.indices=null,e.prototype.dims=z.emptyArray,e.create=function(t){return new e(t)},e.encode=function(t,o){if(o||(o=ut.create()),t.values!=null&&Object.hasOwnProperty.call(t,"values")&&E.onnx.TensorProto.encode(t.values,o.uint32(10).fork()).ldelim(),t.indices!=null&&Object.hasOwnProperty.call(t,"indices")&&E.onnx.TensorProto.encode(t.indices,o.uint32(18).fork()).ldelim(),t.dims!=null&&t.dims.length){o.uint32(26).fork();for(var i=0;i<t.dims.length;++i)o.int64(t.dims[i]);o.ldelim()}return o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.SparseTensorProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.values=E.onnx.TensorProto.decode(t,t.uint32());break}case 2:{a.indices=E.onnx.TensorProto.decode(t,t.uint32());break}case 3:{if(a.dims&&a.dims.length||(a.dims=[]),(u&7)===2)for(var c=t.uint32()+t.pos;t.pos<c;)a.dims.push(t.int64());else a.dims.push(t.int64());break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.values!=null&&t.hasOwnProperty("values")){var o=E.onnx.TensorProto.verify(t.values);if(o)return"values."+o}if(t.indices!=null&&t.hasOwnProperty("indices")){var o=E.onnx.TensorProto.verify(t.indices);if(o)return"indices."+o}if(t.dims!=null&&t.hasOwnProperty("dims")){if(!Array.isArray(t.dims))return"dims: array expected";for(var i=0;i<t.dims.length;++i)if(!z.isInteger(t.dims[i])&&!(t.dims[i]&&z.isInteger(t.dims[i].low)&&z.isInteger(t.dims[i].high)))return"dims: integer|Long[] expected"}return null},e.fromObject=function(t){if(t instanceof E.onnx.SparseTensorProto)return t;var o=new E.onnx.SparseTensorProto;if(t.values!=null){if(typeof t.values!="object")throw TypeError(".onnx.SparseTensorProto.values: object expected");o.values=E.onnx.TensorProto.fromObject(t.values)}if(t.indices!=null){if(typeof t.indices!="object")throw TypeError(".onnx.SparseTensorProto.indices: object expected");o.indices=E.onnx.TensorProto.fromObject(t.indices)}if(t.dims){if(!Array.isArray(t.dims))throw TypeError(".onnx.SparseTensorProto.dims: array expected");o.dims=[];for(var i=0;i<t.dims.length;++i)z.Long?(o.dims[i]=z.Long.fromValue(t.dims[i])).unsigned=!1:typeof t.dims[i]=="string"?o.dims[i]=parseInt(t.dims[i],10):typeof t.dims[i]=="number"?o.dims[i]=t.dims[i]:typeof t.dims[i]=="object"&&(o.dims[i]=new z.LongBits(t.dims[i].low>>>0,t.dims[i].high>>>0).toNumber())}return o},e.toObject=function(t,o){o||(o={});var i={};if((o.arrays||o.defaults)&&(i.dims=[]),o.defaults&&(i.values=null,i.indices=null),t.values!=null&&t.hasOwnProperty("values")&&(i.values=E.onnx.TensorProto.toObject(t.values,o)),t.indices!=null&&t.hasOwnProperty("indices")&&(i.indices=E.onnx.TensorProto.toObject(t.indices,o)),t.dims&&t.dims.length){i.dims=[];for(var a=0;a<t.dims.length;++a)typeof t.dims[a]=="number"?i.dims[a]=o.longs===String?String(t.dims[a]):t.dims[a]:i.dims[a]=o.longs===String?z.Long.prototype.toString.call(t.dims[a]):o.longs===Number?new z.LongBits(t.dims[a].low>>>0,t.dims[a].high>>>0).toNumber():t.dims[a]}return i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Je.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.SparseTensorProto"},e}(),n.TensorShapeProto=function(){function e(r){if(this.dim=[],r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.dim=z.emptyArray,e.create=function(t){return new e(t)},e.encode=function(t,o){if(o||(o=ut.create()),t.dim!=null&&t.dim.length)for(var i=0;i<t.dim.length;++i)E.onnx.TensorShapeProto.Dimension.encode(t.dim[i],o.uint32(10).fork()).ldelim();return o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.TensorShapeProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.dim&&a.dim.length||(a.dim=[]),a.dim.push(E.onnx.TensorShapeProto.Dimension.decode(t,t.uint32()));break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.dim!=null&&t.hasOwnProperty("dim")){if(!Array.isArray(t.dim))return"dim: array expected";for(var o=0;o<t.dim.length;++o){var i=E.onnx.TensorShapeProto.Dimension.verify(t.dim[o]);if(i)return"dim."+i}}return null},e.fromObject=function(t){if(t instanceof E.onnx.TensorShapeProto)return t;var o=new E.onnx.TensorShapeProto;if(t.dim){if(!Array.isArray(t.dim))throw TypeError(".onnx.TensorShapeProto.dim: array expected");o.dim=[];for(var i=0;i<t.dim.length;++i){if(typeof t.dim[i]!="object")throw TypeError(".onnx.TensorShapeProto.dim: object expected");o.dim[i]=E.onnx.TensorShapeProto.Dimension.fromObject(t.dim[i])}}return o},e.toObject=function(t,o){o||(o={});var i={};if((o.arrays||o.defaults)&&(i.dim=[]),t.dim&&t.dim.length){i.dim=[];for(var a=0;a<t.dim.length;++a)i.dim[a]=E.onnx.TensorShapeProto.Dimension.toObject(t.dim[a],o)}return i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Je.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.TensorShapeProto"},e.Dimension=function(){function r(o){if(o)for(var i=Object.keys(o),a=0;a<i.length;++a)o[i[a]]!=null&&(this[i[a]]=o[i[a]])}r.prototype.dimValue=null,r.prototype.dimParam=null,r.prototype.denotation="";var t;return Object.defineProperty(r.prototype,"value",{get:z.oneOfGetter(t=["dimValue","dimParam"]),set:z.oneOfSetter(t)}),r.create=function(i){return new r(i)},r.encode=function(i,a){return a||(a=ut.create()),i.dimValue!=null&&Object.hasOwnProperty.call(i,"dimValue")&&a.uint32(8).int64(i.dimValue),i.dimParam!=null&&Object.hasOwnProperty.call(i,"dimParam")&&a.uint32(18).string(i.dimParam),i.denotation!=null&&Object.hasOwnProperty.call(i,"denotation")&&a.uint32(26).string(i.denotation),a},r.encodeDelimited=function(i,a){return this.encode(i,a).ldelim()},r.decode=function(i,a){i instanceof oe||(i=oe.create(i));for(var u=a===void 0?i.len:i.pos+a,c=new E.onnx.TensorShapeProto.Dimension;i.pos<u;){var f=i.uint32();switch(f>>>3){case 1:{c.dimValue=i.int64();break}case 2:{c.dimParam=i.string();break}case 3:{c.denotation=i.string();break}default:i.skipType(f&7);break}}return c},r.decodeDelimited=function(i){return i instanceof oe||(i=new oe(i)),this.decode(i,i.uint32())},r.verify=function(i){if(typeof i!="object"||i===null)return"object expected";var a={};if(i.dimValue!=null&&i.hasOwnProperty("dimValue")&&(a.value=1,!z.isInteger(i.dimValue)&&!(i.dimValue&&z.isInteger(i.dimValue.low)&&z.isInteger(i.dimValue.high))))return"dimValue: integer|Long expected";if(i.dimParam!=null&&i.hasOwnProperty("dimParam")){if(a.value===1)return"value: multiple values";if(a.value=1,!z.isString(i.dimParam))return"dimParam: string expected"}return i.denotation!=null&&i.hasOwnProperty("denotation")&&!z.isString(i.denotation)?"denotation: string expected":null},r.fromObject=function(i){if(i instanceof E.onnx.TensorShapeProto.Dimension)return i;var a=new E.onnx.TensorShapeProto.Dimension;return i.dimValue!=null&&(z.Long?(a.dimValue=z.Long.fromValue(i.dimValue)).unsigned=!1:typeof i.dimValue=="string"?a.dimValue=parseInt(i.dimValue,10):typeof i.dimValue=="number"?a.dimValue=i.dimValue:typeof i.dimValue=="object"&&(a.dimValue=new z.LongBits(i.dimValue.low>>>0,i.dimValue.high>>>0).toNumber())),i.dimParam!=null&&(a.dimParam=String(i.dimParam)),i.denotation!=null&&(a.denotation=String(i.denotation)),a},r.toObject=function(i,a){a||(a={});var u={};return a.defaults&&(u.denotation=""),i.dimValue!=null&&i.hasOwnProperty("dimValue")&&(typeof i.dimValue=="number"?u.dimValue=a.longs===String?String(i.dimValue):i.dimValue:u.dimValue=a.longs===String?z.Long.prototype.toString.call(i.dimValue):a.longs===Number?new z.LongBits(i.dimValue.low>>>0,i.dimValue.high>>>0).toNumber():i.dimValue,a.oneofs&&(u.value="dimValue")),i.dimParam!=null&&i.hasOwnProperty("dimParam")&&(u.dimParam=i.dimParam,a.oneofs&&(u.value="dimParam")),i.denotation!=null&&i.hasOwnProperty("denotation")&&(u.denotation=i.denotation),u},r.prototype.toJSON=function(){return this.constructor.toObject(this,Je.util.toJSONOptions)},r.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.TensorShapeProto.Dimension"},r}(),e}(),n.TypeProto=function(){function e(t){if(t)for(var o=Object.keys(t),i=0;i<o.length;++i)t[o[i]]!=null&&(this[o[i]]=t[o[i]])}e.prototype.tensorType=null,e.prototype.sequenceType=null,e.prototype.mapType=null,e.prototype.optionalType=null,e.prototype.sparseTensorType=null,e.prototype.denotation="";var r;return Object.defineProperty(e.prototype,"value",{get:z.oneOfGetter(r=["tensorType","sequenceType","mapType","optionalType","sparseTensorType"]),set:z.oneOfSetter(r)}),e.create=function(o){return new e(o)},e.encode=function(o,i){return i||(i=ut.create()),o.tensorType!=null&&Object.hasOwnProperty.call(o,"tensorType")&&E.onnx.TypeProto.Tensor.encode(o.tensorType,i.uint32(10).fork()).ldelim(),o.sequenceType!=null&&Object.hasOwnProperty.call(o,"sequenceType")&&E.onnx.TypeProto.Sequence.encode(o.sequenceType,i.uint32(34).fork()).ldelim(),o.mapType!=null&&Object.hasOwnProperty.call(o,"mapType")&&E.onnx.TypeProto.Map.encode(o.mapType,i.uint32(42).fork()).ldelim(),o.denotation!=null&&Object.hasOwnProperty.call(o,"denotation")&&i.uint32(50).string(o.denotation),o.sparseTensorType!=null&&Object.hasOwnProperty.call(o,"sparseTensorType")&&E.onnx.TypeProto.SparseTensor.encode(o.sparseTensorType,i.uint32(66).fork()).ldelim(),o.optionalType!=null&&Object.hasOwnProperty.call(o,"optionalType")&&E.onnx.TypeProto.Optional.encode(o.optionalType,i.uint32(74).fork()).ldelim(),i},e.encodeDelimited=function(o,i){return this.encode(o,i).ldelim()},e.decode=function(o,i){o instanceof oe||(o=oe.create(o));for(var a=i===void 0?o.len:o.pos+i,u=new E.onnx.TypeProto;o.pos<a;){var c=o.uint32();switch(c>>>3){case 1:{u.tensorType=E.onnx.TypeProto.Tensor.decode(o,o.uint32());break}case 4:{u.sequenceType=E.onnx.TypeProto.Sequence.decode(o,o.uint32());break}case 5:{u.mapType=E.onnx.TypeProto.Map.decode(o,o.uint32());break}case 9:{u.optionalType=E.onnx.TypeProto.Optional.decode(o,o.uint32());break}case 8:{u.sparseTensorType=E.onnx.TypeProto.SparseTensor.decode(o,o.uint32());break}case 6:{u.denotation=o.string();break}default:o.skipType(c&7);break}}return u},e.decodeDelimited=function(o){return o instanceof oe||(o=new oe(o)),this.decode(o,o.uint32())},e.verify=function(o){if(typeof o!="object"||o===null)return"object expected";var i={};if(o.tensorType!=null&&o.hasOwnProperty("tensorType")){i.value=1;{var a=E.onnx.TypeProto.Tensor.verify(o.tensorType);if(a)return"tensorType."+a}}if(o.sequenceType!=null&&o.hasOwnProperty("sequenceType")){if(i.value===1)return"value: multiple values";i.value=1;{var a=E.onnx.TypeProto.Sequence.verify(o.sequenceType);if(a)return"sequenceType."+a}}if(o.mapType!=null&&o.hasOwnProperty("mapType")){if(i.value===1)return"value: multiple values";i.value=1;{var a=E.onnx.TypeProto.Map.verify(o.mapType);if(a)return"mapType."+a}}if(o.optionalType!=null&&o.hasOwnProperty("optionalType")){if(i.value===1)return"value: multiple values";i.value=1;{var a=E.onnx.TypeProto.Optional.verify(o.optionalType);if(a)return"optionalType."+a}}if(o.sparseTensorType!=null&&o.hasOwnProperty("sparseTensorType")){if(i.value===1)return"value: multiple values";i.value=1;{var a=E.onnx.TypeProto.SparseTensor.verify(o.sparseTensorType);if(a)return"sparseTensorType."+a}}return o.denotation!=null&&o.hasOwnProperty("denotation")&&!z.isString(o.denotation)?"denotation: string expected":null},e.fromObject=function(o){if(o instanceof E.onnx.TypeProto)return o;var i=new E.onnx.TypeProto;if(o.tensorType!=null){if(typeof o.tensorType!="object")throw TypeError(".onnx.TypeProto.tensorType: object expected");i.tensorType=E.onnx.TypeProto.Tensor.fromObject(o.tensorType)}if(o.sequenceType!=null){if(typeof o.sequenceType!="object")throw TypeError(".onnx.TypeProto.sequenceType: object expected");i.sequenceType=E.onnx.TypeProto.Sequence.fromObject(o.sequenceType)}if(o.mapType!=null){if(typeof o.mapType!="object")throw TypeError(".onnx.TypeProto.mapType: object expected");i.mapType=E.onnx.TypeProto.Map.fromObject(o.mapType)}if(o.optionalType!=null){if(typeof o.optionalType!="object")throw TypeError(".onnx.TypeProto.optionalType: object expected");i.optionalType=E.onnx.TypeProto.Optional.fromObject(o.optionalType)}if(o.sparseTensorType!=null){if(typeof o.sparseTensorType!="object")throw TypeError(".onnx.TypeProto.sparseTensorType: object expected");i.sparseTensorType=E.onnx.TypeProto.SparseTensor.fromObject(o.sparseTensorType)}return o.denotation!=null&&(i.denotation=String(o.denotation)),i},e.toObject=function(o,i){i||(i={});var a={};return i.defaults&&(a.denotation=""),o.tensorType!=null&&o.hasOwnProperty("tensorType")&&(a.tensorType=E.onnx.TypeProto.Tensor.toObject(o.tensorType,i),i.oneofs&&(a.value="tensorType")),o.sequenceType!=null&&o.hasOwnProperty("sequenceType")&&(a.sequenceType=E.onnx.TypeProto.Sequence.toObject(o.sequenceType,i),i.oneofs&&(a.value="sequenceType")),o.mapType!=null&&o.hasOwnProperty("mapType")&&(a.mapType=E.onnx.TypeProto.Map.toObject(o.mapType,i),i.oneofs&&(a.value="mapType")),o.denotation!=null&&o.hasOwnProperty("denotation")&&(a.denotation=o.denotation),o.sparseTensorType!=null&&o.hasOwnProperty("sparseTensorType")&&(a.sparseTensorType=E.onnx.TypeProto.SparseTensor.toObject(o.sparseTensorType,i),i.oneofs&&(a.value="sparseTensorType")),o.optionalType!=null&&o.hasOwnProperty("optionalType")&&(a.optionalType=E.onnx.TypeProto.Optional.toObject(o.optionalType,i),i.oneofs&&(a.value="optionalType")),a},e.prototype.toJSON=function(){return this.constructor.toObject(this,Je.util.toJSONOptions)},e.getTypeUrl=function(o){return o===void 0&&(o="type.googleapis.com"),o+"/onnx.TypeProto"},e.Tensor=function(){function t(o){if(o)for(var i=Object.keys(o),a=0;a<i.length;++a)o[i[a]]!=null&&(this[i[a]]=o[i[a]])}return t.prototype.elemType=0,t.prototype.shape=null,t.create=function(i){return new t(i)},t.encode=function(i,a){return a||(a=ut.create()),i.elemType!=null&&Object.hasOwnProperty.call(i,"elemType")&&a.uint32(8).int32(i.elemType),i.shape!=null&&Object.hasOwnProperty.call(i,"shape")&&E.onnx.TensorShapeProto.encode(i.shape,a.uint32(18).fork()).ldelim(),a},t.encodeDelimited=function(i,a){return this.encode(i,a).ldelim()},t.decode=function(i,a){i instanceof oe||(i=oe.create(i));for(var u=a===void 0?i.len:i.pos+a,c=new E.onnx.TypeProto.Tensor;i.pos<u;){var f=i.uint32();switch(f>>>3){case 1:{c.elemType=i.int32();break}case 2:{c.shape=E.onnx.TensorShapeProto.decode(i,i.uint32());break}default:i.skipType(f&7);break}}return c},t.decodeDelimited=function(i){return i instanceof oe||(i=new oe(i)),this.decode(i,i.uint32())},t.verify=function(i){if(typeof i!="object"||i===null)return"object expected";if(i.elemType!=null&&i.hasOwnProperty("elemType")&&!z.isInteger(i.elemType))return"elemType: integer expected";if(i.shape!=null&&i.hasOwnProperty("shape")){var a=E.onnx.TensorShapeProto.verify(i.shape);if(a)return"shape."+a}return null},t.fromObject=function(i){if(i instanceof E.onnx.TypeProto.Tensor)return i;var a=new E.onnx.TypeProto.Tensor;if(i.elemType!=null&&(a.elemType=i.elemType|0),i.shape!=null){if(typeof i.shape!="object")throw TypeError(".onnx.TypeProto.Tensor.shape: object expected");a.shape=E.onnx.TensorShapeProto.fromObject(i.shape)}return a},t.toObject=function(i,a){a||(a={});var u={};return a.defaults&&(u.elemType=0,u.shape=null),i.elemType!=null&&i.hasOwnProperty("elemType")&&(u.elemType=i.elemType),i.shape!=null&&i.hasOwnProperty("shape")&&(u.shape=E.onnx.TensorShapeProto.toObject(i.shape,a)),u},t.prototype.toJSON=function(){return this.constructor.toObject(this,Je.util.toJSONOptions)},t.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.TypeProto.Tensor"},t}(),e.Sequence=function(){function t(o){if(o)for(var i=Object.keys(o),a=0;a<i.length;++a)o[i[a]]!=null&&(this[i[a]]=o[i[a]])}return t.prototype.elemType=null,t.create=function(i){return new t(i)},t.encode=function(i,a){return a||(a=ut.create()),i.elemType!=null&&Object.hasOwnProperty.call(i,"elemType")&&E.onnx.TypeProto.encode(i.elemType,a.uint32(10).fork()).ldelim(),a},t.encodeDelimited=function(i,a){return this.encode(i,a).ldelim()},t.decode=function(i,a){i instanceof oe||(i=oe.create(i));for(var u=a===void 0?i.len:i.pos+a,c=new E.onnx.TypeProto.Sequence;i.pos<u;){var f=i.uint32();switch(f>>>3){case 1:{c.elemType=E.onnx.TypeProto.decode(i,i.uint32());break}default:i.skipType(f&7);break}}return c},t.decodeDelimited=function(i){return i instanceof oe||(i=new oe(i)),this.decode(i,i.uint32())},t.verify=function(i){if(typeof i!="object"||i===null)return"object expected";if(i.elemType!=null&&i.hasOwnProperty("elemType")){var a=E.onnx.TypeProto.verify(i.elemType);if(a)return"elemType."+a}return null},t.fromObject=function(i){if(i instanceof E.onnx.TypeProto.Sequence)return i;var a=new E.onnx.TypeProto.Sequence;if(i.elemType!=null){if(typeof i.elemType!="object")throw TypeError(".onnx.TypeProto.Sequence.elemType: object expected");a.elemType=E.onnx.TypeProto.fromObject(i.elemType)}return a},t.toObject=function(i,a){a||(a={});var u={};return a.defaults&&(u.elemType=null),i.elemType!=null&&i.hasOwnProperty("elemType")&&(u.elemType=E.onnx.TypeProto.toObject(i.elemType,a)),u},t.prototype.toJSON=function(){return this.constructor.toObject(this,Je.util.toJSONOptions)},t.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.TypeProto.Sequence"},t}(),e.Map=function(){function t(o){if(o)for(var i=Object.keys(o),a=0;a<i.length;++a)o[i[a]]!=null&&(this[i[a]]=o[i[a]])}return t.prototype.keyType=0,t.prototype.valueType=null,t.create=function(i){return new t(i)},t.encode=function(i,a){return a||(a=ut.create()),i.keyType!=null&&Object.hasOwnProperty.call(i,"keyType")&&a.uint32(8).int32(i.keyType),i.valueType!=null&&Object.hasOwnProperty.call(i,"valueType")&&E.onnx.TypeProto.encode(i.valueType,a.uint32(18).fork()).ldelim(),a},t.encodeDelimited=function(i,a){return this.encode(i,a).ldelim()},t.decode=function(i,a){i instanceof oe||(i=oe.create(i));for(var u=a===void 0?i.len:i.pos+a,c=new E.onnx.TypeProto.Map;i.pos<u;){var f=i.uint32();switch(f>>>3){case 1:{c.keyType=i.int32();break}case 2:{c.valueType=E.onnx.TypeProto.decode(i,i.uint32());break}default:i.skipType(f&7);break}}return c},t.decodeDelimited=function(i){return i instanceof oe||(i=new oe(i)),this.decode(i,i.uint32())},t.verify=function(i){if(typeof i!="object"||i===null)return"object expected";if(i.keyType!=null&&i.hasOwnProperty("keyType")&&!z.isInteger(i.keyType))return"keyType: integer expected";if(i.valueType!=null&&i.hasOwnProperty("valueType")){var a=E.onnx.TypeProto.verify(i.valueType);if(a)return"valueType."+a}return null},t.fromObject=function(i){if(i instanceof E.onnx.TypeProto.Map)return i;var a=new E.onnx.TypeProto.Map;if(i.keyType!=null&&(a.keyType=i.keyType|0),i.valueType!=null){if(typeof i.valueType!="object")throw TypeError(".onnx.TypeProto.Map.valueType: object expected");a.valueType=E.onnx.TypeProto.fromObject(i.valueType)}return a},t.toObject=function(i,a){a||(a={});var u={};return a.defaults&&(u.keyType=0,u.valueType=null),i.keyType!=null&&i.hasOwnProperty("keyType")&&(u.keyType=i.keyType),i.valueType!=null&&i.hasOwnProperty("valueType")&&(u.valueType=E.onnx.TypeProto.toObject(i.valueType,a)),u},t.prototype.toJSON=function(){return this.constructor.toObject(this,Je.util.toJSONOptions)},t.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.TypeProto.Map"},t}(),e.Optional=function(){function t(o){if(o)for(var i=Object.keys(o),a=0;a<i.length;++a)o[i[a]]!=null&&(this[i[a]]=o[i[a]])}return t.prototype.elemType=null,t.create=function(i){return new t(i)},t.encode=function(i,a){return a||(a=ut.create()),i.elemType!=null&&Object.hasOwnProperty.call(i,"elemType")&&E.onnx.TypeProto.encode(i.elemType,a.uint32(10).fork()).ldelim(),a},t.encodeDelimited=function(i,a){return this.encode(i,a).ldelim()},t.decode=function(i,a){i instanceof oe||(i=oe.create(i));for(var u=a===void 0?i.len:i.pos+a,c=new E.onnx.TypeProto.Optional;i.pos<u;){var f=i.uint32();switch(f>>>3){case 1:{c.elemType=E.onnx.TypeProto.decode(i,i.uint32());break}default:i.skipType(f&7);break}}return c},t.decodeDelimited=function(i){return i instanceof oe||(i=new oe(i)),this.decode(i,i.uint32())},t.verify=function(i){if(typeof i!="object"||i===null)return"object expected";if(i.elemType!=null&&i.hasOwnProperty("elemType")){var a=E.onnx.TypeProto.verify(i.elemType);if(a)return"elemType."+a}return null},t.fromObject=function(i){if(i instanceof E.onnx.TypeProto.Optional)return i;var a=new E.onnx.TypeProto.Optional;if(i.elemType!=null){if(typeof i.elemType!="object")throw TypeError(".onnx.TypeProto.Optional.elemType: object expected");a.elemType=E.onnx.TypeProto.fromObject(i.elemType)}return a},t.toObject=function(i,a){a||(a={});var u={};return a.defaults&&(u.elemType=null),i.elemType!=null&&i.hasOwnProperty("elemType")&&(u.elemType=E.onnx.TypeProto.toObject(i.elemType,a)),u},t.prototype.toJSON=function(){return this.constructor.toObject(this,Je.util.toJSONOptions)},t.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.TypeProto.Optional"},t}(),e.SparseTensor=function(){function t(o){if(o)for(var i=Object.keys(o),a=0;a<i.length;++a)o[i[a]]!=null&&(this[i[a]]=o[i[a]])}return t.prototype.elemType=0,t.prototype.shape=null,t.create=function(i){return new t(i)},t.encode=function(i,a){return a||(a=ut.create()),i.elemType!=null&&Object.hasOwnProperty.call(i,"elemType")&&a.uint32(8).int32(i.elemType),i.shape!=null&&Object.hasOwnProperty.call(i,"shape")&&E.onnx.TensorShapeProto.encode(i.shape,a.uint32(18).fork()).ldelim(),a},t.encodeDelimited=function(i,a){return this.encode(i,a).ldelim()},t.decode=function(i,a){i instanceof oe||(i=oe.create(i));for(var u=a===void 0?i.len:i.pos+a,c=new E.onnx.TypeProto.SparseTensor;i.pos<u;){var f=i.uint32();switch(f>>>3){case 1:{c.elemType=i.int32();break}case 2:{c.shape=E.onnx.TensorShapeProto.decode(i,i.uint32());break}default:i.skipType(f&7);break}}return c},t.decodeDelimited=function(i){return i instanceof oe||(i=new oe(i)),this.decode(i,i.uint32())},t.verify=function(i){if(typeof i!="object"||i===null)return"object expected";if(i.elemType!=null&&i.hasOwnProperty("elemType")&&!z.isInteger(i.elemType))return"elemType: integer expected";if(i.shape!=null&&i.hasOwnProperty("shape")){var a=E.onnx.TensorShapeProto.verify(i.shape);if(a)return"shape."+a}return null},t.fromObject=function(i){if(i instanceof E.onnx.TypeProto.SparseTensor)return i;var a=new E.onnx.TypeProto.SparseTensor;if(i.elemType!=null&&(a.elemType=i.elemType|0),i.shape!=null){if(typeof i.shape!="object")throw TypeError(".onnx.TypeProto.SparseTensor.shape: object expected");a.shape=E.onnx.TensorShapeProto.fromObject(i.shape)}return a},t.toObject=function(i,a){a||(a={});var u={};return a.defaults&&(u.elemType=0,u.shape=null),i.elemType!=null&&i.hasOwnProperty("elemType")&&(u.elemType=i.elemType),i.shape!=null&&i.hasOwnProperty("shape")&&(u.shape=E.onnx.TensorShapeProto.toObject(i.shape,a)),u},t.prototype.toJSON=function(){return this.constructor.toObject(this,Je.util.toJSONOptions)},t.getTypeUrl=function(i){return i===void 0&&(i="type.googleapis.com"),i+"/onnx.TypeProto.SparseTensor"},t}(),e}(),n.OperatorSetIdProto=function(){function e(r){if(r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.domain="",e.prototype.version=z.Long?z.Long.fromBits(0,0,!1):0,e.create=function(t){return new e(t)},e.encode=function(t,o){return o||(o=ut.create()),t.domain!=null&&Object.hasOwnProperty.call(t,"domain")&&o.uint32(10).string(t.domain),t.version!=null&&Object.hasOwnProperty.call(t,"version")&&o.uint32(16).int64(t.version),o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.OperatorSetIdProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.domain=t.string();break}case 2:{a.version=t.int64();break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){return typeof t!="object"||t===null?"object expected":t.domain!=null&&t.hasOwnProperty("domain")&&!z.isString(t.domain)?"domain: string expected":t.version!=null&&t.hasOwnProperty("version")&&!z.isInteger(t.version)&&!(t.version&&z.isInteger(t.version.low)&&z.isInteger(t.version.high))?"version: integer|Long expected":null},e.fromObject=function(t){if(t instanceof E.onnx.OperatorSetIdProto)return t;var o=new E.onnx.OperatorSetIdProto;return t.domain!=null&&(o.domain=String(t.domain)),t.version!=null&&(z.Long?(o.version=z.Long.fromValue(t.version)).unsigned=!1:typeof t.version=="string"?o.version=parseInt(t.version,10):typeof t.version=="number"?o.version=t.version:typeof t.version=="object"&&(o.version=new z.LongBits(t.version.low>>>0,t.version.high>>>0).toNumber())),o},e.toObject=function(t,o){o||(o={});var i={};if(o.defaults)if(i.domain="",z.Long){var a=new z.Long(0,0,!1);i.version=o.longs===String?a.toString():o.longs===Number?a.toNumber():a}else i.version=o.longs===String?"0":0;return t.domain!=null&&t.hasOwnProperty("domain")&&(i.domain=t.domain),t.version!=null&&t.hasOwnProperty("version")&&(typeof t.version=="number"?i.version=o.longs===String?String(t.version):t.version:i.version=o.longs===String?z.Long.prototype.toString.call(t.version):o.longs===Number?new z.LongBits(t.version.low>>>0,t.version.high>>>0).toNumber():t.version),i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Je.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.OperatorSetIdProto"},e}(),n.OperatorStatus=function(){var e={},r=Object.create(e);return r[e[0]="EXPERIMENTAL"]=0,r[e[1]="STABLE"]=1,r}(),n.FunctionProto=function(){function e(r){if(this.input=[],this.output=[],this.attribute=[],this.attributeProto=[],this.node=[],this.opsetImport=[],r)for(var t=Object.keys(r),o=0;o<t.length;++o)r[t[o]]!=null&&(this[t[o]]=r[t[o]])}return e.prototype.name="",e.prototype.input=z.emptyArray,e.prototype.output=z.emptyArray,e.prototype.attribute=z.emptyArray,e.prototype.attributeProto=z.emptyArray,e.prototype.node=z.emptyArray,e.prototype.docString="",e.prototype.opsetImport=z.emptyArray,e.prototype.domain="",e.create=function(t){return new e(t)},e.encode=function(t,o){if(o||(o=ut.create()),t.name!=null&&Object.hasOwnProperty.call(t,"name")&&o.uint32(10).string(t.name),t.input!=null&&t.input.length)for(var i=0;i<t.input.length;++i)o.uint32(34).string(t.input[i]);if(t.output!=null&&t.output.length)for(var i=0;i<t.output.length;++i)o.uint32(42).string(t.output[i]);if(t.attribute!=null&&t.attribute.length)for(var i=0;i<t.attribute.length;++i)o.uint32(50).string(t.attribute[i]);if(t.node!=null&&t.node.length)for(var i=0;i<t.node.length;++i)E.onnx.NodeProto.encode(t.node[i],o.uint32(58).fork()).ldelim();if(t.docString!=null&&Object.hasOwnProperty.call(t,"docString")&&o.uint32(66).string(t.docString),t.opsetImport!=null&&t.opsetImport.length)for(var i=0;i<t.opsetImport.length;++i)E.onnx.OperatorSetIdProto.encode(t.opsetImport[i],o.uint32(74).fork()).ldelim();if(t.domain!=null&&Object.hasOwnProperty.call(t,"domain")&&o.uint32(82).string(t.domain),t.attributeProto!=null&&t.attributeProto.length)for(var i=0;i<t.attributeProto.length;++i)E.onnx.AttributeProto.encode(t.attributeProto[i],o.uint32(90).fork()).ldelim();return o},e.encodeDelimited=function(t,o){return this.encode(t,o).ldelim()},e.decode=function(t,o){t instanceof oe||(t=oe.create(t));for(var i=o===void 0?t.len:t.pos+o,a=new E.onnx.FunctionProto;t.pos<i;){var u=t.uint32();switch(u>>>3){case 1:{a.name=t.string();break}case 4:{a.input&&a.input.length||(a.input=[]),a.input.push(t.string());break}case 5:{a.output&&a.output.length||(a.output=[]),a.output.push(t.string());break}case 6:{a.attribute&&a.attribute.length||(a.attribute=[]),a.attribute.push(t.string());break}case 11:{a.attributeProto&&a.attributeProto.length||(a.attributeProto=[]),a.attributeProto.push(E.onnx.AttributeProto.decode(t,t.uint32()));break}case 7:{a.node&&a.node.length||(a.node=[]),a.node.push(E.onnx.NodeProto.decode(t,t.uint32()));break}case 8:{a.docString=t.string();break}case 9:{a.opsetImport&&a.opsetImport.length||(a.opsetImport=[]),a.opsetImport.push(E.onnx.OperatorSetIdProto.decode(t,t.uint32()));break}case 10:{a.domain=t.string();break}default:t.skipType(u&7);break}}return a},e.decodeDelimited=function(t){return t instanceof oe||(t=new oe(t)),this.decode(t,t.uint32())},e.verify=function(t){if(typeof t!="object"||t===null)return"object expected";if(t.name!=null&&t.hasOwnProperty("name")&&!z.isString(t.name))return"name: string expected";if(t.input!=null&&t.hasOwnProperty("input")){if(!Array.isArray(t.input))return"input: array expected";for(var o=0;o<t.input.length;++o)if(!z.isString(t.input[o]))return"input: string[] expected"}if(t.output!=null&&t.hasOwnProperty("output")){if(!Array.isArray(t.output))return"output: array expected";for(var o=0;o<t.output.length;++o)if(!z.isString(t.output[o]))return"output: string[] expected"}if(t.attribute!=null&&t.hasOwnProperty("attribute")){if(!Array.isArray(t.attribute))return"attribute: array expected";for(var o=0;o<t.attribute.length;++o)if(!z.isString(t.attribute[o]))return"attribute: string[] expected"}if(t.attributeProto!=null&&t.hasOwnProperty("attributeProto")){if(!Array.isArray(t.attributeProto))return"attributeProto: array expected";for(var o=0;o<t.attributeProto.length;++o){var i=E.onnx.AttributeProto.verify(t.attributeProto[o]);if(i)return"attributeProto."+i}}if(t.node!=null&&t.hasOwnProperty("node")){if(!Array.isArray(t.node))return"node: array expected";for(var o=0;o<t.node.length;++o){var i=E.onnx.NodeProto.verify(t.node[o]);if(i)return"node."+i}}if(t.docString!=null&&t.hasOwnProperty("docString")&&!z.isString(t.docString))return"docString: string expected";if(t.opsetImport!=null&&t.hasOwnProperty("opsetImport")){if(!Array.isArray(t.opsetImport))return"opsetImport: array expected";for(var o=0;o<t.opsetImport.length;++o){var i=E.onnx.OperatorSetIdProto.verify(t.opsetImport[o]);if(i)return"opsetImport."+i}}return t.domain!=null&&t.hasOwnProperty("domain")&&!z.isString(t.domain)?"domain: string expected":null},e.fromObject=function(t){if(t instanceof E.onnx.FunctionProto)return t;var o=new E.onnx.FunctionProto;if(t.name!=null&&(o.name=String(t.name)),t.input){if(!Array.isArray(t.input))throw TypeError(".onnx.FunctionProto.input: array expected");o.input=[];for(var i=0;i<t.input.length;++i)o.input[i]=String(t.input[i])}if(t.output){if(!Array.isArray(t.output))throw TypeError(".onnx.FunctionProto.output: array expected");o.output=[];for(var i=0;i<t.output.length;++i)o.output[i]=String(t.output[i])}if(t.attribute){if(!Array.isArray(t.attribute))throw TypeError(".onnx.FunctionProto.attribute: array expected");o.attribute=[];for(var i=0;i<t.attribute.length;++i)o.attribute[i]=String(t.attribute[i])}if(t.attributeProto){if(!Array.isArray(t.attributeProto))throw TypeError(".onnx.FunctionProto.attributeProto: array expected");o.attributeProto=[];for(var i=0;i<t.attributeProto.length;++i){if(typeof t.attributeProto[i]!="object")throw TypeError(".onnx.FunctionProto.attributeProto: object expected");o.attributeProto[i]=E.onnx.AttributeProto.fromObject(t.attributeProto[i])}}if(t.node){if(!Array.isArray(t.node))throw TypeError(".onnx.FunctionProto.node: array expected");o.node=[];for(var i=0;i<t.node.length;++i){if(typeof t.node[i]!="object")throw TypeError(".onnx.FunctionProto.node: object expected");o.node[i]=E.onnx.NodeProto.fromObject(t.node[i])}}if(t.docString!=null&&(o.docString=String(t.docString)),t.opsetImport){if(!Array.isArray(t.opsetImport))throw TypeError(".onnx.FunctionProto.opsetImport: array expected");o.opsetImport=[];for(var i=0;i<t.opsetImport.length;++i){if(typeof t.opsetImport[i]!="object")throw TypeError(".onnx.FunctionProto.opsetImport: object expected");o.opsetImport[i]=E.onnx.OperatorSetIdProto.fromObject(t.opsetImport[i])}}return t.domain!=null&&(o.domain=String(t.domain)),o},e.toObject=function(t,o){o||(o={});var i={};if((o.arrays||o.defaults)&&(i.input=[],i.output=[],i.attribute=[],i.node=[],i.opsetImport=[],i.attributeProto=[]),o.defaults&&(i.name="",i.docString="",i.domain=""),t.name!=null&&t.hasOwnProperty("name")&&(i.name=t.name),t.input&&t.input.length){i.input=[];for(var a=0;a<t.input.length;++a)i.input[a]=t.input[a]}if(t.output&&t.output.length){i.output=[];for(var a=0;a<t.output.length;++a)i.output[a]=t.output[a]}if(t.attribute&&t.attribute.length){i.attribute=[];for(var a=0;a<t.attribute.length;++a)i.attribute[a]=t.attribute[a]}if(t.node&&t.node.length){i.node=[];for(var a=0;a<t.node.length;++a)i.node[a]=E.onnx.NodeProto.toObject(t.node[a],o)}if(t.docString!=null&&t.hasOwnProperty("docString")&&(i.docString=t.docString),t.opsetImport&&t.opsetImport.length){i.opsetImport=[];for(var a=0;a<t.opsetImport.length;++a)i.opsetImport[a]=E.onnx.OperatorSetIdProto.toObject(t.opsetImport[a],o)}if(t.domain!=null&&t.hasOwnProperty("domain")&&(i.domain=t.domain),t.attributeProto&&t.attributeProto.length){i.attributeProto=[];for(var a=0;a<t.attributeProto.length;++a)i.attributeProto[a]=E.onnx.AttributeProto.toObject(t.attributeProto[a],o)}return i},e.prototype.toJSON=function(){return this.constructor.toObject(this,Je.util.toJSONOptions)},e.getTypeUrl=function(t){return t===void 0&&(t="type.googleapis.com"),t+"/onnx.FunctionProto"},e}(),n}();ob.exports=E});function io(n,e){if(!n)throw new Error(typeof e=="string"?e:e())}function zo(n){return new TextDecoder().decode(n)}var Qe,Rn,Sl,It,ji,wt,Ct,fe,Ro,zn,Mn,Bn,He=j(()=>{"use strict";qs();Qe=Pe(oo());Fn();Rn=class{static arraysEqual(e,r){if(e.length!==r.length)return!1;for(let t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}},Sl=class{static preprocessInputShapes(e,r){let t=e.length===1?[1,e[0]]:e,o=r.length===1?[r[0],1]:r;return[t,o]}static postprocessOutputShape(e,r,t){r===1&&e.splice(e.length-2,1),t===1&&e.pop()}static calcMatMulShape(e,r){return e[1]!==r[0]?void 0:[e[0],r[1]]}},It=class n{static calcShape(e,r,t=!1){let o=e.length,i=r.length;if(o===0)return r;if(i===0)return e;let a=Math.max(e.length,r.length),u=new Array(a);if(t){if(o<2||i<2)return;let c=Sl.calcMatMulShape([e[o-2],e[o-1]],[r[i-2],r[i-1]]);if(c===void 0)return;[u[a-2],u[a-1]]=c}for(let c=t?3:1;c<=a;c++){let f=o-c<0?1:e[o-c],m=i-c<0?1:r[i-c];if(f!==m&&f>1&&m>1)return;u[a-c]=Math.max(f,m)}return u}static index(e,r){let t=new Array(r.length);return n.fillIndex(e,r,t),t}static fillIndex(e,r,t){let o=e.length-r.length;for(let i=0;i<r.length;i++)t[i]=e[o+i]%r[i]}static calc(e,r,t,o,i){let a=n.calcShape(e.dims,r.dims);if(a){if(o&&!fe.areEqual(a,e.dims))return;let u=fe.size(a),c=o?e:new pt(a,i||e.type);if(a.length===0)c.set([],t(e.get([]),r.get([])));else{let f=new Array(a.length),m=new Array(e.dims.length),y=new Array(r.dims.length),_=0,x=0,T=!1,I=!1;e.dims.length===0&&(_=e.get([]),T=!0),r.dims.length===0&&(x=r.get([]),I=!0);let O;for(let A=0;A<u;A++){O=A;for(let $=a.length-1;$>=0;$--)f[$]=O%a[$],O=Math.floor(O/a[$]);T||(n.fillIndex(f,e.dims,m),_=e.get(m)),I||(n.fillIndex(f,r.dims,y),x=r.get(y)),c.set(f,t(_,x))}}return c}}static isValidBroadcast(e,r){let t=e.length,o=r.length;if(t>o)return!1;for(let i=1;i<=t;i++)if(e[t-i]!==1&&e[t-i]!==r[o-i])return!1;return!0}static getBroadcastDims(e,r){let t=e.length,o=[];for(let i=0;i<t;i++){let a=t-1-i,u=e[a]||1;(r[r.length-1-i]||1)>1&&u===1&&o.unshift(a)}return o}},ji=class{static getShapeOfGemmResult(e,r,t,o,i){if(e.length!==2||t.length!==2)throw new Error("shape need to be of size 2");let a,u,c;r?(a=e[1],u=e[0]):(a=e[0],u=e[1]);let f=-1;if(o?(c=t[0],f=1):(c=t[1],f=0),t[f]!==u)throw new Error("dimension mismatch");if(a<=0||c<=0||u<=0)throw new Error("invalid shape specified");if(i&&!It.isValidBroadcast(i,[a,c]))throw new Error("gemm: invalid bias shape for broadcast");return[a,c,u]}},wt=class n{static tensorDataTypeFromProto(e){switch(e){case Qe.onnx.TensorProto.DataType.INT8:return"int8";case Qe.onnx.TensorProto.DataType.UINT8:return"uint8";case Qe.onnx.TensorProto.DataType.BOOL:return"bool";case Qe.onnx.TensorProto.DataType.INT16:return"int16";case Qe.onnx.TensorProto.DataType.UINT16:return"uint16";case Qe.onnx.TensorProto.DataType.INT32:return"int32";case Qe.onnx.TensorProto.DataType.UINT32:return"uint32";case Qe.onnx.TensorProto.DataType.FLOAT:return"float32";case Qe.onnx.TensorProto.DataType.DOUBLE:return"float64";case Qe.onnx.TensorProto.DataType.STRING:return"string";case Qe.onnx.TensorProto.DataType.INT64:return"int32";case Qe.onnx.TensorProto.DataType.UINT64:return"uint32";default:throw new Error(`unsupported data type: ${Qe.onnx.TensorProto.DataType[e]}`)}}static tensorDataTypeStringToEnum(e){switch(e){case"int8":return Qe.onnx.TensorProto.DataType.INT8;case"uint8":return Qe.onnx.TensorProto.DataType.UINT8;case"bool":return Qe.onnx.TensorProto.DataType.BOOL;case"int16":return Qe.onnx.TensorProto.DataType.INT16;case"uint16":return Qe.onnx.TensorProto.DataType.UINT16;case"int32":return Qe.onnx.TensorProto.DataType.INT32;case"uint32":return Qe.onnx.TensorProto.DataType.UINT32;case"float32":return Qe.onnx.TensorProto.DataType.FLOAT;case"float64":return Qe.onnx.TensorProto.DataType.DOUBLE;case"string":return Qe.onnx.TensorProto.DataType.STRING;case"int64":return Qe.onnx.TensorProto.DataType.INT64;case"uint64":return Qe.onnx.TensorProto.DataType.UINT64;default:throw new Error(`unsupported data type: ${e}`)}}static tensorDimsFromProto(e){return e.map(r=>gn.isLong(r)?r.toNumber():r)}static tensorValueTypeFromProto(e){return{tensorType:n.tensorDataTypeFromProto(e.elemType),shape:{dims:n.tensorDimsFromProto(e.shape.dim.map(r=>r.dimValue))}}}static tensorDimsFromORTFormat(e){let r=[];for(let t=0;t<e.dimsLength();t++)r.push(Ct.longToNumber(e.dims(t)));return r}static tensorAttributesFromORTFormat(e){let r=[];for(let t=0;t<e.attributesLength();t++)r.push(e.attributes(t));return r}},Ct=class{static longToNumber(e){return gn.isLong(e)?e.toNumber():typeof e=="bigint"?Number(e):e}static isLong(e){return gn.isLong(e)||typeof e=="bigint"}},fe=class n{static size(e){return n.getSizeFromDimensionRange(e,0,e.length)}static sizeFromDimension(e,r){if(r<0||r>e.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${e.length} dimensions.`);return n.getSizeFromDimensionRange(e,r,e.length)}static sizeToDimension(e,r){if(r<0||r>e.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${e.length} dimensions.`);return n.getSizeFromDimensionRange(e,0,r)}static getSizeFromDimensionRange(e,r,t){let o=1;for(let i=r;i<t;i++){if(e[i]<=0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains 0 or negative values in them.");o*=e[i]}return o}static computeStrides(e){let r=e.length;if(r===0)return[];if(r===1)return[1];let t=new Array(r);t[r-1]=1,t[r-2]=e[r-1];for(let o=r-3;o>=0;--o)t[o]=t[o+1]*e[o+1];return t}static transpose(e){return e.slice().reverse()}static indicesToOffset(e,r,t){t===void 0&&(t=e.length);let o=0;for(let i=0;i<t;++i)o+=r[i]*e[i];return o}static offsetToIndices(e,r){let t=r.length;if(t===0)return[];if(t===1)return[e*r[0]];let o=new Array(r.length);for(let i=0;i<o.length-1;++i)o[i]=Math.floor(e/r[i]),e-=o[i]*r[i];return o[o.length-1]=e,o}static normalizeAxis(e,r){if(e<-r&&e>=r)throw new Error("unsupported axis for this operation.");return e<0?e+r:e}static normalizeAxes(e,r){return e.map(t=>this.normalizeAxis(t,r))}static incrementIndex(e,r,t){if(r.length===0||e.length===0)throw new Error("Index incrementing unsupported for scalar Tensor");if(t===void 0)t=r.length;else if(t<=0||t>r.length)throw new Error("Incorrect axis to increment on");for(let o=t-1;o>=0&&(e[o]++,!(e[o]<r[o]));--o)e[o]=0}static calculateReshapedDims(e,r){if(r.length===0){if(e.length===0||n.size(e)===1)return[];throw new Error("cannot reshape to a scalar Tensor")}let t=r.length,o=new Array(t),i=-1,a=1;for(let c=0;c<t;c++){if(r[c]<-1)throw new Error("a dimension in shape hints cannot be less than -1");if(r[c]===-1){if(i!==-1)throw new Error("at most one dimension in shape hints can be -1");i=c}else{if(r[c]===0){if(c>=e.length)throw new Error("the dimension with value zero exceeds the dimension size of the input tensor");o[c]=e[c]}else o[c]=r[c];a*=o[c]}}let u=n.size(e);if(i!==-1){if(u%a!==0)throw new Error(`the input tensor cannot be reshaped to the requested shape. Input shape: [${e}] Output shape: [${r}]`);o[i]=u/a}else if(a!==u)throw new Error("reshapedDims and originalDims don't have matching sizes");return o}static sortBasedOnPerm(e,r){return r?r.map(t=>e[t]):e.slice().reverse()}static padShape(e,r){let t=e.length;return e.map((o,i)=>o+r[i]+r[i+t])}static areEqual(e,r){return e.length!==r.length?!1:e.every((t,o)=>t===r[o])}static validateDimsAndCalcSize(e){if(e.length>6)throw new TypeError("Only rank 0 to 6 is supported for tensor shape.");let r=1;for(let t of e){if(!Number.isInteger(t))throw new TypeError(`Invalid shape: ${t} is not an integer`);if(t<0||t>2147483647)throw new TypeError(`Invalid shape: length ${t} is not allowed`);r*=t}return r}static flattenShape(e,r){r<0&&(r+=e.length);let t=e.reduce((a,u)=>a*u,1),o=e.slice(r).reduce((a,u)=>a*u,1);return[t/o,o]}static squeezeShape(e,r){let t=new Array;r=n.normalizeAxes(r,e.length);for(let o=0;o<e.length;o++){let i=r.indexOf(o)>=0;if(i&&e[o]!==1)throw new Error("squeeze an axis of size different than 1");(r.length===0&&e[o]>1||r.length>0&&!i)&&t.push(e[o])}return t}static unsqueezeShape(e,r){let t=new Array(e.length+r.length);t.fill(0);for(let i=0;i<r.length;i++){let a=n.normalizeAxis(r[i],t.length);if(a>=t.length)throw new Error("'axes' has an out of range axis");if(t[a]!==0)throw new Error("'axes' has a duplicate axis");t[a]=1}let o=0;for(let i=0;i<t.length;i++)t[i]===0&&(t[i]=e[o++]);if(o!==e.length)throw new Error("the unsqueezed dimension could not be established");return t}},Ro=class n{static splitShape(e,r,t,o){if(t.length===0){if(!o)throw new Error("need to know number of outputs when the 'split' attribute is not specified");n.determineSplit(e[r],o,t)}let i=[],a=[0];for(let u=0;u<t.length;++u){u!==0&&a.push(a[u-1]+t[u-1]);let c=e.slice();c[r]=t[u],i.push(c)}return[i,a]}static determineSplit(e,r,t){if(e%r!==0)throw new Error("cannot split tensor to equal sized parts");for(let o=0;o<r;++o)t.push(e/r)}},zn=class n{static adjustPoolAttributes(e,r,t,o,i,a){if(!e&&t.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(e)for(let u=0;u<r.length-2;u++)u>=t.length?t.push(r[u+2]):t[u]=r[u+2];for(let u=0;u<t.length;u++)if(u<o.length){if(o[u]<0)throw new Error("strides should be greater than or equal to 1")}else o.push(1);for(let u=0;u<t.length;u++)if(u<i.length){if(i[u]<0)throw new Error("dilations should be greater than or equal to 1")}else i.push(1);for(let u=0;u<t.length*2;u++)if(u<a.length){if(a[u]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let u=0;u<t.length;u++){if(t[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[u]>=t[u]||a[u+t.length]>=t[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(e,r,t,o,i,a){if(a){if(i.length!==2*(e.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==e.length-2)throw new Error("length of strides should be the length of data dimensions");if(o.length!==e.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<e.length-2;u++)n.adjustPadAndReturnShape(e[u+2],r[u],t[u],o[u],i,u,u+e.length-2,a)}}static computePoolOutputShape(e,r,t,o,i,a,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let c=[r[0],r[1]];return n.computeShapeHelper(e,r,c,t,o,i,a,u),c}static computeConvOutputShape(e,r,t,o,i,a,u){if(e.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let c=[e[0],r[0]];return n.computeShapeHelper(!1,e,c,t,o,i,a,u),c}static computeShapeHelper(e,r,t,o,i,a,u,c){if(e)for(let f=0;f<r.length-2;f++)t.push(1);else for(let f=0;f<r.length-2;f++)t.push(n.adjustPadAndReturnShape(r[f+2],o[f],i[f],a[f],u,f,f+r.length-2,c))}static adjustPadAndReturnShape(e,r,t,o,i,a,u,c){let f=t*(o-1)+1;if(c&&c!=="NOTSET")switch(c){case"VALID":return i[a]=0,i[u]=0,Math.floor((e-f)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(t!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let y=((e+r-1)/r-1)*r+o-e;return i[a]=Math.floor(c==="SAME_LOWER"?(y+1)/2:y/2),i[u]=y-i[a],Math.floor((e+y-o)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((e+i[a]+i[u]-f)/r+1)}},Mn=-34028234663852886e22,Bn=34028234663852886e22});function VE(n){switch(n){case"bool":case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;case"float64":return 8;default:throw new Error(`cannot calculate sizeof() on type ${n}`)}}function ib(n){switch(n){case De.onnx.TensorProto.DataType.UINT8:case De.onnx.TensorProto.DataType.INT8:case De.onnx.TensorProto.DataType.BOOL:return 1;case De.onnx.TensorProto.DataType.UINT16:case De.onnx.TensorProto.DataType.INT16:return 2;case De.onnx.TensorProto.DataType.FLOAT:case De.onnx.TensorProto.DataType.INT32:case De.onnx.TensorProto.DataType.UINT32:return 4;case De.onnx.TensorProto.DataType.INT64:case De.onnx.TensorProto.DataType.DOUBLE:case De.onnx.TensorProto.DataType.UINT64:return 8;default:throw new Error(`cannot calculate sizeof() on type ${De.onnx.TensorProto.DataType[n]}`)}}function GE(n,e){return new(ub(e))(n)}function ub(n){switch(n){case"bool":case"uint8":return Uint8Array;case"int8":return Int8Array;case"int16":return Int16Array;case"uint16":return Uint16Array;case"int32":return Int32Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"float32":return Float32Array;case"float64":return Float64Array;default:throw new Error("unspecified error")}}function $l(n,e){if(e===De.onnx.TensorProto.DataType.INT64||e===Eo.TensorDataType.INT64){if(n.greaterThanOrEqual(2147483648)||n.lessThan(-2147483648))throw new TypeError("int64 is not supported")}else if(e===De.onnx.TensorProto.DataType.UINT32||e===Eo.TensorDataType.UINT32||e===De.onnx.TensorProto.DataType.UINT64||e===Eo.TensorDataType.UINT64){if(n.greaterThanOrEqual(4294967296)||n.lessThan(0))throw new TypeError("uint64 is not supported")}else throw new TypeError(`not a LONG type: ${De.onnx.TensorProto.DataType[e]}`);return n.toNumber()}function ab(n,e,r){switch(e){case De.onnx.TensorProto.DataType.BOOL:case De.onnx.TensorProto.DataType.UINT8:return n.getUint8(r);case De.onnx.TensorProto.DataType.INT8:return n.getInt8(r);case De.onnx.TensorProto.DataType.UINT16:return n.getUint16(r,!0);case De.onnx.TensorProto.DataType.INT16:return n.getInt16(r,!0);case De.onnx.TensorProto.DataType.FLOAT:return n.getFloat32(r,!0);case De.onnx.TensorProto.DataType.INT32:return n.getInt32(r,!0);case De.onnx.TensorProto.DataType.UINT32:return n.getUint32(r,!0);case De.onnx.TensorProto.DataType.INT64:return $l(gn.fromBits(n.getUint32(r,!0),n.getUint32(r+4,!0),!1),e);case De.onnx.TensorProto.DataType.DOUBLE:return n.getFloat64(r,!0);case De.onnx.TensorProto.DataType.UINT64:return $l(gn.fromBits(n.getUint32(r,!0),n.getUint32(r+4,!0),!0),e);default:throw new Error(`cannot read from DataView for type ${De.onnx.TensorProto.DataType[e]}`)}}var sb,De,pt,Fn=j(()=>{"use strict";sb=Pe(Ig());qs();Do();De=Pe(oo());He();pt=class n{constructor(e,r,t,o,i,a=sb.Guid.create()){this.dims=e;this.type=r;this.dataProvider=t;this.asyncDataProvider=o;this.cache=i;this.dataId=a;this.size=fe.validateDimsAndCalcSize(e);let u=this.size,c=t===void 0&&o===void 0&&i===void 0;if(i!==void 0&&i.length!==u)throw new RangeError("Input dims doesn't match data length.");if(r==="string"){if(i!==void 0&&(!Array.isArray(i)||!i.every(f=>typeof f=="string")))throw new TypeError("cache should be a string array");c&&(this.cache=new Array(u))}else{if(i!==void 0){let f=ub(r);if(!(i instanceof f))throw new TypeError(`cache should be type ${f.name}`)}if(c){let f=new ArrayBuffer(u*VE(r));this.cache=GE(f,r)}}}get data(){if(this.cache===void 0){let e=this.dataProvider(this.dataId);if(e.length!==this.size)throw new Error("Length of data provided by the Data Provider is inconsistent with the dims of this Tensor.");this.cache=e}return this.cache}get stringData(){if(this.type!=="string")throw new TypeError("data type is not string");return this.data}get integerData(){switch(this.type){case"uint8":case"int8":case"uint16":case"int16":case"int32":case"uint32":case"bool":return this.data;default:throw new TypeError("data type is not integer (uint8, int8, uint16, int16, int32, uint32, bool)")}}get floatData(){switch(this.type){case"float32":case"float64":return this.data;default:throw new TypeError("data type is not float (float32, float64)")}}get numberData(){if(this.type!=="string")return this.data;throw new TypeError("type cannot be non-number (string)")}get(e){return this.data[fe.indicesToOffset(e,this.strides)]}set(e,r){this.data[fe.indicesToOffset(e,this.strides)]=r}async getData(){return this.cache===void 0&&(this.cache=await this.asyncDataProvider(this.dataId)),this.cache}get strides(){return this._strides||(this._strides=fe.computeStrides(this.dims)),this._strides}static fromProto(e){if(!e)throw new Error("cannot construct Value from an empty tensor");let r=wt.tensorDataTypeFromProto(e.dataType),t=wt.tensorDimsFromProto(e.dims),o=new n(t,r);if(r==="string")e.stringData.forEach((i,a)=>{o.data[a]=zo(i)});else if(e.rawData&&typeof e.rawData.byteLength=="number"&&e.rawData.byteLength>0){let i=o.data,a=new DataView(e.rawData.buffer,e.rawData.byteOffset,e.rawData.byteLength),u=ib(e.dataType),c=e.rawData.byteLength/u;if(e.rawData.byteLength%u!==0)throw new Error("invalid buffer length");if(i.length!==c)throw new Error("buffer length mismatch");for(let f=0;f<c;f++){let m=ab(a,e.dataType,f*u);i[f]=m}}else{let i;switch(e.dataType){case De.onnx.TensorProto.DataType.FLOAT:i=e.floatData;break;case De.onnx.TensorProto.DataType.INT32:case De.onnx.TensorProto.DataType.INT16:case De.onnx.TensorProto.DataType.UINT16:case De.onnx.TensorProto.DataType.INT8:case De.onnx.TensorProto.DataType.UINT8:case De.onnx.TensorProto.DataType.BOOL:i=e.int32Data;break;case De.onnx.TensorProto.DataType.INT64:i=e.int64Data;break;case De.onnx.TensorProto.DataType.DOUBLE:i=e.doubleData;break;case De.onnx.TensorProto.DataType.UINT32:case De.onnx.TensorProto.DataType.UINT64:i=e.uint64Data;break;default:throw new Error("unspecific error")}if(i==null)throw new Error("failed to populate data from a tensorproto value");let a=o.data;if(a.length!==i.length)throw new Error("array length mismatch");for(let u=0;u<i.length;u++){let c=i[u];gn.isLong(c)?a[u]=$l(c,e.dataType):a[u]=c}}return o}static fromData(e,r,t){return new n(r,t,void 0,void 0,e)}static fromOrtTensor(e){if(!e)throw new Error("cannot construct Value from an empty tensor");let r=wt.tensorDimsFromORTFormat(e),t=wt.tensorDataTypeFromProto(e.dataType()),o=new n(r,t);if(t==="string")for(let i=0;i<e.stringDataLength();i++)o.data[i]=e.stringData(i);else if(e.rawDataArray()&&typeof e.rawDataLength()=="number"&&e.rawDataLength()>0){let i=o.data,a=new DataView(e.rawDataArray().buffer,e.rawDataArray().byteOffset,e.rawDataLength()),u=ib(e.dataType()),c=e.rawDataLength()/u;if(e.rawDataLength()%u!==0)throw new Error("invalid buffer length");if(i.length!==c)throw new Error("buffer length mismatch");for(let f=0;f<c;f++){let m=ab(a,e.dataType(),f*u);i[f]=m}}return o}}});function ge(n){return n===1?UE:jE}function lb(n){let e=ge(n);return`${e.version}
      precision highp float;
      ${e.attribute} vec3 position;
      ${e.attribute} vec2 textureCoord;

      ${e.varyingVertex} vec2 TexCoords;

      void main()
      {
          gl_Position = vec4(position, 1.0);
          TexCoords = textureCoord;
      }`}function cb(n){let e=ge(n);return`${e.version}
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

    `}function db(n,e){let r=ge(n);return`
  void main() {
    int indices[${e}];
    toVec(TexCoords, indices);
    vec4 result = vec4(process(indices));
    ${r.output} = result;
  }
  `}var UE,jE,nt=j(()=>{"use strict";UE={version:"",attribute:"attribute",varyingVertex:"varying",varyingFrag:"varying",texture2D:"texture2D",output:"gl_FragColor",outputDeclaration:""},jE={version:"#version 300 es",attribute:"in",varyingVertex:"out",varyingFrag:"in",texture2D:"texture",output:"outputColor",outputDeclaration:"out vec4 outputColor;"}});var Re=j(()=>{"use strict"});async function Al(n,e=t=>0,r){return new Promise((t,o)=>{let i=0,a=()=>{if(n()){t();return}i++;let u=e(i);if(r!=null&&i>=r){o();return}setTimeout(a,u)};a()})}function Wi(n){return io(typeof n<"u"&&n.length!==0,()=>"empty string found for sampler name"),"get"+n.charAt(0).toUpperCase()+n.slice(1)}function pb(n){return io(typeof n<"u"&&n.length!==0,()=>"empty string found for sampler name"),"get"+n.charAt(0).toUpperCase()+n.slice(1)+"AtOutCoords"}function ao(n,e){let r=JSON.parse(JSON.stringify(n));return r=e,r}function so(n,e){return e.map(r=>n[r]).join(", ")}function St(n){if(n<=1)return"int";if(n===2)return"ivec2";if(n===3)return"ivec3";if(n===4)return"ivec4";if(n===5)return"ivec5";if(n===6)return"ivec6";throw Error(`GPU for rank ${n} is not yet supported`)}function rr(n=6){return["x","y","z","w","u","v"].slice(0,n)}var jr=j(()=>{"use strict";He()});function WE(n,e){return rr(e).map(r=>`${n}.${r}`)}function uo(n,e){return e===1?[n]:WE(n,e)}function Wr(){return`
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
  `}var Vn=j(()=>{"use strict";jr()});function qE(n,e,r){if(n===0)return"false";if(n===1)return`rc > ${e[0]}`;let t="";for(let o=n-2;o<n;o++)t+=`${r[o]} >= ${e[o-n+2]}`,o<n-1&&(t+="||");return t}function KE(n,e){let r=n.length;if(r===0)return"getA(), 0, 0, 0";if(r===1)return`getA(rc),
            rc + 1 >= ${n[0]} ? 0. : getA(rc + 1),
            0, 0`;let t="r, c",o="r, cp1",i="rp1, c",a="rp1, cp1",u="";if(r>2)for(let c=0;c<r-2;++c)u=u+`${e[c]},`;return`getA(${u}${t}),
          rEdge ? 0. : getA(${u}${i}),
          cEdge ? 0. : getA(${u}${o}),
          rEdge || cEdge ? 0. : getA(${u}${a})`}function XE(n,e,r,t){return n===0||n===1?"":`
    int r = ${e[n-2]};
    int c = ${e[n-1]};
    int rp1 = ${e[n-2]} + 1;
    int cp1 = ${e[n-1]} + 1;
    bool rEdge = rp1 >= ${t};
    bool cEdge = cp1 >= ${r};
    `}var fb,HE,hb,mb=j(()=>{"use strict";nt();Re();jr();Vn();fb={name:"pack",inputNames:["A"],inputTypes:[1]},HE=(n,e)=>{let r=ge(n.session.backend.glContext.version),t=e.dims,o=t.length,i=e.dims.length,a=St(i),u=uo("rc",i),c=XE(i,u,t[t.length-2],t[t.length-1]),f;o===0?f=[1,1]:o===1?f=[t[0],1]:f=[t[i-1],t[i-2]];let m=qE(i,f,u),y=KE(t,u),_=`
        void main() {
          ${a} rc = getOutputCoords();

          if(${m}) {
            ${r.output} = vec4(0);
          } else {
            ${c}

            ${r.output} = vec4(${y});
          }
        }
      `;return{...fb,hasMain:!0,output:{dims:e.dims,type:e.type,textureType:2},shaderSource:_}},hb=(n,e)=>({...fb,get:()=>HE(n,e)})});function Ol(n){if(n.length===0)return[1,1,1];let e=1;for(let r=0;r<n.length-2;++r)e*=n[r];return[e,n.length>1?n[n.length-2]:1,n[n.length-1]]}function yb(n,e){let r=!1;return n.length===0||e.length===0?r=!0:n.length<2||e.length<2?r=n[n.length-1]===e[e.length-1]:r=n[n.length-1]===e[e.length-1]&&n[n.length-2]===e[e.length-2],r}function JE(n){let e=fe.computeStrides(n),r=["b","r","c"],t="index";return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${e.map((i,a)=>{let u=`int ${r[a]} = ${t} / ${i}`,c=a===e.length-1?`int ${r[a+1]} = ${t} - ${r[a]} * ${i}`:`index -= ${r[a]} * ${i}`;return`${u}; ${c};`}).join("")}
      return ivec3(b, r, c);
    }
  `}function QE(n){let e=fe.computeStrides(n);return`
  int getFlattenedIndex(ivec3 coords) {
    // reverse y, z order
    return coords.x * ${e[0]} + coords.z * ${e[1]} + coords.y;
  }
`}var YE,ZE,gb,bb=j(()=>{"use strict";He();nt();Re();Vn();YE=n=>({name:"Reshape (packed)",inputTypes:[2],inputNames:["A"],cacheHint:`${n}`}),ZE=(n,e,r,t)=>{let o=e.dims,i=t,a="";for(let f=0;f<4;f++){let m="";switch(f){case 0:m="outputCoords = rc;";break;case 1:m="outputCoords = ivec3(rc.x, rc.y+1, rc.z);";break;case 2:m="outputCoords = ivec3(rc.x, rc.y, rc.z+1);";break;case 3:m="outputCoords = ivec3(rc.x, rc.y+1, rc.z+1);";break;default:throw new Error}a+=`
        ${m}
        ${f>0?"if(outputCoords.y < rows && outputCoords.z < cols){":""}
          int flattenedIndex = getFlattenedIndex(outputCoords);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flattenedIndex);
          vec2 innerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${f}] = getChannel(getA(inputRC.x, inputRC.y, inputRC.z), innerDims);

        ${f>0?"}":""}
      `}let u=ge(n.session.backend.glContext.version),c=`
      ${JE(o)}
      ${QE(i)}
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
    `;return{...r,output:{dims:i,type:e.type,textureType:2},shaderSource:c,hasMain:!0}},gb=(n,e,r)=>{let t=YE(r);return{...t,get:()=>ZE(n,e,t,r)}}});var Pl,_b=j(()=>{"use strict";nt();Re();Pl=(n,e)=>{let r=e.shape,t=ge(n.session.backend.glContext.version),o=`
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
    }`,i={name:"Uint8Encode",inputTypes:[0],inputNames:["X"],output:{dims:r,type:e.tensor.type,textureType:3},shaderSource:o,hasMain:!0};return n.executeProgram(i,[e.tensor])}});function tD(n,e){if(n===1)return"rc";let r="";for(let t=0;t<n;t++)r+=e[t],t<n-1&&(r+=",");return r}var vb,eD,wb,xb=j(()=>{"use strict";nt();Re();jr();Vn();vb={name:"unpack",inputNames:["A"],inputTypes:[2]},eD=(n,e)=>{let r=e.dims.length,t=uo("rc",r),o=t.slice(-2),i=St(r),a=Wr(),c=e.dims.length===0?"":tD(r,t),f=r<=1?"rc":`vec2(${o.join(",")})`,m=ge(n.session.backend.glContext.version),y=`
    ${a}
    void main() {
      ${i} rc = getOutputCoords();

       // Sample the texture with the coords to get the rgba channel value.
       vec4 packedInput = getA(${c});

       ${m.output} = vec4(getChannel(packedInput, ${f}), 0, 0, 0);
     }
   `;return{...vb,hasMain:!0,output:{dims:e.dims,type:e.type,textureType:0},shaderSource:y}},wb=(n,e)=>({...vb,get:()=>eD(n,e)})});var Hi,Mo,qi,Bo=j(()=>{"use strict";Bt();Hi=class{constructor(e,r=1){if(r===1)this.internalFormat=e.R32F,this.format=e.RED,this.textureType=e.FLOAT,this.channelSize=r;else if(r===4)this.internalFormat=e.RGBA32F,this.format=e.RGBA,this.textureType=e.FLOAT,this.channelSize=r;else throw new Error(`Invalid number of channels: ${r}`)}encode(e,r){let t,o;return e.constructor!==Float32Array&&(qe.warning("Encoder","data was not of type Float32; creating new Float32Array"),o=new Float32Array(e)),r*this.channelSize>e.length?(qe.warning("Encoder","Source data too small. Allocating larger array"),o=e,t=this.allocate(r*this.channelSize),o.forEach((i,a)=>t[a]=i)):(o=e,t=o),t}allocate(e){return new Float32Array(e*4)}decode(e,r){return this.channelSize===1?e.filter((o,i)=>i%4===0).subarray(0,r):e.subarray(0,r)}},Mo=class{constructor(e,r=1,t){if(r!==1&&r!==4)throw new Error(`Invalid number of channels: ${r}`);this.internalFormat=e.RGBA,this.format=e.RGBA,this.channelSize=r,this.textureType=t||e.FLOAT}encode(e,r){let t=e;return this.channelSize===1&&(qe.verbose("Encoder","Exploding into a larger array"),t=this.allocate(r),e.forEach((o,i)=>t[i*4]=o)),t}allocate(e){return new Float32Array(e*4)}decode(e,r){return this.channelSize===1?e.filter((o,i)=>i%4===0).subarray(0,r):e.subarray(0,r)}},qi=class{constructor(e,r=1){this.channelSize=4;if(r===1)this.internalFormat=e.ALPHA,this.format=e.ALPHA,this.textureType=e.UNSIGNED_BYTE,this.channelSize=r;else if(r===4)this.internalFormat=e.RGBA,this.format=e.RGBA,this.textureType=e.UNSIGNED_BYTE,this.channelSize=r;else throw new Error(`Invalid number of channels: ${r}`)}encode(e,r){return new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}allocate(e){return new Uint8Array(e*this.channelSize)}decode(e,r){if(e instanceof Uint8Array)return e.subarray(0,r);throw new Error(`Invalid array type: ${e.constructor}`)}}});var Fo,Tb,Cl,Ib=j(()=>{"use strict";He();Re();Fo=(n,e,r)=>{let t=r===0||r===1?1:4,o=r===2,i=r===1||r===2,a=r===4?e.length-1:void 0,u=r===4?e.map((c,f)=>f===e.length-1?c*4:c):void 0;return Cl(n,e,t,u,{isPacked:o,reverseWH:i,breakAxis:a})},Tb=(n,e,r)=>{let t=Fo(n,e,r);return[t.width,t.height]},Cl=(n,e,r=1,t,o)=>{let i=!!(o&&o.isPacked),[a,u]=n.computeTextureWH(i&&t||e,o),c=e.length,f=e.slice(0);if(c===0&&(f=[1]),r===1)t=e;else if(i){if(r!==4)throw new Error("a packed texture must be 4-channel");t=e,c>0&&(f[c-1]=Math.ceil(f[c-1]/2)),c>1&&(f[c-2]=Math.ceil(f[c-2]/2))}else if(!t)throw new Error("Unpacked shape is needed when using channels > 1");return{width:a,height:u,channels:r,isPacked:i,shape:f,strides:fe.computeStrides(f),unpackedShape:t,reversedWH:o&&o.reverseWH}}});var nD,Ki,$b=j(()=>{"use strict";Bt();Fn();He();mb();bb();_b();xb();Bo();Ib();Re();nD=(n,e)=>{let r=e.map(o=>`${o.unpackedShape.join(",")};${o.width}x${o.height}`).join("_"),t=n.name;return n.cacheHint&&(t+="["+n.cacheHint+"]"),t+=":"+r,t},Ki=class{constructor(e){this.session=e;this.packedTextureDataCache=new Map,this.unpackedTextureDataCache=new Map}calculateTextureWidthAndHeight(e,r){return Tb(this.session.layoutStrategy,e,r)}executeProgram(e,r){if(r.length<e.inputNames.length)throw new Error(`Input size mustn't be less than ${e.inputNames.length}.`);if(e.inputNames.length!==e.inputTypes.length)throw new Error("input names size does not match input types");let t=[];for(let f=0;f<e.inputNames.length;++f)t[f]=this.getOrCreateTextureData(r[f],e.inputTypes[f]);let o=nD(e,t),i=this.session.programManager.getArtifact(o),a=i?i.programInfo:typeof e.get=="function"?e.get():e,u=Fo(this.session.layoutStrategy,a.output.dims,a.output.textureType),c=this.createTextureData(u,a.output.type);return i||(i=this.session.programManager.build(a,t,c),this.session.programManager.setArtifact(o,i)),this.runProgram(i,t,c),c}run(e,r){return this.executeProgram(e,r).tensor}runProgram(e,r,t){for(let o=0;o<r.length;++o)if(!!r[o].isPacked!=(e.programInfo.inputTypes[o]===2))throw new Error(`input[${o}] property packed inconsistent`);if(!!t.isPacked!=(e.programInfo.output.textureType===2))throw new Error("output property packed inconsistent");this.session.programManager.run(e,r,t)}getOrCreateTextureData(e,r){let t=this.getTextureData(e.dataId,r===2);if(!t&&(t=this.getTextureData(e.dataId,r!==2),t))return r===2?this.pack(t):this.unpack(t);if(!t){let o=Fo(this.session.layoutStrategy,e.dims,r);if(r===4){let u=e.dims;if(u.length===4){let c=[u[0],Math.ceil(u[1]*u[2]*u[3]/4)],f=Fo(this.session.layoutStrategy,c,r),m=e.numberData;if(u[1]*u[2]*u[3]%4!==0){let y=u[0],_=u[1]*u[2]*u[3],x=Math.ceil(_*1/4)*4,T=y*x;m=new Float32Array(T);for(let I=0;I<y;++I){let O=I*_,A=I*x+I%1*_;m.set(e.numberData.subarray(O,O+_),A)}}return this.createTextureData(f,e.type,m,e,1)}}if(r===2){let i=Cl(this.session.layoutStrategy,e.dims,1,[],{reverseWH:!0}),a=this.createTextureData(i,e.type,e.numberData,e,1);t=this.pack(a)}else t=this.createTextureData(o,e.type,e.numberData,e,1)}return t}createTextureDataFromLayoutBindTensor(e,r,t,o){return this.createTextureData(e,r,t,o,1)}createTextureData(e,r,t,o,i){qe.verbose("InferenceHandler",`Creating TextureData: layout:[${JSON.stringify(e)}]`);let a=this.session.textureManager.createTextureFromLayout(r,e,t,i);return this.createTextureDataFromTexture(e,r,a,o)}reshapeUnpacked(e,r){let t=this.getOrCreateTextureData(e,0),o={channels:t.channels,height:t.height,width:t.width,shape:r.length!==0?r:[1],strides:fe.computeStrides(r),unpackedShape:r};return this.createTextureDataFromTexture(o,e.type,t.texture).tensor}reshapePacked(e,r){let t=this.getOrCreateTextureData(e,2);if(yb(e.dims,r)){let f={channels:t.channels,height:t.height,width:t.width,shape:r.length!==0?r:[1],strides:fe.computeStrides(r),unpackedShape:r,isPacked:!0};return this.createTextureDataFromTexture(f,e.type,t.texture).tensor}let o=Ol(e.dims),i=Ol(r),a=this.reshapePacked(e,o),u=this.run(gb(this,a,i),[a]);return this.reshapePacked(u,r)}cast(e,r){let t=this.getOrCreateTextureData(e,0);return this.createTextureDataFromTexture(t,r,t.texture).tensor}createTextureDataFromTexture(e,r,t,o,i){let a={...e,tensor:o||new pt(e.unpackedShape,r,u=>this.readTexture(a),async u=>this.readTextureAsync(a),void 0,i),texture:t};return this.setTextureData(a.tensor.dataId,a,e.isPacked),a}getTextureData(e,r=!1){return this.session.isInitializer(e)?this.session.getTextureData(e,r):r?this.packedTextureDataCache.get(e):this.unpackedTextureDataCache.get(e)}setTextureData(e,r,t=!1){this.session.isInitializer(e)?this.session.setTextureData(e,r,t):(t?this.packedTextureDataCache:this.unpackedTextureDataCache).set(e,r)}isTextureLayoutCached(e,r=!1){return!!this.getTextureData(e.dataId,r)}dispose(){this.session.textureManager.clearActiveTextures(),this.packedTextureDataCache.forEach(e=>this.session.textureManager.releaseTexture(e)),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache.forEach(e=>this.session.textureManager.releaseTexture(e)),this.unpackedTextureDataCache=new Map}readTexture(e){return e.isPacked?this.readTexture(this.unpack(e)):this.session.backend.glContext.isFloat32DownloadSupported?this.session.textureManager.readTexture(e,e.tensor.type,e.channels):this.session.textureManager.readUint8TextureAsFloat(Pl(this,e))}async readTextureAsync(e){return e.isPacked?this.readTextureAsync(this.unpack(e)):this.session.backend.glContext.isFloat32DownloadSupported?this.session.textureManager.readTextureAsync(e,e.tensor.type,e.channels):this.session.textureManager.readUint8TextureAsFloat(Pl(this,e))}pack(e){return this.executeProgram(hb(this,e.tensor),[e.tensor])}unpack(e){return this.executeProgram(wb(this,e.tensor),[e.tensor])}}});var El,Ee,_t=j(()=>{"use strict";El=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ee=n=>new El(n)});var Ab,Ob,Pb,oD,iD,Cb=j(()=>{"use strict";_t();nt();Re();Ab={name:"BatchNormalization",inputNames:["A","Scale","B","Mean","Variance"],inputTypes:[0,0,0,0,0]},Ob=(n,e,r)=>(iD(e),[n.run({...Ab,cacheHint:r.cacheKey,get:()=>oD(n,e,r)},e)]),Pb=n=>{let e=n.attributes.getFloat("epsilon",1e-5),r=n.attributes.getFloat("momentum",.9),t=n.attributes.getInt("spatial",1);return Ee({epsilon:e,momentum:r,spatial:t})},oD=(n,e,r)=>{let t=ge(n.session.backend.glContext.version),o=e[0].dims.length,[i,a]=n.calculateTextureWidthAndHeight(e[1].dims,0),u=`
  float process(int[${o}] indices) {
    vec2 position = offsetToCoords(indices[1], ${i}, ${a});
    float scale = getColorAsFloat(${t.texture2D}(Scale, position));
    float mean = getColorAsFloat(${t.texture2D}(Mean, position));
    float variance = getColorAsFloat(${t.texture2D}(Variance, position));
    float b = getColorAsFloat(${t.texture2D}(B, position));

    return scale * ( (_A(indices) - mean) / sqrt(variance + float(${r.epsilon})) ) + b;
  }`;return{...Ab,output:{dims:e[0].dims,type:e[0].type,textureType:0},shaderSource:u}},iD=n=>{if(!n||n.length!==5)throw new Error("BatchNormalization requires 5 inputs.");let e=n[0],r=n[1],t=n[2],o=n[3],i=n[4];if(e.dims.length<3||r.dims.length!==1||t.dims.length!==1||o.dims.length!==1||i.dims.length!==1)throw new Error("invalid input shape.");if(r.dims[0]!==e.dims[1]||t.dims[0]!==e.dims[1]||o.dims[0]!==e.dims[1]||i.dims[0]!==e.dims[1])throw new Error("invalid input shape.");if(e.type!=="float32"&&e.type!=="float64"||r.type!=="float32"&&r.type!=="float64"||t.type!=="float32"&&t.type!=="float64"||o.type!=="float32"&&o.type!=="float64"||i.type!=="float32"&&i.type!=="float64")throw new Error("invalid input tensor types.")}});var Xi,Wt,ae,Vo,Yi,an=j(()=>{"use strict";Xi=class{constructor(e,r,t,o){this.glContext=e;this.programInfo=r;this.inputTextureLayouts=t;this.outputTextureLayout=o}},Wt=class{constructor(e){this.context=e}},ae=class{constructor(e,r){this.routineBody=e;this.dependencies=r}},Vo=class{constructor(e,r,t){this.name=e;t?this.dependencies=t:this.dependencies=[],r&&(this.routineBody=r)}addDependency(e){e&&this.dependencies.push(e)}},Yi=class{static returnOrderedNodes(e){if(!e||e.length===0)return[];if(e.length===1)return e;let r=new Set,t=new Set,o=new Array;return this.createOrderedNodes(e,r,t,o),o}static createOrderedNodes(e,r,t,o){for(let i=0;i<e.length;++i)this.dfsTraverse(e[i],r,t,o)}static dfsTraverse(e,r,t,o){if(!e||t.has(e.name))return;if(r.has(e.name))throw new Error("Cyclic dependency detected. Can't topologically sort routines needed for shader.");r.add(e.name);let i=e.dependencies;if(i&&i.length>0)for(let a=0;a<i.length;++a)this.dfsTraverse(i[a],r,t,o);o.push(e),t.add(e.name),r.delete(e.name)}}});function sD(){let n="add_";return{body:`
  float ${n}(float a, float b) {
    return a + b;
  }
  vec4 ${n}(vec4 v1, vec4 v2) {
    return v1 + v2;
  }
  `,name:n,type:0}}function uD(){let n="div_";return{body:`
  float ${n}(float a, float b) {
    return a / b;
  }
  vec4 ${n}(vec4 v1, vec4 v2) {
    return v1 / v2;
  }
  `,name:n,type:0}}function lD(){let n="mul_";return{body:`
  float ${n}(float a, float b) {
    return a * b;
  }
  vec4 ${n}(vec4 v1, vec4 v2) {
    return v1 * v2;
  }
  `,name:n,type:0}}function cD(){let n="sub_";return{body:`
  float ${n}(float a, float b) {
    return a - b;
  }
  vec4 ${n}(vec4 v1, vec4 v2) {
    return v1 - v2;
  }
  `,name:n,type:0}}function dD(){let n="equal_";return{body:`
  float ${n}(float a, float b) {
    return float(a == b);
  }
  vec4 ${n}(vec4 v1, vec4 v2) {
    return vec4(equal(v1, v2));
  }
  `,name:n,type:0}}function pD(){let n="greater_";return{body:`
  float ${n}(float a, float b) {
    return float(a > b);
  }
  vec4 ${n}(vec4 v1, vec4 v2) {
    return vec4( v1.r > v2.r ,
      v1.g > v2.g,
      v1.b > v2.b,
      v1.a > v2.a );
  }
  `,name:n,type:0}}function fD(){let n="less_";return{body:`
  float ${n}(float a, float b) {
    return float(a < b);
  }
  vec4 ${n}(vec4 v1, vec4 v2) {
    return vec4( v1.r < v2.r ,
                v1.g < v2.g,
                v1.b < v2.b,
                v1.a < v2.a );
  }
  `,name:n,type:0}}function hD(){let n="and_";return{body:`
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
  `,name:n,type:0}}function mD(){let n="or_";return{body:`
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
  `,name:n,type:0}}function gD(){let n="xor_";return{body:`
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
  `,name:n,type:0}}function yD(){return _D("pow")}function bD(){let n="prelu_";return{body:`
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
  `,name:n,type:0}}function _D(n){let e=`${n}_`;return{body:`
  float ${e}(float a, float b) {
    return ${n}(a, b);
  }
  vec4 ${e}(vec4 v1, vec4 v2) {
    return ${n}(v1, v2);
  }
  `,name:e,type:0}}var Ht,vD,Eb,Db,kb,Nb,Lb,Rb,zb,Mb,Bb,Fb,Vb,Gb,Ub=j(()=>{"use strict";He();an();nt();Re();Ht=(n,e,r,t=e[0].type,o)=>{let i=n.session.pack?2:0;return{name:r.name,inputNames:["A","B"],inputTypes:[i,i],cacheHint:o,get:()=>vD(n,e,r,t)}},vD=(n,e,r,t=e[0].type)=>{let o=n.session.pack?2:0,i=!fe.areEqual(e[0].dims,e[1].dims),a=e[0].dims,u=n.session.pack;if(i){let m=It.calcShape(e[0].dims,e[1].dims,!1);if(!m)throw new Error("Can't perform binary op on the given tensors");a=m;let y=a.length,_=e[0].dims.length!==0?e[0].dims.length:1,x=e[1].dims.length!==0?e[1].dims.length:1,T=e[0].dims.length!==0?"bcastIndices_A(indices, aindices);":"aindices[0] = 0;",I=e[1].dims.length!==0?"bcastIndices_B(indices, bindices);":"bindices[0] = 0;",O=ge(n.session.backend.glContext.version),A=u?`
      ${r.body}
      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();
        vec4 result = ${r.name}(a, b);
        ${O.output} = result;
      }`:`
      ${r.body}
      float process(int indices[${y}]) {
        int aindices[${_}];
        int bindices[${x}];
        ${T}
        ${I}
        return ${r.name}(_A(aindices), _B(bindices));
      }`;return{name:r.name,inputNames:["A","B"],inputTypes:[o,o],output:{dims:a,type:t,textureType:o},shaderSource:A,hasMain:u}}let c=ge(n.session.backend.glContext.version),f=`
    ${r.body}
    void main() {
      vec4 v1 = ${c.texture2D}(A, TexCoords);
      vec4 v2 = ${c.texture2D}(B, TexCoords);
      vec4 result = ${r.name}(v1, v2);
      ${c.output} = result;
    }
    `;return{name:r.name,inputNames:["A","B"],inputTypes:[o,o],output:{dims:e[0].dims,type:t,textureType:o},shaderSource:f,hasMain:!0}},Eb=(n,e)=>[n.run(Ht(n,e,sD()),e)],Db=(n,e)=>[n.run(Ht(n,e,hD(),"bool"),e)],kb=(n,e)=>[n.run(Ht(n,e,uD()),e)],Nb=(n,e)=>[n.run(Ht(n,e,dD(),"bool"),e)],Lb=(n,e)=>[n.run(Ht(n,e,pD(),"bool"),e)],Rb=(n,e)=>[n.run(Ht(n,e,fD(),"bool"),e)],zb=(n,e)=>[n.run(Ht(n,e,lD()),e)],Mb=(n,e)=>[n.run(Ht(n,e,mD(),"bool"),e)],Bb=(n,e)=>[n.run(Ht(n,e,yD()),e)],Fb=(n,e)=>[n.run(Ht(n,e,bD()),e)],Vb=(n,e)=>[n.run(Ht(n,e,cD()),e)],Gb=(n,e)=>[n.run(Ht(n,e,gD(),"bool"),e)]});var jb,Wb,xD,Hb=j(()=>{"use strict";He();jb=(n,e,r)=>(xD(e),[n.cast(e[0],r)]),Wb=n=>wt.tensorDataTypeFromProto(n.attributes.getInt("to")),xD=n=>{if(!n||n.length!==1)throw new Error("Cast requires 1 input.");if(n[0].type==="string")throw new Error("Invalid input type.")}});var TD,ID,qb,Zi,Kb=j(()=>{"use strict";nt();Re();jr();Vn();TD=(n,e)=>({name:"Concat (packed)",inputNames:Array.from({length:n},(r,t)=>`X${t}`),inputTypes:Array(n).fill(2),cacheHint:e}),ID=(n,e,r,t)=>{let o=r[0].dims.slice();if(t>=o.length||t<-1*o.length)throw new Error("axis specified for concat doesn't match input dimensionality");t<0&&(t=o.length+t);let i=o.slice(0);for(let R=1;R<r.length;R++){let M=r[R].dims.slice();for(let q=0;q<o.length;q++)if(q===t)i[t]+=M[q];else if(o[q]!==M[q])throw new Error("non concat dimensions must match")}let a=i.length,u=uo("coords",a),c=St(a),f=Wr(),m=r.map(R=>R.dims),y=rr(a),_=new Array(m.length-1);_[0]=m[0][t];for(let R=1;R<_.length;R++)_[R]=_[R-1]+m[R][t];let x=y[t],T=y.slice(-2),I=y.join(),O=`if (${x} < ${_[0]}) {
        return getChannel(
            getX0(${I}), vec2(${T.join()}));
        }`;for(let R=1;R<_.length;R++){let M=_[R-1];O+=`
            if (${x} < ${_[R]}  && ${x} >= ${_[R-1]}) {
              return getChannel(
                getX${R}(${Zi(y,x,M)}),
                vec2(${Zi(T,x,M)}));
            }`}let A=_.length,$=_[_.length-1];O+=`
            return getChannel(
              getX${A}(${Zi(y,x,$)}),
              vec2(${Zi(T,x,$)}));`;let C=ge(n.session.backend.glContext.version),L=`
          ${f}
          float getValue(${y.map(R=>"int "+R)}) {
            ${O}
          }

          void main() {
            ${c} coords = getOutputCoords();
            int lastDim = coords.${y[a-1]};
            coords.${y[a-1]} = coords.${y[a-2]};
            coords.${y[a-2]} = lastDim;

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
        `;return{...e,output:{dims:i,type:r[0].type,textureType:2},shaderSource:L,hasMain:!0}},qb=(n,e,r)=>{let t=TD(e.length,r.cacheKey);return{...t,get:()=>ID(n,t,e,r.axis)}},Zi=(n,e,r)=>{let t=n.indexOf(e);return n.map((i,a)=>a===t?`${i} - ${r}`:i).join()}});var Xb,SD,$D,AD,Yb,OD,PD,CD,Zb,ED,Jb=j(()=>{"use strict";_t();Re();Kb();Xb=(n,e,r)=>(ED(e),n.session.pack&&e[0].dims.length>1?[n.run(qb(n,e,r),e)]:[n.run(AD(n,e,r),e)]),SD=(n,e)=>({name:"Concat",inputNames:Array.from({length:n},(r,t)=>`X${t}`),inputTypes:Array(n).fill(0),cacheHint:e}),$D=(n,e,r,t)=>{let o=r[0].dims.slice();if(t>=o.length||t<-1*o.length)throw new Error("axis specified for concat doesn't match input dimensionality");t<0&&(t=o.length+t);let i=o.slice(0);for(let x=1;x<r.length;x++){let T=r[x].dims.slice();for(let I=0;I<o.length;I++)if(I===t)i[t]+=T[I];else if(o[I]!==T[I])throw new Error("non concat dimensions must match")}let a=i.length,u=new Array(r.length),c=0;for(let x=0;x<u.length;++x)c+=r[x].dims[t],u[x]=c;let f="";r.length<5?f=Yb(u):f=OD(u);let m=PD(r.length,a),y=CD(u),_=`
        ${m}
        ${y}
        ${f}
        float process(int indices[${a}]) {
          int textureIndex = getTextureWhereDataResides (indices[${t}]);

          if(textureIndex != 0) {
            indices[${t}] = indices[${t}] - int(getSizeInConcatAxisValueFromIndex(textureIndex-int(1)));
          }

          return fetchDataFromCorrectTexture(textureIndex, indices);
        }`;return{...e,output:{dims:i,type:r[0].type,textureType:0},shaderSource:_}},AD=(n,e,r)=>{let t=SD(e.length,r.cacheKey);return{...t,get:()=>$D(n,t,e,r.axis)}},Yb=n=>`int getTextureWhereDataResides(int index) {
      ${n.map((r,t)=>`if(index<${r}) {return ${t};}
`).join("")}
    }`,OD=n=>Yb(n),PD=(n,e)=>{let r=[`float fetchDataFromCorrectTexture(int textureIndex, int indices[${e}]) {`];for(let t=0;t<n;++t)t===0?r.push(`	if (textureIndex == ${t}) { return _X${t}(indices); }`):t===n-1?r.push(`	else { return _X${t}(indices); }`):r.push(`	else if (textureIndex == ${t}) { return _X${t}(indices); }`);return r.push("	}"),r.join(`
`)},CD=n=>{let e=["int getSizeInConcatAxisValueFromIndex(int index) {"];for(let r=0;r<n.length;++r)r===0?e.push(`	if (index == ${r}) { return ${n[r]}; }`):r===n.length-1?e.push(`	else { return ${n[r]}; }`):e.push(`	else if (index == ${r}) { return ${n[r]}; }`);return e.push("	}"),e.join(`
`)},Zb=n=>Ee({axis:n.attributes.getInt("axis")}),ED=n=>{if(!n||n.length<1)throw new Error("too few inputs");let e=n[0].type,r=n[0].dims.length;if(e==="string")throw new Error("string tensor is not supported yet");for(let t of n){if(t.type!==e)throw new Error("input tensors should be one type");if(t.dims.length!==r)throw new Error("input tensors should have the same shape")}}});function DD(){return qt("abs")}function kD(){return qt("acos")}function ND(){return qt("asin")}function LD(){return qt("atan")}function RD(){return qt("ceil")}function zD(){return qt("cos")}function MD(n){let e="elu";return{body:`
  const float alpha = float(${n});

  float ${e}_(float a) {
    return a >= 0.0 ? a: (exp(a) - 1.0) * alpha;
  }
  vec4 ${e}_(vec4 v) {
    return vec4(${e}_(v.x), ${e}_(v.y), ${e}_(v.z), ${e}_(v.w));
  }
  `,name:e,type:0}}function BD(){return qt("exp")}function FD(){return qt("floor")}function Dl(n,e){let r="clip";return{body:`
  const float min = float(${n});
  const float max = float(${e});

  float ${r}_(float a) {
    return clamp(a, min, max);
  }
  vec4 ${r}_(vec4 v) {
    return clamp(v, min, max);
  }
  `,name:r,type:0}}function VD(){let n="indentity";return{body:`
  float ${n}_(float a) {
    return a;
  }
  vec4 ${n}_(vec4 v) {
    return v;
  }
  `,name:n,type:0}}function GD(n){let e="leakyRelu";return{body:`
  const float alpha = float(${n});

  float ${e}_(float a) {
    return a < 0.0 ? a * alpha : a;
  }
  vec4 ${e}_(vec4 v) {
    return vec4(${e}_(v.x), ${e}_(v.y), ${e}_(v.z), ${e}_(v.w));
  }
  `,name:e,type:0}}function UD(){return qt("log")}function jD(){let n="neg";return{body:`
  float ${n}_(float a) {
    return -a;
  }
  vec4 ${n}_(vec4 v) {
    return -v;
  }
  `,name:n,type:0}}function WD(){let n="not";return{body:`
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
  `,name:n,type:0}}function HD(){return qt("sin")}function kl(){let n="relu";return{body:`
  float ${n}_(float a) {
    return max( a, 0.0 );
  }
  vec4 ${n}_(vec4 v) {
    return max( v, 0.0 );
  }
  `,name:n,type:0}}function Nl(){let n="sigmoid";return{body:`
  float ${n}_(float a) {
    return 1.0 / (1.0 + exp(-a));
  }
  vec4 ${n}_(vec4 v) {
    return 1.0 / (1.0 + exp(-v));
  }
  `,name:n,type:0}}function qD(){return qt("sqrt")}function KD(){return qt("tan")}function XD(){let n="tanh";return{body:`
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
  `,name:n,type:0}}function qt(n){return{body:`
  float ${n}_(float a) {
    return ${n}(a);
  }
  vec4 ${n}_(vec4 v) {
    return ${n}(v);
  }
  `,name:n,type:0}}var YD,lt,Qb,e_,t_,r_,Ll,n_,o_,ZD,i_,a_,s_,u_,l_,c_,Rl,d_,p_,f_,h_,m_,g_,y_,b_,__,v_,w_,zl=j(()=>{"use strict";_t();He();an();nt();Re();YD=(n,e,r,t)=>{let o=n.session.pack?2:0,i=ge(n.session.backend.glContext.version);return{...e,output:{dims:r.dims,type:r.type,textureType:o},shaderSource:`
     ${t.body}
     void main() {
       vec4 v = ${i.texture2D}(A, TexCoords);
       v = ${t.name}_(v);
       ${i.output} = v;
     }
     `,hasMain:!0}},lt=(n,e,r,t)=>{let o=n.session.pack?2:0,i={name:r.name,inputTypes:[o],inputNames:["A"],cacheHint:t};return{...i,get:()=>YD(n,i,e,r)}},Qb=(n,e)=>[n.run(lt(n,e[0],DD()),e)],e_=(n,e)=>[n.run(lt(n,e[0],kD()),e)],t_=(n,e)=>[n.run(lt(n,e[0],ND()),e)],r_=(n,e)=>[n.run(lt(n,e[0],LD()),e)],Ll=(n,e,r)=>[n.run(lt(n,e[0],Dl(r.min,r.max),r.cacheKey),e)],n_=n=>Ee({min:n.attributes.getFloat("min",Mn),max:n.attributes.getFloat("max",Bn)}),o_=(n,e)=>{let r=ZD(n,e);return Ll(n,[e[0]],r)},ZD=(n,e)=>{if(e.length>=3&&(!n.session.isInitializer(e[1].dataId)||!n.session.isInitializer(e[2].dataId)))throw new Error("dynamic clip attributes are not allowed");let r=e.length>=3?e[1].numberData[0]:Mn,t=e.length>=3?e[2].numberData[0]:Bn;return Ee({min:r,max:t})},i_=(n,e)=>[n.run(lt(n,e[0],RD()),e)],a_=(n,e)=>[n.run(lt(n,e[0],zD()),e)],s_=(n,e,r)=>[n.run(lt(n,e[0],MD(r.alpha),r.cacheKey),e)],u_=n=>Ee({alpha:n.attributes.getFloat("alpha",1)}),l_=(n,e)=>[n.run(lt(n,e[0],BD()),e)],c_=(n,e)=>[n.run(lt(n,e[0],FD()),e)],Rl=(n,e)=>[n.run(lt(n,e[0],VD()),e)],d_=(n,e,r)=>[n.run(lt(n,e[0],GD(r.alpha),r.cacheKey),e)],p_=n=>Ee({alpha:n.attributes.getFloat("alpha",.01)}),f_=(n,e)=>[n.run(lt(n,e[0],UD()),e)],h_=(n,e)=>[n.run(lt(n,e[0],jD()),e)],m_=(n,e)=>[n.run(lt(n,e[0],WD()),e)],g_=(n,e)=>[n.run(lt(n,e[0],kl()),e)],y_=(n,e)=>[n.run(lt(n,e[0],Nl()),e)],b_=(n,e)=>[n.run(lt(n,e[0],HD()),e)],__=(n,e)=>[n.run(lt(n,e[0],qD()),e)],v_=(n,e)=>[n.run(lt(n,e[0],KD()),e)],w_=(n,e)=>[n.run(lt(n,e[0],XD()),e)]});function Hr(n){let e;switch(n.activation){case"Relu":e=kl();break;case"Sigmoid":e=Nl();break;case"Clip":e=Dl(n.clipMin,n.clipMax);break;default:return{activationFunction:"",applyActivation:""}}let r=e.name,t=e.body,o=`value = ${r}_(value);`;return{activationFunction:t,applyActivation:o}}var lo,Gn=j(()=>{"use strict";He();zl();lo=n=>{let e=n.getString("activation","");if(e==="Clip"){let[r,t]=n.getFloats("activation_params",[Mn,Bn]);return{activation:e,clipMax:t,clipMin:r,activationCacheKey:`${e}:${r},${t}`}}return{activation:e,activationCacheKey:e}}});var QD,ek,x_,T_=j(()=>{"use strict";Bt();nt();Re();Ji();Gn();QD=(n,e)=>({name:"GroupedConv",inputNames:n?["X","W","Bias"]:["X","W"],inputTypes:n?[0,0,0]:[0,0],cacheHint:e}),ek=(n,e,r,t)=>{let i=e.length>2?"value += getBias(output_channel);":"",a=e[0].dims.slice(),u=e[1].dims.slice(),c=u[0]/t.group;qe.verbose("GroupedConv",`autpPad:${t.autoPad}, dilations:${t.dilations}, group:${t.group}, kernelShape:${t.kernelShape}, pads:${t.pads}, strides:${t.strides}`);let f=co(a,u,t.dilations,t.pads,t.strides),m=ge(n.session.backend.glContext.version),{activationFunction:y,applyActivation:_}=Hr(t),x=`
  const ivec2 strides = ivec2(${t.strides[0]}, ${t.strides[1]});
  const ivec2 pads = ivec2(${t.pads[0]}, ${t.pads[1]});
  ${y}
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
`;return{...r,output:{dims:f,type:e[0].type,textureType:0},shaderSource:x,hasMain:!0}},x_=(n,e,r)=>{let t=QD(e.length>2,r.cacheKey);return{...t,get:()=>ek(n,e,t,r)}}});var tk,rk,I_,S_=j(()=>{"use strict";nt();Re();Vn();tk=n=>({name:"Im2Col (packed)",inputNames:["A"],inputTypes:[2],cacheHint:n}),rk=(n,e,r,t,o,i)=>{let a=r.dims,u=t.dims,c=2,f=3,m=o.length,y=[u[1]*u[2]*u[3],o[2]*o[3]],_=u[2]*u[3],x=Wr(),T=ge(n.session.backend.glContext.version),I="";for(let A=0;A<=1;A++)for(let $=0;$<=1;$++)I+=`
            blockIndex = rc.x + ${$};
            pos = rc.y + ${A};

            if(blockIndex < ${y[1]} && pos < ${y[0]}) {
              offsetY = int(blockIndex / (${o[m-1]})) * ${i.strides[0]} -
                ${i.pads[0]};
              d0 = offsetY + ${i.dilations[0]} * (imod(pos, ${_}) / ${u[2]});

              if(d0 < ${a[c]} && d0 >= 0) {
                offsetX = imod(blockIndex, ${o[m-1]}) * ${i.strides[1]} -
                  ${i.pads[1]};
                d1 = offsetX + ${i.dilations[1]} * imod(imod(pos, ${_}), ${u[2]});

                if(d1 < ${a[f]} && d1 >= 0) {

                  ch = int(float(pos)/ ${_}.);
                    innerDims = vec2(d0, d1);
                    result[${A*2+$}] = getChannel(
                      getA(0, ch, int(innerDims.x),
                      int(innerDims.y)), innerDims);
                }
              }
            }

          `;let O=`
      ${x}

      void main() {
        ivec2 rc = getOutputCoords();
          vec4 result = vec4(0.0);
          int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
          vec2 innerDims;
          ${I}
          ${T.output} = result;
      }
            `;return{...e,output:{dims:y,type:r.type,textureType:2},shaderSource:O,hasMain:!0}},I_=(n,e,r,t,o)=>{let i=tk(o.cacheKey);return{...i,get:()=>rk(n,i,e,r,t,o)}}});function ok(n,e,r){let t=e[0].dims,o=e[1].dims,i=It.calcShape(t,o,!0);if(!i)throw new Error("Can't use matmul on the given tensors");let a=St(i.length),u=rr(),{activationFunction:c,applyActivation:f}=Hr(r),m=e.length>2,y=m?"value += getBiasForMatmul();":"",_=m?`${Bl(a,u,e[2].dims,i,!1)}`:"",x=i.length,T=t.length,I=o.length,O=t[t.length-1],A=`
    ${c}
    ${_}
    float process(int indices[${x}]) {
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
        ${y}
        ${f}
        return value;
    }`;return{...n,output:{dims:i,type:e[0].type,textureType:0},shaderSource:A}}function Ml(n,e){let r=nk(n.length>2,e.activationCacheKey);return{...r,get:()=>ok(r,n,e)}}function Bl(n,e,r,t,o){let i="",a=r.length,u=t.length,c=u-a;u<2&&a>0?i="coords":i=r.map((I,O)=>`coords.${e[O+c]}`).join(", ");let m=It.getBroadcastDims(r,t).map(I=>`coords.${e[I+c]} = 0;`).join(`
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
}`}var $_,A_,nk,ik,Qi=j(()=>{"use strict";He();Re();jr();Gn();Fl();$_=(n,e,r)=>(ik(e),n.session.pack?[n.run(ea(n,e,r),e)]:[n.run(Ml(e,r),e)]),A_=n=>lo(n.attributes),nk=(n,e)=>({name:"MatMul",inputNames:n?["A","B","Bias"]:["A","B"],inputTypes:n?[0,0,0]:[0,0],cacheHint:e});ik=n=>{if(!n||n.length!==2)throw new Error("MatMul requires 2 inputs.");if(n[0].dims[n[0].dims.length-1]!==n[1].dims[n[1].dims.length-2])throw new Error("shared dimension does not match.");if(n[0].type!=="float32"&&n[0].type!=="float64"||n[1].type!=="float32"&&n[1].type!=="float64")throw new Error("inputs should be float type");if(n[0].type!==n[1].type)throw new Error("inputs types should match")}});function uk(n,e,r,t){let o=[],i=[],a=r[0].dims,u=r[1].dims,c=a.length,f=u.length,m=t.length,y=m-c,_=m-f;o=a.map((C,L)=>`coords.${e[L+y]}`),o[c-1]="i*2",o.join(", "),i=u.map((C,L)=>`coords.${e[L+_]}`),i[f-2]="i*2",i.join(", ");let x=It.getBroadcastDims(a,t),T=It.getBroadcastDims(u,t),I=x.map(C=>`coords.${e[C+y]} = 0;`).join(`
`),O=T.map(C=>`coords.${e[C+_]} = 0;`).join(`
`),A=`int lastDim = coords.${e[m-1]};
  coords.${e[m-1]} = coords.${e[m-2]};
  coords.${e[m-2]} = lastDim;`;return`
vec4 getAAtOutCoordsMatmul(int i) {
  ${n} coords = getOutputCoords();
  ${A}
  ${I}
  vec4 outputValue = getA(${o});
  return outputValue;
}

vec4 getBAtOutCoordsMatmul(int i) {
  ${n} coords = getOutputCoords();
  ${A}
  ${O}
  vec4 outputValue = getB(${i});
  return outputValue;
}`}function lk(n,e){let r="";for(let t=0;t<e-2;t++)r+=`rc.${n[t]}, `;return r+=`rc.${n[e-2]}, i*2`,r}function ck(n,e){let r="";for(let t=0;t<e-2;t++)r+=`rc.${n[t]}, `;return r+=`i*2, rc.${n[e-1]}`,r}var ak,sk,ea,Fl=j(()=>{"use strict";He();nt();Re();jr();Gn();Qi();ak=(n,e)=>({name:"MatMul (packed)",inputNames:n?["A","B","Bias"]:["A","B"],inputTypes:n?[2,2,2]:[2,2],cacheHint:e}),sk=(n,e,r,t)=>{let o=r.length>2,i=o?"value += getBiasForMatmul();":"",a=r[0].dims,u=r[1].dims,c=It.calcShape(a,u,!0),f=!fe.areEqual(r[0].dims,r[1].dims);if(!c)throw new Error("Can't use matmul on the given tensors");let m=a[a.length-1],y=Math.ceil(m/2),_=a.length,x=u.length,T=ge(n.session.backend.glContext.version),I=St(c.length),O=c.length,A=rr(),{activationFunction:$,applyActivation:C}=Hr(t),L=o?`${Bl(I,A,r[2].dims,c,!0)}`:"",R=f?`${uk(I,A,r,c)}`:"",M=f?"getAAtOutCoordsMatmul(i)":`getA(${lk(A,_)})`,q=f?"getBAtOutCoordsMatmul(i)":`getB(${ck(A,x)})`,X=f?"":`${I} rc =
          getOutputCoords(); int lastDim = rc.${A[O-1]}; rc.${A[O-1]} =
          rc.${A[O-2]}; rc.${A[O-2]} = lastDim;
      `,J=`
            ${R}
            ${L}
            ${$}
            void main() {
              ${X}

              vec4 value = vec4(0);
              for (int i = 0; i < ${y}; i++) {
                vec4 a = ${M};
                vec4 b = ${q};

                value += (a.rrbb * b.rgrg);
                value += (a.ggaa * b.baba);
              }
              ${i}
              ${C}
              ${T.output} = value;
            }`;return{...e,output:{dims:c,type:r[0].type,textureType:2},shaderSource:J,hasMain:!0}},ea=(n,e,r)=>{let t=ak(e.length>2,r.activationCacheKey);return{...t,get:()=>sk(n,t,e,r)}}});var O_,P_=j(()=>{"use strict";Ji();S_();Fl();O_=(n,e,r)=>{let t=e[0].dims,o=e[1].dims,i=co(t,o,r.dilations,r.pads,r.strides),a=n.run(I_(n,e[0],e[1],i,r),[e[0]]),u=n.reshapePacked(e[1],[o[0],o[1]*o[2]*o[3]]),c=e.length===3?[u,a,e[2]]:[u,a],f=n.run(ea(n,c,r),c);return n.reshapePacked(f,i)}});var dk,pk,C_,Vl,Gl=j(()=>{"use strict";Re();dk=n=>({name:"Im2Col",inputNames:["X"],inputTypes:[0],cacheHint:n}),pk=(n,e,r,t,o,i)=>{let a=r.dims,u=t.dims,c=o.length,f=Vl(a,u,o,4),m=`
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
        `;return{...e,output:{dims:f,type:r.type,textureType:4},shaderSource:m}},C_=(n,e,r,t,o)=>{let i=dk(o.cacheKey);return{...i,get:()=>pk(n,i,e,r,t,o)}},Vl=(n,e,r,t=4)=>[r[0],r[2],r[3],Math.ceil(n[1]*e[2]*e[3]/t)]});var fk,hk,E_,D_=j(()=>{"use strict";He();nt();Re();Gn();Gl();fk=(n,e)=>({name:"ConvDotProduct",inputNames:n?["Im2Col","K","B"]:["Im2Col","K"],inputTypes:n?[0,4,0]:[0,4],cacheKey:e.activationCacheKey}),hk=(n,e,r,t,o)=>{let i=r[0].dims,a=r[1].dims,u=[a[0],Math.ceil(i[1]*a[2]*a[3]/4)],c=Vl(i,a,t),[f,m]=n.calculateTextureWidthAndHeight(u,4),y=fe.computeStrides(c),[_,x]=n.calculateTextureWidthAndHeight(c,4),T=t.length,I=r.length<3?"0.0":"_B(b)",O=Math.ceil(i[1]*a[2]*a[3]/4),{activationFunction:A,applyActivation:$}=Hr(o),C=ge(n.session.backend.glContext.version),L=`
${A}
float process(int indices[${T}]) {
  int b[1];
  b[0] = indices[1];
  int im2col[4];
  im2col[0] = indices[0];
  im2col[1] = indices[2];
  im2col[2] = indices[3];
  int im2colOffset = im2col[0] * ${y[0]} + im2col[1] * ${y[1]} + im2col[2] * ${y[2]};
  int kernelOffset = indices[1] * ${u[1]};
  float value = ${I};
  for (int i = 0; i < ${O}; ++i) {
    vec2 im2colCoords = offsetToCoords(im2colOffset, ${_}, ${x});
    vec2 kernelCoords = offsetToCoords(kernelOffset, ${f}, ${m});
    value += dot(${C.texture2D}(Im2Col, im2colCoords), ${C.texture2D}(K, kernelCoords));
    ++im2colOffset;
    ++kernelOffset;
  }
  ${$}
  return value;
}`;return{...e,output:{dims:t,type:r[0].type,textureType:0},shaderSource:L}},E_=(n,e,r,t)=>{let o=fk(e.length>2,t);return{...o,get:()=>hk(n,o,e,r,t)}}});var co,Ul,mk,gk,yk,bk,jl,_k,Ji=j(()=>{"use strict";_t();He();T_();P_();D_();Gn();Gl();Qi();co=(n,e,r,t,o)=>{let i=n[0],a=n.slice(2),u=a.length,c=e[0],m=e.slice(2).map((T,I)=>T+(T-1)*(r[I]-1)),_=a.map((T,I)=>T+t[I]+t[I+u]).map((T,I)=>Math.floor((T-m[I]+o[I])/o[I]));return[i,c].concat(..._)},Ul=(n,e,r)=>(_k(e,r),mk(n,e,r)),mk=(n,e,r)=>{let t=bk(r,e),o=n.session.pack,i=t.kernelShape[0]===1&&t.kernelShape[1]===1;return t.group>1?[n.run(x_(n,e,t),e)]:i&&o?[gk(n,e,t)]:o&&e[0].dims.length===4&&e[0].dims[0]===1&&!i?[O_(n,e,t)]:[yk(n,e,t)]},gk=(n,e,r)=>{let t=e[0].dims,o=e[1].dims,i=co(t,o,r.dilations,r.pads,r.strides),a=n.reshapeUnpacked(e[0],[t[1],t[2]*t[3]]),u=n.reshapeUnpacked(e[1],[o[0],o[1]]),c=e.length>2?[u,a,e[2]]:[u,a],f=n.run(Ml(c,r),c);return n.reshapeUnpacked(f,i)},yk=(n,e,r)=>{let t=e[0].dims,o=e[1].dims,i=co(t,o,r.dilations,r.pads,r.strides),a=n.run(C_(n,e[0],e[1],i,r),[e[0]]),u=e.length===3?[a,e[1],e[2]]:[a,e[1]];return n.run(E_(n,e,i,r),u)},bk=(n,e)=>{let r=n.kernelShape.slice();if(n.kernelShape.length===0)for(let i=2;i<e[1].dims.length;++i)r.push(e[1].dims[i]);let t=n.pads.slice();zn.adjustPadsBasedOnAutoPad(e[0].dims,n.strides,n.dilations,r,t,n.autoPad);let o=Object.assign({},n);return Object.assign(o,{kernelShape:r,pads:t,cacheKey:n.cacheKey}),o},jl=n=>{let e=n.attributes,r=lo(e),t=e.getString("auto_pad","NOTSET"),o=e.getInts("dilations",[1,1]),i=e.getInt("group",1),a=e.getInts("kernel_shape",[]),u=e.getInts("pads",[0,0,0,0]),c=e.getInts("strides",[1,1]);return Ee({autoPad:t,dilations:o,group:i,kernelShape:a,pads:u,strides:c,...r})},_k=(n,e)=>{if(!n||n.length!==2&&n.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(n[0].dims.length!==4||n[1].dims.length!==4)throw new Error("currently only support 2-dimensional conv");let r=n[0].dims[1],t=n[1].dims[1]*e.group;if(r!==t)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(n.length===3&&(n[2].dims.length!==1||n[1].dims[0]!==n[2].dims[0]))throw new Error("invalid bias");let o=n[0].dims.length-2;if(e.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(e.strides.length!==o)throw new Error(`strides should be ${o}D`);if(e.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(e.kernelShape.length!==0&&e.kernelShape.length!==n[1].dims.length-2)throw new Error("invalid kernel shape");if(n[0].type!=="float32"||n[1].type!=="float32")throw new Error("Conv input(X,W) should be float tensor");if(n.length===3&&n[2].type!=="float32")throw new Error("Conv input(bias) should be float tensor")}});var vk,wk,xk,k_,Tk,Ik,Sk,$k,Ak,Ok,N_,Pk,L_=j(()=>{"use strict";_t();nt();Re();Gn();vk=(n,e,r,t,o,i)=>(n-1)*e+r+(t-1)*o+1-i,wk=(n,e,r,t,o)=>{let i=Math.floor(n/2);e==="SAME_UPPER"?(r[t]=i,r[o]=n-i):e==="SAME_LOWER"&&(r[t]=n-i,r[o]=i)},xk=(n,e,r,t,o,i,a,u)=>{let c=n.length-2,f=u.length===0;for(let m=0;m<c;++m){let y=f?n[m+2]*i[m]:u[m],_=vk(n[m+2],i[m],o[m],e[m],r[m],y);wk(_,t,o,m,m+c),f&&u.push(i[m]*(n[m+2]-1)+a[m]+(e[m]-1)*r[m]+1-o[m]-o[m+c])}},k_=(n,e,r)=>(Pk(e,r),Tk(n,e,r)),Tk=(n,e,r)=>{let t=Ok(r,e);return[Ak(n,e,t)]},Ik=(n,e)=>({name:"ConvTranspose",inputNames:n?["X","W","B"]:["X","W"],inputTypes:n?[0,0,0]:[0,0],cacheHint:e}),Sk=(n,e,r,t)=>{let i=e.length>2?"getB(output_channel)":"0.0",a=e[0].dims,u=e[1].dims,c=u[1],f=u[0]/t.group,m=[e[0].dims[0],e[1].dims[1]*t.group,...t.outputShape],y=ge(n.session.backend.glContext.version),{activationFunction:_,applyActivation:x}=Hr(t),T=`
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
    for (int inChannelOffset = 0; inChannelOffset < ${f}; inChannelOffset++) {
      int input_channel = group_id * ${f} + inChannelOffset;
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
    ${y.output} = vec4(value, .0, .0, .0);
  }
`;return{...r,output:{dims:m,type:e[0].type,textureType:0},shaderSource:T,hasMain:!0}},$k=(n,e,r)=>{let t=Ik(e.length>2,r.cacheKey);return{...t,get:()=>Sk(n,e,t,r)}},Ak=(n,e,r)=>n.run($k(n,e,r),e),Ok=(n,e)=>{let r=n.kernelShape.slice();if(n.kernelShape.length===0)for(let u=2;u<e[1].dims.length;++u)r.push(e[1].dims[u]);let t=n.pads.slice(),o=n.outputShape.slice(),i=e[0].dims;xk(i,r,n.dilations,n.autoPad,t,n.strides,n.outputPadding,o);let a=Object.assign({},n);return Object.assign(a,{kernelShape:r,pads:t,outputShape:o,cacheKey:n.cacheKey}),a},N_=n=>{let e=n.attributes,r=lo(e),t=e.getString("auto_pad","NOTSET"),o=e.getInts("dilations",[1,1]),i=e.getInt("group",1),a=e.getInts("kernel_shape",[]),u=e.getInts("output_padding",[0,0]),c=e.getInts("output_shape",[]),f=e.getInts("pads",[0,0,0,0]),m=e.getInts("strides",[1,1]);return Ee({autoPad:t,dilations:o,group:i,kernelShape:a,outputPadding:u,outputShape:c,pads:f,strides:m,...r})},Pk=(n,e)=>{if(!n||n.length!==2&&n.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(n[0].dims.length!==4||n[1].dims.length!==4)throw new Error("currently only support 2-dimensional conv");let r=n[0].dims[1],t=n[1].dims[0];if(r!==t)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let o=n[1].dims[1]*e.group;if(n.length===3&&(n[2].dims.length!==1||n[2].dims[0]!==o))throw new Error("invalid bias");let i=n[0].dims.length-2;if(e.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(e.strides.length!==i)throw new Error(`strides should be ${i}D`);if(e.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(e.outputPadding.length!==i)throw new Error(`output_padding should be ${i}D`);if(e.kernelShape.length!==0&&e.kernelShape.length!==n[1].dims.length-2)throw new Error("invalid kernel shape");if(e.outputShape.length!==0&&e.outputShape.length!==n[0].dims.length-2)throw new Error("invalid output shape");if(n[0].type!=="float32"||n[1].type!=="float32")throw new Error("ConvTranspose input(X,W) should be float tensor");if(n.length===3&&n[2].type!=="float32")throw new Error("ConvTranspose input(bias) should be float tensor")}});var R_,Un,z_,Ck,M_,Ek,Dk,kk,ta=j(()=>{"use strict";_t();He();Re();R_={name:"Transpose",inputNames:["A"],inputTypes:[0]},Un=(n,e,r)=>(kk(e),[n.run({...R_,cacheHint:r.cacheKey,get:()=>Ck(n,e[0],r.perm)},e)]),z_=n=>Ee({perm:n.attributes.getInts("perm",[])}),Ck=(n,e,r)=>{let t=e.dims;r=M_(t,r);let o=Ek(t,r),i=t.length,a=`
      ${Dk("perm",r,i)}
      float process(int indices[${i}]) {
        int a[${i}];
        perm(a, indices);
        return _A(a);
      }`;return{...R_,output:{dims:o,type:e.type,textureType:0},shaderSource:a}},M_=(n,e)=>(e&&e.length!==n.length&&(e=[...n.keys()].reverse()),e),Ek=(n,e)=>(e=M_(n,e),fe.sortBasedOnPerm(n,e)),Dk=(n,e,r)=>{let t=[];t.push(`void ${n}(out int a[${r}], int src[${r}]) {`);for(let o=0;o<r;++o)t.push(`	a[${e[o]}]=src[${o}];`);return t.push("	}"),t.join(`
`)},kk=n=>{if(!n||n.length!==1)throw new Error("Transpose requires 1 input.");if(n[0].type!=="float32"&&n[0].type!=="float64")throw new Error("input should be float tensor")}});var B_,F_,Nk,V_=j(()=>{"use strict";ta();B_=(n,e,r)=>{Nk(e);let t=r.blocksize,o=t*t,i=r.mode==="DCR"?[0,3,4,1,5,2]:[0,1,4,2,5,3],a=r.mode==="DCR"?[e[0].dims[0],t,t,e[0].dims[1]/o,e[0].dims[2],e[0].dims[3]]:[e[0].dims[0],e[0].dims[1]/o,t,t,e[0].dims[2],e[0].dims[3]],u=n.reshapeUnpacked(e[0],a),c={perm:i,cacheKey:`${i}`},[f]=Un(n,[u],c),m=[e[0].dims[0],e[0].dims[1]/o,e[0].dims[2]*t,e[0].dims[3]*t];return[n.reshapeUnpacked(f,m)]},F_=n=>{let e=n.attributes.getInt("blocksize");if(e<1)throw new Error(`blocksize must be >= 1, but got : ${e} for DepthToSpace`);let r=n.attributes.getString("mode","DCR");if(r!=="DCR"&&r!=="CRD")throw new Error(`unrecognized mode: ${r} for DepthToSpace`);return{mode:r,blocksize:e}},Nk=n=>{if(n.length!==1)throw new Error(`DepthToSpace expect 1 inputs, but got ${n.length}`);if(n[0].type==="string"||n[0].dims.length!==4)throw new TypeError("DepthToSpace input should be a 4-D numeric tensor")}});var G_,U_,Lk,j_=j(()=>{"use strict";He();G_=(n,e,r)=>{Lk(e,r);let t=fe.flattenShape(e[0].dims,r);return[n.reshapeUnpacked(e[0],t)]},U_=n=>n.attributes.getInt("axis",1),Lk=(n,e)=>{if(!n||n.length!==1)throw new Error("Flatten requires 1 input.");let r=n[0].dims.length;if(r===0)throw new Error("scalar tensor is not supported.");if(e<-r||e>r)throw new Error("Invalid axis");if(n[0].type==="string")throw new Error("string tensor is not supported.")}});var wn,Go=j(()=>{"use strict";wn=["float32","float64","int32","int16","int8","uint16","uint32","uint8"]});var W_,H_,Rk,zk,Mk,Bk,q_=j(()=>{"use strict";_t();Go();He();Re();W_=(n,e,r)=>(Bk(e,r.axis),[n.run(Mk(n,e,r),e)]),H_=n=>Ee({axis:n.attributes.getInt("axis",0)}),Rk={name:"Gather",inputNames:["A","B"],inputTypes:[0,0]},zk=(n,e,r,t)=>{let o=r[0].dims.slice(),i=r[1].dims.slice(),a=new Array(o.length+i.length-1);t=fe.normalizeAxis(t,o.length);let u=[];for(let _=0;_<a.length;_++)_<t?(a[_]=o[_],u.push(`inputIdx[${_}] = outputIdx[${_}];`)):_<t+i.length?(a[_]=i[_-t],u.push(`indexDataIdx[${_-t}] = outputIdx[${_}];`)):(a[_]=o[_-i.length+1],u.push(`inputIdx[${_-i.length+1}] = outputIdx[${_}];`));let c=a.length||1,f=o.length,m=i.length||1,y=`
      float process(int outputIdx[${c}]) {
        int inputIdx[${f}];
        int indexDataIdx[${m}];
        indexDataIdx[0] = 0;
        ${u.join(`
        `)}
        int idx = int(_B(indexDataIdx));
        inputIdx[${t}] = idx < 0 ? idx + ${o[t]} : idx;
        return _A(inputIdx);
      }`;return{...e,output:{dims:a,type:r[0].type,textureType:0},shaderSource:y}},Mk=(n,e,r)=>{let t={...Rk,cacheHint:r.cacheKey};return{...t,get:()=>zk(n,t,e,r.axis)}},Bk=(n,e)=>{if(!n||n.length!==2)throw new Error("Gather requires 2 inputs.");let r=n[0].dims.length;if(r<1)throw new Error("Invalid input shape.");if(e<-r||e>r-1)throw new Error("Invalid axis.");if(wn.indexOf(n[0].type)===-1)throw new Error("Invaid input type.");if(n[1].type!=="int32"&&n[1].type!=="int16")throw new Error("Invaid input type.")}});var Wl,K_,X_,Y_,Fk,Vk,Gk,Z_=j(()=>{"use strict";_t();He();Re();Wl=(n,e,r)=>(Gk(e,r),[n.run(Fk(e,r),e)]),K_=(n,e)=>{let r=n.attributes.getInt("transA",0)!==0,t=n.attributes.getInt("transB",0)!==0,o=n.attributes.getFloat("alpha",1),i=n.attributes.getFloat("beta",1);return Ee({transA:r,transB:t,alpha:o,beta:i,isOptionalC:e})},X_=n=>K_(n,!1),Y_=n=>K_(n,!0),Fk=(n,e)=>{let r={name:"Gemm",inputNames:n.length===3?["A","B","C"]:["A","B"],inputTypes:n.length===3?[0,0,0]:[0,0],key:e.cacheKey};return{...r,get:()=>Vk(r,n,e)}},Vk=(n,e,r)=>{let t=e[0].dims.slice(),o=e[1].dims.slice(),[i,a]=ji.getShapeOfGemmResult(t,r.transA,o,r.transB,e.length===3?e[2].dims:void 0),u=[i,a];if(!u)throw new Error("Can't use gemm on the given tensors");let c=t[t.length-1],f="";r.transA&&(c=t[0]),r.transA&&r.transB?f="value += _A_T(a) * _B_T(b);":r.transA&&!r.transB?f="value += _A_T(a) * _B(b);":!r.transA&&r.transB?f="value += _A(a) * _B_T(b);":!r.transA&&!r.transB&&(f="value += _A(a) * _B(b);");let m=u.length,y=e.length===3?`int c[${e[2].dims.length}];`:"",_=e.length===3?"bcastIndices_C(indices, c);":"",x=e.length===3?"value += beta * _C(c);":"",T=`
      float process(int indices[${m}]) {
          int a[${m}];
          int b[${m}];
          ${y}

          copyVec(indices, a);
          copyVec(indices, b);
          ${_}

          float value = 0.0;
          for (int k=0; k<${c}; ++k) {
              a[${m-1}] = k;
              b[${m-2}] = k;
              ${f}
          }

          value = value * alpha;
          ${x}
          return value;
      }`;return{...n,output:{dims:u,type:e[0].type,textureType:0},variables:[{name:"alpha",type:"float",data:r.alpha},{name:"beta",type:"float",data:r.beta}],shaderSource:T}},Gk=(n,e)=>{if(!n)throw new Error("Input is missing");if(e.isOptionalC&&(n.length<2||n.length>3))throw new Error("Invaid input shape.");if(!e.isOptionalC&&n.length!==3)throw new Error("Gemm requires 3 inputs");if(n.length===3&&n[2].dims.length!==1&&n[2].dims.length!==2)throw new Error("Invalid input shape of C");if(n[0].type!=="float32"&&n[0].type!=="float64"||n[1].type!=="float32"&&n[1].type!=="float64"||n.length===3&&n[2].type!=="float32"&&n[2].type!=="float64")throw new Error("Invalid input type.");if(n[0].type!==n[1].type||n.length===3&&n[0].type!==n[2].type)throw new Error("Input types are mismatched")}});var J_,Q_,Uk,jk,Wk,Hk,qk,e0=j(()=>{"use strict";_t();Re();J_=(n,e,r)=>(qk(e),[n.run(Wk(n,e,r),e)]),Q_=n=>{let e=n.attributes.getFloat("scale"),r=n.attributes.getFloats("bias");return Ee({scale:e,bias:r})},Uk={name:"ImageScaler",inputNames:["X"],inputTypes:[0]},jk=(n,e,r,t)=>{let o=r[0].dims.slice(),i=o.length,u=`
      ${Hk(t.bias.length)}
      float process(int indices[${i}]) {
        return _X(indices) * scale + getBias(bias, indices[1]);
      }`;return{...e,output:{dims:o,type:r[0].type,textureType:0},variables:[{name:"bias",type:"float",arrayLength:t.bias.length,data:t.bias},{name:"scale",type:"float",data:t.scale}],shaderSource:u}},Wk=(n,e,r)=>{let t={...Uk,cacheHint:r.cacheKey};return{...t,get:()=>jk(n,t,e,r)}},Hk=n=>{let e=[`float getBias(float bias[${n}], int channel) {`];for(let r=0;r<n;++r)r===0?e.push(`	if (channel == ${r}) { return bias[${r}]; }`):r===n-1?e.push(`	else { return bias[${r}]; }`):e.push(`	else if (channel == ${r}) { return bias[${r}]; }`);return e.push("	}"),e.join(`
`)},qk=n=>{if(!n||n.length!==1)throw new Error("ImageScaler requires 1 input.");if(n[0].dims.length!==4)throw new Error("Invalid input shape.");if(n[0].type!=="float32"&&n[0].type!=="float64")throw new Error("Invalid input type.")}});var r0,n0,t0,Kk,Xk,Yk,Zk,Jk,Qk,o0=j(()=>{"use strict";nt();Re();r0=(n,e,r)=>{Qk(e);let t=n.run(Xk(e[0]),e);return[n.run(Jk(n,e[0],r,t.dims),[e[0],t,e[1],e[2]])]},n0=n=>n.attributes.getFloat("epsilon",1e-5),t0={name:"InstanceNormalization_MeanAndVariance",inputNames:["X"],inputTypes:[0]},Kk=(n,e)=>{let r=e.dims.slice(),t=r[1],o=r[2]*r[3],i=[r[0],t],a=`
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
      }`;return{...n,output:{dims:i,type:e.type,textureType:4},shaderSource:a}},Xk=n=>({...t0,get:()=>Kk(t0,n)}),Yk={name:"InstanceNormalization_ComputeOutput",inputNames:["X","MeanAndVariance","Scale","B"],inputTypes:[0,4,0,0]},Zk=(n,e,r,t,o)=>{let i=ge(n.session.backend.glContext.version),[a,u]=n.calculateTextureWidthAndHeight(o,4),[c,f]=[a/4,u],m=`
      vec4 get_MeanAndVariance(int[2] mv) {
        int offset = indicesToOffset_MeanAndVariance(mv);
        vec2 coords = offsetToCoords(offset, ${c}, ${f});
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
      }`;return{...e,output:{dims:r.dims,type:r.type,textureType:0},variables:[{name:"epsilon",type:"float",data:t}],shaderSource:m}},Jk=(n,e,r,t)=>{let o={...Yk,cacheHint:`${r}`};return{...o,get:()=>Zk(n,o,e,r,t)}},Qk=n=>{if(!n||n.length!==3)throw new Error("InstanceNormalization requires 3 inputs.");let e=n[0],r=n[1],t=n[2];if(e.dims.length<3||r.dims.length!==1||t.dims.length!==1)throw new Error("Invalid input shape.");if(r.dims[0]!==e.dims[1]||t.dims[0]!==e.dims[1])throw new Error("Input shapes are mismatched.");if(e.type!=="float32"&&e.type!=="float64"||r.type!=="float32"&&r.type!=="float64"||t.type!=="float32"&&t.type!=="float64")throw new Error("Invalid input type.");if(n[0].dims.length!==4)throw new Error("Only support 4-D input shape.")}});function e4(n,e){let r=n[0].dims[1],t=n[0].dims.length,o=-Math.floor((e.size-1)/2),i=Math.ceil((e.size-1)/2),a=`float(${e.alpha}) / float(${e.size})`,u=`float(${e.bias})`,c=`float(${e.beta})`,f=`
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
    }`;return{...s0,cacheHint:e.cacheKey,output:{dims:n[0].dims,type:n[0].type,textureType:0},shaderSource:f}}function t4(n,e){return{...s0,cacheHint:e.cacheKey,get:()=>e4(n,e)}}var i0,a0,s0,r4,u0=j(()=>{"use strict";_t();Re();i0=(n,e,r)=>(r4(e),[n.run(t4(e,r),e)]),a0=n=>{let e=n.attributes.getFloat("alpha",1e-4),r=n.attributes.getFloat("beta",.75),t=n.attributes.getFloat("bias",1),o=n.attributes.getInt("size");return Ee({alpha:e,beta:r,bias:t,size:o})},s0={name:"LRN",inputNames:["X"],inputTypes:[0]};r4=n=>{if(!n||n.length!==1)throw new Error("LRN requires 1 input.");if(n[0].dims.length!==4)throw new Error('currently only support LRN for input with "NCHW" format');if(n[0].type!=="float32")throw new Error("input should be float type")}});var n4,Hl,l0,c0,d0,o4,i4,a4,s4,u4,l4,c4,d4,p0=j(()=>{"use strict";_t();He();nt();Re();n4={name:"Pad",inputNames:["A"],inputTypes:[0]},Hl=(n,e,r)=>(a4(e),[n.run({...n4,cacheHint:r.cacheKey,get:()=>i4(n,e[0],r)},e)]),l0=n=>{let e=n.attributes.getString("mode","constant"),r=n.attributes.getFloat("value",0),t=n.attributes.getInts("pads");return Ee({mode:e,value:r,pads:t})},c0=(n,e,r)=>{s4(e);let t=o4(n,e,r);return Hl(n,[e[0]],t)},d0=n=>n.attributes.getString("mode","constant"),o4=(n,e,r)=>{if(!n.session.isInitializer(e[1].dataId)||e.length>=3&&!n.session.isInitializer(e[2].dataId))throw new Error("dynamic pad attributes are not allowed");let t=Array.from(e[1].integerData),o=e.length>=3?e[2].floatData[0]:0;return Ee({mode:r,pads:t,value:o})},i4=(n,e,r)=>{let t=fe.padShape(e.dims.slice(),r.pads),o=t.length,a=`
      ${u4(n,e,r)}
      float process(int[${o}] indices) {
          return padA(indices);
      }`;return{name:"Pad",inputNames:["A"],inputTypes:[0],output:{dims:t,type:e.type,textureType:0},shaderSource:a}},a4=n=>{if(!n||n.length!==1)throw new Error("Pad requires 1 input");if(n[0].type!=="float32"&&n[0].type!=="float64")throw new Error("Invalid input type.")},s4=n=>{if(!n||n.length!==2&&n.length!==3)throw new Error("Pad requires 2 or 3 inputs");if(n[1].type!=="int32")throw new Error("Invalid input type.");if(n.length>=3&&n[2].type==="string")throw new Error("Invalid input type.")},u4=(n,e,r)=>{let t=ge(n.session.backend.glContext.version),[o,i]=n.calculateTextureWidthAndHeight(e.dims,0),a=fe.computeStrides(e.dims);switch(r.mode){case"constant":return l4(t,e.dims,a,o,i,r.pads,r.value);case"reflect":return c4(t,e.dims,a,o,i,r.pads);case"edge":return d4(t,e.dims,a,o,i,r.pads);default:throw new Error("Invalid mode")}},l4=(n,e,r,t,o,i,a)=>{let u=e.length,c="";for(let f=u-1;f>=0;--f)c+=`
        k = m[${f}] - ${i[f]};
        if (k < 0)  return constant;
        if (k >= ${e[f]}) return constant;
        offset += k * ${r[f]};
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
      `},c4=(n,e,r,t,o,i)=>{let a=e.length,u="";for(let c=a-1;c>=0;--c)u+=`
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
      `},d4=(n,e,r,t,o,i)=>{let a=e.length,u="";for(let c=a-1;c>=0;--c)u+=`
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
      `}});var h0,m0,g0,y0,b0,_0,v0,w0,x0,p4,f0,T0,na,I0,ra,f4,S0=j(()=>{"use strict";_t();He();Re();h0=(n,e,r)=>{na(e);let t={name:"AveragePool",inputNames:["X"],inputTypes:[0],cacheHint:r.cacheKey};return[n.run({...t,get:()=>g0(e,t,!1,r)},e)]},m0=n=>{let e=n.attributes.getString("auto_pad","NOTSET"),r=n.attributes.getInt("ceil_mode",0),t=n.attributes.getInt("count_include_pad",0)!==0,o=n.attributes.getInts("kernel_shape"),i=n.attributes.getInts("strides",[]),a=n.attributes.getInts("pads",[]);if(r!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");return Ee({autoPad:e,ceilMode:r,countIncludePad:t,kernelShape:o,strides:i,pads:a})},g0=(n,e,r,t)=>{let[o,i]=x0(n,t,r),a=fe.size(o.kernelShape),u="value += _X(x);",c="";o.countIncludePad?c+=`value /= float(${a});`:c+=`value /= float(${a} - pad);`;let m=`
        ${I0(n[0].dims,o,u,c,"0.0")}
      `;return{...e,output:{dims:i,type:n[0].type,textureType:0},shaderSource:m}},y0=(n,e,r)=>{na(e);let t={name:"GlobalAveragePool",inputNames:["X"],inputTypes:[0],cacheHint:`${r.countIncludePad}`};return[n.run({...t,get:()=>g0(e,t,!0,r)},e)]},b0=n=>{let e=n.attributes.getInt("count_include_pad",0)!==0;return Ee({autoPad:"",ceilMode:0,countIncludePad:e,kernelShape:[],strides:[],pads:[]})},_0=(n,e,r)=>{na(e);let t={name:"MaxPool",inputNames:["X"],inputTypes:[0],cacheHint:r.cacheKey};return[n.run({...t,get:()=>w0(e,t,!1,r)},e)]},v0=n=>{let e=n.attributes.getString("auto_pad","NOTSET"),r=n.attributes.getInt("ceil_mode",0),t=n.attributes.getInts("kernel_shape"),o=n.attributes.getInts("strides",[]),i=n.attributes.getInts("pads",[]),a=n.attributes.getInt("storage_order",0),u=n.attributes.getInts("dilations",[]);if(a!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");return Ee({autoPad:e,ceilMode:r,countIncludePad:!1,kernelShape:t,strides:o,pads:i,storageOrder:a,dilations:u})},w0=(n,e,r,t)=>{let[o,i]=x0(n,t,r),a=`
      value = max(_X(x), value);
    `,u="",f=`
      ${I0(n[0].dims,o,a,u,"-1e5")}
    `;return{...e,output:{dims:i,type:n[0].type,textureType:0},shaderSource:f}},x0=(n,e,r)=>{let t=n[0].dims.slice(),o=Object.hasOwnProperty.call(e,"dilations"),i=e.kernelShape.slice(),a=e.strides.slice(),u=o?e.dilations.slice():[],c=e.pads.slice();zn.adjustPoolAttributes(r,t,i,a,u,c);let f=zn.computePoolOutputShape(r,t,a,u,i,c,e.autoPad),m=Object.assign({},e);return o?Object.assign(m,{kernelShape:i,strides:a,pads:c,dilations:u,cacheKey:e.cacheKey}):Object.assign(m,{kernelShape:i,strides:a,pads:c,cacheKey:e.cacheKey}),[m,f]},p4={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[],cacheKey:""},f0={name:"GlobalMaxPool",inputNames:["X"],inputTypes:[0]},T0=(n,e)=>(na(e),[n.run({...f0,get:()=>w0(e,f0,!0,p4)},e)]),na=n=>{if(!n||n.length!==1)throw new Error("Pool ops requires 1 input.");if(n[0].type!=="float32"&&n[0].type!=="float64")throw new Error("Invalid input type.")},I0=(n,e,r,t,o)=>{let i=n.length;if(e.kernelShape.length<=2){let a=e.kernelShape[e.kernelShape.length-1],u=e.strides[e.strides.length-1],c=e.pads[e.pads.length/2-1],f=e.pads[e.pads.length-1],m=n[i-1],y="",_="",x="";if(c+f!==0?y=`
          for (int i = 0; i < ${a}; i++) {
            x[${i} - 1] = indices[${i} - 1] * ${u} - ${c} + i;
            if (x[${i} - 1] < 0 || x[${i} - 1] >= ${m}) {
              pad++;
              continue;
            }
            ${r}
          }`:y=`
          for (int i = 0; i < ${a}; i++) {
            x[${i} - 1] = indices[${i} - 1] * ${u} - ${c} + i;
            ${r}
          }`,e.kernelShape.length===2){let I=e.kernelShape[e.kernelShape.length-2],O=e.strides[e.strides.length-2],A=e.pads[e.pads.length/2-2],$=e.pads[e.pads.length-2],C=n[i-2];A+$!==0?_=`
            for (int j = 0; j < ${I}; j++) {
              x[${i} - 2] = indices[${i} - 2] * ${O} - ${A} + j;
              if (x[${i} - 2] < 0 || x[${i} - 2] >= ${C}) {
                pad+= ${a};
                continue;
              }
          `:_=`
            for (int j = 0; j < ${I}; j++) {
              x[${i} - 2] = indices[${i} - 2] * ${O} - ${A} + j;
            `,x=`
          }
        `}return`
        float process(int indices[${i}]) {
          int x[${i}];
          copyVec(indices, x);

          float value = ${o};
          int pad = 0;
          ${_}
          ${y}
          ${x}
          ${t}
          return value;
        }
      `}else{let a=fe.size(e.kernelShape),u=fe.computeStrides(e.kernelShape),c=u.length,f=e.pads.length,m=f4(c),y=ra(n,"inputDims"),_=ra(e.pads,"pads"),x=ra(u,"kernelStrides"),T=ra(e.strides,"strides"),I=e.pads.reduce(($,C)=>$+C),O="";return I?O=`
            if (x[j] >= inputDims[j] || x[j] < 0) {
              pad++;
              isPad = true;
              break;
            }
          }
          if (!isPad) {
            ${r}
          }`:O=`
          }
          ${r}
        `,`
        ${m}
        float process(int indices[${i}]) {
          int x[${i}];
          copyVec(indices, x);
          int offset[${c}];
          int pads[${f}];
          int inputDims[${i}];
          int kernelStrides[${c}];
          int strides[${c}];
          ${_}
          ${y}
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
              ${O}
          }
          ${t}

          return value;
        }
      `}},ra=(n,e)=>{let r="";for(let t=0;t<n.length;t++)r+=`
      ${e}[${t}] = ${n[t]};
    `;return r},f4=n=>`
  void offsetToIndices(int offset, int[${n}] strides, out int[${n}] indices) {
    if (${n} == 0) {
      return;
    }
    for (int i = 0; i < ${n} - 1; ++i) {
      indices[i] = offset / strides[i];
      offset -= indices[i] * strides[i];
    }
    indices[${n} - 1] = offset;
  }`});var jn,xn,h4,m4,$0,A0,O0,P0,C0,E0,D0,k0=j(()=>{"use strict";_t();Go();He();Re();jn=(n,e,r,t,o)=>{m4(e);let i={name:t,inputNames:["A"],inputTypes:[0]};return[n.run({...i,cacheHint:r.cacheKey,get:()=>h4(n,e,r,t,o,i)},e)]},xn=n=>{let e=n.attributes.getInts("axes",[]),r=n.attributes.getInt("keepdims",1)===1;return Ee({axes:e,keepDims:r})},h4=(n,e,r,t,o,i)=>{let a=[],u=e[0].dims.length||1,c=[],f=fe.normalizeAxes(r.axes,e[0].dims.length),m=o(e,f),y=m[1];for(let T=0;T<e[0].dims.length;T++)f.indexOf(T)>=0||f.length===0?(r.keepDims&&a.push(1),y=`
          for(int j${T} = 0; j${T} < ${e[0].dims[T]}; j${T}++) {
            inputIdx[${T}] = j${T};
            ${y}
          }`):(c.push(`inputIdx[${T}] = outputIdx[${a.length}];`),a.push(e[0].dims[T]));let x=`
      float process(int outputIdx[${a.length||1}]) {
        float value;                 // final result
        int inputIdx[${u}];      // addressing input data
        ${c.join(`
`)}
        ${m[0]}       // init ops for reduce max/min
        ${y}
        ${m[2]}       // final computation for reduce mean
        return value;
      }`;return{...i,output:{dims:a,type:e[0].type,textureType:0},shaderSource:x}},m4=n=>{if(!n||n.length!==1)throw new Error("Reduce op requires 1 input.");if(wn.indexOf(n[0].type)===-1)throw new Error("Invalid input type.")},$0=(n,e,r)=>jn(n,e,r,"ReduceSum",()=>["value = 0.0;","value += _A(inputIdx);",""]),A0=(n,e,r)=>jn(n,e,r,"ReduceMean",(o,i)=>{let a=1;for(let u=0;u<o[0].dims.length;u++)(i.indexOf(u)>=0||i.length===0)&&(a*=o[0].dims[u]);return["value = 0.0;","value += _A(inputIdx);",`value /= ${a}.;`]}),O0=(n,e,r)=>jn(n,e,r,"ReduceMax",(o,i)=>{let a=[];for(let u=0;u<o[0].dims.length;u++)(i.indexOf(u)>=0||i.length===0)&&a.push(`inputIdx[${u}] = 0;`);return[`${a.join(`
`)}
value = _A(inputIdx);`,"value = max(value, _A(inputIdx));",""]}),P0=(n,e,r)=>jn(n,e,r,"ReduceMin",(o,i)=>{let a=[];for(let u=0;u<o[0].dims.length;u++)(i.indexOf(u)>=0||i.length===0)&&a.push(`inputIdx[${u}] = 0;`);return[`${a.join(`
`)}
value = _A(inputIdx);`,"value = min(value, _A(inputIdx));",""]}),C0=(n,e,r)=>jn(n,e,r,"ReduceProd",()=>["value = 1.0;","value *= _A(inputIdx);",""]),E0=(n,e,r)=>jn(n,e,r,"ReduceLogSum",()=>["value = 0.0;","value += _A(inputIdx);","value = log(value);"]),D0=(n,e,r)=>jn(n,e,r,"ReduceLogSumSquare",()=>["float t; value = 0.0;","t = _A(inputIdx); value += t * t;",""])});var N0,L0=j(()=>{"use strict";He();N0=(n,e)=>{let r=fe.calculateReshapedDims(e[0].dims,e[1].integerData);return n.session.pack?[n.reshapePacked(e[0],r)]:[n.reshapeUnpacked(e[0],r)]}});var R0,ql,z0,M0,Uo,g4,Kl,oa,Xl=j(()=>{"use strict";_t();nt();Re();R0={name:"Upsample",inputNames:["X"],inputTypes:[0]},ql=(n,e,r)=>(Kl(e,r),[n.run({...R0,cacheHint:r.cacheKey,get:()=>g4(n,e,r)},e)]),z0=n=>Uo(n,7),M0=n=>Uo(n,9),Uo=(n,e)=>{let r=e>=10,t=n.attributes.getString("mode","nearest");if(t!=="nearest"&&t!=="linear"&&(e<11||t!=="cubic"))throw new Error(`unrecognized mode: ${t}`);let o=[];e<9&&(o=n.attributes.getFloats("scales"),oa(o,t,r));let i=n.attributes.getFloat("extrapolation_value",0),a=e>10?n.attributes.getString("coordinate_transformation_mode","half_pixel"):"asymmetric";if(["asymmetric","pytorch_half_pixel","tf_half_pixel_for_nn","align_corners","tf_crop_and_resize","half_pixel"].indexOf(a)===-1)throw new Error(`coordinate_transform_mode '${a}' is not supported`);let u=a==="tf_crop_and_resize",c=u,f=t==="nearest"&&e>=11?n.attributes.getString("nearest_mode","round_prefer_floor"):"";if(["round_prefer_floor","round_prefer_ceil","floor","ceil",""].indexOf(f)===-1)throw new Error(`nearest_mode '${f}' is not supported`);let m=n.attributes.getFloat("cubic_coeff_a",-.75),y=n.attributes.getInt("exclude_outside",0)!==0;if(y&&t!=="cubic")throw new Error("exclude_outside can be set to 1 only when mode is CUBIC.");let _=e<11?!0:t==="nearest"&&a==="asymmetric"&&f==="floor",x=0,T=0,I=0;return e>10?n.inputs.length>2?(x=1,T=2,I=3):(T=1,I=2):e===9&&(T=1),Ee({opset:e,isResize:r,mode:t,scales:o,extrapolationValue:i,coordinateTransformMode:a,useExtrapolation:c,needRoiInput:u,nearestMode:f,cubicCoefficientA:m,excludeOutside:y,useNearest2xOptimization:_,roiInputIdx:x,scalesInputIdx:T,sizesInputIdx:I})},g4=(n,e,r)=>{let t=ge(n.session.backend.glContext.version),[o,i]=n.calculateTextureWidthAndHeight(e[0].dims,0),a=e[0].dims.map((I,O)=>Math.floor(I*r.scales[O])),[u,c]=n.calculateTextureWidthAndHeight(a,0),f=a.length,m=new Array(f),y=new Array(f),_=`
      int output_pitches[${f}];
      int input_pitches[${f}];
      `;for(let I=f-1;I>=0;I--)m[I]=I===f-1?1:m[I+1]*a[I+1],y[I]=I===f-1?1:y[I+1]*e[0].dims[I+1],_+=`
        output_pitches[${I}] = ${m[I]};
        input_pitches[${I}] = ${y[I]};
        `;let x=`
      float getInputFloat(int index) {
        vec2 coords = offsetToCoords(index, ${o}, ${i});
        float value = getColorAsFloat(${t.texture2D}(X, coords));
        return value;
      }
      `,T=r.mode==="nearest"?`
    ${x}
    float process(int indices[${f}]) {
      int input_index = 0;
      int output_index = coordsToOffset(TexCoords, ${u}, ${c});

      ${_}

      int d, m;
      for (int dim = 0; dim < ${f}; ++dim) {
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
    }`:f===4?`
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
    }`;return{...R0,output:{dims:a,type:e[0].type,textureType:0},shaderSource:T,variables:[{name:"scales",type:"int",arrayLength:r.scales.length,data:r.scales.map(I=>Math.ceil(I))}]}},Kl=(n,e)=>{if(!n||e.opset<9&&n.length!==1||e.opset>=9&&e.opset<11&&n.length!==2||e.opset>=11&&n.length<2)throw new Error("invalid inputs.");if(e.scales.length>0&&n[0].dims.length!==e.scales.length)throw new Error("Invalid input shape.");if(n[0].type==="string")throw new Error("Invalid input tensor types.")},oa=(n,e,r)=>{if(r){for(let t of n)if(t<=0)throw new Error("Scale value should be greater than 0.")}else for(let t of n)if(t<1)throw new Error("Scale value should be greater than or equal to 1.");if((e==="linear"||e==="cubic")&&n.length!==2&&(n.length!==4||n[0]!==1||n[1]!==1))throw new Error(`'Linear' mode and 'Cubic' mode only support 2-D inputs ('Bilinear', 'Bicubic')         or 4-D inputs with the corresponding outermost 2 scale values being 1         in the ${r?"Resize":"Upsample"} opeartor.`)}});var Yl,Zl,B0,F0,y4,b4,_4,v4,V0=j(()=>{"use strict";nt();Re();jr();Vn();Xl();Yl={name:"Resize",inputNames:["A"],inputTypes:[2]},Zl=(n,e,r)=>(Kl(e,r),[n.run({...Yl,cacheHint:r.cacheKey,get:()=>y4(n,e,r)},e)]),B0=n=>Uo(n,10),F0=n=>Uo(n,11),y4=(n,e,r)=>{let t=ge(n.session.backend.glContext.version),[o,i]=b4(e,r);if(o.every(C=>C===1)&&r.coordinateTransformMode!=="tf_crop_and_resize")return{...Yl,output:{dims:i,type:e[0].type,textureType:2},hasMain:!0,shaderSource:`void main() {
                    vec4 v = ${t.texture2D}(X, TexCoords);
                    ${t.output} = v;
                }`};let u=i.length;if(u<2)throw new Error(`output dimension should be at least 2, but got ${u}`);let c=i[u-2],f=i[u-1],m=e[0].dims;if(u!==m.length)throw new Error(`output dimension should match input ${m.length}, but got ${u}`);let y=m[u-2],_=m[u-1],x=o[u-2],T=o[u-1],I="";if(r.mode!=="linear")throw new Error(`resize (packed) does not support mode: '${r.mode}'`);switch(r.coordinateTransformMode){case"asymmetric":I=`
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
                            ${f}.0 > 1.0 ? (fcoords.x + 0.5) / scaleWHWH.x - 0.5 : 0.0,
                            ${c}.0 > 1.0 ? (fcoords.y + 0.5) / scaleWHWH.y - 0.5 : 0.0,
                            ${f}.0 > 1.0 ? (fcoords.z + 0.5) / scaleWHWH.z - 0.5 : 0.0,
                            ${c}.0 > 1.0 ? (fcoords.w + 0.5) / scaleWHWH.w - 0.5 : 0.0
                          );
                    }
                `;break;case"align_corners":I=`
                    vec4 getSourceFracIndex(ivec4 coords) {
                        vec4 resized = vec4(${f}.0 - 1.0, ${c}.0 - 1.0, ${f}.0 - 1.0,
                            ${c}.0 - 1.0);
                        vec4 original = vec4(${_}.0 - 1.0, ${y}.0 - 1.0, ${_}.0 - 1.0,
                            ${y}.0 - 1.0);
                        vec4 new_scale = original / resized;
                        return vec4(coords) * new_scale;
                    }
                `;break;default:throw new Error(`resize (packed) does not support coordinateTransformMode:                                 '${r.coordinateTransformMode}'`)}let O=St(u),A=Wr(),$=`
            const vec2 inputWH = vec2(${y}.0, ${_}.0);
            const vec4 scaleWHWH = vec4(float(${x}), float(${T}), float(${x}), float(${T}));
            ${A}
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

                bool hasNextRow = rc.w < ${c-1};
                bool hasNextCol = rc.z < ${f-1};

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
        `;return{...Yl,output:{dims:i,type:e[0].type,textureType:2},hasMain:!0,shaderSource:$}},b4=(n,e)=>{let t=n[0].dims,o=e.scales,i;if(o.length===0){let u=n[e.scalesInputIdx];if(u&&u.size!==0){if(n[e.sizesInputIdx])throw new Error("Only one of scales or sizes must be provided as input.");o=_4(u,e.mode,e.isResize)}else{let c=n[e.sizesInputIdx];if(!c||c.size===0)throw new Error("Either scales or sizes MUST be provided as input.");i=Array.from(c.integerData),o=v4(i,t,e.mode,e.isResize)}}else if(n[e.sizesInputIdx])throw new Error("Only one of scales or sizes must be provided as input.");let a=i||t.map((u,c)=>Math.floor(u*o[c]));return[o,a]},_4=(n,e,r)=>{let t=Array.from(n.floatData);return oa(t,e,r),t},v4=(n,e,r,t)=>{let o=e.length,i=new Array(o);for(let a=0,u=o;a<u;a++)if(e[a]===0){if(n[a]!==0)throw new Error("Input dim is zero but required output dim is non-zero.");i[a]=1}else i[a]=n[a]/e[a];return oa(i,r,t),i}});var G0,w4,U0=j(()=>{"use strict";Fn();G0=(n,e)=>(w4(e),[new pt([e[0].dims.length],"int32",void 0,void 0,new Int32Array(e[0].dims))]),w4=n=>{if(!n||n.length!==1)throw new Error("Shape requires 1 input.")}});var Jl,j0,W0,H0,x4,q0,T4,I4,K0=j(()=>{"use strict";_t();Go();He();Re();Jl={name:"Slice",inputNames:["A"],inputTypes:[0]},j0=(n,e,r)=>(x4(e),[n.run({...Jl,cacheHint:r.cacheKey,get:()=>H0(n,e[0],r)},e)]),W0=n=>{let e=n.attributes.getInts("starts"),r=n.attributes.getInts("ends"),t=n.attributes.getInts("axes",[]);return Ee({starts:e,ends:r,axes:t})},H0=(n,e,r)=>{let t=r.axes.length===0?e.dims.slice(0).map((y,_)=>_):r.axes,o=fe.normalizeAxes(t,e.dims.length),i=r.starts.map((y,_)=>y>e.dims[o[_]]-1?e.dims[o[_]]:fe.normalizeAxis(y,e.dims[o[_]])),a=r.ends.map((y,_)=>y>e.dims[o[_]]-1?e.dims[o[_]]:fe.normalizeAxis(y,e.dims[o[_]])),u=e.dims.slice(),c=[];for(let y=0;y<o.length;y++)u[o[y]]=a[y]-i[y],i[y]>0&&c.push(`outputIdx[${o[y]}] += ${i[y]};`);let m=`
      float process(int outputIdx[${u.length}]) {
        ${c.join(`
      `)}
        return _A(outputIdx);
      }`;return{...Jl,output:{dims:u,type:e.type,textureType:0},shaderSource:m}},x4=n=>{if(!n||n.length!==1)throw new Error("Slice requires 1 input.");if(wn.indexOf(n[0].type)===-1)throw new Error("Invalid input type.")},q0=(n,e)=>{I4(e);let r=T4(n,e);return[n.run({...Jl,cacheHint:r.cacheKey,get:()=>H0(n,e[0],r)},[e[0]])]},T4=(n,e)=>{if(!n.session.isInitializer(e[1].dataId)||!n.session.isInitializer(e[2].dataId)||e.length>=4&&!n.session.isInitializer(e[3].dataId)||e.length>=5&&!n.session.isInitializer(e[4].dataId))throw new Error("dynamic slice attributes are not allowed");if(e.length>=5&&e[4].integerData.some(a=>a!==1))throw new Error("currently non-1 steps is not supported for Slice");let r=Array.from(e[1].integerData),t=Array.from(e[2].integerData),o=e.length>=4?Array.from(e[3].integerData):[],i=`${o};${r};${t}`;return{starts:r,ends:t,axes:o,cacheKey:i}},I4=n=>{if(!n||n.length<3||n.length>5)throw new Error("Invalid input number.");if(n[1].type!=="int32"||n[1].dims.length!==1)throw new Error("Invalid input type.");if(n[2].type!=="int32"||n[2].dims.length!==1)throw new Error("Invalid input type.");if(n.length>=4&&(n[3].type!=="int32"||n[3].dims.length!==1))throw new Error("Invalid input type.");if(n.length>=5&&(n[4].type!=="int32"||n[4].dims.length!==1))throw new Error("Invalid input type.")}});var X0,Y0,Z0,J0,Q0,ev,tv,rv,S4,$4,A4,nv,ov=j(()=>{"use strict";_t();He();nt();Re();ta();X0={name:"SoftmaxComputeMax",inputNames:["A"],inputTypes:[0]},Y0={name:"SoftmaxComputeScale",inputNames:["A","Max"],inputTypes:[0,0]},Z0={name:"SoftMax",inputNames:["A","Max","Norm"],inputTypes:[0,0,0]},J0=(n,e,r)=>{nv(e);let t=e[0].dims.slice(),o=fe.normalizeAxis(r.axis,t.length),i=fe.sizeToDimension(t,o),a=fe.sizeFromDimension(t,o);return rv(n,e,r,i,a)},Q0=n=>Ee({axis:n.attributes.getInt("axis",1)}),ev=n=>Ee({axis:n.attributes.getInt("axis",-1)}),tv=(n,e,r)=>{nv(e);let t=e[0].dims.slice(),o=fe.normalizeAxis(r.axis,t.length),i=t.length,a=o!==i-1,u=[],c=[],f=[],m;a&&(c=Array.from({length:i}).map((T,I)=>I),c[o]=i-1,c[i-1]=o,c.map(T=>u.push(t[T])),m=Ee({perm:c}),f=Un(n,e,m));let y=a?fe.sizeToDimension(u,i-1):fe.sizeToDimension(t,i-1),_=a?fe.sizeFromDimension(u,i-1):fe.sizeFromDimension(t,i-1),x=rv(n,a?f:e,r,y,_);return a?Un(n,x,m):x},rv=(n,e,r,t,o)=>{let i=S4(n,e[0],t,o,[t]),a=n.run({...X0,cacheHint:r.cacheKey,get:()=>i},e),u=$4(n,e[0],t,o,i.output.dims,[t]),c=n.run({...Y0,cacheHint:r.cacheKey,get:()=>u},[e[0],a]),f=A4(n,e[0],t,o,i.output.dims,u.output.dims);return[n.run({...Z0,cacheHint:r.cacheKey,get:()=>f},[e[0],a,c])]},S4=(n,e,r,t,o)=>{let[i,a]=n.calculateTextureWidthAndHeight(e.dims,0),u=o.length;if(r<1||t<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(o.length!==1)throw new Error("Dimensionality of the output should be 1");if(o[0]!==r)throw new Error("Shape of the output should be equal to logical row count");let c=ge(n.session.backend.glContext.version),f=`
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
      }`;return{...X0,output:{dims:o,type:e.type,textureType:0},shaderSource:f}},$4=(n,e,r,t,o,i)=>{let[a,u]=n.calculateTextureWidthAndHeight(e.dims,0),c=i.length;if(r<1||t<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(i.length!==1)throw new Error("Dimensionality of the output should be 1");if(i[0]!==r)throw new Error("Shape of the output should be equal to logical row count");if(o.length!==1)throw new Error("Dimensionality of the intermediate results should be 1");if(o[0]!==r)throw new Error("Shape of the intermediate results should be equal to logical row count");let f=ge(n.session.backend.glContext.version),m=`
      float process(int[${c}] indices) {
        int logical_row_start_offset = indices[0] * ${t};

        float norm_factor = 0.0;
        float max = _Max(indices);
        for(int i=0; i<${t}; ++i)
        {
          norm_factor += exp(getColorAsFloat(${f.texture2D}(A, offsetToCoords(logical_row_start_offset + i,
            ${a}, ${u}))) - max);
        }

        return norm_factor;
      }`;return{...Y0,output:{dims:i,type:e.type,textureType:0},shaderSource:m}},A4=(n,e,r,t,o,i)=>{let[a,u]=n.calculateTextureWidthAndHeight(e.dims,0),c=e.dims.length;if(r<1||t<1)throw new Error("Logical row count N and feature count D must be greater than or equal to 1");if(o.length!==1||i.length!==1)throw new Error("Dimensionality of the intermediate results should be 1");if(o[0]!==r||i[0]!==r)throw new Error("Shape of the intermediate results should be equal to logical row count");let f=`
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
    }`;return{...Z0,output:{dims:e.dims,type:e.type,textureType:0},shaderSource:f}},nv=n=>{if(!n||n.length!==1)throw new Error("Softmax requires 1 input.");if(n[0].type!=="float32"&&n[0].type!=="float64")throw new Error("Invalid input type")}});var iv,av,sv,O4,P4,C4,uv=j(()=>{"use strict";_t();He();Re();iv={name:"Split",inputNames:["A"],inputTypes:[0]},av=(n,e,r)=>{C4(e);let t=fe.normalizeAxis(r.axis,e[0].dims.length),o=O4(n,e,t,r),i=[];for(let a=0;a<o;++a)i.push(n.run({...iv,cacheHint:`${r.cacheKey};${a}`,get:()=>P4(n,e[0],r,t,a)},e));return i},sv=n=>{let e=n.attributes.getInt("axis",0),r=n.attributes.getInts("split",[]),t=n.outputs.length;return Ee({axis:e,split:r,numOutputs:t})},O4=(n,e,r,t)=>{let[,o]=Ro.splitShape(e[0].dims,r,t.split,t.numOutputs);return o.length},P4=(n,e,r,t,o)=>{let[i,a]=Ro.splitShape(e.dims,t,r.split,r.numOutputs),u=a[o],c=i[o],m=`
      float process(int indices[${c.length}]) {
        indices[${t}] += ${u};
        return _A(indices);
      }
    `;return{...iv,cacheHint:`${r.cacheKey}:${o}`,output:{dims:c,type:e.type,textureType:0},shaderSource:m}},C4=n=>{if(!n||n.length!==1)throw new Error("Split requires one input.");if(n[0].type!=="int8"&&n[0].type!=="uint8"&&n[0].type!=="int16"&&n[0].type!=="uint16"&&n[0].type!=="int32"&&n[0].type!=="uint32"&&n[0].type!=="float32"&&n[0].type!=="float64"&&n[0].type!=="bool")throw new Error("Invalid input type.")}});var Ql,lv,cv,E4,D4,dv=j(()=>{"use strict";He();Ql=(n,e,r)=>{E4(e);let t=fe.squeezeShape(e[0].dims,r);return[n.reshapeUnpacked(e[0],t)]},lv=(n,e)=>(D4(e),Ql(n,[e[0]],Array.from(e[1].integerData))),cv=n=>n.attributes.getInts("axes"),E4=n=>{if(!n||n.length!==1)throw new Error("Squeeze requires 1 input.");if(n[0].type==="string")throw new Error("invalid input tensor types.")},D4=n=>{if(!n||n.length!==2)throw new Error("Squeeze requires 2 inputs.");if(n[1].type!=="int32")throw new Error("Invalid input type.")}});var pv,k4,N4,fv=j(()=>{"use strict";nt();Re();pv=(n,e)=>{N4(e);let r={name:"Sum",inputNames:e.map((o,i)=>`X${i}`),inputTypes:new Array(e.length).fill(0)};return[n.run({...r,get:()=>k4(n,e,r)},e)]},k4=(n,e,r)=>{let t=ge(n.session.backend.glContext.version),o=e[0].dims.slice(),a=`
      void main() {
        vec4 result = ${e.map((u,c)=>`${t.texture2D}(X${c},TexCoords)`).join(" + ")};
        ${t.output} = result;
      }
    `;return{...r,output:{dims:o,type:e[0].type,textureType:0},hasMain:!0,shaderSource:a}},N4=n=>{if(!n||n.length===0)throw new Error("Sum requires inputs.");let e=n[0].dims.length;for(let r=1;r<n.length;r++){if(e!==n[r].dims.length)throw new Error("Input shapes are mismatched.");for(let t=0;t<e;t++)if(n[0].dims[t]!==n[r].dims[t])throw new Error("Input shapes are not matched.")}if(n[0].type!=="float32"&&n[0].type!=="float64")throw new Error("Invalid input type.");for(let r=1;r<n.length;r++)if(n[0].type!==n[r].type)throw new Error("Input types are not matched.")}});var hv,L4,R4,mv=j(()=>{"use strict";Go();Re();hv=(n,e)=>{R4(e);let r={name:"Tile",inputNames:["A"],inputTypes:[0]};return[n.run({...r,get:()=>L4(n,e,r)},e)]},L4=(n,e,r)=>{let t=e[0].dims.slice(),o=new Array(t.length),i=[];for(let c=0;c<t.length;c++)o[c]=t[c]*e[1].numberData[c],i.push(`inputIdx[${c}] = int(mod(float(outputIdx[${c}]), ${t[c]}.));`);let a=o.length,u=`
      float process(int outputIdx[${a}]) {
        int inputIdx[${a}];
        ${i.join(`
`)}
        return _A(inputIdx);
      }
    `;return{...r,output:{dims:o,type:e[0].type,textureType:0},shaderSource:u}},R4=n=>{if(!n||n.length!==2)throw new Error("Tile requires 2 input.");if(n[1].dims.length!==1)throw new Error("The second input shape must 1 dimension.");if(n[1].dims[0]!==n[0].dims.length)throw new Error("Invalid input shape.");if(wn.indexOf(n[0].type)===-1)throw new Error("Invalid input type.");if(n[1].type!=="int32"&&n[1].type!=="int16")throw new Error("Invalid repeat type.")}});var ec,gv,yv,z4,M4,bv=j(()=>{"use strict";He();ec=(n,e,r)=>{z4(e);let t=fe.unsqueezeShape(e[0].dims,r);return[n.reshapeUnpacked(e[0],t)]},gv=(n,e)=>(M4(e),ec(n,[e[0]],Array.from(e[1].integerData))),yv=n=>n.attributes.getInts("axes"),z4=n=>{if(!n||n.length!==1)throw new Error("Unsqueeze requires 1 input.");if(n[0].type==="string")throw new Error("invalid input tensor types.")},M4=n=>{if(!n||n.length!==2)throw new Error("Unsqueeze requires 2 inputs.");if(n[1].type!=="int32")throw new Error("Invalid input type.")}});var _v,vv=j(()=>{"use strict";Cb();Ub();Hb();Jb();Ji();L_();V_();j_();q_();Z_();e0();o0();u0();Qi();p0();S0();k0();L0();V0();U0();K0();ov();uv();dv();fv();mv();ta();zl();bv();Xl();_v=[["Abs","","6+",Qb],["Acos","","7+",e_],["Add","","7+",Eb],["And","","7+",Db],["Asin","","7+",t_],["Atan","","7+",r_],["AveragePool","","7+",h0,m0],["BatchNormalization","","7+",Ob,Pb],["Cast","","6+",jb,Wb],["Ceil","","6+",i_],["Clip","","6-10",Ll,n_],["Clip","","11+",o_],["Concat","","4+",Xb,Zb],["Conv","","1+",Ul,jl],["ConvTranspose","","1+",k_,N_],["Cos","","7+",a_],["Div","","7+",kb],["Dropout","","7+",Rl],["DepthToSpace","","1+",B_,F_],["Equal","","7+",Nb],["Elu","","6+",s_,u_],["Exp","","6+",l_],["Flatten","","1+",G_,U_],["Floor","","6+",c_],["FusedConv","com.microsoft","1+",Ul,jl],["Gather","","1+",W_,H_],["Gemm","","7-10",Wl,X_],["Gemm","","11+",Wl,Y_],["GlobalAveragePool","","1+",y0,b0],["GlobalMaxPool","","1+",T0],["Greater","","7+",Lb],["Identity","","1+",Rl],["ImageScaler","","1+",J_,Q_],["InstanceNormalization","","6+",r0,n0],["LeakyRelu","","6+",d_,p_],["Less","","7+",Rb],["LRN","","1+",i0,a0],["Log","","6+",f_],["MatMul","","1+",$_,A_],["MaxPool","","1+",_0,v0],["Mul","","7+",zb],["Neg","","6+",h_],["Not","","1+",m_],["Or","","7+",Mb],["Pad","","2-10",Hl,l0],["Pad","","11+",c0,d0],["Pow","","7+",Bb],["PRelu","","7+",Fb],["ReduceLogSum","","1+",E0,xn],["ReduceMax","","1+",O0,xn],["ReduceMean","","1+",A0,xn],["ReduceMin","","1+",P0,xn],["ReduceProd","","1+",C0,xn],["ReduceSum","","1-12",$0,xn],["ReduceSumSquare","","1+",D0,xn],["Relu","","6+",g_],["Reshape","","5+",N0],["Resize","","10",Zl,B0],["Resize","","11+",Zl,F0],["Shape","","1+",G0],["Sigmoid","","6+",y_],["Sin","","7+",b_],["Slice","","10+",q0],["Slice","","1-9",j0,W0],["Softmax","","1-12",J0,Q0],["Softmax","","13+",tv,ev],["Split","","2-12",av,sv],["Sqrt","","6+",__],["Squeeze","","1-12",Ql,cv],["Squeeze","","13+",lv],["Sub","","7+",Vb],["Sum","","6+",pv],["Tan","","7+",v_],["Tanh","","6+",w_],["Tile","","6+",hv],["Transpose","","1+",Un,z_],["Upsample","","7-8",ql,z0],["Upsample","","9",ql,M0],["Unsqueeze","","1-12",ec,yv],["Unsqueeze","","13+",gv],["Xor","","7+",Gb]]});function xv(n){let e={},r;for(;(r=wv.exec(n))!==null;){let t=r[3].split(",").map(o=>{let i=o.trim().split(" ");return i&&i.length===2?{type:i[0],name:i[1]}:null}).filter(o=>o!==null);e[r[2]]={params:t,body:r[4]}}for(let t in e){let o=B4.replace("__FUNC__",t),i=new RegExp(o,"gm");for(;(r=i.exec(n))!==null;){let a=r[1],u=r[2],c=r[3].split(","),f=a?`${a} ${u};`:"",m=e[t].body,y="";e[t].params.forEach((x,T)=>{x&&(y+=`${x.type} ${x.name} = ${c[T]};
`)}),m=`${y}
 ${m}`,m=m.replace("return",`${u} = `);let _=`
      ${f}
      {
        ${m}
      }
      `;n=n.replace(r[0],_)}}return n=n.replace(wv,""),n}var wv,B4,Tv=j(()=>{"use strict";wv=/@inline[\s\n\r]+(\w+)[\s\n\r]+([0-9a-zA-Z_]+)\s*\(([^)]*)\)\s*{(([^}]|[\n\r])*)}/gm,B4="(\\w+)?\\s+([_0-9a-zA-Z]+)\\s+=\\s+__FUNC__\\((.*)\\)\\s*;"});function po(n,e){let r=[],t=[],o=e!=null&&Array.isArray(e)&&e.length===0,i=e==null||o?null:F4(e,n).sort(),a=0;for(let u=0;u<n.length;++u){if(i!=null){if(i[a]===u&&n[u]!==1)throw new Error(`Can't squeeze axis ${u} since its dim '${n[u]}' is not 1`);(i[a]==null||i[a]>u)&&n[u]===1&&(r.push(n[u]),t.push(u)),i[a]<=u&&a++}n[u]!==1&&(r.push(n[u]),t.push(u))}return{newShape:r,keptDims:t}}function F4(n,e){let r=e.length;return n=n==null?e.map((t,o)=>o):[].concat(n),io(n.every(t=>t>=-r&&t<r),()=>`All values in axis param must be in range [-${r}, ${r}) but got axis ${n}`),io(n.every(V4),()=>`All values in axis param must be integers but got axis ${n}`),n.map(t=>t<0?r+t:t)}function V4(n){return n%1===0}function G4(n){if(n.length===0)return 1;let e=n[0];for(let r=1;r<n.length;r++)e*=n[r];return e}function Iv(n){let e=Math.ceil(Math.sqrt(n));return[e,Math.ceil(n/e)]}var ia,tc=j(()=>{"use strict";Bt();He();ia=class{constructor(e){this.maxTextureSize=e}computeTextureWH(e,r){let t=this.computeTexture(e,r);return r&&r.isPacked&&(t[0]/=2,t[1]/=2),r&&r.reverseWH?[t[1],t[0]]:t}computeTexture(e,r){let t=r&&r.isPacked;if(e.length===0)return t?[2,2]:[1,1];let o=this.maxTextureSize;if(r&&r.breakAxis!==void 0){let u=r.breakAxis>=e.length?1:e.slice(r.breakAxis).reduce((f,m)=>f*m),c=r.breakAxis<=0?1:e.slice(0,r.breakAxis).reduce((f,m)=>f*m);if(u>o||c>o)qe.verbose("TextureLayout",`Given width/height preferences were unattainable: shape:${e}, breakAxis:${r.breakAxis}`);else return[u,c]}let i=e.slice(0);t&&(o=o*2,i=i.map((u,c)=>c>=i.length-2?i[c]%2===0?i[c]:i[c]+1:i[c]),i.length===1&&(i=[2,i[0]])),i.length!==2&&(i=po(i).newShape);let a=G4(i);return i.length<=1&&a<=o?[1,a]:i.length===2&&i[0]<=o&&i[1]<=o?i:i.length===3&&i[0]*i[1]<=o&&i[2]<=o?[i[0]*i[1],i[2]]:i.length===3&&i[0]<=o&&i[1]*i[2]<=o?[i[0],i[1]*i[2]]:i.length===4&&i[0]*i[1]*i[2]<=o&&i[3]<=o?[i[0]*i[1]*i[2],i[3]]:i.length===4&&i[0]<=o&&i[1]*i[2]*i[3]<=o?[i[0],i[1]*i[2]*i[3]]:t?Iv(a/4).map(u=>u*2):Iv(a)}}});var aa,Sv=j(()=>{"use strict";He();an();nt();tc();jr();aa=class extends Wt{constructor(r){super(r)}getFunctions(){return{...this.offsetToCoords(),...this.coordsToOffset(),...this.toVec(),...this.valueFrom(),...this.getCommonUtilFuncs(),...this.getInputsSamplingSnippets(),...this.getOutputSamplingSnippet()}}getCustomTypes(){return{}}offsetToCoords(){let r="offsetToCoords";return{offsetToCoords:new ae(`
      vec2 ${r}(int offset, int width, int height) {
        int t = offset / width;
        int s = offset - t*width;
        vec2 coords = (vec2(s,t) + vec2(0.5,0.5)) / vec2(width, height);
        return coords;
      }
      `)}}coordsToOffset(){let r="coordsToOffset";return{coordsToOffset:new ae(`
      int ${r}(vec2 coords, int width, int height) {
        float s = coords.s * float(width);
        float t = coords.t * float(height);
        int offset = int(t) * width + int(s);
        return offset;
      }
      `)}}getOutputSamplingSnippet(){let r=this.context.outputTextureLayout;return r.isPacked?this.getPackedOutputSamplingSnippet(r):this.getUnpackedOutputSamplingSnippet(r)}getPackedOutputSamplingSnippet(r){let t=r.unpackedShape,o=[r.width,r.height],i={},a="getOutputCoords";switch(t.length){case 0:i[a]=this.getOutputScalarCoords();break;case 1:i[a]=this.getOutputPacked1DCoords(t,o);break;case 2:i[a]=this.getOutputPacked2DCoords(t,o);break;case 3:i[a]=this.getOutputPacked3DCoords(t,o);break;default:i[a]=this.getOutputPackedNDCoords(t,o)}let c=`
      void setOutput(vec4 val) {
        ${ge(this.context.glContext.version).output} = val;
      }
    `,f="floatTextureSetRGBA";return i[f]=new ae(c),i}getUnpackedOutputSamplingSnippet(r){let t=r.unpackedShape,o=[r.width,r.height],i={},a="getOutputCoords";switch(t.length){case 0:i[a]=this.getOutputScalarCoords();break;case 1:i[a]=this.getOutputUnpacked1DCoords(t,o);break;case 2:i[a]=this.getOutputUnpacked2DCoords(t,o);break;case 3:i[a]=this.getOutputUnpacked3DCoords(t,o);break;case 4:i[a]=this.getOutputUnpacked4DCoords(t,o);break;case 5:i[a]=this.getOutputUnpacked5DCoords(t,o);break;case 6:i[a]=this.getOutputUnpacked6DCoords(t,o);break;default:throw new Error(`Unsupported output dimensionality: ${t.length}`)}let c=`
        void setOutput(float val) {
          ${ge(this.context.glContext.version).output} = vec4(val, 0, 0, 0);
        }
    `,f="floatTextureSetR";return i[f]=new ae(c),i}getOutputScalarCoords(){return new ae(`
      int getOutputCoords() {
        return 0;
      }
    `)}getOutputPacked1DCoords(r,t){let o=t,i="";return o[0]===1?(i=`
          int getOutputCoords() {
            return 2 * int(TexCoords.y * ${o[1]}.0);
          }
        `,new ae(i)):o[1]===1?(i=`
          int getOutputCoords() {
            return 2 * int(TexCoords.x * ${o[0]}.0);
          }
        `,new ae(i)):(i=`
        int getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                 vec2(${o[0]}, ${o[1]}));
          return 2 * (resTexRC.y * ${o[0]} + resTexRC.x);
        }
      `,new ae(i))}getOutputPacked2DCoords(r,t){let o="";if(Rn.arraysEqual(r,t))return o=`
        ivec2 getOutputCoords() {
          return 2 * ivec2(TexCoords.xy * vec2(${t[0]}, ${t[1]}));
        }
      `,new ae(o);let i=t,a=Math.ceil(r[1]/2);return o=`
        ivec2 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${i[0]}, ${i[1]}));

          int index = resTexRC.y * ${i[0]} + resTexRC.x;

          // reverse r and c order for packed texture
          int r = imod(index, ${a}) * 2;
          int c = 2 * (index / ${a});

          return ivec2(r, c);
        }
      `,new ae(o)}getOutputPacked3DCoords(r,t){let o=[t[0],t[1]],i=Math.ceil(r[2]/2),a=i*Math.ceil(r[1]/2),u=`
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${o[0]}, ${o[1]}));
          int index = resTexRC.y * ${o[0]} + resTexRC.x;

          int b = index / ${a};
          index -= b * ${a};

          // reverse r and c order for packed texture
          int r = imod(index, ${i}) * 2;
          int c = 2 * (index / ${i});

          return ivec3(b, r, c);
        }
      `;return new ae(u)}getOutputPackedNDCoords(r,t){let o=[t[0],t[1]],i=Math.ceil(r[r.length-1]/2),a=i*Math.ceil(r[r.length-2]/2),u=a,c="",f="b, r, c";for(let y=2;y<r.length-1;y++)u*=r[r.length-y-1],c=`
      int b${y} = index / ${u};
      index -= b${y} * ${u};
    `+c,f=`b${y}, `+f;let m=`
      ivec${r.length} getOutputCoords() {
        ivec2 resTexRC = ivec2(TexCoords.xy *
                              vec2(${o[0]}, ${o[1]}));
        int index = resTexRC.y * ${o[0]} + resTexRC.x;

        ${c}

        int b = index / ${a};
        index -= b * ${a};

        // reverse r and c order for packed texture
        int r = imod(index, ${i}) * 2;
        int c = 2 * (index / ${i});

        return ivec${r.length}(${f});
      }
    `;return new ae(m)}getOutputUnpacked1DCoords(r,t){let o=`
        int getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          return resTexRC.y * ${t[0]} + resTexRC.x;
        }
      `;return new ae(o)}getOutputUnpacked2DCoords(r,t){let o=`
        ivec2 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          int r = index / ${r[1]};
          int c = index - r * ${r[1]};
          return ivec2(r, c);
        }
      `;return new ae(o)}getOutputUnpacked3DCoords(r,t){let o="",i=r.length,a=null;i<2&&(a=[]),a=new Array(i-1),a[i-2]=r[i-1];for(let f=i-3;f>=0;--f)a[f]=a[f+1]*r[f+1];let u=["r","c","d"],c=a.map((f,m)=>{let y=`int ${u[m]} = index / ${f}`,_=m===a.length-1?`int ${u[m+1]} = index - ${u[m]} * ${f}`:`index -= ${u[m]} * ${f}`;return`${y}; ${_};`}).join("");return o=`
        ivec3 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${c}
          return ivec3(r, c, d);
        }
      `,new ae(o)}getOutputUnpacked4DCoords(r,t){let o="",i=r.length,a=null;i<2&&(a=[]),a=new Array(i-1),a[i-2]=r[i-1];for(let f=i-3;f>=0;--f)a[f]=a[f+1]*r[f+1];let u=["r","c","d","d2"],c=a.map((f,m)=>{let y=`int ${u[m]} = index / ${f}`,_=m===a.length-1?`int ${u[m+1]} = index - ${u[m]} * ${f}`:`index -= ${u[m]} * ${f}`;return`${y}; ${_};`}).join("");return o=`
      ivec4 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${c}
          return ivec4(r, c, d, d2);
        }
      `,new ae(o)}getOutputUnpacked5DCoords(r,t){let o="",i=r.length,a=null;i<2&&(a=[]),a=new Array(i-1),a[i-2]=r[i-1];for(let f=i-3;f>=0;--f)a[f]=a[f+1]*r[f+1];let u=["r","c","d","d2","d3"],c=a.map((f,m)=>{let y=`int ${u[m]} = index / ${f}`,_=m===a.length-1?`int ${u[m+1]} = index - ${u[m]} * ${f}`:`index -= ${u[m]} * ${f}`;return`${y}; ${_};`}).join("");return o=`
      ivec5 getOutputCoords() {
          ivec2 resTexRC = ivec2(TexCoords.xy *
                                vec2(${t[0]}, ${t[1]}));
          int index = resTexRC.y * ${t[0]} + resTexRC.x;
          ${c}
          return ivec5(r, c, d, d2, d3);
        }
      `,new ae(o)}getOutputUnpacked6DCoords(r,t){let o="",i=r.length,a=null;i<2&&(a=[]),a=new Array(i-1),a[i-2]=r[i-1];for(let f=i-3;f>=0;--f)a[f]=a[f+1]*r[f+1];let u=["r","c","d","d2","d3","d4"],c=a.map((f,m)=>{let y=`int ${u[m]} = index / ${f}`,_=m===a.length-1?`int ${u[m+1]} = index - ${u[m]} * ${f}`:`index -= ${u[m]} * ${f}`;return`${y}; ${_};`}).join("");return o=`
     ivec6 getOutputCoords() {
         ivec2 resTexRC = ivec2(TexCoords.xy *
                               vec2(${t[0]}, ${t[1]}));
         int index = resTexRC.y * ${t[0]} + resTexRC.x;
         ${c}
         return ivec6(r, c, d, d2, d3, d4);
       }
     `,new ae(o)}getCommonUtilFuncs(){let r={},t="uvFromFlat";r[t]=new ae(`
    vec2 uvFromFlat(int texNumR, int texNumC, int index) {
      int texC = index / texNumR;
      int texR = index - texC * texNumR;
      // TODO: swap texR, texC order in following function so row is corresponding to u and column is corresponding to
      //       v.
      return (vec2(texR, texC) + halfCR) / vec2(texNumR, texNumC);
    }
    `),t="packedUVfrom1D",r[t]=new ae(`
      vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
        int texelIndex = index / 2;
        int texR = texelIndex / texNumC;
        int texC = texelIndex - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),t="packedUVfrom2D",r[t]=new ae(`
      vec2 packedUVfrom2D(int texNumR, int texNumC, int texelsInLogicalRow, int row, int col) {
        int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
        int texR = texelIndex / texNumC;
        int texC = texelIndex - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),t="packedUVfrom3D",r[t]=new ae(`
      vec2 packedUVfrom3D(int texNumR, int texNumC,
          int texelsInBatch, int texelsInLogicalRow, int b,
          int row, int col) {
        int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
        int texR = index / texNumC;
        int texC = index - texR * texNumC;
        return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
      }
      `),t="sampleTexture";let o=ge(this.context.glContext.version);return r[t]=new ae(`
        float sampleTexture(sampler2D textureSampler, vec2 uv) {
            return ${o.texture2D}(textureSampler, uv).r;
        }`),r}getInputsSamplingSnippets(){let r={},t=this.context.outputTextureLayout;return this.context.programInfo.inputNames.forEach((o,i)=>{let a=this.context.inputTextureLayouts[i],u=Wi(o);a.isPacked?r[u]=this.getPackedSamplerFromInput(u,o,a):r[u]=this.getUnpackedSamplerFromInput(u,o,a);let c=pb(o);a.unpackedShape.length<=t.unpackedShape.length&&(a.isPacked?r[c]=this.getPackedSamplerAtOutputCoords(c,a,t,o):r[c]=this.getUnpackedSamplerAtOutputCoords(c,a,t,o))}),r}getPackedSamplerAtOutputCoords(r,t,o,i){let a=t.unpackedShape,u=o.unpackedShape,f=Wi(i),m=a.length,y=u.length,_=It.getBroadcastDims(a,u),x=St(y),T=y-m,I,O=rr();m===0?I="":y<2&&_.length>=1?I="coords = 0;":I=_.map(J=>`coords.${O[J+T]} = 0;`).join(`
`);let A="";y<2&&m>0?A="coords":A=a.map((J,ie)=>`coords.${O[ie+T]}`).join(", ");let $="return outputValue;",L=fe.size(a)===1,M=fe.size(u)===1;if(m===1&&!L&&!M)$=`
        return vec4(outputValue.xy, outputValue.xy);
      `;else if(L&&!M)y===1?$=`
          return vec4(outputValue.x, outputValue.x, 0., 0.);
        `:$=`
          return vec4(outputValue.x);
        `;else if(_.length){let J=m-2,ie=m-1;_.indexOf(J)>-1&&_.indexOf(ie)>-1?$="return vec4(outputValue.x);":_.indexOf(J)>-1?$="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":_.indexOf(ie)>-1&&($="return vec4(outputValue.xx, outputValue.zz);")}let q=`
        int lastDim = coords.${O[y-1]};
        coords.${O[y-1]} = coords.${O[y-2]};
        coords.${O[y-2]} = lastDim;
      `,X=`
      vec4 ${r}() {
        ${x} coords = getOutputCoords();
        ${q}
        ${I}
        vec4 outputValue = ${f}(${A});
        ${$}
      }
    `;return new ae(X,["coordinates.getOutputCoords"])}getUnpackedSamplerAtOutputCoords(r,t,o,i){let a=[o.width,o.height],u=[t.width,t.height],c=t.unpackedShape.length,f=o.unpackedShape.length,m=t.unpackedShape,y=o.unpackedShape,_=Wi(i);if(c===f&&Rn.arraysEqual(u,a)){let L=`
          float ${r}() {
            return sampleTexture(${i}, TexCoords);
          }
        `;return new ae(L,["coordinates.sampleTexture"])}let x=St(f),T=It.getBroadcastDims(m,y),I=f-c,O,A=rr();c===0?O="":f<2&&T.length>=1?O="coords = 0;":O=T.map(L=>`coords.${A[L+I]} = 0;`).join(`
`);let $="";f<2&&c>0?$="coords":$=t.unpackedShape.map((L,R)=>`coords.${A[R+I]}`).join(", ");let C=`
        float ${r}() {
          ${x} coords = getOutputCoords();
          ${O}
          return ${_}(${$});
        }
      `;return new ae(C,["coordinates.getOutputCoords"])}getPackedSamplerFromInput(r,t,o){switch(o.unpackedShape.length){case 0:return this.getPackedSamplerScalar(r,t);case 1:return this.getPackedSampler1D(r,t,o);case 2:return this.getPackedSampler2D(r,t,o);case 3:return this.getPackedSampler3D(r,t,o);default:return this.getPackedSamplerND(r,t,o)}}getUnpackedSamplerFromInput(r,t,o){let i=o.unpackedShape;switch(i.length){case 0:return this.getUnpackedSamplerScalar(r,t,o);case 1:return this.getUnpackedSampler1D(r,t,o);case 2:return this.getUnpackedSampler2D(r,t,o);case 3:return this.getUnpackedSampler3D(r,t,o);case 4:return this.getUnpackedSampler4D(r,t,o);case 5:return this.getUnpackedSampler5D(r,t,o);case 6:return this.getUnpackedSampler6D(r,t,o);default:throw new Error(`Unsupported dimension ${i.length}-D`)}}getPackedSamplerScalar(r,t){let o=ge(this.context.glContext.version),i=`
          vec4 ${r}() {
            return ${o.texture2D}(${t}, halfCR);
          }
        `;return new ae(i)}getPackedSampler1D(r,t,o){let i=[o.width,o.height],a=[i[1],i[0]],u=ge(this.context.glContext.version),f=`vec4 ${r}(int index) {
      vec2 uv = packedUVfrom1D(
      ${a[0]}, ${a[1]}, index);
      return ${u.texture2D}(${t}, uv);
    }`;return new ae(f,["coordinates.packedUVfrom1D"])}getPackedSampler2D(r,t,o){let i=o.unpackedShape,a=[o.width,o.height],u=ge(this.context.glContext.version),c=a[0],f=a[1];if(a!=null&&Rn.arraysEqual(i,a)){let T=`vec4 ${r}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${f}.0, ${c}.0);
        return ${u.texture2D}(${t}, uv);
      }`;return new ae(T)}let m=a,y=Math.ceil(i[1]/2),x=`vec4 ${r}(int row, int col) {
      vec2 uv = packedUVfrom2D(${m[1]}, ${m[0]}, ${y}, row, col);
      return ${u.texture2D}(${t}, uv);
    }`;return new ae(x,["coordinates.packedUVfrom2D"])}getPackedSampler3D(r,t,o){let i=o.unpackedShape,a=[o.width,o.height],u=[a[0],a[1]],c=ge(this.context.glContext.version);if(i[0]===1){let I=i.slice(1),O=[1,2],A=ao(i,I),$=["b","row","col"],C=JSON.parse(JSON.stringify(o));C.unpackedShape=A;let L=this.getPackedSamplerFromInput(r,t,C),M=`${L.routineBody}
      vec4 ${r}(int b, int row, int col) {
        return ${r}(${so($,O)});
      } `;return new ae(M,L.dependencies)}let f=u[0],m=u[1],y=Math.ceil(i[2]/2),_=y*Math.ceil(i[1]/2),T=`vec4 ${r}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${m}, ${f}, ${_}, ${y}, b, row, col);
      return ${c.texture2D}(${t}, uv);}`;return new ae(T,["coordinates.packedUVfrom3D"])}getPackedSamplerND(r,t,o){let i=o.unpackedShape,a=i.length,u=[o.width,o.height],c=ge(this.context.glContext.version),f=[u[0],u[1]],m=f[1],y=f[0],_=Math.ceil(i[a-1]/2),x=_*Math.ceil(i[a-2]/2),T="int b, int row, int col",I=`b * ${x} + (row / 2) * ${_} + (col / 2)`;for(let $=2;$<a-1;$++)T=`int b${$}, `+T,x*=i[a-$-1],I=`b${$} * ${x} + `+I;let A=`vec4 ${r}(${T}) {
      int index = ${I};
      int texR = index / ${y};
      int texC = index - texR * ${y};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${y}, ${m});
      return ${c.texture2D}(${t}, uv);
    }`;return new ae(A)}getUnpackedSamplerScalar(r,t,o){let[i,a]=[o.width,o.height];if(i===1&&a===1){let c=`
          float ${r}() {
            return sampleTexture(${t}, halfCR);
          }
        `;return new ae(c,["coordinates.sampleTexture"])}let u=`
        float ${r}() {
          int offset_${t} = coordsToOffset(TexCoords, ${i}, ${a});
          vec2 uv = uvFromFlat(${i}, ${a}, offset_${t});
          return sampleTexture(${t}, uv);
        }
      `;return new ae(u,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler1D(r,t,o){let i=o.width,a=o.height;if(a===1&&i===1){let c=`
        float ${r}(int index) {
          return sampleTexture(${t}, halfCR);
        }
      `;return new ae(c,["coordinates.sampleTexture"])}if(a===1){let c=`
          float ${r}(int index) {
            vec2 uv = vec2((float(index) + 0.5) / ${i}.0, 0.5);
            return sampleTexture(${t}, uv);
          }
        `;return new ae(c,["coordinates.sampleTexture"])}if(i===1){let c=`
          float ${r}(int index) {
            vec2 uv = vec2(0.5, (float(index) + 0.5) / ${a}.0);
            return sampleTexture(${t}, uv);
          }
        `;return new ae(c,["coordinates.sampleTexture"])}let u=`
        float ${r}(int index) {
          vec2 uv = uvFromFlat(${i}, ${a}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new ae(u,["coordinates.uvFromFlat","coordinates.sampleTexture"])}getUnpackedSampler2D(r,t,o){let i=o.unpackedShape,a=[o.height,o.width];if(a!=null&&Rn.arraysEqual(i,a)){let x=a[1],T=a[0],I=`
          float ${r}(int row, int col) {
            vec2 uv = (vec2(row, col) + halfCR) / vec2(${x}.0, ${T}.0);
            return sampleTexture(${t}, uv);
          }
        `;return new ae(I,["coordinates.sampleTexture"])}let{newShape:u,keptDims:c}=po(i),f=u;if(f.length<i.length){let x=ao(i,f),T=JSON.parse(JSON.stringify(o));T.unpackedShape=x;let I=["col","row"],O=`
          ${this.getUnpackedSamplerFromInput(r,t,T).routineBody}
          float ${r}(int row, int col) {
            return ${r}(${so(I,c)});
          }
        `;return new ae(O,["coordinates.sampleTexture"])}let m=a[1],y=a[0];if(y===1){let x=`
          float ${r}(int row, int col) {
            int offset_${t} = coordsToOffset(TexCoords, ${m}, ${y});
            float index = dot(vec3(row, col, offset_${t}), vec3(${i[1]}, 1, 1));
            vec2 uv = vec2(0.5, (index + 0.5) / ${m}.0);
            return sampleTexture(${t}, uv);
          }
        `;return new ae(x,["coordinates.sampleTexture","coordinates.coordsToOffset"])}if(m===1){let x=`
          float ${r}(int row, int col) {
            int offset_${t} = coordsToOffset(TexCoords, ${m}, ${y});
            float index = dot(vec3(row, col, offset_${t}), vec3(${i[1]}, 1, 1));
            vec2 uv = vec2((index + 0.5) / ${y}.0, 0.5);
            return sampleTexture(${t}, uv);
          }
        `;return new ae(x,["coordinates.sampleTexture","coordinates.coordsToOffset"])}let _=`
        float ${r}(int row, int col) {
          int index = col * ${i[1]} + row;
          vec2 uv = uvFromFlat(${m}, ${y}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new ae(_,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler3D(r,t,o){let i=o.unpackedShape,a=i[1]*i[2],u=i[2],{newShape:c,keptDims:f}=po(i),m=c;if(m.length<i.length){let T=ao(i,m),I=["batch","col","row"],O=JSON.parse(JSON.stringify(o));O.unpackedShape=T;let A=this.getUnpackedSamplerFromInput(r,t,O),$=f.reverse(),C=`
          ${A.routineBody}
          float ${r}(int batch, int row, int col) {
            return ${r}(${so(I,$)});
          }
        `;return new ae(C,A.dependencies)}let y=o.width,_=o.height,x=`
          float ${r}(int depth, int row, int col) {
            // Explicitly use integer operations as dot() only works on floats.
            int index = depth * ${a} + col * ${u} + row;
            vec2 uv = uvFromFlat(${y}, ${_}, index);
            return sampleTexture(${t}, uv);
          }
      `;return new ae(x,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}getUnpackedSampler4D(r,t,o){let i=o.unpackedShape,a=i[3],u=i[2]*a,c=i[1]*u,f=o.width,m=o.height,y=`
        float ${r}(int row, int col, int depth, int depth2) {
          int index = row * ${c} + col * ${u} +
              depth2 * ${a} + depth;
          vec2 uv = uvFromFlat(${f}, ${m}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new ae(y,["coordinates.uvFromFlat","coordinates.sampleTexture"])}getUnpackedSampler5D(r,t,o){let i=o.unpackedShape,a=i[4],u=i[3]*a,c=i[2]*u,f=i[1]*c,{newShape:m,keptDims:y}=po(i);if(m.length<i.length){let I=ao(i,m),O=["row","col","depth","depth2","depth3"],A=JSON.parse(JSON.stringify(o));A.unpackedShape=I;let $=`
          ${this.getUnpackedSamplerFromInput(r,t,A).routineBody}
          float ${r}(int row, int col, int depth, int depth2, int depth3) {
            return ${r}(${so(O,y)});
          }
        `;return new ae($,["coordinates.sampleTexture","coordinates.uvFromFlat"])}let _=o.width,x=o.height,T=`
        float ${r}(int row, int col, int depth, int depth2, int depth3) {
          int index = row * ${f} + col * ${c} + depth * ${u} +
          depth3 * ${a} + depth2;
          vec2 uv = uvFromFlat(${_}, ${x}, index);
          return sampleTexture(${t}, uv);
        }
      `;return new ae(T,["coordinates.sampleTexture","coordinates.uvFromFlat"])}getUnpackedSampler6D(r,t,o){let i=o.unpackedShape,a=i[5],u=i[4]*a,c=i[3]*u,f=i[2]*c,m=i[1]*f,{newShape:y,keptDims:_}=po(i);if(y.length<i.length){let O=ao(i,y),A=["row","col","depth","depth2","depth3","depth4"],$=JSON.parse(JSON.stringify(o));$.unpackedShape=O;let C=`
            ${this.getUnpackedSamplerFromInput(r,t,$).routineBody}
            float ${r}(int row, int col, int depth,
              int depth2, int depth3, int depth4) {
              return ${r}(${so(A,_)});
            }
          `;return new ae(C,["coordinates.sampleTexture","coordinates.uvFromFlat"])}let x=o.width,T=o.height,I=`
          float ${r}(int row, int col, int depth,
            int depth2, int depth3, int depth4) {
            int index = row * ${m} + col * ${f} + depth * ${c} +
            depth2 * ${u} + depth3 * ${a} + depth4;
            vec2 uv = uvFromFlat(${x}, ${T}, index);
            return sampleTexture(${t}, uv);
          }
        `;return new ae(I,["coordinates.uvFromFlat","coordinates.sampleTexture","coordinates.coordsToOffset"])}toVec(){let r=this.context.outputTextureLayout,t=r.shape.length,o=r.strides,i=r.width,a=r.height,u=[];for(let f=0;f<t-1;++f)u.push(`
        c[${f}] = offset / ${o[f]};`),u.push(`
        offset -= c[${f}] * ${o[f]};`);u.push(`
        c[${t-1}] = offset;`);let c=`
      void toVec(vec2 texCoords, out int c[${t}]) {
        int offset = coordsToOffset(texCoords, ${i}, ${a});
        ${u.join("")}
      }
      void toVec(int offset, out int c[${t}]) {
        ${u.join("")}
      }
    `;return{toVec:new ae(c,["coordinates.coordsToOffset"])}}valueFrom(){let r={};return this.context.programInfo.inputNames.forEach((t,o)=>{let i=this.context.inputTextureLayouts[o],u=(i.unpackedShape.length>0?i.unpackedShape:i.shape).length,c=`_${t}`;r[c]=new ae(this.getValueFromSingle(t,u,i.width,i.height,!1),[`shapeUtils.indicesToOffset${c}`,"coordinates.offsetToCoords","fragcolor.getColorAsFloat"]),c=c+"_T",r[c]=new ae(this.getValueFromSingle(t,u,i.width,i.height,!0),[`shapeUtils.indicesToOffset${c}`,"coordinates.offsetToCoords","fragcolor.getColorAsFloat"])}),r}getValueFromSingle(r,t,o,i,a){let u=`_${r}`;a&&(u=u+"_T");let c=ge(this.context.glContext.version);return`
        float ${u}(int m[${t}]) {
          int offset = indicesToOffset${u}(m);
          vec2 coords = offsetToCoords(offset, ${o}, ${i});
          float value = getColorAsFloat(${c.texture2D}(${r}, coords));
          return value;
        }
        `}getPackedValueFrom(r,t,o,i,a){let u=`_${r}_Pack`;a&&(u=u+"_T");let c=ge(this.context.glContext.version);return`
        vec4 ${u}(int m[${t}]) {
          int offset = indicesToOffset_${r}(m);
          vec2 coords = offsetToCoords(offset, ${o}, ${i});
          return ${c.texture2D}(${r}, coords);
        }
        `}}});var sa,$v=j(()=>{"use strict";an();sa=class n extends Wt{constructor(e){super(e)}getFunctions(){return{...this.encodeFloat32(),...this.decodeFloat32()}}getCustomTypes(){return{}}encodeFloat32(){return{encode:new ae(`highp vec4 encode(highp float f) {
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
        `)}}static isLittleEndian(){let e=new ArrayBuffer(4),r=new Uint32Array(e),t=new Uint8Array(e);if(r[0]=3735928559,t[0]===239)return!0;if(t[0]===222)return!1;throw new Error("unknown endianness")}}});var ua,Av=j(()=>{"use strict";an();nt();ua=class extends Wt{constructor(e){super(e)}getFunctions(){return{...this.setFragColor(),...this.getColorAsFloat()}}getCustomTypes(){return{}}setFragColor(){let e=ge(this.context.glContext.version);return{setFragColor:new ae(`
        void setFragColor(float value) {
            ${e.output} = encode(value);
        }
        `,["encoding.encode"])}}getColorAsFloat(){return{getColorAsFloat:new ae(`
        float getColorAsFloat(vec4 color) {
            return decode(color);
        }
        `,["encoding.decode"])}}}});var la,Ov=j(()=>{"use strict";an();la=class n extends Wt{constructor(e){super(e)}getFunctions(){return{...this.bcastIndex(),...this.bcastMatmulIndex(),...this.offsetToIndices(),...this.indicesToOffset(),...this.incrementIndices()}}getCustomTypes(){return{}}bcastIndex(){let e=this.context.outputTextureLayout.shape.length,r={};return this.context.programInfo.inputNames.forEach((t,o)=>{let i=this.context.inputTextureLayouts[o].unpackedShape;if(i.length<=e){let a=i.length,u=e-a,c=`bcastIndices_${t}`,f="";for(let y=0;y<a;++y)f+=`
          realIndices[${y}] = int( mod(float(bcastedIndices[${u+y}]), ${i[y]}.0) );
          `;let m=`
        void ${c} (int bcastedIndices[${e}], out int realIndices[${a}]) {
          ${f}
        }
        `;r[c]=new ae(m)}}),r}bcastMatmulIndex(){let e=this.context.outputTextureLayout.shape.length,r={};return this.context.programInfo.inputNames.forEach((t,o)=>{let i=this.context.inputTextureLayouts[o].shape;if(!(i.length<2||i.length>e)){let a=i.length,u=e-a,c=`bcastMatmulIndices_${t}`,f="";for(let y=0;y<a-2;++y)f+=`
          realIndices[${y}] = int( mod(float(bcastedIndices[${u+y}]), ${i[y]}.0) );
          `;let m=`
        void ${c}(int bcastedIndices[${e}], out int realIndices[${a}]) {
          ${f}
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
      `}incrementIndices(){let e={};return this.context.programInfo.inputNames.forEach((r,t)=>{let o=this.context.inputTextureLayouts[t].shape,i=o.length,a=`incrementIndices_${r}`,u="";for(let f=0;f<i;++f)u+=`
        shape[${f}] = ${o[f]};`;let c=`
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
        `;e[a]=new ae(c)}),e}}});var ca,Pv=j(()=>{"use strict";an();ca=class extends Wt{constructor(e){super(e)}getCustomTypes(){return{}}getFunctions(){return{...this.binaryVecFunctions(),...this.copyVec(),...this.setVecItem(),...this.getVecItem()}}binaryVecFunctions(){let r=this.context.outputTextureLayout.shape.length,t={add:"+=",sub:"-=",mul:"*=",div:"/="},o={};for(let i in t){let a=`${i}Vec`,u="";for(let f=0;f<r;++f)u+=`
          dest[${f}] ${t[i]} src[${f}];
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
    `;return{getVecItem:new ae(o)}}}});var rc,Cv=j(()=>{"use strict";Sv();$v();Av();Ov();Pv();rc={encoding:sa,fragcolor:ua,vec:ca,shapeUtils:la,coordinates:aa}});var da,Ev=j(()=>{"use strict";an();Tv();Cv();nt();da=class{constructor(e,r,t,o){this.libs={};this.glslLibRoutineDependencyGraph={};this.context=new Xi(e,r,t,o),Object.keys(rc).forEach(a=>{let u=new rc[a](this.context);this.libs[a]=u});let i=this.glslLibRoutineDependencyGraph;for(let a in this.libs){let c=this.libs[a].getFunctions();for(let f in c){let m=a+"."+f,y;i[m]?(y=i[m],y.routineBody=c[f].routineBody):(y=new Vo(m,c[f].routineBody),i[m]=y);let _=c[f].dependencies;if(_)for(let x=0;x<_.length;++x)if(i[_[x]])y.addDependency(i[_[x]]);else{let T=new Vo(_[x]);i[_[x]]=T,y.addDependency(T)}}}}preprocess(){let e=this.context.programInfo,r=e.shaderSource;return this.context.programInfo.hasMain||(r=`${r}
      ${db(this.context.glContext.version,this.context.outputTextureLayout.shape.length)}`),r=xv(r),`${cb(this.context.glContext.version)}
    ${this.getUniforms(e.inputNames,e.variables)}
    ${this.getImports(r)}
    ${r}`}getImports(e){let r=this.selectGlslLibRoutinesToBeIncluded(e);if(r.length===0)return"";let t="";for(let o=0;o<r.length;++o)if(r[o].routineBody)t+=r[o].routineBody+`
`;else throw new Error(`Missing body for the Glsl Library routine: ${r[o].name}`);return t}selectGlslLibRoutinesToBeIncluded(e){let r=[];return Object.keys(this.glslLibRoutineDependencyGraph).forEach(t=>{let o=t.split(".")[1];e.indexOf(o)!==-1&&r.push(this.glslLibRoutineDependencyGraph[t])}),Yi.returnOrderedNodes(r)}getUniforms(e,r){let t=[];if(e)for(let o of e)t.push(`uniform sampler2D ${o};`);if(r)for(let o of r)t.push(`uniform ${o.type} ${o.name}${o.arrayLength?`[${o.arrayLength}]`:""};`);return t.join(`
`)}}});var pa,Dv=j(()=>{"use strict";xt();Bt();Ev();nt();pa=class{constructor(e,r,t){this.profiler=e;this.glContext=r;this.textureLayoutStrategy=t;this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,r){this.repo.set(e,r)}run(e,r,t){this.profiler.event("op",`ProgramManager.run ${e.programInfo.name??"unknown kernel"}`,()=>{let o=this.glContext.gl,i=e.program;o.useProgram(i);try{this.bindOutput(t),this.attributesBound||this.bindAttributes(e.attribLocations),this.bindUniforms(e.uniformLocations,e.programInfo.variables??[],r)}catch(a){throw qe.error("ProgramManager",e.programInfo.shaderSource),a}this.profiler.event("backend","GlContext.draw()",()=>{this.glContext.draw()})},this.glContext)}dispose(){this.vertexShader&&this.glContext.deleteShader(this.vertexShader),this.repo.forEach(e=>this.glContext.deleteProgram(e.program))}build(e,r,t){return this.profiler.event("backend","ProgramManager.build",()=>{let o=new da(this.glContext,e,r,t),i=o.preprocess(),a=this.compile(i);return{programInfo:e,program:a,uniformLocations:this.getUniformLocations(a,o.context.programInfo.inputNames,o.context.programInfo.variables),attribLocations:this.getAttribLocations(a)}})}compile(e){if(!this.vertexShader){qe.verbose("ProrgramManager","Compiling and caching Vertex shader for the first time");let o=lb(this.glContext.version);this.vertexShader=this.glContext.compileShader(o,this.glContext.gl.VERTEX_SHADER)}Te.debug&&qe.verbose("ProrgramManager",`FragShader:
${e}
`);let r=this.glContext.compileShader(e,this.glContext.gl.FRAGMENT_SHADER),t=this.glContext.createProgram(this.vertexShader,r);return this.glContext.deleteShader(r),t}bindOutput(e){let r=e.width,t=e.height;qe.verbose("ProrgramManager",`Binding output texture to Framebuffer: w/h=${r}/${t}, shape=${e.shape}, type=${e.tensor.type}`),this.glContext.attachFramebuffer(e.texture,r,t)}bindAttributes(e){let r=e.position,t=e.textureCoord;this.glContext.setVertexAttributes(r,t),this.attributesBound=!0}bindUniforms(e,r,t){let o=this.glContext.gl,i=0;for(let{name:a,type:u,location:c,arrayLength:f}of e){let m=r.find(y=>y.name===a)?.data;if(u!=="sampler2D"&&!m)throw new Error(`variable '${a}' does not have data defined in program info`);switch(u){case"sampler2D":this.bindTexture(t[i],c,i),i++;break;case"float":f?o.uniform1fv(c,m):o.uniform1f(c,m);break;case"int":f?o.uniform1iv(c,m):o.uniform1i(c,m);break;default:throw new Error(`Uniform not implemented: ${u}`)}}}bindTexture(e,r,t){this.glContext.bindTextureToUniform(e.texture,t,r)}getAttribLocations(e){return{position:this.getAttribLocation(e,"position"),textureCoord:this.getAttribLocation(e,"textureCoord")}}getUniformLocations(e,r,t){let o=[];if(r)for(let i of r)o.push({name:i,type:"sampler2D",location:this.getUniformLocation(e,i)});if(t)for(let i of t)o.push({...i,location:this.getUniformLocation(e,i.name)});return o}getUniformLocation(e,r){let o=this.glContext.gl.getUniformLocation(e,r);if(o===null)throw new Error(`Uniform ${r} not found.`);return o}getAttribLocation(e,r){return this.glContext.gl.getAttribLocation(e,r)}}});var fa,kv=j(()=>{"use strict";Bt();Bo();fa=class{constructor(e,r,t,o){this.glContext=e;this.layoutStrategy=r;this.profiler=t;this.config=o;this.pendingRead=new Map;o.reuseTextures&&(this.inUseTextures=new Map,this.idleTextures=new Map,this.textureLookup=new Map)}createTextureFromLayout(e,r,t,o){let i=this.toEncoderType(e),a=this.glContext.getEncoder(i,r.channels||1,o);if(r.isPacked&&o===1)throw new Error("not implemented");let u=r.width,c=r.height,f,m;if(this.config.reuseTextures){f=`${u}x${c}_${a.format}_${a.internalFormat}_${a.textureType}`,m=this.inUseTextures.get(f),m||(m=[],this.inUseTextures.set(f,m));let _=this.idleTextures.get(f);if(_&&_.length>0){let x=_.pop();return m.push(x),o===1&&this.glContext.updateTexture(x,u,c,a,this.toTextureData(e,t)),x}}qe.verbose("TextureManager",`Creating new texture of size ${r.width}x${r.height}`);let y=this.glContext.allocateTexture(u,c,a,this.toTextureData(e,t));return this.config.reuseTextures&&(m.push(y),this.textureLookup.set(y,f)),y}readTexture(e,r,t){return t||(t=1),this.profiler.event("backend","TextureManager.readTexture",()=>{let o=e.shape.reduce((a,u)=>a*u)*t,i=this.glContext.readTexture(e.texture,e.width,e.height,o,this.toEncoderType(r),t);return this.toTensorData(r,i)})}async readTextureAsync(e,r,t){let o=e.tensor.dataId;if(t||(t=1),this.pendingRead.has(o)){let i=this.pendingRead.get(o);return new Promise(a=>i?.push(a))}return this.profiler.event("backend","TextureManager.readTextureAsync",async()=>{this.pendingRead.set(o,[]);let i=e.shape.reduce((f,m)=>f*m)*t;await this.glContext.createAndWaitForFence();let a=this.glContext.readTexture(e.texture,e.width,e.height,i,this.toEncoderType(r),t),u=this.toTensorData(r,a),c=this.pendingRead.get(o);return this.pendingRead.delete(o),c?.forEach(f=>f(u)),u})}readUint8TextureAsFloat(e){return this.profiler.event("backend","TextureManager.readUint8TextureAsFloat",()=>{let r=e.shape.reduce((o,i)=>o*i),t=this.glContext.readTexture(e.texture,e.width,e.height,r*4,"byte",4);return new Float32Array(t.buffer,t.byteOffset,r)})}releaseTexture(e,r){let t;if(this.config.reuseTextures&&(t=this.textureLookup.get(e.texture),t)){r&&this.textureLookup.delete(t);let o=this.inUseTextures.get(t);if(o){let i=o.indexOf(e.texture);if(i!==-1){o.splice(i,1);let a=this.idleTextures.get(t);a||(a=[],this.idleTextures.set(t,a)),a.push(e.texture)}}}(!t||r)&&(qe.verbose("TextureManager",`Deleting texture of size ${e.width}x${e.height}`),this.glContext.deleteTexture(e.texture))}toTensorData(e,r){switch(e){case"int16":return r instanceof Int16Array?r:Int16Array.from(r);case"int32":return r instanceof Int32Array?r:Int32Array.from(r);case"int8":return r instanceof Int8Array?r:Int8Array.from(r);case"uint16":return r instanceof Uint16Array?r:Uint16Array.from(r);case"uint32":return r instanceof Uint32Array?r:Uint32Array.from(r);case"uint8":case"bool":return r instanceof Uint8Array?r:Uint8Array.from(r);case"float32":return r instanceof Float32Array?r:Float32Array.from(r);case"float64":return r instanceof Float64Array?r:Float64Array.from(r);default:throw new Error(`TensorData type ${e} is not supported`)}}toTextureData(e,r){if(r)return r instanceof Float32Array?r:new Float32Array(r)}toEncoderType(e){return"float"}clearActiveTextures(){this.glContext.clearActiveTextures()}}});var ha,Nv=j(()=>{"use strict";Bt();Tg();$b();vv();Dv();tc();kv();ha=class{constructor(e,r){this.backend=e;this.context=r;this.layoutStrategy=new ia(e.glContext.maxTextureSize),this.programManager=new pa(this.context.profiler,e.glContext,this.layoutStrategy),this.textureManager=new fa(e.glContext,this.layoutStrategy,this.context.profiler,{reuseTextures:e.textureCacheMode==="full"}),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache=new Map,this.pack=e.pack,this.pack2unpackMap=new Map,this.unpack2packMap=new Map}createInferenceHandler(){return new Ki(this)}onGraphInitialized(e){let r=e.getValues().filter(t=>t.from===-1&&t.tensor).map(t=>t.tensor.dataId);this.initializers=new Set(r)}isInitializer(e){return this.initializers?this.initializers.has(e):!1}addInitializer(e){this.initializers.add(e)}getTextureData(e,r){return r?this.packedTextureDataCache.get(e):this.unpackedTextureDataCache.get(e)}setTextureData(e,r,t=!1){qe.verbose("WebGLSessionHandler","Storing Texture data in cache"),t?this.packedTextureDataCache.set(e,r):this.unpackedTextureDataCache.set(e,r)}dispose(){this.programManager.dispose(),this.textureManager.clearActiveTextures(),this.packedTextureDataCache.forEach(e=>this.textureManager.releaseTexture(e,!0)),this.packedTextureDataCache=new Map,this.unpackedTextureDataCache.forEach(e=>this.textureManager.releaseTexture(e,!0)),this.unpackedTextureDataCache=new Map}resolve(e,r,t){let o=xg(e,r,_v);return{impl:o.opImpl,context:o.opInit?o.opInit(e,t):e}}}});function U4(n){let e=0;for(;e<n.length&&n[e]();++e);return e-1}var jo,Lv=j(()=>{"use strict";xt();Bo();Bo();jr();jo=class{constructor(e,r){this.frameBufferBound=!1;this.itemsToPoll=[];this.gl=e,this.version=r,this.getExtensions(),this.vertexbuffer=this.createVertexbuffer(),this.framebuffer=this.createFramebuffer(),this.queryVitalParameters()}allocateTexture(e,r,t,o){let i=this.gl,a=i.createTexture();i.bindTexture(i.TEXTURE_2D,a),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE);let u=o?t.encode(o,e*r):null;return i.texImage2D(i.TEXTURE_2D,0,t.internalFormat,e,r,0,t.format,t.textureType,u),this.checkError(),a}updateTexture(e,r,t,o,i){let a=this.gl;a.bindTexture(a.TEXTURE_2D,e);let u=o.encode(i,r*t);a.texSubImage2D(a.TEXTURE_2D,0,0,0,r,t,o.format,o.textureType,u),this.checkError()}attachFramebuffer(e,r,t){let o=this.gl;o.bindTexture(o.TEXTURE_2D,e),o.bindFramebuffer(o.FRAMEBUFFER,this.framebuffer),o.framebufferTexture2D(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,e,0),this.checkError(),o.viewport(0,0,r,t),o.scissor(0,0,r,t)}readTexture(e,r,t,o,i,a){let u=this.gl;a||(a=1),this.frameBufferBound||this.attachFramebuffer(e,r,t);let c=this.getEncoder(i,a),f=c.allocate(r*t);return u.bindTexture(u.TEXTURE_2D,e),u.framebufferTexture2D(u.FRAMEBUFFER,u.COLOR_ATTACHMENT0,u.TEXTURE_2D,e,0),u.readPixels(0,0,r,t,u.RGBA,c.textureType,f),this.checkError(),c.decode(f,o)}isFramebufferReady(){return!0}getActiveTexture(){let e=this.gl;return`TEXTURE${e.getParameter(this.gl.ACTIVE_TEXTURE)-e.TEXTURE0}`}getTextureBinding(){return this.gl.getParameter(this.gl.TEXTURE_BINDING_2D)}getFramebufferBinding(){return this.gl.getParameter(this.gl.FRAMEBUFFER_BINDING)}setVertexAttributes(e,r){let t=this.gl;t.vertexAttribPointer(e,3,t.FLOAT,!1,20,0),t.enableVertexAttribArray(e),r!==-1&&(t.vertexAttribPointer(r,2,t.FLOAT,!1,20,12),t.enableVertexAttribArray(r)),this.checkError()}createProgram(e,r){let t=this.gl,o=t.createProgram();return t.attachShader(o,e),t.attachShader(o,r),t.linkProgram(o),o}compileShader(e,r){let t=this.gl,o=t.createShader(r);if(!o)throw new Error(`createShader() returned null with type ${r}`);if(t.shaderSource(o,e),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)===!1)throw new Error(`Failed to compile shader: ${t.getShaderInfoLog(o)}
Shader source:
${e}`);return o}deleteShader(e){this.gl.deleteShader(e)}bindTextureToUniform(e,r,t){let o=this.gl;o.activeTexture(o.TEXTURE0+r),this.checkError(),o.bindTexture(o.TEXTURE_2D,e),this.checkError(),o.uniform1i(t,r),this.checkError()}draw(){this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,4),this.checkError()}checkError(){if(Te.debug){let e=this.gl,r=e.getError(),t="";switch(r){case e.NO_ERROR:return;case e.INVALID_ENUM:t="INVALID_ENUM";break;case e.INVALID_VALUE:t="INVALID_VALUE";break;case e.INVALID_OPERATION:t="INVALID_OPERATION";break;case e.INVALID_FRAMEBUFFER_OPERATION:t="INVALID_FRAMEBUFFER_OPERATION";break;case e.OUT_OF_MEMORY:t="OUT_OF_MEMORY";break;case e.CONTEXT_LOST_WEBGL:t="CONTEXT_LOST_WEBGL";break;default:t=`Unknown WebGL Error: ${r.toString(16)}`}throw new Error(t)}}deleteTexture(e){this.gl.deleteTexture(e)}deleteProgram(e){this.gl.deleteProgram(e)}getEncoder(e,r,t=0){if(this.version===2)return new Hi(this.gl,r);switch(e){case"float":return t===1||this.isRenderFloat32Supported?new Mo(this.gl,r):new Mo(this.gl,r,this.textureHalfFloatExtension.HALF_FLOAT_OES);case"int":throw new Error("not implemented");case"byte":return new qi(this.gl,r);default:throw new Error(`Invalid dataType: ${e}`)}}clearActiveTextures(){let e=this.gl;for(let r=0;r<this.maxTextureImageUnits;++r)e.activeTexture(e.TEXTURE0+r),e.bindTexture(e.TEXTURE_2D,null)}dispose(){if(this.disposed)return;let e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(this.framebuffer),e.bindBuffer(e.ARRAY_BUFFER,null),e.deleteBuffer(this.vertexbuffer),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),e.finish(),this.disposed=!0}createDefaultGeometry(){return new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0])}createVertexbuffer(){let e=this.gl,r=e.createBuffer();if(!r)throw new Error("createBuffer() returned null");let t=this.createDefaultGeometry();return e.bindBuffer(e.ARRAY_BUFFER,r),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),this.checkError(),r}createFramebuffer(){let e=this.gl.createFramebuffer();if(!e)throw new Error("createFramebuffer returned null");return e}queryVitalParameters(){let e=this.gl;if(this.isFloatTextureAttachableToFrameBuffer=this.checkFloatTextureAttachableToFrameBuffer(),this.isRenderFloat32Supported=this.checkRenderFloat32(),this.isFloat32DownloadSupported=this.checkFloat32Download(),this.version===1&&!this.textureHalfFloatExtension&&!this.isRenderFloat32Supported)throw new Error("both float32 and float16 TextureType are not supported");this.isBlendSupported=!this.isRenderFloat32Supported||this.checkFloat32Blend(),this.maxTextureSize=e.getParameter(e.MAX_TEXTURE_SIZE),this.maxTextureImageUnits=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),this.version}getExtensions(){this.version===2?(this.colorBufferFloatExtension=this.gl.getExtension("EXT_color_buffer_float"),this.disjointTimerQueryWebgl2Extension=this.gl.getExtension("EXT_disjoint_timer_query_webgl2")):(this.textureFloatExtension=this.gl.getExtension("OES_texture_float"),this.textureHalfFloatExtension=this.gl.getExtension("OES_texture_half_float"))}checkFloatTextureAttachableToFrameBuffer(){let e=this.gl,r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r);let t=this.version===2?e.RGBA32F:e.RGBA;e.texImage2D(e.TEXTURE_2D,0,t,1,1,0,e.RGBA,e.FLOAT,null);let o=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);let i=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(o),i}checkRenderFloat32(){if(this.version===2){if(!this.colorBufferFloatExtension)return!1}else if(!this.textureFloatExtension)return!1;return this.isFloatTextureAttachableToFrameBuffer}checkFloat32Download(){if(this.version===2){if(!this.colorBufferFloatExtension)return!1}else if(!this.textureFloatExtension||!this.gl.getExtension("WEBGL_color_buffer_float"))return!1;return this.isFloatTextureAttachableToFrameBuffer}checkFloat32Blend(){let e=this.gl,r,t,o,i,a;try{r=e.createTexture(),t=e.createFramebuffer(),e.bindTexture(e.TEXTURE_2D,r);let u=this.version===2?e.RGBA32F:e.RGBA;return e.texImage2D(e.TEXTURE_2D,0,u,1,1,0,e.RGBA,e.FLOAT,null),e.bindFramebuffer(e.FRAMEBUFFER,t),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.enable(e.BLEND),o=e.createShader(e.VERTEX_SHADER),!o||(e.shaderSource(o,"void main(){}"),e.compileShader(o),i=e.createShader(e.FRAGMENT_SHADER),!i)||(e.shaderSource(i,"precision highp float;void main(){gl_FragColor=vec4(0.5);}"),e.compileShader(i),a=e.createProgram(),!a)?!1:(e.attachShader(a,o),e.attachShader(a,i),e.linkProgram(a),e.useProgram(a),e.drawArrays(e.POINTS,0,1),e.getError()===e.NO_ERROR)}finally{e.disable(e.BLEND),a&&e.deleteProgram(a),o&&e.deleteShader(o),i&&e.deleteShader(i),t&&(e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteFramebuffer(t)),r&&(e.bindTexture(e.TEXTURE_2D,null),e.deleteTexture(r))}}beginTimer(){if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let e=this.gl,r=this.disjointTimerQueryWebgl2Extension,t=e.createQuery();return e.beginQuery(r.TIME_ELAPSED_EXT,t),t}else throw new Error("WebGL1 profiling currently not supported.")}endTimer(){if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let e=this.gl,r=this.disjointTimerQueryWebgl2Extension;e.endQuery(r.TIME_ELAPSED_EXT);return}else throw new Error("WebGL1 profiling currently not supported")}isTimerResultAvailable(e){let r=!1,t=!1;if(this.version===2&&this.disjointTimerQueryWebgl2Extension){let o=this.gl,i=this.disjointTimerQueryWebgl2Extension;r=o.getQueryParameter(e,o.QUERY_RESULT_AVAILABLE),t=o.getParameter(i.GPU_DISJOINT_EXT)}else throw new Error("WebGL1 profiling currently not supported");return r&&!t}getTimerResult(e){let r=0;if(this.version===2){let t=this.gl;r=t.getQueryParameter(e,t.QUERY_RESULT),t.deleteQuery(e)}else throw new Error("WebGL1 profiling currently not supported");return r/1e6}async waitForQueryAndGetTime(e){return await Al(()=>this.isTimerResultAvailable(e)),this.getTimerResult(e)}async createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let r,t=e,o=t.fenceSync(t.SYNC_GPU_COMMANDS_COMPLETE,0);return e.flush(),o===null?r=()=>!0:r=()=>{let i=t.clientWaitSync(o,0,0);return i===t.ALREADY_SIGNALED||i===t.CONDITION_SATISFIED},{query:o,isFencePassed:r}}async pollFence(e){return new Promise(r=>{this.addItemToPoll(()=>e.isFencePassed(),()=>r())})}pollItems(){let e=U4(this.itemsToPoll.map(r=>r.isDoneFn));for(let r=0;r<=e;++r){let{resolveFn:t}=this.itemsToPoll[r];t()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}async addItemToPoll(e,r){this.itemsToPoll.push({isDoneFn:e,resolveFn:r}),!(this.itemsToPoll.length>1)&&await Al(()=>(this.pollItems(),this.itemsToPoll.length===0))}}});function nc(n){let e;if((!n||n==="webgl2")&&"webgl2"in fo?e=fo.webgl2:(!n||n==="webgl")&&"webgl"in fo&&(e=fo.webgl),!e)try{let t=W4();e=Rv(t,n)}catch{let o=j4();e=Rv(o,n)}n=n||e.version===1?"webgl":"webgl2";let r=e.gl;return fo[n]=e,r.isContextLost()?(delete fo[n],nc(n)):(r.disable(r.DEPTH_TEST),r.disable(r.STENCIL_TEST),r.disable(r.BLEND),r.disable(r.DITHER),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SAMPLE_COVERAGE),r.enable(r.SCISSOR_TEST),r.enable(r.CULL_FACE),r.cullFace(r.BACK),e)}function Rv(n,e){let r={alpha:!1,depth:!1,antialias:!1,stencil:!1,preserveDrawingBuffer:!1,premultipliedAlpha:!1,failIfMajorPerformanceCaveat:!1},t,o=r;if((!e||e==="webgl2")&&(t=n.getContext("webgl2",o),t))try{return new jo(t,2)}catch(i){qe.warning("GlContextFactory",`failed to create WebGLContext using contextId 'webgl2'. Error: ${i}`)}if((!e||e==="webgl")&&(t=n.getContext("webgl",o)||n.getContext("experimental-webgl",o),t))try{return new jo(t,1)}catch(i){qe.warning("GlContextFactory",`failed to create WebGLContext using contextId 'webgl' or 'experimental-webgl'. Error: ${i}`)}throw new Error("WebGL is not supported")}function j4(){if(typeof document>"u")throw new TypeError("failed to create canvas: document is not supported");let n=document.createElement("canvas");return n.width=1,n.height=1,n}function W4(){if(typeof OffscreenCanvas>"u")throw new TypeError("failed to create offscreen canvas: OffscreenCanvas is not supported");return new OffscreenCanvas(1,1)}var fo,zv=j(()=>{"use strict";Bt();Lv();fo={}});var ma,Mv=j(()=>{"use strict";xt();Bt();Nv();zv();ma=class{get contextId(){return Te.webgl.contextId}set contextId(e){Te.webgl.contextId=e}get matmulMaxBatchSize(){return Te.webgl.matmulMaxBatchSize}set matmulMaxBatchSize(e){Te.webgl.matmulMaxBatchSize=e}get textureCacheMode(){return Te.webgl.textureCacheMode}set textureCacheMode(e){Te.webgl.textureCacheMode=e}get pack(){return Te.webgl.pack}set pack(e){Te.webgl.pack=e}get async(){return Te.webgl.async}set async(e){Te.webgl.async=e}initialize(){try{return this.glContext=nc(this.contextId),typeof this.matmulMaxBatchSize!="number"&&(this.matmulMaxBatchSize=16),typeof this.textureCacheMode!="string"&&(this.textureCacheMode="full"),typeof this.pack!="boolean"&&(this.pack=!1),typeof this.async!="boolean"&&(this.async=!1),qe.setWithEnv(Te),Te.webgl.context||Object.defineProperty(Te.webgl,"context",{value:this.glContext.gl}),qe.verbose("WebGLBackend",`Created WebGLContext: ${typeof this.glContext} with matmulMaxBatchSize: ${this.matmulMaxBatchSize}; textureCacheMode: ${this.textureCacheMode}; pack: ${this.pack}; async: ${this.async}.`),!0}catch(e){return qe.warning("WebGLBackend",`Unable to initialize WebGLBackend. ${e}`),!1}}createSessionHandler(e){return new ha(this,e)}dispose(){this.glContext.dispose()}}});async function oc(n){if(n){let e=typeof n=="string"?[n]:n;for(let r of e){let t=Bv.get(r);if(t)return t;let o=await q4(r);if(o)return o}}else return oc(["webgl"]);throw new Error("no available backend to use")}async function q4(n){let e=H4;if(typeof e[n]<"u"&&K4(e[n])){let r=e[n],t=r.initialize();if(typeof t=="object"&&"then"in t&&(t=await t),t)return Bv.set(n,r),r}}function K4(n){let e=n;return"initialize"in e&&typeof e.initialize=="function"&&"createSessionHandler"in e&&typeof e.createSessionHandler=="function"&&"dispose"in e&&typeof e.dispose=="function"}var Bv,H4,Fv=j(()=>{"use strict";Mv();Bv=new Map,H4={webgl:new ma}});var ic,ga,Vv=j(()=>{"use strict";Bt();ic=class{constructor(e,r){this.op=e;this.node=r}},ga=class{constructor(e,r,t){this.graph=e;this.profiler=t;this.initialize(r)}initialize(e){this.profiler.event("session","ExecutionPlan.initialize",()=>{let r=this.graph.getNodes();if(r.length!==e.length)throw new Error("The size of nodes and OPs do not match.");this._ops=e.map((t,o)=>new ic(t,r[o])),this.reset(),this._starter=[],this._ops.forEach((t,o)=>{let i=!0;for(let a of t.node.inputs)if(!this._values[a]&&this.graph.getInputIndices().indexOf(a)===-1){i=!1;break}i&&this._starter.push(o)})})}reset(){this._values=this.graph.getValues().map(e=>e.tensor)}async execute(e,r){return this.profiler.event("session","ExecutionPlan.execute",async()=>{this.reset();let t=e.createInferenceHandler(),o=this.graph.getInputIndices();if(r.length!==o.length)throw new Error(`number of input tensors don't match the number of inputs to the model: actual: ${r.length} expected: ${o.length}`);r.forEach((m,y)=>{let _=o[y];this._values[_]=m});let i=this._starter.slice(0),a=this.graph.getValues(),u=this.graph.getNodes(),c=0;for(;c<i.length;){let m=i[c++],y=this._ops[m],_=y.node.inputs.map(O=>this._values[O]);if(_.indexOf(void 0)!==-1)throw new Error(`unresolved input detected: op: ${y.node}`);let x=_;qe.verbose("ExecPlan",`Running op:${y.node.name} (${x.map((O,A)=>`'${y.node.inputs[A]}': ${O.type}[${O.dims.join(",")}]`).join(", ")})`);let T=await this.profiler.event("node",y.node.name,async()=>y.op.impl(t,x,y.op.context));if(T.length!==y.node.outputs.length)throw new Error("the size of output does not match model definition.");T.forEach((O,A)=>{let $=y.node.outputs[A];if(this._values[$])throw new Error(`output [${$}] already has value: op:${y.node.name}`);this._values[$]=O});let I=new Set;T.forEach((O,A)=>{let $=y.node.outputs[A];for(let C of a[$].to){let L=u[C],R=!0;for(let M of L.inputs)if(!this._values[M]){R=!1;break}R&&I.add(C)}}),i.push(...I)}let f=[];for(let m=0;m<this.graph.getOutputIndices().length;m++){let y=this.graph.getOutputIndices()[m],_=this._values[y];if(_===void 0)throw new Error(`required output [${y}] does not have value`);y===0?await _.getData():_.data,f.push(_)}return qe.verbose("ExecPlan","disposing of inferenceHandler"),t.dispose(),f})}}});var Ne,Wo,Gv=j(()=>{"use strict";Do();Ne=Pe(oo());Fn();He();Wo=class n{constructor(e){if(this._attributes=new Map,e!=null){for(let r of e)r instanceof Ne.onnx.AttributeProto?this._attributes.set(r.name,[n.getValue(r),n.getType(r)]):r instanceof Mi.Attribute&&this._attributes.set(r.name(),[n.getValue(r),n.getType(r)]);if(this._attributes.size<e.length)throw new Error("duplicated attribute names")}}set(e,r,t){this._attributes.set(e,[t,r])}delete(e){this._attributes.delete(e)}getFloat(e,r){return this.get(e,"float",r)}getInt(e,r){return this.get(e,"int",r)}getString(e,r){return this.get(e,"string",r)}getTensor(e,r){return this.get(e,"tensor",r)}getFloats(e,r){return this.get(e,"floats",r)}getInts(e,r){return this.get(e,"ints",r)}getStrings(e,r){return this.get(e,"strings",r)}getTensors(e,r){return this.get(e,"tensors",r)}get(e,r,t){let o=this._attributes.get(e);if(o===void 0){if(t!==void 0)return t;throw new Error(`required attribute not found: ${e}`)}if(o[1]!==r)throw new Error(`type mismatch: expected ${r} but got ${o[1]}`);return o[0]}static getType(e){let r=e instanceof Ne.onnx.AttributeProto?e.type:e.type();switch(r){case Ne.onnx.AttributeProto.AttributeType.FLOAT:return"float";case Ne.onnx.AttributeProto.AttributeType.INT:return"int";case Ne.onnx.AttributeProto.AttributeType.STRING:return"string";case Ne.onnx.AttributeProto.AttributeType.TENSOR:return"tensor";case Ne.onnx.AttributeProto.AttributeType.FLOATS:return"floats";case Ne.onnx.AttributeProto.AttributeType.INTS:return"ints";case Ne.onnx.AttributeProto.AttributeType.STRINGS:return"strings";case Ne.onnx.AttributeProto.AttributeType.TENSORS:return"tensors";default:throw new Error(`attribute type is not supported yet: ${Ne.onnx.AttributeProto.AttributeType[r]}`)}}static getValue(e){let r=e instanceof Ne.onnx.AttributeProto?e.type:e.type();if(r===Ne.onnx.AttributeProto.AttributeType.GRAPH||r===Ne.onnx.AttributeProto.AttributeType.GRAPHS)throw new Error("graph attribute is not supported yet");let t=this.getValueNoCheck(e);if(r===Ne.onnx.AttributeProto.AttributeType.INT&&Ct.isLong(t))return Ct.longToNumber(t);if(r===Ne.onnx.AttributeProto.AttributeType.INTS){let o=t,i=new Array(o.length);for(let a=0;a<o.length;a++){let u=o[a];i[a]=Ct.longToNumber(u)}return i}if(r===Ne.onnx.AttributeProto.AttributeType.TENSOR)return e instanceof Ne.onnx.AttributeProto?pt.fromProto(t):pt.fromOrtTensor(t);if(r===Ne.onnx.AttributeProto.AttributeType.TENSORS){if(e instanceof Ne.onnx.AttributeProto)return t.map(i=>pt.fromProto(i));if(e instanceof Mi.Attribute)return t.map(i=>pt.fromOrtTensor(i))}return r===Ne.onnx.AttributeProto.AttributeType.STRING&&e instanceof Ne.onnx.AttributeProto?zo(t):r===Ne.onnx.AttributeProto.AttributeType.STRINGS&&e instanceof Ne.onnx.AttributeProto?t.map(zo):t}static getValueNoCheck(e){return e instanceof Ne.onnx.AttributeProto?this.getValueNoCheckFromOnnxFormat(e):this.getValueNoCheckFromOrtFormat(e)}static getValueNoCheckFromOnnxFormat(e){switch(e.type){case Ne.onnx.AttributeProto.AttributeType.FLOAT:return e.f;case Ne.onnx.AttributeProto.AttributeType.INT:return e.i;case Ne.onnx.AttributeProto.AttributeType.STRING:return e.s;case Ne.onnx.AttributeProto.AttributeType.TENSOR:return e.t;case Ne.onnx.AttributeProto.AttributeType.GRAPH:return e.g;case Ne.onnx.AttributeProto.AttributeType.FLOATS:return e.floats;case Ne.onnx.AttributeProto.AttributeType.INTS:return e.ints;case Ne.onnx.AttributeProto.AttributeType.STRINGS:return e.strings;case Ne.onnx.AttributeProto.AttributeType.TENSORS:return e.tensors;case Ne.onnx.AttributeProto.AttributeType.GRAPHS:return e.graphs;default:throw new Error(`unsupported attribute type: ${Ne.onnx.AttributeProto.AttributeType[e.type]}`)}}static getValueNoCheckFromOrtFormat(e){switch(e.type()){case Ut.AttributeType.FLOAT:return e.f();case Ut.AttributeType.INT:return e.i();case Ut.AttributeType.STRING:return e.s();case Ut.AttributeType.TENSOR:return e.t();case Ut.AttributeType.GRAPH:return e.g();case Ut.AttributeType.FLOATS:return e.floatsArray();case Ut.AttributeType.INTS:{let r=[];for(let t=0;t<e.intsLength();t++)r.push(e.ints(t));return r}case Ut.AttributeType.STRINGS:{let r=[];for(let t=0;t<e.stringsLength();t++)r.push(e.strings(t));return r}case Ut.AttributeType.TENSORS:{let r=[];for(let t=0;t<e.tensorsLength();t++)r.push(e.tensors(t));return r}default:throw new Error(`unsupported attribute type: ${Ut.AttributeType[e.type()]}`)}}}});var sc,uc,qr,ya,ac,Uv=j(()=>{"use strict";Gv();Do();sc=Pe(oo());Fn();He();uc={from:(n,e)=>new ac(n,e)},qr=class{constructor(e){this._from=void 0,this._to=[],this.tensor=void 0,this.type=void 0,e&&(this.type=wt.tensorValueTypeFromProto(e.type.tensorType))}get from(){return this._from}get to(){return this._to}},ya=class{constructor(e,r){e instanceof sc.onnx.NodeProto?(this.name=e.name,this.opType=e.opType,this.attributes=new Wo(e.attribute)):e instanceof ll.Node&&(this.name=r??e.name(),this.opType=e.opType(),this.attributes=new Wo(wt.tensorAttributesFromORTFormat(e))),this.inputs=[],this.outputs=[],this.executeNode=!0}},ac=class{constructor(e,r){if(!e)throw new TypeError("graph is empty");this.buildGraph(e),this.transformGraph(r),this.checkIsAcyclic()}getInputIndices(){return this._allInputIndices}getInputNames(){return this._allInputNames}getOutputIndices(){return this._allOutputIndices}getOutputNames(){return this._allOutputNames}getValues(){return this._allData}getNodes(){return this._nodes}buildGraph(e){if(e instanceof sc.onnx.GraphProto)this.buildGraphFromOnnxFormat(e);else if(e instanceof sl.Graph)this.buildGraphFromOrtFormat(e);else throw new TypeError("Graph type is not supported.")}buildGraphFromOnnxFormat(e){let r=new Map;this._allData=[],this._allInputIndices=[],this._allInputNames=[],this._allOutputIndices=[],this._allOutputNames=[],this._nodes=[];let t=new Map;if(!e.input)throw new Error("missing information in graph: input");let o=[];for(let i of e.input){if(r.has(i.name))throw new Error(`duplicated input name: ${i.name}`);let a=this._allData.push(new qr(i))-1;r.set(i.name,a),o.push(i.name)}if(!e.initializer)throw new Error("missing information in graph: initializer");for(let i of e.initializer){let a=r.get(i.name);if(a===void 0){let u=new qr;u.type={shape:{dims:wt.tensorDimsFromProto(i.dims)},tensorType:wt.tensorDataTypeFromProto(i.dataType)},a=this._allData.push(u)-1,r.set(i.name,a)}this._allData[a]._from=-1,this._allData[a].tensor=pt.fromProto(i)}for(let i=0;i<this._allData.length;i++)this._allData[i].tensor||(this._allInputIndices.push(i),this._allInputNames.push(o[i]));if(!e.output)throw new Error("missing information in graph: output");for(let i of e.output){if(r.has(i.name))throw new Error(`duplicated output name: ${i.name}`);let a=this._allData.push(new qr(i))-1;r.set(i.name,a),this._allOutputIndices.push(a),this._allOutputNames.push(i.name)}if(!e.node)throw new Error("missing information in graph: node");for(let i of e.node){if(!i.name)for(let u=0;;u++){let c=`unnamed_${i.opType}_${u}`;if(!t.has(c)){i.name=c;break}}if(t.has(i.name))throw new Error(`duplicated node name: ${i.name}`);let a=this._nodes.push(new ya(i))-1;t.set(i.name,a)}for(let i=0;i<this._nodes.length;i++){let a=this._nodes[i],u=e.node[i];if(!u.output)throw new Error(`missing output for node: ${u.name}`);for(let c of u.output){let f=r.get(c);if(typeof f>"u"&&(f=this._allData.push(new qr)-1,r.set(c,f)),a.outputs.push(f),this._allData[f]._from!==void 0)throw new Error(`multiple nodes output to one data value: ${f}`);if(this._allData[f]._from=i,u.opType==="Constant"){if(!u.attribute||u.attribute.length!==1||!u.attribute[0].t)throw new Error("missing attributes or missing tensor value in attributes for this Constant operator");if(!u.output||u.output.length!==1)throw new Error("missing output or incorrect number of outputs for this Constant operator");a.outputs.pop(),a.executeNode=!1,this._allData[f]._from=-1,this._allData[f].tensor=pt.fromProto(u.attribute[0].t)}}}for(let i=0;i<this._nodes.length;i++){let a=this._nodes[i],u=e.node[i];if(!u.input)throw new Error(`missing input for node: ${u.name}`);for(let c of u.input){let f=r.get(c);if(typeof f>"u"){if(c===""&&(u.input.length===3||u.input.length===4)&&u.opType==="Resize")continue;throw new Error(`unrecognized input '${c}' for node: ${u.name}`)}a.inputs.push(f),this._allData[f]._to.push(i)}}return!0}buildGraphFromOrtFormat(e){let r=new Map;this._allData=[],this._allInputIndices=[],this._allInputNames=[],this._allOutputIndices=[],this._allOutputNames=[],this._nodes=[];let t=new Map,o=[];for(let i=0;i<e.inputsLength();i++){let a=e.inputs(i);if(r.has(a))throw new Error(`duplicated input name: ${a}`);for(let u=0;u<e.nodeArgsLength();u++)if(e.nodeArgs(u)?.name()===a){let c=new qr;if(e.nodeArgs(u)?.type()?.valueType()!==dl.TypeInfoValue.tensor_type)throw new Error("Unexpected value type for the nodeArg.");let m=e.nodeArgs(u).type().value(new cl.TensorTypeAndShape),y=wt.tensorDataTypeFromProto(m.elemType()),_=m.shape(),x=[];for(let I=0;I<_.dimLength();I++)x.push(Ct.longToNumber(_.dim(I).value().dimValue()));c.type={shape:{dims:x},tensorType:y};let T=this._allData.push(c)-1;r.set(a,T),o.push(a)}}for(let i=0;i<e.initializersLength();i++){let a=e.initializers(i),u=r.get(a.name());if(u===void 0){let c=new qr,f=wt.tensorDimsFromORTFormat(a),m=wt.tensorDataTypeFromProto(a.dataType());c.type={shape:{dims:f},tensorType:m},u=this._allData.push(c)-1,r.set(a.name(),u)}this._allData[u]._from=-1,this._allData[u].tensor=pt.fromOrtTensor(a)}for(let i=0;i<this._allData.length;i++)this._allData[i].tensor||(this._allInputIndices.push(i),this._allInputNames.push(o[i]));for(let i=0;i<e.outputsLength();i++){let a=e.outputs(i);if(r.has(a))throw new Error(`duplicated output name: ${a}`);let u=this._allData.push(new qr)-1;r.set(a,u),this._allOutputIndices.push(u),this._allOutputNames.push(a)}if(!e.nodes)throw new Error("missing information in graph: node");for(let i=0;i<e.nodesLength();i++){let a=e.nodes(i),u=a.name();if(!u)for(let f=0;u=`unnamed_${a.opType()}_${f}`,!!t.has(u);f++);if(t.has(u))throw new Error(`duplicated node name: ${u}`);let c=this._nodes.push(new ya(a,u))-1;t.set(u,c)}for(let i=0;i<this._nodes.length;i++){let a=this._nodes[i],u=e.nodes(i);if(u==null)throw new Error(`No node exists at index ${i}`);if(u?.outputsLength()===0)throw new Error(`missing output for node: ${u.name}`);for(let c=0;c<u?.outputsLength();c++){let f=u?.outputs(c),m=r.get(f);if(typeof m>"u"&&(m=this._allData.push(new qr)-1,r.set(f,m)),a.outputs.push(m),this._allData[m]._from!==void 0)throw new Error(`multiple nodes output to one data value: ${m}`);if(this._allData[m]._from=i,u.opType()==="Constant"){if(u.attributesLength()!==1||!u.attributes(0).t())throw new Error("missing attributes or missing tensor value in attributes for this Constant operator");if(u.outputsLength()!==1)throw new Error("missing output or incorrect number of outputs for this Constant operator");a.outputs.pop(),a.executeNode=!1,this._allData[m]._from=-1,this._allData[m].tensor=pt.fromOrtTensor(u.attributes(0).t())}}}for(let i=0;i<this._nodes.length;i++){let a=this._nodes[i],u=e.nodes(i);if(u.inputsLength()===0)throw new Error(`missing input for node: ${u.name}`);for(let c=0;c<u.inputsLength();c++){let f=u.inputs(c),m=r.get(f);if(typeof m>"u")throw new Error(`unrecognized input '${f}' for node: ${u.name()}`);a.inputs.push(m),this._allData[m]._to.push(i)}}}checkIsAcyclic(){let e=new Set;this._allInputIndices.forEach(o=>{this._allData[o]._to.forEach(a=>{e.add(a)})});let r=Array.from(e),t=new Array(this._nodes.length).fill("white");for(;r.length>0;){let o=r.pop();t[o]==="gray"?t[o]="black":(r.push(o),t[o]="gray",this._nodes[o].outputs.forEach(i=>{let a=this._allData[i];if(typeof a.tensor<"u")throw new Error("node outputs should not be initialized");if(a._from!==o)throw new Error("from property of the Value object doesn't match index of Node being processed");a._to.forEach(u=>{if(t[u]==="gray")throw new Error("model graph is cyclic");t[u]==="white"&&r.push(u)})}))}}transformGraph(e){this.removeAllIdentityNodes(),this.removeAllDropoutNodes(),this.fuseConvActivationNodes(),e&&e.transformGraph(this),this.finalizeGraph()}finalizeGraph(){let e=0,r=new Array(this._nodes.length,0),t=0;for(let o=0;o<this._nodes.length;o++)r[o]=t,this._nodes[o].executeNode?(t!==o&&(this._nodes[t]=this._nodes[o]),t++):this._nodes[o].outputs.forEach(i=>{this._allData[i]._from=-2});this._nodes.splice(t,this._nodes.length-t);for(let o=0;o<this._allData.length;o++){let i=this._allData[o];i._from!==void 0&&i._from!==-1&&i._from!==-2&&(i._from=r[i._from]);for(let a=0;a<i._to.length;a++)if(i._to[a]>=0)i._to[a]=r[i._to[a]];else throw new Error("Trying to update a removed node")}e=0;for(let o=0;o<this._allData.length;o++){if(this._allData[o].from===-2&&this._allOutputIndices.indexOf(o+e)===-1){e++,this._allData.splice(o,1),o--;continue}if(e>0){let i=-1;this._allData[o].from!==void 0&&this._allData[o].from!==-1?(i=this._nodes[this._allData[o].from].outputs.indexOf(o+e),i!==-1&&(this._nodes[this._allData[o].from].outputs[i]=o)):(i=this._allInputIndices.indexOf(o+e),i!==-1&&(this._allInputIndices[i]=o)),this._allData[o].to.forEach(a=>{i=this._nodes[a].inputs.indexOf(o+e),i!==-1&&(this._nodes[a].inputs[i]=o)}),this._allData[o].to.length===0&&(i=this._allOutputIndices.indexOf(o+e),i!==-1&&(this._allOutputIndices[i]=o))}}}deleteNode(e){let r=this._nodes[e];if(r.outputs.length>1){for(let u=1;u<r.outputs.length;u++)if(this._allData[r.outputs[u]].to.length>0)throw new Error("Node deletion with more than one output connected to other nodes is not supported. ")}r.executeNode=!1;let t=r.inputs[0],o=r.outputs[0],i=this._allData[o].to;for(let u=0;u<r.inputs.length;u++){let c=this._allData[r.inputs[u]].to.indexOf(e);if(c===-1)throw new Error("The Value object doesn't have the current Node in it's 'to' property ");this._allData[r.inputs[u]].to.splice(c,1)}this._allData[o]._to=[];let a=this._allOutputIndices.indexOf(o);if(a!==-1&&(this._allOutputIndices[a]=t),i&&i.length>0)for(let u of i){let c=this._nodes[u].inputs.indexOf(o);if(c===-1)throw new Error("The Node object doesn't have the output Value in it's 'inputs' property ");this._nodes[u].inputs[c]=t,this._allData[t].to.push(u)}}removeAllDropoutNodes(){let e=0;for(let r of this._nodes){if(r.opType==="Dropout"){if(r.inputs.length!==1)throw new Error("Dropout nodes should only contain one input. ");if(r.outputs.length!==1&&r.outputs.length!==2)throw new Error("Dropout nodes should contain either 1 or 2 output(s)");if(r.outputs.length===2&&this._allData[r.outputs[1]]._to.length!==0)throw new Error("Dropout nodes's second output should not be referenced by other nodes");this.deleteNode(e)}e++}}removeAllIdentityNodes(){let e=0;for(let r of this._nodes)r.opType==="Identity"&&this.deleteNode(e),e++}isActivation(e){switch(e.opType){case"Relu":case"Sigmoid":case"Clip":return!0;default:return!1}}fuseConvActivationNodes(){for(let e of this._nodes)if(e.opType==="Conv"){let r=this._allData[e.outputs[0]]._to;if(r.length===1&&this.isActivation(this._nodes[r[0]])){let t=this._nodes[r[0]];if(t.opType==="Clip")if(t.inputs.length===1)try{e.attributes.set("activation_params","floats",[t.attributes.getFloat("min"),t.attributes.getFloat("max")])}catch{e.attributes.set("activation_params","floats",[Mn,Bn])}else if(t.inputs.length>=3&&this._allData[t.inputs[1]].tensor!==void 0&&this._allData[t.inputs[2]].tensor!==void 0)e.attributes.set("activation_params","floats",[this._allData[t.inputs[1]].tensor.floatData[0],this._allData[t.inputs[2]].tensor.floatData[0]]);else continue;e.attributes.set("activation","string",t.opType),this.deleteNode(r[0])}}}}});var jv,Wv,ba,Hv=j(()=>{"use strict";jv=Pe(We());Uv();Do();Wv=Pe(oo());He();ba=class{constructor(){}load(e,r,t){let o;if(!t)try{this.loadFromOnnxFormat(e,r);return}catch(i){if(t!==void 0)throw i;o=i}try{this.loadFromOrtFormat(e,r)}catch(i){throw t!==void 0?i:new Error(`Failed to load model as ONNX format: ${o}
as ORT format: ${i}`)}}loadFromOnnxFormat(e,r){let t=Wv.onnx.ModelProto.decode(e);if(Ct.longToNumber(t.irVersion)<3)throw new Error("only support ONNX model with IR_VERSION>=3");this._opsets=t.opsetImport.map(i=>({domain:i.domain,version:Ct.longToNumber(i.version)})),this._graph=uc.from(t.graph,r)}loadFromOrtFormat(e,r){let t=new jv.ByteBuffer(e),o=ul.InferenceSession.getRootAsInferenceSession(t).model();if(Ct.longToNumber(o.irVersion())<3)throw new Error("only support ONNX model with IR_VERSION>=3");this._opsets=[];for(let a=0;a<o.opsetImportLength();a++){let u=o.opsetImport(a);this._opsets.push({domain:u?.domain(),version:Ct.longToNumber(u.version())})}this._graph=uc.from(o.graph(),r)}get graph(){return this._graph}get opsets(){return this._opsets}}});var _a,qv=j(()=>{"use strict";Fv();Vv();Bt();Hv();_a=class{constructor(e={}){this._initialized=!1,this.backendHint=e.backendHint,this.profiler=Ii.create(e.profiler),this.context={profiler:this.profiler,graphInputTypes:[],graphInputDims:[]}}get inputNames(){return this._model.graph.getInputNames()}get outputNames(){return this._model.graph.getOutputNames()}startProfiling(){this.profiler.start()}endProfiling(){this.profiler.stop()}async loadModel(e,r,t){await this.profiler.event("session","Session.loadModel",async()=>{let o=await oc(this.backendHint);if(this.sessionHandler=o.createSessionHandler(this.context),this._model=new ba,typeof e=="string"){let i=e.endsWith(".ort");{let u=await(await fetch(e)).arrayBuffer();this.initialize(new Uint8Array(u),i)}}else if(ArrayBuffer.isView(e))this.initialize(e);else{let i=new Uint8Array(e,r||0,t||e.byteLength);this.initialize(i)}})}initialize(e,r){if(this._initialized)throw new Error("already initialized");this.profiler.event("session","Session.initialize",()=>{let t=this.sessionHandler.transformGraph?this.sessionHandler:void 0;this._model.load(e,t,r),this.sessionHandler.onGraphInitialized&&this.sessionHandler.onGraphInitialized(this._model.graph),this.initializeOps(this._model.graph),this._executionPlan=new ga(this._model.graph,this._ops,this.profiler)}),this._initialized=!0}async run(e){if(!this._initialized)throw new Error("session not initialized yet");return this.profiler.event("session","Session.run",async()=>{let r=this.normalizeAndValidateInputs(e),t=await this._executionPlan.execute(this.sessionHandler,r);return this.createOutput(t)})}normalizeAndValidateInputs(e){let r=this._model.graph.getInputNames();if(Array.isArray(e)){if(e.length!==r.length)throw new Error(`incorrect input array length: expected ${r.length} but got ${e.length}`)}else{if(e.size!==r.length)throw new Error(`incorrect input map size: expected ${r.length} but got ${e.size}`);let t=new Array(e.size),o=0;for(let i=0;i<r.length;++i){let a=e.get(r[i]);if(!a)throw new Error(`missing input tensor for: '${name}'`);t[o++]=a}e=t}if(!this.context.graphInputTypes||this.context.graphInputTypes.length===0||!this.context.graphInputDims||this.context.graphInputDims.length===0){let t=this._model.graph.getInputIndices(),o=this._model.graph.getValues(),i=new Array(t.length);for(let a=0;a<t.length;++a){let u=o[t[a]];i[a]=u.type.shape.dims,this.context.graphInputTypes.push(u.type.tensorType),this.context.graphInputDims.push(e[a].dims)}this.validateInputTensorDims(i,e,!0)}else this.validateInputTensorDims(this.context.graphInputDims,e,!1);return this.validateInputTensorTypes(this.context.graphInputTypes,e),e}validateInputTensorTypes(e,r){for(let t=0;t<r.length;t++){let o=e[t],i=r[t].type;if(o!==i)throw new Error(`input tensor[${t}] check failed: expected type '${o}' but got ${i}`)}}validateInputTensorDims(e,r,t){for(let o=0;o<r.length;o++){let i=e[o],a=r[o].dims;if(!this.compareTensorDims(i,a,t))throw new Error(`input tensor[${o}] check failed: expected shape '[${i.join(",")}]' but got [${a.join(",")}]`)}}compareTensorDims(e,r,t){if(e.length!==r.length)return!1;for(let o=0;o<e.length;++o)if(e[o]!==r[o]&&(!t||e[o]!==0))return!1;return!0}createOutput(e){let r=this._model.graph.getOutputNames();if(e.length!==r.length)throw new Error("expected number of outputs do not match number of generated outputs");let t=new Map;for(let o=0;o<r.length;++o)t.set(r[o],e[o]);return t}initializeOps(e){let r=e.getNodes();this._ops=new Array(r.length);for(let t=0;t<r.length;t++)this._ops[t]=this.sessionHandler.resolve(r[t],this._model.opsets,e)}}});var va,Kv=j(()=>{"use strict";xt();Fn();va=class{constructor(e){this.session=e;this.inputNames=this.session.inputNames,this.outputNames=this.session.outputNames}async dispose(){}async run(e,r,t){let o=new Map;for(let u in e)if(Object.hasOwnProperty.call(e,u)){let c=e[u];o.set(u,new pt(c.dims,c.type,void 0,void 0,c.data))}let i=await this.session.run(o),a={};return i.forEach((u,c)=>{a[c]=new Nt(u.type,u.data,u.dims)}),a}startProfiling(){this.session.startProfiling()}endProfiling(){this.session.endProfiling()}}});var Xv={};eo(Xv,{onnxjsBackend:()=>X4});var lc,X4,Yv=j(()=>{"use strict";qv();Kv();lc=class{async init(){}async createInferenceSessionHandler(e,r){let t=new _a(r);return typeof e=="string"?await t.loadModel(e):await t.loadModel(e),new va(t)}},X4=new lc});var wa=j(()=>{"use strict"});var Qv={};eo(Qv,{default:()=>Y4});var Zv,Jv,Y4,ew=j(()=>{"use strict";cc();Tn();xa();Zv="ort-wasm-proxy-worker",Jv=globalThis.self?.name===Zv;Jv&&(self.onmessage=n=>{let{type:e,in:r}=n.data;try{switch(e){case"init-wasm":Ta(r.wasm).then(()=>{Ia(r).then(()=>{postMessage({type:e})},t=>{postMessage({type:e,err:t})})},t=>{postMessage({type:e,err:t})});break;case"init-ep":{let{epName:t,env:o}=r;Sa(o,t).then(()=>{postMessage({type:e})},i=>{postMessage({type:e,err:i})});break}case"copy-from":{let{buffer:t}=r,o=Ho(t);postMessage({type:e,out:o});break}case"create":{let{model:t,options:o}=r;$a(t,o).then(i=>{postMessage({type:e,out:i})},i=>{postMessage({type:e,err:i})});break}case"release":Aa(r),postMessage({type:e});break;case"run":{let{sessionId:t,inputIndices:o,inputs:i,outputIndices:a,options:u}=r;Oa(t,o,i,a,new Array(a.length).fill(null),u).then(c=>{c.some(f=>f[3]!=="cpu")?postMessage({type:e,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:e,out:c},Ca([...i,...c]))},c=>{postMessage({type:e,err:c})});break}case"end-profiling":Pa(r),postMessage({type:e});break;default:}}catch(t){postMessage({type:e,err:t})}});Y4=Jv?null:n=>new Worker(n??zt,{type:"module",name:Zv})});var rw={};eo(rw,{default:()=>Z4});var dc,tw,Z4,J4,nw=j(()=>{"use strict";tw=(dc=import.meta.url,async function(n={}){var e,r,t=n,o=new Promise((s,l)=>{e=s,r=l}),i=typeof window=="object",a=typeof WorkerGlobalScope<"u",u=a&&self.name?.startsWith("em-pthread");t.mountExternalData=(s,l)=>{s.startsWith("./")&&(s=s.substring(2)),(t.bj||(t.bj=new Map)).set(s,l)},t.unmountExternalData=()=>{delete t.bj};var c=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let f=()=>{let s=(d,p,h)=>(...g)=>{let b=lr,v=p?.();g=d(...g);let w=p?.();return v!==w&&(d=w,h(v),p=h=null),lr!=b?new Promise((S,P)=>{$s={resolve:S,reject:P}}):g},l=d=>async(...p)=>{try{if(t.cj)throw Error("Session already started");let h=t.cj={Cj:p[0],errors:[]},g=await d(...p);if(t.cj!==h)throw Error("Session mismatch");t.dj?.flush();let b=h.errors;if(0<b.length){let v=await Promise.all(b);if(v=v.filter(w=>w),0<v.length)throw Error(v.join(`
`))}return g}finally{t.cj=null}};t._OrtCreateSession=s(t._OrtCreateSession,()=>t._OrtCreateSession,d=>t._OrtCreateSession=d),t._OrtRun=l(s(t._OrtRun,()=>t._OrtRun,d=>t._OrtRun=d)),t._OrtRunWithBinding=l(s(t._OrtRunWithBinding,()=>t._OrtRunWithBinding,d=>t._OrtRunWithBinding=d)),t._OrtBindInput=s(t._OrtBindInput,()=>t._OrtBindInput,d=>t._OrtBindInput=d),f=void 0};t.jsepInit=(s,l)=>{if(f?.(),s==="webgpu"){[t.dj,t.rj,t.vj,t.hj,t.uj,t.Ye,t.wj,t.zj,t.sj,t.tj,t.xj]=l;let d=t.dj;t.jsepRegisterBuffer=(p,h,g,b)=>d.registerBuffer(p,h,g,b),t.jsepGetBuffer=p=>d.getBuffer(p),t.jsepCreateDownloader=(p,h,g)=>d.createDownloader(p,h,g),t.jsepOnCreateSession=p=>{d.onCreateSession(p)},t.jsepOnReleaseSession=p=>{d.onReleaseSession(p)},t.jsepOnRunStart=p=>d.onRunStart(p),t.Aj=(p,h)=>{d.upload(p,h)}}else if(s==="webnn"){[t.dj,t.yj,t.ij,t.jsepEnsureTensor,t.jj,t.jsepDownloadTensor]=l,t.jsepReleaseTensorId=t.ij,t.jsepUploadTensor=t.jj;let d=t.dj;t.jsepOnRunStart=p=>d.onRunStart(p),t.jsepOnRunEnd=d.onRunEnd.bind(d),t.jsepRegisterMLContext=(p,h)=>{d.registerMLContext(p,h)},t.jsepOnReleaseSession=p=>{d.onReleaseSession(p)},t.jsepCreateMLTensorDownloader=(p,h)=>d.createMLTensorDownloader(p,h),t.jsepRegisterMLTensor=(p,h,g,b)=>d.registerMLTensor(p,h,g,b),t.jsepCreateMLContext=p=>d.createMLContext(p),t.jsepRegisterMLConstant=(p,h,g,b,v)=>d.registerMLConstant(p,h,g,b,v,t.bj),t.jsepRegisterGraphInput=d.registerGraphInput.bind(d),t.jsepIsGraphInput=d.isGraphInput.bind(d),t.jsepCreateTemporaryTensor=d.createTemporaryTensor.bind(d)}};var m,y,_=Object.assign({},t),x=(s,l)=>{throw l},T="";(i||a)&&(a?T=self.location.href:typeof document<"u"&&document.currentScript&&(T=document.currentScript.src),dc&&(T=dc),T=T.startsWith("blob:")?"":T.slice(0,T.replace(/[?#].*/,"").lastIndexOf("/")+1),a&&(y=s=>{var l=new XMLHttpRequest;return l.open("GET",s,!1),l.responseType="arraybuffer",l.send(null),new Uint8Array(l.response)}),m=async s=>{if($e(s))return new Promise((d,p)=>{var h=new XMLHttpRequest;h.open("GET",s,!0),h.responseType="arraybuffer",h.onload=()=>{h.status==200||h.status==0&&h.response?d(h.response):p(h.status)},h.onerror=p,h.send(null)});var l=await fetch(s,{credentials:"same-origin"});if(l.ok)return l.arrayBuffer();throw Error(l.status+" : "+l.url)});var I=console.log.bind(console),O=console.error.bind(console),A=I,$=O;Object.assign(t,_),_=null;var C,L,R,M,q,X,J,ie,ue,xe,ee,ye,Xe,de=t.wasmBinary,_e=!1,$e=s=>s.startsWith("file://");function le(){return C.buffer!=M.buffer&&Ue(),M}function Oe(){return C.buffer!=M.buffer&&Ue(),q}function ct(){return C.buffer!=M.buffer&&Ue(),X}function et(){return C.buffer!=M.buffer&&Ue(),J}function K(){return C.buffer!=M.buffer&&Ue(),ie}function Y(){return C.buffer!=M.buffer&&Ue(),ue}function pe(){return C.buffer!=M.buffer&&Ue(),xe}function Le(){return C.buffer!=M.buffer&&Ue(),Xe}if(u){let s=function(l){try{var d=l.data,p=d.Zi;if(p==="load"){let h=[];self.onmessage=g=>h.push(g),self.startWorker=()=>{postMessage({Zi:"loaded"});for(let g of h)s(g);self.onmessage=s};for(let g of d.oj)t[g]&&!t[g].proxy||(t[g]=(...b)=>{postMessage({Zi:"callHandler",nj:g,args:b})},g=="print"&&(A=t[g]),g=="printErr"&&($=t[g]));C=d.Ij,Ue(),Xt(d.Jj)}else if(p==="run"){H2(d.Yi),Cs(d.Yi,0,0,1,0,0),id(),Is(d.Yi),Ye||(Qd(),Ye=!0);try{q2(d.Ej,d.fj)}catch(h){if(h!="unwind")throw h}}else d.target!=="setimmediate"&&(p==="checkMailbox"?Ye&&ii():p&&($(`worker: received unknown command ${p}`),$(d)))}catch(h){throw ep(),h}};var Iz=s,Xt,Ye=!1;$=function(...l){l=l.join(" "),console.error(l)},self.alert=function(...l){postMessage({Zi:"alert",text:l.join(" "),Gj:fi()})},self.onunhandledrejection=l=>{throw l.reason||l},self.onmessage=s}function Ue(){var s=C.buffer;t.HEAP8=M=new Int8Array(s),t.HEAP16=X=new Int16Array(s),t.HEAPU8=q=new Uint8Array(s),t.HEAPU16=J=new Uint16Array(s),t.HEAP32=ie=new Int32Array(s),t.HEAPU32=ue=new Uint32Array(s),t.HEAPF32=xe=new Float32Array(s),t.HEAPF64=Xe=new Float64Array(s),t.HEAP64=ee=new BigInt64Array(s),t.HEAPU64=ye=new BigUint64Array(s)}function sr(){u?startWorker(t):N.oe()}u||(C=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Ue());var vo,On=0,wo=null;function Jc(){if(--On==0&&wo){var s=wo;wo=null,s()}}function tn(s){throw $(s="Aborted("+s+")"),_e=!0,s=new WebAssembly.RuntimeError(s+". Build with -sASSERTIONS for more info."),r(s),s}function Qc(){return{a:{sc:W2,Rd:j2,w:K2,X:X2,b:Z2,o:J2,z:Q2,r:eI,Nb:tI,t:rI,db:nI,kd:ld,g:Y2,Lb:pd,Ad:fd,gd:md,id:gd,Bd:yd,yd:bd,rd:_d,xd:vd,nc:wd,hd:xd,ed:Td,zd:Id,fd:Sd,Gd:oI,ic:aI,_c:sI,Yc:lI,hc:dI,Fa:pI,fa:fI,Zc:hI,Kb:wI,$c:xI,ud:TI,bd:II,ld:SI,Wc:$I,jc:AI,td:Is,Dd:OI,be:PI,Zd:CI,ne:kI,jb:NI,pa:RI,dd:ws,le:zI,ia:FI,qb:VI,ke:GI,V:UI,Uc:jI,$d:WI,ba:HI,rb:qI,ge:KI,de:XI,Ea:YI,od:ZI,pd:JI,qd:QI,md:Bd,nd:Fd,Xc:Vd,Id:tS,Fd:oS,C:iS,Ub:aS,kc:sS,Ed:rS,vb:uS,Cd:lS,cd:cS,_:eS,sb:dS,oc:pS,ad:fS,Kd:hS,Jd:mS,vd:Wd,wd:Hd,jd:gs,Mb:qd,mc:Kd,sd:Xd,lc:Yd,Ib:i$,xb:CA,ya:NO,O:RO,M:LO,va:uA,xa:n$,Ld:KO,_b:PA,Od:DO,W:V$,y:FS,c:xS,Vc:zS,Ta:RS,f:vS,Aa:EO,i:_S,da:yO,j:OS,Md:HO,k:AS,v:$S,s:GS,q:r$,Ia:f$,L:ZS,ma:mA,la:HS,fc:M$,cb:G$,Wb:KA,gb:NA,zc:bO,Rc:d$,wc:xO,$a:fO,xc:vO,Ob:WO,na:pA,Jb:YS,Sb:gO,ub:GO,ha:fA,Ac:pO,I:P$,yc:_O,Ra:j$,G:IS,fb:oO,Qd:wO,ua:TA,Ha:W$,B:LS,Rb:$O,vc:TO,Dc:lO,Ec:uO,Tb:sO,Pd:IO,Sa:F$,Z:vA,eb:BO,Pb:VO,_a:UO,Ua:zO,Cc:cO,pc:jO,bc:lA,ja:o$,K:MS,E:x$,Ba:iO,P:oA,Ic:RA,uc:SO,Bc:dO,R:E$,d:SS,Za:k$,m:TS,Pc:y$,Ka:AO,sa:OA,Eb:b$,h:wS,Qc:g$,Y:mO,ra:L$,wb:zA,mb:v$,e:PS,Ud:eO,Xd:ZA,l:CS,Mc:N$,n:kS,Vd:QA,Oc:w$,Yd:YA,Lc:R$,ae:BA,p:ES,Pa:Y$,Cb:X$,Oa:Z$,Zb:DA,D:XS,F:BS,N:t$,Xa:tO,Wd:JA,Db:D$,aa:qS,ca:NS,La:jA,kb:B$,Ca:IA,ie:S$,tb:qO,Da:KS,Gc:WA,ab:UA,bb:GA,Ya:MA,he:z$,ta:$A,_d:qA,ee:_A,fe:q$,ac:cA,Ma:SA,U:DS,ib:AA,Kc:hA,yb:dA,qa:wA,Ga:H$,Fc:aO,Hb:l$,Xb:HA,ka:h$,oa:A$,Sc:s$,Td:rO,$:yA,pb:WS,Vb:XA,Qb:PO,tc:OO,Wa:hO,rc:MO,nb:_$,A:QS,T:US,Gb:p$,Ja:u$,Sd:nO,Q:e$,hb:kA,za:bA,qc:FO,Jc:EA,me:jS,u:VS,S:c$,ga:LA,ce:xA,dc:rA,Hc:VA,ob:a$,cc:nA,Fb:m$,$b:gA,je:I$,Yb:FA,ec:U$,Va:CO,Tc:JS,gc:O$,ea:iA,Nc:$$,H:C$,lb:T$,Nd:kO,wa:sA,J:aA,Ab:eA,Na:Q$,Qa:K$,zb:tA,Bb:J$,x:yS,a:C,Hd:ms}}}var ps={1412436:(s,l,d,p,h)=>{if(t===void 0||!t.bj)return 1;if((s=dt(Number(s>>>0))).startsWith("./")&&(s=s.substring(2)),!(s=t.bj.get(s)))return 2;if(l=Number(l>>>0),d=Number(d>>>0),p=Number(p>>>0),l+d>s.byteLength)return 3;try{let g=s.subarray(l,l+d);switch(h){case 0:Oe().set(g,p>>>0);break;case 1:t.Aj(p,g);break;default:return 4}return 0}catch{return 4}},1413151:(s,l,d)=>{t.jj(s,Oe().subarray(l>>>0,l+d>>>0))},1413214:()=>t.yj(),1413255:s=>{t.ij(s)},1413291:()=>{t.sj()},1413322:()=>{t.tj()},1413351:()=>{t.xj()},1413376:s=>t.rj(s),1413409:s=>t.vj(s),1413441:(s,l,d)=>{t.hj(Number(s),Number(l),Number(d),!0)},1413504:(s,l,d)=>{t.hj(Number(s),Number(l),Number(d))},1413561:()=>typeof wasmOffsetConverter<"u",1413618:s=>{t.Ye("Abs",s,void 0)},1413669:s=>{t.Ye("Neg",s,void 0)},1413720:s=>{t.Ye("Floor",s,void 0)},1413773:s=>{t.Ye("Ceil",s,void 0)},1413825:s=>{t.Ye("Reciprocal",s,void 0)},1413883:s=>{t.Ye("Sqrt",s,void 0)},1413935:s=>{t.Ye("Exp",s,void 0)},1413986:s=>{t.Ye("Erf",s,void 0)},1414037:s=>{t.Ye("Sigmoid",s,void 0)},1414092:(s,l,d)=>{t.Ye("HardSigmoid",s,{alpha:l,beta:d})},1414171:s=>{t.Ye("Log",s,void 0)},1414222:s=>{t.Ye("Sin",s,void 0)},1414273:s=>{t.Ye("Cos",s,void 0)},1414324:s=>{t.Ye("Tan",s,void 0)},1414375:s=>{t.Ye("Asin",s,void 0)},1414427:s=>{t.Ye("Acos",s,void 0)},1414479:s=>{t.Ye("Atan",s,void 0)},1414531:s=>{t.Ye("Sinh",s,void 0)},1414583:s=>{t.Ye("Cosh",s,void 0)},1414635:s=>{t.Ye("Asinh",s,void 0)},1414688:s=>{t.Ye("Acosh",s,void 0)},1414741:s=>{t.Ye("Atanh",s,void 0)},1414794:s=>{t.Ye("Tanh",s,void 0)},1414846:s=>{t.Ye("Not",s,void 0)},1414897:(s,l,d)=>{t.Ye("Clip",s,{min:l,max:d})},1414966:s=>{t.Ye("Clip",s,void 0)},1415018:(s,l)=>{t.Ye("Elu",s,{alpha:l})},1415076:s=>{t.Ye("Gelu",s,void 0)},1415128:s=>{t.Ye("Relu",s,void 0)},1415180:(s,l)=>{t.Ye("LeakyRelu",s,{alpha:l})},1415244:(s,l)=>{t.Ye("ThresholdedRelu",s,{alpha:l})},1415314:(s,l)=>{t.Ye("Cast",s,{to:l})},1415372:s=>{t.Ye("Add",s,void 0)},1415423:s=>{t.Ye("Sub",s,void 0)},1415474:s=>{t.Ye("Mul",s,void 0)},1415525:s=>{t.Ye("Div",s,void 0)},1415576:s=>{t.Ye("Pow",s,void 0)},1415627:s=>{t.Ye("Equal",s,void 0)},1415680:s=>{t.Ye("Greater",s,void 0)},1415735:s=>{t.Ye("GreaterOrEqual",s,void 0)},1415797:s=>{t.Ye("Less",s,void 0)},1415849:s=>{t.Ye("LessOrEqual",s,void 0)},1415908:(s,l,d,p,h)=>{t.Ye("ReduceMean",s,{keepDims:!!l,noopWithEmptyAxes:!!d,axes:p?Array.from(K().subarray(Number(p)>>>0,Number(h)>>>0)):[]})},1416083:(s,l,d,p,h)=>{t.Ye("ReduceMax",s,{keepDims:!!l,noopWithEmptyAxes:!!d,axes:p?Array.from(K().subarray(Number(p)>>>0,Number(h)>>>0)):[]})},1416257:(s,l,d,p,h)=>{t.Ye("ReduceMin",s,{keepDims:!!l,noopWithEmptyAxes:!!d,axes:p?Array.from(K().subarray(Number(p)>>>0,Number(h)>>>0)):[]})},1416431:(s,l,d,p,h)=>{t.Ye("ReduceProd",s,{keepDims:!!l,noopWithEmptyAxes:!!d,axes:p?Array.from(K().subarray(Number(p)>>>0,Number(h)>>>0)):[]})},1416606:(s,l,d,p,h)=>{t.Ye("ReduceSum",s,{keepDims:!!l,noopWithEmptyAxes:!!d,axes:p?Array.from(K().subarray(Number(p)>>>0,Number(h)>>>0)):[]})},1416780:(s,l,d,p,h)=>{t.Ye("ReduceL1",s,{keepDims:!!l,noopWithEmptyAxes:!!d,axes:p?Array.from(K().subarray(Number(p)>>>0,Number(h)>>>0)):[]})},1416953:(s,l,d,p,h)=>{t.Ye("ReduceL2",s,{keepDims:!!l,noopWithEmptyAxes:!!d,axes:p?Array.from(K().subarray(Number(p)>>>0,Number(h)>>>0)):[]})},1417126:(s,l,d,p,h)=>{t.Ye("ReduceLogSum",s,{keepDims:!!l,noopWithEmptyAxes:!!d,axes:p?Array.from(K().subarray(Number(p)>>>0,Number(h)>>>0)):[]})},1417303:(s,l,d,p,h)=>{t.Ye("ReduceSumSquare",s,{keepDims:!!l,noopWithEmptyAxes:!!d,axes:p?Array.from(K().subarray(Number(p)>>>0,Number(h)>>>0)):[]})},1417483:(s,l,d,p,h)=>{t.Ye("ReduceLogSumExp",s,{keepDims:!!l,noopWithEmptyAxes:!!d,axes:p?Array.from(K().subarray(Number(p)>>>0,Number(h)>>>0)):[]})},1417663:s=>{t.Ye("Where",s,void 0)},1417716:(s,l,d)=>{t.Ye("Transpose",s,{perm:l?Array.from(K().subarray(Number(l)>>>0,Number(d)>>>0)):[]})},1417840:(s,l,d,p)=>{t.Ye("DepthToSpace",s,{blocksize:l,mode:dt(d),format:p?"NHWC":"NCHW"})},1417973:(s,l,d,p)=>{t.Ye("DepthToSpace",s,{blocksize:l,mode:dt(d),format:p?"NHWC":"NCHW"})},1418106:(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H)=>{t.Ye("ConvTranspose",s,{format:w?"NHWC":"NCHW",autoPad:l,dilations:[d],group:p,kernelShape:[h],pads:[g,b],strides:[v],wIsConst:()=>!!le()[S>>>0],outputPadding:P?Array.from(K().subarray(Number(P)>>>0,Number(D)>>>0)):[],outputShape:k?Array.from(K().subarray(Number(k)>>>0,Number(V)>>>0)):[],activation:dt(H)})},1418539:(s,l,d,p,h,g,b,v,w,S,P,D,k,V)=>{t.Ye("ConvTranspose",s,{format:v?"NHWC":"NCHW",autoPad:l,dilations:Array.from(K().subarray(Number(d)>>>0,2+(Number(d)>>>0)>>>0)),group:p,kernelShape:Array.from(K().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),pads:Array.from(K().subarray(Number(g)>>>0,4+(Number(g)>>>0)>>>0)),strides:Array.from(K().subarray(Number(b)>>>0,2+(Number(b)>>>0)>>>0)),wIsConst:()=>!!le()[w>>>0],outputPadding:S?Array.from(K().subarray(Number(S)>>>0,Number(P)>>>0)):[],outputShape:D?Array.from(K().subarray(Number(D)>>>0,Number(k)>>>0)):[],activation:dt(V)})},1419200:(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H)=>{t.Ye("ConvTranspose",s,{format:w?"NHWC":"NCHW",autoPad:l,dilations:[d],group:p,kernelShape:[h],pads:[g,b],strides:[v],wIsConst:()=>!!le()[S>>>0],outputPadding:P?Array.from(K().subarray(Number(P)>>>0,Number(D)>>>0)):[],outputShape:k?Array.from(K().subarray(Number(k)>>>0,Number(V)>>>0)):[],activation:dt(H)})},1419633:(s,l,d,p,h,g,b,v,w,S,P,D,k,V)=>{t.Ye("ConvTranspose",s,{format:v?"NHWC":"NCHW",autoPad:l,dilations:Array.from(K().subarray(Number(d)>>>0,2+(Number(d)>>>0)>>>0)),group:p,kernelShape:Array.from(K().subarray(Number(h)>>>0,2+(Number(h)>>>0)>>>0)),pads:Array.from(K().subarray(Number(g)>>>0,4+(Number(g)>>>0)>>>0)),strides:Array.from(K().subarray(Number(b)>>>0,2+(Number(b)>>>0)>>>0)),wIsConst:()=>!!le()[w>>>0],outputPadding:S?Array.from(K().subarray(Number(S)>>>0,Number(P)>>>0)):[],outputShape:D?Array.from(K().subarray(Number(D)>>>0,Number(k)>>>0)):[],activation:dt(V)})},1420294:(s,l)=>{t.Ye("GlobalAveragePool",s,{format:l?"NHWC":"NCHW"})},1420385:(s,l,d,p,h,g,b,v,w,S,P,D,k,V)=>{t.Ye("AveragePool",s,{format:V?"NHWC":"NCHW",auto_pad:l,ceil_mode:d,count_include_pad:p,storage_order:h,dilations:g?Array.from(K().subarray(Number(g)>>>0,Number(b)>>>0)):[],kernel_shape:v?Array.from(K().subarray(Number(v)>>>0,Number(w)>>>0)):[],pads:S?Array.from(K().subarray(Number(S)>>>0,Number(P)>>>0)):[],strides:D?Array.from(K().subarray(Number(D)>>>0,Number(k)>>>0)):[]})},1420864:(s,l)=>{t.Ye("GlobalAveragePool",s,{format:l?"NHWC":"NCHW"})},1420955:(s,l,d,p,h,g,b,v,w,S,P,D,k,V)=>{t.Ye("AveragePool",s,{format:V?"NHWC":"NCHW",auto_pad:l,ceil_mode:d,count_include_pad:p,storage_order:h,dilations:g?Array.from(K().subarray(Number(g)>>>0,Number(b)>>>0)):[],kernel_shape:v?Array.from(K().subarray(Number(v)>>>0,Number(w)>>>0)):[],pads:S?Array.from(K().subarray(Number(S)>>>0,Number(P)>>>0)):[],strides:D?Array.from(K().subarray(Number(D)>>>0,Number(k)>>>0)):[]})},1421434:(s,l)=>{t.Ye("GlobalMaxPool",s,{format:l?"NHWC":"NCHW"})},1421521:(s,l,d,p,h,g,b,v,w,S,P,D,k,V)=>{t.Ye("MaxPool",s,{format:V?"NHWC":"NCHW",auto_pad:l,ceil_mode:d,count_include_pad:p,storage_order:h,dilations:g?Array.from(K().subarray(Number(g)>>>0,Number(b)>>>0)):[],kernel_shape:v?Array.from(K().subarray(Number(v)>>>0,Number(w)>>>0)):[],pads:S?Array.from(K().subarray(Number(S)>>>0,Number(P)>>>0)):[],strides:D?Array.from(K().subarray(Number(D)>>>0,Number(k)>>>0)):[]})},1421996:(s,l)=>{t.Ye("GlobalMaxPool",s,{format:l?"NHWC":"NCHW"})},1422083:(s,l,d,p,h,g,b,v,w,S,P,D,k,V)=>{t.Ye("MaxPool",s,{format:V?"NHWC":"NCHW",auto_pad:l,ceil_mode:d,count_include_pad:p,storage_order:h,dilations:g?Array.from(K().subarray(Number(g)>>>0,Number(b)>>>0)):[],kernel_shape:v?Array.from(K().subarray(Number(v)>>>0,Number(w)>>>0)):[],pads:S?Array.from(K().subarray(Number(S)>>>0,Number(P)>>>0)):[],strides:D?Array.from(K().subarray(Number(D)>>>0,Number(k)>>>0)):[]})},1422558:(s,l,d,p,h)=>{t.Ye("Gemm",s,{alpha:l,beta:d,transA:p,transB:h})},1422662:s=>{t.Ye("MatMul",s,void 0)},1422716:(s,l,d,p)=>{t.Ye("ArgMax",s,{keepDims:!!l,selectLastIndex:!!d,axis:p})},1422824:(s,l,d,p)=>{t.Ye("ArgMin",s,{keepDims:!!l,selectLastIndex:!!d,axis:p})},1422932:(s,l)=>{t.Ye("Softmax",s,{axis:l})},1422995:(s,l)=>{t.Ye("Concat",s,{axis:l})},1423055:(s,l,d,p,h)=>{t.Ye("Split",s,{axis:l,numOutputs:d,splitSizes:p?Array.from(K().subarray(Number(p)>>>0,Number(h)>>>0)):[]})},1423211:s=>{t.Ye("Expand",s,void 0)},1423265:(s,l)=>{t.Ye("Gather",s,{axis:Number(l)})},1423336:(s,l)=>{t.Ye("GatherElements",s,{axis:Number(l)})},1423415:(s,l)=>{t.Ye("GatherND",s,{batch_dims:Number(l)})},1423494:(s,l,d,p,h,g,b,v,w,S,P)=>{t.Ye("Resize",s,{antialias:l,axes:d?Array.from(K().subarray(Number(d)>>>0,Number(p)>>>0)):[],coordinateTransformMode:dt(h),cubicCoeffA:g,excludeOutside:b,extrapolationValue:v,keepAspectRatioPolicy:dt(w),mode:dt(S),nearestMode:dt(P)})},1423856:(s,l,d,p,h,g,b)=>{t.Ye("Slice",s,{starts:l?Array.from(K().subarray(Number(l)>>>0,Number(d)>>>0)):[],ends:p?Array.from(K().subarray(Number(p)>>>0,Number(h)>>>0)):[],axes:g?Array.from(K().subarray(Number(g)>>>0,Number(b)>>>0)):[]})},1424120:s=>{t.Ye("Tile",s,void 0)},1424172:(s,l,d)=>{t.Ye("InstanceNormalization",s,{epsilon:l,format:d?"NHWC":"NCHW"})},1424286:(s,l,d)=>{t.Ye("InstanceNormalization",s,{epsilon:l,format:d?"NHWC":"NCHW"})},1424400:s=>{t.Ye("Range",s,void 0)},1424453:(s,l)=>{t.Ye("Einsum",s,{equation:dt(l)})},1424534:(s,l,d,p,h)=>{t.Ye("Pad",s,{mode:l,value:d,pads:p?Array.from(K().subarray(Number(p)>>>0,Number(h)>>>0)):[]})},1424677:(s,l,d,p,h,g)=>{t.Ye("BatchNormalization",s,{epsilon:l,momentum:d,spatial:!!h,trainingMode:!!p,format:g?"NHWC":"NCHW"})},1424846:(s,l,d,p,h,g)=>{t.Ye("BatchNormalization",s,{epsilon:l,momentum:d,spatial:!!h,trainingMode:!!p,format:g?"NHWC":"NCHW"})},1425015:(s,l,d)=>{t.Ye("CumSum",s,{exclusive:Number(l),reverse:Number(d)})},1425112:(s,l,d)=>{t.Ye("DequantizeLinear",s,{axis:l,blockSize:d})},1425202:(s,l,d,p,h)=>{t.Ye("GridSample",s,{align_corners:l,mode:dt(d),padding_mode:dt(p),format:h?"NHWC":"NCHW"})},1425372:(s,l,d,p,h)=>{t.Ye("GridSample",s,{align_corners:l,mode:dt(d),padding_mode:dt(p),format:h?"NHWC":"NCHW"})},1425542:(s,l,d,p,h,g,b,v,w)=>{t.Ye("Attention",s,{numHeads:l,isUnidirectional:d,maskFilterValue:p,scale:h,doRotary:g,qkvHiddenSizes:b?Array.from(K().subarray(Number(v)>>>0,Number(v)+b>>>0)):[],pastPresentShareBuffer:!!w})},1425814:s=>{t.Ye("BiasAdd",s,void 0)},1425869:s=>{t.Ye("BiasSplitGelu",s,void 0)},1425930:s=>{t.Ye("FastGelu",s,void 0)},1425986:(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z)=>{t.Ye("Conv",s,{format:D?"NHWC":"NCHW",auto_pad:l,dilations:d?Array.from(K().subarray(Number(d)>>>0,Number(p)>>>0)):[],group:h,kernel_shape:g?Array.from(K().subarray(Number(g)>>>0,Number(b)>>>0)):[],pads:v?Array.from(K().subarray(Number(v)>>>0,Number(w)>>>0)):[],strides:S?Array.from(K().subarray(Number(S)>>>0,Number(P)>>>0)):[],w_is_const:()=>!!le()[Number(k)>>>0],activation:dt(V),activation_params:H?Array.from(pe().subarray(Number(H)>>>0,Number(Z)>>>0)):[]})},1426570:s=>{t.Ye("Gelu",s,void 0)},1426622:(s,l,d,p,h,g,b,v,w)=>{t.Ye("GroupQueryAttention",s,{numHeads:l,kvNumHeads:d,scale:p,softcap:h,doRotary:g,rotaryInterleaved:b,smoothSoftmax:v,localWindowSize:w})},1426839:(s,l,d,p)=>{t.Ye("LayerNormalization",s,{axis:l,epsilon:d,simplified:!!p})},1426950:(s,l,d,p)=>{t.Ye("LayerNormalization",s,{axis:l,epsilon:d,simplified:!!p})},1427061:(s,l,d,p,h,g)=>{t.Ye("MatMulNBits",s,{k:l,n:d,accuracyLevel:p,bits:h,blockSize:g})},1427188:(s,l,d,p,h,g)=>{t.Ye("MultiHeadAttention",s,{numHeads:l,isUnidirectional:d,maskFilterValue:p,scale:h,doRotary:g})},1427347:(s,l)=>{t.Ye("QuickGelu",s,{alpha:l})},1427411:(s,l,d,p,h)=>{t.Ye("RotaryEmbedding",s,{interleaved:!!l,numHeads:d,rotaryEmbeddingDim:p,scale:h})},1427550:(s,l,d)=>{t.Ye("SkipLayerNormalization",s,{epsilon:l,simplified:!!d})},1427652:(s,l,d)=>{t.Ye("SkipLayerNormalization",s,{epsilon:l,simplified:!!d})},1427754:(s,l,d,p)=>{t.Ye("GatherBlockQuantized",s,{gatherAxis:l,quantizeAxis:d,blockSize:p})},1427875:s=>{t.wj(s)},1427909:(s,l)=>t.zj(Number(s),Number(l),t.cj.Cj,t.cj.errors)};function j2(s,l,d){return kd(async()=>{await t.uj(Number(s),Number(l),Number(d))})}function W2(){return typeof wasmOffsetConverter<"u"}class fs{name="ExitStatus";constructor(l){this.message=`Program terminated with exit(${l})`,this.status=l}}var ed=s=>{s.terminate(),s.onmessage=()=>{}},hs=[],td=s=>{cn.length==0&&(sd(),ad(cn[0]));var l=cn.pop();if(!l)return 6;xo.push(l),Pn[s.Yi]=l,l.Yi=s.Yi;var d={Zi:"run",Ej:s.Dj,fj:s.fj,Yi:s.Yi};return l.postMessage(d,s.lj),0},ln=0,tt=(s,l,...d)=>{for(var p=2*d.length,h=F(),g=Ds(8*p),b=g>>>3,v=0;v<d.length;v++){var w=d[v];typeof w=="bigint"?(ee[b+2*v]=1n,ee[b+2*v+1]=w):(ee[b+2*v]=0n,Le()[b+2*v+1>>>0]=w)}return s=tp(s,0,p,g,l),B(h),s};function ms(s){if(u)return tt(0,1,s);if(R=s,!(0<ln)){for(var l of xo)ed(l);for(l of cn)ed(l);cn=[],xo=[],Pn={},_e=!0}x(0,new fs(s))}function rd(s){if(u)return tt(1,0,s);gs(s)}var gs=s=>{if(R=s,u)throw rd(s),"unwind";ms(s)},cn=[],xo=[],nd=[],Pn={},od=s=>{var l=s.Yi;delete Pn[l],cn.push(s),xo.splice(xo.indexOf(s),1),s.Yi=0,rp(l)};function id(){nd.forEach(s=>s())}var ad=s=>new Promise(l=>{s.onmessage=h=>{var g=(h=h.data).Zi;if(h.ej&&h.ej!=fi()){var b=Pn[h.ej];b?b.postMessage(h,h.lj):$(`Internal error! Worker sent a message "${g}" to target pthread ${h.ej}, but that thread no longer exists!`)}else g==="checkMailbox"?ii():g==="spawnThread"?td(h):g==="cleanupThread"?od(Pn[h.Fj]):g==="loaded"?(s.loaded=!0,l(s)):g==="alert"?alert(`Thread ${h.Gj}: ${h.text}`):h.target==="setimmediate"?s.postMessage(h):g==="callHandler"?t[h.nj](...h.args):g&&$(`worker sent an unknown command ${g}`)},s.onerror=h=>{throw $(`worker sent an error! ${h.filename}:${h.lineno}: ${h.message}`),h};var d,p=[];for(d of[])t.propertyIsEnumerable(d)&&p.push(d);s.postMessage({Zi:"load",oj:p,Ij:C,Jj:L})});function sd(){var s=new Worker(import.meta.url.startsWith("file:")?new URL("ort.all.bundle.min.mjs",import.meta.url):new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});cn.push(s)}var H2=s=>{Ue();var l=Y()[s+52>>>2>>>0];s=Y()[s+56>>>2>>>0],ip(l,l-s),B(l)},q2=(s,l)=>{ln=0,s=ks(s,l),0<ln?R=s:Es(s)},ri=[],ni=0;function K2(s){var l=new ys(s>>>=0);if(le()[l.Xi+12>>>0]==0){var d=1;le()[l.Xi+12>>>0]=d,ni--}return d=0,le()[l.Xi+13>>>0]=d,ri.push(l),sp(s),lp(s)}var Zn=0,X2=()=>{G(0,0);var s=ri.pop();ap(s.gj),Zn=0};class ys{constructor(l){this.gj=l,this.Xi=l-24}}function Y2(s){throw Zn||=s>>>0,Zn}var oi=s=>{var l=Zn;if(!l)return Io(0),0;var d=new ys(l);Y()[d.Xi+16>>>2>>>0]=l;var p=Y()[d.Xi+4>>>2>>>0];if(!p)return Io(0),l;for(var h of s){if(h===0||h===p)break;if(up(h,p,d.Xi+16))return Io(h),l}return Io(p),l};function Z2(){return oi([])}function J2(s){return oi([s>>>0])}function Q2(s,l){return oi([s>>>0,l>>>0])}function eI(s,l,d){return oi([s>>>0,l>>>0,d>>>0])}var tI=()=>{var s=ri.pop();s||tn("no exception to throw");var l=s.gj;if(le()[s.Xi+13>>>0]==0){ri.push(s);var d=1;le()[s.Xi+13>>>0]=d,d=0,le()[s.Xi+12>>>0]=d,ni++}throw Zn=l};function rI(s,l,d){var p=new ys(s>>>=0);throw l>>>=0,d>>>=0,Y()[p.Xi+16>>>2>>>0]=0,Y()[p.Xi+4>>>2>>>0]=l,Y()[p.Xi+8>>>2>>>0]=d,ni++,Zn=s}var nI=()=>ni;function ud(s,l,d,p){return u?tt(2,1,s,l,d,p):ld(s,l,d,p)}function ld(s,l,d,p){if(s>>>=0,d>>>=0,p>>>=0,c===void 0)return 6;var h=[];return u&&h.length===0?ud(s,l>>>=0,d,p):(s={Dj:d,Yi:s,fj:p,lj:h},u?(s.Zi="spawnThread",postMessage(s,h),0):td(s))}var cd=typeof TextDecoder<"u"?new TextDecoder:void 0,dd=(s,l=0,d=NaN)=>{var p=(l>>>=0)+d;for(d=l;s[d]&&!(d>=p);)++d;if(16<d-l&&s.buffer&&cd)return cd.decode(s.buffer instanceof ArrayBuffer?s.subarray(l,d):s.slice(l,d));for(p="";l<d;){var h=s[l++];if(128&h){var g=63&s[l++];if((224&h)==192)p+=String.fromCharCode((31&h)<<6|g);else{var b=63&s[l++];65536>(h=(240&h)==224?(15&h)<<12|g<<6|b:(7&h)<<18|g<<12|b<<6|63&s[l++])?p+=String.fromCharCode(h):(h-=65536,p+=String.fromCharCode(55296|h>>10,56320|1023&h))}}else p+=String.fromCharCode(h)}return p},dt=(s,l)=>(s>>>=0)?dd(Oe(),s,l):"";function pd(s,l,d){return u?tt(3,1,s,l,d):0}function fd(s,l){if(u)return tt(4,1,s,l)}var hd=s=>{for(var l=0,d=0;d<s.length;++d){var p=s.charCodeAt(d);127>=p?l++:2047>=p?l+=2:55296<=p&&57343>=p?(l+=4,++d):l+=3}return l},Jn=(s,l,d)=>{var p=Oe();if(l>>>=0,0<d){var h=l;d=l+d-1;for(var g=0;g<s.length;++g){var b=s.charCodeAt(g);if(55296<=b&&57343>=b&&(b=65536+((1023&b)<<10)|1023&s.charCodeAt(++g)),127>=b){if(l>=d)break;p[l++>>>0]=b}else{if(2047>=b){if(l+1>=d)break;p[l++>>>0]=192|b>>6}else{if(65535>=b){if(l+2>=d)break;p[l++>>>0]=224|b>>12}else{if(l+3>=d)break;p[l++>>>0]=240|b>>18,p[l++>>>0]=128|b>>12&63}p[l++>>>0]=128|b>>6&63}p[l++>>>0]=128|63&b}}p[l>>>0]=0,s=l-h}else s=0;return s};function md(s,l){if(u)return tt(5,1,s,l)}function gd(s,l,d){if(u)return tt(6,1,s,l,d)}function yd(s,l,d){return u?tt(7,1,s,l,d):0}function bd(s,l){if(u)return tt(8,1,s,l)}function _d(s,l,d){if(u)return tt(9,1,s,l,d)}function vd(s,l,d,p){if(u)return tt(10,1,s,l,d,p)}function wd(s,l,d,p){if(u)return tt(11,1,s,l,d,p)}function xd(s,l,d,p){if(u)return tt(12,1,s,l,d,p)}function Td(s){if(u)return tt(13,1,s)}function Id(s,l){if(u)return tt(14,1,s,l)}function Sd(s,l,d){if(u)return tt(15,1,s,l,d)}var $d,dn,oI=()=>tn(""),ur=s=>{for(var l="";Oe()[s>>>0];)l+=$d[Oe()[s++>>>0]];return l},bs={},_s={},iI={};function rn(s,l,d={}){return function(p,h,g={}){var b=h.name;if(!p)throw new dn(`type "${b}" must have a positive integer typeid pointer`);if(_s.hasOwnProperty(p)){if(g.pj)return;throw new dn(`Cannot register type '${b}' twice`)}_s[p]=h,delete iI[p],bs.hasOwnProperty(p)&&(h=bs[p],delete bs[p],h.forEach(v=>v()))}(s,l,d)}var Ad=(s,l,d)=>{switch(l){case 1:return d?p=>le()[p>>>0]:p=>Oe()[p>>>0];case 2:return d?p=>ct()[p>>>1>>>0]:p=>et()[p>>>1>>>0];case 4:return d?p=>K()[p>>>2>>>0]:p=>Y()[p>>>2>>>0];case 8:return d?p=>ee[p>>>3]:p=>ye[p>>>3];default:throw new TypeError(`invalid integer width (${l}): ${s}`)}};function aI(s,l,d){d>>>=0,rn(s>>>=0,{name:l=ur(l>>>0),fromWireType:p=>p,toWireType:function(p,h){if(typeof h!="bigint"&&typeof h!="number")throw h=h===null?"null":(p=typeof h)=="object"||p==="array"||p==="function"?h.toString():""+h,new TypeError(`Cannot convert "${h}" to ${this.name}`);return typeof h=="number"&&(h=BigInt(h)),h},$i:pn,readValueFromPointer:Ad(l,d,l.indexOf("u")==-1),aj:null})}var pn=8;function sI(s,l,d,p){rn(s>>>=0,{name:l=ur(l>>>0),fromWireType:function(h){return!!h},toWireType:function(h,g){return g?d:p},$i:pn,readValueFromPointer:function(h){return this.fromWireType(Oe()[h>>>0])},aj:null})}var vs=[],nn=[];function ws(s){9<(s>>>=0)&&--nn[s+1]==0&&(nn[s]=void 0,vs.push(s))}var Dt=s=>{if(!s)throw new dn("Cannot use deleted val. handle = "+s);return nn[s]},Mt=s=>{switch(s){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let l=vs.pop()||nn.length;return nn[l]=s,nn[l+1]=1,l}};function xs(s){return this.fromWireType(Y()[s>>>2>>>0])}var uI={name:"emscripten::val",fromWireType:s=>{var l=Dt(s);return ws(s),l},toWireType:(s,l)=>Mt(l),$i:pn,readValueFromPointer:xs,aj:null};function lI(s){return rn(s>>>0,uI)}var cI=(s,l)=>{switch(l){case 4:return function(d){return this.fromWireType(pe()[d>>>2>>>0])};case 8:return function(d){return this.fromWireType(Le()[d>>>3>>>0])};default:throw new TypeError(`invalid float width (${l}): ${s}`)}};function dI(s,l,d){d>>>=0,rn(s>>>=0,{name:l=ur(l>>>0),fromWireType:p=>p,toWireType:(p,h)=>h,$i:pn,readValueFromPointer:cI(l,d),aj:null})}function pI(s,l,d,p,h){if(s>>>=0,d>>>=0,l=ur(l>>>0),h===-1&&(h=4294967295),h=v=>v,p===0){var g=32-8*d;h=v=>v<<g>>>g}var b=l.includes("unsigned")?function(v,w){return w>>>0}:function(v,w){return w};rn(s,{name:l,fromWireType:h,toWireType:b,$i:pn,readValueFromPointer:Ad(l,d,p!==0),aj:null})}function fI(s,l,d){function p(g){var b=Y()[g>>>2>>>0];return g=Y()[g+4>>>2>>>0],new h(le().buffer,g,b)}var h=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][l];rn(s>>>=0,{name:d=ur(d>>>0),fromWireType:p,$i:pn,readValueFromPointer:p},{pj:!0})}function hI(s,l){rn(s>>>=0,{name:l=ur(l>>>0),fromWireType:function(d){for(var p,h=Y()[d>>>2>>>0],g=d+4,b=g,v=0;v<=h;++v){var w=g+v;v!=h&&Oe()[w>>>0]!=0||(b=dt(b,w-b),p===void 0?p=b:(p+=String.fromCharCode(0),p+=b),b=w+1)}return cr(d),p},toWireType:function(d,p){p instanceof ArrayBuffer&&(p=new Uint8Array(p));var h=typeof p=="string";if(!(h||p instanceof Uint8Array||p instanceof Uint8ClampedArray||p instanceof Int8Array))throw new dn("Cannot pass non-string to std::string");var g=h?hd(p):p.length,b=hi(4+g+1),v=b+4;if(Y()[b>>>2>>>0]=g,h)Jn(p,v,g+1);else if(h)for(h=0;h<g;++h){var w=p.charCodeAt(h);if(255<w)throw cr(b),new dn("String has UTF-16 code units that do not fit in 8 bits");Oe()[v+h>>>0]=w}else for(h=0;h<g;++h)Oe()[v+h>>>0]=p[h];return d!==null&&d.push(cr,b),b},$i:pn,readValueFromPointer:xs,aj(d){cr(d)}})}var Od=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,mI=(s,l)=>{for(var d=s>>1,p=d+l/2;!(d>=p)&&et()[d>>>0];)++d;if(32<(d<<=1)-s&&Od)return Od.decode(Oe().slice(s,d));for(d="",p=0;!(p>=l/2);++p){var h=ct()[s+2*p>>>1>>>0];if(h==0)break;d+=String.fromCharCode(h)}return d},gI=(s,l,d)=>{if(d??=2147483647,2>d)return 0;var p=l;d=(d-=2)<2*s.length?d/2:s.length;for(var h=0;h<d;++h){var g=s.charCodeAt(h);ct()[l>>>1>>>0]=g,l+=2}return ct()[l>>>1>>>0]=0,l-p},yI=s=>2*s.length,bI=(s,l)=>{for(var d=0,p="";!(d>=l/4);){var h=K()[s+4*d>>>2>>>0];if(h==0)break;++d,65536<=h?(h-=65536,p+=String.fromCharCode(55296|h>>10,56320|1023&h)):p+=String.fromCharCode(h)}return p},_I=(s,l,d)=>{if(l>>>=0,d??=2147483647,4>d)return 0;var p=l;d=p+d-4;for(var h=0;h<s.length;++h){var g=s.charCodeAt(h);if(55296<=g&&57343>=g&&(g=65536+((1023&g)<<10)|1023&s.charCodeAt(++h)),K()[l>>>2>>>0]=g,(l+=4)+4>d)break}return K()[l>>>2>>>0]=0,l-p},vI=s=>{for(var l=0,d=0;d<s.length;++d){var p=s.charCodeAt(d);55296<=p&&57343>=p&&++d,l+=4}return l};function wI(s,l,d){if(s>>>=0,l>>>=0,d=ur(d>>>=0),l===2)var p=mI,h=gI,g=yI,b=v=>et()[v>>>1>>>0];else l===4&&(p=bI,h=_I,g=vI,b=v=>Y()[v>>>2>>>0]);rn(s,{name:d,fromWireType:v=>{for(var w,S=Y()[v>>>2>>>0],P=v+4,D=0;D<=S;++D){var k=v+4+D*l;D!=S&&b(k)!=0||(P=p(P,k-P),w===void 0?w=P:(w+=String.fromCharCode(0),w+=P),P=k+l)}return cr(v),w},toWireType:(v,w)=>{if(typeof w!="string")throw new dn(`Cannot pass non-string to C++ string type ${d}`);var S=g(w),P=hi(4+S+l);return Y()[P>>>2>>>0]=S/l,h(w,P+4,S+l),v!==null&&v.push(cr,P),P},$i:pn,readValueFromPointer:xs,aj(v){cr(v)}})}function xI(s,l){rn(s>>>=0,{qj:!0,name:l=ur(l>>>0),$i:0,fromWireType:()=>{},toWireType:()=>{}})}function TI(s){Cs(s>>>0,!a,1,!i,131072,!1),id()}var Ts=s=>{if(!_e)try{if(s(),!(0<ln))try{u?Es(R):gs(R)}catch(l){l instanceof fs||l=="unwind"||x(0,l)}}catch(l){l instanceof fs||l=="unwind"||x(0,l)}};function Is(s){s>>>=0,typeof Atomics.Hj=="function"&&(Atomics.Hj(K(),s>>>2,s).value.then(ii),s+=128,Atomics.store(K(),s>>>2,1))}var ii=()=>{var s=fi();s&&(Is(s),Ts(op))};function II(s,l){(s>>>=0)==l>>>0?setTimeout(ii):u?postMessage({ej:s,Zi:"checkMailbox"}):(s=Pn[s])&&s.postMessage({Zi:"checkMailbox"})}var Ss=[];function SI(s,l,d,p,h){for(l>>>=0,p/=2,Ss.length=p,d=h>>>0>>>3,h=0;h<p;h++)Ss[h]=ee[d+2*h]?ee[d+2*h+1]:Le()[d+2*h+1>>>0];return(l?ps[l]:bS[s])(...Ss)}var $I=()=>{ln=0};function AI(s){s>>>=0,u?postMessage({Zi:"cleanupThread",Fj:s}):od(Pn[s])}function OI(s){}var ai=(s,l)=>{var d=_s[s];if(d===void 0)throw s=Jd(s),d=ur(s),cr(s),new dn(`${l} has unknown type ${d}`);return d},Pd=(s,l,d)=>{var p=[];return s=s.toWireType(p,d),p.length&&(Y()[l>>>2>>>0]=Mt(p)),s};function PI(s,l,d){return l>>>=0,d>>>=0,s=Dt(s>>>0),l=ai(l,"emval::as"),Pd(l,d,s)}function CI(s,l){return l>>>=0,s=Dt(s>>>0),(l=ai(l,"emval::as")).toWireType(null,s)}var si=s=>{try{s()}catch(l){tn(l)}},fn=0,lr=null,Cd=0,ui=[],Ed={},Dd={},EI=0,$s=null,DI=[];function kd(s){return function(l){if(!_e){if(fn===0){var d=!1,p=!1;l((h=0)=>{if(!_e&&(Cd=h,d=!0,p)){fn=2,si(()=>Gm(lr)),typeof MainLoop<"u"&&MainLoop.mj&&MainLoop.resume(),h=!1;try{var g=function(){var w=K()[lr+8>>>2>>>0];return w=N[Dd[w]],--ln,w()}()}catch(w){g=w,h=!0}var b=!1;if(!lr){var v=$s;v&&($s=null,(h?v.reject:v.resolve)(g),b=!0)}if(h&&!b)throw g}}),p=!0,d||(fn=1,lr=function(){var h=hi(65548),g=h+12;Y()[h>>>2>>>0]=g,Y()[h+4>>>2>>>0]=g+65536,g=ui[0];var b=Ed[g];return b===void 0&&(b=EI++,Ed[g]=b,Dd[b]=g),g=b,K()[h+8>>>2>>>0]=g,h}(),typeof MainLoop<"u"&&MainLoop.mj&&MainLoop.pause(),si(()=>Fm(lr)))}else fn===2?(fn=0,si(Um),cr(lr),lr=null,DI.forEach(Ts)):tn(`invalid state: ${fn}`);return Cd}}(l=>{s().then(l)})}function kI(s){return s>>>=0,kd(async()=>{var l=await Dt(s);return Mt(l)})}var li=[];function NI(s,l,d,p){return d>>>=0,p>>>=0,(s=li[s>>>0])(null,l=Dt(l>>>0),d,p)}var LI={},ci=s=>{var l=LI[s];return l===void 0?ur(s):l};function RI(s,l,d,p,h){return d>>>=0,p>>>=0,h>>>=0,(s=li[s>>>0])(l=Dt(l>>>0),l[d=ci(d)],p,h)}var Nd=()=>typeof globalThis=="object"?globalThis:Function("return this")();function zI(s){return(s>>>=0)==0?Mt(Nd()):(s=ci(s),Mt(Nd()[s]))}var MI=s=>{var l=li.length;return li.push(s),l},BI=(s,l)=>{for(var d=Array(s),p=0;p<s;++p)d[p]=ai(Y()[l+4*p>>>2>>>0],"parameter "+p);return d},Ld=(s,l)=>Object.defineProperty(l,"name",{value:s});function FI(s,l,d){var p=(l=BI(s,l>>>0)).shift();s--;var h=`return function (obj, func, destructorsRef, args) {
`,g=0,b=[];d===0&&b.push("obj");for(var v=["retType"],w=[p],S=0;S<s;++S)b.push("arg"+S),v.push("argType"+S),w.push(l[S]),h+=`  var arg${S} = argType${S}.readValueFromPointer(args${g?"+"+g:""});
`,g+=l[S].$i;return h+=`  var rv = ${d===1?"new func":"func.call"}(${b.join(", ")});
`,p.qj||(v.push("emval_returnValue"),w.push(Pd),h+=`  return emval_returnValue(retType, destructorsRef, rv);
`),v.push(h+`};
`),s=function(P){var D=Function;if(!(D instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof D} which is not a function`);var k=Ld(D.name||"unknownFunctionName",function(){});return k.prototype=D.prototype,k=new k,(P=D.apply(k,P))instanceof Object?P:k}(v)(...w),d=`methodCaller<(${l.map(P=>P.name).join(", ")}) => ${p.name}>`,MI(Ld(d,s))}function VI(s){return s=ci(s>>>0),Mt(t[s])}function GI(s,l){return l>>>=0,s=Dt(s>>>0),l=Dt(l),Mt(s[l])}function UI(s){9<(s>>>=0)&&(nn[s+1]+=1)}function jI(){return Mt([])}function WI(s){s=Dt(s>>>0);for(var l=Array(s.length),d=0;d<s.length;d++)l[d]=s[d];return Mt(l)}function HI(s){return Mt(ci(s>>>0))}function qI(){return Mt({})}function KI(s){for(var l=Dt(s>>>=0);l.length;){var d=l.pop();l.pop()(d)}ws(s)}function XI(s,l,d){l>>>=0,d>>>=0,s=Dt(s>>>0),l=Dt(l),d=Dt(d),s[l]=d}function YI(s,l){return l>>>=0,s=(s=ai(s>>>0,"_emval_take_value")).readValueFromPointer(l),Mt(s)}function ZI(s,l){s=-9007199254740992>s||9007199254740992<s?NaN:Number(s),l>>>=0,s=new Date(1e3*s),K()[l>>>2>>>0]=s.getUTCSeconds(),K()[l+4>>>2>>>0]=s.getUTCMinutes(),K()[l+8>>>2>>>0]=s.getUTCHours(),K()[l+12>>>2>>>0]=s.getUTCDate(),K()[l+16>>>2>>>0]=s.getUTCMonth(),K()[l+20>>>2>>>0]=s.getUTCFullYear()-1900,K()[l+24>>>2>>>0]=s.getUTCDay(),s=(s.getTime()-Date.UTC(s.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,K()[l+28>>>2>>>0]=s}var Rd=s=>s%4==0&&(s%100!=0||s%400==0),zd=[0,31,60,91,121,152,182,213,244,274,305,335],Md=[0,31,59,90,120,151,181,212,243,273,304,334];function JI(s,l){s=-9007199254740992>s||9007199254740992<s?NaN:Number(s),l>>>=0,s=new Date(1e3*s),K()[l>>>2>>>0]=s.getSeconds(),K()[l+4>>>2>>>0]=s.getMinutes(),K()[l+8>>>2>>>0]=s.getHours(),K()[l+12>>>2>>>0]=s.getDate(),K()[l+16>>>2>>>0]=s.getMonth(),K()[l+20>>>2>>>0]=s.getFullYear()-1900,K()[l+24>>>2>>>0]=s.getDay();var d=(Rd(s.getFullYear())?zd:Md)[s.getMonth()]+s.getDate()-1|0;K()[l+28>>>2>>>0]=d,K()[l+36>>>2>>>0]=-60*s.getTimezoneOffset(),d=new Date(s.getFullYear(),6,1).getTimezoneOffset();var p=new Date(s.getFullYear(),0,1).getTimezoneOffset();s=0|(d!=p&&s.getTimezoneOffset()==Math.min(p,d)),K()[l+32>>>2>>>0]=s}function QI(s){s>>>=0;var l=new Date(K()[s+20>>>2>>>0]+1900,K()[s+16>>>2>>>0],K()[s+12>>>2>>>0],K()[s+8>>>2>>>0],K()[s+4>>>2>>>0],K()[s>>>2>>>0],0),d=K()[s+32>>>2>>>0],p=l.getTimezoneOffset(),h=new Date(l.getFullYear(),6,1).getTimezoneOffset(),g=new Date(l.getFullYear(),0,1).getTimezoneOffset(),b=Math.min(g,h);return 0>d?K()[s+32>>>2>>>0]=+(h!=g&&b==p):0<d!=(b==p)&&(h=Math.max(g,h),l.setTime(l.getTime()+6e4*((0<d?b:h)-p))),K()[s+24>>>2>>>0]=l.getDay(),d=(Rd(l.getFullYear())?zd:Md)[l.getMonth()]+l.getDate()-1|0,K()[s+28>>>2>>>0]=d,K()[s>>>2>>>0]=l.getSeconds(),K()[s+4>>>2>>>0]=l.getMinutes(),K()[s+8>>>2>>>0]=l.getHours(),K()[s+12>>>2>>>0]=l.getDate(),K()[s+16>>>2>>>0]=l.getMonth(),K()[s+20>>>2>>>0]=l.getYear(),s=l.getTime(),BigInt(isNaN(s)?-1:s/1e3)}function Bd(s,l,d,p,h,g,b){return u?tt(16,1,s,l,d,p,h,g,b):-52}function Fd(s,l,d,p,h,g){if(u)return tt(17,1,s,l,d,p,h,g)}var To={},eS=()=>performance.timeOrigin+performance.now();function Vd(s,l){if(u)return tt(18,1,s,l);if(To[s]&&(clearTimeout(To[s].id),delete To[s]),!l)return 0;var d=setTimeout(()=>{delete To[s],Ts(()=>np(s,performance.timeOrigin+performance.now()))},l);return To[s]={id:d,Lj:l},0}function tS(s,l,d,p){s>>>=0,l>>>=0,d>>>=0,p>>>=0;var h=new Date().getFullYear(),g=new Date(h,0,1).getTimezoneOffset();h=new Date(h,6,1).getTimezoneOffset();var b=Math.max(g,h);Y()[s>>>2>>>0]=60*b,K()[l>>>2>>>0]=+(g!=h),s=(l=v=>{var w=Math.abs(v);return`UTC${0<=v?"-":"+"}${String(Math.floor(w/60)).padStart(2,"0")}${String(w%60).padStart(2,"0")}`})(g),l=l(h),h<g?(Jn(s,d,17),Jn(l,p,17)):(Jn(s,p,17),Jn(l,d,17))}var rS=()=>Date.now(),nS=1;function oS(s,l,d){if(!(0<=s&&3>=s))return 28;if(s===0)s=Date.now();else{if(!nS)return 52;s=performance.timeOrigin+performance.now()}return ee[d>>>0>>>3]=BigInt(Math.round(1e6*s)),0}var As=[],Gd=(s,l)=>{As.length=0;for(var d;d=Oe()[s++>>>0];){var p=d!=105;l+=(p&=d!=112)&&l%8?4:0,As.push(d==112?Y()[l>>>2>>>0]:d==106?ee[l>>>3]:d==105?K()[l>>>2>>>0]:Le()[l>>>3>>>0]),l+=p?8:4}return As};function iS(s,l,d){return s>>>=0,l=Gd(l>>>0,d>>>0),ps[s](...l)}function aS(s,l,d){return s>>>=0,l=Gd(l>>>0,d>>>0),ps[s](...l)}var sS=()=>{};function uS(s,l){return $(dt(s>>>0,l>>>0))}var lS=()=>{throw ln+=1,"unwind"};function cS(){return 4294901760}var dS=()=>navigator.hardwareConcurrency;function pS(){return tn("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function fS(s){s>>>=0;var l=Oe().length;if(s<=l||4294901760<s)return!1;for(var d=1;4>=d;d*=2){var p=l*(1+.2/d);p=Math.min(p,s+100663296);e:{p=(Math.min(4294901760,65536*Math.ceil(Math.max(s,p)/65536))-C.buffer.byteLength+65535)/65536|0;try{C.grow(p),Ue();var h=1;break e}catch{}h=void 0}if(h)return!0}return!1}var di=()=>(tn("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Qn={},Ud=s=>{s.forEach(l=>{var d=di();d&&(Qn[d]=l)})};function hS(){var s=Error().stack.toString().split(`
`);return s[0]=="Error"&&s.shift(),Ud(s),Qn.kj=di(),Qn.Bj=s,Qn.kj}function mS(s,l,d){if(s>>>=0,l>>>=0,Qn.kj==s)var p=Qn.Bj;else(p=Error().stack.toString().split(`
`))[0]=="Error"&&p.shift(),Ud(p);for(var h=3;p[h]&&di()!=s;)++h;for(s=0;s<d&&p[s+h];++s)K()[l+4*s>>>2>>>0]=di();return s}var Os,Ps={},jd=()=>{if(!Os){var s,l={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(s in Ps)Ps[s]===void 0?delete l[s]:l[s]=Ps[s];var d=[];for(s in l)d.push(`${s}=${l[s]}`);Os=d}return Os};function Wd(s,l){if(u)return tt(19,1,s,l);s>>>=0,l>>>=0;var d=0;return jd().forEach((p,h)=>{var g=l+d;for(h=Y()[s+4*h>>>2>>>0]=g,g=0;g<p.length;++g)le()[h++>>>0]=p.charCodeAt(g);le()[h>>>0]=0,d+=p.length+1}),0}function Hd(s,l){if(u)return tt(20,1,s,l);s>>>=0,l>>>=0;var d=jd();Y()[s>>>2>>>0]=d.length;var p=0;return d.forEach(h=>p+=h.length+1),Y()[l>>>2>>>0]=p,0}function qd(s){return u?tt(21,1,s):52}function Kd(s,l,d,p){return u?tt(22,1,s,l,d,p):52}function Xd(s,l,d,p){return u?tt(23,1,s,l,d,p):70}var gS=[null,[],[]];function Yd(s,l,d,p){if(u)return tt(24,1,s,l,d,p);l>>>=0,d>>>=0,p>>>=0;for(var h=0,g=0;g<d;g++){var b=Y()[l>>>2>>>0],v=Y()[l+4>>>2>>>0];l+=8;for(var w=0;w<v;w++){var S=Oe()[b+w>>>0],P=gS[s];S===0||S===10?((s===1?A:$)(dd(P)),P.length=0):P.push(S)}h+=v}return Y()[p>>>2>>>0]=h,0}function yS(s){return s>>>0}u||function(){for(var s=t.numThreads-1;s--;)sd();hs.unshift(()=>{On++,function(l){u?l():Promise.all(cn.map(ad)).then(l)}(()=>Jc())})}();for(var Zd=Array(256),pi=0;256>pi;++pi)Zd[pi]=String.fromCharCode(pi);$d=Zd,dn=t.BindingError=class extends Error{constructor(s){super(s),this.name="BindingError"}},t.InternalError=class extends Error{constructor(s){super(s),this.name="InternalError"}},nn.push(0,1,void 0,1,null,1,!0,1,!1,1),t.count_emval_handles=()=>nn.length/2-5-vs.length;var N,bS=[ms,rd,ud,pd,fd,md,gd,yd,bd,_d,vd,wd,xd,Td,Id,Sd,Bd,Fd,Vd,Wd,Hd,qd,Kd,Xd,Yd];(async function(){function s(p,h){return N=p.exports,N=function(){var g=N,b={};for(let[v,w]of Object.entries(g))b[v]=typeof w=="function"?(...S)=>{ui.push(v);try{return w(...S)}finally{_e||(ui.pop(),lr&&fn===1&&ui.length===0&&(fn=0,ln+=1,si(Vm),typeof Fibers<"u"&&Fibers.Mj()))}}:w;return b}(),N=function(){var g=N,b=w=>S=>w(S)>>>0,v=w=>()=>w()>>>0;return(g=Object.assign({},g)).pe=b(g.pe),g.Ue=v(g.Ue),g.We=b(g.We),g.jf=b(g.jf),g.kf=v(g.kf),g.of=b(g.of),g}(),nd.push(N.Xe),L=h,Jc(),N}On++;var l=Qc();if(t.instantiateWasm)return new Promise(p=>{t.instantiateWasm(l,(h,g)=>{s(h,g),p(h.exports)})});if(u)return new Promise(p=>{Xt=h=>{var g=new WebAssembly.Instance(h,Qc());p(s(g,h))}});vo??=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",T):T+"ort-wasm-simd-threaded.jsep.wasm":new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href;try{var d=await async function(p){var h=vo;if(!de&&typeof WebAssembly.instantiateStreaming=="function"&&!$e(h))try{var g=fetch(h,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(g,p)}catch(b){$(`wasm streaming compile failed: ${b}`),$("falling back to ArrayBuffer instantiation")}return async function(b,v){try{var w=await async function(S){if(!de)try{var P=await m(S);return new Uint8Array(P)}catch{}if(S==vo&&de)S=new Uint8Array(de);else{if(!y)throw"both async and sync fetching of the wasm failed";S=y(S)}return S}(b);return await WebAssembly.instantiate(w,v)}catch(S){$(`failed to asynchronously prepare wasm: ${S}`),tn(S)}}(h,p)}(l);return s(d.instance,d.module)}catch(p){return r(p),Promise.reject(p)}})();var Jd=s=>(Jd=N.pe)(s),Qd=()=>(Qd=N.qe)();t._OrtInit=(s,l)=>(t._OrtInit=N.re)(s,l),t._OrtGetLastError=(s,l)=>(t._OrtGetLastError=N.se)(s,l),t._OrtCreateSessionOptions=(s,l,d,p,h,g,b,v,w,S)=>(t._OrtCreateSessionOptions=N.te)(s,l,d,p,h,g,b,v,w,S),t._OrtAppendExecutionProvider=(s,l)=>(t._OrtAppendExecutionProvider=N.ue)(s,l),t._OrtAddFreeDimensionOverride=(s,l,d)=>(t._OrtAddFreeDimensionOverride=N.ve)(s,l,d),t._OrtAddSessionConfigEntry=(s,l,d)=>(t._OrtAddSessionConfigEntry=N.we)(s,l,d),t._OrtReleaseSessionOptions=s=>(t._OrtReleaseSessionOptions=N.xe)(s),t._OrtCreateSession=(s,l,d)=>(t._OrtCreateSession=N.ye)(s,l,d),t._OrtReleaseSession=s=>(t._OrtReleaseSession=N.ze)(s),t._OrtGetInputOutputCount=(s,l,d)=>(t._OrtGetInputOutputCount=N.Ae)(s,l,d),t._OrtGetInputName=(s,l)=>(t._OrtGetInputName=N.Be)(s,l),t._OrtGetOutputName=(s,l)=>(t._OrtGetOutputName=N.Ce)(s,l),t._OrtFree=s=>(t._OrtFree=N.De)(s),t._OrtCreateTensor=(s,l,d,p,h,g)=>(t._OrtCreateTensor=N.Ee)(s,l,d,p,h,g),t._OrtGetTensorData=(s,l,d,p,h)=>(t._OrtGetTensorData=N.Fe)(s,l,d,p,h),t._OrtReleaseTensor=s=>(t._OrtReleaseTensor=N.Ge)(s),t._OrtCreateRunOptions=(s,l,d,p)=>(t._OrtCreateRunOptions=N.He)(s,l,d,p),t._OrtAddRunConfigEntry=(s,l,d)=>(t._OrtAddRunConfigEntry=N.Ie)(s,l,d),t._OrtReleaseRunOptions=s=>(t._OrtReleaseRunOptions=N.Je)(s),t._OrtCreateBinding=s=>(t._OrtCreateBinding=N.Ke)(s),t._OrtBindInput=(s,l,d)=>(t._OrtBindInput=N.Le)(s,l,d),t._OrtBindOutput=(s,l,d,p)=>(t._OrtBindOutput=N.Me)(s,l,d,p),t._OrtClearBoundOutputs=s=>(t._OrtClearBoundOutputs=N.Ne)(s),t._OrtReleaseBinding=s=>(t._OrtReleaseBinding=N.Oe)(s),t._OrtRunWithBinding=(s,l,d,p,h)=>(t._OrtRunWithBinding=N.Pe)(s,l,d,p,h),t._OrtRun=(s,l,d,p,h,g,b,v)=>(t._OrtRun=N.Qe)(s,l,d,p,h,g,b,v),t._OrtEndProfiling=s=>(t._OrtEndProfiling=N.Re)(s),t._JsepOutput=(s,l,d)=>(t._JsepOutput=N.Se)(s,l,d),t._JsepGetNodeName=s=>(t._JsepGetNodeName=N.Te)(s);var fi=()=>(fi=N.Ue)(),cr=t._free=s=>(cr=t._free=N.Ve)(s),hi=t._malloc=s=>(hi=t._malloc=N.We)(s),Cs=(s,l,d,p,h,g)=>(Cs=N.Ze)(s,l,d,p,h,g),ep=()=>(ep=N._e)(),tp=(s,l,d,p,h)=>(tp=N.$e)(s,l,d,p,h),rp=s=>(rp=N.af)(s),Es=s=>(Es=N.bf)(s),np=(s,l)=>(np=N.cf)(s,l),op=()=>(op=N.df)(),G=(s,l)=>(G=N.ef)(s,l),Io=s=>(Io=N.ff)(s),ip=(s,l)=>(ip=N.gf)(s,l),B=s=>(B=N.hf)(s),Ds=s=>(Ds=N.jf)(s),F=()=>(F=N.kf)(),ap=s=>(ap=N.lf)(s),sp=s=>(sp=N.mf)(s),up=(s,l,d)=>(up=N.nf)(s,l,d),lp=s=>(lp=N.of)(s),cp=t.dynCall_vii=(s,l,d)=>(cp=t.dynCall_vii=N.pf)(s,l,d),dp=t.dynCall_iiii=(s,l,d,p)=>(dp=t.dynCall_iiii=N.qf)(s,l,d,p),pp=t.dynCall_iii=(s,l,d)=>(pp=t.dynCall_iii=N.rf)(s,l,d),ks=t.dynCall_ii=(s,l)=>(ks=t.dynCall_ii=N.sf)(s,l),fp=t.dynCall_iiiiiii=(s,l,d,p,h,g,b)=>(fp=t.dynCall_iiiiiii=N.tf)(s,l,d,p,h,g,b),hp=t.dynCall_vi=(s,l)=>(hp=t.dynCall_vi=N.uf)(s,l),mp=t.dynCall_v=s=>(mp=t.dynCall_v=N.vf)(s),gp=t.dynCall_iiiiii=(s,l,d,p,h,g)=>(gp=t.dynCall_iiiiii=N.wf)(s,l,d,p,h,g),yp=t.dynCall_iiij=(s,l,d,p)=>(yp=t.dynCall_iiij=N.xf)(s,l,d,p),bp=t.dynCall_iiiii=(s,l,d,p,h)=>(bp=t.dynCall_iiiii=N.yf)(s,l,d,p,h),_p=t.dynCall_viii=(s,l,d,p)=>(_p=t.dynCall_viii=N.zf)(s,l,d,p),vp=t.dynCall_viiiii=(s,l,d,p,h,g)=>(vp=t.dynCall_viiiii=N.Af)(s,l,d,p,h,g),wp=t.dynCall_viiii=(s,l,d,p,h)=>(wp=t.dynCall_viiii=N.Bf)(s,l,d,p,h),xp=t.dynCall_viiiiii=(s,l,d,p,h,g,b)=>(xp=t.dynCall_viiiiii=N.Cf)(s,l,d,p,h,g,b),Tp=t.dynCall_viiiiij=(s,l,d,p,h,g,b)=>(Tp=t.dynCall_viiiiij=N.Df)(s,l,d,p,h,g,b),Ip=t.dynCall_viiji=(s,l,d,p,h)=>(Ip=t.dynCall_viiji=N.Ef)(s,l,d,p,h),Sp=t.dynCall_viiiiiiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D)=>(Sp=t.dynCall_viiiiiiiiiii=N.Ff)(s,l,d,p,h,g,b,v,w,S,P,D),$p=t.dynCall_viiijjjii=(s,l,d,p,h,g,b,v,w)=>($p=t.dynCall_viiijjjii=N.Gf)(s,l,d,p,h,g,b,v,w),Ap=t.dynCall_iij=(s,l,d)=>(Ap=t.dynCall_iij=N.Hf)(s,l,d),Op=t.dynCall_iif=(s,l,d)=>(Op=t.dynCall_iif=N.If)(s,l,d),Pp=t.dynCall_iid=(s,l,d)=>(Pp=t.dynCall_iid=N.Jf)(s,l,d),Cp=t.dynCall_jii=(s,l,d)=>(Cp=t.dynCall_jii=N.Kf)(s,l,d),Ep=t.dynCall_i=s=>(Ep=t.dynCall_i=N.Lf)(s),Dp=t.dynCall_viiiiiiii=(s,l,d,p,h,g,b,v,w)=>(Dp=t.dynCall_viiiiiiii=N.Mf)(s,l,d,p,h,g,b,v,w),kp=t.dynCall_ji=(s,l)=>(kp=t.dynCall_ji=N.Nf)(s,l),Np=t.dynCall_viij=(s,l,d,p)=>(Np=t.dynCall_viij=N.Of)(s,l,d,p),Lp=t.dynCall_iiiiiiiiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k)=>(Lp=t.dynCall_iiiiiiiiiiiii=N.Pf)(s,l,d,p,h,g,b,v,w,S,P,D,k),Rp=t.dynCall_viiiiiiiiii=(s,l,d,p,h,g,b,v,w,S,P)=>(Rp=t.dynCall_viiiiiiiiii=N.Qf)(s,l,d,p,h,g,b,v,w,S,P),zp=t.dynCall_ij=(s,l)=>(zp=t.dynCall_ij=N.Rf)(s,l),Mp=t.dynCall_iiiiij=(s,l,d,p,h,g)=>(Mp=t.dynCall_iiiiij=N.Sf)(s,l,d,p,h,g),Bp=t.dynCall_j=s=>(Bp=t.dynCall_j=N.Tf)(s),Fp=t.dynCall_vij=(s,l,d)=>(Fp=t.dynCall_vij=N.Uf)(s,l,d),Vp=t.dynCall_iiiiiiii=(s,l,d,p,h,g,b,v)=>(Vp=t.dynCall_iiiiiiii=N.Vf)(s,l,d,p,h,g,b,v),Gp=t.dynCall_viijjjiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D)=>(Gp=t.dynCall_viijjjiiiiii=N.Wf)(s,l,d,p,h,g,b,v,w,S,P,D),Up=t.dynCall_viiiiiiiii=(s,l,d,p,h,g,b,v,w,S)=>(Up=t.dynCall_viiiiiiiii=N.Xf)(s,l,d,p,h,g,b,v,w,S),jp=t.dynCall_viiijiiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D)=>(jp=t.dynCall_viiijiiiiiii=N.Yf)(s,l,d,p,h,g,b,v,w,S,P,D),Wp=t.dynCall_viiiiiii=(s,l,d,p,h,g,b,v)=>(Wp=t.dynCall_viiiiiii=N.Zf)(s,l,d,p,h,g,b,v),Hp=t.dynCall_viiiiiiiiiiiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re)=>(Hp=t.dynCall_viiiiiiiiiiiiiiii=N._f)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re),qp=t.dynCall_iiiiiiiij=(s,l,d,p,h,g,b,v,w)=>(qp=t.dynCall_iiiiiiiij=N.$f)(s,l,d,p,h,g,b,v,w),Kp=t.dynCall_iiiiiiiii=(s,l,d,p,h,g,b,v,w)=>(Kp=t.dynCall_iiiiiiiii=N.ag)(s,l,d,p,h,g,b,v,w),Xp=t.dynCall_iiiiijiiiii=(s,l,d,p,h,g,b,v,w,S,P)=>(Xp=t.dynCall_iiiiijiiiii=N.bg)(s,l,d,p,h,g,b,v,w,S,P),Yp=t.dynCall_iiiiiiiiiii=(s,l,d,p,h,g,b,v,w,S,P)=>(Yp=t.dynCall_iiiiiiiiiii=N.cg)(s,l,d,p,h,g,b,v,w,S,P),Zp=t.dynCall_vijjjiiiiij=(s,l,d,p,h,g,b,v,w,S,P)=>(Zp=t.dynCall_vijjjiiiiij=N.dg)(s,l,d,p,h,g,b,v,w,S,P),Jp=t.dynCall_viijj=(s,l,d,p,h)=>(Jp=t.dynCall_viijj=N.eg)(s,l,d,p,h),Qp=t.dynCall_fi=(s,l)=>(Qp=t.dynCall_fi=N.fg)(s,l),ef=t.dynCall_fii=(s,l,d)=>(ef=t.dynCall_fii=N.gg)(s,l,d),tf=t.dynCall_di=(s,l)=>(tf=t.dynCall_di=N.hg)(s,l),rf=t.dynCall_dii=(s,l,d)=>(rf=t.dynCall_dii=N.ig)(s,l,d),nf=t.dynCall_vijj=(s,l,d,p)=>(nf=t.dynCall_vijj=N.jg)(s,l,d,p),of=t.dynCall_viji=(s,l,d,p)=>(of=t.dynCall_viji=N.kg)(s,l,d,p),af=t.dynCall_viijiii=(s,l,d,p,h,g,b)=>(af=t.dynCall_viijiii=N.lg)(s,l,d,p,h,g,b),sf=t.dynCall_iiiiiiiiii=(s,l,d,p,h,g,b,v,w,S)=>(sf=t.dynCall_iiiiiiiiii=N.mg)(s,l,d,p,h,g,b,v,w,S),uf=t.dynCall_viiij=(s,l,d,p,h)=>(uf=t.dynCall_viiij=N.ng)(s,l,d,p,h),lf=t.dynCall_vijji=(s,l,d,p,h)=>(lf=t.dynCall_vijji=N.og)(s,l,d,p,h),cf=t.dynCall_viid=(s,l,d,p)=>(cf=t.dynCall_viid=N.pg)(s,l,d,p),df=t.dynCall_vid=(s,l,d)=>(df=t.dynCall_vid=N.qg)(s,l,d),pf=t.dynCall_viffiii=(s,l,d,p,h,g,b)=>(pf=t.dynCall_viffiii=N.rg)(s,l,d,p,h,g,b),ff=t.dynCall_viifiii=(s,l,d,p,h,g,b)=>(ff=t.dynCall_viifiii=N.sg)(s,l,d,p,h,g,b),hf=t.dynCall_viiiiidiidi=(s,l,d,p,h,g,b,v,w,S,P)=>(hf=t.dynCall_viiiiidiidi=N.tg)(s,l,d,p,h,g,b,v,w,S,P),mf=t.dynCall_viiiiiiiiidi=(s,l,d,p,h,g,b,v,w,S,P,D)=>(mf=t.dynCall_viiiiiiiiidi=N.ug)(s,l,d,p,h,g,b,v,w,S,P,D),gf=t.dynCall_jiii=(s,l,d,p)=>(gf=t.dynCall_jiii=N.vg)(s,l,d,p),yf=t.dynCall_vjiiiiii=(s,l,d,p,h,g,b,v)=>(yf=t.dynCall_vjiiiiii=N.wg)(s,l,d,p,h,g,b,v),bf=t.dynCall_vijjiiiii=(s,l,d,p,h,g,b,v,w)=>(bf=t.dynCall_vijjiiiii=N.xg)(s,l,d,p,h,g,b,v,w),_f=t.dynCall_viiiiiiiiiiiiiifi=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re)=>(_f=t.dynCall_viiiiiiiiiiiiiifi=N.yg)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re),vf=t.dynCall_ijii=(s,l,d,p)=>(vf=t.dynCall_ijii=N.zg)(s,l,d,p),wf=t.dynCall_vijjjjjjjjjjjjji=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z)=>(wf=t.dynCall_vijjjjjjjjjjjjji=N.Ag)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z),xf=t.dynCall_viiiji=(s,l,d,p,h,g)=>(xf=t.dynCall_viiiji=N.Bg)(s,l,d,p,h,g),Tf=t.dynCall_vijjjiiji=(s,l,d,p,h,g,b,v,w)=>(Tf=t.dynCall_vijjjiiji=N.Cg)(s,l,d,p,h,g,b,v,w),If=t.dynCall_iiiijiiiiiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H)=>(If=t.dynCall_iiiijiiiiiiiiii=N.Dg)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H),Sf=t.dynCall_vj=(s,l)=>(Sf=t.dynCall_vj=N.Eg)(s,l),$f=t.dynCall_jjj=(s,l,d)=>($f=t.dynCall_jjj=N.Fg)(s,l,d),Af=t.dynCall_vfiii=(s,l,d,p,h)=>(Af=t.dynCall_vfiii=N.Gg)(s,l,d,p,h),Of=t.dynCall_viiiiff=(s,l,d,p,h,g,b)=>(Of=t.dynCall_viiiiff=N.Hg)(s,l,d,p,h,g,b),Pf=t.dynCall_viiiiiff=(s,l,d,p,h,g,b,v)=>(Pf=t.dynCall_viiiiiff=N.Ig)(s,l,d,p,h,g,b,v),Cf=t.dynCall_viiff=(s,l,d,p,h)=>(Cf=t.dynCall_viiff=N.Jg)(s,l,d,p,h),Ef=t.dynCall_viiiiiiiiifiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H)=>(Ef=t.dynCall_viiiiiiiiifiiii=N.Kg)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H),Df=t.dynCall_viiiiiiiijj=(s,l,d,p,h,g,b,v,w,S,P)=>(Df=t.dynCall_viiiiiiiijj=N.Lg)(s,l,d,p,h,g,b,v,w,S,P),kf=t.dynCall_iiiiiiiiiiiiiifii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re)=>(kf=t.dynCall_iiiiiiiiiiiiiifii=N.Mg)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re),Nf=t.dynCall_viiiiiiiiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V)=>(Nf=t.dynCall_viiiiiiiiiiiii=N.Ng)(s,l,d,p,h,g,b,v,w,S,P,D,k,V),Lf=t.dynCall_iiiiiiiiiiiiiiiiiiifii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be,at)=>(Lf=t.dynCall_iiiiiiiiiiiiiiiiiiifii=N.Og)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be,at),Rf=t.dynCall_vijjiiiiiii=(s,l,d,p,h,g,b,v,w,S,P)=>(Rf=t.dynCall_vijjiiiiiii=N.Pg)(s,l,d,p,h,g,b,v,w,S,P),zf=t.dynCall_iiiijjj=(s,l,d,p,h,g,b)=>(zf=t.dynCall_iiiijjj=N.Qg)(s,l,d,p,h,g,b),Mf=t.dynCall_iiijjj=(s,l,d,p,h,g)=>(Mf=t.dynCall_iiijjj=N.Rg)(s,l,d,p,h,g),Bf=t.dynCall_fffffff=(s,l,d,p,h,g,b)=>(Bf=t.dynCall_fffffff=N.Sg)(s,l,d,p,h,g,b),Ff=t.dynCall_viiiij=(s,l,d,p,h,g)=>(Ff=t.dynCall_viiiij=N.Tg)(s,l,d,p,h,g),Vf=t.dynCall_viiiiiijiifiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V)=>(Vf=t.dynCall_viiiiiijiifiii=N.Ug)(s,l,d,p,h,g,b,v,w,S,P,D,k,V),Gf=t.dynCall_vjjjjjjffjifiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce)=>(Gf=t.dynCall_vjjjjjjffjifiiiiii=N.Vg)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce),Uf=t.dynCall_viiiiiiffjifiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re)=>(Uf=t.dynCall_viiiiiiffjifiiiii=N.Wg)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re),jf=t.dynCall_viiiiiiffjfiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z)=>(jf=t.dynCall_viiiiiiffjfiiiii=N.Xg)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z),Wf=t.dynCall_viiiiiiffjiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H)=>(Wf=t.dynCall_viiiiiiffjiiiii=N.Yg)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H),Hf=t.dynCall_vjjjjjjjjfffjifiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be)=>(Hf=t.dynCall_vjjjjjjjjfffjifiiiiii=N.Zg)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be),qf=t.dynCall_vjjjjjjfffifijiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be)=>(qf=t.dynCall_vjjjjjjfffifijiiiii=N._g)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be),Kf=t.dynCall_vjjjjjjfffifiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce)=>(Kf=t.dynCall_vjjjjjjfffifiiiiii=N.$g)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce),Xf=t.dynCall_vjjjjjjjjfffiiifiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be)=>(Xf=t.dynCall_vjjjjjjjjfffiiifiiiii=N.ah)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be),Yf=t.dynCall_vijiiiiiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k)=>(Yf=t.dynCall_vijiiiiiiiiii=N.bh)(s,l,d,p,h,g,b,v,w,S,P,D,k),Zf=t.dynCall_vijjfffiii=(s,l,d,p,h,g,b,v,w,S)=>(Zf=t.dynCall_vijjfffiii=N.ch)(s,l,d,p,h,g,b,v,w,S),Jf=t.dynCall_jiijjiif=(s,l,d,p,h,g,b,v)=>(Jf=t.dynCall_jiijjiif=N.dh)(s,l,d,p,h,g,b,v),Qf=t.dynCall_vijjjjjjifiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H)=>(Qf=t.dynCall_vijjjjjjifiiiii=N.eh)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H),eh=t.dynCall_vjjjjjiiii=(s,l,d,p,h,g,b,v,w,S)=>(eh=t.dynCall_vjjjjjiiii=N.fh)(s,l,d,p,h,g,b,v,w,S),th=t.dynCall_vjjjjfiii=(s,l,d,p,h,g,b,v,w)=>(th=t.dynCall_vjjjjfiii=N.gh)(s,l,d,p,h,g,b,v,w),rh=t.dynCall_viiiiiijiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V)=>(rh=t.dynCall_viiiiiijiiiiii=N.hh)(s,l,d,p,h,g,b,v,w,S,P,D,k,V),nh=t.dynCall_vijjii=(s,l,d,p,h,g)=>(nh=t.dynCall_vijjii=N.ih)(s,l,d,p,h,g),oh=t.dynCall_viiiiijjiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k)=>(oh=t.dynCall_viiiiijjiiiii=N.jh)(s,l,d,p,h,g,b,v,w,S,P,D,k),ih=t.dynCall_iiiiiji=(s,l,d,p,h,g,b)=>(ih=t.dynCall_iiiiiji=N.kh)(s,l,d,p,h,g,b),ah=t.dynCall_iiiiji=(s,l,d,p,h,g)=>(ah=t.dynCall_iiiiji=N.lh)(s,l,d,p,h,g),sh=t.dynCall_viiiiijiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k)=>(sh=t.dynCall_viiiiijiiiiii=N.mh)(s,l,d,p,h,g,b,v,w,S,P,D,k),uh=t.dynCall_iiiiiiiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D)=>(uh=t.dynCall_iiiiiiiiiiii=N.nh)(s,l,d,p,h,g,b,v,w,S,P,D),lh=t.dynCall_viiijiiiiii=(s,l,d,p,h,g,b,v,w,S,P)=>(lh=t.dynCall_viiijiiiiii=N.oh)(s,l,d,p,h,g,b,v,w,S,P),ch=t.dynCall_viiiijii=(s,l,d,p,h,g,b,v)=>(ch=t.dynCall_viiiijii=N.ph)(s,l,d,p,h,g,b,v),dh=t.dynCall_viijjiii=(s,l,d,p,h,g,b,v)=>(dh=t.dynCall_viijjiii=N.qh)(s,l,d,p,h,g,b,v),ph=t.dynCall_viiiiiijii=(s,l,d,p,h,g,b,v,w,S)=>(ph=t.dynCall_viiiiiijii=N.rh)(s,l,d,p,h,g,b,v,w,S),fh=t.dynCall_viiiiijjji=(s,l,d,p,h,g,b,v,w,S)=>(fh=t.dynCall_viiiiijjji=N.sh)(s,l,d,p,h,g,b,v,w,S),hh=t.dynCall_vijiii=(s,l,d,p,h,g)=>(hh=t.dynCall_vijiii=N.th)(s,l,d,p,h,g),mh=t.dynCall_iiijiiii=(s,l,d,p,h,g,b,v)=>(mh=t.dynCall_iiijiiii=N.uh)(s,l,d,p,h,g,b,v),gh=t.dynCall_viiiiiijjiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V)=>(gh=t.dynCall_viiiiiijjiiiii=N.vh)(s,l,d,p,h,g,b,v,w,S,P,D,k,V),yh=t.dynCall_viiiiiiijiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H)=>(yh=t.dynCall_viiiiiiijiiiiii=N.wh)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H),bh=t.dynCall_viiiiiji=(s,l,d,p,h,g,b,v)=>(bh=t.dynCall_viiiiiji=N.xh)(s,l,d,p,h,g,b,v),_h=t.dynCall_vif=(s,l,d)=>(_h=t.dynCall_vif=N.yh)(s,l,d),vh=t.dynCall_viif=(s,l,d,p)=>(vh=t.dynCall_viif=N.zh)(s,l,d,p),wh=t.dynCall_fiif=(s,l,d,p)=>(wh=t.dynCall_fiif=N.Ah)(s,l,d,p),xh=t.dynCall_viijjjiii=(s,l,d,p,h,g,b,v,w)=>(xh=t.dynCall_viijjjiii=N.Bh)(s,l,d,p,h,g,b,v,w),Th=t.dynCall_viiiiiifiii=(s,l,d,p,h,g,b,v,w,S,P)=>(Th=t.dynCall_viiiiiifiii=N.Ch)(s,l,d,p,h,g,b,v,w,S,P),Ih=t.dynCall_viijji=(s,l,d,p,h,g)=>(Ih=t.dynCall_viijji=N.Dh)(s,l,d,p,h,g),Sh=t.dynCall_iiiiiiiiiiijijji=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z)=>(Sh=t.dynCall_iiiiiiiiiiijijji=N.Eh)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z),$h=t.dynCall_vijii=(s,l,d,p,h)=>($h=t.dynCall_vijii=N.Fh)(s,l,d,p,h),Ah=t.dynCall_jiijjiii=(s,l,d,p,h,g,b,v)=>(Ah=t.dynCall_jiijjiii=N.Gh)(s,l,d,p,h,g,b,v),Oh=t.dynCall_viifiifijjjii=(s,l,d,p,h,g,b,v,w,S,P,D,k)=>(Oh=t.dynCall_viifiifijjjii=N.Hh)(s,l,d,p,h,g,b,v,w,S,P,D,k),Ph=t.dynCall_viiiiiiiiiiiiiiiiiiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be,at,ht,Yt)=>(Ph=t.dynCall_viiiiiiiiiiiiiiiiiiiiiii=N.Ih)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be,at,ht,Yt),Ch=t.dynCall_viiiiifiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k)=>(Ch=t.dynCall_viiiiifiiiiii=N.Jh)(s,l,d,p,h,g,b,v,w,S,P,D,k),Eh=t.dynCall_vijjiiiiii=(s,l,d,p,h,g,b,v,w,S)=>(Eh=t.dynCall_vijjiiiiii=N.Kh)(s,l,d,p,h,g,b,v,w,S),Dh=t.dynCall_vijiiiiiiijjii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V)=>(Dh=t.dynCall_vijiiiiiiijjii=N.Lh)(s,l,d,p,h,g,b,v,w,S,P,D,k,V),kh=t.dynCall_viiiiiiiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k)=>(kh=t.dynCall_viiiiiiiiiiii=N.Mh)(s,l,d,p,h,g,b,v,w,S,P,D,k),Nh=t.dynCall_viiiiiiiiiiiiiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be)=>(Nh=t.dynCall_viiiiiiiiiiiiiiiiii=N.Nh)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be),Lh=t.dynCall_viiiiiiiiiiiiiiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke)=>(Lh=t.dynCall_viiiiiiiiiiiiiiiiiii=N.Oh)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke),Rh=t.dynCall_viiiiiiiiiiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z)=>(Rh=t.dynCall_viiiiiiiiiiiiiii=N.Ph)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z),zh=t.dynCall_viiiiiiiiiiiiiiiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be)=>(zh=t.dynCall_viiiiiiiiiiiiiiiiiiii=N.Qh)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be),Mh=t.dynCall_viiiijjj=(s,l,d,p,h,g,b,v)=>(Mh=t.dynCall_viiiijjj=N.Rh)(s,l,d,p,h,g,b,v),Bh=t.dynCall_iiiiid=(s,l,d,p,h,g)=>(Bh=t.dynCall_iiiiid=N.Sh)(s,l,d,p,h,g),Fh=t.dynCall_viiiiiiiiiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H)=>(Fh=t.dynCall_viiiiiiiiiiiiii=N.Th)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H),Vh=t.dynCall_viiiiiiijjj=(s,l,d,p,h,g,b,v,w,S,P)=>(Vh=t.dynCall_viiiiiiijjj=N.Uh)(s,l,d,p,h,g,b,v,w,S,P),Gh=t.dynCall_iiiiiiiiiiiiiiiiiiiifi=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be,at)=>(Gh=t.dynCall_iiiiiiiiiiiiiiiiiiiifi=N.Vh)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be,at),Uh=t.dynCall_viiijiiiiiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H)=>(Uh=t.dynCall_viiijiiiiiiiiii=N.Wh)(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H),jh=t.dynCall_viiiiif=(s,l,d,p,h,g,b)=>(jh=t.dynCall_viiiiif=N.Xh)(s,l,d,p,h,g,b),Wh=t.dynCall_viiif=(s,l,d,p,h)=>(Wh=t.dynCall_viiif=N.Yh)(s,l,d,p,h),Hh=t.dynCall_viiiiiiiiifi=(s,l,d,p,h,g,b,v,w,S,P,D)=>(Hh=t.dynCall_viiiiiiiiifi=N.Zh)(s,l,d,p,h,g,b,v,w,S,P,D),qh=t.dynCall_viiiiid=(s,l,d,p,h,g,b)=>(qh=t.dynCall_viiiiid=N._h)(s,l,d,p,h,g,b),Kh=t.dynCall_viiid=(s,l,d,p,h)=>(Kh=t.dynCall_viiid=N.$h)(s,l,d,p,h),Xh=t.dynCall_viiijiiiii=(s,l,d,p,h,g,b,v,w,S)=>(Xh=t.dynCall_viiijiiiii=N.ai)(s,l,d,p,h,g,b,v,w,S),Yh=t.dynCall_jj=(s,l)=>(Yh=t.dynCall_jj=N.bi)(s,l),Zh=t.dynCall_iiiijii=(s,l,d,p,h,g,b)=>(Zh=t.dynCall_iiiijii=N.ci)(s,l,d,p,h,g,b),Jh=t.dynCall_iiijii=(s,l,d,p,h,g)=>(Jh=t.dynCall_iiijii=N.di)(s,l,d,p,h,g),Qh=t.dynCall_viiiiji=(s,l,d,p,h,g,b)=>(Qh=t.dynCall_viiiiji=N.ei)(s,l,d,p,h,g,b),em=t.dynCall_iijjji=(s,l,d,p,h,g)=>(em=t.dynCall_iijjji=N.fi)(s,l,d,p,h,g),tm=t.dynCall_viijii=(s,l,d,p,h,g)=>(tm=t.dynCall_viijii=N.gi)(s,l,d,p,h,g),rm=t.dynCall_jiij=(s,l,d,p)=>(rm=t.dynCall_jiij=N.hi)(s,l,d,p),nm=t.dynCall_iijijjijiji=(s,l,d,p,h,g,b,v,w,S,P)=>(nm=t.dynCall_iijijjijiji=N.ii)(s,l,d,p,h,g,b,v,w,S,P),om=t.dynCall_iijijji=(s,l,d,p,h,g,b)=>(om=t.dynCall_iijijji=N.ji)(s,l,d,p,h,g,b),im=t.dynCall_ijijji=(s,l,d,p,h,g)=>(im=t.dynCall_ijijji=N.ki)(s,l,d,p,h,g),am=t.dynCall_iiiiiiij=(s,l,d,p,h,g,b,v)=>(am=t.dynCall_iiiiiiij=N.li)(s,l,d,p,h,g,b,v),sm=t.dynCall_viiijjiii=(s,l,d,p,h,g,b,v,w)=>(sm=t.dynCall_viiijjiii=N.mi)(s,l,d,p,h,g,b,v,w),um=t.dynCall_iiiiijji=(s,l,d,p,h,g,b,v)=>(um=t.dynCall_iiiiijji=N.ni)(s,l,d,p,h,g,b,v),lm=t.dynCall_iiiifi=(s,l,d,p,h,g)=>(lm=t.dynCall_iiiifi=N.oi)(s,l,d,p,h,g),cm=t.dynCall_iiiiiiiiijii=(s,l,d,p,h,g,b,v,w,S,P,D)=>(cm=t.dynCall_iiiiiiiiijii=N.pi)(s,l,d,p,h,g,b,v,w,S,P,D),dm=t.dynCall_iiiijjii=(s,l,d,p,h,g,b,v)=>(dm=t.dynCall_iiiijjii=N.qi)(s,l,d,p,h,g,b,v),pm=t.dynCall_iiiiiijjjii=(s,l,d,p,h,g,b,v,w,S,P)=>(pm=t.dynCall_iiiiiijjjii=N.ri)(s,l,d,p,h,g,b,v,w,S,P),fm=t.dynCall_iiijiii=(s,l,d,p,h,g,b)=>(fm=t.dynCall_iiijiii=N.si)(s,l,d,p,h,g,b),hm=t.dynCall_iiiiiiiijjjfi=(s,l,d,p,h,g,b,v,w,S,P,D,k)=>(hm=t.dynCall_iiiiiiiijjjfi=N.ti)(s,l,d,p,h,g,b,v,w,S,P,D,k),mm=t.dynCall_iijiiii=(s,l,d,p,h,g,b)=>(mm=t.dynCall_iijiiii=N.ui)(s,l,d,p,h,g,b),gm=t.dynCall_iijjjii=(s,l,d,p,h,g,b)=>(gm=t.dynCall_iijjjii=N.vi)(s,l,d,p,h,g,b),ym=t.dynCall_jij=(s,l,d)=>(ym=t.dynCall_jij=N.wi)(s,l,d),bm=t.dynCall_iiji=(s,l,d,p)=>(bm=t.dynCall_iiji=N.xi)(s,l,d,p),_m=t.dynCall_iiif=(s,l,d,p)=>(_m=t.dynCall_iiif=N.yi)(s,l,d,p),vm=t.dynCall_vidi=(s,l,d,p)=>(vm=t.dynCall_vidi=N.zi)(s,l,d,p),wm=t.dynCall_viiijiji=(s,l,d,p,h,g,b,v)=>(wm=t.dynCall_viiijiji=N.Ai)(s,l,d,p,h,g,b,v),xm=t.dynCall_viiijij=(s,l,d,p,h,g,b)=>(xm=t.dynCall_viiijij=N.Bi)(s,l,d,p,h,g,b),Tm=t.dynCall_vijjj=(s,l,d,p,h)=>(Tm=t.dynCall_vijjj=N.Ci)(s,l,d,p,h),Im=t.dynCall_vjiij=(s,l,d,p,h)=>(Im=t.dynCall_vjiij=N.Di)(s,l,d,p,h),Sm=t.dynCall_diii=(s,l,d,p)=>(Sm=t.dynCall_diii=N.Ei)(s,l,d,p),$m=t.dynCall_diiiii=(s,l,d,p,h,g)=>($m=t.dynCall_diiiii=N.Fi)(s,l,d,p,h,g),Am=t.dynCall_diiii=(s,l,d,p,h)=>(Am=t.dynCall_diiii=N.Gi)(s,l,d,p,h),Om=t.dynCall_ijiijji=(s,l,d,p,h,g,b)=>(Om=t.dynCall_ijiijji=N.Hi)(s,l,d,p,h,g,b),Pm=t.dynCall_viiijjiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D)=>(Pm=t.dynCall_viiijjiiiiii=N.Ii)(s,l,d,p,h,g,b,v,w,S,P,D),Cm=t.dynCall_viijjijjjjiii=(s,l,d,p,h,g,b,v,w,S,P,D,k)=>(Cm=t.dynCall_viijjijjjjiii=N.Ji)(s,l,d,p,h,g,b,v,w,S,P,D,k),Em=t.dynCall_ijiii=(s,l,d,p,h)=>(Em=t.dynCall_ijiii=N.Ki)(s,l,d,p,h),Dm=t.dynCall_ijiiiiji=(s,l,d,p,h,g,b,v)=>(Dm=t.dynCall_ijiiiiji=N.Li)(s,l,d,p,h,g,b,v),km=t.dynCall_ijiij=(s,l,d,p,h)=>(km=t.dynCall_ijiij=N.Mi)(s,l,d,p,h),Nm=t.dynCall_iiiij=(s,l,d,p,h)=>(Nm=t.dynCall_iiiij=N.Ni)(s,l,d,p,h),Lm=t.dynCall_viiijii=(s,l,d,p,h,g,b)=>(Lm=t.dynCall_viiijii=N.Oi)(s,l,d,p,h,g,b),Rm=t.dynCall_viijiiiiiiiiii=(s,l,d,p,h,g,b,v,w,S,P,D,k,V)=>(Rm=t.dynCall_viijiiiiiiiiii=N.Pi)(s,l,d,p,h,g,b,v,w,S,P,D,k,V),zm=t.dynCall_fiiii=(s,l,d,p,h)=>(zm=t.dynCall_fiiii=N.Qi)(s,l,d,p,h),Mm=t.dynCall_jfi=(s,l,d)=>(Mm=t.dynCall_jfi=N.Ri)(s,l,d),Bm=t.dynCall_fiii=(s,l,d,p)=>(Bm=t.dynCall_fiii=N.Si)(s,l,d,p),Fm=s=>(Fm=N.Ti)(s),Vm=()=>(Vm=N.Ui)(),Gm=s=>(Gm=N.Vi)(s),Um=()=>(Um=N.Wi)();function _S(s,l,d,p){var h=F();try{return dp(s,l,d,p)}catch(g){if(B(h),g!==g+0)throw g;G(1,0)}}function vS(s,l,d){var p=F();try{return pp(s,l,d)}catch(h){if(B(p),h!==h+0)throw h;G(1,0)}}function wS(s,l,d){var p=F();try{cp(s,l,d)}catch(h){if(B(p),h!==h+0)throw h;G(1,0)}}function xS(s,l){var d=F();try{return ks(s,l)}catch(p){if(B(d),p!==p+0)throw p;G(1,0)}}function TS(s,l){var d=F();try{hp(s,l)}catch(p){if(B(d),p!==p+0)throw p;G(1,0)}}function IS(s,l,d,p){var h=F();try{return yp(s,l,d,p)}catch(g){if(B(h),g!==g+0)throw g;G(1,0)}}function SS(s){var l=F();try{mp(s)}catch(d){if(B(l),d!==d+0)throw d;G(1,0)}}function $S(s,l,d,p,h,g,b){var v=F();try{return fp(s,l,d,p,h,g,b)}catch(w){if(B(v),w!==w+0)throw w;G(1,0)}}function AS(s,l,d,p,h,g){var b=F();try{return gp(s,l,d,p,h,g)}catch(v){if(B(b),v!==v+0)throw v;G(1,0)}}function OS(s,l,d,p,h){var g=F();try{return bp(s,l,d,p,h)}catch(b){if(B(g),b!==b+0)throw b;G(1,0)}}function PS(s,l,d,p){var h=F();try{_p(s,l,d,p)}catch(g){if(B(h),g!==g+0)throw g;G(1,0)}}function CS(s,l,d,p,h){var g=F();try{wp(s,l,d,p,h)}catch(b){if(B(g),b!==b+0)throw b;G(1,0)}}function ES(s,l,d,p,h,g,b){var v=F();try{xp(s,l,d,p,h,g,b)}catch(w){if(B(v),w!==w+0)throw w;G(1,0)}}function DS(s,l,d,p,h,g,b){var v=F();try{Tp(s,l,d,p,h,g,b)}catch(w){if(B(v),w!==w+0)throw w;G(1,0)}}function kS(s,l,d,p,h,g){var b=F();try{vp(s,l,d,p,h,g)}catch(v){if(B(b),v!==v+0)throw v;G(1,0)}}function NS(s,l,d,p,h,g,b,v,w,S,P,D){var k=F();try{Sp(s,l,d,p,h,g,b,v,w,S,P,D)}catch(V){if(B(k),V!==V+0)throw V;G(1,0)}}function LS(s,l,d){var p=F();try{return Ap(s,l,d)}catch(h){if(B(p),h!==h+0)throw h;G(1,0)}}function RS(s,l,d){var p=F();try{return Op(s,l,d)}catch(h){if(B(p),h!==h+0)throw h;G(1,0)}}function zS(s,l,d){var p=F();try{return Pp(s,l,d)}catch(h){if(B(p),h!==h+0)throw h;G(1,0)}}function MS(s,l,d){var p=F();try{return Cp(s,l,d)}catch(h){if(B(p),h!==h+0)throw h;return G(1,0),0n}}function BS(s,l,d,p,h,g,b,v,w){var S=F();try{Dp(s,l,d,p,h,g,b,v,w)}catch(P){if(B(S),P!==P+0)throw P;G(1,0)}}function FS(s){var l=F();try{return Ep(s)}catch(d){if(B(l),d!==d+0)throw d;G(1,0)}}function VS(s,l,d){var p=F();try{Fp(s,l,d)}catch(h){if(B(p),h!==h+0)throw h;G(1,0)}}function GS(s,l,d,p,h,g,b,v){var w=F();try{return Vp(s,l,d,p,h,g,b,v)}catch(S){if(B(w),S!==S+0)throw S;G(1,0)}}function US(s,l,d,p,h){var g=F();try{Ip(s,l,d,p,h)}catch(b){if(B(g),b!==b+0)throw b;G(1,0)}}function jS(s,l,d,p,h,g,b,v,w,S,P,D){var k=F();try{Gp(s,l,d,p,h,g,b,v,w,S,P,D)}catch(V){if(B(k),V!==V+0)throw V;G(1,0)}}function WS(s,l,d,p,h,g,b,v,w,S,P,D){var k=F();try{jp(s,l,d,p,h,g,b,v,w,S,P,D)}catch(V){if(B(k),V!==V+0)throw V;G(1,0)}}function HS(s,l,d,p,h,g,b,v,w,S,P,D,k){var V=F();try{return Lp(s,l,d,p,h,g,b,v,w,S,P,D,k)}catch(H){if(B(V),H!==H+0)throw H;G(1,0)}}function qS(s,l,d,p,h,g,b,v,w,S,P){var D=F();try{Rp(s,l,d,p,h,g,b,v,w,S,P)}catch(k){if(B(D),k!==k+0)throw k;G(1,0)}}function KS(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re){var ce=F();try{Hp(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re)}catch(be){if(B(ce),be!==be+0)throw be;G(1,0)}}function XS(s,l,d,p,h,g,b,v){var w=F();try{Wp(s,l,d,p,h,g,b,v)}catch(S){if(B(w),S!==S+0)throw S;G(1,0)}}function YS(s,l,d,p,h,g,b,v,w,S,P){var D=F();try{return Xp(s,l,d,p,h,g,b,v,w,S,P)}catch(k){if(B(D),k!==k+0)throw k;G(1,0)}}function ZS(s,l,d,p,h,g,b,v,w,S,P){var D=F();try{return Yp(s,l,d,p,h,g,b,v,w,S,P)}catch(k){if(B(D),k!==k+0)throw k;G(1,0)}}function JS(s,l,d,p,h,g,b,v,w,S,P){var D=F();try{Zp(s,l,d,p,h,g,b,v,w,S,P)}catch(k){if(B(D),k!==k+0)throw k;G(1,0)}}function QS(s,l,d,p){var h=F();try{Np(s,l,d,p)}catch(g){if(B(h),g!==g+0)throw g;G(1,0)}}function e$(s,l,d,p,h){var g=F();try{Jp(s,l,d,p,h)}catch(b){if(B(g),b!==b+0)throw b;G(1,0)}}function t$(s,l,d,p,h,g,b,v,w,S){var P=F();try{Up(s,l,d,p,h,g,b,v,w,S)}catch(D){if(B(P),D!==D+0)throw D;G(1,0)}}function r$(s,l,d,p,h,g,b,v,w){var S=F();try{return Kp(s,l,d,p,h,g,b,v,w)}catch(P){if(B(S),P!==P+0)throw P;G(1,0)}}function n$(s,l){var d=F();try{return Qp(s,l)}catch(p){if(B(d),p!==p+0)throw p;G(1,0)}}function o$(s,l){var d=F();try{return kp(s,l)}catch(p){if(B(d),p!==p+0)throw p;return G(1,0),0n}}function i$(s,l){var d=F();try{return tf(s,l)}catch(p){if(B(d),p!==p+0)throw p;G(1,0)}}function a$(s,l,d,p){var h=F();try{nf(s,l,d,p)}catch(g){if(B(h),g!==g+0)throw g;G(1,0)}}function s$(s,l,d,p,h,g,b){var v=F();try{Lm(s,l,d,p,h,g,b)}catch(w){if(B(v),w!==w+0)throw w;G(1,0)}}function u$(s,l,d,p,h,g,b){var v=F();try{af(s,l,d,p,h,g,b)}catch(w){if(B(v),w!==w+0)throw w;G(1,0)}}function l$(s,l,d,p,h,g,b,v){var w=F();try{ch(s,l,d,p,h,g,b,v)}catch(S){if(B(w),S!==S+0)throw S;G(1,0)}}function c$(s,l,d,p){var h=F();try{of(s,l,d,p)}catch(g){if(B(h),g!==g+0)throw g;G(1,0)}}function d$(s,l,d,p,h,g,b,v,w){var S=F();try{return qp(s,l,d,p,h,g,b,v,w)}catch(P){if(B(S),P!==P+0)throw P;G(1,0)}}function p$(s,l,d,p,h,g){var b=F();try{tm(s,l,d,p,h,g)}catch(v){if(B(b),v!==v+0)throw v;G(1,0)}}function f$(s,l,d,p,h,g,b,v,w,S){var P=F();try{return sf(s,l,d,p,h,g,b,v,w,S)}catch(D){if(B(P),D!==D+0)throw D;G(1,0)}}function h$(s,l,d,p,h){var g=F();try{uf(s,l,d,p,h)}catch(b){if(B(g),b!==b+0)throw b;G(1,0)}}function m$(s,l,d,p,h){var g=F();try{lf(s,l,d,p,h)}catch(b){if(B(g),b!==b+0)throw b;G(1,0)}}function g$(s,l,d,p){var h=F();try{cf(s,l,d,p)}catch(g){if(B(h),g!==g+0)throw g;G(1,0)}}function y$(s,l,d){var p=F();try{df(s,l,d)}catch(h){if(B(p),h!==h+0)throw h;G(1,0)}}function b$(s,l,d,p,h,g,b){var v=F();try{pf(s,l,d,p,h,g,b)}catch(w){if(B(v),w!==w+0)throw w;G(1,0)}}function _$(s,l,d,p,h,g,b,v,w){var S=F();try{$p(s,l,d,p,h,g,b,v,w)}catch(P){if(B(S),P!==P+0)throw P;G(1,0)}}function v$(s,l,d,p,h,g,b){var v=F();try{ff(s,l,d,p,h,g,b)}catch(w){if(B(v),w!==w+0)throw w;G(1,0)}}function w$(s,l,d,p,h,g,b,v,w,S,P){var D=F();try{hf(s,l,d,p,h,g,b,v,w,S,P)}catch(k){if(B(D),k!==k+0)throw k;G(1,0)}}function x$(s,l,d,p){var h=F();try{return gf(s,l,d,p)}catch(g){if(B(h),g!==g+0)throw g;return G(1,0),0n}}function T$(s,l,d,p,h,g,b,v){var w=F();try{yf(s,l,d,p,h,g,b,v)}catch(S){if(B(w),S!==S+0)throw S;G(1,0)}}function I$(s,l,d,p,h,g,b,v,w){var S=F();try{bf(s,l,d,p,h,g,b,v,w)}catch(P){if(B(S),P!==P+0)throw P;G(1,0)}}function S$(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re){var ce=F();try{_f(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re)}catch(be){if(B(ce),be!==be+0)throw be;G(1,0)}}function $$(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z){var re=F();try{wf(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z)}catch(ce){if(B(re),ce!==ce+0)throw ce;G(1,0)}}function A$(s,l,d,p,h,g){var b=F();try{xf(s,l,d,p,h,g)}catch(v){if(B(b),v!==v+0)throw v;G(1,0)}}function O$(s,l,d,p,h,g,b,v,w){var S=F();try{Tf(s,l,d,p,h,g,b,v,w)}catch(P){if(B(S),P!==P+0)throw P;G(1,0)}}function P$(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H){var Z=F();try{return If(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H)}catch(re){if(B(Z),re!==re+0)throw re;G(1,0)}}function C$(s,l){var d=F();try{Sf(s,l)}catch(p){if(B(d),p!==p+0)throw p;G(1,0)}}function E$(s,l,d){var p=F();try{return $f(s,l,d)}catch(h){if(B(p),h!==h+0)throw h;return G(1,0),0n}}function D$(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H){var Z=F();try{Ef(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H)}catch(re){if(B(Z),re!==re+0)throw re;G(1,0)}}function k$(s,l,d,p,h){var g=F();try{Af(s,l,d,p,h)}catch(b){if(B(g),b!==b+0)throw b;G(1,0)}}function N$(s,l,d,p,h,g,b){var v=F();try{Of(s,l,d,p,h,g,b)}catch(w){if(B(v),w!==w+0)throw w;G(1,0)}}function L$(s,l,d,p,h){var g=F();try{Cf(s,l,d,p,h)}catch(b){if(B(g),b!==b+0)throw b;G(1,0)}}function R$(s,l,d,p,h,g,b,v){var w=F();try{Pf(s,l,d,p,h,g,b,v)}catch(S){if(B(w),S!==S+0)throw S;G(1,0)}}function z$(s,l,d,p,h,g,b,v,w,S,P){var D=F();try{Df(s,l,d,p,h,g,b,v,w,S,P)}catch(k){if(B(D),k!==k+0)throw k;G(1,0)}}function M$(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re){var ce=F();try{return kf(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re)}catch(be){if(B(ce),be!==be+0)throw be;G(1,0)}}function B$(s,l,d,p,h,g,b,v,w,S,P,D,k,V){var H=F();try{Nf(s,l,d,p,h,g,b,v,w,S,P,D,k,V)}catch(Z){if(B(H),Z!==Z+0)throw Z;G(1,0)}}function F$(s,l){var d=F();try{return zp(s,l)}catch(p){if(B(d),p!==p+0)throw p;G(1,0)}}function V$(s,l,d,p,h){var g=F();try{return zm(s,l,d,p,h)}catch(b){if(B(g),b!==b+0)throw b;G(1,0)}}function G$(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be,at){var ht=F();try{return Lf(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be,at)}catch(Yt){if(B(ht),Yt!==Yt+0)throw Yt;G(1,0)}}function U$(s,l,d,p,h,g,b,v,w,S,P){var D=F();try{Rf(s,l,d,p,h,g,b,v,w,S,P)}catch(k){if(B(D),k!==k+0)throw k;G(1,0)}}function j$(s,l,d,p,h,g,b){var v=F();try{return zf(s,l,d,p,h,g,b)}catch(w){if(B(v),w!==w+0)throw w;G(1,0)}}function W$(s,l,d,p,h,g){var b=F();try{return Mf(s,l,d,p,h,g)}catch(v){if(B(b),v!==v+0)throw v;G(1,0)}}function H$(s,l,d,p,h,g){var b=F();try{Ff(s,l,d,p,h,g)}catch(v){if(B(b),v!==v+0)throw v;G(1,0)}}function q$(s,l,d,p,h,g,b,v,w,S,P,D,k,V){var H=F();try{Vf(s,l,d,p,h,g,b,v,w,S,P,D,k,V)}catch(Z){if(B(H),Z!==Z+0)throw Z;G(1,0)}}function K$(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce){var be=F();try{Gf(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce)}catch(ke){if(B(be),ke!==ke+0)throw ke;G(1,0)}}function X$(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re){var ce=F();try{Uf(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re)}catch(be){if(B(ce),be!==be+0)throw be;G(1,0)}}function Y$(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z){var re=F();try{jf(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z)}catch(ce){if(B(re),ce!==ce+0)throw ce;G(1,0)}}function Z$(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H){var Z=F();try{Wf(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H)}catch(re){if(B(Z),re!==re+0)throw re;G(1,0)}}function J$(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be){var at=F();try{Hf(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be)}catch(ht){if(B(at),ht!==ht+0)throw ht;G(1,0)}}function Q$(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be){var ke=F();try{qf(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be)}catch(Be){if(B(ke),Be!==Be+0)throw Be;G(1,0)}}function eA(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce){var be=F();try{Kf(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce)}catch(ke){if(B(be),ke!==ke+0)throw ke;G(1,0)}}function tA(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be){var at=F();try{Xf(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be)}catch(ht){if(B(at),ht!==ht+0)throw ht;G(1,0)}}function rA(s,l,d,p,h,g,b,v,w,S,P,D,k){var V=F();try{Yf(s,l,d,p,h,g,b,v,w,S,P,D,k)}catch(H){if(B(V),H!==H+0)throw H;G(1,0)}}function nA(s,l,d,p,h,g,b,v,w,S){var P=F();try{Zf(s,l,d,p,h,g,b,v,w,S)}catch(D){if(B(P),D!==D+0)throw D;G(1,0)}}function oA(s,l,d,p,h,g,b,v){var w=F();try{return Jf(s,l,d,p,h,g,b,v)}catch(S){if(B(w),S!==S+0)throw S;return G(1,0),0n}}function iA(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H){var Z=F();try{Qf(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H)}catch(re){if(B(Z),re!==re+0)throw re;G(1,0)}}function aA(s,l,d,p,h,g,b,v,w,S){var P=F();try{eh(s,l,d,p,h,g,b,v,w,S)}catch(D){if(B(P),D!==D+0)throw D;G(1,0)}}function sA(s,l,d,p,h,g,b,v,w){var S=F();try{th(s,l,d,p,h,g,b,v,w)}catch(P){if(B(S),P!==P+0)throw P;G(1,0)}}function uA(s,l,d,p,h,g,b){var v=F();try{return Bf(s,l,d,p,h,g,b)}catch(w){if(B(v),w!==w+0)throw w;G(1,0)}}function lA(s,l,d){var p=F();try{return Mm(s,l,d)}catch(h){if(B(p),h!==h+0)throw h;return G(1,0),0n}}function cA(s,l,d,p,h,g,b,v,w,S,P,D,k,V){var H=F();try{rh(s,l,d,p,h,g,b,v,w,S,P,D,k,V)}catch(Z){if(B(H),Z!==Z+0)throw Z;G(1,0)}}function dA(s,l,d,p,h,g,b,v,w,S,P,D,k){var V=F();try{oh(s,l,d,p,h,g,b,v,w,S,P,D,k)}catch(H){if(B(V),H!==H+0)throw H;G(1,0)}}function pA(s,l,d,p,h,g,b){var v=F();try{return ih(s,l,d,p,h,g,b)}catch(w){if(B(v),w!==w+0)throw w;G(1,0)}}function fA(s,l,d,p,h,g){var b=F();try{return ah(s,l,d,p,h,g)}catch(v){if(B(b),v!==v+0)throw v;G(1,0)}}function hA(s,l,d,p,h,g,b,v,w,S,P,D,k){var V=F();try{sh(s,l,d,p,h,g,b,v,w,S,P,D,k)}catch(H){if(B(V),H!==H+0)throw H;G(1,0)}}function mA(s,l,d,p,h,g,b,v,w,S,P,D){var k=F();try{return uh(s,l,d,p,h,g,b,v,w,S,P,D)}catch(V){if(B(k),V!==V+0)throw V;G(1,0)}}function gA(s,l,d,p,h,g){var b=F();try{nh(s,l,d,p,h,g)}catch(v){if(B(b),v!==v+0)throw v;G(1,0)}}function yA(s,l,d,p,h,g,b,v,w,S,P){var D=F();try{lh(s,l,d,p,h,g,b,v,w,S,P)}catch(k){if(B(D),k!==k+0)throw k;G(1,0)}}function bA(s,l,d,p,h,g,b,v){var w=F();try{dh(s,l,d,p,h,g,b,v)}catch(S){if(B(w),S!==S+0)throw S;G(1,0)}}function _A(s,l,d,p,h,g,b,v,w,S){var P=F();try{ph(s,l,d,p,h,g,b,v,w,S)}catch(D){if(B(P),D!==D+0)throw D;G(1,0)}}function vA(s,l,d,p){var h=F();try{return vf(s,l,d,p)}catch(g){if(B(h),g!==g+0)throw g;G(1,0)}}function wA(s,l,d,p,h,g,b,v,w,S){var P=F();try{fh(s,l,d,p,h,g,b,v,w,S)}catch(D){if(B(P),D!==D+0)throw D;G(1,0)}}function xA(s,l,d,p,h,g){var b=F();try{hh(s,l,d,p,h,g)}catch(v){if(B(b),v!==v+0)throw v;G(1,0)}}function TA(s,l,d,p,h,g,b,v){var w=F();try{return mh(s,l,d,p,h,g,b,v)}catch(S){if(B(w),S!==S+0)throw S;G(1,0)}}function IA(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H){var Z=F();try{Fh(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H)}catch(re){if(B(Z),re!==re+0)throw re;G(1,0)}}function SA(s,l,d,p,h,g,b,v,w,S,P,D,k,V){var H=F();try{gh(s,l,d,p,h,g,b,v,w,S,P,D,k,V)}catch(Z){if(B(H),Z!==Z+0)throw Z;G(1,0)}}function $A(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H){var Z=F();try{yh(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H)}catch(re){if(B(Z),re!==re+0)throw re;G(1,0)}}function AA(s,l,d,p,h,g,b,v){var w=F();try{bh(s,l,d,p,h,g,b,v)}catch(S){if(B(w),S!==S+0)throw S;G(1,0)}}function OA(s,l,d){var p=F();try{_h(s,l,d)}catch(h){if(B(p),h!==h+0)throw h;G(1,0)}}function PA(s,l,d,p){var h=F();try{return wh(s,l,d,p)}catch(g){if(B(h),g!==g+0)throw g;G(1,0)}}function CA(s,l,d){var p=F();try{return rf(s,l,d)}catch(h){if(B(p),h!==h+0)throw h;G(1,0)}}function EA(s,l,d,p,h,g,b,v,w){var S=F();try{xh(s,l,d,p,h,g,b,v,w)}catch(P){if(B(S),P!==P+0)throw P;G(1,0)}}function DA(s,l,d,p,h,g,b,v,w,S,P){var D=F();try{Th(s,l,d,p,h,g,b,v,w,S,P)}catch(k){if(B(D),k!==k+0)throw k;G(1,0)}}function kA(s,l,d,p,h,g){var b=F();try{Ih(s,l,d,p,h,g)}catch(v){if(B(b),v!==v+0)throw v;G(1,0)}}function NA(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z){var re=F();try{return Sh(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z)}catch(ce){if(B(re),ce!==ce+0)throw ce;G(1,0)}}function LA(s,l,d,p,h){var g=F();try{$h(s,l,d,p,h)}catch(b){if(B(g),b!==b+0)throw b;G(1,0)}}function RA(s,l,d,p,h,g,b,v){var w=F();try{return Ah(s,l,d,p,h,g,b,v)}catch(S){if(B(w),S!==S+0)throw S;return G(1,0),0n}}function zA(s,l,d,p,h,g,b,v,w,S,P,D,k){var V=F();try{Oh(s,l,d,p,h,g,b,v,w,S,P,D,k)}catch(H){if(B(V),H!==H+0)throw H;G(1,0)}}function MA(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be,at,ht,Yt){var XO=F();try{Ph(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be,at,ht,Yt)}catch(Ns){if(B(XO),Ns!==Ns+0)throw Ns;G(1,0)}}function BA(s,l,d,p,h,g,b,v,w,S,P,D,k){var V=F();try{Ch(s,l,d,p,h,g,b,v,w,S,P,D,k)}catch(H){if(B(V),H!==H+0)throw H;G(1,0)}}function FA(s,l,d,p,h,g,b,v,w,S){var P=F();try{Eh(s,l,d,p,h,g,b,v,w,S)}catch(D){if(B(P),D!==D+0)throw D;G(1,0)}}function VA(s,l,d,p,h,g,b,v,w,S,P,D,k,V){var H=F();try{Dh(s,l,d,p,h,g,b,v,w,S,P,D,k,V)}catch(Z){if(B(H),Z!==Z+0)throw Z;G(1,0)}}function GA(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be){var at=F();try{zh(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be)}catch(ht){if(B(at),ht!==ht+0)throw ht;G(1,0)}}function UA(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke){var Be=F();try{Lh(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke)}catch(at){if(B(Be),at!==at+0)throw at;G(1,0)}}function jA(s,l,d,p,h,g,b,v,w,S,P,D,k){var V=F();try{kh(s,l,d,p,h,g,b,v,w,S,P,D,k)}catch(H){if(B(V),H!==H+0)throw H;G(1,0)}}function WA(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be){var ke=F();try{Nh(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be)}catch(Be){if(B(ke),Be!==Be+0)throw Be;G(1,0)}}function HA(s,l,d,p,h,g,b,v){var w=F();try{Mh(s,l,d,p,h,g,b,v)}catch(S){if(B(w),S!==S+0)throw S;G(1,0)}}function qA(s,l,d,p,h,g,b,v,w,S,P){var D=F();try{Vh(s,l,d,p,h,g,b,v,w,S,P)}catch(k){if(B(D),k!==k+0)throw k;G(1,0)}}function KA(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be,at){var ht=F();try{return Gh(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z,re,ce,be,ke,Be,at)}catch(Yt){if(B(ht),Yt!==Yt+0)throw Yt;G(1,0)}}function XA(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H){var Z=F();try{Uh(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H)}catch(re){if(B(Z),re!==re+0)throw re;G(1,0)}}function YA(s,l,d,p,h,g,b){var v=F();try{jh(s,l,d,p,h,g,b)}catch(w){if(B(v),w!==w+0)throw w;G(1,0)}}function ZA(s,l,d,p,h){var g=F();try{Wh(s,l,d,p,h)}catch(b){if(B(g),b!==b+0)throw b;G(1,0)}}function JA(s,l,d,p,h,g,b,v,w,S,P,D){var k=F();try{Hh(s,l,d,p,h,g,b,v,w,S,P,D)}catch(V){if(B(k),V!==V+0)throw V;G(1,0)}}function QA(s,l,d,p,h,g,b){var v=F();try{qh(s,l,d,p,h,g,b)}catch(w){if(B(v),w!==w+0)throw w;G(1,0)}}function eO(s,l,d,p,h){var g=F();try{Kh(s,l,d,p,h)}catch(b){if(B(g),b!==b+0)throw b;G(1,0)}}function tO(s,l,d,p,h,g,b,v,w,S,P,D){var k=F();try{mf(s,l,d,p,h,g,b,v,w,S,P,D)}catch(V){if(B(k),V!==V+0)throw V;G(1,0)}}function rO(s,l,d,p,h,g,b,v,w,S){var P=F();try{Xh(s,l,d,p,h,g,b,v,w,S)}catch(D){if(B(P),D!==D+0)throw D;G(1,0)}}function nO(s,l,d,p,h,g,b,v,w,S,P,D,k,V){var H=F();try{Rm(s,l,d,p,h,g,b,v,w,S,P,D,k,V)}catch(Z){if(B(H),Z!==Z+0)throw Z;G(1,0)}}function oO(s,l,d,p,h,g){var b=F();try{return Jh(s,l,d,p,h,g)}catch(v){if(B(b),v!==v+0)throw v;G(1,0)}}function iO(s,l,d,p){var h=F();try{return rm(s,l,d,p)}catch(g){if(B(h),g!==g+0)throw g;return G(1,0),0n}}function aO(s,l,d,p,h,g,b){var v=F();try{Qh(s,l,d,p,h,g,b)}catch(w){if(B(v),w!==w+0)throw w;G(1,0)}}function sO(s,l,d,p,h,g){var b=F();try{return em(s,l,d,p,h,g)}catch(v){if(B(b),v!==v+0)throw v;G(1,0)}}function uO(s,l,d,p,h,g,b,v,w,S,P){var D=F();try{return nm(s,l,d,p,h,g,b,v,w,S,P)}catch(k){if(B(D),k!==k+0)throw k;G(1,0)}}function lO(s,l,d,p,h,g,b){var v=F();try{return om(s,l,d,p,h,g,b)}catch(w){if(B(v),w!==w+0)throw w;G(1,0)}}function cO(s,l,d,p,h,g){var b=F();try{return im(s,l,d,p,h,g)}catch(v){if(B(b),v!==v+0)throw v;G(1,0)}}function dO(s,l){var d=F();try{return Yh(s,l)}catch(p){if(B(d),p!==p+0)throw p;return G(1,0),0n}}function pO(s,l,d,p,h,g,b){var v=F();try{return Zh(s,l,d,p,h,g,b)}catch(w){if(B(v),w!==w+0)throw w;G(1,0)}}function fO(s,l,d,p,h,g,b,v){var w=F();try{return am(s,l,d,p,h,g,b,v)}catch(S){if(B(w),S!==S+0)throw S;G(1,0)}}function hO(s,l,d,p,h,g,b,v,w){var S=F();try{sm(s,l,d,p,h,g,b,v,w)}catch(P){if(B(S),P!==P+0)throw P;G(1,0)}}function mO(s,l,d,p){var h=F();try{vh(s,l,d,p)}catch(g){if(B(h),g!==g+0)throw g;G(1,0)}}function gO(s,l,d,p,h,g,b,v){var w=F();try{return um(s,l,d,p,h,g,b,v)}catch(S){if(B(w),S!==S+0)throw S;G(1,0)}}function yO(s,l,d,p,h,g){var b=F();try{return lm(s,l,d,p,h,g)}catch(v){if(B(b),v!==v+0)throw v;G(1,0)}}function bO(s,l,d,p,h,g,b,v,w,S,P,D){var k=F();try{return cm(s,l,d,p,h,g,b,v,w,S,P,D)}catch(V){if(B(k),V!==V+0)throw V;G(1,0)}}function _O(s,l,d,p,h,g,b,v){var w=F();try{return dm(s,l,d,p,h,g,b,v)}catch(S){if(B(w),S!==S+0)throw S;G(1,0)}}function vO(s,l,d,p,h,g,b,v,w,S,P){var D=F();try{return pm(s,l,d,p,h,g,b,v,w,S,P)}catch(k){if(B(D),k!==k+0)throw k;G(1,0)}}function wO(s,l,d,p,h,g,b){var v=F();try{return fm(s,l,d,p,h,g,b)}catch(w){if(B(v),w!==w+0)throw w;G(1,0)}}function xO(s,l,d,p,h,g,b,v,w,S,P,D,k){var V=F();try{return hm(s,l,d,p,h,g,b,v,w,S,P,D,k)}catch(H){if(B(V),H!==H+0)throw H;G(1,0)}}function TO(s,l,d,p,h,g,b){var v=F();try{return mm(s,l,d,p,h,g,b)}catch(w){if(B(v),w!==w+0)throw w;G(1,0)}}function IO(s,l,d,p,h,g,b){var v=F();try{return gm(s,l,d,p,h,g,b)}catch(w){if(B(v),w!==w+0)throw w;G(1,0)}}function SO(s,l,d){var p=F();try{return ym(s,l,d)}catch(h){if(B(p),h!==h+0)throw h;return G(1,0),0n}}function $O(s,l,d,p){var h=F();try{return bm(s,l,d,p)}catch(g){if(B(h),g!==g+0)throw g;G(1,0)}}function AO(s,l,d,p){var h=F();try{vm(s,l,d,p)}catch(g){if(B(h),g!==g+0)throw g;G(1,0)}}function OO(s,l,d,p,h,g,b,v){var w=F();try{wm(s,l,d,p,h,g,b,v)}catch(S){if(B(w),S!==S+0)throw S;G(1,0)}}function PO(s,l,d,p,h,g,b){var v=F();try{xm(s,l,d,p,h,g,b)}catch(w){if(B(v),w!==w+0)throw w;G(1,0)}}function CO(s,l,d,p,h){var g=F();try{Tm(s,l,d,p,h)}catch(b){if(B(g),b!==b+0)throw b;G(1,0)}}function EO(s,l,d,p){var h=F();try{return _m(s,l,d,p)}catch(g){if(B(h),g!==g+0)throw g;G(1,0)}}function DO(s,l,d,p){var h=F();try{return Bm(s,l,d,p)}catch(g){if(B(h),g!==g+0)throw g;G(1,0)}}function kO(s,l,d,p,h){var g=F();try{Im(s,l,d,p,h)}catch(b){if(B(g),b!==b+0)throw b;G(1,0)}}function NO(s,l,d,p){var h=F();try{return Sm(s,l,d,p)}catch(g){if(B(h),g!==g+0)throw g;G(1,0)}}function LO(s,l,d,p,h,g){var b=F();try{return $m(s,l,d,p,h,g)}catch(v){if(B(b),v!==v+0)throw v;G(1,0)}}function RO(s,l,d,p,h){var g=F();try{return Am(s,l,d,p,h)}catch(b){if(B(g),b!==b+0)throw b;G(1,0)}}function zO(s,l,d,p,h,g,b){var v=F();try{return Om(s,l,d,p,h,g,b)}catch(w){if(B(v),w!==w+0)throw w;G(1,0)}}function MO(s,l,d,p,h,g,b,v,w,S,P,D){var k=F();try{Pm(s,l,d,p,h,g,b,v,w,S,P,D)}catch(V){if(B(k),V!==V+0)throw V;G(1,0)}}function BO(s,l,d,p,h){var g=F();try{return Em(s,l,d,p,h)}catch(b){if(B(g),b!==b+0)throw b;G(1,0)}}function FO(s,l,d,p,h,g,b,v,w,S,P,D,k){var V=F();try{Cm(s,l,d,p,h,g,b,v,w,S,P,D,k)}catch(H){if(B(V),H!==H+0)throw H;G(1,0)}}function VO(s,l,d,p,h,g,b,v){var w=F();try{return Dm(s,l,d,p,h,g,b,v)}catch(S){if(B(w),S!==S+0)throw S;G(1,0)}}function GO(s,l,d,p,h){var g=F();try{return Nm(s,l,d,p,h)}catch(b){if(B(g),b!==b+0)throw b;G(1,0)}}function UO(s,l,d,p,h){var g=F();try{return km(s,l,d,p,h)}catch(b){if(B(g),b!==b+0)throw b;G(1,0)}}function jO(s){var l=F();try{return Bp(s)}catch(d){if(B(l),d!==d+0)throw d;return G(1,0),0n}}function WO(s,l,d,p,h,g){var b=F();try{return Mp(s,l,d,p,h,g)}catch(v){if(B(b),v!==v+0)throw v;G(1,0)}}function HO(s,l,d,p,h,g){var b=F();try{return Bh(s,l,d,p,h,g)}catch(v){if(B(b),v!==v+0)throw v;G(1,0)}}function qO(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z){var re=F();try{Rh(s,l,d,p,h,g,b,v,w,S,P,D,k,V,H,Z)}catch(ce){if(B(re),ce!==ce+0)throw ce;G(1,0)}}function KO(s,l,d){var p=F();try{return ef(s,l,d)}catch(h){if(B(p),h!==h+0)throw h;G(1,0)}}return t.stackSave=()=>F(),t.stackRestore=s=>B(s),t.stackAlloc=s=>Ds(s),t.setValue=function(s,l,d="i8"){switch(d.endsWith("*")&&(d="*"),d){case"i1":case"i8":le()[s>>>0]=l;break;case"i16":ct()[s>>>1>>>0]=l;break;case"i32":K()[s>>>2>>>0]=l;break;case"i64":ee[s>>>3]=BigInt(l);break;case"float":pe()[s>>>2>>>0]=l;break;case"double":Le()[s>>>3>>>0]=l;break;case"*":Y()[s>>>2>>>0]=l;break;default:tn(`invalid type for setValue: ${d}`)}},t.getValue=function(s,l="i8"){switch(l.endsWith("*")&&(l="*"),l){case"i1":case"i8":return le()[s>>>0];case"i16":return ct()[s>>>1>>>0];case"i32":return K()[s>>>2>>>0];case"i64":return ee[s>>>3];case"float":return pe()[s>>>2>>>0];case"double":return Le()[s>>>3>>>0];case"*":return Y()[s>>>2>>>0];default:tn(`invalid type for getValue: ${l}`)}},t.UTF8ToString=dt,t.stringToUTF8=Jn,t.lengthBytesUTF8=hd,function s(){if(0<On)wo=s;else if(u)e(t),sr();else{for(;0<hs.length;)hs.shift()(t);0<On?wo=s:(t.calledRun=!0,_e||(sr(),e(t)))}}(),t.PTR_SIZE=4,o}),Z4=tw,J4=globalThis.self?.name?.startsWith("em-pthread");J4&&tw()});var aw,Q4,zt,sw,pc,eN,tN,uw,rN,ow,lw,iw,cw,xa=j(()=>{"use strict";wa();aw=!1||typeof location>"u"?void 0:location.origin,Q4=()=>{if(!!1)return import.meta.url?.startsWith("file:")?new URL(new URL("ort.all.bundle.min.mjs",import.meta.url).href,aw).href:import.meta.url},zt=Q4(),sw=()=>{if(zt&&!zt.startsWith("blob:"))return zt.substring(0,zt.lastIndexOf("/")+1)},pc=(n,e)=>{try{let r=e??zt;return(r?new URL(n,r):new URL(n)).origin===aw}catch{return!1}},eN=(n,e)=>{let r=e??zt;try{return(r?new URL(n,r):new URL(n)).href}catch{return}},tN=(n,e)=>`${e??"./"}${n}`,uw=async n=>{let r=await(await fetch(n,{credentials:"same-origin"})).blob();return URL.createObjectURL(r)},rN=async n=>(await import(/*webpackIgnore:true*/n)).default,ow=(ew(),So(Qv)).default,lw=async()=>{if(!zt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(pc(zt))return[void 0,ow()];let n=await uw(zt);return[n,ow(n)]},iw=(nw(),So(rw)).default,cw=async(n,e,r)=>{if(!n&&!e&&iw&&zt&&pc(zt))return[void 0,iw];{let t="ort-wasm-simd-threaded.jsep.mjs",o=n??eN(t,e),i=!!1&&r&&o&&!pc(o,e),a=i?await uw(o):o??tN(t,e);return[i?a:void 0,await rN(a)]}}});var fc,hc,Ea,dw,nN,oN,Ta,it,Tn=j(()=>{"use strict";xa();hc=!1,Ea=!1,dw=!1,nN=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},oN=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Ta=async n=>{if(hc)return Promise.resolve();if(Ea)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(dw)throw new Error("previous call to 'initializeWebAssembly()' failed.");Ea=!0;let e=n.initTimeout,r=n.numThreads;if(!oN())throw new Error("WebAssembly SIMD is not supported in the current environment.");let t=nN();r>1&&!t&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),n.numThreads=r=1);let o=n.wasmPaths,i=typeof o=="string"?o:void 0,a=o?.mjs,u=a?.href??a,c=o?.wasm,f=c?.href??c,m=n.wasmBinary,[y,_]=await cw(u,i,r>1),x=!1,T=[];if(e>0&&T.push(new Promise(I=>{setTimeout(()=>{x=!0,I()},e)})),T.push(new Promise((I,O)=>{let A={numThreads:r};if(m)A.wasmBinary=m;else if(f||i)A.locateFile=$=>f??i+$;else if(u&&u.indexOf("blob:")!==0)A.locateFile=$=>new URL($,u).href;else if(y){let $=sw();$&&(A.locateFile=C=>$+C)}_(A).then($=>{Ea=!1,hc=!0,fc=$,I(),y&&URL.revokeObjectURL(y)},$=>{Ea=!1,dw=!0,O($)})})),await Promise.race(T),x)throw new Error(`WebAssembly backend initializing failed due to timeout: ${e}ms`)},it=()=>{if(hc&&fc)return fc;throw new Error("WebAssembly is not initialized yet.")}});var mt,qo,ze,Da=j(()=>{"use strict";Tn();mt=(n,e)=>{let r=it(),t=r.lengthBytesUTF8(n)+1,o=r._malloc(t);return r.stringToUTF8(n,o,t),e.push(o),o},qo=(n,e,r,t)=>{if(typeof n=="object"&&n!==null){if(r.has(n))throw new Error("Circular reference in options");r.add(n)}Object.entries(n).forEach(([o,i])=>{let a=e?e+o:o;if(typeof i=="object")qo(i,a+".",r,t);else if(typeof i=="string"||typeof i=="number")t(a,i.toString());else if(typeof i=="boolean")t(a,i?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof i}`)})},ze=n=>{let e=it(),r=e.stackSave();try{let t=e.PTR_SIZE,o=e.stackAlloc(2*t);e._OrtGetLastError(o,o+t);let i=Number(e.getValue(o,t===4?"i32":"i64")),a=e.getValue(o+t,"*"),u=a?e.UTF8ToString(a):"";throw new Error(`${n} ERROR_CODE: ${i}, ERROR_MESSAGE: ${u}`)}finally{e.stackRestore(r)}}});var pw,fw=j(()=>{"use strict";Tn();Da();pw=n=>{let e=it(),r=0,t=[],o=n||{};try{if(n?.logSeverityLevel===void 0)o.logSeverityLevel=2;else if(typeof n.logSeverityLevel!="number"||!Number.isInteger(n.logSeverityLevel)||n.logSeverityLevel<0||n.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${n.logSeverityLevel}`);if(n?.logVerbosityLevel===void 0)o.logVerbosityLevel=0;else if(typeof n.logVerbosityLevel!="number"||!Number.isInteger(n.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${n.logVerbosityLevel}`);n?.terminate===void 0&&(o.terminate=!1);let i=0;return n?.tag!==void 0&&(i=mt(n.tag,t)),r=e._OrtCreateRunOptions(o.logSeverityLevel,o.logVerbosityLevel,!!o.terminate,i),r===0&&ze("Can't create run options."),n?.extra!==void 0&&qo(n.extra,"",new WeakSet,(a,u)=>{let c=mt(a,t),f=mt(u,t);e._OrtAddRunConfigEntry(r,c,f)!==0&&ze(`Can't set a run config entry: ${a} - ${u}.`)}),[r,t]}catch(i){throw r!==0&&e._OrtReleaseRunOptions(r),t.forEach(a=>e._free(a)),i}}});var iN,aN,sN,uN,hw,mw=j(()=>{"use strict";Tn();Da();iN=n=>{switch(n){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${n}`)}},aN=n=>{switch(n){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${n}`)}},sN=n=>{n.extra||(n.extra={}),n.extra.session||(n.extra.session={});let e=n.extra.session;e.use_ort_model_bytes_directly||(e.use_ort_model_bytes_directly="1"),n.executionProviders&&n.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(n.enableMemPattern=!1)},uN=(n,e,r)=>{for(let t of e){let o=typeof t=="string"?t:t.name;switch(o){case"webnn":if(o="WEBNN",typeof t!="string"){let u=t?.deviceType;if(u){let c=mt("deviceType",r),f=mt(u,r);it()._OrtAddSessionConfigEntry(n,c,f)!==0&&ze(`Can't set a session config entry: 'deviceType' - ${u}.`)}}break;case"webgpu":if(o="JS",typeof t!="string"){let a=t;if(a?.preferredLayout){if(a.preferredLayout!=="NCHW"&&a.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${a.preferredLayout}`);let u=mt("preferredLayout",r),c=mt(a.preferredLayout,r);it()._OrtAddSessionConfigEntry(n,u,c)!==0&&ze(`Can't set a session config entry: 'preferredLayout' - ${a.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${o}`)}let i=mt(o,r);it()._OrtAppendExecutionProvider(n,i)!==0&&ze(`Can't append execution provider: ${o}.`)}},hw=n=>{let e=it(),r=0,t=[],o=n||{};sN(o);try{let i=iN(o.graphOptimizationLevel??"all"),a=aN(o.executionMode??"sequential"),u=typeof o.logId=="string"?mt(o.logId,t):0,c=o.logSeverityLevel??2;if(!Number.isInteger(c)||c<0||c>4)throw new Error(`log serverity level is not valid: ${c}`);let f=o.logVerbosityLevel??0;if(!Number.isInteger(f)||f<0||f>4)throw new Error(`log verbosity level is not valid: ${f}`);let m=typeof o.optimizedModelFilePath=="string"?mt(o.optimizedModelFilePath,t):0;if(r=e._OrtCreateSessionOptions(i,!!o.enableCpuMemArena,!!o.enableMemPattern,a,!!o.enableProfiling,0,u,c,f,m),r===0&&ze("Can't create session options."),o.executionProviders&&uN(r,o.executionProviders,t),o.enableGraphCapture!==void 0){if(typeof o.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${o.enableGraphCapture}`);let y=mt("enableGraphCapture",t),_=mt(o.enableGraphCapture.toString(),t);e._OrtAddSessionConfigEntry(r,y,_)!==0&&ze(`Can't set a session config entry: 'enableGraphCapture' - ${o.enableGraphCapture}.`)}if(o.freeDimensionOverrides)for(let[y,_]of Object.entries(o.freeDimensionOverrides)){if(typeof y!="string")throw new Error(`free dimension override name must be a string: ${y}`);if(typeof _!="number"||!Number.isInteger(_)||_<0)throw new Error(`free dimension override value must be a non-negative integer: ${_}`);let x=mt(y,t);e._OrtAddFreeDimensionOverride(r,x,_)!==0&&ze(`Can't set a free dimension override: ${y} - ${_}.`)}return o.extra!==void 0&&qo(o.extra,"",new WeakSet,(y,_)=>{let x=mt(y,t),T=mt(_,t);e._OrtAddSessionConfigEntry(r,x,T)!==0&&ze(`Can't set a session config entry: ${y} - ${_}.`)}),[r,t]}catch(i){throw r!==0&&e._OrtReleaseSessionOptions(r)!==0&&ze("Can't release session options."),t.forEach(a=>e._free(a)),i}}});var ho,In,Sn,ka,Ko,Na,La,mc,ve=j(()=>{"use strict";ho=n=>{switch(n){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${n}`)}},In=n=>{switch(n){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${n}`)}},Sn=(n,e)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][n],t=typeof e=="number"?e:e.reduce((o,i)=>o*i,1);return r>0?Math.ceil(t*r):void 0},ka=n=>{switch(n){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${n}`)}},Ko=n=>{switch(n){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${n}`)}},Na=n=>n==="float32"||n==="float16"||n==="int32"||n==="int64"||n==="uint32"||n==="uint8"||n==="bool"||n==="uint4"||n==="int4",La=n=>n==="float32"||n==="float16"||n==="int32"||n==="int64"||n==="uint32"||n==="uint64"||n==="int8"||n==="uint8"||n==="bool"||n==="uint4"||n==="int4",mc=n=>{switch(n){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${n}`)}}});var Xo,gc=j(()=>{"use strict";wa();Xo=async n=>{if(typeof n=="string")if(!1)try{let{readFile:e}=Ls("node:fs/promises");return new Uint8Array(await e(n))}catch(e){if(e.code==="ERR_FS_FILE_TOO_LARGE"){let{createReadStream:r}=Ls("node:fs"),t=r(n),o=[];for await(let i of t)o.push(i);return new Uint8Array(Buffer.concat(o))}throw e}else{let e=await fetch(n);if(!e.ok)throw new Error(`failed to load external data file: ${n}`);let r=e.headers.get("Content-Length"),t=r?parseInt(r,10):0;if(t<1073741824)return new Uint8Array(await e.arrayBuffer());{if(!e.body)throw new Error(`failed to load external data file: ${n}, no response body.`);let o=e.body.getReader(),i;try{i=new ArrayBuffer(t)}catch(u){if(u instanceof RangeError){let c=Math.ceil(t/65536);i=new WebAssembly.Memory({initial:c,maximum:c}).buffer}else throw u}let a=0;for(;;){let{done:u,value:c}=await o.read();if(u)break;let f=c.byteLength;new Uint8Array(i,a,f).set(c),a+=f}return new Uint8Array(i,0,t)}}else return n instanceof Blob?new Uint8Array(await n.arrayBuffer()):n instanceof Uint8Array?n:new Uint8Array(n)}});var lN,cN,gw,yw,Ra,dN,Ce,Kr=j(()=>{"use strict";ve();lN=["V","I","W","E","F"],cN=(n,e)=>{console.log(`[${lN[n]},${new Date().toISOString()}]${e}`)},Ra=(n,e)=>{gw=n,yw=e},dN=(n,e)=>{let r=Ko(n),t=Ko(gw);r>=t&&cN(r,typeof e=="function"?e():e)},Ce=(...n)=>{yw&&dN(...n)}});var za,yc=j(()=>{"use strict";ve();za=(n,e)=>new(ka(e))(n)});var Ma=j(()=>{"use strict"});var bw,bc,_c,pN,fN,_w,wc,vc,ww,xw=j(()=>{"use strict";Kr();Ma();bw=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),bc=[],_c=n=>Math.ceil(Number(n)/16)*16,pN=n=>{for(let e=0;e<bc.length;e++){let r=bc[e];if(n<=r)return r}return Math.ceil(n/16)*16},fN=1,_w=()=>fN++,wc=async(n,e,r,t)=>{let o=_c(r),i=n.device.createBuffer({size:o,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=n.getCommandEncoder();n.endComputePass(),a.copyBufferToBuffer(e,0,i,0,o),n.flush(),await i.mapAsync(GPUMapMode.READ);let u=i.getMappedRange();if(t){let c=t();return c.set(new Uint8Array(u,0,r)),c}else return new Uint8Array(u.slice(0,r))}finally{i.destroy()}},vc=class{constructor(e){this.backend=e;this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[r]of bw)bc.push(r),this.freeBuffers.set(r,[]),this.freeUniformBuffers.set(r,[]);this.sessionCount=0}upload(e,r){let t=r.buffer,o=r.byteOffset,i=r.byteLength,a=_c(i),u=this.storageCache.get(e);if(!u)throw new Error("gpu data for uploading does not exist");if(Number(u.originalSize)!==i)throw new Error(`inconsistent data size. gpu data size=${u.originalSize}, data size=${i}`);let c=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),f=c.getMappedRange();new Uint8Array(f).set(new Uint8Array(t,o,i)),c.unmap();let m=this.backend.device.createCommandEncoder();m.copyBufferToBuffer(c,0,u.gpuData.buffer,0,a),this.backend.device.queue.submit([m.finish()]),c.destroy(),Ce("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,r){let t=this.storageCache.get(e);if(!t)throw new Error("source gpu data for memcpy does not exist");let o=this.storageCache.get(r);if(!o)throw new Error("destination gpu data for memcpy does not exist");if(t.originalSize!==o.originalSize)throw new Error("inconsistent source and destination gpu data size");let i=_c(t.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(t.gpuData.buffer,0,o.gpuData.buffer,0,i)}registerExternalBuffer(e,r,t){let o;if(t){if(o=t[0],e===t[1])return Ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${r}) => id=${o}, buffer is the same, skip.`),o;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else o=_w();return this.storageCache.set(o,{gpuData:{id:o,type:0,buffer:e},originalSize:r}),Ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${r}) => id=${o}, registered.`),o}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ce("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,r=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let t=pN(e),o,i=(r&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(r&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let f=(i?this.freeBuffers:this.freeUniformBuffers).get(t);f?f.length>0?o=f.pop():o=this.backend.device.createBuffer({size:t,usage:r}):o=this.backend.device.createBuffer({size:t,usage:r})}else o=this.backend.device.createBuffer({size:t,usage:r});let u={id:_w(),type:0,buffer:o};return this.storageCache.set(u.id,{gpuData:u,originalSize:Number(e)}),Ce("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${u.id}`),u}get(e){return this.storageCache.get(e)?.gpuData}release(e){let r=typeof e=="bigint"?Number(e):e,t=this.storageCache.get(r);if(!t){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Ce("verbose",()=>`[WebGPU] GpuDataManager.release(id=${r}), gpuDataId=${t.gpuData.id}`),this.storageCache.delete(r),this.buffersPending.push(t.gpuData.buffer),t.originalSize}async download(e,r){let t=this.storageCache.get(Number(e));if(!t)throw new Error("data does not exist");await wc(this.backend,t.gpuData.buffer,t.originalSize,r)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let r=bw.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let t=this.freeBuffers.get(e.size)||[];r===void 0||t.length>=r?e.destroy():t.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let t=this.freeUniformBuffers.get(e.size)||[];r===void 0||t.length>=r?e.destroy():t.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let r of this.buffersPending)e.push(r);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let r=this.capturedPendingBuffers.get(e);r&&(r.forEach(t=>{t.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Ce("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(t=>{t.gpuData.buffer.destroy()}),this.storageCache=new Map)}},ww=(...n)=>new vc(...n)});var xc,we,ot=j(()=>{"use strict";xc=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},we=n=>new xc(n)});var Tc,Xr,U,Hn,Ba,Tw,Iw,Ie=j(()=>{"use strict";Tc=class{static calcMatMulShape(e,r){return e[1]!==r[0]?void 0:[e[0],r[1]]}},Xr=class{static calcShape(e,r,t=!1){let o=e.length,i=r.length;if(o===0)return r;if(i===0)return e;let a=Math.max(e.length,r.length),u=new Array(a);if(t){if(o<2||i<2)return;let c=Tc.calcMatMulShape([e[o-2],e[o-1]],[r[i-2],r[i-1]]);if(c===void 0)return;[u[a-2],u[a-1]]=c}for(let c=t?3:1;c<=a;c++){let f=o-c<0?1:e[o-c],m=i-c<0?1:r[i-c];if(f!==m&&f>1&&m>1)return;let y=Math.max(f,m);if(f&&m)u[a-c]=Math.max(f,m);else{if(y>1)return;u[a-c]=0}}return u}static isValidBroadcast(e,r){let t=e.length,o=r.length;if(t>o)return!1;for(let i=1;i<=t;i++)if(e[t-i]!==1&&e[t-i]!==r[o-i])return!1;return!0}},U=class n{static size(e){return n.getSizeFromDimensionRange(e,0,e.length)}static convertShape(e,r=4){let t=e.length;if(t===0)return[];let o=new Array(t),i=t-1;for(;i>=0;){if(e[i]%r===0){o[i]=e[i]/r;break}if(r%e[i]!==0)throw new Error("cannot convert shape");o[i]=1,r/=e[i],i--}for(i--;i>=0;i--)o[i]=e[i];return o}static sizeFromDimension(e,r){if(r<0||r>e.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${e.length} dimensions.`);return n.getSizeFromDimensionRange(e,r,e.length)}static sizeToDimension(e,r){if(r<0||r>e.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${e.length} dimensions.`);return n.getSizeFromDimensionRange(e,0,r)}static getSizeFromDimensionRange(e,r,t){let o=1;for(let i=r;i<t;i++){if(e[i]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");o*=Number(e[i])}return o}static computeStrides(e){let r=e.length;if(r===0)return[];if(r===1)return[1];let t=new Array(r);t[r-1]=1,t[r-2]=e[r-1];for(let o=r-3;o>=0;--o)t[o]=t[o+1]*e[o+1];return t}static normalizeAxis(e,r){if(e<-r&&e>=r)throw new Error("unsupported axis for this operation.");return e<0?e+r:e}static normalizeAxes(e,r){return e.map(t=>this.normalizeAxis(t,r??e.length))}static sortBasedOnPerm(e,r){return r?r.map(t=>e[t]):e.slice().reverse()}static padShape(e,r){let t=e.length;return e.map((o,i)=>o+r[i]+r[i+t])}static areEqual(e,r){return e.length!==r.length?!1:e.every((t,o)=>t===r[o])}},Hn=class n{static adjustPoolAttributes(e,r,t,o,i,a){if(!e&&t.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(e)for(let u=0;u<r.length-2;u++)u>=t.length?t.push(r[u+2]):t[u]=r[u+2];for(let u=0;u<t.length;u++)if(u<o.length){if(o[u]<0)throw new Error("strides should be greater than or equal to 1")}else o.push(1);for(let u=0;u<t.length;u++)if(u<i.length){if(i[u]<0)throw new Error("dilations should be greater than or equal to 1")}else i.push(1);for(let u=0;u<t.length*2;u++)if(u<a.length){if(a[u]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let u=0;u<t.length;u++){if(t[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[u]>=t[u]||a[u+t.length]>=t[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(e,r,t,o,i,a,u){if(u){if(i.length!==2*(e.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==e.length-2)throw new Error("length of strides should be the length of data dimensions");if(o.length!==e.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let c=0;c<e.length-2;c++)n.adjustPadAndReturnShape(e[c+(a?1:2)],r[c],t[c],o[c],i,c,c+e.length-2,u)}}static computePoolOutputShape(e,r,t,o,i,a,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let c=[r[0],r[1]];return n.computeShapeHelper(e,r,c,t,o,i,a,u),c}static computeConvOutputShape(e,r,t,o,i,a,u){if(e.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let c=[e[0],r[0]];return n.computeShapeHelper(!1,e,c,t,o,i,a,u),c}static computeShapeHelper(e,r,t,o,i,a,u,c){if(e)for(let f=0;f<r.length-2;f++)t.push(1);else for(let f=0;f<r.length-2;f++)t.push(n.adjustPadAndReturnShape(r[f+2],o[f],i[f],a[f],u,f,f+r.length-2,c))}static adjustPadAndReturnShape(e,r,t,o,i,a,u,c){let f=t*(o-1)+1;if(c&&c!=="NOTSET")switch(c){case"VALID":return i[a]=0,i[u]=0,Math.floor((e-f)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(t!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let y=((e+r-1)/r-1)*r+o-e;return i[a]=Math.floor(c==="SAME_LOWER"?(y+1)/2:y/2),i[u]=y-i[a],Math.floor((e+y-o)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((e+i[a]+i[u]-f)/r+1)}},Ba=class{static getShapeOfGemmResult(e,r,t,o,i){if(e.length!==2||t.length!==2)throw new Error("shape need to be of size 2");let a,u,c;r?(a=e[1],u=e[0]):(a=e[0],u=e[1]);let f=-1;if(o?(c=t[0],f=1):(c=t[1],f=0),t[f]!==u)throw new Error("dimension mismatch");if(a<=0||c<=0||u<=0)throw new Error("invalid shape specified");if(i&&!Xr.isValidBroadcast(i,[a,c]))throw new Error("gemm: invalid bias shape for broadcast");return[a,c,u]}},Tw=-34028234663852886e22,Iw=34028234663852886e22});var qn,Sc,Ke,gt,te,Me,$c,Kn,nr,se,Fa,W,Q,Sw,Va,Ic,$w,Ae=j(()=>{"use strict";ve();Ie();qn=64,Sc=(n,e)=>{if(e===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(n)){case 10:return e>1?`vec${e}<f16>`:"f16";case 1:return e>1?`vec${e}<f32>`:"f32";case 6:return e>1?`vec${e}<i32>`:"i32";case 12:return e>1?`vec${e}<u32>`:"u32";case 7:if(e>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(e>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(e!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${n}`)}},Ke=(n,e=1)=>{let r=Sc(n,e);return typeof r=="string"?r:r[0]},gt=(n,e=1)=>{let r=Sc(n,e);return typeof r=="string"?r:r[1]},te=(...n)=>{let e=[];return n.forEach(r=>{r.length!==0&&e.push({type:12,data:r},{type:12,data:U.computeStrides(r)})}),e},Me=n=>n%4===0?4:n%2===0?2:1,$c=(n="f32",e,r="0")=>!e||e===1?`${n}(${r})`:`vec${e}<${n}>(${r})`,Kn=(n,e,r)=>n==="f32"?r:e===1?`f32(${r})`:`vec${e}<f32>(${r})`,nr=(n,e)=>e===4?`(${n}.x + ${n}.y + ${n}.z + ${n}.w)`:e===2?`(${n}.x + ${n}.y)`:e===3?`(${n}.x + ${n}.y + ${n}.z)`:n,se=(n,e,r,t)=>n.startsWith("uniforms.")&&r>4?typeof e=="string"?t==="f16"?`${n}[(${e}) / 8][(${e}) % 8 / 4][(${e}) % 8 % 4]`:`${n}[(${e}) / 4][(${e}) % 4]`:t==="f16"?`${n}[${Math.floor(e/8)}][${Math.floor(e%8/4)}][${e%8%4}]`:`${n}[${Math.floor(e/4)}][${e%4}]`:r>1?`${n}[${e}]`:n,Fa=(n,e,r,t,o)=>{let i=typeof r=="number",a=i?r:r.length,u=[...new Array(a).keys()],c=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,f=Sc(e,o),m=typeof f=="string"?f:f[1],y=typeof f=="string"?f:f[0],_={indices:c,value:m,storage:y,tensor:e},x=Y=>typeof Y=="string"?Y:`${Y}u`,T={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},I=i?"uniforms.":"",O=`${I}${n}_shape`,A=`${I}${n}_strides`,$="";for(let Y=0;Y<a-1;Y++)$+=`
    let dim${Y} = current / ${se(A,Y,a)};
    let rest${Y} = current % ${se(A,Y,a)};
    indices[${Y}] = dim${Y};
    current = rest${Y};
    `;$+=`indices[${a-1}] = current;`;let C=a<2?"":`
  fn o2i_${n}(offset: u32) -> ${_.indices} {
    var indices: ${_.indices};
    var current = offset;
    ${$}
    return indices;
  }`,L=Y=>(T.offsetToIndices=!0,a<2?Y:`o2i_${n}(${Y})`),R=[];if(a>=2)for(let Y=a-1;Y>=0;Y--)R.push(`${se(A,Y,a)} * (indices[${Y}])`);let M=a<2?"":`
  fn i2o_${n}(indices: ${_.indices}) -> u32 {
    return ${R.join("+")};
  }`,q=Y=>(T.indicesToOffset=!0,a<2?Y:`i2o_${n}(${Y})`),X=(...Y)=>a===0?"0u":`${_.indices}(${Y.map(x).join(",")})`,J=(Y,pe)=>a<2?`${Y}`:`${se(Y,pe,a)}`,ie=(Y,pe,Le)=>a<2?`${Y}=${Le};`:`${se(Y,pe,a)}=${Le};`,ue={},xe=(Y,pe)=>{T.broadcastedIndicesToOffset=!0;let Le=`${pe.name}broadcastedIndicesTo${n}Offset`;if(Le in ue)return`${Le}(${Y})`;let Xt=[];for(let Ye=a-1;Ye>=0;Ye--){let Ue=pe.indicesGet("outputIndices",Ye+pe.rank-a);Xt.push(`${J(A,Ye)} * (${Ue} % ${J(O,Ye)})`)}return ue[Le]=`fn ${Le}(outputIndices: ${pe.type.indices}) -> u32 {
             return ${Xt.length>0?Xt.join("+"):"0u"};
           }`,`${Le}(${Y})`},ee=(Y,pe)=>(()=>{if(_.storage===_.value)return`${n}[${Y}]=${pe};`;if(_.storage==="vec2<u32>"&&_.value==="i32")return`${n}[${Y}]=vec2<u32>(u32(${pe}), select(0u, 0xFFFFFFFFu, ${pe} < 0));`;if(_.storage==="vec2<u32>"&&_.value==="u32")return`${n}[${Y}]=vec2<u32>(u32(${pe}), 0u);`;if(_.storage==="u32"&&_.value==="vec4<bool>")return`${n}[${Y}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${pe}));`;throw new Error(`not supported combination of storage type ${_.storage} and value type ${_.value} yet`)})(),ye=Y=>(()=>{if(_.storage===_.value)return`${n}[${Y}]`;if(_.storage==="vec2<u32>"&&_.value==="i32")return`i32(${n}[${Y}].x)`;if(_.storage==="vec2<u32>"&&_.value==="u32")return`u32(${n}[${Y}].x)`;if(_.storage==="u32"&&_.value==="vec4<bool>")return`vec4<bool>(bool(${n}[${Y}] & 0xFFu), bool(${n}[${Y}] & 0xFF00u), bool(${n}[${Y}] & 0xFF0000u), bool(${n}[${Y}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${_.storage} and value type ${_.value} yet`)})(),Xe=a<2?"":`
  fn get_${n}ByIndices(indices: ${_.indices}) -> ${m} {
    return ${ye(`i2o_${n}(indices)`)};
  }`,de=a<2?"":(()=>{let Y=u.map(Le=>`d${Le}: u32`).join(", "),pe=u.map(Le=>`d${Le}`).join(", ");return`
  fn get_${n}(${Y}) -> ${m} {
    return get_${n}ByIndices(${X(pe)});
  }`})(),_e=(...Y)=>{if(Y.length!==a)throw new Error(`indices length must be ${a}`);let pe=Y.map(x).join(",");return a===0?ye("0u"):a===1?ye(pe[0]):(T.get=!0,T.getByIndices=!0,T.indicesToOffset=!0,`get_${n}(${pe})`)},$e=Y=>a<2?ye(Y):(T.getByIndices=!0,T.indicesToOffset=!0,`get_${n}ByIndices(${Y})`),le=a<2?"":`
  fn set_${n}ByIndices(indices: ${_.indices}, value: ${m}) {
    ${ee(`i2o_${n}(indices)`,"value")}
  }`,Oe=a<2?"":(()=>{let Y=u.map(Le=>`d${Le}: u32`).join(", "),pe=u.map(Le=>`d${Le}`).join(", ");return`
  fn set_${n}(${Y}, value: ${m}) {
    set_${n}ByIndices(${X(pe)}, value);
  }`})();return{impl:()=>{let Y=[],pe=!1;return T.offsetToIndices&&(Y.push(C),pe=!0),T.indicesToOffset&&(Y.push(M),pe=!0),T.broadcastedIndicesToOffset&&(Object.values(ue).forEach(Le=>Y.push(Le)),pe=!0),T.set&&(Y.push(Oe),pe=!0),T.setByIndices&&(Y.push(le),pe=!0),T.get&&(Y.push(de),pe=!0),T.getByIndices&&(Y.push(Xe),pe=!0),!i&&pe&&Y.unshift(`const ${O} = ${_.indices}(${r.join(",")});`,`const ${A} = ${_.indices}(${U.computeStrides(r).join(",")});`),Y.join(`
`)},type:_,offsetToIndices:L,indicesToOffset:q,broadcastedIndicesToOffset:xe,indices:X,indicesGet:J,indicesSet:ie,set:(...Y)=>{if(Y.length!==a+1)throw new Error(`indices length must be ${a}`);let pe=Y[a];if(typeof pe!="string")throw new Error("value must be string");let Le=Y.slice(0,a).map(x).join(",");return a===0?ee("0u",pe):a===1?ee(Le[0],pe):(T.set=!0,T.setByIndices=!0,T.indicesToOffset=!0,`set_${n}(${Le}, ${pe})`)},setByOffset:ee,setByIndices:(Y,pe)=>a<2?ee(Y,pe):(T.setByIndices=!0,T.indicesToOffset=!0,`set_${n}ByIndices(${Y}, ${pe});`),get:_e,getByOffset:ye,getByIndices:$e,usage:t,name:n,strides:A,shape:O,rank:a}},W=(n,e,r,t=1)=>Fa(n,e,r,"input",t),Q=(n,e,r,t=1)=>Fa(n,e,r,"output",t),Sw=(n,e,r)=>Fa(n,e,r,"atomicOutput",1),Va=(n,e,r,t=1)=>Fa(n,e,r,"internal",t),Ic=class{constructor(e,r){this.normalizedDispatchGroup=e;this.limits=r;this.internalVariables=[];this.variables=[];this.uniforms=[];this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=qn){let r=typeof e=="number"?e:e[0],t=typeof e=="number"?1:e[1],o=typeof e=="number"?1:e[2];if(r>this.limits.maxComputeWorkgroupSizeX||t>this.limits.maxComputeWorkgroupSizeY||o>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${r}, ${t}, ${o}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(r*t*o>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${r}, ${t}, ${o}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=i?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=r=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(r)];return this.uniforms.map(r=>[e(r.type),r.length??1])}},$w=(n,e)=>new Ic(n,e)});var hN,Aw,mN,gN,yN,bN,yt,Ow,Pw,sn=j(()=>{"use strict";ve();Ie();ot();Ae();hN=(n,e)=>{if(!n||n.length!==1)throw new Error("Transpose requires 1 input.");if(e.length!==0&&e.length!==n[0].dims.length)throw new Error(`perm size ${e.length} does not match input rank ${n[0].dims.length}`)},Aw=(n,e)=>e.length!==0?e:[...new Array(n).keys()].reverse(),mN=(n,e)=>U.sortBasedOnPerm(n,Aw(n.length,e)),gN=(n,e,r,t)=>{let o=`fn perm(i: ${t.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let i=0;i<e;++i)o+=`a[${n[i]}]=i[${i}];`;return o+="return a;}"},yN=(n,e)=>{let r=[],t=[];for(let o=0;o<n.length;++o)n[o]!==1&&r.push(n[o]),n[e[o]]!==1&&t.push(e[o]);return{newShape:r,newPerm:t}},bN=(n,e)=>{let r=0;for(let t=0;t<n.length;++t)if(e[n[t]]!==1){if(n[t]<r)return!1;r=n[t]}return!0},yt=(n,e)=>{let r=n.dataType,t=n.dims.length,o=Aw(t,e),i=mN(n.dims,o),a=n.dims,u=i,c=t<2||bN(o,n.dims),f;if(c)return f=I=>{let O=W("input",r,a,4),A=Q("output",r,u,4);return`
  ${I.registerUniform("output_size","u32").declareVariables(O,A)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let I=U.size(i);return{outputs:[{dims:i,dataType:n.dataType}],dispatchGroup:{x:Math.ceil(I/64/4)},programUniforms:[{type:12,data:Math.ceil(I/4)}]}},getShaderSource:f};let{newShape:m,newPerm:y}=yN(n.dims,o),_=U.areEqual(y,[2,3,1]),x=U.areEqual(y,[3,1,2]);if(m.length===2||_||x){a=_?[m[0],m[1]*m[2]]:x?[m[0]*m[1],m[2]]:m,u=[a[1],a[0]];let I=16;return f=O=>{let A=W("a",r,a.length),$=Q("output",r,u.length);return`
  ${O.registerUniform("output_size","u32").declareVariables(A,$)}
  var<workgroup> tile : array<array<${$.type.value}, ${I+1}>, ${I}>;
  ${O.mainStart([I,I,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${I} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${I}u + local_id.x;
    let input_row = workgroup_id_x * ${I}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${A.getByIndices(`${A.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${I}u + local_id.x;
    let output_row = workgroup_id_y * ${I}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${$.setByIndices(`${$.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let O=U.size(i);return{outputs:[{dims:i,dataType:n.dataType}],dispatchGroup:{x:Math.ceil(u[1]/I),y:Math.ceil(u[0]/I)},programUniforms:[{type:12,data:O},...te(a,u)]}},getShaderSource:f}}return f=I=>{let O=W("a",r,a.length),A=Q("output",r,u.length);return`
  ${I.registerUniform("output_size","u32").declareVariables(O,A)}

  ${gN(o,t,O,A)}

  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${A.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${A.setByOffset("global_idx",O.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${e}`,inputDependencies:["rank"]},getRunData:()=>{let I=U.size(i);return{outputs:[{dims:i,dataType:n.dataType}],dispatchGroup:{x:Math.ceil(I/64)},programUniforms:[{type:12,data:I},...te(a,u)]}},getShaderSource:f}},Ow=(n,e)=>{hN(n.inputs,e.perm),n.compute(yt(n.inputs[0],e.perm))},Pw=n=>we({perm:n.perm})});var _N,vN,wN,xN,TN,IN,SN,$N,AN,ON,Yr,Cw,Ew,Dw,kw,Nw,Lw,Rw,zw,Mw,Bw,Fw=j(()=>{"use strict";ve();Ie();Ae();Ga();sn();_N={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},vN={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},wN={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},xN={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},TN=(n,e)=>{let r=[];for(let t=e-n;t<e;++t)r.push(t);return r},IN=(n,e)=>{let r=[],t=n.length;for(let i=0;i<t;i++)e.indexOf(i)===-1&&r.push(n[i]);let o=e.map(i=>n[i]);return[r,o]},SN=(n,e)=>{let r=n.length+e.length,t=[],o=0;for(let i=0;i<r;i++)e.indexOf(i)===-1?t.push(n[o++]):t.push(1);return t},$N=(n,e)=>{for(let r=0;r<n.length;++r)if(n[n.length-r-1]!==e-1-r)return!1;return!0},AN=(n,e)=>{let r=[];if(!$N(n,e)){for(let t=0;t<e;++t)n.indexOf(t)===-1&&r.push(t);n.forEach(t=>r.push(t))}return r},ON=(n,e,r,t,o,i,a)=>{let u=r[0].dims,c=U.size(i),f=U.size(a),m=W("_A",r[0].dataType,u),y=Q("output",o,i),_=64;c===1&&(_=256);let x=`
          var<workgroup> aBestValues : array<f32, ${_}>;
       `,T=I=>`
        ${I.registerUniform("reduceSize","u32").declareVariables(m,y)}
        ${x}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${I.mainStart(_)}

          let outputIndex = global_idx / ${_};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${wN[t]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${_}) {
           let candidate = f32(${m.getByOffset("offset + k")});
           bestValue = ${_N[t]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${_}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${vN[t]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${y.setByOffset("outputIndex",`${t==="mean"?`${y.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${y.type.storage}(${xN[t]})`}`)};
         }
        }`;return{name:n,shaderCache:{hint:`${e};${_}`,inputDependencies:["type"]},getShaderSource:T,getRunData:()=>({outputs:[{dims:i,dataType:o}],dispatchGroup:{x:c},programUniforms:[{type:12,data:f}]})}},Yr=(n,e,r,t)=>{let o=n.inputs.length===1?r:Ac(n.inputs,r),i=o.axes;i.length===0&&!o.noopWithEmptyAxes&&(i=n.inputs[0].dims.map((x,T)=>T));let a=U.normalizeAxes(i,n.inputs[0].dims.length),u=a,c=n.inputs[0],f=AN(u,n.inputs[0].dims.length);f.length>0&&(c=n.compute(yt(n.inputs[0],f),{inputs:[0],outputs:[-1]})[0],u=TN(u.length,c.dims.length));let[m,y]=IN(c.dims,u),_=m;o.keepDims&&(_=SN(m,a)),n.compute(ON(e,o.cacheKey,[c],t,n.inputs[0].dataType,_,y),{inputs:[c]})},Cw=(n,e)=>{Yr(n,"ReduceMeanShared",e,"mean")},Ew=(n,e)=>{Yr(n,"ReduceL1Shared",e,"l1")},Dw=(n,e)=>{Yr(n,"ReduceL2Shared",e,"l2")},kw=(n,e)=>{Yr(n,"ReduceLogSumExpShared",e,"logSumExp")},Nw=(n,e)=>{Yr(n,"ReduceMaxShared",e,"max")},Lw=(n,e)=>{Yr(n,"ReduceMinShared",e,"min")},Rw=(n,e)=>{Yr(n,"ReduceProdShared",e,"prod")},zw=(n,e)=>{Yr(n,"ReduceSumShared",e,"sum")},Mw=(n,e)=>{Yr(n,"ReduceSumSquareShared",e,"sumSquare")},Bw=(n,e)=>{Yr(n,"ReduceLogSumShared",e,"logSum")}});var Zr,PN,Ua,Ac,Jr,CN,EN,DN,kN,NN,LN,RN,zN,MN,BN,Qr,Vw,Gw,Uw,jw,Ww,Hw,qw,Kw,Xw,Yw,Ga=j(()=>{"use strict";ve();Ie();ot();Ae();Fw();Zr=n=>{if(!n||n.length===0||n.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(n.length===2&&n[1].dims.length!==1)throw new Error("Invalid axes input dims.")},PN=n=>["","",`var value = ${n.getByIndices("input_indices")};`,""],Ua=(n,e,r,t,o,i,a=!1,u=!1)=>{let c=[],f=r[0].dims,m=f.length,y=U.normalizeAxes(o,m),_=!u&&y.length===0;f.forEach((O,A)=>{_||y.indexOf(A)>=0?a&&c.push(1):c.push(O)});let x=c.length,T=U.size(c);return{name:n,shaderCache:e,getShaderSource:O=>{let A=[],$=W("_A",r[0].dataType,m),C=Q("output",i,x),L=t($,C,y),R=L[2];for(let M=0,q=0;M<m;M++)_||y.indexOf(M)>=0?(a&&q++,R=`for(var j${M}: u32 = 0; j${M} < ${f[M]}; j${M}++) {
                  ${L[2].includes("last_index")?`let last_index = j${M};`:""}
                  ${$.indicesSet("input_indices",M,`j${M}`)}
                  ${R}
                }`):(A.push(`${$.indicesSet("input_indices",M,C.indicesGet("output_indices",q))};`),q++);return`

        ${O.registerUniform("output_size","u32").declareVariables($,C)}

        ${O.mainStart()}
          ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${$.type.indices};
          let output_indices = ${C.offsetToIndices("global_idx")};

          ${A.join(`
`)}
          ${L[0]}       // init ops for reduce max/min
          ${L[1]}
          ${R}
          ${L[3]}
          ${L.length===4?C.setByOffset("global_idx","value"):L.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:c,dataType:i}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:[{type:12,data:T},...te(f,c)]})}},Ac=(n,e)=>{let r=[];return n[1].dims[0]>0&&n[1].getBigInt64Array().forEach(t=>r.push(Number(t))),we({axes:r,keepDims:e.keepDims,noopWithEmptyAxes:e.noopWithEmptyAxes})},Jr=(n,e,r,t)=>{let o=n.inputs,i=o.length===1?r:Ac(o,r);n.compute(Ua(e,{hint:i.cacheKey,inputDependencies:["rank"]},[o[0]],i.noopWithEmptyAxes&&i.axes.length===0?PN:t,i.axes,o[0].dataType,i.keepDims,i.noopWithEmptyAxes),{inputs:[0]})},CN=(n,e)=>{Zr(n.inputs),Jr(n,"ReduceLogSum",e,(t,o)=>[`var value = ${o.type.storage}(0);`,"",`value += ${t.getByIndices("input_indices")};`,"value = log(value);"])},EN=(n,e)=>{Zr(n.inputs),Jr(n,"ReduceL1",e,(t,o)=>[`var value = ${o.type.storage}(0);`,"",`value += abs(${t.getByIndices("input_indices")});`,""])},DN=(n,e)=>{Zr(n.inputs),Jr(n,"ReduceL2",e,(t,o)=>[`var t = ${o.type.value}(0); var value = ${o.type.value}(0);`,"",`t = ${t.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},kN=(n,e)=>{Zr(n.inputs),Jr(n,"ReduceLogSumExp",e,(t,o)=>[`var value = ${o.type.storage}(0);`,"",`value += exp(${t.getByIndices("input_indices")});`,"value = log(value);"])},NN=(n,e)=>{Zr(n.inputs),Jr(n,"ReduceMax",e,(t,o,i)=>{let a=[];for(let u=0;u<t.rank;u++)(i.indexOf(u)>=0||i.length===0)&&a.push(t.indicesSet("input_indices",u,0));return[`${a.join(`
`)}`,`var value = ${t.getByIndices("input_indices")};`,`value = max(value, ${t.getByIndices("input_indices")});`,""]})},LN=(n,e)=>{Zr(n.inputs),Jr(n,"ReduceMean",e,(t,o,i)=>{let a=1;for(let u=0;u<t.rank;u++)(i.indexOf(u)>=0||i.length===0)&&(a*=n.inputs[0].dims[u]);return["var sum = f32(0);","",`sum += f32(${t.getByIndices("input_indices")});`,`let value = ${o.type.value}(sum / ${a});`]})},RN=(n,e)=>{Zr(n.inputs),Jr(n,"ReduceMin",e,(t,o,i)=>{let a=[];for(let u=0;u<t.rank;u++)(i.indexOf(u)>=0||i.length===0)&&a.push(`input_indices[${u}] = 0;`);return[`${a.join(`
`)}`,`var value = ${t.getByIndices("input_indices")};`,`value = min(value, ${t.getByIndices("input_indices")});`,""]})},zN=(n,e)=>{Zr(n.inputs),Jr(n,"ReduceProd",e,(t,o)=>[`var value = ${o.type.storage}(1);`,"",`value *= ${t.getByIndices("input_indices")};`,""])},MN=(n,e)=>{Zr(n.inputs),Jr(n,"ReduceSum",e,(t,o)=>[`var value = ${o.type.storage}(0);`,"",`value += ${t.getByIndices("input_indices")};`,""])},BN=(n,e)=>{Zr(n.inputs),Jr(n,"ReduceSumSquare",e,(t,o)=>[`var t = ${o.type.value}(0); var value = ${o.type.value}(0);`,"",`t = ${t.getByIndices("input_indices")}; value += t * t;`,""])},Qr=(n,e,r)=>{if(e.length===0)return r;let t=1,o=1;for(let i=0;i<e.length;i++)e.indexOf(i)===-1?t*=n[i]:o*=n[i];return o<32&&t>1024},Vw=(n,e)=>{Qr(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?LN(n,e):Cw(n,e)},Gw=(n,e)=>{Qr(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?EN(n,e):Ew(n,e)},Uw=(n,e)=>{Qr(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?DN(n,e):Dw(n,e)},jw=(n,e)=>{Qr(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?kN(n,e):kw(n,e)},Ww=(n,e)=>{Qr(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?NN(n,e):Nw(n,e)},Hw=(n,e)=>{Qr(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?RN(n,e):Lw(n,e)},qw=(n,e)=>{Qr(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?zN(n,e):Rw(n,e)},Kw=(n,e)=>{Qr(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?MN(n,e):zw(n,e)},Xw=(n,e)=>{Qr(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?BN(n,e):Mw(n,e)},Yw=(n,e)=>{Qr(n.inputs[0].dims,e.axes,e.noopWithEmptyAxes)?CN(n,e):Bw(n,e)}});var Zw,Jw,Qw,Oc,ex=j(()=>{"use strict";ve();ot();Ga();Zw=n=>{if(!n||n.length===0||n.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(n[0].dataType!==1)throw new Error("Invalid input type.")},Jw=(n,e)=>{Zw(n.inputs);let r=(t,o,i)=>{let a=[];for(let u=0;u<t.rank;u++)(i.indexOf(u)>=0||i.length===0)&&a.push(`input_indices[${u}] = 0;`);return[`${a.join(`
`)}`,`var value = ${t.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${t.getByIndices("input_indices")} ${e.selectLastIndex>0?"<=":"<"} value) {
         value = ${t.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",o.setByOffset("global_idx","best_index")]};n.compute(Ua("ArgMin",{hint:e.cacheKey,inputDependencies:["rank"]},[n.inputs[0]],r,[e.axis],7,e.keepDims),{inputs:[0]})},Qw=(n,e)=>{Zw(n.inputs);let r=(t,o,i)=>{let a=[];for(let u=0;u<t.rank;u++)(i.indexOf(u)>=0||i.length===0)&&a.push(`input_indices[${u}] = 0;`);return[`${a.join(`
`)}`,`var value = ${t.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${t.getByIndices("input_indices")} ${e.selectLastIndex>0?">=":">"} value) {
         value = ${t.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",o.setByOffset("global_idx","best_index")]};n.compute(Ua("argMax",{hint:e.cacheKey,inputDependencies:["rank"]},[n.inputs[0]],r,[e.axis],7,e.keepDims),{inputs:[0]})},Oc=n=>we(n)});var FN,Pc,VN,GN,UN,mo,jN,tx,ja=j(()=>{"use strict";ve();Ie();Ma();Ae();FN=(n,e)=>{let r=n[0],t=n[1],o=n[2],i=n[3],a=n[4],u=n[5];if(a&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let c=r.dims[0],f=r.dims[1],m=r.dims[2];if(o.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(t.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(t.dims[0]!==m)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(o.dims[0]!==t.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let y=o.dims[0]/3,_=y,x=_;if(e.qkvHiddenSizes.length>0){if(e.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let C of e.qkvHiddenSizes)if(C%e.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");y=e.qkvHiddenSizes[0],_=e.qkvHiddenSizes[1],x=e.qkvHiddenSizes[2]}let T=f;if(y!==_)throw new Error("qkv_hidden_sizes first element should be same as the second");if(o.dims[0]!==y+_+x)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let I=0;if(a){if(_!==x)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==c)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==e.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==_/e.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');e.pastPresentShareBuffer||(I=a.dims[3])}let O=T+I,A=-1,$=0;if(i)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==c||u.dims[1]!==e.numHeads||u.dims[2]!==f||u.dims[3]!==O)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:f,pastSequenceLength:I,kvSequenceLength:T,totalSequenceLength:O,maxSequenceLength:A,inputHiddenSize:m,hiddenSize:y,vHiddenSize:x,headSize:Math.floor(y/e.numHeads),vHeadSize:Math.floor(x/e.numHeads),numHeads:e.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:e.maskFilterValue,maskType:$,scale:e.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Pc=(n,e,r)=>e&&n?`
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
    `,VN=(n,e,r,t,o,i,a,u)=>{let c=Me(a?1:i),f=64,m=i/c;m<f&&(f=32);let y=Math.ceil(i/c/f),_=[{type:12,data:e},{type:12,data:r},{type:12,data:t},{type:12,data:o},{type:12,data:m},{type:12,data:y}],x=Ke(n.dataType,c),T=gt(1,c),I=["type"];a&&I.push("type"),u&&I.push("type");let O=A=>{let $=Q("x",n.dataType,n.dims,c),C=[$],L=a?W("seq_lens",a.dataType,a.dims):void 0;L&&C.push(L);let R=u?W("total_sequence_length_input",u.dataType,u.dims):void 0;R&&C.push(R);let M=gt(n.dataType),q=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${f}>;
  var<workgroup> thread_sum: array<f32, ${f}>;
  ${A.registerUniforms(q).declareVariables(...C)}
  ${A.mainStart([f,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Pc(L,R,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${f}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${a?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${T}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${T}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(c){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${f}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${T}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${T}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(c){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${f}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${$.type.value}(${M}(1.0) / ${M}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${T}(x[offset + i]);
        x[offset + i] = ${$.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${$.type.value}(${M}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${f};${x};${c}`,inputDependencies:I},getShaderSource:O,getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(i/f),y:o,z:e*r},programUniforms:_})}},GN=(n,e,r,t,o,i,a,u,c)=>{let f=a+i.kvSequenceLength,m=[i.batchSize,i.numHeads,i.sequenceLength,f],y=n>1&&t,_=i.kvNumHeads?i.kvNumHeads:i.numHeads,x=y?[i.batchSize,_,f,i.headSize]:void 0,T=i.nReps?i.nReps:1,I=i.scale===0?1/Math.sqrt(i.headSize):i.scale,O=Me(i.headSize),A=i.headSize/O,$=12,C={x:Math.ceil(f/$),y:Math.ceil(i.sequenceLength/$),z:i.batchSize*i.numHeads},L=[{type:12,data:i.sequenceLength},{type:12,data:A},{type:12,data:f},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:1,data:I},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:T}],R=y&&t&&U.size(t.dims)>0,M=["type","type"];R&&M.push("type"),o&&M.push("type"),u&&M.push("type"),c&&M.push("type");let q=[{dims:m,dataType:e.dataType,gpuDataType:0}];y&&q.push({dims:x,dataType:e.dataType,gpuDataType:0});let X=J=>{let ie=W("q",e.dataType,e.dims,O),ue=W("key",r.dataType,r.dims,O),xe=[ie,ue];if(R){let le=W("past_key",t.dataType,t.dims,O);xe.push(le)}o&&xe.push(W("attention_bias",o.dataType,o.dims));let ee=u?W("seq_lens",u.dataType,u.dims):void 0;ee&&xe.push(ee);let ye=c?W("total_sequence_length_input",c.dataType,c.dims):void 0;ye&&xe.push(ye);let Xe=Q("output",e.dataType,m),de=[Xe];y&&de.push(Q("present_key",e.dataType,x,O));let _e=gt(1,O),$e=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;

  var<workgroup> tileQ: array<${ie.type.storage}, ${$*$}>;
  var<workgroup> tileK: array<${ie.type.storage}, ${$*$}>;
  ${J.registerUniforms($e).declareVariables(...xe,...de)}
  ${J.mainStart([$,$,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${T===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${T===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Pc(ee,ye,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${R&&y?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${y?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${_e}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${(()=>R&&y?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`)()}
      ${y?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${_e}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(O){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${O}`)}})()};
        output[outputIdx] = ${Xe.type.value} (sum * uniforms.alpha) + ${o?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${O};${o!==void 0};${t!==void 0};${n}`,inputDependencies:M},getRunData:()=>({outputs:q,dispatchGroup:C,programUniforms:L}),getShaderSource:X}},UN=(n,e,r,t,o,i,a=void 0,u=void 0)=>{let c=i+o.kvSequenceLength,f=o.nReps?o.nReps:1,m=o.vHiddenSize*f,y=n>1&&t,_=o.kvNumHeads?o.kvNumHeads:o.numHeads,x=y?[o.batchSize,_,c,o.headSize]:void 0,T=[o.batchSize,o.sequenceLength,m],I=12,O={x:Math.ceil(o.vHeadSize/I),y:Math.ceil(o.sequenceLength/I),z:o.batchSize*o.numHeads},A=[{type:12,data:o.sequenceLength},{type:12,data:c},{type:12,data:o.vHeadSize},{type:12,data:o.numHeads},{type:12,data:o.headSize},{type:12,data:m},{type:12,data:i},{type:12,data:o.kvSequenceLength},{type:12,data:f}],$=y&&t&&U.size(t.dims)>0,C=["type","type"];$&&C.push("type"),a&&C.push("type"),u&&C.push("type");let L=[{dims:T,dataType:e.dataType,gpuDataType:0}];y&&L.push({dims:x,dataType:e.dataType,gpuDataType:0});let R=M=>{let q=W("probs",e.dataType,e.dims),X=W("v",r.dataType,r.dims),J=[q,X];$&&J.push(W("past_value",t.dataType,t.dims));let ie=a?W("seq_lens",a.dataType,a.dims):void 0;a&&J.push(ie);let ue=u?W("total_sequence_length_input",u.dataType,u.dims):void 0;u&&J.push(ue);let ee=[Q("output",e.dataType,T)];y&&ee.push(Q("present_value",e.dataType,x));let ye=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${I}u;
  var<workgroup> tileQ: array<${q.type.value}, ${I*I}>;
  var<workgroup> tileV: array<${q.type.value}, ${I*I}>;
  ${M.registerUniforms(ye).declareVariables(...J,...ee)}
  ${M.mainStart([I,I,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${f===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${f===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Pc(ie,ue,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${$&&y?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${y?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${q.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${(()=>$&&y?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`)()}
        ${y?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${t!==void 0};${n}`,inputDependencies:C},getRunData:()=>({outputs:L,dispatchGroup:O,programUniforms:A}),getShaderSource:R}},mo=(n,e,r,t,o,i,a,u,c,f,m=void 0,y=void 0)=>{let _=Math.min(n.outputCount,1+(a?1:0)+(u?1:0)),x=_>1?f.pastSequenceLength:0,T=x+f.kvSequenceLength,I=c&&U.size(c.dims)>0?c:void 0,O=[e,r];_>1&&a&&U.size(a.dims)>0&&O.push(a),I&&O.push(I),m&&O.push(m),y&&O.push(y);let A=n.compute(GN(_,e,r,a,I,f,x,m,y),{inputs:O,outputs:_>1?[-1,1]:[-1]})[0];n.compute(VN(A,f.batchSize,f.numHeads,x,f.sequenceLength,T,m,y),{inputs:m&&y?[A,m,y]:[A],outputs:[]});let $=[A,t];_>1&&u&&U.size(u.dims)>0&&$.push(u),m&&$.push(m),y&&$.push(y),n.compute(UN(_,A,t,u,f,x,m,y),{inputs:$,outputs:_>1?[0,2]:[0]})},jN=(n,e)=>{let r=[e.batchSize,e.numHeads,e.sequenceLength,e.headSize],t=e.sequenceLength,o=e.inputHiddenSize,i=e.headSize,a=12,u={x:Math.ceil(e.headSize/a),y:Math.ceil(e.sequenceLength/a),z:e.batchSize*e.numHeads},c=[n.inputs[0],n.inputs[1],n.inputs[2]],f=[{type:12,data:t},{type:12,data:o},{type:12,data:i},{type:12,data:e.numHeads},{type:12,data:e.headSize},{type:12,data:e.hiddenSize},{type:12,data:e.hiddenSize+e.hiddenSize+e.vHiddenSize}],m=y=>{let _=Q("output_q",c[0].dataType,r),x=Q("output_k",c[0].dataType,r),T=Q("output_v",c[0].dataType,r),I=W("input",c[0].dataType,c[0].dims),O=W("weight",c[1].dataType,c[1].dims),A=W("bias",c[2].dataType,c[2].dims),$=I.type.storage,C=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${$}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${$}, ${a*a}>;
  var<workgroup> tileWeightK: array<${$}, ${a*a}>;
  var<workgroup> tileWeightV: array<${$}, ${a*a}>;
  ${y.registerUniforms(C).declareVariables(I,O,A,_,x,T)}
  ${y.mainStart([a,a,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${$}(0);
    var valueK = ${$}(0);
    var valueV = ${$}(0);
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
  }`};return n.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:n.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:n.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:n.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:f}),getShaderSource:m},{inputs:c,outputs:[-1,-1,-1]})},tx=(n,e)=>{let r=FN(n.inputs,e),[t,o,i]=jN(n,r);return mo(n,t,o,i,n.inputs[4],void 0,void 0,void 0,n.inputs[5],r)}});var WN,HN,qN,rx,nx=j(()=>{"use strict";xt();ve();Ie();ot();Ae();WN=(n,e)=>{if(!n||n.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(t,o,i)=>{let a=o.length;if(a!==t.length)throw new Error(`${i}: num dimensions != ${a}`);o.forEach((u,c)=>{if(u!==t[c])throw new Error(`${i}: dim[${c}] do not match`)})};if(n[0].dims.length>1){let t=e.format==="NHWC"?e.spatial?n[0].dims.slice(-1):n[0].dims.slice(-1).concat(n[0].dims.slice(1,n[0].dims.length-1)):n[0].dims.slice(1,e.spatial?2:void 0);r(n[1].dims,t,"Invalid input scale"),r(n[2].dims,t,"Invalid input B"),r(n[3].dims,t,"Invalid input mean"),r(n[4].dims,t,"Invalid input var")}else r(n[1].dims,[1],"Invalid input scale"),r(n[2].dims,[1],"Invalid input B"),r(n[3].dims,[1],"Invalid input mean"),r(n[4].dims,[1],"Invalid input var")},HN=(n,e)=>{let{epsilon:r,spatial:t,format:o}=e,i=n[0].dims,a=t?Me(i[i.length-1]):1,u=o==="NHWC"&&i.length>1?a:1,c=U.size(i)/a,f=t,m=f?i.length:i,y=W("x",n[0].dataType,n[0].dims,a),_=W("scale",n[1].dataType,n[1].dims,u),x=W("bias",n[2].dataType,n[2].dims,u),T=W("inputMean",n[3].dataType,n[3].dims,u),I=W("inputVar",n[4].dataType,n[4].dims,u),O=Q("y",n[0].dataType,m,a),A=()=>{let C="";if(t)C=`let cOffset = ${i.length===1?"0u":o==="NHWC"?`outputIndices[${i.length-1}] / ${a}`:"outputIndices[1]"};`;else if(o==="NCHW")C=`
            ${O.indicesSet("outputIndices","0","0")}
            let cOffset = ${O.indicesToOffset("outputIndices")};`;else{C=`var cIndices = ${_.type.indices}(0);
                       cIndices[0] = outputIndices[${i.length-1}];`;for(let L=1;L<_.rank;L++)C+=`cIndices[${L}] = outputIndices[${L}];`;C+=`let cOffset = ${_.indicesToOffset("cIndices")};`}return C},$=C=>`
  const epsilon = ${r};
  ${C.registerUniform("outputSize","u32").declareVariables(y,_,x,T,I,O)}
  ${C.mainStart()}
  ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${O.offsetToIndices(`global_idx * ${a}`)};
    ${A()}
    let scale = ${_.getByOffset("cOffset")};
    let bias = ${x.getByOffset("cOffset")};
    let inputMean = ${T.getByOffset("cOffset")};
    let inputVar = ${I.getByOffset("cOffset")};
    let x = ${y.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${O.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${e.epsilon}_${e.format}_${t}_${a}`,inputDependencies:f?["rank","type","type","type","type"]:void 0},getShaderSource:$,getRunData:()=>({outputs:[{dims:n[0].dims,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:f?[{type:12,data:c},...te(i)]:[{type:12,data:c}]})}},qN=n=>we(n),rx=(n,e)=>{let{inputs:r,outputCount:t}=n,o=qN({...e,outputCount:t});if(Te.webgpu.validateInputContent&&WN(r,o),e.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");n.compute(HN(r,o))}});var KN,XN,ox,ix=j(()=>{"use strict";Ie();Ae();KN=n=>{if(n[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(n[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(n[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(n[0].dims[2]!==n[1].dims[0])throw new Error("last dimension of input and bias are not the same")},XN=n=>{let e=n[0].dims,r=n[0].dims[2],t=U.size(e)/4,o=n[0].dataType,i=W("input",o,e,4),a=W("bias",o,[r],4),u=W("residual",o,e,4),c=Q("output",o,e,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:e,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(t/64)}}),getShaderSource:m=>`
  const channels = ${r}u / 4;
  ${m.declareVariables(i,a,u,c)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes(t)}
    let value = ${i.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${c.setByOffset("global_idx","value")}
  }`}},ox=n=>{KN(n.inputs),n.compute(XN(n.inputs))}});var YN,Ge,ax,sx,ux,lx,cx,dx,px,fx,hx,ZN,mx,gx,yx,bx,Yo,_x,Wa,vx,wx,xx,Tx,Ix,Sx,$x,Ax,Ox,Px,Cx,Ex,Dx,kx,Nx,Lx,Rx,zx,Cc,Ec,Mx,Bx,Fx,JN,QN,Vx,Ha=j(()=>{"use strict";ve();Ie();ot();Ae();YN=(n,e,r,t,o,i,a)=>{let u=Math.ceil(e/4),c="";typeof o=="string"?c=`${o}(a)`:c=o("a");let f=W("inputData",r,[u],4),m=Q("outputData",t,[u],4),y=[{name:"vec_size",type:"u32"}];return a&&y.push(...a),`
      ${n.registerUniforms(y).declareVariables(f,m)}

  ${i??""}

  ${n.mainStart()}
    ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${f.getByOffset("global_idx")};
    ${m.setByOffset("global_idx",c)}
  }`},Ge=(n,e,r,t,o,i=n.dataType,a,u)=>{let c=[{type:12,data:Math.ceil(U.size(n.dims)/4)}];return a&&c.push(...a),{name:e,shaderCache:{hint:o,inputDependencies:["type"]},getShaderSource:f=>YN(f,U.size(n.dims),n.dataType,i,r,t,u),getRunData:f=>({outputs:[{dims:n.dims,dataType:i}],dispatchGroup:{x:Math.ceil(U.size(f[0].dims)/64/4)},programUniforms:c})}},ax=n=>{n.compute(Ge(n.inputs[0],"Abs","abs"))},sx=n=>{n.compute(Ge(n.inputs[0],"Acos","acos"))},ux=n=>{n.compute(Ge(n.inputs[0],"Acosh","acosh"))},lx=n=>{n.compute(Ge(n.inputs[0],"Asin","asin"))},cx=n=>{n.compute(Ge(n.inputs[0],"Asinh","asinh"))},dx=n=>{n.compute(Ge(n.inputs[0],"Atan","atan"))},px=n=>{n.compute(Ge(n.inputs[0],"Atanh","atanh"))},fx=n=>we(n),hx=(n,e)=>{let r;switch(e.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${e.to}`)}n.compute(Ge(n.inputs[0],"Cast",r,void 0,e.cacheKey,e.to))},ZN=n=>{let e,r,t=n.length>=2&&n[1].data!==0,o=n.length>=3&&n[2].data!==0;switch(n[0].dataType){case 1:e=t?n[1].getFloat32Array()[0]:-34028234663852886e22,r=o?n[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:e=t?n[1].getUint16Array()[0]:64511,r=o?n[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return we({min:e,max:r})},mx=(n,e)=>{let r=e||ZN(n.inputs),t=gt(n.inputs[0].dataType);n.compute(Ge(n.inputs[0],"Clip",o=>`clamp(${o}, vec4<${t}>(uniforms.min), vec4<${t}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:n.inputs[0].dataType,data:r.min},{type:n.inputs[0].dataType,data:r.max}],[{name:"min",type:t},{name:"max",type:t}]),{inputs:[0]})},gx=n=>{n.compute(Ge(n.inputs[0],"Ceil","ceil"))},yx=n=>{n.compute(Ge(n.inputs[0],"Cos","cos"))},bx=n=>{n.compute(Ge(n.inputs[0],"Cosh","cosh"))},Yo=n=>we(n),_x=(n,e)=>{let r=gt(n.inputs[0].dataType);n.compute(Ge(n.inputs[0],"Elu",t=>`elu_vf32(${t})`,`
  const elu_alpha_ = ${r}(${e.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,e.cacheKey))},Wa=(n="f32")=>`
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
}`,vx=n=>{let e=gt(n.inputs[0].dataType);n.compute(Ge(n.inputs[0],"Erf",r=>`erf_vf32(${r})`,Wa(e)))},wx=n=>{n.compute(Ge(n.inputs[0],"Exp","exp"))},xx=n=>{n.compute(Ge(n.inputs[0],"Floor","floor"))},Tx=n=>{let e=gt(n.inputs[0].dataType);n.compute(Ge(n.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Wa(e)))},Ix=(n,e)=>{let r=gt(n.inputs[0].dataType);n.compute(Ge(n.inputs[0],"LeakyRelu",t=>`select(leaky_relu_alpha_ * ${t}, ${t}, ${t} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${e.alpha});`,e.cacheKey))},Sx=n=>{n.compute(Ge(n.inputs[0],"Not",e=>`!${e}`))},$x=n=>{n.compute(Ge(n.inputs[0],"Neg",e=>`-${e}`))},Ax=n=>{n.compute(Ge(n.inputs[0],"Reciprocal",e=>`1.0/${e}`))},Ox=n=>{let e=gt(n.inputs[0].dataType);n.compute(Ge(n.inputs[0],"Relu",r=>`select(vec4<${e}>(0.0), ${r}, ${r} > vec4<${e}>(0.0))`))},Px=n=>{n.compute(Ge(n.inputs[0],"Sigmoid",e=>`(1.0 / (1.0 + exp(-${e})))`))},Cx=n=>we(n),Ex=(n,e)=>{let r=gt(n.inputs[0].dataType);n.compute(Ge(n.inputs[0],"HardSigmoid",t=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${e.alpha} * ${t} + vec4<${r}>(${e.beta})))`,void 0,e.cacheKey))},Dx=n=>{n.compute(Ge(n.inputs[0],"Sin","sin"))},kx=n=>{n.compute(Ge(n.inputs[0],"Sinh","sinh"))},Nx=n=>{n.compute(Ge(n.inputs[0],"Sqrt","sqrt"))},Lx=n=>{n.compute(Ge(n.inputs[0],"Tan","tan"))},Rx=n=>`sign(${n}) * (1 - exp(-2 * abs(${n}))) / (1 + exp(-2 * abs(${n})))`,zx=n=>{n.compute(Ge(n.inputs[0],"Tanh",Rx))},Cc=(n="f32")=>`
const fast_gelu_a: ${n} = 0.5;
const fast_gelu_b: ${n} = 0.7978845608028654;
const fast_gelu_c: ${n} = 0.035677408136300125;

fn tanh_v(v: vec4<${n}>) -> vec4<${n}> {
  return ${Rx("v")};
}
`,Ec=n=>`(fast_gelu_a + fast_gelu_a * tanh_v(${n} * (fast_gelu_c * ${n} * ${n} + fast_gelu_b))) * ${n}`,Mx=n=>{let e=gt(n.inputs[0].dataType);n.compute(Ge(n.inputs[0],"FastGelu",Ec,Cc(e),void 0,n.inputs[0].dataType))},Bx=(n,e)=>{let r=gt(n.inputs[0].dataType);return n.compute(Ge(n.inputs[0],"ThresholdedRelu",t=>`select(vec4<${r}>(0.0), ${t}, ${t} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${e.alpha});`,e.cacheKey)),0},Fx=n=>{n.compute(Ge(n.inputs[0],"Log","log"))},JN=(n,e)=>`
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
`,QN=n=>`quick_gelu_impl(${n})`,Vx=(n,e)=>{let r=gt(n.inputs[0].dataType);n.compute(Ge(n.inputs[0],"QuickGelu",QN,JN(r,e.alpha),e.cacheKey,n.inputs[0].dataType))}});var eL,tL,Ux,jx=j(()=>{"use strict";Ie();Ae();Ha();eL=n=>{if(n[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(n[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(n[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(n[0].dims[2]!==n[1].dims[0])throw new Error("last dimension of input and bias are not the same")},tL=n=>{let e=n[0].dims.slice();e[2]=e[2]/2;let r=W("input",n[0].dataType,n[0].dims,4),t=W("bias",n[0].dataType,[n[0].dims[2]],4),o=Q("output",n[0].dataType,e,4),i=U.size(e)/4,a=Ke(n[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:e,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:c=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${n[0].dims[2]/4/2}u;

  ${c.declareVariables(r,t,o)}

  ${Wa(a)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${o.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Ux=n=>{eL(n.inputs),n.compute(tL(n.inputs))}});var rL,nL,en,Wx,Hx,qx,Kx,Xx,Yx,Zx,Jx,Qx,eT,tT=j(()=>{"use strict";ve();Ie();Ae();rL=(n,e,r,t,o,i,a,u,c,f,m,y)=>{let _,x;typeof u=="string"?_=x=($,C)=>`${u}((${$}),(${C}))`:typeof u=="function"?_=x=u:(_=u.scalar,x=u.vector);let T=Q("outputData",m,t.length,4),I=W("aData",c,e.length,4),O=W("bData",f,r.length,4),A;if(o)if(i){let $=U.size(e)===1,C=U.size(r)===1,L=e.length>0&&e[e.length-1]%4===0,R=r.length>0&&r[r.length-1]%4===0;$||C?A=T.setByOffset("global_idx",x($?`${I.type.value}(${I.getByOffset("0")}.x)`:I.getByOffset("global_idx"),C?`${O.type.value}(${O.getByOffset("0")}.x)`:O.getByOffset("global_idx"))):A=`
            let outputIndices = ${T.offsetToIndices("global_idx * 4u")};
            let offsetA = ${I.broadcastedIndicesToOffset("outputIndices",T)};
            let offsetB = ${O.broadcastedIndicesToOffset("outputIndices",T)};
            ${T.setByOffset("global_idx",x(a||L?I.getByOffset("offsetA / 4u"):`${I.type.value}(${I.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||R?O.getByOffset("offsetB / 4u"):`${O.type.value}(${O.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else A=T.setByOffset("global_idx",x(I.getByOffset("global_idx"),O.getByOffset("global_idx")));else{if(!i)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let $=(C,L,R="")=>{let M=`aData[indexA${L}][componentA${L}]`,q=`bData[indexB${L}][componentB${L}]`;return`
            let outputIndices${L} = ${T.offsetToIndices(`global_idx * 4u + ${L}u`)};
            let offsetA${L} = ${I.broadcastedIndicesToOffset(`outputIndices${L}`,T)};
            let offsetB${L} = ${O.broadcastedIndicesToOffset(`outputIndices${L}`,T)};
            let indexA${L} = offsetA${L} / 4u;
            let indexB${L} = offsetB${L} / 4u;
            let componentA${L} = offsetA${L} % 4u;
            let componentB${L} = offsetB${L} % 4u;
            ${C}[${L}] = ${R}(${_(M,q)});
          `};m===9?A=`
            var data = vec4<u32>(0);
            ${$("data",0,"u32")}
            ${$("data",1,"u32")}
            ${$("data",2,"u32")}
            ${$("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:A=`
            ${$("outputData[global_idx]",0)}
            ${$("outputData[global_idx]",1)}
            ${$("outputData[global_idx]",2)}
            ${$("outputData[global_idx]",3)}
          `}return`
        ${n.registerUniform("vec_size","u32").declareVariables(I,O,T)}

        ${y??""}

        ${n.mainStart()}
        ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${A}
      }`},nL=(n,e,r,t,o,i,a=r.dataType)=>{let u=r.dims.map(I=>Number(I)??1),c=t.dims.map(I=>Number(I)??1),f=!U.areEqual(u,c),m=u,y=U.size(u),_=!1,x=!1,T=[f];if(f){let I=Xr.calcShape(u,c,!1);if(!I)throw new Error("Can't perform binary op on the given tensors");m=I.slice(),y=U.size(m);let O=U.size(u)===1,A=U.size(c)===1,$=u.length>0&&u[u.length-1]%4===0,C=c.length>0&&c[c.length-1]%4===0;T.push(O),T.push(A),T.push($),T.push(C);let L=1;for(let R=1;R<m.length;R++){let M=u[u.length-R],q=c[c.length-R];if(M===q)L*=M;else break}L%4===0?(x=!0,_=!0):(O||A||$||C)&&(_=!0)}else _=!0;return T.push(_),{name:n,shaderCache:{hint:e+T.map(I=>I.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:I=>rL(I,u,c,m,_,f,x,o,r.dataType,t.dataType,a,i),getRunData:()=>({outputs:[{dims:m,dataType:a}],dispatchGroup:{x:Math.ceil(y/64/4)},programUniforms:[{type:12,data:Math.ceil(U.size(m)/4)},...te(u,c,m)]})}},en=(n,e,r,t,o,i)=>{n.compute(nL(e,o??"",n.inputs[0],n.inputs[1],r,t,i))},Wx=n=>{en(n,"Add",(e,r)=>`${e}+${r}`)},Hx=n=>{en(n,"Div",(e,r)=>`${e}/${r}`)},qx=n=>{en(n,"Equal",{scalar:(e,r)=>`u32(${e}==${r})`,vector:(e,r)=>`vec4<u32>(${e}==${r})`},void 0,void 0,9)},Kx=n=>{en(n,"Mul",(e,r)=>`${e}*${r}`)},Xx=n=>{let e=W("input",n.inputs[0].dataType,n.inputs[0].dims).type.value;en(n,"Pow",{scalar:(t,o)=>`pow_custom(${t},${o})`,vector:(t,o)=>`pow_vector_custom(${t},${o})`},`
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
      `)},Yx=n=>{en(n,"Sub",(e,r)=>`${e}-${r}`)},Zx=n=>{en(n,"Greater",{scalar:(e,r)=>`u32(${e}>${r})`,vector:(e,r)=>`vec4<u32>(${e}>${r})`},void 0,void 0,9)},Jx=n=>{en(n,"Less",{scalar:(e,r)=>`u32(${e}<${r})`,vector:(e,r)=>`vec4<u32>(${e}<${r})`},void 0,void 0,9)},Qx=n=>{en(n,"GreaterOrEqual",{scalar:(e,r)=>`u32(${e}>=${r})`,vector:(e,r)=>`vec4<u32>(${e}>=${r})`},void 0,void 0,9)},eT=n=>{en(n,"LessOrEqual",{scalar:(e,r)=>`u32(${e}<=${r})`,vector:(e,r)=>`vec4<u32>(${e}<=${r})`},void 0,void 0,9)}});var iL,aL,sL,uL,rT,nT,oT=j(()=>{"use strict";ve();Ie();ot();Ae();iL=(n,e)=>{if(!n||n.length<1)throw new Error("too few inputs");let r=0,t=n[r],o=t.dataType,i=t.dims.length;n.forEach((a,u)=>{if(u!==r){if(a.dataType!==o)throw new Error("input tensors should be one type");if(a.dims.length!==i)throw new Error("input tensors should have the same shape");a.dims.forEach((c,f)=>{if(f!==e&&c!==t.dims[f])throw new Error("non concat dimensions must match")})}})},aL=(n,e)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${n}u>(${e});
    for (var i: u32 = 0u; i < ${n}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${n}u;
  }`,sL=(n,e)=>{let r=n.length,t=[];for(let o=0;o<r;++o){let i=e.setByOffset("global_idx",n[o].getByIndices("indices"));r===1?t.push(i):o===0?t.push(`if (inputIndex == ${o}u) { ${i} }`):o===r-1?t.push(`else { ${i} }`):t.push(`else if (inputIndex == ${o}) { ${i} }`)}return t.join(`
`)},uL=(n,e,r,t)=>{let o=U.size(r),i=new Array(n.length),a=new Array(n.length),u=0,c=[],f=[],m=[{type:12,data:o}];for(let I=0;I<n.length;++I)u+=n[I].dims[e],i[I]=u,f.push(n[I].dims.length),a[I]=W(`input${I}`,t,f[I]),c.push("rank"),m.push({type:12,data:i[I]});for(let I=0;I<n.length;++I)m.push(...te(n[I].dims));m.push(...te(r));let y=Q("output",t,r.length),_=y.indicesGet("indices",e),x=Array.from(Array(i.length).keys()).map(I=>`uniforms.sizeInConcatAxis${I}`).join(","),T=I=>`

  ${(()=>{I.registerUniform("outputSize","u32");for(let O=0;O<n.length;O++)I.registerUniform(`sizeInConcatAxis${O}`,"u32");return I.declareVariables(...a,y)})()}

  ${aL(i.length,x)}

  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${y.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${_});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${i.length}u>(${x});
      ${_} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${sL(a,y)}
  }`;return{name:"Concat",shaderCache:{hint:`${e}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:m}),getShaderSource:T}},rT=(n,e)=>{let r=n.inputs,t=r[0].dims,o=U.normalizeAxis(e.axis,t.length);iL(r,o);let i=t.slice();i[o]=r.reduce((u,c)=>u+(c.dims.length>o?c.dims[o]:0),0);let a=r.filter(u=>U.size(u.dims)>0);n.compute(uL(a,o,i,r[0].dataType),{inputs:a})},nT=n=>we({axis:n.axis})});var or,ir,ar,qa,$n=j(()=>{"use strict";ve();Ie();or=(n,e,r="f32")=>{switch(n.activation){case"Relu":return`value = max(value, ${e}(0.0));`;case"Sigmoid":return`value = (${e}(1.0) / (${e}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${e}(${r}(uniforms.clip_min)), ${e}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${e}(0.0), min(${e}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${e}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${n.activation}`)}},ir=(n,e)=>{n.activation==="Clip"?e.push({type:1,data:n.clipMax},{type:1,data:n.clipMin}):n.activation==="HardSigmoid"?e.push({type:1,data:n.alpha},{type:1,data:n.beta}):n.activation==="LeakyRelu"&&e.push({type:1,data:n.alpha})},ar=(n,e)=>{n.activation==="Clip"?e.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):n.activation==="HardSigmoid"?e.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):n.activation==="LeakyRelu"&&e.push({name:"alpha",type:"f32"})},qa=n=>{let e=n?.activation||"";if(e==="HardSigmoid"){let[r,t]=n?.activation_params||[.2,.5];return{activation:e,alpha:r,beta:t}}else if(e==="Clip"){let[r,t]=n?.activation_params||[Tw,Iw];return{activation:e,clipMax:t,clipMin:r}}else if(e==="LeakyRelu"){let[r]=n?.activation_params||[.01];return{activation:e,alpha:r}}return{activation:e}}});var ft,iT,Ka=j(()=>{"use strict";ft=(n,e)=>{switch(n){case 1:return e;case 2:return`vec2<${e}>`;case 3:return`vec3<${e}>`;case 4:return`vec4<${e}>`;default:throw new Error(`${n}-component is not supported.`)}},iT=n=>`
      ${n?"value = value + getBiasByOutputCoords(coords);":""}
      `});var aT,sT=j(()=>{"use strict";aT=n=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${n}.x), i32(${n}.y), i32(${n}.z), 1));
}
`});var Zo,Xa,Ya=j(()=>{"use strict";ve();Ie();Ae();$n();Zo=(n,e,r,t,o)=>{let i=t-r;return`
      ${Array.from({length:r}).map((a,u)=>`
      if (${se(e.shape,u,e.rank)} != 1) {
        ${e.indicesSet(n,u,se(o,u+i,t))}
      } else {
        ${e.indicesSet(n,u,0)}
      }`).join("")}
`},Xa=(n,e,r,t,o=!1,i)=>{let a=n[0].dims,u=n[1].dims,c=a[a.length-2],f=u[u.length-1],m=a[a.length-1],y=Me(f),_=Me(m),x=Me(c),T=U.size(r)/y/x,I=n.length>2,O=t?t.slice(0,-2):r.slice(0,-2),$=[U.size(O),c,f],C=[{type:12,data:T},{type:12,data:c},{type:12,data:f},{type:12,data:m}];ir(e,C),C.push(...te(O,a,u)),I&&C.push(...te(n[2].dims)),C.push(...te($));let L=R=>{let M=Va("batch_dims",n[0].dataType,O.length),q=W("a",n[0].dataType,a.length,_),X=W("b",n[1].dataType,u.length,y),J=Q("output",n[0].dataType,$.length,y),ie=Ke(J.type.tensor),ue=or(e,J.type.value,ie),xe=[q,X],ee="";if(I){let de=o?y:1;xe.push(W("bias",n[2].dataType,n[2].dims.length,de)),ee=`${o?`value += bias[col / ${de}];`:`value += ${J.type.value}(bias[row + i]);`}`}let ye=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];ar(e,ye);let Xe=()=>{let de=`var a_data: ${q.type.value};`;for(let _e=0;_e<_;_e++)de+=`
              let b_data${_e} = b[(b_offset + (k + ${_e}) * uniforms.N + col) / ${y}];`;for(let _e=0;_e<x;_e++){de+=`a_data = a[(a_offset + (row + ${_e}) * uniforms.K + k) / ${_}];`;for(let $e=0;$e<_;$e++)de+=`
            values[${_e}] = fma(${X.type.value}(a_data${_===1?"":`[${$e}]`}), b_data${$e}, values[${_e}]);
`}return de};return`
  ${R.registerUniforms(ye).registerInternalVariables(M).declareVariables(...xe,J)}
  ${R.mainStart()}
    ${R.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${y})) * ${y};
    var index1 = global_idx / (uniforms.N / ${y});
    let stride1 = uniforms.M / ${x};
    let row = (index1 % stride1) * ${x};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${M.offsetToIndices("batch")};`}

    var a_indices: ${q.type.indices};
    ${Zo("a_indices",q,q.rank-2,M.rank,"batch_indices")}
    ${q.indicesSet("a_indices",q.rank-2,0)}
    ${q.indicesSet("a_indices",q.rank-1,0)}
    let a_offset = ${q.indicesToOffset("a_indices")};

    var b_indices: ${X.type.indices};
    ${Zo("b_indices",X,X.rank-2,M.rank,"batch_indices")}
    ${X.indicesSet("b_indices",X.rank-2,0)}
    ${X.indicesSet("b_indices",X.rank-1,0)}
    let b_offset = ${X.indicesToOffset("b_indices")};
    var values: array<${J.type.value}, ${x}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${_}) {
      ${Xe()}
    }
    for (var i = 0u; i < ${x}u; i++) {
      var value = values[i];
      ${ee}
      ${ue}
      let cur_indices = ${J.type.indices}(batch, row + i, col);
      let offset = ${J.indicesToOffset("cur_indices")};
      ${J.setByOffset(`offset / ${y}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${e.activation};${y};${_};${x};${o}`,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:C}),getShaderSource:L}}});var lL,cL,Dc,uT,dL,kc,pL,Jo,Za=j(()=>{"use strict";ve();Ie();Ae();$n();Ya();Ka();lL=(n,e)=>n?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${e?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${e?", batchIndices":""});
        `,cL=(n,e)=>n?`
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
        }`,Dc=(n,e,r="f32",t,o=!1,i=32,a=!1,u=32)=>{let c=e[1]*n[1],f=e[0]*n[0],m=o?c:i,y=o?i:c,_=m/e[0],x=i/e[1];if(!((o&&_===4&&n[1]===4||!o&&(_===3||_===4))&&m%e[0]===0&&i%e[1]===0&&n[0]===4))throw new Error(`If transposeA ${o} is true, innerElementSize ${_} and workPerThread[1] ${n[1]} must be 4.
      Otherwise, innerElementSize ${_} must be 3 or 4.
  tileAWidth ${m} must be divisible by workgroupSize[0]${e[0]}. tileInner ${i} must be divisible by workgroupSize[1] ${e[1]}. colPerThread ${n[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${_}<${r}>, ${m/_}>, ${y}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${f/n[0]}>, ${i}>;

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
          ${lL(o,t)}
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

          ${cL(o,_)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},uT=(n,e)=>n?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${e?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${e?", batchIndices":""});
            `,dL=n=>n?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",kc=(n,e,r="f32",t,o=!1,i=32,a=!1,u=32,c=!1)=>{let f=n[1]*e[1],m=n[0]*e[0],y=o?f:i,_=o?i:f;if(!(_%e[1]===0&&y%e[0]===0&&i%e[1]===0))throw new Error(`tileAHight ${_} must be divisible by workgroupSize[1]${e[1]}, tileAWidth ${y} must be divisible by workgroupSize[0]${e[0]}, tileInner ${i} must be divisible by workgroupSize[1]${e[1]}`);let x=_/e[1],T=y/e[0],I=i/e[1],O=c?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${f};
    let globalColStart = i32(workgroupId.x) * ${m};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${_}; inputRow = inputRow + ${e[1]}) {
        for (var inputCol = localCol; inputCol < ${y}; inputCol = inputCol + ${e[0]}) {
          ${uT(o,t)}
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
let globalRowStart = i32(workgroupId.y) * ${f};

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
      ${uT(o,t)}
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
      ${dL(o)}
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
  var<workgroup> mm_Asub : array<array<${r}, ${y}>, ${_}>;
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
    ${O}
  }
`},pL=(n,e,r,t,o=!1)=>{let[i,a,u,c]=t,f=Ke(t[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${ft(n,f)} {
      var value = ${ft(n,f)}(0.0);
      let col = colIn * ${n};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${Zo("aIndices",a,a.rank-2,i.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${ft(n,f)} {
      var value = ${ft(n,f)}(0.0);
      let col = colIn * ${n};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${Zo("bIndices",u,u.rank-2,i.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${ft(n,f)}) {
      let col = colIn * ${n};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${e?`value = value + ${o?"bias[colIn]":`${ft(n,f)}(bias[row])`};`:""}
        ${r}
        ${c.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Jo=(n,e,r,t,o=!1,i)=>{let a=n[0].dims,u=n[1].dims,c=a.slice(0,-2),f=u.slice(0,-2),m=t?t.slice(0,-2):r.slice(0,-2),y=U.size(m),_=a[a.length-2],x=a[a.length-1],T=u[u.length-1],I=x%4===0&&T%4===0,O=_<=8?[4,1,1]:[4,4,1],A=[8,8,1],$=[Math.ceil(T/A[0]/O[0]),Math.ceil(_/A[1]/O[1]),Math.ceil(y/A[2]/O[2])],C=I?4:1,L=[...c,_,x/C],R=L.length,M=[...f,x,T/C],q=M.length,X=[y,_,T/C],J=[{type:6,data:_},{type:6,data:T},{type:6,data:x}];ir(e,J),J.push(...te(m,L,M));let ie=["rank","rank"],ue=n.length>2;ue&&(J.push(...te(n[2].dims)),ie.push("rank")),J.push(...te(X));let xe=ee=>{let ye=m.length,Xe=Va("batchDims",n[0].dataType,ye,1),de=Ke(n[0].dataType),_e=W("a",n[0].dataType,R,C),$e=W("b",n[1].dataType,q,C),le=Q("result",n[0].dataType,X.length,C),Oe=[_e,$e];if(ue){let pe=o?C:1;Oe.push(W("bias",n[2].dataType,n[2].dims.length,pe))}let ct=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];ar(e,ct);let et=Ke(le.type.tensor),K=or(e,le.type.value,et),Y=pL(C,ue,K,[Xe,_e,$e,le],o);return`
  ${ee.registerUniforms(ct).registerInternalVariables(Xe).declareVariables(...Oe,le)}
  ${Y}
  ${I?Dc(O,A,de,Xe):kc(O,A,de,Xe)}
                   `};return{name:"MatMul",shaderCache:{hint:`${O};${e.activation};${I};${o}`,inputDependencies:ie},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:n[0].dataType}],dispatchGroup:{x:$[0],y:$[1],z:$[2]},programUniforms:J}),getShaderSource:xe}}});var fL,lT,cT=j(()=>{"use strict";ve();Kr();Ae();$n();Ka();sT();Za();fL=(n,e,r,t,o=!1,i,a=4,u=4,c=4,f="f32")=>{let m=ie=>{switch(ie){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${f}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${ie} is not supported.`)}},y=ie=>{switch(ie){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${ie} is not supported.`)}},_=n?`
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
    `,T=n?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",I=n?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",O=n?"row":"col",A=n?"col":"row",$=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${n?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${O} / outWidth;
    let outCol = ${O} % outWidth;

    let WRow = ${A} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${A} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${A} % inChannels;
    var resData = ${ft(a,f)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${T} && xCol >= 0 && xCol < ${I}) {
      ${_}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${m(a)}
    }
    return resData;`,C=n?e&&t?`
    let col = colIn * ${a};
    ${$}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${$}
    }
    return ${ft(a,f)}(0.0);`:t&&r?`
    let col = colIn * ${a};
    ${$}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${$}
    }
    return ${ft(a,f)}(0.0);`,L=n?t&&r?y(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${y(u)}
    }
    return ${ft(u,f)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${y(u)}
    }
    return ${ft(u,f)}(0.0);`,R=ft(c,f),M=n?ft(a,f):ft(u,f),q=n?ft(u,f):ft(a,f),X=or(i,R,f);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${M} {
      ${n?C:L}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${q} {
      ${n?L:C}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${R}) {
      let col = colIn * ${c};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${n?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${x}
      ${iT(o)}
      ${X}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},lT=(n,e,r,t,o,i,a,u,c)=>{let f=e.format==="NHWC",m=f?n[0].dims[3]:n[0].dims[1],y=r[0],_=f?r[2]:r[3],x=f?r[1]:r[2],T=f?r[3]:r[1],I=f&&(m%4===0||m%3===0)&&T%4===0,O=f?T:_*x,A=f?_*x:T,$=[8,8,1],C=t<=8?[4,1,1]:[4,4,1],L=[Math.ceil(O/$[0]/C[0]),Math.ceil(A/$[1]/C[1]),Math.ceil(y/$[2]/C[2])];Ce("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${L}`);let R=I?f&&m%4!==0?3:4:1,M=$[1]*C[1],q=$[0]*C[0],X=Math.max($[0]*R,$[1]),J=t%M===0,ie=o%q===0,ue=i%X===0,xe=I?[R,4,4]:[1,1,1],ee=[{type:6,data:t},{type:6,data:o},{type:6,data:i},{type:6,data:[e.pads[0],e.pads[1]]},{type:6,data:e.strides},{type:6,data:e.dilations}];ir(e,ee),ee.push(...te(n[0].dims,n[1].dims));let ye=["rank","rank"];a&&(ee.push(...te(n[2].dims)),ye.push("rank")),ee.push(...te(r));let Xe=de=>{let _e=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];ar(e,_e);let $e=I?4:1,le=Ke(n[0].dataType),Oe=`
      fn setOutputAtIndex(flatIndex : i32, value : ${I?`vec4<${le}>`:le}) {
        result[flatIndex] = ${I?`vec4<${le}>`:le}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${I?`vec4<${le}>`:le}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${I?"/ 4":""}, value);
      }`,ct=W("x",n[0].dataType,n[0].dims.length,R===3?1:R),et=W("w",n[1].dataType,n[1].dims.length,$e),K=[ct,et],Y=Q("result",n[0].dataType,r.length,$e);if(a){let pe=W("bias",n[2].dataType,n[2].dims.length,$e);K.push(pe),Oe+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${I?`vec4<${le}>`:le} {
          return bias[coords.${f?"w":"y"}${I?"/ 4":""}];
        }`}return`
        ${aT("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${de.registerUniforms(_e).declareVariables(...K,Y)}
        ${Oe}
        ${fL(f,J,ie,ue,a,e,xe[0],xe[1],xe[2],le)}
        ${I?Dc(C,$,le,void 0,!f,X):kc(C,$,le,void 0,!f,X,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${e.cacheKey};${R};${I};${J};${ie};${ue};${M};${q};${X}`,inputDependencies:ye},getRunData:()=>({outputs:[{dims:c?c(r):r,dataType:n[0].dataType}],dispatchGroup:{x:L[0],y:L[1],z:L[2]},programUniforms:ee}),getShaderSource:Xe}}});var hL,dT,Ja,mL,pT,gL,fT,hT,mT=j(()=>{"use strict";ve();Kr();Ie();Ae();$n();Ka();hL=n=>{let e=1;for(let r=0;r<n.length;r++)e*=n[r];return e},dT=n=>typeof n=="number"?[n,n,n]:n,Ja=(n,e)=>e<=1?n:n+(n-1)*(e-1),mL=(n,e,r,t=1)=>{let o=Ja(e,t);return Math.floor((n[0]*(r-1)-r+o)/2)},pT=(n,e,r,t,o)=>{o==null&&(o=mL(n,e[0],t[0]));let i=[0,0,0,r];for(let a=0;a<3;a++)n[a]+2*o>=e[a]&&(i[a]=Math.trunc((n[a]-e[a]+2*o)/t[a]+1));return i},gL=(n,e,r,t,o,i,a,u,c,f)=>{let m,y,_,x;if(n==="VALID"&&(n=0),typeof n=="number"){m={top:n,bottom:n,left:n,right:n,front:n,back:n};let T=pT([e,r,t,1],[u,c,f],1,[o,i,a],n);y=T[0],_=T[1],x=T[2]}else if(Array.isArray(n)){if(!n.every((I,O,A)=>I===A[0]))throw Error(`Unsupported padding parameter: ${n}`);m={top:n[0],bottom:n[1],left:n[2],right:n[3],front:n[4],back:n[5]};let T=pT([e,r,t,1],[u,c,f],1,[o,i,a],n[0]);y=T[0],_=T[1],x=T[2]}else if(n==="SAME_UPPER"){y=Math.ceil(e/o),_=Math.ceil(r/i),x=Math.ceil(t/a);let T=(y-1)*o+u-e,I=(_-1)*i+c-r,O=(x-1)*a+f-t,A=Math.floor(T/2),$=T-A,C=Math.floor(I/2),L=I-C,R=Math.floor(O/2),M=O-R;m={top:C,bottom:L,left:R,right:M,front:A,back:$}}else throw Error(`Unknown padding parameter: ${n}`);return{padInfo:m,outDepth:y,outHeight:_,outWidth:x}},fT=(n,e,r,t,o,i=!1,a="channelsLast")=>{let u,c,f,m,y;if(a==="channelsLast")[u,c,f,m,y]=n;else if(a==="channelsFirst")[u,y,c,f,m]=n;else throw new Error(`Unknown dataFormat ${a}`);let[_,,x,T,I]=e,[O,A,$]=dT(r),[C,L,R]=dT(t),M=Ja(x,C),q=Ja(T,L),X=Ja(I,R),{padInfo:J,outDepth:ie,outHeight:ue,outWidth:xe}=gL(o,c,f,m,O,A,$,M,q,X),ee=i?_*y:_,ye=[0,0,0,0,0];return a==="channelsFirst"?ye=[u,ee,ie,ue,xe]:a==="channelsLast"&&(ye=[u,ie,ue,xe,ee]),{batchSize:u,dataFormat:a,inDepth:c,inHeight:f,inWidth:m,inChannels:y,outDepth:ie,outHeight:ue,outWidth:xe,outChannels:ee,padInfo:J,strideDepth:O,strideHeight:A,strideWidth:$,filterDepth:x,filterHeight:T,filterWidth:I,effectiveFilterDepth:M,effectiveFilterHeight:q,effectiveFilterWidth:X,dilationDepth:C,dilationHeight:L,dilationWidth:R,inShape:n,outShape:ye,filterShape:e}},hT=(n,e,r,t,o,i)=>{let a=i==="channelsLast",u=a?n[0].dims[3]:n[0].dims[1],c=!1,f=[64,1,1],m={x:r.map(($,C)=>C)},y=[Math.ceil(hL(m.x.map($=>r[$]))/f[0]),1,1];Ce("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${y}`);let _=c?a&&u%4!==0?3:4:1,x=U.size(r),T=[{type:12,data:x},{type:12,data:t},{type:12,data:o},{type:12,data:e.strides},{type:12,data:e.dilations}];ir(e,T),T.push(...te(n[0].dims,n[1].dims));let I=["rank","rank"],O=n.length===3;O&&(T.push(...te(n[2].dims)),I.push("rank")),T.push(...te(r));let A=$=>{let C=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:t.length},{name:"pads",type:"u32",length:o.length},{name:"strides",type:"u32",length:e.strides.length},{name:"dilations",type:"u32",length:e.dilations.length}];ar(e,C);let L=c?4:1,R=Ke(n[0].dataType),M=W("x",n[0].dataType,n[0].dims.length,_===3?1:_),q=W("W",n[1].dataType,n[1].dims.length,L),X=[M,q],J=Q("result",n[0].dataType,r.length,L),ie="";if(O){let ee=W("bias",n[2].dataType,n[2].dims.length,L);X.push(ee),ie+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${c?`vec4<${R}>`:R} {
          return bias[${a?se("coords",4,5):se("coords",1,5)}${c?"/ 4":""}];
        }`}let ue=ft(_,R),xe=or(e,ue,R);return`
            ${ie}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${M.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${q.getByIndices("aIndices")};
            }
          ${$.registerUniforms(C).declareVariables(...X,J)}
          ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${J.offsetToIndices("global_idx")};
              let batch = ${se("coords",0,M.rank)};
              let d2 = ${a?se("coords",M.rank-1,M.rank):se("coords",1,M.rank)};
              let xFRCCorner = vec3<u32>(${a?se("coords",1,M.rank):se("coords",2,M.rank)},
              ${a?se("coords",2,M.rank):se("coords",3,M.rank)},
              ${a?se("coords",3,M.rank):se("coords",4,M.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?se("uniforms.x_shape",1,M.rank):se("uniforms.x_shape",2,M.rank)};
              let xShapeZ = ${a?se("uniforms.x_shape",2,M.rank):se("uniforms.x_shape",3,M.rank)};
              let xShapeW = ${a?se("uniforms.x_shape",3,M.rank):se("uniforms.x_shape",4,M.rank)};
              let xShapeU = ${a?se("uniforms.x_shape",4,M.rank):se("uniforms.x_shape",1,M.rank)};
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
              ${xe}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${e.cacheKey};${a};${_};${O}`,inputDependencies:I},getRunData:()=>({outputs:[{dims:r,dataType:n[0].dataType}],dispatchGroup:{x:y[0],y:y[1],z:y[2]},programUniforms:T}),getShaderSource:A}}});var gT,yT,bT=j(()=>{"use strict";ve();Ie();Ae();$n();gT=(n,e,r,t)=>{let o=n.length>2,i=o?"value += b[output_channel];":"",a=n[0].dims,u=n[1].dims,c=e.format==="NHWC",f=c?r[3]:r[1],m=f/e.group,y=c&&m>=4?Me(f):1,_=U.size(r)/y,x=[{type:12,data:_},{type:12,data:e.dilations},{type:12,data:[e.strides[0],e.strides[1]]},{type:12,data:[e.pads[0],e.pads[1]]},{type:12,data:m}];ir(e,x),x.push(...te(a,[u[0],u[1],u[2],u[3]/y]));let T=o?["rank","rank","rank"]:["rank","rank"];x.push(...te([r[0],r[1],r[2],r[3]/y]));let I=O=>{let A=Q("output",n[0].dataType,r.length,y),$=Ke(A.type.tensor),C=or(e,A.type.value,$),L=W("x",n[0].dataType,a.length),R=W("w",n[1].dataType,u.length,y),M=[L,R];o&&M.push(W("b",n[2].dataType,n[2].dims,y));let q=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:e.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];ar(e,q);let X=c?`
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
            let xVal = ${L.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${R.get("wHeight","wWidth","wInChannel","output_channel")};
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

            let xVal = ${L.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${R.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${O.registerUniforms(q).declareVariables(...M,A)}

  ${O.mainStart()}
    ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${A.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${c?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${c?1:2}], outputIndices[${c?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${y} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${c?2:1}];

    var value: ${A.type.value} = ${A.type.value}(0);
    ${X}
    ${i}
    ${C}
    ${A.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${e.cacheKey}_${y}`,inputDependencies:T},getRunData:()=>({outputs:[{dims:t?t(r):r,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:x}),getShaderSource:I}},yT=(n,e,r,t)=>{let o=n.length>2,i=Me(r[3]),a=Me(r[2]),u=U.size(r)/i/a,c=[n[0].dims[0],n[0].dims[1],n[0].dims[2],n[0].dims[3]/i],f=[n[1].dims[0],n[1].dims[1],n[1].dims[2],n[1].dims[3]/i],m=[r[0],r[1],r[2],r[3]/i],y=[{type:12,data:u},{type:6,data:[e.strides[0],e.strides[1]]},{type:6,data:[e.pads[0],e.pads[1]]}];ir(e,y),y.push(...te(c,f,m));let _=(a-1)*e.strides[1]+f[1],x=T=>{let I=Q("output",n[0].dataType,m.length,i),O=Ke(I.type.tensor),A=or(e,I.type.value,O),$=W("x",n[0].dataType,c.length,i),C=W("w",n[1].dataType,f.length,i),L=[$,C];o&&L.push(W("b",n[2].dataType,n[2].dims,i));let R=o?"value += b[output_channel];":"",M=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return ar(e,M),`
  ${T.registerUniforms(M).declareVariables(...L,I)}
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

    var x_vals: array<${$.type.value}, ${_}>;
    var values: array<${I.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${f[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${_}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${$.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${$.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${f[1]}; w_width++) {
          let w_val = ${C.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${R}
      ${A}
      ${I.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${e.cacheKey};${i};${a};${_};${f[0]};${f[1]}`,inputDependencies:o?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:t?t(r):r,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:y}),getShaderSource:x}}});var yL,Nc,bL,Lc,Rc,_T,_L,vL,zc,vT=j(()=>{"use strict";Ie();cT();mT();Za();bT();$n();Ya();sn();yL=(n,e,r,t,o,i)=>{let a=n[0],u=n.slice(i?1:2,i?3:4),c=u.length,f=e[0],y=e.slice(2).map((T,I)=>T+(T-1)*(r[I]-1)),x=u.map((T,I)=>T+t[I]+t[I+c]).map((T,I)=>Math.floor((T-y[I]+o[I])/o[I]));return x.splice(0,0,a),x.splice(i?3:1,0,f),x},Nc=[2,3,1,0],bL=(n,e)=>{if(!n||n.length!==2&&n.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(n[0].dims.length>5)throw new Error("greater than 5D is not supported");if(n[0].dims.length!==n[1].dims.length)throw new Error("filter does not have same dimension as input");let r=n[0].dims[e.format==="NHWC"?n[0].dims.length-1:1],t=n[1].dims[1]*e.group;if(r!==t)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(n.length===3&&(n[2].dims.length!==1||n[1].dims[0]!==n[2].dims[0]))throw new Error("invalid bias");let o=n[0].dims.length-2;if(e.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(e.strides.length!==o)throw new Error(`strides should be ${o}D`);if(e.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(e.kernelShape.length!==0&&e.kernelShape.length!==n[1].dims.length-2)throw new Error("invalid kernel shape")},Lc=(n,e)=>{let r=n.kernelShape.slice();r.length<e[1].dims.length-2&&r.push(...Array(e[1].dims.length-2-r.length).fill(0));for(let i=2;i<e[1].dims.length;++i)r[i-2]===0&&(r[i-2]=e[1].dims[i]);let t=n.pads.slice();Hn.adjustPadsBasedOnAutoPad(e[0].dims,n.strides,n.dilations,r,t,n.format==="NHWC",n.autoPad);let o=Object.assign({},n);return Object.assign(o,{kernelShape:r,pads:t}),o},Rc=n=>{let e=qa(n),r=n.format,t=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][n.auto_pad],o=n.dilations,i=n.group,a=n.kernel_shape,u=n.pads,c=n.strides,f=n.w_is_const();return{autoPad:t,format:r,dilations:o,group:i,kernelShape:a,pads:u,strides:c,wIsConst:f,...e,cacheKey:`${n.format};${e.activation};`}},_T=(n,e,r,t)=>{let o=r.format==="NHWC",i=yL(e[0].dims,e[1].dims,r.dilations,r.pads,r.strides,o);if(r.group!==1){let M=[e[0]];if(o){let X=n.kernelCustomData.wT??n.compute(yt(e[1],Nc),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!n.kernelCustomData.wT&&(n.kernelCustomData.wT=X),M.push(X)}else M.push(e[1]);e.length===3&&M.push(e[2]),!n.adapterInfo.isArchitecture("ampere")&&o&&e[1].dims[0]===r.group&&e[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?n.compute(yT(M,r,i,t),{inputs:M}):n.compute(gT(M,r,i,t),{inputs:M});return}let a=e.length===3,u=e[0].dims[o?1:2],c=e[0].dims[o?2:3],f=e[0].dims[o?3:1],m=e[1].dims[2],y=e[1].dims[3],_=i[o?1:2],x=i[o?2:3],T=i[o?3:1],I=o&&m===u&&y===c&&r.pads[0]===0&&r.pads[1]===0;if(I||m===1&&y===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let M=i[0],q,X,J,ie=[];if(o){let ee=n.kernelCustomData.wT??n.compute(yt(e[1],Nc),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!n.kernelCustomData.wT&&(n.kernelCustomData.wT=ee),I){let ye=u*c*f;q=e[0].reshape([1,M,ye]),X=ee.reshape([1,ye,T]),J=[1,M,T]}else q=e[0].reshape([M,u*c,f]),X=ee.reshape([1,f,T]),J=[M,_*x,T];ie.push(q),ie.push(X)}else q=e[0].reshape([M,f,u*c]),X=e[1].reshape([1,T,f]),J=[M,T,_*x],ie.push(X),ie.push(q);a&&ie.push(e[2]);let ue=J[2],xe=ie[0].dims[ie[0].dims.length-1];ue<8&&xe<8?n.compute(Xa(ie,r,i,J,o,t),{inputs:ie}):n.compute(Jo(ie,r,i,J,o,t),{inputs:ie});return}let O=!0,A=n.kernelCustomData.wT??n.compute(yt(e[1],Nc),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!n.kernelCustomData.wT&&(n.kernelCustomData.wT=A);let $=[e[0],A];a&&$.push(e[2]);let C=o?_*x:T,L=o?T:_*x,R=m*y*f;n.compute(lT($,r,i,C,L,R,a,O,t),{inputs:$})},_L=(n,e)=>{let r=e.format==="NHWC",t=[n.inputs[0].reshape(r?[n.inputs[0].dims[0],1,n.inputs[0].dims[1],n.inputs[0].dims[2]]:[n.inputs[0].dims[0],n.inputs[0].dims[1],1,n.inputs[0].dims[2]]),n.inputs[1].reshape([n.inputs[1].dims[0],n.inputs[1].dims[1],1,n.inputs[1].dims[2]])];n.inputs.length===3&&t.push(n.inputs[2]);let o=[0,e.pads[0],0,e.pads[1]],i=[1].concat(e.strides),a=[1].concat(e.dilations),u=[1].concat(e.kernelShape),c=Lc({...e,pads:o,strides:i,dilations:a,kernelShape:u},t);_T(n,t,c,f=>r?[f[0],f[2],f[3]]:[f[0],f[1],f[3]])},vL=(n,e,r)=>{let t=r.format==="NHWC"?"channelsLast":"channelsFirst",o=Lc(r,e),i=r.autoPad==="NOTSET"?r.pads:r.autoPad,a=fT(e[0].dims,e[1].dims,r.strides,r.dilations,i,!1,t);n.compute(hT(e,o,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],t))},zc=(n,e)=>{if(bL(n.inputs,e),n.inputs[0].dims.length===3)_L(n,e);else if(n.inputs[0].dims.length===5)vL(n,n.inputs,e);else{let r=Lc(e,n.inputs);_T(n,n.inputs,r)}}});var wT,xT=j(()=>{"use strict";ve();Kr();Ie();Ae();wT=(n,e,r)=>{let t=n.length>2,o=e.outputShape,i=e.format==="NHWC",a=e.group,u=n[1].dims,c=u[2]/a,f=u[3],m=i?Me(c):1,y=i?Me(f):1,_=i?f===1?m:y:1,x=U.size(o)/y,T=[Math.ceil(x/64),1,1];Ce("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${T}`);let I=["rank","rank"],O=[e.strides[0],e.strides[1]],A=[e.kernelShape[i?1:2],e.kernelShape[i?2:3]],$=[e.dilations[0],e.dilations[1]],C=[A[0]+(e.dilations[0]<=1?0:(e.kernelShape[i?1:2]-1)*(e.dilations[0]-1)),A[1]+(e.dilations[1]<=1?0:(e.kernelShape[i?2:3]-1)*(e.dilations[1]-1))],L=[C[0]-1-Math.floor((e.pads[0]+e.pads[2])/2),C[1]-1-Math.floor((e.pads[1]+e.pads[3])/2)],R=[{type:12,data:x},{type:12,data:O},{type:12,data:A},{type:12,data:$},{type:12,data:C},{type:6,data:L},{type:12,data:c},{type:12,data:f},...te(n[0].dims,n[1].dims)];t&&(R.push(...te(n[2].dims)),I.push("rank")),R.push(...te(o));let M=q=>{let X=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:O.length},{name:"filter_dims",type:"u32",length:A.length},{name:"dilations",type:"u32",length:A.length},{name:"effective_filter_dims",type:"u32",length:C.length},{name:"pads",type:"i32",length:L.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],J=Ke(n[0].dataType),ie=i?1:2,ue=i?2:3,xe=i?3:1,ee=W("W",n[1].dataType,n[1].dims.length,_),ye=W("Dy",n[0].dataType,n[0].dims.length,m),Xe=[ye,ee];t&&Xe.push(W("bias",n[2].dataType,[o[xe]].length,y));let de=Q("result",n[0].dataType,o.length,y),_e=()=>{let le="";if(m===1)le+=`
        let w_offset = ${ee.indicesToOffset(`${ee.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${ee.getByOffset(`w_offset / ${_}`)};
        dotProd = dotProd + xValue * wValue;`;else if(f===1)le+=`
          let wValue = ${ee.getByOffset(`${ee.indicesToOffset(`${ee.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${_}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let Oe=0;Oe<m;Oe++)le+=`
            let wValue${Oe} = ${ee.getByOffset(`${ee.indicesToOffset(`${ee.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${Oe}, wOutChannel)`)} / ${_}`)};
            dotProd = dotProd + xValue[${Oe}] * wValue${Oe};`;return le},$e=`
            let outputIndices = ${de.offsetToIndices(`global_idx * ${y}`)};
            let batch = ${de.indicesGet("outputIndices",0)};
            let d1 = ${de.indicesGet("outputIndices",xe)};
            let r = ${de.indicesGet("outputIndices",ie)};
            let c = ${de.indicesGet("outputIndices",ue)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${de.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${J}(dyRCorner) + ${J}(wR)) / ${J}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${J}(uniforms.Dy_shape[${ie}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${J}(dyCCorner) + ${J}(wC)) / ${J}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${J}(uniforms.Dy_shape[${ue}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${m}) {
                  let xValue = ${i?ye.getByOffset(`${ye.indicesToOffset(`${ye.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${m}`):ye.get("batch","inputChannel","idyR","idyC")};
                  ${_e()}
                  inputChannel = inputChannel + ${m};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${t?` + bias[d1 / ${y}]`:""};
            ${de.setByOffset("global_idx","value")};
          `;return`
    ${q.registerUniforms(X).declareVariables(...Xe,de)}
      ${q.mainStart()}
      ${q.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${$e}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${e.cacheKey};${m}${_}${y}${f===1}`,inputDependencies:I},getRunData:()=>({dispatchGroup:{x:T[0],y:T[1],z:T[2]},outputs:[{dims:r?r(o):o,dataType:n[0].dataType}],programUniforms:R}),getShaderSource:M}}});var wL,xL,TL,TT,IT,IL,ST,SL,$T,AT=j(()=>{"use strict";xT();$n();sn();wL=(n,e,r,t,o,i)=>(n-1)*e+r+(t-1)*o+1-i,xL=(n,e,r,t,o)=>{let i=Math.floor(n/2);e==="SAME_UPPER"?(r[t]=i,r[o]=n-i):e==="SAME_LOWER"&&(r[t]=n-i,r[o]=i)},TL=(n,e,r,t,o,i,a,u,c,f)=>{let m=n.length-2,y=f.length===0;c.length<m&&c.push(...Array(m-c.length).fill(0));let _=n[0],x=e[u?3:1]*o;for(let T=0,I=n.length-m-(u?1:0);T<m;++T,++I){let O=n[I],A=y?O*a[T]:f[T],$=wL(O,a[T],i[T],e[I],r[T],A);xL($,t,i,T,T+m),y&&f.push(a[T]*(O-1)+c[T]+(e[I]-1)*r[T]+1-i[T]-i[T+m])}f.splice(0,0,_),f.splice(u?3:1,0,x)},TT=(n,e)=>{let r=n.kernelShape.slice();if(n.kernelShape.length===0||n.kernelShape.reduce((y,_)=>y*_,1)===0){r.length=0;for(let y=2;y<e[1].dims.length;++y)r.push(e[1].dims[y])}let t=n.format==="NHWC";r.splice(0,0,e[1].dims[0]),r.splice(t?3:1,0,e[1].dims[1]);let o=n.pads.slice(),i=n.outputShape.slice(),a=n.outputPadding.slice(),u=e[0].dims,c=n.dilations.slice();if(c.reduce((y,_)=>y+_,0)===0){let y=e[0].dims.length-2;c=new Array(y).fill(1)}let f=n.strides.slice();if(f.reduce((y,_)=>y+_,0)===0){let y=e[0].dims.length-2;f=new Array(y).fill(1)}TL(u,r,c,n.autoPad,n.group,o,f,t,a,i);let m=Object.assign({},n);return Object.assign(m,{kernelShape:r,pads:o,outputPadding:a,outputShape:i,dilations:c,strides:f}),m},IT=n=>{let e=qa(n),r=n.format,t=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof n.autoPad>"u"?0:n.autoPad],o=n.dilations,i=n.group,a=n.kernelShape,u=n.pads,c=n.strides,f=n.wIsConst(),m=n.outputPadding,y=n.outputShape;return{autoPad:t,format:r,dilations:o,group:i,kernelShape:a,outputPadding:m,outputShape:y,pads:u,strides:c,wIsConst:f,...e,cacheKey:`${n.format};${e.activation};`}},IL=(n,e)=>{if(!n||n.length!==2&&n.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(n[0].dims.length!==4&&n[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(n[0].dims.length!==n[1].dims.length)throw new Error("filter does not have same dimension as input");let r=n[0].dims[e.format==="NHWC"?n[0].dims.length-1:1],t=n[1].dims[0];if(r!==t)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let o=n[1].dims[1]*e.group;if(n.length===3&&(n[2].dims.length!==1||n[2].dims[0]!==o))throw new Error("invalid bias");let i=n[0].dims.length-2;if(e.dilations.reduce((m,y)=>m+y,0)>0&&e.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(e.strides.reduce((m,y)=>m+y,0)>0&&e.strides.length!==i)throw new Error(`strides should be ${i}D`);if(e.pads.reduce((m,y)=>m+y,0)>0&&e.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(e.outputPadding.length!==i&&e.outputPadding.length!==0)throw new Error(`output_padding should be ${i}D`);if(e.kernelShape.reduce((m,y)=>m+y,0)>0&&e.kernelShape.length!==0&&e.kernelShape.length!==n[1].dims.length-2)throw new Error("invalid kernel shape");if(e.outputShape.length!==0&&e.outputShape.length!==n[0].dims.length-2)throw new Error("invalid output shape")},ST=(n,e,r,t)=>{let o=n.kernelCustomData.wT??n.compute(yt(e[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!n.kernelCustomData.wT&&(n.kernelCustomData.wT=o);let i=[e[0],o];e.length===3&&i.push(e[2]),n.compute(wT(i,r,t),{inputs:i})},SL=(n,e)=>{let r=e.format==="NHWC",t=[n.inputs[0].reshape(r?[n.inputs[0].dims[0],1,n.inputs[0].dims[1],n.inputs[0].dims[2]]:[n.inputs[0].dims[0],n.inputs[0].dims[1],1,n.inputs[0].dims[2]]),n.inputs[1].reshape([n.inputs[1].dims[0],n.inputs[1].dims[1],1,n.inputs[1].dims[2]])];n.inputs.length===3&&t.push(n.inputs[2]);let o=e.kernelShape;(o.length===0||o[0]===0)&&(o=[n.inputs[1].dims[2]]);let i=e.dilations;(i.length===0||i[0]===0)&&(i=[1]);let a=e.strides;(a.length===0||a[0]===0)&&(a=[1]);let u=e.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],a=[1].concat(a),i=[1].concat(i),o=[1].concat(o);let c=e.outputPadding;c=[0].concat(c);let f=TT({...e,pads:u,strides:a,dilations:i,kernelShape:o,outputPadding:c},t);ST(n,t,f,m=>r?[m[0],m[2],m[3]]:[m[0],m[1],m[3]])},$T=(n,e)=>{if(IL(n.inputs,e),n.inputs[0].dims.length===3)SL(n,e);else{let r=TT(e,n.inputs);ST(n,n.inputs,r)}}});var $L,OT,PT,CT=j(()=>{"use strict";ve();Ie();ot();Ae();$L=(n,e,r,t)=>{let o=U.size(e),i=e.length,a=W("input",n,i),u=Q("output",n,i),c=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),f=U.normalizeAxis(c,i),m=y=>{let _=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,x=se("uniforms.input_shape","uniforms.axis",i),T=t.reverse?_+(t.exclusive?" + 1":""):"0",I=t.reverse?x:_+(t.exclusive?"":" + 1");return`
                ${y.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,u)}
                ${y.mainStart()}
                  ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${T};
                  let last : i32 = ${I};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:e,dataType:n}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},{type:12,data:f},...te(e,e)]}),getShaderSource:m}},OT=(n,e)=>{let r=n.inputs[0].dims,t=n.inputs[0].dataType,o=n.inputs[1];n.compute($L(t,r,o,e),{inputs:[0]})},PT=n=>{let e=n.exclusive===1,r=n.reverse===1;return we({exclusive:e,reverse:r})}});var AL,OL,PL,ET,DT,kT=j(()=>{"use strict";ve();Ie();ot();Ae();AL=n=>{if(!n||n.length!==1)throw new Error("DepthToSpace requires 1 input.");if(n[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},OL=(n,e,r,t)=>{let o=[];o.push(`fn perm(i: ${t.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let i=0;i<e;++i)o.push(r.indicesSet("a",n[i],`i[${i}]`));return o.push("return a;}"),o.join(`
`)},PL=(n,e)=>{let r,t,o,i,a,u,c=e.format==="NHWC",f=e.blocksize,m=e.mode==="DCR";c?([r,t,o,i]=n.dims,a=m?[r,t,o,f,f,i/f**2]:[r,t,o,i/f**2,f,f],u=m?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,t,o,i]=[n.dims[0],n.dims[2],n.dims[3],n.dims[1]],a=m?[r,f,f,i/f**2,t,o]:[r,i/f**2,f,f,t,o],u=m?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let y=n.reshape(a),_=y.dims.length,x=n.dataType,T=W("a",x,_),I=Q("output",x,_),O=A=>`
  ${A.registerUniform("output_size","u32").declareVariables(T,I)}

  ${OL(u,_,T,I)}

  ${A.mainStart()}
    ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${I.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${I.setByOffset("global_idx",T.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${n.dims};${e.blocksize};${e.mode}`,inputDependencies:["rank"]},getRunData:A=>{let $=c?[r,t*f,o*f,i/f**2]:[r,i/f**2,t*f,o*f],C=U.size($),L=y.dims,R=U.sortBasedOnPerm(L,u);return{outputs:[{dims:$,dataType:A[0].dataType}],dispatchGroup:{x:Math.ceil(C/64)},programUniforms:[{type:12,data:C},...te(L,R)]}},getShaderSource:O}},ET=(n,e)=>{AL(n.inputs),n.compute(PL(n.inputs[0],e))},DT=n=>we({blocksize:n.blocksize,mode:n.mode,format:n.format})});var Mc,Qa,NT,CL,EL,Bc,Fc,LT,DL,RT,zT,MT=j(()=>{"use strict";ve();Ie();ot();Ae();Mc="[a-zA-Z]|\\.\\.\\.",Qa="("+Mc+")+",NT="^"+Qa+"$",CL="("+Qa+",)*"+Qa,EL="^"+CL+"$",Bc=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,r){let t=this.symbolToIndices.get(e);t===void 0?t=[r]:t.push(r),this.symbolToIndices.set(e,t)}},Fc=class{constructor(e,r){this.equation=r;this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[t,o]=r.includes("->")?r.split("->",2):[r,""];if(!t.match(RegExp(EL)))throw new Error("Invalid LHS term");if(t.split(",").forEach((u,c)=>{let f=e[c].dims.slice();if(!u.match(RegExp(NT)))throw new Error("Invalid LHS term");let m=this.processTerm(u,!0,f,c);this.lhs.push(m)}),o==="")o+=[...this.symbolToInfo.entries()].filter(([u,c])=>c.count===1||u==="...").map(([u])=>u).join("");else if(!o.match(RegExp(Qa)))throw new Error("Invalid RHS");o.match(RegExp(Mc,"g"))?.forEach(u=>{if(u==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let c=this.symbolToInfo.get(u);if(c===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(c.dimValue)}}),this.rhs=this.processTerm(o,!1,this.outputDims)}addSymbol(e,r,t){let o=this.symbolToInfo.get(e);if(o!==void 0){if(o.dimValue!==r&&o.count!==1)throw new Error("Dimension mismatch");o.count++,o.inputIndices.push(t)}else o={count:1,dimValue:r,inputIndices:[t]};this.symbolToInfo.set(e,o)}processTerm(e,r,t,o=-1){let i=t.length,a=!1,u=[],c=0;if(!e.match(RegExp(NT))&&!r&&e!=="")throw new Error("Invalid LHS term");let f=e.match(RegExp(Mc,"g")),m=new Bc(o);return f?.forEach((y,_)=>{if(y==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let x=i-f.length+1;if(x<0)throw new Error("Ellipsis out of bounds");if(u=t.slice(c,c+x),this.hasEllipsis){if(this.ellipsisDims.length!==u.length||this.ellipsisDims.toString()!==u.toString())throw new Error("Ellipsis dimensions mismatch")}else if(r)this.hasEllipsis=!0,this.ellipsisDims=u;else throw new Error("Ellipsis must be specified in the LHS");for(let T=0;T<u.length;T++){let I=String.fromCharCode("0".charCodeAt(0)+T);m.addSymbol(I,_+T),this.addSymbol(I,t[c++],o)}}else m.addSymbol(y,_+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(y,t[c++],o)}),m}},LT=n=>n+"_max",DL=(n,e,r,t)=>{let i=n.map(m=>m.length).map((m,y)=>W(`input${y}`,e,m)),a=U.size(t),u=Q("output",e,t.length),c=[...r.symbolToInfo.keys()].filter(m=>!r.rhs.symbolToIndices.has(m)),f=m=>{let y=[],_="var prod = 1.0;",x="var sum = 0.0;",T="sum += prod;",I=[],O=[],A=[],$=[],C=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((R,M)=>{if(r.rhs.symbolToIndices.has(M)){let q=r.rhs.symbolToIndices.get(M)?.[0];q!==void 0&&r.lhs.forEach((X,J)=>{if(R.inputIndices.includes(J)){let ie=X.symbolToIndices.get(M);if(ie===void 0)throw new Error("Invalid symbol error");ie.forEach(ue=>{y.push(`${i[J].indicesSet(`input${J}Indices`,ue,u.indicesGet("outputIndices",q))}`)})}})}else r.lhs.forEach((q,X)=>{if(R.inputIndices.includes(X)){let J=q.symbolToIndices.get(M);if(J===void 0)throw new Error("Invalid symbol error");J.forEach(ie=>{I.push(`${i[X].indicesSet(`input${X}Indices`,ie,`${M}`)}`)}),$.push(`prod *= ${i[X].getByIndices(`input${X}Indices`)};`)}}),O.push(`for(var ${M}: u32 = 0; ${M} < uniforms.${LT(M)}; ${M}++) {`),A.push("}")});let L=C?[...y,`let sum = ${i.map((R,M)=>R.getByIndices(`input${M}Indices`)).join(" * ")};`]:[...y,x,...O,...I,_,...$,T,...A];return`
            ${m.registerUniforms(c.map(R=>({name:`${LT(R)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...i,u)}

            ${m.mainStart()}
            ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${u.offsetToIndices("global_idx")};
            ${i.map((R,M)=>`var input${M}Indices: ${i[M].type.indices};`).join(`
`)}
            ${L.join(`
`)};
            ${u.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:n.map(()=>"rank")},getRunData:()=>{let m=c.filter(_=>r.symbolToInfo.has(_)).map(_=>({type:12,data:r.symbolToInfo.get(_)?.dimValue||0}));m.push({type:12,data:a});let y=n.map((_,x)=>[...te(_)]).reduce((_,x)=>_.concat(x),m);return y.push(...te(t)),{outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:y}},getShaderSource:f}},RT=(n,e)=>{let r=new Fc(n.inputs,e.equation),t=r.outputDims,o=n.inputs.map((i,a)=>i.dims);n.compute(DL(o,n.inputs[0].dataType,r,t))},zT=n=>{let e=n.equation.replace(/\s+/g,"");return we({equation:e})}});var kL,BT,NL,LL,FT,VT=j(()=>{"use strict";ve();Ie();Ae();kL=n=>{if(!n||n.length!==2)throw new Error("Expand requires 2 input.");let e=n[0].dims,r=Array.from(n[1].getBigInt64Array(),Number),t=r.length<e.length?0:r.length-e.length,o=e.length<r.length?0:e.length-r.length;for(;t<r.length&&o<e.length;++t,++o)if(r[t]!==e[o]&&r[t]!==1&&e[o]!==1)throw new Error("Expand requires shape to be broadcastable to input")},BT=(n,e)=>{let r=n.length-e.length,t=[];for(let o=0;o<r;++o)t.push(n[o]);for(let o=0;o<e.length;++o)t.push(e[o]===1?n[o+r]:e[o]);return t},NL=(n,e)=>n.length>e.length?BT(n,e):BT(e,n),LL=n=>{let e=n[0].dims,r=Array.from(n[1].getBigInt64Array(),Number),t=NL(e,r),o=n[0].dataType,i=o===9||U.size(e)===1,a=o===9||e.length>0&&e[e.length-1]%4===0?4:1,u=i||t.length>0&&t[t.length-1]%4===0?4:1,c=Math.ceil(U.size(t)/u),f=y=>{let _=W("input",o,e.length,a),x=Q("output",o,t.length,u),T;if(o===9){let I=(O,A,$="")=>`
          let outputIndices${A} = ${x.offsetToIndices(`outputOffset + ${A}u`)};
          let offset${A} = ${_.broadcastedIndicesToOffset(`outputIndices${A}`,x)};
          let index${A} = offset${A} / 4u;
          let component${A} = offset${A} % 4u;
          ${O}[${A}] = ${$}(${_.getByOffset(`index${A}`)}[component${A}]);
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
    ${y.registerUniform("vec_size","u32").declareVariables(_,x)}
    ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${T}`},m=[{type:12,data:c},...te(e,t)];return{name:"Expand",shaderCache:{hint:`${t.length};${a}${u}`,inputDependencies:["rank"]},getShaderSource:f,getRunData:()=>({outputs:[{dims:t,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:m})}},FT=n=>{kL(n.inputs),n.compute(LL(n.inputs),{inputs:[0]})}});var RL,GT,UT=j(()=>{"use strict";ve();Ie();Ae();Ha();RL=n=>{let e=n[0].dataType,r=U.size(n[0].dims),t=U.size(n[1].dims),o=t%4===0,i=a=>{let u=W("x",e,[1],4),c=W("bias",e,[1],4),f=Q("y",e,[1],4),m=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],y=x=>`
      let bias${x}_offset: u32 = (global_idx * 4 + ${x}) % uniforms.bias_size;
      let bias${x} = ${c.getByOffset(`bias${x}_offset / 4`)}[bias${x}_offset % 4];`,_=o?`
      let bias = ${c.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${y(0)}${y(1)}${y(2)}${y(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(m).declareVariables(u,c,f)}

    ${Cc(gt(e))}

    ${a.mainStart(qn)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${_}
      let x_in = x + bias;
      ${f.setByOffset("global_idx",Ec("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${o}`,inputDependencies:["type","type"]},getShaderSource:i,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:t}],dispatchGroup:{x:Math.ceil(r/qn/4)}})}},GT=n=>{n.inputs.length<2||U.size(n.inputs[1].dims)===0?Mx(n):n.compute(RL(n.inputs))}});var zL,ML,jT,WT,HT=j(()=>{"use strict";ve();Ie();ot();Ae();zL=n=>{if(!n||n.length!==2)throw new Error("Gather requires 2 inputs.")},ML=(n,e)=>{let r=n[0].dims,t=n[1].dims,o=r.length,i=U.normalizeAxis(e.axis,o),a=r.slice(0);a.splice(i,1,...t);let u=r[i],c=n[0].dataType===9?4:1,f=Math.ceil(U.size(a)/c),m=[{type:12,data:f},{type:6,data:u},{type:12,data:i},...te(n[0].dims,n[1].dims,a)],y=_=>{let x=W("data",n[0].dataType,n[0].dims.length,c),T=W("inputIndices",n[1].dataType,n[1].dims.length),I=Q("output",n[0].dataType,a.length,c),O=$=>{let C=t.length,L=`var indicesIndices${$}  = ${T.type.indices}(0);`;for(let R=0;R<C;R++)L+=`${C>1?`indicesIndices${$}[${R}]`:`indicesIndices${$}`} = ${a.length>1?`outputIndices${$}[uniforms.axis + ${R}]`:`outputIndices${$}`};`;L+=`
          var idx${$} = ${T.getByIndices(`indicesIndices${$}`)};
          if (idx${$} < 0) {
            idx${$} = idx${$} + uniforms.axisDimLimit;
          }
          var dataIndices${$} : ${x.type.indices};
        `;for(let R=0,M=0;R<o;R++)R===i?(L+=`${o>1?`dataIndices${$}[${R}]`:`dataIndices${$}`} = u32(idx${$});`,M+=C):(L+=`${o>1?`dataIndices${$}[${R}]`:`dataIndices${$}`} = ${a.length>1?`outputIndices${$}[${M}]`:`outputIndices${$}`};`,M++);return L},A;if(n[0].dataType===9){let $=(C,L,R="")=>`
          let outputIndices${L} = ${I.offsetToIndices(`outputOffset + ${L}u`)};
          ${O(L)};
          let offset${L} = ${x.indicesToOffset(`dataIndices${L}`)};
          let index${L} = offset${L} / 4u;
          let component${L} = offset${L} % 4u;
          ${C}[${L}] = ${R}(${x.getByOffset(`index${L}`)}[component${L}]);
        `;A=`
        let outputOffset = global_idx * ${c};
        var value = vec4<u32>(0);
        ${$("value",0,"u32")}
        ${$("value",1,"u32")}
        ${$("value",2,"u32")}
        ${$("value",3,"u32")}
        ${I.setByOffset("global_idx","value")}
      `}else A=`
      let outputIndices = ${I.offsetToIndices("global_idx")};
      ${O("")};
      let value = ${x.getByIndices("dataIndices")};
      ${I.setByOffset("global_idx","value")};
      `;return`
      ${_.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(x,T,I)}
      ${_.mainStart()}
        ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${A}
      }`};return{name:"Gather",shaderCache:{hint:e.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:y}},jT=n=>we({axis:n.axis}),WT=(n,e)=>{let r=n.inputs;zL(r),n.compute(ML(n.inputs,e))}});var BL,qT,KT,XT=j(()=>{"use strict";ve();Ie();Ae();BL=(n,e,r,t,o,i,a,u,c)=>{let f=[{type:12,data:i},{type:12,data:t},{type:12,data:o},{type:12,data:r},{type:12,data:a},{type:12,data:u},{type:12,data:c}],m=[i];f.push(...te(e.dims,m));let y=_=>{let x=W("indices_data",e.dataType,e.dims.length),T=Q("input_slice_offsets_data",12,1,1),I=[x,T],O=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:o.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${_.registerUniforms(O).declareVariables(...I)}
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
  }`};return n.compute({name:"computeSliceOffsets",shaderCache:{hint:`${o.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:m,dataType:n.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:f}),getShaderSource:y},{inputs:[e],outputs:[-1]})[0]},qT=(n,e)=>{let r=n.inputs,t=r[0].dims,o=r[0].dataType,i=r[1].dims,a=i[i.length-1],u=U.sizeToDimension(i,i.length-1),c=U.sizeFromDimension(t,e.batchDims+a),f=U.sizeToDimension(t,e.batchDims),m=U.sizeFromDimension(t,e.batchDims),y=u/f,_=new Array(a),x=c;for(let L=0;L<a;++L)_[a-1-L]=x,x*=t[e.batchDims+a-1-L];let T=BL(n,r[1],_,e.batchDims,t,u,y,m,a),I=e.batchDims+a;if(I>t.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let O=i.slice(0,-1).concat(t.slice(I)),A=U.size(O),$=[{type:12,data:A},{type:12,data:c},...te(r[0].dims,T.dims,O)],C=L=>{let R=W("data",r[0].dataType,r[0].dims.length),M=W("slice_offsets",12,T.dims.length),q=Q("output",r[0].dataType,O.length);return`
          ${L.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(R,M,q)}
            ${L.mainStart()}
            ${L.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};n.compute({name:"GatherND",shaderCache:{hint:e.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:O,dataType:o}],dispatchGroup:{x:Math.ceil(A/64)},programUniforms:$}),getShaderSource:C},{inputs:[r[0],T]})},KT=n=>({batchDims:n.batch_dims,cacheKey:""})});var FL,VL,YT,ZT,JT=j(()=>{"use strict";ve();Ie();ot();Ae();FL=(n,e)=>{if(n.length<3||n.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=U.normalizeAxis(e.quantizeAxis,n[0].dims.length),t=e.blockSize,o=n[0],i=n[2],a=n.length===4?n[3]:void 0;if(i.dims.length!==o.dims.length||!o.dims.map((u,c)=>c===r?Math.ceil(u/t)===i.dims[c]:u===i.dims[c]).reduce((u,c)=>u&&c,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==o.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==i.dims.length||!a.dims.map((u,c)=>u===i.dims[c]).reduce((u,c)=>u&&c,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},VL=(n,e)=>{let r=n[0].dims,t=n[1].dims,o=r.length,i=U.normalizeAxis(e.gatherAxis,o),a=U.normalizeAxis(e.quantizeAxis,o),u=r.slice(0);u.splice(i,1,...t);let c=U.size(u),f=n[2].dataType,y=n[0].dataType===22,_=[{type:12,data:c},{type:12,data:a},{type:12,data:i},{type:12,data:e.blockSize},...te(...n.map((T,I)=>T.dims),u)],x=T=>{let I=W("data",n[0].dataType,n[0].dims.length),O=W("inputIndices",n[1].dataType,n[1].dims.length),A=W("scales",n[2].dataType,n[2].dims.length),$=n.length>3?W("zeroPoint",n[3].dataType,n[3].dims.length):void 0,C=Q("output",f,u.length),L=[I,O,A];$&&L.push($);let R=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${T.registerUniforms(R).declareVariables(...L,C)}
        ${T.mainStart()}
        let output_indices = ${C.offsetToIndices("global_idx")};
        var indices_indices = ${O.type.indices}(0);
        ${(()=>t.length>1?`
          for (var i: u32 = 0; i < ${t.length}; i++) {
            let index = ${C.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${O.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${C.indicesGet("output_indices","uniforms.gather_axis")};`)()};
        var data_indices = ${I.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${C.indicesGet("output_indices","i")};
          ${I.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${O.getByIndices("indices_indices")};
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
        let quantized_data_vec = ${y?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${A.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${A.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${A.getByIndices("scale_indices")};
        ${(()=>$?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${$.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${$.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${y?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0")()};
        let dequantized_data = ${gt(f)}(quantized_data - zero_point) * scale;
        ${C.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${e.cacheKey};${n.filter((T,I)=>I!==1).map(T=>T.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:n.length},(T,I)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:f}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:_}),getShaderSource:x}},YT=(n,e)=>{let r=n.inputs;FL(r,e),n.compute(VL(n.inputs,e))},ZT=n=>we({blockSize:n.blockSize,gatherAxis:n.gatherAxis,quantizeAxis:n.quantizeAxis})});var GL,UL,QT,e1,t1=j(()=>{"use strict";ve();Ie();ot();Ae();GL=n=>{if(!n||n.length!==2)throw new Error("GatherElements requires 2 inputs.");if(n[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(n[0].dims.length!==n[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},UL=(n,e)=>{let r=n[0].dims,t=n[0].dataType,o=r.length,i=n[1].dims,a=n[1].dataType,u=U.normalizeAxis(e.axis,o),c=r[u],f=i.slice(0),m=U.size(f),y=W("input",t,o),_=W("indicesInput",a,i.length),x=Q("output",t,f.length),T=[{type:12,data:m},{type:6,data:c},{type:12,data:u}];return T.push(...te(r,i,f)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:f,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:T}),getShaderSource:A=>`
      ${A.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(y,_,x)}
      ${A.mainStart()}
      ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${x.offsetToIndices("global_idx")};

      var idx = ${_.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${y.type.indices}(outputIndices);
      ${y.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${y.getByIndices("inputIndices")};

      ${x.setByOffset("global_idx","value")};
  }`}},QT=n=>we({axis:n.axis}),e1=(n,e)=>{let r=n.inputs;GL(r),n.compute(UL(n.inputs,e))}});var jL,WL,r1,n1,o1=j(()=>{"use strict";ve();Ie();Ae();jL=n=>{if(!n)throw new Error("Input is missing");if(n.length<2||n.length>3)throw new Error("Invaid input number.");if(n.length===3&&n[2].dims.length>2)throw new Error("Invalid input shape of C");if(n[0].dataType!==n[1].dataType||n.length===3&&n[0].dataType!==n[2].dataType)throw new Error("Input types are mismatched")},WL=(n,e)=>{let r=n[0].dims.slice(),t=n[1].dims.slice(),[o,i,a]=Ba.getShapeOfGemmResult(r,e.transA,t,e.transB,n.length===3?n[2].dims:void 0),u=[o,i];if(!u)throw new Error("Can't use gemm on the given tensors");let c=16,f=Math.ceil(i/c),m=Math.ceil(o/c),y=!0,_=U.size(u),x=[{type:12,data:y?f:_},{type:12,data:o},{type:12,data:i},{type:12,data:a},{type:1,data:e.alpha},{type:1,data:e.beta}],T=["type","type"];n.length===3&&(x.push(...te(n[2].dims)),T.push("rank")),x.push(...te(u));let I=A=>{let $="";e.transA&&e.transB?$="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":e.transA&&!e.transB?$="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!e.transA&&e.transB?$="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!e.transA&&!e.transB&&($="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let C=e.alpha===1?"":"value *= uniforms.alpha;",L=W("a",n[0].dataType,n[0].dims),R=W("b",n[1].dataType,n[1].dims),M=L.type.value,q=null,X=[L,R];n.length===3&&(q=W("c",n[2].dataType,n[2].dims.length),X.push(q));let J=Q("output",n[0].dataType,u.length);X.push(J);let ie=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${A.registerUniforms(ie).declareVariables(...X)}

  ${A.mainStart()}
    ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${M}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${$}
    }

    ${C}
    ${(()=>q!=null?`let cOffset = ${q.broadcastedIndicesToOffset("vec2(m, n)",J)}; value += ${M}(uniforms.beta) * ${q.getByOffset("cOffset")};`:"")()}
    output[global_idx] = value;
  }`},O=A=>{let $=W("a",n[0].dataType,n[0].dims),C=W("b",n[1].dataType,n[1].dims),L=null,R=[$,C];n.length===3&&(L=W("c",n[2].dataType,n[2].dims.length),R.push(L));let M=Q("output",n[0].dataType,u.length);R.push(M);let q=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],X="",J="";e.transA&&e.transB?(J=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
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
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
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
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
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
        tile_a[local_id.y][local_id.x] = ${$.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${C.type.value}(0);
      }
      `,X="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let ie=e.alpha===1?"":"value *= uniforms.alpha;";return`
  ${A.registerUniforms(q).declareVariables(...R)}
  var<workgroup> tile_a: array<array<${$.type.storage}, ${c}>, ${c}>;
  var<workgroup> tile_b: array<array<${C.type.storage}, ${c}>, ${c}>;
  ${A.mainStart([c,c,1])}
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
    ${(()=>L!=null?`let cOffset = ${L.broadcastedIndicesToOffset("vec2(m, n)",M)}; value += ${M.type.value}(uniforms.beta) * ${L.getByOffset("cOffset")};`:"")()}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return y?{name:"GemmShared",shaderCache:{hint:`${e.cacheKey}`,inputDependencies:T},getRunData:()=>({outputs:[{dims:u,dataType:n[0].dataType}],dispatchGroup:{x:f*m},programUniforms:x}),getShaderSource:O}:{name:"Gemm",shaderCache:{hint:`${e.cacheKey}`,inputDependencies:T},getRunData:()=>({outputs:[{dims:u,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:x}),getShaderSource:I}},r1=n=>{let e=n.transA,r=n.transB,t=n.alpha,o=n.beta;return{transA:e,transB:r,alpha:t,beta:o,cacheKey:`${n.transA};${n.transB};${n.alpha===1}`}},n1=(n,e)=>{jL(n.inputs),n.compute(WL(n.inputs,e))}});var un,An,go,yo,HL,qL,KL,XL,YL,ZL,JL,QL,i1,a1,s1=j(()=>{"use strict";ve();Ie();ot();Ae();[un,An,go,yo]=[0,1,2,3],HL=n=>{if(n[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(n[0].dims.length!==n[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(n[0].dims.length-2!==n[1].dims[n[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${n[0].dims.length-2}`);if(n[0].dims[0]!==n[1].dims[0])throw new Error("grid batch size must match input batch size")},qL=`
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
`,KL=n=>`
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
`,XL=n=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${n.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,YL=n=>`
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
`,ZL=(n,e,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${e} {
     var pixel = ${e}(0);
     var indices = vec4<u32>(0);
     indices[${un}] = batch;
     indices[${An}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${go}] = u32(r);
            indices[${yo}] = u32(c);
          }
        `;case"border":return`
          indices[${go}] = u32(clamp(r, 0, H - 1));
          indices[${yo}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${go}] = gs_reflect(r, border[1], border[3]);
          indices[${yo}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${n.getByIndices("indices")};
  }
`,JL=(n,e,r)=>(()=>{switch(r.mode){case"nearest":return`
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
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${n.setByOffset("global_idx","result")}`,QL=(n,e)=>{let r=W("x",n[0].dataType,n[0].dims.length),t=[n[1].dims[0],n[1].dims[1],n[1].dims[2]],o=W("grid",n[1].dataType,t.length,2),i=[n[0].dims[0],n[0].dims[1],n[1].dims[1],n[1].dims[2]];e.format==="NHWC"&&(i=[n[0].dims[0],n[1].dims[1],n[1].dims[2],n[0].dims[3]],[un,An,go,yo]=[0,3,1,2]);let a=Q("output",n[0].dataType,i.length),u=r.type.value,c=U.size(i),f=[{type:12,data:c},...te(n[0].dims,t,i)],m=y=>`
  ${y.registerUniform("output_size","u32").declareVariables(r,o,a)}
  ${qL}
  ${KL(u)}
  ${XL(e)}
  ${YL(e)}
  ${ZL(r,u,e)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${go}]);
      let W_in = i32(uniforms.x_shape[${yo}]);

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
      var grid_indices = vec3<u32>(indices[${un}], indices[${go}], indices[${yo}]);
      let nxy = ${o.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${JL(a,u,e)}
  }`;return{name:"GridSample",shaderCache:{hint:`${e.cacheKey}`,inputDependencies:["type","type"]},getRunData:y=>{let _=U.size(i);return{outputs:[{dims:i,dataType:y[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:f}},getShaderSource:m}},i1=(n,e)=>{HL(n.inputs),n.compute(QL(n.inputs,e))},a1=n=>we({alignCorners:n.align_corners,mode:n.mode,paddingMode:n.padding_mode,format:n.format})});var Et,rR,l1,u1,nR,Qo,c1,Vc=j(()=>{"use strict";ve();Ie();ot();Ma();ja();Ae();sn();Et=(n,e)=>n.length>e&&n[e].dims.length>0?n[e]:void 0,rR=(n,e)=>{let r=n[0],t=Et(n,1),o=Et(n,2),i=Et(n,3),a=Et(n,4),u=Et(n,5),c=Et(n,6),f=Et(n,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let m=r.dims[0],y=r.dims[1],_=r.dims.length===3?r.dims[2]:e.numHeads*r.dims[4],x=y,T=0,I=0,O=Math.floor(_/e.numHeads);if(c&&f&&U.size(c.dims)&&U.size(f.dims)){if(c.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(c.dims[0]!==m||c.dims[1]!==e.numHeads||c.dims[3]!==O)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(f.dims[0]!==m||f.dims[1]!==e.numHeads||f.dims[3]!==O)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(c.dims[2]!==f.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(f.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');T=c.dims[2],I=c.dims[2]}else if(c&&U.size(c.dims)||f&&U.size(f.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let A;if(t&&U.size(t.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(t.dims.length<3||t.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==t.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(t.dims.length===3){if(t.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');A=2,x=t.dims[1]}else if(t.dims.length===5){if(t.dims[2]!==e.numHeads||t.dims[3]!==2||t.dims[4]!==O)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(o)throw new Error('Expect "value" be none when "key" has packed kv format.');A=5,x=t.dims[1]}else{if(t.dims[1]!==e.numHeads||t.dims[3]!==O)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');A=0,x=t.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==e.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');A=3}if(i&&U.size(i.dims)>0){if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(t&&t.dims.length===5&&t.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let $=T+x,C=0;if(a&&U.size(a.dims)>0){C=8;let q=a.dims;throw q.length===1?q[0]===m?C=1:q[0]===3*m+2&&(C=3):q.length===2&&q[0]===m&&q[1]===$&&(C=5),C===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let L=!1,R=_;if(o&&U.size(o.dims)>0){if(o.dims.length!==3&&o.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==o.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(o.dims.length===3){if(x!==o.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');R=o.dims[2]}else{if(x!==o.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');R=o.dims[1]*o.dims[3],L=!0}}let M=!1;if(a&&U.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(u&&U.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==m||u.dims[1]!==e.numHeads||u.dims[2]!==y||u.dims[3]!==$)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:m,sequenceLength:y,pastSequenceLength:T,kvSequenceLength:x,totalSequenceLength:$,maxSequenceLength:I,inputHiddenSize:0,hiddenSize:_,vHiddenSize:R,headSize:O,vHeadSize:Math.floor(R/e.numHeads),numHeads:e.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:e.maskFilterValue,maskType:C,scale:e.scale,broadcastResPosBias:M,passPastInKv:L,qkvFormat:A}},l1=n=>we({...n}),u1=we({perm:[0,2,1,3]}),nR=(n,e,r,t,o,i,a)=>{let u=[t,o,i],c=U.size(u),f=[{type:12,data:c},{type:12,data:a},{type:12,data:i}],m=y=>{let _=Q("qkv_with_bias",e.dataType,u),x=W("qkv",e.dataType,u),T=W("bias",r.dataType,u),I=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${y.registerUniforms(I).declareVariables(x,T,_)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return n.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:e.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:f}),getShaderSource:m},{inputs:[e,r],outputs:[-1]})[0]},Qo=(n,e,r,t,o,i,a,u)=>{let c=i;if(a&&U.size(a.dims)>0){if(t===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return c=nR(n,i,a,e,t,r*o,u),c=c.reshape([e,t,r,o]),r===1||t===1?c:n.compute(yt(c,u1.perm),{inputs:[c],outputs:[-1]})[0]}else return i.dims.length===3&&(c=i.reshape([e,t,r,o])),r===1||t===1?c:n.compute(yt(c,u1.perm),{inputs:[c],outputs:[-1]})[0]},c1=(n,e)=>{let r=rR(n.inputs,e),t=n.inputs[0],o=Et(n.inputs,1),i=Et(n.inputs,2),a=Et(n.inputs,3),u=Et(n.inputs,4),c=Et(n.inputs,5),f=Et(n.inputs,6),m=Et(n.inputs,7);if(t.dims.length===5)throw new Error("Packed QKV is not implemented");if(o?.dims.length===5)throw new Error("Packed KV is not implemented");let y=o&&i&&o.dims.length===4&&i.dims.length===4,_=Qo(n,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t,a,0);if(y)return mo(n,_,o,i,u,void 0,f,m,c,r);if(!o||!i)throw new Error("key and value must be provided");let x=Qo(n,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,o,a,r.hiddenSize),T=Qo(n,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,i,a,2*r.hiddenSize);mo(n,_,x,T,u,void 0,f,m,c,r)}});var oR,iR,aR,sR,Gc,d1,p1,Uc=j(()=>{"use strict";ve();Ie();ot();Ae();oR=n=>{if(!n||n.length<1)throw new Error("too few inputs")},iR=(n,e)=>{let r=[],t=e.numOutputs;return n[1].dims[0]>0&&(n[1].getBigInt64Array().forEach(o=>r.push(Number(o))),t=r.length),we({numOutputs:t,axis:e.axis,splitSizes:r})},aR=n=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${n}u; i += 1u ) {
    if (index < ${se("uniforms.size_in_split_axis","i",n)}) {
        return i;
    }
    }
    return ${n}u;
}`,sR=n=>{let e=n.length,r=[];for(let t=0;t<e;++t){let o=n[t].setByIndices("indices","input[global_idx]");e===1?r.push(o):t===0?r.push(`if (output_number == ${t}u) { ${o} }`):t===e-1?r.push(`else { ${o} }`):r.push(`else if (output_number == ${t}) { ${o} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${n[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Gc=(n,e)=>{let r=n[0].dims,t=U.size(r),o=n[0].dataType,i=U.normalizeAxis(e.axis,r.length),a=new Array(e.numOutputs),u=W("input",o,r.length),c=new Array(e.numOutputs),f=[],m=[],y=0,_=[{type:12,data:t}];for(let T=0;T<e.numOutputs;T++){y+=e.splitSizes[T],c[T]=y;let I=r.slice();I[i]=e.splitSizes[T],m.push(I),a[T]=Q(`output${T}`,o,I.length),f.push({dims:m[T],dataType:n[0].dataType})}_.push({type:12,data:c},...te(r,...m));let x=T=>`
  ${T.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",c.length).declareVariables(u,...a)}
  ${aR(c.length)}
  ${sR(a)}

  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",i)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${se("uniforms.size_in_split_axis","output_number - 1u",c.length)};
      ${u.indicesSet("indices",i,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:e.cacheKey,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:f,dispatchGroup:{x:Math.ceil(t/64)},programUniforms:_})}},d1=(n,e)=>{oR(n.inputs);let r=n.inputs.length===1?e:iR(n.inputs,e);n.compute(Gc(n.inputs,r),{inputs:[0]})},p1=n=>{let e=n.axis,r=n.splitSizes,t=n.numOutputs<0?r.length:n.numOutputs;if(t!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return we({axis:e,numOutputs:t,splitSizes:r})}});var uR,lR,f1,h1,m1=j(()=>{"use strict";ot();ja();Vc();Uc();sn();uR=(n,e)=>{if(e.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(e.doRotary&&n.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=n[0],t=n[1],o=n[2],i=n[3],a=n[4];if(e.localWindowSize!==-1)throw new Error("Local attention is not supported");if(e.softcap!==0)throw new Error("Softcap is not supported");if(e.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(e.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,c=r.dims[0],f=r.dims[1],m=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:e.numHeads*r.dims[4],y=f,_=0,x=!t||t.dims.length===0,T=Math.floor(x?m/(e.numHeads+2*e.kvNumHeads):m/e.numHeads);x&&(m=T*e.numHeads);let I=i&&i.dims.length!==0,O=a&&a.dims.length!==0;if(I&&i.dims.length===4&&i.dims[0]===c&&i.dims[1]!==e.kvNumHeads&&i.dims[2]===e.kvNumHeads&&i.dims[3]===T)throw new Error("BSNH pastKey/pastValue is not supported");if(I&&O){if(i.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=i.dims[2]}else if(I||O)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $=1;if(t&&t.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(t.dims.length<3||t.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==t.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(t.dims.length===3){if(r.dims[2]%t.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');y=t.dims[1]}else if(t.dims.length===5){if(t.dims[2]!==e.numHeads||t.dims[3]!==2||t.dims[4]!==T)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(o)throw new Error('Expect "value" be none when "key" has packed kv format.');y=t.dims[1]}else{if(t.dims[1]!==e.numHeads||t.dims[3]!==T)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');y=t.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==e.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}let C=0,L=!1,R=e.kvNumHeads?T*e.kvNumHeads:m;if(o&&o.dims.length>0){if(o.dims.length!==3&&o.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==o.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(o.dims.length===3){if(y!==o.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');R=o.dims[2]}else{if(y!==o.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');R=o.dims[1]*o.dims[3],L=!0}}let M=n.length>4?n[5]:void 0;if(M&&M.dims.length!==1&&M.dims[0]!==c)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');let q=-1,X=-1,J=!1;return{batchSize:c,sequenceLength:f,pastSequenceLength:_,kvSequenceLength:y,totalSequenceLength:q,maxSequenceLength:X,inputHiddenSize:0,hiddenSize:m,vHiddenSize:R,headSize:T,vHeadSize:Math.floor(R/e.kvNumHeads),numHeads:e.numHeads,kvNumHeads:e.kvNumHeads,nReps:e.numHeads/e.kvNumHeads,pastPresentShareBuffer:!1,maskType:C,scale:e.scale,broadcastResPosBias:J,passPastInKv:L,qkvFormat:$}},lR=we({perm:[0,2,1,3]}),f1=(n,e,r)=>{let t=e,o=r.kvNumHeads;return e.dims.length===3&&r.kvSequenceLength!==0&&(t=e.reshape([r.batchSize,r.kvSequenceLength,o,r.headSize]),t=n.compute(yt(t,lR.perm),{inputs:[t],outputs:[-1]})[0]),t},h1=(n,e)=>{let r=uR(n.inputs,e);if(n.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(n.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let t=n.inputs[0],o=n.inputs[1]&&n.inputs[1].dims.length>0?n.inputs[1]:void 0,i=n.inputs[2]&&n.inputs[2].dims.length>0?n.inputs[2]:void 0,a=n.inputs[3]&&n.inputs[3].dims.length!==0?n.inputs[3]:void 0,u=n.inputs[4]&&n.inputs[4].dims.length!==0?n.inputs[4]:void 0,c=n.inputs.length>4?n.inputs[5]:void 0,f=n.inputs.length>5?n.inputs[6]:void 0,m=r.kvNumHeads?r.kvNumHeads:r.numHeads,y=we({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,m*r.headSize,m*r.headSize]}),[_,x,T]=!o&&!i?n.compute(Gc([t],y),{inputs:[t],outputs:[-1,-1,-1]}):[t,o,i],I=Qo(n,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,_,void 0,0);mo(n,I,f1(n,x,r),f1(n,T,r),void 0,void 0,a,u,void 0,r,c,f)}});var g1,cR,dR,y1,b1=j(()=>{"use strict";ve();Ie();sn();Ae();g1=(n,e,r,t,o,i,a,u)=>{let c=Me(i),f=c===1?"f32":`vec${c}f`,m=c===1?"vec2f":`mat2x${c}f`,y=o*a,_=64;y===1&&(_=256);let x=[o,a,i/c],T=[o,a,2],I=["rank","type","type"],O=[];O.push(...te(x,T));let A=$=>{let C=W("x",e.dataType,3,c),L=W("scale",r.dataType,r.dims),R=W("bias",t.dataType,t.dims),M=Q("output",1,3,2),q=[C,L,R,M];return`
  var<workgroup> workgroup_shared : array<${m}, ${_}>;
  const workgroup_size = ${_}u;
  ${$.declareVariables(...q)}
  ${$.mainStart(_)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${f}(0);
    var squared_sum = ${f}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${f}(${C.get("batch","channel","h")});
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
      let sum_final = ${nr("workgroup_shared[0][0]",c)} / f32(hight * ${c});
      let squared_sum_final = ${nr("workgroup_shared[0][1]",c)} / f32(hight * ${c});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return n.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${c};${u};${_}`,inputDependencies:I},getRunData:()=>({outputs:[{dims:T,dataType:1}],dispatchGroup:{x:y},programUniforms:O}),getShaderSource:A},{inputs:[e,r,t],outputs:[-1]})[0]},cR=(n,e,r)=>{let t=e[0].dims,o=t,i=2,a=t[0],u=t[1],c=U.sizeFromDimension(t,i),f=Me(c),m=U.size(o)/f,y=g1(n,e[0],e[1],e[2],a,c,u,r.epsilon),_=[a,u,c/f],x=[a,u],T=["type","none"],I=O=>{let A=W("x",e[0].dataType,_.length,f),$=W("scale_shift",1,x.length,2),C=Q("output",e[0].dataType,_.length,f),L=[A,$,C];return`
  ${O.registerUniform("output_size","u32").declareVariables(...L)}
  ${O.mainStart()}
  ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${C.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${$.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${A.getByOffset("global_idx")} * ${C.type.value}(scale_shift.x) + ${C.type.value}(scale_shift.y);
      ${C.setByOffset("global_idx","value")};
  }`};n.compute({name:"InstanceNormalization",shaderCache:{hint:`${f}`,inputDependencies:T},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...te(_,x,_)]}),getShaderSource:I},{inputs:[e[0],y]})},dR=(n,e,r)=>{let t=e[0].dims,o=t,i=t[0],a=t[t.length-1],u=U.sizeFromDimension(t,1)/a,c=Me(a),f=U.size(o)/c,m=[{type:12,data:u},{type:12,data:Math.floor(a/c)}],y=["type","type"],_=!1,x=[0,t.length-1];for(let A=0;A<t.length-2;A++)_=_||t[A+1]!==1,x.push(A+1);_=_&&t[t.length-1]!==1;let T=_?n.compute(yt(n.inputs[0],x),{inputs:[n.inputs[0]],outputs:[-1]})[0]:n.inputs[0].reshape(Array.from({length:t.length},(A,$)=>t[x[$]])),I=g1(n,T,e[1],e[2],i,u,a,r.epsilon),O=A=>{let $=Ke(e[0].dataType),C=c===1?"vec2f":`mat${c}x2f`,L=q=>{let X=q===0?"x":"y",J=c===1?"f32":`vec${c}f`;switch(c){case 1:return`${$}(${J}(scale.${X}))`;case 2:return`vec2<${$}>(${J}(scale[0].${X}, scale[1].${X}))`;case 4:return`vec4<${$}>(${J}(scale[0].${X}, scale[1].${X}, scale[2].${X}, scale[3].${X}))`;default:throw new Error(`Not supported compoents ${c}`)}},R=W("input",e[0].dataType,e[0].dims,c),M=Q("output",e[0].dataType,o,c);return`
  @group(0) @binding(0) var<storage, read> input : array<${R.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${C}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${M.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${A.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${L(0)}, ${L(1)});
  }`};n.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${c}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:O},{inputs:[e[0],I]})},y1=(n,e)=>{e.format==="NHWC"?dR(n,n.inputs,e):cR(n,n.inputs,e)}});var pR,fR,_1,v1=j(()=>{"use strict";ve();Ie();Ae();pR=n=>{if(!n||n.length<2)throw new Error("layerNorm requires at least 2 inputs.")},fR=(n,e,r)=>{let t=e.simplified,o=n[0].dims,i=n[1],a=!t&&n[2],u=o,c=U.normalizeAxis(e.axis,o.length),f=U.sizeToDimension(o,c),m=U.sizeFromDimension(o,c),y=U.size(i.dims),_=a?U.size(a.dims):0;if(y!==m||a&&_!==m)throw new Error(`Size of X.shape()[axis:] == ${m}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${y} and bias size of ${_}`);let x=[];for(let R=0;R<o.length;++R)R<c?x.push(o[R]):x.push(1);let T=Me(m),I=["type","type"],O=[{type:12,data:f},{type:1,data:m},{type:12,data:Math.floor(m/T)},{type:1,data:e.epsilon}];a&&I.push("type");let A=r>1,$=r>2,C=R=>{let M=Ke(n[0].dataType),q=[W("x",n[0].dataType,n[0].dims,T),W("scale",i.dataType,i.dims,T)];a&&q.push(W("bias",a.dataType,a.dims,T)),q.push(Q("output",n[0].dataType,u,T)),A&&q.push(Q("mean_data_output",1,x)),$&&q.push(Q("inv_std_output",1,x));let X=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${R.registerUniforms(X).declareVariables(...q)}
  ${R.mainStart()}
    ${R.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${$c("f32",T)};
    var mean_square_vector = ${$c("f32",T)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Kn(M,T,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${nr("mean_vector",T)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${nr("mean_square_vector",T)} / uniforms.norm_size ${t?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Kn(M,T,"x[j + offset]")};
      let f32scale = ${Kn(M,T,"scale[j]")};
      output[j + offset] = ${q[0].type.value}((f32input ${t?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${Kn(M,T,"bias[j]")}`:""}
      );
    }

    ${A?"mean_data_output[global_idx] = mean":""};
    ${$?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},L=[{dims:u,dataType:n[0].dataType}];return A&&L.push({dims:x,dataType:1}),$&&L.push({dims:x,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${T};${r};${t}`,inputDependencies:I},getRunData:()=>({outputs:L,dispatchGroup:{x:Math.ceil(f/64)},programUniforms:O}),getShaderSource:C}},_1=(n,e)=>{pR(n.inputs),n.compute(fR(n.inputs,e,n.outputCount))}});var hR,w1,x1=j(()=>{"use strict";Ie();Ya();Za();hR=n=>{if(!n||n.length!==2)throw new Error("MatMul requires 2 inputs.");if(n[0].dims[n[0].dims.length-1]!==n[1].dims[n[1].dims.length-2])throw new Error("shared dimension does not match.")},w1=n=>{hR(n.inputs);let e=Xr.calcShape(n.inputs[0].dims,n.inputs[1].dims,!0);if(!e)throw new Error("Can't use matmul on the given tensors");let r=e[e.length-1],t=n.inputs[0].dims[n.inputs[0].dims.length-1];if(r<8&&t<8)n.compute(Xa(n.inputs,{activation:""},e));else{let o=e[e.length-2],i=U.size(n.inputs[0].dims.slice(0,-2)),a=U.size(n.inputs[1].dims.slice(0,-2));if(i!==1&&o===1&&a===1){let u=n.inputs[0].reshape([1,i,t]),c=n.inputs[1].reshape([1,t,r]),f=[1,i,r],m=[u,c];n.compute(Jo(m,{activation:""},e,f),{inputs:m})}else n.compute(Jo(n.inputs,{activation:""},e))}}});var mR,gR,yR,T1,I1,S1=j(()=>{"use strict";ve();Ie();ot();Ae();mR=(n,e)=>{if(n.length<3||n.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=n[0],t=r.dims.length;if(r.dims[t-1]!==e.k)throw new Error("The last dim of input shape does not match the k value");let o=Math.floor((e.k+e.blockSize-1)/e.blockSize),i=e.blockSize/8*e.bits,a=n[1];if(!U.areEqual(a.dims,[e.n,o,i]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let c=n[2].dims;if(U.size(c)!==e.n*o)throw new Error("scales input size error.");if(n.length===4){let m=n[3].dims,y=e.bits>4?e.n*o:e.n*Math.floor((o+1)/2);if(U.size(m)!==y)throw new Error("zeroPoints input size error.")}},gR=(n,e)=>{let r=n[0].dims,t=r.length,o=r[t-2],i=e.k,a=e.n,u=r.slice(0,t-2),c=U.size(u),m=n[1].dims[2]/4,y=n[0].dataType,_=Me(e.k),x=Me(m),T=Me(a),I=u.concat([o,a]),O=o>1&&a/T%2===0?2:1,A=U.size(I)/T/O,$=64,C=[],L=[c,o,i/_],R=U.convertShape(n[1].dims).slice();R.splice(-1,1,m/x),C.push(...te(L)),C.push(...te(R)),C.push(...te(n[2].dims)),n.length===4&&C.push(...te(U.convertShape(n[3].dims)));let M=[c,o,a/T];C.push(...te(M));let q=X=>{let J=L.length,ie=W("a",n[0].dataType,J,_),ue=W("b",12,R.length,x),xe=W("scales",n[2].dataType,n[2].dims.length),ee=[ie,ue,xe],ye=n.length===4?W("zero_points",12,n[3].dims.length):void 0;ye&&ee.push(ye);let Xe=M.length,de=Q("output",n[0].dataType,Xe,T),_e=Ke(n[0].dataType),$e=(()=>{switch(_){case 1:return`array<${_e}, 8>`;case 2:return`mat4x2<${_e}>`;case 4:return`mat2x4<${_e}>`;default:throw new Error(`${_}-component is not supported.`)}})(),le=()=>{let et=`
          // reuse a data
            var input_offset = ${ie.indicesToOffset(`${ie.type.indices}(batch, row, word_offset)`)};
            var a_data: ${$e};
            for (var j: u32 = 0; j < ${8/_}; j++) {
              a_data[j] = ${ie.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let K=0;K<T*O;K++)et+=`
            b_value = ${x===1?`b${K}_data`:`b${K}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${$e}(${Array.from({length:4},(Y,pe)=>`${_e}(b_value_lower[${pe}]), ${_e}(b_value_upper[${pe}])`).join(", ")});
            b_dequantized_values = ${(()=>_===1?`${$e}(${Array.from({length:8},(Y,pe)=>`(b_quantized_values[${pe}] - ${ye?`zero_point${K}`:"zero_point"}) * scale${K}`).join(", ")});`:`(b_quantized_values - ${$e}(${Array(8).fill(`${ye?`zero_point${K}`:"zero_point"}`).join(",")})) * scale${K};`)()};
            workgroup_shared[local_id.x * ${O} + ${Math.floor(K/T)}]${T>1?`[${K%T}]`:""} += ${Array.from({length:8/_},(Y,pe)=>`${_===1?`a_data[${pe}] * b_dequantized_values[${pe}]`:`dot(a_data[${pe}], b_dequantized_values[${pe}])`}`).join(" + ")};
          `;return et},Oe=()=>{let et=`
            var col_index = col * ${T};
            ${ye?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${_e}(8);`}
            `;for(let K=0;K<T*O;K++)et+=`
            let scale${K} = ${xe.getByOffset("col_index * nBlocksPerCol + block")};
            ${ye?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${ye.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${K} = ${_e}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return et},ct=()=>{let et=`col_index = col * ${T};`;for(let K=0;K<T*O;K++)et+=`
            let b${K}_data = ${ue.getByIndices(`${ue.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return et+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${$e};
            var b_dequantized_values: ${$e};`,et};return`
        var<workgroup> workgroup_shared: array<${de.type.value}, ${O*$}>;
        ${X.declareVariables(...ee,de)}
        ${X.mainStart([$,1,1])}
          let output_indices = ${de.offsetToIndices(`(global_idx / ${$}) * ${O}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${$}) {
            //process one block
            var word_offset: u32 = block * ${e.blockSize/_};
            ${Oe()}
            for (var word: u32 = 0; word < ${m}; word += ${x}) {
              ${ct()}
              for (var i: u32 = 0; i < ${x}; i++) {
                ${le()}
                word_offset += ${8/_};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${O}) {
            var output_value: ${de.type.value} = ${de.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${$}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${O};
            }
            ${de.setByIndices(`${de.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${e.blockSize};${e.bits};${_};${x};${T};${O};${$}`,inputDependencies:Array(n.length).fill("rank")},getRunData:()=>({outputs:[{dims:I,dataType:y}],dispatchGroup:{x:A},programUniforms:C}),getShaderSource:q}},yR=(n,e)=>{let r=n[0].dims,t=r.length,o=r[t-2],i=e.k,a=e.n,u=r.slice(0,t-2),c=U.size(u),m=n[1].dims[2]/4,y=n[0].dataType,_=Me(e.k),x=Me(m),T=u.concat([o,a]),I=128,O=a%8===0?8:a%4===0?4:1,A=I/O,$=A*x*8,C=$/_,L=$/e.blockSize,R=U.size(T)/O,M=[],q=[c,o,i/_],X=U.convertShape(n[1].dims).slice();X.splice(-1,1,m/x),M.push(...te(q)),M.push(...te(X)),M.push(...te(n[2].dims)),n.length===4&&M.push(...te(U.convertShape(n[3].dims)));let J=[c,o,a];M.push(...te(J));let ie=ue=>{let xe=q.length,ee=W("a",n[0].dataType,xe,_),ye=W("b",12,X.length,x),Xe=W("scales",n[2].dataType,n[2].dims.length),de=[ee,ye,Xe],_e=n.length===4?W("zero_points",12,n[3].dims.length):void 0;_e&&de.push(_e);let $e=J.length,le=Q("output",n[0].dataType,$e),Oe=Ke(n[0].dataType),ct=()=>{switch(_){case 1:return`
          let a_data0 = vec4<${Oe}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${Oe}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${Oe}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${Oe}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${_}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ee.type.value}, ${C}>;
        var<workgroup> inter_results: array<array<${le.type.value}, ${A}>, ${O}>;
        ${ue.declareVariables(...de,le)}
        ${ue.mainStart([A,O,1])}
          let output_indices = ${le.offsetToIndices(`workgroup_index * ${O}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${L} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${C};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${C}; a_offset += ${I})
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
            let block = tile * ${L} + local_id.x;
            ${_e?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${_e.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${Oe}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${Oe}(8);`}
            let scale = ${Xe.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${ye.getByIndices(`${ye.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${e.blockSize/_};
            for (var i: u32 = 0; i < ${x}; i++) {
              ${ct()}
              let b_value = ${x===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${Oe}>(${Array.from({length:4},(et,K)=>`${Oe}(b_value_lower[${K}]), ${Oe}(b_value_upper[${K}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${Oe}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(et,K)=>`${`dot(a_data${K}, b_dequantized_values[${K}])`}`).join(" + ")};
              word_offset += ${8/_};
            }
            workgroupBarrier();
          }

          if (local_idx < ${O}) {
            var output_value: ${le.type.value} = ${le.type.value}(0);
            for (var b = 0u; b < ${A}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${le.setByIndices(`${le.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${e.blockSize};${_};${x};${A};${O}`,inputDependencies:Array(n.length).fill("rank")},getRunData:()=>({outputs:[{dims:T,dataType:y}],dispatchGroup:{x:R},programUniforms:M}),getShaderSource:ie}},T1=(n,e)=>{mR(n.inputs,e),e.blockSize===32&&n.adapterInfo.isVendor("intel")&&n.adapterInfo.isArchitecture("gen-12lp")?n.compute(yR(n.inputs,e)):n.compute(gR(n.inputs,e))},I1=n=>we(n)});var bR,_R,vR,wR,xR,TR,IR,SR,$1,A1=j(()=>{"use strict";ve();Ie();Ae();bR=n=>{if(!n||n.length<1)throw new Error("Too few inputs");if(n[0].dataType!==1&&n[0].dataType!==10)throw new Error("Input type must be float or float16.");if(n.length>=2){let e=n[0].dims.length*2===n[1].dims[0];if(n.length===4&&(e=n[3].dims[0]*2===n[1].dims[0]),!e)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},_R=(n,e,r)=>{let t="";for(let o=e-1;o>=0;--o)t+=`
            k = i32(${n.indicesGet("indices",o)}) - ${se("uniforms.pads",o,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${se("uniforms.x_shape",o,e)})) {
              break;
            }
            offset += k * i32(${se("uniforms.x_strides",o,e)});
        `;return`
          value = ${n.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${t}
            value = x[offset];
          }
      `},vR=(n,e,r)=>{let t="";for(let o=e-1;o>=0;--o)t+=`
                k = i32(${n.indicesGet("indices",o)}) - ${se("uniforms.pads",o,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${se("uniforms.x_shape",o,e)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${se("uniforms.x_shape",o,e)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${se("uniforms.x_strides",o,e)});
            `;return`
              var offset = 0;
              var k = 0;
              ${t}
              value = x[offset];
          `},wR=(n,e,r)=>{let t="";for(let o=e-1;o>=0;--o)t+=`
                k = i32(${n.indicesGet("indices",o)}) - ${se("uniforms.pads",o,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${se("uniforms.x_shape",o,e)})) {
                  k = i32(${se("uniforms.x_shape",o,e)}) - 1;
                }
                offset += k * i32(${se("uniforms.x_strides",o,e)});
            `;return`
              var offset = 0;
              var k = 0;
              ${t}
              value = x[offset];
          `},xR=(n,e,r)=>{let t="";for(let o=e-1;o>=0;--o)t+=`
                k = i32(${n.indicesGet("indices",o)}) - ${se("uniforms.pads",o,r)};
                if (k < 0)  {
                  k += i32(${se("uniforms.x_shape",o,e)}]);
                }
                if (k >= i32(${se("uniforms.x_shape",o,e)})) {
                  k -= i32(${se("uniforms.x_shape",o,e)});
                }
                offset += k * i32(${se("uniforms.x_strides",o,e)});
            `;return`
              var offset = 0;
              var k = 0;
              ${t}
              value = x[offset];
          `},TR=(n,e,r)=>{switch(r.mode){case 0:return _R(n,e,r.pads.length);case 1:return vR(n,e,r.pads.length);case 2:return wR(n,e,r.pads.length);case 3:return xR(n,e,r.pads.length);default:throw new Error("Invalid mode")}},IR=(n,e)=>{let r=U.padShape(n[0].dims.slice(),e.pads),t=n[0].dims,o=U.size(r),i=[{type:12,data:o},{type:6,data:e.pads}],a=n.length>=3&&n[2].data;e.mode===0&&i.push({type:a?n[2].dataType:1,data:e.value}),i.push(...te(n[0].dims,r));let u=["rank"],c=f=>{let m=Q("output",n[0].dataType,r.length),y=W("x",n[0].dataType,t.length),_=y.type.value,x=TR(m,t.length,e),T=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:e.pads.length}];return e.mode===0&&T.push({name:"constant_value",type:a?_:"f32"}),`
            ${f.registerUniforms(T).declareVariables(y,m)}
            ${f.mainStart()}
            ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${m.offsetToIndices("global_idx")};

            var value = ${_}(0);
            ${x}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${e.mode}${a}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(U.size(r)/64)},programUniforms:i}),getShaderSource:c}},SR=(n,e)=>{if(n.length>1){let r=n[1].getBigInt64Array(),t=n.length>=3&&n[2].data?n[2].dataType===10?n[2].getUint16Array()[0]:n[2].getFloat32Array()[0]:0,o=n[0].dims.length,i=new Int32Array(2*o).fill(0);if(n.length>=4){let u=n[3].getBigInt64Array();for(let c=0;c<u.length;c++)i[Number(u[c])]=Number(r[c]),i[Number(u[c])+o]=Number(r[c+u.length])}else r.forEach((u,c)=>i[Number(c)]=Number(u));let a=[];return i.forEach(u=>a.push(u)),{mode:e.mode,value:t,pads:a}}else return e},$1=(n,e)=>{bR(n.inputs);let r=SR(n.inputs,e);n.compute(IR(n.inputs,r),{inputs:[0]})}});var es,O1,P1,C1,E1,$R,AR,D1,k1,N1,L1,R1,z1,M1,B1,F1,V1,G1,U1,j1=j(()=>{"use strict";xt();ve();Ie();Ae();es=n=>{if(Te.webgpu.validateInputContent&&(!n||n.length!==1))throw new Error("Pool ops requires 1 input.")},O1=(n,e,r)=>{let t=e.format==="NHWC",o=n.dims.slice();t&&o.splice(1,0,o.pop());let i=Object.hasOwnProperty.call(e,"dilations"),a=e.kernelShape.slice(),u=e.strides.slice(),c=i?e.dilations.slice():[],f=e.pads.slice();Hn.adjustPoolAttributes(r,o,a,u,c,f);let m=Hn.computePoolOutputShape(r,o,u,c,a,f,e.autoPad),y=Object.assign({},e);i?Object.assign(y,{kernelShape:a,strides:u,pads:f,dilations:c,cacheKey:e.cacheKey}):Object.assign(y,{kernelShape:a,strides:u,pads:f,cacheKey:e.cacheKey});let _=m.slice();return _.push(_.splice(1,1)[0]),[y,t?_:m]},P1=(n,e)=>{let r=e.format==="NHWC",t=U.size(n),o=U.size(e.kernelShape),i=[{type:12,data:t},{type:12,data:o}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(e.kernelShape.length<=2){let u=e.kernelShape[e.kernelShape.length-1],c=e.strides[e.strides.length-1],f=e.pads[e.pads.length/2-1],m=e.pads[e.pads.length-1],y=!!(f+m);i.push({type:12,data:u},{type:12,data:c},{type:12,data:f},{type:12,data:m}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let _=!1;if(e.kernelShape.length===2){let x=e.kernelShape[e.kernelShape.length-2],T=e.strides[e.strides.length-2],I=e.pads[e.pads.length/2-2],O=e.pads[e.pads.length-2];_=!!(I+O),i.push({type:12,data:x},{type:12,data:T},{type:12,data:I},{type:12,data:O}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[i,a,!0,y,_]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=U.computeStrides(e.kernelShape);i.push({type:12,data:u},{type:12,data:e.pads},{type:12,data:e.strides}),a.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:e.pads.length},{name:"strides",type:"u32",length:e.strides.length});let c=e.pads.reduce((f,m)=>f+m);return[i,a,!!c,!1,!1]}},C1=(n,e,r,t,o,i,a,u,c,f,m,y)=>{let _=o.format==="NHWC",x=e.type.value,T=Q("output",e.type.tensor,t);if(o.kernelShape.length<=2){let I="",O="",A="",$=r-(_?2:1);if(m?I=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${$}] < 0 || xIndices[${$}]
                      >= uniforms.x_shape[${$}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${e.indicesToOffset("xIndices")}];
                  ${i}
                }`:I=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${$}] = indices[${$}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${e.indicesToOffset("xIndices")}];
                  ${i}
                }`,o.kernelShape.length===2){let L=r-(_?3:2);y?O=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${L}] = indices[${L}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${L}] < 0 || xIndices[${L}] >= uniforms.x_shape[${L}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:O=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${L}] = indices[${L}] * uniforms.sh - uniforms.phStart + j;
                `,A=`
              }
            `}return`
            ${n.registerUniforms(c).declareVariables(e,T)}

            ${n.mainStart()}
              ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${T.offsetToIndices("global_idx")};
              var xIndices = ${T.offsetToIndices("global_idx")};

              var value = ${x}(${u});
              var pad = 0;
              ${O}
              ${I}
              ${A}
              ${a}

              output[global_idx] = value;
            }`}else{if(_)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let I=o.kernelShape.length,O=o.pads.length,A="";return f?A=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${e.indicesToOffset("xIndices")}];
                ${i}
              }`:A=`
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
                  offsets[j] = offset / ${se("uniforms.kernelStrides","j",I)};
                  offset -= offsets[j] * ${se("uniforms.kernelStrides","j",I)};
                }
                offsets[${I-1}] = offset;

                isPad = false;
                for (var j = ${r-I}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${se("uniforms.strides",`j - ${r-I}u`,I)}
                    + offsets[j - ${r-I}u] - ${se("uniforms.pads","j - 2u",O)};
                  ${A}
              }
              ${a}

              output[global_idx] = value;
            }`}},E1=n=>`${n.format};${n.ceilMode};${n.autoPad};${n.kernelShape.length}`,$R=n=>`${E1(n)};${n.countIncludePad}`,AR=n=>`${E1(n)};${n.storageOrder};${n.dilations}`,D1=n=>({format:n.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][n.auto_pad],ceilMode:n.ceil_mode,kernelShape:n.kernel_shape,strides:n.strides,pads:n.pads}),k1=(n,e,r,t)=>{let[o,i]=O1(e,t,r),a=W("x",e.dataType,e.dims.length),u=a.type.value,c="value += x_val;",f="";o.countIncludePad?f+=`value /= ${u}(uniforms.kernelSize);`:f+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[m,y,_,x,T]=P1(i,o);m.push(...te(e.dims,i));let I=["rank"];return{name:n,shaderCache:{hint:`${t.cacheKey};${_};${x};${T}`,inputDependencies:I},getRunData:()=>({outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(U.size(i)/64)},programUniforms:m}),getShaderSource:O=>C1(O,a,e.dims.length,i.length,o,c,f,0,y,_,x,T)}},N1=n=>{let e=n.count_include_pad!==0,r=D1(n);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let t={countIncludePad:e,...r,cacheKey:""};return{...t,cacheKey:$R(t)}},L1=(n,e)=>{es(n.inputs),n.compute(k1("AveragePool",n.inputs[0],!1,e))},R1={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},z1=n=>{let e=n.format;return{format:e,...R1,cacheKey:e}},M1=(n,e)=>{es(n.inputs),n.compute(k1("GlobalAveragePool",n.inputs[0],!0,e))},B1=(n,e,r,t)=>{let[o,i]=O1(e,t,r),a=`
      value = max(x_val, value);
    `,u="",c=W("x",e.dataType,e.dims.length),f=["rank"],[m,y,_,x,T]=P1(i,o);return m.push(...te(e.dims,i)),{name:n,shaderCache:{hint:`${t.cacheKey};${_};${x};${T}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(U.size(i)/64)},programUniforms:m}),getShaderSource:I=>C1(I,c,e.dims.length,i.length,o,a,u,e.dataType===10?-65504:-1e5,y,_,x,T)}},F1=(n,e)=>{es(n.inputs),n.compute(B1("MaxPool",n.inputs[0],!1,e))},V1=n=>{let e=n.storage_order,r=n.dilations,t=D1(n);if(e!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(t.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let o={storageOrder:e,dilations:r,...t,cacheKey:""};return{...o,cacheKey:AR(o)}},G1=n=>{let e=n.format;return{format:e,...R1,cacheKey:e}},U1=(n,e)=>{es(n.inputs),n.compute(B1("GlobalMaxPool",n.inputs[0],!0,e))}});var PR,CR,W1,H1,q1=j(()=>{"use strict";ve();Ie();ot();Ae();PR=(n,e)=>{if(n.length<2||n.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(n.length===3&&n[1].dims===n[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(n.length===3&&n[0].dataType!==n[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(n[0].dataType===6&&n.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(n[1].dims.length!==0&&n[1].dims.length!==1&&n[1].dims.length!==n[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(n.length>2){if(n[0].dataType!==n[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(n[1].dims.length!==n[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!n[1].dims.map((r,t)=>r===n[2].dims[t]).reduce((r,t)=>r&&t,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(e.blockSize>0){if(n[1].dims.length===0||n[1].dims.length===1&&n[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!n[1].dims.map((o,i)=>i===e.axis||o===n[0].dims[i]).reduce((o,i)=>o&&i,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(n[1].dims.length!==n[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=n[0].dims[e.axis],t=n[1].dims[e.axis];if(e.blockSize<Math.ceil(r/t)||e.blockSize>Math.ceil(r/(t-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},CR=(n,e)=>{let r=U.normalizeAxis(e.axis,n[0].dims.length),t=n[0].dataType,o=t===3,i=n[0].dims,a=n[1].dataType,u=U.size(i),c=t===3||t===2,f=c?[Math.ceil(U.size(n[0].dims)/4)]:n[0].dims,m=n[1].dims,y=n.length>2?n[2]:void 0,_=y?c?[Math.ceil(U.size(y.dims)/4)]:y.dims:void 0,x=m.length===0||m.length===1&&m[0]===1,T=x===!1&&m.length===1,I=Me(u),O=x&&(!c||I===4),A=O?I:1,$=O&&!c?I:1,C=W("input",c?12:t,f.length,$),L=W("scale",a,m.length),R=y?W("zero_point",c?12:t,_.length):void 0,M=Q("output",a,i.length,A),q=[C,L];R&&q.push(R);let X=[f,m];y&&X.push(_);let J=[{type:12,data:u/A},{type:12,data:r},{type:12,data:e.blockSize},...te(...X,i)],ie=ue=>{let xe=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${ue.registerUniforms(xe).declareVariables(...q,M)}
      ${ue.mainStart()}
          ${ue.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${M.offsetToIndices("global_idx")};

          // Set input x
          ${(()=>c?`
            let input = ${C.getByOffset("global_idx / 4")};
            let x_vec = ${o?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${A===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${C.getByOffset("global_idx")};`)()};

          // Set scale input
          ${(()=>x?`let scale_value= ${L.getByOffset("0")}`:T?`
            let scale_index = ${M.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${L.getByOffset("scale_index")};`:`
            var scale_indices: ${L.type.indices} = output_indices;
            let index = ${L.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${L.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${L.getByIndices("scale_indices")};`)()};

          // Set zero-point input
          ${(()=>R?x?c?`
                let zero_point_input = ${R.getByOffset("0")};
                let zero_point_vec =  ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${R.getByOffset("0")}`:T?c?`
                let zero_point_index = ${M.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${R.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${M.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${R.getByOffset("zero_point_index")};`:c?`
                let zero_point_offset = ${L.indicesToOffset("scale_indices")};
                let zero_point_input = ${R.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${R.getByIndices("scale_indices")};`:`let zero_point_value = ${c?o?"i32":"u32":C.type.value}(0);`)()};
      // Compute and write output
      ${M.setByOffset("global_idx",`${M.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:e.cacheKey,inputDependencies:R?["rank","rank","rank"]:["rank","rank"]},getShaderSource:ie,getRunData:()=>({outputs:[{dims:i,dataType:a}],dispatchGroup:{x:Math.ceil(u/A/64),y:1,z:1},programUniforms:J})}},W1=(n,e)=>{PR(n.inputs,e),n.compute(CR(n.inputs,e))},H1=n=>we({axis:n.axis,blockSize:n.blockSize})});var ER,DR,K1,X1=j(()=>{"use strict";xt();ve();Ae();ER=(n,e,r)=>{let t=n===e,o=n<e&&r<0,i=n>e&&r>0;if(t||o||i)throw new Error("Range these inputs' contents are invalid.")},DR=(n,e,r,t)=>{let o=Math.abs(Math.ceil((e-n)/r)),i=[o],a=o,u=[{type:12,data:a},{type:t,data:n},{type:t,data:r},...te(i)],c=f=>{let m=Q("output",t,i.length),y=m.type.value,_=[{name:"outputSize",type:"u32"},{name:"start",type:y},{name:"delta",type:y}];return`
        ${f.registerUniforms(_).declareVariables(m)}
        ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${y}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${t}`},getShaderSource:c,getRunData:()=>({outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:u})}},K1=n=>{let e=0,r=0,t=0;n.inputs[0].dataType===6?(e=n.inputs[0].getInt32Array()[0],r=n.inputs[1].getInt32Array()[0],t=n.inputs[2].getInt32Array()[0]):n.inputs[0].dataType===1&&(e=n.inputs[0].getFloat32Array()[0],r=n.inputs[1].getFloat32Array()[0],t=n.inputs[2].getFloat32Array()[0]),Te.webgpu.validateInputContent&&ER(e,r,t),n.compute(DR(e,r,t,n.inputs[0].dataType),{inputs:[]})}});var kR,NR,Y1,Z1,J1=j(()=>{"use strict";ve();Ie();ot();Ae();kR=(n,e,r,t)=>{if(n!=="none"&&t!=="i32"&&t!=="u32"&&t!=="f32")throw new Error(`Input ${t} is not supported with reduction ${n}.`);let o=`{
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
                ${o}max(bitcast<f32>(oldValue), (${r}))${i}`;case"min":return t==="i32"||t==="u32"?`atomicMin(&${e}, bitcast<${t}>(${r}));`:`${o}min(bitcast<${t}>(oldValue), (${r}))${i}`;case"mul":return`${o}(bitcast<${t}>(oldValue) * (${r}))${i}`;default:throw new Error(`Reduction ${n} is not supported.`)}},NR=(n,e)=>{let r=n[0].dims,t=n[1].dims,o=r,i=1,a=Math.ceil(U.size(t)/i),u=t[t.length-1],c=U.sizeFromDimension(r,u),f=[{type:12,data:a},{type:12,data:u},{type:12,data:c},...te(n[1].dims,n[2].dims,o)],m=y=>{let _=W("indices",n[1].dataType,n[1].dims.length),x=W("updates",n[2].dataType,n[2].dims.length,i),T=e.reduction!=="none"&&e.reduction!==""?Sw("output",n[0].dataType,o.length):Q("output",n[0].dataType,o.length,i);return`
      ${y.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(_,x,T)}
      ${y.mainStart()}
        ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
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
    ${kR(e.reduction,"output[data_offset + i]","value",T.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${e.cacheKey}_${e.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:f}),getShaderSource:m}},Y1=n=>we({reduction:n.reduction}),Z1=(n,e)=>{n.compute(NR(n.inputs,e),{inputs:[n.inputs[1],n.inputs[2]],outputs:[]})}});var LR,RR,zR,Q1,MR,BR,FR,VR,GR,UR,jR,WR,e2,HR,qR,KR,XR,YR,t2,r2,n2=j(()=>{"use strict";ve();Ie();ot();Ae();LR=(n,e)=>{if(n.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),n.length>0){if(e.mode==="linear"){if(!(n.length===2||n.length===3||n.length===4&&n[0]===1&&n[1]===1||n.length===4&&n[0]===1&&n[3]===1||n.length===5&&n[0]===1&&n[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(e.mode==="cubic"&&!(n.length===2||n.length===4&&n[0]===1&&n[1]===1||n.length===4&&n[0]===1&&n[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},RR=(n,e,r)=>{e.every(o=>o>=0&&o<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let t=new Array(r).fill(1);return e.forEach((o,i)=>t[o]=n[i]),t},zR=(n,e,r,t,o,i)=>{let[a,u,c]=r>10?[1,2,3]:[-1,n.length>1?1:-1,-1],f=n[0].dims.length;if(a>0&&n.length>a&&n[a].dims.length>0)n[a].getFloat32Array().forEach(m=>i.push(m));else if(e.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&n.length>u&&n[u].dims.length===1&&n[u].dims[0]>0){if(n[u].getFloat32Array().forEach(m=>t.push(m)),t.length!==0&&t.length!==f&&r>=18&&t.length!==e.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");LR(t,e),e.axes.length>0&&RR(t,e.axes,f).forEach((m,y)=>t[y]=m)}if(c>0&&n.length>c&&n[c].dims.length===1&&n[c].dims[0]>0&&(n[c].getBigInt64Array().forEach(m=>o.push(Number(m))),o.length!==0&&o.length!==f&&r>=18&&o.length!==e.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(e.axes.length>0){if(t.length!==0&&t.length!==e.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(o.length!==0&&o.length!==e.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof t<"u"&&typeof o<"u"&&t.length>0&&o.length>f)throw new Error("Resize requires only of scales or sizes to be specified")},Q1=(n,e,r,t)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${n}) * (${e});
  let whole = ${t}(big / (${r}));
  let fract = ${t}(big % (${r})) / ${t}(${r});
  return whole + fract;
`,MR=(n,e)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${e} { `+(()=>{switch(n){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${e}(xResized) / ${e}(xScale);
          } else {
            ${Q1("xResized","lengthOriginal","lengthResized",e)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${e}(xResized) + 0.5) / ${e}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${e}(xResized) + 0.5) / ${e}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Q1("xResized","lengthOriginal - 1","lengthResized - 1",e)}
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
                  return offset + ((${e}(xResized) + 0.5) / ${e}(xScale)) - 0.5;`;case"half_pixel":return`return ((${e}(xResized) + 0.5) / ${e}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${n} is not supported`)}})()+"}",BR=(n,e,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(n){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(e<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${n} is not supported`)}})()+"}",FR=(n,e,r)=>{let t=new Array(r).fill(0).concat(new Array(r).fill(1)),o=n.length===0?t:n.slice();return e.length>0?(e.forEach((i,a)=>{t[i]=o[a],t[a+r]=o[e.length+a]}),t):o},VR=(n,e,r,t)=>{let o=[];if(r.length>0)if(t.length>0){if(n.forEach(i=>o.push(i)),Math.max(...t)>n.length)throw new Error("axes is out of bound");t.forEach((i,a)=>o[i]=r[a])}else r.forEach(i=>o.push(i));else{if(e.length===0)throw new Error("Resize requires either scales or sizes.");o=n.map((i,a)=>Math.round(i*e[a]))}return o},GR=(n,e,r)=>{let t=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(i=>e[i]),Number.MAX_VALUE):Math.min(...e,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(i=>e[i]),Number.MIN_VALUE):Math.max(...e,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();e.fill(1,0,e.length);let o=n.slice();return r.axes.length>0?(r.axes.forEach(i=>e[i]=t),r.axes.forEach(i=>o[i]=Math.round(n[i]*e[i]))):(e.fill(t,0,e.length),o.forEach((i,a)=>o[a]=Math.round(i*e[a]))),o},UR=(n,e,r,t,o)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${n.type.indices}) -> array<${n.type.value}, ${r.length}> {
      var original_indices: array<${n.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${n.indicesGet("output_indices","i")};
        var scale = ${se("uniforms.scales","i",t)};
        var roi_low = ${se("uniforms.roi","i",o)};
        var roi_hi = ${se("uniforms.roi",`i + ${e.length}`,o)};
        if (scale == 1.0) {
          original_indices[i] = ${n.type.value}(output_index);
        } else {
          var input_shape_i = ${se("uniforms.input_shape","i",e.length)};
          var output_shape_i = ${se("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,jR=(n,e,r,t,o,i,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> ${n.type.indices} {
      var input_indices: ${n.type.indices};
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${se("uniforms.scales","i",o)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${se("uniforms.roi","i",i)};
          var roi_hi = ${se("uniforms.roi",`i + ${r.length}`,i)};
          var input_shape_i = ${se("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${se("uniforms.output_shape","i",t.length)};
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
    }`,WR=(n,e)=>`
    fn checkInputIndices(input_indices: ${n.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${e.length}; i++) {
        var input_index = ${n.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${se("uniforms.input_shape","i",e.length)}) {
          return false;
        }
      }
      return true;
    }`,e2=(n,e,r,t)=>n.rank>t?`
    ${n.indicesSet("input_indices",e,"channel")};
    ${n.indicesSet("input_indices",r,"batch")};
`:"",HR=(n,e,r,t,o)=>{let[a,u,c,f]=r.length===2?[-1,0,1,-1]:[0,2,3,1],m=n.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${m} {
      var input_indices: ${n.type.indices};
      ${n.indicesSet("input_indices",u,`max(0, min(row, ${r[u]} - 1))`)};
      ${n.indicesSet("input_indices",c,`max(0, min(col, ${r[c]} - 1))`)};
      ${e2(n,f,a,2)}
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
      var channel: u32 = ${r.length>2?`u32(originalIndices[${f}])`:"0"};
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
    }`},qR=(n,e,r,t,o,i,a,u,c,f)=>{let m=r.length===2,y=!0,[_,x]=m?[0,1]:y?[2,3]:[1,2],T=n.type.value,I=O=>{let A=O===_?"row":"col";return`
      fn ${A}CubicInterpolation(input_indices: ${n.type.indices}, output_indices: ${e.type.indices}) -> ${T} {
        var output_index = ${e.indicesGet("output_indices",O)};
        var originalIdx: ${T} = getOriginalCoordinateFromResizedCoordinate(output_index, ${o[O]},
        ${t[O]}, ${r[O]}, ${i[O]}, ${i[O]} + ${r.length});
        var fractOriginalIdx: ${T} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[O]} - 1))) {
          return ${c};
        }
        var data: array<${T}, 4> = array<${T}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${A}: ${T} = originalIdx + ${T}(i);
          if (${A} < 0 || ${A} >= ${r[O]}) {
            ${(()=>f?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${c};`:`${A} = max(0, min(${A}, ${r[O]} - 1));`)()};
          }
        var input_indices_copy: ${n.type.indices} = input_indices;
          ${n.indicesSet("input_indices_copy",O,`u32(${A})`)};
          data[i + 1] = ${O===_?n.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
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
    `},KR=(n,e,r,t,o)=>{let[a,u,c,f,m]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],y=n.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${y} {
      var input_indices: ${n.type.indices};
      ${n.indicesSet("input_indices",u,`max(0, min(depth, ${r[u]} - 1))`)};
      ${n.indicesSet("input_indices",c,`max(0, min(height, ${r[c]} - 1))`)};
      ${n.indicesSet("input_indices",f,`max(0, min(width, ${r[f]} - 1))`)};
      ${e2(n,m,a,3)}
      return ${n.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${e.type.indices}) -> ${y} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${y} = originalIndices[${u}];
      var height:${y} = originalIndices[${c}];
      var width:${y} = originalIndices[${f}];
      ${t?`if (depth < 0 || depth > (${r[u]} - 1) || height < 0 || height > (${r[c]} - 1) || width < 0 || (width > ${r[f]} - 1)) {
      return ${o};
        }`:""};

    depth = max(0, min(depth, ${r[u]} - 1));
      height = max(0, min(height, ${r[c]} - 1));
      width = max(0, min(width, ${r[f]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${m}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${y} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${y} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${y} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${y} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${y} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${y} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${y} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${y} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${y} = abs(depth - ${y}(depth1));
      var dx2: ${y} = abs(${y}(depth2) - depth);
      var dy1: ${y} = abs(height - ${y}(height1));
      var dy2: ${y} = abs(${y}(height2) - height);
      var dz1: ${y} = abs(width - ${y}(width1));
      var dz2: ${y} = abs(${y}(width2) - width);
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
    }`},XR=(n,e,r,t,o,i)=>{let a=n.dims,u=FR(i,e.axes,a.length),c=VR(a,t,o,e.axes),f=t.slice();t.length===0&&(f=a.map(($,C)=>$===0?1:c[C]/$),e.keepAspectRatioPolicy!=="stretch"&&(c=GR(a,f,e)));let m=Q("output",n.dataType,c.length),y=W("input",n.dataType,a.length),_=U.size(c),x=a.length===c.length&&a.every(($,C)=>$===c[C]),T=e.coordinateTransformMode==="tf_crop_and_resize",I=e.extrapolationValue,O=y.type.value,A=$=>`
      ${x?"":`
      ${MR(e.coordinateTransformMode,O)};
      ${(()=>{switch(e.mode){case"nearest":return`
              ${WR(y,a)};
              ${BR(e.nearestMode,r,O)};
              ${jR(y,m,a,c,f.length,u.length,T)};
              `;case"linear":return`
              ${UR(m,a,c,f.length,u.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${HR(y,m,a,T,I)}`;if(a.length===3||a.length===5)return`${KR(y,m,a,T,I)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${qR(y,m,a,c,f,u,e.cubicCoeffA,T,e.extrapolationValue,e.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${$.registerUniform("output_size","u32").registerUniform("scales","f32",f.length).registerUniform("roi","f32",u.length).declareVariables(y,m)}
      ${$.mainStart()}
        ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${x?"output[global_idx] = input[global_idx];":`
        let output_indices = ${m.offsetToIndices("global_idx")};
        var input_indices: ${y.type.indices};
        ${(()=>{switch(e.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${y.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${e.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${e.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${e.cacheKey}|${r}|${f.length>0?e.mode==="cubic"?f:f.length:""}|${o.length>0?o:""}|${u.length>0?u:""}|${x}|${e.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:A,getRunData:()=>({outputs:[{dims:c,dataType:n.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},{type:1,data:f},{type:1,data:u},...te(a,c)]})}},YR=n=>{let e=n.customDataBuffer;return new Uint32Array(e,e.byteOffset,1)[0]},t2=(n,e)=>{let r=[],t=[],o=[],i=YR(n);if(e.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");zR(n.inputs,e,i,r,t,o),n.compute(XR(n.inputs[0],e,i,r,t,o),{inputs:[0]})},r2=n=>{let e=n.antialias,r=n.axes,t=n.coordinateTransformMode,o=n.cubicCoeffA,i=n.excludeOutside!==0,a=n.extrapolationValue,u=n.keepAspectRatioPolicy,c=n.mode,f=n.nearestMode===""?"simple":n.nearestMode;return we({antialias:e,axes:r,coordinateTransformMode:t,cubicCoeffA:o,excludeOutside:i,extrapolationValue:a,keepAspectRatioPolicy:u,mode:c,nearestMode:f})}});var ZR,JR,o2,i2=j(()=>{"use strict";ve();Ie();ot();Ae();ZR=(n,e)=>{let[r,t,o,i]=n,{numHeads:a,rotaryEmbeddingDim:u}=e;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!U.areEqual(t.dims,[])&&!U.areEqual(t.dims,[1])&&t.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${t.dims.length}`);if(o.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${o.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(!U.areEqual(o.dims,i.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let c=r.dims[0],f=r.dims[r.dims.length-2],m=o.dims[0],y=U.sizeFromDimension(r.dims,1)/f,_=u===0?o.dims[1]*2:y/a;if(u>_)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(t.dims.length===2){if(c!==t.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${t.dims[0]}`);if(f!==t.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${t.dims[1]}`)}if(_/2!==o.dims[1]&&u/2!==o.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${o.dims[1]}`);if(f>m)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},JR=(n,e)=>{let{interleaved:r,numHeads:t,rotaryEmbeddingDim:o,scale:i}=e,a=n[0].dims[0],u=U.sizeFromDimension(n[0].dims,1),c=n[0].dims[n[0].dims.length-2],f=u/c,m=n[2].dims[1],y=o===0?m*2:f/t,_=new Array(a,c,f/y,y-m),x=U.computeStrides(_),T=[{type:1,data:i},{type:12,data:_},{type:12,data:x},...n[0].dims.length===3?new Array({type:12,data:[u,f,y,1]}):[],...n[0].dims.length===4?new Array({type:12,data:[u,y,c*y,1]}):[],...te(n[0].dims,n[1].dims,n[2].dims,n[3].dims,n[0].dims)],I=O=>{let A=W("input",n[0].dataType,n[0].dims.length),$=W("position_ids",n[1].dataType,n[1].dims.length),C=W("cos_cache",n[2].dataType,n[2].dims.length),L=W("sin_cache",n[3].dataType,n[3].dims.length),R=Q("output",n[0].dataType,n[0].dims.length);return O.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:_.length},{name:"global_strides",type:"u32",length:x.length},{name:"input_output_strides",type:"u32",length:x.length}]),`
        ${O.declareVariables(A,$,C,L,R)}

        ${O.mainStart(qn)}
          let half_rotary_emb_dim = uniforms.${C.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${O.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${$.broadcastedIndicesToOffset("bsnh.xy",Q("",$.type.tensor,2))};
            let position_id =
                u32(${$.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${A.getByOffset("i")} * ${C.get("position_id","bsnh[3]")} -
                ${A.getByOffset("j")} * ${L.get("position_id","bsnh[3]")};
            ${R.setByOffset("i","re")}
            let im = ${A.getByOffset("i")} * ${L.get("position_id","bsnh[3]")} +
                ${A.getByOffset("j")} * ${C.get("position_id","bsnh[3]")};
            ${R.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${R.setByOffset("k",A.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:we({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:I,getRunData:()=>({outputs:[{dims:n[0].dims,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(U.size(_)/qn)},programUniforms:T})}},o2=(n,e)=>{ZR(n.inputs,e),n.compute(JR(n.inputs,e))}});var QR,ez,a2,s2=j(()=>{"use strict";ve();Ie();Ae();QR=n=>{if(!n||n.length<3)throw new Error("layerNorm requires at least 3 inputs.");let e=n[0],r=n[1],t=n[2];if(e.dataType!==r.dataType||e.dataType!==t.dataType)throw new Error("All inputs must have the same data type");if(e.dims.length!==3&&e.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let o=e.dims[e.dims.length-1],i=e.dims[e.dims.length-2];if(r.dims[r.dims.length-1]!==o)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==i)throw new Error("Skip must have the same sequence length as input");if(t.dims.length!==1)throw new Error("Gamma must be 1D");if(t.dims[t.dims.length-1]!==o)throw new Error("Gamma must have the same hidden size as input");if(n.length>3){let a=n[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==o)throw new Error("Beta must have the same hidden size as input")}if(n.length>4){let a=n[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==o)throw new Error("Bias must have the same hidden size as input")}},ez=(n,e,r,t)=>{let o=e.simplified,i=n[0].dims,a=U.size(i),u=i,c=a,f=i.slice(-1)[0],m=t?i.slice(0,-1).concat(1):[],y=!o&&n.length>3,_=n.length>4,x=t&&r>1,T=t&&r>2,I=r>3,O=64,A=Me(f),$=[{type:12,data:c},{type:12,data:A},{type:12,data:f},{type:1,data:e.epsilon}],C=R=>{let M=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],q=[W("x",n[0].dataType,n[0].dims,A),W("skip",n[1].dataType,n[1].dims,A),W("gamma",n[2].dataType,n[2].dims,A)];y&&q.push(W("beta",n[3].dataType,n[3].dims,A)),_&&q.push(W("bias",n[4].dataType,n[4].dims,A)),q.push(Q("output",n[0].dataType,u,A)),x&&q.push(Q("mean_output",1,m)),T&&q.push(Q("inv_std_output",1,m)),I&&q.push(Q("input_skip_bias_sum",n[0].dataType,u,A));let X=Ke(n[0].dataType),J=Ke(1,A);return`

      ${R.registerUniforms(M).declareVariables(...q)}
      var<workgroup> sum_shared : array<${J}, ${O}>;
      var<workgroup> sum_squared_shared : array<${J}, ${O}>;

      ${R.mainStart([O,1,1])}
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
          let bias_value = ${_?"bias[offset1d + i]":X+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${I?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Kn(X,A,"value")};
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
        let mean = ${nr("sum",A)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${nr("square_sum",A)} / f32(uniforms.hidden_size) ${o?"":"- mean * mean"} + uniforms.epsilon);
        ${x?"mean_output[global_idx] = mean;":""}
        ${T?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${o?"":`- ${X}(mean)`}) *
            ${X}(inv_std_dev) * gamma[offset1d + i]
            ${y?"+ beta[offset1d + i]":""};
        }
      }`},L=[{dims:u,dataType:n[0].dataType}];return r>1&&L.push({dims:m,dataType:1}),r>2&&L.push({dims:m,dataType:1}),r>3&&L.push({dims:i,dataType:n[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${A};${x};${T};${I}`,inputDependencies:n.map((R,M)=>"type")},getShaderSource:C,getRunData:()=>({outputs:L,dispatchGroup:{x:Math.ceil(c/f)},programUniforms:$})}},a2=(n,e)=>{QR(n.inputs);let t=[0];n.outputCount>1&&t.push(-3),n.outputCount>2&&t.push(-3),n.outputCount>3&&t.push(3),n.compute(ez(n.inputs,e,n.outputCount,!1),{outputs:t})}});var tz,ts,rz,u2,nz,oz,l2,c2,d2=j(()=>{"use strict";ve();Ie();ot();Ae();tz=(n,e)=>{if(!n||n.length<1)throw new Error("too few inputs");if(e.axes.length!==0){if(e.axes.length!==e.starts.length||e.axes.length!==e.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(e.starts.length!==e.ends.length)throw new Error("starts and ends must have the same length");n.slice(1).forEach((r,t)=>{if(n[t+1].dataType!==6&&n[t+1].dataType!==7)throw new Error(`Input ${t} must be an array of int32 or int64`)})},ts=(n,e)=>{let r=[];if(n.length>e)if(n[e].dataType===7)n[e].getBigInt64Array().forEach(t=>r.push(Number(t)));else if(n[e].dataType===6)n[e].getInt32Array().forEach(t=>r.push(Number(t)));else throw new Error(`Input ${e} must be an array of int32 or int64`);return r},rz=(n,e)=>{if(n.length>1){let r=ts(n,1),t=ts(n,2),o=ts(n,3);return o.length===0&&(o=[...Array(n[0].dims.length).keys()]),we({starts:r,ends:t,axes:o})}else return e},u2=(n,e,r,t,o)=>{let i=n;return n<0&&(i+=r[t[e]]),o[e]<0?Math.max(0,Math.min(i,r[t[e]]-1)):Math.max(0,Math.min(i,r[t[e]]))},nz=(n,e,r)=>`fn calculateInputIndices(output_indices: ${e.type.indices}) -> ${n.type.indices} {
          var input_indices: ${n.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${se("uniforms.input_shape","i",r.length)};
            let steps_i = ${se("uniforms.steps","i",r.length)};
            let signs_i = ${se("uniforms.signs","i",r.length)};
            let starts_i = ${se("uniforms.starts","i",r.length)};
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
      }`,oz=(n,e)=>{let r=n[0].dims,t=U.size(r),o=e.axes.length>0?U.normalizeAxes(e.axes,r.length):[...Array(r.length).keys()],i=ts(n,4);i.forEach(A=>A!==0||(()=>{throw new Error("step cannot be 0")})),i.length===0&&(i=Array(o.length).fill(1));let a=e.starts.map((A,$)=>u2(A,$,r,o,i)),u=e.ends.map((A,$)=>u2(A,$,r,o,i));if(o.length!==a.length||o.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(o.length!==r.length)for(let A=0;A<r.length;++A)o.includes(A)||(a.splice(A,0,0),u.splice(A,0,r[A]),i.splice(A,0,1));let c=i.map(A=>Math.sign(A));i.forEach((A,$,C)=>{if(A<0){let L=(u[$]-a[$])/A,R=a[$],M=R+L*i[$];a[$]=M,u[$]=R,C[$]=-A}});let f=r.slice(0);o.forEach((A,$)=>{f[A]=Math.ceil((u[A]-a[A])/i[A])});let m={dims:f,dataType:n[0].dataType},y=Q("output",n[0].dataType,f.length),_=W("input",n[0].dataType,n[0].dims.length),x=U.size(f),T=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:c.length},{name:"steps",type:"u32",length:i.length}],I=[{type:12,data:x},{type:12,data:a},{type:6,data:c},{type:12,data:i},...te(n[0].dims,f)],O=A=>`
      ${A.registerUniforms(T).declareVariables(_,y)}
        ${nz(_,y,r)}
        ${A.mainStart()}
          ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${y.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${y.setByOffset("global_idx",_.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${c.length}_${a.length}_${i.length}`,inputDependencies:["rank"]},getShaderSource:O,getRunData:()=>({outputs:[m],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:I})}},l2=(n,e)=>{tz(n.inputs,e);let r=rz(n.inputs,e);n.compute(oz(n.inputs,r),{inputs:[0]})},c2=n=>{let e=n.starts,r=n.ends,t=n.axes;return we({starts:e,ends:r,axes:t})}});var iz,az,p2,f2,h2=j(()=>{"use strict";ve();Ie();ot();sn();Ae();iz=n=>{if(!n||n.length!==1)throw new Error("Softmax op requires 1 input.")},az=(n,e)=>{let r=n.inputs[0],t=r.dims,o=U.size(t),i=t.length,a=U.normalizeAxis(e.axis,i),u=a<t.length-1,c,f=[];u?(f=Array.from({length:i},(q,X)=>X),f[a]=i-1,f[i-1]=a,c=n.compute(yt(r,f),{inputs:[r],outputs:[-1]})[0]):c=r;let m=c.dims,y=m[i-1],_=o/y,x=Me(y),T=y/x,I=64;_===1&&(I=256);let O=(q,X)=>X===4?`max(max(${q}.x, ${q}.y), max(${q}.z, ${q}.w))`:X===2?`max(${q}.x, ${q}.y)`:X===3?`max(max(${q}.x, ${q}.y), ${q}.z)`:q,A=W("x",c.dataType,c.dims,x),$=Q("result",c.dataType,c.dims,x),C=A.type.value,L=Ke(c.dataType)==="f32"?`var threadMax = ${C}(-3.402823e+38f);`:`var threadMax = ${C}(-65504.0h);`,R=q=>`
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
      ${q.registerUniform("packedCols","i32").declareVariables(A,$)}
      ${q.mainStart(I)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${I};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${L}
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
          rowMaxShared = ${C}(${O("threadShared[0]",x)});
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
          rowSumShared = ${C}(${nr("threadShared[0]",x)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,M=n.compute({name:"Softmax",shaderCache:{hint:`${x};${I}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:m,dataType:c.dataType}],dispatchGroup:{x:_},programUniforms:[{type:6,data:T}]}),getShaderSource:R},{inputs:[c],outputs:[u?-1:0]})[0];u&&n.compute(yt(M,f),{inputs:[M]})},p2=(n,e)=>{iz(n.inputs),az(n,e)},f2=n=>we({axis:n.axis})});var m2,sz,uz,lz,g2,y2=j(()=>{"use strict";ve();Ie();Ae();m2=n=>Array.from(n.getBigInt64Array(),Number),sz=n=>{if(!n||n.length!==2)throw new Error("Tile requires 2 inputs.");if(n[0].dataType!==1&&n[0].dataType!==10&&n[0].dataType!==6&&n[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(n[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(n[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(m2(n[1]).length!==n[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},uz=(n,e)=>{let r=[];for(let t=0;t<n.length;++t)r.push(n[t]*e[t]);return r},lz=(n,e)=>{let r=n[0].dims,t=e??m2(n[1]),o=uz(r,t),i=U.size(o),a=n[0].dataType,u=W("input",a,r.length),c=Q("output",a,o.length),f=m=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:o,dataType:n[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},...te(n[0].dims,o)]}),getShaderSource:f}},g2=n=>{sz(n.inputs),n.compute(lz(n.inputs),{inputs:[0]})}});var cz,dz,b2,_2=j(()=>{"use strict";ve();Ie();Ae();cz=(n,e,r,t,o)=>{let i=Q("output_data",o,r.length,4),a=W("a_data",e[1].dataType,e[1].dims.length,4),u=W("b_data",e[2].dataType,e[2].dims.length,4),c=W("c_data",e[0].dataType,e[0].dims.length,4),f,m=(y,_,x)=>`select(${_}, ${y}, ${x})`;if(!t)f=i.setByOffset("global_idx",m(a.getByOffset("global_idx"),u.getByOffset("global_idx"),c.getByOffset("global_idx")));else{let y=(_,x,T="")=>{let I=`a_data[index_a${x}][component_a${x}]`,O=`b_data[index_b${x}][component_b${x}]`,A=`bool(c_data[index_c${x}] & (0xffu << (component_c${x} * 8)))`;return`
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
            ${_}[${x}] = ${T}(${m(I,O,A)});
          `};o===9?f=`
            var data = vec4<u32>(0);
            ${y("data",0,"u32")}
            ${y("data",1,"u32")}
            ${y("data",2,"u32")}
            ${y("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:f=`
            ${y("output_data[global_idx]",0)}
            ${y("output_data[global_idx]",1)}
            ${y("output_data[global_idx]",2)}
            ${y("output_data[global_idx]",3)}
          `}return`
        ${n.registerUniform("vec_size","u32").declareVariables(c,a,u,i)}
        ${n.mainStart()}
        ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${f}
      }`},dz=n=>{let e=n[1].dims,r=n[2].dims,t=n[0].dims,o=n[1].dataType,i=!(U.areEqual(e,r)&&U.areEqual(r,t)),a=e,u=U.size(e);if(i){let f=Xr.calcShape(Xr.calcShape(e,r,!1),t,!1);if(!f)throw new Error("Can't perform where op on the given tensors");a=f,u=U.size(a)}let c=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:f=>cz(f,n,a,i,o),getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:c},...te(t,e,r,a)]})}},b2=n=>{n.compute(dz(n.inputs))}});var v2,w2=j(()=>{"use strict";ex();ja();nx();ix();jx();tT();oT();vT();AT();CT();kT();MT();VT();UT();HT();XT();JT();t1();o1();s1();m1();b1();v1();x1();S1();Vc();A1();j1();q1();X1();J1();Ga();n2();i2();s2();d2();h2();Uc();y2();sn();Ha();_2();v2=new Map([["Abs",[ax]],["Acos",[sx]],["Acosh",[ux]],["Add",[Wx]],["ArgMax",[Qw,Oc]],["ArgMin",[Jw,Oc]],["Asin",[lx]],["Asinh",[cx]],["Atan",[dx]],["Atanh",[px]],["Attention",[tx]],["AveragePool",[L1,N1]],["BatchNormalization",[rx]],["BiasAdd",[ox]],["BiasSplitGelu",[Ux]],["Cast",[hx,fx]],["Ceil",[gx]],["Clip",[mx]],["Concat",[rT,nT]],["Conv",[zc,Rc]],["ConvTranspose",[$T,IT]],["Cos",[yx]],["Cosh",[bx]],["CumSum",[OT,PT]],["DepthToSpace",[ET,DT]],["DequantizeLinear",[W1,H1]],["Div",[Hx]],["Einsum",[RT,zT]],["Elu",[_x,Yo]],["Equal",[qx]],["Erf",[vx]],["Exp",[wx]],["Expand",[FT]],["FastGelu",[GT]],["Floor",[xx]],["FusedConv",[zc,Rc]],["Gather",[WT,jT]],["GatherElements",[e1,QT]],["GatherBlockQuantized",[YT,ZT]],["GatherND",[qT,KT]],["Gelu",[Tx]],["Gemm",[n1,r1]],["GlobalAveragePool",[M1,z1]],["GlobalMaxPool",[U1,G1]],["Greater",[Zx]],["GreaterOrEqual",[Qx]],["GridSample",[i1,a1]],["GroupQueryAttention",[h1]],["HardSigmoid",[Ex,Cx]],["InstanceNormalization",[y1]],["LayerNormalization",[_1]],["LeakyRelu",[Ix,Yo]],["Less",[Jx]],["LessOrEqual",[eT]],["Log",[Fx]],["MatMul",[w1]],["MatMulNBits",[T1,I1]],["MaxPool",[F1,V1]],["Mul",[Kx]],["MultiHeadAttention",[c1,l1]],["Neg",[$x]],["Not",[Sx]],["Pad",[$1]],["Pow",[Xx]],["QuickGelu",[Vx,Yo]],["Range",[K1]],["Reciprocal",[Ax]],["ReduceMin",[Hw]],["ReduceMean",[Vw]],["ReduceMax",[Ww]],["ReduceSum",[Kw]],["ReduceProd",[qw]],["ReduceL1",[Gw]],["ReduceL2",[Uw]],["ReduceLogSum",[Yw]],["ReduceLogSumExp",[jw]],["ReduceSumSquare",[Xw]],["Relu",[Ox]],["Resize",[t2,r2]],["RotaryEmbedding",[o2]],["ScatterND",[Z1,Y1]],["Sigmoid",[Px]],["Sin",[Dx]],["Sinh",[kx]],["Slice",[l2,c2]],["SkipLayerNormalization",[a2]],["Split",[d1,p1]],["Sqrt",[Nx]],["Softmax",[p2,f2]],["Sub",[Yx]],["Tan",[Lx]],["Tanh",[zx]],["ThresholdedRelu",[Bx,Yo]],["Tile",[g2]],["Transpose",[Ow,Pw]],["Where",[b2]]])});var rs,x2=j(()=>{"use strict";xt();Kr();Ae();rs=class{constructor(e){this.backend=e;this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,r){this.repo.set(e,r)}run(e,r,t,o,i){Lt(e.programInfo.name);let a=this.backend.device,u=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let c=[];for(let m of r)c.push({binding:c.length,resource:{buffer:m.buffer}});for(let m of t)c.push({binding:c.length,resource:{buffer:m.buffer}});i&&c.push({binding:c.length,resource:i});let f=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:c,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let m={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:f,dispatchGroup:o};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(m)}u.setPipeline(e.computePipeline),u.setBindGroup(0,f),u.dispatchWorkgroups(...o),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),$t(e.programInfo.name)}dispose(){}build(e,r){Lt(e.name);let t=this.backend.device,o=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(y=>{t.features.has(y.feature)&&o.push(`enable ${y.extension};`)});let a=$w(r,this.backend.device.limits),u=e.getShaderSource(a),c=`${o.join(`
`)}
${a.additionalImplementations}
${u}`,f=t.createShaderModule({code:c,label:e.name});Ce("verbose",()=>`[WebGPU] ${e.name} shader code: ${c}`);let m=t.createComputePipeline({compute:{module:f,entryPoint:"main"},layout:"auto",label:e.name});return $t(e.name),{programInfo:e,computePipeline:m,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let r=typeof e=="number"?e:e.x,t=typeof e=="number"?1:e.y||1,o=typeof e=="number"?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(r<=i&&t<=i&&o<=i)return[r,t,o];let a=r*t*o,u=Math.ceil(Math.sqrt(a));if(u>i){if(u=Math.ceil(Math.cbrt(a)),u>i)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[u,u,u]}else return[u,u,1]}}});var pz,fz,jc,Wc,ns,T2=j(()=>{"use strict";xt();ve();Kr();yc();xw();w2();x2();pz=(n,e)=>{if(e.length!==n.length)throw new Error(`inputDependencies length ${e.length} is not equal to inputTensors length ${n.length}.`);let r=[];for(let t=0;t<n.length;++t){let o=n[t].dataType;switch(e[t]){case"none":{r.push("");break}case"type":{r.push(`${o}`);break}case"rank":{let i=n[t].dims.length;r.push(`${o};${i}`);break}case"dims":{let i=n[t].dims.join(",");r.push(`${o};${i}`);break}default:throw new Error(`unsupported input dependency: ${e[t]}`)}}return r.join("|")},fz=(n,e,r)=>{let t=n.name;return n.shaderCache?.hint&&(t+="["+n.shaderCache.hint+"]"),t+=":"+r+`:${pz(e,n.shaderCache?.inputDependencies??new Array(e.length).fill("dims"))}`,t},jc=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Wc=class{constructor(e){this.subgroupsSupported=e.features.has("subgroups"),this.subgroupsF16Supported=e.features.has("subgroups");let r=e.limits;!this.subgroupsSupported||!r.minSubgroupSize||!r.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[r.minSubgroupSize,r.maxSubgroupSize]}},ns=class{constructor(){this.currentSessionId=null;this.currentKernelId=null;this.commandEncoder=null;this.computePassEncoder=null;this.maxDispatchNumber=16;this.pendingDispatchNumber=0;this.pendingKernels=[];this.pendingQueries=new Map;this.sessionStatus="default";this.capturedCommandList=new Map;this.capturedPendingKernels=new Map;this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,r){this.env=e;let t=[],o={requiredLimits:{maxComputeWorkgroupStorageSize:r.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:r.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:r.limits.maxStorageBufferBindingSize,maxBufferSize:r.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:r.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:r.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:r.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:r.limits.maxComputeWorkgroupSizeZ},requiredFeatures:t},i=a=>r.features.has(a)&&t.push(a)&&!0;i("chromium-experimental-timestamp-query-inside-passes")||i("timestamp-query"),i("shader-f16"),i("subgroups")&&i("subgroups-f16"),this.device=await r.requestDevice(o),this.deviceInfo=new Wc(this.device),this.adapterInfo=new jc(r.info||await r.requestAdapterInfo()),this.gpuDataManager=ww(this),this.programManager=new rs(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ra(e.logLevel,!!e.debug),this.device.onuncapturederror=a=>{a.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${a.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:r,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),r={};this.queryType==="at-passes"&&(r.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(r)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Lt(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let r=new BigUint64Array(e.getMappedRange()),t=this.pendingQueries.get(e);for(let o=0;o<r.length/2;o++){let i=t[o],a=i.kernelId,u=this.kernels.get(a),c=u.kernelType,f=u.kernelName,m=i.programName,y=i.inputTensorViews,_=i.outputTensorViews,x=r[o*2],T=r[o*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=x);let I=Number(x-this.queryTimeBase),O=Number(T-this.queryTimeBase);if(!Number.isSafeInteger(I)||!Number.isSafeInteger(O))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:y.map(A=>({dims:A.dims,dataType:In(A.dataType)})),outputsMetadata:_.map(A=>({dims:A.dims,dataType:In(A.dataType)})),kernelId:a,kernelType:c,kernelName:f,programName:m,startTime:I,endTime:O});else{let A="";y.forEach((C,L)=>{A+=`input[${L}]: [${C.dims}] | ${In(C.dataType)}, `});let $="";_.forEach((C,L)=>{$+=`output[${L}]: [${C.dims}] | ${In(C.dataType)}, `}),console.log(`[profiling] kernel "${a}|${c}|${f}|${m}" ${A}${$}execution time: ${O-I} ns`)}bi("GPU",`${m}::${x}::${T}`)}e.unmap(),this.pendingQueries.delete(e)}),$t()}run(e,r,t,o,i,a){Lt(e.name);let u=[];for(let C=0;C<r.length;++C){let L=r[C].data;if(L===0)continue;let R=this.gpuDataManager.get(L);if(!R)throw new Error(`no GPU data for input: ${L}`);u.push(R)}let{outputs:c,dispatchGroup:f,programUniforms:m}=e.getRunData(r),y=t.length===0?c.map((C,L)=>L):t;if(y.length!==c.length)throw new Error(`Output size ${y.length} must be equal to ${c.length}.`);let _=[],x=[];for(let C=0;C<c.length;++C){if(!Number.isInteger(y[C])||y[C]<-3||y[C]>=a)throw new Error(`Invalid output index: ${y[C]}`);if(y[C]===-3)continue;let L=y[C]===-1,R=y[C]===-2,M=L||R?i(c[C].dataType,c[C].dims):o(y[C],c[C].dataType,c[C].dims);if(_.push(M),M.data===0)continue;let q=this.gpuDataManager.get(M.data);if(!q)throw new Error(`no GPU data for output: ${M.data}`);if(L&&this.temporaryData.push(q),R){let X=this.kernelPersistentData.get(this.currentKernelId);X||(X=[],this.kernelPersistentData.set(this.currentKernelId,X)),X.push(q)}x.push(q)}if(u.length!==r.length||x.length!==_.length){if(x.length===0)return $t(e.name),_;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let T;if(m){let C=0,L=[];m.forEach(X=>{let J=typeof X.data=="number"?[X.data]:X.data;if(J.length===0)return;let ie=X.type===10?2:4,ue,xe;X.type===10?(xe=J.length>4?16:J.length>2?8:J.length*ie,ue=J.length>4?16:ie*J.length):(xe=J.length<=2?J.length*ie:16,ue=16),C=Math.ceil(C/xe)*xe,L.push(C);let ee=X.type===10?8:4;C+=J.length>4?Math.ceil(J.length/ee)*ue:J.length*ie});let R=16;C=Math.ceil(C/R)*R;let M=new ArrayBuffer(C);m.forEach((X,J)=>{let ie=L[J],ue=typeof X.data=="number"?[X.data]:X.data;if(X.type===6)new Int32Array(M,ie,ue.length).set(ue);else if(X.type===12)new Uint32Array(M,ie,ue.length).set(ue);else if(X.type===10)new Uint16Array(M,ie,ue.length).set(ue);else if(X.type===1)new Float32Array(M,ie,ue.length).set(ue);else throw new Error(`Unsupported uniform type: ${In(X.type)}`)});let q=this.gpuDataManager.create(C,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(q.buffer,0,M,0,C),this.gpuDataManager.release(q.id),T={offset:0,size:C,buffer:q.buffer}}let I=this.programManager.normalizeDispatchGroupSize(f),O=I[1]===1&&I[2]===1,A=fz(e,r,O),$=this.programManager.getArtifact(A);if($||($=this.programManager.build(e,I),this.programManager.setArtifact(A,$),Ce("info",()=>`[artifact] key: ${A}, programName: ${e.name}`)),m&&$.uniformVariablesInfo){if(m.length!==$.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${$.uniformVariablesInfo.length}, got ${m.length} in program "${$.programInfo.name}".`);for(let C=0;C<m.length;C++){let L=m[C],R=L.type,M=typeof L.data=="number"?1:L.data.length,[q,X]=$.uniformVariablesInfo[C];if(R!==q||M!==X)throw new Error(`Uniform variable ${C} mismatch: expect type ${q} with size ${X}, got type ${R} with size ${M} in program "${$.programInfo.name}".`)}}if(Ce("info",()=>`[ProgramManager] run "${e.name}" (key=${A}) with ${I[0]}x${I[1]}x${I[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let C={kernelId:this.currentKernelId,programName:$.programInfo.name,inputTensorViews:r,outputTensorViews:_};this.pendingKernels.push(C),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(C)}return this.programManager.run($,u,x,I,T),$t(e.name),_}upload(e,r){this.gpuDataManager.upload(e,r)}memcpy(e,r){this.gpuDataManager.memcpy(e,r)}async download(e,r){await this.gpuDataManager.download(e,r)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,r,t,o){let i=v2.get(e);if(!i)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:o,kernelEntry:i[0],attributes:[i[1],t]};this.kernels.set(r,a)}releaseKernel(e){let r=this.kernelPersistentData.get(e);if(r){for(let t of r)this.gpuDataManager.release(t.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,r,t){let o=this.kernels.get(e);if(!o)throw new Error(`kernel not created: ${e}`);let i=o.kernelType,a=o.kernelName,u=o.kernelEntry,c=o.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,c[0]&&(c[1]=c[0](c[1]),c[0]=void 0),Ce("info",()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let f=this.env.debug;this.temporaryData=[];try{return f&&this.device.pushErrorScope("validation"),u(r,c[1]),0}catch(m){return t.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${m}`)),1}finally{f&&t.push(this.device.popErrorScope().then(m=>m?`GPU validation error for kernel "[${i}] ${a}": ${m.message}`:null));for(let m of this.temporaryData)this.gpuDataManager.release(m.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,r,t,o){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(r),u=this.gpuDataManager.registerExternalBuffer(t,o,a);return i.set(r,[u,t]),u}unregisterBuffers(e){let r=this.sessionExternalDataMapping.get(e);r&&(r.forEach(t=>this.gpuDataManager.unregisterExternalBuffer(t[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let r=this.gpuDataManager.get(e);if(!r)throw new Error(`no GPU data for buffer: ${e}`);return r.buffer}createDownloader(e,r,t){return async()=>{let o=await wc(this,e,r);return za(o.buffer,t)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ce("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ce("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ce("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),r=this.capturedPendingKernels.get(this.currentSessionId),t=e.length;this.pendingKernels=[];for(let o=0;o<t;o++){let i=this.getComputePassEncoder(),a=e[o];this.writeTimestamp(this.pendingDispatchNumber*2),i.setPipeline(a.computePipeline),i.setBindGroup(0,a.bindGroup),i.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(r[o]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}});var hz,I2,mz,S2,os,is,Hc,$2,A2=j(()=>{"use strict";Kr();hz=1,I2=()=>hz++,mz=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),S2=(n,e)=>{let r=mz.get(n);if(!r)throw new Error("Unsupported data type.");return e.length>0?Math.ceil(e.reduce((t,o)=>t*o)*r/8):0},os=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return S2(this.dataType,this.tensorShape)}destroy(){Ce("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,r,t){return this.mlContext===e&&this.dataType===r&&this.tensorShape.length===t.length&&this.tensorShape.every((o,i)=>o===t[i])}},is=class{constructor(e,r){this.tensorManager=e;this.wrapper=r}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,r,t,o){let i=this.tensorManager.getMLContext(e);if(this.wrapper){if(this.wrapper.canReuseTensor(i,r,t))return this.wrapper.tensor;if(o){if(this.wrapper.byteLength!==S2(r,t))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let a=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,r,t,a,!0,!0),o&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else Ce("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Hc=class{constructor(e){this.backend=e;this.tensorTrackersById=new Map;this.freeTensors=[];this.externalTensors=new Set}getMLContext(e){let r=this.backend.getMLContext(e);if(!r)throw new Error("MLContext not found for session.");return r}reserveTensorId(){let e=I2();return this.tensorTrackersById.set(e,new is(this)),e}releaseTensorId(e){let r=this.tensorTrackersById.get(e);r&&(this.tensorTrackersById.delete(e),r.tensorWrapper&&this.releaseTensor(r.tensorWrapper))}async ensureTensor(e,r,t,o,i){Ce("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${r}, dataType: ${t}, shape: ${o}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(r);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,t,o,i)}upload(e,r){let t=this.tensorTrackersById.get(e);if(!t)throw new Error("Tensor not found.");t.upload(r)}async download(e,r){Ce("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${r?.byteLength}}`);let t=this.tensorTrackersById.get(e);if(!t)throw new Error("Tensor not found.");return t.download(r)}releaseTensorsForSession(e){for(let r of this.freeTensors)r.sessionId===e&&r.destroy();this.freeTensors=this.freeTensors.filter(r=>r.sessionId!==e)}registerTensor(e,r,t,o){let i=this.getMLContext(e),a=I2(),u=new os({sessionId:e,context:i,tensor:r,dataType:t,shape:o});return this.tensorTrackersById.set(a,new is(this,u)),this.externalTensors.add(u),a}async getCachedTensor(e,r,t,o,i,a){let u=this.getMLContext(e);for(let[f,m]of this.freeTensors.entries())if(m.canReuseTensor(u,r,t)){Ce("verbose",()=>`[WebNN] Reusing tensor {dataType: ${r}, shape: ${t}}`);let y=this.freeTensors.splice(f,1)[0];return y.sessionId=e,y}Ce("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${r}, shape: ${t}}`);let c=await u.createTensor({dataType:r,shape:t,dimensions:t,usage:o,writable:i,readable:a});return new os({sessionId:e,context:u,tensor:c,dataType:r,shape:t})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},$2=(...n)=>new Hc(...n)});var qc,gz,as,O2=j(()=>{"use strict";ve();Tn();yc();A2();Kr();qc=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),gz=(n,e)=>{if(n===e)return!0;if(n===void 0||e===void 0)return!1;let r=Object.keys(n).sort(),t=Object.keys(e).sort();return r.length===t.length&&r.every((o,i)=>o===t[i]&&n[o]===e[o])},as=class{constructor(e){this.tensorManager=$2(this);this.mlContextBySessionId=new Map;this.sessionIdsByMLContext=new Map;this.mlContextCache=[];this.sessionGraphInputs=new Map;this.temporaryGraphInputs=[];this.temporarySessionTensorIds=new Map;Ra(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){Ce("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Ce("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let r=this.temporarySessionTensorIds.get(e);if(r){for(let t of r)Ce("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${t}}`),this.tensorManager.releaseTensorId(t);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let t=this.mlContextCache.findIndex(o=>o.gpuDevice===e);if(t!==-1)return this.mlContextCache[t].mlContext;{let o=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:o}),o}}else if(e===void 0){let t=this.mlContextCache.findIndex(o=>o.options===void 0&&o.gpuDevice===void 0);if(t!==-1)return this.mlContextCache[t].mlContext;{let o=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:o}),o}}let r=this.mlContextCache.findIndex(t=>gz(t.options,e));if(r!==-1)return this.mlContextCache[r].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:t}),t}}registerMLContext(e,r){this.mlContextBySessionId.set(e,r);let t=this.sessionIdsByMLContext.get(r);t||(t=new Set,this.sessionIdsByMLContext.set(r,t)),t.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let r=this.mlContextBySessionId.get(e);if(!r)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let t=this.sessionIdsByMLContext.get(r);if(t.delete(e),t.size===0){this.sessionIdsByMLContext.delete(r);let o=this.mlContextCache.findIndex(i=>i.mlContext===r);o!==-1&&this.mlContextCache.splice(o,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ce("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,r,t,o,i){let a=qc.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,r,a,o,i)}async createTemporaryTensor(e,r,t){Ce("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${r}, shape: ${t}}`);let o=qc.get(r);if(!o)throw new Error(`Unsupported ONNX data type: ${r}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,o,t,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,r){if(!it().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ce("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${r.byteLength}}`),this.tensorManager.upload(e,r)}async downloadTensor(e,r){return this.tensorManager.download(e,r)}createMLTensorDownloader(e,r){return async()=>{let t=await this.tensorManager.download(e);return za(t,r)}}registerMLTensor(e,r,t,o){let i=qc.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.registerTensor(e,r,i,o);return Ce("verbose",()=>`[WebNN] registerMLTensor {tensor: ${r}, dataType: ${i}, dimensions: ${o}} -> {tensorId: ${a}}`),a}registerMLConstant(e,r,t,o,i,a){if(!a)throw new Error("External mounted files are not available.");let u=e;e.startsWith("./")&&(u=e.substring(2));let c=a.get(u);if(!c)throw new Error(`File with name ${u} not found in preloaded files.`);if(r+t>c.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let f=c.slice(r,r+t).buffer,m;switch(i.dataType){case"float32":m=new Float32Array(f);break;case"float16":m=new Uint16Array(f);break;case"int32":m=new Int32Array(f);break;case"uint32":m=new Uint32Array(f);break;case"int64":m=new BigInt64Array(f);break;case"uint64":m=new BigUint64Array(f);break;case"int8":m=new Int8Array(f);break;case"int4":case"uint4":case"uint8":m=new Uint8Array(f);break;default:throw new Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Ce("verbose",()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}}`),o.constant(i,m)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,r){let t=this.sessionGraphInputs.get(e);return t?t.includes(r):!1}flush(){}}});var P2={};eo(P2,{init:()=>yz});var ei,Kc,yz,C2=j(()=>{"use strict";ve();T2();Kr();Ie();O2();ei=class n{constructor(e,r,t,o){this.module=e;this.dataType=r;this.data=t;this.dims=o}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let e=U.size(this.dims);return e===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,e)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let e=U.size(this.dims);return e===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,e)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let e=U.size(this.dims);return e===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,e)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let e=U.size(this.dims);return e===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,e)}reshape(e){if(U.size(e)!==U.size(this.dims))throw new Error("Invalid new shape");return new n(this.module,this.dataType,this.data,e)}},Kc=class{constructor(e,r,t){this.module=e;this.backend=r;this.customDataOffset=0;this.customDataSize=0;this.adapterInfo=r.adapterInfo,this.deviceInfo=r.deviceInfo;let o=e.PTR_SIZE,i=t/e.PTR_SIZE,a=o===4?"i32":"i64";this.opKernelContext=Number(e.getValue(o*i++,a));let u=Number(e.getValue(o*i++,a));this.outputCount=Number(e.getValue(o*i++,a)),this.customDataOffset=Number(e.getValue(o*i++,"*")),this.customDataSize=Number(e.getValue(o*i++,a));let c=[];for(let f=0;f<u;f++){let m=Number(e.getValue(o*i++,a)),y=Number(e.getValue(o*i++,"*")),_=Number(e.getValue(o*i++,a)),x=[];for(let T=0;T<_;T++)x.push(Number(e.getValue(o*i++,a)));c.push(new ei(e,m,y,x))}this.inputs=c}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,r){let t=r?.inputs?.map(u=>typeof u=="number"?this.inputs[u]:u)??this.inputs,o=r?.outputs??[],i=(u,c,f)=>new ei(this.module,c,this.output(u,f),f),a=(u,c)=>{let f=Sn(u,c);if(!f)throw new Error(`Unsupported data type: ${u}`);let m=f>0?this.backend.gpuDataManager.create(f).id:0;return new ei(this.module,u,m,c)};return this.backend.run(e,t,o,i,a,this.outputCount)}output(e,r){let t=this.module.stackSave();try{let o=this.module.PTR_SIZE,i=o===4?"i32":"i64",a=this.module.stackAlloc((1+r.length)*o);this.module.setValue(a,r.length,i);for(let u=0;u<r.length;u++)this.module.setValue(a+o*(u+1),r[u],i);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(o){throw new Error(`Failed to generate kernel's output[${e}] with dims [${r}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${o}`)}finally{this.module.stackRestore(t)}}},yz=async(n,e,r,t)=>{let o=e.jsepInit;if(!o)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(n==="webgpu"){let i=new ns;await i.initialize(r,t),o("webgpu",[i,a=>i.alloc(Number(a)),a=>i.free(a),(a,u,c,f=!1)=>{if(f)Ce("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(a)}, dst=${Number(u)}, size=${Number(c)}`),i.memcpy(Number(a),Number(u));else{Ce("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(a)}, gpuDataId=${Number(u)}, size=${Number(c)}`);let m=e.HEAPU8.subarray(Number(a>>>0),Number(a>>>0)+Number(c));i.upload(Number(u),m)}},async(a,u,c)=>{Ce("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${a}, dataOffset=${u}, size=${c}`),await i.download(Number(a),()=>e.HEAPU8.subarray(Number(u)>>>0,Number(u+c)>>>0))},(a,u,c)=>i.createKernel(a,Number(u),c,e.UTF8ToString(e._JsepGetNodeName(Number(u)))),a=>i.releaseKernel(a),(a,u,c,f)=>{Ce("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${c}, kernel=${a}, contextDataOffset=${u}`);let m=new Kc(e,i,Number(u));return i.computeKernel(Number(a),m,f)},()=>i.captureBegin(),()=>i.captureEnd(),()=>i.replay()])}else{let i=new as(r);o("webnn",[i,()=>i.reserveTensorId(),a=>i.releaseTensorId(a),async(a,u,c,f,m)=>i.ensureTensor(a,u,c,f,m),(a,u)=>{i.uploadTensor(a,u)},async(a,u)=>i.downloadTensor(a,u)])}}});var bz,Ia,Sa,Xn,_z,Ho,$a,Aa,E2,Oa,Pa,Ca,cc=j(()=>{"use strict";fw();mw();ve();Tn();Da();gc();bz=(n,e)=>{it()._OrtInit(n,e)!==0&&ze("Can't initialize onnxruntime.")},Ia=async n=>{bz(n.wasm.numThreads,Ko(n.logLevel))},Sa=async(n,e)=>{{let r=(C2(),So(P2)).init;if(e==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let t=n.webgpu.adapter;if(t){if(typeof t.limits!="object"||typeof t.features!="object"||typeof t.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let o=n.webgpu.powerPreference;if(o!==void 0&&o!=="low-power"&&o!=="high-performance")throw new Error(`Invalid powerPreference setting: "${o}"`);let i=n.webgpu.forceFallbackAdapter;if(i!==void 0&&typeof i!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${i}"`);if(t=await navigator.gpu.requestAdapter({powerPreference:o,forceFallbackAdapter:i}),!t)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",it(),n,t)}if(e==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",it(),n)}}},Xn=new Map,_z=n=>{let e=it(),r=e.stackSave();try{let t=e.PTR_SIZE,o=e.stackAlloc(2*t);e._OrtGetInputOutputCount(n,o,o+t)!==0&&ze("Can't get session input/output count.");let a=t===4?"i32":"i64";return[Number(e.getValue(o,a)),Number(e.getValue(o+t,a))]}finally{e.stackRestore(r)}},Ho=n=>{let e=it(),r=e._malloc(n.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${n.byteLength}.`);return e.HEAPU8.set(n,r),[r,n.byteLength]},$a=async(n,e)=>{let r,t,o=it();Array.isArray(n)?[r,t]=n:n.buffer===o.HEAPU8.buffer?[r,t]=[n.byteOffset,n.byteLength]:[r,t]=Ho(n);let i=0,a=0,u=0,c=[],f=[],m=[];try{if([a,c]=hw(e),e?.externalData&&o.mountExternalData){let $=[];for(let C of e.externalData){let L=typeof C=="string"?C:C.path;$.push(Xo(typeof C=="string"?C:C.data).then(R=>{o.mountExternalData(L,R)}))}await Promise.all($)}for(let $ of e?.executionProviders??[])if((typeof $=="string"?$:$.name)==="webnn"){if(o.shouldTransferToMLTensor=!1,typeof $!="string"){let L=$,R=L?.context,M=L?.gpuDevice,q=L?.deviceType,X=L?.powerPreference;R?o.currentContext=R:M?o.currentContext=await o.jsepCreateMLContext(M):o.currentContext=await o.jsepCreateMLContext({deviceType:q,powerPreference:X})}else o.currentContext=await o.jsepCreateMLContext();break}i=await o._OrtCreateSession(r,t,a),i===0&&ze("Can't create a session."),o.jsepOnCreateSession?.(),o.currentContext&&(o.jsepRegisterMLContext(i,o.currentContext),o.currentContext=void 0,o.shouldTransferToMLTensor=!0);let[y,_]=_z(i),x=!!e?.enableGraphCapture,T=[],I=[],O=[];for(let $=0;$<y;$++){let C=o._OrtGetInputName(i,$);C===0&&ze("Can't get an input name."),f.push(C),T.push(o.UTF8ToString(C))}for(let $=0;$<_;$++){let C=o._OrtGetOutputName(i,$);C===0&&ze("Can't get an output name."),m.push(C);let L=o.UTF8ToString(C);I.push(L);{if(x&&e?.preferredOutputLocation===void 0){O.push("gpu-buffer");continue}let R=typeof e?.preferredOutputLocation=="string"?e.preferredOutputLocation:e?.preferredOutputLocation?.[L]??"cpu";if(R!=="cpu"&&R!=="cpu-pinned"&&R!=="gpu-buffer"&&R!=="ml-tensor")throw new Error(`Not supported preferred output location: ${R}.`);if(x&&R!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${R}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);O.push(R)}}let A=null;return O.some($=>$==="gpu-buffer"||$==="ml-tensor")&&(u=o._OrtCreateBinding(i),u===0&&ze("Can't create IO binding."),A={handle:u,outputPreferredLocations:O,outputPreferredLocationsEncoded:O.map($=>mc($))}),Xn.set(i,[i,f,m,A,x,!1]),[i,T,I]}catch(y){throw f.forEach(_=>o._OrtFree(_)),m.forEach(_=>o._OrtFree(_)),u!==0&&o._OrtReleaseBinding(u)!==0&&ze("Can't release IO binding."),i!==0&&o._OrtReleaseSession(i)!==0&&ze("Can't release session."),y}finally{o._free(r),a!==0&&o._OrtReleaseSessionOptions(a)!==0&&ze("Can't release session options."),c.forEach(y=>o._free(y)),o.unmountExternalData?.()}},Aa=n=>{let e=it(),r=Xn.get(n);if(!r)throw new Error(`cannot release session. invalid session id: ${n}`);let[t,o,i,a,u]=r;a&&(u&&e._OrtClearBoundOutputs(a.handle)!==0&&ze("Can't clear bound outputs."),e._OrtReleaseBinding(a.handle)!==0&&ze("Can't release IO binding.")),e.jsepOnReleaseSession?.(n),o.forEach(c=>e._OrtFree(c)),i.forEach(c=>e._OrtFree(c)),e._OrtReleaseSession(t)!==0&&ze("Can't release session."),Xn.delete(n)},E2=async(n,e,r,t,o,i=!1)=>{if(!n){e.push(0);return}let a=it(),u=a.PTR_SIZE,c=n[0],f=n[1],m=n[3],y=m,_,x;if(c==="string"&&(m==="gpu-buffer"||m==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(i&&m!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${o} when enableGraphCapture is true.`);if(m==="gpu-buffer"){let O=n[2].gpuBuffer;x=Sn(ho(c),f);let A=a.jsepRegisterBuffer;if(!A)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');_=A(t,o,O,x)}else if(m==="ml-tensor"){let O=n[2].mlTensor;x=Sn(ho(c),f);let A=a.jsepRegisterMLTensor;if(!A)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');_=A(t,O,ho(c),f)}else{let O=n[2];if(Array.isArray(O)){x=u*O.length,_=a._malloc(x),r.push(_);for(let A=0;A<O.length;A++){if(typeof O[A]!="string")throw new TypeError(`tensor data at index ${A} is not a string`);a.setValue(_+A*u,mt(O[A],r),"*")}}else{let A=a.jsepIsGraphInput;if(c!=="string"&&A){let $=a._OrtGetInputName(t,o),C=a.UTF8ToString($);if(A(t,C)){let L=ho(c);x=Sn(L,f),y="ml-tensor";let R=a.jsepCreateTemporaryTensor,M=a.jsepUploadTensor;if(!R||!M)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let q=await R(t,L,f);M(q,new Uint8Array(O.buffer,O.byteOffset,O.byteLength)),_=q}else x=O.byteLength,_=a._malloc(x),r.push(_),a.HEAPU8.set(new Uint8Array(O.buffer,O.byteOffset,x),_)}else x=O.byteLength,_=a._malloc(x),r.push(_),a.HEAPU8.set(new Uint8Array(O.buffer,O.byteOffset,x),_)}}let T=a.stackSave(),I=a.stackAlloc(4*f.length);try{f.forEach((A,$)=>a.setValue(I+$*u,A,u===4?"i32":"i64"));let O=a._OrtCreateTensor(ho(c),_,x,I,f.length,mc(y));O===0&&ze(`Can't create tensor for input/output. session=${t}, index=${o}.`),e.push(O)}finally{a.stackRestore(T)}},Oa=async(n,e,r,t,o,i)=>{let a=it(),u=a.PTR_SIZE,c=Xn.get(n);if(!c)throw new Error(`cannot run inference. invalid session id: ${n}`);let f=c[0],m=c[1],y=c[2],_=c[3],x=c[4],T=c[5],I=e.length,O=t.length,A=0,$=[],C=[],L=[],R=[],M=a.stackSave(),q=a.stackAlloc(I*u),X=a.stackAlloc(I*u),J=a.stackAlloc(O*u),ie=a.stackAlloc(O*u);try{[A,$]=pw(i);for(let ee=0;ee<I;ee++)await E2(r[ee],C,R,n,e[ee],x);for(let ee=0;ee<O;ee++)await E2(o[ee],L,R,n,I+t[ee],x);for(let ee=0;ee<I;ee++)a.setValue(q+ee*u,C[ee],"*"),a.setValue(X+ee*u,m[e[ee]],"*");for(let ee=0;ee<O;ee++)a.setValue(J+ee*u,L[ee],"*"),a.setValue(ie+ee*u,y[t[ee]],"*");if(_&&!T){let{handle:ee,outputPreferredLocations:ye,outputPreferredLocationsEncoded:Xe}=_;if(m.length!==I)throw new Error(`input count from feeds (${I}) is expected to be always equal to model's input count (${m.length}).`);for(let de=0;de<I;de++){let _e=e[de];await a._OrtBindInput(ee,m[_e],C[de])!==0&&ze(`Can't bind input[${de}] for session=${n}.`)}for(let de=0;de<O;de++){let _e=t[de];o[de]?.[3]?a._OrtBindOutput(ee,y[_e],L[de],0)!==0&&ze(`Can't bind pre-allocated output[${de}] for session=${n}.`):a._OrtBindOutput(ee,y[_e],0,Xe[_e])!==0&&ze(`Can't bind output[${de}] to ${ye[de]} for session=${n}.`)}Xn.set(n,[f,m,y,_,x,!0])}a.jsepOnRunStart?.(f);let ue;_?ue=await a._OrtRunWithBinding(f,_.handle,O,J,A):ue=await a._OrtRun(f,X,q,I,ie,O,J,A),ue!==0&&ze("failed to call OrtRun().");let xe=[];for(let ee=0;ee<O;ee++){let ye=Number(a.getValue(J+ee*u,"*"));if(ye===L[ee]){xe.push(o[ee]);continue}let Xe=a.stackSave(),de=a.stackAlloc(4*u),_e=!1,$e,le=0;try{a._OrtGetTensorData(ye,de,de+u,de+2*u,de+3*u)!==0&&ze(`Can't access output tensor data on index ${ee}.`);let ct=u===4?"i32":"i64",et=Number(a.getValue(de,ct));le=a.getValue(de+u,"*");let K=a.getValue(de+u*2,"*"),Y=Number(a.getValue(de+u*3,ct)),pe=[];for(let Ye=0;Ye<Y;Ye++)pe.push(Number(a.getValue(K+Ye*u,ct)));a._OrtFree(K)!==0&&ze("Can't free memory for tensor dims.");let Le=pe.reduce((Ye,Ue)=>Ye*Ue,1);$e=In(et);let Xt=_?.outputPreferredLocations[t[ee]];if($e==="string"){if(Xt==="gpu-buffer"||Xt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Ye=[];for(let Ue=0;Ue<Le;Ue++){let sr=a.getValue(le+Ue*u,"*"),vo=a.getValue(le+(Ue+1)*u,"*"),On=Ue===Le-1?void 0:vo-sr;Ye.push(a.UTF8ToString(sr,On))}xe.push([$e,pe,Ye,"cpu"])}else if(Xt==="gpu-buffer"&&Le>0){let Ye=a.jsepGetBuffer;if(!Ye)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Ue=Ye(le),sr=Sn(et,Le);if(sr===void 0||!Na($e))throw new Error(`Unsupported data type: ${$e}`);_e=!0,xe.push([$e,pe,{gpuBuffer:Ue,download:a.jsepCreateDownloader(Ue,sr,$e),dispose:()=>{a._OrtReleaseTensor(ye)!==0&&ze("Can't release tensor.")}},"gpu-buffer"])}else if(Xt==="ml-tensor"&&Le>0){let Ye=a.jsepEnsureTensor;if(!Ye)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Sn(et,Le)===void 0||!La($e))throw new Error(`Unsupported data type: ${$e}`);let sr=await Ye(n,le,et,pe,!1);_e=!0,xe.push([$e,pe,{mlTensor:sr,download:a.jsepCreateMLTensorDownloader(le,$e),dispose:()=>{a.jsepReleaseTensorId(le),a._OrtReleaseTensor(ye)}},"ml-tensor"])}else{let Ye=ka($e),Ue=new Ye(Le);new Uint8Array(Ue.buffer,Ue.byteOffset,Ue.byteLength).set(a.HEAPU8.subarray(le,le+Ue.byteLength)),xe.push([$e,pe,Ue,"cpu"])}}finally{a.stackRestore(Xe),$e==="string"&&le&&a._free(le),_e||a._OrtReleaseTensor(ye),a.jsepOnRunEnd?.(f)}}return _&&!x&&(a._OrtClearBoundOutputs(_.handle)!==0&&ze("Can't clear bound outputs."),Xn.set(n,[f,m,y,_,x,!1])),xe}finally{a.stackRestore(M),C.forEach(ue=>a._OrtReleaseTensor(ue)),L.forEach(ue=>a._OrtReleaseTensor(ue)),R.forEach(ue=>a._free(ue)),A!==0&&a._OrtReleaseRunOptions(A),$.forEach(ue=>a._free(ue))}},Pa=n=>{let e=it(),r=Xn.get(n);if(!r)throw new Error("invalid session id");let t=r[0],o=e._OrtEndProfiling(t);o===0&&ze("Can't get an profile file name."),e._OrtFree(o)},Ca=n=>{let e=[];for(let r of n){let t=r[2];!Array.isArray(t)&&"buffer"in t&&e.push(t.buffer)}return e}});var Yn,Kt,ti,us,ls,ss,Xc,Yc,bo,_o,wz,D2,k2,N2,L2,R2,z2,M2,Zc=j(()=>{"use strict";xt();cc();Tn();xa();Yn=()=>!!Te.wasm.proxy&&typeof document<"u",ti=!1,us=!1,ls=!1,Yc=new Map,bo=(n,e)=>{let r=Yc.get(n);r?r.push(e):Yc.set(n,[e])},_o=()=>{if(ti||!us||ls||!Kt)throw new Error("worker not ready")},wz=n=>{switch(n.data.type){case"init-wasm":ti=!1,n.data.err?(ls=!0,Xc[1](n.data.err)):(us=!0,Xc[0]()),ss&&(URL.revokeObjectURL(ss),ss=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let e=Yc.get(n.data.type);n.data.err?e.shift()[1](n.data.err):e.shift()[0](n.data.out);break}default:}},D2=async()=>{if(!us){if(ti)throw new Error("multiple calls to 'initWasm()' detected.");if(ls)throw new Error("previous call to 'initWasm()' failed.");if(ti=!0,Yn())return new Promise((n,e)=>{Kt?.terminate(),lw().then(([r,t])=>{try{Kt=t,Kt.onerror=i=>e(i),Kt.onmessage=wz,Xc=[n,e];let o={type:"init-wasm",in:Te};!o.in.wasm.wasmPaths&&(r||import.meta.url?.startsWith("file:"))&&(o.in.wasm.wasmPaths={wasm:new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href}),Kt.postMessage(o),ss=r}catch(o){e(o)}},e)});try{await Ta(Te.wasm),await Ia(Te),us=!0}catch(n){throw ls=!0,n}finally{ti=!1}}},k2=async n=>{if(Yn())return _o(),new Promise((e,r)=>{bo("init-ep",[e,r]);let t={type:"init-ep",in:{epName:n,env:Te}};Kt.postMessage(t)});await Sa(Te,n)},N2=async n=>Yn()?(_o(),new Promise((e,r)=>{bo("copy-from",[e,r]);let t={type:"copy-from",in:{buffer:n}};Kt.postMessage(t,[n.buffer])})):Ho(n),L2=async(n,e)=>{if(Yn()){if(e?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return _o(),new Promise((r,t)=>{bo("create",[r,t]);let o={type:"create",in:{model:n,options:{...e}}},i=[];n instanceof Uint8Array&&i.push(n.buffer),Kt.postMessage(o,i)})}else return $a(n,e)},R2=async n=>{if(Yn())return _o(),new Promise((e,r)=>{bo("release",[e,r]);let t={type:"release",in:n};Kt.postMessage(t)});Aa(n)},z2=async(n,e,r,t,o,i)=>{if(Yn()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(o.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return _o(),new Promise((a,u)=>{bo("run",[a,u]);let c=r,f={type:"run",in:{sessionId:n,inputIndices:e,inputs:c,outputIndices:t,options:i}};Kt.postMessage(f,Ca(c))})}else return Oa(n,e,r,t,o,i)},M2=async n=>{if(Yn())return _o(),new Promise((e,r)=>{bo("end-profiling",[e,r]);let t={type:"end-profiling",in:n};Kt.postMessage(t)});Pa(n)}});var B2,xz,cs,F2=j(()=>{"use strict";xt();Zc();ve();wa();gc();B2=(n,e)=>{switch(n.location){case"cpu":return[n.type,n.dims,n.data,"cpu"];case"gpu-buffer":return[n.type,n.dims,{gpuBuffer:n.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[n.type,n.dims,{mlTensor:n.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${n.location} for ${e()}`)}},xz=n=>{switch(n[3]){case"cpu":return new Nt(n[0],n[2],n[1]);case"gpu-buffer":{let e=n[0];if(!Na(e))throw new Error(`not supported data type: ${e} for deserializing GPU tensor`);let{gpuBuffer:r,download:t,dispose:o}=n[2];return Nt.fromGpuBuffer(r,{dataType:e,dims:n[1],download:t,dispose:o})}case"ml-tensor":{let e=n[0];if(!La(e))throw new Error(`not supported data type: ${e} for deserializing MLTensor tensor`);let{mlTensor:r,download:t,dispose:o}=n[2];return Nt.fromMLTensor(r,{dataType:e,dims:n[1],download:t,dispose:o})}default:throw new Error(`invalid data location: ${n[3]}`)}},cs=class{async fetchModelAndCopyToWasmMemory(e){return N2(await Xo(e))}async loadModel(e,r){Lt();let t;typeof e=="string"?!1?t=await Xo(e):t=await this.fetchModelAndCopyToWasmMemory(e):t=e,[this.sessionId,this.inputNames,this.outputNames]=await L2(t,r),$t()}async dispose(){return R2(this.sessionId)}async run(e,r,t){Lt();let o=[],i=[];Object.entries(e).forEach(_=>{let x=_[0],T=_[1],I=this.inputNames.indexOf(x);if(I===-1)throw new Error(`invalid input '${x}'`);o.push(T),i.push(I)});let a=[],u=[];Object.entries(r).forEach(_=>{let x=_[0],T=_[1],I=this.outputNames.indexOf(x);if(I===-1)throw new Error(`invalid output '${x}'`);a.push(T),u.push(I)});let c=o.map((_,x)=>B2(_,()=>`input "${this.inputNames[i[x]]}"`)),f=a.map((_,x)=>_?B2(_,()=>`output "${this.outputNames[u[x]]}"`):null),m=await z2(this.sessionId,i,c,u,f,t),y={};for(let _=0;_<m.length;_++)y[this.outputNames[u[_]]]=a[_]??xz(m[_]);return $t(),y}startProfiling(){}endProfiling(){M2(this.sessionId)}}});var G2={};eo(G2,{OnnxruntimeWebAssemblyBackend:()=>ds,initializeFlags:()=>V2,wasmBackend:()=>Tz});var V2,ds,Tz,U2=j(()=>{"use strict";xt();Zc();F2();V2=()=>{if((typeof Te.wasm.initTimeout!="number"||Te.wasm.initTimeout<0)&&(Te.wasm.initTimeout=0),Te.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof Te.wasm.proxy!="boolean"&&(Te.wasm.proxy=!1),typeof Te.wasm.trace!="boolean"&&(Te.wasm.trace=!1),typeof Te.wasm.numThreads!="number"||!Number.isInteger(Te.wasm.numThreads)||Te.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Te.wasm.numThreads=1;else{let n=typeof navigator>"u"?Ls("node:os").cpus().length:navigator.hardwareConcurrency;Te.wasm.numThreads=Math.min(4,Math.ceil((n||1)/2))}},ds=class{async init(e){V2(),await D2(),await k2(e)}async createInferenceSessionHandler(e,r){let t=new cs;return await t.loadModel(e,r),Promise.resolve(t)}},Tz=new ds});xt();xt();xt();var _g="1.21.0";var XZ=Vs;{let n=(Yv(),So(Xv)).onnxjsBackend;hn("webgl",n,-10)}{let n=(U2(),So(G2)).wasmBackend;hn("webgpu",n,5),hn("webnn",n,5),hn("cpu",n,10),hn("wasm",n,10)}Object.defineProperty(Te.versions,"web",{value:_g,enumerable:!0});export{rP as InferenceSession,bi as TRACE,Lt as TRACE_FUNC_BEGIN,$t as TRACE_FUNC_END,Nt as Tensor,XZ as default,Te as env,hn as registerBackend};
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
