"use strict";(self.webpackChunkcloudpbx_portal_docs=self.webpackChunkcloudpbx_portal_docs||[]).push([[4689],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={title:"Programming auto-attendants",sidebar_position:6},s="Programming auto-attendants",i={unversionedId:"Programming-auto-attendants",id:"Programming-auto-attendants",title:"Programming auto-attendants",description:"Overview",source:"@site/docs/Programming-auto-attendants.md",sourceDirName:".",slug:"/Programming-auto-attendants",permalink:"/cloudpbx-portal-docs/docs/Programming-auto-attendants",draft:!1,editUrl:"https://github.com/portaone/cloudpbx-portal-docs-source/tree/development/docs/Programming-auto-attendants.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Programming auto-attendants",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Calls within business hours and non-working hours",permalink:"/cloudpbx-portal-docs/docs/Calls-within-business-hours-and-non-working-hours"},next:{title:"Security",permalink:"/cloudpbx-portal-docs/docs/category/security"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Auto-attendants with always active menus",id:"auto-attendants-with-always-active-menus",level:2},{value:"Auto-attendants with menus that have custom schedules",id:"auto-attendants-with-menus-that-have-custom-schedules",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"programming-auto-attendants"},"Programming auto-attendants"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The auto-attendant functionality allows callers to be automatically transferred to an extension without first going through a telephone operator or receptionist. For a caller to find a user on a phone system, a dial-by-name directory is usually available. This feature lists users by name; therefore, the caller can press a key to automatically ring the user\u2019s extension once the auto-attendant has announced it. The auto-attendant can also route calls to mobile phones, VoIP virtual phones, other auto-attendants, or other locations that use traditional landline phones. If a user is not available, the auto-attendant directs callers to the appropriate voice mailbox for the caller to leave a voicemail message."),(0,o.kt)("p",null,'Open menu "',(0,o.kt)("strong",{parentName:"p"},"Cloud PBX")," ",">"," ",(0,o.kt)("strong",{parentName:"p"},"Auto-attendants"),'" to see auto-attendant(s) configured for your Cloud PBX.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5531).Z,width:"1143",height:"511"})),(0,o.kt)("p",null,"The auto-attendant may be composed of a set of independent menus (for example, one menu can be used to route calls within the Support Department, and others \u2013 within the Sales Department). All of them are identical in every respect, except for the ROOT menu, which is always present and cannot be deleted, and whose name cannot be changed."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7139).Z,width:"1113",height:"578"})),(0,o.kt)("h2",{id:"auto-attendants-with-always-active-menus"},"Auto-attendants with always active menus"),(0,o.kt)("p",null,'The flow of incoming calls to an auto-attendant number is always routed to menu "',(0,o.kt)("strong",{parentName:"p"},"ROOT"),'" first.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1652).Z,width:"1145",height:"553"})),(0,o.kt)("p",null,'If you need to configure a menu that is always active, hover over menu "',(0,o.kt)("strong",{parentName:"p"},"ROOT"),'" and click "',(0,o.kt)("strong",{parentName:"p"},"Change menu settings"),'".'),(0,o.kt)("p",null,'On tab "',(0,o.kt)("strong",{parentName:"p"},"Settings"),'" select radio button "',(0,o.kt)("strong",{parentName:"p"},"Always"),'" to set this menu so it is always active.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4623).Z,width:"1164",height:"860"})),(0,o.kt)("p",null,'On tab "',(0,o.kt)("strong",{parentName:"p"},"Prompts"),'" enable options to upload greetings and guidance for people who call your number.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5016).Z,width:"1098",height:"828"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Intro")," \u2013 the prompt is played when the menu is entered for the first time.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"e.g.\u201cWelcome to ACME, a security solutions company!\u201d")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Menu")," \u2013 the menu prompt that will be guiding callers.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"e.g. \u201cPress 1 for sales, press 2 for technical support\u201d.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"On timeout")," \u2013 the prompt that will be assisting callers in case they exceed the waiting time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"On unavailable selection")," \u2013 the prompt that will be assisting callers in case they press a wrong key.")),(0,o.kt)("p",null,'Click "',(0,o.kt)("strong",{parentName:"p"},"+"),'" on tab "',(0,o.kt)("strong",{parentName:"p"},"Call flow"),'" or open a selected menu and open tab "',(0,o.kt)("strong",{parentName:"p"},"Actions"),'" to assign actions to different events.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5586).Z,width:"747",height:"773"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'e.g. When a caller presses 1, redirect them to call queue "Support\u201d.')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},'Enable option "Play before action" to upload a prompt that must be played prior to the selected action.')))),(0,o.kt)("h2",{id:"auto-attendants-with-menus-that-have-custom-schedules"},"Auto-attendants with menus that have custom schedules"),(0,o.kt)("p",null,"The auto-attendant may be composed of a set of independent menus that can be active at different times."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"e.g. One menu can be used during business hours, and others \u2013 during non-business hours and on weekends.")),(0,o.kt)("p",null,"Consider the following example: your company wants to configure the auto-attendant functionality so that different menus will answer calls during business and non-business hours. During business hours, you also want the caller to hear a welcome prompt first and then the menu prompt. Your company has two departments (sales and support) that you wish to make available to the caller. When a caller dials from a landline, they hear a recorded voice greeting that offers connection options, such as, \u201cHello! You have reached SmartCall Ltd. To reach the sales department, Press 1; to reach the support department, Press 2. If you know the extension of the person you are trying to reach, you can dial that now.\u201d"),(0,o.kt)("p",null,"When adding a new auto-attendant, you can define your company's business hours. You can specify the opening and closing times for the entire week."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"e.g. Business hours are 08:00 AM")," ",(0,o.kt)("em",{parentName:"p"},"- 05:00 PM, Monday to Friday.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7113).Z,width:"762",height:"801"})),(0,o.kt)("p",null,'If you need to change the business hours for a particular day, you can redefine "',(0,o.kt)("strong",{parentName:"p"},"Custom schedule"),'" for the menu that is active during business hours.'),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"e.g. Business hours normally are 08:00 AM")," ",(0,o.kt)("em",{parentName:"p"},"- 05:00 PM, Monday to Friday, except Tuesday. On Tuesday, the business hours are 11:00 AM - 07:59 PM.")),(0,o.kt)("p",null,'Open the menu that is active during business hours, and remove check box "',(0,o.kt)("strong",{parentName:"p"},"Tue"),'" for option "',(0,o.kt)("strong",{parentName:"p"},"Days"),'". Then click "',(0,o.kt)("strong",{parentName:"p"},"Add interval"),'" to add the opening and closing time on Tuesday.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5043).Z,width:"1101",height:"844"})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},'Exceptions/holidays may be defined in menu "ROOT".')))),(0,o.kt)("p",null,'This way, you can configure menu "',(0,o.kt)("strong",{parentName:"p"},"ROOT"),'" to process calls during weekends (and holidays) and the alternative menu \u2013 to process calls during business hours, and there\u2019s one more menu for handling calls after business hours.'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(22).Z,width:"1535",height:"889"})),(0,o.kt)("p",null,'The flow of incoming calls to an auto-attendant number is always routed to menu "',(0,o.kt)("strong",{parentName:"p"},"ROOT"),'" first. If menu "',(0,o.kt)("strong",{parentName:"p"},"ROOT"),'" is not currently active, the calls are processed by the alternative menu specified in the menu\u2019s option "',(0,o.kt)("strong",{parentName:"p"},"When the menu is inactive"),'".'),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6853).Z,width:"1078",height:"827"})),(0,o.kt)("p",null,'If the alternative menu is not active either, the calls are routed to the menu specified in the alternative menu\u2019s option "',(0,o.kt)("strong",{parentName:"p"},"When the menu is inactive"),'", etc.'),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},'Enable option "Expand menus" to see how different menus are logically linked.')))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6700).Z,width:"1559",height:"875"})))}d.isMDXComponent=!0},6853:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Programming_auto-attendants-Alternative_menus-86f0fdef600bac570373327be23bcd41.png"},1652:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Programming_auto-attendants-Always_active-f991826fc640229d05b1e25eb51da7af.png"},4623:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Programming_auto-attendants-Always_active_configuration-957fd78bcd1417f139257416ca02d19e.png"},6700:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Programming_auto-attendants-Call_flow-8fcf5d069d364260eaad6779fc7339b9.png"},22:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Programming_auto-attendants-Custom_schedules-60ef898590370ae298c65acad76e6b2a.png"},7113:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Programming_auto-attendants-Custom_schedules_template-e0ef680df0725e50fb99ec5f18fda11e.png"},5043:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Programming_auto-attendants-Customize_schedules-c3f24c7ddfd01f601729e0d83d83709f.png"},5586:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Programming_auto-attendants-Defining_actions-94dc90e9bf645242c1ec290551298c80.png"},7139:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Programming_auto-attendants-Menus-171049e3afd66dba33f12145f6122f03.png"},5531:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Programming_auto-attendants-Overview-c954ae56c6da414fb9f75335ce0e6159.png"},5016:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Programming_auto-attendants-Upload_prompts-7a482f3618100464c6d8a6f3443d0340.png"}}]);