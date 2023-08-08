"use strict";(self.webpackChunkcloudpbx_portal_docs=self.webpackChunkcloudpbx_portal_docs||[]).push([[3698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={slug:"release-notes-1.2.1",title:"Release Notes 1.2.1",authors:"sat",tags:["release notes","portal","1.2.1"]},l=void 0,i={permalink:"/cloudpbx-portal-docs/de/blog/release-notes-1.2.1",editUrl:"https://github.com/portaone/cloudpbx-portal-docs-source/tree/development/blog/2023-08-08-1.2.1.md",source:"@site/blog/2023-08-08-1.2.1.md",title:"Release Notes 1.2.1",description:"Release 1.2.1 brings new functionality and bugfixes. Minimal PortaSwitch version is MR106.",date:"2023-08-08T00:00:00.000Z",formattedDate:"8. August 2023",tags:[{label:"release notes",permalink:"/cloudpbx-portal-docs/de/blog/tags/release-notes"},{label:"portal",permalink:"/cloudpbx-portal-docs/de/blog/tags/portal"},{label:"1.2.1",permalink:"/cloudpbx-portal-docs/de/blog/tags/1-2-1"}],readingTime:2.225,hasTruncateMarker:!0,authors:[{name:"Oleg Shevtsov",title:"Head of PMD",url:"https://www.linkedin.com/in/olegshevtsov/",imageURL:"https://blog.portaone.com/wp-content/uploads/2022/06/cropped-new_shevtsov.jpg",key:"sat"}],frontMatter:{slug:"release-notes-1.2.1",title:"Release Notes 1.2.1",authors:"sat",tags:["release notes","portal","1.2.1"]},nextItem:{title:"Release Notes 1.1.1",permalink:"/cloudpbx-portal-docs/de/blog/release-notes-1.1.1"}},s={authorsImageUrls:[void 0]},u=[{value:"Enhancements:",id:"enhancements",level:3},{value:"Bugfixes:",id:"bugfixes",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Release 1.2.1 brings new functionality and bugfixes. Minimal PortaSwitch version is MR106."),(0,r.kt)("h3",{id:"enhancements"},"Enhancements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ICAP-1661 Add filter Queued for call states in Current calls"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1260 Hints for controls with read-only permission based on portal view permissions"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1794 Show messages that inform users about errors on other tabs"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1959 Show calls on hold for a ring group")),(0,r.kt)("h3",{id:"bugfixes"},"Bugfixes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ICAP-1961 Crop too long Inventory ID in the list of devices"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1587 Crop long names of devices and show full names in a tooltip"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1735 Extra blinking window appears on attempt to delete extension from ring group"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1741 Infinite loading animation when refresh icons are clicked for several Extensions or SIP trunks in a row"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1752 Add front-end validation for PIN codes to access voicemail of auto-attendants"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1859 Make it possible to log in if a web password is shorter than 6 symbols"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1870 Update voicemail settings using the new account ID after an extension number is changed"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1871 Avoid duplicate error messages under fields and in snackbars for auto-attendants and faxes"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1879 Filtered DIDs list is preserved when reopening DIDs page"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1881 Total shows registered trunks and extensions without relation to the set filters"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1882 Wrong total is shown for a while after removing extension from the list"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1883 Errors in console and double reloading after saving unsaved device changes"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1898 Error on attempt to open fax after confirming saving unsaved changes"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1914 Show the full instructions in the dialogue to upload device for German and Portuguese"),(0,r.kt)("li",{parentName:"ul"},'ICAP-1935 Change the button label from "Close" to "Cancel" for dialogues to transfer a call and add a participant to the conference call'),(0,r.kt)("li",{parentName:"ul"},"ICAP-1938 Extension and group are cached if a dialog was closed without confirming Transfer or Adding participant to the conference"),(0,r.kt)("li",{parentName:"ul"},'ICAP-1939 Localize "call_supervision" for column Destination in the list of current calls'),(0,r.kt)("li",{parentName:"ul"},"ICAP-1941 Prohibit users to disconnect calls when Control calls node has view-only permission"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1942 DID number is assigned to an extension that was previously selected in the Add new DID number dialogue closed without saving"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1950 Allow users to filter the list of accounts that can be used in SIP contact by an account ID"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1958 Impossible to enable permanent ringing for calls dispatched to an extension via a ring group"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1966 Remove the char counters for the inputs with up/down arrows in the call queue configuration"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1967 Remove the validation error after an extension is selected for the call queue configuration"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1970 Issues with validation errors for DTMF code field in call queue configuration")))}d.isMDXComponent=!0}}]);