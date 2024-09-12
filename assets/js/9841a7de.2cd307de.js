"use strict";(self.webpackChunkcacic_fct=self.webpackChunkcacic_fct||[]).push([[640],{50961:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var o=i(74848),s=i(28453);const n={title:"Traefik"},t=void 0,c={id:"Recursos/Servidores/FCTDTIWEBXP01/Servi\xe7os/Docker Compose/Traefik",title:"Traefik",description:"Comandos padr\xe3o",source:"@site/docs/Recursos/Servidores/FCTDTIWEBXP01/Servi\xe7os/Docker Compose/Traefik.md",sourceDirName:"Recursos/Servidores/FCTDTIWEBXP01/Servi\xe7os/Docker Compose",slug:"/Recursos/Servidores/FCTDTIWEBXP01/Servi\xe7os/Docker Compose/Traefik",permalink:"/docs/Recursos/Servidores/FCTDTIWEBXP01/Servi\xe7os/Docker Compose/Traefik",draft:!1,unlisted:!1,editUrl:"https://github.com/cacic-fct/cacic-fct.github.io/tree/main/docs/Recursos/Servidores/FCTDTIWEBXP01/Servi\xe7os/Docker Compose/Traefik.md",tags:[],version:"current",lastUpdatedBy:"Yudi",lastUpdatedAt:1721664811e3,frontMatter:{title:"Traefik"},sidebar:"docs",previous:{title:"Firewall",permalink:"/docs/Recursos/Servidores/FCTDTIWEBXP01/Rede/Firewall"},next:{title:"Watchtower",permalink:"/docs/Recursos/Servidores/FCTDTIWEBXP01/Servi\xe7os/Docker Compose/Watchtower"}},a={},d=[{value:"Comandos padr\xe3o",id:"comandos-padr\xe3o",level:2},{value:"Entrypoints",id:"entrypoints",level:3},{value:"Redirecionamento para HTTPS",id:"redirecionamento-para-https",level:4},{value:"<em>Responding timeouts</em>",id:"responding-timeouts",level:4},{value:"Certificados SSL",id:"certificados-ssl",level:3},{value:"Acesso direto",id:"acesso-direto",level:2},{value:"38a.fct.unesp.br e FCTDTIWEBXP01.cacic.dev.br",id:"38afctunespbr-e-fctdtiwebxp01cacicdevbr",level:3},{value:"IP do servidor",id:"ip-do-servidor",level:3}];function l(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"comandos-padr\xe3o",children:"Comandos padr\xe3o"}),"\n",(0,o.jsxs)(r.p,{children:["O comando ",(0,o.jsx)(r.code,{children:'- "--api.insecure"'})," deve ser definido para ",(0,o.jsx)(r.code,{children:"false"}),", para evitar que a API do Traefik seja acess\xedvel sem autentica\xe7\xe3o."]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:'- "--providers.file.directory=/providers"'})," define o diret\xf3rio onde os arquivos de configura\xe7\xe3o do Traefik est\xe3o localizados."]}),"\n",(0,o.jsx)(r.h3,{id:"entrypoints",children:"Entrypoints"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"web - HTTP (80)"}),"\n",(0,o.jsx)(r.li,{children:"websecure - HTTPS (443)"}),"\n"]}),"\n",(0,o.jsx)(r.h4,{id:"redirecionamento-para-https",children:"Redirecionamento para HTTPS"}),"\n",(0,o.jsx)(r.p,{children:"Todo o tr\xe1fego HTTP \xe9 redirecionado para HTTPS. Isso \xe9 feito atrav\xe9s dos comando abaixo:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-yaml",children:'- "--entrypoints.web.http.redirections.entryPoint.to=websecure"\n'})}),"\n",(0,o.jsx)(r.h4,{id:"responding-timeouts",children:(0,o.jsx)(r.em,{children:"Responding timeouts"})}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"https://github.com/traefik/traefik/wiki/respondingTimeouts-for-applications",children:"https://github.com/traefik/traefik/wiki/respondingTimeouts-for-applications"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-yaml",children:'- "--entrypoints.websecure.transport.respondingTimeouts.readTimeout=0s"\n'})}),"\n",(0,o.jsx)(r.h3,{id:"certificados-ssl",children:"Certificados SSL"}),"\n",(0,o.jsxs)(r.p,{children:["\xc9 necess\xe1rio utilizar o HTTP Challenge, pois \xe9 emitido um certificado para o redirect do ",(0,o.jsx)(r.code,{children:"38a.fct.unesp.br"}),", que n\xe3o possu\xedmos acesso."]}),"\n",(0,o.jsx)(r.h2,{id:"acesso-direto",children:"Acesso direto"}),"\n",(0,o.jsx)(r.h3,{id:"38afctunespbr-e-fctdtiwebxp01cacicdevbr",children:"38a.fct.unesp.br e FCTDTIWEBXP01.cacic.dev.br"}),"\n",(0,o.jsx)(r.p,{children:"Redirecionar para esta documenta\xe7\xe3o."}),"\n",(0,o.jsxs)(r.p,{children:["Por excesso de cautela, foi adicionado um ",(0,o.jsx)(r.em,{children:"rate limit"}),"."]}),"\n",(0,o.jsx)(r.h3,{id:"ip-do-servidor",children:"IP do servidor"}),"\n",(0,o.jsx)(r.p,{children:"Nega-se acesso direto ao IP do servidor."}),"\n",(0,o.jsxs)(r.p,{children:["Para isso, \xe9 necess\xe1rio configurar o Traefik para recusar requisi\xe7\xf5es que n\xe3o possuam uma extens\xe3o ",(0,o.jsx)(r.code,{children:"server_name"})," v\xe1lida."]}),"\n",(0,o.jsx)(r.p,{children:"No momento (julho de 2024), s\xf3 \xe9 poss\xedvel definir isto na configura\xe7\xe3o est\xe1tica."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-yaml",children:"# https://github.com/traefik/traefik/issues/5507\ntls:\n  options:\n    directIp:\n      sniStrict: true\n"})})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>t,x:()=>c});var o=i(96540);const s={},n=o.createContext(s);function t(e){const r=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(n.Provider,{value:r},e.children)}}}]);