(self.webpackChunk=self.webpackChunk||[]).push([[37],{56606:function(u){function h(n){if(n==null)throw new TypeError("Cannot destructure undefined")}u.exports=h,u.exports.__esModule=!0,u.exports.default=u.exports},68200:function(u,h,n){"use strict";n.r(h),n.d(h,{default:function(){return R}});var S=n(93450),j=n.n(S),k=n(56606),E=n.n(k),F=n(66933),A=n.n(F),v=n(69533),l=n(67294),I={normal:"normal___dlwgc"},e=n(85893),B="https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/hvyNRr5Nf3oAAAAAAAAAAAAAFl94AQBr",C=function(t){return(0,e.jsx)("div",{style:{position:"relative",cursor:"pointer",width:"1.6rem",height:"0.9rem",display:"flex",alignItems:"end"},onClick:t.onClick,children:(0,e.jsx)("img",{style:{width:"1.6rem"},src:t.disabled?B:t.url})})},T=function(t){return(0,e.jsx)("div",{style:{backgroundColor:"#ffecbb",borderRadius:"1rem",width:"1rem",height:"1rem",display:"inline-flex",alignItems:"center",justifyContent:"center",boxShadow:"0 25px 50px -12px rgb(0 0 0 / 0.25)",margin:"0.1rem"},children:(0,e.jsx)("img",{src:t.url,style:{width:t.size||"0.8rem",height:t.size||"0.8rem",marginBottom:"-0.1rem"}})})},x=function(t){return(0,e.jsxs)("div",{style:{boxShadow:"0 25px 50px -12px rgb(0 0 0 / 0.25)",backgroundColor:"#FFF",display:"flex",justifyContent:"space-between",padding:"0.24rem",alignItems:"center",borderRadius:"0.24rem",marginBottom:"0.18rem"},children:[(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center",flex:1},children:[(0,e.jsx)(T,{url:t.icon,size:t.size}),(0,e.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",marginRight:"0.12rem"},children:[(0,e.jsx)("div",{style:{color:"#8c492a",fontSize:"0.3rem",fontWeight:"bold",marginBottom:"0.12rem"},children:t.title}),(0,e.jsx)("div",{style:{color:"#c7683c",fontSize:"0.2rem"},children:t.subTitle})]})]}),t.button]})},z={url:"https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/g8vdQ4T69XgAAAAAAAAAAAAAFl94AQBr",btnText:"\u6211\u77E5\u9053\u4E86"},D={url:"https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/G-y0SotXmNYAAAAAAAAAAAAAFl94AQBr",btnText:"\u6211\u77E5\u9053\u4E86"},Q=function(t){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:"100%",position:"fixed",width:"100%",backgroundColor:"rgba(0,0,0,0.85)",top:0,left:0,display:"flex",alignItems:"flex-end"},onClick:function(){t.onClose()}}),(0,e.jsxs)("div",{style:{position:"fixed",zIndex:999,top:"20%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",animation:"bounceIn 0.5s cubic-bezier(.23,1,.32,1) ",gap:12,width:"100%"},children:[(0,e.jsx)("img",{src:t.url,style:{width:"7rem"}}),(0,e.jsx)("img",{onClick:function(){t.onClose()},style:{width:"3rem"},src:"https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/WT_gSo4oRdcAAAAAAAAAAAAAFl94AQBr"})]})]})},N=function(t){var d=(0,v.useNavigate)(),g=(0,l.useState)(),b=A()(g,2),i=b[0],y=b[1],f=(0,l.useState)(0),m=A()(f,2),w=m[0],p=m[1],o=localStorage.getItem("user-phone-number"),r=function(){fetch("https://proapi.azurewebsites.net/sport/active?phone=".concat(o)).then(function(a){return a.json()}).then(function(a){y(a.data),p(a.data.total/60)})};return(0,l.useEffect)(function(){!o||r()},[]),(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{style:{height:"100%",position:"fixed",width:"100%",backgroundColor:"rgba(0,0,0,0.85)",top:0,left:0,display:"flex",alignItems:"flex-end",transform:t.visible?"translateY(0%)":"translateY(100%)"},onClick:function(){t.onVisibleChange(!1)}}),(0,e.jsxs)("div",{onClick:function(a){a.stopPropagation(),a.preventDefault()},style:{boxSizing:"border-box",position:"fixed",bottom:"0.01rem",background:"#fff",backgroundImage:"url('https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/aj3qw-aw3v7.webp')",backgroundSize:"100% 100%",height:"12.2rem",marginBottom:"-1rem",transform:t.visible?"translateY(0%)":"translateY(100%)",transition:"all 0.3s ease-in-out",width:"100%",borderTopLeftRadius:"0.56rem",borderTopRightRadius:"0.56rem",padding:"0.24rem",paddingTop:"1.2rem"},children:[(0,e.jsxs)("div",{style:{backgroundColor:"#f8b551",height:"2.5rem",borderRadius:"0.24rem",position:"relative",padding:"0.42rem",color:"#ffe8d5",fontSize:"0.32rem",textAlign:"left",fontWeight:"bold",marginBottom:"0.24rem",boxShadow:"0 25px 50px -12px rgb(0 0 0 / 0.25)",border:"1px solid #ddd"},children:[(0,e.jsx)("img",{src:"https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/\u4E2A\u4EBA\u56FE\u7247.webp",alt:"\u6BCF\u65E5\u7B7E\u5230",style:{height:"1.4rem",position:"absolute",left:"calc(50% - 0.7rem)",top:"-0.7rem"}}),"\u6211\u7684\u52A9\u529B\u503C ",i?.total||"",(0,e.jsxs)("div",{style:{height:"0.2rem",borderRadius:"0.2rem",marginTop:"0.4rem",display:"flex",alignItems:"center",position:"relative",background:"#A6100B",boxShadow:"0 10px 9px 0 rgba(0,0,0,0.24), inset 0 4px 3px 0 #FFFFFF, inset 0 0 7px 0 rgba(255,255,255,0.20)",backgroundImage:'url("https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/x86LSJL6TmoAAAAAAAAAAAAAFl94AQBr")'},children:[(0,e.jsx)("div",{style:{backgroundColor:"#F6A153",backgroundImage:'url("https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/PTXETJ89W90AAAAAAAAAAAAAFl94AQBr")',width:"".concat(w,"%"),height:"120%",transition:"all 1.2s ease-in-out",borderRadius:"0.2rem",position:"relative",overflow:"hidden"},children:(0,e.jsx)("div",{style:{height:"100%",position:"absolute",inset:0,background:"#fff",opacity:0,animation:"ant-progress-active 2.4s cubic-bezier(.23,1,.32,1) infinite"}})}),(0,e.jsxs)("div",{style:{left:"calc(15% - 0.4rem)",position:"absolute",fontSize:"0.28rem",top:"-0.15rem",display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,e.jsx)("img",{style:{width:"0.7rem",height:"0.7rem"},src:"https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/selected.svg"}),"10"]}),(0,e.jsxs)("div",{style:{left:"calc(40% - 0.4rem)",position:"absolute",fontSize:"0.28rem",top:"-0.15rem",display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,e.jsx)("img",{style:{width:"0.7rem",height:"0.7rem"},src:"https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/selected.svg"}),"20"]}),(0,e.jsxs)("div",{style:{left:"calc(65% - 0.4rem)",position:"absolute",fontSize:"0.28rem",top:"-0.15rem",display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,e.jsx)("img",{style:{width:"0.7rem",height:"0.7rem"},src:"https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/selected.svg"}),"30"]}),(0,e.jsxs)("div",{style:{left:"calc(90% - 0.4rem)",position:"absolute",fontSize:"0.28rem",top:"-0.15rem",display:"flex",alignItems:"center",flexDirection:"column"},children:[(0,e.jsx)("img",{style:{width:"0.7rem",height:"0.7rem"},src:"https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/selected.svg"}),"40"]})]})]}),(0,e.jsx)(x,{size:"0.6rem",icon:"https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/\u7B7E\u5230 (1).png",title:"\u6BCF\u65E5\u6210\u529F\u6253\u5361",subTitle:"+0.2\u52A9\u529B\u503C",button:(0,e.jsx)("img",{src:i!=null&&i.isSign?B:"https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/\u53BB\u7B7E\u5230.png",width:80,alt:"\u53BB\u7B7E\u5230",onClick:function(){i!=null&&i.isSign||fetch("https://proapi.azurewebsites.net/sport/sign",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:o})}).then(function(){r(),t.openAction(z)})}})}),(0,e.jsx)(x,{icon:"https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/\u5206\u4EAB (1).png",title:"\u6210\u529F\u5206\u4EAB\u94FE\u63A5\u5230\u597D\u53CB",subTitle:"+0.3 \u52A9\u529B\u503C",button:(0,e.jsx)(C,{text:"\u53BB\u5206\u4EAB",disabled:i?.isShare,url:"https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/GkmfQZMwtVgAAAAAAAAAAAAAFl94AQBr",onClick:function(){i!=null&&i.isShare||fetch("https://proapi.azurewebsites.net/sport/share",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:o})}).then(function(){r(),t.openAction(D)})}})}),(0,e.jsx)(x,{icon:"https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/\u5206\u4EAB (1).png",title:"\u8DD1\u6B65\u6B65\u6570\u8FBE3333\u6B65\u53CA\u4EE5\u4E0A",subTitle:"+0.5 \u52A9\u529B\u503C",button:(0,e.jsx)(C,{text:"\u53BB\u8FD0\u52A8",url:"https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/N7JcTKFje3AAAAAAAAAAAAAAFl94AQBr",onClick:function(){}})}),(i?.total||0)>20?(0,e.jsx)("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)("img",{onClick:function(){return d("/info")},src:o?"https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/\u7EC4 20 (1).png":"https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/%E7%BB%84%201.webp",style:{width:"3.2rem"},alt:"\u53C2\u4E0E\u62BD\u5956"})}):""]})]})};function R(c){E()(c);var t=(0,v.useNavigate)(),d=(0,l.useState)(!1),g=A()(d,2),b=g[0],i=g[1],y=(0,l.useState)(void 0),f=A()(y,2),m=f[0],w=f[1];(0,l.useEffect)(function(){document.title="\u7EBF\u4E0A\u9A6C\u62C9\u677E"},[]);var p=localStorage.getItem("user-phone-number"),o=function(s){i(!1),w(s)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("img",{src:"https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/g8vdQ4T69XgAAAAAAAAAAAAAFl94AQBr",style:{height:1,width:1,position:"fixed",top:-999}}),(0,e.jsx)("img",{src:"https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/G-y0SotXmNYAAAAAAAAAAAAAFl94AQBr",style:{height:1,width:1,position:"fixed",top:-999}}),(0,e.jsxs)("div",{className:I.normal,children:[(0,e.jsxs)("div",{style:{position:"absolute",top:"0.8rem",right:"0.5rem",display:"flex ",flexDirection:"column",justifyItems:"center",alignItems:"center",color:"#fff",fontSize:"0.28rem"},children:[(0,e.jsx)("img",{width:"100%",style:{position:"fixed",top:"-0.4rem",height:"1px"},src:"https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/KgXiQqPLxOQAAAAAAAAAAAAAFl94AQBr"}),(0,e.jsx)("img",{src:"https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/\u4E2A\u4EBA\u56FE\u7247.webp",alt:"\u6BCF\u65E5\u7B7E\u5230",style:{height:"1rem"},onClick:function(){i(!0)}}),"\u6BCF\u65E5\u7B7E\u5230"]}),(0,e.jsx)("img",{src:"https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/%E5%9B%BE%E5%B1%82%202796.webp",alt:"logo",style:{height:"1rem",position:"absolute",top:"0.8rem",left:"0.5rem"}}),(0,e.jsx)("div",{style:{paddingTop:"3rem",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,e.jsx)("img",{src:"https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/logo.webp",style:{width:"6rem",marginRight:"-1.2rem"}})}),(0,e.jsxs)("div",{style:{padding:"0.5rem",paddingTop:"1rem",display:"flex",alignItems:"center",justifyContent:p?"center":"space-between"},children:[p?null:(0,e.jsx)("img",{src:"https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/%E7%BB%84%201.webp",alt:"\u62A5\u540D",style:{width:"3.2rem",top:"8rem",marginBottom:"-0.2rem",cursor:"pointer"},onClick:function(){return t("/info")}}),(0,e.jsx)("img",{src:"https://chenshuai2144baseimage.blob.core.windows.net/newcontainer/%E7%BB%84%2020.webp",alt:"get",style:{width:"3rem",top:"8rem",cursor:"pointer"}})]})]}),(0,e.jsx)(N,{visible:b,openAction:o,onVisibleChange:i}),m&&(0,e.jsx)(Q,j()(j()({},m),{},{onClose:function(){o(void 0),i(!0)}}))]})}}}]);