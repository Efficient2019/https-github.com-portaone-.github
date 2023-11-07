"use strict";(self.webpackChunkcloudpbx_portal_docs=self.webpackChunkcloudpbx_portal_docs||[]).push([[1389],{8402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(5893),o=n(3905);const i={slug:"release-notes-0.47.0",title:"Release Notes 0.47.0",authors:"sat",tags:["release notes","portal","0.47.0"]},a=void 0,s={permalink:"/cloudpbx-portal-docs/blog/release-notes-0.47.0",editUrl:"https://github.com/portaone/cloudpbx-portal-docs-source/tree/development/blog/2023-01-07-0.47.0.md",source:"@site/blog/2023-01-07-0.47.0.md",title:"Release Notes 0.47.0",description:"Release 0.47.0 introduces two-factor authentication",date:"2023-01-07T00:00:00.000Z",formattedDate:"January 7, 2023",tags:[{label:"release notes",permalink:"/cloudpbx-portal-docs/blog/tags/release-notes"},{label:"portal",permalink:"/cloudpbx-portal-docs/blog/tags/portal"},{label:"0.47.0",permalink:"/cloudpbx-portal-docs/blog/tags/0-47-0"}],readingTime:2.1,hasTruncateMarker:!0,authors:[{name:"Oleg Shevtsov",title:"Head of PMD",url:"https://www.linkedin.com/in/olegshevtsov/",imageURL:"https://blog.portaone.com/wp-content/uploads/2022/06/cropped-new_shevtsov.jpg",key:"sat"}],frontMatter:{slug:"release-notes-0.47.0",title:"Release Notes 0.47.0",authors:"sat",tags:["release notes","portal","0.47.0"]},unlisted:!1,prevItem:{title:"Release Notes 0.48.0 and 0.49.0",permalink:"/cloudpbx-portal-docs/blog/release-notes-0.49.0"}},l={authorsImageUrls:[void 0]},c=[{value:"Enhancements:",id:"enhancements",level:3}];function d(e){const t={h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Release 0.47.0 introduces two-factor authentication"}),"\n",(0,r.jsx)(t.h3,{id:"enhancements",children:"Enhancements:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"ICAP-1487: Two-factor authentication"}),"\n",(0,r.jsx)(t.li,{children:"ICAP-1639: Set Follow-me forwarding mode as default option when call forwarding is enabled"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Bugfixes:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:'ICAP-1342 Fix translation for "Whole day" for de and pt'}),"\n",(0,r.jsx)(t.li,{children:"ICAP-1480 The page jumps when switching between tabs with call screening filters"}),"\n",(0,r.jsx)(t.li,{children:"ICAP-1526 Fix translations for English, German and Portuguese in schedules"}),"\n",(0,r.jsx)(t.li,{children:"ICAP-1538 Misaligned timeout option and the info icon in the Edit call screening mode dialogue"}),"\n",(0,r.jsx)(t.li,{children:"ICAP-1542 Incorrect char counter for the length of response message names"}),"\n",(0,r.jsx)(t.li,{children:'ICAP-1547 "..." not shown for cropped filter values if they contain spaces in call screening policy rule'}),"\n",(0,r.jsx)(t.li,{children:"ICAP-1554 Arrange subsequent years as ranges delimited by hyphens for call screening time filters"}),"\n",(0,r.jsx)(t.li,{children:"ICAP-1640 Arrange subsequent years as ranges delimited by hyphens for call forwarding rules"}),"\n",(0,r.jsx)(t.li,{children:'ICAP-1644 Make option "Permanently" a default value for the "Ringing" setting in "Edit group member" dialogue'}),"\n",(0,r.jsx)(t.li,{children:"ICAP-1651 Loading animation is not centrally aligned"}),"\n",(0,r.jsx)(t.li,{children:"ICAP-1657 Broken layout for call screening time filter interval"}),"\n",(0,r.jsx)(t.li,{children:"ICAP-1662 The Enter OTP dialogue is shown even though the 2FA config has been confirmed already"}),"\n",(0,r.jsx)(t.li,{children:"ICAP-1665 Toggle for 2FA is shown and API requests are sent if backend doesn't support 2FA"}),"\n",(0,r.jsx)(t.li,{children:"ICAP-1666 Display the actual status of 2FA if it is inherited from the customer class"}),"\n",(0,r.jsx)(t.li,{children:"ICAP-1671 Skip the call to generate a new 2FA config when a user tries to enable 2FA and the config already exists"}),"\n",(0,r.jsx)(t.li,{children:"ICAP-1672 Show the error about a wrong OTP on the portal user page on attempt to disable 2FA by this user"}),"\n",(0,r.jsx)(t.li,{children:"ICAP-1673 Customer is redirected to the Login dialogue after resetting a 2FA key for another user"}),"\n",(0,r.jsx)(t.li,{children:'ICAP-1674 "Reset 2FA key" is disabled right after 2FA and its key are activated on own user page'}),"\n",(0,r.jsx)(t.li,{children:"ICAP-1675 A pop-up dialogue with QR code re-appears on opening profile/user page if user didn't finish 2FA activation"}),"\n",(0,r.jsx)(t.li,{children:"ICAP-1678 Customer is not redirected to login page after resetting own 2FA key"}),"\n",(0,r.jsx)(t.li,{children:'ICAP-1679 "Reset 2FA key" becomes active after enabling 2FA for another user even though the 2FA config has not been generated/stored'}),"\n",(0,r.jsx)(t.li,{children:'ICAP-1680 "Disable two-factor authentication" top-up appears after closing it if user hadn\'t finished disabling 2FA due to wrong OTP'}),"\n",(0,r.jsx)(t.li,{children:"ICAP-1683 User is redirected to login after clicking Cancel in the window to reset 2FA key"}),"\n",(0,r.jsx)(t.li,{children:"ICAP-1684 Window to reset 2FA key is closed without error if a wrong OTP was entered by a portal user on its own page"}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3905:(e,t,n)=>{n.d(t,{ah:()=>c});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=o,g=h["".concat(l,".").concat(p)]||h[p]||d[p]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));u.displayName="MDXCreateElement"}}]);