(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{118:function(e,t,a){e.exports={button:"FormButton_button__2-gNS"}},119:function(e,t,a){e.exports={fieldInput:"Filter_fieldInput__1at_C"}},152:function(e,t,a){},257:function(e,t,a){},258:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),s=a.n(c),i=a(20),o=a(41),l=a.n(o),u=a(71),d=a(8),b=(a(152),a(27)),m=a(16),j=a(85),p=a(127),h=a(118),O=a.n(h),f=a(2),x=["type","onClick","disabled","children"],v=function(e){var t=e.type,a=void 0===t?"button":t,n=e.onClick,r=e.disabled,c=void 0!==r&&r,s=e.children,i=Object(p.a)(e,x);return Object(f.jsx)("button",Object(j.a)(Object(j.a)({type:a,className:O.a.button,disabled:c,onClick:n},i),{},{children:s}))},g=a(36),y=a.n(g),C=a(68),_=a(24),w=Object(C.a)({reducerPath:"contactsApi",baseQuery:Object(_.d)({baseUrl:"https://61ac9aa5d228a9001703ab59.mockapi.io"}),tagTypes:["Contact"],endpoints:function(e){return{getContacts:e.query({query:function(e){return"contacts?sortBy=name&name=".concat(e)},providesTags:["Contact"]}),deleteContact:e.mutation({query:function(e){return{url:"/contacts/".concat(e),method:"DELETE"}},invalidatesTags:["Contact"]}),createContact:e.mutation({query:function(e){return{url:"/contacts",method:"POST",body:e}},invalidatesTags:["Contact"]})}}}),N=w.useGetContactsQuery,k=w.useDeleteContactMutation,q=w.useCreateContactMutation;function P(e){var t=e.contacts,a=q(),n=Object(d.a)(a,1)[0],r=function(e){var a=e.name,r=e.phone;(function(e){return e=e.toLowerCase(),t.filter((function(t){return t.name.toLowerCase().includes(e)})).length>0})(a)?alert("".concat(a," is already in contacts")):n({name:a,phone:r})};return Object(f.jsxs)("div",{children:[Object(f.jsx)(m.d,{initialValues:{name:"",phone:""},validationSchema:b.a({name:b.b().required().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name can contain only letters, ', - and space."),phone:b.b().required().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number should contain only numbers and it also could contain spaces, dash, parenthesis and starts with +")}),onSubmit:function(e,t){var a=t.resetForm;r(e),a()},children:Object(f.jsxs)(m.c,{className:y.a.form,children:[Object(f.jsxs)("label",{className:y.a.label,children:["Name:",Object(f.jsx)(m.b,{className:y.a.fieldInput,name:"name",type:"text",placeholder:"enter your name"}),Object(f.jsx)(m.a,{name:"name",component:"span",className:y.a.validatorError})]}),Object(f.jsxs)("label",{className:y.a.label,children:["Phone number:",Object(f.jsx)(m.b,{className:y.a.fieldInput,name:"phone",type:"tel",placeholder:"enter your phone number"}),Object(f.jsx)(m.a,{name:"phone",component:"span",className:y.a.validatorError})]}),Object(f.jsx)(v,{type:"submit",children:"Add contact"})]})}),Object(f.jsx)("hr",{})]})}var S=a(126),T=a(56),A=a.n(T);function U(e){var t=e.contacts,a=e.onDelete;return Object(f.jsx)("ul",{className:A.a.list,children:t.map((function(e){var t=e.id,n=e.name,r=e.phone;return Object(f.jsxs)("li",{className:A.a.item,children:[Object(f.jsx)("span",{className:A.a.itemName,children:n}),Object(f.jsx)("span",{className:A.a.itemPhone,children:r}),Object(f.jsx)(v,{onClick:function(){return a(t)},"aria-label":"Delete contact",children:Object(f.jsx)(S.a,{size:"18"})})]},t)}))})}var L=a(119),E=a.n(L);function I(e){var t=e.filterContacts,a=Object(n.useState)(""),r=Object(d.a)(a,2),c=r[0],s=r[1];Object(n.useEffect)((function(){t(c)}),[c,t]);return Object(f.jsx)("div",{children:Object(f.jsxs)("label",{children:["Find contacts by name:",Object(f.jsx)("input",{type:"text",name:"filter",value:c,onChange:function(e){s(e.target.value)},className:E.a.fieldInput})]})})}var R=a(297),F=a(300),B=a(295),z=Object(B.a)((function(e){return{field:{marginBottom:e.spacing(2)}}}));function M(e){var t=e.registerUser,a=z();return Object(f.jsx)("div",{children:Object(f.jsx)(m.d,{initialValues:{name:"",email:"",password:""},validationSchema:b.a({name:b.b().required("Required"),email:b.b().email("Invalid email").required("Required"),password:b.b().min(7,"Password should be at least 7 symbols").max(15,"Password should be maximum 15 symbols").required("Required")}),onSubmit:function(e,a){var n=a.setSubmitting;t(e),n(!1)},children:Object(f.jsxs)(m.c,{children:[Object(f.jsx)(m.b,{component:F.a,className:a.field,name:"name",type:"text",label:"User name"}),Object(f.jsx)("br",{}),Object(f.jsx)(m.b,{component:F.a,className:a.field,name:"email",type:"email",label:"Email"}),Object(f.jsx)("br",{}),Object(f.jsx)(m.b,{component:F.a,className:a.field,name:"password",type:"password",label:"Password"}),Object(f.jsx)("br",{}),Object(f.jsx)(R.a,{variant:"contained",color:"primary",type:"submit",children:"Register"})]})})})}var D=Object(C.a)({reducerPath:"authApi",baseQuery:Object(_.d)({baseUrl:"https://connections-api.herokuapp.com"}),tagTypes:["Auth"],endpoints:function(e){return{registerUser:e.mutation({query:function(e){return{url:"/users/signup",method:"POST",body:e}},invalidatesTags:["Auth"]}),loginUser:e.mutation({query:function(e){return{url:"/users/login",method:"POST",body:e}},invalidatesTags:["Auth"]}),logoutUser:e.mutation({query:function(e){return{url:"/users/logout",method:"POST",headers:{Authorization:"Bearer ".concat(e)}}},invalidatesTags:["Auth"]})}}}),V=D.useRegisterUserMutation,Z=D.useLoginUserMutation,Q=D.useLogoutUserMutation,G=Object(B.a)((function(e){return{field:{marginBottom:e.spacing(2)}}}));function J(e){var t=e.loginUser,a=G();return Object(f.jsx)("div",{children:Object(f.jsx)(m.d,{initialValues:{email:"",password:""},validationSchema:b.a({email:b.b().email("Invalid email").required("Required"),password:b.b().min(7,"Password should be at least 7 symbols").max(15,"Password should be maximum 15 symbols").required("Required")}),onSubmit:function(e,a){var n=a.setSubmitting;t(e),n(!1)},children:Object(f.jsxs)(m.c,{children:[Object(f.jsx)(m.b,{component:F.a,className:a.field,name:"email",type:"email",label:"Email"}),Object(f.jsx)("br",{}),Object(f.jsx)(m.b,{component:F.a,className:a.field,name:"password",type:"password",label:"Password"}),Object(f.jsx)("br",{}),Object(f.jsx)(R.a,{variant:"contained",color:"primary",type:"submit",children:"Login"})]})})})}var K=a(301),Y=a(298),$=a(299),H=a(124),W=a.n(H),X=Object(B.a)((function(e){return{avatar:{display:"inline-flex",marginRight:e.spacing(1)},container:{display:"flex",alignItems:"center"}}}));function ee(e){var t=e.userName,a=e.onLogOut,n=X();return Object(f.jsxs)("div",{className:n.container,children:[Object(f.jsx)(K.a,{className:n.avatar,alt:t}),Object(f.jsx)(Y.a,{children:t}),Object(f.jsx)($.a,{color:"inherit",onClick:function(){return a()},children:Object(f.jsx)(W.a,{})})]})}function te(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),s=Object(d.a)(c,2),i=s[0],o=s[1],b=Object(n.useState)(""),m=Object(d.a)(b,2),j=m[0],p=m[1],h=N(a).data,O=k(),x=Object(d.a)(O,1)[0],v=V(),g=Object(d.a)(v,1)[0],y=Z(),C=Object(d.a)(y,1)[0],_=Q(),w=Object(d.a)(_,1)[0],q=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(t);case 3:"data"in(a=e.sent)&&(o(a.data.user),p(a.data.token)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(t);case 3:"data"in(a=e.sent)&&(o(a.data.user),p(a.data.token)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(j);case 3:o(null),p(""),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"App",children:[i&&Object(f.jsx)(ee,{userName:i.name,onLogOut:T}),Object(f.jsx)(P,{contacts:h}),Object(f.jsx)(M,{registerUser:q}),Object(f.jsx)(J,{loginUser:S}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(I,{filterContacts:function(e){r(e)}}),h&&Object(f.jsx)(U,{contacts:h,onDelete:x})]})}var ae,ne=a(4),re=a(12),ce=a(125),se=a.n(ce),ie=a(5),oe=[].concat(Object(re.a)(Object(ie.e)()),[se.a,D.middleware,w.middleware]),le=Object(ie.a)({reducer:(ae={},Object(ne.a)(ae,w.reducerPath,w.reducer),Object(ne.a)(ae,D.reducerPath,D.reducer),ae),middleware:oe,devTools:!1});a(257);s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(i.a,{store:le,children:Object(f.jsx)(te,{})})}),document.getElementById("root"))},36:function(e,t,a){e.exports={form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",fieldInput:"ContactForm_fieldInput__3zV51",validatorError:"ContactForm_validatorError__3ngg1"}},56:function(e,t,a){e.exports={list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",itemName:"ContactList_itemName__3linx",itemPhone:"ContactList_itemPhone__2aABR"}}},[[258,1,2]]]);
//# sourceMappingURL=main.46a0f0f2.chunk.js.map