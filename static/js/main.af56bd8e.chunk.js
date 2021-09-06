(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),o=a(4),n=a.n(o),l=(a(9),a(2)),i=(a(10),a(0));function r(){var e=Object(c.useState)({backgroundColor:"white",color:"black",border:"1px solid white"}),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)("Enable Dark Mode"),n=Object(l.a)(o,2),r=n[0],d=n[1];return Object(i.jsx)("div",{style:a,children:Object(i.jsxs)("div",{className:"accordion container my-3",id:"accordionExample",children:[Object(i.jsx)("h2",{children:"About us"}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{style:a,className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{style:a,className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{style:a,className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{style:a,className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{style:a,className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{style:a,className:"accordion-body",children:[Object(i.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsx)("button",{className:"btn btn-primary my-3",type:"button",onClick:function(){"black"===a.color?(s({backgroundColor:"black",color:"white",border:"1px solid white"}),d("Disable Dark Mode")):(s({backgroundColor:"white",color:"black",border:"1px solid white"}),d("Enable Dark Mode"))},children:r})]})})}var d=a.p+"static/media/logo.6ce24c58.svg";function h(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"/",children:Object(i.jsx)("img",{src:d,alt:""})}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:e.home})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"/about",children:"About"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"/",children:"Contact us"})})]}),Object(i.jsx)("input",{className:"me-3",type:"color",value:e.color,onChange:e.chooseColor}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("dark"===e.mode?"light":"dark"),children:[Object(i.jsx)("input",{onClick:e.toggleMode,className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})]})})}function b(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],o=a[1];return Object(i.jsxs)("div",{className:"my-3 container text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("h1",{children:e.heading}),Object(i.jsx)("textarea",{className:"form-control my-3 bg-".concat(e.mode," text-").concat("light"===e.mode?"dark":"light"),value:s,onChange:function(e){o(e.target.value)},id:"FormControlTextarea1",rows:"6"}),Object(i.jsxs)("div",{className:"d-flex",children:[Object(i.jsxs)("div",{className:"flex-fill",children:[Object(i.jsx)("button",{className:"btn btn-primary",onClick:function(){o(s.toUpperCase()),e.showAlert("success","Text is Converted in Upercase")},children:"Convert to Upercase"}),Object(i.jsx)("button",{className:"ms-2 btn btn-primary",onClick:function(){o(s.toLowerCase()),e.showAlert("success","Text is Converted in Lowercase")},children:"Convert to Lowercase"}),Object(i.jsx)("button",{className:"ms-2 btn btn-primary",onClick:function(){o(s.replace(/\s+/g," ").trim()),e.showAlert("success","Extra Spaces are removed")},children:"Remove Extra Spaces"})]}),Object(i.jsxs)("div",{className:"flex-fill text-end",children:[Object(i.jsx)("button",{className:"ms-2 btn btn-primary",onClick:function(){o(""),e.showAlert("success","Text Form is Cleared")},children:"Clear Text"}),Object(i.jsx)("button",{className:"ms-2 btn btn-primary",onClick:function(){var t=document.getElementById("FormControlTextarea1");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("success","Text is copied to clipboard")},children:"Copy Text"})]})]}),Object(i.jsxs)("div",{className:"my-3",children:[Object(i.jsx)("h2",{children:"Your Text Summary"}),Object(i.jsxs)("p",{children:[Object(i.jsx)("b",{children:s.split(" ").length-1})," Words & ",Object(i.jsx)("b",{children:s.length})," Charecters"]}),Object(i.jsx)("h2",{children:"Time to read"}),Object(i.jsxs)("p",{children:["Estimate time to read this text is ",Object(i.jsx)("b",{children:.5*s.split(" ").length-.5})," Sec"]}),Object(i.jsx)("h2",{children:"Text Preview"}),Object(i.jsx)("p",{children:s.length>0?s:"Enter Text to preview here"})]})]})}function j(e){return e.alert&&Object(i.jsx)("div",{className:"position-relative",children:Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.type," position-absolute top-100 start-50 translate-middle text-capitalize text-center alert-dismissible fade show"),role:"alert",children:[Object(i.jsxs)("strong",{children:[e.alert.type,":"]})," ",e.alert.msg]})})}h.defaultProps={home:"Home Text",home_url:"home url"};var m=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)(""),n=Object(l.a)(o,2),d=n[0],m=n[1],u=Object(c.useState)(""),p=Object(l.a)(u,2),x=p[0],g=p[1],O=function(e,t){m({type:e,msg:t}),setTimeout((function(){m(null)}),1500)};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(h,{home:"Home",mode:a,toggleMode:function(){"light"===a?(s("dark"),document.body.style.backgroundColor=x,document.body.style.color="#000 !important",O("success","Dark Mode hase been enabled")):(s("light"),document.body.style.backgroundColor="#fff",document.body.style.color="#fff !important",O("success","Light Mode hase been enabled"))},color:x,chooseColor:function(e){g(e.target.value)}}),Object(i.jsx)(j,{alert:d}),Object(i.jsx)(b,{showAlert:O,heading:"Enter Any Text To Analyz",mode:a}),Object(i.jsx)(r,{})]})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),o(e),n(e)}))};n.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),u()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.af56bd8e.chunk.js.map