(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cu="178",Em=0,Sh=1,Tm=2,xf=1,vf=2,Li=3,Yi=0,En=1,fi=2,dr=0,bs=1,Mh=2,Eh=3,Th=4,bm=5,Fr=100,Am=101,wm=102,Rm=103,Cm=104,Pm=200,Im=201,Lm=202,Dm=203,mc=204,gc=205,Nm=206,Um=207,Fm=208,Om=209,Bm=210,km=211,zm=212,Hm=213,Vm=214,_c=0,xc=1,vc=2,Us=3,yc=4,Sc=5,Mc=6,Ec=7,yf=0,Gm=1,Wm=2,fr=0,Xm=1,Ym=2,$m=3,Sf=4,qm=5,Km=6,Zm=7,bh="attached",jm="detached",Mf=300,Fs=301,Os=302,Ha=303,Tc=304,il=306,gr=1e3,mi=1001,Va=1002,vn=1003,Ef=1004,uo=1005,sn=1006,Ra=1007,gi=1008,yi=1009,Tf=1010,bf=1011,Co=1012,Pu=1013,$r=1014,Mn=1015,ki=1016,Iu=1017,Lu=1018,Po=1020,Af=35902,wf=1021,Rf=1022,Nn=1023,Io=1026,Lo=1027,rl=1028,Du=1029,Cf=1030,Nu=1031,Uu=1033,Ca=33776,Pa=33777,Ia=33778,La=33779,bc=35840,Ac=35841,wc=35842,Rc=35843,Cc=36196,Pc=37492,Ic=37496,Lc=37808,Dc=37809,Nc=37810,Uc=37811,Fc=37812,Oc=37813,Bc=37814,kc=37815,zc=37816,Hc=37817,Vc=37818,Gc=37819,Wc=37820,Xc=37821,Da=36492,Yc=36494,$c=36495,Pf=36283,qc=36284,Kc=36285,Zc=36286,jc=2200,Jm=2201,Qm=2202,Do=2300,No=2301,fl=2302,vs=2400,ys=2401,Ga=2402,Fu=2500,eg=2501,tg=0,If=1,Jc=2,ng=3200,ig=3201,Lf=0,rg=1,ii="",qt="srgb",an="srgb-linear",Wa="linear",Ct="srgb",es=7680,Ah=519,sg=512,og=513,ag=514,Df=515,lg=516,cg=517,ug=518,hg=519,Qc=35044,wh="300 es",zi=2e3,Xa=2001;let jr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}};const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Rh=1234567;const vo=Math.PI/180,Bs=180/Math.PI;function ai(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function ut(s,e,t){return Math.max(e,Math.min(t,s))}function Ou(s,e){return(s%e+e)%e}function dg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function fg(s,e,t){return s!==e?(t-s)/(e-s):0}function yo(s,e,t){return(1-t)*s+t*e}function pg(s,e,t,n){return yo(s,e,1-Math.exp(-t*n))}function mg(s,e=1){return e-Math.abs(Ou(s,e*2)-e)}function gg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function _g(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function xg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function vg(s,e){return s+Math.random()*(e-s)}function yg(s){return s*(.5-Math.random())}function Sg(s){s!==void 0&&(Rh=s);let e=Rh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Mg(s){return s*vo}function Eg(s){return s*Bs}function Tg(s){return(s&s-1)===0&&s!==0}function bg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ag(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wg(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),h=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*d,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*d,a*c);break;case"ZXZ":s.set(l*d,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*h,a*c);break;case"YXY":s.set(l*h,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ri(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function wt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Rg={DEG2RAD:vo,RAD2DEG:Bs,generateUUID:ai,clamp:ut,euclideanModulo:Ou,mapLinear:dg,inverseLerp:fg,lerp:yo,damp:pg,pingpong:mg,smoothstep:gg,smootherstep:_g,randInt:xg,randFloat:vg,randFloatSpread:yg,seededRandom:Sg,degToRad:Mg,radToDeg:Eg,isPowerOfTwo:Tg,ceilPowerOfTwo:bg,floorPowerOfTwo:Ag,setQuaternionFromProperEuler:wg,normalize:wt,denormalize:ri};class xt{constructor(e=0,t=0){xt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class li{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const f=r[o+0],h=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==h||u!==g){let m=1-a;const p=l*f+c*h+u*g+d*_,S=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const w=Math.sqrt(T),I=Math.atan2(w,p*S);m=Math.sin(m*I)/w,a=Math.sin(a*I)/w}const y=a*S;if(l=l*m+f*y,c=c*m+h*y,u=u*m+g*y,d=d*m+_*y,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[o],f=r[o+1],h=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*h-c*f,e[t+1]=l*g+u*f+c*d-a*h,e[t+2]=c*g+u*h+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(r/2),f=l(n/2),h=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-i)*h}else if(n>a&&n>d){const h=2*Math.sqrt(1+n-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(i+o)/h,this._z=(r+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-n-d);this._w=(r-c)/h,this._x=(i+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-n-a);this._w=(o-i)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*n+t*this._x,this._y=h*i+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ch.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ch.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=i+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pl.copy(this).projectOnVector(e),this.sub(pl)}reflect(e){return this.sub(pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pl=new W,Ch=new li;class it{constructor(e,t,n,i,r,o,a,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],h=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],T=i[4],y=i[7],w=i[2],I=i[5],R=i[8];return r[0]=o*_+a*S+l*w,r[3]=o*m+a*T+l*I,r[6]=o*p+a*y+l*R,r[1]=c*_+u*S+d*w,r[4]=c*m+u*T+d*I,r[7]=c*p+u*y+d*R,r[2]=f*_+h*S+g*w,r[5]=f*m+h*T+g*I,r[8]=f*p+h*y+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,g=t*d+n*f+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=h*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ml.makeScale(e,t)),this}rotate(e){return this.premultiply(ml.makeRotation(-e)),this}translate(e,t){return this.premultiply(ml.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ml=new it;function Nf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Uo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Cg(){const s=Uo("canvas");return s.style.display="block",s}const Ph={};function As(s){s in Ph||(Ph[s]=!0,console.warn(s))}function Pg(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Ig(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Lg(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ih=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lh=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dg(){const s={enabled:!0,workingColorSpace:an,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ct&&(i.r=Wi(i.r),i.g=Wi(i.g),i.b=Wi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(i.r=ws(i.r),i.g=ws(i.g),i.b=ws(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ii?Wa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return As("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return As("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[an]:{primaries:e,whitePoint:n,transfer:Wa,toXYZ:Ih,fromXYZ:Lh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:Ih,fromXYZ:Lh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),s}const yt=Dg();function Wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ts;class Ng{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ts===void 0&&(ts=Uo("canvas")),ts.width=e.width,ts.height=e.height;const i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ts}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Uo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Wi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wi(t[n]/255)*255):t[n]=Wi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ug=0;class Bu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(gl(i[o].image)):r.push(gl(i[o]))}else r=gl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function gl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ng.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fg=0;const _l=new W;class on extends jr{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,n=mi,i=mi,r=sn,o=gi,a=Nn,l=yi,c=on.DEFAULT_ANISOTROPY,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=ai(),this.name="",this.source=new Bu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_l).x}get height(){return this.source.getSize(_l).y}get depth(){return this.source.getSize(_l).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gr:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gr:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Mf;on.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,n=0,i=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,y=(h+1)/2,w=(p+1)/2,I=(u+f)/4,R=(d+_)/4,L=(g+m)/4;return T>y&&T>w?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=I/n,r=R/n):y>w?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=I/i,r=L/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=R/r,i=L/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Og extends jr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new on(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Bu(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends Og{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Uf extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bg extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jo.copy(n.boundingBox)),jo.applyMatrix4(e.matrixWorld),this.union(jo)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),Jo.subVectors(this.max,Qs),ns.subVectors(e.a,Qs),is.subVectors(e.b,Qs),rs.subVectors(e.c,Qs),Zi.subVectors(is,ns),ji.subVectors(rs,is),Mr.subVectors(ns,rs);let t=[0,-Zi.z,Zi.y,0,-ji.z,ji.y,0,-Mr.z,Mr.y,Zi.z,0,-Zi.x,ji.z,0,-ji.x,Mr.z,0,-Mr.x,-Zi.y,Zi.x,0,-ji.y,ji.x,0,-Mr.y,Mr.x,0];return!xl(t,ns,is,rs,Jo)||(t=[1,0,0,0,1,0,0,0,1],!xl(t,ns,is,rs,Jo))?!1:(Qo.crossVectors(Zi,ji),t=[Qo.x,Qo.y,Qo.z],xl(t,ns,is,rs,Jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ai=[new W,new W,new W,new W,new W,new W,new W,new W],Zn=new W,jo=new Ki,ns=new W,is=new W,rs=new W,Zi=new W,ji=new W,Mr=new W,Qs=new W,Jo=new W,Qo=new W,Er=new W;function xl(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Er.fromArray(s,r);const a=i.x*Math.abs(Er.x)+i.y*Math.abs(Er.y)+i.z*Math.abs(Er.z),l=e.dot(Er),c=t.dot(Er),u=n.dot(Er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const kg=new Ki,eo=new W,vl=new W;class Ei{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):kg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const t=eo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(eo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(vl)),this.expandByPoint(eo.copy(e.center).sub(vl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const wi=new W,yl=new W,ea=new W,Ji=new W,Sl=new W,ta=new W,Ml=new W;class sl{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yl.copy(e).add(t).multiplyScalar(.5),ea.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(yl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ea),a=Ji.dot(this.direction),l=-Ji.dot(ea),c=Ji.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*l-a,f=o*a-l,g=r*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(yl).addScaledVector(ea,f),h}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const n=wi.dot(this.direction),i=wi.dot(wi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,n,i,r){Sl.subVectors(t,e),ta.subVectors(n,e),Ml.crossVectors(Sl,ta);let o=this.direction.dot(Ml),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);const l=a*this.direction.dot(ta.crossVectors(Ji,ta));if(l<0)return null;const c=a*this.direction.dot(Sl.cross(Ji));if(c<0||l+c>o)return null;const u=-a*Ji.dot(Ml);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,i,r,o,a,l,c,u,d,f,h,g,_,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,d,f,h,g,_,m)}set(e,t,n,i,r,o,a,l,c,u,d,f,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ss.setFromMatrixColumn(e,0).length(),r=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+h*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,g=c*u,_=c*d;t[0]=f+_*a,t[4]=g*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,g=c*u,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-h,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zg,e,Hg)}lookAt(e,t,n){const i=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Qi.crossVectors(n,Cn),Qi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Qi.crossVectors(n,Cn)),Qi.normalize(),na.crossVectors(Cn,Qi),i[0]=Qi.x,i[4]=na.x,i[8]=Cn.x,i[1]=Qi.y,i[5]=na.y,i[9]=Cn.y,i[2]=Qi.z,i[6]=na.z,i[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],h=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],T=n[7],y=n[11],w=n[15],I=i[0],R=i[4],L=i[8],M=i[12],b=i[1],D=i[5],$=i[9],H=i[13],ee=i[2],ne=i[6],K=i[10],Q=i[14],Z=i[3],ye=i[7],be=i[11],Me=i[15];return r[0]=o*I+a*b+l*ee+c*Z,r[4]=o*R+a*D+l*ne+c*ye,r[8]=o*L+a*$+l*K+c*be,r[12]=o*M+a*H+l*Q+c*Me,r[1]=u*I+d*b+f*ee+h*Z,r[5]=u*R+d*D+f*ne+h*ye,r[9]=u*L+d*$+f*K+h*be,r[13]=u*M+d*H+f*Q+h*Me,r[2]=g*I+_*b+m*ee+p*Z,r[6]=g*R+_*D+m*ne+p*ye,r[10]=g*L+_*$+m*K+p*be,r[14]=g*M+_*H+m*Q+p*Me,r[3]=S*I+T*b+y*ee+w*Z,r[7]=S*R+T*D+y*ne+w*ye,r[11]=S*L+T*$+y*K+w*be,r[15]=S*M+T*H+y*Q+w*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*d-i*c*d-r*a*f+n*c*f+i*a*h-n*l*h)+_*(+t*l*h-t*c*f+r*o*f-i*o*h+i*c*u-r*l*u)+m*(+t*c*d-t*a*h-r*o*d+n*o*h+r*a*u-n*c*u)+p*(-i*a*u-t*l*d+t*a*f+i*o*d-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=d*m*c-_*f*c+_*l*h-a*m*h-d*l*p+a*f*p,T=g*f*c-u*m*c-g*l*h+o*m*h+u*l*p-o*f*p,y=u*_*c-g*d*c+g*a*h-o*_*h-u*a*p+o*d*p,w=g*d*l-u*_*l-g*a*f+o*_*f+u*a*m-o*d*m,I=t*S+n*T+i*y+r*w;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return e[0]=S*R,e[1]=(_*f*r-d*m*r-_*i*h+n*m*h+d*i*p-n*f*p)*R,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*R,e[3]=(d*l*r-a*f*r-d*i*c+n*f*c+a*i*h-n*l*h)*R,e[4]=T*R,e[5]=(u*m*r-g*f*r+g*i*h-t*m*h-u*i*p+t*f*p)*R,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*R,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*h+t*l*h)*R,e[8]=y*R,e[9]=(g*d*r-u*_*r-g*n*h+t*_*h+u*n*p-t*d*p)*R,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*R,e[11]=(u*a*r-o*d*r-u*n*c+t*d*c+o*n*h-t*a*h)*R,e[12]=w*R,e[13]=(u*_*i-g*d*i+g*n*f-t*_*f-u*n*m+t*d*m)*R,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*R,e[15]=(o*d*i-u*a*i+u*n*l-t*d*l-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,g=r*d,_=o*u,m=o*d,p=a*d,S=l*c,T=l*u,y=l*d,w=n.x,I=n.y,R=n.z;return i[0]=(1-(_+p))*w,i[1]=(h+y)*w,i[2]=(g-T)*w,i[3]=0,i[4]=(h-y)*I,i[5]=(1-(f+p))*I,i[6]=(m+S)*I,i[7]=0,i[8]=(g+T)*R,i[9]=(m-S)*R,i[10]=(1-(f+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ss.set(i[0],i[1],i[2]).length();const o=ss.set(i[4],i[5],i[6]).length(),a=ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],jn.copy(this);const c=1/r,u=1/o,d=1/a;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=d,jn.elements[9]*=d,jn.elements[10]*=d,t.setFromRotationMatrix(jn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=zi){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let h,g;if(a===zi)h=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Xa)h=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=zi){const l=this.elements,c=1/(t-e),u=1/(n-i),d=1/(o-r),f=(t+e)*c,h=(n+i)*u;let g,_;if(a===zi)g=(o+r)*d,_=-2*d;else if(a===Xa)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ss=new W,jn=new rt,zg=new W(0,0,0),Hg=new W(1,1,1),Qi=new W,na=new W,Cn=new W,Dh=new rt,Nh=new li;class Si{constructor(e=0,t=0,n=0,i=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class Ff{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vg=0;const Uh=new W,os=new li,Ri=new rt,ia=new W,to=new W,Gg=new W,Wg=new li,Fh=new W(1,0,0),Oh=new W(0,1,0),Bh=new W(0,0,1),kh={type:"added"},Xg={type:"removed"},as={type:"childadded",child:null},El={type:"childremoved",child:null};class Bt extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new W,t=new Si,n=new li,i=new W(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new it}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ff,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Fh,e)}rotateY(e){return this.rotateOnAxis(Oh,e)}rotateZ(e){return this.rotateOnAxis(Bh,e)}translateOnAxis(e,t){return Uh.copy(e).applyQuaternion(this.quaternion),this.position.add(Uh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fh,e)}translateY(e){return this.translateOnAxis(Oh,e)}translateZ(e){return this.translateOnAxis(Bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ia.copy(e):ia.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(to,ia,this.up):Ri.lookAt(ia,to,this.up),this.quaternion.setFromRotationMatrix(Ri),i&&(Ri.extractRotation(i.matrixWorld),os.setFromRotationMatrix(Ri),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kh),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xg),El.child=e,this.dispatchEvent(El),El.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kh),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,e,Gg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,Wg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Bt.DEFAULT_UP=new W(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new W,Ci=new W,Tl=new W,Pi=new W,ls=new W,cs=new W,zh=new W,bl=new W,Al=new W,wl=new W,Rl=new Tt,Cl=new Tt,Pl=new Tt;class si{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Jn.subVectors(e,t),i.cross(Jn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Jn.subVectors(i,t),Ci.subVectors(n,t),Tl.subVectors(e,t);const o=Jn.dot(Jn),a=Jn.dot(Ci),l=Jn.dot(Tl),c=Ci.dot(Ci),u=Ci.dot(Tl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-h-g,g,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Rl.setScalar(0),Cl.setScalar(0),Pl.setScalar(0),Rl.fromBufferAttribute(e,t),Cl.fromBufferAttribute(e,n),Pl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Rl,r.x),o.addScaledVector(Cl,r.y),o.addScaledVector(Pl,r.z),o}static isFrontFacing(e,t,n,i){return Jn.subVectors(n,t),Ci.subVectors(e,t),Jn.cross(Ci).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),Jn.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return si.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ls.subVectors(i,n),cs.subVectors(r,n),bl.subVectors(e,n);const l=ls.dot(bl),c=cs.dot(bl);if(l<=0&&c<=0)return t.copy(n);Al.subVectors(e,i);const u=ls.dot(Al),d=cs.dot(Al);if(u>=0&&d<=u)return t.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ls,o);wl.subVectors(e,r);const h=ls.dot(wl),g=cs.dot(wl);if(g>=0&&h<=g)return t.copy(r);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(cs,a);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return zh.subVectors(r,i),a=(d-u)/(d-u+(h-g)),t.copy(i).addScaledVector(zh,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(ls,o).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},ra={h:0,s:0,l:0};function Il(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=yt.workingColorSpace){if(e=Ou(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Il(o,r,e+1/3),this.g=Il(o,r,e),this.b=Il(o,r,e-1/3)}return yt.colorSpaceToWorking(this,i),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const n=Of[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return yt.workingToColorSpace(dn.copy(this),e),Math.round(ut(dn.r*255,0,255))*65536+Math.round(ut(dn.g*255,0,255))*256+Math.round(ut(dn.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(dn.copy(this),t);const n=dn.r,i=dn.g,r=dn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=qt){yt.workingToColorSpace(dn.copy(this),e);const t=dn.r,n=dn.g,i=dn.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(er),this.setHSL(er.h+e,er.s+t,er.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(er),e.getHSL(ra);const n=yo(er.h,ra.h,t),i=yo(er.s,ra.s,t),r=yo(er.l,ra.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new tt;tt.NAMES=Of;let Yg=0;class xi extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=bs,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(n.blending=this.blending),this.side!==Yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mc&&(n.blendSrc=this.blendSrc),this.blendDst!==gc&&(n.blendDst=this.blendDst),this.blendEquation!==Fr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ah&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kr extends xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bi=$g();function $g(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function qg(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=ut(s,-65504,65504),Bi.floatView[0]=s;const e=Bi.uint32View[0],t=e>>23&511;return Bi.baseTable[t]+((e&8388607)>>Bi.shiftTable[t])}function Kg(s){const e=s>>10;return Bi.uint32View[0]=Bi.mantissaTable[Bi.offsetTable[e]+(s&1023)]+Bi.exponentTable[e],Bi.floatView[0]}class Hh{static toHalfFloat(e){return qg(e)}static fromHalfFloat(e){return Kg(e)}}const Xt=new W,sa=new xt;let Zg=0;class yn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qc,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sa.fromBufferAttribute(this,t),sa.applyMatrix3(e),this.setXY(t,sa.x,sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qc&&(e.usage=this.usage),e}}class Bf extends yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kf extends yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xi extends yn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jg=0;const Hn=new rt,Ll=new Bt,us=new W,Pn=new Ki,no=new Ki,rn=new W;class Ti extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nf(e)?kf:Bf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return Ll.lookAt(e),Ll.updateMatrix(),this.applyMatrix4(Ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xi(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];no.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Pn.min,no.min),Pn.expandByPoint(rn),rn.addVectors(Pn.max,no.max),Pn.expandByPoint(rn)):(Pn.expandByPoint(no.min),Pn.expandByPoint(no.max))}Pn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)rn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(rn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)rn.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(e,c),rn.add(us)),i=Math.max(i,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new W,l[L]=new W;const c=new W,u=new W,d=new W,f=new xt,h=new xt,g=new xt,_=new W,m=new W;function p(L,M,b){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,b),f.fromBufferAttribute(r,L),h.fromBufferAttribute(r,M),g.fromBufferAttribute(r,b),u.sub(c),d.sub(c),h.sub(f),g.sub(f);const D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(D),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),a[L].add(_),a[M].add(_),a[b].add(_),l[L].add(m),l[M].add(m),l[b].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,M=S.length;L<M;++L){const b=S[L],D=b.start,$=b.count;for(let H=D,ee=D+$;H<ee;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const T=new W,y=new W,w=new W,I=new W;function R(L){w.fromBufferAttribute(i,L),I.copy(w);const M=a[L];T.copy(M),T.sub(w.multiplyScalar(w.dot(M))).normalize(),y.crossVectors(I,M);const D=y.dot(l[L])<0?-1:1;o.setXYZW(L,T.x,T.y,T.z,D)}for(let L=0,M=S.length;L<M;++L){const b=S[L],D=b.start,$=b.count;for(let H=D,ee=D+$;H<ee;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const i=new W,r=new W,o=new W,a=new W,l=new W,c=new W,u=new W,d=new W;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[h++]}return new yn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ti,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,n);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vh=new rt,Tr=new sl,oa=new Ei,Gh=new W,aa=new W,la=new W,ca=new W,Dl=new W,ua=new W,Wh=new W,ha=new W;class Un extends Bt{constructor(e=new Ti,t=new kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Dl.fromBufferAttribute(d,e),o?ua.addScaledVector(Dl,u):ua.addScaledVector(Dl.sub(t),u))}t.add(ua)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),Tr.copy(e.ray).recast(e.near),!(oa.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(oa,Gh)===null||Tr.origin.distanceToSquared(Gh)>(e.far-e.near)**2))&&(Vh.copy(r).invert(),Tr.copy(e.ray).applyMatrix4(Vh),!(n.boundingBox!==null&&Tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Tr)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,h.start),T=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let y=S,w=T;y<w;y+=3){const I=a.getX(y),R=a.getX(y+1),L=a.getX(y+2);i=da(this,p,e,n,c,u,d,I,R,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),T=a.getX(m+1),y=a.getX(m+2);i=da(this,o,e,n,c,u,d,S,T,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,h.start),T=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let y=S,w=T;y<w;y+=3){const I=y,R=y+1,L=y+2;i=da(this,p,e,n,c,u,d,I,R,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const S=m,T=m+1,y=m+2;i=da(this,o,e,n,c,u,d,S,T,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Jg(s,e,t,n,i,r,o,a){let l;if(e.side===En?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Yi,a),l===null)return null;ha.copy(a),ha.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ha);return c<t.near||c>t.far?null:{distance:c,point:ha.clone(),object:s}}function da(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,aa),s.getVertexPosition(l,la),s.getVertexPosition(c,ca);const u=Jg(s,e,t,n,aa,la,ca,Wh);if(u){const d=new W;si.getBarycoord(Wh,aa,la,ca,d),i&&(u.uv=si.getInterpolatedAttribute(i,a,l,c,d,new xt)),r&&(u.uv1=si.getInterpolatedAttribute(r,a,l,c,d,new xt)),o&&(u.normal=si.getInterpolatedAttribute(o,a,l,c,d,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new W,materialIndex:0};si.getNormal(aa,la,ca,f.normal),u.face=f,u.barycoord=d}return u}class Yo extends Ti{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Xi(c,3)),this.setAttribute("normal",new Xi(u,3)),this.setAttribute("uv",new Xi(d,2));function g(_,m,p,S,T,y,w,I,R,L,M){const b=y/R,D=w/L,$=y/2,H=w/2,ee=I/2,ne=R+1,K=L+1;let Q=0,Z=0;const ye=new W;for(let be=0;be<K;be++){const Me=be*D-H;for(let we=0;we<ne;we++){const Ve=we*b-$;ye[_]=Ve*S,ye[m]=Me*T,ye[p]=ee,c.push(ye.x,ye.y,ye.z),ye[_]=0,ye[m]=0,ye[p]=I>0?1:-1,u.push(ye.x,ye.y,ye.z),d.push(we/R),d.push(1-be/L),Q+=1}}for(let be=0;be<L;be++)for(let Me=0;Me<R;Me++){const we=f+Me+ne*be,Ve=f+Me+ne*(be+1),j=f+(Me+1)+ne*(be+1),ge=f+(Me+1)+ne*be;l.push(we,Ve,ge),l.push(Ve,j,ge),Z+=6}a.addGroup(h,Z,M),h+=Z,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function gn(s){const e={};for(let t=0;t<s.length;t++){const n=ks(s[t]);for(const i in n)e[i]=n[i]}return e}function Qg(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function zf(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const e_={clone:ks,merge:gn};var t_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t_,this.fragmentShader=n_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=Qg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Hf extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const tr=new W,Xh=new xt,Yh=new xt;class _n extends Hf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,Xh,Yh),t.subVectors(Yh,Xh)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hs=-90,ds=1;class i_ extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new _n(hs,ds,e,t);i.layers=this.layers,this.add(i);const r=new _n(hs,ds,e,t);r.layers=this.layers,this.add(r);const o=new _n(hs,ds,e,t);o.layers=this.layers,this.add(o);const a=new _n(hs,ds,e,t);a.layers=this.layers,this.add(a);const l=new _n(hs,ds,e,t);l.layers=this.layers,this.add(l);const c=new _n(hs,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===zi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Vf extends on{constructor(e=[],t=Fs,n,i,r,o,a,l,c,u){super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class r_ extends qr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Vf(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Yo(5,5,5),r=new _r({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:dr});r.uniforms.tEquirect.value=t;const o=new Un(i,r),a=t.minFilter;return t.minFilter===gi&&(t.minFilter=sn),new i_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class ar extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s_={type:"move"};class Nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(s_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ar;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class o_ extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class a_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qc,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const mn=new W;class ku{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new yn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ku(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const $h=new W,qh=new Tt,Kh=new Tt,l_=new W,Zh=new rt,fa=new W,Ul=new Ei,jh=new rt,Fl=new sl;class c_ extends Un{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bh,this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ki),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fa),this.boundingBox.expandByPoint(fa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ei),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fa),this.boundingSphere.expandByPoint(fa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ul.copy(this.boundingSphere),Ul.applyMatrix4(i),e.ray.intersectsSphere(Ul)!==!1&&(jh.copy(i).invert(),Fl.copy(e.ray).applyMatrix4(jh),!(this.boundingBox!==null&&Fl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===bh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;qh.fromBufferAttribute(i.attributes.skinIndex,e),Kh.fromBufferAttribute(i.attributes.skinWeight,e),$h.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Kh.getComponent(r);if(o!==0){const a=qh.getComponent(r);Zh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(l_.copy($h).applyMatrix4(Zh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Gf extends Bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class zu extends on{constructor(e=null,t=1,n=1,i,r,o,a,l,c=vn,u=vn,d,f){super(null,o,a,l,c,u,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jh=new rt,u_=new rt;class Hu{constructor(e=[],t=[]){this.uuid=ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new rt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:u_;Jh.multiplyMatrices(a,t[r]),Jh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Hu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new zu(t,e,e,Nn,Mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Gf),this.bones.push(o),this.boneInverses.push(new rt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class eu extends yn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fs=new rt,Qh=new rt,pa=[],ed=new Ki,h_=new rt,io=new Un,ro=new Ei;class d_ extends Un{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new eu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,h_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),ed.copy(e.boundingBox).applyMatrix4(fs),this.boundingBox.union(ed)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),ro.copy(e.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(ro)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(io.geometry=this.geometry,io.material=this.material,io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ro.copy(this.boundingSphere),ro.applyMatrix4(n),e.ray.intersectsSphere(ro)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,fs),Qh.multiplyMatrices(n,fs),io.matrixWorld=Qh,io.raycast(e,pa);for(let o=0,a=pa.length;o<a;o++){const l=pa[o];l.instanceId=r,l.object=this,t.push(l)}pa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new eu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new zu(new Float32Array(i*this.count),i,this.count,rl,Mn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ol=new W,f_=new W,p_=new it;class Dr{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ol.subVectors(n,t).cross(f_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ol),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||p_.getNormalMatrix(e),i=this.coplanarPoint(Ol).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new Ei,m_=new xt(.5,.5),ma=new W;class Vu{constructor(e=new Dr,t=new Dr,n=new Dr,i=new Dr,r=new Dr,o=new Dr){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zi){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],f=i[7],h=i[8],g=i[9],_=i[10],m=i[11],p=i[12],S=i[13],T=i[14],y=i[15];if(n[0].setComponents(l-r,f-c,m-h,y-p).normalize(),n[1].setComponents(l+r,f+c,m+h,y+p).normalize(),n[2].setComponents(l+o,f+u,m+g,y+S).normalize(),n[3].setComponents(l-o,f-u,m-g,y-S).normalize(),n[4].setComponents(l-a,f-d,m-_,y-T).normalize(),t===zi)n[5].setComponents(l+a,f+d,m+_,y+T).normalize();else if(t===Xa)n[5].setComponents(a,d,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){br.center.set(0,0,0);const t=m_.distanceTo(e.center);return br.radius=.7071067811865476+t,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ma.x=i.normal.x>0?e.max.x:e.min.x,ma.y=i.normal.y>0?e.max.y:e.min.y,ma.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wf extends xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ya=new W,$a=new W,td=new rt,so=new sl,ga=new Ei,Bl=new W,nd=new W;class Gu extends Bt{constructor(e=new Ti,t=new Wf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ya.fromBufferAttribute(t,i-1),$a.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ya.distanceTo($a);e.setAttribute("lineDistance",new Xi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(i),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;td.copy(i).invert(),so.copy(e.ray).applyMatrix4(td);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=c){const p=u.getX(_),S=u.getX(_+1),T=_a(this,e,so,l,p,S,_);T&&t.push(T)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(h),p=_a(this,e,so,l,_,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=c){const p=_a(this,e,so,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=_a(this,e,so,l,g-1,h,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _a(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Ya.fromBufferAttribute(a,i),$a.fromBufferAttribute(a,r),t.distanceSqToSegment(Ya,$a,Bl,nd)>n)return;Bl.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Bl);if(!(c<e.near||c>e.far))return{distance:c,point:nd.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const id=new W,rd=new W;class g_ extends Gu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)id.fromBufferAttribute(t,i),rd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+id.distanceTo(rd);e.setAttribute("lineDistance",new Xi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class __ extends Gu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Xf extends xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sd=new rt,tu=new sl,xa=new Ei,va=new W;class x_ extends Bt{constructor(e=new Ti,t=new Xf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(i),xa.radius+=r,e.ray.intersectsSphere(xa)===!1)return;sd.copy(i).invert(),tu.copy(e.ray).applyMatrix4(sd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=f,_=h;g<_;g++){const m=c.getX(g);va.fromBufferAttribute(d,m),od(va,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let g=f,_=h;g<_;g++)va.fromBufferAttribute(d,g),od(va,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function od(s,e,t,n,i,r,o){const a=tu.distanceSqToPoint(s);if(a<t){const l=new W;tu.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Yf extends on{constructor(e,t,n=$r,i,r,o,a=vn,l=vn,c,u=Io,d=1){if(u!==Io&&u!==Lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ol extends Ti{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=e/a,f=t/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*f-o;for(let T=0;T<c;T++){const y=T*d-r;g.push(y,-S,0),_.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const T=S+c*p,y=S+c*(p+1),w=S+1+c*(p+1),I=S+1+c*p;h.push(T,y,I),h.push(y,w,I)}this.setIndex(h),this.setAttribute("position",new Xi(g,3)),this.setAttribute("normal",new Xi(_,3)),this.setAttribute("uv",new Xi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wu extends xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lf,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bi extends Wu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class v_ extends xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ng,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class y_ extends xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ya(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function S_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function M_(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ad(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function $f(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class $o{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class E_ extends $o{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vs,endingEnd:vs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ys:r=e,a=2*t-n;break;case Ga:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ys:o=e,l=2*n-t;break;case Ga:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,S=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,T=(-1-h)*m+(1.5+h)*_+.5*g,y=h*m-h*_;for(let w=0;w!==a;++w)r[w]=p*o[u+w]+S*o[c+w]+T*o[l+w]+y*o[d+w];return r}}class qf extends $o{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),d=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*u;return r}}class T_ extends $o{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ui{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ya(t,this.TimeBufferType),this.values=ya(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ya(e.times,Array),values:ya(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new T_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new E_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Do:t=this.InterpolantFactoryMethodDiscrete;break;case No:t=this.InterpolantFactoryMethodLinear;break;case fl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Do;case this.InterpolantFactoryMethodLinear:return No;case this.InterpolantFactoryMethodSmooth:return fl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&S_(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===fl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*n,f=d-n,h=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[f+g]||_!==t[h+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,f=o*n;for(let h=0;h!==n;++h)t[f+h]=t[d+h]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ui.prototype.ValueTypeName="";ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=No;class Zs extends ui{constructor(e,t,n){super(e,t,n)}}Zs.prototype.ValueTypeName="bool";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Do;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Kf extends ui{constructor(e,t,n,i){super(e,t,n,i)}}Kf.prototype.ValueTypeName="color";class zs extends ui{constructor(e,t,n,i){super(e,t,n,i)}}zs.prototype.ValueTypeName="number";class b_ extends $o{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)li.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Hs extends ui{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new b_(this.times,this.values,this.getValueSize(),e)}}Hs.prototype.ValueTypeName="quaternion";Hs.prototype.InterpolantFactoryMethodSmooth=void 0;class js extends ui{constructor(e,t,n){super(e,t,n)}}js.prototype.ValueTypeName="string";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=Do;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;class Vs extends ui{constructor(e,t,n,i){super(e,t,n,i)}}Vs.prototype.ValueTypeName="vector";class nu{constructor(e="",t=-1,n=[],i=Fu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ai(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(w_(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ui.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=M_(l);l=ad(l,1,u),c=ad(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new zs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const d=u[1];let f=i[d];f||(i[d]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,f,h,g,_){if(h.length!==0){const m=[],p=[];$f(h,m,p,g),m.length!==0&&_.push(new d(f,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const h={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)h[f[g].morphTargets[_]]=-1;for(const _ in h){const m=[],p=[];for(let S=0;S!==f[g].morphTargets.length;++S){const T=f[g];m.push(T.time),p.push(T.morphTarget===_?1:0)}i.push(new zs(".morphTargetInfluence["+_+"]",m,p))}l=h.length*o}else{const h=".bones["+t[d].name+"]";n(Vs,h+".position",f,"pos",i),n(Hs,h+".quaternion",f,"rot",i),n(Vs,h+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function A_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zs;case"vector":case"vector2":case"vector3":case"vector4":return Vs;case"color":return Kf;case"quaternion":return Hs;case"bool":case"boolean":return Zs;case"string":return js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function w_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=A_(s.type);if(s.times===void 0){const t=[],n=[];$f(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Hi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Zf{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const h=c[d],g=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}}const R_=new Zf;class Jr{constructor(e){this.manager=e!==void 0?e:R_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Jr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ii={};class C_ extends Error{constructor(e,t){super(e),this.response=t}}class Xu extends Jr{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Hi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ii[e]!==void 0){Ii[e].push({onLoad:t,onProgress:n,onError:i});return}Ii[e]=[],Ii[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ii[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),h=f?parseInt(f):0,g=h!==0;let _=0;const m=new ReadableStream({start(p){S();function S(){d.read().then(({done:T,value:y})=>{if(T)p.close();else{_+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:h});for(let I=0,R=u.length;I<R;I++){const L=u[I];L.onProgress&&L.onProgress(w)}p.enqueue(y),S()}},T=>{p.error(T)})}}});return new Response(m)}else throw new C_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,h=new TextDecoder(f);return c.arrayBuffer().then(g=>h.decode(g))}}}).then(c=>{Hi.add(`file:${e}`,c);const u=Ii[e];delete Ii[e];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=Ii[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ii[e];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}const ps=new WeakMap;class P_ extends Jr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Hi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=ps.get(o);d===void 0&&(d=[],ps.set(o,d)),d.push({onLoad:t,onError:i})}return o}const a=Uo("img");function l(){u(),t&&t(this);const d=ps.get(this)||[];for(let f=0;f<d.length;f++){const h=d[f];h.onLoad&&h.onLoad(this)}ps.delete(this),r.manager.itemEnd(e)}function c(d){u(),i&&i(d),Hi.remove(`image:${e}`);const f=ps.get(this)||[];for(let h=0;h<f.length;h++){const g=f[h];g.onError&&g.onError(d)}ps.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Hi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class I_ extends Jr{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new zu,a=new Xu(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:mi,o.wrapT=c.wrapT!==void 0?c.wrapT:mi,o.magFilter=c.magFilter!==void 0?c.magFilter:sn,o.minFilter=c.minFilter!==void 0?c.minFilter:sn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=gi),c.mipmapCount===1&&(o.minFilter=sn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class jf extends Jr{constructor(e){super(e)}load(e,t,n,i){const r=new on,o=new P_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Yu extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const kl=new rt,ld=new W,cd=new W;class $u{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vu,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(ld),cd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cd),t.updateMatrixWorld(),kl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class L_ extends $u{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Bs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class D_ extends Yu{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new L_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ud=new rt,oo=new W,zl=new W;class N_ extends $u{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),oo.setFromMatrixPosition(e.matrixWorld),n.position.copy(oo),zl.copy(n.position),zl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(zl),n.updateMatrixWorld(),i.makeTranslation(-oo.x,-oo.y,-oo.z),ud.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ud)}}class Jf extends Yu{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new N_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qu extends Hf{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class U_ extends $u{constructor(){super(new qu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qf extends Yu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new U_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class So{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Hl=new WeakMap;class F_ extends Jr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Hi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Hl.has(o)===!0)i&&i(Hl.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Hi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Hl.set(l,c),Hi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Hi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}}class O_ extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class B_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class k_{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){li.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;li.multiplyQuaternionsFlat(e,o,e,t,e,n),li.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Ku="\\[\\]\\.:\\/",z_=new RegExp("["+Ku+"]","g"),Zu="[^"+Ku+"]",H_="[^"+Ku.replace("\\.","")+"]",V_=/((?:WC+[\/:])*)/.source.replace("WC",Zu),G_=/(WCOD+)?/.source.replace("WCOD",H_),W_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zu),X_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zu),Y_=new RegExp("^"+V_+G_+W_+X_+"$"),$_=["material","materials","bones","map"];class q_{constructor(e,t,n){const i=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class At{constructor(e,t,n){this.path=t,this.parsedPath=n||At.parseTrackName(t),this.node=At.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new At.Composite(e,t,n):new At(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(z_,"")}static parseTrackName(e){const t=Y_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);$_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=At.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}At.Composite=q_;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class K_{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:vs,endingEnd:vs};for(let c=0;c!==o;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Jm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case eg:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Fu:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===Qm;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===jc){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ys,i.endingEnd=ys):(e?i.endingStart=this.zeroSlopeAtStart?ys:vs:i.endingStart=Ga,t?i.endingEnd=this.zeroSlopeAtEnd?ys:vs:i.endingEnd=Ga)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const Z_=new Float32Array(1);class j_ extends jr{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==r;++d){const f=i[d],h=f.name;let g=u[h];if(g!==void 0)++g.referenceCount,o[d]=g;else{if(g=o[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,h));continue}const _=t&&t._propertyBindings[d].binding.parsedPath;g=new k_(At.create(n,h,_),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,h),o[d]=g}a[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const d=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete d[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new qf(new Float32Array(2),new Float32Array(2),1,Z_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?nu.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Fu),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new K_(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?nu.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}function hd(s,e,t,n){const i=J_(n);switch(t){case wf:return s*e;case rl:return s*e/i.components*i.byteLength;case Du:return s*e/i.components*i.byteLength;case Cf:return s*e*2/i.components*i.byteLength;case Nu:return s*e*2/i.components*i.byteLength;case Rf:return s*e*3/i.components*i.byteLength;case Nn:return s*e*4/i.components*i.byteLength;case Uu:return s*e*4/i.components*i.byteLength;case Ca:case Pa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ia:case La:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ac:case Rc:return Math.max(s,16)*Math.max(e,8)/4;case bc:case wc:return Math.max(s,8)*Math.max(e,8)/2;case Cc:case Pc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ic:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case kc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case zc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Da:case Yc:case $c:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Pf:case qc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Kc:case Zc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function J_(s){switch(s){case yi:case Tf:return{byteLength:1,components:1};case Co:case bf:case ki:return{byteLength:2,components:1};case Iu:case Lu:return{byteLength:2,components:4};case $r:case Pu:case Mn:return{byteLength:4,components:1};case Af:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ep(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Q_(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=s.HALF_FLOAT:h=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=s.SHORT;else if(c instanceof Uint32Array)h=s.UNSIGNED_INT;else if(c instanceof Int32Array)h=s.INT;else if(c instanceof Int8Array)h=s.BYTE;else if(c instanceof Uint8Array)h=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],_=d[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const _=d[h];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var e0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t0=`#ifdef USE_ALPHAHASH
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
#endif`,n0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o0=`#ifdef USE_AOMAP
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
#endif`,a0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l0=`#ifdef USE_BATCHING
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
#endif`,c0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,f0=`#ifdef USE_IRIDESCENCE
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
#endif`,p0=`#ifdef USE_BUMPMAP
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
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,E0=`#define PI 3.141592653589793
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
} // validated`,T0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,b0=`vec3 transformedNormal = objectNormal;
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
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,N0=`#ifdef USE_ENVMAP
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
#endif`,U0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H0=`#ifdef USE_GRADIENTMAP
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
}`,V0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X0=`uniform bool receiveShadow;
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
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j0=`PhysicalMaterial material;
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
#endif`,J0=`struct PhysicalMaterial {
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
}`,Q0=`
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
#endif`,ex=`#if defined( RE_IndirectDiffuse )
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
#endif`,tx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ix=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ax=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cx=`#if defined( USE_POINTS_UV )
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
#endif`,ux=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,px=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mx=`#ifdef USE_MORPHTARGETS
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
#endif`,gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_x=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mx=`#ifdef USE_NORMALMAP
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
#endif`,Ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ax=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Px=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ox=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bx=`float getShadowMask() {
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
}`,kx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zx=`#ifdef USE_SKINNING
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
#endif`,Hx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vx=`#ifdef USE_SKINNING
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
#endif`,Gx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$x=`#ifdef USE_TRANSMISSION
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
#endif`,qx=`#ifdef USE_TRANSMISSION
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
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ev=`uniform sampler2D t2D;
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
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sv=`#include <common>
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
}`,ov=`#if DEPTH_PACKING == 3200
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
}`,av=`#define DISTANCE
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
}`,lv=`#define DISTANCE
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
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hv=`uniform float scale;
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
}`,dv=`uniform vec3 diffuse;
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
}`,fv=`#include <common>
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
}`,pv=`uniform vec3 diffuse;
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
}`,mv=`#define LAMBERT
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
}`,gv=`#define LAMBERT
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
}`,_v=`#define MATCAP
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
}`,xv=`#define MATCAP
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
}`,vv=`#define NORMAL
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
}`,yv=`#define NORMAL
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
}`,Sv=`#define PHONG
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
}`,Mv=`#define PHONG
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
}`,Ev=`#define STANDARD
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
}`,Tv=`#define STANDARD
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
}`,bv=`#define TOON
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
}`,Av=`#define TOON
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
}`,wv=`uniform float size;
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
}`,Rv=`uniform vec3 diffuse;
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
}`,Cv=`#include <common>
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
}`,Pv=`uniform vec3 color;
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
}`,Iv=`uniform float rotation;
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
}`,Lv=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:e0,alphahash_pars_fragment:t0,alphamap_fragment:n0,alphamap_pars_fragment:i0,alphatest_fragment:r0,alphatest_pars_fragment:s0,aomap_fragment:o0,aomap_pars_fragment:a0,batching_pars_vertex:l0,batching_vertex:c0,begin_vertex:u0,beginnormal_vertex:h0,bsdfs:d0,iridescence_fragment:f0,bumpmap_pars_fragment:p0,clipping_planes_fragment:m0,clipping_planes_pars_fragment:g0,clipping_planes_pars_vertex:_0,clipping_planes_vertex:x0,color_fragment:v0,color_pars_fragment:y0,color_pars_vertex:S0,color_vertex:M0,common:E0,cube_uv_reflection_fragment:T0,defaultnormal_vertex:b0,displacementmap_pars_vertex:A0,displacementmap_vertex:w0,emissivemap_fragment:R0,emissivemap_pars_fragment:C0,colorspace_fragment:P0,colorspace_pars_fragment:I0,envmap_fragment:L0,envmap_common_pars_fragment:D0,envmap_pars_fragment:N0,envmap_pars_vertex:U0,envmap_physical_pars_fragment:Y0,envmap_vertex:F0,fog_vertex:O0,fog_pars_vertex:B0,fog_fragment:k0,fog_pars_fragment:z0,gradientmap_pars_fragment:H0,lightmap_pars_fragment:V0,lights_lambert_fragment:G0,lights_lambert_pars_fragment:W0,lights_pars_begin:X0,lights_toon_fragment:$0,lights_toon_pars_fragment:q0,lights_phong_fragment:K0,lights_phong_pars_fragment:Z0,lights_physical_fragment:j0,lights_physical_pars_fragment:J0,lights_fragment_begin:Q0,lights_fragment_maps:ex,lights_fragment_end:tx,logdepthbuf_fragment:nx,logdepthbuf_pars_fragment:ix,logdepthbuf_pars_vertex:rx,logdepthbuf_vertex:sx,map_fragment:ox,map_pars_fragment:ax,map_particle_fragment:lx,map_particle_pars_fragment:cx,metalnessmap_fragment:ux,metalnessmap_pars_fragment:hx,morphinstance_vertex:dx,morphcolor_vertex:fx,morphnormal_vertex:px,morphtarget_pars_vertex:mx,morphtarget_vertex:gx,normal_fragment_begin:_x,normal_fragment_maps:xx,normal_pars_fragment:vx,normal_pars_vertex:yx,normal_vertex:Sx,normalmap_pars_fragment:Mx,clearcoat_normal_fragment_begin:Ex,clearcoat_normal_fragment_maps:Tx,clearcoat_pars_fragment:bx,iridescence_pars_fragment:Ax,opaque_fragment:wx,packing:Rx,premultiplied_alpha_fragment:Cx,project_vertex:Px,dithering_fragment:Ix,dithering_pars_fragment:Lx,roughnessmap_fragment:Dx,roughnessmap_pars_fragment:Nx,shadowmap_pars_fragment:Ux,shadowmap_pars_vertex:Fx,shadowmap_vertex:Ox,shadowmask_pars_fragment:Bx,skinbase_vertex:kx,skinning_pars_vertex:zx,skinning_vertex:Hx,skinnormal_vertex:Vx,specularmap_fragment:Gx,specularmap_pars_fragment:Wx,tonemapping_fragment:Xx,tonemapping_pars_fragment:Yx,transmission_fragment:$x,transmission_pars_fragment:qx,uv_pars_fragment:Kx,uv_pars_vertex:Zx,uv_vertex:jx,worldpos_vertex:Jx,background_vert:Qx,background_frag:ev,backgroundCube_vert:tv,backgroundCube_frag:nv,cube_vert:iv,cube_frag:rv,depth_vert:sv,depth_frag:ov,distanceRGBA_vert:av,distanceRGBA_frag:lv,equirect_vert:cv,equirect_frag:uv,linedashed_vert:hv,linedashed_frag:dv,meshbasic_vert:fv,meshbasic_frag:pv,meshlambert_vert:mv,meshlambert_frag:gv,meshmatcap_vert:_v,meshmatcap_frag:xv,meshnormal_vert:vv,meshnormal_frag:yv,meshphong_vert:Sv,meshphong_frag:Mv,meshphysical_vert:Ev,meshphysical_frag:Tv,meshtoon_vert:bv,meshtoon_frag:Av,points_vert:wv,points_frag:Rv,shadow_vert:Cv,shadow_frag:Pv,sprite_vert:Iv,sprite_frag:Lv},Pe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},di={basic:{uniforms:gn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:gn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:gn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:gn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:gn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new tt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:gn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:gn([Pe.points,Pe.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:gn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:gn([Pe.common,Pe.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:gn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:gn([Pe.sprite,Pe.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:gn([Pe.common,Pe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:gn([Pe.lights,Pe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};di.physical={uniforms:gn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Sa={r:0,b:0,g:0},Ar=new Si,Dv=new rt;function Nv(s,e,t,n,i,r,o){const a=new tt(0);let l=r===!0?0:1,c,u,d=null,f=0,h=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function _(T){let y=!1;const w=g(T);w===null?p(a,l):w&&w.isColor&&(p(w,1),y=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(T,y){const w=g(y);w&&(w.isCubeTexture||w.mapping===il)?(u===void 0&&(u=new Un(new Yo(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:ks(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ar.copy(y.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Dv.makeRotationFromEuler(Ar)),u.material.toneMapped=yt.getTransfer(w.colorSpace)!==Ct,(d!==w||f!==w.version||h!==s.toneMapping)&&(u.material.needsUpdate=!0,d=w,f=w.version,h=s.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Un(new ol(2,2),new _r({name:"BackgroundMaterial",uniforms:ks(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=yt.getTransfer(w.colorSpace)!==Ct,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,d=w,f=w.version,h=s.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,y){T.getRGB(Sa,zf(s)),n.buffers.color.setClear(Sa.r,Sa.g,Sa.b,y,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,y=1){a.set(T),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:_,addToRenderList:m,dispose:S}}function Uv(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(b,D,$,H,ee){let ne=!1;const K=d(H,$,D);r!==K&&(r=K,c(r.object)),ne=h(b,H,$,ee),ne&&g(b,H,$,ee),ee!==null&&e.update(ee,s.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,y(b,D,$,H),ee!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function u(b){return s.deleteVertexArray(b)}function d(b,D,$){const H=$.wireframe===!0;let ee=n[b.id];ee===void 0&&(ee={},n[b.id]=ee);let ne=ee[D.id];ne===void 0&&(ne={},ee[D.id]=ne);let K=ne[H];return K===void 0&&(K=f(l()),ne[H]=K),K}function f(b){const D=[],$=[],H=[];for(let ee=0;ee<t;ee++)D[ee]=0,$[ee]=0,H[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:$,attributeDivisors:H,object:b,attributes:{},index:null}}function h(b,D,$,H){const ee=r.attributes,ne=D.attributes;let K=0;const Q=$.getAttributes();for(const Z in Q)if(Q[Z].location>=0){const be=ee[Z];let Me=ne[Z];if(Me===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(Me=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(Me=b.instanceColor)),be===void 0||be.attribute!==Me||Me&&be.data!==Me.data)return!0;K++}return r.attributesNum!==K||r.index!==H}function g(b,D,$,H){const ee={},ne=D.attributes;let K=0;const Q=$.getAttributes();for(const Z in Q)if(Q[Z].location>=0){let be=ne[Z];be===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(be=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(be=b.instanceColor));const Me={};Me.attribute=be,be&&be.data&&(Me.data=be.data),ee[Z]=Me,K++}r.attributes=ee,r.attributesNum=K,r.index=H}function _(){const b=r.newAttributes;for(let D=0,$=b.length;D<$;D++)b[D]=0}function m(b){p(b,0)}function p(b,D){const $=r.newAttributes,H=r.enabledAttributes,ee=r.attributeDivisors;$[b]=1,H[b]===0&&(s.enableVertexAttribArray(b),H[b]=1),ee[b]!==D&&(s.vertexAttribDivisor(b,D),ee[b]=D)}function S(){const b=r.newAttributes,D=r.enabledAttributes;for(let $=0,H=D.length;$<H;$++)D[$]!==b[$]&&(s.disableVertexAttribArray($),D[$]=0)}function T(b,D,$,H,ee,ne,K){K===!0?s.vertexAttribIPointer(b,D,$,ee,ne):s.vertexAttribPointer(b,D,$,H,ee,ne)}function y(b,D,$,H){_();const ee=H.attributes,ne=$.getAttributes(),K=D.defaultAttributeValues;for(const Q in ne){const Z=ne[Q];if(Z.location>=0){let ye=ee[Q];if(ye===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(ye=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(ye=b.instanceColor)),ye!==void 0){const be=ye.normalized,Me=ye.itemSize,we=e.get(ye);if(we===void 0)continue;const Ve=we.buffer,j=we.type,ge=we.bytesPerElement,_e=j===s.INT||j===s.UNSIGNED_INT||ye.gpuType===Pu;if(ye.isInterleavedBufferAttribute){const Ee=ye.data,Ae=Ee.stride,st=ye.offset;if(Ee.isInstancedInterleavedBuffer){for(let Ge=0;Ge<Z.locationSize;Ge++)p(Z.location+Ge,Ee.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ge=0;Ge<Z.locationSize;Ge++)m(Z.location+Ge);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let Ge=0;Ge<Z.locationSize;Ge++)T(Z.location+Ge,Me/Z.locationSize,j,be,Ae*ge,(st+Me/Z.locationSize*Ge)*ge,_e)}else{if(ye.isInstancedBufferAttribute){for(let Ee=0;Ee<Z.locationSize;Ee++)p(Z.location+Ee,ye.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ee=0;Ee<Z.locationSize;Ee++)m(Z.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let Ee=0;Ee<Z.locationSize;Ee++)T(Z.location+Ee,Me/Z.locationSize,j,be,Me*ge,Me/Z.locationSize*Ee*ge,_e)}}else if(K!==void 0){const be=K[Q];if(be!==void 0)switch(be.length){case 2:s.vertexAttrib2fv(Z.location,be);break;case 3:s.vertexAttrib3fv(Z.location,be);break;case 4:s.vertexAttrib4fv(Z.location,be);break;default:s.vertexAttrib1fv(Z.location,be)}}}}S()}function w(){L();for(const b in n){const D=n[b];for(const $ in D){const H=D[$];for(const ee in H)u(H[ee].object),delete H[ee];delete D[$]}delete n[b]}}function I(b){if(n[b.id]===void 0)return;const D=n[b.id];for(const $ in D){const H=D[$];for(const ee in H)u(H[ee].object),delete H[ee];delete D[$]}delete n[b.id]}function R(b){for(const D in n){const $=n[D];if($[b.id]===void 0)continue;const H=$[b.id];for(const ee in H)u(H[ee].object),delete H[ee];delete $[b.id]}}function L(){M(),o=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Fv(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(s.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,n,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ov(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==Nn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==yi&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Mn&&!L)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:w,maxSamples:I}}function Bv(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Dr,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||i;return i=f,n=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const S=r?0:n,T=S*4;let y=p.clippingState||null;l.value=y,y=u(g,f,T,h);for(let w=0;w!==T;++w)y[w]=t[w];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,y=h;T!==_;++T,y+=4)o.copy(d[T]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function kv(s){let e=new WeakMap;function t(o,a){return a===Ha?o.mapping=Fs:a===Tc&&(o.mapping=Os),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ha||a===Tc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new r_(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Ss=4,dd=[.125,.215,.35,.446,.526,.582],Or=20,Vl=new qu,fd=new tt;let Gl=null,Wl=0,Xl=0,Yl=!1;const Nr=(1+Math.sqrt(5))/2,ms=1/Nr,pd=[new W(-Nr,ms,0),new W(Nr,ms,0),new W(-ms,0,Nr),new W(ms,0,Nr),new W(0,Nr,-ms),new W(0,Nr,ms),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],zv=new W;class md{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=zv}=r;Gl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_d(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gl,Wl,Xl),this._renderer.xr.enabled=Yl,e.scissorTest=!1,Ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gl=this._renderer.getRenderTarget(),Wl=this._renderer.getActiveCubeFace(),Xl=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:ki,format:Nn,colorSpace:an,depthBuffer:!1},i=gd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hv(r)),this._blurMaterial=Vv(r,e,t)}return i}_compileMaterial(e){const t=new Un(this._lodPlanes[0],e);this._renderer.compile(t,Vl)}_sceneToCubeUV(e,t,n,i,r){const l=new _n(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(fd),d.toneMapping=fr,d.autoClear=!1;const g=new kr({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),_=new Un(new Yo,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(fd),m=!0);for(let S=0;S<6;S++){const T=S%3;T===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):T===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const y=this._cubeSize;Ma(i,T*y,S>2?y:0,y,y),d.setRenderTarget(i),m&&d.render(_,l),d.render(e,l)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Fs||e.mapping===Os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_d());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Un(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ma(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Vl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=pd[(i-r-1)%pd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Un(this._lodPlanes[i],c),f=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Or-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Or;m>Or&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Or}`);const p=[];let S=0;for(let R=0;R<Or;++R){const L=R/_,M=Math.exp(-L*L/2);p.push(M),R===0?S+=M:R<m&&(S+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=g,f.mipInt.value=T-n;const y=this._sizeLods[i],w=3*y*(i>T-Ss?i-T+Ss:0),I=4*(this._cubeSize-y);Ma(t,w,I,3*y,2*y),l.setRenderTarget(t),l.render(d,Vl)}}function Hv(s){const e=[],t=[],n=[];let i=s;const r=s-Ss+1+dd.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Ss?l=dd[o-s+Ss-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*h),T=new Float32Array(m*g*h),y=new Float32Array(p*g*h);for(let I=0;I<h;I++){const R=I%3*2/3-1,L=I>2?0:-1,M=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];S.set(M,_*g*I),T.set(f,m*g*I);const b=[I,I,I,I,I,I];y.set(b,p*g*I)}const w=new Ti;w.setAttribute("position",new yn(S,_)),w.setAttribute("uv",new yn(T,m)),w.setAttribute("faceIndex",new yn(y,p)),e.push(w),i>Ss&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gd(s,e,t){const n=new qr(s,e,t);return n.texture.mapping=il,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ma(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Vv(s,e,t){const n=new Float32Array(Or),i=new W(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ju(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function _d(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ju(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function xd(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function ju(){return`

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
	`}function Gv(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ha||l===Tc,u=l===Fs||l===Os;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new md(s)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&i(h)?(t===null&&(t=new md(s)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Wv(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&As("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Xv(s,e,t,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],s.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,g=d.attributes.position;let _=0;if(h!==null){const S=h.array;_=h.version;for(let T=0,y=S.length;T<y;T+=3){const w=S[T+0],I=S[T+1],R=S[T+2];f.push(w,I,I,R,R,w)}}else if(g!==void 0){const S=g.array;_=g.version;for(let T=0,y=S.length/3-1;T<y;T+=3){const w=T+0,I=T+1,R=T+2;f.push(w,I,I,R,R,w)}}else return;const m=new(Nf(f)?kf:Bf)(f,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Yv(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){s.drawElements(n,h,r,f*o),t.update(h,n,1)}function c(f,h,g){g!==0&&(s.drawElementsInstanced(n,h,r,f*o,g),t.update(h,n,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,n,1)}function d(f,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,r,f,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=h[S]*_[S];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function $v(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function qv(s,e,t){const n=new WeakMap,i=new Tt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let b=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var h=b;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let w=a.attributes.position.count*y,I=1;w>e.maxTextureSize&&(I=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const R=new Float32Array(w*I*4*d),L=new Uf(R,w,I,d);L.type=Mn,L.needsUpdate=!0;const M=y*4;for(let D=0;D<d;D++){const $=p[D],H=S[D],ee=T[D],ne=w*I*4*D;for(let K=0;K<$.count;K++){const Q=K*M;g===!0&&(i.fromBufferAttribute($,K),R[ne+Q+0]=i.x,R[ne+Q+1]=i.y,R[ne+Q+2]=i.z,R[ne+Q+3]=0),_===!0&&(i.fromBufferAttribute(H,K),R[ne+Q+4]=i.x,R[ne+Q+5]=i.y,R[ne+Q+6]=i.z,R[ne+Q+7]=0),m===!0&&(i.fromBufferAttribute(ee,K),R[ne+Q+8]=i.x,R[ne+Q+9]=i.y,R[ne+Q+10]=i.z,R[ne+Q+11]=ee.itemSize===4?i.w:1)}}f={count:d,texture:L,size:new xt(w,I)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Kv(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const tp=new on,vd=new Yf(1,1),np=new Uf,ip=new Bg,rp=new Vf,yd=[],Sd=[],Md=new Float32Array(16),Ed=new Float32Array(9),Td=new Float32Array(4);function Js(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=yd[i];if(r===void 0&&(r=new Float32Array(i),yd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Qt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function en(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function al(s,e){let t=Sd[e];t===void 0&&(t=new Int32Array(e),Sd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Zv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function jv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2fv(this.addr,e),en(t,e)}}function Jv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;s.uniform3fv(this.addr,e),en(t,e)}}function Qv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4fv(this.addr,e),en(t,e)}}function ey(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Td.set(n),s.uniformMatrix2fv(this.addr,!1,Td),en(t,n)}}function ty(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Ed.set(n),s.uniformMatrix3fv(this.addr,!1,Ed),en(t,n)}}function ny(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Md.set(n),s.uniformMatrix4fv(this.addr,!1,Md),en(t,n)}}function iy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ry(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2iv(this.addr,e),en(t,e)}}function sy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3iv(this.addr,e),en(t,e)}}function oy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4iv(this.addr,e),en(t,e)}}function ay(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ly(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;s.uniform2uiv(this.addr,e),en(t,e)}}function cy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;s.uniform3uiv(this.addr,e),en(t,e)}}function uy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;s.uniform4uiv(this.addr,e),en(t,e)}}function hy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(vd.compareFunction=Df,r=vd):r=tp,t.setTexture2D(e||r,i)}function dy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ip,i)}function fy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||rp,i)}function py(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||np,i)}function my(s){switch(s){case 5126:return Zv;case 35664:return jv;case 35665:return Jv;case 35666:return Qv;case 35674:return ey;case 35675:return ty;case 35676:return ny;case 5124:case 35670:return iy;case 35667:case 35671:return ry;case 35668:case 35672:return sy;case 35669:case 35673:return oy;case 5125:return ay;case 36294:return ly;case 36295:return cy;case 36296:return uy;case 35678:case 36198:case 36298:case 36306:case 35682:return hy;case 35679:case 36299:case 36307:return dy;case 35680:case 36300:case 36308:case 36293:return fy;case 36289:case 36303:case 36311:case 36292:return py}}function gy(s,e){s.uniform1fv(this.addr,e)}function _y(s,e){const t=Js(e,this.size,2);s.uniform2fv(this.addr,t)}function xy(s,e){const t=Js(e,this.size,3);s.uniform3fv(this.addr,t)}function vy(s,e){const t=Js(e,this.size,4);s.uniform4fv(this.addr,t)}function yy(s,e){const t=Js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Sy(s,e){const t=Js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function My(s,e){const t=Js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ey(s,e){s.uniform1iv(this.addr,e)}function Ty(s,e){s.uniform2iv(this.addr,e)}function by(s,e){s.uniform3iv(this.addr,e)}function Ay(s,e){s.uniform4iv(this.addr,e)}function wy(s,e){s.uniform1uiv(this.addr,e)}function Ry(s,e){s.uniform2uiv(this.addr,e)}function Cy(s,e){s.uniform3uiv(this.addr,e)}function Py(s,e){s.uniform4uiv(this.addr,e)}function Iy(s,e,t){const n=this.cache,i=e.length,r=al(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||tp,r[o])}function Ly(s,e,t){const n=this.cache,i=e.length,r=al(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ip,r[o])}function Dy(s,e,t){const n=this.cache,i=e.length,r=al(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||rp,r[o])}function Ny(s,e,t){const n=this.cache,i=e.length,r=al(t,i);Qt(n,r)||(s.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||np,r[o])}function Uy(s){switch(s){case 5126:return gy;case 35664:return _y;case 35665:return xy;case 35666:return vy;case 35674:return yy;case 35675:return Sy;case 35676:return My;case 5124:case 35670:return Ey;case 35667:case 35671:return Ty;case 35668:case 35672:return by;case 35669:case 35673:return Ay;case 5125:return wy;case 36294:return Ry;case 36295:return Cy;case 36296:return Py;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Ly;case 35680:case 36300:case 36308:case 36293:return Dy;case 36289:case 36303:case 36311:case 36292:return Ny}}class Fy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=my(t.type)}}class Oy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Uy(t.type)}}class By{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const $l=/(\w+)(\])?(\[|\.)?/g;function bd(s,e){s.seq.push(e),s.map[e.id]=e}function ky(s,e,t){const n=s.name,i=n.length;for($l.lastIndex=0;;){const r=$l.exec(n),o=$l.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){bd(t,c===void 0?new Fy(a,s,e):new Oy(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new By(a),bd(t,d)),t=d}}}class Na{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);ky(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ad(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const zy=37297;let Hy=0;function Vy(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const wd=new it;function Gy(s){yt._getMatrix(wd,yt.workingColorSpace,s);const e=`mat3( ${wd.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(s)){case Wa:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Rd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Vy(s.getShaderSource(e),o)}else return i}function Wy(s,e){const t=Gy(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xy(s,e){let t;switch(e){case Xm:t="Linear";break;case Ym:t="Reinhard";break;case $m:t="Cineon";break;case Sf:t="ACESFilmic";break;case Km:t="AgX";break;case Zm:t="Neutral";break;case qm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ea=new W;function Yy(){yt.getLuminanceCoefficients(Ea);const s=Ea.x.toFixed(4),e=Ea.y.toFixed(4),t=Ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $y(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function qy(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ky(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ho(s){return s!==""}function Cd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zy=/^[ \t]*#include +<([\w\d./]+)>/gm;function iu(s){return s.replace(Zy,Jy)}const jy=new Map;function Jy(s,e){let t=at[e];if(t===void 0){const n=jy.get(e);if(n!==void 0)t=at[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return iu(t)}const Qy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Id(s){return s.replace(Qy,eS)}function eS(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ld(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tS(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===xf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===vf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function nS(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Fs:case Os:e="ENVMAP_TYPE_CUBE";break;case il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iS(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function rS(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case yf:e="ENVMAP_BLENDING_MULTIPLY";break;case Gm:e="ENVMAP_BLENDING_MIX";break;case Wm:e="ENVMAP_BLENDING_ADD";break}return e}function sS(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function oS(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=tS(t),c=nS(t),u=iS(t),d=rS(t),f=sS(t),h=$y(t),g=qy(r),_=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ho).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ho).join(`
`),p.length>0&&(p+=`
`)):(m=[Ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),p=[Ld(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fr?"#define TONE_MAPPING":"",t.toneMapping!==fr?at.tonemapping_pars_fragment:"",t.toneMapping!==fr?Xy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Wy("linearToOutputTexel",t.outputColorSpace),Yy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ho).join(`
`)),o=iu(o),o=Cd(o,t),o=Pd(o,t),a=iu(a),a=Cd(a,t),a=Pd(a,t),o=Id(o),a=Id(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===wh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=S+m+o,y=S+p+a,w=Ad(i,i.VERTEX_SHADER,T),I=Ad(i,i.FRAGMENT_SHADER,y);i.attachShader(_,w),i.attachShader(_,I),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(D){if(s.debug.checkShaderErrors){const $=i.getProgramInfoLog(_).trim(),H=i.getShaderInfoLog(w).trim(),ee=i.getShaderInfoLog(I).trim();let ne=!0,K=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(ne=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,w,I);else{const Q=Rd(i,w,"vertex"),Z=Rd(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+$+`
`+Q+`
`+Z)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(H===""||ee==="")&&(K=!1);K&&(D.diagnostics={runnable:ne,programLog:$,vertexShader:{log:H,prefix:m},fragmentShader:{log:ee,prefix:p}})}i.deleteShader(w),i.deleteShader(I),L=new Na(i,_),M=Ky(i,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,zy)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=I,this}let aS=0;class lS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cS(e),t.set(e,n)),n}}class cS{constructor(e){this.id=aS++,this.code=e,this.usedTimes=0}}function uS(s,e,t,n,i,r,o){const a=new Ff,l=new lS,c=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let h=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,b,D,$,H){const ee=$.fog,ne=H.geometry,K=M.isMeshStandardMaterial?$.environment:null,Q=(M.isMeshStandardMaterial?t:e).get(M.envMap||K),Z=Q&&Q.mapping===il?Q.image.height:null,ye=g[M.type];M.precision!==null&&(h=i.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const be=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Me=be!==void 0?be.length:0;let we=0;ne.morphAttributes.position!==void 0&&(we=1),ne.morphAttributes.normal!==void 0&&(we=2),ne.morphAttributes.color!==void 0&&(we=3);let Ve,j,ge,_e;if(ye){const X=di[ye];Ve=X.vertexShader,j=X.fragmentShader}else Ve=M.vertexShader,j=M.fragmentShader,l.update(M),ge=l.getVertexShaderID(M),_e=l.getFragmentShaderID(M);const Ee=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),st=H.isInstancedMesh===!0,Ge=H.isBatchedMesh===!0,lt=!!M.map,dt=!!M.matcap,et=!!Q,k=!!M.aoMap,je=!!M.lightMap,ft=!!M.bumpMap,nt=!!M.normalMap,Ie=!!M.displacementMap,ct=!!M.emissiveMap,Xe=!!M.metalnessMap,Je=!!M.roughnessMap,pt=M.anisotropy>0,N=M.clearcoat>0,E=M.dispersion>0,q=M.iridescence>0,re=M.sheen>0,de=M.transmission>0,ie=pt&&!!M.anisotropyMap,ze=N&&!!M.clearcoatMap,Ce=N&&!!M.clearcoatNormalMap,He=N&&!!M.clearcoatRoughnessMap,We=q&&!!M.iridescenceMap,ae=q&&!!M.iridescenceThicknessMap,Re=re&&!!M.sheenColorMap,Ye=re&&!!M.sheenRoughnessMap,Oe=!!M.specularMap,ve=!!M.specularColorMap,Ne=!!M.specularIntensityMap,z=de&&!!M.transmissionMap,J=de&&!!M.thicknessMap,le=!!M.gradientMap,De=!!M.alphaMap,xe=M.alphaTest>0,ce=!!M.alphaHash,oe=!!M.extensions;let B=fr;M.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(B=s.toneMapping);const se={shaderID:ye,shaderType:M.type,shaderName:M.name,vertexShader:Ve,fragmentShader:j,defines:M.defines,customVertexShaderID:ge,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:Ge,batchingColor:Ge&&H._colorsTexture!==null,instancing:st,instancingColor:st&&H.instanceColor!==null,instancingMorph:st&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ee===null?s.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:an,alphaToCoverage:!!M.alphaToCoverage,map:lt,matcap:dt,envMap:et,envMapMode:et&&Q.mapping,envMapCubeUVHeight:Z,aoMap:k,lightMap:je,bumpMap:ft,normalMap:nt,displacementMap:f&&Ie,emissiveMap:ct,normalMapObjectSpace:nt&&M.normalMapType===rg,normalMapTangentSpace:nt&&M.normalMapType===Lf,metalnessMap:Xe,roughnessMap:Je,anisotropy:pt,anisotropyMap:ie,clearcoat:N,clearcoatMap:ze,clearcoatNormalMap:Ce,clearcoatRoughnessMap:He,dispersion:E,iridescence:q,iridescenceMap:We,iridescenceThicknessMap:ae,sheen:re,sheenColorMap:Re,sheenRoughnessMap:Ye,specularMap:Oe,specularColorMap:ve,specularIntensityMap:Ne,transmission:de,transmissionMap:z,thicknessMap:J,gradientMap:le,opaque:M.transparent===!1&&M.blending===bs&&M.alphaToCoverage===!1,alphaMap:De,alphaTest:xe,alphaHash:ce,combine:M.combine,mapUv:lt&&_(M.map.channel),aoMapUv:k&&_(M.aoMap.channel),lightMapUv:je&&_(M.lightMap.channel),bumpMapUv:ft&&_(M.bumpMap.channel),normalMapUv:nt&&_(M.normalMap.channel),displacementMapUv:Ie&&_(M.displacementMap.channel),emissiveMapUv:ct&&_(M.emissiveMap.channel),metalnessMapUv:Xe&&_(M.metalnessMap.channel),roughnessMapUv:Je&&_(M.roughnessMap.channel),anisotropyMapUv:ie&&_(M.anisotropyMap.channel),clearcoatMapUv:ze&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&_(M.sheenRoughnessMap.channel),specularMapUv:Oe&&_(M.specularMap.channel),specularColorMapUv:ve&&_(M.specularColorMap.channel),specularIntensityMapUv:Ne&&_(M.specularIntensityMap.channel),transmissionMapUv:z&&_(M.transmissionMap.channel),thicknessMapUv:J&&_(M.thicknessMap.channel),alphaMapUv:De&&_(M.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(nt||pt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ne.attributes.uv&&(lt||De),fog:!!ee,useFog:M.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ae,skinning:H.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:we,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:B,decodeVideoTexture:lt&&M.map.isVideoTexture===!0&&yt.getTransfer(M.map.colorSpace)===Ct,decodeVideoTextureEmissive:ct&&M.emissiveMap.isVideoTexture===!0&&yt.getTransfer(M.emissiveMap.colorSpace)===Ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===fi,flipSided:M.side===En,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:oe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&M.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return se.vertexUv1s=c.has(1),se.vertexUv2s=c.has(2),se.vertexUv3s=c.has(3),c.clear(),se}function p(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)b.push(D),b.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(S(b,M),T(b,M),b.push(s.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function S(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function T(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const b=g[M.type];let D;if(b){const $=di[b];D=e_.clone($.uniforms)}else D=M.uniforms;return D}function w(M,b){let D;for(let $=0,H=u.length;$<H;$++){const ee=u[$];if(ee.cacheKey===b){D=ee,++D.usedTimes;break}}return D===void 0&&(D=new oS(s,b,M,r),u.push(D)),D}function I(M){if(--M.usedTimes===0){const b=u.indexOf(M);u[b]=u[u.length-1],u.pop(),M.destroy()}}function R(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:w,releaseProgram:I,releaseShaderCache:R,programs:u,dispose:L}}function hS(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function dS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Dd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Nd(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,h,g,_,m){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function a(d,f,h,g,_,m){const p=o(d,f,h,g,_,m);h.transmission>0?n.push(p):h.transparent===!0?i.push(p):t.push(p)}function l(d,f,h,g,_,m){const p=o(d,f,h,g,_,m);h.transmission>0?n.unshift(p):h.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||dS),n.length>1&&n.sort(f||Dd),i.length>1&&i.sort(f||Dd)}function u(){for(let d=e,f=s.length;d<f;d++){const h=s[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function fS(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Nd,s.set(n,[o])):i>=r.length?(o=new Nd,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function pS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new tt};break;case"SpotLight":t={position:new W,direction:new W,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new W,halfWidth:new W,halfHeight:new W};break}return s[e.id]=t,t}}}function mS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let gS=0;function _S(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function xS(s){const e=new pS,t=mS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const i=new W,r=new rt,o=new rt;function a(c){let u=0,d=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,S=0,T=0,y=0,w=0,I=0,R=0;c.sort(_S);for(let M=0,b=c.length;M<b;M++){const D=c[M],$=D.color,H=D.intensity,ee=D.distance,ne=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=$.r*H,d+=$.g*H,f+=$.b*H;else if(D.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(D.sh.coefficients[K],H);R++}else if(D.isDirectionalLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,Z=t.get(D);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,n.directionalShadow[h]=Z,n.directionalShadowMap[h]=ne,n.directionalShadowMatrix[h]=D.shadow.matrix,S++}n.directional[h]=K,h++}else if(D.isSpotLight){const K=e.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy($).multiplyScalar(H),K.distance=ee,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,n.spot[_]=K;const Q=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,Q.updateMatrices(D),D.castShadow&&I++),n.spotLightMatrix[_]=Q.matrix,D.castShadow){const Z=t.get(D);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,n.spotShadow[_]=Z,n.spotShadowMap[_]=ne,y++}_++}else if(D.isRectAreaLight){const K=e.get(D);K.color.copy($).multiplyScalar(H),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=K,m++}else if(D.isPointLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),K.distance=D.distance,K.decay=D.decay,D.castShadow){const Q=D.shadow,Z=t.get(D);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,Z.shadowCameraNear=Q.camera.near,Z.shadowCameraFar=Q.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=ne,n.pointShadowMatrix[g]=D.shadow.matrix,T++}n.point[g]=K,g++}else if(D.isHemisphereLight){const K=e.get(D);K.skyColor.copy(D.color).multiplyScalar(H),K.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[p]=K,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==h||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==S||L.numPointShadows!==T||L.numSpotShadows!==y||L.numSpotMaps!==w||L.numLightProbes!==R)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+w-I,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=R,L.directionalLength=h,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=S,L.numPointShadows=T,L.numSpotShadows=y,L.numSpotMaps=w,L.numLightProbes=R,n.version=gS++)}function l(c,u){let d=0,f=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const T=c[p];if(T.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(T.isSpotLight){const y=n.spot[h];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(T.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),f++}else if(T.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Ud(s){const e=new xS(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function vS(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Ud(s),e.set(i,[a])):r>=o.length?(a=new Ud(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const yS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SS=`uniform sampler2D shadow_pass;
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
}`;function MS(s,e,t){let n=new Vu;const i=new xt,r=new xt,o=new Tt,a=new v_({depthPacking:ig}),l=new y_,c={},u=t.maxTextureSize,d={[Yi]:En,[En]:Yi,[fi]:fi},f=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:yS,fragmentShader:SS}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Ti;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Un(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xf;let p=this.type;this.render=function(I,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const M=s.getRenderTarget(),b=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),$=s.state;$.setBlending(dr),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const H=p!==Li&&this.type===Li,ee=p===Li&&this.type!==Li;for(let ne=0,K=I.length;ne<K;ne++){const Q=I[ne],Z=Q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);const ye=Z.getFrameExtents();if(i.multiply(ye),r.copy(Z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ye.x),i.x=r.x*ye.x,Z.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ye.y),i.y=r.y*ye.y,Z.mapSize.y=r.y)),Z.map===null||H===!0||ee===!0){const Me=this.type!==Li?{minFilter:vn,magFilter:vn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new qr(i.x,i.y,Me),Z.map.texture.name=Q.name+".shadowMap",Z.camera.updateProjectionMatrix()}s.setRenderTarget(Z.map),s.clear();const be=Z.getViewportCount();for(let Me=0;Me<be;Me++){const we=Z.getViewport(Me);o.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),$.viewport(o),Z.updateMatrices(Q,Me),n=Z.getFrustum(),y(R,L,Z.camera,Q,this.type)}Z.isPointLightShadow!==!0&&this.type===Li&&S(Z,L),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,b,D)};function S(I,R){const L=e.update(_);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,h.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new qr(i.x,i.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(R,null,L,f,_,null),h.uniforms.shadow_pass.value=I.mapPass.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(R,null,L,h,_,null)}function T(I,R,L,M){let b=null;const D=L.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(D!==void 0)b=D;else if(b=L.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const $=b.uuid,H=R.uuid;let ee=c[$];ee===void 0&&(ee={},c[$]=ee);let ne=ee[H];ne===void 0&&(ne=b.clone(),ee[H]=ne,R.addEventListener("dispose",w)),b=ne}if(b.visible=R.visible,b.wireframe=R.wireframe,M===Li?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:d[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const $=s.properties.get(b);$.light=L}return b}function y(I,R,L,M,b){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&b===Li)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,I.matrixWorld);const H=e.update(I),ee=I.material;if(Array.isArray(ee)){const ne=H.groups;for(let K=0,Q=ne.length;K<Q;K++){const Z=ne[K],ye=ee[Z.materialIndex];if(ye&&ye.visible){const be=T(I,ye,M,b);I.onBeforeShadow(s,I,R,L,H,be,Z),s.renderBufferDirect(L,null,H,be,I,Z),I.onAfterShadow(s,I,R,L,H,be,Z)}}}else if(ee.visible){const ne=T(I,ee,M,b);I.onBeforeShadow(s,I,R,L,H,ne,null),s.renderBufferDirect(L,null,H,ne,I,null),I.onAfterShadow(s,I,R,L,H,ne,null)}}const $=I.children;for(let H=0,ee=$.length;H<ee;H++)y($[H],R,L,M,b)}function w(I){I.target.removeEventListener("dispose",w);for(const L in c){const M=c[L],b=I.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const ES={[_c]:xc,[vc]:Mc,[yc]:Ec,[Us]:Sc,[xc]:_c,[Mc]:vc,[Ec]:yc,[Sc]:Us};function TS(s,e){function t(){let z=!1;const J=new Tt;let le=null;const De=new Tt(0,0,0,0);return{setMask:function(xe){le!==xe&&!z&&(s.colorMask(xe,xe,xe,xe),le=xe)},setLocked:function(xe){z=xe},setClear:function(xe,ce,oe,B,se){se===!0&&(xe*=B,ce*=B,oe*=B),J.set(xe,ce,oe,B),De.equals(J)===!1&&(s.clearColor(xe,ce,oe,B),De.copy(J))},reset:function(){z=!1,le=null,De.set(-1,0,0,0)}}}function n(){let z=!1,J=!1,le=null,De=null,xe=null;return{setReversed:function(ce){if(J!==ce){const oe=e.get("EXT_clip_control");ce?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),J=ce;const B=xe;xe=null,this.setClear(B)}},getReversed:function(){return J},setTest:function(ce){ce?Ee(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(ce){le!==ce&&!z&&(s.depthMask(ce),le=ce)},setFunc:function(ce){if(J&&(ce=ES[ce]),De!==ce){switch(ce){case _c:s.depthFunc(s.NEVER);break;case xc:s.depthFunc(s.ALWAYS);break;case vc:s.depthFunc(s.LESS);break;case Us:s.depthFunc(s.LEQUAL);break;case yc:s.depthFunc(s.EQUAL);break;case Sc:s.depthFunc(s.GEQUAL);break;case Mc:s.depthFunc(s.GREATER);break;case Ec:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}De=ce}},setLocked:function(ce){z=ce},setClear:function(ce){xe!==ce&&(J&&(ce=1-ce),s.clearDepth(ce),xe=ce)},reset:function(){z=!1,le=null,De=null,xe=null,J=!1}}}function i(){let z=!1,J=null,le=null,De=null,xe=null,ce=null,oe=null,B=null,se=null;return{setTest:function(X){z||(X?Ee(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(X){J!==X&&!z&&(s.stencilMask(X),J=X)},setFunc:function(X,pe,Te){(le!==X||De!==pe||xe!==Te)&&(s.stencilFunc(X,pe,Te),le=X,De=pe,xe=Te)},setOp:function(X,pe,Te){(ce!==X||oe!==pe||B!==Te)&&(s.stencilOp(X,pe,Te),ce=X,oe=pe,B=Te)},setLocked:function(X){z=X},setClear:function(X){se!==X&&(s.clearStencil(X),se=X)},reset:function(){z=!1,J=null,le=null,De=null,xe=null,ce=null,oe=null,B=null,se=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,_=!1,m=null,p=null,S=null,T=null,y=null,w=null,I=null,R=new tt(0,0,0),L=0,M=!1,b=null,D=null,$=null,H=null,ee=null;const ne=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Q=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),K=Q>=1):Z.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),K=Q>=2);let ye=null,be={};const Me=s.getParameter(s.SCISSOR_BOX),we=s.getParameter(s.VIEWPORT),Ve=new Tt().fromArray(Me),j=new Tt().fromArray(we);function ge(z,J,le,De){const xe=new Uint8Array(4),ce=s.createTexture();s.bindTexture(z,ce),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let oe=0;oe<le;oe++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(J,0,s.RGBA,1,1,De,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(J+oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return ce}const _e={};_e[s.TEXTURE_2D]=ge(s.TEXTURE_2D,s.TEXTURE_2D,1),_e[s.TEXTURE_CUBE_MAP]=ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[s.TEXTURE_2D_ARRAY]=ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_e[s.TEXTURE_3D]=ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Ee(s.DEPTH_TEST),o.setFunc(Us),ft(!1),nt(Sh),Ee(s.CULL_FACE),k(dr);function Ee(z){u[z]!==!0&&(s.enable(z),u[z]=!0)}function Ae(z){u[z]!==!1&&(s.disable(z),u[z]=!1)}function st(z,J){return d[z]!==J?(s.bindFramebuffer(z,J),d[z]=J,z===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=J),z===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=J),!0):!1}function Ge(z,J){let le=h,De=!1;if(z){le=f.get(J),le===void 0&&(le=[],f.set(J,le));const xe=z.textures;if(le.length!==xe.length||le[0]!==s.COLOR_ATTACHMENT0){for(let ce=0,oe=xe.length;ce<oe;ce++)le[ce]=s.COLOR_ATTACHMENT0+ce;le.length=xe.length,De=!0}}else le[0]!==s.BACK&&(le[0]=s.BACK,De=!0);De&&s.drawBuffers(le)}function lt(z){return g!==z?(s.useProgram(z),g=z,!0):!1}const dt={[Fr]:s.FUNC_ADD,[Am]:s.FUNC_SUBTRACT,[wm]:s.FUNC_REVERSE_SUBTRACT};dt[Rm]=s.MIN,dt[Cm]=s.MAX;const et={[Pm]:s.ZERO,[Im]:s.ONE,[Lm]:s.SRC_COLOR,[mc]:s.SRC_ALPHA,[Bm]:s.SRC_ALPHA_SATURATE,[Fm]:s.DST_COLOR,[Nm]:s.DST_ALPHA,[Dm]:s.ONE_MINUS_SRC_COLOR,[gc]:s.ONE_MINUS_SRC_ALPHA,[Om]:s.ONE_MINUS_DST_COLOR,[Um]:s.ONE_MINUS_DST_ALPHA,[km]:s.CONSTANT_COLOR,[zm]:s.ONE_MINUS_CONSTANT_COLOR,[Hm]:s.CONSTANT_ALPHA,[Vm]:s.ONE_MINUS_CONSTANT_ALPHA};function k(z,J,le,De,xe,ce,oe,B,se,X){if(z===dr){_===!0&&(Ae(s.BLEND),_=!1);return}if(_===!1&&(Ee(s.BLEND),_=!0),z!==bm){if(z!==m||X!==M){if((p!==Fr||y!==Fr)&&(s.blendEquation(s.FUNC_ADD),p=Fr,y=Fr),X)switch(z){case bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mh:s.blendFunc(s.ONE,s.ONE);break;case Eh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Th:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Eh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Th:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}S=null,T=null,w=null,I=null,R.set(0,0,0),L=0,m=z,M=X}return}xe=xe||J,ce=ce||le,oe=oe||De,(J!==p||xe!==y)&&(s.blendEquationSeparate(dt[J],dt[xe]),p=J,y=xe),(le!==S||De!==T||ce!==w||oe!==I)&&(s.blendFuncSeparate(et[le],et[De],et[ce],et[oe]),S=le,T=De,w=ce,I=oe),(B.equals(R)===!1||se!==L)&&(s.blendColor(B.r,B.g,B.b,se),R.copy(B),L=se),m=z,M=!1}function je(z,J){z.side===fi?Ae(s.CULL_FACE):Ee(s.CULL_FACE);let le=z.side===En;J&&(le=!le),ft(le),z.blending===bs&&z.transparent===!1?k(dr):k(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const De=z.stencilWrite;a.setTest(De),De&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ct(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Ee(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function ft(z){b!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),b=z)}function nt(z){z!==Em?(Ee(s.CULL_FACE),z!==D&&(z===Sh?s.cullFace(s.BACK):z===Tm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),D=z}function Ie(z){z!==$&&(K&&s.lineWidth(z),$=z)}function ct(z,J,le){z?(Ee(s.POLYGON_OFFSET_FILL),(H!==J||ee!==le)&&(s.polygonOffset(J,le),H=J,ee=le)):Ae(s.POLYGON_OFFSET_FILL)}function Xe(z){z?Ee(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function Je(z){z===void 0&&(z=s.TEXTURE0+ne-1),ye!==z&&(s.activeTexture(z),ye=z)}function pt(z,J,le){le===void 0&&(ye===null?le=s.TEXTURE0+ne-1:le=ye);let De=be[le];De===void 0&&(De={type:void 0,texture:void 0},be[le]=De),(De.type!==z||De.texture!==J)&&(ye!==le&&(s.activeTexture(le),ye=le),s.bindTexture(z,J||_e[z]),De.type=z,De.texture=J)}function N(){const z=be[ye];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function re(){try{s.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function de(){try{s.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{s.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ze(){try{s.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ce(){try{s.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function He(){try{s.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function We(){try{s.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{s.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(z){Ve.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Ve.copy(z))}function Ye(z){j.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),j.copy(z))}function Oe(z,J){let le=c.get(J);le===void 0&&(le=new WeakMap,c.set(J,le));let De=le.get(z);De===void 0&&(De=s.getUniformBlockIndex(J,z.name),le.set(z,De))}function ve(z,J){const De=c.get(J).get(z);l.get(J)!==De&&(s.uniformBlockBinding(J,De,z.__bindingPointIndex),l.set(J,De))}function Ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},ye=null,be={},d={},f=new WeakMap,h=[],g=null,_=!1,m=null,p=null,S=null,T=null,y=null,w=null,I=null,R=new tt(0,0,0),L=0,M=!1,b=null,D=null,$=null,H=null,ee=null,Ve.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Ee,disable:Ae,bindFramebuffer:st,drawBuffers:Ge,useProgram:lt,setBlending:k,setMaterial:je,setFlipSided:ft,setCullFace:nt,setLineWidth:Ie,setPolygonOffset:ct,setScissorTest:Xe,activeTexture:Je,bindTexture:pt,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:We,texImage3D:ae,updateUBOMapping:Oe,uniformBlockBinding:ve,texStorage2D:Ce,texStorage3D:He,texSubImage2D:re,texSubImage3D:de,compressedTexSubImage2D:ie,compressedTexSubImage3D:ze,scissor:Re,viewport:Ye,reset:Ne}}function bS(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,E){return h?new OffscreenCanvas(N,E):Uo("canvas")}function _(N,E,q){let re=1;const de=pt(N);if((de.width>q||de.height>q)&&(re=q/Math.max(de.width,de.height)),re<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ie=Math.floor(re*de.width),ze=Math.floor(re*de.height);d===void 0&&(d=g(ie,ze));const Ce=E?g(ie,ze):d;return Ce.width=ie,Ce.height=ze,Ce.getContext("2d").drawImage(N,0,0,ie,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ie+"x"+ze+")."),Ce}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),N;return N}function m(N){return N.generateMipmaps}function p(N){s.generateMipmap(N)}function S(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(N,E,q,re,de=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ie=E;if(E===s.RED&&(q===s.FLOAT&&(ie=s.R32F),q===s.HALF_FLOAT&&(ie=s.R16F),q===s.UNSIGNED_BYTE&&(ie=s.R8)),E===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(ie=s.R8UI),q===s.UNSIGNED_SHORT&&(ie=s.R16UI),q===s.UNSIGNED_INT&&(ie=s.R32UI),q===s.BYTE&&(ie=s.R8I),q===s.SHORT&&(ie=s.R16I),q===s.INT&&(ie=s.R32I)),E===s.RG&&(q===s.FLOAT&&(ie=s.RG32F),q===s.HALF_FLOAT&&(ie=s.RG16F),q===s.UNSIGNED_BYTE&&(ie=s.RG8)),E===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(ie=s.RG8UI),q===s.UNSIGNED_SHORT&&(ie=s.RG16UI),q===s.UNSIGNED_INT&&(ie=s.RG32UI),q===s.BYTE&&(ie=s.RG8I),q===s.SHORT&&(ie=s.RG16I),q===s.INT&&(ie=s.RG32I)),E===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(ie=s.RGB8UI),q===s.UNSIGNED_SHORT&&(ie=s.RGB16UI),q===s.UNSIGNED_INT&&(ie=s.RGB32UI),q===s.BYTE&&(ie=s.RGB8I),q===s.SHORT&&(ie=s.RGB16I),q===s.INT&&(ie=s.RGB32I)),E===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(ie=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(ie=s.RGBA16UI),q===s.UNSIGNED_INT&&(ie=s.RGBA32UI),q===s.BYTE&&(ie=s.RGBA8I),q===s.SHORT&&(ie=s.RGBA16I),q===s.INT&&(ie=s.RGBA32I)),E===s.RGB&&q===s.UNSIGNED_INT_5_9_9_9_REV&&(ie=s.RGB9_E5),E===s.RGBA){const ze=de?Wa:yt.getTransfer(re);q===s.FLOAT&&(ie=s.RGBA32F),q===s.HALF_FLOAT&&(ie=s.RGBA16F),q===s.UNSIGNED_BYTE&&(ie=ze===Ct?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(ie=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(ie=s.RGB5_A1)}return(ie===s.R16F||ie===s.R32F||ie===s.RG16F||ie===s.RG32F||ie===s.RGBA16F||ie===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function y(N,E){let q;return N?E===null||E===$r||E===Po?q=s.DEPTH24_STENCIL8:E===Mn?q=s.DEPTH32F_STENCIL8:E===Co&&(q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===$r||E===Po?q=s.DEPTH_COMPONENT24:E===Mn?q=s.DEPTH_COMPONENT32F:E===Co&&(q=s.DEPTH_COMPONENT16),q}function w(N,E){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==vn&&N.minFilter!==sn?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function I(N){const E=N.target;E.removeEventListener("dispose",I),L(E),E.isVideoTexture&&u.delete(E)}function R(N){const E=N.target;E.removeEventListener("dispose",R),b(E)}function L(N){const E=n.get(N);if(E.__webglInit===void 0)return;const q=N.source,re=f.get(q);if(re){const de=re[E.__cacheKey];de.usedTimes--,de.usedTimes===0&&M(N),Object.keys(re).length===0&&f.delete(q)}n.remove(N)}function M(N){const E=n.get(N);s.deleteTexture(E.__webglTexture);const q=N.source,re=f.get(q);delete re[E.__cacheKey],o.memory.textures--}function b(N){const E=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let de=0;de<E.__webglFramebuffer[re].length;de++)s.deleteFramebuffer(E.__webglFramebuffer[re][de]);else s.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)s.deleteFramebuffer(E.__webglFramebuffer[re]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=N.textures;for(let re=0,de=q.length;re<de;re++){const ie=n.get(q[re]);ie.__webglTexture&&(s.deleteTexture(ie.__webglTexture),o.memory.textures--),n.remove(q[re])}n.remove(N)}let D=0;function $(){D=0}function H(){const N=D;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),D+=1,N}function ee(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function ne(N,E){const q=n.get(N);if(N.isVideoTexture&&Xe(N),N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){const re=N.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(q,N,E);return}}t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+E)}function K(N,E){const q=n.get(N);if(N.version>0&&q.__version!==N.version){_e(q,N,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+E)}function Q(N,E){const q=n.get(N);if(N.version>0&&q.__version!==N.version){_e(q,N,E);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+E)}function Z(N,E){const q=n.get(N);if(N.version>0&&q.__version!==N.version){Ee(q,N,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+E)}const ye={[gr]:s.REPEAT,[mi]:s.CLAMP_TO_EDGE,[Va]:s.MIRRORED_REPEAT},be={[vn]:s.NEAREST,[Ef]:s.NEAREST_MIPMAP_NEAREST,[uo]:s.NEAREST_MIPMAP_LINEAR,[sn]:s.LINEAR,[Ra]:s.LINEAR_MIPMAP_NEAREST,[gi]:s.LINEAR_MIPMAP_LINEAR},Me={[sg]:s.NEVER,[hg]:s.ALWAYS,[og]:s.LESS,[Df]:s.LEQUAL,[ag]:s.EQUAL,[ug]:s.GEQUAL,[lg]:s.GREATER,[cg]:s.NOTEQUAL};function we(N,E){if(E.type===Mn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===sn||E.magFilter===Ra||E.magFilter===uo||E.magFilter===gi||E.minFilter===sn||E.minFilter===Ra||E.minFilter===uo||E.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,ye[E.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ye[E.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ye[E.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,be[E.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,be[E.minFilter]),E.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,Me[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===vn||E.minFilter!==uo&&E.minFilter!==gi||E.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ve(N,E){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",I));const re=E.source;let de=f.get(re);de===void 0&&(de={},f.set(re,de));const ie=ee(E);if(ie!==N.__cacheKey){de[ie]===void 0&&(de[ie]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),de[ie].usedTimes++;const ze=de[N.__cacheKey];ze!==void 0&&(de[N.__cacheKey].usedTimes--,ze.usedTimes===0&&M(E)),N.__cacheKey=ie,N.__webglTexture=de[ie].texture}return q}function j(N,E,q){return Math.floor(Math.floor(N/q)/E)}function ge(N,E,q,re){const ie=N.updateRanges;if(ie.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,q,re,E.data);else{ie.sort((ae,Re)=>ae.start-Re.start);let ze=0;for(let ae=1;ae<ie.length;ae++){const Re=ie[ze],Ye=ie[ae],Oe=Re.start+Re.count,ve=j(Ye.start,E.width,4),Ne=j(Re.start,E.width,4);Ye.start<=Oe+1&&ve===Ne&&j(Ye.start+Ye.count-1,E.width,4)===ve?Re.count=Math.max(Re.count,Ye.start+Ye.count-Re.start):(++ze,ie[ze]=Ye)}ie.length=ze+1;const Ce=s.getParameter(s.UNPACK_ROW_LENGTH),He=s.getParameter(s.UNPACK_SKIP_PIXELS),We=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let ae=0,Re=ie.length;ae<Re;ae++){const Ye=ie[ae],Oe=Math.floor(Ye.start/4),ve=Math.ceil(Ye.count/4),Ne=Oe%E.width,z=Math.floor(Oe/E.width),J=ve,le=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ne),s.pixelStorei(s.UNPACK_SKIP_ROWS,z),t.texSubImage2D(s.TEXTURE_2D,0,Ne,z,J,le,q,re,E.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ce),s.pixelStorei(s.UNPACK_SKIP_PIXELS,He),s.pixelStorei(s.UNPACK_SKIP_ROWS,We)}}function _e(N,E,q){let re=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=s.TEXTURE_3D);const de=Ve(N,E),ie=E.source;t.bindTexture(re,N.__webglTexture,s.TEXTURE0+q);const ze=n.get(ie);if(ie.version!==ze.__version||de===!0){t.activeTexture(s.TEXTURE0+q);const Ce=yt.getPrimaries(yt.workingColorSpace),He=E.colorSpace===ii?null:yt.getPrimaries(E.colorSpace),We=E.colorSpace===ii||Ce===He?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ae=_(E.image,!1,i.maxTextureSize);ae=Je(E,ae);const Re=r.convert(E.format,E.colorSpace),Ye=r.convert(E.type);let Oe=T(E.internalFormat,Re,Ye,E.colorSpace,E.isVideoTexture);we(re,E);let ve;const Ne=E.mipmaps,z=E.isVideoTexture!==!0,J=ze.__version===void 0||de===!0,le=ie.dataReady,De=w(E,ae);if(E.isDepthTexture)Oe=y(E.format===Lo,E.type),J&&(z?t.texStorage2D(s.TEXTURE_2D,1,Oe,ae.width,ae.height):t.texImage2D(s.TEXTURE_2D,0,Oe,ae.width,ae.height,0,Re,Ye,null));else if(E.isDataTexture)if(Ne.length>0){z&&J&&t.texStorage2D(s.TEXTURE_2D,De,Oe,Ne[0].width,Ne[0].height);for(let xe=0,ce=Ne.length;xe<ce;xe++)ve=Ne[xe],z?le&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,ve.width,ve.height,Re,Ye,ve.data):t.texImage2D(s.TEXTURE_2D,xe,Oe,ve.width,ve.height,0,Re,Ye,ve.data);E.generateMipmaps=!1}else z?(J&&t.texStorage2D(s.TEXTURE_2D,De,Oe,ae.width,ae.height),le&&ge(E,ae,Re,Ye)):t.texImage2D(s.TEXTURE_2D,0,Oe,ae.width,ae.height,0,Re,Ye,ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){z&&J&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,Oe,Ne[0].width,Ne[0].height,ae.depth);for(let xe=0,ce=Ne.length;xe<ce;xe++)if(ve=Ne[xe],E.format!==Nn)if(Re!==null)if(z){if(le)if(E.layerUpdates.size>0){const oe=hd(ve.width,ve.height,E.format,E.type);for(const B of E.layerUpdates){const se=ve.data.subarray(B*oe/ve.data.BYTES_PER_ELEMENT,(B+1)*oe/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,B,ve.width,ve.height,1,Re,se)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,ve.width,ve.height,ae.depth,Re,ve.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,Oe,ve.width,ve.height,ae.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?le&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,ve.width,ve.height,ae.depth,Re,Ye,ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,xe,Oe,ve.width,ve.height,ae.depth,0,Re,Ye,ve.data)}else{z&&J&&t.texStorage2D(s.TEXTURE_2D,De,Oe,Ne[0].width,Ne[0].height);for(let xe=0,ce=Ne.length;xe<ce;xe++)ve=Ne[xe],E.format!==Nn?Re!==null?z?le&&t.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,ve.width,ve.height,Re,ve.data):t.compressedTexImage2D(s.TEXTURE_2D,xe,Oe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?le&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,ve.width,ve.height,Re,Ye,ve.data):t.texImage2D(s.TEXTURE_2D,xe,Oe,ve.width,ve.height,0,Re,Ye,ve.data)}else if(E.isDataArrayTexture)if(z){if(J&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,Oe,ae.width,ae.height,ae.depth),le)if(E.layerUpdates.size>0){const xe=hd(ae.width,ae.height,E.format,E.type);for(const ce of E.layerUpdates){const oe=ae.data.subarray(ce*xe/ae.data.BYTES_PER_ELEMENT,(ce+1)*xe/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ce,ae.width,ae.height,1,Re,Ye,oe)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Re,Ye,ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Oe,ae.width,ae.height,ae.depth,0,Re,Ye,ae.data);else if(E.isData3DTexture)z?(J&&t.texStorage3D(s.TEXTURE_3D,De,Oe,ae.width,ae.height,ae.depth),le&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Re,Ye,ae.data)):t.texImage3D(s.TEXTURE_3D,0,Oe,ae.width,ae.height,ae.depth,0,Re,Ye,ae.data);else if(E.isFramebufferTexture){if(J)if(z)t.texStorage2D(s.TEXTURE_2D,De,Oe,ae.width,ae.height);else{let xe=ae.width,ce=ae.height;for(let oe=0;oe<De;oe++)t.texImage2D(s.TEXTURE_2D,oe,Oe,xe,ce,0,Re,Ye,null),xe>>=1,ce>>=1}}else if(Ne.length>0){if(z&&J){const xe=pt(Ne[0]);t.texStorage2D(s.TEXTURE_2D,De,Oe,xe.width,xe.height)}for(let xe=0,ce=Ne.length;xe<ce;xe++)ve=Ne[xe],z?le&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Re,Ye,ve):t.texImage2D(s.TEXTURE_2D,xe,Oe,Re,Ye,ve);E.generateMipmaps=!1}else if(z){if(J){const xe=pt(ae);t.texStorage2D(s.TEXTURE_2D,De,Oe,xe.width,xe.height)}le&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Ye,ae)}else t.texImage2D(s.TEXTURE_2D,0,Oe,Re,Ye,ae);m(E)&&p(re),ze.__version=ie.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Ee(N,E,q){if(E.image.length!==6)return;const re=Ve(N,E),de=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+q);const ie=n.get(de);if(de.version!==ie.__version||re===!0){t.activeTexture(s.TEXTURE0+q);const ze=yt.getPrimaries(yt.workingColorSpace),Ce=E.colorSpace===ii?null:yt.getPrimaries(E.colorSpace),He=E.colorSpace===ii||ze===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const We=E.isCompressedTexture||E.image[0].isCompressedTexture,ae=E.image[0]&&E.image[0].isDataTexture,Re=[];for(let ce=0;ce<6;ce++)!We&&!ae?Re[ce]=_(E.image[ce],!0,i.maxCubemapSize):Re[ce]=ae?E.image[ce].image:E.image[ce],Re[ce]=Je(E,Re[ce]);const Ye=Re[0],Oe=r.convert(E.format,E.colorSpace),ve=r.convert(E.type),Ne=T(E.internalFormat,Oe,ve,E.colorSpace),z=E.isVideoTexture!==!0,J=ie.__version===void 0||re===!0,le=de.dataReady;let De=w(E,Ye);we(s.TEXTURE_CUBE_MAP,E);let xe;if(We){z&&J&&t.texStorage2D(s.TEXTURE_CUBE_MAP,De,Ne,Ye.width,Ye.height);for(let ce=0;ce<6;ce++){xe=Re[ce].mipmaps;for(let oe=0;oe<xe.length;oe++){const B=xe[oe];E.format!==Nn?Oe!==null?z?le&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,oe,0,0,B.width,B.height,Oe,B.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,oe,Ne,B.width,B.height,0,B.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,oe,0,0,B.width,B.height,Oe,ve,B.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,oe,Ne,B.width,B.height,0,Oe,ve,B.data)}}}else{if(xe=E.mipmaps,z&&J){xe.length>0&&De++;const ce=pt(Re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,De,Ne,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ae){z?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Re[ce].width,Re[ce].height,Oe,ve,Re[ce].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ne,Re[ce].width,Re[ce].height,0,Oe,ve,Re[ce].data);for(let oe=0;oe<xe.length;oe++){const se=xe[oe].image[ce].image;z?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,oe+1,0,0,se.width,se.height,Oe,ve,se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,oe+1,Ne,se.width,se.height,0,Oe,ve,se.data)}}else{z?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Oe,ve,Re[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ne,Oe,ve,Re[ce]);for(let oe=0;oe<xe.length;oe++){const B=xe[oe];z?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,oe+1,0,0,Oe,ve,B.image[ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,oe+1,Ne,Oe,ve,B.image[ce])}}}m(E)&&p(s.TEXTURE_CUBE_MAP),ie.__version=de.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Ae(N,E,q,re,de,ie){const ze=r.convert(q.format,q.colorSpace),Ce=r.convert(q.type),He=T(q.internalFormat,ze,Ce,q.colorSpace),We=n.get(E),ae=n.get(q);if(ae.__renderTarget=E,!We.__hasExternalTextures){const Re=Math.max(1,E.width>>ie),Ye=Math.max(1,E.height>>ie);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?t.texImage3D(de,ie,He,Re,Ye,E.depth,0,ze,Ce,null):t.texImage2D(de,ie,He,Re,Ye,0,ze,Ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),ct(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,de,ae.__webglTexture,0,Ie(E)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,de,ae.__webglTexture,ie),t.bindFramebuffer(s.FRAMEBUFFER,null)}function st(N,E,q){if(s.bindRenderbuffer(s.RENDERBUFFER,N),E.depthBuffer){const re=E.depthTexture,de=re&&re.isDepthTexture?re.type:null,ie=y(E.stencilBuffer,de),ze=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=Ie(E);ct(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,ie,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,ie,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ie,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ze,s.RENDERBUFFER,N)}else{const re=E.textures;for(let de=0;de<re.length;de++){const ie=re[de],ze=r.convert(ie.format,ie.colorSpace),Ce=r.convert(ie.type),He=T(ie.internalFormat,ze,Ce,ie.colorSpace),We=Ie(E);q&&ct(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,We,He,E.width,E.height):ct(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,We,He,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,He,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ge(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=n.get(E.depthTexture);re.__renderTarget=E,(!re.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ne(E.depthTexture,0);const de=re.__webglTexture,ie=Ie(E);if(E.depthTexture.format===Io)ct(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,de,0);else if(E.depthTexture.format===Lo)ct(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function lt(N){const E=n.get(N),q=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const re=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),re){const de=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,re.removeEventListener("dispose",de)};re.addEventListener("dispose",de),E.__depthDisposeCallback=de}E.__boundDepthTexture=re}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const re=N.texture.mipmaps;re&&re.length>0?Ge(E.__webglFramebuffer[0],N):Ge(E.__webglFramebuffer,N)}else if(q){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]===void 0)E.__webglDepthbuffer[re]=s.createRenderbuffer(),st(E.__webglDepthbuffer[re],N,!1);else{const de=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,ie)}}else{const re=N.texture.mipmaps;if(re&&re.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),st(E.__webglDepthbuffer,N,!1);else{const de=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,ie)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(N,E,q){const re=n.get(N);E!==void 0&&Ae(re.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&lt(N)}function et(N){const E=N.texture,q=n.get(N),re=n.get(E);N.addEventListener("dispose",R);const de=N.textures,ie=N.isWebGLCubeRenderTarget===!0,ze=de.length>1;if(ze||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=E.version,o.memory.textures++),ie){q.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Ce]=[];for(let He=0;He<E.mipmaps.length;He++)q.__webglFramebuffer[Ce][He]=s.createFramebuffer()}else q.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ce=0;Ce<E.mipmaps.length;Ce++)q.__webglFramebuffer[Ce]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(ze)for(let Ce=0,He=de.length;Ce<He;Ce++){const We=n.get(de[Ce]);We.__webglTexture===void 0&&(We.__webglTexture=s.createTexture(),o.memory.textures++)}if(N.samples>0&&ct(N)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ce=0;Ce<de.length;Ce++){const He=de[Ce];q.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[Ce]);const We=r.convert(He.format,He.colorSpace),ae=r.convert(He.type),Re=T(He.internalFormat,We,ae,He.colorSpace,N.isXRRenderTarget===!0),Ye=Ie(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,Re,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,q.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),st(q.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ie){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),we(s.TEXTURE_CUBE_MAP,E);for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let He=0;He<E.mipmaps.length;He++)Ae(q.__webglFramebuffer[Ce][He],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,He);else Ae(q.__webglFramebuffer[Ce],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);m(E)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let Ce=0,He=de.length;Ce<He;Ce++){const We=de[Ce],ae=n.get(We);t.bindTexture(s.TEXTURE_2D,ae.__webglTexture),we(s.TEXTURE_2D,We),Ae(q.__webglFramebuffer,N,We,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),m(We)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ce=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,re.__webglTexture),we(Ce,E),E.mipmaps&&E.mipmaps.length>0)for(let He=0;He<E.mipmaps.length;He++)Ae(q.__webglFramebuffer[He],N,E,s.COLOR_ATTACHMENT0,Ce,He);else Ae(q.__webglFramebuffer,N,E,s.COLOR_ATTACHMENT0,Ce,0);m(E)&&p(Ce),t.unbindTexture()}N.depthBuffer&&lt(N)}function k(N){const E=N.textures;for(let q=0,re=E.length;q<re;q++){const de=E[q];if(m(de)){const ie=S(N),ze=n.get(de).__webglTexture;t.bindTexture(ie,ze),p(ie),t.unbindTexture()}}}const je=[],ft=[];function nt(N){if(N.samples>0){if(ct(N)===!1){const E=N.textures,q=N.width,re=N.height;let de=s.COLOR_BUFFER_BIT;const ie=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ze=n.get(N),Ce=E.length>1;if(Ce)for(let We=0;We<E.length;We++)t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);const He=N.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let We=0;We<E.length;We++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ze.__webglColorRenderbuffer[We]);const ae=n.get(E[We]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ae,0)}s.blitFramebuffer(0,0,q,re,0,0,q,re,de,s.NEAREST),l===!0&&(je.length=0,ft.length=0,je.push(s.COLOR_ATTACHMENT0+We),N.depthBuffer&&N.resolveDepthBuffer===!1&&(je.push(ie),ft.push(ie),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ft)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let We=0;We<E.length;We++){t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,ze.__webglColorRenderbuffer[We]);const ae=n.get(E[We]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,ae,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){const E=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Ie(N){return Math.min(i.maxSamples,N.samples)}function ct(N){const E=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Xe(N){const E=o.render.frame;u.get(N)!==E&&(u.set(N,E),N.update())}function Je(N,E){const q=N.colorSpace,re=N.format,de=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==an&&q!==ii&&(yt.getTransfer(q)===Ct?(re!==Nn||de!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}function pt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=$,this.setTexture2D=ne,this.setTexture2DArray=K,this.setTexture3D=Q,this.setTextureCube=Z,this.rebindTextures=dt,this.setupRenderTarget=et,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=ct}function AS(s,e){function t(n,i=ii){let r;const o=yt.getTransfer(i);if(n===yi)return s.UNSIGNED_BYTE;if(n===Iu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Lu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Af)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Tf)return s.BYTE;if(n===bf)return s.SHORT;if(n===Co)return s.UNSIGNED_SHORT;if(n===Pu)return s.INT;if(n===$r)return s.UNSIGNED_INT;if(n===Mn)return s.FLOAT;if(n===ki)return s.HALF_FLOAT;if(n===wf)return s.ALPHA;if(n===Rf)return s.RGB;if(n===Nn)return s.RGBA;if(n===Io)return s.DEPTH_COMPONENT;if(n===Lo)return s.DEPTH_STENCIL;if(n===rl)return s.RED;if(n===Du)return s.RED_INTEGER;if(n===Cf)return s.RG;if(n===Nu)return s.RG_INTEGER;if(n===Uu)return s.RGBA_INTEGER;if(n===Ca||n===Pa||n===Ia||n===La)if(o===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bc||n===Ac||n===wc||n===Rc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cc||n===Pc||n===Ic)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Cc||n===Pc)return o===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ic)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lc||n===Dc||n===Nc||n===Uc||n===Fc||n===Oc||n===Bc||n===kc||n===zc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Da||n===Yc||n===$c)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Da)return o===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pf||n===qc||n===Kc||n===Zc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Da)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Po?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const wS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RS=`
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

}`;class CS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new on,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _r({vertexShader:wS,fragmentShader:RS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Un(new ol(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PS extends jr{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const _=new CS,m=t.getContextAttributes();let p=null,S=null;const T=[],y=[],w=new xt;let I=null;const R=new _n;R.viewport=new Tt;const L=new _n;L.viewport=new Tt;const M=[R,L],b=new O_;let D=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ge=T[j];return ge===void 0&&(ge=new Nl,T[j]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(j){let ge=T[j];return ge===void 0&&(ge=new Nl,T[j]=ge),ge.getGripSpace()},this.getHand=function(j){let ge=T[j];return ge===void 0&&(ge=new Nl,T[j]=ge),ge.getHandSpace()};function H(j){const ge=y.indexOf(j.inputSource);if(ge===-1)return;const _e=T[ge];_e!==void 0&&(_e.update(j.inputSource,j.frame,c||o),_e.dispatchEvent({type:j.type,data:j.inputSource}))}function ee(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",ee),i.removeEventListener("inputsourceschange",ne);for(let j=0;j<T.length;j++){const ge=y[j];ge!==null&&(y[j]=null,T[j].disconnect(ge))}D=null,$=null,_.reset(),e.setRenderTarget(p),h=null,f=null,d=null,i=null,S=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",ee),i.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(w),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ee=null,Ae=null;m.depth&&(Ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=m.stencil?Lo:Io,Ee=m.stencil?Po:$r);const st={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(st),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new qr(f.textureWidth,f.textureHeight,{format:Nn,type:yi,depthTexture:new Yf(f.textureWidth,f.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new qr(h.framebufferWidth,h.framebufferHeight,{format:Nn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ve.setContext(i),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ne(j){for(let ge=0;ge<j.removed.length;ge++){const _e=j.removed[ge],Ee=y.indexOf(_e);Ee>=0&&(y[Ee]=null,T[Ee].disconnect(_e))}for(let ge=0;ge<j.added.length;ge++){const _e=j.added[ge];let Ee=y.indexOf(_e);if(Ee===-1){for(let st=0;st<T.length;st++)if(st>=y.length){y.push(_e),Ee=st;break}else if(y[st]===null){y[st]=_e,Ee=st;break}if(Ee===-1)break}const Ae=T[Ee];Ae&&Ae.connect(_e)}}const K=new W,Q=new W;function Z(j,ge,_e){K.setFromMatrixPosition(ge.matrixWorld),Q.setFromMatrixPosition(_e.matrixWorld);const Ee=K.distanceTo(Q),Ae=ge.projectionMatrix.elements,st=_e.projectionMatrix.elements,Ge=Ae[14]/(Ae[10]-1),lt=Ae[14]/(Ae[10]+1),dt=(Ae[9]+1)/Ae[5],et=(Ae[9]-1)/Ae[5],k=(Ae[8]-1)/Ae[0],je=(st[8]+1)/st[0],ft=Ge*k,nt=Ge*je,Ie=Ee/(-k+je),ct=Ie*-k;if(ge.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ct),j.translateZ(Ie),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ae[10]===-1)j.projectionMatrix.copy(ge.projectionMatrix),j.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Xe=Ge+Ie,Je=lt+Ie,pt=ft-ct,N=nt+(Ee-ct),E=dt*lt/Je*Xe,q=et*lt/Je*Xe;j.projectionMatrix.makePerspective(pt,N,E,q,Xe,Je),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ye(j,ge){ge===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ge.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ge=j.near,_e=j.far;_.texture!==null&&(_.depthNear>0&&(ge=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),b.near=L.near=R.near=ge,b.far=L.far=R.far=_e,(D!==b.near||$!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,$=b.far),R.layers.mask=j.layers.mask|2,L.layers.mask=j.layers.mask|4,b.layers.mask=R.layers.mask|L.layers.mask;const Ee=j.parent,Ae=b.cameras;ye(b,Ee);for(let st=0;st<Ae.length;st++)ye(Ae[st],Ee);Ae.length===2?Z(b,R,L):b.projectionMatrix.copy(R.projectionMatrix),be(j,b,Ee)};function be(j,ge,_e){_e===null?j.matrix.copy(ge.matrixWorld):(j.matrix.copy(_e.matrixWorld),j.matrix.invert(),j.matrix.multiply(ge.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ge.projectionMatrix),j.projectionMatrixInverse.copy(ge.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Bs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let Me=null;function we(j,ge){if(u=ge.getViewerPose(c||o),g=ge,u!==null){const _e=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Ee=!1;_e.length!==b.cameras.length&&(b.cameras.length=0,Ee=!0);for(let Ge=0;Ge<_e.length;Ge++){const lt=_e[Ge];let dt=null;if(h!==null)dt=h.getViewport(lt);else{const k=d.getViewSubImage(f,lt);dt=k.viewport,Ge===0&&(e.setRenderTargetTextures(S,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(S))}let et=M[Ge];et===void 0&&(et=new _n,et.layers.enable(Ge),et.viewport=new Tt,M[Ge]=et),et.matrix.fromArray(lt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(lt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(dt.x,dt.y,dt.width,dt.height),Ge===0&&(b.matrix.copy(et.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Ee===!0&&b.cameras.push(et)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&d){const Ge=d.getDepthInformation(_e[0]);Ge&&Ge.isValid&&Ge.texture&&_.init(e,Ge,i.renderState)}}for(let _e=0;_e<T.length;_e++){const Ee=y[_e],Ae=T[_e];Ee!==null&&Ae!==void 0&&Ae.update(Ee,ge,c||o)}Me&&Me(j,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),g=null}const Ve=new ep;Ve.setAnimationLoop(we),this.setAnimationLoop=function(j){Me=j},this.dispose=function(){}}}const wr=new Si,IS=new rt;function LS(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,zf(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,T,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),T=S.envMap,y=S.envMapRotation;T&&(m.envMap.value=T,wr.copy(y),wr.x*=-1,wr.y*=-1,wr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),m.envMapRotation.value.setFromMatrix4(IS.makeRotationFromEuler(wr)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function DS(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){const y=T.program;n.uniformBlockBinding(S,y)}function c(S,T){let y=i[S.id];y===void 0&&(g(S),y=u(S),i[S.id]=y,S.addEventListener("dispose",m));const w=T.program;n.updateUBOMapping(S,w);const I=e.render.frame;r[S.id]!==I&&(f(S),r[S.id]=I)}function u(S){const T=d();S.__bindingPointIndex=T;const y=s.createBuffer(),w=S.__size,I=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,w,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,y),y}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const T=i[S.id],y=S.uniforms,w=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let I=0,R=y.length;I<R;I++){const L=Array.isArray(y[I])?y[I]:[y[I]];for(let M=0,b=L.length;M<b;M++){const D=L[M];if(h(D,I,M,w)===!0){const $=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let ee=0;for(let ne=0;ne<H.length;ne++){const K=H[ne],Q=_(K);typeof K=="number"||typeof K=="boolean"?(D.__data[0]=K,s.bufferSubData(s.UNIFORM_BUFFER,$+ee,D.__data)):K.isMatrix3?(D.__data[0]=K.elements[0],D.__data[1]=K.elements[1],D.__data[2]=K.elements[2],D.__data[3]=0,D.__data[4]=K.elements[3],D.__data[5]=K.elements[4],D.__data[6]=K.elements[5],D.__data[7]=0,D.__data[8]=K.elements[6],D.__data[9]=K.elements[7],D.__data[10]=K.elements[8],D.__data[11]=0):(K.toArray(D.__data,ee),ee+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(S,T,y,w){const I=S.value,R=T+"_"+y;if(w[R]===void 0)return typeof I=="number"||typeof I=="boolean"?w[R]=I:w[R]=I.clone(),!0;{const L=w[R];if(typeof I=="number"||typeof I=="boolean"){if(L!==I)return w[R]=I,!0}else if(L.equals(I)===!1)return L.copy(I),!0}return!1}function g(S){const T=S.uniforms;let y=0;const w=16;for(let R=0,L=T.length;R<L;R++){const M=Array.isArray(T[R])?T[R]:[T[R]];for(let b=0,D=M.length;b<D;b++){const $=M[b],H=Array.isArray($.value)?$.value:[$.value];for(let ee=0,ne=H.length;ee<ne;ee++){const K=H[ee],Q=_(K),Z=y%w,ye=Z%Q.boundary,be=Z+ye;y+=ye,be!==0&&w-be<Q.storage&&(y+=w-be),$.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=y,y+=Q.storage}}}const I=y%w;return I>0&&(y+=w-I),S.__size=y,S.__cache={},this}function _(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),T}function m(S){const T=S.target;T.removeEventListener("dispose",m);const y=o.indexOf(T.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class NS{constructor(e={}){const{canvas:t=Cg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let w=!1;this._outputColorSpace=qt;let I=0,R=0,L=null,M=-1,b=null;const D=new Tt,$=new Tt;let H=null;const ee=new tt(0);let ne=0,K=t.width,Q=t.height,Z=1,ye=null,be=null;const Me=new Tt(0,0,K,Q),we=new Tt(0,0,K,Q);let Ve=!1;const j=new Vu;let ge=!1,_e=!1;const Ee=new rt,Ae=new rt,st=new W,Ge=new Tt,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function et(){return L===null?Z:1}let k=n;function je(v,C){return t.getContext(v,C)}try{const v={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cu}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ce,!1),k===null){const C="webgl2";if(k=je(C,v),k===null)throw je(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let ft,nt,Ie,ct,Xe,Je,pt,N,E,q,re,de,ie,ze,Ce,He,We,ae,Re,Ye,Oe,ve,Ne,z;function J(){ft=new Wv(k),ft.init(),ve=new AS(k,ft),nt=new Ov(k,ft,e,ve),Ie=new TS(k,ft),nt.reverseDepthBuffer&&f&&Ie.buffers.depth.setReversed(!0),ct=new $v(k),Xe=new hS,Je=new bS(k,ft,Ie,Xe,nt,ve,ct),pt=new kv(y),N=new Gv(y),E=new Q_(k),Ne=new Uv(k,E),q=new Xv(k,E,ct,Ne),re=new Kv(k,q,E,ct),Re=new qv(k,nt,Je),He=new Bv(Xe),de=new uS(y,pt,N,ft,nt,Ne,He),ie=new LS(y,Xe),ze=new fS,Ce=new vS(ft),ae=new Nv(y,pt,N,Ie,re,h,l),We=new MS(y,re,nt),z=new DS(k,ct,nt,Ie),Ye=new Fv(k,ft,ct),Oe=new Yv(k,ft,ct),ct.programs=de.programs,y.capabilities=nt,y.extensions=ft,y.properties=Xe,y.renderLists=ze,y.shadowMap=We,y.state=Ie,y.info=ct}J();const le=new PS(y,k);this.xr=le,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const v=ft.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=ft.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(v){v!==void 0&&(Z=v,this.setSize(K,Q,!1))},this.getSize=function(v){return v.set(K,Q)},this.setSize=function(v,C,P=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=v,Q=C,t.width=Math.floor(v*Z),t.height=Math.floor(C*Z),P===!0&&(t.style.width=v+"px",t.style.height=C+"px"),this.setViewport(0,0,v,C)},this.getDrawingBufferSize=function(v){return v.set(K*Z,Q*Z).floor()},this.setDrawingBufferSize=function(v,C,P){K=v,Q=C,Z=P,t.width=Math.floor(v*P),t.height=Math.floor(C*P),this.setViewport(0,0,v,C)},this.getCurrentViewport=function(v){return v.copy(D)},this.getViewport=function(v){return v.copy(Me)},this.setViewport=function(v,C,P,O){v.isVector4?Me.set(v.x,v.y,v.z,v.w):Me.set(v,C,P,O),Ie.viewport(D.copy(Me).multiplyScalar(Z).round())},this.getScissor=function(v){return v.copy(we)},this.setScissor=function(v,C,P,O){v.isVector4?we.set(v.x,v.y,v.z,v.w):we.set(v,C,P,O),Ie.scissor($.copy(we).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(v){Ie.setScissorTest(Ve=v)},this.setOpaqueSort=function(v){ye=v},this.setTransparentSort=function(v){be=v},this.getClearColor=function(v){return v.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(v=!0,C=!0,P=!0){let O=0;if(v){let U=!1;if(L!==null){const V=L.texture.format;U=V===Uu||V===Nu||V===Du}if(U){const V=L.texture.type,G=V===yi||V===$r||V===Co||V===Po||V===Iu||V===Lu,Y=ae.getClearColor(),te=ae.getClearAlpha(),ue=Y.r,he=Y.g,fe=Y.b;G?(g[0]=ue,g[1]=he,g[2]=fe,g[3]=te,k.clearBufferuiv(k.COLOR,0,g)):(_[0]=ue,_[1]=he,_[2]=fe,_[3]=te,k.clearBufferiv(k.COLOR,0,_))}else O|=k.COLOR_BUFFER_BIT}C&&(O|=k.DEPTH_BUFFER_BIT),P&&(O|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),ae.dispose(),ze.dispose(),Ce.dispose(),Xe.dispose(),pt.dispose(),N.dispose(),re.dispose(),Ne.dispose(),z.dispose(),de.dispose(),le.dispose(),le.removeEventListener("sessionstart",Le),le.removeEventListener("sessionend",Qe),Be.stop()};function De(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const v=ct.autoReset,C=We.enabled,P=We.autoUpdate,O=We.needsUpdate,U=We.type;J(),ct.autoReset=v,We.enabled=C,We.autoUpdate=P,We.needsUpdate=O,We.type=U}function ce(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function oe(v){const C=v.target;C.removeEventListener("dispose",oe),B(C)}function B(v){se(v),Xe.remove(v)}function se(v){const C=Xe.get(v).programs;C!==void 0&&(C.forEach(function(P){de.releaseProgram(P)}),v.isShaderMaterial&&de.releaseShaderCache(v))}this.renderBufferDirect=function(v,C,P,O,U,V){C===null&&(C=lt);const G=U.isMesh&&U.matrixWorld.determinant()<0,Y=Vt(v,C,P,O,U);Ie.setMaterial(O,G);let te=P.index,ue=1;if(O.wireframe===!0){if(te=q.getWireframeAttribute(P),te===void 0)return;ue=2}const he=P.drawRange,fe=P.attributes.position;let me=he.start*ue,Se=(he.start+he.count)*ue;V!==null&&(me=Math.max(me,V.start*ue),Se=Math.min(Se,(V.start+V.count)*ue)),te!==null?(me=Math.max(me,0),Se=Math.min(Se,te.count)):fe!=null&&(me=Math.max(me,0),Se=Math.min(Se,fe.count));const Ue=Se-me;if(Ue<0||Ue===1/0)return;Ne.setup(U,O,Y,P,te);let $e,qe=Ye;if(te!==null&&($e=E.get(te),qe=Oe,qe.setIndex($e)),U.isMesh)O.wireframe===!0?(Ie.setLineWidth(O.wireframeLinewidth*et()),qe.setMode(k.LINES)):qe.setMode(k.TRIANGLES);else if(U.isLine){let ke=O.linewidth;ke===void 0&&(ke=1),Ie.setLineWidth(ke*et()),U.isLineSegments?qe.setMode(k.LINES):U.isLineLoop?qe.setMode(k.LINE_LOOP):qe.setMode(k.LINE_STRIP)}else U.isPoints?qe.setMode(k.POINTS):U.isSprite&&qe.setMode(k.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)As("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),qe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))qe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const ke=U._multiDrawStarts,Ze=U._multiDrawCounts,Fe=U._multiDrawCount,Mt=te?E.get(te).bytesPerElement:1,Zt=Xe.get(O).currentProgram.getUniforms();for(let Et=0;Et<Fe;Et++)Zt.setValue(k,"_gl_DrawID",Et),qe.render(ke[Et]/Mt,Ze[Et])}else if(U.isInstancedMesh)qe.renderInstances(me,Ue,U.count);else if(P.isInstancedBufferGeometry){const ke=P._maxInstanceCount!==void 0?P._maxInstanceCount:1/0,Ze=Math.min(P.instanceCount,ke);qe.renderInstances(me,Ue,Ze)}else qe.render(me,Ue)};function X(v,C,P){v.transparent===!0&&v.side===fi&&v.forceSinglePass===!1?(v.side=En,v.needsUpdate=!0,un(v,C,P),v.side=Yi,v.needsUpdate=!0,un(v,C,P),v.side=fi):un(v,C,P)}this.compile=function(v,C,P=null){P===null&&(P=v),p=Ce.get(P),p.init(C),T.push(p),P.traverseVisible(function(U){U.isLight&&U.layers.test(C.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),v!==P&&v.traverseVisible(function(U){U.isLight&&U.layers.test(C.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const O=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const V=U.material;if(V)if(Array.isArray(V))for(let G=0;G<V.length;G++){const Y=V[G];X(Y,P,U),O.add(Y)}else X(V,P,U),O.add(V)}),p=T.pop(),O},this.compileAsync=function(v,C,P=null){const O=this.compile(v,C,P);return new Promise(U=>{function V(){if(O.forEach(function(G){Xe.get(G).currentProgram.isReady()&&O.delete(G)}),O.size===0){U(v);return}setTimeout(V,10)}ft.get("KHR_parallel_shader_compile")!==null?V():setTimeout(V,10)})};let pe=null;function Te(v){pe&&pe(v)}function Le(){Be.stop()}function Qe(){Be.start()}const Be=new ep;Be.setAnimationLoop(Te),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(v){pe=v,le.setAnimationLoop(v),v===null?Be.stop():Be.start()},le.addEventListener("sessionstart",Le),le.addEventListener("sessionend",Qe),this.render=function(v,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(C),C=le.getCamera()),v.isScene===!0&&v.onBeforeRender(y,v,C,L),p=Ce.get(v,T.length),p.init(C),T.push(p),Ae.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),j.setFromProjectionMatrix(Ae),_e=this.localClippingEnabled,ge=He.init(this.clippingPlanes,_e),m=ze.get(v,S.length),m.init(),S.push(m),le.enabled===!0&&le.isPresenting===!0){const V=y.xr.getDepthSensingMesh();V!==null&&vt(V,C,-1/0,y.sortObjects)}vt(v,C,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ye,be),dt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,dt&&ae.addToRenderList(m,v),this.info.render.frame++,ge===!0&&He.beginShadows();const P=p.state.shadowsArray;We.render(P,v,C),ge===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=m.opaque,U=m.transmissive;if(p.setupLights(),C.isArrayCamera){const V=C.cameras;if(U.length>0)for(let G=0,Y=V.length;G<Y;G++){const te=V[G];St(O,U,v,te)}dt&&ae.render(v);for(let G=0,Y=V.length;G<Y;G++){const te=V[G];ot(m,v,te,te.viewport)}}else U.length>0&&St(O,U,v,C),dt&&ae.render(v),ot(m,v,C);L!==null&&R===0&&(Je.updateMultisampleRenderTarget(L),Je.updateRenderTargetMipmap(L)),v.isScene===!0&&v.onAfterRender(y,v,C),Ne.resetDefaultState(),M=-1,b=null,T.pop(),T.length>0?(p=T[T.length-1],ge===!0&&He.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function vt(v,C,P,O){if(v.visible===!1)return;if(v.layers.test(C.layers)){if(v.isGroup)P=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(C);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||j.intersectsSprite(v)){O&&Ge.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ae);const G=re.update(v),Y=v.material;Y.visible&&m.push(v,G,Y,P,Ge.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||j.intersectsObject(v))){const G=re.update(v),Y=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ge.copy(v.boundingSphere.center)):(G.boundingSphere===null&&G.computeBoundingSphere(),Ge.copy(G.boundingSphere.center)),Ge.applyMatrix4(v.matrixWorld).applyMatrix4(Ae)),Array.isArray(Y)){const te=G.groups;for(let ue=0,he=te.length;ue<he;ue++){const fe=te[ue],me=Y[fe.materialIndex];me&&me.visible&&m.push(v,G,me,P,Ge.z,fe)}}else Y.visible&&m.push(v,G,Y,P,Ge.z,null)}}const V=v.children;for(let G=0,Y=V.length;G<Y;G++)vt(V[G],C,P,O)}function ot(v,C,P,O){const U=v.opaque,V=v.transmissive,G=v.transparent;p.setupLightsView(P),ge===!0&&He.setGlobalState(y.clippingPlanes,P),O&&Ie.viewport(D.copy(O)),U.length>0&&Rt(U,C,P),V.length>0&&Rt(V,C,P),G.length>0&&Rt(G,C,P),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function St(v,C,P,O){if((P.isScene===!0?P.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[O.id]===void 0&&(p.state.transmissionRenderTarget[O.id]=new qr(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?ki:yi,minFilter:gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace}));const V=p.state.transmissionRenderTarget[O.id],G=O.viewport||D;V.setSize(G.z*y.transmissionResolutionScale,G.w*y.transmissionResolutionScale);const Y=y.getRenderTarget(),te=y.getActiveCubeFace(),ue=y.getActiveMipmapLevel();y.setRenderTarget(V),y.getClearColor(ee),ne=y.getClearAlpha(),ne<1&&y.setClearColor(16777215,.5),y.clear(),dt&&ae.render(P);const he=y.toneMapping;y.toneMapping=fr;const fe=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),p.setupLightsView(O),ge===!0&&He.setGlobalState(y.clippingPlanes,O),Rt(v,P,O),Je.updateMultisampleRenderTarget(V),Je.updateRenderTargetMipmap(V),ft.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let Se=0,Ue=C.length;Se<Ue;Se++){const $e=C[Se],qe=$e.object,ke=$e.geometry,Ze=$e.material,Fe=$e.group;if(Ze.side===fi&&qe.layers.test(O.layers)){const Mt=Ze.side;Ze.side=En,Ze.needsUpdate=!0,Ht(qe,P,O,ke,Ze,Fe),Ze.side=Mt,Ze.needsUpdate=!0,me=!0}}me===!0&&(Je.updateMultisampleRenderTarget(V),Je.updateRenderTargetMipmap(V))}y.setRenderTarget(Y,te,ue),y.setClearColor(ee,ne),fe!==void 0&&(O.viewport=fe),y.toneMapping=he}function Rt(v,C,P){const O=C.isScene===!0?C.overrideMaterial:null;for(let U=0,V=v.length;U<V;U++){const G=v[U],Y=G.object,te=G.geometry,ue=G.group;let he=G.material;he.allowOverride===!0&&O!==null&&(he=O),Y.layers.test(P.layers)&&Ht(Y,C,P,te,he,ue)}}function Ht(v,C,P,O,U,V){v.onBeforeRender(y,C,P,O,U,V),v.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(y,C,P,O,v,V),U.transparent===!0&&U.side===fi&&U.forceSinglePass===!1?(U.side=En,U.needsUpdate=!0,y.renderBufferDirect(P,C,O,U,v,V),U.side=Yi,U.needsUpdate=!0,y.renderBufferDirect(P,C,O,U,v,V),U.side=fi):y.renderBufferDirect(P,C,O,U,v,V),v.onAfterRender(y,C,P,O,U,V)}function un(v,C,P){C.isScene!==!0&&(C=lt);const O=Xe.get(v),U=p.state.lights,V=p.state.shadowsArray,G=U.state.version,Y=de.getParameters(v,U.state,V,C,P),te=de.getProgramCacheKey(Y);let ue=O.programs;O.environment=v.isMeshStandardMaterial?C.environment:null,O.fog=C.fog,O.envMap=(v.isMeshStandardMaterial?N:pt).get(v.envMap||O.environment),O.envMapRotation=O.environment!==null&&v.envMap===null?C.environmentRotation:v.envMapRotation,ue===void 0&&(v.addEventListener("dispose",oe),ue=new Map,O.programs=ue);let he=ue.get(te);if(he!==void 0){if(O.currentProgram===he&&O.lightsStateVersion===G)return Sn(v,Y),he}else Y.uniforms=de.getUniforms(v),v.onBeforeCompile(Y,y),he=de.acquireProgram(Y,te),ue.set(te,he),O.uniforms=Y.uniforms;const fe=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(fe.clippingPlanes=He.uniform),Sn(v,Y),O.needsLights=zn(v),O.lightsStateVersion=G,O.needsLights&&(fe.ambientLightColor.value=U.state.ambient,fe.lightProbe.value=U.state.probe,fe.directionalLights.value=U.state.directional,fe.directionalLightShadows.value=U.state.directionalShadow,fe.spotLights.value=U.state.spot,fe.spotLightShadows.value=U.state.spotShadow,fe.rectAreaLights.value=U.state.rectArea,fe.ltc_1.value=U.state.rectAreaLTC1,fe.ltc_2.value=U.state.rectAreaLTC2,fe.pointLights.value=U.state.point,fe.pointLightShadows.value=U.state.pointShadow,fe.hemisphereLights.value=U.state.hemi,fe.directionalShadowMap.value=U.state.directionalShadowMap,fe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,fe.spotShadowMap.value=U.state.spotShadowMap,fe.spotLightMatrix.value=U.state.spotLightMatrix,fe.spotLightMap.value=U.state.spotLightMap,fe.pointShadowMap.value=U.state.pointShadowMap,fe.pointShadowMatrix.value=U.state.pointShadowMatrix),O.currentProgram=he,O.uniformsList=null,he}function tn(v){if(v.uniformsList===null){const C=v.currentProgram.getUniforms();v.uniformsList=Na.seqWithValue(C.seq,v.uniforms)}return v.uniformsList}function Sn(v,C){const P=Xe.get(v);P.outputColorSpace=C.outputColorSpace,P.batching=C.batching,P.batchingColor=C.batchingColor,P.instancing=C.instancing,P.instancingColor=C.instancingColor,P.instancingMorph=C.instancingMorph,P.skinning=C.skinning,P.morphTargets=C.morphTargets,P.morphNormals=C.morphNormals,P.morphColors=C.morphColors,P.morphTargetsCount=C.morphTargetsCount,P.numClippingPlanes=C.numClippingPlanes,P.numIntersection=C.numClipIntersection,P.vertexAlphas=C.vertexAlphas,P.vertexTangents=C.vertexTangents,P.toneMapping=C.toneMapping}function Vt(v,C,P,O,U){C.isScene!==!0&&(C=lt),Je.resetTextureUnits();const V=C.fog,G=O.isMeshStandardMaterial?C.environment:null,Y=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:an,te=(O.isMeshStandardMaterial?N:pt).get(O.envMap||G),ue=O.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,he=!!P.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),fe=!!P.morphAttributes.position,me=!!P.morphAttributes.normal,Se=!!P.morphAttributes.color;let Ue=fr;O.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ue=y.toneMapping);const $e=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,qe=$e!==void 0?$e.length:0,ke=Xe.get(O),Ze=p.state.lights;if(ge===!0&&(_e===!0||v!==b)){const Dt=v===b&&O.id===M;He.setState(O,v,Dt)}let Fe=!1;O.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Ze.state.version||ke.outputColorSpace!==Y||U.isBatchedMesh&&ke.batching===!1||!U.isBatchedMesh&&ke.batching===!0||U.isBatchedMesh&&ke.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ke.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ke.instancing===!1||!U.isInstancedMesh&&ke.instancing===!0||U.isSkinnedMesh&&ke.skinning===!1||!U.isSkinnedMesh&&ke.skinning===!0||U.isInstancedMesh&&ke.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ke.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ke.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ke.instancingMorph===!1&&U.morphTexture!==null||ke.envMap!==te||O.fog===!0&&ke.fog!==V||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==He.numPlanes||ke.numIntersection!==He.numIntersection)||ke.vertexAlphas!==ue||ke.vertexTangents!==he||ke.morphTargets!==fe||ke.morphNormals!==me||ke.morphColors!==Se||ke.toneMapping!==Ue||ke.morphTargetsCount!==qe)&&(Fe=!0):(Fe=!0,ke.__version=O.version);let Mt=ke.currentProgram;Fe===!0&&(Mt=un(O,C,U));let Zt=!1,Et=!1,mt=!1;const Ke=Mt.getUniforms(),kt=ke.uniforms;if(Ie.useProgram(Mt.program)&&(Zt=!0,Et=!0,mt=!0),O.id!==M&&(M=O.id,Et=!0),Zt||b!==v){Ie.buffers.depth.getReversed()?(Ee.copy(v.projectionMatrix),Ig(Ee),Lg(Ee),Ke.setValue(k,"projectionMatrix",Ee)):Ke.setValue(k,"projectionMatrix",v.projectionMatrix),Ke.setValue(k,"viewMatrix",v.matrixWorldInverse);const jt=Ke.map.cameraPosition;jt!==void 0&&jt.setValue(k,st.setFromMatrixPosition(v.matrixWorld)),nt.logarithmicDepthBuffer&&Ke.setValue(k,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Ke.setValue(k,"isOrthographic",v.isOrthographicCamera===!0),b!==v&&(b=v,Et=!0,mt=!0)}if(U.isSkinnedMesh){Ke.setOptional(k,U,"bindMatrix"),Ke.setOptional(k,U,"bindMatrixInverse");const Dt=U.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),Ke.setValue(k,"boneTexture",Dt.boneTexture,Je))}U.isBatchedMesh&&(Ke.setOptional(k,U,"batchingTexture"),Ke.setValue(k,"batchingTexture",U._matricesTexture,Je),Ke.setOptional(k,U,"batchingIdTexture"),Ke.setValue(k,"batchingIdTexture",U._indirectTexture,Je),Ke.setOptional(k,U,"batchingColorTexture"),U._colorsTexture!==null&&Ke.setValue(k,"batchingColorTexture",U._colorsTexture,Je));const nn=P.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&Re.update(U,P,Mt),(Et||ke.receiveShadow!==U.receiveShadow)&&(ke.receiveShadow=U.receiveShadow,Ke.setValue(k,"receiveShadow",U.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(kt.envMap.value=te,kt.flipEnvMap.value=te.isCubeTexture&&te.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&C.environment!==null&&(kt.envMapIntensity.value=C.environmentIntensity),Et&&(Ke.setValue(k,"toneMappingExposure",y.toneMappingExposure),ke.needsLights&&bt(kt,mt),V&&O.fog===!0&&ie.refreshFogUniforms(kt,V),ie.refreshMaterialUniforms(kt,O,Z,Q,p.state.transmissionRenderTarget[v.id]),Na.upload(k,tn(ke),kt,Je)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Na.upload(k,tn(ke),kt,Je),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Ke.setValue(k,"center",U.center),Ke.setValue(k,"modelViewMatrix",U.modelViewMatrix),Ke.setValue(k,"normalMatrix",U.normalMatrix),Ke.setValue(k,"modelMatrix",U.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Dt=O.uniformsGroups;for(let jt=0,dl=Dt.length;jt<dl;jt++){const Sr=Dt[jt];z.update(Sr,Mt),z.bind(Sr,Mt)}}return Mt}function bt(v,C){v.ambientLightColor.needsUpdate=C,v.lightProbe.needsUpdate=C,v.directionalLights.needsUpdate=C,v.directionalLightShadows.needsUpdate=C,v.pointLights.needsUpdate=C,v.pointLightShadows.needsUpdate=C,v.spotLights.needsUpdate=C,v.spotLightShadows.needsUpdate=C,v.rectAreaLights.needsUpdate=C,v.hemisphereLights.needsUpdate=C}function zn(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(v,C,P){const O=Xe.get(v);O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Xe.get(v.texture).__webglTexture=C,Xe.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:P,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,C){const P=Xe.get(v);P.__webglFramebuffer=C,P.__useDefaultFramebuffer=C===void 0};const x=k.createFramebuffer();this.setRenderTarget=function(v,C=0,P=0){L=v,I=C,R=P;let O=!0,U=null,V=!1,G=!1;if(v){const te=Xe.get(v);if(te.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(k.FRAMEBUFFER,null),O=!1;else if(te.__webglFramebuffer===void 0)Je.setupRenderTarget(v);else if(te.__hasExternalTextures)Je.rebindTextures(v,Xe.get(v.texture).__webglTexture,Xe.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const fe=v.depthTexture;if(te.__boundDepthTexture!==fe){if(fe!==null&&Xe.has(fe)&&(v.width!==fe.image.width||v.height!==fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(v)}}const ue=v.texture;(ue.isData3DTexture||ue.isDataArrayTexture||ue.isCompressedArrayTexture)&&(G=!0);const he=Xe.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(he[C])?U=he[C][P]:U=he[C],V=!0):v.samples>0&&Je.useMultisampledRTT(v)===!1?U=Xe.get(v).__webglMultisampledFramebuffer:Array.isArray(he)?U=he[P]:U=he,D.copy(v.viewport),$.copy(v.scissor),H=v.scissorTest}else D.copy(Me).multiplyScalar(Z).floor(),$.copy(we).multiplyScalar(Z).floor(),H=Ve;if(P!==0&&(U=x),Ie.bindFramebuffer(k.FRAMEBUFFER,U)&&O&&Ie.drawBuffers(v,U),Ie.viewport(D),Ie.scissor($),Ie.setScissorTest(H),V){const te=Xe.get(v.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+C,te.__webglTexture,P)}else if(G){const te=Xe.get(v.texture),ue=C;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,te.__webglTexture,P,ue)}else if(v!==null&&P!==0){const te=Xe.get(v.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,te.__webglTexture,P)}M=-1},this.readRenderTargetPixels=function(v,C,P,O,U,V,G,Y=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let te=Xe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&G!==void 0&&(te=te[G]),te){Ie.bindFramebuffer(k.FRAMEBUFFER,te);try{const ue=v.textures[Y],he=ue.format,fe=ue.type;if(!nt.textureFormatReadable(he)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=v.width-O&&P>=0&&P<=v.height-U&&(v.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Y),k.readPixels(C,P,O,U,ve.convert(he),ve.convert(fe),V))}finally{const ue=L!==null?Xe.get(L).__webglFramebuffer:null;Ie.bindFramebuffer(k.FRAMEBUFFER,ue)}}},this.readRenderTargetPixelsAsync=async function(v,C,P,O,U,V,G,Y=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let te=Xe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&G!==void 0&&(te=te[G]),te)if(C>=0&&C<=v.width-O&&P>=0&&P<=v.height-U){Ie.bindFramebuffer(k.FRAMEBUFFER,te);const ue=v.textures[Y],he=ue.format,fe=ue.type;if(!nt.textureFormatReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const me=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,me),k.bufferData(k.PIXEL_PACK_BUFFER,V.byteLength,k.STREAM_READ),v.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Y),k.readPixels(C,P,O,U,ve.convert(he),ve.convert(fe),0);const Se=L!==null?Xe.get(L).__webglFramebuffer:null;Ie.bindFramebuffer(k.FRAMEBUFFER,Se);const Ue=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Pg(k,Ue,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,me),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,V),k.deleteBuffer(me),k.deleteSync(Ue),V}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,C=null,P=0){const O=Math.pow(2,-P),U=Math.floor(v.image.width*O),V=Math.floor(v.image.height*O),G=C!==null?C.x:0,Y=C!==null?C.y:0;Je.setTexture2D(v,0),k.copyTexSubImage2D(k.TEXTURE_2D,P,0,0,G,Y,U,V),Ie.unbindTexture()};const A=k.createFramebuffer(),F=k.createFramebuffer();this.copyTextureToTexture=function(v,C,P=null,O=null,U=0,V=null){V===null&&(U!==0?(As("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),V=U,U=0):V=0);let G,Y,te,ue,he,fe,me,Se,Ue;const $e=v.isCompressedTexture?v.mipmaps[V]:v.image;if(P!==null)G=P.max.x-P.min.x,Y=P.max.y-P.min.y,te=P.isBox3?P.max.z-P.min.z:1,ue=P.min.x,he=P.min.y,fe=P.isBox3?P.min.z:0;else{const nn=Math.pow(2,-U);G=Math.floor($e.width*nn),Y=Math.floor($e.height*nn),v.isDataArrayTexture?te=$e.depth:v.isData3DTexture?te=Math.floor($e.depth*nn):te=1,ue=0,he=0,fe=0}O!==null?(me=O.x,Se=O.y,Ue=O.z):(me=0,Se=0,Ue=0);const qe=ve.convert(C.format),ke=ve.convert(C.type);let Ze;C.isData3DTexture?(Je.setTexture3D(C,0),Ze=k.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(Je.setTexture2DArray(C,0),Ze=k.TEXTURE_2D_ARRAY):(Je.setTexture2D(C,0),Ze=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,C.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,C.unpackAlignment);const Fe=k.getParameter(k.UNPACK_ROW_LENGTH),Mt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Zt=k.getParameter(k.UNPACK_SKIP_PIXELS),Et=k.getParameter(k.UNPACK_SKIP_ROWS),mt=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,$e.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,$e.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ue),k.pixelStorei(k.UNPACK_SKIP_ROWS,he),k.pixelStorei(k.UNPACK_SKIP_IMAGES,fe);const Ke=v.isDataArrayTexture||v.isData3DTexture,kt=C.isDataArrayTexture||C.isData3DTexture;if(v.isDepthTexture){const nn=Xe.get(v),Dt=Xe.get(C),jt=Xe.get(nn.__renderTarget),dl=Xe.get(Dt.__renderTarget);Ie.bindFramebuffer(k.READ_FRAMEBUFFER,jt.__webglFramebuffer),Ie.bindFramebuffer(k.DRAW_FRAMEBUFFER,dl.__webglFramebuffer);for(let Sr=0;Sr<te;Sr++)Ke&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Xe.get(v).__webglTexture,U,fe+Sr),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Xe.get(C).__webglTexture,V,Ue+Sr)),k.blitFramebuffer(ue,he,G,Y,me,Se,G,Y,k.DEPTH_BUFFER_BIT,k.NEAREST);Ie.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||Xe.has(v)){const nn=Xe.get(v),Dt=Xe.get(C);Ie.bindFramebuffer(k.READ_FRAMEBUFFER,A),Ie.bindFramebuffer(k.DRAW_FRAMEBUFFER,F);for(let jt=0;jt<te;jt++)Ke?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,nn.__webglTexture,U,fe+jt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,nn.__webglTexture,U),kt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Dt.__webglTexture,V,Ue+jt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Dt.__webglTexture,V),U!==0?k.blitFramebuffer(ue,he,G,Y,me,Se,G,Y,k.COLOR_BUFFER_BIT,k.NEAREST):kt?k.copyTexSubImage3D(Ze,V,me,Se,Ue+jt,ue,he,G,Y):k.copyTexSubImage2D(Ze,V,me,Se,ue,he,G,Y);Ie.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else kt?v.isDataTexture||v.isData3DTexture?k.texSubImage3D(Ze,V,me,Se,Ue,G,Y,te,qe,ke,$e.data):C.isCompressedArrayTexture?k.compressedTexSubImage3D(Ze,V,me,Se,Ue,G,Y,te,qe,$e.data):k.texSubImage3D(Ze,V,me,Se,Ue,G,Y,te,qe,ke,$e):v.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,V,me,Se,G,Y,qe,ke,$e.data):v.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,V,me,Se,$e.width,$e.height,qe,$e.data):k.texSubImage2D(k.TEXTURE_2D,V,me,Se,G,Y,qe,ke,$e);k.pixelStorei(k.UNPACK_ROW_LENGTH,Fe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Mt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Zt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Et),k.pixelStorei(k.UNPACK_SKIP_IMAGES,mt),V===0&&C.generateMipmaps&&k.generateMipmap(Ze),Ie.unbindTexture()},this.copyTextureToTexture3D=function(v,C,P=null,O=null,U=0){return As('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,C,P,O,U)},this.initRenderTarget=function(v){Xe.get(v).__webglFramebuffer===void 0&&Je.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Je.setTextureCube(v,0):v.isData3DTexture?Je.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Je.setTexture2DArray(v,0):Je.setTexture2D(v,0),Ie.unbindTexture()},this.resetState=function(){I=0,R=0,L=null,Ie.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class vi{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),vi.nextNameID=vi.nextNameID||0,this.$name.id=`lil-gui-name-${++vi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class US extends vi{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ru(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const FS={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:ru,toHexString:ru},Fo={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},OS={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,e,t=1){const n=Fo.fromHexString(s);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([s,e,t],n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return Fo.toHexString(i)}},BS={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const n=Fo.fromHexString(s);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:s,g:e,b:t},n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return Fo.toHexString(i)}},kS=[FS,Fo,OS,BS];function zS(s){return kS.find(e=>e.match(s))}class HS extends vi{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=zS(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=ru(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ql extends vi{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class VS extends vi{constructor(e,t,n,i,r,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let S=parseFloat(this.$input.value);isNaN(S)||(this._stepExplicit&&(S=this._snap(S)),this.setValue(this._clamp(S)))},n=S=>{const T=parseFloat(this.$input.value);isNaN(T)||(this._snapClampSetValue(T+S),this.$input.value=this.getValue())},i=S=>{S.key==="Enter"&&this.$input.blur(),S.code==="ArrowUp"&&(S.preventDefault(),n(this._step*this._arrowKeyMultiplier(S))),S.code==="ArrowDown"&&(S.preventDefault(),n(this._step*this._arrowKeyMultiplier(S)*-1))},r=S=>{this._inputFocused&&(S.preventDefault(),n(this._step*this._normalizeMouseWheel(S)))};let o=!1,a,l,c,u,d;const f=5,h=S=>{a=S.clientX,l=c=S.clientY,o=!0,u=this.getValue(),d=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=S=>{if(o){const T=S.clientX-a,y=S.clientY-l;Math.abs(y)>f?(S.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(T)>f&&_()}if(!o){const T=S.clientY-c;d-=T*this._step*this._arrowKeyMultiplier(S),u+d>this._max?d=this._max-u:u+d<this._min&&(d=this._min-u),this._snapClampSetValue(u+d)}c=S.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",h),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(p,S,T,y,w)=>(p-S)/(T-S)*(w-y)+y,t=p=>{const S=this.$slider.getBoundingClientRect();let T=e(p,S.left,S.right,this._min,this._max);this._snapClampSetValue(T)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=p=>{t(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},u=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",f))},d=p=>{if(o){const S=p.touches[0].clientX-a,T=p.touches[0].clientY-l;Math.abs(S)>Math.abs(T)?c(p):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",f))}else p.preventDefault(),t(p.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",f)},h=this._callOnFinishChange.bind(this),g=400;let _;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const T=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+T),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(h,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class GS extends vi{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class WS extends vi{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var XS=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function YS(s){const e=document.createElement("style");e.innerHTML=s;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Fd=!1;class Ju{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Fd&&a&&(YS(XS),Fd=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,r){if(Object(n)===n)return new GS(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new VS(this,e,t,n,i,r);case"boolean":return new US(this,e,t);case"string":return new WS(this,e,t);case"function":return new ql(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new HS(this,e,t,n)}addFolder(e){const t=new Ju({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof ql||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof ql)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Yn=Uint8Array,Ms=Uint16Array,$S=Int32Array,sp=new Yn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),op=new Yn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),qS=new Yn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ap=function(s,e){for(var t=new Ms(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new $S(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return{b:t,r:i}},lp=ap(sp,2),cp=lp.b,KS=lp.r;cp[28]=258,KS[258]=28;var ZS=ap(op,0),jS=ZS.b,su=new Ms(32768);for(var Nt=0;Nt<32768;++Nt){var nr=(Nt&43690)>>1|(Nt&21845)<<1;nr=(nr&52428)>>2|(nr&13107)<<2,nr=(nr&61680)>>4|(nr&3855)<<4,su[Nt]=((nr&65280)>>8|(nr&255)<<8)>>1}var Mo=function(s,e,t){for(var n=s.length,i=0,r=new Ms(e);i<n;++i)s[i]&&++r[s[i]-1];var o=new Ms(e);for(i=1;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;var a;if(t){a=new Ms(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],u=e-s[i],d=o[s[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)a[su[d]>>l]=c}else for(a=new Ms(n),i=0;i<n;++i)s[i]&&(a[i]=su[o[s[i]-1]++]>>15-s[i]);return a},qo=new Yn(288);for(var Nt=0;Nt<144;++Nt)qo[Nt]=8;for(var Nt=144;Nt<256;++Nt)qo[Nt]=9;for(var Nt=256;Nt<280;++Nt)qo[Nt]=7;for(var Nt=280;Nt<288;++Nt)qo[Nt]=8;var up=new Yn(32);for(var Nt=0;Nt<32;++Nt)up[Nt]=5;var JS=Mo(qo,9,1),QS=Mo(up,5,1),Kl=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},Qn=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},Zl=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},eM=function(s){return(s+7)/8|0},tM=function(s,e,t){return(t==null||t>s.length)&&(t=s.length),new Yn(s.subarray(e,t))},nM=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ti=function(s,e,t){var n=new Error(e||nM[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,ti),!t)throw n;return n},iM=function(s,e,t,n){var i=s.length,r=0;if(!i||e.f&&!e.l)return t||new Yn(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new Yn(i*3));var c=function(lt){var dt=t.length;if(lt>dt){var et=new Yn(Math.max(dt*2,lt));et.set(t),t=et}},u=e.f||0,d=e.p||0,f=e.b||0,h=e.l,g=e.d,_=e.m,m=e.n,p=i*8;do{if(!h){u=Qn(s,d,1);var S=Qn(s,d+1,3);if(d+=3,S)if(S==1)h=JS,g=QS,_=9,m=5;else if(S==2){var I=Qn(s,d,31)+257,R=Qn(s,d+10,15)+4,L=I+Qn(s,d+5,31)+1;d+=14;for(var M=new Yn(L),b=new Yn(19),D=0;D<R;++D)b[qS[D]]=Qn(s,d+D*3,7);d+=R*3;for(var $=Kl(b),H=(1<<$)-1,ee=Mo(b,$,1),D=0;D<L;){var ne=ee[Qn(s,d,H)];d+=ne&15;var T=ne>>4;if(T<16)M[D++]=T;else{var K=0,Q=0;for(T==16?(Q=3+Qn(s,d,3),d+=2,K=M[D-1]):T==17?(Q=3+Qn(s,d,7),d+=3):T==18&&(Q=11+Qn(s,d,127),d+=7);Q--;)M[D++]=K}}var Z=M.subarray(0,I),ye=M.subarray(I);_=Kl(Z),m=Kl(ye),h=Mo(Z,_,1),g=Mo(ye,m,1)}else ti(1);else{var T=eM(d)+4,y=s[T-4]|s[T-3]<<8,w=T+y;if(w>i){l&&ti(0);break}a&&c(f+y),t.set(s.subarray(T,w),f),e.b=f+=y,e.p=d=w*8,e.f=u;continue}if(d>p){l&&ti(0);break}}a&&c(f+131072);for(var be=(1<<_)-1,Me=(1<<m)-1,we=d;;we=d){var K=h[Zl(s,d)&be],Ve=K>>4;if(d+=K&15,d>p){l&&ti(0);break}if(K||ti(2),Ve<256)t[f++]=Ve;else if(Ve==256){we=d,h=null;break}else{var j=Ve-254;if(Ve>264){var D=Ve-257,ge=sp[D];j=Qn(s,d,(1<<ge)-1)+cp[D],d+=ge}var _e=g[Zl(s,d)&Me],Ee=_e>>4;_e||ti(3),d+=_e&15;var ye=jS[Ee];if(Ee>3){var ge=op[Ee];ye+=Zl(s,d)&(1<<ge)-1,d+=ge}if(d>p){l&&ti(0);break}a&&c(f+131072);var Ae=f+j;if(f<ye){var st=r-ye,Ge=Math.min(ye,Ae);for(st+f<0&&ti(3);f<Ge;++f)t[f]=n[st+f]}for(;f<Ae;++f)t[f]=t[f-ye]}}e.l=h,e.p=we,e.b=f,e.f=u,h&&(u=1,e.m=_,e.d=g,e.n=m)}while(!u);return f!=t.length&&o?tM(t,0,f):t.subarray(0,f)},rM=new Yn(0),sM=function(s,e){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&ti(6,"invalid zlib data"),(s[1]>>5&1)==1&&ti(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function Ta(s,e){return iM(s.subarray(sM(s),-4),{i:2},e,e)}var oM=typeof TextDecoder<"u"&&new TextDecoder,aM=0;try{oM.decode(rM,{stream:!0}),aM=1}catch{}class lM extends I_{constructor(e){super(e),this.type=ki}parse(e){const M=Math.pow(2.7182818,2.2);function b(x,A){let F=0;for(let C=0;C<65536;++C)(C==0||x[C>>3]&1<<(C&7))&&(A[F++]=C);const v=F-1;for(;F<65536;)A[F++]=0;return v}function D(x){for(let A=0;A<16384;A++)x[A]={},x[A].len=0,x[A].lit=0,x[A].p=null}const $={l:0,c:0,lc:0};function H(x,A,F,v,C){for(;F<x;)A=A<<8|Ye(v,C),F+=8;F-=x,$.l=A>>F&(1<<x)-1,$.c=A,$.lc=F}const ee=new Array(59);function ne(x){for(let F=0;F<=58;++F)ee[F]=0;for(let F=0;F<65537;++F)ee[x[F]]+=1;let A=0;for(let F=58;F>0;--F){const v=A+ee[F]>>1;ee[F]=A,A=v}for(let F=0;F<65537;++F){const v=x[F];v>0&&(x[F]=v|ee[v]++<<6)}}function K(x,A,F,v,C,P){const O=A;let U=0,V=0;for(;v<=C;v++){if(O.value-A.value>F)return!1;H(6,U,V,x,O);const G=$.l;if(U=$.c,V=$.lc,P[v]=G,G==63){if(O.value-A.value>F)throw new Error("Something wrong with hufUnpackEncTable");H(8,U,V,x,O);let Y=$.l+6;if(U=$.c,V=$.lc,v+Y>C+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Y--;)P[v++]=0;v--}else if(G>=59){let Y=G-59+2;if(v+Y>C+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Y--;)P[v++]=0;v--}}ne(P)}function Q(x){return x&63}function Z(x){return x>>6}function ye(x,A,F,v){for(;A<=F;A++){const C=Z(x[A]),P=Q(x[A]);if(C>>P)throw new Error("Invalid table entry");if(P>14){const O=v[C>>P-14];if(O.len)throw new Error("Invalid table entry");if(O.lit++,O.p){const U=O.p;O.p=new Array(O.lit);for(let V=0;V<O.lit-1;++V)O.p[V]=U[V]}else O.p=new Array(1);O.p[O.lit-1]=A}else if(P){let O=0;for(let U=1<<14-P;U>0;U--){const V=v[(C<<14-P)+O];if(V.len||V.p)throw new Error("Invalid table entry");V.len=P,V.lit=A,O++}}}return!0}const be={c:0,lc:0};function Me(x,A,F,v){x=x<<8|Ye(F,v),A+=8,be.c=x,be.lc=A}const we={c:0,lc:0};function Ve(x,A,F,v,C,P,O,U,V){if(x==A){v<8&&(Me(F,v,C,P),F=be.c,v=be.lc),v-=8;let G=F>>v;if(G=new Uint8Array([G])[0],U.value+G>V)return!1;const Y=O[U.value-1];for(;G-- >0;)O[U.value++]=Y}else if(U.value<V)O[U.value++]=x;else return!1;we.c=F,we.lc=v}function j(x){return x&65535}function ge(x){const A=j(x);return A>32767?A-65536:A}const _e={a:0,b:0};function Ee(x,A){const F=ge(x),C=ge(A),P=F+(C&1)+(C>>1),O=P,U=P-C;_e.a=O,_e.b=U}function Ae(x,A){const F=j(x),v=j(A),C=F-(v>>1)&65535,P=v+C-32768&65535;_e.a=P,_e.b=C}function st(x,A,F,v,C,P,O){const U=O<16384,V=F>C?C:F;let G=1,Y,te;for(;G<=V;)G<<=1;for(G>>=1,Y=G,G>>=1;G>=1;){te=0;const ue=te+P*(C-Y),he=P*G,fe=P*Y,me=v*G,Se=v*Y;let Ue,$e,qe,ke;for(;te<=ue;te+=fe){let Ze=te;const Fe=te+v*(F-Y);for(;Ze<=Fe;Ze+=Se){const Mt=Ze+me,Zt=Ze+he,Et=Zt+me;U?(Ee(x[Ze+A],x[Zt+A]),Ue=_e.a,qe=_e.b,Ee(x[Mt+A],x[Et+A]),$e=_e.a,ke=_e.b,Ee(Ue,$e),x[Ze+A]=_e.a,x[Mt+A]=_e.b,Ee(qe,ke),x[Zt+A]=_e.a,x[Et+A]=_e.b):(Ae(x[Ze+A],x[Zt+A]),Ue=_e.a,qe=_e.b,Ae(x[Mt+A],x[Et+A]),$e=_e.a,ke=_e.b,Ae(Ue,$e),x[Ze+A]=_e.a,x[Mt+A]=_e.b,Ae(qe,ke),x[Zt+A]=_e.a,x[Et+A]=_e.b)}if(F&G){const Mt=Ze+he;U?Ee(x[Ze+A],x[Mt+A]):Ae(x[Ze+A],x[Mt+A]),Ue=_e.a,x[Mt+A]=_e.b,x[Ze+A]=Ue}}if(C&G){let Ze=te;const Fe=te+v*(F-Y);for(;Ze<=Fe;Ze+=Se){const Mt=Ze+me;U?Ee(x[Ze+A],x[Mt+A]):Ae(x[Ze+A],x[Mt+A]),Ue=_e.a,x[Mt+A]=_e.b,x[Ze+A]=Ue}}Y=G,G>>=1}return te}function Ge(x,A,F,v,C,P,O,U,V){let G=0,Y=0;const te=O,ue=Math.trunc(v.value+(C+7)/8);for(;v.value<ue;)for(Me(G,Y,F,v),G=be.c,Y=be.lc;Y>=14;){const fe=G>>Y-14&16383,me=A[fe];if(me.len)Y-=me.len,Ve(me.lit,P,G,Y,F,v,U,V,te),G=we.c,Y=we.lc;else{if(!me.p)throw new Error("hufDecode issues");let Se;for(Se=0;Se<me.lit;Se++){const Ue=Q(x[me.p[Se]]);for(;Y<Ue&&v.value<ue;)Me(G,Y,F,v),G=be.c,Y=be.lc;if(Y>=Ue&&Z(x[me.p[Se]])==(G>>Y-Ue&(1<<Ue)-1)){Y-=Ue,Ve(me.p[Se],P,G,Y,F,v,U,V,te),G=we.c,Y=we.lc;break}}if(Se==me.lit)throw new Error("hufDecode issues")}}const he=8-C&7;for(G>>=he,Y-=he;Y>0;){const fe=A[G<<14-Y&16383];if(fe.len)Y-=fe.len,Ve(fe.lit,P,G,Y,F,v,U,V,te),G=we.c,Y=we.lc;else throw new Error("hufDecode issues")}return!0}function lt(x,A,F,v,C,P){const O={value:0},U=F.value,V=Re(A,F),G=Re(A,F);F.value+=4;const Y=Re(A,F);if(F.value+=4,V<0||V>=65537||G<0||G>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const te=new Array(65537),ue=new Array(16384);D(ue);const he=v-(F.value-U);if(K(x,F,he,V,G,te),Y>8*(v-(F.value-U)))throw new Error("Something wrong with hufUncompress");ye(te,V,G,ue),Ge(te,ue,x,F,Y,G,P,C,O)}function dt(x,A,F){for(let v=0;v<F;++v)A[v]=x[A[v]]}function et(x){for(let A=1;A<x.length;A++){const F=x[A-1]+x[A]-128;x[A]=F}}function k(x,A){let F=0,v=Math.floor((x.length+1)/2),C=0;const P=x.length-1;for(;!(C>P||(A[C++]=x[F++],C>P));)A[C++]=x[v++]}function je(x){let A=x.byteLength;const F=new Array;let v=0;const C=new DataView(x);for(;A>0;){const P=C.getInt8(v++);if(P<0){const O=-P;A-=O+1;for(let U=0;U<O;U++)F.push(C.getUint8(v++))}else{const O=P;A-=2;const U=C.getUint8(v++);for(let V=0;V<O+1;V++)F.push(U)}}return F}function ft(x,A,F,v,C,P){let O=new DataView(P.buffer);const U=F[x.idx[0]].width,V=F[x.idx[0]].height,G=3,Y=Math.floor(U/8),te=Math.ceil(U/8),ue=Math.ceil(V/8),he=U-(te-1)*8,fe=V-(ue-1)*8,me={value:0},Se=new Array(G),Ue=new Array(G),$e=new Array(G),qe=new Array(G),ke=new Array(G);for(let Fe=0;Fe<G;++Fe)ke[Fe]=A[x.idx[Fe]],Se[Fe]=Fe<1?0:Se[Fe-1]+te*ue,Ue[Fe]=new Float32Array(64),$e[Fe]=new Uint16Array(64),qe[Fe]=new Uint16Array(te*64);for(let Fe=0;Fe<ue;++Fe){let Mt=8;Fe==ue-1&&(Mt=fe);let Zt=8;for(let mt=0;mt<te;++mt){mt==te-1&&(Zt=he);for(let Ke=0;Ke<G;++Ke)$e[Ke].fill(0),$e[Ke][0]=C[Se[Ke]++],nt(me,v,$e[Ke]),Ie($e[Ke],Ue[Ke]),ct(Ue[Ke]);Xe(Ue);for(let Ke=0;Ke<G;++Ke)Je(Ue[Ke],qe[Ke],mt*64)}let Et=0;for(let mt=0;mt<G;++mt){const Ke=F[x.idx[mt]].type;for(let kt=8*Fe;kt<8*Fe+Mt;++kt){Et=ke[mt][kt];for(let nn=0;nn<Y;++nn){const Dt=nn*64+(kt&7)*8;O.setUint16(Et+0*2*Ke,qe[mt][Dt+0],!0),O.setUint16(Et+1*2*Ke,qe[mt][Dt+1],!0),O.setUint16(Et+2*2*Ke,qe[mt][Dt+2],!0),O.setUint16(Et+3*2*Ke,qe[mt][Dt+3],!0),O.setUint16(Et+4*2*Ke,qe[mt][Dt+4],!0),O.setUint16(Et+5*2*Ke,qe[mt][Dt+5],!0),O.setUint16(Et+6*2*Ke,qe[mt][Dt+6],!0),O.setUint16(Et+7*2*Ke,qe[mt][Dt+7],!0),Et+=8*2*Ke}}if(Y!=te)for(let kt=8*Fe;kt<8*Fe+Mt;++kt){const nn=ke[mt][kt]+8*Y*2*Ke,Dt=Y*64+(kt&7)*8;for(let jt=0;jt<Zt;++jt)O.setUint16(nn+jt*2*Ke,qe[mt][Dt+jt],!0)}}}const Ze=new Uint16Array(U);O=new DataView(P.buffer);for(let Fe=0;Fe<G;++Fe){F[x.idx[Fe]].decoded=!0;const Mt=F[x.idx[Fe]].type;if(F[Fe].type==2)for(let Zt=0;Zt<V;++Zt){const Et=ke[Fe][Zt];for(let mt=0;mt<U;++mt)Ze[mt]=O.getUint16(Et+mt*2*Mt,!0);for(let mt=0;mt<U;++mt)O.setFloat32(Et+mt*2*Mt,J(Ze[mt]),!0)}}}function nt(x,A,F){let v,C=1;for(;C<64;)v=A[x.value],v==65280?C=64:v>>8==255?C+=v&255:(F[C]=v,C++),x.value++}function Ie(x,A){A[0]=J(x[0]),A[1]=J(x[1]),A[2]=J(x[5]),A[3]=J(x[6]),A[4]=J(x[14]),A[5]=J(x[15]),A[6]=J(x[27]),A[7]=J(x[28]),A[8]=J(x[2]),A[9]=J(x[4]),A[10]=J(x[7]),A[11]=J(x[13]),A[12]=J(x[16]),A[13]=J(x[26]),A[14]=J(x[29]),A[15]=J(x[42]),A[16]=J(x[3]),A[17]=J(x[8]),A[18]=J(x[12]),A[19]=J(x[17]),A[20]=J(x[25]),A[21]=J(x[30]),A[22]=J(x[41]),A[23]=J(x[43]),A[24]=J(x[9]),A[25]=J(x[11]),A[26]=J(x[18]),A[27]=J(x[24]),A[28]=J(x[31]),A[29]=J(x[40]),A[30]=J(x[44]),A[31]=J(x[53]),A[32]=J(x[10]),A[33]=J(x[19]),A[34]=J(x[23]),A[35]=J(x[32]),A[36]=J(x[39]),A[37]=J(x[45]),A[38]=J(x[52]),A[39]=J(x[54]),A[40]=J(x[20]),A[41]=J(x[22]),A[42]=J(x[33]),A[43]=J(x[38]),A[44]=J(x[46]),A[45]=J(x[51]),A[46]=J(x[55]),A[47]=J(x[60]),A[48]=J(x[21]),A[49]=J(x[34]),A[50]=J(x[37]),A[51]=J(x[47]),A[52]=J(x[50]),A[53]=J(x[56]),A[54]=J(x[59]),A[55]=J(x[61]),A[56]=J(x[35]),A[57]=J(x[36]),A[58]=J(x[48]),A[59]=J(x[49]),A[60]=J(x[57]),A[61]=J(x[58]),A[62]=J(x[62]),A[63]=J(x[63])}function ct(x){const A=.5*Math.cos(.7853975),F=.5*Math.cos(3.14159/16),v=.5*Math.cos(3.14159/8),C=.5*Math.cos(3*3.14159/16),P=.5*Math.cos(5*3.14159/16),O=.5*Math.cos(3*3.14159/8),U=.5*Math.cos(7*3.14159/16),V=new Array(4),G=new Array(4),Y=new Array(4),te=new Array(4);for(let ue=0;ue<8;++ue){const he=ue*8;V[0]=v*x[he+2],V[1]=O*x[he+2],V[2]=v*x[he+6],V[3]=O*x[he+6],G[0]=F*x[he+1]+C*x[he+3]+P*x[he+5]+U*x[he+7],G[1]=C*x[he+1]-U*x[he+3]-F*x[he+5]-P*x[he+7],G[2]=P*x[he+1]-F*x[he+3]+U*x[he+5]+C*x[he+7],G[3]=U*x[he+1]-P*x[he+3]+C*x[he+5]-F*x[he+7],Y[0]=A*(x[he+0]+x[he+4]),Y[3]=A*(x[he+0]-x[he+4]),Y[1]=V[0]+V[3],Y[2]=V[1]-V[2],te[0]=Y[0]+Y[1],te[1]=Y[3]+Y[2],te[2]=Y[3]-Y[2],te[3]=Y[0]-Y[1],x[he+0]=te[0]+G[0],x[he+1]=te[1]+G[1],x[he+2]=te[2]+G[2],x[he+3]=te[3]+G[3],x[he+4]=te[3]-G[3],x[he+5]=te[2]-G[2],x[he+6]=te[1]-G[1],x[he+7]=te[0]-G[0]}for(let ue=0;ue<8;++ue)V[0]=v*x[16+ue],V[1]=O*x[16+ue],V[2]=v*x[48+ue],V[3]=O*x[48+ue],G[0]=F*x[8+ue]+C*x[24+ue]+P*x[40+ue]+U*x[56+ue],G[1]=C*x[8+ue]-U*x[24+ue]-F*x[40+ue]-P*x[56+ue],G[2]=P*x[8+ue]-F*x[24+ue]+U*x[40+ue]+C*x[56+ue],G[3]=U*x[8+ue]-P*x[24+ue]+C*x[40+ue]-F*x[56+ue],Y[0]=A*(x[ue]+x[32+ue]),Y[3]=A*(x[ue]-x[32+ue]),Y[1]=V[0]+V[3],Y[2]=V[1]-V[2],te[0]=Y[0]+Y[1],te[1]=Y[3]+Y[2],te[2]=Y[3]-Y[2],te[3]=Y[0]-Y[1],x[0+ue]=te[0]+G[0],x[8+ue]=te[1]+G[1],x[16+ue]=te[2]+G[2],x[24+ue]=te[3]+G[3],x[32+ue]=te[3]-G[3],x[40+ue]=te[2]-G[2],x[48+ue]=te[1]-G[1],x[56+ue]=te[0]-G[0]}function Xe(x){for(let A=0;A<64;++A){const F=x[0][A],v=x[1][A],C=x[2][A];x[0][A]=F+1.5747*C,x[1][A]=F-.1873*v-.4682*C,x[2][A]=F+1.8556*v}}function Je(x,A,F){for(let v=0;v<64;++v)A[F+v]=Hh.toHalfFloat(pt(x[v]))}function pt(x){return x<=1?Math.sign(x)*Math.pow(Math.abs(x),2.2):Math.sign(x)*Math.pow(M,Math.abs(x)-1)}function N(x){return new DataView(x.array.buffer,x.offset.value,x.size)}function E(x){const A=x.viewer.buffer.slice(x.offset.value,x.offset.value+x.size),F=new Uint8Array(je(A)),v=new Uint8Array(F.length);return et(F),k(F,v),new DataView(v.buffer)}function q(x){const A=x.array.slice(x.offset.value,x.offset.value+x.size),F=Ta(A),v=new Uint8Array(F.length);return et(F),k(F,v),new DataView(v.buffer)}function re(x){const A=x.viewer,F={value:x.offset.value},v=new Uint16Array(x.columns*x.lines*(x.inputChannels.length*x.type)),C=new Uint8Array(8192);let P=0;const O=new Array(x.inputChannels.length);for(let fe=0,me=x.inputChannels.length;fe<me;fe++)O[fe]={},O[fe].start=P,O[fe].end=O[fe].start,O[fe].nx=x.columns,O[fe].ny=x.lines,O[fe].size=x.type,P+=O[fe].nx*O[fe].ny*O[fe].size;const U=le(A,F),V=le(A,F);if(V>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(U<=V)for(let fe=0;fe<V-U+1;fe++)C[fe+U]=Oe(A,F);const G=new Uint16Array(65536),Y=b(C,G),te=Re(A,F);lt(x.array,A,F,te,v,P);for(let fe=0;fe<x.inputChannels.length;++fe){const me=O[fe];for(let Se=0;Se<O[fe].size;++Se)st(v,me.start+Se,me.nx,me.size,me.ny,me.nx*me.size,Y)}dt(G,v,P);let ue=0;const he=new Uint8Array(v.buffer.byteLength);for(let fe=0;fe<x.lines;fe++)for(let me=0;me<x.inputChannels.length;me++){const Se=O[me],Ue=Se.nx*Se.size,$e=new Uint8Array(v.buffer,Se.end*2,Ue*2);he.set($e,ue),ue+=Ue*2,Se.end+=Ue}return new DataView(he.buffer)}function de(x){const A=x.array.slice(x.offset.value,x.offset.value+x.size),F=Ta(A),v=x.inputChannels.length*x.lines*x.columns*x.totalBytes,C=new ArrayBuffer(v),P=new DataView(C);let O=0,U=0;const V=new Array(4);for(let G=0;G<x.lines;G++)for(let Y=0;Y<x.inputChannels.length;Y++){let te=0;switch(x.inputChannels[Y].pixelType){case 1:V[0]=O,V[1]=V[0]+x.columns,O=V[1]+x.columns;for(let he=0;he<x.columns;++he){const fe=F[V[0]++]<<8|F[V[1]++];te+=fe,P.setUint16(U,te,!0),U+=2}break;case 2:V[0]=O,V[1]=V[0]+x.columns,V[2]=V[1]+x.columns,O=V[2]+x.columns;for(let he=0;he<x.columns;++he){const fe=F[V[0]++]<<24|F[V[1]++]<<16|F[V[2]++]<<8;te+=fe,P.setUint32(U,te,!0),U+=4}break}}return P}function ie(x){const A=x.viewer,F={value:x.offset.value},v=new Uint8Array(x.columns*x.lines*(x.inputChannels.length*x.type*2)),C={version:ve(A,F),unknownUncompressedSize:ve(A,F),unknownCompressedSize:ve(A,F),acCompressedSize:ve(A,F),dcCompressedSize:ve(A,F),rleCompressedSize:ve(A,F),rleUncompressedSize:ve(A,F),rleRawSize:ve(A,F),totalAcUncompressedCount:ve(A,F),totalDcUncompressedCount:ve(A,F),acCompression:ve(A,F)};if(C.version<2)throw new Error("EXRLoader.parse: "+bt.compression+" version "+C.version+" is unsupported");const P=new Array;let O=le(A,F)-2;for(;O>0;){const me=ze(A.buffer,F),Se=Oe(A,F),Ue=Se>>2&3,$e=(Se>>4)-1,qe=new Int8Array([$e])[0],ke=Oe(A,F);P.push({name:me,index:qe,type:ke,compression:Ue}),O-=me.length+3}const U=bt.channels,V=new Array(x.inputChannels.length);for(let me=0;me<x.inputChannels.length;++me){const Se=V[me]={},Ue=U[me];Se.name=Ue.name,Se.compression=0,Se.decoded=!1,Se.type=Ue.pixelType,Se.pLinear=Ue.pLinear,Se.width=x.columns,Se.height=x.lines}const G={idx:new Array(3)};for(let me=0;me<x.inputChannels.length;++me){const Se=V[me];for(let Ue=0;Ue<P.length;++Ue){const $e=P[Ue];Se.name==$e.name&&(Se.compression=$e.compression,$e.index>=0&&(G.idx[$e.index]=me),Se.offset=me)}}let Y,te,ue;if(C.acCompressedSize>0)switch(C.acCompression){case 0:Y=new Uint16Array(C.totalAcUncompressedCount),lt(x.array,A,F,C.acCompressedSize,Y,C.totalAcUncompressedCount);break;case 1:const me=x.array.slice(F.value,F.value+C.totalAcUncompressedCount),Se=Ta(me);Y=new Uint16Array(Se.buffer),F.value+=C.totalAcUncompressedCount;break}if(C.dcCompressedSize>0){const me={array:x.array,offset:F,size:C.dcCompressedSize};te=new Uint16Array(q(me).buffer),F.value+=C.dcCompressedSize}if(C.rleRawSize>0){const me=x.array.slice(F.value,F.value+C.rleCompressedSize),Se=Ta(me);ue=je(Se.buffer),F.value+=C.rleCompressedSize}let he=0;const fe=new Array(V.length);for(let me=0;me<fe.length;++me)fe[me]=new Array;for(let me=0;me<x.lines;++me)for(let Se=0;Se<V.length;++Se)fe[Se].push(he),he+=V[Se].width*x.type*2;ft(G,fe,V,Y,te,v);for(let me=0;me<V.length;++me){const Se=V[me];if(!Se.decoded)switch(Se.compression){case 2:let Ue=0,$e=0;for(let qe=0;qe<x.lines;++qe){let ke=fe[me][Ue];for(let Ze=0;Ze<Se.width;++Ze){for(let Fe=0;Fe<2*Se.type;++Fe)v[ke++]=ue[$e+Fe*Se.width*Se.height];$e++}Ue++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(v.buffer)}function ze(x,A){const F=new Uint8Array(x);let v=0;for(;F[A.value+v]!=0;)v+=1;const C=new TextDecoder().decode(F.slice(A.value,A.value+v));return A.value=A.value+v+1,C}function Ce(x,A,F){const v=new TextDecoder().decode(new Uint8Array(x).slice(A.value,A.value+F));return A.value=A.value+F,v}function He(x,A){const F=ae(x,A),v=Re(x,A);return[F,v]}function We(x,A){const F=Re(x,A),v=Re(x,A);return[F,v]}function ae(x,A){const F=x.getInt32(A.value,!0);return A.value=A.value+4,F}function Re(x,A){const F=x.getUint32(A.value,!0);return A.value=A.value+4,F}function Ye(x,A){const F=x[A.value];return A.value=A.value+1,F}function Oe(x,A){const F=x.getUint8(A.value);return A.value=A.value+1,F}const ve=function(x,A){let F;return"getBigInt64"in DataView.prototype?F=Number(x.getBigInt64(A.value,!0)):F=x.getUint32(A.value+4,!0)+Number(x.getUint32(A.value,!0)<<32),A.value+=8,F};function Ne(x,A){const F=x.getFloat32(A.value,!0);return A.value+=4,F}function z(x,A){return Hh.toHalfFloat(Ne(x,A))}function J(x){const A=(x&31744)>>10,F=x&1023;return(x>>15?-1:1)*(A?A===31?F?NaN:1/0:Math.pow(2,A-15)*(1+F/1024):6103515625e-14*(F/1024))}function le(x,A){const F=x.getUint16(A.value,!0);return A.value+=2,F}function De(x,A){return J(le(x,A))}function xe(x,A,F,v){const C=F.value,P=[];for(;F.value<C+v-1;){const O=ze(A,F),U=ae(x,F),V=Oe(x,F);F.value+=3;const G=ae(x,F),Y=ae(x,F);P.push({name:O,pixelType:U,pLinear:V,xSampling:G,ySampling:Y})}return F.value+=1,P}function ce(x,A){const F=Ne(x,A),v=Ne(x,A),C=Ne(x,A),P=Ne(x,A),O=Ne(x,A),U=Ne(x,A),V=Ne(x,A),G=Ne(x,A);return{redX:F,redY:v,greenX:C,greenY:P,blueX:O,blueY:U,whiteX:V,whiteY:G}}function oe(x,A){const F=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],v=Oe(x,A);return F[v]}function B(x,A){const F=ae(x,A),v=ae(x,A),C=ae(x,A),P=ae(x,A);return{xMin:F,yMin:v,xMax:C,yMax:P}}function se(x,A){const F=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],v=Oe(x,A);return F[v]}function X(x,A){const F=["ENVMAP_LATLONG","ENVMAP_CUBE"],v=Oe(x,A);return F[v]}function pe(x,A){const F=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],v=["ROUND_DOWN","ROUND_UP"],C=Re(x,A),P=Re(x,A),O=Oe(x,A);return{xSize:C,ySize:P,levelMode:F[O&15],roundingMode:v[O>>4]}}function Te(x,A){const F=Ne(x,A),v=Ne(x,A);return[F,v]}function Le(x,A){const F=Ne(x,A),v=Ne(x,A),C=Ne(x,A);return[F,v,C]}function Qe(x,A,F,v,C){if(v==="string"||v==="stringvector"||v==="iccProfile")return Ce(A,F,C);if(v==="chlist")return xe(x,A,F,C);if(v==="chromaticities")return ce(x,F);if(v==="compression")return oe(x,F);if(v==="box2i")return B(x,F);if(v==="envmap")return X(x,F);if(v==="tiledesc")return pe(x,F);if(v==="lineOrder")return se(x,F);if(v==="float")return Ne(x,F);if(v==="v2f")return Te(x,F);if(v==="v3f")return Le(x,F);if(v==="int")return ae(x,F);if(v==="rational")return He(x,F);if(v==="timecode")return We(x,F);if(v==="preview")return F.value+=C,"skipped";F.value+=C}function Be(x,A){const F=Math.log2(x);return A=="ROUND_DOWN"?Math.floor(F):Math.ceil(F)}function vt(x,A,F){let v=0;switch(x.levelMode){case"ONE_LEVEL":v=1;break;case"MIPMAP_LEVELS":v=Be(Math.max(A,F),x.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return v}function ot(x,A,F,v){const C=new Array(x);for(let P=0;P<x;P++){const O=1<<P;let U=A/O|0;v=="ROUND_UP"&&U*O<A&&(U+=1);const V=Math.max(U,1);C[P]=(V+F-1)/F|0}return C}function St(){const x=this,A=x.offset,F={value:0};for(let v=0;v<x.tileCount;v++){const C=ae(x.viewer,A),P=ae(x.viewer,A);A.value+=8,x.size=Re(x.viewer,A);const O=C*x.blockWidth,U=P*x.blockHeight;x.columns=O+x.blockWidth>x.width?x.width-O:x.blockWidth,x.lines=U+x.blockHeight>x.height?x.height-U:x.blockHeight;const V=x.columns*x.totalBytes,Y=x.size<x.lines*V?x.uncompress(x):N(x);A.value+=x.size;for(let te=0;te<x.lines;te++){const ue=te*x.columns*x.totalBytes;for(let he=0;he<x.inputChannels.length;he++){const fe=bt.channels[he].name,me=x.channelByteOffsets[fe]*x.columns,Se=x.decodeChannels[fe];if(Se===void 0)continue;F.value=ue+me;const Ue=(x.height-(1+U+te))*x.outLineWidth;for(let $e=0;$e<x.columns;$e++){const qe=Ue+($e+O)*x.outputChannels+Se;x.byteArray[qe]=x.getter(Y,F)}}}}}function Rt(){const x=this,A=x.offset,F={value:0};for(let v=0;v<x.height/x.blockHeight;v++){const C=ae(x.viewer,A)-bt.dataWindow.yMin;x.size=Re(x.viewer,A),x.lines=C+x.blockHeight>x.height?x.height-C:x.blockHeight;const P=x.columns*x.totalBytes,U=x.size<x.lines*P?x.uncompress(x):N(x);A.value+=x.size;for(let V=0;V<x.blockHeight;V++){const G=v*x.blockHeight,Y=V+x.scanOrder(G);if(Y>=x.height)continue;const te=V*P,ue=(x.height-1-Y)*x.outLineWidth;for(let he=0;he<x.inputChannels.length;he++){const fe=bt.channels[he].name,me=x.channelByteOffsets[fe]*x.columns,Se=x.decodeChannels[fe];if(Se!==void 0){F.value=te+me;for(let Ue=0;Ue<x.columns;Ue++){const $e=ue+Ue*x.outputChannels+Se;x.byteArray[$e]=x.getter(U,F)}}}}}}function Ht(x,A,F){const v={};if(x.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");v.version=x.getUint8(4);const C=x.getUint8(5);v.spec={singleTile:!!(C&2),longName:!!(C&4),deepFormat:!!(C&8),multiPart:!!(C&16)},F.value=8;let P=!0;for(;P;){const O=ze(A,F);if(O==="")P=!1;else{const U=ze(A,F),V=Re(x,F),G=Qe(x,A,F,U,V);G===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${U}'.`):v[O]=G}}if((C&-7)!=0)throw console.error("THREE.EXRHeader:",v),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return v}function un(x,A,F,v,C){const P={size:0,viewer:A,array:F,offset:v,width:x.dataWindow.xMax-x.dataWindow.xMin+1,height:x.dataWindow.yMax-x.dataWindow.yMin+1,inputChannels:x.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:an};switch(x.compression){case"NO_COMPRESSION":P.blockHeight=1,P.uncompress=N;break;case"RLE_COMPRESSION":P.blockHeight=1,P.uncompress=E;break;case"ZIPS_COMPRESSION":P.blockHeight=1,P.uncompress=q;break;case"ZIP_COMPRESSION":P.blockHeight=16,P.uncompress=q;break;case"PIZ_COMPRESSION":P.blockHeight=32,P.uncompress=re;break;case"PXR24_COMPRESSION":P.blockHeight=16,P.uncompress=de;break;case"DWAA_COMPRESSION":P.blockHeight=32,P.uncompress=ie;break;case"DWAB_COMPRESSION":P.blockHeight=256,P.uncompress=ie;break;default:throw new Error("EXRLoader.parse: "+x.compression+" is unsupported")}const O={};for(const Y of x.channels)switch(Y.name){case"Y":case"R":case"G":case"B":case"A":O[Y.name]=!0,P.type=Y.pixelType}let U=!1;if(O.R&&O.G&&O.B)U=!O.A,P.outputChannels=4,P.decodeChannels={R:0,G:1,B:2,A:3};else if(O.Y)P.outputChannels=1,P.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(P.type==1)switch(C){case Mn:P.getter=De;break;case ki:P.getter=le;break}else if(P.type==2)switch(C){case Mn:P.getter=Ne;break;case ki:P.getter=z}else throw new Error("EXRLoader.parse: unsupported pixelType "+P.type+" for "+x.compression+".");P.columns=P.width;const V=P.width*P.height*P.outputChannels;switch(C){case Mn:P.byteArray=new Float32Array(V),U&&P.byteArray.fill(1,0,V);break;case ki:P.byteArray=new Uint16Array(V),U&&P.byteArray.fill(15360,0,V);break;default:console.error("THREE.EXRLoader: unsupported type: ",C);break}let G=0;for(const Y of x.channels)P.decodeChannels[Y.name]!==void 0&&(P.channelByteOffsets[Y.name]=G),G+=Y.pixelType*2;if(P.totalBytes=G,P.outLineWidth=P.width*P.outputChannels,x.lineOrder==="INCREASING_Y"?P.scanOrder=Y=>Y:P.scanOrder=Y=>P.height-1-Y,P.outputChannels==4?(P.format=Nn,P.colorSpace=an):(P.format=rl,P.colorSpace=ii),x.spec.singleTile){P.blockHeight=x.tiles.ySize,P.blockWidth=x.tiles.xSize;const Y=vt(x.tiles,P.width,P.height),te=ot(Y,P.width,x.tiles.xSize,x.tiles.roundingMode),ue=ot(Y,P.height,x.tiles.ySize,x.tiles.roundingMode);P.tileCount=te[0]*ue[0];for(let he=0;he<Y;he++)for(let fe=0;fe<ue[he];fe++)for(let me=0;me<te[he];me++)ve(A,v);P.decode=St.bind(P)}else{P.blockWidth=P.width;const Y=Math.ceil(P.height/P.blockHeight);for(let te=0;te<Y;te++)ve(A,v);P.decode=Rt.bind(P)}return P}const tn={value:0},Sn=new DataView(e),Vt=new Uint8Array(e),bt=Ht(Sn,e,tn),zn=un(bt,Sn,Vt,tn,this.type);return zn.decode(),{header:bt,width:zn.width,height:zn.height,data:zn.byteArray,format:zn.format,colorSpace:zn.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){o.colorSpace=a.colorSpace,o.minFilter=sn,o.magFilter=sn,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,r,n,i)}}function Od(s,e){if(e===tg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Jc||e===If){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Jc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class cM extends Jr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new pM(t)}),this.register(function(t){return new mM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new _M(t)}),this.register(function(t){return new xM(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new fM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new hM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new RM(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=So.extractUrlBase(e);o=So.resolveURL(c,this.path)}else o=So.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Xu(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===hp){try{o[ht.KHR_BINARY_GLTF]=new CM(e)}catch(d){i&&i(d);return}r=JSON.parse(o[ht.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new VM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const d=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(d){case ht.KHR_MATERIALS_UNLIT:o[d]=new dM;break;case ht.KHR_DRACO_MESH_COMPRESSION:o[d]=new PM(r,this.dracoLoader);break;case ht.KHR_TEXTURE_TRANSFORM:o[d]=new IM;break;case ht.KHR_MESH_QUANTIZATION:o[d]=new LM;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function uM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class hM{constructor(e){this.parser=e,this.name=ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new tt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],an);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Qf(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Jf(u),c.distance=d;break;case"spot":c=new D_(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ni(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class dM{constructor(){this.name=ht.KHR_MATERIALS_UNLIT}getMaterialType(){return kr}extendParams(e,t,n){const i=[];e.color=new tt(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],an),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,qt))}return Promise.all(i)}}class fM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class pM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new xt(a,a)}return Promise.all(r)}}class mM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class gM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class _M{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new tt(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],an)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,qt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class xM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class vM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new tt().setRGB(a[0],a[1],a[2],an),Promise.all(r)}}class yM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class SM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new tt().setRGB(a[0],a[1],a[2],an),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,qt)),Promise.all(r)}}class MM{constructor(e){this.parser=e,this.name=ht.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class EM{constructor(e){this.parser=e,this.name=ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class TM{constructor(e){this.parser=e,this.name=ht.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class bM{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class AM{constructor(e){this.parser=e,this.name=ht.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class wM{constructor(e){this.name=ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,d=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,f,i.mode,i.filter).then(function(h){return h.buffer}):o.ready.then(function(){const h=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(h),u,d,f,i.mode,i.filter),h})})}else return null}}class RM{constructor(e){this.name=ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Xn.TRIANGLES&&c.mode!==Xn.TRIANGLE_STRIP&&c.mode!==Xn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],f=c[0].count,h=[];for(const g of d){const _=new rt,m=new W,p=new li,S=new W(1,1,1),T=new d_(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&S.fromBufferAttribute(l.SCALE,y),T.setMatrixAt(y,_.compose(m,p,S));for(const y in l)if(y==="_COLOR_0"){const w=l[y];T.instanceColor=new eu(w.array,w.itemSize,w.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);Bt.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),h.push(T)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}}const hp="glTF",ao=12,Bd={JSON:1313821514,BIN:5130562};class CM{constructor(e){this.name=ht.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ao),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ao,r=new DataView(e,ao);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Bd.JSON){const c=new Uint8Array(e,ao+o,a);this.content=n.decode(c)}else if(l===Bd.BIN){const c=ao+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class PM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=ou[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=ou[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],h=Rs[f.componentType];c[d]=h.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,f){i.decodeDracoFile(u,function(h){for(const g in h.attributes){const _=h.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}d(h)},a,c,an,f)})})}}class IM{constructor(){this.name=ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class LM{constructor(){this.name=ht.KHR_MESH_QUANTIZATION}}class dp extends $o{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,d=(n-t)/u,f=d*d,h=f*d,g=e*c,_=g-c,m=-2*h+3*f,p=h-f,S=1-m,T=p-f+d;for(let y=0;y!==a;y++){const w=o[_+y+a],I=o[_+y+l]*u,R=o[g+y+a],L=o[g+y]*u;r[y]=S*w+T*I+m*R+p*L}return r}}const DM=new li;class NM extends dp{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return DM.fromArray(r).normalize().toArray(r),r}}const Xn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Rs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},kd={9728:vn,9729:sn,9984:Ef,9985:Ra,9986:uo,9987:gi},zd={33071:mi,33648:Va,10497:gr},jl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ou={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ir={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},UM={CUBICSPLINE:void 0,LINEAR:No,STEP:Do},Jl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function FM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Wu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yi})),s.DefaultMaterial}function Rr(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ni(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function OM(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(f)}if(i){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function BM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function kM(s){let e;const t=s.extensions&&s.extensions[ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ql(t.attributes):e=s.indices+":"+Ql(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ql(s.targets[n]);return e}function Ql(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function au(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const HM=new rt;class VM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new uM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new jf(this.options.manager):this.textureLoader=new F_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Xu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Rr(r,a,i),Ni(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ht.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(So.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=jl[i.type],a=Rs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new yn(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=jl[i.type],c=Rs[i.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,f=i.byteOffset||0,h=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(h&&h!==d){const p=Math.floor(f/h),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let T=t.cache.get(S);T||(_=new c(a,p*h,i.count*h/u),T=new a_(_,h/u),t.cache.add(S,T)),m=new ku(T,l,f%h/u,g)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),m=new yn(_,l,g);if(i.sparse!==void 0){const p=jl.SCALAR,S=Rs[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,w=new S(o[1],T,i.sparse.count*p),I=new c(o[2],y,i.sparse.count*l);a!==null&&(m=new yn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,L=w.length;R<L;R++){const M=w[R];if(m.setX(M,I[R*l]),l>=2&&m.setY(M,I[R*l+1]),l>=3&&m.setZ(M,I[R*l+2]),l>=4&&m.setW(M,I[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=kd[f.magFilter]||sn,u.minFilter=kd[f.minFilter]||gi,u.wrapS=zd[f.wrapS]||gr,u.wrapT=zd[f.wrapT]||gr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==vn&&u.minFilter!==sn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(f,h){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new on(_);m.needsUpdate=!0,f(m)}),t.load(So.resolveURL(d,r.path),g,void 0,h)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),Ni(d,o),d.userData.mimeType=o.mimeType||zM(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ht.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ht.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ht.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Xf,xi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Wf,xi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Wu}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[ht.KHR_MATERIALS_UNLIT]){const d=i[ht.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new tt(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],an),a.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,qt)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=fi);const u=r.alphaMode||Jl.OPAQUE;if(u===Jl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Jl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==kr&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new xt(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==kr&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==kr){const d=r.emissiveFactor;a.emissive=new tt().setRGB(d[0],d[1],d[2],an)}return r.emissiveTexture!==void 0&&o!==kr&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,qt)),Promise.all(c).then(function(){const d=new o(a);return r.name&&(d.name=r.name),Ni(d,r),t.associations.set(d,{materials:e}),r.extensions&&Rr(i,d,r),d})}createUniqueName(e){const t=At.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Hd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=kM(c),d=i[u];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[ht.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Hd(new Ti,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?FM(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let h=0,g=u.length;h<g;h++){const _=u[h],m=o[h];let p;const S=c[h];if(m.mode===Xn.TRIANGLES||m.mode===Xn.TRIANGLE_STRIP||m.mode===Xn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new c_(_,S):new Un(_,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Xn.TRIANGLE_STRIP?p.geometry=Od(p.geometry,If):m.mode===Xn.TRIANGLE_FAN&&(p.geometry=Od(p.geometry,Jc));else if(m.mode===Xn.LINES)p=new g_(_,S);else if(m.mode===Xn.LINE_STRIP)p=new Gu(_,S);else if(m.mode===Xn.LINE_LOOP)p=new __(_,S);else if(m.mode===Xn.POINTS)p=new x_(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&BM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ni(p,r),m.extensions&&Rr(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let h=0,g=d.length;h<g;h++)t.associations.set(d[h],{meshes:e,primitives:h});if(d.length===1)return r.extensions&&Rr(i,d[0],r),d[0];const f=new ar;r.extensions&&Rr(i,f,r),t.associations.set(f,{meshes:e});for(let h=0,g=d.length;h<g;h++)f.add(d[h]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new _n(Rg.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new qu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ni(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const f=new rt;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Hu(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,f=i.channels.length;d<f;d++){const h=i.channels[d],g=i.samplers[h.sampler],_=h.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,S=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const f=d[0],h=d[1],g=d[2],_=d[3],m=d[4],p=[];for(let S=0,T=f.length;S<T;S++){const y=f[S],w=h[S],I=g[S],R=_[S],L=m[S];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const M=n._createAnimationTracks(y,w,I,R,L);if(M)for(let b=0;b<M.length;b++)p.push(M[b])}return new nu(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],f=c[2];f!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(f,HM)});for(let h=0,g=d.length;h<g;h++)u.add(d[h]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Gf:c.length>1?u=new ar:c.length===1?u=c[0]:u=new Bt,u!==c[0])for(let d=0,f=c.length;d<f;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=o),Ni(u,r),r.extensions&&Rr(n,u,r),r.matrix!==void 0){const d=new rt;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(u);i.associations.set(u,{...d})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ar;n.name&&(r.name=i.createUniqueName(n.name)),Ni(r,n),n.extensions&&Rr(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);const c=u=>{const d=new Map;for(const[f,h]of i.associations)(f instanceof xi||f instanceof on)&&d.set(f,h);return u.traverse(f=>{const h=i.associations.get(f);h!=null&&d.set(f,h)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];ir[r.path]===ir.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(ir[r.path]){case ir.weights:c=zs;break;case ir.rotation:c=Hs;break;case ir.translation:case ir.scale:c=Vs;break;default:switch(n.itemSize){case 1:c=zs;break;case 2:case 3:default:c=Vs;break}break}const u=i.interpolation!==void 0?UM[i.interpolation]:No,d=this._getArrayFromAccessor(n);for(let f=0,h=l.length;f<h;f++){const g=new c(l[f]+"."+ir[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=au(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Hs?NM:dp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function GM(s,e,t){const n=e.attributes,i=new Ki;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new W(l[0],l[1],l[2]),new W(c[0],c[1],c[2])),a.normalized){const u=au(Rs[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new W,l=new W;for(let c=0,u=r.length;c<u;c++){const d=r[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],h=f.min,g=f.max;if(h!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),f.normalized){const _=au(Rs[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Ei;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Hd(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=ou[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return yt.workingColorSpace!==an&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),Ni(s,e),GM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?OM(s,e.targets,t):s})}function Ui(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function fp(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var On={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Gs={duration:.5,overwrite:!1,delay:0},Qu,cn,Ut,$n=1e8,Lt=1/$n,lu=Math.PI*2,WM=lu/4,XM=0,pp=Math.sqrt,YM=Math.cos,$M=Math.sin,ln=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},$i=function(e){return typeof e=="number"},eh=function(e){return typeof e>"u"},Mi=function(e){return typeof e=="object"},Tn=function(e){return e!==!1},th=function(){return typeof window<"u"},ba=function(e){return zt(e)||ln(e)},mp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},pn=Array.isArray,cu=/(?:-?\.?\d|\.)+/gi,gp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Es=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ec=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_p=/[+-]=-?[.\d]+/,xp=/[^,'"\[\]\s]+/gi,qM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ft,hi,uu,nh,Bn={},qa={},vp,yp=function(e){return(qa=Ws(e,Bn))&&Rn},ih=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Oo=function(e,t){return!t&&console.warn(e)},Sp=function(e,t){return e&&(Bn[e]=t)&&qa&&(qa[e]=t)||Bn},Bo=function(){return 0},KM={suppressEvents:!0,isStart:!0,kill:!1},Ua={suppressEvents:!0,kill:!1},ZM={suppressEvents:!0},rh={},pr=[],hu={},Mp,In={},tc={},Vd=30,Fa=[],sh="",oh=function(e){var t=e[0],n,i;if(Mi(t)||zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Fa.length;i--&&!Fa[i].targetTest(t););n=Fa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Yp(e[i],n)))||e.splice(i,1);return e},Hr=function(e){return e._gsap||oh(qn(e))[0]._gsap},Ep=function(e,t,n){return(n=e[t])&&zt(n)?e[t]():eh(n)&&e.getAttribute&&e.getAttribute(t)||n},bn=function(e,t){return(e=e.split(",")).forEach(t)||e},Wt=function(e){return Math.round(e*1e5)/1e5||0},Kt=function(e){return Math.round(e*1e7)/1e7||0},Cs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},jM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ka=function(){var e=pr.length,t=pr.slice(0),n,i;for(hu={},pr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ah=function(e){return!!(e._initted||e._startAt||e.add)},Tp=function(e,t,n,i){pr.length&&!cn&&Ka(),e.render(t,n,!!(cn&&t<0&&ah(e))),pr.length&&!cn&&Ka()},bp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(xp).length<2?t:ln(e)?e.trim():e},Ap=function(e){return e},kn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},JM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ws=function(e,t){for(var n in t)e[n]=t[n];return e},Gd=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Mi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Za=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Eo=function(e){var t=e.parent||Ft,n=e.keyframes?JM(pn(e.keyframes)):kn;if(Tn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},QM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},wp=function(e,t,n,i,r){var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ll=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},xr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Vr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},eE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},du=function(e,t,n,i){return e._startAt&&(cn?e._startAt.revert(Ua):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},tE=function s(e){return!e||e._ts&&s(e.parent)},Wd=function(e){return e._repeat?Xs(e._tTime,e=e.duration()+e._rDelay)*e:0},Xs=function(e,t){var n=Math.floor(e=Kt(e/t));return e&&n===e?n-1:n},ja=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},cl=function(e){return e._end=Kt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Lt)||0))},ul=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Kt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),cl(e),n._dirty||Vr(n,e)),e},Rp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ja(e.rawTime(),t),(!t._dur||Ko(0,t.totalDuration(),n)-t._tTime>Lt)&&t.render(n,!0)),Vr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Lt}},pi=function(e,t,n,i){return t.parent&&xr(t),t._start=Kt(($i(n)?n:n||e!==Ft?Wn(e,n,t):e._time)+t._delay),t._end=Kt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),wp(e,t,"_first","_last",e._sort?"_start":0),fu(t)||(e._recent=t),i||Rp(e,t),e._ts<0&&ul(e,e._tTime),e},Cp=function(e,t){return(Bn.ScrollTrigger||ih("scrollTrigger",t))&&Bn.ScrollTrigger.create(t,e)},Pp=function(e,t,n,i,r){if(ch(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!cn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Mp!==Ln.frame)return pr.push(e),e._lazy=[r,i],1},nE=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},fu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},iE=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&nE(e)&&!(!e._initted&&fu(e))||(e._ts<0||e._dp._ts<0)&&!fu(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=Ko(0,e._tDur,t),u=Xs(l,a),e._yoyo&&u&1&&(o=1-o),u!==Xs(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||cn||i||e._zTime===Lt||!t&&e._zTime){if(!e._initted&&Pp(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Lt:0),n||(n=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&du(e,t,n,!0),e._onUpdate&&!n&&Fn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Fn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&xr(e,1),!n&&!cn&&(Fn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},rE=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ys=function(e,t,n,i){var r=e._repeat,o=Kt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Kt(o*(r+1)+e._rDelay*r):o,a>0&&!i&&ul(e,e._tTime=e._tDur*a),e.parent&&cl(e),n||Vr(e.parent,e),e},Xd=function(e){return e instanceof xn?Vr(e):Ys(e,e._dur)},sE={_start:0,endTime:Bo,totalDuration:Bo},Wn=function s(e,t,n){var i=e.labels,r=e._recent||sE,o=e.duration()>=$n?r.endTime(!1):e._dur,a,l,c;return ln(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(pn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},To=function(e,t,n){var i=$i(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Tn(l.vars.inherit)&&l.parent;o.immediateRender=Tn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new $t(t[0],o,t[r+1])},yr=function(e,t){return e||e===0?t(e):t},Ko=function(e,t,n){return n<e?e:n>t?t:n},fn=function(e,t){return!ln(e)||!(t=qM.exec(e))?"":t[1]},oE=function(e,t,n){return yr(n,function(i){return Ko(e,t,i)})},pu=[].slice,Ip=function(e,t){return e&&Mi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Mi(e[0]))&&!e.nodeType&&e!==hi},aE=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return ln(i)&&!t||Ip(i,1)?(r=n).push.apply(r,qn(i)):n.push(i)})||n},qn=function(e,t,n){return Ut&&!t&&Ut.selector?Ut.selector(e):ln(e)&&!n&&(uu||!$s())?pu.call((t||nh).querySelectorAll(e),0):pn(e)?aE(e,n):Ip(e)?pu.call(e,0):e?[e]:[]},mu=function(e){return e=qn(e)[0]||Oo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return qn(t,n.querySelectorAll?n:n===e?Oo("Invalid scope")||nh.createElement("div"):e)}},Lp=function(e){return e.sort(function(){return .5-Math.random()})},Dp=function(e){if(zt(e))return e;var t=Mi(e)?e:{each:e},n=Gr(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,d=i;return ln(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],d=i[1]),function(f,h,g){var _=(g||t).length,m=o[_],p,S,T,y,w,I,R,L,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,$n])[1],!M){for(R=-$n;R<(R=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=o[_]=[],p=l?Math.min(M,_)*u-.5:i%M,S=M===$n?0:l?_*d/M-.5:i/M|0,R=0,L=$n,I=0;I<_;I++)T=I%M-p,y=S-(I/M|0),m[I]=w=c?Math.abs(c==="y"?y:T):pp(T*T+y*y),w>R&&(R=w),w<L&&(L=w);i==="random"&&Lp(m),m.max=R-L,m.min=L,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=fn(t.amount||t.each)||0,n=n&&_<0?Gp(n):n}return _=(m[f]-m.min)/m.max||0,Kt(m.b+(n?n(_):_)*m.v)+m.u}},gu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Kt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+($i(n)?0:fn(n))}},Np=function(e,t){var n=pn(e),i,r;return!n&&Mi(e)&&(i=n=e.radius||$n,e.values?(e=qn(e.values),(r=!$i(e[0]))&&(i*=i)):e=gu(e.increment)),yr(t,n?zt(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=$n,u=0,d=e.length,f,h;d--;)r?(f=e[d].x-a,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!i||c<=i?e[u]:o,r||u===o||$i(o)?u:u+fn(o)}:gu(e))},Up=function(e,t,n,i){return yr(pn(e)?!t:n===!0?!!(n=0):!i,function(){return pn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},lE=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},cE=function(e,t){return function(n){return e(parseFloat(n))+(t||fn(n))}},uE=function(e,t,n){return Op(e,t,0,1,n)},Fp=function(e,t,n){return yr(n,function(i){return e[~~t(i)]})},hE=function s(e,t,n){var i=t-e;return pn(e)?Fp(e,s(0,e.length),t):yr(n,function(r){return(i+(r-e)%i)%i+e})},dE=function s(e,t,n){var i=t-e,r=i*2;return pn(e)?Fp(e,s(0,e.length-1),t):yr(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},ko=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?xp:cu),n+=e.substr(t,i-t)+Up(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Op=function(e,t,n,i,r){var o=t-e,a=i-n;return yr(r,function(l){return n+((l-e)/o*a||0)})},fE=function s(e,t,n,i){var r=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!r){var o=ln(e),a={},l,c,u,d,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(pn(e)&&!pn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(s(e[c-1],e[c]));d--,r=function(g){g*=d;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=Ws(pn(e)?[]:{},e));if(!u){for(l in t)lh.call(a,e,l,"get",t[l]);r=function(g){return dh(g,a)||(o?e.p:e)}}}return yr(n,r)},Yd=function(e,t,n){var i=e.labels,r=$n,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Fn=function(e,t,n){var i=e.vars,r=i[t],o=Ut,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&pr.length&&Ka(),a&&(Ut=a),u=l?r.apply(c,l):r.call(c),Ut=o,u},fo=function(e){return xr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!cn),e.progress()<1&&Fn(e,"onInterrupt"),e},Ts,Bp=[],kp=function(e){if(e)if(e=!e.name&&e.default||e,th()||e.headless){var t=e.name,n=zt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Bo,render:dh,add:lh,kill:CE,modifier:RE,rawVars:0},o={targetTest:0,get:0,getSetter:hh,aliases:{},register:0};if($s(),e!==i){if(In[t])return;kn(i,kn(Za(e,r),o)),Ws(i.prototype,Ws(r,Za(e,o))),In[i.prop=t]=i,e.targetTest&&(Fa.push(i),rh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Sp(t,i),e.register&&e.register(Rn,i,An)}else Bp.push(e)},Pt=255,po={aqua:[0,Pt,Pt],lime:[0,Pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pt],navy:[0,0,128],white:[Pt,Pt,Pt],olive:[128,128,0],yellow:[Pt,Pt,0],orange:[Pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pt,0,0],pink:[Pt,192,203],cyan:[0,Pt,Pt],transparent:[Pt,Pt,Pt,0]},nc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Pt+.5|0},zp=function(e,t,n){var i=e?$i(e)?[e>>16,e>>8&Pt,e&Pt]:0:po.black,r,o,a,l,c,u,d,f,h,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),po[e])i=po[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Pt,i&Pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Pt,e&Pt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(cu),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=nc(l+1/3,r,o),i[1]=nc(l,r,o),i[2]=nc(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(gp),n&&i.length<4&&(i[3]=1),i}else i=e.match(cu)||po.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/Pt,o=i[1]/Pt,a=i[2]/Pt,d=Math.max(r,o,a),f=Math.min(r,o,a),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===r?(o-a)/h+(o<a?6:0):d===o?(a-r)/h+2:(r-o)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Hp=function(e){var t=[],n=[],i=-1;return e.split(mr).forEach(function(r){var o=r.match(Es)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},$d=function(e,t,n){var i="",r=(e+i).match(mr),o=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!r)return e;if(r=r.map(function(f){return(f=zp(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Hp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(mr,"1").split(Es),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(mr),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},mr=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in po)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),pE=/hsl[a]?\(/,Vp=function(e){var t=e.join(" "),n;if(mr.lastIndex=0,mr.test(t))return n=pE.test(t),e[1]=$d(e[1],n),e[0]=$d(e[0],n,Hp(e[1])),!0},zo,Ln=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,d,f,h,g=function _(m){var p=s()-i,S=m===!0,T,y,w,I;if((p>e||p<0)&&(n+=p-t),i+=p,w=i-n,T=w-o,(T>0||S)&&(I=++d.frame,f=w-d.time*1e3,d.time=w=w/1e3,o+=T+(T>=r?4:r-T),y=1),S||(l=c(_)),y)for(h=0;h<a.length;h++)a[h](w,f,I,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){vp&&(!uu&&th()&&(hi=uu=window,nh=hi.document||{},Bn.gsap=Rn,(hi.gsapVersions||(hi.gsapVersions=[])).push(Rn.version),yp(qa||hi.GreenSockGlobals||!hi.gsap&&hi||{}),Bp.forEach(kp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,o-d.time*1e3+1|0)},zo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),zo=0,c=Bo},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),o=d.time*1e3+r},add:function(m,p,S){var T=p?function(y,w,I,R){m(y,w,I,R),d.remove(T)}:m;return d.remove(m),a[S?"unshift":"push"](T),$s(),T},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&h>=p&&h--},_listeners:a},d}(),$s=function(){return!zo&&Ln.wake()},_t={},mE=/^[\d.\-M][\d.\-,\s]/,gE=/["']/g,_E=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(gE,"").trim():+c,i=l.substr(a+1).trim();return t},xE=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},vE=function(e){var t=(e+"").split("("),n=_t[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[_E(t[1])]:xE(e).split(",").map(bp)):_t._CE&&mE.test(e)?_t._CE("",e):n},Gp=function(e){return function(t){return 1-e(1-t)}},Wp=function s(e,t){for(var n=e._first,i;n;)n instanceof xn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Gr=function(e,t){return e&&(zt(e)?e:_t[e]||vE(e))||t},Qr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return bn(e,function(a){_t[a]=Bn[a]=r,_t[o=a.toLowerCase()]=n;for(var l in r)_t[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_t[a+"."+l]=r[l]}),r},Xp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ic=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/lu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*$M((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Xp(a);return r=lu/r,l.config=function(c,u){return s(e,c,u)},l},rc=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Xp(n);return i.config=function(r){return s(e,r)},i};bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Qr(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});_t.Linear.easeNone=_t.none=_t.Linear.easeIn;Qr("Elastic",ic("in"),ic("out"),ic());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Qr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Qr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Qr("Circ",function(s){return-(pp(1-s*s)-1)});Qr("Sine",function(s){return s===1?1:-YM(s*WM)+1});Qr("Back",rc("in"),rc("out"),rc());_t.SteppedEase=_t.steps=Bn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-Lt;return function(a){return((i*Ko(0,o,a)|0)+r)*n}}};Gs.ease=_t["quad.out"];bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return sh+=s+","+s+"Params,"});var Yp=function(e,t){this.id=XM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ep,this.set=t?t.getSetter:hh},Ho=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ys(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),zo||Ln.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ys(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if($s(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ul(this,n),!r._dp||r.parent||Rp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&pi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Lt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Tp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Wd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Wd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Xs(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Lt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?ja(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Lt?0:this._rts,this.totalTime(Ko(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),cl(this),eE(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($s(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Lt&&(this._tTime-=Lt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&pi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Tn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ja(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ZM);var i=cn;return cn=n,ah(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),cn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Xd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Xd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Wn(this,n),Tn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Tn(i)),this._dur||(this._zTime=-Lt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Lt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Lt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Lt)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=zt(n)?n:Ap,a=function(){var c=i.then;i.then=null,zt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){fo(this)},s}();kn(Ho.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Lt,_prom:0,_ps:!1,_rts:1});var xn=function(s){fp(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Tn(n.sortChildren),Ft&&pi(n.parent||Ft,Ui(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Cp(Ui(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return To(0,arguments,this),this},t.from=function(i,r,o){return To(1,arguments,this),this},t.fromTo=function(i,r,o,a){return To(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,Eo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new $t(i,r,Wn(this,o),1),this},t.call=function(i,r,o){return pi(this,$t.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new $t(i,o,Wn(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,Eo(o).immediateRender=Tn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},t.staggerFromTo=function(i,r,o,a,l,c,u,d){return a.startAt=o,Eo(a).immediateRender=Tn(a.immediateRender),this.staggerTo(i,r,a,l,c,u,d)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Kt(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,h,g,_,m,p,S,T,y,w,I,R;if(this!==Ft&&u>l&&i>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,y=this._start,T=this._ts,p=!T,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(I=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(f=Kt(u%m),u===l?(_=this._repeat,f=c):(w=Kt(u/m),_=~~w,_&&_===w&&(f=c,_--),f>c&&(f=c)),w=Xs(this._tTime,m),!a&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),I&&_&1&&(f=c-f,R=1),_!==w&&!this._lock){var L=I&&w&1,M=L===(I&&_&1);if(_<w&&(L=!L),a=L?0:u%c?c:u,this._lock=1,this.render(a||(R?0:Kt(_*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&Fn(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Wp(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=rE(this,Kt(a),Kt(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!r&&!w&&(Fn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(h=this._first;h;){if(g=h._next,(h._act||f>=h._start)&&h._ts&&S!==h){if(h.parent!==this)return this.render(i,r,o);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,r,o),f!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=-Lt);break}}h=g}else{h=this._last;for(var b=i<0?i:f;h;){if(g=h._prev,(h._act||b<=h._end)&&h._ts&&S!==h){if(h.parent!==this)return this.render(i,r,o);if(h.render(h._ts>0?(b-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(b-h._start)*h._ts,r,o||cn&&ah(h)),f!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=b?-Lt:Lt);break}}h=g}}if(S&&!r&&(this.pause(),S.render(f>=a?0:-Lt)._zTime=f>=a?1:-1,this._ts))return this._start=y,cl(this),this.render(i,r,o);this._onUpdate&&!r&&Fn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&xr(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(Fn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if($i(r)||(r=Wn(this,r,i)),!(i instanceof Ho)){if(pn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(ln(i))return this.addLabel(i,r);if(zt(i))i=$t.delayedCall(0,i);else return this}return this!==i?pi(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-$n);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof $t?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return ln(i)?this.removeLabel(i):zt(i)?this.killTweensOf(i):(i.parent===this&&ll(this,i),i===this._recent&&(this._recent=this._last),Vr(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Kt(Ln.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=Wn(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=$t.delayedCall(0,r||Bo,o);return a.data="isPause",this._hasPause=1,pi(this,a,Wn(this,i))},t.removePause=function(i){var r=this._first;for(i=Wn(this,i);r;)r._start===i&&r.data==="isPause"&&xr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)lr!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=qn(i),l=this._first,c=$i(r),u;l;)l instanceof $t?jM(l._targets,a)&&(c?(!lr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=Wn(o,i),l=r,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,g=$t.to(o,kn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Lt,onStart:function(){if(o.pause(),!h){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Ys(g,m,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,d||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,kn({startAt:{time:Wn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Yd(this,Wn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Yd(this,Wn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Lt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Vr(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Vr(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=$n,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,pi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Ys(o,o===Ft&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ft._ts&&(Tp(Ft,ja(i,Ft)),Mp=Ln.frame),Ln.frame>=Vd){Vd+=On.autoSleep||120;var r=Ft._first;if((!r||!r._ts)&&On.autoSleep&&Ln._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Ln.sleep()}}},e}(Ho);kn(xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var yE=function(e,t,n,i,r,o,a){var l=new An(this._pt,e,t,0,1,Jp,null,r),c=0,u=0,d,f,h,g,_,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ko(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),f=n.match(ec)||[];d=ec.exec(i);)g=d[0],_=i.substring(c,d.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Cs(m,g)-m:parseFloat(g)-m,m:h&&h<4?Math.round:0},c=ec.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(_p.test(i)||p)&&(l.e=0),this._pt=l,l},lh=function(e,t,n,i,r,o,a,l,c,u){zt(i)&&(i=i(r||0,e,o));var d=e[t],f=n!=="get"?n:zt(d)?c?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=zt(d)?c?bE:Zp:uh,g;if(ln(i)&&(~i.indexOf("random(")&&(i=ko(i)),i.charAt(1)==="="&&(g=Cs(f,i)+(fn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||_u)return!isNaN(f*i)&&i!==""?(g=new An(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?wE:jp,0,h),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(t in e)&&ih(t,i),yE.call(this,e,t,f,i,h,l||On.stringFilter,c))},SE=function(e,t,n,i,r){if(zt(e)&&(e=bo(e,r,t,n,i)),!Mi(e)||e.style&&e.nodeType||pn(e)||mp(e))return ln(e)?bo(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=bo(e[a],r,t,n,i);return o},$p=function(e,t,n,i,r,o){var a,l,c,u;if(In[e]&&(a=new In[e]).init(r,a.rawVars?t[e]:SE(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new An(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Ts))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},lr,_u,ch=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,h=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,T=e._overwrite==="auto"&&!Qu,y=e.timeline,w,I,R,L,M,b,D,$,H,ee,ne,K,Q;if(y&&(!f||!r)&&(r="none"),e._ease=Gr(r,Gs.ease),e._yEase=d?Gp(Gr(d===!0?r:d,Gs.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if($=m[0]?Hr(m[0]).harness:0,K=$&&i[$.prop],w=Za(i,rh),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!h?_.render(-1,!0):_.revert(u&&g?Ua:KM),_._lazy=0),o){if(xr(e._startAt=$t.set(m,kn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Tn(l),startAt:null,delay:0,onUpdate:c&&function(){return Fn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(cn||!a&&!h)&&e._startAt.revert(Ua),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),R=kn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Tn(l),immediateRender:a,stagger:0,parent:p},w),K&&(R[$.prop]=K),xr(e._startAt=$t.set(m,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(cn?e._startAt.revert(Ua):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,Lt,Lt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Tn(l)||l&&!g,I=0;I<m.length;I++){if(M=m[I],D=M._gsap||oh(m)[I]._gsap,e._ptLookup[I]=ee={},hu[D.id]&&pr.length&&Ka(),ne=S===m?I:S.indexOf(M),$&&(H=new $).init(M,K||w,e,ne,S)!==!1&&(e._pt=L=new An(e._pt,M,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(Z){ee[Z]=L}),H.priority&&(b=1)),!$||K)for(R in w)In[R]&&(H=$p(R,w,e,ne,M,S))?H.priority&&(b=1):ee[R]=L=lh.call(e,M,R,"get",w[R],ne,S,0,i.stringFilter);e._op&&e._op[I]&&e.kill(M,e._op[I]),T&&e._pt&&(lr=e,Ft.killTweensOf(M,ee,e.globalTime(t)),Q=!e.parent,lr=0),e._pt&&l&&(hu[D.id]=1)}b&&Qp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Q,f&&t<=0&&y.render($n,!0,!0)},ME=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return _u=1,e.vars[t]="+=0",ch(e,a),_u=0,l?Oo(t+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,d.e&&(d.e=Wt(n)+fn(d.e)),d.b&&(d.b=u.s+fn(d.b))},EE=function(e,t){var n=e[0]?Hr(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=Ws({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},TE=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(pn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},bo=function(e,t,n,i,r){return zt(e)?e.call(t,n,i,r):ln(e)&&~e.indexOf("random(")?ko(e):e},qp=sh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Kp={};bn(qp+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Kp[s]=1});var $t=function(s){fp(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Eo(i))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,S=i.parent||Ft,T=(pn(n)||mp(n)?$i(n[0]):"length"in i)?[n]:qn(n),y,w,I,R,L,M,b,D;if(a._targets=T.length?oh(T):Oo("GSAP target "+n+" not found. https://gsap.com",!On.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,g||f||ba(c)||ba(u)){if(i=a.vars,y=a.timeline=new xn({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:T}),y.kill(),y.parent=y._dp=Ui(a),y._start=0,f||ba(c)||ba(u)){if(R=T.length,b=f&&Dp(f),Mi(f))for(L in f)~qp.indexOf(L)&&(D||(D={}),D[L]=f[L]);for(w=0;w<R;w++)I=Za(i,Kp),I.stagger=0,p&&(I.yoyoEase=p),D&&Ws(I,D),M=T[w],I.duration=+bo(c,Ui(a),w,M,T),I.delay=(+bo(u,Ui(a),w,M,T)||0)-a._delay,!f&&R===1&&I.delay&&(a._delay=u=I.delay,a._start+=u,I.delay=0),y.to(M,I,b?b(w,M,T):0),y._ease=_t.none;y.duration()?c=u=0:a.timeline=0}else if(g){Eo(kn(y.vars.defaults,{ease:"none"})),y._ease=Gr(g.ease||i.ease||"none");var $=0,H,ee,ne;if(pn(g))g.forEach(function(K){return y.to(T,K,">")}),y.duration();else{I={};for(L in g)L==="ease"||L==="easeEach"||TE(L,g[L],I,g.easeEach);for(L in I)for(H=I[L].sort(function(K,Q){return K.t-Q.t}),$=0,w=0;w<H.length;w++)ee=H[w],ne={ease:ee.e,duration:(ee.t-(w?H[w-1].t:0))/100*c},ne[L]=ee.v,y.to(T,ne,$),$+=ne.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return h===!0&&!Qu&&(lr=Ui(a),Ft.killTweensOf(T),lr=0),pi(S,Ui(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!g&&a._start===Kt(S._time)&&Tn(d)&&tE(Ui(a))&&S.data!=="nested")&&(a._tTime=-Lt,a.render(Math.max(0,-u)||0)),m&&Cp(Ui(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Lt&&!u?l:i<Lt?0:i,f,h,g,_,m,p,S,T,y;if(!c)iE(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,T=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,r,o);if(f=Kt(d%_),d===l?(g=this._repeat,f=c):(m=Kt(d/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(y=this._yEase,f=c-f),m=Xs(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=d,this;g!==m&&(T&&this._yEase&&Wp(T,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Kt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Pp(this,u?i:f,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(y||this._ease)(f/c),this._from&&(this.ratio=S=1-S),!a&&d&&!r&&!m&&(Fn(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(S,h.d),h=h._next;T&&T.render(i<0?i:T._dur*T._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&du(this,i,r,o),Fn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&Fn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&du(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&xr(this,1),!r&&!(u&&!a)&&(d||a||p)&&(Fn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){zo||Ln.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ch(this,c),u=this._ease(c/this._dur),ME(this,i,r,o,a,u,c,l)?this.resetTo(i,r,o,a,1):(ul(this,0),this.parent||wp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?fo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!cn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,lr&&lr.vars.overwrite!==!0)._first||fo(this),this.parent&&o!==this.timeline.totalDuration()&&Ys(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?qn(i):a,c=this._ptLookup,u=this._pt,d,f,h,g,_,m,p;if((!r||r==="all")&&QM(a,l))return r==="all"&&(this._pt=0),fo(this);for(d=this._op=this._op||[],r!=="all"&&(ln(r)&&(_={},bn(r,function(S){return _[S]=1}),r=_),r=EE(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],r==="all"?(d[p]=r,g=f,h={}):(h=d[p]=d[p]||{},g=r);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&ll(this,m,"_pt"),delete f[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&u&&fo(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return To(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return To(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Ft.killTweensOf(i,r,o)},e}(Ho);kn($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bn("staggerTo,staggerFrom,staggerFromTo",function(s){$t[s]=function(){var e=new xn,t=pu.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var uh=function(e,t,n){return e[t]=n},Zp=function(e,t,n){return e[t](n)},bE=function(e,t,n,i){return e[t](i.fp,n)},AE=function(e,t,n){return e.setAttribute(t,n)},hh=function(e,t){return zt(e[t])?Zp:eh(e[t])&&e.setAttribute?AE:uh},jp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},wE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Jp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},dh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},RE=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},CE=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ll(this,t,"_pt"):t.dep||(n=1),t=i;return!n},PE=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Qp=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},An=function(){function s(t,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||jp,this.d=l||this,this.set=c||uh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=PE,this.m=n,this.mt=r,this.tween=i},s}();bn(sh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return rh[s]=1});Bn.TweenMax=Bn.TweenLite=$t;Bn.TimelineLite=Bn.TimelineMax=xn;Ft=new xn({sortChildren:!1,defaults:Gs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});On.stringFilter=Vp;var Wr=[],Oa={},IE=[],qd=0,LE=0,sc=function(e){return(Oa[e]||IE).map(function(t){return t()})},xu=function(){var e=Date.now(),t=[];e-qd>2&&(sc("matchMediaInit"),Wr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=hi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),sc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),qd=e,sc("matchMedia"))},em=function(){function s(t,n){this.selector=n&&mu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=LE++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){zt(n)&&(r=i,i=n,n=zt);var o=this,a=function(){var c=Ut,u=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=mu(r)),Ut=o,d=i.apply(o,arguments),zt(d)&&o._r.push(d),Ut=c,o.selector=u,o.isReverted=!1,d};return o.last=a,n===zt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Ut;Ut=null,n(this),Ut=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof $t&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof xn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof $t)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Wr.length;o--;)Wr[o].id===this.id&&Wr.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),DE=function(){function s(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Mi(n)||(n={matches:n});var o=new em(0,r||this.scope),a=o.conditions={},l,c,u;Ut&&!o.selector&&(o.selector=Ut.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=hi.matchMedia(n[c]),l&&(Wr.indexOf(o)<0&&Wr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(xu):l.addEventListener("change",xu)));return u&&i(o,function(d){return o.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Ja={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return kp(i)})},timeline:function(e){return new xn(e)},getTweensOf:function(e,t){return Ft.getTweensOf(e,t)},getProperty:function(e,t,n,i){ln(e)&&(e=qn(e)[0]);var r=Hr(e||{}).get,o=n?Ap:bp;return n==="native"&&(n=""),e&&(t?o((In[t]&&In[t].get||r)(e,t,n,i)):function(a,l,c){return o((In[a]&&In[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=qn(e),e.length>1){var i=e.map(function(u){return Rn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var d=r;d--;)i[d](u)}}e=e[0]||{};var o=In[t],a=Hr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var d=new o;Ts._pt=0,d.init(e,n?u+n:u,Ts,0,[e]),d.render(1,d),Ts._pt&&dh(1,Ts)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=Rn.to(e,kn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return Ft.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Gr(e.ease,Gs.ease)),Gd(Gs,e||{})},config:function(e){return Gd(On,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!In[a]&&!Bn[a]&&Oo(t+" effect requires "+a+" plugin.")}),tc[t]=function(a,l,c){return n(qn(a),kn(l||{},r),c)},o&&(xn.prototype[t]=function(a,l,c){return this.add(tc[t](a,Mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){_t[e]=Gr(t)},parseEase:function(e,t){return arguments.length?Gr(e,t):_t},getById:function(e){return Ft.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new xn(e),i,r;for(n.smoothChildTiming=Tn(e.smoothChildTiming),Ft.remove(n),n._dp=0,n._time=n._tTime=Ft._time,i=Ft._first;i;)r=i._next,(t||!(!i._dur&&i instanceof $t&&i.vars.onComplete===i._targets[0]))&&pi(n,i,i._start-i._delay),i=r;return pi(Ft,n,0),n},context:function(e,t){return e?new em(e,t):Ut},matchMedia:function(e){return new DE(e)},matchMediaRefresh:function(){return Wr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||xu()},addEventListener:function(e,t){var n=Oa[e]||(Oa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Oa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:hE,wrapYoyo:dE,distribute:Dp,random:Up,snap:Np,normalize:uE,getUnit:fn,clamp:oE,splitColor:zp,toArray:qn,selector:mu,mapRange:Op,pipe:lE,unitize:cE,interpolate:fE,shuffle:Lp},install:yp,effects:tc,ticker:Ln,updateRoot:xn.updateRoot,plugins:In,globalTimeline:Ft,core:{PropTween:An,globals:Sp,Tween:$t,Timeline:xn,Animation:Ho,getCache:Hr,_removeLinkedListItem:ll,reverting:function(){return cn},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return Qu=e}}};bn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Ja[s]=$t[s]});Ln.add(xn.updateRoot);Ts=Ja.to({},{duration:0});var NE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},UE=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=NE(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},oc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(ln(r)&&(l={},bn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}UE(a,r)}}}},Rn=Ja.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)cn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},oc("roundProps",gu),oc("modifiers"),oc("snap",Np))||Ja;$t.version=xn.version=Rn.version="3.13.0";vp=1;th()&&$s();_t.Power0;_t.Power1;_t.Power2;_t.Power3;_t.Power4;_t.Linear;_t.Quad;_t.Cubic;_t.Quart;_t.Quint;_t.Strong;_t.Elastic;_t.Back;_t.SteppedEase;_t.Bounce;_t.Sine;_t.Expo;_t.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Kd,cr,Ps,fh,zr,Zd,ph,FE=function(){return typeof window<"u"},qi={},Ur=180/Math.PI,Is=Math.PI/180,gs=Math.atan2,jd=1e8,mh=/([A-Z])/g,OE=/(left|right|width|margin|padding|x)/i,BE=/[\s,\(]\S/,_i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},vu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},HE=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},tm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},nm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},VE=function(e,t,n){return e.style[t]=n},GE=function(e,t,n){return e.style.setProperty(t,n)},WE=function(e,t,n){return e._gsap[t]=n},XE=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},YE=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},$E=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Ot="transform",wn=Ot+"Origin",qE=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in qi&&r){if(this.tfm=this.tfm||{},e!=="transform")e=_i[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Fi(i,a)}):this.tfm[e]=o.x?o[e]:Fi(i,e),e===wn&&(this.tfm.zOrigin=o.zOrigin);else return _i.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Ot)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(wn,t,"")),e=Ot}(r||t)&&this.props.push(e,t,r[e])},im=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},KE=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(mh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=ph(),(!r||!r.isStart)&&!n[Ot]&&(im(n),i.zOrigin&&n[wn]&&(n[wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},rm=function(e,t){var n={target:e,props:[],revert:KE,save:qE};return e._gsap||Rn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},sm,yu=function(e,t){var n=cr.createElementNS?cr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):cr.createElement(e);return n&&n.style?n:cr.createElement(e)},Kn=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(mh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,qs(t)||t,1)||""},Jd="O,Moz,ms,Ms,Webkit".split(","),qs=function(e,t,n){var i=t||zr,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Jd[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Jd[o]:"")+e},Su=function(){FE()&&window.document&&(Kd=window,cr=Kd.document,Ps=cr.documentElement,zr=yu("div")||{style:{}},yu("div"),Ot=qs(Ot),wn=Ot+"Origin",zr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",sm=!!qs("perspective"),ph=Rn.core.reverting,fh=1)},Qd=function(e){var t=e.ownerSVGElement,n=yu("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Ps.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Ps.removeChild(n),r},ef=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},om=function(e){var t,n;try{t=e.getBBox()}catch{t=Qd(e),n=1}return t&&(t.width||t.height)||n||(t=Qd(e)),t&&!t.width&&!t.x&&!t.y?{x:+ef(e,["x","cx","x1"])||0,y:+ef(e,["y","cy","y1"])||0,width:0,height:0}:t},am=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&om(e))},Kr=function(e,t){if(t){var n=e.style,i;t in qi&&t!==wn&&(t=Ot),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(mh,"-$1").toLowerCase())):n.removeAttribute(t)}},ur=function(e,t,n,i,r,o){var a=new An(e._pt,t,n,0,1,o?nm:tm);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},tf={deg:1,rad:1,turn:1},ZE={grid:1,flex:1},vr=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=zr.style,l=OE.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",h=i==="%",g,_,m,p;if(i===o||!r||tf[i]||tf[o])return r;if(o!=="px"&&!f&&(r=s(e,t,n,"px")),p=e.getCTM&&am(e),(h||o==="%")&&(qi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Wt(h?r/g*d:r/100*g);if(a[l?"width":"height"]=d+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===cr||!_.appendChild)&&(_=cr.body),m=_._gsap,m&&h&&m.width&&l&&m.time===Ln.time&&!m.uncache)return Wt(r/m.width*d);if(h&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=d+i,g=e[u],S?e.style[t]=S:Kr(e,t)}else(h||o==="%")&&!ZE[Kn(_,"display")]&&(a.position=Kn(e,"position")),_===e&&(a.position="static"),_.appendChild(zr),g=zr[u],_.removeChild(zr),a.position="absolute";return l&&h&&(m=Hr(_),m.time=Ln.time,m.width=_[u]),Wt(f?g*r/d:g&&r?d/g*r:0)},Fi=function(e,t,n,i){var r;return fh||Su(),t in _i&&t!=="transform"&&(t=_i[t],~t.indexOf(",")&&(t=t.split(",")[0])),qi[t]&&t!=="transform"?(r=Go(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:el(Kn(e,wn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Qa[t]&&Qa[t](e,t,n)||Kn(e,t)||Ep(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?vr(e,t,r,n)+n:r},jE=function(e,t,n,i){if(!n||n==="none"){var r=qs(t,e,1),o=r&&Kn(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=Kn(e,"borderTopColor"))}var a=new An(this._pt,e.style,t,0,1,Jp),l=0,c=0,u,d,f,h,g,_,m,p,S,T,y,w;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Kn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Kn(e,t)||i,_?e.style[t]=_:Kr(e,t)),u=[n,i],Vp(u),n=u[0],i=u[1],f=n.match(Es)||[],w=i.match(Es)||[],w.length){for(;d=Es.exec(i);)m=d[0],S=i.substring(l,d.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(h=parseFloat(_)||0,y=_.substr((h+"").length),m.charAt(1)==="="&&(m=Cs(h,m)+y),p=parseFloat(m),T=m.substr((p+"").length),l=Es.lastIndex-T.length,T||(T=T||On.units[t]||y,l===i.length&&(i+=T,a.e+=T)),y!==T&&(h=vr(e,t,_,T)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:h,c:p-h,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?nm:tm;return _p.test(i)&&(a.e=0),this._pt=a,a},nf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},JE=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=nf[n]||n,t[1]=nf[i]||i,t.join(" ")},QE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],qi[a]&&(l=1,a=a==="transformOrigin"?wn:Ot),Kr(n,a);l&&(Kr(n,Ot),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Go(n,1),o.uncache=1,im(i)))}},Qa={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new An(e._pt,t,n,0,0,QE);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Vo=[1,0,0,1,0,0],lm={},cm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},rf=function(e){var t=Kn(e,Ot);return cm(t)?Vo:t.substr(7).match(gp).map(Wt)},gh=function(e,t){var n=e._gsap||Hr(e),i=e.style,r=rf(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Vo:r):(r===Vo&&!e.offsetParent&&e!==Ps&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ps.appendChild(e)),r=rf(e),l?i.display=l:Kr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ps.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Mu=function(e,t,n,i,r,o){var a=e._gsap,l=r||gh(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,h=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],T=t.split(" "),y=parseFloat(T[0])||0,w=parseFloat(T[1])||0,I,R,L,M;n?l!==Vo&&(R=h*m-g*_)&&(L=y*(m/R)+w*(-_/R)+(_*S-m*p)/R,M=y*(-g/R)+w*(h/R)-(h*S-g*p)/R,y=L,w=M):(I=om(e),y=I.x+(~T[0].indexOf("%")?y/100*I.width:y),w=I.y+(~(T[1]||T[0]).indexOf("%")?w/100*I.height:w)),i||i!==!1&&a.smooth?(p=y-c,S=w-u,a.xOffset=d+(p*h+S*_)-p,a.yOffset=f+(p*g+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=w,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[wn]="0px 0px",o&&(ur(o,a,"xOrigin",c,y),ur(o,a,"yOrigin",u,w),ur(o,a,"xOffset",d,a.xOffset),ur(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+w)},Go=function(e,t){var n=e._gsap||new Yp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Kn(e,wn)||"0",u,d,f,h,g,_,m,p,S,T,y,w,I,R,L,M,b,D,$,H,ee,ne,K,Q,Z,ye,be,Me,we,Ve,j,ge;return u=d=f=_=m=p=S=T=y=0,h=g=1,n.svg=!!(e.getCTM&&am(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ot]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ot]!=="none"?l[Ot]:"")),i.scale=i.rotate=i.translate="none"),R=gh(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",Q=""):Q=!t&&e.getAttribute("data-svg-origin"),Mu(e,Q||c,!!Q||n.originIsAbsolute,n.smooth!==!1,R)),w=n.xOrigin||0,I=n.yOrigin||0,R!==Vo&&(D=R[0],$=R[1],H=R[2],ee=R[3],u=ne=R[4],d=K=R[5],R.length===6?(h=Math.sqrt(D*D+$*$),g=Math.sqrt(ee*ee+H*H),_=D||$?gs($,D)*Ur:0,S=H||ee?gs(H,ee)*Ur+_:0,S&&(g*=Math.abs(Math.cos(S*Is))),n.svg&&(u-=w-(w*D+I*H),d-=I-(w*$+I*ee))):(ge=R[6],Ve=R[7],be=R[8],Me=R[9],we=R[10],j=R[11],u=R[12],d=R[13],f=R[14],L=gs(ge,we),m=L*Ur,L&&(M=Math.cos(-L),b=Math.sin(-L),Q=ne*M+be*b,Z=K*M+Me*b,ye=ge*M+we*b,be=ne*-b+be*M,Me=K*-b+Me*M,we=ge*-b+we*M,j=Ve*-b+j*M,ne=Q,K=Z,ge=ye),L=gs(-H,we),p=L*Ur,L&&(M=Math.cos(-L),b=Math.sin(-L),Q=D*M-be*b,Z=$*M-Me*b,ye=H*M-we*b,j=ee*b+j*M,D=Q,$=Z,H=ye),L=gs($,D),_=L*Ur,L&&(M=Math.cos(L),b=Math.sin(L),Q=D*M+$*b,Z=ne*M+K*b,$=$*M-D*b,K=K*M-ne*b,D=Q,ne=Z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),h=Wt(Math.sqrt(D*D+$*$+H*H)),g=Wt(Math.sqrt(K*K+ge*ge)),L=gs(ne,K),S=Math.abs(L)>2e-4?L*Ur:0,y=j?1/(j<0?-j:j):0),n.svg&&(Q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!cm(Kn(e,Ot)),Q&&e.setAttribute("transform",Q))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(h*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Wt(h),n.scaleY=Wt(g),n.rotation=Wt(_)+a,n.rotationX=Wt(m)+a,n.rotationY=Wt(p)+a,n.skewX=S+a,n.skewY=T+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[wn]=el(c)),n.xOffset=n.yOffset=0,n.force3D=On.force3D,n.renderTransform=n.svg?tT:sm?um:eT,n.uncache=0,n},el=function(e){return(e=e.split(" "))[0]+" "+e[1]},ac=function(e,t,n){var i=fn(t);return Wt(parseFloat(t)+parseFloat(vr(e,"x",n+"px",i)))+i},eT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,um(e,t)},Cr="0deg",lo="0px",Pr=") ",um=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,h=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,T=n.zOrigin,y="",w=p==="auto"&&e&&e!==1||p===!0;if(T&&(d!==Cr||u!==Cr)){var I=parseFloat(u)*Is,R=Math.sin(I),L=Math.cos(I),M;I=parseFloat(d)*Is,M=Math.cos(I),o=ac(S,o,R*M*-T),a=ac(S,a,-Math.sin(I)*-T),l=ac(S,l,L*M*-T+T)}m!==lo&&(y+="perspective("+m+Pr),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(w||o!==lo||a!==lo||l!==lo)&&(y+=l!==lo||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Pr),c!==Cr&&(y+="rotate("+c+Pr),u!==Cr&&(y+="rotateY("+u+Pr),d!==Cr&&(y+="rotateX("+d+Pr),(f!==Cr||h!==Cr)&&(y+="skew("+f+", "+h+Pr),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Pr),S.style[Ot]=y||"translate(0, 0)"},tT=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,h=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,T=parseFloat(o),y=parseFloat(a),w,I,R,L,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Is,c*=Is,w=Math.cos(l)*d,I=Math.sin(l)*d,R=Math.sin(l-c)*-f,L=Math.cos(l-c)*f,c&&(u*=Is,M=Math.tan(c-u),M=Math.sqrt(1+M*M),R*=M,L*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),w*=M,I*=M)),w=Wt(w),I=Wt(I),R=Wt(R),L=Wt(L)):(w=d,L=f,I=R=0),(T&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(T=vr(h,"x",o,"px"),y=vr(h,"y",a,"px")),(g||_||m||p)&&(T=Wt(T+g-(g*w+_*R)+m),y=Wt(y+_-(g*I+_*L)+p)),(i||r)&&(M=h.getBBox(),T=Wt(T+i/100*M.width),y=Wt(y+r/100*M.height)),M="matrix("+w+","+I+","+R+","+L+","+T+","+y+")",h.setAttribute("transform",M),S&&(h.style[Ot]=M)},nT=function(e,t,n,i,r){var o=360,a=ln(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Ur:1),c=l-i,u=i+c+"deg",d,f;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*jd)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*jd)%o-~~(c/o)*o)),e._pt=f=new An(e._pt,t,n,i,c,kE),f.e=u,f.u="deg",e._props.push(n),f},sf=function(e,t){for(var n in t)e[n]=t[n];return e},iT=function(e,t,n){var i=sf({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,d,f,h,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ot]=t,a=Go(n,1),Kr(n,Ot),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ot],o[Ot]=t,a=Go(n,1),o[Ot]=c);for(l in qi)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(h=fn(c),g=fn(u),d=h!==g?vr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new An(e._pt,a,l,d,f-d,vu),e._pt.u=g||0,e._props.push(l));sf(a,i)};bn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});Qa[e>1?"border"+s:s]=function(a,l,c,u,d){var f,h;if(arguments.length<4)return f=o.map(function(g){return Fi(a,g,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},o.forEach(function(g,_){return h[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,h,d)}});var hm={name:"css",register:Su,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,d,f,h,g,_,m,p,S,T,y,w,I,R,L;fh||Su(),this.styles=this.styles||rm(e),L=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(In[_]&&$p(_,t,n,i,e,r)))){if(h=typeof u,g=Qa[_],h==="function"&&(u=u.call(n,i,e,r),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=ko(u)),g)g(this,e,_,u,n)&&(R=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",mr.lastIndex=0,mr.test(c)||(m=fn(c),p=fn(u)),p?m!==p&&(c=vr(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,i,r,0,0,_),o.push(_),L.push(_,0,a[_]);else if(h!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],ln(c)&&~c.indexOf("random(")&&(c=ko(c)),fn(c+"")||c==="auto"||(c+=On.units[_]||fn(Fi(e,_))||""),(c+"").charAt(1)==="="&&(c=Fi(e,_))):c=Fi(e,_),f=parseFloat(c),S=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),d=parseFloat(u),_ in _i&&(_==="autoAlpha"&&(f===1&&Fi(e,"visibility")==="hidden"&&d&&(f=0),L.push("visibility",0,a.visibility),ur(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=_i[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in qi,T){if(this.styles.save(_),h==="string"&&u.substring(0,6)==="var(--"&&(u=Kn(e,u.substring(4,u.indexOf(")"))),d=parseFloat(u)),y||(w=e._gsap,w.renderTransform&&!t.parseTransform||Go(e,t.parseTransform),I=t.smoothOrigin!==!1&&w.smooth,y=this._pt=new An(this._pt,a,Ot,0,1,w.renderTransform,w,0,-1),y.dep=1),_==="scale")this._pt=new An(this._pt,w,"scaleY",w.scaleY,(S?Cs(w.scaleY,S+d):d)-w.scaleY||0,vu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(wn,0,a[wn]),u=JE(u),w.svg?Mu(e,u,0,I,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&ur(this,w,"zOrigin",w.zOrigin,p),ur(this,a,_,el(c),el(u)));continue}else if(_==="svgOrigin"){Mu(e,u,1,I,0,this);continue}else if(_ in lm){nT(this,w,_,f,S?Cs(f,S+u):u);continue}else if(_==="smoothOrigin"){ur(this,w,"smooth",w.smooth,u);continue}else if(_==="force3D"){w[_]=u;continue}else if(_==="transform"){iT(this,u,e);continue}}else _ in a||(_=qs(_)||_);if(T||(d||d===0)&&(f||f===0)&&!BE.test(u)&&_ in a)m=(c+"").substr((f+"").length),d||(d=0),p=fn(u)||(_ in On.units?On.units[_]:m),m!==p&&(f=vr(e,_,c,p)),this._pt=new An(this._pt,T?w:a,_,f,(S?Cs(f,S+d):d)-f,!T&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?HE:vu),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=zE);else if(_ in a)jE.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,i,r);else if(_!=="parseTransform"){ih(_,u);continue}T||(_ in a?L.push(_,0,a[_]):typeof e[_]=="function"?L.push(_,2,e[_]()):L.push(_,1,c||e[_])),o.push(_)}}R&&Qp(this)},render:function(e,t){if(t.tween._time||!ph())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Fi,aliases:_i,getSetter:function(e,t,n){var i=_i[t];return i&&i.indexOf(",")<0&&(t=i),t in qi&&t!==wn&&(e._gsap.x||Fi(e,"x"))?n&&Zd===n?t==="scale"?XE:WE:(Zd=n||{})&&(t==="scale"?YE:$E):e.style&&!eh(e.style[t])?VE:~t.indexOf("-")?GE:hh(e,t)},core:{_removeProperty:Kr,_getMatrix:gh}};Rn.utils.checkPrefix=qs;Rn.core.getStyleSaver=rm;(function(s,e,t,n){var i=bn(s+","+e+","+t,function(r){qi[r]=1});bn(e,function(r){On.units[r]="deg",lm[r]=1}),_i[i[13]]=s+","+e,bn(n,function(r){var o=r.split(":");_i[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){On.units[s]="px"});Rn.registerPlugin(hm);var _h=Rn.registerPlugin(hm)||Rn;_h.core.Tween;/*!
 * matrix 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Vi,Xr,xh,hl,mo,Ba,tl,Ao,oi="transform",Eu=oi+"Origin",dm,fm=function(e){var t=e.ownerDocument||e;for(!(oi in e.style)&&("msTransform"in e.style)&&(oi="msTransform",Eu=oi+"Origin");t.parentNode&&(t=t.parentNode););if(Xr=window,tl=new Zr,t){Vi=t,xh=t.documentElement,hl=t.body,Ao=Vi.createElementNS("http://www.w3.org/2000/svg","g"),Ao.style.transform="none";var n=t.createElement("div"),i=t.createElement("div"),r=t&&(t.body||t.firstElementChild);r&&r.appendChild&&(r.appendChild(n),n.appendChild(i),n.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),dm=i.offsetParent!==n,r.removeChild(n))}return t},rT=function(e){for(var t,n;e&&e!==hl;)n=e._gsap,n&&n.uncache&&n.get(e,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),t?t.push(n):t=[n]),e=e.parentNode;return t},pm=[],mm=[],sT=function(){return Xr.pageYOffset||Vi.scrollTop||xh.scrollTop||hl.scrollTop||0},oT=function(){return Xr.pageXOffset||Vi.scrollLeft||xh.scrollLeft||hl.scrollLeft||0},vh=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},aT=function s(e){if(Xr.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return s(e)},lc=function s(e,t){if(e.parentNode&&(Vi||fm(e))){var n=vh(e),i=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",r=n?t?"rect":"g":"div",o=t!==2?0:100,a=t===3?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",c=Vi.createElementNS?Vi.createElementNS(i.replace(/^https/,"http"),r):Vi.createElement(r);return t&&(n?(Ba||(Ba=s(e)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+o+","+a+")"),Ba.appendChild(c)):(mo||(mo=s(e),mo.style.cssText=l),c.style.cssText=l+"width:0.1px;height:0.1px;top:"+a+"px;left:"+o+"px",mo.appendChild(c))),c}throw"Need document and parent."},lT=function(e){for(var t=new Zr,n=0;n<e.numberOfItems;n++)t.multiply(e.getItem(n).matrix);return t},cT=function(e){var t=e.getCTM(),n;return t||(n=e.style[oi],e.style[oi]="none",e.appendChild(Ao),t=Ao.getCTM(),e.removeChild(Ao),n?e.style[oi]=n:e.style.removeProperty(oi.replace(/([A-Z])/g,"-$1").toLowerCase())),t||tl.clone()},uT=function(e,t){var n=vh(e),i=e===n,r=n?pm:mm,o=e.parentNode,a=o&&!n&&o.shadowRoot&&o.shadowRoot.appendChild?o.shadowRoot:o,l,c,u,d,f,h;if(e===Xr)return e;if(r.length||r.push(lc(e,1),lc(e,2),lc(e,3)),l=n?Ba:mo,n)i?(u=cT(e),d=-u.e/u.a,f=-u.f/u.d,c=tl):e.getBBox?(u=e.getBBox(),c=e.transform?e.transform.baseVal:{},c=c.numberOfItems?c.numberOfItems>1?lT(c):c.getItem(0).matrix:tl,d=c.a*u.x+c.c*u.y,f=c.b*u.x+c.d*u.y):(c=new Zr,d=f=0),(i?n:o).appendChild(l),l.setAttribute("transform","matrix("+c.a+","+c.b+","+c.c+","+c.d+","+(c.e+d)+","+(c.f+f)+")");else{if(d=f=0,dm)for(c=e.offsetParent,u=e;u&&(u=u.parentNode)&&u!==c&&u.parentNode;)(Xr.getComputedStyle(u)[oi]+"").length>4&&(d=u.offsetLeft,f=u.offsetTop,u=0);if(h=Xr.getComputedStyle(e),h.position!=="absolute"&&h.position!=="fixed")for(c=e.offsetParent;o&&o!==c;)d+=o.scrollLeft||0,f+=o.scrollTop||0,o=o.parentNode;u=l.style,u.top=e.offsetTop-f+"px",u.left=e.offsetLeft-d+"px",u[oi]=h[oi],u[Eu]=h[Eu],u.position=h.position==="fixed"?"fixed":"absolute",a.appendChild(l)}return l},cc=function(e,t,n,i,r,o,a){return e.a=t,e.b=n,e.c=i,e.d=r,e.e=o,e.f=a,e},Zr=function(){function s(t,n,i,r,o,a){t===void 0&&(t=1),n===void 0&&(n=0),i===void 0&&(i=0),r===void 0&&(r=1),o===void 0&&(o=0),a===void 0&&(a=0),cc(this,t,n,i,r,o,a)}var e=s.prototype;return e.inverse=function(){var n=this.a,i=this.b,r=this.c,o=this.d,a=this.e,l=this.f,c=n*o-i*r||1e-10;return cc(this,o/c,-i/c,-r/c,n/c,(r*l-o*a)/c,-(n*l-i*a)/c)},e.multiply=function(n){var i=this.a,r=this.b,o=this.c,a=this.d,l=this.e,c=this.f,u=n.a,d=n.c,f=n.b,h=n.d,g=n.e,_=n.f;return cc(this,u*i+f*o,u*r+f*a,d*i+h*o,d*r+h*a,l+g*i+_*o,c+g*r+_*a)},e.clone=function(){return new s(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(n){var i=this.a,r=this.b,o=this.c,a=this.d,l=this.e,c=this.f;return i===n.a&&r===n.b&&o===n.c&&a===n.d&&l===n.e&&c===n.f},e.apply=function(n,i){i===void 0&&(i={});var r=n.x,o=n.y,a=this.a,l=this.b,c=this.c,u=this.d,d=this.e,f=this.f;return i.x=r*a+o*c+d||0,i.y=r*l+o*u+f||0,i},s}();function Br(s,e,t,n){if(!s||!s.parentNode||(Vi||fm(s)).documentElement===s)return new Zr;var i=rT(s),r=vh(s),o=r?pm:mm,a=uT(s),l=o[0].getBoundingClientRect(),c=o[1].getBoundingClientRect(),u=o[2].getBoundingClientRect(),d=a.parentNode,f=aT(s),h=new Zr((c.left-l.left)/100,(c.top-l.top)/100,(u.left-l.left)/100,(u.top-l.top)/100,l.left+(f?0:oT()),l.top+(f?0:sT()));if(d.removeChild(a),i)for(l=i.length;l--;)c=i[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return e?h.inverse():h}function of(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function hT(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var gt,It,Dn,ci,Gi,uc,Oi,Tu,go,hr,gm,bu,Wo,yh,_o,ei,xo,ka,_m,Au,nl=0,xm=function(){return typeof window<"u"},vm=function(){return gt||xm()&&(gt=window.gsap)&&gt.registerPlugin&&gt},or=function(e){return typeof e=="function"},wo=function(e){return typeof e=="object"},ni=function(e){return typeof e>"u"},za=function(){return!1},Ro="transform",wu="transformOrigin",rr=function(e){return Math.round(e*1e4)/1e4},co=Array.isArray,Aa=function(e,t){var n=Dn.createElementNS?Dn.createElementNS("http://www.w3.org/1999/xhtml".replace(/^https/,"http"),e):Dn.createElement(e);return n.style?n:Dn.createElement(e)},af=180/Math.PI,Ir=1e20,dT=new Zr,sr=Date.now||function(){return new Date().getTime()},Yr=[],Ls={},fT=0,pT=/^(?:a|input|textarea|button|select)$/i,lf=0,_s={},Di={},ym=function(e,t){var n={},i;for(i in e)n[i]=t?e[i]*t:e[i];return n},mT=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},cf=function s(e,t){for(var n=e.length,i;n--;)t?e[n].style.touchAction=t:e[n].style.removeProperty("touch-action"),i=e[n].children,i&&i.length&&s(i,t)},Sm=function(){return Yr.forEach(function(e){return e()})},gT=function(e){Yr.push(e),Yr.length===1&&gt.ticker.add(Sm)},uf=function(){return!Yr.length&&gt.ticker.remove(Sm)},hf=function(e){for(var t=Yr.length;t--;)Yr[t]===e&&Yr.splice(t,1);gt.to(uf,{overwrite:!0,delay:15,duration:0,onComplete:uf,data:"_draggable"})},_T=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Jt=function(e,t,n,i){if(e.addEventListener){var r=Wo[t];i=i||(gm?{passive:!1}:null),e.addEventListener(r||t,n,i),r&&t!==r&&e.addEventListener(t,n,i)}},Yt=function(e,t,n,i){if(e.removeEventListener){var r=Wo[t];e.removeEventListener(r||t,n,i),r&&t!==r&&e.removeEventListener(t,n,i)}},Vn=function(e){e.preventDefault&&e.preventDefault(),e.preventManipulation&&e.preventManipulation()},xT=function(e,t){for(var n=e.length;n--;)if(e[n].identifier===t)return!0},vT=function s(e){yh=e.touches&&nl<e.touches.length,Yt(e.target,"touchend",s)},df=function(e){yh=e.touches&&nl<e.touches.length,Jt(e.target,"touchend",vT)},Ds=function(e){return It.pageYOffset||e.scrollTop||e.documentElement.scrollTop||e.body.scrollTop||0},Ns=function(e){return It.pageXOffset||e.scrollLeft||e.documentElement.scrollLeft||e.body.scrollLeft||0},ff=function s(e,t){Jt(e,"scroll",t),Ks(e.parentNode)||s(e.parentNode,t)},pf=function s(e,t){Yt(e,"scroll",t),Ks(e.parentNode)||s(e.parentNode,t)},Ks=function(e){return!e||e===ci||e.nodeType===9||e===Dn.body||e===It||!e.nodeType||!e.parentNode},mf=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,r="client"+n;return Math.max(0,Ks(e)?Math.max(ci[i],Gi[i])-(It["inner"+n]||ci[r]||Gi[r]):e[i]-e[r])},hc=function s(e,t){var n=mf(e,"x"),i=mf(e,"y");Ks(e)?e=Di:s(e.parentNode,t),e._gsMaxScrollX=n,e._gsMaxScrollY=i,t||(e._gsScrollX=e.scrollLeft||0,e._gsScrollY=e.scrollTop||0)},dc=function(e,t,n){var i=e.style;i&&(ni(i[t])&&(t=go(t,e)||t),n==null?i.removeProperty&&i.removeProperty(t.replace(/([A-Z])/g,"-$1").toLowerCase()):i[t]=n)},Xo=function(e){return It.getComputedStyle(e instanceof Element?e:e.host||(e.parentNode||{}).host||e)},Lr={},xs=function(e){if(e===It)return Lr.left=Lr.top=0,Lr.width=Lr.right=ci.clientWidth||e.innerWidth||Gi.clientWidth||0,Lr.height=Lr.bottom=(e.innerHeight||0)-20<ci.clientHeight?ci.clientHeight:e.innerHeight||Gi.clientHeight||0,Lr;var t=e.ownerDocument||Dn,n=ni(e.pageX)?!e.nodeType&&!ni(e.left)&&!ni(e.top)?e:hr(e)[0].getBoundingClientRect():{left:e.pageX-Ns(t),top:e.pageY-Ds(t),right:e.pageX-Ns(t)+1,bottom:e.pageY-Ds(t)+1};return ni(n.right)&&!ni(n.width)?(n.right=n.left+n.width,n.bottom=n.top+n.height):ni(n.width)&&(n={width:n.right-n.left,height:n.bottom-n.top,right:n.right,left:n.left,bottom:n.bottom,top:n.top}),n},Gt=function(e,t,n){var i=e.vars,r=i[n],o=e._listeners[t],a;return or(r)&&(a=r.apply(i.callbackScope||e,i[n+"Params"]||[e.pointerEvent])),o&&e.dispatchEvent(t)===!1&&(a=!1),a},gf=function(e,t){var n=hr(e)[0],i,r,o;return!n.nodeType&&n!==It?ni(e.left)?(r=e.min||e.minX||e.minRotation||0,i=e.min||e.minY||0,{left:r,top:i,width:(e.max||e.maxX||e.maxRotation||0)-r,height:(e.max||e.maxY||0)-i}):(o={x:0,y:0},{left:e.left-o.x,top:e.top-o.y,width:e.width,height:e.height}):yT(n,t)},Gn={},yT=function(e,t){t=hr(t)[0];var n=e.getBBox&&e.ownerSVGElement,i=e.ownerDocument||Dn,r,o,a,l,c,u,d,f,h,g,_,m,p;if(e===It)a=Ds(i),r=Ns(i),o=r+(i.documentElement.clientWidth||e.innerWidth||i.body.clientWidth||0),l=a+((e.innerHeight||0)-20<i.documentElement.clientHeight?i.documentElement.clientHeight:e.innerHeight||i.body.clientHeight||0);else{if(t===It||ni(t))return e.getBoundingClientRect();r=a=0,n?(g=e.getBBox(),_=g.width,m=g.height):(e.viewBox&&(g=e.viewBox.baseVal)&&(r=g.x||0,a=g.y||0,_=g.width,m=g.height),_||(p=Xo(e),g=p.boxSizing==="border-box",_=(parseFloat(p.width)||e.clientWidth||0)+(g?0:parseFloat(p.borderLeftWidth)+parseFloat(p.borderRightWidth)),m=(parseFloat(p.height)||e.clientHeight||0)+(g?0:parseFloat(p.borderTopWidth)+parseFloat(p.borderBottomWidth)))),o=_,l=m}return e===t?{left:r,top:a,width:o-r,height:l-a}:(c=Br(t,!0).multiply(Br(e)),u=c.apply({x:r,y:a}),d=c.apply({x:o,y:a}),f=c.apply({x:o,y:l}),h=c.apply({x:r,y:l}),r=Math.min(u.x,d.x,f.x,h.x),a=Math.min(u.y,d.y,f.y,h.y),{left:r,top:a,width:Math.max(u.x,d.x,f.x,h.x)-r,height:Math.max(u.y,d.y,f.y,h.y)-a})},fc=function(e,t,n,i,r,o){var a={},l,c,u;if(t)if(r!==1&&t instanceof Array){if(a.end=l=[],u=t.length,wo(t[0]))for(c=0;c<u;c++)l[c]=ym(t[c],r);else for(c=0;c<u;c++)l[c]=t[c]*r;n+=1.1,i-=1.1}else or(t)?a.end=function(d){var f=t.call(e,d),h,g;if(r!==1)if(wo(f)){h={};for(g in f)h[g]=f[g]*r;f=h}else f*=r;return f}:a.end=t;return(n||n===0)&&(a.max=n),(i||i===0)&&(a.min=i),o&&(a.velocity=0),a},ST=function s(e){var t;return!e||!e.getAttribute||e===Gi?!1:(t=e.getAttribute("data-clickable"))==="true"||t!=="false"&&(pT.test(e.nodeName+"")||e.getAttribute("contentEditable")==="true")?!0:s(e.parentNode)},wa=function(e,t){for(var n=e.length,i;n--;)i=e[n],i.ondragstart=i.onselectstart=t?null:za,gt.set(i,{lazy:!0,userSelect:t?"text":"none"})},MT=function s(e){if(Xo(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return s(e)},Mm,Ru,ET=function(e,t){e=gt.utils.toArray(e)[0],t=t||{};var n=document.createElement("div"),i=n.style,r=e.firstChild,o=0,a=0,l=e.scrollTop,c=e.scrollLeft,u=e.scrollWidth,d=e.scrollHeight,f=0,h=0,g=0,_,m,p,S,T,y;Mm&&t.force3D!==!1?(T="translate3d(",y="px,0px)"):Ro&&(T="translate(",y="px)"),this.scrollTop=function(w,I){if(!arguments.length)return-this.top();this.top(-w,I)},this.scrollLeft=function(w,I){if(!arguments.length)return-this.left();this.left(-w,I)},this.left=function(w,I){if(!arguments.length)return-(e.scrollLeft+a);var R=e.scrollLeft-c,L=a;if((R>2||R<-2)&&!I){c=e.scrollLeft,gt.killTweensOf(this,{left:1,scrollLeft:1}),this.left(-c),t.onKill&&t.onKill();return}w=-w,w<0?(a=w-.5|0,w=0):w>h?(a=w-h|0,w=h):a=0,(a||L)&&(this._skip||(i[Ro]=T+-a+"px,"+-o+y),a+f>=0&&(i.paddingRight=a+f+"px")),e.scrollLeft=w|0,c=e.scrollLeft},this.top=function(w,I){if(!arguments.length)return-(e.scrollTop+o);var R=e.scrollTop-l,L=o;if((R>2||R<-2)&&!I){l=e.scrollTop,gt.killTweensOf(this,{top:1,scrollTop:1}),this.top(-l),t.onKill&&t.onKill();return}w=-w,w<0?(o=w-.5|0,w=0):w>g?(o=w-g|0,w=g):o=0,(o||L)&&(this._skip||(i[Ro]=T+-a+"px,"+-o+y)),e.scrollTop=w|0,l=e.scrollTop},this.maxScrollTop=function(){return g},this.maxScrollLeft=function(){return h},this.disable=function(){for(r=n.firstChild;r;)S=r.nextSibling,e.appendChild(r),r=S;e===n.parentNode&&e.removeChild(n)},this.enable=function(){if(r=e.firstChild,r!==n){for(;r;)S=r.nextSibling,n.appendChild(r),r=S;e.appendChild(n),this.calibrate()}},this.calibrate=function(w){var I=e.clientWidth===_,R,L,M;l=e.scrollTop,c=e.scrollLeft,!(I&&e.clientHeight===m&&n.offsetHeight===p&&u===e.scrollWidth&&d===e.scrollHeight&&!w)&&((o||a)&&(L=this.left(),M=this.top(),this.left(-e.scrollLeft),this.top(-e.scrollTop)),R=Xo(e),(!I||w)&&(i.display="block",i.width="auto",i.paddingRight="0px",f=Math.max(0,e.scrollWidth-e.clientWidth),f&&(f+=parseFloat(R.paddingLeft)+(Ru?parseFloat(R.paddingRight):0))),i.display="inline-block",i.position="relative",i.overflow="visible",i.verticalAlign="top",i.boxSizing="content-box",i.width="100%",i.paddingRight=f+"px",Ru&&(i.paddingBottom=R.paddingBottom),_=e.clientWidth,m=e.clientHeight,u=e.scrollWidth,d=e.scrollHeight,h=e.scrollWidth-_,g=e.scrollHeight-m,p=n.offsetHeight,i.display="block",(L||M)&&(this.left(L),this.top(M)))},this.content=n,this.element=e,this._skip=!1,this.enable()},pc=function(e){if(xm()&&document.body){var t=window&&window.navigator;It=window,Dn=document,ci=Dn.documentElement,Gi=Dn.body,uc=Aa("div"),ka=!!window.PointerEvent,Oi=Aa("div"),Oi.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",xo=Oi.style.cursor==="grab"?"grab":"move",_o=t&&t.userAgent.toLowerCase().indexOf("android")!==-1,bu="ontouchstart"in ci&&"orientation"in It||t&&(t.MaxTouchPoints>0||t.msMaxTouchPoints>0),Ru=function(){var n=Aa("div"),i=Aa("div"),r=i.style,o=Gi,a;return r.display="inline-block",r.position="relative",n.style.cssText="width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",n.appendChild(i),o.appendChild(n),a=i.offsetHeight+18>n.scrollHeight,o.removeChild(n),a}(),Wo=function(n){for(var i=n.split(","),r=("onpointerdown"in uc?"pointerdown,pointermove,pointerup,pointercancel":"onmspointerdown"in uc?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":n).split(","),o={},a=4;--a>-1;)o[i[a]]=r[a],o[r[a]]=i[a];try{ci.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){gm=1}}))}catch{}return o}("touchstart,touchmove,touchend,touchcancel"),Jt(Dn,"touchcancel",za),Jt(It,"touchmove",za),Gi&&Gi.addEventListener("touchstart",za),Jt(Dn,"contextmenu",function(){for(var n in Ls)Ls[n].isPressed&&Ls[n].endDrag()}),gt=Tu=vm()}gt?(ei=gt.plugins.inertia,_m=gt.core.context||function(){},go=gt.utils.checkPrefix,Ro=go(Ro),wu=go(wu),hr=gt.utils.toArray,Au=gt.core.getStyleSaver,Mm=!!go("perspective")):e&&console.warn("Please gsap.registerPlugin(Draggable)")},TT=function(){function s(t){this._listeners={},this.target=t||this}var e=s.prototype;return e.addEventListener=function(n,i){var r=this._listeners[n]||(this._listeners[n]=[]);~r.indexOf(i)||r.push(i)},e.removeEventListener=function(n,i){var r=this._listeners[n],o=r&&r.indexOf(i);o>=0&&r.splice(o,1)},e.dispatchEvent=function(n){var i=this,r;return(this._listeners[n]||[]).forEach(function(o){return o.call(i,{type:n,target:i.target})===!1&&(r=!1)}),r},s}(),Zo=function(s){hT(e,s);function e(t,n){var i;i=s.call(this)||this,Tu||pc(1),t=hr(t)[0],i.styles=Au&&Au(t,"transform,left,top"),ei||(ei=gt.plugins.inertia),i.vars=n=ym(n||{}),i.target=t,i.x=i.y=i.rotation=0,i.dragResistance=parseFloat(n.dragResistance)||0,i.edgeResistance=isNaN(n.edgeResistance)?1:parseFloat(n.edgeResistance)||0,i.lockAxis=n.lockAxis,i.autoScroll=n.autoScroll||0,i.lockedAxis=null,i.allowEventDefault=!!n.allowEventDefault,gt.getProperty(t,"x");var r=(n.type||"x,y").toLowerCase(),o=~r.indexOf("x")||~r.indexOf("y"),a=r.indexOf("rotation")!==-1,l=a?"rotation":o?"x":"left",c=o?"y":"top",u=!!(~r.indexOf("x")||~r.indexOf("left")||r==="scroll"),d=!!(~r.indexOf("y")||~r.indexOf("top")||r==="scroll"),f=n.minimumMovement||2,h=of(i),g=hr(n.trigger||n.handle||t),_={},m=0,p=!1,S=n.autoScrollMarginTop||40,T=n.autoScrollMarginRight||40,y=n.autoScrollMarginBottom||40,w=n.autoScrollMarginLeft||40,I=n.clickableTest||ST,R=0,L=t._gsap||gt.core.getCache(t),M=MT(t),b=function(B,se){return parseFloat(L.get(t,B,se))},D=t.ownerDocument||Dn,$,H,ee,ne,K,Q,Z,ye,be,Me,we,Ve,j,ge,_e,Ee,Ae,st,Ge,lt,dt,et,k,je,ft,nt,Ie,ct,Xe,Je,pt,N,E,q=function(B){return Vn(B),B.stopImmediatePropagation&&B.stopImmediatePropagation(),!1},re=function oe(B){if(h.autoScroll&&h.isDragging&&(p||Ae)){var se=t,X=h.autoScroll*15,pe,Te,Le,Qe,Be,vt,ot,St;for(p=!1,Di.scrollTop=It.pageYOffset!=null?It.pageYOffset:D.documentElement.scrollTop!=null?D.documentElement.scrollTop:D.body.scrollTop,Di.scrollLeft=It.pageXOffset!=null?It.pageXOffset:D.documentElement.scrollLeft!=null?D.documentElement.scrollLeft:D.body.scrollLeft,Qe=h.pointerX-Di.scrollLeft,Be=h.pointerY-Di.scrollTop;se&&!Te;)Te=Ks(se.parentNode),pe=Te?Di:se.parentNode,Le=Te?{bottom:Math.max(ci.clientHeight,It.innerHeight||0),right:Math.max(ci.clientWidth,It.innerWidth||0),left:0,top:0}:pe.getBoundingClientRect(),vt=ot=0,d&&(St=pe._gsMaxScrollY-pe.scrollTop,St<0?ot=St:Be>Le.bottom-y&&St?(p=!0,ot=Math.min(St,X*(1-Math.max(0,Le.bottom-Be)/y)|0)):Be<Le.top+S&&pe.scrollTop&&(p=!0,ot=-Math.min(pe.scrollTop,X*(1-Math.max(0,Be-Le.top)/S)|0)),ot&&(pe.scrollTop+=ot)),u&&(St=pe._gsMaxScrollX-pe.scrollLeft,St<0?vt=St:Qe>Le.right-T&&St?(p=!0,vt=Math.min(St,X*(1-Math.max(0,Le.right-Qe)/T)|0)):Qe<Le.left+w&&pe.scrollLeft&&(p=!0,vt=-Math.min(pe.scrollLeft,X*(1-Math.max(0,Qe-Le.left)/w)|0)),vt&&(pe.scrollLeft+=vt)),Te&&(vt||ot)&&(It.scrollTo(pe.scrollLeft,pe.scrollTop),J(h.pointerX+vt,h.pointerY+ot)),se=pe}if(Ae){var Rt=h.x,Ht=h.y;a?(h.deltaX=Rt-parseFloat(L.rotation),h.rotation=Rt,L.rotation=Rt+"deg",L.renderTransform(1,L)):H?(d&&(h.deltaY=Ht-H.top(),H.top(Ht)),u&&(h.deltaX=Rt-H.left(),H.left(Rt))):o?(d&&(h.deltaY=Ht-parseFloat(L.y),L.y=Ht+"px"),u&&(h.deltaX=Rt-parseFloat(L.x),L.x=Rt+"px"),L.renderTransform(1,L)):(d&&(h.deltaY=Ht-parseFloat(t.style.top||0),t.style.top=Ht+"px"),u&&(h.deltaX=Rt-parseFloat(t.style.left||0),t.style.left=Rt+"px")),ye&&!B&&!ct&&(ct=!0,Gt(h,"drag","onDrag")===!1&&(u&&(h.x-=h.deltaX),d&&(h.y-=h.deltaY),oe(!0)),ct=!1)}Ae=!1},de=function(B,se){var X=h.x,pe=h.y,Te,Le;t._gsap||(L=gt.core.getCache(t)),L.uncache&&gt.getProperty(t,"x"),o?(h.x=parseFloat(L.x),h.y=parseFloat(L.y)):a?h.x=h.rotation=parseFloat(L.rotation):H?(h.y=H.top(),h.x=H.left()):(h.y=parseFloat(t.style.top||(Le=Xo(t))&&Le.top)||0,h.x=parseFloat(t.style.left||(Le||{}).left)||0),(Ge||lt||dt)&&!se&&(h.isDragging||h.isThrowing)&&(dt&&(_s.x=h.x,_s.y=h.y,Te=dt(_s),Te.x!==h.x&&(h.x=Te.x,Ae=!0),Te.y!==h.y&&(h.y=Te.y,Ae=!0)),Ge&&(Te=Ge(h.x),Te!==h.x&&(h.x=Te,a&&(h.rotation=Te),Ae=!0)),lt&&(Te=lt(h.y),Te!==h.y&&(h.y=Te),Ae=!0)),Ae&&re(!0),B||(h.deltaX=h.x-X,h.deltaY=h.y-pe,Gt(h,"throwupdate","onThrowUpdate"))},ie=function(B,se,X,pe){return se==null&&(se=-Ir),X==null&&(X=Ir),or(B)?function(Te){var Le=h.isPressed?1-h.edgeResistance:1;return B.call(h,(Te>X?X+(Te-X)*Le:Te<se?se+(Te-se)*Le:Te)*pe)*pe}:co(B)?function(Te){for(var Le=B.length,Qe=0,Be=Ir,vt,ot;--Le>-1;)vt=B[Le],ot=vt-Te,ot<0&&(ot=-ot),ot<Be&&vt>=se&&vt<=X&&(Qe=Le,Be=ot);return B[Qe]}:isNaN(B)?function(Te){return Te}:function(){return B*pe}},ze=function(B,se,X,pe,Te,Le,Qe){return Le=Le&&Le<Ir?Le*Le:Ir,or(B)?function(Be){var vt=h.isPressed?1-h.edgeResistance:1,ot=Be.x,St=Be.y,Rt,Ht,un;return Be.x=ot=ot>X?X+(ot-X)*vt:ot<se?se+(ot-se)*vt:ot,Be.y=St=St>Te?Te+(St-Te)*vt:St<pe?pe+(St-pe)*vt:St,Rt=B.call(h,Be),Rt!==Be&&(Be.x=Rt.x,Be.y=Rt.y),Qe!==1&&(Be.x*=Qe,Be.y*=Qe),Le<Ir&&(Ht=Be.x-ot,un=Be.y-St,Ht*Ht+un*un>Le&&(Be.x=ot,Be.y=St)),Be}:co(B)?function(Be){for(var vt=B.length,ot=0,St=Ir,Rt,Ht,un,tn;--vt>-1;)un=B[vt],Rt=un.x-Be.x,Ht=un.y-Be.y,tn=Rt*Rt+Ht*Ht,tn<St&&(ot=vt,St=tn);return St<=Le?B[ot]:Be}:function(Be){return Be}},Ce=function(){var B,se,X,pe;Z=!1,H?(H.calibrate(),h.minX=we=-H.maxScrollLeft(),h.minY=j=-H.maxScrollTop(),h.maxX=Me=h.maxY=Ve=0,Z=!0):n.bounds&&(B=gf(n.bounds,t.parentNode),a?(h.minX=we=B.left,h.maxX=Me=B.left+B.width,h.minY=j=h.maxY=Ve=0):!ni(n.bounds.maxX)||!ni(n.bounds.maxY)?(B=n.bounds,h.minX=we=B.minX,h.minY=j=B.minY,h.maxX=Me=B.maxX,h.maxY=Ve=B.maxY):(se=gf(t,t.parentNode),h.minX=we=Math.round(b(l,"px")+B.left-se.left),h.minY=j=Math.round(b(c,"px")+B.top-se.top),h.maxX=Me=Math.round(we+(B.width-se.width)),h.maxY=Ve=Math.round(j+(B.height-se.height))),we>Me&&(h.minX=Me,h.maxX=Me=we,we=h.minX),j>Ve&&(h.minY=Ve,h.maxY=Ve=j,j=h.minY),a&&(h.minRotation=we,h.maxRotation=Me),Z=!0),n.liveSnap&&(X=n.liveSnap===!0?n.snap||{}:n.liveSnap,pe=co(X)||or(X),a?(Ge=ie(pe?X:X.rotation,we,Me,1),lt=null):X.points?dt=ze(pe?X:X.points,we,Me,j,Ve,X.radius,H?-1:1):(u&&(Ge=ie(pe?X:X.x||X.left||X.scrollLeft,we,Me,H?-1:1)),d&&(lt=ie(pe?X:X.y||X.top||X.scrollTop,j,Ve,H?-1:1))))},He=function(){h.isThrowing=!1,Gt(h,"throwcomplete","onThrowComplete")},We=function(){h.isThrowing=!1},ae=function(B,se){var X,pe,Te,Le;B&&ei?(B===!0&&(X=n.snap||n.liveSnap||{},pe=co(X)||or(X),B={resistance:(n.throwResistance||n.resistance||1e3)/(a?10:1)},a?B.rotation=fc(h,pe?X:X.rotation,Me,we,1,se):(u&&(B[l]=fc(h,pe?X:X.points||X.x||X.left,Me,we,H?-1:1,se||h.lockedAxis==="x")),d&&(B[c]=fc(h,pe?X:X.points||X.y||X.top,Ve,j,H?-1:1,se||h.lockedAxis==="y")),(X.points||co(X)&&wo(X[0]))&&(B.linkedProps=l+","+c,B.radius=X.radius))),h.isThrowing=!0,Le=isNaN(n.overshootTolerance)?n.edgeResistance===1?0:1-h.edgeResistance+.2:n.overshootTolerance,B.duration||(B.duration={max:Math.max(n.minDuration||0,"maxDuration"in n?n.maxDuration:2),min:isNaN(n.minDuration)?Le===0||wo(B)&&B.resistance>1e3?0:.5:n.minDuration,overshoot:Le}),h.tween=Te=gt.to(H||t,{inertia:B,data:"_draggable",inherit:!1,onComplete:He,onInterrupt:We,onUpdate:n.fastMode?Gt:de,onUpdateParams:n.fastMode?[h,"onthrowupdate","onThrowUpdate"]:X&&X.radius?[!1,!0]:[]}),n.fastMode||(H&&(H._skip=!0),Te.render(1e9,!0,!0),de(!0,!0),h.endX=h.x,h.endY=h.y,a&&(h.endRotation=h.x),Te.play(0),de(!0,!0),H&&(H._skip=!1))):Z&&h.applyBounds()},Re=function(B){var se=je,X;je=Br(t.parentNode,!0),B&&h.isPressed&&!je.equals(se||new Zr)&&(X=se.inverse().apply({x:ee,y:ne}),je.apply(X,X),ee=X.x,ne=X.y),je.equals(dT)&&(je=null)},Ye=function(){var B=1-h.edgeResistance,se=M?Ns(D):0,X=M?Ds(D):0,pe,Te,Le;o&&(L.x=b(l,"px")+"px",L.y=b(c,"px")+"px",L.renderTransform()),Re(!1),Gn.x=h.pointerX-se,Gn.y=h.pointerY-X,je&&je.apply(Gn,Gn),ee=Gn.x,ne=Gn.y,Ae&&(J(h.pointerX,h.pointerY),re(!0)),N=Br(t),H?(Ce(),Q=H.top(),K=H.left()):(Oe()?(de(!0,!0),Ce()):h.applyBounds(),a?(pe=t.ownerSVGElement?[L.xOrigin-t.getBBox().x,L.yOrigin-t.getBBox().y]:(Xo(t)[wu]||"0 0").split(" "),Ee=h.rotationOrigin=Br(t).apply({x:parseFloat(pe[0])||0,y:parseFloat(pe[1])||0}),de(!0,!0),Te=h.pointerX-Ee.x-se,Le=Ee.y-h.pointerY+X,K=h.x,Q=h.y=Math.atan2(Le,Te)*af):(Q=b(c,"px"),K=b(l,"px"))),Z&&B&&(K>Me?K=Me+(K-Me)/B:K<we&&(K=we-(we-K)/B),a||(Q>Ve?Q=Ve+(Q-Ve)/B:Q<j&&(Q=j-(j-Q)/B))),h.startX=K=rr(K),h.startY=Q=rr(Q)},Oe=function(){return h.tween&&h.tween.isActive()},ve=function(){Oi.parentNode&&!Oe()&&!h.isDragging&&Oi.parentNode.removeChild(Oi)},Ne=function(B,se){var X;if(!$||h.isPressed||!B||(B.type==="mousedown"||B.type==="pointerdown")&&!se&&sr()-R<30&&Wo[h.pointerEvent.type]){pt&&B&&$&&Vn(B);return}if(ft=Oe(),E=!1,h.pointerEvent=B,Wo[B.type]?(k=~B.type.indexOf("touch")?B.currentTarget||B.target:D,Jt(k,"touchend",le),Jt(k,"touchmove",z),Jt(k,"touchcancel",le),Jt(D,"touchstart",df)):(k=null,Jt(D,"mousemove",z)),Ie=null,(!ka||!k)&&(Jt(D,"mouseup",le),B&&B.target&&Jt(B.target,"mouseup",le)),et=I.call(h,B.target)&&n.dragClickables===!1&&!se,et){Jt(B.target,"change",le),Gt(h,"pressInit","onPressInit"),Gt(h,"press","onPress"),wa(g,!0),pt=!1;return}if(nt=!k||u===d||h.vars.allowNativeTouchScrolling===!1||h.vars.allowContextMenu&&B&&(B.ctrlKey||B.which>2)?!1:u?"y":"x",pt=!nt&&!h.allowEventDefault,pt&&(Vn(B),Jt(It,"touchforcechange",Vn)),B.changedTouches?(B=ge=B.changedTouches[0],_e=B.identifier):B.pointerId?_e=B.pointerId:ge=_e=null,nl++,gT(re),ne=h.pointerY=B.pageY,ee=h.pointerX=B.pageX,Gt(h,"pressInit","onPressInit"),(nt||h.autoScroll)&&hc(t.parentNode),t.parentNode&&h.autoScroll&&!H&&!a&&t.parentNode._gsMaxScrollX&&!Oi.parentNode&&!t.getBBox&&(Oi.style.width=t.parentNode.scrollWidth+"px",t.parentNode.appendChild(Oi)),Ye(),h.tween&&h.tween.kill(),h.isThrowing=!1,gt.killTweensOf(H||t,_,!0),H&&gt.killTweensOf(t,{scrollTo:1},!0),h.tween=h.lockedAxis=null,(n.zIndexBoost||!a&&!H&&n.zIndexBoost!==!1)&&(t.style.zIndex=e.zIndex++),h.isPressed=!0,ye=!!(n.onDrag||h._listeners.drag),be=!!(n.onMove||h._listeners.move),n.cursor!==!1||n.activeCursor)for(X=g.length;--X>-1;)gt.set(g[X],{cursor:n.activeCursor||n.cursor||(xo==="grab"?"grabbing":xo)});Gt(h,"press","onPress")},z=function(B){var se=B,X,pe,Te,Le,Qe,Be;if(!$||yh||!h.isPressed||!B){pt&&B&&$&&Vn(B);return}if(h.pointerEvent=B,X=B.changedTouches,X){if(B=X[0],B!==ge&&B.identifier!==_e){for(Le=X.length;--Le>-1&&(B=X[Le]).identifier!==_e&&B.target!==t;);if(Le<0)return}}else if(B.pointerId&&_e&&B.pointerId!==_e)return;if(k&&nt&&!Ie&&(Gn.x=B.pageX-(M?Ns(D):0),Gn.y=B.pageY-(M?Ds(D):0),je&&je.apply(Gn,Gn),pe=Gn.x,Te=Gn.y,Qe=Math.abs(pe-ee),Be=Math.abs(Te-ne),(Qe!==Be&&(Qe>f||Be>f)||_o&&nt===Ie)&&(Ie=Qe>Be&&u?"x":"y",nt&&Ie!==nt&&Jt(It,"touchforcechange",Vn),h.vars.lockAxisOnTouchScroll!==!1&&u&&d&&(h.lockedAxis=Ie==="x"?"y":"x",or(h.vars.onLockAxis)&&h.vars.onLockAxis.call(h,se)),_o&&nt===Ie))){le(se);return}!h.allowEventDefault&&(!nt||Ie&&nt!==Ie)&&se.cancelable!==!1?(Vn(se),pt=!0):pt&&(pt=!1),h.autoScroll&&(p=!0),J(B.pageX,B.pageY,be)},J=function(B,se,X){var pe=1-h.dragResistance,Te=1-h.edgeResistance,Le=h.pointerX,Qe=h.pointerY,Be=Q,vt=h.x,ot=h.y,St=h.endX,Rt=h.endY,Ht=h.endRotation,un=Ae,tn,Sn,Vt,bt,zn,x;h.pointerX=B,h.pointerY=se,M&&(B-=Ns(D),se-=Ds(D)),a?(bt=Math.atan2(Ee.y-se,B-Ee.x)*af,zn=h.y-bt,zn>180?(Q-=360,h.y=bt):zn<-180&&(Q+=360,h.y=bt),h.x!==K||Math.max(Math.abs(ee-B),Math.abs(ne-se))>f?(h.y=bt,Vt=K+(Q-bt)*pe):Vt=K):(je&&(x=B*je.a+se*je.c+je.e,se=B*je.b+se*je.d+je.f,B=x),Sn=se-ne,tn=B-ee,Sn<f&&Sn>-f&&(Sn=0),tn<f&&tn>-f&&(tn=0),(h.lockAxis||h.lockedAxis)&&(tn||Sn)&&(x=h.lockedAxis,x||(h.lockedAxis=x=u&&Math.abs(tn)>Math.abs(Sn)?"y":d?"x":null,x&&or(h.vars.onLockAxis)&&h.vars.onLockAxis.call(h,h.pointerEvent)),x==="y"?Sn=0:x==="x"&&(tn=0)),Vt=rr(K+tn*pe),bt=rr(Q+Sn*pe)),(Ge||lt||dt)&&(h.x!==Vt||h.y!==bt&&!a)&&(dt&&(_s.x=Vt,_s.y=bt,x=dt(_s),Vt=rr(x.x),bt=rr(x.y)),Ge&&(Vt=rr(Ge(Vt))),lt&&(bt=rr(lt(bt)))),Z&&(Vt>Me?Vt=Me+Math.round((Vt-Me)*Te):Vt<we&&(Vt=we+Math.round((Vt-we)*Te)),a||(bt>Ve?bt=Math.round(Ve+(bt-Ve)*Te):bt<j&&(bt=Math.round(j+(bt-j)*Te)))),(h.x!==Vt||h.y!==bt&&!a)&&(a?(h.endRotation=h.x=h.endX=Vt,Ae=!0):(d&&(h.y=h.endY=bt,Ae=!0),u&&(h.x=h.endX=Vt,Ae=!0)),!X||Gt(h,"move","onMove")!==!1?!h.isDragging&&h.isPressed&&(h.isDragging=E=!0,Gt(h,"dragstart","onDragStart")):(h.pointerX=Le,h.pointerY=Qe,Q=Be,h.x=vt,h.y=ot,h.endX=St,h.endY=Rt,h.endRotation=Ht,Ae=un))},le=function oe(B,se){if(!$||!h.isPressed||B&&_e!=null&&!se&&(B.pointerId&&B.pointerId!==_e&&B.target!==t||B.changedTouches&&!xT(B.changedTouches,_e))){pt&&B&&$&&Vn(B);return}h.isPressed=!1;var X=B,pe=h.isDragging,Te=h.vars.allowContextMenu&&B&&(B.ctrlKey||B.which>2),Le=gt.delayedCall(.001,ve),Qe,Be,vt,ot,St;if(k?(Yt(k,"touchend",oe),Yt(k,"touchmove",z),Yt(k,"touchcancel",oe),Yt(D,"touchstart",df)):Yt(D,"mousemove",z),Yt(It,"touchforcechange",Vn),(!ka||!k)&&(Yt(D,"mouseup",oe),B&&B.target&&Yt(B.target,"mouseup",oe)),Ae=!1,pe&&(m=lf=sr(),h.isDragging=!1),hf(re),et&&!Te){B&&(Yt(B.target,"change",oe),h.pointerEvent=X),wa(g,!1),Gt(h,"release","onRelease"),Gt(h,"click","onClick"),et=!1;return}for(Be=g.length;--Be>-1;)dc(g[Be],"cursor",n.cursor||(n.cursor!==!1?xo:null));if(nl--,B){if(Qe=B.changedTouches,Qe&&(B=Qe[0],B!==ge&&B.identifier!==_e)){for(Be=Qe.length;--Be>-1&&(B=Qe[Be]).identifier!==_e&&B.target!==t;);if(Be<0&&!se)return}h.pointerEvent=X,h.pointerX=B.pageX,h.pointerY=B.pageY}return Te&&X?(Vn(X),pt=!0,Gt(h,"release","onRelease")):X&&!pe?(pt=!1,ft&&(n.snap||n.bounds)&&ae(n.inertia||n.throwProps),Gt(h,"release","onRelease"),(!_o||X.type!=="touchmove")&&X.type.indexOf("cancel")===-1&&(Gt(h,"click","onClick"),sr()-R<300&&Gt(h,"doubleclick","onDoubleClick"),ot=X.target||t,R=sr(),St=function(){R!==Xe&&h.enabled()&&!h.isPressed&&!X.defaultPrevented&&(ot.click?ot.click():D.createEvent&&(vt=D.createEvent("MouseEvents"),vt.initMouseEvent("click",!0,!0,It,1,h.pointerEvent.screenX,h.pointerEvent.screenY,h.pointerX,h.pointerY,!1,!1,!1,!1,0,null),ot.dispatchEvent(vt)))},!_o&&!X.defaultPrevented&&gt.delayedCall(.05,St))):(ae(n.inertia||n.throwProps),!h.allowEventDefault&&X&&(n.dragClickables!==!1||!I.call(h,X.target))&&pe&&(!nt||Ie&&nt===Ie)&&X.cancelable!==!1?(pt=!0,Vn(X)):pt=!1,Gt(h,"release","onRelease")),Oe()&&Le.duration(h.tween.duration()),pe&&Gt(h,"dragend","onDragEnd"),!0},De=function(B){if(B&&h.isDragging&&!H){var se=B.target||t.parentNode,X=se.scrollLeft-se._gsScrollX,pe=se.scrollTop-se._gsScrollY;(X||pe)&&(je?(ee-=X*je.a+pe*je.c,ne-=pe*je.d+X*je.b):(ee-=X,ne-=pe),se._gsScrollX+=X,se._gsScrollY+=pe,J(h.pointerX,h.pointerY))}},xe=function(B){var se=sr(),X=se-R<100,pe=se-m<50,Te=X&&Xe===R,Le=h.pointerEvent&&h.pointerEvent.defaultPrevented,Qe=X&&Je===R,Be=B.isTrusted||B.isTrusted==null&&X&&Te;if((Te||pe&&h.vars.suppressClickOnDrag!==!1)&&B.stopImmediatePropagation&&B.stopImmediatePropagation(),X&&!(h.pointerEvent&&h.pointerEvent.defaultPrevented)&&(!Te||Be&&!Qe)){Be&&Te&&(Je=R),Xe=R;return}(h.isPressed||pe||X)&&(!Be||!B.detail||!X||Le)&&Vn(B),!X&&!pe&&!E&&(B&&B.target&&(h.pointerEvent=B),Gt(h,"click","onClick"))},ce=function(B){return je?{x:B.x*je.a+B.y*je.c+je.e,y:B.x*je.b+B.y*je.d+je.f}:{x:B.x,y:B.y}};return st=e.get(t),st&&st.kill(),i.startDrag=function(oe,B){var se,X,pe,Te;Ne(oe||h.pointerEvent,!0),B&&!h.hitTest(oe||h.pointerEvent)&&(se=xs(oe||h.pointerEvent),X=xs(t),pe=ce({x:se.left+se.width/2,y:se.top+se.height/2}),Te=ce({x:X.left+X.width/2,y:X.top+X.height/2}),ee-=pe.x-Te.x,ne-=pe.y-Te.y),h.isDragging||(h.isDragging=E=!0,Gt(h,"dragstart","onDragStart"))},i.drag=z,i.endDrag=function(oe){return le(oe||h.pointerEvent,!0)},i.timeSinceDrag=function(){return h.isDragging?0:(sr()-m)/1e3},i.timeSinceClick=function(){return(sr()-R)/1e3},i.hitTest=function(oe,B){return e.hitTest(h.target,oe,B)},i.getDirection=function(oe,B){var se=oe==="velocity"&&ei?oe:wo(oe)&&!a?"element":"start",X,pe,Te,Le,Qe,Be;return se==="element"&&(Qe=xs(h.target),Be=xs(oe)),X=se==="start"?h.x-K:se==="velocity"?ei.getVelocity(t,l):Qe.left+Qe.width/2-(Be.left+Be.width/2),a?X<0?"counter-clockwise":"clockwise":(B=B||2,pe=se==="start"?h.y-Q:se==="velocity"?ei.getVelocity(t,c):Qe.top+Qe.height/2-(Be.top+Be.height/2),Te=Math.abs(X/pe),Le=Te<1/B?"":X<0?"left":"right",Te<B&&(Le!==""&&(Le+="-"),Le+=pe<0?"up":"down"),Le)},i.applyBounds=function(oe,B){var se,X,pe,Te,Le,Qe;if(oe&&n.bounds!==oe)return n.bounds=oe,h.update(!0,B);if(de(!0),Ce(),Z&&!Oe()){if(se=h.x,X=h.y,se>Me?se=Me:se<we&&(se=we),X>Ve?X=Ve:X<j&&(X=j),(h.x!==se||h.y!==X)&&(pe=!0,h.x=h.endX=se,a?h.endRotation=se:h.y=h.endY=X,Ae=!0,re(!0),h.autoScroll&&!h.isDragging))for(hc(t.parentNode),Te=t,Di.scrollTop=It.pageYOffset!=null?It.pageYOffset:D.documentElement.scrollTop!=null?D.documentElement.scrollTop:D.body.scrollTop,Di.scrollLeft=It.pageXOffset!=null?It.pageXOffset:D.documentElement.scrollLeft!=null?D.documentElement.scrollLeft:D.body.scrollLeft;Te&&!Qe;)Qe=Ks(Te.parentNode),Le=Qe?Di:Te.parentNode,d&&Le.scrollTop>Le._gsMaxScrollY&&(Le.scrollTop=Le._gsMaxScrollY),u&&Le.scrollLeft>Le._gsMaxScrollX&&(Le.scrollLeft=Le._gsMaxScrollX),Te=Le;h.isThrowing&&(pe||h.endX>Me||h.endX<we||h.endY>Ve||h.endY<j)&&ae(n.inertia||n.throwProps,pe)}return h},i.update=function(oe,B,se){if(B&&h.isPressed){var X=Br(t),pe=N.apply({x:h.x-K,y:h.y-Q}),Te=Br(t.parentNode,!0);Te.apply({x:X.e-pe.x,y:X.f-pe.y},pe),h.x-=pe.x-Te.e,h.y-=pe.y-Te.f,re(!0),Ye()}var Le=h.x,Qe=h.y;return Re(!B),oe?h.applyBounds():(Ae&&se&&re(!0),de(!0)),B&&(J(h.pointerX,h.pointerY),Ae&&re(!0)),h.isPressed&&!B&&(u&&Math.abs(Le-h.x)>.01||d&&Math.abs(Qe-h.y)>.01&&!a)&&Ye(),h.autoScroll&&(hc(t.parentNode,h.isDragging),p=h.isDragging,re(!0),pf(t,De),ff(t,De)),h},i.enable=function(oe){var B={lazy:!0},se,X,pe;if(n.cursor!==!1&&(B.cursor=n.cursor||xo),gt.utils.checkPrefix("touchCallout")&&(B.touchCallout="none"),oe!=="soft"){for(cf(g,u===d?"none":n.allowNativeTouchScrolling&&t.scrollHeight===t.clientHeight==(t.scrollWidth===t.clientHeight)||n.allowEventDefault?"manipulation":u?"pan-y":"pan-x"),X=g.length;--X>-1;)pe=g[X],ka||Jt(pe,"mousedown",Ne),Jt(pe,"touchstart",Ne),Jt(pe,"click",xe,!0),gt.set(pe,B),pe.getBBox&&pe.ownerSVGElement&&u!==d&&gt.set(pe.ownerSVGElement,{touchAction:n.allowNativeTouchScrolling||n.allowEventDefault?"manipulation":u?"pan-y":"pan-x"}),n.allowContextMenu||Jt(pe,"contextmenu",q);wa(g,!1)}return ff(t,De),$=!0,ei&&oe!=="soft"&&ei.track(H||t,o?"x,y":a?"rotation":"top,left"),t._gsDragID=se=t._gsDragID||"d"+fT++,Ls[se]=h,H&&(H.enable(),H.element._gsDragID=se),(n.bounds||a)&&Ye(),n.bounds&&h.applyBounds(),h},i.disable=function(oe){for(var B=h.isDragging,se=g.length,X;--se>-1;)dc(g[se],"cursor",null);if(oe!=="soft"){for(cf(g,null),se=g.length;--se>-1;)X=g[se],dc(X,"touchCallout",null),Yt(X,"mousedown",Ne),Yt(X,"touchstart",Ne),Yt(X,"click",xe,!0),Yt(X,"contextmenu",q);wa(g,!0),k&&(Yt(k,"touchcancel",le),Yt(k,"touchend",le),Yt(k,"touchmove",z)),Yt(D,"mouseup",le),Yt(D,"mousemove",z)}return pf(t,De),$=!1,ei&&oe!=="soft"&&(ei.untrack(H||t,o?"x,y":a?"rotation":"top,left"),h.tween&&h.tween.kill()),H&&H.disable(),hf(re),h.isDragging=h.isPressed=et=!1,B&&Gt(h,"dragend","onDragEnd"),h},i.enabled=function(oe,B){return arguments.length?oe?h.enable(B):h.disable(B):$},i.kill=function(){return h.isThrowing=!1,h.tween&&h.tween.kill(),h.disable(),gt.set(g,{clearProps:"userSelect"}),delete Ls[t._gsDragID],h},i.revert=function(){this.kill(),this.styles&&this.styles.revert()},~r.indexOf("scroll")&&(H=i.scrollProxy=new ET(t,mT({onKill:function(){h.isPressed&&le(null)}},n)),t.style.overflowY=d&&!bu?"auto":"hidden",t.style.overflowX=u&&!bu?"auto":"hidden",t=H.content),a?_.rotation=1:(u&&(_[l]=1),d&&(_[c]=1)),L.force3D="force3D"in n?n.force3D:!0,_m(of(i)),i.enable(),i}return e.register=function(n){gt=n,pc()},e.create=function(n,i){return Tu||pc(!0),hr(n).map(function(r){return new e(r,i)})},e.get=function(n){return Ls[(hr(n)[0]||{})._gsDragID]},e.timeSinceDrag=function(){return(sr()-lf)/1e3},e.hitTest=function(n,i,r){if(n===i)return!1;var o=xs(n),a=xs(i),l=o.top,c=o.left,u=o.right,d=o.bottom,f=o.width,h=o.height,g=a.left>u||a.right<c||a.top>d||a.bottom<l,_,m,p;return g||!r?!g:(p=(r+"").indexOf("%")!==-1,r=parseFloat(r)||0,_={left:Math.max(c,a.left),top:Math.max(l,a.top)},_.width=Math.min(u,a.right)-_.left,_.height=Math.min(d,a.bottom)-_.top,_.width<0||_.height<0?!1:p?(r*=.01,m=_.width*_.height,m>=f*h*r||m>=a.width*a.height*r):_.width>r&&_.height>r)},e}(TT);_T(Zo.prototype,{pointerX:0,pointerY:0,startX:0,startY:0,deltaX:0,deltaY:0,isDragging:!1,isPressed:!1});Zo.zIndex=1e3;Zo.version="3.13.0";vm()&&gt.registerPlugin(Zo);_h.registerPlugin(Zo);class bT{constructor(e,t,n){this.scene=e,this.gui=t,this.canvas=n,this.group=new ar,this.scene.add(this.group),this.boxModel=null,this.mixer=null,this.animation_1=null,this.animation_2=null,this.handModel=null,this.cards={},this.loadedTextures={},this.params={x:0,y:0,z:0};const i=this.gui.addFolder("Model Position");["x","y","z"].forEach(r=>{i.add(this.params,r,-5,5,.1).name(`pos ${r}`).onChange(()=>{this.group.position.set(this.params.x,this.params.y,this.params.z)}).listen()}),i.open()}load(e,t,n){const i=new Zf;i.onLoad=()=>{Object.entries(this.loadedTextures).forEach(([a,l])=>{this._applyTexture(a,l)}),n&&n(this.group)},new cM(i).load(e,a=>{this.box=a,this.group.add(a.scene),this.mixer=new j_(a.scene);const l=a.animations[0],c=a.animations[1];l?(this.animation_1=this.mixer.clipAction(l),this.animation_1.setLoop(jc),this.animation_1.clampWhenFinished=!0):console.warn('Animation with name "amin1" not found in the model!'),c?(this.animation_2=this.mixer.clipAction(c),this.animation_2.setLoop(jc),this.animation_2.clampWhenFinished=!0):console.warn('Animation with name "amin1" not found in the model!')});const o=new jf(i);Object.entries(t).forEach(([a,l])=>{o.load(l,c=>{switch(a){case"albedo":c.colorSpace=qt;break;case"normal":c.colorSpace=ii;break;case"roughness":c.colorSpace=ii;break}c.flipY=!1,c.wrapS=gr,c.wrapT=gr,c.repeat.set(1,1),this.loadedTextures[a]=c})})}play(){this.animation_1&&this.animation_2?(this.animation_1.reset().play(),this.animation_2.reset().play()):console.error("Animation is not loaded or does not exist.")}stop(){this.animation_1&&this.animation_1.stop()}update(e){this.mixer&&this.mixer.update(e)}_applyTexture(e,t){this.group.traverse(n=>{if(n.isMesh){switch(e){case"albedo":t.colorSpace=qt,n.material.map=t,n.material.metalness=1;break;case"normal":n.material.normalMap=t;break;case"roughness":n.material.roughnessMap=t;break}n.material.needsUpdate=!0}})}}const AT=window.devicePixelRatio||1,_f={pack1:{albedo:"textures/pack1/Package_01_Card_2048x2048px_Albedo_01.png",normal:"textures/pack1/Package_01_Card_2048x2048px_Normal_01.png",roughness:"textures/pack1/Package_01_Card_2048x2048px_Roughness_01.png"},pack3:{albedo:"textures/pack3/Package_03_Cards_2048x2048px_Albedo_01.png",normal:"textures/pack3/Package_03_Cards_2048x2048px_Normal_01.png",roughness:"textures/pack3/Package_03_Cards_2048x2048px_Roughness_01.png"},pack20:{albedo:"textures/pack20/Package_20_Cards_2048x2048px_Albedo_01.png",normal:"textures/pack20/Package_20_Cards_2048x2048px_Normal_01.png",roughness:"textures/pack20/Package_20_Cards_2048x2048px_Roughness_01.png"},pack80:{albedo:"textures/pack80/Package_80_Cards_2048x2048px_Albedo_01.png",normal:"textures/pack80/Package_80_Cards_2048x2048px_Normal_01.png",roughness:"textures/pack80/Package_80_Cards_2048x2048px_Roughness_01.png"}};class wT{constructor(e){this.canvas=e,this.scene=new o_,this.clock=new B_,this.renderer=new NS({canvas:e,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=qt,this.renderer.physicallyCorrectLights=!0,this.renderer.toneMapping=Sf,this.renderer.toneMappingExposure=1.5,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=vf,this.renderer.setPixelRatio(AT),this.modelUrl=null,this.envMapUrl=null,this.gui=null,this.camera=null,this.directionalLight=null,this.ambientLight=null,this.params={showGUI:!0,packName:null,environmentIntensity:1},window.addEventListener("resize",()=>this._onResize()),this.onResourcesLoaded=null}initCamera({position:e=[0,0,.2]}={}){const[t,n,i]=e;this.camera=new _n(60,window.innerWidth/window.innerHeight,.01,2e5),this.camera.position.set(t,n,i)}initLights(){this.directionalLight=new Qf(16777215,1),this.directionalLight.position.set(5,5,5),this.scene.add(this.directionalLight),this.ambientLight=new Jf(16777215,.5),this.scene.add(this.ambientLight)}loadEnvironment(e,t){this.envMapUrl=e,new lM().load(e,i=>{i.mapping=Ha,i.colorSpace=an,this.scene.environment=i,this.scene.environmentIntensity=this.params.environmentIntensity,t&&t()})}loadModel(e,t){this.modelUrl=e,this.params.packName=t,this.card&&this.card.group&&this.scene.remove(this.card.group),this.gui&&this.gui.destroy(),this.gui=new Ju({title:"Debug GUI"}),this._addGlobalUI(),this._addPackSwitcherUI(),this.envMapUrl&&this._addEnvironmentUI(),this.camera&&this._addCameraUI(),this.directionalLight&&this._addLightUI("DirectionalLight",this.directionalLight),this.ambientLight&&this._addLightUI("PointLight",this.ambientLight);const n=_f[t];this.card=new bT(this.scene,this.gui,this.canvas),this.card.load(this.modelUrl,n,i=>{this.onResourcesLoaded&&this.onResourcesLoaded(i)})}render(e){_h.ticker.add(()=>{const t=this.clock.getDelta()*1.2;this.card&&this.card.update(t),e&&e(),this.renderer.render(this.scene,this.camera)})}_addGlobalUI(){const e=this.gui.addFolder("Global");e.add(this.params,"showGUI").name("Toggle GUI").onChange(t=>{this.gui.domElement.style.display=t?"":"none"}),e.open()}_addPackSwitcherUI(){const e=Object.keys(_f);(this.gui.folders.find(n=>n._title==="Global")||this.gui.addFolder("Global")).add(this.params,"packName",e).name("Texture Pack").onChange(n=>{this.loadModel(this.modelUrl,n)})}_addEnvironmentUI(){const e=this.gui.addFolder("Environment");e.add(this.params,"environmentIntensity",0,4,.1).name("Intensity").onChange(t=>{this.scene.environment&&(this.scene.environmentIntensity=t)}),e.add(this.scene.environmentRotation,"x",0,Math.PI*2,.01).name("Rotation X"),e.add(this.scene.environmentRotation,"y",0,Math.PI*2,.01).name("Rotation Y"),e.add(this.scene.environmentRotation,"z",0,Math.PI*2,.01).name("Rotation Z"),e.open()}_addCameraUI(){const e=this.gui.addFolder("Camera");["x","y","z"].forEach(t=>{e.add(this.camera.position,t,-10,10,.1).name(`pos ${t}`).listen()}),e.open()}_addLightUI(e,t){const n=this.gui.addFolder(e);if(t.color){const i={color:`#${t.color.getHexString()}`};n.addColor(i,"color").name("color").onChange(r=>t.color.set(r))}"intensity"in t&&n.add(t,"intensity",0,10,.01).name("intensity"),t.position&&["x","y","z"].forEach(i=>{n.add(t.position,i,-10,10,.1).name(i)}),n.open()}_onResize(){this.camera&&(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))}}(async function(){const s=document.getElementById("webgl"),e=new wT(s);e.initCamera({position:[0,0,.23]}),e.initLights(),e.onResourcesLoaded=a=>{console.log("😊 Всё загрузилось, группа модели:",a),document.getElementById("playBtn").onclick=()=>e.card.play()},e.loadEnvironment("light/GSG_ProStudiosMetal_Vol2_23_Env_sm.exr",()=>{console.log("🗺️ Карта окружения загружена!")}),e.loadModel("model/model2.glb","pack1");let t=0;const n=window.innerWidth/2;let i=0;const r=.5;function o(a){t=(a.clientX-n)/n,i=t*r}document.addEventListener("mousemove",o),e.render(()=>{if(e.card){let a=.05;e.card.group.rotation.y+=(i-e.card.group.rotation.y)*a}})})();
