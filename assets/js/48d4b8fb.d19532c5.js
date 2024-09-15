"use strict";(self.webpackChunkcacic_fct=self.webpackChunkcacic_fct||[]).push([[5333],{3023:(e,t,r)=>{r.d(t,{A:()=>A});var n=r(6540),o=r(4164),a=r(1609),i=r(5659),s=r(3967),l=r(6958),c=r(7739),d=r(8502),p=r(4848);const u=(0,d.A)(),h=(0,c.A)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,s.A)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),m=e=>(0,l.A)({props:e,name:"MuiContainer",defaultTheme:u});var g=r(8466),y=r(1848),f=r(3541);const v=function(e={}){const{createStyledComponent:t=h,useThemeProps:r=m,componentName:l="MuiContainer"}=e,c=t((({theme:e,ownerState:t})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,r)=>{const n=r,o=e.breakpoints.values[n];return 0!==o&&(t[e.breakpoints.up(n)]={maxWidth:`${o}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>({..."xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},...t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}}))),d=n.forwardRef((function(e,t){const n=r(e),{className:d,component:u="div",disableGutters:h=!1,fixed:m=!1,maxWidth:g="lg",classes:y,...f}=n,v={...n,component:u,disableGutters:h,fixed:m,maxWidth:g},A=((e,t)=>{const{classes:r,fixed:n,disableGutters:o,maxWidth:l}=e,c={root:["root",l&&`maxWidth${(0,s.A)(String(l))}`,n&&"fixed",o&&"disableGutters"]};return(0,i.A)(c,(e=>(0,a.Ay)(t,e)),r)})(v,l);return(0,p.jsx)(c,{as:u,ownerState:v,className:(0,o.A)(A.root,d),ref:t,...f})}));return d}({createStyledComponent:(0,y.Ay)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,g.A)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,f.A)({props:e,name:"MuiContainer"})}),A=v},5669:(e,t,r)=>{r.d(t,{b:()=>o});r(6540);var n=r(257);r(4848);function o(e){return(0,n.b)(e)}},2453:(e,t,r)=>{r.d(t,{A:()=>v});var n=r(6540),o=r(4164),a=r(5659),i=r(7955),s=r(4848);var l=r(1848),c=r(2637),d=r(5669),p=r(8466),u=r(8660),h=r(8651);const m={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},g=i.A,y=(0,l.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,p.A)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})((0,c.A)((({theme:e})=>({margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(e.typography).filter((([e,t])=>"inherit"!==e&&t&&"object"==typeof t)).map((([e,t])=>({props:{variant:e},style:t}))),...Object.entries(e.palette).filter((0,u.A)()).map((([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}}))),...Object.entries(e.palette?.text||{}).filter((([,e])=>"string"==typeof e)).map((([t])=>({props:{color:`text${(0,p.A)(t)}`},style:{color:(e.vars||e).palette.text[t]}}))),{props:({ownerState:e})=>"inherit"!==e.align,style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:e})=>e.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:e})=>e.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:e})=>e.paragraph,style:{marginBottom:16}}]})))),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},v=n.forwardRef((function(e,t){const{color:r,...n}=(0,d.b)({props:e,name:"MuiTypography"}),i=g({...n,...!m[r]&&{color:r}}),{align:l="inherit",className:c,component:u,gutterBottom:v=!1,noWrap:A=!1,paragraph:b=!1,variant:w="body1",variantMapping:x=f,...T}=i,E={...i,align:l,color:r,className:c,component:u,gutterBottom:v,noWrap:A,paragraph:b,variant:w,variantMapping:x},I=u||(b?"p":x[w]||f[w])||"span",_=(e=>{const{align:t,gutterBottom:r,noWrap:n,paragraph:o,variant:i,classes:s}=e,l={root:["root",i,"inherit"!==e.align&&`align${(0,p.A)(t)}`,r&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return(0,a.A)(l,h.y,s)})(E);return(0,s.jsx)(y,{as:I,ref:t,className:(0,o.A)(_.root,c),...T,ownerState:E,style:{..."inherit"!==l&&{"--Typography-textAlign":l},...T.style}})}))},8651:(e,t,r)=>{r.d(t,{A:()=>i,y:()=>a});var n=r(8413),o=r(1609);function a(e){return(0,o.Ay)("MuiTypography",e)}const i=(0,n.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"])},3541:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(6958),o=r(2765),a=r(8312);function i({props:e,name:t}){return(0,n.A)({props:e,name:t,defaultTheme:o.A,themeId:a.A})}},8660:(e,t,r)=>{function n(e=[]){return([,t])=>t&&function(e,t=[]){if(!function(e){return"string"==typeof e.main}(e))return!1;for(const r of t)if(!e.hasOwnProperty(r)||"string"!=typeof e[r])return!1;return!0}(t,e)}r.d(t,{A:()=>n})},2637:(e,t,r)=>{r.d(t,{A:()=>o});const n={theme:void 0};function o(e){let t,r;return o=>{let a=t;return void 0!==a&&o.theme===r||(n.theme=o.theme,a=e(n),t=a,r=o.theme),a}}},7955:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(1317),o=r(5081);const a=e=>{const t={systemProps:{},otherProps:{}},r=e?.theme?.unstable_sxConfig??o.A;return Object.keys(e).forEach((n=>{r[n]?t.systemProps[n]=e[n]:t.otherProps[n]=e[n]})),t};function i(e){const{sx:t,...r}=e,{systemProps:o,otherProps:i}=a(r);let s;return s=Array.isArray(t)?[o,...t]:"function"==typeof t?(...e)=>{const r=t(...e);return(0,n.Q)(r)?{...o,...r}:o}:{...o,...t},{...i,sx:s}}},7739:(e,t,r)=>{r.d(t,{A:()=>n});const n=(0,r(9667).Ay)()},1777:(e,t,r)=>{r.d(t,{A:()=>i});var n=r(8502),o=r(6539);const a=(0,n.A)();const i=function(e=a){return(0,o.A)(e)}},6958:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(7379);var o=r(1777);function a({props:e,name:t,defaultTheme:r,themeId:a}){let i=(0,o.A)(r);return a&&(i=i[a]||i),function(e){const{theme:t,name:r,props:o}=e;return t&&t.components&&t.components[r]&&t.components[r].defaultProps?(0,n.A)(t.components[r].defaultProps,o):o}({theme:i,name:t,props:e})}},8413:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(1609);function o(e,t,r="Mui"){const o={};return t.forEach((t=>{o[t]=(0,n.Ay)(e,t,r)})),o}},1628:(e,t,r)=>{r.r(t),r.d(t,{default:()=>L});var n=r(7762);const o={video_wrapper:"video_wrapper_U9H5"};var a=r(4848);function i(){return(0,a.jsx)("div",{className:o.video_wrapper,children:(0,a.jsx)("iframe",{src:"https://www.youtube.com/embed/live_stream?channel=UCoYH_4dyIQHx2Kad-HG6aNA&autoplay=1",title:"Transmiss\xe3o do YouTube",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"})})}var s=r(3023),l=r(2453),c=r(6540),d=r(2303);function p(e){let{children:t,fallback:r}=e;return(0,d.A)()?(0,a.jsx)(a.Fragment,{children:t?.()}):r??null}const u={container:"container_RPH9",video_wrapper:"video_wrapper_eopZ",chat_wrapper:"chat_wrapper_S9lI"};function h(e){let{youtubeList:t}=e;if(t.length>0)return(0,a.jsx)(a.Fragment,{children:t.map((e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:u.container,children:(0,a.jsx)(p,{children:()=>{const t=window.location.hostname;return(0,a.jsxs)(a.Fragment,{children:[" ",(0,a.jsx)("div",{className:u.video_wrapper,children:(0,a.jsx)("iframe",{className:u.video,src:`https://www.youtube.com/embed/${e}?autoplay=1&mute=1`,title:"Transmiss\xe3o do YouTube",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"})}),(0,a.jsx)("div",{className:u.chat_wrapper,children:(0,a.jsx)("iframe",{className:u.chat,src:`https://www.youtube.com/live_chat?v=${e}&amp;embed_domain=${t}`})})]})}})})})))})}function m(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}"function"==typeof SuppressedError&&SuppressedError;const g={CHAT:{HEIGHT:550,WIDTH:350},MEDIA:{HEIGHT:480,WIDTH:940},ID:{TWITCH_EMBED:"twitch-embed",TWITCH_PLAYER:"twitch-player"},TITLE:{TWITCH_CHAT:"TwitchChat",TWITCH_CLIP:"TwitchClip",TWITCH_PLAYER_NON_INTERACTIVE:"TwitchPlayerNonInteractive"},ALLOW_FULLSCREEN:!0,AUTOPLAY:!0,WITH_CHAT:!0,MUTED:!1,DARK_MODE:!0,TIME:"0h0m0s",HIDE_CONTROLS:!1,INLINE:!0},y=(g.DARK_MODE,g.AUTOPLAY,g.MUTED,e=>{const[t,r]=(0,c.useState)({loading:!0,error:null});return(0,c.useEffect)((()=>{if(!e)return void r({loading:!1,error:new Error("No src provided to useScript.")});let t=document.querySelector(`script[src="${e}"]`);t?r((e=>Object.assign(Object.assign({},e),{loading:"true"===t.getAttribute("data-loading")}))):(t=document.createElement("script"),t.src=e,t.async=!0,t.type="text/javascript",t.setAttribute("data-loading","true"),document.body.appendChild(t),t.addEventListener("load",(()=>{null==t||t.setAttribute("data-loading","false")}),{once:!0}),t.addEventListener("error",(()=>{null==t||t.setAttribute("data-loading","false")}),{once:!0}));const n=t=>{"load"===t.type?r({loading:!1,error:null}):"error"===t.type&&r({loading:!1,error:new Error(`There was an error loading the script for ${e}`)})};return t.addEventListener("load",n),t.addEventListener("error",n),()=>{null==t||t.removeEventListener("load",n),null==t||t.removeEventListener("error",n)}}),[e]),t}),f=e=>{const t=(0,c.useRef)();return(0,c.useEffect)((()=>{t.current=e}),[e]),t.current},v=()=>e=>{},A=()=>(e,t)=>{},b=(e,t,r)=>{for(const n in e)if(e[n]!==t[n]&&!r.includes(n))return!0;return!1},w=e=>{const t=document.getElementById(e);t&&(t.innerHTML="")},x=["channel","video","collection","height","width"],T=e=>{const{allowFullscreen:t=g.ALLOW_FULLSCREEN,autoplay:r=g.AUTOPLAY,channel:n,video:o,collection:a,withChat:i=g.WITH_CHAT,muted:s=g.MUTED,parent:l,darkMode:d=g.DARK_MODE,time:p=g.TIME,hideControls:u=g.HIDE_CONTROLS,onAuthenticate:h=A(),onVideoPlay:T=A(),onVideoPause:E=v(),onVideoReady:I=v(),id:_=g.ID.TWITCH_EMBED,height:C=g.MEDIA.HEIGHT,width:L=g.MEDIA.WIDTH}=e,j=m(e,["allowFullscreen","autoplay","channel","video","collection","withChat","muted","parent","darkMode","time","hideControls","onAuthenticate","onVideoPlay","onVideoPause","onVideoReady","id","height","width"]),{loading:W,error:O}=y("https://embed.twitch.tv/embed/v1.js"),S=f(e),P=(0,c.useRef)(),H=(0,c.useCallback)((e=>{w(_);const c=new e(_,{allowfullscreen:t,autoplay:r,channel:n,video:o,collection:a,layout:i?"video-with-chat":"video",muted:s,parent:"string"==typeof l?[l]:l,theme:d?"dark":"light",time:p,controls:!u,height:"100%",width:"100%"});return c.addEventListener(e.AUTHENTICATE,(e=>h(c,e))),c.addEventListener(e.VIDEO_PLAY,(e=>T(c,e))),c.addEventListener(e.VIDEO_PAUSE,(()=>E(c))),c.addEventListener(e.VIDEO_READY,(()=>I(c))),c}),[t,r,n,o,a,i,s,l,d,p,u,h,E,T,I,_]);return(0,c.useEffect)((()=>{W||(O?console.error(O):P.current&&!((e,t)=>{var r;return b(null!==(r=e)&&void 0!==r?r:{},t,x)})(S,e)?(n&&(null==S?void 0:S.channel)!==n&&P.current.getPlayer().setChannel(n),o&&(null==S?void 0:S.video)!==o&&P.current.getPlayer().setVideo(o,0),a&&(null==S?void 0:S.collection)!==a&&P.current.getPlayer().setCollection(a,o)):P.current=H(window.Twitch.Embed))}),[n,a,H,O,W,S,e,o]),W?null:c.createElement("div",Object.assign({id:_,style:{height:C,width:L}},j))},E=(g.AUTOPLAY,g.MUTED,g.TIME,{container:"container_rrh9"});function I(e){let{twitchList:t}=e;if(t.length>0)return(0,a.jsx)(a.Fragment,{children:t.map((e=>(0,a.jsx)("div",{className:E.container,children:(0,a.jsx)(T,{channel:e,id:e,width:"100%",height:600,muted:!0})})))})}const _=[],C=[];function L(){return(0,a.jsx)(n.A,{title:"Ao vivo",description:"Confira nossas transmiss\xf5es ao vivo.",children:(0,a.jsxs)(s.A,{maxWidth:"xl",sx:{py:4},children:[(0,a.jsx)(l.A,{variant:"h6",sx:{my:4},children:"Transmiss\xe3o ao vivo"}),0===_.length&&0===C.length&&(0,a.jsx)(i,{}),(0,a.jsx)(h,{youtubeList:_}),(0,a.jsx)(I,{twitchList:C})]})})}}}]);