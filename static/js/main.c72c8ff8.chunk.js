(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,n,t){e.exports=t(308)},118:function(e,n,t){},120:function(e,n,t){},122:function(e,n,t){},308:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),r=t(15),c=t.n(r),o=(t(118),t(26)),i=t(27),u=t(30),m=t(28),s=t(31),p=t(310),h=t(312),f=t(311),d=(t(120),t(29)),E=t(111),g=t.n(E),b=t(65),v=t(32),O=(t(122),t(64)),x=t.n(O),j=t(110),w=t.n(j),y=t(105),C=t.n(y),N=t(107),A=t.n(N),S=t(19),k=t.n(S),G=t(106),D=t.n(G),P=t(63),T=t.n(P),F=t(62),M=t.n(F),W=t(108),B=t.n(W),J=function(e){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(l)))).handleExclusionChange=function(e){return function(n){(0,t.props.onExclusionChange)(e.name,n.target.value)}},t}return Object(s.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.classes,a=n.exclusionOptions,r=n.people;return r.length?l.a.createElement(M.a,{className:t.root},l.a.createElement(C.a,{className:t.table},l.a.createElement(D.a,null,l.a.createElement(T.a,null,l.a.createElement(k.a,null,"Name"),l.a.createElement(k.a,null,"Don't match with"),l.a.createElement(k.a,null,"Giftee"))),l.a.createElement(A.a,null,r.map(function(n){return l.a.createElement(T.a,{key:n.name},l.a.createElement(k.a,null,n.name),l.a.createElement(k.a,null,l.a.createElement(B.a,{value:n.exclude,onChange:e.handleExclusionChange(n.name),name:"exclusion",className:t.excludeSelect},l.a.createElement("option",{value:""},"Select..."),a.filter(function(e){return e!==e}).map(function(e){return l.a.createElement("option",{value:e},e)}))),l.a.createElement(k.a,null,n.giftee))})))):null}}]),n}(a.PureComponent),z=Object(d.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto",backgroundColor:"#f5f3da"},table:{minWidth:700},excludeSelect:{fontSize:"0.8125rem"}}})(J),I=t(109),U=t.n(I),V=2,X=function(e){function n(){var e,t;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(c)))).state={name:"",people:[{name:"Uno",giftee:"asd",exclusion:null},{name:"Dos",giftee:null,exclusion:null},{name:"Tres",giftee:null,exclusion:null},{name:"Cuatro",giftee:null,exclusion:null}]},t.handleNameChange=function(e){t.setState({name:e.target.value})},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.people,l=n.name,r=a.map(function(e){return Object(v.a)({},e,{giftee:null})});t.setState({name:"",people:Object(b.a)(r).concat([{name:t.formatName(l),giftee:null}])})},t.formatName=function(e){return e.trim()},t.isAddDisabled=function(){var e=t.state,n=e.name,a=e.people;if(!n.length)return!0;var l=t.formatName(n);return a.some(function(e){return e.name===l})},t.renderGenerateGiftees=function(){var e=t.state.people.length<V;return l.a.createElement(a.Fragment,null,e?l.a.createElement("p",null,"Add at least ",V," people to be able to generate giftees."):null,l.a.createElement("p",null,l.a.createElement(x.a,{children:"Generate giftees",variant:"contained",color:"primary",disabled:e,type:"submit",onClick:t.generateGiftees})))},t.generateGiftees=function(){var e=t.state.people,n=U()(e),a=Object(b.a)(n.slice(1)).concat([n[0]]),l=e.map(function(e,n){var t=a[n];return Object(v.a)({},e,{giftee:t.name})});t.setState(Object(v.a)({},t.state,{people:l}))},t.handleExclusionChange=function(e,n){t.state.people.map(function(t){return t.name===e?Object(v.a)({},t,{exclusion:n}):t.name===n?Object(v.a)({},t,{exclusion:e}):t})},t.getExclusionOptions=function(){return t.state.people.map(function(e){return e.name})},t.exclusionPairsAllowed=function(){var e=t.state.people;return Math.round(e.length/2)},t}return Object(s.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this.state,n=e.name,t=e.people;return l.a.createElement("div",{className:"NameForm"},l.a.createElement(z,{people:t,exclusionOptions:this.getExclusionOptions(),onExclusionChange:this.handleExclusionChange}),l.a.createElement("form",{noValidate:!0,onSubmit:this.handleSubmit},l.a.createElement(w.a,{label:"Name",value:n,onChange:this.handleNameChange,margin:"normal"}),l.a.createElement(x.a,{children:"Add",variant:"contained",color:"primary",disabled:this.isAddDisabled(),type:"submit"})),this.renderGenerateGiftees(),l.a.createElement("p",null,"You're allowed max ",this.exclusionPairsAllowed()," exclusion pairs"))}}]),n}(a.PureComponent),Y=Object(d.createMuiTheme)({palette:{primary:{main:"#81c784"},secondary:g.a}}),$=function(e){function n(){return Object(o.a)(this,n),Object(u.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement(d.MuiThemeProvider,{theme:Y},l.a.createElement(p.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",null,"Giftibutor")),l.a.createElement("main",{className:"App-main"},l.a.createElement(h.a,null,l.a.createElement(f.a,{path:"/",exact:!0,component:X}),l.a.createElement(f.a,{path:"/giftee",exact:!0,component:function(){return l.a.createElement("span",{children:"TODO"})}}),l.a.createElement(f.a,{component:function(){return l.a.createElement("span",{children:"Not Found"})}}))))))}}]),n}(a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[113,2,1]]]);
//# sourceMappingURL=main.c72c8ff8.chunk.js.map