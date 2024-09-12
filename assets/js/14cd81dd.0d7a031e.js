"use strict";(self.webpackChunkcacic_fct=self.webpackChunkcacic_fct||[]).push([[2252],{14297:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>W,contentTitle:()=>N,default:()=>B,frontMatter:()=>M,metadata:()=>D,toc:()=>T});var r=n(74848),t=n(28453),a=n(96540),i=n(57156),s=n(25292),l=n(47859),c=n(98587),d=n(58168),u=n(34164),v=n(64111),p=n(28466),m=n(11848),h=n(3541),x=n(90638),b=n(96852),A=n(27553),g=n(17245);function S(e){return(0,g.Ay)("MuiLink",e)}const f=(0,A.A)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var y=n(86481),j=n(771);const C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},w=({theme:e,ownerState:o})=>{const n=(e=>C[e]||e)(o.color),r=(0,y.Yn)(e,`palette.${n}`,!1)||o.color,t=(0,y.Yn)(e,`palette.${n}Channel`);return"vars"in e&&t?`rgba(${t} / 0.4)`:(0,j.X4)(r,.4)},k=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],z=(0,m.Ay)(l.A,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[`underline${(0,p.A)(n.underline)}`],"button"===n.component&&o.button]}})((({theme:e,ownerState:o})=>(0,d.A)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&(0,d.A)({textDecoration:"underline"},"inherit"!==o.color&&{textDecorationColor:w({theme:e,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===o.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${f.focusVisible}`]:{outline:"auto"}}))),R=a.forwardRef((function(e,o){const n=(0,h.A)({props:e,name:"MuiLink"}),{className:t,color:i="primary",component:s="a",onBlur:l,onFocus:m,TypographyClasses:A,underline:g="always",variant:f="inherit",sx:y}=n,j=(0,c.A)(n,k),{isFocusVisibleRef:w,onBlur:R,onFocus:$,ref:I}=(0,x.A)(),[M,N]=a.useState(!1),D=(0,b.A)(o,I),W=(0,d.A)({},n,{color:i,component:s,focusVisible:M,underline:g,variant:f}),T=(e=>{const{classes:o,component:n,focusVisible:r,underline:t}=e,a={root:["root",`underline${(0,p.A)(t)}`,"button"===n&&"button",r&&"focusVisible"]};return(0,v.A)(a,S,o)})(W);return(0,r.jsx)(z,(0,d.A)({color:i,className:(0,u.A)(T.root,t),classes:A,component:s,onBlur:e=>{R(e),!1===w.current&&N(!1),l&&l(e)},onFocus:e=>{$(e),!0===w.current&&N(!0),m&&m(e)},ref:D,ownerState:W,variant:f,sx:[...Object.keys(C).includes(i)?[]:[{color:i}],...Array.isArray(y)?y:[y]]},j))}));var $=n(67512);const I=()=>{const[e,o]=(0,a.useState)(null),[n,t]=(0,a.useState)(null),[c,d]=(0,a.useState)(null),[u,v]=(0,a.useState)(null),[p,m]=(0,a.useState)(!1),h=(e,n)=>{switch(e){case"statusPageAccessible":o(n);break;case"sshAccessible":t(n);break;case"pingServerWorks":d(n);break;case"pingDtiServersWorks":v(n)}};(0,a.useEffect)((()=>{m(!!(n||c||u||!1===u))}),[n,c,u]);const x=()=>{o(null),t(null),d(null),v(null),m(!1)};return(0,r.jsx)(i.A,{variant:"outlined",style:{marginBottom:"10px"},children:(0,r.jsxs)(s.A,{children:[null===e&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.A,{variant:"h6",children:["A"," ",(0,r.jsx)(R,{href:"https://status.cacic.dev.br",target:"_blank",children:"p\xe1gina de estado dos servi\xe7os"})," ","est\xe1 acess\xedvel?"]}),(0,r.jsx)("br",{}),(0,r.jsx)($.A,{variant:"contained",onClick:()=>h("statusPageAccessible",!0),children:"Sim"}),(0,r.jsx)($.A,{variant:"contained",onClick:()=>h("statusPageAccessible",!1),children:"N\xe3o"})]}),null!==e&&null===n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.A,{variant:"body1",children:e?"A p\xe1gina de estado dos servi\xe7os do servidor est\xe1 acess\xedvel.":"A p\xe1gina de estado dos servi\xe7os do servidor n\xe3o est\xe1 acess\xedvel."}),(0,r.jsx)(l.A,{variant:"h6",children:"O servidor responde ao acesso SSH?"}),(0,r.jsx)("code",{children:" ssh -i ~/.ssh/id_rsa <user>@<ip> "}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)($.A,{variant:"contained",onClick:()=>h("sshAccessible",!0),children:"Sim"}),(0,r.jsx)($.A,{variant:"contained",onClick:()=>h("sshAccessible",!1),children:"N\xe3o"}),(0,r.jsx)($.A,{variant:"contained",onClick:x,children:"Reiniciar"})]}),null!==e&&!1===n&&null===c&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.A,{variant:"body1",children:[e?"A p\xe1gina de estado dos servi\xe7os do servidor est\xe1 acess\xedvel.":"A p\xe1gina de estado dos servi\xe7os do servidor n\xe3o est\xe1 acess\xedvel.",(0,r.jsx)("br",{}),"O servidor n\xe3o est\xe1 acess\xedvel por SSH."]}),(0,r.jsx)(l.A,{variant:"h6",children:"O servidor responde a pings?"}),(0,r.jsx)("code",{children:" ping 38a.fct.unesp.br "}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)($.A,{variant:"contained",onClick:()=>h("pingServerWorks",!0),children:"Sim"}),(0,r.jsx)($.A,{variant:"contained",onClick:()=>h("pingServerWorks",!1),children:"N\xe3o"}),(0,r.jsx)($.A,{variant:"contained",onClick:x,children:"Reiniciar"})]}),null!==e&&!1===n&&!1===c&&null===u&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.A,{variant:"body1",children:[e?"A p\xe1gina de estado dos servi\xe7os do servidor est\xe1 acess\xedvel.":"A p\xe1gina de estado dos servi\xe7os do servidor n\xe3o est\xe1 acess\xedvel.",(0,r.jsx)("br",{}),"O servidor n\xe3o est\xe1 acess\xedvel por SSH.",(0,r.jsx)("br",{}),"O servidor n\xe3o responde a pings."]}),(0,r.jsxs)(l.A,{variant:"h6",children:[(0,r.jsx)("i",{children:"Toda"})," a infraestrutura de rede da DTI responde a pings?"]}),(0,r.jsxs)("code",{children:["ping fct1-pp.net.unesp.br",(0,r.jsx)("br",{}),"ping pprudente.fct.unesp.br"," "]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)($.A,{variant:"contained",onClick:()=>h("pingDtiServersWorks",!0),children:"Sim"}),(0,r.jsx)($.A,{variant:"contained",onClick:()=>h("pingDtiServersWorks",!1),children:"N\xe3o"}),(0,r.jsx)($.A,{variant:"contained",onClick:x,children:"Reiniciar"})]}),p&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.A,{variant:"body1",children:[null!==e&&(0,r.jsx)("p",{children:e?"A p\xe1gina de estado dos servi\xe7os do servidor est\xe1 acess\xedvel.":"A p\xe1gina de estado dos servi\xe7os do servidor n\xe3o est\xe1 acess\xedvel."}),null!==n&&(0,r.jsx)("p",{children:n?"O servidor est\xe1 acess\xedvel por SSH.":"O servidor n\xe3o est\xe1 acess\xedvel por SSH."}),null!==c&&(0,r.jsx)("p",{children:c?"O servidor responde a pings.":"O servidor n\xe3o responde a pings."}),null!==u&&(0,r.jsx)("p",{children:u?"A infraestrutura da DTI responde a pings.":"A infraestrutura da DTI n\xe3o responde a pings."})]}),(0,r.jsx)(l.A,{variant:"h6",children:"Recomenda\xe7\xe3o"}),(0,r.jsx)(l.A,{variant:"body1",children:n?e?"Fa\xe7a login por SSH e reinicie os servi\xe7os afetados. N\xe3o entre em contato com a DTI.":"Fa\xe7a login por SSH e inicie o authentik e o uptime-kuma - ele auxiliar\xe1 a identificar outros servi\xe7os que est\xe3o off-line, para que voc\xea possa reinici\xe1-los. N\xe3o entre em contato com a DTI.":c?"O servidor responde a pings. Pode ser que o servidor esteja reiniciando. Aguarde at\xe9 30 minutos e tente o acesso SSH novamente. Se o problema persistir, pode ser que o OpenSSH esteja configurado incorretamente ou que a porta 22 tenha sido bloqueada. Entre em contato com a DTI.":u?"Pode ser que o servidor esteja reiniciando. Aguarde at\xe9 30 minutos e tente o acesso SSH novamente. Se o problema persistir, entre em contato com a DTI.":!1===u?"Aguarde a solu\xe7\xe3o do problema pela DTI. Entre em contato caso esteja demorando muito.":"Ocorreu um erro na l\xf3gica do resultado."}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)($.A,{variant:"contained",onClick:x,children:"Reiniciar"})]})]})})},M={title:"Downtime"},N=void 0,D={id:"Recursos/Servidores/Downtime",title:"Downtime",description:"Intencional",source:"@site/docs/Recursos/Servidores/Downtime.mdx",sourceDirName:"Recursos/Servidores",slug:"/Recursos/Servidores/Downtime",permalink:"/docs/Recursos/Servidores/Downtime",draft:!1,unlisted:!1,editUrl:"https://github.com/cacic-fct/cacic-fct.github.io/tree/main/docs/Recursos/Servidores/Downtime.mdx",tags:[],version:"current",lastUpdatedBy:"Yudi",lastUpdatedAt:1721664811e3,frontMatter:{title:"Downtime"},sidebar:"docs",previous:{title:"Conven\xe7\xe3o de nomenclatura",permalink:"/docs/Recursos/Servidores/Conven\xe7\xe3o de nomenclatura"},next:{title:"Especifica\xe7\xf5es comuns",permalink:"/docs/Recursos/Servidores/Especifica\xe7\xf5es comuns"}},W={},T=[{value:"Intencional",id:"intencional",level:2},{value:"N\xe3o intencional",id:"n\xe3o-intencional",level:2}];function E(e){const o={a:"a",h2:"h2",p:"p",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"intencional",children:"Intencional"}),"\n",(0,r.jsx)(o.p,{children:"Downtimes prolongados dever\xe3o ser notificados na p\xe1gina de estado dos servi\xe7os."}),"\n",(0,r.jsxs)(o.p,{children:["Acesse o ",(0,r.jsx)(o.a,{href:"https://status.cacic.dev.br/dashboard",children:"painel da p\xe1gina de estado dos servi\xe7os"})," e clique no avatar no canto superior direito para acessar o menu de manuten\xe7\xe3o."]}),"\n",(0,r.jsx)(o.h2,{id:"n\xe3o-intencional",children:"N\xe3o intencional"}),"\n",(0,r.jsx)(o.p,{children:"Responda \xe0s perguntas abaixo para descobrir o que fazer."}),"\n",(0,r.jsx)(I,{})]})}function B(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(E,{...e})}):E(e)}},67512:(e,o,n)=>{n.d(o,{A:()=>z});var r=n(98587),t=n(58168),a=n(96540),i=n(34164),s=n(46311),l=n(64111),c=n(771),d=n(11848),u=n(83169),v=n(3541),p=n(69129),m=n(28466),h=n(27553),x=n(17245);function b(e){return(0,x.Ay)("MuiButton",e)}const A=(0,h.A)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const g=a.createContext({});const S=a.createContext(void 0);var f=n(74848);const y=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],j=e=>(0,t.A)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),C=(0,d.Ay)(p.A,{shouldForwardProp:e=>(0,u.A)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.variant],o[`${n.variant}${(0,m.A)(n.color)}`],o[`size${(0,m.A)(n.size)}`],o[`${n.variant}Size${(0,m.A)(n.size)}`],"inherit"===n.color&&o.colorInherit,n.disableElevation&&o.disableElevation,n.fullWidth&&o.fullWidth]}})((({theme:e,ownerState:o})=>{var n,r;const a="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],i="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,t.A)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,t.A)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.X4)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===o.variant&&"inherit"!==o.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.X4)(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===o.variant&&"inherit"!==o.color&&{border:`1px solid ${(e.vars||e).palette[o.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.X4)(e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===o.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:i,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===o.variant&&"inherit"!==o.color&&{backgroundColor:(e.vars||e).palette[o.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[o.color].main}}),"&:active":(0,t.A)({},"contained"===o.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${A.focusVisible}`]:(0,t.A)({},"contained"===o.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${A.disabled}`]:(0,t.A)({color:(e.vars||e).palette.action.disabled},"outlined"===o.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===o.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===o.variant&&{padding:"6px 8px"},"text"===o.variant&&"inherit"!==o.color&&{color:(e.vars||e).palette[o.color].main},"outlined"===o.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===o.variant&&"inherit"!==o.color&&{color:(e.vars||e).palette[o.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[o.color].mainChannel} / 0.5)`:`1px solid ${(0,c.X4)(e.palette[o.color].main,.5)}`},"contained"===o.variant&&{color:e.vars?e.vars.palette.text.primary:null==(n=(r=e.palette).getContrastText)?void 0:n.call(r,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:a,boxShadow:(e.vars||e).shadows[2]},"contained"===o.variant&&"inherit"!==o.color&&{color:(e.vars||e).palette[o.color].contrastText,backgroundColor:(e.vars||e).palette[o.color].main},"inherit"===o.color&&{color:"inherit",borderColor:"currentColor"},"small"===o.size&&"text"===o.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===o.size&&"text"===o.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===o.size&&"outlined"===o.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===o.size&&"outlined"===o.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===o.size&&"contained"===o.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===o.size&&"contained"===o.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},o.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${A.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${A.disabled}`]:{boxShadow:"none"}})),w=(0,d.Ay)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.startIcon,o[`iconSize${(0,m.A)(n.size)}`]]}})((({ownerState:e})=>(0,t.A)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},j(e)))),k=(0,d.Ay)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.endIcon,o[`iconSize${(0,m.A)(n.size)}`]]}})((({ownerState:e})=>(0,t.A)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},j(e)))),z=a.forwardRef((function(e,o){const n=a.useContext(g),c=a.useContext(S),d=(0,s.A)(n,e),u=(0,v.A)({props:d,name:"MuiButton"}),{children:p,color:h="primary",component:x="button",className:A,disabled:j=!1,disableElevation:z=!1,disableFocusRipple:R=!1,endIcon:$,focusVisibleClassName:I,fullWidth:M=!1,size:N="medium",startIcon:D,type:W,variant:T="text"}=u,E=(0,r.A)(u,y),B=(0,t.A)({},u,{color:h,component:x,disabled:j,disableElevation:z,disableFocusRipple:R,fullWidth:M,size:N,type:W,variant:T}),O=(e=>{const{color:o,disableElevation:n,fullWidth:r,size:a,variant:i,classes:s}=e,c={root:["root",i,`${i}${(0,m.A)(o)}`,`size${(0,m.A)(a)}`,`${i}Size${(0,m.A)(a)}`,`color${(0,m.A)(o)}`,n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${(0,m.A)(a)}`],endIcon:["icon","endIcon",`iconSize${(0,m.A)(a)}`]},d=(0,l.A)(c,b,s);return(0,t.A)({},s,d)})(B),F=D&&(0,f.jsx)(w,{className:O.startIcon,ownerState:B,children:D}),P=$&&(0,f.jsx)(k,{className:O.endIcon,ownerState:B,children:$}),q=c||"";return(0,f.jsxs)(C,(0,t.A)({ownerState:B,className:(0,i.A)(n.className,O.root,A,q),component:x,disabled:j,focusRipple:!R,focusVisibleClassName:(0,i.A)(O.focusVisible,I),ref:o,type:W},E,{classes:O,children:[F,p,P]}))}))},57156:(e,o,n)=>{n.d(o,{A:()=>b});var r=n(58168),t=n(98587),a=n(96540),i=n(34164),s=n(64111),l=n(11848),c=n(3541),d=n(49162),u=n(27553),v=n(17245);function p(e){return(0,v.Ay)("MuiCard",e)}(0,u.A)("MuiCard",["root"]);var m=n(74848);const h=["className","raised"],x=(0,l.Ay)(d.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,o)=>o.root})((()=>({overflow:"hidden"}))),b=a.forwardRef((function(e,o){const n=(0,c.A)({props:e,name:"MuiCard"}),{className:a,raised:l=!1}=n,d=(0,t.A)(n,h),u=(0,r.A)({},n,{raised:l}),v=(e=>{const{classes:o}=e;return(0,s.A)({root:["root"]},p,o)})(u);return(0,m.jsx)(x,(0,r.A)({className:(0,i.A)(v.root,a),elevation:l?8:void 0,ref:o,ownerState:u},d))}))},25292:(e,o,n)=>{n.d(o,{A:()=>x});var r=n(58168),t=n(98587),a=n(96540),i=n(34164),s=n(64111),l=n(11848),c=n(3541),d=n(27553),u=n(17245);function v(e){return(0,u.Ay)("MuiCardContent",e)}(0,d.A)("MuiCardContent",["root"]);var p=n(74848);const m=["className","component"],h=(0,l.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,o)=>o.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),x=a.forwardRef((function(e,o){const n=(0,c.A)({props:e,name:"MuiCardContent"}),{className:a,component:l="div"}=n,d=(0,t.A)(n,m),u=(0,r.A)({},n,{component:l}),x=(e=>{const{classes:o}=e;return(0,s.A)({root:["root"]},v,o)})(u);return(0,p.jsx)(h,(0,r.A)({as:l,className:(0,i.A)(x.root,a),ownerState:u,ref:o},d))}))},49162:(e,o,n)=>{n.d(o,{A:()=>A});var r=n(98587),t=n(58168),a=n(96540),i=n(34164),s=n(64111),l=n(771),c=n(11848),d=n(98783),u=n(3541),v=n(27553),p=n(17245);function m(e){return(0,p.Ay)("MuiPaper",e)}(0,v.A)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var h=n(74848);const x=["className","component","elevation","square","variant"],b=(0,c.Ay)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[n.variant],!n.square&&o.rounded,"elevation"===n.variant&&o[`elevation${n.elevation}`]]}})((({theme:e,ownerState:o})=>{var n;return(0,t.A)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!o.square&&{borderRadius:e.shape.borderRadius},"outlined"===o.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===o.variant&&(0,t.A)({boxShadow:(e.vars||e).shadows[o.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,l.X4)("#fff",(0,d.A)(o.elevation))}, ${(0,l.X4)("#fff",(0,d.A)(o.elevation))})`},e.vars&&{backgroundImage:null==(n=e.vars.overlays)?void 0:n[o.elevation]}))})),A=a.forwardRef((function(e,o){const n=(0,u.A)({props:e,name:"MuiPaper"}),{className:a,component:l="div",elevation:c=1,square:d=!1,variant:v="elevation"}=n,p=(0,r.A)(n,x),A=(0,t.A)({},n,{component:l,elevation:c,square:d,variant:v}),g=(e=>{const{square:o,elevation:n,variant:r,classes:t}=e,a={root:["root",r,!o&&"rounded","elevation"===r&&`elevation${n}`]};return(0,s.A)(a,m,t)})(A);return(0,h.jsx)(b,(0,t.A)({as:l,ownerState:A,className:(0,i.A)(g.root,a),ref:o},p))}))},28453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>s});var r=n(96540);const t={},a=r.createContext(t);function i(e){const o=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:o},e.children)}}}]);