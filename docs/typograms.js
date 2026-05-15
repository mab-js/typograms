/*!
 * typograms (mab-js fork)
 * https://github.com/mab-js/typograms
 *
 * Originally developed by Google (google/typograms, archived 2025-01-21).
 * Apache License 2.0 -- see LICENSE and NOTICE.
 */
"use strict";var typograms=(()=>{var E=Object.defineProperty;var G=Object.getOwnPropertyDescriptor;var M=Object.getOwnPropertyNames;var Z=Object.prototype.hasOwnProperty;var $=(i,r)=>{for(var n in r)E(i,n,{get:r[n],enumerable:!0})},H=(i,r,n,l)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of M(r))!Z.call(i,a)&&a!==n&&E(i,a,{get:()=>r[a],enumerable:!(l=G(r,a))||l.enumerable});return i};var V=i=>H(E({},"__esModule",{value:!0}),i);var W={};$(W,{create:()=>N});function v(i,[r,n]){let l=" ",a=" ",c=" ",o=" ",u=" ",s=" ",t=" ",e=" ",p=i[n],b=n>0?i[n-1]:void 0,w=n<i.length-1?i[n+1]:void 0;return b&&(a=b[r]||" "),p&&r<p.length-1&&(c=p[r+1]||" "),w&&(o=w[r]||" "),p&&r>0&&(l=p[r-1]||" "),b&&r<b.length-1&&(u=b[r+1]||" "),w&&r<w.length&&(s=w[r+1]||" "),w&&r>0&&(t=w[r-1]||" "),b&&r>0&&(e=b[r-1]||" "),[a,c,o,l,u,s,t,e]}var h="http://www.w3.org/2000/svg";var x=()=>document.createElementNS(h,"g");function d([i,r,n,l,a,c,o,u]){let s=document.createElementNS("http://www.w3.org/2000/svg","g");if(i){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",15),e.setAttribute("y1",0),e.setAttribute("x2",15),e.setAttribute("y2",27),e.setAttribute("class","part"),s.appendChild(e)}if(r){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",15),e.setAttribute("y1",27),e.setAttribute("x2",30),e.setAttribute("y2",27),e.setAttribute("class","part"),s.appendChild(e)}if(n){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",15),e.setAttribute("y1",27),e.setAttribute("x2",15),e.setAttribute("y2",54),e.setAttribute("class","part"),s.appendChild(e)}if(l){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",0),e.setAttribute("y1",27),e.setAttribute("x2",15),e.setAttribute("y2",27),e.setAttribute("class","part"),s.appendChild(e)}if(document.createElementNS("http://www.w3.org/2000/svg","polygon").setAttribute("points",[[0,0],[20.6,0],[20.6,3],[0,3]].map(([e,p])=>`${e},${p}`).join(" ")),a){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",30),e.setAttribute("y1",0),e.setAttribute("x2",15),e.setAttribute("y2",27),e.setAttribute("class","part"),s.appendChild(e)}if(c){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",15),e.setAttribute("y1",27),e.setAttribute("x2",30),e.setAttribute("y2",54),e.setAttribute("class","part"),s.appendChild(e)}if(o){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",15),e.setAttribute("y1",27),e.setAttribute("x2",0),e.setAttribute("y2",54),e.setAttribute("class","part"),s.appendChild(e)}if(u){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",0),e.setAttribute("y1",0),e.setAttribute("x2",15),e.setAttribute("y2",27),e.setAttribute("class","part"),s.appendChild(e)}return s}function _(i,r){let n=document.createElementNS("http://www.w3.org/2000/svg","g"),l=document.createElementNS("http://www.w3.org/2000/svg","text"),a=document.createTextNode(i);l.appendChild(a),r&&l.setAttribute("class","reserved");let c=[[15,24]];return l.setAttribute("transform",c.map(([o,u])=>`translate(${o}, ${u})`).join(" ")),n.appendChild(l),n}function k(i,r){let n=document.createElementNS("http://www.w3.org/2000/svg","g"),l=document.createElementNS("http://www.w3.org/2000/svg","line");l.setAttribute("x1",15),l.setAttribute("y1",0),l.setAttribute("x2",15),l.setAttribute("y2",54),l.setAttribute("class","center");let a=document.createElementNS("http://www.w3.org/2000/svg","line");a.setAttribute("x1",0),a.setAttribute("y1",30),a.setAttribute("x2",30),a.setAttribute("y2",54),a.setAttribute("class","center");for(let c=0;c<=i*30;c+=3){let o=document.createElementNS("http://www.w3.org/2000/svg","line");o.setAttribute("x1",c),o.setAttribute("y1",0),o.setAttribute("x2",c),o.setAttribute("y2",54*r),o.setAttribute("class","grid"),n.appendChild(o)}for(let c=0;c<=r*54;c+=3){let o=document.createElementNS("http://www.w3.org/2000/svg","line");o.setAttribute("x1",0),o.setAttribute("y1",c),o.setAttribute("x2",30*i),o.setAttribute("y2",c),o.setAttribute("class","grid"),n.appendChild(o)}return n}function y(i,r){let n=g[i];return n?n(r):x()}var g={};g["|"]=([i,r,n,l,a,c,o,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g");if(r=="_"){let t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1","18"),t.setAttribute("y1","51"),t.setAttribute("x2","30"),t.setAttribute("y2","51"),t.setAttribute("class","part"),s.appendChild(t)}if(l=="_"){let t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1","0"),t.setAttribute("y1","51"),t.setAttribute("x2","12"),t.setAttribute("y2","51"),t.setAttribute("class","part"),s.appendChild(t)}if(a=="_"){let t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1","12"),t.setAttribute("y1","-3"),t.setAttribute("x2","30"),t.setAttribute("y2","-3"),t.setAttribute("class","part"),s.appendChild(t)}if(u=="_"){let t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1","0"),t.setAttribute("y1","-3"),t.setAttribute("x2","18"),t.setAttribute("y2","-3"),t.setAttribute("class","part"),s.appendChild(t)}return s.appendChild(d([!(a=="/"&&u=="\\"),["-"].includes(r),!(o=="/"&&c=="\\"),["-"].includes(l),a=="/",c=="\\",o=="/",u=="\\"])),s};g["-"]=([i,r,n,l,a,c,o,u])=>d([["|"].includes(i),!0,["|"].includes(n),!0,!1,!1,!1,!1]);g["~"]=([i,r,n,l,a,c,o,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=document.createElementNS("http://www.w3.org/2000/svg","line");return t.setAttribute("x1","9"),t.setAttribute("y1","27"),t.setAttribute("x2","24"),t.setAttribute("y2","27"),t.setAttribute("class","part"),s.appendChild(t),s};g._=i=>{let r=y("-",i);return r.setAttribute("transform","translate(0 24)"),r};g[":"]=([i,r,n,l,a,c,o,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=document.createElementNS("http://www.w3.org/2000/svg","line");if(t.setAttribute("x1","15"),t.setAttribute("y1","0"),t.setAttribute("x2","15"),t.setAttribute("y2","60"),t.setAttribute("class","part"),t.setAttribute("style","stroke-dasharray: 15; stroke-dashoffset: 0;"),s.appendChild(t),i=="+"){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1","15"),e.setAttribute("y1","-24"),e.setAttribute("x2","15"),e.setAttribute("y2","-15"),e.setAttribute("class","part"),s.appendChild(e)}if(n=="+"){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1","15"),e.setAttribute("y1","60"),e.setAttribute("x2","15"),e.setAttribute("y2","78"),e.setAttribute("class","part"),s.appendChild(e)}return s};g["="]=i=>{let r=document.createElementNS("http://www.w3.org/2000/svg","g"),n=document.createElementNS("http://www.w3.org/2000/svg","line");n.setAttribute("x1","0"),n.setAttribute("y1","21"),n.setAttribute("x2","30"),n.setAttribute("y2","21"),n.setAttribute("class","part"),r.appendChild(n);let l=document.createElementNS("http://www.w3.org/2000/svg","line");return l.setAttribute("x1","0"),l.setAttribute("y1","30"),l.setAttribute("x2","30"),l.setAttribute("y2","30"),l.setAttribute("class","part"),r.appendChild(l),r};g["*"]=([i,r,n,l,a,c,o,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=document.createElementNS("http://www.w3.org/2000/svg","circle");return t.setAttribute("cx","0"),t.setAttribute("cy","0"),t.setAttribute("r","21"),t.setAttribute("stroke","none"),t.setAttribute("transform","translate(15, 27)"),s.appendChild(t),s.appendChild(d([["+","|"].includes(i),["+","-"].includes(r),["+","|"].includes(n),["+","-"].includes(l),["/"].includes(a),["\\"].includes(c),["/"].includes(o),["\\"].includes(u)])),s};g.o=([i,r,n,l,a,c,o,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=document.createElementNS("http://www.w3.org/2000/svg","circle");t.setAttribute("cx","0"),t.setAttribute("cy","0"),t.setAttribute("r","18"),t.setAttribute("stroke-width","6"),t.setAttribute("fill","none"),t.setAttribute("stroke","black"),t.setAttribute("transform","translate(15, 27)"),s.appendChild(t);let e=d([["+","|"].includes(i),["+","-"].includes(r),["+","|"].includes(n),["+","-"].includes(l),["/"].includes(a),["\\"].includes(c),["/"].includes(o),["\\"].includes(u)]);s.appendChild(e);let p=document.createElementNS("http://www.w3.org/2000/svg","circle");return p.setAttribute("cx","0"),p.setAttribute("cy","0"),p.setAttribute("r","15"),p.setAttribute("fill","white"),p.setAttribute("opacity","100%"),p.setAttribute("transform","translate(15, 27)"),s.appendChild(p),s};g["/"]=i=>{let[r,n,l,a,c,o,u,s]=i,t=document.createElementNS("http://www.w3.org/2000/svg","g");if(t.appendChild(d([["|"].includes(r),!1,["|"].includes(l),!1,!0,!1,!0,!1])),n=="\\"){let e=d([!1,!1,!1,!1,!1,!1,!0,!1]);e.setAttribute("transform","translate(30 -54)"),e.setAttribute("clip-path","polygon(-3 0, 0 0, 0 54, -3 54)"),t.appendChild(e)}if(a=="\\"){let e=d([!1,!1,!1,!1,!0,!1,!1,!1]);e.setAttribute("transform","translate(-30 54)"),e.setAttribute("clip-path","polygon(15 -6, 33 -6, 33 6, 15 6)"),t.appendChild(e)}if(n=="_"){let e=y("_",i);t.appendChild(e)}return t};g["\\"]=i=>{let[r,n,l,a,c,o,u,s]=i,t=document.createElementNS("http://www.w3.org/2000/svg","g");if(t.appendChild(d([["|"].includes(r),!1,["|"].includes(l),!1,!1,!0,!1,!0])),a=="/"){let e=d([!1,!1,!1,!1,!1,!0,!1,!1]);e.setAttribute("transform","translate(-30 -54)"),e.setAttribute("clip-path","polygon(15 0, 30 0, 30 54, 15 54)"),t.appendChild(e)}if(n=="/"){let e=d([!1,!1,!1,!1,!1,!1,!1,!0]);e.setAttribute("transform","translate(30 54)"),e.setAttribute("clip-path","polygon(-3 0, 0 0, 0 6, -3 6)"),t.appendChild(e)}if(a=="_"){let e=y("_",i);t.appendChild(e)}return t};g["#"]=([i,r,n,l,a,c,o,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=document.createElementNS("http://www.w3.org/2000/svg","polygon"),e=[[0,0],[42,0],[42,42],[0,42]];return t.setAttribute("points",e.map(([p,b])=>`${p},${b}`).join(" ")),t.setAttribute("transform","translate(-6, 6)"),s.appendChild(t),s.appendChild(d([["+","|"].includes(i),["+","-"].includes(r),["+","|"].includes(n),["+","-"].includes(l),["/"].includes(a),["\\"].includes(c),["/"].includes(o),["\\"].includes(u)])),s};g["+"]=([i,r,n,l,a,c,o,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=["*","#","-","+","~",">",".","'","`"].includes(r),e=["*","#","-","+","~","<",".","'","`"].includes(l),p=["*","#","|","+",".","`","^"].includes(i),b=["*","#","|","+","'","`","v"].includes(n),w=["/","*","#"].includes(a),A=["\\","*","#"].includes(c),m=["\\","*","#"].includes(u),C=["/","*","#"].includes(o);if(s.appendChild(d([p,t,b,e,w,A,C,m])),(e||t)&&(b||p)){let f=document.createElementNS("http://www.w3.org/2000/svg","polygon");f.setAttribute("points","0,0 6,0 6,6 0,6"),f.setAttribute("transform","translate(-3 -3) translate(15 27)"),s.appendChild(f)}if(w||m){let f=d([!1,!1,!1,!1,!1,m,w,!1]);f.setAttribute("clip-path","polygon(0 -3, 30 -3, 30 0, 0 0)"),s.appendChild(f)}if(A||C){let f=d([!1,!1,!1,!1,C,!1,!1,A]);f.setAttribute("clip-path","polygon(0 27, 15 27, 15 30, 0 30)"),s.appendChild(f)}if(C||m){let f=d([!1,!1,!1,!1,C&&A,m&&w,!1,!1]);f.setAttribute("clip-path","polygon(-3 0, 0 0, 0 54, -3 54)"),s.appendChild(f)}if(A||w){let f=d([!1,!1,!1,!1,!1,!1,w&&m,A&&C]);f.setAttribute("clip-path","polygon(15 0, 30 0, 30 54, 15 54)"),s.appendChild(f)}if(t||e){let f=d([!1,!1,!1,!1,t||C,m,w,e||A]);f.setAttribute("clip-path","polygon(-3 24, 30 24, 30 30, -3 30)"),s.appendChild(f)}return s};g["."]=([i,r,n,l,a,c,o,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g");if((r=="-"||r=="+")&&(n=="|"||n=="'"||n=="`"||n=="+")){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 30 24
        A 18 18, 0, 0, 0, 12 42
        L 12 54
        L 18 54
        L 18 42
        A 12 12, 0, 0, 1, 30 30
        Z`),s.appendChild(t)}if((l=="-"||l=="+")&&(n=="|"||n=="'"||n=="`"||n=="+")){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 0 24
        A 18 18, 0, 0, 1, 18 42
        L 18 54
        L 12 54
        L 12 42
        A 12 12, 0, 0, 0, 0 30        
        Z`),s.appendChild(t)}if((r=="-"||r=="+")&&(i=="|"||i=="."||i=="+")){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 30 30
        A 18 18, 0, 0, 1, 12 12
        L 12 0
        L 18 0
        L 18 12
        A 12 12, 0, 0, 0, 30 24
        Z`),s.appendChild(t)}if((l=="-"||l=="+")&&(i=="|"||i=="."||i=="+")){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 0 30
        A 18 18, 0, 0, 0, 18 12
        L 18 0
        L 12 0
        L 12 12
        A 12 12, 0, 0, 1, 0 24
        Z`),s.appendChild(t)}if(r=="-"&&a=="/"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 30 30
        A 12 12, 0, 0, 1, 18 18
        L 18 15
        L 24 15
        L 24 18
        A 6 6, 0, 0, 0, 30 24
        Z`),s.appendChild(t);let e=d([!1,!1,!1,!1,!0,!1,!1,!1]);e.setAttribute("clip-path","polygon(15px -10px, 30px -10px, 30px 30px, 2px 15px)"),s.appendChild(e)}if(r=="-"&&u=="\\"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M -3 0
        A 60 60, 0, 0, 0, 30 30
        L 30 24
        A 60 60, 0, 0, 1, 0 -6
        Z`),s.appendChild(t)}if(l=="-"&&a=="/"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 0 30
        A 60 60, 0, 0, 0, 33 0
        L 30 -6
        A 60 60, 0, 0, 1, 0 24
        Z`),s.appendChild(t)}if(l=="-"&&u=="\\"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 0 30
        A 12 12, 0, 0, 0, 12 18
        L 12 15
        L 6 15
        L 6 18
        A 6 6, 0, 0, 1, 0 24
        Z`),s.appendChild(t);let e=d([!1,!1,!1,!1,!1,!1,!1,!0]);e.setAttribute("clip-path","polygon(-3 -3, 12 -3, 12 18, -3 18)"),s.appendChild(e)}if(n=="|"&&a=="/"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 12 54
        A 120 120, 0, 0, 1, 30 -6
        L 37 -6
        A 120 120, 0, 0, 0, 18 54
        Z`),s.appendChild(t)}if(i=="|"&&c=="\\"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 30 60
        A 120 120, 0, 0, 1, 12 0
        L 18 0
        A 120 120, 0, 0, 0, 37 60
        Z`),s.appendChild(t)}if(i=="|"&&o=="/"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 0 60
        A 120 120, 0, 0, 0, 18 0
        L 12 0
        A 120 120, 0, 0, 1, -7 60
        Z`),s.appendChild(t)}if(n=="|"&&u=="\\"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 12 54
        A 120 120, 0, 0, 0, -7 -6
        L 0 -6
        A 120 120, 0, 0, 1, 18 54
        Z`),s.appendChild(t)}if(r=="-"&&o=="/"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 0 48
        A 42 42, 0, 0, 1, 30 24
        L 30 30
        A 42 42, 0, 0, 0, 6 48
        Z`),s.appendChild(t);let e=d([!1,!1,!1,!1,!1,!1,!0,!1]);e.setAttribute("clip-path","polygon(-3 15, 12 15, 12 30, -3 30)"),s.appendChild(e)}if(l=="-"&&c=="\\"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 0 24
        A 42 42, 0, 0, 1, 30 48
        L 24 48
        A 42 42, 0, 0, 0, 0 30
        Z`),s.appendChild(t);let e=d([!1,!1,!1,!1,!1,!0,!1,!1]);e.setAttribute("clip-path","polygon(-3 15, 12 15, 21 30, -3 30)"),s.appendChild(e)}if(l=="-"&&o=="/"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 0 24
        A 12 12, 0, 0, 1, 12 39
        L 6 39
        A 6 6, 0, 0, 0, 0 30
        Z`),s.appendChild(t);let e=d([!1,!1,!1,!1,!1,!1,!0,!1]);e.setAttribute("clip-path","polygon(-3 6, 12 6, 12 30, -3 30)"),s.appendChild(e)}if(r=="-"&&c=="\\"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 30 24
        A 12 12, 0, 0, 0, 18 39
        L 24 39
        A 6 6, 0, 0, 1, 30 30 
        Z`),s.appendChild(t);let e=d([!1,!1,!1,!1,!1,!0,!1,!1]);e.setAttribute("clip-path","polygon(3 6, 18 6, 18 30, 3 30)"),s.appendChild(e)}if(o=="/"&&c=="\\"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 3 42
        A 15 15, 0, 0, 1, 27 42
        L 25 51
        A 9 9, 0, 0, 0, 5 51
        Z`),s.appendChild(t);let e=d([!1,!1,!1,!1,!1,!0,!0,!1]);e.setAttribute("clip-path","polygon(-3 15, 33 15, 33 30, -3 30)"),s.appendChild(e)}if(u=="\\"&&a=="/"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 3 12
        A 15 15, 0, 0, 0, 27 12
        L 22 9
        A 9 9, 0, 0, 1, 8 9
        Z`),s.appendChild(t);let e=d([!1,!1,!1,!1,!0,!1,!1,!0]);e.setAttribute("clip-path","polygon(-3 -3, 33 -3, 33 12, -3 12)"),s.appendChild(e)}if(a=="/"&&c=="\\"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 22 9
        A 30 30, 0, 0, 0, 22 45
        L 28 45
        A 30 30, 0, 0, 1, 28 9
        Z`),s.appendChild(t);let e=d([!1,!1,!1,!1,!0,!0,!1,!1]);e.setAttribute("clip-path","polygon(6 -3, 33 -3, 33 57, 6 57)"),s.appendChild(e)}if(u=="\\"&&o=="/"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 8 9
        A 30 30, 0, 0, 1, 8 45
        L 2 45
        A 30 30, 0, 0, 0, 2 9
        Z`),s.appendChild(t);let e=d([!1,!1,!1,!1,!1,!1,!0,!0]);e.setAttribute("clip-path","polygon(-3 -3, 9 -3, 9 57, -3 57)"),s.appendChild(e)}return s};var X={"\u250C":"+","\u2510":"+","\u2514":"+","\u2518":"+","\u2500":"-","\u25BA":">","'":".","`":".",V:"v"};for(let[i,r]of Object.entries(X))g[i]=n=>{let l=g[r];return l?l(n):document.createElementNS(h,"g")};g[">"]=([,i])=>{let r=document.createElementNS(h,"g"),n=document.createElementNS(h,"polygon");n.setAttribute("points","0,0 42,18 0,36");let l=0;return(i=="*"||i=="o"||i=="#")&&(l-=18),n.setAttribute("transform",`translate(${l} 9)`),r.appendChild(n),r};g["<"]=([,,,i])=>{let r=document.createElementNS(h,"g"),n=document.createElementNS(h,"polygon");n.setAttribute("points","0,0 42,18 0,36");let l=30;return(i=="*"||i=="o"||i=="#")&&(l+=18),n.setAttribute("transform",`translate(${l} 9) translate(0 36) rotate(180)`),r.appendChild(n),r};g.v=([i,r,n,l,a,c,o,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=document.createElementNS("http://www.w3.org/2000/svg","polygon");t.setAttribute("points","0,0 42,18 0,36");let e=36;return n==" "?e=12:n=="_"?e+=18:(n=="*"||n=="o"||n=="#")&&(e-=18),a=="/"?t.setAttribute("transform",`translate(-36 33) rotate(${90+22.5}, 42, 18)`):u=="\\"?t.setAttribute("transform",`translate(-18 33) rotate(${90-22.5}, 42, 18)`):t.setAttribute("transform",`translate(33 ${e}) rotate(90)`),s.appendChild(t),s.appendChild(d([["|","+"].includes(i),!1,["|","+"].includes(i),!1,["/"].includes(a),!1,!1,["\\"].includes(u)])),s};g["^"]=([i,r,n,l,a,c,o,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=document.createElementNS("http://www.w3.org/2000/svg","polygon");t.setAttribute("points","0,0 42,18 0,36");let e=42;return i=="-"&&(e-=15),o=="/"?t.setAttribute("transform",`translate(-18 -15) rotate(${-45-22.5}, 42, 18)`):c=="\\"?t.setAttribute("transform",`translate(-36 -15) rotate(${-90-22.5}, 42, 18)`):t.setAttribute("transform",`translate(-3 ${e}) rotate(-90)`),s.appendChild(t),s.appendChild(d([!1,!1,["+","|"].includes(n),!1,!1,["\\"].includes(c),["/"].includes(o),!1])),s};function Y(i){let r=document.createElementNS(h,"g");for(let n=0;n<i.length;n++){let l=i[n];if(l)for(let a=0;a<l.length;a++){let c=l[a];if(c===void 0||c===" "||c==='"')continue;let o=g[c],u=document.createElementNS(h,"g"),s=!1;for(let p=0;p<a;p++)l[p]==='"'&&(s=!s);let t=v(i,[a,n]);if(c.match(/[A-Za-z0-9]/)){let[,p,,b]=t;s=s||/[A-Za-uw-z0-9]/.test(b)||/[A-Za-uw-z0-9]/.test(p)}let e=o!==void 0&&!s;e&&u.appendChild(o(t)),u.appendChild(_(c,e)),u.setAttribute("transform",`translate(${a*30} ${n*54})`),r.appendChild(u)}}return r}var T=`
.diagram {
  display: block;
}

.diagram line, .diagram circle, .diagram rect {
  stroke: black;
}

.diagram line {
  stroke-width: 2;
}

.diagram circle {
  r: 3.5;
}

.diagram rect {
  width: 6px;
  height: 6px;
}

.diagram text, .glyph, .debug text {
  /** font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace; **/
  font-family: Iosevka Fixed, monospace;
  font-size: 3em;
  text-anchor: middle;
  alignment-baseline: central;
  white-space: pre;
}

.reserved {
  fill: transparent;
  white-space: pre;
}

.debug[debug="true"] .reserved {
  fill: black;
  opacity: 0.5;
}

.debug[debug="true"] line.grid {
  stroke: black;
  stroke-width: 0.2;
  stroke-linecap: butt;
  fill: black;
  opacity: 1%;
}

polygon {
  stroke-width: 0;
}

.debug[debug="true"] polygon.inner {
  fill: black;
  stroke: black;
  opacity: 5%;
}

polygon {
  stroke: black;
  /** stroke-width: 0.2; **/
  stroke-linecap: butt;
  fill: black;
}

.debug[debug="true"] polygon,
.debug[debug="true"] line.grid
{
  opacity: 10%;
}

.debug[debug="true"] polygon,
.debug[debug="true"] path,
.debug[debug="true"] circle
{
  opacity: 50%;
}

.debug[debug="true"] polygon {
  fill: red;
  stroke: red;
}

/**
circle {
  fill: black;
}
**/

.debug[debug="true"] circle,
.debug[debug="true"] path
{
  opacity: 50%;
  fill: red;
}

.debug[debug="true"] circle {
  stroke: red;
}

.debug[debug="true"] .inner {
  stroke-width: 0.2;
}

line.part {
  stroke-width: 6;
  stroke-linecap: butt;
  stroke: black;
}

.debug[debug="true"] line.part {
  opacity: 50%;
  stroke: red;
}

.debug[debug="true"] line.center {
  stroke-width: 3;
  stroke-linecap: butt;
  opacity: 10%;
  stroke: black;
}

text::selection {
    fill: black;
    background-color: #EEE;
}
  `;function R(i,r,n){let l=i.split(`
`).map(t=>t.trimEnd().split(""));l.shift(),l.splice(-1);let a=0,c=l.length;for(let t=0;t<l.length;t++){let e=l[t];if(e)for(let p=0;p<e.length;p++)e.length>a&&(a=l[p]?.length??a)}let o=document.createElementNS(h,"svg");o.setAttribute("width",a*30*r),o.setAttribute("height",c*54*r),o.setAttribute("debug",n);let u=0;o.setAttribute("viewBox",`${-u} ${-u} ${a*30+2*u} ${c*54+2*u}`),o.setAttribute("class","debug");let s=document.createElementNS(h,"style");return s.innerHTML=T,o.appendChild(s),o.appendChild(Y(l)),n&&o.appendChild(k(a,c)),o}var N=R;function j(){let i=document.querySelectorAll("script[type='text/typogram']");for(let r of i){if(r.hasAttribute("disabled"))continue;let n=r.innerText,l=Number(r.getAttribute("zoom")||.3),a=r.hasAttribute("grid"),c=N(n,l,a);r.parentNode?.insertBefore(c,r.nextSibling)}}document.addEventListener("DOMContentLoaded",j);return V(W);})();
