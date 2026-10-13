(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hh="169",Kr={ROTATE:0,DOLLY:1,PAN:2},Yr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vg=0,Ru=1,Wg=2,Kf=1,Xg=2,pi=3,Gi=0,on=1,gi=2,Oi=0,Zr=1,Ks=2,Cu=3,Pu=4,Yg=5,ir=100,qg=101,jg=102,Kg=103,Zg=104,$g=200,Jg=201,Qg=202,t0=203,Qc=204,tl=205,e0=206,n0=207,i0=208,r0=209,s0=210,a0=211,o0=212,c0=213,l0=214,el=0,nl=1,il=2,es=3,rl=4,sl=5,al=6,ol=7,Zf=0,h0=1,u0=2,Bi=0,d0=1,f0=2,p0=3,m0=4,g0=5,_0=6,v0=7,$f=300,ns=301,is=302,cl=303,ll=304,Co=306,hl=1e3,sr=1001,ul=1002,In=1003,x0=1004,ga=1005,Ln=1006,ac=1007,ar=1008,yi=1009,Jf=1010,Qf=1011,Zs=1012,uh=1013,pr=1014,vi=1015,ea=1016,dh=1017,fh=1018,rs=1020,tp=35902,ep=1021,np=1022,Hn=1023,ip=1024,rp=1025,$r=1026,ss=1027,sp=1028,ph=1029,ap=1030,mh=1031,gh=1033,Qa=33776,to=33777,eo=33778,no=33779,dl=35840,fl=35841,pl=35842,ml=35843,gl=36196,_l=37492,vl=37496,xl=37808,yl=37809,Ml=37810,Sl=37811,El=37812,bl=37813,Tl=37814,Al=37815,wl=37816,Rl=37817,Cl=37818,Pl=37819,Ll=37820,Dl=37821,io=36492,Il=36494,Ul=36495,op=36283,Nl=36284,Fl=36285,Ol=36286,y0=3200,M0=3201,cp=0,S0=1,Ni="",Kn="srgb",Xi="srgb-linear",_h="display-p3",Po="display-p3-linear",uo="linear",fe="srgb",fo="rec709",po="p3",Tr=7680,Lu=519,E0=512,b0=513,T0=514,lp=515,A0=516,w0=517,R0=518,C0=519,Bl=35044,Du="300 es",xi=2e3,mo=2001;class yr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ro=Math.PI/180,kl=180/Math.PI;function ki(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(We[e&255]+We[e>>8&255]+We[e>>16&255]+We[e>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[n&63|128]+We[n>>8&255]+"-"+We[n>>16&255]+We[n>>24&255]+We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]).toLowerCase()}function Je(e,t,n){return Math.max(t,Math.min(n,e))}function P0(e,t){return(e%t+t)%t}function oc(e,t,n){return(1-n)*e+n*t}function $n(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function re(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const L0={DEG2RAD:ro};class Tt{constructor(t=0,n=0){Tt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,n,i,r,s,a,o,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,a,o,c,l)}set(t,n,i,r,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],m=i[5],_=i[8],y=r[0],f=r[3],p=r[6],E=r[1],S=r[4],T=r[7],N=r[2],R=r[5],A=r[8];return s[0]=a*y+o*E+c*N,s[3]=a*f+o*S+c*R,s[6]=a*p+o*T+c*A,s[1]=l*y+h*E+u*N,s[4]=l*f+h*S+u*R,s[7]=l*p+h*T+u*A,s[2]=d*y+m*E+_*N,s[5]=d*f+m*S+_*R,s[8]=d*p+m*T+_*A,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return n*a*h-n*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*s,m=l*s-a*c,_=n*u+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return t[0]=u*y,t[1]=(r*l-h*i)*y,t[2]=(o*i-r*a)*y,t[3]=d*y,t[4]=(h*n-r*c)*y,t[5]=(r*s-o*n)*y,t[6]=m*y,t[7]=(i*c-l*n)*y,t[8]=(a*n-i*s)*y,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(cc.makeScale(t,n)),this}rotate(t){return this.premultiply(cc.makeRotation(-t)),this}translate(t,n){return this.premultiply(cc.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cc=new Ot;function hp(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function go(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function D0(){const e=go("canvas");return e.style.display="block",e}const Iu={};function so(e){e in Iu||(Iu[e]=!0,console.warn(e))}function I0(e,t,n){return new Promise(function(i,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function U0(e){const t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function N0(e){const t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Uu=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nu=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ls={[Xi]:{transfer:uo,primaries:fo,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e,fromReference:e=>e},[Kn]:{transfer:fe,primaries:fo,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[Po]:{transfer:uo,primaries:po,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.applyMatrix3(Nu),fromReference:e=>e.applyMatrix3(Uu)},[_h]:{transfer:fe,primaries:po,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.convertSRGBToLinear().applyMatrix3(Nu),fromReference:e=>e.applyMatrix3(Uu).convertLinearToSRGB()}},F0=new Set([Xi,Po]),te={enabled:!0,_workingColorSpace:Xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!F0.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;const i=Ls[t].toReference,r=Ls[n].fromReference;return r(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Ls[e].primaries},getTransfer:function(e){return e===Ni?uo:Ls[e].transfer},getLuminanceCoefficients:function(e,t=this._workingColorSpace){return e.fromArray(Ls[t].luminanceCoefficients)}};function Jr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function lc(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Ar;class O0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ar===void 0&&(Ar=go("canvas")),Ar.width=t.width,Ar.height=t.height;const i=Ar.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Ar}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=go("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Jr(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Jr(n[i]/255)*255):n[i]=Jr(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let B0=0;class up{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=ki(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(hc(r[a].image)):s.push(hc(r[a]))}else s=hc(r);i.url=s}return n||(t.images[this.uuid]=i),i}}function hc(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?O0.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let k0=0;class Qe extends yr{constructor(t=Qe.DEFAULT_IMAGE,n=Qe.DEFAULT_MAPPING,i=sr,r=sr,s=Ln,a=ar,o=Hn,c=yi,l=Qe.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=ki(),this.name="",this.source=new up(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$f)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hl:t.x=t.x-Math.floor(t.x);break;case sr:t.x=t.x<0?0:1;break;case ul:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hl:t.y=t.y-Math.floor(t.y);break;case sr:t.y=t.y<0?0:1;break;case ul:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=$f;Qe.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,n=0,i=0,r=1){ae.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,s;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],_=c[9],y=c[2],f=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(_+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(l+1)/2,T=(m+1)/2,N=(p+1)/2,R=(h+d)/4,A=(u+y)/4,I=(_+f)/4;return S>T&&S>N?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=R/i,s=A/i):T>N?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=R/r,s=I/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=A/s,r=I/s),this.set(i,r,s,n),this}let E=Math.sqrt((f-_)*(f-_)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(f-_)/E,this.y=(u-y)/E,this.z=(d-h)/E,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class z0 extends yr{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new ae(0,0,t,n),this.scissorTest=!1,this.viewport=new ae(0,0,t,n);const r={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Qe(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new up(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mr extends z0{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class dp extends Qe{constructor(t=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class G0 extends Qe{constructor(t=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gr{constructor(t=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=r}static slerpFlat(t,n,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3];const d=s[a+0],m=s[a+1],_=s[a+2],y=s[a+3];if(o===0){t[n+0]=c,t[n+1]=l,t[n+2]=h,t[n+3]=u;return}if(o===1){t[n+0]=d,t[n+1]=m,t[n+2]=_,t[n+3]=y;return}if(u!==y||c!==d||l!==m||h!==_){let f=1-o;const p=c*d+l*m+h*_+u*y,E=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const N=Math.sqrt(S),R=Math.atan2(N,p*E);f=Math.sin(f*R)/N,o=Math.sin(o*R)/N}const T=o*E;if(c=c*f+d*T,l=l*f+m*T,h=h*f+_*T,u=u*f+y*T,f===1-o){const N=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=N,l*=N,h*=N,u*=N}}t[n]=c,t[n+1]=l,t[n+2]=h,t[n+3]=u}static multiplyQuaternionsFlat(t,n,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],u=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return t[n]=o*_+h*u+c*m-l*d,t[n+1]=c*_+h*d+l*u-o*m,t[n+2]=l*_+h*m+o*d-c*u,t[n+3]=h*_-o*u-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),u=o(s/2),d=c(i/2),m=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*m*_,this._y=l*m*u-d*h*_,this._z=l*h*_+d*m*u,this._w=l*h*u-d*m*_;break;case"YXZ":this._x=d*h*u+l*m*_,this._y=l*m*u-d*h*_,this._z=l*h*_-d*m*u,this._w=l*h*u+d*m*_;break;case"ZXY":this._x=d*h*u-l*m*_,this._y=l*m*u+d*h*_,this._z=l*h*_+d*m*u,this._w=l*h*u-d*m*_;break;case"ZYX":this._x=d*h*u-l*m*_,this._y=l*m*u+d*h*_,this._z=l*h*_-d*m*u,this._w=l*h*u+d*m*_;break;case"YZX":this._x=d*h*u+l*m*_,this._y=l*m*u+d*h*_,this._z=l*h*_-d*m*u,this._w=l*h*u-d*m*_;break;case"XZY":this._x=d*h*u-l*m*_,this._y=l*m*u-d*h*_,this._z=l*h*_+d*m*u,this._w=l*h*u+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],l=n[2],h=n[6],u=n[10],d=i+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>u){const m=2*Math.sqrt(1+i-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>u){const m=2*Math.sqrt(1+o-i-u);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,r=t._y,s=t._z,a=t._w,o=n._x,c=n._y,l=n._z,h=n._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-n)*h)/l,d=Math.sin(n*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=r*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,n=0,i=0){C.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Fu.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Fu.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*i),h=2*(o*n-s*r),u=2*(s*i-a*n);return this.x=n+c*l+a*u-o*h,this.y=i+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,s=t.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return uc.copy(this).projectOnVector(t),this.sub(uc)}reflect(t){return this.sub(uc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const uc=new C,Fu=new gr;class na{constructor(t=new C(1/0,1/0,1/0),n=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(kn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=kn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,kn):kn.fromBufferAttribute(s,a),kn.applyMatrix4(t.matrixWorld),this.expandByPoint(kn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_a.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_a.copy(i.boundingBox)),_a.applyMatrix4(t.matrixWorld),this.union(_a)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kn),kn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ds),va.subVectors(this.max,Ds),wr.subVectors(t.a,Ds),Rr.subVectors(t.b,Ds),Cr.subVectors(t.c,Ds),Ai.subVectors(Rr,wr),wi.subVectors(Cr,Rr),Ki.subVectors(wr,Cr);let n=[0,-Ai.z,Ai.y,0,-wi.z,wi.y,0,-Ki.z,Ki.y,Ai.z,0,-Ai.x,wi.z,0,-wi.x,Ki.z,0,-Ki.x,-Ai.y,Ai.x,0,-wi.y,wi.x,0,-Ki.y,Ki.x,0];return!dc(n,wr,Rr,Cr,va)||(n=[1,0,0,0,1,0,0,0,1],!dc(n,wr,Rr,Cr,va))?!1:(xa.crossVectors(Ai,wi),n=[xa.x,xa.y,xa.z],dc(n,wr,Rr,Cr,va))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const li=[new C,new C,new C,new C,new C,new C,new C,new C],kn=new C,_a=new na,wr=new C,Rr=new C,Cr=new C,Ai=new C,wi=new C,Ki=new C,Ds=new C,va=new C,xa=new C,Zi=new C;function dc(e,t,n,i,r){for(let s=0,a=e.length-3;s<=a;s+=3){Zi.fromArray(e,s);const o=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),c=t.dot(Zi),l=n.dot(Zi),h=i.dot(Zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const H0=new na,Is=new C,fc=new C;class ia{constructor(t=new C,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):H0.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Is.subVectors(t,this.center);const n=Is.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Is,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Is.copy(t.center).add(fc)),this.expandByPoint(Is.copy(t.center).sub(fc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new C,pc=new C,ya=new C,Ri=new C,mc=new C,Ma=new C,gc=new C;class ra{constructor(t=new C,n=new C(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hi)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=hi.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(t))}distanceSqToSegment(t,n,i,r){pc.copy(t).add(n).multiplyScalar(.5),ya.copy(n).sub(t).normalize(),Ri.copy(this.origin).sub(pc);const s=t.distanceTo(n)*.5,a=-this.direction.dot(ya),o=Ri.dot(this.direction),c=-Ri.dot(ya),l=Ri.lengthSq(),h=Math.abs(1-a*a);let u,d,m,_;if(h>0)if(u=a*c-o,d=a*o-c,_=s*h,u>=0)if(d>=-_)if(d<=_){const y=1/h;u*=y,d*=y,m=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(pc).addScaledVector(ya,d),m}intersectSphere(t,n){hi.subVectors(t.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(t){return this.intersectBox(t,hi)!==null}intersectTriangle(t,n,i,r,s){mc.subVectors(n,t),Ma.subVectors(i,t),gc.crossVectors(mc,Ma);let a=this.direction.dot(gc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ri.subVectors(this.origin,t);const c=o*this.direction.dot(Ma.crossVectors(Ri,Ma));if(c<0)return null;const l=o*this.direction.dot(mc.cross(Ri));if(l<0||c+l>a)return null;const h=-o*Ri.dot(gc);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,n,i,r,s,a,o,c,l,h,u,d,m,_,y,f){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,a,o,c,l,h,u,d,m,_,y,f)}set(t,n,i,r,s,a,o,c,l,h,u,d,m,_,y,f){const p=this.elements;return p[0]=t,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=m,p[7]=_,p[11]=y,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,r=1/Pr.setFromMatrixColumn(t,0).length(),s=1/Pr.setFromMatrixColumn(t,1).length(),a=1/Pr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,m=a*u,_=o*h,y=o*u;n[0]=c*h,n[4]=-c*u,n[8]=l,n[1]=m+_*l,n[5]=d-y*l,n[9]=-o*c,n[2]=y-d*l,n[6]=_+m*l,n[10]=a*c}else if(t.order==="YXZ"){const d=c*h,m=c*u,_=l*h,y=l*u;n[0]=d+y*o,n[4]=_*o-m,n[8]=a*l,n[1]=a*u,n[5]=a*h,n[9]=-o,n[2]=m*o-_,n[6]=y+d*o,n[10]=a*c}else if(t.order==="ZXY"){const d=c*h,m=c*u,_=l*h,y=l*u;n[0]=d-y*o,n[4]=-a*u,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*h,n[9]=y-d*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(t.order==="ZYX"){const d=a*h,m=a*u,_=o*h,y=o*u;n[0]=c*h,n[4]=_*l-m,n[8]=d*l+y,n[1]=c*u,n[5]=y*l+d,n[9]=m*l-_,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(t.order==="YZX"){const d=a*c,m=a*l,_=o*c,y=o*l;n[0]=c*h,n[4]=y-d*u,n[8]=_*u+m,n[1]=u,n[5]=a*h,n[9]=-o*h,n[2]=-l*h,n[6]=m*u+_,n[10]=d-y*u}else if(t.order==="XZY"){const d=a*c,m=a*l,_=o*c,y=o*l;n[0]=c*h,n[4]=-u,n[8]=l*h,n[1]=d*u+y,n[5]=a*h,n[9]=m*u-_,n[2]=_*u-m,n[6]=o*h,n[10]=y*u+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(V0,t,W0)}lookAt(t,n,i){const r=this.elements;return dn.subVectors(t,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ci.crossVectors(i,dn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ci.crossVectors(i,dn)),Ci.normalize(),Sa.crossVectors(dn,Ci),r[0]=Ci.x,r[4]=Sa.x,r[8]=dn.x,r[1]=Ci.y,r[5]=Sa.y,r[9]=dn.y,r[2]=Ci.z,r[6]=Sa.z,r[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],m=i[13],_=i[2],y=i[6],f=i[10],p=i[14],E=i[3],S=i[7],T=i[11],N=i[15],R=r[0],A=r[4],I=r[8],j=r[12],g=r[1],M=r[5],z=r[9],k=r[13],Y=r[2],Z=r[6],H=r[10],K=r[14],G=r[3],ot=r[7],ct=r[11],_t=r[15];return s[0]=a*R+o*g+c*Y+l*G,s[4]=a*A+o*M+c*Z+l*ot,s[8]=a*I+o*z+c*H+l*ct,s[12]=a*j+o*k+c*K+l*_t,s[1]=h*R+u*g+d*Y+m*G,s[5]=h*A+u*M+d*Z+m*ot,s[9]=h*I+u*z+d*H+m*ct,s[13]=h*j+u*k+d*K+m*_t,s[2]=_*R+y*g+f*Y+p*G,s[6]=_*A+y*M+f*Z+p*ot,s[10]=_*I+y*z+f*H+p*ct,s[14]=_*j+y*k+f*K+p*_t,s[3]=E*R+S*g+T*Y+N*G,s[7]=E*A+S*M+T*Z+N*ot,s[11]=E*I+S*z+T*H+N*ct,s[15]=E*j+S*k+T*K+N*_t,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],m=t[14],_=t[3],y=t[7],f=t[11],p=t[15];return _*(+s*c*u-r*l*u-s*o*d+i*l*d+r*o*m-i*c*m)+y*(+n*c*m-n*l*d+s*a*d-r*a*m+r*l*h-s*c*h)+f*(+n*l*u-n*o*m-s*a*u+i*a*m+s*o*h-i*l*h)+p*(-r*o*h-n*c*u+n*o*d+r*a*u-i*a*d+i*c*h)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],m=t[11],_=t[12],y=t[13],f=t[14],p=t[15],E=u*f*l-y*d*l+y*c*m-o*f*m-u*c*p+o*d*p,S=_*d*l-h*f*l-_*c*m+a*f*m+h*c*p-a*d*p,T=h*y*l-_*u*l+_*o*m-a*y*m-h*o*p+a*u*p,N=_*u*c-h*y*c-_*o*d+a*y*d+h*o*f-a*u*f,R=n*E+i*S+r*T+s*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=E*A,t[1]=(y*d*s-u*f*s-y*r*m+i*f*m+u*r*p-i*d*p)*A,t[2]=(o*f*s-y*c*s+y*r*l-i*f*l-o*r*p+i*c*p)*A,t[3]=(u*c*s-o*d*s-u*r*l+i*d*l+o*r*m-i*c*m)*A,t[4]=S*A,t[5]=(h*f*s-_*d*s+_*r*m-n*f*m-h*r*p+n*d*p)*A,t[6]=(_*c*s-a*f*s-_*r*l+n*f*l+a*r*p-n*c*p)*A,t[7]=(a*d*s-h*c*s+h*r*l-n*d*l-a*r*m+n*c*m)*A,t[8]=T*A,t[9]=(_*u*s-h*y*s-_*i*m+n*y*m+h*i*p-n*u*p)*A,t[10]=(a*y*s-_*o*s+_*i*l-n*y*l-a*i*p+n*o*p)*A,t[11]=(h*o*s-a*u*s-h*i*l+n*u*l+a*i*m-n*o*m)*A,t[12]=N*A,t[13]=(h*y*r-_*u*r+_*i*d-n*y*d-h*i*f+n*u*f)*A,t[14]=(_*o*r-a*y*r-_*i*c+n*y*c+a*i*f-n*o*f)*A,t[15]=(a*u*r-h*o*r+h*i*c-n*u*c-a*i*d+n*o*d)*A,this}scale(t){const n=this.elements,i=t.x,r=t.y,s=t.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,n,r,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,h=a+a,u=o+o,d=s*l,m=s*h,_=s*u,y=a*h,f=a*u,p=o*u,E=c*l,S=c*h,T=c*u,N=i.x,R=i.y,A=i.z;return r[0]=(1-(y+p))*N,r[1]=(m+T)*N,r[2]=(_-S)*N,r[3]=0,r[4]=(m-T)*R,r[5]=(1-(d+p))*R,r[6]=(f+E)*R,r[7]=0,r[8]=(_+S)*A,r[9]=(f-E)*A,r[10]=(1-(d+y))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;let s=Pr.set(r[0],r[1],r[2]).length();const a=Pr.set(r[4],r[5],r[6]).length(),o=Pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],zn.copy(this);const l=1/s,h=1/a,u=1/o;return zn.elements[0]*=l,zn.elements[1]*=l,zn.elements[2]*=l,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,n.setFromRotationMatrix(zn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,n,i,r,s,a,o=xi){const c=this.elements,l=2*s/(n-t),h=2*s/(i-r),u=(n+t)/(n-t),d=(i+r)/(i-r);let m,_;if(o===xi)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===mo)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,r,s,a,o=xi){const c=this.elements,l=1/(n-t),h=1/(i-r),u=1/(a-s),d=(n+t)*l,m=(i+r)*h;let _,y;if(o===xi)_=(a+s)*u,y=-2*u;else if(o===mo)_=s*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=y,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const Pr=new C,zn=new le,V0=new C(0,0,0),W0=new C(1,1,1),Ci=new C,Sa=new C,dn=new C,Ou=new le,Bu=new gr;class ei{constructor(t=0,n=0,i=0,r=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Ou.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ou,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class vh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let X0=0;const ku=new C,Lr=new gr,ui=new le,Ea=new C,Us=new C,Y0=new C,q0=new gr,zu=new C(1,0,0),Gu=new C(0,1,0),Hu=new C(0,0,1),Vu={type:"added"},j0={type:"removed"},Dr={type:"childadded",child:null},_c={type:"childremoved",child:null};class He extends yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new C,n=new ei,i=new gr,r=new C(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new le},normalMatrix:{value:new Ot}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Lr.setFromAxisAngle(t,n),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(t,n){return Lr.setFromAxisAngle(t,n),this.quaternion.premultiply(Lr),this}rotateX(t){return this.rotateOnAxis(zu,t)}rotateY(t){return this.rotateOnAxis(Gu,t)}rotateZ(t){return this.rotateOnAxis(Hu,t)}translateOnAxis(t,n){return ku.copy(t).applyQuaternion(this.quaternion),this.position.add(ku.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(zu,t)}translateY(t){return this.translateOnAxis(Gu,t)}translateZ(t){return this.translateOnAxis(Hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Ea.copy(t):Ea.set(t,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Us,Ea,this.up):ui.lookAt(Ea,Us,this.up),this.quaternion.setFromRotationMatrix(ui),r&&(ui.extractRotation(r.matrixWorld),Lr.setFromRotationMatrix(ui),this.quaternion.premultiply(Lr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vu),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(j0),_c.child=t,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vu),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,Y0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,q0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(n){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}He.DEFAULT_UP=new C(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new C,di=new C,vc=new C,fi=new C,Ir=new C,Ur=new C,Wu=new C,xc=new C,yc=new C,Mc=new C,Sc=new ae,Ec=new ae,bc=new ae;class Dn{constructor(t=new C,n=new C,i=new C){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,r){r.subVectors(i,n),Gn.subVectors(t,n),r.cross(Gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,n,i,r,s){Gn.subVectors(r,n),di.subVectors(i,n),vc.subVectors(t,n);const a=Gn.dot(Gn),o=Gn.dot(di),c=Gn.dot(vc),l=di.dot(di),h=di.dot(vc),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,m=(l*c-o*h)*d,_=(a*h-o*c)*d;return s.set(1-m-_,_,m)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,n,i,r,s,a,o,c){return this.getBarycoord(t,n,i,r,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,fi.x),c.addScaledVector(a,fi.y),c.addScaledVector(o,fi.z),c)}static getInterpolatedAttribute(t,n,i,r,s,a){return Sc.setScalar(0),Ec.setScalar(0),bc.setScalar(0),Sc.fromBufferAttribute(t,n),Ec.fromBufferAttribute(t,i),bc.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Sc,s.x),a.addScaledVector(Ec,s.y),a.addScaledVector(bc,s.z),a}static isFrontFacing(t,n,i,r){return Gn.subVectors(i,n),di.subVectors(t,n),Gn.cross(di).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,i,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Gn.cross(di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Dn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,r,s){return Dn.getInterpolation(t,this.a,this.b,this.c,n,i,r,s)}containsPoint(t){return Dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,r=this.b,s=this.c;let a,o;Ir.subVectors(r,i),Ur.subVectors(s,i),xc.subVectors(t,i);const c=Ir.dot(xc),l=Ur.dot(xc);if(c<=0&&l<=0)return n.copy(i);yc.subVectors(t,r);const h=Ir.dot(yc),u=Ur.dot(yc);if(h>=0&&u<=h)return n.copy(r);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(Ir,a);Mc.subVectors(t,s);const m=Ir.dot(Mc),_=Ur.dot(Mc);if(_>=0&&m<=_)return n.copy(s);const y=m*l-c*_;if(y<=0&&l>=0&&_<=0)return o=l/(l-_),n.copy(i).addScaledVector(Ur,o);const f=h*_-m*u;if(f<=0&&u-h>=0&&m-_>=0)return Wu.subVectors(s,r),o=(u-h)/(u-h+(m-_)),n.copy(r).addScaledVector(Wu,o);const p=1/(f+y+d);return a=y*p,o=d*p,n.copy(i).addScaledVector(Ir,a).addScaledVector(Ur,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},ba={h:0,s:0,l:0};function Tc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Bt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,n),this}setRGB(t,n,i,r=te.workingColorSpace){return this.r=t,this.g=n,this.b=i,te.toWorkingColorSpace(this,r),this}setHSL(t,n,i,r=te.workingColorSpace){if(t=P0(t,1),n=Je(n,0,1),i=Je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Tc(a,s,t+1/3),this.g=Tc(a,s,t),this.b=Tc(a,s,t-1/3)}return te.toWorkingColorSpace(this,r),this}setStyle(t,n=Kn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Kn){const i=fp[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jr(t.r),this.g=Jr(t.g),this.b=Jr(t.b),this}copyLinearToSRGB(t){return this.r=lc(t.r),this.g=lc(t.g),this.b=lc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Kn){return te.fromWorkingColorSpace(Xe.copy(this),t),Math.round(Je(Xe.r*255,0,255))*65536+Math.round(Je(Xe.g*255,0,255))*256+Math.round(Je(Xe.b*255,0,255))}getHexString(t=Kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=te.workingColorSpace){te.fromWorkingColorSpace(Xe.copy(this),n);const i=Xe.r,r=Xe.g,s=Xe.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-i)/u+2;break;case s:c=(i-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,n=te.workingColorSpace){return te.fromWorkingColorSpace(Xe.copy(this),n),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=Kn){te.fromWorkingColorSpace(Xe.copy(this),t);const n=Xe.r,i=Xe.g,r=Xe.b;return t!==Kn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,n,i){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+n,Pi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Pi),t.getHSL(ba);const i=oc(Pi.h,ba.h,n),r=oc(Pi.s,ba.s,n),s=oc(Pi.l,ba.l,n);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new Bt;Bt.NAMES=fp;let K0=0;class Yi extends yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Zr,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qc,this.blendDst=tl,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qc&&(i.blendSrc=this.blendSrc),this.blendDst!==tl&&(i.blendDst=this.blendDst),this.blendEquation!==ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pp extends Yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Zf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new C,Ta=new Tt;class tn{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Bl,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=n.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ta.fromBufferAttribute(this,n),Ta.applyMatrix3(t),this.setXY(n,Ta.x,Ta.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)we.fromBufferAttribute(this,n),we.applyMatrix3(t),this.setXYZ(n,we.x,we.y,we.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)we.fromBufferAttribute(this,n),we.applyMatrix4(t),this.setXYZ(n,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)we.fromBufferAttribute(this,n),we.applyNormalMatrix(t),this.setXYZ(n,we.x,we.y,we.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)we.fromBufferAttribute(this,n),we.transformDirection(t),this.setXYZ(n,we.x,we.y,we.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=$n(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=re(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=$n(n,this.array)),n}setX(t,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=$n(n,this.array)),n}setY(t,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=$n(n,this.array)),n}setZ(t,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=$n(n,this.array)),n}setW(t,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=re(n,this.array),i=re(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,r){return t*=this.itemSize,this.normalized&&(n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,n,i,r,s){return t*=this.itemSize,this.normalized&&(n=re(n,this.array),i=re(i,this.array),r=re(r,this.array),s=re(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bl&&(t.usage=this.usage),t}}class mp extends tn{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class gp extends tn{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class Nn extends tn{constructor(t,n,i){super(new Float32Array(t),n,i)}}let Z0=0;const wn=new le,Ac=new He,Nr=new C,fn=new na,Ns=new na,Be=new C;class En extends yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hp(t)?gp:mp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ot().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,n,i){return wn.makeTranslation(t,n,i),this.applyMatrix4(wn),this}scale(t,n,i){return wn.makeScale(t,n,i),this.applyMatrix4(wn),this}lookAt(t){return Ac.lookAt(t),Ac.updateMatrix(),this.applyMatrix4(Ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(t){const n=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new na);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ia);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(fn.min,Ns.min),fn.expandByPoint(Be),Be.addVectors(fn.max,Ns.max),fn.expandByPoint(Be)):(fn.expandByPoint(Ns.min),fn.expandByPoint(Ns.max))}fn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Be.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Be));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Be.fromBufferAttribute(o,l),c&&(Nr.fromBufferAttribute(t,l),Be.add(Nr)),r=Math.max(r,i.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<i.count;I++)o[I]=new C,c[I]=new C;const l=new C,h=new C,u=new C,d=new Tt,m=new Tt,_=new Tt,y=new C,f=new C;function p(I,j,g){l.fromBufferAttribute(i,I),h.fromBufferAttribute(i,j),u.fromBufferAttribute(i,g),d.fromBufferAttribute(s,I),m.fromBufferAttribute(s,j),_.fromBufferAttribute(s,g),h.sub(l),u.sub(l),m.sub(d),_.sub(d);const M=1/(m.x*_.y-_.x*m.y);isFinite(M)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(M),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(M),o[I].add(y),o[j].add(y),o[g].add(y),c[I].add(f),c[j].add(f),c[g].add(f))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let I=0,j=E.length;I<j;++I){const g=E[I],M=g.start,z=g.count;for(let k=M,Y=M+z;k<Y;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const S=new C,T=new C,N=new C,R=new C;function A(I){N.fromBufferAttribute(r,I),R.copy(N);const j=o[I];S.copy(j),S.sub(N.multiplyScalar(N.dot(j))).normalize(),T.crossVectors(R,j);const M=T.dot(c[I])<0?-1:1;a.setXYZW(I,S.x,S.y,S.z,M)}for(let I=0,j=E.length;I<j;++I){const g=E[I],M=g.start,z=g.count;for(let k=M,Y=M+z;k<Y;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new C,s=new C,a=new C,o=new C,c=new C,l=new C,h=new C,u=new C;if(t)for(let d=0,m=t.count;d<m;d+=3){const _=t.getX(d+0),y=t.getX(d+1),f=t.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,f),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,f),o.add(h),c.add(h),l.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Be.fromBufferAttribute(t,n),Be.normalize(),t.setXYZ(n,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let m=0,_=0;for(let y=0,f=c.length;y<f;y++){o.isInterleavedBufferAttribute?m=c[y]*o.data.stride+o.offset:m=c[y]*h;for(let p=0;p<h;p++)d[_++]=l[m++]}return new tn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new En,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,i);n.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],m=t(d,i);c.push(m)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const r=t.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(n))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(n));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xu=new le,$i=new ra,Aa=new ia,Yu=new C,wa=new C,Ra=new C,Ca=new C,wc=new C,Pa=new C,qu=new C,La=new C;class Jn extends He{constructor(t=new En,n=new pp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Pa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(wc.fromBufferAttribute(u,t),a?Pa.addScaledVector(wc,h):Pa.addScaledVector(wc.sub(n),h))}n.add(Pa)}return n}raycast(t,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Aa.copy(i.boundingSphere),Aa.applyMatrix4(s),$i.copy(t.ray).recast(t.near),!(Aa.containsPoint($i.origin)===!1&&($i.intersectSphere(Aa,Yu)===null||$i.origin.distanceToSquared(Yu)>(t.far-t.near)**2))&&(Xu.copy(s).invert(),$i.copy(t.ray).applyMatrix4(Xu),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,$i)))}_computeIntersections(t,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){const f=d[_],p=a[f.materialIndex],E=Math.max(f.start,m.start),S=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let T=E,N=S;T<N;T+=3){const R=o.getX(T),A=o.getX(T+1),I=o.getX(T+2);r=Da(this,p,t,i,l,h,u,R,A,I),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=f.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let f=_,p=y;f<p;f+=3){const E=o.getX(f),S=o.getX(f+1),T=o.getX(f+2);r=Da(this,a,t,i,l,h,u,E,S,T),r&&(r.faceIndex=Math.floor(f/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){const f=d[_],p=a[f.materialIndex],E=Math.max(f.start,m.start),S=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let T=E,N=S;T<N;T+=3){const R=T,A=T+1,I=T+2;r=Da(this,p,t,i,l,h,u,R,A,I),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=f.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let f=_,p=y;f<p;f+=3){const E=f,S=f+1,T=f+2;r=Da(this,a,t,i,l,h,u,E,S,T),r&&(r.faceIndex=Math.floor(f/3),n.push(r))}}}}function $0(e,t,n,i,r,s,a,o){let c;if(t.side===on?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,t.side===Gi,o),c===null)return null;La.copy(o),La.applyMatrix4(e.matrixWorld);const l=n.ray.origin.distanceTo(La);return l<n.near||l>n.far?null:{distance:l,point:La.clone(),object:e}}function Da(e,t,n,i,r,s,a,o,c,l){e.getVertexPosition(o,wa),e.getVertexPosition(c,Ra),e.getVertexPosition(l,Ca);const h=$0(e,t,n,i,wa,Ra,Ca,qu);if(h){const u=new C;Dn.getBarycoord(qu,wa,Ra,Ca,u),r&&(h.uv=Dn.getInterpolatedAttribute(r,o,c,l,u,new Tt)),s&&(h.uv1=Dn.getInterpolatedAttribute(s,o,c,l,u,new Tt)),a&&(h.normal=Dn.getInterpolatedAttribute(a,o,c,l,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new C,materialIndex:0};Dn.getNormal(wa,Ra,Ca,d.normal),h.face=d,h.barycoord=u}return h}class sa extends En{constructor(t=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,m=0;_("z","y","x",-1,-1,i,n,t,a,s,0),_("z","y","x",1,-1,i,n,-t,a,s,1),_("x","z","y",1,1,t,i,n,r,a,2),_("x","z","y",1,-1,t,i,-n,r,a,3),_("x","y","z",1,-1,t,n,i,r,s,4),_("x","y","z",-1,-1,t,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Nn(l,3)),this.setAttribute("normal",new Nn(h,3)),this.setAttribute("uv",new Nn(u,2));function _(y,f,p,E,S,T,N,R,A,I,j){const g=T/A,M=N/I,z=T/2,k=N/2,Y=R/2,Z=A+1,H=I+1;let K=0,G=0;const ot=new C;for(let ct=0;ct<H;ct++){const _t=ct*M-k;for(let Kt=0;Kt<Z;Kt++){const ee=Kt*g-z;ot[y]=ee*E,ot[f]=_t*S,ot[p]=Y,l.push(ot.x,ot.y,ot.z),ot[y]=0,ot[f]=0,ot[p]=R>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Kt/A),u.push(1-ct/I),K+=1}}for(let ct=0;ct<I;ct++)for(let _t=0;_t<A;_t++){const Kt=d+_t+Z*ct,ee=d+_t+Z*(ct+1),V=d+(_t+1)+Z*(ct+1),J=d+(_t+1)+Z*ct;c.push(Kt,ee,J),c.push(ee,V,J),G+=6}o.addGroup(m,G,j),m+=G,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sa(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function as(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function $e(e){const t={};for(let n=0;n<e.length;n++){const i=as(e[n]);for(const r in i)t[r]=i[r]}return t}function J0(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function _p(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Q0={clone:as,merge:$e};var t_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,e_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends Yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t_,this.fragmentShader=e_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=J0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class vp extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=xi}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new C,ju=new Tt,Ku=new Tt;class _n extends vp{constructor(t=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=kl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kl*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,n){return this.getViewBounds(t,ju,Ku),n.subVectors(Ku,ju)}setViewOffset(t,n,i,r,s,a){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(ro*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fr=-90,Or=1;class n_ extends He{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(Fr,Or,t,n);r.layers=this.layers,this.add(r);const s=new _n(Fr,Or,t,n);s.layers=this.layers,this.add(s);const a=new _n(Fr,Or,t,n);a.layers=this.layers,this.add(a);const o=new _n(Fr,Or,t,n);o.layers=this.layers,this.add(o);const c=new _n(Fr,Or,t,n);c.layers=this.layers,this.add(c);const l=new _n(Fr,Or,t,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const l of n)this.remove(l);if(t===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of n)this.add(l),l.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(n,s),t.setRenderTarget(i,1,r),t.render(n,a),t.setRenderTarget(i,2,r),t.render(n,o),t.setRenderTarget(i,3,r),t.render(n,c),t.setRenderTarget(i,4,r),t.render(n,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,r),t.render(n,h),t.setRenderTarget(u,d,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class xp extends Qe{constructor(t,n,i,r,s,a,o,c,l,h){t=t!==void 0?t:[],n=n!==void 0?n:ns,super(t,n,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class i_ extends mr{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new xp(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ln}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new sa(5,5,5),s=new Hi({name:"CubemapFromEquirect",uniforms:as(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Oi});s.uniforms.tEquirect.value=n;const a=new Jn(r,s),o=n.minFilter;return n.minFilter===ar&&(n.minFilter=Ln),new n_(1,10,this).update(t,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,n,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,i,r);t.setRenderTarget(s)}}const Rc=new C,r_=new C,s_=new Ot;class mi{constructor(t=new C(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,r){return this.normal.set(t,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const r=Rc.subVectors(i,n).cross(r_.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(Rc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||s_.getNormalMatrix(t),r=this.coplanarPoint(Rc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new ia,Ia=new C;class xh{constructor(t=new mi,n=new mi,i=new mi,r=new mi,s=new mi,a=new mi){this.planes=[t,n,i,r,s,a]}set(t,n,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=xi){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],u=r[6],d=r[7],m=r[8],_=r[9],y=r[10],f=r[11],p=r[12],E=r[13],S=r[14],T=r[15];if(i[0].setComponents(c-s,d-l,f-m,T-p).normalize(),i[1].setComponents(c+s,d+l,f+m,T+p).normalize(),i[2].setComponents(c+a,d+h,f+_,T+E).normalize(),i[3].setComponents(c-a,d-h,f-_,T-E).normalize(),i[4].setComponents(c-o,d-u,f-y,T-S).normalize(),n===xi)i[5].setComponents(c+o,d+u,f+y,T+S).normalize();else if(n===mo)i[5].setComponents(o,u,y,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){const n=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ia.x=r.normal.x>0?t.max.x:t.min.x,Ia.y=r.normal.y>0?t.max.y:t.min.y,Ia.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yp(){let e=null,t=!1,n=null,i=null;function r(s,a){n(s,a),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function a_(e){const t=new WeakMap;function n(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=e.createBuffer();e.bindBuffer(c,d),e.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=e.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=e.HALF_FLOAT:m=e.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=e.SHORT;else if(l instanceof Uint32Array)m=e.UNSIGNED_INT;else if(l instanceof Int32Array)m=e.INT;else if(l instanceof Int8Array)m=e.BYTE;else if(l instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){const h=c.array,u=c.updateRanges;if(e.bindBuffer(l,o),u.length===0)e.bufferSubData(l,0,h);else{u.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<u.length;m++){const _=u[d],y=u[m];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++d,u[d]=y)}u.length=d+1;for(let m=0,_=u.length;m<_;m++){const y=u[m];e.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(e.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class Lo extends En{constructor(t=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const s=t/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,u=t/o,d=n/c,m=[],_=[],y=[],f=[];for(let p=0;p<h;p++){const E=p*d-a;for(let S=0;S<l;S++){const T=S*u-s;_.push(T,-E,0),y.push(0,0,1),f.push(S/o),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){const S=E+l*p,T=E+l*(p+1),N=E+1+l*(p+1),R=E+1+l*p;m.push(S,T,R),m.push(T,N,R)}this.setIndex(m),this.setAttribute("position",new Nn(_,3)),this.setAttribute("normal",new Nn(y,3)),this.setAttribute("uv",new Nn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lo(t.width,t.height,t.widthSegments,t.heightSegments)}}var o_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,l_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,f_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,p_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,g_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,__=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,y_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,M_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,P_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,L_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,D_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,I_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O_="gl_FragColor = linearToOutputTexel( gl_FragColor );",B_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,z_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,G_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,H_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,W_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,K_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Q_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,t1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,s1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,a1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,o1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,c1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,f1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,g1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,E1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,T1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,A1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,C1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,P1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,D1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,F1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,H1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,V1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,W1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,X1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Y1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,j1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Z1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,t2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,e2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,n2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,s2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,f2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,p2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,m2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,g2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,M2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,T2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,w2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,R2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,L2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,N2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,B2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:o_,alphahash_pars_fragment:c_,alphamap_fragment:l_,alphamap_pars_fragment:h_,alphatest_fragment:u_,alphatest_pars_fragment:d_,aomap_fragment:f_,aomap_pars_fragment:p_,batching_pars_vertex:m_,batching_vertex:g_,begin_vertex:__,beginnormal_vertex:v_,bsdfs:x_,iridescence_fragment:y_,bumpmap_pars_fragment:M_,clipping_planes_fragment:S_,clipping_planes_pars_fragment:E_,clipping_planes_pars_vertex:b_,clipping_planes_vertex:T_,color_fragment:A_,color_pars_fragment:w_,color_pars_vertex:R_,color_vertex:C_,common:P_,cube_uv_reflection_fragment:L_,defaultnormal_vertex:D_,displacementmap_pars_vertex:I_,displacementmap_vertex:U_,emissivemap_fragment:N_,emissivemap_pars_fragment:F_,colorspace_fragment:O_,colorspace_pars_fragment:B_,envmap_fragment:k_,envmap_common_pars_fragment:z_,envmap_pars_fragment:G_,envmap_pars_vertex:H_,envmap_physical_pars_fragment:Q_,envmap_vertex:V_,fog_vertex:W_,fog_pars_vertex:X_,fog_fragment:Y_,fog_pars_fragment:q_,gradientmap_pars_fragment:j_,lightmap_pars_fragment:K_,lights_lambert_fragment:Z_,lights_lambert_pars_fragment:$_,lights_pars_begin:J_,lights_toon_fragment:t1,lights_toon_pars_fragment:e1,lights_phong_fragment:n1,lights_phong_pars_fragment:i1,lights_physical_fragment:r1,lights_physical_pars_fragment:s1,lights_fragment_begin:a1,lights_fragment_maps:o1,lights_fragment_end:c1,logdepthbuf_fragment:l1,logdepthbuf_pars_fragment:h1,logdepthbuf_pars_vertex:u1,logdepthbuf_vertex:d1,map_fragment:f1,map_pars_fragment:p1,map_particle_fragment:m1,map_particle_pars_fragment:g1,metalnessmap_fragment:_1,metalnessmap_pars_fragment:v1,morphinstance_vertex:x1,morphcolor_vertex:y1,morphnormal_vertex:M1,morphtarget_pars_vertex:S1,morphtarget_vertex:E1,normal_fragment_begin:b1,normal_fragment_maps:T1,normal_pars_fragment:A1,normal_pars_vertex:w1,normal_vertex:R1,normalmap_pars_fragment:C1,clearcoat_normal_fragment_begin:P1,clearcoat_normal_fragment_maps:L1,clearcoat_pars_fragment:D1,iridescence_pars_fragment:I1,opaque_fragment:U1,packing:N1,premultiplied_alpha_fragment:F1,project_vertex:O1,dithering_fragment:B1,dithering_pars_fragment:k1,roughnessmap_fragment:z1,roughnessmap_pars_fragment:G1,shadowmap_pars_fragment:H1,shadowmap_pars_vertex:V1,shadowmap_vertex:W1,shadowmask_pars_fragment:X1,skinbase_vertex:Y1,skinning_pars_vertex:q1,skinning_vertex:j1,skinnormal_vertex:K1,specularmap_fragment:Z1,specularmap_pars_fragment:$1,tonemapping_fragment:J1,tonemapping_pars_fragment:Q1,transmission_fragment:t2,transmission_pars_fragment:e2,uv_pars_fragment:n2,uv_pars_vertex:i2,uv_vertex:r2,worldpos_vertex:s2,background_vert:a2,background_frag:o2,backgroundCube_vert:c2,backgroundCube_frag:l2,cube_vert:h2,cube_frag:u2,depth_vert:d2,depth_frag:f2,distanceRGBA_vert:p2,distanceRGBA_frag:m2,equirect_vert:g2,equirect_frag:_2,linedashed_vert:v2,linedashed_frag:x2,meshbasic_vert:y2,meshbasic_frag:M2,meshlambert_vert:S2,meshlambert_frag:E2,meshmatcap_vert:b2,meshmatcap_frag:T2,meshnormal_vert:A2,meshnormal_frag:w2,meshphong_vert:R2,meshphong_frag:C2,meshphysical_vert:P2,meshphysical_frag:L2,meshtoon_vert:D2,meshtoon_frag:I2,points_vert:U2,points_frag:N2,shadow_vert:F2,shadow_frag:O2,sprite_vert:B2,sprite_frag:k2},et={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Zn={basic:{uniforms:$e([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:$e([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:$e([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:$e([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:$e([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:$e([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:$e([et.points,et.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:$e([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:$e([et.common,et.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:$e([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:$e([et.sprite,et.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:$e([et.common,et.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:$e([et.lights,et.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Zn.physical={uniforms:$e([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Ua={r:0,b:0,g:0},Qi=new ei,z2=new le;function G2(e,t,n,i,r,s,a){const o=new Bt(0);let c=s===!0?0:1,l,h,u=null,d=0,m=null;function _(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?n:t).get(S)),S}function y(E){let S=!1;const T=_(E);T===null?p(o,c):T&&T.isColor&&(p(T,1),S=!0);const N=e.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(e.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function f(E,S){const T=_(S);T&&(T.isCubeTexture||T.mapping===Co)?(h===void 0&&(h=new Jn(new sa(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:as(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Qi.copy(S.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(z2.makeRotationFromEuler(Qi)),h.material.toneMapped=te.getTransfer(T.colorSpace)!==fe,(u!==T||d!==T.version||m!==e.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,m=e.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Jn(new Lo(2,2),new Hi({name:"BackgroundMaterial",uniforms:as(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=te.getTransfer(T.colorSpace)!==fe,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||m!==e.toneMapping)&&(l.material.needsUpdate=!0,u=T,d=T.version,m=e.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,S){E.getRGB(Ua,_p(e)),i.buffers.color.setClear(Ua.r,Ua.g,Ua.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),c=S,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(o,c)},render:y,addToRenderList:f}}function H2(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(g,M,z,k,Y){let Z=!1;const H=u(k,z,M);s!==H&&(s=H,l(s.object)),Z=m(g,k,z,Y),Z&&_(g,k,z,Y),Y!==null&&t.update(Y,e.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,T(g,M,z,k),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return e.createVertexArray()}function l(g){return e.bindVertexArray(g)}function h(g){return e.deleteVertexArray(g)}function u(g,M,z){const k=z.wireframe===!0;let Y=i[g.id];Y===void 0&&(Y={},i[g.id]=Y);let Z=Y[M.id];Z===void 0&&(Z={},Y[M.id]=Z);let H=Z[k];return H===void 0&&(H=d(c()),Z[k]=H),H}function d(g){const M=[],z=[],k=[];for(let Y=0;Y<n;Y++)M[Y]=0,z[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:z,attributeDivisors:k,object:g,attributes:{},index:null}}function m(g,M,z,k){const Y=s.attributes,Z=M.attributes;let H=0;const K=z.getAttributes();for(const G in K)if(K[G].location>=0){const ct=Y[G];let _t=Z[G];if(_t===void 0&&(G==="instanceMatrix"&&g.instanceMatrix&&(_t=g.instanceMatrix),G==="instanceColor"&&g.instanceColor&&(_t=g.instanceColor)),ct===void 0||ct.attribute!==_t||_t&&ct.data!==_t.data)return!0;H++}return s.attributesNum!==H||s.index!==k}function _(g,M,z,k){const Y={},Z=M.attributes;let H=0;const K=z.getAttributes();for(const G in K)if(K[G].location>=0){let ct=Z[G];ct===void 0&&(G==="instanceMatrix"&&g.instanceMatrix&&(ct=g.instanceMatrix),G==="instanceColor"&&g.instanceColor&&(ct=g.instanceColor));const _t={};_t.attribute=ct,ct&&ct.data&&(_t.data=ct.data),Y[G]=_t,H++}s.attributes=Y,s.attributesNum=H,s.index=k}function y(){const g=s.newAttributes;for(let M=0,z=g.length;M<z;M++)g[M]=0}function f(g){p(g,0)}function p(g,M){const z=s.newAttributes,k=s.enabledAttributes,Y=s.attributeDivisors;z[g]=1,k[g]===0&&(e.enableVertexAttribArray(g),k[g]=1),Y[g]!==M&&(e.vertexAttribDivisor(g,M),Y[g]=M)}function E(){const g=s.newAttributes,M=s.enabledAttributes;for(let z=0,k=M.length;z<k;z++)M[z]!==g[z]&&(e.disableVertexAttribArray(z),M[z]=0)}function S(g,M,z,k,Y,Z,H){H===!0?e.vertexAttribIPointer(g,M,z,Y,Z):e.vertexAttribPointer(g,M,z,k,Y,Z)}function T(g,M,z,k){y();const Y=k.attributes,Z=z.getAttributes(),H=M.defaultAttributeValues;for(const K in Z){const G=Z[K];if(G.location>=0){let ot=Y[K];if(ot===void 0&&(K==="instanceMatrix"&&g.instanceMatrix&&(ot=g.instanceMatrix),K==="instanceColor"&&g.instanceColor&&(ot=g.instanceColor)),ot!==void 0){const ct=ot.normalized,_t=ot.itemSize,Kt=t.get(ot);if(Kt===void 0)continue;const ee=Kt.buffer,V=Kt.type,J=Kt.bytesPerElement,mt=V===e.INT||V===e.UNSIGNED_INT||ot.gpuType===uh;if(ot.isInterleavedBufferAttribute){const lt=ot.data,Ut=lt.stride,Rt=ot.offset;if(lt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<G.locationSize;Ht++)p(G.location+Ht,lt.meshPerAttribute);g.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ht=0;Ht<G.locationSize;Ht++)f(G.location+Ht);e.bindBuffer(e.ARRAY_BUFFER,ee);for(let Ht=0;Ht<G.locationSize;Ht++)S(G.location+Ht,_t/G.locationSize,V,ct,Ut*J,(Rt+_t/G.locationSize*Ht)*J,mt)}else{if(ot.isInstancedBufferAttribute){for(let lt=0;lt<G.locationSize;lt++)p(G.location+lt,ot.meshPerAttribute);g.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let lt=0;lt<G.locationSize;lt++)f(G.location+lt);e.bindBuffer(e.ARRAY_BUFFER,ee);for(let lt=0;lt<G.locationSize;lt++)S(G.location+lt,_t/G.locationSize,V,ct,_t*J,_t/G.locationSize*lt*J,mt)}}else if(H!==void 0){const ct=H[K];if(ct!==void 0)switch(ct.length){case 2:e.vertexAttrib2fv(G.location,ct);break;case 3:e.vertexAttrib3fv(G.location,ct);break;case 4:e.vertexAttrib4fv(G.location,ct);break;default:e.vertexAttrib1fv(G.location,ct)}}}}E()}function N(){I();for(const g in i){const M=i[g];for(const z in M){const k=M[z];for(const Y in k)h(k[Y].object),delete k[Y];delete M[z]}delete i[g]}}function R(g){if(i[g.id]===void 0)return;const M=i[g.id];for(const z in M){const k=M[z];for(const Y in k)h(k[Y].object),delete k[Y];delete M[z]}delete i[g.id]}function A(g){for(const M in i){const z=i[M];if(z[g.id]===void 0)continue;const k=z[g.id];for(const Y in k)h(k[Y].object),delete k[Y];delete z[g.id]}}function I(){j(),a=!0,s!==r&&(s=r,l(s.object))}function j(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:j,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:f,disableUnusedAttributes:E}}function V2(e,t,n){let i;function r(l){i=l}function s(l,h){e.drawArrays(i,l,h),n.update(h,i,1)}function a(l,h,u){u!==0&&(e.drawArraysInstanced(i,l,h,u),n.update(h,i,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];n.update(m,i,1)}function c(l,h,u,d){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)a(l[_],h[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let _=0;for(let y=0;y<u;y++)_+=h[y];for(let y=0;y<d.length;y++)n.update(_,i,d[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function W2(e,t,n,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Hn&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const I=A===ea&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==yi&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==vi&&!I)}function c(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),f=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),E=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),T=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),N=_>0,R=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:E,maxVaryings:S,maxFragmentUniforms:T,vertexTextures:N,maxSamples:R}}function X2(e){const t=this;let n=null,i=0,r=!1,s=!1;const a=new mi,o=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||i!==0||r;return r=d,i=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){n=h(u,d,0)},this.setState=function(u,d,m){const _=u.clippingPlanes,y=u.clipIntersection,f=u.clipShadows,p=e.get(u);if(!r||_===null||_.length===0||s&&!f)s?h(null):l();else{const E=s?0:i,S=E*4;let T=p.clippingState||null;c.value=T,T=h(_,d,S,m);for(let N=0;N!==S;++N)T[N]=n[N];p.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,m,_){const y=u!==null?u.length:0;let f=null;if(y!==0){if(f=c.value,_!==!0||f===null){const p=m+y*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(f===null||f.length<p)&&(f=new Float32Array(p));for(let S=0,T=m;S!==y;++S,T+=4)a.copy(u[S]).applyMatrix4(E,o),a.normal.toArray(f,T),f[T+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,f}}function Y2(e){let t=new WeakMap;function n(a,o){return o===cl?a.mapping=ns:o===ll&&(a.mapping=is),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===cl||o===ll)if(t.has(a)){const c=t.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new i_(c.height);return l.fromEquirectangularTexture(e,a),t.set(a,l),a.addEventListener("dispose",r),n(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class q2 extends vp{constructor(t=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const qr=4,Zu=[.125,.215,.35,.446,.526,.582],rr=20,Cc=new q2,$u=new Bt;let Pc=null,Lc=0,Dc=0,Ic=!1;const nr=(1+Math.sqrt(5))/2,Br=1/nr,Ju=[new C(-nr,Br,0),new C(nr,Br,0),new C(-Br,0,nr),new C(Br,0,nr),new C(0,nr,-Br),new C(0,nr,Br),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Qu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,r=100){Pc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Pc,Lc,Dc),this._renderer.xr.enabled=Ic,t.scissorTest=!1,Na(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ns||t.mapping===is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:ea,format:Hn,colorSpace:Xi,depthBuffer:!1},r=td(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=td(t,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=j2(s)),this._blurMaterial=K2(s,t,n)}return r}_compileMaterial(t){const n=new Jn(this._lodPlanes[0],t);this._renderer.compile(n,Cc)}_sceneToCubeUV(t,n,i,r){const o=new _n(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor($u),h.toneMapping=Bi,h.autoClear=!1;const m=new pp({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),_=new Jn(new sa,m);let y=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,y=!0):(m.color.copy($u),y=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):E===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const S=this._cubeSize;Na(r,E*S,p>2?S:0,S,S),h.setRenderTarget(r),y&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,n){const i=this._renderer,r=t.mapping===ns||t.mapping===is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ed());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Jn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;Na(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Cc)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ju[(r-s-1)%Ju.length];this._blur(t,s-1,s,a,o)}n.autoClear=i}_blur(t,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,n,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,n,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Jn(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*rr-1),y=s/_,f=isFinite(s)?1+Math.floor(h*y):rr;f>rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${rr}`);const p=[];let E=0;for(let A=0;A<rr;++A){const I=A/y,j=Math.exp(-I*I/2);p.push(j),A===0?E+=j:A<f&&(E+=2*j)}for(let A=0;A<p.length;A++)p[A]=p[A]/E;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-i;const T=this._sizeLods[r],N=3*T*(r>S-qr?r-S+qr:0),R=4*(this._cubeSize-T);Na(n,N,R,3*T,2*T),c.setRenderTarget(n),c.render(u,Cc)}}function j2(e){const t=[],n=[],i=[];let r=e;const s=e-qr+1+Zu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let c=1/o;a>e-qr?c=Zu[a-e+qr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,y=3,f=2,p=1,E=new Float32Array(y*_*m),S=new Float32Array(f*_*m),T=new Float32Array(p*_*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,I=R>2?0:-1,j=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];E.set(j,y*_*R),S.set(d,f*_*R);const g=[R,R,R,R,R,R];T.set(g,p*_*R)}const N=new En;N.setAttribute("position",new tn(E,y)),N.setAttribute("uv",new tn(S,f)),N.setAttribute("faceIndex",new tn(T,p)),t.push(N),r>qr&&r--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function td(e,t,n){const i=new mr(e,t,n);return i.texture.mapping=Co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Na(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function K2(e,t,n){const i=new Float32Array(rr),r=new C(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function ed(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function nd(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function yh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Z2(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===cl||c===ll,h=c===ns||c===is;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new Qu(e)),u=l?n.fromEquirectangular(o,u):n.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return l&&m&&m.height>0||h&&m&&r(m)?(n===null&&(n=new Qu(e)),u=l?n.fromEquirectangular(o):n.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function $2(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&so("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function J2(e,t,n,i){const r={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const y=d.morphAttributes[_];for(let f=0,p=y.length;f<p;f++)t.remove(y[f])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function c(u){const d=u.attributes;for(const _ in d)t.update(d[_],e.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const y=m[_];for(let f=0,p=y.length;f<p;f++)t.update(y[f],e.ARRAY_BUFFER)}}function l(u){const d=[],m=u.index,_=u.attributes.position;let y=0;if(m!==null){const E=m.array;y=m.version;for(let S=0,T=E.length;S<T;S+=3){const N=E[S+0],R=E[S+1],A=E[S+2];d.push(N,R,R,A,A,N)}}else if(_!==void 0){const E=_.array;y=_.version;for(let S=0,T=E.length/3-1;S<T;S+=3){const N=S+0,R=S+1,A=S+2;d.push(N,R,R,A,A,N)}}else return;const f=new(hp(d)?gp:mp)(d,1);f.version=y;const p=s.get(u);p&&t.remove(p),s.set(u,f)}function h(u){const d=s.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Q2(e,t,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,m){e.drawElements(i,m,s,d*a),n.update(m,i,1)}function l(d,m,_){_!==0&&(e.drawElementsInstanced(i,m,s,d*a,_),n.update(m,i,_))}function h(d,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,_);let f=0;for(let p=0;p<_;p++)f+=m[p];n.update(f,i,1)}function u(d,m,_,y){if(_===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d.length;p++)l(d[p]/a,m[p],y[p]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,y,0,_);let p=0;for(let E=0;E<_;E++)p+=m[E];for(let E=0;E<y.length;E++)n.update(p,i,y[E])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function tv(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(s/3);break;case e.LINES:n.lines+=o*(s/2);break;case e.LINE_STRIP:n.lines+=o*(s-1);break;case e.LINE_LOOP:n.lines+=o*s;break;case e.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ev(e,t,n){const i=new WeakMap,r=new ae;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let g=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",g)};var m=g;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let T=0;_===!0&&(T=1),y===!0&&(T=2),f===!0&&(T=3);let N=o.attributes.position.count*T,R=1;N>t.maxTextureSize&&(R=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const A=new Float32Array(N*R*4*u),I=new dp(A,N,R,u);I.type=vi,I.needsUpdate=!0;const j=T*4;for(let M=0;M<u;M++){const z=p[M],k=E[M],Y=S[M],Z=N*R*4*M;for(let H=0;H<z.count;H++){const K=H*j;_===!0&&(r.fromBufferAttribute(z,H),A[Z+K+0]=r.x,A[Z+K+1]=r.y,A[Z+K+2]=r.z,A[Z+K+3]=0),y===!0&&(r.fromBufferAttribute(k,H),A[Z+K+4]=r.x,A[Z+K+5]=r.y,A[Z+K+6]=r.z,A[Z+K+7]=0),f===!0&&(r.fromBufferAttribute(Y,H),A[Z+K+8]=r.x,A[Z+K+9]=r.y,A[Z+K+10]=r.z,A[Z+K+11]=Y.itemSize===4?r.w:1)}}d={count:u,texture:I,size:new Tt(N,R)},i.set(o,d),o.addEventListener("dispose",g)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let _=0;for(let f=0;f<l.length;f++)_+=l[f];const y=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(e,"morphTargetBaseInfluence",y),c.getUniforms().setValue(e,"morphTargetInfluences",l)}c.getUniforms().setValue(e,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:s}}function nv(e,t,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return u}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:a}}class Mp extends Qe{constructor(t,n,i,r,s,a,o,c,l,h=$r){if(h!==$r&&h!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===$r&&(i=pr),i===void 0&&h===ss&&(i=rs),super(null,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=o!==void 0?o:In,this.minFilter=c!==void 0?c:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Sp=new Qe,id=new Mp(1,1),Ep=new dp,bp=new G0,Tp=new xp,rd=[],sd=[],ad=new Float32Array(16),od=new Float32Array(9),cd=new Float32Array(4);function vs(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let s=rd[r];if(s===void 0&&(s=new Float32Array(r),rd[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(s,o)}return s}function Ne(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Fe(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Do(e,t){let n=sd[t];n===void 0&&(n=new Int32Array(t),sd[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function iv(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function rv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ne(n,t))return;e.uniform2fv(this.addr,t),Fe(n,t)}}function sv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ne(n,t))return;e.uniform3fv(this.addr,t),Fe(n,t)}}function av(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ne(n,t))return;e.uniform4fv(this.addr,t),Fe(n,t)}}function ov(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ne(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Fe(n,t)}else{if(Ne(n,i))return;cd.set(i),e.uniformMatrix2fv(this.addr,!1,cd),Fe(n,i)}}function cv(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ne(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Fe(n,t)}else{if(Ne(n,i))return;od.set(i),e.uniformMatrix3fv(this.addr,!1,od),Fe(n,i)}}function lv(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Ne(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Fe(n,t)}else{if(Ne(n,i))return;ad.set(i),e.uniformMatrix4fv(this.addr,!1,ad),Fe(n,i)}}function hv(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function uv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ne(n,t))return;e.uniform2iv(this.addr,t),Fe(n,t)}}function dv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ne(n,t))return;e.uniform3iv(this.addr,t),Fe(n,t)}}function fv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ne(n,t))return;e.uniform4iv(this.addr,t),Fe(n,t)}}function pv(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function mv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ne(n,t))return;e.uniform2uiv(this.addr,t),Fe(n,t)}}function gv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ne(n,t))return;e.uniform3uiv(this.addr,t),Fe(n,t)}}function _v(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ne(n,t))return;e.uniform4uiv(this.addr,t),Fe(n,t)}}function vv(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let s;this.type===e.SAMPLER_2D_SHADOW?(id.compareFunction=lp,s=id):s=Sp,n.setTexture2D(t||s,r)}function xv(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||bp,r)}function yv(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||Tp,r)}function Mv(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||Ep,r)}function Sv(e){switch(e){case 5126:return iv;case 35664:return rv;case 35665:return sv;case 35666:return av;case 35674:return ov;case 35675:return cv;case 35676:return lv;case 5124:case 35670:return hv;case 35667:case 35671:return uv;case 35668:case 35672:return dv;case 35669:case 35673:return fv;case 5125:return pv;case 36294:return mv;case 36295:return gv;case 36296:return _v;case 35678:case 36198:case 36298:case 36306:case 35682:return vv;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return Mv}}function Ev(e,t){e.uniform1fv(this.addr,t)}function bv(e,t){const n=vs(t,this.size,2);e.uniform2fv(this.addr,n)}function Tv(e,t){const n=vs(t,this.size,3);e.uniform3fv(this.addr,n)}function Av(e,t){const n=vs(t,this.size,4);e.uniform4fv(this.addr,n)}function wv(e,t){const n=vs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Rv(e,t){const n=vs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Cv(e,t){const n=vs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Pv(e,t){e.uniform1iv(this.addr,t)}function Lv(e,t){e.uniform2iv(this.addr,t)}function Dv(e,t){e.uniform3iv(this.addr,t)}function Iv(e,t){e.uniform4iv(this.addr,t)}function Uv(e,t){e.uniform1uiv(this.addr,t)}function Nv(e,t){e.uniform2uiv(this.addr,t)}function Fv(e,t){e.uniform3uiv(this.addr,t)}function Ov(e,t){e.uniform4uiv(this.addr,t)}function Bv(e,t,n){const i=this.cache,r=t.length,s=Do(n,r);Ne(i,s)||(e.uniform1iv(this.addr,s),Fe(i,s));for(let a=0;a!==r;++a)n.setTexture2D(t[a]||Sp,s[a])}function kv(e,t,n){const i=this.cache,r=t.length,s=Do(n,r);Ne(i,s)||(e.uniform1iv(this.addr,s),Fe(i,s));for(let a=0;a!==r;++a)n.setTexture3D(t[a]||bp,s[a])}function zv(e,t,n){const i=this.cache,r=t.length,s=Do(n,r);Ne(i,s)||(e.uniform1iv(this.addr,s),Fe(i,s));for(let a=0;a!==r;++a)n.setTextureCube(t[a]||Tp,s[a])}function Gv(e,t,n){const i=this.cache,r=t.length,s=Do(n,r);Ne(i,s)||(e.uniform1iv(this.addr,s),Fe(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(t[a]||Ep,s[a])}function Hv(e){switch(e){case 5126:return Ev;case 35664:return bv;case 35665:return Tv;case 35666:return Av;case 35674:return wv;case 35675:return Rv;case 35676:return Cv;case 5124:case 35670:return Pv;case 35667:case 35671:return Lv;case 35668:case 35672:return Dv;case 35669:case 35673:return Iv;case 5125:return Uv;case 36294:return Nv;case 36295:return Fv;case 36296:return Ov;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return Gv}}class Vv{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Sv(n.type)}}class Wv{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Hv(n.type)}}class Xv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,n[o.id],i)}}}const Uc=/(\w+)(\])?(\[|\.)?/g;function ld(e,t){e.seq.push(t),e.map[t.id]=t}function Yv(e,t,n){const i=e.name,r=i.length;for(Uc.lastIndex=0;;){const s=Uc.exec(i),a=Uc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){ld(n,l===void 0?new Vv(o,e,t):new Wv(o,e,t));break}else{let u=n.map[o];u===void 0&&(u=new Xv(o),ld(n,u)),n=u}}}class ao{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(n,r),a=t.getUniformLocation(n,s.name);Yv(s,a,this)}}setValue(t,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(t,i,r)}setOptional(t,n,i){const r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,n){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in n&&i.push(a)}return i}}function hd(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const qv=37297;let jv=0;function Kv(e,t){const n=e.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Zv(e){const t=te.getPrimaries(te.workingColorSpace),n=te.getPrimaries(e);let i;switch(t===n?i="":t===po&&n===fo?i="LinearDisplayP3ToLinearSRGB":t===fo&&n===po&&(i="LinearSRGBToLinearDisplayP3"),e){case Xi:case Po:return[i,"LinearTransferOETF"];case Kn:case _h:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function ud(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=e.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Kv(e.getShaderSource(t),a)}else return r}function $v(e,t){const n=Zv(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Jv(e,t){let n;switch(t){case d0:n="Linear";break;case f0:n="Reinhard";break;case p0:n="Cineon";break;case m0:n="ACESFilmic";break;case _0:n="AgX";break;case v0:n="Neutral";break;case g0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Fa=new C;function Qv(){te.getLuminanceCoefficients(Fa);const e=Fa.x.toFixed(4),t=Fa.y.toFixed(4),n=Fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tx(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function ex(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function nx(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=e.getActiveAttrib(t,r),a=s.name;let o=1;s.type===e.FLOAT_MAT2&&(o=2),s.type===e.FLOAT_MAT3&&(o=3),s.type===e.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Hs(e){return e!==""}function dd(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fd(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(e){return e.replace(ix,sx)}const rx=new Map;function sx(e,t){let n=Ft[t];if(n===void 0){const i=rx.get(t);if(i!==void 0)n=Ft[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return zl(n)}const ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pd(e){return e.replace(ax,ox)}function ox(e,t,n,i){let r="";for(let s=parseInt(t);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function md(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cx(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Kf?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Xg?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===pi&&(t="SHADOWMAP_TYPE_VSM"),t}function lx(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case ns:case is:t="ENVMAP_TYPE_CUBE";break;case Co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hx(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case is:t="ENVMAP_MODE_REFRACTION";break}return t}function ux(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Zf:t="ENVMAP_BLENDING_MULTIPLY";break;case h0:t="ENVMAP_BLENDING_MIX";break;case u0:t="ENVMAP_BLENDING_ADD";break}return t}function dx(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function fx(e,t,n,i){const r=e.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=cx(n),l=lx(n),h=hx(n),u=ux(n),d=dx(n),m=tx(n),_=ex(s),y=r.createProgram();let f,p,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Hs).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Hs).join(`
`),p.length>0&&(p+=`
`)):(f=[md(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),p=[md(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Bi?"#define TONE_MAPPING":"",n.toneMapping!==Bi?Ft.tonemapping_pars_fragment:"",n.toneMapping!==Bi?Jv("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,$v("linearToOutputTexel",n.outputColorSpace),Qv(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Hs).join(`
`)),a=zl(a),a=dd(a,n),a=fd(a,n),o=zl(o),o=dd(o,n),o=fd(o,n),a=pd(a),o=pd(o),n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",n.glslVersion===Du?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=E+f+a,T=E+p+o,N=hd(r,r.VERTEX_SHADER,S),R=hd(r,r.FRAGMENT_SHADER,T);r.attachShader(y,N),r.attachShader(y,R),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(M){if(e.debug.checkShaderErrors){const z=r.getProgramInfoLog(y).trim(),k=r.getShaderInfoLog(N).trim(),Y=r.getShaderInfoLog(R).trim();let Z=!0,H=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Z=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,y,N,R);else{const K=ud(r,N,"vertex"),G=ud(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+z+`
`+K+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||Y==="")&&(H=!1);H&&(M.diagnostics={runnable:Z,programLog:z,vertexShader:{log:k,prefix:f},fragmentShader:{log:Y,prefix:p}})}r.deleteShader(N),r.deleteShader(R),I=new ao(r,y),j=nx(r,y)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let j;this.getAttributes=function(){return j===void 0&&A(this),j};let g=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(y,qv)),g},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jv++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=N,this.fragmentShader=R,this}let px=0;class mx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new gx(t),n.set(t,i)),i}}class gx{constructor(t){this.id=px++,this.code=t,this.usedTimes=0}}function _x(e,t,n,i,r,s,a){const o=new vh,c=new mx,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,m=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return l.add(g),g===0?"uv":`uv${g}`}function p(g,M,z,k,Y){const Z=k.fog,H=Y.geometry,K=g.isMeshStandardMaterial?k.environment:null,G=(g.isMeshStandardMaterial?n:t).get(g.envMap||K),ot=G&&G.mapping===Co?G.image.height:null,ct=y[g.type];g.precision!==null&&(_=r.getMaxPrecision(g.precision),_!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",_,"instead."));const _t=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Kt=_t!==void 0?_t.length:0;let ee=0;H.morphAttributes.position!==void 0&&(ee=1),H.morphAttributes.normal!==void 0&&(ee=2),H.morphAttributes.color!==void 0&&(ee=3);let V,J,mt,lt;if(ct){const nn=Zn[ct];V=nn.vertexShader,J=nn.fragmentShader}else V=g.vertexShader,J=g.fragmentShader,c.update(g),mt=c.getVertexShaderID(g),lt=c.getFragmentShaderID(g);const Ut=e.getRenderTarget(),Rt=Y.isInstancedMesh===!0,Ht=Y.isBatchedMesh===!0,ie=!!g.map,Vt=!!g.matcap,w=!!G,ln=!!g.aoMap,kt=!!g.lightMap,Yt=!!g.bumpMap,Pt=!!g.normalMap,ue=!!g.displacementMap,It=!!g.emissiveMap,b=!!g.metalnessMap,v=!!g.roughnessMap,U=g.anisotropy>0,X=g.clearcoat>0,$=g.dispersion>0,W=g.iridescence>0,Mt=g.sheen>0,nt=g.transmission>0,ht=U&&!!g.anisotropyMap,qt=X&&!!g.clearcoatMap,Q=X&&!!g.clearcoatNormalMap,dt=X&&!!g.clearcoatRoughnessMap,Lt=W&&!!g.iridescenceMap,Dt=W&&!!g.iridescenceThicknessMap,ft=Mt&&!!g.sheenColorMap,zt=Mt&&!!g.sheenRoughnessMap,Nt=!!g.specularMap,he=!!g.specularColorMap,P=!!g.specularIntensityMap,st=nt&&!!g.transmissionMap,B=nt&&!!g.thicknessMap,q=!!g.gradientMap,it=!!g.alphaMap,at=g.alphaTest>0,Wt=!!g.alphaHash,Ae=!!g.extensions;let en=Bi;g.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(en=e.toneMapping);const Zt={shaderID:ct,shaderType:g.type,shaderName:g.name,vertexShader:V,fragmentShader:J,defines:g.defines,customVertexShaderID:mt,customFragmentShaderID:lt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:_,batching:Ht,batchingColor:Ht&&Y._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&Y.instanceColor!==null,instancingMorph:Rt&&Y.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ut===null?e.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:Xi,alphaToCoverage:!!g.alphaToCoverage,map:ie,matcap:Vt,envMap:w,envMapMode:w&&G.mapping,envMapCubeUVHeight:ot,aoMap:ln,lightMap:kt,bumpMap:Yt,normalMap:Pt,displacementMap:m&&ue,emissiveMap:It,normalMapObjectSpace:Pt&&g.normalMapType===S0,normalMapTangentSpace:Pt&&g.normalMapType===cp,metalnessMap:b,roughnessMap:v,anisotropy:U,anisotropyMap:ht,clearcoat:X,clearcoatMap:qt,clearcoatNormalMap:Q,clearcoatRoughnessMap:dt,dispersion:$,iridescence:W,iridescenceMap:Lt,iridescenceThicknessMap:Dt,sheen:Mt,sheenColorMap:ft,sheenRoughnessMap:zt,specularMap:Nt,specularColorMap:he,specularIntensityMap:P,transmission:nt,transmissionMap:st,thicknessMap:B,gradientMap:q,opaque:g.transparent===!1&&g.blending===Zr&&g.alphaToCoverage===!1,alphaMap:it,alphaTest:at,alphaHash:Wt,combine:g.combine,mapUv:ie&&f(g.map.channel),aoMapUv:ln&&f(g.aoMap.channel),lightMapUv:kt&&f(g.lightMap.channel),bumpMapUv:Yt&&f(g.bumpMap.channel),normalMapUv:Pt&&f(g.normalMap.channel),displacementMapUv:ue&&f(g.displacementMap.channel),emissiveMapUv:It&&f(g.emissiveMap.channel),metalnessMapUv:b&&f(g.metalnessMap.channel),roughnessMapUv:v&&f(g.roughnessMap.channel),anisotropyMapUv:ht&&f(g.anisotropyMap.channel),clearcoatMapUv:qt&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:Q&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&f(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:zt&&f(g.sheenRoughnessMap.channel),specularMapUv:Nt&&f(g.specularMap.channel),specularColorMapUv:he&&f(g.specularColorMap.channel),specularIntensityMapUv:P&&f(g.specularIntensityMap.channel),transmissionMapUv:st&&f(g.transmissionMap.channel),thicknessMapUv:B&&f(g.thicknessMap.channel),alphaMapUv:it&&f(g.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Pt||U),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!H.attributes.uv&&(ie||it),fog:!!Z,useFog:g.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:Y.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Kt,morphTextureStride:ee,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&z.length>0,shadowMapType:e.shadowMap.type,toneMapping:en,decodeVideoTexture:ie&&g.map.isVideoTexture===!0&&te.getTransfer(g.map.colorSpace)===fe,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===gi,flipSided:g.side===on,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ae&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&g.extensions.multiDraw===!0||Ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function E(g){const M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(const z in g.defines)M.push(z),M.push(g.defines[z]);return g.isRawShaderMaterial===!1&&(S(M,g),T(M,g),M.push(e.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function S(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapCubeUVHeight),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.morphAttributeCount),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function T(g,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),g.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),g.push(o.mask)}function N(g){const M=y[g.type];let z;if(M){const k=Zn[M];z=Q0.clone(k.uniforms)}else z=g.uniforms;return z}function R(g,M){let z;for(let k=0,Y=h.length;k<Y;k++){const Z=h[k];if(Z.cacheKey===M){z=Z,++z.usedTimes;break}}return z===void 0&&(z=new fx(e,M,g,s),h.push(z)),z}function A(g){if(--g.usedTimes===0){const M=h.indexOf(g);h[M]=h[h.length-1],h.pop(),g.destroy()}}function I(g){c.remove(g)}function j(){c.dispose()}return{getParameters:p,getProgramCacheKey:E,getUniforms:N,acquireProgram:R,releaseProgram:A,releaseShaderCache:I,programs:h,dispose:j}}function vx(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function i(a){e.delete(a)}function r(a,o,c){e.get(a)[o]=c}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:r,dispose:s}}function xx(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function gd(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function _d(){const e=[];let t=0;const n=[],i=[],r=[];function s(){t=0,n.length=0,i.length=0,r.length=0}function a(u,d,m,_,y,f){let p=e[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:m,groupOrder:_,renderOrder:u.renderOrder,z:y,group:f},e[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=m,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=y,p.group=f),t++,p}function o(u,d,m,_,y,f){const p=a(u,d,m,_,y,f);m.transmission>0?i.push(p):m.transparent===!0?r.push(p):n.push(p)}function c(u,d,m,_,y,f){const p=a(u,d,m,_,y,f);m.transmission>0?i.unshift(p):m.transparent===!0?r.unshift(p):n.unshift(p)}function l(u,d){n.length>1&&n.sort(u||xx),i.length>1&&i.sort(d||gd),r.length>1&&r.sort(d||gd)}function h(){for(let u=t,d=e.length;u<d;u++){const m=e[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function yx(){let e=new WeakMap;function t(i,r){const s=e.get(i);let a;return s===void 0?(a=new _d,e.set(i,[a])):r>=s.length?(a=new _d,s.push(a)):a=s[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function Mx(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new C,color:new Bt};break;case"SpotLight":n={position:new C,direction:new C,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new C,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new C,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":n={color:new Bt,position:new C,halfWidth:new C,halfHeight:new C};break}return e[t.id]=n,n}}}function Sx(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let Ex=0;function bx(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function Tx(e){const t=new Mx,n=Sx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new C);const r=new C,s=new le,a=new le;function o(l){let h=0,u=0,d=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let m=0,_=0,y=0,f=0,p=0,E=0,S=0,T=0,N=0,R=0,A=0;l.sort(bx);for(let j=0,g=l.length;j<g;j++){const M=l[j],z=M.color,k=M.intensity,Y=M.distance,Z=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=z.r*k,u+=z.g*k,d+=z.b*k;else if(M.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(M.sh.coefficients[H],k);A++}else if(M.isDirectionalLight){const H=t.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const K=M.shadow,G=n.get(M);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,i.directionalShadow[m]=G,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=M.shadow.matrix,E++}i.directional[m]=H,m++}else if(M.isSpotLight){const H=t.get(M);H.position.setFromMatrixPosition(M.matrixWorld),H.color.copy(z).multiplyScalar(k),H.distance=Y,H.coneCos=Math.cos(M.angle),H.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),H.decay=M.decay,i.spot[y]=H;const K=M.shadow;if(M.map&&(i.spotLightMap[N]=M.map,N++,K.updateMatrices(M),M.castShadow&&R++),i.spotLightMatrix[y]=K.matrix,M.castShadow){const G=n.get(M);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,i.spotShadow[y]=G,i.spotShadowMap[y]=Z,T++}y++}else if(M.isRectAreaLight){const H=t.get(M);H.color.copy(z).multiplyScalar(k),H.halfWidth.set(M.width*.5,0,0),H.halfHeight.set(0,M.height*.5,0),i.rectArea[f]=H,f++}else if(M.isPointLight){const H=t.get(M);if(H.color.copy(M.color).multiplyScalar(M.intensity),H.distance=M.distance,H.decay=M.decay,M.castShadow){const K=M.shadow,G=n.get(M);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,i.pointShadow[_]=G,i.pointShadowMap[_]=Z,i.pointShadowMatrix[_]=M.shadow.matrix,S++}i.point[_]=H,_++}else if(M.isHemisphereLight){const H=t.get(M);H.skyColor.copy(M.color).multiplyScalar(k),H.groundColor.copy(M.groundColor).multiplyScalar(k),i.hemi[p]=H,p++}}f>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=et.LTC_FLOAT_1,i.rectAreaLTC2=et.LTC_FLOAT_2):(i.rectAreaLTC1=et.LTC_HALF_1,i.rectAreaLTC2=et.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==m||I.pointLength!==_||I.spotLength!==y||I.rectAreaLength!==f||I.hemiLength!==p||I.numDirectionalShadows!==E||I.numPointShadows!==S||I.numSpotShadows!==T||I.numSpotMaps!==N||I.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=f,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=T+N-R,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,I.directionalLength=m,I.pointLength=_,I.spotLength=y,I.rectAreaLength=f,I.hemiLength=p,I.numDirectionalShadows=E,I.numPointShadows=S,I.numSpotShadows=T,I.numSpotMaps=N,I.numLightProbes=A,i.version=Ex++)}function c(l,h){let u=0,d=0,m=0,_=0,y=0;const f=h.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const S=l[p];if(S.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),u++}else if(S.isSpotLight){const T=i.spot[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(f),m++}else if(S.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),a.identity(),s.copy(S.matrixWorld),s.premultiply(f),a.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),d++}else if(S.isHemisphereLight){const T=i.hemi[y];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(f),y++}}}return{setup:o,setupView:c,state:i}}function vd(e){const t=new Tx(e),n=[],i=[];function r(h){l.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function o(){t.setup(n)}function c(h){t.setupView(n,h)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Ax(e){let t=new WeakMap;function n(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new vd(e),t.set(r,[o])):s>=a.length?(o=new vd(e),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class wx extends Yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=y0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Rx extends Yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Px=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lx(e,t,n){let i=new xh;const r=new Tt,s=new Tt,a=new ae,o=new wx({depthPacking:M0}),c=new Rx,l={},h=n.maxTextureSize,u={[Gi]:on,[on]:Gi,[gi]:gi},d=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Cx,fragmentShader:Px}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new En;_.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Jn(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kf;let p=this.type;this.render=function(R,A,I){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const j=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),z=e.state;z.setBlending(Oi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=p!==pi&&this.type===pi,Y=p===pi&&this.type!==pi;for(let Z=0,H=R.length;Z<H;Z++){const K=R[Z],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ot=G.getFrameExtents();if(r.multiply(ot),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ot.x),r.x=s.x*ot.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ot.y),r.y=s.y*ot.y,G.mapSize.y=s.y)),G.map===null||k===!0||Y===!0){const _t=this.type!==pi?{minFilter:In,magFilter:In}:{};G.map!==null&&G.map.dispose(),G.map=new mr(r.x,r.y,_t),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}e.setRenderTarget(G.map),e.clear();const ct=G.getViewportCount();for(let _t=0;_t<ct;_t++){const Kt=G.getViewport(_t);a.set(s.x*Kt.x,s.y*Kt.y,s.x*Kt.z,s.y*Kt.w),z.viewport(a),G.updateMatrices(K,_t),i=G.getFrustum(),T(A,I,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===pi&&E(G,I),G.needsUpdate=!1}p=this.type,f.needsUpdate=!1,e.setRenderTarget(j,g,M)};function E(R,A){const I=t.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new mr(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(A,null,I,d,y,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(A,null,I,m,y,null)}function S(R,A,I,j){let g=null;const M=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(M!==void 0)g=M;else if(g=I.isPointLight===!0?c:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=g.uuid,k=A.uuid;let Y=l[z];Y===void 0&&(Y={},l[z]=Y);let Z=Y[k];Z===void 0&&(Z=g.clone(),Y[k]=Z,A.addEventListener("dispose",N)),g=Z}if(g.visible=A.visible,g.wireframe=A.wireframe,j===pi?g.side=A.shadowSide!==null?A.shadowSide:A.side:g.side=A.shadowSide!==null?A.shadowSide:u[A.side],g.alphaMap=A.alphaMap,g.alphaTest=A.alphaTest,g.map=A.map,g.clipShadows=A.clipShadows,g.clippingPlanes=A.clippingPlanes,g.clipIntersection=A.clipIntersection,g.displacementMap=A.displacementMap,g.displacementScale=A.displacementScale,g.displacementBias=A.displacementBias,g.wireframeLinewidth=A.wireframeLinewidth,g.linewidth=A.linewidth,I.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const z=e.properties.get(g);z.light=I}return g}function T(R,A,I,j,g){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&g===pi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const k=t.update(R),Y=R.material;if(Array.isArray(Y)){const Z=k.groups;for(let H=0,K=Z.length;H<K;H++){const G=Z[H],ot=Y[G.materialIndex];if(ot&&ot.visible){const ct=S(R,ot,j,g);R.onBeforeShadow(e,R,A,I,k,ct,G),e.renderBufferDirect(I,null,k,ct,R,G),R.onAfterShadow(e,R,A,I,k,ct,G)}}}else if(Y.visible){const Z=S(R,Y,j,g);R.onBeforeShadow(e,R,A,I,k,Z,null),e.renderBufferDirect(I,null,k,Z,R,null),R.onAfterShadow(e,R,A,I,k,Z,null)}}const z=R.children;for(let k=0,Y=z.length;k<Y;k++)T(z[k],A,I,j,g)}function N(R){R.target.removeEventListener("dispose",N);for(const I in l){const j=l[I],g=R.target.uuid;g in j&&(j[g].dispose(),delete j[g])}}}const Dx={[el]:nl,[il]:al,[rl]:ol,[es]:sl,[nl]:el,[al]:il,[ol]:rl,[sl]:es};function Ix(e){function t(){let P=!1;const st=new ae;let B=null;const q=new ae(0,0,0,0);return{setMask:function(it){B!==it&&!P&&(e.colorMask(it,it,it,it),B=it)},setLocked:function(it){P=it},setClear:function(it,at,Wt,Ae,en){en===!0&&(it*=Ae,at*=Ae,Wt*=Ae),st.set(it,at,Wt,Ae),q.equals(st)===!1&&(e.clearColor(it,at,Wt,Ae),q.copy(st))},reset:function(){P=!1,B=null,q.set(-1,0,0,0)}}}function n(){let P=!1,st=!1,B=null,q=null,it=null;return{setReversed:function(at){st=at},setTest:function(at){at?mt(e.DEPTH_TEST):lt(e.DEPTH_TEST)},setMask:function(at){B!==at&&!P&&(e.depthMask(at),B=at)},setFunc:function(at){if(st&&(at=Dx[at]),q!==at){switch(at){case el:e.depthFunc(e.NEVER);break;case nl:e.depthFunc(e.ALWAYS);break;case il:e.depthFunc(e.LESS);break;case es:e.depthFunc(e.LEQUAL);break;case rl:e.depthFunc(e.EQUAL);break;case sl:e.depthFunc(e.GEQUAL);break;case al:e.depthFunc(e.GREATER);break;case ol:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}q=at}},setLocked:function(at){P=at},setClear:function(at){it!==at&&(e.clearDepth(at),it=at)},reset:function(){P=!1,B=null,q=null,it=null}}}function i(){let P=!1,st=null,B=null,q=null,it=null,at=null,Wt=null,Ae=null,en=null;return{setTest:function(Zt){P||(Zt?mt(e.STENCIL_TEST):lt(e.STENCIL_TEST))},setMask:function(Zt){st!==Zt&&!P&&(e.stencilMask(Zt),st=Zt)},setFunc:function(Zt,nn,ci){(B!==Zt||q!==nn||it!==ci)&&(e.stencilFunc(Zt,nn,ci),B=Zt,q=nn,it=ci)},setOp:function(Zt,nn,ci){(at!==Zt||Wt!==nn||Ae!==ci)&&(e.stencilOp(Zt,nn,ci),at=Zt,Wt=nn,Ae=ci)},setLocked:function(Zt){P=Zt},setClear:function(Zt){en!==Zt&&(e.clearStencil(Zt),en=Zt)},reset:function(){P=!1,st=null,B=null,q=null,it=null,at=null,Wt=null,Ae=null,en=null}}}const r=new t,s=new n,a=new i,o=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],m=null,_=!1,y=null,f=null,p=null,E=null,S=null,T=null,N=null,R=new Bt(0,0,0),A=0,I=!1,j=null,g=null,M=null,z=null,k=null;const Y=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,H=0;const K=e.getParameter(e.VERSION);K.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(K)[1]),Z=H>=1):K.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Z=H>=2);let G=null,ot={};const ct=e.getParameter(e.SCISSOR_BOX),_t=e.getParameter(e.VIEWPORT),Kt=new ae().fromArray(ct),ee=new ae().fromArray(_t);function V(P,st,B,q){const it=new Uint8Array(4),at=e.createTexture();e.bindTexture(P,at),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Wt=0;Wt<B;Wt++)P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY?e.texImage3D(st,0,e.RGBA,1,1,q,0,e.RGBA,e.UNSIGNED_BYTE,it):e.texImage2D(st+Wt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,it);return at}const J={};J[e.TEXTURE_2D]=V(e.TEXTURE_2D,e.TEXTURE_2D,1),J[e.TEXTURE_CUBE_MAP]=V(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[e.TEXTURE_2D_ARRAY]=V(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),J[e.TEXTURE_3D]=V(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),mt(e.DEPTH_TEST),s.setFunc(es),kt(!1),Yt(Ru),mt(e.CULL_FACE),w(Oi);function mt(P){l[P]!==!0&&(e.enable(P),l[P]=!0)}function lt(P){l[P]!==!1&&(e.disable(P),l[P]=!1)}function Ut(P,st){return h[P]!==st?(e.bindFramebuffer(P,st),h[P]=st,P===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=st),P===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=st),!0):!1}function Rt(P,st){let B=d,q=!1;if(P){B=u.get(st),B===void 0&&(B=[],u.set(st,B));const it=P.textures;if(B.length!==it.length||B[0]!==e.COLOR_ATTACHMENT0){for(let at=0,Wt=it.length;at<Wt;at++)B[at]=e.COLOR_ATTACHMENT0+at;B.length=it.length,q=!0}}else B[0]!==e.BACK&&(B[0]=e.BACK,q=!0);q&&e.drawBuffers(B)}function Ht(P){return m!==P?(e.useProgram(P),m=P,!0):!1}const ie={[ir]:e.FUNC_ADD,[qg]:e.FUNC_SUBTRACT,[jg]:e.FUNC_REVERSE_SUBTRACT};ie[Kg]=e.MIN,ie[Zg]=e.MAX;const Vt={[$g]:e.ZERO,[Jg]:e.ONE,[Qg]:e.SRC_COLOR,[Qc]:e.SRC_ALPHA,[s0]:e.SRC_ALPHA_SATURATE,[i0]:e.DST_COLOR,[e0]:e.DST_ALPHA,[t0]:e.ONE_MINUS_SRC_COLOR,[tl]:e.ONE_MINUS_SRC_ALPHA,[r0]:e.ONE_MINUS_DST_COLOR,[n0]:e.ONE_MINUS_DST_ALPHA,[a0]:e.CONSTANT_COLOR,[o0]:e.ONE_MINUS_CONSTANT_COLOR,[c0]:e.CONSTANT_ALPHA,[l0]:e.ONE_MINUS_CONSTANT_ALPHA};function w(P,st,B,q,it,at,Wt,Ae,en,Zt){if(P===Oi){_===!0&&(lt(e.BLEND),_=!1);return}if(_===!1&&(mt(e.BLEND),_=!0),P!==Yg){if(P!==y||Zt!==I){if((f!==ir||S!==ir)&&(e.blendEquation(e.FUNC_ADD),f=ir,S=ir),Zt)switch(P){case Zr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ks:e.blendFunc(e.ONE,e.ONE);break;case Cu:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Pu:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Zr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ks:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Cu:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Pu:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}p=null,E=null,T=null,N=null,R.set(0,0,0),A=0,y=P,I=Zt}return}it=it||st,at=at||B,Wt=Wt||q,(st!==f||it!==S)&&(e.blendEquationSeparate(ie[st],ie[it]),f=st,S=it),(B!==p||q!==E||at!==T||Wt!==N)&&(e.blendFuncSeparate(Vt[B],Vt[q],Vt[at],Vt[Wt]),p=B,E=q,T=at,N=Wt),(Ae.equals(R)===!1||en!==A)&&(e.blendColor(Ae.r,Ae.g,Ae.b,en),R.copy(Ae),A=en),y=P,I=!1}function ln(P,st){P.side===gi?lt(e.CULL_FACE):mt(e.CULL_FACE);let B=P.side===on;st&&(B=!B),kt(B),P.blending===Zr&&P.transparent===!1?w(Oi):w(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);const q=P.stencilWrite;a.setTest(q),q&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ue(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?mt(e.SAMPLE_ALPHA_TO_COVERAGE):lt(e.SAMPLE_ALPHA_TO_COVERAGE)}function kt(P){j!==P&&(P?e.frontFace(e.CW):e.frontFace(e.CCW),j=P)}function Yt(P){P!==Vg?(mt(e.CULL_FACE),P!==g&&(P===Ru?e.cullFace(e.BACK):P===Wg?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):lt(e.CULL_FACE),g=P}function Pt(P){P!==M&&(Z&&e.lineWidth(P),M=P)}function ue(P,st,B){P?(mt(e.POLYGON_OFFSET_FILL),(z!==st||k!==B)&&(e.polygonOffset(st,B),z=st,k=B)):lt(e.POLYGON_OFFSET_FILL)}function It(P){P?mt(e.SCISSOR_TEST):lt(e.SCISSOR_TEST)}function b(P){P===void 0&&(P=e.TEXTURE0+Y-1),G!==P&&(e.activeTexture(P),G=P)}function v(P,st,B){B===void 0&&(G===null?B=e.TEXTURE0+Y-1:B=G);let q=ot[B];q===void 0&&(q={type:void 0,texture:void 0},ot[B]=q),(q.type!==P||q.texture!==st)&&(G!==B&&(e.activeTexture(B),G=B),e.bindTexture(P,st||J[P]),q.type=P,q.texture=st)}function U(){const P=ot[G];P!==void 0&&P.type!==void 0&&(e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function X(){try{e.compressedTexImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{e.compressedTexImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{e.texSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Mt(){try{e.texSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function nt(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function qt(){try{e.texStorage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{e.texStorage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{e.texImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Lt(){try{e.texImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Dt(P){Kt.equals(P)===!1&&(e.scissor(P.x,P.y,P.z,P.w),Kt.copy(P))}function ft(P){ee.equals(P)===!1&&(e.viewport(P.x,P.y,P.z,P.w),ee.copy(P))}function zt(P,st){let B=c.get(st);B===void 0&&(B=new WeakMap,c.set(st,B));let q=B.get(P);q===void 0&&(q=e.getUniformBlockIndex(st,P.name),B.set(P,q))}function Nt(P,st){const q=c.get(st).get(P);o.get(st)!==q&&(e.uniformBlockBinding(st,q,P.__bindingPointIndex),o.set(st,q))}function he(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),l={},G=null,ot={},h={},u=new WeakMap,d=[],m=null,_=!1,y=null,f=null,p=null,E=null,S=null,T=null,N=null,R=new Bt(0,0,0),A=0,I=!1,j=null,g=null,M=null,z=null,k=null,Kt.set(0,0,e.canvas.width,e.canvas.height),ee.set(0,0,e.canvas.width,e.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:mt,disable:lt,bindFramebuffer:Ut,drawBuffers:Rt,useProgram:Ht,setBlending:w,setMaterial:ln,setFlipSided:kt,setCullFace:Yt,setLineWidth:Pt,setPolygonOffset:ue,setScissorTest:It,activeTexture:b,bindTexture:v,unbindTexture:U,compressedTexImage2D:X,compressedTexImage3D:$,texImage2D:dt,texImage3D:Lt,updateUBOMapping:zt,uniformBlockBinding:Nt,texStorage2D:qt,texStorage3D:Q,texSubImage2D:W,texSubImage3D:Mt,compressedTexSubImage2D:nt,compressedTexSubImage3D:ht,scissor:Dt,viewport:ft,reset:he}}function xd(e,t,n,i){const r=Ux(i);switch(n){case ep:return e*t;case ip:return e*t;case rp:return e*t*2;case sp:return e*t/r.components*r.byteLength;case ph:return e*t/r.components*r.byteLength;case ap:return e*t*2/r.components*r.byteLength;case mh:return e*t*2/r.components*r.byteLength;case np:return e*t*3/r.components*r.byteLength;case Hn:return e*t*4/r.components*r.byteLength;case gh:return e*t*4/r.components*r.byteLength;case Qa:case to:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case eo:case no:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fl:case ml:return Math.max(e,16)*Math.max(t,8)/4;case dl:case pl:return Math.max(e,8)*Math.max(t,8)/2;case gl:case _l:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case vl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case yl:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case El:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case bl:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Al:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case wl:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case io:case Il:case Ul:return Math.ceil(e/4)*Math.ceil(t/4)*16;case op:case Nl:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Fl:case Ol:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ux(e){switch(e){case yi:case Jf:return{byteLength:1,components:1};case Zs:case Qf:case ea:return{byteLength:2,components:1};case dh:case fh:return{byteLength:2,components:4};case pr:case uh:case vi:return{byteLength:4,components:1};case tp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function Nx(e,t,n,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Tt,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,v){return m?new OffscreenCanvas(b,v):go("canvas")}function y(b,v,U){let X=1;const $=It(b);if(($.width>U||$.height>U)&&(X=U/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const W=Math.floor(X*$.width),Mt=Math.floor(X*$.height);u===void 0&&(u=_(W,Mt));const nt=v?_(W,Mt):u;return nt.width=W,nt.height=Mt,nt.getContext("2d").drawImage(b,0,0,W,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+W+"x"+Mt+")."),nt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function f(b){return b.generateMipmaps&&b.minFilter!==In&&b.minFilter!==Ln}function p(b){e.generateMipmap(b)}function E(b,v,U,X,$=!1){if(b!==null){if(e[b]!==void 0)return e[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let W=v;if(v===e.RED&&(U===e.FLOAT&&(W=e.R32F),U===e.HALF_FLOAT&&(W=e.R16F),U===e.UNSIGNED_BYTE&&(W=e.R8)),v===e.RED_INTEGER&&(U===e.UNSIGNED_BYTE&&(W=e.R8UI),U===e.UNSIGNED_SHORT&&(W=e.R16UI),U===e.UNSIGNED_INT&&(W=e.R32UI),U===e.BYTE&&(W=e.R8I),U===e.SHORT&&(W=e.R16I),U===e.INT&&(W=e.R32I)),v===e.RG&&(U===e.FLOAT&&(W=e.RG32F),U===e.HALF_FLOAT&&(W=e.RG16F),U===e.UNSIGNED_BYTE&&(W=e.RG8)),v===e.RG_INTEGER&&(U===e.UNSIGNED_BYTE&&(W=e.RG8UI),U===e.UNSIGNED_SHORT&&(W=e.RG16UI),U===e.UNSIGNED_INT&&(W=e.RG32UI),U===e.BYTE&&(W=e.RG8I),U===e.SHORT&&(W=e.RG16I),U===e.INT&&(W=e.RG32I)),v===e.RGB_INTEGER&&(U===e.UNSIGNED_BYTE&&(W=e.RGB8UI),U===e.UNSIGNED_SHORT&&(W=e.RGB16UI),U===e.UNSIGNED_INT&&(W=e.RGB32UI),U===e.BYTE&&(W=e.RGB8I),U===e.SHORT&&(W=e.RGB16I),U===e.INT&&(W=e.RGB32I)),v===e.RGBA_INTEGER&&(U===e.UNSIGNED_BYTE&&(W=e.RGBA8UI),U===e.UNSIGNED_SHORT&&(W=e.RGBA16UI),U===e.UNSIGNED_INT&&(W=e.RGBA32UI),U===e.BYTE&&(W=e.RGBA8I),U===e.SHORT&&(W=e.RGBA16I),U===e.INT&&(W=e.RGBA32I)),v===e.RGB&&U===e.UNSIGNED_INT_5_9_9_9_REV&&(W=e.RGB9_E5),v===e.RGBA){const Mt=$?uo:te.getTransfer(X);U===e.FLOAT&&(W=e.RGBA32F),U===e.HALF_FLOAT&&(W=e.RGBA16F),U===e.UNSIGNED_BYTE&&(W=Mt===fe?e.SRGB8_ALPHA8:e.RGBA8),U===e.UNSIGNED_SHORT_4_4_4_4&&(W=e.RGBA4),U===e.UNSIGNED_SHORT_5_5_5_1&&(W=e.RGB5_A1)}return(W===e.R16F||W===e.R32F||W===e.RG16F||W===e.RG32F||W===e.RGBA16F||W===e.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function S(b,v){let U;return b?v===null||v===pr||v===rs?U=e.DEPTH24_STENCIL8:v===vi?U=e.DEPTH32F_STENCIL8:v===Zs&&(U=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===pr||v===rs?U=e.DEPTH_COMPONENT24:v===vi?U=e.DEPTH_COMPONENT32F:v===Zs&&(U=e.DEPTH_COMPONENT16),U}function T(b,v){return f(b)===!0||b.isFramebufferTexture&&b.minFilter!==In&&b.minFilter!==Ln?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function N(b){const v=b.target;v.removeEventListener("dispose",N),A(v),v.isVideoTexture&&h.delete(v)}function R(b){const v=b.target;v.removeEventListener("dispose",R),j(v)}function A(b){const v=i.get(b);if(v.__webglInit===void 0)return;const U=b.source,X=d.get(U);if(X){const $=X[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&I(b),Object.keys(X).length===0&&d.delete(U)}i.remove(b)}function I(b){const v=i.get(b);e.deleteTexture(v.__webglTexture);const U=b.source,X=d.get(U);delete X[v.__cacheKey],a.memory.textures--}function j(b){const v=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let $=0;$<v.__webglFramebuffer[X].length;$++)e.deleteFramebuffer(v.__webglFramebuffer[X][$]);else e.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)e.deleteFramebuffer(v.__webglFramebuffer[X]);else e.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&e.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&e.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&e.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=b.textures;for(let X=0,$=U.length;X<$;X++){const W=i.get(U[X]);W.__webglTexture&&(e.deleteTexture(W.__webglTexture),a.memory.textures--),i.remove(U[X])}i.remove(b)}let g=0;function M(){g=0}function z(){const b=g;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),g+=1,b}function k(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function Y(b,v){const U=i.get(b);if(b.isVideoTexture&&Pt(b),b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){const X=b.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(U,b,v);return}}n.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+v)}function Z(b,v){const U=i.get(b);if(b.version>0&&U.__version!==b.version){ee(U,b,v);return}n.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+v)}function H(b,v){const U=i.get(b);if(b.version>0&&U.__version!==b.version){ee(U,b,v);return}n.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+v)}function K(b,v){const U=i.get(b);if(b.version>0&&U.__version!==b.version){V(U,b,v);return}n.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+v)}const G={[hl]:e.REPEAT,[sr]:e.CLAMP_TO_EDGE,[ul]:e.MIRRORED_REPEAT},ot={[In]:e.NEAREST,[x0]:e.NEAREST_MIPMAP_NEAREST,[ga]:e.NEAREST_MIPMAP_LINEAR,[Ln]:e.LINEAR,[ac]:e.LINEAR_MIPMAP_NEAREST,[ar]:e.LINEAR_MIPMAP_LINEAR},ct={[E0]:e.NEVER,[C0]:e.ALWAYS,[b0]:e.LESS,[lp]:e.LEQUAL,[T0]:e.EQUAL,[R0]:e.GEQUAL,[A0]:e.GREATER,[w0]:e.NOTEQUAL};function _t(b,v){if(v.type===vi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ln||v.magFilter===ac||v.magFilter===ga||v.magFilter===ar||v.minFilter===Ln||v.minFilter===ac||v.minFilter===ga||v.minFilter===ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(b,e.TEXTURE_WRAP_S,G[v.wrapS]),e.texParameteri(b,e.TEXTURE_WRAP_T,G[v.wrapT]),(b===e.TEXTURE_3D||b===e.TEXTURE_2D_ARRAY)&&e.texParameteri(b,e.TEXTURE_WRAP_R,G[v.wrapR]),e.texParameteri(b,e.TEXTURE_MAG_FILTER,ot[v.magFilter]),e.texParameteri(b,e.TEXTURE_MIN_FILTER,ot[v.minFilter]),v.compareFunction&&(e.texParameteri(b,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(b,e.TEXTURE_COMPARE_FUNC,ct[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===In||v.minFilter!==ga&&v.minFilter!==ar||v.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");e.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Kt(b,v){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",N));const X=v.source;let $=d.get(X);$===void 0&&($={},d.set(X,$));const W=k(v);if(W!==b.__cacheKey){$[W]===void 0&&($[W]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,U=!0),$[W].usedTimes++;const Mt=$[b.__cacheKey];Mt!==void 0&&($[b.__cacheKey].usedTimes--,Mt.usedTimes===0&&I(v)),b.__cacheKey=W,b.__webglTexture=$[W].texture}return U}function ee(b,v,U){let X=e.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=e.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=e.TEXTURE_3D);const $=Kt(b,v),W=v.source;n.bindTexture(X,b.__webglTexture,e.TEXTURE0+U);const Mt=i.get(W);if(W.version!==Mt.__version||$===!0){n.activeTexture(e.TEXTURE0+U);const nt=te.getPrimaries(te.workingColorSpace),ht=v.colorSpace===Ni?null:te.getPrimaries(v.colorSpace),qt=v.colorSpace===Ni||nt===ht?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Q=y(v.image,!1,r.maxTextureSize);Q=ue(v,Q);const dt=s.convert(v.format,v.colorSpace),Lt=s.convert(v.type);let Dt=E(v.internalFormat,dt,Lt,v.colorSpace,v.isVideoTexture);_t(X,v);let ft;const zt=v.mipmaps,Nt=v.isVideoTexture!==!0,he=Mt.__version===void 0||$===!0,P=W.dataReady,st=T(v,Q);if(v.isDepthTexture)Dt=S(v.format===ss,v.type),he&&(Nt?n.texStorage2D(e.TEXTURE_2D,1,Dt,Q.width,Q.height):n.texImage2D(e.TEXTURE_2D,0,Dt,Q.width,Q.height,0,dt,Lt,null));else if(v.isDataTexture)if(zt.length>0){Nt&&he&&n.texStorage2D(e.TEXTURE_2D,st,Dt,zt[0].width,zt[0].height);for(let B=0,q=zt.length;B<q;B++)ft=zt[B],Nt?P&&n.texSubImage2D(e.TEXTURE_2D,B,0,0,ft.width,ft.height,dt,Lt,ft.data):n.texImage2D(e.TEXTURE_2D,B,Dt,ft.width,ft.height,0,dt,Lt,ft.data);v.generateMipmaps=!1}else Nt?(he&&n.texStorage2D(e.TEXTURE_2D,st,Dt,Q.width,Q.height),P&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,Q.width,Q.height,dt,Lt,Q.data)):n.texImage2D(e.TEXTURE_2D,0,Dt,Q.width,Q.height,0,dt,Lt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Nt&&he&&n.texStorage3D(e.TEXTURE_2D_ARRAY,st,Dt,zt[0].width,zt[0].height,Q.depth);for(let B=0,q=zt.length;B<q;B++)if(ft=zt[B],v.format!==Hn)if(dt!==null)if(Nt){if(P)if(v.layerUpdates.size>0){const it=xd(ft.width,ft.height,v.format,v.type);for(const at of v.layerUpdates){const Wt=ft.data.subarray(at*it/ft.data.BYTES_PER_ELEMENT,(at+1)*it/ft.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,B,0,0,at,ft.width,ft.height,1,dt,Wt,0,0)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,B,0,0,0,ft.width,ft.height,Q.depth,dt,ft.data,0,0)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,B,Dt,ft.width,ft.height,Q.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?P&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,B,0,0,0,ft.width,ft.height,Q.depth,dt,Lt,ft.data):n.texImage3D(e.TEXTURE_2D_ARRAY,B,Dt,ft.width,ft.height,Q.depth,0,dt,Lt,ft.data)}else{Nt&&he&&n.texStorage2D(e.TEXTURE_2D,st,Dt,zt[0].width,zt[0].height);for(let B=0,q=zt.length;B<q;B++)ft=zt[B],v.format!==Hn?dt!==null?Nt?P&&n.compressedTexSubImage2D(e.TEXTURE_2D,B,0,0,ft.width,ft.height,dt,ft.data):n.compressedTexImage2D(e.TEXTURE_2D,B,Dt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?P&&n.texSubImage2D(e.TEXTURE_2D,B,0,0,ft.width,ft.height,dt,Lt,ft.data):n.texImage2D(e.TEXTURE_2D,B,Dt,ft.width,ft.height,0,dt,Lt,ft.data)}else if(v.isDataArrayTexture)if(Nt){if(he&&n.texStorage3D(e.TEXTURE_2D_ARRAY,st,Dt,Q.width,Q.height,Q.depth),P)if(v.layerUpdates.size>0){const B=xd(Q.width,Q.height,v.format,v.type);for(const q of v.layerUpdates){const it=Q.data.subarray(q*B/Q.data.BYTES_PER_ELEMENT,(q+1)*B/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,q,Q.width,Q.height,1,dt,Lt,it)}v.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,dt,Lt,Q.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Dt,Q.width,Q.height,Q.depth,0,dt,Lt,Q.data);else if(v.isData3DTexture)Nt?(he&&n.texStorage3D(e.TEXTURE_3D,st,Dt,Q.width,Q.height,Q.depth),P&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,dt,Lt,Q.data)):n.texImage3D(e.TEXTURE_3D,0,Dt,Q.width,Q.height,Q.depth,0,dt,Lt,Q.data);else if(v.isFramebufferTexture){if(he)if(Nt)n.texStorage2D(e.TEXTURE_2D,st,Dt,Q.width,Q.height);else{let B=Q.width,q=Q.height;for(let it=0;it<st;it++)n.texImage2D(e.TEXTURE_2D,it,Dt,B,q,0,dt,Lt,null),B>>=1,q>>=1}}else if(zt.length>0){if(Nt&&he){const B=It(zt[0]);n.texStorage2D(e.TEXTURE_2D,st,Dt,B.width,B.height)}for(let B=0,q=zt.length;B<q;B++)ft=zt[B],Nt?P&&n.texSubImage2D(e.TEXTURE_2D,B,0,0,dt,Lt,ft):n.texImage2D(e.TEXTURE_2D,B,Dt,dt,Lt,ft);v.generateMipmaps=!1}else if(Nt){if(he){const B=It(Q);n.texStorage2D(e.TEXTURE_2D,st,Dt,B.width,B.height)}P&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,dt,Lt,Q)}else n.texImage2D(e.TEXTURE_2D,0,Dt,dt,Lt,Q);f(v)&&p(X),Mt.__version=W.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function V(b,v,U){if(v.image.length!==6)return;const X=Kt(b,v),$=v.source;n.bindTexture(e.TEXTURE_CUBE_MAP,b.__webglTexture,e.TEXTURE0+U);const W=i.get($);if($.version!==W.__version||X===!0){n.activeTexture(e.TEXTURE0+U);const Mt=te.getPrimaries(te.workingColorSpace),nt=v.colorSpace===Ni?null:te.getPrimaries(v.colorSpace),ht=v.colorSpace===Ni||Mt===nt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const qt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,dt=[];for(let q=0;q<6;q++)!qt&&!Q?dt[q]=y(v.image[q],!0,r.maxCubemapSize):dt[q]=Q?v.image[q].image:v.image[q],dt[q]=ue(v,dt[q]);const Lt=dt[0],Dt=s.convert(v.format,v.colorSpace),ft=s.convert(v.type),zt=E(v.internalFormat,Dt,ft,v.colorSpace),Nt=v.isVideoTexture!==!0,he=W.__version===void 0||X===!0,P=$.dataReady;let st=T(v,Lt);_t(e.TEXTURE_CUBE_MAP,v);let B;if(qt){Nt&&he&&n.texStorage2D(e.TEXTURE_CUBE_MAP,st,zt,Lt.width,Lt.height);for(let q=0;q<6;q++){B=dt[q].mipmaps;for(let it=0;it<B.length;it++){const at=B[it];v.format!==Hn?Dt!==null?Nt?P&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,it,0,0,at.width,at.height,Dt,at.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,it,zt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?P&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,it,0,0,at.width,at.height,Dt,ft,at.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,it,zt,at.width,at.height,0,Dt,ft,at.data)}}}else{if(B=v.mipmaps,Nt&&he){B.length>0&&st++;const q=It(dt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,st,zt,q.width,q.height)}for(let q=0;q<6;q++)if(Q){Nt?P&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,dt[q].width,dt[q].height,Dt,ft,dt[q].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,zt,dt[q].width,dt[q].height,0,Dt,ft,dt[q].data);for(let it=0;it<B.length;it++){const Wt=B[it].image[q].image;Nt?P&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,it+1,0,0,Wt.width,Wt.height,Dt,ft,Wt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,it+1,zt,Wt.width,Wt.height,0,Dt,ft,Wt.data)}}else{Nt?P&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Dt,ft,dt[q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,zt,Dt,ft,dt[q]);for(let it=0;it<B.length;it++){const at=B[it];Nt?P&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,it+1,0,0,Dt,ft,at.image[q]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+q,it+1,zt,Dt,ft,at.image[q])}}}f(v)&&p(e.TEXTURE_CUBE_MAP),W.__version=$.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function J(b,v,U,X,$,W){const Mt=s.convert(U.format,U.colorSpace),nt=s.convert(U.type),ht=E(U.internalFormat,Mt,nt,U.colorSpace);if(!i.get(v).__hasExternalTextures){const Q=Math.max(1,v.width>>W),dt=Math.max(1,v.height>>W);$===e.TEXTURE_3D||$===e.TEXTURE_2D_ARRAY?n.texImage3D($,W,ht,Q,dt,v.depth,0,Mt,nt,null):n.texImage2D($,W,ht,Q,dt,0,Mt,nt,null)}n.bindFramebuffer(e.FRAMEBUFFER,b),Yt(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,$,i.get(U).__webglTexture,0,kt(v)):($===e.TEXTURE_2D||$>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,X,$,i.get(U).__webglTexture,W),n.bindFramebuffer(e.FRAMEBUFFER,null)}function mt(b,v,U){if(e.bindRenderbuffer(e.RENDERBUFFER,b),v.depthBuffer){const X=v.depthTexture,$=X&&X.isDepthTexture?X.type:null,W=S(v.stencilBuffer,$),Mt=v.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,nt=kt(v);Yt(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,nt,W,v.width,v.height):U?e.renderbufferStorageMultisample(e.RENDERBUFFER,nt,W,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,W,v.width,v.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Mt,e.RENDERBUFFER,b)}else{const X=v.textures;for(let $=0;$<X.length;$++){const W=X[$],Mt=s.convert(W.format,W.colorSpace),nt=s.convert(W.type),ht=E(W.internalFormat,Mt,nt,W.colorSpace),qt=kt(v);U&&Yt(v)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,qt,ht,v.width,v.height):Yt(v)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,qt,ht,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,ht,v.width,v.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function lt(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);const X=i.get(v.depthTexture).__webglTexture,$=kt(v);if(v.depthTexture.format===$r)Yt(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,X,0,$):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,X,0);else if(v.depthTexture.format===ss)Yt(v)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,X,0,$):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Ut(b){const v=i.get(b),U=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const X=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=X}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");lt(v.__webglFramebuffer,b)}else if(U){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=e.createRenderbuffer(),mt(v.__webglDepthbuffer[X],b,!1);else{const $=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,W=v.__webglDepthbuffer[X];e.bindRenderbuffer(e.RENDERBUFFER,W),e.framebufferRenderbuffer(e.FRAMEBUFFER,$,e.RENDERBUFFER,W)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=e.createRenderbuffer(),mt(v.__webglDepthbuffer,b,!1);else{const X=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,$),e.framebufferRenderbuffer(e.FRAMEBUFFER,X,e.RENDERBUFFER,$)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Rt(b,v,U){const X=i.get(b);v!==void 0&&J(X.__webglFramebuffer,b,b.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),U!==void 0&&Ut(b)}function Ht(b){const v=b.texture,U=i.get(b),X=i.get(v);b.addEventListener("dispose",R);const $=b.textures,W=b.isWebGLCubeRenderTarget===!0,Mt=$.length>1;if(Mt||(X.__webglTexture===void 0&&(X.__webglTexture=e.createTexture()),X.__version=v.version,a.memory.textures++),W){U.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[nt]=[];for(let ht=0;ht<v.mipmaps.length;ht++)U.__webglFramebuffer[nt][ht]=e.createFramebuffer()}else U.__webglFramebuffer[nt]=e.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let nt=0;nt<v.mipmaps.length;nt++)U.__webglFramebuffer[nt]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(Mt)for(let nt=0,ht=$.length;nt<ht;nt++){const qt=i.get($[nt]);qt.__webglTexture===void 0&&(qt.__webglTexture=e.createTexture(),a.memory.textures++)}if(b.samples>0&&Yt(b)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let nt=0;nt<$.length;nt++){const ht=$[nt];U.__webglColorRenderbuffer[nt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[nt]);const qt=s.convert(ht.format,ht.colorSpace),Q=s.convert(ht.type),dt=E(ht.internalFormat,qt,Q,ht.colorSpace,b.isXRRenderTarget===!0),Lt=kt(b);e.renderbufferStorageMultisample(e.RENDERBUFFER,Lt,dt,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+nt,e.RENDERBUFFER,U.__webglColorRenderbuffer[nt])}e.bindRenderbuffer(e.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=e.createRenderbuffer(),mt(U.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(W){n.bindTexture(e.TEXTURE_CUBE_MAP,X.__webglTexture),_t(e.TEXTURE_CUBE_MAP,v);for(let nt=0;nt<6;nt++)if(v.mipmaps&&v.mipmaps.length>0)for(let ht=0;ht<v.mipmaps.length;ht++)J(U.__webglFramebuffer[nt][ht],b,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ht);else J(U.__webglFramebuffer[nt],b,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);f(v)&&p(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Mt){for(let nt=0,ht=$.length;nt<ht;nt++){const qt=$[nt],Q=i.get(qt);n.bindTexture(e.TEXTURE_2D,Q.__webglTexture),_t(e.TEXTURE_2D,qt),J(U.__webglFramebuffer,b,qt,e.COLOR_ATTACHMENT0+nt,e.TEXTURE_2D,0),f(qt)&&p(e.TEXTURE_2D)}n.unbindTexture()}else{let nt=e.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(nt=b.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(nt,X.__webglTexture),_t(nt,v),v.mipmaps&&v.mipmaps.length>0)for(let ht=0;ht<v.mipmaps.length;ht++)J(U.__webglFramebuffer[ht],b,v,e.COLOR_ATTACHMENT0,nt,ht);else J(U.__webglFramebuffer,b,v,e.COLOR_ATTACHMENT0,nt,0);f(v)&&p(nt),n.unbindTexture()}b.depthBuffer&&Ut(b)}function ie(b){const v=b.textures;for(let U=0,X=v.length;U<X;U++){const $=v[U];if(f($)){const W=b.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,Mt=i.get($).__webglTexture;n.bindTexture(W,Mt),p(W),n.unbindTexture()}}}const Vt=[],w=[];function ln(b){if(b.samples>0){if(Yt(b)===!1){const v=b.textures,U=b.width,X=b.height;let $=e.COLOR_BUFFER_BIT;const W=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Mt=i.get(b),nt=v.length>1;if(nt)for(let ht=0;ht<v.length;ht++)n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let ht=0;ht<v.length;ht++){if(b.resolveDepthBuffer&&(b.depthBuffer&&($|=e.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&($|=e.STENCIL_BUFFER_BIT)),nt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[ht]);const qt=i.get(v[ht]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,qt,0)}e.blitFramebuffer(0,0,U,X,0,0,U,X,$,e.NEAREST),c===!0&&(Vt.length=0,w.length=0,Vt.push(e.COLOR_ATTACHMENT0+ht),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Vt.push(W),w.push(W),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,w)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Vt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),nt)for(let ht=0;ht<v.length;ht++){n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[ht]);const qt=i.get(v[ht]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ht,e.TEXTURE_2D,qt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const v=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[v])}}}function kt(b){return Math.min(r.maxSamples,b.samples)}function Yt(b){const v=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Pt(b){const v=a.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function ue(b,v){const U=b.colorSpace,X=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||U!==Xi&&U!==Ni&&(te.getTransfer(U)===fe?(X!==Hn||$!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}function It(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=M,this.setTexture2D=Y,this.setTexture2DArray=Z,this.setTexture3D=H,this.setTextureCube=K,this.rebindTextures=Rt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Yt}function Fx(e,t){function n(i,r=Ni){let s;const a=te.getTransfer(r);if(i===yi)return e.UNSIGNED_BYTE;if(i===dh)return e.UNSIGNED_SHORT_4_4_4_4;if(i===fh)return e.UNSIGNED_SHORT_5_5_5_1;if(i===tp)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Jf)return e.BYTE;if(i===Qf)return e.SHORT;if(i===Zs)return e.UNSIGNED_SHORT;if(i===uh)return e.INT;if(i===pr)return e.UNSIGNED_INT;if(i===vi)return e.FLOAT;if(i===ea)return e.HALF_FLOAT;if(i===ep)return e.ALPHA;if(i===np)return e.RGB;if(i===Hn)return e.RGBA;if(i===ip)return e.LUMINANCE;if(i===rp)return e.LUMINANCE_ALPHA;if(i===$r)return e.DEPTH_COMPONENT;if(i===ss)return e.DEPTH_STENCIL;if(i===sp)return e.RED;if(i===ph)return e.RED_INTEGER;if(i===ap)return e.RG;if(i===mh)return e.RG_INTEGER;if(i===gh)return e.RGBA_INTEGER;if(i===Qa||i===to||i===eo||i===no)if(a===fe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Qa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Qa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===eo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===no)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dl||i===fl||i===pl||i===ml)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===dl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ml)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gl||i===_l||i===vl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gl||i===_l)return a===fe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===vl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xl||i===yl||i===Ml||i===Sl||i===El||i===bl||i===Tl||i===Al||i===wl||i===Rl||i===Cl||i===Pl||i===Ll||i===Dl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ml)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===El)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Al)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ll)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dl)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===io||i===Il||i===Ul)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===io)return a===fe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Il)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ul)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===op||i===Nl||i===Fl||i===Ol)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===io)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Nl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ol)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rs?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}class Ox extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Vs extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bx={type:"move"};class Nc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const y of t.hand.values()){const f=n.getJointPose(y,i),p=this._getHandJoint(l,y);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,_=.005;l.inputState.pinching&&d>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bx)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Vs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const kx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const r=new Qe,s=t.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Hi({vertexShader:kx,fragmentShader:zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Jn(new Lo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hx extends yr{constructor(t,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,_=null;const y=new Gx,f=n.getContextAttributes();let p=null,E=null;const S=[],T=[],N=new Tt;let R=null;const A=new _n;A.layers.enable(1),A.viewport=new ae;const I=new _n;I.layers.enable(2),I.viewport=new ae;const j=[A,I],g=new Ox;g.layers.enable(1),g.layers.enable(2);let M=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let J=S[V];return J===void 0&&(J=new Nc,S[V]=J),J.getTargetRaySpace()},this.getControllerGrip=function(V){let J=S[V];return J===void 0&&(J=new Nc,S[V]=J),J.getGripSpace()},this.getHand=function(V){let J=S[V];return J===void 0&&(J=new Nc,S[V]=J),J.getHandSpace()};function k(V){const J=T.indexOf(V.inputSource);if(J===-1)return;const mt=S[J];mt!==void 0&&(mt.update(V.inputSource,V.frame,l||a),mt.dispatchEvent({type:V.type,data:V.inputSource}))}function Y(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",Z);for(let V=0;V<S.length;V++){const J=T[V];J!==null&&(T[V]=null,S[V].disconnect(J))}M=null,z=null,y.reset(),t.setRenderTarget(p),m=null,d=null,u=null,r=null,E=null,ee.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",Z),f.xrCompatible!==!0&&await n.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(N),r.renderState.layers===void 0){const J={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new mr(m.framebufferWidth,m.framebufferHeight,{format:Hn,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let J=null,mt=null,lt=null;f.depth&&(lt=f.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=f.stencil?ss:$r,mt=f.stencil?rs:pr);const Ut={colorFormat:n.RGBA8,depthFormat:lt,scaleFactor:s};u=new XRWebGLBinding(r,n),d=u.createProjectionLayer(Ut),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new mr(d.textureWidth,d.textureHeight,{format:Hn,type:yi,depthTexture:new Mp(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(V){for(let J=0;J<V.removed.length;J++){const mt=V.removed[J],lt=T.indexOf(mt);lt>=0&&(T[lt]=null,S[lt].disconnect(mt))}for(let J=0;J<V.added.length;J++){const mt=V.added[J];let lt=T.indexOf(mt);if(lt===-1){for(let Rt=0;Rt<S.length;Rt++)if(Rt>=T.length){T.push(mt),lt=Rt;break}else if(T[Rt]===null){T[Rt]=mt,lt=Rt;break}if(lt===-1)break}const Ut=S[lt];Ut&&Ut.connect(mt)}}const H=new C,K=new C;function G(V,J,mt){H.setFromMatrixPosition(J.matrixWorld),K.setFromMatrixPosition(mt.matrixWorld);const lt=H.distanceTo(K),Ut=J.projectionMatrix.elements,Rt=mt.projectionMatrix.elements,Ht=Ut[14]/(Ut[10]-1),ie=Ut[14]/(Ut[10]+1),Vt=(Ut[9]+1)/Ut[5],w=(Ut[9]-1)/Ut[5],ln=(Ut[8]-1)/Ut[0],kt=(Rt[8]+1)/Rt[0],Yt=Ht*ln,Pt=Ht*kt,ue=lt/(-ln+kt),It=ue*-ln;if(J.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(It),V.translateZ(ue),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ut[10]===-1)V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const b=Ht+ue,v=ie+ue,U=Yt-It,X=Pt+(lt-It),$=Vt*ie/v*b,W=w*ie/v*b;V.projectionMatrix.makePerspective(U,X,$,W,b,v),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function ot(V,J){J===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(J.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let J=V.near,mt=V.far;y.texture!==null&&(y.depthNear>0&&(J=y.depthNear),y.depthFar>0&&(mt=y.depthFar)),g.near=I.near=A.near=J,g.far=I.far=A.far=mt,(M!==g.near||z!==g.far)&&(r.updateRenderState({depthNear:g.near,depthFar:g.far}),M=g.near,z=g.far);const lt=V.parent,Ut=g.cameras;ot(g,lt);for(let Rt=0;Rt<Ut.length;Rt++)ot(Ut[Rt],lt);Ut.length===2?G(g,A,I):g.projectionMatrix.copy(A.projectionMatrix),ct(V,g,lt)};function ct(V,J,mt){mt===null?V.matrix.copy(J.matrixWorld):(V.matrix.copy(mt.matrixWorld),V.matrix.invert(),V.matrix.multiply(J.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=kl*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(g)};let _t=null;function Kt(V,J){if(h=J.getViewerPose(l||a),_=J,h!==null){const mt=h.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let lt=!1;mt.length!==g.cameras.length&&(g.cameras.length=0,lt=!0);for(let Rt=0;Rt<mt.length;Rt++){const Ht=mt[Rt];let ie=null;if(m!==null)ie=m.getViewport(Ht);else{const w=u.getViewSubImage(d,Ht);ie=w.viewport,Rt===0&&(t.setRenderTargetTextures(E,w.colorTexture,d.ignoreDepthValues?void 0:w.depthStencilTexture),t.setRenderTarget(E))}let Vt=j[Rt];Vt===void 0&&(Vt=new _n,Vt.layers.enable(Rt),Vt.viewport=new ae,j[Rt]=Vt),Vt.matrix.fromArray(Ht.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Ht.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(ie.x,ie.y,ie.width,ie.height),Rt===0&&(g.matrix.copy(Vt.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),lt===!0&&g.cameras.push(Vt)}const Ut=r.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const Rt=u.getDepthInformation(mt[0]);Rt&&Rt.isValid&&Rt.texture&&y.init(t,Rt,r.renderState)}}for(let mt=0;mt<S.length;mt++){const lt=T[mt],Ut=S[mt];lt!==null&&Ut!==void 0&&Ut.update(lt,J,l||a)}_t&&_t(V,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),_=null}const ee=new yp;ee.setAnimationLoop(Kt),this.setAnimationLoop=function(V){_t=V},this.dispose=function(){}}}const tr=new ei,Vx=new le;function Wx(e,t){function n(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function i(f,p){p.color.getRGB(f.fogColor.value,_p(e)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,E,S,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),u(f,p)):p.isMeshPhongMaterial?(s(f,p),h(f,p)):p.isMeshStandardMaterial?(s(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,T)):p.isMeshMatcapMaterial?(s(f,p),_(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),y(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?c(f,p,E,S):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,n(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,n(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,n(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===on&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,n(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===on&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,n(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,n(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const E=t.get(p),S=E.envMap,T=E.envMapRotation;S&&(f.envMap.value=S,tr.copy(T),tr.x*=-1,tr.y*=-1,tr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),f.envMapRotation.value.setFromMatrix4(Vx.makeRotationFromEuler(tr)),f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,n(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,E,S){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*E,f.scale.value=S*.5,p.map&&(f.map.value=p.map,n(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,n(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,n(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,n(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function u(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,E){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=E.texture,f.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,p){p.matcap&&(f.matcap.value=p.matcap)}function y(f,p){const E=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(E.matrixWorld),f.nearDistance.value=E.shadow.camera.near,f.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Xx(e,t,n,i){let r={},s={},a=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,S){const T=S.program;i.uniformBlockBinding(E,T)}function l(E,S){let T=r[E.id];T===void 0&&(_(E),T=h(E),r[E.id]=T,E.addEventListener("dispose",f));const N=S.program;i.updateUBOMapping(E,N);const R=t.render.frame;s[E.id]!==R&&(d(E),s[E.id]=R)}function h(E){const S=u();E.__bindingPointIndex=S;const T=e.createBuffer(),N=E.__size,R=E.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,N,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,S,T),T}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const S=r[E.id],T=E.uniforms,N=E.__cache;e.bindBuffer(e.UNIFORM_BUFFER,S);for(let R=0,A=T.length;R<A;R++){const I=Array.isArray(T[R])?T[R]:[T[R]];for(let j=0,g=I.length;j<g;j++){const M=I[j];if(m(M,R,j,N)===!0){const z=M.__offset,k=Array.isArray(M.value)?M.value:[M.value];let Y=0;for(let Z=0;Z<k.length;Z++){const H=k[Z],K=y(H);typeof H=="number"||typeof H=="boolean"?(M.__data[0]=H,e.bufferSubData(e.UNIFORM_BUFFER,z+Y,M.__data)):H.isMatrix3?(M.__data[0]=H.elements[0],M.__data[1]=H.elements[1],M.__data[2]=H.elements[2],M.__data[3]=0,M.__data[4]=H.elements[3],M.__data[5]=H.elements[4],M.__data[6]=H.elements[5],M.__data[7]=0,M.__data[8]=H.elements[6],M.__data[9]=H.elements[7],M.__data[10]=H.elements[8],M.__data[11]=0):(H.toArray(M.__data,Y),Y+=K.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,z,M.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(E,S,T,N){const R=E.value,A=S+"_"+T;if(N[A]===void 0)return typeof R=="number"||typeof R=="boolean"?N[A]=R:N[A]=R.clone(),!0;{const I=N[A];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return N[A]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function _(E){const S=E.uniforms;let T=0;const N=16;for(let A=0,I=S.length;A<I;A++){const j=Array.isArray(S[A])?S[A]:[S[A]];for(let g=0,M=j.length;g<M;g++){const z=j[g],k=Array.isArray(z.value)?z.value:[z.value];for(let Y=0,Z=k.length;Y<Z;Y++){const H=k[Y],K=y(H),G=T%N,ot=G%K.boundary,ct=G+ot;T+=ot,ct!==0&&N-ct<K.storage&&(T+=N-ct),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=T,T+=K.storage}}}const R=T%N;return R>0&&(T+=N-R),E.__size=T,E.__cache={},this}function y(E){const S={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function f(E){const S=E.target;S.removeEventListener("dispose",f);const T=a.indexOf(S.__bindingPointIndex);a.splice(T,1),e.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(const E in r)e.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}class Yx{constructor(t={}){const{canvas:n=D0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),_=new Int32Array(4);let y=null,f=null;const p=[],E=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Bi,this.toneMappingExposure=1;const S=this;let T=!1,N=0,R=0,A=null,I=-1,j=null;const g=new ae,M=new ae;let z=null;const k=new Bt(0);let Y=0,Z=n.width,H=n.height,K=1,G=null,ot=null;const ct=new ae(0,0,Z,H),_t=new ae(0,0,Z,H);let Kt=!1;const ee=new xh;let V=!1,J=!1;const mt=new le,lt=new le,Ut=new C,Rt=new ae,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function Vt(){return A===null?K:1}let w=i;function ln(x,L){return n.getContext(x,L)}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${hh}`),n.addEventListener("webglcontextlost",q,!1),n.addEventListener("webglcontextrestored",it,!1),n.addEventListener("webglcontextcreationerror",at,!1),w===null){const L="webgl2";if(w=ln(L,x),w===null)throw ln(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let kt,Yt,Pt,ue,It,b,v,U,X,$,W,Mt,nt,ht,qt,Q,dt,Lt,Dt,ft,zt,Nt,he,P;function st(){kt=new $2(w),kt.init(),Nt=new Fx(w,kt),Yt=new W2(w,kt,t,Nt),Pt=new Ix(w),Yt.reverseDepthBuffer&&Pt.buffers.depth.setReversed(!0),ue=new tv(w),It=new vx,b=new Nx(w,kt,Pt,It,Yt,Nt,ue),v=new Y2(S),U=new Z2(S),X=new a_(w),he=new H2(w,X),$=new J2(w,X,ue,he),W=new nv(w,$,X,ue),Dt=new ev(w,Yt,b),Q=new X2(It),Mt=new _x(S,v,U,kt,Yt,he,Q),nt=new Wx(S,It),ht=new yx,qt=new Ax(kt),Lt=new G2(S,v,U,Pt,W,d,c),dt=new Lx(S,W,Yt),P=new Xx(w,ue,Yt,Pt),ft=new V2(w,kt,ue),zt=new Q2(w,kt,ue),ue.programs=Mt.programs,S.capabilities=Yt,S.extensions=kt,S.properties=It,S.renderLists=ht,S.shadowMap=dt,S.state=Pt,S.info=ue}st();const B=new Hx(S,w);this.xr=B,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const x=kt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=kt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(x){x!==void 0&&(K=x,this.setSize(Z,H,!1))},this.getSize=function(x){return x.set(Z,H)},this.setSize=function(x,L,F=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=x,H=L,n.width=Math.floor(x*K),n.height=Math.floor(L*K),F===!0&&(n.style.width=x+"px",n.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(Z*K,H*K).floor()},this.setDrawingBufferSize=function(x,L,F){Z=x,H=L,K=F,n.width=Math.floor(x*F),n.height=Math.floor(L*F),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(g)},this.getViewport=function(x){return x.copy(ct)},this.setViewport=function(x,L,F,O){x.isVector4?ct.set(x.x,x.y,x.z,x.w):ct.set(x,L,F,O),Pt.viewport(g.copy(ct).multiplyScalar(K).round())},this.getScissor=function(x){return x.copy(_t)},this.setScissor=function(x,L,F,O){x.isVector4?_t.set(x.x,x.y,x.z,x.w):_t.set(x,L,F,O),Pt.scissor(M.copy(_t).multiplyScalar(K).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(x){Pt.setScissorTest(Kt=x)},this.setOpaqueSort=function(x){G=x},this.setTransparentSort=function(x){ot=x},this.getClearColor=function(x){return x.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(x=!0,L=!0,F=!0){let O=0;if(x){let D=!1;if(A!==null){const tt=A.texture.format;D=tt===gh||tt===mh||tt===ph}if(D){const tt=A.texture.type,rt=tt===yi||tt===pr||tt===Zs||tt===rs||tt===dh||tt===fh,pt=Lt.getClearColor(),gt=Lt.getClearAlpha(),wt=pt.r,Ct=pt.g,St=pt.b;rt?(m[0]=wt,m[1]=Ct,m[2]=St,m[3]=gt,w.clearBufferuiv(w.COLOR,0,m)):(_[0]=wt,_[1]=Ct,_[2]=St,_[3]=gt,w.clearBufferiv(w.COLOR,0,_))}else O|=w.COLOR_BUFFER_BIT}L&&(O|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),F&&(O|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",q,!1),n.removeEventListener("webglcontextrestored",it,!1),n.removeEventListener("webglcontextcreationerror",at,!1),ht.dispose(),qt.dispose(),It.dispose(),v.dispose(),U.dispose(),W.dispose(),he.dispose(),P.dispose(),Mt.dispose(),B.dispose(),B.removeEventListener("sessionstart",yu),B.removeEventListener("sessionend",Mu),ji.stop()};function q(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function it(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const x=ue.autoReset,L=dt.enabled,F=dt.autoUpdate,O=dt.needsUpdate,D=dt.type;st(),ue.autoReset=x,dt.enabled=L,dt.autoUpdate=F,dt.needsUpdate=O,dt.type=D}function at(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Wt(x){const L=x.target;L.removeEventListener("dispose",Wt),Ae(L)}function Ae(x){en(x),It.remove(x)}function en(x){const L=It.get(x).programs;L!==void 0&&(L.forEach(function(F){Mt.releaseProgram(F)}),x.isShaderMaterial&&Mt.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,F,O,D,tt){L===null&&(L=Ht);const rt=D.isMesh&&D.matrixWorld.determinant()<0,pt=kg(x,L,F,O,D);Pt.setMaterial(O,rt);let gt=F.index,wt=1;if(O.wireframe===!0){if(gt=$.getWireframeAttribute(F),gt===void 0)return;wt=2}const Ct=F.drawRange,St=F.attributes.position;let ne=Ct.start*wt,de=(Ct.start+Ct.count)*wt;tt!==null&&(ne=Math.max(ne,tt.start*wt),de=Math.min(de,(tt.start+tt.count)*wt)),gt!==null?(ne=Math.max(ne,0),de=Math.min(de,gt.count)):St!=null&&(ne=Math.max(ne,0),de=Math.min(de,St.count));const Me=de-ne;if(Me<0||Me===1/0)return;he.setup(D,O,pt,F,gt);let hn,Jt=ft;if(gt!==null&&(hn=X.get(gt),Jt=zt,Jt.setIndex(hn)),D.isMesh)O.wireframe===!0?(Pt.setLineWidth(O.wireframeLinewidth*Vt()),Jt.setMode(w.LINES)):Jt.setMode(w.TRIANGLES);else if(D.isLine){let Et=O.linewidth;Et===void 0&&(Et=1),Pt.setLineWidth(Et*Vt()),D.isLineSegments?Jt.setMode(w.LINES):D.isLineLoop?Jt.setMode(w.LINE_LOOP):Jt.setMode(w.LINE_STRIP)}else D.isPoints?Jt.setMode(w.POINTS):D.isSprite&&Jt.setMode(w.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Jt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Et=D._multiDrawStarts,Ge=D._multiDrawCounts,Qt=D._multiDrawCount,Bn=gt?X.get(gt).bytesPerElement:1,br=It.get(O).currentProgram.getUniforms();for(let un=0;un<Qt;un++)br.setValue(w,"_gl_DrawID",un),Jt.render(Et[un]/Bn,Ge[un])}else if(D.isInstancedMesh)Jt.renderInstances(ne,Me,D.count);else if(F.isInstancedBufferGeometry){const Et=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Ge=Math.min(F.instanceCount,Et);Jt.renderInstances(ne,Me,Ge)}else Jt.render(ne,Me)};function Zt(x,L,F){x.transparent===!0&&x.side===gi&&x.forceSinglePass===!1?(x.side=on,x.needsUpdate=!0,ma(x,L,F),x.side=Gi,x.needsUpdate=!0,ma(x,L,F),x.side=gi):ma(x,L,F)}this.compile=function(x,L,F=null){F===null&&(F=x),f=qt.get(F),f.init(L),E.push(f),F.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),x!==F&&x.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights();const O=new Set;return x.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const tt=D.material;if(tt)if(Array.isArray(tt))for(let rt=0;rt<tt.length;rt++){const pt=tt[rt];Zt(pt,F,D),O.add(pt)}else Zt(tt,F,D),O.add(tt)}),E.pop(),f=null,O},this.compileAsync=function(x,L,F=null){const O=this.compile(x,L,F);return new Promise(D=>{function tt(){if(O.forEach(function(rt){It.get(rt).currentProgram.isReady()&&O.delete(rt)}),O.size===0){D(x);return}setTimeout(tt,10)}kt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let nn=null;function ci(x){nn&&nn(x)}function yu(){ji.stop()}function Mu(){ji.start()}const ji=new yp;ji.setAnimationLoop(ci),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(x){nn=x,B.setAnimationLoop(x),x===null?ji.stop():ji.start()},B.addEventListener("sessionstart",yu),B.addEventListener("sessionend",Mu),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(L),L=B.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,L,A),f=qt.get(x,E.length),f.init(L),E.push(f),lt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),ee.setFromProjectionMatrix(lt),J=this.localClippingEnabled,V=Q.init(this.clippingPlanes,J),y=ht.get(x,p.length),y.init(),p.push(y),B.enabled===!0&&B.isPresenting===!0){const tt=S.xr.getDepthSensingMesh();tt!==null&&nc(tt,L,-1/0,S.sortObjects)}nc(x,L,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(G,ot),ie=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,ie&&Lt.addToRenderList(y,x),this.info.render.frame++,V===!0&&Q.beginShadows();const F=f.state.shadowsArray;dt.render(F,x,L),V===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=y.opaque,D=y.transmissive;if(f.setupLights(),L.isArrayCamera){const tt=L.cameras;if(D.length>0)for(let rt=0,pt=tt.length;rt<pt;rt++){const gt=tt[rt];Eu(O,D,x,gt)}ie&&Lt.render(x);for(let rt=0,pt=tt.length;rt<pt;rt++){const gt=tt[rt];Su(y,x,gt,gt.viewport)}}else D.length>0&&Eu(O,D,x,L),ie&&Lt.render(x),Su(y,x,L);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),x.isScene===!0&&x.onAfterRender(S,x,L),he.resetDefaultState(),I=-1,j=null,E.pop(),E.length>0?(f=E[E.length-1],V===!0&&Q.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function nc(x,L,F,O){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ee.intersectsSprite(x)){O&&Rt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(lt);const rt=W.update(x),pt=x.material;pt.visible&&y.push(x,rt,pt,F,Rt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ee.intersectsObject(x))){const rt=W.update(x),pt=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Rt.copy(x.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),Rt.copy(rt.boundingSphere.center)),Rt.applyMatrix4(x.matrixWorld).applyMatrix4(lt)),Array.isArray(pt)){const gt=rt.groups;for(let wt=0,Ct=gt.length;wt<Ct;wt++){const St=gt[wt],ne=pt[St.materialIndex];ne&&ne.visible&&y.push(x,rt,ne,F,Rt.z,St)}}else pt.visible&&y.push(x,rt,pt,F,Rt.z,null)}}const tt=x.children;for(let rt=0,pt=tt.length;rt<pt;rt++)nc(tt[rt],L,F,O)}function Su(x,L,F,O){const D=x.opaque,tt=x.transmissive,rt=x.transparent;f.setupLightsView(F),V===!0&&Q.setGlobalState(S.clippingPlanes,F),O&&Pt.viewport(g.copy(O)),D.length>0&&pa(D,L,F),tt.length>0&&pa(tt,L,F),rt.length>0&&pa(rt,L,F),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Eu(x,L,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[O.id]===void 0&&(f.state.transmissionRenderTarget[O.id]=new mr(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?ea:yi,minFilter:ar,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const tt=f.state.transmissionRenderTarget[O.id],rt=O.viewport||g;tt.setSize(rt.z,rt.w);const pt=S.getRenderTarget();S.setRenderTarget(tt),S.getClearColor(k),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),ie&&Lt.render(F);const gt=S.toneMapping;S.toneMapping=Bi;const wt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),f.setupLightsView(O),V===!0&&Q.setGlobalState(S.clippingPlanes,O),pa(x,F,O),b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let St=0,ne=L.length;St<ne;St++){const de=L[St],Me=de.object,hn=de.geometry,Jt=de.material,Et=de.group;if(Jt.side===gi&&Me.layers.test(O.layers)){const Ge=Jt.side;Jt.side=on,Jt.needsUpdate=!0,bu(Me,F,O,hn,Jt,Et),Jt.side=Ge,Jt.needsUpdate=!0,Ct=!0}}Ct===!0&&(b.updateMultisampleRenderTarget(tt),b.updateRenderTargetMipmap(tt))}S.setRenderTarget(pt),S.setClearColor(k,Y),wt!==void 0&&(O.viewport=wt),S.toneMapping=gt}function pa(x,L,F){const O=L.isScene===!0?L.overrideMaterial:null;for(let D=0,tt=x.length;D<tt;D++){const rt=x[D],pt=rt.object,gt=rt.geometry,wt=O===null?rt.material:O,Ct=rt.group;pt.layers.test(F.layers)&&bu(pt,L,F,gt,wt,Ct)}}function bu(x,L,F,O,D,tt){x.onBeforeRender(S,L,F,O,D,tt),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),D.onBeforeRender(S,L,F,O,x,tt),D.transparent===!0&&D.side===gi&&D.forceSinglePass===!1?(D.side=on,D.needsUpdate=!0,S.renderBufferDirect(F,L,O,D,x,tt),D.side=Gi,D.needsUpdate=!0,S.renderBufferDirect(F,L,O,D,x,tt),D.side=gi):S.renderBufferDirect(F,L,O,D,x,tt),x.onAfterRender(S,L,F,O,D,tt)}function ma(x,L,F){L.isScene!==!0&&(L=Ht);const O=It.get(x),D=f.state.lights,tt=f.state.shadowsArray,rt=D.state.version,pt=Mt.getParameters(x,D.state,tt,L,F),gt=Mt.getProgramCacheKey(pt);let wt=O.programs;O.environment=x.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(x.isMeshStandardMaterial?U:v).get(x.envMap||O.environment),O.envMapRotation=O.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,wt===void 0&&(x.addEventListener("dispose",Wt),wt=new Map,O.programs=wt);let Ct=wt.get(gt);if(Ct!==void 0){if(O.currentProgram===Ct&&O.lightsStateVersion===rt)return Au(x,pt),Ct}else pt.uniforms=Mt.getUniforms(x),x.onBeforeCompile(pt,S),Ct=Mt.acquireProgram(pt,gt),wt.set(gt,Ct),O.uniforms=pt.uniforms;const St=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(St.clippingPlanes=Q.uniform),Au(x,pt),O.needsLights=Gg(x),O.lightsStateVersion=rt,O.needsLights&&(St.ambientLightColor.value=D.state.ambient,St.lightProbe.value=D.state.probe,St.directionalLights.value=D.state.directional,St.directionalLightShadows.value=D.state.directionalShadow,St.spotLights.value=D.state.spot,St.spotLightShadows.value=D.state.spotShadow,St.rectAreaLights.value=D.state.rectArea,St.ltc_1.value=D.state.rectAreaLTC1,St.ltc_2.value=D.state.rectAreaLTC2,St.pointLights.value=D.state.point,St.pointLightShadows.value=D.state.pointShadow,St.hemisphereLights.value=D.state.hemi,St.directionalShadowMap.value=D.state.directionalShadowMap,St.directionalShadowMatrix.value=D.state.directionalShadowMatrix,St.spotShadowMap.value=D.state.spotShadowMap,St.spotLightMatrix.value=D.state.spotLightMatrix,St.spotLightMap.value=D.state.spotLightMap,St.pointShadowMap.value=D.state.pointShadowMap,St.pointShadowMatrix.value=D.state.pointShadowMatrix),O.currentProgram=Ct,O.uniformsList=null,Ct}function Tu(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=ao.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function Au(x,L){const F=It.get(x);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.batchingColor=L.batchingColor,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.instancingMorph=L.instancingMorph,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function kg(x,L,F,O,D){L.isScene!==!0&&(L=Ht),b.resetTextureUnits();const tt=L.fog,rt=O.isMeshStandardMaterial?L.environment:null,pt=A===null?S.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Xi,gt=(O.isMeshStandardMaterial?U:v).get(O.envMap||rt),wt=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ct=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),St=!!F.morphAttributes.position,ne=!!F.morphAttributes.normal,de=!!F.morphAttributes.color;let Me=Bi;O.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Me=S.toneMapping);const hn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Jt=hn!==void 0?hn.length:0,Et=It.get(O),Ge=f.state.lights;if(V===!0&&(J===!0||x!==j)){const An=x===j&&O.id===I;Q.setState(O,x,An)}let Qt=!1;O.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Ge.state.version||Et.outputColorSpace!==pt||D.isBatchedMesh&&Et.batching===!1||!D.isBatchedMesh&&Et.batching===!0||D.isBatchedMesh&&Et.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Et.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Et.instancing===!1||!D.isInstancedMesh&&Et.instancing===!0||D.isSkinnedMesh&&Et.skinning===!1||!D.isSkinnedMesh&&Et.skinning===!0||D.isInstancedMesh&&Et.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Et.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Et.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Et.instancingMorph===!1&&D.morphTexture!==null||Et.envMap!==gt||O.fog===!0&&Et.fog!==tt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Q.numPlanes||Et.numIntersection!==Q.numIntersection)||Et.vertexAlphas!==wt||Et.vertexTangents!==Ct||Et.morphTargets!==St||Et.morphNormals!==ne||Et.morphColors!==de||Et.toneMapping!==Me||Et.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,Et.__version=O.version);let Bn=Et.currentProgram;Qt===!0&&(Bn=ma(O,L,D));let br=!1,un=!1,ic=!1;const be=Bn.getUniforms(),Ti=Et.uniforms;if(Pt.useProgram(Bn.program)&&(br=!0,un=!0,ic=!0),O.id!==I&&(I=O.id,un=!0),br||j!==x){Yt.reverseDepthBuffer?(mt.copy(x.projectionMatrix),U0(mt),N0(mt),be.setValue(w,"projectionMatrix",mt)):be.setValue(w,"projectionMatrix",x.projectionMatrix),be.setValue(w,"viewMatrix",x.matrixWorldInverse);const An=be.map.cameraPosition;An!==void 0&&An.setValue(w,Ut.setFromMatrixPosition(x.matrixWorld)),Yt.logarithmicDepthBuffer&&be.setValue(w,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&be.setValue(w,"isOrthographic",x.isOrthographicCamera===!0),j!==x&&(j=x,un=!0,ic=!0)}if(D.isSkinnedMesh){be.setOptional(w,D,"bindMatrix"),be.setOptional(w,D,"bindMatrixInverse");const An=D.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),be.setValue(w,"boneTexture",An.boneTexture,b))}D.isBatchedMesh&&(be.setOptional(w,D,"batchingTexture"),be.setValue(w,"batchingTexture",D._matricesTexture,b),be.setOptional(w,D,"batchingIdTexture"),be.setValue(w,"batchingIdTexture",D._indirectTexture,b),be.setOptional(w,D,"batchingColorTexture"),D._colorsTexture!==null&&be.setValue(w,"batchingColorTexture",D._colorsTexture,b));const rc=F.morphAttributes;if((rc.position!==void 0||rc.normal!==void 0||rc.color!==void 0)&&Dt.update(D,F,Bn),(un||Et.receiveShadow!==D.receiveShadow)&&(Et.receiveShadow=D.receiveShadow,be.setValue(w,"receiveShadow",D.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Ti.envMap.value=gt,Ti.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(Ti.envMapIntensity.value=L.environmentIntensity),un&&(be.setValue(w,"toneMappingExposure",S.toneMappingExposure),Et.needsLights&&zg(Ti,ic),tt&&O.fog===!0&&nt.refreshFogUniforms(Ti,tt),nt.refreshMaterialUniforms(Ti,O,K,H,f.state.transmissionRenderTarget[x.id]),ao.upload(w,Tu(Et),Ti,b)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ao.upload(w,Tu(Et),Ti,b),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&be.setValue(w,"center",D.center),be.setValue(w,"modelViewMatrix",D.modelViewMatrix),be.setValue(w,"normalMatrix",D.normalMatrix),be.setValue(w,"modelMatrix",D.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const An=O.uniformsGroups;for(let sc=0,Hg=An.length;sc<Hg;sc++){const wu=An[sc];P.update(wu,Bn),P.bind(wu,Bn)}}return Bn}function zg(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function Gg(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(x,L,F){It.get(x.texture).__webglTexture=L,It.get(x.depthTexture).__webglTexture=F;const O=It.get(x);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,L){const F=It.get(x);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,F=0){A=x,N=L,R=F;let O=!0,D=null,tt=!1,rt=!1;if(x){const gt=It.get(x);if(gt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(w.FRAMEBUFFER,null),O=!1;else if(gt.__webglFramebuffer===void 0)b.setupRenderTarget(x);else if(gt.__hasExternalTextures)b.rebindTextures(x,It.get(x.texture).__webglTexture,It.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const St=x.depthTexture;if(gt.__boundDepthTexture!==St){if(St!==null&&It.has(St)&&(x.width!==St.image.width||x.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(x)}}const wt=x.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(rt=!0);const Ct=It.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ct[L])?D=Ct[L][F]:D=Ct[L],tt=!0):x.samples>0&&b.useMultisampledRTT(x)===!1?D=It.get(x).__webglMultisampledFramebuffer:Array.isArray(Ct)?D=Ct[F]:D=Ct,g.copy(x.viewport),M.copy(x.scissor),z=x.scissorTest}else g.copy(ct).multiplyScalar(K).floor(),M.copy(_t).multiplyScalar(K).floor(),z=Kt;if(Pt.bindFramebuffer(w.FRAMEBUFFER,D)&&O&&Pt.drawBuffers(x,D),Pt.viewport(g),Pt.scissor(M),Pt.setScissorTest(z),tt){const gt=It.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+L,gt.__webglTexture,F)}else if(rt){const gt=It.get(x.texture),wt=L||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,gt.__webglTexture,F||0,wt)}I=-1},this.readRenderTargetPixels=function(x,L,F,O,D,tt,rt){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=It.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&rt!==void 0&&(pt=pt[rt]),pt){Pt.bindFramebuffer(w.FRAMEBUFFER,pt);try{const gt=x.texture,wt=gt.format,Ct=gt.type;if(!Yt.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-O&&F>=0&&F<=x.height-D&&w.readPixels(L,F,O,D,Nt.convert(wt),Nt.convert(Ct),tt)}finally{const gt=A!==null?It.get(A).__webglFramebuffer:null;Pt.bindFramebuffer(w.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(x,L,F,O,D,tt,rt){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=It.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&rt!==void 0&&(pt=pt[rt]),pt){const gt=x.texture,wt=gt.format,Ct=gt.type;if(!Yt.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=x.width-O&&F>=0&&F<=x.height-D){Pt.bindFramebuffer(w.FRAMEBUFFER,pt);const St=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,St),w.bufferData(w.PIXEL_PACK_BUFFER,tt.byteLength,w.STREAM_READ),w.readPixels(L,F,O,D,Nt.convert(wt),Nt.convert(Ct),0);const ne=A!==null?It.get(A).__webglFramebuffer:null;Pt.bindFramebuffer(w.FRAMEBUFFER,ne);const de=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await I0(w,de,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,St),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,tt),w.deleteBuffer(St),w.deleteSync(de),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,L=null,F=0){x.isTexture!==!0&&(so("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,x=arguments[1]);const O=Math.pow(2,-F),D=Math.floor(x.image.width*O),tt=Math.floor(x.image.height*O),rt=L!==null?L.x:0,pt=L!==null?L.y:0;b.setTexture2D(x,0),w.copyTexSubImage2D(w.TEXTURE_2D,F,0,0,rt,pt,D,tt),Pt.unbindTexture()},this.copyTextureToTexture=function(x,L,F=null,O=null,D=0){x.isTexture!==!0&&(so("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,x=arguments[1],L=arguments[2],D=arguments[3]||0,F=null);let tt,rt,pt,gt,wt,Ct;F!==null?(tt=F.max.x-F.min.x,rt=F.max.y-F.min.y,pt=F.min.x,gt=F.min.y):(tt=x.image.width,rt=x.image.height,pt=0,gt=0),O!==null?(wt=O.x,Ct=O.y):(wt=0,Ct=0);const St=Nt.convert(L.format),ne=Nt.convert(L.type);b.setTexture2D(L,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,L.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,L.unpackAlignment);const de=w.getParameter(w.UNPACK_ROW_LENGTH),Me=w.getParameter(w.UNPACK_IMAGE_HEIGHT),hn=w.getParameter(w.UNPACK_SKIP_PIXELS),Jt=w.getParameter(w.UNPACK_SKIP_ROWS),Et=w.getParameter(w.UNPACK_SKIP_IMAGES),Ge=x.isCompressedTexture?x.mipmaps[D]:x.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,Ge.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ge.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,pt),w.pixelStorei(w.UNPACK_SKIP_ROWS,gt),x.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,D,wt,Ct,tt,rt,St,ne,Ge.data):x.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,D,wt,Ct,Ge.width,Ge.height,St,Ge.data):w.texSubImage2D(w.TEXTURE_2D,D,wt,Ct,tt,rt,St,ne,Ge),w.pixelStorei(w.UNPACK_ROW_LENGTH,de),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Me),w.pixelStorei(w.UNPACK_SKIP_PIXELS,hn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Jt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Et),D===0&&L.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),Pt.unbindTexture()},this.copyTextureToTexture3D=function(x,L,F=null,O=null,D=0){x.isTexture!==!0&&(so("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,x=arguments[2],L=arguments[3],D=arguments[4]||0);let tt,rt,pt,gt,wt,Ct,St,ne,de;const Me=x.isCompressedTexture?x.mipmaps[D]:x.image;F!==null?(tt=F.max.x-F.min.x,rt=F.max.y-F.min.y,pt=F.max.z-F.min.z,gt=F.min.x,wt=F.min.y,Ct=F.min.z):(tt=Me.width,rt=Me.height,pt=Me.depth,gt=0,wt=0,Ct=0),O!==null?(St=O.x,ne=O.y,de=O.z):(St=0,ne=0,de=0);const hn=Nt.convert(L.format),Jt=Nt.convert(L.type);let Et;if(L.isData3DTexture)b.setTexture3D(L,0),Et=w.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)b.setTexture2DArray(L,0),Et=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,L.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,L.unpackAlignment);const Ge=w.getParameter(w.UNPACK_ROW_LENGTH),Qt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Bn=w.getParameter(w.UNPACK_SKIP_PIXELS),br=w.getParameter(w.UNPACK_SKIP_ROWS),un=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Me.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Me.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,gt),w.pixelStorei(w.UNPACK_SKIP_ROWS,wt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ct),x.isDataTexture||x.isData3DTexture?w.texSubImage3D(Et,D,St,ne,de,tt,rt,pt,hn,Jt,Me.data):L.isCompressedArrayTexture?w.compressedTexSubImage3D(Et,D,St,ne,de,tt,rt,pt,hn,Me.data):w.texSubImage3D(Et,D,St,ne,de,tt,rt,pt,hn,Jt,Me),w.pixelStorei(w.UNPACK_ROW_LENGTH,Ge),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Qt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Bn),w.pixelStorei(w.UNPACK_SKIP_ROWS,br),w.pixelStorei(w.UNPACK_SKIP_IMAGES,un),D===0&&L.generateMipmaps&&w.generateMipmap(Et),Pt.unbindTexture()},this.initRenderTarget=function(x){It.get(x).__webglFramebuffer===void 0&&b.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?b.setTextureCube(x,0):x.isData3DTexture?b.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?b.setTexture2DArray(x,0):b.setTexture2D(x,0),Pt.unbindTexture()},this.resetState=function(){N=0,R=0,A=null,Pt.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=t===_h?"display-p3":"srgb",n.unpackColorSpace=te.workingColorSpace===Po?"display-p3":"srgb"}}class Mh{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=n}clone(){return new Mh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qx extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class jx{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Bl,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=n.array[i+r];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ze=new C;class _o{constructor(t,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)Ze.fromBufferAttribute(this,n),Ze.applyMatrix4(t),this.setXYZ(n,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ze.fromBufferAttribute(this,n),Ze.applyNormalMatrix(t),this.setXYZ(n,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ze.fromBufferAttribute(this,n),Ze.transformDirection(t),this.setXYZ(n,Ze.x,Ze.y,Ze.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=$n(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=re(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=$n(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=$n(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=$n(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=$n(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=re(n,this.array),i=re(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,n,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=re(n,this.array),i=re(i,this.array),r=re(r,this.array),s=re(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new tn(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new _o(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Gl extends Yi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let kr;const Fs=new C,zr=new C,Gr=new C,Hr=new Tt,Os=new Tt,Ap=new le,Oa=new C,Bs=new C,Ba=new C,yd=new Tt,Fc=new Tt,Md=new Tt;class Sd extends He{constructor(t=new Gl){if(super(),this.isSprite=!0,this.type="Sprite",kr===void 0){kr=new En;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jx(n,5);kr.setIndex([0,1,2,0,2,3]),kr.setAttribute("position",new _o(i,3,0,!1)),kr.setAttribute("uv",new _o(i,2,3,!1))}this.geometry=kr,this.material=t,this.center=new Tt(.5,.5)}raycast(t,n){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zr.setFromMatrixScale(this.matrixWorld),Ap.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zr.multiplyScalar(-Gr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;ka(Oa.set(-.5,-.5,0),Gr,a,zr,r,s),ka(Bs.set(.5,-.5,0),Gr,a,zr,r,s),ka(Ba.set(.5,.5,0),Gr,a,zr,r,s),yd.set(0,0),Fc.set(1,0),Md.set(1,1);let o=t.ray.intersectTriangle(Oa,Bs,Ba,!1,Fs);if(o===null&&(ka(Bs.set(-.5,.5,0),Gr,a,zr,r,s),Fc.set(0,1),o=t.ray.intersectTriangle(Oa,Ba,Bs,!1,Fs),o===null))return;const c=t.ray.origin.distanceTo(Fs);c<t.near||c>t.far||n.push({distance:c,point:Fs.clone(),uv:Dn.getInterpolation(Fs,Oa,Bs,Ba,yd,Fc,Md,new Tt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ka(e,t,n,i,r,s){Hr.subVectors(e,n).addScalar(.5).multiply(i),r!==void 0?(Os.x=s*Hr.x-r*Hr.y,Os.y=r*Hr.x+s*Hr.y):Os.copy(Hr),e.copy(t),e.x+=Os.x,e.y+=Os.y,e.applyMatrix4(Ap)}class wp extends Yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const vo=new C,xo=new C,Ed=new le,ks=new ra,za=new ia,Oc=new C,bd=new C;class Kx extends He{constructor(t=new En,n=new wp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)vo.fromBufferAttribute(n,r-1),xo.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=vo.distanceTo(xo);t.setAttribute("lineDistance",new Nn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(r),za.radius+=s,t.ray.intersectsSphere(za)===!1)return;Ed.copy(r).invert(),ks.copy(t.ray).applyMatrix4(Ed);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let y=m,f=_-1;y<f;y+=l){const p=h.getX(y),E=h.getX(y+1),S=Ga(this,t,ks,c,p,E);S&&n.push(S)}if(this.isLineLoop){const y=h.getX(_-1),f=h.getX(m),p=Ga(this,t,ks,c,y,f);p&&n.push(p)}}else{const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let y=m,f=_-1;y<f;y+=l){const p=Ga(this,t,ks,c,y,y+1);p&&n.push(p)}if(this.isLineLoop){const y=Ga(this,t,ks,c,_-1,m);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ga(e,t,n,i,r,s){const a=e.geometry.attributes.position;if(vo.fromBufferAttribute(a,r),xo.fromBufferAttribute(a,s),n.distanceSqToSegment(vo,xo,Oc,bd)>i)return;Oc.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(Oc);if(!(c<t.near||c>t.far))return{distance:c,point:bd.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}const Td=new C,Ad=new C;class Zx extends Kx{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Td.fromBufferAttribute(n,r),Ad.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Td.distanceTo(Ad);t.setAttribute("lineDistance",new Nn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rp extends Yi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wd=new le,Hl=new ra,Ha=new ia,Va=new C;class $x extends He{constructor(t=new En,n=new Rp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(r),Ha.radius+=s,t.ray.intersectsSphere(Ha)===!1)return;wd.copy(r).invert(),Hl.copy(t.ray).applyMatrix4(wd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let _=d,y=m;_<y;_++){const f=l.getX(_);Va.fromBufferAttribute(u,f),Rd(Va,f,c,r,t,n,this)}}else{const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=d,y=m;_<y;_++)Va.fromBufferAttribute(u,_),Rd(Va,_,c,r,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Rd(e,t,n,i,r,s,a){const o=Hl.distanceSqToPoint(e);if(o<n){const c=new C;Hl.closestPointToPoint(e,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Cp extends Qe{constructor(t,n,i,r,s,a,o,c,l){super(t,n,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sh extends En{constructor(t=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:r};const s=[],a=[];o(r),l(i),h(),this.setAttribute("position",new Nn(s,3)),this.setAttribute("normal",new Nn(s.slice(),3)),this.setAttribute("uv",new Nn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const S=new C,T=new C,N=new C;for(let R=0;R<n.length;R+=3)m(n[R+0],S),m(n[R+1],T),m(n[R+2],N),c(S,T,N,E)}function c(E,S,T,N){const R=N+1,A=[];for(let I=0;I<=R;I++){A[I]=[];const j=E.clone().lerp(T,I/R),g=S.clone().lerp(T,I/R),M=R-I;for(let z=0;z<=M;z++)z===0&&I===R?A[I][z]=j:A[I][z]=j.clone().lerp(g,z/M)}for(let I=0;I<R;I++)for(let j=0;j<2*(R-I)-1;j++){const g=Math.floor(j/2);j%2===0?(d(A[I][g+1]),d(A[I+1][g]),d(A[I][g])):(d(A[I][g+1]),d(A[I+1][g+1]),d(A[I+1][g]))}}function l(E){const S=new C;for(let T=0;T<s.length;T+=3)S.x=s[T+0],S.y=s[T+1],S.z=s[T+2],S.normalize().multiplyScalar(E),s[T+0]=S.x,s[T+1]=S.y,s[T+2]=S.z}function h(){const E=new C;for(let S=0;S<s.length;S+=3){E.x=s[S+0],E.y=s[S+1],E.z=s[S+2];const T=f(E)/2/Math.PI+.5,N=p(E)/Math.PI+.5;a.push(T,1-N)}_(),u()}function u(){for(let E=0;E<a.length;E+=6){const S=a[E+0],T=a[E+2],N=a[E+4],R=Math.max(S,T,N),A=Math.min(S,T,N);R>.9&&A<.1&&(S<.2&&(a[E+0]+=1),T<.2&&(a[E+2]+=1),N<.2&&(a[E+4]+=1))}}function d(E){s.push(E.x,E.y,E.z)}function m(E,S){const T=E*3;S.x=t[T+0],S.y=t[T+1],S.z=t[T+2]}function _(){const E=new C,S=new C,T=new C,N=new C,R=new Tt,A=new Tt,I=new Tt;for(let j=0,g=0;j<s.length;j+=9,g+=6){E.set(s[j+0],s[j+1],s[j+2]),S.set(s[j+3],s[j+4],s[j+5]),T.set(s[j+6],s[j+7],s[j+8]),R.set(a[g+0],a[g+1]),A.set(a[g+2],a[g+3]),I.set(a[g+4],a[g+5]),N.copy(E).add(S).add(T).divideScalar(3);const M=f(N);y(R,g+0,E,M),y(A,g+2,S,M),y(I,g+4,T,M)}}function y(E,S,T,N){N<0&&E.x===1&&(a[S]=E.x-1),T.x===0&&T.z===0&&(a[S]=N/2/Math.PI+.5)}function f(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sh(t.vertices,t.indices,t.radius,t.details)}}class Eh extends Sh{constructor(t=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Eh(t.radius,t.detail)}}class Jx extends Yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cp,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pp extends He{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Bc=new le,Cd=new C,Pd=new C;class Qx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xh,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;Cd.setFromMatrixPosition(t.matrixWorld),n.position.copy(Cd),Pd.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Pd),n.updateMatrixWorld(),Bc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ld=new le,zs=new C,kc=new C;class t3 extends Qx{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,n=0){const i=this.camera,r=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),zs.setFromMatrixPosition(t.matrixWorld),i.position.copy(zs),kc.copy(i.position),kc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(kc),i.updateMatrixWorld(),r.makeTranslation(-zs.x,-zs.y,-zs.z),Ld.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ld)}}class zc extends Pp{constructor(t,n,i=0,r=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new t3}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class e3 extends Pp{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class n3{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Dd();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function Dd(){return performance.now()}const Id=new le;class i3{constructor(t,n,i=0,r=1/0){this.ray=new ra(t,n),this.near=i,this.far=r,this.camera=null,this.layers=new vh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return Id.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Id),this}intersectObject(t,n=!0,i=[]){return Vl(t,this,i,n),i.sort(Ud),i}intersectObjects(t,n=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Vl(t[r],this,i,n);return i.sort(Ud),i}}function Ud(e,t){return e.distance-t.distance}function Vl(e,t,n,i){let r=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(r=!1),r===!0&&i===!0){const s=e.children;for(let a=0,o=s.length;a<o;a++)Vl(s[a],t,n,!0)}}class Nd{constructor(t=1,n=0,i=0){return this.radius=t,this.phi=n,this.theta=i,this}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Je(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class r3 extends yr{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);const Fd={type:"change"},bh={type:"start"},Lp={type:"end"},Wa=new ra,Od=new mi,s3=Math.cos(70*L0.DEG2RAD),Le=new C,rn=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gc=1e-6;class a3 extends r3{constructor(t,n=null){super(t,n),this.state=se.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Kr.ROTATE,MIDDLE:Kr.DOLLY,RIGHT:Kr.PAN},this.touches={ONE:Yr.ROTATE,TWO:Yr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new gr,this._lastTargetPosition=new C,this._quat=new gr().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Nd,this._sphericalDelta=new Nd,this._scale=1,this._panOffset=new C,this._rotateStart=new Tt,this._rotateEnd=new Tt,this._rotateDelta=new Tt,this._panStart=new Tt,this._panEnd=new Tt,this._panDelta=new Tt,this._dollyStart=new Tt,this._dollyEnd=new Tt,this._dollyDelta=new Tt,this._dollyDirection=new C,this._mouse=new Tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=c3.bind(this),this._onPointerDown=o3.bind(this),this._onPointerUp=l3.bind(this),this._onContextMenu=g3.bind(this),this._onMouseWheel=d3.bind(this),this._onKeyDown=f3.bind(this),this._onTouchStart=p3.bind(this),this._onTouchMove=m3.bind(this),this._onMouseDown=h3.bind(this),this._onMouseMove=u3.bind(this),this._interceptControlDown=_3.bind(this),this._interceptControlUp=v3.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fd),this.update(),this.state=se.NONE}update(t=null){const n=this.object.position;Le.copy(n).sub(this.target),Le.applyQuaternion(this._quat),this._spherical.setFromVector3(Le),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=rn:i>Math.PI&&(i-=rn),r<-Math.PI?r+=rn:r>Math.PI&&(r-=rn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Le.setFromSpherical(this._spherical),Le.applyQuaternion(this._quatInverse),n.copy(this.target).add(Le),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Le.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new C(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Wa.origin.copy(this.object.position),Wa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wa.direction))<s3?this.object.lookAt(this.target):(Od.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wa.intersectPlane(Od,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Gc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gc||this._lastTargetPosition.distanceToSquared(this.target)>Gc?(this.dispatchEvent(Fd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?rn/60*this.autoRotateSpeed*t:rn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){Le.setFromMatrixColumn(n,0),Le.multiplyScalar(-t),this._panOffset.add(Le)}_panUp(t,n){this.screenSpacePanning===!0?Le.setFromMatrixColumn(n,1):(Le.setFromMatrixColumn(n,0),Le.crossVectors(this.object.up,Le)),Le.multiplyScalar(t),this._panOffset.add(Le)}_pan(t,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Le.copy(r).sub(this.target);let s=Le.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=n-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/n.clientHeight),this._rotateUp(rn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,r=t.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/n.clientHeight),this._rotateUp(rn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,r=t.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+n.x)*.5,o=(t.pageY+n.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Tt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function o3(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e)))}function c3(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function l3(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Lp),this.state=se.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function h3(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Kr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=se.DOLLY;break;case Kr.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=se.ROTATE}break;case Kr.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(bh)}function u3(e){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function d3(e){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(e.preventDefault(),this.dispatchEvent(bh),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Lp))}function f3(e){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(e)}function p3(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Yr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=se.TOUCH_ROTATE;break;case Yr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case Yr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=se.TOUCH_DOLLY_PAN;break;case Yr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(bh)}function m3(e){switch(this._trackPointer(e),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=se.NONE}}function g3(e){this.enabled!==!1&&e.preventDefault()}function _3(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function v3(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function x3(e){const t=new Yx({canvas:e,antialias:!0,alpha:!1});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.setSize(window.innerWidth,window.innerHeight),t.setClearColor(329229,1);const n=new qx;n.fog=new Mh(329229,.018);const i=new _n(55,window.innerWidth/window.innerHeight,.1,400);i.position.set(0,4,42),n.add(new e3(8425727,.55));const r=new zc(7252223,1.1,300);r.position.set(30,30,40),n.add(r);const s=new zc(12159999,.9,300);s.position.set(-40,-10,-20),n.add(s);const a=new zc(5759172,.5,300);a.position.set(0,-30,30),n.add(a);const o=y3();n.add(o);const c=new a3(i,t.domElement);c.enableDamping=!0,c.dampingFactor=.08,c.rotateSpeed=.6,c.zoomSpeed=.8,c.minDistance=14,c.maxDistance=120,c.target.set(0,0,0);function l(){const h=window.innerWidth,u=window.innerHeight;i.aspect=h/u,i.updateProjectionMatrix(),t.setSize(h,u),t.setPixelRatio(Math.min(window.devicePixelRatio,2))}return window.addEventListener("resize",l),{renderer:t,scene:n,camera:i,controls:c,starfield:o}}function y3(e=1400,t=220){const n=new Float32Array(e*3),i=new Float32Array(e*3),r=[new Bt(7252223),new Bt(12159999),new Bt(16777215),new Bt(5759172)];for(let o=0;o<e;o++){const c=t*(.55+Math.random()*.45),l=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1);n[o*3]=c*Math.sin(h)*Math.cos(l),n[o*3+1]=c*Math.sin(h)*Math.sin(l),n[o*3+2]=c*Math.cos(h);const u=r[Math.random()*r.length|0];i[o*3]=u.r,i[o*3+1]=u.g,i[o*3+2]=u.b}const s=new En;s.setAttribute("position",new tn(n,3)),s.setAttribute("color",new tn(i,3));const a=new Rp({size:.7,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.85,depthWrite:!1,blending:Ks});return new $x(s,a)}class M3{constructor(t,n){this.id=t.id,this.title=t.title,this.snippet=t.snippet,this.category=t.category,this.connections=t.connections||[],this.color=new Bt(n),this.velocity=new C,this.pinned=!1,this.group=new Vs;const i=new Eh(1.1,3),r=new Jx({color:this.color,emissive:this.color,emissiveIntensity:.65,roughness:.35,metalness:.1,transparent:!0,opacity:.92});this.sphere=new Jn(i,r),this.sphere.userData.node=this,this.group.add(this.sphere);const s=new Gl({map:E3(),color:this.color,transparent:!0,opacity:.55,depthWrite:!1,blending:Ks});this.halo=new Sd(s),this.halo.scale.setScalar(6),this.group.add(this.halo),this.label=this.#t(),this.label.position.set(0,2.4,0),this.group.add(this.label),this.phase=t.id.length%7*1.1,this.baseScale=1,this.targetScale=1}get position(){return this.group.position}#t(){const r=document.createElement("canvas");r.width=512,r.height=200;const s=r.getContext("2d"),a="#"+this.color.getHexString();S3(s,28,28,512-28*2,200-28*2,24),s.fillStyle="rgba(8, 10, 24, 0.72)",s.fill(),s.lineWidth=3,s.strokeStyle=kd(a,.65),s.stroke(),s.fillStyle="#eef2ff",s.font="600 40px system-ui, sans-serif",s.textBaseline="top",Bd(s,this.title,52,50,512-28*2-48,44,1),s.fillStyle=kd(a,.92),s.font="400 24px system-ui, sans-serif",Bd(s,this.snippet,52,102,512-28*2-48,30,3);const o=new Cp(r);o.anisotropy=4,o.minFilter=Ln;const c=new Gl({map:o,transparent:!0,depthWrite:!1}),l=new Sd(c);return l.scale.set(6.4,2.5,1),l}update(t,n){this.pinned||(this.group.position.y+=Math.sin(t*.6+this.phase)*.0025),this.baseScale+=(this.targetScale-this.baseScale)*Math.min(1,n*10),this.sphere.scale.setScalar(this.baseScale),this.halo.scale.setScalar(6*this.baseScale)}setHighlighted(t){this.targetScale=t?1.35:1,this.sphere.material.emissiveIntensity=t?1.1:.65,this.halo.material.opacity=t?.9:.55}}function S3(e,t,n,i,r,s){e.beginPath(),e.moveTo(t+s,n),e.arcTo(t+i,n,t+i,n+r,s),e.arcTo(t+i,n+r,t,n+r,s),e.arcTo(t,n+r,t,n,s),e.arcTo(t,n,t+i,n,s),e.closePath()}function Bd(e,t,n,i,r,s,a){const o=t.split(" ");let c="",l=0;for(let h=0;h<o.length;h++){const u=c?c+" "+o[h]:o[h];if(e.measureText(u).width>r&&c){if(e.fillText(c,n,i),c=o[h],i+=s,++l>=a-1){let d=o.slice(h).join(" ");for(;e.measureText(d+"…").width>r&&d.length>1;)d=d.slice(0,-1);e.fillText(d+(h<o.length?"…":""),n,i);return}}else c=u}e.fillText(c,n,i)}function kd(e,t){const n=parseInt(e.slice(1),16),i=n>>16&255,r=n>>8&255,s=n&255;return`rgba(${i}, ${r}, ${s}, ${t})`}let Xa=null;function E3(){if(Xa)return Xa;const e=128,t=document.createElement("canvas");t.width=t.height=e;const n=t.getContext("2d"),i=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);return i.addColorStop(0,"rgba(255,255,255,0.9)"),i.addColorStop(.25,"rgba(255,255,255,0.35)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,e,e),Xa=new Cp(t),Xa}class b3{constructor(t,n){const i=new Set;this.pairs=[];for(const o of t)for(const c of o.connections){const l=n.get(c);if(!l)continue;const h=o.id<c?`${o.id}|${c}`:`${c}|${o.id}`;i.has(h)||(i.add(h),this.pairs.push([o,l]))}const r=this.pairs.length;this.positions=new Float32Array(r*2*3),this.colors=new Float32Array(r*2*3);for(let o=0;o<r;o++){const[c,l]=this.pairs[o];c.color.toArray(this.colors,o*6),l.color.toArray(this.colors,o*6+3)}const s=new En;s.setAttribute("position",new tn(this.positions,3)),s.setAttribute("color",new tn(this.colors,3)),this.geometry=s;const a=new wp({vertexColors:!0,transparent:!0,opacity:.32,depthWrite:!1,blending:Ks});this.object=new Zx(s,a),this.update()}update(){const t=this.positions;for(let n=0;n<this.pairs.length;n++){const[i,r]=this.pairs[n],s=i.position,a=r.position;t[n*6]=s.x,t[n*6+1]=s.y,t[n*6+2]=s.z,t[n*6+3]=a.x,t[n*6+4]=a.y,t[n*6+5]=a.z}this.geometry.attributes.position.needsUpdate=!0}}class T3{constructor(t){this.scene=t,this.nodes=[],this.byId=new Map,this.edges=null,this.repulsion=90,this.spring=.02,this.springLength=9,this.centering=.004,this.damping=.86,this.settleTemp=1}async load(t="/data/notes.json"){const n=await fetch(t);if(!n.ok)throw new Error(`Failed to load notes: ${n.status}`);const i=await n.json();this.categories=i.categories;const r=i.notes.length;i.notes.forEach((s,a)=>{const o=i.categories[s.category]||{color:"#ffffff"},c=new M3(s,o.color),l=1-a/(r-1)*2,h=Math.sqrt(1-l*l),u=a*2.399963,d=16;c.position.set(d*h*Math.cos(u),d*l*.7,d*h*Math.sin(u)),this.nodes.push(c),this.byId.set(c.id,c),this.scene.add(c.group)}),this.edges=new b3(this.nodes,this.byId),this.scene.add(this.edges.object);for(let s=0;s<220;s++)this.step(1/60);return this.settleTemp=.15,this}step(t){const n=this.nodes,i=n.length,r=this.settleTemp;for(let s=0;s<i;s++){const a=n[s];for(let o=s+1;o<i;o++){const c=n[o],l=a.position.x-c.position.x,h=a.position.y-c.position.y,u=a.position.z-c.position.z;let d=l*l+h*h+u*u;d<.01&&(d=.01);const m=1/d,_=this.repulsion*m,y=Math.sqrt(d),f=l/y*_,p=h/y*_,E=u/y*_;a.velocity.x+=f,a.velocity.y+=p,a.velocity.z+=E,c.velocity.x-=f,c.velocity.y-=p,c.velocity.z-=E}}if(this.edges)for(const[s,a]of this.edges.pairs){const o=a.position.x-s.position.x,c=a.position.y-s.position.y,l=a.position.z-s.position.z,h=Math.sqrt(o*o+c*c+l*l)||.001,u=h-this.springLength,d=this.spring*u,m=o/h*d,_=c/h*d,y=l/h*d;s.velocity.x+=m,s.velocity.y+=_,s.velocity.z+=y,a.velocity.x-=m,a.velocity.y-=_,a.velocity.z-=y}for(const s of n){if(s.pinned){s.velocity.set(0,0,0);continue}s.velocity.x-=s.position.x*this.centering,s.velocity.y-=s.position.y*this.centering,s.velocity.z-=s.position.z*this.centering,s.velocity.multiplyScalar(this.damping),s.position.x+=s.velocity.x*t*r,s.position.y+=s.velocity.y*t*r,s.position.z+=s.velocity.z*t*r}}update(t,n){this.step(n);for(const i of this.nodes)i.update(t,n);this.edges&&this.edges.update()}get pickables(){return this.nodes.map(t=>t.sphere)}}var os=typeof self<"u"?self:{};function Dp(e,t){t:{for(var n=["CLOSURE_FLAGS"],i=os,r=0;r<n.length;r++)if((i=i[n[r]])==null){n=null;break t}n=i}return(e=n&&n[e])!=null?e:t}function er(){throw Error("Invalid UTF8")}function zd(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}let Ya,Hc;const A3=typeof TextDecoder<"u";let w3;const R3=typeof TextEncoder<"u";function Ip(e){if(R3)e=(w3||=new TextEncoder).encode(e);else{let n=0;const i=new Uint8Array(3*e.length);for(let r=0;r<e.length;r++){var t=e.charCodeAt(r);if(t<128)i[n++]=t;else{if(t<2048)i[n++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&r<e.length){const s=e.charCodeAt(++r);if(s>=56320&&s<=57343){t=1024*(t-55296)+s-56320+65536,i[n++]=t>>18|240,i[n++]=t>>12&63|128,i[n++]=t>>6&63|128,i[n++]=63&t|128;continue}r--}t=65533}i[n++]=t>>12|224,i[n++]=t>>6&63|128}i[n++]=63&t|128}}e=n===i.length?i:i.subarray(0,n)}return e}function Up(e){os.setTimeout(()=>{throw e},0)}var Wl,C3=Dp(610401301,!1),Gd=Dp(748402147,!0);function Hd(){var e=os.navigator;return e&&(e=e.userAgent)?e:""}const Vd=os.navigator;function Io(e){return Io[" "](e),e}Wl=Vd&&Vd.userAgentData||null,Io[" "]=function(){};const Np={};let Ws=null;function P3(e){const t=e.length;let n=3*t/4;n%3?n=Math.floor(n):"=.".indexOf(e[t-1])!=-1&&(n="=.".indexOf(e[t-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let r=0;return function(s,a){function o(l){for(;c<s.length;){const h=s.charAt(c++),u=Ws[h];if(u!=null)return u;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return l}Fp();let c=0;for(;;){const l=o(-1),h=o(0),u=o(64),d=o(64);if(d===64&&l===-1)break;a(l<<2|h>>4),u!=64&&(a(h<<4&240|u>>2),d!=64&&a(u<<6&192|d))}}(e,function(s){i[r++]=s}),r!==n?i.subarray(0,r):i}function Fp(){if(!Ws){Ws={};var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=e.concat(t[n].split(""));Np[n]=i;for(let r=0;r<i.length;r++){const s=i[r];Ws[s]===void 0&&(Ws[s]=r)}}}}var L3=typeof Uint8Array<"u",Op=!(!(C3&&Wl&&Wl.brands.length>0)&&(Hd().indexOf("Trident")!=-1||Hd().indexOf("MSIE")!=-1))&&typeof btoa=="function";const Wd=/[-_.]/g,D3={"-":"+",_:"/",".":"="};function I3(e){return D3[e]||""}function Bp(e){if(!Op)return P3(e);e=Wd.test(e)?e.replace(Wd,I3):e,e=atob(e);const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function Th(e){return L3&&e!=null&&e instanceof Uint8Array}var cs={};function _r(){return U3||=new ti(null,cs)}function Ah(e){kp(cs);var t=e.g;return(t=t==null||Th(t)?t:typeof t=="string"?Bp(t):null)==null?t:e.g=t}var ti=class{h(){return new Uint8Array(Ah(this)||0)}constructor(e,t){if(kp(t),this.g=e,e!=null&&e.length===0)throw Error("ByteString should be constructed with non-empty values")}};let U3,N3;function kp(e){if(e!==cs)throw Error("illegal external caller")}function zp(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}function Xl(e){return zp(e=Error(e),"warning"),e}function ls(e,t){if(e!=null){var n=N3??={},i=n[e]||0;i>=t||(n[e]=i+1,zp(e=Error(),"incident"),Up(e))}}function xs(){return typeof BigInt=="function"}var ys=typeof Symbol=="function"&&typeof Symbol()=="symbol";function ii(e,t,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&e?Symbol.for(e):e!=null?Symbol(e):Symbol():t}var F3=ii("jas",void 0,!0),Xd=ii(void 0,"0di"),Gs=ii(void 0,"1oa"),vn=ii(void 0,Symbol()),O3=ii(void 0,"0ub"),B3=ii(void 0,"0ubs"),Yl=ii(void 0,"0ubsb"),k3=ii(void 0,"0actk"),hs=ii("m_m","Pa",!0),Yd=ii();const Gp={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},Hp=Object.defineProperties,vt=ys?F3:"Ga";var Mr;const qd=[];function aa(e,t){ys||vt in e||Hp(e,Gp),e[vt]|=t}function Oe(e,t){ys||vt in e||Hp(e,Gp),e[vt]=t}function oa(e){return aa(e,34),e}function $s(e){return aa(e,8192),e}Oe(qd,7),Mr=Object.freeze(qd);var us={};function yn(e,t){return t===void 0?e.h!==vr&&!!(2&(0|e.v[vt])):!!(2&t)&&e.h!==vr}const vr={};function wh(e,t){if(e!=null){if(typeof e=="string")e=e?new ti(e,cs):_r();else if(e.constructor!==ti)if(Th(e))e=e.length?new ti(new Uint8Array(e),cs):_r();else{if(!t)throw Error();e=void 0}}return e}class jd{constructor(t,n,i){this.g=t,this.h=n,this.l=i}next(){const t=this.g.next();return t.done||(t.value=this.h.call(this.l,t.value)),t}[Symbol.iterator](){return this}}var z3=Object.freeze({});function Vp(e,t,n){const i=128&t?0:-1,r=e.length;var s;(s=!!r)&&(s=(s=e[r-1])!=null&&typeof s=="object"&&s.constructor===Object);const a=r+(s?-1:0);for(t=128&t?1:0;t<a;t++)n(t-i,e[t]);if(s){e=e[r-1];for(const o in e)!isNaN(o)&&n(+o,e[o])}}var Wp={};function Ms(e){return 128&e?Wp:void 0}function Uo(e){return e.Na=!0,e}var G3=Uo(e=>typeof e=="number"),Kd=Uo(e=>typeof e=="string"),H3=Uo(e=>typeof e=="boolean"),No=typeof os.BigInt=="function"&&typeof os.BigInt(0)=="bigint";function xn(e){var t=e;if(Kd(t)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))throw Error(String(t))}else if(G3(t)&&!Number.isSafeInteger(t))throw Error(String(t));return No?BigInt(e):e=H3(e)?e?"1":"0":Kd(e)?e.trim()||"0":String(e)}var ql=Uo(e=>No?e>=W3&&e<=Y3:e[0]==="-"?Zd(e,V3):Zd(e,X3));const V3=Number.MIN_SAFE_INTEGER.toString(),W3=No?BigInt(Number.MIN_SAFE_INTEGER):void 0,X3=Number.MAX_SAFE_INTEGER.toString(),Y3=No?BigInt(Number.MAX_SAFE_INTEGER):void 0;function Zd(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let n=0;n<e.length;n++){const i=e[n],r=t[n];if(i>r)return!1;if(i<r)return!0}}const q3=typeof Uint8Array.prototype.slice=="function";let j3,_e=0,Re=0;function $d(e){const t=e>>>0;_e=t,Re=(e-t)/4294967296>>>0}function ds(e){if(e<0){$d(-e);const[t,n]=Ph(_e,Re);_e=t>>>0,Re=n>>>0}else $d(e)}function Rh(e){const t=j3||=new DataView(new ArrayBuffer(8));t.setFloat32(0,+e,!0),Re=0,_e=t.getUint32(0,!0)}function Xp(e,t){const n=4294967296*t+(e>>>0);return Number.isSafeInteger(n)?n:Js(e,t)}function K3(e,t){return xn(xs()?BigInt.asUintN(64,(BigInt(t>>>0)<<BigInt(32))+BigInt(e>>>0)):Js(e,t))}function Yp(e,t){return xs()?xn(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(t))<<BigInt(32))+BigInt.asUintN(32,BigInt(e)))):xn(Ch(e,t))}function Js(e,t){if(e>>>=0,(t>>>=0)<=2097151)var n=""+(4294967296*t+e);else xs()?n=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,e>=1e7&&(n+=e/1e7>>>0,e%=1e7),n>=1e7&&(t+=n/1e7>>>0,n%=1e7),n=t+Jd(n)+Jd(e));return n}function Jd(e){return e=String(e),"0000000".slice(e.length)+e}function Ch(e,t){if(2147483648&t)if(xs())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{const[n,i]=Ph(e,t);e="-"+Js(n,i)}else e=Js(e,t);return e}function Fo(e){if(e.length<16)ds(Number(e));else if(xs())e=BigInt(e),_e=Number(e&BigInt(4294967295))>>>0,Re=Number(e>>BigInt(32)&BigInt(4294967295));else{const t=+(e[0]==="-");Re=_e=0;const n=e.length;for(let i=t,r=(n-t)%6+t;r<=n;i=r,r+=6){const s=Number(e.slice(i,r));Re*=1e6,_e=1e6*_e+s,_e>=4294967296&&(Re+=Math.trunc(_e/4294967296),Re>>>=0,_e>>>=0)}if(t){const[i,r]=Ph(_e,Re);_e=i,Re=r}}}function Ph(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}function Vn(e){return Array.prototype.slice.call(e)}const ca=typeof BigInt=="function"?BigInt.asIntN:void 0,Z3=typeof BigInt=="function"?BigInt.asUintN:void 0,xr=Number.isSafeInteger,Oo=Number.isFinite,fs=Math.trunc,$3=xn(0);function Xs(e){if(e!=null&&typeof e!="number")throw Error(`Value of float/double field must be a number, found ${typeof e}: ${e}`);return e}function Qn(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function Qs(e){if(e!=null&&typeof e!="boolean"){var t=typeof e;throw Error(`Expected boolean but got ${t!="object"?t:e?Array.isArray(e)?"array":t:"null"}: ${e}`)}return e}function qp(e){return e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0}const J3=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function la(e){switch(typeof e){case"bigint":return!0;case"number":return Oo(e);case"string":return J3.test(e);default:return!1}}function Ss(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return Oo(e)?0|e:void 0}function jp(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return Oo(e)?e>>>0:void 0}function Kp(e){const t=e.length;return(e[0]==="-"?t<20||t===20&&e<="-9223372036854775808":t<19||t===19&&e<="9223372036854775807")?e:(Fo(e),Ch(_e,Re))}function Lh(e){if(e=fs(e),!xr(e)){ds(e);var t=_e,n=Re;(e=2147483648&n)&&(n=~n>>>0,(t=1+~t>>>0)==0&&(n=n+1>>>0)),e=typeof(t=Xp(t,n))=="number"?e?-t:t:e?"-"+t:t}return e}function Zp(e){var t=fs(Number(e));return xr(t)?String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Kp(e))}function $p(e){var t=fs(Number(e));return xr(t)?xn(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),xs()?xn(ca(64,BigInt(e))):xn(Kp(e)))}function Jp(e){return xr(e)?e=xn(Lh(e)):(e=fs(e),xr(e)?e=String(e):(ds(e),e=Ch(_e,Re)),e=xn(e)),e}function yo(e){const t=typeof e;return e==null?e:t==="bigint"?xn(ca(64,e)):la(e)?t==="string"?$p(e):Jp(e):void 0}function Qp(e){if(typeof e!="string")throw Error();return e}function ha(e){if(e!=null&&typeof e!="string")throw Error();return e}function Ve(e){return e==null||typeof e=="string"?e:void 0}function Dh(e,t,n,i){return e!=null&&e[hs]===us?e:Array.isArray(e)?((i=(n=0|e[vt])|32&i|2&i)!==n&&Oe(e,i),new t(e)):(n?2&i?((e=t[Xd])||(oa((e=new t).v),e=t[Xd]=e),t=e):t=new t:t=void 0,t)}function Q3(e,t,n){if(t)t:{if(!la(t=e))throw Xl("int64");switch(typeof t){case"string":t=$p(t);break t;case"bigint":t=xn(ca(64,t));break t;default:t=Jp(t)}}else t=yo(e);return(e=t)==null?n?$3:void 0:e}const ty={};let ey=function(){try{return Io(new class extends Map{constructor(){super()}}),!1}catch{return!0}}();class Vc{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,n){return this.g.set(t,n),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,n){return this.g.forEach(t,n)}[Symbol.iterator](){return this.entries()}}const ny=ey?(Object.setPrototypeOf(Vc.prototype,Map.prototype),Object.defineProperties(Vc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Vc):class extends Map{constructor(){super()}};function Qd(e){return e}function Wc(e){if(2&e.J)throw Error("Cannot mutate an immutable Map")}var Mi=class extends ny{constructor(e,t,n=Qd,i=Qd){super(),this.J=0|e[vt],this.K=t,this.S=n,this.fa=this.K?iy:i;for(let r=0;r<e.length;r++){const s=e[r],a=n(s[0],!1,!0);let o=s[1];t?o===void 0&&(o=null):o=i(s[1],!1,!0,void 0,void 0,this.J),super.set(a,o)}}V(e){return $s(Array.from(super.entries(),e))}clear(){Wc(this),super.clear()}delete(e){return Wc(this),super.delete(this.S(e,!0,!1))}entries(){if(this.K){var e=super.keys();e=new jd(e,ry,this)}else e=super.entries();return e}values(){if(this.K){var e=super.keys();e=new jd(e,Mi.prototype.get,this)}else e=super.values();return e}forEach(e,t){this.K?super.forEach((n,i,r)=>{e.call(t,r.get(i),i,r)}):super.forEach(e,t)}set(e,t){return Wc(this),(e=this.S(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.fa(t,!0,!0,this.K,!1,this.J))}Ma(e){const t=this.S(e[0],!1,!0);e=e[1],e=this.K?e===void 0?null:e:this.fa(e,!1,!0,void 0,!1,this.J),super.set(t,e)}has(e){return super.has(this.S(e,!1,!1))}get(e){e=this.S(e,!1,!1);const t=super.get(e);if(t!==void 0){var n=this.K;return n?((n=this.fa(t,!1,!0,n,this.ra,this.J))!==t&&super.set(e,n),n):t}}[Symbol.iterator](){return this.entries()}};function iy(e,t,n,i,r,s){return e=Dh(e,i,n,s),r&&(e=Uh(e)),e}function ry(e){return[e,this.get(e)]}let sy;function tf(){return sy||=new Mi(oa([]),void 0,void 0,void 0,ty)}function Bo(e){return vn?e[vn]:void 0}function Mo(e,t){for(const n in e)!isNaN(n)&&t(e,+n,e[n])}Mi.prototype.toJSON=void 0;var jl=class{};const ay={Ka:!0};function oy(e,t){t<100||ls(B3,1)}function ko(e,t,n,i){const r=i!==void 0;i=!!i;var s,a=vn;!r&&ys&&a&&(s=e[a])&&Mo(s,oy),a=[];var o=e.length;let c;s=4294967295;let l=!1;const h=!!(64&t),u=h?128&t?0:-1:void 0;1&t||(c=o&&e[o-1],c!=null&&typeof c=="object"&&c.constructor===Object?s=--o:c=void 0,!h||128&t||r||(l=!0,s=s-u+u)),t=void 0;for(var d=0;d<o;d++){let m=e[d];if(m!=null&&(m=n(m,i))!=null)if(h&&d>=s){const _=d-u;(t??={})[_]=m}else a[d]=m}if(c)for(let m in c){if((o=c[m])==null||(o=n(o,i))==null)continue;let _;d=+m,h&&!Number.isNaN(d)&&(_=d+u)<s?a[_]=o:(t??={})[m]=o}return t&&(l?a.push(t):a[s]=t),r&&vn&&(e=Bo(e))&&e instanceof jl&&(a[vn]=function(m){const _=new jl;return Mo(m,(y,f,p)=>{_[f]=Vn(p)}),_.da=m.da,_}(e)),a}function cy(e){return e[0]=ta(e[0]),e[1]=ta(e[1]),e}function ta(e){switch(typeof e){case"number":return Number.isFinite(e)?e:""+e;case"bigint":return ql(e)?Number(e):""+e;case"boolean":return e?1:0;case"object":if(Array.isArray(e)){var t=0|e[vt];return e.length===0&&1&t?void 0:ko(e,t,ta)}if(e!=null&&e[hs]===us)return tm(e);if(e instanceof ti){if((t=e.g)==null)e="";else if(typeof t=="string")e=t;else{if(Op){for(var n="",i=0,r=t.length-10240;i<r;)n+=String.fromCharCode.apply(null,t.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?t.subarray(i):t),t=btoa(n)}else{n===void 0&&(n=0),Fp(),n=Np[n],i=Array(Math.floor(t.length/3)),r=n[64]||"";let l=0,h=0;for(;l<t.length-2;l+=3){var s=t[l],a=t[l+1],o=t[l+2],c=n[s>>2];s=n[(3&s)<<4|a>>4],a=n[(15&a)<<2|o>>6],o=n[63&o],i[h++]=c+s+a+o}switch(c=0,o=r,t.length-l){case 2:o=n[(15&(c=t[l+1]))<<2]||r;case 1:t=t[l],i[h]=n[t>>2]+n[(3&t)<<4|c>>4]+o+r}t=i.join("")}e=e.g=t}return e}return e instanceof Mi?e=e.size!==0?e.V(cy):void 0:void 0}return e}let ly,hy;function tm(e){return ko(e=e.v,0|e[vt],ta)}function lr(e,t){return em(e,t[0],t[1])}function em(e,t,n,i=0){if(e==null){var r=32;n?(e=[n],r|=128):e=[],t&&(r=-16760833&r|(1023&t)<<14)}else{if(!Array.isArray(e))throw Error("narr");if(r=0|e[vt],Gd&&1&r)throw Error("rfarr");if(2048&r&&!(2&r)&&function(){if(Gd)throw Error("carr");ls(k3,5)}(),256&r)throw Error("farr");if(64&r)return(r|i)!==r&&Oe(e,r|i),e;if(n&&(r|=128,n!==e[0]))throw Error("mid");t:{r|=64;var s=(n=e).length;if(s){var a=s-1;const c=n[a];if(c!=null&&typeof c=="object"&&c.constructor===Object){if((a-=t=128&r?0:-1)>=1024)throw Error("pvtlmt");for(var o in c)(s=+o)<a&&(n[s+t]=c[o],delete c[o]);r=-16760833&r|(1023&a)<<14;break t}}if(t){if((o=Math.max(t,s-(128&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&o)<<14}}}return Oe(e,64|r|i),e}function uy(e,t){if(typeof e!="object")return e;if(Array.isArray(e)){var n=0|e[vt];return e.length===0&&1&n?void 0:ef(e,n,t)}if(e!=null&&e[hs]===us)return nf(e);if(e instanceof Mi){if(2&(t=e.J))return e;if(!e.size)return;if(n=oa(e.V()),e.K)for(e=0;e<n.length;e++){const i=n[e];let r=i[1];r=r==null||typeof r!="object"?void 0:r!=null&&r[hs]===us?nf(r):Array.isArray(r)?ef(r,0|r[vt],!!(32&t)):void 0,i[1]=r}return n}return e instanceof ti?e:void 0}function ef(e,t,n){return 2&t||(!n||4096&t||16&t?e=Es(e,t,!1,n&&!(16&t)):(aa(e,34),4&t&&Object.freeze(e))),e}function Ih(e,t,n){return e=new e.constructor(t),n&&(e.h=vr),e.m=vr,e}function nf(e){const t=e.v,n=0|t[vt];return yn(e,n)?e:Nh(e,t,n)?Ih(e,t):Es(t,n)}function Es(e,t,n,i){return i??=!!(34&t),e=ko(e,t,uy,i),i=32,n&&(i|=2),Oe(e,t=16769217&t|i),e}function Uh(e){const t=e.v,n=0|t[vt];return yn(e,n)?Nh(e,t,n)?Ih(e,t,!0):new e.constructor(Es(t,n,!1)):e}function bs(e){if(e.h!==vr)return!1;var t=e.v;return aa(t=Es(t,0|t[vt]),2048),e.v=t,e.h=void 0,e.m=void 0,!0}function Ts(e){if(!bs(e)&&yn(e,0|e.v[vt]))throw Error()}function Sr(e,t){t===void 0&&(t=0|e[vt]),32&t&&!(4096&t)&&Oe(e,4096|t)}function Nh(e,t,n){return!!(2&n)||!(!(32&n)||4096&n)&&(Oe(t,2|n),e.h=vr,!0)}const nm=xn(0),Di={};function ve(e,t,n,i,r){if((t=Si(e.v,t,n,r))!==null||i&&e.m!==vr)return t}function Si(e,t,n,i){if(t===-1)return null;const r=t+(n?0:-1),s=e.length-1;let a,o;if(!(s<1+(n?0:-1))){if(r>=s)if(a=e[s],a!=null&&typeof a=="object"&&a.constructor===Object)n=a[t],o=!0;else{if(r!==s)return;n=a}else n=e[r];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return o?a[t]=i:e[r]=i,i}return n}}function oe(e,t,n,i){Ts(e),Ie(e=e.v,0|e[vt],t,n,i)}function Ie(e,t,n,i,r){const s=n+(r?0:-1);var a=e.length-1;if(a>=1+(r?0:-1)&&s>=a){const o=e[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[n]=i,t}return s<=a?(e[s]=i,t):(i!==void 0&&(n>=(a=(t??=0|e[vt])>>14&1023||536870912)?i!=null&&(e[a+(r?0:-1)]={[n]:i}):e[s]=i),t)}function or(){return z3===void 0?2:4}function cr(e,t,n,i,r){let s=e.v,a=0|s[vt];i=yn(e,a)?1:i,r=!!r||i===3,i===2&&bs(e)&&(s=e.v,a=0|s[vt]);let o=(e=Fh(s,t))===Mr?7:0|e[vt],c=Oh(o,a);var l=!(4&c);if(l){4&c&&(e=Vn(e),o=0,c=ur(c,a),a=Ie(s,a,t,e));let h=0,u=0;for(;h<e.length;h++){const d=n(e[h]);d!=null&&(e[u++]=d)}u<h&&(e.length=u),n=-513&(4|c),c=n&=-1025,c&=-4097}return c!==o&&(Oe(e,c),2&c&&Object.freeze(e)),im(e,c,s,a,t,i,l,r)}function im(e,t,n,i,r,s,a,o){let c=t;return s===1||s===4&&(2&t||!(16&t)&&32&i)?hr(t)||((t|=!e.length||a&&!(4096&t)||32&i&&!(4096&t||16&t)?2:256)!==c&&Oe(e,t),Object.freeze(e)):(s===2&&hr(t)&&(e=Vn(e),c=0,t=ur(t,i),i=Ie(n,i,r,e)),hr(t)||(o||(t|=16),t!==c&&Oe(e,t))),2&t||!(4096&t||16&t)||Sr(n,i),e}function Fh(e,t,n){return e=Si(e,t,n),Array.isArray(e)?e:Mr}function Oh(e,t){return 2&t&&(e|=2),1|e}function hr(e){return!!(2&e)&&!!(4&e)||!!(256&e)}function rm(e){return wh(e,!0)}function sm(e){e=Vn(e);for(let t=0;t<e.length;t++){const n=e[t]=Vn(e[t]);Array.isArray(n[1])&&(n[1]=oa(n[1]))}return $s(e)}function Ui(e,t,n,i){Ts(e),Ie(e=e.v,0|e[vt],t,(i==="0"?Number(n)===0:n===i)?void 0:n)}function As(e,t,n){if(2&t)throw Error();const i=Ms(t);let r=Fh(e,n,i),s=r===Mr?7:0|r[vt],a=Oh(s,t);return(2&a||hr(a)||16&a)&&(a===s||hr(a)||Oe(r,a),r=Vn(r),s=0,a=ur(a,t),Ie(e,t,n,r,i)),a&=-13,a!==s&&Oe(r,a),r}function Xc(e,t){var n=Zm;return kh(Bh(e=e.v),e,void 0,n)===t?t:-1}function Bh(e){if(ys)return e[Gs]??(e[Gs]=new Map);if(Gs in e)return e[Gs];const t=new Map;return Object.defineProperty(e,Gs,{value:t}),t}function am(e,t,n,i,r){const s=Bh(e),a=kh(s,e,t,n,r);return a!==i&&(a&&(t=Ie(e,t,a,void 0,r)),s.set(n,i)),t}function kh(e,t,n,i,r){let s=e.get(i);if(s!=null)return s;s=0;for(let a=0;a<i.length;a++){const o=i[a];Si(t,o,r)!=null&&(s!==0&&(n=Ie(t,n,s,void 0,r)),s=o)}return e.set(i,s),s}function zh(e,t,n){let i=0|e[vt];const r=Ms(i),s=Si(e,n,r);let a;if(s!=null&&s[hs]===us){if(!yn(s))return bs(s),s.v;a=s.v}else Array.isArray(s)&&(a=s);if(a){const o=0|a[vt];2&o&&(a=Es(a,o))}return a=lr(a,t),a!==s&&Ie(e,i,n,a,r),a}function om(e,t,n,i,r){let s=!1;if((i=Si(e,i,r,a=>{const o=Dh(a,n,!1,t);return s=o!==a&&o!=null,o}))!=null)return s&&!yn(i)&&Sr(e,t),i}function jt(e,t,n,i){let r=e.v,s=0|r[vt];if((t=om(r,s,t,n,i))==null)return t;if(s=0|r[vt],!yn(e,s)){const a=Uh(t);a!==t&&(bs(e)&&(r=e.v,s=0|r[vt]),s=Ie(r,s,n,t=a,i),Sr(r,s))}return t}function cm(e,t,n,i,r,s,a,o){var c=yn(e,n);s=c?1:s,a=!!a||s===3,c=o&&!c,(s===2||c)&&bs(e)&&(n=0|(t=e.v)[vt]);var l=(e=Fh(t,r))===Mr?7:0|e[vt],h=Oh(l,n);if(o=!(4&h)){var u=e,d=n;const m=!!(2&h);m&&(d|=2);let _=!m,y=!0,f=0,p=0;for(;f<u.length;f++){const E=Dh(u[f],i,!1,d);if(E instanceof i){if(!m){const S=yn(E);_&&=!S,y&&=S}u[p++]=E}}p<f&&(u.length=p),h|=4,h=y?-4097&h:4096|h,h=_?8|h:-9&h}if(h!==l&&(Oe(e,h),2&h&&Object.freeze(e)),c&&!(8&h||!e.length&&(s===1||s===4&&(2&h||!(16&h)&&32&n)))){for(hr(h)&&(e=Vn(e),h=ur(h,n),n=Ie(t,n,r,e)),i=e,c=h,l=0;l<i.length;l++)(u=i[l])!==(h=Uh(u))&&(i[l]=h);c|=8,Oe(e,h=c=i.length?4096|c:-4097&c)}return im(e,h,t,n,r,s,o,a)}function Ei(e,t,n){const i=e.v;return cm(e,i,0|i[vt],t,n,or(),!1,!0)}function lm(e){return e==null&&(e=void 0),e}function At(e,t,n,i,r){return oe(e,n,i=lm(i),r),i&&!yn(i)&&Sr(e.v),e}function Ys(e,t,n,i){t:{var r=i=lm(i);Ts(e);const s=e.v;let a=0|s[vt];if(r==null){const o=Bh(s);if(kh(o,s,a,n)!==t)break t;o.set(n,0)}else a=am(s,a,n,t);Ie(s,a,t,r)}i&&!yn(i)&&Sr(e.v)}function ur(e,t){return-273&(2&t?2|e:-3&e)}function Gh(e,t,n,i){var r=i;Ts(e),e=cm(e,i=e.v,0|i[vt],n,t,2,!0),r=r??new n,e.push(r),t=n=e===Mr?7:0|e[vt],(r=yn(r))?(n&=-9,e.length===1&&(n&=-4097)):n|=4096,n!==t&&Oe(e,n),r||Sr(i)}function Un(e,t,n){return Ss(ve(e,t,void 0,n))}function Te(e,t){return ve(e,t,void 0,void 0,Qn)??0}function bi(e,t,n){if(n!=null){if(typeof n!="number"||!Oo(n))throw Xl("int32");n|=0}oe(e,t,n)}function bt(e,t,n){oe(e,t,Xs(n))}function Mn(e,t,n){Ui(e,t,ha(n),"")}function So(e,t,n){{Ts(e);const a=e.v;let o=0|a[vt];if(n==null)Ie(a,o,t);else{var i=e=n===Mr?7:0|n[vt],r=hr(e),s=r||Object.isFrozen(n);for(r||(e=0),s||(n=Vn(n),i=0,e=ur(e,o),s=!1),e|=5,e|=(4&e?512&e?512:1024&e?1024:0:void 0)??1024,r=0;r<n.length;r++){const c=n[r],l=Qp(c);Object.is(c,l)||(s&&(n=Vn(n),i=0,e=ur(e,o),s=!1),n[r]=l)}e!==i&&(s&&(n=Vn(n),e=ur(e,o)),Oe(n,e)),Ie(a,o,t,n)}}}function zo(e,t,n){Ts(e),cr(e,t,Ve,2,!0).push(Qp(n))}var Vr=class{constructor(e,t,n){if(this.buffer=e,n&&!t)throw Error();this.g=t}};function Hh(e,t){if(typeof e=="string")return new Vr(Bp(e),t);if(Array.isArray(e))return new Vr(new Uint8Array(e),t);if(e.constructor===Uint8Array)return new Vr(e,!1);if(e.constructor===ArrayBuffer)return e=new Uint8Array(e),new Vr(e,!1);if(e.constructor===ti)return t=Ah(e)||new Uint8Array(0),new Vr(t,!0,e);if(e instanceof Uint8Array)return e=e.constructor===Uint8Array?e:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Vr(e,!1);throw Error()}function Vh(e,t){let n,i=0,r=0,s=0;const a=e.h;let o=e.g;do n=a[o++],i|=(127&n)<<s,s+=7;while(s<32&&128&n);if(s>32)for(r|=(127&n)>>4,s=3;s<32&&128&n;s+=7)n=a[o++],r|=(127&n)<<s;if(dr(e,o),!(128&n))return t(i>>>0,r>>>0);throw Error()}function Wh(e){let t=0,n=e.g;const i=n+10,r=e.h;for(;n<i;){const s=r[n++];if(t|=s,(128&s)==0)return dr(e,n),!!(127&t)}throw Error()}function Vi(e){const t=e.h;let n=e.g,i=t[n++],r=127&i;if(128&i&&(i=t[n++],r|=(127&i)<<7,128&i&&(i=t[n++],r|=(127&i)<<14,128&i&&(i=t[n++],r|=(127&i)<<21,128&i&&(i=t[n++],r|=i<<28,128&i&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw Error();return dr(e,n),r}function ni(e){return Vi(e)>>>0}function Eo(e){var t=e.h;const n=e.g;var i=t[n],r=t[n+1];const s=t[n+2];return t=t[n+3],dr(e,e.g+4),e=2*((r=(i<<0|r<<8|s<<16|t<<24)>>>0)>>31)+1,i=r>>>23&255,r&=8388607,i==255?r?NaN:e*(1/0):i==0?1401298464324817e-60*e*r:e*Math.pow(2,i-150)*(r+8388608)}function dy(e){return Vi(e)}function dr(e,t){if(e.g=t,t>e.l)throw Error()}function hm(e,t){if(t<0)throw Error();const n=e.g;if((t=n+t)>e.l)throw Error();return e.g=t,n}function um(e,t){if(t==0)return _r();var n=hm(e,t);return e.Y&&e.j?n=e.h.subarray(n,n+t):(e=e.h,n=n===(t=n+t)?new Uint8Array(0):q3?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?_r():new ti(n,cs)}var rf=[];function dm(e,t,n,i){if(bo.length){const r=bo.pop();return r.o(i),r.g.init(e,t,n,i),r}return new fy(e,t,n,i)}function fm(e){e.g.clear(),e.l=-1,e.h=-1,bo.length<100&&bo.push(e)}function pm(e){var t=e.g;if(t.g==t.l)return!1;e.m=e.g.g;var n=ni(e.g);if(t=n>>>3,!((n&=7)>=0&&n<=5)||t<1)throw Error();return e.l=t,e.h=n,!0}function oo(e){switch(e.h){case 0:e.h!=0?oo(e):Wh(e.g);break;case 1:dr(e=e.g,e.g+8);break;case 2:if(e.h!=2)oo(e);else{var t=ni(e.g);dr(e=e.g,e.g+t)}break;case 5:dr(e=e.g,e.g+4);break;case 3:for(t=e.l;;){if(!pm(e))throw Error();if(e.h==4){if(e.l!=t)throw Error();break}oo(e)}break;default:throw Error()}}function ua(e,t,n){const i=e.g.l;var r=ni(e.g);let s=(r=e.g.g+r)-i;if(s<=0&&(e.g.l=r,n(t,e,void 0,void 0,void 0),s=r-e.g.g),s)throw Error();return e.g.g=r,e.g.l=i,t}function Xh(e){var t=ni(e.g),n=hm(e=e.g,t);if(e=e.h,A3){var i,r=e;(i=Hc)||(i=Hc=new TextDecoder("utf-8",{fatal:!0})),t=n+t,r=n===0&&t===r.length?r:r.subarray(n,t);try{var s=i.decode(r)}catch(o){if(Ya===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Ya=!0}catch{Ya=!1}}throw!Ya&&(Hc=void 0),o}}else{t=(s=n)+t,n=[];let o,c=null;for(;s<t;){var a=e[s++];a<128?n.push(a):a<224?s>=t?er():(o=e[s++],a<194||(192&o)!=128?(s--,er()):n.push((31&a)<<6|63&o)):a<240?s>=t-1?er():(o=e[s++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=e[s++]))!=128?(s--,er()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?s>=t-2?er():(o=e[s++],(192&o)!=128||o-144+(a<<28)>>30||(192&(i=e[s++]))!=128||(192&(r=e[s++]))!=128?(s--,er()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):er(),n.length>=8192&&(c=zd(c,n),n.length=0)}s=zd(c,n)}return s}function mm(e){const t=ni(e.g);return um(e.g,t)}function Go(e,t,n){var i=ni(e.g);for(i=e.g.g+i;e.g.g<i;)n.push(t(e.g))}var fy=class{constructor(e,t,n,i){if(rf.length){const r=rf.pop();r.init(e,t,n,i),e=r}else e=new class{constructor(r,s,a,o){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(r,s,a,o)}init(r,s,a,{Y:o=!1,ea:c=!1}={}){this.Y=o,this.ea=c,r&&(r=Hh(r,this.ea),this.h=r.buffer,this.j=r.g,this.m=s||0,this.l=a!==void 0?this.m+a:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(e,t,n,i);this.g=e,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:e=!1}={}){this.ha=e}},bo=[];function sf(e){return e?/^\d+$/.test(e)?(Fo(e),new Kl(_e,Re)):null:py||=new Kl(0,0)}var Kl=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let py;function af(e){return e?/^-?\d+$/.test(e)?(Fo(e),new Zl(_e,Re)):null:my||=new Zl(0,0)}var Zl=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let my;function Qr(e,t,n){for(;n>0||t>127;)e.g.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.g.push(t)}function ws(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function Ho(e,t){if(t>=0)ws(e,t);else{for(let n=0;n<9;n++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function Yh(e){var t=_e;e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function ps(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function Fn(e,t,n){ws(e.g,8*t+n)}function qh(e,t){return Fn(e,t,2),t=e.g.end(),ps(e,t),t.push(e.h),t}function jh(e,t){var n=t.pop();for(n=e.h+e.g.length()-n;n>127;)t.push(127&n|128),n>>>=7,e.h++;t.push(n),e.h++}function Vo(e,t,n){Fn(e,t,2),ws(e.g,n.length),ps(e,e.g.end()),ps(e,n)}function To(e,t,n,i){n!=null&&(t=qh(e,t),i(n,e),jh(e,t))}function ri(){const e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var Kh=ri(),gm=ri(),Zh=ri(),$h=ri(),Jh=ri(),_m=ri(),gy=ri(),Wo=ri(),vm=ri(),xm=ri();function si(e,t,n){var i=e.v;vn&&vn in i&&(i=i[vn])&&delete i[t.g],t.h?t.j(e,t.h,t.g,n,t.l):t.j(e,t.g,n,t.l)}var xt=class{constructor(e,t){this.v=em(e,t,void 0,2048)}toJSON(){return tm(this)}j(){var e=$y,t=this.v,n=e.g,i=vn;if(ys&&i&&t[i]?.[n]!=null&&ls(O3,3),t=e.g,Yd&&vn&&Yd===void 0&&(i=(n=this.v)[vn])&&(i=i.da))try{i(n,t,ay)}catch(r){Up(r)}return e.h?e.m(this,e.h,e.g,e.l):e.m(this,e.g,e.defaultValue,e.l)}clone(){const e=this.v,t=0|e[vt];return Nh(this,e,t)?Ih(this,e,!0):new this.constructor(Es(e,t,!1))}};xt.prototype[hs]=us,xt.prototype.toString=function(){return this.v.toString()};var Rs=class{constructor(e,t,n){this.g=e,this.h=t,e=Kh,this.l=!!e&&n===e||!1}};function Xo(e,t){return new Rs(e,t,Kh)}function ym(e,t,n,i,r){To(e,n,bm(t,i),r)}const _y=Xo(function(e,t,n,i,r){return e.h===2&&(ua(e,zh(t,i,n),r),!0)},ym),vy=Xo(function(e,t,n,i,r){return e.h===2&&(ua(e,zh(t,i,n),r),!0)},ym);var Yo=Symbol(),qo=Symbol(),$l=Symbol(),of=Symbol(),cf=Symbol();let Mm,Sm;function Er(e,t,n,i){var r=i[e];if(r)return r;(r={}).qa=i,r.T=function(u){switch(typeof u){case"boolean":return ly||=[0,void 0,!0];case"number":return u>0?void 0:u===0?hy||=[0,void 0]:[-u,void 0];case"string":return[0,u];case"object":return u}}(i[0]);var s=i[1];let a=1;s&&s.constructor===Object&&(r.ba=s,typeof(s=i[++a])=="function"&&(r.ma=!0,Mm??=s,Sm??=i[a+1],s=i[a+=2]));const o={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var c=0;c<s.length;c++)o[s[c]]=s;s=i[++a]}for(c=1;s!==void 0;){let u;typeof s=="number"&&(c+=s,s=i[++a]);var l=void 0;if(s instanceof Rs?u=s:(u=_y,a--),u?.l){s=i[++a],l=i;var h=a;typeof s=="function"&&(s=s(),l[h]=s),l=s}for(h=c+1,typeof(s=i[++a])=="number"&&s<0&&(h-=s,s=i[++a]);c<h;c++){const d=o[c];l?n(r,c,u,l,d):t(r,c,u,d)}}return i[e]=r}function Em(e){return Array.isArray(e)?e[0]instanceof Rs?e:[vy,e]:[e,void 0]}function bm(e,t){return e instanceof xt?e.v:Array.isArray(e)?lr(e,t):void 0}function Qh(e,t,n,i){const r=n.g;e[t]=i?(s,a,o)=>r(s,a,o,i):r}function tu(e,t,n,i,r){const s=n.g;let a,o;e[t]=(c,l,h)=>s(c,l,h,o||=Er(qo,Qh,tu,i).T,a||=eu(i),r)}function eu(e){let t=e[$l];if(t!=null)return t;const n=Er(qo,Qh,tu,e);return t=n.ma?(i,r)=>Mm(i,r,n):(i,r)=>{for(;pm(r)&&r.h!=4;){var s=r.l,a=n[s];if(a==null){var o=n.ba;o&&(o=o[s])&&(o=yy(o))!=null&&(a=n[s]=o)}if(a==null||!a(r,i,s)){if(a=(o=r).m,oo(o),o.ha)var c=void 0;else c=o.g.g-a,o.g.g=a,c=um(o.g,c);a=void 0,o=i,c&&((a=o[vn]??(o[vn]=new jl))[s]??(a[s]=[])).push(c)}}return(i=Bo(i))&&(i.da=n.qa[cf]),!0},e[$l]=t,e[cf]=xy.bind(e),t}function xy(e,t,n,i){var r=this[qo];const s=this[$l],a=lr(void 0,r.T),o=Bo(e);if(o){var c=!1,l=r.ba;if(l){if(r=(h,u,d)=>{if(d.length!==0)if(l[u])for(const m of d){h=dm(m);try{c=!0,s(a,h)}finally{fm(h)}}else i?.(e,u,d)},t==null)Mo(o,r);else if(o!=null){const h=o[t];h&&r(o,t,h)}if(c){let h=0|e[vt];if(2&h&&2048&h&&!n?.Ka)throw Error();const u=Ms(h),d=(m,_)=>{if(Si(e,m,u)!=null){if(n?.Qa===1)return;throw Error()}_!=null&&(h=Ie(e,h,m,_,u)),delete o[m]};t==null?Vp(a,0|a[vt],(m,_)=>{d(m,_)}):d(t,Si(a,t,u))}}}}function yy(e){const t=(e=Em(e))[0].g;if(e=e[1]){const n=eu(e),i=Er(qo,Qh,tu,e).T;return(r,s,a)=>t(r,s,a,i,n)}return t}function jo(e,t,n){e[t]=n.h}function Ko(e,t,n,i){let r,s;const a=n.h;e[t]=(o,c,l)=>a(o,c,l,s||=Er(Yo,jo,Ko,i).T,r||=Tm(i))}function Tm(e){let t=e[of];if(!t){const n=Er(Yo,jo,Ko,e);t=(i,r)=>Am(i,r,n),e[of]=t}return t}function Am(e,t,n){Vp(e,0|e[vt],(i,r)=>{if(r!=null){var s=function(a,o){var c=a[o];if(c)return c;if((c=a.ba)&&(c=c[o])){var l=(c=Em(c))[0].h;if(c=c[1]){const h=Tm(c),u=Er(Yo,jo,Ko,c).T;c=a.ma?Sm(u,h):(d,m,_)=>l(d,m,_,u,h)}else c=l;return a[o]=c}}(n,i);s?s(t,r,i):i<500||ls(Yl,3)}}),(e=Bo(e))&&Mo(e,(i,r,s)=>{for(ps(t,t.g.end()),i=0;i<s.length;i++)ps(t,Ah(s[i])||new Uint8Array(0))})}const My=xn(0);function Cs(e,t){if(Array.isArray(t)){var n=0|t[vt];if(4&n)return t;for(var i=0,r=0;i<t.length;i++){const s=e(t[i]);s!=null&&(t[r++]=s)}return r<i&&(t.length=r),(e=-1537&(5|n))!==n&&Oe(t,e),2&e&&Object.freeze(t),t}}function je(e,t,n){return new Rs(e,t,n)}function Ps(e,t,n){return new Rs(e,t,n)}function Ke(e,t,n){Ie(e,0|e[vt],t,n,Ms(0|e[vt]))}var Sy=Xo(function(e,t,n,i,r){if(e.h!==2)return!1;if(e=Vn(e=ua(e,lr([void 0,void 0],i),r)),r=Ms(i=0|t[vt]),2&i)throw Error();let s=Si(t,n,r);if(s instanceof Mi)2&s.J?(s=s.V(),s.push(e),Ie(t,i,n,s,r)):s.Ma(e);else if(Array.isArray(s)){var a=0|s[vt];8192&a||Oe(s,a|=8192),2&a&&(s=sm(s),Ie(t,i,n,s,r)),s.push(e)}else Ie(t,i,n,$s([e]),r);return!0},function(e,t,n,i,r){if(t instanceof Mi)t.forEach((s,a)=>{To(e,n,lr([a,s],i),r)});else if(Array.isArray(t)){for(let s=0;s<t.length;s++){const a=t[s];Array.isArray(a)&&To(e,n,lr(a,i),r)}$s(t)}});function wm(e,t,n){(t=Qn(t))!=null&&(Fn(e,n,5),e=e.g,Rh(t),Yh(e))}function Rm(e,t,n){if(t=function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(ca(64,i));if(la(i)){if(r==="string")return Zp(i);if(r==="number")return Lh(i)}}(t),t!=null&&(typeof t=="string"&&af(t),t!=null))switch(Fn(e,n,0),typeof t){case"number":e=e.g,ds(t),Qr(e,_e,Re);break;case"bigint":n=BigInt.asUintN(64,t),n=new Zl(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Qr(e.g,n.h,n.g);break;default:n=af(t),Qr(e.g,n.h,n.g)}}function Cm(e,t,n){(t=Ss(t))!=null&&t!=null&&(Fn(e,n,0),Ho(e.g,t))}function Pm(e,t,n){(t=qp(t))!=null&&(Fn(e,n,0),e.g.g.push(t?1:0))}function Lm(e,t,n){(t=Ve(t))!=null&&Vo(e,n,Ip(t))}function Dm(e,t,n,i,r){To(e,n,bm(t,i),r)}function Im(e,t,n){(t=t==null||typeof t=="string"||t instanceof ti?t:void 0)!=null&&Vo(e,n,Hh(t,!0).buffer)}function Um(e,t,n){(t=jp(t))!=null&&t!=null&&(Fn(e,n,0),ws(e.g,t))}function Nm(e,t,n){return(e.h===5||e.h===2)&&(t=As(t,0|t[vt],n),e.h==2?Go(e,Eo,t):t.push(Eo(e.g)),!0)}var Ce=je(function(e,t,n){return e.h===5&&(Ke(t,n,Eo(e.g)),!0)},wm,Wo),Ey=Ps(Nm,function(e,t,n){if((t=Cs(Qn,t))!=null)for(let a=0;a<t.length;a++){var i=e,r=n,s=t[a];s!=null&&(Fn(i,r,5),i=i.g,Rh(s),Yh(i))}},Wo),nu=Ps(Nm,function(e,t,n){if((t=Cs(Qn,t))!=null&&t.length){Fn(e,n,2),ws(e.g,4*t.length);for(let i=0;i<t.length;i++)n=e.g,Rh(t[i]),Yh(n)}},Wo),by=je(function(e,t,n){return e.h===5&&(Ke(t,n,(e=Eo(e.g))===0?void 0:e),!0)},wm,Wo),Wi=je(function(e,t,n){return e.h!==0?e=!1:(Ke(t,n,Vh(e.g,Yp)),e=!0),e},Rm,_m),Yc=je(function(e,t,n){return e.h!==0?t=!1:(Ke(t,n,(e=Vh(e.g,Yp))===My?void 0:e),t=!0),t},Rm,_m),Ty=je(function(e,t,n){return e.h!==0?e=!1:(Ke(t,n,Vh(e.g,K3)),e=!0),e},function(e,t,n){if(t=function(i){if(i==null)return i;var r=typeof i;if(r==="bigint")return String(Z3(64,i));if(la(i)){if(r==="string")return r=fs(Number(i)),xr(r)&&r>=0?i=String(r):((r=i.indexOf("."))!==-1&&(i=i.substring(0,r)),(r=i[0]!=="-"&&((r=i.length)<20||r===20&&i<="18446744073709551615"))||(Fo(i),i=Js(_e,Re))),i;if(r==="number")return(i=fs(i))>=0&&xr(i)||(ds(i),i=Xp(_e,Re)),i}}(t),t!=null&&(typeof t=="string"&&sf(t),t!=null))switch(Fn(e,n,0),typeof t){case"number":e=e.g,ds(t),Qr(e,_e,Re);break;case"bigint":n=BigInt.asUintN(64,t),n=new Kl(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Qr(e.g,n.h,n.g);break;default:n=sf(t),Qr(e.g,n.h,n.g)}},gy),De=je(function(e,t,n){return e.h===0&&(Ke(t,n,Vi(e.g)),!0)},Cm,$h),da=Ps(function(e,t,n){return(e.h===0||e.h===2)&&(t=As(t,0|t[vt],n),e.h==2?Go(e,Vi,t):t.push(Vi(e.g)),!0)},function(e,t,n){if((t=Cs(Ss,t))!=null&&t.length){n=qh(e,n);for(let i=0;i<t.length;i++)Ho(e.g,t[i]);jh(e,n)}},$h),jr=je(function(e,t,n){return e.h===0&&(Ke(t,n,(e=Vi(e.g))===0?void 0:e),!0)},Cm,$h),xe=je(function(e,t,n){return e.h===0&&(Ke(t,n,Wh(e.g)),!0)},Pm,gm),fr=je(function(e,t,n){return e.h===0&&(Ke(t,n,(e=Wh(e.g))===!1?void 0:e),!0)},Pm,gm),Ye=Ps(function(e,t,n){return e.h===2&&(e=Xh(e),As(t,0|t[vt],n).push(e),!0)},function(e,t,n){if((t=Cs(Ve,t))!=null)for(let a=0;a<t.length;a++){var i=e,r=n,s=t[a];s!=null&&Vo(i,r,Ip(s))}},Zh),Fi=je(function(e,t,n){return e.h===2&&(Ke(t,n,(e=Xh(e))===""?void 0:e),!0)},Lm,Zh),ce=je(function(e,t,n){return e.h===2&&(Ke(t,n,Xh(e)),!0)},Lm,Zh),ze=function(e,t,n=Kh){return new Rs(e,t,n)}(function(e,t,n,i,r){return e.h===2&&(i=lr(void 0,i),As(t,0|t[vt],n).push(i),ua(e,i,r),!0)},function(e,t,n,i,r){if(Array.isArray(t)){for(let s=0;s<t.length;s++)Dm(e,t[s],n,i,r);1&(e=0|t[vt])||Oe(t,1|e)}}),me=Xo(function(e,t,n,i,r,s){if(e.h!==2)return!1;let a=0|t[vt];return am(t,a,s,n,Ms(a)),ua(e,t=zh(t,i,n),r),!0},Dm),Fm=je(function(e,t,n){return e.h===2&&(Ke(t,n,mm(e)),!0)},Im,vm),Ay=Ps(function(e,t,n){return(e.h===0||e.h===2)&&(t=As(t,0|t[vt],n),e.h==2?Go(e,ni,t):t.push(ni(e.g)),!0)},function(e,t,n){if((t=Cs(jp,t))!=null)for(let a=0;a<t.length;a++){var i=e,r=n,s=t[a];s!=null&&(Fn(i,r,0),ws(i.g,s))}},Jh),wy=je(function(e,t,n){return e.h===0&&(Ke(t,n,(e=ni(e.g))===0?void 0:e),!0)},Um,Jh),qe=je(function(e,t,n){return e.h===0&&(Ke(t,n,Vi(e.g)),!0)},function(e,t,n){(t=Ss(t))!=null&&(t=parseInt(t,10),Fn(e,n,0),Ho(e.g,t))},xm);class Ry{constructor(t,n){var i=bn;this.g=t,this.h=n,this.m=jt,this.j=At,this.defaultValue=void 0,this.l=i.Oa!=null?Wp:void 0}register(){Io(this)}}function ai(e,t){return new Ry(e,t)}function qi(e,t){return(n,i)=>{{const s={ea:!0};i&&Object.assign(s,i),n=dm(n,void 0,void 0,s);try{const a=new e,o=a.v;eu(t)(o,n);var r=a}finally{fm(n)}}return r}}function Zo(e){return function(){const t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};Am(this.v,t,Er(Yo,jo,Ko,e)),ps(t,t.g.end());const n=new Uint8Array(t.h),i=t.l,r=i.length;let s=0;for(let a=0;a<r;a++){const o=i[a];n.set(o,s),s+=o.length}return t.l=[n],n}}var lf=class extends xt{constructor(e){super(e)}},hf=[0,Fi,je(function(e,t,n){return e.h===2&&(Ke(t,n,(e=mm(e))===_r()?void 0:e),!0)},function(e,t,n){if(t!=null){if(t instanceof xt){const i=t.Ra;return void(i?(t=i(t),t!=null&&Vo(e,n,Hh(t,!0).buffer)):ls(Yl,3))}if(Array.isArray(t))return void ls(Yl,3)}Im(e,t,n)},vm)];let qc,uf=globalThis.trustedTypes;function df(e){var t;return qc===void 0&&(qc=function(){let n=null;if(!uf)return n;try{const i=r=>r;n=uf.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n}()),e=(t=qc)?t.createScriptURL(e):e,new class{constructor(n){this.g=n}toString(){return this.g+""}}(e)}function qa(e,...t){if(t.length===0)return df(e[0]);let n=e[0];for(let i=0;i<t.length;i++)n+=encodeURIComponent(t[i])+e[i+1];return df(n)}var Om=[0,De,qe,xe,-1,da,qe,-1,xe],Cy=class extends xt{constructor(e){super(e)}},Bm=[0,xe,ce,xe,qe,-1,Ps(function(e,t,n){return(e.h===0||e.h===2)&&(t=As(t,0|t[vt],n),e.h==2?Go(e,dy,t):t.push(Vi(e.g)),!0)},function(e,t,n){if((t=Cs(Ss,t))!=null&&t.length){n=qh(e,n);for(let i=0;i<t.length;i++)Ho(e.g,t[i]);jh(e,n)}},xm),ce,-1,[0,xe,-1],qe,xe,-1],km=[0,3,xe,-1,2,[0,[2],De,me,[0,je(function(e,t,n){return e.h===0&&(Ke(t,n,ni(e.g)),!0)},Um,Jh)]],[0,qe,xe,qe,xe,qe,xe,ce,-1],[0,[3,4],ce,-1,me,[0,De],me,[0,qe]],[0]],zm=[0,ce,-2],ff=class extends xt{constructor(e){super(e)}},Gm=[0],Hm=[0,De,xe,1,xe,-4],bn=class extends xt{constructor(e){super(e,2)}},Ue={};Ue[336783863]=[0,ce,xe,-1,De,[0,[1,2,3,4,5,6,7,8,9],me,Gm,me,Bm,me,zm,me,Hm,me,Om,me,[0,ce,-2],me,[0,ce,qe],me,km,me,[0,qe,-1,xe]],[0,ce],xe,[0,[1,3],[2,4],me,[0,da],-1,me,[0,Ye],-1,ze,[0,ce,-1]],ce];var pf=[0,Yc,-1,fr,-3,Yc,da,Fi,jr,Yc,-1,fr,jr,fr,-2,Fi];function ge(e,t){zo(e,3,t)}function Gt(e,t){zo(e,4,t)}var cn=class extends xt{constructor(e){super(e,500)}o(e){return At(this,0,7,e)}},qs=[-1,{}],mf=[0,ce,1,qs],gf=[0,ce,Ye,qs];function On(e,t){Gh(e,1,cn,t)}function ye(e,t){zo(e,10,t)}function $t(e,t){zo(e,15,t)}var Tn=class extends xt{constructor(e){super(e,500)}o(e){return At(this,0,1001,e)}},Vm=[-500,ze,[-500,Fi,-1,Ye,-3,[-2,Ue,xe],ze,hf,jr,-1,mf,gf,ze,[0,Fi,fr],Fi,pf,jr,Ye,987,Ye],4,ze,[-500,ce,-1,[-1,{}],998,ce],ze,[-500,ce,Ye,-1,[-2,{},xe],997,Ye,-1],jr,ze,[-500,ce,Ye,qs,998,Ye],Ye,jr,mf,gf,ze,[0,Fi,-1,qs],Ye,-2,pf,Fi,-1,fr,[0,fr,wy],978,qs,ze,hf];Tn.prototype.g=Zo(Vm);var Py=qi(Tn,Vm),Ly=class extends xt{constructor(e){super(e)}},Wm=class extends xt{constructor(e){super(e)}g(){return Ei(this,Ly,1)}},Xm=[0,ze,[0,De,Ce,ce,-1]],$o=qi(Wm,Xm),Dy=class extends xt{constructor(e){super(e)}},Iy=class extends xt{constructor(e){super(e)}},jc=class extends xt{constructor(e){super(e)}l(){return jt(this,Dy,2)}g(){return Ei(this,Iy,5)}},Ym=qi(class extends xt{constructor(e){super(e)}},[0,Ye,da,nu,[0,qe,[0,De,-3],[0,Ce,-3],[0,De,-1,[0,ze,[0,De,-2]]],ze,[0,Ce,-1,ce,Ce]],ce,-1,Wi,ze,[0,De,Ce],Ye,Wi]),qm=class extends xt{constructor(e){super(e)}},ts=qi(class extends xt{constructor(e){super(e)}},[0,ze,[0,Ce,-4]]),jm=class extends xt{constructor(e){super(e)}},fa=qi(class extends xt{constructor(e){super(e)}},[0,ze,[0,Ce,-4]]),Uy=class extends xt{constructor(e){super(e)}},Ny=[0,De,-1,nu,qe],Km=class extends xt{constructor(e){super(e)}};Km.prototype.g=Zo([0,Ce,-4,Wi]);var Fy=class extends xt{constructor(e){super(e)}},Oy=qi(class extends xt{constructor(e){super(e)}},[0,ze,[0,1,De,ce,Xm],Wi]),_f=class extends xt{constructor(e){super(e)}},By=class extends xt{constructor(e){super(e)}na(){const e=ve(this,1,void 0,void 0,rm);return e??_r()}},ky=class extends xt{constructor(e){super(e)}},Zm=[1,2],zy=qi(class extends xt{constructor(e){super(e)}},[0,ze,[0,Zm,me,[0,nu],me,[0,Fm],De,ce],Wi]),iu=class extends xt{constructor(e){super(e)}},$m=[0,ce,De,Ce,Ye,-1],vf=class extends xt{constructor(e){super(e)}},Gy=[0,xe,-1],xf=class extends xt{constructor(e){super(e)}},co=[1,2,3,4,5,6],Ao=class extends xt{constructor(e){super(e)}g(){return ve(this,1,void 0,void 0,rm)!=null}l(){return Ve(ve(this,2))!=null}},Ee=class extends xt{constructor(e){super(e)}g(){return qp(ve(this,2))??!1}},Jm=[0,Fm,ce,[0,De,Wi,-1],[0,Ty,Wi]],Pe=[0,Jm,xe,[0,co,me,Hm,me,Bm,me,Om,me,Gm,me,zm,me,km],qe],Jo=class extends xt{constructor(e){super(e)}},ru=[0,Pe,Ce,-1,De],Hy=ai(502141897,Jo);Ue[502141897]=ru;var Vy=qi(class extends xt{constructor(e){super(e)}},[0,[0,qe,-1,Ey,Ay],Ny]),Qm=class extends xt{constructor(e){super(e)}},tg=class extends xt{constructor(e){super(e)}},Jl=[0,Pe,Ce,[0,Pe],xe],Wy=ai(508968150,tg);Ue[508968150]=[0,Pe,ru,Jl,Ce,[0,[0,Jm]]],Ue[508968149]=Jl;var Wr=class extends xt{constructor(e){super(e)}l(){return jt(this,iu,2)}g(){oe(this,2)}},eg=[0,Pe,$m];Ue[478825465]=eg;var Xy=class extends xt{constructor(e){super(e)}},ng=class extends xt{constructor(e){super(e)}},su=class extends xt{constructor(e){super(e)}},au=class extends xt{constructor(e){super(e)}},ig=class extends xt{constructor(e){super(e)}},yf=[0,Pe,[0,Pe],eg,-1],rg=[0,Pe,Ce,De],ou=[0,Pe,Ce],sg=[0,Pe,rg,ou,Ce],Yy=ai(479097054,ig);Ue[479097054]=[0,Pe,sg,yf],Ue[463370452]=yf,Ue[464864288]=rg;var qy=ai(462713202,au);Ue[462713202]=sg,Ue[474472470]=ou;var jy=class extends xt{constructor(e){super(e)}},ag=class extends xt{constructor(e){super(e)}},og=class extends xt{constructor(e){super(e)}},cg=class extends xt{constructor(e){super(e)}},cu=[0,Pe,Ce,-1,De],Ql=[0,Pe,Ce,xe];cg.prototype.g=Zo([0,Pe,ou,[0,Pe],ru,Jl,cu,Ql]);var lg=class extends xt{constructor(e){super(e)}},Ky=ai(456383383,lg);Ue[456383383]=[0,Pe,$m];var hg=class extends xt{constructor(e){super(e)}},Zy=ai(476348187,hg);Ue[476348187]=[0,Pe,Gy];var ug=class extends xt{constructor(e){super(e)}},Mf=class extends xt{constructor(e){super(e)}},dg=[0,qe,-1],$y=ai(458105876,class extends xt{constructor(e){super(e)}g(){let e;var t=this.v;const n=0|t[vt];return e=yn(this,n),t=function(i,r,s,a){var o=Mf;!a&&bs(i)&&(s=0|(r=i.v)[vt]);var c=Si(r,2);if(i=!1,c==null){if(a)return tf();c=[]}else if(c.constructor===Mi){if(!(2&c.J)||a)return c;c=c.V()}else Array.isArray(c)?i=!!(2&(0|c[vt])):c=[];if(a){if(!c.length)return tf();i||(i=!0,oa(c))}else i&&(i=!1,$s(c),c=sm(c));return!i&&32&s&&aa(c,32),s=Ie(r,s,2,a=new Mi(c,o,Q3,void 0)),i||Sr(r,s),a}(this,t,n,e),!e&&Mf&&(t.ra=!0),t}});Ue[458105876]=[0,dg,Sy,[!0,Wi,[0,ce,-1,Ye]],[0,da,xe,qe]];var lu=class extends xt{constructor(e){super(e)}},fg=ai(458105758,lu);Ue[458105758]=[0,Pe,ce,dg];var Kc=class extends xt{constructor(e){super(e)}},Sf=[0,by,-1,fr],Jy=class extends xt{constructor(e){super(e)}},pg=class extends xt{constructor(e){super(e)}},th=[1,2];pg.prototype.g=Zo([0,th,me,Sf,me,[0,ze,Sf]]);var mg=class extends xt{constructor(e){super(e)}},Qy=ai(443442058,mg);Ue[443442058]=[0,Pe,ce,De,Ce,Ye,-1,xe,Ce],Ue[514774813]=cu;var gg=class extends xt{constructor(e){super(e)}},tM=ai(516587230,gg);function eh(e,t){return t=t?t.clone():new iu,e.displayNamesLocale!==void 0?oe(t,1,ha(e.displayNamesLocale)):e.displayNamesLocale===void 0&&oe(t,1),e.maxResults!==void 0?bi(t,2,e.maxResults):"maxResults"in e&&oe(t,2),e.scoreThreshold!==void 0?bt(t,3,e.scoreThreshold):"scoreThreshold"in e&&oe(t,3),e.categoryAllowlist!==void 0?So(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&oe(t,4),e.categoryDenylist!==void 0?So(t,5,e.categoryDenylist):"categoryDenylist"in e&&oe(t,5),t}function _g(e){const t=Number(e);return Number.isSafeInteger(t)?t:String(e)}function hu(e,t=-1,n=""){return{categories:e.map(i=>({index:Un(i,1)??0??-1,score:Te(i,2)??0,categoryName:Ve(ve(i,3))??""??"",displayName:Ve(ve(i,4))??""??""})),headIndex:t,headName:n}}function eM(e){const t={classifications:Ei(e,Fy,1).map(n=>hu(jt(n,Wm,4)?.g()??[],Un(n,2)??0,Ve(ve(n,3))??""))};return function(n){return n==null?n:typeof n=="bigint"?(ql(n)?n=Number(n):(n=ca(64,n),n=ql(n)?Number(n):String(n)),n):la(n)?typeof n=="number"?Lh(n):Zp(n):void 0}(ve(e,2,void 0,void 0,yo))!=null&&(t.timestampMs=_g(ve(e,2,void 0,void 0,yo)??nm)),t}function vg(e){var t=cr(e,3,Qn,or()),n=cr(e,2,Ss,or()),i=cr(e,1,Ve,or()),r=cr(e,9,Ve,or());const s={categories:[],keypoints:[]};for(let a=0;a<t.length;a++)s.categories.push({score:t[a],index:n[a]??-1,categoryName:i[a]??"",displayName:r[a]??""});if((t=jt(e,jc,4)?.l())&&(s.boundingBox={originX:Un(t,1,Di)??0,originY:Un(t,2,Di)??0,width:Un(t,3,Di)??0,height:Un(t,4,Di)??0,angle:0}),jt(e,jc,4)?.g().length)for(const a of jt(e,jc,4).g())s.keypoints.push({x:ve(a,1,void 0,Di,Qn)??0,y:ve(a,2,void 0,Di,Qn)??0,score:ve(a,4,void 0,Di,Qn)??0,label:Ve(ve(a,3,void 0,Di))??""});return s}function Qo(e){const t=[];for(const n of Ei(e,jm,1))t.push({x:Te(n,1)??0,y:Te(n,2)??0,z:Te(n,3)??0,visibility:Te(n,4)??0});return t}function js(e){const t=[];for(const n of Ei(e,qm,1))t.push({x:Te(n,1)??0,y:Te(n,2)??0,z:Te(n,3)??0,visibility:Te(n,4)??0});return t}function Ef(e){return Array.from(e,t=>t>127?t-256:t)}function bf(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let n=0,i=0,r=0;for(let s=0;s<e.length;s++)n+=e[s]*t[s],i+=e[s]*e[s],r+=t[s]*t[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let ja;Ue[516587230]=[0,Pe,cu,Ql,Ce],Ue[518928384]=Ql;const nM=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function xg(e){if(e)return!0;if(ja===void 0)try{await WebAssembly.instantiate(nM),ja=!0}catch{ja=!1}return ja}async function Ka(e,t,n){return{wasmLoaderPath:`${t}/${e}_${n=`wasm${n?"_module":""}${await xg(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var Xr=class{};function yg(){var e=navigator;return typeof OffscreenCanvas<"u"&&(!function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")}(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function Tf(e){if(typeof importScripts!="function"){const t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise((n,i)=>{t.addEventListener("load",()=>{n()},!1),t.addEventListener("error",r=>{i(r)},!1),document.body.appendChild(t)})}try{importScripts(e.toString())}catch(t){if(!(t instanceof TypeError))throw t;{const n=self.import;n?await n(e.toString()):await import(e.toString())}}}function Mg(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function yt(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function Af(e,t,n){if(!e.i.canvas)throw Error("No OpenGL canvas configured.");if(n?e.i._bindTextureToStream(n):e.i._bindTextureToCanvas(),!(n=e.i.canvas.getContext("webgl2")||e.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=Mg(t);return!e.l||i===e.i.canvas.width&&r===e.i.canvas.height||(e.i.canvas.width=i,e.i.canvas.height=r),[i,r]}function wf(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(t.length);for(let r=0;r<t.length;r++)i[r]=e.i.stringToNewUTF8(t[r]);t=e.i._malloc(4*i.length),e.i.HEAPU32.set(i,t>>2),n(t);for(const r of i)e.i._free(r);e.i._free(t)}function qn(e,t,n){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=n}function Ii(e,t,n){let i=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(r,s,a)=>{s?(n(i,a),i=[]):i.push(r)}}Xr.forVisionTasks=function(e,t=!1){return Ka("vision",e??qa``,t)},Xr.forTextTasks=function(e,t=!1){return Ka("text",e??qa``,t)},Xr.forGenAiTasks=function(e,t=!1){return Ka("genai",e??qa``,t)},Xr.forAudioTasks=function(e,t=!1){return Ka("audio",e??qa``,t)},Xr.isSimdSupported=function(e=!1){return xg(e)};async function iM(e,t,n,i){return e=await(async(r,s,a,o,c)=>{if(s&&await Tf(s),!self.ModuleFactory||a&&(await Tf(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((s=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new r(c,o)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await e.o(i),e}function Zc(e,t){const n=jt(e.baseOptions,Ao,1)||new Ao;typeof t=="string"?(oe(n,2,ha(t)),oe(n,1)):t instanceof Uint8Array&&(oe(n,1,wh(t,!1)),oe(n,2)),At(e.baseOptions,0,1,n)}function Rf(e){try{const t=e.H.length;if(t===1)throw Error(e.H[0].message);if(t>1)throw Error("Encountered multiple errors: "+e.H.map(n=>n.message).join(", "))}finally{e.H=[]}}function ut(e,t){e.C=Math.max(e.C,t)}function tc(e,t){e.B=new cn,Mn(e.B,2,"PassThroughCalculator"),ge(e.B,"free_memory"),Gt(e.B,"free_memory_unused_out"),ye(t,"free_memory"),On(t,e.B)}function ms(e,t){ge(e.B,t),Gt(e.B,t+"_unused_out")}function ec(e){e.g.addBoolToStream(!0,"free_memory",e.C)}var nh=class{constructor(e){this.g=e,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(e,t=!0){if(t){const n=e.baseOptions||{};if(e.baseOptions?.modelAssetBuffer&&e.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(jt(this.baseOptions,Ao,1)?.g()||jt(this.baseOptions,Ao,1)?.l()||e.baseOptions?.modelAssetBuffer||e.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(i,r){let s=jt(i.baseOptions,xf,3);if(!s){var a=s=new xf,o=new ff;Ys(a,4,co,o)}"delegate"in r&&(r.delegate==="GPU"?(r=s,a=new Cy,Ys(r,2,co,a)):(r=s,a=new ff,Ys(r,4,co,a))),At(i.baseOptions,0,3,s)}(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then(i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)}).then(i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),Zc(this,"/model.dat"),this.m(),this.L()});if(n.modelAssetBuffer instanceof Uint8Array)Zc(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return async function(i){const r=[];for(var s=0;;){const{done:a,value:o}=await i.read();if(a)break;r.push(o),s+=o.length}if(r.length===0)return new Uint8Array(0);if(r.length===1)return r[0];i=new Uint8Array(s),s=0;for(const a of r)i.set(a,s),s+=a.length;return i}(n.modelAssetBuffer).then(i=>{Zc(this,i),this.m(),this.L()})}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let e;if(this.g.ca(t=>{e=Py(t)}),!e)throw Error("Failed to retrieve CalculatorGraphConfig");return e}setGraph(e,t){this.g.attachErrorListener((n,i)=>{this.H.push(Error(i))}),this.g.Ja(),this.g.setGraph(e,t),this.B=void 0,Rf(this)}finishProcessing(){this.g.finishProcessing(),Rf(this)}close(){this.B=void 0,this.g.closeGraph()}};function zi(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}nh.prototype.close=nh.prototype.close;class rM{constructor(t,n,i,r){this.g=t,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Cf(e,t,n){const i=e.g;if(n=zi(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(e.h,n),n}function Pf(e,t){const n=e.g,i=zi(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=zi(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(e.O),n.vertexAttribPointer(e.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=zi(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(e.L),n.vertexAttribPointer(e.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new rM(n,i,r,s)}function uu(e,t){if(e.g){if(t!==e.g)throw Error("Cannot change GL context once initialized")}else e.g=t}function sM(e,t,n,i){return uu(e,t),e.h||(e.m(),e.D()),n?(e.u||(e.u=Pf(e,!0)),n=e.u):(e.A||(e.A=Pf(e,!1)),n=e.A),t.useProgram(e.h),n.bind(),e.l(),e=i(),n.g.bindVertexArray(null),e}function Sg(e,t,n){return uu(e,t),e=zi(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function Eg(e,t,n){uu(e,t),e.B||(e.B=zi(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.B),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function aM(e){e.g?.bindFramebuffer(e.g.FRAMEBUFFER,null)}var bg=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const e=this.g;if(this.h=zi(e.createProgram(),"Failed to create WebGL program"),this.X=Cf(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.W=Cf(this,this.H(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.O=e.getAttribLocation(this.h,"aVertex"),this.L=e.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const e=this.g;e.deleteProgram(this.h),e.deleteShader(this.X),e.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function _i(e,t){switch(t){case 0:return e.g.find(n=>n instanceof Uint8Array);case 1:return e.g.find(n=>n instanceof Float32Array);case 2:return e.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${t}`)}}function ih(e){var t=_i(e,1);if(!t){if(t=_i(e,0))t=new Float32Array(t).map(i=>i/255);else{t=new Float32Array(e.width*e.height);const i=gs(e);var n=du(e);if(Eg(n,i,Tg(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(e.width*e.height*4),i.readPixels(0,0,e.width,e.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<t.length;++r,s+=4)t[r]=n[s]}else i.readPixels(0,0,e.width,e.height,i.RED,i.FLOAT,t)}e.g.push(t)}return t}function Tg(e){let t=_i(e,2);if(!t){const n=gs(e);t=wg(e);const i=ih(e),r=Ag(e);n.texImage2D(n.TEXTURE_2D,0,r,e.width,e.height,0,n.RED,n.FLOAT,i),rh(e)}return t}function gs(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=zi(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function Ag(e){if(e=gs(e),!Za)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))Za=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Za=e.R16F}return Za}function du(e){return e.l||(e.l=new bg),e.l}function wg(e){const t=gs(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=_i(e,2);return n||(n=Sg(du(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(n),e.j=!0),t.bindTexture(t.TEXTURE_2D,n),n}function rh(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var Za,ke=class{constructor(e,t,n,i,r,s,a){this.g=e,this.m=t,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--Lf===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!_i(this,0)}ka(){return!!_i(this,1)}R(){return!!_i(this,2)}ja(){return(t=_i(e=this,0))||(t=ih(e),t=new Uint8Array(t.map(n=>Math.round(255*n))),e.g.push(t)),t;var e,t}ia(){return ih(this)}N(){return Tg(this)}clone(){const e=[];for(const t of this.g){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{const i=gs(this),r=du(this);i.activeTexture(i.TEXTURE1),n=Sg(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=Ag(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),Eg(r,i,n),sM(r,i,!1,()=>{wg(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),rh(this)}),aM(r),rh(this)}}e.push(n)}return new ke(e,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&gs(this).deleteTexture(_i(this,2)),Lf=-1}};ke.prototype.close=ke.prototype.close,ke.prototype.clone=ke.prototype.clone,ke.prototype.getAsWebGLTexture=ke.prototype.N,ke.prototype.getAsFloat32Array=ke.prototype.ia,ke.prototype.getAsUint8Array=ke.prototype.ja,ke.prototype.hasWebGLTexture=ke.prototype.R,ke.prototype.hasFloat32Array=ke.prototype.ka,ke.prototype.hasUint8Array=ke.prototype.Fa;var Lf=250;function Wn(...e){return e.map(([t,n])=>({start:t,end:n}))}const oM=function(e){return class extends e{Ja(){this.i._registerModelResourcesGraphService()}}}((Df=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:yg()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(e){const t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){const n=e.length,i=this.i._malloc(n);this.i.HEAPU8.set(e,i),t?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(e,t,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),yt(this,i||"input_audio",s=>{yt(this,r=r||"audio_header",a=>{this.i._configureAudio(s,a,e,t??0,n)})})}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}ca(e){qn(this,"__graph_config__",t=>{e(t)}),yt(this,"__graph_config__",t=>{this.i._getGraphConfig(t,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,i,r){const s=4*e.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(e,this.g/4),yt(this,i,a=>{this.i._addAudioToInputStream(this.g,t,n,a,r)})}addGpuBufferToStream(e,t,n){yt(this,t,i=>{const[r,s]=Af(this,e,i);this.i._addBoundTextureToStream(i,r,s,n)})}addBoolToStream(e,t,n){yt(this,t,i=>{this.i._addBoolToInputStream(e,i,n)})}addDoubleToStream(e,t,n){yt(this,t,i=>{this.i._addDoubleToInputStream(e,i,n)})}addFloatToStream(e,t,n){yt(this,t,i=>{this.i._addFloatToInputStream(e,i,n)})}addIntToStream(e,t,n){yt(this,t,i=>{this.i._addIntToInputStream(e,i,n)})}addUintToStream(e,t,n){yt(this,t,i=>{this.i._addUintToInputStream(e,i,n)})}addStringToStream(e,t,n){yt(this,t,i=>{yt(this,e,r=>{this.i._addStringToInputStream(r,i,n)})})}addStringRecordToStream(e,t,n){yt(this,t,i=>{wf(this,Object.keys(e),r=>{wf(this,Object.values(e),s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(e).length,i,n)})})})}addProtoToStream(e,t,n,i){yt(this,n,r=>{yt(this,t,s=>{const a=this.i._malloc(e.length);this.i.HEAPU8.set(e,a),this.i._addProtoToInputStream(a,e.length,s,r,i),this.i._free(a)})})}addEmptyPacketToStream(e,t){yt(this,e,n=>{this.i._addEmptyPacketToInputStream(n,t)})}addBoolVectorToStream(e,t,n){yt(this,t,i=>{const r=this.i._allocateBoolVector(e.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of e)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)})}addDoubleVectorToStream(e,t,n){yt(this,t,i=>{const r=this.i._allocateDoubleVector(e.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of e)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)})}addFloatVectorToStream(e,t,n){yt(this,t,i=>{const r=this.i._allocateFloatVector(e.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of e)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)})}addIntVectorToStream(e,t,n){yt(this,t,i=>{const r=this.i._allocateIntVector(e.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of e)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)})}addUintVectorToStream(e,t,n){yt(this,t,i=>{const r=this.i._allocateUintVector(e.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of e)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)})}addStringVectorToStream(e,t,n){yt(this,t,i=>{const r=this.i._allocateStringVector(e.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of e)yt(this,s,a=>{this.i._addStringVectorEntry(r,a)});this.i._addStringVectorToInputStream(r,i,n)})}addBoolToInputSidePacket(e,t){yt(this,t,n=>{this.i._addBoolToInputSidePacket(e,n)})}addDoubleToInputSidePacket(e,t){yt(this,t,n=>{this.i._addDoubleToInputSidePacket(e,n)})}addFloatToInputSidePacket(e,t){yt(this,t,n=>{this.i._addFloatToInputSidePacket(e,n)})}addIntToInputSidePacket(e,t){yt(this,t,n=>{this.i._addIntToInputSidePacket(e,n)})}addUintToInputSidePacket(e,t){yt(this,t,n=>{this.i._addUintToInputSidePacket(e,n)})}addStringToInputSidePacket(e,t){yt(this,t,n=>{yt(this,e,i=>{this.i._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(e,t,n){yt(this,n,i=>{yt(this,t,r=>{const s=this.i._malloc(e.length);this.i.HEAPU8.set(e,s),this.i._addProtoToInputSidePacket(s,e.length,r,i),this.i._free(s)})})}addBoolVectorToInputSidePacket(e,t){yt(this,t,n=>{const i=this.i._allocateBoolVector(e.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of e)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(e,t){yt(this,t,n=>{const i=this.i._allocateDoubleVector(e.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of e)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(e,t){yt(this,t,n=>{const i=this.i._allocateFloatVector(e.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of e)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(e,t){yt(this,t,n=>{const i=this.i._allocateIntVector(e.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of e)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)})}addUintVectorToInputSidePacket(e,t){yt(this,t,n=>{const i=this.i._allocateUintVector(e.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of e)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(e,t){yt(this,t,n=>{const i=this.i._allocateStringVector(e.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of e)yt(this,r,s=>{this.i._addStringVectorEntry(i,s)});this.i._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(e,t){qn(this,e,t),yt(this,e,n=>{this.i._attachBoolListener(n)})}attachBoolVectorListener(e,t){Ii(this,e,t),yt(this,e,n=>{this.i._attachBoolVectorListener(n)})}attachIntListener(e,t){qn(this,e,t),yt(this,e,n=>{this.i._attachIntListener(n)})}attachIntVectorListener(e,t){Ii(this,e,t),yt(this,e,n=>{this.i._attachIntVectorListener(n)})}attachUintListener(e,t){qn(this,e,t),yt(this,e,n=>{this.i._attachUintListener(n)})}attachUintVectorListener(e,t){Ii(this,e,t),yt(this,e,n=>{this.i._attachUintVectorListener(n)})}attachDoubleListener(e,t){qn(this,e,t),yt(this,e,n=>{this.i._attachDoubleListener(n)})}attachDoubleVectorListener(e,t){Ii(this,e,t),yt(this,e,n=>{this.i._attachDoubleVectorListener(n)})}attachFloatListener(e,t){qn(this,e,t),yt(this,e,n=>{this.i._attachFloatListener(n)})}attachFloatVectorListener(e,t){Ii(this,e,t),yt(this,e,n=>{this.i._attachFloatVectorListener(n)})}attachStringListener(e,t){qn(this,e,t),yt(this,e,n=>{this.i._attachStringListener(n)})}attachStringVectorListener(e,t){Ii(this,e,t),yt(this,e,n=>{this.i._attachStringVectorListener(n)})}attachProtoListener(e,t,n){qn(this,e,t),yt(this,e,i=>{this.i._attachProtoListener(i,n||!1)})}attachProtoVectorListener(e,t,n){Ii(this,e,t),yt(this,e,i=>{this.i._attachProtoVectorListener(i,n||!1)})}attachAudioListener(e,t,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),qn(this,e,(i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,r)}),yt(this,e,i=>{this.i._attachAudioListener(i,n||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Df{get ga(){return this.i}pa(e,t,n){yt(this,t,i=>{const[r,s]=Af(this,e,i);this.ga._addBoundTextureAsImageToStream(i,r,s,n)})}Z(e,t){qn(this,e,t),yt(this,e,n=>{this.ga._attachImageListener(n)})}aa(e,t){Ii(this,e,t),yt(this,e,n=>{this.ga._attachImageVectorListener(n)})}}));var Df,Xn=class extends oM{};async function Xt(e,t,n){return async function(i,r,s,a){return iM(i,r,s,a)}(e,n.canvas??(yg()?void 0:document.createElement("canvas")),t,n)}function Rg(e,t,n,i){if(e.U){const s=new Km;if(n?.regionOfInterest){if(!e.oa)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");bt(s,1,(r.left+r.right)/2),bt(s,2,(r.top+r.bottom)/2),bt(s,4,r.right-r.left),bt(s,3,r.bottom-r.top)}else bt(s,1,.5),bt(s,2,.5),bt(s,4,1),bt(s,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(bt(s,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){const[a,o]=Mg(t);n=Te(s,3)*o/a,r=Te(s,4)*a/o,bt(s,4,n),bt(s,3,r)}}e.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",e.U,i)}e.g.pa(t,e.X,i??performance.now()),e.finishProcessing()}function Yn(e,t,n){if(e.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Rg(e,t,n,e.C+1)}function oi(e,t,n,i){if(!e.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Rg(e,t,n,i)}function _s(e,t,n,i){var r=t.data;const s=t.width,a=s*(t=t.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return e=new ke([r],n,!1,e.g.i.canvas,e.P,s,t),i?e.clone():e}var Sn=class extends nh{constructor(e,t,n,i){super(e),this.g=e,this.X=t,this.U=n,this.oa=i,this.P=new bg}l(e,t=!0){if("runningMode"in e&&oe(this.baseOptions,2,Qs(!!e.runningMode&&e.runningMode!=="IMAGE")),e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(e,t)}close(){this.P.close(),super.close()}};Sn.prototype.close=Sn.prototype.close;var Rn=class extends Sn{constructor(e,t){super(new Xn(e,t),"image_in","norm_rect_in",!1),this.j={detections:[]},At(e=this.h=new Jo,0,1,t=new Ee),bt(this.h,2,.5),bt(this.h,3,.3)}get baseOptions(){return jt(this.h,Ee,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return"minDetectionConfidence"in e&&bt(this.h,2,e.minDetectionConfidence??.5),"minSuppressionThreshold"in e&&bt(this.h,3,e.minSuppressionThreshold??.3),this.l(e)}F(e,t){return this.j={detections:[]},Yn(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},oi(this,e,n,t),this.j}m(){var e=new Tn;ye(e,"image_in"),ye(e,"norm_rect_in"),$t(e,"detections");const t=new bn;si(t,Hy,this.h);const n=new cn;Mn(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),ge(n,"IMAGE:image_in"),ge(n,"NORM_RECT:norm_rect_in"),Gt(n,"DETECTIONS:detections"),n.o(t),On(e,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=Ym(s),this.j.detections.push(vg(i));ut(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{ut(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Rn.prototype.detectForVideo=Rn.prototype.G,Rn.prototype.detect=Rn.prototype.F,Rn.prototype.setOptions=Rn.prototype.o,Rn.createFromModelPath=async function(e,t){return Xt(Rn,e,{baseOptions:{modelAssetPath:t}})},Rn.createFromModelBuffer=function(e,t){return Xt(Rn,e,{baseOptions:{modelAssetBuffer:t}})},Rn.createFromOptions=function(e,t){return Xt(Rn,e,t)};var fu=Wn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),pu=Wn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),mu=Wn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),Cg=Wn([474,475],[475,476],[476,477],[477,474]),gu=Wn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),_u=Wn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),Pg=Wn([469,470],[470,471],[471,472],[472,469]),vu=Wn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Lg=[...fu,...pu,...mu,...gu,..._u,...vu],Dg=Wn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function If(e){e.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Se=class extends Sn{constructor(e,t){super(new Xn(e,t),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,At(e=this.h=new tg,0,1,t=new Ee),this.A=new Qm,At(this.h,0,3,this.A),this.u=new Jo,At(this.h,0,2,this.u),bi(this.u,4,1),bt(this.u,2,.5),bt(this.A,2,.5),bt(this.h,4,.5)}get baseOptions(){return jt(this.h,Ee,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return"numFaces"in e&&bi(this.u,4,e.numFaces??1),"minFaceDetectionConfidence"in e&&bt(this.u,2,e.minFaceDetectionConfidence??.5),"minTrackingConfidence"in e&&bt(this.h,4,e.minTrackingConfidence??.5),"minFacePresenceConfidence"in e&&bt(this.A,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}F(e,t){return If(this),Yn(this,e,t),this.j}G(e,t,n){return If(this),oi(this,e,n,t),this.j}m(){var e=new Tn;ye(e,"image_in"),ye(e,"norm_rect"),$t(e,"face_landmarks");const t=new bn;si(t,Wy,this.h);const n=new cn;Mn(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),ge(n,"IMAGE:image_in"),ge(n,"NORM_RECT:norm_rect"),Gt(n,"NORM_LANDMARKS:face_landmarks"),n.o(t),On(e,n),this.g.attachProtoVectorListener("face_landmarks",(i,r)=>{for(const s of i)i=fa(s),this.j.faceLandmarks.push(Qo(i));ut(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{ut(this,i)}),this.outputFaceBlendshapes&&($t(e,"blendshapes"),Gt(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=$o(s),this.j.faceBlendshapes.push(hu(i.g()??[]));ut(this,r)}),this.g.attachEmptyPacketListener("blendshapes",i=>{ut(this,i)})),this.outputFacialTransformationMatrixes&&($t(e,"face_geometry"),Gt(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=jt(i=Vy(s),Uy,2))&&this.j.facialTransformationMatrixes.push({rows:Un(i,1)??0??0,columns:Un(i,2)??0??0,data:cr(i,3,Qn,or()).slice()??[]});ut(this,r)}),this.g.attachEmptyPacketListener("face_geometry",i=>{ut(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Se.prototype.detectForVideo=Se.prototype.G,Se.prototype.detect=Se.prototype.F,Se.prototype.setOptions=Se.prototype.o,Se.createFromModelPath=function(e,t){return Xt(Se,e,{baseOptions:{modelAssetPath:t}})},Se.createFromModelBuffer=function(e,t){return Xt(Se,e,{baseOptions:{modelAssetBuffer:t}})},Se.createFromOptions=function(e,t){return Xt(Se,e,t)},Se.FACE_LANDMARKS_LIPS=fu,Se.FACE_LANDMARKS_LEFT_EYE=pu,Se.FACE_LANDMARKS_LEFT_EYEBROW=mu,Se.FACE_LANDMARKS_LEFT_IRIS=Cg,Se.FACE_LANDMARKS_RIGHT_EYE=gu,Se.FACE_LANDMARKS_RIGHT_EYEBROW=_u,Se.FACE_LANDMARKS_RIGHT_IRIS=Pg,Se.FACE_LANDMARKS_FACE_OVAL=vu,Se.FACE_LANDMARKS_CONTOURS=Lg,Se.FACE_LANDMARKS_TESSELATION=Dg;var xu=Wn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Uf(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function Nf(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function Ff(e,t=!0){const n=[];for(const r of e){var i=$o(r);e=[];for(const s of i.g())i=t&&Un(s,1)!=null?Un(s,1)??0:-1,e.push({score:Te(s,2)??0,index:i,categoryName:Ve(ve(s,3))??""??"",displayName:Ve(ve(s,4))??""??""});n.push(e)}return n}var pn=class extends Sn{constructor(e,t){super(new Xn(e,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],At(e=this.j=new ig,0,1,t=new Ee),this.u=new au,At(this.j,0,2,this.u),this.D=new su,At(this.u,0,3,this.D),this.A=new ng,At(this.u,0,2,this.A),this.h=new Xy,At(this.j,0,3,this.h),bt(this.A,2,.5),bt(this.u,4,.5),bt(this.D,2,.5)}get baseOptions(){return jt(this.j,Ee,1)}set baseOptions(e){At(this.j,0,1,e)}o(e){if(bi(this.A,3,e.numHands??1),"minHandDetectionConfidence"in e&&bt(this.A,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&bt(this.u,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&bt(this.D,2,e.minHandPresenceConfidence??.5),e.cannedGesturesClassifierOptions){var t=new Wr,n=t,i=eh(e.cannedGesturesClassifierOptions,jt(this.h,Wr,3)?.l());At(n,0,2,i),At(this.h,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&jt(this.h,Wr,3)?.g();return e.customGesturesClassifierOptions?(At(n=t=new Wr,0,2,i=eh(e.customGesturesClassifierOptions,jt(this.h,Wr,4)?.l())),At(this.h,0,4,t)):e.customGesturesClassifierOptions===void 0&&jt(this.h,Wr,4)?.g(),this.l(e)}Ha(e,t){return Uf(this),Yn(this,e,t),Nf(this)}Ia(e,t,n){return Uf(this),oi(this,e,n,t),Nf(this)}m(){var e=new Tn;ye(e,"image_in"),ye(e,"norm_rect"),$t(e,"hand_gestures"),$t(e,"hand_landmarks"),$t(e,"world_hand_landmarks"),$t(e,"handedness");const t=new bn;si(t,Yy,this.j);const n=new cn;Mn(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),ge(n,"IMAGE:image_in"),ge(n,"NORM_RECT:norm_rect"),Gt(n,"HAND_GESTURES:hand_gestures"),Gt(n,"LANDMARKS:hand_landmarks"),Gt(n,"WORLD_LANDMARKS:world_hand_landmarks"),Gt(n,"HANDEDNESS:handedness"),n.o(t),On(e,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i){i=fa(s);const a=[];for(const o of Ei(i,jm,1))a.push({x:Te(o,1)??0,y:Te(o,2)??0,z:Te(o,3)??0,visibility:Te(o,4)??0});this.landmarks.push(a)}ut(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{ut(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i){i=ts(s);const a=[];for(const o of Ei(i,qm,1))a.push({x:Te(o,1)??0,y:Te(o,2)??0,z:Te(o,3)??0,visibility:Te(o,4)??0});this.worldLandmarks.push(a)}ut(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{ut(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,r)=>{this.gestures.push(...Ff(i,!1)),ut(this,r)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{ut(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{this.handedness.push(...Ff(i)),ut(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{ut(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function Of(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}pn.prototype.recognizeForVideo=pn.prototype.Ia,pn.prototype.recognize=pn.prototype.Ha,pn.prototype.setOptions=pn.prototype.o,pn.createFromModelPath=function(e,t){return Xt(pn,e,{baseOptions:{modelAssetPath:t}})},pn.createFromModelBuffer=function(e,t){return Xt(pn,e,{baseOptions:{modelAssetBuffer:t}})},pn.createFromOptions=function(e,t){return Xt(pn,e,t)},pn.HAND_CONNECTIONS=xu;var an=class extends Sn{constructor(e,t){super(new Xn(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],At(e=this.h=new au,0,1,t=new Ee),this.u=new su,At(this.h,0,3,this.u),this.j=new ng,At(this.h,0,2,this.j),bi(this.j,3,1),bt(this.j,2,.5),bt(this.u,2,.5),bt(this.h,4,.5)}get baseOptions(){return jt(this.h,Ee,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return"numHands"in e&&bi(this.j,3,e.numHands??1),"minHandDetectionConfidence"in e&&bt(this.j,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&bt(this.h,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&bt(this.u,2,e.minHandPresenceConfidence??.5),this.l(e)}F(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Yn(this,e,t),Of(this)}G(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],oi(this,e,n,t),Of(this)}m(){var e=new Tn;ye(e,"image_in"),ye(e,"norm_rect"),$t(e,"hand_landmarks"),$t(e,"world_hand_landmarks"),$t(e,"handedness");const t=new bn;si(t,qy,this.h);const n=new cn;Mn(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),ge(n,"IMAGE:image_in"),ge(n,"NORM_RECT:norm_rect"),Gt(n,"LANDMARKS:hand_landmarks"),Gt(n,"WORLD_LANDMARKS:world_hand_landmarks"),Gt(n,"HANDEDNESS:handedness"),n.o(t),On(e,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i)i=fa(s),this.landmarks.push(Qo(i));ut(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{ut(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i)i=ts(s),this.worldLandmarks.push(js(i));ut(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{ut(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{var s=this.handedness,a=s.push;const o=[];for(const c of i){i=$o(c);const l=[];for(const h of i.g())l.push({score:Te(h,2)??0,index:Un(h,1)??0??-1,categoryName:Ve(ve(h,3))??""??"",displayName:Ve(ve(h,4))??""??""});o.push(l)}a.call(s,...o),ut(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{ut(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};an.prototype.detectForVideo=an.prototype.G,an.prototype.detect=an.prototype.F,an.prototype.setOptions=an.prototype.o,an.createFromModelPath=function(e,t){return Xt(an,e,{baseOptions:{modelAssetPath:t}})},an.createFromModelBuffer=function(e,t){return Xt(an,e,{baseOptions:{modelAssetBuffer:t}})},an.createFromOptions=function(e,t){return Xt(an,e,t)},an.HAND_CONNECTIONS=xu;var Ig=Wn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Bf(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function kf(e){try{if(!e.D)return e.h;e.D(e.h)}finally{ec(e)}}function $a(e,t){e=fa(e),t.push(Qo(e))}var pe=class extends Sn{constructor(e,t){super(new Xn(e,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,At(e=this.j=new cg,0,1,t=new Ee),this.I=new su,At(this.j,0,2,this.I),this.W=new jy,At(this.j,0,3,this.W),this.u=new Jo,At(this.j,0,4,this.u),this.O=new Qm,At(this.j,0,5,this.O),this.A=new ag,At(this.j,0,6,this.A),this.M=new og,At(this.j,0,7,this.M),bt(this.u,2,.5),bt(this.u,3,.3),bt(this.O,2,.5),bt(this.A,2,.5),bt(this.A,3,.3),bt(this.M,2,.5),bt(this.I,2,.5)}get baseOptions(){return jt(this.j,Ee,1)}set baseOptions(e){At(this.j,0,1,e)}o(e){return"minFaceDetectionConfidence"in e&&bt(this.u,2,e.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in e&&bt(this.u,3,e.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in e&&bt(this.O,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&bt(this.A,2,e.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in e&&bt(this.A,3,e.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in e&&bt(this.M,2,e.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&bt(this.I,2,e.minHandLandmarksConfidence??.5),this.l(e)}F(e,t,n){const i=typeof t!="function"?t:{};return this.D=typeof t=="function"?t:n,Bf(this),Yn(this,e,i),kf(this)}G(e,t,n,i){const r=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,Bf(this),oi(this,e,r,t),kf(this)}m(){var e=new Tn;ye(e,"input_frames_image"),$t(e,"pose_landmarks"),$t(e,"pose_world_landmarks"),$t(e,"face_landmarks"),$t(e,"left_hand_landmarks"),$t(e,"left_hand_world_landmarks"),$t(e,"right_hand_landmarks"),$t(e,"right_hand_world_landmarks");const t=new bn,n=new lf;Mn(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),function(r,s){if(s!=null)if(Array.isArray(s))oe(r,2,ko(s,0,ta));else{if(!(typeof s=="string"||s instanceof ti||Th(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Ui(r,2,wh(s,!1),_r())}}(n,this.j.g());const i=new cn;Mn(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Gh(i,8,lf,n),ge(i,"IMAGE:input_frames_image"),Gt(i,"POSE_LANDMARKS:pose_landmarks"),Gt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Gt(i,"FACE_LANDMARKS:face_landmarks"),Gt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Gt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Gt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Gt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),On(e,i),tc(this,e),this.g.attachProtoListener("pose_landmarks",(r,s)=>{$a(r,this.h.poseLandmarks),ut(this,s)}),this.g.attachEmptyPacketListener("pose_landmarks",r=>{ut(this,r)}),this.g.attachProtoListener("pose_world_landmarks",(r,s)=>{var a=this.h.poseWorldLandmarks;r=ts(r),a.push(js(r)),ut(this,s)}),this.g.attachEmptyPacketListener("pose_world_landmarks",r=>{ut(this,r)}),this.outputPoseSegmentationMasks&&(Gt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),ms(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",(r,s)=>{this.h.poseSegmentationMasks=[_s(this,r,!0,!this.D)],ut(this,s)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",r=>{this.h.poseSegmentationMasks=[],ut(this,r)})),this.g.attachProtoListener("face_landmarks",(r,s)=>{$a(r,this.h.faceLandmarks),ut(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",r=>{ut(this,r)}),this.outputFaceBlendshapes&&($t(e,"extra_blendshapes"),Gt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=$o(r),a.push(hu(r.g()??[]))),ut(this,s)}),this.g.attachEmptyPacketListener("extra_blendshapes",r=>{ut(this,r)})),this.g.attachProtoListener("left_hand_landmarks",(r,s)=>{$a(r,this.h.leftHandLandmarks),ut(this,s)}),this.g.attachEmptyPacketListener("left_hand_landmarks",r=>{ut(this,r)}),this.g.attachProtoListener("left_hand_world_landmarks",(r,s)=>{var a=this.h.leftHandWorldLandmarks;r=ts(r),a.push(js(r)),ut(this,s)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",r=>{ut(this,r)}),this.g.attachProtoListener("right_hand_landmarks",(r,s)=>{$a(r,this.h.rightHandLandmarks),ut(this,s)}),this.g.attachEmptyPacketListener("right_hand_landmarks",r=>{ut(this,r)}),this.g.attachProtoListener("right_hand_world_landmarks",(r,s)=>{var a=this.h.rightHandWorldLandmarks;r=ts(r),a.push(js(r)),ut(this,s)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",r=>{ut(this,r)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};pe.prototype.detectForVideo=pe.prototype.G,pe.prototype.detect=pe.prototype.F,pe.prototype.setOptions=pe.prototype.o,pe.createFromModelPath=function(e,t){return Xt(pe,e,{baseOptions:{modelAssetPath:t}})},pe.createFromModelBuffer=function(e,t){return Xt(pe,e,{baseOptions:{modelAssetBuffer:t}})},pe.createFromOptions=function(e,t){return Xt(pe,e,t)},pe.HAND_CONNECTIONS=xu,pe.POSE_CONNECTIONS=Ig,pe.FACE_LANDMARKS_LIPS=fu,pe.FACE_LANDMARKS_LEFT_EYE=pu,pe.FACE_LANDMARKS_LEFT_EYEBROW=mu,pe.FACE_LANDMARKS_LEFT_IRIS=Cg,pe.FACE_LANDMARKS_RIGHT_EYE=gu,pe.FACE_LANDMARKS_RIGHT_EYEBROW=_u,pe.FACE_LANDMARKS_RIGHT_IRIS=Pg,pe.FACE_LANDMARKS_FACE_OVAL=vu,pe.FACE_LANDMARKS_CONTOURS=Lg,pe.FACE_LANDMARKS_TESSELATION=Dg;var Cn=class extends Sn{constructor(e,t){super(new Xn(e,t),"input_image","norm_rect",!0),this.j={classifications:[]},At(e=this.h=new lg,0,1,t=new Ee)}get baseOptions(){return jt(this.h,Ee,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return At(this.h,0,2,eh(e,jt(this.h,iu,2))),this.l(e)}sa(e,t){return this.j={classifications:[]},Yn(this,e,t),this.j}ta(e,t,n){return this.j={classifications:[]},oi(this,e,n,t),this.j}m(){var e=new Tn;ye(e,"input_image"),ye(e,"norm_rect"),$t(e,"classifications");const t=new bn;si(t,Ky,this.h);const n=new cn;Mn(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),ge(n,"IMAGE:input_image"),ge(n,"NORM_RECT:norm_rect"),Gt(n,"CLASSIFICATIONS:classifications"),n.o(t),On(e,n),this.g.attachProtoListener("classifications",(i,r)=>{this.j=eM(Oy(i)),ut(this,r)}),this.g.attachEmptyPacketListener("classifications",i=>{ut(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Cn.prototype.classifyForVideo=Cn.prototype.ta,Cn.prototype.classify=Cn.prototype.sa,Cn.prototype.setOptions=Cn.prototype.o,Cn.createFromModelPath=function(e,t){return Xt(Cn,e,{baseOptions:{modelAssetPath:t}})},Cn.createFromModelBuffer=function(e,t){return Xt(Cn,e,{baseOptions:{modelAssetBuffer:t}})},Cn.createFromOptions=function(e,t){return Xt(Cn,e,t)};var mn=class extends Sn{constructor(e,t){super(new Xn(e,t),"image_in","norm_rect",!0),this.h=new hg,this.embeddings={embeddings:[]},At(e=this.h,0,1,t=new Ee)}get baseOptions(){return jt(this.h,Ee,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){var t=this.h,n=jt(this.h,vf,2);return n=n?n.clone():new vf,e.l2Normalize!==void 0?oe(n,1,Qs(e.l2Normalize)):"l2Normalize"in e&&oe(n,1),e.quantize!==void 0?oe(n,2,Qs(e.quantize)):"quantize"in e&&oe(n,2),At(t,0,2,n),this.l(e)}za(e,t){return Yn(this,e,t),this.embeddings}Aa(e,t,n){return oi(this,e,n,t),this.embeddings}m(){var e=new Tn;ye(e,"image_in"),ye(e,"norm_rect"),$t(e,"embeddings_out");const t=new bn;si(t,Zy,this.h);const n=new cn;Mn(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),ge(n,"IMAGE:image_in"),ge(n,"NORM_RECT:norm_rect"),Gt(n,"EMBEDDINGS:embeddings_out"),n.o(t),On(e,n),this.g.attachProtoListener("embeddings_out",(i,r)=>{i=zy(i),this.embeddings=function(s){return{embeddings:Ei(s,ky,1).map(a=>{const o={headIndex:Un(a,3)??0??-1,headName:Ve(ve(a,4))??""??""};var c=a.v;return om(c,0|c[vt],_f,Xc(a,1))!==void 0?(a=cr(a=jt(a,_f,Xc(a,1),void 0),1,Qn,or()),o.floatEmbedding=a.slice()):(c=new Uint8Array(0),o.quantizedEmbedding=jt(a,By,Xc(a,2),void 0)?.na()?.h()??c),o}),timestampMs:_g(ve(s,2,void 0,void 0,yo)??nm)}}(i),ut(this,r)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{ut(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};mn.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=bf(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=bf(Ef(e.quantizedEmbedding),Ef(t.quantizedEmbedding))}return e},mn.prototype.embedForVideo=mn.prototype.Aa,mn.prototype.embed=mn.prototype.za,mn.prototype.setOptions=mn.prototype.o,mn.createFromModelPath=function(e,t){return Xt(mn,e,{baseOptions:{modelAssetPath:t}})},mn.createFromModelBuffer=function(e,t){return Xt(mn,e,{baseOptions:{modelAssetBuffer:t}})},mn.createFromOptions=function(e,t){return Xt(mn,e,t)};var sh=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach(e=>{e.close()}),this.categoryMask?.close()}};function cM(e){const t=function(n){return Ei(n,cn,1)}(e.ca()).filter(n=>(Ve(ve(n,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(e.u=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(jt(t[0],bn,7)?.j()?.g()??new Map).forEach((n,i)=>{e.u[Number(i)]=Ve(ve(n,1))??""})}function zf(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function Gf(e){try{const t=new sh(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{ec(e)}}sh.prototype.close=sh.prototype.close;var sn=class extends Sn{constructor(e,t){super(new Xn(e,t),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new lu,this.A=new ug,At(this.h,0,3,this.A),At(e=this.h,0,1,t=new Ee)}get baseOptions(){return jt(this.h,Ee,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?oe(this.h,2,ha(e.displayNamesLocale)):"displayNamesLocale"in e&&oe(this.h,2),"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}L(){cM(this)}segment(e,t,n){const i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:n,zf(this),Yn(this,e,i),Gf(this)}La(e,t,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,zf(this),oi(this,e,r,t),Gf(this)}Da(){return this.u}m(){var e=new Tn;ye(e,"image_in"),ye(e,"norm_rect");const t=new bn;si(t,fg,this.h);const n=new cn;Mn(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),ge(n,"IMAGE:image_in"),ge(n,"NORM_RECT:norm_rect"),n.o(t),On(e,n),tc(this,e),this.outputConfidenceMasks&&($t(e,"confidence_masks"),Gt(n,"CONFIDENCE_MASKS:confidence_masks"),ms(this,"confidence_masks"),this.g.aa("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>_s(this,s,!0,!this.j)),ut(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],ut(this,i)})),this.outputCategoryMask&&($t(e,"category_mask"),Gt(n,"CATEGORY_MASK:category_mask"),ms(this,"category_mask"),this.g.Z("category_mask",(i,r)=>{this.categoryMask=_s(this,i,!1,!this.j),ut(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,ut(this,i)})),$t(e,"quality_scores"),Gt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,ut(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,ut(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};sn.prototype.getLabels=sn.prototype.Da,sn.prototype.segmentForVideo=sn.prototype.La,sn.prototype.segment=sn.prototype.segment,sn.prototype.setOptions=sn.prototype.o,sn.createFromModelPath=function(e,t){return Xt(sn,e,{baseOptions:{modelAssetPath:t}})},sn.createFromModelBuffer=function(e,t){return Xt(sn,e,{baseOptions:{modelAssetBuffer:t}})},sn.createFromOptions=function(e,t){return Xt(sn,e,t)};var ah=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach(e=>{e.close()}),this.categoryMask?.close()}};ah.prototype.close=ah.prototype.close;var jn=class extends Sn{constructor(e,t){super(new Xn(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new lu,this.u=new ug,At(this.h,0,3,this.u),At(e=this.h,0,1,t=new Ee)}get baseOptions(){return jt(this.h,Ee,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}segment(e,t,n,i){const r=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new pg,t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var s=new Kc;Ui(s,3,Qs(!0),!1),Ui(s,1,Xs(t.keypoint.x),0),Ui(s,2,Xs(t.keypoint.y),0),Ys(i,1,th,s)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");{const o=new Jy;for(s of t.scribble)Ui(t=new Kc,3,Qs(!0),!1),Ui(t,1,Xs(s.x),0),Ui(t,2,Xs(s.y),0),Gh(o,1,Kc,t);Ys(i,2,th,o)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),Yn(this,e,r);t:{try{const o=new ah(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var a=o;break t}this.j(o)}finally{ec(this)}a=void 0}return a}m(){var e=new Tn;ye(e,"image_in"),ye(e,"roi_in"),ye(e,"norm_rect_in");const t=new bn;si(t,fg,this.h);const n=new cn;Mn(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),ge(n,"IMAGE:image_in"),ge(n,"ROI:roi_in"),ge(n,"NORM_RECT:norm_rect_in"),n.o(t),On(e,n),tc(this,e),this.outputConfidenceMasks&&($t(e,"confidence_masks"),Gt(n,"CONFIDENCE_MASKS:confidence_masks"),ms(this,"confidence_masks"),this.g.aa("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>_s(this,s,!0,!this.j)),ut(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],ut(this,i)})),this.outputCategoryMask&&($t(e,"category_mask"),Gt(n,"CATEGORY_MASK:category_mask"),ms(this,"category_mask"),this.g.Z("category_mask",(i,r)=>{this.categoryMask=_s(this,i,!1,!this.j),ut(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,ut(this,i)})),$t(e,"quality_scores"),Gt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,ut(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,ut(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};jn.prototype.segment=jn.prototype.segment,jn.prototype.setOptions=jn.prototype.o,jn.createFromModelPath=function(e,t){return Xt(jn,e,{baseOptions:{modelAssetPath:t}})},jn.createFromModelBuffer=function(e,t){return Xt(jn,e,{baseOptions:{modelAssetBuffer:t}})},jn.createFromOptions=function(e,t){return Xt(jn,e,t)};var Pn=class extends Sn{constructor(e,t){super(new Xn(e,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},At(e=this.h=new mg,0,1,t=new Ee)}get baseOptions(){return jt(this.h,Ee,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?oe(this.h,2,ha(e.displayNamesLocale)):"displayNamesLocale"in e&&oe(this.h,2),e.maxResults!==void 0?bi(this.h,3,e.maxResults):"maxResults"in e&&oe(this.h,3),e.scoreThreshold!==void 0?bt(this.h,4,e.scoreThreshold):"scoreThreshold"in e&&oe(this.h,4),e.categoryAllowlist!==void 0?So(this.h,5,e.categoryAllowlist):"categoryAllowlist"in e&&oe(this.h,5),e.categoryDenylist!==void 0?So(this.h,6,e.categoryDenylist):"categoryDenylist"in e&&oe(this.h,6),this.l(e)}F(e,t){return this.j={detections:[]},Yn(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},oi(this,e,n,t),this.j}m(){var e=new Tn;ye(e,"input_frame_gpu"),ye(e,"norm_rect"),$t(e,"detections");const t=new bn;si(t,Qy,this.h);const n=new cn;Mn(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),ge(n,"IMAGE:input_frame_gpu"),ge(n,"NORM_RECT:norm_rect"),Gt(n,"DETECTIONS:detections"),n.o(t),On(e,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=Ym(s),this.j.detections.push(vg(i));ut(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{ut(this,i)}),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Pn.prototype.detectForVideo=Pn.prototype.G,Pn.prototype.detect=Pn.prototype.F,Pn.prototype.setOptions=Pn.prototype.o,Pn.createFromModelPath=async function(e,t){return Xt(Pn,e,{baseOptions:{modelAssetPath:t}})},Pn.createFromModelBuffer=function(e,t){return Xt(Pn,e,{baseOptions:{modelAssetBuffer:t}})},Pn.createFromOptions=function(e,t){return Xt(Pn,e,t)};var oh=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach(e=>{e.close()})}};function Hf(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function Vf(e){try{const t=new oh(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.u)return t;e.u(t)}finally{ec(e)}}oh.prototype.close=oh.prototype.close;var gn=class extends Sn{constructor(e,t){super(new Xn(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,At(e=this.h=new gg,0,1,t=new Ee),this.A=new og,At(this.h,0,3,this.A),this.j=new ag,At(this.h,0,2,this.j),bi(this.j,4,1),bt(this.j,2,.5),bt(this.A,2,.5),bt(this.h,4,.5)}get baseOptions(){return jt(this.h,Ee,1)}set baseOptions(e){At(this.h,0,1,e)}o(e){return"numPoses"in e&&bi(this.j,4,e.numPoses??1),"minPoseDetectionConfidence"in e&&bt(this.j,2,e.minPoseDetectionConfidence??.5),"minTrackingConfidence"in e&&bt(this.h,4,e.minTrackingConfidence??.5),"minPosePresenceConfidence"in e&&bt(this.A,2,e.minPosePresenceConfidence??.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}F(e,t,n){const i=typeof t!="function"?t:{};return this.u=typeof t=="function"?t:n,Hf(this),Yn(this,e,i),Vf(this)}G(e,t,n,i){const r=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,Hf(this),oi(this,e,r,t),Vf(this)}m(){var e=new Tn;ye(e,"image_in"),ye(e,"norm_rect"),$t(e,"normalized_landmarks"),$t(e,"world_landmarks"),$t(e,"segmentation_masks");const t=new bn;si(t,tM,this.h);const n=new cn;Mn(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),ge(n,"IMAGE:image_in"),ge(n,"NORM_RECT:norm_rect"),Gt(n,"NORM_LANDMARKS:normalized_landmarks"),Gt(n,"WORLD_LANDMARKS:world_landmarks"),n.o(t),On(e,n),tc(this,e),this.g.attachProtoVectorListener("normalized_landmarks",(i,r)=>{this.landmarks=[];for(const s of i)i=fa(s),this.landmarks.push(Qo(i));ut(this,r)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],ut(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,r)=>{this.worldLandmarks=[];for(const s of i)i=ts(s),this.worldLandmarks.push(js(i));ut(this,r)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],ut(this,i)}),this.outputSegmentationMasks&&(Gt(n,"SEGMENTATION_MASK:segmentation_masks"),ms(this,"segmentation_masks"),this.g.aa("segmentation_masks",(i,r)=>{this.segmentationMasks=i.map(s=>_s(this,s,!0,!this.u)),ut(this,r)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],ut(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};gn.prototype.detectForVideo=gn.prototype.G,gn.prototype.detect=gn.prototype.F,gn.prototype.setOptions=gn.prototype.o,gn.createFromModelPath=function(e,t){return Xt(gn,e,{baseOptions:{modelAssetPath:t}})},gn.createFromModelBuffer=function(e,t){return Xt(gn,e,{baseOptions:{modelAssetBuffer:t}})},gn.createFromOptions=function(e,t){return Xt(gn,e,t)},gn.POSE_CONNECTIONS=Ig;const lM="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm",Wf="/models/hand_landmarker.task",hM="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",uM=0,Xf=4,dM=5,Ja=8,Yf=9,fM=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]];class pM{constructor(){this.landmarker=null,this.video=null,this.overlay=null,this.overlayCtx=null,this.stream=null,this.running=!1,this.lastVideoTime=-1,this.lastTimestamp=0,this.hand={present:!1,x:.5,y:.5,pinch:!1},this._pinchRatio=1}async init(){const t=await Xr.forVisionTasks(lM),n=await mM();this.landmarker=await an.createFromOptions(t,{baseOptions:{modelAssetPath:n,delegate:"GPU"},runningMode:"VIDEO",numHands:1,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5})}async start(t,n){this.video=t,this.overlay=n,this.overlayCtx=n.getContext("2d"),this.stream=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"},audio:!1}),t.srcObject=this.stream,await t.play(),n.width=t.videoWidth||640,n.height=t.videoHeight||480,this.running=!0}stop(){if(this.running=!1,this.stream){for(const t of this.stream.getTracks())t.stop();this.stream=null}this.hand.present=!1}update(){if(!this.running||!this.landmarker||!this.video||this.video.readyState<2||this.video.currentTime===this.lastVideoTime)return;this.lastVideoTime=this.video.currentTime;let t=performance.now();t<=this.lastTimestamp&&(t=this.lastTimestamp+1),this.lastTimestamp=t;let n;try{n=this.landmarker.detectForVideo(this.video,t)}catch{return}const i=n?.landmarks?.[0];if(!i){this.hand.present=!1,this.#t();return}this.hand.present=!0,this.hand.x=1-i[Ja].x,this.hand.y=i[Ja].y;const r=$c(i[Xf],i[Ja]),s=$c(i[uM],i[Yf])+$c(i[dM],i[Yf]);this._pinchRatio=r/(s||1),this.hand.pinch?this._pinchRatio>.55&&(this.hand.pinch=!1):this._pinchRatio<.38&&(this.hand.pinch=!0),this.#e(i)}#t(){this.overlayCtx&&this.overlayCtx.clearRect(0,0,this.overlay.width,this.overlay.height)}#e(t){const n=this.overlayCtx;if(!n)return;const i=this.overlay.width,r=this.overlay.height;n.clearRect(0,0,i,r),n.lineWidth=3,n.strokeStyle=this.hand.pinch?"#57e0c4":"rgba(110,168,255,0.85)",n.beginPath();for(const[s,a]of fM)n.moveTo(t[s].x*i,t[s].y*r),n.lineTo(t[a].x*i,t[a].y*r);n.stroke();for(let s=0;s<t.length;s++){const a=s===Xf||s===Ja;n.beginPath(),n.arc(t[s].x*i,t[s].y*r,a?6:3.5,0,Math.PI*2),n.fillStyle=a?this.hand.pinch?"#57e0c4":"#ffb86b":"#e8ecff",n.fill()}}}function $c(e,t){const n=e.x-t.x,i=e.y-t.y;return Math.sqrt(n*n+i*i)}async function mM(){try{if((await fetch(Wf,{method:"HEAD"})).ok)return Wf}catch{}return hM}class gM{constructor({camera:t,canvas:n,controls:i,graph:r,handTracker:s}){this.camera=t,this.canvas=n,this.controls=i,this.graph=r,this.handTracker=s,this.raycaster=new i3,this.ndc=new Tt,this.dragPlane=new mi,this.hitPoint=new C,this.hovered=null,this.grabbed=null,this.mouse={x:.5,y:.5,down:!1,moved:!1},this.#t(),this.reticle=document.createElement("div"),Object.assign(this.reticle.style,{position:"fixed",width:"34px",height:"34px",marginLeft:"-17px",marginTop:"-17px",borderRadius:"50%",border:"2px solid rgba(110,168,255,0.9)",boxShadow:"0 0 18px rgba(110,168,255,0.7)",pointerEvents:"none",zIndex:20,transition:"width .08s, height .08s, background .08s",display:"none"}),document.body.appendChild(this.reticle)}#t(){const t=()=>this.canvas.getBoundingClientRect();this.canvas.addEventListener("pointerdown",n=>{if(n.pointerType==="touch")return;const i=t();this.mouse.x=(n.clientX-i.left)/i.width,this.mouse.y=(n.clientY-i.top)/i.height,this.mouse.down=!0}),window.addEventListener("pointermove",n=>{const i=t();this.mouse.x=(n.clientX-i.left)/i.width,this.mouse.y=(n.clientY-i.top)/i.height,this.mouse.moved=!0}),window.addEventListener("pointerup",()=>{this.mouse.down=!1})}#e(){const t=this.handTracker?.hand;return this.handTracker?.running&&t?.present?{active:!0,x:t.x,y:t.y,down:t.pinch,source:"hand"}:{active:this.mouse.moved||this.mouse.down,x:this.mouse.x,y:this.mouse.y,down:this.mouse.down,source:"mouse"}}update(){const t=this.#e();if(t.source==="hand"&&t.active){this.reticle.style.display="block",this.reticle.style.left=`${t.x*window.innerWidth}px`,this.reticle.style.top=`${t.y*window.innerHeight}px`;const r=!!this.grabbed;this.reticle.style.background=t.down?"rgba(87,224,196,0.35)":"transparent",this.reticle.style.borderColor=t.down?"rgba(87,224,196,0.95)":"rgba(110,168,255,0.9)",this.reticle.style.width=r?"26px":"34px",this.reticle.style.height=r?"26px":"34px"}else this.reticle.style.display="none";if(!t.active){this.#n(null);return}if(this.ndc.set(t.x*2-1,-(t.y*2-1)),this.raycaster.setFromCamera(this.ndc,this.camera),this.grabbed){this.#r(t);return}const n=this.raycaster.intersectObjects(this.graph.pickables,!1),i=n.length?n[0].object.userData.node:null;this.#n(i),t.down&&i&&this.#i(i,t.source)}#n(t){this.hovered!==t&&(this.hovered&&this.hovered.setHighlighted(!1),this.hovered=t,t&&t.setHighlighted(!0),this.canvas.style.cursor="grab")}#i(t,n){this.grabbed=t,t.pinned=!0,t.setHighlighted(!0);const i=this.camera.getWorldDirection(new C);this.dragPlane.setFromNormalAndCoplanarPoint(i,t.position),n==="mouse"&&this.controls&&(this.controls.enabled=!1),this.canvas.classList.add("grabbing")}#r(t){if(!t.down){this.#s();return}this.raycaster.ray.intersectPlane(this.dragPlane,this.hitPoint)&&(this.grabbed.position.copy(this.hitPoint),this.grabbed.velocity.set(0,0,0))}#s(){this.grabbed&&(this.grabbed.pinned=!1,this.grabbed!==this.hovered&&this.grabbed.setHighlighted(!1)),this.grabbed=null,this.controls&&(this.controls.enabled=!0),this.canvas.classList.remove("grabbing")}}const Ug=document.getElementById("scene"),_M=document.getElementById("intro"),Ng=document.getElementById("legend"),Jc=document.getElementById("enable-cam"),vM=document.getElementById("explore-mouse"),lo=document.getElementById("cam-status"),xM=document.getElementById("cam-preview"),yM=document.getElementById("webcam"),MM=document.getElementById("hand-overlay"),{renderer:SM,scene:Fg,camera:ch,controls:lh,starfield:qf}=x3(Ug),ho=new T3(Fg),wo=new pM;let Ro=null;ho.load().then(()=>{Ro=new gM({camera:ch,canvas:Ug,controls:lh,graph:ho,handTracker:wo}),window.__tabs={graph:ho,camera:ch,controls:lh,interaction:Ro}}).catch(e=>{console.error(e),lo.textContent="Could not load the notes graph. Check the console."});vM.addEventListener("click",()=>{Og(),Ng.classList.remove("hidden")});Jc.addEventListener("click",async()=>{Jc.disabled=!0,lo.textContent="Loading hand-tracking model…";try{await wo.init(),lo.textContent="Requesting camera…",await wo.start(yM,MM),xM.classList.remove("hidden"),Ng.classList.remove("hidden"),Og()}catch(e){console.error(e),Jc.disabled=!1,lo.textContent=e?.name==="NotAllowedError"?"Camera permission denied — you can still drag notes with the mouse.":"Hand tracking unavailable — you can still drag notes with the mouse."}});function Og(){_M.classList.add("hidden")}const jf=new n3;function Bg(){const e=Math.min(jf.getDelta(),.03333333333333333),t=jf.elapsedTime;wo.update(),ho.update(t,e),Ro&&Ro.update(),qf.rotation.y+=e*.01,qf.rotation.x+=e*.004,lh.update(),SM.render(Fg,ch),requestAnimationFrame(Bg)}requestAnimationFrame(Bg);
