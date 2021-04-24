import{S as s,i as e,s as a,e as t,c as n,a as r,d as l,b as o,f as c,F as i,H as $,G as f,t as m,k as p,g,n as h,h as u,j as d,m as v,o as b,v as E,r as w,w as y,L as x}from"../chunks/vendor-8efcf3a9.js";import{g as I,T as D,P as k}from"../chunks/transitionWrapper-75f8e9ba.js";import"../chunks/singletons-6b53f818.js";function V(s){let e,a,m,p,g;return{c(){e=t("button"),a=t("img"),this.h()},l(s){e=n(s,"BUTTON",{class:!0});var t=r(e);a=n(t,"IMG",{class:!0,alt:!0,src:!0}),t.forEach(l),this.h()},h(){o(a,"class","icon svelte-14g9ex0"),o(a,"alt","back"),a.src!==(m="/back.svg")&&o(a,"src","/back.svg"),o(e,"class","back svelte-14g9ex0")},m(t,n){c(t,e,n),i(e,a),p||(g=$(e,"click",s[0]),p=!0)},p:f,i:f,o:f,d(s){s&&l(e),p=!1,g()}}}function j(s){return[()=>I("/")]}class H extends s{constructor(s){super(),e(this,s,j,V,a,{})}}function T(s){let e,a,$,d,v,b,E,w=s[0].label+"";return{c(){e=t("div"),a=t("div"),$=m(w),d=p(),v=t("input"),this.h()},l(s){e=n(s,"DIV",{class:!0});var t=r(e);a=n(t,"DIV",{class:!0,for:!0});var o=r(a);$=g(o,w),o.forEach(l),d=h(t),v=n(t,"INPUT",{name:!0,placeholder:!0,class:!0}),t.forEach(l),this.h()},h(){o(a,"class","inputRowText svelte-mqz5gp"),o(a,"for","inputRow"),o(v,"name",b=s[0].i),o(v,"placeholder",E=s[0].placeHolder),o(v,"class","inputRow svelte-mqz5gp"),o(e,"class","formRowContainer svelte-mqz5gp")},m(s,t){c(s,e,t),i(e,a),i(a,$),i(e,d),i(e,v)},p(s,[e]){1&e&&w!==(w=s[0].label+"")&&u($,w),1&e&&b!==(b=s[0].i)&&o(v,"name",b),1&e&&E!==(E=s[0].placeHolder)&&o(v,"placeholder",E)},i:f,o:f,d(s){s&&l(e)}}}function L(s,e,a){let{options:t={}}=e;return s.$$set=s=>{"options"in s&&a(0,t=s.options)},[t]}class A extends s{constructor(s){super(),e(this,s,L,T,a,{options:0})}}function F(s){let e,a,$,d,v,b,E,w,y,x=s[0].label+"";return{c(){e=t("div"),a=t("label"),$=t("input"),v=p(),b=t("span"),E=p(),w=t("div"),y=m(x),this.h()},l(s){e=n(s,"DIV",{class:!0});var t=r(e);a=n(t,"LABEL",{});var o=r(a);$=n(o,"INPUT",{name:!0,class:!0,type:!0}),v=h(o),b=n(o,"SPAN",{class:!0}),r(b).forEach(l),o.forEach(l),E=h(t),w=n(t,"DIV",{});var c=r(w);y=g(c,x),c.forEach(l),t.forEach(l),this.h()},h(){o($,"name",d=s[0].i),o($,"class","cBox svelte-19pehdj"),o($,"type","checkbox"),o(b,"class","svelte-19pehdj"),o(e,"class","aList svelte-19pehdj")},m(s,t){c(s,e,t),i(e,a),i(a,$),i(a,v),i(a,b),i(e,E),i(e,w),i(w,y)},p(s,[e]){1&e&&d!==(d=s[0].i)&&o($,"name",d),1&e&&x!==(x=s[0].label+"")&&u(y,x)},i:f,o:f,d(s){s&&l(e)}}}function P(s,e,a){let{options:t={}}=e;return s.$$set=s=>{"options"in s&&a(0,t=s.options)},[t]}class R extends s{constructor(s){super(),e(this,s,P,F,a,{options:0})}}function B(s){let e,a,u,I,D,V,j,T,L,F,P,B,C,N,S,q,z,O,U,G,M,W,J,K,Q,X,Y,Z,_;return u=new H({}),F=new A({props:{options:{label:"Child's name",placeHolder:"Enter name",i:"name"}}}),B=new A({props:{options:{label:"Child's age",placeHolder:"Enter age",i:"age"}}}),N=new A({props:{options:{label:"Difficulty",placeHolder:"1-3",i:"difficulty"}}}),U=new R({props:{options:{label:"Colour blindness",i:"cb"}}}),M=new R({props:{options:{label:"Hearing issues",i:"hi"}}}),J=new R({props:{options:{label:"Low vision",i:"lv"}}}),X=new k({props:{message:"Finish"}}),{c(){e=t("div"),a=t("div"),d(u.$$.fragment),I=p(),D=t("p"),V=m("Setup"),j=p(),T=t("div"),L=t("form"),d(F.$$.fragment),P=p(),d(B.$$.fragment),C=p(),d(N.$$.fragment),S=p(),q=t("div"),z=m("Accessibility"),O=p(),d(U.$$.fragment),G=p(),d(M.$$.fragment),W=p(),d(J.$$.fragment),K=p(),Q=t("div"),d(X.$$.fragment),this.h()},l(s){e=n(s,"DIV",{class:!0});var t=r(e);a=n(t,"DIV",{class:!0});var o=r(a);v(u.$$.fragment,o),I=h(o),D=n(o,"P",{class:!0});var c=r(D);V=g(c,"Setup"),c.forEach(l),o.forEach(l),j=h(t),T=n(t,"DIV",{class:!0});var i=r(T);L=n(i,"FORM",{id:!0});var $=r(L);v(F.$$.fragment,$),P=h($),v(B.$$.fragment,$),C=h($),v(N.$$.fragment,$),S=h($),q=n($,"DIV",{class:!0});var f=r(q);z=g(f,"Accessibility"),f.forEach(l),O=h($),v(U.$$.fragment,$),G=h($),v(M.$$.fragment,$),W=h($),v(J.$$.fragment,$),$.forEach(l),K=h(i),Q=n(i,"DIV",{class:!0});var m=r(Q);v(X.$$.fragment,m),m.forEach(l),i.forEach(l),t.forEach(l),this.h()},h(){o(D,"class","headerText svelte-mvd0y"),o(a,"class","formHeader svelte-mvd0y"),o(q,"class","accessList svelte-mvd0y"),o(L,"id","setupForm"),o(Q,"class","bottomArea svelte-mvd0y"),o(T,"class","formBody parent svelte-mvd0y"),o(e,"class","parent svelte-mvd0y")},m(t,n){c(t,e,n),i(e,a),b(u,a,null),i(a,I),i(a,D),i(D,V),i(e,j),i(e,T),i(T,L),b(F,L,null),i(L,P),b(B,L,null),i(L,C),b(N,L,null),i(L,S),i(L,q),i(q,z),i(L,O),b(U,L,null),i(L,G),b(M,L,null),i(L,W),b(J,L,null),i(T,K),i(T,Q),b(X,Q,null),Y=!0,Z||(_=$(L,"submit",x(s[0])),Z=!0)},p:f,i(s){Y||(E(u.$$.fragment,s),E(F.$$.fragment,s),E(B.$$.fragment,s),E(N.$$.fragment,s),E(U.$$.fragment,s),E(M.$$.fragment,s),E(J.$$.fragment,s),E(X.$$.fragment,s),Y=!0)},o(s){w(u.$$.fragment,s),w(F.$$.fragment,s),w(B.$$.fragment,s),w(N.$$.fragment,s),w(U.$$.fragment,s),w(M.$$.fragment,s),w(J.$$.fragment,s),w(X.$$.fragment,s),Y=!1},d(s){s&&l(e),y(u),y(F),y(B),y(N),y(U),y(M),y(J),y(X),Z=!1,_()}}}function C(s){let e,a;return e=new D({props:{$$slots:{default:[B]},$$scope:{ctx:s}}}),{c(){d(e.$$.fragment)},l(s){v(e.$$.fragment,s)},m(s,t){b(e,s,t),a=!0},p(s,[a]){const t={};2&a&&(t.$$scope={dirty:a,ctx:s}),e.$set(t)},i(s){a||(E(e.$$.fragment,s),a=!0)},o(s){w(e.$$.fragment,s),a=!1},d(s){y(e,s)}}}function N(s){return[s=>{const e=new FormData(s.target);console.log(Object.fromEntries(e.entries()))}]}export default class extends s{constructor(s){super(),e(this,s,N,C,a,{})}}
