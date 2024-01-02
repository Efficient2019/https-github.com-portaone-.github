"use strict";(self.webpackChunkcloudpbx_portal_docs=self.webpackChunkcloudpbx_portal_docs||[]).push([[205],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3130:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={slug:"release-notes-1.1.1",title:"Release Notes 1.1.1",authors:"sat",tags:["release notes","portal","1.1.1"]},l=void 0,s={permalink:"/cloudpbx-portal-docs/blog/release-notes-1.1.1",editUrl:"https://github.com/portaone/cloudpbx-portal-docs-source/tree/development/blog/2023-07-25-1.1.1.md",source:"@site/blog/2023-07-25-1.1.1.md",title:"Release Notes 1.1.1",description:"Release 1.1.1 brings new functionality and bugfixes. Minimal PortaSwitch version is MR106.",date:"2023-07-25T00:00:00.000Z",formattedDate:"July 25, 2023",tags:[{label:"release notes",permalink:"/cloudpbx-portal-docs/blog/tags/release-notes"},{label:"portal",permalink:"/cloudpbx-portal-docs/blog/tags/portal"},{label:"1.1.1",permalink:"/cloudpbx-portal-docs/blog/tags/1-1-1"}],readingTime:2.24,hasTruncateMarker:!0,authors:[{name:"Oleg Shevtsov",title:"Head of PMD",url:"https://www.linkedin.com/in/olegshevtsov/",imageURL:"https://blog.portaone.com/wp-content/uploads/2022/06/cropped-new_shevtsov.jpg",key:"sat"}],frontMatter:{slug:"release-notes-1.1.1",title:"Release Notes 1.1.1",authors:"sat",tags:["release notes","portal","1.1.1"]},prevItem:{title:"Release Notes 1.2.1",permalink:"/cloudpbx-portal-docs/blog/release-notes-1.2.1"},nextItem:{title:"Release Notes 0.58.1",permalink:"/cloudpbx-portal-docs/blog/release-notes-0.58.1"}},i={authorsImageUrls:[void 0]},c=[{value:"Enhancements:",id:"enhancements",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Release 1.1.1 brings new functionality and bugfixes. Minimal PortaSwitch version is MR106."),(0,n.kt)("h3",{id:"enhancements"},"Enhancements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ICAP-1280 Round quantity to 2 decimal places"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1522 Dispatch calls to busy agents of a call queue"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1630 Allow users to configure options for callers to exit a call queue"),(0,n.kt)("li",{parentName:"ul"},'ICAP-1758 Disable "Transfer to voicemail" action in the menu if unified messaging is disabled for this auto-attendant'),(0,n.kt)("li",{parentName:"ul"},"ICAP-1762 Add a new field for a user to reconfirm a new password from My profile"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1810 Add a loading mask for wallboard widgets"),(0,n.kt)("li",{parentName:"ul"},'ICAP-1848 Hide "Edit" buttons for the list of assigned devices if shared line is disabled'),(0,n.kt)("li",{parentName:"ul"},"ICAP-1856 Localization of supervised calls"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1905 Change the color of the account Registered status from grey to green"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1912 Fetch a list of auto-attendants by applying service_features_filter for auto_attendant"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1932 Allow users to control on-hold music setting for auto-attendants"),(0,n.kt)("li",{parentName:"ul"},"ICAP-1948 Fetch the list of extensions that have voicemail enabled for the configuration of a call queue")))}d.isMDXComponent=!0}}]);