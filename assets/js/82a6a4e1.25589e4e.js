"use strict";(self.webpackChunkcloudpbx_portal_docs=self.webpackChunkcloudpbx_portal_docs||[]).push([[5489],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5141:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={slug:"release-notes-1.0.1",title:"Release Notes 1.0.1",authors:"sat",tags:["release notes","portal","1.0.1"]},l=void 0,s={permalink:"/cloudpbx-portal-docs/blog/release-notes-1.0.1",editUrl:"https://github.com/portaone/cloudpbx-portal-docs-source/tree/development/blog/2023-07-11-1.0.1.md",source:"@site/blog/2023-07-11-1.0.1.md",title:"Release Notes 1.0.1",description:"Release 1.0.1 brings new functionality and bugfixes. Minimal PortaSwitch version is MR106, thus we incresed MAJOR version from 0.58.0 to 1.0.1.",date:"2023-07-11T00:00:00.000Z",formattedDate:"July 11, 2023",tags:[{label:"release notes",permalink:"/cloudpbx-portal-docs/blog/tags/release-notes"},{label:"portal",permalink:"/cloudpbx-portal-docs/blog/tags/portal"},{label:"1.0.1",permalink:"/cloudpbx-portal-docs/blog/tags/1-0-1"}],readingTime:2.075,hasTruncateMarker:!0,authors:[{name:"Oleg Shevtsov",title:"Head of PMD",url:"https://www.linkedin.com/in/olegshevtsov/",imageURL:"https://blog.portaone.com/wp-content/uploads/2022/06/cropped-new_shevtsov.jpg",key:"sat"}],frontMatter:{slug:"release-notes-1.0.1",title:"Release Notes 1.0.1",authors:"sat",tags:["release notes","portal","1.0.1"]},prevItem:{title:"Release Notes 0.58.1",permalink:"/cloudpbx-portal-docs/blog/release-notes-0.58.1"},nextItem:{title:"Release Notes 0.57.1",permalink:"/cloudpbx-portal-docs/blog/release-notes-0.57.1"}},i={authorsImageUrls:[void 0]},c=[{value:"Enhancements:",id:"enhancements",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Release 1.0.1 brings new functionality and bugfixes. Minimal PortaSwitch version is MR106, thus we incresed MAJOR version from ",(0,o.kt)("strong",{parentName:"p"},"0"),".58.0 to ",(0,o.kt)("strong",{parentName:"p"},"1"),".0.1."),(0,o.kt)("h3",{id:"enhancements"},"Enhancements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ICAP-1711 Allow users to import extensions of main offices from a CSV file"),(0,o.kt)("li",{parentName:"ul"},"ICAP-1789 Configure portals to create active or inactive SIP trunks"),(0,o.kt)("li",{parentName:"ul"},"ICAP-1878 Implement a switchboard that allows to control current calls (e.g. put them on hold, disconnect, transfer or add more participants)"),(0,o.kt)("li",{parentName:"ul"},"ICAP-1889 Allow users to change to the dark theme in a full-screen mode of the Wallboard"),(0,o.kt)("li",{parentName:"ul"},"ICAP-1929 Add a delay after putting the call on hold/resuming the call and before refreshing the list of current calls")))}m.isMDXComponent=!0}}]);