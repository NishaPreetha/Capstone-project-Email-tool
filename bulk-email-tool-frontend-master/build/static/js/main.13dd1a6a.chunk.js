(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{127:function(e,t,r){},147:function(e,t,r){},153:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(23),c=r.n(n),s=r(6),i=r(38),o=r(82),u=r(83),l=r(84),d=r.n(l),j=r(3),b="CLEAR_ERRORS",p="LOGOUT",O="REGISTER_REQUEST",m="REGISTER_SUCCESS",f="REGISTER_ERROR",x="LOGIN_REQUEST",h="LOGIN_SUCCESS",v="LOGIN_ERROR",g="FETCH_USER_REQUEST",_="FETCH_USER_SUCCESS",y="FETCH_USER_ERROR",E="UPLOAD_IMAGE_REQUEST",S="UPLOAD_IMAGE_SUCCESS",R="UPLOAD_IMAGE_ERROR",w="FETCH_EMAILS_REQUEST",k="FETCH_EMAILS_SUCCESS",L="FETCH_EMAILS_ERROR",C="SEND_EMAIL_REQUEST",A="SEND_EMAIL_SUCCESS",I="SEND_EMAIL_ERROR",N="SAVE_DRAFT_REQUEST",T="SAVE_DRAFT_SUCCES",D="SAVE_DRAFT_ERROR",M="UPDATE_DRAFT_REQUEST",U="UPDATE_DRAFT_SUCCESS",F="UPDATE_DRAFT_ERROR",q="EMAIL_TRASH_REQUEST",P="EMAIL_TRASH_SUCCESS",G="EMAIL_TRASH_ERROR",H="EMAIL_UNTRASH_REQUEST",z="EMAIL_UNTRASH_SUCCESS",Q="EMAIL_UNTRASH_ERROR",V="TOGGLE_EMAIL_PROP_REQUEST",Z="TOGGLE_EMAIL_PROP_SUCCESS",B="TOGGLE_EMAIL_PROP_ERROR",$="DELETE_EMAIL_REQUEST",W="DELETE_EMAIL_SUCCESS",J="DELETE_EMAIL_ERROR",Y={isLoading:!1,isLoggedIn:!1,token:window.localStorage.getItem("token"),user:{},error:""},K=r(8),X={isLoading:!1,mailbox:{inbox:[],outbox:[],drafts:[],trash:[]},error:""},ee=Object(i.combineReducers)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(j.a)(Object(j.a)({},e),{},{error:""});case p:return window.localStorage.setItem("token",""),console.log("\ud83c\udf10 Token removed from Local Storage"),Y;case O:case x:case g:case E:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0});case m:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,user:{email:t.payload},error:""});case h:return window.localStorage.setItem("token",t.payload),console.log("\ud83c\udf10 Token saved to Local Storage",t.payload),Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,isLoggedIn:!0,token:t.payload,error:""});case _:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,isLoggedIn:!0,user:t.payload,error:""});case S:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,user:Object(j.a)(Object(j.a)({},e.user),{},{profilePicture:t.payload}),error:""});case f:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,user:{},error:t.error});case v:case y:return window.localStorage.setItem("token",""),console.log("\ud83c\udf10 Token removed from Local Storage"),Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,isLoggedIn:!1,token:"",user:{},error:t.error});case R:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,error:t.error});default:return e}},emailReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(j.a)(Object(j.a)({},e),{},{error:""});case p:return X;case w:case C:case N:case M:case q:case H:case V:case $:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0});case k:case P:case z:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,mailbox:t.payload,error:""});case A:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,mailbox:Object(j.a)(Object(j.a)({},e.mailbox),{},{outbox:[].concat(Object(K.a)(e.mailbox.outbox),[t.payload.outbox]),inbox:[].concat(Object(K.a)(e.mailbox.inbox),[t.payload.inbox])}),error:""});case T:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,mailbox:Object(j.a)(Object(j.a)({},e.mailbox),{},{drafts:[].concat(Object(K.a)(e.mailbox.drafts),[t.payload])}),error:""});case U:for(var r=Object(K.a)(e.mailbox.drafts),a=0;a<r.length;a++)if(r[a]._id===t.payload._id){r[a]=t.payload;break}return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,mailbox:Object(j.a)(Object(j.a)({},e.mailbox),{},{drafts:r}),error:""});case Z:var n=Object(K.a)(e.mailbox.inbox),c=Object(K.a)(e.mailbox.outbox),s=!1;if(!s)for(var i=0;i<n.length;i++)if(n[i]._id===t.payload._id){n[i]=t.payload,s=!0;break}if(!s)for(var o=0;o<c.length;o++)if(c[o]._id===t.payload._id){c[o]=t.payload,s=!0;break}return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,mailbox:Object(j.a)(Object(j.a)({},e.mailbox),{},{inbox:n,outbox:c}),error:""});case W:for(var u=Object(K.a)(e.mailbox.trash),l=Object(K.a)(e.mailbox.drafts),d=!1,O=0;O<u.length;O++)if(u[O]._id===t.payload){u.splice(O,1),l=!0;break}if(!d)for(var m=0;m<l.length;m++)if(l[m]._id===t.payload){l.splice(m,1);break}return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,mailbox:Object(j.a)(Object(j.a)({},e.mailbox),{},{trash:u,drafts:l}),error:""});case L:case I:case D:case F:case G:case Q:case B:case J:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,error:t.error});default:return e}}}),te=Object(i.createStore)(ee,Object(o.composeWithDevTools)(Object(i.applyMiddleware)(u.a,d.a))),re=(r(127),r(33)),ae=r(19),ne=r(4),ce=r.n(ne),se=r(12),ie=r(24),oe=r.n(ie),ue="https://gmail-backend.herokuapp.com/api/v1",le=function(e){return{headers:{"Content-Type":"application/json",Authorization:"Bearer "+e}}},de=function(e){return oe.a.post("".concat(ue,"/account/register"),e)},je=function(e){return oe.a.post("".concat(ue,"/account/login"),e)},be=function(e,t){return oe.a.put("".concat(ue,"/account/image"),t,le(e))},pe=function(e,t){return oe.a.post("".concat(ue,"/email/send"),t,le(e))},Oe=function(e,t){return oe.a.post("".concat(ue,"/email/draft"),t,le(e))},me=function(e,t,r){return oe.a.put("".concat(ue,"/email/draft/").concat(t),r,le(e))},fe=function(e,t){return oe.a.put("".concat(ue,"/email/").concat(t,"/trash"),null,le(e))},xe=function(e,t){return oe.a.put("".concat(ue,"/email/").concat(t,"/untrash"),null,le(e))},he=function(e,t){return oe.a.put("".concat(ue,"/email/").concat(t,"/read"),null,le(e))},ve=function(e,t){return oe.a.put("".concat(ue,"/email/").concat(t,"/unread"),null,le(e))},ge=function(e,t){return oe.a.put("".concat(ue,"/email/").concat(t,"/favorite"),null,le(e))},_e=function(e,t){return oe.a.put("".concat(ue,"/email/").concat(t,"/unfavorite"),null,le(e))},ye=function(e,t){return oe.a.delete("".concat(ue,"/email/").concat(t),le(e))},Ee=(r(147),r(11)),Se=r(60),Re=r.n(Se),we=function(){return{type:b}},ke=r(45),Le=r(57),Ce=r.n(Le),Ae=r(170),Ie=r(172),Ne=r(1);function Te(e){var t=e.isLoading,r=e.error,a=e.user,n=Object(s.b)(),c=Object(ke.a)({defaultValues:{email:a.email}}),i=c.register,o=c.handleSubmit,u=c.errors,l=c.formState;r&&(alert(r),setTimeout((function(){n(we())}),0));var d,j,b,p;return t?Object(Ne.jsx)("div",{children:Object(Ne.jsx)(Ae.a,{color:"secondary"})}):Object(Ne.jsxs)("form",{onSubmit:o((function(e){var t;n((t=e,function(){var e=Object(se.a)(ce.a.mark((function e(r){var a;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:x}),e.prev=1,e.next=4,je(t);case 4:a=e.sent,r({type:h,payload:a.data.token}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r({type:v,error:e.t0.response.data.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()))})),className:Ce.a.form,children:[Object(Ne.jsx)("input",{name:"email",type:"email",placeholder:"Email",ref:i({required:!0,pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}),Object(Ne.jsx)("p",{children:"required"===(null===(d=u.email)||void 0===d?void 0:d.type)&&"Email is required"}),Object(Ne.jsx)("p",{children:"pattern"===(null===(j=u.email)||void 0===j?void 0:j.type)&&"Invalid email"}),Object(Ne.jsx)("input",{name:"password",type:"password",placeholder:"Password",ref:i({required:!0,minLength:7})}),Object(Ne.jsx)("p",{children:"required"===(null===(b=u.password)||void 0===b?void 0:b.type)&&"Password is required"}),Object(Ne.jsx)("p",{children:"minLength"===(null===(p=u.password)||void 0===p?void 0:p.type)&&"Must be at least 7 characters"}),Object(Ne.jsx)(Ie.a,{type:"submit",disabled:l.isSubmitting,children:"Login"})]})}function De(e){var t=e.isLoading,r=e.error,n=Object(s.b)(),c=Object(ke.a)(),i=c.register,o=c.handleSubmit,u=c.errors,l=c.watch,d=c.formState,j=Object(a.useRef)({});j.current=l("password",""),r&&(alert(r),setTimeout((function(){n(we())}),0));var b,p,x,h,v,g,_,y,E,S,R;return t?Object(Ne.jsx)("div",{children:Object(Ne.jsx)(Ae.a,{color:"secondary"})}):Object(Ne.jsxs)("form",{onSubmit:o((function(e){var t;n((t=e,function(){var e=Object(se.a)(ce.a.mark((function e(r){var a;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:O}),e.prev=1,e.next=4,de(t);case 4:a=e.sent,r({type:m,payload:a.data.email}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r({type:f,error:e.t0.response.data.message});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()))})),className:Ce.a.form,children:[Object(Ne.jsx)("input",{name:"firstName",type:"text",placeholder:"First name",ref:i({required:!0,pattern:/^[a-z ,.'-]+$/i})}),Object(Ne.jsx)("p",{children:"required"===(null===(b=u.email)||void 0===b?void 0:b.type)&&"First name is required"}),Object(Ne.jsx)("p",{children:"pattern"===(null===(p=u.firstName)||void 0===p?void 0:p.type)&&"Invalid name"}),Object(Ne.jsx)("input",{name:"middleName",type:"text",placeholder:"Middle name (optional)",ref:i({pattern:/^[a-z ,.'-]+$/i})}),Object(Ne.jsx)("p",{children:"pattern"===(null===(x=u.middleName)||void 0===x?void 0:x.type)&&"Invalid name"}),Object(Ne.jsx)("input",{name:"lastName",type:"text",placeholder:"Last name",ref:i({required:!0,pattern:/^[a-z ,.'-]+$/i})}),Object(Ne.jsx)("p",{children:"required"===(null===(h=u.email)||void 0===h?void 0:h.type)&&"Last name is required"}),Object(Ne.jsx)("p",{children:"pattern"===(null===(v=u.lastName)||void 0===v?void 0:v.type)&&"Invalid name"}),Object(Ne.jsx)("input",{name:"email",type:"email",placeholder:"Email",ref:i({required:!0,pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})}),Object(Ne.jsx)("p",{children:"required"===(null===(g=u.email)||void 0===g?void 0:g.type)&&"Email is required"}),Object(Ne.jsx)("p",{children:"pattern"===(null===(_=u.email)||void 0===_?void 0:_.type)&&"Invalid email"}),Object(Ne.jsx)("input",{name:"password",type:"password",placeholder:"Password",ref:i({required:!0,minLength:7})}),Object(Ne.jsx)("p",{children:"required"===(null===(y=u.password)||void 0===y?void 0:y.type)&&"Password is required"}),Object(Ne.jsx)("p",{children:"minLength"===(null===(E=u.password)||void 0===E?void 0:E.type)&&"Must be at least 7 characters"}),Object(Ne.jsx)("input",{name:"passwordConfirm",type:"password",placeholder:"Confirm Password",ref:i({required:!0,validate:function(e){return e===j.current}})}),Object(Ne.jsx)("p",{children:"required"===(null===(S=u.passwordConfirm)||void 0===S?void 0:S.type)&&"Password confirmation is required"}),Object(Ne.jsx)("p",{children:"validate"===(null===(R=u.passwordConfirm)||void 0===R?void 0:R.type)&&"Passwords do not match"}),Object(Ne.jsx)(Ie.a,{type:"submit",disabled:d.isSubmitting,children:"Register"})]})}var Me=r.p+"static/media/gmail.a9ea37fa.svg";function Ue(){var e=Object(s.c)((function(e){return e.userReducer})),t=e.user,r=e.isLoading,n=e.error,c=Object(a.useState)(!1),i=Object(Ee.a)(c,2),o=i[0],u=i[1],l=function(){return u(!o)};return Object(a.useEffect)((function(){t.email&&(l(),alert("Account successfully created!"))}),[t.email]),Object(Ne.jsxs)("div",{className:Re.a.page,children:[Object(Ne.jsx)("img",{src:Me,alt:"Gmail"}),o?Object(Ne.jsxs)(a.Fragment,{children:[Object(Ne.jsx)(De,{isLoading:r,error:n}),Object(Ne.jsx)("button",{className:Re.a.link,onClick:l,children:"Login an existing account"})]}):Object(Ne.jsxs)(a.Fragment,{children:[Object(Ne.jsx)(Te,{isLoading:r,error:n,user:t}),Object(Ne.jsx)("button",{className:Re.a.link,onClick:l,children:"Create a new account"})]}),Object(Ne.jsx)("p",{children:"Disclaimer: this clone is not associated with Google! All accounts & emails are fictive, but remain in a database."})]})}var Fe=r(25),qe=function(){return function(){var e=Object(se.a)(ce.a.mark((function e(t,r){var a;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:w}),e.prev=1,e.next=4,n=r().userReducer.token,oe.a.get("".concat(ue,"/email"),le(n));case 4:a=e.sent,t({type:k,payload:a.data.mailbox}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:L,error:e.t0});case 11:case"end":return e.stop()}var n}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}()},Pe=function(e){return function(){var t=Object(se.a)(ce.a.mark((function t(r,a){var n;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:C}),t.prev=1,t.next=4,pe(a().userReducer.token,e);case 4:n=t.sent,r({type:A,payload:{outbox:n.data.sent,inbox:n.data.received}}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r({type:I,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,r){return t.apply(this,arguments)}}()},Ge=function(e,t){return function(){var r=Object(se.a)(ce.a.mark((function r(a,n){var c;return ce.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a({type:M}),r.prev=1,r.next=4,me(n().userReducer.token,e,t);case 4:c=r.sent,a({type:U,payload:c.data.draft}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),a({type:F,error:r.t0});case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e,t){return r.apply(this,arguments)}}()},He=r(66),ze=r.n(He),Qe=r(47),Ve=r.n(Qe),Ze=r(67),Be=r.n(Ze),$e=r(173),We=r(177);function Je(e){var t=e.user,r=e.toggleShowEditImage,a=e.toggleShowProfile,n=Object(s.b)(),c=Object(ae.g)();return Object(Ne.jsxs)("div",{className:Be.a.container,children:[Object(Ne.jsx)($e.a,{badgeContent:"edit",color:"secondary",overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},style:{cursor:"pointer"},onClick:function(){r(),a()},children:Object(Ne.jsx)(We.a,{className:Be.a.avatar,src:t.profilePicture})}),Object(Ne.jsxs)("p",{children:[t.name.first," ",t.name.last,Object(Ne.jsx)("br",{}),t.email]}),Object(Ne.jsx)(Ie.a,{onClick:function(){return c.push("/GitHub")},children:"Visit my GitHub page"}),Object(Ne.jsx)(Ie.a,{onClick:function(){return n({type:p})},children:"Logout"})]})}var Ye=r(61),Ke=r.n(Ye),Xe=r(89),et=r.n(Xe);function tt(e){var t=e.toggleShowEditImage,r=Object(s.b)(),n=Object(a.useState)(""),c=Object(Ee.a)(n,2),i=c[0],o=c[1];return Object(Ne.jsx)("div",{className:Ke.a.modal,children:Object(Ne.jsxs)("form",{className:Ke.a.form,onSubmit:function(e){e.preventDefault(),r(function(e){return function(){var t=Object(se.a)(ce.a.mark((function t(r,a){var n;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:E}),t.prev=1,t.next=4,be(a().userReducer.token,e);case 4:n=t.sent,r({type:S,payload:n.data.profilePicture}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r({type:R,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,r){return t.apply(this,arguments)}}()}({image:i})),t()},children:[Object(Ne.jsx)("span",{onClick:t,children:"\xd7"}),Object(Ne.jsx)(We.a,{className:Ke.a.avatar,src:i.base64}),Object(Ne.jsx)("p",{children:"Select a profile picture (max 10mb)"}),Object(Ne.jsxs)("label",{children:[Object(Ne.jsx)(et.a,{multiple:!1,onDone:function(e){return o(e)}}),"Select image"]}),Object(Ne.jsx)(Ie.a,{type:"submit",disabled:!i,children:"Upload"})]})})}var rt=r.p+"static/media/gmail-logo.73f95a4e.png",at=r(174),nt=r(90),ct=r.n(nt),st=r(91),it=r.n(st),ot=r(92),ut=r.n(ot),lt=r(93),dt=r.n(lt);function jt(e){var t=e.toggleShowSidebar,r=Object(s.c)((function(e){return e.userReducer})).user,n=Object(a.useState)(!1),c=Object(Ee.a)(n,2),i=c[0],o=c[1],u=Object(a.useState)(!1),l=Object(Ee.a)(u,2),d=l[0],j=l[1],b=function(){return o(!i)},p=function(){return j(!d)};return Object(Ne.jsxs)("header",{className:Ve.a.container,children:[Object(Ne.jsxs)("div",{className:Ve.a.side,children:[Object(Ne.jsx)(at.a,{onClick:t,children:Object(Ne.jsx)(ct.a,{})}),Object(Ne.jsx)("img",{src:rt,alt:"gmail logo"})]}),Object(Ne.jsxs)("div",{className:Ve.a.middle,children:[Object(Ne.jsx)(at.a,{children:Object(Ne.jsx)(it.a,{})}),Object(Ne.jsx)("input",{type:"text",placeholder:"Search mail"})]}),Object(Ne.jsxs)("div",{className:Ve.a.side+" "+Ve.a.relative,children:[Object(Ne.jsx)(at.a,{children:Object(Ne.jsx)(ut.a,{})}),Object(Ne.jsx)(at.a,{children:Object(Ne.jsx)(dt.a,{})}),Object(Ne.jsx)(at.a,{onClick:b,children:Object(Ne.jsx)(We.a,{src:r.profilePicture})}),i&&Object(Ne.jsx)(Je,{user:r,toggleShowProfile:b,toggleShowEditImage:p}),d&&Object(Ne.jsx)(tt,{toggleShowEditImage:p})]})]})}var bt=r(53),pt=r.n(bt),Ot=r(70),mt=r.n(Ot);function ft(e){var t=e.Icon,r=e.title,a=e.number,n=e.selected,c=e.onClick,s=e.className;return Object(Ne.jsxs)("div",{className:"".concat(mt.a.item," ").concat(n&&mt.a.active," ").concat(s),onClick:c,children:[Object(Ne.jsx)(t,{fontSize:"large"}),Object(Ne.jsx)("h3",{children:r}),Object(Ne.jsx)("p",{children:a})]})}var xt=r(94),ht=r.n(xt),vt=r(95),gt=r.n(vt),_t=r(96),yt=r.n(_t),Et=r(98),St=r.n(Et),Rt=r(97),wt=r.n(Rt),kt=r(100),Lt=r.n(kt),Ct=r(99),At=r.n(Ct);function It(e){var t=e.toggleIsCompose,r=e.inboxLength,n=e.sentLength,c=e.starredLength,s=e.draftsLength,i=e.trashLength,o=Object(ae.g)(),u=Object(ae.h)(),l=Object(a.useState)(!1),d=Object(Ee.a)(l,2),j=d[0],b=d[1];return Object(Ne.jsxs)("div",{className:pt.a.container,children:[Object(Ne.jsx)(Ie.a,{className:pt.a.compose,onClick:function(){return t()},startIcon:Object(Ne.jsx)(ht.a,{fontSize:"large"}),children:"Compose"}),Object(Ne.jsx)(ft,{Icon:gt.a,title:"Inbox",number:r,onClick:function(){return o.push("/email/inbox")},selected:"/email/inbox"===u.pathname}),Object(Ne.jsx)(ft,{Icon:yt.a,title:"Starred",number:c,onClick:function(){return o.push("/email/starred")},selected:"/email/starred"===u.pathname}),Object(Ne.jsx)(ft,{Icon:wt.a,title:"Drafts",number:s,onClick:function(){return o.push("/email/drafts")},selected:"/email/drafts"===u.pathname}),Object(Ne.jsx)(ft,{Icon:St.a,title:"Sent",number:n,onClick:function(){return o.push("/email/sent")},selected:"/email/sent"===u.pathname}),Object(Ne.jsx)(ft,{Icon:At.a,title:"More",number:"",onClick:function(){return b(!j)},className:j?pt.a.showMore__on:pt.a.showMore__off}),j&&Object(Ne.jsx)(Ne.Fragment,{children:Object(Ne.jsx)(ft,{Icon:Lt.a,title:"Trash",number:i,onClick:function(){return o.push("/email/trash")},selected:"/email/trash"===u.pathname})})]})}var Nt=r(39),Tt=r.n(Nt),Dt=r(62),Mt=r.n(Dt),Ut=r(175),Ft=r(176),qt=r(102),Pt=r.n(qt),Gt=r(103),Ht=r.n(Gt),zt=r(104),Qt=r.n(zt),Vt=r(105),Zt=r.n(Vt),Bt=r(106),$t=r.n(Bt),Wt=r(107),Jt=r.n(Wt),Yt=r(109),Kt=r.n(Yt),Xt=r(108),er=r.n(Xt),tr=r(110),rr=r.n(tr),ar=r(111),nr=r.n(ar);function cr(e){return Object(Ne.jsxs)("div",{className:Mt.a.component,children:[Object(Ne.jsx)("div",{className:Mt.a.wrapper,children:e.children}),Object(Ne.jsx)("div",{className:Mt.a.wrapper,children:Object(Ne.jsx)(Ut.a,{title:"null",children:Object(Ne.jsx)(at.a,{children:Object(Ne.jsx)(Pt.a,{})})})})]})}function sr(){return Object(Ne.jsx)(Ut.a,{title:"null",children:Object(Ne.jsx)(Ft.a,{})})}function ir(){return Object(Ne.jsx)(Ut.a,{title:"null",children:Object(Ne.jsx)(Ft.a,{})})}function or(){var e=Object(ae.g)();return Object(Ne.jsx)(Ut.a,{title:"Back",children:Object(Ne.jsx)(at.a,{onClick:function(){return e.goBack()},children:Object(Ne.jsx)(Ht.a,{})})})}function ur(){var e=Object(s.b)();return Object(Ne.jsx)(Ut.a,{title:"Refresh",children:Object(Ne.jsx)(at.a,{onClick:function(){return e(qe())},children:Object(Ne.jsx)(Qt.a,{})})})}function lr(e){var t=e.id,r=Object(s.b)(),a=Object(ae.g)();return Object(Ne.jsx)(Ut.a,{title:"Mark as unread",children:Object(Ne.jsx)(at.a,{onClick:function(){r(function(e){return function(){var t=Object(se.a)(ce.a.mark((function t(r,a){var n;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:V}),t.prev=1,t.next=4,ve(a().userReducer.token,e);case 4:n=t.sent,r({type:Z,payload:n.data.email}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r({type:B,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,r){return t.apply(this,arguments)}}()}(t)),a.goBack()},children:Object(Ne.jsx)(Zt.a,{})})})}function dr(e){var t=e.id,r=e.isStarred,a=Object(s.b)();return r?Object(Ne.jsx)(Ut.a,{title:"Unfavorite",children:Object(Ne.jsx)(at.a,{onClick:function(){return a(function(e){return function(){var t=Object(se.a)(ce.a.mark((function t(r,a){var n;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:V}),t.prev=1,t.next=4,_e(a().userReducer.token,e);case 4:n=t.sent,r({type:Z,payload:n.data.email}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r({type:B,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,r){return t.apply(this,arguments)}}()}(t))},children:Object(Ne.jsx)($t.a,{})})}):Object(Ne.jsx)(Ut.a,{title:"Favorite",children:Object(Ne.jsx)(at.a,{onClick:function(){return a(function(e){return function(){var t=Object(se.a)(ce.a.mark((function t(r,a){var n;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:V}),t.prev=1,t.next=4,ge(a().userReducer.token,e);case 4:n=t.sent,r({type:Z,payload:n.data.email}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r({type:B,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,r){return t.apply(this,arguments)}}()}(t))},children:Object(Ne.jsx)(Jt.a,{})})})}function jr(e){var t=e.id,r=e.isInTrash,a=Object(s.b)(),n=Object(ae.g)();return r?Object(Ne.jsx)(Ut.a,{title:"Not trash",children:Object(Ne.jsx)(at.a,{onClick:function(){a(function(e){return function(){var t=Object(se.a)(ce.a.mark((function t(r,a){var n;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:H}),t.prev=1,t.next=4,xe(a().userReducer.token,e);case 4:n=t.sent,r({type:z,payload:n.data.mailbox}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r({type:Q,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,r){return t.apply(this,arguments)}}()}(t)),n.goBack()},children:Object(Ne.jsx)(er.a,{})})}):Object(Ne.jsx)(Ut.a,{title:"Move to trash",children:Object(Ne.jsx)(at.a,{onClick:function(){a(function(e){return function(){var t=Object(se.a)(ce.a.mark((function t(r,a){var n;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:q}),t.prev=1,t.next=4,fe(a().userReducer.token,e);case 4:n=t.sent,r({type:P,payload:n.data.mailbox}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r({type:G,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,r){return t.apply(this,arguments)}}()}(t)),n.goBack()},children:Object(Ne.jsx)(Kt.a,{})})})}function br(e){var t=e.id,r=Object(s.b)();return Object(Ne.jsx)(Ut.a,{title:"Delete",children:Object(Ne.jsx)(at.a,{onClick:function(){return r(function(e){return function(){var t=Object(se.a)(ce.a.mark((function t(r,a){var n;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:$}),t.prev=1,t.next=4,ye(a().userReducer.token,e);case 4:n=t.sent,r({type:W,payload:n.data.id}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r({type:J,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,r){return t.apply(this,arguments)}}()}(t))},children:Object(Ne.jsx)(rr.a,{})})})}function pr(){return Object(Ne.jsx)(Ut.a,{title:"null",children:Object(Ne.jsx)(at.a,{children:Object(Ne.jsx)(nr.a,{})})})}var Or=r(54),mr=r.n(Or);function fr(e){var t=e.id,r=e.title,a=e.subject,n=e.message,c=e.date,s=e.isRead,i=e.isStarred,o=e.isTrash,u=e.isDraft,l=e.toggleIsCompose,d=Object(ae.g)(),j=Object(ae.i)().category;return Object(Ne.jsxs)("div",{className:"".concat(mr.a.item," ").concat(s||o||u?mr.a.read:mr.a.unread),children:[Object(Ne.jsx)(sr,{}),void 0!==i&&Object(Ne.jsx)(dr,{id:t,isStarred:i}),o||u?Object(Ne.jsx)(br,{id:t}):"",Object(Ne.jsxs)("div",{className:mr.a.message,onClick:function(){return u?l(t):d.push("/email/".concat(j,"/view/").concat(t))},children:[Object(Ne.jsx)("h4",{children:r}),"\xa0\xa0",Object(Ne.jsxs)("p",{children:[Object(Ne.jsx)("span",{children:a}),"\xa0\xa0",n]}),"\xa0\xa0",Object(Ne.jsx)("span",{children:function(e){var t=new Date(e).getDate();switch(new Date(e).getMonth()){case 0:return"Jan ".concat(t);case 1:return"Feb ".concat(t);case 2:return"Mar ".concat(t);case 3:return"Apr ".concat(t);case 4:return"May ".concat(t);case 5:return"Jun ".concat(t);case 6:return"Jul ".concat(t);case 7:return"Aug ".concat(t);case 8:return"Sep ".concat(t);case 9:return"Oct ".concat(t);case 10:return"Nov ".concat(t);case 11:return"Dec ".concat(t);default:return"Loading..."}}(c)})]})]})}function xr(e){var t=e.inbox,r=e.sent,n=e.drafts,c=e.starred,i=e.trash,o=e.toggleIsCompose,u=Object(ae.i)().category,l=Object(s.c)((function(e){return e.emailReducer})).isLoading,d=Object(s.c)((function(e){return e.userReducer.user.email}));if(l)return Object(Ne.jsx)("div",{className:Tt.a.center,children:Object(Ne.jsx)(Ae.a,{color:"secondary"})});switch(u){case"inbox":return t.length?Object(Ne.jsxs)(a.Fragment,{children:[Object(Ne.jsxs)(cr,{children:[Object(Ne.jsx)(ir,{}),Object(Ne.jsx)(ur,{}),Object(Ne.jsx)(pr,{})]}),t.map((function(e){return Object(Ne.jsx)(fr,{id:e._id,title:e.from,subject:e.subject,message:e.message,date:e.createdAt,isRead:e.read,isStarred:e.favorite},e._id)}))]}):Object(Ne.jsx)("div",{className:Tt.a.center,children:"Inbox is empty..."});case"sent":return r.length?Object(Ne.jsxs)(a.Fragment,{children:[Object(Ne.jsxs)(cr,{children:[Object(Ne.jsx)(ir,{}),Object(Ne.jsx)(ur,{}),Object(Ne.jsx)(pr,{})]}),r.map((function(e){return Object(Ne.jsx)(fr,{id:e._id,title:"To: ".concat(e.to),subject:e.subject,message:e.message,date:e.createdAt,isRead:e.read,isStarred:e.favorite},e._id)}))]}):Object(Ne.jsx)("div",{className:Tt.a.center,children:"Outbox is empty..."});case"starred":return c.length?Object(Ne.jsxs)(a.Fragment,{children:[Object(Ne.jsxs)(cr,{children:[Object(Ne.jsx)(ir,{}),Object(Ne.jsx)(ur,{}),Object(Ne.jsx)(pr,{})]}),c.map((function(e){return Object(Ne.jsx)(fr,{id:e._id,title:e.from===d?"me":e.from,subject:e.subject,message:e.message,date:e.createdAt,isRead:e.read,isStarred:!0},e._id)}))]}):Object(Ne.jsx)("div",{className:Tt.a.center,children:"Favorites is empty..."});case"drafts":return n.length?Object(Ne.jsxs)(a.Fragment,{children:[Object(Ne.jsxs)(cr,{children:[Object(Ne.jsx)(ir,{}),Object(Ne.jsx)(ur,{}),Object(Ne.jsx)(pr,{})]}),n.map((function(e){return Object(Ne.jsx)(fr,{id:e._id,title:"Draft",subject:e.subject,message:e.message,date:e.updatedAt,isDraft:!0,toggleIsCompose:o},e._id)}))]}):Object(Ne.jsx)("div",{className:Tt.a.center,children:"Drafts is empty..."});case"trash":return i.length?Object(Ne.jsxs)(a.Fragment,{children:[Object(Ne.jsxs)(cr,{children:[Object(Ne.jsx)(ir,{}),Object(Ne.jsx)(ur,{}),Object(Ne.jsx)(pr,{})]}),i.map((function(e){return Object(Ne.jsx)(fr,{id:e._id,title:e.from===d?"me":e.from,subject:e.subject,message:e.message,date:e.createdAt,isTrash:!0},e._id)}))]}):Object(Ne.jsx)("div",{className:Tt.a.center,children:"Trash is empty..."})}}var hr=r(63),vr=r.n(hr);function gr(e){var t=e.inbox,r=e.sent,n=e.drafts,c=e.starred,i=e.trash,o=Object(s.b)(),u=Object(ae.i)(),l=u.category,d=u.id,j=Object(a.useState)((function(){switch(l){case"inbox":return t.find((function(e){return e._id===d}));case"sent":return r.find((function(e){return e._id===d}));case"drafts":return n.find((function(e){return e._id===d}));case"starred":return c.find((function(e){return e._id===d}));case"trash":return i.find((function(e){return e._id===d}))}})),b=Object(Ee.a)(j,1)[0];return Object(a.useEffect)((function(){b.read||o(function(e){return function(){var t=Object(se.a)(ce.a.mark((function t(r,a){var n;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:V}),t.prev=1,t.next=4,he(a().userReducer.token,e);case 4:n=t.sent,r({type:Z,payload:n.data.email}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r({type:B,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,r){return t.apply(this,arguments)}}()}(d))}),[o,b,d]),Object(Ne.jsxs)(a.Fragment,{children:[Object(Ne.jsxs)(cr,{children:[Object(Ne.jsx)(or,{}),Object(Ne.jsx)(jr,{id:d,isInTrash:"trash"===l}),"trash"===l?Object(Ne.jsx)(br,{}):Object(Ne.jsx)(lr,{id:d})]}),Object(Ne.jsx)("div",{className:vr.a.wrapper,children:Object(Ne.jsxs)("div",{className:vr.a.container,children:[Object(Ne.jsx)("h3",{children:b.subject}),Object(Ne.jsxs)("div",{children:[Object(Ne.jsx)(We.a,{className:vr.a.avatar}),b.from,Object(Ne.jsx)("br",{}),"to me"]}),Object(Ne.jsx)("p",{children:b.message})]})})]})}var _r=r(40),yr=r.n(_r);var Er=function(e){var t,r,n,c,i=e.toggleIsCompose,o=e.composeDraft,u=Object(s.b)(),l=Object(s.c)((function(e){return e.userReducer.user.email})),d=Object(ke.a)({defaultValues:{from:l,to:(null===o||void 0===o?void 0:o.to)||"",subject:(null===o||void 0===o?void 0:o.subject)||"",message:(null===o||void 0===o?void 0:o.message)||""}}),j=d.register,b=d.handleSubmit,p=d.errors,O=d.watch,m=Object(a.useRef)({}),f=Object(a.useRef)({}),x=Object(a.useRef)({}),h=Object(a.useRef)({});return m.current=O("from",""),f.current=O("to",""),x.current=O("subject",""),h.current=O("message",""),Object(Ne.jsxs)("form",{onSubmit:b((function(e){if(o){u(Pe(e));var t={to:f.current,subject:x.current,message:h.current};u(Ge(o._id,t))}else u(Pe(e));i()})),className:yr.a.compose,children:[Object(Ne.jsxs)("div",{className:yr.a.header,children:[Object(Ne.jsx)("h5",{children:"New Message"}),Object(Ne.jsx)("span",{onClick:function(){if(o){var e={to:f.current,subject:x.current,message:h.current};u(Ge(o._id,e))}else if(""!==f.current||""!==x.current||""!==h.current){var t={from:m.current,to:f.current,subject:x.current,message:h.current};u(function(e){return function(){var t=Object(se.a)(ce.a.mark((function t(r,a){var n;return ce.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:N}),t.prev=1,t.next=4,Oe(a().userReducer.token,e);case 4:n=t.sent,r({type:T,payload:n.data.draft}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r({type:D,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,r){return t.apply(this,arguments)}}()}(t))}i()},children:"\xd7"})]}),Object(Ne.jsxs)("div",{className:yr.a.inpGroup,children:[Object(Ne.jsx)("label",{htmlFor:"from",children:"From:"}),Object(Ne.jsx)("input",{name:"from",id:"from",type:"email",ref:j({required:!0,pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}),readOnly:!0})]}),Object(Ne.jsxs)("div",{className:yr.a.inpGroup,children:[Object(Ne.jsx)("label",{htmlFor:"to",children:"To:"}),Object(Ne.jsx)("input",{name:"to",id:"to",type:"email",ref:j({required:!0,pattern:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/})})]}),Object(Ne.jsxs)("div",{className:yr.a.inpGroup,children:[Object(Ne.jsx)("label",{htmlFor:"subject",children:"Subject:"}),Object(Ne.jsx)("input",{name:"subject",id:"subject",type:"text",ref:j({required:!0})})]}),Object(Ne.jsx)("textarea",{name:"message",ref:j({required:!0})}),Object(Ne.jsxs)("div",{className:yr.a.send,children:[Object(Ne.jsx)(Ie.a,{type:"submit",children:"Send"}),Object(Ne.jsxs)("span",{children:[Object(Ne.jsx)("p",{children:"required"===(null===(t=p.to)||void 0===t?void 0:t.type)&&"Recipient is required"}),Object(Ne.jsx)("p",{children:"pattern"===(null===(r=p.to)||void 0===r?void 0:r.type)&&"Invalid email"}),Object(Ne.jsx)("p",{children:"required"===(null===(n=p.subject)||void 0===n?void 0:n.type)&&"Subject is required"}),Object(Ne.jsx)("p",{children:"required"===(null===(c=p.message)||void 0===c?void 0:c.type)&&"Email message is required"})]})]})]})};function Sr(){var e,t=Object(s.b)(),r=Object(s.c)((function(e){return e.emailReducer.mailbox})),n=Object(a.useState)([]),c=Object(Ee.a)(n,2),i=c[0],o=c[1],u=Object(a.useState)([]),l=Object(Ee.a)(u,2),d=l[0],j=l[1],b=Object(a.useState)([]),p=Object(Ee.a)(b,2),O=p[0],m=p[1],f=Object(a.useState)([]),x=Object(Ee.a)(f,2),h=x[0],v=x[1],g=Object(a.useState)([]),_=Object(Ee.a)(g,2),y=_[0],E=_[1];Object(a.useEffect)((function(){t(qe())}),[t]),Object(a.useEffect)((function(){var e=Object(K.a)(r.inbox),t=Object(K.a)(r.outbox),a=Object(K.a)(r.drafts),n=Object(K.a)(r.trash),c=r.inbox.filter((function(e){return e.favorite})).concat(r.outbox.filter((function(e){return e.favorite})));e.sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)})),t.sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)})),a.sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)})),n.sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)})),c.sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)})),o(e),j(t),v(a),E(n),m(c)}),[r]);var S=Object(a.useState)(!0),R=Object(Ee.a)(S,2),w=R[0],k=R[1],L=Object(a.useState)(!1),C=Object(Ee.a)(L,2),A=C[0],I=C[1],N=Object(a.useState)(void 0),T=Object(Ee.a)(N,2),D=T[0],M=T[1],U=function(e){I(!A),e?h.forEach((function(t){return t._id===e&&M(t)})):M(void 0)};return Object(Ne.jsxs)(a.Fragment,{children:[Object(Ne.jsx)(jt,{toggleShowSidebar:function(){return k(!w)}}),Object(Ne.jsxs)("main",{className:ze.a.main,children:[w&&Object(Ne.jsx)(It,{toggleIsCompose:U,inboxLength:i.length,sentLength:d.length,starredLength:O.length,draftsLength:h.length,trashLength:y.length}),Object(Ne.jsxs)("div",(e={className:ze.a.container},Object(Fe.a)(e,"className","scroll"),Object(Fe.a)(e,"children",[Object(Ne.jsx)(ae.b,{exact:!0,path:"/email/:category",children:Object(Ne.jsx)(xr,{inbox:i,sent:d,starred:O,drafts:h,trash:y,toggleIsCompose:U})}),Object(Ne.jsx)(ae.b,{path:"/email/:category/view/:id",children:Object(Ne.jsx)(gr,{inbox:i,sent:d,drafts:h,starred:O,trash:y})})]),e)),A&&Object(Ne.jsx)(Er,{toggleIsCompose:U,composeDraft:D})]})]})}var Rr=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.userReducer})),r=t.isLoggedIn,n=t.token;return Object(a.useEffect)((function(){n&&e(function(){var e=Object(se.a)(ce.a.mark((function e(t,r){var a;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:g}),e.prev=1,e.next=4,n=r().userReducer.token,oe.a.get("".concat(ue,"/account"),le(n));case 4:a=e.sent,t({type:_,payload:a.data.user}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:y,error:e.t0.response.data.message});case 11:case"end":return e.stop()}var n}),e,null,[[1,8]])})));return function(t,r){return e.apply(this,arguments)}}())}),[n,e]),Object(Ne.jsx)(re.a,{children:Object(Ne.jsx)("div",{className:"App",children:Object(Ne.jsxs)(ae.d,{children:[Object(Ne.jsx)(ae.b,{exact:!0,path:"/",children:r?Object(Ne.jsx)(ae.a,{to:"/email/inbox"}):Object(Ne.jsx)(ae.a,{to:"/account"})}),Object(Ne.jsx)(ae.b,{exact:!0,path:"/account",children:r?Object(Ne.jsx)(ae.a,{to:"/email/inbox"}):Object(Ne.jsx)(Ue,{})}),Object(Ne.jsx)(ae.b,{path:"/email",children:r?Object(Ne.jsx)(Sr,{}):Object(Ne.jsx)(ae.a,{to:"/account"})}),Object(Ne.jsx)(ae.b,{exact:!0,path:"/GitHub",component:function(){return window.location.href="https://github.com/RUPANCHAKRAVARTHY"}})]})})})};c.a.render(Object(Ne.jsx)(s.a,{store:te,children:Object(Ne.jsx)(Rr,{})}),document.getElementById("root"))},39:function(e,t,r){e.exports={center:"EmailCategory_center__1Z9VC"}},40:function(e,t,r){e.exports={compose:"ComposeMail_compose__mqK0t",header:"ComposeMail_header__2r3t3",inpGroup:"ComposeMail_inpGroup__29aO_",send:"ComposeMail_send__i25vp"}},47:function(e,t,r){e.exports={container:"Header_container__2506c",side:"Header_side__3Ni1o",middle:"Header_middle__3W0Yt",relative:"Header_relative__1y7ro"}},53:function(e,t,r){e.exports={container:"Sidebar_container__2udd0",compose:"Sidebar_compose__vEOxC",showMore__on:"Sidebar_showMore__on__PpDG2",showMore__off:"Sidebar_showMore__off__16uIn"}},54:function(e,t,r){e.exports={item:"EmailListItem_item__W--3f",message:"EmailListItem_message__3jSD2",unread:"EmailListItem_unread__BnXeK",read:"EmailListItem_read__13YWi"}},57:function(e,t,r){e.exports={form:"Form_form__39YLD"}},60:function(e,t,r){e.exports={page:"AuthPage_page__CzFOp",link:"AuthPage_link__1wrzF"}},61:function(e,t,r){e.exports={modal:"EditImageModal_modal__1I2CG",form:"EditImageModal_form__3sWZh",avatar:"EditImageModal_avatar__Ldu26"}},62:function(e,t,r){e.exports={component:"EmailOptions_component__1EmW1",wrapper:"EmailOptions_wrapper__INCQE"}},63:function(e,t,r){e.exports={wrapper:"EmailView_wrapper__3QFxF",container:"EmailView_container__3kLUV",avatar:"EmailView_avatar__iB2G7"}},66:function(e,t,r){e.exports={main:"EmailPage_main__30R11",container:"EmailPage_container__VglYD"}},67:function(e,t,r){e.exports={container:"AccountControls_container__EhEpt",avatar:"AccountControls_avatar__3SCCV"}},70:function(e,t,r){e.exports={item:"SidebarOption_item__QX3bZ",active:"SidebarOption_active__3cU4g"}}},[[153,1,2]]]);
//# sourceMappingURL=main.13dd1a6a.chunk.js.map