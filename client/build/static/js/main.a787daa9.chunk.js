(this.webpackJsonplamaadmin=this.webpackJsonplamaadmin||[]).push([[0],{215:function(e,t,a){},221:function(e,t,a){},222:function(e,t,a){},223:function(e,t,a){},224:function(e,t,a){},225:function(e,t,a){},226:function(e,t,a){},228:function(e,t,a){},244:function(e,t,a){},245:function(e,t,a){},348:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(19),r=a.n(s),i=(a(215),a(392)),l=a(67),o=a(1);function d(){return Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)("div",{className:"sidebarWrapper",children:Object(o.jsxs)("div",{className:"sidebarMenu",children:[Object(o.jsx)("h3",{className:"sidebarTitle",children:"Dashboard"}),Object(o.jsxs)("ul",{className:"sidebarList",children:[Object(o.jsx)(l.b,{to:"/userslist",className:"link",children:Object(o.jsxs)("li",{className:"sidebarListItem",children:[Object(o.jsx)(i.a,{className:"sidebarIcon"}),"Users Listings"]})}),Object(o.jsx)(l.b,{to:"/newUser",className:"link",children:Object(o.jsxs)("li",{className:"sidebarListItem",children:[Object(o.jsx)(i.a,{className:"sidebarIcon"}),"Add User"]})})]})]})})})}a(221);var j=a(395),u=a(396),b=a(397);function m(){return Object(o.jsx)("div",{className:"topbar",children:Object(o.jsxs)("div",{className:"topbarWrapper",children:[Object(o.jsx)("div",{className:"topLeft",children:Object(o.jsx)("span",{className:"logo",children:"Admin Dashboard"})}),Object(o.jsxs)("div",{className:"topRight",children:[Object(o.jsxs)("div",{className:"topbarIconContainer",children:[Object(o.jsx)(j.a,{}),Object(o.jsx)("span",{className:"topIconBadge",children:"2"})]}),Object(o.jsxs)("div",{className:"topbarIconContainer",children:[Object(o.jsx)(u.a,{}),Object(o.jsx)("span",{className:"topIconBadge",children:"2"})]}),Object(o.jsx)("div",{className:"topbarIconContainer",children:Object(o.jsx)(b.a,{})}),Object(o.jsx)("img",{src:"https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",alt:"",className:"topAvatar"})]})]})})}a(222),a(223),a(398),a(399);a(224),a(225),a(400);a(226);var h=a(23),O=a(8),x=a(20),p=a.n(x),f=a(30),v=(a(228),a(177)),N=a(187);var g=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://3.82.230.24:8081/users/GetUsers",{method:"GET"}).then((function(e){return e.json()})).then((function(e){return console.log(e),e})).catch((function(e){return console.log("error",e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function w(){var e=Object(n.useState)(),t=Object(O.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(),r=Object(O.a)(s,2),i=r[0],l=r[1],d=Object(n.useState)(null),j=Object(O.a)(d,2),u=j[0],b=j[1],m=function(){var e=Object(n.useRef)(!1);return Object(n.useEffect)((function(){return e.current=!0,function(){e.current=!1}})),e}();Object(n.useEffect)((function(){function e(){return(e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,m.current&&(c(t),h(),l(t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[m]),Object(n.useEffect)((function(){h()}),[a]);var h=function(){if(void 0!=a){var e=[{value:"all",label:"All"}];a.map((function(t,a){e.push({value:t.email,label:t.name})})),console.log(e),b(e)}},x=Object(n.useState)(null),w=Object(O.a)(x,2),U=w[0],S=w[1];return Object(o.jsxs)("div",{className:"userList",children:[Object(o.jsx)("h3",{children:"Search User"}),null!=u?Object(o.jsx)(N.a,{name:"Users",isClearable:"true",isSearchable:"true",placeholder:"Users",defaultValue:{label:"All",value:"All"},onChange:S,options:u}):Object(o.jsx)("p",{children:"Loading"}),Object(o.jsx)("button",{onClick:function(){console.log(U),"all"==U.value?c(i):c(i.filter((function(e){return e.email==U.value}))),console.log(a)},children:"Search"}),void 0!=a?void 0!=a[0]?Object(o.jsx)(v.a,{rows:a,getRowId:function(e){return e._id},disableSelectionOnClick:!0,columns:[{field:"_id",headerName:"ID",width:200},{field:"name",headerName:"name",width:190},{field:"email",headerName:"Email",width:250},{field:"cellno",headerName:"cell_no",width:150},{field:"createdAt",headerName:"Created_At",width:200},{field:"is Deleted",headerName:"is Deleted",width:140}],pageSize:8,checkboxSelection:!0}):Object(o.jsx)("p",{children:console.log("waiting")}):Object(o.jsx)("p",{children:console.log("waitkjs")})]})}a(403),a(404),a(405),a(406),a(407),a(244);a(245);var U=a(55),S=a(122),I=a(188),y=S.b().shape({email:S.c().email("Invalid email address format").required("Email is required"),age:S.a().min(18,"Age must be between 18 and 60").max(60,"Age must be between 18 and 60").required("Age is required")});function A(){var e=function(){var e=Object(f.a)(p.a.mark((function e(t){var a,n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={Accept:"*/*","Content-Type":"application/json"},n=JSON.stringify({name:t.name,email:t.email,cellno:t.cell,age:t.age}),c={url:"http://3.82.230.24:8081/users/AddUser",method:"POST",headers:a,data:n},e.next=5,I.a.request(c).then((function(){alert("User created Successfully"),window.location.href="/users"})).catch((function(e){return alert(e+" User Already Exists")}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"newUser",children:[Object(o.jsx)("h1",{className:"newUserTitle",children:"New User"}),Object(o.jsx)(U.d,{initialValues:{name:"",email:"",age:"",cell:""},validationSchema:y,onSubmit:function(t){console.log(t),e(t)},children:function(e){var t=e.touched,a=e.errors;e.isSubmitting,e.values;return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"row mb-5"}),Object(o.jsxs)(U.c,{children:[Object(o.jsxs)("div",{className:"newUserItem",children:[Object(o.jsx)("label",{children:"Name"}),Object(o.jsx)(U.b,{type:"text",placeholder:"john",name:"name"})]}),Object(o.jsxs)("div",{className:"newUserItem",children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email"}),Object(o.jsx)(U.b,{type:"email",name:"email",placeholder:"Enter email",className:"mt-2 form-control\n                          ".concat(t.email&&a.email?"is-invalid":"")}),Object(o.jsx)("div",{style:{color:"red"},children:Object(o.jsx)(U.a,{component:"div",name:"email",color:"red",className:"invalid-feedback"})})]}),Object(o.jsxs)("div",{className:"newUserItem",children:[Object(o.jsx)("label",{htmlFor:"age",className:"mt-3",children:"Age"}),Object(o.jsx)(U.b,{type:"number",name:"age",placeholder:"Enter Age",className:"mt-2 form-control\n                          ".concat(t.age&&a.age?"is-invalid":"")}),Object(o.jsx)("div",{style:{color:"red"},children:Object(o.jsx)(U.a,{component:"div",name:"age",className:"invalid-feedback"})})]}),Object(o.jsxs)("div",{className:"newUserItem",children:[Object(o.jsx)("label",{children:"Cell no."}),Object(o.jsx)(U.b,{type:"text",placeholder:"+1 247 588 966",name:"cell"})]}),Object(o.jsx)("button",{type:"submit",className:"newUserButton",children:"Submit"})]})]})}})]})}var k=function(){return Object(o.jsxs)(l.a,{children:[Object(o.jsx)(m,{}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(d,{}),Object(o.jsxs)(h.c,{children:[Object(o.jsx)(h.a,{exact:!0,path:"/",children:Object(o.jsx)(w,{})}),Object(o.jsx)(h.a,{path:"/userslist",children:Object(o.jsx)(w,{})}),Object(o.jsx)(h.a,{path:"/newUser",children:Object(o.jsx)(A,{})})]})]})]})};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root"))}},[[348,1,2]]]);
//# sourceMappingURL=main.a787daa9.chunk.js.map