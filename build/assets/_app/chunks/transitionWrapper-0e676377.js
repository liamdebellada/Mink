import{S as t,i as s,s as a,D as n,e as o,c as e,a as r,d as c,f as i,E as l,v as u,I as d,J as p,r as $,K as f}from"./vendor-826212b7.js";function m(t){const s=t-1;return s*s*s+1}function y(t,{delay:s=0,duration:a=400,easing:n=m,x:o=0,y:e=0,opacity:r=0}={}){const c=getComputedStyle(t),i=+c.opacity,l="none"===c.transform?"":c.transform,u=i*(1-r);return{delay:s,duration:a,easing:n,css:(t,s)=>`\n\t\t\ttransform: ${l} translate(${(1-t)*o}px, ${(1-t)*e}px);\n\t\t\topacity: ${i-u*s}`}}function x(t){let s,a,m,x;const v=t[1].default,g=n(v,t,t[0],null);return{c(){s=o("div"),g&&g.c()},l(t){s=e(t,"DIV",{});var a=r(s);g&&g.l(a),a.forEach(c)},m(t,a){i(t,s,a),g&&g.m(s,null),x=!0},p(t,[s]){g&&g.p&&1&s&&l(g,v,t,t[0],s,null,null)},i(t){x||(u(g,t),d((()=>{m&&m.end(1),a||(a=p(s,y,{x:50,duration:250,delay:300})),a.start()})),x=!0)},o(t){$(g,t),a&&a.invalidate(),m=f(s,y,{x:-50,duration:250}),x=!1},d(t){t&&c(s),g&&g.d(t),t&&m&&m.end()}}}function v(t,s,a){let{$$slots:n={},$$scope:o}=s;return t.$$set=t=>{"$$scope"in t&&a(0,o=t.$$scope)},[o,n]}class g extends t{constructor(t){super(),s(this,t,v,x,a,{})}}export{g as T};
