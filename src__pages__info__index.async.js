"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[475],{85995:function(M,v,t){t.r(v),t.d(v,{default:function(){return N}});var j=t(56606),y=t.n(j),D=t(93450),a=t.n(D),S=t(66933),d=t.n(S),k=t(69533),w=t(52287),r=t(67294),I={normal:"normal___DygJO"},e=t(85893),B=function(u){return(0,e.jsxs)("div",{children:[u.visible&&(0,e.jsx)("div",{style:{height:"100%",position:"fixed",width:"100%",backgroundColor:"rgba(0,0,0,0.85)",top:0,left:0,display:"flex",alignItems:"flex-end"},onClick:function(){u.onVisibleChange(!1)}}),(0,e.jsx)("div",{style:{height:"100%",position:"fixed",width:"100%",backgroundColor:"rgba(0,0,0,0.5)",top:0,left:0,display:"flex",alignItems:"flex-end",transform:u.visible?"translateY(0%)":"translateY(100%)"},onClick:function(){u.onVisibleChange(!1)}}),(0,e.jsxs)("div",{onClick:function(h){h.stopPropagation(),h.preventDefault()},style:{boxSizing:"border-box",position:"fixed",bottom:"0.01rem",background:"#fff",backgroundImage:"url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/fHYGTZB3Bn0AAAAAAAAAAAAAFl94AQBr')",backgroundSize:"100% auto",backgroundPosition:"left bottom",backgroundRepeat:"no-repeat",height:u.height||"9.2rem",marginBottom:"-1rem",transform:u.visible?"translateY(0%)":"translateY(100%)",transition:"all 0.3s ease-in-out",width:"100%",borderTopLeftRadius:"0.56rem",borderTopRightRadius:"0.56rem",padding:"0.24rem 0.82rem",textAlign:"left"},children:[(0,e.jsxs)("div",{style:{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",height:"0.65rem",marginBottom:"0.44rem"},children:[(0,e.jsx)("img",{src:"https://gw.alipayobjects.com/zos/bmw-prod/837b7a82-bfbd-478c-a9df-0f7945e71377.svg",style:{width:"0.3rem",height:"0.3rem",position:"absolute",top:"0.4rem",left:"0.4rem"},onClick:function(){return u.onVisibleChange(!1)}}),(0,e.jsx)("div",{style:{fontSize:"0.4rem"},children:u.title})]}),(0,e.jsx)("div",{style:{fontSize:"0.32rem",textAlign:"left"},children:u.children})]})]})},z=function(u){var l=(0,k.useNavigate)(),h=(0,r.useState)(function(){return localStorage.getItem("user-phone-number")}),f=d()(h,2),x=f[0],b=f[1],p=(0,r.useState)({name:void 0,phoneNumber:void 0,wechat:void 0,address:void 0}),g=d()(p,2),n=g[0],s=g[1],E=(0,r.useState)(""),m=d()(E,2),A=m[0],c=m[1];return(0,r.useEffect)(function(){!x||s({name:void 0,phoneNumber:void 0,wechat:void 0,address:void 0})},[x]),(0,e.jsxs)(e.Fragment,{children:[u.visible&&(0,e.jsx)("div",{style:{height:"100%",position:"fixed",width:"100%",backgroundColor:"rgba(0,0,0,0.85)",top:0,left:0,display:"flex",alignItems:"flex-end"},onClick:function(){u.onVisibleChange(!1)}}),(0,e.jsxs)("div",{style:{position:"fixed",top:u.visible?"12%":0,width:"95%",margin:"0 auto",left:"2.5%",zIndex:99,transition:"all 0.3s ease-in-out",transform:u.visible?"translateY(0%)":"translateY(140%)"},children:[(0,e.jsxs)("div",{style:{width:"100%",backgroundSize:"100% 100%",backgroundRepeat:"no-repeat",padding:"0.8rem 0.8rem",paddingTop:"2.2rem",paddingBottom:"1.2rem",display:"flex",flexDirection:"column",gap:"0.24rem",backgroundImage:'url("https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/fhq6S6PFlNUAAAAAAAAAAAAAFl94AQBr")'},children:[(0,e.jsx)("div",{style:{fontSize:"0.24rem",color:"#fa541c",marginTop:"-0.24rem",height:"0.4rem"},children:A}),(0,e.jsx)("input",{style:{background:"#F4F4F4",border:"1px solid #E8E8E8",boxShadow:"none",outline:"none",width:"100%",height:"0.8rem",paddingLeft:"0.2rem"},placeholder:"\u59D3\u540D",onChange:function(i){s(function(o){return a()(a()({},o),{},{name:i.target.value})})}}),(0,e.jsx)("input",{style:{background:"#F4F4F4",border:"1px solid #E8E8E8",boxShadow:"none",outline:"none",width:"100%",paddingLeft:"0.2rem",height:"0.8rem"},placeholder:"\u624B\u673A\u53F7\u7801",onChange:function(i){s(function(o){return a()(a()({},o),{},{phoneNumber:i.target.value})})}}),(0,e.jsx)("input",{style:{background:"#F4F4F4",border:"1px solid #E8E8E8",boxShadow:"none",outline:"none",width:"100%",height:"0.8rem",paddingLeft:"0.2rem"},placeholder:"\u5FAE\u4FE1\u8D26\u53F7",onChange:function(i){s(function(o){return a()(a()({},o),{},{wechat:i.target.value})})}}),(0,e.jsx)("textarea",{style:{background:"#F4F4F4",border:"1px solid #E8E8E8",boxShadow:"none",paddingLeft:"0.2rem",outline:"none",width:"100%"},rows:5,onChange:function(i){s(function(o){return a()(a()({},o),{},{address:i.target.value})})},placeholder:"\u6536\u8D27\u5730\u5740"})]}),(0,e.jsx)("img",{style:{width:"4rem"},onClick:function(){if(c(""),Object.keys(n).some(function(o){return!(n!=null&&n[o])})){c("\u6240\u6709\u7684\u8868\u5355\u9879\u90FD\u9700\u8981\u8F93\u5165\u54E6");return}if(n.phoneNumber){localStorage.setItem("user-phone-number",n.phoneNumber),b(n.phoneNumber);var i=w.FN.show({icon:"loading",content:"\u6B63\u5728\u8BB0\u5F55\u5185\u5BB9..."});fetch("https://proapi.azurewebsites.net/sport/addr",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(){i.close(),l("/")}).catch(function(){})}},alt:"\u5B8C\u6210",src:"https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/HVf-TpG9PvkAAAAAAAAAAAAAFl94AQBr"})]})]})};function N(F){y()(F);var u=(0,r.useState)(!1),l=d()(u,2),h=l[0],f=l[1],x=(0,r.useState)(!1),b=d()(x,2),p=b[0],g=b[1],n=(0,r.useState)(!1),s=d()(n,2),E=s[0],m=s[1],A=localStorage.getItem("user-phone-number");return(0,r.useEffect)(function(){if(A){document.title="\u67E5\u770B\u89C4\u5219 - \u7EBF\u4E0A\u9A6C\u62C9\u677E";return}document.title="\u62A5\u540D - \u7EBF\u4E0A\u9A6C\u62C9\u677E"},[]),(0,e.jsxs)("div",{className:I.normal,children:[(0,e.jsx)("div",{style:{position:"absolute",top:"25.6%",right:"0%",width:"100%",height:"0.5rem",zIndex:9},onClick:function(){f(!0)}}),(0,e.jsx)("div",{style:{position:"absolute",top:"27.4%",right:"0%",width:"100%",height:"0.5rem",zIndex:9},onClick:function(){g(!0)}}),(0,e.jsx)("img",{width:"100%",height:"100%",style:{position:"relative",top:"-0.4rem"},src:"https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/KgXiQqPLxOQAAAAAAAAAAAAAFl94AQBr"}),A?"":(0,e.jsx)("div",{style:{position:"fixed",bottom:0,backgroundColor:"#62a7ef",width:"100%",height:"1.28rem",color:"#fff",fontSize:"0.48rem",fontWeight:"bold",lineHeight:"1.28rem"},onClick:function(){m(!0)},children:"\u9A6C\u4E0A\u62A5\u540D"}),(0,e.jsx)(B,{visible:h,title:"\u6D3B\u52A8\u89C4\u5219",height:"9.4rem",onVisibleChange:f,children:(0,e.jsxs)("div",{style:{fontSize:"0.32rem",textAlign:"left"},children:[(0,e.jsx)("p",{children:"\u62A5\u540D\u53C2\u4E0E\u201C\u7EBF\u4E0A\u9A6C\u62C9\u677E\u6D3B\u52A8\u201D"}),(0,e.jsx)("p",{children:"\u6BCF\u6210\u529F\u6253\u5361\u4E00\u5929\u7D2F\u8BA1\u52A9\u529B\u503C +0.2"}),(0,e.jsx)("p",{children:"\u5355\u65E5\u8DD1\u6B65\u6B65\u6570\u8FBE3333\u6B65\u53CA\u4EE5\u4E0A\u7D2F\u8BA1\u52A9\u529B\u503C +0.8"}),(0,e.jsx)("p",{children:"\u5355\u65E5\u52A9\u529B\u503C\u4E0A\u9650 1"})]})}),(0,e.jsx)(B,{visible:p,title:"\u62BD\u5956\u89C4\u5219",height:"11.4rem",onVisibleChange:g,children:(0,e.jsxs)("div",{style:{fontSize:"0.32rem",textAlign:"left"},children:[(0,e.jsx)("p",{children:"\u51ED\u501F\u52A9\u529B\u503C\u53EF\u83B7\u5F97\u76F8\u5E94\u5956\u6C60\u62BD\u5956\u673A\u4F1A\u7D2F\u8BA1\u52A9\u529B\u6307\u6570\u8FBE\u5230 10\uFF0C\u5373\u53EF\u53C2\u4E0E\u4EF7\u503C 99 \u5143\u201C\u4E09\u8862\u5473\u9C9C\u8FA3\u8FD0\u52A8\u5305\u201D\u4E00\u6B21\u62BD\u5956\u6D3B\u52A8\uFF1B"}),(0,e.jsx)("p",{children:"\u7D2F\u8BA1\u52A9\u529B\u503C\u6307\u6570\u8FBE\u5230 20 \uFF0C\u5373\u53EF\u53C2\u4E0E\u4EF7\u503C 99 \u5143\u3001 388 \u5143\u201C\u4E09\u8862\u5473\u9C9C\u8FA3\u8FD0\u52A8\u5305\u201D\u4E24\u6B21\u62BD\u5956\u6D3B\u52A8\uFF1B"}),(0,e.jsx)("p",{children:"\u7D2F\u8BA1\u52A9\u529B\u503C\u6307\u6570\u8FBE\u5230 25\uFF0C\u5373\u53EF\u4EF7\u503C 99 \u5143\u3001388 \u5143\u3001588 \u5143\u201C\u4E09\u8862\u5473\u9C9C\u8FA3\u8FD0\u52A8\u5305\u201D\u4E09\u6B21\u62BD\u5956\u6D3B\u52A8\uFF1B"}),(0,e.jsx)("p",{children:"\u7D2F\u8BA1\u52A9\u529B\u503C\u6307\u6570\u8FBE\u5230 30\uFF0C\u5373\u53EF\u4EF7\u503C 99 \u5143\u3001388 \u5143\u3001588 \u5143\u3001888 \u5143\u201C\u4E09\u8862\u5473\u9C9C\u8FA3\u8FD0\u52A8\u5305\u201D\u56DB\u6B21\u62BD\u5956\u6D3B\u52A8\u3002"}),(0,e.jsx)("p",{children:"10\u670810\u65E5 20:00-24:00 \u5F00\u5956"})]})}),A?"":(0,e.jsx)(z,{visible:E,onVisibleChange:function(){return m(!1)}})]})}}}]);
