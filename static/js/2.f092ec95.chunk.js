(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[2],{112:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",(function(){return r}))},121:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(e){var t=function(e){var t=Object(r.useRef)(e);return t.current=e,t}(e);Object(r.useEffect)((function(){return function(){return t.current()}}),[])}},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(40),a=n(0),o=function(e){var t;return"undefined"===typeof document?null:null==e?Object(r.a)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),(null==(t=e)?void 0:t.nodeType)&&e||null)};function i(e,t){var n=Object(a.useState)((function(){return o(e)})),r=n[0],i=n[1];if(!r){var c=o(e);c&&i(c)}return Object(a.useEffect)((function(){t&&r&&t(r)}),[t,r]),Object(a.useEffect)((function(){var t=o(e);t!==r&&i(t)}),[e,r]),r}},143:function(e,t,n){"use strict";var r=n(1),a=n(3),o=n(5),i=n.n(o),c=n(0),l=n.n(c),u=n(6),s=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.variant,c=e.pill,s=e.className,f=e.as,d=void 0===f?"span":f,p=Object(a.a)(e,["bsPrefix","variant","pill","className","as"]),b=Object(u.a)(n,"badge");return l.a.createElement(d,Object(r.a)({ref:t},p,{className:i()(s,b,c&&b+"-pill",o&&b+"-"+o)}))}));s.displayName="Badge",s.defaultProps={pill:!1},t.a=s},164:function(e,t,n){"use strict";var r=n(1),a=n(3),o=n(5),i=n.n(o),c=n(0),l=n.n(c),u=(n(126),n(6)),s=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.placement,c=e.className,s=e.style,f=e.children,d=e.arrowProps,p=(e.popper,e.show,Object(a.a)(e,["bsPrefix","placement","className","style","children","arrowProps","popper","show"]));n=Object(u.a)(n,"tooltip");var b=((null==o?void 0:o.split("-"))||[])[0];return l.a.createElement("div",Object(r.a)({ref:t,style:s,role:"tooltip","x-placement":b,className:i()(c,n,"bs-tooltip-"+b)},p),l.a.createElement("div",Object(r.a)({className:"arrow"},d)),l.a.createElement("div",{className:n+"-inner"},f))}));s.defaultProps={placement:"right"},s.displayName="Tooltip",t.a=s},201:function(e,t,n){"use strict";var r=n(1),a=n(3),o=n(8),i=n(125),c=n(0),l=n.n(c),u=n(124),s=n(121),f=Math.pow(2,31)-1;function d(e,t,n){var r=n-Date.now();e.current=r<=f?setTimeout(t,r):setTimeout((function(){return d(e,t,n)}),f)}function p(){var e=Object(u.a)(),t=Object(c.useRef)();return Object(s.a)((function(){return clearTimeout(t.current)})),Object(c.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(n(),a<=f?t.current=setTimeout(r,a):d(t,r,Date.now()+a))},clear:n}}),[])}var b=n(116),v=(n(59),n(24)),m=n(5),O=n.n(m),j=n(4),y=n.n(j),h=n(18),E=n.n(h),w=n(115),g=n(41),C=n(90),x=n(141),P=n(142),N=n(127),k=n(133),T=l.a.forwardRef((function(e,t){var n=e.flip,o=e.offset,i=e.placement,u=e.containerPadding,s=void 0===u?5:u,f=e.popperConfig,d=void 0===f?{}:f,p=e.transition,b=Object(w.a)(),v=b[0],m=b[1],O=Object(w.a)(),j=O[0],y=O[1],h=Object(g.a)(m,t),C=Object(N.a)(e.container),T=Object(N.a)(e.target),K=Object(c.useState)(!e.show),S=K[0],R=K[1],I=Object(x.a)(T,v,Object(k.a)({placement:i,enableEvents:!!e.show,containerPadding:s||5,flip:n,offset:o,arrowElement:j,popperConfig:d})),A=I.styles,_=I.attributes,z=Object(a.a)(I,["styles","attributes"]);e.show?S&&R(!1):e.transition||S||R(!0);var D=e.show||p&&!S;if(Object(P.a)(v,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!D)return null;var M=e.children(Object(r.a)({},z,{show:!!e.show,props:Object(r.a)({},_.popper,{style:A.popper,ref:h}),arrowProps:Object(r.a)({},_.arrow,{style:A.arrow,ref:y})}));if(p){var B=e.onExit,F=e.onExiting,H=e.onEnter,U=e.onEntering,q=e.onEntered;M=l.a.createElement(p,{in:e.show,appear:!0,onExit:B,onExiting:F,onExited:function(){R(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:H,onEntering:U,onEntered:q},M)}return C?E.a.createPortal(M,C):null}));T.displayName="Overlay",T.propTypes={show:y.a.bool,placement:y.a.oneOf(C.h),target:y.a.any,container:y.a.any,flip:y.a.bool,children:y.a.func.isRequired,containerPadding:y.a.number,popperConfig:y.a.object,rootClose:y.a.bool,rootCloseEvent:y.a.oneOf(["click","mousedown"]),rootCloseDisabled:y.a.bool,onHide:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a;return e.rootClose?(a=y.a.func).isRequired.apply(a,[e].concat(n)):y.a.func.apply(y.a,[e].concat(n))},transition:y.a.elementType,onEnter:y.a.func,onEntering:y.a.func,onEntered:y.a.func,onExit:y.a.func,onExiting:y.a.func,onExited:y.a.func};var K=T,S=n(134),R=n(109),I={transition:R.a,rootClose:!1,show:!1,placement:"top"};function A(e){var t=e.children,n=e.transition,o=e.popperConfig,i=void 0===o?{}:o,u=Object(a.a)(e,["children","transition","popperConfig"]),s=Object(c.useRef)({}),f=Object(S.a)(),d=f[0],p=f[1],v=!0===n?R.a:n||null;return l.a.createElement(K,Object(r.a)({},u,{ref:d,popperConfig:Object(r.a)({},i,{modifiers:p.concat(i.modifiers||[])}),transition:v}),(function(e){var o,i=e.props,c=e.arrowProps,u=e.show,f=e.update,d=(e.forceUpdate,e.placement),p=e.state,v=Object(a.a)(e,["props","arrowProps","show","update","forceUpdate","placement","state"]);!function(e,t){var n=e.ref,r=t.ref;e.ref=n.__wrapped||(n.__wrapped=function(e){return n(Object(b.a)(e))}),t.ref=r.__wrapped||(r.__wrapped=function(e){return r(Object(b.a)(e))})}(i,c);var m=Object.assign(s.current,{state:p,scheduleUpdate:f,placement:d,outOfBoundaries:(null==p||null==(o=p.modifiersData.hide)?void 0:o.isReferenceHidden)||!1});return"function"===typeof t?t(Object(r.a)({},v,{},i,{placement:d,show:u,popper:m,arrowProps:c})):l.a.cloneElement(t,Object(r.a)({},v,{},i,{placement:d,arrowProps:c,popper:m,className:O()(t.props.className,!n&&u&&"show"),style:Object(r.a)({},t.props.style,{},i.style)}))}))}A.defaultProps=I;var _=A,z=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return this.props.children},t}(l.a.Component);function D(e,t,n){var r=t[0],a=r.currentTarget,o=r.relatedTarget||r.nativeEvent[n];o&&o===a||Object(i.a)(a,o)||e.apply(void 0,t)}function M(e){var t=e.trigger,n=e.overlay,o=e.children,i=e.popperConfig,u=void 0===i?{}:i,s=e.show,f=e.defaultShow,d=void 0!==f&&f,m=e.onToggle,O=e.delay,j=e.placement,y=e.flip,h=void 0===y?j&&-1!==j.indexOf("auto"):y,E=Object(a.a)(e,["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"]),w=Object(c.useRef)(null),g=p(),C=Object(c.useRef)(""),x=Object(v.b)(s,d,m),P=x[0],N=x[1],k=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(O),T="function"!==typeof o?l.a.Children.only(o).props:{},K=T.onFocus,S=T.onBlur,R=T.onClick,I=Object(c.useCallback)((function(){return Object(b.a)(w.current)}),[]),A=Object(c.useCallback)((function(){g.clear(),C.current="show",k.show?g.set((function(){"show"===C.current&&N(!0)}),k.show):N(!0)}),[k.show,N,g]),M=Object(c.useCallback)((function(){g.clear(),C.current="hide",k.hide?g.set((function(){"hide"===C.current&&N(!1)}),k.hide):N(!1)}),[k.hide,N,g]),B=Object(c.useCallback)((function(){A();for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];null==K||K.apply(void 0,t)}),[A,K]),F=Object(c.useCallback)((function(){M();for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];null==S||S.apply(void 0,t)}),[M,S]),H=Object(c.useCallback)((function(){N(!P),R&&R.apply(void 0,arguments)}),[R,N,P]),U=Object(c.useCallback)((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];D(A,t,"fromElement")}),[A]),q=Object(c.useCallback)((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];D(M,t,"toElement")}),[M]),G=null==t?[]:[].concat(t),J={};return-1!==G.indexOf("click")&&(J.onClick=H),-1!==G.indexOf("focus")&&(J.onFocus=B,J.onBlur=F),-1!==G.indexOf("hover")&&(J.onMouseOver=U,J.onMouseOut=q),l.a.createElement(l.a.Fragment,null,"function"===typeof o?o(Object(r.a)({},J,{ref:w})):l.a.createElement(z,{ref:w},Object(c.cloneElement)(o,J)),l.a.createElement(_,Object(r.a)({},E,{show:P,onHide:M,flip:h,placement:j,popperConfig:u,target:I}),n))}M.defaultProps={defaultShow:!1,trigger:["hover","focus"]};t.a=M},216:function(e,t,n){"use strict";var r=n(1),a=n(3),o=n(5),i=n.n(o),c=n(0),l=n.n(c),u=n(24),s=n(6),f=n(13),d=l.a.createContext(null);d.displayName="AccordionContext";var p=d;var b=l.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"button":n,i=e.children,u=e.eventKey,s=e.onClick,d=Object(a.a)(e,["as","children","eventKey","onClick"]),b=function(e,t){var n=Object(c.useContext)(p),r=Object(c.useContext)(f.a);return function(a){r&&r(e===n?null:e,a),t&&t(a)}}(u,s);return"button"===o&&(d.type="button"),l.a.createElement(o,Object(r.a)({ref:t,onClick:b},d),i)})),v=n(48),m=l.a.forwardRef((function(e,t){var n=e.children,o=e.eventKey,i=Object(a.a)(e,["children","eventKey"]),u=Object(c.useContext)(p);return l.a.createElement(f.a.Provider,{value:null},l.a.createElement(v.a,Object(r.a)({ref:t,in:u===o},i),l.a.createElement("div",null,l.a.Children.only(n))))}));m.displayName="AccordionCollapse";var O=m,j=l.a.forwardRef((function(e,t){var n=Object(u.a)(e,{activeKey:"onSelect"}),o=n.as,c=void 0===o?"div":o,d=n.activeKey,b=n.bsPrefix,v=n.children,m=n.className,O=n.onSelect,j=Object(a.a)(n,["as","activeKey","bsPrefix","children","className","onSelect"]),y=i()(m,Object(s.a)(b,"accordion"));return l.a.createElement(p.Provider,{value:d||null},l.a.createElement(f.a.Provider,{value:O||null},l.a.createElement(c,Object(r.a)({ref:t},j,{className:y}),v)))}));j.displayName="Accordion",j.Toggle=b,j.Collapse=O;t.a=j},217:function(e,t,n){"use strict";var r=n(8),a=n(0),o=n.n(a),i=n(24),c=n(46),l=n(13),u=function(e){var t=Object(i.a)(e,{activeKey:"onSelect"}),n=t.id,r=t.generateChildId,u=t.onSelect,s=t.activeKey,f=t.transition,d=t.mountOnEnter,p=t.unmountOnExit,b=t.children,v=Object(a.useMemo)((function(){return r||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,r]),m=Object(a.useMemo)((function(){return{onSelect:u,activeKey:s,transition:f,mountOnEnter:d||!1,unmountOnExit:p||!1,getControlledId:function(e){return v(e,"tabpane")},getControllerId:function(e){return v(e,"tab")}}}),[u,s,f,d,p,v]);return o.a.createElement(c.a.Provider,{value:m},o.a.createElement(l.a.Provider,{value:u||null},b))},s=n(1),f=n(3),d=n(5),p=n.n(d),b=n(6),v=o.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.as,a=void 0===r?"div":r,i=e.className,c=Object(f.a)(e,["bsPrefix","as","className"]),l=Object(b.a)(n,"tab-content");return o.a.createElement(a,Object(s.a)({ref:t},c,{className:p()(i,l)}))})),m=n(109);var O=o.a.forwardRef((function(e,t){var n=function(e){var t=Object(a.useContext)(c.a);if(!t)return e;var n=t.activeKey,r=t.getControlledId,o=t.getControllerId,i=Object(f.a)(t,["activeKey","getControlledId","getControllerId"]),u=!1!==e.transition&&!1!==i.transition,d=Object(l.b)(e.eventKey);return Object(s.a)({},e,{active:null==e.active&&null!=d?Object(l.b)(n)===d:e.active,id:r(e.eventKey),"aria-labelledby":o(e.eventKey),transition:u&&(e.transition||i.transition||m.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:i.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:i.unmountOnExit})}(e),r=n.bsPrefix,i=n.className,u=n.active,d=n.onEnter,v=n.onEntering,O=n.onEntered,j=n.onExit,y=n.onExiting,h=n.onExited,E=n.mountOnEnter,w=n.unmountOnExit,g=n.transition,C=n.as,x=void 0===C?"div":C,P=(n.eventKey,Object(f.a)(n,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),N=Object(b.a)(r,"tab-pane");if(!u&&!g&&w)return null;var k=o.a.createElement(x,Object(s.a)({},P,{ref:t,role:"tabpanel","aria-hidden":!u,className:p()(i,N,{active:u})}));return g&&(k=o.a.createElement(g,{in:u,onEnter:d,onEntering:v,onEntered:O,onExit:j,onExiting:y,onExited:h,mountOnEnter:E,unmountOnExit:w},k)),o.a.createElement(c.a.Provider,{value:null},o.a.createElement(l.a.Provider,{value:null},k))}));O.displayName="TabPane";var j=O,y=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(o.a.Component);y.Container=u,y.Content=v,y.Pane=j;t.a=y},221:function(e,t,n){"use strict";var r=n(1),a=n(3),o=n(5),i=n.n(o),c=n(0),l=n.n(c),u=(n(59),n(24)),s=n(6),f=n(52),d=n(54),p=n(13),b={variant:void 0,active:!1,disabled:!1},v=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.active,u=e.disabled,f=e.className,b=e.variant,v=e.action,m=e.as,O=e.eventKey,j=e.onClick,y=Object(a.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);n=Object(s.a)(n,"list-group-item");var h=Object(c.useCallback)((function(e){if(u)return e.preventDefault(),void e.stopPropagation();j&&j(e)}),[u,j]);return l.a.createElement(d.a,Object(r.a)({ref:t},y,{eventKey:Object(p.b)(O,y.href),as:m||(v?y.href?"a":"button":"div"),onClick:h,className:i()(f,n,o&&"active",u&&"disabled",b&&n+"-"+b,v&&n+"-action")}))}));v.defaultProps=b,v.displayName="ListGroupItem";var m=v,O={variant:void 0,horizontal:void 0},j=l.a.forwardRef((function(e,t){var n,o=Object(u.a)(e,{activeKey:"onSelect"}),c=o.className,d=o.bsPrefix,p=o.variant,b=o.horizontal,v=o.as,m=void 0===v?"div":v,O=Object(a.a)(o,["className","bsPrefix","variant","horizontal","as"]),j=Object(s.a)(d,"list-group");return n=b?!0===b?"horizontal":"horizontal-"+b:null,l.a.createElement(f.a,Object(r.a)({ref:t},O,{as:m,className:i()(c,j,p&&j+"-"+p,n&&j+"-"+n)}))}));j.defaultProps=O,j.displayName="ListGroup",j.Item=m;t.a=j},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(131);var a=n(113);function o(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(113);function a(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(r.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw i}}}}}}]);
//# sourceMappingURL=2.f092ec95.chunk.js.map