(this["webpackJsonpreact-35-module-2"]=this["webpackJsonpreact-35-module-2"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},19:function(e,t,n){},2:function(e,t,n){e.exports={counter:"Counter_counter__3nZje",btn:"Counter_btn__2EzXp",decrementBtn:"Counter_decrementBtn__3X5lO",incrementBtn:"Counter_incrementBtn__3PjYC",text:"Counter_text__3aEfb",counterValue:"Counter_counterValue__1nJBK"}},21:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(9),i=n.n(r),o=(n(14),n(4)),s=n(5),l=n(7),u=n(6),d=(n(15),n(3)),b=(n(19),n(0));function j(e){var t=e.unitRef,n=e.isOpen,c=e.toggleState,a=e.keydownHandler,r=e.handleClick,i=e.textObj,o=i.title,s=i.content,l=i.backBtn,u=i.deleteBtn;return Object(b.jsx)(d.a,{flipId:"wrapper",children:Object(b.jsxs)("div",{ref:t,tabIndex:n?void 0:0,role:"dialog",className:"dialog animated-in",onClick:c,onKeyDown:a,children:[Object(b.jsx)("p",{className:"title content",children:o}),Object(b.jsx)("p",{className:"content",children:s}),Object(b.jsx)("button",{className:"button secondary content",onClick:r,children:l}),Object(b.jsx)("button",{className:"button primary content",onClick:r,children:u})]})})}j.defaultProps={textObj:{title:"Delete this item?",content:"This operation will permenantly delete this item and all its dependencies. This actioncannot be undone",backBtn:"Oh no, bring me back",deleteBtn:"I understand, delete it"}};var h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isOpen:e.props.isOpen},e.ref=Object(c.createRef)(),e.toggleState=function(){e.state.isOpen||(e.setState((function(e){return{isOpen:!e.isOpen}})),e.ref.current.focus())},e.keydownHandler=function(t){"Enter"!==t.key&&"Escape"!==t.key||e.toggleState()},e.handleClick=function(){return e.setState({isOpen:!1})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.isOpen,t=this.ref,n=this.keydownHandler,c=this.toggleState,a=this.handleClick;return Object(b.jsx)(d.b,{flipKey:e,spring:"stiff",stagger:!0,children:e?Object(b.jsx)(j,{unitRef:t,isOpen:e,toggleState:c,keydownHandler:n,handleClick:a,textObj:this.props.text}):Object(b.jsx)(d.a,{flipId:"wrapper",children:Object(b.jsx)("div",{ref:t,tabIndex:0,role:"button",className:"button primary",onClick:c,onKeyDown:n,children:Object(b.jsx)(d.a,{flipId:"action",children:Object(b.jsx)("span",{className:"action",children:"Delete"})})})})})}}]),n}(c.Component),p=n(2),O=n.n(p);function f(e){var t=e.counter,n=e.handleDecrement,c=e.handleIncrement;return Object(b.jsxs)("div",{className:O.a.counter,children:[Object(b.jsx)("button",{className:"".concat(O.a.btn," ").concat(O.a.decrementBtn),onClick:n,children:"-"}),Object(b.jsx)("p",{className:"".concat(O.a.text," ").concat(O.a.counterValue),children:t}),Object(b.jsx)("button",{className:"".concat(O.a.btn," ").concat(O.a.incrementBtn),onClick:c,children:"+"})]})}var m={title:"title-1",content:"content-1",backBtn:"go back",deleteBtn:"delete"},x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={counter:0,isOpen:!1},e.handleDecrement=function(){e.state.counter>0&&e.setState((function(e){return{counter:e.counter-1}}))},e.handleIncrement=function(){e.setState((function(e){return{counter:e.counter+1}}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.counter,n=e.isOpen,c=this.handleDecrement,a=this.handleIncrement;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"FE-35"}),Object(b.jsx)(h,{isOpen:!n,text:m}),Object(b.jsx)(h,{isOpen:n}),Object(b.jsx)(f,{counter:t,handleDecrement:c,handleIncrement:a})]})}}]),n}(c.Component),k=x;i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.2a36b42e.chunk.js.map