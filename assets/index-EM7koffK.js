(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xh="178",o_=0,kd=1,a_=2,Jp=1,Qp=2,$i=3,hr=0,Un=1,Ci=2,Nr=0,Qs=1,zd=2,Hd=3,Vd=4,l_=5,as=100,c_=101,u_=102,h_=103,d_=104,f_=200,p_=201,m_=202,g_=203,Au=204,Ru=205,__=206,v_=207,x_=208,y_=209,S_=210,M_=211,b_=212,E_=213,T_=214,Cu=0,Pu=1,Iu=2,ho=3,Lu=4,Du=5,Uu=6,Nu=7,em=0,w_=1,A_=2,Or=0,R_=1,C_=2,P_=3,tm=4,I_=5,L_=6,D_=7,Gd="attached",U_="detached",nm=300,fo=301,po=302,Fl=303,Ou=304,nc=306,kr=1e3,Ii=1001,Bl=1002,An=1003,im=1004,Jo=1005,fn=1006,bl=1007,Li=1008,Oi=1009,rm=1010,sm=1011,va=1012,Yh=1013,xs=1014,Dn=1015,nr=1016,qh=1017,$h=1018,xa=1020,om=35902,am=1021,lm=1022,Xn=1023,ya=1026,Sa=1027,ic=1028,Kh=1029,cm=1030,jh=1031,Zh=1033,El=33776,Tl=33777,wl=33778,Al=33779,Fu=35840,Bu=35841,ku=35842,zu=35843,Hu=36196,Vu=37492,Gu=37496,Wu=37808,Xu=37809,Yu=37810,qu=37811,$u=37812,Ku=37813,ju=37814,Zu=37815,Ju=37816,Qu=37817,eh=37818,th=37819,nh=37820,ih=37821,Rl=36492,rh=36494,sh=36495,um=36283,oh=36284,ah=36285,lh=36286,ch=2200,N_=2201,O_=2202,Ma=2300,ba=2301,pc=2302,qs=2400,$s=2401,kl=2402,Jh=2500,F_=2501,B_=0,hm=1,uh=2,k_=3200,z_=3201,dm=0,H_=1,gi="",nn="srgb",mn="srgb-linear",zl="linear",Ot="srgb",ws=7680,Wd=519,V_=512,G_=513,W_=514,fm=515,X_=516,Y_=517,q_=518,$_=519,hh=35044,Xd="300 es",ir=2e3,Hl=2001;let bs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}};const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yd=1234567;const la=Math.PI/180,mo=180/Math.PI;function yi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function gt(s,e,t){return Math.max(e,Math.min(t,s))}function Qh(s,e){return(s%e+e)%e}function K_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function j_(s,e,t){return s!==e?(t-s)/(e-s):0}function ca(s,e,t){return(1-t)*s+t*e}function Z_(s,e,t,n){return ca(s,e,1-Math.exp(-t*n))}function J_(s,e=1){return e-Math.abs(Qh(s,e*2)-e)}function Q_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function e0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function t0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function n0(s,e){return s+Math.random()*(e-s)}function i0(s){return s*(.5-Math.random())}function r0(s){s!==void 0&&(Yd=s);let e=Yd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function s0(s){return s*la}function o0(s){return s*mo}function a0(s){return(s&s-1)===0&&s!==0}function l0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function c0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function u0(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),h=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*d,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*d,a*c);break;case"ZXZ":s.set(l*d,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*h,a*c);break;case"YXY":s.set(l*h,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _i(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Dt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const h0={DEG2RAD:la,RAD2DEG:mo,generateUUID:yi,clamp:gt,euclideanModulo:Qh,mapLinear:K_,inverseLerp:j_,lerp:ca,damp:Z_,pingpong:J_,smoothstep:Q_,smootherstep:e0,randInt:t0,randFloat:n0,randFloatSpread:i0,seededRandom:r0,degToRad:s0,radToDeg:o0,isPowerOfTwo:a0,ceilPowerOfTwo:l0,floorPowerOfTwo:c0,setQuaternionFromProperEuler:u0,normalize:Dt,denormalize:_i};class Et{constructor(e=0,t=0){Et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Si{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const f=r[o+0],h=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==h||u!==g){let m=1-a;const p=l*f+c*h+u*g+d*_,S=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const A=Math.sqrt(b),I=Math.atan2(A,p*S);m=Math.sin(m*I)/A,a=Math.sin(a*I)/A}const y=a*S;if(l=l*m+f*y,c=c*m+h*y,u=u*m+g*y,d=d*m+_*y,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[o],f=r[o+1],h=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*h-c*f,e[t+1]=l*g+u*f+c*d-a*h,e[t+2]=c*g+u*h+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(r/2),f=l(n/2),h=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-i)*h}else if(n>a&&n>d){const h=2*Math.sqrt(1+n-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(i+o)/h,this._z=(r+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-n-d);this._w=(r-c)/h,this._x=(i+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-n-a);this._w=(o-i)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-t;return this._w=h*o+t*this._w,this._x=h*n+t*this._x,this._y=h*i+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=i+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mc.copy(this).projectOnVector(e),this.sub(mc)}reflect(e){return this.sub(mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mc=new W,qd=new Si;class ct{constructor(e,t,n,i,r,o,a,l,c){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],h=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],b=i[4],y=i[7],A=i[2],I=i[5],R=i[8];return r[0]=o*_+a*S+l*A,r[3]=o*m+a*b+l*I,r[6]=o*p+a*y+l*R,r[1]=c*_+u*S+d*A,r[4]=c*m+u*b+d*I,r[7]=c*p+u*y+d*R,r[2]=f*_+h*S+g*A,r[5]=f*m+h*b+g*I,r[8]=f*p+h*y+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,g=t*d+n*f+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*r-a*t)*_,e[6]=h*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gc.makeScale(e,t)),this}rotate(e){return this.premultiply(gc.makeRotation(-e)),this}translate(e,t){return this.premultiply(gc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gc=new ct;function pm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ea(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function d0(){const s=Ea("canvas");return s.style.display="block",s}const $d={};function eo(s){s in $d||($d[s]=!0,console.warn(s))}function f0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function p0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function m0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Kd=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jd=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function g0(){const s={enabled:!0,workingColorSpace:mn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ot&&(i.r=cr(i.r),i.g=cr(i.g),i.b=cr(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ot&&(i.r=to(i.r),i.g=to(i.g),i.b=to(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gi?zl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return eo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return eo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[mn]:{primaries:e,whitePoint:n,transfer:zl,toXYZ:Kd,fromXYZ:jd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:n,transfer:Ot,toXYZ:Kd,fromXYZ:jd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),s}const wt=g0();function cr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function to(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let As;class _0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{As===void 0&&(As=Ea("canvas")),As.width=e.width,As.height=e.height;const i=As.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=As}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ea("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=cr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cr(t[n]/255)*255):t[n]=cr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let v0=0;class ed{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(_c(i[o].image)):r.push(_c(i[o]))}else r=_c(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function _c(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let x0=0;const vc=new W;class pn extends bs{constructor(e=pn.DEFAULT_IMAGE,t=pn.DEFAULT_MAPPING,n=Ii,i=Ii,r=fn,o=Li,a=Xn,l=Oi,c=pn.DEFAULT_ANISOTROPY,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=yi(),this.name="",this.source=new ed(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vc).x}get height(){return this.source.getSize(vc).y}get depth(){return this.source.getSize(vc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kr:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case Bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kr:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case Bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=nm;pn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,n=0,i=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,y=(h+1)/2,A=(p+1)/2,I=(u+f)/4,R=(d+_)/4,L=(g+m)/4;return b>y&&b>A?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=I/n,r=R/n):y>A?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=I/i,r=L/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=R/r,i=L/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class y0 extends bs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new pn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new ed(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends y0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class mm extends pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=An,this.minFilter=An,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class S0 extends pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=An,this.minFilter=An,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,li):li.fromBufferAttribute(r,o),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Va.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Va.copy(n.boundingBox)),Va.applyMatrix4(e.matrixWorld),this.union(Va)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),Ga.subVectors(this.max,Uo),Rs.subVectors(e.a,Uo),Cs.subVectors(e.b,Uo),Ps.subVectors(e.c,Uo),gr.subVectors(Cs,Rs),_r.subVectors(Ps,Cs),Yr.subVectors(Rs,Ps);let t=[0,-gr.z,gr.y,0,-_r.z,_r.y,0,-Yr.z,Yr.y,gr.z,0,-gr.x,_r.z,0,-_r.x,Yr.z,0,-Yr.x,-gr.y,gr.x,0,-_r.y,_r.x,0,-Yr.y,Yr.x,0];return!xc(t,Rs,Cs,Ps,Ga)||(t=[1,0,0,0,1,0,0,0,1],!xc(t,Rs,Cs,Ps,Ga))?!1:(Wa.crossVectors(gr,_r),t=[Wa.x,Wa.y,Wa.z],xc(t,Rs,Cs,Ps,Ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vi=[new W,new W,new W,new W,new W,new W,new W,new W],li=new W,Va=new mr,Rs=new W,Cs=new W,Ps=new W,gr=new W,_r=new W,Yr=new W,Uo=new W,Ga=new W,Wa=new W,qr=new W;function xc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){qr.fromArray(s,r);const a=i.x*Math.abs(qr.x)+i.y*Math.abs(qr.y)+i.z*Math.abs(qr.z),l=e.dot(qr),c=t.dot(qr),u=n.dot(qr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const M0=new mr,No=new W,yc=new W;class ki{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):M0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const t=No.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(No,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(yc)),this.expandByPoint(No.copy(e.center).sub(yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Gi=new W,Sc=new W,Xa=new W,vr=new W,Mc=new W,Ya=new W,bc=new W;class rc{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sc.copy(e).add(t).multiplyScalar(.5),Xa.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(Sc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Xa),a=vr.dot(this.direction),l=-vr.dot(Xa),c=vr.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*l-a,f=o*a-l,g=r*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Sc).addScaledVector(Xa,f),h}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);const n=Gi.dot(this.direction),i=Gi.dot(Gi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,n,i,r){Mc.subVectors(t,e),Ya.subVectors(n,e),bc.crossVectors(Mc,Ya);let o=this.direction.dot(bc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vr.subVectors(this.origin,e);const l=a*this.direction.dot(Ya.crossVectors(vr,Ya));if(l<0)return null;const c=a*this.direction.dot(Mc.cross(vr));if(c<0||l+c>o)return null;const u=-a*vr.dot(bc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,n,i,r,o,a,l,c,u,d,f,h,g,_,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,d,f,h,g,_,m)}set(e,t,n,i,r,o,a,l,c,u,d,f,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Is.setFromMatrixColumn(e,0).length(),r=1/Is.setFromMatrixColumn(e,1).length(),o=1/Is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,h=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+h*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,g=c*u,_=c*d;t[0]=f+_*a,t[4]=g*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,g=c*u,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-h,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,h=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(b0,e,E0)}lookAt(e,t,n){const i=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),xr.crossVectors(n,zn),xr.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),xr.crossVectors(n,zn)),xr.normalize(),qa.crossVectors(zn,xr),i[0]=xr.x,i[4]=qa.x,i[8]=zn.x,i[1]=xr.y,i[5]=qa.y,i[9]=zn.y,i[2]=xr.z,i[6]=qa.z,i[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],h=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],b=n[7],y=n[11],A=n[15],I=i[0],R=i[4],L=i[8],M=i[12],T=i[1],D=i[5],q=i[9],H=i[13],ee=i[2],ne=i[6],K=i[10],Q=i[14],j=i[3],Te=i[7],Pe=i[11],Ae=i[15];return r[0]=o*I+a*T+l*ee+c*j,r[4]=o*R+a*D+l*ne+c*Te,r[8]=o*L+a*q+l*K+c*Pe,r[12]=o*M+a*H+l*Q+c*Ae,r[1]=u*I+d*T+f*ee+h*j,r[5]=u*R+d*D+f*ne+h*Te,r[9]=u*L+d*q+f*K+h*Pe,r[13]=u*M+d*H+f*Q+h*Ae,r[2]=g*I+_*T+m*ee+p*j,r[6]=g*R+_*D+m*ne+p*Te,r[10]=g*L+_*q+m*K+p*Pe,r[14]=g*M+_*H+m*Q+p*Ae,r[3]=S*I+b*T+y*ee+A*j,r[7]=S*R+b*D+y*ne+A*Te,r[11]=S*L+b*q+y*K+A*Pe,r[15]=S*M+b*H+y*Q+A*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*d-i*c*d-r*a*f+n*c*f+i*a*h-n*l*h)+_*(+t*l*h-t*c*f+r*o*f-i*o*h+i*c*u-r*l*u)+m*(+t*c*d-t*a*h-r*o*d+n*o*h+r*a*u-n*c*u)+p*(-i*a*u-t*l*d+t*a*f+i*o*d-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=d*m*c-_*f*c+_*l*h-a*m*h-d*l*p+a*f*p,b=g*f*c-u*m*c-g*l*h+o*m*h+u*l*p-o*f*p,y=u*_*c-g*d*c+g*a*h-o*_*h-u*a*p+o*d*p,A=g*d*l-u*_*l-g*a*f+o*_*f+u*a*m-o*d*m,I=t*S+n*b+i*y+r*A;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return e[0]=S*R,e[1]=(_*f*r-d*m*r-_*i*h+n*m*h+d*i*p-n*f*p)*R,e[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*R,e[3]=(d*l*r-a*f*r-d*i*c+n*f*c+a*i*h-n*l*h)*R,e[4]=b*R,e[5]=(u*m*r-g*f*r+g*i*h-t*m*h-u*i*p+t*f*p)*R,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*p-t*l*p)*R,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*h+t*l*h)*R,e[8]=y*R,e[9]=(g*d*r-u*_*r-g*n*h+t*_*h+u*n*p-t*d*p)*R,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*R,e[11]=(u*a*r-o*d*r-u*n*c+t*d*c+o*n*h-t*a*h)*R,e[12]=A*R,e[13]=(u*_*i-g*d*i+g*n*f-t*_*f-u*n*m+t*d*m)*R,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*R,e[15]=(o*d*i-u*a*i+u*n*l-t*d*l-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,g=r*d,_=o*u,m=o*d,p=a*d,S=l*c,b=l*u,y=l*d,A=n.x,I=n.y,R=n.z;return i[0]=(1-(_+p))*A,i[1]=(h+y)*A,i[2]=(g-b)*A,i[3]=0,i[4]=(h-y)*I,i[5]=(1-(f+p))*I,i[6]=(m+S)*I,i[7]=0,i[8]=(g+b)*R,i[9]=(m-S)*R,i[10]=(1-(f+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Is.set(i[0],i[1],i[2]).length();const o=Is.set(i[4],i[5],i[6]).length(),a=Is.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ci.copy(this);const c=1/r,u=1/o,d=1/a;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=u,ci.elements[5]*=u,ci.elements[6]*=u,ci.elements[8]*=d,ci.elements[9]*=d,ci.elements[10]*=d,t.setFromRotationMatrix(ci),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ir){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let h,g;if(a===ir)h=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Hl)h=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ir){const l=this.elements,c=1/(t-e),u=1/(n-i),d=1/(o-r),f=(t+e)*c,h=(n+i)*u;let g,_;if(a===ir)g=(o+r)*d,_=-2*d;else if(a===Hl)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Is=new W,ci=new ut,b0=new W(0,0,0),E0=new W(1,1,1),xr=new W,qa=new W,zn=new W,Zd=new ut,Jd=new Si;class Fi{constructor(e=0,t=0,n=0,i=Fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jd.setFromEuler(this),this.setFromQuaternion(Jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fi.DEFAULT_ORDER="XYZ";class gm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let T0=0;const Qd=new W,Ls=new Si,Wi=new ut,$a=new W,Oo=new W,w0=new W,A0=new Si,ef=new W(1,0,0),tf=new W(0,1,0),nf=new W(0,0,1),rf={type:"added"},R0={type:"removed"},Ds={type:"childadded",child:null},Ec={type:"childremoved",child:null};class Xt extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new W,t=new Fi,n=new Si,i=new W(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ut},normalMatrix:{value:new ct}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(ef,e)}rotateY(e){return this.rotateOnAxis(tf,e)}rotateZ(e){return this.rotateOnAxis(nf,e)}translateOnAxis(e,t){return Qd.copy(e).applyQuaternion(this.quaternion),this.position.add(Qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ef,e)}translateY(e){return this.translateOnAxis(tf,e)}translateZ(e){return this.translateOnAxis(nf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$a.copy(e):$a.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Oo,$a,this.up):Wi.lookAt($a,Oo,this.up),this.quaternion.setFromRotationMatrix(Wi),i&&(Wi.extractRotation(i.matrixWorld),Ls.setFromRotationMatrix(Wi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rf),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(R0),Ec.child=e,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rf),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,w0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,A0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Xt.DEFAULT_UP=new W(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new W,Xi=new W,Tc=new W,Yi=new W,Us=new W,Ns=new W,sf=new W,wc=new W,Ac=new W,Rc=new W,Cc=new Pt,Pc=new Pt,Ic=new Pt;class vi{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ui.subVectors(e,t),i.cross(ui);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ui.subVectors(i,t),Xi.subVectors(n,t),Tc.subVectors(e,t);const o=ui.dot(ui),a=ui.dot(Xi),l=ui.dot(Tc),c=Xi.dot(Xi),u=Xi.dot(Tc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-h-g,g,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yi.x),l.addScaledVector(o,Yi.y),l.addScaledVector(a,Yi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Cc.setScalar(0),Pc.setScalar(0),Ic.setScalar(0),Cc.fromBufferAttribute(e,t),Pc.fromBufferAttribute(e,n),Ic.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Cc,r.x),o.addScaledVector(Pc,r.y),o.addScaledVector(Ic,r.z),o}static isFrontFacing(e,t,n,i){return ui.subVectors(n,t),Xi.subVectors(e,t),ui.cross(Xi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),ui.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return vi.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Us.subVectors(i,n),Ns.subVectors(r,n),wc.subVectors(e,n);const l=Us.dot(wc),c=Ns.dot(wc);if(l<=0&&c<=0)return t.copy(n);Ac.subVectors(e,i);const u=Us.dot(Ac),d=Ns.dot(Ac);if(u>=0&&d<=u)return t.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Us,o);Rc.subVectors(e,r);const h=Us.dot(Rc),g=Ns.dot(Rc);if(g>=0&&h<=g)return t.copy(r);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ns,a);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return sf.subVectors(r,i),a=(d-u)/(d-u+(h-g)),t.copy(i).addScaledVector(sf,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(Us,o).addScaledVector(Ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function Lc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,wt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=wt.workingColorSpace){if(e=Qh(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Lc(o,r,e+1/3),this.g=Lc(o,r,e),this.b=Lc(o,r,e-1/3)}return wt.colorSpaceToWorking(this,i),this}setStyle(e,t=nn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const n=_m[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return wt.workingToColorSpace(yn.copy(this),e),Math.round(gt(yn.r*255,0,255))*65536+Math.round(gt(yn.g*255,0,255))*256+Math.round(gt(yn.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(yn.copy(this),t);const n=yn.r,i=yn.g,r=yn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=nn){wt.workingToColorSpace(yn.copy(this),e);const t=yn.r,n=yn.g,i=yn.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(Ka);const n=ca(yr.h,Ka.h,t),i=ca(yr.s,Ka.s,t),r=ca(yr.l,Ka.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new at;at.NAMES=_m;let C0=0;class Ui extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=Qs,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Au,this.blendDst=Ru,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(n.blending=this.blending),this.side!==hr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Au&&(n.blendSrc=this.blendSrc),this.blendDst!==Ru&&(n.blendDst=this.blendDst),this.blendEquation!==as&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hs extends Ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.combine=em,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const er=P0();function P0(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function I0(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=gt(s,-65504,65504),er.floatView[0]=s;const e=er.uint32View[0],t=e>>23&511;return er.baseTable[t]+((e&8388607)>>er.shiftTable[t])}function L0(s){const e=s>>10;return er.uint32View[0]=er.mantissaTable[er.offsetTable[e]+(s&1023)]+er.exponentTable[e],er.floatView[0]}class of{static toHalfFloat(e){return I0(e)}static fromHalfFloat(e){return L0(e)}}const Jt=new W,ja=new Et;let D0=0;class Rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:D0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hh,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ja.fromBufferAttribute(this,t),ja.applyMatrix3(e),this.setXY(t,ja.x,ja.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hh&&(e.usage=this.usage),e}}class vm extends Rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xm extends Rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ur extends Rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let U0=0;const Jn=new ut,Dc=new Xt,Os=new W,Hn=new mr,Fo=new mr,dn=new W;class zi extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pm(e)?xm:vm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ct().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,n){return Jn.makeTranslation(e,t,n),this.applyMatrix4(Jn),this}scale(e,t,n){return Jn.makeScale(e,t,n),this.applyMatrix4(Jn),this}lookAt(e){return Dc.lookAt(e),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ur(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(Hn.min,Fo.min),Hn.expandByPoint(dn),dn.addVectors(Hn.max,Fo.max),Hn.expandByPoint(dn)):(Hn.expandByPoint(Fo.min),Hn.expandByPoint(Fo.max))}Hn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)dn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(dn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)dn.fromBufferAttribute(a,c),l&&(Os.fromBufferAttribute(e,c),dn.add(Os)),i=Math.max(i,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new W,l[L]=new W;const c=new W,u=new W,d=new W,f=new Et,h=new Et,g=new Et,_=new W,m=new W;function p(L,M,T){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,T),f.fromBufferAttribute(r,L),h.fromBufferAttribute(r,M),g.fromBufferAttribute(r,T),u.sub(c),d.sub(c),h.sub(f),g.sub(f);const D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(D),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),a[L].add(_),a[M].add(_),a[T].add(_),l[L].add(m),l[M].add(m),l[T].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,M=S.length;L<M;++L){const T=S[L],D=T.start,q=T.count;for(let H=D,ee=D+q;H<ee;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new W,y=new W,A=new W,I=new W;function R(L){A.fromBufferAttribute(i,L),I.copy(A);const M=a[L];b.copy(M),b.sub(A.multiplyScalar(A.dot(M))).normalize(),y.crossVectors(I,M);const D=y.dot(l[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,D)}for(let L=0,M=S.length;L<M;++L){const T=S[L],D=T.start,q=T.count;for(let H=D,ee=D+q;H<ee;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const i=new W,r=new W,o=new W,a=new W,l=new W,c=new W,u=new W,d=new W;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[h++]}return new Rn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,n);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const af=new ut,$r=new rc,Za=new ki,lf=new W,Ja=new W,Qa=new W,el=new W,Uc=new W,tl=new W,cf=new W,nl=new W;class Yn extends Xt{constructor(e=new zi,t=new hs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){tl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Uc.fromBufferAttribute(d,e),o?tl.addScaledVector(Uc,u):tl.addScaledVector(Uc.sub(t),u))}t.add(tl)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(r),$r.copy(e.ray).recast(e.near),!(Za.containsPoint($r.origin)===!1&&($r.intersectSphere(Za,lf)===null||$r.origin.distanceToSquared(lf)>(e.far-e.near)**2))&&(af.copy(r).invert(),$r.copy(e.ray).applyMatrix4(af),!(n.boundingBox!==null&&$r.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$r)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,h.start),b=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let y=S,A=b;y<A;y+=3){const I=a.getX(y),R=a.getX(y+1),L=a.getX(y+2);i=il(this,p,e,n,c,u,d,I,R,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);i=il(this,o,e,n,c,u,d,S,b,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,h.start),b=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let y=S,A=b;y<A;y+=3){const I=y,R=y+1,L=y+2;i=il(this,p,e,n,c,u,d,I,R,L),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const S=m,b=m+1,y=m+2;i=il(this,o,e,n,c,u,d,S,b,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function N0(s,e,t,n,i,r,o,a){let l;if(e.side===Un?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===hr,a),l===null)return null;nl.copy(a),nl.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(nl);return c<t.near||c>t.far?null:{distance:c,point:nl.clone(),object:s}}function il(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Ja),s.getVertexPosition(l,Qa),s.getVertexPosition(c,el);const u=N0(s,e,t,n,Ja,Qa,el,cf);if(u){const d=new W;vi.getBarycoord(cf,Ja,Qa,el,d),i&&(u.uv=vi.getInterpolatedAttribute(i,a,l,c,d,new Et)),r&&(u.uv1=vi.getInterpolatedAttribute(r,a,l,c,d,new Et)),o&&(u.normal=vi.getInterpolatedAttribute(o,a,l,c,d,new W),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new W,materialIndex:0};vi.getNormal(Ja,Qa,el,f.normal),u.face=f,u.barycoord=d}return u}class Fa extends zi{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ur(c,3)),this.setAttribute("normal",new ur(u,3)),this.setAttribute("uv",new ur(d,2));function g(_,m,p,S,b,y,A,I,R,L,M){const T=y/R,D=A/L,q=y/2,H=A/2,ee=I/2,ne=R+1,K=L+1;let Q=0,j=0;const Te=new W;for(let Pe=0;Pe<K;Pe++){const Ae=Pe*D-H;for(let Le=0;Le<ne;Le++){const qe=Le*T-q;Te[_]=qe*S,Te[m]=Ae*b,Te[p]=ee,c.push(Te.x,Te.y,Te.z),Te[_]=0,Te[m]=0,Te[p]=I>0?1:-1,u.push(Te.x,Te.y,Te.z),d.push(Le/R),d.push(1-Pe/L),Q+=1}}for(let Pe=0;Pe<L;Pe++)for(let Ae=0;Ae<R;Ae++){const Le=f+Ae+ne*Pe,qe=f+Ae+ne*(Pe+1),Z=f+(Ae+1)+ne*(Pe+1),ye=f+(Ae+1)+ne*Pe;l.push(Le,qe,ye),l.push(qe,Z,ye),j+=6}a.addGroup(h,j,M),h+=j,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function go(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function En(s){const e={};for(let t=0;t<s.length;t++){const n=go(s[t]);for(const i in n)e[i]=n[i]}return e}function O0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ym(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const F0={clone:go,merge:En};var B0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zr extends Ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B0,this.fragmentShader=k0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=O0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Sm extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=ir}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new W,uf=new Et,hf=new Et;class Tn extends Sm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,t){return this.getViewBounds(e,uf,hf),t.subVectors(hf,uf)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(la*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fs=-90,Bs=1;class z0 extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Tn(Fs,Bs,e,t);i.layers=this.layers,this.add(i);const r=new Tn(Fs,Bs,e,t);r.layers=this.layers,this.add(r);const o=new Tn(Fs,Bs,e,t);o.layers=this.layers,this.add(o);const a=new Tn(Fs,Bs,e,t);a.layers=this.layers,this.add(a);const l=new Tn(Fs,Bs,e,t);l.layers=this.layers,this.add(l);const c=new Tn(Fs,Bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ir)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Mm extends pn{constructor(e=[],t=fo,n,i,r,o,a,l,c,u){super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class H0 extends ys{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Mm(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Fa(5,5,5),r=new zr({name:"CubemapFromEquirect",uniforms:go(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:Nr});r.uniforms.tEquirect.value=t;const o=new Yn(i,r),a=t.minFilter;return t.minFilter===Li&&(t.minFilter=fn),new z0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Cr extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const V0={type:"move"};class Nc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(V0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Cr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class G0 extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fi,this.environmentIntensity=1,this.environmentRotation=new Fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class W0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hh,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const bn=new W;class td{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=_i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_i(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new td(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const df=new W,ff=new Pt,pf=new Pt,X0=new W,mf=new ut,rl=new W,Oc=new ki,gf=new ut,Fc=new rc;class Y0 extends Yn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gd,this.bindMatrix=new ut,this.bindMatrixInverse=new ut,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rl),this.boundingBox.expandByPoint(rl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ki),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,rl),this.boundingSphere.expandByPoint(rl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oc.copy(this.boundingSphere),Oc.applyMatrix4(i),e.ray.intersectsSphere(Oc)!==!1&&(gf.copy(i).invert(),Fc.copy(e.ray).applyMatrix4(gf),!(this.boundingBox!==null&&Fc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===U_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ff.fromBufferAttribute(i.attributes.skinIndex,e),pf.fromBufferAttribute(i.attributes.skinWeight,e),df.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=pf.getComponent(r);if(o!==0){const a=ff.getComponent(r);mf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(X0.copy(df).applyMatrix4(mf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class bm extends Xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class nd extends pn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=An,u=An,d,f){super(null,o,a,l,c,u,i,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _f=new ut,q0=new ut;class id{constructor(e=[],t=[]){this.uuid=yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ut)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ut;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:q0;_f.multiplyMatrices(a,t[r]),_f.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new id(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new nd(t,e,e,Xn,Dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new bm),this.bones.push(o),this.boneInverses.push(new ut().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class dh extends Rn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ks=new ut,vf=new ut,sl=[],xf=new mr,$0=new ut,Bo=new Yn,ko=new ki;class K0 extends Yn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new dh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,$0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ks),xf.copy(e.boundingBox).applyMatrix4(ks),this.boundingBox.union(xf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ks),ko.copy(e.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(ko)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Bo.geometry=this.geometry,Bo.material=this.material,Bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ko.copy(this.boundingSphere),ko.applyMatrix4(n),e.ray.intersectsSphere(ko)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ks),vf.multiplyMatrices(n,ks),Bo.matrixWorld=vf,Bo.raycast(e,sl);for(let o=0,a=sl.length;o<a;o++){const l=sl[o];l.instanceId=r,l.object=this,t.push(l)}sl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new dh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new nd(new Float32Array(i*this.count),i,this.count,ic,Dn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Bc=new W,j0=new W,Z0=new ct;class rs{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Bc.subVectors(n,t).cross(j0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Bc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Z0.getNormalMatrix(e),i=this.coplanarPoint(Bc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new ki,J0=new Et(.5,.5),ol=new W;class rd{constructor(e=new rs,t=new rs,n=new rs,i=new rs,r=new rs,o=new rs){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ir){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],f=i[7],h=i[8],g=i[9],_=i[10],m=i[11],p=i[12],S=i[13],b=i[14],y=i[15];if(n[0].setComponents(l-r,f-c,m-h,y-p).normalize(),n[1].setComponents(l+r,f+c,m+h,y+p).normalize(),n[2].setComponents(l+o,f+u,m+g,y+S).normalize(),n[3].setComponents(l-o,f-u,m-g,y-S).normalize(),n[4].setComponents(l-a,f-d,m-_,y-b).normalize(),t===ir)n[5].setComponents(l+a,f+d,m+_,y+b).normalize();else if(t===Hl)n[5].setComponents(a,d,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);const t=J0.distanceTo(e.center);return Kr.radius=.7071067811865476+t,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ol.x=i.normal.x>0?e.max.x:e.min.x,ol.y=i.normal.y>0?e.max.y:e.min.y,ol.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ol)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Em extends Ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vl=new W,Gl=new W,yf=new ut,zo=new rc,al=new ki,kc=new W,Sf=new W;class sd extends Xt{constructor(e=new zi,t=new Em){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Vl.fromBufferAttribute(t,i-1),Gl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Vl.distanceTo(Gl);e.setAttribute("lineDistance",new ur(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),al.copy(n.boundingSphere),al.applyMatrix4(i),al.radius+=r,e.ray.intersectsSphere(al)===!1)return;yf.copy(i).invert(),zo.copy(e.ray).applyMatrix4(yf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=c){const p=u.getX(_),S=u.getX(_+1),b=ll(this,e,zo,l,p,S,_);b&&t.push(b)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(h),p=ll(this,e,zo,l,_,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=c){const p=ll(this,e,zo,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=ll(this,e,zo,l,g-1,h,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ll(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Vl.fromBufferAttribute(a,i),Gl.fromBufferAttribute(a,r),t.distanceSqToSegment(Vl,Gl,kc,Sf)>n)return;kc.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(kc);if(!(c<e.near||c>e.far))return{distance:c,point:Sf.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Mf=new W,bf=new W;class Q0 extends sd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Mf.fromBufferAttribute(t,i),bf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Mf.distanceTo(bf);e.setAttribute("lineDistance",new ur(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ev extends sd{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Tm extends Ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ef=new ut,fh=new rc,cl=new ki,ul=new W;class tv extends Xt{constructor(e=new zi,t=new Tm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cl.copy(n.boundingSphere),cl.applyMatrix4(i),cl.radius+=r,e.ray.intersectsSphere(cl)===!1)return;Ef.copy(i).invert(),fh.copy(e.ray).applyMatrix4(Ef);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=f,_=h;g<_;g++){const m=c.getX(g);ul.fromBufferAttribute(d,m),Tf(ul,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let g=f,_=h;g<_;g++)ul.fromBufferAttribute(d,g),Tf(ul,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Tf(s,e,t,n,i,r,o){const a=fh.distanceSqToPoint(s);if(a<t){const l=new W;fh.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class wm extends pn{constructor(e,t,n=xs,i,r,o,a=An,l=An,c,u=ya,d=1){if(u!==ya&&u!==Sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ed(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class sc extends zi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=e/a,f=t/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*f-o;for(let b=0;b<c;b++){const y=b*d-r;g.push(y,-S,0),_.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const b=S+c*p,y=S+c*(p+1),A=S+1+c*(p+1),I=S+1+c*p;h.push(b,y,I),h.push(y,A,I)}this.setIndex(h),this.setAttribute("position",new ur(g,3)),this.setAttribute("normal",new ur(_,3)),this.setAttribute("uv",new ur(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.width,e.height,e.widthSegments,e.heightSegments)}}class od extends Ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dm,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hi extends od{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new at(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new at(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new at(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class nv extends Ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iv extends Ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function hl(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function rv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function sv(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function wf(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Am(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Ba{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ov extends Ba{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qs,endingEnd:qs}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case $s:r=e,a=2*t-n;break;case kl:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $s:o=e,l=2*n-t;break;case kl:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,S=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,b=(-1-h)*m+(1.5+h)*_+.5*g,y=h*m-h*_;for(let A=0;A!==a;++A)r[A]=p*o[u+A]+S*o[c+A]+b*o[l+A]+y*o[d+A];return r}}class Rm extends Ba{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),d=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*u;return r}}class av extends Ba{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class bi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hl(t,this.TimeBufferType),this.values=hl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:hl(e.times,Array),values:hl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new av(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ov(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ma:t=this.InterpolantFactoryMethodDiscrete;break;case ba:t=this.InterpolantFactoryMethodLinear;break;case pc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ma;case this.InterpolantFactoryMethodLinear:return ba;case this.InterpolantFactoryMethodSmooth:return pc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&rv(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===pc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*n,f=d-n,h=d+n;for(let g=0;g!==n;++g){const _=t[d+g];if(_!==t[f+g]||_!==t[h+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,f=o*n;for(let h=0;h!==n;++h)t[f+h]=t[d+h]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}bi.prototype.ValueTypeName="";bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=ba;class Po extends bi{constructor(e,t,n){super(e,t,n)}}Po.prototype.ValueTypeName="bool";Po.prototype.ValueBufferType=Array;Po.prototype.DefaultInterpolation=Ma;Po.prototype.InterpolantFactoryMethodLinear=void 0;Po.prototype.InterpolantFactoryMethodSmooth=void 0;class Cm extends bi{constructor(e,t,n,i){super(e,t,n,i)}}Cm.prototype.ValueTypeName="color";class _o extends bi{constructor(e,t,n,i){super(e,t,n,i)}}_o.prototype.ValueTypeName="number";class lv extends Ba{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Si.slerpFlat(r,0,o,c-a,o,c,l);return r}}class vo extends bi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new lv(this.times,this.values,this.getValueSize(),e)}}vo.prototype.ValueTypeName="quaternion";vo.prototype.InterpolantFactoryMethodSmooth=void 0;class Io extends bi{constructor(e,t,n){super(e,t,n)}}Io.prototype.ValueTypeName="string";Io.prototype.ValueBufferType=Array;Io.prototype.DefaultInterpolation=Ma;Io.prototype.InterpolantFactoryMethodLinear=void 0;Io.prototype.InterpolantFactoryMethodSmooth=void 0;class xo extends bi{constructor(e,t,n,i){super(e,t,n,i)}}xo.prototype.ValueTypeName="vector";class ph{constructor(e="",t=-1,n=[],i=Jh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=yi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(uv(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(bi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=sv(l);l=wf(l,1,u),c=wf(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new _o(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const d=u[1];let f=i[d];f||(i[d]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,f,h,g,_){if(h.length!==0){const m=[],p=[];Am(h,m,p,g),m.length!==0&&_.push(new d(f,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const h={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)h[f[g].morphTargets[_]]=-1;for(const _ in h){const m=[],p=[];for(let S=0;S!==f[g].morphTargets.length;++S){const b=f[g];m.push(b.time),p.push(b.morphTarget===_?1:0)}i.push(new _o(".morphTargetInfluence["+_+"]",m,p))}l=h.length*o}else{const h=".bones["+t[d].name+"]";n(xo,h+".position",f,"pos",i),n(vo,h+".quaternion",f,"rot",i),n(xo,h+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function cv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _o;case"vector":case"vector2":case"vector3":case"vector4":return xo;case"color":return Cm;case"quaternion":return vo;case"bool":case"boolean":return Po;case"string":return Io}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function uv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=cv(s.type);if(s.times===void 0){const t=[],n=[];Am(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const rr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Pm{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const h=c[d],g=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}}const hv=new Pm;class Es{constructor(e){this.manager=e!==void 0?e:hv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Es.DEFAULT_MATERIAL_NAME="__DEFAULT";const qi={};class dv extends Error{constructor(e,t){super(e),this.response=t}}class ad extends Es{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=rr.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(qi[e]!==void 0){qi[e].push({onLoad:t,onProgress:n,onError:i});return}qi[e]=[],qi[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=qi[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),h=f?parseInt(f):0,g=h!==0;let _=0;const m=new ReadableStream({start(p){S();function S(){d.read().then(({done:b,value:y})=>{if(b)p.close();else{_+=y.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:h});for(let I=0,R=u.length;I<R;I++){const L=u[I];L.onProgress&&L.onProgress(A)}p.enqueue(y),S()}},b=>{p.error(b)})}}});return new Response(m)}else throw new dv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,h=new TextDecoder(f);return c.arrayBuffer().then(g=>h.decode(g))}}}).then(c=>{rr.add(`file:${e}`,c);const u=qi[e];delete qi[e];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=qi[e];if(u===void 0)throw this.manager.itemError(e),c;delete qi[e];for(let d=0,f=u.length;d<f;d++){const h=u[d];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}const zs=new WeakMap;class fv extends Es{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=rr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=zs.get(o);d===void 0&&(d=[],zs.set(o,d)),d.push({onLoad:t,onError:i})}return o}const a=Ea("img");function l(){u(),t&&t(this);const d=zs.get(this)||[];for(let f=0;f<d.length;f++){const h=d[f];h.onLoad&&h.onLoad(this)}zs.delete(this),r.manager.itemEnd(e)}function c(d){u(),i&&i(d),rr.remove(`image:${e}`);const f=zs.get(this)||[];for(let h=0;h<f.length;h++){const g=f[h];g.onError&&g.onError(d)}zs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),rr.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class pv extends Es{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new nd,a=new ad(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Ii,o.wrapT=c.wrapT!==void 0?c.wrapT:Ii,o.magFilter=c.magFilter!==void 0?c.magFilter:fn,o.minFilter=c.minFilter!==void 0?c.minFilter:fn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Li),c.mipmapCount===1&&(o.minFilter=fn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class Im extends Es{constructor(e){super(e)}load(e,t,n,i){const r=new pn,o=new fv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ld extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const zc=new ut,Af=new W,Rf=new W;class cd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=Oi,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rd,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Af.setFromMatrixPosition(e.matrixWorld),t.position.copy(Af),Rf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rf),t.updateMatrixWorld(),zc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class mv extends cd{constructor(){super(new Tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=mo*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class gv extends ld{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new mv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Cf=new ut,Ho=new W,Hc=new W;class _v extends cd{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ho.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ho),Hc.copy(n.position),Hc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Hc),n.updateMatrixWorld(),i.makeTranslation(-Ho.x,-Ho.y,-Ho.z),Cf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cf)}}class Lm extends ld{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new _v}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ud extends Sm{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vv extends cd{constructor(){super(new ud(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dm extends ld{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new vv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ua{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Vc=new WeakMap;class xv extends Es{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=rr.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Vc.has(o)===!0)i&&i(Vc.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return rr.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Vc.set(l,c),rr.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});rr.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}}class yv extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Sv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Mv{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Si.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;Si.multiplyQuaternionsFlat(e,o,e,t,e,n),Si.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const hd="\\[\\]\\.:\\/",bv=new RegExp("["+hd+"]","g"),dd="[^"+hd+"]",Ev="[^"+hd.replace("\\.","")+"]",Tv=/((?:WC+[\/:])*)/.source.replace("WC",dd),wv=/(WCOD+)?/.source.replace("WCOD",Ev),Av=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dd),Rv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dd),Cv=new RegExp("^"+Tv+wv+Av+Rv+"$"),Pv=["material","materials","bones","map"];class Iv{constructor(e,t,n){const i=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Lt{constructor(e,t,n){this.path=t,this.parsedPath=n||Lt.parseTrackName(t),this.node=Lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Lt.Composite(e,t,n):new Lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bv,"")}static parseTrackName(e){const t=Cv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Pv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Lt.Composite=Iv;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Lv{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:qs,endingEnd:qs};for(let c=0;c!==o;++c){const u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=N_,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case F_:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Jh:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===O_;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===ch){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=$s,i.endingEnd=$s):(e?i.endingStart=this.zeroSlopeAtStart?$s:qs:i.endingStart=kl,t?i.endingEnd=this.zeroSlopeAtEnd?$s:qs:i.endingEnd=kl)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const Dv=new Float32Array(1);class Uv extends bs{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==r;++d){const f=i[d],h=f.name;let g=u[h];if(g!==void 0)++g.referenceCount,o[d]=g;else{if(g=o[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,h));continue}const _=t&&t._propertyBindings[d].binding.parsedPath;g=new Mv(Lt.create(n,h,_),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,h),o[d]=g}a[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const d=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete d[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Rm(new Float32Array(2),new Float32Array(2),1,Dv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?ph.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Jh),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new Lv(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?ph.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}function Pf(s,e,t,n){const i=Nv(n);switch(t){case am:return s*e;case ic:return s*e/i.components*i.byteLength;case Kh:return s*e/i.components*i.byteLength;case cm:return s*e*2/i.components*i.byteLength;case jh:return s*e*2/i.components*i.byteLength;case lm:return s*e*3/i.components*i.byteLength;case Xn:return s*e*4/i.components*i.byteLength;case Zh:return s*e*4/i.components*i.byteLength;case El:case Tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wl:case Al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bu:case zu:return Math.max(s,16)*Math.max(e,8)/4;case Fu:case ku:return Math.max(s,8)*Math.max(e,8)/2;case Hu:case Vu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Yu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case qu:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case $u:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ku:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ju:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Zu:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ju:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Qu:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case eh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case th:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case nh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ih:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Rl:case rh:case sh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case um:case oh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ah:case lh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nv(s){switch(s){case Oi:case rm:return{byteLength:1,components:1};case va:case sm:case nr:return{byteLength:2,components:1};case qh:case $h:return{byteLength:2,components:4};case xs:case Yh:case Dn:return{byteLength:4,components:1};case om:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Um(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ov(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=s.HALF_FLOAT:h=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=s.SHORT;else if(c instanceof Uint32Array)h=s.UNSIGNED_INT;else if(c instanceof Int32Array)h=s.INT;else if(c instanceof Int8Array)h=s.BYTE;else if(c instanceof Uint8Array)h=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],_=d[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const _=d[h];s.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Fv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bv=`#ifdef USE_ALPHAHASH
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
#endif`,kv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gv=`#ifdef USE_AOMAP
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
#endif`,Wv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xv=`#ifdef USE_BATCHING
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
#endif`,Yv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$v=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jv=`#ifdef USE_IRIDESCENCE
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
#endif`,Zv=`#ifdef USE_BUMPMAP
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
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ox=`#define PI 3.141592653589793
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
} // validated`,ax=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lx=`vec3 transformedNormal = objectNormal;
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
#endif`,cx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fx="gl_FragColor = linearToOutputTexel( gl_FragColor );",px=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,vx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xx=`#ifdef USE_ENVMAP
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
#endif`,yx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ex=`#ifdef USE_GRADIENTMAP
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
}`,Tx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rx=`uniform bool receiveShadow;
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
#endif`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ux=`PhysicalMaterial material;
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
#endif`,Nx=`struct PhysicalMaterial {
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
}`,Ox=`
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
#endif`,Fx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yx=`#if defined( USE_POINTS_UV )
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
#endif`,qx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$x=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jx=`#ifdef USE_MORPHTARGETS
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
#endif`,Qx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ey=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ty=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ry=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sy=`#ifdef USE_NORMALMAP
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
#endif`,oy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ay=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ly=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,py=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,my=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_y=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sy=`float getShadowMask() {
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
}`,My=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,by=`#ifdef USE_SKINNING
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
#endif`,Ey=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ty=`#ifdef USE_SKINNING
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
#endif`,wy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ay=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ry=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Py=`#ifdef USE_TRANSMISSION
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
#endif`,Iy=`#ifdef USE_TRANSMISSION
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
#endif`,Ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ny=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Oy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fy=`uniform sampler2D t2D;
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
}`,By=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ky=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vy=`#include <common>
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
}`,Gy=`#if DEPTH_PACKING == 3200
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
}`,Wy=`#define DISTANCE
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
}`,Xy=`#define DISTANCE
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
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$y=`uniform float scale;
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
}`,Ky=`uniform vec3 diffuse;
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
}`,jy=`#include <common>
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
}`,Zy=`uniform vec3 diffuse;
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
}`,Jy=`#define LAMBERT
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
}`,Qy=`#define LAMBERT
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
}`,eS=`#define MATCAP
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
}`,tS=`#define MATCAP
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
}`,nS=`#define NORMAL
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
}`,iS=`#define NORMAL
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
}`,rS=`#define PHONG
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
}`,sS=`#define PHONG
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
}`,oS=`#define STANDARD
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
}`,aS=`#define STANDARD
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
}`,lS=`#define TOON
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
}`,cS=`#define TOON
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
}`,uS=`uniform float size;
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
}`,hS=`uniform vec3 diffuse;
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
}`,dS=`#include <common>
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
}`,fS=`uniform vec3 color;
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
}`,pS=`uniform float rotation;
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
}`,mS=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Fv,alphahash_pars_fragment:Bv,alphamap_fragment:kv,alphamap_pars_fragment:zv,alphatest_fragment:Hv,alphatest_pars_fragment:Vv,aomap_fragment:Gv,aomap_pars_fragment:Wv,batching_pars_vertex:Xv,batching_vertex:Yv,begin_vertex:qv,beginnormal_vertex:$v,bsdfs:Kv,iridescence_fragment:jv,bumpmap_pars_fragment:Zv,clipping_planes_fragment:Jv,clipping_planes_pars_fragment:Qv,clipping_planes_pars_vertex:ex,clipping_planes_vertex:tx,color_fragment:nx,color_pars_fragment:ix,color_pars_vertex:rx,color_vertex:sx,common:ox,cube_uv_reflection_fragment:ax,defaultnormal_vertex:lx,displacementmap_pars_vertex:cx,displacementmap_vertex:ux,emissivemap_fragment:hx,emissivemap_pars_fragment:dx,colorspace_fragment:fx,colorspace_pars_fragment:px,envmap_fragment:mx,envmap_common_pars_fragment:gx,envmap_pars_fragment:_x,envmap_pars_vertex:vx,envmap_physical_pars_fragment:Cx,envmap_vertex:xx,fog_vertex:yx,fog_pars_vertex:Sx,fog_fragment:Mx,fog_pars_fragment:bx,gradientmap_pars_fragment:Ex,lightmap_pars_fragment:Tx,lights_lambert_fragment:wx,lights_lambert_pars_fragment:Ax,lights_pars_begin:Rx,lights_toon_fragment:Px,lights_toon_pars_fragment:Ix,lights_phong_fragment:Lx,lights_phong_pars_fragment:Dx,lights_physical_fragment:Ux,lights_physical_pars_fragment:Nx,lights_fragment_begin:Ox,lights_fragment_maps:Fx,lights_fragment_end:Bx,logdepthbuf_fragment:kx,logdepthbuf_pars_fragment:zx,logdepthbuf_pars_vertex:Hx,logdepthbuf_vertex:Vx,map_fragment:Gx,map_pars_fragment:Wx,map_particle_fragment:Xx,map_particle_pars_fragment:Yx,metalnessmap_fragment:qx,metalnessmap_pars_fragment:$x,morphinstance_vertex:Kx,morphcolor_vertex:jx,morphnormal_vertex:Zx,morphtarget_pars_vertex:Jx,morphtarget_vertex:Qx,normal_fragment_begin:ey,normal_fragment_maps:ty,normal_pars_fragment:ny,normal_pars_vertex:iy,normal_vertex:ry,normalmap_pars_fragment:sy,clearcoat_normal_fragment_begin:oy,clearcoat_normal_fragment_maps:ay,clearcoat_pars_fragment:ly,iridescence_pars_fragment:cy,opaque_fragment:uy,packing:hy,premultiplied_alpha_fragment:dy,project_vertex:fy,dithering_fragment:py,dithering_pars_fragment:my,roughnessmap_fragment:gy,roughnessmap_pars_fragment:_y,shadowmap_pars_fragment:vy,shadowmap_pars_vertex:xy,shadowmap_vertex:yy,shadowmask_pars_fragment:Sy,skinbase_vertex:My,skinning_pars_vertex:by,skinning_vertex:Ey,skinnormal_vertex:Ty,specularmap_fragment:wy,specularmap_pars_fragment:Ay,tonemapping_fragment:Ry,tonemapping_pars_fragment:Cy,transmission_fragment:Py,transmission_pars_fragment:Iy,uv_pars_fragment:Ly,uv_pars_vertex:Dy,uv_vertex:Uy,worldpos_vertex:Ny,background_vert:Oy,background_frag:Fy,backgroundCube_vert:By,backgroundCube_frag:ky,cube_vert:zy,cube_frag:Hy,depth_vert:Vy,depth_frag:Gy,distanceRGBA_vert:Wy,distanceRGBA_frag:Xy,equirect_vert:Yy,equirect_frag:qy,linedashed_vert:$y,linedashed_frag:Ky,meshbasic_vert:jy,meshbasic_frag:Zy,meshlambert_vert:Jy,meshlambert_frag:Qy,meshmatcap_vert:eS,meshmatcap_frag:tS,meshnormal_vert:nS,meshnormal_frag:iS,meshphong_vert:rS,meshphong_frag:sS,meshphysical_vert:oS,meshphysical_frag:aS,meshtoon_vert:lS,meshtoon_frag:cS,points_vert:uS,points_frag:hS,shadow_vert:dS,shadow_frag:fS,sprite_vert:pS,sprite_frag:mS},Ne={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ai={basic:{uniforms:En([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:En([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new at(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:En([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:En([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:En([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new at(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:En([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:En([Ne.points,Ne.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:En([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:En([Ne.common,Ne.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:En([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:En([Ne.sprite,Ne.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:En([Ne.common,Ne.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:En([Ne.lights,Ne.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ai.physical={uniforms:En([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const dl={r:0,b:0,g:0},jr=new Fi,gS=new ut;function _S(s,e,t,n,i,r,o){const a=new at(0);let l=r===!0?0:1,c,u,d=null,f=0,h=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function _(b){let y=!1;const A=g(b);A===null?p(a,l):A&&A.isColor&&(p(A,1),y=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,y){const A=g(y);A&&(A.isCubeTexture||A.mapping===nc)?(u===void 0&&(u=new Yn(new Fa(1,1,1),new zr({name:"BackgroundCubeMaterial",uniforms:go(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),jr.copy(y.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(gS.makeRotationFromEuler(jr)),u.material.toneMapped=wt.getTransfer(A.colorSpace)!==Ot,(d!==A||f!==A.version||h!==s.toneMapping)&&(u.material.needsUpdate=!0,d=A,f=A.version,h=s.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Yn(new sc(2,2),new zr({name:"BackgroundMaterial",uniforms:go(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=wt.getTransfer(A.colorSpace)!==Ot,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,d=A,f=A.version,h=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,y){b.getRGB(dl,ym(s)),n.buffers.color.setClear(dl.r,dl.g,dl.b,y,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:_,addToRenderList:m,dispose:S}}function vS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(T,D,q,H,ee){let ne=!1;const K=d(H,q,D);r!==K&&(r=K,c(r.object)),ne=h(T,H,q,ee),ne&&g(T,H,q,ee),ee!==null&&e.update(ee,s.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,y(T,D,q,H),ee!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return s.createVertexArray()}function c(T){return s.bindVertexArray(T)}function u(T){return s.deleteVertexArray(T)}function d(T,D,q){const H=q.wireframe===!0;let ee=n[T.id];ee===void 0&&(ee={},n[T.id]=ee);let ne=ee[D.id];ne===void 0&&(ne={},ee[D.id]=ne);let K=ne[H];return K===void 0&&(K=f(l()),ne[H]=K),K}function f(T){const D=[],q=[],H=[];for(let ee=0;ee<t;ee++)D[ee]=0,q[ee]=0,H[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:q,attributeDivisors:H,object:T,attributes:{},index:null}}function h(T,D,q,H){const ee=r.attributes,ne=D.attributes;let K=0;const Q=q.getAttributes();for(const j in Q)if(Q[j].location>=0){const Pe=ee[j];let Ae=ne[j];if(Ae===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(Ae=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(Ae=T.instanceColor)),Pe===void 0||Pe.attribute!==Ae||Ae&&Pe.data!==Ae.data)return!0;K++}return r.attributesNum!==K||r.index!==H}function g(T,D,q,H){const ee={},ne=D.attributes;let K=0;const Q=q.getAttributes();for(const j in Q)if(Q[j].location>=0){let Pe=ne[j];Pe===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(Pe=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(Pe=T.instanceColor));const Ae={};Ae.attribute=Pe,Pe&&Pe.data&&(Ae.data=Pe.data),ee[j]=Ae,K++}r.attributes=ee,r.attributesNum=K,r.index=H}function _(){const T=r.newAttributes;for(let D=0,q=T.length;D<q;D++)T[D]=0}function m(T){p(T,0)}function p(T,D){const q=r.newAttributes,H=r.enabledAttributes,ee=r.attributeDivisors;q[T]=1,H[T]===0&&(s.enableVertexAttribArray(T),H[T]=1),ee[T]!==D&&(s.vertexAttribDivisor(T,D),ee[T]=D)}function S(){const T=r.newAttributes,D=r.enabledAttributes;for(let q=0,H=D.length;q<H;q++)D[q]!==T[q]&&(s.disableVertexAttribArray(q),D[q]=0)}function b(T,D,q,H,ee,ne,K){K===!0?s.vertexAttribIPointer(T,D,q,ee,ne):s.vertexAttribPointer(T,D,q,H,ee,ne)}function y(T,D,q,H){_();const ee=H.attributes,ne=q.getAttributes(),K=D.defaultAttributeValues;for(const Q in ne){const j=ne[Q];if(j.location>=0){let Te=ee[Q];if(Te===void 0&&(Q==="instanceMatrix"&&T.instanceMatrix&&(Te=T.instanceMatrix),Q==="instanceColor"&&T.instanceColor&&(Te=T.instanceColor)),Te!==void 0){const Pe=Te.normalized,Ae=Te.itemSize,Le=e.get(Te);if(Le===void 0)continue;const qe=Le.buffer,Z=Le.type,ye=Le.bytesPerElement,Me=Z===s.INT||Z===s.UNSIGNED_INT||Te.gpuType===Yh;if(Te.isInterleavedBufferAttribute){const Re=Te.data,Ie=Re.stride,ht=Te.offset;if(Re.isInstancedInterleavedBuffer){for(let $e=0;$e<j.locationSize;$e++)p(j.location+$e,Re.meshPerAttribute);T.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let $e=0;$e<j.locationSize;$e++)m(j.location+$e);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let $e=0;$e<j.locationSize;$e++)b(j.location+$e,Ae/j.locationSize,Z,Pe,Ie*ye,(ht+Ae/j.locationSize*$e)*ye,Me)}else{if(Te.isInstancedBufferAttribute){for(let Re=0;Re<j.locationSize;Re++)p(j.location+Re,Te.meshPerAttribute);T.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Re=0;Re<j.locationSize;Re++)m(j.location+Re);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let Re=0;Re<j.locationSize;Re++)b(j.location+Re,Ae/j.locationSize,Z,Pe,Ae*ye,Ae/j.locationSize*Re*ye,Me)}}else if(K!==void 0){const Pe=K[Q];if(Pe!==void 0)switch(Pe.length){case 2:s.vertexAttrib2fv(j.location,Pe);break;case 3:s.vertexAttrib3fv(j.location,Pe);break;case 4:s.vertexAttrib4fv(j.location,Pe);break;default:s.vertexAttrib1fv(j.location,Pe)}}}}S()}function A(){L();for(const T in n){const D=n[T];for(const q in D){const H=D[q];for(const ee in H)u(H[ee].object),delete H[ee];delete D[q]}delete n[T]}}function I(T){if(n[T.id]===void 0)return;const D=n[T.id];for(const q in D){const H=D[q];for(const ee in H)u(H[ee].object),delete H[ee];delete D[q]}delete n[T.id]}function R(T){for(const D in n){const q=n[D];if(q[T.id]===void 0)continue;const H=q[T.id];for(const ee in H)u(H[ee].object),delete H[ee];delete q[T.id]}}function L(){M(),o=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:I,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function xS(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(s.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,n,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function yS(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==Xn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Oi&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Dn&&!L)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:y,vertexTextures:A,maxSamples:I}}function SS(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new rs,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||i;return i=f,n=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const S=r?0:n,b=S*4;let y=p.clippingState||null;l.value=y,y=u(g,f,b,h);for(let A=0;A!==b;++A)y[A]=t[A];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,y=h;b!==_;++b,y+=4)o.copy(d[b]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function MS(s){let e=new WeakMap;function t(o,a){return a===Fl?o.mapping=fo:a===Ou&&(o.mapping=po),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fl||a===Ou)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new H0(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Ks=4,If=[.125,.215,.35,.446,.526,.582],ls=20,Gc=new ud,Lf=new at;let Wc=null,Xc=0,Yc=0,qc=!1;const ss=(1+Math.sqrt(5))/2,Hs=1/ss,Df=[new W(-ss,Hs,0),new W(ss,Hs,0),new W(-Hs,0,ss),new W(Hs,0,ss),new W(0,ss,-Hs),new W(0,ss,Hs),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],bS=new W;class Uf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=bS}=r;Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wc,Xc,Yc),this._renderer.xr.enabled=qc,e.scissorTest=!1,fl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fo||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:nr,format:Xn,colorSpace:mn,depthBuffer:!1},i=Nf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nf(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ES(r)),this._blurMaterial=TS(r,e,t)}return i}_compileMaterial(e){const t=new Yn(this._lodPlanes[0],e);this._renderer.compile(t,Gc)}_sceneToCubeUV(e,t,n,i,r){const l=new Tn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Lf),d.toneMapping=Or,d.autoClear=!1;const g=new hs({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),_=new Yn(new Fa,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Lf),m=!0);for(let S=0;S<6;S++){const b=S%3;b===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):b===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const y=this._cubeSize;fl(i,b*y,S>2?y:0,y,y),d.setRenderTarget(i),m&&d.render(_,l),d.render(e,l)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===fo||e.mapping===po;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Yn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;fl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Gc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Df[(i-r-1)%Df.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Yn(this._lodPlanes[i],c),f=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*ls-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ls;m>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);const p=[];let S=0;for(let R=0;R<ls;++R){const L=R/_,M=Math.exp(-L*L/2);p.push(M),R===0?S+=M:R<m&&(S+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const y=this._sizeLods[i],A=3*y*(i>b-Ks?i-b+Ks:0),I=4*(this._cubeSize-y);fl(t,A,I,3*y,2*y),l.setRenderTarget(t),l.render(d,Gc)}}function ES(s){const e=[],t=[],n=[];let i=s;const r=s-Ks+1+If.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Ks?l=If[o-s+Ks-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*h),b=new Float32Array(m*g*h),y=new Float32Array(p*g*h);for(let I=0;I<h;I++){const R=I%3*2/3-1,L=I>2?0:-1,M=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];S.set(M,_*g*I),b.set(f,m*g*I);const T=[I,I,I,I,I,I];y.set(T,p*g*I)}const A=new zi;A.setAttribute("position",new Rn(S,_)),A.setAttribute("uv",new Rn(b,m)),A.setAttribute("faceIndex",new Rn(y,p)),e.push(A),i>Ks&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Nf(s,e,t){const n=new ys(s,e,t);return n.texture.mapping=nc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fl(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function TS(s,e,t){const n=new Float32Array(ls),i=new W(0,1,0);return new zr({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fd(),fragmentShader:`

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
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Of(){return new zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fd(),fragmentShader:`

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
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Ff(){return new zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function fd(){return`

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
	`}function wS(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Fl||l===Ou,u=l===fo||l===po;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Uf(s)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&i(h)?(t===null&&(t=new Uf(s)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function AS(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&eo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function RS(s,e,t,n){const i={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],s.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,g=d.attributes.position;let _=0;if(h!==null){const S=h.array;_=h.version;for(let b=0,y=S.length;b<y;b+=3){const A=S[b+0],I=S[b+1],R=S[b+2];f.push(A,I,I,R,R,A)}}else if(g!==void 0){const S=g.array;_=g.version;for(let b=0,y=S.length/3-1;b<y;b+=3){const A=b+0,I=b+1,R=b+2;f.push(A,I,I,R,R,A)}}else return;const m=new(pm(f)?xm:vm)(f,1);m.version=_;const p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function CS(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){s.drawElements(n,h,r,f*o),t.update(h,n,1)}function c(f,h,g){g!==0&&(s.drawElementsInstanced(n,h,r,f*o,g),t.update(h,n,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,n,1)}function d(f,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,r,f,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=h[S]*_[S];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function PS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function IS(s,e,t){const n=new WeakMap,i=new Pt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let T=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",T)};var h=T;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let A=a.attributes.position.count*y,I=1;A>e.maxTextureSize&&(I=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*I*4*d),L=new mm(R,A,I,d);L.type=Dn,L.needsUpdate=!0;const M=y*4;for(let D=0;D<d;D++){const q=p[D],H=S[D],ee=b[D],ne=A*I*4*D;for(let K=0;K<q.count;K++){const Q=K*M;g===!0&&(i.fromBufferAttribute(q,K),R[ne+Q+0]=i.x,R[ne+Q+1]=i.y,R[ne+Q+2]=i.z,R[ne+Q+3]=0),_===!0&&(i.fromBufferAttribute(H,K),R[ne+Q+4]=i.x,R[ne+Q+5]=i.y,R[ne+Q+6]=i.z,R[ne+Q+7]=0),m===!0&&(i.fromBufferAttribute(ee,K),R[ne+Q+8]=i.x,R[ne+Q+9]=i.y,R[ne+Q+10]=i.z,R[ne+Q+11]=ee.itemSize===4?i.w:1)}}f={count:d,texture:L,size:new Et(A,I)},n.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function LS(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Nm=new pn,Bf=new wm(1,1),Om=new mm,Fm=new S0,Bm=new Mm,kf=[],zf=[],Hf=new Float32Array(16),Vf=new Float32Array(9),Gf=new Float32Array(4);function Lo(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=kf[i];if(r===void 0&&(r=new Float32Array(i),kf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function ln(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function cn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function oc(s,e){let t=zf[e];t===void 0&&(t=new Int32Array(e),zf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function DS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function US(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;s.uniform2fv(this.addr,e),cn(t,e)}}function NS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;s.uniform3fv(this.addr,e),cn(t,e)}}function OS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;s.uniform4fv(this.addr,e),cn(t,e)}}function FS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;Gf.set(n),s.uniformMatrix2fv(this.addr,!1,Gf),cn(t,n)}}function BS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;Vf.set(n),s.uniformMatrix3fv(this.addr,!1,Vf),cn(t,n)}}function kS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;Hf.set(n),s.uniformMatrix4fv(this.addr,!1,Hf),cn(t,n)}}function zS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function HS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;s.uniform2iv(this.addr,e),cn(t,e)}}function VS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;s.uniform3iv(this.addr,e),cn(t,e)}}function GS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;s.uniform4iv(this.addr,e),cn(t,e)}}function WS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function XS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;s.uniform2uiv(this.addr,e),cn(t,e)}}function YS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;s.uniform3uiv(this.addr,e),cn(t,e)}}function qS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;s.uniform4uiv(this.addr,e),cn(t,e)}}function $S(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Bf.compareFunction=fm,r=Bf):r=Nm,t.setTexture2D(e||r,i)}function KS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Fm,i)}function jS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Bm,i)}function ZS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Om,i)}function JS(s){switch(s){case 5126:return DS;case 35664:return US;case 35665:return NS;case 35666:return OS;case 35674:return FS;case 35675:return BS;case 35676:return kS;case 5124:case 35670:return zS;case 35667:case 35671:return HS;case 35668:case 35672:return VS;case 35669:case 35673:return GS;case 5125:return WS;case 36294:return XS;case 36295:return YS;case 36296:return qS;case 35678:case 36198:case 36298:case 36306:case 35682:return $S;case 35679:case 36299:case 36307:return KS;case 35680:case 36300:case 36308:case 36293:return jS;case 36289:case 36303:case 36311:case 36292:return ZS}}function QS(s,e){s.uniform1fv(this.addr,e)}function eM(s,e){const t=Lo(e,this.size,2);s.uniform2fv(this.addr,t)}function tM(s,e){const t=Lo(e,this.size,3);s.uniform3fv(this.addr,t)}function nM(s,e){const t=Lo(e,this.size,4);s.uniform4fv(this.addr,t)}function iM(s,e){const t=Lo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function rM(s,e){const t=Lo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function sM(s,e){const t=Lo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function oM(s,e){s.uniform1iv(this.addr,e)}function aM(s,e){s.uniform2iv(this.addr,e)}function lM(s,e){s.uniform3iv(this.addr,e)}function cM(s,e){s.uniform4iv(this.addr,e)}function uM(s,e){s.uniform1uiv(this.addr,e)}function hM(s,e){s.uniform2uiv(this.addr,e)}function dM(s,e){s.uniform3uiv(this.addr,e)}function fM(s,e){s.uniform4uiv(this.addr,e)}function pM(s,e,t){const n=this.cache,i=e.length,r=oc(t,i);ln(n,r)||(s.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Nm,r[o])}function mM(s,e,t){const n=this.cache,i=e.length,r=oc(t,i);ln(n,r)||(s.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Fm,r[o])}function gM(s,e,t){const n=this.cache,i=e.length,r=oc(t,i);ln(n,r)||(s.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Bm,r[o])}function _M(s,e,t){const n=this.cache,i=e.length,r=oc(t,i);ln(n,r)||(s.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Om,r[o])}function vM(s){switch(s){case 5126:return QS;case 35664:return eM;case 35665:return tM;case 35666:return nM;case 35674:return iM;case 35675:return rM;case 35676:return sM;case 5124:case 35670:return oM;case 35667:case 35671:return aM;case 35668:case 35672:return lM;case 35669:case 35673:return cM;case 5125:return uM;case 36294:return hM;case 36295:return dM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return pM;case 35679:case 36299:case 36307:return mM;case 35680:case 36300:case 36308:case 36293:return gM;case 36289:case 36303:case 36311:case 36292:return _M}}class xM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=JS(t.type)}}class yM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vM(t.type)}}class SM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const $c=/(\w+)(\])?(\[|\.)?/g;function Wf(s,e){s.seq.push(e),s.map[e.id]=e}function MM(s,e,t){const n=s.name,i=n.length;for($c.lastIndex=0;;){const r=$c.exec(n),o=$c.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Wf(t,c===void 0?new xM(a,s,e):new yM(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new SM(a),Wf(t,d)),t=d}}}class Cl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);MM(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Xf(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const bM=37297;let EM=0;function TM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Yf=new ct;function wM(s){wt._getMatrix(Yf,wt.workingColorSpace,s);const e=`mat3( ${Yf.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(s)){case zl:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function qf(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+TM(s.getShaderSource(e),o)}else return i}function AM(s,e){const t=wM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function RM(s,e){let t;switch(e){case R_:t="Linear";break;case C_:t="Reinhard";break;case P_:t="Cineon";break;case tm:t="ACESFilmic";break;case L_:t="AgX";break;case D_:t="Neutral";break;case I_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pl=new W;function CM(){wt.getLuminanceCoefficients(pl);const s=pl.x.toFixed(4),e=pl.y.toFixed(4),t=pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function IM(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function LM(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Qo(s){return s!==""}function $f(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DM=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(s){return s.replace(DM,NM)}const UM=new Map;function NM(s,e){let t=ft[e];if(t===void 0){const n=UM.get(e);if(n!==void 0)t=ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return mh(t)}const OM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jf(s){return s.replace(OM,FM)}function FM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Zf(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function BM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Jp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Qp?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function kM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case fo:case po:e="ENVMAP_TYPE_CUBE";break;case nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case po:e="ENVMAP_MODE_REFRACTION";break}return e}function HM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case em:e="ENVMAP_BLENDING_MULTIPLY";break;case w_:e="ENVMAP_BLENDING_MIX";break;case A_:e="ENVMAP_BLENDING_ADD";break}return e}function VM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function GM(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=BM(t),c=kM(t),u=zM(t),d=HM(t),f=VM(t),h=PM(t),g=IM(r),_=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qo).join(`
`),p.length>0&&(p+=`
`)):(m=[Zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),p=[Zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Or?"#define TONE_MAPPING":"",t.toneMapping!==Or?ft.tonemapping_pars_fragment:"",t.toneMapping!==Or?RM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,AM("linearToOutputTexel",t.outputColorSpace),CM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qo).join(`
`)),o=mh(o),o=$f(o,t),o=Kf(o,t),a=mh(a),a=$f(a,t),a=Kf(a,t),o=jf(o),a=jf(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Xd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=S+m+o,y=S+p+a,A=Xf(i,i.VERTEX_SHADER,b),I=Xf(i,i.FRAGMENT_SHADER,y);i.attachShader(_,A),i.attachShader(_,I),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(D){if(s.debug.checkShaderErrors){const q=i.getProgramInfoLog(_).trim(),H=i.getShaderInfoLog(A).trim(),ee=i.getShaderInfoLog(I).trim();let ne=!0,K=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(ne=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,I);else{const Q=qf(i,A,"vertex"),j=qf(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+q+`
`+Q+`
`+j)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(H===""||ee==="")&&(K=!1);K&&(D.diagnostics={runnable:ne,programLog:q,vertexShader:{log:H,prefix:m},fragmentShader:{log:ee,prefix:p}})}i.deleteShader(A),i.deleteShader(I),L=new Cl(i,_),M=LM(i,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(_,bM)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=EM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=I,this}let WM=0;class XM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new YM(e),t.set(e,n)),n}}class YM{constructor(e){this.id=WM++,this.code=e,this.usedTimes=0}}function qM(s,e,t,n,i,r,o){const a=new gm,l=new XM,c=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures;let h=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,T,D,q,H){const ee=q.fog,ne=H.geometry,K=M.isMeshStandardMaterial?q.environment:null,Q=(M.isMeshStandardMaterial?t:e).get(M.envMap||K),j=Q&&Q.mapping===nc?Q.image.height:null,Te=g[M.type];M.precision!==null&&(h=i.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const Pe=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ae=Pe!==void 0?Pe.length:0;let Le=0;ne.morphAttributes.position!==void 0&&(Le=1),ne.morphAttributes.normal!==void 0&&(Le=2),ne.morphAttributes.color!==void 0&&(Le=3);let qe,Z,ye,Me;if(Te){const X=Ai[Te];qe=X.vertexShader,Z=X.fragmentShader}else qe=M.vertexShader,Z=M.fragmentShader,l.update(M),ye=l.getVertexShaderID(M),Me=l.getFragmentShaderID(M);const Re=s.getRenderTarget(),Ie=s.state.buffers.depth.getReversed(),ht=H.isInstancedMesh===!0,$e=H.isBatchedMesh===!0,pt=!!M.map,vt=!!M.matcap,ot=!!Q,k=!!M.aoMap,nt=!!M.lightMap,xt=!!M.bumpMap,lt=!!M.normalMap,Oe=!!M.displacementMap,mt=!!M.emissiveMap,je=!!M.metalnessMap,it=!!M.roughnessMap,yt=M.anisotropy>0,U=M.clearcoat>0,E=M.dispersion>0,$=M.iridescence>0,re=M.sheen>0,fe=M.transmission>0,ie=yt&&!!M.anisotropyMap,Xe=U&&!!M.clearcoatMap,Ue=U&&!!M.clearcoatNormalMap,Ye=U&&!!M.clearcoatRoughnessMap,Ke=$&&!!M.iridescenceMap,le=$&&!!M.iridescenceThicknessMap,De=re&&!!M.sheenColorMap,Ze=re&&!!M.sheenRoughnessMap,Ve=!!M.specularMap,Ee=!!M.specularColorMap,ke=!!M.specularIntensityMap,z=fe&&!!M.transmissionMap,J=fe&&!!M.thicknessMap,ce=!!M.gradientMap,Be=!!M.alphaMap,be=M.alphaTest>0,ue=!!M.alphaHash,ae=!!M.extensions;let B=Or;M.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(B=s.toneMapping);const se={shaderID:Te,shaderType:M.type,shaderName:M.name,vertexShader:qe,fragmentShader:Z,defines:M.defines,customVertexShaderID:ye,customFragmentShaderID:Me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:$e,batchingColor:$e&&H._colorsTexture!==null,instancing:ht,instancingColor:ht&&H.instanceColor!==null,instancingMorph:ht&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Re===null?s.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:mn,alphaToCoverage:!!M.alphaToCoverage,map:pt,matcap:vt,envMap:ot,envMapMode:ot&&Q.mapping,envMapCubeUVHeight:j,aoMap:k,lightMap:nt,bumpMap:xt,normalMap:lt,displacementMap:f&&Oe,emissiveMap:mt,normalMapObjectSpace:lt&&M.normalMapType===H_,normalMapTangentSpace:lt&&M.normalMapType===dm,metalnessMap:je,roughnessMap:it,anisotropy:yt,anisotropyMap:ie,clearcoat:U,clearcoatMap:Xe,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Ye,dispersion:E,iridescence:$,iridescenceMap:Ke,iridescenceThicknessMap:le,sheen:re,sheenColorMap:De,sheenRoughnessMap:Ze,specularMap:Ve,specularColorMap:Ee,specularIntensityMap:ke,transmission:fe,transmissionMap:z,thicknessMap:J,gradientMap:ce,opaque:M.transparent===!1&&M.blending===Qs&&M.alphaToCoverage===!1,alphaMap:Be,alphaTest:be,alphaHash:ue,combine:M.combine,mapUv:pt&&_(M.map.channel),aoMapUv:k&&_(M.aoMap.channel),lightMapUv:nt&&_(M.lightMap.channel),bumpMapUv:xt&&_(M.bumpMap.channel),normalMapUv:lt&&_(M.normalMap.channel),displacementMapUv:Oe&&_(M.displacementMap.channel),emissiveMapUv:mt&&_(M.emissiveMap.channel),metalnessMapUv:je&&_(M.metalnessMap.channel),roughnessMapUv:it&&_(M.roughnessMap.channel),anisotropyMapUv:ie&&_(M.anisotropyMap.channel),clearcoatMapUv:Xe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&_(M.sheenRoughnessMap.channel),specularMapUv:Ve&&_(M.specularMap.channel),specularColorMapUv:Ee&&_(M.specularColorMap.channel),specularIntensityMapUv:ke&&_(M.specularIntensityMap.channel),transmissionMapUv:z&&_(M.transmissionMap.channel),thicknessMapUv:J&&_(M.thicknessMap.channel),alphaMapUv:Be&&_(M.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(lt||yt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ne.attributes.uv&&(pt||Be),fog:!!ee,useFog:M.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ie,skinning:H.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Le,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:B,decodeVideoTexture:pt&&M.map.isVideoTexture===!0&&wt.getTransfer(M.map.colorSpace)===Ot,decodeVideoTextureEmissive:mt&&M.emissiveMap.isVideoTexture===!0&&wt.getTransfer(M.emissiveMap.colorSpace)===Ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ci,flipSided:M.side===Un,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ae&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&M.extensions.multiDraw===!0||$e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return se.vertexUv1s=c.has(1),se.vertexUv2s=c.has(2),se.vertexUv3s=c.has(3),c.clear(),se}function p(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)T.push(D),T.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(S(T,M),b(T,M),T.push(s.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function S(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function b(M,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),T.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const T=g[M.type];let D;if(T){const q=Ai[T];D=F0.clone(q.uniforms)}else D=M.uniforms;return D}function A(M,T){let D;for(let q=0,H=u.length;q<H;q++){const ee=u[q];if(ee.cacheKey===T){D=ee,++D.usedTimes;break}}return D===void 0&&(D=new GM(s,T,M,r),u.push(D)),D}function I(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),M.destroy()}}function R(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:I,releaseShaderCache:R,programs:u,dispose:L}}function $M(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function KM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Jf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qf(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,h,g,_,m){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function a(d,f,h,g,_,m){const p=o(d,f,h,g,_,m);h.transmission>0?n.push(p):h.transparent===!0?i.push(p):t.push(p)}function l(d,f,h,g,_,m){const p=o(d,f,h,g,_,m);h.transmission>0?n.unshift(p):h.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||KM),n.length>1&&n.sort(f||Jf),i.length>1&&i.sort(f||Jf)}function u(){for(let d=e,f=s.length;d<f;d++){const h=s[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function jM(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Qf,s.set(n,[o])):i>=r.length?(o=new Qf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function ZM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new at};break;case"SpotLight":t={position:new W,direction:new W,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new W,halfWidth:new W,halfHeight:new W};break}return s[e.id]=t,t}}}function JM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let QM=0;function eb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function tb(s){const e=new ZM,t=JM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const i=new W,r=new ut,o=new ut;function a(c){let u=0,d=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,S=0,b=0,y=0,A=0,I=0,R=0;c.sort(eb);for(let M=0,T=c.length;M<T;M++){const D=c[M],q=D.color,H=D.intensity,ee=D.distance,ne=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=q.r*H,d+=q.g*H,f+=q.b*H;else if(D.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(D.sh.coefficients[K],H);R++}else if(D.isDirectionalLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,j=t.get(D);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.directionalShadow[h]=j,n.directionalShadowMap[h]=ne,n.directionalShadowMatrix[h]=D.shadow.matrix,S++}n.directional[h]=K,h++}else if(D.isSpotLight){const K=e.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(q).multiplyScalar(H),K.distance=ee,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,n.spot[_]=K;const Q=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,Q.updateMatrices(D),D.castShadow&&I++),n.spotLightMatrix[_]=Q.matrix,D.castShadow){const j=t.get(D);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=ne,y++}_++}else if(D.isRectAreaLight){const K=e.get(D);K.color.copy(q).multiplyScalar(H),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=K,m++}else if(D.isPointLight){const K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),K.distance=D.distance,K.decay=D.decay,D.castShadow){const Q=D.shadow,j=t.get(D);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=ne,n.pointShadowMatrix[g]=D.shadow.matrix,b++}n.point[g]=K,g++}else if(D.isHemisphereLight){const K=e.get(D);K.skyColor.copy(D.color).multiplyScalar(H),K.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[p]=K,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ne.LTC_FLOAT_1,n.rectAreaLTC2=Ne.LTC_FLOAT_2):(n.rectAreaLTC1=Ne.LTC_HALF_1,n.rectAreaLTC2=Ne.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==h||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==S||L.numPointShadows!==b||L.numSpotShadows!==y||L.numSpotMaps!==A||L.numLightProbes!==R)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=y+A-I,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=R,L.directionalLength=h,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=S,L.numPointShadows=b,L.numSpotShadows=y,L.numSpotMaps=A,L.numLightProbes=R,n.version=QM++)}function l(c,u){let d=0,f=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const b=c[p];if(b.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(b.isSpotLight){const y=n.spot[h];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(b.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(b.width*.5,0,0),y.halfHeight.set(0,b.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(b.matrixWorld),y.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(b.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function ep(s){const e=new tb(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function nb(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new ep(s),e.set(i,[a])):r>=o.length?(a=new ep(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const ib=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rb=`uniform sampler2D shadow_pass;
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
}`;function sb(s,e,t){let n=new rd;const i=new Et,r=new Et,o=new Pt,a=new nv({depthPacking:z_}),l=new iv,c={},u=t.maxTextureSize,d={[hr]:Un,[Un]:hr,[Ci]:Ci},f=new zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:ib,fragmentShader:rb}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new zi;g.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Yn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jp;let p=this.type;this.render=function(I,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const M=s.getRenderTarget(),T=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),q=s.state;q.setBlending(Nr),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const H=p!==$i&&this.type===$i,ee=p===$i&&this.type!==$i;for(let ne=0,K=I.length;ne<K;ne++){const Q=I[ne],j=Q.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const Te=j.getFrameExtents();if(i.multiply(Te),r.copy(j.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Te.x),i.x=r.x*Te.x,j.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Te.y),i.y=r.y*Te.y,j.mapSize.y=r.y)),j.map===null||H===!0||ee===!0){const Ae=this.type!==$i?{minFilter:An,magFilter:An}:{};j.map!==null&&j.map.dispose(),j.map=new ys(i.x,i.y,Ae),j.map.texture.name=Q.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const Pe=j.getViewportCount();for(let Ae=0;Ae<Pe;Ae++){const Le=j.getViewport(Ae);o.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),q.viewport(o),j.updateMatrices(Q,Ae),n=j.getFrustum(),y(R,L,j.camera,Q,this.type)}j.isPointLightShadow!==!0&&this.type===$i&&S(j,L),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,T,D)};function S(I,R){const L=e.update(_);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,h.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ys(i.x,i.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(R,null,L,f,_,null),h.uniforms.shadow_pass.value=I.mapPass.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(R,null,L,h,_,null)}function b(I,R,L,M){let T=null;const D=L.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(D!==void 0)T=D;else if(T=L.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const q=T.uuid,H=R.uuid;let ee=c[q];ee===void 0&&(ee={},c[q]=ee);let ne=ee[H];ne===void 0&&(ne=T.clone(),ee[H]=ne,R.addEventListener("dispose",A)),T=ne}if(T.visible=R.visible,T.wireframe=R.wireframe,M===$i?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:d[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,L.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const q=s.properties.get(T);q.light=L}return T}function y(I,R,L,M,T){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&T===$i)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,I.matrixWorld);const H=e.update(I),ee=I.material;if(Array.isArray(ee)){const ne=H.groups;for(let K=0,Q=ne.length;K<Q;K++){const j=ne[K],Te=ee[j.materialIndex];if(Te&&Te.visible){const Pe=b(I,Te,M,T);I.onBeforeShadow(s,I,R,L,H,Pe,j),s.renderBufferDirect(L,null,H,Pe,I,j),I.onAfterShadow(s,I,R,L,H,Pe,j)}}}else if(ee.visible){const ne=b(I,ee,M,T);I.onBeforeShadow(s,I,R,L,H,ne,null),s.renderBufferDirect(L,null,H,ne,I,null),I.onAfterShadow(s,I,R,L,H,ne,null)}}const q=I.children;for(let H=0,ee=q.length;H<ee;H++)y(q[H],R,L,M,T)}function A(I){I.target.removeEventListener("dispose",A);for(const L in c){const M=c[L],T=I.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}const ob={[Cu]:Pu,[Iu]:Uu,[Lu]:Nu,[ho]:Du,[Pu]:Cu,[Uu]:Iu,[Nu]:Lu,[Du]:ho};function ab(s,e){function t(){let z=!1;const J=new Pt;let ce=null;const Be=new Pt(0,0,0,0);return{setMask:function(be){ce!==be&&!z&&(s.colorMask(be,be,be,be),ce=be)},setLocked:function(be){z=be},setClear:function(be,ue,ae,B,se){se===!0&&(be*=B,ue*=B,ae*=B),J.set(be,ue,ae,B),Be.equals(J)===!1&&(s.clearColor(be,ue,ae,B),Be.copy(J))},reset:function(){z=!1,ce=null,Be.set(-1,0,0,0)}}}function n(){let z=!1,J=!1,ce=null,Be=null,be=null;return{setReversed:function(ue){if(J!==ue){const ae=e.get("EXT_clip_control");ue?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),J=ue;const B=be;be=null,this.setClear(B)}},getReversed:function(){return J},setTest:function(ue){ue?Re(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(ue){ce!==ue&&!z&&(s.depthMask(ue),ce=ue)},setFunc:function(ue){if(J&&(ue=ob[ue]),Be!==ue){switch(ue){case Cu:s.depthFunc(s.NEVER);break;case Pu:s.depthFunc(s.ALWAYS);break;case Iu:s.depthFunc(s.LESS);break;case ho:s.depthFunc(s.LEQUAL);break;case Lu:s.depthFunc(s.EQUAL);break;case Du:s.depthFunc(s.GEQUAL);break;case Uu:s.depthFunc(s.GREATER);break;case Nu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Be=ue}},setLocked:function(ue){z=ue},setClear:function(ue){be!==ue&&(J&&(ue=1-ue),s.clearDepth(ue),be=ue)},reset:function(){z=!1,ce=null,Be=null,be=null,J=!1}}}function i(){let z=!1,J=null,ce=null,Be=null,be=null,ue=null,ae=null,B=null,se=null;return{setTest:function(X){z||(X?Re(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(X){J!==X&&!z&&(s.stencilMask(X),J=X)},setFunc:function(X,_e,Ce){(ce!==X||Be!==_e||be!==Ce)&&(s.stencilFunc(X,_e,Ce),ce=X,Be=_e,be=Ce)},setOp:function(X,_e,Ce){(ue!==X||ae!==_e||B!==Ce)&&(s.stencilOp(X,_e,Ce),ue=X,ae=_e,B=Ce)},setLocked:function(X){z=X},setClear:function(X){se!==X&&(s.clearStencil(X),se=X)},reset:function(){z=!1,J=null,ce=null,Be=null,be=null,ue=null,ae=null,B=null,se=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,_=!1,m=null,p=null,S=null,b=null,y=null,A=null,I=null,R=new at(0,0,0),L=0,M=!1,T=null,D=null,q=null,H=null,ee=null;const ne=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Q=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(j)[1]),K=Q>=1):j.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),K=Q>=2);let Te=null,Pe={};const Ae=s.getParameter(s.SCISSOR_BOX),Le=s.getParameter(s.VIEWPORT),qe=new Pt().fromArray(Ae),Z=new Pt().fromArray(Le);function ye(z,J,ce,Be){const be=new Uint8Array(4),ue=s.createTexture();s.bindTexture(z,ue),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ae=0;ae<ce;ae++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(J,0,s.RGBA,1,1,Be,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(J+ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return ue}const Me={};Me[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),Me[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Me[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Re(s.DEPTH_TEST),o.setFunc(ho),xt(!1),lt(kd),Re(s.CULL_FACE),k(Nr);function Re(z){u[z]!==!0&&(s.enable(z),u[z]=!0)}function Ie(z){u[z]!==!1&&(s.disable(z),u[z]=!1)}function ht(z,J){return d[z]!==J?(s.bindFramebuffer(z,J),d[z]=J,z===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=J),z===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=J),!0):!1}function $e(z,J){let ce=h,Be=!1;if(z){ce=f.get(J),ce===void 0&&(ce=[],f.set(J,ce));const be=z.textures;if(ce.length!==be.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let ue=0,ae=be.length;ue<ae;ue++)ce[ue]=s.COLOR_ATTACHMENT0+ue;ce.length=be.length,Be=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,Be=!0);Be&&s.drawBuffers(ce)}function pt(z){return g!==z?(s.useProgram(z),g=z,!0):!1}const vt={[as]:s.FUNC_ADD,[c_]:s.FUNC_SUBTRACT,[u_]:s.FUNC_REVERSE_SUBTRACT};vt[h_]=s.MIN,vt[d_]=s.MAX;const ot={[f_]:s.ZERO,[p_]:s.ONE,[m_]:s.SRC_COLOR,[Au]:s.SRC_ALPHA,[S_]:s.SRC_ALPHA_SATURATE,[x_]:s.DST_COLOR,[__]:s.DST_ALPHA,[g_]:s.ONE_MINUS_SRC_COLOR,[Ru]:s.ONE_MINUS_SRC_ALPHA,[y_]:s.ONE_MINUS_DST_COLOR,[v_]:s.ONE_MINUS_DST_ALPHA,[M_]:s.CONSTANT_COLOR,[b_]:s.ONE_MINUS_CONSTANT_COLOR,[E_]:s.CONSTANT_ALPHA,[T_]:s.ONE_MINUS_CONSTANT_ALPHA};function k(z,J,ce,Be,be,ue,ae,B,se,X){if(z===Nr){_===!0&&(Ie(s.BLEND),_=!1);return}if(_===!1&&(Re(s.BLEND),_=!0),z!==l_){if(z!==m||X!==M){if((p!==as||y!==as)&&(s.blendEquation(s.FUNC_ADD),p=as,y=as),X)switch(z){case Qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zd:s.blendFunc(s.ONE,s.ONE);break;case Hd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vd:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Hd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}S=null,b=null,A=null,I=null,R.set(0,0,0),L=0,m=z,M=X}return}be=be||J,ue=ue||ce,ae=ae||Be,(J!==p||be!==y)&&(s.blendEquationSeparate(vt[J],vt[be]),p=J,y=be),(ce!==S||Be!==b||ue!==A||ae!==I)&&(s.blendFuncSeparate(ot[ce],ot[Be],ot[ue],ot[ae]),S=ce,b=Be,A=ue,I=ae),(B.equals(R)===!1||se!==L)&&(s.blendColor(B.r,B.g,B.b,se),R.copy(B),L=se),m=z,M=!1}function nt(z,J){z.side===Ci?Ie(s.CULL_FACE):Re(s.CULL_FACE);let ce=z.side===Un;J&&(ce=!ce),xt(ce),z.blending===Qs&&z.transparent===!1?k(Nr):k(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const Be=z.stencilWrite;a.setTest(Be),Be&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),mt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Re(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function xt(z){T!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),T=z)}function lt(z){z!==o_?(Re(s.CULL_FACE),z!==D&&(z===kd?s.cullFace(s.BACK):z===a_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),D=z}function Oe(z){z!==q&&(K&&s.lineWidth(z),q=z)}function mt(z,J,ce){z?(Re(s.POLYGON_OFFSET_FILL),(H!==J||ee!==ce)&&(s.polygonOffset(J,ce),H=J,ee=ce)):Ie(s.POLYGON_OFFSET_FILL)}function je(z){z?Re(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function it(z){z===void 0&&(z=s.TEXTURE0+ne-1),Te!==z&&(s.activeTexture(z),Te=z)}function yt(z,J,ce){ce===void 0&&(Te===null?ce=s.TEXTURE0+ne-1:ce=Te);let Be=Pe[ce];Be===void 0&&(Be={type:void 0,texture:void 0},Pe[ce]=Be),(Be.type!==z||Be.texture!==J)&&(Te!==ce&&(s.activeTexture(ce),Te=ce),s.bindTexture(z,J||Me[z]),Be.type=z,Be.texture=J)}function U(){const z=Pe[Te];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{s.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function re(){try{s.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{s.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{s.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Xe(){try{s.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ue(){try{s.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ye(){try{s.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ke(){try{s.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{s.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function De(z){qe.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),qe.copy(z))}function Ze(z){Z.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),Z.copy(z))}function Ve(z,J){let ce=c.get(J);ce===void 0&&(ce=new WeakMap,c.set(J,ce));let Be=ce.get(z);Be===void 0&&(Be=s.getUniformBlockIndex(J,z.name),ce.set(z,Be))}function Ee(z,J){const Be=c.get(J).get(z);l.get(J)!==Be&&(s.uniformBlockBinding(J,Be,z.__bindingPointIndex),l.set(J,Be))}function ke(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},Te=null,Pe={},d={},f=new WeakMap,h=[],g=null,_=!1,m=null,p=null,S=null,b=null,y=null,A=null,I=null,R=new at(0,0,0),L=0,M=!1,T=null,D=null,q=null,H=null,ee=null,qe.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Re,disable:Ie,bindFramebuffer:ht,drawBuffers:$e,useProgram:pt,setBlending:k,setMaterial:nt,setFlipSided:xt,setCullFace:lt,setLineWidth:Oe,setPolygonOffset:mt,setScissorTest:je,activeTexture:it,bindTexture:yt,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:$,texImage2D:Ke,texImage3D:le,updateUBOMapping:Ve,uniformBlockBinding:Ee,texStorage2D:Ue,texStorage3D:Ye,texSubImage2D:re,texSubImage3D:fe,compressedTexSubImage2D:ie,compressedTexSubImage3D:Xe,scissor:De,viewport:Ze,reset:ke}}function lb(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,E){return h?new OffscreenCanvas(U,E):Ea("canvas")}function _(U,E,$){let re=1;const fe=yt(U);if((fe.width>$||fe.height>$)&&(re=$/Math.max(fe.width,fe.height)),re<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ie=Math.floor(re*fe.width),Xe=Math.floor(re*fe.height);d===void 0&&(d=g(ie,Xe));const Ue=E?g(ie,Xe):d;return Ue.width=ie,Ue.height=Xe,Ue.getContext("2d").drawImage(U,0,0,ie,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+ie+"x"+Xe+")."),Ue}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),U;return U}function m(U){return U.generateMipmaps}function p(U){s.generateMipmap(U)}function S(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(U,E,$,re,fe=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ie=E;if(E===s.RED&&($===s.FLOAT&&(ie=s.R32F),$===s.HALF_FLOAT&&(ie=s.R16F),$===s.UNSIGNED_BYTE&&(ie=s.R8)),E===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(ie=s.R8UI),$===s.UNSIGNED_SHORT&&(ie=s.R16UI),$===s.UNSIGNED_INT&&(ie=s.R32UI),$===s.BYTE&&(ie=s.R8I),$===s.SHORT&&(ie=s.R16I),$===s.INT&&(ie=s.R32I)),E===s.RG&&($===s.FLOAT&&(ie=s.RG32F),$===s.HALF_FLOAT&&(ie=s.RG16F),$===s.UNSIGNED_BYTE&&(ie=s.RG8)),E===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(ie=s.RG8UI),$===s.UNSIGNED_SHORT&&(ie=s.RG16UI),$===s.UNSIGNED_INT&&(ie=s.RG32UI),$===s.BYTE&&(ie=s.RG8I),$===s.SHORT&&(ie=s.RG16I),$===s.INT&&(ie=s.RG32I)),E===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(ie=s.RGB8UI),$===s.UNSIGNED_SHORT&&(ie=s.RGB16UI),$===s.UNSIGNED_INT&&(ie=s.RGB32UI),$===s.BYTE&&(ie=s.RGB8I),$===s.SHORT&&(ie=s.RGB16I),$===s.INT&&(ie=s.RGB32I)),E===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(ie=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(ie=s.RGBA16UI),$===s.UNSIGNED_INT&&(ie=s.RGBA32UI),$===s.BYTE&&(ie=s.RGBA8I),$===s.SHORT&&(ie=s.RGBA16I),$===s.INT&&(ie=s.RGBA32I)),E===s.RGB&&$===s.UNSIGNED_INT_5_9_9_9_REV&&(ie=s.RGB9_E5),E===s.RGBA){const Xe=fe?zl:wt.getTransfer(re);$===s.FLOAT&&(ie=s.RGBA32F),$===s.HALF_FLOAT&&(ie=s.RGBA16F),$===s.UNSIGNED_BYTE&&(ie=Xe===Ot?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(ie=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(ie=s.RGB5_A1)}return(ie===s.R16F||ie===s.R32F||ie===s.RG16F||ie===s.RG32F||ie===s.RGBA16F||ie===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function y(U,E){let $;return U?E===null||E===xs||E===xa?$=s.DEPTH24_STENCIL8:E===Dn?$=s.DEPTH32F_STENCIL8:E===va&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===xs||E===xa?$=s.DEPTH_COMPONENT24:E===Dn?$=s.DEPTH_COMPONENT32F:E===va&&($=s.DEPTH_COMPONENT16),$}function A(U,E){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==An&&U.minFilter!==fn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function I(U){const E=U.target;E.removeEventListener("dispose",I),L(E),E.isVideoTexture&&u.delete(E)}function R(U){const E=U.target;E.removeEventListener("dispose",R),T(E)}function L(U){const E=n.get(U);if(E.__webglInit===void 0)return;const $=U.source,re=f.get($);if(re){const fe=re[E.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&M(U),Object.keys(re).length===0&&f.delete($)}n.remove(U)}function M(U){const E=n.get(U);s.deleteTexture(E.__webglTexture);const $=U.source,re=f.get($);delete re[E.__cacheKey],o.memory.textures--}function T(U){const E=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let fe=0;fe<E.__webglFramebuffer[re].length;fe++)s.deleteFramebuffer(E.__webglFramebuffer[re][fe]);else s.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)s.deleteFramebuffer(E.__webglFramebuffer[re]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=U.textures;for(let re=0,fe=$.length;re<fe;re++){const ie=n.get($[re]);ie.__webglTexture&&(s.deleteTexture(ie.__webglTexture),o.memory.textures--),n.remove($[re])}n.remove(U)}let D=0;function q(){D=0}function H(){const U=D;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),D+=1,U}function ee(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ne(U,E){const $=n.get(U);if(U.isVideoTexture&&je(U),U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){const re=U.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me($,U,E);return}}t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+E)}function K(U,E){const $=n.get(U);if(U.version>0&&$.__version!==U.version){Me($,U,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+E)}function Q(U,E){const $=n.get(U);if(U.version>0&&$.__version!==U.version){Me($,U,E);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+E)}function j(U,E){const $=n.get(U);if(U.version>0&&$.__version!==U.version){Re($,U,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+E)}const Te={[kr]:s.REPEAT,[Ii]:s.CLAMP_TO_EDGE,[Bl]:s.MIRRORED_REPEAT},Pe={[An]:s.NEAREST,[im]:s.NEAREST_MIPMAP_NEAREST,[Jo]:s.NEAREST_MIPMAP_LINEAR,[fn]:s.LINEAR,[bl]:s.LINEAR_MIPMAP_NEAREST,[Li]:s.LINEAR_MIPMAP_LINEAR},Ae={[V_]:s.NEVER,[$_]:s.ALWAYS,[G_]:s.LESS,[fm]:s.LEQUAL,[W_]:s.EQUAL,[q_]:s.GEQUAL,[X_]:s.GREATER,[Y_]:s.NOTEQUAL};function Le(U,E){if(E.type===Dn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===fn||E.magFilter===bl||E.magFilter===Jo||E.magFilter===Li||E.minFilter===fn||E.minFilter===bl||E.minFilter===Jo||E.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,Te[E.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,Te[E.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,Te[E.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,Pe[E.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,Pe[E.minFilter]),E.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===An||E.minFilter!==Jo&&E.minFilter!==Li||E.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function qe(U,E){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",I));const re=E.source;let fe=f.get(re);fe===void 0&&(fe={},f.set(re,fe));const ie=ee(E);if(ie!==U.__cacheKey){fe[ie]===void 0&&(fe[ie]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,$=!0),fe[ie].usedTimes++;const Xe=fe[U.__cacheKey];Xe!==void 0&&(fe[U.__cacheKey].usedTimes--,Xe.usedTimes===0&&M(E)),U.__cacheKey=ie,U.__webglTexture=fe[ie].texture}return $}function Z(U,E,$){return Math.floor(Math.floor(U/$)/E)}function ye(U,E,$,re){const ie=U.updateRanges;if(ie.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,$,re,E.data);else{ie.sort((le,De)=>le.start-De.start);let Xe=0;for(let le=1;le<ie.length;le++){const De=ie[Xe],Ze=ie[le],Ve=De.start+De.count,Ee=Z(Ze.start,E.width,4),ke=Z(De.start,E.width,4);Ze.start<=Ve+1&&Ee===ke&&Z(Ze.start+Ze.count-1,E.width,4)===Ee?De.count=Math.max(De.count,Ze.start+Ze.count-De.start):(++Xe,ie[Xe]=Ze)}ie.length=Xe+1;const Ue=s.getParameter(s.UNPACK_ROW_LENGTH),Ye=s.getParameter(s.UNPACK_SKIP_PIXELS),Ke=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let le=0,De=ie.length;le<De;le++){const Ze=ie[le],Ve=Math.floor(Ze.start/4),Ee=Math.ceil(Ze.count/4),ke=Ve%E.width,z=Math.floor(Ve/E.width),J=Ee,ce=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ke),s.pixelStorei(s.UNPACK_SKIP_ROWS,z),t.texSubImage2D(s.TEXTURE_2D,0,ke,z,J,ce,$,re,E.data)}U.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ue),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ye),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ke)}}function Me(U,E,$){let re=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=s.TEXTURE_3D);const fe=qe(U,E),ie=E.source;t.bindTexture(re,U.__webglTexture,s.TEXTURE0+$);const Xe=n.get(ie);if(ie.version!==Xe.__version||fe===!0){t.activeTexture(s.TEXTURE0+$);const Ue=wt.getPrimaries(wt.workingColorSpace),Ye=E.colorSpace===gi?null:wt.getPrimaries(E.colorSpace),Ke=E.colorSpace===gi||Ue===Ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let le=_(E.image,!1,i.maxTextureSize);le=it(E,le);const De=r.convert(E.format,E.colorSpace),Ze=r.convert(E.type);let Ve=b(E.internalFormat,De,Ze,E.colorSpace,E.isVideoTexture);Le(re,E);let Ee;const ke=E.mipmaps,z=E.isVideoTexture!==!0,J=Xe.__version===void 0||fe===!0,ce=ie.dataReady,Be=A(E,le);if(E.isDepthTexture)Ve=y(E.format===Sa,E.type),J&&(z?t.texStorage2D(s.TEXTURE_2D,1,Ve,le.width,le.height):t.texImage2D(s.TEXTURE_2D,0,Ve,le.width,le.height,0,De,Ze,null));else if(E.isDataTexture)if(ke.length>0){z&&J&&t.texStorage2D(s.TEXTURE_2D,Be,Ve,ke[0].width,ke[0].height);for(let be=0,ue=ke.length;be<ue;be++)Ee=ke[be],z?ce&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,Ee.width,Ee.height,De,Ze,Ee.data):t.texImage2D(s.TEXTURE_2D,be,Ve,Ee.width,Ee.height,0,De,Ze,Ee.data);E.generateMipmaps=!1}else z?(J&&t.texStorage2D(s.TEXTURE_2D,Be,Ve,le.width,le.height),ce&&ye(E,le,De,Ze)):t.texImage2D(s.TEXTURE_2D,0,Ve,le.width,le.height,0,De,Ze,le.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){z&&J&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,Ve,ke[0].width,ke[0].height,le.depth);for(let be=0,ue=ke.length;be<ue;be++)if(Ee=ke[be],E.format!==Xn)if(De!==null)if(z){if(ce)if(E.layerUpdates.size>0){const ae=Pf(Ee.width,Ee.height,E.format,E.type);for(const B of E.layerUpdates){const se=Ee.data.subarray(B*ae/Ee.data.BYTES_PER_ELEMENT,(B+1)*ae/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,B,Ee.width,Ee.height,1,De,se)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,Ee.width,Ee.height,le.depth,De,Ee.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,be,Ve,Ee.width,Ee.height,le.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?ce&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,Ee.width,Ee.height,le.depth,De,Ze,Ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,be,Ve,Ee.width,Ee.height,le.depth,0,De,Ze,Ee.data)}else{z&&J&&t.texStorage2D(s.TEXTURE_2D,Be,Ve,ke[0].width,ke[0].height);for(let be=0,ue=ke.length;be<ue;be++)Ee=ke[be],E.format!==Xn?De!==null?z?ce&&t.compressedTexSubImage2D(s.TEXTURE_2D,be,0,0,Ee.width,Ee.height,De,Ee.data):t.compressedTexImage2D(s.TEXTURE_2D,be,Ve,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?ce&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,Ee.width,Ee.height,De,Ze,Ee.data):t.texImage2D(s.TEXTURE_2D,be,Ve,Ee.width,Ee.height,0,De,Ze,Ee.data)}else if(E.isDataArrayTexture)if(z){if(J&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,Ve,le.width,le.height,le.depth),ce)if(E.layerUpdates.size>0){const be=Pf(le.width,le.height,E.format,E.type);for(const ue of E.layerUpdates){const ae=le.data.subarray(ue*be/le.data.BYTES_PER_ELEMENT,(ue+1)*be/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ue,le.width,le.height,1,De,Ze,ae)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,De,Ze,le.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ve,le.width,le.height,le.depth,0,De,Ze,le.data);else if(E.isData3DTexture)z?(J&&t.texStorage3D(s.TEXTURE_3D,Be,Ve,le.width,le.height,le.depth),ce&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,De,Ze,le.data)):t.texImage3D(s.TEXTURE_3D,0,Ve,le.width,le.height,le.depth,0,De,Ze,le.data);else if(E.isFramebufferTexture){if(J)if(z)t.texStorage2D(s.TEXTURE_2D,Be,Ve,le.width,le.height);else{let be=le.width,ue=le.height;for(let ae=0;ae<Be;ae++)t.texImage2D(s.TEXTURE_2D,ae,Ve,be,ue,0,De,Ze,null),be>>=1,ue>>=1}}else if(ke.length>0){if(z&&J){const be=yt(ke[0]);t.texStorage2D(s.TEXTURE_2D,Be,Ve,be.width,be.height)}for(let be=0,ue=ke.length;be<ue;be++)Ee=ke[be],z?ce&&t.texSubImage2D(s.TEXTURE_2D,be,0,0,De,Ze,Ee):t.texImage2D(s.TEXTURE_2D,be,Ve,De,Ze,Ee);E.generateMipmaps=!1}else if(z){if(J){const be=yt(le);t.texStorage2D(s.TEXTURE_2D,Be,Ve,be.width,be.height)}ce&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,De,Ze,le)}else t.texImage2D(s.TEXTURE_2D,0,Ve,De,Ze,le);m(E)&&p(re),Xe.__version=ie.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Re(U,E,$){if(E.image.length!==6)return;const re=qe(U,E),fe=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+$);const ie=n.get(fe);if(fe.version!==ie.__version||re===!0){t.activeTexture(s.TEXTURE0+$);const Xe=wt.getPrimaries(wt.workingColorSpace),Ue=E.colorSpace===gi?null:wt.getPrimaries(E.colorSpace),Ye=E.colorSpace===gi||Xe===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const Ke=E.isCompressedTexture||E.image[0].isCompressedTexture,le=E.image[0]&&E.image[0].isDataTexture,De=[];for(let ue=0;ue<6;ue++)!Ke&&!le?De[ue]=_(E.image[ue],!0,i.maxCubemapSize):De[ue]=le?E.image[ue].image:E.image[ue],De[ue]=it(E,De[ue]);const Ze=De[0],Ve=r.convert(E.format,E.colorSpace),Ee=r.convert(E.type),ke=b(E.internalFormat,Ve,Ee,E.colorSpace),z=E.isVideoTexture!==!0,J=ie.__version===void 0||re===!0,ce=fe.dataReady;let Be=A(E,Ze);Le(s.TEXTURE_CUBE_MAP,E);let be;if(Ke){z&&J&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,ke,Ze.width,Ze.height);for(let ue=0;ue<6;ue++){be=De[ue].mipmaps;for(let ae=0;ae<be.length;ae++){const B=be[ae];E.format!==Xn?Ve!==null?z?ce&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ae,0,0,B.width,B.height,Ve,B.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ae,ke,B.width,B.height,0,B.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ae,0,0,B.width,B.height,Ve,Ee,B.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ae,ke,B.width,B.height,0,Ve,Ee,B.data)}}}else{if(be=E.mipmaps,z&&J){be.length>0&&Be++;const ue=yt(De[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,ke,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(le){z?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,De[ue].width,De[ue].height,Ve,Ee,De[ue].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ke,De[ue].width,De[ue].height,0,Ve,Ee,De[ue].data);for(let ae=0;ae<be.length;ae++){const se=be[ae].image[ue].image;z?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ae+1,0,0,se.width,se.height,Ve,Ee,se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ae+1,ke,se.width,se.height,0,Ve,Ee,se.data)}}else{z?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ve,Ee,De[ue]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ke,Ve,Ee,De[ue]);for(let ae=0;ae<be.length;ae++){const B=be[ae];z?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ae+1,0,0,Ve,Ee,B.image[ue]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ae+1,ke,Ve,Ee,B.image[ue])}}}m(E)&&p(s.TEXTURE_CUBE_MAP),ie.__version=fe.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Ie(U,E,$,re,fe,ie){const Xe=r.convert($.format,$.colorSpace),Ue=r.convert($.type),Ye=b($.internalFormat,Xe,Ue,$.colorSpace),Ke=n.get(E),le=n.get($);if(le.__renderTarget=E,!Ke.__hasExternalTextures){const De=Math.max(1,E.width>>ie),Ze=Math.max(1,E.height>>ie);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?t.texImage3D(fe,ie,Ye,De,Ze,E.depth,0,Xe,Ue,null):t.texImage2D(fe,ie,Ye,De,Ze,0,Xe,Ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),mt(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,fe,le.__webglTexture,0,Oe(E)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,fe,le.__webglTexture,ie),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(U,E,$){if(s.bindRenderbuffer(s.RENDERBUFFER,U),E.depthBuffer){const re=E.depthTexture,fe=re&&re.isDepthTexture?re.type:null,ie=y(E.stencilBuffer,fe),Xe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=Oe(E);mt(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ue,ie,E.width,E.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,ie,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ie,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xe,s.RENDERBUFFER,U)}else{const re=E.textures;for(let fe=0;fe<re.length;fe++){const ie=re[fe],Xe=r.convert(ie.format,ie.colorSpace),Ue=r.convert(ie.type),Ye=b(ie.internalFormat,Xe,Ue,ie.colorSpace),Ke=Oe(E);$&&mt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,Ye,E.width,E.height):mt(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ke,Ye,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ye,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function $e(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=n.get(E.depthTexture);re.__renderTarget=E,(!re.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ne(E.depthTexture,0);const fe=re.__webglTexture,ie=Oe(E);if(E.depthTexture.format===ya)mt(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0);else if(E.depthTexture.format===Sa)mt(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function pt(U){const E=n.get(U),$=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const re=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),re){const fe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,re.removeEventListener("dispose",fe)};re.addEventListener("dispose",fe),E.__depthDisposeCallback=fe}E.__boundDepthTexture=re}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const re=U.texture.mipmaps;re&&re.length>0?$e(E.__webglFramebuffer[0],U):$e(E.__webglFramebuffer,U)}else if($){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]===void 0)E.__webglDepthbuffer[re]=s.createRenderbuffer(),ht(E.__webglDepthbuffer[re],U,!1);else{const fe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,ie)}}else{const re=U.texture.mipmaps;if(re&&re.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),ht(E.__webglDepthbuffer,U,!1);else{const fe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,ie)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(U,E,$){const re=n.get(U);E!==void 0&&Ie(re.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&pt(U)}function ot(U){const E=U.texture,$=n.get(U),re=n.get(E);U.addEventListener("dispose",R);const fe=U.textures,ie=U.isWebGLCubeRenderTarget===!0,Xe=fe.length>1;if(Xe||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=E.version,o.memory.textures++),ie){$.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[Ue]=[];for(let Ye=0;Ye<E.mipmaps.length;Ye++)$.__webglFramebuffer[Ue][Ye]=s.createFramebuffer()}else $.__webglFramebuffer[Ue]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)$.__webglFramebuffer[Ue]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Xe)for(let Ue=0,Ye=fe.length;Ue<Ye;Ue++){const Ke=n.get(fe[Ue]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=s.createTexture(),o.memory.textures++)}if(U.samples>0&&mt(U)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ue=0;Ue<fe.length;Ue++){const Ye=fe[Ue];$.__webglColorRenderbuffer[Ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[Ue]);const Ke=r.convert(Ye.format,Ye.colorSpace),le=r.convert(Ye.type),De=b(Ye.internalFormat,Ke,le,Ye.colorSpace,U.isXRRenderTarget===!0),Ze=Oe(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,De,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,$.__webglColorRenderbuffer[Ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),ht($.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ie){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),Le(s.TEXTURE_CUBE_MAP,E);for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ye=0;Ye<E.mipmaps.length;Ye++)Ie($.__webglFramebuffer[Ue][Ye],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ye);else Ie($.__webglFramebuffer[Ue],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);m(E)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Ue=0,Ye=fe.length;Ue<Ye;Ue++){const Ke=fe[Ue],le=n.get(Ke);t.bindTexture(s.TEXTURE_2D,le.__webglTexture),Le(s.TEXTURE_2D,Ke),Ie($.__webglFramebuffer,U,Ke,s.COLOR_ATTACHMENT0+Ue,s.TEXTURE_2D,0),m(Ke)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let Ue=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ue=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ue,re.__webglTexture),Le(Ue,E),E.mipmaps&&E.mipmaps.length>0)for(let Ye=0;Ye<E.mipmaps.length;Ye++)Ie($.__webglFramebuffer[Ye],U,E,s.COLOR_ATTACHMENT0,Ue,Ye);else Ie($.__webglFramebuffer,U,E,s.COLOR_ATTACHMENT0,Ue,0);m(E)&&p(Ue),t.unbindTexture()}U.depthBuffer&&pt(U)}function k(U){const E=U.textures;for(let $=0,re=E.length;$<re;$++){const fe=E[$];if(m(fe)){const ie=S(U),Xe=n.get(fe).__webglTexture;t.bindTexture(ie,Xe),p(ie),t.unbindTexture()}}}const nt=[],xt=[];function lt(U){if(U.samples>0){if(mt(U)===!1){const E=U.textures,$=U.width,re=U.height;let fe=s.COLOR_BUFFER_BIT;const ie=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xe=n.get(U),Ue=E.length>1;if(Ue)for(let Ke=0;Ke<E.length;Ke++)t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer);const Ye=U.texture.mipmaps;Ye&&Ye.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Ke=0;Ke<E.length;Ke++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),Ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ke]);const le=n.get(E[Ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,le,0)}s.blitFramebuffer(0,0,$,re,0,0,$,re,fe,s.NEAREST),l===!0&&(nt.length=0,xt.length=0,nt.push(s.COLOR_ATTACHMENT0+Ke),U.depthBuffer&&U.resolveDepthBuffer===!1&&(nt.push(ie),xt.push(ie),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,xt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ue)for(let Ke=0;Ke<E.length;Ke++){t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ke]);const le=n.get(E[Ke]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.TEXTURE_2D,le,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const E=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Oe(U){return Math.min(i.maxSamples,U.samples)}function mt(U){const E=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function je(U){const E=o.render.frame;u.get(U)!==E&&(u.set(U,E),U.update())}function it(U,E){const $=U.colorSpace,re=U.format,fe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==mn&&$!==gi&&(wt.getTransfer($)===Ot?(re!==Xn||fe!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function yt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=q,this.setTexture2D=ne,this.setTexture2DArray=K,this.setTexture3D=Q,this.setTextureCube=j,this.rebindTextures=vt,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=mt}function cb(s,e){function t(n,i=gi){let r;const o=wt.getTransfer(i);if(n===Oi)return s.UNSIGNED_BYTE;if(n===qh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===$h)return s.UNSIGNED_SHORT_5_5_5_1;if(n===om)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===rm)return s.BYTE;if(n===sm)return s.SHORT;if(n===va)return s.UNSIGNED_SHORT;if(n===Yh)return s.INT;if(n===xs)return s.UNSIGNED_INT;if(n===Dn)return s.FLOAT;if(n===nr)return s.HALF_FLOAT;if(n===am)return s.ALPHA;if(n===lm)return s.RGB;if(n===Xn)return s.RGBA;if(n===ya)return s.DEPTH_COMPONENT;if(n===Sa)return s.DEPTH_STENCIL;if(n===ic)return s.RED;if(n===Kh)return s.RED_INTEGER;if(n===cm)return s.RG;if(n===jh)return s.RG_INTEGER;if(n===Zh)return s.RGBA_INTEGER;if(n===El||n===Tl||n===wl||n===Al)if(o===Ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===El)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Al)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===El)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Al)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fu||n===Bu||n===ku||n===zu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ku)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hu||n===Vu||n===Gu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Hu||n===Vu)return o===Ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Gu)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wu||n===Xu||n===Yu||n===qu||n===$u||n===Ku||n===ju||n===Zu||n===Ju||n===Qu||n===eh||n===th||n===nh||n===ih)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wu)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xu)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yu)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qu)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$u)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ku)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ju)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zu)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ju)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qu)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===eh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===th)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nh)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ih)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rl||n===rh||n===sh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Rl)return o===Ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===um||n===oh||n===ah||n===lh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ah)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xa?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const ub=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hb=`
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

}`;class db{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new pn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zr({vertexShader:ub,fragmentShader:hb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yn(new sc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fb extends bs{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const _=new db,m=t.getContextAttributes();let p=null,S=null;const b=[],y=[],A=new Et;let I=null;const R=new Tn;R.viewport=new Pt;const L=new Tn;L.viewport=new Pt;const M=[R,L],T=new yv;let D=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ye=b[Z];return ye===void 0&&(ye=new Nc,b[Z]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(Z){let ye=b[Z];return ye===void 0&&(ye=new Nc,b[Z]=ye),ye.getGripSpace()},this.getHand=function(Z){let ye=b[Z];return ye===void 0&&(ye=new Nc,b[Z]=ye),ye.getHandSpace()};function H(Z){const ye=y.indexOf(Z.inputSource);if(ye===-1)return;const Me=b[ye];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,c||o),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ee(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",ee),i.removeEventListener("inputsourceschange",ne);for(let Z=0;Z<b.length;Z++){const ye=y[Z];ye!==null&&(y[Z]=null,b[Z].disconnect(ye))}D=null,q=null,_.reset(),e.setRenderTarget(p),h=null,f=null,d=null,i=null,S=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",ee),i.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Re=null,Ie=null;m.depth&&(Ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=m.stencil?Sa:ya,Re=m.stencil?xa:xs);const ht={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(ht),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new ys(f.textureWidth,f.textureHeight,{format:Xn,type:Oi,depthTexture:new wm(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new ys(h.framebufferWidth,h.framebufferHeight,{format:Xn,type:Oi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),qe.setContext(i),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ne(Z){for(let ye=0;ye<Z.removed.length;ye++){const Me=Z.removed[ye],Re=y.indexOf(Me);Re>=0&&(y[Re]=null,b[Re].disconnect(Me))}for(let ye=0;ye<Z.added.length;ye++){const Me=Z.added[ye];let Re=y.indexOf(Me);if(Re===-1){for(let ht=0;ht<b.length;ht++)if(ht>=y.length){y.push(Me),Re=ht;break}else if(y[ht]===null){y[ht]=Me,Re=ht;break}if(Re===-1)break}const Ie=b[Re];Ie&&Ie.connect(Me)}}const K=new W,Q=new W;function j(Z,ye,Me){K.setFromMatrixPosition(ye.matrixWorld),Q.setFromMatrixPosition(Me.matrixWorld);const Re=K.distanceTo(Q),Ie=ye.projectionMatrix.elements,ht=Me.projectionMatrix.elements,$e=Ie[14]/(Ie[10]-1),pt=Ie[14]/(Ie[10]+1),vt=(Ie[9]+1)/Ie[5],ot=(Ie[9]-1)/Ie[5],k=(Ie[8]-1)/Ie[0],nt=(ht[8]+1)/ht[0],xt=$e*k,lt=$e*nt,Oe=Re/(-k+nt),mt=Oe*-k;if(ye.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(mt),Z.translateZ(Oe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ie[10]===-1)Z.projectionMatrix.copy(ye.projectionMatrix),Z.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const je=$e+Oe,it=pt+Oe,yt=xt-mt,U=lt+(Re-mt),E=vt*pt/it*je,$=ot*pt/it*je;Z.projectionMatrix.makePerspective(yt,U,E,$,je,it),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Te(Z,ye){ye===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ye.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ye=Z.near,Me=Z.far;_.texture!==null&&(_.depthNear>0&&(ye=_.depthNear),_.depthFar>0&&(Me=_.depthFar)),T.near=L.near=R.near=ye,T.far=L.far=R.far=Me,(D!==T.near||q!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,q=T.far),R.layers.mask=Z.layers.mask|2,L.layers.mask=Z.layers.mask|4,T.layers.mask=R.layers.mask|L.layers.mask;const Re=Z.parent,Ie=T.cameras;Te(T,Re);for(let ht=0;ht<Ie.length;ht++)Te(Ie[ht],Re);Ie.length===2?j(T,R,L):T.projectionMatrix.copy(R.projectionMatrix),Pe(Z,T,Re)};function Pe(Z,ye,Me){Me===null?Z.matrix.copy(ye.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ye.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ye.projectionMatrix),Z.projectionMatrixInverse.copy(ye.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=mo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(T)};let Ae=null;function Le(Z,ye){if(u=ye.getViewerPose(c||o),g=ye,u!==null){const Me=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Re=!1;Me.length!==T.cameras.length&&(T.cameras.length=0,Re=!0);for(let $e=0;$e<Me.length;$e++){const pt=Me[$e];let vt=null;if(h!==null)vt=h.getViewport(pt);else{const k=d.getViewSubImage(f,pt);vt=k.viewport,$e===0&&(e.setRenderTargetTextures(S,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(S))}let ot=M[$e];ot===void 0&&(ot=new Tn,ot.layers.enable($e),ot.viewport=new Pt,M[$e]=ot),ot.matrix.fromArray(pt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(pt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(vt.x,vt.y,vt.width,vt.height),$e===0&&(T.matrix.copy(ot.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Re===!0&&T.cameras.push(ot)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&d){const $e=d.getDepthInformation(Me[0]);$e&&$e.isValid&&$e.texture&&_.init(e,$e,i.renderState)}}for(let Me=0;Me<b.length;Me++){const Re=y[Me],Ie=b[Me];Re!==null&&Ie!==void 0&&Ie.update(Re,ye,c||o)}Ae&&Ae(Z,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),g=null}const qe=new Um;qe.setAnimationLoop(Le),this.setAnimationLoop=function(Z){Ae=Z},this.dispose=function(){}}}const Zr=new Fi,pb=new ut;function mb(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ym(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),b=S.envMap,y=S.envMapRotation;b&&(m.envMap.value=b,Zr.copy(y),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),m.envMapRotation.value.setFromMatrix4(pb.makeRotationFromEuler(Zr)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function gb(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const y=b.program;n.uniformBlockBinding(S,y)}function c(S,b){let y=i[S.id];y===void 0&&(g(S),y=u(S),i[S.id]=y,S.addEventListener("dispose",m));const A=b.program;n.updateUBOMapping(S,A);const I=e.render.frame;r[S.id]!==I&&(f(S),r[S.id]=I)}function u(S){const b=d();S.__bindingPointIndex=b;const y=s.createBuffer(),A=S.__size,I=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,A,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,y),y}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const b=i[S.id],y=S.uniforms,A=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let I=0,R=y.length;I<R;I++){const L=Array.isArray(y[I])?y[I]:[y[I]];for(let M=0,T=L.length;M<T;M++){const D=L[M];if(h(D,I,M,A)===!0){const q=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let ee=0;for(let ne=0;ne<H.length;ne++){const K=H[ne],Q=_(K);typeof K=="number"||typeof K=="boolean"?(D.__data[0]=K,s.bufferSubData(s.UNIFORM_BUFFER,q+ee,D.__data)):K.isMatrix3?(D.__data[0]=K.elements[0],D.__data[1]=K.elements[1],D.__data[2]=K.elements[2],D.__data[3]=0,D.__data[4]=K.elements[3],D.__data[5]=K.elements[4],D.__data[6]=K.elements[5],D.__data[7]=0,D.__data[8]=K.elements[6],D.__data[9]=K.elements[7],D.__data[10]=K.elements[8],D.__data[11]=0):(K.toArray(D.__data,ee),ee+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(S,b,y,A){const I=S.value,R=b+"_"+y;if(A[R]===void 0)return typeof I=="number"||typeof I=="boolean"?A[R]=I:A[R]=I.clone(),!0;{const L=A[R];if(typeof I=="number"||typeof I=="boolean"){if(L!==I)return A[R]=I,!0}else if(L.equals(I)===!1)return L.copy(I),!0}return!1}function g(S){const b=S.uniforms;let y=0;const A=16;for(let R=0,L=b.length;R<L;R++){const M=Array.isArray(b[R])?b[R]:[b[R]];for(let T=0,D=M.length;T<D;T++){const q=M[T],H=Array.isArray(q.value)?q.value:[q.value];for(let ee=0,ne=H.length;ee<ne;ee++){const K=H[ee],Q=_(K),j=y%A,Te=j%Q.boundary,Pe=j+Te;y+=Te,Pe!==0&&A-Pe<Q.storage&&(y+=A-Pe),q.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=y,y+=Q.storage}}}const I=y%A;return I>0&&(y+=A-I),S.__size=y,S.__cache={},this}function _(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){const b=S.target;b.removeEventListener("dispose",m);const y=o.indexOf(b.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class _b{constructor(e={}){const{canvas:t=d0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let A=!1;this._outputColorSpace=nn;let I=0,R=0,L=null,M=-1,T=null;const D=new Pt,q=new Pt;let H=null;const ee=new at(0);let ne=0,K=t.width,Q=t.height,j=1,Te=null,Pe=null;const Ae=new Pt(0,0,K,Q),Le=new Pt(0,0,K,Q);let qe=!1;const Z=new rd;let ye=!1,Me=!1;const Re=new ut,Ie=new ut,ht=new W,$e=new Pt,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function ot(){return L===null?j:1}let k=n;function nt(x,C){return t.getContext(x,C)}try{const x={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xh}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",ue,!1),k===null){const C="webgl2";if(k=nt(C,x),k===null)throw nt(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let xt,lt,Oe,mt,je,it,yt,U,E,$,re,fe,ie,Xe,Ue,Ye,Ke,le,De,Ze,Ve,Ee,ke,z;function J(){xt=new AS(k),xt.init(),Ee=new cb(k,xt),lt=new yS(k,xt,e,Ee),Oe=new ab(k,xt),lt.reverseDepthBuffer&&f&&Oe.buffers.depth.setReversed(!0),mt=new PS(k),je=new $M,it=new lb(k,xt,Oe,je,lt,Ee,mt),yt=new MS(y),U=new wS(y),E=new Ov(k),ke=new vS(k,E),$=new RS(k,E,mt,ke),re=new LS(k,$,E,mt),De=new IS(k,lt,it),Ye=new SS(je),fe=new qM(y,yt,U,xt,lt,ke,Ye),ie=new mb(y,je),Xe=new jM,Ue=new nb(xt),le=new _S(y,yt,U,Oe,re,h,l),Ke=new sb(y,re,lt),z=new gb(k,mt,lt,Oe),Ze=new xS(k,xt,mt),Ve=new CS(k,xt,mt),mt.programs=fe.programs,y.capabilities=lt,y.extensions=xt,y.properties=je,y.renderLists=Xe,y.shadowMap=Ke,y.state=Oe,y.info=mt}J();const ce=new fb(y,k);this.xr=ce,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const x=xt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=xt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(x){x!==void 0&&(j=x,this.setSize(K,Q,!1))},this.getSize=function(x){return x.set(K,Q)},this.setSize=function(x,C,P=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=x,Q=C,t.width=Math.floor(x*j),t.height=Math.floor(C*j),P===!0&&(t.style.width=x+"px",t.style.height=C+"px"),this.setViewport(0,0,x,C)},this.getDrawingBufferSize=function(x){return x.set(K*j,Q*j).floor()},this.setDrawingBufferSize=function(x,C,P){K=x,Q=C,j=P,t.width=Math.floor(x*P),t.height=Math.floor(C*P),this.setViewport(0,0,x,C)},this.getCurrentViewport=function(x){return x.copy(D)},this.getViewport=function(x){return x.copy(Ae)},this.setViewport=function(x,C,P,F){x.isVector4?Ae.set(x.x,x.y,x.z,x.w):Ae.set(x,C,P,F),Oe.viewport(D.copy(Ae).multiplyScalar(j).round())},this.getScissor=function(x){return x.copy(Le)},this.setScissor=function(x,C,P,F){x.isVector4?Le.set(x.x,x.y,x.z,x.w):Le.set(x,C,P,F),Oe.scissor(q.copy(Le).multiplyScalar(j).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(x){Oe.setScissorTest(qe=x)},this.setOpaqueSort=function(x){Te=x},this.setTransparentSort=function(x){Pe=x},this.getClearColor=function(x){return x.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(x=!0,C=!0,P=!0){let F=0;if(x){let N=!1;if(L!==null){const V=L.texture.format;N=V===Zh||V===jh||V===Kh}if(N){const V=L.texture.type,G=V===Oi||V===xs||V===va||V===xa||V===qh||V===$h,Y=le.getClearColor(),te=le.getClearAlpha(),he=Y.r,de=Y.g,me=Y.b;G?(g[0]=he,g[1]=de,g[2]=me,g[3]=te,k.clearBufferuiv(k.COLOR,0,g)):(_[0]=he,_[1]=de,_[2]=me,_[3]=te,k.clearBufferiv(k.COLOR,0,_))}else F|=k.COLOR_BUFFER_BIT}C&&(F|=k.DEPTH_BUFFER_BIT),P&&(F|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),le.dispose(),Xe.dispose(),Ue.dispose(),je.dispose(),yt.dispose(),U.dispose(),re.dispose(),ke.dispose(),z.dispose(),fe.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Fe),ce.removeEventListener("sessionend",rt),Ge.stop()};function Be(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const x=mt.autoReset,C=Ke.enabled,P=Ke.autoUpdate,F=Ke.needsUpdate,N=Ke.type;J(),mt.autoReset=x,Ke.enabled=C,Ke.autoUpdate=P,Ke.needsUpdate=F,Ke.type=N}function ue(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ae(x){const C=x.target;C.removeEventListener("dispose",ae),B(C)}function B(x){se(x),je.remove(x)}function se(x){const C=je.get(x).programs;C!==void 0&&(C.forEach(function(P){fe.releaseProgram(P)}),x.isShaderMaterial&&fe.releaseShaderCache(x))}this.renderBufferDirect=function(x,C,P,F,N,V){C===null&&(C=pt);const G=N.isMesh&&N.matrixWorld.determinant()<0,Y=Kt(x,C,P,F,N);Oe.setMaterial(F,G);let te=P.index,he=1;if(F.wireframe===!0){if(te=$.getWireframeAttribute(P),te===void 0)return;he=2}const de=P.drawRange,me=P.attributes.position;let ve=de.start*he,we=(de.start+de.count)*he;V!==null&&(ve=Math.max(ve,V.start*he),we=Math.min(we,(V.start+V.count)*he)),te!==null?(ve=Math.max(ve,0),we=Math.min(we,te.count)):me!=null&&(ve=Math.max(ve,0),we=Math.min(we,me.count));const ze=we-ve;if(ze<0||ze===1/0)return;ke.setup(N,F,Y,P,te);let Je,Qe=Ze;if(te!==null&&(Je=E.get(te),Qe=Ve,Qe.setIndex(Je)),N.isMesh)F.wireframe===!0?(Oe.setLineWidth(F.wireframeLinewidth*ot()),Qe.setMode(k.LINES)):Qe.setMode(k.TRIANGLES);else if(N.isLine){let We=F.linewidth;We===void 0&&(We=1),Oe.setLineWidth(We*ot()),N.isLineSegments?Qe.setMode(k.LINES):N.isLineLoop?Qe.setMode(k.LINE_LOOP):Qe.setMode(k.LINE_STRIP)}else N.isPoints?Qe.setMode(k.POINTS):N.isSprite&&Qe.setMode(k.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)eo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))Qe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const We=N._multiDrawStarts,tt=N._multiDrawCounts,He=N._multiDrawCount,Rt=te?E.get(te).bytesPerElement:1,sn=je.get(F).currentProgram.getUniforms();for(let Ct=0;Ct<He;Ct++)sn.setValue(k,"_gl_DrawID",Ct),Qe.render(We[Ct]/Rt,tt[Ct])}else if(N.isInstancedMesh)Qe.renderInstances(ve,ze,N.count);else if(P.isInstancedBufferGeometry){const We=P._maxInstanceCount!==void 0?P._maxInstanceCount:1/0,tt=Math.min(P.instanceCount,We);Qe.renderInstances(ve,ze,tt)}else Qe.render(ve,ze)};function X(x,C,P){x.transparent===!0&&x.side===Ci&&x.forceSinglePass===!1?(x.side=Un,x.needsUpdate=!0,vn(x,C,P),x.side=hr,x.needsUpdate=!0,vn(x,C,P),x.side=Ci):vn(x,C,P)}this.compile=function(x,C,P=null){P===null&&(P=x),p=Ue.get(P),p.init(C),b.push(p),P.traverseVisible(function(N){N.isLight&&N.layers.test(C.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),x!==P&&x.traverseVisible(function(N){N.isLight&&N.layers.test(C.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const F=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const V=N.material;if(V)if(Array.isArray(V))for(let G=0;G<V.length;G++){const Y=V[G];X(Y,P,N),F.add(Y)}else X(V,P,N),F.add(V)}),p=b.pop(),F},this.compileAsync=function(x,C,P=null){const F=this.compile(x,C,P);return new Promise(N=>{function V(){if(F.forEach(function(G){je.get(G).currentProgram.isReady()&&F.delete(G)}),F.size===0){N(x);return}setTimeout(V,10)}xt.get("KHR_parallel_shader_compile")!==null?V():setTimeout(V,10)})};let _e=null;function Ce(x){_e&&_e(x)}function Fe(){Ge.stop()}function rt(){Ge.start()}const Ge=new Um;Ge.setAnimationLoop(Ce),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(x){_e=x,ce.setAnimationLoop(x),x===null?Ge.stop():Ge.start()},ce.addEventListener("sessionstart",Fe),ce.addEventListener("sessionend",rt),this.render=function(x,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(C),C=ce.getCamera()),x.isScene===!0&&x.onBeforeRender(y,x,C,L),p=Ue.get(x,b.length),p.init(C),b.push(p),Ie.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),Z.setFromProjectionMatrix(Ie),Me=this.localClippingEnabled,ye=Ye.init(this.clippingPlanes,Me),m=Xe.get(x,S.length),m.init(),S.push(m),ce.enabled===!0&&ce.isPresenting===!0){const V=y.xr.getDepthSensingMesh();V!==null&&Tt(V,C,-1/0,y.sortObjects)}Tt(x,C,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Te,Pe),vt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,vt&&le.addToRenderList(m,x),this.info.render.frame++,ye===!0&&Ye.beginShadows();const P=p.state.shadowsArray;Ke.render(P,x,C),ye===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=m.opaque,N=m.transmissive;if(p.setupLights(),C.isArrayCamera){const V=C.cameras;if(N.length>0)for(let G=0,Y=V.length;G<Y;G++){const te=V[G];At(F,N,x,te)}vt&&le.render(x);for(let G=0,Y=V.length;G<Y;G++){const te=V[G];dt(m,x,te,te.viewport)}}else N.length>0&&At(F,N,x,C),vt&&le.render(x),dt(m,x,C);L!==null&&R===0&&(it.updateMultisampleRenderTarget(L),it.updateRenderTargetMipmap(L)),x.isScene===!0&&x.onAfterRender(y,x,C),ke.resetDefaultState(),M=-1,T=null,b.pop(),b.length>0?(p=b[b.length-1],ye===!0&&Ye.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Tt(x,C,P,F){if(x.visible===!1)return;if(x.layers.test(C.layers)){if(x.isGroup)P=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(C);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Z.intersectsSprite(x)){F&&$e.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ie);const G=re.update(x),Y=x.material;Y.visible&&m.push(x,G,Y,P,$e.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Z.intersectsObject(x))){const G=re.update(x),Y=x.material;if(F&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),$e.copy(x.boundingSphere.center)):(G.boundingSphere===null&&G.computeBoundingSphere(),$e.copy(G.boundingSphere.center)),$e.applyMatrix4(x.matrixWorld).applyMatrix4(Ie)),Array.isArray(Y)){const te=G.groups;for(let he=0,de=te.length;he<de;he++){const me=te[he],ve=Y[me.materialIndex];ve&&ve.visible&&m.push(x,G,ve,P,$e.z,me)}}else Y.visible&&m.push(x,G,Y,P,$e.z,null)}}const V=x.children;for(let G=0,Y=V.length;G<Y;G++)Tt(V[G],C,P,F)}function dt(x,C,P,F){const N=x.opaque,V=x.transmissive,G=x.transparent;p.setupLightsView(P),ye===!0&&Ye.setGlobalState(y.clippingPlanes,P),F&&Oe.viewport(D.copy(F)),N.length>0&&Ut(N,C,P),V.length>0&&Ut(V,C,P),G.length>0&&Ut(G,C,P),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function At(x,C,P,F){if((P.isScene===!0?P.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[F.id]===void 0&&(p.state.transmissionRenderTarget[F.id]=new ys(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?nr:Oi,minFilter:Li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const V=p.state.transmissionRenderTarget[F.id],G=F.viewport||D;V.setSize(G.z*y.transmissionResolutionScale,G.w*y.transmissionResolutionScale);const Y=y.getRenderTarget(),te=y.getActiveCubeFace(),he=y.getActiveMipmapLevel();y.setRenderTarget(V),y.getClearColor(ee),ne=y.getClearAlpha(),ne<1&&y.setClearColor(16777215,.5),y.clear(),vt&&le.render(P);const de=y.toneMapping;y.toneMapping=Or;const me=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),p.setupLightsView(F),ye===!0&&Ye.setGlobalState(y.clippingPlanes,F),Ut(x,P,F),it.updateMultisampleRenderTarget(V),it.updateRenderTargetMipmap(V),xt.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let we=0,ze=C.length;we<ze;we++){const Je=C[we],Qe=Je.object,We=Je.geometry,tt=Je.material,He=Je.group;if(tt.side===Ci&&Qe.layers.test(F.layers)){const Rt=tt.side;tt.side=Un,tt.needsUpdate=!0,$t(Qe,P,F,We,tt,He),tt.side=Rt,tt.needsUpdate=!0,ve=!0}}ve===!0&&(it.updateMultisampleRenderTarget(V),it.updateRenderTargetMipmap(V))}y.setRenderTarget(Y,te,he),y.setClearColor(ee,ne),me!==void 0&&(F.viewport=me),y.toneMapping=de}function Ut(x,C,P){const F=C.isScene===!0?C.overrideMaterial:null;for(let N=0,V=x.length;N<V;N++){const G=x[N],Y=G.object,te=G.geometry,he=G.group;let de=G.material;de.allowOverride===!0&&F!==null&&(de=F),Y.layers.test(P.layers)&&$t(Y,C,P,te,de,he)}}function $t(x,C,P,F,N,V){x.onBeforeRender(y,C,P,F,N,V),x.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(y,C,P,F,x,V),N.transparent===!0&&N.side===Ci&&N.forceSinglePass===!1?(N.side=Un,N.needsUpdate=!0,y.renderBufferDirect(P,C,F,N,x,V),N.side=hr,N.needsUpdate=!0,y.renderBufferDirect(P,C,F,N,x,V),N.side=Ci):y.renderBufferDirect(P,C,F,N,x,V),x.onAfterRender(y,C,P,F,N,V)}function vn(x,C,P){C.isScene!==!0&&(C=pt);const F=je.get(x),N=p.state.lights,V=p.state.shadowsArray,G=N.state.version,Y=fe.getParameters(x,N.state,V,C,P),te=fe.getProgramCacheKey(Y);let he=F.programs;F.environment=x.isMeshStandardMaterial?C.environment:null,F.fog=C.fog,F.envMap=(x.isMeshStandardMaterial?U:yt).get(x.envMap||F.environment),F.envMapRotation=F.environment!==null&&x.envMap===null?C.environmentRotation:x.envMapRotation,he===void 0&&(x.addEventListener("dispose",ae),he=new Map,F.programs=he);let de=he.get(te);if(de!==void 0){if(F.currentProgram===de&&F.lightsStateVersion===G)return Cn(x,Y),de}else Y.uniforms=fe.getUniforms(x),x.onBeforeCompile(Y,y),de=fe.acquireProgram(Y,te),he.set(te,de),F.uniforms=Y.uniforms;const me=F.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(me.clippingPlanes=Ye.uniform),Cn(x,Y),F.needsLights=Zn(x),F.lightsStateVersion=G,F.needsLights&&(me.ambientLightColor.value=N.state.ambient,me.lightProbe.value=N.state.probe,me.directionalLights.value=N.state.directional,me.directionalLightShadows.value=N.state.directionalShadow,me.spotLights.value=N.state.spot,me.spotLightShadows.value=N.state.spotShadow,me.rectAreaLights.value=N.state.rectArea,me.ltc_1.value=N.state.rectAreaLTC1,me.ltc_2.value=N.state.rectAreaLTC2,me.pointLights.value=N.state.point,me.pointLightShadows.value=N.state.pointShadow,me.hemisphereLights.value=N.state.hemi,me.directionalShadowMap.value=N.state.directionalShadowMap,me.directionalShadowMatrix.value=N.state.directionalShadowMatrix,me.spotShadowMap.value=N.state.spotShadowMap,me.spotLightMatrix.value=N.state.spotLightMatrix,me.spotLightMap.value=N.state.spotLightMap,me.pointShadowMap.value=N.state.pointShadowMap,me.pointShadowMatrix.value=N.state.pointShadowMatrix),F.currentProgram=de,F.uniformsList=null,de}function un(x){if(x.uniformsList===null){const C=x.currentProgram.getUniforms();x.uniformsList=Cl.seqWithValue(C.seq,x.uniforms)}return x.uniformsList}function Cn(x,C){const P=je.get(x);P.outputColorSpace=C.outputColorSpace,P.batching=C.batching,P.batchingColor=C.batchingColor,P.instancing=C.instancing,P.instancingColor=C.instancingColor,P.instancingMorph=C.instancingMorph,P.skinning=C.skinning,P.morphTargets=C.morphTargets,P.morphNormals=C.morphNormals,P.morphColors=C.morphColors,P.morphTargetsCount=C.morphTargetsCount,P.numClippingPlanes=C.numClippingPlanes,P.numIntersection=C.numClipIntersection,P.vertexAlphas=C.vertexAlphas,P.vertexTangents=C.vertexTangents,P.toneMapping=C.toneMapping}function Kt(x,C,P,F,N){C.isScene!==!0&&(C=pt),it.resetTextureUnits();const V=C.fog,G=F.isMeshStandardMaterial?C.environment:null,Y=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:mn,te=(F.isMeshStandardMaterial?U:yt).get(F.envMap||G),he=F.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,de=!!P.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),me=!!P.morphAttributes.position,ve=!!P.morphAttributes.normal,we=!!P.morphAttributes.color;let ze=Or;F.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ze=y.toneMapping);const Je=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Qe=Je!==void 0?Je.length:0,We=je.get(F),tt=p.state.lights;if(ye===!0&&(Me===!0||x!==T)){const zt=x===T&&F.id===M;Ye.setState(F,x,zt)}let He=!1;F.version===We.__version?(We.needsLights&&We.lightsStateVersion!==tt.state.version||We.outputColorSpace!==Y||N.isBatchedMesh&&We.batching===!1||!N.isBatchedMesh&&We.batching===!0||N.isBatchedMesh&&We.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&We.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&We.instancing===!1||!N.isInstancedMesh&&We.instancing===!0||N.isSkinnedMesh&&We.skinning===!1||!N.isSkinnedMesh&&We.skinning===!0||N.isInstancedMesh&&We.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&We.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&We.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&We.instancingMorph===!1&&N.morphTexture!==null||We.envMap!==te||F.fog===!0&&We.fog!==V||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ye.numPlanes||We.numIntersection!==Ye.numIntersection)||We.vertexAlphas!==he||We.vertexTangents!==de||We.morphTargets!==me||We.morphNormals!==ve||We.morphColors!==we||We.toneMapping!==ze||We.morphTargetsCount!==Qe)&&(He=!0):(He=!0,We.__version=F.version);let Rt=We.currentProgram;He===!0&&(Rt=vn(F,C,N));let sn=!1,Ct=!1,St=!1;const et=Rt.getUniforms(),Yt=We.uniforms;if(Oe.useProgram(Rt.program)&&(sn=!0,Ct=!0,St=!0),F.id!==M&&(M=F.id,Ct=!0),sn||T!==x){Oe.buffers.depth.getReversed()?(Re.copy(x.projectionMatrix),p0(Re),m0(Re),et.setValue(k,"projectionMatrix",Re)):et.setValue(k,"projectionMatrix",x.projectionMatrix),et.setValue(k,"viewMatrix",x.matrixWorldInverse);const on=et.map.cameraPosition;on!==void 0&&on.setValue(k,ht.setFromMatrixPosition(x.matrixWorld)),lt.logarithmicDepthBuffer&&et.setValue(k,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&et.setValue(k,"isOrthographic",x.isOrthographicCamera===!0),T!==x&&(T=x,Ct=!0,St=!0)}if(N.isSkinnedMesh){et.setOptional(k,N,"bindMatrix"),et.setOptional(k,N,"bindMatrixInverse");const zt=N.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),et.setValue(k,"boneTexture",zt.boneTexture,it))}N.isBatchedMesh&&(et.setOptional(k,N,"batchingTexture"),et.setValue(k,"batchingTexture",N._matricesTexture,it),et.setOptional(k,N,"batchingIdTexture"),et.setValue(k,"batchingIdTexture",N._indirectTexture,it),et.setOptional(k,N,"batchingColorTexture"),N._colorsTexture!==null&&et.setValue(k,"batchingColorTexture",N._colorsTexture,it));const hn=P.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&De.update(N,P,Rt),(Ct||We.receiveShadow!==N.receiveShadow)&&(We.receiveShadow=N.receiveShadow,et.setValue(k,"receiveShadow",N.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Yt.envMap.value=te,Yt.flipEnvMap.value=te.isCubeTexture&&te.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&C.environment!==null&&(Yt.envMapIntensity.value=C.environmentIntensity),Ct&&(et.setValue(k,"toneMappingExposure",y.toneMappingExposure),We.needsLights&&It(Yt,St),V&&F.fog===!0&&ie.refreshFogUniforms(Yt,V),ie.refreshMaterialUniforms(Yt,F,j,Q,p.state.transmissionRenderTarget[x.id]),Cl.upload(k,un(We),Yt,it)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Cl.upload(k,un(We),Yt,it),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&et.setValue(k,"center",N.center),et.setValue(k,"modelViewMatrix",N.modelViewMatrix),et.setValue(k,"normalMatrix",N.normalMatrix),et.setValue(k,"modelMatrix",N.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const zt=F.uniformsGroups;for(let on=0,fc=zt.length;on<fc;on++){const Xr=zt[on];z.update(Xr,Rt),z.bind(Xr,Rt)}}return Rt}function It(x,C){x.ambientLightColor.needsUpdate=C,x.lightProbe.needsUpdate=C,x.directionalLights.needsUpdate=C,x.directionalLightShadows.needsUpdate=C,x.pointLights.needsUpdate=C,x.pointLightShadows.needsUpdate=C,x.spotLights.needsUpdate=C,x.spotLightShadows.needsUpdate=C,x.rectAreaLights.needsUpdate=C,x.hemisphereLights.needsUpdate=C}function Zn(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(x,C,P){const F=je.get(x);F.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),je.get(x.texture).__webglTexture=C,je.get(x.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:P,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,C){const P=je.get(x);P.__webglFramebuffer=C,P.__useDefaultFramebuffer=C===void 0};const v=k.createFramebuffer();this.setRenderTarget=function(x,C=0,P=0){L=x,I=C,R=P;let F=!0,N=null,V=!1,G=!1;if(x){const te=je.get(x);if(te.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(k.FRAMEBUFFER,null),F=!1;else if(te.__webglFramebuffer===void 0)it.setupRenderTarget(x);else if(te.__hasExternalTextures)it.rebindTextures(x,je.get(x.texture).__webglTexture,je.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const me=x.depthTexture;if(te.__boundDepthTexture!==me){if(me!==null&&je.has(me)&&(x.width!==me.image.width||x.height!==me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(x)}}const he=x.texture;(he.isData3DTexture||he.isDataArrayTexture||he.isCompressedArrayTexture)&&(G=!0);const de=je.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(de[C])?N=de[C][P]:N=de[C],V=!0):x.samples>0&&it.useMultisampledRTT(x)===!1?N=je.get(x).__webglMultisampledFramebuffer:Array.isArray(de)?N=de[P]:N=de,D.copy(x.viewport),q.copy(x.scissor),H=x.scissorTest}else D.copy(Ae).multiplyScalar(j).floor(),q.copy(Le).multiplyScalar(j).floor(),H=qe;if(P!==0&&(N=v),Oe.bindFramebuffer(k.FRAMEBUFFER,N)&&F&&Oe.drawBuffers(x,N),Oe.viewport(D),Oe.scissor(q),Oe.setScissorTest(H),V){const te=je.get(x.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+C,te.__webglTexture,P)}else if(G){const te=je.get(x.texture),he=C;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,te.__webglTexture,P,he)}else if(x!==null&&P!==0){const te=je.get(x.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,te.__webglTexture,P)}M=-1},this.readRenderTargetPixels=function(x,C,P,F,N,V,G,Y=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let te=je.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&G!==void 0&&(te=te[G]),te){Oe.bindFramebuffer(k.FRAMEBUFFER,te);try{const he=x.textures[Y],de=he.format,me=he.type;if(!lt.textureFormatReadable(de)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=x.width-F&&P>=0&&P<=x.height-N&&(x.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Y),k.readPixels(C,P,F,N,Ee.convert(de),Ee.convert(me),V))}finally{const he=L!==null?je.get(L).__webglFramebuffer:null;Oe.bindFramebuffer(k.FRAMEBUFFER,he)}}},this.readRenderTargetPixelsAsync=async function(x,C,P,F,N,V,G,Y=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let te=je.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&G!==void 0&&(te=te[G]),te)if(C>=0&&C<=x.width-F&&P>=0&&P<=x.height-N){Oe.bindFramebuffer(k.FRAMEBUFFER,te);const he=x.textures[Y],de=he.format,me=he.type;if(!lt.textureFormatReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ve),k.bufferData(k.PIXEL_PACK_BUFFER,V.byteLength,k.STREAM_READ),x.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Y),k.readPixels(C,P,F,N,Ee.convert(de),Ee.convert(me),0);const we=L!==null?je.get(L).__webglFramebuffer:null;Oe.bindFramebuffer(k.FRAMEBUFFER,we);const ze=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await f0(k,ze,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ve),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,V),k.deleteBuffer(ve),k.deleteSync(ze),V}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,C=null,P=0){const F=Math.pow(2,-P),N=Math.floor(x.image.width*F),V=Math.floor(x.image.height*F),G=C!==null?C.x:0,Y=C!==null?C.y:0;it.setTexture2D(x,0),k.copyTexSubImage2D(k.TEXTURE_2D,P,0,0,G,Y,N,V),Oe.unbindTexture()};const w=k.createFramebuffer(),O=k.createFramebuffer();this.copyTextureToTexture=function(x,C,P=null,F=null,N=0,V=null){V===null&&(N!==0?(eo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),V=N,N=0):V=0);let G,Y,te,he,de,me,ve,we,ze;const Je=x.isCompressedTexture?x.mipmaps[V]:x.image;if(P!==null)G=P.max.x-P.min.x,Y=P.max.y-P.min.y,te=P.isBox3?P.max.z-P.min.z:1,he=P.min.x,de=P.min.y,me=P.isBox3?P.min.z:0;else{const hn=Math.pow(2,-N);G=Math.floor(Je.width*hn),Y=Math.floor(Je.height*hn),x.isDataArrayTexture?te=Je.depth:x.isData3DTexture?te=Math.floor(Je.depth*hn):te=1,he=0,de=0,me=0}F!==null?(ve=F.x,we=F.y,ze=F.z):(ve=0,we=0,ze=0);const Qe=Ee.convert(C.format),We=Ee.convert(C.type);let tt;C.isData3DTexture?(it.setTexture3D(C,0),tt=k.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(it.setTexture2DArray(C,0),tt=k.TEXTURE_2D_ARRAY):(it.setTexture2D(C,0),tt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,C.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,C.unpackAlignment);const He=k.getParameter(k.UNPACK_ROW_LENGTH),Rt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),sn=k.getParameter(k.UNPACK_SKIP_PIXELS),Ct=k.getParameter(k.UNPACK_SKIP_ROWS),St=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Je.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Je.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,he),k.pixelStorei(k.UNPACK_SKIP_ROWS,de),k.pixelStorei(k.UNPACK_SKIP_IMAGES,me);const et=x.isDataArrayTexture||x.isData3DTexture,Yt=C.isDataArrayTexture||C.isData3DTexture;if(x.isDepthTexture){const hn=je.get(x),zt=je.get(C),on=je.get(hn.__renderTarget),fc=je.get(zt.__renderTarget);Oe.bindFramebuffer(k.READ_FRAMEBUFFER,on.__webglFramebuffer),Oe.bindFramebuffer(k.DRAW_FRAMEBUFFER,fc.__webglFramebuffer);for(let Xr=0;Xr<te;Xr++)et&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,je.get(x).__webglTexture,N,me+Xr),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,je.get(C).__webglTexture,V,ze+Xr)),k.blitFramebuffer(he,de,G,Y,ve,we,G,Y,k.DEPTH_BUFFER_BIT,k.NEAREST);Oe.bindFramebuffer(k.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||je.has(x)){const hn=je.get(x),zt=je.get(C);Oe.bindFramebuffer(k.READ_FRAMEBUFFER,w),Oe.bindFramebuffer(k.DRAW_FRAMEBUFFER,O);for(let on=0;on<te;on++)et?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,hn.__webglTexture,N,me+on):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,hn.__webglTexture,N),Yt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,zt.__webglTexture,V,ze+on):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,zt.__webglTexture,V),N!==0?k.blitFramebuffer(he,de,G,Y,ve,we,G,Y,k.COLOR_BUFFER_BIT,k.NEAREST):Yt?k.copyTexSubImage3D(tt,V,ve,we,ze+on,he,de,G,Y):k.copyTexSubImage2D(tt,V,ve,we,he,de,G,Y);Oe.bindFramebuffer(k.READ_FRAMEBUFFER,null),Oe.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Yt?x.isDataTexture||x.isData3DTexture?k.texSubImage3D(tt,V,ve,we,ze,G,Y,te,Qe,We,Je.data):C.isCompressedArrayTexture?k.compressedTexSubImage3D(tt,V,ve,we,ze,G,Y,te,Qe,Je.data):k.texSubImage3D(tt,V,ve,we,ze,G,Y,te,Qe,We,Je):x.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,V,ve,we,G,Y,Qe,We,Je.data):x.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,V,ve,we,Je.width,Je.height,Qe,Je.data):k.texSubImage2D(k.TEXTURE_2D,V,ve,we,G,Y,Qe,We,Je);k.pixelStorei(k.UNPACK_ROW_LENGTH,He),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Rt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,sn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ct),k.pixelStorei(k.UNPACK_SKIP_IMAGES,St),V===0&&C.generateMipmaps&&k.generateMipmap(tt),Oe.unbindTexture()},this.copyTextureToTexture3D=function(x,C,P=null,F=null,N=0){return eo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,C,P,F,N)},this.initRenderTarget=function(x){je.get(x).__webglFramebuffer===void 0&&it.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?it.setTextureCube(x,0):x.isData3DTexture?it.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?it.setTexture2DArray(x,0):it.setTexture2D(x,0),Oe.unbindTexture()},this.resetState=function(){I=0,R=0,L=null,Oe.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class Ni{constructor(e,t,n,i,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Ni.nextNameID=Ni.nextNameID||0,this.$name.id=`lil-gui-name-${++Ni.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class vb extends Ni{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function gh(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const xb={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:gh,toHexString:gh},Ta={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},yb={isPrimitive:!1,match:s=>Array.isArray(s),fromHexString(s,e,t=1){const n=Ta.fromHexString(s);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([s,e,t],n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return Ta.toHexString(i)}},Sb={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const n=Ta.fromHexString(s);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:s,g:e,b:t},n=1){n=255/n;const i=s*n<<16^e*n<<8^t*n<<0;return Ta.toHexString(i)}},Mb=[xb,Ta,yb,Sb];function bb(s){return Mb.find(e=>e.match(s))}class Eb extends Ni{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=bb(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=gh(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Kc extends Ni{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Tb extends Ni{constructor(e,t,n,i,r,o){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let S=parseFloat(this.$input.value);isNaN(S)||(this._stepExplicit&&(S=this._snap(S)),this.setValue(this._clamp(S)))},n=S=>{const b=parseFloat(this.$input.value);isNaN(b)||(this._snapClampSetValue(b+S),this.$input.value=this.getValue())},i=S=>{S.key==="Enter"&&this.$input.blur(),S.code==="ArrowUp"&&(S.preventDefault(),n(this._step*this._arrowKeyMultiplier(S))),S.code==="ArrowDown"&&(S.preventDefault(),n(this._step*this._arrowKeyMultiplier(S)*-1))},r=S=>{this._inputFocused&&(S.preventDefault(),n(this._step*this._normalizeMouseWheel(S)))};let o=!1,a,l,c,u,d;const f=5,h=S=>{a=S.clientX,l=c=S.clientY,o=!0,u=this.getValue(),d=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=S=>{if(o){const b=S.clientX-a,y=S.clientY-l;Math.abs(y)>f?(S.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(b)>f&&_()}if(!o){const b=S.clientY-c;d-=b*this._step*this._arrowKeyMultiplier(S),u+d>this._max?d=this._max-u:u+d<this._min&&(d=this._min-u),this._snapClampSetValue(u+d)}c=S.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",h),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(p,S,b,y,A)=>(p-S)/(b-S)*(A-y)+y,t=p=>{const S=this.$slider.getBoundingClientRect();let b=e(p,S.left,S.right,this._min,this._max);this._snapClampSetValue(b)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=p=>{t(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},u=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",f))},d=p=>{if(o){const S=p.touches[0].clientX-a,b=p.touches[0].clientY-l;Math.abs(S)>Math.abs(b)?c(p):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",f))}else p.preventDefault(),t(p.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",f)},h=this._callOnFinishChange.bind(this),g=400;let _;const m=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const b=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+b),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(h,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class wb extends Ni{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const n=document.createElement("option");n.textContent=t,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class Ab extends Ni{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Rb=`.lil-gui {
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
}`;function Cb(s){const e=document.createElement("style");e.innerHTML=s;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let tp=!1;class pd{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!tp&&a&&(Cb(Rb),tp=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(e,t,n,i,r){if(Object(n)===n)return new wb(this,e,t,n);const o=e[t];switch(typeof o){case"number":return new Tb(this,e,t,n,i,r);case"boolean":return new vb(this,e,t);case"string":return new Ab(this,e,t);case"function":return new Kc(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,n=1){return new Eb(this,e,t,n)}addFolder(e){const t=new pd({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Kc||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Kc)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var ri=Uint8Array,js=Uint16Array,Pb=Int32Array,km=new ri([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),zm=new ri([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ib=new ri([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Hm=function(s,e){for(var t=new js(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new Pb(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return{b:t,r:i}},Vm=Hm(km,2),Gm=Vm.b,Lb=Vm.r;Gm[28]=258,Lb[258]=28;var Db=Hm(zm,0),Ub=Db.b,_h=new js(32768);for(var Ht=0;Ht<32768;++Ht){var Mr=(Ht&43690)>>1|(Ht&21845)<<1;Mr=(Mr&52428)>>2|(Mr&13107)<<2,Mr=(Mr&61680)>>4|(Mr&3855)<<4,_h[Ht]=((Mr&65280)>>8|(Mr&255)<<8)>>1}var ha=function(s,e,t){for(var n=s.length,i=0,r=new js(e);i<n;++i)s[i]&&++r[s[i]-1];var o=new js(e);for(i=1;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;var a;if(t){a=new js(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],u=e-s[i],d=o[s[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)a[_h[d]>>l]=c}else for(a=new js(n),i=0;i<n;++i)s[i]&&(a[i]=_h[o[s[i]-1]++]>>15-s[i]);return a},ka=new ri(288);for(var Ht=0;Ht<144;++Ht)ka[Ht]=8;for(var Ht=144;Ht<256;++Ht)ka[Ht]=9;for(var Ht=256;Ht<280;++Ht)ka[Ht]=7;for(var Ht=280;Ht<288;++Ht)ka[Ht]=8;var Wm=new ri(32);for(var Ht=0;Ht<32;++Ht)Wm[Ht]=5;var Nb=ha(ka,9,1),Ob=ha(Wm,5,1),jc=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},hi=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},Zc=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},Fb=function(s){return(s+7)/8|0},Bb=function(s,e,t){return(t==null||t>s.length)&&(t=s.length),new ri(s.subarray(e,t))},kb=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],fi=function(s,e,t){var n=new Error(e||kb[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,fi),!t)throw n;return n},zb=function(s,e,t,n){var i=s.length,r=0;if(!i||e.f&&!e.l)return t||new ri(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new ri(i*3));var c=function(pt){var vt=t.length;if(pt>vt){var ot=new ri(Math.max(vt*2,pt));ot.set(t),t=ot}},u=e.f||0,d=e.p||0,f=e.b||0,h=e.l,g=e.d,_=e.m,m=e.n,p=i*8;do{if(!h){u=hi(s,d,1);var S=hi(s,d+1,3);if(d+=3,S)if(S==1)h=Nb,g=Ob,_=9,m=5;else if(S==2){var I=hi(s,d,31)+257,R=hi(s,d+10,15)+4,L=I+hi(s,d+5,31)+1;d+=14;for(var M=new ri(L),T=new ri(19),D=0;D<R;++D)T[Ib[D]]=hi(s,d+D*3,7);d+=R*3;for(var q=jc(T),H=(1<<q)-1,ee=ha(T,q,1),D=0;D<L;){var ne=ee[hi(s,d,H)];d+=ne&15;var b=ne>>4;if(b<16)M[D++]=b;else{var K=0,Q=0;for(b==16?(Q=3+hi(s,d,3),d+=2,K=M[D-1]):b==17?(Q=3+hi(s,d,7),d+=3):b==18&&(Q=11+hi(s,d,127),d+=7);Q--;)M[D++]=K}}var j=M.subarray(0,I),Te=M.subarray(I);_=jc(j),m=jc(Te),h=ha(j,_,1),g=ha(Te,m,1)}else fi(1);else{var b=Fb(d)+4,y=s[b-4]|s[b-3]<<8,A=b+y;if(A>i){l&&fi(0);break}a&&c(f+y),t.set(s.subarray(b,A),f),e.b=f+=y,e.p=d=A*8,e.f=u;continue}if(d>p){l&&fi(0);break}}a&&c(f+131072);for(var Pe=(1<<_)-1,Ae=(1<<m)-1,Le=d;;Le=d){var K=h[Zc(s,d)&Pe],qe=K>>4;if(d+=K&15,d>p){l&&fi(0);break}if(K||fi(2),qe<256)t[f++]=qe;else if(qe==256){Le=d,h=null;break}else{var Z=qe-254;if(qe>264){var D=qe-257,ye=km[D];Z=hi(s,d,(1<<ye)-1)+Gm[D],d+=ye}var Me=g[Zc(s,d)&Ae],Re=Me>>4;Me||fi(3),d+=Me&15;var Te=Ub[Re];if(Re>3){var ye=zm[Re];Te+=Zc(s,d)&(1<<ye)-1,d+=ye}if(d>p){l&&fi(0);break}a&&c(f+131072);var Ie=f+Z;if(f<Te){var ht=r-Te,$e=Math.min(Te,Ie);for(ht+f<0&&fi(3);f<$e;++f)t[f]=n[ht+f]}for(;f<Ie;++f)t[f]=t[f-Te]}}e.l=h,e.p=Le,e.b=f,e.f=u,h&&(u=1,e.m=_,e.d=g,e.n=m)}while(!u);return f!=t.length&&o?Bb(t,0,f):t.subarray(0,f)},Hb=new ri(0),Vb=function(s,e){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&fi(6,"invalid zlib data"),(s[1]>>5&1)==1&&fi(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function ml(s,e){return zb(s.subarray(Vb(s),-4),{i:2},e,e)}var Gb=typeof TextDecoder<"u"&&new TextDecoder,Wb=0;try{Gb.decode(Hb,{stream:!0}),Wb=1}catch{}class Xb extends pv{constructor(e){super(e),this.type=nr}parse(e){const M=Math.pow(2.7182818,2.2);function T(v,w){let O=0;for(let C=0;C<65536;++C)(C==0||v[C>>3]&1<<(C&7))&&(w[O++]=C);const x=O-1;for(;O<65536;)w[O++]=0;return x}function D(v){for(let w=0;w<16384;w++)v[w]={},v[w].len=0,v[w].lit=0,v[w].p=null}const q={l:0,c:0,lc:0};function H(v,w,O,x,C){for(;O<v;)w=w<<8|Ze(x,C),O+=8;O-=v,q.l=w>>O&(1<<v)-1,q.c=w,q.lc=O}const ee=new Array(59);function ne(v){for(let O=0;O<=58;++O)ee[O]=0;for(let O=0;O<65537;++O)ee[v[O]]+=1;let w=0;for(let O=58;O>0;--O){const x=w+ee[O]>>1;ee[O]=w,w=x}for(let O=0;O<65537;++O){const x=v[O];x>0&&(v[O]=x|ee[x]++<<6)}}function K(v,w,O,x,C,P){const F=w;let N=0,V=0;for(;x<=C;x++){if(F.value-w.value>O)return!1;H(6,N,V,v,F);const G=q.l;if(N=q.c,V=q.lc,P[x]=G,G==63){if(F.value-w.value>O)throw new Error("Something wrong with hufUnpackEncTable");H(8,N,V,v,F);let Y=q.l+6;if(N=q.c,V=q.lc,x+Y>C+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Y--;)P[x++]=0;x--}else if(G>=59){let Y=G-59+2;if(x+Y>C+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Y--;)P[x++]=0;x--}}ne(P)}function Q(v){return v&63}function j(v){return v>>6}function Te(v,w,O,x){for(;w<=O;w++){const C=j(v[w]),P=Q(v[w]);if(C>>P)throw new Error("Invalid table entry");if(P>14){const F=x[C>>P-14];if(F.len)throw new Error("Invalid table entry");if(F.lit++,F.p){const N=F.p;F.p=new Array(F.lit);for(let V=0;V<F.lit-1;++V)F.p[V]=N[V]}else F.p=new Array(1);F.p[F.lit-1]=w}else if(P){let F=0;for(let N=1<<14-P;N>0;N--){const V=x[(C<<14-P)+F];if(V.len||V.p)throw new Error("Invalid table entry");V.len=P,V.lit=w,F++}}}return!0}const Pe={c:0,lc:0};function Ae(v,w,O,x){v=v<<8|Ze(O,x),w+=8,Pe.c=v,Pe.lc=w}const Le={c:0,lc:0};function qe(v,w,O,x,C,P,F,N,V){if(v==w){x<8&&(Ae(O,x,C,P),O=Pe.c,x=Pe.lc),x-=8;let G=O>>x;if(G=new Uint8Array([G])[0],N.value+G>V)return!1;const Y=F[N.value-1];for(;G-- >0;)F[N.value++]=Y}else if(N.value<V)F[N.value++]=v;else return!1;Le.c=O,Le.lc=x}function Z(v){return v&65535}function ye(v){const w=Z(v);return w>32767?w-65536:w}const Me={a:0,b:0};function Re(v,w){const O=ye(v),C=ye(w),P=O+(C&1)+(C>>1),F=P,N=P-C;Me.a=F,Me.b=N}function Ie(v,w){const O=Z(v),x=Z(w),C=O-(x>>1)&65535,P=x+C-32768&65535;Me.a=P,Me.b=C}function ht(v,w,O,x,C,P,F){const N=F<16384,V=O>C?C:O;let G=1,Y,te;for(;G<=V;)G<<=1;for(G>>=1,Y=G,G>>=1;G>=1;){te=0;const he=te+P*(C-Y),de=P*G,me=P*Y,ve=x*G,we=x*Y;let ze,Je,Qe,We;for(;te<=he;te+=me){let tt=te;const He=te+x*(O-Y);for(;tt<=He;tt+=we){const Rt=tt+ve,sn=tt+de,Ct=sn+ve;N?(Re(v[tt+w],v[sn+w]),ze=Me.a,Qe=Me.b,Re(v[Rt+w],v[Ct+w]),Je=Me.a,We=Me.b,Re(ze,Je),v[tt+w]=Me.a,v[Rt+w]=Me.b,Re(Qe,We),v[sn+w]=Me.a,v[Ct+w]=Me.b):(Ie(v[tt+w],v[sn+w]),ze=Me.a,Qe=Me.b,Ie(v[Rt+w],v[Ct+w]),Je=Me.a,We=Me.b,Ie(ze,Je),v[tt+w]=Me.a,v[Rt+w]=Me.b,Ie(Qe,We),v[sn+w]=Me.a,v[Ct+w]=Me.b)}if(O&G){const Rt=tt+de;N?Re(v[tt+w],v[Rt+w]):Ie(v[tt+w],v[Rt+w]),ze=Me.a,v[Rt+w]=Me.b,v[tt+w]=ze}}if(C&G){let tt=te;const He=te+x*(O-Y);for(;tt<=He;tt+=we){const Rt=tt+ve;N?Re(v[tt+w],v[Rt+w]):Ie(v[tt+w],v[Rt+w]),ze=Me.a,v[Rt+w]=Me.b,v[tt+w]=ze}}Y=G,G>>=1}return te}function $e(v,w,O,x,C,P,F,N,V){let G=0,Y=0;const te=F,he=Math.trunc(x.value+(C+7)/8);for(;x.value<he;)for(Ae(G,Y,O,x),G=Pe.c,Y=Pe.lc;Y>=14;){const me=G>>Y-14&16383,ve=w[me];if(ve.len)Y-=ve.len,qe(ve.lit,P,G,Y,O,x,N,V,te),G=Le.c,Y=Le.lc;else{if(!ve.p)throw new Error("hufDecode issues");let we;for(we=0;we<ve.lit;we++){const ze=Q(v[ve.p[we]]);for(;Y<ze&&x.value<he;)Ae(G,Y,O,x),G=Pe.c,Y=Pe.lc;if(Y>=ze&&j(v[ve.p[we]])==(G>>Y-ze&(1<<ze)-1)){Y-=ze,qe(ve.p[we],P,G,Y,O,x,N,V,te),G=Le.c,Y=Le.lc;break}}if(we==ve.lit)throw new Error("hufDecode issues")}}const de=8-C&7;for(G>>=de,Y-=de;Y>0;){const me=w[G<<14-Y&16383];if(me.len)Y-=me.len,qe(me.lit,P,G,Y,O,x,N,V,te),G=Le.c,Y=Le.lc;else throw new Error("hufDecode issues")}return!0}function pt(v,w,O,x,C,P){const F={value:0},N=O.value,V=De(w,O),G=De(w,O);O.value+=4;const Y=De(w,O);if(O.value+=4,V<0||V>=65537||G<0||G>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const te=new Array(65537),he=new Array(16384);D(he);const de=x-(O.value-N);if(K(v,O,de,V,G,te),Y>8*(x-(O.value-N)))throw new Error("Something wrong with hufUncompress");Te(te,V,G,he),$e(te,he,v,O,Y,G,P,C,F)}function vt(v,w,O){for(let x=0;x<O;++x)w[x]=v[w[x]]}function ot(v){for(let w=1;w<v.length;w++){const O=v[w-1]+v[w]-128;v[w]=O}}function k(v,w){let O=0,x=Math.floor((v.length+1)/2),C=0;const P=v.length-1;for(;!(C>P||(w[C++]=v[O++],C>P));)w[C++]=v[x++]}function nt(v){let w=v.byteLength;const O=new Array;let x=0;const C=new DataView(v);for(;w>0;){const P=C.getInt8(x++);if(P<0){const F=-P;w-=F+1;for(let N=0;N<F;N++)O.push(C.getUint8(x++))}else{const F=P;w-=2;const N=C.getUint8(x++);for(let V=0;V<F+1;V++)O.push(N)}}return O}function xt(v,w,O,x,C,P){let F=new DataView(P.buffer);const N=O[v.idx[0]].width,V=O[v.idx[0]].height,G=3,Y=Math.floor(N/8),te=Math.ceil(N/8),he=Math.ceil(V/8),de=N-(te-1)*8,me=V-(he-1)*8,ve={value:0},we=new Array(G),ze=new Array(G),Je=new Array(G),Qe=new Array(G),We=new Array(G);for(let He=0;He<G;++He)We[He]=w[v.idx[He]],we[He]=He<1?0:we[He-1]+te*he,ze[He]=new Float32Array(64),Je[He]=new Uint16Array(64),Qe[He]=new Uint16Array(te*64);for(let He=0;He<he;++He){let Rt=8;He==he-1&&(Rt=me);let sn=8;for(let St=0;St<te;++St){St==te-1&&(sn=de);for(let et=0;et<G;++et)Je[et].fill(0),Je[et][0]=C[we[et]++],lt(ve,x,Je[et]),Oe(Je[et],ze[et]),mt(ze[et]);je(ze);for(let et=0;et<G;++et)it(ze[et],Qe[et],St*64)}let Ct=0;for(let St=0;St<G;++St){const et=O[v.idx[St]].type;for(let Yt=8*He;Yt<8*He+Rt;++Yt){Ct=We[St][Yt];for(let hn=0;hn<Y;++hn){const zt=hn*64+(Yt&7)*8;F.setUint16(Ct+0*2*et,Qe[St][zt+0],!0),F.setUint16(Ct+1*2*et,Qe[St][zt+1],!0),F.setUint16(Ct+2*2*et,Qe[St][zt+2],!0),F.setUint16(Ct+3*2*et,Qe[St][zt+3],!0),F.setUint16(Ct+4*2*et,Qe[St][zt+4],!0),F.setUint16(Ct+5*2*et,Qe[St][zt+5],!0),F.setUint16(Ct+6*2*et,Qe[St][zt+6],!0),F.setUint16(Ct+7*2*et,Qe[St][zt+7],!0),Ct+=8*2*et}}if(Y!=te)for(let Yt=8*He;Yt<8*He+Rt;++Yt){const hn=We[St][Yt]+8*Y*2*et,zt=Y*64+(Yt&7)*8;for(let on=0;on<sn;++on)F.setUint16(hn+on*2*et,Qe[St][zt+on],!0)}}}const tt=new Uint16Array(N);F=new DataView(P.buffer);for(let He=0;He<G;++He){O[v.idx[He]].decoded=!0;const Rt=O[v.idx[He]].type;if(O[He].type==2)for(let sn=0;sn<V;++sn){const Ct=We[He][sn];for(let St=0;St<N;++St)tt[St]=F.getUint16(Ct+St*2*Rt,!0);for(let St=0;St<N;++St)F.setFloat32(Ct+St*2*Rt,J(tt[St]),!0)}}}function lt(v,w,O){let x,C=1;for(;C<64;)x=w[v.value],x==65280?C=64:x>>8==255?C+=x&255:(O[C]=x,C++),v.value++}function Oe(v,w){w[0]=J(v[0]),w[1]=J(v[1]),w[2]=J(v[5]),w[3]=J(v[6]),w[4]=J(v[14]),w[5]=J(v[15]),w[6]=J(v[27]),w[7]=J(v[28]),w[8]=J(v[2]),w[9]=J(v[4]),w[10]=J(v[7]),w[11]=J(v[13]),w[12]=J(v[16]),w[13]=J(v[26]),w[14]=J(v[29]),w[15]=J(v[42]),w[16]=J(v[3]),w[17]=J(v[8]),w[18]=J(v[12]),w[19]=J(v[17]),w[20]=J(v[25]),w[21]=J(v[30]),w[22]=J(v[41]),w[23]=J(v[43]),w[24]=J(v[9]),w[25]=J(v[11]),w[26]=J(v[18]),w[27]=J(v[24]),w[28]=J(v[31]),w[29]=J(v[40]),w[30]=J(v[44]),w[31]=J(v[53]),w[32]=J(v[10]),w[33]=J(v[19]),w[34]=J(v[23]),w[35]=J(v[32]),w[36]=J(v[39]),w[37]=J(v[45]),w[38]=J(v[52]),w[39]=J(v[54]),w[40]=J(v[20]),w[41]=J(v[22]),w[42]=J(v[33]),w[43]=J(v[38]),w[44]=J(v[46]),w[45]=J(v[51]),w[46]=J(v[55]),w[47]=J(v[60]),w[48]=J(v[21]),w[49]=J(v[34]),w[50]=J(v[37]),w[51]=J(v[47]),w[52]=J(v[50]),w[53]=J(v[56]),w[54]=J(v[59]),w[55]=J(v[61]),w[56]=J(v[35]),w[57]=J(v[36]),w[58]=J(v[48]),w[59]=J(v[49]),w[60]=J(v[57]),w[61]=J(v[58]),w[62]=J(v[62]),w[63]=J(v[63])}function mt(v){const w=.5*Math.cos(.7853975),O=.5*Math.cos(3.14159/16),x=.5*Math.cos(3.14159/8),C=.5*Math.cos(3*3.14159/16),P=.5*Math.cos(5*3.14159/16),F=.5*Math.cos(3*3.14159/8),N=.5*Math.cos(7*3.14159/16),V=new Array(4),G=new Array(4),Y=new Array(4),te=new Array(4);for(let he=0;he<8;++he){const de=he*8;V[0]=x*v[de+2],V[1]=F*v[de+2],V[2]=x*v[de+6],V[3]=F*v[de+6],G[0]=O*v[de+1]+C*v[de+3]+P*v[de+5]+N*v[de+7],G[1]=C*v[de+1]-N*v[de+3]-O*v[de+5]-P*v[de+7],G[2]=P*v[de+1]-O*v[de+3]+N*v[de+5]+C*v[de+7],G[3]=N*v[de+1]-P*v[de+3]+C*v[de+5]-O*v[de+7],Y[0]=w*(v[de+0]+v[de+4]),Y[3]=w*(v[de+0]-v[de+4]),Y[1]=V[0]+V[3],Y[2]=V[1]-V[2],te[0]=Y[0]+Y[1],te[1]=Y[3]+Y[2],te[2]=Y[3]-Y[2],te[3]=Y[0]-Y[1],v[de+0]=te[0]+G[0],v[de+1]=te[1]+G[1],v[de+2]=te[2]+G[2],v[de+3]=te[3]+G[3],v[de+4]=te[3]-G[3],v[de+5]=te[2]-G[2],v[de+6]=te[1]-G[1],v[de+7]=te[0]-G[0]}for(let he=0;he<8;++he)V[0]=x*v[16+he],V[1]=F*v[16+he],V[2]=x*v[48+he],V[3]=F*v[48+he],G[0]=O*v[8+he]+C*v[24+he]+P*v[40+he]+N*v[56+he],G[1]=C*v[8+he]-N*v[24+he]-O*v[40+he]-P*v[56+he],G[2]=P*v[8+he]-O*v[24+he]+N*v[40+he]+C*v[56+he],G[3]=N*v[8+he]-P*v[24+he]+C*v[40+he]-O*v[56+he],Y[0]=w*(v[he]+v[32+he]),Y[3]=w*(v[he]-v[32+he]),Y[1]=V[0]+V[3],Y[2]=V[1]-V[2],te[0]=Y[0]+Y[1],te[1]=Y[3]+Y[2],te[2]=Y[3]-Y[2],te[3]=Y[0]-Y[1],v[0+he]=te[0]+G[0],v[8+he]=te[1]+G[1],v[16+he]=te[2]+G[2],v[24+he]=te[3]+G[3],v[32+he]=te[3]-G[3],v[40+he]=te[2]-G[2],v[48+he]=te[1]-G[1],v[56+he]=te[0]-G[0]}function je(v){for(let w=0;w<64;++w){const O=v[0][w],x=v[1][w],C=v[2][w];v[0][w]=O+1.5747*C,v[1][w]=O-.1873*x-.4682*C,v[2][w]=O+1.8556*x}}function it(v,w,O){for(let x=0;x<64;++x)w[O+x]=of.toHalfFloat(yt(v[x]))}function yt(v){return v<=1?Math.sign(v)*Math.pow(Math.abs(v),2.2):Math.sign(v)*Math.pow(M,Math.abs(v)-1)}function U(v){return new DataView(v.array.buffer,v.offset.value,v.size)}function E(v){const w=v.viewer.buffer.slice(v.offset.value,v.offset.value+v.size),O=new Uint8Array(nt(w)),x=new Uint8Array(O.length);return ot(O),k(O,x),new DataView(x.buffer)}function $(v){const w=v.array.slice(v.offset.value,v.offset.value+v.size),O=ml(w),x=new Uint8Array(O.length);return ot(O),k(O,x),new DataView(x.buffer)}function re(v){const w=v.viewer,O={value:v.offset.value},x=new Uint16Array(v.columns*v.lines*(v.inputChannels.length*v.type)),C=new Uint8Array(8192);let P=0;const F=new Array(v.inputChannels.length);for(let me=0,ve=v.inputChannels.length;me<ve;me++)F[me]={},F[me].start=P,F[me].end=F[me].start,F[me].nx=v.columns,F[me].ny=v.lines,F[me].size=v.type,P+=F[me].nx*F[me].ny*F[me].size;const N=ce(w,O),V=ce(w,O);if(V>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(N<=V)for(let me=0;me<V-N+1;me++)C[me+N]=Ve(w,O);const G=new Uint16Array(65536),Y=T(C,G),te=De(w,O);pt(v.array,w,O,te,x,P);for(let me=0;me<v.inputChannels.length;++me){const ve=F[me];for(let we=0;we<F[me].size;++we)ht(x,ve.start+we,ve.nx,ve.size,ve.ny,ve.nx*ve.size,Y)}vt(G,x,P);let he=0;const de=new Uint8Array(x.buffer.byteLength);for(let me=0;me<v.lines;me++)for(let ve=0;ve<v.inputChannels.length;ve++){const we=F[ve],ze=we.nx*we.size,Je=new Uint8Array(x.buffer,we.end*2,ze*2);de.set(Je,he),he+=ze*2,we.end+=ze}return new DataView(de.buffer)}function fe(v){const w=v.array.slice(v.offset.value,v.offset.value+v.size),O=ml(w),x=v.inputChannels.length*v.lines*v.columns*v.totalBytes,C=new ArrayBuffer(x),P=new DataView(C);let F=0,N=0;const V=new Array(4);for(let G=0;G<v.lines;G++)for(let Y=0;Y<v.inputChannels.length;Y++){let te=0;switch(v.inputChannels[Y].pixelType){case 1:V[0]=F,V[1]=V[0]+v.columns,F=V[1]+v.columns;for(let de=0;de<v.columns;++de){const me=O[V[0]++]<<8|O[V[1]++];te+=me,P.setUint16(N,te,!0),N+=2}break;case 2:V[0]=F,V[1]=V[0]+v.columns,V[2]=V[1]+v.columns,F=V[2]+v.columns;for(let de=0;de<v.columns;++de){const me=O[V[0]++]<<24|O[V[1]++]<<16|O[V[2]++]<<8;te+=me,P.setUint32(N,te,!0),N+=4}break}}return P}function ie(v){const w=v.viewer,O={value:v.offset.value},x=new Uint8Array(v.columns*v.lines*(v.inputChannels.length*v.type*2)),C={version:Ee(w,O),unknownUncompressedSize:Ee(w,O),unknownCompressedSize:Ee(w,O),acCompressedSize:Ee(w,O),dcCompressedSize:Ee(w,O),rleCompressedSize:Ee(w,O),rleUncompressedSize:Ee(w,O),rleRawSize:Ee(w,O),totalAcUncompressedCount:Ee(w,O),totalDcUncompressedCount:Ee(w,O),acCompression:Ee(w,O)};if(C.version<2)throw new Error("EXRLoader.parse: "+It.compression+" version "+C.version+" is unsupported");const P=new Array;let F=ce(w,O)-2;for(;F>0;){const ve=Xe(w.buffer,O),we=Ve(w,O),ze=we>>2&3,Je=(we>>4)-1,Qe=new Int8Array([Je])[0],We=Ve(w,O);P.push({name:ve,index:Qe,type:We,compression:ze}),F-=ve.length+3}const N=It.channels,V=new Array(v.inputChannels.length);for(let ve=0;ve<v.inputChannels.length;++ve){const we=V[ve]={},ze=N[ve];we.name=ze.name,we.compression=0,we.decoded=!1,we.type=ze.pixelType,we.pLinear=ze.pLinear,we.width=v.columns,we.height=v.lines}const G={idx:new Array(3)};for(let ve=0;ve<v.inputChannels.length;++ve){const we=V[ve];for(let ze=0;ze<P.length;++ze){const Je=P[ze];we.name==Je.name&&(we.compression=Je.compression,Je.index>=0&&(G.idx[Je.index]=ve),we.offset=ve)}}let Y,te,he;if(C.acCompressedSize>0)switch(C.acCompression){case 0:Y=new Uint16Array(C.totalAcUncompressedCount),pt(v.array,w,O,C.acCompressedSize,Y,C.totalAcUncompressedCount);break;case 1:const ve=v.array.slice(O.value,O.value+C.totalAcUncompressedCount),we=ml(ve);Y=new Uint16Array(we.buffer),O.value+=C.totalAcUncompressedCount;break}if(C.dcCompressedSize>0){const ve={array:v.array,offset:O,size:C.dcCompressedSize};te=new Uint16Array($(ve).buffer),O.value+=C.dcCompressedSize}if(C.rleRawSize>0){const ve=v.array.slice(O.value,O.value+C.rleCompressedSize),we=ml(ve);he=nt(we.buffer),O.value+=C.rleCompressedSize}let de=0;const me=new Array(V.length);for(let ve=0;ve<me.length;++ve)me[ve]=new Array;for(let ve=0;ve<v.lines;++ve)for(let we=0;we<V.length;++we)me[we].push(de),de+=V[we].width*v.type*2;xt(G,me,V,Y,te,x);for(let ve=0;ve<V.length;++ve){const we=V[ve];if(!we.decoded)switch(we.compression){case 2:let ze=0,Je=0;for(let Qe=0;Qe<v.lines;++Qe){let We=me[ve][ze];for(let tt=0;tt<we.width;++tt){for(let He=0;He<2*we.type;++He)x[We++]=he[Je+He*we.width*we.height];Je++}ze++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(x.buffer)}function Xe(v,w){const O=new Uint8Array(v);let x=0;for(;O[w.value+x]!=0;)x+=1;const C=new TextDecoder().decode(O.slice(w.value,w.value+x));return w.value=w.value+x+1,C}function Ue(v,w,O){const x=new TextDecoder().decode(new Uint8Array(v).slice(w.value,w.value+O));return w.value=w.value+O,x}function Ye(v,w){const O=le(v,w),x=De(v,w);return[O,x]}function Ke(v,w){const O=De(v,w),x=De(v,w);return[O,x]}function le(v,w){const O=v.getInt32(w.value,!0);return w.value=w.value+4,O}function De(v,w){const O=v.getUint32(w.value,!0);return w.value=w.value+4,O}function Ze(v,w){const O=v[w.value];return w.value=w.value+1,O}function Ve(v,w){const O=v.getUint8(w.value);return w.value=w.value+1,O}const Ee=function(v,w){let O;return"getBigInt64"in DataView.prototype?O=Number(v.getBigInt64(w.value,!0)):O=v.getUint32(w.value+4,!0)+Number(v.getUint32(w.value,!0)<<32),w.value+=8,O};function ke(v,w){const O=v.getFloat32(w.value,!0);return w.value+=4,O}function z(v,w){return of.toHalfFloat(ke(v,w))}function J(v){const w=(v&31744)>>10,O=v&1023;return(v>>15?-1:1)*(w?w===31?O?NaN:1/0:Math.pow(2,w-15)*(1+O/1024):6103515625e-14*(O/1024))}function ce(v,w){const O=v.getUint16(w.value,!0);return w.value+=2,O}function Be(v,w){return J(ce(v,w))}function be(v,w,O,x){const C=O.value,P=[];for(;O.value<C+x-1;){const F=Xe(w,O),N=le(v,O),V=Ve(v,O);O.value+=3;const G=le(v,O),Y=le(v,O);P.push({name:F,pixelType:N,pLinear:V,xSampling:G,ySampling:Y})}return O.value+=1,P}function ue(v,w){const O=ke(v,w),x=ke(v,w),C=ke(v,w),P=ke(v,w),F=ke(v,w),N=ke(v,w),V=ke(v,w),G=ke(v,w);return{redX:O,redY:x,greenX:C,greenY:P,blueX:F,blueY:N,whiteX:V,whiteY:G}}function ae(v,w){const O=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],x=Ve(v,w);return O[x]}function B(v,w){const O=le(v,w),x=le(v,w),C=le(v,w),P=le(v,w);return{xMin:O,yMin:x,xMax:C,yMax:P}}function se(v,w){const O=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],x=Ve(v,w);return O[x]}function X(v,w){const O=["ENVMAP_LATLONG","ENVMAP_CUBE"],x=Ve(v,w);return O[x]}function _e(v,w){const O=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],x=["ROUND_DOWN","ROUND_UP"],C=De(v,w),P=De(v,w),F=Ve(v,w);return{xSize:C,ySize:P,levelMode:O[F&15],roundingMode:x[F>>4]}}function Ce(v,w){const O=ke(v,w),x=ke(v,w);return[O,x]}function Fe(v,w){const O=ke(v,w),x=ke(v,w),C=ke(v,w);return[O,x,C]}function rt(v,w,O,x,C){if(x==="string"||x==="stringvector"||x==="iccProfile")return Ue(w,O,C);if(x==="chlist")return be(v,w,O,C);if(x==="chromaticities")return ue(v,O);if(x==="compression")return ae(v,O);if(x==="box2i")return B(v,O);if(x==="envmap")return X(v,O);if(x==="tiledesc")return _e(v,O);if(x==="lineOrder")return se(v,O);if(x==="float")return ke(v,O);if(x==="v2f")return Ce(v,O);if(x==="v3f")return Fe(v,O);if(x==="int")return le(v,O);if(x==="rational")return Ye(v,O);if(x==="timecode")return Ke(v,O);if(x==="preview")return O.value+=C,"skipped";O.value+=C}function Ge(v,w){const O=Math.log2(v);return w=="ROUND_DOWN"?Math.floor(O):Math.ceil(O)}function Tt(v,w,O){let x=0;switch(v.levelMode){case"ONE_LEVEL":x=1;break;case"MIPMAP_LEVELS":x=Ge(Math.max(w,O),v.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return x}function dt(v,w,O,x){const C=new Array(v);for(let P=0;P<v;P++){const F=1<<P;let N=w/F|0;x=="ROUND_UP"&&N*F<w&&(N+=1);const V=Math.max(N,1);C[P]=(V+O-1)/O|0}return C}function At(){const v=this,w=v.offset,O={value:0};for(let x=0;x<v.tileCount;x++){const C=le(v.viewer,w),P=le(v.viewer,w);w.value+=8,v.size=De(v.viewer,w);const F=C*v.blockWidth,N=P*v.blockHeight;v.columns=F+v.blockWidth>v.width?v.width-F:v.blockWidth,v.lines=N+v.blockHeight>v.height?v.height-N:v.blockHeight;const V=v.columns*v.totalBytes,Y=v.size<v.lines*V?v.uncompress(v):U(v);w.value+=v.size;for(let te=0;te<v.lines;te++){const he=te*v.columns*v.totalBytes;for(let de=0;de<v.inputChannels.length;de++){const me=It.channels[de].name,ve=v.channelByteOffsets[me]*v.columns,we=v.decodeChannels[me];if(we===void 0)continue;O.value=he+ve;const ze=(v.height-(1+N+te))*v.outLineWidth;for(let Je=0;Je<v.columns;Je++){const Qe=ze+(Je+F)*v.outputChannels+we;v.byteArray[Qe]=v.getter(Y,O)}}}}}function Ut(){const v=this,w=v.offset,O={value:0};for(let x=0;x<v.height/v.blockHeight;x++){const C=le(v.viewer,w)-It.dataWindow.yMin;v.size=De(v.viewer,w),v.lines=C+v.blockHeight>v.height?v.height-C:v.blockHeight;const P=v.columns*v.totalBytes,N=v.size<v.lines*P?v.uncompress(v):U(v);w.value+=v.size;for(let V=0;V<v.blockHeight;V++){const G=x*v.blockHeight,Y=V+v.scanOrder(G);if(Y>=v.height)continue;const te=V*P,he=(v.height-1-Y)*v.outLineWidth;for(let de=0;de<v.inputChannels.length;de++){const me=It.channels[de].name,ve=v.channelByteOffsets[me]*v.columns,we=v.decodeChannels[me];if(we!==void 0){O.value=te+ve;for(let ze=0;ze<v.columns;ze++){const Je=he+ze*v.outputChannels+we;v.byteArray[Je]=v.getter(N,O)}}}}}}function $t(v,w,O){const x={};if(v.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");x.version=v.getUint8(4);const C=v.getUint8(5);x.spec={singleTile:!!(C&2),longName:!!(C&4),deepFormat:!!(C&8),multiPart:!!(C&16)},O.value=8;let P=!0;for(;P;){const F=Xe(w,O);if(F==="")P=!1;else{const N=Xe(w,O),V=De(v,O),G=rt(v,w,O,N,V);G===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${N}'.`):x[F]=G}}if((C&-7)!=0)throw console.error("THREE.EXRHeader:",x),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return x}function vn(v,w,O,x,C){const P={size:0,viewer:w,array:O,offset:x,width:v.dataWindow.xMax-v.dataWindow.xMin+1,height:v.dataWindow.yMax-v.dataWindow.yMin+1,inputChannels:v.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:mn};switch(v.compression){case"NO_COMPRESSION":P.blockHeight=1,P.uncompress=U;break;case"RLE_COMPRESSION":P.blockHeight=1,P.uncompress=E;break;case"ZIPS_COMPRESSION":P.blockHeight=1,P.uncompress=$;break;case"ZIP_COMPRESSION":P.blockHeight=16,P.uncompress=$;break;case"PIZ_COMPRESSION":P.blockHeight=32,P.uncompress=re;break;case"PXR24_COMPRESSION":P.blockHeight=16,P.uncompress=fe;break;case"DWAA_COMPRESSION":P.blockHeight=32,P.uncompress=ie;break;case"DWAB_COMPRESSION":P.blockHeight=256,P.uncompress=ie;break;default:throw new Error("EXRLoader.parse: "+v.compression+" is unsupported")}const F={};for(const Y of v.channels)switch(Y.name){case"Y":case"R":case"G":case"B":case"A":F[Y.name]=!0,P.type=Y.pixelType}let N=!1;if(F.R&&F.G&&F.B)N=!F.A,P.outputChannels=4,P.decodeChannels={R:0,G:1,B:2,A:3};else if(F.Y)P.outputChannels=1,P.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(P.type==1)switch(C){case Dn:P.getter=Be;break;case nr:P.getter=ce;break}else if(P.type==2)switch(C){case Dn:P.getter=ke;break;case nr:P.getter=z}else throw new Error("EXRLoader.parse: unsupported pixelType "+P.type+" for "+v.compression+".");P.columns=P.width;const V=P.width*P.height*P.outputChannels;switch(C){case Dn:P.byteArray=new Float32Array(V),N&&P.byteArray.fill(1,0,V);break;case nr:P.byteArray=new Uint16Array(V),N&&P.byteArray.fill(15360,0,V);break;default:console.error("THREE.EXRLoader: unsupported type: ",C);break}let G=0;for(const Y of v.channels)P.decodeChannels[Y.name]!==void 0&&(P.channelByteOffsets[Y.name]=G),G+=Y.pixelType*2;if(P.totalBytes=G,P.outLineWidth=P.width*P.outputChannels,v.lineOrder==="INCREASING_Y"?P.scanOrder=Y=>Y:P.scanOrder=Y=>P.height-1-Y,P.outputChannels==4?(P.format=Xn,P.colorSpace=mn):(P.format=ic,P.colorSpace=gi),v.spec.singleTile){P.blockHeight=v.tiles.ySize,P.blockWidth=v.tiles.xSize;const Y=Tt(v.tiles,P.width,P.height),te=dt(Y,P.width,v.tiles.xSize,v.tiles.roundingMode),he=dt(Y,P.height,v.tiles.ySize,v.tiles.roundingMode);P.tileCount=te[0]*he[0];for(let de=0;de<Y;de++)for(let me=0;me<he[de];me++)for(let ve=0;ve<te[de];ve++)Ee(w,x);P.decode=At.bind(P)}else{P.blockWidth=P.width;const Y=Math.ceil(P.height/P.blockHeight);for(let te=0;te<Y;te++)Ee(w,x);P.decode=Ut.bind(P)}return P}const un={value:0},Cn=new DataView(e),Kt=new Uint8Array(e),It=$t(Cn,e,un),Zn=vn(It,Cn,Kt,un,this.type);return Zn.decode(),{header:It,width:Zn.width,height:Zn.height,data:Zn.byteArray,format:Zn.format,colorSpace:Zn.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){o.colorSpace=a.colorSpace,o.minFilter=fn,o.magFilter=fn,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,r,n,i)}}function np(s,e){if(e===B_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===uh||e===hm){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===uh)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Yb extends Es{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Zb(t)}),this.register(function(t){return new Jb(t)}),this.register(function(t){return new aE(t)}),this.register(function(t){return new lE(t)}),this.register(function(t){return new cE(t)}),this.register(function(t){return new eE(t)}),this.register(function(t){return new tE(t)}),this.register(function(t){return new nE(t)}),this.register(function(t){return new iE(t)}),this.register(function(t){return new jb(t)}),this.register(function(t){return new rE(t)}),this.register(function(t){return new Qb(t)}),this.register(function(t){return new oE(t)}),this.register(function(t){return new sE(t)}),this.register(function(t){return new $b(t)}),this.register(function(t){return new uE(t)}),this.register(function(t){return new hE(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ua.extractUrlBase(e);o=ua.resolveURL(c,this.path)}else o=ua.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ad(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Xm){try{o[_t.KHR_BINARY_GLTF]=new dE(e)}catch(d){i&&i(d);return}r=JSON.parse(o[_t.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new TE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const d=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(d){case _t.KHR_MATERIALS_UNLIT:o[d]=new Kb;break;case _t.KHR_DRACO_MESH_COMPRESSION:o[d]=new fE(r,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:o[d]=new pE;break;case _t.KHR_MESH_QUANTIZATION:o[d]=new mE;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function qb(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const _t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class $b{constructor(e){this.parser=e,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new at(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],mn);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Dm(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Lm(u),c.distance=d;break;case"spot":c=new gv(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ji(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Kb{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return hs}extendParams(e,t,n){const i=[];e.color=new at(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],mn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,nn))}return Promise.all(i)}}class jb{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Zb{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Et(a,a)}return Promise.all(r)}}class Jb{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Qb{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class eE{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new at(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],mn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,nn)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class tE{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class nE{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new at().setRGB(a[0],a[1],a[2],mn),Promise.all(r)}}class iE{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class rE{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new at().setRGB(a[0],a[1],a[2],mn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,nn)),Promise.all(r)}}class sE{constructor(e){this.parser=e,this.name=_t.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class oE{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class aE{constructor(e){this.parser=e,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class lE{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class cE{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class uE{constructor(e){this.name=_t.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,d=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,f,i.mode,i.filter).then(function(h){return h.buffer}):o.ready.then(function(){const h=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(h),u,d,f,i.mode,i.filter),h})})}else return null}}class hE{constructor(e){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==ni.TRIANGLES&&c.mode!==ni.TRIANGLE_STRIP&&c.mode!==ni.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],f=c[0].count,h=[];for(const g of d){const _=new ut,m=new W,p=new Si,S=new W(1,1,1),b=new K0(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&S.fromBufferAttribute(l.SCALE,y),b.setMatrixAt(y,_.compose(m,p,S));for(const y in l)if(y==="_COLOR_0"){const A=l[y];b.instanceColor=new dh(A.array,A.itemSize,A.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);Xt.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),h.push(b)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}}const Xm="glTF",Vo=12,ip={JSON:1313821514,BIN:5130562};class dE{constructor(e){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Vo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Xm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Vo,r=new DataView(e,Vo);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===ip.JSON){const c=new Uint8Array(e,Vo+o,a);this.content=n.decode(c)}else if(l===ip.BIN){const c=Vo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class fE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=vh[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=vh[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],h=no[f.componentType];c[d]=h.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,f){i.decodeDracoFile(u,function(h){for(const g in h.attributes){const _=h.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}d(h)},a,c,mn,f)})})}}class pE{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class mE{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}}class Ym extends Ba{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,d=(n-t)/u,f=d*d,h=f*d,g=e*c,_=g-c,m=-2*h+3*f,p=h-f,S=1-m,b=p-f+d;for(let y=0;y!==a;y++){const A=o[_+y+a],I=o[_+y+l]*u,R=o[g+y+a],L=o[g+y]*u;r[y]=S*A+b*I+m*R+p*L}return r}}const gE=new Si;class _E extends Ym{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return gE.fromArray(r).normalize().toArray(r),r}}const ni={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},no={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},rp={9728:An,9729:fn,9984:im,9985:bl,9986:Jo,9987:Li},sp={33071:Ii,33648:Bl,10497:kr},Jc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},br={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},vE={CUBICSPLINE:void 0,LINEAR:ba,STEP:Ma},Qc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xE(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new od({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hr})),s.DefaultMaterial}function Jr(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ji(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function yE(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(f)}if(i){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function SE(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ME(s){let e;const t=s.extensions&&s.extensions[_t.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+eu(t.attributes):e=s.indices+":"+eu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+eu(s.targets[n]);return e}function eu(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function xh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bE(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const EE=new ut;class TE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new qb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Im(this.options.manager):this.textureLoader=new xv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ad(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Jr(r,a,i),ji(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(ua.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Jc[i.type],a=no[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Rn(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Jc[i.type],c=no[i.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,f=i.byteOffset||0,h=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(h&&h!==d){const p=Math.floor(f/h),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let b=t.cache.get(S);b||(_=new c(a,p*h,i.count*h/u),b=new W0(_,h/u),t.cache.add(S,b)),m=new td(b,l,f%h/u,g)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),m=new Rn(_,l,g);if(i.sparse!==void 0){const p=Jc.SCALAR,S=no[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,A=new S(o[1],b,i.sparse.count*p),I=new c(o[2],y,i.sparse.count*l);a!==null&&(m=new Rn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,L=A.length;R<L;R++){const M=A[R];if(m.setX(M,I[R*l]),l>=2&&m.setY(M,I[R*l+1]),l>=3&&m.setZ(M,I[R*l+2]),l>=4&&m.setW(M,I[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=rp[f.magFilter]||fn,u.minFilter=rp[f.minFilter]||Li,u.wrapS=sp[f.wrapS]||kr,u.wrapT=sp[f.wrapT]||kr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==An&&u.minFilter!==fn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(f,h){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new pn(_);m.needsUpdate=!0,f(m)}),t.load(ua.resolveURL(d,r.path),g,void 0,h)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),ji(d,o),d.userData.mimeType=o.mimeType||bE(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[_t.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Tm,Ui.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Em,Ui.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return od}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[_t.KHR_MATERIALS_UNLIT]){const d=i[_t.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new at(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],mn),a.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,nn)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ci);const u=r.alphaMode||Qc.OPAQUE;if(u===Qc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Qc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==hs&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Et(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==hs&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==hs){const d=r.emissiveFactor;a.emissive=new at().setRGB(d[0],d[1],d[2],mn)}return r.emissiveTexture!==void 0&&o!==hs&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,nn)),Promise.all(c).then(function(){const d=new o(a);return r.name&&(d.name=r.name),ji(d,r),t.associations.set(d,{materials:e}),r.extensions&&Jr(i,d,r),d})}createUniqueName(e){const t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return op(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=ME(c),d=i[u];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=op(new zi,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?xE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let h=0,g=u.length;h<g;h++){const _=u[h],m=o[h];let p;const S=c[h];if(m.mode===ni.TRIANGLES||m.mode===ni.TRIANGLE_STRIP||m.mode===ni.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Y0(_,S):new Yn(_,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ni.TRIANGLE_STRIP?p.geometry=np(p.geometry,hm):m.mode===ni.TRIANGLE_FAN&&(p.geometry=np(p.geometry,uh));else if(m.mode===ni.LINES)p=new Q0(_,S);else if(m.mode===ni.LINE_STRIP)p=new sd(_,S);else if(m.mode===ni.LINE_LOOP)p=new ev(_,S);else if(m.mode===ni.POINTS)p=new tv(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&SE(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ji(p,r),m.extensions&&Jr(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let h=0,g=d.length;h<g;h++)t.associations.set(d[h],{meshes:e,primitives:h});if(d.length===1)return r.extensions&&Jr(i,d[0],r),d[0];const f=new Cr;r.extensions&&Jr(i,f,r),t.associations.set(f,{meshes:e});for(let h=0,g=d.length;h<g;h++)f.add(d[h]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Tn(h0.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ud(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ji(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const f=new ut;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new id(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,f=i.channels.length;d<f;d++){const h=i.channels[d],g=i.samplers[h.sampler],_=h.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,S=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const f=d[0],h=d[1],g=d[2],_=d[3],m=d[4],p=[];for(let S=0,b=f.length;S<b;S++){const y=f[S],A=h[S],I=g[S],R=_[S],L=m[S];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const M=n._createAnimationTracks(y,A,I,R,L);if(M)for(let T=0;T<M.length;T++)p.push(M[T])}return new ph(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],f=c[2];f!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(f,EE)});for(let h=0,g=d.length;h<g;h++)u.add(d[h]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new bm:c.length>1?u=new Cr:c.length===1?u=c[0]:u=new Xt,u!==c[0])for(let d=0,f=c.length;d<f;d++)u.add(c[d]);if(r.name&&(u.userData.name=r.name,u.name=o),ji(u,r),r.extensions&&Jr(n,u,r),r.matrix!==void 0){const d=new ut;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(u);i.associations.set(u,{...d})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Cr;n.name&&(r.name=i.createUniqueName(n.name)),ji(r,n),n.extensions&&Jr(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)r.add(l[u]);const c=u=>{const d=new Map;for(const[f,h]of i.associations)(f instanceof Ui||f instanceof pn)&&d.set(f,h);return u.traverse(f=>{const h=i.associations.get(f);h!=null&&d.set(f,h)}),d};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];br[r.path]===br.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(br[r.path]){case br.weights:c=_o;break;case br.rotation:c=vo;break;case br.translation:case br.scale:c=xo;break;default:switch(n.itemSize){case 1:c=_o;break;case 2:case 3:default:c=xo;break}break}const u=i.interpolation!==void 0?vE[i.interpolation]:ba,d=this._getArrayFromAccessor(n);for(let f=0,h=l.length;f<h;f++){const g=new c(l[f]+"."+br[r.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=xh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof vo?_E:Ym;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function wE(s,e,t){const n=e.attributes,i=new mr;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new W(l[0],l[1],l[2]),new W(c[0],c[1],c[2])),a.normalized){const u=xh(no[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new W,l=new W;for(let c=0,u=r.length;c<u;c++){const d=r[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],h=f.min,g=f.max;if(h!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),f.normalized){const _=xh(no[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new ki;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function op(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=vh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return wt.workingColorSpace!==mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${wt.workingColorSpace}" not supported.`),ji(s,e),wE(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?yE(s,e.targets,t):s})}function Zi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function qm(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var $n={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},yo={duration:.5,overwrite:!1,delay:0},md,_n,Vt,si=1e8,kt=1/si,yh=Math.PI*2,AE=yh/4,RE=0,$m=Math.sqrt,CE=Math.cos,PE=Math.sin,gn=function(e){return typeof e=="string"},qt=function(e){return typeof e=="function"},dr=function(e){return typeof e=="number"},gd=function(e){return typeof e>"u"},Bi=function(e){return typeof e=="object"},Nn=function(e){return e!==!1},_d=function(){return typeof window<"u"},gl=function(e){return qt(e)||gn(e)},Km=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Mn=Array.isArray,Sh=/(?:-?\.?\d|\.)+/gi,jm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Zs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,tu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zm=/[+-]=-?[.\d]+/,Jm=/[^,'"\[\]\s]+/gi,IE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Gt,Ti,Mh,vd,Kn={},Wl={},Qm,eg=function(e){return(Wl=So(e,Kn))&&kn},xd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},wa=function(e,t){return!t&&console.warn(e)},tg=function(e,t){return e&&(Kn[e]=t)&&Wl&&(Wl[e]=t)||Kn},Aa=function(){return 0},LE={suppressEvents:!0,isStart:!0,kill:!1},Pl={suppressEvents:!0,kill:!1},DE={suppressEvents:!0},yd={},Fr=[],bh={},ng,Vn={},nu={},ap=30,Il=[],Sd="",Md=function(e){var t=e[0],n,i;if(Bi(t)||qt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Il.length;i--&&!Il[i].targetTest(t););n=Il[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new wg(e[i],n)))||e.splice(i,1);return e},fs=function(e){return e._gsap||Md(oi(e))[0]._gsap},ig=function(e,t,n){return(n=e[t])&&qt(n)?e[t]():gd(n)&&e.getAttribute&&e.getAttribute(t)||n},On=function(e,t){return(e=e.split(",")).forEach(t)||e},Zt=function(e){return Math.round(e*1e5)/1e5||0},rn=function(e){return Math.round(e*1e7)/1e7||0},io=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},UE=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Xl=function(){var e=Fr.length,t=Fr.slice(0),n,i;for(bh={},Fr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},bd=function(e){return!!(e._initted||e._startAt||e.add)},rg=function(e,t,n,i){Fr.length&&!_n&&Xl(),e.render(t,n,!!(_n&&t<0&&bd(e))),Fr.length&&!_n&&Xl()},sg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Jm).length<2?t:gn(e)?e.trim():e},og=function(e){return e},jn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},NE=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},So=function(e,t){for(var n in t)e[n]=t[n];return e},lp=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Bi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Yl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},da=function(e){var t=e.parent||Gt,n=e.keyframes?NE(Mn(e.keyframes)):jn;if(Nn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},OE=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ag=function(e,t,n,i,r){var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ac=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Hr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ps=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},FE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Eh=function(e,t,n,i){return e._startAt&&(_n?e._startAt.revert(Pl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},BE=function s(e){return!e||e._ts&&s(e.parent)},cp=function(e){return e._repeat?Mo(e._tTime,e=e.duration()+e._rDelay)*e:0},Mo=function(e,t){var n=Math.floor(e=rn(e/t));return e&&n===e?n-1:n},ql=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},lc=function(e){return e._end=rn(e._start+(e._tDur/Math.abs(e._ts||e._rts||kt)||0))},cc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=rn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),lc(e),n._dirty||ps(n,e)),e},lg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ql(e.rawTime(),t),(!t._dur||za(0,t.totalDuration(),n)-t._tTime>kt)&&t.render(n,!0)),ps(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-kt}},Pi=function(e,t,n,i){return t.parent&&Hr(t),t._start=rn((dr(n)?n:n||e!==Gt?ti(e,n,t):e._time)+t._delay),t._end=rn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ag(e,t,"_first","_last",e._sort?"_start":0),Th(t)||(e._recent=t),i||lg(e,t),e._ts<0&&cc(e,e._tTime),e},cg=function(e,t){return(Kn.ScrollTrigger||xd("scrollTrigger",t))&&Kn.ScrollTrigger.create(t,e)},ug=function(e,t,n,i,r){if(Td(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!_n&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ng!==Gn.frame)return Fr.push(e),e._lazy=[r,i],1},kE=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Th=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},zE=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&kE(e)&&!(!e._initted&&Th(e))||(e._ts<0||e._dp._ts<0)&&!Th(e))?0:1,a=e._rDelay,l=0,c,u,d;if(a&&e._repeat&&(l=za(0,e._tDur,t),u=Mo(l,a),e._yoyo&&u&1&&(o=1-o),u!==Mo(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||_n||i||e._zTime===kt||!t&&e._zTime){if(!e._initted&&ug(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?kt:0),n||(n=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Eh(e,t,n,!0),e._onUpdate&&!n&&qn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&qn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Hr(e,1),!n&&!_n&&(qn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},HE=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},bo=function(e,t,n,i){var r=e._repeat,o=rn(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:rn(o*(r+1)+e._rDelay*r):o,a>0&&!i&&cc(e,e._tTime=e._tDur*a),e.parent&&lc(e),n||ps(e.parent,e),e},up=function(e){return e instanceof wn?ps(e):bo(e,e._dur)},VE={_start:0,endTime:Aa,totalDuration:Aa},ti=function s(e,t,n){var i=e.labels,r=e._recent||VE,o=e.duration()>=si?r.endTime(!1):e._dur,a,l,c;return gn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Mn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},fa=function(e,t,n){var i=dr(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Nn(l.vars.inherit)&&l.parent;o.immediateRender=Nn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new tn(t[0],o,t[r+1])},Gr=function(e,t){return e||e===0?t(e):t},za=function(e,t,n){return n<e?e:n>t?t:n},Sn=function(e,t){return!gn(e)||!(t=IE.exec(e))?"":t[1]},GE=function(e,t,n){return Gr(n,function(i){return za(e,t,i)})},wh=[].slice,hg=function(e,t){return e&&Bi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Bi(e[0]))&&!e.nodeType&&e!==Ti},WE=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return gn(i)&&!t||hg(i,1)?(r=n).push.apply(r,oi(i)):n.push(i)})||n},oi=function(e,t,n){return Vt&&!t&&Vt.selector?Vt.selector(e):gn(e)&&!n&&(Mh||!Eo())?wh.call((t||vd).querySelectorAll(e),0):Mn(e)?WE(e,n):hg(e)?wh.call(e,0):e?[e]:[]},Ah=function(e){return e=oi(e)[0]||wa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return oi(t,n.querySelectorAll?n:n===e?wa("Invalid scope")||vd.createElement("div"):e)}},dg=function(e){return e.sort(function(){return .5-Math.random()})},fg=function(e){if(qt(e))return e;var t=Bi(e)?e:{each:e},n=ms(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,d=i;return gn(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],d=i[1]),function(f,h,g){var _=(g||t).length,m=o[_],p,S,b,y,A,I,R,L,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,si])[1],!M){for(R=-si;R<(R=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=o[_]=[],p=l?Math.min(M,_)*u-.5:i%M,S=M===si?0:l?_*d/M-.5:i/M|0,R=0,L=si,I=0;I<_;I++)b=I%M-p,y=S-(I/M|0),m[I]=A=c?Math.abs(c==="y"?y:b):$m(b*b+y*y),A>R&&(R=A),A<L&&(L=A);i==="random"&&dg(m),m.max=R-L,m.min=L,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?r-_:r,m.u=Sn(t.amount||t.each)||0,n=n&&_<0?bg(n):n}return _=(m[f]-m.min)/m.max||0,rn(m.b+(n?n(_):_)*m.v)+m.u}},Rh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=rn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(dr(n)?0:Sn(n))}},pg=function(e,t){var n=Mn(e),i,r;return!n&&Bi(e)&&(i=n=e.radius||si,e.values?(e=oi(e.values),(r=!dr(e[0]))&&(i*=i)):e=Rh(e.increment)),Gr(t,n?qt(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=si,u=0,d=e.length,f,h;d--;)r?(f=e[d].x-a,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-a),f<c&&(c=f,u=d);return u=!i||c<=i?e[u]:o,r||u===o||dr(o)?u:u+Sn(o)}:Rh(e))},mg=function(e,t,n,i){return Gr(Mn(e)?!t:n===!0?!!(n=0):!i,function(){return Mn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},XE=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},YE=function(e,t){return function(n){return e(parseFloat(n))+(t||Sn(n))}},qE=function(e,t,n){return _g(e,t,0,1,n)},gg=function(e,t,n){return Gr(n,function(i){return e[~~t(i)]})},$E=function s(e,t,n){var i=t-e;return Mn(e)?gg(e,s(0,e.length),t):Gr(n,function(r){return(i+(r-e)%i)%i+e})},KE=function s(e,t,n){var i=t-e,r=i*2;return Mn(e)?gg(e,s(0,e.length-1),t):Gr(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},Ra=function(e){for(var t=0,n="",i,r,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",r=e.substr(i+7,o-i-7).match(a?Jm:Sh),n+=e.substr(t,i-t)+mg(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},_g=function(e,t,n,i,r){var o=t-e,a=i-n;return Gr(r,function(l){return n+((l-e)/o*a||0)})},jE=function s(e,t,n,i){var r=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!r){var o=gn(e),a={},l,c,u,d,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Mn(e)&&!Mn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(s(e[c-1],e[c]));d--,r=function(g){g*=d;var _=Math.min(f,~~g);return u[_](g-_)},n=t}else i||(e=So(Mn(e)?[]:{},e));if(!u){for(l in t)Ed.call(a,e,l,"get",t[l]);r=function(g){return Rd(g,a)||(o?e.p:e)}}}return Gr(n,r)},hp=function(e,t,n){var i=e.labels,r=si,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},qn=function(e,t,n){var i=e.vars,r=i[t],o=Vt,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&Fr.length&&Xl(),a&&(Vt=a),u=l?r.apply(c,l):r.call(c),Vt=o,u},ea=function(e){return Hr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!_n),e.progress()<1&&qn(e,"onInterrupt"),e},Js,vg=[],xg=function(e){if(e)if(e=!e.name&&e.default||e,_d()||e.headless){var t=e.name,n=qt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Aa,render:Rd,add:Ed,kill:dT,modifier:hT,rawVars:0},o={targetTest:0,get:0,getSetter:Ad,aliases:{},register:0};if(Eo(),e!==i){if(Vn[t])return;jn(i,jn(Yl(e,r),o)),So(i.prototype,So(r,Yl(e,o))),Vn[i.prop=t]=i,e.targetTest&&(Il.push(i),yd[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}tg(t,i),e.register&&e.register(kn,i,Fn)}else vg.push(e)},Ft=255,ta={aqua:[0,Ft,Ft],lime:[0,Ft,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ft],navy:[0,0,128],white:[Ft,Ft,Ft],olive:[128,128,0],yellow:[Ft,Ft,0],orange:[Ft,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ft,0,0],pink:[Ft,192,203],cyan:[0,Ft,Ft],transparent:[Ft,Ft,Ft,0]},iu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ft+.5|0},yg=function(e,t,n){var i=e?dr(e)?[e>>16,e>>8&Ft,e&Ft]:0:ta.black,r,o,a,l,c,u,d,f,h,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ta[e])i=ta[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ft,i&Ft,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ft,e&Ft]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Sh),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=iu(l+1/3,r,o),i[1]=iu(l,r,o),i[2]=iu(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(jm),n&&i.length<4&&(i[3]=1),i}else i=e.match(Sh)||ta.transparent;i=i.map(Number)}return t&&!g&&(r=i[0]/Ft,o=i[1]/Ft,a=i[2]/Ft,d=Math.max(r,o,a),f=Math.min(r,o,a),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===r?(o-a)/h+(o<a?6:0):d===o?(a-r)/h+2:(r-o)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Sg=function(e){var t=[],n=[],i=-1;return e.split(Br).forEach(function(r){var o=r.match(Zs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},dp=function(e,t,n){var i="",r=(e+i).match(Br),o=t?"hsla(":"rgba(",a=0,l,c,u,d;if(!r)return e;if(r=r.map(function(f){return(f=yg(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Sg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Br,"1").split(Zs),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Br),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},Br=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ta)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),ZE=/hsl[a]?\(/,Mg=function(e){var t=e.join(" "),n;if(Br.lastIndex=0,Br.test(t))return n=ZE.test(t),e[1]=dp(e[1],n),e[0]=dp(e[0],n,Sg(e[1])),!0},Ca,Gn=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,d,f,h,g=function _(m){var p=s()-i,S=m===!0,b,y,A,I;if((p>e||p<0)&&(n+=p-t),i+=p,A=i-n,b=A-o,(b>0||S)&&(I=++d.frame,f=A-d.time*1e3,d.time=A=A/1e3,o+=b+(b>=r?4:r-b),y=1),S||(l=c(_)),y)for(h=0;h<a.length;h++)a[h](A,f,I,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Qm&&(!Mh&&_d()&&(Ti=Mh=window,vd=Ti.document||{},Kn.gsap=kn,(Ti.gsapVersions||(Ti.gsapVersions=[])).push(kn.version),eg(Wl||Ti.GreenSockGlobals||!Ti.gsap&&Ti||{}),vg.forEach(xg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Ca=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ca=0,c=Aa},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),o=d.time*1e3+r},add:function(m,p,S){var b=p?function(y,A,I,R){m(y,A,I,R),d.remove(b)}:m;return d.remove(m),a[S?"unshift":"push"](b),Eo(),b},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&h>=p&&h--},_listeners:a},d}(),Eo=function(){return!Ca&&Gn.wake()},bt={},JE=/^[\d.\-M][\d.\-,\s]/,QE=/["']/g,eT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(QE,"").trim():+c,i=l.substr(a+1).trim();return t},tT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},nT=function(e){var t=(e+"").split("("),n=bt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[eT(t[1])]:tT(e).split(",").map(sg)):bt._CE&&JE.test(e)?bt._CE("",e):n},bg=function(e){return function(t){return 1-e(1-t)}},Eg=function s(e,t){for(var n=e._first,i;n;)n instanceof wn?s(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?s(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},ms=function(e,t){return e&&(qt(e)?e:bt[e]||nT(e))||t},Ts=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return On(e,function(a){bt[a]=Kn[a]=r,bt[o=a.toLowerCase()]=n;for(var l in r)bt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=bt[a+"."+l]=r[l]}),r},Tg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ru=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/yh*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*PE((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Tg(a);return r=yh/r,l.config=function(c,u){return s(e,c,u)},l},su=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:Tg(n);return i.config=function(r){return s(e,r)},i};On("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Ts(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});bt.Linear.easeNone=bt.none=bt.Linear.easeIn;Ts("Elastic",ru("in"),ru("out"),ru());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Ts("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Ts("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Ts("Circ",function(s){return-($m(1-s*s)-1)});Ts("Sine",function(s){return s===1?1:-CE(s*AE)+1});Ts("Back",su("in"),su("out"),su());bt.SteppedEase=bt.steps=Kn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-kt;return function(a){return((i*za(0,o,a)|0)+r)*n}}};yo.ease=bt["quad.out"];On("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Sd+=s+","+s+"Params,"});var wg=function(e,t){this.id=RE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ig,this.set=t?t.getSetter:Ad},Pa=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,bo(this,+t.duration,1,1),this.data=t.data,Vt&&(this._ctx=Vt,Vt.data.push(this)),Ca||Gn.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,bo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Eo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(cc(this,n),!r._dp||r.parent||lg(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Pi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===kt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),rg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+cp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+cp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Mo(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-kt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?ql(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-kt?0:this._rts,this.totalTime(za(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),lc(this),FE(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Eo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==kt&&(this._tTime-=kt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Pi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Nn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ql(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=DE);var i=_n;return _n=n,bd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),_n=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,up(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,up(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ti(this,n),Nn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Nn(i)),this._dur||(this._zTime=-kt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-kt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-kt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-kt)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(r){var o=qt(n)?n:og,a=function(){var c=i.then;i.then=null,qt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){ea(this)},s}();jn(Pa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-kt,_prom:0,_ps:!1,_rts:1});var wn=function(s){qm(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Nn(n.sortChildren),Gt&&Pi(n.parent||Gt,Zi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&cg(Zi(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return fa(0,arguments,this),this},t.from=function(i,r,o){return fa(1,arguments,this),this},t.fromTo=function(i,r,o,a){return fa(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,da(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new tn(i,r,ti(this,o),1),this},t.call=function(i,r,o){return Pi(this,tn.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new tn(i,o,ti(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,da(o).immediateRender=Nn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},t.staggerFromTo=function(i,r,o,a,l,c,u,d){return a.startAt=o,da(a).immediateRender=Nn(a.immediateRender),this.staggerTo(i,r,a,l,c,u,d)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:rn(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,h,g,_,m,p,S,b,y,A,I,R;if(this!==Gt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,y=this._start,b=this._ts,p=!b,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(I=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(f=rn(u%m),u===l?(_=this._repeat,f=c):(A=rn(u/m),_=~~A,_&&_===A&&(f=c,_--),f>c&&(f=c)),A=Mo(this._tTime,m),!a&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),I&&_&1&&(f=c-f,R=1),_!==A&&!this._lock){var L=I&&A&1,M=L===(I&&_&1);if(_<A&&(L=!L),a=L?0:u%c?c:u,this._lock=1,this.render(a||(R?0:rn(_*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&qn(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Eg(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=HE(this,rn(a),rn(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!r&&!A&&(qn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(h=this._first;h;){if(g=h._next,(h._act||f>=h._start)&&h._ts&&S!==h){if(h.parent!==this)return this.render(i,r,o);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,r,o),f!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=-kt);break}}h=g}else{h=this._last;for(var T=i<0?i:f;h;){if(g=h._prev,(h._act||T<=h._end)&&h._ts&&S!==h){if(h.parent!==this)return this.render(i,r,o);if(h.render(h._ts>0?(T-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(T-h._start)*h._ts,r,o||_n&&bd(h)),f!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=T?-kt:kt);break}}h=g}}if(S&&!r&&(this.pause(),S.render(f>=a?0:-kt)._zTime=f>=a?1:-1,this._ts))return this._start=y,lc(this),this.render(i,r,o);this._onUpdate&&!r&&qn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Hr(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(qn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(dr(r)||(r=ti(this,r,i)),!(i instanceof Pa)){if(Mn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(gn(i))return this.addLabel(i,r);if(qt(i))i=tn.delayedCall(0,i);else return this}return this!==i?Pi(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-si);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof tn?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return gn(i)?this.removeLabel(i):qt(i)?this.killTweensOf(i):(i.parent===this&&ac(this,i),i===this._recent&&(this._recent=this._last),ps(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=rn(Gn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=ti(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=tn.delayedCall(0,r||Aa,o);return a.data="isPause",this._hasPause=1,Pi(this,a,ti(this,i))},t.removePause=function(i){var r=this._first;for(i=ti(this,i);r;)r._start===i&&r.data==="isPause"&&Hr(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Pr!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=oi(i),l=this._first,c=dr(r),u;l;)l instanceof tn?UE(l._targets,a)&&(c?(!Pr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=ti(o,i),l=r,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,g=tn.to(o,jn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||kt,onStart:function(){if(o.pause(),!h){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&bo(g,m,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,d||[])}},r));return f?g.render(0):g},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,jn({startAt:{time:ti(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),hp(this,ti(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),hp(this,ti(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+kt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return ps(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ps(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=si,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Pi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;bo(o,o===Gt&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Gt._ts&&(rg(Gt,ql(i,Gt)),ng=Gn.frame),Gn.frame>=ap){ap+=$n.autoSleep||120;var r=Gt._first;if((!r||!r._ts)&&$n.autoSleep&&Gn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Gn.sleep()}}},e}(Pa);jn(wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var iT=function(e,t,n,i,r,o,a){var l=new Fn(this._pt,e,t,0,1,Lg,null,r),c=0,u=0,d,f,h,g,_,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ra(i)),o&&(S=[n,i],o(S,e,t),n=S[0],i=S[1]),f=n.match(tu)||[];d=tu.exec(i);)g=d[0],_=i.substring(c,d.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?io(m,g)-m:parseFloat(g)-m,m:h&&h<4?Math.round:0},c=tu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Zm.test(i)||p)&&(l.e=0),this._pt=l,l},Ed=function(e,t,n,i,r,o,a,l,c,u){qt(i)&&(i=i(r||0,e,o));var d=e[t],f=n!=="get"?n:qt(d)?c?e[t.indexOf("set")||!qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=qt(d)?c?lT:Pg:wd,g;if(gn(i)&&(~i.indexOf("random(")&&(i=Ra(i)),i.charAt(1)==="="&&(g=io(f,i)+(Sn(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Ch)return!isNaN(f*i)&&i!==""?(g=new Fn(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?uT:Ig,0,h),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!d&&!(t in e)&&xd(t,i),iT.call(this,e,t,f,i,h,l||$n.stringFilter,c))},rT=function(e,t,n,i,r){if(qt(e)&&(e=pa(e,r,t,n,i)),!Bi(e)||e.style&&e.nodeType||Mn(e)||Km(e))return gn(e)?pa(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=pa(e[a],r,t,n,i);return o},Ag=function(e,t,n,i,r,o){var a,l,c,u;if(Vn[e]&&(a=new Vn[e]).init(r,a.rawVars?t[e]:rT(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Fn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Js))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Pr,Ch,Td=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,h=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,b=e._overwrite==="auto"&&!md,y=e.timeline,A,I,R,L,M,T,D,q,H,ee,ne,K,Q;if(y&&(!f||!r)&&(r="none"),e._ease=ms(r,yo.ease),e._yEase=d?bg(ms(d===!0?r:d,yo.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(q=m[0]?fs(m[0]).harness:0,K=q&&i[q.prop],A=Yl(i,yd),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!h?_.render(-1,!0):_.revert(u&&g?Pl:LE),_._lazy=0),o){if(Hr(e._startAt=tn.set(m,jn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Nn(l),startAt:null,delay:0,onUpdate:c&&function(){return qn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_n||!a&&!h)&&e._startAt.revert(Pl),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),R=jn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Nn(l),immediateRender:a,stagger:0,parent:p},A),K&&(R[q.prop]=K),Hr(e._startAt=tn.set(m,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_n?e._startAt.revert(Pl):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,kt,kt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Nn(l)||l&&!g,I=0;I<m.length;I++){if(M=m[I],D=M._gsap||Md(m)[I]._gsap,e._ptLookup[I]=ee={},bh[D.id]&&Fr.length&&Xl(),ne=S===m?I:S.indexOf(M),q&&(H=new q).init(M,K||A,e,ne,S)!==!1&&(e._pt=L=new Fn(e._pt,M,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(j){ee[j]=L}),H.priority&&(T=1)),!q||K)for(R in A)Vn[R]&&(H=Ag(R,A,e,ne,M,S))?H.priority&&(T=1):ee[R]=L=Ed.call(e,M,R,"get",A[R],ne,S,0,i.stringFilter);e._op&&e._op[I]&&e.kill(M,e._op[I]),b&&e._pt&&(Pr=e,Gt.killTweensOf(M,ee,e.globalTime(t)),Q=!e.parent,Pr=0),e._pt&&l&&(bh[D.id]=1)}T&&Dg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Q,f&&t<=0&&y.render(si,!0,!0)},sT=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Ch=1,e.vars[t]="+=0",Td(e,a),Ch=0,l?wa(t+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,d.e&&(d.e=Zt(n)+Sn(d.e)),d.b&&(d.b=u.s+Sn(d.b))},oT=function(e,t){var n=e[0]?fs(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=So({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},aT=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(Mn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},pa=function(e,t,n,i,r){return qt(e)?e.call(t,n,i,r):gn(e)&&~e.indexOf("random(")?Ra(e):e},Rg=Sd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Cg={};On(Rg+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Cg[s]=1});var tn=function(s){qm(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:da(i))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,S=i.parent||Gt,b=(Mn(n)||Km(n)?dr(n[0]):"length"in i)?[n]:oi(n),y,A,I,R,L,M,T,D;if(a._targets=b.length?Md(b):wa("GSAP target "+n+" not found. https://gsap.com",!$n.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,g||f||gl(c)||gl(u)){if(i=a.vars,y=a.timeline=new wn({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:b}),y.kill(),y.parent=y._dp=Zi(a),y._start=0,f||gl(c)||gl(u)){if(R=b.length,T=f&&fg(f),Bi(f))for(L in f)~Rg.indexOf(L)&&(D||(D={}),D[L]=f[L]);for(A=0;A<R;A++)I=Yl(i,Cg),I.stagger=0,p&&(I.yoyoEase=p),D&&So(I,D),M=b[A],I.duration=+pa(c,Zi(a),A,M,b),I.delay=(+pa(u,Zi(a),A,M,b)||0)-a._delay,!f&&R===1&&I.delay&&(a._delay=u=I.delay,a._start+=u,I.delay=0),y.to(M,I,T?T(A,M,b):0),y._ease=bt.none;y.duration()?c=u=0:a.timeline=0}else if(g){da(jn(y.vars.defaults,{ease:"none"})),y._ease=ms(g.ease||i.ease||"none");var q=0,H,ee,ne;if(Mn(g))g.forEach(function(K){return y.to(b,K,">")}),y.duration();else{I={};for(L in g)L==="ease"||L==="easeEach"||aT(L,g[L],I,g.easeEach);for(L in I)for(H=I[L].sort(function(K,Q){return K.t-Q.t}),q=0,A=0;A<H.length;A++)ee=H[A],ne={ease:ee.e,duration:(ee.t-(A?H[A-1].t:0))/100*c},ne[L]=ee.v,y.to(b,ne,q),q+=ne.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return h===!0&&!md&&(Pr=Zi(a),Gt.killTweensOf(b),Pr=0),Pi(S,Zi(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!g&&a._start===rn(S._time)&&Nn(d)&&BE(Zi(a))&&S.data!=="nested")&&(a._tTime=-kt,a.render(Math.max(0,-u)||0)),m&&cg(Zi(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-kt&&!u?l:i<kt?0:i,f,h,g,_,m,p,S,b,y;if(!c)zE(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,r,o);if(f=rn(d%_),d===l?(g=this._repeat,f=c):(m=rn(d/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(y=this._yEase,f=c-f),m=Mo(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=d,this;g!==m&&(b&&this._yEase&&Eg(b,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(rn(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(ug(this,u?i:f,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(y||this._ease)(f/c),this._from&&(this.ratio=S=1-S),!a&&d&&!r&&!m&&(qn(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(S,h.d),h=h._next;b&&b.render(i<0?i:b._dur*b._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Eh(this,i,r,o),qn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!r&&this.parent&&qn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Eh(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Hr(this,1),!r&&!(u&&!a)&&(d||a||p)&&(qn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){Ca||Gn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Td(this,c),u=this._ease(c/this._dur),sT(this,i,r,o,a,u,c,l)?this.resetTo(i,r,o,a,1):(cc(this,0),this.parent||ag(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ea(this):this.scrollTrigger&&this.scrollTrigger.kill(!!_n),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Pr&&Pr.vars.overwrite!==!0)._first||ea(this),this.parent&&o!==this.timeline.totalDuration()&&bo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?oi(i):a,c=this._ptLookup,u=this._pt,d,f,h,g,_,m,p;if((!r||r==="all")&&OE(a,l))return r==="all"&&(this._pt=0),ea(this);for(d=this._op=this._op||[],r!=="all"&&(gn(r)&&(_={},On(r,function(S){return _[S]=1}),r=_),r=oT(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],r==="all"?(d[p]=r,g=f,h={}):(h=d[p]=d[p]||{},g=r);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&ac(this,m,"_pt"),delete f[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&u&&ea(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return fa(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return fa(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Gt.killTweensOf(i,r,o)},e}(Pa);jn(tn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});On("staggerTo,staggerFrom,staggerFromTo",function(s){tn[s]=function(){var e=new wn,t=wh.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var wd=function(e,t,n){return e[t]=n},Pg=function(e,t,n){return e[t](n)},lT=function(e,t,n,i){return e[t](i.fp,n)},cT=function(e,t,n){return e.setAttribute(t,n)},Ad=function(e,t){return qt(e[t])?Pg:gd(e[t])&&e.setAttribute?cT:wd},Ig=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},uT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Lg=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Rd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},hT=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},dT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ac(this,t,"_pt"):t.dep||(n=1),t=i;return!n},fT=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Dg=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},Fn=function(){function s(t,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Ig,this.d=l||this,this.set=c||wd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=fT,this.m=n,this.mt=r,this.tween=i},s}();On(Sd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return yd[s]=1});Kn.TweenMax=Kn.TweenLite=tn;Kn.TimelineLite=Kn.TimelineMax=wn;Gt=new wn({sortChildren:!1,defaults:yo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});$n.stringFilter=Mg;var gs=[],Ll={},pT=[],fp=0,mT=0,ou=function(e){return(Ll[e]||pT).map(function(t){return t()})},Ph=function(){var e=Date.now(),t=[];e-fp>2&&(ou("matchMediaInit"),gs.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Ti.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),ou("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),fp=e,ou("matchMedia"))},Ug=function(){function s(t,n){this.selector=n&&Ah(n),this.data=[],this._r=[],this.isReverted=!1,this.id=mT++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){qt(n)&&(r=i,i=n,n=qt);var o=this,a=function(){var c=Vt,u=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=Ah(r)),Vt=o,d=i.apply(o,arguments),qt(d)&&o._r.push(d),Vt=c,o.selector=u,o.isReverted=!1,d};return o.last=a,n===qt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Vt;Vt=null,n(this),Vt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof tn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof wn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof tn)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=gs.length;o--;)gs[o].id===this.id&&gs.splice(o,1)},e.revert=function(n){this.kill(n||{})},s}(),gT=function(){function s(t){this.contexts=[],this.scope=t,Vt&&Vt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Bi(n)||(n={matches:n});var o=new Ug(0,r||this.scope),a=o.conditions={},l,c,u;Vt&&!o.selector&&(o.selector=Vt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Ti.matchMedia(n[c]),l&&(gs.indexOf(o)<0&&gs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ph):l.addEventListener("change",Ph)));return u&&i(o,function(d){return o.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),$l={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return xg(i)})},timeline:function(e){return new wn(e)},getTweensOf:function(e,t){return Gt.getTweensOf(e,t)},getProperty:function(e,t,n,i){gn(e)&&(e=oi(e)[0]);var r=fs(e||{}).get,o=n?og:sg;return n==="native"&&(n=""),e&&(t?o((Vn[t]&&Vn[t].get||r)(e,t,n,i)):function(a,l,c){return o((Vn[a]&&Vn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=oi(e),e.length>1){var i=e.map(function(u){return kn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var d=r;d--;)i[d](u)}}e=e[0]||{};var o=Vn[t],a=fs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var d=new o;Js._pt=0,d.init(e,n?u+n:u,Js,0,[e]),d.render(1,d),Js._pt&&Rd(1,Js)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=kn.to(e,jn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return Gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ms(e.ease,yo.ease)),lp(yo,e||{})},config:function(e){return lp($n,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Vn[a]&&!Kn[a]&&wa(t+" effect requires "+a+" plugin.")}),nu[t]=function(a,l,c){return n(oi(a),jn(l||{},r),c)},o&&(wn.prototype[t]=function(a,l,c){return this.add(nu[t](a,Bi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){bt[e]=ms(t)},parseEase:function(e,t){return arguments.length?ms(e,t):bt},getById:function(e){return Gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new wn(e),i,r;for(n.smoothChildTiming=Nn(e.smoothChildTiming),Gt.remove(n),n._dp=0,n._time=n._tTime=Gt._time,i=Gt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof tn&&i.vars.onComplete===i._targets[0]))&&Pi(n,i,i._start-i._delay),i=r;return Pi(Gt,n,0),n},context:function(e,t){return e?new Ug(e,t):Vt},matchMedia:function(e){return new gT(e)},matchMediaRefresh:function(){return gs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ph()},addEventListener:function(e,t){var n=Ll[e]||(Ll[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ll[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:$E,wrapYoyo:KE,distribute:fg,random:mg,snap:pg,normalize:qE,getUnit:Sn,clamp:GE,splitColor:yg,toArray:oi,selector:Ah,mapRange:_g,pipe:XE,unitize:YE,interpolate:jE,shuffle:dg},install:eg,effects:nu,ticker:Gn,updateRoot:wn.updateRoot,plugins:Vn,globalTimeline:Gt,core:{PropTween:Fn,globals:tg,Tween:tn,Timeline:wn,Animation:Pa,getCache:fs,_removeLinkedListItem:ac,reverting:function(){return _n},context:function(e){return e&&Vt&&(Vt.data.push(e),e._ctx=Vt),Vt},suppressOverwrites:function(e){return md=e}}};On("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return $l[s]=tn[s]});Gn.add(wn.updateRoot);Js=$l.to({},{duration:0});var _T=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},vT=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=_T(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},au=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(gn(r)&&(l={},On(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}vT(a,r)}}}},kn=$l.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)_n?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},au("roundProps",Rh),au("modifiers"),au("snap",pg))||$l;tn.version=wn.version=kn.version="3.13.0";Qm=1;_d()&&Eo();bt.Power0;bt.Power1;bt.Power2;bt.Power3;bt.Power4;bt.Linear;bt.Quad;bt.Cubic;bt.Quart;bt.Quint;bt.Strong;bt.Elastic;bt.Back;bt.SteppedEase;bt.Bounce;bt.Sine;bt.Expo;bt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pp,Ir,ro,Cd,ds,mp,Pd,xT=function(){return typeof window<"u"},fr={},os=180/Math.PI,so=Math.PI/180,Vs=Math.atan2,gp=1e8,Id=/([A-Z])/g,yT=/(left|right|width|margin|padding|x)/i,ST=/[\s,\(]\S/,Di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ih=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},MT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},bT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ET=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ng=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Og=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},TT=function(e,t,n){return e.style[t]=n},wT=function(e,t,n){return e.style.setProperty(t,n)},AT=function(e,t,n){return e._gsap[t]=n},RT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},CT=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},PT=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Wt="transform",Bn=Wt+"Origin",IT=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in fr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Di[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ji(i,a)}):this.tfm[e]=o.x?o[e]:Ji(i,e),e===Bn&&(this.tfm.zOrigin=o.zOrigin);else return Di.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Wt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Bn,t,"")),e=Wt}(r||t)&&this.props.push(e,t,r[e])},Fg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},LT=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Id,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Pd(),(!r||!r.isStart)&&!n[Wt]&&(Fg(n),i.zOrigin&&n[Bn]&&(n[Bn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Bg=function(e,t){var n={target:e,props:[],revert:LT,save:IT};return e._gsap||kn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},kg,Lh=function(e,t){var n=Ir.createElementNS?Ir.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ir.createElement(e);return n&&n.style?n:Ir.createElement(e)},ai=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Id,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,To(t)||t,1)||""},_p="O,Moz,ms,Ms,Webkit".split(","),To=function(e,t,n){var i=t||ds,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(_p[o]+e in r););return o<0?null:(o===3?"ms":o>=0?_p[o]:"")+e},Dh=function(){xT()&&window.document&&(pp=window,Ir=pp.document,ro=Ir.documentElement,ds=Lh("div")||{style:{}},Lh("div"),Wt=To(Wt),Bn=Wt+"Origin",ds.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",kg=!!To("perspective"),Pd=kn.core.reverting,Cd=1)},vp=function(e){var t=e.ownerSVGElement,n=Lh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),ro.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),ro.removeChild(n),r},xp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},zg=function(e){var t,n;try{t=e.getBBox()}catch{t=vp(e),n=1}return t&&(t.width||t.height)||n||(t=vp(e)),t&&!t.width&&!t.x&&!t.y?{x:+xp(e,["x","cx","x1"])||0,y:+xp(e,["y","cy","y1"])||0,width:0,height:0}:t},Hg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&zg(e))},Ss=function(e,t){if(t){var n=e.style,i;t in fr&&t!==Bn&&(t=Wt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Id,"-$1").toLowerCase())):n.removeAttribute(t)}},Lr=function(e,t,n,i,r,o){var a=new Fn(e._pt,t,n,0,1,o?Og:Ng);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},yp={deg:1,rad:1,turn:1},DT={grid:1,flex:1},Vr=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=ds.style,l=yT.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",h=i==="%",g,_,m,p;if(i===o||!r||yp[i]||yp[o])return r;if(o!=="px"&&!f&&(r=s(e,t,n,"px")),p=e.getCTM&&Hg(e),(h||o==="%")&&(fr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Zt(h?r/g*d:r/100*g);if(a[l?"width":"height"]=d+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ir||!_.appendChild)&&(_=Ir.body),m=_._gsap,m&&h&&m.width&&l&&m.time===Gn.time&&!m.uncache)return Zt(r/m.width*d);if(h&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=d+i,g=e[u],S?e.style[t]=S:Ss(e,t)}else(h||o==="%")&&!DT[ai(_,"display")]&&(a.position=ai(e,"position")),_===e&&(a.position="static"),_.appendChild(ds),g=ds[u],_.removeChild(ds),a.position="absolute";return l&&h&&(m=fs(_),m.time=Gn.time,m.width=_[u]),Zt(f?g*r/d:g&&r?d/g*r:0)},Ji=function(e,t,n,i){var r;return Cd||Dh(),t in Di&&t!=="transform"&&(t=Di[t],~t.indexOf(",")&&(t=t.split(",")[0])),fr[t]&&t!=="transform"?(r=La(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:jl(ai(e,Bn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Kl[t]&&Kl[t](e,t,n)||ai(e,t)||ig(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Vr(e,t,r,n)+n:r},UT=function(e,t,n,i){if(!n||n==="none"){var r=To(t,e,1),o=r&&ai(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=ai(e,"borderTopColor"))}var a=new Fn(this._pt,e.style,t,0,1,Lg),l=0,c=0,u,d,f,h,g,_,m,p,S,b,y,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ai(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=ai(e,t)||i,_?e.style[t]=_:Ss(e,t)),u=[n,i],Mg(u),n=u[0],i=u[1],f=n.match(Zs)||[],A=i.match(Zs)||[],A.length){for(;d=Zs.exec(i);)m=d[0],S=i.substring(l,d.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(h=parseFloat(_)||0,y=_.substr((h+"").length),m.charAt(1)==="="&&(m=io(h,m)+y),p=parseFloat(m),b=m.substr((p+"").length),l=Zs.lastIndex-b.length,b||(b=b||$n.units[t]||y,l===i.length&&(i+=b,a.e+=b)),y!==b&&(h=Vr(e,t,_,b)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:h,c:p-h,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Og:Ng;return Zm.test(i)&&(a.e=0),this._pt=a,a},Sp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},NT=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Sp[n]||n,t[1]=Sp[i]||i,t.join(" ")},OT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],fr[a]&&(l=1,a=a==="transformOrigin"?Bn:Wt),Ss(n,a);l&&(Ss(n,Wt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",La(n,1),o.uncache=1,Fg(i)))}},Kl={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new Fn(e._pt,t,n,0,0,OT);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},Ia=[1,0,0,1,0,0],Vg={},Gg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Mp=function(e){var t=ai(e,Wt);return Gg(t)?Ia:t.substr(7).match(jm).map(Zt)},Ld=function(e,t){var n=e._gsap||fs(e),i=e.style,r=Mp(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ia:r):(r===Ia&&!e.offsetParent&&e!==ro&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ro.appendChild(e)),r=Mp(e),l?i.display=l:Ss(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ro.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Uh=function(e,t,n,i,r,o){var a=e._gsap,l=r||Ld(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,h=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],b=t.split(" "),y=parseFloat(b[0])||0,A=parseFloat(b[1])||0,I,R,L,M;n?l!==Ia&&(R=h*m-g*_)&&(L=y*(m/R)+A*(-_/R)+(_*S-m*p)/R,M=y*(-g/R)+A*(h/R)-(h*S-g*p)/R,y=L,A=M):(I=zg(e),y=I.x+(~b[0].indexOf("%")?y/100*I.width:y),A=I.y+(~(b[1]||b[0]).indexOf("%")?A/100*I.height:A)),i||i!==!1&&a.smooth?(p=y-c,S=A-u,a.xOffset=d+(p*h+S*_)-p,a.yOffset=f+(p*g+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=A,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Bn]="0px 0px",o&&(Lr(o,a,"xOrigin",c,y),Lr(o,a,"yOrigin",u,A),Lr(o,a,"xOffset",d,a.xOffset),Lr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+A)},La=function(e,t){var n=e._gsap||new wg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ai(e,Bn)||"0",u,d,f,h,g,_,m,p,S,b,y,A,I,R,L,M,T,D,q,H,ee,ne,K,Q,j,Te,Pe,Ae,Le,qe,Z,ye;return u=d=f=_=m=p=S=b=y=0,h=g=1,n.svg=!!(e.getCTM&&Hg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Wt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Wt]!=="none"?l[Wt]:"")),i.scale=i.rotate=i.translate="none"),R=Ld(e,n.svg),n.svg&&(n.uncache?(j=e.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",Q=""):Q=!t&&e.getAttribute("data-svg-origin"),Uh(e,Q||c,!!Q||n.originIsAbsolute,n.smooth!==!1,R)),A=n.xOrigin||0,I=n.yOrigin||0,R!==Ia&&(D=R[0],q=R[1],H=R[2],ee=R[3],u=ne=R[4],d=K=R[5],R.length===6?(h=Math.sqrt(D*D+q*q),g=Math.sqrt(ee*ee+H*H),_=D||q?Vs(q,D)*os:0,S=H||ee?Vs(H,ee)*os+_:0,S&&(g*=Math.abs(Math.cos(S*so))),n.svg&&(u-=A-(A*D+I*H),d-=I-(A*q+I*ee))):(ye=R[6],qe=R[7],Pe=R[8],Ae=R[9],Le=R[10],Z=R[11],u=R[12],d=R[13],f=R[14],L=Vs(ye,Le),m=L*os,L&&(M=Math.cos(-L),T=Math.sin(-L),Q=ne*M+Pe*T,j=K*M+Ae*T,Te=ye*M+Le*T,Pe=ne*-T+Pe*M,Ae=K*-T+Ae*M,Le=ye*-T+Le*M,Z=qe*-T+Z*M,ne=Q,K=j,ye=Te),L=Vs(-H,Le),p=L*os,L&&(M=Math.cos(-L),T=Math.sin(-L),Q=D*M-Pe*T,j=q*M-Ae*T,Te=H*M-Le*T,Z=ee*T+Z*M,D=Q,q=j,H=Te),L=Vs(q,D),_=L*os,L&&(M=Math.cos(L),T=Math.sin(L),Q=D*M+q*T,j=ne*M+K*T,q=q*M-D*T,K=K*M-ne*T,D=Q,ne=j),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),h=Zt(Math.sqrt(D*D+q*q+H*H)),g=Zt(Math.sqrt(K*K+ye*ye)),L=Vs(ne,K),S=Math.abs(L)>2e-4?L*os:0,y=Z?1/(Z<0?-Z:Z):0),n.svg&&(Q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Gg(ai(e,Wt)),Q&&e.setAttribute("transform",Q))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(h*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Zt(h),n.scaleY=Zt(g),n.rotation=Zt(_)+a,n.rotationX=Zt(m)+a,n.rotationY=Zt(p)+a,n.skewX=S+a,n.skewY=b+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Bn]=jl(c)),n.xOffset=n.yOffset=0,n.force3D=$n.force3D,n.renderTransform=n.svg?BT:kg?Wg:FT,n.uncache=0,n},jl=function(e){return(e=e.split(" "))[0]+" "+e[1]},lu=function(e,t,n){var i=Sn(t);return Zt(parseFloat(t)+parseFloat(Vr(e,"x",n+"px",i)))+i},FT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Wg(e,t)},Qr="0deg",Go="0px",es=") ",Wg=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,h=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,b=n.zOrigin,y="",A=p==="auto"&&e&&e!==1||p===!0;if(b&&(d!==Qr||u!==Qr)){var I=parseFloat(u)*so,R=Math.sin(I),L=Math.cos(I),M;I=parseFloat(d)*so,M=Math.cos(I),o=lu(S,o,R*M*-b),a=lu(S,a,-Math.sin(I)*-b),l=lu(S,l,L*M*-b+b)}m!==Go&&(y+="perspective("+m+es),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(A||o!==Go||a!==Go||l!==Go)&&(y+=l!==Go||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+es),c!==Qr&&(y+="rotate("+c+es),u!==Qr&&(y+="rotateY("+u+es),d!==Qr&&(y+="rotateX("+d+es),(f!==Qr||h!==Qr)&&(y+="skew("+f+", "+h+es),(g!==1||_!==1)&&(y+="scale("+g+", "+_+es),S.style[Wt]=y||"translate(0, 0)"},BT=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,h=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,b=parseFloat(o),y=parseFloat(a),A,I,R,L,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=so,c*=so,A=Math.cos(l)*d,I=Math.sin(l)*d,R=Math.sin(l-c)*-f,L=Math.cos(l-c)*f,c&&(u*=so,M=Math.tan(c-u),M=Math.sqrt(1+M*M),R*=M,L*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),A*=M,I*=M)),A=Zt(A),I=Zt(I),R=Zt(R),L=Zt(L)):(A=d,L=f,I=R=0),(b&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(b=Vr(h,"x",o,"px"),y=Vr(h,"y",a,"px")),(g||_||m||p)&&(b=Zt(b+g-(g*A+_*R)+m),y=Zt(y+_-(g*I+_*L)+p)),(i||r)&&(M=h.getBBox(),b=Zt(b+i/100*M.width),y=Zt(y+r/100*M.height)),M="matrix("+A+","+I+","+R+","+L+","+b+","+y+")",h.setAttribute("transform",M),S&&(h.style[Wt]=M)},kT=function(e,t,n,i,r){var o=360,a=gn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?os:1),c=l-i,u=i+c+"deg",d,f;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*gp)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*gp)%o-~~(c/o)*o)),e._pt=f=new Fn(e._pt,t,n,i,c,MT),f.e=u,f.u="deg",e._props.push(n),f},bp=function(e,t){for(var n in t)e[n]=t[n];return e},zT=function(e,t,n){var i=bp({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,d,f,h,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Wt]=t,a=La(n,1),Ss(n,Wt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Wt],o[Wt]=t,a=La(n,1),o[Wt]=c);for(l in fr)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(h=Sn(c),g=Sn(u),d=h!==g?Vr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Fn(e._pt,a,l,d,f-d,Ih),e._pt.u=g||0,e._props.push(l));bp(a,i)};On("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});Kl[e>1?"border"+s:s]=function(a,l,c,u,d){var f,h;if(arguments.length<4)return f=o.map(function(g){return Ji(a,g,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},o.forEach(function(g,_){return h[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,h,d)}});var Xg={name:"css",register:Dh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,d,f,h,g,_,m,p,S,b,y,A,I,R,L;Cd||Dh(),this.styles=this.styles||Bg(e),L=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Vn[_]&&Ag(_,t,n,i,e,r)))){if(h=typeof u,g=Kl[_],h==="function"&&(u=u.call(n,i,e,r),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Ra(u)),g)g(this,e,_,u,n)&&(R=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Br.lastIndex=0,Br.test(c)||(m=Sn(c),p=Sn(u)),p?m!==p&&(c=Vr(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,i,r,0,0,_),o.push(_),L.push(_,0,a[_]);else if(h!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,r):l[_],gn(c)&&~c.indexOf("random(")&&(c=Ra(c)),Sn(c+"")||c==="auto"||(c+=$n.units[_]||Sn(Ji(e,_))||""),(c+"").charAt(1)==="="&&(c=Ji(e,_))):c=Ji(e,_),f=parseFloat(c),S=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),d=parseFloat(u),_ in Di&&(_==="autoAlpha"&&(f===1&&Ji(e,"visibility")==="hidden"&&d&&(f=0),L.push("visibility",0,a.visibility),Lr(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Di[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in fr,b){if(this.styles.save(_),h==="string"&&u.substring(0,6)==="var(--"&&(u=ai(e,u.substring(4,u.indexOf(")"))),d=parseFloat(u)),y||(A=e._gsap,A.renderTransform&&!t.parseTransform||La(e,t.parseTransform),I=t.smoothOrigin!==!1&&A.smooth,y=this._pt=new Fn(this._pt,a,Wt,0,1,A.renderTransform,A,0,-1),y.dep=1),_==="scale")this._pt=new Fn(this._pt,A,"scaleY",A.scaleY,(S?io(A.scaleY,S+d):d)-A.scaleY||0,Ih),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(Bn,0,a[Bn]),u=NT(u),A.svg?Uh(e,u,0,I,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==A.zOrigin&&Lr(this,A,"zOrigin",A.zOrigin,p),Lr(this,a,_,jl(c),jl(u)));continue}else if(_==="svgOrigin"){Uh(e,u,1,I,0,this);continue}else if(_ in Vg){kT(this,A,_,f,S?io(f,S+u):u);continue}else if(_==="smoothOrigin"){Lr(this,A,"smooth",A.smooth,u);continue}else if(_==="force3D"){A[_]=u;continue}else if(_==="transform"){zT(this,u,e);continue}}else _ in a||(_=To(_)||_);if(b||(d||d===0)&&(f||f===0)&&!ST.test(u)&&_ in a)m=(c+"").substr((f+"").length),d||(d=0),p=Sn(u)||(_ in $n.units?$n.units[_]:m),m!==p&&(f=Vr(e,_,c,p)),this._pt=new Fn(this._pt,b?A:a,_,f,(S?io(f,S+d):d)-f,!b&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?ET:Ih),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=bT);else if(_ in a)UT.call(this,e,_,c,S?S+u:u);else if(_ in e)this.add(e,_,c||e[_],S?S+u:u,i,r);else if(_!=="parseTransform"){xd(_,u);continue}b||(_ in a?L.push(_,0,a[_]):typeof e[_]=="function"?L.push(_,2,e[_]()):L.push(_,1,c||e[_])),o.push(_)}}R&&Dg(this)},render:function(e,t){if(t.tween._time||!Pd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ji,aliases:Di,getSetter:function(e,t,n){var i=Di[t];return i&&i.indexOf(",")<0&&(t=i),t in fr&&t!==Bn&&(e._gsap.x||Ji(e,"x"))?n&&mp===n?t==="scale"?RT:AT:(mp=n||{})&&(t==="scale"?CT:PT):e.style&&!gd(e.style[t])?TT:~t.indexOf("-")?wT:Ad(e,t)},core:{_removeProperty:Ss,_getMatrix:Ld}};kn.utils.checkPrefix=To;kn.core.getStyleSaver=Bg;(function(s,e,t,n){var i=On(s+","+e+","+t,function(r){fr[r]=1});On(e,function(r){$n.units[r]="deg",Vg[r]=1}),Di[i[13]]=s+","+e,On(n,function(r){var o=r.split(":");Di[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");On("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){$n.units[s]="px"});kn.registerPlugin(Xg);var Da=kn.registerPlugin(Xg)||kn;Da.core.Tween;/*!
 * matrix 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var sr,_s,Dd,uc,na,Dl,Zl,ma,xi="transform",Nh=xi+"Origin",Yg,qg=function(e){var t=e.ownerDocument||e;for(!(xi in e.style)&&("msTransform"in e.style)&&(xi="msTransform",Nh=xi+"Origin");t.parentNode&&(t=t.parentNode););if(_s=window,Zl=new Ms,t){sr=t,Dd=t.documentElement,uc=t.body,ma=sr.createElementNS("http://www.w3.org/2000/svg","g"),ma.style.transform="none";var n=t.createElement("div"),i=t.createElement("div"),r=t&&(t.body||t.firstElementChild);r&&r.appendChild&&(r.appendChild(n),n.appendChild(i),n.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),Yg=i.offsetParent!==n,r.removeChild(n))}return t},HT=function(e){for(var t,n;e&&e!==uc;)n=e._gsap,n&&n.uncache&&n.get(e,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),t?t.push(n):t=[n]),e=e.parentNode;return t},$g=[],Kg=[],VT=function(){return _s.pageYOffset||sr.scrollTop||Dd.scrollTop||uc.scrollTop||0},GT=function(){return _s.pageXOffset||sr.scrollLeft||Dd.scrollLeft||uc.scrollLeft||0},Ud=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},WT=function s(e){if(_s.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return s(e)},cu=function s(e,t){if(e.parentNode&&(sr||qg(e))){var n=Ud(e),i=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",r=n?t?"rect":"g":"div",o=t!==2?0:100,a=t===3?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",c=sr.createElementNS?sr.createElementNS(i.replace(/^https/,"http"),r):sr.createElement(r);return t&&(n?(Dl||(Dl=s(e)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+o+","+a+")"),Dl.appendChild(c)):(na||(na=s(e),na.style.cssText=l),c.style.cssText=l+"width:0.1px;height:0.1px;top:"+a+"px;left:"+o+"px",na.appendChild(c))),c}throw"Need document and parent."},XT=function(e){for(var t=new Ms,n=0;n<e.numberOfItems;n++)t.multiply(e.getItem(n).matrix);return t},YT=function(e){var t=e.getCTM(),n;return t||(n=e.style[xi],e.style[xi]="none",e.appendChild(ma),t=ma.getCTM(),e.removeChild(ma),n?e.style[xi]=n:e.style.removeProperty(xi.replace(/([A-Z])/g,"-$1").toLowerCase())),t||Zl.clone()},qT=function(e,t){var n=Ud(e),i=e===n,r=n?$g:Kg,o=e.parentNode,a=o&&!n&&o.shadowRoot&&o.shadowRoot.appendChild?o.shadowRoot:o,l,c,u,d,f,h;if(e===_s)return e;if(r.length||r.push(cu(e,1),cu(e,2),cu(e,3)),l=n?Dl:na,n)i?(u=YT(e),d=-u.e/u.a,f=-u.f/u.d,c=Zl):e.getBBox?(u=e.getBBox(),c=e.transform?e.transform.baseVal:{},c=c.numberOfItems?c.numberOfItems>1?XT(c):c.getItem(0).matrix:Zl,d=c.a*u.x+c.c*u.y,f=c.b*u.x+c.d*u.y):(c=new Ms,d=f=0),(i?n:o).appendChild(l),l.setAttribute("transform","matrix("+c.a+","+c.b+","+c.c+","+c.d+","+(c.e+d)+","+(c.f+f)+")");else{if(d=f=0,Yg)for(c=e.offsetParent,u=e;u&&(u=u.parentNode)&&u!==c&&u.parentNode;)(_s.getComputedStyle(u)[xi]+"").length>4&&(d=u.offsetLeft,f=u.offsetTop,u=0);if(h=_s.getComputedStyle(e),h.position!=="absolute"&&h.position!=="fixed")for(c=e.offsetParent;o&&o!==c;)d+=o.scrollLeft||0,f+=o.scrollTop||0,o=o.parentNode;u=l.style,u.top=e.offsetTop-f+"px",u.left=e.offsetLeft-d+"px",u[xi]=h[xi],u[Nh]=h[Nh],u.position=h.position==="fixed"?"fixed":"absolute",a.appendChild(l)}return l},uu=function(e,t,n,i,r,o,a){return e.a=t,e.b=n,e.c=i,e.d=r,e.e=o,e.f=a,e},Ms=function(){function s(t,n,i,r,o,a){t===void 0&&(t=1),n===void 0&&(n=0),i===void 0&&(i=0),r===void 0&&(r=1),o===void 0&&(o=0),a===void 0&&(a=0),uu(this,t,n,i,r,o,a)}var e=s.prototype;return e.inverse=function(){var n=this.a,i=this.b,r=this.c,o=this.d,a=this.e,l=this.f,c=n*o-i*r||1e-10;return uu(this,o/c,-i/c,-r/c,n/c,(r*l-o*a)/c,-(n*l-i*a)/c)},e.multiply=function(n){var i=this.a,r=this.b,o=this.c,a=this.d,l=this.e,c=this.f,u=n.a,d=n.c,f=n.b,h=n.d,g=n.e,_=n.f;return uu(this,u*i+f*o,u*r+f*a,d*i+h*o,d*r+h*a,l+g*i+_*o,c+g*r+_*a)},e.clone=function(){return new s(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(n){var i=this.a,r=this.b,o=this.c,a=this.d,l=this.e,c=this.f;return i===n.a&&r===n.b&&o===n.c&&a===n.d&&l===n.e&&c===n.f},e.apply=function(n,i){i===void 0&&(i={});var r=n.x,o=n.y,a=this.a,l=this.b,c=this.c,u=this.d,d=this.e,f=this.f;return i.x=r*a+o*c+d||0,i.y=r*l+o*u+f||0,i},s}();function cs(s,e,t,n){if(!s||!s.parentNode||(sr||qg(s)).documentElement===s)return new Ms;var i=HT(s),r=Ud(s),o=r?$g:Kg,a=qT(s),l=o[0].getBoundingClientRect(),c=o[1].getBoundingClientRect(),u=o[2].getBoundingClientRect(),d=a.parentNode,f=WT(s),h=new Ms((c.left-l.left)/100,(c.top-l.top)/100,(u.left-l.left)/100,(u.top-l.top)/100,l.left+(f?0:GT()),l.top+(f?0:VT()));if(d.removeChild(a),i)for(l=i.length;l--;)c=i[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return e?h.inverse():h}function Ep(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function $T(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var Mt,Bt,Wn,Mi,or,hu,Qi,Oh,ia,Dr,jg,Fh,Ua,Nd,ra,di,sa,Ul,Zg,Bh,Jl=0,Jg=function(){return typeof window<"u"},Qg=function(){return Mt||Jg()&&(Mt=window.gsap)&&Mt.registerPlugin&&Mt},Ar=function(e){return typeof e=="function"},ga=function(e){return typeof e=="object"},pi=function(e){return typeof e>"u"},Nl=function(){return!1},_a="transform",kh="transformOrigin",Er=function(e){return Math.round(e*1e4)/1e4},Wo=Array.isArray,_l=function(e,t){var n=Wn.createElementNS?Wn.createElementNS("http://www.w3.org/1999/xhtml".replace(/^https/,"http"),e):Wn.createElement(e);return n.style?n:Wn.createElement(e)},Tp=180/Math.PI,ts=1e20,KT=new Ms,Tr=Date.now||function(){return new Date().getTime()},vs=[],oo={},jT=0,ZT=/^(?:a|input|textarea|button|select)$/i,wp=0,Gs={},Ki={},e_=function(e,t){var n={},i;for(i in e)n[i]=t?e[i]*t:e[i];return n},JT=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ap=function s(e,t){for(var n=e.length,i;n--;)t?e[n].style.touchAction=t:e[n].style.removeProperty("touch-action"),i=e[n].children,i&&i.length&&s(i,t)},t_=function(){return vs.forEach(function(e){return e()})},QT=function(e){vs.push(e),vs.length===1&&Mt.ticker.add(t_)},Rp=function(){return!vs.length&&Mt.ticker.remove(t_)},Cp=function(e){for(var t=vs.length;t--;)vs[t]===e&&vs.splice(t,1);Mt.to(Rp,{overwrite:!0,delay:15,duration:0,onComplete:Rp,data:"_draggable"})},ew=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},an=function(e,t,n,i){if(e.addEventListener){var r=Ua[t];i=i||(jg?{passive:!1}:null),e.addEventListener(r||t,n,i),r&&t!==r&&e.addEventListener(t,n,i)}},en=function(e,t,n,i){if(e.removeEventListener){var r=Ua[t];e.removeEventListener(r||t,n,i),r&&t!==r&&e.removeEventListener(t,n,i)}},Qn=function(e){e.preventDefault&&e.preventDefault(),e.preventManipulation&&e.preventManipulation()},tw=function(e,t){for(var n=e.length;n--;)if(e[n].identifier===t)return!0},nw=function s(e){Nd=e.touches&&Jl<e.touches.length,en(e.target,"touchend",s)},Pp=function(e){Nd=e.touches&&Jl<e.touches.length,an(e.target,"touchend",nw)},ao=function(e){return Bt.pageYOffset||e.scrollTop||e.documentElement.scrollTop||e.body.scrollTop||0},lo=function(e){return Bt.pageXOffset||e.scrollLeft||e.documentElement.scrollLeft||e.body.scrollLeft||0},Ip=function s(e,t){an(e,"scroll",t),wo(e.parentNode)||s(e.parentNode,t)},Lp=function s(e,t){en(e,"scroll",t),wo(e.parentNode)||s(e.parentNode,t)},wo=function(e){return!e||e===Mi||e.nodeType===9||e===Wn.body||e===Bt||!e.nodeType||!e.parentNode},Dp=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,r="client"+n;return Math.max(0,wo(e)?Math.max(Mi[i],or[i])-(Bt["inner"+n]||Mi[r]||or[r]):e[i]-e[r])},du=function s(e,t){var n=Dp(e,"x"),i=Dp(e,"y");wo(e)?e=Ki:s(e.parentNode,t),e._gsMaxScrollX=n,e._gsMaxScrollY=i,t||(e._gsScrollX=e.scrollLeft||0,e._gsScrollY=e.scrollTop||0)},fu=function(e,t,n){var i=e.style;i&&(pi(i[t])&&(t=ia(t,e)||t),n==null?i.removeProperty&&i.removeProperty(t.replace(/([A-Z])/g,"-$1").toLowerCase()):i[t]=n)},Na=function(e){return Bt.getComputedStyle(e instanceof Element?e:e.host||(e.parentNode||{}).host||e)},ns={},Ws=function(e){if(e===Bt)return ns.left=ns.top=0,ns.width=ns.right=Mi.clientWidth||e.innerWidth||or.clientWidth||0,ns.height=ns.bottom=(e.innerHeight||0)-20<Mi.clientHeight?Mi.clientHeight:e.innerHeight||or.clientHeight||0,ns;var t=e.ownerDocument||Wn,n=pi(e.pageX)?!e.nodeType&&!pi(e.left)&&!pi(e.top)?e:Dr(e)[0].getBoundingClientRect():{left:e.pageX-lo(t),top:e.pageY-ao(t),right:e.pageX-lo(t)+1,bottom:e.pageY-ao(t)+1};return pi(n.right)&&!pi(n.width)?(n.right=n.left+n.width,n.bottom=n.top+n.height):pi(n.width)&&(n={width:n.right-n.left,height:n.bottom-n.top,right:n.right,left:n.left,bottom:n.bottom,top:n.top}),n},jt=function(e,t,n){var i=e.vars,r=i[n],o=e._listeners[t],a;return Ar(r)&&(a=r.apply(i.callbackScope||e,i[n+"Params"]||[e.pointerEvent])),o&&e.dispatchEvent(t)===!1&&(a=!1),a},Up=function(e,t){var n=Dr(e)[0],i,r,o;return!n.nodeType&&n!==Bt?pi(e.left)?(r=e.min||e.minX||e.minRotation||0,i=e.min||e.minY||0,{left:r,top:i,width:(e.max||e.maxX||e.maxRotation||0)-r,height:(e.max||e.maxY||0)-i}):(o={x:0,y:0},{left:e.left-o.x,top:e.top-o.y,width:e.width,height:e.height}):iw(n,t)},ei={},iw=function(e,t){t=Dr(t)[0];var n=e.getBBox&&e.ownerSVGElement,i=e.ownerDocument||Wn,r,o,a,l,c,u,d,f,h,g,_,m,p;if(e===Bt)a=ao(i),r=lo(i),o=r+(i.documentElement.clientWidth||e.innerWidth||i.body.clientWidth||0),l=a+((e.innerHeight||0)-20<i.documentElement.clientHeight?i.documentElement.clientHeight:e.innerHeight||i.body.clientHeight||0);else{if(t===Bt||pi(t))return e.getBoundingClientRect();r=a=0,n?(g=e.getBBox(),_=g.width,m=g.height):(e.viewBox&&(g=e.viewBox.baseVal)&&(r=g.x||0,a=g.y||0,_=g.width,m=g.height),_||(p=Na(e),g=p.boxSizing==="border-box",_=(parseFloat(p.width)||e.clientWidth||0)+(g?0:parseFloat(p.borderLeftWidth)+parseFloat(p.borderRightWidth)),m=(parseFloat(p.height)||e.clientHeight||0)+(g?0:parseFloat(p.borderTopWidth)+parseFloat(p.borderBottomWidth)))),o=_,l=m}return e===t?{left:r,top:a,width:o-r,height:l-a}:(c=cs(t,!0).multiply(cs(e)),u=c.apply({x:r,y:a}),d=c.apply({x:o,y:a}),f=c.apply({x:o,y:l}),h=c.apply({x:r,y:l}),r=Math.min(u.x,d.x,f.x,h.x),a=Math.min(u.y,d.y,f.y,h.y),{left:r,top:a,width:Math.max(u.x,d.x,f.x,h.x)-r,height:Math.max(u.y,d.y,f.y,h.y)-a})},pu=function(e,t,n,i,r,o){var a={},l,c,u;if(t)if(r!==1&&t instanceof Array){if(a.end=l=[],u=t.length,ga(t[0]))for(c=0;c<u;c++)l[c]=e_(t[c],r);else for(c=0;c<u;c++)l[c]=t[c]*r;n+=1.1,i-=1.1}else Ar(t)?a.end=function(d){var f=t.call(e,d),h,g;if(r!==1)if(ga(f)){h={};for(g in f)h[g]=f[g]*r;f=h}else f*=r;return f}:a.end=t;return(n||n===0)&&(a.max=n),(i||i===0)&&(a.min=i),o&&(a.velocity=0),a},rw=function s(e){var t;return!e||!e.getAttribute||e===or?!1:(t=e.getAttribute("data-clickable"))==="true"||t!=="false"&&(ZT.test(e.nodeName+"")||e.getAttribute("contentEditable")==="true")?!0:s(e.parentNode)},vl=function(e,t){for(var n=e.length,i;n--;)i=e[n],i.ondragstart=i.onselectstart=t?null:Nl,Mt.set(i,{lazy:!0,userSelect:t?"text":"none"})},sw=function s(e){if(Na(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return s(e)},n_,zh,ow=function(e,t){e=Mt.utils.toArray(e)[0],t=t||{};var n=document.createElement("div"),i=n.style,r=e.firstChild,o=0,a=0,l=e.scrollTop,c=e.scrollLeft,u=e.scrollWidth,d=e.scrollHeight,f=0,h=0,g=0,_,m,p,S,b,y;n_&&t.force3D!==!1?(b="translate3d(",y="px,0px)"):_a&&(b="translate(",y="px)"),this.scrollTop=function(A,I){if(!arguments.length)return-this.top();this.top(-A,I)},this.scrollLeft=function(A,I){if(!arguments.length)return-this.left();this.left(-A,I)},this.left=function(A,I){if(!arguments.length)return-(e.scrollLeft+a);var R=e.scrollLeft-c,L=a;if((R>2||R<-2)&&!I){c=e.scrollLeft,Mt.killTweensOf(this,{left:1,scrollLeft:1}),this.left(-c),t.onKill&&t.onKill();return}A=-A,A<0?(a=A-.5|0,A=0):A>h?(a=A-h|0,A=h):a=0,(a||L)&&(this._skip||(i[_a]=b+-a+"px,"+-o+y),a+f>=0&&(i.paddingRight=a+f+"px")),e.scrollLeft=A|0,c=e.scrollLeft},this.top=function(A,I){if(!arguments.length)return-(e.scrollTop+o);var R=e.scrollTop-l,L=o;if((R>2||R<-2)&&!I){l=e.scrollTop,Mt.killTweensOf(this,{top:1,scrollTop:1}),this.top(-l),t.onKill&&t.onKill();return}A=-A,A<0?(o=A-.5|0,A=0):A>g?(o=A-g|0,A=g):o=0,(o||L)&&(this._skip||(i[_a]=b+-a+"px,"+-o+y)),e.scrollTop=A|0,l=e.scrollTop},this.maxScrollTop=function(){return g},this.maxScrollLeft=function(){return h},this.disable=function(){for(r=n.firstChild;r;)S=r.nextSibling,e.appendChild(r),r=S;e===n.parentNode&&e.removeChild(n)},this.enable=function(){if(r=e.firstChild,r!==n){for(;r;)S=r.nextSibling,n.appendChild(r),r=S;e.appendChild(n),this.calibrate()}},this.calibrate=function(A){var I=e.clientWidth===_,R,L,M;l=e.scrollTop,c=e.scrollLeft,!(I&&e.clientHeight===m&&n.offsetHeight===p&&u===e.scrollWidth&&d===e.scrollHeight&&!A)&&((o||a)&&(L=this.left(),M=this.top(),this.left(-e.scrollLeft),this.top(-e.scrollTop)),R=Na(e),(!I||A)&&(i.display="block",i.width="auto",i.paddingRight="0px",f=Math.max(0,e.scrollWidth-e.clientWidth),f&&(f+=parseFloat(R.paddingLeft)+(zh?parseFloat(R.paddingRight):0))),i.display="inline-block",i.position="relative",i.overflow="visible",i.verticalAlign="top",i.boxSizing="content-box",i.width="100%",i.paddingRight=f+"px",zh&&(i.paddingBottom=R.paddingBottom),_=e.clientWidth,m=e.clientHeight,u=e.scrollWidth,d=e.scrollHeight,h=e.scrollWidth-_,g=e.scrollHeight-m,p=n.offsetHeight,i.display="block",(L||M)&&(this.left(L),this.top(M)))},this.content=n,this.element=e,this._skip=!1,this.enable()},mu=function(e){if(Jg()&&document.body){var t=window&&window.navigator;Bt=window,Wn=document,Mi=Wn.documentElement,or=Wn.body,hu=_l("div"),Ul=!!window.PointerEvent,Qi=_l("div"),Qi.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",sa=Qi.style.cursor==="grab"?"grab":"move",ra=t&&t.userAgent.toLowerCase().indexOf("android")!==-1,Fh="ontouchstart"in Mi&&"orientation"in Bt||t&&(t.MaxTouchPoints>0||t.msMaxTouchPoints>0),zh=function(){var n=_l("div"),i=_l("div"),r=i.style,o=or,a;return r.display="inline-block",r.position="relative",n.style.cssText="width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",n.appendChild(i),o.appendChild(n),a=i.offsetHeight+18>n.scrollHeight,o.removeChild(n),a}(),Ua=function(n){for(var i=n.split(","),r=("onpointerdown"in hu?"pointerdown,pointermove,pointerup,pointercancel":"onmspointerdown"in hu?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":n).split(","),o={},a=4;--a>-1;)o[i[a]]=r[a],o[r[a]]=i[a];try{Mi.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){jg=1}}))}catch{}return o}("touchstart,touchmove,touchend,touchcancel"),an(Wn,"touchcancel",Nl),an(Bt,"touchmove",Nl),or&&or.addEventListener("touchstart",Nl),an(Wn,"contextmenu",function(){for(var n in oo)oo[n].isPressed&&oo[n].endDrag()}),Mt=Oh=Qg()}Mt?(di=Mt.plugins.inertia,Zg=Mt.core.context||function(){},ia=Mt.utils.checkPrefix,_a=ia(_a),kh=ia(kh),Dr=Mt.utils.toArray,Bh=Mt.core.getStyleSaver,n_=!!ia("perspective")):e&&console.warn("Please gsap.registerPlugin(Draggable)")},aw=function(){function s(t){this._listeners={},this.target=t||this}var e=s.prototype;return e.addEventListener=function(n,i){var r=this._listeners[n]||(this._listeners[n]=[]);~r.indexOf(i)||r.push(i)},e.removeEventListener=function(n,i){var r=this._listeners[n],o=r&&r.indexOf(i);o>=0&&r.splice(o,1)},e.dispatchEvent=function(n){var i=this,r;return(this._listeners[n]||[]).forEach(function(o){return o.call(i,{type:n,target:i.target})===!1&&(r=!1)}),r},s}(),Ha=function(s){$T(e,s);function e(t,n){var i;i=s.call(this)||this,Oh||mu(1),t=Dr(t)[0],i.styles=Bh&&Bh(t,"transform,left,top"),di||(di=Mt.plugins.inertia),i.vars=n=e_(n||{}),i.target=t,i.x=i.y=i.rotation=0,i.dragResistance=parseFloat(n.dragResistance)||0,i.edgeResistance=isNaN(n.edgeResistance)?1:parseFloat(n.edgeResistance)||0,i.lockAxis=n.lockAxis,i.autoScroll=n.autoScroll||0,i.lockedAxis=null,i.allowEventDefault=!!n.allowEventDefault,Mt.getProperty(t,"x");var r=(n.type||"x,y").toLowerCase(),o=~r.indexOf("x")||~r.indexOf("y"),a=r.indexOf("rotation")!==-1,l=a?"rotation":o?"x":"left",c=o?"y":"top",u=!!(~r.indexOf("x")||~r.indexOf("left")||r==="scroll"),d=!!(~r.indexOf("y")||~r.indexOf("top")||r==="scroll"),f=n.minimumMovement||2,h=Ep(i),g=Dr(n.trigger||n.handle||t),_={},m=0,p=!1,S=n.autoScrollMarginTop||40,b=n.autoScrollMarginRight||40,y=n.autoScrollMarginBottom||40,A=n.autoScrollMarginLeft||40,I=n.clickableTest||rw,R=0,L=t._gsap||Mt.core.getCache(t),M=sw(t),T=function(B,se){return parseFloat(L.get(t,B,se))},D=t.ownerDocument||Wn,q,H,ee,ne,K,Q,j,Te,Pe,Ae,Le,qe,Z,ye,Me,Re,Ie,ht,$e,pt,vt,ot,k,nt,xt,lt,Oe,mt,je,it,yt,U,E,$=function(B){return Qn(B),B.stopImmediatePropagation&&B.stopImmediatePropagation(),!1},re=function ae(B){if(h.autoScroll&&h.isDragging&&(p||Ie)){var se=t,X=h.autoScroll*15,_e,Ce,Fe,rt,Ge,Tt,dt,At;for(p=!1,Ki.scrollTop=Bt.pageYOffset!=null?Bt.pageYOffset:D.documentElement.scrollTop!=null?D.documentElement.scrollTop:D.body.scrollTop,Ki.scrollLeft=Bt.pageXOffset!=null?Bt.pageXOffset:D.documentElement.scrollLeft!=null?D.documentElement.scrollLeft:D.body.scrollLeft,rt=h.pointerX-Ki.scrollLeft,Ge=h.pointerY-Ki.scrollTop;se&&!Ce;)Ce=wo(se.parentNode),_e=Ce?Ki:se.parentNode,Fe=Ce?{bottom:Math.max(Mi.clientHeight,Bt.innerHeight||0),right:Math.max(Mi.clientWidth,Bt.innerWidth||0),left:0,top:0}:_e.getBoundingClientRect(),Tt=dt=0,d&&(At=_e._gsMaxScrollY-_e.scrollTop,At<0?dt=At:Ge>Fe.bottom-y&&At?(p=!0,dt=Math.min(At,X*(1-Math.max(0,Fe.bottom-Ge)/y)|0)):Ge<Fe.top+S&&_e.scrollTop&&(p=!0,dt=-Math.min(_e.scrollTop,X*(1-Math.max(0,Ge-Fe.top)/S)|0)),dt&&(_e.scrollTop+=dt)),u&&(At=_e._gsMaxScrollX-_e.scrollLeft,At<0?Tt=At:rt>Fe.right-b&&At?(p=!0,Tt=Math.min(At,X*(1-Math.max(0,Fe.right-rt)/b)|0)):rt<Fe.left+A&&_e.scrollLeft&&(p=!0,Tt=-Math.min(_e.scrollLeft,X*(1-Math.max(0,rt-Fe.left)/A)|0)),Tt&&(_e.scrollLeft+=Tt)),Ce&&(Tt||dt)&&(Bt.scrollTo(_e.scrollLeft,_e.scrollTop),J(h.pointerX+Tt,h.pointerY+dt)),se=_e}if(Ie){var Ut=h.x,$t=h.y;a?(h.deltaX=Ut-parseFloat(L.rotation),h.rotation=Ut,L.rotation=Ut+"deg",L.renderTransform(1,L)):H?(d&&(h.deltaY=$t-H.top(),H.top($t)),u&&(h.deltaX=Ut-H.left(),H.left(Ut))):o?(d&&(h.deltaY=$t-parseFloat(L.y),L.y=$t+"px"),u&&(h.deltaX=Ut-parseFloat(L.x),L.x=Ut+"px"),L.renderTransform(1,L)):(d&&(h.deltaY=$t-parseFloat(t.style.top||0),t.style.top=$t+"px"),u&&(h.deltaX=Ut-parseFloat(t.style.left||0),t.style.left=Ut+"px")),Te&&!B&&!mt&&(mt=!0,jt(h,"drag","onDrag")===!1&&(u&&(h.x-=h.deltaX),d&&(h.y-=h.deltaY),ae(!0)),mt=!1)}Ie=!1},fe=function(B,se){var X=h.x,_e=h.y,Ce,Fe;t._gsap||(L=Mt.core.getCache(t)),L.uncache&&Mt.getProperty(t,"x"),o?(h.x=parseFloat(L.x),h.y=parseFloat(L.y)):a?h.x=h.rotation=parseFloat(L.rotation):H?(h.y=H.top(),h.x=H.left()):(h.y=parseFloat(t.style.top||(Fe=Na(t))&&Fe.top)||0,h.x=parseFloat(t.style.left||(Fe||{}).left)||0),($e||pt||vt)&&!se&&(h.isDragging||h.isThrowing)&&(vt&&(Gs.x=h.x,Gs.y=h.y,Ce=vt(Gs),Ce.x!==h.x&&(h.x=Ce.x,Ie=!0),Ce.y!==h.y&&(h.y=Ce.y,Ie=!0)),$e&&(Ce=$e(h.x),Ce!==h.x&&(h.x=Ce,a&&(h.rotation=Ce),Ie=!0)),pt&&(Ce=pt(h.y),Ce!==h.y&&(h.y=Ce),Ie=!0)),Ie&&re(!0),B||(h.deltaX=h.x-X,h.deltaY=h.y-_e,jt(h,"throwupdate","onThrowUpdate"))},ie=function(B,se,X,_e){return se==null&&(se=-ts),X==null&&(X=ts),Ar(B)?function(Ce){var Fe=h.isPressed?1-h.edgeResistance:1;return B.call(h,(Ce>X?X+(Ce-X)*Fe:Ce<se?se+(Ce-se)*Fe:Ce)*_e)*_e}:Wo(B)?function(Ce){for(var Fe=B.length,rt=0,Ge=ts,Tt,dt;--Fe>-1;)Tt=B[Fe],dt=Tt-Ce,dt<0&&(dt=-dt),dt<Ge&&Tt>=se&&Tt<=X&&(rt=Fe,Ge=dt);return B[rt]}:isNaN(B)?function(Ce){return Ce}:function(){return B*_e}},Xe=function(B,se,X,_e,Ce,Fe,rt){return Fe=Fe&&Fe<ts?Fe*Fe:ts,Ar(B)?function(Ge){var Tt=h.isPressed?1-h.edgeResistance:1,dt=Ge.x,At=Ge.y,Ut,$t,vn;return Ge.x=dt=dt>X?X+(dt-X)*Tt:dt<se?se+(dt-se)*Tt:dt,Ge.y=At=At>Ce?Ce+(At-Ce)*Tt:At<_e?_e+(At-_e)*Tt:At,Ut=B.call(h,Ge),Ut!==Ge&&(Ge.x=Ut.x,Ge.y=Ut.y),rt!==1&&(Ge.x*=rt,Ge.y*=rt),Fe<ts&&($t=Ge.x-dt,vn=Ge.y-At,$t*$t+vn*vn>Fe&&(Ge.x=dt,Ge.y=At)),Ge}:Wo(B)?function(Ge){for(var Tt=B.length,dt=0,At=ts,Ut,$t,vn,un;--Tt>-1;)vn=B[Tt],Ut=vn.x-Ge.x,$t=vn.y-Ge.y,un=Ut*Ut+$t*$t,un<At&&(dt=Tt,At=un);return At<=Fe?B[dt]:Ge}:function(Ge){return Ge}},Ue=function(){var B,se,X,_e;j=!1,H?(H.calibrate(),h.minX=Le=-H.maxScrollLeft(),h.minY=Z=-H.maxScrollTop(),h.maxX=Ae=h.maxY=qe=0,j=!0):n.bounds&&(B=Up(n.bounds,t.parentNode),a?(h.minX=Le=B.left,h.maxX=Ae=B.left+B.width,h.minY=Z=h.maxY=qe=0):!pi(n.bounds.maxX)||!pi(n.bounds.maxY)?(B=n.bounds,h.minX=Le=B.minX,h.minY=Z=B.minY,h.maxX=Ae=B.maxX,h.maxY=qe=B.maxY):(se=Up(t,t.parentNode),h.minX=Le=Math.round(T(l,"px")+B.left-se.left),h.minY=Z=Math.round(T(c,"px")+B.top-se.top),h.maxX=Ae=Math.round(Le+(B.width-se.width)),h.maxY=qe=Math.round(Z+(B.height-se.height))),Le>Ae&&(h.minX=Ae,h.maxX=Ae=Le,Le=h.minX),Z>qe&&(h.minY=qe,h.maxY=qe=Z,Z=h.minY),a&&(h.minRotation=Le,h.maxRotation=Ae),j=!0),n.liveSnap&&(X=n.liveSnap===!0?n.snap||{}:n.liveSnap,_e=Wo(X)||Ar(X),a?($e=ie(_e?X:X.rotation,Le,Ae,1),pt=null):X.points?vt=Xe(_e?X:X.points,Le,Ae,Z,qe,X.radius,H?-1:1):(u&&($e=ie(_e?X:X.x||X.left||X.scrollLeft,Le,Ae,H?-1:1)),d&&(pt=ie(_e?X:X.y||X.top||X.scrollTop,Z,qe,H?-1:1))))},Ye=function(){h.isThrowing=!1,jt(h,"throwcomplete","onThrowComplete")},Ke=function(){h.isThrowing=!1},le=function(B,se){var X,_e,Ce,Fe;B&&di?(B===!0&&(X=n.snap||n.liveSnap||{},_e=Wo(X)||Ar(X),B={resistance:(n.throwResistance||n.resistance||1e3)/(a?10:1)},a?B.rotation=pu(h,_e?X:X.rotation,Ae,Le,1,se):(u&&(B[l]=pu(h,_e?X:X.points||X.x||X.left,Ae,Le,H?-1:1,se||h.lockedAxis==="x")),d&&(B[c]=pu(h,_e?X:X.points||X.y||X.top,qe,Z,H?-1:1,se||h.lockedAxis==="y")),(X.points||Wo(X)&&ga(X[0]))&&(B.linkedProps=l+","+c,B.radius=X.radius))),h.isThrowing=!0,Fe=isNaN(n.overshootTolerance)?n.edgeResistance===1?0:1-h.edgeResistance+.2:n.overshootTolerance,B.duration||(B.duration={max:Math.max(n.minDuration||0,"maxDuration"in n?n.maxDuration:2),min:isNaN(n.minDuration)?Fe===0||ga(B)&&B.resistance>1e3?0:.5:n.minDuration,overshoot:Fe}),h.tween=Ce=Mt.to(H||t,{inertia:B,data:"_draggable",inherit:!1,onComplete:Ye,onInterrupt:Ke,onUpdate:n.fastMode?jt:fe,onUpdateParams:n.fastMode?[h,"onthrowupdate","onThrowUpdate"]:X&&X.radius?[!1,!0]:[]}),n.fastMode||(H&&(H._skip=!0),Ce.render(1e9,!0,!0),fe(!0,!0),h.endX=h.x,h.endY=h.y,a&&(h.endRotation=h.x),Ce.play(0),fe(!0,!0),H&&(H._skip=!1))):j&&h.applyBounds()},De=function(B){var se=nt,X;nt=cs(t.parentNode,!0),B&&h.isPressed&&!nt.equals(se||new Ms)&&(X=se.inverse().apply({x:ee,y:ne}),nt.apply(X,X),ee=X.x,ne=X.y),nt.equals(KT)&&(nt=null)},Ze=function(){var B=1-h.edgeResistance,se=M?lo(D):0,X=M?ao(D):0,_e,Ce,Fe;o&&(L.x=T(l,"px")+"px",L.y=T(c,"px")+"px",L.renderTransform()),De(!1),ei.x=h.pointerX-se,ei.y=h.pointerY-X,nt&&nt.apply(ei,ei),ee=ei.x,ne=ei.y,Ie&&(J(h.pointerX,h.pointerY),re(!0)),U=cs(t),H?(Ue(),Q=H.top(),K=H.left()):(Ve()?(fe(!0,!0),Ue()):h.applyBounds(),a?(_e=t.ownerSVGElement?[L.xOrigin-t.getBBox().x,L.yOrigin-t.getBBox().y]:(Na(t)[kh]||"0 0").split(" "),Re=h.rotationOrigin=cs(t).apply({x:parseFloat(_e[0])||0,y:parseFloat(_e[1])||0}),fe(!0,!0),Ce=h.pointerX-Re.x-se,Fe=Re.y-h.pointerY+X,K=h.x,Q=h.y=Math.atan2(Fe,Ce)*Tp):(Q=T(c,"px"),K=T(l,"px"))),j&&B&&(K>Ae?K=Ae+(K-Ae)/B:K<Le&&(K=Le-(Le-K)/B),a||(Q>qe?Q=qe+(Q-qe)/B:Q<Z&&(Q=Z-(Z-Q)/B))),h.startX=K=Er(K),h.startY=Q=Er(Q)},Ve=function(){return h.tween&&h.tween.isActive()},Ee=function(){Qi.parentNode&&!Ve()&&!h.isDragging&&Qi.parentNode.removeChild(Qi)},ke=function(B,se){var X;if(!q||h.isPressed||!B||(B.type==="mousedown"||B.type==="pointerdown")&&!se&&Tr()-R<30&&Ua[h.pointerEvent.type]){yt&&B&&q&&Qn(B);return}if(xt=Ve(),E=!1,h.pointerEvent=B,Ua[B.type]?(k=~B.type.indexOf("touch")?B.currentTarget||B.target:D,an(k,"touchend",ce),an(k,"touchmove",z),an(k,"touchcancel",ce),an(D,"touchstart",Pp)):(k=null,an(D,"mousemove",z)),Oe=null,(!Ul||!k)&&(an(D,"mouseup",ce),B&&B.target&&an(B.target,"mouseup",ce)),ot=I.call(h,B.target)&&n.dragClickables===!1&&!se,ot){an(B.target,"change",ce),jt(h,"pressInit","onPressInit"),jt(h,"press","onPress"),vl(g,!0),yt=!1;return}if(lt=!k||u===d||h.vars.allowNativeTouchScrolling===!1||h.vars.allowContextMenu&&B&&(B.ctrlKey||B.which>2)?!1:u?"y":"x",yt=!lt&&!h.allowEventDefault,yt&&(Qn(B),an(Bt,"touchforcechange",Qn)),B.changedTouches?(B=ye=B.changedTouches[0],Me=B.identifier):B.pointerId?Me=B.pointerId:ye=Me=null,Jl++,QT(re),ne=h.pointerY=B.pageY,ee=h.pointerX=B.pageX,jt(h,"pressInit","onPressInit"),(lt||h.autoScroll)&&du(t.parentNode),t.parentNode&&h.autoScroll&&!H&&!a&&t.parentNode._gsMaxScrollX&&!Qi.parentNode&&!t.getBBox&&(Qi.style.width=t.parentNode.scrollWidth+"px",t.parentNode.appendChild(Qi)),Ze(),h.tween&&h.tween.kill(),h.isThrowing=!1,Mt.killTweensOf(H||t,_,!0),H&&Mt.killTweensOf(t,{scrollTo:1},!0),h.tween=h.lockedAxis=null,(n.zIndexBoost||!a&&!H&&n.zIndexBoost!==!1)&&(t.style.zIndex=e.zIndex++),h.isPressed=!0,Te=!!(n.onDrag||h._listeners.drag),Pe=!!(n.onMove||h._listeners.move),n.cursor!==!1||n.activeCursor)for(X=g.length;--X>-1;)Mt.set(g[X],{cursor:n.activeCursor||n.cursor||(sa==="grab"?"grabbing":sa)});jt(h,"press","onPress")},z=function(B){var se=B,X,_e,Ce,Fe,rt,Ge;if(!q||Nd||!h.isPressed||!B){yt&&B&&q&&Qn(B);return}if(h.pointerEvent=B,X=B.changedTouches,X){if(B=X[0],B!==ye&&B.identifier!==Me){for(Fe=X.length;--Fe>-1&&(B=X[Fe]).identifier!==Me&&B.target!==t;);if(Fe<0)return}}else if(B.pointerId&&Me&&B.pointerId!==Me)return;if(k&&lt&&!Oe&&(ei.x=B.pageX-(M?lo(D):0),ei.y=B.pageY-(M?ao(D):0),nt&&nt.apply(ei,ei),_e=ei.x,Ce=ei.y,rt=Math.abs(_e-ee),Ge=Math.abs(Ce-ne),(rt!==Ge&&(rt>f||Ge>f)||ra&&lt===Oe)&&(Oe=rt>Ge&&u?"x":"y",lt&&Oe!==lt&&an(Bt,"touchforcechange",Qn),h.vars.lockAxisOnTouchScroll!==!1&&u&&d&&(h.lockedAxis=Oe==="x"?"y":"x",Ar(h.vars.onLockAxis)&&h.vars.onLockAxis.call(h,se)),ra&&lt===Oe))){ce(se);return}!h.allowEventDefault&&(!lt||Oe&&lt!==Oe)&&se.cancelable!==!1?(Qn(se),yt=!0):yt&&(yt=!1),h.autoScroll&&(p=!0),J(B.pageX,B.pageY,Pe)},J=function(B,se,X){var _e=1-h.dragResistance,Ce=1-h.edgeResistance,Fe=h.pointerX,rt=h.pointerY,Ge=Q,Tt=h.x,dt=h.y,At=h.endX,Ut=h.endY,$t=h.endRotation,vn=Ie,un,Cn,Kt,It,Zn,v;h.pointerX=B,h.pointerY=se,M&&(B-=lo(D),se-=ao(D)),a?(It=Math.atan2(Re.y-se,B-Re.x)*Tp,Zn=h.y-It,Zn>180?(Q-=360,h.y=It):Zn<-180&&(Q+=360,h.y=It),h.x!==K||Math.max(Math.abs(ee-B),Math.abs(ne-se))>f?(h.y=It,Kt=K+(Q-It)*_e):Kt=K):(nt&&(v=B*nt.a+se*nt.c+nt.e,se=B*nt.b+se*nt.d+nt.f,B=v),Cn=se-ne,un=B-ee,Cn<f&&Cn>-f&&(Cn=0),un<f&&un>-f&&(un=0),(h.lockAxis||h.lockedAxis)&&(un||Cn)&&(v=h.lockedAxis,v||(h.lockedAxis=v=u&&Math.abs(un)>Math.abs(Cn)?"y":d?"x":null,v&&Ar(h.vars.onLockAxis)&&h.vars.onLockAxis.call(h,h.pointerEvent)),v==="y"?Cn=0:v==="x"&&(un=0)),Kt=Er(K+un*_e),It=Er(Q+Cn*_e)),($e||pt||vt)&&(h.x!==Kt||h.y!==It&&!a)&&(vt&&(Gs.x=Kt,Gs.y=It,v=vt(Gs),Kt=Er(v.x),It=Er(v.y)),$e&&(Kt=Er($e(Kt))),pt&&(It=Er(pt(It)))),j&&(Kt>Ae?Kt=Ae+Math.round((Kt-Ae)*Ce):Kt<Le&&(Kt=Le+Math.round((Kt-Le)*Ce)),a||(It>qe?It=Math.round(qe+(It-qe)*Ce):It<Z&&(It=Math.round(Z+(It-Z)*Ce)))),(h.x!==Kt||h.y!==It&&!a)&&(a?(h.endRotation=h.x=h.endX=Kt,Ie=!0):(d&&(h.y=h.endY=It,Ie=!0),u&&(h.x=h.endX=Kt,Ie=!0)),!X||jt(h,"move","onMove")!==!1?!h.isDragging&&h.isPressed&&(h.isDragging=E=!0,jt(h,"dragstart","onDragStart")):(h.pointerX=Fe,h.pointerY=rt,Q=Ge,h.x=Tt,h.y=dt,h.endX=At,h.endY=Ut,h.endRotation=$t,Ie=vn))},ce=function ae(B,se){if(!q||!h.isPressed||B&&Me!=null&&!se&&(B.pointerId&&B.pointerId!==Me&&B.target!==t||B.changedTouches&&!tw(B.changedTouches,Me))){yt&&B&&q&&Qn(B);return}h.isPressed=!1;var X=B,_e=h.isDragging,Ce=h.vars.allowContextMenu&&B&&(B.ctrlKey||B.which>2),Fe=Mt.delayedCall(.001,Ee),rt,Ge,Tt,dt,At;if(k?(en(k,"touchend",ae),en(k,"touchmove",z),en(k,"touchcancel",ae),en(D,"touchstart",Pp)):en(D,"mousemove",z),en(Bt,"touchforcechange",Qn),(!Ul||!k)&&(en(D,"mouseup",ae),B&&B.target&&en(B.target,"mouseup",ae)),Ie=!1,_e&&(m=wp=Tr(),h.isDragging=!1),Cp(re),ot&&!Ce){B&&(en(B.target,"change",ae),h.pointerEvent=X),vl(g,!1),jt(h,"release","onRelease"),jt(h,"click","onClick"),ot=!1;return}for(Ge=g.length;--Ge>-1;)fu(g[Ge],"cursor",n.cursor||(n.cursor!==!1?sa:null));if(Jl--,B){if(rt=B.changedTouches,rt&&(B=rt[0],B!==ye&&B.identifier!==Me)){for(Ge=rt.length;--Ge>-1&&(B=rt[Ge]).identifier!==Me&&B.target!==t;);if(Ge<0&&!se)return}h.pointerEvent=X,h.pointerX=B.pageX,h.pointerY=B.pageY}return Ce&&X?(Qn(X),yt=!0,jt(h,"release","onRelease")):X&&!_e?(yt=!1,xt&&(n.snap||n.bounds)&&le(n.inertia||n.throwProps),jt(h,"release","onRelease"),(!ra||X.type!=="touchmove")&&X.type.indexOf("cancel")===-1&&(jt(h,"click","onClick"),Tr()-R<300&&jt(h,"doubleclick","onDoubleClick"),dt=X.target||t,R=Tr(),At=function(){R!==je&&h.enabled()&&!h.isPressed&&!X.defaultPrevented&&(dt.click?dt.click():D.createEvent&&(Tt=D.createEvent("MouseEvents"),Tt.initMouseEvent("click",!0,!0,Bt,1,h.pointerEvent.screenX,h.pointerEvent.screenY,h.pointerX,h.pointerY,!1,!1,!1,!1,0,null),dt.dispatchEvent(Tt)))},!ra&&!X.defaultPrevented&&Mt.delayedCall(.05,At))):(le(n.inertia||n.throwProps),!h.allowEventDefault&&X&&(n.dragClickables!==!1||!I.call(h,X.target))&&_e&&(!lt||Oe&&lt===Oe)&&X.cancelable!==!1?(yt=!0,Qn(X)):yt=!1,jt(h,"release","onRelease")),Ve()&&Fe.duration(h.tween.duration()),_e&&jt(h,"dragend","onDragEnd"),!0},Be=function(B){if(B&&h.isDragging&&!H){var se=B.target||t.parentNode,X=se.scrollLeft-se._gsScrollX,_e=se.scrollTop-se._gsScrollY;(X||_e)&&(nt?(ee-=X*nt.a+_e*nt.c,ne-=_e*nt.d+X*nt.b):(ee-=X,ne-=_e),se._gsScrollX+=X,se._gsScrollY+=_e,J(h.pointerX,h.pointerY))}},be=function(B){var se=Tr(),X=se-R<100,_e=se-m<50,Ce=X&&je===R,Fe=h.pointerEvent&&h.pointerEvent.defaultPrevented,rt=X&&it===R,Ge=B.isTrusted||B.isTrusted==null&&X&&Ce;if((Ce||_e&&h.vars.suppressClickOnDrag!==!1)&&B.stopImmediatePropagation&&B.stopImmediatePropagation(),X&&!(h.pointerEvent&&h.pointerEvent.defaultPrevented)&&(!Ce||Ge&&!rt)){Ge&&Ce&&(it=R),je=R;return}(h.isPressed||_e||X)&&(!Ge||!B.detail||!X||Fe)&&Qn(B),!X&&!_e&&!E&&(B&&B.target&&(h.pointerEvent=B),jt(h,"click","onClick"))},ue=function(B){return nt?{x:B.x*nt.a+B.y*nt.c+nt.e,y:B.x*nt.b+B.y*nt.d+nt.f}:{x:B.x,y:B.y}};return ht=e.get(t),ht&&ht.kill(),i.startDrag=function(ae,B){var se,X,_e,Ce;ke(ae||h.pointerEvent,!0),B&&!h.hitTest(ae||h.pointerEvent)&&(se=Ws(ae||h.pointerEvent),X=Ws(t),_e=ue({x:se.left+se.width/2,y:se.top+se.height/2}),Ce=ue({x:X.left+X.width/2,y:X.top+X.height/2}),ee-=_e.x-Ce.x,ne-=_e.y-Ce.y),h.isDragging||(h.isDragging=E=!0,jt(h,"dragstart","onDragStart"))},i.drag=z,i.endDrag=function(ae){return ce(ae||h.pointerEvent,!0)},i.timeSinceDrag=function(){return h.isDragging?0:(Tr()-m)/1e3},i.timeSinceClick=function(){return(Tr()-R)/1e3},i.hitTest=function(ae,B){return e.hitTest(h.target,ae,B)},i.getDirection=function(ae,B){var se=ae==="velocity"&&di?ae:ga(ae)&&!a?"element":"start",X,_e,Ce,Fe,rt,Ge;return se==="element"&&(rt=Ws(h.target),Ge=Ws(ae)),X=se==="start"?h.x-K:se==="velocity"?di.getVelocity(t,l):rt.left+rt.width/2-(Ge.left+Ge.width/2),a?X<0?"counter-clockwise":"clockwise":(B=B||2,_e=se==="start"?h.y-Q:se==="velocity"?di.getVelocity(t,c):rt.top+rt.height/2-(Ge.top+Ge.height/2),Ce=Math.abs(X/_e),Fe=Ce<1/B?"":X<0?"left":"right",Ce<B&&(Fe!==""&&(Fe+="-"),Fe+=_e<0?"up":"down"),Fe)},i.applyBounds=function(ae,B){var se,X,_e,Ce,Fe,rt;if(ae&&n.bounds!==ae)return n.bounds=ae,h.update(!0,B);if(fe(!0),Ue(),j&&!Ve()){if(se=h.x,X=h.y,se>Ae?se=Ae:se<Le&&(se=Le),X>qe?X=qe:X<Z&&(X=Z),(h.x!==se||h.y!==X)&&(_e=!0,h.x=h.endX=se,a?h.endRotation=se:h.y=h.endY=X,Ie=!0,re(!0),h.autoScroll&&!h.isDragging))for(du(t.parentNode),Ce=t,Ki.scrollTop=Bt.pageYOffset!=null?Bt.pageYOffset:D.documentElement.scrollTop!=null?D.documentElement.scrollTop:D.body.scrollTop,Ki.scrollLeft=Bt.pageXOffset!=null?Bt.pageXOffset:D.documentElement.scrollLeft!=null?D.documentElement.scrollLeft:D.body.scrollLeft;Ce&&!rt;)rt=wo(Ce.parentNode),Fe=rt?Ki:Ce.parentNode,d&&Fe.scrollTop>Fe._gsMaxScrollY&&(Fe.scrollTop=Fe._gsMaxScrollY),u&&Fe.scrollLeft>Fe._gsMaxScrollX&&(Fe.scrollLeft=Fe._gsMaxScrollX),Ce=Fe;h.isThrowing&&(_e||h.endX>Ae||h.endX<Le||h.endY>qe||h.endY<Z)&&le(n.inertia||n.throwProps,_e)}return h},i.update=function(ae,B,se){if(B&&h.isPressed){var X=cs(t),_e=U.apply({x:h.x-K,y:h.y-Q}),Ce=cs(t.parentNode,!0);Ce.apply({x:X.e-_e.x,y:X.f-_e.y},_e),h.x-=_e.x-Ce.e,h.y-=_e.y-Ce.f,re(!0),Ze()}var Fe=h.x,rt=h.y;return De(!B),ae?h.applyBounds():(Ie&&se&&re(!0),fe(!0)),B&&(J(h.pointerX,h.pointerY),Ie&&re(!0)),h.isPressed&&!B&&(u&&Math.abs(Fe-h.x)>.01||d&&Math.abs(rt-h.y)>.01&&!a)&&Ze(),h.autoScroll&&(du(t.parentNode,h.isDragging),p=h.isDragging,re(!0),Lp(t,Be),Ip(t,Be)),h},i.enable=function(ae){var B={lazy:!0},se,X,_e;if(n.cursor!==!1&&(B.cursor=n.cursor||sa),Mt.utils.checkPrefix("touchCallout")&&(B.touchCallout="none"),ae!=="soft"){for(Ap(g,u===d?"none":n.allowNativeTouchScrolling&&t.scrollHeight===t.clientHeight==(t.scrollWidth===t.clientHeight)||n.allowEventDefault?"manipulation":u?"pan-y":"pan-x"),X=g.length;--X>-1;)_e=g[X],Ul||an(_e,"mousedown",ke),an(_e,"touchstart",ke),an(_e,"click",be,!0),Mt.set(_e,B),_e.getBBox&&_e.ownerSVGElement&&u!==d&&Mt.set(_e.ownerSVGElement,{touchAction:n.allowNativeTouchScrolling||n.allowEventDefault?"manipulation":u?"pan-y":"pan-x"}),n.allowContextMenu||an(_e,"contextmenu",$);vl(g,!1)}return Ip(t,Be),q=!0,di&&ae!=="soft"&&di.track(H||t,o?"x,y":a?"rotation":"top,left"),t._gsDragID=se=t._gsDragID||"d"+jT++,oo[se]=h,H&&(H.enable(),H.element._gsDragID=se),(n.bounds||a)&&Ze(),n.bounds&&h.applyBounds(),h},i.disable=function(ae){for(var B=h.isDragging,se=g.length,X;--se>-1;)fu(g[se],"cursor",null);if(ae!=="soft"){for(Ap(g,null),se=g.length;--se>-1;)X=g[se],fu(X,"touchCallout",null),en(X,"mousedown",ke),en(X,"touchstart",ke),en(X,"click",be,!0),en(X,"contextmenu",$);vl(g,!0),k&&(en(k,"touchcancel",ce),en(k,"touchend",ce),en(k,"touchmove",z)),en(D,"mouseup",ce),en(D,"mousemove",z)}return Lp(t,Be),q=!1,di&&ae!=="soft"&&(di.untrack(H||t,o?"x,y":a?"rotation":"top,left"),h.tween&&h.tween.kill()),H&&H.disable(),Cp(re),h.isDragging=h.isPressed=ot=!1,B&&jt(h,"dragend","onDragEnd"),h},i.enabled=function(ae,B){return arguments.length?ae?h.enable(B):h.disable(B):q},i.kill=function(){return h.isThrowing=!1,h.tween&&h.tween.kill(),h.disable(),Mt.set(g,{clearProps:"userSelect"}),delete oo[t._gsDragID],h},i.revert=function(){this.kill(),this.styles&&this.styles.revert()},~r.indexOf("scroll")&&(H=i.scrollProxy=new ow(t,JT({onKill:function(){h.isPressed&&ce(null)}},n)),t.style.overflowY=d&&!Fh?"auto":"hidden",t.style.overflowX=u&&!Fh?"auto":"hidden",t=H.content),a?_.rotation=1:(u&&(_[l]=1),d&&(_[c]=1)),L.force3D="force3D"in n?n.force3D:!0,Zg(Ep(i)),i.enable(),i}return e.register=function(n){Mt=n,mu()},e.create=function(n,i){return Oh||mu(!0),Dr(n).map(function(r){return new e(r,i)})},e.get=function(n){return oo[(Dr(n)[0]||{})._gsDragID]},e.timeSinceDrag=function(){return(Tr()-wp)/1e3},e.hitTest=function(n,i,r){if(n===i)return!1;var o=Ws(n),a=Ws(i),l=o.top,c=o.left,u=o.right,d=o.bottom,f=o.width,h=o.height,g=a.left>u||a.right<c||a.top>d||a.bottom<l,_,m,p;return g||!r?!g:(p=(r+"").indexOf("%")!==-1,r=parseFloat(r)||0,_={left:Math.max(c,a.left),top:Math.max(l,a.top)},_.width=Math.min(u,a.right)-_.left,_.height=Math.min(d,a.bottom)-_.top,_.width<0||_.height<0?!1:p?(r*=.01,m=_.width*_.height,m>=f*h*r||m>=a.width*a.height*r):_.width>r&&_.height>r)},e}(aw);ew(Ha.prototype,{pointerX:0,pointerY:0,startX:0,startY:0,deltaX:0,deltaY:0,isDragging:!1,isPressed:!1});Ha.zIndex=1e3;Ha.version="3.13.0";Qg()&&Mt.registerPlugin(Ha);Da.registerPlugin(Ha);class lw{constructor(e,t,n){this.scene=e,this.gui=t,this.canvas=n,this.group=new Cr,this.scene.add(this.group),this.boxModel=null,this.mixer=null,this.animation_1=null,this.animation_2=null,this.handModel=null,this.cards={},this.loadedTextures={},this.params={x:0,y:0,z:0};const i=this.gui.addFolder("Model Position");["x","y","z"].forEach(r=>{i.add(this.params,r,-5,5,.1).name(`pos ${r}`).onChange(()=>{this.group.position.set(this.params.x,this.params.y,this.params.z)}).listen()}),i.open()}load(e,t,n){const i=new Pm;i.onLoad=()=>{Object.entries(this.loadedTextures).forEach(([a,l])=>{this._applyTexture(a,l)}),n&&n(this.group)},new Yb(i).load(e,a=>{this.box=a,this.group.add(a.scene),this.mixer=new Uv(a.scene);const l=a.animations[0],c=a.animations[1];l?(this.animation_1=this.mixer.clipAction(l),this.animation_1.setLoop(ch),this.animation_1.clampWhenFinished=!0):console.warn('Animation with name "amin1" not found in the model!'),c?(this.animation_2=this.mixer.clipAction(c),this.animation_2.setLoop(ch),this.animation_2.clampWhenFinished=!0):console.warn('Animation with name "amin1" not found in the model!')});const o=new Im(i);Object.entries(t).forEach(([a,l])=>{o.load(l,c=>{switch(a){case"albedo":c.colorSpace=nn;break;case"normal":c.colorSpace=gi;break;case"roughness":c.colorSpace=gi;break}c.flipY=!1,c.wrapS=kr,c.wrapT=kr,c.repeat.set(1,1),this.loadedTextures[a]=c})})}play(){this.animation_1&&this.animation_2?(this.animation_1.reset().play(),this.animation_2.reset().play()):console.error("Animation is not loaded or does not exist.")}stop(){this.animation_1&&this.animation_1.stop()}update(e){this.mixer&&this.mixer.update(e)}_applyTexture(e,t){this.group.traverse(n=>{if(n.isMesh){switch(e){case"albedo":t.colorSpace=nn,n.material.map=t,n.material.metalness=1;break;case"normal":n.material.normalMap=t;break;case"roughness":n.material.roughnessMap=t;break}n.material.needsUpdate=!0}})}}const cw=window.devicePixelRatio||1,Np={pack1:{albedo:"textures/pack1/Package_01_Card_2048x2048px_Albedo_01.jpg",normal:"textures/pack1/Package_01_Card_2048x2048px_Normal_01.png",roughness:"textures/pack1/Package_01_Card_2048x2048px_Roughness_01.jpg"},pack3:{albedo:"textures/pack3/Package_03_Cards_2048x2048px_Albedo_01.jpg",normal:"textures/pack3/Package_03_Cards_2048x2048px_Normal_01.png",roughness:"textures/pack3/Package_03_Cards_2048x2048px_Roughness_01.jpg"},pack20:{albedo:"textures/pack20/Package_20_Cards_2048x2048px_Albedo_01.jpg",normal:"textures/pack20/Package_20_Cards_2048x2048px_Normal_01.png",roughness:"textures/pack20/Package_20_Cards_2048x2048px_Roughness_01.jpg"},pack80:{albedo:"textures/pack80/Package_80_Cards_2048x2048px_Albedo_01.jpg",normal:"textures/pack80/Package_80_Cards_2048x2048px_Normal_01.png",roughness:"textures/pack80/Package_80_Cards_2048x2048px_Roughness_01.jpg"}},Op={showGUI:!0,packName:"pack1",environment:{intensity:3,rotation:{x:0,y:.4,z:0}},camera:{position:{x:0,y:0,z:.2}},directionalLight:{color:"#ffffff",intensity:.1,position:{x:1.5,y:-1.1,z:4.1}},pointLight:{color:"#ffffff",intensity:.1,position:{x:.2,y:.2,z:.2}}};class uw{constructor(e,t){this.canvas=e,this.config=JSON.parse(JSON.stringify(Op)),this.isMobile=t,this.scene=new G0,this.clock=new Sv,this.config=JSON.parse(JSON.stringify(Op)),this.renderer=new _b({canvas:e,antialias:!0,alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=nn,this.renderer.physicallyCorrectLights=!0,this.renderer.toneMapping=tm,this.renderer.toneMappingExposure=1.5,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Qp,this.renderer.setPixelRatio(cw),this.modelUrl=null,this.envMapUrl=null,this.gui=null,this.camera=null,this.directionalLight=null,this.pointLight=null,this.params={showGUI:!0,packName:null,environmentIntensity:3},window.addEventListener("resize",()=>this._onResize()),this.onResourcesLoaded=null}initCamera({position:e=[0,0,.2]}={}){const[t,n,i]=e;this.camera=new Tn(60,window.innerWidth/window.innerHeight,.01,2e5),this.camera.position.set(t,n,i)}initLights(){const e=this.config.directionalLight;this.directionalLight=new Dm(e.color,e.intensity),this.directionalLight.position.set(e.position.x,e.position.y,e.position.z),this.scene.add(this.directionalLight);const t=this.config.pointLight;this.pointLight=new Lm(t.color,t.intensity),this.pointLight.position.set(t.position.x,t.position.y,t.position.z),this.scene.add(this.pointLight)}loadEnvironment(e,t){this.envMapUrl=e,new Xb().load(e,i=>{i.mapping=Fl,i.colorSpace=mn,this.scene.environment=i,this.scene.environmentIntensity=this.config.environment.intensity,this.scene.environmentRotation.set(this.config.environment.rotation.x,this.config.environment.rotation.y,this.config.environment.rotation.z),t&&t()})}loadModel(e,t){this.modelUrl=e,this.params.packName=t,this.card&&this.card.group&&this.scene.remove(this.card.group),this.gui&&this.gui.destroy(),this.gui=new pd({title:"Debug GUI"}),this._addGlobalUI(),this._addPackSwitcherUI(),this.envMapUrl&&this._addEnvironmentUI(),this.camera&&this._addCameraUI(),this.directionalLight&&this._addLightUI("DirectionalLight",this.directionalLight,this.config.directionalLight),this.pointLight&&this._addLightUI("PointLight",this.pointLight,this.config.pointLight);const n=Np[t];this.card=new lw(this.scene,this.gui,this.canvas),this.card.load(this.modelUrl,n,i=>{this.onResourcesLoaded&&this.onResourcesLoaded(i)})}render(e){Da.ticker.add(()=>{const t=this.clock.getDelta()*1.2;this.card&&this.card.update(t),e&&e(),this.renderer.render(this.scene,this.camera)})}_addGlobalUI(){const e=this.gui.addFolder("Global");e.add(this.params,"showGUI").name("Toggle GUI").onChange(t=>{this.gui.domElement.style.display=t?"":"none"}),e.open()}_addPackSwitcherUI(){const e=Object.keys(Np);(this.gui.folders.find(n=>n._title==="Global")||this.gui.addFolder("Global")).add(this.params,"packName",e).name("Texture Pack").onChange(n=>{this.loadModel(this.modelUrl,n)})}_addEnvironmentUI(){const e=this.gui.addFolder("Environment"),t=this.config.environment;e.add(t,"intensity",0,4,.1).name("Intensity").onChange(n=>{this.scene.environment&&(this.scene.environmentIntensity=n)}),e.add(t.rotation,"x",0,Math.PI*2,.01).name("Rotation X").onChange(n=>this.scene.environmentRotation.x=n),e.add(t.rotation,"y",0,Math.PI*2,.01).name("Rotation Y").onChange(n=>this.scene.environmentRotation.y=n),e.add(t.rotation,"z",0,Math.PI*2,.01).name("Rotation Z").onChange(n=>this.scene.environmentRotation.z=n),e.open()}_addCameraUI(){const e=this.gui.addFolder("Camera");["x","y","z"].forEach(t=>{e.add(this.camera.position,t,-10,10,.1).name(`pos ${t}`).listen()}),e.open()}_addLightUI(e,t,n){const i=this.gui.addFolder(e);console.log(n),i.addColor(n,"color").name("Color").onChange(o=>t.color.set(o)),i.add(n,"intensity",0,10,.01).name("Intensity").onChange(o=>t.intensity=o);const r=n.position;i.add(r,"x",-20,20,.1).name("pos x").onChange(o=>t.position.x=o),i.add(r,"y",-20,20,.1).name("pos y").onChange(o=>t.position.y=o),i.add(r,"z",-20,20,.1).name("pos z").onChange(o=>t.position.z=o),i.open()}_onResize(){this.camera&&(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))}}var hw="2.0.4",Hh=500,Fp="user-agent",Ao="",Bp="?",Ql="function",Ur="undefined",Ro="object",Vh="string",Pn="browser",tr="cpu",Ri="device",mi="engine",ii="os",co="result",xe="name",oe="type",ge="vendor",Se="version",In="architecture",Oa="major",pe="model",oa="console",st="mobile",Nt="tablet",Qt="smarttv",Ei="wearable",xl="xr",aa="embedded",Xo="inapp",Od="brands",us="formFactors",Fd="fullVersionList",uo="platform",Bd="platformVersion",hc="bitness",Wr="sec-ch-ua",dw=Wr+"-full-version-list",fw=Wr+"-arch",pw=Wr+"-"+hc,mw=Wr+"-form-factors",gw=Wr+"-"+st,_w=Wr+"-"+pe,i_=Wr+"-"+uo,vw=i_+"-version",r_=[Od,Fd,st,pe,uo,Bd,In,us,hc],yl="Amazon",Xs="Apple",kp="ASUS",zp="BlackBerry",is="Google",Hp="Huawei",gu="Lenovo",Vp="Honor",Sl="LG",_u="Microsoft",vu="Motorola",xu="Nvidia",Gp="OnePlus",yu="OPPO",Yo="Samsung",Wp="Sharp",qo="Sony",Su="Xiaomi",Mu="Zebra",Xp="Chrome",Yp="Chromium",wr="Chromecast",Ol="Edge",$o="Firefox",Ko="Opera",bu="Facebook",qp="Sogou",Ys="Mobile ",jo=" Browser",Gh="Windows",xw=typeof window!==Ur,Ln=xw&&window.navigator?window.navigator:void 0,Rr=Ln&&Ln.userAgentData?Ln.userAgentData:void 0,yw=function(s,e){var t={},n=e;if(!ec(e)){n={};for(var i in e)for(var r in e[i])n[r]=e[i][r].concat(n[r]?n[r]:[])}for(var o in s)t[o]=n[o]&&n[o].length%2===0?n[o].concat(s[o]):s[o];return t},dc=function(s){for(var e={},t=0;t<s.length;t++)e[s[t].toUpperCase()]=s[t];return e},Wh=function(s,e){if(typeof s===Ro&&s.length>0){for(var t in s)if(ar(e)==ar(s[t]))return!0;return!1}return Do(s)?ar(e)==ar(s):!1},ec=function(s,e){for(var t in s)return/^(browser|cpu|device|engine|os)$/.test(t)||(e?ec(s[t]):!1)},Do=function(s){return typeof s===Vh},Eu=function(s){if(s){for(var e=[],t=Co(/\\?\"/g,s).split(","),n=0;n<t.length;n++)if(t[n].indexOf(";")>-1){var i=tc(t[n]).split(";v=");e[n]={brand:i[0],version:i[1]}}else e[n]=tc(t[n]);return e}},ar=function(s){return Do(s)?s.toLowerCase():s},Tu=function(s){return Do(s)?Co(/[^\d\.]/g,s).split(".")[0]:void 0},lr=function(s){for(var e in s){var t=s[e];typeof t==Ro&&t.length==2?this[t[0]]=t[1]:this[t]=void 0}return this},Co=function(s,e){return Do(e)?e.replace(s,Ao):e},Zo=function(s){return Co(/\\?\"/g,s)},tc=function(s,e){if(Do(s))return s=Co(/^\s\s*/,s),typeof e===Ur?s:s.substring(0,Hh)},wu=function(s,e){if(!(!s||!e))for(var t=0,n,i,r,o,a,l;t<e.length&&!a;){var c=e[t],u=e[t+1];for(n=i=0;n<c.length&&!a&&c[n];)if(a=c[n++].exec(s),a)for(r=0;r<u.length;r++)l=a[++i],o=u[r],typeof o===Ro&&o.length>0?o.length===2?typeof o[1]==Ql?this[o[0]]=o[1].call(this,l):this[o[0]]=o[1]:o.length>=3&&(typeof o[1]===Ql&&!(o[1].exec&&o[1].test)?o.length>3?this[o[0]]=l?o[1].apply(this,o.slice(2)):void 0:this[o[0]]=l?o[1].call(this,l,o[2]):void 0:o.length==3?this[o[0]]=l?l.replace(o[1],o[2]):void 0:o.length==4?this[o[0]]=l?o[3].call(this,l.replace(o[1],o[2])):void 0:o.length>4&&(this[o[0]]=l?o[3].apply(this,[l.replace(o[1],o[2])].concat(o.slice(4))):void 0)):this[o]=l||void 0;t+=2}},wi=function(s,e){for(var t in e)if(typeof e[t]===Ro&&e[t].length>0){for(var n=0;n<e[t].length;n++)if(Wh(e[t][n],s))return t===Bp?void 0:t}else if(Wh(e[t],s))return t===Bp?void 0:t;return e.hasOwnProperty("*")?e["*"]:s},$p={ME:"4.90","NT 3.51":"3.51","NT 4.0":"4.0",2e3:["5.0","5.01"],XP:["5.1","5.2"],Vista:"6.0",7:"6.1",8:"6.2","8.1":"6.3",10:["6.4","10.0"],NT:""},Kp={embedded:"Automotive",mobile:"Mobile",tablet:["Tablet","EInk"],smarttv:"TV",wearable:"Watch",xr:["VR","XR"],"?":["Desktop","Unknown"],"*":void 0},Sw={Chrome:"Google Chrome",Edge:"Microsoft Edge","Edge WebView2":"Microsoft Edge WebView2","Chrome WebView":"Android WebView","Chrome Headless":"HeadlessChrome","Huawei Browser":"HuaweiBrowser","MIUI Browser":"Miui Browser","Opera Mobi":"OperaMobile",Yandex:"YaBrowser"},jp={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[Se,[xe,Ys+"Chrome"]],[/webview.+edge\/([\w\.]+)/i],[Se,[xe,Ol+" WebView"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[Se,[xe,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[xe,Se],[/opios[\/ ]+([\w\.]+)/i],[Se,[xe,Ko+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[Se,[xe,Ko+" GX"]],[/\bopr\/([\w\.]+)/i],[Se,[xe,Ko]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[Se,[xe,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[Se,[xe,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser)\/([-\w\.]+)/i,/(heytap|ovi|115|surf)browser\/([\d\.]+)/i,/(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i],[xe,Se],[/quark(?:pc)?\/([-\w\.]+)/i],[Se,[xe,"Quark"]],[/\bddg\/([\w\.]+)/i],[Se,[xe,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[Se,[xe,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[Se,[xe,"WeChat"]],[/konqueror\/([\w\.]+)/i],[Se,[xe,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[Se,[xe,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[Se,[xe,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[Se,[xe,"Smart "+gu+jo]],[/(avast|avg)\/([\w\.]+)/i],[[xe,/(.+)/,"$1 Secure"+jo],Se],[/\bfocus\/([\w\.]+)/i],[Se,[xe,$o+" Focus"]],[/\bopt\/([\w\.]+)/i],[Se,[xe,Ko+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[Se,[xe,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[Se,[xe,"Dolphin"]],[/coast\/([\w\.]+)/i],[Se,[xe,Ko+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[Se,[xe,"MIUI"+jo]],[/fxios\/([\w\.-]+)/i],[Se,[xe,Ys+$o]],[/\bqihoobrowser\/?([\w\.]*)/i],[Se,[xe,"360"]],[/\b(qq)\/([\w\.]+)/i],[[xe,/(.+)/,"$1Browser"],Se],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[xe,/(.+)/,"$1"+jo],Se],[/samsungbrowser\/([\w\.]+)/i],[Se,[xe,Yo+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[Se,[xe,qp+" Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[xe,qp+" Mobile"],Se],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[xe,Se],[/(lbbrowser|rekonq)/i],[xe],[/ome\/([\w\.]+) \w* ?(iron) saf/i,/ome\/([\w\.]+).+qihu (360)[es]e/i],[Se,xe],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[xe,bu],Se,[oe,Xo]],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/(daum)apps[\/ ]([\w\.]+)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i],[xe,Se,[oe,Xo]],[/\bgsa\/([\w\.]+) .*safari\//i],[Se,[xe,"GSA"],[oe,Xo]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[Se,[xe,"TikTok"],[oe,Xo]],[/\[(linkedin)app\]/i],[xe,[oe,Xo]],[/(chromium)[\/ ]([-\w\.]+)/i],[xe,Se],[/headlesschrome(?:\/([\w\.]+)| )/i],[Se,[xe,Xp+" Headless"]],[/wv\).+chrome\/([\w\.]+).+edgw\//i],[Se,[xe,Ol+" WebView2"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[xe,Xp+" WebView"],Se],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[Se,[xe,"Android"+jo]],[/chrome\/([\w\.]+) mobile/i],[Se,[xe,Ys+"Chrome"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[xe,Se],[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],[Se,[xe,Ys+"Safari"]],[/iphone .*mobile(?:\/\w+ | ?)safari/i],[[xe,Ys+"Safari"]],[/version\/([\w\.\,]+) .*(safari)/i],[Se,xe],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[xe,[Se,"1"]],[/(webkit|khtml)\/([\w\.]+)/i],[xe,Se],[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],[[xe,Ys+$o],Se],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[xe,"Netscape"],Se],[/(wolvic|librewolf)\/([\w\.]+)/i],[xe,Se],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[Se,[xe,$o+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/\b(links) \(([\w\.]+)/i],[xe,[Se,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[xe,[Se,/[^\d\.]+./,Ao]]],cpu:[[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],[[In,"amd64"]],[/(ia32(?=;))/i,/\b((i[346]|x)86)(pc)?\b/i],[[In,"ia32"]],[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],[[In,"arm64"]],[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],[[In,"armhf"]],[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],[[In,"arm"]],[/((ppc|powerpc)(64)?)( mac|;|\))/i],[[In,/ower/,Ao,ar]],[/ sun4\w[;\)]/i],[[In,"sparc"]],[/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],[[In,ar]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[pe,[ge,Yo],[oe,Nt]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,/sec-(sgh\w+)/i],[pe,[ge,Yo],[oe,st]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[pe,[ge,Xs],[oe,st]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[pe,[ge,Xs],[oe,Nt]],[/(macintosh);/i],[pe,[ge,Xs]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[pe,[ge,Wp],[oe,st]],[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],[pe,[ge,Vp],[oe,Nt]],[/honor([-\w ]+)[;\)]/i],[pe,[ge,Vp],[oe,st]],[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],[pe,[ge,Hp],[oe,Nt]],[/(?:huawei)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[pe,[ge,Hp],[oe,st]],[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,/\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],[[pe,/_/g," "],[ge,Su],[oe,Nt]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,/ ([\w ]+) miui\/v?\d/i],[[pe,/_/g," "],[ge,Su],[oe,st]],[/droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-k]\w[1m]10)\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[pe,[ge,Gp],[oe,st]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[pe,[ge,yu],[oe,st]],[/\b(opd2(\d{3}a?))(?: bui|\))/i],[pe,[ge,wi,{OnePlus:["203","304","403","404","413","415"],"*":yu}],[oe,Nt]],[/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],[pe,[ge,"BLU"],[oe,st]],[/; vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[pe,[ge,"Vivo"],[oe,st]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[pe,[ge,"Realme"],[oe,st]],[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,/lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],[pe,[ge,gu],[oe,Nt]],[/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],[pe,[ge,gu],[oe,st]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,/((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i],[pe,[ge,vu],[oe,st]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[pe,[ge,vu],[oe,Nt]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[pe,[ge,Sl],[oe,Nt]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,/\blg-?([\d\w]+) bui/i],[pe,[ge,Sl],[oe,st]],[/(nokia) (t[12][01])/i],[ge,pe,[oe,Nt]],[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,/nokia[-_ ]?(([-\w\. ]*))/i],[[pe,/_/g," "],[oe,st],[ge,"Nokia"]],[/(pixel (c|tablet))\b/i],[pe,[ge,is],[oe,Nt]],[/droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i],[pe,[ge,is],[oe,st]],[/(google) (pixelbook( go)?)/i],[ge,pe],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[pe,[ge,qo],[oe,st]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[pe,"Xperia Tablet"],[ge,qo],[oe,Nt]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[pe,[ge,yl],[oe,Nt]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[pe,/(.+)/g,"Fire Phone $1"],[ge,yl],[oe,st]],[/(playbook);[-\w\),; ]+(rim)/i],[pe,ge,[oe,Nt]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[pe,[ge,zp],[oe,st]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[pe,[ge,kp],[oe,Nt]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[pe,[ge,kp],[oe,st]],[/(nexus 9)/i],[pe,[ge,"HTC"],[oe,Nt]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[ge,[pe,/_/g," "],[oe,st]],[/tcl (xess p17aa)/i,/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],[pe,[ge,"TCL"],[oe,Nt]],[/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],[pe,[ge,"TCL"],[oe,st]],[/(itel) ((\w+))/i],[[ge,ar],pe,[oe,wi,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[pe,[ge,"Acer"],[oe,Nt]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[pe,[ge,"Meizu"],[oe,st]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[pe,[ge,"Ulefone"],[oe,st]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[pe,[ge,"Energizer"],[oe,st]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[pe,[ge,"Cat"],[oe,st]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[pe,[ge,"Smartfren"],[oe,st]],[/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],[pe,[ge,"Nothing"],[oe,st]],[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,/archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],[pe,[ge,"Archos"],[oe,Nt]],[/archos ([\w ]+)( b|\))/i,/; (ac[3-6]\d\w{2,8})( b|\))/i],[pe,[ge,"Archos"],[oe,st]],[/; (n159v)/i],[pe,[ge,"HMD"],[oe,st]],[/(imo) (tab \w+)/i,/(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i],[ge,pe,[oe,Nt]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (blu|hmd|imo|infinix|lava|oneplus|tcl)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,/(hp) ([\w ]+\w)/i,/(microsoft); (lumia[\w ]+)/i,/(oppo) ?([\w ]+) bui/i],[ge,pe,[oe,st]],[/(kobo)\s(ereader|touch)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i],[ge,pe,[oe,Nt]],[/(surface duo)/i],[pe,[ge,_u],[oe,Nt]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[pe,[ge,"Fairphone"],[oe,st]],[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],[pe,[ge,xu],[oe,Nt]],[/(sprint) (\w+)/i],[ge,pe,[oe,st]],[/(kin\.[onetw]{3})/i],[[pe,/\./g," "],[ge,_u],[oe,st]],[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[pe,[ge,Mu],[oe,Nt]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[pe,[ge,Mu],[oe,st]],[/smart-tv.+(samsung)/i],[ge,[oe,Qt]],[/hbbtv.+maple;(\d+)/i],[[pe,/^/,"SmartTV"],[ge,Yo],[oe,Qt]],[/(vizio)(?: |.+model\/)(\w+-\w+)/i,/tcast.+(lg)e?. ([-\w]+)/i],[ge,pe,[oe,Qt]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[ge,Sl],[oe,Qt]],[/(apple) ?tv/i],[ge,[pe,Xs+" TV"],[oe,Qt]],[/crkey.*devicetype\/chromecast/i],[[pe,wr+" Third Generation"],[ge,is],[oe,Qt]],[/crkey.*devicetype\/([^/]*)/i],[[pe,/^/,"Chromecast "],[ge,is],[oe,Qt]],[/fuchsia.*crkey/i],[[pe,wr+" Nest Hub"],[ge,is],[oe,Qt]],[/crkey/i],[[pe,wr],[ge,is],[oe,Qt]],[/(portaltv)/i],[pe,[ge,bu],[oe,Qt]],[/droid.+aft(\w+)( bui|\))/i],[pe,[ge,yl],[oe,Qt]],[/(shield \w+ tv)/i],[pe,[ge,xu],[oe,Qt]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[pe,[ge,Wp],[oe,Qt]],[/(bravia[\w ]+)( bui|\))/i],[pe,[ge,qo],[oe,Qt]],[/(mi(tv|box)-?\w+) bui/i],[pe,[ge,Su],[oe,Qt]],[/Hbbtv.*(technisat) (.*);/i],[ge,pe,[oe,Qt]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[ge,/.+\/(\w+)/,"$1",wi,{LG:"lge"}],[pe,tc],[oe,Qt]],[/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],[pe,[oe,Qt]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:|large screen[\w ]+safari)\b/i],[[oe,Qt]],[/(playstation \w+)/i],[pe,[ge,qo],[oe,oa]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[pe,[ge,_u],[oe,oa]],[/(ouya)/i,/(nintendo) (\w+)/i,/(retroid) (pocket ([^\)]+))/i],[ge,pe,[oe,oa]],[/droid.+; (shield)( bui|\))/i],[pe,[ge,xu],[oe,oa]],[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],[pe,[ge,Yo],[oe,Ei]],[/((pebble))app/i,/(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],[ge,pe,[oe,Ei]],[/(ow(?:19|20)?we?[1-3]{1,3})/i],[pe,[ge,yu],[oe,Ei]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[pe,[ge,Xs],[oe,Ei]],[/(opwwe\d{3})/i],[pe,[ge,Gp],[oe,Ei]],[/(moto 360)/i],[pe,[ge,vu],[oe,Ei]],[/(smartwatch 3)/i],[pe,[ge,qo],[oe,Ei]],[/(g watch r)/i],[pe,[ge,Sl],[oe,Ei]],[/droid.+; (wt63?0{2,3})\)/i],[pe,[ge,Mu],[oe,Ei]],[/droid.+; (glass) \d/i],[pe,[ge,is],[oe,xl]],[/(pico) (4|neo3(?: link|pro)?)/i],[ge,pe,[oe,xl]],[/(quest( \d| pro)?s?).+vr/i],[pe,[ge,bu],[oe,xl]],[/mobile vr; rv.+firefox/i],[[oe,xl]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[ge,[oe,aa]],[/(aeobc)\b/i],[pe,[ge,yl],[oe,aa]],[/(homepod).+mac os/i],[pe,[ge,Xs],[oe,aa]],[/windows iot/i],[[oe,aa]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i],[pe,[oe,wi,{mobile:"Mobile",xr:"VR","*":Nt}]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[oe,Nt]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[oe,st]],[/droid .+?; ([\w\. -]+)( bui|\))/i],[pe,[ge,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[Se,[xe,Ol+"HTML"]],[/(arkweb)\/([\w\.]+)/i],[xe,Se],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[Se,[xe,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[xe,Se],[/ladybird\//i],[[xe,"LibWeb"]],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[Se,xe]],os:[[/(windows nt) (6\.[23]); arm/i],[[xe,/N/,"R"],[Se,wi,$p]],[/(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,/(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i],[xe,Se],[/windows nt ?([\d\.\)]*)(?!.+xbox)/i,/\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i],[[Se,/(;|\))/g,"",wi,$p],[xe,Gh]],[/(windows ce)\/?([\d\.]*)/i],[xe,Se],[/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[Se,/_/g,"."],[xe,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i],[[xe,"macOS"],[Se,/_/g,"."]],[/android ([\d\.]+).*crkey/i],[Se,[xe,wr+" Android"]],[/fuchsia.*crkey\/([\d\.]+)/i],[Se,[xe,wr+" Fuchsia"]],[/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],[Se,[xe,wr+" SmartSpeaker"]],[/linux.*crkey\/([\d\.]+)/i],[Se,[xe,wr+" Linux"]],[/crkey\/([\d\.]+)/i],[Se,[xe,wr]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[Se,xe],[/(ubuntu) ([\w\.]+) like android/i],[[xe,/(.+)/,"$1 Touch"],Se],[/(harmonyos)[\/ ]?([\d\.]*)/i,/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i],[xe,Se],[/\(bb(10);/i],[Se,[xe,zp]],[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],[Se,[xe,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[Se,[xe,$o+" OS"]],[/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,/webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i],[Se,[xe,"webOS"]],[/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],[[Se,wi,{25:"120",24:"108",23:"94",22:"87",6:"79",5:"68",4:"53",3:"38",2:"538",1:"537","*":"TV"}],[xe,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[Se,[xe,"watchOS"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[xe,"Chrome OS"],Se],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) (\w+)/i,/(xbox); +xbox ([^\);]+)/i,/(pico) .+os([\w\.]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/linux.+(mint)[\/\(\) ]?([\w\.]*)/i,/(mageia|vectorlinux|fuchsia|arcaos|arch(?= ?linux))[;l ]([\d\.]*)/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire|knoppix)(?: gnu[\/ ]linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/\b(aix)[; ]([1-9\.]{0,4})/i,/(hurd|linux|morphos)(?: (?:arm|x86|ppc)\w*| ?)([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) ?(r\d)?/i],[xe,Se],[/(sunos) ?([\d\.]*)/i],[[xe,"Solaris"],Se],[/\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[xe,Se]]},Ml=function(){var s={init:{},isIgnore:{},isIgnoreRgx:{},toString:{}};return lr.call(s.init,[[Pn,[xe,Se,Oa,oe]],[tr,[In]],[Ri,[oe,pe,ge]],[mi,[xe,Se]],[ii,[xe,Se]]]),lr.call(s.isIgnore,[[Pn,[Se,Oa]],[mi,[Se]],[ii,[Se]]]),lr.call(s.isIgnoreRgx,[[Pn,/ ?browser$/i],[ii,/ ?os$/i]]),lr.call(s.toString,[[Pn,[xe,Se]],[tr,[In]],[Ri,[ge,pe]],[mi,[xe,Se]],[ii,[xe,Se]]]),s}(),Mw=function(s,e){var t=Ml.init[e],n=Ml.isIgnore[e]||0,i=Ml.isIgnoreRgx[e]||0,r=Ml.toString[e]||0;function o(){lr.call(this,t)}return o.prototype.getItem=function(){return s},o.prototype.withClientHints=function(){return Rr?Rr.getHighEntropyValues(r_).then(function(a){return s.setCH(new s_(a,!1)).parseCH().get()}):s.parseCH().get()},o.prototype.withFeatureCheck=function(){return s.detectFeature().get()},e!=co&&(o.prototype.is=function(a){var l=!1;for(var c in this)if(this.hasOwnProperty(c)&&!Wh(n,c)&&ar(i?Co(i,this[c]):this[c])==ar(i?Co(i,a):a)){if(l=!0,a!=Ur)break}else if(a==Ur&&l){l=!l;break}return l},o.prototype.toString=function(){var a=Ao;for(var l in r)typeof this[r[l]]!==Ur&&(a+=(a?" ":Ao)+this[r[l]]);return a||Ur}),Rr||(o.prototype.then=function(a){var l=this,c=function(){for(var d in l)l.hasOwnProperty(d)&&(this[d]=l[d])};c.prototype={is:o.prototype.is,toString:o.prototype.toString};var u=new c;return a(u),u}),new o};function s_(s,e){if(s=s||{},lr.call(this,r_),e)lr.call(this,[[Od,Eu(s[Wr])],[Fd,Eu(s[dw])],[st,/\?1/.test(s[gw])],[pe,Zo(s[_w])],[uo,Zo(s[i_])],[Bd,Zo(s[vw])],[In,Zo(s[fw])],[us,Eu(s[mw])],[hc,Zo(s[pw])]]);else for(var t in s)this.hasOwnProperty(t)&&typeof s[t]!==Ur&&(this[t]=s[t])}function Zp(s,e,t,n){return this.get=function(i){return i?this.data.hasOwnProperty(i)?this.data[i]:void 0:this.data},this.set=function(i,r){return this.data[i]=r,this},this.setCH=function(i){return this.uaCH=i,this},this.detectFeature=function(){if(Ln&&Ln.userAgent==this.ua)switch(this.itemType){case Pn:Ln.brave&&typeof Ln.brave.isBrave==Ql&&this.set(xe,"Brave");break;case Ri:!this.get(oe)&&Rr&&Rr[st]&&this.set(oe,st),this.get(pe)=="Macintosh"&&Ln&&typeof Ln.standalone!==Ur&&Ln.maxTouchPoints&&Ln.maxTouchPoints>2&&this.set(pe,"iPad").set(oe,Nt);break;case ii:!this.get(xe)&&Rr&&Rr[uo]&&this.set(xe,Rr[uo]);break;case co:var i=this.data,r=function(o){return i[o].getItem().detectFeature().get()};this.set(Pn,r(Pn)).set(tr,r(tr)).set(Ri,r(Ri)).set(mi,r(mi)).set(ii,r(ii))}return this},this.parseUA=function(){return this.itemType!=co&&wu.call(this.data,this.ua,this.rgxMap),this.itemType==Pn&&this.set(Oa,Tu(this.get(Se))),this},this.parseCH=function(){var i=this.uaCH,r=this.rgxMap;switch(this.itemType){case Pn:case mi:var o=i[Fd]||i[Od],a;if(o)for(var l in o){var c=o[l].brand||o[l],u=o[l].version;this.itemType==Pn&&!/not.a.brand/i.test(c)&&(!a||/Chrom/.test(a)&&c!=Yp||a==Ol&&/WebView2/.test(c))&&(c=wi(c,Sw),a=this.get(xe),a&&!/Chrom/.test(a)&&/Chrom/.test(c)||this.set(xe,c).set(Se,u).set(Oa,Tu(u)),a=c),this.itemType==mi&&c==Yp&&this.set(Se,u)}break;case tr:var d=i[In];d&&(d&&i[hc]=="64"&&(d+="64"),wu.call(this.data,d+";",r));break;case Ri:if(i[st]&&this.set(oe,st),i[pe]&&(this.set(pe,i[pe]),!this.get(oe)||!this.get(ge))){var f={};wu.call(f,"droid 9; "+i[pe]+")",r),!this.get(oe)&&f.type&&this.set(oe,f.type),!this.get(ge)&&f.vendor&&this.set(ge,f.vendor)}if(i[us]){var h;if(typeof i[us]!="string")for(var g=0;!h&&g<i[us].length;)h=wi(i[us][g++],Kp);else h=wi(i[us],Kp);this.set(oe,h)}break;case ii:var _=i[uo];if(_){var m=i[Bd];_==Gh&&(m=parseInt(Tu(m),10)>=13?"11":"10"),this.set(xe,_).set(Se,m)}this.get(xe)==Gh&&i[pe]=="Xbox"&&this.set(xe,"Xbox").set(Se,void 0);break;case co:var p=this.data,S=function(b){return p[b].getItem().setCH(i).parseCH().get()};this.set(Pn,S(Pn)).set(tr,S(tr)).set(Ri,S(Ri)).set(mi,S(mi)).set(ii,S(ii))}return this},lr.call(this,[["itemType",s],["ua",e],["uaCH",n],["rgxMap",t],["data",Mw(this,s)]]),this}function pr(s,e,t){if(typeof s===Ro?(ec(s,!0)?(typeof e===Ro&&(t=e),e=s):(t=s,e=void 0),s=void 0):typeof s===Vh&&!ec(e,!0)&&(t=e,e=void 0),t&&typeof t.append===Ql){var n={};t.forEach(function(l,c){n[c]=l}),t=n}if(!(this instanceof pr))return new pr(s,e,t).getResult();var i=typeof s===Vh?s:t&&t[Fp]?t[Fp]:Ln&&Ln.userAgent?Ln.userAgent:Ao,r=new s_(t,!0),o=e?yw(jp,e):jp,a=function(l){return l==co?function(){return new Zp(l,i,o,r).set("ua",i).set(Pn,this.getBrowser()).set(tr,this.getCPU()).set(Ri,this.getDevice()).set(mi,this.getEngine()).set(ii,this.getOS()).get()}:function(){return new Zp(l,i,o[l],r).parseUA().get()}};return lr.call(this,[["getBrowser",a(Pn)],["getCPU",a(tr)],["getDevice",a(Ri)],["getEngine",a(mi)],["getOS",a(ii)],["getResult",a(co)],["getUA",function(){return i}],["setUA",function(l){return Do(l)&&(i=l.length>Hh?tc(l,Hh):l),this}]]).setUA(i),this}pr.VERSION=hw;pr.BROWSER=dc([xe,Se,Oa,oe]);pr.CPU=dc([In]);pr.DEVICE=dc([pe,ge,oe,oa,st,Qt,Nt,Ei,aa]);pr.ENGINE=pr.OS=dc([xe,Se]);(async function(){const s=document.getElementById("webgl"),n=new pr().getResult().device.type==="mobile",i=new uw(s,n);i.initCamera({position:[0,0,.23]}),i.initLights(),i.onResourcesLoaded=f=>{console.log("😊 Всё загрузилось, группа модели:",f),document.getElementById("playBtn").onclick=()=>i.card.play()},i.loadEnvironment("light/GSG_ProStudiosMetal_Vol2_23_Env_sm_compress.exr",()=>{console.log("🗺️ Карта окружения загружена!")}),i.loadModel("model/model2.glb","pack1");let r=0;const o=window.innerWidth/2;let a=0;const l=.5;function c(f){r=(f.clientX-o)/o,a=r*l}if(document.addEventListener("mousemove",c),i.isMobile){let h=function(_){if(!i.card)return;const m=_.touches[0].clientX,p=window.innerWidth,S=m<p/2?-f:f;Da.to(i.card.group.rotation,{y:S,duration:.5,ease:"power2.out",overwrite:"auto"})},g=function(){i.card&&Da.to(i.card.group.rotation,{y:0,duration:.7,ease:"power2.out"})};var u=h,d=g;const f=15*(Math.PI/180);document.addEventListener("touchmove",h,{passive:!0}),document.addEventListener("touchend",g),document.addEventListener("touchcancel",g)}i.render(()=>{if(i.card&&!i.isMobile){let f=.05;i.card.group.rotation.y+=(a-i.card.group.rotation.y)*f}})})();
