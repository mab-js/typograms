/*!
 * typograms (mab-js fork)
 * https://github.com/mab-js/typograms
 *
 * Originally developed by Google (google/typograms, archived 2025-01-21).
 * Apache License 2.0 -- see LICENSE and NOTICE.
 */
"use strict";var typograms=(()=>{function C(r,i){let n=document.createElementNS("http://www.w3.org/2000/svg","g"),l=document.createElementNS("http://www.w3.org/2000/svg","line");l.setAttribute("x1",15),l.setAttribute("y1",0),l.setAttribute("x2",15),l.setAttribute("y2",54),l.setAttribute("class","center");let o=document.createElementNS("http://www.w3.org/2000/svg","line");o.setAttribute("x1",0),o.setAttribute("y1",30),o.setAttribute("x2",30),o.setAttribute("y2",54),o.setAttribute("class","center");for(let c=0;c<=r*30;c+=3){let a=document.createElementNS("http://www.w3.org/2000/svg","line");a.setAttribute("x1",c),a.setAttribute("y1",0),a.setAttribute("x2",c),a.setAttribute("y2",54*i),a.setAttribute("class","grid"),n.appendChild(a)}for(let c=0;c<=i*54;c+=3){let a=document.createElementNS("http://www.w3.org/2000/svg","line");a.setAttribute("x1",0),a.setAttribute("y1",c),a.setAttribute("x2",30*r),a.setAttribute("y2",c),a.setAttribute("class","grid"),n.appendChild(a)}return n}var d={};d["|"]=([r,i,n,l,o,c,a,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g");if(i=="_"){let t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1","18"),t.setAttribute("y1","51"),t.setAttribute("x2","30"),t.setAttribute("y2","51"),t.setAttribute("class","part"),s.appendChild(t)}if(l=="_"){let t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1","0"),t.setAttribute("y1","51"),t.setAttribute("x2","12"),t.setAttribute("y2","51"),t.setAttribute("class","part"),s.appendChild(t)}if(o=="_"){let t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1","12"),t.setAttribute("y1","-3"),t.setAttribute("x2","30"),t.setAttribute("y2","-3"),t.setAttribute("class","part"),s.appendChild(t)}if(u=="_"){let t=document.createElementNS("http://www.w3.org/2000/svg","line");t.setAttribute("x1","0"),t.setAttribute("y1","-3"),t.setAttribute("x2","18"),t.setAttribute("y2","-3"),t.setAttribute("class","part"),s.appendChild(t)}return s.appendChild(p([!(o=="/"&&u=="\\"),["-"].includes(i),!(a=="/"&&c=="\\"),["-"].includes(l),o=="/",c=="\\",a=="/",u=="\\"])),s};d["-"]=([r,i,n,l,o,c,a,u])=>p([["|"].includes(r),!0,["|"].includes(n),!0,!1,!1,!1,!1]);d["~"]=([r,i,n,l,o,c,a,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=document.createElementNS("http://www.w3.org/2000/svg","line");return t.setAttribute("x1","9"),t.setAttribute("y1","27"),t.setAttribute("x2","24"),t.setAttribute("y2","27"),t.setAttribute("class","part"),s.appendChild(t),s};d._=r=>{let i=d["-"](r);return i.setAttribute("transform","translate(0 24)"),i};d[":"]=([r,i,n,l,o,c,a,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=document.createElementNS("http://www.w3.org/2000/svg","line");if(t.setAttribute("x1","15"),t.setAttribute("y1","0"),t.setAttribute("x2","15"),t.setAttribute("y2","60"),t.setAttribute("class","part"),t.setAttribute("style","stroke-dasharray: 15; stroke-dashoffset: 0;"),s.appendChild(t),r=="+"){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1","15"),e.setAttribute("y1","-24"),e.setAttribute("x2","15"),e.setAttribute("y2","-15"),e.setAttribute("class","part"),s.appendChild(e)}if(n=="+"){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1","15"),e.setAttribute("y1","60"),e.setAttribute("x2","15"),e.setAttribute("y2","78"),e.setAttribute("class","part"),s.appendChild(e)}return s};d["="]=r=>{let i=document.createElementNS("http://www.w3.org/2000/svg","g"),n=document.createElementNS("http://www.w3.org/2000/svg","line");n.setAttribute("x1","0"),n.setAttribute("y1","21"),n.setAttribute("x2","30"),n.setAttribute("y2","21"),n.setAttribute("class","part"),i.appendChild(n);let l=document.createElementNS("http://www.w3.org/2000/svg","line");return l.setAttribute("x1","0"),l.setAttribute("y1","30"),l.setAttribute("x2","30"),l.setAttribute("y2","30"),l.setAttribute("class","part"),i.appendChild(l),i};d["*"]=([r,i,n,l,o,c,a,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=document.createElementNS("http://www.w3.org/2000/svg","circle");return t.setAttribute("cx","0"),t.setAttribute("cy","0"),t.setAttribute("r","21"),t.setAttribute("stroke","none"),t.setAttribute("transform","translate(15, 27)"),s.appendChild(t),s.appendChild(p([["+","|"].includes(r),["+","-"].includes(i),["+","|"].includes(n),["+","-"].includes(l),["/"].includes(o),["\\"].includes(c),["/"].includes(a),["\\"].includes(u)])),s};d.o=([r,i,n,l,o,c,a,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=document.createElementNS("http://www.w3.org/2000/svg","circle");t.setAttribute("cx","0"),t.setAttribute("cy","0"),t.setAttribute("r","18"),t.setAttribute("stroke-width","6"),t.setAttribute("fill","none"),t.setAttribute("stroke","black"),t.setAttribute("transform","translate(15, 27)"),s.appendChild(t);let e=p([["+","|"].includes(r),["+","-"].includes(i),["+","|"].includes(n),["+","-"].includes(l),["/"].includes(o),["\\"].includes(c),["/"].includes(a),["\\"].includes(u)]);s.appendChild(e);let w=document.createElementNS("http://www.w3.org/2000/svg","circle");return w.setAttribute("cx","0"),w.setAttribute("cy","0"),w.setAttribute("r","15"),w.setAttribute("fill","white"),w.setAttribute("opacity","100%"),w.setAttribute("transform","translate(15, 27)"),s.appendChild(w),s};d["/"]=r=>{let[i,n,l,o,c,a,u,s]=r,t=document.createElementNS("http://www.w3.org/2000/svg","g");if(t.appendChild(p([["|"].includes(i),!1,["|"].includes(l),!1,!0,!1,!0,!1])),n=="\\"){let e=p([!1,!1,!1,!1,!1,!1,!0,!1]);e.setAttribute("transform","translate(30 -54)"),e.setAttribute("clip-path","polygon(-3 0, 0 0, 0 54, -3 54)"),t.appendChild(e)}if(o=="\\"){let e=p([!1,!1,!1,!1,!0,!1,!1,!1]);e.setAttribute("transform","translate(-30 54)"),e.setAttribute("clip-path","polygon(15 -6, 33 -6, 33 6, 15 6)"),t.appendChild(e)}if(n=="_"){let e=d._(r);t.appendChild(e)}return t};d["\\"]=r=>{let[i,n,l,o,c,a,u,s]=r,t=document.createElementNS("http://www.w3.org/2000/svg","g");if(t.appendChild(p([["|"].includes(i),!1,["|"].includes(l),!1,!1,!0,!1,!0])),o=="/"){let e=p([!1,!1,!1,!1,!1,!0,!1,!1]);e.setAttribute("transform","translate(-30 -54)"),e.setAttribute("clip-path","polygon(15 0, 30 0, 30 54, 15 54)"),t.appendChild(e)}if(n=="/"){let e=p([!1,!1,!1,!1,!1,!1,!1,!0]);e.setAttribute("transform","translate(30 54)"),e.setAttribute("clip-path","polygon(-3 0, 0 0, 0 6, -3 6)"),t.appendChild(e)}if(o=="_"){let e=d._(r);t.appendChild(e)}return t};d["#"]=([r,i,n,l,o,c,a,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=document.createElementNS("http://www.w3.org/2000/svg","polygon"),e=[[0,0],[42,0],[42,42],[0,42]];return t.setAttribute("points",e.map(([w,m])=>`${w},${m}`).join(" ")),t.setAttribute("transform","translate(-6, 6)"),s.appendChild(t),s.appendChild(p([["+","|"].includes(r),["+","-"].includes(i),["+","|"].includes(n),["+","-"].includes(l),["/"].includes(o),["\\"].includes(c),["/"].includes(a),["\\"].includes(u)])),s};d["+"]=([r,i,n,l,o,c,a,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=["*","#","-","+","~",">",".","'","`"].includes(i),e=["*","#","-","+","~","<",".","'","`"].includes(l),w=["*","#","|","+",".","`","^"].includes(r),m=["*","#","|","+","'","`","v"].includes(n),h=["/","*","#"].includes(o),g=["\\","*","#"].includes(c),b=["\\","*","#"].includes(u),A=["/","*","#"].includes(a);if(s.appendChild(p([w,t,m,e,h,g,A,b])),(e||t)&&(m||w)){let f=document.createElementNS("http://www.w3.org/2000/svg","polygon");f.setAttribute("points","0,0 6,0 6,6 0,6"),f.setAttribute("transform","translate(-3 -3) translate(15 27)"),s.appendChild(f)}if(h||b){let f=p([!1,!1,!1,!1,!1,b,h,!1]);f.setAttribute("clip-path","polygon(0 -3, 30 -3, 30 0, 0 0)"),s.appendChild(f)}if(g||A){let f=p([!1,!1,!1,!1,A,!1,!1,g]);f.setAttribute("clip-path","polygon(0 27, 15 27, 15 30, 0 30)"),s.appendChild(f)}if(A||b){let f=p([!1,!1,!1,!1,A&&g,b&&h,!1,!1]);f.setAttribute("clip-path","polygon(-3 0, 0 0, 0 54, -3 54)"),s.appendChild(f)}if(g||h){let f=p([!1,!1,!1,!1,!1,!1,h&&b,g&&A]);f.setAttribute("clip-path","polygon(15 0, 30 0, 30 54, 15 54)"),s.appendChild(f)}if(t||e){let f=p([!1,!1,!1,!1,t||A,b,h,e||g]);f.setAttribute("clip-path","polygon(-3 24, 30 24, 30 30, -3 30)"),s.appendChild(f)}return s};d["."]=([r,i,n,l,o,c,a,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g");if((i=="-"||i=="+")&&(n=="|"||n=="'"||n=="`"||n=="+")){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
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
        Z`),s.appendChild(t)}if((i=="-"||i=="+")&&(r=="|"||r=="."||r=="+")){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 30 30
        A 18 18, 0, 0, 1, 12 12
        L 12 0
        L 18 0
        L 18 12
        A 12 12, 0, 0, 0, 30 24
        Z`),s.appendChild(t)}if((l=="-"||l=="+")&&(r=="|"||r=="."||r=="+")){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 0 30
        A 18 18, 0, 0, 0, 18 12
        L 18 0
        L 12 0
        L 12 12
        A 12 12, 0, 0, 1, 0 24
        Z`),s.appendChild(t)}if(i=="-"&&o=="/"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 30 30
        A 12 12, 0, 0, 1, 18 18
        L 18 15
        L 24 15
        L 24 18
        A 6 6, 0, 0, 0, 30 24
        Z`),s.appendChild(t);let e=p([!1,!1,!1,!1,!0,!1,!1,!1]);e.setAttribute("clip-path","polygon(15px -10px, 30px -10px, 30px 30px, 2px 15px)"),s.appendChild(e)}if(i=="-"&&u=="\\"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M -3 0
        A 60 60, 0, 0, 0, 30 30
        L 30 24
        A 60 60, 0, 0, 1, 0 -6
        Z`),s.appendChild(t)}if(l=="-"&&o=="/"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
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
        Z`),s.appendChild(t);let e=p([!1,!1,!1,!1,!1,!1,!1,!0]);e.setAttribute("clip-path","polygon(-3 -3, 12 -3, 12 18, -3 18)"),s.appendChild(e)}if(n=="|"&&o=="/"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 12 54
        A 120 120, 0, 0, 1, 30 -6
        L 37 -6
        A 120 120, 0, 0, 0, 18 54
        Z`),s.appendChild(t)}if(r=="|"&&c=="\\"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 30 60
        A 120 120, 0, 0, 1, 12 0
        L 18 0
        A 120 120, 0, 0, 0, 37 60
        Z`),s.appendChild(t)}if(r=="|"&&a=="/"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 0 60
        A 120 120, 0, 0, 0, 18 0
        L 12 0
        A 120 120, 0, 0, 1, -7 60
        Z`),s.appendChild(t)}if(n=="|"&&u=="\\"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 12 54
        A 120 120, 0, 0, 0, -7 -6
        L 0 -6
        A 120 120, 0, 0, 1, 18 54
        Z`),s.appendChild(t)}if(i=="-"&&a=="/"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 0 48
        A 42 42, 0, 0, 1, 30 24
        L 30 30
        A 42 42, 0, 0, 0, 6 48
        Z`),s.appendChild(t);let e=p([!1,!1,!1,!1,!1,!1,!0,!1]);e.setAttribute("clip-path","polygon(-3 15, 12 15, 12 30, -3 30)"),s.appendChild(e)}if(l=="-"&&c=="\\"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 0 24
        A 42 42, 0, 0, 1, 30 48
        L 24 48
        A 42 42, 0, 0, 0, 0 30
        Z`),s.appendChild(t);let e=p([!1,!1,!1,!1,!1,!0,!1,!1]);e.setAttribute("clip-path","polygon(-3 15, 12 15, 21 30, -3 30)"),s.appendChild(e)}if(l=="-"&&a=="/"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 0 24
        A 12 12, 0, 0, 1, 12 39
        L 6 39
        A 6 6, 0, 0, 0, 0 30
        Z`),s.appendChild(t);let e=p([!1,!1,!1,!1,!1,!1,!0,!1]);e.setAttribute("clip-path","polygon(-3 6, 12 6, 12 30, -3 30)"),s.appendChild(e)}if(i=="-"&&c=="\\"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 30 24
        A 12 12, 0, 0, 0, 18 39
        L 24 39
        A 6 6, 0, 0, 1, 30 30 
        Z`),s.appendChild(t);let e=p([!1,!1,!1,!1,!1,!0,!1,!1]);e.setAttribute("clip-path","polygon(3 6, 18 6, 18 30, 3 30)"),s.appendChild(e)}if(a=="/"&&c=="\\"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 3 42
        A 15 15, 0, 0, 1, 27 42
        L 25 51
        A 9 9, 0, 0, 0, 5 51
        Z`),s.appendChild(t);let e=p([!1,!1,!1,!1,!1,!0,!0,!1]);e.setAttribute("clip-path","polygon(-3 15, 33 15, 33 30, -3 30)"),s.appendChild(e)}if(u=="\\"&&o=="/"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 3 12
        A 15 15, 0, 0, 0, 27 12
        L 22 9
        A 9 9, 0, 0, 1, 8 9
        Z`),s.appendChild(t);let e=p([!1,!1,!1,!1,!0,!1,!1,!0]);e.setAttribute("clip-path","polygon(-3 -3, 33 -3, 33 12, -3 12)"),s.appendChild(e)}if(o=="/"&&c=="\\"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 22 9
        A 30 30, 0, 0, 0, 22 45
        L 28 45
        A 30 30, 0, 0, 1, 28 9
        Z`),s.appendChild(t);let e=p([!1,!1,!1,!1,!0,!0,!1,!1]);e.setAttribute("clip-path","polygon(6 -3, 33 -3, 33 57, 6 57)"),s.appendChild(e)}if(u=="\\"&&a=="/"){let t=document.createElementNS("http://www.w3.org/2000/svg","path");t.setAttribute("d",`
        M 8 9
        A 30 30, 0, 0, 1, 8 45
        L 2 45
        A 30 30, 0, 0, 0, 2 9
        Z`),s.appendChild(t);let e=p([!1,!1,!1,!1,!1,!1,!0,!0]);e.setAttribute("clip-path","polygon(-3 -3, 9 -3, 9 57, -3 57)"),s.appendChild(e)}return s};var y={"\u250C":"+","\u2510":"+","\u2514":"+","\u2518":"+","\u2500":"-","\u25BA":">","'":".","`":".",V:"v"};for(let[r,i]of Object.entries(y))d[r]=n=>d[i](n);d[">"]=([r,i,n,l,o,c,a,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=document.createElementNS("http://www.w3.org/2000/svg","polygon");t.setAttribute("points","0,0 42,18 0,36");let e=0;return(i=="*"||i=="o"||i=="#")&&(e-=18),t.setAttribute("transform",`translate(${e} 9)`),s.appendChild(t),s;let w=document.createElementNS("http://www.w3.org/2000/svg","polygon");return w.setAttribute("points","-3,0 6,0 6,6 -3,6"),w.setAttribute("transform","translate(15 24)"),s.appendChild(w),s.appendChild(p([!1,!1,!1,["-","+"].includes(l),!1,!1,["/"].includes(a),["\\"].includes(u)])),s};d["<"]=([r,i,n,l,o,c,a,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=document.createElementNS("http://www.w3.org/2000/svg","polygon");t.setAttribute("points","0,0 42,18 0,36");let e=30;return(l=="*"||l=="o"||l=="#")&&(e+=18),t.setAttribute("transform",`translate(${e} 9) translate(0 36) rotate(180)`),s.appendChild(t),s;return s.appendChild(p([!1,["-","+"].includes(i),!1,!1,["/"].includes(o),["\\"].includes(c),!1,!1])),s};d.v=([r,i,n,l,o,c,a,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=document.createElementNS("http://www.w3.org/2000/svg","polygon");t.setAttribute("points","0,0 42,18 0,36");let e=36;return n==" "?e=12:n=="_"?e+=18:(n=="*"||n=="o"||n=="#")&&(e-=18),o=="/"?t.setAttribute("transform",`translate(-36 33) rotate(${90+22.5}, 42, 18)`):u=="\\"?t.setAttribute("transform",`translate(-18 33) rotate(${90-22.5}, 42, 18)`):t.setAttribute("transform",`translate(33 ${e}) rotate(90)`),s.appendChild(t),s.appendChild(p([["|","+"].includes(r),!1,["|","+"].includes(r),!1,["/"].includes(o),!1,!1,["\\"].includes(u)])),s};d["^"]=([r,i,n,l,o,c,a,u])=>{let s=document.createElementNS("http://www.w3.org/2000/svg","g"),t=document.createElementNS("http://www.w3.org/2000/svg","polygon");t.setAttribute("points","0,0 42,18 0,36");let e=42;return r=="-"&&(e-=15),a=="/"?t.setAttribute("transform",`translate(-18 -15) rotate(${-45-22.5}, 42, 18)`):c=="\\"?t.setAttribute("transform",`translate(-36 -15) rotate(${-90-22.5}, 42, 18)`):t.setAttribute("transform",`translate(-3 ${e}) rotate(-90)`),s.appendChild(t),s.appendChild(p([!1,!1,["+","|"].includes(n),!1,!1,["\\"].includes(c),["/"].includes(a),!1])),s};function p([r,i,n,l,o,c,a,u]){let s=document.createElementNS("http://www.w3.org/2000/svg","g");if(r){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",15),e.setAttribute("y1",0),e.setAttribute("x2",15),e.setAttribute("y2",27),e.setAttribute("class","part"),s.appendChild(e)}if(i){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",15),e.setAttribute("y1",27),e.setAttribute("x2",30),e.setAttribute("y2",27),e.setAttribute("class","part"),s.appendChild(e)}if(n){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",15),e.setAttribute("y1",27),e.setAttribute("x2",15),e.setAttribute("y2",54),e.setAttribute("class","part"),s.appendChild(e)}if(l){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",0),e.setAttribute("y1",27),e.setAttribute("x2",15),e.setAttribute("y2",27),e.setAttribute("class","part"),s.appendChild(e)}if(document.createElementNS("http://www.w3.org/2000/svg","polygon").setAttribute("points",[[0,0],[20.6,0],[20.6,3],[0,3]].map(([e,w])=>`${e},${w}`).join(" ")),o){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",30),e.setAttribute("y1",0),e.setAttribute("x2",15),e.setAttribute("y2",27),e.setAttribute("class","part"),s.appendChild(e)}if(c){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",15),e.setAttribute("y1",27),e.setAttribute("x2",30),e.setAttribute("y2",54),e.setAttribute("class","part"),s.appendChild(e)}if(a){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",15),e.setAttribute("y1",27),e.setAttribute("x2",0),e.setAttribute("y2",54),e.setAttribute("class","part"),s.appendChild(e)}if(u){let e=document.createElementNS("http://www.w3.org/2000/svg","line");e.setAttribute("x1",0),e.setAttribute("y1",0),e.setAttribute("x2",15),e.setAttribute("y2",27),e.setAttribute("class","part"),s.appendChild(e)}return s}function E(r,i){let n=document.createElementNS("http://www.w3.org/2000/svg","g"),l=document.createElementNS("http://www.w3.org/2000/svg","text"),o=document.createTextNode(r);l.appendChild(o),i&&l.setAttribute("class","reserved");let c=[[15,24]];return l.setAttribute("transform",c.map(([a,u])=>`translate(${a}, ${u})`).join(" ")),n.appendChild(l),n}function N(r){let i=document.createElementNS("http://www.w3.org/2000/svg","g");for(let n=0;n<r.length;n++)for(let l=0;l<r[n].length;l++){let o=r[n][l];if(o==" "||o=='"')continue;let c=d[o],a=document.createElementNS("http://www.w3.org/2000/svg","g"),u=!1;for(let t=0;t<l;t++)r[n][t]=='"'&&(u=!u);let s=x(r,[l,n]);if(o.match(/[A-Za-z0-9]/)){let[,t,,e]=s;u=u||e.match(/[A-Za-uw-z0-9]/)||t.match(/[A-Za-uw-z0-9]/)}c=c&&!u,c&&a.appendChild(d[o](s)),a.appendChild(E(o,c)),a.setAttribute("transform",`translate(${l*30} ${n*54})`),i.appendChild(a)}return i}function S(r,i,n){let l=r.split(`
`).map(t=>t.trimEnd().split(""));l.shift(),l.splice(-1);let o=0,c=l.length;for(let t=0;t<l.length;t++)for(let e=0;e<l[t].length;e++)l[t].length>o&&(o=l[e].length);var a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("width",o*30*i),a.setAttribute("height",c*54*i),a.setAttribute("debug",n);let u=0;a.setAttribute("viewBox",`${-u} ${-u} ${o*30+2*u} ${c*54+2*u}`),a.setAttribute("class","debug");var s=document.createElementNS("http://www.w3.org/2000/svg","style");return s.innerHTML=`
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
  `,a.appendChild(s),a.appendChild(N(l)),n&&a.appendChild(C(o,c)),a}function x(r,[i,n]){let l=" ",o=" ",c=" ",a=" ",u=" ",s=" ",t=" ",e=" ";return n>0&&(o=r[n-1][i]||" "),i<r[n].length-1&&(c=r[n][i+1]||" "),n<r.length-1&&(a=r[n+1][i]||" "),i>0&&(l=r[n][i-1]||" "),n>0&&i<r[n-1].length-1&&(u=r[n-1][i+1]||" "),n+1<r.length&&i<r[n+1].length&&(s=r[n+1][i+1]||" "),n<r.length-1&&i>0&&(t=r[n+1][i-1]||" "),n>0&&i>0&&(e=r[n-1][i-1]||" "),[o,c,a,l,u,s,t,e]}var v=S;document.addEventListener("DOMContentLoaded",function(){for(let r of document.querySelectorAll("script[type='text/typogram']")){if(r.hasAttribute("disabled"))continue;let i=r.innerText,n=Number(r.getAttribute("zoom")||.3),l=r.hasAttribute("grid"),o=v(i,n,l);r.parentNode.insertBefore(o,r.nextSibling)}});})();
