"use strict";(self.webpackChunkcacic_fct=self.webpackChunkcacic_fct||[]).push([[2252],{28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>i});var o=n(96540);const t={},s=o.createContext(t);function a(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(s.Provider,{value:r},e.children)}},31523:(e,r,n)=>{n.d(r,{A:()=>t});var o=n(96540);function t(...e){const r=o.useRef(void 0),n=o.useCallback((r=>{const n=e.map((e=>{if(null==e)return null;if("function"==typeof e){const n=e,o=n(r);return"function"==typeof o?o:()=>{n(null)}}return e.current=r,()=>{e.current=null}}));return()=>{n.forEach((e=>e?.()))}}),e);return o.useMemo((()=>e.every((e=>null==e))?null:e=>{r.current&&(r.current(),r.current=void 0),null!=e&&(r.current=n(e))}),e)}},38413:(e,r,n)=>{n.d(r,{A:()=>t});var o=n(31609);function t(e,r,n="Mui"){const t={};return r.forEach((r=>{t[r]=(0,o.Ay)(e,r,n)})),t}},39599:(e,r,n)=>{n.d(r,{A:()=>a});var o=n(11317),t=n(52957);const s=e=>{const r={systemProps:{},otherProps:{}},n=e?.theme?.unstable_sxConfig??t.A;return Object.keys(e).forEach((o=>{n[o]?r.systemProps[o]=e[o]:r.otherProps[o]=e[o]})),r};function a(e){const{sx:r,...n}=e,{systemProps:t,otherProps:a}=s(n);let i;return i=Array.isArray(r)?[t,...r]:"function"==typeof r?(...e)=>{const n=r(...e);return(0,o.Q)(n)?{...t,...n}:t}:{...t,...r},{...a,sx:i}}},42453:(e,r,n)=>{n.d(r,{A:()=>f});var o=n(96540),t=n(34164),s=n(75659),a=n(39599),i=n(74848);var l=n(11848),c=n(49559),d=n(25669),p=n(28466),u=n(78660),v=n(78651);const h={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},m=a.A,g=(0,l.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,n.variant&&r[n.variant],"inherit"!==n.align&&r[`align${(0,p.A)(n.align)}`],n.noWrap&&r.noWrap,n.gutterBottom&&r.gutterBottom,n.paragraph&&r.paragraph]}})((0,c.A)((({theme:e})=>({margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(e.typography).filter((([e,r])=>"inherit"!==e&&r&&"object"==typeof r)).map((([e,r])=>({props:{variant:e},style:r}))),...Object.entries(e.palette).filter((0,u.A)()).map((([r])=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}}))),...Object.entries(e.palette?.text||{}).filter((([,e])=>"string"==typeof e)).map((([r])=>({props:{color:`text${(0,p.A)(r)}`},style:{color:(e.vars||e).palette.text[r]}}))),{props:({ownerState:e})=>"inherit"!==e.align,style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:e})=>e.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:e})=>e.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:e})=>e.paragraph,style:{marginBottom:16}}]})))),x={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},f=o.forwardRef((function(e,r){const{color:n,...o}=(0,d.b)({props:e,name:"MuiTypography"}),a=m({...o,...!h[n]&&{color:n}}),{align:l="inherit",className:c,component:u,gutterBottom:f=!1,noWrap:y=!1,paragraph:b=!1,variant:A="body1",variantMapping:j=x,...S}=a,k={...a,align:l,color:n,className:c,component:u,gutterBottom:f,noWrap:y,paragraph:b,variant:A,variantMapping:j},C=u||(b?"p":j[A]||x[A])||"span",w=(e=>{const{align:r,gutterBottom:n,noWrap:o,paragraph:t,variant:a,classes:i}=e,l={root:["root",a,"inherit"!==e.align&&`align${(0,p.A)(r)}`,n&&"gutterBottom",o&&"noWrap",t&&"paragraph"]};return(0,s.A)(l,v.y,i)})(k);return(0,i.jsx)(g,{as:C,ref:r,className:(0,t.A)(w.root,c),...S,ownerState:k,style:{..."inherit"!==l&&{"--Typography-textAlign":l},...S.style}})}))},49559:(e,r,n)=>{n.d(r,{A:()=>s});var o=n(47118);const t={theme:void 0};const s=function(e){let r,n;return function(s){let a=r;return void 0!==a&&s.theme===n||(t.theme=s.theme,a=(0,o.A)(e(t)),r=a,n=s.theme),a}}},78651:(e,r,n)=>{n.d(r,{A:()=>a,y:()=>s});var o=n(38413),t=n(31609);function s(e){return(0,t.Ay)("MuiTypography",e)}const a=(0,o.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"])},78660:(e,r,n)=>{function o(e=[]){return([,r])=>r&&function(e,r=[]){if(!function(e){return"string"==typeof e.main}(e))return!1;for(const n of r)if(!e.hasOwnProperty(n)||"string"!=typeof e[n])return!1;return!0}(r,e)}n.d(r,{A:()=>o})},89750:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>M,contentTitle:()=>P,default:()=>q,frontMatter:()=>N,metadata:()=>o,toc:()=>W});const o=JSON.parse('{"id":"Recursos/Servidores/Downtime","title":"Downtime","description":"Intencional","source":"@site/docs/Recursos/Servidores/Downtime.mdx","sourceDirName":"Recursos/Servidores","slug":"/Recursos/Servidores/Downtime","permalink":"/docs/Recursos/Servidores/Downtime","draft":false,"unlisted":false,"editUrl":"https://github.com/cacic-fct/cacic-fct.github.io/tree/main/docs/Recursos/Servidores/Downtime.mdx","tags":[],"version":"current","lastUpdatedBy":"Yudi","lastUpdatedAt":1738032178000,"frontMatter":{"title":"Downtime"},"sidebar":"docs","previous":{"title":"Conven\xe7\xe3o de nomenclatura","permalink":"/docs/Recursos/Servidores/Conven\xe7\xe3o de nomenclatura"},"next":{"title":"Especifica\xe7\xf5es comuns","permalink":"/docs/Recursos/Servidores/Especifica\xe7\xf5es comuns"}}');var t=n(74848),s=n(28453),a=n(96540),i=n(57156),l=n(25292),c=n(42453),d=n(34164),p=n(74136),u=n(75659),v=n(24899),h=n(28466),m=n(11848),g=n(44675),x=n(49559),f=n(78660),y=n(25669),b=n(38413),A=n(31609);function j(e){return(0,A.Ay)("MuiLink",e)}const S=(0,b.A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var k=n(93539);const C=({theme:e,ownerState:r})=>{const n=r.color,o=(0,k.Yn)(e,`palette.${n}.main`,!1)||(0,k.Yn)(e,`palette.${n}`,!1)||r.color,t=(0,k.Yn)(e,`palette.${n}.mainChannel`)||(0,k.Yn)(e,`palette.${n}Channel`);return"vars"in e&&t?`rgba(${t} / 0.4)`:(0,p.X4)(o,.4)},w={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},D=(0,m.Ay)(c.A,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,r[`underline${(0,h.A)(n.underline)}`],"button"===n.component&&r.button]}})((0,x.A)((({theme:e})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:e,ownerState:r})=>"always"===e&&"inherit"!==r.color,style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(e.palette).filter((0,f.A)()).map((([r])=>({props:{underline:"always",color:r},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette[r].mainChannel} / 0.4)`:(0,p.X4)(e.palette[r].main,.4)}}))),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:(0,p.X4)(e.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.secondaryChannel} / 0.4)`:(0,p.X4)(e.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(e.vars||e).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${S.focusVisible}`]:{outline:"auto"}}}]})))),R=a.forwardRef((function(e,r){const n=(0,y.b)({props:e,name:"MuiLink"}),o=(0,g.A)(),{className:s,color:i="primary",component:l="a",onBlur:c,onFocus:p,TypographyClasses:m,underline:x="always",variant:f="inherit",sx:b,...A}=n,[S,k]=a.useState(!1),R={...n,color:i,component:l,focusVisible:S,underline:x,variant:f},O=(e=>{const{classes:r,component:n,focusVisible:o,underline:t}=e,s={root:["root",`underline${(0,h.A)(t)}`,"button"===n&&"button",o&&"focusVisible"]};return(0,u.A)(s,j,r)})(R);return(0,t.jsx)(D,{color:i,className:(0,d.A)(O.root,s),classes:m,component:l,onBlur:e=>{(0,v.A)(e.target)||k(!1),c&&c(e)},onFocus:e=>{(0,v.A)(e.target)&&k(!0),p&&p(e)},ref:r,ownerState:R,variant:f,...A,sx:[...void 0===w[i]?[{color:i}]:[],...Array.isArray(b)?b:[b]],style:{...A.style,..."always"===x&&"inherit"!==i&&!w[i]&&{"--Link-underlineColor":C({theme:o,ownerState:R})}}})}));var O=n(2054);const T=()=>{const[e,r]=(0,a.useState)(null),[n,o]=(0,a.useState)(null),[s,d]=(0,a.useState)(null),[p,u]=(0,a.useState)(null),[v,h]=(0,a.useState)(!1),m=(e,n)=>{switch(e){case"statusPageAccessible":r(n);break;case"sshAccessible":o(n);break;case"pingServerWorks":d(n);break;case"pingDtiServersWorks":u(n)}};(0,a.useEffect)((()=>{h(!!(n||s||p||!1===p))}),[n,s,p]);const g=()=>{r(null),o(null),d(null),u(null),h(!1)};return(0,t.jsx)(i.A,{variant:"outlined",style:{marginBottom:"10px"},children:(0,t.jsxs)(l.A,{children:[null===e&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.A,{variant:"h6",children:["A"," ",(0,t.jsx)(R,{href:"https://status.cacic.dev.br",target:"_blank",children:"p\xe1gina de estado dos servi\xe7os"})," ","est\xe1 acess\xedvel?"]}),(0,t.jsx)("br",{}),(0,t.jsx)(O.A,{variant:"contained",onClick:()=>m("statusPageAccessible",!0),children:"Sim"}),(0,t.jsx)(O.A,{variant:"contained",onClick:()=>m("statusPageAccessible",!1),children:"N\xe3o"})]}),null!==e&&null===n&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.A,{variant:"body1",children:e?"A p\xe1gina de estado dos servi\xe7os do servidor est\xe1 acess\xedvel.":"A p\xe1gina de estado dos servi\xe7os do servidor n\xe3o est\xe1 acess\xedvel."}),(0,t.jsx)(c.A,{variant:"h6",children:"O servidor responde ao acesso SSH?"}),"Conecte-se diretamente ao servidor, sem passar pelo proxy.",(0,t.jsx)("br",{}),"O servidor pode responder apenas a solicita\xe7\xf5es originadas na unespNET.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)("code",{children:" ssh <user>@<dom\xednio/ip> "}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(O.A,{variant:"contained",onClick:()=>m("sshAccessible",!0),children:"Sim"}),(0,t.jsx)(O.A,{variant:"contained",onClick:()=>m("sshAccessible",!1),children:"N\xe3o"}),(0,t.jsx)(O.A,{variant:"contained",onClick:g,children:"Reiniciar"})]}),null!==e&&!1===n&&null===s&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.A,{variant:"body1",children:[e?"A p\xe1gina de estado dos servi\xe7os do servidor est\xe1 acess\xedvel.":"A p\xe1gina de estado dos servi\xe7os do servidor n\xe3o est\xe1 acess\xedvel.",(0,t.jsx)("br",{}),"O servidor n\xe3o est\xe1 acess\xedvel por SSH."]}),(0,t.jsx)(c.A,{variant:"h6",children:"O servidor responde a pings?"}),"Conecte-se diretamente ao servidor, sem passar pelo proxy.",(0,t.jsx)("br",{}),"O servidor pode responder apenas a pings originados na unespNET.",(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)("code",{children:" ping <dom\xednio/ip> "}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(O.A,{variant:"contained",onClick:()=>m("pingServerWorks",!0),children:"Sim"}),(0,t.jsx)(O.A,{variant:"contained",onClick:()=>m("pingServerWorks",!1),children:"N\xe3o"}),(0,t.jsx)(O.A,{variant:"contained",onClick:g,children:"Reiniciar"})]}),null!==e&&!1===n&&!1===s&&null===p&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.A,{variant:"body1",children:[e?"A p\xe1gina de estado dos servi\xe7os do servidor est\xe1 acess\xedvel.":"A p\xe1gina de estado dos servi\xe7os do servidor n\xe3o est\xe1 acess\xedvel.",(0,t.jsx)("br",{}),"O servidor n\xe3o est\xe1 acess\xedvel por SSH.",(0,t.jsx)("br",{}),"O servidor n\xe3o responde a pings."]}),(0,t.jsxs)(c.A,{variant:"h6",children:[(0,t.jsx)("i",{children:"Toda"})," a infraestrutura de rede da DTI responde a pings?"]}),(0,t.jsx)("code",{children:"ping fct1-pp.net.unesp.br"}),(0,t.jsx)("br",{}),(0,t.jsx)("code",{children:"ping pprudente.fct.unesp.br"}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(O.A,{variant:"contained",onClick:()=>m("pingDtiServersWorks",!0),children:"Sim"}),(0,t.jsx)(O.A,{variant:"contained",onClick:()=>m("pingDtiServersWorks",!1),children:"N\xe3o"}),(0,t.jsx)(O.A,{variant:"contained",onClick:g,children:"Reiniciar"})]}),v&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.A,{variant:"body1",children:[null!==e&&(0,t.jsx)("p",{children:e?"A p\xe1gina de estado dos servi\xe7os do servidor est\xe1 acess\xedvel.":"A p\xe1gina de estado dos servi\xe7os do servidor n\xe3o est\xe1 acess\xedvel."}),null!==n&&(0,t.jsx)("p",{children:n?"O servidor est\xe1 acess\xedvel por SSH.":"O servidor n\xe3o est\xe1 acess\xedvel por SSH."}),null!==s&&(0,t.jsx)("p",{children:s?"O servidor responde a pings.":"O servidor n\xe3o responde a pings."}),null!==p&&(0,t.jsx)("p",{children:p?"A infraestrutura da DTI responde a pings.":"A infraestrutura da DTI n\xe3o responde a pings."})]}),(0,t.jsx)(c.A,{variant:"h6",children:"Recomenda\xe7\xe3o"}),(0,t.jsx)(c.A,{variant:"body1",children:n?e?"Fa\xe7a login por SSH e reinicie os servi\xe7os afetados. N\xe3o entre em contato com a DTI.":"Fa\xe7a login por SSH e inicie o authentik e o uptime-kuma - ele auxiliar\xe1 a identificar outros servi\xe7os que est\xe3o off-line, para que voc\xea possa reinici\xe1-los. N\xe3o entre em contato com a DTI.":s?"O servidor responde a pings. Pode ser que o servidor esteja reiniciando. Aguarde at\xe9 30 minutos e tente o acesso SSH novamente. Se o problema persistir, pode ser que o OpenSSH esteja configurado incorretamente ou que a porta 22 tenha sido bloqueada. Entre em contato com a entidade respons\xe1vel pela hospedagem para verificar o estado da m\xe1quina. Caso ela esteja normal, contate a DTI para verificar o estado do Firewall.":p?"Pode ser que o servidor esteja reiniciando. Aguarde at\xe9 30 minutos e tente o acesso SSH novamente. Se o problema persistir, entre em contato com a entidade respons\xe1vel pela hospedagem para verificar o estado da m\xe1quina e, se necess\xe1rio, solicitar a reinicializa\xe7\xe3o dela.":!1===p?"Aguarde a solu\xe7\xe3o do problema pela DTI. Entre em contato caso esteja demorando muito. Lembre-se de que eles n\xe3o trabalham aos finais de semana.":"Ocorreu um erro na l\xf3gica do resultado."}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(O.A,{variant:"contained",onClick:g,children:"Reiniciar"})]})]})})},N={title:"Downtime"},P=void 0,M={},W=[{value:"Intencional",id:"intencional",level:2},{value:"N\xe3o intencional",id:"n\xe3o-intencional",level:2}];function I(e){const r={a:"a",admonition:"admonition",br:"br",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"intencional",children:"Intencional"}),"\n",(0,t.jsx)(r.p,{children:"Downtimes prolongados dever\xe3o ser notificados na p\xe1gina de estado dos servi\xe7os."}),"\n",(0,t.jsxs)(r.p,{children:["Acesse o ",(0,t.jsx)(r.a,{href:"https://status.cacic.dev.br/dashboard",children:"painel da p\xe1gina de estado dos servi\xe7os"})," e clique no avatar no canto superior direito para acessar o menu de manuten\xe7\xe3o."]}),"\n",(0,t.jsx)(r.h2,{id:"n\xe3o-intencional",children:"N\xe3o intencional"}),"\n",(0,t.jsx)(r.p,{children:"Responda \xe0s perguntas abaixo para descobrir o que fazer."}),"\n",(0,t.jsx)(T,{}),"\n",(0,t.jsx)(r.p,{children:"Caso seja necess\xe1rio entrar em contato com a DTI:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Informe o endere\xe7o IP ou o ",(0,t.jsx)(r.em,{children:"hostname"})," da m\xe1quina. Use a nomenclatura da DTI ao inv\xe9s da do CACiC;"]}),"\n",(0,t.jsx)(r.li,{children:"Descreva o problema detalhadamente e informe o que j\xe1 foi feito para tentar resolv\xea-lo."}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsxs)(r.p,{children:["N\xe3o contate a DTI ou o DMC para resolver os problemas dos servi\xe7os hospedados nos servidores.",(0,t.jsx)(r.br,{}),"\n","Essas entidades exercem um papel de provedores de infraestrutura e n\xe3o de suporte t\xe9cnico."]})})]})}function q(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(I,{...e})}):I(e)}}}]);