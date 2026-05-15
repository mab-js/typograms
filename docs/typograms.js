/*!
 * typograms (mab-js fork)
 * https://github.com/mab-js/typograms
 *
 * Originally developed by Google (google/typograms, archived 2025-01-21).
 * Apache License 2.0 -- see LICENSE and NOTICE.
 */
"use strict";var typograms=(()=>{var E=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var N=Object.getOwnPropertyNames;var x=Object.prototype.hasOwnProperty;var L=(i,n)=>{for(var r in n)E(i,r,{get:n[r],enumerable:!0})},k=(i,n,r,l)=>{if(n&&typeof n=="object"||typeof n=="function")for(let a of N(n))!x.call(i,a)&&a!==r&&E(i,a,{get:()=>n[a],enumerable:!(l=v(n,a))||l.enumerable});return i};var M=i=>k(E({},"__esModule",{value:!0}),i);var D={};L(D,{create:()=>S});var h="http://www.w3.org/2000/svg",Z=()=>document.createElementNS(h,"g");function C(i,n){let r=g[i];return r?r(n):Z()}function G(i,n){let r=document.createElementNS("http://www.w3.org/2000/svg","g"),l=document.createElementNS("http://www.w3.org/2000/svg","line");l.setAttribute("x1",15),l.setAttribute("y1",0),l.setAttribute("x2",15),l.setAttribute("y2",54),l.setAttribute("class","center");let a=document.createElementNS("http://www.w3.org/2000/svg","line");a.setAttribute("x1",0),a.setAttribute("y1",30),a.setAttribute("x2",30),a.setAttribute("y2",54),a.setAttribute("class","center");for(let c=0;c<=i*30;c+=3){let o=document.createElementNS("http://www.w3.org/2000/svg","line");o.setAttribute("x1",c),o.setAttribute("y1",0),o.setAttribute("x2",c),o.setAttribute("y2",54*n),o.setAttribute("class","grid"),r.appendChild(o)}for(let c=0;c<=n*54;c+=3){let o=document.createElementNS("http://www.w3.org/2000/svg","line");o.setAttribute("x1",0),o.setAttribute("y1",c),o.setAttribute("x2",30*i),o.setAttribute("y2",c),o.setAttribute("class","grid"),r.appendChild(o)}return r}var g={};g["|"]=([i,n,r,l,a,c,o,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g");if(n=="_"){let t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1","18"),t.setAttribute("y1","51"),t.setAttribute("x2","30"),t.setAttribute("y2","51"),t.setAttribute("class","part"),s.appendChild(t)}if(l=="_"){let t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1","0"),t.setAttribute("y1","51"),t.setAttribute("x2","12"),t.setAttribute("y2","51"),t.setAttribute("class","part"),s.appendChild(t)}if(a=="_"){let t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1","12"),t.setAttribute("y1","-3"),t.setAttribute("x2","30"),t.setAttribute("y2","-3"),t.setAttribute("class","part"),s.appendChild(t)}if(u=="_"){let t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1","0"),t.setAttribute("y1","-3"),t.setAttribute("x2","18"),t.setAttribute("y2","-3"),t.setAttribute("class","part"),s.appendChild(t)}return s.appendChild(d([!(a=="/"&&u=="\\"),["-"].includes(n),!(o=="/"&&c=="\\"),["-"].includes(l),a=="/",c=="\\",o=="/",u=="\\"])),s};g["-"]=([i,n,r,l,a,c,o,u])=>d([["|"].includes(i),!0,["|"].includes(r),!0,!1,!1,!1,!1]);g["~"]=([i,n,r,l,a,c,o,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=document.createElementNS("http://www.w3.org/2000/svg","line");return t.setAttribute("x1","9"),t.setAttribute("y1","27"),t.setAttribute("x2","24"),t.setAttribute("y2","27"),t.setAttribute("class","part"),s.appendChild(t),s};g._=i=>{let n=C("-",i);return n.setAttribute("transform","translate(0 24)"),n};g[":"]=([i,n,r,l,a,c,o,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=document.createElementNS("http://www.w3.org/2000/svg","line");if(t.setAttribute("x1","15"),t.setAttribute("y1","0"),t.setAttribute("x2","15"),t.setAttribute("y2","60"),t.setAttribute("class","part"),t.setAttribute("style","stroke-dasharray: 15; stroke-dashoffset: 0;"),s.appendChild(t),i=="+"){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1","15"),e.setAttribute("y1","-24"),e.setAttribute("x2","15"),e.setAttribute("y2","-15"),e.setAttribute("class","part"),s.appendChild(e)}if(r=="+"){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1","15"),e.setAttribute("y1","60"),e.setAttribute("x2","15"),e.setAttribute("y2","78"),e.setAttribute("class","part"),s.appendChild(e)}return s};g["="]=i=>{let n=document.createElementNS("http://www.w3.org/2000/svg","g"),r=document.createElementNS("http://www.w3.org/2000/svg","line");r.setAttribute("x1","0"),r.setAttribute("y1","21"),r.setAttribute("x2","30"),r.setAttribute("y2","21"),r.setAttribute("class","part"),n.appendChild(r);let l=document.createElementNS("http://www.w3.org/2000/svg","line");return l.setAttribute("x1","0"),l.setAttribute("y1","30"),l.setAttribute("x2","30"),l.setAttribute("y2","30"),l.setAttribute("class","part"),n.appendChild(l),n};g["*"]=([i,n,r,l,a,c,o,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=document.createElementNS("http://www.w3.org/2000/svg","circle");return t.setAttribute("cx","0"),t.setAttribute("cy","0"),t.setAttribute("r","21"),t.setAttribute("stroke","none"),t.setAttribute("transform","translate(15, 27)"),s.appendChild(t),s.appendChild(d([["+","|"].includes(i),["+","-"].includes(n),["+","|"].includes(r),["+","-"].includes(l),["/"].includes(a),["\\"].includes(c),["/"].includes(o),["\\"].includes(u)])),s};g.o=([i,n,r,l,a,c,o,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=document.createElementNS("http://www.w3.org/2000/svg","circle");t.setAttribute("cx","0"),t.setAttribute("cy","0"),t.setAttribute("r","18"),t.setAttribute("stroke-width","6"),t.setAttribute("fill","none"),t.setAttribute("stroke","black"),t.setAttribute("transform","translate(15, 27)"),s.appendChild(t);let e=d([["+","|"].includes(i),["+","-"].includes(n),["+","|"].includes(r),["+","-"].includes(l),["/"].includes(a),["\\"].includes(c),["/"].includes(o),["\\"].includes(u)]);s.appendChild(e);let p=document.createElementNS("http://www.w3.org/2000/svg","circle");return p.setAttribute("cx","0"),p.setAttribute("cy","0"),p.setAttribute("r","15"),p.setAttribute("fill","white"),p.setAttribute("opacity","100%"),p.setAttribute("transform","translate(15, 27)"),s.appendChild(p),s};g["/"]=i=>{let[n,r,l,a,c,o,u,s]=i,t=document.createElementNS("http://www.w3.org/2000/svg","g");if(t.appendChild(d([["|"].includes(n),!1,["|"].includes(l),!1,!0,!1,!0,!1])),r=="\\"){let e=d([!1,!1,!1,!1,!1,!1,!0,!1]);e.setAttribute("transform","translate(30 -54)"),e.setAttribute("clip-path","polygon(-3 0, 0 0, 0 54, -3 54)"),t.appendChild(e)}if(a=="\\"){let e=d([!1,!1,!1,!1,!0,!1,!1,!1]);e.setAttribute("transform","translate(-30 54)"),e.setAttribute("clip-path","polygon(15 -6, 33 -6, 33 6, 15 6)"),t.appendChild(e)}if(r=="_"){let e=C("_",i);t.appendChild(e)}return t};g["\\"]=i=>{let[n,r,l,a,c,o,u,s]=i,t=document.createElementNS("http://www.w3.org/2000/svg","g");if(t.appendChild(d([["|"].includes(n),!1,["|"].includes(l),!1,!1,!0,!1,!0])),a=="/"){let e=d([!1,!1,!1,!1,!1,!0,!1,!1]);e.setAttribute("transform","translate(-30 -54)"),e.setAttribute("clip-path","polygon(15 0, 30 0, 30 54, 15 54)"),t.appendChild(e)}if(r=="/"){let e=d([!1,!1,!1,!1,!1,!1,!1,!0]);e.setAttribute("transform","translate(30 54)"),e.setAttribute("clip-path","polygon(-3 0, 0 0, 0 6, -3 6)"),t.appendChild(e)}if(a=="_"){let e=C("_",i);t.appendChild(e)}return t};g["#"]=([i,n,r,l,a,c,o,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=document.createElementNS("http://www.w3.org/2000/svg","polygon"),e=[[0,0],[42,0],[42,42],[0,42]];return t.setAttribute("points",e.map(([p,f])=>`${p},${f}`).join(" ")),t.setAttribute("transform","translate(-6, 6)"),s.appendChild(t),s.appendChild(d([["+","|"].includes(i),["+","-"].includes(n),["+","|"].includes(r),["+","-"].includes(l),["/"].includes(a),["\\"].includes(c),["/"].includes(o),["\\"].includes(u)])),s};g["+"]=([i,n,r,l,a,c,o,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=["*","#","-","+","~",">",".","'","`"].includes(n),e=["*","#","-","+","~","<",".","'","`"].includes(l),p=["*","#","|","+",".","`","^"].includes(i),f=["*","#","|","+","'","`","v"].includes(r),b=["/","*","#"].includes(a),A=["\\","*","#"].includes(c),m=["\\","*","#"].includes(u),y=["/","*","#"].includes(o);if(s.appendChild(d([p,t,f,e,b,A,y,m])),(e||t)&&(f||p)){let w=document.createElementNS("http://www.w3.org/2000/svg","polygon");w.setAttribute("points","0,0 6,0 6,6 0,6"),w.setAttribute("transform","translate(-3 -3) translate(15 27)"),s.appendChild(w)}if(b||m){let w=d([!1,!1,!1,!1,!1,m,b,!1]);w.setAttribute("clip-path","polygon(0 -3, 30 -3, 30 0, 0 0)"),s.appendChild(w)}if(A||y){let w=d([!1,!1,!1,!1,y,!1,!1,A]);w.setAttribute("clip-path","polygon(0 27, 15 27, 15 30, 0 30)"),s.appendChild(w)}if(y||m){let w=d([!1,!1,!1,!1,y&&A,m&&b,!1,!1]);w.setAttribute("clip-path","polygon(-3 0, 0 0, 0 54, -3 54)"),s.appendChild(w)}if(A||b){let w=d([!1,!1,!1,!1,!1,!1,b&&m,A&&y]);w.setAttribute("clip-path","polygon(15 0, 30 0, 30 54, 15 54)"),s.appendChild(w)}if(t||e){let w=d([!1,!1,!1,!1,t||y,m,b,e||A]);w.setAttribute("clip-path","polygon(-3 24, 30 24, 30 30, -3 30)"),s.appendChild(w)}return s};g["."]=([i,n,r,l,a,c,o,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g");if((n=="-"||n=="+")&&(r=="|"||r=="'"||r=="`"||r=="+")){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 30 24
        A 18 18, 0, 0, 0, 12 42
        L 12 54
        L 18 54
        L 18 42
        A 12 12, 0, 0, 1, 30 30
        Z`),s.appendChild(t)}if((l=="-"||l=="+")&&(r=="|"||r=="'"||r=="`"||r=="+")){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 0 24
        A 18 18, 0, 0, 1, 18 42
        L 18 54
        L 12 54
        L 12 42
        A 12 12, 0, 0, 0, 0 30        
        Z`),s.appendChild(t)}if((n=="-"||n=="+")&&(i=="|"||i=="."||i=="+")){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
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
        Z`),s.appendChild(t)}if(n=="-"&&a=="/"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 30 30
        A 12 12, 0, 0, 1, 18 18
        L 18 15
        L 24 15
        L 24 18
        A 6 6, 0, 0, 0, 30 24
        Z`),s.appendChild(t);let e=d([!1,!1,!1,!1,!0,!1,!1,!1]);e.setAttribute("clip-path","polygon(15px -10px, 30px -10px, 30px 30px, 2px 15px)"),s.appendChild(e)}if(n=="-"&&u=="\\"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
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
        Z`),s.appendChild(t);let e=d([!1,!1,!1,!1,!1,!1,!1,!0]);e.setAttribute("clip-path","polygon(-3 -3, 12 -3, 12 18, -3 18)"),s.appendChild(e)}if(r=="|"&&a=="/"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
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
        Z`),s.appendChild(t)}if(r=="|"&&u=="\\"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 12 54
        A 120 120, 0, 0, 0, -7 -6
        L 0 -6
        A 120 120, 0, 0, 1, 18 54
        Z`),s.appendChild(t)}if(n=="-"&&o=="/"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
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
        Z`),s.appendChild(t);let e=d([!1,!1,!1,!1,!1,!1,!0,!1]);e.setAttribute("clip-path","polygon(-3 6, 12 6, 12 30, -3 30)"),s.appendChild(e)}if(n=="-"&&c=="\\"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
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
        Z`),s.appendChild(t);let e=d([!1,!1,!1,!1,!1,!1,!0,!0]);e.setAttribute("clip-path","polygon(-3 -3, 9 -3, 9 57, -3 57)"),s.appendChild(e)}return s};var $={"\u250C":"+","\u2510":"+","\u2514":"+","\u2518":"+","\u2500":"-","\u25BA":">","'":".","`":".",V:"v"};for(let[i,n]of Object.entries($))g[i]=r=>{let l=g[n];return l?l(r):document.createElementNS(h,"g")};g[">"]=([,i])=>{let n=document.createElementNS(h,"g"),r=document.createElementNS(h,"polygon");r.setAttribute("points","0,0 42,18 0,36");let l=0;return(i=="*"||i=="o"||i=="#")&&(l-=18),r.setAttribute("transform",`translate(${l} 9)`),n.appendChild(r),n};g["<"]=([,,,i])=>{let n=document.createElementNS(h,"g"),r=document.createElementNS(h,"polygon");r.setAttribute("points","0,0 42,18 0,36");let l=30;return(i=="*"||i=="o"||i=="#")&&(l+=18),r.setAttribute("transform",`translate(${l} 9) translate(0 36) rotate(180)`),n.appendChild(r),n};g.v=([i,n,r,l,a,c,o,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=document.createElementNS("http://www.w3.org/2000/svg","polygon");t.setAttribute("points","0,0 42,18 0,36");let e=36;return r==" "?e=12:r=="_"?e+=18:(r=="*"||r=="o"||r=="#")&&(e-=18),a=="/"?t.setAttribute("transform",`translate(-36 33) rotate(${90+22.5}, 42, 18)`):u=="\\"?t.setAttribute("transform",`translate(-18 33) rotate(${90-22.5}, 42, 18)`):t.setAttribute("transform",`translate(33 ${e}) rotate(90)`),s.appendChild(t),s.appendChild(d([["|","+"].includes(i),!1,["|","+"].includes(i),!1,["/"].includes(a),!1,!1,["\\"].includes(u)])),s};g["^"]=([i,n,r,l,a,c,o,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=document.createElementNS("http://www.w3.org/2000/svg","polygon");t.setAttribute("points","0,0 42,18 0,36");let e=42;return i=="-"&&(e-=15),o=="/"?t.setAttribute("transform",`translate(-18 -15) rotate(${-45-22.5}, 42, 18)`):c=="\\"?t.setAttribute("transform",`translate(-36 -15) rotate(${-90-22.5}, 42, 18)`):t.setAttribute("transform",`translate(-3 ${e}) rotate(-90)`),s.appendChild(t),s.appendChild(d([!1,!1,["+","|"].includes(r),!1,!1,["\\"].includes(c),["/"].includes(o),!1])),s};function d([i,n,r,l,a,c,o,u]){let s=document.createElementNS("http://www.w3.org/2000/svg","g");if(i){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",15),e.setAttribute("y1",0),e.setAttribute("x2",15),e.setAttribute("y2",27),e.setAttribute("class","part"),s.appendChild(e)}if(n){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",15),e.setAttribute("y1",27),e.setAttribute("x2",30),e.setAttribute("y2",27),e.setAttribute("class","part"),s.appendChild(e)}if(r){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",15),e.setAttribute("y1",27),e.setAttribute("x2",15),e.setAttribute("y2",54),e.setAttribute("class","part"),s.appendChild(e)}if(l){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",0),e.setAttribute("y1",27),e.setAttribute("x2",15),e.setAttribute("y2",27),e.setAttribute("class","part"),s.appendChild(e)}if(document.createElementNS("http://www.w3.org/2000/svg","polygon").setAttribute("points",[[0,0],[20.6,0],[20.6,3],[0,3]].map(([e,p])=>`${e},${p}`).join(" ")),a){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",30),e.setAttribute("y1",0),e.setAttribute("x2",15),e.setAttribute("y2",27),e.setAttribute("class","part"),s.appendChild(e)}if(c){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",15),e.setAttribute("y1",27),e.setAttribute("x2",30),e.setAttribute("y2",54),e.setAttribute("class","part"),s.appendChild(e)}if(o){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",15),e.setAttribute("y1",27),e.setAttribute("x2",0),e.setAttribute("y2",54),e.setAttribute("class","part"),s.appendChild(e)}if(u){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",0),e.setAttribute("y1",0),e.setAttribute("x2",15),e.setAttribute("y2",27),e.setAttribute("class","part"),s.appendChild(e)}return s}function _(i,n){let r=document.createElementNS("http://www.w3.org/2000/svg","g"),l=document.createElementNS("http://www.w3.org/2000/svg","text"),a=document.createTextNode(i);l.appendChild(a),n&&l.setAttribute("class","reserved");let c=[[15,24]];return l.setAttribute("transform",c.map(([o,u])=>`translate(${o}, ${u})`).join(" ")),r.appendChild(l),r}function V(i){let n=document.createElementNS(h,"g");for(let r=0;r<i.length;r++){let l=i[r];if(l)for(let a=0;a<l.length;a++){let c=l[a];if(c===void 0||c===" "||c==='"')continue;let o=g[c],u=document.createElementNS(h,"g"),s=!1;for(let p=0;p<a;p++)l[p]==='"'&&(s=!s);let t=T(i,[a,r]);if(c.match(/[A-Za-z0-9]/)){let[,p,,f]=t;s=s||/[A-Za-uw-z0-9]/.test(f)||/[A-Za-uw-z0-9]/.test(p)}let e=o!==void 0&&!s;e&&u.appendChild(o(t)),u.appendChild(_(c,e)),u.setAttribute("transform",`translate(${a*30} ${r*54})`),n.appendChild(u)}}return n}function R(i,n,r){let l=i.split(`
`).map(t=>t.trimEnd().split(""));l.shift(),l.splice(-1);let a=0,c=l.length;for(let t=0;t<l.length;t++){let e=l[t];if(e)for(let p=0;p<e.length;p++)e.length>a&&(a=l[p]?.length??a)}let o=document.createElementNS(h,"svg");o.setAttribute("width",a*30*n),o.setAttribute("height",c*54*n),o.setAttribute("debug",r);let u=0;o.setAttribute("viewBox",`${-u} ${-u} ${a*30+2*u} ${c*54+2*u}`),o.setAttribute("class","debug");let s=document.createElementNS(h,"style");return s.innerHTML=`
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
  `,o.appendChild(s),o.appendChild(V(l)),r&&o.appendChild(G(a,c)),o}function T(i,[n,r]){let l=" ",a=" ",c=" ",o=" ",u=" ",s=" ",t=" ",e=" ",p=i[r],f=r>0?i[r-1]:void 0,b=r<i.length-1?i[r+1]:void 0;return f&&(a=f[n]||" "),p&&n<p.length-1&&(c=p[n+1]||" "),b&&(o=b[n]||" "),p&&n>0&&(l=p[n-1]||" "),f&&n<f.length-1&&(u=f[n+1]||" "),b&&n<b.length&&(s=b[n+1]||" "),b&&n>0&&(t=b[n-1]||" "),f&&n>0&&(e=f[n-1]||" "),[a,c,o,l,u,s,t,e]}var S=R;function z(){let i=document.querySelectorAll("script[type='text/typogram']");for(let n of i){if(n.hasAttribute("disabled"))continue;let r=n.innerText,l=Number(n.getAttribute("zoom")||.3),a=n.hasAttribute("grid"),c=S(r,l,a);n.parentNode?.insertBefore(c,n.nextSibling)}}document.addEventListener("DOMContentLoaded",z);return M(D);})();
