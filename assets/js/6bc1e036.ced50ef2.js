"use strict";(self.webpackChunkcacic_fct=self.webpackChunkcacic_fct||[]).push([[967],{3662:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>t,contentTitle:()=>a,default:()=>p,frontMatter:()=>d,metadata:()=>c,toc:()=>n});var i=s(4848),o=s(8453);const d={title:"Traefik"},a=void 0,c={id:"Recursos/Servidores/FCTDTIWEBXP01/Servi\xe7os/Docker Compose/fctapp/Traefik",title:"Traefik",description:"O Traefik \xe9 usado para a gest\xe3o de certificados SSL e roteamento de tr\xe1fego.",source:"@site/docs/Recursos/Servidores/FCTDTIWEBXP01/Servi\xe7os/Docker Compose/fctapp/Traefik.md",sourceDirName:"Recursos/Servidores/FCTDTIWEBXP01/Servi\xe7os/Docker Compose/fctapp",slug:"/Recursos/Servidores/FCTDTIWEBXP01/Servi\xe7os/Docker Compose/fctapp/Traefik",permalink:"/docs/Recursos/Servidores/FCTDTIWEBXP01/Servi\xe7os/Docker Compose/fctapp/Traefik",draft:!1,unlisted:!1,editUrl:"https://github.com/cacic-fct/cacic-fct.github.io/tree/main/docs/Recursos/Servidores/FCTDTIWEBXP01/Servi\xe7os/Docker Compose/fctapp/Traefik.md",tags:[],version:"current",lastUpdatedBy:"Yudi",lastUpdatedAt:1721664811e3,frontMatter:{title:"Traefik"},sidebar:"docs",previous:{title:"Nginx",permalink:"/docs/Recursos/Servidores/FCTDTIWEBXP01/Servi\xe7os/Docker Compose/fctapp/Nginx"},next:{title:"Watchtower",permalink:"/docs/Recursos/Servidores/FCTDTIWEBXP01/Servi\xe7os/Docker Compose/fctapp/Watchtower"}},t={},n=[{value:"SSL",id:"ssl",level:3},{value:"Middlewares",id:"middlewares",level:3},{value:"Redirecionamento HTTP",id:"redirecionamento-http",level:4},{value:"Rate limit",id:"rate-limit",level:4},{value:"Headers",id:"headers",level:4},{value:"Privacidade do usu\xe1rio",id:"privacidade-do-usu\xe1rio",level:4}];function l(e){const r={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"O Traefik \xe9 usado para a gest\xe3o de certificados SSL e roteamento de tr\xe1fego."}),"\n",(0,i.jsx)(r.h3,{id:"ssl",children:"SSL"}),"\n",(0,i.jsx)(r.p,{children:"O Traefik \xe9 respons\xe1vel por gerar e renovar os certificados SSL automaticamente atrav\xe9s do Let's Encrypt."}),"\n",(0,i.jsx)(r.h3,{id:"middlewares",children:"Middlewares"}),"\n",(0,i.jsx)(r.h4,{id:"redirecionamento-http",children:"Redirecionamento HTTP"}),"\n",(0,i.jsxs)(r.p,{children:["Todo o tr\xe1fego HTTP \xe9 redirecionado para HTTPS. Isso \xe9 feito atrav\xe9s do middleware ",(0,i.jsx)(r.code,{children:"fctapp-insecure-mw"}),"."]}),"\n",(0,i.jsx)(r.h4,{id:"rate-limit",children:"Rate limit"}),"\n",(0,i.jsxs)(r.p,{children:["A quantidade de requisi\xe7\xf5es por IP \xe9 limitada para evitar ataques automatizados. Isso \xe9 feito atrav\xe9s do middleware ",(0,i.jsx)(r.code,{children:"fctapp-mw-ratelimit"}),"."]}),"\n",(0,i.jsx)(r.h4,{id:"headers",children:"Headers"}),"\n",(0,i.jsxs)(r.p,{children:["Headers de seguran\xe7a s\xe3o usados para evitar ataques XSS e Clickjacking. Isso \xe9 feito atrav\xe9s do middleware ",(0,i.jsx)(r.code,{children:"fctapp-mw-securityheaders"}),"."]}),"\n",(0,i.jsx)(r.p,{children:"S\xe3o headers necess\xe1rios:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"STSSeconds"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"STSIncludeSubdomains"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"STSPreload"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"forceSTSHeader"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"X-Forwarded-Proto: https"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"contentTypeNosniff"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"browserXssFilter"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.code,{children:"frameDeny"})}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"permissionsPolicy: camera=(self), clipboard-read=(self), clipboard-write=(self)"})," - Permiss\xf5es para acessar a c\xe2mera e a \xe1rea de transfer\xeancia do usu\xe1rio."]}),"\n"]}),"\n",(0,i.jsx)(r.h4,{id:"privacidade-do-usu\xe1rio",children:"Privacidade do usu\xe1rio"}),"\n",(0,i.jsxs)(r.p,{children:["Headers de privacidade s\xe3o usados para evitar rastreamento por terceiros. Isso \xe9 feito atrav\xe9s do middleware ",(0,i.jsx)(r.code,{children:"fctapp-mw-securityheaders"}),"."]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"referrerPolicy: same-origin"})," - N\xe3o enviar o header ",(0,i.jsx)(r.code,{children:"Referer"})," para outros sites, apenas para site do FCT App."]}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>c});var i=s(6540);const o={},d=i.createContext(o);function a(e){const r=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(d.Provider,{value:r},e.children)}}}]);