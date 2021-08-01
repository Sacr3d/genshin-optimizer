(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[12],{184:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(28),r=a(14),c=a(50),i=a(1),o=function(){return Object(i.jsx)(c.a,{icon:r.x})},s=function(e){var t=e.stars,a=e.colored,r=void 0!==a&&a;return Object(i.jsx)("span",{className:r?"text-5star":"",children:t?Object(n.a)(Array(t).keys()).map((function(e,t){return Object(i.jsx)(o,{},t)})):null})}},185:function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));var n=a(10),r=a(204),c=a(28),i=a(54),o=a(106),s=a(3),l=a(22),u=a(29),f=a(43),d=a(105),v=a(93),h=a(35),b=a(74),p=a(42),m=a(190),O=a(36),j=a(196),y=a(12),g=a(9),w=function(){function e(){if(Object(l.a)(this,e),this instanceof e)throw Error("A static class cannot be instantiated.")}return Object(u.a)(e,null,[{key:"getDisplayHeading",value:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"anemo";if("basicKeys"===e)return"Basic Stats";if("genericAvgHit"===e)return"Generic Optimization Values";if("transReactions"===e)return"Transformation Reaction";if(e.startsWith("talentKey_")){var r,c,i=e.split("talentKey_")[1];return null!==(r=null===t||void 0===t||null===(c=t.getTalentOfKey(i,n))||void 0===c?void 0:c.name)&&void 0!==r?r:i}if(e.startsWith("weapon_")){var o,s=e.split("weapon_")[1];return null!==(o=null===a||void 0===a?void 0:a.name)&&void 0!==o?o:s}return""}}]),e}();w.getElementalName=function(e){return b.a[e].name},w.getLevelString=function(e){return"".concat(e.level,"/").concat(h.a[e.ascension])},w.getTalentFieldValue=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return e[t]?Object(g.f)(e[t],a):n},w.hasOverride=function(e,t){return"finalHP"===t?w.hasOverride(e,"hp")||w.hasOverride(e,"hp_")||w.hasOverride(e,"characterHP"):"finalDEF"===t?w.hasOverride(e,"def")||w.hasOverride(e,"def_")||w.hasOverride(e,"characterDEF"):"finalATK"===t?w.hasOverride(e,"atk")||w.hasOverride(e,"atk_")||w.hasOverride(e,"characterATK"):!!(null===e||void 0===e?void 0:e.baseStatOverrides)&&t in e.baseStatOverrides},w.getBaseStatValue=function(e,t,a,n){return"enemyLevel"===n?e.level:n.includes("enemyRes_")?10:n in h.b?h.b[n]:0},w.getStatValueWithOverride=function(e,t,a,n){var r,c;return w.hasOverride(e,n)?null!==(r=null===(c=e.baseStatOverrides)||void 0===c?void 0:c[n])&&void 0!==r?r:0:w.getBaseStatValue(e,t,a,n)},w.calculateBuild=function(e,t,a,n){var r,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;e.artifacts?r=Object.fromEntries(e.artifacts.map((function(e,t){return[t,e]}))):e.equippedArtifacts&&(r=Object.fromEntries(Object.entries(e.equippedArtifacts).map((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];return[a,p.a._getArt(n)]}))));var i=w.createInitialStats(e,t,a);return i.mainStatAssumptionLevel=c,w.calculateBuildwithArtifact(i,r,n)},w.calculateBuildwithArtifact=function(e,t,a){var n,r=f.a.setToSlots(t),c=d.a.setEffectsStats(a,e,r),i=Object(g.d)(e);Object.values(t).forEach((function(e){e&&(i[e.mainStatKey]=(i[e.mainStatKey]||0)+f.a.mainStatValue(e.mainStatKey,e.numStars,Math.max(Math.min(i.mainStatAssumptionLevel,4*e.numStars),e.level)),e.substats.forEach((function(e){return e&&e.key&&(i[e.key]=(i[e.key]||0)+e.value)})))})),c.forEach((function(e){return w.mergeStats(i,Object(o.a)({},e.key,e.value))})),v.a.parseConditionalValues({artifact:null===i||void 0===i||null===(n=i.conditionalValues)||void 0===n?void 0:n.artifact},(function(e,t,a){var n,c,l=Object(s.a)(a,2)[1],u=e.setNumKey;if(!(parseInt(u)>(null!==(n=null===r||void 0===r||null===(c=r[l])||void 0===c?void 0:c.length)&&void 0!==n?n:0))){var f=v.a.resolve(e,i,t).stats;Object.entries(f).forEach((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];w.mergeStats(i,Object(o.a)({},a,n))}))}})),i.equippedArtifacts=Object.fromEntries(Object.entries(t).map((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];return[a,null===n||void 0===n?void 0:n.id]}))),i.setToSlots=r;var l=Object(j.a)(null===i||void 0===i?void 0:i.modifiers);return Object(O.c)(l,i).formula(i),i},w.mergeStats=function(e,t){return t&&Object.entries(t).forEach((function(t){var a=Object(s.a)(t,2),n=a[0],r=a[1];if("modifiers"===n){var c;e.modifiers=null!==(c=e.modifiers)&&void 0!==c?c:{};var o,l=Object(i.a)(Object.entries(r));try{for(l.s();!(o=l.n()).done;){var u,f=Object(s.a)(o.value,2),d=f[0],v=f[1];e.modifiers[d]=null!==(u=e.modifiers[d])&&void 0!==u?u:{};var h,b=Object(i.a)(Object.entries(v));try{for(b.s();!(h=b.n()).done;){var p,m=Object(s.a)(h.value,2),O=m[0],j=m[1];e.modifiers[d][O]=(null!==(p=e.modifiers[d][O])&&void 0!==p?p:0)+j}}catch(y){b.e(y)}finally{b.f()}}}catch(y){l.e(y)}finally{l.f()}}else void 0===e[n]?e[n]=r:"number"===typeof e[n]&&(e[n]+=r)}))},w.createInitialStats=function(e,t,a){var i,l,u,f=e=Object(g.d)(e),d=f.characterKey,b=f.elementKey,p=f.level,m=f.ascension,O=f.hitMode,j=f.infusionAura,S=f.reactionMode,_=f.talentLevelKeys,E=f.constellation,k=f.equippedArtifacts,x=f.conditionalValues,C=void 0===x?{}:x,K=f.weapon,A=["enemyLevel"].concat(Object(c.a)(Object.keys(h.b))),N=Object.fromEntries(A.map((function(n){return[n,w.getStatValueWithOverride(e,t,a,n)]})));N.characterHP=t.getBase("hp",p,m),N.characterDEF=t.getBase("def",p,m),N.characterATK=t.getBase("atk",p,m),N.characterLevel=p,N.characterEle=null!==(i=null!==(l=t.elementKey)&&void 0!==l?l:b)&&void 0!==i?i:"anemo",N.characterKey=d,N.hitMode=O,N.infusionAura=j,N.reactionMode=S,N.conditionalValues=C,N.weaponType=t.weaponTypeKey,N.tlvl=_,N.constellation=E,N.ascension=m,N.weapon=Object(g.d)(K),N.equippedArtifacts=k,["physical"].concat(Object(c.a)(y.d)).forEach((function(n){var r="".concat(n,"_enemyRes_");N[r]=w.getStatValueWithOverride(e,t,a,r),r="".concat(n,"_enemyImmunity"),N[r]=w.getStatValueWithOverride(e,t,a,r)}));var L=(null===(u=e)||void 0===u?void 0:u.baseStatOverrides)||{};Object.entries(L).forEach((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];N.hasOwnProperty(a)||(N[a]=n)}));var P=t.getSpecializedStat(m);if(P){var V=t.getSpecializedStatVal(m);w.mergeStats(N,Object(o.a)({},P,V))}for(var R in t.getTalentStatsAll(N,N.characterEle).forEach((function(e){return w.mergeStats(N,e)})),N.tlvl){var T;N.tlvl[R]+=null!==(T=N["".concat(R,"Boost")])&&void 0!==T?T:0}var B=a.getMainStatValue(K.level,K.ascension);N.weaponATK=B;var I=a.getSubStatKey();I&&w.mergeStats(N,Object(o.a)({},I,a.getSubStatValue(K.level,K.ascension))),w.mergeStats(N,a.stats(N));C.artifact;var M=C.weapon,W=Object(r.a)(C,["artifact","weapon"]);return v.a.parseConditionalValues(Object(n.a)(Object(n.a)({},K.key&&{weapon:Object(o.a)({},K.key,null===M||void 0===M?void 0:M[K.key])}),W),(function(e,t,a){if(("character"!==a[0]||"talents"!==a[3]||a[4]===b)&&v.a.canShow(e,N)){var n=v.a.resolve(e,N,t).stats;w.mergeStats(N,n)}})),N},w.getDisplayStatKeys=function(e,t){var a,r,c=e.characterEle,i=["finalHP","finalATK","finalDEF","eleMas","critRate_","critDMG_","heal_","enerRech_","".concat(c,"_dmg_")];t.isAutoElemental||i.push("physical_dmg_");var o=Object(g.d)(O.a[c]),l=t.weaponTypeKey;o.includes("shattered_hit")||"claymore"!==l||o.push("shattered_hit");var u={},f=t.getTalent(c);f&&Object.entries(f.formula).forEach((function(t){var a=Object(s.a)(t,2),n=a[0],r=a[1];Object.values(r).forEach((function(t){if(t.field.canShow(e)){"normal"!==n&&"charged"!==n&&"plunging"!==n||(n="auto");var a="talentKey_".concat(n);u[a]||(u[a]=[]),u[a].push(t.keys)}}))}));var d=null===(a=m.a.formulas)||void 0===a||null===(r=a.weapon)||void 0===r?void 0:r[e.weapon.key];return d&&Object.values(d).forEach((function(t){if(t.field.canShow(e)){var a="weapon_".concat(e.weapon.key);u[a]||(u[a]=[]),u[a].push(t.keys)}})),Object(n.a)(Object(n.a)({basicKeys:i},u),{},{transReactions:o})}},188:function(e,t,a){"use strict";var n={elements:{anemo:a.p+"static/media/Element_Anemo.f809fde3.png",cryo:a.p+"static/media/Element_Cryo.019d72f9.png",dendro:a.p+"static/media/Element_Dendro.8ee0f26d.png",electro:a.p+"static/media/Element_Electro.342332ac.png",geo:a.p+"static/media/Element_Geo.b7e865c6.png",hydro:a.p+"static/media/Element_Hydro.f2f8bd8a.png",pyro:a.p+"static/media/Element_Pyro.f65c2e38.png"},weaponTypes:{bow:a.p+"static/media/Weapon-class-bow-icon.b8e7b5ca.png",catalyst:a.p+"static/media/Weapon-class-catalyst-icon.2cbef800.png",claymore:a.p+"static/media/Weapon-class-claymore-icon.17418b20.png",polearm:a.p+"static/media/Weapon-class-polearm-icon.a4e7fffc.png",sword:a.p+"static/media/Weapon-class-sword-icon.4470b487.png"},resin:{fragile:a.p+"static/media/Item_Fragile_Resin.f9ec8223.png",condensed:a.p+"static/media/Item_Condensed_Resin.1cecf64a.png"},exp_books:{advice:a.p+"static/media/Item_Wanderer's_Advice.58c62cf7.png",wit:a.p+"static/media/Item_Hero's_Wit.a79e36d0.png",experience:a.p+"static/media/Item_Adventurer's_Experience.92b5d195.png"}};t.a=n},189:function(e,t,a){"use strict";var n=a(2),r=a(5),c=a(6),i=a.n(c),o=a(0),s=a.n(o),l=a(8),u=["bsPrefix","size","toggle","vertical","className","as"],f=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.size,o=e.toggle,f=e.vertical,d=e.className,v=e.as,h=void 0===v?"div":v,b=Object(r.a)(e,u),p=Object(l.a)(a,"btn-group"),m=p;return f&&(m=p+"-vertical"),s.a.createElement(h,Object(n.a)({},b,{ref:t,className:i()(d,m,c&&p+"-"+c,o&&p+"-toggle")}))}));f.displayName="ButtonGroup",f.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=f},190:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(22),r=a(9),c=Promise.all([a.e(0),a.e(3)]).then(a.bind(null,144)).then((function(e){return i.formulas=e.default,e.default})),i=function e(){if(Object(n.a)(this,e),this instanceof e)throw Error("A static class cannot be instantiated.")};i.formulas={},i.get=function(e){return c.then((function(t){return Object(r.p)(t,e)}))}},192:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(e){var t=function(e){var t=Object(n.useRef)(e);return t.current=e,t}(e);Object(n.useEffect)((function(){return function(){return t.current()}}),[])}},193:function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,n(e,t)}a.d(t,"a",(function(){return r}))},194:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(76),r=a(0),c=function(e){var t;return"undefined"===typeof document?null:null==e?Object(n.a)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(t=e)&&t.nodeType&&e||null)};function i(e,t){var a=Object(r.useState)((function(){return c(e)})),n=a[0],i=a[1];if(!n){var o=c(e);o&&i(o)}return Object(r.useEffect)((function(){t&&n&&t(n)}),[t,n]),Object(r.useEffect)((function(){var t=c(e);t!==n&&i(t)}),[e,n]),n}},195:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n);function c(e,t){var a=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?t(e,a++):e}))}},196:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(3),r=a(28),c=a(36);function i(e){var t=new Set;return e(new Proxy({},{get:function(e,a,n){t.add(a.toString())}}),new Proxy({},{get:function(e,a,n){t.add(a.toString())}})),Object(r.a)(t)}var o=Object.freeze(Object.fromEntries(Object.entries(c.b).map((function(e){var t=Object(n.a)(e,2);return[t[0],i(t[1])]}))));function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object.keys(c.d),a=new Set;return t.forEach((function(t){return l(t,e,a)})),Object(r.a)(a)}function l(e,t,a){var n,r;a.has(e)||(null===(n=o[e])||void 0===n||n.forEach((function(e){return l(e,t,a)})),Object.keys(null!==(r=t[e])&&void 0!==r?r:{}).forEach((function(e){return l(e,t,a)})),a.add(e))}},198:function(e,t,a){"use strict";var n=a(2),r=a(5),c=a(6),i=a.n(c),o=a(0),s=a.n(o),l=a(7),u=a.n(l),f=a(8),d=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],v=(u.a.string,u.a.bool,u.a.bool,u.a.bool,u.a.bool,s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.fluid,l=e.rounded,u=e.roundedCircle,v=e.thumbnail,h=Object(r.a)(e,d);a=Object(f.a)(a,"img");var b=i()(o&&a+"-fluid",l&&"rounded",u&&"rounded-circle",v&&a+"-thumbnail");return s.a.createElement("img",Object(n.a)({ref:t},h,{className:i()(c,b)}))})));v.displayName="Image",v.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=v},204:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,"a",(function(){return n}))},208:function(e,t,a){"use strict";var n=a(2),r=a(5),c=a(6),i=a.n(c),o=a(0),s=a.n(o),l=a(56),u=["children","name","className","checked","type","onChange","value","disabled","inputRef"],f=function(){},d=s.a.forwardRef((function(e,t){var a=e.children,c=e.name,d=e.className,v=e.checked,h=e.type,b=e.onChange,p=e.value,m=e.disabled,O=e.inputRef,j=Object(r.a)(e,u),y=Object(o.useState)(!1),g=y[0],w=y[1],S=Object(o.useCallback)((function(e){"INPUT"===e.target.tagName&&w(!0)}),[]),_=Object(o.useCallback)((function(e){"INPUT"===e.target.tagName&&w(!1)}),[]);return s.a.createElement(l.a,Object(n.a)({},j,{ref:t,className:i()(d,g&&"focus",m&&"disabled"),type:void 0,active:!!v,as:"label"}),s.a.createElement("input",{name:c,type:h,value:p,ref:O,autoComplete:"off",checked:!!v,disabled:!!m,onFocus:S,onBlur:_,onChange:b||f}),a)}));d.displayName="ToggleButton",t.a=d},257:function(e,t,a){"use strict";var n=a(2),r=a(5),c=a(0),i=a.n(c),o=a(67),s=a.n(o),l=a(34),u=a(46),f=a(195),d=a(189),v=a(208),h=["children","type","name","value","onChange"],b=i.a.forwardRef((function(e,t){var a=Object(l.a)(e,{value:"onChange"}),c=a.children,o=a.type,v=a.name,b=a.value,p=a.onChange,m=Object(r.a)(a,h),O=function(){return null==b?[]:[].concat(b)};return"radio"!==o||v||s()(!1),i.a.createElement(d.a,Object(n.a)({},m,{ref:t,toggle:!0}),Object(f.a)(c,(function(e){var t=O(),a=e.props,n=a.value,r=a.onChange;return i.a.cloneElement(e,{type:o,name:e.name||v,checked:-1!==t.indexOf(n),onChange:Object(u.a)(r,(function(e){return function(e,t){if(p){var a=O(),n=-1!==a.indexOf(e);"radio"!==o?p(n?a.filter((function(t){return t!==e})):[].concat(a,[e]),t):!n&&p&&p(e,t)}}(n,e)}))})})))}));b.defaultProps={type:"radio",vertical:!1},b.Button=v.a,t.a=b},494:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Oe}));var n=a(3),r=a(166),c=a(2),i=a(5),o=a(0),s=a.n(o),l=a(6),u=a.n(l),f=a(201),d=a(92),v=a(20),h=a(8),b=a(123),p=s.a.createContext({onClose:function(){}}),m=["bsPrefix","closeLabel","closeButton","className","children"],O=s.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.closeLabel,r=e.closeButton,l=e.className,f=e.children,d=Object(i.a)(e,m);a=Object(h.a)(a,"toast-header");var O=Object(o.useContext)(p),j=Object(v.a)((function(e){O&&O.onClose&&O.onClose(e)}));return s.a.createElement("div",Object(c.a)({ref:t},d,{className:u()(a,l)}),f,r&&s.a.createElement(b.a,{label:n,onClick:j,className:"ml-2 mb-1","data-dismiss":"toast"}))}));O.displayName="ToastHeader",O.defaultProps={closeLabel:"Close",closeButton:!0};var j=O,y=a(17),g=Object(y.a)("toast-body"),w=["bsPrefix","className","children","transition","show","animation","delay","autohide","onClose"],S=s.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,r=e.children,l=e.transition,v=void 0===l?d.a:l,b=e.show,m=void 0===b||b,O=e.animation,j=void 0===O||O,y=e.delay,g=void 0===y?3e3:y,S=e.autohide,_=void 0!==S&&S,E=e.onClose,k=Object(i.a)(e,w);a=Object(h.a)(a,"toast");var x=Object(o.useRef)(g),C=Object(o.useRef)(E);Object(o.useEffect)((function(){x.current=g,C.current=E}),[g,E]);var K=Object(f.a)(),A=!(!_||!m),N=Object(o.useCallback)((function(){A&&(null==C.current||C.current())}),[A]);Object(o.useEffect)((function(){K.set(N,x.current)}),[K,N]);var L=Object(o.useMemo)((function(){return{onClose:E}}),[E]),P=!(!v||!j),V=s.a.createElement("div",Object(c.a)({},k,{ref:t,className:u()(a,n,!P&&(m?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"}),r);return s.a.createElement(p.Provider,{value:L},P&&v?s.a.createElement(v,{in:m,unmountOnExit:!0},V):V)}));S.displayName="Toast";var _=Object.assign(S,{Body:g,Header:j}),E=a(25),k=a(218),x=a(56),C=a(173),K=(a(172),a(15)),A=a(214),N=(a(196),a(42)),L=a(22),P=a(29),V=a(28);function R(e,t,a){try{switch(t.encode&&(e=t.encode(e)),t.type){case"uint":return function(e,t){var a=M(e,t.length);return t.length?a:B(a.length)+a}(e,t);case"string":return function(e,t){if(!e.match(/^[a-z0-9\-_]*$/i))throw new Error("Cannot encode string ".concat(e,": not alphanumeric or -_"));return B(e.length)+e}(e);case"array":return function(e,t){var a=t.schemas,n=void 0===a?[]:a,r=t.defaultSchema;return B(e.length)+e.map((function(e,t){var a;return R(e,null!==(a=n[t])&&void 0!==a?a:r,t)})).join("")}(e,t);case"object":return function(e,t){var a=t.schemas,r=void 0===a?[]:a;return Object.entries(r).map((function(t){var a=Object(n.a)(t,2),r=a[0],c=a[1];return R(r in e?e[r]:c.default,c,r)})).join("")}(e,t);case"sparse":return function(e,t){var a=t.keySchema,r=t.keys,c=t.valueSchema,i=Object.entries(e).filter((function(e){var t,a=Object(n.a)(e,1)[0];return null===(t=null===r||void 0===r?void 0:r.includes(a))||void 0===t||t}));return B(i.length)+i.map((function(e){var t=Object(n.a)(e,2),r=t[0],i=t[1];return R(r,a,r)+R(i,c,r)})).join("")}(e,t);default:throw new Error("Unsupported schema type ".concat(t.type," on array"))}}catch(c){var r;throw c.path=null!==(r=c.path)&&void 0!==r?r:[],c.path.push(a),c}}function T(e,t,a){try{var r;switch(t.type){case"uint":r=function(e,t){var a=t.length||I(e);return W(e.take(a))}(e,t);break;case"string":r=function(e,t){var a=e.take(I(e));if(!a.match(/^[a-z0-9\-_]*$/i))throw new Error("Cannot decode string ".concat(a,": not alphanumeric or -_"));return a}(e);break;case"array":r=function(e,t){var a=t.schemas,n=void 0===a?[]:a,r=t.defaultSchema,c=I(e);return Object(V.a)(new Array(c)).map((function(t,a){var c;return T(e,null!==(c=n[a])&&void 0!==c?c:r,a)}))}(e,t);break;case"object":r=function(e,t){var a=t.schemas,r=void 0===a?[]:a;return Object.fromEntries(Object.entries(r).map((function(t){var a=Object(n.a)(t,2),r=a[0],c=a[1];return[r,T(e,c,r)]})))}(e,t);break;case"sparse":r=function(e,t){var a=t.keys,r=t.keySchema,c=t.valueSchema,i=I(e);return Object.fromEntries(Object(V.a)(new Array(i)).map((function(){var t=T(e,r,null);return[t,T(e,c,t)]})).filter((function(e){var t,r=Object(n.a)(e,1)[0];return null===(t=null===a||void 0===a?void 0:a.includes(r))||void 0===t||t})))}(e,t);break;default:throw new Error("Unsupported schema type ".concat(t.type," on array"))}return t.decode?t.decode(r):r}catch(i){var c;throw i.path=null!==(c=i.path)&&void 0!==c?c:[],i.path.push(a),i}}function B(e){if(e>=32)throw new Error("Length (".concat(e,") too large"));return M(e,1)}function I(e){var t=W(e.take(1));if(t>=32)throw new Error("Length (".concat(t,") too large"));return t}function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(e<0)throw new Error("Cannot encode negative number ".concat(e));for(var a="";e>0;){var n=e%64;e=Math.floor(e/64),n<10?a+=String.fromCharCode(n+48-0):n<36?a+=String.fromCharCode(n+97-10):n<62?a+=String.fromCharCode(n+65-36):62===n?a+="-":63===n&&(a+="_")}if(!t)return a;if(a.length>t)throw new Error("Cannot encode uint ".concat(e,": value too large"));return a.padEnd(t,"0")}function W(e){for(var t=0,a=1,n=0;n<e.length;n++){var r=e.charCodeAt(n);if(48<=r&&r<58)t+=a*(r-48+0);else if(97<=r&&r<123)t+=a*(r-97+10);else if(65<=r&&r<91)t+=a*(r-65+36);else if("-"===e[n])t+=62*a;else{if("_"!==e[n])throw new Error('Cannot parse UInt from "'.concat(e,'", which contains "').concat(String.fromCharCode(r),'"'));t+=63*a}a*=64}return t}var z=function(){function e(t){Object(L.a)(this,e),this.string=void 0,this.offset=void 0,this.string=t,this.offset=0}return Object(P.a)(e,[{key:"take",value:function(e){if(this.offset+e>this.string.length)throw new Error("Cannot take ".concat(e," items from ").concat(this.string.slice(this.offset)));var t=this.string.slice(this.offset,this.offset+e);return this.offset+=e,t}},{key:"end",value:function(){if(this.string.length!==this.offset)throw new Error("Unused string ".concat(this.string.slice(this.offset)))}}]),e}(),H=a(54),D=a(10),F=a(35),U=a(12),q=a(9),G=[""].concat(Object(V.a)(U.d)),J=["","hp","hp_","atk","atk_","def","def_","eleMas","enerRech_","critRate_","critDMG_","heal_","physical_dmg_","anemo_dmg_","cryo_dmg_","dendro_dmg_","electro_dmg_","geo_dmg_","hydro_dmg_","pyro_dmg_"],$=function(e){return{type:"uint",length:e}},Q={type:"string",encode:function(e){return e.toString().replace(/\./g,"_")},decode:function(e){return parseFloat(e.replace(/_/g,"."))}},X={type:"string"},Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(D.a)({type:"array",defaultSchema:e},t)},Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(D.a)({type:"object",schemas:e},t)},ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return{type:"uint",length:t,encode:function(t){return e.indexOf(t)},decode:function(t){return e[t]}}},te=ee(J),ae=ee(U.b),ne=ee(U.h),re=ee(U.c),ce=ee(U.e),ie=ee([null].concat(Object(V.a)(U.g))),oe=ee(G),se=Z({setKey:ae,numStars:$(1),level:$(2),mainStatKey:te,slotKey:ne,substats:Y(Z({key:te,value:$(2)},{encode:function(e){var t=e.key,a=e.value,n=t.endsWith("_")?10:1;return{key:t,value:a*n}},decode:function(e){var t=e.key,a=e.value,n=t.endsWith("_")?10:1;return{key:t,value:a/n}}}))}),le=Y(Z({path:Y(X),value:Y(X)}),{encode:function(e){var t=[];return Object(q.c)(e,[],(function(e){return Array.isArray(e)}),(function(e,a){t.push({path:a,value:e.map((function(e){return e.toString()}))})})),t.filter((function(e){var t=e.path;switch(t[0]){case"character":t[0]="c",t[1]=M(U.c.indexOf(t[1]));break;case"weapon":t[0]="w";break;case"artifact":t[0]="a",t[1]=M(U.b.indexOf(t[1]));break;default:return!1}return!0})),t},decode:function(e){var t,a={weapon:{},artifact:{},character:{}},n=Object(H.a)(e);try{for(n.s();!(t=n.n()).done;){var r=t.value,c=r.path,i=r.value;switch(c[0]){case"c":c[0]="character",c[1]=U.c[W(c[1])];break;case"w":c[0]="weapon";break;case"a":c[0]="artifact",c[1]=U.b[W(c[1])];break;default:continue}var o,s=c.pop(),l=a,u=Object(H.a)(c);try{for(u.s();!(o=u.n()).done;){var f,d=o.value,v=null!==(f=l[d])&&void 0!==f?f:{};l[d]=v,l=v}}catch(h){u.e(h)}finally{u.f()}i[0]=parseFloat(i[0]),l[s]=i}}catch(h){n.e(h)}finally{n.f()}return a}}),ue=Z({key:X,levelKey:X,refineIndex:$(1),overrideMainVal:Q,overrideSubVal:Q},{encode:function(e){var t=e.level,a=F.a.findIndex((function(e){return t<=e}))<e.ascension?"A":"";return e.levelKey="L".concat(t).concat(a),e.overrideMainVal=0,e.overrideSubVal=0,e},decode:function(e){var t=e.levelKey;delete e.levelKey,delete e.overrideMainVal,delete e.overrideSubVal;var a=t.split("L"),r=Object(n.a)(a,2)[1],c=parseInt(r),i=F.a.findIndex((function(e){return c<=e})),o=r.includes("A");return c<0||c>90||i<0?(e.level=1,e.ascension=0):(e.level=c,e.ascension=i+(o?1:0)),e}}),fe=Z({characterKey:re,hitMode:ce,reactionMode:ie,constellation:$(1),overrideLevel:$(2),levelKey:X,infusionAura:oe,talentLevelKeys:Z({auto:$(1),skill:$(1),burst:$(1)}),baseStatOverrides:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:"sparse",keys:a,keySchema:e,valueSchema:t}}(X,Q),weapon:ue,conditionalValues:le,reserved:Y($(1))},{encode:function(e){var t=10*Math.round(e.level/10),a=F.a[e.ascension];return e.levelKey="L".concat(t).concat(t===a?"":"A"),t===e.level?e.overrideLevel=0:e.overrideLevel=e.level,"traveler"===e.characterKey?e.reserved=[G.indexOf(e.elementKey)]:e.reserved=[],e},decode:function(e){var t,a="A"===e.levelKey.slice(-1),n=a?e.levelKey.slice(1,-1):e.levelKey.slice(1);switch(e.level=parseInt(n),e.level){case 1:case 20:e.ascension=0;break;case 40:e.ascension=1;break;case 50:e.ascension=2;break;case 60:e.ascension=3;break;case 70:e.ascension=4;break;case 80:e.ascension=5;break;case 90:e.ascension=6}(a&&(e.ascension+=1),e.baseStatOverrides.characterLevel&&(e.level=e.baseStatOverrides.characterLevel,delete e.baseStatOverrides.characterLevel),e.baseStatOverrides.weaponLevel&&(e.weapon.level=e.baseStatOverrides.weaponLevel,delete e.baseStatOverrides.weaponLevel),e.overrideLevel&&(e.level=e.overrideLevel),delete e.overrideLevel,delete e.levelKey,"traveler"===e.characterKey)&&(e.elementKey=null!==(t=G[e.reserved[0]])&&void 0!==t?t:"anemo");return delete e.reserved,e}}),de={flexV2:Z({artifacts:Y(se),character:fe})};[null].concat(Object(V.a)(U.g));function ve(e,t){try{return"v=2&d="+R({character:e,artifacts:t},de.flexV2,null)}catch(a){return null}}function he(e,t){var a=function(e,t){var a=new z(e),n=T(a,t,null);return a.end(),n}(e,t),n=a.character,r=a.artifacts;return r.forEach((function(e){e.location=n.characterKey})),{artifacts:r,character:n}}var be=a(50),pe=a(14),me=a(1);function Oe(){var e=Object(K.h)(),t=e.search;if(t){var a=function(e){var t=Object.fromEntries(e.split("&").map((function(e){return e.split("=")})));try{switch(parseInt(t.v)){case 2:return[he(t.d,de.flexV2),2];default:return}}catch(a){return}}(t.substring(1));if(!a)return Object(me.jsx)(K.a,{to:"/"});var r=Object(n.a)(a,2),c=r[0],i=c.character,o=c.artifacts,s=r[1];return i.artifacts=o,2!==s?Object(me.jsx)(K.a,{to:"/flex?".concat(ve(i,o))}):Object(me.jsx)(je,{character:i})}var l=e.characterKey;if(!l)return Object(me.jsx)(K.a,{to:"/"});var u=function(e){var t=N.a._getChar(e);return t?ve(t,Object.values(t.equippedArtifacts).filter((function(e){return e})).map((function(e){return N.a._getArt(e)}))):null}(l);return u?(window.scrollTo(0,0),Object(me.jsx)(K.a,{to:"/flex?".concat(u)})):Object(me.jsx)(K.a,{to:"/"})}function je(e){var t=e.character,a=Object(o.useState)(!1),c=Object(n.a)(a,2),i=c[0],s=c[1],l=window.location.href;return Object(me.jsxs)(r.a,{className:"my-2",children:[Object(me.jsxs)(_,{onClose:function(){return s(!1)},show:i,delay:3e3,autohide:!0,style:{position:"absolute",top:50,right:50},children:[Object(me.jsx)(_.Header,{children:Object(me.jsx)("b",{className:"mr-auto",children:"Genshin Optimizer"})}),Object(me.jsx)(_.Body,{children:"URL copied to clipboard."})]}),Object(me.jsx)(E.a,{bg:"darkcontent",text:"lightfont",className:"mb-2",children:Object(me.jsxs)(E.a.Body,{className:"p-2",children:[Object(me.jsxs)(k.a,{className:"mb-0",children:[Object(me.jsx)(k.a.Prepend,{children:Object(me.jsx)(x.a,{onClick:function(){navigator.clipboard.writeText(l),s(!0)},children:Object(me.jsxs)("span",{children:[Object(me.jsx)(be.a,{icon:pe.m})," Copy URL to clipboard"]})})}),Object(me.jsx)(C.a.Control,{readOnly:!0,value:window.location.href,onClick:function(e){return e.target.select()}})]}),!1]})}),Object(me.jsx)(A.default,{character:t})]})}}}]);
//# sourceMappingURL=12.9a91ba5f.chunk.js.map