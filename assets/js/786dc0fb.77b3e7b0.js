"use strict";(self.webpackChunkcloudpbx_portal_docs=self.webpackChunkcloudpbx_portal_docs||[]).push([[2123],{3782:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=s(5893),o=s(3905);const r={title:"Calls within business hours and non-working hours",sidebar_position:5},t="Calls within business hours and non-working hours",l={id:"Calls-within-business-hours-and-non-working-hours",title:"Calls within business hours and non-working hours",description:"Call screening",source:"@site/docs/Calls-within-business-hours-and-non-working-hours.md",sourceDirName:".",slug:"/Calls-within-business-hours-and-non-working-hours",permalink:"/cloudpbx-portal-docs/docs/Calls-within-business-hours-and-non-working-hours",draft:!1,unlisted:!1,editUrl:"https://github.com/portaone/cloudpbx-portal-docs-source/tree/development/docs/Calls-within-business-hours-and-non-working-hours.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Calls within business hours and non-working hours",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Call supervision",permalink:"/cloudpbx-portal-docs/docs/Call-supervision"},next:{title:"Programming auto-attendants",permalink:"/cloudpbx-portal-docs/docs/Programming-auto-attendants"}},a={},c=[{value:"Call screening",id:"call-screening",level:2},{value:"Call screening algorithm",id:"call-screening-algorithm",level:3},{value:"Modes to handle incoming calls (business hours, non-working hours)",id:"modes-to-handle-incoming-calls-business-hours-non-working-hours",level:3},{value:"Add a new mode",id:"add-a-new-mode",level:3},{value:"Response messages for incoming calls",id:"response-messages-for-incoming-calls",level:3},{value:"Add a new response message",id:"add-a-new-response-message",level:3},{value:"Policies",id:"policies",level:3},{value:"Add a new policy",id:"add-a-new-policy",level:3},{value:"Add rules to policies",id:"add-rules-to-policies",level:3},{value:"Enable policies",id:"enable-policies",level:3},{value:"Service codes",id:"service-codes",level:3}];function d(e){const n={em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"calls-within-business-hours-and-non-working-hours",children:"Calls within business hours and non-working hours"}),"\n",(0,i.jsx)(n.h2,{id:"call-screening",children:"Call screening"}),"\n",(0,i.jsx)(n.p,{children:"Sometimes incoming calls need to be treated differently: calls from your clients or suppliers should reach your employees on their office phones during weekdays, while other calls can just go to voicemail. Calls in the evening hours should go straight to their cell phones (there is no point in ringing their IP phones while employees are not in the office), while calls from anonymous numbers should always be rejected."}),"\n",(0,i.jsx)(n.p,{children:"All of this can be done using the call screening rules in your Cloud PBX. When the call screening feature is enabled for a phone line (e.g. an extension or an auto-attendant), you can enable policies that consist of a set of rules. Such rules will be applied to every incoming call when certain conditions are met:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Time filters"})," \u2013 call time condition. You can specify limitations regarding the time of day, day of the week, day of the month, or some combination of these. This is ideal for making sure your phone will not ring in the middle of the night."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Caller numbers (From)"})," \u2013 calling number condition. You can specify a list of phone numbers for a caller (ANI or CLI) which satisfy this condition, e.g., you can list extensions, landline phone numbers, and so on. When specifying a phone number, you can enter either the full number or a pattern (e.g., all numbers starting with 1800)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Called numbers (To)"})," \u2013 called number condition. This can be useful if you have DID numbers associated with certain departments. For instance, you may wish to treat incoming calls to your Support number differently from calls to your Sales phone number."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(762).Z+"",width:"1114",height:"902"})}),"\n",(0,i.jsx)(n.h3,{id:"call-screening-algorithm",children:"Call screening algorithm"}),"\n",(0,i.jsx)(n.p,{children:"When a new call arrives at your Cloud PBX, call information is sequentially checked against all defined call screening rules. The call information (ANI, DNIS, and current time) is checked against each rule\u2019s conditions. If at least one of these does not match, the rule is skipped and processing moves on to the next one. If there is a match for all three conditions, then the rule\u2019s actions are executed and no further rules are processed."}),"\n",(0,i.jsx)(n.table,{children:(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"The order of rules matters. When the call arrives at Cloud PBX, it checks the rules from top to bottom. The first rule that matches the call is applied, and the other rules are ignored."})})})}),"\n",(0,i.jsxs)(n.p,{children:['Open menu "',(0,i.jsx)(n.strong,{children:"Calls"})," > ",(0,i.jsx)(n.strong,{children:"Settings"})," > ",(0,i.jsx)(n.strong,{children:"Call screening"}),'" and change the order of rules using drag and drop.']}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(9569).Z+"",width:"1210",height:"678"})}),"\n",(0,i.jsx)(n.p,{children:"If none of the rules matches (or if no call processing rules have been defined), then the default rule is applied, as follows:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ring on the IP phone."}),"\n",(0,i.jsxs)(n.li,{children:["If not answered within a certain time (defined by the ",(0,i.jsx)(n.strong,{children:"Timeout"}),' parameter in "',(0,i.jsx)(n.strong,{children:"Call settings"}),'" of a selected extension), and if the phone line has call forwarding enabled, attempt to connect the call to the phone numbers listed there.']}),"\n",(0,i.jsxs)(n.li,{children:['If the call is still not answered and the phone line has the "',(0,i.jsx)(n.strong,{children:"Unified messaging"}),'" enabled, forward the call to voicemail; otherwise, drop the call.']}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"modes-to-handle-incoming-calls-business-hours-non-working-hours",children:"Modes to handle incoming calls (business hours, non-working hours)"}),"\n",(0,i.jsx)(n.p,{children:"Cloud PBX users can use modes to control when and how calls come through to their phone line, and quickly change the way incoming calls are handled. For example, they can set their mode to accept calls during business hours, send all calls to voicemail at once during non-working hours, and forward calls to another colleague when on vacation. Cloud PBX users can change the mode for their extension by calling the IVR or on their self-care interface."}),"\n",(0,i.jsxs)(n.p,{children:['The Cloud PBX manager can quickly change the way incoming calls are handled for all Cloud PBX extensions at once. Say the entire staff has to leave for a fire drill \u2013 the Cloud PBX manager opens menu "',(0,i.jsx)(n.strong,{children:"Cloud PBX"})," > ",(0,i.jsx)(n.strong,{children:"Extensions"}),'" and clicks "',(0,i.jsx)(n.strong,{children:"Switch mode"}),'" to change the mode from "',(0,i.jsx)(n.strong,{children:"Default"}),'" to "',(0,i.jsx)(n.strong,{children:"Emergency"}),'". Now, all incoming calls will be forwarded directly to mobile phones, and everyone who phones the office still receives assistance.']}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(6493).Z+"",width:"1077",height:"768"})}),"\n",(0,i.jsx)(n.p,{children:"This is how it works:"}),"\n",(0,i.jsxs)(n.p,{children:['Let\u2019s say your company has three modes configured: "',(0,i.jsx)(n.strong,{children:"Business hours"}),'", "',(0,i.jsx)(n.strong,{children:"Non-working hours"}),'", and "',(0,i.jsx)(n.strong,{children:"Emergency"}),'". Each mode has a unique Dual-Tone Multi-Frequency (DTMF) code that is used for switching. Mary, a sales agent, goes out for business lunch (during business hours) and doesn\u2019t want any calls to disturb her colleagues in the office. Thus, to forward all calls to voicemail at once, Mary dials *61 on her phone and specifies the DTMF code for "',(0,i.jsx)(n.strong,{children:"Non-working hours"}),'" mode. Once the mode is changed, Mary stops receiving calls, both from clients and other agents. All the calls are forwarded to voicemail. In two hours, Mary comes back to the office. She dials *61 on her phone again and changes the mode to business hours, meaning now she can receive calls.']}),"\n",(0,i.jsx)(n.h3,{id:"add-a-new-mode",children:"Add a new mode"}),"\n",(0,i.jsx)(n.table,{children:(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:'"Default" mode is present in the system. The DTMF code of the "Default" mode is always zero (0). This DTMF code is used to switch to this mode. Users can switch from individual sticky mode to "Default" mode to continue receiving calls according to the rules defined for the "Default" mode.'})})})}),"\n",(0,i.jsxs)(n.p,{children:['Open menu "',(0,i.jsx)(n.strong,{children:"Calls"})," > ",(0,i.jsx)(n.strong,{children:"Settings"})," > ",(0,i.jsx)(n.strong,{children:"Call screening"}),'" and click "',(0,i.jsx)(n.strong,{children:"Add mode"}),'" to configure a new mode. You can set the following parameters for a mode:']}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DTMF code"})," \u2013 this is a unique DTMF code of the mode. Users dial it to switch to this mode. Digits from 1 to 9 are available."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Expires after, minutes"}),' \u2013 this is mode duration in minutes, after which the mode automatically switches to "',(0,i.jsx)(n.strong,{children:"Default"}),'" mode. For example, there is a "',(0,i.jsx)(n.strong,{children:"Meeting"}),'" mode with 60 min duration. If Mary switches to "',(0,i.jsx)(n.strong,{children:"Meeting"}),'" mode at 3 p.m, the mode switches to "',(0,i.jsx)(n.strong,{children:"Default"}),'" mode at 4 p.m.']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Sticky mode"})," \u2013 if the mode is marked sticky, only extensions can set this mode. If the Cloud PBX manager switches all the extensions to the other mode, this change doesn\u2019t influence the extensions with sticky mode. These extensions remain in this mode until they change it via IVR or their self-care interface, or sticky mode\u2019s timeout ends."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(9812).Z+"",width:"993",height:"758"})}),"\n",(0,i.jsx)(n.h3,{id:"response-messages-for-incoming-calls",children:"Response messages for incoming calls"}),"\n",(0,i.jsx)(n.p,{children:"Cloud PBX users can record a personalized audio message via IVR to play to their callers before the call is answered, forwarded, or redirected to voicemail."}),"\n",(0,i.jsx)(n.h3,{id:"add-a-new-response-message",children:"Add a new response message"}),"\n",(0,i.jsxs)(n.p,{children:['You can upload different audio files to be used as response messages for your company. Open menu "',(0,i.jsx)(n.strong,{children:"Calls"})," > ",(0,i.jsx)(n.strong,{children:"Settings"})," > ",(0,i.jsx)(n.strong,{children:"Call screening"}),'" and click "',(0,i.jsx)(n.strong,{children:"Add message"}),'" to upload a new audio file.']}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(1677).Z+"",width:"869",height:"663"})}),"\n",(0,i.jsx)(n.table,{children:(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{children:"The audio message can be in .wav, .mp3, .og, or .au format and should not exceed the size of 3 MB."})})})}),"\n",(0,i.jsx)(n.p,{children:"The message, added by Cloud PBX users, always overrides the default message added by the Cloud PBX manager, no matter whether it is recorded via the IVR or uploaded via the web portal."}),"\n",(0,i.jsx)(n.h3,{id:"policies",children:"Policies"}),"\n",(0,i.jsx)(n.p,{children:"The policy contains a set of rules that define whether to play the response message (personalized audio message to play to callers before the call is answered) and what call action to apply (e.g., ring, forward, voicemail). Your Cloud PBX may have several policies, e.g., a policy for each company department."}),"\n",(0,i.jsx)(n.h3,{id:"add-a-new-policy",children:"Add a new policy"}),"\n",(0,i.jsxs)(n.p,{children:['Open menu "',(0,i.jsx)(n.strong,{children:"Calls"})," > ",(0,i.jsx)(n.strong,{children:"Settings"})," > ",(0,i.jsx)(n.strong,{children:"Call screening"}),'" and click "',(0,i.jsx)(n.strong,{children:"Add policy"}),'" to configure a new policy.']}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"e.g. Individual policies for Sales Department, Support Department, and IT Support Department to meet their SLA."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(5025).Z+"",width:"1188",height:"717"})}),"\n",(0,i.jsx)(n.h3,{id:"add-rules-to-policies",children:"Add rules to policies"}),"\n",(0,i.jsxs)(n.p,{children:['Any policy contains a set of rules. Click "',(0,i.jsx)(n.strong,{children:"Add rule"}),'" to add a rule to the specific policy by selecting the appropriate conditions:']}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"From"})," \u2013 calling number condition."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"To"})," \u2013 called number condition."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Period"})," \u2013 call time condition."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Mode"})," \u2013 mode condition."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:['Define which actions should be executed for incoming calls, and optionally select the audio file in the "',(0,i.jsx)(n.strong,{children:"Response message"}),'" drop-down list.']}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(5858).Z+"",width:"1219",height:"875"})}),"\n",(0,i.jsx)(n.h3,{id:"enable-policies",children:"Enable policies"}),"\n",(0,i.jsxs)(n.p,{children:['Open tab "',(0,i.jsx)(n.strong,{children:"Call screening"}),'" to enable a policy for a specific extension or an auto-attendant.']}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(5996).Z+"",width:"1102",height:"642"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(7891).Z+"",width:"1115",height:"597"})}),"\n",(0,i.jsx)(n.h3,{id:"service-codes",children:"Service codes"}),"\n",(0,i.jsxs)(n.p,{children:['Cloud PBX users can use service codes to control modes. Open menu "',(0,i.jsx)(n.strong,{children:"Calls"})," > ",(0,i.jsx)(n.strong,{children:"Settings"})," > ",(0,i.jsx)(n.strong,{children:"Service codes"}),'" to check your default service codes.']}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(3238).Z+"",width:"638",height:"283"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["e.g. ",(0,i.jsx)(n.strong,{children:"62"})," - Cloud PBX management default code (when called, the response message for all phone lines of a certain customer changes); ",(0,i.jsx)(n.strong,{children:"61"})," - individual management default code (when called, the response message for a single phone line changes)."]})})]})}function h(e={}){const{wrapper:n}={...(0,o.ah)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3905:(e,n,s)=>{s.d(n,{ah:()=>c});var i=s(7294);function o(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function r(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,i)}return s}function t(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?r(Object(s),!0).forEach((function(n){o(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function l(e,n){if(null==e)return{};var s,i,o=function(e,n){if(null==e)return{};var s,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)s=r[i],n.indexOf(s)>=0||(o[s]=e[s]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)s=r[i],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var a=i.createContext({}),c=function(e){var n=i.useContext(a),s=n;return e&&(s="function"==typeof e?e(n):t(t({},n),e)),s},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var s=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=c(s),g=o,m=u["".concat(a,".").concat(g)]||u[g]||d[g]||r;return s?i.createElement(m,t(t({ref:n},h),{},{components:s})):i.createElement(m,t({ref:n},h))}));h.displayName="MDXCreateElement"},9812:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/Calls_within_business_hours_and_non-working_hours-Add_new_modes-57b0551fb3702cadadb4aca41ad55f92.png"},5025:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/Calls_within_business_hours_and_non-working_hours-Add_new_policies-9d4852939f43971ead4f5ab623b968a6.png"},1677:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/Calls_within_business_hours_and_non-working_hours-Add_new_response_messages-632b9047eceb462254cc77207293b60f.png"},5858:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/Calls_within_business_hours_and_non-working_hours-Add_new_rules_to_policies-d5ea0172013515bb615765cea04b8232.png"},9569:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/Calls_within_business_hours_and_non-working_hours-Changing_order_of_rules-c0af9133f6fde1c2b516c906e2133745.gif"},5996:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/Calls_within_business_hours_and_non-working_hours-Enable_policies-0f54464163e211cf76f2bc31d7afb90a.png"},7891:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/Calls_within_business_hours_and_non-working_hours-Enable_policies_for_AA-1ab0e8182ba800b83a89067dabe0a6e4.png"},762:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/Calls_within_business_hours_and_non-working_hours-Modes-fdf19956da02dac7b351d700c8dd8b47.png"},3238:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/Calls_within_business_hours_and_non-working_hours-Service_codes-944929ed00809ac08b5290ca54a36097.png"},6493:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/Calls_within_business_hours_and_non-working_hours-Switch_modes-bce2e3c96e1dc667b843822ebe8adfe2.png"}}]);