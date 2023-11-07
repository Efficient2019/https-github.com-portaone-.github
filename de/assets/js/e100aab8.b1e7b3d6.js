"use strict";(self.webpackChunkcloudpbx_portal_docs=self.webpackChunkcloudpbx_portal_docs||[]).push([[7676],{3239:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var r=i(5893),t=i(3905);const s={title:"Automatisierte Anrufverteilung",sidebar_position:7},d="Automatisierte Anrufverteilung",l={id:"Automated_call_dsitribution",title:"Automatisierte Anrufverteilung",description:"\xdcbersicht",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/Automated_call_dsitribution.md",sourceDirName:".",slug:"/Automated_call_dsitribution",permalink:"/cloudpbx-portal-docs/de/docs/Automated_call_dsitribution",draft:!1,unlisted:!1,editUrl:"https://github.com/portaone/cloudpbx-portal-docs-source/tree/development/docs/Automated_call_dsitribution.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Automatisierte Anrufverteilung",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Programmierung automatische Vermittlung (Rezeptionist)",permalink:"/cloudpbx-portal-docs/de/docs/Programming-auto-attendants"},next:{title:"Security",permalink:"/cloudpbx-portal-docs/de/docs/category/security"}},a={},h=[{value:"\xdcbersicht",id:"\xfcbersicht",level:2},{value:"Unterscheidung zwischen IVR und ACD",id:"unterscheidung-zwischen-ivr-und-acd",level:2},{value:"Wie ACD funktioniert",id:"wie-acd-funktioniert",level:2},{value:"Anrufwarteschleifen",id:"anrufwarteschleifen",level:2},{value:"In die Warteschleife stellen",id:"in-die-warteschleife-stellen",level:3},{value:"Warten in der Warteschleife",id:"warten-in-der-warteschleife",level:3},{value:"Klingelndes Personal",id:"klingelndes-personal",level:3}];function u(e){const n={em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"automatisierte-anrufverteilung",children:"Automatisierte Anrufverteilung"}),"\n",(0,r.jsx)(n.h2,{id:"\xfcbersicht",children:"\xdcbersicht"}),"\n",(0,r.jsx)(n.p,{children:"In der hektischen Welt der Call-Center soll eine ACD-L\xf6sung (Automated Call Distribution) die Interaktion mit dem Kunden optimieren und die Kundenbindung erh\xf6hen, indem sie die Interaktion mit dem Kunden optimiert. Ihr ACD-System verwaltet eingehende Anrufe nahtlos, leitet sie intelligent weiter und sorgt f\xfcr eine effiziente Warteschleifenbildung, was die Basis f\xfcr einen aussergew\xf6hnlichen Kundenservice bildet."}),"\n",(0,r.jsx)(n.h2,{id:"unterscheidung-zwischen-ivr-und-acd",children:"Unterscheidung zwischen IVR und ACD"}),"\n",(0,r.jsx)(n.p,{children:"Interactive Voice Response (IVR) ist eine Technologie, die dem Benutzer die Interaktion mit einem automatischen System erleichtert, bevor er mit einem Agenten verbunden wird. IVR hilft dabei, die Art der Anfrage des Benutzers zu identifizieren und ihn an die entsprechende Stelle weiterzuleiten."}),"\n",(0,r.jsx)(n.p,{children:"IVRs erreichen dies, indem sie die Benutzer auffordern, bestimmte Tasten auf ihren Telefonen zu dr\xfccken, die ihren Bed\xfcrfnissen entsprechen. Ein IVR k\xf6nnte zum Beispiel die Anweisung geben: \u201eDr\xfccken Sie die 1 f\xfcr Produktk\xe4ufe\u201c. Anschliessend verarbeitet die ACD diese Eingaben, indem sie die Benutzer mit den entsprechenden Vertriebsmitarbeitern verbindet und unn\xf6tige Weiterleitungen an andere Abteilungen vermeidet."}),"\n",(0,r.jsx)(n.p,{children:"In der Regel wird IVR als Instrument zur Datenerfassung verwendet, w\xe4hrend ACD diese Informationen zur Organisation und Zuweisung von Anrufen verwendet. Durch die Kombination von IVR und ACD wird sowohl die Kundenzufriedenheit als auch das Engagement der Mitarbeiter in der Call-Center-Umgebung erh\xf6ht."}),"\n",(0,r.jsx)(n.h2,{id:"wie-acd-funktioniert",children:"Wie ACD funktioniert"}),"\n",(0,r.jsx)(n.p,{children:"Der ACD-Arbeitsablauf besteht aus drei verschiedenen Phasen:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Anrufer-Identifizierung:"})," Wie bereits erw\xe4hnt, geht es in der ersten Phase darum, die Absicht des Anrufers durch eine IVR-Interaktion zu erfassen. Ausserdem kann Ihr IVR so konfiguriert werden, dass die Anrufer ihre Sprache w\xe4hlen k\xf6nnen."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"z.\xa0B. h\xf6ren Anrufer ein IVR-Men\xfc auf Englisch, wenn sie die 1 dr\xfccken, und m\xfcssen die 2 dr\xfccken, um ein IVR-Men\xfc auf Deutsch zu w\xe4hlen."})}),"\n",(0,r.jsx)(n.p,{children:"Anhand dieser Informationen kann die ACD dem Anrufer einen Agenten zuweisen, der f\xfcr sein spezifisches Anliegen am besten geeignet ist."}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Warteschleife:"})," Nach der Identifizierung geht es im n\xe4chsten Schritt darum, die Anrufer in eine Warteliste einzuteilen: Wenn die Anzahl der eingehenden Anrufe die Anzahl der verf\xfcgbaren Agenten (Kundenbetreuer) in einer Abteilung \xfcbersteigt, k\xf6nnen die eingehenden Anrufe in einer Warteschleife eingereiht werden."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Anrufweiterleitung:"})," Die Kr\xf6nung des Prozesses ist die Anrufweiterleitung. In diesem Fall wendet die ACD die von Ihnen gew\xe4hlte Verteilungsstrategie an, um die Anrufe weiterzuleiten. Wenn Ihr Ziel ein prompter Kundenservice ist, kann die ACD den eingehenden Anruf nahtlos mit einem verf\xfcgbaren Agenten verbinden."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:['W\xe4hlen Sie Ihren Weg zur optimalen Anrufverteilung, indem Sie eine entsprechende Klingelstrategie ausw\xe4hlen: Ihr ACD-System bietet eine Reihe von Verteilungsstrategien, um Ihren individuellen Bed\xfcrfnissen gerecht zu werden. \xd6ffnen Sie das Men\xfc "',(0,r.jsx)(n.strong,{children:"Cloud PBX"})," => ",(0,r.jsx)(n.strong,{children:"Rufgruppen"}),'" um eine Rufgruppe auszuw\xe4hlen und auf "',(0,r.jsx)(n.strong,{children:"Bearbeiten"}),'". Aktivieren Sie auf der Registerkarte "',(0,r.jsx)(n.strong,{children:"Allgemein"}),'" die am besten geeignete Klingelstrategie.']}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(7690).Z+"",width:"1618",height:"909"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Wenn Sie die Option ",(0,r.jsx)(n.strong,{children:"Wie aufgelistet"})," w\xe4hlen, werden die Nebenstellen der Reihe nach von der ersten (obersten) bis zur letzten Nummer angerufen, bis der Anruf angenommen wird."]}),"\n",(0,r.jsxs)(n.li,{children:["W\xe4hlen Sie ",(0,r.jsx)(n.strong,{children:"Zuf\xe4llig"}),", wenn Sie eine zuf\xe4llige Reihenfolge verwenden m\xf6chten."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Gleichzeitig"})," erm\xf6glicht gleichzeitige Anrufe zu jeder Nebenstelle in der Liste."]}),"\n",(0,r.jsxs)(n.li,{children:["Wenn Sie ",(0,r.jsx)(n.strong,{children:"Am wenigsten verwendet"})," w\xe4hlen, werden die Telefonleitungen in absteigender Reihenfolge, beginnend mit der letzten Nutzung, sortiert und ein Anruf an die entsprechende Durchwahl zugestellt."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"anrufwarteschleifen",children:"Anrufwarteschleifen"}),"\n",(0,r.jsx)(n.p,{children:"Wenn Ihr Unternehmen ein hohes Anrufaufkommen von Kunden erh\xe4lt, stellt die Verwendung von Warteschleifen sicher, dass jeder eingehende Anruf effektiv verwaltet wird, so dass jedem gesch\xe4tzten Kunden besondere Aufmerksamkeit gewidmet werden kann."}),"\n",(0,r.jsxs)(n.p,{children:['\xd6ffnen Sie das Men\xfc "',(0,r.jsx)(n.strong,{children:"Cloud PBX"})," => ",(0,r.jsx)(n.strong,{children:"Rufgruppen"}),'", um eine Klingelgruppe auszuw\xe4hlen und klicken Sie auf "',(0,r.jsx)(n.strong,{children:"Bearbeiten"}),'". Auf der Registerkarte "',(0,r.jsx)(n.strong,{children:"Warteschleife"}),'" aktivieren Sie die Warteschleife f\xfcr die ausgew\xe4hlte Ringgruppe, so dass Anrufer, die Ihr Unternehmen erreichen und an eine Abteilung weitergeleitet werden, in der Warteschleife gehalten werden und darauf warten, dass ein Agent verf\xfcgbar wird und den Anruf entgegennimmt.']}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:i(655).Z+"",width:"1619",height:"908"})}),"\n",(0,r.jsx)(n.p,{children:"In der Konfiguration der Anrufwarteschleifen k\xf6nnen Sie die folgenden Optionen einstellen:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Intervall zwischen Ansagen"})," \u2013 Legen Sie fest, wie oft Anrufer Ansagen \xfcber die Anzahl der Anrufer vor ihnen in der Warteschleife und die gesch\xe4tzte Wartezeit bis zur Bearbeitung h\xf6ren. Der Standardwert ist 5 Minuten."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"DTMF zum Best\xe4tigen des Verlassens der Warteschleife"}),' \u2013 Geben Sie den DTMF-Code an, den Anrufer w\xe4hlen sollen, um die Warteschleife zu verlassen und eine bestimmte Aktion durchzuf\xfchren, z.\xa0B. eine Voicemail zu hinterlassen (die Aktion h\xe4ngt vom Feld Aktionen durchf\xfchren ab). Der Standardcode ist "0".']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Zeit\xfcberschreitung f\xfcr Anrufereingabe"})," \u2013 Legen Sie die Zeitspanne fest, in der Anrufer den DTMF-Code w\xe4hlen k\xf6nnen. Der Standardzeitraum betr\xe4gt 9 Sekunden nach der Ank\xfcndigung, die eine bestimmte Aktion vorschl\xe4gt (die Aktion wird in den Feldern Aktion ausf\xfchren definiert)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Anrufe an besetzte Durchwahlen weiterleiten"})," \u2013 Wenn dieses Kontrollk\xe4stchen aktiviert ist, werden die Anrufe aus der Warteschleife an Agenten weitergeleitet, auch wenn diese bereits am Telefon sind."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Es gibt 3 Gruppen von Einstellungen, die die Erfahrung mit der Warteschleife steuern."}),"\n",(0,r.jsx)(n.h3,{id:"in-die-warteschleife-stellen",children:"In die Warteschleife stellen"}),"\n",(0,r.jsx)(n.p,{children:"Wenn ein Kunde in Ihrem Unternehmen anruft, sind m\xf6glicherweise alle Ihre Mitarbeiter besch\xe4ftigt. Legen Sie fest, wie die Warteschleife f\xfcr besetzte Anrufe in diesem Fall neue eingehende Anrufe behandeln soll."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Max. Anzahl Anrufer in der Schleife"})," \u2013 Die maximale Anzahl von Anrufen, die in dieser Warteschleife gehalten werden k\xf6nnen."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Bei Erreichen der maximalen Anzahl gehaltener Anrufe"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ansage abspielen"})," \u2013 Sie k\xf6nnen eine Datei mit einer benutzerdefinierten Ansage hochladen, damit diese (anstelle der Standardansage) f\xfcr Benutzer abgespielt wird, wenn ihr Anruf nicht in die Warteschleife gestellt werden kann, weil die maximale Anzahl eingehender Anrufe bereits erreicht wurde."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Massnahmen ergreifen"})," \u2013 W\xe4hlen Sie die Massnahmen aus, die automatisch oder nach Best\xe4tigung ergriffen werden sollen, wenn die maximale Anzahl der eingehenden Anrufe erreicht ist (z.\xa0B. wenn die maximale Anzahl der gehaltenen Anrufe 100 betr\xe4gt und der 101ste Anruf eingeht). M\xf6gliche Massnahmen sind:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Verbindung trennen"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Weiterleitung zur Durchwahl"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Umleitung zur Voicemail der Durchwahl"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Umleitung zu einer anderen Warteschleife"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Zur\xfcck zum Men\xfc der automatischen Anrufannahme"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Benutzerbest\xe4tigung abwarten"}),' \u2013 Wenn dieses Kontrollk\xe4stchen aktiviert ist, m\xfcssen Anrufer den DTMF-Code, z. B. "0", w\xe4hlen, um die Aktion auszuf\xfchren (der Code wird in der Option ',(0,r.jsx)(n.strong,{children:"DTMF zur Best\xe4tigung des Verlassens der Warteschleife"})," angegeben). Standardm\xe4ssig ist diese Option deaktiviert und die Aktion (definiert im Feld ",(0,r.jsx)(n.strong,{children:"Massnahme durchf\xfchren"}),") wird automatisch durchgef\xfchrt."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"warten-in-der-warteschleife",children:"Warten in der Warteschleife"}),"\n",(0,r.jsx)(n.p,{children:"Wenn ein Kunde in Ihrem Unternehmen anruft und alle Agenten besetzt sind, wird dieser Anruf in die Warteschleife gestellt, was bedeutet, dass ein Benutzer warten muss, bis ein Agent verf\xfcgbar ist. Legen Sie fest, wie die Warteschlange f\xfcr besetzte Anrufe in diesem Fall neue eingehende Anrufe behandeln soll."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Anzahl der Anrufer, die noch in der Warteschleife stehen, ank\xfcndigen"})," \u2013 Wenn dieses Kontrollk\xe4stchen aktiviert ist, h\xf6ren die Anrufer eine Ansage, die die Anzahl der Anrufer vor ihnen in der Warteschleife angibt."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ank\xfcndigung der voraussichtlichen Wartezeit"})," \u2013 Wenn dieses Kontrollk\xe4stchen aktiviert ist, h\xf6ren die Anrufer eine Ansage \xfcber die gesch\xe4tzte Wartezeit."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Musik in der Warteschleife abspielen"})," \u2013 Mediendatei, die ein Anrufer anstelle des standardm\xe4ssigen Freizeichentons h\xf6ren kann. Die maximal zul\xe4ssige Dateigr\xf6sse betr\xe4gt 5 MB."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Maximale Wartezeit"})," \u2013 Legen Sie fest, wie lange die Anrufer in der Warteschleife warten m\xfcssen, bevor sie die Ansage h\xf6ren, die ihnen eine bestimmte Aktion vorschl\xe4gt, z.\xa0B. \u201eWeiterleiten an Voicemail\u201c."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Wenn die Wartezeit vorbei ist"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ansage abspielen"})," \u2013 Sie k\xf6nnen eine Datei mit einer benutzerdefinierten Ansage hochladen, damit diese (anstelle der Standardansage) f\xfcr Anrufer in der Warteschleife abgespielt wird."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Massnahme durchf\xfchren"})," \u2013 W\xe4hlen Sie die Aktion aus, die automatisch oder nach Best\xe4tigung durchgef\xfchrt werden soll, wenn das Wartezeitlimit erreicht ist. M\xf6gliche Massnahmen sind:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Keine"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Weiterleitung zur Durchwahl"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Umleitung zur Voicemail der Durchwahl"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Umleitung zu einer anderen Warteschleife"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Zur\xfcck zum Men\xfc der automatischen Vermittlung"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Benutzerbest\xe4tigung abwarten"}),' \u2013 Wenn dieses Kontrollk\xe4stchen aktiviert ist, m\xfcssen Anrufer den DTMF-Code, z. B. "0", w\xe4hlen, um die Aktion auszuf\xfchren (der Code wird in der Option DTMF zur Best\xe4tigung des Verlassens der Warteschleife angegeben). Standardm\xe4ssig ist diese Option deaktiviert, und die (im Feld "Aktion ausf\xfchren" definierte) Aktion wird automatisch ausgef\xfchrt']}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"klingelndes-personal",children:"Klingelndes Personal"}),"\n",(0,r.jsx)(n.p,{children:"Wenn ein Kunde der erste in der Warteschlange ist, aber kein Agent seinen Anruf entgegennimmt, bedeutet dies, dass ein Benutzer warten muss, bis ein Agent antwortet. Legen Sie fest, wie die Warteschleife in diesem Fall Anrufe in der Warteschleife behandeln soll."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Maximale Klingeldauer"})," \u2013 Definieren Sie die maximale Zeit, die der erste Anrufer in der Warteschlange (der mit einem bestimmten Agenten verbunden wird) warten kann, bis der Agent den Anruf entgegennimmt."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Nach Ablauf der Klingelzeit"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ansage abspielen"})," \u2013 Sie k\xf6nnen eine Datei mit einer benutzerdefinierten Ansage hochladen, damit diese (anstelle der Standardansage) f\xfcr Anrufer abgespielt wird, die darauf warten, mit einem Agenten verbunden zu werden."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Massnahme durchf\xfchren"})," \u2013 W\xe4hlen Sie die Aktion aus, die automatisch oder nach Best\xe4tigung durchgef\xfchrt werden soll, wenn das Wartezeitlimit erreicht ist. M\xf6gliche Massnahmen sind:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Keine"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Weiterleitung zur Durchwahl"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Umleitung zur Voicemail der Durchwahl"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Umleitung zu einer anderen Warteschleife"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Zur\xfcck zum Men\xfc der automatischen Vermittlung"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Benutzerbest\xe4tigung abwarten"}),' \u2013 Wenn dieses Kontrollk\xe4stchen aktiviert ist, m\xfcssen Anrufer den DTMF-Code, z. B. "0", w\xe4hlen, um die Aktion auszuf\xfchren (der Code wird in der Option DTMF zur Best\xe4tigung des Verlassens der Warteschleife angegeben). Standardm\xe4ssig ist diese Option deaktiviert, und die (im Feld \u201eMassnahme ausf\xfchren\u201c definierte) Aktion wird automatisch ausgef\xfchrt']}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,t.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},3905:(e,n,i)=>{i.d(n,{ah:()=>h});var r=i(7294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function s(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function d(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?s(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,r,t=function(e,n){if(null==e)return{};var i,r,t={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var a=r.createContext({}),h=function(e){var n=r.useContext(a),i=n;return e&&(i="function"==typeof e?e(n):d(d({},n),e)),i},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var i=e.components,t=e.mdxType,s=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),o=h(i),g=t,f=o["".concat(a,".").concat(g)]||o[g]||u[g]||s;return i?r.createElement(f,d(d({ref:n},c),{},{components:i})):r.createElement(f,d({ref:n},c))}));c.displayName="MDXCreateElement"},655:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/Automated_call_distribution-call_queue-46b26e96f1bd8452ac7a8a28f5da9d6c.png"},7690:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/Automated_call_distribution-ring_strategy-ba21e3225387484ac268e904acb1ba8e.png"}}]);