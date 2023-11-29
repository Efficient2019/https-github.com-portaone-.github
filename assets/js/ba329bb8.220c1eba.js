"use strict";(self.webpackChunkcloudpbx_portal_docs=self.webpackChunkcloudpbx_portal_docs||[]).push([[6418],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5806:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={slug:"release-notes-1.5.0",title:"Release Notes 1.5.0",authors:"sat",tags:["release notes","portal","1.5.0"]},o=void 0,i={permalink:"/cloudpbx-portal-docs/blog/release-notes-1.5.0",editUrl:"https://github.com/portaone/cloudpbx-portal-docs-source/tree/development/blog/2023-11-07-1.5.0.md",source:"@site/blog/2023-11-07-1.5.0.md",title:"Release Notes 1.5.0",description:"Release 1.5.0 brings new functionality and bugfixes. Minimal PortaSwitch version is MR106.",date:"2023-11-07T00:00:00.000Z",formattedDate:"November 7, 2023",tags:[{label:"release notes",permalink:"/cloudpbx-portal-docs/blog/tags/release-notes"},{label:"portal",permalink:"/cloudpbx-portal-docs/blog/tags/portal"},{label:"1.5.0",permalink:"/cloudpbx-portal-docs/blog/tags/1-5-0"}],readingTime:3.57,hasTruncateMarker:!0,authors:[{name:"Oleg Shevtsov",title:"Head of PMD",url:"https://www.linkedin.com/in/olegshevtsov/",imageURL:"https://blog.portaone.com/wp-content/uploads/2022/06/cropped-new_shevtsov.jpg",key:"sat"}],frontMatter:{slug:"release-notes-1.5.0",title:"Release Notes 1.5.0",authors:"sat",tags:["release notes","portal","1.5.0"]},prevItem:{title:"Release Notes 1.6.0",permalink:"/cloudpbx-portal-docs/blog/release-notes-1.6.0"},nextItem:{title:"Release Notes 0.59.3",permalink:"/cloudpbx-portal-docs/blog/release-notes-0.59.3"}},s={authorsImageUrls:[void 0]},u=[{value:"Enhancements:",id:"enhancements",level:3},{value:"Bugfixes:",id:"bugfixes",level:3}],c={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Release 1.5.0 brings new functionality and bugfixes. Minimal PortaSwitch version is MR106."),(0,r.kt)("h3",{id:"enhancements"},"Enhancements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ICAP-1712 Add labels to fields of forwarding rules"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1725 Notify users that a widget was successfully added/updated/removed"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1849 Add a tooltip for Shared line appearance"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1960 Change the style of the badge which lets users know their access to call forwarding, call screening, and current calls is denied"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2009 Save the call recording volume level set by a user"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2036 Adjust the diagram which visualizes a call path"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2044 Use the human-readable format for the duration in the call statistics"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2046 Adjust the style of the call statistics widgets"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2047 Separate thousands from hundreds in the Billing menu"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1936 Add missing translations for Portuguese and German")),(0,r.kt)("h3",{id:"bugfixes"},"Bugfixes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ICAP-1231 Payment receipt downloaded from mobile is in the wrong format"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2054 Wrong auto-attendant time interval is created"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1597 Remove the unnecessary space after prompt options in auto-attendant menus"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1779 Classes of numbers cannot be changed if call barring settings are inherited from the customer"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1658 Semicolon ; is shown in forwarding time interval before years"),(0,r.kt)("li",{parentName:"ul"},'ICAP-1722 Show label "Refreshing" in italics on the Wallboard'),(0,r.kt)("li",{parentName:"ul"},'ICAP-1737 Extension just added to a ring group with option "Permanently ringing" has this option set for "Custom" with 0 values when a user checks it before saving changes'),(0,r.kt)("li",{parentName:"ul"},'ICAP-1743 Space is missing in the max calls fair usage policy after "/"'),(0,r.kt)("li",{parentName:"ul"},'ICAP-1745 Show "All simultaneous" as first value in tooltip if it exists'),(0,r.kt)("li",{parentName:"ul"},"ICAP-1769 Adjust the message about the reset password"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1771 Localize the error received during the password reset"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1880 Previous total is shown when applying filters that do not match any device in the list"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1892 Trunk ID is not shown on the page if customer API role restricts access to DIDs"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1896 Add a hair space between values and units on the wallboard and in billing transactions"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1919 Unnecessary parameters are sent in API request when the list of extensions is downloaded"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1949 A different short code is shown right before the dialogue to edit the call screening mode is closed"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1955 Mode usage is not updated after adding/removing it to the call screening rule"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1990 Notify users that their access to current calls is restricted"),(0,r.kt)("li",{parentName:"ul"},"ICAP-1991 Remove the name of a SIP trunk whose ID contains a hyphen"),(0,r.kt)("li",{parentName:"ul"},'ICAP-1994 Add localization for "No options" shown in the drop-down lists'),(0,r.kt)("li",{parentName:"ul"},"ICAP-2007 Allow users with read-only permissions to press the Cancel button"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2008 The number of records in the call history does not match the pagination after search filters are applied"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2011 Add area code to the name of found results"),(0,r.kt)("li",{parentName:"ul"},'ICAP-2022 Remove an unnecessary scroll in "Make a payment" dialogue (Firefox)'),(0,r.kt)("li",{parentName:"ul"},"ICAP-2024 Change the style of the badge which lets users know that their permissions are restricted"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2038 Statistics is moving in the header of Call activity menu"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2039 Undefined error appears after opening ring group from Call activity and going back"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2048 Hide the Play button for users with restricted access to Play call recording"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2049 Allow users with view-only permissions to filter current calls by extensions"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2051 Wrong call abandon rate"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2053 Wrong DID fee is displayed due to the rounding issue"),(0,r.kt)("li",{parentName:"ul"},'ICAP-2055 Timeout is not reset after "No input" action is deleted from an auto-attendant menu'),(0,r.kt)("li",{parentName:"ul"},"ICAP-2058 Allow users to define time intervals when their forwarding rules are effective"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2073 Layout issues with German and Brazilian localization of the call queue settings"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2077 Localization of the call counter for Brazilian"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2078 Wrong call counters are shown in call statistics"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2079 Wrong interval is shown for the auto-attendant interval"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2080 The names of call metrics are not centrally aligned"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2084 It is impossible to change the time interval for an auto-attendant menu from the whole day to a more specific interval"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2088 Allow users to delete a selected time interval for auto-attendant menu"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2090 The last time entry is removed when removing AA menu schedules"),(0,r.kt)("li",{parentName:"ul"},"ICAP-2091 Allow users to see all time intervals that an auto-attendant menu has")))}m.isMDXComponent=!0}}]);