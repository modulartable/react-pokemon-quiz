(this.webpackJsonpreactpokemonquizlet=this.webpackJsonpreactpokemonquizlet||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),s=n(12),c=n.n(s),r=(n(22),n(2)),a=(n(23),[{question1:{question:"Which Pokemon does Ash first encounter?",option1:"Pidgey",option2:"Pikachu",option3:"Charmander",option4:"Mr. Mime",answer:"Pidgey"},question2:{question:"What did Ash trade his Butterfree for?",option1:"Raticate",option2:"Squirtle",option3:"Tauros",option4:"Metapod",answer:"Raticate"},question3:{question:"How is Gary Oak related to Professor Oak?",option1:"Cousin",option2:"Nephew",option3:"Brother",option4:"Grandson",answer:"Grandson"},question4:{question:"How old was Ash when he started his Pokemon journey?",option1:"11 years old",option2:"10 years old",option3:"12 years old",option4:"9 years old",answer:"10 years old"},question5:{question:"Which Pokemon did Ash catch in Gringey City?",option1:"Muk",option2:"Zubat",option3:"Magnemite",option4:"Charizard",answer:"Magnemite"}}]),u=(n(24),n(1)),j=function(e){return Object(u.jsx)("div",{className:"slide",children:Object(u.jsx)("h1",{children:"How well do you remember Pokemon: Indigo League?"})})},d=(n(26),n(46)),l=function(e){return Object(u.jsx)("div",{children:Object(u.jsx)(d.a,{id:"startbtn",variant:"contained",onClick:function(){e.setStart(!0)},children:"Start"})})},p=(n(33),function(e){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{id:"question",children:Object(u.jsx)("h1",{children:e.question})})})}),b=(n(34),function(e){return Object(u.jsxs)("div",{id:"answersDiv",children:[Object(u.jsx)(d.a,{variant:"contained",className:"buttons",value:e.option1,onClick:e.answerCheck,children:e.option1}),Object(u.jsx)(d.a,{variant:"contained",className:"buttons",value:e.option2,onClick:e.answerCheck,children:e.option2}),Object(u.jsx)(d.a,{variant:"contained",className:"buttons",value:e.option3,onClick:e.answerCheck,children:e.option3}),Object(u.jsx)(d.a,{variant:"contained",className:"buttons",value:e.option4,onClick:e.answerCheck,children:e.option4})]})}),h=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)(p,{question:e.question,option1:e.option1,option2:e.option2,option3:e.option3,option4:e.option4,answer:e.answer})}),Object(u.jsx)("div",{children:Object(u.jsx)(b,{option1:e.option1,option2:e.option2,option3:e.option3,option4:e.option4,answer:e.answer,answerCheck:e.answerCheck})})]})},O=(n(35),function(e){return Object(u.jsx)("div",{children:Object(u.jsxs)("h2",{id:"score",children:["Score: ",e.score]})})}),f=function(e){return Object(u.jsx)("div",{children:Object(u.jsx)(d.a,{variant:"contained",onClick:function(){e.reset()},children:"Retry"})})},x=n.p+"static/media/madjigglypuff.045e30e4.png",v=n.p+"static/media/425-4256407_anime-pokemon-png-transparent-image-fat-pikachu-png.5d8202ba.png",g=function(e){return Object(u.jsxs)("div",{id:"results",children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{children:["Your final score was ",e.score,"!"]}),e.score>3?Object(u.jsx)("img",{src:v,alt:"Fat Pikachu"}):Object(u.jsx)("img",{src:x,alt:"Mad Jigglypuff"})]}),Object(u.jsx)("div",{children:Object(u.jsx)(f,{reset:e.reset})})]})};var w=function(){var e=[a[0].question1,a[0].question2,a[0].question3,a[0].question4,a[0].question5],t=Object(o.useState)(0),n=Object(r.a)(t,2),i=n[0],s=n[1],c=Object(o.useState)(0),d=Object(r.a)(c,2),p=d[0],b=d[1],f=Object(o.useState)(!1),x=Object(r.a)(f,2),v=x[0],w=x[1],k=Object(o.useState)(!1),m=Object(r.a)(k,2),q=m[0],C=m[1],y=Object(o.useState)(!1),S=Object(r.a)(y,2),P=S[0],M=S[1],N=Object(o.useState)(e[p]),A=Object(r.a)(N,2),F=A[0],z=A[1];return Object(o.useEffect)((function(){z(e[p])}),[p]),Object(o.useEffect)((function(){return!0===v?C(!0):""}),[v]),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{id:"quiz",children:[!1===v?Object(u.jsxs)("div",{children:[" ",Object(u.jsx)("div",{children:Object(u.jsx)(j,{})}),Object(u.jsx)("div",{children:Object(u.jsx)(l,{setStart:w})})," "]}):"",!0===q?Object(u.jsx)(h,{answerCheck:function(e){console.log(e.target.value),console.log(F.answer),e.preventDefault(),p<4&&(e.target.value===F.answer?(b((function(){return p+1})),s(i+1),console.log(p)):(b((function(){return p+1})),console.log(p))),4===p&&(e.target.value===F.answer?(s(i+1),console.log(p),C(!1),M(!0)):(C(!1),M(!0),console.log(p)))},question:F.question,option1:F.option1,option2:F.option2,option3:F.option3,option4:F.option4,answer:F.answer}):"",!0===q?Object(u.jsxs)("div",{id:"scoreboard",children:[" ",Object(u.jsx)(O,{score:i})," "]}):"",!0===P?Object(u.jsx)(g,{score:i,reset:function(e){s(0),b(0),w(!1),C(!1),M(!1)}}):""]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),o(e),i(e),s(e),c(e)}))};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),k()}},[[36,1,2]]]);
//# sourceMappingURL=main.054d0151.chunk.js.map