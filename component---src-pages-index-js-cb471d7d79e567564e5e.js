(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{RXBc:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),i=t.n(r),a=t("vrFN"),o=t("MUpH"),c=t("vOnD"),u=t("rePB"),m=t("89ka");function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(u.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(){var e=Object(o.a)(["\n    font-size: 3rem;\n  "]);return s=function(){return e},e}function g(){var e=Object(o.a)(["\n    font-size: 2rem;\n  "]);return g=function(){return e},e}var d=c.e.span.withConfig({displayName:"typeWriter__Text",componentId:"b040re-0"})(["font-size:1.5rem;"," ",""],m.d.sm(g()),m.d.md(s())),p=30,h=150,b=function(e){var n=e.messages,t=(e.heading,Object(r.useState)({text:"",message:"",isDeleting:!1,loopNum:0,typingSpeed:h})),a=t[0],o=t[1];Object(r.useEffect)((function(){var e;return function n(){o((function(e){return f(f({},e),{},{text:c(e),typingSpeed:m(e)})})),e=setTimeout(n,a.typingSpeed)}(),function(){return clearTimeout(e)}}),[a.isDeleting]),Object(r.useEffect)((function(){var e;if(a.isDeleting||a.text!==a.message){if(a.isDeleting&&""===a.text){e=setTimeout((function(){o((function(e){return f(f({},e),{},{isDeleting:!1,loopNum:e.loopNum+1,message:u(e,n)})}))}),500)}}else if(a.loopNum!==n.length){e=setTimeout((function(){o((function(e){return f(f({},e),{},{isDeleting:!0})}))}),1e3)}return function(){return clearTimeout(e)}}),[a.text,a.message,a.isDeleting,n]);var c=function(e){return e.isDeleting?e.message.substring(0,e.text.length-1):e.message.substring(0,e.text.length+1)},u=function(e,n){return n[Number(e.loopNum)%Number(n.length)]},m=function(e){return e.isDeleting?h:p};return i.a.createElement(d,null,a.text)},v=t("HJKE");function O(){var e=Object(o.a)(["\n    font-size: 2.5rem;\n    margin-right: 14rem;\n  "]);return O=function(){return e},e}function j(){var e=Object(o.a)(["\n    font-size: 2rem;\n  "]);return j=function(){return e},e}function w(){var e=Object(o.a)(["\n    font-size: 1.5rem;\n     margin-right: 6rem;\n  "]);return w=function(){return e},e}function y(){var e=Object(o.a)(["\n    font-size: 2.5rem;\n    margin-right: 14rem;\n\n  "]);return y=function(){return e},e}function x(){var e=Object(o.a)(["\n    font-size: 2rem;\n  "]);return x=function(){return e},e}function E(){var e=Object(o.a)(["\n    font-size: 1.5rem;\n    margin-right: 6rem;\n  "]);return E=function(){return e},e}function k(){var e=Object(o.a)(["\n    margin-left: 14rem;\n  "]);return k=function(){return e},e}function D(){var e=Object(o.a)(["\n    height: 3rem;\n  "]);return D=function(){return e},e}function N(){var e=Object(o.a)(["\n    height: 2rem;\n    margin-left: 6rem;\n  "]);return N=function(){return e},e}function _(){var e=Object(o.a)(["\n    font-size: 5rem;\n    margin-left: 14rem;\n  "]);return _=function(){return e},e}function z(){var e=Object(o.a)(["\n    font-size: 4rem;\n  "]);return z=function(){return e},e}function I(){var e=Object(o.a)(["\n    font-size: 3rem;\n    margin-left: 6rem;\n  "]);return I=function(){return e},e}function C(){var e=Object(o.a)(["\n    text-align: right;\n  "]);return C=function(){return e},e}function P(){var e=Object(o.a)(["\n      text-align: left;\n  "]);return P=function(){return e},e}function H(){var e=Object(o.a)(["\n    padding: 0 3rem;\n  "]);return H=function(){return e},e}function T(){var e=Object(o.a)(["\n    padding: 0;\n  "]);return T=function(){return e},e}var S=c.e.div.withConfig({displayName:"hero__Container",componentId:"ahkmwi-0"})(["background:linear-gradient( 165deg,",","," 50%,"," 50%,"," );padding:0 2rem;min-height:calc(100vh - ",");display:grid;grid-row-gap:1rem;",";",";"],(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.secondary}),v.b.headerHeight,m.d.sm(T()),m.d.lg(H())),B=c.e.div.withConfig({displayName:"hero__Top",componentId:"ahkmwi-1"})(["text-align:center;align-self:center;",""],m.d.sm(P())),J=c.e.div.withConfig({displayName:"hero__Bottom",componentId:"ahkmwi-2"})(["align-self:center;text-align:center;padding-top:3rem;",""],m.d.sm(C())),F=c.e.h1.withConfig({displayName:"hero__Heading",componentId:"ahkmwi-3"})(["font-size:1.75rem;"," "," ",""],m.d.sm(I()),m.d.lg(z()),m.d.xl(_())),L=c.e.div.withConfig({displayName:"hero__HeightWrapper",componentId:"ahkmwi-4"})(["height:1.5rem;"," "," ",""],m.d.sm(N()),m.d.md(D()),m.d.xl(k())),W=c.e.p.withConfig({displayName:"hero__LineOne",componentId:"ahkmwi-5"})(["font-size:1.25rem;color:",";"," "," ",";"],(function(e){return e.theme.colors.textDark}),m.d.sm(E()),m.d.lg(x()),m.d.xl(y())),q=c.e.p.withConfig({displayName:"hero__LineTwo",componentId:"ahkmwi-6"})(["font-size:1.25rem;color:",";"," "," ",""],(function(e){return e.theme.colors.textDark}),m.d.sm(w()),m.d.lg(j()),m.d.xl(O())),G=function(){return i.a.createElement(S,null,i.a.createElement(B,null,i.a.createElement(F,null,"Hi, I am Gintaras"),i.a.createElement(L,null,i.a.createElement(b,{messages:["web developer","javascript developer","front-end developer","back-end developer","full-stack developer"],speed:500}))),i.a.createElement(J,null,i.a.createElement(W,null,"I create responsive and accessible web apps."),i.a.createElement(q,null,i.a.createElement("span",{role:"img","aria-label":"Heart"},"❤")," ","javascript and"," ",i.a.createElement("span",{role:"img","aria-label":"Basketball"},"🏀"))))};n.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,{title:"Home"}),i.a.createElement(G,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-cb471d7d79e567564e5e.js.map