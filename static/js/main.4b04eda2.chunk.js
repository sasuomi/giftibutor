(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{123:function(e,n,t){e.exports=t(323)},128:function(e,n,t){},130:function(e,n,t){},132:function(e,n,t){},323:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),r=t(15),o=t.n(r),c=(t(128),t(26)),i=t(27),u=t(30),s=t(28),m=t(31),p=t(325),h=t(327),f=t(326),d=(t(130),t(29)),E=t(121),b=t.n(E),g=t(32),v=t(49),O=t(33),x=(t(132),t(67)),j=t.n(x),w=t(120),y=t.n(w),N=t(113),C=t.n(N),S=t(115),D=t.n(S),k=t(18),A=t.n(k),P=t(114),G=t.n(P),M=t(66),B=t.n(M),I=t(65),T=t.n(I),z=t(116),F=t.n(z),J=t(117),W=t.n(J),R=t(118),V=t.n(R),X=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(l)))).handleExclusionChange=function(e){return function(n){t.props.onExclusionChange(e,n.target.value)}},t.handlePersonDelete=function(e){return function(n){t.props.onPersonDelete(e)}},t}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.classes,a=n.exclusionOptions,r=n.people,o=n.addingMoreExclusionsDisabled;return r.length?l.a.createElement(T.a,{className:t.root},l.a.createElement(C.a,null,l.a.createElement(G.a,null,l.a.createElement(B.a,null,l.a.createElement(A.a,null,"Name"),l.a.createElement(A.a,null,"Don't match with"),l.a.createElement(A.a,null,"Giftee"),l.a.createElement(A.a,{className:t.removeCell},"Remove"))),l.a.createElement(D.a,null,r.map(function(n){var r=n.exclusion||"";return l.a.createElement(B.a,{key:n.name},l.a.createElement(A.a,null,n.name),l.a.createElement(A.a,null,l.a.createElement(F.a,{name:"exclusion",className:r?t.exclusionSelect:t.noExclusionSelect,value:r,disabled:!r&&o,onChange:e.handleExclusionChange(n.name)},l.a.createElement("option",{className:t.nullOption,value:""},"Select..."),a.filter(function(e){return e!==n.name}).map(function(e){return l.a.createElement("option",{key:e,value:e,children:e})}))),l.a.createElement(A.a,null,n.giftee),l.a.createElement(A.a,{className:t.removeCell},l.a.createElement(W.a,{onClick:e.handlePersonDelete(n.name)},l.a.createElement(V.a,{className:t.removeIcon}))))})))):null}}]),n}(a.PureComponent),$=Object(d.withStyles)(function(e){return{root:{width:"100%",overflowX:"auto",backgroundColor:"#f5f3da"},exclusionSelect:{fontSize:"0.8125rem"},noExclusionSelect:{fontSize:"0.8125rem",color:"rgba(0, 0, 0, 0.5)"},noSelection:{root:{color:"red"}},removeCell:{width:"1px",textAlign:"center"},removeIcon:{color:"#dc5757"}}})(X),q=t(119),H=t.n(q),K=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(l)))).state={name:"",people:[],exclusions:[]},t.handleNameChange=function(e){t.setState({name:e.target.value})},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.people,l=n.name,r=a.map(function(e){return Object(O.a)({},e,{giftee:null})});t.setState({name:"",people:Object(v.a)(r).concat([{name:t.formatName(l),giftee:null}])})},t.formatName=function(e){return e.trim()},t.isAddDisabled=function(){var e=t.state,n=e.name,a=e.people;if(!n.length)return!0;var l=t.formatName(n);return a.some(function(e){return e.name===l})},t.handleGenerateGiftees=function(){var e=t.state.people,n=H()(e),a=Object(v.a)(n.slice(1)).concat([n[0]]),l=n.reduce(function(e,n,t){return Object(O.a)({},e,Object(g.a)({},n.name,a[t].name))},{}),r=e.map(function(e){return Object(O.a)({},e,{giftee:l[e.name]})});t.setState({people:r})},t.handleExclusionChange=function(e,n){var a=t.state.exclusions.filter(function(t){return!t.has(e)&&!t.has(n)}),l=n?Object(v.a)(a).concat([new Set([e,n])]):a;t.setState({exclusions:l})},t.handlePersonDelete=function(e){var n=t.state,a=n.people,l=n.exclusions;t.setState({people:a.filter(function(n){return n.name!==e}),exclusions:l.filter(function(n){return!n.has(e)})})},t.getExclusionOptions=function(){return t.state.people.map(function(e){return e.name})},t.getExclusionsByName=function(){return t.state.exclusions.reduce(function(e,n){var t,a=Array.from(n);return Object(O.a)({},e,(t={},Object(g.a)(t,a[0],a[1]),Object(g.a)(t,a[1],a[0]),t))},{})},t}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){window.pf=this;var e=this.state,n=e.name,t=e.people,a=e.exclusions,r=this.getExclusionsByName(),o=t.map(function(e){return Object(O.a)({},e,{exclusion:r[e.name]||null})}),c=Math.floor(t.length/2)<=a.length,i=t.length<3;return l.a.createElement("div",{className:"PersonForm"},l.a.createElement("div",{className:"generate-giftees-container"},l.a.createElement("p",null,t.length?l.a.createElement(j.a,{children:"Generate giftees",variant:"contained",color:"primary",disabled:i,type:"submit",onClick:this.handleGenerateGiftees}):null)),l.a.createElement($,{people:o,exclusionOptions:this.getExclusionOptions(),onPersonDelete:this.handlePersonDelete,onExclusionChange:this.handleExclusionChange,addingMoreExclusionsDisabled:i||c}),i?l.a.createElement("p",null,"Add at least ",3," people to be able to generate giftees."):null,l.a.createElement("form",{noValidate:!0,onSubmit:this.handleSubmit},l.a.createElement(y.a,{label:"Name",value:n,onChange:this.handleNameChange,margin:"normal"}),l.a.createElement(j.a,{className:"add-person",children:"Add",variant:"contained",color:"primary",disabled:this.isAddDisabled(),type:"submit"})))}}]),n}(a.PureComponent),L=Object(d.createMuiTheme)({palette:{primary:{main:"#81c784"},secondary:b.a}}),Q=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement(d.MuiThemeProvider,{theme:L},l.a.createElement(p.a,{basename:"/giftibutor"},l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",null,"Giftibutor")),l.a.createElement("main",{className:"App-main"},l.a.createElement(h.a,null,l.a.createElement(f.a,{path:"/",exact:!0,component:K}),l.a.createElement(f.a,{path:"/giftee",exact:!0,component:function(){return l.a.createElement("span",{children:"TODO"})}}),l.a.createElement(f.a,{component:function(){return l.a.createElement("span",{children:"Not Found"})}}))))))}}]),n}(a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[123,2,1]]]);
//# sourceMappingURL=main.4b04eda2.chunk.js.map