(this.webpackJsonpreactpractice=this.webpackJsonpreactpractice||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":0,"name":"Butters from Southpark","image":"./images/southpark/butters.png","isclicked":false},{"id":1,"name":"Cartman from Southpark","image":"./images/southpark/cartman.png","isclicked":false},{"id":2,"name":"Craig from Southpark","image":"./images/southpark/craig.png","isclicked":false},{"id":3,"name":"Heidi from Southpark","image":"./images/southpark/heidi.png","isclicked":false},{"id":4,"name":"Jimmy from Southpark","image":"./images/southpark/jimmy.png","isclicked":false},{"id":5,"name":"Kenny from Southpark","image":"./images/southpark/kenny.png","isclicked":false},{"id":6,"name":"Kyle from Southpark","image":"./images/southpark/kyle.png","isclicked":false},{"id":7,"name":"Stan from Southpark","image":"./images/southpark/stan.png","isclicked":false},{"id":8,"name":"Timmy from Southpark","image":"./images/southpark/timmy.png","isclicked":false},{"id":9,"name":"Token from Southpark","image":"./images/southpark/token.png","isclicked":false},{"id":10,"name":"Tweek from Southpark","image":"./images/southpark/tweek.png","isclicked":false},{"id":11,"name":"Wendy from Southpark","image":"./images/southpark/wendy.png","isclicked":false}]')},,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(2),c=t.n(i),s=t(3),o=t(4),m=t(7),l=t(6);t(13);var u=function(e){return r.a.createElement("div",{className:"wrapper justify-content-center"},e.children)};t(14);var d=function(e){return r.a.createElement("h1",{className:"title"},e.children)};t(15);var h=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{id:e.id,onClick:e.onClick,alt:e.name,src:e.image})))};t(16);var k=function(e){return r.a.createElement("div",{className:"instructions justify-content-center"},e.children)};t(17);var p=function(e){return r.a.createElement("div",{className:"score"},r.a.createElement("span",null,"Score: ",e.score),r.a.createElement("span",{className:"high-score"},"High Score: ",e.highscore))},f=t(5);function g(e){e.sort((function(){return Math.random()-.5}))}var v=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleClick=function(e){e.preventDefault();var a=e.target.id,t=f.findIndex((function(e){return e.id===parseInt(a,10)}));"true"===f[t].isclicked?(alert("You already clicked that one! Game over, try again!"),f.map((function(e){return e.isclicked="false"})),n.state.highscore<n.state.score&&n.setState({highscore:n.state.score}),g(f),n.setState({score:0,arr:f})):(f[t].isclicked="true",g(f),n.setState({score:n.state.score+1,arr:f}))},n.state={score:0,highscore:0,arr:[]},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){g(f),this.setState({arr:f})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(u,null,r.a.createElement(d,null,"Clicky Memory Game!"),r.a.createElement("br",null),r.a.createElement(k,null,"Click a character and get a point. Don't click the same character twice!"),r.a.createElement("br",null),r.a.createElement(p,{score:this.state.score,highscore:this.state.highscore}),this.state.arr.map((function(a){return r.a.createElement(h,{id:a.id,key:a.id,name:a.name,image:a.image,onClick:e.handleClick})}))))}}]),t}(n.Component);t(18);c.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.a0a6cc89.chunk.js.map