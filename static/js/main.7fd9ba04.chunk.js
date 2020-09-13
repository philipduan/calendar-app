(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{53:function(e,t,a){},80:function(e,t,a){e.exports=a(90)},90:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),o=a(9),l=a.n(o),i=a(12),s=a(119),m=a(10),u=a.n(m),d=a(42),f=(a(53),{selectedDate:u()().format("DD-MM-YYYY"),eventList:{}}),p=Object(c.createContext)({state:f,dispatch:function(){return null}}),y=a(21),E=a(69),h=a(18);!function(e){e.UpdateDate="UPDATE_DATE",e.AddEvent="ADD_EVENT",e.DeleteEvent="DELETE_EVENT"}(n||(n={}));var b,v=function(e,t){switch(t.type){case n.UpdateDate:return Object(h.a)(Object(h.a)({},e),{},{selectedDate:t.payload});case n.AddEvent:var a=[];return Object.keys(e.eventList).some((function(t){return t===e.selectedDate}))?a=[].concat(Object(E.a)(e.eventList[e.selectedDate]),[Object(h.a)({},t.payload)]):a.push(t.payload),Object(h.a)(Object(h.a)({},e),{},{eventList:Object(h.a)(Object(h.a)({},e.eventList),{},Object(y.a)({},e.selectedDate,a))});case n.DeleteEvent:return Object(h.a)(Object(h.a)({},e),{},{eventList:Object(h.a)(Object(h.a)({},e.eventList),{},Object(y.a)({},e.selectedDate,t.payload))});default:return e}},g=function(e){var t=Object(c.useContext)(p),a=t.state,o=t.dispatch,l=a.eventList,i=e.weeks,m=e.setDate;return r.a.createElement(s.a,{container:!0,spacing:2,style:{border:"1px solid black",backgroundColor:"#f1faee",height:"100%"}},i.length?i.map((function(e,t){return r.a.createElement(s.a,{key:t,container:!0,item:!0,xs:12,spacing:1,direction:"row",justify:"space-evenly",alignContent:"center"},e.map((function(e,a){return r.a.createElement(s.a,{className:"hover  clickable ".concat(e.selected?"selected":e.today?"today":""),item:!0,key:+"".concat(t).concat(a).concat(e.day),xs:1,onClick:function(){return function(e){e.ofMonth&&m(e.day),o({type:n.UpdateDate,payload:"".concat(e.day,"-").concat(e.month<9?"0":"").concat(e.month+1,"-").concat(e.year)})}(e)}},r.a.createElement(d.a,{variant:"h5",align:"center",style:{color:e.ofMonth?"#000000":"#a7afb2"}},e.day||""),r.a.createElement(d.a,{variant:"body2",align:"center",style:{color:"#a8dadc",visibility:l["".concat(e.day,"-").concat(e.month<9?"0":"").concat(e.month+1,"-").concat(e.year)]&&l["".concat(e.day,"-").concat(e.month<9?"0":"").concat(e.month+1,"-").concat(e.year)].length?"visible":"hidden"}},l["".concat(e.day,"-").concat(e.month<9?"0":"").concat(e.month+1,"-").concat(e.year)]?l["".concat(e.day,"-").concat(e.month<9?"0":"").concat(e.month+1,"-").concat(e.year)].length:"0"))})))})):r.a.createElement("div",null))},O=a(63),j=a.n(O),k=a(64),M=a.n(k),D=function(e){var t=e.monthName,a=e.month,n=e.setMonth,c=e.setModeSelection,o=e.year,l=e.setYear;return r.a.createElement(s.a,{container:!0,spacing:2,direction:"row",justify:"space-evenly",alignItems:"center",style:{border:"1px solid black",backgroundColor:"#e63946"}},r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(j.a,{style:{color:"#ffffff"},className:"clickable",onClick:function(){0===a?(n(11),l(o-1)):n(a-1)}})),r.a.createElement(s.a,{item:!0,xs:3},r.a.createElement(d.a,{className:"clickable",variant:"h5",align:"center",style:{color:"#ffffff"},onClick:function(){return c(b.Month)}},t)),r.a.createElement(s.a,{item:!0,xs:3},r.a.createElement(d.a,{className:"clickable",variant:"h5",align:"center",style:{color:"#ffffff"},onClick:function(){return c(b.Year)}},o)),r.a.createElement(s.a,{container:!0,item:!0,xs:2,justify:"flex-end"},r.a.createElement(M.a,{style:{color:"#ffffff"},className:"clickable",onClick:function(){11===a?(n(0),l(o+1)):n(a+1)}})))},x=function(e){var t=e.mode,a=u.a.weekdaysShort();return r.a.createElement(s.a,{container:!0,spacing:2,direction:"row",justify:"space-evenly",alignItems:"center",style:{border:"1px solid black",backgroundColor:"#1d3557"}},t?r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(d.a,{variant:"h5",align:"center",style:{color:"#ffffff"}},"Select a ".concat(t))):a.map((function(e){return r.a.createElement(s.a,{item:!0,key:e,xs:1},r.a.createElement(d.a,{variant:"h5",align:"center",style:{color:"#ffffff"}},e))})))},C=function(e){var t=e.monthLongNameArry,a=e.setMonth,n=e.setModeSelection,o=Object(c.useState)([]),l=Object(i.a)(o,2),m=l[0],u=l[1];Object(c.useEffect)((function(){for(var e=[],a=0;a<4;a++)e.push(t.slice(3*a,3*(a+1)));return u(e),function(){}}),[t]);return r.a.createElement(s.a,{container:!0,spacing:2,style:{border:"1px solid black",backgroundColor:"#f1faee",height:420}},m.length?m.map((function(e,t){return r.a.createElement(s.a,{key:t,container:!0,item:!0,xs:12,spacing:1,direction:"row",justify:"space-evenly",alignContent:"center"},e.map((function(e,c){return r.a.createElement(s.a,{item:!0,key:"".concat(e),xs:4,className:"clickable hover"},r.a.createElement(d.a,{variant:"h5",align:"center",onClick:function(){return a(3*t+c),void n(b.None)}},"".concat(e)))})))})):r.a.createElement("div",null))},Y=function(e){var t=e.setYear,a=e.setModeSelection,n=Object(c.useState)([]),o=Object(i.a)(n,2),l=o[0],m=o[1];Object(c.useEffect)((function(){for(var e=[],t=u()().year(),a=0;a<4;a++)e.push([t+3*a,t+3*a+1,t+3*a+2]);return m(e),function(){}}),[]);return r.a.createElement(s.a,{container:!0,spacing:2,style:{border:"1px solid black",backgroundColor:"#f1faee",height:420}},l.length?l.map((function(e,n){return r.a.createElement(s.a,{key:n,container:!0,item:!0,xs:12,spacing:1,direction:"row",justify:"space-evenly",alignContent:"center"},e.map((function(e){return r.a.createElement(s.a,{item:!0,key:"".concat(e),xs:4,className:"clickable hover"},r.a.createElement(d.a,{variant:"h5",align:"center",onClick:function(){return function(e){t(e),a(b.None)}(e)}},"".concat(e)))})))})):r.a.createElement("div",null))};!function(e){e.None="",e.Month="MONTH",e.Year="YEAR"}(b||(b={}));var S,N=function(){var e=u.a.months(),t=Object(c.useContext)(p).state.selectedDate,a=Object(c.useState)(u()().date()),n=Object(i.a)(a,2),o=n[0],l=n[1],s=Object(c.useState)([]),m=Object(i.a)(s,2),d=m[0],f=m[1],y=Object(c.useState)(+u()().month()),E=Object(i.a)(y,2),h=E[0],v=E[1],O=Object(c.useState)(u()().year()),j=Object(i.a)(O,2),k=j[0],M=j[1],S=Object(c.useState)(""),N=Object(i.a)(S,2),w=N[0],A=N[1];return Object(c.useEffect)((function(){for(var e=u()(),a=u()(t,"DD-MM-YYYY"),n=u()("".concat(o,"-").concat(h+1,"-").concat(k),"DD-MM-YYYY"),c=n.month(),r=n.year(),l=+u()("".concat(n.year(),"-").concat(n.month()?n.month():"12"),"YYYY-MM").daysInMonth(),i=+u()(n).startOf("month").format("d"),s=[],m=[],d=0;d<i;d++)s.push({day:l-i+d+1,month:c?c-1:11,year:c?r:r-1,ofMonth:!1,today:!1,selected:a.date()===l-i+d+1&&a.month()===c-1&&a.year()===r});for(var p=1;p<=n.daysInMonth();p++)s.push({day:+p,month:c,year:r,ofMonth:!0,today:e.date()===p&&e.month()===c&&e.year()===r,selected:a.date()===p&&a.month()===c&&a.year()===r});for(var y=42-s.length,E=s.length;E<42;E++)s.push({day:y-(42-E)+1,month:11===c?0:c+1,year:11===c?r+1:r,ofMonth:!1,today:!1,selected:a.date()===y-(42-E)+1&&a.month()===c+1&&a.year()===r});for(var b=0;b<6;b++)m.push(s.slice(7*b,7*(b+1)));return f(m),function(){}}),[o,h,k,t]),r.a.createElement("div",null,r.a.createElement(D,{monthName:e[h],month:h,setMonth:v,setModeSelection:A,year:k,setYear:M}),r.a.createElement(x,{mode:w}),w===b.Year?r.a.createElement(Y,{setYear:M,setModeSelection:A}):w===b.Month?r.a.createElement(C,{monthLongNameArry:e,setMonth:v,setModeSelection:A}):r.a.createElement(g,{weeks:d,setDate:l}))},w=a(65),A=a.n(w),L=function(e){var t=Object(c.useContext)(p).state,a=e.isFormOpen,n=e.setIsFormOpen;return r.a.createElement(s.a,{style:{paddingLeft:16}},r.a.createElement(s.a,{container:!0,justify:"space-between"},r.a.createElement(s.a,{item:!0,xs:10},r.a.createElement(d.a,{variant:"h5"},"Events for ".concat(t.selectedDate))),r.a.createElement(s.a,{container:!0,item:!0,xs:1,justify:"center"},r.a.createElement(A.a,{fontSize:"large",onClick:function(){return n(!a)}}))))},T=a(127),I=a(134),F=a(68),B=a.n(F),U=a(133),H=a(128),R=a(123),V=a(131),_=a(125),J=a(129),P=a(126),q=a(66),z=a.n(q),G=a(67),K=a.n(G);!function(e){e.Appointment="A",e.Meeting="M",e.Task="T"}(S||(S={}));var Q,W=function(e){var t=Object(c.useContext)(p).dispatch,a=e.setIsFormOpen,o=Object(c.useState)(""),l=Object(i.a)(o,2),m=l[0],f=l[1],y=Object(c.useState)(S.Appointment),E=Object(i.a)(y,2),h=E[0],b=E[1],v=Object(c.useState)("".concat(u()().hour()-10<0?"0".concat(u()().hour()):"".concat(u()().hour()),":00")),g=Object(i.a)(v,2),O=g[0],j=g[1];return r.a.createElement(s.a,{container:!0,style:{padding:20}},r.a.createElement(s.a,{container:!0,style:{marginBottom:10},justify:"space-between"},r.a.createElement(d.a,{variant:"h5"},"New Event"),r.a.createElement(z.a,{onClick:function(){a(!1)},style:{cursor:"pointer"}})),r.a.createElement(s.a,{container:!0},r.a.createElement("form",{style:{display:"flex",flexDirection:"column",width:"100%"},autoComplete:"off",onSubmit:function(e){!function(e){e.preventDefault(),t({type:n.AddEvent,payload:{name:m,type:h,time:O}}),a(!1)}(e)}},r.a.createElement(U.a,{component:"fieldset",style:{marginBottom:10}},r.a.createElement(H.a,{id:"name",label:"Name",value:m,onChange:function(e){f(e.target.value)},required:!0})),r.a.createElement(U.a,{component:"fieldset"},r.a.createElement(R.a,{component:"legend"},"Gender"),r.a.createElement(V.a,{name:"gender1",value:h,onChange:function(e){b(e.target.value)},style:{paddingLeft:20}},r.a.createElement(_.a,{value:S.Appointment,control:r.a.createElement(J.a,null),label:"Appointment"}),r.a.createElement(_.a,{value:S.Meeting,control:r.a.createElement(J.a,null),label:"Meeting"}),r.a.createElement(_.a,{value:S.Task,control:r.a.createElement(J.a,null),label:"Task"}))),r.a.createElement(H.a,{id:"time",label:"Time",type:"time",defaultValue:O,onChange:function(e){return j(e.target.value)}}),r.a.createElement(s.a,{container:!0,justify:"flex-end",style:{marginTop:20}},r.a.createElement(P.a,{type:"submit",variant:"contained",color:"primary",endIcon:r.a.createElement(K.a,null)},"Add")))))},X=(Q={},Object(y.a)(Q,S.Appointment,"#e63946"),Object(y.a)(Q,S.Meeting,"#a8dadc"),Object(y.a)(Q,S.Task,"#457b9d"),Q),Z=function(){var e=Object(c.useContext)(p),t=e.state,a=e.dispatch;return r.a.createElement("div",{style:{height:"85vh",overflowY:"scroll"}},t.selectedDate&&t.eventList&&t.eventList[t.selectedDate]&&t.eventList[t.selectedDate].length?t.eventList[t.selectedDate].map((function(e,c){return r.a.createElement(T.a,{key:"".concat(e.name,"-").concat(c),avatar:r.a.createElement(I.a,{style:{backgroundColor:X[e.type]}},e.type),action:r.a.createElement(B.a,{style:{marginTop:15,cursor:"pointer"},onClick:function(){!function(e){var c=t.eventList[t.selectedDate];c.splice(e,1),a({type:n.DeleteEvent,payload:c})}(c)}}),title:e.name,subheader:u()(e.time,"HH:mm").format("hh:mm A")})})):r.a.createElement(s.a,{container:!0,justify:"space-between",style:{paddingLeft:16,marginBottom:20}},r.a.createElement(s.a,{item:!0,xs:6},r.a.createElement(d.a,{variant:"h6"},"No Events"))))},$=function(e){var t=e.isFormOpen,a=e.setIsFormOpen;return r.a.createElement("div",null,r.a.createElement(L,{isFormOpen:t,setIsFormOpen:a}),r.a.createElement(Z,null))},ee=a(132),te=function(){var e=[{type:S.Appointment,name:"Appointment"},{type:S.Meeting,name:"Meeting"},{type:S.Task,name:"Task"}];return r.a.createElement(s.a,{container:!0,direction:"row",spacing:2,style:{marginTop:10}},e.map((function(e){return r.a.createElement(s.a,{key:e.name,container:!0,item:!0,style:{width:"fit-content"},direction:"row",alignItems:"center"},r.a.createElement(I.a,{style:{backgroundColor:X[e.type],marginRight:5}},e.type),r.a.createElement(d.a,{variant:"subtitle1"},e.name))})))};var ae=function(){var e=Object(c.useReducer)(v,f),t=Object(i.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)(!1),l=Object(i.a)(o,2),m=l[0],u=l[1];return r.a.createElement(p.Provider,{value:{state:a,dispatch:n}},r.a.createElement("div",{className:"App",style:{padding:10}},r.a.createElement(s.a,{container:!0,spacing:2},r.a.createElement(s.a,{item:!0,xs:8},r.a.createElement(N,null),r.a.createElement(te,null)),r.a.createElement(s.a,{item:!0,xs:4,style:{padding:0}},r.a.createElement($,{isFormOpen:m,setIsFormOpen:u}))),r.a.createElement(ee.a,{open:m},r.a.createElement(W,{setIsFormOpen:u}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null)),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.7fd9ba04.chunk.js.map